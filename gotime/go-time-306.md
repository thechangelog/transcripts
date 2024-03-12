**Johnny Boursiquot:** Well, hello, hello, hello. Welcome, listener. Today I have a treat of a show for you. Why, you ask? Well, forgive the rather clickbaity "How long until I lose my job to AI" title. It was either that or we come out and say "Don't worry, you won't lose your job to AI", but how boring would that be? The special treat is that I'm here with three special guests. These are folks that I've actually worked with professionally in the past. These are awesome, folks. Every time we get together -- we get together regularly, even after we've all moved on from the institution that we worked at... We've kept in touch and we get together every two or three weeks or so, and we just talk; we chat about the industry, the technology, what we had for breakfast... I mean, you name it; we have a good time when we're talking to each other. And we've always joked that "Hey, one day we should actually record this stuff, because this tends to be hilarious", right? It tends to be hilarious, and it just so happens that we were talking the other day and AI started coming up in our conversation, and it just gave me the idea that "Hey, maybe we should actually take this show on the road", so to speak, and actually have a recording of us sort of shooting the \*bleep\* and just having conversations as we usually do, and talk about sort of the impact of AI on our jobs as they are today, and what they might look like in the future. So let me introduce to you my four longtime friends and professional colleagues. First let's start with Sharon DiOrio. Sharon, say hi to the people.

**Sharon DiOrio:** Hi to the people. I'm currently looking for a job, so I'm going to totally put myself out there...

**Johnny Boursiquot:** Good start. \[laughter\]

**Sharon DiOrio:** I am a 25-year developer. I have a husband, four kids, a dog, and 14 chickens. I like cooking, eating, and talking \*bleep\* about tech.

**Johnny Boursiquot:** Alright, this sounds like a dating app profile, but okay... \[laughter\] Alright, alright. Next up, Steve.

**Steven Pyle:** Yeah. Hi, I'm Steve. I like long walks on the beach, and that sort of thing... \[laughter\] Yeah, hi, I'm Steve. I've also been working in this industry for probably about 25 years too, from C, to Java, to .NET, back to Java again... And then mostly PHP and Go in the last decade or so. Yes, thanks to the people on this chat. And yeah, currently I am a developer and SRE at a little company called ShelterLuv. We do software as a service for animal shelters.

**Johnny Boursiquot:** Wow. Nice. Nice. I didn't know that's what it was called. Yeah, we'll have to talk more about that. That sounds lovely. Kent, last but not least.

**Kent Quirk:** Yeah. Hi, I am slightly reluctant to talk about how many years I've been in the industry, but it's a lot more than 25... No, it's going on 40 now, and I've been around for a bit, and date from the earliest days of PCs, and writing Assembly code, on up through these days I'm working in Go for a company called Honeycomb, which makes sort of high-volume telemetry systems, monitoring systems. And I live in Connecticut with my spouse, and happen to have a beautiful little dog, who is fortunately not here today. Otherwise, you'd probably hear it.

**Johnny Boursiquot:** Yeah, usually by now I'm like \[unintelligible 00:04:14.17\] \[laughter\] Awesome, awesome. Well, thank you all for being here, again. We have a loose structure. I've got some discussion topics, but as we tend to do, we'll sort of ebb and flow, and deviate and come back... But let's open with the hype. There is an incredible amount of hype around AI right now.

**Sharon DiOrio:** I can measure the hype by how quickly you mention it on social media, or in these chats, or whatever... Because it's like "Okay, put that on the hype board. Let's see what happens."

**Johnny Boursiquot:** I mean, the last time I saw this much hype about anything was around crypto, and blockchain, and Bitcoin, and all that stuff... Which I think I'm hearing a little --

**Kent Quirk:** Wanna see my bullet holes? \[laughter\]

**Johnny Boursiquot:** I'm hearing a little bit less of that right now, maybe because I've muted the term on socials and whatnot... But I mean, the hype around AI is just incredible. And whenever there's so much hype about anything, usually the first question I ask myself is "Who stands to gain?" What do you all think?

**Steven Pyle:** Yeah, the hype train is in full effect. I mean, everybody -- any company that has any kind of business logic does some sort of transformation or work on data, they just slap the AI label on it. "We've got AI!", for marketing purposes. But you've gotta find the diamonds in the rough, right?

**Kent Quirk:** I've always liked the definition of AI. I hate to say it, but I've been around for several AI cycles now... \[laughs\] Not to mention other hype cycles.

**Sharon DiOrio:** "If else... AI!"

**Kent Quirk:** \[00:05:58.02\] Yeah. Well, and it was a nice thing... Sometime in the '90s it was a thing, like, AI is whatever hasn't been done yet. As soon as it becomes an accepted capability, then "Oh, it's actually not AI... That's just computing." For a while, it was going to be the first chess champion would be the dawn of AI. And it was like "No, actually, that's just the big search." So yes, it's hyped. Who stands to benefit, just to get your question right now - it's the people who have invested in it and want number go up. That's usually, at least your earliest thing is. I don't know, we can talk more about the hype and who sees the hype, and who's getting most excited... Because I do think that's maybe an interesting question for this --

**Sharon DiOrio:** Excited about possibilities, and not just the money.

**Johnny Boursiquot:** I mean, if you have yourself a startup these days, and you toss AI in there somewhere - I mean, VCs presumably are lining up to give you that money.

**Kent Quirk:** I think that was true a year ago, I'm not as sure it's as true today.

**Johnny Boursiquot:** There's something to be said for that...

**Kent Quirk:** I mean, NVIDIA is making a ton of money around AI compute.

**Johnny Boursiquot:** They're killing it, right.

**Kent Quirk:** So NVIDIA stock is just up and to the right.

**Johnny Boursiquot:** Oh, I know. My portfolio is very happy right now. \[laughs\]

**Kent Quirk:** So is my partner's... \[laughter\]

**Johnny Boursiquot:** Right? I think that's more nobler... And even if some companies, some products are adding AI in sort of a gimmicky way, or just to say they have it, and it seems like the whole "chat with your doc", and whatever, these things seem to be a dime a dozen... To me, those are sort of the gimmicky implementations, right? Chat with your thing... Not everything I do that could use AI is gonna be through chat, and things like that. But because it's the thing that is closest to a regular layperson, I think that tends to be sort of the first thing that's easy to spot, the little star symbols next to a chat prompt, and "Oh, I'm chatting with an AI bot", or whatever.

But on the less noble end of things, you could say there are companies that are laying off in droves, perhaps under the guise that "Hey, we don't need as many people to do this job, because AI." When really, they've just been looking for a reason to lay people off, and this is just as good of a reason to do so. Am I out of line here? Is that far-fetched?

