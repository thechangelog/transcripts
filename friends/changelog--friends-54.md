**Adam Stacoviak:** Well, friends, we're here to discuss an outage, a disaster that made history. And we have a good friend of ours here, Robert Ross, the founder and CEO of FireHydrant, to help us dig into what exactly happened, and maybe more importantly, how to prevent incidents at large, or just deal with them. What do you think, Robert?

**Robert Ross:** Well, I'll do my best without wearing a monocle and thinking about exactly how this went down... You know, I've read every news source about it, I think, at this point, and I think everyone's heard about it, so... Excited to dive in.

**Jerod Santo:** What are you guys talking about? I'm not even sure what we're referring to here.

**Adam Stacoviak:** Yeah, right, Jerod...

**Robert Ross:** Did something happen?

**Jerod Santo:** You know what I kept thinking every time I read CrowdStrike? I kept thinking of AC/DC's Thunderstruck. I couldn't quite pull the pun across, because it's CrowdStrike/Thunderstruck, but that song had been playing in my head probably before this happened, but it just happened to align... I don't know. I'm an AC/DC fan, what can I say...?

**Adam Stacoviak:** The developer may have been listening to that when they wrote the code.

**Jerod Santo:** They might have been.

**Adam Stacoviak:** That could be why you're there.

**Jerod Santo:** Potentially. I like to code to some AC/DC.

**Adam Stacoviak:** Yeah, for sure. Especially that song. That'll pump you up, man.

**Jerod Santo:** For sure.

**Robert Ross:** I code faster when that type of music is playing, that's for sure.

**Adam Stacoviak:** Yeah. I'm sure most folks are, to some degree, primed on what happened... But who wants to nominate themselves to explain at least a primer of what happened? I think you did it pretty well in News, Jerod, but you also covered some other sides of it, too. What do you think? Do you want to handle it, or do you want me to handle it?

**Jerod Santo:** Well, there was a giant outage on Friday, due to CrowdStrike pushing a bad update to a billion machines. I'm not sure the exact number... But basically, every Windows-based company/organization around the world was affected, probably, somehow. Many things were down. The banking industry got hit hard, hospitals got hit hard, airlines got hit hard... Except for Southwest, which I discussed in News. The reasoning, by the way - quick update on that - I put in News was that they are allegedly still running old versions of Windows 95, 3.1... Could be true. Might not be true. Those are actually rumors...

**Robert Ross:** I thought that was a joke when I saw that. Maybe that's true, actually...

**Adam Stacoviak:** It duped Jerod. It got him.

**Jerod Santo:** It might be fake news... I updated our Changelog Newsletter to make sure that it's accurate now... Because I thought it was funny too, which is why I put it in there. And it's true that Southwest was unaffected.

**Robert Ross:** That is.

**Jerod Santo:** And of course, Southwest famously was down -- was it two years ago? ...for 10 days, because they couldn't --

**Robert Ross:** Yeah, the holiday outage.

**Jerod Santo:** Yeah, the holiday outage. And back then there was reasonings because they were on really old versions of Windows, and they couldn't do stuff. And so I think those two stories combined to say perhaps their old versions of windows have actually saved them this time. But allegedly, not necessarily the case. But funny either way. Yeah, man... I guess the way I would summarize it is the blue screen of death made an epic comeback, and took over the world. Total world domination last week.

**Adam Stacoviak:** But wouldn't you say that this was affected by CrowdStrike customers? Not just simply Windows users.

**Jerod Santo:** Yeah, but I guess -- here's what's weird about it. I had never even heard of CrowdStrike, but it sounds like who's not a CrowdStrike customer...? Robert, were you familiar with CrowdStrike prior to this?

**Robert Ross:** Yeah, we use CrowdStrike at FireHydrant.

**Jerod Santo:** Okay. So what do you use them for?

**Robert Ross:** Endpoint security. I mean, we run their Falcon daemon on all of the employee laptops. We don't use it for like the services we provide, but it is running on every FireHydrant laptop.

**Jerod Santo:** Gotcha. And these laptops are Windows, Linux, macOS...?

**Robert Ross:** All Mac, yeah. So we weren't impacted by it, thankfully.

**Jerod Santo:** Just a Windows CrowdStrike world.

**Robert Ross:** Yeah, that's what it seems like. It seems like there was a change that was in the \[unintelligible 00:07:38.26\] that runs silently. I think a lot of people don't even know that they have CrowdStrike on their laptop. And that's by design. That's I would say a good product; you don't even know it's there until it gives you a blue screen of death...

**Jerod Santo:** \[laughs\] It's a bad way to find out about it. But before that - brilliant.

**Robert Ross:** \[00:08:01.17\] Right. It's like, you had a bunch of stuff on your walls, and then eventually it falls out of the wall and you're like "Oh, that's been rotting behind there for a long time." I think that change is always the biggest cause of incidents. I mean, we see it all the time. Google even has a stat that 80% of their incidents are caused by a change. So it's not exactly shocking that a change caused this. I think what's shocking to people is the scale of the incident.

You had AC/DC Thunderstruck playing in your head... I kind of had Jeff Goldbloom in my head, where he's like "Flap your wings and like a hurricane happens across the ocean..." That's kind of what it felt like for me...

**Jerod Santo:** The butterfly effect.

**Robert Ross:** Yeah, the butterfly effect. Exactly. That's kind of what it felt to me. A very simple try to access memory that wasn't there, grounded flights, still has grounded flights, Delta has canceled hundreds of flights every single day for the last five days... And I think we're just gonna keep hearing about problems in the next few weeks from this thing.

**Jerod Santo:** Yeah. It'd be interesting if somebody could somehow, some way come up with like a global economic impact of this event. But it has to be measured in billions, maybe trillions of dollars.

**Robert Ross:** I think so. I mean, we had employees and teammates at FireHydrant that had to cancel trips. I had friends that were at the airport that had to cancel their weekend plans that they were flying somewhere... So it wasn't only the places like airports and hospitals that were impacted. It was local economies...

**Jerod Santo:** Totally.

**Robert Ross:** ...that were impacted by this... As well friends going to Dominican Republic that couldn't go. And it's hard to reschedule those types of plans, so it's kind of like probably not coming back, that loss.

**Jerod Santo:** That money, yeah. Well, not to mention just labor. Pure labor costs of mitigation or remediation. Because this unfortunately does require I think direct impact with each machine affected, meaning, you can't just remotely reboot these machines, is what I read. You have to actually go touch each machine. And I don't know, boot into safe mode, or maybe you know, Robert or Adam, exactly the process... But it's relatively straightforward, unless you have an encrypted hard drive. Then it's slightly less straightforward. But we're talking about people walking around data centers, going to each computer, or walking around hospitals, going to each computer... I mean, the amount of highly paid individuals effectively doing a mass reboot this week is probably measured in large numbers.

**Robert Ross:** Yeah. And even like parts of the country in the US that had issues probably don't have a big workforce capable of doing this work. You think of a giant airline, they have a massive IT team that can go and do that labor and that work. But Alaska - in rural Alaska, 911 wasn't working. People couldn't call 911.

**Jerod Santo:** Really?

**Robert Ross:** And at one point even Portland's mayor declared a state of emergency on Friday. And there's parts of the impact area that just don't have like a response unit that can go solve those problems. So I do think we're going to keep hearing about it. There's going to be inquiries by the government... I think I saw today that CrowdStrike's CEO is going to be called upon by Congress.

**Adam Stacoviak:** Yeah. That was like news of like 16 hours ago or so. AP had that out there, The Washington Post had it out there... House committee calls on CrowdStrike CEO to testify on the global outage.

**Robert Ross:** And not surprising. He went on air pretty quickly. He was like "This is our fault. We're fixing it." And I have to commend the confidence to just go and own it that quickly... But I have questions. I think everyone does. Even my aunts and uncles in their late 60s who don't quite understand this type of world like we all do were asking me questions. I mean, I had -- everyone felt this, I think, in some way, shape or form.

**Adam Stacoviak:** \[00:12:12.08\] Well, Windows only... There's a lot of details. So I caught up with Dave Plummer. That's literally his name. He is on YouTube, he runs a channel called Dave's garage. He's an ex -- from my understanding, ex Microsoft operating system developer, and so he knows a lot about this stuff. And I will link it in the show notes, but I mean, he was my source of literally what really happened on the inside.

