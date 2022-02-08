**Amal Hussein:** Hello, party people! Welcome to a very special and extra-informative show, with a stunning panel. We have with us today Feross - welcome...

**Feross Aboukhadijeh:** Yeah, thanks. It's great to be here.

**Amal Hussein:** Yeah, we've missed you. You've been busy teaching web security to undergrads at Stanford, or something... What's going on? We haven't seen you in a while.

**Feross Aboukhadijeh:** Yeah, it was a pretty busy time, but hopefully I'll be back on the show a little bit more this year.

**Amal Hussein:** Yeah, we're very excited. And also, congratulations on your recent engagement. I had to call you out on that, you know it... So I'm really happy for you both.

**Feross Aboukhadijeh:** \[laughs\] I knew you were gonna do that. Thank you, Amal.

**Amal Hussein:** Yeah. Oh, wait... Your fiancée is a surprise guest on this show. Nah, I'm just kidding... \[laughter\] No, really, we're so happy for you, and we're so happy that we'll see more of you this year.

With us on the panel as well today is our resident open source -- I don't even know... I was gonna say open source curmudgeon, but I don't know if that's appropriate... Is it? \[laughs\]

**Christopher Hiller:** I prefer to think of myself as a generalist curmudgeon.

**Amal Hussein:** Okay. Generalist curmudgeon. There we go. Chris Hiller... Welcome, Chris. And our very special guest today is Tobie Langel.

**Tobie Langel:** Good job.

**Amal Hussein:** Did I do a good job?

**Tobie Langel:** Yeah, spot on.

**Amal Hussein:** Awesome. So Tobie is -- I don't even know if I can do justice for introducing Tobie... He's just a long-time, I would say, advocate and expert within open source ecosystems. He really gets -- I don't know, what open governance means... He's helped some really large-scale open source projects land in Foundations, he runs a consultancy helping various organizations adapt open source strategies and whatnot... I don't know, Tobie, I'm not doing you any justice, so in your own words, why don't you introduce yourself and tell folks a little bit about yourself?

**Tobie Langel:** \[04:20\] Well, I mean, originally, I'm actually a JavaScript developer. Just saying.

**Amal Hussein:** Oh yeah, that too...

**Tobie Langel:** That's my background. So you know, given the name of this show, I think I should mention that. But it was a long time ago. It was before jQuery was famous... That dates me. So essentially, I'm now in an industry that grew really quickly. I am essentially experienced. So I guess that's my title at this point... Which is a nice way of saying "old".

**Amal Hussein:** That's really cool. And we've invited you on today's show to really kind of help us unpack some things that have affected many of our projects recently. So there was an incident within the open source ecosystem, specifically the JavaScript ecosystem, a few weeks ago, where there was a maintainer that was doing some things to their packages, and it really affected a lot of downstream consumers. So without doing a bad version of telling the story, Tobie, can you just walk us through what happened? And then we'll get into trying to unpack some of the fall-out.

**Tobie Langel:** Okay, so I'm gonna try to do my best to do a short version of that... Especially because I wasn't super-interested about exactly what happened in that specific instance... Because these issues have become fairly common at this point. But essentially what happened -- well, there are different ways of looking at this story. You can look at the back-story, or just what happened recently.

Essentially, what happened recently is a number of dependencies that people are relying on, in general like deep down in the dependency tree, essentially got "sabotaged" by their owner. And I wanna put quotes around the term... And that was backed with sort of a call-to-arms of making open source more sustainable and paying developers.

And regardless of whether that's actually specifically true and a legit claim in that particular case - and that's debatable, and people can have opinions about this - this is still something that I believe is really critical that we start addressing in the ecosystem... And also that we start really seeing the impact. And the impact here was very real, it was very colorful. It also could have been very bad, and it was kind of lucky (is my perspective) that the only thing that happened here was what happened; essentially, a bunch of gibberish in logs, and some dossing of apps as they were being deployed... Which is bad, but it's fairly possible -- I mean, let's say that if someone was actually wanting to do something much worse than that, they probably wouldn't be talking openly about it on Twitter. To me at least, we have to look at it as a wake-up call, of "Hey, look at how this whole thing is working. Look at all of what we're taking for granted", and frankly, is it really secure, is it really safe, is it sustainable? And the answer to that at this point is kind of obvious.

**Amal Hussein:** Yeah, I mean -- thank you for that really wonderful summary. Just for our listeners - we're not here to really poo-poo over the specifics of what happened in terms of "This developer did this exact thing." I think the wider takeaway for today is really this is just one of many potential things, but also it was literally also one of many things that happened with the same developer over a short period of time... So how do we kind of like unpack that and react to some clear vulnerabilities in our processes and in our systems, and just even in our knowledge base as engineers; there's a lot of gaps here, and we hope to discuss some of that.

\[08:08\] I'm really excited to also have a wonderful panel of people to discuss this with, because even though Tobie is our guest today, Feross and Chris are both pretty seasoned open source developers and maintainers of fairly widely-adopted projects... So Feross and Chris, I'm eager to hear from both of you as well, thoughts on the context for what happened.

**Feross Aboukhadijeh:** I'll just second what Tobie said... I think we've been super-lucky with the types of attacks that we've seen so far. It could be much worse than what we saw in this particular attack. I think we're starting to see these kinds of supply chain attacks happen on a much more regular basis. It's sort of picked up in 2021, and it hasn't really let go since. I see a headline about something like this every two weeks, it seems like; sometimes even more frequently. And if you look at the kind of packages that are being affected, they're all these pretty headline-grabbing numbers in terms of downloads.

So the two packages in this incident were faker.js, which has ten million downloads a month, and color.js, which has one hundred million downloads a month. But we've also seen attacks against UAParser.js and COA, as well as RC... And all of those packages had at least 30 million downloads a month each. When malware makes it into one of these packages, through whatever mechanism - you know, in this case it happened to be the maintainer themselves who added the malware. In the case of the three I just mentioned, UAParser.js, COA and RC - those ones were actually a third-party who got access to the modules and added malware to them.

In all these cases I feel like the attacks have been pretty naive and caught pretty quickly. We're not really looking at super-sophisticated actors here. In the case of faker and color it was very obvious that something had happened, because the packages were outputting gibberish code, infinite loops, sort of outputting the Unicode text -- it was very obvious that something had happened to the package.

And then in the case of the three I mentioned earlier - all of those were pretty obvious as well. There were crypto miners added to the modules, so when you updated, your CPU usage would just go straight to 100% and it would be mining crypto for the attacker. So this isn't like a super-sophisticated thing; it gets caught within a couple of days. Someone notices, the malware gets removed from Npm, and then we write a bunch of new stories about it and people talk about it.

