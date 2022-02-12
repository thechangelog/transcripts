**Jerod Santo:** We're super-excited to be joined by C J Silverio. You may know her as Ceejbot, or simply Ceej...

**CJ Silverio:** Hello!

**Jerod Santo:** ...the second hire and former CTO at npm, and you're here to talk about something new and shiny, and not even out there yet; you don't use it yet, but it's super-exciting - it's Entropic. Ceej, thanks so much for joining.

**CJ Silverio:** It's a pleasure to be here with you all. It's a pleasure to be talking JavaScript, too.

**Jerod Santo:** Absolutely. So you kind of dropped a bomb at JSConf EU, and have one of the most watched videos from the conference talks, which was published on June 3rd, all about the economies of open source. We're gonna dive all into that, but... Can you give the elevator pitch or the brief synopsis? Everybody, we'll link up that; you should definitely go watch it, especially the last five or six minutes, where the bomb gets dropped...

**CJ Silverio:** \[laughs\]

**Jerod Santo:** I just loved it. I wish I was in the room, because everyone was so excited, and you were excited...

**CJ Silverio:** That was an amazing moment. I have never had a conference-speaking moment like that before. Literally, when I got up, I had no idea how the crowd would react to the news... And when I heard the reaction, I was as surprised as anybody else.

In this talk I talk about npm, I talk about JavaScript's package manager, I talk about its history, including a bunch of history that most people involved in JavaScript now might not know... Because it started in 2009, and the bulk of people using JavaScript on a daily basis never needed to know where it came from; it was just a fact of life. You start using JavaScript today, you're using npm. Well, how did npm get there? Why is npm there? Okay, it's a company; why is it a company? How does it make money? What are its goals and motivations?

And because I was an insider in part of the story, I could talk about that part of the story. It turns out that when you run something at that scale, it does cost money to run, and it's probably not a consequential number when you talk about giant businesses. I think Laurie Voss, the chief operating office at the time, figured that you could run npm the company for 99 years for the amount of money Uber burned in a single quarter...

**Jerod Santo:** \[04:19\] Oh, wow.

**CJ Silverio:** ...which is scale - that tells you it's actually pretty small on the cost scale. But it's still a notable amount of money as far as human beings are concerned. When you're talking about tens of thousands of dollars a month - well, you know, $30,000 and up - in AWS bills and network bills, that's notable; you have to have a story for how you're gonna pay to run a package registry that every single JavaScript developer uses for free.

Free is relative. You type "npm install react" or "create react app", and you didn't pay anything for that, but it still cost money to happen. So how does that work?

**Jerod Santo:** Right... Oh, we don't have to think about that; it just works.

**Adam Stacoviak:** It just does.

**Jerod Santo:** Yeah, for a little while.

**Adam Stacoviak:** Imagine money comes from the fairies, and bills get paid.

**CJ Silverio:** Yeah. You leave out a little dish of milk, and then the JavaScript...

**Jerod Santo:** Once a year, yeah. Cookies once a year.

**Adam Stacoviak:** This is JS Milk right here.

**CJ Silverio:** \[laughs\] You know, I worked on the technical side of that. People who worked at npm would talk about how that happened; everyone understands that yeah, there's technical work that has to happen in order to bring that JavaScript to you, but then I felt it was time for people to look at where the money was coming from, why the money had to be there, and what the consequences of that are... Because we as a group, as a community of JavaScript developers, took all of our commons, all of these open source packages that we wanna share with each other, and we handed them over to a company that's VC-funded. And obviously, I was totally okay with this at the time; I knew "Okay, VC money comes with a hook", but I thought we'd be okay.

I think the talk, and Entropic the project come from my realization that I was fundamentally wrong. I made a mistake. Not in like really working hard to make Node success, to make JavaScript go; that was fantastic work that I am so proud of...

**Jerod Santo:** You don't regret that time, do you?

**CJ Silverio:** No, I don't regret that time. I worked with a fantastic team. I have been blessed in my career, I have worked with some amazing companies; I've worked with famous people, and people on their way toward fame, and brilliant people who I've learned from... The npm team was just fantastic people; they were great human beings to work with, and I'm extremely proud of them and the work we did together... But I think it was in the service of the wrong cause. Not JavaScript, but the underlying profit motive was the wrong thing for that particular task.

**Adam Stacoviak:** What was that profit motivation?

**CJ Silverio:** I go a lot into this in the talk, but the motivation -- it turns out that when you take VC money, you are suddenly in it in order to give the VCs a payoff. This is like a completely open transaction - when you take money from VCs, you should know this is generally how they approach it, this is how their funds work...

**Jerod Santo:** Absolutely.

**CJ Silverio:** ...this is what their timeline is for getting a return on their investment. And you can't opt out of that. Once you've handed over a chunk of your company to them in exchange for this money, they in fact want that payoff, and you have handed control over your company to them in exchange for that payoff. Sometimes that's exactly the right tradeoff to make.

\[07:51\] I'm working for a company right now that VC funding makes perfect sense; external funding makes perfect sense, because the money has a very clear thing you can do with it, it has a very clear way to accelerate the business, and there's a very clear exit story that makes sense, aligns with VC goals. And for something like a language ecosystem, this is not a short-term project. This is not a "Go big or go home" project. It's not a "We're gonna grow, we're gonna be the biggest possible, we're gonna make a lot of money, we're gonna have an exit... Or we're just gonna go bust and we're gonna be on that Tumblr blog of like 'My incredible journey', where you shut down everything."

**Jerod Santo:** Right. The startup graveyard.

**CJ Silverio:** Yeah. You can't do that with the thing that all of JavaScript needs to keep running.

**Jerod Santo:** There was a moment in time - and again, the talk goes through it - and you do a very good job of going step by step through the history... There was some there that I definitely learned; even Adam and I have been along for the ride, so to speak, both as users of Npm and as people who are having these conversations... We've had Isaac on Founders Talk, we've had npm employees, current and past, on a lot of our shows, so we've been along for the ride... But definitely worth getting the full history.

