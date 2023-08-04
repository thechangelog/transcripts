**Adam Stacoviak:** How many game-changing ideas can one person actually have? Do you know that number? Is it two? Is it four? Is it eight? Where should we begin?

**Solomon Hykes:** I don't know, I have no idea. I ask myself that question a lot, you know?

**Jerod Santo:** Yeah.

**Solomon Hykes:** But yeah, I don't know. No idea.

**Jerod Santo:** Do you think you've got another one on your hands here? this is your second act.

**Solomon Hykes:** Oh, yeah, totally.

**Adam Stacoviak:** So at least two, right? \[laughter\]

**Solomon Hykes:** Actually, I feel like groundbreaking ideas you can have a lot of. The question is what can you do with it? How much impact can you have with that idea? Is the world ready for more than one of your ideas, however groundbreaking you think they are? Yeah, so I've got ideas, there's no problem there. What to do with it, we'll see.

**Adam Stacoviak:** We'll see. The last time we talked to you at length was in your Docker days, I believe. you've been on ship it, you've shared some of your Dagger story there. We're gonna act as if some of that didn't happen. Not all of it. So definitely go listen to that; we'll link up in the show notes. But Jerod and I want to spin our own version of that here, and hear the story arc, essentially, from changing the way DevOps works with Docker to now attempting to do it again, or a version of it again, with Dagger. how do you feel about Docker these days? What's your stance on it? Are you still rooting for them? Where are you at?

**Solomon Hykes:** Docker? Yeah, totally tooting for Docker, all the way. there was a period of time where I think everyone was worried that it might not make it as a company... I was. And of course, I left. But now it's doing well again, and I think for the right reasons. Docker is finally focusing on the stuff that matters, and now kind of rebuilding from there, which is exactly what they should be doing.

**Adam Stacoviak:** Have you ever shared why you left, or versions of why you left, or the public version of why you left?

**Solomon Hykes:** Well, yeah, I wrote a blog post. It's not that different from the private version... it's complicated, but the short version that goes, I think, closest to the heart of the matter is I was very tired, and it was ten years in for me, and a lot happened in those ten years. I went through a lot, personally and professionally. And yeah, whatever, something happened, a sequence of events happened that were the last straw at that particular time... But really, I was just tired, ready to take a break.

**Adam Stacoviak:** Yeah. Can you speak to the struggle of that? Like, the ten-year journey, and just the game-changing -- like I said, how many game-changing ideas can one person actually have? That's actually a line from Silicon Valley, which I love...

**Jerod Santo:** Which I did not catch.

**Adam Stacoviak:** But it's true. And so that was a game-changing idea. Docker very much changed pretty much everything for deploying applications. It's the way, and it still is the way, despite the company struggles, and now non-struggle; from a technology standpoint, product-market fit immediately with developers, right?

**Jerod Santo:** For sure.

**Adam Stacoviak:** And since then it's just only been iterations on better developer experience, etc. CPU changes across different development environments, all that good stuff. But can you speak to the struggle, that ten-year journey?

**Solomon Hykes:** \[00:07:52.11\] Yeah. Well, it's funny, because I started out just a complete outsider. It's hard to describe just how much of an outsider I was. I graduated from programming school, engineering school in France in 2006, and I was obsessed with these kinds of things. I was already on a track to containers. I think 2007 is when I started really messing with actual container tech, and patching the kernel, and just kind of getting excited about the possibilities in my young, naive way... Not knowing that it was impossible therefore doing it, that kind of thing. But it was just really -- that was the beginning of the sprint that little did I know would last 10 years non-stop.

**Adam Stacoviak:** Wow...

**Solomon Hykes:** Which - five years of just crossing the desert, like obsession with containers, and the possibilities, and the ramifications, and literally, nobody cares. No one cared. And then immediately, like you said, something changed and everyone cared... Too much almost. And then it was another five years of just keeping up with that. The common thread was just obsessive focus on that tech that I just had a gut feeling was important, but couldn't articulate exactly why or how... Part of it because it was very new, but also part of it - again, such an outsider, both me and the founding team that I worked with, that we didn't have the tools to even express in what way exactly it was different or exciting. For us, it was just all new, all unknown... We didn't know which parts were new for everyone and which parts were new only to us, because we were newbs. It was all just a big blur.

**Jerod Santo:** That came out of dotCloud, didn't it?

**Solomon Hykes:** Yeah.

**Jerod Santo:** I'm trying to get my ancient history back out again. So when you said great ideas, wasn't it like -- I thought maybe you're talking about app.net. Wasn't app.net ADN? Was that a thing? Was that a dotCloud thing?

**Solomon Hykes:** No, app.net was not me. dotCloud was me.

**Adam Stacoviak:** App.net was Dalton Caldwell.

**Solomon Hykes:** Yeah, exactly.

**Adam Stacoviak:** Yeah. He's now I believe a partner at YC, or...

**Solomon Hykes:** Yes. In fact, he was our partner for the YC batch in 2019 that Dagger went through.

**Jerod Santo:** Okay. So why am I associating those two things together? Just the dot maybe. I thought that was like all one big --

**Solomon Hykes:** Yeah. Well, the dot in dotCloud - that name was inspired by .NET. the general aspiration was -- dotCloud basically was the name of the company before we were named Docker. And we went through a bunch of different products, but basically, it was all container stuff. But the aspiration behind the name, of the potential, was - .NET at the time, for me, it symbolized sort of a successful new standard. A new layer in the stack that abstracted away something that it was useful to abstract away. In the case of .NET it was all these different architectures, I guess. You wrote your code out of .NET APIs, and then your thing was floating on this portable platform. It was abstracted away from the messy details. And it was a new, more powerful programming model, yadda-yadda-yadda.

So in my mind, with containers there was the potential to do the same thing, but for the cloud. Like, abstract away all the messiness, insert a new layer that actually helps. A real abstraction layer, not a terrible one... Which is hard -- it's rare; there's a lot of terrible abstraction layers. Every once in a while there's a useful one. And it felt like "Okay, containers could be that." And that's really the core of when people say "Containers already existed before Docker" etc.

**Jerod Santo:** Yeah.

**Solomon Hykes:** So that's the thing that did not exist. No one was thinking of them as an additional layer. It was a spectrum of virtualization. You had the heavyweight VMs, and then you had the lightweight VMs. But everyone thought of them as you choose one. It's a trade-off. But it's still like a machine, virtualized for sysadmins, and then the application people do things on top, and that's it.

**Adam Stacoviak:** And now we can't imagine the world otherwise, right?

**Solomon Hykes:** Exactly.

**Adam Stacoviak:** I couldn't imagine running an application on a disparate version of Linux, pick your distro, and have multiple applications run at the same time, and trying to manage those two environments simultaneously. It's just like, "Why would you do that? You don't have to, obviously."

\[00:11:54.20\] And for a while there, we did. We would actually literally either have a VM, and then place our application on that... Like a virtualized machine, and have different machines with different IP addresses, and then work them together. You still have networking, but then you have it at the Docker layer, a shared mesh network. And you can even do that in Docker Compose, and create networks... It's like, that's how it should have been, so thank you for those five long, hard years, and really the ten-year journey... Because if you didn't have that curiosity, and you weren't willing to chase it, we wouldn't have Docker today. So thank you.

**Solomon Hykes:** Well, I appreciate it. I feel like these good ideas there - when they're ripe, you know, someone would have figured it out in a different way... We were getting there, we were really close. In fact, what the core Docker community -- I think one of the sparks when we open-sourced it, and we started shopping this idea of open sourcing it... Because that's what the pivot was. dotCloud was basically a Heroku competitor. It was same container tech, but bundled it into this big monolithic platform that you had to sign up for. And we had customers, but there was a lot of hoops to jump through. And then we started talking to a few hardcore container people; people who got it. They were already developing their own container-based thing. So that was kind of a really tight-knit group of people; people who worked at Heroku, and other places. We started showing them this prototype of just spinning out the core container tech in a way that you could use it yourself, and build stuff yourself. And that core community - it was all people who were following some sort of a parallel track.

So for sure, let's say I'm not there, the dotCloud crew is not there, then one of them would have figured it out. But what happened is we figured it out together anyway, because they joined the Docker community, and we built Docker together. Some of them actually shut down their own kind of early prototypes of something that looked kind of similar, others were thinking about it, and never got around to it... And then there was the repo. "Oh, I'm gonna go join this crew." So it was like a motley crew of open source people, and that started -- that was really when it started becoming an emerging standard. Because the whole point of Docker is that you've got to standardize it; you've got to get everyone to agree to use it. Otherwise it's pointless. It could be technically brilliant, it doesn't matter.

So the getting a lot of people to adopt it is part of the design process. And so when those first 20 people joined that repo, and that little IRC channel at the time - that was really the key feature that was missing, I think. I mean, one of the key features.

**Jerod Santo:** There's a phenomenon, I think it's called multiple discovery, I think, or simultaneous invention... And you're kind of speaking to it. That's not necessarily what happened in your case, but you're saying somebody else probably would have discovered this.

**Solomon Hykes:** It was definitely -- you could tell it was in the air. You could tell.

**Jerod Santo:** It was bubbling. Yeah. It's kind of a cool thing, where like independent groups, at the same sort of general time, are all kind of in the same thought space, and tend to land on either side of a discovery, somewhat close to each other. So yes, we may have had something like Docker had you not done what you did... But nonetheless, you did what you did, and now it's here, and we're all much better off for it. So that's why we say thank you. \[laughter\]

