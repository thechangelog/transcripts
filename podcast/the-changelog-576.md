**Jerod Santo:** Alright, we are here with best-selling author, data engineer and architect, recovering data scientist... I'm just reading your LinkedIn here, Joe...

**Joe Reis:** That's fine.

**Jerod Santo:** We're here with Joe Reis. Hey, welcome.

**Joe Reis:** What's up? How are you guys doing?

**Adam Stacoviak:** Good, good, good.

**Joe Reis:** Awesome.

**Jerod Santo:** Very well. I like "recovering data scientist", you have that trademarked in your profile... I'll bite. What does that mean, recovering data scientist?

**Joe Reis:** I mean, I made a lot of bad choices in my life... Things I'm not proud of... Data science may have been one of them at one point. So I went to recovery, and I'm very proud of where I am now. I'm just kidding...

**Adam Stacoviak:** You were really selling it there. I was liking it. I was digging it.

**Joe Reis:** \[laughs\] Yeah, I was gonna turn this into a TED talk...

**Jerod Santo:** I was gonna say \[unintelligible 00:06:48.27\]

**Joe Reis:** ...start crying. \[laughs\] Yeah, you too can achieve your dreams in life. So -- no, I mean, I think it was sort of a tongue in cheek joke back in the day. Data science was the sexiest job of the 21st century, I think... And so me and other people had been in the data for quite a while, actually. We were hired as data scientists, and just quickly realized that in a lot of cases the foundations weren't set up; you couldn't really get data to do any science \[unintelligible 00:07:18.01\] for example; it was really difficult to do your job. It started out -- we were calling ourselves, me and my friends, reformed data scientists, but recovering sounded a bit more fun, so I just stuck with it. Yeah, that's the story... But you're finding more of them these days. They certainly come out of the woodwork, people who are a bit jaded on data science, which we can maybe dig into if we want to.

**Jerod Santo:** Yeah, so... I feel like the name of people who work with data in such ways just kind of morphs, and now maybe that was like a phase, when data scientist became a proper noun, and became a job title that you could make good bank with for a while. Maybe you still can; you probably still can. And now there's like data engineer, and then there's AI engineers coming...

**Joe Reis:** Prompt engineers...

**Jerod Santo:** Prompt engineering... It sounds like data engineering is a thing that you ascribe to, since you have an O'Reilly book, "Fundamentals of Data engineering." Is that a title now? Is that a role, or is it a verb? Something you do? How do you see it?

**Joe Reis:** More of an adverb... Just kidding. \[laugh\] No, I mean, it is the title... But as you point out - it's interesting, a lot of titles are morphed. If you look back to what happened with data scientist, as an example, it was one thing, and I think back in the day it was kind of like you were -- I jokingly called it the other day on a podcast sort of the crossfitter of data; you're not really good at anything in particular, but more of a generalist. Maybe good at like stats, you can type code, you might be able to type in general...

**Jerod Santo:** Hopefully you can type... \[laughter\]

**Adam Stacoviak:** Sheesh...

**Joe Reis:** I don't know, I mean... \[unintelligible 00:08:57.18\]

**Jerod Santo:** Put that in your resume.

**Joe Reis:** Yeah. 10 words per minute...

**Jerod Santo:** Right.

**Joe Reis:** Yeah. But that ended up being kind of an agglomeration of every title out there in data at the time. If you were an analyst, suddenly you were a data scientist; if you were doing machine learning, which is more how you got into it, then you'd be a data scientist, and so forth. But I see the same thing happening with data engineering, where it's sorted out; I think it's sort of a big data engineer I think was maybe how that started back in the day, when big data was still a thing, and that was another kind of a bygone era...

**Adam Stacoviak:** 2009, 2010.

**Jerod Santo:** Remember data mining? Is data mining something still people talk about?

**Joe Reis:** \[09:39\] That just gets folded into data engineering or data science now, depending on what you're doing. But you've got to look at how job titles start. It's kind of like if you're a company hiring people, you want to get the sexiest catch-all title you can; if you get too specific, like Oracle Data Miner or something like that, you'll probably get a more specific candidate, but people want the sexy titles. So I think it's kind of how data engineering came about, but as I dug deeper into it, me and my co-author, Matt Housley, what we realized was... I was writing the book, and before, if you were to describe it from first principles, it actually is a thing. It's a real thing, so it's not just a made up title... But we can get into what that real thing is, or at least how we imagine it... But yeah, title-wise though, even as I pointed out in the last chapter of the book, I feel like titles are just one of these things that are constantly evolving in our field, whether you're talking software, or data, or whatever. So it's just - the title today probably won't be the title tomorrow.

**Adam Stacoviak:** Everything's iterative. It always begins somewhere and goes somewhere else, that's for sure.

**Jerod Santo:** And sometimes it's posturing, right? Like "I'm not a programmer, I'm a developer." Or "I'm not a developer, I'm an engineer." "I'm not an engineer, I'm an architect."

**Adam Stacoviak:** Yeah. And you almost want to get hired for the title you want to. That's why even with this specificity of the title, like Oracle Data Miner, for example - you may be like "Yeah, I might want to work for Oracle, but do I want to be an Oracle Data Miner?" I don't know. Maybe, maybe not. You kind of get attracted to a title, potentially.

**Joe Reis:** It could. And then that becomes your identity.

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** Right? Because that impacts your ability to give talks, and stuff like that, or show up on podcast... Like "What do you do?" "I'm an Oracle Data Miner." "No, what do you do?" "That's my title." "Okay." "That's me. I do that."

**Jerod Santo:** We struggled with this, Joe, back when we were naming the Practical AI podcast. So we wanted to start a podcast in this space, and Daniel Whitenack and Chris Benson wanted to do it with us... And Dan is Data Dan. I mean, he's a data scientist, or he was; now he's a founder, and - I don't know what he calls himself now... But we didn't know what to call the thing. Do we focus around data? And we knew that AI was a burgeoning term, even though we didn't think it necessarily applied to the things it was burgeoning around... But that seemed to be the smartest noun to pick. And then of course, we wanted to show that that was not just about the hype, and the theory, and all this stuff... But a practical show. And so that's how the name came out. But it wasn't easy for us to pick that because of this moving target, because evolving, and... I feel like we picked a name that was well prepared for this current hype cycle, but also probably didn't exactly apply to some of the stuff that's been discussed on the show.

**Joe Reis:** Yeah... When did the podcast come out?

**Adam Stacoviak:** 2018? 2017? 2018.

**Joe Reis:** Oh, you were way ahead of the curve with that.

**Jerod Santo:** We've been doing it for like five years, I think...

**Adam Stacoviak:** Yeah...

**Joe Reis:** AI was just starting to become a term. I remember when I had -- I was working at a machine learning startup back in 2012, and we actually forbade ourselves from using the term AI, because it would just come off a few like other AI crashes, you know... And so I think back then it was "predictive analytics" was the cool thing to call it... And then machine learning was sort of becoming the thing.. Andrew Eng's course had come out maybe a year or two before that, and that sort of blew up, and then machine learning was becoming cool... But then AI, I think around the time you -- that was actually a pretty bold move, because it made Practicable ML probably would have been the more zeitgeisty --

**Jerod Santo:** For sure. I think machine learning was hot right then.

**Adam Stacoviak:** Yeah, sure was.

**Jerod Santo:** We didn't know exactly what to call it... I think we settled on that. And then we did the comma-separated list of keywords behind it. So it was called Practical AI, colon...

**Adam Stacoviak:** DS, ML, AI...

**Jerod Santo:** Data science, comma, machine learning... something like that. So that people could find it when they search for machine learning. Because you have to do those gross things in order for people to find stuff.

**Joe Reis:** You do, you certainly do.

**Adam Stacoviak:** For the record, I was against AI in the title. I was all for data. I was like "This has to have data in it." I can recall the arguments. It's a data show, it's data engineering... I didn't see where the puck was going. And thankfully, Dan and Chris were way wiser than I was, because they saw where the puck was going, and they were like "No, we want to talk about practical artificial intelligence. We want to talk about how it actually applies to developers today, even though it's not quite here yet. Where is it gonna really land, and how can we actually use it?" And that was such a wise move on their part.

\[14:00\] And honestly, that's part of the wisdom of the crowd, so to speak, when it comes to -- you know, Jerod and I run the show around here, and Dan and Chris are not owners necessarily, but they were partners in the long-term endeavor. And we could have certainly "forced our hand" - which we would never do; we don't do that - and push for "No, it's gotta be data. This is not right." And thankfully, we were like "Nah, that makes sense." At least -- I don't know what your position was, Jerod, but I was against AI. I thought "That's not coming. That's not here. What's going on here?"

**Joe Reis:** Okay, so you didn't like it because you were like "This is fantasy land."

