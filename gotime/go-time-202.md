**Kris Brandow:** Welcome to Go Time. I am your host today, Kris Brandow. Today we're gonna be talking about maintenance, once again. This is episode three, I think it is, in this maintenance series we're doing, and today we're talking about not maintaining our code, not building or buying, but instead, maintaining ourselves and our lives.

I'm joined today by my co-panelist, Natalie Pistunovich. How are you doing today, Natalie?

**Natalie Pistunovich:** Hello. I'm doing better than my internet, thank you for asking. \[laughter\]

**Kris Brandow:** Well, that is a good thing. And Natalie and I are joined today by Ian Lopshire. How are you doing today, Ian?

**Ian Lopshire:** I'm doing great. Happy to be here.

**Kris Brandow:** Amazing. Alright then. So as I said, we're gonna be talking about maintaining our lives today, and more importantly, maintaining balance within our lives. And to start off, I have an interesting question I wanted to pose to my two panelists here... How many weeks do you think are in the average human life? Ian, why don't you take a guess first?

**Ian Lopshire:** Well, about 50 weeks in a year, about 80 years in a life... So like 4,000?

**Natalie Pistunovich:** \[04:13\] \[laughs\]

**Kris Brandow:** Why are you doing math? Human math...? Alright, Ian says 4,000. What do you say, Natalie?

**Natalie Pistunovich:** I agree with Ian. I think there's that article "Wait, but why?" that they count that, and they also show which part of that you spend with your parents, until you're 18, and then you leave the house, and I think that one left a strong impression on me that this is so little. But yeah, I agree that this is a roughly similar number, I guess... If you live about 80 years.

**Kris Brandow:** Yeah. Well, you're both right... It's a little over 4,000 weeks, which is an astonishingly short amount of time, considering we spend 20 of that -- if you go to college and school, so it knocks you do to like 60 years total... So it's not a large amount of time that we have to work with over the course of our lives... And a lot of that time we do spend at work, trying to balance going to work for 8 hours a day, 5 days a week for most of us... If you happen to work at a startup, that might be more like 10 hours a day, 6 days a week, or something crazy like that...

So yeah, the scene for this episode is "How do we spend those 4,000 weeks as effectively as possible, and in a way that makes us as happy as possible?" So to start off, let's talk about work, and balancing work. Not necessarily work and life, but just work. And I'll start with this - I think I brought it up in episodes before, but a lot of the terminology we use in software engineering, it's all about speed or intensity. We have sprints, we have velocity, we have agile. And I want to pose this question to you, my two wonderful panelists - what do you think of the framing of these words that we use? Do you think that they're a bit too intense? Do you think that they give the right amount of intensity (I guess; whatever) to how we should feel about the work we're doing, and the speed at which we need to achieve things?

**Ian Lopshire:** So I do think sprint specifically is one that kind of gets me... Sprint just kind of gives this idea of "I'm gonna do something as fast as I can, and then be done", but then we do it every week. Just the idea, just the word itself brings to mind an unmaintainable pace.

**Natalie Pistunovich:** I was trying to remember what is the word that we were using in my first job... My first job was in hardware; it was at Intel. It was not agile, and it was not a startup by all means... I could not manage to remember that word, but there is some planning; obviously, I don't know how I feel about that word, because it's been a decade and I don't remember it, so obviously I don't feel strongly about that, positively or negatively.

The second job that I had afterwards (the first one in software) was not doing any of the agile stuff. Not sprints, nothing like that. No planning as well. There was a daily stand-up, but I think I really enjoyed that. And then going to the one afterwards, that's how I got introduced to those terms. I did like this list... So exactly, Ian, like you say, this rush. "Let's try to make this in time, and let's measure things", like velocity... Velocity versus speed is - back to physics class, is that when you're going somewhere at a specific speed, but also you're going with a direction, right? That's like vectors versus - how do you say it in English? Scalars?

**Ian Lopshire:** Oh, scalars? Yeah...

**Natalie Pistunovich:** Yeah. Why does velocity have a direction? Why is it not speed? Where are the product managers to answer that? \[laughs\]

**Kris Brandow:** Yeah, I mean... Where is Angelica? Angelica, where are you?

**Natalie Pistunovich:** \[laughs\]

**Kris Brandow:** Yeah, I would take an assumption to say that probably we want a direction for where we're going, as quickly as we're going, so we kind of aren't just working against ourselves. Because we're just optimizing for speed. We could be driving in a circle, we could be one sprint going in one way, and another sprint turning completely around and then going back to where we came from... And obviously, if we just do that, we're not actually going anywhere, even if we are moving quickly.

\[08:02\] So I guess for that one, I would say there's this nice idea of like velocity... At least we're aiming at something. We're trying to get somewhere. But is that something that we should be measuring on a sprint by sprint basis? Is the word velocity that we all just kind of defined between ourselves as like the speed at which we're heading towards something in a direction - is that the reality of what velocity is in our sprints? And in the practice of software engineering, we do. That's a very meta question. Wow. \[laughter\] What do you think, Ian? Do you think that what we've just kind of framed velocity as lines up with velocity that we experience when we actually build software, or when we measure our speed of building software?

**Ian Lopshire:** I think we try to make it line up like that. To me, velocity is something that everyone's trying to measure, and no one's doing a good job at it. Or maybe I've never been somewhere where we've done a good job at it. I don't' know. I actually did not quite follow that whole question that you've just asked, but... \[laughter\]

**Kris Brandow:** Yeah, so I guess I can kind of repeat it, or rephrase it to be -- yeah, I'll rephrase it. So basically, in the conversation we've just had, we basically said -- you know, Natalie brought up this interesting point about velocity in physics being like speed in a specific direction... And she asked "Why do we measure this directionality, instead of just the speed at which we're moving?" To which I kind of added too, and tried to answer her question by saying "Because we wanna make sure that we're going in a direction that is positive for us." We have a goal, we have something that we're trying to build, we have something that we're trying to do... So that could be why we use the term velocity instead of just trying to measure speed. The question I asked you was "Does that actually match?" When we say velocity, when we measure velocity over the course of a number of sprints, is that actually tracking the direction in which our software is going, or is it tracking something else, and we're just using the word velocity because it sounds cool?

**Ian Lopshire:** I mean, I think it's the latter. I think we probably use that because it sounds better than speed, or they already use speed for something else... I've never seen a mechanism that says "Hey, did this ticket go backwards in any way? Did I just spend two hours ripping something out that I spent three hours working on previously?" So I do think it's pretty much synonymous with speed.

