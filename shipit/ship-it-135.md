**Justin Garrison:** Hello and welcome to Ship It, the podcast all about everything after git push. I'm your host, Justin Garrison, and with me, as always and for the last time, Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I'm so sad...! It's a weird feeling. Like, I'm both excited, because I just feel like we're going to be up to even more ridiculous stuff... Because like, now, I feel like we can just expand to just pure nerdy ridiculousness... And it doesn't necessarily have to be maintaining software. You know what I mean?

**Justin Garrison:** I mean, I want to start by just saying thanks to Jerod and Adam for letting us do this show. If this is your first time...

**Autumn Nash:** They took a chance on us.

**Justin Garrison:** If this is your first time listening to Ship It - hi, welcome. This is the last episode.

**Autumn Nash:** That would be our luck. Somebody would come on and then be like "Oh, this is great" and then never hear another episode, because we switch podcasts.

**Justin Garrison:** Yeah, but that's okay. So thank you, Jerod, thank you, Adam, for letting Autumn and I kind of take this show in our own direction, with our own sort of ideas, and also just like --

**Autumn Nash:** They took a chance on us. We've never been podcast hosts before, so we had to learn, and we kind of sucked.

**Justin Garrison:** Well, I was once, and it was terrible. So that one doesn't count.

**Autumn Nash:** I love how you always tell on yourself. You're always down to be like "I did it this one time, and it was horrible, but..."

**Justin Garrison:** My first podcast I recorded I think was 2008... And I remember, because I had no podcasting gear, and I was on the floor of my apartment with my laptop, and I put a blanket over me to get better sound quality... And I was talking for like a half hour, and by the end of that, I felt like I was going to pass out.

**Autumn Nash:** This is why you're my favorite nerd friend to do hoodrat stuff with... Because who does that, Justin? You're like "I almost gave myself heatstroke this one time I tried to have a podcast..." Who does that?!

**Justin Garrison:** \[unintelligible 00:04:53.07\] But this show has been great. We've learned a lot through the whole process... I mean, we've changed --

**Autumn Nash:** Dude, they've put up with us through my low voice, your computer turning off... Like, Jerod, and like Adam there... Just gents. Thank you for taking a chance on us.

**Justin Garrison:** And Brian and Jason and our editors, producers, everyone that's helped us out...

**Autumn Nash:** I'm going to miss Brian so much. The poor man has had to listen to us for so long, and he just understands us... And dude -- and Jason, who am I going to ask about their mom? I'm just like going to miss Jason, and he's all like "Whatever..." and I'm just like "But we're not going to talk to you every week..."

**Justin Garrison:** Yeah. So I'm sure they're going to have a great time with the new stuff. I'm really glad that Changelog has decided that they want to focus on the episodes that really started the whole Changelog stuff for.

**Autumn Nash:** Okay, but still be our friends, Changelog. Don't forget about us.

**Justin Garrison:** I'm sure we'll have plenty of opportunity to talk to fellow people from before, from Ship It episodes, and Changelog folks in the future, which is good going forward.

**Autumn Nash:** We should have Jerod and Adam on Fork Around and Find Out. That'd be so fun.

**Justin Garrison:** Yeah. And so for anyone else, again, if this is your first episode listening, Autumn and I are starting a new podcast, which is discovering over the last month how much work that is. Especially to do it - I want to say in a...Not the right way, but a sustainable way.

**Autumn Nash:** Professional way...?

**Justin Garrison:** Yeah. Something -- we want to keep the audio quality up, we want to keep the guests, and the topics... The quality is -- this isn't just a "We're hanging out and talking."

**Autumn Nash:** And we should not trust us to do audio. Keeping it real - that is a whole job. And so is editing... Props to all the people that do all of the editing, and audio, and clips, and website for their own podcasts, because we do not have time.

**Justin Garrison:** Yeah. The time, I don't have the skill, and it's just not something that I'm going to do.

**Autumn Nash:** You have to know yourself, okay? And we know ourselves...

**Justin Garrison:** Yeah.

**Autumn Nash:** It'll be the most neurospicy, halfway done...

**Justin Garrison:** Like, at some point, 40 minutes in, you're just kind of like -- the rest of it is just all staticky, and... What? What happened? We're like "Well..."

**Autumn Nash:** Half a website... The website will be Justin's broken arm picture.

**Justin Garrison:** Yeah. So we want to make this sustainable. So if you haven't already subscribed to Fork Around and Find Out, fafo.fm is the website. If you don't want the acronym, we have ForkAroundandFindOut.fm. You can go there, too. They go to the same place.

**Autumn Nash:** I love the name so much. I was really worried about picking a name, because to me, picking names is so hard. You should have seen me trying to name my children. Okay? I had a whole moment... It's such a serious endeavor...

**Justin Garrison:** Like "This is so permanent."

**Autumn Nash:** Yes...! It's like our podcast baby, you know? We have to get it right. And I was like "What explains the pure, ridiculous, chaotic, but nerdy, and informative...?" And I feel like this is perfect. Like, it just matches us, and like the dad jokes and shade, and the like ridiculousness that I bring... You bring the dad jokes and shade, I bring the ridiculousness and slight shade.

**Justin Garrison:** \[08:15\] Just a little bit. Yeah. So naming things is not hard. Naming things that are identifiable and mean the same thing to a lot of people is extremely difficult... Especially things that like we need to find websites and social media handles and what wasn't taken.

**Autumn Nash:** Well, not just that, but like trying to find something that relates to SRE, DevOps, but still engineering... I think it was -- I don't know; you would think that there's a lot of related names over platform engineering, SRE, DevOps, and a bunch of other things, but to just be like identifiable, but also development...