There have been hints at much more scary attacks. If you go back to 2018 with event-stream. The event-stream incident was much more sophisticated. A bit of obfuscated code added to one of Dominic Tarr's packages when he gave up the package to another maintainer to take over after he was done working on it... And in that case, that was an attack that targeted one very specific company. And it was a no-op for everybody else. And so that went undetected for much longer. I just think it's interesting that we haven't seen anything that sophisticated since 2018, which makes me think either people just have forgotten that those things exist, or maybe we're just not finding them, which is the much scarier thought.

**Tobie Langel:** Do you have a perspective on that? Because I'm kind of curious about this... I feel like given how fragile the whole ecosystem feels, I'm very surprised that there was not a lot more going on than what's going on right now. People just in general are really good, and this doesn't happen, or do we have sufficient layers that it doesn't happen that much? Or is lots of things happening that we're just not aware of?

**Feross Aboukhadijeh:** That's a great question. I mean, one thing is that the attacks against Npm packages aren't very sneaky, because once you publish a version, it gets replicated into all these other registries that people have -- everyone is sort of replicating Npm to their...

**Amal Hussein:** Mirroring, yeah.

**Feross Aboukhadijeh:** \[11:53\] Mirroring, exactly. So it's not like you're gonna get away with it, really. Eventually, it's gonna be discovered, and so there's an element of that. And then I also do think that you're right, that most people are good. I mean, we're talking about most people who write open source are doing it for good reasons. They get into it for good reasons, for one reason or another... So it's pretty rare that they wanna try to do something bad; it's more (I feel like) external actors coming in and trying to get access to people's packages. But I don't know... It's an open question. I wonder what other people think.

**Amal Hussein:** For me, honestly, this fragility of our ecosystem just purely in terms of -- the fact that there are packages on Npm that are downloaded millions of times a week, but they don't have 2FA, or have a single maintainer... A single point of failure, in some ways... Like, what if this person dies and they don't have a death plan, or whatever? What then?

For me, the human element has always been the question mark for me, around -- like, we are temporal beings. Our resilience is in community, and in social networks, and... Should we be seeing a maintainer of one as a liability? I don't know... These are the types of things I worry about, especially for stadium projects.

**Christopher Hiller:** Can you please define a stadium project, if some of us don't know?

**Amal Hussein:** Oh, yeah, sure. Stadium projects are typically one or a small group of maintainers controlling a project that is consumed by many, many people. React.js is a good example of a stadium project. But React.js has a team, and more importantly, also a company, a whole set of processes, and all these other things behind them.

You have lots of examples, especially within the Node community, of stadium projects, where there's one maintainer, or maybe a maintainer has passed it on to a group of two people, but they have millions of downstream dependencies. I'm sure Feross and Chris can think of a few right off the top of their heads... Like, if y'all wanna share some good examples of that...

**Feross Aboukhadijeh:** Does this term come from Nadia's book, "Working in Public"?

**Amal Hussein:** Yes.

**Tobie Langel:** It does, yeah.

**Amal Hussein:** I think she had like four different projects, and we can link to that in the show notes. And speaking of Nadia, Tobie had brought up, in his initial Twitter thread on this, that was very interesting, that we'll also put in the show notes... But Nadia kind of talks about open source as like the roads and bridges, that are these invisible things that actually help our entire digital world go around... So we think about the importance that open source plays in our day-to-day lives and interactions with the software that we use on our TVs, phones etc. in our airplanes... And the importance, and then the actual attention that we pay to it in terms of contribution, resilience, awareness, whatever. The mindshare and the importance - they don't really balance and they don't add up. So I'm curious if you have any thoughts on that giant gap, Tobie...

**Tobie Langel:** So that was a great segue, right? Nadia wrote this really important piece in 2017 called Roads and Bridges. I can't remember what the subtitle was... "The unpaid labor behind our digital infrastructure", I think. I think it's really important that we start thinking about open source and this whole pool of software as the infrastructure to the digital revolution; the third industrial revolution. And that a large part - not only the internet; there's a bunch of things, but the open source pool of software is clearly infrastructure.

I gave a short presentation two days ago on this topic, and it was really quickly after this original thread, and so I decided to just use the Twitter thread and use that as a deck. So I was missing a title, and I quickly came up with a title that was something along the lines of "Open source is public infrastructure. It's about time we treat it as such", or something of that nature... And I tweeted that so that I could actually have the title for the first slide of my Twitter deck.

\[16:06\] And people went really -- like, it was so tense, the responses to that tweet; that wasn't supposed to be a tweet, I was just using it as sort of a scratchpad... And this really tense culture, and really a strong difference in perspective between North America and Europe in terms of what public infrastructure is, and whether it's something useful and great, that we can rely on in our daily life as individuals and as businesses... And the opposite perspective in the U.S, where you think of it as broken bridges, and potholes, and all of that stuff.

So there's a real tension there. But regardless of how we're actually thinking of public infrastructure, I don't wanna really say "public infrastructure" to imply "must be owned and operated by the government." I really mean it sort of like in a broader, more loose way, in terms of like "This is what we build our things on today." And I'm not trying to imply specific solutions that are tied to more taxes, and the government owning open source...

**Amal Hussein:** Dun-dun-duuuun...!

**Tobie Langel:** ...but clearly, we do have to start thinking about it as building blocks of what we're building today, what the digital world is all about. And I don't think we're quite doing that right now. We're just hoping for the best, crossing our fingers, and we're not really considering that these are the roads and bridges, and right now they're maintained -- there's this famous xkcd comic, this whole elaborate structure, and there was like the tiny piece at the bottom that sort of holds everything up... And the legend is "This piece is maintained by one developer, on their own time, in Nebraska", or something like that.

I think we have to acknowledge that this is a problem... And it's been a problem for a while. But now that we're actually being really impacted by security problems that this is creating, people are starting to pay attention... Which is good. Because of security problems we're going to be able to solve what is also sort of like a human problem, of people doing work and not being paid for it. So I'm all for that.

**Break:** \[18:22\]

**Amal Hussein:** Tobie, that was a really great point to end on, because really, you're absolutely right - until we kind of like feel the burn from the fire, we usually don't learn...

**Tobie Langel:** We're human beings, right?

**Amal Hussein:** Right, yeah. Exactly. But Feross pointed out this has been happening, this is not new... We make a little fuss, news articles come out, we move on and forget about it. It's like the attention deficit disorder of the internet, and also our complete and utter bias towards just moving forward. Somehow we've all embraced the meta mission of "Break it and don't think about it, and move on."

