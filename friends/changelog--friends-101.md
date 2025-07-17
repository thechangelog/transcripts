**Adam Stacoviak:** Alright, Abi, we're here to talk about measuring these AI agents that are infiltrating our organizations...

**Jerod Santo:** They're everywhere!

**Adam Stacoviak:** ...our lives, they're making us, in some cases... In some cases we do it willingly, but... Somebody's got to track these things. How are you doing it?

**Abi Noda:** Well, it's still early days, but...

**Adam Stacoviak:** Okay...

**Abi Noda:** ...the name of the game right now is, firstly, being able to understand how are we using these AI tools, how are developers incorporating them into their workflows? How much value are we getting out of them? What's the ROI? Are we spending too much, too little? How do we right-size the amount of spend? And then how good are these agents, is the other question? And how do we measure AI?

**Jerod Santo:** Gosh, are you asking us? We're asking you.

**Abi Noda:** I'm setting the scene.

**Adam Stacoviak:** Just setting the scene. It's early days, you said though. It's early days. So you've been in the business of helping organizations understand the developer experience in terms of morale, ability, code being committed, how that affects the organization, how that affects the bottom line... So you've got organizations that essentially hire you as a service, or a consultant, or however you want to frame that, and you help them determine if their teams are successful, and if code is being deployed properly, and all that good stuff. You've got to have some sort of pressure from those folks, because they're top-down at this point. They're saying "Okay, developers, you must begin to use this, because we're seeing this dramatic increase", and they've got to deploy it in ways where they can test it and try it. So what kind of pressure have you seen from your side?

**Abi Noda:** Quite a lot. I think I can speak for all of us that I don't think I've ever seen anything like this in the industry where those at the top are so bought into the promise of a new technology, and are pretty aggressively pushing it down. A good example of that is -- one thing that's really common is for top-down tracking now of just adoption and utilization. So lots of organizations are looking at monthly active, weekly active, daily active usage by developers, they're segmenting developers into different cohorts based on whether they're super-users, or low, medium, moderate adopters... And then trying to study, "Okay, what is that getting us? Are the people who are using AI more productive? Are they happier? Is their code better or worse?" But yeah, the pressure is unlike anything I've really seen before.

I was just talking to some researchers at one of the prominent AI developer tool vendors, and they said that a lot of this usage that they're seeing, especially of agentic tools right now, they believe is more fear-driven than utility-driven... Meaning that people are using a lot of these tools even when they're not really effective right now, because they fear that not doing so will mean that they could become obsolete. So that was a pretty interesting finding.

**Jerod Santo:** I blame Steve Yegge. He comes on our show, he starts telling people "You will be replaced. You'd better adopt these thing right now...!"

**Adam Stacoviak:** "The IDE is dead..."

**Abi Noda:** The AI vendors have done a fantastic job in their marketing of infecting the minds of leaders. I even saw Anthropic, what they've put together, like an economic research organization to study the impact of what's going to happen... And it's like the best PR stunt ever, I think.

**Jerod Santo:** For sure. Well, have you guys been surveying? Have you been collecting the data? Do you have anything definitive, or that even just gives us a glimpse into what's actually going down on the streets?

**Abi Noda:** Yeah, so we are collecting data from over 400 different organizations now. It's both through surveys, as well as looking at their actual telemetry. So DX connects to pretty much all the leading AI coding tools today, so whether that's Copilot, Cursor, Windsurf, Claude Code etc. So we're ingesting that telemetry as well, which gives us a real time view into developer usage and utilization.

Some of what we're seeing - first of all, adoption is rising extremely rapidly, since really about three or four months ago. I think that's when we started seeing the top down mandates, that's when the message became "You've got to get on board or you're going to be left behind." So we're seeing that in the data.

In terms of impact, we see a number of really interesting things. So first of all, on average - and keep in mind, this is... Let's call it Q2 2025, because this space is evolving very quickly. On average, developers report saving about three hours per week, thanks to AI tools.

**Jerod Santo:** Okay.

**Abi Noda:** Now, when you think about -- put that into context. Well, that's about - what, 5% to 10% of their work week? So we're talking about a 5% to 10% boost. Now, that is a lot less than maybe what you might expect if you were just looking at the headlines, or scrolling Reddit... One piece of research it aligns with is Google. I don't know if you guys saw, they came out about two or three weeks ago saying "Hey, based on our research, we're seeing about a 10% productivity improvement with our developers thanks to AI." So that's one data point.

\[00:08:13.12\] A couple other data points, and we can kind of dive deeper as you guys wish, is - one of the strongest relationships we're seeing with data is actually with engagement, meaning developer job engagement. And I think that's really interesting, because when you hear some of these OGs like Kent Beck getting into AI augmented coding... Like, one thing you hear them talk about, maybe more so than anything about their productivity, is how much fun they're now having. It's just a more enjoyable paradigm of working. And so we're seeing that reflected in the data. You don't see that being talked about in the press. I don't think people maybe care about that as much right now. It's all about productivity.

The last thing I'll share is, whereas we are seeing that around 10% lift in developer time savings, we're not seeing that strong of a correlation in terms of something like code throughput. I mean, actual rate of deliverables being shipped. So that's a little bit perplexing. That's a metric a lot of organizations immediately want to look toward, is "Are we shipping more PRs because of...?"

**Jerod Santo:** Sure.

**Abi Noda:** And there is a small relationship, but it's not -- we can't say it's like 10% plus lift across organizations right now. That raises a lot of interesting questions as to "Well, why? And where are those time savings going?" Those are some of the interesting questions.

