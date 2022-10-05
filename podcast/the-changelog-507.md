**Adam Stacoviak:** So Lucas, you're wearing glasses. You said these glasses are your brand... No one sees you though. This is an audio podcast first, but we do have clips, so listeners, check Twitter, check YouTube for clips... But Lucas, you're wearing glasses; you said that they're your brand... What's the story?

**Lucas Fernandes da Costa:** Yes, absolutely. So there's not a lot of story about it, to be honest. I just kind of like the Kurt Gödel vibes that they give me; this slightly weird look... That's what I'm going for.

**Adam Stacoviak:** Okay... So like Superman. He's Clark Kent with glasses, and then he takes them off and he puts a cape on... So this is the opposite; you put the glasses on, you feel better.

**Jerod Santo:** Yeah, because you put the glasses on for the show.

**Adam Stacoviak:** Yeah. Now you're Superman. Super-da-Costa, whichever you want to choose.

**Lucas Fernandes da Costa:** Yeah, all the info is stored here. quite a few terabytes of data... Yeah.

**Jerod Santo:** Are those Google -- what do they call them?

**Adam Stacoviak:** Glassholes.

**Jerod Santo:** They're so dead now I can't even remember the name. Oh, Glassholes... \[laughter\] Is that Google Glass? Do you have your AR goggles going?

**Lucas Fernandes da Costa:** No, unfortunately not... But I've definitely got one of those. In fact, I do have like some VR goggles here that I bought to try out, like some of those--

**Jerod Santo:** Oh, did you?

**Lucas Fernandes da Costa:** ...immersive workspaces. It doesn't work well, by the way.

**Adam Stacoviak:** No...

**Jerod Santo:** I was gonna say, they're not in use though. They're sitting in a box somewhere...

**Lucas Fernandes da Costa:** Yeah, the resolution is not that good. So if you're trying to do like multiple screens, and coding, and all that kind of stuff - not that great, yeah. I wouldn't recommend.

**Jerod Santo:** So we haven't had you on the show in a while, but I remember having a great time talking to you... I think it was like three or four years ago, all about text mode; you were living your life in text. No GUIs... Are you still live the text mode life, or have you resigned yourself to a GUI here or there?

**Lucas Fernandes da Costa:** No, absolutely. I doubled down on it. I'm using even more weird shortcuts, and more command line tools than I was before.

**Jerod Santo:** Oh, wow.

**Lucas Fernandes da Costa:** I mean, I do have to use DUIs every now and then, because like Google Chrome and browser apps... But if I can use that terminal, I'll use a terminal.

**Adam Stacoviak:** What does that say about the advice we might talk about today then? I mean, since you're obscure on that front, are you obscure on this advice?

**Lucas Fernandes da Costa:** \[05:56\] What exactly do you mean?

**Adam Stacoviak:** Well, you've got some pretty hard opinions about productivity for teams and systems, and being effective, things like that... So I figured if you're obscure in text mode, maybe even double downing and extreming, you know...

**Lucas Fernandes da Costa:** Yeah, absolutely. I'm very good at having strong opinions. They're held loosely though, so...

**Adam Stacoviak:** Okay, good.

**Jerod Santo:** That's good. Well, I have to say, I kind of pigeonholed you into like a command line, text mode, like hardcore programmer type; that's just the way I thought of you. Then I didn't pay attention for a little while, and then I started reading your more recent blog posts and I'm like, "Dang, Lucas goes deep on engineering, and software development, and all these things." I mean, like I said on Twitter to you the other day, you're really killing it with your writings lately... I'm just curious, where is this coming from? I know you're an engineer at Elastic, but maybe give us a little bit of the lay of the land of your life, how you're drawing these strong opinions from?

**Lucas Fernandes da Costa:** Yeah, so essentially, I've been doing software engineering for a very long time. I am a software engineer currently, I've been a software engineer for many, many years. But in my previous place - I got to a more management-related role, so I was starting to have to think about "How do I organize people? How do I make these people productive? And how do I make engineers work well with other departments?"

As an engineer, I always thought of things as systems. I always like to look at things and find the dynamics, discover what are the dynamics by which those things run. And I was lucky enough to have a very good engineer work with me, who had kind of the same mindset, and who was also in a similar position before... And he started recommending me all this content about agile metrics, and actually how to see product development as a system. And then I started getting into it, I started reading a lot of Donald Reinertsen... So if anyone here is interested in that -- Donald Reinertsen is by far, I think, the best person to go to for this kind of content. Also Daniel Vacanti. I started reading all that, and started seeing things as a system. As I used to look at code, I started to look at teams. So that's the story.

**Jerod Santo:** Well, like I said, your blog has been on fire of late. I've enjoyed tons of the stuff you write about; your stuff on stand-ups, your most recent one, which I think caught fire as well around the world of programmers, "Useful engineering metrics and why velocity is not one of them." I have been a longtime skeptic of estimates of velocity, of points, of a lot of the agile practices... And I think I was most recently on Go Time talking about velocity with Mat Ryer and Natalie Pistunovich, if people want more on this topic. But Lucas' thoughts are much more reasoned and explained; I just kind of rant and rave about certain things...

So kick us into this post. Of course, we're not gonna have time to cover all the stuff you've been writing lately. If you like good engineering blogs, load up your RSS reader, throw Lucas' in there, and enjoy as he continues to publish. But this one in particular lays out really not just why velocity is not useful, but you kind of describe how we're all thinking about engineering and the process a little bit wrong, and so therefore our charts are kind of wrong, and our metrics are kind of wrong... And if we just change the way we think about it, you can start to have some useful charts and graphs, which - you even define what useful means. So I'm doing a poor man's edition of what you wrote. Why don't you give us the strong man's edition of what you're thinking about with useful metrics, and how we should think about these things?

**Lucas Fernandes da Costa:** Yeah, absolutely. So essentially, I don't like philosophy because it -- basically, Scrum is a way of insulating things, and limiting the kind of like work in progress. That's what Scrum is kind of about, right? When you have these two experiences, you're limiting how much you're going to do in that time, and it kind of makes things easier to manage. But you can achieve the same effects if you're just doing Kanban. And that's kind of like the premise of this blog.

\[10:01\] So what I do in this blog is basically model an engineering team as a queuing system. So if you imagine, the engineering team is in the center, processing tasks; tasks are coming in on the left, and they're coming out on the right. Essentially, what happens is that if tasks come in more quickly than they come out, they start to queue. And when things start to queue, you have more and more lead time, and things take increasingly longer to be done. So one of the common mistakes managers do is to start more things when they see that things won't finish, because they think, "Oh, we're not finishing enough, so let's start more things earlier", which then makes everything take longer on average.

So what I do during those blog posts is basically monitor the system as this queue that I mentioned, and then if you plot on a graph where the X axis is time, and the Y axis is basically the quantity of tests that you're either getting done, or that are entering the system, you can see that the difference starts to increase the larger the difference between the rate of things coming in, and the rate of things coming out. So the greater that difference, the longer the queue is going to be, and the longer the approximate average cycle time of things is going to be.

So once you start looking at those, when you started looking at throughput, which is the way things come out, and also the way that things come in, and you match those, they are always going to have the same distance between the two bands, and you're going to have more uniform cycle times, because you're not going to allow queues to form too quickly. And when queues form - sure, then you can, you know, rally the troops and get everyone to actually gather the time down. Because otherwise, that difference is gonna accumulate, and queues are gonna get longer and longer and longer. And then the longer the queues get, the more terrible cycle times get, and you get even less predictable... Because if you imagine that things are queuing up, and then everything takes increasingly longer, you're not predictable, because everything's going to take longer and longer. Whilst if the rates match, cycle times tend to be uniform... As long as you're finishing what you start; that's a very important assumption.

**Jerod Santo:** \[laughs\] Finishing what you start is important. Unfortunately, it doesn't always work that way. Adam, did you track everything he said there? Because I was with him like 80%, but I'm wondering...

**Adam Stacoviak:** About 70%... Let's say 72,5% and a half percent. Maybe 72.7%, to be precise...

**Jerod Santo:** \[laughs\] Okay...

**Lucas Fernandes da Costa:** Maybe if I give a concrete example, that would help...

**Jerod Santo:** That probably would help, yeah.

**Lucas Fernandes da Costa:** So the magical thing about Kanban - you know, people usually think that the magical thing about Kanban is the Kanban board, and you put the post-its there, and that's the magical thing.

**Jerod Santo:** Right.

**Lucas Fernandes da Costa:** But that's not the magical thing about Kanban. It's very good, it's great to visualize the process; it is magical. But the magical thing about Kanban is that if you imagine a factory that's producing cars - you're first making the wheels, and then you're making the chassis, and then you're making, I don't know, something else. Basically, what Kanban does is it rate-matches all these processes, so that the pieces that are coming out of one place only come in on the other place when that place is ready to get them.