**Natalie Pistunovich:** That's a really interesting point, the ripping out part. When you see a GitHub pull request that is more red than green, somehow we're all more appreciative of this because somehow, sure, it makes the code better because it's less of it. And this is in some way kind of going back - I wonder, really, if there's any logic behind velocity; that is the logic that this is measuring.

**Kris Brandow:** I also think it's an interesting point too, because there is this trend that we have, of saying "Make your code more deletable", and we should delete code, or we should -- ideally, I think at one point we're trying to get to the "Don't write the code in the first place."

But yeah, on the deleting code point, I think that really is interesting. It's like yeah, we all strive to make code that's deletable, but what's that really saying? Like, we wrote something -- is that deletable code something that we should have had there in the first place, or did we just write something that we shouldn't have and we made a mistake? And are we doing anything to track those mistakes, to try and make sure that in the future we just write less code overall, instead of writing code that's deletable?

**Natalie Pistunovich:** It's a little bit like when you move to a new place and you to go IKEA and quickly buy something until you get real furniture... It's like, "This code is there until I put real code there."

**Kris Brandow:** Yeah. But I feel like that's what we just continually do. We just continually buy more foldable tables and chairs, and we get slightly nicer versions of those tables and chairs...

**Natalie Pistunovich:** Yeah, refactoring is pretty much like one by one finding a nicer one, but I have more IKEA than I'm willing to admit at home. I do think that the one day that I'll decide to make it a less IKEA flat and more a flat-flat would be not one by one, but kind of one day I'll bring in a home designer, and she'll make everything beautiful. But it will not be one by one. But in software, it's sort of like piece by piece, element by element. Why is it different?

**Kris Brandow:** \[11:55\] Right. You know, I think that's a really good point there, because we do have this very iterative "Don't do big design upfront. Do it piece by piece", but I think your apartment analogy is spot on. I know for me personally, in the last apartment I lived in, I did take this more piecemeal approach; I did just buy a bunch of IKEA stuff, and like "I need a bookshelf", so I just bought a bookshelf. I needed some nightstands, and I just bought some nightstands. Just piece by piece. Every time I needed a little thing, I just bought a little thing. But my apartment never really -- it didn't feel like it had a good flow to it. It felt that it was just kind of like assembled, piecemeal, and things were just kind of patched together.

And when I had moved into my current apartment, I decided "Nah, I'm just gonna plan everything. I'm gonna plan how I want everything, and figure out all of the pieces." And I did that for the first iteration of my apartment. I sat down, I've planned everything out, I bought the things, I got the things, I put them up... And then I've added to it since, but all those things I added to are in the same field; they're in the same balance with everything else in my apartment. So it looks like those things were put there right from the beginning. But the only reason I could do that is because I planned upfront. I said "This is the aesthetic I want for my apartment. This is how I want things to look, this is how I want things to feel." And I feel like a lot of times in Agile we don't do that. We hate to plan; we try and get away from planning. We try to get away from the big upfront design, as it sits.

**Natalie Pistunovich:** It's also a little bit like "I'll just get this temporary thing that my neighbor gave me, this nightstand", and then it's like, five years in, this is your nightstand. It's not temporary. In software it's pretty much the same. You're just quickly gonna patch out whatever is needed, and then it's like, five years later "Oh, maybe we can remove that", and then finally it happens.

It does kind of feel that if you have time and you're not rushed to move in, then you can plan and then it will look nice, but if you don't, you just go whatever off-the-shelf is, and then probably the same as an IKEA apartment, it feels probably an IKEA code would feel like this. How would you describe the equivalent feeling of code to an IKEA apartment?

**Kris Brandow:** I feel like what we do is we build IKEA apartments, or IKEA houses really...

**Natalie Pistunovich:** Containers...

**Kris Brandow:** And there are some really nice things at IKEA, but we build the cheap IKEA stuff. I think containers are a good example. I think Kubernetes is a good example of that. It's like, "We're gonna have an IKEA home." It's like, "We're gonna have a Kubernetes system", and it's like, "What does that mean?" And at least most of the places I've been, that means you just start pulling pieces off the shelf as you realize that you need them, and you haven't thought everything through, but there's so many different pieces that you could put together, that you wind up trying to get the best localized decision, but they don't all fit together. Maybe the best container orchestrator or container runtime doesn't fit well with the best service mesh, or whatever. So you wind up with all of these pieces that sort of fit together, but don't really fit together...

And then eventually, we all decide that "Well, this line of IKEA isn't cool anymore, so we're gonna toss it out, and bring in a whole new line." And it's like, we just recycle all of the furniture in our apartment, but we didn't really solve the underlying problem. I feel like that's a thing of balance. I mean, that's something we should definitely explore here, of just like -- we do have this cycle in software engineering, where we go from "Oh, we're just gonna put a bunch of stuff together, get stuff off the shelf because we need to go fast." Whether you're a startup, or it could be a project, you don't have a lot of time, or you don't have a lot of resources... We pull a bunch of stuff off, patch it all together, and we're like "Good. Removing." And then it works, and then over time it just becomes brittle, and it crumbles, and everybody hates maintaining it. It's like IKEA furniture that you've taken apart and put together again a hundred times, it's like "This stuff doesn't fit anymore." And we're like, "Okay, we'll throw it all away, and then we're gonna try again. We're gonna try fresh and new."

**Natalie Pistunovich:** But fast again.

**Kris Brandow:** Yeah, but it's fast again. It's like, fresh and new, but at the same pace we were moving before.

**Natalie Pistunovich:** At the same velocity. \[laughs\]

**Kris Brandow:** \[15:53\] Yeah. We don't wanna lose any velocity. You need to keep moving, you need to keep building. We're gonna build a whole new platform, a whole new set of microservices or whatever... And I feel like we blame the furniture for being bad. It's like, we blame Kubernetes for being bad; we blame REST APIs, or JSON, or a container, or whatever, and it's like, we bring in a new hotness, and it's like, "Ah, microservices will fix this", or gRPC will fix this, or whatever. It's like, yeah, that lamp didn't fit with the decor because it's like a bad lamp. It's because you didn't buy a lamp that fit with the rest of the stuff. You've gotta buy things that fit together.

**Natalie Pistunovich:** Yup. Yup.

**Kris Brandow:** Man, my statements are not ending in questions... \[laughs\]

