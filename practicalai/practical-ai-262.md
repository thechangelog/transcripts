**Jerod Santo:** Hello. Jerod Santo here, Practical AI's producer and managing editor of all the shows here at Changelog. Daniel and Chris took this week off, but we didn't wanna leave you hanging without anything to listen to, so today's episode is going to be a little different than our usual fare. AI is permeating the entire software industry, so we've found ourselves talking about its impact something in practical ways, other times in less practical ways, on many of our pods. So today we're serving you a sampler platter. You'll hear a segment from this week's JS Party podcast, where me and my two co-hosts, Kball and Nick Nisi, discuss the recently-announced Devin project, which is making waves in developer land. You'll hear a segment from a recent Go Time episode called "How long until I lose my job to AI?", where Johnny Boursiquot and his experienced panel of friends discussed using code gen AI to augment your dev skills instead of replacing you.

And finally, you'll hear a segment from the Changelog, where my co-host Adam Stacoviak and I talk to Jose Valim. Jose is the creator of the Elixir programming language, and he's been a guest here on Practical AI in the past, talking about Elixir AI tooling. Today you'll hear us question him regarding Elixir's place in a world increasingly influenced by large language models, and how he thinks about it as a language author and promoter. Hopefully, there's a little something for everyone in this episode, and if it's not approaching AI from a perspective that's compelling to you, don't worry, your regularly scheduled programming with Chris and Daniel will be back next week.

Okay, first up is JS Party and Devin.

Break: \[00:02:23.23\]

**Jerod Santo:** There's some news that's good. There's also some news that's maybe bad, maybe good... I don't know. The thing that everybody's talking about, this week at least as we record, and last week as well, is Devin, the first AI software engineer, according to the makers of Devin, which is Cognition Labs, a new company which raised a series A led by Founders Fund, headed up by Scott Wu, who seems to be a very intelligent person, even from a young age, if you watched that video of him doing math very quickly, at ages when it seems like you shouldn't know math very quickly... And they got a demo out there on this new AI software engineer. So I could say more; I'll stop right there. You all have probably seen the demo, Kball and Nick, or at least heard about what's going on... And this is a new tool, which can start from scratch, and do some cool stuff. I'll just leave it there for now, and we can talk about the details.

**Kevin Ball:** I mean, if you're excited, you too can pay for the right to have a software engineer that can only fix one in seven of your tickets, and spin up lots of new ways for AWS to charge you money without your oversight.

**Jerod Santo:** Sounds like an intern. I'm just kidding. Sounds nice. And what are you referring to? Or is this some specific things that Devin's been up to?

**Kevin Ball:** So high level, there's a couple of things that I'm referring to here. So one is they're pumping up the market, "This is a standalone -- why get a coding assistant? Get something that can go and do your software." And they published some data on it, and it does do better than the state of the art in terms of tackling going from a GitHub issue, to "Okay, I'm gonna actually solve this \[unintelligible 00:04:29.17\] to happen." But the number they published, I think, was 13.86% of issues unresolved. So that's about one in seven. So you point out a list of issues, and it can independently go and solve one in seven. And first off, to me, I'm like "That is not an independent software developer." And furthermore, I find myself asking "If its success rate is one in seven, how do you know which one?" Are the other six those "It just got stuck"? Or has it submitted something broken? Because if it sets up something broken, that doesn't actually solve the issue, not only do you have it only actually solving one in seven, but you've added load, because you have to go and debug and figure out which things are broken. You have a whole bunch of additional load. So I think the marketing stance there is little over the top relative to what's being delivered.

The other thing - and this is around... I think a part of what they do is "Oh, it can spin up resources for you." And they showed this cool demo of "You point it at this thing and it allocates a bunch of different production resources for you." And the person who's handled DevOps in me before, and now the engineering leader who has to sign off on our Digital Ocean, or AWS, or Google Cloud or whatever expenditures you might have, looks at that and is terrified by "I'm gonna give an LLM, which is known for hallucination, which is..." These things are not -- you have to design an application... And I'm building applications with an LLM, but you have to design around their unpredictability and their willingness to lie... And I'm going to give that raw access to spinning up resources in my cloud? Like, that sounds -- well, it sounds like something I would not sign up for, I'll say that.

**Jerod Santo:** \[00:06:20.16\] Okay.

**Nick Nisi:** Kball, let he whose success rate at issues that is greater than one in seven cast the first stone...

**Jerod Santo:** Yeah, I was wondering what Nick's ratio is over there. One in seven sounds about the way I would do. I'd pull off the easiest one first. Does Devin know what the easy tickets look like? Because that's a skill right there.

**Nick Nisi:** I'm over here counting on my fingers trying to see if I'm within that ratio...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** But do you know when you fail? Or do you just throw out broken code and you're like "Yeah, here you go."

**Nick Nisi:** It's more of a question of "Do I know when I succeed?" I guess... Which is - yeah, same thing.

**Jerod Santo:** You think you've succeeded, until you find out later that actually you've failed? That's been my experience. Or you succeeded under the constraints that you put yourself under, right? Or that was actually specified in the ticket itself. But you actually failed at some other unnamed, unlisted constraints, that were unknown at the time, but are obviously clearly there, in production. And so in that context, you've failed. It's not easy. It's not easy to succeed in this world. Well, what about -- Kball, can't you point Devin at like a $5 a month DigitalOcean and say "Deploy to this?" Can't you cap your risk, I guess, on the DevOps side?