**Adam Stacoviak:** This research is based on Q2 of this year, is that right? So this time window that you're speaking of is basically just Q2.

**Abi Noda:** Q1 and -- it's really H1 data.

**Adam Stacoviak:** Okay. All of this year, 2025.

**Abi Noda:** Yeah. And I should add that we saw a notable rise in a lot of those numbers compared to H2 of last year. So particularly the adoption metrics, the time savings - those have increased materially since H2 last year.

**Adam Stacoviak:** I don't know about you, Jerod, but I want to talk about the fun. I feel like we've been talking about all this productivity, and the FOMO, and the fear, and the slaps in the faces, and the "You're going to lose your job. Oh, my gosh." Let's talk about the fun. Can you talk about the fun, Abi? Like, what do you know about this Kent Beck fun aspect? What is the unlock here that's making this paradigm shift more fun?

**Abi Noda:** You know, I think when GitHub Copilot first came out, it was your AI pair programmer. Right?

**Adam Stacoviak:** Your buddy.

**Abi Noda:** Your buddy. And I think that a more interactive, more social form of doing development work, having someone, or in this case an AI, to where you can get unblocked when you're just in a brain funk, or get really fast feedback on something you're trying to do, or that you just did... I think that's more fun. We've heard that from our engineers, we see that out in the field when we're doing research, and you see that from folks like Kent Beck, who are really -- or Gene Kim, who are talking about how much fun they're having. They haven't maybe been doing as much coding in their careers recently, but they're getting back in, because they're having so much fun.

**Jerod Santo:** Sure. Nick Nisi - I was making fun of Nick a few weeks back on the show, maybe a few months back, because of all of his AI subscriptions. He was confessing all of the money he was spending. He was telling me how he was using it, and I kind of made fun of him and said "Well, you're just lonely." Like, you don't actually need help. You just want someone to be there with you. He's like "Yeah, totally." And for him, that is the fun, is it feels more alive to just not be alone.

\[00:12:03.00\] Now, people who pair-programmed in the past, or do at their jobs know what that's like. It can also be exhausting, because you're interacting, you're trying stuff, you're bouncing stuff off a person. And most of us don't have that. I mean, very few orgs buy into "Let's put two developers on one feature." I mean, that just is a very hard sell. And so people who do it swear by it, but very few people will do that, because it just doesn't make sense in the leadership's eyes; it's like, "Okay..."

But the pair programming aspect of this, and just having someone that -- it's like the rubber duck, but the rubber duck talks back, and has ideas, and has information. And that's really powerful for I think a lot of us. For me personally - Adam said it, unlock. For me, I'm just doing stuff that I wouldn't have tried before, because I just don't have time, and I don't have two hours for this random idea I just had, where I thought "This would be nice. Nah, that's too much work." Like, I've done that constantly for the last 20 years. And now I'm like "This would be nice. I'll just go have Claude try it while I'm doing something else." And you feel like somebody else is toiling away, and you're just getting that thing done. And sometimes you throw it away, and sometimes you use it, and sometimes it just helps you with something else... And that for me, specifically - I know I've sung Claude Code's praises many times on the pod, because I'm just into it right now... I'm just having fun with that particular tool.

Once it was agentic and it was in my terminal, and it was good enough that I didn't really have to look at the code as long as I wasn't going to like check it into our main repository, and have to maintain it... I'm just coding all kinds of stuff without coding. And for me, all of a sudden I'm having fun. Whereas prior to this, like if you go back the last two years, it's been like a Google replacement, but... There's nothing fun about replacing Google. You just get faster answers.

But your 10% is interesting, because GitHub has been claiming 50% for a long time, haven't they? I mean, that's been their advertisement on Copilot, is 50%. 10% to me seems low... But that's self-reporting and analytical reporting. Like, you're doing the data on that and people say three hours a week, which would be 5% on a 60-hour week, 10%-ish, almost 10% on a 40-hour week... So yeah, 10% is just not -- I wonder why it's not higher.

**Abi Noda:** Yeah. I think first of all it's important to put the data from folks like GitHub into context. A lot of the research -- when you hear some of that kind of stuff in the headlines, a lot of that research is based on like controlled studies, controlled experiments. It's putting two groups of developers in a room --

**Jerod Santo:** It's a lab. Yeah.

**Abi Noda:** Yeah. And I think that's worth putting into context.

**Jerod Santo:** Sure.

**Abi Noda:** There's a difference between applying these tools to greenfield projects, side projects, small, clean codebases, versus applying them to legacy codebases, millions of lines of code, messy, with different --

**Jerod Santo:** Lots of context...

**Abi Noda:** Yeah. Microservices... And even in programming languages or frameworks that LLMs aren't as well suited for. There's another interesting trend we're seeing - in the same way that there's a big trend still today around "Hey, we need to break up our monolith", for a number of reasons, around service reliability, and engineering productivity, ownership... I think there needs to be more of a focus right now on all the things that have mattered for humans, as far as the kind of codebase readability, codebase optimization... I think the same problems hold true for LLMs.

I've been talking with larger organizations who've kind of come to the realization they're at a systemic disadvantage in terms of leveraging these tools, because their codebases and systems just aren't as optimized for agents and LLMs. And so I think that's a challenge for larger organizations.