There's also the Code Report from - I think it's Fireside, or Fire-something... Fireship, on YouTube. They also summarized some things that I pay attention to as well, as part of researching this topic. So there's some theories that this is just simply bad quality code, this could be sabotage, or this could be planned. Now, those are obviously theories, not truth at this point... But I think it's important to look at -- you know, Robert, you said change is what affects things and what causes incidents. And we're not sure when exactly this code got pushed, but what happened was -- or at least from my understanding, and thanks to Dave for explaining this, is that this software, Falcon, as you all run as well, it runs in what they call kernel mode. And stop me if you've heard this one before, but there's two lands to live in, basically, in the operating world. You've got user mode, and you've got kernel mode. And kernel mode has higher priority. And when an application crashes in kernel mode, it crashes the system, and it does it by design, because it's protecting the system. It's better to crash than to actually boot up. Something else worse could happen if that was the case.

And CrowdStrike, their software called Falcon, lives and runs in kernel mode. And that's, I guess, by design. I'm not sure why it has to... And then there's this lab that Microsoft has called Windows Hardware Quality Labs, that drivers that live in kernel mode or run in kernel mode, that are third party, they have to go through this process to get deployed. And so it gets tested by Microsoft in this WHQL labs system, to be able to be deployed. It gets signed and used by the operating system etc.

But the way they bypassed this was because, in Dave's words, they wanted to be agile, ambitious and aggressive to get the latest protection. And so as a way to deploy this latest protection more fastly to Windows users - and I guess it's not the case for Mac or other systems, because it didn't happen to you all, Robert - is that they have these things called definition files that the kernel reads from. So when the kernel wakes up, if it's a new boot, it wakes up, it enumerates a folder, and looks for this other code, this dynamic code that gets deployed outside the kernel delivery system. So essentially, you have unsigned code that runs in kernel mode. That's bad stuff. From what I understand thanks to Dave, that's a rough version of the mechanics of how this works on the Windows system.

**Robert Ross:** Yeah, I think it's a game of trade-offs, and that's a hard thing to feel now. You know, flights got canceled, hospital surgeries got canceled... It's a big deal. But at the end of the day, it's easy to say "This was the worst thing that could happen", instead of the sum of the parts of all the things that were maybe prevented in the past. And we just have no idea -- I don't even think that CrowdStrike would probably know, but how many things were via CrowdStrike or another locking system, security system running, have prevented mass credit card theft, or identity theft, or other things going on. It's hard to say. No one's gonna buy that now though, because no one's gonna look at the trade-off right now. They're gonna be like "My flight got canceled. I don't care what my trade-offs were in the past right now."

\[00:16:11.28\] The other thing that I think that is gonna be - we're just going to have to see if CrowdStrike posts a public retrospective. But this code could have been -- this code that is the crime scene of this codebase, that could be in there (we don't know) for 10 years. We have no idea.

**Adam Stacoviak:** True.

**Robert Ross:** And another piece of code was deployed 10 miles away, or so they thought, from that codebase, for that line of code, calling that memory address, and then that caused it. I think it's one of the challenges with building software now, is - like we were kind of saying earlier, the butterfly effect. Software is so complex now, and so vast that you can deploy a change in what you think is a different country of your codebase, but it impacts across the ocean and somewhere else. And I would wager that's what happened here. I would wager. There's just no way that CrowdStrike doesn't have a crazy test suite that Microsoft is probably running tests for them, because it does run in kernel mode, they have to get that approval, it sounds like... I just have a really hard time believing that this very simple line of code just got deployed and took everything down. I could be totally wrong and totally off base. I have no idea. But whenever I've taken down production - and it's been many times - it wasn't explicitly because the one piece of code that I wrote. Because I tested that. I put that through its paces. I wrote unit tests. It was the combination of that and something else. When you add chlorine and vinegar -- what's like that potent combination they say never to do, because it's like super-toxic all of a sudden? That's what it feels like happened to me in this outage specifically.

**Jerod Santo:** Yeah. I mean, for me, it seems like some of our most ingrained premonitions coming to fruition in terms of being down in the mucky muck, as a developer, we just know -- and I've said many times, it just feels like we're building a house of cards... Because it's so complicated, and it's so intertwined. And it's effectively - especially with web development, we're talking about a worldwide distributed system, which has things that happen... I mean, of course, there's an explanation in retrospect for all of these things, but when you build a house of cards, eventually it's going to just topple. And sometimes it topples in ways that you don't know why, or when, or how, and what will be the downstream effects... And of course, this isn't web development in this case; this is operating system code. But still, networked machines being able to remotely update. Every once in a while, the house of cards topples, and we have to start over to a certain extent, rethink things, try to adjust, and clean up the mess, and move forward.

**Robert Ross:** I even think of -- for every person listening to this, think about the mechanics of what is going on as you're listening to this podcast. If you're using headphones right now, your headphones have software in them. That is going to a Bluetooth chip that has software on it. That's part of an operating system, that's translating that to go over the air to a cell phone tower, that's running software, that's going to a network switch that Cisco probably built. That's running software. And it just goes more... And then it eventually hits an Apple Music server, or some SSpotify server that goes through a CDN, that's software... It's just software all the way down. I mean, it is thousands of touch points of software, for you to hear this stupid analogy that I'm making. And you had to go through that grueling exercise through that much software. And that's just the world now. That's the way it is. It's not going back. We can't unwind this anytime soon.

**Jerod Santo:** \[00:20:12.05\] Right. That's why I said, sometimes you just have to clean up the mess, and then obviously do a retrospective. And one thing we can do is make sure that particular thing doesn't happen ever again. But that's just one of the things. That's what regression tests are for. Like "I'm not going to let THIS particular bug by me and my billion customers again." And I'm sure CrowdStrike, after they go through the PR process -- I mean, not pull requests, but like public relations... Because I mean, their stock was down 23%, I think they have... I mean, they are massively hurt by this. Their reputation is just in the mud.

So they're gonna go through all that, and maybe there'll be people fired... Who knows what's going to happen. But then hopefully they sit down and say "Okay, let's do our analysis, let's do our post mortem, let's figure out how we can make this particular aspect of our business not hurt people again." But that's just one thing. That goes back to the conversation of information security that we were having with Jacob DePriest from GitHub's security team... The challenge of the defender is you have to defend the entire system, and the attacker only has to find one hole. Bugs work the same way, only it's just accidental, and not malicious, you know... And in that conversation I said "I feel like, to a certain extent, resistance is futile." I mean, the defender does all they can. But you're still going to have the attacker succeed sometimes. And it seems like with software systems, the bugs are going to be there. I mean, we haven't found a way of eliminating all bugs. And so how do we build around, fortify, defense in depth, react, respond...? I don't know, I think the -- in one case, this is an advertisement for heterogeneous systems... What's the word? Not a monoculture. Just like in biological systems, right? You want to have --

**Robert Ross:** Yeah, regenerative farming, where you plant two crops in the same plot of land, and they help each other.

**Jerod Santo:** Yeah, exactly. Just diversity inside of our software systems, so that when we have a problem in one particular system, a.k.a. Windows machines running CrowdStrike, that's not a worldwide global outage. That's like a regional, you know, 20% of the internet was down today, guys, versus what it actually -- like, that whole "Let's have multiple operating systems extend not just worldwide, but even in our own organizations", which can be a huge burden, a huge pain, and we tend to want to normalize, and streamline, and formalize a specific stack of software, because it's easier to maintain and manage... But then you just are vulnerable to attacks at like 100% scale of your organization.

So I think one takeaway we can have is "Hey, I'm really happy I'm on macOS today." And maybe tomorrow, all the Windows users will be happy that they're running Windows and not macOS, because something will attack macOS. But the Linux users are having the best time of their life right now.

**Robert Ross:** Oh, yeah. The memes are strong right now.

**Jerod Santo:** Yes... \[laughs\]

**Adam Stacoviak:** Well, it is the year of the Linux desktop, as you know, Jerod.

**Jerod Santo:** It might be.

**Adam Stacoviak:** It might just be, right?

**Robert Ross:** I've heard that the last 15 years of my life, and it has not come to fruition...