And there was a point in time where it's like "This thing can't exist for free without somebody stepping up and putting money in." And at that point it was like "Well, there's different ways of doing that", and the way that it went was VC capital, and that really sustained npm for years, but it brought all of us alongside it and centralized the commons.

**CJ Silverio:** That was the moment I got involved actually, and I probably wouldn't have been involved without some way to pay my salary... Or at least that amount of all-consuming work is something people don't do for free, and you should never expect them to do for free. That's the way to burn people out.

Npm at the time it was founded - the very end of 2013 was when those first discussions happened, and the very beginning of 2014 is when the company started moving as a company. During that period, npm was a tire fire; it was down... It was like nine sixes of availability. It needed serious attention and serious operational work to stabilize it, and that's something that's hard to get from human beings, it's hard to have people on call 24/7 without paying something for their time and attention.

And the trade-off is really interesting, because most of the language systems haven't done this. CPAN has chosen a very different approach to this, but RubyGems is a volunteer-run thing, and your expectations for RubyGems are very different from where your expectations from npm are. The scale that npm reached was possible because they had a team of professionals working on it and moving it from a single CouchDB to the system it was.

**Jerod Santo:** Right, to the system that it is now today. When you say the expectations for RubyGems are different - you mean in terms of support, speed of downloads? Because RubyGems is free to the end user, just like npm is.

**CJ Silverio:** Right. It's all of these things. Npm support was for a while legendary; the npm support team was just fantastic. A bunch of really empathetic, customer-centric people who did -- most of their time was spent supporting open source users, not paid users... And the attempt was to give that really excellent, high-quality level of support to everybody. You can't do that if you're not paying salaries, because you're using somebody on their free time.

The service-level agreements - you never really sign up for that with npm, but people came to expect that they would get a really nice, professional, supportive, helpful answer from a professional support team.

And the uptime - again, when something is run by volunteers, you have a level of forgiveness that they might not be awake at 3 AM in their timezone. But npm, because it was a company, and because it could afford to run operations 24/7, we had a team of contractors in Eastern Europe helping us on the times that we were asleep.

\[12:18\] Because all that support was there, the expectation became that it would be up, that it would be fast, that you would get professional-level support... Because it was a company, and it could do this. And this, I think, let it reach a scale and a ubiquity and an unthinking use level that is harder for languages that didn't do this to reach.

**Jerod Santo:** We have a lot of listeners in the JavaScript and npm ecosystem, and I'll just say - for many years, npm was kind of a bastion of JavaScript in the ecosystem, because of the support, the people that were there are awesome... And it hasn't been until the last maybe 6-8 months, maybe a year where we started to see the chinks in the armor, we started to see the problems come about. But for those people who are maybe writing Go day-to-day, or are not in that ecosystem, can you describe a few of the things - why is this a problem; what are we seeing where we're thinking "Maybe we made a bad decision." You said specifically you would have made a different decision back then maybe.

**CJ Silverio:** Right. The idea that you might lose this thing, or that this thing is in the hands of someone whose incentives are not aligned with yours. Node for example is part of the OpenJS Foundation; it was its own foundation for a while. This is a community resource; the platform definition, the implementation of the platform, the direction that it goes in - this is essentially a community project; it's funded by corporations, but not by any one corporation. And they all have their goals, and they sometimes are at odds with each other, but mostly there's not one turtle that wins; they're just climbing over each other. That metaphor is very insulting to them all; "Y'all are turtles." \[laughter\]

**Jerod Santo:** Maybe insulting to turtles, I don't know. Could be. \[laughter\]

**Adam Stacoviak:** Very interesting.

**Jerod Santo:** Yeah.

**CJ Silverio:** But the point is there are checks and balances, and in the end where the community needs Node to go is where it goes. And here we have this important, critical part of the ecosystem, our shared codebase, the things we give away to each other to reuse, to build the web with, isn't part of that foundation. It is in the hands of a company that needs to return its investment. Now, one of the things it's gonna do to return that investment - do you really want advertising from your npm client? This is something that VCs would occasionally also probably suggest to us. "Yeah, so have you thought about putting advertising to the client?" and the answer is always "Lol..."

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Right.

**Jerod Santo:** Well, we've seen a few package maintainers starting to try such things like this, and there's lots of backlash; developers don't like it, and then there's a lot of conversation, "Well, it's a free thing. You've gotta support the maintainer etc." There's a whole thing there, that we'll breeze over... But yeah, for VCs for sure it's a straightforward path.

**Adam Stacoviak:** Right. We're in this cycle of people needing to get paid salaries to do fine jobs that needed to be done with npm to get to the scale it's at, and we've gotta find some way to get the money... And the way that npm thought to get the money to do this great adventure was through venture capital. But that had some obvious downsides to it... But then there's also some obvious upsides to venture capital, which is large amounts of cash, hiring the right kind of people, \[unintelligible 00:15:34.02\] But you've got that payback process happening.

**Jerod Santo:** Right. There's a new master, basically.

**CJ Silverio:** Exactly, exactly. And if you do your job as a company, if you come up with a product that pays the bills... If npm had found a way to monetize the public registry, we wouldn't be having this conversation. Everything would feel differently. But they never found a way to make their biggest expense turn into income.

\[16:04\] All of those grillions of downloads, that nearly exponential downloads graph represents cost. We were able to, with solid engineering work - I won't say brilliant engineering work, but solid, straightforward engineering work, the kind you can feel good about... That turned it mostly into linear costs in response to that exponential growth. But still, costs continue to rise.

**Jerod Santo:** Yeah. I mean, that was the goal of the new CEO, right? We had Isaac on Founders Talk...

**CJ Silverio:** Yeah.

**Jerod Santo:** Adam, you talked to him about a year ago, maybe more... And he was bringing on a new CEO, and it was his job to find a way to turn those costs into profits. And that's been where it got really rocky after that.

**CJ Silverio:** Yeah, it did. He's an interesting character...

**Jerod Santo:** Is he still there? Is he still the CEO today?

