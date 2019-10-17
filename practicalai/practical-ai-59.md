**Chris Benson:** Welcome to another episode of the Practical AI podcast. This is Chris Benson speaking, I am principal AI strategist at Lockheed Martin, and with me today is my co-host Daniel, who is a data scientist with SIL International. How's it going today, Daniel?

**Daniel Whitenack:** It's going pretty good. I'm working on not my normal amount of sleep. I've been having some extra meetings this week with a team in India I'm working with on some dialogue stuff, some conversational AI, and so it's been early mornings for this week... I'm looking forward to sleeping in in the morning, but -- it's been good tech, just early mornings. How about yourself?

**Chris Benson:** I probably have more sleep now. I was a little sleep-deprived earlier in the week; I think I've caught up... But I'm just kind of cruise control here; I'm about to head over to the U.K. for a week of work, and then a couple of weeks of family vacation, so I'm looking forward to that.

**Daniel Whitenack:** Good times.

**Chris Benson:** Yeah.

**Daniel Whitenack:** Looking forward to some shepherd's pie, or jellied eels, or something?

**Chris Benson:** Strictly vegan everything, my friend.

**Daniel Whitenack:** Oh yeah, that's right. I don't even know why I ask that...

**Chris Benson:** Strictly vegan, my friend.

**Daniel Whitenack:** When I think of England, the food scene seems like meat in a pie is what I think of.

**Chris Benson:** And I think traditionally it has been. And since you said that, I'll just say - my wife was amazed... She's always grumbling; we're both vegan together, and she's always grumbling that her father is like the epitome of the meat-eater, and she was just delighted, she was just gleeful when I came home a few days ago, and she said that her dad had tried some vegan beef and vegan hot dogs and stuff like that and he liked it. She was just "Ohhh, that's great!" So who knows...

**Daniel Whitenack:** Wow... Well, you'll have vegetables in pies, or something.

**Chris Benson:** There you go. So apparently even the meat-eating folks of the U.K. may go that way. But this isn't a vegan podcast, so I'll stop going down that... Anyway. But when I get back - I will kinda be back into the world on this side of the pond early in October, coming back into work on the 7th, and I am gonna get to do something that's pretty fun that's participating in a program that Lockheed Martin has been driving, with some partners. It is called AlphaPilot. And today with us on this podcast we have Keith Lynn, who is the program manager at Lockheed Manager for the AlphaPilot program.

\[00:04:12.16\] When he tells you about this in a few minutes, it's gonna blow your mind. It's a super cool thing, and he's been working really hard on it. Keith, welcome to the show!

**Keith Lynn:** Hey, guys. Thanks for having me.

**Chris Benson:** We have actually been talking about having you on for quite a long time... With some of the events that we have done internally at Lockheed, that you have orchestrated, and I've kind of come back and just said "Daniel, this cool thing... And at some point, when it's the right time, we've gotta have an episode about it." So we've both been excited...

**Daniel Whitenack:** I've been asking Chris each week about "Hey, can we talk about this thing you've been talking about now?"

**Chris Benson:** \[laughs\] He really has. Before we dive fully into AlphaPilot, if you could just kind of tell us a bit about yourself, how you got to where you are, and what's the life path that led you up to this moment where you are running this amazing AlphaPilot program?

**Keith Lynn:** Yeah, so I think I've been with Lockheed about 11 years now. I started out graduate in physics and mathematics at a liberal arts college here in Pennsylvania. My first job was doing signals intelligence. From there, I guess my curiosity got the best of me, and Lockheed is a really good place if you like some diversity of what you're working on, so I quickly jumped to doing some research in healthcare, then in energy management systems; I eventually made my way to our corporate office and got to do some international work.

I've spent the better part of a year and a half managing R&D in the United Kingdom... Some nanotechnology research down at Rice University in Texas, and eventually landed in the Autonomous Systems group at corporate. This was around the time when AI really started to take off. A couple years back AI was -- you know, if you asked people "What do you know about artificial intelligence?", they'd say "You mean like robots?" So the term in itself has really blossomed, and it has a much broader field of meaning now. At Lockheed Martin we started looking at artificial intelligence, and then a subset of that, which is autonomous systems... And really trying to figure out where we can apply that across our different products and services... And that's what really led me in AlphaPilot, a few years back -- I'm sorry, a year back. It feels like a few years back already...

