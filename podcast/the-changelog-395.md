**Jerod Santo:** So we have GitHub CTO Jason Warner here. Jason, thanks for coming on the show.

**Jason Warner:** Thanks for having me, guys.

**Jerod Santo:** So at the risk of sounding like the Bobs from office space, we're gonna say "What is it that you do here exactly?" CTO is a big role, but what does it look like day-to-day, or tactically, boots on the ground? What do you do?

**Jason Warner:** Yeah, so this is gonna be a little bit of a short, and then a long version of an answer.

**Jerod Santo:** Okay.

**Jason Warner:** So the short version is what I do day in, day out is I look at what doesn't, but we think should exist in software, generally speaking. Looking out a couple of years, trying to figure out what things might need to exist, where software itself is going, where developers want to take it, and trying to be ahead out ahead of those trends... Though that is a new role for me; I transitioned to the CTO role officially about three months ago. Before that, what I did at GitHub was I ran product engineering, security, support infrastructure and data.

So while I was ultimately the person in charge of all technology still in that role, we have transitioned and split the two duties, so that I now exclusively look at Horizon 3 - is what we call that in the office of the CTO - type things, and we have somebody else who runs day-to-day product or day-to-day engineering or day-to-day security... And I have transitioned those duties to those folks, and now I'm looking exclusively at Horizon 3.

**Jerod Santo:** \[04:16\] I would love to ask you what Horizon 3 looks like, but I'm not sure if you wanna talk about that, or if you know exactly what it looks like.

**Jason Warner:** There's a lot of unknown. The way I look at this, if you think about Horizon 1, 2 and 3...

**Adam Stacoviak:** Well, what's Horizon 1?

**Jason Warner:** Horizon 1 should be the next year. You've pretty much already done the custom development, you already understand where it's going... I think of it actually as hit rates; think about it this way - if your batting percentage in Horizon 1 is anything less than 100%, you probably have not done your job well. You've not nailed down the features, you've not nailed down the product launches or the custom development.

Horizon 2 is probably pretty well known, but not maybe fully baked yet... But let's say it should be in the range of 75% to 85% in terms of how well you're doing. But that changes dramatically during Horizon 3. We should be exploring things that are destined to fail at a very high percentage, so we should be right maybe 20% to 25% of the time, and only that many projects turn into a future-oriented product. But it remains to be seen what exactly will come out of that, though if you think about what GitHub has released in the last two years, you get an idea of where we're going to go and look at... So the best example about this is GitHub Actions, which basically came out of the same sort of thinking - what should exist, what doesn't exist? Where do we wanna be in 3-5 years? What do we need to do now, and what do we need to build now to get to that point?

**Adam Stacoviak:** Yeah. What were some things that were Horizon 3(ish), maybe even Horizon 2 that you've put out, that hadn't had the same success as GitHub Actions?

**Jason Warner:** We started on something right after I joined GitHub called Security Alerts. It was the idea that we're gonna need to bring security to GitHub, and security manifestations, and just a stronger idea of security around the code... And the first foray into that with security alerts was met with mixed success. But as we pushed through it and got further down that path, and then eventually post-acquisition with Microsoft, we ended up buying a company called Semmle out of the U.K, and combining it with that we've had a lot more success... Though that was definitely more Horizon 2. It was just pretty well understood that we needed to do something; we weren't quite sure exactly what. The first entry into it was met with a little bit of lukewarmness, but once we iterated at it and moved it further down the path, we had a lot more luck with it.

**Adam Stacoviak:** Is this your first time being in a position to be a Horizon 3 focuser?

**Jason Warner:** Exclusively, yes. My natural inclination is to think about the future of things. When I think about approaching a problem or approaching a job, or even a company, I always think "Where should we be in five years? What are 5 or 6 different paths that this company could take? What would the market need to be for us to go X, Y or Z? Why are those things that we should invest in?"

**Adam Stacoviak:** So you're one of those people that when somebody says "Hey, where are you gonna be at in five years?" you like that question. Because not everybody does, right?

**Jerod Santo:** Right.

**Jason Warner:** I do, though it is harder when you think about it personally as opposed to professionally. it's easy with companies or products, but personally, it's also weirdly emotional... But you could be distanced from it with a company or a product.

**Jerod Santo:** Do you do this with other people's products? Do you look at something like Tesla, or do you look at Amazon and you're like "Do you know what they need to be in five years?" and you imagine what their product line might look like?

**Jason Warner:** I literally have notebooks for different companies?

**Jerod Santo:** Do you really?

**Jason Warner:** I do... Way back in the day I used to joke about this. I had a Yahoo! notebook, I had a Google notebook, I had a Salesforce one when I was there, and then i gave up on that one after I left... I had a Microsoft one before I joined; I still keep a Microsoft one. I do think about other companies a lot. The ones I really think about though are the mid-to-late stage startup companies...

**Jerod Santo:** \[08:01\] Such as...

**Jason Warner:** A good one would be Hashi at the moment. Hashi is in our space, kind of equivalent to us. I've got a lot of friends over there, I know their product well... But what might they want to be doing in the future, what's the vision look like, where could it be... I do it a lot, because 1) it's fun. It's one of those things that I like to do. The other is I try to imagine myself, if I'm the CEO coming into that company now, what would I do, and why? And the why part is really important, because that helps you get better at honing the gut instinct or some of the data amalgamation. If you can articulate the why, I think you can do a stellar job at that. So in some ways it's my version of practicing for a future role.

**Jerod Santo:** Well, you seem well-positioned. That seems like a super-fun job, by the way. You've gotta feel pretty happy with where you are in terms of thinking about this thing that you do for fun. It's like "I'm gonna gather where these companies should go the next five years", and now you get to do it for GitHub. It's gotta be pretty rewarding and interesting work.

**Jason Warner:** Yeah. 1) It's fascinating. 2) It's fun. And 3) as a person who's been in this space for quite some time, before GitHub was Heroku, before Heroku was Canonical, \[unintelligible 00:09:11.02\] I basically thought about developers for the past decade, platforms and clouds, and it all comes together at GitHub, because GitHub is the center of the software development universe. It's kind of a perfect match.

**Jerod Santo:** You're well-positioned. So you don't have to share with us a future roadmap or anything, but...

**Adam Stacoviak:** Or do if you want to.

**Jerod Santo:** Yeah, whatever you wanna say, of course... But Horizon 3 - not the solutions, but what are some of the problems that you see? What's missing in the developer world?

**Jason Warner:** Yeah, so that's the part to me that's easy to share, because there's nothing proprietary; it's just obvious to me, and I think others who think about software, what GitHub should naturally do. It's just how we do it will influence what it ends up looking like, and that's where the competitiveness might come in.

But if you think about the software development lifecycle and we boil it down largely from all these different discreet verticals to just four main steps, which is idea, code, build and ship - that is the software's lifecycle before it gets to production. And then it goes into production; then you've gotta operate, and you've got bug and error track, and all that sort of stuff.

Well, GitHub very clearly went from code, to build, to ship. And - well, what do you do then? Well, then you go to idea, or to \[unintelligible 00:10:24.14\] production. It's not rocket science where we will probably go, but how we approach those problems is how we're gonna differentiate ourselves.

**Jerod Santo:** And how do you vet out then in your own mind, or with your team, these ideas of the how? Like "How are we gonna implement this on Horizon 3?" How do you judge an idea? When we talk about some of the stuff you've learned as your role, scaling engineering teams, and building culture and all those things - we're gonna get into that, but one of the things you mention often is this idea of gathering all the data, but then still trusting your gut... And I wonder if that plays into this style of decision-making. What data can you get on solutions that don't exist yet?

**Jason Warner:** The most important one, if you think about how you might make a decision in this area, my lens is pretty exclusively the largest lens I'm going to use, besides the micro-lens, and it's going to be "Does this effectively change all the software at once?" Because with GitHub's market position - we have 40+ million registered developers on GitHub, 100+ million repositories, and all that sort of thing... Basically, all the software lives on GitHub. So we're in a position that if we do something, it should be meaningful to nearly everybody in the world who cares about software.

So if it comes down to that it's a feature, or it's a nice-to-have, or it's a shiny button type of scenario, that is not what we're after. We're after something that completely changes it again. It either takes software from level A and levels it up entirely to level B - that's what we want to do.

\[12:01\] So when ideas come to us, is this basically worth our time to go look at this? Will this change everybody at once? Will this change the industry? Will this make something x% easier - or x times easier, which is actually what were after - or x times better? That sort of scenario. That's how we have to think. And the truth is that most things that people come up with are friction-reduction ideas. "This thing is hard" or "This is hard" or "This is awkward", but that's not what we're after. We're not after minor percentage change friction-reduction if we wanna change everything. The minor change friction-reductions are incredibly important to GitHub, but that's what Horizon 1 and 2 are for.

**Adam Stacoviak:** What's a good example then? ...if you can hypothesize what a Horizon 3 might be. Is there anything fictitious...?

**Jason Warner:** Well, unfortunately, all of them were stuff that we've already -- that I have in my head and I've thought about... \[laughter\] But just imagine this scenario. What if -- because we have the code (we have the open source code, we have your code, we have that) what if we were to know something about what was going on in production, and an error happened, and we happened to know who checked that code in? ...and they happened to already have all the test suites available to it.