**Adam Stacoviak:** Well, I just thought data was there. The machine learning aspect was there. And I just didn't see that their true umbrella term - and this is where they saw it; the true umbrella term is all this is artificial intelligence. Even though what we think of artificial intelligence is going to be what it is, is what these things are, realistically. So the umbrella term of AI really made more sense. And they said "Well, we're not talking about just data. We're talking about machine learning, data science, engineering. It's all these things really encompassed in this umbrella term of artificial intelligence." And honestly, that was a really wise suggestion back in those days, because obviously, we're now where the puck went to. We skated to that puck with the name, and we met it.

**Jerod Santo:** Right. Which, interestingly - at least, it's interesting to me - after November of last year, which was ChatGPT's release, and here we are... Well, not last year; I guess it was two years ago now, as we are in 2024... But 12, 13, 14 months ago, the audience of that podcast, thanks to nothing but the hype cycle - because the podcast was already good; it's still good. It's doing the exact same thing. They didn't change their content in order to match. But by picking that name, the audience of that particular podcast doubled. The audience doubled, where the rest of our shows have continued to do their slow and steady; it just went \[unintelligible 00:15:50.17\] You just pick the right word and it happened to ride -- I was saying "We're riding the wave now, guys. We're riding the wave."

**Joe Reis:** It really is a wave. I mean, so I traveled the world last year giving talks, and inevitably AI was -- I mean, in had been the ML field for a while, and data... And AI was sort of coming up as a term in popularity, especially around the -- but it had always been confusing. Because you were like "Was that really AI? Like in the AI-AI sense, or is it kind of just like you're throwing this term on it because it's kind of cool?" So I still -- I don't know, I think it's funny, because like curmudgeon friends of mine, and myself, who is also a curmudgeon, and I guess we just reluctantly accepted that it's now AI... Because that's the term everyone uses, and one could argue it's probably not. But it doesn't matter, it is what it is. So when I traveled the world giving talks, it was interesting, because increasingly throughout the year AI was at every conference, more and more. Beginning of last year, 2023, it was starting to become a thing. And then you get to the middle of the year, you go to Snowflake Summit, you go to Databricks, and it's like, AI is the conference.

**Jerod Santo:** It's everywhere.

**Joe Reis:** Everywhere. And I get to Dubai - it was October, something like that... At a conference called GITEX, which is like 170,000 people at this conference, by the way.

**Adam Stacoviak:** What?!

**Joe Reis:** It was massive.

**Jerod Santo:** That's huge.

**Adam Stacoviak:** That is a lot of people.

**Joe Reis:** You realize, okay, so we live in the West, Western society, and what you realize -- when you look at the name tags and locations of where the attendees are from, it's like China, Iran, Pakistan, Africa... You realize there's a totally almost parallel universe happening...

**Jerod Santo:** Right. And it's big.

**Joe Reis:** It's bigger than what we have here. By a long shot. But every company had some AI story there at that conference. Everybody was an AI company; it didn't matter whether you were selling mops, or something; you'd probably have an AI angle to it. And I was at CES a couple weeks ago. Same thing, AI was the story of the conference. Everything had to have an AI pitch to it.

\[17:59\] And the other crazy thing was just the sheer amount of Chinese car companies. If you think American car companies are doing cool stuff, like Tesla, I don't think it as much on what China's doing right now in terms of either self-driving or electric. There's just a lot of companies that I've never heard of. Here you know all the companies.

**Adam Stacoviak:** There was actually a mention of that I believe in Snacks recently, Jerod, where they were saying that the -- and I'm gonna try and find the name, but there was a Chinese car manufacturer that was actually beating Tesla.

**Jerod Santo:** In sales, or in tech?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** In sales.

**Joe Reis:** BYD, I think it was. That would be them, I think. That's actually the one that -- who was it? Warren Buffett invested in them many, many years ago. But you realize -- I mean, I saw that technology and I'm like "Holy crap." It's just a tale of two worlds at this point. But everything's AI at these conferences... It is what it is.

**Jerod Santo:** Yeah. The cat's out of the bag. You can't put it back in.

**Joe Reis:** No. When I was in Dubai, they have a whole ministry of AI there. They have a minister of AI; they call him His Excellency. It's crazy.

**Jerod Santo:** Wow. He must be really good at it.

**Joe Reis:** Yeah. I hope he is.

**Jerod Santo:** I just feel like anybody who is called "Your Excellency" has to be pretty good at what they do, you know? Hopefully.

**Joe Reis:** I should have put that as my name for the --

**Jerod Santo:** You should add that to your LinkedIn list of accolades.

**Joe Reis:** \[laughs\] Excellency.

**Jerod Santo:** Yeah. Alright. So Joe, we have your take on AI. I think the sentiment resonates... If we were to call you His Excellency, what would be your particular domain? What's your view of the world? I know data modeling is involved, but what's exciting to you, what's interesting? What are you into right now?

**Joe Reis:** I think the boring stuff is exciting to me, you know what I mean?

**Jerod Santo:** Yeah. Like labeling? Data labeling.

**Joe Reis:** Data labeling is just the hottest thing in the world. \[laughter\]

**Jerod Santo:** You just love it. You just love to do that.

**Joe Reis:** I just love to label data all day. \[laughter\] I just dream about it at night.

**Jerod Santo:** What do you mean by boring though? That's what I think of as boring.

**Joe Reis:** Well, I think the boring stuff is what excites me. I think right now, especially in software and in data for practitioners, there's no shortage of great tooling at this point. And I don't think you can say any of the software or data that we have a lack of great tooling. I mean, especially compared to 10 years ago. If you're a developer, it's like what, are you gonna go back to the MEAN stack? You want to go do that again? You know what I'm saying? So things have improved quite a bit. Things always improve, but the same is happening in data. Our tools are wonderful. But tools are abstracting a lot of workflows. And increasingly, this allows a couple of things. One, it allows engineers of all disciplines really to, I think, do more "enterprisy" things, work with the business a bit more closely... So that's one aspect of it we should talk about.

The other part of it is I feel like there's a massive gap in terms of education and skills, versus the potential of the tools and the capabilities that they promise. So when I say boring, what I'm excited about is one, helping upskill at least a lot of data practitioners so they can better leverage the tools that they have. And two, I'm excited for what comes next, because I feel like a lot of -- at least in data proper, a lot of the classical, at least from a technology standpoint, things like analytics, which companies still struggle with this, for some reason... I mean, that should be a solved problem from a technology angle, right? But why is it we keep struggling with it from an implementation standpoint?

So there's so many things I'm pretty excited about... And again, these are not sexy topics; the sexy thing would be for me to say "Yeah, I'm totally stoked on AI, and building Skynet, and all this stuff. And why are you even bothering with talking about these other topics?" But to me, I find them interesting.

Part of it is I think that this current AI cycle we're in, at least for corporate implementations, I feel like if we can't get the basics right and the boring stuff right, things like data management quality, all these things that are going to be powering AI, I feel like a lot of this hype cycle is actually going to come crashing back to reality quite soon.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So kind of a garbage in, garbage out kind of thing.

**Joe Reis:** Literally.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What about the skill set and the tooling of a data engineer? What are some of the skills and tools that "a data engineer", or one who you're trying to upskill is trying to get to?

**Joe Reis:** \[22:15\] Yeah, as we describe it in our book - I'll take a step back and sort of describe what we wrote, the philosophy that we took. So we wanted to -- the types of books that we saw, me and my co-author, that we really didn't about data engineering were like these data engineering on technology X, Y, or Z, or programming language, say Python, or on AWS... Nothing wrong with that, obviously. I think it's great. But the thing is, these are very ephemeral types of books and lessons. You know how fast things change...

**Adam Stacoviak:** Yeah, they're stale pretty quickly. If they're too niched, it's just very stale. Yeah.

**Joe Reis:** Yeah. So we want to take a step back and really understand from a technology-agnostic level what would be the immutables of data engineering if you were to describe it from first principles? So really, that's what we tried to describe. It's things like getting data from source systems; a system is maybe an application developer, or engineer, or however they want to call themselves... Systems that are more upstream from "data", and helping you understand what those systems are. And then obviously, ingestion mechanisms and methods to get that data, storing it, processing it, transforming it, querying patterns, and so forth. And finally, serving it for downstream use cases like analytics, machine learning, and so forth.

So really, I would say that framework is really the framework that we feel a data engineer should think in. Obviously, this is not a linear progression. Things can loop back in themselves. So I think this really was sort of the agnostic framework that we'd, I guess, come up with. And then of course, undercurrents. So things like security. You can't just pigeonhole that into any one section of that data engineering lifecycle, as we call it. You wouldn't say "Oh, security only belongs in storing data. Everything else, you don't need to worry about it." Because that would be quite reckless.

**Jerod Santo:** Yeah.

**Joe Reis:** Data management, orchestration, everything else. Architecture... So that's sort of the framework that we developed for data engineers to really think about and reconcile their job. Because up to then, there really wasn't a framework to think about data engineering as a profession. I think that the advice was "Oh, just go learn Spark." And that's not really good advice. It's like telling a surgeon to go learn scalpel, or EKG.

**Jerod Santo:** Right. It's one specific tool.