**Sharon DiOrio:** The part about using AI as an excuse, or as a lifeboat in the back of their mind, like "Oh, if I have half the people, I can just give them AI to code, and I'll be back to square one"?

**Johnny Boursiquot:** I mean, that's some truth... And we will get to this. I mean, there's some truth in terms of productivity gains you can have with AI. I mean, at some point we'll talk about today -- I mean, even my own workflow as an engineer writing code every day, I benefited from AI. I have been for over six to eight months now. But there is an aspect of this where -- for example, I read a fun fact from a company that basically cut down their customer service workload by two thirds or something, because they routed all inquiries and things through a bot, an AI agent or something to answer questions. It sort of deals with the most common set of issues that users call in about, or try to reach an agent on the website about. And two thirds of that is now handled by an AI agent... Which I think is a great use for things like that.

**Kent Quirk:** Yeah, unless you're the one on the other end of the conversation... \[laughter\] Like, you call anybody or you try to talk to anybody, and you basically have to spend five minutes arguing with an AI to please let me talk to a human, because "You don't have the answer I need."

**Johnny Boursiquot:** \[00:09:58.17\] Well, I mean, that's the thing though, right? They's saying that folks are actually closing tickets because they got the answer they wanted. This is not our grandpa's AI, where you're going through the phone tree, pressing all the buttons, trying to press zero, or yelling at the thing, saying "Hey, operator, give me a human." This is not the same thing at all. These days, these things are -- I mean, if they have a knowledge base, and you unleash an agent, an LLM or something on that knowledge base, presumably it's the same thing that the human that you otherwise would have been chatting with is doing, right? They're looking up a way to give you an answer that is approved by the company. They can't wing it, so they have to use a for reference. So if you give that reference to an AI bot, presumably it does a much better job, much more accurate and faster job of giving the right answer to the user. And that is one of the sort of use cases which I can appreciate. But the fact is that it still leads to layoffs. And these are the kinds of jobs that I think are being impacted the most, right?

**Kent Quirk:** Yeah. So actually, I think that -- I guess I feel like when I approach these things, very often the reason I'm trying to get to a human is because I have searched for that information and couldn't find it. And I've search the knowledge base, and no, they don't have the answer in their knowledge base, at least not in the form that I can use. And so then the AI is just a delaying tactic for me. However -- and I think that what's happening here is the AI is really good at giving you an answer that you can look up. And that is true whether you're using Copilot to write code, or talking to the support bot of your favorite bank. If for average questions, for average commentary, for average code, for things that everybody has already done 2000 times and there's no innovation involved, the AI is really effective. But when you're talking about "I need to rearchitect the system", or "I need to--"

**Sharon DiOrio:** Here's the part where we defend our jobs... \[laughter\]

**Kent Quirk:** There you go, there you go. Sure, yes, you still need me, because I can rewrite the code from scratch... And the AI can't. \[laughs\]

**Sharon DiOrio:** Yeah, I can write the code from your old scratch, if it's out there and sucking it up...

**Steven Pyle:** Well, the problem is, like Johnny was saying about layoffs - my fear is that some executive or management someplace is gonna be like "Oh, why are we paying all these expensive developers all these money? We'll just have an AI do it." And then they have a project, or a huge enterprise thing going on, and then two years later it fails, because they switched to AI, but that is too late, and people have lost their jobs. I think we're trying to avoid that, right?

**Kent Quirk:** So does everybody hear us Copilot?

**Steven Pyle:** I do. Yeah.

**Steven Pyle:** I mean, I use it regularly, all the time, and it's great. And when I was on a road trip recently and didn't have access to it for a chunk of the time, I missed it. But I also feel like -- I don't know, there's some number, 10% or 20% of the time, it writes code that looks right, but is wrong.

**Steven Pyle:** Oh, yeah.

**Sharon DiOrio:** I describe it to people who ask as it's like having a junior developer -- you're pairing with a junior developer who types really fast. And most of the time, they're kind of in the right realm, and a lot of time they even get it right. But then there's that part where it's like "I don't even know where you're going with this one." Just like a junior. But you can't -- at this point anyway you can't improve the AI like you can improve the junior, from an end user perspective. And I know there's ways, and actually we were joking around, Johnny and I, that's how we ended up deciding to do this, we were joking around with "Now what if I have an AI and I can train it on only certain GitHub repos containing this code? jboursiquot, there you go. There's your go-to Go code."

**Steven Pyle:** \[00:14:04.06\] I mean, it definitely has context... I mean, if I'm writing code in a codebase, within a repo it, it pulls things from the rest of that repo... So it's on the fly.

**Kent Quirk:** But -- I mean, I was doing one today, and I started to comment, I start typing, I type two words and it goes \[unintelligible 00:14:17.27\] the rest of the line. And it's like, that's not what I was gonna say. It's not entirely wrong, but it's not what I was gonna say, and it just messed me up... And I needed to stop and delete that code and rethink of what I was trying to say, but not start typing it yet, because as soon as I do, it's gonna fill it in \[unintelligible 00:14:32.05\]

**Johnny Boursiquot:** Like, a 500-millisecond delay in your typing, and then it starts to think. It's like "Oh, you're done. Let me pick up something now."

**Kent Quirk:** Yeah. I'm too much of a machine gun typist \[unintelligible 00:14:47.02\] Yeah, it jumps in all the time.

**Johnny Boursiquot:** So this is sort of a good segue into sort of the impact on the job topic. So I can say with a high degree of certainty that let's say at least a good 50% of the code I'm writing, or I should say generating right now, is being done so by Copilot. But let me qualify that. In the case of Copilot, it's sitting in my editor, in my workspace, it has access to the entire codebase, it can see the patterns I've used before... So if I'm creating a new handler for my server - well, it knows how I like to write my handlers, so it can sort of infer that I would want that same consistency. So a new handler, a new route, it just already kind of knows. So I'm just waiting for it to just hit Tab, and for it to do 90% of the work for me, and I'm like "That's great", right? So in that sense, my productivity - it has helped me avoid having to type a lot, right? It's a great auto-completer.

**Sharon DiOrio:** And this is where I pointed out it might be a situation that a good portion of the code that is out there, that it's sampling, is yours, or influenced directly or indirectly by your code, and that's what you're getting the feedback on... Which is not accessible to mere mortals. Because I haven't gotten to that point of it kind of knows the way I want to phrase something, and it's probably because I'm phrasing it wrong. But anyway, I haven't gotten to that point where it kind of thought ahead for me most of the time.