**Adam Stacoviak:** You just took all that credit right back, Solomon. Geez... I just gave you all this credit, and he's like just taking it right back.

**Solomon Hykes:** No, I'll take the credit, but it's really an interesting topic, because it's tied to why Docker actually succeeded. We identified that and captured it, too. Okay, there's a community, and the word community is really important for Docker. And what you just said, that phenomenon - that led to the kernel of a community, basically.

**Jerod Santo:** Right. And isn't that kind of like lightning in the bottle, to a certain extent?

**Solomon Hykes:** I guess you're discovering if that's true or not now with Dagger, because you kind of want to do the same thing, at least with the community again. You want to do that again, but in a different area. Can you just repeat, put it on repeat, like you can your favorite song?

**Solomon Hykes:** That's something I think about a lot, and we talk about a lot with my co-founders... Who, by the way, were part of the founding team. They were the earliest employees at dotCloud, and lived through the pivot to Docker with me... So we shared quite a bit of that journey. So we talk about that a lot...

**Jerod Santo:** A lot of time together.

**Solomon Hykes:** I mean, all things being equal, would we love to go through the same magical moment where the whole world decides our thing is the thing? Yeah. Who wouldn't?

**Jerod Santo:** \[00:16:15.06\] \[laughs\] Right.

**Solomon Hykes:** But if you're building a new thing, do you want to make that a condition of your success? No.

**Jerod Santo:** Right. You can't rely on it, so you don't want it to be a condition.

**Solomon Hykes:** Can't rely on it, yeah. There's a whole topic, I'm happy to go into it... But our process at Dagger, of sort of managing that and setting expectations, and just finding our own path, but also not discarding all these useful lessons from just the most defining professional experience of our lifetime... It just kind of defined us professionally. There was so much to learn, so you want to mind that, but you also want to forge your own path.

There's actually -- we've started out going in a very different direction, and now we're actually, ironically, getting pulled into a community-led path more and more. At some point -- you know, when you hear a real story, and the joke would be "Well, if you pitched that as a script, it would never fly." But if that's what happened, you can't argue with reality; this is kind of the same thing, where it feels like with Dagger we're increasingly getting pulled into a path to basically finish what we started with Docker, and it's almost too on the nose... But it's just literally through years of incremental user discovery, and just spending time with users, and shipping things, and just working on the product, and just iterating, we just kind of get pulled into that. So...

**Adam Stacoviak:** What exactly is Dagger? Can you explain? Can you give us the 30,000 foot view of Dagger and what it is? Today, or what how it began... Where do you want to begin?

**Solomon Hykes:** Well, I'll start with just the big problem that we're seeing, and that we think we can contribute at least to solving. A lot of things changed in the cloud landscape, let's say; lots of great developer tools, lots of great infrastructure... But what has not changed that much is how terrible the delivery process in between is. So you've got great developer tools, you're shipping great code, it's right there... And then you've got this really scalable cloud infrastructure ready to run anything. But in between, the pipelines are just still the same mess of shell scripts, and YAML, and just a million artisanal scripts. And those things break, they waste the team's time... That's just kind of the problem we got pulled into. Because whatever else we pitched and showed and demoed, people are like "Oh, that's great. That's great. Yeah, yeah. Can you help me with my deployment? Can you help me with my build and test and deployment pipelines?" There's just a long list of terrible, terrible things about them. And it's universal to small teams, fast-growing teams, enterprises... It's just terrible. So generally speaking, we've been focused on solving that. And then we have a specific opinion on what needs to be done to solve it. But the big picture is delivery of applications to the cloud - if you zoom out and you remember what it was supposed to be, you realize we've been sort of settling for something that's not that. Something that's really quite bad. And we shouldn't.

**Jerod Santo:** So what are the things that you are running from at Docker, that you're now kind of running towards? I guess you've talked about it, but if you can get specific on those things, what is it?

**Solomon Hykes:** Well, one was open source...

**Jerod Santo:** Okay...

**Solomon Hykes:** And the other was what I would call community-led growth, where you focus on growing a community of people that share a common bond, a common excitement, a vision, a cause, a movement, and only then do you plug products adoption and growth into that, from the point of view of a business.
\[00:19:51.22\] Everyone says, "Yeah, we have a community" and "Yeah, community is important", but to actually say "The top of my funnel -- like for my funnel to grow as a business, people using my product, people paying for it, people buying more of it over time", for that to require that individuals on their spare time are going to wear your swag, and log into your Discord, and write a blog post on their personal time about how great you are, and just like annoy the hell out of all their friends, talking about how great your thing is... And not just the product, just whatever the idea is behind it - that's kind of a big bet to make. And we're now doing both of these things. We're shipping a product that's not 100% open source, it's two parts, but the engine is open source. And you can do a lot. There's a whole community of people - second part - built around contributing to it, running it, programming it, writing code on top of it... And yeah, so we're now 100% community-led, and the core engine in our product is open source. So the opposite of what we were hoping to do. The first thing we shipped was completely closed source, and it was just another SaaS product that told you why you should use it, and you could sign up, and if you liked it, use it more, blah, blah, blah. It turns out -- I guess we're not meant to build a normal product, with a normal funnel... \[laughs\]

**Jerod Santo:** Yeah.

**Solomon Hykes:** I kind of wish we were, because it sounds simpler, but... I don't know, it just never seems to happen.

**Adam Stacoviak:** There's so many more variables in this direction. Like, if you could just go make a good product, be proprietary, and have value, and say "Here's my price for this value", and you use the software, and you scale your user base, and you get the value... That's somewhat the Easy button. With this path there's so many more variables, because you can go down roads community-wise, have an amazing time, but like you said, at the end it may not be that valuable of a thing. You may chase the wrong rabbit hole, so to speak.

**Solomon Hykes:** Yeah, exactly. Which is exactly why we didn't start there. And yet, we're being pulled into it. Over years -- I mean, we started working on this four years ago now. At the beginning it was just tinkering, prototyping, we were in no rush... But we've been working quite seriously on it for several years.

**Jerod Santo:** Do you have investors?

**Solomon Hykes:** We do.

**Jerod Santo:** How do they feel about this change in direction? Because this is pretty big -- this is drastically different than proprietary SaaS, to this direction. I mean, if I gave you money at the proprietary SaaS stage, I might now be like "Hmm... Do I still like that decision?"

**Solomon Hykes:** No, it hasn't been an issue, because -- well, we raised a seed round, and then we raised a Series A.

**Jerod Santo:** Okay.

**Solomon Hykes:** And our seed round, we raised 100% on "Hey, it's the Docker team's next thing."

**Jerod Santo:** Alright.

**Solomon Hykes:** I mean, I wouldn't invest in that, as a -- I mean, there's a premium for experienced teams with a track record of success...

**Jerod Santo:** For sure.

**Solomon Hykes:** And the earlier stage it is, the more important that is, because everything's unknown anyway.

**Jerod Santo:** Right.

**Solomon Hykes:** So that's never been an issue. The New Wave VC team, just to name them... And we have a bunch of really cool angel investors. They're just "You're the team, we want to fund. Go." And then Erica Brescia at Redpoint led our Series A, and she's also awesome. And had she invested before we switched to open source, I'm confident she would have said the same thing. But she didn't have to, because we launched our open source thing and raised our series A pretty much at the same time. So we had already made that switch, you know...

**Jerod Santo:** Gotcha.

**Solomon Hykes:** Yeah. So she was on board with that from day one.

**Jerod Santo:** What was the pull then? So you tried to resist it... You obviously -- I mean, the Docker community was lightning in a bottle; open source made productizing Docker and stuff more difficult etc. You said, "I'm gonna start a new thing, different direction. Closed source SaaS." And yet, here we are; you said you've kind of just been pulled that way. You just kind of ended up that way. Was there clear indicators? Were people banging down your door open-source it? Or was it just like an internal, your team just had to let it free? What were the indicators that made you change your mind?

**Solomon Hykes:** \[00:24:08.05\] I think it's fundamentally a design problem. We just spent enough time focused on the problem we want to solve, which again, is application delivery is terrible... And then we really just spent enough time focused on why, and how to fix it, and like what's the fundamental thing that has to change? How come no one's fixed it? How many hundreds of startups and big tech products are there that aspire to improve application delivery? There's so many. And many of them are awesome. And I'm casting a really wide net here, but Heroku remains awesome. All the HashiCorp tools, all these CI platforms... You know what I mean. There's a lot of tools. And so why is it still terrible? And so we kind of just honed in on that problem, and looked for "Okay, what's the fundamental thing that still is not solved, and that we can solve?" And we got an answer. And from that answer, then everything else flows. "Okay, what's the required solution? How do we design it? What components does it need?"

And just to summarize, the reason it's terrible is because it's fragmented; because there's no unified platform underlying it where you can actually connect all the pieces. There is no such thing. Basically, we call it the DevOps operating system internally. There's a million slide decks that have this aspiration. It's easy to say, "Oh, we're gonna roll all that stuff up, and we're just gonna unify it under one platform." Of course, everyone thinks they're going to do that. But you two know, I'm sure, just how many have actually tried... And they've all failed, because they're doing it wrong, and "We're so smart, we're going to do it better." Of course, I'm gonna say that... But I think it boils down -- even with dotCloud; we tried also the PaaS... That's what PaaS was about - the platform that you just run all the stuff on. And then it failed, because it just became one more silo in an ocean of silos. I think really the core of the problem is you've got to think of it as a software problem. Think of your whole software supply chain as a really complicated application. It's a factory that ships your stuff, that's made of code. Someone's going to run it and improve it, and that's a programming problem. So if you want to be a platform, you've got to be an operating system. The only real platform there is something you can actually write code for. Windows is a platform. iOS as a platform. Heroku is not a platform, and neither was dotCloud, because you can't write code for it. So you need to be able to program all of that.

