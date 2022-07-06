**Natalie Pistunovich:** Hello everyone, and welcome to the episode about velocity in developments. Today we have very special guests - Mat Ryer, and Jerod, who was either drafted, or opted in, or accepted, but was definitely not rejected, as we clarified just before we started.

**Jerod Santo:** Somehow I'm here.

**Natalie Pistunovich:** Hi there.

**Mat Ryer:** Hello.

**Jerod Santo:** Hello.

**Natalie Pistunovich:** Are you all enjoying the longest day of the year in this side of the hemisphere?

**Mat Ryer:** Yes. I'm struggling on it a bit now... But yeah, it's been good. It's a bit too long for me. What about you, Jerod?

**Jerod Santo:** The longest day of the year - I feel like there's a velocity metaphor in there somewhere...

**Natalie Pistunovich:** Or the shortest day. It depends on which hemisphere you are.

**Mat Ryer:** Yeah, that's a good point.

**Jerod Santo:** Right. If you have sprints that last one day, this is the best day of the year to work.

**Mat Ryer:** Yeah, you get a lot done.

**Jerod Santo:** But what is velocity? I don't know.

**Natalie Pistunovich:** What is the velocity?

**Jerod Santo:** Is it speed?

**Mat Ryer:** Yeah, that's a good question. I suppose really it's about generally how quickly as a dev team you're delivering things. But obviously, there's been attempts to measure and then use that to predict, and I think there's been some work better than others, but I think it's definitely an interesting subject, and it's not so simple as "You should just do this every time", I don't think.

**Jerod Santo:** \[04:11\] There's lots of ways that people have tried to measure this right? And predict it even.

**Mat Ryer:** Yeah.

**Jerod Santo:** Or use predictions in order to determine it. You've done some velocity tracking, haven't you, Mat, with pace.dev?

**Mat Ryer:** Yeah, well, with velocity, but like the Agile practice of velocity. That practice actually has some merit. So for anyone that doesn't know what that is, you basically try and assign some kind of abstract score to work. And the point isn't really to get it right from a time perspective or anything; we can talk more about that. But it's about just giving it a rough size compared to the other work around it. And then assuming that you more or less consistently do that each time, you then can just see how many of those points you got done in a certain time period, say two or three weeks.

So say you got 200 of these abstract points done in two weeks, or three weeks, then you know that in the next three weeks probably you're gonna do another 200. So then you can look at your sized work and spend those 200 points, wherever that is, selecting the work that you think is the most important. And then if you get good at that, then you more or less do the work that you said you were going to do for that next little bit. And so you can get into a rhythm where that works quite well. Does that make sense?

**Natalie Pistunovich:** That brings up two questions, at least. One is do you measure things like how many points you spend on writing emails, and things like that? And the second one is, how is this different from Agile?

**Mat Ryer:** Well, to answer those in reverse, this is really the Agile practice; one of the Agile practices is that, really. This is one of the things you can do to measure this stuff. You mentioned about the email and stuff, the other work that you need, and what about tech debt, and other fixes and other meetings and all that... Well, it kind of all comes out in the wash - the idea is you focus on the outcomes, and really, if you have too much of that work where you aren't being directly productive, then your score will come down of how much you're able to do. So that's where it shows up. But it's considered a normal part of everyday work, but it isn't tracked explicitly. So it's kind of considered just background noise, and it assumes that that's generally always the same, and therefore it comes out in the wash.

**Natalie Pistunovich:** So doing things like also planning your use of points in the same category as emails.

**Mat Ryer:** Yeah, so the planning stuff is interesting, because if you've done it -- I did work on a team once where we consistently did 200 points every two weeks. And they're called points because there is -- one of the important things is that this is an abstraction. So you're not timing things; you're not saying "This is going to take me a day to do, this work" or "This is going to take three weeks for us to do", because doing that is so difficult. Our instincts tend to be way off on that. I think we tend to be quite optimistic in nature, so we kind of imagine probably the best-case scenario. And honestly, if you look back after you've been down any project for any length of time, if you look back and realize how complex it ended up being, you probably never would have started it. And so you almost need that naive optimism at the beginning.

So it's a terrible time to try and guess how long something's gonna take, isn't it?

**Jerod Santo:** It's the worst possible time.

**Mat Ryer:** Yeah. It's much easier at the end, when you've done it.

**Jerod Santo:** \[07:51\] Right. So retrospectives are nice. But the pointing sessions for me is the Achilles heel of this entire concept, because it's never right. And not only is it always wrong, but it's inconsistently wrong. Now, this has been my experience. I've heard it back to me as well, so I'm not the only one... Even my own point scores over time changed based on... The wind? I don't know. I couldn't even stay consistent -- because you're like, well, as long as the points are relative, the actual numbers don't matter. But they've gotta explain a range that's relative to other ranges, and they've just been so inconsistent for me that it makes, in my experience, the numbers that come out of the tools that give you your velocity, meaningless. And we all know they're meaningless, but we look at them and we still try to use them to use them to make decisions.

So I'm kind of -- I get frustrated, because I feel like the numbering is so fraught.

**Mat Ryer:** Well, one of the practices that I've seen work is they do basically the card roulette thing. This is where you sit around and you talk about the issue or the work, anyone that's got something to say chips in, and kind of paint a picture, an approximate picture... And then you say, "Okay, 3, 2, 1 - everybody hold up their estimation at the same time", or if you're doing it remotely, everyone hits Enter at the same time in the Slack channel, to send the estimation. And the idea is influencing each other. Because often there'll be a senior person who is maybe much more accurate and much more wise about the system, and so therefore everyone will just defer to that person. But actually, there's value in the group knowledge.

And honestly, the numbers almost aren't even the valuable bit. It's when everyone on the team is like "That's a three", and then somebody will hold up a 13 and you're like "What do you mean 13?" and they'll know something that you didn't know and nobody else knew. And that's a great way to kind of just get that out and in the open.

And often, interests align along those same kinds of lines as well, so they're quite good for identifying who might be interested in doing particular work, or taking on/tackling particular problems. But it's definitely not perfect.

**Jerod Santo:** I can see where that might be nice. So you average those numbers out, or you just look for the outliers and say, "Hold on a second... Let's talk more about this"?

**Mat Ryer:** Yeah. So you get a consensus really, at the end, hopefully... And you may compromise a bit. Sometimes you say, "Okay, we'll go to a five then." Because it's possible that that person's just wrong, and everyone's like "No, that's not a problem. That's fine." Or "We've had that before and it wasn't a big deal."

**Jerod Santo:** Can you say 13? Is that a number that you've given, or you just made that up to show the drama?

**Mat Ryer:** Oh, no, no.

**Natalie Pistunovich:** It has to be Fibonacci, so it's fine.

**Jerod Santo:** Why does that have to be Fibonacci?

**Natalie Pistunovich:** We don't make the rules...

**Jerod Santo:** \[laughs\] We just follow the rules.

**Natalie Pistunovich:** But actually, this conversation makes me think of a book that I'm listening to right now... It's called Noise, by Daniel Kahneman. And this is the same person who -- he is, I think, a Nobel Prize winner for behavioral economics. And there's a lot of conversation biases, and he, I think, is the one who wrote the book about brain system one and brain system two, the one that intuitively reacts to something, and then the slower brain that actually processes information, and so on.