**Chris Benson:** \[laughs\] I know that when I saw you at the event that you'll probably mention a little while back, you were going - pardon the phrase - balls to the wall. You were really working hard, so I can believe it's felt like three years.

**Keith Lynn:** It's been one of the longest years for me on record, that's for sure. But I couldn't be happier. I might not always say so in the heat of it, but I think I always look back and I say "Man, doing this kind of thing where it's chaos, and things are going haywire, but you somehow manage to land the plane..."

So it was just about a year ago... I was actually sitting at a hotel next to South by Southwest conference center, where we were doing a presentation, and I think I was actually telling my boss "I'm getting a little bored. I'm not really sure what I wanna do next... I feel like I need my next big thing; something that really pushes me to the limit." And then our vice-president sat down and he just said "I just got this new thing, it just came on my plate... Lockheed wants to do a global innovation challenge, and I wanna do something with autonomy; maybe drones or something like that, we're not sure... But it's gotta be huge. It's gotta really get people's attention, it's gotta really show people that Lockheed cares about artificial intelligence. And now we just need some \[unintelligible 00:07:48.00\] to put in front of this and figure it all out." The timing was just perfect \[unintelligible 00:07:53.11\] said "Hey, I'm looking for something... Let me take a crack at it."

**Chris Benson:** \[00:08:02.02\] So before we even dive into AlphaPilot, just to give some background, before we even talk about the program... It has to with drone racing, and stuff, and I was wondering if you could talk about what that is prior to AlphaPilot? What is drone racing, and what's the interest in it, and is it something that's specific to the U.S, is it international? If you could talk a little bit about that, and then we'll get into AlphaPilot and describe its role in that world.

**Keith Lynn:** I just mentioned that AlphaPilot involves drones, and drone racing specifically. That as a sport is about four years old. From what I've been told, it was first conceived of in Australia, then made its way to America and really took off, and now it really has a global audience; I know it's very big all across Europe, actually...

What that is basically - it's humans piloting drones via what they call a FPV (first-person view) camera. So these pilots have a really good RF signal, so they have low latency; they see what the drone sees, and they are competing with each other in a traditional first-to-the-finish type race, through various types of courses.

**Daniel Whitenack:** Like real-life video games.

**Keith Lynn:** Yeah, like a real-life video game.

**Chris Benson:** And how do they see?

**Keith Lynn:** By wearing these goggles. I've actually tried them on; they just look like a pair of lab goggles, or VR headset. You put them on and you get this view from the drone, and a lot of times it's kind of grainy; it's not the best. And if you're at all motion sick, or you're the type of person that gets motion-sick, it's not the most pleasant experience.

**Daniel Whitenack:** That's what I was just thinking... So I can ride regular rollercoasters all day, but I remember we went to Universal Studios recently, and we were in one of those 3D rides, where it also shakes you around, and stuff... Man, I got so sick. Something about that virtual motion just really does not agree with me.

**Chris Benson:** Yeah, the older I get, the more that affects me. When I was younger, I could kind of do it, but after a while your body works with you less and less in that way.

**Daniel Whitenack:** So you mentioned there's these people that are wearing headsets, they're piloting these drones... I'm assuming it's around a race track. There's gates they have to go through, or something? Is that how it works?

**Keith Lynn:** Yeah, so it's done a little bit differently, depending on who you're racing with. There's a lot of different organizations that are doing this; some are more grassroots, some are professional. On AlphaPilot we're partnered with the Drone Racing League, which is probably the biggest drone racing outfit out there. They're on national television, they have events worldwide... I think over 80 million viewers annually.

Their courses are like a traditional racecourse, where you're going through different gates and checkpoints, and they try to do them in exciting locations and integrate with the local environment to the extent possible.

**Daniel Whitenack:** You mean like around buildings, and such?

**Keith Lynn:** I was at one last year that was at the BMW headquarters. There was literally an indoor track with all these BMW vehicles going back 100 years, and they were flying over top of the cars, and between different BMW displays... So they try and make it really an exciting environment.

**Daniel Whitenack:** Cool. That's pretty neat. How fast are these drones going? I'm just imagining having this headset on, and I'm assuming you have to have pretty quick reflexes to make it around this course. What's the speeds that these things are going, and the size of the course? Are we talking feet, miles...? How big of a scale are we talking about?