**Kevin Ball:** Probably. You probably can. And I do want -- so I'm taking a hard skeptic stance on particularly the claim that this is an AI software engineer. Like "Don't hire a person, use this thing."

**Jerod Santo:** And this is their claim. So I think it's fair for you to be that harsh on them, because they say "Meet Devin, the world's first fully autonomous AI software engineer." That's a very bold claim. So I think it's fair that you're being that harsh. Go ahead.

**Kevin Ball:** Yes. They're showing some cool stuff. It looks like a pretty interesting tool to put in the hands of someone who knows what they're doing, and is able to validate it, and is able to say "Okay, go and solve this relatively well-constrained problem, where I can easily validate the correctness of your output. Go at the sandbox, where I know that you're not spinning up massive amounts of resources in a way that I'm going to regret", or even "Go at this non sandbox situation, but I have the knowledge to check what you did, look at the logs and be like "Yeah, that's okay." Those are really cool things. That could be really valuable. That could dramatically increase somebody's productivity. And those are so far from being something that I would trust independently to replace a software developer that they're not even in the same country; maybe not even in the same world. These are just completely different claims.

**Nick Nisi:** Yeah. I think that the sensationalism of this comes from not what it can do now, but what it represents, and the progress that it's made when comparing to other things, like - whatever it was comparing that 13% to, to other AI chat things that can do things. It's way better than all of those. It still sucks compared to a human, but it's made monumental progress in terms of AI. And I guess the question is, "Does that continue?" Can it get further than that? Or will it reach some kind of limit? And then the other piece of it, I think, just from a marketing thing - and I'll be honest, the only thing I've seen on it really is a Fireship video - is that it's already doing some work on Upwork. So in a way, that's a marketing claim, that it competes against real humans for jobs.

**Jerod Santo:** Yes. Truth. According to them. I haven't confirmed it, but what you said is true, that they say that, yes.

**Kevin Ball:** So this is a struggle with all of the LLM world right now, and all the AI world... Because on the one hand, we have been in a place where we're in the rapid part of an S curve. There have been some very rapid advancements in the core capabilities of these things. And they are super-freaking cool. Like, really cool. And also, they have a lot of limitations. A lot of those limitations are baked into the architecture that's being used.

\[00:10:07.23\] And so you get kind of a situation where there's a bunch of people doing really cool stuff with this, and trying to figure out what it's good for... But it demos way better than it does anything reliably in production. Because you can get a really cool outcome 40% of the time, in some situations 70% of the time... And like you show that, and people are like "Oh my gosh, this is gonna take over the world!" And I would not trust a, for example, AI software engineer, even that could handle 70% of my tickets, but 30% of the time spins up millions of dollars of cost for me, right? Or like other things.

And once again, I'm not trying to take away from the technology, but I don't think these hyperbolic claims actually serve anyone, except for getting attention. They get attention - okay, great. And you're gonna get a whole bunch of people who buy this thing are disappointed. If it cost them a bunch of money, they'll sue your ass off. I'm like "Why would you do that to yourself?"

**Jerod Santo:** It's somewhat similar to generative AI in the image - let's just stick with the static image world - where everywhere you see is impressive results... And it'd be like "This new Midjourney 7 is off the charts amazing. Here's nine examples that will blow your mind." Right? And if you click through on that, they're all going to be very impressive; those are amazing things. But then you have to stop and think "Well, Midjourney didn't create nine examples that blew my mind. Midjourney probably created 40, 50, maybe 500 examples, and then you, human, decided which ones were amazing, and you cherry-picked those out as the examples." And that's a great team work, guys... Right? Computers plus humans equals better results. And so there's the cherry pick, and that's what code review on these things will be, that's what happens when you tell Copilot "No, I do not want that function." Right? It's all, as HipsterBrown calls it in the chat room, "Human in the loop", and that's exactly what is necessary. And I think the reason why you call them hyperbolic claims, Kball, is because they're saying it's a fully autonomous AI software engineer. Human out of the loop. Let it rip! And maybe fans of the bear will like to say let it rip, but those of us who aren't fans of Devin are thinking "Let's not let it rip too much, because it might just tear the whole thing down." Now, I'm being hyperbolic. Nick, you're nodding along... Do you agree with me?

**Nick Nisi:** Somewhat, yeah. Yeah, it's humans who are deciding what is good out of that, and kind of helping to train that going forward. But I was trying to think and trying to relate this to another article I saw, that wasn't about Devin specifically, but it was about like prompt engineering as a "profession" being taken over already by AI, because an AI can iterate and more quickly come up with a way to answer the questions that you want, by appending exactly what it wants to hear at the end of a string. And I think the example that I heard from that was like "We want you to answer this question", and the AI is "incentivized" to answer it a little bit better if you put it into a scenario that it likes. So the AI is Captain Kirk on the Enterprise, and it has to answer this question to save the planet from whatever. And the question could be "What's two plus two?", or something really simple. And by putting in all of these extra prompt words that the AI is coming up with on its own, it's making better results overall. And I'm just wondering how that marries to the idea of humans being the ones who curate the good ideas that come out of it.