**Joe Reis:** Yeah. It's not going to -- that's not advice. So we really wanted to take a step back, and I think this provided a mental framework. But in a way, as well as you can predict how things go in technology; they aren't going to change in five to ten years. And I still see this as true. Like, there's not a situation where the various types of storing data for machine learning and analytics use cases - that doesn't really change. The details may change. Vector databases were more popular, but they've been kind of on the rise for a bit before the AI boom. So the whole point is just being able to rationalize how all these things fit together. So that's a framework that we want people to think of.

Now, tools and technologies, I would say, what we try and tell people is -- you know, the early part of the book is full of best practices. Thinking like a data engineer, think about architecture... Something that's not discussed at all, typically. You have to figure it out on your own. And then how to choose technologies. So build versus buy...

**Jerod Santo:** Oh, yeah?

**Joe Reis:** Open source versus paid, all this stuff. So it's a good rubric for -- a good, practical way of thinking about it.

**Jerod Santo:** Now you've got my attention there, Joe. I like those topics, for sure.

**Joe Reis:** Well, let's talk about them.

**Jerod Santo:** When do I build and when do I buy? \[laughter\] Just give me the answer. It's a simple, straightforward decision, isn't it?

**Joe Reis:** So if you use my affiliate code for --

**Jerod Santo:** Always buy. \[laughter\]

**Joe Reis:** Just go buy, for sure. Yeah, I am actually a fan of -- so I always use the comparison of... I like to ask "How often do you go and make your own car tires from scratch?"

**Jerod Santo:** I haven't yet.

**Joe Reis:** Yeah. I mean, I haven't either. There's people that probably do it.

**Adam Stacoviak:** I'm tempted... Truck tires are pretty expensive.

**Joe Reis:** \[26:07\] Yeah, they are. But if you want to locally grow your own car tires - I mean, go for it. But there's shops that do this, and people that can install them for you. I mean, I can install car tires just fine. But do I do that every day? No, because I've got other things to do.

**Adam Stacoviak:** Can you? You can install a car tire?

**Joe Reis:** Yeah.

**Adam Stacoviak:** I saw this video, speaking of AI and automation, really... It was more like AI that leads to automation. I think it was Volvo. And it was showing off their plant and how efficient it is at creating the tire, and putting it on the rim in like minutes.

**Joe Reis:** Whoa.

**Adam Stacoviak:** And how quickly it can go from raw material to tire on rim, and the automation process. And I was like "Yeah..." So juxtaposing that to what you're saying, I'm never going to create my own tire after watching that kind of video. I'm gonna dig it up and throw it in the show notes. It was pretty awesome.

**Joe Reis:** But you would want to make a tire, and I guess you would want to build when it's to a competitive advantage for you. And that's what I mean, like --

**Adam Stacoviak:** Yeah, if I was Maxis, or Goodyear, or if I was like a tire brand, I would for sure obviously be building my own tires. But as an individual who has one use - well, actually, technically four uses, because four tires per vehicle... Unless I'm driving something different that's got six.

**Jerod Santo:** Economies of scale...

**Adam Stacoviak:** Yeah. Or a motorcycle.

**Joe Reis:** Do you have like the big truck with like the two tires on the backend of it?

**Adam Stacoviak:** Nah. Dually? No.

**Joe Reis:** Yeah, those are fun. Maybe in Nebraska they have them over there, on the farmland. They say there's lots of duallies there.

**Jerod Santo:** They do. There's lots of duallies around here. Yeah, yeah.

**Joe Reis:** But it's the equivalent -- that's how I view build versus buy for technology. And this is where I'm excited, because I feel like, again, as tools become more abstract, there's a lot of options you can hopefully pay for. Or use open source, whatever. But the fact is, it's already been done for you, all the heavylifting.

**Adam Stacoviak:** Yeah.

**Joe Reis:** Thinking through this rubric of avoiding as much undifferentiated heavylifting as possible, and really focusing your attention on things that move the needle for your business... And that's the comment earlier about working with the business; helping the business solve problems. I feel like this is, I think, really awesome, because there's a big disconnect. We see this in engineering all the time. The engineers aren't serving the business. The data team isn't serving the business, and they're off nerding out, doing whatever they do. This is a common complaint that I hear from business stakeholders, is "Engineering team doesn't understand we do." But then the engineers always complain "Oh, we don't understand what the business does. Why do they keep bugging us with all these stupid questions and requests to help them?" \[laughs\]

**Jerod Santo:** Yeah. Everybody has their perspective.

**Joe Reis:** Yeah. I was talking with a friend of mine this morning on a podcast about just why is it that -- because she wrote a book on becoming a data analyst, and the her question was why is it that data analysts seem to have a disdain for the businesspeople? I was like, "That's an interesting perspective. Business people feel the same way about you probably too, if you have that mindset." So that's what I'm excited about. That's how I view it.

**Break:** \[29:03\]

**Adam Stacoviak:** I'm more curious about this whole disdain.

**Jerod Santo:** Oh, you are?

**Adam Stacoviak:** And what the root causes is for that, really. I mean, I think that --

**Jerod Santo:** Humans not getting along...

**Adam Stacoviak:** Well, I think, to your point, it's kind of like tangential to the build versus buy, which is focus on the product. The product is the business, right? The product is the result of the business need to succeed. And so if the analysts are upset with the business folks and vice versa, then it's because there's a disconnect on what the focus of the business is, and what the individual roles contribute to the focus of the business, the product.

**Joe Reis:** Yup.

**Adam Stacoviak:** So if you're not focused, and you're not centered on what the goal mission is, that truly is a business issue... Because it's the business executives that should drive the mission of the business, and what the focus of every individual and team should be focused on. So the disdain is really a lack of focus, right?

**Joe Reis:** I agree.

**Adam Stacoviak:** I mean, because they're there to solve a problem. And if they're solving a problem, then it should result in business benefit, i.e. better product, faster product, a more quantified product, better data for marketing, better data for sales, so they can focus their efforts more, better data for engineering so that they're building the right thing, at the right time, with the right purpose... All those things. So that's kind of how I look at it.

**Joe Reis:** Yeah, I agree. And how often is it that you hear from engineers "Gosh, our CEO just keeps coming to us every damn second with some new idea."

**Adam Stacoviak:** Lack of focus, right?

**Joe Reis:** Lack of focus, that's it.

**Jerod Santo:** Yeah.

**Joe Reis:** I heard a crazy story... One of my relatives was an early engineer over at Nikola, actually, the car company...

**Jerod Santo:** They rolled down a hill. Didn't they roll one down a hill?

**Joe Reis:** It was really good at being put in neutral and rolling down a hill, yeah. That was the product. That's the future of cars. \[laughter\]

**Adam Stacoviak:** So cool. Fred Flintstone all over again, basically, right?

**Jerod Santo:** All we need is more hills. If we just had all hills, it'd be fine.

**Joe Reis:** We should make more hills, especially in Nebraska.

**Jerod Santo:** Well, we could definitely use some more.

**Joe Reis:** But he would tell me stories, Trevor Milton - I guess he's now off to jail, so it doesn't really matter... He'd come into the office like every day with just like a new idea. Like "I need this done." And people would be like "We never heard of this before." Or make an announcement, like "Hey, we're doing this", and people are like "What? We never heard of this initiative at all." Like building a car that works, or something. I don't know. \[laughter\] You know, that's an extreme case, but it drove this relative absolutely insane. She's like "I can't stand working here." I'm like "Just stick it out. Who knows what happens?" Ended up cashing out for a lot of money, thank God... But the amount of just stuff he would say... I'm like "Yeah, man, I don't know, this is a different level of that..." Because as engineers, we've all seen this, right? Somebody gets an idea for a feature, "Oh, this is gonna change everything for our company. We've got to make this a priority right now." And Adam, you're absolutely right, it's focus. That's 100,000% right. But all too often, it's the hardest thing, isn't it?

**Adam Stacoviak:** Yeah. When you're zigzagging, you're not focusing.

**Joe Reis:** No.

**Jerod Santo:** Which is why we have a common refrain around these parts, which we hopefully impart to our listeners, which is "The main thing is keeping the main thing the main thing." And you've got to do that. If you fail to do that, and you find yourself focusing on all kinds of things - which is not focus; they're not the main thing - that's a recipe for failure. I've just seen it too many times.

**Joe Reis:** Yeah. I mean, how do you reel that in, though? Have you guys found -- is there a magic bullet, or silver bullet for...?

**Adam Stacoviak:** There is a magic bullet. Slow down and check yourself.

**Jerod Santo:** Now we're giving you more of our lines. \[laughter\] We've got a phrase for everything.

**Joe Reis:** Yeah, we could make a whole album out of this.

**Jerod Santo:** We could, yeah.

**Adam Stacoviak:** It's challenging.

**Jerod Santo:** \[36:05\] It's challenging, but it's easier for small orgs, I think. So here we are, in a small org, and so it's easy for us to have a cohesive mission, and vision, and focus, because there's just not so many people to keep on that same focus. And so we're kind of in our perch here, telling people how to live their lives, but not in large, very complicated org structures in which these things are very difficult.

