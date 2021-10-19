**Adam Stacoviak:** For the final show of 2018 I’m talking with Travis Kimmel, the CEO of GitPrime. Travis has spent years as an engineering manager, and at GitPrime, Travis' mission is to bring crystal clear visibility into the software development process and bridge the communication gap between engineering and stakeholders. This communication gap is often an ongoing plague in the product development lifecycle, and to get to the heart of who Travis is, I wanted to make sure he was comfortable letting his guard down and being a little vulnerable... So I asked him, "Travis, are you down with being vulnerable?"

**Travis Kimmel:** Broadly or right now?

**Adam Stacoviak:** Broadly, I guess... Right now too, sure.

**Travis Kimmel:** Yeah, sure.

**Adam Stacoviak:** You've been interviewed elsewhere, and I think your story is great... I wanna hear things like deeper parts of your journey, that you don't really share often. Almost therapy.

**Travis Kimmel:** You wanna hear like the dirty back-room stuff.

**Adam Stacoviak:** I wanna share whatever lifts you up, doesn't shame you, but I want people to know that you're real.

**Travis Kimmel:** Good. I mean, starting a business is tough. I'm happy to talk about it.

**Adam Stacoviak:** Whatever is in your journey that you can bring out. In a lot of cases it's a conversation -- I don't know a ton about you... I know that you've built this company, you've been a part of YC; I don't know a lot of the inner details around this, so a lot of this is me shooting in the dark. I just don't know.

**Travis Kimmel:** Great. Let's get into it.

**Adam Stacoviak:** Alright, give me a snapshot of your back-story that helps me have a frame of reference for this conversation.

**Travis Kimmel:** The only impetus for starting this company was that I was an engineering manager, so I'd run software teams - I'm happy to talk a little bit about origin story stuff, and all that... And I got pretty frustrated by the fact that -- there were a couple things. One, as a manager of engineers, it can be really hard to figure out how to do your job well. Because there's not a data layer there, it's hard to figure out if your team is thriving or not. So in order to manage effectively, you actually have to consume the time of individual contributors, so every action that you do in that vein is sort of destructive to the goal of productivity. So you live in this weird double-bind, and that's tough.

My view was that if we had better data, we could solve that problem, and people could be more effective and less destructive to the engineers. So that was the initial goal.

**Adam Stacoviak:** When you say "engineering manager", do you mean leading the engineers, or in product management? Because it seems like that can be an overlap. Which layer?

**Travis Kimmel:** Kind of all of it. Engineers get a fair amount of interruptive influence from all stakeholders, because one of the deliverables of management is predictability. If you're a manager, you've gotta deliver predictability to the rest of the business. Whether you're a line manager, or all the way up to the C-suite, it's part of the job.

\[03:32\] So all of those people sort of walk into the engineering room fairly frequently and ask what's going on. One of the things that's sort of unique to engineering - and I think other disciplines that handle a lot of complexity - is that interruptions are uniquely costly. You could burn half a day by being interrupted, because you're holding this big crystal palace in your brain, of abstractions... Then someone taps you on the shoulder to ask a question, and then you have to go piece that large construct back together after that, and it's very difficult.

So it's product, it could be the CEO who just kind of needs an update on how things are going, it could be sales... It's everyone.

**Adam Stacoviak:** Yeah, when the "magic makers"... Because in a lot of cases software engineers, to anyone who doesn't really know much about software - and it's not a knock against them; we all have our areas of expertise. A CPA should not know about software. And if they do, then I'd consider a new CPA. They should just know enough that it's worth investing into and agreeing with that it's a good thing to utilize... But not so much that they're like "I can \[unintelligible 00:04:42.09\]" because if they can, it's just silly.

But they kind of see that kind of role in a lot of cases like magic, because they just create things from nothing. Teams create things from nothing, from ideas, from business problems that are like "Wow!"

We came from an age where there was never a solution for that, to now we have not only a software and an interface with a solution, and now we layer in things like machine learning, neural networks, all this data-related stuff, AI... I mean, we've come to an era where we can wield software in such unique ways. And things like the cloud is there, things like the proper skillsets are there, the various languages, and frameworks around languages, and orchestrations around entire infrastructures are there... To the point where we can pretty much dream and build it way faster than Kevin Costner ever did.

**Travis Kimmel:** Yeah. And you know, the entire industry is these sculptors of mercury that can sort of invent anything we want... And that breeds its own class of problem, and it's sort of a new class of problem. When you can make anything, you have these problems around direction, and focus, and it's just a very different class of problem than other industries face. It's not an efficiency problem, it's sort of "Is all this work leading us in a direction that we as a business wanna go?" They are almost existential management problems...

When we talk to people about technical debt, it's like -- you know, it's sometimes hard to figure out if that's even a problem. All startups take on technical debt, and we do it very intentionally. And if you think of it as a parallel to financial debt, that makes a lot of sense. 90% of startups fail, so imagine someone could give you a loan that there's a 90% chance you would never have to pay back. That's good money, right? And technical debt is sort of a parallel to that. If you can move fast and increase your chances of success with a little debt, that's a good decision. It's very wild, very complex problems that engineers deal with on a daily basis.

**Adam Stacoviak:** Yeah, a point or two your brought up that I really like a lot is -- and I have personal history with being a product manager, and a product manager over engineers... That's why I asked what level you play at, because I totally empathize with you. Something I've always found interesting is things like focus, tech debt, and I never really thought about tech debt being similar to how we treat financial debt, which is pretty interesting. And then the other thing was predictability, because in the position of manager generally - over engineers or over product, and then therefore over engineers in some ways, too - is being able to report back with confidence and trust from what we often call "the other side", the business side, right?

\[07:58\] The people that are generally making decisions for us, that we somehow have to make magic with, and deliver, and then also keep them on that side - not so much that there is technically a side - so that they don't impact your ability to keep your team focused.

**Travis Kimmel:** That's exactly right.

**Adam Stacoviak:** Just because the executives, or C-suite, or whatever term we wanna apply to "those people", we can't let them infiltrate our ability to lead product and engineers to the point where we fail them. They can't come in and say "Squash this bug", or talk to them on the sidelines about a feature... We have to protect, and that means focus.

**Travis Kimmel:** Preach! \[laughs\]

**Adam Stacoviak:** Let's talk about focus for you, let's talk about focus in your story. Let's go back into maybe a role or a scenario that you can talk about where you were losing focus, or focus was paramount - how did you get it, and why was it important to you?

**Travis Kimmel:** Yeah, so I think a lot of the conversation around focus - we have a couple stories that we tell around here when we're thinking about doing product development. As a broad class, they're referred to as "the button stories."

The first one - I was on an engineering team where we got handed a requirement that said "The app needs a mute button." That was the whole thing. And we're like "Well, I don't really know what that means." So we go back, trying to track down requirements there... And sort of got told "You know what, just build it. How about you just build it?"

So this guy on our team looks at the ticket and he's like, "Sure, I'll take a run at it", and he went and spent three weeks building whatever he thought that was. We delivered it, and then the stakeholder comes back and he's like "Well, that's not really what I meant." Then over the course of three or four iterations of this and four months of engineering time, we took a few successive runs at it and then eventually the whole project was scuttled.

This to me was one of these things where it's not necessarily a person losing focus, but the business is lacking in focus. An engineer can build anything, and because of that, requirements are super-important. Because "Just get started, we'll figure it out along the way is not great when you're starting with a whiteboard and there's no real clear target." So I think a lot of times focus comes up as this thing that is sort of between people, and is the mandate of good management. Make sure that the people who are building stuff understand what the final build should look like... While giving them a lot of input along the way on structural soundness, and all the things that engineers do really well because they're engineers.