**Adam Stacoviak:** \[00:16:25.10\] Something I want to mention - I'm not even qualified to really mention this deeply, so I just want to touch on it, expose it... Is back to this fun of like the buddy in the room, or the pair programmer - is this phenomenon of a human activity that we're more productive (at least I personally am) when another human is in the room? Even if they're not present for my work; just the social nature of life, I think, bleeds into that... And I wonder if that's -- maybe you know, Abi, because you've got some doctors on your staff, maybe you've been exposed or through osmosis you've learned these things, but... What do you know about like just brain -- not brain activity, more like human activity together, just being more productive in the same room. This is something that I've been studying personally, because whenever I am with someone else, for some reason I'm just able to like just have more energy, naturally. And I'm like "Why? Why is it like that?" And I wonder if that's the same thing here, with like - developers tend to, in most cases... I'm not sure what the percentages, but a large percentage is alone, solo... Sometimes pair programming, but it's more like a particular scenario. It's usually a solo endeavor; team sport, solo endeavor. Team sport, we're all making it, but solo endeavor is like "I'm making this feature" or "I'm in charge of this." And so I wonder if there's this social aspect that really is now going to be, for the most part here forever if we keep this tool in our life; now we always have a buddy. I wonder if that's a thing.

**Abi Noda:** Yeah, I'm not sure. I haven't seen research on that specifically. Adam, you sound like an extrovert, by the way.

**Adam Stacoviak:** I don't think I'm an extrovert at all. I do not get my energy by hanging out with you all here. When I'm done here, I'm going to go take a nap because I have to. I'm just -- I'm kidding, I'm not going to, but... There's some part of me that needs to decompress after exposure like this.

**Jerod Santo:** Sure.

**Adam Stacoviak:** So I'm definitely not an extrovert. I'm more introverted. But there's this idea of body doubling. There's this phenomenon of body doubling. I really wish I had Mireille Reese here, who co-hosted Brain Science with me, because she knows deeply about body doubling. And that's essentially what you do here, is you body double. You have a mirror, you have a buddy, either as a fictitious software program that can act like human, or literally a human in the room that doesn't interact with you, it's just sort of there working with you, making you productive. So body doubling is an interesting phenomenon.

**Jerod Santo:** So to the 10% - and maybe there's brain science here, and I'm not a brain scientist either... But I've witnessed in myself more speed and productivity, but like the same amount of output, because I'm just kind of like done for the day, or just like happy. I'm just like "Well--" I wonder if there's an amount of work that a human does in a day, and you can like optimize that on the margins... And some humans are probably more productive than others, and stuff, but for a lot of engineers - especially you've been in the craft for so long - you kind of have this idea of like how much you can do in a day and then you feel satisfied. And I wonder if people are - in self-reporting you probably wouldn't do this, because it might be against your self-interest... But like doing what they normally do, but just kind of doing it a little bit faster and better, and then doing something else. Having another meeting, having an R&D session, or going for an extra walk. I wonder if there's any of that in there... Because I find myself being like "I could do more, but I've already done what I was going to do, and so I'm going to take a walk."

**Abi Noda:** \[00:19:53.04\] There absolutely could be. There's a lot of theories on it... Another theory could be that in the enterprise, or in organizations, application of these AI tools is just still catching up to what -- you were talking about what you're doing with Claude Code, right? For example, we don't necessarily see Claude code as the leading adopted tool currently in organizations. And in fact, some companies I talked to are -- it's on their radar, but...

**Jerod Santo:** I was gonna say, it's pretty new.

**Abi Noda:** It's pretty new. Another theory - I saw a really good write-up on this recently - is when you actually back it... o let's say - we might need to get a calculator out here.

**Adam Stacoviak:** I'll get the calculator.

**Abi Noda:** Let's assume that at most companies engineers spend 20%, 30% of their 40-hour workweek writing code. So then if you take that 30%, and then you start playing in these numbers... Like, okay, let's say they're twice as more effective; double the productivity. So then you take 30%, you double that... What's that? So that means like 15% net -- like I said, I'm going to get this wrong doing this live. So when you start backing into it that way -- again, the 10% actually, you can see how you kind of get there... Even with a pretty high acceleration of the coding part of the job, you're kind of limited by these other factors. And that's not even factoring in all the other areas of friction, as we've talked about before on the podcast, that are holding developers back, and that are still currently constraints, even when the writing code part of their job is greatly accelerated.

**Jerod Santo:** Right. In other words, it's not as if you're doing coding 100% of your job. It's a smaller portion of your job, and if you're doing that smaller portion faster, then you're only speeding up that one thing. And as many of us know who've been in the industry a long time, is the coding part, while it can require you to sit down for six hours and do it, it's not always the limiting factor. It's not the problem sometimes. Code reviews are still very time consuming... And of course, we've got to code-review this stuff, right? The agents aren't quite good enough to just vibe code in the enterprise. Now, there are people claiming there's vibe coding going on in the enterprise, but I think most of that's rogue, and just trying to beat your colleagues at your job... Unless you have data to the contrary.

I'm interested you said Claude Code isn't very adopted. That makes sense. I mean, these agentic tools, especially -- I mean, Gemini CLI... The new CLI tools - we're talking like the last three, four months. And so we're not even \[unintelligible 00:22:51.07\]

**Abi Noda:** Yeah, Gemini is like two weeks.

**Jerod Santo:** Yeah, exactly. Yeah, I mean, things are moving very fast, and enterprises move traditionally slow, depending on the enterprise.

**Break**: \[00:23:03.05\]

**Jerod Santo:** Who is winning? Is it Windsurf? Is it Copilot? From your data, what are people using the most?

