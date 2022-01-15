**Jerod Santo:** So I am joined by Paul Orlando, who writes on systems complexity and second-order effects on his Unintended Consequences website. Welcome, Paul.

**Paul Orlando:** Thanks, Jerod. Good to be here.

**Jerod Santo:** Excited to have you. I've been enjoying your writings for a little while now, and I think a lot of them, if they don't directly relate to the craft of software development, they definitely are tangential, and have interesting implications for software folks. So let's start by learning about you and how you started writing about this topic.

**Paul Orlando:** Sure. I'll tell you a little bit about how I got started with it first. I was thinking about this just today... Nothing systematic about it whatsoever. So I saw a bit of news one day -- this is, I guess, two-and-a-half, maybe three years ago, when Google came out with Google Duplex at VoiceAI, and they did this really cool demo...

**Jerod Santo:** Okay, yeah.

**Paul Orlando:** I don't remember... It was like ordering flowers, or doing laundry, or whatever.

**Jerod Santo:** Yeah, they call in order things for you and interact with a real human, or something.

**Paul Orlando:** Exactly. They did this demo, and a friend of mine had actually had a VoiceAI startup that he had shut down maybe a year before that... So I was kind of like messaging with him, was his timing off? Or is he gonna revitalize it somehow? But it got me thinking initially about scale effects that would be possible with something like a voice AI...

So in the same afternoon I bought the domain name, put up the first blog post on like a WordPress site, which is why the domain is too very long and difficult to spell words, which I thought at the time was clever... And also a .es at the end to make it even --

**Jerod Santo:** Right. Almost too clever \[unintelligible 00:03:43.11\]

**Paul Orlando:** Yes, make it even more difficult. But that's literally how I got started, just kind of having this spark, and then just cranking out a first quick post about what some of those unintended consequences with the existence of a VoiceAI might be... And then I kind of had this thing.

**Jerod Santo:** Yeah.

**Paul Orlando:** \[00:04:07.26\] So I didn't write on an existing blog of mine, or like a Medium post, or whatever... I had this thing, so it just became something I was kind of returning to. And the first few months I might have written every couple of weeks, whenever something interested me... Again, I was not trying to make this a big part of what I did, but kind of early on, maybe a couple months in, one of the posts that I wrote got to the top page of Hacker News, and that was the first time I had experienced that drug, that feeling... And it kind of encouraged me to keep going.

Long story short, I've written over a hundred of these articles on various unintended consequences topics, and things that have been -- it could be something in history, something in the news... But I'm really trying to educate myself, and along the way I've just discovered a bunch of other people seem to get some value out of it, too.

**Jerod Santo:** It's fascinating, because we work so often in the small. We have a hard time grasping the implications... And this is all new -- like, networked systems is new to all of us, right? I mean, maybe you're going back 50, 70 years, but to many of us, it's like -- especially once social media blew up, the implications of software at scale or systems at scale is something that we're all learning and grasping and realizing maybe years later "Uh-oh... This was actually not a great idea."

I'm curious how your curiosity with this topic, and maybe your expertise -- you write very well; I learn when I'm reading your stuff. It's insightful, it's explanatory... What's your expertise? What's your background? Are you a writer, are you an economist, are you a psychologist? Where are you coming from?

**Paul Orlando:** Sure. So I've worked in tech my whole career; I have been just about always on the business side. I started out early on doing voice-over-IP work... This is a little before Skype was around, so it was about connecting telecom carriers to each other, and routing traffic differently... And that's certainly when I got a great appreciation for how, in that case telecom networks, can lead to these unusual outcomes. We can dive into that maybe later on, if it's a fit... But I had the experience also of starting a startup, and making - you know, not 100%, but maybe 90% of the possible mistakes in doing that... And just really getting interested in how people figure things out, and how things end up being differently than you expect.

In our case, it was also a telecom-related business. What we ended up doing was connecting patients who were going through a serious health situation, connecting them to another patient, and that was part of their recovery process. So you get to talk to another person who has kind of gone through some difficult recovery, and we protect the patient privacy, and we would kind of push out whatever their doctor, or supporter \[unintelligible 00:07:24.27\] wanted afterwards. It could be a survey, it could be "Here's some health goals for you this next week."

But getting to that point was this jumbled -- certainly not systematic process for us, where we had all these different ideas of how people were going to use it, and then were surprised in what ended up emerging, and what people were happy to pay for later on.

\[00:07:52.22\] But I got interested in that process, like how founders figure things out, or often don't figure things out. I was in New York at the time, and I ended up visiting a bunch of startup accelerators, just to mentor, meet people, and kind of talk and (I guess) coach back then... And I realized I wanted to make that a bigger part of what I did.

New York back then - this is like 2011-2012... New York had probably ten startup accelerators, and I didn't think it made sense to try to start the 11th one... So I was looking for a new market to enter. And earlier in my career I had actually worked in Hong Kong, I had worked in China a lot, other parts of Asia... So I did a scouting trip, just to try to suss out, "Okay, maybe Hong Kong, or maybe some other location in Asia might be a good fit for something like a startup accelerator."

I had landed, with a bunch of meetings set up, I met a ton of new people, I got introduced around in Hong Kong, and ultimately determined, "Okay, yes, this market is ripe for something like a startup accelerator." I kept the conversations going when I went back to New York, but I ultimately spun up a pilot program, and then raised a small fund to support an actual startup accelerator, and ended up building the first program in Hong Kong.

From there, I ended up -- I got pulled in to run this unusual startup accelerator that was based in Rome... Now I'm helping this big non-profit build a community health-related accelerator, and day to day I've been at USC (University of Southern California). I teach there, and I also run the university startup incubator program.