One other example of this is -- the other button story that we talk about is "the green button problem", where someone will make a ticket that says "Turn all the buttons green." An engineer will see that, pick it up, and they'll be like "Okay, great. I'm gonna get in there and do that, and while I'm in there, I'm going to refactor the entire templating engine... Because I've been meaning to get around with it and it's a nightmare."

The business sort of ordered (I don't know) half a day of turning the buttons green, and then what actually got delivered was three months of turning the buttons green. And the engineer in this story did nothing wrong. He did all the things that we want from people - they showed initiative, "When you see a problem, fix a problem", and really the deficit there is on the management side to see when that stuff starts to cascade into something that's not super in-line with what the business is looking for, and then kind of get in there and help reorient that effort... But it's very, very difficult to do if you're relying on anecdotal storytelling instead of some sort of data.

**Adam Stacoviak:** \[11:58\] Is it the job though of the person(s) that are leading the tickets getting in the system for an engineer to see in the first place, to make sure that ticket is or is not there, and if it is there, it has certain criteria that allows it to be there? Which is a whole different problem, right?

**Travis Kimmel:** Yeah.

**Adam Stacoviak:** The fact that it's there and they're showing initiative is one thing, but the fact that it's there, period, is a whole other...

**Travis Kimmel:** Yeah. From what we've seen, this varies a lot across organizations, and even if there's someone who does a really good job of grooming that stuff, and acting as a layer between stakeholders and engineers - which is awesome, and every business needs - you still run into these things where because the rest of the business doesn't really understand engineering, they accidentally create damage.

People with disproportionate power in an organization - C-suite type folks - can do this very easily without understanding what they're doing. They can sort of walk into the engineering room and say "Hey, I need a read on this thing that I wrote down in my dream journal last night, from someone who's technical. I've gotta know if it's possible." That type of interaction can just be very costly, and nobody prices it in, because nobody really understands the cost of an engineering interruption. So the business doesn't really price that in, and what ends up happening is that the engineers are expected to deliver things on schedule, while soaking all that brain damage as well... And we think that that stuff should just sort of stop. It's a pretty challenging problem, and a fun one to work on.

**Adam Stacoviak:** Let's talk about predictability when it comes to leading teams. I imagine - without getting into the larger story of GitPrime - that it really is about predictability, because I know that whenever I was in product management we didn't have... I wish I had more data. I knew I felt reasons, either intuitions, or I was in it well enough that I knew where we're trying to go, but I had nothing to back me up. It was like, my word, my bond, my trust was what was my data. And today I feel like - which is so funny, it's literally three years later when I say this... It's not like last decade I was leading product management; it's three years ago, four years ago maybe... And I feel like in four years we've leapfrogged what I feel like is just an entire decade; it feels like a decade.

The fact that we now have more ubiquitous access to data-related things at this layer, where they were sort of there before, or getting there, and if you really wanted to run Gantt charts, and burn down, and all these agile terminologies, you might get it, but man, it took a lot of work. You had to have a dedicated team, and a small team in a startup doesn't often have that. It takes, as you'd mentioned before, a lot of understanding on the business side of "This is what engineering is and does", and in a lot of cases I feel like data can give them more of that knowledge, with the right personnel in the management positions... Because if you can have your hypotheses about where product should go, how the team should be led, what they should be working on, and you have data - wow! Let's talk about that.

**Travis Kimmel:** \[15:32\] It's pretty awesome. Predictability is a really funny thing... It's definitely one of the deliverables that everyone expects management to deliver, and the less data you have, the harder that is. If you as a manager run an engineering team of 50 people, in a data-less environment you have to actually go interrupt those people and consume the time that they would use to do work in order to do your job, which is deliver predictability. That's super-tough, so managers often times exist in this double bind, where you don't really wanna consume the time of an individual contributor, but you kind of have to, to figure out if things are going well... And data can be a really nice layer over the top of that, so that you really don't need to interrupt people if you can verify that things are going well without doing that, so we love that idea.

It also has this ability to depoliticize a lot of the weird interactions that people have. If you're an engineer and you're down there in the data mines and you're hammering away, and then your hammer breaks and you're like "Ugh! Dang, I need a new hammer", then someone from finance comes in and is like "Yeah, well, this is a pretty expensive hammer. Can you explain to me the ROI of this hammer?" It's just very frustrating, right? As an engineer, you're like "I don't know, the ROI is that I can do my job", right? But if you have something to back that up, if you have something like "Well, look at this - here's a time series representation of when my hammer broke, and you can see here things were going slower, and then it got faster again when I got a new hammer." That's just powerful stuff, and it's stuff that other industries have - sales has that, marketing has that, and it's very empowering to the people who run management in those industries... And it has the knock-on effect of the people who work in those industries have the tools they need. This predictability, and feedback loops - all that stuff is just a super-powerful tool to be able to go advocate on behalf of your team. It's awesome.

A lot of us who have been in tech for a while have seen how sales sort of gets whatever they want, right? I think they rolled into the board meeting and they're like "Yeah, I need another five million dollars in budget next quarter", someone asks why, and then they reply with something like...

**Adam Stacoviak:** Data. Some sort of data.

**Travis Kimmel:** Yeah. They're like "I'm gonna compress the deal cycle time by 30%."

**Adam Stacoviak:** "Sweet. We can do that, no problem. You just imagine numbers."

**Travis Kimmel:** Yeah, exactly. They can make a promise, which can then be measured on the back-end, and that's awesome. If you as an engineering lead can say "Look, I need a month to pay down a bunch of technical debt. You're going to see us paying down technical debt, we'll have a picture of that, and then at the end of that the team will be moving much faster." That is a powerful thing, because you can make an agreement with the rest of the business, that they can understand and then verify. I'm preaching the gospel here a little bit, but our view is that it also has to be visual, because executives are super-busy and they tend to learn with pictures. So the first person to draw a picture wins; in an ideal world, what you want is you don't just want data, you want to pre-consume that into a visual that can be digested in 10 seconds. If you have that, it's awesome, because you can take those visuals, drop them into a slide deck, hand them to somebody who has very little attention and is only gonna spend three minutes glancing over whatever you give them, and make a powerful case.

**Break:** \[19:24\]

**Adam Stacoviak:** Being able to communicate back to management with predictability is the hardest thing, you're right. You hear of other teams that can get more budget, get more time, get more anything... Get more leeway, by saying "Well, we can grow by this", and as a manager in engineering traditionally you haven't been able to. Or if you did, if you were able to, you had to do a lot of work.

Let's talk about technical debt, because you'd mentioned before about this idea of technical debt being similar to, say, financial debt, and using that wisely. Can you dig into that a little further?

**Travis Kimmel:** Yeah, I love that we've called this technical debt. It's just such a great metaphor.

**Adam Stacoviak:** Yeah, it is.

**Travis Kimmel:** It's a perfect match, because if you've ever taken on debt personally or as a business - it's awesome, it gives you some lift; then the paydown is a bummer, and if you take too much, it kills you. A little bit is medicine, a lot is poison. And if you dig into that metaphor deeper than we usually do when we talk about technical debt, and you think of it in the way you would think of financial debt, it's no wonder that all startups have technical debt. It's actually the smart move.

Most startups fail. 90% of startups, or whatever it is, fail. So if you think of it as "Hey, we're taking on a loan that there's a 90% chance we'll never have to pay back, and by taking on this loan we will increase our likelihood of succeeding as a business", that's great money. You've gotta be careful not to take on too much of that; in the event that you succeed, you do have to service that debt... And just like you model out -- you know, most businesses of any sufficient size run a business model, so that they can think about debt in a very methodical way. You model out when you're gonna pay down the interest, when you're gonna start paying the principal... And I think if we start thinking about technical debt in a similar, very methodical, very disciplined way, we can start to think better about how much it actually costs us. "Oh, it's gonna cost 30% of our engineering capacity for the next year." That is a thing that people who are non-technical can understand. And if we have data to back that up, if we can look and say "Oh, I can see the action here of paying down technical debt as distinct from all other work, and we can measure how much of our bandwidth is going to that", then technical debt stops being this spectre that haunts the boardroom...

\[23:48\] The CTO comes in and talks about technical debt and everyone rolls their eyes, because they believe that it's just air cover for -- I don't know, whatever, but there's really not a shared understanding there. If we develop a shared understanding and we do it in a way that is as disciplined as we think about financial debt - again, very, very empowering for engineering, because now we're all having a shared conversation and we can have agreements around "Well, yeah, this actually does look like a problem. We wanna focus on paying down technical debt for a period of time." And the CTO can then say "I need to pay down some technical debt" in a way where the rest of the org doesn't hear "Engineering is taking time off." Because when engineering stops shipping new features, that's what everyone thinks it's happening, and it is super-unfair. And there's really no way to get around that. It erodes the leader's political capital, and it's just difficult to speak to your peers when you're in engineering leadership when you're relying completely on political capital and woo instead of data.

**Adam Stacoviak:** What exactly is technical debt though? I feel like coming from an angle of having been in management before, in a position of product manager, I felt like my core deliverable in lots of cases to get trust was setting expectations - a variance of predictability, right?

**Travis Kimmel:** Yeah.

**Adam Stacoviak:** Because an expectation is just a variance of predictability. What I say is gonna happen, is gonna happen. If I can set your expectation of this or that, then whatever, great. But when it comes to technical debt, what exactly is it? Set the expectation there; what do you define as technical debt?

**Travis Kimmel:** That's a great question. Technical debt is something that is being inadvertently promoted by things like the lean startup. The lean startup says "Get to market as quickly as you can and start getting feedback from your customers", and broadly, that's right. But when you say "Get to market as quickly as you can", I mean, you can get to market pretty fast.

**Adam Stacoviak:** Yeah, people take it very literally.

**Travis Kimmel:** Yeah. So you stand up a very simple application, you're probably using a framework - Rails, Django, one of the common ones - which is in itself a light form of technical debt; it allows you to stand up an application very quickly, but that application by its nature is generalist, it is not customized to the business case that you are building toward, and that is a little bit of technical debt. Because if you took the time to build a very customized application from the get-go, it would take a lot longer (a LOT longer), but it would be aimed exactly at the business case that you're building for.

What lean says is "Until you get feedback from customers, you can't even be sure of the business case that you're building for", and it's right. That's just right. But it definitely promotes us taking on technical, so the next step is -- in our case, for our business, we have a parser that parses data out of Git. So when we first stood that thing up, we were looking out there and we were like "Oh, there's a library that does a fair amount of this work. It gives us some nice abstractions, and some other things." So it wasn't quite what we wanted, but we dropped it in because it got us to market really quickly.

Now, you fast-forward down the road and we're having conversations about -- now we have a bunch of customers, we're in market, the ship is moving, and we're having conversations about rewriting our processor, which is like the core of our business logic. And we have to work around this module, and sort of rebuild it, and bring it in-house... That is technical debt in motion, and it is completely unavoidable, everyone will always do it, because it's a smart play, and fortunately around here we have pretty candid and open conversations about that stuff. The engineering team can come to the table and say "Look, we've gotta tackle this right now, or it's gonna be harder to tackle in the future if we defer the debt." It's like, you take one credit card, and you open up a new credit card and you pay it off with the other one. And really what you're doing is you're just increasing the total amount of debt.

\[28:05\] So when engineers come to the table to advocate for "Hey, we've gotta tackle this now", what they're saying is "We can't just keep deferring this debt, or the problem will snowball", in the way that financial debt can snowball and bankrupt you.

Again, all startups will all run into this forever, because getting to market quickly is so valuable... But getting to market quickly is also the thing that causes you to incur debt, and our view is that management needs to start pricing that in as part of the cost of doing business.

**Adam Stacoviak:** I guess then the question is if all software teams are going to incur technical debt, how do you do it wisely? So is the data - what we were talking about, things you and I haven't had traditionally and now we tend to have, obviously, from GitPrime and other tools out there that are similar, to saying "Hey, here's surface-level data of what you're doing in engineering..." How do you take on technical debt in a wise manner? Because if it's gotta be there, then you've gotta make decisions around how it's gonna be there, and then defer it and/or eventually maybe pay it off, if you don't fail... How do you do that? How do you decide wisely which technical debt to take on?

**Travis Kimmel:** I think in the beginning you don't. I think this mirrors other debt practices, or finance practices, I should say. Most startups in the beginning are fairly undisciplined, if we're being honest. There's a big bucket of money, you're looking at that waterline and you're like "That thing can't go to zero or we're dead." That's the level of sophistication that a lot of companies start with.

**Adam Stacoviak:** You're assuming they're VC-backed though, or seed round even. What about the bootstrappers?

**Travis Kimmel:** Sure. I think the same logic applies. It doesn't make sense to have a lot of finance sophistication early on, unless you just sort of happen to have it from your career anyway. But even then, you're probably not deploying that on the day-to-day, because getting to market is just a different motion. And then as the business progresses, you get incrementally more sophisticated about finance. At some point you probably have reporting requirements outside, at some point you're running a model to increase your predictability... And I think if we look to how technical that should be approached, it's probably very similar... Would be our view.

In the beginning, just get that thing out there. Lean is right. Get it out there, don't worry about the technical debt. As soon as you start getting some traction, as soon as you realize you're one of the 10% that succeed, that's when you need to start thinking about when you're gonna pay down the debt.

What we see organizations doing when they have data around this stuff is thinking about it as a percentage of the engineering bandwidth. They'll say "Look, we're gonna carve off notionally 20% of the team, and they are just gonna focus on servicing the technical debt and forward-thinking stuff, making a roadmap of the technical debt that we will have to pay down, and socializing that stuff with the rest of the org ahead of time." Because similar to finance stuff, if you walk into the boardroom and you're like "Oh yeah, we didn't realize this, but we're actually insolvent." \[laughter\] That's terrible, right?

**Adam Stacoviak:** "We didn't realize that..."

**Travis Kimmel:** Yeah. And then there's a scramble to raise money, or whatever. And then often times engineering teams will do the same thing. There's just this motion of deferring stuff, and you roll into the boardroom and you're like "The entire thing is on fire. We need three months of not shipping any features to tackle this", and that is not good.

\[31:52\] So if you can provide a roadmap of things that will need to be handled at some point, and then an understanding of the consequences of what will happen if they don't, that is the equivalent of a financial model. If you can look at the debt that you're carrying, borrow a bunch of money... It's like, "Okay, we need to start paying this down here in the future", and let's say you borrow a million bucks - you can start to say things about that debt... What that means is that a year out from now we will be able to hire two less people because we will be servicing the interest and the principle, and that is about \[unintelligible 00:32:28.04\] If you can frame things like that on the technical side, where it's like "Look, yes, we can kick this feature out the door super-fast, but what it will mean is that six months to a year from now we will need to allocate two engineering headcount to fix this for a year."

That is a decision that everyone can understand and participate in. The sales team can participate in that, the marketing team can participate in that... You don't have to be super-technical, because what you're talking about is these things that every industry faces; you're talking at the meta structural layer there around planning and business that everyone understands. And if you have enough data to bubble things up to that level, it's just very powerful.

**Adam Stacoviak:** You just mentioned two of the teams, and getting them involved, and I think that's the magic of somebody in a product manager or engineering manager role, where their job in a lot of cases is to be a futurist, right?

**Travis Kimmel:** Yeah.

**Adam Stacoviak:** ...to have some self-assurance that they can get there. Not "they" just them, but they as a team... But then also be able to speak a language, and an invitational-type person that says "Marketing is welcome to the table, sales is welcome to the table. Here's how I can get you involved..." Which may or may not dovetail into some things we can talk about, but I just wanted to mention that a product manager's job (or engineering manager's job) is like an entrepreneur inside of a company.