So from there, that means you need some sort of an API that can somehow cover that breadth of functionality, all these pipelines. And from there, you need SDKs, developer resources, you need developer communities, you need an ecosystem of code for your platform, and the means to exchange that... You basically need a whole -- it's an operating system play. Those are really hard. And back to your question, if this is really an operating system play, we're trying to take that whole software supply chain, all of it, and somehow make it programmable, and give you the OS to program it and run it, which is an ambitious thing to do. The key to an operating system's success is the number of developers writing original code for it. That's the only thing that matters. So you need an ecosystem of code, and in there, there's code that could do amazing things, that no one else has, because it only works on your platform, and then you have possibly a hit on your hands. So how do you bootstrap that? Well, you can do a lot of things. a) it's got to actually work, and do the thing better than everyone else etc. But also, none of that matters if you don't have that developer ecosystem.

**Jerod Santo:** Early adopters need to love it.

**Solomon Hykes:** \[00:27:55.02\] Right. So we just kind of reached the conclusion that in this day and age, for this audience of a developer community - because we want to take basically what you would call the DevOps community, and turn them into an actual developer community. Instead of scripting, and half-scripting, half-administrating, half-configuring - I guess, those are three halves, but...

**Jerod Santo:** It can feel like that.

**Solomon Hykes:** You know, these tools, all of a sudden - you want them to be programmers. I'm programming my supply chain here. That's the journey we want to take the DevOps community on. But we can't do that if the thing you're programming doesn't have an open source -- the SDKs, the engine, all that's got to be open source. It's just not possible otherwise. Not for us. Maybe for GitHub it's possible to try, and "Hey, here's GitHub Actions." They can build a developer community around GitHub Actions, because they're huge. CloudFormation is another example... It's kind of programmable. I would put it in that bucket. Sure, there's a developer ecosystem around CloudFormation. But even at that scale, you notice that in spite of CloudFormation being quite powerful, and now you have all these layers, and CDKs, and all that - it's really... I feel like you can tell that the fact that it's fundamentally a proprietary silo is limiting the growth potential of the developer ecosystem behind it. It's a massive product. Massive. But I think you can build a developer community in that space that's orders of magnitude larger, but it's got to be not tied to the proprietary silo in that way.

So that led us to open source... And from there, as we quickly realized, if you're doing your job well building and supporting an open source platform, and you want an ecosystem of software - well, then between your platform and that ecosystem of software, for it you need a community of developers that are just pumped right to write code for it. And hence the community play. So one thing led to another, basically.

**Jerod Santo:** Gotcha. So it comes down to the design.

**Solomon Hykes:** Very long answer...

**Jerod Santo:** Yeah. I followed though. I think it was good.

**Adam Stacoviak:** Yeah. Very good. A lot of nuance in there.

**Solomon Hykes:** Yeah.

**Jerod Santo:** But it was just design-driven. It was because of the problem you were trying to solve. It informed the design, which is like an operating system, which has to be a platform, which has to be open source, or else you're not going to get buy-in, and you're not going to get the software that runs on it, or runs against it, or is programmed for it. And so you were kind of barking up the wrong tree; you had a solution to the wrong problem. Now you've identified the problem, and you feel at least you have a strategy, which turns out is the exact similar strategy of the last great idea, right?

**Solomon Hykes:** Yeah. Because Docker really started out trying to solve the exact same problem.

**Jerod Santo:** Right. So this is like your second at bat then.

**Solomon Hykes:** Yeah, I think so. I'm now at peace with that. \[laughs\]

**Jerod Santo:** How long did it take you to get there? \[laughs\]

**Solomon Hykes:** I tried really hard to prove that that's not what I was doing...

**Adam Stacoviak:** Why?

**Solomon Hykes:** I don't know... Well, first of all, it took a long time to figure out what the problems were that were left to solve. I didn't leave Docker assuming we had failed to solve the problem.

**Jerod Santo:** Right.

**Solomon Hykes:** I left Docker assuming I was really tired and wanted to take a break. And then later, I caught up with Sam and Andrea, my co-founders, and we got excited about doing something together... And that was the focus - just getting back, building something together, hanging out there, talking to people about their problems... So you set up to sail with a new ship. We didn't start with a destination, we started with the ship and the crew. "Let's go. Let's go sailing, and let's figure out where we go." That's a process. You've got to go through the motions, and over time you figure it out.

**Break**: \[00:31:35.12\]

**Jerod Santo:** I guess to a certain degree you have to kind of admit that you failed the first time around too, right? Like, you don't take a second swing if you hit the home run the first time. Now, maybe personally, financially, you hit the home run. But like in terms of solving the problem, second at bat means "Maybe I hit a blooper to left field and they caught it."

**Solomon Hykes:** Yeah. Well, there's two things there. Me personally - there's definitely a lot of things I would do differently. And I think Docker as a company - I'm so happy that it gets a second chance. And this is a real second chance. I've seen the numbers... Docker is a really successful business now. So now it's up to them to keep going. But I'm really glad, because - boy, was that a missed opportunity. I think Docker at least was a new Red Hat or VMware, and that's pretty big already. And I say "at least", because I think it could have been more. But we made a bunch of very avoidable mistakes, and I'll go into that.

So there's a sense of failure, for sure, and trying to learn from them, and do better the next time. Me personally, separately, I do think in terms of the opportunity for Dagger - those two things are separate in my mind. I think Docker was wildly successful in adding a layer of standardizing something, and creating out of thin air a whole ecosystem that's building tons of amazing things on top of that standard. And now, because Docker and the whole ecosystem around it, including of course the Kubernetes universe, but it goes way beyond Kubernetes in my mind... There's just -- it's so massive. Now, all these opportunities appear to solve the next stage of the problem. That's kind of how I think about it. And Dagger is entirely built on containers. So it's 100% impossible that Dagger would exist if Docker didn't pave the way first. So really, for me it's like finishing what we started, you know?

**Adam Stacoviak:** Yeah.

**Solomon Hykes:** But would with Docker, in an alternate universe where Docker just crushes it as a company the first time, and just grabs the opportunity, and just does an amazing job of executing after the standard takes off - would it be Docker doing this? Maybe. \[laughs\] Sometimes I'm like "Maybe Docker should be doing some of what I'm doing." I don't know. But they're busy with other things, so...

**Jerod Santo:** So to fit my baseball analogy then, it's not like you struck out; it's like you hit a double, and you're coming back up to bat. You're now gonna knock yourself home. You get a second at bat, but it's not like you're out. The first guy - he's on second base. He had a great run... He's a building block towards scoring a run, and now it's time to score the run.

**Solomon Hykes:** Yeah, I think that's right.

**Adam Stacoviak:** We love baseball right here, by the way...

**Jerod Santo:** Yeah, I'm a fan.

**Adam Stacoviak:** Always trying to hit home runs -- it's all about the base hits. Get on base.

**Jerod Santo:** That's right.

**Adam Stacoviak:** That's key.

**Jerod Santo:** Lots of singles add up. You mentioned GitHub Actions earlier... Is GitHub Actions - is it a competitor to Dagger? Because I know that we are using Dagger because our friend Gerhard, our resident SRE and the host of Ship It and on our kaizens - he's a Dagger guy. He works for you, Solomon, and he's very excited about that... And he has us running Dagger. I've peeked at it, I know it does some things... But we're also using GitHub Actions, and I'm like -- I think a lot of us try to understand, when you're creating something new, what can I proxy it to that I do understand? Is GitHub Actions a good proxy for Dagger, or are they two different things entirely?

**Solomon Hykes:** \[00:36:15.10\] They are different things, but they are related. They're complementary. And you're not the only one who is not a hundred percent sure. It was similar with containers in the early days. It was so new that you kind of -- there was sort of a problem of it doesn't fit neatly in any specific box. So most of the time, when I'm advocating for Dagger, in whatever way, explaining, pitching, whatever, I'm usually spending more time on the category and where it fits in the stack than whether it's better than X, Y or Z.

**Jerod Santo:** Sure.

**Solomon Hykes:** So GitHub Actions plus Dagger is a very common combination. And the best way to summarize what we do, just stepping back, is we basically give you a way to standardize all your pipelines, and connect them all into a dagg, and have that dagg be the new layer at which you do a whole lot of important things that have to do with delivering the application. Like orchestrating and managing your builds, and your tests, and your deployments, and all the other workflows that are involved, that usually happen across several different environments. The developer's local environment, the ML team's local environments, the CI environment, the production environment - those environments are like silos. And the problem is your dagg really needs to connect all of them, because there are dependencies, right?

**Jerod Santo:** Step back, demystify dagg. Dagg 101, just for the uninitiated.

**Solomon Hykes:** Yeah, a dagg is a data structure, really. It's a graph of interconnected nodes where data flows in one direction. So the best analogy is a factory. Picture the workstations and the conveyor belts of the factory. That structure is a dagg. It turns out a dagg is a great way to model lots of things. It's a great way to model the layout of a factory, it's also a great way to model the layout of basically your software factory, and zooming out, the whole supply chain interconnecting your factories between them.