So I've kind of been in this early-stage venture space for a little while, and... I don't know, for me there's a lot of overlap with the systems or unintended consequences interests that I have. It's certainly a side-project, but that's kind of my process for how I got here.

**Jerod Santo:** Very cool. Well, let's dive right in, shall we? So the first one that I wanted to talk about... And let's just first say that you write about all sorts of systems, not just software systems. This is something that'd be interesting, I think, to the curious developer mind... But not everything that Paul writes would land on Changelog News. You might find it on Hacker News perhaps, some things... But we hope we find a good cross-section here.

So Goodhart's Law is one that we have discussed on the podcast; I think it was last year with Dave Kerr, I did a show called "Laws for hackers to live by", and Goodhart's Law was one of the laws. That we discussed. And you opened up a post about that that says "Peter Drucker said that if you can't measure it, you can't improve it, but he didn't mention the second-order effect of that statement... What changes after people get used to the measurements?" So this keys into what Goodhart's Law is, which I feel like has kind of been morphed a little bit to be applied to our circumstances... Do you wanna break down Goodhart's Law for us?

**Paul Orlando:** Sure. So the explanation of it that I like, and what I think is the most commonly heard... Actually, it doesn't come from Goodhart himself, it comes from an anthropologist whose name was Marilyn Strathern. So usually, when you hear Goodhart's Law, you hear it as "When a measure becomes a target, it ceases to be a good measure."

**Jerod Santo:** Right. And Goodhart never said that. He says something similar...

**Paul Orlando:** Yeah. He was -- I mean, there's so many variations of this. Everything from going back to universities in the U.K. hundreds of years ago, and how they were being measured when people were trying to, for the first time in history maybe, be quantitative about outcomes... You know, there's economic-focused versions of this...

\[00:11:55.20\] I like this formulation, "When a measure becomes a target, it ceases to be a good measure." I think it's really easily understood. I certainly think there's like a crossover there to - you know, it could be software development, it could just be general business, economic background... I kind of further summarize this maybe, in saying that Goodhart's Law - it has origins in a couple of different places. One is that behavior change that occurs when people start trying to achieve a metric rather than a goal.

**Jerod Santo:** Right.

**Paul Orlando:** In other words, here are the targets that you have. We think these targets are connected to this goal, but really, we're gonna measure you based on these targets.

**Jerod Santo:** Right.

**Paul Orlando:** So it's a little different than trying to achieve a goal. And then the other origin which is related is that we create some projects because we are choosing proxies for goals themselves. I usually think of that one more in a healthcare setting. In other words, we have some ideas for what it means to be healthy... Like, somebody goes to the doctor and they've got some health complaints... The doctor realizes, "Hey, your blood pressure is high compared to what is considered normal." So they put you on blood pressure medication. That itself has some side effects for you, and you end up feeling - not healthier, but we did achieve that proxy of "Okay, well health is determined by a number of different factors. We think a metric that's related to your general health is your blood pressure. We're gonna put you on medication", but it has these other outcomes that are not beneficial for the patient.

**Jerod Santo:** Yeah, so let me repeat back and make sure I'm following you. I think I am. So there's almost these two strata... The first one is by knowing the objective, the objective becomes less useful, because I'm targeting that thing. And then the other one is like the objective/target isn't the actual goal. It's just like the closest thing we can get to the goal. And because there's that - what engineers are calling an impedance mismatch, because it's not a one-for-one, you're not actually optimizing for what you want to be. It's just like, because health is -- how do you measure health, right? You need a heuristic.

So we take these things, we try to get at these proxies, and we optimize for the proxies... Almost a de facto you're not optimizing for the thing that you want to be. You're just getting close, and this can backfire.

**Paul Orlando:** Yeah, that's it. And it reminds me of something you said actually early on, which is we're in the relative early days of dealing with network systems, large systems... And something like Goodhart's Law - if you think in the history of humanity, people were not living in these highly-connected societies. I mean, internationally connected. You'd be highly connected in your local group, which might be pretty isolated from others, relatively speaking. You wouldn't really have something like Goodhart's Law come to place; or it wouldn't be an issue.

**Jerod Santo:** Right.

**Paul Orlando:** First of all, people were not - at least thousands of years ago - using metrics in the way that we think of them.

**Jerod Santo:** Yeah, there's a sophistication involved.

**Paul Orlando:** Sure.

**Jerod Santo:** Yeah.

**Paul Orlando:** And then you also don't have these scale effects. So if you do have a small society that makes bad choices, those outcomes are pretty local, and it doesn't spread globally. So most of the impact in the past was local, and in a highly connected world we kind of have to be a little more careful about some of the big actions we take, because they can lead to these really big unintended effects somewhere else.

**Jerod Santo:** \[00:15:50.06\] Right. So there's a couple of exemplars for this. The common one in software that all developers innately or inherently understand is like if you use lines of code as a measurement for productivity, then you've just failed... Especially if you know that's the target. As soon as it's the target, you're like, "Oh, okay. I get paid per line of code." Every self-respecting developer knows how to optimize for that particular target, and that's not actually a good proxy for productive work. That's an obvious one.

**Paul Orlando:** Right.

**Jerod Santo:** But it gets less and less obvious as you get better proxies, but you're still working in this kind of Uncanny Valley for what you're actually trying to get to. So it's a difficult problem, right?

**Paul Orlando:** It is. It is. Or using bugs fixed as well; if the same person is writing the code, and then being compensated for fixing the bugs... Or if that's a metric... Like, "Oh, I can find a lot more now, if I also create them intentionally." If there's like a bad actor involved.