**Keith Lynn:** I think even more than reaction time, it's so darn hard just to control a drone. There's so much sensitivity in the joysticks... I've tried it out with a little training wheels drone, and I could not -- this thing just pinballed between the floor and the ceiling. It's incredibly hard just to keep the thing in the air... But they top out around 80 miles an hour, I believe. Now, that's not sustained 80 miles an hour, but on a straight way they get up to about that speed. The laps themselves - they're maybe like the size of an indoor track, I would say.

**Daniel Whitenack:** \[00:12:26.02\] Like a track and field track sort of thing...

**Keith Lynn:** Yeah. And they would do multiple laps. The interesting thing is they're really burning through these batteries going at that speed, and with that kind of agility, so the flights themselves don't last very long. Maybe a minute total.

**Daniel Whitenack:** The full race, or do they stop for a pit stop, recharge? I imagine that wouldn't be too exciting.

**Keith Lynn:** Yeah, so when you're there, you've got this safety net in front of you... There's a very intense safety protocol, and these things just go buzzing by you... And really sometimes all you see is the LED lights, so it's just kind of a blur, red, blue or yellow, or whatever color that particular racer is.

**Daniel Whitenack:** It seems almost like a horse racing experience, where -- you know, at least a couple people on this call approve of all things horse racing, but it's like, that very short period time of high excitement, and everything's over in however long it takes (one minute, like you said), and it's a very intense experience.

**Keith Lynn:** Yeah. You go from looking for it to come around a corner, whiz past you, then your eyes go back to the giant screen to see where it is now. The Drone Racing League is very good with production quality. They have the whole arena mic-ed up, so if one of these things bites it anywhere, you're gonna get that audio as if it's right next to you. It's a real intense sound when these things crash going that fast... And part of the guilty pleasure of racing always is seeing a little bit of hardware go flying, so... It's a fun time.

**Chris Benson:** Yeah, you can describe it in a minute, but even the thing that I was at, the event that I was at, with the teams, was quite thrilling. And it wasn't even production quality of what you're describing for everyone... But I think all of us that were new to it were like "Wow...!" Which brings me to the next thing - now that you've describe what drone racing is with these human pilots doing their thing really well, could you describe what AlphaPilot is and how it fits into that context of drone racing and such?

**Keith Lynn:** Sure. AlphaPilot is a public innovation challenge. I would compare it to a DARPA Grand Challenge, or an XPRIZE, where an organization - in this case Lockheed Martin - puts out a hard problem... Our was programming a drone to fly in a racecourse autonomously... And that challenge is associated with some kind of award. Our is two million dollars for the top teams, and an additional $250,000 kicker prize if any algorithm can fly faster than a professional human pilot on the same course. So we're having a little friendly rivalry with the professional pilots here in the Drone Racing League.

**Daniel Whitenack:** Gotcha. So it's almost like sort of a Watson Jeopardy sort of challenge thing going on, where there's actually humans racing at the same time.

**Keith Lynn:** It would be more like if there were four different Watsons competing with each other, and then we took the best Watson and put it against the best human Jeopardy player, just for fun.

**Daniel Whitenack:** So there's a series or a bracket or something, too. People go against each other, the humans go against various drones that are autonomous, and then there's sort of like a grand showdown?

**Keith Lynn:** Originally we were going to pair the autonomous racing with human racing, so we could have more of that side by side... And we decided to move towards more standalone events, because we wanted this to really be not just about the racing, but a celebration of artificial intelligence, and create an opportunity for larger STEM Engagement.

Our events are just gonna be autonomous racing, even though we'll have some human pilots there to do some commentary and some demonstrations... And then as we get later in the season, we will have one of the pilots on standby to go head-to-head against the top autonomous team after the racing for that day is finished.

**Break:** \[00:16:32.23\]

**Chris Benson:** So for these teams that are working on AlphaPilot -- we've talked about the drone racers in the manual sense... There are these teams that are behind these automated AI-enabled drones that AlphaPilot is doing... Could you tell us a bit about the teams, and where they're from?

