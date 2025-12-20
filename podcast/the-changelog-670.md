**Jerod Santo:** Today, we're joined by Keenan Wyrobek, founder and CTO of Zipline, a company I'm very, very interested in. Welcome to the show, Keenan.

**Keenan Wyrobek:** It's a pleasure to be here.

**Jerod Santo:** Pleasure to have you. Autonomous flying machines, all kinds of deliveries happening... I saw Zipline and I thought, "You know what, this one makes sense." There's a lot of people trying to do delivery... Of course, you have autonomous cars upcoming, you have people that are doing tunneling, they're trying to put tunnels in the ground and ship it... Kind of Futurama style, but underground Futurama... And then we have drones, which - I don't think Zipline's the only one playing the drone game, but you guys are, I think, way ahead of the game. Been doing it for a long time. Tell us about the start of this company and where you're coming from.

**Keenan Wyrobek:** Yeah. So we started almost 12 years ago now, and we started in a niche of a niche, of delivering blood to hospitals in Rwanda. That's where we started.

**Jerod Santo:** Why there?

**Keenan Wyrobek:** Yeah... So really, Rwanda earned this for -- we knew we wanted to start in health. At the very beginning of this we started exploring this space based on really just stories from family and friends. My wife's an epidemiologist, and she would tell me these stories about health intervention campaigns that would get stuck on logistics. These would be lik vaccine campaigns where they had the vaccines, they had the doctors, but then the logistics got in the way, and they couldn't be successful. So yeah, that's how we started. Went deep on that... I'm personally not an early adopter, I'm very tech skeptic... So I went deep in Central America and Africa at the time expecting to come away with a thousand reasons why we couldn't possibly make a difference. And the opposite happened. The deeper we went, the more conviction we got that we could make a big difference. And one of those places we were exploring with was Rwanda, and they turned out to be a phenomenal first customer for us, and really a partner figuring this out together.

And blood, of course... Why blood? It's just this rare commodity everywhere. There's never enough of it... It's actually very expensive. We think of it as free, because we donate it, but the cost of the collection, the testing, the transportation is very expensive. Hundreds of dollars a unit; even in places like Rwanda, and way more in places like here. It has a very short shelf life, as little as seven days from the time it's donated, to the time it expires if you don't give it to somebody who needs it. So by centralizing blood in one place and then delivering it when you know what blood type is needed for what patient, at what time, it turns out you can virtually eliminate blood waste, saving a ton of money and a ton of lives for the health system. That's why we started there.

**Adam Stacoviak:** What was the tactical nature of that when you went to Rwanda? Was it discovery first, and then tech later? How did you come to a technical solution? How did you think about it before you built something?

**Keenan Wyrobek:** Yeah. I mean, we had built nothing. I literally called a friend of mine who was good at drawing, and he drew pencil sketches, and made a slide deck of the concept... And we were using that to talk to people. In the early days, it was just talking to the operators in these health systems, that actually run the logistics, run this testing, run these labs... But very quickly, we ended up having meetings with the offices of presidents in these countries, and that was a big sign that we were looking at a problem that was a really big deal for these health systems. And yeah, no technology whatsoever. A year or two before we were doing this, Amazon was like "Hey, drone delivery coming next year." So that drone delivery was an idea that was out there. It wasn't a real thing yet anywhere... And so we kind of thought of ourselves as like "Hey, if we're going to do something, let's find a niche where the value is really high to do this." Yeah, no technology. And then of course, once the interest was there, we got moving fast.

**Jerod Santo:** Was there a point that you and your co-founders looked at each other -- you had saved countless lives with delivering blood around Africa, and thought "Burritos. Burritos are next." Or was that from the start?

**Keenan Wyrobek:** It was both there and not there. In a lot of the countries we operate around the world, we start with health systems. That's how we started in the United States. We started with health deliveries during COVID, and then expanded from there.

In the islands of Southeastern Japan we deliver healthcare supplies and bento boxes. In a lot of places in Africa we operate we started in human health and then expanded into various agricultural use cases, things like genetic diversity for milk cows; huge impact, but super-obscure. We've just been layering on other use cases, and slowly worked our way into things like e-commerce and burritos.

\[00:07:55.23\] What's compelling -- when you think about Zipline, we talk a lot about the impact on health, which is really exciting. We started with the impact of blood. It's a super-visceral, high-impact, but very rare problem. Most of us don't need blood transfusions in our life, but when you need it, you really need it. Then we slowly worked our way in health to preventative care, which is actually where the real cost savings for health systems is. Then we've worked our way into other areas, like animal health.

One of the things that's really magical about this, as we step into new things like auto parts delivery - you know, what limits the mechanic's ability to service cars is usually how fast they can get the parts. The way I think about it is basically for life, in the home or professionally, we're in the mission of getting you what you need, when you need it, and we do it in a way that's not just fast - we skip over the traffic; we're very reliable in that way - but just wildly environmentally friendly. We don't talk a lot about that, and we can get into that if that's interesting. We're talking about a 20x improvement in the overall environmental footprint of the supply chain, and almost every aspect, including things like bird safety. That's something we don't talk about a lot. There's just so many layers to this.

**Adam Stacoviak:** Well, even -- I live here in Texas, and we have a lot of wind farms, because here in Texas we have multiple ways... Probably like Nebraska, Jerod - you've got multiple ways you're getting electricity. I'm not so much a fan of them; they're big and crazy, but I hear people get upset with the bird issue, essentially of that...

**Jerod Santo:** Oh, they kill lots of birds.

**Adam Stacoviak:** And maybe to the environmental aspect of it, that there's still so much of a cost to produce even wind energy that it's almost not worth it when you compare to how you talk about your efficiencies.

**Keenan Wyrobek:** Yeah. I care a lot about birds, so I pay a lot of attention to it... We estimate that when we displace delivery by car, we reduce bird injuries by something like -- somewhere between 10x and 100x lower rate. We study that a lot. There's a lot of aspects to why we do what we do, and why we're excited about scaling what we do into all these different verticals.

**Jerod Santo:** Let's talk about the design of the drone itself, because we mentioned the tactical approach coming out of the need of delivering these things in Rwanda... When I saw your guys' design, I was very surprised by it. There's kind of a more typical quadcopter, larger quadcopter-looking thing; almost like an airplane with blades on it. And then it doesn't actually do the delivery. It delivers the delivery mechanism, which is a smaller kind of a baby-copter that comes down on a zip... That's, I presume, where you guys get the name. It lowers it down to the ground, and then raises it back up again. Where did that design come from?

**Keenan Wyrobek:** Yeah. That's sort of a double drone; a drone inside of a drone design. It came from just an obsession of figuring out what would actually work for our customers. Our first platform, that does long range delivery, has a lot of great attributes, but it requires about two parking spots worth of space to deliver in, because it literally just flies over, drops the package with a little paper parachute on it, and the package floats to the ground. But so many of our customers in the health space and otherwise were like "We want home delivery. We want in metro delivery", where you don't have that kind of space. And at the time, we're kind of like "Well, we don't do that." Eventually, they asked us enough times si we started thinking about "How would you do this?" And we knew from that platform that one of the things that makes people love our service is you don't hear our drones. And that's way harder than it sounds. And we're like "Well, we don't know how to do a super-precision delivery without hearing the drone." And we've seen other ways of doing this. It's usually loud, and noisy, and kicks up a dust storm, and can't deliver very precisely. So this two-part architecture enables a bunch of things. One thing it enables is quiet. It lets the drone itself stay up at 100 meters, at 300 plus feet up in the air, which is one of the many things we do to make that just silent in even suburban places. Then that little mini drone that comes to the ground - we call it the delivery zip. It comes to the ground, it actually delivers the package for you. It has its own little propellers on it, so in windy days and stuff it can still be super-precise and get into a tight space.

\[00:12:14.29\] So really, those two things - helping us be really quiet, and be super-precise; we can get into a really tight space with that little drone that comes to the ground, while the big drone stays up high, that does the heavy lifting. It's literally there to carry the weight, the distance. And yeah, that's why we have the little drone inside of a drone solution.

**Adam Stacoviak:** It reminds me of how you see things happen in space, when you see a little jettison engine pushing it, nudging it... I'm a sci-fi guy, so I see these films all the time, and I'm like --

**Keenan Wyrobek:** Exactly.

**Adam Stacoviak:** It's kind of like little slight adjustments, but you just have -- is it one single large propeller, or is it multiple on the, I guess... What do you call the mini drone? What is that name for that guy?

**Keenan Wyrobek:** Yeah, internally we call it the droid delivery zip. We don't have a great name for it. I like delivery zip, but... Anyway, this little thing that comes to the ground - yeah, it's actually got three little thrusters, very similar in concept to what you're saying. It's got one big thruster in the back, and that thruster's job is to fight big, heavy winds; and so point it at the wind and it just makes sure it doesn't get blown off course. And then it's got a little bow thruster and a stern thruster, if you like boats, to think of it that way, that help it basically stay oriented, and do the side-to-side adjustments, as it's coming down and staying precise. A lot of our team comes from space, and the control theory behind how you stay precise on that little delivery zip as it comes to the ground is very similar to how you think about reaction control thrusters on a spacecraft.

**Jerod Santo:** Because that thing can't spill your coffee. I mean, sure, it can flip a burrito, no problem, but if you're lowering a coffee down - it has to stay oriented very well.

**Keenan Wyrobek:** Oh, absolutely.