**Jerod Santo:** Yeah. Well, and game theory comes into this, right? So you give an example in your post about Groupon, with regards to -- I think it was a vanity metric, or a specific metric for a company that was either IPO-ing, or raising around... And here is another situation where the measurement is like how good of an investment is this, or how quality is this company's prospects, or whatever... Which is really hard to measure. So we have lots of different criteria that we look at. And I think in that case it was like -- they made it look like they had great stuff going on in China, but they did it by faking numbers. Do you remember the example there?

**Paul Orlando:** Right... And this came from a conversation that I had... I was in Shanghai for work, and it was shortly before Groupon's IPO. I was talking to this friend who told me "Yeah, they're hiring like crazy in China. They really don't care who it is that they're hiring. They're not looking for people specifically who are great at a telesales kind of a job. They'll overpay... It doesn't matter. The reason is to bump that IPO price another 10%, say." The company just needs to show, "Yeah, we've got --" I don't know what the number was... A thousand, five thousand people in China. In other words, that's kind of like a vanity metric for "Alright, we have a lot of prospects, a lot of promise."

**Jerod Santo:** Like salespeople, right?

**Paul Orlando:** Right. And if the actual goal is bump up the IPO price - it's like, "Oh, okay, that makes total sense."

**Jerod Santo:** \[laughs\] Yeah.

**Paul Orlando:** Not for building a sustainable business. You would hire completely differently, or you would hire more slowly, or you would hire a different background.

**Jerod Santo:** Right.

**Paul Orlando:** But you have somebody reading a prospectus, and all they see is "Well, 5,000 people hired in China. This must be an amazing opportunity. I should invest." But once you dig in... And I'd even say, maybe another theme for me in the writing - you know, I've approached this topic because I did not have a background in systems analysis. I wasn't doing this as an economist, I didn't have that theory... So I was always working to make sure that I understood what I was eventually going to try to write about... So that often meant "Okay, yeah, I'm gonna read all the papers that were cited in some other article that I read", and then sometimes you find "Oh, this person's citing a paper, and it actually is not in support of what they are claiming. It's like the opposite."

**Jerod Santo:** Right.

**Paul Orlando:** So once you dig into it, you find the story is a little different than what's presented. And this is another unintended consequence, just like, say, something like a fast-moving news cycle... People are presented a ton of information; nobody has the time to really do the research, and as a result, the quality of the information that you're presented might be pretty low. It might also be hard for you to know that, unless you're like me, and willing to dive into one of these topics early in the morning...

**Jerod Santo:** \[00:20:16.28\] Right.

**Paul Orlando:** But you can't do that all the time, of course.

**Jerod Santo:** Well, that's why I think we need experts in different niches willing to do kind of the omen's work, and to become the critic or the curator of a particular topic or niche, that then other people can trust... And vet that person, and maybe they become less trustworthy, and so they're no longer the critic... But we need experts watching the news cycle, because it's so fast, it's so lose, and it's misincentivized around clicks and traffic, and all these things that we've learned have huge unintended consequences. The metric of clicks or pageviews for news has caused untold consequences in our society... Because that incentive is not aligned with high-quality, well-reported, thoughtful news and analysis. It's all about speed, it's about sensationalism... It's about things that don't optimize for truth.

**Paul Orlando:** Right. I had written - and I've forgotten the title of this post, but... Yeah, a while back I wrote about that topic, how the changed media business model resulted in a lot more news, more people reading it or viewing it, but more polarized societies, or less accurate information. That idea, if you go back and look at the printed newspapers, so you're at least going back to the '90s there, if you go back and look at the printed newspapers, or even the news that was on like the three major networks back in that era, there were not huge differences in the way the same story would be presented... A little bit, but for there to be a successful business model, any of these news outlets had to more or less go for the mainstream. So they couldn't be too skewed in any one direction, because they couldn't reach that target market. It was mass distribution.

Modern era? You could have a newsletter that's paid, that has - whatever, a thousand paid subscribers, and it provides enough income for that person to keep writing it, and their focus is on some really strange niche that you never even knew existed, or maybe did not exist in the past, because it's kind of been created as the business models have changed.

Yeah, so there's maybe a bit of nostalgia for those days a generation or two ago when it comes to reporting the news... Certainly, business models had a part in that change.

**Break:** \[00:23:08.04\]

**Jerod Santo:** Before we leave Goodhart's Law \[unintelligible 00:25:18.03\] let's hop to the Cobra Effect, because these two things are interrelated. This has to do with incentive structures and the design of incentive structures. Many of us are building these things, or maybe we're living inside of these things - with regards to social media, you mentioned that moment when you hit the Hacker News homepage, and you were incentivized to get back to number one again some day soon, as you felt that dopamine rush of having your words read by many people, and debated, and enjoyed, and maybe not enjoyed... All that comes alongside that, sometimes it's the best of times and the worst of times to get all that attention all at once... But this Cobra Effect - you've written about it a couple of times, and this is really the idea of... You know, sometimes your incentives systems go wildly haywire, sometimes because of Goodhart's Law, or for other reasons, they're just not well designed. Tell us the Cobra Effect, how it got its name... I think it's one of the best examples of how it can go wrong.

**Paul Orlando:** Sure. So the Cobra Effect - and this is also sometimes called "Adversarial Goodhart" or "perverse effects"... In other words, you're trying to improve some problem, and the actions that you take end up making it even worse than it was before. In other words, this requires people; so people are where the adversarial part comes in...

**Jerod Santo:** \[laughs\] Yeah, people are adversarial.

**Paul Orlando:** They can be. Or if you're presenting them with a silly rule, or there's a new regulation, people will find a loophole that ends up harming that goal. The Cobra Effect, and this is another probably -- just the name itself also overlaps with unintended consequences... So the story behind the Cobra Effect is something that, as far as we know, never happened; but the story is during colonial India, so when the British were in India, some British administrator decided that they wanted to reduce or eliminate the number of cobras. Maybe this is in Delhi; I'm not sure where.