**Tobie Langel:** \[19:56\] So I'm gonna make the argument that it's different this time...

**Amal Hussein:** Okay... I hope so.

**Tobie Langel:** And I'm not quite sure why, but I think it has to do with the fact that there was a convergence of issues. I think the sustainability drum of the ecosystem has been beated on quite a bit, and people have started to pay attention... But then we're like "Okay, people are not getting paid. This whole thing feels kind of weird and unfair, but what can we do about it?" And then there's been on the other side sort of security concerns, as Feross was talking about earlier... And suddenly, it feels like these two emerge; people are looking at this, and looking at that, and saying, "Oh, wait..."

**Amal Hussein:** "The two are related...?"

**Tobie Langel:** "...there's a connection between the two?!"

**Amal Hussein:** "What?! The right and the left belong to the same body?!"

**Tobie Langel:** Exactly, right?

**Amal Hussein:** Yes, I get it.

**Tobie Langel:** And I do sort of like these long threads about the open source ecosystem on a regular basis, and they usually get reasonable traction... This one didn't get a lot of Twitter traction, but oh my God, did my phone ring. I had a whole bunch of folks reach out and say "We're still dealing with the Log4js -- the Log4j, sorry, thing, and trying to figure out where --"

**Amal Hussein:** Log4js... \[laughs\]

**Tobie Langel:** Yeah, isn't that a good one?

**Amal Hussein:** Do not npm-install that! Just kidding... Yeah, what were you gonna say?

**Feross Aboukhadijeh:** Don't pin that one on the JavaScript community. We're not responsible for that one.

**Amal Hussein:** Thank you, thank you!

**Tobie Langel:** Fair enough. Yeah, I'm sorry... See? I don't know what happened there.

**Amal Hussein:** That's somebody else's crap...

**Tobie Langel:** I think there's another thing, too... It's the software bills of material. I don't know what you call it in English... SBOM? Whatever the name for that thing is... But the fact that there's been a White House executive order or document of some sorts - I don't really know what the terms are - around security questions specifically mentioning open source... What is called?

**Feross Aboukhadijeh:** There was an executive order that the Biden administration put out at the beginning of 2021, about this Software Bill of Materials.

**Tobie Langel:** Right. So yeah, wasn't that far off, on that topic?

**Christopher Hiller:** And then there was a White House meeting, or -- I don't know if that happened, or if it did, what came of it... Like, anything to announce? I don't know.

**Amal Hussein:** Right.

**Tobie Langel:** I mean, I don't know, but there's clearly a convergence of concerns around this topic, and I think the fact that a lot of organizations have started building software bills of materials, and they're looking at their stack and they're like "Oh my God, we're pulling in tens of thousands of dependencies, but we had no idea that we were pulling in all that stuff..." I think this has impacted the psyche of folks quite a bit, and people are legit concerned about this.

**Amal Hussein:** It's like folks suddenly looked at the shopping bags that they just came home with... Or, actually, I take it back; they just looked at the shopping bags that have been in their car for the past 10-15 years, and just decided "You know what - let me just take a look at the label. What are the ingredients in here? What are these clothes made of?" It's like, "Whoa! Wow, I didn't realize there were so many different kinds of fabric." And "Oh, guess what - all of these fabrics have different laundry settings." And "Oh, some of them age differently. Oh, some of them have their own set of mini-fabrics." It's like the crazy, recursive dependency tree, which quite frankly, to me, we can poo-poo on it all we want, but I think open source is working, right? Open source -- like, we want people to write less code, in the sense that... I think the statistics the last time I checked, at least a couple years ago, the statistics were around like for every one line of application code a software engineer writes, there's ten lines of code in their open source dependencies that are running. So that's a really good ratio. People should not see that as a sign of weakness, right? It means that you're focusing on the problems that you need to solve for your specific customers, and we're relying on code that's more secure, and reused, and maintained, and we're reducing the surface area and we're able to move faster.

\[24:09\] So open source is working, but what's missing I think is our hygiene around open source, and the resilience and our sustainability around open source. That's where we're failing. So what do we need to do to be more resilient? Both on the organizational level, for the Fortune 10 companies, but also as individuals that are also using these packages, or using these libraries - how do we tackle this giant sustainability problem that's been very under-addressed?

**Tobie Langel:** There's lots of questions here...

**Amal Hussein:** Okay...

**Tobie Langel:** One aspect is the sustainability of the ecosystem, the fact that these new issues that we've seen happen sort of helps make the case for addressing underlying sustainability issues in the ecosystem that folks in the ecosystem are well aware of, but aren't finding good solutions for, because it wasn't of broad interest, because "Well, you know, free stuff that works. Who cares?" Like, free stuff that explodes in your face? Oh, now maybe we should start looking into it.

So I think we're moving towards the "free stuff that explodes in your face" kind of situation right now. So that's a really interesting aspect, is to see how we can leverage this new concern to actually try to find systemic solutions in the ecosystem itself.

And then the other aspect is, from the perspective of a consumer of open source software, how can we think about our practices differently, how can we think about our interaction with the broader open source ecosystem differently, and then what can we put in place to actually build a more secure and more resilient usage of that open source? I really see these two different... We have way less -- I mean, we have really good experts on the second topic on this show... So I'm way less of an expert on the security aspects of it. So I don't know where you'd like to start with this...

**Amal Hussein:** I'd say we definitely need to get into the security aspect of this in this podcast... But I would say maybe we start with the first one, and then we'll work our way there.

**Tobie Langel:** They're connected, of course, right?

**Amal Hussein:** Of course, yeah.

**Tobie Langel:** ...but they're clearly, two distinct -- I mean, I'm happy to give a quick overview of the sustainability problems in this space, and what we've tried to do... So it's been a while -- I think it's really when there was the Heartbleed bug that folks really started paying attention to open source sustainability... And there was a bunch of efforts following that, and also a bunch of companies trying to address the problem. And the problem really is one of -- I think the key problem in the open source space, and it's a problem in tech in general, is that we all love building new features... Because building new features is really cool, and that's highly valued, both in open source and within companies... But then when it comes to actually making sure that they stay up to date, that they're sustained and maintained through time - this is less valued. Just like we value documentation writing less than we value code writing, we value maintaining stuff a lot less than we value new features.

So I think that's part of what has been uncovered for a long time... And as a result, you have companies that have built businesses on top of that. The famous one, obviously, is Red Hat. But that works really well for really well-known software that we interact with -- I mean, open source software that we interact with directly.