So if you're making a lot of tires - let's say you've made a million tires in a day; if the next stage of the production process is not ready to receive that million tires, you're just going to have a huge queue. So what Kanban does is basically they have these Kanban cards where they can regulate what comes in into the next part, so that each part of the process rate matches, and therefore, there are no queues, and therefore, cycle times tend to be uniform.

Now, in software engineering, the queues - well, they're invisible, they're your backlog, they're like just bytes somewhere. We don't see the queues. But in a factory, it's very easy to see them. So that's the magical thing, and that's kind of like the whole premise of the post, is avoiding these queues to form; and rate-matching, seeing each part of the process as a queue.

**Jerod Santo:** Gotcha.

**Lucas Fernandes da Costa:** That's what it's about, yeah.

**Jerod Santo:** \[13:44\] So one of the things you say is that you see product development structures as systems. You said that earlier. But then you're also saying not as an art, or a series of guesses. And where I struggle with that statement is that in an assembly line of car manufacturers you know exactly what it is to create 100 tires, and 100 rims, and you know that the rims have to come before the tires, and etc. Like, all that is known. And so you can queue things up, and you can work on them, and then you can have your throughput, and you can very nicely fit that thing into a factory.

My experience with software is it's not really a factory; is that it's more like you're building a custom home. And maybe you change your mind halfway, and you realize like, actually, there's a lumber shortage... There's so many unknowns, and so many interdependencies between the tasks, that it's difficult for me to visualize it in a simple "Things coming in, things going out." Now, you've been probably writing software as long as I have, and you're nodding along with me... So these are things you've considered. Can you speak to that, the complexity of the tasks, and the interdependencies, and the fact that you might change what you're building as you're building it?

**Lucas Fernandes da Costa:** Yeah, absolutely. That's a fantastic question. So I've even written about that in a blog post about uncertainty. So you do have unknowns. Now, the important thing is that you're going to make the best possible choice knowing what the unknowns are.

Imagine, for example, that you're going to bet in a fight. You're betting on Logan Paul versus Floyd Mayweather. Whatever it is. We know that Floyd Mayweather is more likely to win, and that Logan Paul is less likely to win. That's what the odds are going to tell you. That's what the house odds are going to be; the bookmakers' odds. But if your model of reality is better than the bookmakers, that's when you make money. So maybe the bookmaker thinks, "Maybe Logan is 10% likely to win", but you think he's 30% more likely to win. That difference in the bookmakers' odds and your odds are the difference between what you think reality is and what the bookmaker thinks reality is. That's when you make money. Now, it doesn't mean you're going to make the perfect choice, but it means that if you were to make that choice infinite times, would pay-off be good? So that's what you're trying to do with product development.

Now, the other interesting thing about product development is that you don't have to make a single large bet. You can divide your bets in multiple small bets, which is the interesting thing you've talked about, mapping dependencies and everything else. So when you're making a bet in a fight or in a horse race, or whatever it is, you need to put the whole bet down. Or like in a lottery, let's say; that's the example that Reinertsen uses as well, the lottery. So if I ask you to buy a three-digit lottery ticket that cost $30, and you pay all the $30 at once - well, you have 1 in 1,000 chance of getting it right. But if I offer you to buy each digit for $10 - well, if you get the first digit right, you're not going to buy the second. So you can truncate bad bets earlier, and you're going to save some money, and you still have the same chance of winning in the long run. And that's, again, why I say that Scrum is just one way of doing it, because you insulate yourself, you're limiting yourself for not making those big bets; you're working in sprints.

**Jerod Santo:** Right.

**Lucas Fernandes da Costa:** Some people, they end up doing waterfall disguised as Scrum. That's what I'm saying here; the real Scrum is not supposed to be like that. So you are going to be making decisions with incomplete information, but the important thing is that you know what the expected value of the bet you're making is... Because in product development, value comes from uncertainty. As you mentioned, distribution is free. So there's a linear function of value delivered as you make more cars.

**Jerod Santo:** Right.

**Lucas Fernandes da Costa:** When you make product, distribution is basically free, right? You're just pressing a button, it's shipping...

**Jerod Santo:** That's the magic part.

**Lucas Fernandes da Costa:** Exactly. That's the magic part. Now, there's another vector of value that you get when you're doing product development. So in cars, the value is linear. But when you're doing product development, you can increase the value of all the new products that you're gonna ship, because you're building the recipe for the product, not the product. So you actually end up with a new vector of value that you can deliver, not only to the customers that you're going to acquire later, but also to the customers that you have already acquired, which is the whole magic of software as a service.

**Jerod Santo:** Yeah.

**Lucas Fernandes da Costa:** \[18:05\] If you're Microsoft selling Windows before - well, yeah, you cannot improve the previous version of Windows. But now with SaaS, you can just ship improvements to the previous version, and charge more from everyone. That's where the magic is.

**Adam Stacoviak:** Existing customers get to layer on new and better improvements as they use it over time, and new customers get to enjoy a great product today. And then they begin the cycle again and again.

**Lucas Fernandes da Costa:** Absolutely, absolutely. And there's multiple ways of breaking down your bets. You can throw in some A/B testing, you can ship things to a smaller percentage of users... You can ship kind of incomplete things to small percentages of your users, see how that performs... There's multiple ways of breaking down uncertainty. So you're always going to have uncertainty, because that's where value comes from. But the important thing is not that you eliminate uncertainty, because then you eliminate value; then you're working on an assembly line, of course. The important thing is that you minimize the economic impact of uncertainty without hindering the benefits. Because that's where value is. Because when you make bets that are unlikely, and they turn out to be correct, that's when you make money. That's when the fight example comes in again - when your models of reality are correct, and the rest of the world's models are slightly different from yours.

**Jerod Santo:** That's where you get those sayings, like fail early, fail often, right? Where it's like, "Okay, I want to make a bunch of small bets, and I want to validate or invalidate those bets as fast as I possibly can." So we iterate, and we focus on our feedback loops. All that makes sense, and I think that speaks to the uncertainty part. What about the interdependency part?

So we're back to now our queue system, and we have requests coming in... What do you call that, arrival rate? We have the rate of arrival of - let's just call them features. And then you have the departure rate... Is that what you call it? The throughput; and the cycle time is the time it takes to get through that on average, right?

So let's say I've got three tasks coming in, but task B requires task C to be done before it. And that's about as simple as you can get with a dependency, right? Like, "Well, A is fine. We'll work on A. B we can start right now, but C requires B. So C queues." Does your charts that come out of this concept, the cumulative graph -- what's it called? The accumulation...?

**Lucas Fernandes da Costa:** Cumulative Flow Diagram.

**Jerod Santo:** Yeah. Do your diagrams and does your view of this system - does it account for interdependencies? Does that matter? Is that a moot point similar to uncertainty, like you're always gonna have uncertainty, you're always gonna have dependencies, but actually the times are what counts, because that would be the answer? Answering for myself. I'll stop. What do you think about this?

**Lucas Fernandes da Costa:** Yeah, absolutely. So in that case, you will have to get it done after -- you will have to get C done only after you do B. There's no way around it. Now, that won't make a difference in the long run, as long as you finish what you start. So as long as you're finishing what you start -- because Little's law, which determines... Basically, Little's law can be formulated in a bunch of ways. But the way I'm using it in the blog post basically says that if you start more things, where you're going to have a longer average of cycle times, if throughput keeps constant... Because you can't simply ask developers "Oh, let's do more" and that throughput goes up magically. That's not what happens. So as you add more tasks, the average time goes up.

**Jerod Santo:** Right.

**Lucas Fernandes da Costa:** So yes, you're gonna have some tasks queuing, but as long as you finish all of them... So work never gets to zero when you're doing your job; you always have a queue for it. But as long as you're finishing what you start, the average cycle time in the end is not going to matter much, because it's a relationship of averages. So the important thing I'd say is not that you cannot have dependencies, it's that you cannot have dependencies too far into the future. Because when you're making long-term plans, the problem is that you're assuming reality is going to be in a particular way, and reality doesn't care much about what people think it's going to be like. And that's where most plans fail. Because if people could just forecast -- yeah, like, if software was a deterministic activity, things would be very, very easy. You cannot do that.

\[22:15\] So if you can shorten your time horizons, you can still have multiple dependencies. And I'm not saying "Don't have a strategy." You can have a strategy. I'm just saying, you need to be adaptable. So that's what the whole agile thing is about; agile is not about being fast, it's about being adaptable. So it's not that you cannot have dependencies or anything like that. It's just like, the more you can shorten your planning horizons, the better things will be, the easier it will be for you to adapt to new situations.

**Adam Stacoviak:** This is the difference between trajectory and roadmap. Roadmap is a plan, concrete, whereas trajectory is like "I think we're going this direction, and we may land here. Our arc may change, and we may land there, but it's where we're heading. It's a Northstar. But along the way, we may zigzag to get there."