So to try to achieve that goal, they put up a bounty, and they say "Okay, I'm gonna pay a bounty if you show up with a cobra skin." And that's gonna get rid of the cobras, right? Then the story, of course, is - well, people discovered "Oh, so I should just raise cobras, and turn them in for the bounty, and raise more cobras, and turn them in..." And then the British realized what's happening, they eliminate the bounty, and everybody releases the cobras, and so you have a worse problem than you had before.

\[00:28:03.06\] So this is the story... It has definitely happened in a couple other cases in history. So after that cobra story, the most famous one that there is history behind is also a colonial situation... So the French in Vietnam, in the late 1800's, I believe... So they discovered that rats were spreading plague, and that they were using the newly-built sewer system in different cities to travel around the city, and get into houses... And also, of course, houses that were occupied by the colonists themselves... So they set up this bounty to pay people to kill rats. And I can't think of a worse job than having to go into a sewer and hunt rats for a bounty. But that's what people were doing.

Then at one point the French said, "You know, enough with the dead rats. I don't wanna collect these things. The tail is enough. Just show up with the tail, and I'll pay the bounty." So then what was discovered was people discovered rats running around with no tails...

**Jerod Santo:** So they weren't killing them, they'd just cut the tails off...

**Paul Orlando:** Yeah, I'm just gonna collect the tail, if that's what you're paying me for, right? Or raising rats, again... Probably a little easier to raise rats than to raise cobras, for the bounty. So when I looked at this -- so I looked into the history of this effect... And the third famous example is with feral pigs in the U.S, outside of a military base. So the first thing that struck me was the three famous examples all involve animals. And I started thinking, "Well, who's making up these rules?" Certainly not somebody who understood anything about these animals' lifecycles; how they naturally reproduce. And I started just diving into -- now I know more about the lifecycle of the cobra than I ever thought I would. Or rats, or pigs... But I came away and I wrote that first article on the Cobra Effect, saying "Okay, the solution is actually wrapped up in the biology of the animal." In other words, if you know what the gestational period is for a cobra, or a rat, or a pig, you can design that incentive program around that.

For example - and I proposed "Here's a way that you might structure the actual cobra, rat or pig example." So if you know it takes however many months to get from the mated cobras, to the eggs, to the hatchlings and on, you then just work around that. So you either have a short-term incentive program. "Hey, we're only paying it this month", or you pay at a rate that it makes no sense for people to actually raise the animals. In other words, "Okay, I've gotta house them, feed them, keep them, deal with the danger of having them around..." You can do something around just that biology. It's tough, but at least you don't get this spiraling out of control effect, of people just breeding more and more of the animals for the reward.

**Jerod Santo:** Yeah.

**Paul Orlando:** So the interesting thing that I've found - and this goes back to that Hacker News post, because this was one of the ones that got attention there... It was interesting to me, because some people had a little difficulty with that. They basically said "No, you don't get it. The whole story is that you cannot really control this, and that's just the way it is." And I agree, there's always gonna be something you didn't think about, but this example that I'm giving, of just work with the biology when you're constructing an animal-related reward system - if you at least do that, you at least avoid that most obvious of bad outcomes.

\[00:32:11.17\] I'm sure you'll get something else, but at least avoid that most obvious one, rather than just throwing up your arms and saying "This is an unsolvable problem." So that's, again, just something that got me thinking, and how do you apply that elsewhere I think is a lot of fun.

**Jerod Santo:** Yeah, you wonder how far you can kick that can down the road, to the point where the can becomes not a big deal; it's fine. Because like you said, there is gonna be something else. It's almost like that old saying, "No good deed goes unpunished." It's like, "No good reward system goes ungamed." Someone's going to game you, and a lot of it is a cat and mouse circumstance, where you're just constantly changing the rules of the game, and then the adversarial people change the way they attack.

I think in those circumstances, once you realize that first reaction, it seems like it was such a poorly thought out plan in the first place. So I think maybe what you're saying is slow down, understand the problem better, perhaps... Like in your case, the gestation phase of the animals phase of the animals, and really understanding cobras before you design and put the system out to the public, before it can be tested, and maybe you'll be able to skip those first two rounds of just obviously bad, and get into the more sinister, and still effective, but maybe less consequential gaming that's gonna happen.

**Paul Orlando:** And the other piece of that is two of the three examples involve a colonial power doing something, and I will say, doing it at scale.

**Jerod Santo:** Yes.

**Paul Orlando:** In other words, "Here's the pronouncement. We have the budget, we're gonna pay this reward", and then things fall apart. Without that scale effect, you would have some little local trial of trying to do a reward system. You discover "Okay, this didn't work out. Let's reconfigure this", and then you would maybe evolve yourself to a better type of an incentive structure. But if you're doing something really top-down - and for all I know, the person who made that decision did not live with any of the outcomes; they were across the world, they were in a different city... They are not necessarily the ones who are gonna suffer if the system does fall apart. But yeah, scale effects are tricky, and they certainly lead to a lot of unintended effects.

**Jerod Santo:** Yeah, so perhaps the takeaway there for those designing these systems is iteration and feature flags, effectively, if we're talking software development teams... Small sample size first; roll it out to yourself and your co-workers and see how it changes your behavior. I'm just thinking of like a software system, and "Here's a new incentive structure inside of our system, that we want to have more of this kind of activity, so we're gonna make this feature." Well, roll it out to a few people and see how it changes their behavior, because... You'll game your own system. I know I've done it. It's just how we are. Any system.