When you look at the whole dependency tree that's behind it, the long tail, you can't build like a Red Hat business model for collar.js Literally, no one's gonna buy this from you.

**Amal Hussein:** \[laughs\] Don't challenge the internet...

**Tobie Langel:** Well, no, sure, but we can't do that at scale.

**Feross Aboukhadijeh:** \[28:04\] There is a company called Tidelift that's trying to do that... I think they're even a sponsor of JS Party or one of the Changelog podcasts...

**Tobie Langel:** Absolutely.

**Feross Aboukhadijeh:** Yeah, so there's definitely people trying. They wanna provide this blanket guarantee for all your open source. But yeah, it's a much harder problem than what Red Hat is doing, that's for sure.

**Tobie Langel:** Right. And then the other problem we have here is one of scale. If we're talking about the number that you used before, so one line of code that you write relies on ten lines of external code, of open source code, and then if you look at the money that we're talking about in terms of what's being spent in the open source ecosystem to sort of maintain it, and what's being spent on developers writing code, the discrepancy is mind-boggling.

I did some back-of-the-envelope math a while back for a talk I was giving on this topic. Back then, Tidelift had announced (I think) a 22-million-dollar...

**Amal Hussein:** Funding round?

**Tobie Langel:** Thank you... About one million of which they were planning to put back into the ecosystem to fund maintainers. That's like 2-3 years ago. They were sort of redistributing roughly around one million dollar a year or two. And if you do back-of-the-envelope math of what the overall envelope for developers in the world is... There's roughly 20 million developers in the world. Roughly. If you look at an average salary you're looking at about a trillion dollar spent on developers per year, compared to one or two million dollars on open source. If you compare that with one order of magnitude for lines of code, you already see how huge that discrepancy is.

And just to picture what one million dollar means, I actually used a bunch of diagrams in that talk... One million dollar in $100 bills is about a stack on money that you could fit on your desk. Or 10 million dollars; you can fit that on your desk. To get to a trillion dollar, you have to stack the same $100 bills to the size of a skyscraper. A real skyscraper of $100 bills. That gives you an idea of the massive difference in spending. And of course, there are lots of companies contributing with engineer time. I don't wanna discount that at all. And that's actually very important. But even though we have effort in this ecosystem, in our industry, to try to sustain the open source, they're completely tiny, what's going in it, compared to what the needs would be.

**Amal Hussein:** Yeah.

**Tobie Langel:** So we haven't seen much progress.

**Amal Hussein:** I would argue it's not financial though, Tobie. For me, in terms of mindshare and awareness and thinking - we don't think much about our roads and bridges; we don't think much about the open source packages, and their packages, and their packages, and their packages. Specifically even just in our processes... This whole incident that happened with Marak's packages, color.js and faker.js - they were one of many other examples, but it was an example of a clear need for better resilience in the way we even consume our packages... Because you had folks who were literally having build failures, or whatever... Like, shouldn't we have processes that check and gate and make sure that our builds and our tests and our apps still function, before automatically ingesting a new set of dependencies?

I'm just saying that there's steps here, but I think even more so the driving factor more often than not is on the security front, with not just like "Have I introduced a bug with this new patch that I didn't really fully test?" So I don't know, Feross, you maybe wanna share some insights on some security best practices...

**Feross Aboukhadijeh:** Yeah, I'll just start by saying that what we're trying to do here is actually a pretty crazy problem. Basically, what's going on is people are downloading code from the internet, written by people who they don't know, that they've never met, and they're executing it on their laptops and on their production servers, and they're hoping that that goes well... Which is, when you put it like that --

**Tobie Langel:** \[32:17\] Mind-boggling.

**Feross Aboukhadijeh:** Yeah, it's mind-boggling, that not only does it mostly work, which is a testament to how good most people are, but it's just a lot of trust that people put in... It's sort of like, people just don't think about that that's what they're doing very often. It's crazy, it's mind-boggling, it's astounding... I don't know what words to use. We download random code from the internet, we run it on our computers, we don't even bother reading it first, most of the time...

**Tobie Langel:** Not that it would help that much though...

**Amal Hussein:** And "most of time" is actually like the five nines most of the time. Like 99,999% of the time... Just trust...

**Feross Aboukhadijeh:** Yeah. And it mostly works. The problem is that when it goes wrong, it goes really wrong. I mean, I'm running these Npm modules that I've downloaded, and I'm doing it on the same computer where I keep all my tax returns, and all of my photos, and everything precious to me in my entire life, like my most personal information... And it's running on the same machine. So there's all sorts of questions that come up around just like "Is this really the best way to be doing things? Is there not some way to sandbox things better? Is there not some way to get more certainty about what a package will do before we run it?"

So there's an infinite number of things we could talk about in this area... There's also people proposing various solutions. Some people think that code signing is the solution, or 2FA is a solution... So there's all kinds of things we could talk about. I think the most interesting thing to think about really here is this idea that modules are pretty opaque right now. So even if you want to do the right thing and review the code, it's not really easy to do. This code is open source, it's open; the word "open" is there in the name, but almost no one actually uses that to go and read the code, and to go and take responsibility for the code. They just assume that it's going to be fine. And this isn't helped by Npm. I mean, if you go to the Npm website, you'll notice there's this Explore tab there, that when you click it, it just says "This feature is broken", or "Coming soon", or something like that, and it doesn't even show you the files inside of the Npm package. So you can't even see what you're gonna run. You're left to resort to clicking on the GitHub link, going over to GitHub, and hoping that the code on GitHub happens to be the same as the code that's on the Npm registry. And there's literally no guarantee that that is the case.

**Amal Hussein:** Yeah, there is no guarantee... That's one of the other chainlinks that's a little broken in our security trust chain. For me, I've always seen that as a major loophole... There's no true secure chain between Npm and wherever the code is published, because it's not even required that the code is published on GitHub, first of all. That's also a fallacy. And then there's no actual checks or validation to make sure that the code is actually the same as whatever repository is specified in the package.json file.

So there's a lot of blind trust, and giving strangers access to unsandboxed environments with lots of secrets for multi-billion-dollar, multi-trillion-dollar corporations. You know, if your company doesn't have a good --

**Tobie Langel:** People's data.

**Amal Hussein:** Yeah, people's data, too. Thank you. Yeah, forget the corporations, really. Who cares about them. It's actually people that get affected when these things happen, too.

**Tobie Langel:** Yeah. I mean, both on your machine as a developer, but also when you're pushing that to your app that is hosting data from your clients.

**Amal Hussein:** Right, yeah. Chris, I see you making faces... I can't tell if you're like "I want to talk..."