**Lucas Fernandes da Costa:** Exactly.

**Adam Stacoviak:** That's the difference.

**Lucas Fernandes da Costa:** Exactly. That's an excellent way to put it.

**Adam Stacoviak:** David Heinemeier Hansson said this a while back; this is not like new news. I'm not saying that you can't take this and coin this, by any means, but way back in 2013 there was a startup school, I believe, where DHH was talking about planning as guessing. And then they said it again, I think, in one of their books, in Rework, potentially, and then again, on their podcast in 2021, where planning is guessing. So like this is -- this is kind of like, almost everybody knows, you shouldn't plan, you should trajectory, essentially. But is this systemic? Is it like a big issue? Do you think people roadmap versus trajectory?

**Lucas Fernandes da Costa:** So I agree with him. I do think you should have the direction in which you're going. And now, how are you going to get there - things are going to get in the way; you're going to have to be creative about which strategies you're going to use to go into that direction and continue to make progress. Now, the problem is not with setting the trajectory, the problem is when you say, "We're gonna go from point A to point B in X amount of time." Because then, one of the dangers that you have is that you might be incentivizing the wrong thing at all costs.

Imagine you have a sales target, and your sales target is X, at date Y. Someone that gets to that target on that date, no matter how much they fluctuate, and how many people quit because of the attrition, and how ruthless that person that wants to achieve that goal is, that person is going to achieve that goal. Right? That's the problem with having a long-term plan. And also, reality doesn't care that much about what you think. So that's one problem.

Now, if you're measuring direction, if you have a predictable sales machine, if you want to use the Aaron Ross term, if you have like predictable revenue, and you're going "Yeah, but maybe not at this rate", maybe you're not going to achieve this deadline at that particular date, but you're going in the right direction, and you can make small adjustments to increase the slope, and make you go up - that's better than having an erratic machine that hits the goal. So that's what I like about setting a trajectory, and having metrics that actually measure consistently how you're performing against that, rather than just saying whether you've reached a particular end state or not.

So people need to be very careful with their metrics. That's another thing I say on that blog post, which is - if you're just looking at metrics, and you're managing exclusively by them, you're gonna make wrong decisions, because... I think Deming has this quote where he says that the measurements of productivity in the United States don't help increasing productivity in the United States. You need to look at the systemic causes of those problems. Metrics, they serve as an intervention point, as a trigger point. So they tell you "Something looks weird here. Maybe you should go and figure out what's weird." That's how I see metrics, and that's why I think it's important to get metrics that reflect a direction, rather than setting a particular goal, at a particular time, and chasing it at all costs.

**Jerod Santo:** \[25:59\] Yeah. Let's do a hypothetical here. So let's say hypothetically I'm your product manager, or engineering manager, I'm above you in some sort of situation. And you're either an engineering lead, or an individual contributor, whatever you are. And I say, "Lucas, we aren't moving fast enough."

**Lucas Fernandes da Costa:** Okay.

**Jerod Santo:** What are the choices, what are the options? What can we actually do about that?

**Lucas Fernandes da Costa:** I think the first question I'd ask you is, "What does fast enough mean? What are your goals?" I'd try to understand exactly what you mean by "We're not going fast enough." Because sometimes "We're not going fast enough" can mean "We're not delivering enough engineering value", or we have too many bugs, or we're not achieving this particular business goal. So I need to understand first what is the goal exactly that you want to achieve; like, what do you mean with going faster?

**Jerod Santo:** So since we're making it up, I'll make up an answer, so we can continue the conversation.

**Lucas Fernandes da Costa:** Sure.

**Jerod Santo:** We're trying to get this new website design rolled out by the end of the quarter, and everything I'm looking at, and whatever metrics I have, and talking to everybody, it sounds like that's not going to happen. So we've gotta move faster.

**Lucas Fernandes da Costa:** So the first thing I advise is that we look at that problem from when we set that objective; from the first moment we start that project, I will start looking at what our metrics are... Not only our metrics, but like getting qualitative assessments on how we're performing against that. Not only when we see we're not going fast enough, but I would monitor us throughout the whole process, so that I can see as early as possible when something goes wrong. I think that's the first thing.

Now, let's imagine, as you've mentioned, that things have gone wrong at some point, right? So we're in the middle of the project, something has gone wrong. So first, I'd try to make a qualitative assessment and look at my cumulative flow diagrams to see whether my assessment makes sense with the metrics that I'm seeing. Maybe you're seeing a huge increase in tasks in the testing stage. Maybe that's the problem; maybe things are queuing up in tests, maybe things are queuing up in deployment. And then, if that's the case -- imagine things are queuing up in deployment; you see a huge increase in the size of that bench. Well, then it means you're accumulating lots of tasks to do that deployment all at once, right? Because that's too painful; you're letting things accumulate, so you can do a large batch transfer to production. Maybe that's a problem. And then when you start adding up loads of things - well, you have a larger delta for errors. So that's one way in which the system can be broken.

Now, there are plenty of ways in different parts of the system that things can be broken, so I'd look at a cumulative flow diagram to see the size of the batch to see if anything's queuing up, to see if there's any particular parts of the process that are painful, and try to get some more predictability, try to make things more uniform, so that maybe we'll see, "Well, we're not going to be able to hit the deadline with all these features that we initially set. so we need to make a compromise." Right? Because one of the things that people get wrong, I think, is that they can simply turn the dial and things will go faster. But every system will only produce what it can produce. If you just tell people to work harder and do more, is not going to make any difference. No one cheers for the CPU to process numbers faster. Systems produce what they can produce, regardless of whether they have a goal.

**Jerod Santo:** It's kind of like that scene from Return of the Jedi... Have you seen that? When Darth Vader comes up and he's talking about getting the Deathstar back on schedule. Have you seen that one?

**Lucas Fernandes da Costa:** No, I haven't seen that one. I don't remember, at least Yeah.

**Jerod Santo:** Yeah, and he's like -- he's reprimanding a general. He's like, "I'm here to get you back on schedule, because the Deathstar is not being done fast enough, according to the Emperor." And I think the guy says something like "We're going to redouble our efforts." And Darth Vader is happy with that response. It's like, you can't just redouble all your efforts, right? I guess we could all work twice as hard, I guess. Sometimes people do try that, right?

**Adam Stacoviak:** I think we've seen that before; you have attrition because of the pressure, and that's almost what you did too, with your questions... Like, hey, we didn't hear it, but it could have come off as "Lucas what's going on here? Why are you taking so long?" You put the pressure on Lucas, Lucas goes back and puts the pressure on everybody else... The next thing you know, you've got two people who are ready to quit for sure are going to quit now, because now you put the pressure on...

**Jerod Santo:** \[30:10\] You can't simply turn a dial, unless that dial is well known... I mean, you can say, "Well, we're gonna hire more people on this project." Sometimes that works, sometimes it doesn't, like the old mythical man month, right? Like, more people don't necessarily increase velocity. The other thing, which is where you were getting, Lucas, was we could change the scope. Right? We could reduce scope.

**Lucas Fernandes da Costa:** Exactly.

**Adam Stacoviak:** Or reexamine what we all assumed was a good deadline, or a good cycle; I'm not sure which words you were using, Lucas... But something we all agreed on is what you were saying before; like, what do we agree on? And where are we at from that? Are things queuing? Are things getting backed up? Where the pain at, essentially, so that you all can come to the same table and say "Okay, this is what we agreed on, that would happen within X" and why is that not being achieved.

**Lucas Fernandes da Costa:** Yeah. And one important thing is that you cannot control the result, but you can control the process.

**Jerod Santo:** Right.

**Lucas Fernandes da Costa:** In that process that you mentioned, that example of you trying to get a website out - well, maybe you can all get the website out at that particular date, but what's the best way for us to manage the process, so that we can do the most valuable things first, so that we can have a predictable rate of delivery, so that if anything goes wrong, we know early, and then we can negotiate scope, and then we can get the best business results? And that's my problem with long-term plans and why I say that long-term plans don't work in that other blog post.

**Jerod Santo:** Yeah, so when we come to the point where we have the meeting, and we all decide we're not going to hit our deadline, or we need to move faster, or something; something has to change, right? We've now realized, either subjectively, or experientially, or maybe through some sort of metrics, that we are behind what we thought we would be. Reality didn't agree with our plan. It's too late for any of that. Right? The correct thing, whether to go back in the past and fix what the problem was back then - but you can't do that. So starting right now, it's how do we change the process to address this problem, and move forward from here... And what you're saying goes back to the many bets thing, right? It's like, "Well, the big plan -- like, why didn't we notice this for six weeks?" or whatever it was. "Well, we weren't checking our accumulation charts enough to realize that actually, this thing was queuing over here. And now we're addressing it, but we could have addressed it three weeks ago and solved the problem." Well, let's just stop right here, sunk cost fallacy, fix it right now, change our projections, or change our scope, or change the number of people that are working on it, or pay people more, to work more on it... Those are kind of the levers you have. But what you're saying, ultimately, is the system should be designed in such a way that these things are noticed and adjusted for small course corrections along the way, versus that big "Oh, crap" moment when you realize you're gonna miss your deadline.