So it's just a construct, it's a way to model, but it turns out it's a really powerful one. And so Dagger basically -- we use it as a verb, actually. You take an environment, say your dev environment where these pipelines run, where you automate these tasks, and you daggerize it. Then you take your CI environments, and you daggerize it. Basically, what you do is you package all the pieces up into containers, and then you interconnect those containers into a dagg. So you describe how they're related, which container sends data to what container, and you end up with a full model of all the possible paths through running a build, deploying... So now you look at that and you can see "Oh, I see what are the possible things to do in this environment. I can build these three different artifacts, and I can run these four different kinds of test suites, and I can deploy to these two different things, and each of those steps can be configured in this way or that way. And here's the flow of data between all of them." And all of that now can be run on top of a bunch of containers, which means it's portable, which means now you can unify those environments.

So in very practical terms, the problem we solve is things are happening differently in CI and in dev, and it's just a pain in the butt. And now we give you a way to actually converge those environments, so it's the same thing. So any test suite or useful automation that's usually locked in prison in CI, now devs can use it much earlier in the process. They can shift it left. So that means they can make sure it works more thoroughly before committing and pushing it. So we make pre-push capabilities richer, and vice versa \[unintelligible 00:39:57.02\]

**Jerod Santo:** Okay.

**Solomon Hykes:** \[00:40:01.19\] So this is where you need a community, because the whole thing is -- I realized, this is the opposite of a neat product pitch that you could just put it in a landing page and say "Yeah, click to buy it." This is not something you can just in 10 seconds decide "Oh, this is what I want. I'm gonna buy it." So you need a community of people like Gerhard, who at some point they've ran into the problem, and they've figure it out on their own, "Okay, this is really in the weeds, but this is exactly what I was going to do anyway. So let me go ahead and try it out. And also, let me go and join the Discord, because this is something I'm passionate about, and I want to just hang out with other people who are also, and maybe I can help them. We can help each other."

So that's what leads you down the path to community-led... Because it is a niche problem that we solve, for a pretty niche audience of people - DevOps engineers. Oh, and all this runs on GitHub Actions, right? It's compatible with it.

**Jerod Santo:** So the connection is like GitHub Actions would trigger Dagger to do its thing. Right?

**Solomon Hykes:** Exactly. Yeah. Because right now, your CI environments - what versions, of what tools to run, in what sequence, all that - it's trapped in a GitHub Actions-specific proprietary configuration. And so basically, when you daggerize that environment, you free it from that prison, and it's now declared in a completely portable way. It's declared as code, so you can script it and do whatever you want with it. And GitHub Actions is still there, but its job is now to run pipelines in that portable environment.

**Jerod Santo:** Yeah.

**Solomon Hykes:** So you basically shrink, you go from a 500-line YAML file, gradually, you eat away at it - or all at once; your call - but eventually, you end up ideally with a 10-line YAML that says "run dagger." I'm caricaturing a little bit, but that's the idea.

**Jerod Santo:** It's effectively like a post-commit hook kind of a thing, where it's just like "Okay, when I push to this branch, go ahead and tell Dagger to do its thing." And it becomes this just like trigger functionality at the end of the day. Okay.

**Solomon Hykes:** So it's really that it's running on containers, so it can run anywhere, which people like, and it's also scriptable. There's an API... So all the behavior is expressed in code, in the language of your choice. We have a bunch of SDKs. That's the other big draw - you can replace all that YAML; that becomes pseudocode over time.

**Jerod Santo:** Which that's a new direction as well, because when we first adopted Dagger - we were 0.1 adopters around here. When he first adopted Dagger, it was CUE. It was Configuration-something-language. What was CUE called?

**Solomon Hykes:** I forget what it stands for. Yeah, it's an acronym.

**Solomon Hykes:** It's a configuration language. It was like better than YAML, because it's typed, or something. So people like it. But it's a YAML-esque configuration thing. And now it's not. Now it's like "Have at it." You can write Golang, you can write TypeScript.

**Solomon Hykes:** Yeah, that's exactly right. So we launched a year ago -- well, a little bit over a year ago. And you had this dagg engine. An engine that enables what I described - you can daggerize your environment, package it up in containers, describe the layout between the containers, and then it's scriptable, and portable etc. Great. But you have to write all that new code, those scripts in this obscure, new configuration language. That's like HCL, or like a much better YAML... The CUE community will hate me for saying that, but it's in that category of languages. It's declarative... It's just a very powerful declarative language. It's a next-generation configuration language. And honestly, it's awesome, it's very powerful. The only problem is that nobody -- I mean, it's new, and people generally don't love new. Learning a new language is just a high barrier of entry, specifically in the context of these pipelines, and the environments where the pipelines run... If our pitch is basically, "Hey, get rid of all that terrible YAML that only works in one place. Now it's scriptable, and it's containers, and it's scriptable." And then we add "Oh, and it's scriptable in this other thing, that's kind of like YAML, except it's newer, and you don't know it."

**Jerod Santo:** Right.

**Solomon Hykes:** It's kind of a bait and switch. So that's the feedback we got.

**Jerod Santo:** It's kind of a sidegrade.

**Solomon Hykes:** \[00:44:00.19\] And people wanted it so bad... I mean, we had a pretty massive cohort of people run through it, and use it, join the Discord, ask questions... So we had a solid six months process here, where a lot of people flocked to this product when we launched it. And then just very slowly, we realized - not at once, but eventually we realized they're all going to leave. And some of them would stay for months, and just keep trying, but they would just hit one little... It was just death by 1000 cuts. And we didn't realize it, but we kind of got dragged into a tarpit that would just slow us down more and more. We were kind of getting dragged down by all this friction. And some of it was just how we used CUE, some of it was just some fundamental issues with CUE because it's new. Memory leaks etc. It got better. But basically, it didn't matter. It could have been perfect. The problem was it was different.

So eventually, we figured out a way to script our engine with a language that was not declarative, even though the way the engine works, the API for it is fundamentally declarative, because you're describing a graph. So you can't -- like, it's a 3D construct. You can't go through a sequence of things to do. It's not a to-do list, though that's what imperative languages are; they're to-do lists for the computer. And you just -- you're missing a dimension. So that's why we went to CUE in the first place; how do you express this three-dimensional construct without a specialized language? So we found a way, and so we eventually shipped all these SDKs. So now there's Python, Go, JavaScript, TypeScript... You can create your own SDK... There's a bunch of new SDKs that are experimental, that the community is developing... Rust, Elixir, .NET... So that really unblocked a bunch of things for us.

**Jerod Santo:** App.net... It also runs on App.net. Nah, I'm just --

**Solomon Hykes:** \[laughs\] I've gotta go pitch Dalton on it.

**Jerod Santo:** \[laughs\] Try to work that back in there somewhere... Yeah, so that's cool. I mean, our stuff is written in Go, but we're an Elixir app, so it'd be cool to be able to unify on a language like that. Does that mean -- so obviously, those languages are all Turing-complete. But are they like generating -- they're not generating the CUE lang. They're generating something else, at the end of the day.

**Solomon Hykes:** No, but we considered that. We explored that path, but CUE lang doesn't like being generated, basically. It's really designed to be the thing that you write, and it generates everything else.

**Jerod Santo:** Gotcha.

**Solomon Hykes:** And so it just felt like we were trying to use CUE for something it was just not designed for. So eventually, we stumbled upon GraphQL. So the Dagger engine has an API, and that API is a GraphQL API, and it turns out it's a perfect match for describing a graph, a DAG. And then on top of that, we've got bindings for these different languages, and they're actually generated from the GraphQL schema. So when we ship a new feature in the API - boom, all the SDKs get regenerated, and you get native support in them. It's pretty neat. And of course, the pipeline to do that is a Dagger pipeline.

**Jerod Santo:** It has to be.

**Solomon Hykes:** Yeah, yeah.

**Jerod Santo:** Yeah. Very cool. Well, I'm not sure if you've heard it or not, Solomon, but we had Kelsey Hightower on Changelog & Friends a couple of weeks back...

**Solomon Hykes:** I did.

**Jerod Santo:** ...and we asked him about some things that are going on. Did you hear him describe Dagger?

**Solomon Hykes:** Yeah, I did. And I remembered exactly the conversation we had...

**Jerod Santo:** After that? \[laughs\]

**Solomon Hykes:** ...at that VMware Conference... Well, no, the conversation --

**Jerod Santo:** Oh, yeah, because you guys spoke at VMware Conf.

**Solomon Hykes:** Yeah, yeah. Well, the way he described it was very gracious. I was there, showing this demo on a little stage on the side, and he was very gracious and came and saw the demo, and then we talked about it afterwards. I mean, Kelsey and I go way back.

**Jerod Santo:** Yeah. Summarized as this like customs robotic arm that's like part of your factory.

**Solomon Hykes:** Yeah. That's a good analogy.

**Jerod Santo:** Yeah. Do you think that's accurate? Did he miss the point on any aspects of it?

**Jerod Santo:** No. The only aspect that -- well, I think it's part also the timing. We started out being very focused on the deployment use case; you know, the last mile. And over time, we got pulled more and more towards the CI side, build, test... Ultimately, it's all in the dagg; I mean, ultimately, we're gonna daggerize all of it. \[laughter\]

**Jerod Santo:** \[00:48:05.24\] There you go.

**Solomon Hykes:** But there's definitely a sequence. Some pipelines are a better fit for Dagger today, and it's really build, test, deploy. And the deploy usually is we just hand off to a specialized deployment tool. We hand off to KubeCTL. Or we hand off to the Netlify client, to upload to Netlify. Or to an AWS Lambda tooling to just send the thing up there. You see what I mean. So it's kind of like a handoff. So for us, that's just one node of the dagg.