**Keenan Wyrobek:** I assume - blood, they probably want that stuff spinning, or something, but there are certain fragile items that can't go... So on the software side then --

**Adam Stacoviak:** "Certain fragile items..." \[laughs\]

**Jerod Santo:** Like coffee.

**Adam Stacoviak:** Coffee's fragile.

**Jerod Santo:** It is. On the software side, are those two divergent operating systems then? Because it seems like they have perhaps different concerns, but they probably have a lot of overlap as well. How did you tackle the software side of these two different drones?

**Keenan Wyrobek:** Oh yeah, they're very different control problems. Yeah, the drone that's up high - you're right, it has a wing, so to fly a fixed wing on the wing really efficiently it can hover in place for takeoff/landing, and while it's doing deliveries. Yeah, it's a long story, the controls approach, and really it comes down to just massive amounts of testing. Our high volume test sites have done hundreds of thousands of deliveries. We chase weather with a mobile test rig, so we go chasing like hail, and icing conditions, and these kinds of things. A ton of simulation... Literally, half of all the engineering we do at Zipline is test. Just full on half of it. That's how we can do this, is basically building the test systems, the various software platforms for simulation and things like that, the actual test scenarios, all the ground testing we do... We have an entire building down the street from where I am, that all it is is just hundreds of ground test systems to simulate what we do in the air, on the ground. Yeah, the answer to your question is a long one, but it's literally half of what we do is all the testing it takes to actually develop the control systems for these things to know that they're going to be both capable, but also safe.

**Adam Stacoviak:** I also think about updating the software... I mean, you mentioned the test facilities, so I imagine you do a lot of iteration there; you're constantly deploying potentially over the air updates... I have no idea how you accomplish that mission, but... Divergent operating systems, and also a truly distributed update platform. How do you get new to the individualized? Is it an operating system delivery? Is it an individualized delivery? Can you talk about that at all?

**Keenan Wyrobek:** \[00:15:55.01\] Yeah, absolutely. When we think about software and software deployment, there's two worlds for us. One we call flight software, and then cloud software. Flight software is all the pieces, a few parts of the cloud, but mostly things on the actual aircraft that we consider flight-critical. That software release process takes us about six weeks. So every six weeks we release software to that system. And just in those six weeks we do tens of thousands of flight tests, we do a bunch of hardware in the loop testing... Think of it as like the matrix, where you take the electronics of the aircraft and basically plug it into a simulation, literally, and fool it. It thinks it's flying over in Dallas somewhere, but it's actually over in our basement, plugged into the simulation.

**Adam Stacoviak:** That's cool.

**Keenan Wyrobek:** Plus, of course, software in the loop simulation, where you're doing millions of flight tests. And yeah, that whole journey takes us about six weeks to get to the point where we're like "Yup, this new software release is good to go." Then we release it, and then we have an over the air update system that updates all the processes, the software on the aircraft, and deploys. People often ask, "Do we do that in the air or not?" It's like ""No, no, no. When our aircrafts are docked, they update themselves." They check themselves, they're like "Okay, good. Software's good to go", and then they'll fly again.

**Adam Stacoviak:** How many of these problems are novel to you? I know that the defense systems that we have here in the US probably have these problems and maybe have solved a lot of this, but maybe you don't have access to the DOD's tech platform, or maybe lack thereof... How much of this is invented here and how much of this is maybe a partner or vendor that you bring in to support over the air updates, for example?

**Keenan Wyrobek:** Way more of this is done in-house than I would have ever thought we would have to do. Actually, when we started Zipline, I was like "Great, I'm going to go find somebody who has a drone, buy it from them, modify it a little bit for deliveries and start serving our first customer." And the best quote I got back then from the companies making drones for defense was a $200,000 drone with a 200-flight warranty if I did not fly it in the rain. And to be clear, in most of these countries it rains pretty much every day. So that wasn't going to work.

Yeah, we do a lot in-house... And a lot of that's because we fly in conditions that no one else flies in. Stormy weather, near the ground, or over mountains, stuff like that - no one flies in that. So we've had to learn a lot of this stuff ourselves, and build our own datasets and experience and simulation approaches to actually develop these things. But then the other side of what makes us very unique is just the scale. We operate at a very large scale. Over the air updates is a good example, where we need that to be very, very easy and robust, in a way where if you're operating a smaller scale, a human can do a lot of double checking of that, and things like that, and it doesn't matter too much. Even our over-the-air update system we've built ourselves.

**Jerod Santo:** Do you know how many drones are in your fleet roughly, worldwide, to give us an idea of the scale you're currently at?

**Keenan Wyrobek:** Yes, it's a couple of hundred.

**Jerod Santo:** Okay. And you've just started in the United States recently. 2021, I think, was the first non-medical flights... This is what I've been told by Ian behind the scenes. And now you are in Dallas, and rolling out -- I just saw a video from your CEO and co-founder, that there's a whole bunch of drones getting built right now to just go crazy. But 200 worldwide. And how many of those are over there in Rwanda, doing their thing?

**Keenan Wyrobek:** I think it's close to 400 or so. It's about 300 outside of our first generation, and well over 100, but I don't think 200 yet, of our precision delivery, the drone-in-the-drone system.

**Jerod Santo:** Gotcha. So how much of your software is orchestration? I assume that's the cloud side that you referenced, the control of the cloud.

**Keenan Wyrobek:** Yeah.

**Jerod Santo:** I guess maybe tell us more about the cloud side and what all that entails.

**Keenan Wyrobek:** \[00:19:48.29\] Oh, there's a lot to it. There's obviously the pieces for people to place their orders... Every partner we have, we have basically systems to integrate with our partner's data systems. Then we have our basically dispatch... I literally think of this as like there's cloud autonomy, or fleet level autonomy, and then aircraft level autonomy. At the fleet level, you've got to decide which aircraft is going to go on which mission, at which time, and some of that is based on which aircraft is capable of that mission. Some of that is based on making sure if we told someone "Hey, we'll deliver to you in this 60-second window", that we actually dispatch the right aircraft at the right time, get the order ready at the right time so that we'll hit that window.

And some of it is stuff that -- other cloud stuff for us is weather forecasting. We do our own weather forecasting. We can talk about that, it's a really fun problem. Also, basically, we have to design our own highways. If you think about autonomous vehicles, you take for granted that if you want an autonomous vehicle to drive from here to over the mountains, if you use the road network that's already been designed, you'll get there. There's no such thing for drones, and so we have to do a lot of computation in the cloud to basically give enough prior to our aircraft, so that when they're flying, they have the equivalent of a highway system. It's not quite that simple... So that when they're doing an avoidance maneuver, for example, and planning that live, that they're doing that with enough prior that they're not going to get off track and not be able to make their delivery, if that makes sense.

**Jerod Santo:** And they generally fly at 300 meters, is that what you said?

**Keenan Wyrobek:** They fly at about 100 meters, so 300 feet.

**Jerod Santo:** 100 meters, 300 feet. Thank you. What kind of stuff do you have to avoid? Obviously, birds, but at that -- I mean, cell towers, airstrips, perhaps? What's the kind of stuff that has to be avoided at that height?

**Keenan Wyrobek:** Yeah, for sure. So yeah, you can have very tall cranes, cell towers. You can have inaccurate maps, so you may not be at the height you think you are, so there's a hill or a mountain there... Yeah, definitely other aircraft. That's a big part of what we avoid. There's not a ton of passenger aircraft at that altitude, but there are some, and it's really important that we avoid them as well. Those are the kinds of things we avoid.

**Break**: \[00:21:57.20\]

**Jerod Santo:** How much does regulation play into this rollout? I assume every area probably has different rules about how you can go about flying your drones at 300 feet...

**Keenan Wyrobek:** Yeah, I wish everybody had rules.

**Jerod Santo:** Really? \[laughs\] Usually, people say they want less rules when they're trying to scale up.

**Keenan Wyrobek:** Yeah... I mean, when you're a startup and you go to a regulator and you're like "Cool, I would like to do this thing", and they're like "Well, that's not allowed", and then basically from there it's like all by exception. And so you have to kind of work it out, the rules by which you operate at the detail...

**Jerod Santo:** I see.

**Keenan Wyrobek:** And as a startup, that's a slow process, and startups need to go fast to survive... And yeah, that's why I said I wish there was some precedent. In some ways, obviously, there's some luxury in getting to help create the precedent... But yeah, it's a lot of working with the regulators. Some things about airspaces between countries are very similar, harmonized, but other things are very different. And so yeah, things we have to do here in the US have been very different than Rwanda.

Yeah, it's a big part of what we do, but it's also... We've gone from that being a big challenge maybe 10 years ago, to now it's something that we've gotten quite good at, and quite good at working with these partners and these regulators as partners, and working with them proactively enough that we can generally work out what needs to be worked out before we need it to serve a customer. But it takes a lot of effort, I will say that.

**Jerod Santo:** Yeah, I was thinking of the luxury of not having rules that are already defined, because those can slow you down. But actually, not having rules and not having a clear path towards engagement - that means you have to trailblaze. And to trailblaze, you've got to get out a machete and hack away a bunch of stuff, and that can be even slower and more laborious than if somebody else had already cleared the path for you. So that makes sense.