**Adam Stacoviak:** \[00:23:32.20\] Here's the throughline to all this though... The throughline is massively deployed software. That's it. Or massively dependent-upon software, in a different scenario, like a dependency. It's that this was everywhere, right? It's that this was everywhere, and then I think very specifically to this scenario there are some layers that may have been not thought so well through. Like literally, if Dave from Dave's Garage, Dave Plummer, is accurate in his description of how they bypassed the WHQL - which is a hardware labs quality system that is there to sign these drivers to run in kernel mode, because it's so... Like, what runs in kernel mode is so limited because of its power. And here they are, able to run there, which is "Okay, fine. If you have to", and Windows and that team blesses you and they put you in the WHQL system to have this signed certificate say "Okay, your driver is blessed. We've tested it to the absolute best of our knowledge. We've put it through all the paces", but then to be able to have a separate folder that you can deploy to at scale, and the driver essentially is an engine that runs code that has not been signed, or not gone through these paces. That alone there is like -- I'd imagine, Robert, as you look at what you do, and how you help folks look at incidents, it's like "When we look at what we've done here, we have to examine the system we've built." Maybe it's anti the Windows way to have this sidecar, this folder of definitions that the driver enumerates over and sucks in, and the driver essentially is an engine that runs unsigned code... That could be true if Dave's accurate. And if that is true, wow. How did that happen? Is that, in quotes, legal? Not so much in the true legal sense, but by the relationship formed between CrowdStrike, the Falcon software, and the Windows team that has WHQL, to allow this to live in kernel land, and not userland?

**Robert Ross:** Yeah.

**Adam Stacoviak:** That's one thing. And then you've got just the ability to deploy at scale, and for the system to do what it should have done. So when an app crashes, an app crashes. When the kernel mode crashes, the system crashes. And it crashes because it has to. It did what it should have done. There was a bug in the kernel driver, that when it booted up, it didn't, for whatever reason, cause an exception at the kernel level... And when the kernel crashes, the whole system crashes. And that's by design. So effectively, it was preventative on purpose, but by a bug or a faulty code.

**Robert Ross:** Yeah. I think as software engineers - and I feel qualified to say this, because it is a criticism - we love thinking that we have invented new things. And every once in a while you just kind of to take a step back and think of "Oh, actually, we've gone through all this process without software. We've already done it." And the example I use all the time is like buildings, and building codes, and structures. And when was the last time you heard of a building catching on fire? I live in New York City. There's a lot of opportunities for buildings to catch on fire. And it does happen. It does happen. But not nearly at the rate that it used to happen. If you think about the London fire, if you think about the San Francisco fire - all of these events that occurred really just triggered new ways of thinking, because of catastrophe. And this will do the same thing. We've been perfectly fine for however long this sidecar technology has been running in production. We've been perfectly fine with that. And then now we're not. Or maybe now we're not.

The same thing has happened -- I mean, we have sprinklers in our buildings because of fires. We didn't put sprinklers there as a preventative measure. We had to have a lot of fires before we said "Maybe we should have sprinklers in buildings." Or "Maybe we should put concrete as the center of the building, so it doesn't fall when it becomes structurally unsound." And because of the hundreds of years that we've had of retrospectives, and all of these learnings from these types of things, we have safe buildings now.

\[00:28:03.02\] Same things with cars. You were saying the kernel panic is a preventative measure... Cars have the same thing. They have crinkle zones, to protect the driver. It's designed to collapse, in certain ways. And we're getting to that point with software more and more. I think the challenge we have for software is it's much easier to do new things with software than it is to do new things with cars.

I can go write a crazy random piece of code and put it in production today. To all the FireHydrant customers, I swear I won't do that... But I could do that. And it would cost nothing. There'd be no labor, virtually. But with these other systems, it's expensive to do new things like that. So the problem, I think, is we're kind of getting ahead of our skis now with software. It's happening more and more that we're hearing about these global outages, because the system is changing constantly, and we're introducing change at the fastest, most rapid rate that we possibly could do it. Like you were saying, it's a bit of a house of cards. This is probably just the beginning. We're probably going to have another massive outage before we really start to learn "Oh, maybe we should scale back how much we're actually changing these really complicated systems."

**Jerod Santo:** Yeah. And the technical details of that hypothetical future outage could be wildly different than this. Whereas maybe you can say "Well, what was the cause of the fire?" "Well, it was a gas leak?" "Well, it was a person who was doing something." There's these different reasons. But they're all kind of like "Oh, something combusted where it shouldn't have, and we didn't have preventative measures in place." With software, so much of it's wildly different, I think it could be very hard.

Now, we have had some motion in the direction of -- I think it was the United States White House recently promoted memory-safe languages, for instance... Rust being, I think, named perhaps, but definitely the Rustaceans were very excited about that particular note...

**Robert Ross:** Yup.

**Jerod Santo:** So we have kind of nudges happening by governments. I know the EU is what I would call more heavy-handed with their regulation around the things you can and cannot do with software. But gosh, it just seems like, because of the diversity in software systems, you can't just put fire suppression in the building and be done. There's gonna be so many different things, I think, so many different regulations and rules and details in order to actually harness up some sort of protection that would be effective against -- like an 80% solution even.

**Robert Ross:** Yeah, I hear what you're saying. It's a crazy thought, and I really hope we don't end up in this world, but... Buildings have regulated materials that they can be built in now. And you can't -- even like children's toys can't have certain chemicals in them. These are all very regulated industries. And could software eventually get to that point where governments are like "You can't use any memory-unsafe language. It has to be blessed by the US government if it's being used for public distribution", period. Could we get there? I don't know. Maybe. We've gotten there in almost everything else. People that have cabins in the woods have regulations that they still have to abide by. So I don't know, it's a wild thought. I've never really had it until you started seeing that, Jerod.

**Adam Stacoviak:** But what you're saying though is we get to the future innovations through a past failure, and retrospectives and learning. That's how we get to the future, is deploying what we think is the best solution, it not being the best solution, there's some sort of catastrophe on a small or large scale... We examine that, we retrospective, we policy, we regulate, we redeploy, and we try again.

**Jerod Santo:** Well, the only other answer is to predict the future.

**Adam Stacoviak:** \[00:31:58.02\] Yeah... And I think that's, to some degree, what developers are trying to do. They're at least tasked with trying to solve the present problem that is futureproof, that has a version of futureproof in it. We hear it all the time, "This is futureproof code."

**Jerod Santo:** I've never said that about my code.

**Adam Stacoviak:** Maybe not, but somebody's like "This will futureproof this."

**Robert Ross:** I have.

**Adam Stacoviak:** Yeah, somebody's definitely said that.

**Robert Ross:** And I have always regretted it. \[laughs\]

**Jerod Santo:** Yeah... Featureproof, maybe. "My code's featureproof." Yeah, not futureproof.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Feature-free.

**Break**: \[00:32:28.29\]

**Adam Stacoviak:** I really come back to this at-scale situation. When we have the larger catastrophes, outages etc. it's because of widely-deployed code... Which is a great thing, because that code is somehow wildly useful. But then, you've got to have certain things in place that once you're maybe at that level, certain things that have to take place to instantiate change. Because like you said earlier, Robert, it's usually change, and not so much that specific change, it's that change plus something else that's the unintended consequence of those two together. And I did look up, by the way, just because I was like "What actually happens when you combine chlorine bleach with vinegar?" It produces chlorine gas, which is highly toxic. So don't do that. And the reaction is just not good at all.

**Robert Ross:** I couldn't remember... It was just maybe bad, yeah.

**Adam Stacoviak:** It's not good at all. I mean, it will damage your eyes, your respiratory system, like your breathing... It's just not good at all. So never --

**Jerod Santo:** Well, we learned that the hard way, you know? Somebody learned that.

**Adam Stacoviak:** Somebody did it.

**Robert Ross:** Yeah, exactly. Now we know. Someone did it...

**Jerod Santo:** Right. I like noticing obscure signs in public places, because they're always indicative of some sort of incident.

**Robert Ross:** Every sign has a story.

**Jerod Santo:** Yeah. I remember I was at a hotel one time and I was hanging out in the pool, or maybe the hot tub, and there's a sign that said "This pool is not for defecation purposes." Yeah, which was a very strange sign. And that might not be verbatim, and I can't remember if it was defecation, or -- it was very formal though, so it probably did say that. And I thought "Yeah, somebody pooped in this pool at one point." And there was an incident where they said "We've gotta put a sign up, because --"

**Robert Ross:** Or someone watched Caddyshack and was just terrified...

**Jerod Santo:** \[unintelligible 00:37:00.03\] Yeah. \[laughter\] So yeah, we learn the hard way, most of the time, because we can't predict what will happen when we combine those two elements until somebody does it.

**Robert Ross:** And sometimes what happens is we go too far, honestly. We governments, teams, whatever it is, the reaction can almost be too much. And I really do hope that -- I mean, this is such a big outage that governments are getting involved, that I really hope there's some restraint in what comes out of this. I do. Because I can see a world where it does get more restrictive in the next few years because of this. A good example is like the TSA. The horrible tragic event, 9/11. But the TSA has been proven time and time again that it's security \[unintelligible 00:37:53.00\] theater, and we spend billions upon billions of dollars on it every single year. And I think that's an example of we overdid it. We went too far reactionary. I don't think TSA should be gone entirely. I think there is purpose to it. But there are plenty of examples of things in the world that we just go too far. For example, moratoriums in code. It's pretty often that you have a couple incidents in a row, and then what happens? Everyone says "Don't deploy anymore. Stop deploying." And then you realize that you have a memory leak, and your system dies anyways, because you're not deploying and not restarting that process. And it dies anyways. So I just hope that we don't go too far with this, that we don't overreact to this massive outage. I want an appropriate reaction to it.