So the integration of all these different parts is really where Dagger shines. But that fits perfectly in the factory analogy and swappable robots that Kelsey used. I love that analogy. And I talked about factories before... It's a useful tool to kind of simplify what we're working on. You know, "Okay, big picture, what problem are we solving here?" If Docker solved the shipping problem - you know, you need a standardized box to ship things around. We're solving the manufacturing problem; you know, how do you standardize how the things are assembled, and the interdependencies between all the different steps of doing that, within the organization, but also between organizations? There's your factory, how it's organized, and then there's the factories upstream from you, and what they ship to you etc. So that's kind of the factory problem of software, and that's what we're tackling.

**Jerod Santo:** I think it's a good metaphor.

**Adam Stacoviak:** Yeah, I think so, too. It's not quite the containers, like the boat that we all see. We assimilate Docker to be this -- I don't even know what you call those container boats, if they're --

**Solomon Hykes:** Oh, yeah, yeah.

**Jerod Santo:** Cargo ship? I don't know what you call it.

**Solomon Hykes:** Yeah, that's a foundational analogy, the shipping container.

**Adam Stacoviak:** Right. But standardizing boxes to me makes slightly more sense, because, I probably like anybody, get a lot of shipments to my home from Amazon and the like... And so any given week, I'm like - side story here - just tearing down boxes to recycle, essentially. It's just a massive amount if you order a lot of -- and I just moved into a new home, so we're buying things, and getting things, and whatever... And obviously, tearing down boxes we had things stuck in. But you think about the size of the box - and this is something I think FedEx, and UPS, and other large-scale shippers obsess over; it's like, "If we could just have a standard box, we can be more efficient in how we actually transport things to and fro, and maybe even standardize prices. Because this size doesn't change, but the weight might, and as long as we're under a certain amount, and the size of the box stays the same, you have predictability in the model." And so deliverability, moving those things, moving what was manufactured in the box - it gets a lot more easier. So the analogy, I think, is really better in that case, than just simply this large-scale cargo ship that we don't really see too often. I think it's a better analogy.

**Solomon Hykes:** Well, actually, the weakness, the limitations of the physical shipping container story -- well, the limitations of the standard, which is what we just talked about... Like, not every box in the world is a shipping container, because that's pretty big. So it's like the backbone of the world's freight industry is built on it. But I don't get shipping containers delivered home. But what's crazy is that's what happened with the software containers, too. The OCI spec, which standardizes the Docker format - a lot of applications get packaged up in Docker containers, and deployed as such, in Kubernetes, or whatever... But not all of them. And it will never be all of them, because there's just too much variety and scale in the kinds of compute that's out there, and the kinds of software that's out there. And so there's a limitation to how much you can standardize the actual box, the actual shipping of goods in the world. And it's the exact same thing with software.

\[00:52:02.03\] I think -- and I'm gonna go into slightly unexplored territory here... So this might turn out to be a confusing point, but I feel like we're -- tune in three months or six months, and maybe you see a really well packaged version of this story on our website, I hope... But if you look at the manufacturing problem, you have the software supply chain. I think if you're pushing anything container-based on the application platform; if you're Red Hat pushing OpenShift, if you're any Kubernetes vendor pushing Kubernetes for everything, then you're pushing a vision that ultimately needs the shipping container to be the only standard for shipping things around. We believe that's never going to happen; not because we don't like it, we just don't think it's physically possible for that to happen.

So as soon as you're saying "Everything I'm building, it's Docker containers only, and Kubernetes only, at the application level", you're right there and then never going to be a standard. Your new thing - it's never gonna be a standard for how you organize your supply chain, because you're in a blind spot. So how do you solve that? Because you still need to standardize the supply chain on something... I think you could standardize how you ship the factory itself to the edge. The problem is, we're stuck in this analogy of the software factory. When you think factory, manufacturing, what are you picturing? You're picturing a big, centralized thing.

**Jerod Santo:** Yeah.

**Solomon Hykes:** You know, all the cars are built here, and then you ship the cars to everybody. So there's only one factory here, there's not a lot, and then shipping does the bulk of the work after that. You ship the car to wherever. I think in software, in fact, the correct model is flipped, where -- I mean, it's software. You can just ship a factory to everybody, and they get their own custom -- it's like Star Trek, the food synthesizer... They don't ship all that food to the spaceship...

**Jerod Santo:** Just the synthesizer.

**Solomon Hykes:** ...they ship ultimately a machine that knows how to manufacture the food you need right there. And everybody gets one, I'm sure, in their homes, or whatever. That's kind of -- I mean, software can do that. So you're basically teleporting what you need over. And the beauty of it is that you can standardize. Because that factory - it's okay if it gets shipped in a big bulky shipping container, because you only need it once. So the question is, how does it work? How does it link up with the other factories, and how does it get the intelligence to know -- how does the food synthesizer in the Star Trek ship gets its software updates? Does someone say "Oh, I have a new recipe"? Is there a community of Star Trek chefs that share this software for the recipes? Basically, that's what we're trying to do for Dagger.

**Jerod Santo:** It's a hard problem to solve. Where does it get its ketchup, and how does the ketchup enter into the --

**Solomon Hykes:** I told you it was gonna be a little outside the beaten path, but... It feels like there's something important there around just how that supply chain, how that software is assembled, manufactured.

**Jerod Santo:** Right. Ship the whole factory, but you have to standardize how the factory works, basically.

**Solomon Hykes:** Yeah, everybody gets a factory. It's like decentralized... You know, 3D printing is kind of like a hint at that. "Oh, I can make it myself." That whole controversy around -- I guess 3D printed guns is an example. It has profound implications, because you make a bunch of assumptions, starting from the fact that it's really hard and centralized to manufacture things, and then it all goes through shipping. Shipping is the most important thing. But if everyone's got their little factory, nothing gets shipped except the factory. \[laughter\]

**Adam Stacoviak:** Well, the parts. The factory gets there, and then all the filament to make the things.

**Jerod Santo:** Well, yeah...

**Adam Stacoviak:** You know... So that's kind of like the software pieces.

**Solomon Hykes:** \[00:55:45.16\] Yeah. Actually, you're right; a lot gets shipped, but it doesn't have to be standardized how it gets shipped. Because you're kind of encapsulating the intelligence of how it gets there. And I'm gonna try and bring this back into more concrete terms here, but the big problem we deal with is your typical team has a lot of different build tools. They have a lot of different package managers, they have a lot of different deployment targets. Frontend teams, backend teams... You know, containers get deployed to container things, but there's the JavaScript world, there's the MLOps world... So artifacts of all kinds, and deployment APIs of all kinds, packaging systems of all kinds... At some point, when you deal with it and you have to integrate it all, it's pointless to say, "Okay, step one, everybody across all these ecosystems, everyone change how you ship your artifacts. You have to all adopt this one standard for how your artifacts are shipped. And do me a favor... All these cloud providers, just use this one API that everyone uses for how you deploy." It's like the OpenStack problem. Let's convince everyone to adopt the standards on how they ship things around, and then we can integrate. But we're taking the approach that that's never gonna happen. So if instead you just let each endpoint do whatever the hell they want in the backend, and we just worry about standardizing how they fit together in this factory locally, you basically have --

**Adam Stacoviak:** The customized arm. I think this is where Kelsey's argument --

**Solomon Hykes:** Exactly. That's exactly what it is.

**Adam Stacoviak:** His statement was -- I'm paraphrasing... It's a customized robotic arm in my factory. What you're saying is you want to be able to give everybody the ability to have their own customized factory. Not just the arm itself, but literally the entire factory. And no matter where your artifacts come from, you can put it together at endpoint, at edge, wherever you need to put it at.

**Solomon Hykes:** Exactly. Well, it's really about which part is customizable infinitely, and which part is standardized strictly. And it's really about where do you draw that line of where the standard should be. And with this robotic arm analogy, this factory analogy, we're just moving the standardization point at a different place. Because it's still -- at the end, it's a standard Dagger factory. It's just that each robot in it, to use Kelsey's -- I should just use Kelsey's analogies to start with. I mean --

**Jerod Santo:** \[laughs\] Always just use Kelsey's analogies. That's what I've learned in my life.

\[00:58:02.01\]

**Kelsey Hightower:** *CI/CD is kind of like when you go get Jenkins or any of the kind of prepackaged solutions that are out there, it's almost like buying or using someone else's factory. They tell you, "These are the only cars we can build at this factory. We're fitted for these things. So if you're going to build something, it has to be within these parameters, and we can build a million of them for you. But these are the parameters, that's all you get." Dagger feels like the ability to create custom robotic arms. Like, when you go look at a Tesla factory, you can't make an F-150 in a Tesla factory. You can only make the cars that Tesla makes in that factory. And so Dagger is kind of like this idea of whatever complex step you have - it could be deploying something to a server... I think what Dagger gives you is the ability to create that custom robot for that one step.*

*Would you use Dagger to run the build command? No, it's overkill. You could put it in there, but that's like kind of a solved problem. So just use your standard conveyor belt to get the base of the car to this arm. But that arm is going to be really customized. You want it to work a certain way. And so I think what Dagger gets people to do is if you look at your whole factory -- let's say you're using Jenkins; you still could use Dagger as part of the inner loop. So hey, Jenkins, you do the checkout from GitHub; you do the build, you do the packaging. But when it comes to like deploying to Kubernetes across six regions, and the load balancer updating Cloudflare and busting the cache on something like Akamai, I ain't trying to articulate that in a bunch of Bash scripts. I also don't want anyone else trying to do that five times throughout the organization. So what we're going to do is we're going to use Dagger to build this custom robot, give it an API, and then Dagger as an atomic unit. When I look at my Jenkins pipeline, this fifth step is Dagger. Get rid of the 25 Bash scripts, throw the Dagger robot in for dealing with Kubernetes. Throw the Dagger robot in there for dealing with Amazon Lambda.*