**Jerod Santo:** \[00:14:00.22\] Well, prompt engineering, I've been convinced by Swyx that it's a code smell. At first, I was convinced this is the new thing that everybody needs to learn. And I think it's just a leaky abstraction that's we're currently dealing with as humans, because the tooling is not good enough, so that we have to engineer the prompts. I mean, Google's search box is prompt engineering. Knowing how to google -- it's the exact same thing, it's just way harder, and it's like way more magical now to tell it the magical incantations to get the best results back out. And so the fact that it knows what results are better to me is not intelligence or anything, it's just, we just need that to go away.

And I think Devin is actually an example of where they've productized and hidden a lot of the innards that we've currently been exposed to, in order to make the tool work better than it would for an inexperienced user to use it. Like, they've actually turned it into a product. And I think that's great. I think it's one step on a long line of iterative improvements that will make it so that prompt engineering -- I mean, you're just going to basically talk to it in layman's terms, and it will know how to feed itself the correct prompt, so to speak, in order to get the goodness out. But I don't know... Kball, back to you.

**Kevin Ball:** Yeah. I mean, I think -- so high level on all this AI stuff is there's really cool stuff there. We're figuring out how to use it, and the current state is clearly intermediate. However, the thing I want to keep coming back to with this is there are things that it's like "Okay, this technology is immature, and we're going to evolve around it", and figuring out how we handle prompts, and managing prompts, and what's generating them, and whatever - that fits well in that bucket. And there are things that are fundamental pieces of the way the technology is designed. LLMs, machine learning models in general, are statistical, probabilistic. They're very different than most things you think about in software, where you're trying to make something that is logical, consistent... Like, you could put it A in, you get B out. And that is not there with these things.

And so you can design applications around that, and there are things that you can do to just sort of pin that down, to add validation that is outside of the LLM, and do other things, and maybe Devin is doing that... But I think the more we start looking at these sort of places that require judgment, places that require precision, places that - like, if you just make some random s\*\*t up, it can cause a lot of problems. Like, those are not actually -- like, there's a fundamental thing about what the technology does, that means it's not necessarily going to be a good building block for that. And so making hyperbolic promises about where it's going to develop, that depend on it being a fundamentally different technology than what it is... I feel like they are setting yourself up for a lot of heartbreak.

**Jerod Santo:** What about the job market? Do you think it's fundamentally affected by tools like Devin as they progress over the next three to five years? Because we're not talking about humans out of the loop. I think we're all in agreement here that that's not feasible, or smart, at least, in today's technology plateau of LLMs... But less humans in the loop. That seems like it's very feasible if these tools continue to iterate and even just not have revolution, but evolutionary advancements from here.

**Nick Nisi:** Yeah, if it makes me three to five times faster, do we need three to five times fewer engineers...?

**Kevin Ball:** Yeah. So this is a technology that has the potential to dramatically impact the productivity of software engineers. And I think there's a couple of different things around that, as we think -- so short-term, that can create some disruption. Short-term, that means that a company that had been running on, say, five engineers, and might have needed to hire and expand to 15, now they don't have to expand nearly as soon, and things like that.

\[00:18:00.11\] So I think there is the potential for relatively short-term disruption. I will say, both -- the history of economics broadly and software in particular is that every time we make it easier to code, we discover there a whole world now that we can address and build software around, that we couldn't before. So if, for example -- and this, actually... There's a particular example of this that I think is interesting to dive into. So one of the big economic challenges in the tech industry in the last four or five years is that we had these massive tech companies, with incredibly high revenue per employee: Google Meta, Netflix... The FAANGs, mostly. And so they were able to set the salary bar that was super-high; they were paying ridiculous amounts of money - that's a technical term, ridiculous - for software engineers.

And then when we had very low interest rates, and a ton of VC money flowing into the industry, there were lots of companies whose fundamental business economics do not support that level of salary per software engineer, who were nevertheless paying that amount of salary per software engineer based on VC capital. And sort of this thesis that "Okay, we'll be able to scale out of this, and we'll get whatever." And I think that caused a lot of distortions and problems in the field.

Now, if suddenly software engineers are three to five times more productive, the range of businesses that could use software, but previously could not afford to compete with the FAANGs etc. of the world - there's a whole set of business models in there that become viable, because it's that much cheaper to develop software. And so I can imagine this actually dramatically expanding the number of viable, either software businesses, or businesses that are non-tech, but would like to include software, or could have custom software, and dramatically expanding the number of those that haven't.

So long-term I don't think it's a negative impact on the software engineering career path. I think that what it means to be a software engineer looks a little bit different when you have different types of tooling. That has been true as long as I've been around. JavaScript land - I remember when jQuery was a revelation. Oh, my gosh, this is gonna make me much more productive. It did make me so much more productive, all these other different things. And now the level of tooling that we have there that supports our productivity building things on the frontend is astronomical. And has that taken away from the number of people running JavaScript?

**Jerod Santo:** Speaking of astro-nomical, Astro has a new database...

**Break:** \[00:20:40.05\]

**Jerod Santo:** Up next we have a Go Time podcast fireside chat between long-time programmers Kent Quirk, Sharon DiOrio, Steven Pyle and host Johnny Boursiquot.