So Noise is a new concept that they are introducing, let's say, that - yes, there is bias, but bias is what you said, Jerod, in the beginning - it's consistent. So you said that the numbers are not always off, but they're like randomly off. And this is exactly how the book starts, with saying that there are - let's think of four groups of people who played darts. And some of them will always hit the middle, some of them will always hit to the top right, some of them will be scattered, and some of them will be a little bit scattered in some region, I forget... But basically, this is the difference between bias and noise. And noise is all those things we cannot measure. And just hearing this book, in the light of this conversation, is the first time that I thought of all this allocating points and how to consider them, in the light of this concept of noise. That's interesting.

You know that research that they did, that judges on average would give easier sentences when it's the beginning of the day and after lunch, and harsher sentences right before lunch. This is an example of external noise. Things you cannot measure, you cannot predict. It's not always the same, it's inconsistent and so on.

\[12:21\] And it's very interesting to think of all this planning and all this velocity in the light of noise. Like, do you always do your sprint meetings at the same time? Does everybody come after lunch? Or if you have a team around the world, then you'll be right before lunch, I'll be right before dinner, dying to call this a day already, so we'll have different reactions to this, right?

**Jerod Santo:** Yeah. I mean, that might be a good thing, because you won't have consistent bias, or consistent noise. You'd have people in different states of life... I think the judge example is --

**Natalie Pistunovich:** After lunch you'll be always mellow, like "Yeah, we can do this. It's okay. It's not too much." And I'll be always like "Let's just call it a day. Seven. Fine. Seven. Get this out of the way."

**Jerod Santo:** Right. So you guys balance each other out. I don't know, that's interesting. How do you account for noise in these planning meetings...?

**Mat Ryer:** Yeah. So that external noise is interesting. And actually, in these planning sessions, anything that is just outside of what we know about that particular work, what that particular item is, is kind of ignored. So in a way this is very simplistic for that reason. But it has the benefit of kind of just like takes it for granted that there's going to be background things, and it's going to be random... And so there'll always be something that throws up, some unexpected thing, but enough, kind of consistently, really, because it's always happening, enough that over time it kind of sorts itself out. And that's the sort of approach it takes to have this, to try and get these numbers.

But the Fibonacci is interesting, if you think about the sequence. You end up with meaningful gaps. Because if you just have a scale of 1 to 10, what would be the difference really between a six and a seven? That's a quite a difficult thing. Instinctively, I think it's a no. And the idea is you want everyone to be somewhat on the same scale. But you'd know the difference between a five and an eight, maybe. There's five stories, like -- you kind of get used to what these numbers mean in your context.

So update a URL - that's definitely a one, because that's the simplest task you can do, is probably go and hopefully find the URL and update it. Famous last words, of course, because that's exactly the point, is then you realize, "Oh, the URL is made up from--"

**Jerod Santo:** Oh, that was an eight...

**Mat Ryer:** Yeah, there's lots of--

**Jerod Santo:** I thought it was a number one URL, but it's actually an eight.

**Mat Ryer:** Yeah, because it's made up \[unintelligible 00:14:43.07\] this stuff from the database, we've got these environment variables that contribute to parts of the URL...

**Jerod Santo:** Right. We Base64-encode it based on the position of the sun at that particular moment... \[laughter\] Stuff like that, right?

**Mat Ryer:** Yeah, exactly.

**Jerod Santo:** And only Fred knows how to do it, but he quit six months. And so once we find out where Fred is, and we can talk to him, then we'll figure out the right time of day that we run that, and then we'll be able to update the URL. So now it becomes a 13... Is that how that works, down to 13?

**Mat Ryer:** Well, Fred's been clear, he doesn't want us going around anymore. So we'll respect that.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** But he didn't mention anything about his cell phone... Like, give him a call.

**Natalie Pistunovich:** He just changed the number.

**Mat Ryer:** He'd better not do...

**Jerod Santo:** It seems like once you get past a certain number, it's meaningless. So in my work, I would reduce it down, actually, to three different buckets. I got rid of points and I said, "Easy, Average, and Hard." And Easy was update a URL. And I thought "Okay, if it takes between one and four hours - Easy." Maybe like one or two hours... Like I said, I'm inconsistent. But that's in the Easy book, and I could take three Easies together and knock them out in a morning.

**Mat Ryer:** Yeah, you could change a URL within two hours. Easy.

**Jerod Santo:** Yeah. Easy. And then if it was slightly more than that - well, here's a feature that might take half a day to a day, but I have a straightforward path from here to there. Now it's medium. The Medium bucket. Or then it's like the thirteens that you're talking about, where it's "Well, let's sit down and talk about this, let's think about it. Let's plan it out. This is a big deal."

**Mat Ryer:** Yeah.

**Jerod Santo:** \[16:15\] Now you're in the Hard bucket. And that actually - it's beneficial to take that and split it into easies and mediums. But even that system had its own problems.

**Natalie Pistunovich:** That's similar to what -- I know it was an approach that if it's eight, it means eight working hours, means it's one day, means that it probably can be broken down into something simpler and smaller. So 13 is a large number. I think most of the methods that I know won't actually accept the 13, but will say "Just break it down into a five and a three.

**Mat Ryer:** That's interesting, you mentioned that eight would be eight hours... So when you've done this, there is a time element to it as well.

**Natalie Pistunovich:** Specifically, the tool we're using right now at work would say that this is a day of work, roughly. That's why this is in my mind like that. But it's also easy to map one point for one hour.

**Mat Ryer:** But maybe it's -- I don't know if it's kind of using the velocity calculation to estimate that that's what that's worth currently... Because the other thing about velocity is if you're measuring it like that, you see it going up and down. If someone takes a week or two weeks of holiday, you see the velocity drop by that much. So it kind of exposes that, really, and that's what you'd expect to happen as well.

So I wonder if that tool is calculating your kind of recent velocity and then giving you a basically an estimate... Because one of the key points I thought really was you're trying to stay away from time. You stay abstracted from time, and let that change, let that adapt, so that you aren't essentially just holding people to a fixed scope and fixed time.

**Jerod Santo:** Right. I mean, time and complexity are definitely related. Even in my system where I talk about complexity in terms of difficulty, I'm still calculating that in my head based on how long will it take me, do I think? And so there's definitely that correlation, but I see what you're saying, Mat, where the tools should probably focus on the complexity for the velocity numbers, and not turn into "How many hours is this going to take, so I can hold you to that number?" which is something we've all been through from time to time. Natalie, are you okay with telling us what tool you're using, so we can talk in concrete--

**Natalie Pistunovich:** It's called ClickUp.

**Jerod Santo:** ClickUp. Haven't heard of that one.

**Mat Ryer:** ClickUp...

**Natalie Pistunovich:** You put all the tasks in, and put a numeration on them, and then it has basically any view you ever saw any app do, ever. You can look at it as a list, as a Gann chart, as a workflow, like in a calendar... Kind of one thing to do them all.

**Jerod Santo:** Gotcha. Okay. And Mat, with Pace, you had a velocity calculation in there...?

**Mat Ryer:** No, in fact, it didn't. But the name, Pace, the reason we call it that was - it was down to this idea really of velocity. Agile is all about sprinting; they have this language, and it's constantly, every two weeks, it's sprinting. And you're constantly sprinting. And so you get into this mode of rushing almost. And honestly, sometimes the best innovation I've seen, and I've witnessed, has happened at the times when there's a lull in things, and there's a space to work and breathe. And a lot of times going slowly is the right speed to actually building software. Sometimes it's great, you can run fast because you've got clear little things, or you're doing a repeated task maybe a few different times... Say you're integrating into some third-party systems, you want to integrate with all of them, you've got to do a bit of OAuth, you've got a bit of API key stuff, create accounts, or whatever... So you that's a fairly repeatable piece of work, and so you can go quickly then.