**Travis Kimmel:** Yeah. An entrepreneur and also I think a real -- to me, the essential thing about product is you have to be a force for synthesis. You see occasionally when that goes wrong, any form of brinksmanship when you're running product management is usually bad. You really don't wanna be creating A or B style conflict too much, because you miss out on good ideas. If somebody's talking to you, it's because they have something to contribute. Now, they may not be expressing it well, because maybe that's not their job, but you've gotta figure out what that little nugget of goodness is and incorporate it into the idea.

And to your point - planning. \[unintelligible 00:34:36.26\] roll the goodness that they have in. If a product manager can be a little less Klingon, a little more Borg... You really wanna be this force for just incorporating all the good ideas, synthesizing that into a whole, whether that's on the product itself or helping everyone understand how the company is delivering stuff to customers. It's super-important.

**Adam Stacoviak:** It also made me think about something else, and tell me if you agree with this... I think if a lot of people, especially in today's world, they see people who seem to potentially come from nowhere and create something, and next thing you know they are getting what they want, they've succeeded - that's just a real quick version of maybe the journey of an entrepreneur... And I'd say - or at least I thought in the last segment here - if you wanna be an entrepreneur, go lead product for a bit, right?

**Travis Kimmel:** Yeah!

**Adam Stacoviak:** Or learn to lead product for a bit, and that's gonna be your proving ground to say "You know what, I could probably do this pretty well. Let me step away and do my own thing", or "I like leading product so much I have to stay in this role, because I have the comfortability of 'a cushion job, or a predictable job', that I can do both and not take on the risk." I just wanna earmark that, because that's what I think of when I see that kind of role... Because it really does prove you whether you're right or wrong, in that position, to lead.