**Johnny Boursiquot:** It's one thing to have gen AI pump out snippets of code that is part of a larger whole, right? ...whereby I'm the engineer, I'm engineering a solution; I'm not just a code monkey just clocking out syntax. I'm trying to fix a problem, I'm engineering a solution to a business problem. Now, I could go as high level as I can, and I can just open up Copilot in chat mode and say "Hey, this is what I'm trying to accomplish. Start spittin' out files." Now, maybe today it can build somewhat trivial apps. I've seen YouTube videos and clips and things of it spitting out entire working React apps and all these things, and that's great. And I think over time it's gonna become even better at doing those things. But I have a hard time trying to sort of correlate that, or trying to replace solution building. Because to me, solutions aren't static, right? When a business comes to me and says "Hey, I need you to build a solution to this problem." I build it, they take it into production, they do stuff with it, and they come back and say "Hey, you know what? This is great. Now, I need to change it in this way. Or I need to account for this exception", or "I need to account for this particular use case, or this specific customer, where 90% of the time it works like this way for every customer of this type, but for this customer of that type --"

**Sharon DiOrio:** "But on ultimate Thursdays during a Full Moon it does this completely different thing." \[laughter\]

**Johnny Boursiquot:** Exactly. So how are we supposed to treat those entirely made up solutions that -- am I just feeding that back into the system, and saying "Hey, so now account for these alternative approaches"?

**Sharon DiOrio:** Is it gonna be like it was when the first generated code frameworks started hitting the scene? And you'd go in and there'd be all this code, and it was like - yes, super-fast. If you had to do an ORM, it wrote all the code for you, et cetera. And then you needed to change something, and all of a sudden it was like -- you know, change management in some of those days was...

**Kent Quirk:** Yeah. Or regenerate the whole thing from scratch and "Oh, sorry about all your customizations..." \[laughter\] Yeah.

**Sharon DiOrio:** So that'll be another big test that AI has not yet proven it can do...

**Kent Quirk:** Well, so let's talk about art for a second though, because this is, again, a similar thing. Everybody's really excited, like "Look at the images I can generate with Midjourney", or whatever.

**Sharon DiOrio:** With stolen art.

**Kent Quirk:** Right. But the point is, again, it's going out and giving you the average solution. It's going out and going "Here are the things that look most like what you described, that somebody else has created already", and kind of cobbles pieces of that together.

**Sharon DiOrio:** Or "Here's an opinion formed by the loudest voices out there, that I sucked up as source data."

**Kent Quirk:** Hell yeah. I sat in a meeting today where an artist went over her design, basically her design process for a big design project... Like, "Here's the resources I looked at. Here's the feeling I was going for. Here are the things I considered. I looked at these typefaces; this typeface reminded me of this building architecture, which is relevant to the site we're --" And then that artist proceeded to churn out over the course of a couple of months 200 pieces of support art for an event. That was a brilliant design exercise by somebody deeply steeped in art and creation, who then studied the event and what the event needed and integrated all that.

And yes, some random person could have sat down with Midjourney and said "Make me this stuff", and it would have been much less good. But people who don't know the difference would have been "Sure, it looks fine." I mean, we've all seen that, right? My document has 37 fonts and 12 colors, but... \[laughter\]

**Steven Pyle:** "It looks fine to me..."

**Kent Quirk:** \[00:26:04.15\] But there's a big difference between something crafted and something just slapped together. And yeah, I guess I think that AI is going to make it easier to slap \*bleep\* together. But...

**Johnny Boursiquot:** But for most people though, would you argue -- so here's what I'm not saying. I'm not saying that these things generated by AI -- like, if you're a connoisseur of a particular art, you're an architect of a particular kind of application, or solution, or thing, whatever it is, you can critique the output of Gen AI, as it stands today; again, arguably, it's going to get better at what it does. But you can critique the output today and be like "This is subpar. This is not as good as what I could have come up with." But for most people, it's good enough.

**Kent Quirk:** It depends on what they're using it for. Again, if you're just doing something for yourself, who the hell cares? I mean, yeah, I'll slap something together out of two by fours if I'm building it for my garage. I don't care. But if I'm going to sell it, if I'm going to make a business around it, that's the part where I'm saying, I don't think the AI stuff is there. If you're just doing a hacky project for personal use, yeah; I mean, maybe you would have had to pay somebody to come in and slap that shelf together in your garage if you didn't have the skills to do it yourself. And so now there's this kind of -- yes, there's a few things that I couldn't do before, that now I can do today, for myself. Design that invitation for my kid's birthday party. Hell yeah. I can't draw, but I can use an AI. There's nothing wrong with that. So yeah, there's probably some -- you know, the kid next door you're not paying 20 bucks to to do that for you.

**Steven Pyle:** But that's now. What happens in the future as AI evolves, and improves? Do we get to this uncanny valley level of "Oh, it's not just good enough, it's like--"

**Johnny Boursiquot:** It's like the standard. Now it's building your whole kitchen. \[laughs\]

**Steven Pyle:** Do we need to worry about that?

**Sharon DiOrio:** And how much coding out there is most of -- you know, how many CRUDs have we ever created in our lives? How many CRUDs are still being created every day? Yeah, okay, so that's a problem that's largely been solved, to a greater or lesser degree. But --

**Kent Quirk:** Yeah, I mean, it's white box, right? You make white box easy to do.