And by the way, that kind of work is also very easy to measure and then be able to predict on. That's why I think some teams will benefit more from that kind of approach, because just the nature of the work they're doing may be easily sized, and then easily predicted.

**Jerod Santo:** \[20:15\] Yeah.

**Natalie Pistunovich:** It's also interesting to think about the word velocity. Not in all languages velocity is different from speed. And in physics you use velocity, you don't use speed. And in physics, it makes sense, right? You want to know which way... Because this is the difference between velocity and speed. You have a direction. So physics, it makes sense. But why does this make sense for software, and specifically for Agile?

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** I'm curious to hear what is this direction that you all see?

**Mat Ryer:** Well, you would hope that there is a shared view of where you're going with the thing you're building... I don't know if that's what they had in mind. To be honest, I don't know what that particular practice, I don't know what the direction bit is, apart from, you know, you shouldn't just be going fast, or just churning out work; it ought to be at least in a certain direction. So maybe it was just that, but I don't know... Jerod, have you got any other ideas?

**Jerod Santo:** No, I would agree with that. I just think that in software sometimes we think we have a direction, but we actually are going backwards. And so we're going quickly, but in the wrong direction. And I think the more we can get the feedback loop quicker, we can find out whether or not we're headed fast in the wrong way. Because the worst thing you can do - I know one time I was driving home from Colorado, overnight, from Colorado to Omaha, and we took a wrong turn... This was back before Google Maps, GPS. We took a wrong exit... And we were traveling very fast.

**Mat Ryer:** Oh no, it's like a horror film.

**Jerod Santo:** Yeah, it was.

**Mat Ryer:** Can we play some spooky music for the story?

**Jerod Santo:** We should. I'll work on that. Not right now, but I'll work on it later. And we had no idea that we were heading in the wrong direction for hours. I think it was an hour and a half to two hours... Until we saw a sign that said Welcome to Kansas.

**Mat Ryer:** No, that's the wrong state...!

**Jerod Santo:** Wrong state altogether.

**Mat Ryer:** Oh, no...

**Jerod Santo:** And so had we had that feedback loop -- obviously, if we had GPS, we would have known much more quickly, and you can course-correct and make sure that you're headed in the right direction.

**Mat Ryer:** Oh, wow. That's amazing. Did everything turn out alright?

**Jerod Santo:** No, actually, I died that night.

**Mat Ryer:** Oh, that is spooky.

**Jerod Santo:** And ever since then I've been a ghost.

**Mat Ryer:** Ah, and you spent your time making podcasts...

**Natalie Pistunovich:** One time it's somebody from the future, one time it's a ghost... We're having interesting episodes here... \[laughter\]

**Mat Ryer:** I know. We're having a tough time lately...

**Jerod Santo:** So we actually did drive overnight... So we drove the entire night. In basically Kansas, Backwoods - there's no woods there. \[unintelligible 00:22:47.28\] small roads, and we were lost, and we had to pull over and ask a gas station attendant which way to go... It was spooky. There were some deer on the road...

**Mat Ryer:** Oh, no... They're in on it. They were always in on it!

**Jerod Santo:** And eventually, eventually we got home.

**Natalie Pistunovich:** You both mentioned, to the question of what is the direction of the velocity in software or in Agile, that you want to go forward, and you want to have a feedback loop as much as possible, which makes sense... And I'm thinking out loud, trying to make sense of this, so think with me.

**Jerod Santo:** Okay.

**Natalie Pistunovich:** In physics, when you do a physics exercise, you have a vector, and then you break it down to X axis and Y axis, right? And then you see maybe it has the negative, and so on, and then you kind of sum it up in some way. And surely, there must be a way to apply this similarly to measuring not just points, which is the speed, but also somehow points per direction. Kind of like a projection of our velocity on whatever we define as axis. And this can be progress on the DevOps, and progress on the front end, and progress on backlog...

**Mat Ryer:** I think that's a nice idea. I mean, you could do it by tagging work, and then you'd be able to kind of -- but representing it like that could be really cool; sort of representing that in a 3d way. Because you really are sometimes making the choice of "What are we going to invest in? What's the most important next thing we need?" And if you can visually see that "Well, look, we said that this new public API was very important to us, but we haven't put much time into it over these last--" and you can see that visually, I think that would be very useful.

**Natalie Pistunovich:** \[24:29\] This wouldn't even make sense of the word velocity. This would be very exciting.

**Jerod Santo:** Yeah, it would. It'd be consistent.

**Mat Ryer:** Good startup idea.

**Jerod Santo:** \[unintelligible 00:24:36.00\] get have a have an X/Y visualization where it shows what quadrant you're spending more of your commits, or your project time, or whatever... And I don't think it's super-useful in the GitHub context, but maybe more so -- I mean, I guess in a team context perhaps, showing that visually, the progress you're making on these different key aspects of your system would be pretty cool.

**Mat Ryer:** Yeah. That would be cool. I'd like to see that also gamified, so it looks like you're unlocking something as you go as well.

**Jerod Santo:** What would you unlock? Like new badges?

**Mat Ryer:** Yeah, it could be. Maybe even like get more tools in the -- you get more features \[unintelligible 00:25:15.06\]

**Natalie Pistunovich:** Your graph becomes from 2D to 3D, your progress graph.

**Mat Ryer:** Yeah. You can unlock a VR mode.

**Jerod Santo:** I like the idea of withholding developer tools and being like "Now that we've made this progress, you can use a debugger. Now you can have Copilot." \[laughter\]

**Mat Ryer:** You learn as you go.

**Natalie Pistunovich:** Still writing log.print...

**Mat Ryer:** Yeah, but we can't have people just starting with Copilot. What's gonna happen...?

**Jerod Santo:** Good question.

**Natalie Pistunovich:** This will happen. \[laughs\]

**Mat Ryer:** They're gonna have it, yeah. I was gonna say.

**Break:** \[25:44\]

**Jerod Santo:** Did you guys know that the free Copilot train is leaving the station? Did you guys know that? Are you sufficiently hooked ?

**Mat Ryer:** I don't know. What does that mean? I'm hooked.

**Jerod Santo:** Choo-choo...! I think it's going to be $10 a month, or something like this, soon.

**Natalie Pistunovich:** It's worth mentioning that in addition to Copilot... Quick explanation of what's happening there - Copilot is built on top of an engine that belongs to OpenAI that's called Codex. Codex is available for many people in general, and then you can kind of build your own little Copilot alternative on top of that, and you don't have to pay GitHub/Microsoft those $10 if you don't want to. And there's many other companies, like 70 companies or so that are building their dev tools on top of this exact engine. And they're just doing like the fine-tuning, the final \[unintelligible 00:28:12.06\] training that's specific to them.

**Jerod Santo:** Yeah, that is good to know. So lots of alternatives will be popping up hopefully, using the same engine, same knowledge base.

**Natalie Pistunovich:** Yes.

**Jerod Santo:** I was curious - you both have been giving Copilot praise off and on on Go Time...

**Natalie Pistunovich:** Yes.

**Jerod Santo:** I'm curious if it's hooked you sufficiently that you're going to sign up and pay monthly to use it, or if it's just a novelty that you enjoy, but when it comes to taking money out of your actual pockets, are going to stop using it?

**Natalie Pistunovich:** So you usually expect your employer at least for work tools to pay for that...

**Jerod Santo:** That's what you expect? Okay...

**Natalie Pistunovich:** Yes...

**Mat Ryer:** She's in Germany.

**Natalie Pistunovich:** I mean, you have an education budget, you have a training budget, you have a dev tools budget, right? You pay the license for your IDE... This is not much different from that, in my category.

