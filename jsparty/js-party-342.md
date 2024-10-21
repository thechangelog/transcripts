**Jerod Santo:** Hello, fellow party animals. I'm Jerod, your internet friend, and I am joined today by Kball. What's up, man?

**Kevin Ball:** Hey, hey. Getting ready to go, drinking my coffee... Let's have a party.

**Jerod Santo:** Let's do it. Let's do it. Today we are discussing the news. Nick is not here. Nick is off at Squiggles. He is squiggling at SquiggleConf. He's co-emceeing that event, so shout-out to Nick and our friends at SquiggleConf. Hopefully, everyone's having a good time. First time conference, you know? You never know. You never know.

**Kevin Ball:** I feel like squiggle just as a word is very up Nick Nisi's alley.

**Jerod Santo:** It really is kind of right on brand.

**Kevin Ball:** It speaks to me of his vibe.

**Jerod Santo:** Absolutely. Yeah. Well, speaking of events - it's been a while since we've done this, but today we're going to do a Holla.

**Jingle**: \[00:05:15.17\]

**Jerod Santo:** And today we are holla-ing at React Summit US. Now, Nick is at Squiggles, but he's also going to be at React Summit US, and Kball, it sounds like you're going to be there as well.

**Kevin Ball:** I will. I'm excited. It'll be a good time.

**Jerod Santo:** Pretty cool. This is the biggest React conference in the United States, taking place in New York, on November 19th.

Now, this is a back-to-back conference by the same organizers that do JS Nation US, which I believe is happening November 18th. So there's back-to-back conferences... We'll probably be at both. We'll definitely be at React Summit US on the 19th. We will have a booth, Kball will be there, Nick will be there... All of your standard JS luminaries. Addy Osmani, Theo Brown, Michael Chan, Kent C. Dodds, Aurora Scharff. The list goes on. Kelly Vaughn... I could just keep reading these cool names, but I'll stop there. Join us.

**Kevin Ball:** Yeah, I was at one of their Git Nations back-to-back conference things in Amsterdam this summer, and it was just a blast. It was great. So yeah, this will be fun.

**Jerod Santo:** Yeah. It sounds awesome. Now, I'm going to miss it, unfortunately. However, if you are in the Raleigh-Durham area at the end of October, I will be at All Things Open 2024. So if you're going to go to that, come say hi to me. I'll have JS Party stickers. But if you are going to be at React Summit, come say hi to Kball and Nick.

Alright, this has been Holla. We'll put links in the show notes. We have a discount code. I don't have it in hand just yet, but we'll have one of those... And so if you're joining us or thinking about it and you want a discount, holla at us if it's not in the show notes. It should be in there. But if it's not, holla at your boy.

**Jingle:** \[00:07:13.25\]

*In a matter of seconds, we'll beam your information to one of our skilled field technicians.*

*Hey, hey, hey. Can I holla at you? Can I holla at you? Can I holla, holla, holla, holla, holla...?*

**Jerod Santo:** Alright. Today we are discussing what's going on in the web dev community... And lots. The answer is lots. We will probably get to the WordPress mess, but we're going to start with better news. Perhaps, I don't know, this seems like potentially awesome... Evan You - have you heard of him? The creator of Vue.js, the creator of Vite, and the open source maintainer who's built communities around these tools, with so many talented folks getting involved, has decided to start a company. So just a few days ago, September 30th, on VoidZero.dev, Evan You posted his announcement of VoidZero, "Next generation tool chain for JavaScript." The TL;DR is this.

Evan says "I have founded VoidZero Inc, a company dedicated to building an open source, high-performance, and unified development tool chain for the JavaScript ecosystem. We have raised $4.6 million in seed funding, led by Excel."

So that's the news. Kball, your initial reaction to this news?

**Kevin Ball:** So I have very mixed feelings about this. I mean, I love Evan You. I think he's done incredible work for the JavaScript world and community, and he clearly knows how to build really, really good tests. I don't feel like we have a great track record for building tooling infrastructure, open source tooling infrastructure in VC-backed companies. I feel like that sets up the incentives in a really dangerous and broken way.

We don't see much out of the last company that tried to do this. What was it, RoamJS? What are they doing? Well, they got detoured on trying to make money, and stopped making really cool tools. Stopped having the impact that they potentially could have had.

And so, I don't know. Evan has a track record, and has shown he knows how to build great things, so definitely, I will give it the try... But I am worried about what that means for these tools, now that they're in the VC-funded ecosystem.

And it's interesting too, because I feel like Evan was one of the examples I had seen for essentially crowd-backed development that actually seemed to work. He was getting enough money from Patreon and these other things to really replace a developer's salary, or even more. I think he was even able to hire some folks on the amount of money he was bringing in, and go. And so to see him come into the VC rocket ship world - it is a message that maybe that's not as sustainable as it looked for him.

**Jerod Santo:** I agree. That was my first thought, was "Isn't Evan Yu already doing well financially?" I went and looked, just to remind myself... Because Vue is highly sponsored. And if you look at him personally on GitHub Sponsors, he has 230 current sponsors. Now, he has 954 past sponsors, so maybe this is indicative of people kind of come around, sponsor a little while, and then move on, and so you have this churn that perhaps makes you wonder, as a maintainer, if this is going to continue. But then if you go over to the Vue.js Open Collective, they are receiving over there an annual - well, this is estimated annual budget. I'm not sure if that's their expenses. No, I think this is how much they're getting in... Of almost $190,000 USD. And so you combine those two things, and you think, does he need to go raise $4.6 million? I don't know, he must have thought that he did, because that's what he went ahead and did.