**Lucas Fernandes da Costa:** Yeah, exactly. Exactly. You cannot decide, "Well, I'm gonna go to the gym today, and in a year I'll look this way." But you can control yourself so that you do the things, whatever the plan that you have is, every single day, so that maybe you will not get to that exact place at the end of the period, but you're gonna do it in the best way possible, and you're gonna adjust along the way. That's what I'm saying.

Also, there's different types of projects. So if you're building a product, maybe you don't need to set particular goals in stone, right? You can make small improvements. Now, if you're working as an agency, it might be a little more difficult for you to make your clients agree to not have a particular deadline, but work in a particular way... Which some agencies do, and that's better both for whoever's outsourcing the work, and for whoever's receiving the work, because then they can agree on what's more valuable for customers, and they get a longer engagement, the company gets more value... But there's different circumstances and it's hard to say there's a silver bullet.

**Break:** \[34:08\]

**Adam Stacoviak:** You mentioned in that same post alternatives, essentially, to the long-term plans. One you said was planning more carefully, which seems problematic... And then the other one was a have a larger margin for error, essentially. And as you describe how you can plan more carefully, you seem to unravel why it actually doesn't make any sense to plan more carefully, because costs either go up, because you spend more time planning, and you were actually wrong anyways... But the other seems to be the alternative, is have a larger margin for error. Is it either of those right, or are they both wrong?

**Lucas Fernandes da Costa:** I'd say both are -- so I'm not sure if I like the word "wrong." I'd say they're suboptimal.

**Adam Stacoviak:** Okay. Sure.

**Lucas Fernandes da Costa:** And the amount by which they're suboptimal varies. So I'm not saying you should not plan at all, I'm just saying that over-planning is better. That's what most people do. Usually, you need less planning than you think, in terms of like setting particular goals in stone, or a particular date... Because you're just going to spend more time trying to bend reality, and trying to think of all the possible edge cases... And something's gonna go wrong. You cannot predict all the possible outcomes that reality can give you for you. For you to do that, imagine the decision tree you'd have to make to model reality properly. It could be even infinite if you're going to do that in the ways of physics. But that's why the long-term plans don't work. That's why planning more carefully usually doesn't work. So I'm not saying you should not plan. Planning has its place. It's just don't over-plan. And making the plan more careful doesn't prevent delays. That's one thing.

**Adam Stacoviak:** Isn't this where sprints and Scrum - I think you may not be a fan of Scrum, if I can read your words correctly... But isn't that where sprints came into play, where you can say "Well, they thought sprints meant fast, and it's actually more a measure of time", and you say, "Essentially, make the plan shorter, so that you can find out if you're wrong faster." Kind of back to what Jerod said before, which was "Fell faster." Same kind of mentality.

**Lucas Fernandes da Costa:** \[37:59\] Exactly. But the bottom thing is that you don't need Scrum for that. So Scrum - I see it as kind of like a management training wheels, because it gives you good practices out of the box. You know, just follow the good practices, and it works. But if you understand the principles of why it works, you can make Kanban work in the same way. As long as you don't create a longer queue, and you're always revising what you're going to put into the queue, maybe you can have even faster feedback. And you don't need spreads to have meetings at a particular cadence. You can work without sprints, and you can still do retrospectives every X weeks, or...

**Adam Stacoviak:** But what do you call then? If you don't call them sprints, what do you call them?

**Lucas Fernandes da Costa:** Yeah, it's harder to sell workshops...

**Adam Stacoviak:** Exactly. I like that -- yeah, we'll get to that, too. I love that blog post you have; later on about that. You have to have a name for something, right? You have to call it something. And sprints seem to -- even if you don't practice Scrum, you're borrowing the names, the terminology; even if not the full framework, you're borrowing some parts of it... And you almost Frankenstein the thing. You almost are Dr. Frankenstein, making the monster, and next thing you know it's Scrum-Kanban-whatever else there is. Something-programming, Extreme Programming; like, all these different ones. The next thing, you have a monster on your hands.

**Lucas Fernandes da Costa:** Yeah, yeah. Absolutely. So by the way, I'm not saying Scrum is bad, or anything. The book is brilliant, the principles are sound... I'm just saying that if you understand the principles, you don't need to do Scrum by the book... Which is, by the way, what most people do anyway. It's very rare for you to find someone that does Scrum exactly as it's written in the original book. But for you to adapt Scrum, you must understand the principles, so that you do the correct adjustments. That's what I'm saying.

**Jerod Santo:** I think it's interesting that the term sprint has been somewhat maligned amongst people that I've spoken with because of what you said, Adam; it's like, "Why are we always in a hurry all the time?" There is a sense of urgency in the word sprint, but the original point is the small iteration time. It's like, we're not going to spend three months on a thing. We're going to actually regroup after two weeks, or one week. But I think that can be problematic when what you think about it is like we're sprinting at all times, to everywhere, and there's no sort of like stop and catch your breath, there's no time for refactoring, for testing, for all these other things that are part of the software development lifecycle. And that stuff has crept into the culture, I think, of software development, where it's always a sprint. And sprint doesn't merely mean we're gonna go for a short period and stop, it means we're gonna go as fast as we can, at all times.

**Adam Stacoviak:** Think of it from a psychological standpoint, too... If you're always being pushed into a rush, if your boss is always making you move fast, you have no time to be deliberate, you don't have -- you know what I mean? The psychological standpoint of being in a rush, being rushed, never being on time, always "Hurry, hurry, hurry!", psychologically, you're in a state of defense. Not really offense. So even the terminology is sort of like bad, from a psychological standpoint.

**Jerod Santo:** Yeah. Well, think about it with TDD... I mean, I've had this, where I've been in a rush, and I'd practice what Hillel Wayne calls soft TDD, which is not like the real stringent, by the books TDD. I adapted it a little bit. But if I'm being honest, you know, the TDD loop is a red/green refactor. And if I'm flowing, and I'm moving, and I'm trying to get something done, if I'm honest, it's like, I'm more like red/green, red/green, red/green. And the refactor just doesn't happen, because I'm in a hurry. And that's like, "You're doing it wrong, man." But we tend to do that, especially when we have external pressures to make us move faster... We're trying to redouble our efforts.

**Adam Stacoviak:** Or you don't like to refactor. Like, "Forget that, man. I'll pay the debt later."

**Jerod Santo:** I love refactoring, but I never have time to do it. I've gotta move on to the next thing. It works, you know?

**Adam Stacoviak:** \[41:53\] Yeah...

**Jerod Santo:** But there's a confession for you... Lucas, are you a TDD guy?

**Lucas Fernandes da Costa:** Yeah, yeah. So I've written a whole book about testing, and I've written quite a few libraries related testing as well. I did a lot of contributions to Chai, and Jest, and add site and Sinon as well. So...

**Jerod Santo:** Do you ever find yourself skipping the refactor step?

**Lucas Fernandes da Costa:** So it depends... Sometimes. It really depends on what I'm coding. But I don't also follow it exactly by the book. I'd say if you're following it exactly by the book, actually, it's all what most people think; if you actually go and see what Kent Beck initially said...

**Jerod Santo:** You've got to fail that test.

**Lucas Fernandes da Costa:** Yeah. But if you go look at what Kent Beck initially said, he just said, "Yeah, your test, the test size matches how confident you feel about your code." So you don't necessarily need to add very small tests and always go through the whole loop in all these more iterations, every time. You can adjust it to how confident you feel. So that's, in a way, TDD by the book, if you consider Kent Beck's original book to be a book.

**Jerod Santo:** Right. I guess TDD by the new book, wherein every step is important that you must be as stringent as possible, or you're gonna design it poorly. I know there's plenty of people that feel that way. I tend to be a little bit looser with it... But maybe you just write your code right the first time. Like, who needs to refactor? ...because I just write it right the first time, right?

**Lucas Fernandes da Costa:** Yeah. Well, one other thing that I wanted to comment on, by the way, was your observation, Adam, on always being in a rush, and always being busy. There's also another way of putting it in this queuing system that we're talking about... Because if you imagine that the processing system in the middle is going to be very busy at all times, it's going to be always at 100% capacity - if that's the case, when something comes in, it queues, and then things start to pile up, and then you have longer cycle times. So actually, what you mentioned about being busy all the time is also counterproductive from a concrete standpoint, from a mathematical standpoint, right? Because if your system is at 100% capacity, it means everything that comes in queues, because the system is completely busy.