**Christopher Hiller:** Yes, I do.

**Amal Hussein:** You're such a polite gentleman. I just blindly interrupt people all the time... But honestly, for me it's almost uncontrollable. It's actually a problem, so... I just wanna say, I really appreciate your politeness. I really do, Chris.

**Christopher Hiller:** \[36:00\] Thanks. Right, so I don't wanna pull us too far of... So we're talking about there is or there is no -- you've got this GitHub repo, you've got this package on Npm... You could say that the code you're publishing to Npm comes from this GitHub repo, but you could throw anything in that tarball and upload it to Npm.

**Amal Hussein:** Of course, yeah.

**Christopher Hiller:** Some other ecosystems do this, right? I think maybe it's -- maybe Go does it, and certain Linux distributions have the thing where they don't give you packages, they give you source code, and you have to compile it yourself. Is that sort of thing -- I mean, yes, it's going to be more inconvenient, slower, what have you. But maybe avoiding registries entirely, and going right to the source, pulling down your source and building it yourself is a reasonable strategy to mitigate some of this.

**Tobie Langel:** Doesn't that require that you actually read the code?

**Christopher Hiller:** Yes.

**Amal Hussein:** Doesn't that require that we also have hygiene and actually give some thought to our dependency tree?

**Christopher Hiller:** Sure, you could go that far and go and read the code. And if you go and you clone, say, any project published to Npm, you get a working copy - how that project is built is going to vary. It's gonna be different scripts, there's gonna be all sorts of different ways to do that... And furthermore, all the dependencies that it has as well.

So if you're gonna do something like that, you're gonna have to go and grab all those dependencies, get the source code and figure out how to build all those, right? And then you can build the project that you wanted to build in the first place. Maybe that makes sense. Certainly, some projects don't need to be built; maybe more standardization around "Okay, this is how you build a JavaScript project. This is the command you run, and it will work. It should work." Just an idea, but...

**Amal Hussein:** You mean standards, Chris?

**Christopher Hiller:** I mean some standards... Because we don't have a lot, in terms of the package management.

**Amal Hussein:** Yeah, this has been a huge gap in our ecosystem for a very long time. It's like, where do you even start, right? Because there's the context of Node, and Node adoption, and Node literally - like, a very literal hockey stick. Like, I have to wonder, did all these startup bros get the hockey stick from looking at the Node adoption charts? Because legit, it just blew up. And I don't think anyone was ready for how quickly and how rapidly... But quite frankly, it spoke to a need as well, because it wasn't just Node, it wasn't just the convenience and simplicity of JavaScript in many ways, but it was also our dependency management system, which I think is absolutely best-in-class, all software. I will argue this with anybody. There is nothing easier than npm-install. And nothing easier, asterisk, also more unsafe than npm-install, right? \[laughs\]

So we win, and I think part of Node's success was its ecosystem and how easy it was to start composing and building these blocks, to create applications or services or scripts really quickly.

I feel like the speed of how things moved in the server-side world for JavaScript, and then you had React coming into the equation at some point... Because React needs a whole marching band of tools in order to actually compile, so they were like "Um, sorry y'all, Bauer is not gonna cut it. We've gotta use some more tooling here. We've gotta go server-side." So then you had this frontend ecosystem just kind of like massively come onto Npm as well. So that's another thing that happened so quickly that we never really thought about like "Is this the best thing? How should we be handling this?"

So I'm just saying, the speed of the internet is a thing, and standards are slow, because they are thoughtful processes... So it's push-pull. But anyways, we're gonna take a break. There's so much to discuss and unpack here. We're gonna compose ourselves, argue about how we wanna spend our last 20 minutes, and then we'll be back.

**Break:** \[40:18\]

**Amal Hussein:** Alright kids, so I think we have some healthy constraints to help us get through brainstorming solutions for this last segment... Because this is a giant topic, and we could talk about it for hours. However, we don't have hours, so the constraint is - how do we come up with solutions that would have potentially helped us avoid the situation that happened with Marak's packages? He released something intentionally malicious; it wasn't kind of like a secret thing... Things started showing up in your terminal, or whatever... So in some ways it's an easy to find issue. However, it doesn't mean -- just because it's easy to find doesn't mean that we couldn't have mitigated it entirely, even including it into our updated application versions.

So with that said, Feross and Tobie and Chris - solutions, folks... How could we avoid this?

**Feross Aboukhadijeh:** I'll just start by saying what I think wouldn't have helped, that often people will bring up in these discussions... Because I think it's just helpful to take them off the table.

**Amal Hussein:** Sure, yeah.

**Feross Aboukhadijeh:** I will start with signing - it's a thing people often talk about... So they propose "Let's have every maintainer sign their packages, so that we know that the code has not been changed by Npm, or by any intermediary between the publisher's computer and the final place where it runs." And it's not a bad idea; we should probably do that... A lot of other package managers have that feature; apt, for example, in Linux, has package signing. But it would not have helped at all in this particular incident.

The person here we were worried about, the person who inserted the malware into the package was themselves the maintainer. So they would have simply signed the malware and we would all be running it on our machines, and nobody would know the better. So it's a nice idea, unfortunately it doesn't help at all with this incident.

\[43:54\] The second one I wanna bring up is 2FA. It's not a requirement to have two-factor authentication on your Npm account, and a lot of people want that to become a requirement, and maybe it should be... But again, in this particular incident it would not have helped, because the person we're worried about is the maintainer of the package, and they have their own 2FA device with them, and so they would have been able to use that to publish malware. So again, 2FA - not the solution in this situation.

I think possible solutions - one is read every single line of code that you allow to run in your project. Audit every single line of code.

**Amal Hussein:** How sustainable is that? We should give everything a sustainability score. This is a new rule. Or feasibility score maybe, I don't know...

**Feross Aboukhadijeh:** I'm just throwing it out there, because it's the most obvious--

**Amal Hussein:** Yeah, yeah, yeah. That's like the brute force --

**Tobie Langel:** This is what you're supposed to do.

**Feross Aboukhadijeh:** For certain projects, like cryptocurrency projects, and for big companies like Google, that have effectively unlimited resources, this is actually not a crazy idea. So Google will actually have their open source security team fully audit a package, and then they check it into their internal version control system and they treat it as their own code. So that is actually a solution for the most security-critical projects and for companies that have effectively unlimited resources.

Obviously - yeah, the practicality of this approach for a typical startup, or even a normal medium-sized/large-sized company is pretty low, because they don't have the skills probably to understand all this code, and the time and all that.

**Christopher Hiller:** They may be able to --

**Amal Hussein:** Piggyback...