**Justin Garrison:** And the language in industry changes so much... Like, the software developer is like basically the same thing, has been for a long time... But I remember one of the title options was The Sysadmin Show. And you're like "What the hell is this? Why would we call it The Sysadmin Show?" I'm like "Well, that kind of encompasses everything." You're lik "But it doesn't." I'm like "Yeah, it's true."

**Autumn Nash:** It doesn't. It's weird, because I think in just the way infrastructure and things have been on such a weird -- in the like time I've worked in tech, which is not as long as you, it's been... You know, you were doing sysadmin stuff, but then when I first started, SRE, DevOps, platform engineer... There's so many different ways, and each company has different tiers of how much they want to pay people, so they create all these different names...

It's like when you have a data scientist, a business intelligence engineer, and an applied scientist... You know what I mean? There's so many different factions that they break down a lot of these jobs, you know? So it's like trying to find something... And, I mean, sometimes being a software development engineer or a software engineer is very different than a DevOps engineer. And sometimes they do the same exact things. Our industry is so -- it varies so much by job to job, you know?

**Justin Garrison:** Yeah. And for Fork Around and Find Out, we want to cover all of those things. And it was hard, because it's just like, this isn't the SRE show. This isn't the cloud show. This isn't a database show. It's managing and running anything, software in general.

**Autumn Nash:** And just finding our audience, too. Like, we do want to stay very close to what we did at Ship It, but also expand, which is like hard to make sure you're still hitting a certain audience.

**Justin Garrison:** Yeah. One of the things I really enjoyed that I learned through doing Ship It was like trying to boil down how we wanted to start conversations. It was what is it that we want to bring someone into that we think you do interesting things, or you have an interesting experience or space that you work in... And we settled on "What software are you responsible for?" And that was kind of the thing that as soon as we could tell someone that, they could say "Okay, I get where we would go with that topic." And I think that was a really good learning experience, to be able to get it to that point of saying "Hey, we're going to start with this question, and the rest is just conversation." And the rest is wherever we want to go. Whatever we think is interesting in your answers, we're going to kind of dive into it a little deeper. And that was a lot of fun.

I think for Fork Around and Find Out we're going to do a similar thing. We're going to kind of start in that same vein, of what is it like to run, maintain software? But also, we can have a little more flexibility on not just the git push side of things. The things outside of git, the things outside of code... Because there's a lot of business things, there's a lot of process things, there's a lot of culture things that have to also apply to how you run your software. And this isn't a technical problem.

**Autumn Nash:** And the more that AI is forced into all these things, the processes and the business, and having the understanding of all that, and still how to maintain software is going to become more and more important.

Also, I think something that, if you feel like you've learned it, but I feel like the people are such an interesting -- I don't know if it's a side effect or whatever, but like, it's some of the most interesting people that do these types of jobs. And it matters a lot to the actual technical parts.

\[12:08\] And I think it's really cool that we've been able to marry cool people, but also very technical. There were some shows that I was almost worried that we got too technical or in the weeds, and people still were really receptive, so that makes me really happy.

**Justin Garrison:** Yeah, for sure. And actually, that's what we want to talk about today. We don't have a guest for today, we don't actually have news or a game... We wanted to do a little bit of a retro on Ship It for the last year... Because this is not only the last episode of the year, it's the last episode for whenever -- if Changelog ever starts it again, this is the last episode with myself and Autumn. And so Autumn, what was one of your favorite topics that we discussed?

**Autumn Nash:** I think one of my favorites will always be the space episode, just because I love space. And that is such an amazing use case to be able to work in the requirements that space requires. You can't update it all the time. You have to know that you can do that stuff remotely. You have to pick an LTS, and different versions that are going to live for a very long time. I just thought that was just super-interesting. I'm almost sad that it was when we first started, because I feel like I almost wished I was better at it, you know?

**Justin Garrison:** That one, I loved it because the fact that it was a completely different foreign environment for anyone that doesn't deal with that, but also, it's just a server that's falling around the Earth. Like, there's nothing special about that.

**Autumn Nash:** But it's wild. It's just floating out there, you know?

**Justin Garrison:** Yeah. And it's just Ubuntu, right? It's just like "Oh, well, yeah, we SSH in." I'm like "Wait, what? Hold on... How long can you stay on?" It was like "Oh, I forget how long it was... But it was like every hour or something you get like a four-minute window to like debug something." I'm like "That's crazy." Like, it's just a server.

**Autumn Nash:** See, I think in tech, we solve hard problems, but sometimes they're just hard and they're not fun, you know? That is a hard problem, that has very strict requirements and constraints, but it's so interesting that it would make to me like my very neurospicy brain so down to solve those problems, because it's a freaking computer in space, right? Like, that is so much fun... Just the fact that you have the constraints of these windows, you have to have it run for a long time. What's your backup plan if it doesn't work? That's so interesting. And then the fact that they started using it for like gas companies, and not just space, and just different ways that they took this software and started using it to solve other problems... I find that so interesting.

I will say, my other favorite episodes were our retro episodes.

**Justin Garrison:** That was what I was thinking for my favorite kind of topics, was just looking back on things that aren't even that old, right? Like, some of them we had in the nineties. We were talking about like WebMD; it was like late nineties, early two thousands... But like Mandy was early two thousands, and...

**Autumn Nash:** But it was so different, though. Just the fact that they were thinking of the context of what they thought WebMD was, the inverse... And that was right when \[unintelligible 00:15:07.03\] video, and you're just like "Bro, they have fallen." And like Yahoo... Think about how big Yahoo was. Yahoo was the place to be. That was everybody's mail. Like, that was my first -- I think Yahoo and Hotmail were my first emails. And now nobody uses that. It's just crazy.