**Natalie Pistunovich:** But they're so wholesome and so true that you just find yourself nodding, like "Yes, absolutely."

**Kris Brandow:** Yeah, I feel like this is like "Kris just talks to the world, with Ian and Natalie bringing up really good points."

**Natalie Pistunovich:** \[laughs\] Well, if anybody is listening to this and is gonna build the IKEA equivalent of software - hi. We're happy to inspire you.

**Kris Brandow:** Yes.

**Natalie Pistunovich:** Please make it reverse-compatible. I have a very old kitchen in this apartment, and it doesn't fit the new door, so... Please make it reverse-compatible more.

**Kris Brandow:** I do feel though that - speaking of this kind of like... So I think what we're getting here is some sort of like we need a better balance of how we build software. It's like, we're stuck in this loop, it feels like. We got really inspired by iteration, so we iterate a lot, but it kind of feels like we're iterating on the wrong things. We're iterating on the concepts of how we build software, but not the fundamental problems of the software itself. And I feel like one of the things that we tend to iterate toward or kind of default to - at least we did so heavily in pre-pandemic times; maybe it's shifting a little bit now... But it feels like every time there's a problem, we kind of strike up a meeting. We're like, "Yes, let's have a meeting, let's put a reoccurring meeting on this schedule, and that will solve the problems that we're having. We'll get together and we'll have meetings." So my first question is "Do either of you find meetings to be productive?"

**Ian Lopshire:** I would say maybe one in ten. One in ten meetings is productive.

**Natalie Pistunovich:** \[laughs\] Can you predict, Ian, if a meeting is gonna be productive or not?

**Natalie Pistunovich:** Oh, definitely. Is there more than three people in it? Then no, it's not productive. \[laughter\] It's a good rule, I think.

**Natalie Pistunovich:** Yeah.

**Ian Lopshire:** I think if a meeting -- the intention is to solve a problem when you go into a meeting, and not discuss what the problem is. That's probably not going to be productive. We shouldn't form solutions in meetings. We should figure out the problems, to solve them, and then sync back up and be like, "Hey, is this a good solution?" Everyone sitting around at a table, trying to solve something - I don't think it's the best use of time.

**Natalie Pistunovich:** That's a very good point. I think also meetings that don't have an agenda, or something like a prep doc, are also likely to be less productive. Not always, but it's a good indicator.

**Kris Brandow:** I feel like that's one of the hard balancing things... We all know that good meetings -- or I guess many of us know that good meetings require agendas, but we get a lot of those invites that just never have an agenda, and they never have the "What are we actually gonna do in these meetings?"

**Ian Lopshire:** That's actually one of the rules we have... If there's more than three people in the meeting, it does need an agenda.

**Natalie Pistunovich:** That's a great one.

**Kris Brandow:** I like that. That's a good way to balance the meetings in your schedule. Alright, so I think we can kind of agree... It seems like there's a way to balance meetings here. I feel like our short conversation has kind of brought us to this conclusion of "Meetings - not necessarily bad." They can be productive, but they need to have structure to them. They need to have an agenda, they need to have a purpose... Because you know, there are meetings where you have a really nice agenda, but also, it's like "What conclusion are we trying to reach?" And sometimes it can be hard just to get to that point as well.

But another area of balancing work and trying to keep things in order is the backlog. It's this giant list of things that we have. I have definitely felt in the past that backlogs started to become giant dumping grounds for tests that we want to do. I'll often feel pretty endless. It feels like "Oh, there's so many things on it that I wanna do", and it feels like we're moving through it so slowly. And I wonder if either of you have maybe some suggestions for our audience, or some techniques you use to help make the backlog that you guys use feel less daunting...

**Natalie Pistunovich:** \[20:11\] One thing that works actually as a community organizer, so not related to code, is that we have a Trello board per year. And we can carry over meetup ideas, which is what lives in our backlog column, but you have to kind of proactively opt in. You want to do this; it's not kind of like -- if you have some board that is not necessarily per year, but per project, this can stay in the backlog forever. But if you give it a lifetime of a maximum one year, or kind of like the end of the calendar year, you do reevaluate this better and it's more generally acceptable to kill things in the backlog, that "Well, it's a good idea. It's not gonna happen. We don't take this to the new year."

**Ian Lopshire:** Something that we do is -- I think it's called ICE scoring. Impact... What is the C? Confidence, and Ease. So you score them 1 to 10, and the compound score is the addition of all of those. And then we just kind of drop everything at the bottom of the list, we archive that and we don't ever look at it again. We've decided it's not a big deal. And if that stuff changes, it's gonna rise back up in that list.

There's so many of these prioritization things that exist that probably do work well... And I'm fine with the backlog just being huge. It's not supposed to be organized, it's a backlog. It's where I wanna put something that I don't want -- like, if I leave, I want somebody else to be able to read about it. It doesn't necessarily mean we're gonna do it.

**Natalie Pistunovich:** It's also a place that if you have somebody else who joins the company, or the team, and says "Hey, we should do that", it's like "No. Look. It lives in our backlog for 3,5 years."

**Ian Lopshire:** Yeah. "It's a great idea, but look how hard it is to implement. We're not gonna do it", that sort of thing. Otherwise you rehash things. I agree.

**Natalie Pistunovich:** Yeah.

**Kris Brandow:** Yeah, I like that use of a backlog, the nice rule in place where it's like "Check the backlog before you add something new, to make sure it doesn't already exist there." Because that's the other thing I've found with backlogs sometimes - we do pile in things, and it's like "Why \[unintelligible 00:22:01.20\] same feature request, or the same thing in here?"

**Break:** \[22:06\]

**Kris Brandow:** So we've talked a bit about balancing work, hopefully we've given our audience some nice tips around that... Let's talk about balancing things outside of work. I wanna start with community. Many, or I think probably all of our listeners are part of the Go community, so we're all involved in a community... And Natalie, you help organize both a conference and meetups, so I'm wondering, for you - do you wind up having to track the time that you spend in the community space in the same ways that you would track your full-time work?