**Sharon DiOrio:** Yeah. And tech has always been making things that had gates around them, or created limited availability, and making them more available. Artisan things that used to be only certain artisans could do that, only musical artists who had a studio and an audio engineer... And now they can go and create their own tracks with one app at home. For me, that's the part that's like "Oh, I can't complain. I can't be the curmudgeon complaining about this latest thing, that might make something that I do more accessible to other people." Like, I've benefited from these other things that came along. It's time to share the wealth. I don't want to; I'm really rooting against it... \[laughter\]

**Kent Quirk:** I don't think it's about gatekeeping. I feel like a big chunk of my career has been spent trying to help people learn to program. And so I'm not thinking that the reason I'm skeptical is because I don't want other people to do what I do. I think it's more because I feel like the hype and the reality are distinct. That what the reality is producing is mostly devoid of creativity. People are confusing knowing what to look up with being creative. And I think knowing what to look up is a skill, and a lot of us have it, and the better engineers I think are better at it. And so yes, AI helps to ease that problem. But knowing what to even ask about, or looking at a new solution to a problem - that's something that I think is well beyond what's AIs are capable of now, or in the reasonably -- like, the LLM model I think is fundamentally non-creative. That's my take on it.

**Johnny Boursiquot:** Spicy. We're not at the --

**Kent Quirk:** \[00:30:13.28\] We're not at that point yet?

**Johnny Boursiquot:** We're not at the unpopular opinions yet. So one thing you mentioned, the whole teaching -- y'all remember when... Maybe it was during maybe the first or second Obama term or something, but there was this giant push to teach everybody how to code, right? It was everywhere. It was in the media, it was in newspapers... "We need to teach our young how to program." Now I'm looking at a clip from NVIDIA CEO, like three or four days ago or something, saying "Hey, people shouldn't learn how to program. You should now let -- the new programming language is the human language." And I'm thinking "Man, you are sitting here -- you stand to gain billions, a bajillion dollars if your wish comes true, because you're producing chips and stuff for these things. Of course you're gonna say that." But I'm definitely not on the "Don't teach people how to program" camp.

**Sharon DiOrio:** No, no. I'm gonna take a slightly spicy take care. I don't think he's completely off. Now, in the time we've all been engineers, we've seen waves of different things that are going to come and take our jobs. Offshoring, and code generation. Now AI. And they haven't. And my theory is that the key thing that an engineer has is the ability to communicate. And even when you're supposed to be communicating to people on the other side, product, the business, whatever affectionate term you use for them, aren't always as good at that... Although it should be part of their job, but... Having somebody who can think back and forth, there will I think always be a need for those people... Because every CEO thinks they have the answer to every question.

**Johnny Boursiquot:** That's what they're paid to do.

**Sharon DiOrio:** Right? But they really shouldn't. If they have a business that's big enough to grow, their biggest skill is finding the people and putting them in the right place. So if your job right now is like doing CRUDs for a company that can't even explain what they want, I wouldn't worry, because they're not going to be able to explain what they want to AI.

**Kent Quirk:** Yeah, it's the thinking logic -- yeah, it's about break something down into steps and think logically. I once did have a client, very early in my career, who was a pretty good businessperson, who really wanted to automate his business, and he was able to sit down and explain it to me. Like, if he had had the tools to program, he could have written his own code, because he thought about it really logically. And it was just my job to basically take dictation and turn it into Pascal for him back in the day. But that's few and far between, quite honestly. Most people who specialize in business aren't specializing in thinking logically. You specialize in thinking about people, and like you said, about communications.

**Johnny Boursiquot:** So does AI then make you more what you already are? If you're a logical thinker, you'll benefit, and if you're not, you'll still struggle?

**Sharon DiOrio:** And who gets to train the agent? \[laughter\]

**Johnny Boursiquot:** I want to be on the trading side. I want to be the one doing the building of the things that you use... \[laughs\]

**Kent Quirk:** It's a good question.

**Steven Pyle:** I think at a point it becomes like a personal AI, where it's tuned to you, your data doesn't get shared... Then it becomes like a superpower. It's like your co-pilot, right?

**Sharon DiOrio:** But how would that work? If it's only got your data, it's basically replicating, to a point, you...

**Kent Quirk:** There's a generic -- it's trained on the universe, and then specialized for you...

**Steven Pyle:** Right.

**Kent Quirk:** ...is the way that we're seeing all this.

**Steven Pyle:** Yeah.

**Johnny Boursiquot:** It's like creating your own GPT, but it's based on a larger model.

**Steven Pyle:** \[00:34:04.08\] Yeah. Exactly.

**Kent Quirk:** My company, we've built -- we have a query engine that looks like SQL. And then we built an AI where we train that AI as part of a prompt. We basically can go out and get your data, and all the names of your fields, and the data types of your fields, and we can plug them into the AI query so that when you say "Show me my slowest service", it can go "Alright, what are the fields that are named according to time, duration? And what are the things that look like a service name? And now I can write a query for you." So it knows how to query Honeycomb, and then it can write that query for you from your inept prompt, because it's been specialized for that particular type of application. And I think that's a really cool use of AI.