**Jerod Santo:** Right.

**Adam Stacoviak:** Just to add some layers to this, and going back to something you said, Jerod... And it's kind of a sidetrack, but I got the information now. I texted my friend. So I had lunch with a friend of mine yesterday... I won't say where they work, but they work at a bank. And he said they were down for four hours, which I think is a short timeframe compared to other scenarios we heard of. I don't know if that was literally only exactly four hours, or some co-workers were only down for four hours, or the specifics, but let's just say at least a day. This is a 10,000+ organization, when it comes to having laptops, and distributed employees, and branches, and regional HQ, and state HQs, whatever. All these things. So at least a day... And those who did not have their laptop booted down and had to boot up were safe, because there was no reboot required. But for those - Jerod, you would love this, because of your freaking multi-year streak... Or what was the number of years for your laptop? I was listening back to our podcast recently, I can't remember which one, but --

**Jerod Santo:** Yeah, my very first MacBook Pro laptop, I didn't reboot it for over a year. I just was trying to see how long it could go.

**Robert Ross:** \[00:40:01.27\] Oh, did you do like "uptime" in Terminal, and...?

**Jerod Santo:** Yeah, uptime... Well, I had the -- also iStat Menus will show that to you, which I've used for many years... So it's very cool. And then I'll just close it and open it. And I refused to reboot it, because I just wanted to see how long \[unintelligible 00:40:11.07\]

**Robert Ross:** Yeah. \[laughs\]

**Adam Stacoviak:** And you'd have been safe. So the people that had your ambitions, I suppose, on boot time, were safe. But for those who booted down and booted back up the next day, which is a large majority of the people, they had that issue. And they were told to reboot and see if it fixed it. Obviously, it didn't. And that if that didn't work, they literally had to go to the localest IT center for them to have a person, like you had said, Jerod, touch the machine, do something to it, and then it was good to go again.

**Jerod Santo:** Nick Burns?

**Adam Stacoviak:** But could you imagine the cost of that enumerated across all the scenarios, across the entire globe that was affected by this? Was it 8.5 million Windows computers were actually affected in a single day? There was a larger deployment, but 8.5 million, I think, is the current number, if it's accurate.

**Robert Ross:** That's it.

**Jerod Santo:** I think that was just one section of it, wasn't it?

**Adam Stacoviak:** Well, I think there was the crash. There was like that many Windows computers that crashed. I don't know if that's the only computers that were affected necessarily, but those were the ones that were in the critical sphere of "should be up, but not up", so...

**Robert Ross:** Yeah. And one of those servers was a SQL Server 2000 that --

**Jerod Santo:** Right, or IIS...

**Robert Ross:** ...500 other servers were connecting to... \[laughs\]

**Jerod Santo:** Right. Yeah, the cascading failures is massive. I just feel like Nick Burns had his best day of work ever. Do you guys remember Nick Burns from Saturday Night Live? This is your company's...

**Robert Ross:** Your company's computer guy.

**Jerod Santo:** Your company's computer guy...

\[00:41:58.21\]

**Jerod Santo:** Yeah, it's a Jimmy Fallon character. It's one of his better characters. Not a huge Fallon fan myself, but this was a good one, where he was just the most obnoxious computer guy stereotype ever. And nobody wanted to go ask him for help, because he was going to just denigrate them, you know... And I think his catch line was "Move...!"

\[00:42:28.28\]

*Move...! Was that so hard?*

**Jerod Santo:** So I think Nick Burns had a great day, you know? He gets to go around to everybody's computer and "Get out of the way, I'm gonna reboot this thing."

**Robert Ross:** Yeah. The heroes, honestly... I mean, the amount of patience that you would have to have on that day, Saturday, Sunday, today...

**Jerod Santo:** Oh, gosh...

**Robert Ross:** Oh, my gosh... Could you imagine booting everything into safe mode, and fixing -- I just couldn't even...

**Jerod Santo:** And just have a list of hundreds of computers you've got to do next... You're like "Alright, just one by one. Bam. Bam."

**Robert Ross:** Yup... Oh, my gosh.

**Adam Stacoviak:** Yeah, that's true. It was a Friday event, that happened over the weekend... I mean, not even just those affected by obviously the downtime in their travel and their plans, or their work, it's now -- like, wow. IT has a big job to do. I was just watching the first few 30 seconds of -- well, I'll link up in the show notes... Nick Burns, your computer guy, or your company's computer guy. He's like, something about a virus, and he's not gonna be able to reboot.... Like, he just almost described what happened. "You've gotta go in and fix it." I'll drop it in the notes, but... Or maybe even in the audio. We'll see.

**Robert Ross:** I mean, this outage, this CrowdStrike outage really hit every trope. It really did. Deployed on a Friday... \[laughs\] Global outage...

**Jerod Santo:** Windows... Yeah, I mean, the whole -- it brought in the operating system wars...

**Robert Ross:** It really hit so many checkboxes.

**Jerod Santo:** Memory unsafety... Of course, there was a lot of C++ versus Rust conversations...

**Robert Ross:** Yeah, I saw a lot of flaming of C++, and... That's what kind of irks me, because I'm like, I don't know, the stuff that you probably tweeted this tweet from is probably running C++ in some way, shape or form.

**Jerod Santo:** Certainly somewhere in the stack, yes.

**Robert Ross:** \[00:44:22.11\] Right? I can't even think of it. I think that Twitter/X runs on Envoy, which is written in C++. So... \[laughs\]

**Jerod Santo:** Right.

**Robert Ross:** I don't know \[unintelligible 00:44:29.18\]

**Adam Stacoviak:** I was thinking about this actually from an incident standpoint. And Robert, you know a thing or two about incidents, right? You know one or two things about them at least...

**Robert Ross:** Yeah, I think so. I mean, test me out here.

**Adam Stacoviak:** Just checking. So, specifically to my friend, in the bank situation... Their team had to raise an incident, company-wide, that wasn't even their fault. It wasn't like their IT department messed up. So can you describe what you hypothesize for how the incident, in a well-managed IT/technology stack organization would and should react, when it's not even their problem... It's their problem, obviously, but they didn't do it. And the fix is not clear, because it's upstream. How do you think this percolated inside? What's your hypothesis?

**Robert Ross:** So that's a good question. I mean, for an incident like this, like you're saying, it's on the outside of your controlled world. It's challenging. So your job at that point for whatever these teams - the banks, the call centers, all these places that were down because of this outage - the first job is going to be containment and workarounds. You're going to try to find a workaround as fast as humanly possible. And those teams - what they're going to do is they're going to work within their controlled world. So an IT team at a bank probably is going to tell everyone at the bank impacted "Own the communications. It's not a bug that we're causing. Here's the news." I'm sure everyone probably knew at that point. "Here's what you can do to try to fix it." Right? "Here's how you boot into safe mode. Here's how you do x."

And the incident responders at that point, they're just going to be trying to create a perimeter where it doesn't get worse, and they can do things a little bit better. A good example is, if you think of a wildfire, there are firefighters that are fighting the fire - that's CrowdStrike - and then there are firefighters up the hill, chopping down brush, cutting down trees, trying to stop it from going any further. That's kind of what those teams are going to go -- that's the mode that they're gonna go into. I can't say for sure, but in the situations I've had a vendor outage, that's the first thing we do, is we try to look for another route.

This happened recently... I mean, our CDN provider -- incidents are natural, so I won't name them. I'm not blaming them. But they had an incident a week and a half ago. Only impacted Newark. Pretty small. And we can't control that. But we had to own that, and we had an incident opened internally, because all of the East Coast users were going through this point of presence, and they were getting 502s.

So what we did is we actually just rerouted traffic; we just took our CDN out of the loop. And that's how we got around it. That was the only thing we could do. And I think teams are going to have to start thinking about these emergency routes more and more, especially because of this CrowdStrike outage. They're going to be like "What is our risk surface area if we use this vendor, and that vendor goes down? Are we screwed?"

\[00:47:53.29\] I think a lot of companies are going to start thinking that now, just because of this one outage. It's going to be pretty present in people's minds. And the management process is going to have to change. You're going to have to create like your go bag of incident management when it's out of your control.