I've become fascinated with TikTok's algorithm. Not so much the app and the content, but the algorithm is fascinating to me. It's almost tactile. I'm not sure if you've used it before, but it's like the fastest-reacting algorithm that I've seen, to where I almost feel like it's tactile. I can see it changing the next thing based on -- I think there's only two factors, according to the TikTok folks. The first one is the duration of the video, like how long you watch before you swipe... And obviously, the longer you go on, it's gonna --

**Paul Orlando:** Right.

**Jerod Santo:** \[00:35:54.00\] And then the other one - I forget what the other one is. There's just two factors. But their algorithm is so responsive that it almost evolves as I use it throughout a session. So people will game -- I'm more interested in what the algorithm is doing than the content, which maybe makes me a bad use case... But the point is, you will game your own system.

And then roll it out to a few other people, and start to scale... So you don't have to just blast it and get that top-down, huge scale effect immediately. Scale it out in phases and iterate before you make a big mistake.

**Paul Orlando:** Yeah, it's so true. And I don't know enough about TikTok to comment on what you're saying, but I have heard people describe it in that way.

**Jerod Santo:** What's weird about it is I'm not sure if it's actually good or bad that it's like that...

**Paul Orlando:** Sure, yeah.

**Jerod Santo:** Because people say it's the best algorithm in terms of keeping you using the application, but it's so obvious... It could almost have a UI. To me at least, and maybe because I'm a developer... But I'm sitting here using it, and it's almost like I know what's gonna happen if I auto-swipe this one; or "Oh, don't watch this video for too long. I don't want more of this content. Quick! Swipe away!"

**Paul Orlando:** But that's also interesting, because it's then you with your realization of what is happening behind the scenes - you're changing your behavior. Like, maybe you would have watched that video to the end.

**Jerod Santo:** Right. But I don't want it to think that I wanna watch it. \[laughs\]

**Paul Orlando:** Exactly.

**Jerod Santo:** Yeah. It's weird.

**Paul Orlando:** So I've been helping different organizations or corporates build innovation programs, or build accelerator type programs... And in the beginning when I'm working with someone, they often want to see, like "Well, I need to see the entire plan. Show me exactly how this unfolds, what happens week to week..." And I always push back on that, just with the realization or the experience that I'm really not sure who I'm going to encounter in your organization. Like, I haven't met that many people yet. I don't know, are they bought into this yet? What are their skillsets so far? How dedicated are they to this new thing?

So I kind of wanna see that a bit first, before I design something fully... And to be honest, I never want to really design the whole thing end to end, because I know I'm gonna change week to week, depending on what's going on, or I'll need to spend more time in one area or another...

Yeah, there's often push-back there, because people want to think "Well, certainly you could design this end-to-end, and it's something that you could write down... It's just about following these however many steps." And just about anything involving people, I think you have to have that flexibility to be able to zoom in, zoom out, slow down, speed up... That's what makes an innovation program more powerful, that's what makes what you're talking about, with TikTok, more powerful... Yeah, you have to be comfortable with that uncertainty. There's strength in that uncertainty. Kind of like -- I did write about this... This is a totally different connection of thought, but Peltzman Effect, about uncertainty in our environment or in driving actually being something that creates more safety.

**Jerod Santo:** Oh. So you just drive slower, because you're less less certain.

**Paul Orlando:** You might drive slower, you might just be more aware when you're driving around... And once you then mandate a lot of these safety measures - it could be roadsigns, it could be...

**Jerod Santo:** Seatbelts...

**Paul Orlando:** Seatbelts... The way you paint lines on the road... As a result, people give up a little bit of their natural --

**Jerod Santo:** Like, their defenses are down, because they feel so safe.

**Paul Orlando:** Sure.

**Jerod Santo:** And in result, they become less safe.

**Paul Orlando:** Yeah.

**Jerod Santo:** But if you make it less safe, their defenses are up, and so as a result, they might be more safe. That is interesting. I'd never considered that before.

**Paul Orlando:** And I'm not sure if this was him or me, but... It must have been him; I don't think I would have thought of this, but...

**Jerod Santo:** \[00:40:11.28\] \[laughs\]

**Paul Orlando:** He was basically looking -- or somebody was looking at what would happen when a country or a city would change the side of the road that people drove on. So this happened famously in Sweden in the '60s, and Iceland... A number of different places went from driving on one side of the road to the other. So you would just think, "That's gotta be like complete chaos. Everybody is doing a mirror image of what they used to do..." And then the actual natural experiment that unfolded was - well, the place became safer for a while, because everybody is so careful about driving around. "Well, I've gotta make sure that I turn in a different way now, and I'm watching for traffic from a different direction."

There was a traffic engineer - Monderman I think was his name - who was designing road systems where there would be no signs at all. So the only inputs are --

**Jerod Santo:** Pure chaos. \[laughs\]

**Paul Orlando:** Well, but it actually was pretty safe. So in other words -- and I think even maybe getting rid of a curb, or something... So pedestrians who want to cross the street making eye contact with the driver, the driver seeing them, slowing down, and then they cross. So it seems like this would just be total chaos, and actually \[unintelligible 00:41:39.05\] pretty effective.

**Jerod Santo:** That reminds me of a scene from the Mandalorian where they're commenting on the surprising lack of guardrails on walkways in Star Wars movies \[unintelligible 00:41:50.29\] It's so hazardous. You'd think that some safety council would be like "Let's put a handrail in." And I can't remember which episode it is, but they send a guy out to hit a thing along this chasm, and he's like "No guardrails? Come on, I'm not going out there..." And it's kind of like, "Well, actually, you're more safe, because you're really paying attention, and every step is crucial, knowing that this is dangerous."

**Paul Orlando:** That's it, yeah.