**Johnny Boursiquot:** That is a productivity boost for people who are already technical. Full disclosure, my startup is a Honeycomb customer. So I will go in the dashboard, and I can formulate those queries. But I'm already a highly technical user, who knows how to use these kinds of tools and know exactly what kind of data I'm looking for and when I've found it. Now, for the layperson who doesn't know... The more I think about it, the more I'm thinking "Okay, if I'm a--" On one end of the spectrum you have the complete layperson, who is using perhaps ChatGPT or something like it to maybe generate copy and not hiring a copyright person like you might traditionally do back in the day. I'm sure the copywriters of the world are suffering right now, because --

**Sharon DiOrio:** Content creators.

**Johnny Boursiquot:** Yeah, content creators are suffering, because this stuff is now being generated --

**Steven Pyle:** So are all our Google searches.

**Johnny Boursiquot:** Right. So if that was your job, absolutely you're impacted, and the layperson can now bypass you and get to something that -- again, the good enough; they can get something good enough to achieve some means. On the complete opposite end of the spectrum you have people who engineer software, that again, given the context of the conversation, we're talking about how safe is our jobs... So when I'm asking this question, I'm not asking "Is the layperson going to find ways of reducing their reliance on sort of--" I don't wanna say lower skilled; it's just a different kind of skilled... I'm thinking, for people like us, as software engineers, who presumably will be impacted by this to some degree - and we already are, right? ...for us there's also the micro-spectrum whereby if you're on sort of the lower end of that spectrum, and if the only thing we were doing is generating CRUD, well, I'm sorry, your job is indeed in jeopardy, if that's the only thing you've been doing with your career.

On the opposite side of it is the highly-specialized person who understands a business problem, has to debug and troubleshoot, and talk to people, and integrate different things, and --

**Sharon DiOrio:** Institutional knowledge...

**Johnny Boursiquot:** Right. All that stuff. I mean, I don't see that skill. I don't see that being replaced by AI anytime soon. Am I wrong here?

**Steven Pyle:** I don't think so, personally...

**Sharon DiOrio:** How many of those people do we need?

**Johnny Boursiquot:** And that's the thing, right?

**Sharon DiOrio:** Is this a game of musical chairs? Should we be looking for our chair now?

**Johnny Boursiquot:** No, any business is thinking "Do I need 1000 engineers, when 500 will do?"

**Kent Quirk:** I mean, I think, as we've all said, it makes us more productive today... So I'm writing more lines of code per day than I was five years ago.

**Johnny Boursiquot:** Right. Right.

**Kent Quirk:** \[00:37:52.10\] So that's good. But we all kind of expect productivity to continue to rise... So this is a productivity tool.

**Johnny Boursiquot:** Mm-hm. Not a replacement tool.

**Kent Quirk:** We're also using languages that are more expressive than they were. The code I write in Go is probably one third the length of the same code I write in C++, or used to write in C++ back in the day... So that's also a productivity boost at some level. At least if you believe the old metrics that it's basically you can write the same number of lines of code per day, no matter what language you write it in...

**Steven Pyle:** But I think actually knowing how to use it is a skill to put on your resume \[unintelligible 00:38:33.10\] Even if I didn't want to use it, I would, because it's gonna be a point where like "I use Copilot all the time." "Oh, good. \[unintelligible 00:38:46.02\] point for you to get the job."

**Johnny Boursiquot:** Is prompt engineering already on your LinkedIn profile?

**Steven Pyle:** It's gonna be soon... \[laughter\]

**Sharon DiOrio:** No, but if you put it in your interests as AI, it shows up in the keyword searches.

**Steven Pyle:** Oh, there you go. Right?

**Johnny Boursiquot:** Nice, nice...

**Kent Quirk:** I mean, that's a good point... But to me, it's like -- back to my woodworking thing. It's like, I know how to use a power saw, I know how to use a drill press, I know how to use a lathe... Those are kind of expected today, if I'm going to do woodworking, and say I only use hand tools. People are going to look at me like "I don't have time for you." And the same is true of like if you're not using Copilot, what am I paying you per hour?

**Johnny Boursiquot:** Right. What are you doing? Why are you not as productive as you could be? Yeah.

**Sharon DiOrio:** I think at this point the only people who really aren't using it are people who are doing very arcane languages, or people who their businesses don't allow it, their company doesn't allow it. I think everybody else has at least tried it.

**Johnny Boursiquot:** I mean, if you're a company that doesn't allow such things... I understand not bringing sort of open source code into your organization. That might be the wrong licensing model for you, or something like that. You don't want to be in some hot water. All you have to do is look at Oracle and Google over the whole Java thing. I think those were the companies involved. But if you allow your engineers to use a model where you can control the kinds of things that were used in the model for the training, and you can have maybe -- you can run your own internal Gen AI for code generation, or whatever it is, I think if you're an organization that is afraid of these things, you should at least follow that route... As opposed to saying "Hey, nobody can use any gen AI coding tools whatsoever", because I think you're gonna lose people if you do that. Because I'm gonna look at my peers that get to use these things, and they're learning those skills... And then now I'm falling behind, because everybody's using some sort of code generation tool, and I'm not. I mean...

**Sharon DiOrio:** This is where I hope somebody who hears this reaches out and can answer that question of like "Can you have a copy of Copilot that you train on a specified set of repos, and only those repos?"

**Steven Pyle:** Private repos.