**Joe Reis:** But that's what podcasts are supposed to do. I mean, we're all supposed to pontificate, and...

**Jerod Santo:** Yeah. We're doing our job, you know? You do yours.

**Joe Reis:** If you did a coupon code, we could use "jerod20" for 20% off \[unintelligible 00:36:33.07\] First month is free. Yeah, so...

**Jerod Santo:** So yeah, it's easy for us, because we don't have to actually do it, we just talk about it.

**Joe Reis:** It' what we do best.

**Jerod Santo:** A little bit tongue in cheek there, but... I think it goes back to leadership. And leadership has to have the focus. Then they have to be able to like keep that distributed throughout everybody else. And sometimes you've just gotta remind -- I mean, even in our small little org here, even myself, even inside myself, I have to remind myself "Is this the main thing right now that you're doing? Is this actually driving value? Or are you just like doing your engineering thing? And just doing some engineering because you like engineering?" for instance. And so yeah, you have to be cognizant of it. And then in large teams, I don't know. Maybe you've worked in larger teams than we have, and can help us come up with some ideas.

**Joe Reis:** It's a good question. I think it's also up to the CEOs to really -- this is an old trope where CEOs need to over-communicate the mission, and I think that that's definitely true, but it's... But it's hard. I mean, I don't envy people who have to run companies. It kind of sucks, actually. It's definitely the hard work, but it all trickles down... Because otherwise, what happens is people just -- if you're not intentional about the focus, then people will just figure out what they think the focus is, and then that sort of just goes on its own. We've all seen this happen at companies... But you know, engineers - everything kind of flows downhill to engineering. Even an engineering-led organizations, I would say that's still the case. It's an interesting one. But it's something I'm excited about. Again, it's just the boring stuff. I think having the ability and privilege to have these discussions now... I think that just shows a sign of maturity for the tech industry, whether you're talking data or software, right? So that's pretty cool to see, and it's cool to have these discussions with people like yourself. I mean, you talk to a lot of people, and so do I, and this is sort of what I'm hearing out in the world.

**Adam Stacoviak:** There's a little framework I want to share too, on this note of keeping things in the right direction, that I learned probably a decade ago... And it's actually - I believe, it comes from a restauranteur, that was like the salt shaker theory of leadership. And basically, it boils down to constant, gentle pressure. And so imagine that you are the leader of a restaurant, and you like your tables set a certain way. And the mission of the staff, who is on the front side, is supposed to keep that table set the right way. Salt shaker goes here, pepper goes there, napkins over here etc. Now, are you gonna get upset and scream at these people when they get it wrong? No. You're gonna constantly apply gentle pressure. Hey, by the way, this is how it's done. This is how we do it. Hey, by the way, this is how it's done. This is how we do it. Every time there's a mishap, it's not freak out, "Oh my gosh, you're fired", "Oh, what are you doing?" It's just constant, gentle pressure on the mission, on the standards, on the requirements of excelling at the business we've decided to build. And they're participants and partners in that mission, and so you have to treat them like participants and partners, and that's where the constant and the gentle comes in. But it is pressure. You can't let off. It has to be constant. But it has to be gentle, I think. And that relates to the side of being respectful, and with a version of love or empathy for the people that you've chosen to work with you.

\[39:49\] Now, in that constant gentle pressure framework, if it's a constant with a particular individual, maybe at that point the gentle pressure is no longer working, and you have to apply a different thing, which is maybe "There's no longer a reason for you to be here, because you don't understand our mission. I've tried to be constant and gentle, to apply the pressures of our business to you, and it's not working, so therefore we part ways." But I think that's a lesson I learned a while back, and it's like, every time I've been in a leadership position, and I have to redirect the mission, it's been constant, gentle pressure. Not "You jerk" or "You bad person", or any sort of like negative thing you can ever think of. Jerod what was the last time I yelled at you? Like, never, right? I've never yelled at you.

**Jerod Santo:** Right.

**Adam Stacoviak:** And you've never had to yell at me. And vice versa. It's because of that. It's that I respect who he is, and if Jerod is out of alignment with what I think we're trying to mission towards, I apply constant gentle pressure. Like "Here's where I think we're trying to go. Do you agree with that? Where are we off? Where do we need to come back into sync to?" etc. And it's never been like "We're way off, man. This is not working." I mean, that only happens whenever you don't have constant, gentle pressure, and you allow it to get so out of alignment that you've missed the opportunity for the constant gentle pressure, and now you have to apply brute force, and it's not good for anything.

**Joe Reis:** I mean, it's just like a relationship or a marriage, yeah. You're absolutely right.

**Jerod Santo:** It applies to a lot of things, yeah.

**Joe Reis:** It applies to a lot of things. There's some businesses I've seen where the boss just berates the employees all the time, and I know one of them; I won't mention them, obviously... But it's basically just kind of a meat grinder for employees; they just go in and out, and it's a very hard environment for the work. And the people that stick around learn how to play the politics game, and self-preserve. But it's tough.

I mean, the Glassdoor ratings on this company and the reviews are just absolutely horrible. But yeah, so constant, gentle pressure - that's the key. Because otherwise -- constant pressure without the gentle part, that's a vice. It literally collapses you, like a black hole, or something. That's just it.

We see this a lot these days too with engineering teams and data teams, especially with the great reset, so to speak, in kind of the jobs landscape, really. I mean, the other day I saw eBay had posted record profits or something, and then also said "Oh yeah, by the way, we're letting go like a bunch of people." I don't know what the rationale behind that was, but I think the optics of that, when I talked to engineering friends on social media, they're like "Yeah, how do these two connect?" And all of a sudden \[unintelligible 00:42:29.14\] even more of an environment of probably, I'm guessing, just distrust, and feeling like you're under not gentle pressure, but constant pressure...

**Jerod Santo:** Right.

**Joe Reis:** It's interesting.

**Jerod Santo:** Interesting times. Interesting times indeed.

**Joe Reis:** What are you seeing though, in terms of -- you talk to a lot of guests... I mean, what are some of the big themes that you've been coming across?

**Jerod Santo:** With regards to the life of an engineer, or...?

**Joe Reis:** Yeah.

**Jerod Santo:** Well, I think there's a lot of trepidation right now. There's a lot of people who are hoping that the tide has turned, or is starting to turn back towards the thriving life of software engineers... Because it's been a rough 18 months, and they're still to this day -- we just had Justin Garrison on the show talking about Amazon's silent sacking... And really this trend of large orgs, not even laying off employees, but just either making their lives miserable via mandatory return to office things, or removing roles that no longer exist, and no leadership in how you're gonna find a new role. You're not fired, but they just want you to quit. Basically, kind of making it so that you quit. It's definitely a thing that we're hearing about. And a lot of people have either DM-ed, or raised their hand, or liked when that kind of a post goes out, because they had a similar experience that Justin put out there, and we talked to him about that. Those are the big trends.

\[44:00\] I think there's slight hopefulness that the layoffs are kind of waning, and the market is recovering... And there's a hope that the interest rate hikes are over, and perhaps we'll have some cuts next year, and things will kind of return to the way that they were... I don't think they're ever gonna be what they were during the peak of the bubble. Maybe someday, but... That probably wasn't healthy, and so this is the ramifications of that. So do you want that to be the case? I don't know... That's what I'm hearing.

**Joe Reis:** Interesting.

**Jerod Santo:** Adam, anything different? Anything to add to that?

**Adam Stacoviak:** I'd say it's pretty similar. I mean, I think that we all reflect on, I would say better economic days, when it seemed more hopeful... It's interesting, because I think - well, even here in Texas, we're having a... I live in Texas, Austin, Texas, and whether you want to call it a border problem or not, there's a lot of people coming through the border, that are coming through illegally. We have to have the right way to have people coming into the country. And there's cities that I live near, that are being just overthrown by large amounts of people. And then I think, "Okay, that's happening." I see the headlines. I'm in Texas, I see a version of that. And I love everybody. I want everybody to be happy and succeed. And there's a right way to do things. And I'm not talking politics necessarily here, but... At the same time, I'm like "Well, I just really want to run my business. I just want to worry about the Changelog." I want to live in this little bubble that is just like my life, and not really worry about these things out there.

So I think from my personal perspective, I wish I could just like just do what I want to do, and the world's problems would just somehow be solved. The wars, the whatever's happening elsewhere... I mean, obviously, these are all terrible things, and I'm not trying to be personally focused on it, but I would prefer a more blissful life where I didn't have to worry about all the problems of the world... And it seems like the speed of the world today just seems to just inundate everybody. And there was a time when it was just less than that. Or I was just benign to it and living in bliss. I don't know.

**Jerod Santo:** The times of call waiting.

**Joe Reis:** Call waiting, yeah. We were talking about that in the beginning...