But yeah, I was with you. I thought he has been a shining example of "You can make this open source maintainer thing work financially." Now, it's not everybody that can do that, but some people can. And he, I thought, had. And maybe he has, but maybe he's bored. Maybe he wants to just try something different.

**Kevin Ball:** Which - all power to him, right? Try something different. I don't know if he's done the startup founder thing before. And it's exciting, and there's lots of stuff, and it's great to get a chunk of money and be able to hire people to work on something. But it comes with a lot of gotchas as well. And we've seen open source startup after open source startup get derailed by those gotchas.

**Jerod Santo:** \[00:11:54.19\] Yeah, 100%. I think this desire to build this one tool chain to rule them all is something that I'm for, but I'm also quite skeptical of, because of the history of the JavaScript tooling community. There's never been a pull ahead and then a stay ahead tool chain. There's always been replacements. And Evan wants to build one. Now, of course he's built stuff like this before... But he says "Imagine a tool chain that is unified, high-performance, composable, and runtime-agnostic." He says "Such a tool chain will not only enhance Vite, but also drive significant improvements throughout the JavaScript ecosystem. It's an ambitious vision, and she even requires a full-time dedicated team, something that wasn't possible under the independent sustainability model of my past projects. This is why VoidZero was founded."

So given a little bit more there, I don't connect those dots necessarily, because I don't see anything in here like "Imagine a tool chain that was revenue-generating." He doesn't put that in his bullet points. But that's going to have to be one of the factors of this thing, right?

**Kevin Ball:** I mean, if you're doing the venture funding route, you are signing yourself up for "I've got to generate a lot of revenue and a lot of growth." And it's interesting, because if you could make a for-profit company around an open source project and make your profits on various things, like consulting around it, and things like that - those are not going to get you the VC route of money, because consulting doesn't scale the way that VC businesses need to scale. So you need to build some sort of product. And I think the "traditional" way to do this with frontend open source stuff has been you do it by offering web services of some sort, that integrate deeply with your thing. And we see Deno trying to do this. We've seen Gatsby do this. We've seen all these different folks doing this. Deno's not even necessarily web services, because it's a backend thing, but that's been what happens in the JavaScript world... And it splits your focus. And it's very hard to make both of those things work, and make your open source product really, really good, and your non-open source product scalable the way the VC wants it to be.

**Jerod Santo:** Yeah, 100%. Now, Evan has convinced a lot of smart people and successful people that this is a good idea. I did a little research on Excel, because I was like "Well, that's a common name that you hear." This VC firm goes back to the '80s. I mean, it's one of the longest-standing VC firms in the Valley, and they made a lot of smart investments. Just recent ones that maybe you've heard of - they've recently invested in Laravel, which also took funding for the first time just a few months back. Other ones that would be recognizable to our listeners: 1Password... Astro, which is really interesting, because it's the next gen Python tooling... That's another one that's unproven. But I was going to make a list of some of their investments and there's just too many of them. So they're very big.

But in addition to them, he's also brought in a seed round from founders of Supabase, Sentry, Netlify, Nuxt Labs, Prisma, Resend... So these are a lot of the players that we see in the web services, or hosting services startup land. They all seem to think this is a good idea, at least enough to put their money into.

**Kevin Ball:** Well, at the seed stage, investors are investing in the person. And honestly, if I look out at the developer landscape, there aren't very many developers that I would be more willing to invest in than Evan You. He has an incredible track record, he's super-sharp, he's super-productive... If he wants to make a venture-funded company work, he has as good of odds as anyone. So that's great and fine. And to get to that venture-scale business, I'm not sure that it looks like a unified JavaScript tool chain.

\[00:16:03.26\] And it's common for VC companies to meander, and explore, and pivot, and maybe they start with that and they move to something else to get to that scalable thing... Once again, if Evan wants to go do a startup - great. He's amazing. He's going to do a good job as best he can, and I would invest in him. But is that the best thing for a JavaScript tool chain and for the JavaScript tooling ecosystem? I have a lot of reservations about that.

**Jerod Santo:** So one question you may be thinking, which I was also thinking, is "Well, what does this mean to the existing things?" Vue is under development. Vite is underdevelopment. And that's not their only tool, right? Vitest... There's all kinds of subcomponents of these things that they've also open-sourced... And so what's going to happen to these things? And he answers that in the FAQ. "What's the relationship between the open-source projects and VoidZero?" That's always where the messy part is, is like "Where does the open source permissively-licensed stuff end and then the company begin?" And we've seen people experimenting with drawing these lines. I'm not sure if you heard my conversation with Ryan Dahl a couple weeks back about Deno 2, but Deno was very experimental with their KV offering, which was built right into the Deno runtime, with a KV global right there... And it's kind of this weird place of like -- and I asked him about it. Now, it does have a very open source non-Deno Inc or Deno Land offering, which is like - it's SQLite by default. But then you can obviously pay, and have them run their distributed version.