**Keith Lynn:** Sure. AlphaPilot as an innovation challenge launched late last year, and we had about 430 teams sign up to compete. These teams were from all around the world. We used a simulation-based process to down-select to just nine teams to go into this first-year season of autonomous racing.

The teams that we selected are just fantastic. A lot of them are with universities, some of them are small businesses... But we have teams from Georgia Tech, UCLA, University of Zurich, a team from Brazil, a team from Warsaw, a team from KIST in South Korea, and then we have a team that's really kind of a mix of people from three different continents, which is quite impressive considering this is all software-based and they have to run it remotely. We're really impressed with the diversity that we received. They're some really impressive folks.

**Daniel Whitenack:** On these teams, I'm kind of curious - you mentioned universities - are they mostly student teams that are doing this as a senior design project, or something like that? Or is it graduate researchers? What's the range of experience there?

**Keith Lynn:** A little bit of everything. We didn't wanna put too many restrictions on how teams formed, because we wanted people to feel comfortable working with the other individuals that made the most sense, and that they would enjoy being a part of it the most \[unintelligible 00:19:16.11\] We do have some teams where it's all undergrad students, we have some where it's a mix of grad, undergrad, and we have some where the professors are even involved. So yeah, we get a little bit of everything.

The only rules we've put on it were no more than ten individuals per team. So we didn't have anyone with 100 people on the roster, and then we have to keep tabs on all of them, and they're outsourcing tasks to the web, and things like that. And then a basic age requirement, just because you're dealing with some flying things that are really heavy and go fast, so we wanna make sure everybody is an adult. But that was it.

**Daniel Whitenack:** \[00:19:54.13\] And in terms of constraints technology-wise -- and forgive me of my ignorance of drone racing; people probably love drones and I'm butchering a bunch of things, or ignorant... But in these leagues is there a specific drone you have to use, or what are the constraints hardware-wise? You have to have a drone that's this model, or one of these models, but you can modify it in XYZ ways? How does that work for the teams?

**Keith Lynn:** Yeah, it's a good question. In the entirety of drone racing, the answer is all of the above. With some leagues it's BYOD - Bring Your Own Drone - and they'll just give you some basic requirements about size, weight, power. Others are a little more structured, but still BYOD. They might say "You have to use six-inch props, you have to use these motors, but the platform and everything like that - you optimize as you want."

Then the Drone Racing League, our partner in AlphaPilot, and their new league that they're creating for AlphaPilot, and it will be a standalone event moving forward, is called AIRR (Artificial Intelligence Robotic Racing), they use a standardized drone. They do this in their human races as well.

Each year they -- I believe each year, but periodically they release a new model drone that is standard for all of their competitors. And we really like that at Lockheed, because we wanted this to be about the quality of the algorithms, and if a team won, we wanted it to be because they were the best programmers, not because they had better motors or better batteries on the drone, or something like that.

**Chris Benson:** To extend that a little bit - we're talking about some of the tech with this - could you describe the technologies that are in the drone? And in terms of hardware, what kind of hardware is being used to run the algorithms and do inference? Take it wherever you think would be appropriate. What are some of the technologies that are being used at this point by DRL drones for these races?

**Keith Lynn:** Yeah, so the main difference between drones for autonomous racing and drones for human-piloted racing is that our drones have to carry a computer on board... And to do autonomous racing - there's two ways that you could do it, really. You could do edge computing, which is all the decisions that are made by the algorithms happen onboard the drone, or you could off-board, which means you have a little latency coms link between the drone and some high-performance computer on the sideline somewhere, and it reads in signals, sends it to the computer, the computer makes a decision and sends it back. That's less impressive technically, and it could actually create a problem because of the latency and the speed of the drone. So we decided to do fully on-board edge computing, which means you need a pretty impressive processor on this drone.

There are some drones that carry an on-board GPU, but we wanted to make sure that we were giving people enough computing horse-power, so we went with the latest NVIDIA model for edge computing, which is the Xavier. That has never been put on a drone before. It's a little bit larger than previous model GPUs, so we had to design an entirely new platform altogether. DRL did a fantastic job doing heat displacement, and everything for this drone. It's definitely unique and first of its kind.