**Jerod Santo:** That was pre-recording, we were talking about the days of call waiting. So I had a -- it's an unfortunate callback to before our listener was with us... But yeah the days of call waiting, when things were just kind of simpler... And you didn't know everything about everything all the time. And that can make your life feel frantic and distressing, and worrying about stuff that you have no control over, because you've found out about it... And how can you not worry about it, because it's worrying, you know? And so that does, I think, affect the psyche of all of us...

**Joe Reis:** It's easy to just doom-scroll on social media. I got off most social media, except for LinkedIn...

**Adam Stacoviak:** Yeah, I'm off most of everything.

**Joe Reis:** Good for you. Yeah... I just read a lot of books. That's kind of fun. And I always joke -- I even got rid of most meetings and phone calls, too. I always joke that the only time I'm actually talking to people is usually on podcasts. Those are my meetings.

**Adam Stacoviak:** Nice.

**Joe Reis:** Because I don't know, you just want to give yourself the mental space to just think, and... The thing that I've been thinking about a lot too is just sort of what's coming down the pipe with AI in terms of AI-generated content, and how useful is it going to be really, and how much do I want to consume of that, versus just actually probably going and buying print books and just reading those instead... Maybe I'll just become Amish or something at the same time, I don't know...

A thing that set me off the other day was on LinkedIn they had these AI-generated articles, so you can get the top voice in whatever topic; you happen to collaborate on an article, like this AI-generated article... And as I read through these, I'm like "Who or what are these for? These read very poorly." It's at best very mediocre coverage of a topic, that is very like uninformative.

**Jerod Santo:** Right.

**Joe Reis:** What is the point of this? And then I think there was a stat that by 2025, i.e. next year, 90%, 95% of the internet content is expected to be AI-generated. Like, what is it all for, at the end of the day?

**Jerod Santo:** What are we doing here?

**Joe Reis:** Yeah. Are you going to go read that?

**Jerod Santo:** \[47:55\] That's the hard part for me, because I 100% agree with you... And I get quite curmudgeonly about it. And I think - even just yesterday, Nick Nisi from our JS Party podcast posted some AI-generated rap song into our channel about me and TypeScript, or whatever... And yeah, it was cute. He said, "Finally, a good use of AI." And he's just joking, we're having fun... And my response was like "This is C+ rap. This rap is not good rap. It's barely entertaining. It's funny that you applied it to me and TypeScript. That's what made it funny, was your creativity." It's C+ content, and that's what you're talking about, very mediocre. It passed the class, but it's not going to change anybody's life; it's not going to be outstanding, or excellent, or any of the things that we desire in great art.

Then I asked myself, "But am I just looking at today's AI-generated content?" And I'm correct - you guys can correct me if I'm wrong, but I think we're agreeing - that it's C+ content. But it's going to be B+ in '25, it's gonna be B-... No, that's worse than B+. It's gonna be A-... You know, it's going to get to where now it's indistinguishable from magic, and then we're not going to be able to distinguish. We're just seeing it in its infancy, and it's going to be so much better quickly. And I don't know the answer to that. Is it going to be so much better quickly? Maybe, Joe, you know more than we do.

**Joe Reis:** I don't know. I mean, as a content -- let me ask you this, though... As podcasters, what are your thoughts on how this impacts people like us? \[unintelligible 00:49:21.29\] so I'd love your take on this. What do you think all this does to people like us?

**Adam Stacoviak:** I long for human touch.

**Joe Reis:** Yeah...

**Adam Stacoviak:** And I think if I live in a world where I feel like I can't discern between AI-generated, whether it's good or not, and the human touch and the why behind things, then I think I will begin to question the world more so... Because like, what is its goal towards me? Am I a transaction to transact? Or am I human to love and endure? That's the kind of thing I think about. And I'm hoping that as a society, we will all feel that way, and we will generally just push back on "Well, AI-generated content is good and all, but I care about humans", and so we sort of have a rise, or a revolt against anything generated, that is strictly non-humanistic-focused.

I'm a humanist, and that's it. I'm a human, so that's why I'm a humanist. I'm not even trying to be negative about that. It just seems so weird to even say that in 2024, in my year that I turned 45 in my life. That's just crazy that I have to declare that.

So I'm a humanist. I want to be touched and loved by other humans, not non-humans. Now, I have a dog, so that's maybe the unique thing. I do care about animals, and stuff like that. So that's where I'm a non-humanist, where I transcend and I'm like "I care about my dog." But you get what I'm trying to say. I'm not cool with an artificial intelligence thus far.

**Jerod Santo:** That being said, don't you talk to ChatGPT as much as almost anybody in the world?

**Adam Stacoviak:** Okay, fine, Jerod. You got me. \[laughter\]

**Joe Reis:** Busted!

**Jerod Santo:** Does it know that you're a humanist? Have you told it?

**Adam Stacoviak:** Yeah, I think it knows. That's because I do find it helpful. At the same time, I'm not -- I suppose... Okay, that does make sense... But I think it's because I long for what seems like, okay? ...maybe "seems like" is better placed in there; it seems like human interaction. And because ChatGPT - I mean, it doesn't respond to me. Like, it loves me back, or anything like that, so I'm not in the movie Her here...

\[51:31\]

*"I'm sorry to wake you."*

*"Oh, it's okay."*

*"I just wanted to hear your voice and tell you how much I love you."*

*"I love you, too."*

*"Okay, well, that's all. Go back to sleep, sweetheart, okay?"*

*"Okay."*

*"Okay, good night."*

*"Good night..."*

**Adam Stacoviak:** I am still interacting with it... I'm just being polite, because I'm just a polite person. I can't help it, it's my nature. But it's because I longed for humanistic touch. I suppose I anthropomorphize the thing, and make it feel more human that it actually obviously is not... Because the desire in my humanistic ways is for human touch.

**Jerod Santo:** \[52:15\] Hm... So you want your podcasts created by humans.

**Adam Stacoviak:** Oh, yeah. For sure.

**Jerod Santo:** Even if you can't distinguish. That's where I get lost... Because I can't distinguish it. So how do I know?

**Adam Stacoviak:** Well, I think if I can't distinguish it, then I'm thinking what's the motivation? What's the end game? Is it because you want to create more? So I think where the lines get blurred there i this kind of side conversation we've had behind the scenes, which is "Should we have an artificial intelligence help us with our transcripts? Should we have artificial intelligence help us with a literal recreation of our podcast, in my voice, in a different language?" And we've been talking about it behind the scenes.

We've seen that recent politician in Davos happened - like, that was super-cool. I could somehow literally listen to somebody that spoke in a whole different language, for a speech that I would often just discard, not because I don't care, but because I can't care, because I don't speak the language. I can't understand. So now we have this -- just to paint the picture for those who are catching up or listening, there was a thing in Davos, there was somebody who - I'm not sure of all the details; he spoke a foreign language in comparison to English for me. And typically, I would just not pay attention. But because somehow, someway, I'm not sure how it happened, that was ran through some sort of artificial intelligence thing, and it was his voice as a politician, just as a normal person, staking his claim and sharing his ideas, but spoke in his native language, translated to English, in his own native voice. So it's as if I heard the same person speaking English, and now I can understand. And I was like "Okay, that's cool. I can understand this person more." That to me, I guess - when we talk about generated, what is the purpose of generation, I suppose? If it's to pull the wool over my eyes, and entrap me, or ensnare me in some way in a scheme, then I'm not for it. But if it's for my betterment, and it's for me, then I think I'd probably be more aligned with it. But I think over time, even with the betterment side of it, and you can't discern it, it's like, now you question everything, because you're just not even sure if anything is for you or against you. Gosh, how doom and gloom is that...?

**Joe Reis:** Have you gotten the new Apple Vision goggles yet?

**Jerod Santo:** No.

**Joe Reis:** Me neither.

**Adam Stacoviak:** Me neither. \[laughter\]

**Joe Reis:** Curious how that's gonna work though, because the generative AI with that - I think it's gonna be a very interesting use case. I mean, I'm curious what the apps are going to be coming out with that, but it's just... I totally agree with the human touch thing. I mean, I'm about to go - right after we record, I'm going to a conference with actual people, and I feel like in-person is going to be a thing again.

**Jerod Santo:** Yes.

**Joe Reis:** Absolutely. And then tomorrow I'm going to Austin for a conference, and it's like, that's people hanging out. We tried the whole experiment with doing Zoom conferences back in the pandemic, and that was barely passable. Being in a building with 170,000 people - that actually too overwhelming. But you kind of get the idea.

**Jerod Santo:** Yeah, that's a lot. I don't think I would like that.

**Joe Reis:** No, it's like an expo at that point. You just feel like you're in a major city, walking around... But you do get to meet people, you know, and I think that that's going to be more and more of what people -- but I kind of wonder though, is that going to be something that only... It's sort of like processed food versus organic food. It's like, the human experience is going to be something that only people who have means are able to do, and everyone else is stuck with just AI-generated drivel, and that's sort of the equivalent of eating Twinkies and --

**Adam Stacoviak:** That's right, yeah.