I feel like a lot of times in history, just in general -- they say you need to know history to be able to make a good future. And that is so true in tech, because it's really hard to make things that are sustainable, and not just cool for a minute, you know? And even when things get really big and they are monsters, and they seem like nothing will ever take them down, and then you're just like "Well, these huge companies used to be like what everybody was betting on before the Google and the Amazon", you know?

**Justin Garrison:** \[15:52\] Yeah. And some of that also gives me hope for what the future will look, where when we see the centralization of a lot of these things, the downfall of Twitter, and spinning out into new things, I'm like "Hey people can own some of this again." This doesn't mean -- like, just because Twitter was such a dominant force throughout the 20-teens, and part of the beginning of 2020s, doesn't mean it's going to live forever. And even now, looking forward to 2025, Google was declared a monopoly by the courts, and they're going to be broken up in some way, shape or form, whether that means Chrome, or advertising... But whatever that means, things change over time, and nothing is permanent. And just knowing how fast some of those things can change kind of gives me hope to say "Oh, it doesn't always have to be bad if we can work towards something that we think is better."

**Autumn Nash:** Which is odd, because stuff like that used to give me -- I won't say anxiety, but a little bit of... You know, you are betting on whatever company you work on as much as they're betting on you, you know? And it used to freak me out the way that tech would go through these cycles. But now it's like -- you know when they have a wildfire in California, and that's a bad thing, but it also is like a rebirth of the soil and kind of like what nature needs to do its thing? And tech has been so weird and sad lately... Like, it's like the sad place that I'm just like "It's almost like I can't wait for the wildfire to take out whatever sucks, and like the rebirth of the new startups, the new big companies, and what these new laws..." Because think about it, most of tech, the big booms of tech, they have not really had the laws and monopolies that you need to kind of -- like, a lot of our laws haven't been made for technology and the era that we live in. They're trying to get rid of TikTok and do all this when our senators don't even know what TikTok and an algorithm is, you know?

So we're kind of in this place where the first kind of boom was during like just "Oh, this is new, and now we want to use it more", but people weren't really using tech the same way that we are, in like 2008. Now it's in everything, and it's kind of in our face that we have to change, while having this in everything, and kind of living in this new world that we created. So like what happens now? Like, that's exciting, in a way.

**Justin Garrison:** Yeah. And it's just the notion of -- in the early 2000s you went to the internet, right? You weren't always connected. And then iPhone and smartphones kind of changed all that, where if you want to clear your mind or do something, you have to like put your phone away, and like "I have to no longer be on the internet. I have to choose to not be on the internet."

**Autumn Nash:** Everything. I think there was a bill the other day, and it was saying, in a state, how they needed to give people access to phones, and why you should help, bills for poor people to get phones, because everything requires having a phone now.

**Justin Garrison:** Yeah. And a phone number is, to some degree, the new email. I mean, I guess it always kind of was, but what you could do with that phone number. It's not just a "I'm going to call you." No one picks up the phone anymore. It's a "I have to be able to reach this website, fill out this form, text this thing", whatever. Like, that's the bar now.

**Autumn Nash:** Think about it, if you have no home and no cell phone, how do you get mail? How do you get multi-factor authentication? You know what I mean? Like, even to fill out a lot of forms... We're trying to partner with the Recovery Cafe, because to fill out a lot of forms that do help people who are unhoused, and who need it - cool. Those things exist. But they don't even have access to them. They don't know how to use it, and they need like so much more than they have access to actually utilize the things that are for them.

So I think the first time with tech -- like, when we talked to people for the retro shows, it was something cool that they kind of stumbled on. They enjoyed it, and then it became this thing. When we talk even with Pete, about like getting into early internet and all these things, and it was a very like niche of things... But now there's no niche. Like, it is everything. Tech has encompassed everything. It's like the second revolution of tech. And at first it was like sad, and now it's kind of like hopeful, that maybe this means we get to go somewhere cool after all this...?

**Justin Garrison:** \[20:07\] What was a topic or a guest or a show that we did that surprised you?

**Autumn Nash:** Wait, you didn't say what your favorite episode was.

**Justin Garrison:** I was saying the retro ones were my favorites.

**Autumn Nash:** Okay. What was your second one?

**Justin Garrison:** I would love to get more unique retro experiences from people that were -- things like Pete doing ISP stuff early on, and even the -- like, the mainframe discussions we've had... All of those things...

**Autumn Nash:** The Walmart one was really interesting, too.

**Justin Garrison:** Yeah, yeah. Like, the cycles keep repeating themselves. And if we just apply the pattern with the new technologies we have for next year, it's probably going to emerge in a similar way.

**Autumn Nash:** Isn't that crazy? It's the same -- like, a different source of compute power, and... You know what I mean? It's like, they all keep repeating themselves. Okay, but what's your dream retro episode?

**Justin Garrison:** My dream retro --

**Autumn Nash:** Mine would be a video game. Like, let's go talk to the people that created Atari, and whatever they had to do to -- you know? That would be so cool. Like, how is it different --

**Justin Garrison:** I mean, those are so hardware-specific, right? Because Atari, and Pong, and all this stuff... There's a book about Steve Wozniak, who--

**Autumn Nash:** Or what about the first versions of like Nintendo 64, and when we first got to like the internet, versus like Fortnite now? Because remember we were talking about -- Fortnite is one of the only things you can take off the internet for six hours, and people... Remember -- there's retail studies that if something takes two and a half seconds longer, people will get disinterested. But Fortnite can take itself offline for six hours and kids are over there, waiting, and biting their nails. It's wild. And they make so much money.