**CJ Silverio:** Surprisingly to me, he's still the CEO, yeah. He questioned assumptions in a way that I actually think was useful and healthy. He walks in and he's like "Why do we have to run the public registry?" Now, that's a perfectly legit question to ask about the company. It's kind of an earth-shaking question to ask if your vantage point is JavaScript, right?

**Jerod Santo:** Yeah, for sure. Let's just turn this cost thing off...

**CJ Silverio:** You know, I don't think anybody ever floated "Turn the cost thing off." It would be "Give the cost thing away." But it kind of rocks the foundation of the whole reason the company exists. Why does npm the company exist around the public registry? Why did everyone who went to work there work there? It was to run the public registry. That was a very mission-driven group of people. I was totally driven by the mission myself. The public registry was why I cared about my job. It was a way to have a really high impact on the world and on developers; when your work is used by every single web developer in the world, that's amazing. It's just such a lucky thing to have in your career, that feeling...

**Jerod Santo:** So let's return to the end of the talk now, because we've talked about some of the problems with npm, and I wanna set the stage... I want everybody to go watch it, especially the end, because it's so much fun. I will admit, as an interested listener, but somebody not there, and I was just watching it and I was along for the ride, step by step - I started thinking "I understand step by step what she's saying. So far it sounds like mostly just stating the problem." I'm not gonna say you were overly complainy, but I was starting to feel depressed; I'm like "Yeah, this is just problems, problems, problems", and then you said "I'm not a fan of handrwinging and I don't like the do-nothing answer." You said "I believe in open source. It's good for us to give code away to others", and you announced Entropic.

**CJ Silverio:** Oh, yeah...

**Jerod Santo:** That was the bomb drop for me. This was awesome. Tell everybody what Entropic is, for those who weren't there and haven't watched it yet.

**CJ Silverio:** Entropic is an open source federated package manager and CLI for JavaScript. It doesn't have to be for JavaScript. I have goals of solving package management problems for other languages someday... But JavaScript first.

We set out to make something that would make it possible for everyone to run their own registry without needing to shoulder the full burden of being a centralized registry for all of the JavaScript ecosystem. You can mirror or support as much traffic as you need to; you mirror the part of the registry you're using. There might be a lot of these. They federate data with each other.

I was deeply inspired not by Mastodon's API, but Mastodon the concept of ActivityPub and how you can have something that replaces the centralization of Twitter with something where I can run a Mastodon. I do run a Mastodon instance, and my friends are on it, and we participate in this wider ecosystem, and I don't have to be Twitter-sized in order to do that. I thought "Why can't I do this with package management?"

\[19:59\] The other thing - we had Chris, my partner, in this project (Chris Dickinson), and we're now joined by Kat Marchán, but Kat wasn't part of the project at the time of the announcement. Chris Dickinson and I had spent the previous four years (more or less) running npm's registry, coping with the scaling challenges inherent in it... And we had a very good understanding of the set of problems you have to solve in order to do this at scale. We had a very clear idea of the problems with npm's data model. So I think quite like living with something, and needing to make it go big to understand exactly why it was a bad idea. You never know that when you start it.

We knew what was wrong with the API, we knew what a good API would look like, we had some very clear ideas about how to make this achievable for normal human beings. We didn't have an enormous AWS account and bandwidth to burn... So we said "Okay, let's do it." We were there for the mission, let's keep working on the mission. Let's make it so that whoever does this next doesn't need VC-level to make it work, so you can take control of your data.

If Substack -- I love talking about Substack, because he's such a fascinating human being. Have you ever had him on the show? He's James Halliday...

**Jerod Santo:** Have we, Adam?

**Adam Stacoviak:** Not yet.

**Jerod Santo:** What's wrong with us?

**CJ Silverio:** Yeah. \[laughter\] He was very active in early Node, and he and Dominic Tarr have all these little modules that are so cool.

**Jerod Santo:** We've had Dominic on the show.

**CJ Silverio:** Yeah, Dominic is another great example of like "I wanna hand him back control of this stuff. I want it possible for Dominic to run his own Entropic instance and just federate this stuff to the world, and maybe even sell access to it if he wants to make money as an open source author... I think that should be a thing he should be able to do.

I want the Node Foundation - or the OpenJS Foundation as it is now - to be able to run an instance themselves that has the heart of JavaScript in it so that they're safe. They've got control of their destiny; the thing that's important for them to run and important to every Node user. It's something they can run themselves.

I just want people to run a registry themselves. And I thought -- it's an ambitious, ambitious goal... Writing a syncing algorithm that works has been really fun. Chris' brain has been melting out of his ears, but I think we have it.

**Jerod Santo:** Well, let me just give you props on bringing a solution... Bringing code to the table, and saying "Here it is, world. Here's all the problems, but we're working on it."

**CJ Silverio:** "We're gonna solve it." It was a mission statement for me. It was like "Here's why I'm here. Here's why this matters. Okay, I'm not just complaining - here's what I'm doing."

**Break**: \[22:57\]

**Jerod Santo:** So your announcement talk was late May, early June(ish) 2019, and you brought code, but you said "Don't use it, it's not ready yet." Props on bringing the solution to the table; it's very much in development. How long had you been working on it by then and when did this idea begin and the code start to go?

**CJ Silverio:** This will shock you - Chris and I had been working on it for about four weeks at that point. We didn't write a single line of code until the day after his last day at npm. He kind of pinged me and said "We should talk about stuff", and I'm like "I'm not gonna say a darn word to you until you're out." I had a design document for an approach at this... And the Saturday after his last day at npm I sent him the design document and he sent it back to me with only exactly one sentence in it.

**Jerod Santo:** He rewrote it for you?

**CJ Silverio:** Yeah, he rewrote the whole thing for me. I believe the sentence was "And we'll still use semver, but probably standard semver, instead of npm semver." That's the only sentence that stayed the same.

**Jerod Santo:** Is it worth diving into the difference between npm versus standard semver? I didn't know there was a...

**CJ Silverio:** The twiddle and the hat, I believe, are extra-features.

**Jerod Santo:** Gotcha.