**Christopher Hiller:** ...buy that service from somebody who wants to provide it, like a curator of some -- an audited version of the registry. I'm sure that would sell pretty well.

**Feross Aboukhadijeh:** There was an attempt by NodeSource to do that.

**Amal Hussein:** But that's a big liability too, isn't it? You're taking on a lot of liability doing that though... Because I don't wanna guarantee somebody that "This is safe, I swear, but I forgot that this -- oh, I forgot about automatic semicolon insertion" and like "Sorry... I guess this code is dangerous, kids..." You know...

**Christopher Hiller:** NodeSource tried that, and...

**Amal Hussein:** Yeah, so what happened with NodeSource?

**Feross Aboukhadijeh:** They had a thing called Certified Modules that they were providing for a while, but to be honest, I don't know how it worked, and I don't think it was particularly widely adopted... But I don't know the reasons for that. That would be kind of interesting to find out. There've been ideas people have been throwing around about like "Why don't we just all pick a trusted subset of Npm and just say everyone should just use these trusted packages?"

**Christopher Hiller:** But it's every version of that package. It's not just the package, right?

**Feross Aboukhadijeh:** That's a lot of work, and who's gonna do that work, and who's gonna pay for that work? So I also don't think that's very sustainable.

**Amal Hussein:** Yeah.

**Tobie Langel:** And as Chris was mentioning - I mean, you've audited the package once. Wonderful. I mean, I don't know how your life is around maintaining open source software, but I just get pinged all the time because there's like a dependency that I have to update, because there's a security vulnerability somewhere... That probably doesn't affect my project, because I'm just using a bit of it, but I don't know... So that's the other side of the coin, right? We have to audit every change, and we have to audit all of these changes just in time, because we actually wanna pull those patches in, because if not, we might be risking something else.

**Amal Hussein:** Yeah.

**Feross Aboukhadijeh:** The thing that's so interesting about these Dependabot pull requests, or whatever bot service you're using to give you these pull requests...

**Amal Hussein:** Renovate, Dependabot... Yeah, there's so many of them. Yeah, Renovate is definitely my favorite, by the way. Shameless plug, but yeah...

**Feross Aboukhadijeh:** The thing that's so interesting about them though in my opinion is that they help you keep your project up to date and avoid known vulnerabilities. Known vulnerabilities are vulnerabilities where some security researcher has found a problem in a package, and made a report, and a CVE has been issued, which is like an official report with the National Vulnerability Database, and then now Dependabot can warn you that "Hey, you should update", because it resolves this issue.

\[47:59\] But what's so interesting about it is if you just install Dependabot and you start just getting all these pull requests - I don't know about you all, but in my experience, I end up getting like five or ten of them per day... And they're so overwhelming. And I basically just read the changelog, and I say "Does this seem fine? Did the test pass? Okay, click Merge." Because there's too many, and you're not actually reviewing the contents of the changes... So what ends up happening is you have this unfortunate trade-off where on the one hand -- like, if you keep up to date, you're gonna be safe from known vulnerabilities. But the more you do that, the more up to date you keep yourself, the more you're running code that has potentially only been published for like a day or two on Npm. You're updating to the thing that Marak updated yesterday. You're clicking Merge on that PR because you're trying to keep up to date, so now you're actually running code that no eyeballs have looked at... So it's actually the case that some organizations choose to intentionally keep all their dependencies six months out of date, with the exception of security fixes, just to avoid this problem of supply chain attacks that come in from code that somebody published yesterday or a week ago, that hasn't been caught yet.

So it's this really unfortunate trade-off... It's like, what are you more afraid of? Are you more afraid of supply chain malware getting inserted by random bad actors, or are you more afraid of known vulnerabilities? And you have to choose your poison.

**Tobie Langel:** Right. The second problem for me, which is something you see a lot on the web, is just fatigue around just approving stuff. You just click Approve. It just got everyone in the habit of --

**Amal Hussein:** Yeah, nobody wants to be the legal that's standing in the way of progress either, right? There's also some social pressure to just keep it moving. That's a real thing.

**Tobie Langel:** Right.

**Amal Hussein:** So the reason why I like Renovate is because it's highly configurable. So you can set your thresholds, you can batch, you can configure the bajeezies out of it. But that being said, to your point about this six-month delay to update - I personally feel like this is kind of like a way of doing some risk-tolerance management... So hey, I wanna make sure that this thing has been adopted by other people, and they've had no issues, and those people have moved on to the next thing, before I take this on.

So it's some interesting social dynamics going on there, and I do think there could be -- I think for me anyway, there's room for improving the metadata around how we expose those community adoption statistics, so that folks can actually maybe configure their risk tolerance for when to auto-upgrade and when to not. So that would be a nice thing to have also, to be honest.

**Christopher Hiller:** If a maintainer has their package and they have their own policy around "Okay, this is how often we're gonna pull in these security updates" or what have you - that might not align with the consumers of that package, and what they expect and need as well. Then you have people in the issue tracker complaining about "Why haven't you published an upgrade for this medium-severity fix in some CLI thing?"

**Amal Hussein:** Yeah...

**Christopher Hiller:** Don't get me started on this, please...

**Amal Hussein:** But I totally get it. I mean, the time -- so there's two interesting factors here. One is the time machine aspect of dependency trees. Packages are literally time machines, and they're snowflake time machines depending on your stack, and your peer dependencies etc. It can get crazy. But also quite frankly for me, I think we have too much of a bias for the latest and greatest software. I'm very conservative with my teams. I like being a major version behind on major projects that have a pretty heavy peer dependency ecosystem.

For example, if I have a React project, I don't like being on the latest version of React, because if I'm one version behind, it's usually safe in terms of everything else in the ecosystem more or less supporting it, versus upgrading right away and then like "Oh, this bundler broke. Oh, this plugin doesn't have a thing for it."

We always try to push -- I think our bias towards pushing new and being very future-oriented... We all try to adopt the bleeding edge, and I don't understand why. Why do we all feel the need to be on the bleeding edge. Bleeding edge is not for everyone, and... I don't get that. Maybe you can share some insights, Tobie...

**Tobie Langel:** \[52:19\] It does go back to this tension though... Because again, either you're running the latest patches, and so you're safe against known vulnerabilities, or you're not.

**Amal Hussein:** Security patches can be patched in -- let's say I have three major versions of a project right now that I'm supporting in production. If I discover a security vulnerability, it affects all of them. I can patch --

**Tobie Langel:** Well, yes...

**Amal Hussein:** ...I can patch all those versions, right?

**Tobie Langel:** Not every maintainer does that though.