**Jerod Santo:** Sure. It makes sense. So go hypothetical then, if you were unemployed. Would you pay for it, as it is today?

**Natalie Pistunovich:** Depending on what. If I have any project that I want to build? Yes. Just for fun, for hacking? Not so much. But I definitely find it useful enough that if I have a concrete project to build, I will use that, because it is useful to me.

**Jerod Santo:** Cool. Mat, Grafana Labs picking up the tab?

**Mat Ryer:** I'm sure they would... And honestly, I don't do probably enough coding to have it... Which is sad to say.

**Natalie Pistunovich:** I also does YAML.

**Mat Ryer:** It does YAML, correct.

**Jerod Santo:** It does YAML... \[laughs\] There you go.

**Mat Ryer:** It does anything, really.

**Jerod Santo:** Are you a YAML engineer now?

**Mat Ryer:** Well, I asked it in the comments the other day if it was sentient, and it said it was. And I asked if it was alive, and it said it was. And then I asked what Ben should have for breakfast, and it said eggs. So, I mean, that seems quite real to me. I don't know... Maybe this Google guy is onto something.

**Jerod Santo:** Well said.

**Natalie Pistunovich:** This comment line is too short to hold this wonderful proof that I'm sentient...

**Mat Ryer:** Yeah, that'd be good if it said that.

**Natalie Pistunovich:** It's very easy to miss the reference of what I said.

**Jerod Santo:** Alright, sorry to derail. Thanks for answering for me. We can go back to velocity now. I've killed the velocity of this conversation...

**Mat Ryer:** \[30:15\] Velocity...!

**Jerod Santo:** Let's pick it back up.

**Natalie Pistunovich:** I think Copilot helps velocity...

**Jerod Santo:** You think so?

**Natalie Pistunovich:** I think AI generally, this AI tooling for development will definitely put us in different concepts of what those numbers mean.

**Jerod Santo:** I think the key is being able to stay out of the browser tab, and in your editor for things that you know want to do, but can't remember syntax, or the best way... And you pop over to Stack Overflow or Google to get "How do I do x in this circumstance?" Staying, I think, in your editor, certainly -- because it's not a big deal to hop over there, but it's just all the distractions that take us out of our flow. You've got Twitter in a tab, and while you're waiting for that search to load, you tab over, or whatever; and now all sudden it's 15 minutes later and you've lost all velocity. You're out of flow, but you sure know what's going on in the world today.

I think it keeping you in that developer mode and not in browser mode, or research mode, I think it will help people quite a bit... These kinds of tools, to generify it.

**Natalie Pistunovich:** Also, if it stays up to date enough, it will not land you on Stack Overflow answers from 2009, which will be a great save of time as well

**Jerod Santo:** Right.

**Mat Ryer:** Yeah. And you're still responsible for the quality anyway, even if Copilot's writing some bits for you; still, you're responsible for it. You can never say "Oh, sorry about this bug. Copilot wrote it." You should never find yourself saying that, really, because you are accepting the work that Copilot's coming up with. But I think that also speaks to the wider idea that the point of having this abstract velocity is I think one of the key things is about the fact that we have kind of speed versus quality, and we've got resources. So we've got how quickly we can go, who's around to actually help us do that, and we also have quality on this as one of these levers. And if you tie the scope down, and say "Right, we're going to hit this date, and we're going to deliver these features. That's it, they're fixed", the only lever that's left is quality to kind of like -- you know, we just can't do a good job with that.

One of the things I like is that as things naturally take over and become bigger than you expected in the beginning - because they always will, more or less; honestly, basically all the time... As that happens, it gets soaked up by the velocity, and it's sort of acceptable that that happens. It's sort of admitting that that's going to happen. And then I think being flexible on the scope is the remedy to it, so that you're like "Yeah, we don't deliver as much, but we deliver on time, and the quality stays high. And then we add the other features later." I think that way of thinking is so important... And quite counterintuitive if you have a command and control or top-down approach and thought process around software.

**Jerod Santo:** Yeah. How do you convince people of that case, that what we need to flex on is scope? Because the business side of many organizations - they want to flex on anything but that. They kind of want all three - they want quality, speed and scope. But I think given what I've seen, and I think given a lot of people, if you're a manager and you're "Well, what we're going to go ahead and sacrifice is quality, kind of implicitly, because we've got to get it done, and we have to have this feature in, and it's got to be done on time", and so what you're sacrificing is quality, but how do you convince people that's not the best solution? Because that's a hard sell.

**Mat Ryer:** \[33:50\] It's difficult. And what you're really fighting against, or one of the things you're fighting against is that the sales organization are selling the roadmap very often. So it's already sold. As soon as it hits a roadmap, as soon as there's a hint of an idea. Even if it's next year, they will be talking about it, because they're selling the future, they're selling the roadmap. And that's where things become then a problem, because suddenly then customers sometimes will buy now with an expectation of a feature at a particular time... Fair enough, because they've just been told that. And so then you end up tied like this. So it is a cultural thing that has to be there across the entire organization. I don't believe you can have just an engineering department that is a sort of agile department, but the rest of the organization isn't. I just don't see how that possibly works, because it's all about resources and delivery and sales. The whole thing is wrapped up in each other.

**Jerod Santo:** Mm-hm. Natalie, have you ever had to have these conversations around cost, time, scope and quality with regards to demands on your work?

**Natalie Pistunovich:** Once or twice... \[laughter\]

**Jerod Santo:** How'd it go? Do you have advice, or anything?

**Natalie Pistunovich:** It's interesting to see this from the perspective of the different times that I have these organizations, because the first times I was in such a conversation, I was very junior, and everything seemed like "I'll probably say something wrong... I will underestimate -- if they say this is important, then it is. But if they say the opposite is important, that also is, and it's probably just me who this does not make sense to." And with time, this escalated to a recent conversation that I've had...

So I'm working now at a stealth mode startup, which means we're very few developers, and we're doing -- kind of everybody does everything. And then recently, the past few sprints I stopped doing back end, and I kind of am doing a bit more of the infrastructure things. Specifically now logs. So we have some logs in place, and they're okay, but I decided that it's very important to focus now on having good logs. Because as a young startup, you have successfully reached the milestone that you have your first users, and you want to see what they're doing. So you can ask them, you can have interviews, but you also, in my opinion, have to have good blogs about that.

And so I've been having long discussions on how much time does it make sense to invest into improving the existing logs, and kind of making a good thing to rely on moving forward. So... Very close to home.

**Jerod Santo:** How are those negotiations going? Is that an uphill battle? We have a good culture of disagree and commit, and we have a good culture of you own what you own, for better and worse; so kind of you take the decision, and then you are responsible for the outcome.

So I own this part, I kind of explained why I think I will disagree, and we will all commit to moving forward with me investing more time than planned on that. And as a self-reflection thing, this is being able to have this conversation and have this stand, and also understand that if it's a bad decision because whatever, because maybe we should have developed faster, more features to start up, and so on, I will have to account for that moving forward... So if anything in my life made me feel senior, it's this.

**Mat Ryer:** A bleep test. Did you ever do the bleep test?

**Jerod Santo:** It's a bleep test. The watch has been participating in several episodes; there was one episode where we laughed about this -- you can ask it the time and it will respond. And it did. So now I just accidentally pressed Start measuring exercise. So it did the countdown, 3, 2, 1.

**Mat Ryer:** Oh, right.

**Jerod Santo:** I thought you were maybe doing a--

**Natalie Pistunovich:** \[unintelligible 00:37:40.02\]

**Jerod Santo:** I thought you were playing Excitebike, or some other NES game...