**Travis Kimmel:** \[36:06\] I'm with you. I personally agree with you. I think there's so many ways to build a company, and the longer I'm in this game, the more respect I have for all of the functions in a business. Sales is amazing, marketing is amazing, product is amazing, and if you're gonna go be an entrepreneur and start something, you can start a company with a background in any of that... And the nature of the background you have will hugely impact the company's culture.

I'm a big believer in the product staff, and I think what you get from doing a tour of duty running product is -- you actually just get a lot of compassion for a lot of different people, because you have to interact with them a lot, and if you're gonna be good at that role, you have to understand where they're coming from. That is a very powerful way to build a business.

I also think a sales background is a very powerful way to build a business, because there's nothing quite like a CEO with a sales background when it comes to raising money. They are really good at that. And I think stylistically, sales background CEOs create just a slightly different style of company, which is also a really fun kind of company... But for my money, I love having a product background; it's just awesome. You can really take the time to sit down with people, understand what they're trying to contribute to the conversation... Because it's been a career skill if you've run product.

**Adam Stacoviak:** Tell me what you mean by "a sales background CEO", and the magic there of like either fundraising... Why is that kind of person with that kind of background more capable than someone without a sales background?

**Travis Kimmel:** I don't have a sales background, so some of this is just me observing other CEOs who do, and how they're kind of different from the way we run. The power there is that -- you know, raising money is a sales process. You're selling a piece of the company, and there's a negotiation side to it, and often times, entrepreneurs will run that like a sales pipeline. You'll run a process, you'll get a bunch of leads, you'll qualify them, you'll move them through a pipeline, and the end of that is a transaction. The motion of raising money is very sales-like, so the advantage that a sales CEO has is that's all just very familiar. They're very good at reading signals; reading buying signals...

I'm constantly getting educated by our sales team on things that are not necessarily intuitive if you don't come from a sales background. One of the things that I've learned about that is if you contact somebody and they send you a long email reply about why your product is all wrong, or whatever - that's actually a buying signal... Because they took time - which is very valuable - and wrote you an email. So if you have a really intuitive understanding of that as you go into a fundraising process, that's very powerful.

Obviously, you have to go out and sell, and convince people, and all that stuff, but it's also just that the motion of going out and raising money - it's a sales motion done right. So I think there's a big leg up there.

I also think that sales CEOs, from what I've seen, intuitively understand two other big things, which are culture and process. A sales team of any size tends to be very process-driven, and that's awesome. And if you can bring that native understanding into building a company, that is a big advantage.

\[40:06\] There's also culture -- like, since salespeople are pitching a lot, there's invariable this culture around how we pitch and who we are that is very important, and adds a lot of meaning to work when you're doing what can be kind or repetitive stuff. You're running a sales process over and over, and so the culture is super-important, and the sales CEOs that I have met really understand how important it is to make sure that everybody in the company gets the Why... Like, "Why are we doing all this stuff?" Not just "What do we do?" but "Why are we bothering to build this company?" Those are all big advantages of the sales background CEO, from what I've seen.

**Adam Stacoviak:** And do you think that product-driven CEOs like yourself don't bring that? Or they just bring less, or a different angle of it? Because you mentioned DNA too in there, and I'm just kind of curious how the DNA of the leadership, or the founding leadership trickles into the culture and the company.

**Travis Kimmel:** You know, everybody starts with a skillset that's like unconsciously competent for them... And I don't think that product background, or frankly engineering background CEOs necessarily start with those other pieces that we just talked about.

Speaking for myself, I certainly did not have a deep understanding of the sales process prior to starting this company, and I'm learning more and more every day... And I certainly didn't bring that to our initial series C fundraise. I brought the product naiveté to that... \[laughs\] I was like "Obviously, what we're building is amazing. We will tell people what we're building, the clouds will part, the heavens will be revealed, they will immediately see the value, and they will rain money..." That turned out not to be true. \[laughs\]

I think if I had had a sales background I would have known at the outset that that was just a little bit foolish. Again, it's just trade-offs. I personally am enjoying having the product background, because we also tend to approach a lot of problems by making stuff. When we were a young company and we were trying to figure out how to do marketing, we were like "I don't know, let's make stuff and give it to people..." Because we make stuff, that's what we do. So we started making content, and we were like "Well, what are the things that we can make, that we do a good job at, that we could hand people, that they would appreciate?"

We started a weekly newsletter that was not -- we weren't selling anything, we were just finding good, valuable stuff that engineering managers would benefit from reading, and then emailing to them. That kind of stuff is where I think the founders really sculpt the DNA of the company. You run into a difficult, "How do we solve that here?" and because the founders are the only ones in the early stages of the company, that stuff gets kind of like myelinated. There's these pathways that get run over and over and they become part of how that company approaches problems.

**Adam Stacoviak:** I wanted to start transitioning some to your background... Not so much the things we've talked through, but in particular GitPrime, just to kind of give a frame of reference obviously of maybe your journey. You mentioned seed round funding, you mentioned series C... At least based on Crunchbase, I'm only seeing a series A, so maybe you're thinking further into the future than it's true, which is fine... But I wanna track where you're at. Help me understand potentially where GitPrime is in terms of -- maybe not even funding, but just where you are as a company.