**Keenan Wyrobek:** Yeah. There's a great story -- here in the United States, starting about six years ago, we started working on the sensor system on the aircraft that can sense and avoid other aircraft. This is a system that uses machine learning, and machine learning is a class of software that the regulators have no experience with, literally. And it took us about five years of working with them to go from the beginning of this to them approving us to operate. And that was the first time they've ever approved AI/ML-based software for safety in the airspace. And so it was near daily conversations with their teams, figuring that out over that five-year journey... And there's some people at the FAA and at Zipline who I respect a ton for working through the minutiae they had to work through to figure out how what would the requirements be, and how would you validate the system against those requirements. And then actually doing all that work and all that analysis to bring it back to the FAA and be like "Okay, we did what we agreed to. Let's go through this together." And yeah, that was a five-year journey there, and it was a hard won battle. When I say battle, I don't mean like Zipline versus the FAA. It was very -- we were very much in it together, because they definitely wanted to figure it out, too. Yeah, it was something else.

**Adam Stacoviak:** \[00:27:50.25\] This is an example where the word "regulation" - which you haven't quite said yet - gets really weird. And I don't want to go into politics, but it seems to be the word that gets thrown around. Regulation, less regulation, more regulation... But as a developer, I really lean back on what you said there was not a presence of, which was specifications, which is really what regulation is. It's an adherence to a specification that everyone agrees on, for obvious reasons. But you're in this kind of unique high stakes scenario where maybe regulation could be less pressured, so to speak, and in your case, you've got to be a high stakes scenario where if there's a crash, or if there's a break a leg situation, which - I'm not sure you like the word crash. I wouldn't like the word crash if I was in your business, personally, but I just think about the need for that. Can you speak to how that's played as an ally versus a foe?

**Keenan Wyrobek:** Yeah... I think there's a couple of layers for how we think about this. The first one is because everywhere we've been, everywhere we've gone, there hasn't been some, like you said, specification to follow, we've taken the mantra that our first job is to convince ourselves. And not in like a handwavy way. It's like "No, no. This is over our house, over our kids. Are we convinced that we've taken a rigorous approach before we suggest that approach to a regulator?" And that's gone a long way. That mindset is attracting some of the best talent, as figuring some of this stuff out is really complicated. It's trying to track the talent we need to actually figure this out, and then it's also forced us to do the work -- to convince ourselves, the analysis, all the testing, all that data review to convince ourself is also what the regulators want to see. And so if we've done that to ourselves and we've really been skeptical internally first, it helps a ton when you're then having these in-depth conversations with these folks on the regulatory side. They have the completely thankless job of "Okay, we've got to figure out the specification for this new thing that no one's done before." So if they underdo it and someone gets hurt, they look really bad. And of course, if they overdo the regulation, then everybody in the industry complains of "Oh, they wrote down these regulations that are completely impractical." So they're stuck between a rock and a hard place.

And so by doing that legwork upfront and internally proving to ourselves something that we really believe in first, and then bringing it to them - that's been core from our perspective. And then the only other piece of it that I would say is it's all relationships. These are all people on the regulatory side, they've got a job to do, we've got a job to do, and so we spend a lot of time basically working together to make sure we understand what they're trying to do, they spend a lot of time working to understand what we're trying to do... Be really open-minded, make sure we're hearing each other out, like in any relationship, and try to make progress every day, even if it's not as fast as you might like.

**Adam Stacoviak:** How would you frame -- this isn't an exact one-to-one when I say this, but how would you frame test coverage in terms of a coverage level, confidence level? When you ship something and it's in a regulation standpoint, or you have a specification you've got to adhere to - is there like 95%, 98%? Like, what do you strive towards when it comes to adherence to a spec, or defining the spec? What is confidence to you and your team?

**Keenan Wyrobek:** Oh, great question. So there's a model for thinking about this that was called the Swiss Cheese Model. I did not come up with that name, although I'm known for naming things with really dumb names... It was actually a NASA name, the Swiss Cheese Model. Conceptually, basically what it is - every approach to testing is like one slice of your Swiss cheese. It's going to have good coverage of some aspects, but if you look at it, it's going to have holes, for every type of testing you do. You obviously have many different layers of testing that you do, and the intent is if you stack up those layers of Swiss cheese and look at them through the stack, then you're not going to see through holes, if you're doing it well.

Examples of our layers of Swiss cheese - you're going to be familiar with things like unit testing, and static testing, and things like that, that are commonly done in software... Software in the loop testing - so this is where you have full on physics level simulation running of your full system, even your full fleet, and you're able to then write test scenarios on top of that.

\[00:32:10.01\] We talked a little bit about the hardware in the loop testing, where you take the hardware itself, the brain of the aircraft, plug it into a simulator and fool it into thinking it's in the real world... That's great for testing the actual hardware level components. If you short out a certain bus, does the actual full software stack detect that short and do the right thing? And then a lot of things in flight tests. We do all kinds of different flight tests. We do on the order of 10,000 plus flights a week at this point across our flight testing, and almost every single one of those flights is pushing the system to an extreme in some way. We actually have this fully automated software system we call chaos monkey, where basically what it's doing as we're dispatching all of these flights is it is -- chaos monkey is literally throwing chaos into the system as those missions are happening, that either will cause the airplane to do something extraordinarily dynamic against the physics limits of the aircraft, or turning off subsystems of the software, killing various rotors, things like that... And making sure that the system, despite any given flight having dozens of weird things happen - nominal events, as we call them - in that flight, does the whole system handle it gracefully and safely?

And this is just on the software side. When we think about hardware, very similar things - many layers of testing of the hardware, to make sure we understand deeply its performance and its reliability. And there are entire teams of folks who look at all that testing, and basically are constantly questioning "Okay, in this release we have a new capability we're releasing. Did we add enough testing to all the different layers of the Swiss cheese, such that that's going to be responsible to ship?" And there are times we think we're ready and we do that review of everything we did, and we're like "Nope, this isn't ready. We're pulling this from this release. It's got more work to do", just on the testing side, to get that confidence.

**Adam Stacoviak:** These releases, are they -- share as much as you like. You seem to be very sharing, and I like this. I think about releases and I think about "Well, if I released my test level from idea to new capability", as you said, into production, there's probably a several layers that are in that middle ground, which is like a true release, but not in a real world scenario, so to speak... How do you plan releases? How do you graduate releases from tests, delivery, observability, test again, potentially... You said you do 10,000 flights a week. Seven days in a week - that's 1400 flights a day, roughly... Gosh, that's a lot of flights. But how do you release and do that in a way that's like "Okay, it's in production, but it's not real production." I'm assuming these things, so... Walk me through that kind of idea.

**Keenan Wyrobek:** Okay. So depending on the scale of a given feature... To talk about one of the biggest features we've ever released - we just released it recently. So we talked about the drone that flies up high, it has a wing, and can hover. Until about a month ago, in our releases and our operations, we were only hovering. We were not flying on that wing. So we were flying it more like a traditional quadcopter. It's a pentacopter, but we're flying it like a traditional quadcopter, just hover, which means the range is very limited. But while we were working on actually being able to fly on the wing - and the software and systems to transition from hover onto fixed wing, as it's referred to in industry, and then back into hover, including when anything could be going wrong, like any of those rotors could not be working and that kind of thing... There's a lot to that, and we've been working on those features, at some level of development and testing, for two years to enable this. So two or three months before, that release cuts. So when I talk about releasing every six weeks, we cut basically at the beginning of that six weeks.

\[00:35:55.22\] We will look at all the new features that folks think are ready for a release, and we'll look at like "How tested are they? How proven are they? How good is the test coverage?" and all these layers of Swiss cheese. And then we'll decide "Yup, this feature is ready. This feature is ready. That feature is not ready. It's not going to go in this release", and we will cut a release. And then once we cut a release, there's a bit of a stabilization that takes us about a week, to make sure that release is really stable, and then it goes into this very structured release campaign that takes about five weeks on average, which - it depends on the release, but something like 50,000 flights, a whole bunch of hardware in the loop tests and software loop tests and all these other tests we will do again as well, as part of that process. And then the people -- all the teams are basically paying a ton of attention to all the data coming out of all that testing. And over the years, we've developed all kinds of tooling and dashboards that help all the teams look at that data, and look for anything weird, anything that might we consider a near miss. Obviously, the real miss is if we have a parachute landing during that testing, we're going to know exactly what goes on there. But we're looking for anything that's at all weird. We call it a near miss. And studying it, and seeing if it needs to be addressed, or if it's fine.

You can kind of think of that flight test as like the last leg. If we find something in flight test, that's a red flag to us. Like "Hey, the other layers of Swiss cheese aren't good enough." So if we find something in the flight test during that campaign, we're immediately investing in those other levels of Swiss cheese to make them better, and improve their coverage. And then only once the data says we've got a system that meets or exceeds the overall target level of safety of our last release, do we then say "This is ready to actually ship."

**Adam Stacoviak:** Do you have the idea of a black box in your thing? I mean, I know that airplanes do, so I imagine you've got some version of a black box, where if it does - I'm sorry - crash, that you've got some sort of thing in there... And then I also think about observability, because you've got all this testing happening... And I think about like traditional software in the cloud - it's kind of easy to orchestrate observability. But over the years I'm sure you've got some version of WiFi or access to the thing digitally, via a network of sorts, telemetry going... Is there a black box, and how does observability happen in those scenarios?

**Keenan Wyrobek:** Yeah, absolutely. So we log a ton of data on the vehicles, at all times. And that's of course done in all this testing, but also in production. And the philosophy is that anything that could possibly go wrong, or be a near miss, you've got to study. And you mentioned crashes - I should mention we have a parachute system for the aircraft, that's kind of the backup to the redundancy. So there's redundancy in the aircraft, so it can nominally fly when things don't work, but the backup to the backup is a parachute. So it'll float to the ground like a -- it's actually made for us by a skydiving parachute company. So it's like a skydiver coming to the ground.