And Ryan's flat out said, "This is an experiment. We're trying it out." And he came out, and -- I wasn't even pressing, and he said "I want to be very clear, this is not formalized in Deno 2." Deno KV is not being formalized in Deno 2. So he's kind of saying "Yeah, we're moving away from that thing." So I thought that was interesting.

But this is the hard part, is like "Well, where do we make money, and where do we make open source, and how do we make those things jive, and not conflict?" And so Evan says "Vite and Vitest's team-based governance will remain the same as before." Both core teams include members employed by multiple different organizations, like VoidZero, StackBlitz, Nuxt Labs, and Astro. VoidZero Inc. employs and sponsors multiple core contributors to both Vite and Vitest. VoidZero Inc. holds the copyrights, funds the development, and controls the direction of both OXC and Rolldown. And so these are some of those subcomponents I was referencing earlier. So this will be a challenge, I think, is like working all that out without cutting the legs out from under these other projects.

**Kevin Ball:** Yeah. I've also seen, honestly - this was more in the zero interest rate days, but there were VCs throwing money at tooling companies just because having more funding for tooling would benefit the rest of their portfolio.

**Jerod Santo:** Oh, yeah.

**Kevin Ball:** And I'd be surprised to see that right now, in a much more stringent funding environment... But that's another thing here, of people just saying "You know what? We have a bunch of portfolio companies that use these tools. Let's throw money at Evan and see if he makes it even better for them."

**Jerod Santo:** Right.

**Kevin Ball:** But they could do that through sponsorships, too.

**Jerod Santo:** Yeah, they could just throw money in sponsors, and then just get their name on a website.

**Kevin Ball:** Yeah. I mean, I think it probably comes from him wanting to do something that's a little bit more accelerated. But going back to the justification for funding - once he's asking... I don't know, if Evan came and asked me for money to build something cool, and I had money, especially if I'm a VC, I have other people's money to throw at it... Sure.

**Jerod Santo:** Now, you may also be wondering -- let's do one more FAQ, because I think he did a good job of answering a lot of my questions. If I was going to talk to him about it afterwards, I would ask these questions. So I think -- again, very smart guy; great communicator, as is obvious here. And he answers this one: "Why will this be different from previous attempts to create a unified JavaScript tool chain?" And he says this: "The biggest challenge of a unified tool chain is the zero to one problem. It needs to gain critical mass for exponential adoption to justify continued development, but it's hard to cross the chasm before it actually fulfills the vision. VoidZero does not have this problem, because Vite is already the fastest-growing tool chain in the JavaScript ecosystem." Do you buy that?

**Kevin Ball:** \[00:20:35.03\] I mean, I buy that Vite is the fastest-growing tool chain, and I buy that... Adoption is not his problem. He's built amazing tools, that people are adopting. My reservations are not around whether or not he's going to be able to be successful building something cool. It's more around as he gets down 12 months from now, 18 months from now, when the funding from that seed funding is starting to wind down and he's having to look at "How do I either make this thing profitable or raise more money?", what does that do to the focus? Where does that take them?

Again, Evan has built amazing tools, that have made almost everyone in the JavaScript world's lives better. He has also done one of the better jobs I've seen in terms of starting something as a benevolent dictator, and spreading it into a team-driven project. Vue governance is phenomenal. I haven't been as close to what's going on in Vite, but I imagine it's the same. It's gone from like one dude, to "Hey, this is a community project that is well-run by the community, that still has this brilliant guy contributing a lot to it."

So he's going to do something really cool by taking VC funding. I think that dramatically ups the likelihood that what he does that is really cool starts shifting over into some sort of paid service, and the open source tool chain suffers for it.

**Jerod Santo:** What about this approach - similar ambition. Maybe he sets a number like 3 million. I'm not sure if he set out and said "I need 4.6." I mean, it doesn't sound like the kind of number you would ask for. Or maybe he started with five and ended up with 4.6. Maybe he started with two and he got so much interest that it ended up with 4.6. But he's got this big vision, "I want to do a thing that's going to require this many developers, for this long, before we think it's actually going to hit pay dirt. Why can't I crowdfund from my already massive list of sponsors, and audience, and people I've been helping out for free for all this time? Why can't I create a giant crowdfunding campaign for VoidZero, the one JS tool chain to rule them all? We want to build this, it's going to take X. We need Y. Donate here", maybe early access, whatever. You can do all kinds of perks. And not have that capital requirement at the end of it all. Would that be a good idea?

**Kevin Ball:** Maybe. I mean, it's a different type of thing that you're signing up for.

**Jerod Santo:** Less strings.

**Kevin Ball:** So I don't know Evan...

**Jerod Santo:** Neither do I. I mean, I've talked to him a couple of times, but I don't know him.

**Kevin Ball:** ...but I would not be shocked if there's an ambition under this, of like "Hey, I want to shoot my shot and try to build a big company." That is a thing to try. I don't think he's ever been in an early-stage startup. I remember his background, he was like at Google, and then he was doing stuff outside, or whatever. Co-founding a startup, or any business really, but particularly a venture style startup, is one of those things that it seems very sexy from the outside. And when things are going well, it feels amazing. And I will say for me, the four years I spent as a startup co-founder were probably the hardest career-wise I've ever had in my life... And they're very, very challenging in a lot of dimensions... But they're also a great opportunity to learn a whole bunch of stuff, and not necessarily in the tech space. Like, learn about business, learn about management, learn about all these other things.