\[44:08\] You started in 2015, you mentioned a background in management and engineering, so I'm assuming that the company you founded is in place because you were in the thick of it, you were in battle, you were in the trenches, without the proper or necessary tools to give predictability to somebody. Is that true?

**Travis Kimmel:** That is quite true.

**Adam Stacoviak:** Okay. So where does it go from there?

**Travis Kimmel:** Well, let's cycle back one more step... I was a programmer for a while, and I got into managing the way that I think a lot of engineers do, which is someone walks into a room full of ten engineers, and they're like "Uh-oh... That's too many engineers." And they wait for one of them to make eye contact, which is the most extroverted one, and they're like "You! You're a manager now!" \[laughs\]

**Adam Stacoviak:** Do not make eye contact...

**Travis Kimmel:** Exactly, don't make eye contact! It's a mistake! \[laughs\] So that's how I got dubiously elevated into management, and then discovered that I actually kind of liked it... I didn't have any training there, and I think a lot of engineering managers don't. So I just read some books, and whatever else, and then I took this approach that, well, you know, my goal is first "Do no harm, try not to do any damage", and then second "See if you can be a force multiplier for the team." That worked pretty well, and it pushed me rapidly into this need to have some actual data, because the first do-no-harm thing is rough in engineering.

We've chatted about this a little bit, but the unique cost of interrupting an engineer makes that a tough ask. And then "Act as a force multiplier for the team" is similar - you've gotta figure out if you have 50 engineers "What do I do today to make someone's life better, and ideally without doing any damage?"

So I started collating data in the spreadsheets, and that kind of stuff, and then acting as sort of this crap shield for the team, which I think is very common in engineering, where you sort of take all the hits so that you can protect the engineers' ability to work. And in all of those roles I found that having meaningful data would have been awesome.

The key there is "meaningful data." You can bolt stuff onto GitHub, or BitBucket's API and extract a bunch of data, lines of code written and all that, but there's not a lot of meaning in that. There's not a lot of signal, it's a lot of noise. So I really wanted to get some data that was actually relevant to the work we were doing... So I just sort of seethed for a while about the fact that others \[unintelligible 00:46:59.00\] thinking about the next thing, and messing around in Adobe Illustrator, or something... And this guy who I had known at a co-working space comes in and he's like "Hey, what are you working at?" I'm like "I have this idea..." He's like "Huh! That's a pretty interesting idea, but boy, you are really bad at that. No one's ever gonna be able to use this because it's so hideous. I mean, I kind of see what you're going for, but it's ugly." And that was Ben, who became my co-founder... \[laughs\] He was very good at that stuff.

**Adam Stacoviak:** Yay! Honesty. That's a good place to start.

**Travis Kimmel:** Yeah. It was just pure pity... He came in and he was like "Why don't you let me show you a few things and kind of help you with this?" So \[unintelligible 00:47:49.12\] I'm like "Dang, that looks awesome! I would love to have that!"

\[47:54\] So we played around with that a little bit, and over the course of a few months stood up this super-lightweight prototype, proof of concept style. I got involved with this other guy John, who became our first board member down the road, and he was like "Yeah, this is pretty interesting, but I actually think there's a company here."

From that point we raised a seed round, which was to operationalize the prototype... A prototype that you can drag stuff into on your desktop is really not that saleable, so we spent about a year standing up something that people could connect to very easily and load their own data in there... First we kicked that thing out the door.

The minimum viable product thing - I think initially we had a questionably viable product... \[laughs\]

**Adam Stacoviak:** A year later, or months later?

**Travis Kimmel:** The very first build was probably 6-8 months later, and it was terrible. The page took two minutes to load. It was just obnoxious. And then, to our surprise, someone paid for it. \[laughs\] Like, "What...?! This is crazy."

**Adam Stacoviak:** Are they still a customer?

**Travis Kimmel:** We stay in close touch. He is no longer in the gig he was in, but yeah, we stay in close touch. We flew out there and met up and we were like "What did you like about it? Why did you buy this thing?" The read there was that the pain was just so extraordinary that people would wait two minutes for the page to load, and pay for it.

We had this really lightweight launch, we didn't really do anything about it. We weren't really out there selling it, we were just sort of letting people in. I think at the time we didn't even have a way to charge -- we had a bunch of payment functions that we didn't have. We couldn't log people out of the app if they didn't pay, because we hadn't built that feature yet.

**Adam Stacoviak:** That's funny. People often forget that even account deletions... Like, simple customer service stuff that will just plague you, drags the team down because of a common functionality like paying for it, or whatever is like...

**Travis Kimmel:** Yeah, you've gotta build it.

**Adam Stacoviak:** ...well, "We've gotta build that." And there's whole services around that industry now, or that part of product now. So that's another form of technical debt. You can use a service, and then eventually you move that in-house, or not. I won't derail your story, but that's interesting, just to think about that part generally.

**Travis Kimmel:** Yup. So we incurred a bunch of technical debt along the way, got into Y Combinator. We did that winter '16, which was awesome. I mean, the cool thing about Y Combinator is that they do a really good job of giving you a professional network out of nowhere, a powerful one. Everybody has whatever professional network they have, but often time entrepreneurs are so heads down building stuff, or whatever, that you don't -- we're not necessarily out there doing career development, because we're maniacally pursuing our ideas... And Y Combinator just drops in a beastly network, and it is awesome! They're really, really good at it. So we were very fortunate to get in there.

We did that for three months, and at the end of that we ran socially into this woman Lihong. We were having dinner with her, and she was like "Yeah, I've looked you guys up..." At the time I was pitching her husband - who's awesome - to invest. He was like "You've gotta meet my wife, Lihong." So we go over, we were having dinner, and she was like "I've looked into you guys and I really like what you're doing, I really think this is awesome, but you are terrible at selling. Like, you're the worst. You're not even trying to sell. You're not even order-taking." I'm like, "Whoa..."

**Adam Stacoviak:** "These people you're working with, Travis, are really trying to be your friend..."

**Travis Kimmel:** \[52:00\] \[laughs\] Oh, my god... It was just this beatdown; for 20 minutes she was just like "Oh, you're so bad...! There's all this other stuff you're not doing, you're not even calling up..." We did not know a lot about sales, so we would email people and be like "Hey, do you wanna buy this thing?" and they wouldn't reply, and we'd be like, "Oh, they hate us." \[laughs\]

So I was just talking to her, she was telling me how terrible we are at it, and I'm like "Well, geez, why don't you run it?" And she's just like "Maybe I will." That sort of snowballed into her joining the team as Chief Revenue Officer when we were -- you know, we're still very tiny at this point. She joins the team, drops in, legit sales process, all this stuff that great salespeople know. Lihong is also just very strong.

Then she started running sales, and that was transformative. She was right, we hadn't really been selling. We were just sort of giving tours of our \[unintelligible 00:52:57.25\] and the challenge - particularly when you have a product like ours, that's a little bit of a new category... I mean, there's parallels out there and stuff, but instrumenting the people side of an engineering team is sort of a new idea, so there's a fair amount of work on the sales side to help people understand "Okay, what is this thing? How do we use it? How are other people using it?" and that requires a strong sales motion.