**Jerod Santo:** I remember doing these practices back when I was in school, which was an MIS degree with a CS minor \[unintelligible 00:48:13.08\] which is management information systems. I probably haven't said that phrase since I graduated, but... I remember them doing these practice routines - business continuity planning... I'm trying to remember the acronyms as well. Disaster recovery... You would actually write down what are all the things that could possibly go wrong - which is a fool's errand, by the way, but you'd still try... You'd do your best, right? There's the predict the future part...

**Robert Ross:** You can close...

**Jerod Santo:** There's your predict the future part. And then you'd have to come up with a game plan for each of these situations. Like, how are we going to mitigate the impact? How are we going to continue to run our business? What are the workarounds? What are the next steps? etc. And I did enjoy those processes, except for the writing part, of course, because I was in school, and nobody wants to write... But I thought it was very useful to think "Okay, what are kind of a list of things that are likely to happen?"

**Robert Ross:** Do you remember any of them?

**Jerod Santo:** A lot of them were -- well, they were completely made up businesses, of course. So it's all kind of just arbitrary, because we didn't actually have any businesses. And so we were like "You're the CTO of X-Corp, that does Y thing. And now what could happen?" So you had to kind of like make up "Here's our technology stack, here's what we're doing", and then "If X then Y." And no, I don't remember any of those particular details. But I did recently visit a nuclear power plant here in Nebraska, and the amount of things they've thought through, and the amount of planning that they've done, and building hedges, so to speak, around almost every possible thing that could go wrong at a power plant. It's actually -- it's laudable, it's amazing how thorough these folks have gone through and prepared for umpteen potential things.

And it made me realize "Oh, in software we just kind of fly by the seat of our pants, don't we?" \[laughs\] Of course, they move way slower. I mean, that's the trade-off, right? Everything moves super-slow at a nuclear power plant. It has to, because the consequences of disaster are so large. And maybe the fairytale we've told ourselves -- and maybe it's gotten less and less true over time, is like the consequence of software disasters isn't that big.

**Robert Ross:** Well, we even had the phrases for it. I don't think we were pretending at all. What was it, "Move fast and break things..." \[laughs\] How many times was that said in Silicon Valley?

**Jerod Santo:** Right....

**Adam Stacoviak:** That got abused, though. I mean, I think that at the time that began at Facebook, so that was a Facebook-born ideation... And I think it was a culture because they were in an innovation state. They were not in a -- I mean, I guess they were becoming more and more widely deployed, but they were also a web service. So it wasn't like "Well, it's installed, and it's going to crash something." So I think there's scenarios -- now, obviously, it's a social network, and there's a lot of people out there that are affected by abuse, harm etc. that can happen in social media, which I fully agree to. That's just how it kind of just sucks. And so the "Move fast and break things" moniker to a lot of people is just not a good thing, obviously. But to a technologist who's trying to innovate, that's a very admirable thing... Like, "Yeah, let's move fast and break things", because what happens is the iteration cycle to learning happens faster. This cycle you described with the sprinklers. Well, it doesn't happen over decades, or regulated timeframes. It's minutes to hours to deployments; there could be hundreds in a day. And I think when you're in an innovation state like that, it is credible to pursue that kind of goal. But for everybody else to cargo-cult called that idea in places it doesn't apply is the danger zone. In places -- like, CrowdStrike should not deploy this idea of "Move fast and break things." And maybe they did move fast and break things.

**Jerod Santo:** \[00:52:15.16\] Well, it's interesting in that particular context, because they are fighting adversaries, who are also moving fast in order to break things... And so this goes back to the trade-offs that Robert was discussing. I mean, I can understand the ethos that said "We need a way to deploy to these machines outside of going through the entire process with Microsoft and the kernel stuff and the signing. We need a way to get our fixes out there before they attack all of our customers. That's what they're paying us for." And so I can see that trade-off of like "Well, how can we do that? Well, let's develop a system where we're going to just sideload some rules, and we'll try to make it innocuous, and we'll have --" I'm sure there's CI/CD, and there's test suites... I mean, this is a publicly-traded company. I'm sure they have infrastructure around the code they're rolling out. I may even be giving them too much credit. I don't think I am. I would be shocked if we learn that this code went out and one person wrote it, and nobody else looked at it... I doubt that's the case.

**Adam Stacoviak:** The anxiety of that code review, Jerod... A little throwback.

**Jerod Santo:** Yes. And so I can understand that push and pull. I mean, we have this even inside of like the App Store, where it takes forever, in software terms, to roll out an app update. But if you have your logic server-side, and you can push even web components into a view, you can actually update your app throughout the day... You can basically \[unintelligible 00:53:34.24\] what they're doing with CrowdStrike, with Falcon.

**Robert Ross:** But over the air updates are exactly what you're saying... Apple restricts them pretty heavily for their platform. But I like what you're saying, that CrowdStrike - this is an advantage. This is probably something they have bragged about in their sales cycle. Like, you don't ever need to do an update of this agent, it just will update itself. This is how I understand how it works. And when new vulnerabilities come out, we will cover you, and protect you. That's a huge selling point. Why would you want to get rid of that?

**Jerod Santo:** Come on, Adam, why would you want to get rid of that? Don't take that away from us... \[laughter\]

**Adam Stacoviak:** No, and I agree with that. So the question comes back to what can we do to learn from this? I've heard -- did you mentioned this in News, Jerod? I've read and listened to several things...

**Jerod Santo:** I don't know...

**Adam Stacoviak:** eBPF, and how to be this could be -- the way that eBPF works. And I loosely -- I mean, I'm steeped in it to some degree, but also very beyond even novice. I'm just like "No." I'm a green person when it comes to what eBPF is, and how to describe it. But from what I understand, this could be a different architecture that could prevent this.

**Jerod Santo:** Well, what's interesting is that CrowdStrike is actually using eBPF in their Linux client, is what I read from Brendan Gregg's article about eBPF. So they're very well aware of it. It's a way to do this that's safer, and it's in development inside of Microsoft to provide eBPF support for Windows.

**Adam Stacoviak:** This was you then. Thank you. I love Changelog News, by the way. Hey, y'all, listen to this... Changelog.com/news. Subscribe today. If you're not, you're just missing out.

**Jerod Santo:** You're missing out. So Brendan Gregg has this post which was in Changelog News called "No more blue Fridays", and it's his writing of why eBPF will be potentially another tool in our toolbox in order to achieve what they're trying to achieve without some of the dangers latent in the current Windows-based rollout. However, the in-development version of eBPF will not have all the features it has in Linux. And so could CrowdStrike immediately use it in order to replace their current rollout? Survey says probably not. It had to be much more full-featured in order for that to be a thing they could start using as soon as it's shipped. But it's a direction.

**Robert Ross:** Well, what better way to get R&D budget to make that go faster than what just happened, right?

**Jerod Santo:** \[00:56:11.04\] Well, there you go. That was kind of Brendan Gregg's point, at the end... And of course, I think he has a dog in the hunt. He's very much invested in eBPF - which is open source and all that, but there's businesses built around it. But he said "Hey, here's your great moment. If you are paying for computer security software, and you are a paid customer of these entities, you could push them to make this eBPF path happen faster and better, because you're their customer." So that was his call to action at the end of that post.

**Adam Stacoviak:** And what would happen is that is at the kernel level -- do you know much about this to describe what would happen in this hypothesized world existed, this future development, how it would work to prevent this kernel from crashing the system, or booting without it, or being more safer?

**Jerod Santo:** No.

**Adam Stacoviak:** Okay. Well, that's what I was thinking of, was "How can we--" I guess - and I'm not a Windows developer, so by all means, just like slap me in the face after this one, but I'm just thinking, you have a dump, a crash dump, whenever the blue screen of death comes up. And the system knows probably what crashed it. At least if it's a driver in kernel mode, what's crashing it. Could you not just offer the user the option to boot sans that third party -- especially with third party software, temporarily. Now, I get that this is cybersecurity software --

**Jerod Santo:** What do you mean?

**Adam Stacoviak:** Well, I'm just thinking, if the kernel driver of CrowdStrike - a third party, not a first party native operating system, kernel driver is crashing the system. So by moniker, it's a third party. Could you not say "Well, this system knows that this third party driver's crashing the system. Do you want to boot without it?" And maybe that's what safe mode does, but I mean, why couldn't that be a non-safe mode thing? I don't know. Because maybe those systems could just have been booted by everyday people... It's about UX and user friendliness. Now, I don't know if that's secure... Robert's shaking his head a little bit...

**Jerod Santo:** Are you saying the system knows that the system is crashing?