\[00:24:06.11\] So I don't know, I think not having done that, if you were looking at that - hey, maybe that seems like a cool chance. And if you look at some of his angel investors, these are people he already knows, because he is so prominent in the community... He may have just had to have some conversations with people, saying "Yeah, I'm going to do this", and a lot of people said "Yes, I'll fund you if you do it", and then it falls in line. Whereas a big crowdfunding campaign - that's a chunk of work.

**Jerod Santo:** Yeah, fair point. And that's why I started off with this - like, maybe he's bored, and maybe he wants to do something different, and that's completely his prerogative. I'm obviously rooting for him. I could see where, even if you're successful he has been, and financially sound as it seems he is just looking at his public donations... He's still seeing a lot of people around him, probably friends, certainly colleagues, who are just striking it big by taking a big shot, and then winning. And I could see how maybe eventually you'd be like "You know what? I want to take my shot and see if I can win big, too." Just for the challenge, maybe.

**Kevin Ball:** And he might.

**Jerod Santo:** Oh, yeah.

**Kevin Ball:** Once again, he is freaking brilliant. And he has built so many things. And I think if you're going to look at a horse to bet on, he's a great horse to bet on. Just whether or not that's great for the JavaScript tooling community is a completely different question.

**Break**: \[00:25:28.28\]

**Jerod Santo:** Speaking about another uber-successful person... Matt Mullenweg. Now, for many years the poster child of merging a successful open source project and a very highly successful business, offering hosting around that thing, while maintaining the integrity of his open source values, investing in cool stuff... And just in the last couple of weeks has really gone off on what I'll just call a bender, as he's just very angry at WP Engine. I'm sure our listeners know what's going on here. People even outside of our immediate industry know this story, because WordPress drives how much of the internet? 50%? Something like this. And now he's gone scorched earth on WP Engine, due to trademark infringement and lack of open source contribution. There's lots of reasons; we could tell the whole story, but I think most people understand what's going on. I haven't talked to you about it. I've talked to Nick about it a little bit, but that was before the actual legal actions took place.

Now, most recently, as we record this, October 4th, he has obviously made a lot of people angry in the WordPress community, but not just that... In the Automattic company; his employees, many of whom are very - I'll just call it distressed, with what he's been up to. And just yesterday, he offered a buyout. Did you see this, Kball?

**Kevin Ball:** I did not see the buyout, no.

**Jerod Santo:** Yeah, he offered a buyout. So inside of Automattic, he doesn't want anybody working for him that doesn't want to.

And that makes sense. So facing what seemed to be a mutiny, internal mutiny, the same dialogue that's going on on the outside is going on on the inside, he says... He got together with some of the, I assume, CFO style people, and offered up a generous buyout package to his employees.

If you resigned by 20 o'clock on Thursday, October 3rd... But today is Friday. I was going to say, "That's today." No, no, no, we're off by one. We're recording on a Friday. Then you receive $30,000, or a six-month salary, whichever one is higher. But you will lose access to Automattic that evening, and you wouldn't be eligible to boomerang, which is when you get rehired, basically; we call those boomerangs. And then HR added some extra details to sweeten it. And of the employees, 159 people took the offer. That seems like a large absolute number; relatively small, 8.4% of the company. The other 91.6% gave up on $126 million of potential severance. That's a weird way to say it. I'm quoting his blog post. They didn't give up on that, they gave up on the $30,000 that he offered them individually. And so yeah, roughly 10% gone. Of that, 80% worked on WordPress specifically, and 20% worked on other things: PocketCasts, Day One, Tumblr, CloudUp.

\[00:32:04.15\] One person had a really good day... They had just started two days before the deadline, and they took the $30,000 and ran. And so that was a nice windfall.

**Kevin Ball:** That's great. Great for them.

**Jerod Santo:** Yeah. He actually gives them a shout-out in the post, so Matt doesn't seem to be offended by that.

**Kevin Ball:** I mean, he made the offer. I hope he's not offended by people taking it.

**Jerod Santo:** Yeah, totally. So yeah, that's the most recent. But overall your thoughts on this entire drama? Because there's so much here. What's your overall sentiment about it?

**Kevin Ball:** So, I mean, it's a mess, obviously, and I think it's done a lot of damage to the WordPress community. I think, honestly, it gets into the same thing that we're a little worried about for Evan You, which is when you have a for-profit business, you have multiple different types of incentives. And it's easy to be generous when times are good. So the business is growing, everybody's welcome... "Sure, use the WordPress name. Use this, whatever. We're still making plenty of business." You get into tighter money, other challenges, maybe the company's staring down layoffs or something because their finances aren't looking good, and you start to say "Okay, what can we do here?" And sometimes that's shift focus to a paying product if you don't have a paying product... Sometimes that's look at ways that you can scrape off some freeloaders... In this case, I think Matt views WP Engine as freeloaders. I'm not going to judge on the merits of the case, because that's already all over the place... But that's a target. I mean, maybe you do a layoff. This buyout offer is the most brand-happy way to do a layoff I've ever seen.