**Kent Quirk:** I think it's fantastic for writing test suites.

**Sharon DiOrio:** Yes, absolutely.

**Kent Quirk:** It's so helpful... And that's tedious code to write. It's so annoying. Like, give me that framework and let me type in a couple of test case values, and... I don't need to write all that code. Yes, it's absolutely made me more productive. I generate useful code faster. But somebody who isn't me, just trying to hit Tab completion, would not be able to do that work. Because if you haven't prompted it appropriately by typing the function name you actually want it to write, or whatever, it's not going to be able to architect that thing for you. It can help you at the smallest level, but it can't help you with the grand level, in my view, today.

**Steven Pyle:** Yeah. I would say that whenever I use it, what it gives me is syntactically correct, but it's not necessarily what my intent was. If I prompt it with such and such a comment, it may create this blob of whatever that's just - it's really fancy, it's great, but it's not what I wanted. So it takes somebody who's done it for a while, like us, to --

**Sharon DiOrio:** Prompt engineering.

**Steven Pyle:** Right, prompt engineer. Yeah.

**Kent Quirk:** I mean, I have a couple of various co-workers who got pretty excited about it, and most of the ones who were most excited were the people who do not write code for a living. They're salespeople, and support people, and sales support engineers, and all that kind of stuff, whose job is to make something work. And they sit down with us, and they're very excited, because they can make something work very quickly. Because what they're trying to do in my view is usually something that's been done before, and they need that syntactic help. And they have the semantics in their heads roughly of what they want, so they can say "Write me an app to do X", because they don't really need the best app in the world, and they're not treading new ground... They're doing the thing that's been done before, and they just need to get it on paper, in their code. And that's cool.

**Break**: \[00:18:41.25\]

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

\[00:24:07.17\] And yes, some random person could have sat down with Midjourney and said "Make me this stuff", and it would have been much less good. But people who don't know the difference would have been "Sure, it looks fine." I mean, we've all seen that, right? My document has 37 fonts and 12 colors, but... \[laughter\]

**Steven Pyle:** "It looks fine to me..."

**Kent Quirk:** But there's a big difference between something crafted and something just slapped together. And yeah, I guess I think that AI is going to make it easier to slap \*bleep\* together. But...

**Johnny Boursiquot:** But for most people though, would you argue -- so here's what I'm not saying. I'm not saying that these things generated by AI -- like, if you're a connoisseur of a particular art, you're an architect of a particular kind of application, or solution, or thing, whatever it is, you can critique the output of Gen AI, as it stands today; again, arguably, it's going to get better at what it does. But you can critique the output today and be like "This is subpar. This is not as good as what I could have come up with." But for most people, it's good enough.

**Kent Quirk:** It depends on what they're using it for. Again, if you're just doing something for yourself, who the hell cares? I mean, yeah, I'll slap something together out of two by fours if I'm building it for my garage. I don't care. But if I'm going to sell it, if I'm going to make a business around it, that's the part where I'm saying, I don't think the AI stuff is there. If you're just doing a hacky project for personal use, yeah; I mean, maybe you would have had to pay somebody to come in and slap that shelf together in your garage if you didn't have the skills to do it yourself. And so now there's this kind of -- yes, there's a few things that I couldn't do before, that now I can do today, for myself. Design that invitation for my kid's birthday party. Hell yeah. I can't draw, but I can use an AI. There's nothing wrong with that. So yeah, there's probably some -- you know, the kid next door you're not paying 20 bucks to to do that for you.

**Steven Pyle:** But that's now. What happens in the future as AI evolves, and improves? Do we get to this uncanny valley level of "Oh, it's not just good enough, it's like--"

**Johnny Boursiquot:** It's like the standard. Now it's building your whole kitchen. \[laughs\]

**Steven Pyle:** Do we need to worry about that?

**Sharon DiOrio:** And how much coding out there is most of -- you know, how many CRUDs have we ever created in our lives? How many CRUDs are still being created every day? Yeah, okay, so that's a problem that's largely been solved, to a greater or lesser degree. But --

**Kent Quirk:** Yeah, I mean, it's white box, right? You make white box easy to do.

**Sharon DiOrio:** Yeah. And tech has always been making things that had gates around them, or created limited availability, and making them more available. Artisan things that used to be only certain artisans could do that, only musical artists who had a studio and an audio engineer... And now they can go and create their own tracks with one app at home. For me, that's the part that's like "Oh, I can't complain. I can't be the curmudgeon complaining about this latest thing, that might make something that I do more accessible to other people." Like, I've benefited from these other things that came along. It's time to share the wealth. I don't want to; I'm really rooting against it... \[laughter\]

**Kent Quirk:** I don't think it's about gatekeeping. I feel like a big chunk of my career has been spent trying to help people learn to program. And so I'm not thinking that the reason I'm skeptical is because I don't want other people to do what I do. I think it's more because I feel like the hype and the reality are distinct. That what the reality is producing is mostly devoid of creativity. People are confusing knowing what to look up with being creative. And I think knowing what to look up is a skill, and a lot of us have it, and the better engineers I think are better at it. And so yes, AI helps to ease that problem. But knowing what to even ask about, or looking at a new solution to a problem - that's something that I think is well beyond what's AIs are capable of now, or in the reasonably -- like, the LLM model I think is fundamentally non-creative. That's my take on it.

**Johnny Boursiquot:** \[00:28:38.23\] Spicy. We're not at the --

**Kent Quirk:** We're not at that point yet?

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

**Sharon DiOrio:** \[00:32:11.22\] But how would that work? If it's only got your data, it's basically replicating, to a point, you...

**Kent Quirk:** There's a generic -- it's trained on the universe, and then specialized for you...

**Steven Pyle:** Right.

**Kent Quirk:** ...is the way that we're seeing all this.

**Steven Pyle:** Yeah.

**Johnny Boursiquot:** It's like creating your own GPT, but it's based on a larger model.

**Steven Pyle:** Yeah. Exactly.

**Kent Quirk:** My company, we've built -- we have a query engine that looks like SQL. And then we built an AI where we train that AI as part of a prompt. We basically can go out and get your data, and all the names of your fields, and the data types of your fields, and we can plug them into the AI query so that when you say "Show me my slowest service", it can go "Alright, what are the fields that are named according to time, duration? And what are the things that look like a service name? And now I can write a query for you." So it knows how to query Honeycomb, and then it can write that query for you from your inept prompt, because it's been specialized for that particular type of application. And I think that's a really cool use of AI.