**Robert Ross:** It's like a layer on a layer, right?

**Jerod Santo:** You're throwing in another layer that doesn't currently exist in there? Is that what you're saying, Robert?

**Robert Ross:** I think... I mean, I'm not even gonna try to pretend I know how these kernel -- I'm gonna call it an add-on. See, that's how inexperienced I am with it. \[laughs\] Like, plugins... I don't want to pretend to know, but I think that what Adam is saying, I think the challenge with that is it's just more complexity. And is the risk worth the reward? And can this system -- you know, think about the amount of trial and error you'd have to go through for that to work really well. And where does the operating system even store that knowledge that that plugin has borked? You're at the point of it booted.

**Jerod Santo:** That's my point, is like it's crashing currently.

**Robert Ross:** You might not even have filesystem access yet. Like, that's how early in the ones and zeros we are. So I think that's the challenge, is you've got to put it somewhere.

**Adam Stacoviak:** So let's zoom back out one layer then... My thought is not literally how we deploy the fix. Like, literally, this is how we solve it. But from a user experience standpoint, the reason why the outage perpetuated to its length was because everyday people could not solve their own problem with the system. And I'm just suggesting, is there a path where you can provide everyday users of their computer some version of bypassing this crash? That's all. And I don't know that answer. I'm just hypothesizing that the reason why it perpetuated was because people who -- like, IT, basically. People smarter than the end user from a technical level, in most cases, standpoint, could not solve. They had to come in and be deployed, to literally open up the laptop, or... Could you imagine trucking in a workstation? Not everybody uses laptops these days. Some people use workstations. But you had to take the thing in to the people. They had to pull a monitor into it, a keyboard into it, and somebody else had to touch it. I'm just thinking, is there another way where the end user could have done more of this in line too, rather than simply waiting?

**Jerod Santo:** \[01:00:25.14\] I don't think Nick Burns wants the end user to do it.

**Adam Stacoviak:** No?

**Robert Ross:** Well, I remember the days of Windows -- remember the days of Windows where it was remote PCs, and the only thing that that station was responsible for was basically connecting to something else that was doing the compute? You know, maybe that comes back. Maybe that's a world that --

**Adam Stacoviak:** Oh, yeah. Client-side computing was thin clients... That was a Citrix, and -- that's my roots, man. I grew up in IT, in the early 2000s, I worked at an IT company that deployed Citrix and VMware intensely. We had our own colocation system at a data center... You were talking about the power plant, Jerod. Data centers are similarly, if not equally, thought through.

**Jerod Santo:** Not equally... \[laughs\] Not equally.

**Robert Ross:** Yeah, I'm gonna say, maybe not all the way... \[laughs\]

**Jerod Santo:** Nuclear power plants are so regulated.

**Adam Stacoviak:** Well, that's why I said similarly, if not equally. There's a version of the thoughtfulness, let's just say.

**Robert Ross:** I'm gonna say, I hope they're not. I hope that nuclear power plants have more thought.

**Adam Stacoviak:** Okay, I will give you that.

**Jerod Santo:** I came out feeling much safer about nuclear power through this tour, because of how stinking serious they are about safety. But anyways...

**Adam Stacoviak:** Yeah. Well, the point was, I agree, Robert - maybe thin clients are \[unintelligible 01:01:38.05\]

**Robert Ross:** What's old is new again, maybe.

**Adam Stacoviak:** Well, isn't that what the web is? Jerod was talking about that, it's like a widely deployed operating system. Most of us are on web apps these days anyways... Most of what we do is through the browser. Right now we're having this discussion through the browser. Video, audio, recorded locally, streamed back up, in most cases doesn't fail... Really good software, but it's web software. We have to use a special browser, which is a whole different fight...

**Jerod Santo:** Web software goes down, I'm just not sure exactly what we're solving with this moving the furniture around.

**Robert Ross:** So what I had in my head is - I saw a picture through all the news cycles since the CrowdStrike outage, it was actually a gate agent's computer. It was at the gate where you board the plane, and it had the blue screen of death. And in that situation, does that computer need a CrowdStrike kernel agent running on it? Maybe it does, maybe it doesn't. I don't know. But I think where I'm going with this is, does that computer just need a screen, a mouse and a keyboard that's hooked up to something else down the hallway, that's one station that's powering 20 gates. And it's much easier, it's a smaller surface area... I think we're getting to that point. Networks are getting fast enough to do that type of thing. Maybe it's too far... I'm not sure, honestly. I mean, some companies have tried to do this with like gaming, for example.

**Jerod Santo:** Mm-hm. They've all failed so far.

**Robert Ross:** It failed so fast. But maybe that was too far, right? Like, that's hard to do. You need super-low latency video feeds, and all that...

**Jerod Santo:** Right. And it was Google trying to do it. It wasn't some \[unintelligible 01:03:18.07\] I mean, they have the resources. If anybody could accomplish it, you'd think Google.

**Robert Ross:** Yeah. And Microsoft. Xbox was trying to do it, too. I forget the name...

**Jerod Santo:** Yeah, true.

**Robert Ross:** But maybe it's like that type of world, where it's just a keyboard, a mouse and a screen, and it's hooked up somewhere else. Maybe that's where we go to. You reduce the surface area, therefore you reduce the amount of potential outage.

**Adam Stacoviak:** I think in this case that hypothesis has merit only because we know what we know. It's not because we knew what we know prior to, and that's the plan. Because I think even in that scenario you have now a single machine dependency of many dependencies. And now it's like, well, when that one machine is down, it's not just one person. The outage affects many because of the design of, you know, dependency.

I am pro thin client, though. I'm pro what Citrix did back in those days. It was a very cool thing. I mean...

**Jerod Santo:** \[01:04:18.26\] I hated it.

**Robert Ross:** \[laughs\]

**Adam Stacoviak:** Well, so for certain tasks it was perfect. I hated it too, Jerod, because I --

**Jerod Santo:** Why are you for it then? \[laughter\]

**Adam Stacoviak:** Well, in my scenario. I was for it for everybody else, though.

**Jerod Santo:** Oh, for everybody else.

**Adam Stacoviak:** Oh, yeah.

**Jerod Santo:** "Oh, I'm for it for everybody else", yeah.

**Robert Ross:** Yeah. I think it's cool tech. The ergonomics of it were terrible.

**Jerod Santo:** Yes. I agree, the tech was cool. And for certain scenarios -- you know, I helped out... I ran network administration for a company that did commodity training... And so they had machines in silos. Grain silos. And those places are dirty, nasty; corn, chaff etc. It's not the place where you're going to have a server farm. Or you wouldn't even want a PC, because eventually that tower is going to get all kinds of stuff into, and it's going to break down. And so in those cases, the thinnest client possible, with a Citrix connection, was the answer. It made tons of sense.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But in many other use cases, you've got your employees sitting in their office, and they're Citrixing into somewhere else, to run with this latency... And it was slow, and they didn't have access to local resources... In those contexts, I was like "This is ridiculous." I have a beefy computer sitting here, that's connecting to a remote machine.

**Robert Ross:** The grain silo didn't have good internet connection... \[laughs\]

**Jerod Santo:** Well, that was another problem. A lot of times we had to create internet connection for them, in order for them to actually connect back to Citrix. And so that was -- I mean, it was... You're trying to do remote computing in a grain silo; it's not going to be easy, no matter how you do it.

**Robert Ross:** Right.

**Break**: \[01:05:50.26\]

**Adam Stacoviak:** When you're at scale, like CrowdStrike was, and you deploy bad code, regardless of which theory you go with - bad code done on purpose, rogue, whatever, or... I mean, there's people saying this was planned.

**Jerod Santo:** I haven't read any of that stuff, but I'm sure it's out there.

**Adam Stacoviak:** Well, you know, anytime something like this happens at a scale like this, you've gotta wonder... We live in a simulation lately. There's strange things happening every single day, that has been basically unprecedented. Every single day. So the new precedent is unprecedented, you know?

**Jerod Santo:** Right.

**Adam Stacoviak:** And I don't want to hypothesize here, because that's not what we're trying to do, or not what I'm trying to do... But when you're at scale like this, it's obviously an attack surface of some sort. Whether it's bad code, an incident, or just simply a bad day, a bad Friday, a bad weekend. And how can we give CrowdStrike the ability to do what they want to do, and have the sales pitch they want to have, without having the opportunity for outage like this? And then all the others, they're gonna follow in their footsteps. You know, who else -- what other software will be at scale, and the attack surface? ...whether it's bad code, planned, intended, rogue, whatever. They're all similar scenarios, it's just a matter of how the incident percolates.