**Natalie Pistunovich:** \[24:14\] I will make a small correction that I'm not helping organizing, I've been the main organizer for the five years, and it's been a long five years in the Go meetup, and I'm still very much enjoyed that... And with the Go conference - yeah, I'm not tracking my time well, because I don't have a reason to do that, I guess. It is a blocker in the calendar in that sense, so I know not to plan on that, and I know roughly how much it takes... But I think it's all -- at least the Go meetup is somewhat structured, in the sense that it used to be the same format every time, and then we were two co-organizers, and now we're three, and each one owns a month. And on months when we have a good backlog of speakers - and I'll take a second to say that we always need speakers; please submit a talk, even if you gave it at another meetup; we're happy to hear that. Yes, it's online, yes, we'd still want to hear that...

Jumping back - I know that I will have to do the same few steps as I've been doing for the past few years every few months... And I guess because it's so automated, it also no longer needed really to be tracking... But maybe whenever inviting a new co-organizer on board, which used to be slightly more frequent than the Covid days, when people would relocate more, I guess - I had to put a number on this when I was asking if anybody wants to help me... Because I would say "This is how many hours you need to commit to." But now, the same organizers are with me for two years now, so I think I forgot how long it takes.

I would track that if there would be any monetary things, as I would track my job, yes... But because this is community work, I guess saying that like an evening a month for joining the meetup, and then a few more hours of here and there emails - nah...

**Kris Brandow:** I think that makes sense. I know for me personally, I've -- I don't think I've ever tracked my own hours for community work... But I have noticed that I do self-regulate a lot; so if I'm involved in too many things - because I've organized several conferences and meetups in my past, even going back to my days of Drupal, actually.

Hilarious side note - I'm still part of the Drupal community in New York City. I think it's like ten years later at this point... And yeah, I kind of like pull back and then go back in; if I feel like I'm burning out a little bit, I pull back, and then it kind of swaps in... And I think that's an interesting thing that happens in communities that I've found - the organizers, the people that keep everything going, they do tend to change over time.

I think it's amazing that you've been an organizer for five years, Natalie. You've gotten it down to be like a few hours a month plus the night, but that's a long journey, for sure. I've seen a lot of organizing groups kind of cycle in and cycle out.

**Natalie Pistunovich:** It's \[unintelligible 00:26:57.20\] inefficiency.

**Kris Brandow:** Yes, you've gotten your velocity to a very, very high degree, so you can just knock out all of those tasks you have to do...

**Natalie Pistunovich:** Ze German pipeline.

**Kris Brandow:** Yeah. \[laughs\] It's that German efficiency there we've got going... And I wonder -- and maybe you've already answered this... Do you find yourself setting boundaries around things, or are they really just built into the way that you've set things up? Do you ever get close to experiencing burnout when it comes to your organizing, or anything like that?

**Natalie Pistunovich:** Definitely, yeah. Occasionally, when that feeling comes, it's in the form of "I don't want to do this anymore", and then I would probably ask one of my co-organizers to step in and just switch months... So that's the good thing about having the option of switching. And I think it also comes a little bit with big holidays for me... If this is a Christmas slowdown, I think it's a bit of a mental, like, "Let's make sure that the December meetup is very early in the year, and the January is very late in the month", so there will be a bigger gap... But it also makes sense, because so many people have travel plans.

\[28:04\] To make another analogy, it's a little bit like budgeting. Some people budget in the sense that they know to the resolution of like pennies of cents how they spend their money and where it goes... And I find that for me putting a cut-off and saying "All the expenses under $50 I would not really keep track, and I'm okay with that, because I know where the 80% of my money is spent, and the rest is here and there."

I think managing spending and using the time in a similar way is the way that works for me. But organizing meetups is one way of doing community work, open source is another way of doing community work.

**Kris Brandow:** Right. Yeah.

**Natalie Pistunovich:** Ian, how do you budget your open source time?

**Ian Lopshire:** You know, I'm much more of a consumer of open source right now than a major contributor... But I kind of tend to treat all of the open source stuff and general work stuff as like one big block. So it kind of comes in when there's slower times with my real job. I tend to work on open source stuff like that... I think mainly because I only have so many hours a day it means that I feel like I can sit down and think about tech stuff, think about code... So yeah, I don't know if it's the healthiest way to budget that, but I tend to just lump those together.

**Kris Brandow:** Yeah, I would say for me -- I think the main open source contribution I've done has been part of work, so it's always been lumped together... So I think especially when it comes to code open source, the most open source I've written was for a job that I had. So I never had it be like a separate thing, but from community work I've definitely gotten the sense of burnout before. I've definitely been that place where it's just like "I'm gonna take a step back." But I think for me what it often turns into is like "I wanna do something slightly different from what I was doing before."

A good example of that for me is with the Drupal stuff. Originally, I was one of the main people organizing the meetup, and then I became the AV person, so I'd take care of recording all of the meetups, and then getting them up to YouTube, and all of that... And then I also became the person that would take care of all of the food and beverages, to make sure we have pizza, and beer, and all of that at the meetup.

Then for a while I had the venue, so it was like "Oh, I'll make sure we can have the space every month." So I'd always trade off roles whenever I'd feel like one of the roles I'm in is getting too exhausting or getting too boring for me. Because I think that's always a sign of burnout.

So yeah, I think that's like another way that you can kind of help balance your life when it comes to community involvement and community work. And I think that applies to open source, as well. I can imagine a good scenario where you could -- maybe you start with contributing to code, but then you don't have much time to do code, so maybe you do code reviews, or maybe you just do documentation... Although I kind of feel like it's the other way around; documentation and code reviews take way more energy than writing code, most of the time. But whatever it is you kind of trade off, I think that can also be a good way to keep yourself away from burnout for any of the kind of community stuff you might wind up doing.

**Natalie Pistunovich:** Speaking of code reviews and writing documentation, Hacktoberfest is now... Have any of you signed up?

**Kris Brandow:** I have not...

**Natalie Pistunovich:** Have you signed up in the past?

**Kris Brandow:** I feel like I haven't heard of it before...

**Ian Lopshire:** Yeah, I'm in the same boat here. I've never heard of Hacktoberfest.

**Natalie Pistunovich:** Is it my accent, or...? \[laughs\]

**Kris Brandow:** No, no, I just --

**Natalie Pistunovich:** Okay, just making sure... GitHub and some other companies, like DigitalOcean, and some of them change over the years... But if you make this many open source contributions - so it can be code, it can be a PR, it can be documentation (the rules change a little bit every year), then they send you a swag packet... Like, stickers, and a T-shirt \[unintelligible 00:31:34.29\] and then it's always fun to wear that into a job interview, because they're like "Oh, you're contributing to open source. That's nice."

**Kris Brandow:** I like that.