**Johnny Boursiquot:** That is a productivity boost for people who are already technical. Full disclosure, my startup is a Honeycomb customer. So I will go in the dashboard, and I can formulate those queries. But I'm already a highly technical user, who knows how to use these kinds of tools and know exactly what kind of data I'm looking for and when I've found it. Now, for the layperson who doesn't know... The more I think about it, the more I'm thinking "Okay, if I'm a--" On one end of the spectrum you have the complete layperson, who is using perhaps ChatGPT or something like it to maybe generate copy and not hiring a copyright person like you might traditionally do back in the day. I'm sure the copywriters of the world are suffering right now, because --

**Sharon DiOrio:** Content creators.

**Johnny Boursiquot:** Yeah, content creators are suffering, because this stuff is now being generated --

**Steven Pyle:** So are all our Google searches.

**Johnny Boursiquot:** Right. So if that was your job, absolutely you're impacted, and the layperson can now bypass you and get to something that -- again, the good enough; they can get something good enough to achieve some means. On the complete opposite end of the spectrum you have people who engineer software, that again, given the context of the conversation, we're talking about how safe is our jobs... So when I'm asking this question, I'm not asking "Is the layperson going to find ways of reducing their reliance on sort of--" I don't wanna say lower skilled; it's just a different kind of skilled... I'm thinking, for people like us, as software engineers, who presumably will be impacted by this to some degree - and we are, right? ...for us there's also the micro-spectrum whereby if you're on sort of the lower end of that spectrum, and if the only thing we were doing is generating CRUD, well, I'm sorry, your job is indeed in jeopardy, if that's the only thing you've been doing with your career.

On the opposite side of it is the highly-specialized person who understands a business problem, has to debug and troubleshoot, and talk to people, and integrate different things, and --

**Sharon DiOrio:** Institutional knowledge...

**Johnny Boursiquot:** Right. All that stuff. I mean, I don't see that skill. I don't see that being replaced by AI anytime soon. Am I wrong here?

**Steven Pyle:** I don't think so, personally...

**Sharon DiOrio:** \[00:35:56.27\] How many of those people do we need?

**Johnny Boursiquot:** And that's the thing, right?

**Sharon DiOrio:** Is this a game of musical chairs? Should we be looking for our chair now?

**Johnny Boursiquot:** No, any business is thinking "Do I need 1000 engineers, when 500 will do?"

**Kent Quirk:** I mean, I think, as we've all said, it makes us more productive today... So I'm writing more lines of code per day than I was five years ago.

**Johnny Boursiquot:** Right. Right.

**Kent Quirk:** So that's good. But we all kind of expect productivity to continue to rise... So this is a productivity tool.

**Johnny Boursiquot:** Mm-hm. Not a replacement tool.

**Kent Quirk:** We're also using languages that are more expressive than they were. The code I write in Go is probably one third the length of the same code I write in C++, or used to write in C++ back in the day... So that's also a productivity boost at some level. At least if you believe the old metrics that it's basically you can write the same number of lines of code per day, no matter what language you write it in...

**Steven Pyle:** But I think actually knowing how to use it is a skill to put on your resume \[unintelligible 00:37:00.04\] Even if I didn't want to use it, I would, because it's gonna be a point where like "I use Copilot all the time." "Oh, good. \[unintelligible 00:37:14.28\] point for you to get the job."

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

**Kent Quirk:** \[00:40:15.27\] I think there are companies that are working on that product. I feel like I've even seen a product announcement like it... But yeah, I mean, the thing about it is you can take one of these LLMs, and you can essentially subset it, and you can make a tiny, compact LLM that will run in a box that you can actually stand on your desktop... And then you can further train that with new information. So that's exactly what you want to do here, you want to take a coding-centric LLM, like a Copilot, and create the mini version of it, and then train it on your repositories, and now it knows how to write your code, and it's also not talking out to the cloud while doing it. So there's got to be businesses like that, if there aren't any.

**Sharon DiOrio:** And this is where we redact all of this and put it into our business plan, right? \[laughter\]

**Johnny Boursiquot:** So hang on, hang on... I have an actual question here to sort of move us along. If you're going to school right now, or thinking about going to school for a computer science degree, or some technical degree, where some form of programming is involved, and things of that nature... Again, for all of us on this call I know it's been a long time since we've been in school. But if you were to go back 30-40 years, and you're now entering school and thinking about a computer science degree, how are you approaching this decision?

**Kent Quirk:** We probably all have spicy takes... \[laughter\]

**Steven Pyle:** Wait, of whether to use AI or not? Or...

**Sharon DiOrio:** No. Whether to study CS, or some other industry that you think is ripe for being overtaken.

**Kent Quirk:** I think, personally -- I mean, if you like computers and want to work in this field, you damn well better know how to use AI... I would hope you find a program -- like, there's some fundamentals of computer science that are probably worth knowing, but I don't really need you to be able to... I've said this for decades now, that I don't really care if you can write every possible sort algorithm from the algorithms book, or know how they all work. That kind of stuff is a whole lot less important, because I can just get that off a library that somebody else has written. But you should understand a lot of the basic principles and how to use an AI to achieve them... But when I think about -- so I spent 15 years in game development. If I say to a class "Go out and create an original game using words", or something like that as a class assignment, that's not something you can type into an AI very easily. I mean, you're gonna get something maybe, but it requires some creativity, it requires putting some pieces together, it requires using various components... And it feels like that's something like that, and being able to work with people is a better fit.

**Steven Pyle:** Absolutely. I've had conversations with my kids that are in college right now about this very thing. And to me, it's more important to get a broad, a generalist, foundational education. If you want to do comp-sci, great. If you want to do -- I was like a psych major. What your major is I think is less important than getting more of a broad set of skills, and a broad base of learning. And that's what I tell my kids. You can pick up the rest later.

**Sharon DiOrio:** Are we being fair though, just because we did pick up the rest later? We also caught the wave at a time when knowing how to spell HTML got you a job. \[laughter\] And thank God for that wave.

**Steven Pyle:** Well, not for me...

**Kent Quirk:** \[00:43:48.08\] So I've worked with a couple of -- with several junior engineers over the last few years, and some of them have done very well and some of them haven't... And the ones who have done well are mostly the ones who know how to work, that know how to study a problem, figure out what needs to be solved, find the problems that exist within it, and then address those things at whatever level they're capable of addressing them. So the brilliant computer scientist is less important than being able to like have a real conversation, and understand the real problem, and work with other people. So I want you to get that out of college, so I want you to be going to a college where a lot of your work is working in teams to make things happen.