**Robert Ross:** I mean, the surface area of which software can be impacted now, either just through sheer outage, or security, is staggering. I mean, there was -- I don't know, maybe a month and a half ago, two months ago, there was... It was newsworthy enough for the New York Times. I saw the word "Postgres" on the front page in New York Times, and I was like "What is this?" And you go and read it, and... It all boils down to - there was a state actor that gained the trust of the core team for Postgres, and they started submitting patches that fixed real things. And then they submitted something that was very subtle, that was caught, on accident, by another engineer years later. When they eventually figured it out, they were like "Holy crap, this person just gained our trust by submitting real stuff, and then snuck something in." And how do you defend that? You just can't. I don't think you can.

**Jerod Santo:** That sounds a lot like the xz thing. Is this in addition to that?

**Robert Ross:** I think that's what I'm talking about. Yeah. I couldn't remember the exact name of it, but...

**Jerod Santo:** Yeah, so I don't remember the Postgres part, but certainly this xz backdoor was placed by a state actor.

**Robert Ross:** \[01:11:59.18\] I think it was someone working on Postgres. And then they got down to that level. That's how \[unintelligible 01:12:02.23\]

**Jerod Santo:** Gotcha. Fair enough. Well, xz is a dependency of many software packages, and was close to being actually distributed via apt and other package registries prior to it getting found out, on accident, by a developer. So yeah, crazy times, for sure.

Definitely not tinfoil hat, Adam, to ask the question of "Was this mere incompetence, or was this actually an attack?" Because attacks happen, and they are happening, and they will continue to. And so those questions do have to be asked. I think, in this particular case, I jumped immediately to incompetence, Occam's Razor style, because I know how complex software systems are to roll out updates. I was like "Oh gosh, somebody had a really bad day." But that could be a wrong conclusion to jump to.

**Adam Stacoviak:** Well, I think in the case that you're talking about, Robert, with Postgres, if this is accurate, it's code analysis. You have to analyze, especially in open source. But when it's closed source, like CrowdStrike, and a definition update, all you can do is rely upon that team, that company to be mature enough to have protections in place. When it's proprietary, closed source, there's nothing you can do from a scale point to analyze the code. From a different route with open source, you could do a lot of things. You could pay attention to where the patches are coming from...

I guess, in this case here, if the patch was "Hey, Robert, here's the patch. I'm Adam." Let's just say it's you as the core committer and I'm the friend who's trying to be friendly... "I've solved this problem. Here you go, Robert." And you just take my code, and maybe you actually deploy it to Postgres, so it's coming in signed. Maybe that's an example of where you really can't analyze very well. But if you had to - say Robert is signing this commit, but the location or the source of the commit is from an outside source helping out because it's open source, then you could at least have a waypoint to begin to track if you're doing code analysis.

I think that's the area where I'm really confident and looking forward to more and more being done... Because when you can analyze the Git repository, and the graph of things happening in a codebase, there's a lot you can pull out when it's like "Okay, that's a smell." You've got a brand new committer, you've got somebody being nurtured or whatever you want to call it to kind of get their trust, over multiple years, even. There's layers of anomaly that can be identified, because of the way open source works, if you do specific code analysis. So that's where I'm hopeful.

**Robert Ross:** Well, I'm hopeful that we can keep open source going the way that it is for longer. I do think at some of these risks that are coming up with state actors infiltrating through years of building trust, and accidental attack vectors coming through, over time I think that people are going to start to get skeptical.

**Jerod Santo:** Yeah.

**Robert Ross:** And that's going to be a tough moment. We're going to have to kind of start thinking about that. I'm starting to hear more and more about people don't want to use third party libraries for common things, just because of the risk. For example, attacking a JavaScript Npm package that's widely used, that does a pretty simple thing. Candidly, it's less risky to just do it yourself sometimes. And that's a calculus that companies are going to have to start thinking about.

**Jerod Santo:** Yes. I mean, I think every developer should make that calculation every time they're going to pull in a dependency. And I'm not saying don't pull the dependency in, but I think you do have to think through that, and I think we're learning that, and hopefully our collective immune system will react.

I do think that these state actors being outed, every once in a while at least, will boost our immune system as open source maintainers to be like "Let's kind of be a little more leery of the contributors who are coming around", and just that whole "Kumbaya, open, open, open, we're all friends worldwide" thing that was going on when open source began.

**Robert Ross:** \[01:16:22.07\] That's gone.

**Jerod Santo:** It's just not the same world anymore. And so maybe we just won't be fooled next time, hopefully, by somebody who's trying to butter us up in order to take advantage of us.

**Adam Stacoviak:** Do you think there's a way to label software at scale? Like an xz.

**Jerod Santo:** What do you mean?

**Adam Stacoviak:** If you're a contributor to xz, do you know how much it's deployed, and you understand how crucial your core role is to that software?

**Jerod Santo:** Yes, and no.

**Adam Stacoviak:** Yes and no, right? So --

**Robert Ross:** Yeah... Probably hard to feel the actual gravity of it.

**Adam Stacoviak:** Right. I'm just wondering, is there a way to -- and I'm literally asking the question without having put any thought into it, so if it's naive, slight me around, if you have to.

**Jerod Santo:** As we do.

**Adam Stacoviak:** Yeah. I'm just wondering, is there a way to elevate certain software, maybe even by analysis, to understand its deployment or its dependency levelness, I suppose, at scale? I'm sure CrowdStrike knew how at scale they were. This was not your unknown to them.

**Jerod Santo:** Sure.

**Adam Stacoviak:** So this is not an example. But xz and the folks behind that, who were being groomed, for lack of better terms, over a year or more, a very long, patient amount of time - do they understand how crucial the software is that they're in control of, so that they can have that positioning you've just said, which is "Hey, pay attention to strange incoming behaviors that is trying to get into your codebase"? I just don't know if like everybody who's in the open source world - they may care, but do they know how crucial their software is? I don't even know if that's like a good question, but I'm just thinking, is there a way to label something "Hey, you're a scaled software. You're widely deployed", and there's some way to elevate them to a different level, at least by label, so that there's an awareness that if there's a malicious attack on that codebase, it has effects?

**Robert Ross:** I feel like GitHub could own that, honestly. I mean, they know how many times a repository is committed, they how many times it's even looked at, just pageviews in general, they know the number of stars on it... And maybe it's not GitHub, maybe it's some other program, maybe it's government-sponsored... That goes to these maintainers and says, "Just FYI you're on our list." \[laughs\]

**Jerod Santo:** Ooh... "You've just made the list."

**Robert Ross:** Yeah. \[laughs\] And in a way it's like "Congratulations, you've built such valuable software it's now a national security threat", but I hear what you're saying. I think it's hard. I think it's hard to -- because it takes the steam out of it. It takes the altruism out of it sometimes too, for some people that just want to do a good thing. When the barrier is high, then people won't do it, and I think that's challenging.

**Jerod Santo:** I think the maintainers of scaled software know. I think that they're just wildly under resourced, and exhausted, and can't possibly sometimes care enough anymore, because they've cared so much, for so long, for so little. So I think for the rest of us, I did not know how big xz was in terms of its dependency graph, the other way around; how many dependency graphs it was in, which was many. But I'm sure that the author of xz has an idea. That's why I said yes and no. He may not know exactly how big his software is, but at a certain point, when your package is deployed across all these distributions and stuff - yeah, you understand that "Wow, this thing is really reaching lots of places." And so I think that there's some of that gravity there. But for the rest of us, that might be useful, to have that list of softwares that are considered national security importance, or whatever it is. Like, they aren't the threat, but they are of potential threat, because of their situation.

**Robert Ross:** \[01:20:27.01\] I think one example of a developer who just built an open source something and took it down not realizing the true scale of this thing was Leftpad in 2016.

**Jerod Santo:** Oh, yeah.

**Robert Ross:** That one was wild.

**Jerod Santo:** That was.

**Robert Ross:** So many packages couldn't be installed, and deploys stopped for hours because of that. And it was just some -- I forget the exact context, but I think it was like some dispute \[unintelligible 01:20:53.11\] "I'm gonna take down the package you're using."

**Adam Stacoviak:** Wasn't that political?

**Robert Ross:** Yeah, I don't remember exactly what it was.

**Jerod Santo:** I don't think Leftpad was political. Leftpad was a long time ago. It was a political one.

**Adam Stacoviak:** Yeah.

**Robert Ross:** They just deleted it off of Npm package registry, and then chaos ensued.