**Chris Benson:** Yeah, commenting on it - and I actually have the Xavier listed here in terms of specs... This is the same GPU computer that is used in autonomous vehicles. It's a 512-Core Volta GPU with Tensor Cores, 8-Core ARM with a 64-Bit CPU, 16 GB of 256 LPDDR4x memory, 32 GB of flash storage... It's quite a computer, without going through the whole thing. I know that when I saw you last at the event, you were putting a pretty serious computer on these drones, and I was pretty impressed with the performance even so.

**Daniel Whitenack:** \[00:24:04.04\] Yeah, no wonder they run out of battery. I mean, I'm kind of impressed -- this isn't like, you know, the humans are still wearing the headset and they're kind of like augmenting the flight somehow... It sounds like more it's like they're -- and I don't know how this starts, maybe you can describe it; there's these autonomous drones that are just kind of hovering there, ready to start, and you push the button start, and based on the video feed that they're processing, then they sort of accelerate, turn, switch directions, slow down, all of those things? Is that the kind of scenario we're dealing with? Or what data are they working with to make these decisions?

**Keith Lynn:** The teams are primarily training for these races in a simulation environment that's built of off the DRL training simulator. They modified that for autonomous racing, they put in the new drone physics and updated the world models. Then they also created course models based on the races. We have a permanent training facility in Littleton, Colorado, where we set up a small-scale course with two gates. That's kind of the gym, so to speak.

So these teams can write their algorithms and then trained them in a simulated deployment in this gym. Then what they can do is when they feel comfortable, they send the code over to our team, we load it up on an actual drone at this facility and deploy it in real life, and they collect the actual data from the drone, the telemetry input from the IMUs, range finder, the cameras, and send that back to the teams. Then the team uses that in comparison with what they're seeing in simulation to make some modifications.

And then before each race, we release a model of that course, so they can specifically start training for the racecourse that they're about to compete in. Then about a week out from the race there's a final code submit. So they send us the code, we do all of our safety checks on it, make sure it checks out and it's gonna deploy. Then on race day they have absolutely no physical involvement with the drone whatsoever. Everything that it does when it takes off on that podium has already been coded and pre-planned, and it's just ready to go when they get there.

**Chris Benson:** I would like to follow up on a couple of things you just said... And first of all, there's literally a podium that all of these drones are sitting on, rather than being all the way down on the ground when they take off... So they're at a slightly elevated position, just for the listeners. But you've mentioned a few things - a little bit of jargon there I wanna ask you for some definitions for, just so everybody can follow. You mentioned simulation and world models; and a couple other things, but starting with those two - can you talk about what is a world model? What does that mean in simulation?

**Keith Lynn:** Sure. It's really, really hard to train a drone to fly itself when you're primarily doing it in a simulation, which means you recreate the world that you want it to fly in in a computer environment. The reason that's hard is because there's always a delta between what's actual and what you're simulating, what you're modeling. So in order to do that, you need high-fidelity, you need to model everything the drone's gonna encounter: wind, lighting glare, drift in the sensors or the standard deviation error bar, and the sensors that you're using, which is specific to the specific brand and hardware... Gravity - you need good gravity. Wind resistance models. Drag. All these things have an effect, and if you don't model them well, that means your drone isn't gonna behave exactly like you think it is, it's gonna behave slightly differently. And sometimes that's small enough that it doesn't make a difference, but if you're going fast and over a long enough distance, that could be the difference between going through the center of a gate or crashing into the edges of it.

**Chris Benson:** \[00:28:06.04\] Gotcha. And you also mentioned a couple other things, just for definition... You mentioned telemetry, which probably most people know, but I'd like to cover that for a second... And also, you mentioned IMU, and I'm betting a lot of people don't know what IMU is referring to.

**Keith Lynn:** Yeah, IMU is inertial measurement unit. You can think of -- maybe some people are more familiar with a gyroscope. Something that essentially can provide data on the three-dimensional positioning of a drone at any given time as it's flying. Pitch, role and yaw are the three measures. It could be leaning forward, left or right, or side to side. Knowing your position in space is really important if you're trying to figure out how you go from where you are to where you wanna be... And then also knowing your position from your last measurement is important, so you can gauge your velocity and trajectory.

**Daniel Whitenack:** And just to separate - so there's the simulated world, in which you can train before they ship the code off to you and they go through the training at the gym, or whatever... But in terms of the -- so there's that simulated world, but in terms of the actual inputs that the AI models are working with in order to make decisions, is that just video, like a human operator would see? Some of these other sensors and these measurements that you're talking about - can those actually be input to the models as well?