**Mat Ryer:** It sounded like -- there used to be a bleep test thing at school where you'd have to run across the hall, and then just as you reached the other side in time for the next beep. But then the beeps just got faster and faster. So eventually--

**Natalie Pistunovich:** \[38:03\] Oh, so like Fibonacci. It all comes back to that. It makes a lot of sense.

**Mat Ryer:** Yeah. That just took me back to that... Horrible memory.

**Natalie Pistunovich:** We did not have that. Did you have that, Jerod?

**Jerod Santo:** No.

**Natalie Pistunovich:** Running in the hallway with beeps...?

**Jerod Santo:** No.

**Mat Ryer:** Did you have mandatory military service though, Natalie?

**Natalie Pistunovich:** \[laughs\] That was not measured in beeps, yeah. \[laughter\]

**Mat Ryer:** Yeah. It makes me a bit scared of Natalie.

**Natalie Pistunovich:** Virtually, it's fine.

**Mat Ryer:** Yeah. \[laughs\]

**Natalie Pistunovich:** Going back to the point of feeling senior enough to be able to kind of take such a decision and explain that and being ready to be accountable for that... And circling this back to what we started talking about in the very beginning, of measuring points... So this is a good skill you have a little bit at least about yourself, mostly, that you are able to evaluate how much time points, whatever, units, a task will take for you. Right? You know that about yourself; after some time working at a company you know even better how much time it will take for you in this codebase, and so on. And I would say that this is sort of a skill that senior people will have, mid-level people will have... People who have some experience writing code already. But junior people don't necessarily have enough test data, let's say, to be able to make such a prediction.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** What are your thoughts of the statement that I'll say that a coding interview for juniors is actually one way of measuring this, and kind of understand the value a junior person will be bringing going forward?

**Mat Ryer:** Somehow testing the velocity, or the--

**Natalie Pistunovich:** To have a very rough estimate, but more than nothing.

**Mat Ryer:** I don't know... I mean, I was maybe gonna save it for the unpopular opinions... But yeah, I think trying to estimate how long something's going to take is like -- I think we spend a lot of time trying to do it, and the results aren't good enough to really justify the effort we put into it.

Honestly, a better approach is let the scope be flexible. Pick the deadline, sure, have that released already, but the actual scope - let that be flexible. And then build teams that you trust, that you don't need to micromanage and check on. Build motivated teams, keep teams motivated, put in that effort to do that, and then trust that they're going to work as fast as they can.

A lot of the dangers of measuring velocity is if things change over time, if things slow down, these numbers start to drop - you could easily interpret that as somehow a reflection on the team going slower, or something... But you can't really say that. It's much more -- it's too chaotic. It could just be things are different, they're working on different things, more unknown stuff... Maybe there are things going on that have slowed it down, but you wouldn't necessarily see it through that route, I don't think. You'd hope that there's other ways you'd find that stuff out.

So I think that approach basically gets you better results, and you can still commit to some high-level -- you can still make good commitments that you've pretty confident you're going to hit, as long as you don't describe every possible thing and lock yourself into it. It's tough.

**Natalie Pistunovich:** You mentioned scope in your answer... You were saying have a good team, have a clear deadline, and define a scope. What is the scope? What do you mean?

**Mat Ryer:** The set of features, the set of things we're going to do. Like, we're going to add comments to our tool. So it's going to have comments, and reactions and people's profile pictures in there... Now, if as we get underway and we realize we're running out of time, maybe we'll drop the profile pictures; maybe we'll just focus on getting the core functionality. We'll prioritize the most useful stuff first, so that at least gets done. And then now we've released less than what we wanted to, but what we've released still works, and then the next time we do the profile pics. It's really that.

\[42:08\] But see... So if though you'd said from the beginning we're going to release this and it's going to have your profile pictures on it, and suddenly people are sold on that idea - that's where you have then a difference in the expectations of what people are going to get. That's a silly case, with the profile pictures, but there are real examples where things will fall out of scope, naturally, along the way... And communicating that becomes important, for sure.

**Natalie Pistunovich:** So in the scope you define also importance, like priority?

**Mat Ryer:** Yeah, because I think one of the nice things about having those velocity points to spend is it forces you to think "Alright, what do we want to spend it on? And what could we have later?" And it may be that there's like three big things you want, but you can't fit them all in, so you buy two big things, and then you've got change left over for a few smaller items. But it forces you to think "If we had to stop after this next sprint, or this next time period, if we have to stop, we want to have something that's just more valuable than what we have now." And if you're thinking of it like that, then you can get there with that.

**Natalie Pistunovich:** That reminds me a lot of what you said, Jerod, about the bucket...

**Jerod Santo:** Yeah.

**Natalie Pistunovich:** Big, important... Smaller, faster...

**Mat Ryer:** Jerod, do you have an idea of how many of those you'll get done in a week? Like, if you planned it out. Could you do three big ones, two small ones, and five small ones?

**Jerod Santo:** I certainly could... Now, in the past I was doing contract software, and I would have multiple projects ongoing. And so it'd be rare that I would dedicate forty straight hours to a single client, and give them a week. I would split my week up across a few different projects. So I didn't do that very often, but I certainly could. I can extrapolate just based on what my general idea is on the buckets of like a one to two-hour thing, a four-hour to eight-hour thing, and like a multi-day thing, to say "Here's what we can generally do in a week."

**Mat Ryer:** Yeah. So that's kind of like you're using your experience of what you've done in the past, and then you're applying that.

**Jerod Santo:** Yeah. That's hard-earned experience too, because I had a bunch of terrible estimates for years... And it's not that my estimations got better, it's that I became more aware of how bad they were. \[laughs\]

**Natalie Pistunovich:** Was it bias or noise?

**Jerod Santo:** Both. Probably both. But it's a way of speaking with people about the difficulty, not just in the building of the software, but in actually the managing of the project... Because the one thing that we know right now is that we don't know what we're gonna know tomorrow. And so to set up something that's stringent or rigid is kind of a fool's errand. So I would definitely negotiate around scope, Mat, like you do... But I don't set the priorities in the case of a client-developer relationship. Of course, I'm there as an advisor and an advocate and as a teammate, but ultimately the customer sets the priorities. So I'm here to set the difficulties and talk about what's more important, and give advice like "Are you sure that's the most important thing? ...because X, Y, or Z", but ultimately they say "This is what's most important to me", and whatever falls below that threshold in the time period or in the budget they have, those things fall out.

And as long as you can keep the negotiation around that, and both sides understand that relationship, it's not too bad. It's when the budget and the scope are fixed, and the times everything is fixed. Now you're stuck to what your word was. "Well, you said it was a medium thing." "Well, it turns out I was wrong, and it's actually a hard thing." But we didn't find that out until hours into it, and here's why.

**Mat Ryer:** Yeah.

**Jerod Santo:** That's where it gets to be -- it can be stressful for both sides, because it's their money, their time.

**Mat Ryer:** \[45:49\] Yeah, this is why you need that trust. Honestly, if you don't trust the people you're working with, then you just probably shouldn't work with them, basically. The amount of extra work and the constraints you'd have to put in place to make it work... And you end up micromanaging, and... Building software is really hard. It's way more complicated than we even realize. That's why we're always surprised by the nonsense these computers are doing in response to what is perfectly reasonable requests from us poor programmers.