**Jerod Santo:** \[55:35\] Well, maybe more hopeful than that. I've likened it to handmade goods... Which are still the world of the wealthy, because you can afford to pay more for this kitchen table, than the one that's at IKEA. But there's nothing wrong with the one that IKEA makes. That's the manufactured, AI version of the content. But there's still going to be a marketplace, I think, for people who are like "You know what? This was made by this guy who lives 10 miles up the road, and it took him three months, and I paid a premium for it... But I'm willing to, because it was made by a person, and I know the story." That is a thing that very much exists today inside of furniture making and stuff, and I'm wondering if that will be how content online becomes as well.

**Joe Reis:** It's a good question. I was talking to some influencers yesterday, people who get paid to do sponsored posts, and I think their biggest question is "Okay, so at what point are we kind of automated \[unintelligible 00:56:24.10\] on what we do." It's an interesting one. I don't know where this all goes... I mean, I'm quite excited about it in some ways. It reminds me of the -- I think we're all about the same age, I'm guessing, but we were all around when the web Information Superhighway came into existence...

**Adam Stacoviak:** Yes.

**Jerod Santo:** Mm-hm...

**Joe Reis:** Those were pretty fun days. I think there were a lot of good questions about where it was all gonna go, so I feel like we're back here again, you know?

**Adam Stacoviak:** Yeah, where will it go...?

**Joe Reis:** I don't know.

**Break:** \[56:54\]

**Adam Stacoviak:** I think I've heard of folks generating movies, or like alternate versions, like fan art in a way... Even that is kind of cool to me, because a human directed the AI to do something. And the AI produced it, but in such a fast amount of time in comparison to a human, who would never spend their time doing the fan art version of it. Or a scene. Redoing a scene in a different style, with different music, via an AI's help. I mean, that's where the line really gets blurred.

**Joe Reis:** There's some cool stuff, yeah.

**Adam Stacoviak:** There's a lot of creative opportunity directed by a human. I think that's where I will probably always draw my line, is like "Is a human involved in the mission and reason for this? And is there goodwill for me?" Goodwill for me I think is key. Human involved, goodwill for me. And I think if those two remain true, human involved and goodwill for me, or the pluralized me of team, or community, then I think I'm probably gonna be okay with what's generated... Because it's about an X of time saved, and ultimately a good output that is for the people I'm trying to serve already.

**Joe Reis:** Yeah, absolutely. I'll give you a good story... So I was hanging out with Colin Kaepernick a couple of weeks ago, the old NFL player. We were having coffee, for quite a while actually...

**Adam Stacoviak:** \[01:00:04.20\] Are you name-dropping here?

**Joe Reis:** No, but I'm gonna tell you in a second why this is cool. Yeah, no, he's a cool dude, and a friend, but... We were hanging out and he's working on something really cool. So he had a publishing company, which - he still has one; well, I'll rewind. So he was trying to get books published with the big publishers, and because of some of the things in these books, they'd be like "Well, this doesn't really fit what we're trying to do", so he started his own publishing company, mainly to give underrepresented voices a chance to get the stories out, in the form of books and other content. And when he saw generative AI, he was like "This is pretty cool. So I can maybe give some kid living in a poor neighborhood the chance to create his own version of a superhero and a cartoon." So this is the stuff he's working on right now, is like trying to give underrepresented people the voice, the chance to create their own superheroes, and all this really cool stuff, and tell their stories. And I think that's an awesome use of generative AI, is just giving people the ability to create whatever they want.

I mean, my son's in the other room right now just drawing. He's \[unintelligible 01:01:05.05\] but he just draws... He's actually drawing my friend who's stopping by in in about a half hour. I told him to make a really horrible cartoon of him... But I think people want to be creative, and that's why you watch movies, because you vicariously want to be a part of that scene. But now you have the ability to create that scene, I think, as we were talking about; create kind of mashups of movies that you watched, and all this cool stuff. And when I was talking to Colin, I was like "That's actually a really cool idea, in the sense of you're giving people the ability to tell their own stories in the way that they want them told." You don't have to go through these gatekeepers anymore, publishing companies, and mass media. You can do whatever you want. I thought that's pretty cool.

**Adam Stacoviak:** Yeah. My son's faced recently -- since you mentioned your son and the scenario... He was playing the adventure mode, I suppose, of Minecraft. And he's new to Minecraft. So he didn't know how to make - I believe it's called a portal, or something like that. He didn't know you had to build it, and how many bricks where required, and how to use a flint and what not to make it this -- I think it's just called a portal. I could be wrong.

**Joe Reis:** It's a portal. Yeah.

**Adam Stacoviak:** Yeah. So he's like "Dad, can you help me with this?" He's like "Maybe we can ask ChatGPT what to do." And I'm like "That's probably great, because Minecraft is so prolific, it probably has a decent answer." So of course, I dropped the question into ChatGPT, and it basically gives me a step by step instruction. And my wife was like "That's cheating." And I'm like "No, it's kind of like not cheating. You're just kind of getting over a hump, or a hurdle in the process of learning something new." And he's like "Was that AI, dad?" Because I showed him, and we did it, and it worked, and he was like "Was that AI?" And I was like "Yeah." And he goes -- his face was so huge, because AI assisted him to do something in his life. And for the audience, I made a big O face, basically. His face is burned in my brain, because I was like "Here he is, he's eight, and this is his real first experience with artificial intelligence at eight."

**Joe Reis:** That's so cool.

**Adam Stacoviak:** My gosh, that's so crazy to think about. And he was like -- the OMG face. I don't know how to describe it otherwise, but I was like "This is interesting. What will it do for the future?" And that, to me, is really cool. Having - in Colin's case, and what he's doing, that's super-cool, too. You're enabling the disabled, basically. You don't have an ability, and you're giving or offering a way to get an ability. And that's curiosity, that's creativity... And that's all positive human behaviors, that's just going to create a better world in the future. I'm for that kind of stuff.

**Joe Reis:** Yeah, that's the kind of content that I think is cool. You contrast the fact of having an election coming up, and it's gonna be deepfakes galore, and that's the --

**Adam Stacoviak:** Gosh, yes.

**Joe Reis:** ...the dystopian view of it. But it is what it is, and it's happening with without our opinions, so it's just like...

**Jerod Santo:** \[01:03:53.04\] Right. You know, we're kind of just along for the ride. I mean, at the end of the day, it's another tool, and every tool can be used for good, and creativity, or bad and destruction. You go back to the Industrial Revolution, factories, you look at the printing press, you look at guns... All these things, they're tools, and they can be used for good and evil... And very powerful tools, like these generative computer programs are, are going to be used for very good good, and very bad bad. And so that's why it's both hopeful and dystopian, because people will use them for both. And like you said, Joe, there's nothing we're gonna -- we can't stop it. I mean, the horses has left the... Corral? I don't know that one.

**Adam Stacoviak:** Stable...

**Jerod Santo:** There you go. \[laughter\] \[unintelligible 01:04:35.19\] for some reason. Yeah, the horse is out of the stable. Hold on and hope that we use it for more good than we do for bad.

**Joe Reis:** Yeah, it's interesting. I mean, even my kid though - he just likes to draw. He doesn't want to use AI. I already showed him everything, and he's just like "It's kind of boring." He continues doing his own stuff. To your point, people want to get back to the human experience, too.

**Jerod Santo:** I think so, too.

**Joe Reis:** \[unintelligible 01:05:00.20\] as engineers too, I think it's really easy to go off and use Copilot, and it's a great tool... I think it's going to invert the paradigm of how engineers think about writing code, because you're going to -- you've got to kind of know what good, performant code looks before you start using these things. I was talking to somebody yesterday about it, and they felt like half the time they had to go back and re-edit the code... And think part of it is the prompts that you give it though too, when using ChatGPT or using Copilot. But it's kind of like having a very convincing intern, who's like "This is absolutely the best code you're gonna get." It's like "Okay... I don't believe you, but I like your gumption though, man. It's good."

**Jerod Santo:** Totally. They're very confidently incorrect. Yeah, I think that as long as humans are in the loop, at this point, everything's gonna be okay, because we can say "No, that code's wrong." Or "I ran it. It didn't do what you said it was going to do." But it's the auto GPTs, which are very much just demos today, I think, and the prospect of that. Or Adam's prospect of no human touch content. The only thing that humans said was "Auto generate a movie about this", and the details of that had nothing to do with creativity. It was just on autopilot. I don't know when we're gonna get to there, but that's where I lose interest, I think. And that's where I think -- no one's there to say this code actually is completely incorrect, and it's just going to execute in production, and shut off the grid, and then be like "Oh, it messed up."

**Joe Reis:** We were joking the other day on my podcast - it's this podcast I do called The Monday Morning Data Chat on LinkedIn... But we were joking that actually the world's not gonna end through Skynet, it's going to end through a bot that goes around doing drop table on every corporate system... \[laughs\]

**Adam Stacoviak:** Gosh, yes...