**Amal Hussein:** Of course, yes. But what I'm trying to say again, to discuss -- we're talking in an ideal world here. That is something that can be done, and that could be a hygiene or a practice that we push for -- that doesn't have to fall on the maintainer. Somebody else -- a rando Amal could submit patches to fix older versions, right? We don't have to put that responsibility on the maintainer either.

This just goes back to the whole sustainability thing... Like, do we feel like we have an adequate number of people even contributing to open source, considering how many people use it? And of course, there's company, and financial, and lots of access issues that are in the way as well of that, but...

**Feross Aboukhadijeh:** Npm doesn't make it very easy to start using a fork of a package. It's a lot of overhead to fork a package, to publish it as another name, and then to help people find it. So even if you did fix the security issues -- you know, if someone in the community wanted to fix security issues in an older major version, it's not easy to help people find it.

I personally think that the happy solution here is to lean on tools to help us identify when packages do dangerous things... Because if you look at the supply chain attacks that have happened, like this Marak one and then the other ones I mentioned earlier, like UAParser.js, and COA, and RC - the way that the packages were modified is so obvious to anyone who even looked at the code, that something really nefarious has just happened... We should have computers help us do this. I mean, computers are really good at noticing very deterministic changes.

So in those examples, all of those packages added install scripts, which means that when you go to install the Npm package, it's gonna actually execute code immediately on your computer. And I don't have data on this, but my intuition is that the number of times that a package that's really popular, that's been out for many years already, suddenly decides that it needs an install scripts - the number of legitimate times that's happened is probably zero. Or maybe it's a very small number that I could hold in one hand.

**Amal Hussein:** Yeah.

**Feross Aboukhadijeh:** So when that happened, to me the tooling should have told all of us as users of this software that -- sure, the maintainer is claiming that this is a patch version, but really, this change is so severe, it's so disruptive that it ought to be treated as a major version change. And so all of our tooling should have told us, "Hey, this package now has an install script. Hey, this package now talks to the network. Hey, this package now downloads an .exe file and runs it on your computer."

**Amal Hussein:** Yeah. "Hey, this package now has 17 new methods that talk to filesystem", you know?

**Feross Aboukhadijeh:** Yeah.

**Amal Hussein:** Yeah. It's suddenly very chatty with your local directories.

**Feross Aboukhadijeh:** I'm actually working on a thing that does what I've just said, so I'm kind of biased. I'm promoting my preferred solution. But I do think that we need something like this, because we can't review all the code by hand. We certainly can't just close our eyes and hope for the best, and just run this code and hope for the best. I think a middle ground is really nice, where you just use some tooling, some static analysis tooling to kind of tell you what does it look like this package is doing. And when you notice a really drastic change in behavior that indicates that the maintainer may have gone rogue, or a new maintainer may have actually been a malicious actor, not just a normal person - we can use those signals to alert people before they update to those dangerous versions.

**Amal Hussein:** \[56:15\] Yeah.

**Feross Aboukhadijeh:** I think that's where we need to go. Because I don't think the solution is to have everybody read every line of code, or to --

**Tobie Langel:** People are not gonna do that.

**Amal Hussein:** Right.

**Tobie Langel:** And I think there's another thing that we have to be wary of. One of the huge value of having open source and being part of the open source ecosystem is to be pushing changes upstream. To run everything safely, everyone has essentially to have their own local patched versions of everything. This is actually going back in time a lot, and it comes with lots of other issues. Unpatched software is doing a lot of damage.

**Amal Hussein:** Yeah.

**Tobie Langel:** This is not a thing where we can say "Oh, let's just back out of this thing." The reason why we're trying to keep things updated is to avoid unpatched software.

**Amal Hussein:** Right.

**Tobie Langel:** You had this really good point earlier, which is we can't just shift left and move all of that to the maintainers to do. I agree with this. However, if we don't do that, it either means that we can have tooling in the middle that's really good, or that all of us do that separately on our end. So I actually spoke about this in a talk about the priority of constituencies. That's a concept that comes out of the web standardization, and that essentially says that because if you're writing a spec, you're impacting all of the people actually developing the browsers, who are themselves impacting all the people developing apps, who are themselves impacting users. You have a much higher responsibility. And it's normal to shift the work towards you, because one hour of your time is gonna save a thousand hours of browser implementer time, and millions of hours of -- etc.

**Amal Hussein:** Right, right, right.

**Tobie Langel:** So we don't have a system like this for open source, and we probably should. A maintainer fixing a problem solves the problem for literally everyone that's downstream of them. So that's something that's really valuable. However, the problem is, in that priority of constituencies, when you have players that are high up that dependency, like a spec editor or an open source maintainer, they have to be supported by the folks that are below.

So essentially, you have to have a flow of resources going up, to sort of deal with the fact that they're having a lot of work to do, because it makes more sense for that work to happen left, to be shifted left. You can't just ask people to take on more work, but then not support them.

**Christopher Hiller:** Tobie, when I first hear of this, Google was starting to push this -- SBOM I think it was, or they had some sort of initiative where they want all these open source projects to adopt these standards... Or maybe it was Microsoft; I don't remember who came up with this stuff. But I was like, "Oh, great. Now it's a huge company, it's a trillion-dollar company that wants me to do more work for free."

**Tobie Langel:** Right. That doesn't work.

**Amal Hussein:** Oh my God, forget that... Don't even -- honestly, I was trying to avoid this part, because this is such a huge topic. This is going to set me off on a giant tangent, but I will say this very quickly... The fact that folks at TypeScript - God bless them, whatever - they made a patch into Babel that was so huge, because... Like, for anybody listening who uses TypeScript, and Node, and JavaScript, I juts wanna say that I highly recommend using the Babel parser for TypeScript, because really, you wanna use TypeScript compiler to handle types, and you wanna use the Babel TypeScript plugin to really manage all your transpiling, because you wanna really leverage... Babel has a much better transpiler than TypeScript. So just -- for what it's worth.

\[59:52\] So folks are starting to really widely acknowledge this, and Microsoft is like, "Yeah, we really should just start contributing to the Babel plugin." They created this giant patch that just created so much work for the Babel maintainers... And that's not cool. What is this? People working full-time are making so much work for people working on a community-run project that's extremely critical to our ecosystem without making formal time to contribute a ton of money or resources to help? I mean, that's just an example of that pushing it down in a way that's not conducive or productive, and then quite frankly, harmful in contributing to maintainer burnout.

**Christopher Hiller:** One thing I think a lot of people don't necessarily understand is "Oh, well, I sent a PR to this project. Am I not helping?" And in some cases, no. You're making more work.