**Jerod Santo:** Yeah, it's funny. At the end of the post, he says "However, now I feel much lighter." I mean, he just shed 10% of his company, and he's feeling lighter... Which obviously, like you said, nice way to get rid of a bunch of people. I mean, obviously, he's already burned his reputation in many ways. But at this point, it basically is a layoff.

**Kevin Ball:** Yeah.

**Jerod Santo:** Optional.

**Kevin Ball:** Another thing that this gets into is something else that's been in the tech zeitgeist is "What is founder mode?" What makes founders special? I think one of the most common things you see in people who are able to be successful startup or company founders is a chip on their shoulder. Because it's really hard. I mean, you know this. You've started and run Changelog. It's really hard to build and run a business. And that is true across any type of business, and I think for fast-growing tech companies there's a number of things that make it potentially harder.

I don't know if Automattic did the venture route or if they were able to be profit-funded the whole way, but that adds a whole set of pressures, all these different things... And so people who have a bit of an edge, of like "Nah, F the world. I'm going to go and make this thing happen" are more likely, I think, to be able to stick through all of those challenges. But that does mean then that you've got people running these companies who have a bit of an edge to them, who are kind of like "Well, F the world. I'm going to get it my way." And that can result in things like this, where - hey, it escalates. They're not looking for the easy way out. They're looking for the "My way or the highway" way out. I think of Larry Ellison, right? Larry Ellison is famously an a-hole, and is really aggressive along every dimension: technology, legal, copyright, trade, all these different things. And he's also one of the richest men in the world, and Oracle keeps getting bigger.

**Jerod Santo:** \[00:35:53.27\] Yeah. How does Oracle do that? \[laughs\] Well, they have Larry Ellison to thank. It's a give and take. What's weird about this one - and I don't know Matt well. I wouldn't call him a friend. He probably barely remembers my name. I've had him on the show a couple of times over the years... It's that he doesn't seem like he's this founder mode kind of guy. He's very soft spoken, he's thoughtful, he seems calculated... This seems not what I would expect. Like, if someone said "Matt Mullenweg just went on a scorch earth campaign against a hosting company that's a competitor of his", I'd be like "Really?" So he got triggered, and I feel like he's lacking counselors, or something. Like, he's lacking good advisors to help rein him in... Which kind of happens when you're at the top. It's lonely at the top, as they say... I've never been there, but I hear it's lonely up there.

You need colleagues, you need friends, you need people to say "Let's slow down and think through this." Otherwise you can end up alienated. I mean, he's built over decades a good reputation, a good name, not just for himself, but for WordPress. And in a couple of weeks' time - I won't say WordPress is completely done or anything like that, but there's so much uncertainty. Certainly Automattic has lost so much goodwill in the software world that like someone needed to be like "Matt, slow down and check yourself here", I think. I'm wondering if he doesn't have those people in his life, or something.

**Kevin Ball:** He may not. Also, whenever I see people behaving in ways that don't feel consistent with how they've behaved before, I look for what's changed in the environment around them. Because we as humans are so much more influenced by what's going on around us than we think we are... It's often the system, not the person.

You had that sort of question just a minute ago, "Did they raise VC or not?" They did. They raised a bunch of money at the peak of the 2021 funding craze. So they are likely facing what thousands of startups who raised at that time period are facing now, which is if they invested based on that for growth, and they got way out ahead of their revenue skis, they're at the point where that's coming to bite. And they've got to adjust or do layoffs or do something. And that type of pressure is super-intense, and people behave differently when they're under new pressures.

**Jerod Santo:** And I can see where he would be offended if we looked -- we did some of the math on Changelog & Friends last week about how much WP Engine is putting into WordPress versus Automattic putting it into WordPress... And if you're under this financial strain, and you have so much resources going to the open source side of the thing, and your competitor, who's winning in the marketplace it seems - very successful, WP Engine; of course, bought by private equity, and so Matt has turned private equity into the enemy... They might be an enemy. I can't really judge that from where I'm standing. But under all of that, you have a competitor who's kind of maybe eating your lunch all of a sudden, and you look at them not contributing back, which is just kind of a... It's not a law. Obviously, it's open source; you can do or not do. But it's kind of a social contract, of like "Hey, we're all building on this common foundation. You should also invest in the common foundation." If I was the creator of that thing, I would be mad; I would be offended. I'd be like "Come on, guys. You're eating my lunch, and I'm building the software underneath your platform." So I understand his motivations 100%. It's his actions that I don't understand. And yeah, maybe, like you said, it's greater social impact of the zeitgeist, as you said earlier.

**Kevin Ball:** There's the zeitgeist. I think, also -- I mean, most of us are bad at foreseeing the ripple effects of our actions, especially if it's in doing something that we haven't done before. I doubt he in any way anticipated the level of blowback he's gotten. And if he did... Actually, I would bet at this point still he doesn't understand the long-ranging implications of that.

\[00:40:08.21\] There's this concept of -- I'm trying to remember what it is, but... Trust cascades, and you lose trust, you lose trust, you lose trust, you don't see impact in your customers for a while, and then at some point it falls off a cliff, because you've passed a threshold... It's hard to see in real time the long-ranging impacts of burning the trust to the ground.