**Abi Noda:** Yeah, I don't want to -- we're coming out with some data on that real soon; if you will, let's call it a leaderboard of AI.

**Jerod Santo:** Okay, give us a teaser...

**Adam Stacoviak:** Nice!

**Jerod Santo:** I don't want to steal your thunder, but \[unintelligible 00:25:39.16\] a teaser.

**Abi Noda:** Yeah, I'm not going to call the winners specific... I mean, definitely Cursor, Copilot, Windsurf and then Claude Code are what we're seeing, both in the data, but also when we go talk to organizations about kind of what they're looking toward. The other interesting thing - we've all followed Cursor's astounding growth... What's really interesting is most organizations are just in experimental mode right now. So they're going in and saying, "Okay, we're going to buy them all. We're going to buy them all, give everybody everything, then we're going to figure out what we're actually going to do."

**Adam Stacoviak:** See what sticks, yeah.

**Abi Noda:** So it's very much up for grabs. Everyone's talking about like Cursor's momentum, but I wrote an article last week saying "Yeah, their growth is incredible, but who knows what's going to happen?" 12 months from now companies are going to say "Okay, we've been trying all these things... We need to kind of potentially standardize around a uniform tool chain around this."

As you know, Claude Code, there's even these workflows, shared workflows. There'll be leverage in standardizing this tooling, because there's going to be a lot of enabling work that needs to happen to make these tools and agents successful. And so yeah, it's very much up for grabs, but the tools I mentioned are the ones currently I think we're seeing the most interest and highest levels of adoption by companies.

**Adam Stacoviak:** Are you in an extreme growth mode as a result of this? Like, the DX --

**Abi Noda:** The DX business?

**Adam Stacoviak:** Yeah, because you've got to -- if you have a large swath of enterprises who need to experiment, they need to track how they experiment, so they need frameworks, and that's what you've got. I'm just curious if that has resulted into extreme growth.

**Abi Noda:** Yeah. Six months ago, even four months ago, I would say companies coming to us were looking for help with all kinds of things, and kind of figuring out AI was one of them. Say right now, AI is the number one use case.

**Jerod Santo:** It's the only thing?

**Abi Noda:** Yeah, it's the only thing.

**Jerod Santo:** It's the only thing anybody cares about.

**Abi Noda:** Yeah, so it's data for everything from bake-offs, as you said, "Hey, we're evaluating five different tools, and we want to with data understand which of these are most effective for developers." It's putting a real -- turn that into dollars and hours and numbers... "Hey what is the impact? Our CFO is saying we should have 50% improvement. What is the data telling us about what this is actually yielding right now?" It's understanding what are the downstream effects... So okay, we're seeing more code throughput, faster code velocity. Are we also seeing more defects? How is that affecting developer flow state? Are we seeing more incidents? Is the code maintainable? Is developers' ability to then maintain this AI generated code increasing or decreasing? And finally, cost.

So with the consumptive-based spending now, there's a real question "Okay, we've got to figure out how much can we spend. What's the appropriate budget? And then how do we think about making sure that we're spending that money on good things, not like developers screwing around, burning tokens in ways that aren't creative for the business." So yeah, Adam, it's been a really big Tailwind for the DX business, for sure.

**Jerod Santo:** Well, it has to be one of the most divisive technology hype cycles in human history, because -- I mean, maybe blockchain was equally as divisive, because there was believers and nonbelievers in blockchain, and there was a lot of hype around blockchain will solve every single problem... And then other people were looking at technology and thinking "Well, it's really good if you need decentralized consensus", which does have some applications, and it's finding some use cases... But not like everyone's going to say blockchain will solve it. And so you had a lot of division there, and you have a lot of division on this, because yeah, you have CFO saying "We should be 50% more productive", and you have people who are boots on the ground saying "That's not going to happen", you know? And so "That's a lot of pressure on me and my team, which we think is unwarranted, and we're doing all the tools..."

\[00:30:30.05\] It's just insane how much - yeah, top-down pressure of something that nobody really knows the upside in any sort of clear way, right? We know a vague upside. We can feel it, we can maybe report on it a little bit, but we're just not sure where this train is headed. And so it makes sense that DX, your guys' business is in high demand on that one topic, because we all want to know. It's a big open question right now, is "How much are these tools going to deliver on the promise?" So far, it's looking like more than blockchain, you know? But like you said, jury's still out.

**Adam Stacoviak:** Yeah...

**Abi Noda:** It is amazing when I go talk to leaders. I think a lot of leaders - I don't know the percentage, we haven't surveyed them, but I think a lot of leaders really do believe that a large portion of their engineering workforce will be replaceable. A lot of leaders I talk to, I can hear it, and I can see it in their eyes. They believe that that is what's going to happen.

**Adam Stacoviak:** Wow.

**Abi Noda:** And when I talk to like prospective investors, CIOs, it's a question I get asked a lot about even the DX business. "How is this relevant in a world where there's way less developers?"

**Jerod Santo:** Right.

**Abi Noda:** It's an interesting question.

**Jerod Santo:** AX, dude. You need AX. Agent experience.

**Abi Noda:** Yeah, AX. So it's an interesting thought exercise. I also talk to leaders who strongly believe this is not going to result in any sort of widespread reduction in human headcount. I think that's my personal prediction at this time. I was talking with a leader -- I think it's called Javon's Paradox.

**Jerod Santo:** Okay, I haven't heard this one.