So operating your system at maximum capacity is exactly what causes queues to form. And also some people say that that's why Google has the 20% time, because the optimal utilization rate that you should have is 80%. So if you have 20% time, all of a sudden, you have 80% utilization rate, so you have some margin there to deal with urgent things coming up, and you don't have as much queuing... So there is all that as well involved in not making people busy all the time. Besides all the other aspects of like creativity, enjoying work and everything else. There's also a concrete benefit not making people busy all the time.

**Adam Stacoviak:** Jerod just shared his. He just created a queue himself. He was like, "I'm too busy to refactor. Red/green. Skip the R He just admitted he's creating a queue right there, because he's too busy. He's over-utilized, and he needs to move on to something else that's --

**Jerod Santo:** Refactor later...

**Adam Stacoviak:** Yeah. So there's a queue there for refactoring. At some point, there's debt he pays.

**Jerod Santo:** Or somebody else pays the price...

**Adam Stacoviak:** Or it never gets paid, and the stuff dies.

**Jerod Santo:** Yeah, exactly. So, Lucas, you were talking about the two strategies... We got you on the first one, which is the "Plan more upfront." We never got to the second one you were going to respond to Adam, with regards to the "Relax your constraints, or relax your expectations..." How did you phrase it?

**Adam Stacoviak:** Give yourself more margin for error.

**Jerod Santo:** Margin for error? That's the one I'm thinking of.

**Lucas Fernandes da Costa:** Okay, yeah. So essentially, when you're giving a large estimation, when you're adding just margin for error, you're exchanging the possibility of being late for the certainty of being late, just so that you have this small buffer that you can work to. Now, in terms of optics, if you're an agency, and if you need to agree to a particular date... If you need to commit to a date, sure. If you do need to commit to a date - well, you need to pick a date, and you're not going to pick the date that you're more likely to fail.

**Jerod Santo:** \[46:07\] Yeah. What's your upside...? Exactly.

**Lucas Fernandes da Costa:** Exactly, exactly. But in that case, you need to acknowledge that you're going to exchange the possibility of being late for the certainty of being late, because you did add the buffer. Now, one interesting way to see this, which I cover in another blog post, is basically trying to use Monte Carlo simulations to make these forecasts. So instead of you just looking at the task and saying, "Oh, I think this is two story points." Or "No, I think this one is three story points worth." And then you get into this endless discussion, and then someone says, "Oh no, this number is not valid, because it needs to be on the Fibonacci scale." Why? No one knows why. It needs to be on the Fibonacci scale.

**Jerod Santo:** Right. Because the book says so.

**Lucas Fernandes da Costa:** Yeah, because the book says so. So people say, "Oh, because complexity is not linear..." No. We're not good at estimating it. Let's just acknowledge that. It's just the way things are. So that's one way to estimate things. Now, if you're using a Monte Carlo simulation, you can just get your throughput, you can see how many tests you delivered on each day, and you can simulate over a particular period of days, and you can see the outcomes you get in all the simulations. So you can run like, I don't know, 100,000 simulations; however many simulations you want. Computers are pretty fast these days. So you run all these simulations and you see, "Oh, in 95% of the simulations I ended on or before this date." So you can kind of say, "I'm 95% confident that I'm going to finish until this date", and then you can define what your buffer is, depending on how much confidence you want to add.

Now, it's very difficult for you to say you're going to have 100% confidence, even if you pick the last possible date that your simulation gave you, because - well, reality doesn't work that way. But what you're doing when you simulate your team delivering that on a Monte Carlo simulation is basically - instead of just actually delivering once, you're simulating, "Well, if the past looks like this, and I think the future is going to look like the past, now in 100,000 situations in which I'm trying to deliver these things, what are the possible outcomes that I get?" and then use that to make your estimation. So that's one way of doing it. But if you don't have to commit to a particular date, don't. Just break down your experiments... Because there's no point in committing to a particular date if you're still experimenting things and seeing what works and what does not. Because then if you do that, you're more adaptable, right? You can change along the way. And maybe that's not the exact place that you wanted to get to by that date; maybe there's something else more important. So that's why it's important to know how to break down experiments and be agile in the true sense of the word.

**Adam Stacoviak:** Mm-hm. In regards to setting a timeframe though, there's a law - people have laws right here - and it's called Parkinson's Law. It's the old adage that work expands to fill the time allotted for its completion. So basically, if you set a time limit, you're almost destined to use that time exactly. You'll probably procrastinate to the last day, finish it at the 12th hour, 11th hour, whatever, because that's the amount of time you allotted for it. But isn't that also why deadlines are useful though, too? Because like, we've got to draw a line in the sand.

**Jerod Santo:** They are useful. Arbitrary deadlines are useful. You've just got to be able to remember that they're arbitrary, and pick a new one if worse comes to worst. But hitting something definitely makes you work I guess more effectively, to a certain extent, or with more urgency...

**Adam Stacoviak:** Well, there's an end in sight; like, there's something's gonna happen. Well, the reason why I think it makes sense to say that is because it kind of comes back to -- so you're preaching systems and creating products; it has to go through a system. It is a system, right? But at the same time, we have to be human. So your team -- like, I can't expect you to be a machine, Lucas, even though you're an engineer. You can program a machine, but you are not a machine yourself.

\[49:52\] So I have to, if I'm your manager -- let's say I'm taking Jerod's role here, and I'm his boss, or something like that... I can't expect the two of you to just somehow meet these crazy things... We have to look at the details and be able to be flexible and resilient in change. Because the system can predict certain things, but we also have to be flexible enough to be human, to say, "Well, we have systems that are reliable in place... But if we can't plan more carefully, and the time we set for ourselves - if both of those backfire, we have to be human and say, "Well, something changed here, and it's not your fault, my fault or their fault. It's just - that's how it is, creating unknown systems while we're driving the car, essentially." So we have to be human in this process.

**Lucas Fernandes da Costa:** Exactly, exactly. And I do like to say that there's no scolding solution to a bad culture, right? There's some things you cannot solve with tools; you need some with culture and with a particular way of working. I totally agree that. Now, with regards to what you said about deadlines, I don't like seeing things as deadlines. I like seeing things as preemption points. So when your operating system starts running a program, it doesn't know when the program is going to end, right? That's the whole -- if you do, you're gonna get a Nobel Prize. You're gonna solve the \[51:11\] I don't know how to pronounce it problem. The halting problem. The computer simply doesn't know if the program is gonna finish running. It just knows that it's gonna run that program for a particular amount of time, and then it has a preemption point. So it's gonna interrupt that program, and is going to start running other things. And you can do the same in your development process, right? You can start a task, and if the task takes too long - well, you have a preemption point. You have this -- I don't know, maybe you set a limit in JIRA which makes a task go red once it reaches, I don't know, five days in progress, or something. And then at that point, you have a preemption point where you say, "Why is this taking longer? Is there anything that we can do to deliver it now? Do we need to get scope? Are we trying to solve something that was not originally scoped? Did someone misunderstand something here?" So you don't need deadlines to have preemption points. And having those preemption points is the important thing. That's how I see it.

**Jerod Santo:** What's the difference though?

**Lucas Fernandes da Costa:** So the difference is the deadline - it needs to be finished at that point.

**Adam Stacoviak:** Well, it's in the language. "Dead" is in there, right? Deadline, versus preempt, which is to prevent, right? So it's probably just in the language itself.

**Lucas Fernandes da Costa:** Yeah. So preemption allows you to control things along the way, because you cannot determine -- so the problem with the deadline is that you cannot simply just like get all the way here, and then you say, "Oh, we didn't reach the deadline", and then what do you do? There's nothing you can do. You didn't hit the deadline.

**Jerod Santo:** No, you change it. That's why I said, you have to realize that it's arbitrary, if it's an arbitrary deadline. Yeah.

**Lucas Fernandes da Costa:** Yeah, exactly. Exactly. Exactly. You need to realize -- and in fact, all deadlines, they are arbitrary, in a way.

**Jerod Santo:** Yeah. But that can be -- my point was that can be useful in the case that you need something to motivate you to finish a thing. Because of Parkinson's Law, as Adam stated, we can just continue to toil away and become engineering astronauts, or architecture astronauts, or whatever it is; without a deadline, we're never going to ship a thing. I just know that personally. I'll just never do it. So I have a nice deadline -- you know, we do this Kaizen episode of Ship It every 10 episodes, and we try to work on things around Changelog, make them better. The platform, the systems etc. And I know that every two and a half months, we're gonna go on a podcast and talk about what I accomplished. So when that sucker is coming up, like "We're shipping stuff." That's arbitrary; like, we made that up. It means nothing. I could go on that show and say, "Didn't ship anything this time", and nobody would care. But it's very useful as a motivating factor for me to finish some stuff. That was my point, that sometimes arbitrary deadlines are very useful things.

Now, you have to realize they're arbitrary, and so maybe that's why you prefer to call it something else. But -- because we just won't finish stuff half the time. If you're like, "Finish it whenever it's ready..."