**Jerod Santo:** Right. And I think the move specifically, if we're going to talk about his actions, that was ill-conceived. And I think a good advisor would have said "Do you understand what this is going to do?" It's when he disabled WP Engine's customers, their ability to access WordPress.org sources, and broke a lot of stuff for people who had nothing to do with this. They're just running their businesses on WordPress, they host on WP Engine... And all of a sudden, he created thousands and thousands of enemies that he was not trying to fight with. He's trying to fight with WP Engine. And the whiplash effect. I mean, that is probably incalculable, how much damage that move did specifically.

**Kevin Ball:** Yeah. Well, and WordPress.org theoretically is the nonprofit side of this, that in theory should not be involved in this. But it highlights kind of the extent to which he views this whole domain as his, in some ways.

**Jerod Santo:** A BDFL.

**Kevin Ball:** Yeah.

**Jerod Santo:** \[laughs\] When the BDFL goes no longer benevolent, right? He's suddenly not benevolent with regards to certain parties... And trouble ensues. So I don't know, where does it go from here? I mean, we obviously don't know where it's going to go. It's going to go into the courts, it sounds like. Now, maybe there'll be a settlement...

**Kevin Ball:** The WP Engine thing is going to go to the courts, there'll be a settlement, whatever... But I think from an open source side, it's hard to see that you don't get like a community fork of some sort, probably backed by a set of other non WP Engine, but WordPress hosting companies.

**Jerod Santo:** Yeah. Well, this doesn't exactly match up, but it at least rhymes with what happened on the HashiCorp and Terraform side of open source, where that was around a relicense rug pull. This is a different kind of thing, different kind of -- it's like a certainty pull; he pulled the certainty out, not necessarily the rug. Although the rug was definitely pulled out on those WP Engine customers. But over there, when HashiCorp, pressured by economics and their need to make more money, relicensed Terraform. And what we saw there was Open Tofu, which was a community fork created by the other big players in that place. There's lots of companies building businesses on top of Terraform... And the verdict's still out whether or not Open Tofu will become a replacement of Terraform, if HashiCorp will survive... But it's caused a rift, it's caused a fork, and a pretty well-executed fork. That's the key of the fork, is you've got to get a lot of people behind it, you have to dedicate resources... You can't just hit the fork button on GitHub and think that you actually have something going. It ain't easy.

**Kevin Ball:** It's not easy. Absolutely. But I think -- I mean, if I were to point at a theme of this whole episode today, it's that marrying open source and a big backing company comes with all sorts of risks. And to be fair, that doesn't mean I'm opposed to companies being built around open source. You might take that away from what you've heard today. I mean, I just don't think we've found a sustainable funding model for open source.

\[00:43:49.00\] I had sort of hoped that Evan You as an individual was sustainable and could keep going on that... But we really don't have a model other than corporate funding that provides anywhere near the amount of money that it takes to do sustainable software development.

**Jerod Santo:** Yeah.

**Kevin Ball:** But if you're building a business and you have profit requirements -- and once again, I'm not anti-capitalist. For a business, money is oxygen. That's what you need to keep going. That's what you need in order to keep working on that open source project, or whatever. But it comes with pressures, especially in times when money is scarcer.

**Jerod Santo:** So Joseph Jacks, who we've had on the Changelog, founder of OSS Capital - he believes heavily in commercial open source software, and he invests in commercial open source software. Almost all is open core as a model. And I've asked him similar questions, "How does this whole thing work out?" And I feel like when you VC-fund an open source project, you add all kinds of pressures... And his stance, if I might just reiterate it, is that it's a viable model to do this; the problem is so many people are raising way too much money. Way more than you actually need. And now you have to go so above and beyond the amount of success you'd have to have otherwise... And he thinks it's a crime how much people have raised historically, and not realizing, like, "That's going to come back to bite you."

And so he invests very small amounts, seed rounds etc. and he wants them to not raise again. Or raise a few times, but not go big, like the 50 million, 100 million, billion-dollar valuations... Which I think takes a lot of the stress off if you don't have to have so much success in order to pay back your lenders, your investors.

**Kevin Ball:** Yeah. I love that there -- there seems to be more of a trend towards folks doing this. I think we've talked before about IndieVC as a model as well, where - it's Bryce Roberts' this thing, where he's trying to support small amounts of fundraising... It's essentially kind of trying to fill the role that -- if you were starting a traditional company, like a bakery or something, you could go to a bank and get a loan for your startup capital, and then you're able to pay that off over time, and there's not an expectation that you're gonna go super-rocket ship to pay things off. That approach is not available for new product development, because it's too unpredictable, too hard to model, banks don't understand it, all these other things.

Traditionally, that gap has been filled by venture capital, but the venture capital model is really biased around these rocket ships. "How do I get to the Moon?" They push for everything to go that far, they want to put more money to work, all these different things. And so there's an opening for something in the middle, that is able to take a little bit more of a risky stance, and maybe is run by people who understand software and product development a little bit more, but don't expect you to go to the Moon, they expect you to build a profitable business, maybe in midsize niche, and payback maybe not at 10x multiples, but like 2x multiples, or payback with profits, or things like that. There's a huge open space there, and I think we're seeing a little bit of re-interest in that now. I just hope that it captures the imagination of more founders as well, because I think there is still the VC press conference of being a startup founder to the Moon is the sexy thing to do...

**Jerod Santo:** Right. Yeah, there's nothing sexy about building a small business, a lifestyle business. They even use a lifestyle business --