**Abi Noda:** Okay. It was just shared with me this week, but... It's on Wikipedia. It's the idea that when a resource becomes more efficient, it actually leads to higher utilization. I think there's an example of something with like oil refineries, and the ability to refine oil became much more efficient... So you'd think that the sort of investment in that would be decreased. Like "Oh, we can have less oil refineries, because we can refine oil faster." But it only resulted in more production, more refineries.

And so applying that to what's happening here, if we view these tools as making engineers -- maybe not replacing engineers, but making the engineers significantly more productive, that law would then suggest that "Well, we're just going to have more. We can get more out of per engineer, and we're just going to have more engineers, and we're going to have more software, faster." So yeah, it'll be interesting to see how this all plays out.

**Adam Stacoviak:** \[00:33:49.00\] Yeah, I'm jiving with that, because I think that -- I hadn't heard of this principle or paradox before, but it does make sense that when you make something more efficient, you tend to use more of it. And that's kind of where I'm leaning towards, is like, you're going to have a recalibration of what a developer is, because there's going to be more people willing to do what developers do, and so there's going to be a wider spectrum of what to do. So degree of difficulty - easier, harder. And then I think you're going to see the definition change, so to speak, and you're going to see more people come into it. You're still going to need people to think. I can't extrapolate this big enough, but you're still going to need humans to think about the problem of humanity. You can probably offset a lot of that to AI, but I think you still need like this human intellect, this human -- I don't know how to describe it besides "feels". Like, what feels right to humanity. I think you still need that in there, because it's not quite in the AI. They're just more bits and bytes more than true intelligence. It's not the same.

**Abi Noda:** And this shows up -- so we just published this AI measurement framework. I sent you guys the link. It'd be great to include it in the show notes. One of the big questions as we developed this framework was "How do we measure agents?" So do we treat agents as people, or do we treat agents as extensions of teams and people?"

In the framework - we discussed this in the paper - we advocate for treating agents as extensions of people and teams. So another way to think about that is that what that effectively means is that a developer is sort of the manager of these agents, but we're still measuring the developer and the team with the agents being an extension of that team, if that makes sense.

**Adam Stacoviak:** Yeah.

**Abi Noda:** So thinking about how do we measure this, you kind of arrive at similar questions to what we were just talking about in terms of the human to agent ratio, and balance, and relationship, and how that will evolve.

**Jerod Santo:** Yeah, because the effectiveness of the humans being extended is another factor. Because I may be better or worse at leveraging an agent than you might be... And so this team plus three agents versus that team plus five agents - there's so many variables there to actually whittle it down to any sort of usable information. Well, that's your job, Abi, not mine, so... I'm sure you guys will figure it out.

**Abi Noda:** Yeah... And you hear more about -- this is another thing when I talk to leaders, they're thinking a lot about number of agents. Like, what's the right ratio of human to agents? And I think that's a really interesting question. I also think it's not a practical question right now. It's like working with Claude Code, it's not -- we're kind of talking about single-threaded versus multi-threaded. We're not at a point where we're really talking about "I have one QA agent, and a designer agent, and a frontend developer agent..." That's not really the paradigm. I mean, I've seen people kind of trying to do that --

**Jerod Santo:** There's some people doing that, but they're on the edge.

**Abi Noda:** There's some people doing that. They're on the edge.

**Jerod Santo:** Yeah.

**Abi Noda:** But that's not really the paradigm right now... So I think right now, human extension is the right way to think about it. But that could change.

**Adam Stacoviak:** In that paper, one of the things that you pull-quoted actually was "Companies are no longer limited by the number of engineers they can hire, but rather the degree to which they can augment them with AI to gain leverage." It's kind of like what you're talking about there, is like you're counting agents, you're counting humans, but you really want to just like augment the human ability, not replace it. Although some of the leaders have been smirking, thinking "Replace, replace..." You know...

**Abi Noda:** Yeah, they're thinking "We'll replace them soon." \[laughs\]

**Adam Stacoviak:** Gosh!

**Abi Noda:** "As soon as the data shows that we can, we will."

**Adam Stacoviak:** "Bye...!"

**Jerod Santo:** ASAP.

**Abi Noda:** \[00:38:11.21\] And thankfully, the data is not showing that. And I think the secondary effects of software quality, understanding the bottlenecks in SDLC... Like we talked about, things like code review aren't going away. Human decision making and judgment... Actually, when you think about it - for example product management, a lot of seasoned engineering leaders when I talk to them know that product management is actually the big bottleneck, not so much like engineering velocity. It's really like product velocity. It's decision making. It's that lifecycle from idea to code. And I think we're going to see attention on those bottlenecks magnified, because as we optimize the coding -- we're already seeing this at DX, companies come to us "Hey, we thought we were supposed to get 50% productivity improvement. We're not seeing that from the AI tools." So now we're asking, "What really is our problem? What really are the bottlenecks?"

And so it is magnifying attention on engineering productivity in general, because folks are really focusing on that topic right now, because they're expecting these tools to be transformative in their organizations. So I think that's an interesting trend we're seeing as well. So this could actually result in people caring more and investing more in the other aspects of developer experience that people maybe haven't focused on before, because those constraints are being magnified.

**Jerod Santo:** When you solve one bottleneck, then you see the other one for what it is, and you start trying to solve that one.

**Break**: \[00:39:58.22\]

**Jerod Santo:** So budgets... I'm curious about budgets. Because as we look at agents as extensions of engineers... Let's imagine that I'm worth $100,000 a year, whatever; plus whatever. And if you give me one agent, maybe I'm worth $120,000. And so are you spending $20,000 a year on an agent per engineer? Because that saves you another engineer, perhaps. I'm probably not going to get to two engineers. I'm not a 2x-er. But maybe I'm 1.1x. Maybe I'm only worth $110,000.