**Sharon DiOrio:** Oh, God, please no... \[laughter\] I still haven't processed the trauma from working on teams in college... I get what you're saying though.

**Kent Quirk:** Yeah. I know what you mean, because you get the --

**Johnny Boursiquot:** Yeah, it's the aspirational...

**Kent Quirk:** Yeah.

**Johnny Boursiquot:** So one of the values I think you're supposed to derive out of a college experience is -- learning to collaborate, yes, that's definitely part of it. But the whole learning how to think thing, right? That's --

**Sharon DiOrio:** Critical thinking?

**Johnny Boursiquot:** Yeah, critical thinking...

**Sharon DiOrio:** And inductive reasoning, deductive reasoning.

**Johnny Boursiquot:** It's one thing --

**Sharon DiOrio:** Philosophy was actually good for that stuff.

**Johnny Boursiquot:** I know. A very underrated --

**Kent Quirk:** Liberal arts degrees... Yes, please...

**Johnny Boursiquot:** \[laughs\] Philosophy is a very underrated topic in college, but... I digress. So I want somebody coming out of college to know how to ask the right questions, right? It's not - -the difference is, again, to use AI, it's the difference between going to something like a ChatGPT and saying "Hey, I want to use Bogosort, the worst-performing sorting algorithm ever produced... I want to use Bogosort on this data. Give me the code sample for it." Gen AI will gladly oblige. It's different to basically say "Hey, I have data that is shaped like this. What is the best kind of sorting algorithm for this particular objective of mine?" You're trying to solve a problem, you're gonna get a solution at the end... But knowing how to ask the right question to me is the value of a college education.

So I'm not saying people going to college or thinking about going to college shouldn't because AI; that's kind of silly. That's a very bad reason not to go to school, not to get an education, of any kind, whether it's college, or professional development training, or buying a course, or whatever it is. You should always be learning, always be learning. Regardless of what the hype says, always be learning. But it's a whole different thing to know enough to be able to ask the right questions, I would say.

**Sharon DiOrio:** Wasn't there like a tendency of interviewing where they ask the candidate a really hard ask - and I'm not talking \[unintelligible 00:46:49.27\] but the whole intent of the exercise is to understand how the brain kind of processes the problem, and how it seeks more information, and how it kind of builds hypotheses etc. I don't know where I was going with that, but...

**Johnny Boursiquot:** I heard \[unintelligible 00:47:05.08\] I was like "Yup, that checks out." \[laughs\] Okay, okay. So my next question then is basically kind of along the same lines... If you were entering the field today, as a professional -- let's just put it this way. All of us here are professionals, many years of experience... If you're about to transition into a new job, where you know AI might be a requirement, or even if they if it's not explicitly stated, how are you preparing to make that switch? What are you doing right now?

**Sharon DiOrio:** \[00:47:46.03\] I'll give a very pragmatic answer. I am moving away from frontend CRUD, or doing my best to, even though I'll be honest that's what's on my resume and what I get the most calls for... I think the frontend CRUD is going to simplify -- it's already kind of distilling down to a handful of frameworks. And even those frameworks are used in even a more prominent way... So I'm not seeing that as a growth industry. And I'm really sad if you just went through a bootcamp and they told you you were going to make a lot of money... Maybe that was the case five years ago, but it's a different world. Personally, I'm getting closer to the data again. I don't think data is going to go anywhere, and I think that they're always going to need people to feed the voracious beast of AI when it comes to analyzing data, and understanding data. And if you're a frontend person who hasn't dealt with a lot of data at any level of the stack other than JSON, I would honestly start looking at what goes into creating the API responses that you get, for instance. Just start looking a little deeper.

**Johnny Boursiquot:** So if you're a frontend dev and the only thing you've ever done is consume APIs, and send something in, something that comes back out the black box, now it's time to start investing.

**Sharon DiOrio:** It might be time to start. And maybe you're doing a bunch of GraphQL and you have experience as an architect in that. Fantastic. That's a step in the right direction, and I would still keep going; learn what you can about data. It's not going anywhere.

**Johnny Boursiquot:** But you've got to go all the way back.

**Sharon DiOrio:** Maybe. Maybe. \[unintelligible 00:49:28.28\] Gotta start somewhere.

**Johnny Boursiquot:** Hey, SQL never goes out of style, no matter what they tell you.

**Sharon DiOrio:** No, it doesn't. I wrote the Mongo way for a while...

**Johnny Boursiquot:** I'm sorry... \[laughter\]

**Kent Quirk:** I'll apologize now. \[laughter\]

**Steven Pyle:** I like Mongo.

**Kent Quirk:** I actually still do, but...

**Johnny Boursiquot:** It's fine, it's fine. I'm just being spicy.

**Sharon DiOrio:** It just shouldn't be used for a lot of the things that it was used for.

**Kent Quirk:** I still think there is plenty of room for new engineers. I think there is plenty of work still to be done. The learning process is probably accelerated. When you're a E3, first or second or third year engineer, trying to get stuff done, it's less about just figuring out how to write code, and more about figuring out how to assemble -- you're figuring out what questions to ask... Like you said, Johnny, it's like "What needs to be done, and what's the right way to do it?" That's the stuff you're learning to teach your AI to answer your questions for you maybe, because the questions you're answering are ones that are within the capability of AI when you're early on in your career. So you need to be able to learn how to manage that system, put it together, be productive with it.

So there is still, as far as I know, a college premium. If you don't go to college, you're not going to make less money in your lifetime than if you do go to college. I think that premium has been declining in recent years, but I still think it's worth it from what I've been best able to understand. So I'm still an enthusiastic supporter of going to college and getting a good education, but I do think even more than I used to think that a liberal arts education is really powerful. And you shouldn't just concentrate on learning the tech of the moment, whether it's AI, or Photoshop, or whatever it might be. Learn more than that; learn how to -- go to your philosophy class. \[laughter\] Learn how to write.

**Steven Pyle:** Even if it's eight o'clock in the morning.

**Johnny Boursiquot: Johnny Boursiquot:** Learn to think. Learn to write.

**Kent Quirk:** Despite AI translators, it's still really useful to be able to speak more than one language. I can't tell you how many people I met in the game industry, some of the top people in the game industry who all seem to have a linguistics background. Fascinating.

**Johnny Boursiquot:** Interesting.

**Sharon DiOrio:** And music.

**Johnny Boursiquot:** Interesting.

**Sharon DiOrio:** I have neither of those backgrounds. Bachelor of fine arts...? \[laughter\]