**Keith Lynn:** The simulator that our teams are using is part of what they call the integrated development environment, and it's a hardware-in-the-loop kit. Think of it as a computer that's running a simulator, then the simulator is connected to basically a dissected drone. So there's the cameras - and this drone in particular has four cameras - there's the inertial measurement units that I mentioned, there's a laser range finder which points doing at the ground, and that gives the drone a measure of its altitude at pretty high samples rates; I think like 200 Hertz... And then there's the Xavier itself.

When they're running the simulator, everything they're getting on the screen - let's say they have an environment that looks like a warehouse, and they're flying towards a racing gate - that visual input is then run through the cameras, which then output that into the GPU, which then processes it... So it's replicating the exact process that they would be using on the drone.

**Daniel Whitenack:** So there's definitely various inputs to the AI models... But in this simulated environment, those inputs are simulated as if they were flying around the track. Of course, as you mentioned, there's these deltas that they have to deal with, and it's not always exactly the same... But it's meant to mimic that as close as possible.

**Keith Lynn:** That's right.

**Daniel Whitenack:** It makes sense. It seems like a heavy -- with four cameras, this laser range finder, the GPU, all of this stuff... It's a pretty intense drone. How big is this thing, and how long can it run? You mentioned the races were about -- what did you say, like a minute or something?

**Keith Lynn:** Yeah, the human pilot races are about a minute long. The drone itself could probably run for about five minutes before the battery started to run out... And how long it takes really is gonna depend on how proficient our teams are with their algorithms, which is partially based on their ability to program, partially based on the fidelity of the simulation environment that we're providing... And you know, we're working really hard to continuously upgrade that, to make it as accurate as possible.

\[00:31:49.08\] If everything is looking great, they should be able to fly through this thing in seconds - 30 seconds, 40 seconds, a minute. But if you look at the current state of the art, so to speak, there's been other attempts to do autonomous drone racing... \[unintelligible 00:32:03.18\] competition comes to mind - they go pretty slow there, because it takes a long time to orient and figure out what they're doing... Still, I don't think it would take more than 2-3 minutes tops.

**Chris Benson:** AlphaPilot is a fantastic way of showing how current AI technologies are driving autonomy, kind of in a small scale, and stuff... But just in a larger sense, in general, how do you see AI as an enabler for autonomy? What has AlphaPilot brought you to in terms of how you think about this, since you're part of this world on a day-to-day basis?

**Keith Lynn:** Well, the work I've been doing with AlphaPilot and with artificial intelligence in general has been pretty enlightening for me. It's something I haven't specifically studied, but the range of applications is just so broad... And it's not always in the most obvious ways, so the ways people would think; self-driving cars always come to mind, or robotics come to mind... But basic optimization of business processes, or human functions like scheduling, and calendars, and email, and things like that - AI is already making a huge difference.

I think that it can't be overlooked, because that's really how it touches everybody's lives. It really gets it out there, everybody gets some level of exposure to it. Things like home assistance, work in the language space, others work in the written space... And I think the more we all become familiar with AI, and the more we have opportunities to see it doing cutting edge things like flying a drone all by itself in a very friendly environment and a competitive environment that's fun and encouraging, the more everybody is going to get inspired by it and we're gonna come up with even greater ideas.

**Daniel Whitenack:** Partly I'm assuming that Lockheed is interested in this sort of innovation challenge because of the algorithm and the automation part of it, that could be applied even outside of flight... But inside of flight, when we're thinking about maybe commercial airline flight in the future, or even recreational planes or military planes or all that - what do you see as the near-term applications of AI within flight?

I know that, for example, the car industry - they're going through figuring out all of this stuff, and there's talk about "Oh, well it's first gonna happen in long-range trucking", and there's always gonna be a human operator there... What does that look like in terms of flight? What do you see as the near-term applications of AI in flight, whether that's commercial or military or whatever?