How much do we spend on this? I'm sure these people are trying to figure it out, because budgets very much have to be actualized and decided on, like "How much are we going to spend towards this?"

Now, when you're just trying every tool there is, and my guess is the budget is "Don't worry about the budget. We've got to figure this out." But eventually, those things need to be figured out, because I don't think we're going to get outright replaced like these CEOs want to soon... But certainly, we're going to be augmented in a way where your budgeting starts to change. You start to think about engineer plus. What are your thoughts on that, and have you guys done any work with regard to pricing these things out?

**Abi Noda:** \[00:42:26.27\] In our paper we talk about cost, and we talk about ways to think about cost. We, I don't think, across the industry are at a point where companies are focused on this problem. They're talking about it, because they know it's coming. They know it's the next problem they need to figure out, once they get over the kind of experimentation phase... But your example there - yeah, your cost is $100,000 per year, with an agent your cost is $120,000 per year... what does that mean? Again, this goes back to the "Well, should there be less people?" Because we're offsetting that. And so a couple ways that -- in our paper we talk about ways to think about this. One is this idea of human-equivalent hours... And this came up in our conversation here before, like being able to kind of measure "Okay, how much human-equivalent work did this agent do?" So not just looking at number of PRs, but how much human-equivalent work.

So if you can measure that - which is hard - then you can take that against AI spend, and you essentially have this idea of like an agent hourly rate. So your spend, divided by number of hours of work produced, work done - that's your agent hourly rate. So I think that's one interesting number that we're working with companies on putting some focus on. That's a number you can use to start to rationalize what's the right amount of spend.

Another interesting metric is net time gain per developer. So that would be -- we talked about the time savings; so how much time is AI saving you. Well, how much are you spending on AI? And then when you take that, convert it into equivalent of what the developer's hourly rate is... Are they actually saving time, or do they spend more money than the time they saved?

**Jerod Santo:** Right.

**Abi Noda:** So those are two... So agent hourly rate and net time gain per developer are two metrics that -- again, hard to get at right now. I mean, a lot of the vendors, it's hard to just stay on top of the cost information in general... But I think those are two good frameworks for thinking about the net ROI, and rightsizing the investment.

**Jerod Santo:** That's a complicated task, that's for sure... But I'm glad we've got smart people thinking about it. It'll certainly be a huge concern maybe 12 to 18 months from now. Eventually, some of these tools gotta shake out, I think... And that's what I've kind of been waiting on, is I'll let the edge lords do their edging, and then I'll just wait and see what shakes out... But it's been a longer grind. It's probably been two and a half, almost a three-year since ChatGPT changed the world... And they're just now getting to where -- like, for the longest time... I'd replace Google with it, but I wasn't going to use it for any software until this last iteration of models. And they've all gotten to where it's like "Okay, we've reached a threshold which is significant."

Going back to your Jevons paradox, that actually tracks with me with just as an N of one. Like I said earlier, I'm not replaceable in this sense, but I'm just writing more software. Like, I'm not just doing less, although I did confess to going and taking a walk earlier than I would have... But I'm also just doing more stuff that I wouldn't have done. Like, it just unlocks me to write more software that I wasn't going to write.

\[00:46:22.11\] And I'm imagining all around the world, imagine every JIRA board, or Pivotal tracker, or whatever tool you're using, and the icebox, the backlog. And there's things in that backlog that you know they're just never going to get worked on, because other stuff just goes in higher, and replaces them. And it's just a constant grind. And there's so much unwritten software that we're not going to run out. We're not going to -- we're just going to hire, hire, hire, we're going to augment, we're going to write more software... Some of that software is going to be really crappy... We're going to hire more security engineers... And then we're going to hire people to replace the software... I mean, it's going to be just fine, I think. That's my --

**Adam Stacoviak:** "Just fine, I think..." \[laughs\]

**Jerod Santo:** I think we're going to be just fine. Now, we do change how we do our work, absolutely. A hundred percent change how you do your work. And I think our teams change, slightly. I think our enterprises change. I think less large enterprises, probably. Smaller teams doing more. Businesses don't have to grow that headcount quite as fast, but the large ones stay large. That's just an intuition. I don't know if that jives with you guys.

**Adam Stacoviak:** Possibly. Well, even with your confessing to taking a walk earlier, I wonder if maybe during that walk you solved a harder problem that you hadn't been able to solve because you were happier; you felt more fulfilled, and maybe you actually had the brain space to just think. So that walk doesn't actually --

**Jerod Santo:** I like to think I did. I'm pretty sure I did.

**Adam Stacoviak:** Yeah, you probably did. I mean, it's not indicative of less output. That's the problem and why I'm so thankful DX is here, because you've got the core four, and this kind of four degree of measurement across teams, and you got this newer one for the AI to measure agents... We need those checks and balances, because I'm curious, having said that, if the DX core four needs to change, or will change because of AI. Do we need to add a happiness metric in there? A morale -- I think it's kind of in there, but maybe you can speak to it more so, Abi... But I'm curious if that DX core four needs to be the core five, because we need to measure the human contentment, I would say, as an individual. And then that individual is part of a team, that team is part of a culture, and a culture of a company. I'm curious if that will change because of AI.

**Abi Noda:** Yeah, we talked about this last time I was on the show, too.

**Adam Stacoviak:** Did we? Gosh...

**Abi Noda:** We have the idea of happiness encapsulated in our developer experience index measurement.