**Natalie Pistunovich:** So you have to do those -- I think it's three; I forget... You have to make those contributions within the month of October. And there's some rules that you cannot make up repos and contribute to yourself, so not cheats like that, but actually do something good, to whatever level that you can. It can also be contributing typos, and so on. Really, any level that works for you... But it has to be helping promote open source. I think it's a wonderful initiative, and it's the small things that kind of like -- because you get a T-shirt, because you get that care package, it's fun; it makes you enjoy open source more.

**Kris Brandow:** \[32:15\] I think that's really cool. I need to check that out.

**Ian Lopshire:** Yeah, same.

**Kris Brandow:** Because who doesn't want more swag...? Especially with the fewer in-person conferences, I feel like my amount of swag has just been so low these past few years.

**Natalie Pistunovich:** I have to say, the Hacktoberfest T-shirts every year - they're so soft. It's wonderful T-shirts that you get. You know, there's always that one vendor that everybody likes their shirt - it's this one. You want their shirts.

**Kris Brandow:** Oh, yeah. That's the other thing I remember at conferences - those high-quality T-shirts... It's like, "I'm gonna remember your company forever now, because you have that one really nice conference shirt that I can wear forever."

**Natalie Pistunovich:** And in the last two years many of them have been through tests, that we wear house clothing way more often, and don't get to refresh that stash.

**Kris Brandow:** Yeah, yeah... Well, hopefully in-person conferences will make a return next year, and we'll be able to gather together again... Alright, well let's move on to another topic about balancing our lives, and let's talk about actually balancing our life-life. We've talked about work-life balance - well, there's a life component there... And it feels like even though we have so much to do at work, sometimes it feels like we have even more to do in our personal lives, depending on what your actual personal life is, whether that's kids, or extra-curriculars you're doing, or hobbies that you have, even if those hobbies are things like open source, or community... So I would ask my two panelists here, "What do you do in your life to prevent feeling overwhelmed by what's happening, and all of the things that you have going on?"

**Natalie Pistunovich:** Well, I can tell you what Ian is doing... I think Ian loves walking his dog... \[laughter\] No. I really enjoy spending time with my cat; I include her in most of my social media... So probably most of my Instagram stories is her. A good amount of my Twitter pictures is her. I try to spend a lot of my professional time with her. I feel like cats and coding is a good combination...

I do enjoy being outside a lot. I used to work on my sailing license; I did make a pause and I do hope to continue... I really hoped to have made it to the next level this summer; this did not happen, so maybe I'll use the winter slowldown for that.

Probably sports, because it's always good for you... And - well, somehow, I'm one of those people that doing meetups is really energizing them. Or even organizing events. You start in the evening, and then 15 things went wrong, and then it's the end of the night "Ooh, that was fun." And online it's not the same, I have to say.

**Ian Lopshire:** I totally agree with that. In-person meetups are something that -- I feel like I'm still making progress in my working career, but it's just so enjoyable. That does feel like a nice balance.

**Kris Brandow:** And just being able to go and get a drink with a friend afterward as well... That's always nice. I definitely feel you there, Natalie, with the whole -- like, yeah, when you've had this big event, and it's over, and you're just sitting there and you're just like "Ooh... That was a lot, but it felt amazing." The energy you draw from that can be absolutely wonderful.

So Ian, what do you do when you start feeling overwhelmed, or to prevent yourself from feeling overwhelmed with everything going on in life?

**Ian Lopshire:** For me, a big one there is exercise. I climb pretty regularly, and I try to do that more when I'm feeling burnt out, or have a lot going on... It's amazing, you can spend like an hour a day exercising, and it feels like it gives you back three hours in your day of focus and not feeling drained... That's kind of about it. I'm a pretty simple guy.

**Kris Brandow:** Nice.

**Natalie Pistunovich:** I think that going outside, leaving the house is different for people who live in a house, versus people who live in a flat. I live in a classic, old German building, with very high ceilings, and I live on the last floor, and we have no elevator. So going outside is -- like, from the moment that I touch the door handle, until I'm breathing outside air, and I have to go through the yard between the buildings... It's the second building, so this is like a solid six minutes.

\[36:09\] So leaving the house is like a big engagement. \[laughter\] And I imagine if I would live in a house, or even on the ground floor of a building, it would be a lot more of an easier thing to go outside and grab some sun... Especially as the winter is coming, and the days are shorter \[unintelligible 00:36:24.04\]

It's a good question to bring up, because you should be more mindful of that, especially if you live further from the Equator and you're getting more dark hours...

**Kris Brandow:** Yeah, I definitely try -- over the past year, I think it was December of last year I was like "I'm not working out, I'm not doing enough to keep myself physically healthy", so I started just jump-roping, and then when the spring rolled around, I started running again... And I just remember how different it felt from like -- you know, in the middle of last year I was just like inside for days and days at a time; I'd order my groceries, order my food, because "I'm in New York City, there's a pandemic... I don't wanna go outside. It's absolutely terrifying outside." And I don't think I realized how much that did wear on me until I did start getting outside again, and running, and just having the fresh air, and all of that.

But likewise, I live more vertically high in the air, so there's like an elevator ride. That is somewhat quick, but it is like this experience of like exiting my home was just not the same as when you live in a house and you just kind of like open the door and then "Boom, you're outside." Now I have to actually get in an elevator, and then have my ears poppin', and all this other stuff that happens when you're going down. It's like a transition.

But the other thing that I do to try and not be overwhelmed is I tend to write a lot. I do a lot of journaling. What some might consider a ridiculous amount of journaling. But it's that thing that keeps me centered at the end of the day. I think now I'm up to writing about 5,000 words per day, of just like journaling and just getting everything out of my head. So I think if writing is your thing, dedicating yourself to actually journaling every day is a really good way to prevent yourself from feeling overwhelmed.

So we aren't always great at keeping ourselves from being overwhelmed, and you know, when you experience a lot of being overwhelmed over the same period of time, we tend to burn out... So first, I wanna ask - if you have felt overwhelmed in the past a lot, and gotten close to burnout, or gotten close to burnout and caught yourself, how have you avoided falling all the way into burnout? How have you reversed the trend that happens there?