**Jerod Santo:** Oh yeah, old \[unintelligible 01:06:46.22\] right?

**Joe Reis:** Yeah. And it just runs rampant. Every mainframe, everything is just gone.

**Jerod Santo:** It's just gone.

**Joe Reis:** And that's really how it goes.

**Jerod Santo:** And then we go back to the good old days of voicemail, and call waiting. Just like "Well, no more data mining. No more big data. It's all little data."

**Joe Reis:** Actually, one of my friends, Bill Inmon - he's the guy who created the Data Warehouse - he has a landline in his house. He doesn't have a cell phone.

**Jerod Santo:** Really?

**Joe Reis:** Yeah. He's like "I don't want people calling me." So if you're at his house, and it rings, he'll either pick it up, or he'll just like pick it up and slam it back down, and that's the Do Not Answer button. It's pretty loud.

**Jerod Santo:** \[unintelligible 01:07:24.17\]

**Joe Reis:** Yeah, it's pretty cool. But he'll travel internationally without a cell phone.

**Jerod Santo:** Wow.

**Joe Reis:** Which I think is bananas, but...

**Adam Stacoviak:** That's bold.

**Joe Reis:** These days, yeah.

**Adam Stacoviak:** Yeah, I would feel so lost...

**Jerod Santo:** It provides so many different utilities besides a phone, right?

**Adam Stacoviak:** Yeah, totally.

**Joe Reis:** Yeah, like boarding passes...

**Jerod Santo:** Yeah. Maps...

**Adam Stacoviak:** All the things.

**Jerod Santo:** \[laughs\] That's how you take a true adventure nowadays, is you leave the country without your phone.

**Adam Stacoviak:** Scary.

**Joe Reis:** \[01:07:52.13\] I think I'm out of the country probably every couple of weeks. I mean, I couldn't imagine not having a phone. It would be weird. Why? But I should try it some time, I guess. Maybe we take a walk in the wild side, and -- well, maybe not. No, that sounds like a bad idea.

**Adam Stacoviak:** That's actually really interesting to think about, more so than AI, is our addiction to our devices, really.

**Joe Reis:** Yeah...

**Adam Stacoviak:** I actually think that my heartbeat changed when this topic came up, because I think that I got excited and scared, with the thought of what it might be like in the process of empathizing with this person, on this journey, on this international journey, sans phone. Like, that to me is like "What?! No... No!" Screaming no several times loud. This is a podcast, I'm not gonna kill your guys' ears, but I'm thinking in my brain. I'm like Michael Scott over here. "No...!"

**Joe Reis:** And he even went to China too a couple months ago and left his phone. I mean, for a lot of reasons you probably want to bring a burner phone there... But he went there with no laptop, no phone.

**Adam Stacoviak:** Oh, gosh...

**Joe Reis:** I was like "I hope I see you again, man..." And he came back, but... Yeah, that was interesting. Do you guys have an Apple Watch?

**Jerod Santo:** Used to. Mine broke, and so I didn't get a new one.

**Adam Stacoviak:** Yeah. It's Gen 4 though. It's like super-old.

**Joe Reis:** Gen 4... Oh, I had the same one. Yeah, I had to upgrade my battery; it kept dying on it.

**Adam Stacoviak:** I can't find a reason to buy another one. I just can't. It still works, so what am I getting, really, for it? I don't know.

**Joe Reis:** I don't know. Probably nothing, actually.

**Adam Stacoviak:** It's bigger \[unintelligible 01:09:22.13\]

**Joe Reis:** I got this one, the battery kept dying, and I go running a lot, and stuff... But -- okay, so if you have the LTE connection on your watch, a fun thing to do if you want to kind of like blend 2024 with 1990 it just leave your cell phone at home, leave your smartphone at home, and just go out with your watch. Or just actually go out without a watch, and go do something, too. But it's sort of the best of both worlds. You can still take phone calls on your watch, but you don't have your phone with you. So you can't scroll anything.

**Jerod Santo:** Right.

**Joe Reis:** It's very bizarre, actually. I sort of live in this century, or this year, but I also live back in like 1985, or something.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That's funny that you say that, because I -- this is like a simplified version of it... But it's recent. I went to get my haircut this morning, and so I had to sit down for about five -- I had an appointment. So I got there on time. But the person was taking a few minutes longer with the previous customer. And I just sit there. And so what do I do? I'm in a state of boredom, in a public environment, where I don't know anybody. I'm not really trying to connect with anybody. So I, of course, go into myself - I'm self-centered - pull out my phone, look at things that probably don't even matter... I didn't scroll social media, but I looked at email, I may have looked at Slack, I think I may have checked in with this thing that I have with Jerod, we were trying to plan a trip, and stuff like that... I may have checked in with things. And I didn't interact with the environment whatsoever. I can't even remember the waiting room. Like, was there magazines there? Did I get to touch, taste and smell the environment around me, rather than just the phone? And the answer is no, because I had my phone with me. And so as a result of this, I suppose, appendage now, it's going to be there; like, everybody in the world has a phone. And you just said, taking a trip without one is like "What?!" But I just pulled it out.

**Joe Reis:** Oh, yeah. No, I mean, I've been around the world a lot, and the universal sign of like a person now, or the universal -- it's just as somebody hunched over their phone. And no matter where you go, anywhere in the world, this is the universal posture of a human.

**Adam Stacoviak:** That is sad. And I do that, and I'm sad about that, really. And we use it as a crutch to avoid, I suppose, humanity.

**Joe Reis:** Oh, yeah.

**Adam Stacoviak:** What kind of person am I? I'm like a humanist not being a humanist, you know? What's wrong with me?

**Jerod Santo:** Yeah, man.

**Adam Stacoviak:** Come on, Adam. Get together.

**Joe Reis:** You're a phonist. Yeah.

**Jerod Santo:** You're out there, in the world, with other humans, and you're talking to a robot on your phone. You ask it step by step operations for ZFS, you know?

**Adam Stacoviak:** The shame I live in, the shame...

**Joe Reis:** \[01:11:48.22\] You're doing that too, and you're engaging with your device, and it's just getting more and more signals to get you more and more using your device, too. It's a whole feedback loop. It's like "Oh, Adam likes this when he's at this place, so we'll just give him more of that next time he's getting his hair cut."

I got my haircut yesterday and my barber was telling me about somebody who is constantly just on the phone, while he's getting a haircut.

**Jerod Santo:** \[laugh\]

**Joe Reis:** My barber charged him double, he said, because it's just like "Yeah, you disrespected my time... So man, sorry."

**Adam Stacoviak:** "You either talk to me or you pay double, okay?"

**Joe Reis:** That's what he did. He's pretty ruthless about that. But I know other celebrities too that don't let you take a picture with them. They won't let you have your phone around them.

**Jerod Santo:** It ruins their cameo rate. They've gotta keep that cameo number up.

**Joe Reis:** Yeah. True story, I remember -- who was it, Maynard, from that band \[unintelligible 01:12:40.09\] He does jujitsu over where my son does jujitsu when he comes to Salt Lake, because we share the same instructor. And it was interesting, because people were like "Hey, can I get a photo with you?" and he's like "Nah, you can't..." \[laughter\] He's like "But my name is James, if you want to talk..."

**Jerod Santo:** You know, that's always an awkward moment...

**Adam Stacoviak:** Yeah, they're like "Why?" Well, because you're not gonna meet me. You're just gonna take a picture with me and then go away.

**Jerod Santo:** He's just done with it. He's just had enough pictures in his life.

**Joe Reis:** But then he introduced himself and just had a conversation, but was like "I don't want your phone around me."

**Adam Stacoviak:** "I'll be happy to answer any questions you have, or give you advice, or talk to you about my life, or whatever you think is interesting to talk about, but the photos is a no-go."

**Joe Reis:** Yeah.

**Jerod Santo:** Are there a lot of celebs in Salt Lake, or what's going on over there? You've got all these big --

**Joe Reis:** I don't know, man. I just have random friends. I got a \[unintelligible 01:13:29.19\] from Maynard that's hanging on my wall there, from the show we did here, but...

**Adam Stacoviak:** That's cool.

**Joe Reis:** Yeah. I mean, I don't know, I just have this weird thing where I just like randomly meet people. In the most random locations. I cannot explain it.

**Jerod Santo:** And don't take their picture? You know, pics or it didn't happen, Joe. So I don't know if I can believe it, you know...? \[laughs\]

**Joe Reis:** Well, he had his bodyguard there, too. So if you tried to do that, I'm pretty sure his bodyguard would like do something to you or your phone, so...

**Jerod Santo:** Yeah, but you know jujitsu, so he's gotta toil with you.

**Joe Reis:** True. Yeah. That'd be a \[unintelligible 01:13:59.05\]

**Adam Stacoviak:** Well, jujitsu is not karate, right?

**Joe Reis:** Jujitsu is all grappling. So it's all the --