**Adam Stacoviak:** Okay.

**Abi Noda:** And it's very intentionally not called happiness, because one of the goals of the core four is to make it palatable for executives. I mean, not to sound cynical, it's just --

**Jerod Santo:** \[unintelligible 00:48:56.20\]

**Abi Noda:** Not now. But back in 2021, they did, when no one could retain developers.

**Jerod Santo:** Right.

**Abi Noda:** Right now they can't. Funny thing, GitHub recently came out with a white paper on how to think about measurements, and we consulted with them closely... They incorporate a lot of like the core four measurements in their article... But one thing specifically I kept telling them was "Don't call it happiness." They're like "GitHub is all about developer happiness. It's all about developer happiness." I said "Don't call it happiness", because... The irony - if you call it happiness, then executives won't measure it. They won't care about developer happiness. If you kind of frame it as something else... We frame it as developer experience index, which is how you measure effectiveness, because we believe like developer happiness is part of being effective in how you build software. Then they'll measure it and it'll get improved and optimized. So yeah, it's a naming problem, Adam, but it is encapsulated in there.

\[00:50:09.11\] In terms of "Should the core four change?", that's something we've looked at closely. And as of now, as an organizational way of thinking about measuring productivity, we think core four still holds true. What's different about AI is you need more. There's a lot of new stuff we're measuring. And so the AI measurement framework actually includes the core four in one aspect of it, which is understanding how is the overall organizational productivity being impacted, pre and post AI, or depending on level of AI adoption. So that's a lot of what we're helping our customers measure right now, is - you know, when we look at the adoption curve in our organization, or the maturity curve I think it's transitioning into now; less about adoption, more about maturity... So not just "Are people using Copilot daily?" but "How are they using it?" Are they using it just for auto-complete? Are they using the agentic stuff? Are they using the AI to help them create the prompt that they feed back to AI? So maturity. And as that maturity increases, does the organization seem more productive based on the data? That's the big question we're trying to help companies answer right now.

**Jerod Santo:** What has been your adoption strategy at DX for these tools?

**Abi Noda:** You know, we work with Netflix, and one thing that's been on my mind is how much I have not heard Netflix making a fuss about AI... \[laughs\]

**Jerod Santo:** Yeah. True.

**Abi Noda:** Meaning a lot of these companies are like "We need other developers using them, we're measuring how much they're using it..." I haven't heard that from Netflix, which makes a lot of sense, because Netflix is predicated -- like, their entire culture is "Hey, we just hire really senior people..." Developers kind of rule at Netflix, because they entrust that their developers are the best in the world, and that if there's a really useful tool for them to use, they'll use it. And they're going to use it the right amount. They're not going to use it more because we're measuring them. And so that's the approach I've taken at DX.

Now, I've also encouraged -- like Claude Code, for example. So I encouraged a few of our engineers, "Hey, I'm reading about this workflow. Voice to text, to Claude Code, to this, to that..." Like, one of those more edge. And so I asked a few of our engineers to "Go try this workflow for a little bit, and see what you think." But we definitely haven't mandated it. It's my understanding that everyone's using one or multiple of the tools, and doing their own experimentation... But ultimately - yeah, I trust the engineers to use it to the degree, to the extent that it's useful. And I think that's the -- I haven't put any pressure on people. I haven't been like "Well, if you don't do this, you're going to become obsolete." That's not a message I'm bringing in.

We've had some really interesting conversations around -- just candid conversations, like "Where do we all think this is going?" And that's also relevant to DX, because we're a product company, we're thinking about products around AI tooling, AI enablement tooling... And so we're having those discussions as well.

**Jerod Santo:** Can you say more about that?

**Abi Noda:** Well, DX, the business, we've gotten to this interesting point... We've been doing the measurement thing for now almost four years. It's going really well. But a few months ago --

**Jerod Santo:** You're getting bored. You're getting bored of measuring stuff.

**Abi Noda:** \[00:54:03.28\] \[laughs\] Well, a few months ago I met with Drew Houston, CEO of Dropbox, ad he said to me -- they've been a customer of ours. He goes "You guys are doing diagnostics really well. Have you thought about - what about the interventions? What about solving the things that you're measuring?" And so that's actually a question I realized -- we get asked in different ways, but constantly, like "Well, can you actually help us improve?"

**Jerod Santo:** Yes.

**Abi Noda:** And we've done a lot of things. You guys saw this partnership we have with ThoughtWorks. So hey, partnering with consulting companies who can come in and help you with the transformation... We started partnering more with different vendors; hey, is there a way we can loop in vendors to-- we don't really want to like play favorites, but hey, at least we can map different tools out there to different problems, areas of the SDLC... I think we've gotten to a point where it's like "Hey, you know what? Actually, there's gaps in the market", but there is no solution for some of these problems.

**Jerod Santo:** Really?

**Abi Noda:** And should DX just go build them? And now with AI, we're seeing a whole new generation of problems that are being created. I mean, my previous company was a Slack app. So I got in on that right as Slack was just growing like crazy...

**Jerod Santo:** Taking off.

**Abi Noda:** ...and so it was an entire new paradigm. An entire generation of businesses were built on Slack. And so I think AI and AI engineering specifically, so this new way of working, this new way of doing software development is actually a new paradigm in which potentially the entire tool chain could be rewritten. The folks at GitHub and GitLab are worried that Cursor is going to add code review and source control management to their -- just go for it, right? It completely upends the status quo. And so at DX, I don't think -- we're not going after Cursor, we're not going after GitHub, that's for sure.