\[01:00:01.12\] So I think of Dagger is going to be successful, just like what they did with like Docker images, and like having those kind of be ready to go with the units, I don't know if they really thought about it this way, but this is how I express that I thought about it. You've got to think about Dagger as these customized units or robots. And if they're shareable, so if I come to a company and say, "Hey, what is the best way to deploy to AWS Lambda, IAM, load balancer, the whole nine, and do rolling updates? “Oh, man… That can be challenging.”

So Dagger already kind of gives you some “If then, do this” kind of primitives out of the box. It gives you enough feedback loops so that you can integrate with a Jenkins, like a higher reporting tool, something that has a UI, and can decide when things go on and when things don’t go… Man, if I could just reuse those in the organization to say “Yo, to me, Dagger is a last-mile technology, that allows people to do all that customization that Bash is just not equipped for.” That’s the way I think Dagger will add value to the world and tools like it.

**Solomon Hykes:** Let me try and connect those two analogies, because I was talking about shipping versus manufacturing and where you standardize.

**Jerod Santo:** Right.

**Solomon Hykes:** And Kelsey is describing a robotic arm and the factory. The factory analogy is perfect, because it's about manufacturing software. Where shipping comes in is maybe that robotic arm, if it's really customizable, anyway I want it, that means maybe that robotic arm - maybe it's soldering, so it needs supplies to solder. Where do these supplies come from? Maybe that arm has an incredible tech, and it could just -- you could hook up a cable, and it's connected to this worldwide network that just brings the required material straight to the arm. We don't have to standardize how to package up that particular material to get it to the robotic arm. It just does whatever it wants in the backend. The important thing is, I can always connect it to the standardized conveyor belt, and it's going to fit. And the operator will have a standardized display somewhere that's red or green to say it works or not.

So the frontend, so the team operating it has to be standardized at some level... But how it does its thing, including shipping artifacts around to the outside world and from, how it gets its credentials, how it communicates over the network - none of that needs to be standardized by us.

**Jerod Santo:** Okay, I think I follow. Let's simplify. Let's get back to brass tacks, which is a saying that I've heard once, but I'm not sure what it means.

**Adam Stacoviak:** Down to brass tacks.

**Jerod Santo:** Let's get down to brass tacks. I think that's where we pay each other money, or something... But let's not do that part. Let's get back to basics. Like, let's imagine me, a developer, with an application. Let's pick a pretty typical -- let's go like a 12-factor web app. I've got a frontend, I've got a server-side API, I've got a database. And I want to bundle that up into a factory, and ship that factory somewhere with Dagger. But all I have right now is a repo with the code in it, and some sort of command I can run that executes that code. What do I do from there? Daggerize that sucker. \[laughter\]

**Solomon Hykes:** Well, the starting point of Dagger is you always have something.

**Jerod Santo:** Okay.

**Solomon Hykes:** And then you can daggerize that something.

**Jerod Santo:** Well, I thought I had something.

**Solomon Hykes:** Well, you have something, that's what I'm saying.

**Jerod Santo:** Okay.

**Solomon Hykes:** You're never starting from zero.

**Jerod Santo:** Right. I have an app, it runs... Like, if you run this command, my app will compile, and it'll run on my machine.

**Solomon Hykes:** Yeah.

**Jerod Santo:** So you're saying it's not live anywhere yet

**Jerod Santo:** No. It's on my computer, I have it in a repo... Maybe it's on GitHub in a private repo.

**Solomon Hykes:** So what happens at that point is someone - maybe you or someone else needs to make a bunch of decisions on how that application is going to be delivered. Maybe you're gonna say, "Well, this is really simple app, so we're just gonna go for Heroku for now", or one of the 10,000 Heroku competitors now. And that's it. That's basically it. It's never really completely it, but maybe -- that's what I would do. I would do that. It's 90% of it, and the remaining 10% maybe there's gonna be a makefile, an Npm scripts if it's a Javascript app, or a rake file if it's Ruby...

\[01:04:09.27\] So there's a little bit of scripting and automation... So that's basically your version one of your very own software factory. You've got those pipelines hooked up; they're very simple. They only run on your local machine, and then they hand off to -- they upload a bunch of things to Heroku. But basically, as soon as you start working on that app, and shipping more versions, and if it's a real app --

**Jerod Santo:** Yeah, it is.

**Solomon Hykes:** ...it's not frozen in time, then really quickly, as you add more code and more features, you're also going to start adding more pipelines; the factory is going to evolve alongside the product, exactly like a real physical product, by the way. Manufacturing - it's always deeply embedded in the product design. There's a reason it's called industrial design, right? Great, you've got a prototype. How are we going to ship this thing? Let's talk about the factory layout, let's talk about suppliers. So same thing there; instead, it's Gerhard telling you, "Okay, let's talk about scanning your container images. Let's talk about using Python for this API component now. So let's talk about Python packages." So your factory just grows and grows; it's just how it is. And eventually, you reach a point where you say, "This factory is out of control." \[laughter\]

**Jerod Santo:** Oh, I've definitely said that.

**Solomon Hykes:** "...and I need to go from an artisanal workshop, that is honestly getting a little messy, and I need to industrialize this. Make this an actual factory, because it's time. We've reached the threshold of scale, or complexity, or business requirements..." You know, like "Okay, now there's a customer, they depend on us." Something happens, and someone will say -- usually, a DevOps person, like Gerhard, will say, "As your designated DevOps person, I'm telling you it's time to industrialize." And that's where Dagger comes in.

**Jerod Santo:** Okay.

**Solomon Hykes:** That's where you daggerize.

**Jerod Santo:** So I'm not picking up Dagger right away. I'm picking up a Dagger eventually.

**Solomon Hykes:** I think today that's true. We're trying to make Dagger more and more approachable, and more and more of an obvious no-brainer decision from day one. Like, "Why would you not start there?" As of today, that's not the case. I'm hoping that in six months it'll be different. By the way, the same thing happened with Docker. It was a long journey swimming upstream, making Docker gradually more and more accessible to developers on day one. And we got there eventually. So I think the same thing will happen. Eventually, you'll say "Well, you might as well just start here. It's all easy, and everything; you can have this ready-to-go sample factory."

**Jerod Santo:** Right.

**Solomon Hykes:** So in six months, I might tell you, "Well, Jerod, the way you get started is you install the Dagger CLI, you select one of the 10,000 ready-to-use environments. You said Ruby on Rails, Postgres, so search for that; you'll find it. Type one command, boom. You're in business." So that's the answer in six months.

**Jerod Santo:** That's more what I was expecting you to say this time. Fair enough. No, fair enough. It's just where it is.

**Adam Stacoviak:** Is that what you're working on them, this CLI and this magic behind the scenes? Because you said six months.

**Solomon Hykes:** Oh, yeah, there's a specific project that's happening.

**Jerod Santo:** That's not very far away.

**Solomon Hykes:** I have no idea when it's gonna happen. I'd say 12 months...

**Jerod Santo:** \[laughs\]

**Solomon Hykes:** When internally we're like "This is totally going to be ready next month", I say six months.

**Adam Stacoviak:** Okay, cool. So it's in motion, is the point. It's in motion. I'm not trying to hold you to a line, but just... It's in motion. This is something you're doing.

**Solomon Hykes:** No, it's in motion. We're at the phase where we're deeply uncomfortable showing demos, because it's so rough and early, but we do it anyway. We actually showed a rough prototype to our community at last week's community call. So it's on our YouTube channel, you can find it. But this is like -- it's inside baseball still at this point. Like, if you're not hanging out on our Discord, and kind of in the know, you're gonna see it and be like "Okay, this is a science project." But that's how we start everything. But yeah, things are definitely in motion.

**Adam Stacoviak:** Cool.

**Jerod Santo:** \[01:08:04.04\] So who's your ideal community member today? Somebody who's in DevOps already? Maybe they've been running a bunch of systems...

**Solomon Hykes:** Yeah, I think someone who either is or aspires to be what I would call a platform engineer. I feel like that's becoming a controversial term, but someone who's the DevOps person, and uses code to automate what they're doing, or aspires to use code to automate what they're doing, as opposed to purely clicking and writing a bunch of YAML. There's an evolution in the role where at some point it becomes a real engineering function; that's part of industrializing this whole thing, and anyone who is either doing that today and looking for better tools, or aspires to do it and isn't sure where to start, should join our Discord today, and immediately see how people doing it every day talk what they're doing, and they're kind of converging around the Dagger community.

**Jerod Santo:** An interesting place to be, for sure.

**Solomon Hykes:** Daggernauts, by the way. We call them daggernauts.

**Jerod Santo:** Daggernauts. Okay, that's better than daggerdots. Yeah, daggernauts is good. I think that's a cool place to be, because I can tell -- I mean, especially as this mirrors now to a certain extent the Docker story, this is the time to be involved, and if this thing is going to take off like a rocket ship, be part of it. Early community members... There's just so much opportunity, and so much -- you can contribute to that, right? Because it's easy contributors time. Maybe you can speak a little bit to the contribution, maybe policy, or ecosystem... Because it's difficult. You said you're like 100% community growth-led. I'm sure as a product owner that's challenging, because you have ideas, they have ideas... Do they always jive? Like, if I hop into the community, how does it work?