So yeah, if we ever have a parachute landing in tests, or operations, or anything that's even close to a weird data, we go study that, to basically deeply, deeply understand it, because quite often it's a new insight. We're so far in the long tail of the problem that many of the problems we see now, they happen one in hundreds of thousands of flights. And so you basically -- like, if we didn't log it, think of it as like "Oh no, now we have to wait for this to happen again, in hundreds of thousands of flights", which is a total shame.

**Adam Stacoviak:** Total shame. It should happen more often... \[laughs\]

**Jerod Santo:** That's right.

**Keenan Wyrobek:** Exactly. No, that's not the shame. The shame is not logging it. So we log these things. Now, in addition to the logging, to enable us to like go through those logs and understand everything that happened -- we use those logs not just for like root causing a specific problem, we use those logs to understand things in aggregate. So we have tools where you can mine those logs longitudinally, across thousands and thousands of flights, to deeply understand the statistics of a certain thing. That's really important as well. And then of course, during live operations - yeah, the aircraft are reporting over radios, live, what's going on. We have a remote operation center that's monitoring all of that... And so during live operations we have certain things that basically -- our pilots, I think of them more like an air traffic controller, where they can be like "Okay, you go back and dock", and that kind of thing, and understand what's going on at a very sort of fleet level.

**Jerod Santo:** \[00:40:16.20\] Have you ever logged a tornado?

**Keenan Wyrobek:** Hah, we've definitely -- yeah. So the closest thing we've logged -- we've logged some very small... I don't think you'd call them a tornado. They're basically -- the things are too small to be considered tornadoes. At some of our testing, we're actually chasing some tornadoes right now, as we look for hail and more extreme weather events with our mobile test rigs.

The craziest thing we have a lot of log data on is what's called a microburst. So it's the beginning of a thunderhead formation, about first 90 seconds of a thunderhead. You have the vertical winds at like 50, 60, 70 miles an hour vertically, in the middle of the microburst; on the sides of the microburst, the same thing goes down. Those are some of the most extreme weather events, that are hard for the drones to handle.

**Jerod Santo:** What do they do in those circumstances? Do they turn around and leave, or do they land immediately, or what's their protocol?

**Keenan Wyrobek:** So it really depends how big it is. this is actually one of the first things we developed AI to forecast. It's because if this is really big, if it's kilometers across, and really strong, if we're in it we're going to end up parachute landing. And we know this because in a lot of our operations around the world when we're doing emergency deliveries for a patient on the table, delivering blood situations, we will take -- we will basically ignore our weather limits and fly in very extreme weather. So we go through these things. But then for non-emergency deliveries, we rely on our forecasting to keep us out of this stuff, in those really extreme events. If they're small enough - yeah, the control system will fight its way through it. But of course, the aircraft has its physics limits. It can only climb so fast, it can only do so much. And so in certain situations it can't overcome them, and yeah, that's when the parachute kicks in.

**Jerod Santo:** I assume there's some sort of wind limit that there's just no chance for anything to fly through successfully. It's gotta be around a hundred miles per hour or so, maybe a little bit less... I don't know, but there's certain storms where it's just like, you'd better just parachute out, because there's no there-there; there's no success as a possibility, regardless of the size of this thing. 30 seconds at 150 miles per hour is knocking down massive trees here... And so I'm assuming it's taken a drone off its course quite a bit.

**Keenan Wyrobek:** Oh, yeah. There's a certain mountain pass in Rwanda I'm very familiar with, because we have to fly through this mountain pass to serve about a third of the country there... And in this mountain pass the winds get whipping. The winds can be higher than we fly. We fly that aircraft at 60-70 miles an hour, and the winds get up to a hundred miles an hour... And you'll see our drones flying backwards as it tries to fight through it, developing the control system and logic to... Because most of those winds are gusty, so if you can stay in the air long enough and then punch through it at the right moment, you can get to mountain pass. And yeah, it was a big breakthrough when we figured out how to make that logic robust. And you see the drone is flying backwards for a while, flying backwards for a while, flying backwards for a while, and then flying through at the right second; it's estimating the winds dying down online, and then it punches through the mountain pass and gets through.

**Jerod Santo:** Do you have any video feeds? Because you're going to come up with some great drama in those moments if you could capture a video, just when it's really gnarly, you know?

**Keenan Wyrobek:** I've got a great video of the logs of that. It's not \[unintelligible 00:43:28.29\] You can see the position on the maps, going backwards and things...

**Jerod Santo:** Yeah, I don't think Hollywood's going to call you for the log file.

**Keenan Wyrobek:** No... \[laughs\]

**Jerod Santo:** Let's talk more about that wing. So did you guys just put the wing on there because you knew eventually you were going to use it, and so you just had it in manufacturing for a long time, but couldn't use it?

**Keenan Wyrobek:** \[00:43:47.05\] Yeah, absolutely. We knew we needed the range. You get about 10x more range flying on a wing, for the same energy, than hovering. And our customers need that range. So many of our use cases need that range. And so yeah, we always knew we needed the range of flying on a wing, and we decided to launch without having developed that system yet... Really just because that's how we're wired. We want to get out into the real world fast, because we just know - when you're in the real world, serving customers, you're going to learn a lot of things you just can't learn any other way... And so we want to get out there earlier. Yeah, and that hardware was there, and the teams that spent all this time developing that hardware were like "We want to see a fly on the wing..." And of course, we didn't have the test sites for a long time as we've been developing that capability. It is one of those things where you kind of develop it, and then wait, and then once you can get -- yeah...

One of the things... You're talking about regulations and safety - that is also part of our ethos. And a difficult thing in a startup is we hire people who like inherent urgency, because if you set a deadline on safety, you can end up in a really bad situation. If you're like "Cool, we must ship this on this date." Some of the stories you hear about, of 80 companies that have hurt people in the past - they take that mindset, and then they'll fool themselves into thinking they're ready, as opposed to saying "No, no, no. We set a safety bar, and we decide how we're going to measure ourselves against that safety bar, and that's when we ship." It means your dates aren't quite as predictable, but you still need to move fast, and so you need people with a very inherent sense of urgency to work through those problems and get there, as opposed to a more traditional "We have a date and we're going for it" management approach.

**Jerod Santo:** So what was the range prior to the wing, of a typical drone? ...assume good conditions - how far do they go, and how long a time, and then... You said 10x, so I can do the math, but... That's a huge win.

**Keenan Wyrobek:** Yeah. Great. Yeah, so we're doing about a mile and a half hovering, and we'll be able to do -- right now we're at about five miles on the wing, and we'll be able to take that to about 10 miles over time... Again, as we continue to validate and sort of work our way up to it, once we feel confident in it.

**Jerod Santo:** And I assume each drone launches from a location, and then has to return to the same location, at least until you get multiple hubs in a city, or something.

**Keenan Wyrobek:** Yeah. That's actually a software feature that's coming in and released next year, is that ability to go from one doc, go make a delivery, and then dock somewhere else. But yeah, you're exactly right. We don't have the density of docking locations yet to need that feature.

**Jerod Santo:** Right. So that cuts your range in half, because you have to get out there, and you've got to get back.

**Keenan Wyrobek:** Exactly.

**Jerod Santo:** Okay. So when you say five miles - if I live five miles from your facility, do I get deliveries, or I've gotta be two and a half miles?

**Keenan Wyrobek:** No, you can live five miles.

**Jerod Santo:** Gotcha.

**Keenan Wyrobek:** Yeah. So once we have that... If we can dock at a different location, nearby the delivery site - yeah, we can do more than 10 miles. That's actually an interesting thing... We've learned over the years that it's way better when you're working with these partners to talk about a conservative range, than like where you're going to go in the future... Because it's so complicated to talk about that when you get into the details of your terrain, and your physics, and your local weather, and all that stuff. It's like "No, no, no. We're just talking about this little circle." And then they're thrilled that we can do more than that.

**Jerod Santo:** Right. I was just flying my drone the other day - I have a little DJI Flip, and I was flying it... Too far away, slightly too far away, to where it was telling me to come back... And I'm like "Yeah, I'm coming back." So I started flying it back, and then the wind picks up, going against it on the way back... And I'm sitting there, thinking "Oh man, it's just not going to make it back." Because the battery percentage continues to go down, and it's still 1200 meters away, and... It was very dramatic. It did make it back to the house, thankfully, but just barely. So I've got to imagine that's a stressful -- you know, we're talking about range anxiety with all of our new EVs. I'm sure you probably have extreme forms of range anxiety with your -- because these are expensive machines, right? What's an all-in cost on one, if you can share that? ...to build and manufacture. What are we talking about?

**Keenan Wyrobek:** I can't share that specifically, but it's lower than you would think. And this kind of -- this is part of the reasons we develop our own drones. Both for this range problem you're talking about, and for the cost. But for the range - take our fixed wing platforms. This is what we do with these very long range deliveries. There's no hover capability, it just flies like a plane... We advertise, basically, a 50-mile service radius, but if it wasn't windy and there wasn't a mountain in the way, it could easily do a hundred mile service radius. So we literally have twice as much energy as you would need nominally, so that we can make it back on those windy days reliably. And that's just really important, because once you start serving a hospital, delivering blood, you can't be like "Oh, it's too windy today. Sorry, guys, we don't serve you. We only reach the people closer."