What if we could change the way that people had pager rotations, as an example? Large teams have large-scale pager rotations, but we happen to know who checked in which code, and what was failing. What if we could isolate that and page that person specifically, and say "Hey, we had to quarantine your code, because it was released to production? And we paged you because you need to go figure out what's going on with this. But it's safer now, because we had all your tests, we had your staging environment, we had your production environment, we know what your blue-green deploys look like, so we just kind of quarantined your section of code right now. Can you go take a look at this and figure out what's going on and let us know when it's ready, to turn it back on?"

**Jerod Santo:** That'd be cool. To distill down what you're saying about your idea judgment - and correct me if I'm wrong, but it sounds like what you do is you come up with an idea, maybe you have a notebook of ideas where you guys get into a room and talk... And then you ask yourself "Is this idea big enough?" And if it's not big enough, then it's like "Well, it's not big enough." You're just going for the big ideas.

**Jason Warner:** In many ways, some of the stuff that we're looking at should be a fundable company that some VC somewhere says "This thing is probably a ten-billion-dollar company on its own, if it can solve that problem."

**Jerod Santo:** On its own, yeah.

**Jason Warner:** That's the kind of scale you're thinking about here.

**Adam Stacoviak:** Yeah, that's a good problem to have and solve. Fun to solve, for sure, because - I mean, who wouldn't wanna have a juggernaut, like GitHub is, and create sub-ten-billion-dollar companies within it? That's a fun job to have...

**Jerod Santo:** \[laughs\] That's what I was saying.

**Adam Stacoviak:** You know, what I mean...? Like, are you hiring? I'm just kidding.

**Jerod Santo:** "Are you hiring?" \[laughs\] For his own position. "Can I have your job?"

**Adam Stacoviak:** Just kidding. Just kidding.

**Jason Warner:** Hey, we have an office of the CTO, and it's not hard to recruit for that office, let's just say.

**Jerod Santo:** Yeah, I bet.

**Adam Stacoviak:** That's interesting stuff.

**Jerod Santo:** You've been at GitHub a long time to get to where you are, and you've been doing a lot of building to get to what now you can look forward and try to build these huge "go big or go home" sub-companies on Horizon 3. You've shared a lot of the things you've learned over the years on how to scale an engineering team(s) while a company is scaling. And GitHub has gone very large, and in a small amount of time - what, ten years, or something along that order of magnitude...? Hyper-growth is what people use to describe this thing. I'm not really sure exactly what constitutes hyper-growth, just like I'm not sure what a microservice is. How small does it have to be? How fast does your growth have to be to be in hyper-growth?

But we've been along for the ride, as this podcast has existed pretty much the same time that GitHub has existed. We've watched GitHub go from just a few developers, up to where it is today.

**Adam Stacoviak:** Our friends, essentially. \[unintelligible 00:15:51.13\]

**Jerod Santo:** \[15:53\] Yup. And very happy to just kind of ride the open source wave alongside y'all... I'm curious what your high-level - or even tactical advice - to people who are maybe in a small business/technology company that has a trajectory similar to GitHub's, and they're like "Wow, I'm overwhelmed by all these customers, all these features... I've gotta hire real fast, we've overwhelmed", maybe the website's down... In that milieu, how do you succeed, what do you tell people?

**Jason Warner:** Well, first - congratulations. If you're in that sort of scenario, just enjoy it.

**Jerod Santo:** Hold on for dear life, yeah.

**Jason Warner:** Yeah. And also, just expect that you're gonna get lots of inbound from VCs. But what I talk about quite a bit to early startup founders or people who are going through this is maybe a set of things that I try to impart with them. One is things are going to happen to you, and your goal is to make it so that things don't happen to you or your company. You need to get in front of a lot of stuff. Try to get as explicit about as many things as possible, as opposed to implicitly "your culture is formed' or implicitly you've got processes evolved, or people just happen to now start reporting in to you, and your product goes a certain way. Explicitness in your company, and life, and day-to-day should take hold. That's hard though, because so many things are going to be on fire... And that's the other thing I talk about - many things in a startup company are always going to feel subpar.

That's okay to a degree, particularly if you understand that you're explicitly letting something go a certain way, or not be fixed, to the degree that you might expect it to be fixed at some point, for a lot of different reasons. But again, if things are on fire just because they happen to be on fire, and they just implicitly start to become more fiery, then you're probably in a bad spot. I talk a lot about explicitness versus implicitness in decision-making, and really ruthlessly make decisions as a startup founder or a startup executive team.

The other thing I talk a lot about is how you organize yourself for scale, from two people in a garage to 5,000 people, and the various things that are going to happen in between here and there, and when, and how, and what maybe to do... And they're going to be vastly different, and you can't get too specific about any one situation until you know some of the context... But just that you're going to go through all of these different phases, and something that got you from two people in a garage to 50 people and 50 million dollars in funding and a lot of success might actually hold you back tomorrow, as soon as you've left the door, when you can't become emotionally beholden to any one thing.

A good example of this is GitHub in the early days talked very much about a flat structure... Talked about it very openly, and how it was one of the keys to their success.

**Jerod Santo:** Right. Everyone's an engineer, and everyone kind of makes their own decisions on what they're gonna work on, right?

**Jason Warner:** Yes. And if you look through the history, I think that did indeed help GitHub in its early days. And then it was the very, very thing that held it back for a 3-4 year period from releasing anything meaningful. But it didn't mean it didn't serve its purpose. What happened is the organization and the company itself became beholden to the idea, and they held on to it for too long.

**Adam Stacoviak:** Yeah. I can see that...

**Jason Warner:** We talk about a lot of that stuff.

**Jerod Santo:** It's hard to let go of the thing that brought you to where you are, right?

**Jason Warner:** Or the people.

**Jerod Santo:** Right. If those people won't let go of the idea, perhaps.

**Jason Warner:** Yeah. I think I'll talk about that. But one of the main things I do talk about is the most critical thing for nailing startups and growth - it's communication... Communicating out what maybe a long-term vision and mission for the company is, what's important right now and why, what our principles are, what our values are, how we're going to measure success, and then how you're going to organize yourself to do those sorts of things. That itself is kind of the art of companies in general, and scaling organizations... And I've learned that through engineering, because engineering is usually one of the first places you have to really, really meticulously organize yourself... Otherwise you can't get anything done. And companies themselves had that same struggle, you just don't know it nearly as well; you can't feel it as ethereally as you can in engineering.

**Jerod Santo:** \[20:21\] It seems like most companies start off maybe with a vision, or maybe with a mission, but often not both, or not much clarity. There's a lot of just iteration and testing. Is this a thing the market will -- you know, trying to find product-market fit, and it's just like "We're trying to figure out something that's gonna be a business, or that people are gonna wanna buy", or whatever it happens to be.

Are you saying that you should have this mission and vision day one, or are you saying once you find product-market fit -- like, you need to figure this out eventually. Again, the timing on this is interesting, because sometimes the advice is "Just head West", like "Well, you've gotta just start building the thing." But then you can also just get lost in the middle of the Midwest and never make it over to the gold rush.

**Jason Warner:** It's funny that you say "Just head West", because that's actually one of the frames I use, which is if you're standing on the East Coast and you basically say "We know we need to end up in California in two years. We could plan it out meticulously, or we could just start walking." And I do think that most people should just start walking, and every day, ruthlessly start to iterate... Like "Okay, let's reevaluate. Do we wanna go down to Austin, or do we wanna go up and see Wyoming? Well, that's two very divergent paths now. They both are still generally heading West, but are they gonna change us? Should they change us? Are we okay with that?"

I guess my general view on mission and vision and iteration towards product-market fit is basically you end up with two types of companies - a company where there's a slam dunk product-market fit... GitHub falls into that category; they didn't really have to test their way to anything. So there's a whole bunch of cheat codes that come with that path...

**Jerod Santo:** Right. Good point.

**Jason Warner:** ...and you just don't have to worry about a certain set of things. In that scenario, mission and vision and talking about developers and the time horizons are so crucial to keep everyone focused on that other side.

On the product-market fit side, particularly if you're testing your way to product-market fit, you really should understand why the company took money in the first place; or if it hasn't taken money yet, why the founders formed something.

**Adam Stacoviak:** Why it should.

**Jerod Santo:** Yeah.

**Jason Warner:** So if you've got a notion that there's a customer, or a problem to be solved, or a friction that you're gonna remove, or something, you have to really understand that, and why you're passionate enough about it to spend some time away from your family to do that.

**Adam Stacoviak:** Well, when in doubt, iterate, right? What other twists do you have?

**Jason Warner:** When in -- yes.

**Jerod Santo:** Right.

**Adam Stacoviak:** I mean, if you don't iterate, you're just gonna stand still.

**Jason Warner:** Yup... And that's going back to the "Go West." It's the same. Just one foot in front of the other.

**Jerod Santo:** At the same time, you're not gonna have to deal with the hypergrowth problem, because you haven't found the product-market fit yet, so you're not there yet. The things that you're establishing, like how to scale engineering teams, or small businesses/startups into large ones - it's at a time where the growth has started to hit, and that growth starts to hit once you've plotted a bit of a course and you've figured out which way is good.

**Jason Warner:** I recommend strongly that founders keep everything as lean as possible until you have what you think is product-market fit. Because I think magic can happen with five to ten developers in a room, who ruthlessly prioritize and iterate, and really understand their customers and talk to them.