**Jerod Santo:** Yeah. I think Leftpad might have been the one where they had another package called Kik, or Sidekik, and another company -- a company, not another company. This might not be Leftpad either. But this definitely happened. There was a company, a startup called Kik, and there was a package called Kik, I think owned by the Leftpad owner, if it's coming back to me. And the Kik company contacted Npm and wanted the name, but didn't have the package name. And I think Npm granted them access to the Kik package name, basically kicking it off the Leftpad owner, and then they got mad and just pulled Leftpad and all their stuff. I think they pulled all their stuff. I'm pretty sure that's Leftpad. It may be a different one, because there's been so many at this point... But that definitely happened.

**Robert Ross:** There's a Wikipedia page for it...

**Jerod Santo:** Is there?

**Robert Ross:** ..."Npm Leftpad incident", that I've just found. And yeah, you're right on the money with what you've just said. But what's kind of crazy about that? And it kind of goes back to what I was saying about own your software a little bit more... Leftpad was not a thing that needed to go out over a network, and download a package, and pull it down. Any engineer should be able to write what Leftpad did.

**Jerod Santo:** Absolutely. Or copy-paste the function.

**Robert Ross:** Or that, yeah. Because I mean, you can use somebody else's code with a little copy-paste, and remove that dependency. Not because you can't trust the author, but because we cannot trust the network. That's the problem with Npm. We can trust the authors in most cases, but we cannot trust the network into the future. You can maybe trust this today, but you cannot trust the network tomorrow. And so copy-paste that sucker. Vendor it. I mean, that's what we used to call it in the real world, vendor it. Which is to pull it into your repo, check it in, and leave it there.

**Robert Ross:** I remember doing that. Did you see that one - it was a couple of weeks ago, that a domain expired, and it was hosting a JavaScript package...

**Jerod Santo:** Polyfill.

**Robert Ross:** And someone else bought the domain, put something not good there... Same domain path, and all these websites that were resolving that domain to the new source were impacted. It was like 100,000 websites.

**Jerod Santo:** You can't trust the network.

**Robert Ross:** Yeah. So that's a good way -- you can't trust the network. I think it's a good way to --

**Jerod Santo:** Especially over time. Because that's what we think of today, but over time the network changes... In ways that we wouldn't expect. Nobody expected Polyfill.io to change ownership... Or whatever the CDN that was hosting Polyfill.

**Robert Ross:** We put some stuff through proxy, basically, and that kind of does --

**Jerod Santo:** You proxied yourselves, and let it --

**Robert Ross:** The gems, and some stuff, and that way it's kind of a -- if it's there, we trust it, kind of thing. If you try to pull something else in a bundle install, yarn install, whatever it is, go get, it goes through there, and if it's not there, then it kind of triggers a "Well why are you trying to get something that isn't in this? It's not blessed yet."

**Jerod Santo:** And it is a proxy that you guys run.

**Robert Ross:** Yes.

**Adam Stacoviak:** Is this like a Artifactory kind of thing, where you pull --

**Robert Ross:** Yeah, it's some other -- I forget the exact tech, if I'm honest... But yeah, similar to the Jfactory -- or JFrog Artifactory. Yup.

**Jerod Santo:** \[01:24:21.04\] Yeah, it's a great idea. Just get yourself layers in between you and the unknown. I mean, that's wise practices for sure.

**Adam Stacoviak:** Well, that's I guess rich man's version, or rich person's version of vendoring. Same idea, except for it's --

**Robert Ross:** \[laughs\]

**Jerod Santo:** Yeah, you vendor it to a server.

**Adam Stacoviak:** It's vendoring it. I mean, this is a tale as old as time, basically. Ruby had it first.

**Robert Ross:** Well, like I said, what's old is new again.

**Jerod Santo:** Yeah, exactly.

**Robert Ross:** We're gonna go back to all these ideas in some way, shape or form, I think.

**Jerod Santo:** Yeah, we're going back to thin clients, apparently.

**Adam Stacoviak:** Well, I think even that, you have to have an incident like this, to have a discussion like this that says "These older ideas that were probably pretty good..." Maybe at the time it was less modern to do it, and now it's more modern, so maybe there's... But I suppose, to your point, Jerod, with your mem, "I deployed software today, so it's modern." Didn't you have a meme out there somewhere that said --

**Jerod Santo:** Oh, yeah. Mostly a gripe. People always advertise their software as modern, which just literally means that it's just a newer thing. It's not a feature, it's just that you started coding it six months ago.

**Adam Stacoviak:** Right.

**Robert Ross:** At some point, someone's gonna start bragging about how much their software hasn't changed.

**Jerod Santo:** Yeah, I think vintage software should make a move. Like "This is classic. This is vintage."

**Robert Ross:** Yeah. When I was a young gun engineer, and I heard about these banks using COBOL still, and I was like "Ah, what losers." And now I'm like "Hey, whatever. If it works..." I can look at my balances and I've never had an issue, and I can always charge my card... You do you. Maybe calcified software has a purpose in the world, where it just gets rarely touched, and we're just happy about that. I'm leaning that way more and more. Do we need to keep changing the software? I don't know.

**Adam Stacoviak:** That's not really good for your business though, Robert...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I mean, if you advocate for that...

**Jerod Santo:** Robert's out there, "More incidents! We need more incidents!"

**Robert Ross:** If my investors, my board hears that, they'll be like "What are you doing...?" \[laughs\]

**Adam Stacoviak:** "What are you saying, Robert?!"

**Robert Ross:** "Stop right now..."

**Adam Stacoviak:** Well, I think even if you have \[unintelligible 01:26:16.00\] software, there's still bound to be incidents of some sort. I mean, there's still going to be -- no one's gonna listen to you, Robert. No one's going to do that, right?

**Robert Ross:** You know, I recommend that... \[laughs\]

**Adam Stacoviak:** Well, this has been fun, digging into the details, I think... It's fun to speculate out. I do want to, again, mention I love Dave Plummer, and his channel on YouTube is a great resource. I always appreciate what he shares. I probably listened to his video twice, just making sure I kind of understood some of the mechanics behind it. Because I really want to understand to what degree does this software actually operate on Windows? And I thought that was pretty fascinating, to kind of understand WHQL, the protections and signing in place they have for it... And really, how this incident propagated. We don't know if it was really bad code, or if it was sabotage, or if it was some sort of plan... That's all speculation that we're not trying to really go through here. But sort of like "Hey, if you're out there and you've been affected by this, or you're just curious, go out there and do your own investigations, pay attention to what's happening out there..." And I guess we can look forward to George Kurtz, the current CEO of CrowdStrike, who was there at the helm during this incident, to stand before Congress and explain exactly what happened. And maybe then we'll know.

**Jerod Santo:** Talking about security theater...

**Adam Stacoviak:** Right. Until then, all we can do is speculate what may have happened. We can use the -- they're not called dumps. What are they called? Are they called dumps whenever it's a kernel panic?

**Robert Ross:** Well, you dump the stack...

**Adam Stacoviak:** Yeah. It's not a stack trace, because that's like an application kind of thing.

**Robert Ross:** Kernel panic...

**Adam Stacoviak:** Yeah, exactly. You can examine that. And there's lots of folks -- there was a famous tweet out there that made the rounds, explaining that this one file was updated,a nd while it should have had the needed definition in there, instead it just continued zeros, because of a null pointer... There's all these things like why this actually happened, but I think in the end we could just say at scale software can have massive effects. And we've got to do something about that. It's a good thing to have scaled software, but at the same time, we have to do updates responsibly. Or in this scenario, where you have a kernel-level driver, how do you do what CrowdStrike wants to do with Falcon, but not bypass the security systems? That's the real question here, specifically for this incident.

I think for others, is just love your maintainers if it's open source. If it's not open source, drag them through Congress and make them explain it, and slap them around a little bit... \[laughter\] Otherwise, just do what you can to stay safe. Scrutinize your dependencies, your third parties etc. And that's about it for me.

**Jerod Santo:** And run Linux on your desktop. I mean, that's the way. This is the way. Write Rust, run Linux, and you'll be good to go. And then let all of us know about it.

**Robert Ross:** Yeah, once they figure out their audio drivers to come on this show, it'll be great to hear their experience. \[laughs\]

**Adam Stacoviak:** Oh, yes... Well, every time we have a Linux user, we're always happy, obviously. And then sad, because we're like, we expect to have some version of issue because of drivers. It's almost unanimous. Almost unanimous.

**Robert Ross:** Well, thanks so much for having me. This was a blast. I think it was a fun topic to talk about, and super-interesting.

**Jerod Santo:** For sure. Thanks for joining us.

**Adam Stacoviak:** Yeah, Robert, it's been fun. Bye, friends.

**Jerod Santo:** Bye, friends.