**Jerod Santo:** Totally.

**Keenan Wyrobek:** \[00:48:22.18\] It's like, no, we turn you on, and we want to serve you all the time.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Does anybody get underwhelmed by the range, when you say five miles? I'm not throwing stones here, but I'm just saying... I know you're innovating, but does anyone ever go like "That kind of seems small"?

**Keenan Wyrobek:** It all just depends on the use case. The 10 miles was developed going really deep with our health partners, and exactly on all the use cases that they want to use the drones in metro areas. And of course, when you're going out of metro areas, that's where the 50-mile range drone comes in handy. And all of this has been developed just basically technology second, customer first. \[unintelligible 00:49:02.29\] with the customers. For this precision delivery platform, we had contracts with partners while we were still in what we would call the conceptual phase of that project. Nothing was locked in yet. And having those contracts with the partners gets them to give you -- that gets them invested enough in us to give us the feedback and the data to make sure that we make something that's going to be useful for them. And so yeah, some people get overwhelmed, but we just have that confidence because we've had so much time in these use cases, analyzing them, going deep with our partners to just have confidence we're making a platform that'll serve their use cases well.

**Break**: \[00:49:42.15\]

**Jerod Santo:** Could you walk us through the user experience that either exists now, or will be existing as you guys roll out domestically in the United States? ...from the end user perspective, but then also as we go, maybe explain the software systems that have to support that... Because I'm fascinated where software meets the real world and there are all sorts of weird situations that you have to account for. I know there's an app. I assume it's similar to a DoorDash kind of a thing, where I'm going to order - let's just say I'm going to get a Chipotle burrito, because I already cracked that earlier... And I'm a fan. Not a sponsor, but I'm a fan of the old Chipotle burrito. And I know it's under eight pounds, so it's going to fit into my zip... Unless I get the double. I don't know, can you get a 10-pound burrito from Chipotle? Maybe not yet. Someday. Someday we can dream.

I open up the Zipline app, I assume... Or do I open up the Chipotle app? Maybe that's where we start. Do I start in the Chipotle app? Do I start in the Zipline app? Where do I start?

**Keenan Wyrobek:** Yeah. So soon you'll be able to start in the Chipotle app. Today you start in the Zipline app. And depending on where you live -- if you live in the best place in Dallas-Fort Worth area, you open that app and you're going to see a bunch of different store fronts. You'll see Walmart, very soon Walmart Pharmacy, you'll see Blue Bell Ice Cream, you'll see Chipotle...

**Adam Stacoviak:** There you go, Adam.

**Keenan Wyrobek:** ...you'll see just a whole bunch of great restaurants. Buffalo Wild Wings, and others. And yeah, you pick what you want... That part of the experience feels a lot like DoorDash, or someone driving the thing to you... Then they'll start prepping it, our partners will prep the food or prep the order... And then we put it in this thing that we call a zipping point, which is this fun little kiosk you put the package into. And similar to how we deliver, the drone stays up high and the delivery zip comes down 100 meters, grabs the package out of the kiosk, and brings it to you. And this is where things are very different than delivering by car. We actually have to warn people "Hey, your food may be too hot to eat."

**Jerod Santo:** Really?

**Keenan Wyrobek:** So we deliver so fast that we've had people be like "Oh, yeah, I just assumed my hot wings would be soggy", and they just stuck them in their mouth and burnt their mouth... Because they're so used to how long it takes for deliveries to happen the old fashioned way, that when it takes only a few minutes, and it's well insulated and controlled the way we do it, the food's actually fresh, and sometimes very hot still.

**Jerod Santo:** Yeah. That's a great problem to have. So show me the Chipotle side. From your integrators, your restaurants... And I'm just picking on them because I know they're a partner of yours. Obviously, there's going to be a bunch of them. But imagine that I do order a Chipotle burrito out of zip line. I assume an API call kicks off over to the Chipotle, and makes the order, and then they have to somehow tell the zip when it's ready... How do they do that?

**Keenan Wyrobek:** Yeah, so with Chipotle they use their software system the way they use it for any order. If you're ordering over the counter, or you place an order to the Chipotle app, and it shows up on their -- they call it their make line. That's the people that actually put the order together. So they're going to make this like any other food they're making; our system gets hit over the API, so we know when they started that, and we know when they're done... And then when they're done, we'll put it in that kiosk, dispatch the zip, the drone over to come get it, it'll come pick it up... That's usually about a minute or two after it's ready. And then we deliver it anywhere from one to five minutes later, depending how far away you are.

**Jerod Santo:** Right.

**Keenan Wyrobek:** We deliver it in your in your yard. And yeah, we have a fun little app that shows you the drone coming, and it gives you that really super-precise ETA.

**Jerod Santo:** I think one of the things I didn't appreciate about this kind of delivery that's really cool is just how human-centered it is... As opposed to whenever that driver is going to show up, and sometimes it's like "Wait, why did they take that crazy route? My kids are hungry." We tell you "No, no. Within a minute \[unintelligible 00:57:38.12\] actually show up and you can walk outside and pick it up. It's just there."

**Jerod Santo:** Now, can you hold your hand out and it'll put it in your hand?

**Keenan Wyrobek:** \[laughs\] I don't recommend it.

**Jerod Santo:** That can be a cool feature there, Keenan, come on. Put your hand out, and we'll put -- you have a third little... So you have the big zip, and the little zip, and then like a hand that comes down; it just drops a little bit lower, and...

**Adam Stacoviak:** Keenan's like "Nah..."

**Jerod Santo:** \[laughs\]

**Keenan Wyrobek:** \[00:58:06.26\] I literally tested -- the way we talk about this is we don't want people to do stuff like that, but we test in case people do that kind of thing. So it's delivered into my arms, and I love it...

**Jerod Santo:** It felt good, didn't it? It felt special.

**Adam Stacoviak:** Do you pause the delivery then, when you detect anomalies you don't want to be present in? I assume that's probably a phrase or terminology...

**Jerod Santo:** Like a child standing there, underneath your target? Yeah.

**Keenan Wyrobek:** Yeah, it's actually kind of funny... So we do a little bit of avoidance. So if we're coming down and we see the person standing right there, we'll scoot over and deliver next to them.

**Adam Stacoviak:** They keep scooting closer, you keep scooting further...

**Keenan Wyrobek:** Exactly. If you do that -- you can make a really fun game for kids, and we don't want to be a fun game. You know what I mean? We don't want to make this to be a game of "Oh, it turns out if you chase this thing, it'll become a game", and then everybody wants to chase these things, and we can't deliver... And so basically, what we've found to work really well is just slow down. One of the things we like about that little delivery zip is it's very benign. If someone touches it or something, it's not a safety concern. And so yeah, we just slow down and keep going, and make that delivery, and get out of there. And basically, the way I think to talk about it is like "We be boring", so that we're not creating a fun game for every kid. As a parent of young kids, I've brought them to the test site too, and I know exactly what -- if you did that avoidance with my three-year-old, she would have so much fun, and we would never make deliveries.

**Jerod Santo:** Right. Well, it might be a consideration for down the road, of getting even more human-centric; it's like, allow the orderer to set a mode. "Do I want to have fun with it? Do I just want my food?" I know you guys want to save energy and battery and all that, but... You're already pretty happy to have your food delivered from the sky. I can imagine that's a moment already. But to have a little bit of a personality with the thing - it might take it over the top, to where it's the only way we're ever going to get food, is to just give us... That's why I think the handoff would be actually amazing, but... Yeah, too dangerous perhaps to do that today.

**Adam Stacoviak:** For sure.

**Jerod Santo:** It's a tomorrow thing.

**Keenan Wyrobek:** I love that idea. Your head is exactly where my head is. To me it's not a question of if, it's a question of when. So I look forward to it.

**Adam Stacoviak:** Well, someone will always mess around too in those scenarios, but... Did you mention at all when, time of day, you can't deliver? Is there like danger zones where you can't deliver in the evening, or after dusk? Or is there light concerns? Do you have lights on these things?

**Keenan Wyrobek:** Yeah, so we can deliver anytime.

**Adam Stacoviak:** Anytime. So 24/7.

**Keenan Wyrobek:** Yup. Yup.

**Adam Stacoviak:** Wow. Okay.

**Keenan Wyrobek:** Right now that's just limited by our partner hours. And most of the places we operate in the world, we deliver 24/7 with the health systems. And it's always interesting to see - you'll work with a restaurant partner, and all of a sudden they'll realize just how much volume we're adding to their normal business, and they're kind of like "Oh, wait a minute... If we operate with you all, and you can go 24/7... You're already operating 24/7 for other people, so we could be open at night..." There's a huge part of our economy that works at night. Night shift workers, and things like that... We know that because all the health people we work with, they work 24 hours a day... But obviously, lots of manufacturing operates 24 hours a day, and a lot of our partners are seeing it like "Wow", there's a whole part of commerce they can address, and a big part of the demand they can address by operating more hours. And obviously, partnering with us, we can do that in a way that's people really like. Yeah, it's really cool. You'll get whatever you need, 24 hours a day. As a parent -- just simple things, like kid was spiking with a fever at night, and you've ran out of medication to bring that fever down... The only thing worse than having a kid with a fever is taking your kid to a 24-hour pharmacy at night to go grab that stuff you don't have.