**Kent Quirk:** That's as good. I mean, that goes right in that list, in my view.

**Sharon DiOrio:** \[00:52:08.00\] Yeah. And it turns out my major was actually a very small number of hours required... So every other hour I had was like I had so many electives. I was all over the school. It was great. I highly recommend it if you can do it. But there's so many -- the push to get job skills, and not waste your mom and dad's money on basket weaving... \[laughter\] I'm on team basket weaving. Sorry.

**Steven Pyle:** I mean, I went back to get a degree in software engineering afterwards, halfway through my career. But that was later. It wasn't really -- it was useful, and I'm glad I did it, but it wasn't necessary.

**Johnny Boursiquot:** You know, I'm wondering if that's still going to be the case for this generation. Because like you, I actually got my bachelor's degree -- I have two degrees. I have a bachelor's and a master's in science. My bachelor's came while I was already 10 years out in industry, and I completed my degree one class at a time... I took my time about it, because I didn't need to do to get a job and be paid. So I just took my time about it. I'm wondering -- and same thing for my masters. Online, I never showed up ever to a class, and I took my time, and I did it. And I'm wondering now if the playing field has changed, right? Because you can't just go to a bootcamp, or at least, from where I'm sitting -- and again, I'm not knocking bootcamps or things like it... I'm just thinking that it's that much harder now for somebody who's coming out of a boot camp with no real world experience to get a job.

**Kent Quirk:** Well, that's the thing... The people I have seen most successful out of bootcamps are the people who spent eight years doing something, almost anything else, and then decided to switch and went to bootcamp to learn the skills necessary to make that switch into software engineering. The people who go to a bootcamp thinking they're going to learn everything they need to do, but they've never worked a day in their life, and don't know even how to attend a meeting, or have a useful conversation about what needs to be done - those people aren't successful out of bootcamps. And I've seen some of both.

**Sharon DiOrio:** I'd agree with that.

**Steven Pyle:** Does that mean to the software developer that it can be learned, like anybody could do it? Or is it like you've got it or you don't got it.

**Sharon DiOrio:** I don't agree with that. I think it's definitely a scale.

**Johnny Boursiquot:** Yeah, degrees, right? Shades...

**Sharon DiOrio:** Yeah. I don't think that there's a line where you draw the line and say... \[laughter\] Sorry, you guys can't see, but for some reason a thumb appeared in front of Kent's face \[unintelligible 00:54:51.17\]

**Steven Pyle:** That was weird.

**Sharon DiOrio:** So what was I saying?

**Steven Pyle:** The degrees of -- like, either you've got it or you don't.

**Johnny Boursiquot:** Sounds like you want to create a new principle, the DiOrio principle \[unintelligible 00:55:04.16\]

**Sharon DiOrio:** No, I don't believe there's a line that like "Nope. You go, you don't." I believe that -- I'm not a runner. I have tried at various points. Could I get better at running? Absolutely. But I'm funny-shaped, I'm a peasant stock, and I don't run. I'll walk all day, and I'm strong at the plow, but I'm not going to be a runner. I think it's that same kind of like if you want it and you enjoy it, even if you're not naturally "gifted", yeah, you can make that work. I've bumped into plenty of those people. And largely, those people who are successful, again, are the ones who have industry knowledge, or something else to bring to the table... But yeah, then there's people that I've met who are just naturally gifted. They just see things in code, and... And most people aren't the be-all-end-all either, because I've worked with enough that type, that it's like, are they 10x developers, or do they just write 10 times the code that nobody else can work with? Okay, I went way off into the weeds on that one, I'm sorry.

**Johnny Boursiquot:** \[00:56:08.06\] This is this is what this is for. Let it out, let it out. This is therapy.

**Sharon DiOrio:** Good. Because my therapist doesn't really want to hear me rant about this.

**Johnny Boursiquot:** What? Even if you paid him? Oh, my gosh... "I'm gonna say a lot of words. You may not understand half of them. But..."

**Sharon DiOrio:** \[unintelligible 00:56:27.16\] Okay, so before we transition to unpops, any parting advice for old-timers like us?

**Steven Pyle:** Old timers?

**Johnny Boursiquot:** You don't like that term? Steve's like "I'm not... Stop lumping me in." \[laughter\]

**Kent Quirk:** So I've got one... You go first, Steve.

**Steven Pyle:** I mean, it's not just for old timers, I think it's for everybody. The skill to have is to always be able to adapt. Everything's gonna change. That's the constant. And as long as you can continue to face up to the new tech, or something that's different, and be able to adapt to it and dealing with it, I think you'll be okay.

**Kent Quirk:** I think what I was going to add there is -- I mean, I've done the full pendulum from senior management to individual contributor, and a few years ago I swung hard back to IC... And I never really let my coding fingers get decayed, but I can be a strong contributor... You can come back from management. Management doesn't have to be a permanent part of your career is I guess what I'm saying. As you grow, you can move into management, you can experiment with management, you can move back out of it again, and that's just fine. And you shouldn't feel like "Oh, the only way up in my career is to become an executive" if that's not the thing you love. And for me, it turns out that I love writing code a whole lot more than I love managing people. I like both, but the code part is more fun.

**Sharon DiOrio:** So people our age... If you haven't been contributing to your 401-K, throw money \[unintelligible 00:58:14.28\]

**Johnny Boursiquot:** You're screwed.

**Steven Pyle:** Yeah...

**Sharon DiOrio:** Seriously, the hardest thing I think as you become a developer who's got more than a couple of years under your belt is how to unlearn. There are patterns that I have carried around with me in a suitcase because they worked for me 20 years ago. And I keep doing it a certain way, because it still works... It's just I never thought the question, until somebody always more junior than me says "Why do you do that?" And it's like "Oh... Yeah, that was two languages ago. I don't need to do that anymore."

So be humble, don't be afraid to let go of some long ingrained habits, and especially before AI starts sucking them up and they start recycling... But --

**Kent Quirk:** Bootstrap called. It wants its web back. \[laughter\]

**Johnny Boursiquot:** It wants its dollar sign back...

**Sharon DiOrio:** Yeah...

**Johnny Boursiquot:** Oh, man... jQuery, Bootstrap... That was the \*bleep\* back in the day. Every new project started with just those things, building blocks.

**Sharon DiOrio:** Lodash, man...

**Kent Quirk:** Oh, Lodash. Lodash is still cool, isn't it? \[laughter\]

**Johnny Boursiquot:** Sure, Kent. That was like 166 frameworks ago. That was two dozen frameworks ago.