That was middle of '16... There's a lot of stuff in the middle there, \[unintelligible 00:53:35.17\] we kept ramping... And then we raised a series A earlier this year, and doubling down on fleshing out the product and growth. It's a whole new phase of the company. One of the curious things about being a founder is every few months you have a totally different job description. You've gotta keep adapting, and hopefully you like learning, because we signed up for a lot of it.

**Adam Stacoviak:** Yeah, that's why I say it's kind of interesting. I feel like a micro version of that happens in the product manager/engineering manager world, enough to give you some thicker skin and/or preparation for thicker skin, and then when you're actually in a role, if you ever step away and start your own thing or run your own thing, you get really adept to it.

**Travis Kimmel:** Yeah.

**Adam Stacoviak:** I'm interested because I do have a sales background, I have a marketing background as well, and a design background, so I bring a lot of unique differences in different disciplines where I feel like I have a level of expertise to our company... And I was really curious of your perspective on that, because you're kind of speaking my language in a lot of cases. I'm not a master salesperson by any means, but I'm a helper, and you know, it kind of depends on your angle.

I'm kind of curious what you mean -- Lee is the first name, is that right?

**Travis Kimmel:** Her name is Lihong. That's her first name.

**Adam Stacoviak:** Lihong, okay. What did she do to professionalize or upgrade your sales? What were the basic mechanics of - if that's so important and you were doing it so wrong, that she had to be so honest? What was -- don't camp out on the wrong, camp out on what she implemented and how long it took, and the impact to your business.

**Travis Kimmel:** Yeah, so day one was "We need a CRM." \[laughs\] I think we had a bunch of emails, and there was no organization going on around sales... So step one was stand up all the tools.

\[55:51\] Then the second thing was a sales team needs roles. It's not just one role that does all the stuff. There are people who are kind of the first contacts, right? SDRs - sales development representatives is usually what they're labeled, or BDRs... And their job is to do everything from outreach, and be ambassadors of the company, and make sure that they sort of represent -- it's sort of like first contact. Like, you're meeting an alien species - send in someone who can communicate with them in those prime numbers... And SDRs server that function.

**Adam Stacoviak:** An ambassador, yeah.

**Travis Kimmel:** Yeah, exactly, an ambassador. SDRs serve that function, and it's a different function from sales. So mapping out these roles, like "Here's how we're gonna grow the sales" or "We're really leanly staffed right now, so we're just gonna start with these roles." Over time, building that out into a modern Salesforce, that has all the right practices.

You know, things like often times if you're selling to somebody who is a manager in a corporation, you need to bear the entire load/burden for all of the communications. You'll email them, they'll want to reply, won't have time, it drops below the fold in their Gmail inbox, and they never remember it again. So when you email them again, often times that's doing them a service; you're not bothering them, you're doing them a service.

When someone who's good at sales comes to the table with an understanding of all this stuff, because they've been doing it for years -- she just ruled out a lot of that... Like, formalize how we sell. "This is what people need to understand when we're talking with them. They need to understand why we built the product, they need to understand who it's for, and every single person needs to understand that." It can't be "Sometimes you get on the phone, and you have a good day, and you tell a great version of that", which is sort of how founders who are not salespeople tend to do that. It's like "Oh, I was really on on that call!" And a good Salesforce is on on every call, because there's a format for it that works, because all of your buyers need to understand some set of things about you, and a great sales leader can go out into the field, find out what those things are, come back, put that into a process, and now everybody's having a great day, on every call, all the time.

Not having a sales background, and not having a marketing and all these other backgrounds is just -- I've been humbled to watch how powerful it is when great people lead these teams.

Some of the engineering teams I was on previously tend to sort of poke fun at sales, and sales pokes fun back... And there's just so much impressive work that happens on the sales side, just like the engineering side, and just like the marketing side, that I think it's fascinating to learn about that stuff.

I always encourage storytelling inside our company on things like that, whenever someone has a big win, just kind of sharing that with the team, because it's -- everybody's doing a lot of lifting all across the company; even if we don't always understand the nature of that work, it's all very complex, and building a company out of that many moving parts is awesome.

**Adam Stacoviak:** There's two core things you have to do, right? One is you've gotta build something, and then you've gotta sell it. There's obviously marketing in there, and all sorts of sub-roles, but those are two core things you do as a business: you build something and you sell it. You can't break that down really any other way, so I feel like those two teams are - which is why in a lot of cases I camp out in those areas on a show like this... Because all too often we misunderstand or not understand well enough how important those two roles are.

\[01:00:10.28\] What did you do to formalize? Establish a CRM, establish different roles in sales, formalize multiple contact points, because yeah, you don't wanna be that person who's emailing again, but if you do it the right way, you can get in and make a friend. The idea of ambassadors "We come in peace" kind of things, you know?

**Travis Kimmel:** Yeah.

**Adam Stacoviak:** And in a lot of cases, people email and cold-calls amazing, and you get through, and then other ones are just terrible. And not all sales or ambassador-related calls are cold, so to speak; in some cases it's partnerships, in some cases it's actual sales, and you're selling something, but those roles are so crucial to a startup that we tend to only pour into engineering, or we tend to only pour into certain particular buckets that we're familiar with or comfortable with, and it sounds like your story revolves around being uncomfortable a lot, and being told \[01:01:10.24\] which is kind of funny that you're still here...

**Travis Kimmel:** I think the important thing is to hear it. When someone calls you down, you've just gotta hear it... And it sucks, but it's also good news, right? If you've gotten as far as you have, wherever you are - maybe just starting out, or whatever - but you've gotten that far sucking... Which means that if you stop sucking, you will be more powerful.

So when someone comes in and says "Hey, you're terrible at this", that's actually the good news. There's something to fix, it means you're under-optimized, it means you capitalize on that and do more, better.

**Break:** \[01:01:54.23\]

**Adam Stacoviak:** Travis, you've obviously had some struggles... You're building a company, you've been told that you're not doing well in some cases, and some people have become your partners and co-workers and investors in your future, and I'm just curious about -- not so much about your role, but you personally, how you've personally taken these things, which often might bring you down, how have you been elevated? And maybe some of the personal struggles, whether it's depression, whether it's isolation, whether it's impostor syndrome... You take us wherever you want to. Help me figure out how you were personally impacted by building this business, in positive or negative ways.

**Travis Kimmel:** Yeah, well I find that most people who come out of engineering really like being right. We're that tribe, the math tribe, or whatever...

**Adam Stacoviak:** It's one or zero, right?

**Travis Kimmel:** Yeah, exactly.

**Adam Stacoviak:** Come on, it's simple.

**Travis Kimmel:** \[01:03:44.19\] And I've found-- the funniest thing about growing a business is being wrong over and over again. Whatever beliefs I hold right now in this moment, that I think are super-right, I'll probably find out in the next year that I'm wrong about. One of the things very early on that I was very convinced about was "Meetings suck. Meetings are the death of productivity." And I still sort of hold that view in a warm place in my heart... \[laughs\] But I've also learned that you can have too few meetings.

And we did that for a while, because I was being a fascist about not having meetings, and all of a sudden the organization is confused about itself, because people aren't talking enough. I think we're still in the middle of this particular transition right now - learning how to have just the right amount of meetings, and elegant communication, and that kind of stuff, and not over-emphasizing kind of heads-down work... Because you can run headlong into a wall, or somebody else, as you get more and more people.

The bigger thing there is that business grows so fast, and it requires more of you than you can give. And if you are of the ones that's gonna succeed, you'll try to give it anyway, and that is a growth-inducing stimulus. It's just a total beatdown, all the time, in the same way that going and working out every single day would be kind of a beatdown... But you get stronger.