**Ian Lopshire:** Yeah, so I've caught myself feeling that way a couple of times in the last couple of years... I think when I am starting to feel burnout and overwhelmed, I used to have this habit of shutting down and not communicating... Or a project is not going well - you kind of get this landslide of "It's not going well, so then I feel bad, so I'm not as productive, so it goes down..." And I think the biggest way to get out of that is just communication. Communicate with your team, communicate with your manager... And if everyone knows where you're at, and everyone's okay, that pressure just kind of goes away. I think that really helps alleviate some of that burnout. Obviously, it doesn't do everything for it, but it just does help it from escalating.

**Natalie Pistunovich:** It also makes things more manageable. It's not as scary that "Oh no, they know that all this time it was one thing, but this is \[unintelligible 00:39:19.29\] and no more, and I will not do that work..." and so on. So definitely, like -- the sunlight is disinfecting.

**Ian Lopshire:** Yes.

**Natalie Pistunovich:** It sounds better in other languages, but it makes sense even in English, in the sense of communicating that makes things kind of more into proportion, and stops that from being a snowball. Yeah, I definitely agree that telling to the team that "There will be a slowdown coming up", that velocity is not going to be the same... \[laughter\] Those are good ways of handling that in your professional life.

**Kris Brandow:** \[39:56\] Yeah, I like those. So have you ever gotten to the point where you are just actually fully burned out? Like, it's exhausting to get out of bed every morning. You just don't want to. "Can I just not?" If that has happened to you, how have you actually pulled yourself out of that situation?

**Natalie Pistunovich:** So I used to work for a company that had a limited vacation day policy... And that, of course, translated to me taking like maybe two Monday/Friday to bridge for a little bit of a long weekend, but then it came -- I think September, or close to my birthday, which is end of August, and I realized that I have not been on vacation for probably a year, probably more. I took a week off on my birthday, and it was terrible, because I didn't make any travel plans, I didn't do anything specific... So I was just sitting at home, and because my brain was used to be working so much, but it had no new tasks, I just filled it up with all sorts of ideas, and that week - I came out of it with a list of 50 half-started, half-done projects... And just like putting it in the backlog, versus saying "I'm not gonna do it" is also a bit of a mental toll for me, saying "Oh, I'm not gonna do that."

Probably I learned how to say no well from that week, and what I would do today is catch it earlier, and take some time off - maybe not a week; maybe a few day - and see if I need more, and... I'm really enjoying binging books in Audible... Just in something completely different. Not stories, but sort of like skills, or something... Like an interesting discovery somebody made, something like that. This is to kind of shift the focus, but still remain somewhat productive. So channeling that energy somewhere else.

**Ian Lopshire:** I think you hit the nail on the head when you said "catch it earlier". I do think it's obviously best to catch it before you get to the point where it's hard to get out of bed in the morning... And something interesting I've seen recently is mandatory vacation. I've seen a couple of companies talking about that, both to prevent this burnout and to... Just better tech; you're not there, everything should still function.

The company I currently work for does something kind of like this. We have one Friday a month where everyone's off, so it's kind of one of these recharge days, and... It seems kind of silly, but having everyone off at the same time really does take the pressure off. It's not vacation at this point. No one's working, I'm not holding anyone up... And especially during these hard times, that went a long way.

**Natalie Pistunovich:** In Norway there's a thing that if you don't take your vacation days for the year, your employer gets a fine.

**Kris Brandow:** Oh, wow.

**Natalie Pistunovich:** So people have their vacations. You're gonna have to have a really good reason not to do that, and nobody will want you to not have all of those... I think this is a big mental difference, generally, between Europe and the U.S, how many vacation days you have... So in Germany, minimum mandatory for a full-time job is 24 days. And you can carry over to the next year. Different companies have different numbers, but usually something like ten, and you have to use them until March the following year... But there's this tweet that goes around, that everybody laughs at, that compares the European and the American mentality of "I'm gonna be out of the office between 5 and 7 PM because I'm undergoing a surgery, but I'll respond to your email as soon as possible", versus "I'm on a lake, phishing, and I'll talk to you in a month only if you follow up with your email, because I'm gonna delete all of them the day I'm back." \[laughter\] This is a big difference... And of course, it's exaggerating, but I think this is a very interesting concept, to say that "If your email is important, this is when I'm back, and it's on you to bump it. It's not necessarily on me to go through 3,000 emails because I went on a 3-day long vacation."

**Kris Brandow:** Yeah. And I think, Ian, you brought up this other perspective of it, where it can be actually beneficial for the company as well to make sure people are taking their vacation time... I know that at least in the U.S, and I'd imagine other places as well, in the financial industry, certain positions have mandatory, contiguous 2-week vacation times every year. That's to ensure that -- you know, it takes about two weeks for a financial scheme to fall apart, so that's to make sure that fraud isn't happening...

\[44:14\] But I think the same sort of thing can apply for us in software, just like making sure that there's not a single person that's keeping this one system running... Because the always wake up when it's falling over. And if that person got sick, or if they left, now that whole system would break. So I think having days or weeks where nobody's here, or like everybody has to take this big, long time off, just to make sure that we have that organizational resiliency to actually survive someone being gone for a period of time is definitely in the best interest of the company as a whole. So it's good for the worker, good for the person... It's a win/win.

**Natalie Pistunovich:** That's a really good point. It's true. That's the way to find single points of failure.

**Kris Brandow:** Yeah. And it comes up in conversations all the time, this -- where you call it the bus factor, or just like the sick factor, or the "I won the lottery" factor... It's like, what happens when these people disappear from the company; it's like, "Well, you can artificially make that happen, with the benefit of them coming back after it's done, so you don't actually lose them..." It's one of those risk planning things. And it also kind of forces you to see how much you're depending on individual people. Because if you're like "My God, I can't have that one person gone for two weeks, because things won't get done; we'll fall behind on all of our schedules" - well, that's also a gigantic risk that you should probably mitigating and figuring out.

**Natalie Pistunovich:** A hundred percent.

**Break:** \[45:35\]

**Kris Brandow:** We haven't really talked about Go specifically, so I wanna have a little part at the end here to ask you if there are ways in which you see Go either helping or hindering a kind of balanced development style, of a balanced development experience for software engineers.

**Ian Lopshire:** Can we dig again into what you mean by balanced here? I just would love to get a sense of that.

**Kris Brandow:** See? You're making me have to define what I mean... \[laughter\] So I guess from balanced of like any of the things we've talked about... Like, does it help balance the software we write at the end of the day? Are there things about it that make it a good language for people to contribute to? Are there things that make it a hard language to contribute to? And then just in like the personal life of engineers - are there things about Go that make it so that engineers can take a vacation and feel good about it, or are there things that are like "Oh no, because we develop in this style, because we develop in this language, it's hard for people to do those things"? I'm curious if there's any linkages you see for that into Go itself, and maybe improvements we can make as a community or within the language to help resolve those things that more hinder people's ability to balance?