**Adam Stacoviak:** \[53:59\] It's a posture thing, right? Isn't it a posture thing? You have a different posture to a deadline as you may have to a preemption point. And in your case, Jerod, I can totally see the usefulness in the systems point where there's many people, not just you; preemption points might be more like, "Did we ship it? Why didn't we ship it? How can we ship it? Do we need to move things?" It's a posture.

**Jerod Santo:** Yeah. Now, I don't believe we should have one deadline six months from now and then check after six months. I believe in the iteration process, and stopping, and retrospecting.

**Adam Stacoviak:** We had a thing called "deadline and pray." You put a deadline out there and just pray you shipped it, okay? \[laughter\] Deadline and pray.

**Jerod Santo:** Yeah, exactly. That's hilarious.

**Adam Stacoviak:** Preemption is -- I like that preemption point; it's pretty -- I think it's a good thing. But I also like deadlines, too. \[laughter\]

**Jerod Santo:** As long as you don't get fired for missing one, right?

**Lucas Fernandes da Costa:** Yeah, the psychological effects - it is the same. Maybe deadlines is an easier name to understand. More people get it straight away, so maybe it's better.

**Jerod Santo:** I'm 40 years old. I haven't heard of a preemption point until today. So deadlines - I think more people are going to connect with that, although I'm always open to learning new things. So that's interesting...

**Lucas Fernandes da Costa:** Absolutely.

**Adam Stacoviak:** Well, there is some pressure with deadlines, too. It's like, "You know what - I've gotta get this thing done."

**Jerod Santo:** Yeah.

**Adam Stacoviak:** At what point then do we talk to users? We're just in ourselves right here, right? We're in our own teams. Like, did we ship? Why didn't we ship? Can we be more careful? Can we give us more margin? Can we shift the name from deadline to preemption point to just soften it a little bit? Can we be a little psychological? But at what point do we actually talk to customers and get their feedback to iterate, and essentially see if our assumptions were correct, and then fix their problem?

**Lucas Fernandes da Costa:** So I'd say users are always the best source of feedback. Now, it doesn't mean they're going to tell you exactly what's right or what's wrong. That's for you to figure out. But it's your job to go and talk to them to get some feedback. It's our job to go and crowdsource solutions, but it's your job to go and see what the problems are, so that you can design the best solutions. Because if people could design solutions themselves, they would do it.

So whenever you need feedback, instead of just confabulating in a room with ten other developers and discussing what would be better - well, if it's like a small enough piece of work, why don't you just ship all of them and do some maybe testing? Or why don't you just ship the easiest possible option, and see if people use it? Because I've seen it quite a few times, where you've built a feature, you shipped it, there was a lot of pressure to deliver that feature, and you're now thinking "Everything went great, the feature is out, people will love it." And then that feature breaks. But you only realize the feature was broken a few months later. Well, it meant no one told you the feature is broken, no one was actually using it; no one even noticed the future was broken.

So instead of confabulating and trying to just guess what users like, maybe go and get a feedback early. And that's part of what we were talking about making the smaller bets; buying the cheap tickets, one at a time. So whenever you need to break down your plan and get that small, quick feedback, go and talk to users.

**Adam Stacoviak:** I liked the way you presented initially, which was you had this big deal. Soon you'd be calling it a 500-page book, with diagrams, you're gonna convince people to a framework worth trying, then you're gonna sell them a workshop for 50 grand, and do a fireside chat with the CEO, or something like that... I just liked the way you presented the whole entire idea. It was pretty cool. When it's just really just to TTYC.

**Lucas Fernandes da Costa:** Yeah, I'm still up for the $50,000 workshop.

**Jerod Santo:** Are you still up for that? You're for hire.

**Lucas Fernandes da Costa:** Yeah. If you're paying $50,000 for me to go and do a workshop of a one-page blog post - we may be able to chat. \[laughter\]

**Adam Stacoviak:** \[57:50\] The thing, Lucas, you don't understand how often that is the exact issue. I know of a case recently, good friend of mine, situation is in defunct, and iterate, iterate, release new product, pivot, all those good things, all those keywords... "Are you talking to your users?" "No..." "What?! How are you not talking to users? How are you burning cash, how are you losing in the game? How are you so close to the red line and you're not talking to customers? ...or anybody who's even using the thing, let alone the customers? How are you iterating? How are you pivoting? How are you putting out new stuff if you've never talked to anybody?"

**Jerod Santo:** Let me psycho-analyze real quick - not your particular friend, but in general.

**Adam Stacoviak:** Please do.

**Jerod Santo:** I think we're afraid of what they're going to say.

**Adam Stacoviak:** Yes. 100%. Yeah. I mean, we want to be right. We want to assume we know exactly what needs to be shipped, or we want what we want in the world, not what they want in the world.

**Jerod Santo:** Right...

**Adam Stacoviak:** It's probably the cases... But I suspect your assumption is probably more correct, which is fear. We don't want to hear that we're wrong. We don't want to hear that what we're making is not right, not solving their problems... Because that's just too hard.

**Jerod Santo:** Especially when you've got a big bet on the table.

**Adam Stacoviak:** Mm-hm. That's why smaller bets. Or at least a good reason to go to smaller bets. Yeah, I mean, I think you fear talking to your people because - well, all the work you put out there was in vain. The work you are putting out there is in vain.

**Jerod Santo:** Yeah. It hurts.

**Adam Stacoviak:** But what hurts more, to cap it, is failure. Complete failure. That hurts way worse, because now you have no opportunity to serve the customer, because now the relationship is gone. The company is dead. There's no trust in the market, there's no trust in the product... And you've lost your chance to win. So talk to your customers.

**Jerod Santo:** A stern warning from Adams Stack... Lucas, as an addendum to this post - you were talking about velocity, how it's not a good metric... I love at the end you actually define what makes a good metric. One of these I've keyed in on a long time; because a lot of times -- even Adam and I, we look at certain metrics, or we're like "Here's a chart. Should we track this? Should we track that?" And one thing we always ask each other is, "Is this actually going to change -- like, is this knowledge going to be actionable? Are we going to change our activities based on the chart? Or is it simply to feel good, or be curious or whatever? Stare at a dashboard..."

And I love these three characteristics you list out... That one in particular, number two; it's actionable. The first one you say is it's not a target, which we have talked about Goodhart's law many times on the podcast. It seems like it's so relevant to so many things... But the idea there is, if you're tracking velocity - like, we got eight points done last week, and your boss likes that number eight, but they don't like the number seven... Well, you're gonna find a way of making that number be eight the following week, or whatever it is. We just game these systems. So those metrics - velocity, if it is just based on a number, it's not very useful in that way.

And then the last one, you say it has a clear relationship to other metrics, with characteristics one and two. Can you explain that one in better detail? So we have one, it's not a target, because then it gets gamed. Two, it's actionable, meaning you can look at it and actually change something. And then the third one - can you explain that one?

**Lucas Fernandes da Costa:** Yeah. So essentially, if you have a single metric for a system, there's many other ways for you to improve their metric by making other metrics worse, right? So you need to establish some boundaries, some quality metrics to get there. And the important thing is that you know what the relationships are between your metrics, so that for you to get to this place, you know what levers you can pull to get to this place, and how getting to this place is going to affect your other metrics.

For example, if you're going to start more things - well, if you're going to start more things, if you're gonna finish early, well, if I increase the arrival rate, what happens to the other metrics? What happens to my system? How are people going to work? Is that actually going to get me there? And if it is, what are the consequences? What other levers can I pull to get to this way? So that's what I mean... Because when you see things as systems, you need to be aware of the second and third, and however many orders effects that you have. So you need to know what is going to change as you pull the different levers.

**Adam Stacoviak:** \[01:02:20.28\] Mm-hm. Semi-tangent from this, but a good sidecar... Remember Woody Zuill, Jerod?

**Jerod Santo:** I do. Yes.

**Adam Stacoviak:** He mentioned Russell Ackoff and something that he was famous for quoting, which was, "Because managers can't figure out how to measure what they want, they start wanting what they can measure."

**Jerod Santo:** Right.

**Adam Stacoviak:** So you could be the manager, whether you're the business owner, stakeholder, PM, engineering lead, whatever... If you don't know what the measure, you measure what you can, and in this case here, what you can measure, what you begin to measure, whether it's right or wrong.

**Jerod Santo:** Yup.

**Lucas Fernandes da Costa:** What gets measured, gets managed. I think it's Peter Drucker who said this, but I'm not sure.

**Jerod Santo:** Yeah, for sure.

**Adam Stacoviak:** And you can only grow what you measure, too. I mean, these are all good reasons. On the flipside, there's a positive thing; there's another adage that says, "You don't grow or change what you don't measure." So if you don't pay attention to it, then you can't influence change, because you're just not tracking its history, its trajectory. There's positives to measuring, but if --