**Sharon DiOrio:** Well, I mean, as we joked... I mean, if I'm a Go developer, I'm training it on Johnny's code. Because if I don't like it, I can deal with Johnny... \[laughter\]

**Johnny Boursiquot:** Nice, nice.

**Sharon DiOrio:** You know what I mean? There's people out there --

**Johnny Boursiquot:** One neck to choke. I get it, I get it. \[laughs\]

**Sharon DiOrio:** It doesn't matter what language it is, there's people out there that you respect their code, and you'd be like "Yes, I would like my code to be more like this. I wish it would learn that that's what I was thinking, or that's the way this problem should be thought about." I mean, yes, there's a precious few of those people, and those people will probably never lose their jobs... But for the rest of the mere mortals, they're going to have to work with the tools that are out there. And I would love if this was a possibility now, that you could train Copilot on what you'd say to train it on, and not all of GitHub.

**Kent Quirk:** I think there are companies that are working on that product. I feel like I've even seen a product announcement like it... But yeah, I mean, the thing about it is you can take one of these LLMs, and you can essentially subset it, and you can make a tiny, compact LLM that will run in a box that you can actually stand on your desktop... And then you can further train that with new information. So that's exactly what you want to do here, you want to take a coding-centric LLM, like a Copilot, and create the mini version of it, and then train it on your repositories, and now it knows how to write your code, and it's also not talking out to the cloud while doing it. So there's got to be businesses like that, if there aren't any.

**Sharon DiOrio:** And this is where we redact all of this and put it into our business plan, right? \[laughter\]

**Break:** \[00:42:32.07\]

**Jerod Santo:** Last up we have Jose Valim, creator of the Elixir programming language on Changelog & Friends. That is our talk show flavor of the Changelog podcast.

**Adam Stacoviak:** To Jerod's point earlier, AI as it's known today, GPT, ChatGPT and others are not that good with assisting with Elixir programming. And so I guess the question is "What does it take to make it good?" You mentioned embeddings earlier, you mentioned documentation being more readily available... What does it take from a, I guess, a leader in the Elixir world to enable LLMs to be better? What role do you play in that journey for them to better consume the documentation, and better know how to do programming in Elixir to help folks like Jerod and myself, or our team or others to really become better and more professional in Elixir? Versus just like anytime Jerod asks ChatGPT for assistance, it's just like "No, it's not good. So just quit."

**José Valim:** You know, so if I got the question right, I think we did our work correctly, at least from the language point of view, in the sense that documentation was always first class. So documentation is very easy to access. So if what you want to do is to configure an LLM, it's actually very easy to access that programmatically, send that, extract information... And we talked about -- one of the things that you also have to do is try to get understanding from the source code, so you can find "Oh, this code is using those modules; it's importing those things." And those are things that you can do relatively easily in Elixir. We can most likely prove that.

So I feel like we have the knife and the cheese... It's just a matter of somebody going in and cutting the cheese. Yeah, I feel like the foundation is there in terms of having this information structured, but somebody needs to feed it somewhere. But again, we can go back -- like, maybe it's the corpus size. Maybe ChatGPT indexed hexpm already. Not sure. Maybe it has done that. I don't know. I don't know if I can send a letter to somebody, "Hey, please index my website." Or maybe it's a matter of -- so one of the things is that Red Monk, they release twice a year kind of a graph plotting in GitHub against StackOverflow. And I think they're having the most popular languages according to GitHub and Stack Overflow, and then there's a linear thing in the middle... And it's very funny, because Elixir is high on the GitHub side, but quite low on the StackOverflow side. And one of the reasons for that is because we have always had the Elixir forum, so that may be one of the things that --

**Adam Stacoviak:** Right. Where's the knowledge? Where's the back and forth from the community?

**José Valim:** Yeah, the knowledge is in the forum. Is that thing being indexed? Because we know Stack Overflow is, right? So ironically, that's one of the reasons - I think; I may be misquoting - that Red Monk, they are considering removing Stack Overflow from their plots, because I think it has been losing relevance in the last years... But you know, maybe in the effort of trying to have a closer community, where everybody can engage with each other, where I'm active in the forum - and I would probably not have this patience if I was dealing with Stack Overflow... We created our community, a special place, but it's not known.

So yeah, so I think it's still too many unknowns. But I think at the core, we unwillingly did a good job, because we were worried about documentation being accessible, documentation being first class... So we did that, and we promote people to write documentation; lots of documentation. So there is a lot there. And yeah, maybe RAG is going to be the thing that is going to be enough. That's one of the hopes, going back to -- you know, we want everybody to be able to use this. If RAG is good enough, then a lot of people would be able to augment their ecosystems without depending on Open AI, or whatever. But we are still evaluating.

**Adam Stacoviak:** \[00:48:10.17\] When we talked about sort of the long-term future of Elixir, artificial intelligence, and that sort of larger topic of how long will it be relevant, and can AI generate it well, that whole conversation - this makes me think of this necessity to not have a blank box that is whatever AI is. Because just like you said, "Who do I send a letter to to index my stuff, so that my very relevant language today remains relevant tomorrow? ...because tomorrow says AI will continue to be more and more relevant to developers in their journey to develop." Right? So who do we send the letter to? How do we know? Well currently, the status quo of AI is for the most part a black box. Obviously, open source LLMs and indexes have become more and more pushed because of this challenge, but I think this illustrates and highlights really the long-term challenge, because even you can't say for sure why what was indexed was indexed for the Elixir corpus, whether that's the forums, whether that's the documentation, through Hex documentation, or whatever. It's unclear to someone like you how to enable ChatGPT or the likes to better support Elixir assistance for developers using those things to use this tooling. And that's just not cool. Because long-term, we need to have inroads into those places, so that we can be part of the future if AI is predicting how we'll get to the future.