**CJ Silverio:** And Rust interprets them differently. The things that are always the worst are standards that are almost, but not quite.

**Jerod Santo:** Almost standards, yeah. So he rewrote it, and he left semver in there...

**CJ Silverio:** Yeah. And then I came back to him a couple days later and said "Okay, how about this, but \*plot twist\* we federate it." He says "Okay, what does that mean?" and I said "Okay, let's walk through the implications of that." So we started walking through what happens when these things aren't centralized, like when they're exchanging data back and forth. And at this point, we actually -- we had missed working with each other quite a bit, so we started this frenetic four weeks of hacking together. We wrote an awful lot of code that we threw away, but it was just like getting back into the groove of writing code again, especially back into the groove of writing code together again.

There'd been people like this in my career I've enjoyed writing code with... It's always such a pleasure. I enjoy writing code with Chris. We have radically different styles; Chris hates semi-colons, and I like semi-colons...

**Jerod Santo:** \[laughs\] That seems like a non-starter right there... I mean, how can you actually work together?

**CJ Silverio:** It's really funny, we ended up with the code styles format for Entropic where we -- we were essentially trolling each other with it.

**Jerod Santo:** Like passive-aggressive semi-colon usage. I like it.

**CJ Silverio:** Passive-aggressive semi-colon usage for me. Then he torments me by standardizing on two spaces to indent.

**Jerod Santo:** Well, I'm glad you guys are sweating the important things, you know?

**CJ Silverio:** \[laughs\] The interesting insight that we both have is that these actually aren't important things, and they're so unimportant that both of us are willing to compromise on it. So we had four weeks of just -- we wrote a working registry in four weeks; it wasn't the API we wanted to have, but you could install through it, and it would store packages, and then install from that locally. And then we said "Okay, that was really easy..."

**Jerod Santo:** Almost too easy.

**CJ Silverio:** Probably... You know, it's like -- lots of features missing, and it would probably fall over in a stiff breeze, but... Okay, that was a good warm-up. Now let's talk about federation. Let's talk about what you have to do in order to have more than one of these and they're synchronizing, and let's talk about what the API really should be. This was the fun part - getting back into straight-up engineering and design together for the first time in a while.

The npm data model is based on this tarball. You take a package, you take a bunch of JavaScript code that's sitting in this directory and you just \[unintelligible 00:27:52.16\] You have these rules for deciding what goes into the tarball, and then you put it in the tarball, and then you ship the tarball around. The tarball is the unit of communication. There's metadata on top of that; there's like the packaged JSON, which is a big, vague document... It's like package metadata and metadata for each package version.

\[28:13\] These are the fundamental building blocks of the existing npm API... And we said "Alright, what if we write our own CLI for this? What would the API be, and what does this actually let us do with the data model?" These are the important things to get right, I think, because implementations are kind of less important than getting these building blocks solid. If we have modeled the data of what should be in a JavaScript package correctly, and we have documented an API that's good enough, then our implementation of Entropic shouldn't matter; you should be able to go write your own. So that's where all the work is right now - taking what we wrote and throwing it away with something that's like the right thing for the future.

Okay, so the tarball - why is the tarball not good? I can tell you why...

**Jerod Santo:** Question...

**CJ Silverio:** Yeah.

**Jerod Santo:** I mean, you're asking me, but I'm sitting there thinking "Tarballs are cool", you know?

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** You pass them around, unzip them, untar them...

**CJ Silverio:** But the thing is that -- alright, you have a package, a JS Party package; you have a bug fix, you make a change to this package and you publish it again. That bug fix may touch one file; you've got a three-line change in this one file.

So you make a tarball, it's got all the same stuff in it as all the previous tarballs, except for this one bug fix, and then that's the unit of data that gets shipped around. This is inefficient, obviously, because most of that data is exactly the same. The API doesn't let you talk about it as anything other than a tarball. This is like the core idea behind Kat Marchán's Tink project, which is like "What if we talk about it in terms of files instead?"

This is still not at rsync level, where you're talking about blocks in files, but it pushes things in the rsync direction, where the unit of exchange is much smaller. Files are pretty good; files are probably good enough for this - the complexity versus time and space tradeoff, as usual, rsync is pretty awesome, but do you really want to have rsync be your package management stuff?

Chunking it up at the unit of files lets you also do things like the secret of Tink and of Entropic, which is content-addressable storage, where you store files, but you only ever store any file once. You just do a SHA256 hash of its contents, and then that's the address.

**Jerod Santo:** Mm-hm. So you can get that same thing out by reference.

**CJ Silverio:** Yeah. So a version of a package just becomes a list of hashes. This is where the content comes from, this is where you put it on disk. If you have those files already, you don't have to transfer them. So when installing your patched version of JS Party, the only thing you have to grab is that new one file.

**Jerod Santo:** Because your new package is just a list of those hashes, and only of them has changed.

**CJ Silverio:** Yup.

**Jerod Santo:** That's cool.

**CJ Silverio:** And this - again, going back to the data model, going super-nerdy insider baseball here on the tails of the npm data model, but this is like... You can hear how excited I am about this; this is the fun part for me. Packages -- if you ever type "npm info" in a package, or if you get a packaged JSON and you curl it from the npm registry, it could be really huge. It could be megabytes large, because it's effectively unbounded. You've got the top-level package information - what its name is, what its description is, all that stuff. And then you have per-version data. And the per-version data - it just grows, unbounded, because you can infinity versions for a package. I used to hate it, too; there were some npm packages that had over 5,000 versions on them. Eventually, these users would split off and do a new package just because it became so unwieldy to download a package...

**Jerod Santo:** \[32:04\] This speaks to the same anxiety I expressed back when we were talking about blockchains, Adam. It's like, all you do is add to the -- like, you just add, add, add...

**CJ Silverio:** Add, add, add, yeah...

**Jerod Santo:** It's an append-only log, and I hate that. There's no trimming, there's no truncation? Like, come on people.

**Adam Stacoviak:** Yeah. Sharding... Anything.