**Justin Garrison:** This year I did reach out to a couple of video game companies... I reached out to Niantic for Pokémon Go, and...

**Autumn Nash:** Oh, that would be so cool.

**Justin Garrison:** What's the other -- there was a...

**Autumn Nash:** Who made the original Sony? Because -- can we just talk? The GameBoy one was so much cooler.

**Justin Garrison:** The Sony... The handheld?

**Autumn Nash:** The Game Boy, yeah. Like, the first Pokémon.

**Justin Garrison:** Oh, the first Pokémon on the GameBoy. Yeah, for Nintendo.

**Autumn Nash:** It was so good. They're so much better than the ones now. My son was like remaking the Pokémon first ones... He made it like exactly like the GameBoys, where in his own little game -- and I was like "This is so much cooler than the ones they have now."

**Justin Garrison:** So if anyone runs software at a video game company or infrastructure video company and you're allowed to talk about it... Because that's always one of those tricky things, where the video game industry is kind of like the movie industry, and they just don't want to talk about it a lot of times.

**Autumn Nash:** I want to talk to people from Baldur's Gate.

**Justin Garrison:** Yeah. So I actually was scrolling through -- there's a conference here that's usually in California, for like the special effects and gaming industry.

**Autumn Nash:** We have \[unintelligible 00:22:44.05\] here.

**Justin Garrison:** Yeah. So I was looking for like speakers for some of those, and like saying "Hey, who would want to come on the show, maybe?" So I'm still looking at it, but if anyone has a guest, or if you do it yourself and would like to be on the new show, send us an email, because we would love to.

**Autumn Nash:** Even if you're talking about games you did in the past... Because there is a lot of turnover in the game development world. So even if it's a game that you worked on years ago, it would still be really interesting to figure out... Because it's different than what we both do, but still similar enough that it would be really interesting.

**Justin Garrison:** I think one of my favorite -- I would love to have someone from Netflix that started at the streaming point, when they switched from "We now do streaming", versus only DVDs. Because I was a DVD subscriber for such a long time. And now most of it is streaming-based. And it's like, they had to figure a lot out in that timeframe, of "What does this look like?" And they didn't have their own CDN, and they didn't have all that stuff upfront... So I'm kind of curious like what that story would look like.

**Autumn Nash:** I think that would be also really interesting, where video games got interesting... When you start streaming Call of Duty and all that cool stuff, instead of getting discs to load.

**Justin Garrison:** Yeah. And even the streaming Xbox, the Game Pass... And if anyone worked on a failed -- what was the failed Google, the thing they shut down, that was a gaming platform?

**Autumn Nash:** I think Amazon's was Luna.

**Justin Garrison:** Luna... Yeah. There's Game Pass, there's Luna... Nvidia has one...

**Autumn Nash:** \[24:03\] I'd also love to talk to someone from Minecraft, mostly because we'd get street cred with our children, but also because the amount of hours I've put into Minecraft... But also, it has three different platforms, if you think about it, right? So you've got multiple platforms; you've got the Java edition, you have the mobile edition, and then they got acquired and they've tried different ways to like try to like melt it all together. So I think that would be super-interesting.

**Justin Garrison:** There was a really good Changelog podcast interview with some of the folks that are on Minecraft, specifically in the -- it was the new add-ons, or mods, or whatever it was called, that work on Bedrock. That was a really fascinating episode.

**Autumn Nash:** I'll have to go check it out.

**Justin Garrison:** Because -- yeah, that was probably over summer, I think... But I really enjoyed that one, just because of the difficulties of like "Yeah, this is a multi-platform thing, that we have to like take in basically user code", but it's like not any -- you can't do anything and everything. But I think the subset of JavaScript that they compile into the game to make it configurable, to let people do add-ons on Bedrock, on Java, on all that stuff... It was really cool.

**Break**: \[25:08\]

**Autumn Nash:** Okay, so what's your next question?

**Justin Garrison:** Well, we talked a little bit about what episodes surprised you, or what topics surprised you...

**Autumn Nash:** Okay, but what was like the really good surprise? Like, I'm trying to think... I feel like there were some that were like wild. I think the .NET, that it does like its own -- what was the recent one...? From our actual last week episode, the fact that it does multiple runtimes, and it knows when to do the mobile and when to do like different runtimes, and how to be efficient? Coming and just seeing like the experience I have in runtime, which isn't even as much as most people... You know, the people that have been doing it for 40 years, I don't know. But it is so complicated to create runtimes that run on different things, and to have one be able to switch back and forth and know what it needs is just phenomenal.

I think also, going back to the space episode, just learning about the constraints of that... Oh, the Walmart one. How they had servers in every Walmart...

**Justin Garrison:** And that's like a common thing now, where every Target has a Kubernetes cluster. Every Chick-fil-A has a Kubernetes cluster. All of these edge locations...

**Autumn Nash:** But are they ran locally in like each Target, or is it ran --

**Justin Garrison:** Yeah.

**Autumn Nash:** Oh, really?

**Justin Garrison:** Yeah.

**Autumn Nash:** Also, I love that Kubernetes and Target -- I love the Kubernetes community, and then I love Target, and I'm just excited that those two things have some sort of relation. But one person or one team is managing it, right? So isn't that like a little bit more complicated than having physical servers in each store?

**Justin Garrison:** What do you mean?

**Autumn Nash:** Because if something breaks, somebody has to go to that store.