**Tobie Langel:** Well, yeah. There's this really weird incentive in the open source ecosystem right now... There's a number of maintainers that are trying to make both ends meet by getting contributions and sponsorship. But what sells a sponsorship is actually a new feature. You have this completely wild situation where you're looking for money to maintain a project, and in order to have money in, you have to create more features, or build new things. So you know, before you had n features to maintain and no money, and now you have n+1 features to maintain, and you still don't have money to maintain those.

**Amal Hussein:** \[laughs\]

**Tobie Langel:** It's literally not sustainable.

**Amal Hussein:** Right, right. Literally. That makes sense. So with that said, we could talk about this forever... Tobie, I'm gonna give you the last word... What's an organizational solution that folks can adopt today, if I was like "Hey, JavaScript Party listener... Hey, Changelog listener... Adopt this one thing today in your organizations to make it easier for the phenomenal maintainers that give us so much of their time and energy to make the internet a better place?" So what's one thing, Tobie? No pressure...

**Tobie Langel:** The only way that I can actually answer was one thing...

**Amal Hussein:** \[laughs\] This is a trap. I knew we were doomed...

**Tobie Langel:** It's just gonna get worse.

**Amal Hussein:** You can't say the word "one" with Tobie... \[laughs\]

**Tobie Langel:** No, I will. I will. But it's a lot more burdensome than if it was multiple things.

**Amal Hussein:** Okay, let me change it to multiple things, if that's easier.

**Tobie Langel:** The only thing that will change this situation is a mindset shift. Literally. Because what we have is a systemic problem of an ecosystem that we all rely on, and need to function in a different way, and we have to address the systemic issues behind that. And if we don't, we can sort of continue patching our way through, that's fine; it's gonna be fine for a little while. Then it's gonna get a little worse, and then it's gonna get a little more worse, and there's some point in the really close future where large organizations will effectively be duplicating all of their -- vendoring everything, and having the funds to do that, and small organizations won't, and we're gonna get even more security issues that are gonna affect people more.

We're seeing this in Switzerland now. So many small, state-level organizations with private data about citizens, who their spouse is, their children, their bank accounts, how much money they make, where they're working, their address etc. On the dark net there's not one day where this doesn't happen. Why? Because we have really small organizations relying on software that they don't understand, and because there's no upstream sense of making sure that the stuff is sustainable and safe.

**Amal Hussein:** Yeah.

**Tobie Langel:** \[01:03:52.06\] If we don't have a mindset shift, I am not in a positive mood about this whole thing. However, I do believe that a mindset shift hasn't ever been that close as it is today. People are understanding their relationship between security and sustainability. And that's key. That's super-important.

For me there's like three specific things that we need to do to go forward with this. The first one is organizations that are relying on open source software, i.e. everyone that is using software, right? If you're building software, you're building on top of open source. There's no other way at this point. I mean, except super-specific circumstances. But those folks need to understand that they're not buying that software from somewhere. They're part of a broader ecosystem that they have to collaborate.

**Amal Hussein:** I'm just laughing because I just realized this was one thing... But yes, yes, I agree...

**Tobie Langel:** It's true.

**Amal Hussein:** Yes to everything, Tobie. It's absolutely true. Honestly, the topic I was really trying to avoid was "What does it mean for us to have all these big companies enter open source and for us to lose our --" it's like muscles, you know? You know how when you don't work out for a while, you're like "What's going on with my muscles?" It's like, they're atrophying because you don't use them. So I'm wondering if we're starting to atrophy our muscles around community-driven open source... Because I'm seeing more and more people in the JavaScript community adopt packages that are maintained and created by these large companies... And like you said, at any point a company can just close their source or do something else that's private for them in terms of how they maintain stuff... And oh, maybe it's a competitive edge for them; oh, maybe their biggest competitor is using a package of theirs, and they change the licensing...

**Tobie Langel:** I wasn't even going there.

**Amal Hussein:** Yeah, yeah.

**Tobie Langel:** I wasn't even going there.

**Amal Hussein:** I know you weren't going there, but I mean, that's one of the things that keeps me up at night. And it's concerning to me because I see projects like even just -- again, sorry to pick on Microsoft here, but they're an easy target... Like, Rush and Lerna - that's another good example of community versus corporate-driven.

I just don't want us to lose that muscle of having good practices that are community-run and universally available because we can't have corporations set boundaries for us in open source. I'm just worried about that, I really am. I don't know if you are, Chris. You're nodding, so... Is this an invalid fear?

**Christopher Hiller:** I don't think so. I think it's valid.

**Tobie Langel:** No, absolutely.

**Christopher Hiller:** I think a lot of these companies have shown us they are, really... I mean...

**Tobie Langel:** They're corporations. They're not non-profits.

**Amal Hussein:** Right.

**Tobie Langel:** I am not particularly upset when I see a corporation doing what's good for their bottom line. This is literally their job.

**Amal Hussein:** Right, yeah.

**Tobie Langel:** I mean, sure, it might impact their brand etc. but I think we have to sort of grow up to that. That's the reality.

**Amal Hussein:** Right. Well, like I said, we officially had lots of tangents, but I think they were productive and necessary. This is an important topic, so we appreciate you hopefully enjoying this ride with us. I just remember -- I think Tobie's one thing was like a mindset shift. So Tobie, where can folks learn more about what you do and find you on the internet?

**Tobie Langel:** On this topic, I think the easiest is just to follow me on Twitter. I'm just @Tobie. That's my Twitter handle.

**Amal Hussein:** Oh wait, it's not @oldmanshakesfistatcloud? I thought that was your...

**Tobie Langel:** I should probably redirect...

**Amal Hussein:** \[laughs\] Okay. That's great. And then do you have any projects or any talks or anything that you wanna highlight for folks?

**Tobie Langel:** I mean, I'm gonna be talking a lot about this in the upcoming month, because I think it's an important topic, and I think the community and our industry is actually ready to listen to this. So there's clearly going to be more on this topic. And you know, we didn't look at all of them... There's lots of areas that we could have talked about, that we haven't... So there's going to be plenty of opportunity to actually have those conversations in the upcoming month.

**Amal Hussein:** Excellent.

**Tobie Langel:** Absolutely.

**Amal Hussein:** Alright, well - it's been an absolute pleasure having you. Thank you for being wonderful co-guests, co-panelists, Feross and Chris, and we will talk to everyone next week. Take care, everyone. Bye!

**Tobie Langel:** Thank you so much for having me.

**Feross Aboukhadijeh:** Bye!

**Christopher Hiller:** Bye-bye!