Chris James messaged into the show... A friend of the show, Chris James. And Chris James says we should check out \[46:29\] which shows that you don't actually have to trade speed and quality; they're correlated. And that actually building high-quality software is the route to getting a good feedback, speed of feedback loop, and using great engineering really to achieve those two things. And this is kind of true, right? Like, do less, but do it really well. I think that as a rule has definitely served me well in my career. Not adding all the features everybody wants. If you have space and a bit of spare time in the team built in to just let things happen creatively, the little delightful things that people will build into the software makes it such a joy to use, compared to just boring software. It really makes a difference to people, and your software will be more effective because of that, as well as being more liked, more popular, and hopefully - yeah, they're gonna tweet about it and say, "Oh, look at this feature. It's good, isn't it?"

**Jerod Santo:** Is that how you read every tweet in your head?

**Mat Ryer:** Yeah. This is the only way to stop me from getting angry.

**Jerod Santo:** \[laughs\] So that kind of goes back to my wrong direction thing from before, and I think you can be in the wrong direction on two fronts. On the product front, which I think is what you're speaking to there, like what features go in, how do we build them. But then also technically. If you're just trying to move fast, you're going to accumulate technical debt, because speed is the desire, and so everything else be damned. And so I'm not sure if this is the best way of building this, but I don't have time to think about it; we've got to get it out there. And so instead of actually analyzing and deciding and maybe spiking out a few different options on an architecture, you're like "Now we're just gonna do it this way, we've got to move on." And that's where you can really shoot yourself with regards to the technical architecture. Whether or not the feature you're building is the right one is kind of orthogonal to that.

**Mat Ryer:** Yeah, I think that's a very good point... You should learn where to spend the time.

**Break:** \[48:30\]

**Mat Ryer:** There's times to go slowly, and that's what experience brings. These are ideas that need to percolate a while; we need to let them settle down and keep thinking about them in the context of what else we're doing, before we just jump into it. And you do learn to them future-proof designs. One example I always use is a boolean field - if you've got like a "is active" field, and it's a boolean true or false, consider what you might achieve in the future, potentially, by replacing that with a status field that's a string, that has active or inactive in there. So yes, it's less efficient, right? Because now it's a string and not a number. But suddenly, you have more options there in the future.

So I tend to kind of be quite future-proof in my designs, because I like to give my future self options, because I know I don't have the answers now. I may know more later, and then I don't want to have painted myself into a corner.

**Jerod Santo:** The other side of that, the non-moderation side of that though, is over-architecture, right? Because now you're generifying everything, and being ready for any circumstance.

**Mat Ryer:** Yeah.

**Jerod Santo:** And that can actually go against you in the long run as well. So finding that balance... I think your example is a great one, where it's a small decision that can be future-proofed, but it's not going to cost you a bunch of extra time right now. But we have that desire of like "I'm going to engineer this so it handles any use case." And then you're done. \[laughter\]

**Mat Ryer:** Exactly, yeah.

**Jerod Santo:** You've lost the game right there.

**Mat Ryer:** If it does everything, it doesn't do anything, basically, right? It's not doing anything, in a way. Yeah, that's right... Of course, you go too far with it... And I think there is kind of experience there, but there probably are techniques that people have come up with that allows you to sort of think about things. And I know of a few that I've heard of in the past... But honestly, for me it's always been instinctive. So how about you, Jerod and Natalie? Do you find that there's a science here, or does this feel more instinctive and gut feel?

**Jerod Santo:** So I will refer to somebody else whose name is escaping me, but...

**Mat Ryer:** Strange name...

**Jerod Santo:** He has a rule...

**Mat Ryer:** I wonder where that's from, Escaping Me...

**Jerod Santo:** Yeah, I mean - whose parents named them Escaping Me...?

**Mat Ryer:** Yeah. Cool name, actually, now that I thought about it.

**Jerod Santo:** Check him out, escapingme.com. I hope that's not some sort of weird website... Don't check it out. Jerod didn't tell you.

**Mat Ryer:** \[laughs\] Yeah.

**Jerod Santo:** There was a rule I heard, a way of making decisions... Because that's really what this is, like "Do I invest more time here to get it right, or do I do the quick and dirty thing to move on?" or whatever. And he says their team categorizes decisions into two buckets: easy to reverse, and hard to reverse. And if it's easily reversible, well then you just pick a choice and move on. But if it's actually a thing where it's like "If we have to back out of this, it's gonna be a lot of pain. Now let's slow down and spend the extra time." I think that's a useful, scientific way of thinking about it, versus just mere intuition. Natalie, did you have any thoughts?

**Natalie Pistunovich:** \[54:16\] I think I know what you described as the one-way door or two-way door, the way Jeff Bezos introduced it.

**Jerod Santo:** Okay, that's who it was. It was my friend, Jeff Bezos. \[laughter\]

**Natalie Pistunovich:** He's also in the US, right? You know each other?

**Jerod Santo:** Yeah, we do.

**Natalie Pistunovich:** Yeah, I agree that this is a good way of deciding whether to slow down and evaluate, or go fast because this is reversible. This is making a lot of sense. And in the book, the Noise book, they talk about taking decisions based on a hunch, so this is connecting to me, Mat, to something that you said, that you kind of do this intuitively. And they are saying that taking intuitive decisions is not always a good way to go about things.

And another interesting example that they bring is sort of like a mini research that they did at some insurance agency, where they took the management and they said, "Give us some ten scenarios and we'll give your different evaluators to evaluate that. And then let's see what would be the price for the premium that they might charge, and also ten cases, cases, and what would be the claim that they would pay." And they asked those managers, "What do you think will be the variance? How much difference would it be from each other?" And so if you're asked this, maybe in the context of Agile, what do you think that your developers - how different would be their evaluations of a task? 10%? 100%?

**Mat Ryer:** Sometimes they are off, but you sort of coalesce eventually, as you learn from each other. But what did they find?

**Natalie Pistunovich:** So this was expected to be something like a 10% variance, and it ended up being 55%.

**Mat Ryer:** Right.

**Natalie Pistunovich:** And this translates to a lot of money that is being lost, specifically in the world of insurance agents. And you made a very good point, Mat, saying that people learn from each other, and then compare and then kind of find the center, because this is exactly what was recommended there in the book, was how to avoid such a big difference is actually not just give guidelines and ask all the employees to follow that when they need to do their evaluation, and take their decision, but also to share knowledge. And also to come open-minded with the fact that even if your evaluation is double or half than the other person, it does not mean that either of you is wrong. It means that it's something in the process.

**Mat Ryer:** Yeah. And honestly, I think that sounds great, because you often see a junior person, their numbers will be higher often, because -- or sometimes lower, but they'll often be slightly away from where the sort of mean meet... Because they don't have the same context, they don't have the same information.

It's most interesting when someone's way off as an outlier, and it's the conversation you have about that work that's the really valuable bit in any estimation sessions for me. So you sit around all together and say, "Okay, we're gonna add this functionality. I suppose we'll use that integration, we'll do that thing, we've got this mechanism before, we've done something like it, we'll use that, and then there's some UI work..." Someone might say, "Oh, but what about this? Don't forget, it's got to work in the Slack integration as well." They're like "Oh, yeah. Okay." So you sort of get everything out that's just fresh of mind, and then you have an idea of that work. And honestly, just that little process of everyone chipping in was so valuable, and often you'd learn so much.

**Natalie Pistunovich:** You definitely see a wider image.

**Mat Ryer:** So my unpopular opinion would be keep estimation sessions --

**Jerod Santo:** Hold on, we've gotta play the music...

**Natalie Pistunovich:** Wait, wait...!

**Mat Ryer:** Oh, yeah. Should we do it?

**Jingle:** \[58:02\] to \[58:19\]

**Mat Ryer:** My unpopular opinion is we should keep estimation sessions, but throw away the estimations. The sessions themselves are great. They're so useful to talk through all the work, get all our ideas out, see where the interest lies, of who's going to maybe do the work, but the estimations are useless, pretty much...