**Justin Garrison:** Yeah. I mean, you have some redundancy... There's a few servers in each place, and you have some overheads -- something can break and stay broken for a little while, that you're still okay.

**Autumn Nash:** I just feel like that would stress me out, knowing that I have to call someone and send them to Montana, or somebody like over here, or like...

**Justin Garrison:** I mean, a lot of the stores will have -- like, you'll just ship a pre-imaged machine, "Just go plug this in." It's just like, oh, you can have hands on the ground that do the thing. I remember the episode with David about Rawkode was fascinating... His architecture for every database column was a microservice. I just kept thinking about that over and over again. I'm just like "Wait a minute... Why and how does this work?"

**Autumn Nash:** Talking to David about anything is fascinating.

**Justin Garrison:** Yeah, that one was fun. Oh, man... I'm just looking at this year of episodes... There's so many amazing people we got to talk to.

**Autumn Nash:** Oh, Tim and his like hot girl, like --

**Justin Garrison:** The hot girl problem? The hot shards? Yeah.

**Autumn Nash:** Yeah. Okay, but databases sharding, and online dating. Who would have thought? Tim is always good for like a crazy surprise... And then the way that man tells stories... Let me tell you. He just tells stories in the most beautifully illustrated way, and you're just like "Okay, I'm so ready. Tell me all the things."

**Justin Garrison:** I had fun with the like shell-based episodes, with Dave Eddy about Bash, and the Nushell folks that came on... That was really fun to me. I am planning on switching to Nushell in the next year.

**Autumn Nash:** I thought that was really interesting. I need to actually use that. Oh, can we just talk about Tar, but like Tars as like a bedtime story? Like, if that doesn't tell you how like being a nerd and then becoming a parent like affects you... Like, that was just beautiful. Like, who can make that into a bedtime rhyme -- do you know how hard it is to make things rhyme?

**Justin Garrison:** Yeah.

**Autumn Nash:** Also, Hazel gets best dressed ever, because we usually just are in like sweatshirt and a T-shirt... And she rolled up like a fairy godmother of like Kubernetes, and infrastructure, and it was great.

**Justin Garrison:** Man, I can't even... There's so many cool things that we -- people we talked to and topics we got to... Gina from the Octoprint project... I was super-surprised.

**Autumn Nash:** How does she maintain all that by herself?

**Justin Garrison:** And how much of that was automated? And it was so cool seeing the tools...

**Autumn Nash:** But she did all of those iterations. And like, she does that release by herself. And do you know how hard it is to release things? Oh, my goodness. Oh, and Veronica... Veronica is badass. I don't know if you can say that on like a podcast, but like, she just -- releasing Kubernetes and being on that whole team, and all the things she does, plus her day job... Fire.

\[34:08\] Oh, Lily! Lily? Amazing. Me and Lily are besties. And did you know she does art, and she does like all of the amazing platform engineering? She's brilliant, dude. Brilliant. Like, brilliant on multiple levels. When she was on the show, I thought she was cool. And then I got to know her, and I was like "How can one person just possess all these skills in one body?" Like, fire. We've met the coolest people, and got to talk about the coolest things, and I'm just like "How do we even top this for a new show?"

**Justin Garrison:** And that's one of the -- I'm very excited about just continuing on and expanding that a little bit, right? Anita from Meta, right? The millions of servers, talking about their -- like, they built this whole platform from scratch... I'm like, that is such a cool use case. But then also, there's a lot of companies and places and apps you've never heard of, that have interesting challenges, that have the constraints, as we mentioned before, like from space... The constraints are what make the problem interesting most of the time.

**Autumn Nash:** Yes... Because sometimes they're just hard problems, and they just suck, because they're just hard and they're not fun. When you have an interesting problem that gets your focus, it is my favorite. They're delicious.

**Justin Garrison:** When you're like "Okay, you have to do this, but you have no internet access." And you're like "Oh. Well, now what?"

**Autumn Nash:** And you're like "Wait. Hmm..." Also, Anita is a boss. Like, I am like already gonna like show up to her Scale talk next year... And it's like, I'm waiting four months just to see her talk, because the stuff that she talks about, you're just like -- like, your brain hurts a little bit, because it's so far into like the systemd Linux world, you know? Also, how do we just convince them to give us a sweatshirt? I really want one of those sweatshirts.

**Justin Garrison:** You just want the \[unintelligible 00:35:44.19\] inside the hood?

**Autumn Nash:** Yes, they're so cool.

**Justin Garrison:** Yeah, it's gonna be great.

**Autumn Nash:** Also, half of our guest on our shows are gonna be at Scales, too. I feel like we need another Scale episode, because it's gonna be the, like, Ship It, Kubernetes, Linux, tech-ridiculous personality convention of people, because like everybody's going to Scale this year. I just looked and I was like "Besties, besties..." So much fun. We are gonna do so much hoodrat stuff. I'm so excited.

**Justin Garrison:** Yeah, I am very excited for Scale next year. If you haven't signed up yet, I think that tickets are available now.

**Autumn Nash:** Y'all better get on it, because those are some cheap tickets...

**Justin Garrison:** Yeah. March in Pasadena. If you're a student, they're 50% off. Yeah, they're working on the schedule right now. I think by the time this episode comes out, there might be a little more out there, but... Yeah, it's gonna be a good one. I know I'm traveling to a couple of places, but again, come over to Fork Around and Find Out, we'll have all the updates on where we're gonna be physically if we wanna meet. And hopefully, the goal with Fork Around and Find Out is - again, it's gonna be sustainable, but also because it's just Autumn and me doing a show, we don't have a network behind us, we don't have other funds, or whatever... We have to get the sponsors, we have to get those things in place, but also, that might give us some freedom in like "Oh, we both want to go to this conference, or we both are local to this thing", and so we can come meet up with people, do some in-person podcasting a little bit more, possibly, if that works out.