**Adam Stacoviak:** Yeah, it's all grappling, it's all about -- it's really to not be the aggressor; it's to be the defense to somebody's offense. Right? It's the "Don't touch me, get away from me", and try to avoid a fight. Really just trying to trap them, to make them struggle and give up and go away.

**Joe Reis:** Yeah. I mean, it'd be really hard to go on the offense with jujitsu, because you'd have to like actively chase somebody and then try and get them into an armbar. That'd be like really weird.

**Adam Stacoviak:** Yeah, you'd have to not be jujitsu. You'd have to be a different art.

**Jerod Santo:** Well, I assume that Joe would be doing defense if Maynard's bodyguard's coming after him. I mean, wouldn't he be?

**Joe Reis:** He's a pretty -- he's a tough dude. I wouldn't want to mess with this bodyguard. I know his bodyguard, he's not one you want to mess with.

**Jerod Santo:** A bodyguard should be that type of person that you don't want to mess with. Otherwise, they're probably not very good.

**Adam Stacoviak:** Yeah, don't mess with them.

**Joe Reis:** It's the same bodyguard who's the bodyguard for Roger Waters, and other musicians. So he's been around the block a bit, but... Yeah, jujitsu is one of those things where this has developed because -- well, Brazilian jujitsu was developed for the unruly streets of Rio de Janeiro, and places like that... And the guy came up with it, or at least made it popular in Brazil, Hélio Gracie. He was really of the opinion that a smaller opponent should be able to outleverage bridge and outmaneuver a bigger opponent. And that's sort of the essence of jujitsu, is really using leverage to beat a bigger opponent in a street fight. So that's kind of where it came from. But it's pretty cool. I think everyone should learn it. It's really nice to know. So...

**Adam Stacoviak:** What I find interesting about the jujitsu story is that it's not Brazilian.

**Joe Reis:** No, it's Japanese.

**Adam Stacoviak:** That's right. It originates in Japan, but became famous as Brazilian jujitsu. By Gracie, as you just said. That's so interesting. When you research jujitsu, you're like -- well, you find the origin is Japan, but then its claim to fame is Gracie and in Brazil. And then obviously, MMA is a version of that, but not really.

**Joe Reis:** \[01:16:04.11\] MMA started in Brazil, with the vale tudo back in the day. So they used to have these bare knuckle fights, where it's like literally no holds barred. You could do whatever you want.

**Adam Stacoviak:** That's some crazy people, man. I would never do that.

**Joe Reis:** It's nut. Not at my age, no. Maybe younger...

**Adam Stacoviak:** At any age. Forget that. Let's zoom out for one second, because there's one thing that I took a note of from something you recently wrote... And you mentioned this, so I'm gonna go back to it; it was your "What to expect from data engineering in 2024", some predictions, essentially. And you mentioned Coilot being a gateway to AI, and a lot of the incoming stuff. I kind of want to -- not so much end, but I think we're coming close to a version of an end, so I want to get your take on this aspect of AI-enabled workflows, and the long-standing idea of engineers actually engineering. How's that going to play out? Like "Well, we always prefer writing code", will AI overflow this thing and turn us into just generative people? I don't know. What's the play out there?

**Joe Reis:** It's an interesting one, because \[unintelligible 01:17:07.18\] involved in the discussion that I had, like Copilot as a gateway drug to AI for companies. Because on one hand, it means companies can legitimately say "Oh, we're using AI to improve our workflows." I think you can legitimately say that; it does improve your workloads. That's cool. On the other hand, engineers want to engineer. So I suppose maybe in proper engineering, what we do \[unintelligible 01:17:32.09\] yeah, mechanical engineers, or civil engineers, back when you had drafting tables, right? You're drafting stuff by hand... And then AutoCAD comes out. Now I can just do all the designs, and have them all generated... I think that's sort of a similar-ish thing; you're still designing, but it just makes it a ton easier. But the tendency now with a lot of engineers - there's just a sort of manly or bravado feel to like writing code on your mechanical keyboard that's super-loud, like your wife could hear you in the next room if you have one of those... But it's loud, it's cathartic, and that's the experience, I think, that engineers want to have. It's like "I'm writing the code." It's like a scene of Hackers or Matrix where stuff's going on your terminal, and you feel like you're doing something.

**Jerod Santo:** Right.

**Joe Reis:** So that's the tension \[unintelligible 01:18:22.28\] You could do a lot of stuff with Copilots and whatnot, but what's the tension between me feeling like I'm doing real work...? I kind of make an equivalent thing to electric motorcycles now, and the fact that Harley had put on the sound of a motorcycle to make it sound still like a Harley motorcycle... So that's sort of the tension. The engineers I know are like "Well, that's not real software engineering. You're not a real programmer if you're not clanking on the keyboard. What's the point?" So that's the tension. But I think that it remains to be seen. I think the inevitability is these tools will integrate themselves so far into the fabric of every corporation that it's sort of the inevitability that they're going to be there.

**Jerod Santo:** Yeah... I kind of see that as just being a generational thing, perhaps, and just being like one generation away from that being gone... I mean, I liken it to manual cars and automatic cars. You'll always have your enthusiast who's going to drive their manual, but pretty much -- I mean, I could name on one hand my friends who drive a manual. And pretty much every else just drives an automatic. And it'll probably be like that with people that want to have the clicky keyboard, and the hardcore engineering, with their Vim, and all the things... People like me. We're all gonna die, and then the next round didn't even know that life. They grew up like Adam's son, at the age of eight getting instructions from ChatGPT, and their very first programming course was all code generated by GitHub Copilot. And so that for them was normal. So that just might just be a thing that passes with time.

**Joe Reis:** \[01:19:59.12\] I think you're right. I think you're right. It's just a generational thing, and we're holding on to -- you know, "Pull this mechanical keyboard from my cold, dead hands" kind of thing. Old Charlton Heston...

**Jerod Santo:** Yeah, exactly. Exactly. Because it resonates with me. I mean, not the mechanical keyboard, but all the other stuff does. Totally.

**Joe Reis:** Yeah, yeah. "Pull my Vim editor from my cold, dead hands."

**Jerod Santo:** \[laughs\] Yeah. You know, I use Arch, by the way... All of these memes of neck beard generation. That's probably just gonna go by the wayside, you know?

**Joe Reis:** And for the audience out here, none of us have neck beards. None of us have beards actually, so...

**Jerod Santo:** No. We're enlightened.

**Adam Stacoviak:** That's right. We've shaved. \[laughter\]

**Joe Reis:** We all just want to look younger, is what it is actually, so...

**Jerod Santo:** Yeah. That's true. I would be greyer if I had more facial hair. So that could be the case. I'm still back on build versus buy... \[laughter\]

**Adam Stacoviak:** Yeah, we didn't even go there. Gosh.

**Jerod Santo:** Well, Adam took a whole different direction, which is why there's two of us.

**Adam Stacoviak:** Well, I think we kind of answered in a way, didn't we though?

**Jerod Santo:** It was good.

**Joe Reis:** Yeah, we went a lot of different directions, but it was great. Great conversation with you guys.

**Jerod Santo:** It was a good ride.

**Adam Stacoviak:** I dug it, Joe.

**Joe Reis:** Yeah. I'd love to have you on my show some time, or...

**Jerod Santo:** We'd be happy to.

**Joe Reis:** ...if the audience likes the podcast, happy to be back anytime.

**Adam Stacoviak:** We can riff.

**Joe Reis:** We can.

**Jerod Santo:** Yup. Sound good.

**Joe Reis:** Well, it's what happens when you get three podcasters together. It ends up just being a... A podcast. \[laughter\]

**Jerod Santo:** It just ends up being a podcast.

**Adam Stacoviak:** It ends up being a podcast, that's right.

**Joe Reis:** Strangely enough...

**Jerod Santo:** That's a good point to end on, I think, right there.

**Joe Reis:** Awesome.

**Adam Stacoviak:** Well, thanks, Joe. Awesome having you here.

**Joe Reis:** Thanks, guys. Yeah, pleasure. Thank you very much.

**Jerod Santo:** And as we close out, real quick, thank you to our listener Darren Smith for pointing us Joe's direction. Darren recently joined Changelog++, and I was emailing with him, thanking him for his support, and asked him "Hey, what would you like to see coming up on the shows?" And he said "Joe Reis, and I said "I'm on it." And that was not too long ago. So happy to fulfill this one. Sometimes it takes us years to do listener requests, versus like weeks. So we hope you enjoyed, Darren. We appreciate you supporting us, and listening.

**Joe Reis:** Thanks, Darren.

**Adam Stacoviak:** \[Changelog Plus Plus. It's better!\]

**Jerod Santo:** There you go.

**Joe Reis:** Yeah, but no, seriously, I've been a listener of your podcast for a while, so when I heard you guys are interested to have me on the show, I was like "Yup, absolutely. Let's do this."

**Adam Stacoviak:** Very cool.

**Joe Reis:** So yeah, big fan.

**Jerod Santo:** Yeah, you're welcome back anytime.

**Joe Reis:** Thank you very much.

**Adam Stacoviak:** Yup, be back!