**Jerod Santo:** That sounds brilliant to me. I like the way you framed that, and I think it's a smart idea.

**Natalie Pistunovich:** Yeah.

**Jerod Santo:** So I think this is not an unpopular opinion, but just a good idea.

**Mat Ryer:** Well, I sure hope it makes it to the Twitter feed... \[laughter\]

**Jerod Santo:** We'll see.

**Mat Ryer:** We will see, because I'll be keeping an eye on it like a hawk.

**Jerod Santo:** Have you done an unpopular opinion before? Or is this your first one ever? Because it's gonna be wildly popular, by the way...

**Mat Ryer:** I've done one, and I've regretted it ever since. And I knew I would. So I knew before I said it that was going to regret it. I then said it, thinking "I'm gonna regret this" and then later now, I regret saying it. Do you know what I mean?

**Jerod Santo:** \[laughs\] I do. That's utter. They call that utter.

**Mat Ryer:** Utter.

**Jerod Santo:** What about this one? Do you regret saying this one?

**Mat Ryer:** No, I think this is alright, this one.

**Jerod Santo:** That's because it's gonna be popular.

**Natalie Pistunovich:** It might not be unpopular, but still a good opinion.

**Mat Ryer:** We'll see what people say on Twitter. We'll let them decide really.

**Jerod Santo:** Yeah, they're brutal out there.

**Mat Ryer:** They'll are. They tell the truth when you ask them a question. They sometimes tell you the truth in a DM that you've not asked for, as well. It can happen. I've had that once or twice.

**Jerod Santo:** Natalie?

**Natalie Pistunovich:** I love doing Twitter polls. I also have an unpopular opinion. Books that are meant to teach people new concepts, but are not technical ones, should be shorter. I find that there's many interesting things to read out there, so I've been trying to read the book about growth mindset, and the idea of what is this growth mindset is being explained very well, very early on, and then the rest of the book is just different examples. And I stopped following at some point, because it's just explaining the same thing again and again and again in a different way, and I'm in this limbo that I don't know if I'm going to lose any other information... Will they introduce anything new in the end of the book, or not? Should I keep reading it? Should I keep listening to it or not? Or is it just going to be more examples? So books should be either more clear-structured, where is the new information, or just be shorter, because it's an introductory book.

**Mat Ryer:** I like this. I don't want to advertise, I don't get anything for this... Let me just sign up so I can do a referral program, but there's a thing called Blinkist, which essentially is this... The idea is it takes a book and distills it down to 15 minutes, the key concepts, the most important thing... The idea being if it really resonates with you, you'll then go and read the book, I guess. But it maybe satisfies that what you've said, which is - there's so many ideas out there, and of course, they've got to pad it into a full book in order to be able to sell one unit...

**Natalie Pistunovich:** But do they...?

**Mat Ryer:** Well, that's what they do.

**Natalie Pistunovich:** Do you want to pad that, and then somebody goes and summarizes that for you?

**Mat Ryer:** Yeah...

**Natalie Pistunovich:** Just make it short. Make it to the point.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** Make it a booklet.

**Jerod Santo:** Well, then it's a blog post, right? They can't sell you that blog post.

**Mat Ryer:** Would you pay 40 pounds for a blog post, if you had pounds?

**Jerod Santo:** Exactly.

**Mat Ryer:** No one else has pounds on here apart from me...

**Jerod Santo:** I'd happily lose 40 pounds for a blog post... \[laughter\]

**Mat Ryer:** It's a new exercise-based --

**Natalie Pistunovich:** I'm listening to books in an Audible; it's usually 10 Euros per book, it's not 40.

**Mat Ryer:** That's quite \[01:01:35.07\]

**Natalie Pistunovich:** It's an almost flat rate.

**Mat Ryer:** Oh, I see. So for all books.

**Natalie Pistunovich:** Practically, it's very hard to find a book that is not 10 Euros.

**Jerod Santo:** But they're not all the same.

**Mat Ryer:** Oh that's not $10 per book then, that's $10 for the entire library of the Earth, which is a pretty good deal.

**Natalie Pistunovich:** No, no.

**Jerod Santo:** \[01:01:54.04\] She still has to pick the book.

**Natalie Pistunovich:** It's per book.

**Mat Ryer:** Oh, it's still per book. Okay, I'm back to it being a bad deal.

**Natalie Pistunovich:** I mean, maybe there's different programs, I don't know.

**Jerod Santo:** Aren't there some books that are better than others, though?

**Natalie Pistunovich:** Yeah, I don't know... I have yet to come across a book that is not 10 Euros. Sometimes they have sales that something is cheaper or for free, but most of the books you find there is like one unit of credit, and that costs you 10 Euros.

**Mat Ryer:** I don't want to be a salesperson for that company, but surely there's already a subscription program where you can just unlock unlimited.

**Jerod Santo:** Blinkist?

**Mat Ryer:** I'm not saying that one again, but the Audible -- audio... I nearly said the brand name.

**Natalie Pistunovich:** Audible.

**Mat Ryer:** Don't say the brand name!

**Jerod Santo:** Oh, no...

**Mat Ryer:** We've advertised them now for free... Jerod's gonna be livid.

**Natalie Pistunovich:** You said Blinkist...

**Mat Ryer:** Yeah. But I also said I don't want to advertise them...

**Natalie Pistunovich:** \[laughs\]

**Mat Ryer:** ...because Jerod \[01:02:39.14\]

**Jerod Santo:** They pay good money to advertise on podcasts, just not ours. So go ahead, say their name.

**Mat Ryer:** So we've given it for free.

**Jerod Santo:** Yeah, well...

**Mat Ryer:** It devalues it, doesn't it?

**Jerod Santo:** We already ripped into Jeff Bezos earlier...

**Natalie Pistunovich:** It's a Berlin-based company.

**Jerod Santo:** Audible is?

**Natalie Pistunovich:** Blinkist.

**Jerod Santo:** Oh, Blinkist. Now we're saying both their brand names over and over again.

**Mat Ryer:** Have you heard of that company before then, Natalie? That app?

**Natalie Pistunovich:** I know this great podcast... \[laughs\] It's called Go Time.

**Mat Ryer:** It was the home where the great invention of Jerod's where it was -- what was it? You would lose weight by reading a blog post, or in order to unlock the blog post you have to hit certain exercise goals? Something like that.

**Jerod Santo:** Yeah, I think that would be motivating.

**Mat Ryer:** Yeah. Fit Blog, or something.

**Jerod Santo:** You know, it's like a paywall, but it's more of like a fit wall.

**Mat Ryer:** It's a pain wall. Fit Wall, that's good. Fit Wall is the name of it!

**Jerod Santo:** Pain wall - actually, I like that.

**Mat Ryer:** No, Fit Wall. Fit Wall, that's the name. Get the .com, quick.

**Jerod Santo:** We're gonna solve the obesity epidemic.

**Natalie Pistunovich:** Remember where you heard this first.

**Jerod Santo:** Yes.

**Mat Ryer:** Changelog doesn't own this idea just because we've said it on this. How does that work legally?

**Jerod Santo:** Fit Wall? Yes. All your IP are belong to us.

**Mat Ryer:** Well, I'm gonna see if I can get the domain name... I can't...!

**Jerod Santo:** \[laughs\]

**Natalie Pistunovich:** Jerod, is this your unpopular opinion?

**Jerod Santo:** No, I have one. I have one though.

**Natalie Pistunovich:** You have one. Please share.

**Jerod Santo:** The last time I was on the show we had a little debate around the terms we software people use to describe ourselves. Coder, programmer, developer, engineer...