**CJ Silverio:** Right.

**Jerod Santo:** So... Unbound is bad.

**CJ Silverio:** This makes total sense. When you're designing something in 2009 you've got ten users, right? And like "Oh my god, I've got 40 packages. This is epic! Some of these packages have three versions." You don't think ahead, and you shouldn't think ahead, because thinking ahead means complexity and an awful lot of work that you -- it's probably not worth it.

**Jerod Santo:** A lot of YAGNI, yeah. Oftentimes premature optimizations, all those things.

**CJ Silverio:** Yeah, yeah.

**Jerod Santo:** So these weren't decisions that you were making, but you've mentioned CPAN, and I'm thinking about Mirrors... There are other projects that have come before, and now you guys have an experience of building the whole thing, and scaling it... So you and Chris have all that experience of npm. But are you also looking around and saying "How did rpm work? How does CPAN work? How did these other things work?"

**CJ Silverio:** Yes. CPAN is absolutely another inspiration, because it's a network of volunteer sites that together make sure that all of Perl's packages are mirrored. In the end, if Entropic is successful, I would like that to be the solution, where there's like 100 of these around... And maybe some companies that want them, have them internally. But all of JavaScript is redundant and safe across a network of these things that can cooperate with each other. Yeah, CPAN is a huge inspiration.

Anti-goals would be things like -- CocoaPods has a perfectly great solution for itself, that relies on GitHub being there. I guess the same thing is true of the Brew package manager - it depends on a central GitHub/a Git thing... Which I think is okay, given their scale. It doesn't satisfy me very much though, because it relies on that centralization. Essentially, CocoaPods relies on GitHub (now Microsoft) continuing to be generous and just supporting open source, which is -- to their credit, they've been great; they're doing it. But...

**Jerod Santo:** Well, let's pause and talk about that, because that's kind of -- I don't know if it's an elephant in the room, but if you talk about the problem with centralization, at least package registry diversity is better. Like, two is better than one, and now GitHub is getting in the package management game... Your thoughts on that?

**CJ Silverio:** I think, when I wear the hat of someone who's running an engineering team here for the company I'm working for, I think "Oh yeah, it actually makes total sense", because team management is a huge thing...

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Yeah.

**CJ Silverio:** And GitHub -- we're already using GitHub. This is just an incremental step, it makes perfect sense. Aggregation theory says that everything that GitHub does here in this space - I'll just go right in and start using it, because it's easy.

**Jerod Santo:** Right. So Entropic - obviously a different model from all these models, but... Centralization has its advantages, too; we can talk about federation problems - there's security issues, there's convenience issues, there's hosting issues... Even with Mastodon, you have the opportunity for all these other instances, but Mastodon.social is probably like 80% of the -- I'm just making that number up, by the way... But it's a huge instance. People tend to centralize anyways, because it's the easy way... So these are things you're thinking about, right?

**CJ Silverio:** Discoverability is easier when everything's centralized...

**Jerod Santo:** Yeah.

**CJ Silverio:** You have control -- like, Twitter can make a change to how Twitter works, and it's immediate across the whole deployed base. Mastodon - some people have features, other people don't. There's a huge barrier to entry.

**Jerod Santo:** Npm can yank a malicious package.

**CJ Silverio:** Yeah. This right here...

**Jerod Santo:** \[35:56\] That's a huge one, right?

**CJ Silverio:** ...is super-important. Npm also is a centralized place; every published package goes through Adam Baldwin's beautifully suspicious hands... \[laughter\]

**Jerod Santo:** I love that description.

**Adam Stacoviak:** I'm not really sure that's a -- it sounds like a compliment.

**CJ Silverio:** It absolutely is a compliment to Adam Baldwin.

**Jerod Santo:** I'm gonna tell him you said that, "I hear you have beautifully suspicious hands..." \[laughter\] We need to have Adam on JS Party, he's a great guy.

**CJ Silverio:** He's totally a great guy. He's an expert, and because it's centralized, he can look at every package that comes in; he can crack it open, he can look for--

**Jerod Santo:** Yeah. Npm audit is a great thing, right?

**CJ Silverio:** Yup.

**Adam Stacoviak:** That was a big deal for the security acquisition a year or so back; that was a big deal. At the time too we had -- what was that, that was going on at the time, Jerod?

**Jerod Santo:** An exploit?

**Adam Stacoviak:** Yeah, it was either an exploit, or the case where...

**Jerod Santo:** Well, there's been... Event-stream?

**Adam Stacoviak:** ...maybe even left-pad potentially.

**Jerod Santo:** No, event-stream probably.

**CJ Silverio:** Event-stream was later. Yes, there was an ESLint vulnerability... Somebody's account got compromised during that time. And also during that year there was a whole string of incidents of Coinhive being just embedded in things...

**Jerod Santo:** Oh, yeah... The miners.

**CJ Silverio:** It got to the point where any package that mentioned Coinhive or depended on Coinhive - I'd look at it suspiciously, like "Hm... Are you on the level?"

**Jerod Santo:** \[laughs\] You know all these instances way better than we do, because you were dealing with them directly.

**Adam Stacoviak:** When you look at Entropic and being federated, as it relates to security - how do you approach security in the Entropic world?

**CJ Silverio:** Okay, so what kind of the security? That's the first question. Let's talk about kinds of security. There's tampering with contents. Like "Are you getting what somebody intended to publish?" There's that question.

**Adam Stacoviak:** Kind of like a reproducible build kind of scenario?

**CJ Silverio:** Yeah... Or just like "Did someone tamper --" Like, John-David Dalton publishes Lodash. Are you getting what John-David Dalton intended to publish? Was it John-David Dalton who was doing that particular publication of Lodash? These are security questions that you absolutely have to answer - who's doing it, are these the same bits they published, have they been tampered with?

And then you have another set of security questions, which are like "Are these bits intended to be good?" There's a difference between the accidental bug, where like "Whoops! Lodash has a prototype pollution bug in it somewhere." Okay, that's a security issue. It's not an intentional security issue, but it's nonetheless a bug that has to get fixed.