**Adam Stacoviak:** \[01:01:56.01\] Yeah. Croup is a big deal for parents. I know that we've battled several late night ER visits for croup, and generally - I don't want to go into the medical scenario here, but basically, you have to be seen by some sort of medical professional to get a special medicine that is for croup, that sort of helps your vocal cords and things reduce, or whatever. And it's kind of a pain in the butt, because you kind of know, as a parent -- you're like "You know what, I'm Dr. Mom or I'm Dr. Dad. I've been down this road before with my child. I just need that particular prescription." So if you had a relationship where you could do telehealth, which is super-popular, we would not have to leave the house at all. If that were a scenario, we can make a phone call in our telehealth, and maybe 10 or 15 minutes later we've got a delivery from zip that says "Hey, here's your croup medicine." You didn't have to leave the house, you can do it efficiently... You didn't have to be on the road...

You talk about the efficiencies and environmental effects... Like, we didn't have to drive, we didn't have to lose sleep and maybe ruin our day the next day more; so we got the medicine -- and there's so many unintended consequences in that scenario that just make it so interesting to think about how you can reorient the world around this being a thing.

**Keenan Wyrobek:** Oh, totally. I mean, Adam, I'm so excited about this. And we have partnerships now with about a dozen regional US health systems, and all of them have this use case in that partnership. They have some other ones as well, but this is -- they call it the physical side of telehealth. Telehealth is obviously becoming a really predominant thing here... And like you said, for so many things - there's a physical side, too. And so if you can get that inhaler delivered right away, or that croup medication delivered right away, it's huge for the family. It's huge for -- yeah, and you're touching on something too that I didn't appreciate when starting Zipline, that I now I appreciate a lot... It's just how much health affects basically the economy. You mentioned just - yeah, the parents not being exhausted the next day; their work is going to be better, and they're going to be more productive in the economy, and just keeping people healthy in that sort of preventative way is something that I've become extremely passionate about, because I've just seen this cause and effect in my own life, and in all the patients we serve around the world... Just how powerful that is when a parent doesn't have to stay home, or a parent doesn't have to basically be affected in their professional world by what could be a very preventable sort of health -- some of these things kind of feel like inconveniences even, right? Blood, obviously - very acute, big, life threatening... But a lot of this stuff, it's just -- a little bit of convenience just goes a long way for people staying healthy and productive.

**Adam Stacoviak:** Have you -- I imagine you probably have, but have you imagined a world where Zipline's at scale, and you don't have a couple hundred in production, you have, I don't know, half a million; I don't know, a lot. Just an astronomical number that you don't even consider today. How the world changes, maybe even how we see the world... Because I can't imagine \[unintelligible 01:04:58.18\] Zipline delivering something to me. I'm sure it'd be cool once I have it in my own life, but... Once this kind of technology, whether it's you or just generally, like flights, isn't only owned by United or Southwest, for example, when this kind of delivery or scenario becomes ubiquitous, have you imagined that world and how that changes the world?

**Keenan Wyrobek:** Yeah. I mean, I'm super-excited about it. This is part of the reason we spend so much time on things like making the system silent, is -- one of the things we know is I don't want to notice these things. Just like a bird flying over your house. How many birds flew over your house today? You have no idea. Why? Because you don't hear them. And we spent a lot of time on things like that, because we just know that as these things scale, there's certain things that we've learned from our experience that just matter a lot, like it being quiet.

\[01:05:49.24\] So there's certain things like that that we spent a lot of time on, to make sure that when this scales, it's a world we actually want to live in. And then, of course, the net effects of this kind of instant delivery... I live in a small town here in California, and - yeah there's, there's two bakeries... They're so excited for when they get their little kiosk and they can just send out fresh bread in the morning to people.

**Jerod Santo:** Yes, I was just thinking about that.

**Adam Stacoviak:** Timely deliveries.

**Keenan Wyrobek:** Exactly. And there's so many things on the personal life side like that, like getting fresh bread delivered, there's so many things on the work side... There's so many jobs that just require stuff. Obviously, doctors, medicines - it's so obvious. And auto mechanics - it's so obvious. Just yesterday, my HVAC system in my house went out; a little blower had failed, and the guy came out and he's like "I'll be back in two days with the part." And it's like "No, no." You would deliver the part right while he's there. And I looked it up, the part he needed - it weighs less than eight pounds. We can deliver it.

**Adam Stacoviak:** Did you deliver it?

**Keenan Wyrobek:** No, we don't serve that area yet with HVAC parts.

**Adam Stacoviak:** Oh, that would have been so cool. If you're like "Hey, I've got a solution for this. Hang on. There's no delay. I got the part."

**Keenan Wyrobek:** Yeah. Even just talking to him about his business. This is an independent guy, who does a lot of these kinds of HVAC repairs, and fixing heaters and stuff... And his customers, they hate it when he charges for these visits just to figure out what he needs. If he could just fix it there on the spot, not only would he be able to serve so many more customers, but those customers would be so much happier. And he has somebody who hates that part of the customer conversation, of like "I've got to charge you the 200 bucks for just coming by and seeing this thing." He'd love that to go away, because he hates that part of his job. And anyway, there's so many pieces like that, I just can't wait to see what people imagine, and how they will use it. Because every country we operate in, people are using it in ways I never expected.

I'll tell you one fun story from Dallas. This summer we were looking at our usage data, and most people would either order at one address, or order to maybe two addresses. But we saw this one person who was ordering to a different address almost every single day. Like, what is this? What's going on here? And so we send this user an email saying "Would you share how you're using the service?" And so this is a postal delivery carrier, and his New Year's resolution for this year was to eat healthier... And he was getting a salad delivered to him along his route every day, for lunch. And I just -- anyway, I just loved that. I would have never have guessed. I would have never guessed. We call him the Johnny Appleseed of Zipline, you can see...

**Jerod Santo:** What about gifting? It's a great way to gift. It's just like "Hey." Call somebody up, "Go outside." "Why?" "There's a delivery coming for you." And this thing just drops a gift out of the sky.

**Keenan Wyrobek:** Oh, we did this. So we did a really fun thing for Easter this year, where we basically loaded up the little delivery zip with a bunch of Easter eggs; no packaging, just Easter eggs. And by the way, one cool thing about what we do is it doesn't require packaging. That's another part of the future I'm excited about. None of this cardboard jungle we all have in our garage from Amazon boxes.

**Adam Stacoviak:** Oh, my gosh... Save me.

**Keenan Wyrobek:** And so we put a bunch of Easter eggs in there, and it was really interesting to see how many -- we had grandparents in other States, outside of Dallas (we were just delivering in Dallas) place orders for their grandkids to deliver this pile of Easter eggs into the yard. And the kids loved it, and the grandparents loved it... We had just sort of this out of state gifting, and it was so cool.

**Jerod Santo:** That's awesome.

**Keenan Wyrobek:** And there's so many things like this, that I can't wait to try.

**Jerod Santo:** There's so many places you can go with eight pounds, but at a certain point that becomes your limit; I don't think you guys are anywhere near that point. And we all know that. But at some point, have you thought "Okay, what's the next -- where's the zip line jumbo? What's the weight that we need to go to expand to a new set of things?" And then "What do we need to manufacture in terms of drones to actually get that done?" I know there's a long range one. Is there like a heavy weight one, or is that just too far down the line to care about?

**Keenan Wyrobek:** \[01:09:49.14\] It's a great question. Eight pounds gets us really far, as you're alluding to. Something like 80% plus of Amazon packages are less than eight pounds. So many of the use cases that we are really focused on... A meal for a family of four, from almost any restaurant, is less than eight pounds, as an example. And then, yeah, if you need more, we just send two deliveries, back to back. It's two little bags of food. It's no boxes, none of this other stuff.

It'll be interesting to see how it evolves. If I was a betting person, I think we will increase our payload over time beyond eight pounds. There's a good chance it won't go a ton past that. Maybe 10, maybe 12 pounds... And really, what it comes down to is what doesn't fit. Once we get to that scale, we can deliver a very full bag of groceries at that scale. And the advantage of having one platform, as opposed to like different variants, is we can drive the cost down further and further, just from scale. And so as the cost per delivery goes down, there's a chance that we'll never be able to compete with -- if we made a drone that could deliver four bags of grocery at once, that will always be more expensive than a smaller drone delivering four bags just 30 seconds apart onto your picnic table in your backyard. And then there's stuff left out, like the flat screen TVs... We obviously can't deliver those.

**Adam Stacoviak:** I was thinking about the TV, honestly. I was like "Can you bring the TV to me?" I'm just kidding, I was not thinking that. That's cool.

**Keenan Wyrobek:** Yeah. We've been looking at the car -- the partner will be launching within Dallas, and we can deliver something like 90% of their car parts... But obviously, 10% we can't do. And yeah, we think about that. Zipline has always just kind of been like customer-first. So once we get the data, once enough customers ask us for the same thing over and over again, and we go deep with them, if we have conviction that there's a thing that will work for them, that will make sense for the business... You know, that's how this precision delivery drone inside of a drone system came from... So yeah, we'll do more things in the future.

**Jerod Santo:** Is anybody else doing this? Like, who's the Southwest to your United? I know that Amazon announced the thing, like you said, years ago, about drone deliveries, and then that got canceled, or sidelined, or whatever; maybe it's happening, but... I hope there's other people that are tackling the same problem, because we want diverse and unique solutions, and learning from each other... So who else is working in this space that maybe is either your competition, or even that you admire what they're up to?