**Mat Ryer:** Cool dude.

**Jerod Santo:** Cool dude. And since that show went out, I've had lots of follow-ups from people, kind of affirming what I said on the show, which is that everybody kind of has different definitions for what these are... And so there's no consistency, and so that's kind of meaningless to a certain degree. However, I did learn that in Europe engineer is like a protected class or something. You have to have a degree of some kind, which is a much more formal definition of engineer. I'm not sure if that's software engineers, or just engineers, or both. But I learned that from somebody on Twitter, so that's cool. Lots of conversations, people telling me that they mean different things to them. We did a poll on Changelog's Twitter about which of those four do you prefer to be called...

**Mat Ryer:** Oh, can we guess?

**Jerod Santo:** Yeah, go ahead and guess.

**Mat Ryer:** So what are the four options?

**Jerod Santo:** It was coder, programmer, developer, engineer.

**Mat Ryer:** Oh, right... I think engineer is the most serious-sounding. So if you're really serious about building -- you know, because proper software engineering is really hard. It's basically impossible, isn't it? If we're honest...

**Jerod Santo:** \[laughs\] It's basically impossible...

**Mat Ryer:** It's just this side of impossible, which is why we still do it...

**Jerod Santo:** Right.

**Mat Ryer:** So I think that might be the choice if the Changelog audience are kind of like quite serious about their work.

**Jerod Santo:** Right.

**Mat Ryer:** What do you think, Natalie?

**Natalie Pistunovich:** I would say developer.

**Jerod Santo:** Okay. Good guesses, because those two tied for first place? 42% each.

**Mat Ryer:** Yeah, interesting.

**Jerod Santo:** And this was a pretty good sample size. We had a few hundred people reply, so it wasn't like a GoTimeFM poll, where we get 23 votes. Come on people, follow GoTimeFM and vote on our unpop polls. We need you, we need your help. The Go community depends on YOUR votes.

**Mat Ryer:** \[01:06:00.28\] Yeah. And how am I going to get hair transplant if we don't get more listeners on Go Time? So come on, everyone, listen in. Listen harder! Go and listen to the ads twice.

**Jerod Santo:** Yeah.

**Mat Ryer:** \[unintelligible 01:06:11.21\]

**Natalie Pistunovich:** And answer the poll.

**Jerod Santo:** And answer the poll, yeah. Okay, so 13% of respondents were happy to be called a programmer. 3% of respondents want to be called coder.

**Mat Ryer:** Really?! Coder... No one wants it.

**Jerod Santo:** Yeah. In Leslie Lamport's video that we're referring to, he defines coding and programming as two different things. And this was something that people said to me was that coding is like typing. And developing or programming is much more than just typing.

So my unpopular opinion - this is a huge setup; we're going to cut this part out of the video. My unpopular opinion is that it's inappropriate to compare coding to typing. So if you're a writer, and you do all the things that writers do, think of the story, the characters, your ideas, design the story, etc. and then you go to write - those are two processes. That's fair with me.

If you're a developer, and you go doing all the things that a developer is going to do - plan, make decisions, test things, estimate some points wrongly, whatever you're gonna do, and then you go to write the software, I think it's inappropriate to say that the coding part of a developer's job is akin to the typing part of a writer's job. Because typing and coding are different. It's the writing part. So a writer writes, okay? Typing is just a thing that goes mechanically between you and a machine. But a coder codes; a developer codes. And so there's more -- coding is much more than just typing. I think it belittles it to compare it to typing.

**Mat Ryer:** Yes, I know exactly what you mean. When I first read that, I thought they were saying that coding is really just the act of getting it into the editor. And the programming is happening outside of that, and it's the bigger thing. But you're right, definitely between typing and coding -- I mean, you have to type in order to get coding to happen as well. So I think yeah, that is interesting that they \[unintelligible 01:08:22.27\] but I'm surprised coder just got 3%.

**Jerod Santo:** Nobody wants to be a coder.

**Mat Ryer:** Honestly, I thought that sounded the coolest. But I might be out of -- have I reached the age now where I don't know what's cool?

**Jerod Santo:** It might be an age thing, because I think programmer is an older term, that I think probably people who've been around longer -- I mean, it used to be programmers write programs. But then programs became apps, and programmers kind of became developers. I don't know why or when, but it seemed like that kind of happened, and programmer has fallen a little bit out of trend.

**Mat Ryer:** Yeah.

**Jerod Santo:** Out of vogue. But coder is like - nobody wants to be that.

**Natalie Pistunovich:** I think to me, when I hear code, I'm thinking of code monkey. I heard this term so many times in the negative context of somebody saying "I want to do more than being a code monkey." I think this could be a reason.

**Jerod Santo:** That's a good point. Maybe that's why people associate it with that, that concept of "Just take a ticket and do the coding, you code monkey." And like, we don't want to be put in that box. That might be true.

**Mat Ryer:** That could be it. I understand that. But in a way, I quite like being modest. But then I'm in a position where I can't be. Obviously, not everyone can just be immediately modest. But you have to sell yourself when you get into your career, and stuff. But I like it when you see people that have invented core concepts that we all use in their bio just as programmer. It's very understated, and I think that is quite cool. So it may come back, it may be retro, hopefully.

**Jerod Santo:** Right. We'll see.

**Mat Ryer:** But I quite like developer, because it sounds it's developing; it's never finished. An engineer - you're almost like at some it'll be engineered, and then it's done, and it's delivered. Whereas there's something nice about the fact you're telling people "This isn't going to be finished. So get that out of your head now! This thing is going to drag on!"

**Jerod Santo:** \[laughs\] Well, when I think of engineering, I think of like building a bridge, which is very much rooted in years and years of physics, and math, and...

**Mat Ryer:** Metal...

**Jerod Santo:** \[01:10:23.01\] ...known equations. And we can engineer a bridge, and then it's done.

**Mat Ryer:** Tarmac...

**Jerod Santo:** We know exactly what it's capable of, and what it will buckle under. And I don't feel like software is ever that. We're learning constantly. It's more like that whole flying a plane, or changing it while it's flying, or something.

**Mat Ryer:** No, it's true. It's because the speed at which we can iterate, and that feedback loop actually, which is one of the points that's come up a few times throughout this. Having a feedback loop, and having a short feedback loop. That is what enables to move quickly, because you can try things, walk back if you got it wrong, you haven't committed loads of resources to it, because it was just a small thing anyway, so you don't feel bad... And you can then correct course... I think that, working at that kind of resolution is the way to do it. And that's why it's so hard to estimate stuff when none of us are doing anything we've really done before. We're probably doing something no one's ever done before, in lots of ways, and so we should give ourselves a break... And tell our managers to shut up!

**Jerod Santo:** \[laughs\]

**Natalie Pistunovich:** Perfect way to finish this episode about velocity. Gentlemen, thank you for joining. That was fun. I don't know if you can hear in the outside it's the firework of Berlin celebrating the sunset of the longest day of the year.

**Jerod Santo:** Oh, wow.

**Natalie Pistunovich:** It's done. The day is done.

**Mat Ryer:** Oh, congrats, Berlin.

**Natalie Pistunovich:** It happened. It's been a pleasure spending it with you.

**Mat Ryer:** Oh, well, a long day, but...

**Jerod Santo:** We talked to you all day.

**Mat Ryer:** It felt like it...

**Natalie Pistunovich:** Throughout the sunset.

**Mat Ryer:** It's been a pleasure. There's not two people I wouldn't rather spend an entire long day with... So thank you very much. It's okay just to say that, but... Fine...