**Autumn Nash:** I really hope we do though, because I feel like -- when I started in tech, I was a military spouse and I had really young kids. And learning to build hackathons around how to making them accessible to other people... Like, our first hackathon -- we did some virtually, and had like a kind of code-along. And then our second hackathon was like -- we grew it and made it like a lot virtually, so that way it was like in-person at Microsoft, but we also had like a ton of people online, and like students, and everything... And I think that it's awesome to do in-person podcasts, because not only is it a different type of energy... I thought, for one, our in-person stuff was hilarious. And just getting to meet all these people... But like sometimes people don't have the same access to these things as we do. And sometimes people might not even know what Scale is.

\[38:09\] I can't imagine going to half the conferences that you go to, and you've been in tech longer than me, and you go to places I don't go. And I'm always super-excited to hear where you're going next. And I think it's like sharing that experience until people get to the level where they're able to.

**Justin Garrison:** Yeah. And I think that a generation of people in tech now are new to tech in the last five to maybe 10 years... They missed out on meetups, and on just the things that I remember doing in the early 2000s where it's like "Oh, they have some free pizza, and someone's gonna talk about some technology, or an outage, or whatever." And those were the places that I met a lot of people. And I'm not necessarily close to the Los Angeles tech scene anymore, because I've been working remote for so long... But it was my way into a lot of places; my foot in the door, and just meeting a lot of people and knowing what they were doing was because I bumped into them at one of those meetups, and I'm just like "Oh, I'm gonna go, once a month or whatever, I'm just gonna go drive somewhere and find something." And now there's none of them. At least not where I am.

**Autumn Nash:** There's one in Seattle, but also, if we truly want to make tech accessible to disabled people, moms, single parents... We have kids now. When you first probably went to meetups, you probably didn't have as many responsibilities.

**Justin Garrison:** Nope.

**Autumn Nash:** You know what I mean? So making it truly accessible to people that may be in their second career, or are looking to pivot - it makes it like where you can download something, or meet somebody online... Which in a way is kind of full circle, because people were at one point meeting each other in chat rooms, and we were talking about that on the AOL thing, and like RSS feeds...

**Justin Garrison:** Yeah.

**Autumn Nash:** So it's like creating new ways to make tech accessible in this new kind of, I guess, era.

**Justin Garrison:** Yeah. And we don't have plans to do like a Slack channel, or a Zulip, or anything like that, for --

**Autumn Nash:** I don't think we need it. Blue Sky, everybody knows we're there. We're on Blue Sky. Where else are we? I'm on Instagram...

**Justin Garrison:** I think it's hard to have a conversation on Blue Sky. Like, that is definitely -- I mean, you don't really have it in Slack necessarily either.

**Autumn Nash:** Say that to the \[unintelligible 00:40:12.17\] threads, okay? Like, people will find a way. Like, there are bean filters on there, okay? Like, we can figure it out. Also, I've had whole conversations about the most random things, like Hozier albums, and children, and craziness. 3D printing...

**Justin Garrison:** I don't necessarily want to have another login, for another place... I'm so burnt out on all of these tiny communities. I have a couple dozen Discords that I never check.

**Autumn Nash:** Oh yeah, I never check my Discords. But I also think this goes back to finding like the public... I don't know, it's not a meetup, but it's an accessible way. Like, what if you're new in tech, and you might not get to meet, I don't know, some of the cool people that we meet on here? You know what I mean? So it's like, when we get to have those big conversations in public, it's so accessible for someone else to join, or someone to read it. Before I was in tech, I learned so much by osmosis of reading Twitter threads...

**Justin Garrison:** Yeah. Twitter was that place that felt magical, that you could reach out to anyone and you could see two celebrities talking.

**Autumn Nash:** Yes.

**Justin Garrison:** And you're just like "Oh. What?"

**Autumn Nash:** But not just that, but it was like a way to trick my very neurospicy brain into learning, but learning in a social manner. I learned so much about infrastructure, and coding, and technology, just because I was watching two really smart people have a conversation. It is like watching two engineers at work that are more senior than you have like a technical debate, but in your phone, and I can do that while my kids are playing. And I think that is just magical and beautiful, the fact that you have access to that knowledge. And I hope that's what we can share with people on Blue Sky, is like having cool conversations... Whether it be about technology or not, but just giving people access to people that they might not be able to talk to or have these conversations with.

**Justin Garrison:** \[42:07\] And at the same time, hopefully owning and being responsible for some of that infrastructure, and -- like, the responsibility of like you can use Blue Sky, but also you can own your piece of it. I'm still running a PDS at home, I'm planning on moving my main account over the holiday break to my personal PDS, that's literally running at my house, and be able to migrate all of my data, and have it hosted there, and just see what that's like, and see the responsibility of it... And so far it's been running -- I still have some quirks and I need to figure out some things, but there's a lot of promise in some of these new technologies.

I actually just saw a podcast interview with -- what's his name? The person who started Black Sky. The Black Sky labeler, on Blue Sky, that -- I want to have them on the show. I was like, that's great, because I love seeing how you can run public software and infrastructure -- start as a hobby, as a public good, for a larger community, in a way that's not "Come join my Discord." It's a "Hey, we can all join this thing together, that you're already here. You're already active in this space. How would that look if you just got a new filter, or some way to peer inside that community a little easier?"