The best example that might be in our market is - well, they were much bigger than ten people - is Slack. They started as a video game company, then they developed an internal tool, and then that team kind of shed itself a little bit from the video game company and said "Hey, what is this thing over here? Let's start iterating on it really quickly, with a really hyper-focused team." That's a really good example of customer development, essentially.

**Adam Stacoviak:** So how do you then really define hyper-growth then? Is it simply you've found fit, and you kind of see some semblance of a market, but now you know that that market where you're at currently is nowhere near where you could be, so hyper-growth is know exactly where you've gotta go, and grow as fast as possible to achieve that mass?

**Jason Warner:** \[24:20\] I think with hyper-growth what it really comes down to is it's much easier to understand when you're in a SaaS model, that if you wake up every day and you see some number somewhere ticking, basically kind of like passive income style - where you don't have to do any customer acquisition, any customer development; it's kind of just coming to you organically - you're likely in either the start, or already hyper-growth mode, in terms of your product take-off. And that's really what it's about. I don't think hyper-growth should be about scaling your organization per se; it should be that your product is ready to kind of go off on its own. It hit some sort of exit velocity from you having to manifest it into the market. The awareness shift happened.

Maybe a popular example might be a Superhuman, the email client; it may be - what, 18 months ago? So before - I might have that timeline wrong, but there was a period of time where it was under the radar, but some people used it and had it, but then for whatever reason there was this VC moment where every VC was talking about Superhuman and the way that was happening. Well, that was their kind of hyper-growth moment; they were able to raise a crap-ton of money off of that, they were able to do a whole bunch of stuff. Now, they didn't scale their organization past that there, but their production adoption number went off the roof.

**Jerod Santo:** Right. Yeah, the best scenario is that your adoption number goes up and your organization size stays as small as possible, right? That's when you're really sitting pretty. I think of WhatsApp, and what they were able to accomplish. Something like 900 million users with 50 engineers... I mean, that number was here, but their engineer count was relatively flat in comparison.

**Jason Warner:** Yeah. I'm an old infrastructure nerd, and I definitely still don't think that your business human count should scale the same way as your customer and product count, and all that sort of stuff. You should find some sort of thing where your product has the hockey stick and you have more of a flat growth in terms of the head count. That's just business efficiency.

But on the flipside, you've got other types of businesses that are very classically blitz-scaling - I think that's the term that is being used in the industry... Basically, you're paying to acquire growth and customers. Those are obviously the Lyfts and the Ubers of the world, where they're running at a deficit, and they're incurring organizational, technical and monetary debt to buy that growth, essentially.

**Jerod Santo:** Right.

**Jason Warner:** Now, that's a very strategic reason to do that. If you're not explicit about the reason you're doing it and you just kind of find yourself in that trap - well, you could find yourself in a different type of trap at some point, too.

**Jerod Santo:** Yeah... So two pieces of advice - I referenced them before - that you have said seem to be somewhat at odds... And they are "measure everything" and "trust your gut." I could definitely see a throughline where you could do both of those things, but it seems like if I'm going to be trusting my gut, it's kind of the opposite of measurements, right? It's my feelings, my intuition, or whatever you wanna call it; my experience... But if I'm measuring everything, then I'm supposed to be making data-based decisions, otherwise why measure just a liability to have this data? So what are your thoughts on measuring and trusting your gut?

**Jason Warner:** I like to look at data from the data-informed side, as opposed to the data-dictated decision-making side. I think it's easy because of my seat in the business, and it's not -- I don't run a government, I don't run a hedge fund... I don't run a lot of things in life, so maybe my advice explicitly is for software companies, and particularly ones where you're serving a wide audience, too. A good example would be here that GitHub serves every developer in the world. That means infrastructure developers, that means JavaScript developers, that means Salesforce developers. None of them are going to need all of the features that GitHub will release; none of them are going to ask specifically for a certain set of things.

\[28:16\] So we have to intuit a lot from disparate pieces of data, or feedback, or even positive and negative criticism... And we have to kind of use what we think as well from that. So that's what I mean by "trust your gut" in some of these, as opposed to be exclusively led by the data.

Another good example of this - and I'll use one from GiHub's history - is GitHub did not build CI for a long time. I had that decision at one point to make while it was pre-acquisitioning GitHub as well, and a lot of people wanted us to build CI. A lot of people did. But we looked at it and we said "We can't afford to build CI, because it is such a COGS suck for us." But we could change the notion, we could skip it; skip the build step and go right to deploying workflows, and give them a pseudo-ability to do CI. It won't be the full solution, but it'll be enough where the really forward-looking people can understand what we're hat-tipping what we're going to build in the future... But we're not going to do that right now.

But if we listened to the data, we would have said "Build CI", and we would have had to figure out a way to make it work. But we had to think a little bit differently, and that's where we trusted our gut, saying "Hey, we're gonna skip it", because we think we understand why people really are asking for CI, and go to the next thing, or the thing after that, and then build backwards.

**Adam Stacoviak:** So was that a wise maneuver?

**Jason Warner:** Yes. It got us acquired.

**Jerod Santo:** Really?

**Jason Warner:** Yeah.

**Jerod Santo:** How did that get you acquired?

**Adam Stacoviak:** Expand, yeah.

**Jason Warner:** The notion that GitHub understood its value in the market was incredibly important to the acquisition. For a long time it was not well understood that GitHub knew what it was sitting on... And I think the simple fact that we walked into all the major clouds and said "Hi. We're GitHub. We're where the development happens. We want to serve those developers, and we would like for you to be a party to it. Here's what we intend to build over time. If you would like to be in, happy to have you. This is where we're gonna go."

I think it put those folks -- not on notice, because that would be the wrong term, if we're talking about the largest companies in the world... But it at least showed them that we understood the value that GitHub was bringing to the market. And that story essentially was the "Take us ourselves from a code host, turn us into a code platform/software development platform, go end-to-end, and establish ourselves as the only real end-to-end software development platform in the world, where the major public clouds are at the other side of it."

**Jerod Santo:** So the next step -- you skipped the CI and you went to Actions instead. Is that what you're -- so Actions was the next thing. And then you built the CI on top of Actions?

**Jason Warner:** Yes. So what we did is - if you notice the way it's framed now, we call it "GitHub CI, powered by Actions." Or "GitHub Actions, now with CI." It's one of those two marketing terms; I can't remember what we're using these days.

**Jerod Santo:** Sure.

**Jason Warner:** But the idea here is that GitHub Actions is an end-to-end workflow platform, all the way from editing on your code, to deploying it into production, and working backwards; it's got package management built in, and now it's got CI built in as well. And then obviously we just acquired npm to augment that story for the JavaScript ecosystem.

**Jerod Santo:** So I don't have the numbers that you had to make your gut decision, but it seems like to me that GitHub Actions would require similar infrastructure that the CI would. So is it just the vision that changed? Because I assume you're still invested into Actions, similarly to the CI product.

**Jason Warner:** From the cogs' perspective, Actions was a much healthier bet for us than --

**Jerod Santo:** It was. But what does it not need?

**Jason Warner:** \[32:01\] It doesn't need the same long-lived tasks that certain builds need.

**Jerod Santo:** Okay...

**Jason Warner:** So you could do essentially -- think of it as the original GitHub Actions that we built was more of a functions-based solution, whereas this one has to be more like long-lived tasks... Kind of a different architectural approach.

**Break:** \[32:27\]

**Jerod Santo:** So Jason, you mentioned that you had these notebooks with plans of what companies should do over the next N years, five years or so... And what we've just learned during the break is that you actually had a GitHub notebook. So you've talked about your notebooks for other companies, but you had a GitHub notebook, and it seems like it was somewhat \[unintelligible 00:34:20.00\] Can you tell us the story of your GitHub notebook and what was in there?

**Jason Warner:** Sure. My notebooks are pretty standard things, that describe either the small \[unintelligible 00:34:28.20\] and I just try to take notes on what I think the company is, what it wants to be, what it could be, and what I think from the outside. It's always called whatever company I view from the outside, and then I try to map it out. So you're working on assumptions. I just happen to know GitHub really well, because while I was at Heroku, GitHub and Heroku were similar type companies. Even from a product perspective, they sat in similar spaces. They were formed even right around the same year, I think.

**Jerod Santo:** Yeah.

**Jason Warner:** So I just happened to have a GitHub notebook that was kind of formed, and I was fleshing it out as I was going through the very, very long GitHub interview process. But I should also point out that I cheated a little bit on the GitHub notebook... Because I put together a plan while I was at Salesforce to pitch up to buy GitHub, while I was at Heroku, because I wanted to combine GitHub and Heroku.

That didn't work out, so I just kept iterating on my notebook, because I said "What would I do if I had GitHub? What would I do? GitHub sits in the most interesting market position in software development... What would I do?" That goes from a product perspective, but then you have to take into account the company's maturity, and the leadership's maturity and other things, too... So I just kind of put together a couple-year plan on what I would do. One of my favorite artifacts from that time - I will not lose that notebook; it's sitting in my library, and I am going to keep it out on the shelf, always.

\[35:58\] The fun story with that one is I had in that notebook, June of -- I think it was 2019 I put it on there; I said get acquisition offer. I had it circled several times with a star next to it. Not that we would take an acquisition offer, that's not the goal. But to get an actual, legitimate, at-our-value acquisition offer - gotta think about that as a goal, because we wanna drive the perceived value of the company to that point, where we need it. And I'm pretty happy with that.