**Sharon DiOrio:** I don't worry about seeing whether or not it's in the language, I just use Lodash.

**Johnny Boursiquot:** \[00:59:57.28\] Well, my advice would be - you know, it continues to be... Maybe I'm just stubborn. I don't know. I'd like to think not. I'd like to think I try to stay on top of things, and can spot trends and whatnot... But one thing that has sort of cut through any hype cycle for me has been the principle of sort of being a T-shaped developer. Be sort of knowledgeable in a lot of different things. Be a generalist. But have one strong -- like your master of one, right? What's that old saying? Master of one --

**Kent Quirk:** Jack of all trades?

**Johnny Boursiquot:** Yeah, jack of all trades, master of -- I think the joke is master of none, but the actual saying is master of one. So I've tried to sort of live that by being very good at one thing. And contrary to popular belief, my one thing is not Go. I love Go, I write Go every single day, but my one thing is being able to build a solution base in the cloud. And whatever language I have to use, whatever thing I have to do, that's my thing. And I use, and I happen to be using Go; that's my favorite language. So whatever opportunity I can get to use it, it has never let me down, so I will use that... But develop your generalist set of skills. And if you want AI to be your one thing, then be about it. It's fertile ground. There's all kinds of ways you can come at this, whether you want to be involved in model training, or you want to be in fine-tuning, or you want to be a researcher, or you want to be the people that use it to build things... Find whatever side of it you want, and dive deep, but don't neglect everything else. Because at some point, gen AI or whatever incarnation that AI goes through for the regular everyday person, the hype is gonna die down. And make no mistake, the hype around AI will die down eventually, as with all hype. When the dust settles, and maybe what we consider new and innovative technology today become simply part of life, simply becomes part of the way things are built... The next hype is going to come, but your ability to connect with people, your ability to understand business problems, and to translate whatever tool you're using, be it AI or something else, to translate these things into actual working code and solutions, however much AI you want to use in the production of that solution is up to you... But knowing how to translate human problems into working solutions, however much code is involved in that, that skill set right there never goes out of style. So whatever you must do to maintain that sharp edge, that's my advice. I think it's time for unpops. Let me play the tune.

**Jingle**: \[01:03:03.11\]

**Johnny Boursiquot:** You know the drill. I want -- well, maybe you don't know the drill. So for those who are listening to the show for the first time because the title caught your attention - first of all, welcome to Go Time. But the way this works is that you can have a spicy take on anything you want, it doesn't have to be tech-related... So my guests here were tasked with bringing some spicy unpops. Who wants to go first? Don't make me start calling out people... \[laughter\]

**Steven Pyle:** Alright, I'll go and get it out of the way. This is gonna probably get me kicked off \[unintelligible 01:03:51.26\]

**Johnny Boursiquot:** It's fine, we're at the end.

**Steven Pyle:** Okay, cool. I love Go, I try to use it as much as possible...

**Johnny Boursiquot:** Careful, careful what you say next... \[laughter\]

**Steven Pyle:** \[01:04:08.29\] But... Yes, it's great. Go is great. But if I'm doing web development, I'm gonna go for Laravel on top of PHP almost every time.

**Kent Quirk:** Oh, spicy.

**Johnny Boursiquot:** Listen, listen, have you heard of our new savior, HTMX Go plus HTMX in Templ, or some other thing? Yeah, it's the new hotness. It's the new hotness. So you should give it another try. So I forgive you for such blasphemy on Go Time, but... \[laughter\]

**Steven Pyle:** I'll give you another five years, you'll catch up to Laravel. \[laughter\]

**Johnny Boursiquot:** Wow...! Okay, alright, alright Steve...

**Sharon DiOrio:** And now Kent's open up a repo this weekend.

**Kent Quirk:** New language \[unintelligible 01:04:56.19\]

**Sharon DiOrio:** That wasn't my unpopular opinion, though.

**Kent Quirk:** This won't surprise any of you here, but my unpopular opinion is that cryptocurrency is worthless. Having spent two years doing it, I came away convinced -- and trying to create what I was thinking of was going to be the ethical cryptocurrency, I came away with the conclusion that pretty much everyone in cryptocurrency is either a crook, or an opportunist who wants to take advantage of the crooks, or hopelessly naive and not paying attention to what's actually going on. There is no useful use case for cryptocurrency still, all these years later. Web 3 is a disaster, and blockchains are not useful tech. And so yeah.

**Johnny Boursiquot:** Kent, did you create a s\*\*tcoin?

**Kent Quirk:** Yes. I mean, essentially... \[laughter\] There were those who would have called it a s\*\*tcoin. It wasn't based on -- it was a new tech s\*\*tcoin, but it was still \*bleep\*, yes.

**Johnny Boursiquot:** Oh, man...

**Kent Quirk:** I ran away screaming.

**Johnny Boursiquot:** Ah, beautiful.

**Sharon DiOrio:** Well, I don't think that's an unpopular opinion, as you might have thought it was... Or if you would have said that three years ago, or four years ago...

**Kent Quirk:** Yeah, it's true. It's more popular than it used to be, I guess. Just ask SBF.

**Sharon DiOrio:** Your unpopular opinion is gaining popularity... Which is how it should go. My unpopular opinion is that single-letter variables outside of a loop should just be omitted, shot on site, \[unintelligible 01:06:35.01\] out with the trash, shot from space... Yeah.

**Kent Quirk:** I feel like you're talking to me again.

**Sharon DiOrio:** I'm definitely calling out every Go developer... \[laughter\] I'm not team Java file with paragraph name either... I think there's room somewhere in the middle.

**Johnny Boursiquot:** You came on a Go podcast with guns blazing...

**Sharon DiOrio:** And I will live and die by it, sorry.

**Johnny Boursiquot:** Oh, man. Alright, alright. Cool. Cool.

**Sharon DiOrio:** If you guys couldn't convince me, nobody's gonna.

**Johnny Boursiquot:** True.

**Sharon DiOrio:** \[unintelligible 01:07:15.19\]

**Johnny Boursiquot:** Oh, man... Yeah, definitely all of us on this call \[unintelligible 01:07:23.10\] I'm not sure if you've done a ton of Go recently, but yeah, at least Kent and Steve and I take what you say to heart. \[laughter\] We do, we do.

**Sharon DiOrio:** Sure you do.

**Kent Quirk:** I just had a conversation today with one of my teammates about naming return variables, which is its own little spicy Go take...

**Johnny Boursiquot:** Hey, that's actually -- Kent, why don't you spice up the whole return variable conversation?