**Keith Lynn:** Yeah, so it's always fun to talk about what AI could do, but I think it's equally important to talk about what it can't do, what it should do or what it shouldn't do. When you're talking about military aircraft, or space exploration, or anywhere where you're putting a human in a dangerous or difficult and extreme environment, there are certain things that AI should be doing or could be doing that really improve the safety or overall quality of that mission... And those are generally lumped into things like cognitive assistance, where somebody under stress has a high cognitive load and they make mistakes, or they're more prone to make mistakes, or where their reaction time is limited, or maybe it suffers to some extent - that's where AI can really help save lives, and we are using it in that capacity already.

Another area that's really interesting is teaming environments, where you have a human piloting an aircraft, and you may have that human commanding a fleet of autonomous vehicles. So it's really the interchange between human-piloted vehicles and unmanned or autonomous vehicles working together... And then they really become an extension of the human; they provide additional mission capacities, or they help them with certain functions and basically extend the reach.

**Daniel Whitenack:** \[00:36:16.17\] So if I'm thinking of commercial airline flight, for example - it seems like if I compare the sort of drone racing you're doing, which already within this confined space, with a small device, we're talking about four cameras, a laser range finder, all of these inputs that it's receiving, and it's a challenge, would I be right in saying that at least in the near term AI might be processing inputs within a flight to help augment pilots, but it may be unlikely that we're gonna be seeing autonomous 747s everywhere really soon?

**Keith Lynn:** Yeah, I think we can certain get to that point someday, but in the near-term, whenever you have precious cargo, or human lives on board... This is what I was talking about, where you need to think about the limits of AI, or what AI shouldn't do... And right now there is a certain need for a human to have a level of control in that decision-making loop. And if you're talking about passenger aircraft, I don't think you're gonna see them fully-automated any time soon. There's a certain level of comfort and dynamics that a human can bring to the decision-making that I think you need a pilot for. But let's say there's a pilot flying a 747 -- I'm outdated here; 747 is so old now...

**Daniel Whitenack:** Yeah, I was trying to think of a --

**Chris Benson:** \[laughs\] Don't make it a Max, okay?

**Daniel Whitenack:** ...just being fully transparent here, being on a call with two people from Lockheed Martin and trying to come up with a valid aircraft name, 747 was the only thing I was really confident in, so that's what I went with... But I realize that's probably extremely out of date. I wouldn't wanna go for the Boeing Max, whatever.

**Keith Lynn:** I think it would be totally feasible in the future to see a pilot land their 747 and the onboard AI is flying in parallel, and then that pilot can compare their performance to the AI's performance, and either the AI learns from the pilot, or the pilot learns from the AI. So those types of things are already in motion, and they have tremendous benefits attached to them.

**Chris Benson:** I'm curious, outside -- we've been talking about flight, within air, within the atmosphere... I'm just curious what your thoughts are in general about other environments, whether it be space, whether it be underwater, and when we might see inroads there. Do you have any insight into any of that?

**Keith Lynn:** Yeah, so at Lockheed Martin we're looking now at autonomous vehicles for use in humanitarian aid and disaster relief, and there's a lot of different scenarios, especially in that area, where you have difficult to reach environments, or you have destruction of local infrastructure and it's really hard to put a human in there, and it's very time-sensitive; that's a great near-term application where autonomous vehicles can do a lot of good.

You're already seeing things in the news about them being used to deliver blood, or medical supplies to hard-to-reach places - that's another immediate application. And then as we really start to grow into things like space exploration, going back to the Moon, or putting a human on Mars, you get in these situations where you have communications latency, given the huge distance, and you need to make decisions local, so you need an autonomous vehicle that can process information and make its own decisions... So I think as we get into the new space age, you'll see AI playing a huge role there.

And then I think you mentioned undersea as well... This is an area -- it's actually already in practice. Some autonomous vehicles for development at Lockheed Martin - we've already used them for things like undersea oil rig inspection after some of the hurricanes in the Gulf... Just yet another domain where it's hard for a human to go safely, and it's also hard for a human to analyze the situation very well, because it's not their traditional element. These types of things are just right for AI.

**Daniel Whitenack:** \[00:40:26.22\] So if I'm a -- and I've probably shown my ignorance of drones and flight throughout this interview... But if I'm out there, and maybe our listeners are wanting to get involved with drones and maybe do their own experiments, are there accessible ways that they can experiment with maybe computer vision or other things with drones, without being part of this elite group of teams competing at this level? I think if I remember right there's at least some drones that have AI inference chips on -- am I right about that? Maybe you know of some good ways to get involved.