Trying to give more than you have generally results in you realizing that you need to be better at stuff, you need to have more to give. In a nutshell, that's been my experience of building a business - there's just this constant demand for personal growth at every level. You need to be a better person, you need to be a better communicator, you need to do a better job at things that you probably don't like. If you don't like public speaking, that's probably the next thing that you're gonna have to push through. Whatever it is that has been a part of your identity, as a thing you don't do, is about to be destroyed.

I think a lot of people find that to be very demoralizing, and I agree with that. It can be. But you kind of have to turn toward that and not overthink it, and just focus on the next thing that you can do to push yourself in that direction... And then when you look back, you've chained a bunch of that stuff together and you're a bigger, better person for having done so.

**Adam Stacoviak:** I like that. In one part I'm scared as all heck of what you've just said, because it's so true, and I think there's portions of this show that's gonna speak to people in your position or my position, in roles of being a founder, or a CEO, or a leader, and then there's the future leaders of software and businesses that are like "What am I getting into? Oh, my gosh, this is crazy!" But we need to hear that, because it's the expectation that I think is pretty important to understand.

You can jump blindly into entrepreneurship, start building a company, potentially even think that venture capital is the only way (where there's other ways, too), and you just start making choices based on what you think you should do because somebody else did it... And you don't really understand what the ramifications are of those choices, and/or what's gonna be required of you personally.

Something you said earlier was that being told you suck is the good news. Break that down.

**Travis Kimmel:** I mean, if someone comes in and they are passionately telling you that you're bad at something - you should always listen to that. Well, you've got two choices. You can either be like "Get out of my office!", and they will, or you can sort of take it to heart. And "take it to heart", for me at least, doesn't mean acting on it immediately, probably to the chagrin of a lot of people that I work with currently.

\[01:08:11.27\] If someone comes in and says "Gosh, we're really failing at this as a company." I'm like, "Okay, that's a data point. I'm gonna look into it, and I'll do a little bit of legwork, and be like "Okay, I think I understand what's happening here." And then if you hear that a couple different times, from a couple different sources, maybe a customer, and it starts to bubble up, you realize that like "Okay, I have verified we do suck at this, and now we've gotta do something about it."

I think the thing that can be dangerous, particularly as a founder, is believing too much of the story you are required to tell. When you're in a founding role -- startups are small, there's a lot of risk... People need to know what the path forward is, and you've gotta paint that path forward, and make sure that everybody understands what the next couple of years looks like. So if you suddenly discover that something is wrong, something's broken, and that thing affects that path forward in a meaningful way, it's very tempting to just keep telling that same story about the same path forward... Because in a way, you're out there talking about it, you've committed to it, right? You told everyone this was the way forward, and everyone's looking at your for specifically that, for the path forward.

I think it's very seductive to just keep telling that same story and not update it, instead of turning toward the thing that's broken, analyzing it, dissecting it, incorporating that into a new version of how we go forward, and then getting out there and telling that new story, taking it on the chin that you were wrong, being like "No, we've gotta adjust", paying the cost of that... You do too much of that and people start to worry whether you know what the hell you're talking about; you do too little of that and people think you're full of it...

Riding that little thin line in there is the thing that I think is definitely worth investing in. It's definitely one of the main jobs of founders and CEOs and people who are leading teams. It's really one of the main jobs with leadership, to just show people what's coming next. So when you get this feedback about like "You suck at something" or "The company sucks at something", navigating that in a way that's not so sudden that it creates continual brain damage for everyone, but also not head in the sand. It's tricky, and it's a skill worth developing.

**Adam Stacoviak:** Zooming out a little further, given what we've talked about in this conversation, what do you feel like has been - and I'll give you a choice; you can take us in a fork - either a struggle, or a lessons learned. And kind of zooming out a lot on what we've talked about, \[unintelligible 01:11:18.08\] lessons learned that we've kind of already covered to some degree, lots of struggles we've already talked through as well... But you've evolved as a person, as a role, and I'm curious - maybe today, maybe even zoom in today; I gave you the choice, so I'll continue to give it to you, but I'll give you some direction at least... What are some things that you're dealing with that you never thought you would, that's either a struggle or a challenge, or what's a gigantic lessons learned that you're like "If you're listening to this and you walk away from this show, you've got to know this. This is what I learned..."? And if it's regurgitating some of this stuff, then obviously keep it brief, and we can ebb and flow out of that, but let's go in a direction where we're sharing something like that.

**Travis Kimmel:** \[01:12:05.07\] I would say be mindful of what you sacrifice. Again, a startup will ask more of you than you can give, and you'll try to give it anyway. That has a blast radius, so be careful when you're sacrificing your health, be careful when you're sacrificing family, or you're asking family to sacrifice. That'll happen, and just be super-mindful about it. And I wouldn't say don't do it, because it's part of the gig, but be mindful about it. If other people are involved, talk to them about it, like "Hey, this is gonna be a tough run here for a little while. I'm gonna be on the road a lot", or whatever it is. Pay a lot of attention to the sacrifices.

I think when we were starting this company I just stopped doing anything physical. I'm not talking about working out; even just like walking around. I was just sitting in a chair, at a desk, grinding, and that had a bunch of knock-on effects... I mean, I'm getting back into it now, and all that, but I guess it's very similar to the technical debt conversation - watch your personal debt.

**Adam Stacoviak:** Wow... Yeah.

**Travis Kimmel:** Sometimes that's financial, sometimes it's health, sometimes it's relationships, but just be very mindful of that stuff and measure the all-in costs of entrepreneurship as you continue down the road, because it's a very costly thing. It's not meant to discourage anyone, I love it, but no regrets at all. It's part of the gig, and I think it's important to go into that eyes open.

Building a company takes a while, so you've gotta settle in. I think one of the things that I miscalibrated on was approaching it like a sprinter... Like, "We're gonna get this thing out and then we're gonna sprint to this revenue target, and then we're gonna sprint to our series A...", and you know, just a series of sprints... Part of that is just the way that I approach life, but if you double down on it, if you go too hard at it, you make choices that are not sustainable.

You've gotta settle in and think about how to build a company over a decade or more. Can you really just in a chair that whole time, and ignore your health and eat crap? Probably not. At the end of the day, when that bill comes due, it's actually gonna be a problem for your business. Things like that...

Be mindful of context, be mindful of the choices that you're making, and the knock-on effects of that stuff down the road, and think long-term, not just on behalf of your business, but on behalf of your personal business plan, your life plan, and weave that stuff together in a way that's... You know, entrepreneurs will never have work/life balance; that's just a fantasy, and I think most of us probably don't even want it... But definitely think about work/life integration. How are you gonna build those things together into a rope that you wanna be swinging on for the rest of your life?

**Adam Stacoviak:** I've gotta pause, just because - wow... To take that in. Work/life integration, swinging on a rope... Because if you think about a rope, too - just to take that metaphor a little further - it's made up of tiny individual strands that make up a larger strand, that could be a braided version of it... So you can go into the physical nature of many rope types. Most ropes - at least the ones you climb at gym class - are made up of three. In this case it's just two, because - work and life. How you weave those together to swing on that rope for a long time is really interesting to think about, because like you said earlier, technical debt, actual financial debt, things like that... Wow, that's so profound.

\[01:16:12.14\] I'm just blown away by what you said, and it makes me think of wisdom; somewhere along the line you got wise, and I'm just curious if it's been -- you know, show me your hands; how do your knuckles look? Are they bloody? Or did you, you know, through Y Combinator, or your partners in your business... Where are you getting your counsel, who's your counsel? And is that there? How important has it been to you?

**Travis Kimmel:** It's hugely important. I was a self-taught programmer; I studied philosophy in college... And that was awesome, and I think there's a pretty good headspace from philosophy; it's not the most practical thing, but it does give you this idea that you should respect wisdom. I've always viewed wisdom as a thing to sort of be ingested; it's like food - you just eat it and it makes you powerful. It's awesome, it's high-protein. And I personally love seeking advice. I don't always take it; there's a lot of bad advice out there, and you still have to have your own discernment about whatever bad advice you receive, but I seek counsel from anyone who I think has something good to say, or might have something good to say, who will do me the service of offering me their counsel.

We've gotten advice -- our series C board rep (John, I mentioned him briefly) has been a great source of counsel. He's seen a lot, he's been in the startup scene for a long time. Great guy. He's been super-valuable along the way, and I just really respect the time he's given both me and my co-founder, Ben.

I always talk to Ben about everything business-related. That's been really great for the founder dynamic. And then in general, I think if you're facing a tough decision, going out and getting a lot of opinions on it before you call the ball is really important.

The other thing that's really important about taking counsel from anyone is making sure that you own the decision at the end of the day. You can go get advice from a bunch of people, but never outsource the decision. That's super, super-toxic. You never wanna find yourself in a conversation in the future saying "I did it because person XYZ told me." That is not good.

Seek a lot of counsel, bring it in, evaluate it, and then you're the decider. It's one of my favorite quotes of all time, "I'm the decider." Just make sure that at the end of the day that is your decision. You've gotta let all that wisdom mix in its own little pool, and then take whatever distill that comes out of that and then own it.

**Adam Stacoviak:** I am the decider. I like that a lot. Travis, I'm so glad to have had this time to talk to you, because I feel like you've taken me on a journey of learning... You have so much to share. I truly, truly appreciate your story. There's lots of it I didn't expect, and I'm grateful and surprised in many good ways, particularly your willingness to be wrong and seek wisdom and counsel, which I believe is a true sign of wise leadership... And to seek wisdom in any way, really, and to be better because of it, and respect it.

\[01:19:59.09\] I think a lot of people don't heart that kind of advice, which is one of the biggest reasons I'm so passionate about producing this show, because it's real, honest advice. Sure, go read a blog post; you can get this round of funding, and build this company, it's all gonna be great, but you know what - every day is not gonna be great.

**Travis Kimmel:** Yeah.

**Adam Stacoviak:** Like you said, building a company takes a long time, it takes a lot of effort, it's a marathon. I love what you said when you said "Settle in." It's like a warning, and preparatory at the same time. It's like, "Hey, it's coming up. Settle in", that kind of thing.

To close, let's close on this - I didn't tell you this, so I'm gonna put you on the spot, and you can share however you like, and we'll close here... What's over the horizon? What's coming up for you personally, what's coming up for GitPrime, what's coming up that not many or no one knows about, that you can tee up, tease, or full-on share here today?

**Travis Kimmel:** Well, the breed of futurism that I'm most passionate about these days is still on the product side. You always maintain that deep down appreciation for wherever you came from. There's a bunch of cool stuff coming up. One of the things that we think will be really powerful is if we can help the rest of the company understand how the organization as a whole impacts engineering.

There's this garbage in/garbage out thing. We've spent a lot of time thinking about "What would that look like when we're thinking about the engineering team and the people side of it? What does garbage in look like, and how does that affect the way that engineers work?" We've got some pretty exciting stuff that we'll be releasing early next year, that looks at that and says "How do we measure when a stakeholder changes the goal post mid-implementation?" What's the data around that? How do we quantify \[unintelligible 01:22:05.19\] How do we give engineering the ability to come to the table and say "Yes, you're right. We were late. We were, but there were a lot of factors that contributed to that lateness, some of which was us, but some of which was external to us. We wanna have a meaningful discussion about that, so that we can change the way we work, and maybe do a little bit less to that next time, or at least just address it candidly and say, okay, we're fine with that; we're fine with a little bit of brain damage along the way, as long as it doesn't get extreme." We have a whole set of features around that, that I'm very excited about.

And for us as a company, we're in a pretty good spot right now. My goal is to get on the road, talk to a bunch more customers, as well people who are not customers, that we would like to be... Get out there in the field, figure out what the right next step for us is, to serve engineering and engineering leadership, and then in particular how we can continue to put a lot of emphasis on sculpting what we build to fit the culture of engineering, which I think is very important.

We do a lot of stuff to make sure that the data that we're socializing can be limited in a way that we're not creating more of this interruptive influence. We allow seats in there that cannot see individual users' data, and that sort of thing.

One of the things I'm super-excited about is doubling down on that. And yes, socializing is data, but also in a way that respects that way that engineers work, the needs of engineers as they're working, one of the main ones being uninterrupted time. If we introduce a bunch of data, and all of a sudden people are getting interrupted more, we failed. That's where my focus is... Just continuing to build a really awesome product.

**Adam Stacoviak:** \[01:24:03.09\] I think more importantly it's visibility where you hadn't had visibility before; it's a really interesting problem to be solving. Very hard, I'll give you that. So basically, you're saying that the remainder of the year 2018, quarter four, is heads-down product - I'm sure you have a feedback loop in there... And potentially early 2019 -- it's so crazy to think about 2019 being so close...

**Travis Kimmel:** I know...

**Adam Stacoviak:** And I think I said that in 2017, "Oh my gosh, 2018 is coming up \[unintelligible 01:24:38.27\] So you're saying that in early 2019 or somewhere around there you've got some launches happening... Is that right?

**Travis Kimmel:** Yup. We'll have some more good stuff.

**Adam Stacoviak:** And you have a newsletter, so I guess that the easiest way, potentially, to keep up might be to subscribe to that...

**Travis Kimmel:** Yes.

**Adam Stacoviak:** I don't know if it's product-driven, but it's definitely information-driven.

**Travis Kimmel:** If you subscribe to it, what you'll get is each week we send out -- we're trying to fill in this gap, which is that a lot of engineering managers just get elevated without a lot of background in management... So each week we go out and we collate a bunch of information; it's not stuff that we write, typically, just things from other engineering leaders out there that we found super-valuable. We give a little excerpt of that, to help people understand whether it's worth their time to read, and then we fire it out... And it's awesome. It's definitely worth reading. I read it, and I love it.

**Adam Stacoviak:** Nice. It's always good when you can do that. It's actually something that serves you, that doubles as serving others too, because that's always nice whenever you can actually eat your own -- we've learned to say "drink your own wine" versus "eat your own dogfood", or I think it might be champagne... Or drink of choice, or whatever of choice... Drink your own/eat your own whatever. It totally makes sense, because you're serving you, which is great, and then at the same time you're able to by-product that and serve others in the process... And potentially get some fans who may not be customers, but might be just people who -- I think Seth Godin calls them sneezers...

**Travis Kimmel:** Yeah, yeah...

**Adam Stacoviak:** Which, when I say that, because I'm not Seth Godin -- he can get away with it; anytime I've ever said it, it's like "What do you mean, sneezers? That sounds weird. It's like virus!" I'm like, "Well, it kind of is. You get a cold, you give it to somebody. You sneeze." It's a great metaphor, but terrible in its nature of delivery.

**Travis Kimmel:** Yeah.

**Adam Stacoviak:** Travis, thank you so much for sharing your time, your wisdom and your future of where you're taking GitPrime. You definitely seem to be a wise CEO, and I appreciate you sharing that wisdom here today, with me and the listeners of Founders Talk.

**Travis Kimmel:** I appreciate the invitation.