**Autumn Nash:** I also think this is like -- remember how we were talking about how a lot of the wonderful people that we met got jobs through... I think - was his name, David? The one that was like working at Radio Shack. Or how Rich was doing like his own server stuff and ended up getting a job. And then it kind of got to like open source; contributing to open source was how people were getting jobs, you know? And then open source has been in kind of a weird place. But now - hey, getting into Blue Sky, maintaining infrastructure on Hackyderm... Look at Hazel's career, look at like different -- you know what I mean? Like, it's a new way for people to connect with people, but also being able to go run your own PDS with like Blue Sky is also a great learning experience.

**Justin Garrison:** Yeah, I constantly -- everyone comes up to me like "How do I get in the industry? I can't get experience and I can't put it on my resume." I'm like "Do you know how many open source projects run infrastructure, and how many communities run infrastructure, that you can get experience - you don't get paid for it, but you gain experience."

**Autumn Nash:** But this is also where you don't have to deal with the judgy, gatekeeping people of some open source projects, because you're running your own social media, you know? So it's also something to say "Hey, I did this. Now can I contribute to open source project?" Or just however, but there are new ways.

Some people in tech are very introverted. Maybe they don't want to have to go and like talk to humans on their first project. This can give them that confidence, and then go approach someone in open source. But I think it's just a great learning opportunity, and it gives you that dopamine hit of it being something cool that you get to use, but also experimental, you know? And I think sometimes when you run into constant bugs and frustrating things, you need that fun part of it to kind of motivate you through it.

**Justin Garrison:** Yeah. I know a lot of people that got experience just doing home labs. And I feel like being able to homelab some social media is kind of the next stage for a lot of people.

**Autumn Nash:** It is, right?

**Justin Garrison:** Like "Oh, I can do this at my house with an old laptop, and then I can show people I did it. I could show people, and they actually use it and consume it and say "Oh, this is something that is available a lot of times." And even when you have outages, how do you communicate that? Because those are all things that you have to do at work, and you have to do those things for a job if you're running infrastructure, and being able to do that in like a voluntary way, of saying like "Oh, I'm interested in this thing. Let's see how it works. Oh, do I have a status page?"

**Autumn Nash:** It's also a buy-in to learn those skills. How many people just stumbled on something because they thought something else was cool and they had to learn some skills to do that, you know?

**Justin Garrison:** So Autumn started... As the very end of the show. Autumn started -- you started your new job at Microsoft... And so I've sent her a...

**Autumn Nash:** \[45:55\] Also, Justin is like the sweetest friend. He really is. I know we do a podcast together, but he's like my bestie that I harass all the time, and then he sends me like a bunch of homework... He is the sweetest, kindest friend.

**Justin Garrison:** And I'm so glad that -- we never knew each other before this podcast.

**Autumn Nash:** Yes, we did. We were \[unintelligible 00:46:10.00\]

**Justin Garrison:** We were in a Slack channel, both of us...

**Autumn Nash:** He also forgets knowing you half the time. No, just joking.

**Justin Garrison:** We were in a shared Slack channel, a channel that I started at Amazon.

**Autumn Nash:** Take a screenshot. We have to get a picture.

**Justin Garrison:** That's your address on it. You don't want that out there.

**Autumn Nash:** Justin's smart. Don't listen to me.

**Justin Garrison:** I didn't post in \[unintelligible 00:46:29.27\] So Autumn started at Microsoft, she's a she's a PM for Linux security, and I wanted to send her an end of Ship It gift and an early Christmas gift. And so she's opening this present right now. You're gonna have to describe what's in the box.

**Autumn Nash:** Well, first, let's describe the box. The box looks like a serial killer sent me a package...

**Justin Garrison:** It's just an Amazon box.

**Autumn Nash:** Retaped. It's got like big writing that says "Do not open until I tell you." I was like "Whoa, whoa."

**Justin Garrison:** Yeah, I wanted to make sure that we could do this live on the air. So this is a fun going away present.

**Autumn Nash:** Also, Justin comes with multiple gifts. One is his wife, because she's the coolest. Two, he just sends you random stuff in the mail, and he is like a thoughtful gift giver. Also, he puts up with me. Also, he's a really great uncle, who does stitch-like voices for your kids, and... Like, don't introduce him to your kids, because your kids will think he's cooler than you.

**Justin Garrison:** It's okay, because my kids don't think I'm cool, so it's fine.

**Autumn Nash:** My kids think you are the coolest thing ever, and it's like, I'm just really bitter about it. Like, they go to California to visit their dad, and they try to hang out with you. And I'm like "He is my friend!"

**Justin Garrison:** Well, they're coming to Scale, so we're going to have a good time.

**Autumn Nash:** They're so excited about it... But just to see you. Oh, this is so cool...!

**Justin Garrison:** Do you know that? Open that -- open that top one.

**Autumn Nash:** You are ridiculous! Why did you send me windows cement? This is why I was excited, because I was like it's either going to be just like straight ridiculousness, or like something that's going to freak me out... Because he was like "I won't tell you what's in the box." And I was like "Oh, no." Who is this -- this is Bill Gates.

**Justin Garrison:** Yes, that's Bill Gates.

**Autumn Nash:** Bill Gates was this young at some point.

**Justin Garrison:** Some people are going to be familiar with this...

**Autumn Nash:** I love this.

**Justin Garrison:** Bill Gates did a shoot for Teen Magazine back in the '80s. I think it was '83. And it's a very --

**Autumn Nash:** Should I be scared what this puzzle is? What is it? A Windows puzzle?

**Justin Garrison:** Yeah, okay, so wait --

**Autumn Nash:** I cannot --