**Break:** \[00:42:22.05\]

**Jerod Santo:** So Garmin, the GPS maker, had an unintended consequence recently... Some downtime/outage... Do you wanna tell that story, and we'll get into some of these problems we have around dependencies?

**Paul Orlando:** Sure. So this was one that, as I remember, I saw the news and I just wrote the post up in no time, right away. The story -- so Garmin, location-based services provider, used by a lot of small plane pilots...

**Jerod Santo:** They'll sell physical GPS devices...

**Paul Orlando:** Exactly. Other people who are out hiking, camping... So they went offline for a while, and the story was a group with just a great name, Evil Corp, based in Russia, I believe... Which - this is their business, in the ransomware business, which can be good money, I guess...

**Jerod Santo:** Yeah.

**Paul Orlando:** So they had their WastedLocker ransomware, which has also given other companies some problems... But I believe they encrypted - and I'm not sure now, in thinking back... They encrypted some part of Garmin's service, so it's not usable. They basically said "It's easy. You pay ten million dollars and we give you the keys."

Garmin is a multi-billion-dollar business, so you'd think the easy thing is just pay the ten million dollars. That's the fastest solution, and probably the cheapest solution... And they kind of went back and forth for a while, and didn't... And maybe actually in the end did pay the ransom. U.S.-based company, they're not supposed to pay something like that. There's, I think, ways of skirting around, so you're not breaking the letter of the law perhaps... But there's this trade-off that we have if we become dependent on using a specific product, a specific piece of technology.

So if the only way that you're going to be able to navigate is to use this one device, and then it's offline, you have a real problem. So I wrote this piece not to try to convince everybody to be able to navigate by the stars again, but just to draw attention to things like this. We certainly go through most of our lives expecting that there is 100% uptime, or we're not gonna have to deal with some weird outage. Outages of this type -- it's more the norm, I'd say, than once in a lifetime.

So I felt like this was something that kind of connected to, if I remember right, maybe a couple of other examples that I had written about. It was like the Twitter hack that happened at around the same time, I believe. And I think this was more of a social engineering hack that somebody had figured out, but basically they gained access to -- and I believe it was only verified accounts. So all of a sudden, one day you saw Elon Musk, or Bill Gates, or Kanye West --

**Jerod Santo:** Oh, yeah, I remember that.

**Paul Orlando:** ...tweeting about "Hey, I wanna give back to my community. So if you send me --"

**Jerod Santo:** It was a Bitcoin thing, wasn't it?

**Paul Orlando:** Yeah. "You send me a certain amount of Bitcoin, I'll send double the amount back."

**Jerod Santo:** Right.

**Paul Orlando:** So going back to algorithms - Twitter's algorithm, even though people realized pretty early on "Okay, this is a scam", the algorithm sees "Wow, everybody is talking about, and commenting, and replying to--"

**Jerod Santo:** Engagements through the roof...

**Paul Orlando:** \[00:48:10.10\] Yeah, engagement is through the roof, so we wanna boost these posts. And of course, it was doing like the opposite of what they wanted. So in this case, it was a much more modest financial reward for whoever the scammer was. I think it was only around $100,000 in Bitcoin that they ended up getting away with... But you have scams that can scale. So you can scale through a social network, like Twitter, or you have something like the Garmin ransomware situation, where I'm dependent upon this one piece of tech, and now I cannot do the thing that I need to do at this moment. Or now navigating for me is impossible, or it's really dangerous. So yeah, I like just bringing attention to these things.

For me, when I wrote them, I think I was calling back to some of the writing I did about autonomous vehicles, in both of these examples... If you don't mind, I'll loop in the thought on autonomous vehicles there.

**Jerod Santo:** Please do. Yeah, go ahead.

**Paul Orlando:** I've been writing on this topic even before I had this Unintended Consequences blog... But I remember a few years ago I saw a VC (I believe) tweet that he was using support for autonomous vehicles as kind of an intelligence test. In other words, if you do not support them, it's like, \[unintelligible 00:49:43.12\] because you don't understand how things can improve", and whatever.

So I really started wondering about "Well, is that a good test?" first of all. Because I was failing the test. And it's not that I'm against AVs. I like the concept; I like the theory a lot. And I do not wanna be a proponent of 3,000 people a month in the U.S. alone dying in traffic accidents. I don't wanna say "No, let's maintain the status quo."

**Jerod Santo:** Right.

**Paul Orlando:** But when I started to think through what ultimately can happen when you do roll out large-scale, higher level, like level 4, level 5 autonomous vehicles - I started realizing that while you might have, say, an average day where the amount of fatalities are much lower than today, you also have the risk of certain days of the year (and you have no idea when) when there's like a huge burst up.

**Jerod Santo:** Why is that?

**Paul Orlando:** So that's because, similar to the Garmin or Twitter examples, you have an effect that can scale. Whether it is a hack, whether it is a bug...

**Jerod Santo:** I see. So some hack disables the brakes on all these things...

**Paul Orlando:** Exactly.

**Jerod Santo:** ...and nobody can brake for that three-minute, and you have millions of them on the road. Bam.

**Paul Orlando:** Right.

**Jerod Santo:** Okay.

**Paul Orlando:** So you have to at least acknowledge there's this risk there. And again, I'm not anti-technology, obviously. I'm not saying "We can never create a better world." You certainly can. But if this system that you're putting in place does not -- or if any of the people who are talking about building these systems, they're not really addressing... Like, what do you do in these situations?

And I started thinking - okay, so if I wanted to reverse things, what if I wanted to take only human-driven cars, and say "Okay, how do I make human driving much more dangerous than it is today?" I can't really do it. What would I have to do? I'd have to encourage weird legislation to allow five-year-olds to drive. I'd have to encourage people drink and then drive. I'd have to remove stoplights, and Stop signs, and increase the speed limit, all these things.