**Adam Stacoviak:** You were in the role of senior vice president of technology at that point, right?

**Jason Warner:** I created the notebook before I joined.

**Adam Stacoviak:** Right. But you stepped into that role -- is that typically that kind of trajectory to go on? Is that typically what an SVP of technology does?

**Jason Warner:** GitHub was a unique place. We had a founder/CEO who - I didn't know it at the time when I was joining - was going to step down. He was no longer gonna be the CEO... And he was gonna look for a replacement. I had most of the non-sales functions in the business. We had a marketing person, and she was there, we had a sales person, and we had a CFO. Largely, that was about it. So I got everything else - I got product, I got engineering, security, I started out with support infrastructure, data... I had most of those functions. And I shadow-led BD and Corp Dev for a little while, too. My role - mine was SVP of technology - was because I had that entire breadth. My skillset lends itself to being what is more traditionally called CPO these days than it is CTO. I just happen to be at a company where the product is the technology.

**Jerod Santo:** Interesting. So when did the acquisition offer land?

**Jason Warner:** We announced it on my one-year anniversary. So we announced it to the public at my one-year anniversary. We got the acquisition offer -- I believe it was the first week of April of 2018.

**Jerod Santo:** So you were off by a couple of months in your notebook.

**Jason Warner:** A year.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** A year and a couple months.

**Jason Warner:** Yeah, I was off by a year. I wanted to do it in two years.

**Jerod Santo:** Oh, you actually were ahead of schedule. So I thought for a minute there that you landed, to the T, like June 29th. But that's right, I'm off by a year. So it was a year ahead of schedule...

**Jason Warner:** It happened much faster than I had anticipated it being possible to happen... And I think largely because I under-estimated a couple of thing. When I joined, GitHub always had a reputation for being a strong engineering culture, though the infrastructure engineering team at GitHub in particular was world-class.

I also underestimated my ability to recruit several people in the industry, particular one person, who ended up running product design for us. And once that person came in, we were able to change a couple of things and accelerate them.

I also do think that the founder stepping aside while he was looking for his replacement accelerated a whole bunch of things. And the reason why is it just cut down communication pathway mishaps.

Essentially, between myself, the head of sales, and the CFO, we were running everything at the company. So as long as we three were in lockstep, the entire company started to operate much more efficiently.

**Jerod Santo:** So you were off by a year, but you were ahead of schedule by a year. If you're gonna be off, you wanna be ahead, versus behind...

**Jason Warner:** It's better to win the 2018 championship than wait for the 2019 and take your chances.

**Adam Stacoviak:** That's right.

**Jerod Santo:** That's right... And I'm sure that was a moment of extreme joy, or satisfaction, or whatever it is. Did you feel done? ...like, "Well, I did it. Now what?"

**Jason Warner:** I think everyone has that. It's very different. It's different than winning the NBA or NFL championship, where you've basically just put it out on the line for 60 minutes, or whatever...

**Jerod Santo:** You just poured champagne on yourself?

**Jason Warner:** We did not do the champagne thing... However, there was a moment. The head of sales - he's a good friend of mine now. He's since retired and he's moved to Chicago. He and his husband are there with their kids... And we had a thing; he said "Hey, if you're able to pull this off, I'm gonna take you and your family to Hawaii." So just "Hawaii-Hawaii-Hawaii" became a thing with us. And there was a moment when I looked at him and he looked at me, and we just kind of said "Hawaii!" It was that moment for us, it was that kind of emotional thing... And it felt ridiculous; it felt amazing. We couldn't believe we were able to do it.

\[40:21\] You know the grind of running a company... Particularly one that you're trying to help along out of certain things, let's just say, and when you're able to see that done. But acquisition offers are hard. There was a long period of time between getting the offer, signing the letter of intent, and closing the deal. It was a long time. Long. We had to go through a lot of diligence.

**Adam Stacoviak:** Nine months, right? Was it roughly nine months or more?

**Jason Warner:** Yeah, I think it was almost exactly nine months. And we had a lot of work in-between finding out about it, announcing it, and then closing it. And there was the high of getting it done, and then there was the underlying anxiety of like "Wait a second... Do these things fall apart? What could possibly happen?"

**Jerod Santo:** "What could go wrong?", yes.

**Jason Warner:** You know, like "Am I allowed to make that comment on Twitter about a thing? Okay, you know what - I'm gonna deactivate that thing for a little while, just because."

**Adam Stacoviak:** No mistakes.

**Jason Warner:** No mistakes. And it was an interesting period of time... And how I got into tech - I like to tell the story - is I fell into it. I was not destined to be in tech. I grew up in farm country, Connecticut. My grandparents were farmers, my parents were farmers; my parents escaped farming to become other things. My dad was a construction worker, and my mother was a typing teacher who went on to become a high school teacher... I fell into tech because in my high school IBM was in the town, they wanted high school co-ops... I applied because my auto shop teacher said I should, because I was the only kid that he knew that didn't have a computer and/or a car... Whatever I'm supposed to say in that scenario where you live in a very rich town, and you're not that same thing.

IBM basically said "You don't know anything about computers? Great. You just carry these things around. But you're the type of kid that should get this job, because that's what we're after here." So I kind of fell into it.

So to just go from there, in the mid-'90s to a 7,5 billion-dollar transaction that you're primarily the architect of is kind of amazing. There's an emotional high that comes with that, and there's this weird kind of other side of it too, which is like "Oh wow, I'm 40..." at the time, I think it was...

**Jerod Santo:** Exactly... "Then what?", yeah.

**Jason Warner:** ...and I'm like "This is probably the pinnacle of my career. I pulled this off... What is next?" I'm like "Well, Microsoft's already got a CEO, so that's not the window at this point..." \[laughter\]

**Jerod Santo:** He's doing pretty good, too.

**Jason Warner:** Yeah, he's doing amazing. But you get the idea. It's like "Okay, hang on a second... That's kind of interesting." And then there's the other side of it too, which is I'm still at GitHub obviously, and I love my job, and I love what I do, though there's a different type of ownership that I have now over the company than I did before... And I don't mean percentage, I just mean emotional, because Microsoft bought the company. This is their company now. It was never my company in the first place, though I felt a certain type of ownership over it for that 18 months essentially, until it closed, that day of the definitive... It was interesting.

**Jerod Santo:** So it feels less like your company now.

**Jason Warner:** No, it doesn't feel less like my company. I still love it. I have the octocat all over my house. I've got so much swag you wouldn't believe... Though I do have to let it go differently now, which is - you know, at some point I know I will leave Microsoft and GitHub, whether that's five years from now or 20 years from now; I will leave, because it'll just be.

**Adam Stacoviak:** That's not true though, unless you can find yourself (let's say) 15 billion dollars and you can own it. It's not that hard, right?

**Jerod Santo:** \[43:52\] \[laughs\]

**Adam Stacoviak:** It could one day be yours, Jason.

**Jerod Santo:** That could be your next goal, is a buyback.

**Jason Warner:** I'll go buy the New York Football Giants, and try to make them an actual team instead.

**Jerod Santo:** There you go. There's a challenge...

**Adam Stacoviak:** Well, it certainly lends to your vantage point now for Horizon 3, given what you've been able to do with culture, with team, with scaling, with refocusing the company in many ways, or the three that you'd mentioned to enable this kind of transaction, and then the future of what a developer platform like GitHub should be. It makes sense to put you in a position or put yourself in a position that you've done, to be focused on Horizon 3.

**Jason Warner:** There's no better position in the industry to focus on developers' needs than at GitHub. And as someone who's basically been steeped in the open source industry for a long time too, in the open source world, I have the emotional letting go that I mentioned before about GitHub - I never have to do it with developers and open source. That will be with me forever, and those people... And if you ever think about tribes in the world, basically, developers are mine. I've found them and I love them, and open source in particular, obviously, is a super-soft spot for me.

**Adam Stacoviak:** That's an interesting perspective. I think we have a similar feeling that developers are a tribe, and regardless of where we go, we're always for developers.

**Jerod Santo:** For sure.