**Solomon Hykes:** You know, that part is not really a problem today. There's always tension between the power users and the people building the product, and so that's healthy. In open source this just means there's a more tangible way to resolve the tension, because the power user can open a pull request and say "This is exactly what I mean." The difference with, I think, what you're picturing, of like your typical CNCF project, let's say, where community is very different... I would call that actually an ecosystem.

**Jerod Santo:** Okay... What's the distinction?

**Solomon Hykes:** Well, the distinction for me is that our community is defined by a shared vision and a shared excitement about specifically the Dagger brand and the product behind it, and using it. So it's all power users, or aspiring power users. It's not a bunch of different companies that have different interests, different motivations, may be our competitors, but happened to collaborate on a well-defined piece of tech. That does not meet my definition of community. Other people can do what they want, but what we call our community is different.

With Docker, we learned that the hard way, because a lot of people said "The community!" talking about our community. So we allowed others to define what our community was and wasn't. And usually it was in the shape of competitors, who were not excited about our brand, didn't have a shared vision with us; they were not particularly rooting for our success as a company, were not using our product, but they did want to collaborate on a shared piece of tech, which is completely legitimate. But that's an ecosystem. Eventually, we spun out some separate open source projects and donated them to CNCF, so that that ecosystem had a place to go.

So there's Containerd, there's runc, the OCI spec etc. Is that a community? Yeah, sure, maybe. But the Docker community, really the core of it, which we realize, are Docker users. Mostly, they're developers and DevOps people; less so infrastructure folk. I think the infrastructure community either actively hated, or just generally resisted adoption of Docker, for good reasons, because it was kind of designed to kind of bypass them, and it was not designed primarily for them.

\[01:12:05.00\] I think it's something new, and unstable, and who's gonna be on the hook to fix it at four in the morning? Of course, it's not gonna be the developer, right? So what I mean is, we realized over time that the Docker community is a community of developers. And so over time, we just kind of -- in fact, the tension internally was that it was hard to kind of reconcile everyone at Docker that that was true. And there were just a lot of possible \[unintelligible 01:12:28.15\]

Anyway, in our case, when we have tension with the community, it's users saying "This is broken. Could you fix it? Or could you prioritize things?" Or we bike-shed a lot on the design of the next API thing, but we kind of turn it to a positive thing. We have this private joke that bike-shedding is healthy, and you bike-shed once a day... It's all done in good spirits, so it's a lot of fun.

There's really no room for like -- let's say Red Hat decided "Oh, Dagger's awesome. I'm going to build OpenShift 4 on it", and I'm going to say "I'm going to be the Dagger corporate sponsor." Well, there's no place really to do that; it's just not the right place to do it.

So the other half of this is that we've tried to design the commercial parts of this product into the overall experience early, so that it's clear to everybody what's open source and what's not, what's free to use and what's not, and it's sort of organic, as opposed to later it becomes a source of stress and confusion. We're trying really hard to do that early.

**Jerod Santo:** Would you describe it as open core?

**Solomon Hykes:** Honestly, I don't know, because I don't understand what the boundaries of open core are. But I guess roughly yes. I would say yes. I mean, the engine is open source, the SDKs are open source, the CLI is open source... So you have everything you need to develop and run these pipelines. You can daggerize to your heart's content. 100% open source. What happens is then when you run these pipelines in a CI environment, usually it's a bunch of machines in a data center somewhere, and then you need a control plane, because you have a bunch of engines running pipelines in parallel; you need to coordinate, you need to monitor them, they need to share cache... Caching is a huge part of what makes Dagger great because everything's cached by default. It's a property of the dagg.

So everything becomes way faster, very quickly, compared to old-school pipelines. But there's a data sharing element, so you need to coordinate that, the distribution of the cached data. And then you just want a place to see what's going on, visualize on the web interface your dagg, and then troubleshoot, collaborate, things like that. So all that is in this commercial product that we're building. We started rolling it out in the early access, but it's not launched yet. But it's a pretty natural line. Basically, it's purely product design-driven. For any given feature, we just ask "What's the best user experience? Where does it make sense to put there? Should it be in an individual engine, running on an individual machine? Or should it be a globally shared cloud service?" Like literally, how does it work better? And whatever the answer is, that's where it goes, and that's it.

So there's really, so far - fingers crossed - it's pretty aligned, and I think... Yeah, we'll see where it goes from there. The test will be one day we'll be big enough that a big company will come in and say, "I want to sell my own Dagger control plane, and here's a pull request to add a plugin support, so that everyone can swap out their control plane. And you better merge it, or I'm going to blog about you and say you're mean", and we're going to say "Thank you for your pull request, but it's denied. And you're free to fork, but call it something else." So we have a very open copyright stance; it's like a very open license, a real open source license... But we have a very strict trademark policy. By the way, that's the Red Hat model.

**Jerod Santo:** \[01:15:57.16\] Right. So Dagger the open source project has to use Dagger, the service.

**Solomon Hykes:** No, it works without it. It's optional. It's optional. In a production CI setup it will be faster. It probably will not meet your criteria for production deployment without it. But you're free to build your own control plane, and maybe one day you'll be able to buy an alternative control plane from someone else. There's no such thing on the market right now, because we're too small... But you could do that.

**Jerod Santo:** Right.

**Solomon Hykes:** But we will always be at an advantage, because if the Dagger brand and platform is why you're here, that brand and that platform identity will remain ours. So that's more of a HashiCorp model in that sense.

**Adam Stacoviak:** Yeah. But you said that you wouldn't accept the pull request for a plugin, or something that allowed you to plug in a different control plane.

**Solomon Hykes:** Yeah. I mean, we make it technically possible, but... Very simple - there's a Dagger login command where you can log into Dagger Cloud. There's not going to be \[unintelligible 01:16:53.04\] alternate provider. Not that today there would be anywhere that you could do that, because no one offers that... But yeah, we don't plan on allowing that.

**Adam Stacoviak:** And that PR will be on the pull -- that'll be on the open source, right? That pull request will be on the open source, and be denied?

**Jerod Santo:** Because the CLI is open source.

**Solomon Hykes:** Yeah. That would be denied, yeah. I don't have a problem denying that. The reality is if our community cares enough, then we'll have to really get to the bottom of why it is, and then take it from there. It should not be impossible to buy a competing product, but you're in here, building on a brand and a community that we spend money and time and energy building, and the community exists because we're doing a good job, people love what we're doing... And you get to come in and play on a level playing field? No. Go build your own community. I think that's fair. Or hey, guess what - we have a new marketplace offering. If we don't create fair, exciting opportunities for other companies to make money in our platform, then we're screwing up the opportunity. We have to kind of, as the value of the platform increases, we have to offer opportunities for the ecosystem around us to share in that value, or worse, we're going to miss on the opportunity. By the way, that's something that Docker did not do well... But part of the reasons Docker didn't do it well is because we didn't have enough carrots, but also not enough sticks. Like, a lot of the potential partners are like "Oh, great, no, thank you. I don't need to partner. I'm just gonna take this brand. Thank you." So no, you don't get to do that.

**Adam Stacoviak:** What's the percentage of production environments or deploys that would be greatly benefited by having your paid-for control plane?

**Solomon Hykes:** Well, it depends on what you call production. Today, the path is really you start using Dagger on developers' laptops. And then once you're comfortable, and there's a team that really loves it, you start running it on your CI platform. So GitHub Actions, GitLab CI, Circle CI, your Jenkins cluster etc. And so that's what I would call production here. And so in that CI environment, I would say 100%. 100% of those deployments need Dagger Cloud today.

**Adam Stacoviak:** Are we using this control plane, Jerod? Do you know much about if we're using the control plane that he's talking about, or not? So we're able to do what we do without -- and we use GitHub Actions...

**Jerod Santo:** How are we doing it? Tell us how we're doing it, Solomon.

**Adam Stacoviak:** Yeah, how are we getting around your control plane, Solomon?

**Solomon Hykes:** Just to be clear -- I mean, there's lots of ways... If you're a Daggernaut, and you're familiar with the platform, there are many ways to make it work without this. So the way -- for example, the way Gerhard's doing it is it's running on one dedicated machine, and so you don't need to distribute cache data around...

**Jerod Santo:** Right. Keep it simple.

**Solomon Hykes:** ...because it fits in one machine, it's all in local storage. And he's set it up that way, and anyone can do that. So I'm painting with very broad strokes here; every step of the way, what I described, there's a million ways for the community to make it work for their use case. We're talking about businesses coming in and saying, "Okay, I want to rely to industrialize, meet my pipelines. Let's talk about SLAs, let's talk about budget, let's talk about lock-in... Let's talk about a commercial partnership."

**Adam Stacoviak:** Yeah.

**Solomon Hykes:** And that's where these things really matter... Yeah, that's where they matter.

**Adam Stacoviak:** \[01:20:17.01\] I think our questions are more like parameters, or more like boundaries. What's the boundary of "Come be part of the community", as you described it, give you all feedback, be excited about where you're going, have that shared vision? How can they freely adopt all the ideas you're doing, and at what point do they have to convert to any sort of paid scenario to leverage and use the tool? We're trying to map out what that boundary is.