**Adam Stacoviak:** A vulnerability, right?

**Jerod Santo:** In the software itself, not in the registry, right?

**CJ Silverio:** Yeah.

**Jerod Santo:** A bad version goes in because that person wrote a bug.

**CJ Silverio:** That's right. And that's unintentional and will forever be with us.

**Jerod Santo:** Yes.

**CJ Silverio:** And then there's like the malicious vulnerability, with like event-stream, where a maintainer with bad intent gets control of a package through completely legit means, and then publishes bits with a bad intention.

**Adam Stacoviak:** Right... And those bits were legitimate too, because that person had gotten the access in legitimate ways. He was not hacking, so to speak. They may have used social constructs to hack, but...

**Jerod Santo:** Social engineering, yeah.

**Adam Stacoviak:** ...they had authorized access to publish to npm. So it wasn't like they were even committing fraud even, so to speak.

**CJ Silverio:** That's right. And that's...

**Jerod Santo:** That's a tough one.

**CJ Silverio:** That's super-hard to defend against. You might be able to detect it after the fact by looking at the bits that were published and saying "Oh, these point to..." -- nobody should ever be publishing to a pastebin. Those are the things -- the advantage of the centralization, the advantage of VC funding.

**Jerod Santo:** The reaction time to that.

**CJ Silverio:** \[39:47\] Yeah. There's a reaction time because you can afford to pay Adam Baldwin and a team to be looking at these things all the time. But there are other fundamental security questions that I felt while I was at npm that npm didn't have good answers for... And it was difficult to make progress on them because of resources. Things like package signing. Everyone wants package signing, and it's actually tricky - "What is package signing? What are you signing? Why are you signing it? What are you defending against when you sign a package?" These are the questions, by the way, that I'm working on right now with Entropic, because the data model is different. We have a top-level package metadata, and then an immutable version metadata object that is separate.

We have a thing that we could consider signing; that content-addressable manifest of files is a thing we could reasonably have an author sign. And what's more, if you use existing signing networks, like if you use Keybase, which is essentially a usable PGP, you also have an identity trail, which is really interesting. I can figure out if the John-David Dalton who signed this package is the same John-David Dalton who's using this GitHub account, and is the same John-David Dalton who's on this Twitter account. I still don't know if it's the same person I meet in real life unless they tell me that, but...

**Jerod Santo:** Right.

**Adam Stacoviak:** Blockchain will solve that.

**CJ Silverio:** Yeah. You have a web of identity trust, right?

**Adam Stacoviak:** Yeah...

**CJ Silverio:** That might help with that Dominic Tarr problem a little bit. You'd be like "Who is this person? They don't have a presence. Are they for real?"

**Jerod Santo:** Right. The other change you have with federation versus centralization, which I guess we could argue on either side which one's more secure - but with centralization you have a singular (in both GitHub and npm's case) capitalistic-motivated company, who's motivated to secure the registry. And in the case of federation maybe you have 1,000 instances, and these people are volunteers and are running it on their home machine... Stuff like this. Obviously, there might be corporations running instances; probably likely that'll be the case, since there costs... But potentially you instance could get owned, and now you have an untrusted instance.

**CJ Silverio:** Yes, exactly. This, by the way, is Chris' current -- the topic he's chewing on... And it's actually connected with package signing, because the identity of an instance has to be established, registered somewhere centrally. Here we go, centralization rears its ugly head. But you need to know that Entropic.dev, which is run by Ceej today, is the same Entropic.dev three months from now that's run by Ceej. You have to have a way to know that that instance is the same, that you can trust it, that its signature on a package is valid.

I think right now that we're gonna end up leaning on Keybase to do this... Because they not only have that central registry of public keys, they can give you a chain of history of the public keys and their Sigchain concepts so you can see if -- say someone loses a hard disk and has to wipe their Entropic instance; they can reestablish their ownership of that specific thing. And if you're getting bits from them, you can trust those bits.

This is the thing - let's suppose we have three of these things. I publish a Twitter bot to my instance, or a tool that you use to make Twitter bots to my instance.

**Adam Stacoviak:** Let's just call it Tweetbot.

**CJ Silverio:** Yeah, let's call it Tweetbots. \[laughter\] And you use it and make a Twitter bot. Like, you wanna have a copy of that on your own Entropic instance, so that you never have to depend on me. Like, I can delete it; there will never be a left-pad here, because you've got a local copy.

And let's suppose you wanna use that for a different Twitter bot. Do you have to go back home to me? What if I've gone away? You can get those bits from the middle one. How do you know that those bits are the same bits? Okay, if we have a web of trust and signatures that we can trust and verify, then you can depend on getting the same bits.

\[44:01\] This is not a solution to the problem of "Are those bits malicious?" That I think in the end still depends on expert humans looking at things. You could imagine the Node Foundation running a -- I keep calling it the Node Foundation; they're the OpenJS Foundation now...

**Jerod Santo:** They were that for a long time... \[laughter\]

**Adam Stacoviak:** You forgot the name changes.

**CJ Silverio:** The OpenJS Foundation, the home of all things JavaScript, running their own instance where they only have packages they've added. They don't mirror anything else. So you know that you can trust them.

These are interesting problems, and we could get them wrong. Do you wanna talk about doubts about Entropic? This is actually hard.

**Jerod Santo:** Yeah... It sounds hard. Keybase - is that a company, is that a foundation?

**CJ Silverio:** It's a company.

**Jerod Santo:** So now we have another single point of failure...

**CJ Silverio:** Yeah, yeah. We've just had this discussion internally - Kat, Chris and I - talking about "Do we wanna trust Keybase?"

**Jerod Santo:** Yeah. Not sure yet.

**CJ Silverio:** Yeah, I'm not sure. But I don't wanna have to write that. I don't wanna have to write that sig chain log again, because it's -- security thinking is hard. If somebody who knows what they're doing has already written it, I don't wanna have to reinvent that.

**Jerod Santo:** Yeah, but package management is hard, and if somebody has already done it, then I won't have to reinvent it, right?