**Ian Lopshire:** \[48:11\] I feel like the simplicity of Go comes up in every conversation, but I think it belongs here, as well. The readability of Go does make it so when you're gone for two weeks and something goes down, someone can read through your code and figure out what it is. I do think the barrier to entry in code you didn't write in Go is lower than a lot of other languages.

**Natalie Pistunovich:** And also, a lot of the mentality that is related with Go, like doing things TDD, all the unit tests plus integration tests, and all the benchmarking can kind of put a good frame around things. You have more tools to feel confident and comfortable in knowing what to expect and assume things with slightly more confidence... Also with an easier way, because things like benchmarking, for example, is built-in.

**Ian Lopshire:** Yeah. The fact that there's one library for doing unit tests, where if something's going wrong, I can very easily go in and create a unit test that fails for it, and try to find a fix. I do think that helps, specifically in like those "Everything has gone wrong and I need to fix it right now" things.

**Natalie Pistunovich:** Also, the creation of Go followed by a creation of a lot of tools that were written in Go, that help maintenance, or even understanding what things are wrong, and making it all easier, whether it's orchestration, whether it's all the different monitoring tools that were written in Go, and so on - that also definitely helped.

I feel that also the Go community is somewhat bringing the more relaxed mentality into work... Because this is a friendly and mindful community, most Go developers take this back to their team, and they'll make the tech team kind of more not so stressful... And of course, you have to make the velocity, and you have to do, and deliver, and so on, but it's also still friendly enough, and this comes up in conversations and in understanding when things go wrong.

**Kris Brandow:** It's less so now, but in the early days of Go, the kind of combination of a standard library that had usable packages, with an awful dependency management solution made it so that we didn't have a lot of dependencies in our Go code, and I feel like that helps with the overall maintainability.

Like yeah, you had to write some code that you might not know how to write in another language, or copy some code from somewhere you might not have had to do in another language, because you could have just grabbed the dependency... But it feels like the long-term effects of having fewer dependencies is like -- fewer things are there to break, because there's fewer things that are like "Oh, this dependency got updated and it broke all of this stuff I had", or there's the security flaw that I now have to go and dig in and figure out if it affects my code, or whatnot. I feel like that low number of dependencies that we have definitely is a boon to Go... Or at least it has been historically.

**Natalie Pistunovich:** And if you're a DevOps person, you can always cross-compile very easily. Also nice.

**Kris Brandow:** Yeah. You can actually assemble container images on your Mac, locally, without having to run a Linux VM... Which is cool. Alright - well, I think it's time for some unpopular opinions...

**Jingle:** \[51:21\] to \[51:40\]

**Kris Brandow:** Alright... Natalie, do you have an unpopular opinion?

**Natalie Pistunovich:** I have an unpopular opinion fresh from today.

**Kris Brandow:** Oh...!

**Natalie Pistunovich:** Today I gave a talk about how to give technical talks... And one of the slides included my personal recommendation to use more memes, less text. And then I had several other more slides, and then we had a breakout room, and I was not participating because it was for the attendees... And then we came back all together to the call, and then all the attendees were saying their conclusions from discussing this in the breakout rooms... And most of the breakout rooms said that memes are not necessarily a good idea.

\[52:20\] It can be not inclusive to people who don't know a specific meme, it can get offensive, especially if you change it from using a meme generator to make it relevant for whatever technical topic you're focusing on, this can also not work... So a lot of people were against this idea, and this became my unpopular idea, or unpopular opinion. Use more memes in slides.

**Kris Brandow:** I like your unpopular opinion.

**Natalie Pistunovich:** \[laughs\]

**Kris Brandow:** I don't know of the meme part... Maybe the meme part is what makes it unpopular here... But I just -- like, I want more just random nonsense for me to look at on the slide while I listen to what you're saying... I don't like it when people put a lot of text on the slide and then read that text... Because I'm just gonna read it, and then I'm not really listening to them, and it just makes it more difficult to comprehend and understand what is going on.

It's kind of like an audiobook... I need something to look at, or something to do, like folding the laundry, while I'm listening to this and processing what you're saying... And if I'm doing something that distracts me, it makes it harder to actually understand.

So you know, like a nice image, or something that just kind of like helps me understand what you're saying is good; text on a slide is not great. But I think that's where memes can be really helpful... I understand people's concerns, but also, like --

**Natalie Pistunovich:** Yeah.

**Ian Lopshire:** Well, if you don't know the meme, trying to figure out how it relates I do think is engaging. Even just tangentially related pictures, where you're like "Why is there a picture of a penguin on the screen and you're talking about this thing?" I do think it's engaging. So I think I would agree with that one as well.

**Kris Brandow:** Yeah. Maybe it's a "Know your audience" thing. Know if they're gonna understand the meme... But yeah, I mean - memes are just part of daily life now. It's just one of those things where it's just like "Yeah..."

**Natalie Pistunovich:** It's also they need to strike a balance between like not too outdated memes, that people will be like, "Oh yeah, that was funny two years ago", but also not something that most people don't know.

**Kris Brandow:** Yeah... The world we live in... Memes...

**Natalie Pistunovich:** \[laughs\]

**Kris Brandow:** I bet there's a lot of memes to express that sentiment as well. \[laughs\] Ian, do you have an unpopular opinion?

**Ian Lopshire:** I think so... I don't know if this one's come up before, but -- this is kind of just a negative thing, but I don't like Make. I see makefiles everywhere, just for building things and running things, and I have never liked Make. I just think it makes things more complicated; you have to have Ruby installed...

**Kris Brandow:** For Make?

**Ian Lopshire:** Isn't Make Ruby? Yeah.

**Kris Brandow:** Make isn't Ruby...

**Ian Lopshire:** Is it Python? I don't know.

**Kris Brandow:** I don't know what it is, but it's old.

**Ian Lopshire:** It is very old.

**Kris Brandow:** There's that distinction between tabs and spaces in Make, and... Yeah, I think the guy that created Make was like "I'm sorry...", at some point. I think it was specifically the tabs and spaces problem with makefiles.