**Adam Stacoviak:** And you can see that with your career path, too. You've always been on that perspective of developers, and being at the center of this universe of tech. And even the way that you've been able to take certain practices and extrapolate them from engineering, in terms of product-market fit, and scaling, and things. As it works in engineering, it might work elsewhere, because of how critical you had to be, I suppose, in engineering, how meticulous (as you'd said before) around planning and execution and stuff.

**Jason Warner:** Largely speaking, I think that engineering in general is one of those areas where you get less wiggle room than other areas and businesses. And I don't mean that as a knock on other areas, or too much of a kudos to engineering, it's just -- it is. You've gotta take some ideas and you've gotta turn them into a real product, and you've gotta do it on a cadence, and yo've gotta guess or estimate when things are going to get done... So you've gotta find some frameworks and mechanisms that allow you to have those conversations, and make basically impossible things possible. It's always interesting to me...

Here's something else I think... I think our industry should and will eventually go through this evolution where more engineering leaders - and I don't mean people with engineering degrees, I mean people who ran large engineering organizations - are the CEOs at companies. And the reason why I say that is because the skills you develop there, the same ones you need as a CEO, though as a CEO you do need to develop a broader set of them.

So here's what I encourage... I do talk to a lot of early and younger engineering leaders, and I encourage them very much to think about the strategy aspect of things, and to understand the basics of finance, and why marketing is important, and things of that nature. But I do think that we'll see more CEOs come out of the engineering ranks, because the skills you develop there are unlike any of the other skills in any other business. The closest one you can find is sales, because sales is pretty methodical. In sales, people have to think about how you build an actual organization, and how it's running, and the efficiency of it... Which is why I think you see more sales CEOs than others. And the reason why I don't think you see engineering CEOs is because they're the worst at marketing themselves.

**Adam Stacoviak:** Well, that's to some degree visible, I suppose, in GitHub, because earlier on GitHub was run in many ways just simply by engineers. As we were on that subject earlier, I was thinking in terms of what got GitHub to where it was at - it was more like those things, in terms of this flat culture, "It got us here, but it's not what's gonna get us there." And the "there" is that 7.5 billion dollar acquisition.

\[47:50\] So in many ways, you needed that mindset of engineers running things to get GitHub to where it needed to be, to get to where it needed to go. So past that position, you get to that -- there's only so far, I suppose... And that's not unanimous, but your aspect of sales, engineers, that kind of thing, and leading and running - I know many engineers, Jerod being one of them, he's very smart... And at the same time there's another side of the spectrum that can lead well as well... And engineers sometimes have this whole back, I suppose; I don't know how to describe it, but there's something that others can do maybe better, to some degree, like you're saying.

**Jason Warner:** I think this is one of those things that we see in the industry, which is if you basically grow up through the engineering ranks, in a lot of companies, particularly late '90s, early 2000's companies, you would have one career track, which was you either management or an engineer; or IC, but engineer, specifically.

**Jerod Santo:** Yeah.

**Jason Warner:** And the trap that people fall into is that they think that if you're an engineer, you need to go management... But some engineers should be distinguished engineers, and they should run small projects and they should have purviews that are super-wide, and they should have influence, but they shouldn't run the entire organization. They shouldn't come up with -- you know, understand the efficiencies of it, they're not gonna run the organization. But there are another set of engineers who think that way.

There's a couple of engineers that I know -- obviously, many engineers I know that are way smarter than me, though we have different skillsets. I always said that the more abstracted I got, the better I got.

I was an average developer, but I was a better team lead, and a much better architect, and a much better director, and an excellent VP, and it just keeps going up - because what happens is I'm a generalist, and the purview changes. And as you can be more general and you have a large purview, and you can hold all that information in your head - that skillset is augmented. Some engineers - and particularly the really talented and technical ones - that would be a torture job for them. But what they really like to do is they like to build the systems, and they're excellent at that, and we should liberate both sides of those engineering systems.

**Break:** \[50:09\]

**Jerod Santo:** So one of the things we're guaranteed in the software industry is change, and things have changed over the years at GitHub... And things have changed quite a bit drastically not just industry-wide, but worldwide, in the last couple of months. GitHub has always had an HQ - I've always enjoyed visiting the GitHub HQ - but also remote workers. I'm just curious what the Covid-19 quarantine has done for GitHub in terms of logistically running the business, but also scaling teams, and engineering, and some of the changes y'all have had to go through, or haven't had to go through because of the way it works. Let us know how this has affected GitHub and the engineering teams.

**Jason Warner:** \[51:53\] I think for the most part at GitHub not much has really changed. About 70% of all of GitHub was remote or distributed, or is remote and distribute. Now obviously 100% of it is. If anything, I think what has changed is there is a set of people who had never worked outside of HQ, including a lot of the exec staff. Now they have, and they are... And so interestingly, I think that they're coming to realize that they themselves can do it, and not have a loss of efficiency.

Now, there is Zoom fatigue, and certain things are harder, or maybe slightly easier to do in office... But it's possible. And when it's possible, then you talk about what you want to do, and that I think is an interesting conversation, because I think many people in the industry - executives in particular, and then really particular VCs thought "You can't do it. The best software is always developed in-office, with a team, in San Francisco. Fight me on it. You're never gonna convince me."

And now all of a sudden all their tunes have changed; everybody's tune has changed... So much so that -- I've been doing a lot of talk about remote work the last couple of weeks, because everyone finds themselves suddenly distributed, and a lot of people are reconsidering never going back to an HQ, or having a very different notion of what HQ is going to be. And I find that incredibly refreshing, because as forward-thinking as we think the software industry is, this is a really regressive topic. Most executives, most VCs, most people who are thinking of themselves as risk-takers or thought leaders would never entertain having a 100% distributed company with no HQ, no matter what they said.

**Jerod Santo:** So it the GitHub HQ on the market, someone can buy that spot, or what are you guys thinking, after this all shakes out?

**Jason Warner:** We've had the conversation... We're gonna come back to the office, but we won't come back the same way. In fact, if we came back the same way, we weren't paying attention. The world changed on us overnight. You can't imagine that everyone wants to go back to an open office plan, crammed into certain open spaces the same way they were before, having a pandemic hit the world... It has to look very differently. So we have to think about how we go back to the office. Do we change some of the layout, or do we change having some of the pods, like the multi-use small-dimensional pods for phone booth rooms?

**Adam Stacoviak:** Yeah.

**Jason Warner:** They likely change. We likely don't see those as much anymore. But we'll still have an HQ, we'll just use it very differently.

**Adam Stacoviak:** This is definitely a wake-up call for a lot of people. The businesses themselves, the individuals who have been forced to do remote work where they hadn't been even interested or think it was possible for them before... And it's just interesting how this is gonna play out, because -- I don't know how much you entertain this idea of work-life blending; I think of it more like that because I just take a break from doing a podcast, go out, get a snack, have a micro-moment with my family... I just can't give that up. I just think blending is -- people always talk about balancing; I think it's more about blending, rather than just simply balancing... Because work and life happen, and rather than trying to balance the two, why not to some degree blend the two? Like, taking a few minute break, seeing my family, give them a hug, go back to work... There's nothing more refreshing than that to me, to give me another win for the last segment of this show, or any other scenario in our business. It's like, you go to have one of those micro moments, come back refreshed, and I'm ready to go.

**Jerod Santo:** That's a balance though, because I like the idea of merging more of my life into my work, but I don't like the idea of merging more of my work into my life. I still want there to be a separation, at times at least. To me, blending is like "Am I working? Am I living? I don't even know." It's all one big bubble of life, and I think that's hard to sustain. I think maybe that is beneficial in the short-term, but over the long-term can really drain you.

**Adam Stacoviak:** \[55:58\] Well, the specifics on the blend vs. the balance is more around -- like, I still believe in the times, so 9-to-5 I think there's a time constraint. You still have that balance of that. I don't ever wanna be working outside of this room, so that's the balance... But the blend is sort of like I can take 45 minutes in the afternoon if I'm having let's say a frustrating morning, or something like that. Or maybe a great morning, and go celebrate. Go to lunch instead. And maybe now it's a little different with going to lunch, because maybe it's lunch out in my kitchen, versus lunch in a nearby restaurant, or something like that.

But the blending is more just on the lines of like rather than trying to balance the two, why not blend the two. But I do understand what you mean, Jerod; the blending can only go so far, until you have to start to have harm.

**Jason Warner:** I think this goes back to a topic we talked about before, with more explicitness, and having some control over that. I always hated going to an office, because I felt like so much of my day I lost control of. I was 30 minutes away from the house, or an hour away from the house; I could not do certain things between a certain set of time, and then with my commute... But now, if I'm here, as you said, I can have a micro moment with kids - and I'm gonna co-op that, just so you know...

**Jerod Santo:** \[laughs\] It's spreading...

**Adam Stacoviak:** I love it.

**Jason Warner:** ...and I can have a micro moment with my kids.

**Jerod Santo:** Micro moments.

**Jason Warner:** Or I could then say "You know what - I need to go out for an hour with my daughter to the park", but that's fine, because I'm already taking a meeting at 8 o'clock at night... But I'm fine with that, because I'm making that decision to go do that. I feel that in some ways this gives the worker a lot more control over their life, and if they're responsible, they can really benefit themselves and the company and everyone around as well... Which is weird, because I think most people think you're getting the most out of people if they're in an office... But they're actually not, because they're losing some sort of cognitive overhang for just having to be in the office. Was that a micro moment?

**Jerod Santo:** Yeah, exactly. Adam just had a micro moment right there.

**Adam Stacoviak:** Yeah. The kid just walked in, brought me a bagel. I love it.

**Jerod Santo:** So let's talk about distractions... \[laughter\]

**Adam Stacoviak:** He wanted to say hi real bad... But that's for a different time.

**Jerod Santo:** I think in engineering this is a really easy sell, and I've also been working remotely/home office for a decade plus... So I'm right there with you guys. I'm not experiencing much of a change during this time... But I wonder about the creative aspect of work, and the riffing... And this is something that I assume you do a lot, Jason, especially with your big \[unintelligible 00:58:27.28\] and bouncing back and forth... And there is a certain energy in a room that can happen, and you're laughing or you're coming up with this, maybe you're throwing darts... There's a certain riffing that happens in real life, and I'm curious if you find that you're able to get to a creative space on a Zoom call, like you could in the same office, or if that's a real struggle.

**Jason Warner:** It's different, but I think you can do it. But let's say that -- the way I look at this one is percent efficiency. Let's say that you and 3-5 people being in an office is 99% efficient, and it's the most optimal situation you could find. There's all the whiteboards, and snacks, and whatever. 99% efficient. Is the drop-off by doing the exact same thing on Zoom and video from your homes - is it taking it from 99% to 0%, or 99% to 30%, or more realistically 99% to 90%?

**Jerod Santo:** Yeah.

**Jason Warner:** That's what I think it more looks like. So for what I get out of the situation, what my employees get, and all the workers, and the company too, because you can hire the best talent in the world, and several of our best engineers are never going to be in San Francisco... The most tenured engineer we have, the best engineer GitHub has ever had lives in North Carolina. The best database engineer that GitHub ever had was in Israel... We were able to benefit from that, for that 9% dip in that efficiency for that scenario. That's how I look at that. Not quite as efficient, but I'm okay with that trade-off.

**Jerod Santo:** \[01:00:04.28\] Right.

**Adam Stacoviak:** I think what's it has forced though is it has forced people to rethink creative environments. I think what you're saying, Jerod, is you feel like riffing only happens potentially in-person, when there's a real-time--

**Jerod Santo:** Not only. Again, the percentage - it's that ideal scenario.

**Adam Stacoviak:** Right. And that's what you have - you have people challenging that idea that in some eyes, it's an only scenario; it's unanimous that that's where creativity happens - face-to-face, whiteboard, in a room, hunkered down, whatever... And that idea is certainly being challenged, and in many ways being debunked.

**Jerod Santo:** Well, we actually played this trade-off game every single day, with podcasting... Because Adam and I have never been collocated in terms of the show. I'm in Omaha, Nebraska, he's in Houston, Texas. Now, sometimes we would go to a conference, like OSCON, or All Things Open, and we'd sit down and we'd have two mics, three feet apart from each other, and we'd have a guest over there... And we'd be in the same physical space. And we have some of the best shows in that scenario. I still remember those conversations; there was a chemistry that just is better. The timing is better, the jokes land a little better, especially mine - no, I'm just kidding - and after that we say "Dang, that was really, really good." And yet -- well, should we move to the same city then, and do that? And then our answer is always "No, we should make the trade-off."

**Jason Warner:** I mean, I think the trade-off is the right way to think about it... And that's how I've always thought about this. We supplement, for what it's worth. At Canonical we did it, at Heroku we did it, and at GitHub we do it... Which is if you're distributed a couple of times a year, you're gonna come into the office with your team for very explicit reasons, and intentionally do it for a couple different things... And we understand that. But 90% of your time you're gonna be at your house, wherever it is.

A good example of this - I mentioned GitHub Actions before; the team that kicked that off - not a single person was in the same physical location. Or I guess that is not true; we had three people (I think) in San Francisco, but the team of ten or so people that started it and then grew to whatever it was, most was distributed. But the initial team, when they got together, write the code and the prototype in a two-week period - they went to Nashville.

They got there, and they did it for a very specific reason - to go from zero to something demonstrable in a very short period of time, and they did it. But they didn't need to be that same way all the time, and that's what I think about here... Again, I go back to the notion of explicitness versus implicitness. Like, explicitly, it serves a purpose. And then go back to the other way of working, because it's much more efficient.

**Adam Stacoviak:** Yeah. Well, we're social species, so obviously face-to-face, in-person is better. As you said, there is a cost for that, and the trade-off is "Is it worth the cost?" So in Jero'd case and in my case the answer is no; I love the guy, I love to hang out with him on the weekends, compare ideas face-to-face, whatever... But he's got his life, I've got my life, and that's gonna be the same thing for everyone else in the world - there is that trade-off. So the answer is truly it is better face-to-face. It is. But there's trade-offs and there's costs.

**Jason Warner:** Yup. And I think more people are coming to the conclusion that holistically if you looked at the situation, being remote-capable is a better overall environment for things. The story I used when I was trying to convince somebody of this, for what it's worth, is - I was at Salesforce, at Heroku, and Heroku is distributed, but Salesforce was not... Salesforce had offices in other places, and a lot of offices in San Francisco, as you all know. And we were in one Salesforce building and everyone else was in another Salesforce building, or another one, and quite literally, we would spend all day on video calls anyway, talking to everyone else in the same city, at Salesforce... Because people didn't wanna go one floor down or one building over. So effectively, you had all these people who were in the Salesforce "HQ" around a couple city block, who were effectively treating each other like remote employees.

**Adam Stacoviak:** Yeah.

**Jason Warner:** \[01:04:16.03\] And I just found that to be incredibly ironic, because everyone is paying this ridiculous rent... Basically, they said "We could all go to happy hour together." I was like "That is not worth it to me to do that."

**Jerod Santo:** "It's not worth it to me..." \[laughs\]

**Adam Stacoviak:** Yeah, right. Well, usually that's after hours, or the balance hours of 9-to-5, or whatever the number is for you. Whatever that spectrum of time is that you allocate towards mind focused on work, not just simply life. Now, the blend part happens there everyone once in a while. If you let it, you get those micro moments... I like that you liked that phrase; it's awesome, I enjoy it... And I enjoy the execution of it every single day. I will never go back to an office, ever.

**Jason Warner:** Here's another way to look at this. This is a slightly different take on it; much more personal maybe, but family-oriented... There's a statistic that you will spend 70% if the time you will ever spend with your kids before their 18th birthday. So if you think about that as a trade-off, if you're a family person, that is a staggeringly large percentage of your time spent with your kids before a certain time in their lives. So if you're optimizing in some ways, optimize for those things. And that's time you're never going to get back, and that's one of those things that I wanna optimize my entire life for, is my family... Because when I'm 80 I doubt I wanna look back and say "I wish I took that job at Uber." I wish I spent more time with my kids.

**Adam Stacoviak:** Yeah. One day I wanna either read, or write a book titled "18 Summers." Because that's what you get.

**Jason Warner:** Yeah.

**Adam Stacoviak:** When you have kids, the 70% of the time - I didn't know that statistic, but I can assume it's true, based on my knowledge of being a dad... Because you only get those 18 summers. So how do you use them? Do you spend your summers blending your work to the negative side, Jerod, and overworking or blending your life, and not taking the vacations or enjoying those moments or making those memories? Are you so focused on your career and growth and these things that in the end don't really matter as much as your family?

**Jason Warner:** I have a slightly unique situation, too... Well, maybe it's not as unique, but it's non-traditional, in that my wife is home; she's home-schooling the kids now. She's a doctor, so my wife is infinitely smarter than I am. A much nicer person than I am, too...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** You seem pretty nice.

**Jason Warner:** She's just a wonderful person.

**Jerod Santo:** Selected those words carefully...

**Adam Stacoviak:** Well, she must be amazing then, if you're good...

**Jason Warner:** Okay, so we'll pin that one and come back to it in a second. But my oldest son is autistic, middle daughter has a whole bunch of learning disabilities in terms of dyslexia, dysgraphia, expressive-regressive language disorder... So in terms of us optimizing our family situation, we are going to optimize it for their needs. That was one of the reasons why my wife doesn't work anymore. She home-schools them and helps with their care, and that sort of thing... Making sure that they're progressing on their education as they should. And then my third daughter is neurotypical and she's pretty easy.

But the idea is we were going to make sure that we optimize for that. Because if I wanted to chase career, or money, or all those sorts of things, we could have moved to San Francisco and lived a severely shoebox life with them, and sent them to the public schools there, or even some charter... But it would have been harder, it would have been difficult, and we wouldn't have been thinking about them. So this is, again, an efficiency optimization; we're gonna 100% look for them, and then find the efficiency for my career in the other things, the other side of it. So that was very intentional on our part, to do that.

**Adam Stacoviak:** This life we now live in though - the previous workforce ways didn't give everybody the same choice you have, right?

**Jason Warner:** No.

**Adam Stacoviak:** The opportunity for remote.

**Jason Warner:** I have to say, I feel incredibly happy to be able to do that.

**Adam Stacoviak:** \[01:08:09.00\] Right. And I'm not trying to skew towards that percentage, I'm just trying to say that before it was never an opportunity; now, it took a pandemic like this for the majority of the workforce to open their eyes to the possibility that everybody wants to have that same kind of choice... Because most people can be pretty wise about their life choices when it comes to their career, their families... And it hadn't been possible before, to give everybody the opportunity to have that kind of choice.

**Jason Warner:** No, and when I saw this negative feedback or reasons not to do this before was - people were always worried, like "Well, if I give this to my employees, how will I know if they're being productive, or will they be as productive as they would be in the office?" or those things... And my feedback to people who were saying it was "That stuff tells me more about you than it does about your employees. So I would like you to take that as honest feedback and think "Wait a second, is this about me and my ability to be productive in my situation, or my ability to structure my life, or be disciplined enough?" That's really what it comes down to in a lot of these situations - discipline. "Am I disciplined enough to do this if someone wasn't watching over me all the time?" Because most people are going to be okay with it... But yeah.

**Jerod Santo:** We should be careful to keep the conversation focused on the technology sector, because while this does provide a huge opportunity to show companies that working from home is a thing that can be sustainable, and even better for your employees, there are literally millions of jobs that have just disappeared off the face of the Earth, and those people are not working.

**Jason Warner:** Yup. Even in our sector too, if you think about some of the robotics companies. They're gonna struggle with it, because maybe the software side of the house can, the hardware can't... And then the mix in-between - is it, is it not...?

I do feel privileged, I've been in exclusively software companies for the last decade, and we talk about farming earlier - the farmers can't; they have to go. There's an analog thing they have to do every day. There's some automation that can happen, but they've gotta get out...

I do think that in our industry, in the software industry we'll see it become a much more common pattern... And I think for the most part, what we'll see is -- we'll see some interesting tech come out in the next five years I think too, that makes it much more possible for this to become the daily pattern for people.

**Adam Stacoviak:** Well, VRs - is VR gonna have a resurgence for this?

**Jason Warner:** What is VR again? I forget what that is...

**Jerod Santo:** "What is VR?" \[laughs\]

**Adam Stacoviak:** Exactly... It's like the third resurgence of VR; it keeps trying to--

**Jason Warner:** Is that some new coin that I don't know about?

**Jerod Santo:** Yeah, VRcoin... Although mixed reality is what it's now. See, VR wasn't doing so hot; AR has a chance, so they merge them and now it's MR. Mixed Reality.

**Adam Stacoviak:** Interesting.

**Jerod Santo:** That's just my conclusions based on what I was reading. Who knows...?

**Adam Stacoviak:** To your point though, Jerod, there is a massive amount of people that the job just can't be done remotely.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Without the stadium, you have no concession stands, or things like that.

**Jerod Santo:** Yeah, totally.

**Adam Stacoviak:** There's just things you do in social scenarios that just aren't possible at all. You can't serve me a Coke, or I can't order a beer, or whatever it might be, from home like that. It's just not possible. Or in a remote scenario.

**Jerod Santo:** Yeah. In the software world though this has accelerated a trend which was already happening, and it just really is kicked into high gear. So a lot of the people that were thinking "We can't actually do this", they're actually learning "Well, we could... We just either didn't think we could, or we didn't want to."

**Jason Warner:** Well, in many ways, technology the sector might be a first wave as well, and we might see -- maybe not in our lifetimes, but it might happen for other sectors. As new technology comes out too, that allows - an example being the farmers - to do more from the house, because maybe with the drones and the satellites and the automation they're able to do a higher percentage from one location. It doesn't have to be in the tractor.

**Jerod Santo:** Right.

**Jason Warner:** Who knows...?

**Jerod Santo:** \[01:12:09.01\] So when it comes to managing teams - you talked about discipline, and explicitness, and I think definitely there's certain personality traits that work well remotely or at home, and there's other ones that don't \[unintelligible 01:12:21.07\] So people who generally are self-starters, insofar as like they get up and they can put themselves to work - I do believe many people can practice that or get better at it over time. It's not like you're condemned to somebody who can't put themselves to work. But there are some people that do better at it than others, right? And they need -- even the commute, which nobody wants to get their commute back, but there is something about it where it's like a transition into a mindset, and back out of it...

There's people like "I wanna be in an office, I wanna be with people, I want that. I have a hard time working at home." Surely, you have people like this at GitHub, who are struggling with this, and you're trying to help them through that, like "Here's how you can be effective as an engineer at home. Here's how you can work with teams, manage teams at home..." Do you have do's and don'ts, or tips and tricks, or mindsets that you can help with your engineers who are struggling to be productive, or to feel good about their work?

**Jason Warner:** Well, the true, honest introspection is a super-power, I believe... So if you're struggling, for whatever reason, be really brutally honest with yourself and figure out what the struggle really is. Is it a lack of motivation, or a lack of understanding, or maybe you're anxious, or you feel a deadlock, you're waiting to be told something and you want to go get it, you don't wanna go get the information... Or maybe you're just lazy. And I'm not saying that in the bad way. Maybe you just can't get up to go do this. But figure it out, and then, once you know the answer to that question, you can probably know how to attack that.

Very, very broad-stroke tactics that I've seen work are - people talk about having a rhythm to your day. Just like a company should have a rhythm to its entire rhythm of the business for every year, you should have a rhythm to your day. You wake up, you do the same couple of things; you've got a commute, then you go to your office, you go to your place, and it's like going to work. There's that moment.

The other is to develop some of the skills needed, because they are different to be successful remote than they would be in the office. The most critical skill I think is to pick up the phone, which is basically my way of saying that you need to go get information, more than you need to give information, in a lot of scenarios. So if you're waiting to be told to go do something, it's much faster, better, easier, to go ask to get some information.

And if you're able to kind of shift that mindset around, you likely are already 80% on your way to being successful remote. It's more of a passive type of approach to wait, and in a remote scenario that can't be.

And then the other thing I say too is that if you're a manager, assume a set of things. In my experience, what I've seen is that typically the worst traits of someone's mental make-up or behaviors will manifest in a remote scenario. So if you're an anxious person, you become hyper-anxious. If you're a micro-manager as a manager, you become a super-micro-manager. It's like a level up, apparently, it feels like.

**Jerod Santo:** Super-micro... \[unintelligible 01:15:30.20\] super-micro-moments, Adam?

**Adam Stacoviak:** Maybe...

**Jerod Santo:** Sorry, I just wanted to say the word again.

**Jason Warner:** But you get the idea. It feels like those things will become exacerbated in a remote environment. I talk to managers a lot about this, because if you're the type of person as a manager who "just wants to check in", it's likely gonna drive you freakin' crazy, because you've gotta find different mechanisms to give context and get information back about statuses... Because if you're gonna rely on the same office mechanisms, it's gonna feel very different in a remote scenario.

**Adam Stacoviak:** \[01:16:06.25\] Yeah.

**Jason Warner:** When I think about other things that can happen remote, too - the lack of information becomes deafening in a remote environment. In an office setting if management, or the execs or some information is not flowing around, for some reason it doesn't feel the same. But when you're not getting information pushed to you and it's not being communicated in a remote environment, or something feels like it's being lost for some reason remote, it's exacerbated infinitely, in my opinion.

It's also why I wind up talking to people about - particularly in this situation here - being over-communicative. to really write things down, to do it a couple of times, to be willing to write it in an email or a GitHub issue, or jump in an all-hands and do a Zoom for everybody, and then do a Q&A afterwards... But ambiguity will kill you in a remote environment, so try to drive to as much clarity as possible, as quickly as possible.

**Adam Stacoviak:** The feedback loop is really the crucial thing, right? You mentioned introspective, which leads to awareness... So self-awareness - I agree, it's a super-power. And the necessity of a feedback loop, so relationships - that's a feedback loop. How Jerod feels about me, how the work we're doing is working etc. Those things are all feedback loops. And to almost sort of have a resurgence of appreciation for quality feedback loops... Because what's happening is when you get cut off from information, whether it's purposeful or not, is isolation. And in isolation we wither. What you really need to come back is connection.

**Jason Warner:** We're on a podcast, so no one's gonna be able to see this... So this is just for YouTube, but I'll use my hands here, because that's just how I roll - imagine your company is the box of the Zoom call here at this point. Imagine basically that it looks this way - you're in the upper left-hand side of this box as a CEO. The CEO needs to communicate strategy, mission, vision, some context, something. That communication needs to work its way down to any individual inside the organization. And that person - basically, the job of this communication is that person should know what they're working on that day and why. That's the whole purpose of that communication channel. And then there needs to be a separate communication channel back-up about the status of those things; the feedback loops, the statuses, how things are going, where they are, all that sort of stuff. And it basically makes a V, if you think about that, that communication channel from CEO to CEO, all the way down and up.

Bad organizations or poorly-run organizations look like a flatline. There is no feedback loop, or it's a long vertex. And the better you are, the closer the V comes to a vertical line. Now, it's theoretically impossible to get to a vertical line, but if you can narrow the V as narrow as possible, you're probably a really good organization.

Now, it just also happens in my opinion that that exact same scenario is what makes a collocated organization a great organization. If they can master that whole pathway, they're gonna be an excellent organization. In remote, it's required.

**Adam Stacoviak:** So you're saying communication is key.

**Jason Warner:** Yeah.

**Adam Stacoviak:** Okay.

**Jason Warner:** Communication.

**Adam Stacoviak:** Check. Yeah, expectation, communication, clarity - you can really thrive... If you know what's expected of you and you're clearly put out your expectations for those that work around you, it's gonna be a lot easier to do your day-to-day work.

**Jason Warner:** \[01:19:52.14\] A hundred percent.

**Adam Stacoviak:** But it's easier said than done.

**Jason Warner:** Much easier.

**Adam Stacoviak:** It takes work... We're not saying it's easy. It takes work, it takes intention more than anything. Intention...

**Jerod Santo:** And discipline.

**Jason Warner:** So this to me goes to a different topic, though I'll mention it, which is my view largely of leadership in the tech industry is not a favorable view... And it's largely because most people have not mastered this set of skills. They might get really, really good at selling, or vision-setting, or whatever, but the grind of building the skills to do this right here - which is not a singular skill; there are many things that need to get done in between here and there. This is a project management feedback loop. This is about goal and expectation setting, and context, and delegation, and they all need to come together to become an excellent company. Most people - that's the hard, deep work that a lot of people just don't either master, or have time for, or skip, or for whatever reason is just not in their world. I think if more people spent time on those things, we would as an industry have a much better view of leadership in general.

**Jerod Santo:** So you're not just a writer of notebooks, you're also a reader of many books; you've read many books to help you get to where you are in terms of your mindset, your view on leadership, how you impact teams etc. I know you have a shortlist of book recommendations. We would be remiss not to get that from you, for us and for the listeners... Books that you find invaluable, that have gotten you to where you are and helped lead so many impact teams like this.

**Jason Warner:** I'm gonna butcher some of the author names I think, so help me get these in front of people once we do this...

**Jerod Santo:** We'll link them up.

**Jason Warner:** James Clear's Atomic Habits book is excellent. I'm saying that knowing that he lives here in Columbus with me, so I just wanna give him a plug. Regardless of that, it's an excellent book, too.

I like Extreme Ownership by Jocko Willink. Basically, it's the notion of obviously just taking ownership over something. If you can, ownership leads to mastery. That's what most organizations are gonna need.

I like Team of Teams, and I cannot tell you who writes it... But I like Team of Teams, because it's all about organizational structures and how you organize to get things done, in a lot of different ways.

There's a book by -- I think it's Patrick Lencioni, called The Advantage, which is the follow-up to Five Dysfunctions of a Team. I like those two books quite a bit.

Ben Horowitz - either one of Ben Horowitz's books. The Hard Thing About Hard Things, or "What You Do Is Who You Are" I think is his follow-up book. Both of those are excellent.

**Adam Stacoviak:** \[unintelligible 01:22:32.23\]

**Jason Warner:** Yeah. And I think The Hard Thing About Hard Things is a follow-up to Andy Grove's High Output Management. I like The Hard Thing About Hard Things more, it's just more relevant to the time... But High Output Management is a classic, so if you do read it, it is good. I would just recommend you the first two chapters, which I don't know why they're even included in the book... But the rest of the book is quite good.

The other thing I do like - I recommend this quite a bit internally to people as well... I like this service called Blinkist. And I am not a paid person for this, for what it's worth; I just like the service, and I use it a lot. Most of these books I think you can get on there and literally read in 20 minutes, or have the audiobook read to you in 20 minutes.

**Jerod Santo:** I'm as well.

**Jason Warner:** And I can't recommend that enough, because most of these things should not be 300-page books.

**Jerod Santo:** Yeah, most books have one, maybe two, and if you're really lucky, three good ideas in them... And I'm also a non-paid Blinkist shill, because I enjoy it quite a bit... The cliff notes are good, and that's what it basically is - a modern version of cliff note.

**Jason Warner:** Yup.

**Jerod Santo:** You get a sense of it pretty quickly. 15-20 minutes, in and out. Boom. Although there's a weird side effect of that - I feel like I've read a lot of books, but then once people start talking about them, I'm like "Nope, I haven't actually read that", and then I remember why... I'm like "Oh, I summarized it."

**Jason Warner:** Yeah, you do lose the story aspects of things...

**Jerod Santo:** Totally.

**Jason Warner:** \[01:23:59.13\] ...because most of the filler is some story... Which could be fun, it's like a side-quest. And half the podcast here is the side quest to the stories. And you joked about having a podcast called The Breaks, because those are fun. It's just -- if you're reading something, you really wanna get to the meat of it.

There's an awesome book about Abraham Lincoln, and I think it's called "A Cabinet of Rivals", or something like that... It's something along those lines. And I believe it's like 750 pages. And I tried a couple of times to read this, and it is fascinating, it is literally an amazing story, and stuff... But I do just wanna get the cliff notes version. I wanna know who is trying to backstab who, for what weird reason, and how Abraham Lincoln was able to ultimately navigate it - I just get lost sometimes in those \[unintelligible 01:24:45.29\]

**Adam Stacoviak:** There are some stories that lend themselves to be summarized, and some that are better enjoyed going through the details, that's for sure... Especially if you're listening to, say, something that's fiction, that's just for fun. That's what I say.

**Jason Warner:** Yeah. If you all could actually summarize 2020 for me, and give it to me in 2021, and I can just go to sleep for a little while, could you do that?

**Adam Stacoviak:** We'll try, we'll try.

**Jason Warner:** \[laughs\]

**Adam Stacoviak:** I would agree with that though.

**Jerod Santo:** I think there's plenty of us that would like to hit Fast-Forward on this one and see what happens in the next chapter.

**Adam Stacoviak:** \[unintelligible 01:25:21.03\] mention of Blinklist... Or was that Blinklist or Blinkist?

**Jason Warner:** Blinkist.

**Jerod Santo:** Yeah, Blinkist.

**Adam Stacoviak:** Because here I am, behind the scenes, like a die-hard FOMO kind of person; I feel like I'm gonna miss out on something if I don't listen to the whole book. However, I can appreciate summarizing certain books, which is why that's my perspective.

**Jerod Santo:** It's great for non-fiction, yeah.

**Jason Warner:** But what it's really good for -- it's great for non-fiction, it's great for business books, but it's also great to lead you to a book that you might actually really want to read. And I have done that.

**Adam Stacoviak:** Kind of like a teaser, or a summary of some sorts, to kind of get them...

**Jason Warner:** Yup.

**Adam Stacoviak:** "I can dedicate more of my time to the full book", is that what you're saying?

**Jason Warner:** It's kind of like back in the late '90s, early 2000's, HBR condensed book things that they would sell in airports... Like "Hey, read this book in five minutes", or whatever. And you use it to go and say "I wanna know more about that topic. I will actually pick up the book."

**Adam Stacoviak:** Is your book list over, or can I add one to it? Is there more?

**Jason Warner:** No, go ahead.

**Adam Stacoviak:** The book I wanna add to it is Essentialism, by Greg McKeown. There's a chapter in that book that I don't get right, but it reminds me of its importance. I don't recall the chapter number, but the chapter name is "Protect the asset." It's essentially about protecting your sleep, protecting your health... Because you can't be you unless you're you; and you're not you unless you've got your mind, you're not you unless you have your mental health, your body... And essentialism kind of reminds you -- I think even this pandemic has been a resurgence of finding out what's essential to you. What's essential to you? And that's what it is; it's not minimalism, it's not a tribe, it's not some sort of religion... It's "What is essential in your life?" The vital few, versus the trivial many. What do you need to work on right now? What really matters to you?

That chapter, "Protect the asset" to me was mind-blowing. It seems so simple, "Protect the asset", protect your sleep, protect your health, but so often do we trade our health, our mental freedoms for other things, for whatever reason.

**Jason Warner:** I literally have a blog -- a half-written, poorly-done blog post that I probably will never publish called "How I sold GitHub and wrecked my back at the same time, and how I fixed it." Because my back after the acquisition was basically trashed, because of the hours I was putting in, and how little I was sleeping, and doing some other things. And for the past year, maybe over that, I've really had to focus on getting my health back - my back, my glutes, my hamstrings, my hips... Things that really were troubling me, that I basically let go for that reason. It's funny, because I can't think about it the same way anymore, because if I'm 40 now \[unintelligible 01:28:11.00\] "I need to get this thing sorted out, otherwise I'm in trouble."

**Adam Stacoviak:** \[01:28:17.15\] What do you think about this then - to add one more to that - this idea of doing things like that, with intention, in a season. So knowing that you had to make some sacrifices during a high-pressure time in your life, this pinnacle period of your career even, that there had to be some trade-offs. Not to say that \[unintelligible 01:28:34.15\] but just this idea that sometimes we do things, we sacrifice certain things, but I'm okay with doing it only if I know it's for a season; a sustained amount of time, with constraints applied to it. There is an ending to it, I know when it is, I have a plan - that can be something I can get behind. But there's even some downsides to that, too. What do you think?

**Jason Warner:** I'm okay with that. I think that there's a time and a place for those things, and I think that you can essentially time-box those, and say "Hey, we're gonna put in on the clock..." A good example is going back to the acquisition - my wife and I had very explicit conversations about what I was and what I was not going to be doing. At one point I went to a hotel in San Francisco - not very many people knew about it - because I needed to be down there to do certain things with people around. I didn't make it home very often in a 2,5 month period... But we had a very explicit conversation it was only going to last for a certain amount of time, until something either did or didn't happen, and that point then we'd move on to an alternate plan.

I could not live that way indefinitely, and I intentionally had to have a conversation about it... But I do think there can be seasons, and I think you can go through bursts. Projects go through this all the time. There could be a steady state for a project, but there needs to be a burst in the middle, and then another burst towards the end... But they don't need to always be that way.

**Adam Stacoviak:** Well, Jason, I feel so much more wiser having had this conversation, for many reasons. One, you blew our minds around the acquisition of GitHub; an unexpected part of the conversations, but very much appreciated.

**Jerod Santo:** Yes.

**Adam Stacoviak:** And I'm definitely gonna -- there's some of the books you've mentioned I've read, some of the books I haven't, so I'm either gonna Blinkist them and try it out... Blinkist, if you wanna be a sponsor, you can reach out, but right now we're just promoting because hey, Jerod seems to love it, and so does Jason... And I'd be willing to try, because I'm down for anything. So I'll either Blinkist it, or - the arch-nemesis of Blinkist, Audible. I do Audible a lot.

**Jerod Santo:** \[laughs\] We would also appreciate an Audible sponsorship. We're not sponsored by either one, but we are open for both!

**Adam Stacoviak:** That's right. But if you go back to that Cory Doctorow episode we did though however, he would say sans Audible, because of DRM, and all those things... So if Cory is listening, Cory, whatever your recommendation is \[unintelligible 01:30:45.20\]

**Jerod Santo:** Sorry, Cory. \[laughs\]

**Adam Stacoviak:** But Jason, thank you so much for sharing this story with us, and your time with us, and this wisdom.

**Jerod Santo:** Absolutely.

**Adam Stacoviak:** We're much better to have you on the show. Thank you.

**Jason Warner:** Thanks for having me, guys.