**CJ Silverio:** Yup. It's like this delicate dance of "enough centralization to be helpful..."

**Jerod Santo:** Not too much.

**CJ Silverio:** ...enough federation that we will never be in a situation like we're in now, where we are depending on a VC-financed company that could go away.

**Break:** \[45:42\]

**Adam Stacoviak:** So we've talked about doubts... We've got our doubts, obviously, but Ceej, I'm sure that yours are better positioned than ours, simply because we're outsiders. What are your doubts with Entropic? Where are the holes in the cheese, so to speak?

**CJ Silverio:** Well, we've set ourselves a pretty chewy technical problem. The problems of writing a package registry from scratch are difficult enough, right? This is a very large ecosystem we have to support, and the way we've chosen to approach the problem is inherently more difficult than a centralized solution would be.

We've talked about the security questions, how identity works when it's diffused across multiple instances, package signing, can you trust the bits you have - all of these things are more technically challenging than writing a very straightforward single-source API would be. So we've kind of set ourselves a hard problem.

The other interesting thing that we're discovering is that it's even harder because it's not our dayjobs anymore. Chris and I both have demanding tech jobs that want our brains and attention during the day. And Kat is moving on to do package management for Microsoft. Like, whoa...! This is not something we have the luxury of -- well, we're spending our free time on it.

**Jerod Santo:** Yeah.

**CJ Silverio:** So the question is like "Okay, can we devote enough time to move it forward?"

**Adam Stacoviak:** Right, you've got limited time.

**CJ Silverio:** \[47:58\] Yeah. Are people gonna be okay with the pace at which it's happening? Can we do this without burning out? Open source burnout is a real problem. I'm sure people have talked about this with you before - you're not getting paid for this work; you are doing it as a labor of love, you're doing it because it's fun... And suddenly, you've got 1,000 users and they want bug fixes, and they're all entitled, or they're mad at you because you ruined their day with that bug. But that's not how you make a living, and you've got a life to go back to.

So we've spent a lot of time talking about how we wanna work and how we wanna make decisions, and the pace at which we wanna work... And it's to be seen whether we can actually pull that part off. I think we're up to the technical challenges of the design. Chris and Kat are two very smart people; I'm very privileged to be trailing along after them, watching what they do... So I think they'll solve the technical problems. Will they fail to burn out? Can I prevent them from burning out? Chris has some very thoughtful insights on this...

We were talking about GitHub. GitHub is a really great place to discuss code; it's a really great place to chew on a PR. I think it's actually a very bad place to run a project. Now, this was sort of a weird thing to say, right? Because so much of open source is home-done on GitHub. But I think the incentives are all kind of weird, because they're about discussing code and PRs, and the pressure to get at code and PRs, and to bring those numbers down... It's gamified: "Get your issue count to zero, get your PR count to zero."

**Jerod Santo:** Right.

**CJ Silverio:** But that's like discussing work once it's already done. It's not how you discuss work that you intend to do.

**Adam Stacoviak:** Yeah, the future.

**CJ Silverio:** Yeah. It's not a good place to discuss--

**Jerod Santo:** It's tactical versus strategy, kind of.

**CJ Silverio:** Yes, exactly. Your design... The part where we talk about "Okay, Entropic instances have to identify themselves to each other and we have to be able to trace an identity through time, to make sure that this Entropic.dev is the same Entropic.dev as last week." That's a conversation. That's a conversation among human beings. We have to talk, to make sure we understand the problem, and have agreed "Okay, this is a good problem statement." And then we have to go off and think, and come back and talk about or propose a solution. And then sometime later you end up at GitHub, where you are discussing a specific implementation of that proposed solution. So how do we set up a project where THAT happens, in a really constructive way?

**Jerod Santo:** How do we?

**CJ Silverio:** Yeah...

**Adam Stacoviak:** Tell us!

**Jerod Santo:** Telly-tell us!

**CJ Silverio:** Well, this is experimental right now. We've set up a Discourse, so we can have a forum and talk to each other... and, this was actually hard, Chris and I didn't switch over to it, and then we were asking ourselves, "Why are we not doing it? Oh, because we're in this teeny Slack with each other." We were just talking to each other on Slack, instead of going over to the Discourse. Okay, guess what - we're gonna not do that; it's chat. And that was actually what we were looking for. It's sort of a problem that Slack is better, but Slack is not very good if you wanna have an open source project... Because we want people to just drop in. What we want is modern IRC.

This to me is like recapitulating the history of open source projects of the past... "Why did they all have IRCs? IRC is terrible! Ohh, I get it now... Okay, alright. IRC is still terrible..." \[laughter\]

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** It is still terrible.

**CJ Silverio:** But we now have an open chat. We have a Discord that we invite people to come in if they wanna chat with us. Kat is most active right now on it, because she's got a month off between jobs, so she's there all the time... We're trying to do our conversation there.

\[51:53\] We also try to kind of codify the way we've worked together for years now, which is -- we don't actually do anything out of the blue. We bounce ideas around first, before we do anything. We never lead with code; we lead with "What if this...? Here's three paragraphs of what I think we might try to do and why." We lead with writing and talking, and then that progresses finally to code. Code is like the last step, and often the easiest step once you've worked out what you wanna do.

**Jerod Santo:** So tie that back into how that's gonna prevent the burnout... Because you're gonna have more contributors, because you're gonna talk more?

**CJ Silverio:** Well, we have deliberately set up a pace for ourselves where we're like "No decisions are gonna be made on weekends." This is a rule we have. We do not make decisions on weekends. Why that? Because that actually gives you the space to have a weekend on your own. You don't have to sit there on the project, watching everything going on out of fear that someone's gonna make a decision you don't agree with, or have to prevent for whatever reason. You can go away, you can have a weekend.

Then on the regular team meeting on Tuesday - that's where decisions will be made. So you have space where it's okay to be away from the project.

**Adam Stacoviak:** Yeah, the maintainer guilt is really terrible, honestly...

**CJ Silverio:** Yeah...!