**Jerod Santo:** Who are you going after?

**Abi Noda:** I think we're going after the adjacent opportunities, the ones on the margins, that the big guys are -- we're not trying to go to war with the Cursor and Copilot.

**Jerod Santo:** Sure.

**Abi Noda:** We're trying to solve the adjacent problems. Some things we've talked about today, like how do you upskill developers? How do you optimize your code for LLMs? How should platform engineering teams think about sort of self-service and enablement? In the same way that, if you guys have followed things like Spotify backstage... Like, big focus on golden paths, self-service developer \[unintelligible 00:56:56.18\] Well, what does that look like in a post AI world? It's like, well, enablement on what? Golden paths around AI tooling, AI development workflows, shared... We talked about like Claude has workflows, literally. They have these workflows. So curating that. Like, how do you create a standardized set of workflows that you hire a new developer in your organization - boom, they have this menu of superpowers. AI powered superpowers that they can --

**Jerod Santo:** Gotcha.

**Abi Noda:** So those are the types of problems. I can't get into specifics today, but those types of adjacent problems I think are -- you know, new constraints for enterprises looking to deploy AI at organizational scale. So not single player mode, but more multiplayer mode. How does an organization become successful with these tools. It's a different set of problems.

**Jerod Santo:** It's like AI adoption best practices as a service.

**Abi Noda:** Yeah, I mean, that's one potential opportunity.

**Jerod Santo:** That's just one of your ideas.

**Abi Noda:** Yeah. That's not saying that's what we're doing at DX, but...

**Jerod Santo:** \[unintelligible 00:57:58.23\] What else is adjacent to this? Don't give us your solutions, but what are the other problems?

**Adam Stacoviak:** Spill the beans, Abi. He's going to pressure you to spill those beans. I'm just kidding, he's not pressuring you. He's just curious.

**Abi Noda:** \[00:58:14.04\] Yeah, I think what we're seeing is -- there's really two things. One is that there's this new set of problems, like some of the things I've hinted at. I think there's this new generation of problems to be solved. The other opportunity is that there's actually the pre-existing problems that are being more magnified, meaning post AI it's even clearer that these are real constraints. And in some ways, they're a limiting factor to how much value you get out of AI. Because again, if we go back to the idea of agents as extensions of humans, then the ability of that human and the environment in which that human is working in is actually a more magnified limiting factor. Because now this developer could be getting 150% leverage, whereas before there was just 100, to use kind of the numbers we were talking about before.

So what are the constraints to the human? Well, it's probably the same constraints we've had before. Some new ones, but some pre-- and those are types of things we've been measuring for years, and seeing go unsolved, and we think "Maybe we should go try to solve them."

**Jerod Santo:** Are you raising money? Where do I invest, Abi? Where do I invest? You sound like you're well-positioned to actually take these adjacent markets over, man.

**Abi Noda:** I think GitLab, GitHub, Atlassian have a platform advantage over like a Cursor.

**Jerod Santo:** Sure.

**Abi Noda:** That battles on. It'll be really interesting to see, can GitHub leverage its platform advantage that it has, being the system of record for code. And like developer communication, can it convert -- and being embedded into much of that \[unintelligible 01:00:00.28\] Can it convert that into a really amazing platform that can kind of win out over point solutions that are threatening their business model? I think similarly, DX has some platform advantages... Namely that we can actually measure what's going on with all of this.

**Jerod Santo:** Right. You can prove what's going on.

**Abi Noda:** Yeah. And so -- yeah, again, I don't think... We're not going to jump into the battle of the AI code agents, but we see opportunity to bring a lot of value to our customers by helping them maximize those investments, and continue to just optimize their overall engineering productivity.

**Adam Stacoviak:** We're almost out of time, but I've got to ask you for predictions, since you mentioned this... Because when you mentioned the popular agents, you did not mention Copilot. Cursor was mentioned, Windsurf was mentioned, Claude was mentioned, because Jerod sort of interjected it... Claude Code at least. But Copilot was not. Can you give me a prediction? What do you think is going to happen over the next year or so, given this tumultuous waters you've just mentioned, to GitHub or GitLab, the entrenched -- what happens if they don't succeed in this transitional moment?

**Abi Noda:** Yeah, if I were Cursor, I'd go for it, right? I would go for the full stack. Like, be the platform. I think the prediction I'll leave you with is I'm interested in seeing, are we going to end up in kind of -- in the same way we've sort of ended in like multi-cloud... Like, is the end state of this kind of like multi-agent? You know, different companies will offer agents and models that are more fine-tuned to different types of work. So for the developer, are we going to be in a world where based on the task or even subtask, we're kind of delegating to different providers and services and then there's an orchestration problem. So that's another problem we're thinking about at DX, is is that the paradigm? And if so, there's a tooling layer needed.

**Adam Stacoviak:** Man, I want to be invited to one of these think tanks y'all have. I want to be in these -- I want to be a fly on the wall in the room, with all this data you've got, this moat you've got, just looking at the landscape, and considering.

**Jerod Santo:** Less conjecture, because they have actual data, right? Adam and I conjecture, but we don't have any data, so we're just talking out of our certain body parts. Alright, Abi, we know you've got a hard stop, we'll let you go. Thanks for stopping by again. You're welcome anytime, man.

**Abi Noda:** Yeah, thanks so much. Always fun chatting with you guys. Keep up the great work.

**Adam Stacoviak:** Bye, friends.

**Jerod Santo:** Bye!