**Lucas Fernandes da Costa:** And there are things that you may not be able to see in numbers. That's why it's so important for managers to understand the actual work that is being done, and be able to do qualitative assessments. Deming talks a lot about that in his book "Out of the crisis" as well, about how managers should be able to understand what work their people are doing on the factory floor, so that they can do a qualitative assessment of what's going wrong here.

Imagine, for example, the deployment example I gave earlier, where the deployment process is painful and it's accumulating lots of things... Well, if you're a manager who has never done any software engineering, you're going to look at that band and you're going to see "Oh, deployments are slow. What do we do? Why is that?" You have no idea. So you need to be able to understand, so you can make a qualitative assessment. And of course, you can rely on your people to give you opinions.

So metrics will not do the management work for you. They may serve as alerts, they may give you interesting insights... But if you manage exclusively by metrics, you're gonna miss a lot of information.

**Break:** \[01:04:25.25\]

**Jerod Santo:** So a metric that you vouch for is the cumulative flow diagram; we've been talking about it with regards to things in, things out, how long they're in the cycle, what's accumulating, what is not... Have you put this into practice in your daily work and seeing benefits from this particular metric?

**Lucas Fernandes da Costa:** Yeah, I've done this before. And besides the cumulative flow diagrams, I think there's other things you should look at. So that's the main visualization, because that's the easiest way to see your process from end to end. So that way, it's very easy to see what bins are growing and what bins are shrinking. So yeah, that is a very useful visualization. Now, it's not the only visualization. That's one important thing to highlight. There's other important things that I've used much more than the cumulative flow diagram, which are, for example, scatterplots where the cycle times are different issues. I've found that much more useful in the past, to be honest.

So if you look at a scatterplot with the different cycle times, then you see that something is going up and up, and it's highlighted on the top, like in the 95th percentile. Well, if something is on that high of a percentile, it means there's something different on it; it's something that's making it take longer than 95% of the issues. That's when you get a preemption point, and then you go there and you ask "What's wrong with this issue? What do we do to deliver it faster?" So that's also a very useful visualization.

\[01:07:55.17\] Now, besides that, there's also flow time... So what percentage of time is something blocked? So if something is flowing 90% of the time, so if it's not blocked, then you know you have good flow. If you have 50%, if it's not actively being worked on 50% of the time, you're having a lot of context switching; you may have more things in your process that then you can handle, so it's also important to look at that.

So there's all these things you can look at... And looking at them as a whole is the best way of doing things, I think. Once you look at those things, you can come to a retrospective, and besides the qualitative assessment that you're going to make, you can say, "Oh, I've seen that in the past however many weeks. Things have been accumulating at this point."Or "I've seen that things are getting blocked a lot. I've seen that we've got many tasks that are deviating from what we had before." So these are all ways of using these, and you're always going to have to make a qualitative assessment in one way. But if you have these, it's easier to guide a discussion.

**Jerod Santo:** As a follow up, are there any tools or software suites or ways of making these particular charts easy to use, or available without too much effort?

**Lucas Fernandes da Costa:** Yeah, I think there are a few products that do this out there. The one I've used before is Actionable Geometrics by Vacanti, which I've used especially because I've bought his book, which is excellent, by the way. I don't know if Daniel is ever gonna hear this, but it's an absolutely brilliant book. I do think it's his company; I'm not sure, but anyway... I've used that before, and it was very useful. I do think the pieces of software other than JIRA, if I'm not mistaken, do have some of those as well... But the one I've used before it's called Actionable Geometrics. It's a JIRA plugin. I think it's also available for a few other task management pieces of software.

**Jerod Santo:** You said Actionable Agile Metrics?

**Lucas Fernandes da Costa:** Yes, exactly.

**Adam Stacoviak:** Is that a book as well?

**Lucas Fernandes da Costa:** Yes, there is a book, which is really good...

**Adam Stacoviak:** It's a book with a plugin. Or it's a plugin with a book.

**Lucas Fernandes da Costa:** Yeah. Well, they've done a very good job of educating the user so that they can get value of this complex, in a way, product that they're selling.

**Jerod Santo:** Yeah.

**Lucas Fernandes da Costa:** So the book is really great. I really, really enjoyed the book. There's plenty of talks by Vacanti on YouTube and on Vimeo. They're absolutely great. And also, if you're looking for his sources, besides the book, and besides the plugin, there is also Donald Reinertsen's book called "Principles of product development flow", which is probably my favorite book of all time in terms of product development. It was one of the most transformative books I've ever read in my career. It's a dense book; you probably need to get back to it a few times. One of the main reasons I've been writing so many blog posts is because I always go back to the book to review a few things, and I always kind of like get something new out of it. It's a great, great book.

And there's yet a third book by Vacanti about estimations precisely; I think it's called "When will it be done", which talks about how to do these forecasts using Monte Carlo simulations, and things to pay attention to, and all of that. So those are all excellent resources for those interested in seeing product development more as a system.

**Jerod Santo:** Have you tried the Monte Carlo move? Have you tried to do estimates that way, or do you just avoid estimates altogether?

**Lucas Fernandes da Costa:** So I've played around with that... I have never committed to a particular estimation that came out of a Monte Carlo simulation. I've looked at that; it's very useful for you to get some insights... But I haven't committed to a projection I've seen there. If I can avoid committing to a particular date, and if I can instead influence the process and align with the different stakeholders so that we have a cadence of meetings along the way, so that we can discuss what we're going to do next, I usually prefer to run things that way.

So I don't know, maybe someone asked you to agree on a particular date with the marketing team. Well, instead of doing that, maybe I'll ask, "Well, instead of me agreeing to a particular date, why don't we set up weekly or bi-weekly meetings with the marketing team, so that we can adjust as we go, and we can get better results, and we can sync on where we are, and all that? And we can always give you an update picture of where we are, and everyone works together to make those small bets."

\[01:12:11.15\] So things will not work if you just -- you know, one part of the company starts to make small bets, while other parts are trying to make huge bets. Things need to be adjusted. I'm not saying everyone needs to work in the same cadence; it's just things, companies as well, needs to be thought of as systems. So even the way you determine the hierarchy of the company, how you distribute resources across it - all of that is a system and it needs to be really carefully thought through.

**Adam Stacoviak:** Also collaboration is a system. You just pointed out that rather than say, "Here's the deadline. Go off, do the thing by yourself, assuming, let me collaborate with the marketing team, with the sales team, with whatever interconnected team has a concern or care about what we deliver." I mean, that's gonna be more fun, too. They're gonna work with you and they're gonna see, "Lucas is a real person, he's got a family, he enjoys these kinds of shoes, he's got special glasses that make him feel cool, or actually is cool..." You know, the jury's out...

**Jerod Santo:** Pretty cool...

**Adam Stacoviak:** But they know who you are, right? Whereas if it's just a deadline, and a timeframe, and you either meet it or you don't, there's a lot to assume about you... Which is just simply whether you passed or failed. Not "How do we iteratively get there in a story? How do we tell our company's story? How did I get to understand what marketing really needs from me, so that I can deliver better?" That might even motivate you more, by understanding more people's backstories, and more how other teams will benefit when this ships on time. There's a lot more to it than just simply the system itself. Collaboration is a good system as well.

**Lucas Fernandes da Costa:** Yeah, absolutely. Absolutely. I think people underestimate how important it is for you to actually know your peers, and know how they're going to react, and how to communicate effectively... All that is paramount. And we can talk a lot about systems, but if you don't have a good interpersonal relationship, those systems fall apart for sure.

**Adam Stacoviak:** What I'm saying is that is a crucial part of the system. It's not like this system and then that, too; the relationships aside from the system. Like, that is the lifeblood of the system, the relationships that get formed.

**Lucas Fernandes da Costa:** Yeah, absolutely. Absolutely. It's just much more harder to measure, because it's not as tangible, but it is part of the system for sure. Yeah. A crucial part of it.

**Jerod Santo:** Well, Lucas, we have had a fascinating conversation here... The only thing we haven't touched on is you tearing apart people's stand-ups. I don't know if we want to make time for that, or if we want to just save that for a future conversation. We definitely have to have you back on the show. You have lots of interesting insights. I love how you go into these books, and you read them, and you pull out the good bits, and then you give them to us in your blog posts. It's just spectacular.

**Adam Stacoviak:** It's like Blinkist, but for not-blinkist books.

**Jerod Santo:** Yeah, exactly. It's good stuff. Adam, what do you think? Should we call it a show?

**Adam Stacoviak:** I think it's worth it. Yeah, I mean, there probably isn't one listener out there listening to this that isn't part of a small team, whether it's a two-person, that has some sort of ritualistic meeting, whether they call it a stand-up or not, that basically says, "This is what I'm working on. This is where I'm blocked", and answers those questions that you typically answer at a stand-up. So I think somebody, probably unanimously everybody listening to this show is in some sort of meeting once a week, or some sort of time basis, that answers questions like that. So what do you have to say?