**Jerod Santo:** Yeah.

**Paul Orlando:** \[00:52:12.02\] And ultimately - again, kind of going back to the Peltzman Effect, people who are in the cars, if they are really seeking danger, they're gonna remove themselves from the driving population, eventually. They'll be able to affect a handful of cars; they won't be able to effect a thousand cars, or a million cars. So you can't really scale up danger with individual humans. You can scale it up when you have more of a top-down system, or where you have fleets of cars that are communicating with each other, and doing all the things that AVs are supposed to be able to do, like ride really close to each other at higher speeds, and things like that.

**Jerod Santo:** Right.

**Paul Orlando:** You've actually had people on your podcast that have talked about YAGNI before.

**Jerod Santo:** Yup.

**Paul Orlando:** This is where it's like, "No, you really are actually gonna need this weird edge case. You are gonna need to think through this." But even so, what you can get is -- so I'm looking out at the weather here, outside of L.A, and unusually, it's raining... I might say, "I wanna engineer a world where it's just sunny, 365 days of the year", rather than it rains unpredictably, or there's a storm. But if an outcome of that is once in a while, you have no idea when, you get the worst storm that's ever existed in the history of the world, I have to pause for a moment and say "We'd better be careful about rolling this new system out, because this is gonna change some things."

**Jerod Santo:** So what you're saying is when the outliers, those black swan events I think they call them, whether in nature, or now we're talking about in software systems, like an autonomous fleet - when the consequences of those are so drastic that maybe it's like a humanity end game, or at least for everybody who happens to be out and about that day, then it's worth solving for those, not even edge cases or corner cases; they're like black swan cases. Or at least thinking about those things and weighing that into your decision-making process before you go all in on something that works 99.9% of the time, but the time that it fails, everybody's dead.

**Paul Orlando:** It fails big, yeah. You know, I've gone to cybersecurity conferences. I've seen the Car Hacking Village. People figuring out how to hack cars just currently, where there is limited damage you could do. So I think it's something that you should at least be thinking about.

The other effect, even if that type of an outcome is solved - I don't know that it is solvable, but say that it is... You have the other outcome - this is more like a second-order effect of how behavior changes. You know, I hear people say "Oh, with AVs we'll be able to streamline traffic to the point where you can get from the East side of L.A. to the West side of L.A. in 15 minutes", something unheard of, because traffic is terrible. The cars will be able to move much more quickly, they'll ride really close to each other... But the reality there is, of course, human behavior changes. If I can get to the West side of L.A, I'll go more often, so I'll have more people taking cars. The traffic will go back up.

This is actually a book that I didn't realize was popular with developers, because I read it years ago from more of like an urban planning perspective, but "A Pattern Language" by Christopher Alexander...

**Jerod Santo:** I don't know that one.

**Paul Orlando:** \[00:55:57.06\] ...where he talks about how do you design a city or even like a house around human behaviors. He says "If you optimize around cars, you're gonna get more cars." So with the AV discussion, you might say "You know, should we be designing for cars to be able to get around really quickly or safely? Or should we be designing places so that people can enjoy them the most, and get around?" And maybe actually doing things at a human scale, or at like a walking scale is actually good for parts of different neighborhoods.

**Jerod Santo:** Right.

**Paul Orlando:** Yeah, so it made me think a lot about this topic. Certainly, billions have gone into AV research. It's gonna be interesting to see how things end up shaking out...

**Jerod Santo:** Yeah. Well, first we've gotta get to level four and level five before we're gonna even see...

**Paul Orlando:** Right.

**Jerod Santo:** ...and we're struggling to get there. I think every year it's gonna be here next year...

**Paul Orlando:** \[laughs\] Yeah.

**Jerod Santo:** But it's getting closer. We're starting to see some consequences. Specifically - because Tesla I think has the most out there in the wild... The Tesla autopilot, and there's been some casualties, and I think a death or two... And we're seeing some backlash to that. I think none of this is at scale yet though, right? It's all at like one, two. I think Tesla has the most scale out there. Maybe not in a single locality, but in many localities.

**Paul Orlando:** And there's a lot of other things. And again, I'm saying I am not against progress certainly, but there's other things that I do benefit from currently, when it comes to some of the same autonomous vehicle tech. Depending on if you're driving a car with this or not, but you get that warning if you're gonna change lanes and there is a vehicle and maybe you can't see it and it's right behind you...

**Jerod Santo:** It has better eyes than you do, yeah.

**Paul Orlando:** Yeah. So there's certainly a good chimera, human-computer meld that you can make... But yeah, we should at least be thinking about what happens if you completely flip the switch over and every car is AV.

**Jerod Santo:** Yeah, exactly. Well, there's some of them that have -- and I would think it's Waymo, but I could be wrong about this. There's no steering wheel. It's like, "Well, what are we gonna do in the case where we need to fall back to the human?" Well, there's no steering wheel, so... \[laughter\] They'd better know how to drive via some sort of digital interface, or something. That's definitely a step in that direction.

I do agree that, at this time at least, when it comes to computer systems, I think humans with super-powers is kind of like the best of the worlds. Like, let's equip humans to take care of the tedious parts, they don't have to do that work, to provide the super-powers like "Hey, did you know you can now see behind you?" For instance, I was actually at a navy museum recently; we were watching some of the technology inside of these fighter jets... And the pilots can actually see 360, and they can also see underneath them and above them completely, as if the jet doesn't exist. They're sitting in there, driving the jet, and it has enough cameras and enough smarts to remove itself, as if it's completely invisible. They can look down into the ocean directly underneath them. Humans can't do that, but with software that gives that pilot really super-powers to see everything around them. Pretty cool stuff.