**Justin Garrison:** So even though Bill Gates isn't in charge of Microsoft anymore, the photoshoot is so iconic that I framed a picture and we sent it to Autumn so she could put Bill Gates somewhere...

**Autumn Nash:** What is this?

**Justin Garrison:** The rest of it is unhinged Windows 7 stuff. Windows 7 -- when did Windows 7 launch? Windows --

**Autumn Nash:** How did you find this stuff? Like, I just --

**Justin Garrison:** Windows 7 launched July of 2009. Back in 2009, they were looking for influencers that they could have Windows 7 launch parties for. And so I was one of the inf--

**Autumn Nash:** So you mean that we've been in the influencer realm since before Instagram and TikTok?

**Justin Garrison:** Yes. Yeah, I don't remember -- I had a blog...

**Autumn Nash:** Oh, were you like a cute little Instagram like influencer, but before Instagram?

**Justin Garrison:** Yeah, before social media. I was an uber nerd.

**Autumn Nash:** You were like -- you were famous out here and you didn't even tell me...

**Justin Garrison:** So in that box, there are -- so Windows 7 came with like these crazy, unhinged wallpapers that they had different artists design, and then they they took those pictures and they made different things. So one of the puzzles is that there's a poster there that shows all the backgrounds. There's playing cards that have the backgrounds on them.

**Autumn Nash:** This is the most perfect, nerdy thing I have ever received in my entire life. Like, this is the most vintage... I just want you to know that I'm keeping this photo of Bill Gates looking like he is like a teen, like model, forever. Who does this? This is like the \[unintelligible 00:50:08.17\] album with computers.

**Justin Garrison:** \[50:11\] There's also a copy of Windows 7 Ultimate signed by Steve Ballmer in there. So that was like the signature edition. Yeah, there you go. It's a signature edition of Windows 7 Ultimate.

**Autumn Nash:** In the wrapper, though. In the wrapper.

**Justin Garrison:** And so -- I think I used it at one point...

**Autumn Nash:** Does that mean you just didn't --

**Justin Garrison:** No, I installed it at one point. The key is used...

**Autumn Nash:** I was like "Did you just like keep it all and you're like "I'm not using your stuff. I'm just an influencer now."

**Justin Garrison:** I kept all of that swag from the launch party. I forget what else they had. I gave some of the things -- I actually had like... They sent you the swag, and then they just said "Go host it for your friends." And I'm like "This is the weirdest thing that I'm going to invite some people over."

**Autumn Nash:** You were like a legit little teeny baller influencer over here.

**Justin Garrison:** So I think I had two coworkers come...

**Autumn Nash:** Look, Justin was like the epitome of like one of those, like... He was like a Sheen model before there were Sheen models, but for nerds. Look at this. Posters.

**Justin Garrison:** Yeah, it's like a poster of posters. It's the weirdest thing, but it's...

**Autumn Nash:** I'm going to take so many ridiculous photos in front of this poster... Like, y'all are not ready. Like, we're about to have the most unhinged Blue Sky posts. It's going to be great.

**Justin Garrison:** Yeah, so I didn't even realize that this was 15 years ago when Windows 7 came out. I've had that stuff, and I'm just like "Oh, you're starting at Microsoft."

**Autumn Nash:** I don't even have to make like old people jokes about you anymore... Like, you should be making them about yourself. It's great.

**Justin Garrison:** Yeah. So congrats on the new job, and Merry Christmas.

**Autumn Nash:** I can't wait to -- where am I going to put the picture of Bill Gates? Like...

**Justin Garrison:** On your desk. He has to look at you.

**Autumn Nash:** Every time you send something and it's from you, my children assume that you're in a box...

**Justin Garrison:** It's me in there?

**Autumn Nash:** Yeah. And I'm just like "Um, Mr. Justin is not in the box."

**Justin Garrison:** Well, this gave them some playing cards to play with. They can play war, or something. I don't know.

**Autumn Nash:** I'm putting that stuff up where nobody can touch it. It's a classic \[unintelligible 00:52:04.19\]

**Justin Garrison:** I don't know if the cards are opened. I don't remember. I don't think I ever did the puzzle.

**Autumn Nash:** It's a classic, Justin.

**Justin Garrison:** Yeah, so there you go. You can \[unintelligible 00:52:10.02\]

**Autumn Nash:** Also, we need to figure out what ridiculous shirts we're getting our kids for Scale.

**Justin Garrison:** Oh, yeah, they should have some -- well, we need to have some Fork Around and Find Out shirts.

**Autumn Nash:** Just to have them run around in little Fork shirts... It'll be great.

**Justin Garrison:** It will be good. So yeah. So thank you, everyone, for listening to the show. Thank you for listening to us this past year. If you have not subscribed to Fork Around and Find Out, then please do. We'd love to hear from you. We're trying to get that just going, because it's fun to start it from scratch, it's also terrifying to start it from scratch. So if you can leave us a review or share it or do something that like boosts algorithms...

**Autumn Nash:** Yeah, we invested a bunch of money into this new venture, because we can't stop doing nerd talk with our friends. But also, starting your own business is so scary.

**Justin Garrison:** Yeah, it's a lot of work, and we appreciate everyone that is here just listening, and who has given us feedback over the years... We've taken a lot of that, hopefully going forward.

**Autumn Nash:** Oh, my God. We love y'all's emails and comments and Blue Skies... It makes my day.

**Justin Garrison:** Yeah. It has been a great learning experience, and we just love everyone that has given back to the show, because it's made it better. So thank you, everyone. Have a good holiday, happy new year, and hopefully, we will talk to you again soon.

**Autumn Nash:** Can't wait!