**Keenan Wyrobek:** Yeah, so Amazon has started doing some deliveries, quite limited as far as I understand. Google has a project called Wing. I admire a lot of how they're thinking about the problem, and we collaborate with them a lot on some of the projects with the FAA. I really like how they think about some of some aspects of safety, for example, and things like that. I admire that a lot.

There's a fair bit out there... I'll be honest, I don't think a lot about the competition. For us, it's just about the customer, and just "What can we do? How can we do better every day?" and really measure ourselves on our own velocity towards delighting those customers.

**Jerod Santo:** Yeah. What's 2026 going to be about? Scale? Other things? What's it going to look like?

**Keenan Wyrobek:** It's a lot about scale. Our long range platform is scaling around the world, so that will continue in 2026... And yeah, this precision delivery platform is scaling... Yeah, it is scaling really fast. So a lot of what 2026 is about is building up the supply chain capability to manufacture faster, building all the internal muscles to launch the charging sites, and things like that, to enable scale. Yeah. And just getting better and better at that user journey you were asking about, of like "How do people order, and how does that all work for all the different use cases?" We've found -- you can't be super-generic there. Different use cases need a tailored user experience for it to really be magical... And so we'll spend a lot of time there as well.

**Keenan Wyrobek:** How do you pick your next city, and why is it going to be Omaha? \[laughter\]

**Keenan Wyrobek:** It's going to be Omaha, because the --

**Jerod Santo:** Yes...!

**Keenan Wyrobek:** Yeah.

**Adam Stacoviak:** "Yeah..." I love that. \[laughter\]

**Keenan Wyrobek:** \[01:13:50.14\] It's really about the testing and validation story. So I can't announce the next city, but we'll be launching our next cities in the first half of 2026. Part of how we choose those cities is they're very similar to the Dallas-Fort Worth area. Similar in terms of weather, similar in terms of terrain, that kind of thing. And that's because that's what we validate the system for. In parallel, we're validating the system for expanded weather, more complex terrain, smaller yards, all those kinds of things. And so basically, once we validate the system to go into metros that aren't like -- we refer to like the Sunbelt metros; then we'll move into these other metros as well.

Yeah, it's really fun. We have a test site up in the Cascades, where we're doing a lot of testing to validate the system for metros that aren't at all like Dallas and Fort Worth, but... Yeah, it'll be Sunbelt metros first, and then we'll keep going from there.

**Jerod Santo:** Yeah. You've solved a ton of technical problems to get here, and now you're trying to take it in lots of places. What are the big technical problems that are ahead of you? If you had a checklist as CTO, like "Here's the things we need to solve." What's unsolved for Zipline?

**Keenan Wyrobek:** Almost every front, there's more work to do. I've been thinking a lot recently about weather forecasting... So we spend a lot of time to validate the system for certain weather. But then when you operate, you've got to know how -- like, how do you not go in that weather you can't go in? And that's harder than it sounds to do at scale. There's some easy things, like wind limits. Forecasting that is fairly straightforward. But there's much more complicated things, like icing conditions. Right now we're testing to understand exactly what level of icing conditions we can handle, and how to handle that well, but there will be a limit there that we're gonna need to forecast. Forecasting icing conditions is notoriously very hard to do. This is like when you have fog, and clouds, and cold weather; oftentimes you fly through that and you just cover your aircraft in ice.

Another good example is lightning conditions. We are currently chasing lightning with our mobile test rigs right now, to really understand how does lightning interact with the system. We think it won't based on analysis, but lightning is one of those things where you don't trust the analysis. You've got to go in the real world and get real amounts of data to get confidence in that analysis.

So there's a lot of work, both on the capability side, to expand the kind of weather we can fly in, and on the weather forecasting side. There's a lot of work there. There's a lot of work in the airspace side, of just "How do you manage this fleet at scale?" You were talking about going from one charging point to a delivery, then landing at a different charging point... There are some things there that are just way harder than they sound, where you can end up with your fleet kind of like migrating organically in a direction away from where the supply is... That can happen.

**Jerod Santo:** Like a beehive. They're swarming. They're going somewhere else. Oh, no...!

**Keenan Wyrobek:** Exactly. So you've got to manage that carefully, to make sure you can keep delivering for people. So there's a lot of -- almost every front of what we do at Zipline, there's a reimagining happening for the scale, for new capabilities. We've talked about some of healthcare use cases... There's a lot of new capabilities we need to build, both into how we operate the drones, and into the tools that the humans use on the healthcare side, systems side, and on the patient side to use the system... So there's all kinds of exciting things ahead of us. I think of us as like -- we're at the very beginning of this journey, and there's a really exciting roadmap ahead.

**Jerod Santo:** I love it, man. I'm excited. I love that one of your teams is like a group of storm chasers, and they're just like "Our job is to find lightning in the world, and then go fly these drones up into it and see what happens."

**Adam Stacoviak:** "What do you do for work?" "That's what I do."

**Jerod Santo:** Storm chaser for Zipline.

**Adam Stacoviak:** "That's my job." That'd be a rad job.

**Jerod Santo:** Yeah.

**Keenan Wyrobek:** It's a badass team. And they're hardcore too, because chasing storms when you have basically a big old trailer, we have these docks mounted to a trailer that they use... And obviously, with the storms, it's just hard to get around in these places... It's really cool, how they work and their dedication.

**Jerod Santo:** Is there a manual override on those things that you could just take over if you needed to, or no?

**Keenan Wyrobek:** \[01:17:50.26\] Yeah, but it's very high level. You basically have three buttons. A button to tell it to go back and dock, a button to tell it to loiter right where it is, like stay put, and a button to deploy that whole aircraft parachute and land where it is. That third button we've never pushed, but every regulator wants it... And then mostly it's the other two buttons. You can't jump in there and stick fly the thing. It'd be extraordinarily hard to. These aircraft fly themselves in a sort of superhuman way. How fast they make adjustments, how fast they can self-diagnose, and handle faults, and still fly nicely... Yeah, if you try to put a human in the loop of that, it would be extraordinarily hard to do.

**Adam Stacoviak:** I was actually just watching a video from Mark Rober, and it was a goalie. It was an AI goalie, essentially. And I forget the soccer player's name, because I'm not a soccer fan to that level where I know the person's name, but I imagine it's probably like Messi, somebody who's super-famous. And they were going against the goalie, and they could not beat the goalie, because the reaction time was just so uncanny, like how fast they could react. And I take that kind of example, which is sort of a fun experiment, which Mark Rober is a scientist, and he's super-serious... But at the same time, it's meant to be fun, and not really an experiment of seriousness on a large scale.

**Keenan Wyrobek:** Yeah.

**Adam Stacoviak:** And to what level your advancements may be well beyond that, to truly say what you said. Because I'm sure there's a lot of people who say "You know, Keenan, I hear you saying that, but I still don't believe it..." Because they can't believe it until they see the truth of the superhuman ability to fly these aircrafts. I just think back to maybe the Mark Rober thing; that soccer goalie that was AI totally demolished the human, could not beat the AI goalie.

**Keenan Wyrobek:** Yeah. It is surreal to see these things handle the -- when I saw the first... I mean, all this fault tolerance we test extensively. \[unintelligible 01:19:51.18\] one rotor fails, and the system handles it, and goes back and docks. When that is working well, when you're watching it happen, if you don't know what happened, you won't even notice it. You have people with binoculars watching that thing, because the only way you're going to see it is if you actually see the propeller blade, that one probably stopped spinning. But the aircraft handles it so seamlessly, it barely moves. And if it's windy at all, it doesn't move more than it does normally in the wind.

This is one of the exciting things about autonomous systems, is they can get super-robust, which means we can operate and serve customers and deliver to patients and hospitals in all kinds of really crazy conditions. Again, the conditions that -- you know, flying low altitude in these storms, nobody does it. And when I say nobody, I didn't even realize this when we started Zipline. I thought like at least Medevac helicopters and this kind of things, the Coast Guard must do it... And we ended up calling some of them, because we were struggling to figure this out... And we're like "Cool, do you have any data?" And they were just like "No, we stopped flying those missions in the '70s. Way too many people died." And yeah, you can only do it if you use an autonomous system. And yeah, it's quite wild to see these systems perform, because they just -- they're so fast, and so superhuman. And then they can get these deliveries through these conditions that if you're on the road... Some of these conditions are so crazy if you're on a good road, you're kind of feeling like "I should not be on this road", but the drone is doing alright.

**Jerod Santo:** Yeah, I used to listen to the Bill Burr podcast quite a bit; I don't anymore, but he is a hobbyist, but a trained helicopter pilot. And so he would chronicle some of his -- it's just him talking for an hour, so he needs a funny person to listen \[unintelligible 01:21:32.00\] so it's enjoyable. But he would chronicle some of his efforts at just flying a helicopter... And I mentally understood that it was difficult, but hearing somebody try to learn it, and the maneuvers they're going through just to get down the basics of flying a helicopter...

\[01:21:52.03\] It's so fraught and dangerous to fly helicopters in adverse conditions... I mean, it's a death knell. And we know that we've had famous people like Kobe Bryant dying in helicopter crashes, just because of fog, or because of bad systems. And humans struggle, and have to have extreme training to be able to fly those things... And computers can fly them so much better now, that it's like "Why even put a human behind the sticks?", so to speak.

**Keenan Wyrobek:** Yeah, absolutely. And what our system can do literally in the blink of a human eye is the tech side handle almost everything that can go wrong, but faster than a human blinks. And that's powerful for making autonomy scalable and safe.