**Kevin Ball:** As a derogative.

**Jerod Santo:** ...as a pejorative. Yeah, like "Hey, oh, I see what you're doing. You're building a lifestyle business." It's like "Yeah, I like having a lifestyle. Don't you?" \[laughs\]

**Kevin Ball:** This comes back to kind of what I was saying, of like building a company, starting a company is really, really hard. Trying to go the VC route and go really, really big is even harder. It's miserable. There's so many things that just make you miserable as a part of this. So how do you get people to do it? You make it seem really sexy. It's the same way they used to recruit people to the military. They still do.

**Jerod Santo:** Yeah, totally.

**Kevin Ball:** This is how you're going to be the --

**Jerod Santo:** \[unintelligible 00:48:09.18\]

**Kevin Ball:** \[00:48:13.16\] Yeah, exactly. And there are legitimate choices and reasons you would do that, and there are a few people in this world who seem to actually enjoy the terrible chewing glass grind that is starting a startup... But most people do not enjoy that process. And so in order to get people to do it, you have to waive some big --

**Jerod Santo:** Large amounts of money...

**Kevin Ball:** ...large amounts of money, and make it seem really sexy. And so they do.

**Jerod Santo:** Right. Some of us just want to write our software and live life... But different strokes for different folks, as they say. Should we talk Web Components? Have you been following the Web Components debate?

**Kevin Ball:** A bit. Yeah, I think it's interesting...

**Jerod Santo:** To lay a little bit of groundwork... So there's been a lot of conversation the last couple of weeks on the various social networks, X being the one with the most vitriol. It highly incentivizes vitriol. Mastodon I've seen also vitriolic, but almost entirely one-sided. It seems like the pro Web Components side is like entirely on Mastodon. That's just maybe my feed. Of course, you follow who you want to over there. So my view of that world. But also, thankfully, in the blog post world, where we can actually have longer conversations and put our thoughts out there... So I think this was kicked off by Ryan Carniato of Solid.js, who wrote a long post titled "Web Components are not the future." Now, he's been saying this for a while, so this is not the first time he has said this, but he wanted to make the argument again. And he said a little bit outlandish stuff, specifically he said "Web Components possibly poses the biggest risk to the future of the web that I can see." To me, that's over the top. But he also laid out what I think is a thoughtful, well-reasoned case. His opinion. And he's not uninformed.

And so his biggest problem with Web Components is that they're built on top of custom elements, and because of that, all Web Components are DOM-based, or related to the DOM, but there are other components that aren't that way, and so there's like this limiting factor... He goes into much more detail. And there's been a lot of responses to that. The most well thought out that I've seen was from Cory LaViska; also Lea - is it Leah or Lea Verou? I'm not sure how her first name is pronounced... Has written about it. Cory calls Web Components the present, and basically says "You're thinking about it all wrong." So there's a lot of details here. But people are basically arguing "Is this part of the web platform worth building on, worth continuing to invest in? Or do frameworks and tools and everybody need to just continue or start to ignore--" actually, continue to ignore, because they've been ignoring Web Components for a long time...

**Kevin Ball:** Not all of them.

**Jerod Santo:** ...and build around them.

**Kevin Ball:** Lit is built on top of Web Components.

**Jerod Santo:** This is true. I was under the impression that Web Components had finally arrived, and we were all starting to use them, and everything was hunky-dory... And then I read these posts and I'm like "Oh, great." What do you think?

**Kevin Ball:** I think this is another example of we're all building different things, and the right tools for the thing that I'm building are not necessarily the right tools for the thing that you're building. Ryan lives in the app framework world. He's building frameworks for apps. Web Components are not great for that. Or at least they're not sufficient for that. And they might be an okay building block... Once again, we interviewed -- what's his name? Justin from Lit.

**Jerod Santo:** Fagnani? Yeah.

**Kevin Ball:** They built an app framework on top of Web Components.

**Jerod Santo:** Right.

**Kevin Ball:** \[00:51:46.28\] So they might be okay as a building block. Maybe they don't meet everything that Ryan wants, maybe they have drawbacks. They do. They do have drawbacks. I've built some stuff with Web Components; I find them a miserable programming model. It's not how I would want to build applications. That's okay... One of the things they solve is packageable, custom, dynamic things that you can send everywhere, and you can kind of get the premise of actually a reusable component that can be integrated into somebody's WordPress site on Automattic, or on WP Engine, or in somebody's Solid.js application if they want it, but probably not because they want to integrate with the rest of it... And can also be built on My Static Site, and all these other things. They have that piece of it, but I think they're designed to be dynamic components in a web page. They are not necessarily designed to be able to build a full web application with.

**Jerod Santo:** Which was Cory LaViska's overarching point. He said that you're trying to do too much with Web Components. There's also other kind of components that your application may have. He calls those framework components. So the framework may have other components, which aren't tied to the DOM. And so they're outside. It's like, Web Components should be a subset of your overall component architecture. It seems like that makes sense to me. I've never built one of these things, so I can't speak to "Does that work well in practice, or does that not work well in practice?" I think Ryan Carniato can much better have an opinion on that than I can. But one thing I learned from Brian LeRoux, who's been on the show recently, with Enhanced.dev - and they're big on Web Components... And he said that there's a lot of good in Web Components, and there's some bad stuff, and it's kind of like JavaScript the good parts.