**Ian Lopshire:** I see a lot of makefiles that literally have one command in them. It's like "make build", and it's just runs a go build.

**Kris Brandow:** That I can -- yeah, when I see a makefile that just has one liners that are all of the Go commands, I kind of question why... Why not write a shell script? Why not write a Go program that runs your thing? Like, get all meta...

**Ian Lopshire:** Shout out to Mage, if anyone's seen that... The Go version of Make. I actually would not recommend using it most of the time, but...

**Natalie Pistunovich:** This will be in the show notes.

**Kris Brandow:** Do you specifically not like Make, or do you also not like all of the variants of Make?

**Ian Lopshire:** No, I don't like the variants either.

**Kris Brandow:** Okay.

**Ian Lopshire:** Just write a shell script. \[unintelligible 00:55:42.11\] folder of shell scripts, and... How is that any harder than --

**Kris Brandow:** It can be less confusing. I know there's all sorts of things I've tripped over in Make before. The way that sub-shells work - that always trips me up, of like what gets passed in, versus what doesn't... But that may be a 50/50 split. There might be some people that find it like "No! I love Make!" And then there's probably a bunch of people that are like "Burn it to the ground."

**Ian Lopshire:** \[56:04\] And it could be I just haven't taken the time to really dig in and understand everything, but I just don't know if I want to do that.

**Natalie Pistunovich:** That's fair.

**Kris Brandow:** Alright. So at the end of the day, I don't know if either of these would be popular or unpopular, but we're going to put them on Twitter, and we're going to see what our wonderful listeners have to say.

**Natalie Pistunovich:** Kris, what is your most popular unpopular opinion, do you remember?

**Kris Brandow:** The one that got the most -- like, people said that it was unpopular?

**Natalie Pistunovich:** That's very meta. Let's say yes.

**Kris Brandow:** Okay. Because I think I had two that were tied as like the most unpopular unpopular opinions... And I think the one that I remember was the one where I said that calling it Golang and not Go is a respect problem for our community. That one really got some feedback... People felt very strongly about that one. So I think that was my most unpopular unpopular opinion. I had another one that was also very unpopular, but I don't remember what it was.

**Ian Lopshire:** I disagree with the Golang one...

**Natalie Pistunovich:** \[laughs\]

**Kris Brandow:** I'm fine if you're using it context... Like, I don't know, \[unintelligible 00:57:05.19\] but don't put it on a book cover.

**Ian Lopshire:** Okay, yeah. You're right there.

**Kris Brandow:** \[laughs\] But yeah, I know people disagreed with me, but that's the point of unpopular opinions, they're supposed to be unpopular.

**Natalie Pistunovich:** That's how you win.

**Kris Brandow:** It's like the worst game to win, because it means that you said something unpopular... Alright, so - I think that about does it for us in this episode on balancing work and life... I wanna thank you, Ian, for joining us today, and thank you, Natalie, for helping on as my co-host.

**Natalie Pistunovich:** Thank you, Kris.

**Ian Lopshire:** It's been a pleasure.

**Outro:** \[57:43\]

**Natalie Pistunovich:** You know, we missed this episode -- I just realized, we missed \[unintelligible 00:58:55.10\] joke. All things perfectly balanced, as they should be.

**Ian Lopshire:** Delete half the code.

**Natalie Pistunovich:** Yeah.

**Kris Brandow:** \[laughs\] That is the solution to most of the problems. Just delete half of it.

**Natalie Pistunovich:** I think I saw somewhere an open source project that is called Thanos that does exactly that, it randomly deletes 50% of your code. \[laughter\]

**Kris Brandow:** I mean, you could probably on a lot of codebases delete half of the tests and that would make up for half of the code in it. Or delete the tests and it'd make up for most of the code in the codebase.

**Ian Lopshire:** I would say most of our codebases are more test code than real code.

**Kris Brandow:** Yeah...

**Natalie Pistunovich:** Something that deletes randomly 50% of your backlog.

**Kris Brandow:** Oh, that sounds like fun.

**Ian Lopshire:** I like that one.

**Natalie Pistunovich:** \[laughs\]

**Ian Lopshire:** Have you guys seen GitHub's thing where it automatically writes code for you? You can stub out a function and --

**Natalie Pistunovich:** Codex, yeah.

**Ian Lopshire:** I bet there could be a Thanos snap version of that, where it looks at everything and then simplifies it down to like half(ish).

**Natalie Pistunovich:** Interesting.

**Kris Brandow:** It's just like, "Yeah, we're just gonna get rid of most of this. Goodbye... Wipe it away.. Just delete all of your tests..." It's like, "Yeah... Do you really need them?"

**Natalie Pistunovich:** Or random documentation lines.

**Kris Brandow:** Or better yet, a tool that just goes around and randomly changes small things within your codebase, but keeps them compilable... Just like, really big annoyances...

**Ian Lopshire:** That's mean.

**Natalie Pistunovich:** The real fuzzing...

**Kris Brandow:** It reminds me - I saw this TikTok once, and it was like a guy, and he was just like, "If you really wanna get back at someone, do these things", and one of them was "Go to some you don't like's house, as to like a party, and take all of their remotes except one", because then they'll be like "Where are all the remotes? I have this one, so clearly no one took them..." Just small things that inconvenience people's lives, \[unintelligible 01:00:44.01\]

**Ian Lopshire:** Put dead batteries in all the remotes.

**Kris Brandow:** Or that. It's like, "Why are none of my remotes working?" Just like little inconveniences in people's lives... Don't do that. That's a way to unbalance other people's lives, and this episode was about balancing people's lives.

**Natalie Pistunovich:** Exactly. Exactly.

**Kris Brandow:** Although I guess you could balance your life by unbalancing someone else's life... No, that's not good. Don't do that. Don't do that.

**Ian Lopshire:** \[laughs\]

**Natalie Pistunovich:** Balance it to the positive, yes.

**Kris Brandow:** Positive balance. But if you want to write a bot that people can write on their own codebases, that puts small annoyances into their code...

**Ian Lopshire:** That's just like community contribution, right? Does that count for Hacktoberfest?

**Kris Brandow:** Yeah... And that could be a tool, like a pull request... Like, make sure you're reviewing your codebase; there's like slight differences... Like, actual bit rot, right? That could be a good name for it, BitRot. Did you run the BitRot bot?

**Natalie Pistunovich:** \[laughs\]

**Kris Brandow:** Man, this episode is wild... Why are you doing math? Human math...?