**Jerod Santo:** One last question for you, Keenan - what's your tech stack? So if you were to describe -- I know you have lots of different tech... If you were to pull out all the tools in your CTO tool belt - programming languages, frameworks... What's Zipline built on?

**Keenan Wyrobek:** Right. Yeah, I mean, for high-performance stuff in the cloud we go for -- almost everything on the aircraft is moving to Rust. There's various parts of the tech stack... Almost every part of the tech stack kind of has its own little world. A lot of -- we've built our own in-house simulation system we call Phoenix. That was how we do basically a lot of the simulation and testing. Boy, the tech stack is broad. I worked a lot on ROS, the open source robotics platform back in the day, and everybody always asked me "Cool, you must run on ROS." And I'm like "Oh, man... No, we don't." If ROS 2 had come along early enough, we would have, but unfortunately we kind of went down that path before ROS 2 was ready for that.

Yeah, we use open source where we can; of course, we contribute to open source where we can. I'm a big proponent of open source. One of the things we actually did on the tech stack, what we spent a lot of time on, is basically the future of autonomous flight. Even today in Dallas we share the airspace with some of these other drone operators we mentioned... And I think of the -- no one really knows how autonomous flight's going to scale in the airspace... And I can tell you what we do today in the airspace is not going to scale. It barely works for the scale we have today, which is very low compared to where the future is going. And there's a lot of need for folks in industry and Academia to like bring the best ideas to the table, make sure the best ideas win, so that we are both scalable in the airspace, and safe in the airspace as we scale.

So Zipline's working on a bunch of projects like that, that we have or intend to make open to the community, so we can kind of prove it internally as like "Hey, this is how our drones don't collide at scale with each other", and make those technologies available so everybody can share that. That's a big part of the tech stack that we think a lot about, because -- well, again, I just love the... To me, the open source mindset comes from this thing of like "Hey, we're all in this together." And as I think about the future of the airspace, we're all in this together; it's going to be great for Zipline if all companies that need to use the airspace and all users of the airspace can use the airspace safely. But the future of autonomous flight is still to be figured out, and we're spending a lot of time on that.

**Jerod Santo:** Do you see a world where there's some sort of open orchestration communication channel where you're not just detecting objects and avoiding them, but maybe you're actually publishing your future path, and so other systems can know, like, "There's zips going this way and that, and so I can avoid those paths"?

**Keenan Wyrobek:** Yeah, absolutely. So today there's a version of that that we use in Dallas. And it's not live, it's done before you take off. Basically, there's a federated cloud-based system where the different operators' systems talk to each other. And basically, it's very rudimentary today. You can kind of think of it a little bit like a game of Battleship, of like "Okay, I'm trying to share my intended path in the air", sort of a tube in time, and I share it with the others and they're kind of like "Nope, that collides with something I've already reserved." And then you try to find another tube, and then it finds a tube, and then you're expected to stay in that tube about 95% of the time. Not very scalable. It's not a very efficient way to use the airspace, which is plentiful.

\[01:26:13.12\] Internally, our aircrafts share information live with each other over a point-to-point radio link, where they share their intent of "Where I'm going in the next 10 seconds" or so. And they do that also over the IP network. I can't announce the partner yet, but there's a commercial drone operator in Dallas and we're going to be announcing a partnership later this year. They'll be using that same protocol, so we can share the airspace without those big reservations. And that's to kind of explore "Hey, is this more scalable? Alright, can we build up the data and then share it with the rest of the regulators and industry to kind of bring everybody along and make the case for what we think is a better idea than what we have today?" And then we'll move to that idea.

So yeah, I think what you're describing is going to be the beginning of where we go with this. I think there's going to end up being a fair bit of structure, a lot of real-time sharing to make sure we use the airspace really efficiently, and scalably.

**Adam Stacoviak:** It's like a DNS in the cloud, basically; in the sky, literally the clouds... Pluralized, not the internet cloud as we know it. But it's kind of like that; it's like a phone system, in a way, or a route system, or a flight path you now have to have predefined or known things. It's like "Well, we have these coordinates, and we know where we're at in the world", so maybe they're logistically like that, or something like that.

**Jerod Santo:** Yeah, but constantly changing. Yeah.

**Keenan Wyrobek:** Exactly. Yeah, we spent a lot of time talking to the original folks who created ICANN, which created the DNS system, to like "How did that actually come to be?" Because in some ways it's kind of a miracle, how open the internet is, and how it evolves...

**Adam Stacoviak:** Undoubtedly, yeah.

**Keenan Wyrobek:** And it's like "Alright, cool. We want to learn all the lessons from that", because we really want the future of the airspace to be similarly democratized and open and innovative and evolving.

**Adam Stacoviak:** Right. So you're studying DNS to learn how to do things in the sky?

**Keenan Wyrobek:** Absolutely. Yup.

**Adam Stacoviak:** Wow.

**Keenan Wyrobek:** And not just the technical layer of DNS, but also like -- if you've heard of ICANN, the international... It's a corporation of names and numbers, I think. Anyway, it's basically the people behind sort of the internet, that agree internationally of how it's going to work. They figured out how to be a group of people that doesn't make bad decisions, you know? And we want to learn from that as well, because I can see -- if you don't get the right incentives and the right people and the right mindset, and the right kind of structure, I think it's really clear how this kind of gets stuck in gridlock, and doesn't evolve and innovate.

**Jerod Santo:** Right. So when you operate on a 2D plane, everybody gets one place. So like my house address leads to one place. Now, there's many paths to that place, so you can alternate routes, and that's all well and good. But on a 3D plane, if you have conflicting paths, how feasible is it to just change the Z axis and say "Well, we're going to fly five feet lower than we were going to, and now we just completely have free airspace"? Is that like foolish thought, or is that legit thought...?

**Keenan Wyrobek:** \[01:29:03.02\] No, that's exactly how our drones don't hit each other.

**Jerod Santo:** Okay. So they're just like "Well, I'll go up or down a little bit."

**Keenan Wyrobek:** Exactly. There's a distributed algorithm, they share their 10 seconds out intent with each other, and there's a distributed algorithm based on what they hear from the people around them, that they'll adjust their course in a way where you get an emergent behavior you're talking about, of like "Okay, great--" You end up with that nice passage, and very efficiently and dynamically. Yeah. I think you're describing exactly how this needs to happen. But the challenge is it has to happen in a very robust way. It can't be like "Oh, if you can reach a server on the cloud, and your cell connection is working, and the server's working, and everybody's talking at the same time, and there's some central orchestration that doesn't have a problem, then it works..." We have a lot of experience to learn the hard way that you just can't scale that way. It's gotta be simpler, and the aircrafts themselves have to have many layers that they can do without any radio connections to things that will still give you layers of safety. That's really important.

**Jerod Santo:** When you bring up layers, it makes me think "Is there an advantage in formalizing around some kind of layering, vertical layering of lanes, so to speak?" ...so you're not just having the emergent behavior of height, but you're actually pre-planning like "Well, I fly at this altitude, and this other company always flies at that, and so we're pretty much cool."

**Keenan Wyrobek:** I think that'll happen. And I think it'll be more than vertical. I think it'll be more like sort of highways or lanes. And the reason -- there's a lot of things we do to optimize for safety, but one thing you'll do is you'll avoid certain areas. The classic example is a stadium. If there's a game happening, you're just not going to fly over that stadium, because why would you? It's not that you're going to have to parachute landing there, but you might, statistically speaking... And flying around it, statistically speaking, is going to be safer.

**Jerod Santo:** It'd be great advertising \[unintelligible 01:30:51.08\]

**Adam Stacoviak:** "Not a crash, just a parachute."

**Jerod Santo:** \[laughs\] Not a crash.

**Keenan Wyrobek:** Yeah. Exactly. So everybody in the air is avoiding similar things, and so you'll end up with this congestion, kind of going around these keepouts, or these soft keepouts, as we call them... And sometimes hard keep outs. So there's certain government places where the government is like "You cannot fly over this area. We consider that to be something you can't fly over." So these hard keepouts and soft keepouts end up funneling their traffic into these places, where I think you'll have -- in the early days, vertical separation might be enough, but in the long term, it may be like "Yeah, if you're going this way, stay to the right, and up high. And if you're going the other way, stay down low and to the left." And you end up with literal kind of corridors that create more and more efficiency, especially when you have these kinds of forced congestions. So there's a lot of cool things that are going to be needed to really scale.

**Jerod Santo:** That's so cool. So cool. Well, we've taken enough of your time... We appreciate you answering all of our questions.

**Adam Stacoviak:** So much fun.

**Jerod Santo:** I think this is one of the coolest things there is. I'm both happy with you, and jealous of you that you get to work on Zipline all the time, because I just feel like there's so many hard problems, there's so much benefit on the other side of it... And so congrats, and good luck, I guess, on scaling out/up.

**Keenan Wyrobek:** Thank you. It's a fun place to work. Just yesterday I came to work a bit earlier, I was on a call in my car, and I was watching everybody walk into the office and everybody kind of has like a skip in their step... And I was just like -- anyway, just reminding myself how lucky I am to work in a place that's like that, where people are fun, the culture is fun, and the technical challenges are real, the customer challenges are real... Yeah, and everybody's skipping to work. It's like a good sign that life is good. So... I'm feeling lucky.

**Jerod Santo:** For sure.

**Keenan Wyrobek:** Yeah. Great to talk with both of you, too. I really enjoyed this conversation.

**Adam Stacoviak:** It was awesome.