**Jerod Santo:** Good and bad stand-ups. Help us out here.

**Lucas Fernandes da Costa:** So when it comes to stand-ups, I think that I find that people ramble a lot. So when you follow a model where you're trying to say what you've done in the previous day, and what you're going to do today, and all that, people are going to inevitably start to ramble. And a lot of the information is not important for your peers, especially if you're -- so if you work in a two or three-people team - yeah, it's easier for everyone to pay attention to what you did yesterday, and what you're going to do tomorrow. But if you work in a team that has more than three people, it's gonna be very hard for you to pay attention to all this small, granular level of detail that everyone has.

\[01:16:12.16\] So to avoid rambling and to avoid making meetings long and unproductive, what I'd say is just get your Kanban board, go from left to right, and then look at the tasks that are there and ask people whether they're blocked, whether they need any answers, or if everything's okay. Because if everything's okay, people don't need to tell you what they were doing yesterday. You're probably going to review the code anyway. You don't need to know all the granular detail of what they did... Because stand-ups are not made for people to prove they're productive. Stand-ups are made for people to get blockers out of the way.

In a way, daily stand-ups, what they do is produce daily preemptive feedback. When I've spoken about that interruption point on your operating system, which causes things to be stopped, and something else to run, or something to be -- for a process to be terminated or something like that... So that's the daily stand-up. The daily stand-up causes the system to produce synchronous feedback, every single day, so that you can see whether something is wrong, and fix it. If something is not wrong, you don't need to fix it. There's no need to start with technobabble, or whatever it is; you just say, "Everything's okay", and you move on. Things get shorter, and more productive. People don't ramble, they like their stand-ups, and they actually realize that their stand-ups are created for them to get unblocked. So if the person that usually runs the stand-up cannot participate in the stand-up, people still do the stand-up, because they still find it valuable.

Now, if you're just telling each other what you've done yesterday, and what you're going to do tomorrow, people are probably not going to find that valuable, so they're not going to do it when the person that runs the stand-up is not there. So that's how I like to see stand-ups, and how I think we can we can make them better.

**Adam Stacoviak:** So if it's just about unblocking, then could you just come to the meeting and say, "Are you blocked? Yes or No?" "No." "No." "No." "No." "No." End meeting. Or "Yes." "Okay. Why are you blocked?"

**Lucas Fernandes da Costa:** Yes. Perfectly valid.

**Adam Stacoviak:** "Do you think you'll be blocked this week? Can you hypothetically think you'll be blocked this week? Is there a possibility you'll be blocked?"

**Lucas Fernandes da Costa:** Yeah, that's a good question to ask. So that's one of the things that you could ask as well. But like, if people know that that meeting is made for them to be unblocked, basically they're going to have that in their mind. You can incentivize and you can ask that. I think that makes a lot of sense. It's a very good question to ask. But I think also, if people know that that's a meeting for them to get unblocked, if they have a question that will influence the way they're going to implement something, they're going to ask that question. Maybe they're not necessarily blocked, but they would like a particular answer...

**Adam Stacoviak:** They have uncertainty.

**Lucas Fernandes da Costa:** Yeah, exactly. So yeah, they have some kind of a certainty. Yes, yes. So that's a place for you to talk about something. But let's say you've been writing some code, and everything's going okay, and you spent yesterday writing the code, you've written a few tests, everything's okay, you think you're gonna be able to finish it today... Everything's still clear in the specification, there's no reason for you to be alarmed - why would you spend a lot of time explaining the tests you've written, the lines of code you've written, all the possible implementation paths that you've tried? Why do that?

**Adam Stacoviak:** Isn't that what PRs are for?

**Lucas Fernandes da Costa:** Exactly. It's like, you're going to review the code anyway. So yeah.

**Adam Stacoviak:** Right. And you could do that in a code review, or a PR, or something like that. It's a different process. I almost feel like you can answer, you can determine, because you will hold space in your calendar and in your mindset for a meeting. Let's say it's in the morning. Stand-ups are usually the first thing you do, or one of the very first things you do, so you'll sort of bake the initial part of your day around the possibility of this meeting. What if the day before everyone knew if there should be a meeting tomorrow, and only those who are blocked or uncertain should show up? And if you feel like somebody else could help you become unblocked or more certain, call them in, even if they're not blocked, or they're blocked or uncertain; if there's a dependency, essentially. You can determine that the day before. That way, no one's morning is jacked because of a meeting that doesn't need to happen. And if you've got code review - well, hey, there's my PR.

**Lucas Fernandes da Costa:** \[01:20:17.02\] Yeah, absolutely. You don't need a stand-up to send a message on Slack to someone and say, "Hey, I have a question" or "Hey, I'm blocked. Can you help me out?" You don't need to wait for the stand-up. The stand-up is one formal way of ensuring that happens, but you don't necessarily need that. That's one thing that I think people don't realize... In the software engineering industry we sometimes do things just because that's the way that other people have done it for a few years, but we haven't asked ourselves whether those are things that are worth doing. It's like, what's the purpose of having a daily standup? The purpose of having a daily standup is not to have a daily standup. There's a purpose behind it. What's that purpose? Can you achieve that purpose some other way that makes more sense to your system?

And then we go back to Scrum. I'm not saying Scrum is bad; Scrum works. But like, why are you doing Scrum? Where does Scrum come from? What are the benefits coming from it? Can you get them in any other way that's better for your case? That's, I think, what people need to think more about.

**Adam Stacoviak:** Well, like anybody would use scaffolding, or a framework... You know this, I'm preaching to the choir here; but they use it because they have no prior experience or very little experience in being effective. And so Scrum is the best training wheels to use. Very effective... It's a good starting place. No one got fired for trying Scrum when there was no experience, right? Like, you at least made an effort towards productivity. If you went willy-nilly and you had no idea what you were gonna do, you didn't do Scrum, or you didn't do Agile, or you didn't do whatever, then you might get fired, because they're like "Did you not read that very popular book? Everybody's doing it. Lean this, do that... Come on, you're out of here."

**Jerod Santo:** Have you guys heard the story of the newlyweds and the chuck roast? You've probably heard that story...

**Adam Stacoviak:** I have not. Please tell it.

**Jerod Santo:** Alright. So you have some newlyweds, and they are going to have a dinner, and the wife cooks her family chuck roast recipe. So she takes the chuck roast out of the oven, and she lops off the two ends, and serves it that way. Her husband's like "Why are you lopping off the ends? They're perfectly good." She's like, "I don't know, that's just the family recipe. I'll ask my mom." So she goes to her mom and she's like, "Mom, why do we lop off the two ends of the chuck roast as part of our recipe?" She's like, "I don't know, I got that from your grandma." And so she goes and asks her grandma. "Grandma, why do we lop off the two ends of the chuck roast for this recipe?" and she says, "Well, because the whole thing wouldn't fit in the pan. My pan was too small." Moral of the story - don't just do things because that's the way we do them. You have to know the reasoning.

**Adam Stacoviak:** Yeah. Well, that's why we have these conversations, is to question why, to dig deep... And I think you have, Lucas. You've got several blog posts we'll link up in the show notes. Jerod and I have either fully read them, or loosely read them, as you can tell through this show... Definitely quoted a few, brought in some laws, brought in some family recipe stories and whatnot... But is there anything we didn't ask you, Lucas? Is there anything we can close on that you just have to say before we close out?

**Lucas Fernandes da Costa:** I don't know, I'd say question your assumptions, understand the dynamics of your systems, and... Yeah, I'd say that's my general advice, but I cannot think of further questions there.

**Adam Stacoviak:** And question your queues, right? Look at your queues. When all else fails, are your queuing? And if you're queuing, why? I grokked that from your blog post. That's your words, not mine. It's a paraphrase, of course.

**Jerod Santo:** It's your words, not mine...

**Lucas Fernandes da Costa:** Yeah, I think Donald Reinertsen says that "Queues are the biggest source of waste in product development." I think that's the quote. I think he says that the problem in product development is rarely idle engineers. It's more often idle work products just sitting around in queues.

**Adam Stacoviak:** Features not being enjoyed.

**Lucas Fernandes da Costa:** Yeah. Or not even be shipped.

**Adam Stacoviak:** Bringing a delight to customers, retaining customers, attracting customers, giving marketing something to talk about, sales something to pitch... All these things.

**Lucas Fernandes da Costa:** Yeah. Or just sitting in a GitHub repo. \[laughter\]

**Adam Stacoviak:** That's not in production. That's not prod. Lucas, thank you so much for your wisdom, man. Thank you for sharing all this, and thank you for coming back. I can't wait to have you back on again. Thank you.

**Lucas Fernandes da Costa:** Awesome. Thank you very much for the invite. It was an absolute pleasure to chat with you. Thank you so much.

**Jerod Santo:** It's always fun, Lucas. You're welcome back anytime.