**José Valim:** Yeah. And I think - yeah, it's too early. I think we're going to improve a lot. I was listening to a podcast today where Sam Altman, who was saying they improved ChatGPT 3 about 40 in the orders of magnitude in terms of size, performance, and things like that, since they started. I think 10 times for ChatGPT 3.5. And I think open source is going to catch up; I think that's the hope. But yeah, it's also - we go back to when we were thinking about Livebook, because what I want is for open source to win. But when I'm building a feature for Livebook, I need to build the best feature for the users. And I can use ChatGPT 4, and I can immediately see the results. And they are really, really good. I can use other tools off the shelf - they are not as good.

So we are a small company, we are doing open source... So my options, if I have to choose for my users, is going to be ChatGPT 4, because it gives me the best result, for the least amount of effort. I just -- it's there. And this is -- so we're back to my indecision about investing in this stuff; that's because I want open source, I want things to be open source, but right now the quickest return of investment is GPT. And then I am in this contradiction space.

But yeah, I think it's just patience. We have to be patient. And I think probably in one year -- and the whole thing, it's crazy to think about... It's that this thing has been happening for a year only. It appears that this thing has been out for so long... But it's a year. And I think if I'm back on the show in a year, we may potentially be having a very different conversation. So yeah, we'll see.

**Adam Stacoviak:** Do you have any fear about this? Even as you responded to that, you sort of had some -- I wouldn't say trepidation in your voice, but you sort of had some uncertainty. Do you have any fear and uncertainty and doubt, the FUD that people sort of pass around - do you have any fear about this?

**José Valim:** No, not really, in the sense that I consider myself very lucky, very fortunate, or whatever; or blessed, however you want to say it. I'm not being overconfident here, but more like thankful that I think whatever happens to me, it's going to be fine. I truly believe that what's going to make Elixir survive is the community, more than whatever technological changes... Unless there's something very drastic.

\[00:52:18.11\] I talked to my father about this, about investments. So when Bitcoin wasn't that crazy, and then my father is like "Oh, have you heard about this thing, that if you put your money there, people got this huge return?" And then I always told him "Father, if we got to know about it, it's because it's too late." Or if something happens, it's like "Oh, father, if something happens, it's because -- if something goes this bad, it's because it's going to be bad for everybody. So don't try to fight it."

So again, unless there's a very major change, I think I'll be fine. So I'm not worried about me, in the sense I always think more about -- it's more about ideals. Again, I like to say, well, me 10 years ago - that's where my trepidation is if things go closed source... And those things, they happen by -- we don't see the results. I think another polemic topic about this, it's like "Hey, I use Chrome. As soon as Chrome came out, I immediately --" Today I don't use Chrome anymore. But as soon as Chrome came out, I immediately swapped to Chrome. And if I had known that this would lead to a point where Google is in this position where it has a lot of control over the browser, over the web, and over how we use the internet, 10 years ago I would probably not have used Chrome, if I could have seen it. So I think that's where my trepidation comes from, of things being closed source. The developer experience...

Another example today -- Elixir was the first programming language that GitHub had the new code navigation things that were provided by the community. So there were some programming languages, and there still are, where they have very good navigation and exploration on GitHub UI. And the path for that, to get that feature, to get that behavior was - and I'm very thankful that the GitHub team, they discussed with us and allowed us to do that... But that's closed source. And GitHub plays a major role over how developers use.

So it all comes back to this idea of if you want to provide a good experience for your users, how much of that is behind something closed source that you have no control, and you are depending on somebody paying attention to you, or you having a contact, or me having a name, because I was very active in the Rails community that GitHub uses like 10 years ago? Those are the things that -- but I feel lucky, but it worries me. How much is being closed? How much is going to be out of our control? And then the trepidation, I guess, is "What does that matter for the small José out there, who wants to start building his thing today, and they won't be able to?"

**Jerod Santo:** Well, you killed the vibe there, José...

**José Valim:** Oh, thank you.

**Jerod Santo:** \[laughs\]

**José Valim:** That's me at parties, you know?

**Adam Stacoviak:** Not invited. Just kidding.

**Jerod Santo:** Funny. Alright, well, let's... Should we try to close on an up note, on a high note?

**José Valim:** \[HighNote 01:37:35.25\] Was that...? \[laughs\]

**Adam Stacoviak:** Wow. I had no idea.

**Jerod Santo:** I think we should end it right there, Adam. Don't you think? We end it on a high note.

**Adam Stacoviak:** That's cheese and knife tactic there. I like it.

**Jerod Santo:** That was.

**José Valim:** Do you want higher? I don't think it will be good for the listeners.

**Jerod Santo:** I think that was plenty high enough for me. Adam, were you satisfied with that?

**Adam Stacoviak:** That was a high note, literally. And I dig it.