But yeah, removing the human completely I think is kind of closing the loop, or taking that next step. And I'm also pro-progress, but I also am like -- I think what you're saying is like let's slow down and consider not just what's immediately gonna happen, but what's gonna happen with more units, with more time, at scale, and whether or not we wanna guard against certain things now.

**Paul Orlando:** Right.

**Break:** \[00:59:58.17\]

**Jerod Santo:** So the Garmin one is interesting because it's -- there's two aspects that interest me, both from like the consumer standpoint of like individual dependence... Like if you depend on a Garmin GPS, whether it's mission-critical, or you're out riding your mountain bike, and it was that time period when Garmin was down - your life is immediately affected. So there's that aspect.

Then there's also software dependence, where Garmin is completely dependent upon whether it's a third-party package, or however they got that ransomware inside of their system. There's like a supply chain problem perhaps on their side. And this is something that we think about a lot as developers, is how much third-party risk can I take on in my supply chain, in other people's software, in being dependent upon maybe an integration with a company that I trust, but maybe their system has a problem. We have this tangled web - I guess metaphorically, in both cases, but a web of both dependencies and network systems, where we have to decide how much am I willing to risk with other people's code, with other people's systems, versus writing it ourselves? So there's both aspects of that - the Garmin side, and then the person using the Garmin. And I think when it comes to the individuals, I don't think we've ever been more dependent as a species on anything than we are on these smartphones today. It's memes, people walking along the street, staring at their phone, get hit by a car or something. We are attached at the hip. It's like an extension of our brains... So when there is problems with our phones, whether they're just offline, or broken, or lost, or stolen, or they're hacked... I mean, your life is in there. So there's a lot of dependence upon a smartphone.

And then from the Garmin side, deciding how much we are willing to trust third-party systems in order to move faster and accomplish things that we may not be able to accomplish on our own - I think there's definitely unintended consequences of running other people's code. It's really a trade-off and a difficult decision, in many cases. "What do I do?" I don't know if you have any insights on that side of things, but...

**Paul Orlando:** Well, one of the other bigger hacks from around the same time as the Garmin and Twitter stories was SolarWinds; I believe it was a supply chain insertion.

**Jerod Santo:** Yeah, it was. Yeah.

**Paul Orlando:** So you certainly had those trade-offs... Whereas in the past, maybe that trade-off would have been localized to just this one un-networked company. Now it becomes a much bigger deal, and there is dependency across many different companies on the same software.

I kind of mentioned this in the beginning, but earlier in my career I had worked in telecom, and I was always fascinated in -- like, if I had been a little older maybe, you know, pre-internet, when the hacking was primarily done on telecom networks... Hearing people talk about those stories, hacking dial tone on the old landlines, and getting free calls in doing that... Even so, in that case you have -- you do have some great examples of people calling the White House, getting unlimited talk time...

\[01:04:46.24\] But yeah, it does seem, with a more interconnected world, the network effects, the scale effects are just getting bigger. And part of that leads me to say, "Okay, we should just be more cognizant of how we design systems", and partly it might also be because I know even if I do everything I can, that somebody else is not gonna have the same care, or they're gonna screw up something...

**Jerod Santo:** Right.

**Paul Orlando:** ...or they don't have an incentive to be as careful, or there's a mistake... There's no end to --

**Jerod Santo:** Meer incompetence. It could be just mere incompetence.

**Paul Orlando:** Sure. You should also isolate at least some really crucial parts from being at risk to something like that.

**Jerod Santo:** Yeah. Well, the most secure computer that there is is an air-gapped computer. It's one that is disconnected from everything else, besides power. And the only way to hack that computer is to sit at it. But also the problem is that's not a very useful computer, you know?

**Paul Orlando:** That's right.

**Jerod Santo:** That's the rub... It's like, "Yeah, it's secure, but it's also not all that useful." So we have to live our lives somewhere in between. But when it comes to your mission-critical, your family jewels, your pearls, maybe your Bitcoin private passphrase, maybe air-gapped is the way to go. I don't know.

Well, Paul, the blog is Unintended Consequences... Of course, all the links to all the articles, as well as the sign-up sheet for everything to get Paul's future writings will be in our show notes. You'll find them there. Anything else that you're up to, that you wanna talk about before we call it a show?

**Paul Orlando:** Yeah, I'll mention two other things that are related to this topic of systems. I wrote a short book about unit economics. So this is understanding customer lifetime value, customer acquisition cost... How businesses work, basically. It's called Growth Units. This is something that I did during the early part of the pandemic, because I was teaching this topic, and I've discovered that people have actually gotten value from the book.

**Jerod Santo:** Cool.

**Paul Orlando:** So if you wanna think about these systems topics, but more in an internal company setting, Growth Units is something you might enjoy. And then I'll just also put a call-out to whoever is listening... The next thing I'm writing about is also a longer piece, probably a book-length piece on market timing, or what's called the "Why now?" question with startups. In other words, how timing impacts your eventual success; like, why this is a good time to build this specific company.

I'm happy to speak to anybody who is kind of going through that thought process now, either in presenting what you're doing to a potential, like why now is the right time to build this business, or if you're building a specific product within an existing organization, why the timing is good for your development of that next specific thing... Otherwise, this has been a lot of fun. I really appreciate what you do, of course, and thanks for having me on.

**Jerod Santo:** You bet, yeah. Thanks for coming on. I would love to have you back sometime, especially as you do more writing and more unintended consequences happen out there in the world for us to discuss, analyze, and hopefully learn from. Thanks again, Paul. This has been a lot of fun.

**Paul Orlando:** Thanks, Jerod.