**Solomon Hykes:** It's purely -- yeah, when you need to run it at scale, and you need this control plane running alongside it, and that's the boundary of our commercial offering. For example, we don't have a hosted version of our engine that is somehow better. We don't sell compute at all. We don't have an enterprise version of the engine, or add-ons to the engine that make it better... None of that. So all of that is open in the truest possible sense. So it is very open. I've been focusing on -- what's been on my mind was where we insert ourselves, and making sure that's solid.

**Jerod Santo:** Sure.

**Solomon Hykes:** But day to day, I'm sure 99% of the Daggernauts even today are not aware of any paid offering, because it's not on our website. It's starting to come up more now, because what happens is people come back on Discord after a few months, and they say "Hey, so I love Dagger. I'm doing this and this, and now we're going to CI, and I just realized when I run in a CI, it works, but my cache is always empty. Or it's frequently empty, because the machines are ephemeral. So the local cache goes away. Hey, I'm just wondering if there are solutions to that." And we say, "Yes, there are hacks here, and a commercial product we're building that will solve exactly that. Would you like to talk about it?" And it all happens very naturally.

**Adam Stacoviak:** Well, that's a downfall, I suppose, of the early Docker model, to go back to Docker... It was enterprise, it was salesperson-driven, it was very much not bottoms up, it was top down. And I think that they realized where to capture the value was to actually create value for individual developers, and then charge proceed, essentially. And so you're learning this lesson, I suppose early, that your value really is the ability to talk to those who want to scale, or operating at scale, and charge them, for a great control plane. Right? You don't need that at a smaller scale, and that's fine, because you want Dagger, the idea of daggs, Daggernauts - you want this to be a standard across all developer environments, and it begins on the dev's machine. What better place to begin rather than somewhere else? But the moment you needed to do some sophisticated CI, GitHub Actions etc. - well, now you're a different kind of customer, and you have different kinds of concerns, and you probably have different kinds of pockets, with willingness to separate yourself from your money, for value.

**Solomon Hykes:** And I'll be honest, the exact interface there, that transition - we're still sweating the details; literally, that's the other topic on my agenda today. We're figuring out the pricing, and the packaging of it... One topic that comes up a lot is it's good for monetization that a path to production requires your commercial product, but it can be bad also, because it can be a source of friction. If your commercial product doesn't have the capabilities that a particular team needs, or if it's not even launched, like ours, then the dependency can hurt the adoption of the open source thing... Like, "Oh, I was gonna use Dagger, but--" To take a concrete example, our control plane - it orchestrates the caching operations, the flow of data between the engines, and back and forth to a storage bucket, so that the right cache data is at the right place, at the perfect time. So right now, that happens in S3. So that means if you're running your CI on Azure, or Google Cloud, for example, then a lot of data moves back and forth. And that has latency, but more importantly, it costs money, so architecturally it's not ideal. So we're rushing to add support for storage buckets in those other clouds. It's not a massive project, but it's not done yet.

\[01:24:19.13\] Meanwhile, we have people saying "Hey, I'm ready. I'm on Google Cloud, let's go! I want this control plane" and we're like "Wait, wait!" So this is where maybe it wouldn't be better at this particular time for the health of the platform if it was possible to go to production without buying Dagger Cloud. Because there is no Dagger Cloud to buy at any price right now that does this. So we're trying to figure this out.

And also then the price. What if you pay 100 bucks a month for your CI? ...in other words, not a lot. And you want to use Dagger on it. What if our first plan is at 500 bucks a month, so you're paying five times more for your control plane for your daggerized environment, than the compute that actually runs it? That doesn't compute. So probably we would need a cheaper plan. But then how cheap do we make it? How much of this should be a commodity infrastructure?

It feels like the more of a critical dependency it is on a commercial thing, the more responsibility we have to make it easy to use, for smaller teams, at a lower price... And also to be more reliable, because it's going to have to be -- it's going to be everywhere. So it better work properly, and not be priced ridiculously; at least not at the entry level. So that's the stuff we're figuring out now.

**Adam Stacoviak:** Community-led growth. Once you get to a certain scale, you can pay them. You're not sure how much to charge yet. Interesting times. \[laughter\]

**Solomon Hykes:** Yeah. I love this though. Remember, six months ago we were dealing with people trying to learn CUE, and failing. And now we're dealing with people who want to buy something from us, and we're figuring out how. I'm appreciating that change.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Yeah, it's a much better problem to solve.

**Adam Stacoviak:** For sure.

**Jerod Santo:** Well, Solomon, thanks so much for coming on the show, and thanks so much for think -- I mean, thinking out loud with us, even. I can tell, this stuff is like -- you're actively mulling a few things, and metaphors. You're working on the metaphors.

**Solomon Hykes:** Yes. Work in progress.

**Jerod Santo:** It's a work in progress. I think things take a while to formulate, and I'm now starting to understand Dagger much better. I think that one of your challenges will be education as things go forward. Of course, the website currently says "CI/CD as code, that runs anywhere." Not a bad starting place, but there's definitely way more to Dagger's story. So exciting times, man...

**Solomon Hykes:** Yup. Thank you.

**Jerod Santo:** Definitely interested...

**Solomon Hykes:** It kind of feels like you came over and visited my mental workshop for an hour here... \[laughter\]

**Jerod Santo:** We definitely workshopped a couple of things, which - hey, we're here for that. We love to think things through together. It's fun and stimulating.

**Solomon Hykes:** By the way, this is how our Discord feels every day. This is basically what we're doing with our Daggernauts all the time. We have all these discussions openly, and it's really fun. I really enjoy it.

**Adam Stacoviak:** Yeah. That's cool. I'm looking -- since you're talking about... Jerod, we're sort of like ideating... The value proposition and how it's described on the homepage - the only positions open are in engineering. It seems like maybe content production, or things like that... The educational front of things, which is all content, really.

**Solomon Hykes:** I agree. Yeah. Actually, that page is out of date, because we've been pursuing directly some people on the marketing side. We actually have a VP of marketing as of last week.

**Adam Stacoviak:** Congratulations.

**Solomon Hykes:** \[01:27:44.02\] So that's very exciting. We're also hiring -- we're going to start hiring for the Head of Content Marketing on top of that, for the reasons you explained... And the other trick we use is a lot of the people on our team who are engineers, or have engineer in their title, also wear a dev relations or advocacy hat. There's all sorts of interesting variations. You can have combinations. Kyle, whose our Solutions Engineer - he's out there supporting production users, and now customers. Pre sales, post sales... He's also doing a lot of -- I mean, he wrote a lot of blog posts, guides, produced a bunch of videos... Because it turns out if you have operational experience supporting customers at scale, you can come back; if you're the right kind of person, you can come back and package that into a story. Kelsey is like the ultimate example of that.

**Adam Stacoviak:** Yeah.

**Solomon Hykes:** Vikram, who came in as our tech writer, is increasingly active on the engineering side also. So it's kind of a -- there's a lot of these interesting hybrid roles in early-stage teams that I think are really fun, and also really hard to hire for, because they don't fit one neat label. So we share the burden of helping, supporting, educating... But yeah, it's a lot work. A lot of work remaining.

**Adam Stacoviak:** Yeah. Well, the number one question they have there is, "What the heck is this thing? Tell me what this thing is."

**Solomon Hykes:** Yup.

**Adam Stacoviak:** And I think part of this workshopping we did was finding the right analogy, how to describe that analogy... And even when he talked about the boxes, and the standardized boxes - that started to make more sense to me, and how it was a factory, and what's inside the box is what Dagger made, essentially. That all began to piece together for me. That's half the battle, when you're starting to innovate on the edge, like you are. You cannot describe what it is because it's not quite defined yet.

**Solomon Hykes:** You know, we just passed a milestone. I was writing our investor update, and we count the number of pieces of content that were created; blog posts or videos, basically, about Dagger. And for the first time, our community of Daggernauts produced more than we did.

**Adam Stacoviak:** Wow.

**Solomon Hykes:** And I think that basically -- that basically sums up our strategy for this. We're gonna get better at telling the story, but it's just such a complicated and nuanced story that our website will never capture the full story. It's gonna get better, just to be clear, but we're very dependent on our community taking that story and packaging it in their own words, for their own audience, and then going out there and telling it. That's been the number one way we've grown and seen new users come in, is through these early Daggernauts, that go out there and then make the story their own. And then more Daggernauts show up. So we're trying to enable them as much as possible, to fill the gaps in our own storytelling... Because they got it so let them tell it, maybe better than us, or more tailored to their audience.

**Adam Stacoviak:** Yeah. Are you proud of your docs? Should we send folks to something like the quickstart guide and your docs? Is that a good spot to send folks to?

**Solomon Hykes:** Yeah. I mean, Dagger.io, and then follow the signs. But yeah, one thing I would say is, if this is a topic that interests you in general, then I recommend joining the community, joining the Discord, and saying hi and hanging out, independently of whether you have a use case for Dagger right now... Because there's this -- you mentioned it before, but there is an ongoing change right now in this whole DevOps landscape; how applications should deliver... It's huge. It's bigger even than Dagger. And so if you're even remotely interested in where that's going, come hang out; we get to ask you questions about your experience of that, and vice versa.

**Adam Stacoviak:** Very cool. We'll get you back on in six months, or maybe a year, see what's changed... Maybe everything's changed, maybe nothing's changed.

**Solomon Hykes:** I hope something's changed.

**Jerod Santo:** Something will have changed.

**Solomon Hykes:** I think if a few lines keep going up, it'd be nice. Up and to the right.

**Adam Stacoviak:** There you go. Until next time, Solomon. Thank you.

**Solomon Hykes:** I look forward to it. Thank you, guys.