He's basically said we have ways that we use Web Components which are optimal, and we ignore a lot of the stuff, specifically the shadow DOM. He says "We just don't ever touch the shadow DOM." And so if you ignore the shadow DOM, there's way less dragons, there's less gotchas, better performance... Just use this subset of the Web Components API, and you're going to have a much better lifestyle. And so maybe some of that is just like learned knowledge over time, as people have tried to build stuff with these things... But it seems like if Web Components are a subset of your app, and you're also using a subset of the Web Components spec, you may have a decent shot at building something that lives up to what you're trying to build.

**Kevin Ball:** Yeah, I mean, I think there's also this ongoing question of "What should be in user space? What should be part of the platform?" Once again, I don't think if you're building an application, you probably -- I doubt you want to be doing that just using what's in the platform, raw JavaScript, raw Web Components, all those different things. I think you want an application framework. That's okay. I have no problems with that. If I'm writing a server-side application, I'm not writing it in raw Ruby, or...

**Jerod Santo:** Assembly?

**Kevin Ball:** ...or Rust, or whatever. I'm using an application framework. That can be true on the web as well. It's another platform. And there is room to discuss what's the right level of primitive, how complex or not complex should they be... Are Web Components too complex as a primitive? I think that is a worthwhile discussion. That being said, for the use case of "I want a dynamic widget that I can send around and use on various web pages", I think Web Components are great. They work fine. I wish they had a reactive programming model or a declarative programming model rather than an imperative one... Well, okay. That's alright. I can use a framework like Lit, that lets me describe it declaratively, and then have it translate into the Web Component approach. Sure.

**Jerod Santo:** \[00:55:47.13\] So we've already said different strokes for different folks... Previously you also said people are building different things... But yet we have these big, grand sweeping debates about the right way, don't we? Are these ultimately profitable? Is it a waste of our time? I mean, I feel like if I was pro Web Component platform person, and I read Ryan's post, I'd be like "Here's some good feedback that we should now go and integrate into what we're building."

**Kevin Ball:** Yeah. I mean, I think debates, for all that they're uncomfortable, are probably the best tool we have for moving forward our thinking as a community about things. So it's well worth doing. I think where they start to get in danger is when they happen as clickbait dunks on X or other things like that, where it's --

**Jerod Santo:** Right. Mudslinging.

**Kevin Ball:** ...not about trying to improve our joint understanding of the types of problems we want to solve and how we want to solve them, but rather about winning your social media cred. But -- I mean, I thought Ryan's post, some of it I disagreed with, some of it I agreed with it, but it started a useful discussion, that will probably improve what gets built both at the standard level and potentially at the framework level. So that's great.

**Jerod Santo:** Yeah. And he's a specific kind of person, because he's not just a framework proponent, he's a framework builder. And framework builders - they're a different kind of people. They are the kind of people who are always pushing the edge of what the platform is allowing, and they want to move fast, and they want to change. And so a lot of his stuff, I just feel -- a lot of his complaints... Well, specifically he said Web Components - it's all too fast. This is all happening too fast. I'm like "Do you know how slow the Web Component rollout has been?" But I get it from his standing point, because he wants to innovate and iterate and change the way we do things down low. He wants to be able to change those things. And once it's built into Chrome, it's built into Edge, there's no going beneath that and changing it at that point. Like, you have to now convince browser companies to go change what they build. Very unlikely.

**Kevin Ball:** Well, the web bias is backwards compatibility over almost anything. So once it's in there, it's not going away.

**Jerod Santo:** Right.

**Kevin Ball:** It might start getting ignored in favor of something else, but it's going to continue.

**Jerod Santo:** Yeah. I mean, IndexedDB is still in there, right? \[laughs\]

**Kevin Ball:** The blink tag is still in there, isn't it?

**Jerod Santo:** Which one?

**Kevin Ball:** Blink.

**Jerod Santo:** Well, blink's useful, man... \[laughs\] I might argue blink is more useful than IndexedDB. Just kidding. There are probably more uses for that. Fair enough, fair enough. Well, anything else to say about this? We would like to get some folks on who are -- I would love to get Lea and Ryan on a show and have them just talk... I feel like we could elevate the conversation and have a -- I think we'd have a productive dialogue around that, but I just haven't lined that kind of thing up yet. If you're interested in that, to our listener, please let me know if that's worth my effort, to do an episode on that. Anything else to say? Any final words, Kball, before we call this a party?

**Kevin Ball:** I mean, I think the thing I would say is follow the Ryan and the Evan and all of their examples, and not the Matt Mullenweg. Keep building cool stuff. If you're building it inside VC, okay. If you're building it outside, okay. But build cool stuff. Don't just try to shut down other people building on top of your stuff. Like, let's focus on the builders, not on the litigation.

**Jerod Santo:** There you go. Build cool stuff, and be cool people. Be nice. Treat others how you want to be treated, as the golden rule says. Alright. Well, that's our show for this week. We'll be back next week. Hope you enjoyed hanging out with us. We enjoyed discussing, as we always do, Kball, these things. Hopefully we brought some insights, or at least some opinions that you can think about on your weekend to come.

On behalf of Kball, I'm Jerod, this is JS Party, and we'll talk to y'all on the next one.