**Kent Quirk:** \[01:07:55.19\] So Go allows you to have -- when you have a function signature, normally, idiomatic Go simply names the types of the things that you're returning. For normal functions you return one thing, and it doesn't really matter. But you can return multiple values. And if you're returning more than one of the same type, then it can get confusing. If your function is trying to return a bool and an error, then you can't really mix those up. But if you're trying two bools, then you might want to give them both names, which you can do in Go... But doing so implicitly defines them. And then they have values, and they get the default zero value, and then you can return without decorating the return with the values you're returning... Which seems to be an anti-pattern. Using blank returns with named return variables is probably not a great pattern. But using blank returns with named return variables, or non-blank returns with named return variables you can do; you can return xy, and that's fine.

Naming them can be helpful when you're like hovering over them in an editor, and it shows you what they mean... And again, if they're different types, it's probably not that big a deal. If they're the same type, you probably want to name them. But this particular developer was like "I just want to not call this not error, but some particular type of named error." And that was maybe -- I didn't think it was as helpful as it could have been.

**Johnny Boursiquot:** When I teach Go, I always advise strongly against named return variables, and their subsequent naked returns. I'm not sure why the design of the language allowed for that... And very, very -- I'm not saying I've never seen a good use of it, but it's very rare in my...

**Kent Quirk:** Naked returns is the biggest problem. And that I think you should avoid.

**Johnny Boursiquot:** Yeah, yeah. You should avoid that.

**Steven Pyle:** But the question is is the AI gonna suggest one or the other?

**Johnny Boursiquot:** Haha! No, but here's the thing - you can always tell it "Hey, do not use naked returns", and it'll give you new code. Again, you have to know what the right question is to ask. You have to know what a naked return is in the first place, right?

**Steven Pyle:** Right, right.

**Johnny Boursiquot:** But actually, this is along the same lines of when initializing structs, if you have multiple fields of the same type, do not use the positional way of initializing your structs. Always use key-value pairs. Because if you have two things that are a string and you change the position of the strings, all of a sudden you think you're initializing one thing, but you're initializing the other thing. So yeah, always use key-value pairs when initializing your structs, not the positional arguments.

Yeah, so onto my unpop. It has nothing to do with tech, or anything like that... I think if you are a YouTube influencer peddling -- actually, this is actually going to be a... I have two unpops. So here's the first one. Here's the first one. One actually led to the other. Hang on, I've gotta take another drink of my scotch while I unleash this one... Alright, here's the first one. If you are a YouTube influencer peddling AI fear, I think you should reevaluate your life choices. Because you are part of the problem. \[laughs\]

**Kent Quirk:** What kind of AI fear are we talking about?

**Johnny Boursiquot:** "It's gonna take our jobs, and oh my God, you'd better run for the hills..."

**Sharon DiOrio:** He says as we kind of profited off of it with our clickbait title...

**Johnny Boursiquot:** Right, right. Clicks and views. \[unintelligible 01:11:17.03\]

**Sharon DiOrio:** We use our powers for good though.

**Johnny Boursiquot:** Yeah, of course. Of course. First thing they tell you, like and subscribe. And hit that bell icon, so you don't miss the next rant. \[laughter\] So yeah, if you are one such influencer -- I'll take it back. You don't have to reevaluate your life choices, but I would ask you to not continue to propagandize AI. What you can do better is to help people level up, to help people meet the new challenge that this new innovation and technology is bringing... Because at the end of the day I think it's a net positive. It's transformative technology.

\[01:11:58.10\] I'm sure when farmers saw their industry being industrialized with machinery and everything else, I'm sure some had the same sort of gut reaction and knee-jerk reaction of trying to push back on that. So this is just another innovation cycle, and all we have to do is -- well, it may not be simple or easy, but we have to level up as professionals, and meet the new stage that we're playing on. So that's my first unpop.

The second unpop hat - and it has nothing to do with tech, but rather it has to do with the fitness industry. So I've been on a fitness journey for a little while... And as with all things, whenever I don't know much about things -- I didn't know much about fitness like a year ago, and I went to YouTube, and started googling things, and found fitness YouTube, and lots of influencers peddling lots of different things, and approaches, and "Do this exercise, don't do that exercise", blah, blah, blah... So there's a lot of stuff out there, y'all, I'll tell you this much. But one thing I've noticed, or rather my unpopular opinion is that if you are going into this world of fitness YouTube, avoid any influencer that is telling you "This is what you can do specifically for your abs." Because there is no such thing has spot reduction of just one area of your body. That is not a thing. You can't be walking around with a six-pack abs, with the rest of your body just all loosey-goosey. That's not a thing.

**Kent Quirk:** \[unintelligible 01:13:32.02\]

**Johnny Boursiquot:** That's not a thing, that's not a thing. The body loses weight in proportion, and everything works together... So yeah, find yourself some reputable -- hopefully people with some kind of good knowledge, some sort of credentials ideally, that can give you decent advice. It might take you a little while to find the good ones, but they're out there. So if that's your journey, if you're on a similar journey as me, do a little bit of work, do a little bit of research and you'll find a good one. Some stuff is gonna sound outlandish. And if it sounds outlandish, it probably is. So watch out out there.

**Kent Quirk:** There's a whole lot of woo and hype in that space. Find the ones that aren't.

**Johnny Boursiquot:** Oh, yeah. Indeed, indeed.

**Sharon DiOrio:** And it never ends. It doesn't follow the hype cycle.

**Johnny Boursiquot:** Nonstop. Nonstop. It's nonstop. It really is. That whole fitness and diet industry - that is fertile ground. That is evergreen territory. I think I might start a YouTube channel on fitness tomorrow, because I'll probably get subscribers and views. Clicks and views.

**Sharon DiOrio:** Using AI in fitness...

**Johnny Boursiquot:** Using AI in fitnes, here I come. Here I come. This was awesome, and again, we don't disappoint when we get on these rant-filled sessions...

**Sharon DiOrio:** Now you're wondering what we didn't say...

**Johnny Boursiquot:** I know, right? We have to keep this podcast still family-friendly... But yeah, this was awesome. Thank you all for being here, as usual. We'll chat again with each other, and maybe not on a recorded session, but in a couple of weeks and whatnot... But yeah, this was fun, letting the audience, mostly folks who listen to the podcast, kind of get a peek into my world, and what a conversation with my friends looks like... So yeah, thank you all for being here, Steve, Kent, Sharon. Always a pleasure.

**Kent Quirk:** It was fun. Thank you.

**Steven Pyle:** Thank you, Johnny.

**Johnny Boursiquot:** Catch you next time.