**Keith Lynn:** So there are a couple of commercial drones that are starting to have onboard computers. You could do some amazing stuff with them and they're a lot of fun. They have an onboard Raspberry Pi, or an NVIDIA Nano... And that's enough compute for you to basically learn the basics of how to code, so that the drone can read inputs from its cameras and use that to make guidance, navigation and control decisions, and fly autonomously. So there's a lot of great beginner kits out there.

Then if you want to experience what some of the pilots are dealing with for AlphaPilot and for the air season, we actually have the simulation environment we used in our qualifier, which is different from the one the teams are using now, but it's a high-caliber simulation environment; it uses the robotic operating system. That has been made available open source through MIT, and it is called Flight Goggles.

**Daniel Whitenack:** Cool!

**Keith Lynn:** It was developed by a consultant on the program, Dr. Sertac Karaman at MIT, who's been a huge help in setting this whole thing up. It's a great, fantastic tool; I encourage anyone to just go check it out. Even if you're just flying manually, it's a lot of fun.

**Chris Benson:** Sounds great. As we finish up, if you could possibly tell us a little bit about the first couple of races that are coming up, where and how people can access them? But also as you do that, as people engage on this, and families and kids are watching, what would you like to see them take away? What kind of impact would you like to have on them as they engage on these initial few races?

**Keith Lynn:** \[00:42:45.14\] Yeah, I'll start with that one... This is something that I find really fascinating - I'm so thrilled to be doing racing with AI... Because racing has a history of being a catalyst for getting people inspired with new technology. I gave a talk at MIT a few weeks ago where I was showing photos of London in the 1890s, and I showed an article in the London Times about how they were predicting in several years the city would be buried in horse manure, because the current solution of horses and buggies was just not sustainable... And people were really freaked out about this at the time, and they thought "You know what - we're at the edge. This is as far as society can go."

The automobile was invented, and people just kind of wave it off and they were like "That thing is a monstrosity. I don't know how to use it. Horses are so integral to society... And you just wanna get rid of them and you wanna use these things now? I don't know how to use it. I don't know how to work with it." And it just floundered for quite a few years, and because nobody was demanding it, the scale of production was low, the prices were high... And I think that when people started racing cars and made a spectacle of it is when really people started to come around to the idea of these things being a technology of the future, and it took kind of the mysticism out of it.

If you can pay a dollar and go watch these things race, then they're not something that's reserved for a select few; they're part of your life now... And that's what we wanna do with AlphaPilot. We wanna make artificial intelligence and autonomy a part of everybody's lives. Everybody can watch these races on NBC Sports or Twitter and feel some ownership in it. Or they can come to our race events, which are free to the public, and feel a little bit of ownership in that AI, and feel like maybe this isn't something that is closed off to them; maybe it's a lot easier to get involved than they initially thought. And if they're inspired to go home and do a little more research, or maybe try and see what other great things are going on in AI, then I feel like we've done our job to help inspire that next generation.

**Chris Benson:** Fantastic. And when are those couple of races and where are they? ... so people can show up for them, or watch them online.

**Keith Lynn:** The first race is gonna be October 8th at the University of Central Florida, and it's going to be an all-day event. We're gonna have some great Lockheed Martin products on display, we're gonna have the UCF Drone Racing team there showcasing some of their capabilities, some of the DRL professional pilots will be there doing the same, and we'll have some great commentary about what people are seeing in the races and about AI in general.

Tickets will be made available on Ticketmaster, and you can find that through the DRL (Drone Racing League) website, drl.io.

The races will also be included in the Drone Racing League's content on NBC Sports and on Twitter, and we are filming all of this, all the behind-the-scenes, what the teams are going through, what we're going through, what happens at the races... All this great human drama associated with the AI is gonna be put together throughout the season, and then hopefully released as a documentary on one of the great on-demand platforms.

**Chris Benson:** That sounds fantastic. I'm personally very excited. My small role on the team is to do some AI commentary, so I can't wait to be in Orlando on the 8th of October, and looking forward to seeing you there, Keith. Thank you so much for coming on Practical AI and taking us into a deep dive into AlphaPilot. Thanks so much.

**Keith Lynn:** Of course. It was a lot of fun. Thanks, guys.