**Adam Stacoviak:** Because if you're productive, Ceej, and I'm your cohort in a project, and you're productive over the weekend and I'm trying to hang out with my family, and I'm trying to separate my life and have that balance that's necessary, I might feel bad because you're productive and here I am, slacking with my family.

**CJ Silverio:** Yeah, just by doing work I create work for you, and I create pressure for you. It's hard to cope with.

**Adam Stacoviak:** Yeah. We have to recognize our responsibilities to our team members, the influence that we have on their subconscious and psyche, on what they're trying to plan for.

**Jerod Santo:** So one doubt for me and then we'll talk about how people can get involved with what sounds like a very interesting open source project - my doubt is on adoption... I'm curious - just a few quick questions. Can you reused packaged JSONs? Do developers have to re-release their packages for Entropic, or can you suck in npm's registry? All that.

**CJ Silverio:** We're using TOML as our package metadata description thing, so you can have a packaged JSON and a TOML file co-existing in the project. You would have to publish twice.

**Jerod Santo:** Okay.

**CJ Silverio:** We reuse legacy packages quite easily. You just install the legacy package, you say "package name @ legacy" and it gets mirrored to your local Entropic. This part's working. "Yay! Something that's working!"

**Jerod Santo:** Nice. "Something's working!"

**CJ Silverio:** \[laughs\] And then you can install from it locally, using the new PI once it's mirrored once... And then keep that up to date. We're still discussing "How often should we go and remirror? Should we only ever lazily mirror?" All these fun things.

**Adam Stacoviak:** Yeah.

**CJ Silverio:** Yeah. So we should be able to co-exist. Adoption is really interesting. I don't know, this is like one of those, like "Well, it could fall flat on its face here..."

**Jerod Santo:** Right.

**CJ Silverio:** I think if we get it right and if it's good enough, if it solves people's problems well enough, and if that network and speed savings we think we can offer is good enough, I think that will happen over time.

I'm playing a long game here. I don't need it to be successful in six months. I need it to be successful in three years. I need it to be here when npm finds it can't exist viably anymore. It needs to be here when whatever landing place it ends up with decides it doesn't wanna run this very expensive thing anymore... So I'm thinking long-term. I'm patient.

**Adam Stacoviak:** What do you think the adoption strategy plays out? It's one thing to be patient and one thing to have a long-term view. You still have to have an adoption process plan... What are you thinking?

**CJ Silverio:** I'm thinking I work very carefully with the Node project. I think I need to be there to satisfy their needs and to make sure that I'm scratching their itch, and that they understand this is the eventual home for this code. I think if the Node project finds a use for this, it'll be okay. So they matter to me more than anything else. I'm only in this because I actually really love Node and I really love writing Node code.

\[56:12\] Like, why did I get involved in npm in the first place? Because Node was having a hard time, because npm was down, and I was having a hard time with my team at the time; we were trying to write Node and we couldn't, because npm was down. So I'm like "I'm here to make Node win." Absolutely sincerely.

So I wanna satisfy their needs, and I think if we do that, the adoption follows. But again, who knows...?!

**Jerod Santo:** Well, it sounds like -- listeners, if you are interested in a fascinating project, with lots of technical hurdles, lots of problems, and no doubt an interesting ride, you can get it at the ground floor of Entropic.

**CJ Silverio:** Oh, yeah...

**Jerod Santo:** It's not even taken off yet, it's still just heating up the enginers. Ceej, tell everybody where is the best place to go. You've mentioned the Discord... What are you expecting the listeners to do? I know you have some talks coming up...

**CJ Silverio:** Yeah, it looks like either I, or Chris Dickinson and I together will be at NodeConf EU in Ireland this November to talk. We'll probably do a deep dive into what's going on technically with the API and the data model, and that'll be a lot of fun. We may even have some answers on the security side by that point.

So that'll be fun... Go to Ireland, be at a beautiful resort in Ireland and talk Node. Or you could come join us in our Discourse, at our Discord; all of the disses. You can find all of these things if you go to our GitHub, which is github.com/entropic-dev, and there's only one project in there... Well, actually there are two projects in there now. Kat is making projects. Find us there, and we have pointers there to our Discourse and our Discord, as well as the code. The code is the least important thing right now. Come join with us and talk with us... Because we're in the talking phase.

**Adam Stacoviak:** Any plans to have entropic.dev redirect, instead of showing this kind of...

**CJ Silverio:** \[laughs\] Oh yeah, yeah... That's a joke, by the way. It's like, if you go to registry.npmjs.org you get a bunch of JSON... But we need a website. We don't have a website right now, but we understand that there are a lot of people out there who are much better at writing websites than we are. Maybe you wanna do that for us.

**Adam Stacoviak:** Sweet. So there's lots of roles to fill. A long-term plan, intended for the betterment of the Node - in your case, and then JavaScript at large community; the commons of JavaScript, as you've said before... It's super-interesting that your path with npm, and then obviously your love for Node and JavaScript, and still being willing to put in the sweat, hours, tears, pain... Whatever it might be.

**Jerod Santo:** But not the weekends. \[laughter\]

**Adam Stacoviak:** ...into this. That's awesome.

**CJ Silverio:** I work on the weekends, don't tell Chris. \[laughter\] I just don't make decisions on the weekends.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** That's right. And you don't tell anybody or talk about it.

**CJ Silverio:** Shhhh...!

**Adam Stacoviak:** You're not letting anybody that you're working, potentially.

**CJ Silverio:** Right, yeah.

**Adam Stacoviak:** Ceej, thank you so much for taking the time to go through this with us. We're super-fans, we can't wait to have you back on in six months or a year's time to catch up on Entropic and where things are going.

**CJ Silverio:** That'll be fascinating, yeah! Cool.

**Adam Stacoviak:** Listeners our there, if you wanna get involved, we'll have links in the show notes, so make sure you follow those. Also, follow @ceejbot on Twitter and others, so you can keep up and pay attention. Ceej, thank you.

**CJ Silverio:** You're welcome. It was a pleasure being here. Thank you so much for having me.
