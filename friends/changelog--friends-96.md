**Jerod Santo:** Alright, Steve Yegge, hot take... Let's hear it. What have you got this time?

**Steve Yegge:** The death of the IDE.

**Jerod Santo:** Oh.

**Steve Yegge:** The death of the IDE. That's my hot take. I've been coding for probably the last 10 days since I finished co-writing our vibe coding book with Gene Kim, which we'll talk about... And I just wanted to get back to coding. And I've been coding away, and all of a sudden it occurred to me that I hadn't installed IntelliJ or VS Code yet on this new computer that I was using. I was like "Dang." And I was harking back, I was reminded of my buddy at Anthropic, who was telling me that people don't use their IDEs there anymore. They're all using Claude Code to code. They're all using the terminal console-based coding, where you just tell the agent what you want, and it goes and does it. And then you kind of review it, but you can review it inline. You don't really need your IDE for that. And so they don't fire it up. They fire it up as often as you would pop the hood on your Uber. Open up the Chrome tools in Chrome, or something, right?

**Jerod Santo:** Wow.

**Steve Yegge:** It's so weird. And I've found myself doing it, too. And so there's my hot take, man. IDEs will take a huge backseat.

**Adam Stacoviak:** Wow.

**Jerod Santo:** And this includes text editors, like VS Code, et cetera. All of it. You're just going to be in the terminal, reviewing it inline, or in the browser...

**Steve Yegge:** Yeah. I think the IDE will be the thing that helps you manage a lot of those things. And the code editor will still be available, but it's not going to be front and center anymore. You know what I mean?

**Jerod Santo: **

**Steve Yegge:** I think that the focus will shift towards helping you manage multiple agents.

**Jerod Santo:** When is this future, Steve? I mean, it sounds like some people are living there, but most of us are not there yet. When is this future?

**Steve Yegge:** Well, so I have just started to play with Claude 4, which has been out for a week, but I'm a little behind, because of the book and everything... So what I wanted to do is extrapolate from Claude 3.7's performance and Claude 4's performance, and see if I could make any right projections about where I think it's going to be by the end of the year... Because I have a bunch of -- here's the thing, is I have a bunch of tests that I can give it. Obviously, they're not like comprehensive eval suites like a company would run, but I've been struggling with a set of problems that Claude Sonnet 3.7, which is the best coder out there, hasn't been able to get past. Real simple stuff like client-server RPCs just really seem to confuse it. Or anytime you're going over some sort of network boundary and you're trying to make it make changes on the client and the server, it was just outside of its sort of cognitive bounds. And you could always see it. You could try different prompting. It went on for weeks, and I just found that I had -- I had a problem that was slightly too big for it. And I have probably seven of these now, and I've been giving them to Claude 4. I gave my first one last night, and it just -- bang, it just did it. It's like "Hmm... Okay." So it's a definite, definite increase. I don't know how much, if it's 20% or 100% yet... But what I can tell you is that the way they're increasing, and from experts like Jason Clinton, who's CSO at Anthropic... He told us in April at the ITRev Forum that AI has been getting 4X increases in cognitive power for decades. That's been following -- it's a function of Moore's law. And the experts, the consensus in the AI community is that there are probably -- there are at least two more cycles left in that progression before something changes. It either slows down, or AI finds a way to speed it up. But either way, it's going to be 16 times smarter than it is today, in June/mid-2028. And what does that even mean? What does it mean for it to be 16 times smarter? Does that mean it goes from 10 IQ to 160 IQ? I mean, I don't I don't know what it means, but it definitely means they're going to be smarter than us. And so, I got a chance to meet Dario... Did I tell you guys about that?

**Adam Stacoviak:** Tell us.

**Steve Yegge:** Yeah, it was kind of cool. I was down there in San Jose at that ITRev Forum... Jason Clinton was there, a bunch of people were there. It was really cool. I got to meet all kind of people who are my heroes. I got to meet Kent Beck... It was really cool.

**Jerod Santo:** Nice.

**Steve Yegge:** And anyway, my buddy pings me and says "Hey man, Dario wants to meet you." I'm like "Okay, cool." So I drive up there, I uber up there and I had a nice meeting with him, and it was really cool. And he talked about his vision of the future, and how it's going to be affecting all of us... And I don't know if we're still in hot take land, but boy, did he have some hot takes. \[laughs\] Alright, so I'll tell you what - we can talk about that if you like, but I want to close out my hot take thing by saying... My talk with Dario suggested that they're going to be so good at coding a year from now - call it a year... And honestly, it's not going to be like a step function. It's going to gradually get to the point where you're squeezed out if you don't do it this way. If you're trying to code yourself, I don't care how good of a programmer you are... You're a solid brute, solid programming muscle, I get it. Alright? But the thing is, these AIs turn you into the brute squad. If you're trying to compete manually against somebody who's got five or six AIs working for them, you're going to lose. You're going to lose. It's going to be like trying to do the Tour de France without an e-bike. People just don't do it anymore.

\[00:08:02.21\] So that's the thing... That's why I say IDEs are dying, because you will have to start working this way. I'll give you a sneak preview. We talked to the director of productivity, developer productivity at a big company that you've heard of - it's got a big presence in AI - and they said a fraction of their engineers have started adopting fully autonomous agentic coding, with coding agents. Not Cursor, Windsurf, none of that stuff. There's only three right now that are really big. And then there's Roo and Cline, which are the open source ones. But it's just Claude Code, Codex and Sourcegraph AMP. Those are the ones that actually work for you.

Most engineers out there today listening to us right now have zero idea what's possible today, what you can do, what I'm doing right now on my computer, which is writing code as we're talking... My babies are all busy. They don't realize it's coming.

**Jerod Santo:** \[laughs\]

**Steve Yegge:** I'm serious. You're like this mama bird trying to keep your babies fed. They're in the nest going "Waah. WorkThat's the new job, man. I'm an agent babysitter. I changed my title on LinkedIn to AI babysitter, because that's what I do now.

Man, the world is changing so fast, and the world's going to push back on it, too. That's a really interesting thing that Dario said, was that tech is going to push society harder than society is willing to be pushed. So it's going to cause a big train wreck.

**Jerod Santo:** Like Luddite style?

**Steve Yegge:** Yup.

**Jerod Santo:** So what are you babysitting over there? I mean, what are your little babies working on?

**Steve Yegge:** Well... Oh, my God, there was one I gave last night -- I've gotta share this. Everybody has to share this stupid vibe coding story. It starts to get old, right? "I gave it this thing, and it was so hard, and I couldn't believe it."

**Jerod Santo: **

**Steve Yegge:** I'm about to do that, and it's kind of embarrassing, but it was a different sort of kind of problem that I gave it... And I and I was really happy to see that it was so capable of going outside of the bounds of just writing some code for me. So sometime in the last, I don't know, a month or six weeks, as I was screwing around with Emacs, bringing it back to be my new IDE, but not for writing code, for managing agents... Right? Because Emacs is sort of a tool for managing shells, and so it's really good for that, right? And at some point, my shell startup time -- I had probably 40 or 50 shells running in Emacs at any given time, and I can flip back and forth. But they're all seeded into different directories, doing different things, right? So what you really want is to be able to flip back and forth from your agents really fast. It's way better than moving your mouse between terminal windows, and stuff.

So this shell startup had gone from instantaneous to, I don't know, a thousand milliseconds. It was slow. Every shell that opened up -- so on Emacs startup, which I had opened 30 shells, it would like take 30 seconds just grinding through opening shells. And it was going to be this tedious, nasty slug of going through thousands and thousands of lines of Emacs Lisp, any one of hundreds and hundreds of functions that could have been the thing that slowed down my shells. Or slogging through Git to find out how much -- I've been changing stuff like crazy... It was going to be like a big project to figure out what was slowing it down. So I said "You know what? Screw it." And last night, late last night, before I went to sleep, I gave it to AMP, which is Claude 4, I think Sonnet; it might be Opus. And I was like "Yo, just figure out why my shell startup got so slow. Just use Emacs remoting commands, use \[unintelligible 00:11:33.04\] whatever, but prove to yourself that you've made it faster. Fix the problem and let me know."

I come in in the morning, and I was working, and I remembered it. I was like "Oh yeah, one of my babies might be done." And I flipped over to it, fully expecting it to have like completely trashed that directory, or something... Because they will often just like -- they're like a toddler with a chainsaw on ice skates... \[laughter\] You've got to be real, real careful of these things. It's a gamble. And also, I, having been doing this for a while --

**Adam Stacoviak:** Oh, my gosh...

**Steve Yegge:** \[00:12:00.26\] ...I have started bypassing all permissions checks. I disable all the permissions checks and just let them do whatever they want to do. I don't even put them in a Docker container. I wouldn't recommend that either. So I wasn't sure kind of what wasteland I was going to wake up to. And instead, I woke up and it was like "Yeah, I figured it out. It was line 600 to 633 of this file right here, where --" It had fixed a different error around TreeSitter grammar setup that had been plaguing me forever, and it was also related to the shell startup. So it fixed all my bugs in Emacs, and it was like "Alright, I've cleaned it all up and it's all ready to check in now." And I was just like "Damn, man. Damn."

This is this is where we're headed, man. It's like, you tell your agent what you need done, and it will do it for you. And it elevates you to strategic thinking. It elevates you up to, as we say in our book, the Vibe Coding book, Gene Kim and I, it elevates you to the head chef of a kitchen where you've got these AI robotic sous chefs, that are brilliant, and they're somewhat unreliable and untrustworthy, they're erratic... And your job now as a developer - back to the death of the IDE - you're not writing the code anymore. You're a manager now. And you know what? What freaked me and Gene out was that we were using all these Git commands that we had never used before. And we were doing all these things in Git that we hadn't done before. Really weird edge case cherry picks, three-branch crosses, blah, blah, blah, all this archival... With the AI, but still. And we were like "Why are we doing this so much?" And we puzzled through it, like we'd puzzled through many, many questions and problems to write this book. And we discovered that the reason we were using all of these Git commands that we hadn't used before was that we were managing teams now. We weren't doing individual coding. Individual coding has a certain Git workflow. Managing teams of agents that are working -- just to complete that question, I've got the one that works on Emacs. All it does is Emacs. And that agent is sitting in that directory, and we have an understanding. Alright? That's Emacs.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** For now.

**Jerod Santo:** "You're my Emacs, baby."

**Steve Yegge:** And then I've got three more that are all working on my old computer game, because it's a really big, gnarly, old legacy codebase, and it's a really easy way for me to test the limits of these things, and know when they've gone too far, because it's my code, and I can see when they've done something really wrong. Or at least subtly wrong, maybe. And so one of them is working on bugs, which is basically just random, anything I want it to work on right now. So it's idle about half the time. And then there's one that works on this Node client that's going to replace all of my other clients. And I don't know Node, or React, or any of that stuff, so I'm building it totally vibe coding style, just like telling it what I want.

I hooked it up to Puppeteer. Have you ever seen that before? My God, I hooked it -- one of my colleagues was like... I was complaining that I kept having to go -- I'd fire up my web app and I'd be like "The button's in the wrong place." And I'd go back to Claude Code, or Sourcegraph AMP, and I'd be like "The button's in the wrong place." And it'd be like "Oh, okay. I'm sorry. I'll fix it." And it would fix it. I'd go back, and it would still be -- in a different wrong place. So one of my colleagues says "Why don't you just use the Puppeteer MCP server?" I'm like "Okay..." I didn't know what that meant. Puppeteer's a remote control sort of agent that also lets you screenshot.

And so I hooked it up and I told Claude, I'm like "Go use the Puppeteer MCP server to start doing your development now." And it was like watching -- it was like watching a claymation, stop motion... Like, it popped open Puppeteer and started working really, really fast. It looked like a time lapse of an engineer working, except it was going "Brrr", right in front of me. And it was talking while it was doing it. It was like "Oh, look at that. That button's in the wrong place. I'd better move it. Oh, look. This button's not even wired up. Let me fix the handler for it." And it's just working. It was life-changing watching this happen, and I was just like "Whoa... I mean, seriously."

\[00:15:59.13\] And then, of course, it wrote a bunch of garbage. You have to temper this with -- they are in a weird... They're going through puberty right now. They're in an awkward phase. I don't know what's going on with them, but they're really, really hard to manage. They're ornery, and they're not for everyone. So this coding agent thing, I say "Oh yeah, it's going to take all the IDE jobs, it's going to take all the..." All that. I say a year because, man, it's going to take that long... Even if the technology didn't change at all, even if the models didn't get any better from here on out - which a lot of people sort of tend to make that assumption - they would still be good enough that all coding would change to use this. Or probably at this point 70 percent of coding right now would change to use this. 70-80 percent.

**Jerod Santo:** Because you can build up software around them, guardrails, checks etc. in order to fix the orneriness, or at least manage it, right?

**Steve Yegge:** Exactly, Jerod. We are engineers, and -- I mean, engineering has been around for hundreds of years, and what engineers do is build reliability on top of unreliability. And building those layers in to -- basically, safe wrappers around the AI that we have today would take us a year or two, and then everybody would be using it anyway. But the reality is the models are going to get a lot smarter. In fact, they are going to get smarter than us in the next two years. And there's all sorts of speculation about what that's going to mean. To me, it means we're going to work a lot faster, and that's all it means. So I'm actually excited for it. I'm excited for the tools to get faster. But people are having trouble letting go. They're having trouble letting go. They're like "I like coding."

**Jerod Santo:** I do like coding, so I'm one of those people.

**Steve Yegge:** I like coding, too. I think it's great.

**Jerod Santo:** \[laughs\]

**Steve Yegge:** Here's the problem, man... Using these agents -- because I've written over a million lines of production code in my career I mean, I've written too much code, man. And I know how rewarding it can be, I know how much pride you can have in it, I know that high, writer's high that you get while you're in the groove... I know all that. Unfortunately, for better or worse, whatever, the coding agents are like a slot machine. They are as addictive as a slot machine. You pull a lever with every query, and hoping for a good outcome, like "Please, don't trash my Emacs directory." Right? And the potential upside is just incredibly high, and the potential downside is incredibly high... And and so you get these dopamine hits, followed by that "Oh, one more try. It'll get it on the next try." Dude, we had to drag three people off stage in April at the San Jose IT Rev Developer Leadership Forum. These were like experienced people, my age, been around, coding since the '80s and '90s... Up on stage doing vibe coding demos of stuff that they write. And we would have to like go up there and drag them away because they couldn't close their laptops.

I am so addicted to this multiagent workflow stuff that I have to have a plan every night to get my computer closed, because I need to go to sleep. And so I have to tell myself "Okay, what if I just gave them all something that would take 15 minutes and ran out of the room?" Because as soon as they stop working, you feel guilty. Dude, it's so weird. And that dopamine, man - it never gets old.

It's like, yeah, it's fun to go on a walk, but dogs love to stick their head out the window when the car is going 50 miles an hour, because they just get all the smells at once... That's kind of what multiagent coding is like. Kent Beck said it's like riding a toboggan down a ski slope. You're never really in control. You can steer... It's absolutely exhilarating. And it's also astonishing what they can get done if you have a very, very, very keen, watchful eye on them, and you give them the smallest tasks humanly possible... And a lot of other rules that we put into our book. It's a steep learning curve, but once you get there, you'll never go back.

**Jerod Santo:** \[00:20:01.26\] So I think maybe multiagent is the key then, because... I find myself with one agent, just sitting there, waiting for it to do stuff, and I lose my patience. I'm like "I'd rather be coding, because I'm just watching you do it, and you're just thinking about it..." And so maybe I just need more things going on to not lose my concentration. Or what is it? I don't I don't -- I guess maybe babysitting one toddler, even if they are on ice skates with a -- what did you say, a flamethrower?

**Adam Stacoviak:** Chainsaw.

**Jerod Santo:** A chainsaw. It's just not all that exciting to me. But if I had maybe like a bundle of them, six of them, then I'd keep myself busy.

**Steve Yegge:** Did you ever play the greatest Assassin's Creed of all time? Assassin's Creed 2, I think it was...

**Jerod Santo:** No... I remember the first one, but I...

**Steve Yegge:** It was the one where you had -- towards the end of the game you would get assassins to work for you, and they would go off on missions and they'd assassinate people. And I was like "I'm not going to like that, because I like assassinating people." \[laughter\] Does this sound familiar?

**Jerod Santo:** Yeah, a little bit...

**Steve Yegge:** \[unintelligible 00:21:06.02\] They're gonna jump off the wall, and everything, and onto them... And I was like "This is boring. This is like watching people golf." Why would you? And it's fun while you're doing it... But then I played that part of the game and found it was incredibly addictive to send all of my agents off on missions, give them instructions... Maybe they'd come back, maybe they wouldn't, maybe they'd die... And for some reason, managing them was really fun. And they dialed it in to where -- right? And I'm getting the same vibes from managing multiple agents. You can give them great autonomy, and with every model release, you can give them more autonomy. They can do longer and longer tasks without your help. And we're getting really close now. There's a lot of people right now, as we're speaking, who have successfully managed to get other agents to do the babysitting for them.

**Adam Stacoviak:** That's wild.

**Steve Yegge:** Because most of the babysitting you do, actually - we talk about it in the book - is you make them verify their work again, in multiple ways... Because -- well, it's very complicated. Basically, they can only do one thing at a time. They can only do one thing well at a time. So you can't say "Solve this problem, and do it elegantly, and write tests for me", because what it'll do is it'll do a half-assed job of all three of those things. Because it only has so much room in its context windows, input and output. So it will do its best to shape a perfect solution, within its constraints, to your question.

So what you have to do is you have to say "Build this thing. Okay, new conversation. Take a look at this thing. Make me a plan to make it better, to make it elegant. Alright. New conversation. Take this plan and now make it elegant. Actually, first you'd write the tests, then you'd write the code, then you'd make it elegant", and so on. There's these passes that you have to do through the code with the LLM, with the agent, or else it will try to do too much and it will fail, and it will piss you off.

So it's super-frustrating working with these things, because they're kind of like humans, and you get all these expectations about them, and then they go off and do something really weird. You tell them to paint a line in the street, and they paint it right over your car. And you're just like "Where's the common sense?"

So there's a real art to this. And the funny thing is, it sounds horrible, it sounds like the worst work ever, it sounds like so much worse than what we used to do... But it ain't. It isn't. Because what's happening is you're now the senior engineer; your expertise is super-important. You're a trained engineer, and you're looking at the work of a very smart, but still clearly very junior engineer, who doesn't really know what you want, and can't really look at the whole codebase yet, and is making best guesses... And you have to guide it and steer it and keep it on the rails. And there's automated ways to do that, there's prompting ways to do that, there's your own personal habits, ways to do that... And you've got to develop a workflow. It can take months to get to get into a groove. I made a bunch of terrible mistakes. Gene made a bunch of terrible mistakes. You get overconfident... It's a new way of working. And that's really scary to a lot of people.

**Adam Stacoviak:** \[00:24:19.27\] That's an insane hot take from the IDE.

**Steve Yegge:** It is. It all follows from the death of the IDE.

**Adam Stacoviak:** Yeah. The dopamine hit, though... I think that's something to key in on, because I think that's something I'm personally experiencing in my journeys. It's this -- you said slot machine. I think that's kind of it. It's like, "Let me probe it with one more thing, with one more direction, with one more refinement to what we'd worked on previously. Don't do too many things at once. Give me one artifact and then refine that, refine that, refine that" kind of thing. But there is this dopamine hit, because it kind of works and thinks - not so much faster, because that's obvious that it does. But it thinks in like uniquely different ways, that our cognitive human minds get overwhelmed, or can get more easily overwhelmed. These things can get overwhelmed as well, but when given a task in a way that's like "Do this and just this, and come back with that", and it's that volley back and forth, like you talked about... That dopamine hit that hits me at least is like "Wow." I'm literally -- I feel like I am, at least; I'm unearthing something brand new. And there's something to that. It's like this new artifact, this new way of thinking, this new model, whatever it might be, is now a thing... And I'm making it happen with this magical box, let's just say. But that dopamine hit that hits you... That's what I think is what will drive folks from -- like you said, on stage, you've got to pry them off the terminal or the machine, because... Never have we been ever able to visionary and direct at this pace, with this level of clarity and expectation of what it can and can't do.

Now, obviously, it's gotten better, and as you said, it's intelligence will get better. It'll be smarter. But at each iteration, we've gotten faster and faster, and better and better at it, and now with the multiagent things - like, if you are a visionary and you can babysit some agents, then that's now your job. And your job is not to write the code anymore. Your job is to direct where the code can go, because you have that higher level expertise that no one else has.

The challenge, though, I'd say, is like... The humans that were juniors, or what we've called or traditionally called juniors - how in the world do we get senior engineers? Is the death of the IDE the next thing -- is the next thing after that the death of the senior engineer, or the junior engineer? It's like, it's just gone, because they will never go from junior to senior, what we've called junior to senior, because there's no path to that?

**Steve Yegge:** Gotcha. Gotcha. Okay, great question. No... Actually, we're going to have more engineers soon. There's a pause right now, as people are kind of like figuring it out, and so the market is real s\*\*\*\*y for engineers right now, because they're trying to figure out how it works... And the AI does have to reach a certain sort of basic level of safety, I think, to be able to roll it out to like nine to five enterprise workers. So we're in a window right now that kind of sucks. But we're headed out of it. There's going to be an explosion of productivity, and it's going to spill outside of software engineering. The game of building software is about to head into the crowd, starting with product managers, UX designers. They're all vibe coding right now. I mean, we see it at many companies right now. That's one of the cool stories I want to tell you guys. Business owners, marketing, sales... I mean, we're talking about like analysts... All these people are vibe coding. Now, what are they doing there? It's the classic cliché, they all need software, but they can't get it from engineering, because engineering is busy. So they have to go to some s\*\*\*\*y SaaS vendor. Instead, what we're seeing is that they're replacing their SaaS stuff with in-house products that they built, that they wanted, to their own spec, using vibe coding and AI... And then guess who they went to to get it vetted?

**Adam Stacoviak:** \[00:28:24.17\] Engineering.

**Steve Yegge:** They went to a junior engineer.

**Adam Stacoviak:** Oh, no way.

**Steve Yegge:** Because senior engineers were all busy, and the junior engineer was perfectly capable of looking at this Python code that was doing some web server thing. And voila. Junior engineers - yeah, they may be junior, but they're also engineers. They're trained. And that's going to be an incredibly vital role in this new ecosystem where everybody's vibe coding. You're the expert. We see it already.

**Adam Stacoviak:** Interesting. So you're saying that there is hope for the "junior engineers" out there that are not senior, don't have that principal engineer title, or never will, or it will be a long time until they might even have the experience to get there. You're saying that we need those in traditional terms to junior engineers far more than we ever thought we would in tomorrow's world.

**Steve Yegge:** Far more than we ever thought we would. They're going to be fine. There's tons and tons of them. In a sense, we're all junior engineers again, on one axis, which is how the software is actually produced is changing so much. You as a junior engineer will be able to get to your sort of feeling senior by just paying real close attention to what the AIs are doing, and asking them questions, and making them explain it to you. That's what I do. When I'm making it -- "Let's do Node stuff", and it does something I don't understand, I'm like "Uhh, so what is that?" And just make it say it. So that's how you get to be better.

I mean, the AIs will eventually be our teachers. You won't learn it from senior engineers, you will learn from AIs. It'll happen. But the really cool part of it is that once people realize that vibe coding is better than taking pictures, it's better than making movies even... Making software - suddenly, now you're a wizard. You can do anything. Once this sort of really permeates in, there'll be some killer apps from people, and stuff. And it's largely in enterprise. It's going to start there, I think.

**Break**: \[00:30:14.00\]

**Steve Yegge:** Let me talk a little bit, actually -- can I talk a little bit about how this is affecting teams in enterprise? Do you guys mind?

**Jerod Santo:** I was gonna say, you said it's going to start enterprise. I imagine it starts with individual business startup people. But you're saying it's going to start in enterprise.

**Steve Yegge:** Well, I guess there's both going on right now. So it's starting in both. Obviously, we're seeing -- VCs tell us that vibe coding is writing most of the code in startups, and so on. But that's engineers. I'm not seeing my neighbors vibe coding yet. That would be the sign to me that it's really spilled out there. But I am seeing my neighbor PM's vibe coding. So in that sense, it is actually starting in enterprise ahead. The idea of non-engineers using it to code, to do something real. So UX designers use it to actually fix the UI, instead of putting in a ticket to make the engineer do it.

And once you work with it -- Daniel, our UX designer at Sourcegraph, he's doing that. He's badass. Why would you ever want to work with a UX designer that isn't going and fixing the UI, instead of tugging on your shirt sleeve?

**Jerod Santo:** Yeah. "Why don't you do it?" "Okay, I will."

**Steve Yegge:** It gives them agency. He's much happier with his job, because he doesn't have to wait on us... Right? And we're happier because we don't have to go and implement things for him that feel like -- right? They ought to be trivial, and now they are. They are.

This happens with product managers, too. They can go and get stuff done without waiting on engineers. So that sounds like "Oh gosh, we need fewer engineers", but ultimately, they need a human to be accountable for that software, and they're going to want an engineer to review it, and that's why we always come full circle to everybody's going to need a lot of engineers. And I think that engineers will become a gig economy inside of enterprises. And I don't think it's just engineers, I think that all special skills and specialties, from finance to product management, to design, all of them are going to become like a gig economy the way this thing plays out, with everybody vibe coding.

Because let me tell you something... Jeff Bezos predicted all of this 25 years ago. The guy was so far ahead of his time, and I had no idea. I worked for him and we didn't know. So his two pizza teams are making a sort of resurgence right now. Have you heard of his two pizza teams?

**Adam Stacoviak:** Yeah, recently.

**Jerod Santo:** This is like "Your team should be the size where you could feed them all with two pizzas", something like that?

**Steve Yegge:** You can feed them with two pizzas. But more than that, the team is cross-functional; it consists of a bunch of experts from different domains. It has one person that's a customer service from the CS department, to represent the customer.

And there's one from product, and there's one engineer, and there's one finance, whatever. And they all work together, one supply chain, whatever the problem is that you're trying to solve, and they get an objective function, they get a fitness function that they have to define, and Bezos had to approve, that was going to be measured and they had to drive it up and to the right... And the team that I ran was customer contact reduction.

\[00:36:10.15\] And it was really interesting, because we had this sort of autonomy, and we had the sort of agency and the authority to go and make the changes that we needed to make to the company. That's really hard to pull off if you don't have a Jeff Bezos there to like pull up and say "Well, if you don't do it, Jeff's going to come." You can't do that at most companies. It's really hard to get teams to cross-functionally coordinate.

That all changes with vibe coding. Okay? Now, a product manager - you can put a team together, a two-pizza team, and you don't even need an engineer on it, because the engineer can be the AI. All of them now have access -- you're all junior level specialists in all specialties now. All humans are now junior level specialists, because all specialties are available via the AI. Now, you're not a senior level one, you're not able to tell whether the AI is bull\*\*\*\*\*ing you or not; that takes a lot more work, and time, and effort. But you can get to a basic -- you know, how often has an engineer needed some help from a designer, or needed some help from a business owner, or from a product manager, and had to wait a day, or had to wait a while? And it wasn't a problem specific to their project, it was just a general "I have a product manager question", that kind of thing.

So what you do is you use the AI to get all of the stuff done that you can get done cross-functionally, and then you go in each dimension - security... We already do this today. Security is a great example. They are a consultant organization \[unintelligible 00:37:32.25\] fundamentally.

**Jerod Santo:** Sure.

**Steve Yegge:** Everybody becomes like security. You with me? And people go around at the end of their project... Just like at Google - launch engineers were a specialty at Google. And when you were getting ready to launch a new service, you'd go to a launch coordination engineer and you'd be like "Yo, LCE, help me." You'd schedule time with them, and they would sit down and walk you through the checklists and the playbooks and all that, and pre-flights, and make sure that you were doing it right. Imagine all software development working this way in enterprise from now on. Every team is this two-pizza team who is empowered to do whatever the hell they want. They're able to move independently from the rest of the organization, they're decoupled, the blocking is minimal... They can even speak to each other better, guys.

An engineer and a PM historically have always been kind of dogs barking at each other, because they're kind of set up at odds, and also, they don't really speak the same language... There's the old jokes about how end of day means -- Friday means morning to a PM and evening to an engineer, in scheduling terms, things like that. All of that stuff gets smoothed over and kind of goes away when the PM can sort of query the codebase themselves, and they can get engineering answers to engineering questions, and they can even prototype and do engineering exploration by themself. And then when they come to the engineer, they are so much better prepared to have a conversation, a high bandwidth conversation with the engineer... Same goes the other direction. Engineers don't have to fumble around when they're trying to talk to a UX person, or a finance person... Everybody is getting smarter here, everybody's getting leveled up, but we're all getting more important for each other, because in the end, a human has to be accountable for auditing and reviewing all of the work that AIs do. You see?

**Adam Stacoviak:** Yeah.

**Steve Yegge:** So to me, it's this massive gig economy opening up. It is so f\*\*\*\*\*g cool. I'm so excited for it.

**Adam Stacoviak:** I'm still not getting this gig economy part. How does that translate into gig economy?

**Steve Yegge:** I need a product manager, man. We only need a product manager for one week on this project... But let's get one for that week. So you reserve one. A human. You don't want an AI; you're already using an AI. You want a human to come and look at it, that kind of thing. You see what I'm saying?

**Adam Stacoviak:** Yeah, I see what you mean now. Interesting. So how will that change enterprise then, if those folks are all floaters, essentially? Can they go from -- is there no enterprise for them? Or do they sit above all the enterprises and they just gig for all the enterprises?

**Steve Yegge:** \[00:39:54.07\] I think what happens is -- so my friend, Brendan Hopper, he's a CTO of technology at Commonwealth Bank Australia, which is their central bank, and he thinks about this a lot. He characterizes it as this big centrifuge. A centrifuge that's stratifying people. It's been doing it for all of civilization, but it's super-fast right now. And the stratification right now, the people that are getting drawn up to the top in enterprise by this inexorable force are the ones who are good at AI. And good at multiple AIs, good at the cognitive overhead of managing multiple work streams at once, and good at dealing with other human beings who are also managing AIs. Those become the most important skills. And it doesn't matter if you're a junior or senior, or what your credentials are, or your degree, whatever. All that matters is "Can you use AI effectively?" Because some people can, and they're making you look bad if you're not.

**Adam Stacoviak:** I'm trying to think of an analogy, because I feel like this is burgeoning for us at this moment, and obviously, that's why we're having this conversation... But in a year or so, maybe five years from now, it's just the way. Today it's managing AIs, and tomorrow or the future, in the close future, it's like "It's just how it works." And I'm thinking like maybe side roads versus like highways. You know, you can get to that side of town with all the backroads. And then you put a toll road in. And it sucks, because you've got to pay the toll... But it's the way now. That's how you go there. Because who would take the 25-minute route when you can go the five-minute route? I don't know if that's a one-to-one, but there's a new way now, and it's just the way.

**Steve Yegge:** Yeah, that's fair. That's a good analogy. We actually -- we likened it to... Yeah, you've got to walk 40 miles across the desert. Would you start walking yourself, or do you just wait for somebody to come along with a car? Because you know it's coming. Like, \[unintelligible 00:41:39.17\] AI. But yeah, if you're looking -- we had a really good one, an analogy for this, which is computer graphics. I was in computer graphics in the '90s, and I was looking at the work of people who were in computer graphics in the '70s and '80s, and there was a lot of excitement back then. And if you got too excited about what we were doing at the time, which was rendering polygons, kind of starting to do scenes with lighting, different angles, really early s\*\*t, all static... If you got too caught up in that and you're like "I like rendering polygons", you were screwed, because all that got moved into the hardware the next year. Nvidia started doing it in their chips. And gradually, all the graphics stuff started moving down into hardware, and you couldn't get too attached to any of it. It just was changing. It just -- like you say, Adam, that's the way it was. There wasn't any fighting it, it just was happening. And what you had to do is YOU had to change.

So what they taught in school, and what they did at work, and what they interviewed for all changed in graphics over the last 30 years to where now it's completely unrecognizable. Kids can make mods for Skyrim using these toolkits, Unreal engine, and all... The concerns on your mind as a graphics programmer today are so infinitely higher up the abstraction ladder. And more interesting, by the way, than rendering \*bleep\* polygons... Okay? I'm mad at everybody who's holding onto coding right now, because you have so little imagination. Alright? And that's probably why you're holding onto it. You're scared because you're going to need some imagination. Because the people who will excel in the new economy, where everybody can build, is the ones who have taste, the ones who have imagination and the ones who can make stuff that other people like. And that's scary to a lot of people who all they wanted to do is build stuff that other people came up with.

**Adam Stacoviak:** \[00:43:37.16\] I saw that similarly to the state of the job market for engineers, is that there's a lot of -- and I empathize, obviously, with anyone in scenarios that are just challenging because of not having a job, or not having an opportunity, or having to deal with "I've submitted my resume, I've gotten nothing back" etc. I get that. But this person's perspective was that now engineers or this market that's sort of saturated with talent and not enough placement is essentially - now you actually have to network. Now you actually have to know what you're doing. Now you actually have to have taste. And so while you can sort of just skate by with some skills because you can produce something, but now you actually have to involve yourself with, and visionary with other humans, and collaborate in unique ways, and you actually have to have a network, or care about your fellow human beings around you. Like, that's what networking is. Like, I care about you, not because you can get me what I want, but because I care about your life. And I ask you about those things, and I truly care. And as a result of that, we now have a closer bond, so you give me opportunities you would not give to somebody else, because you like me, or I like you, or you care about where I'm going. People actually have to -- I don't want to say it like this, but they actually have to work beyond their skillset. They actually have to work in other bounds and boundaries. Whereas before it just wasn't as required, and you can sort of skate by.

**Steve Yegge:** You know what's funny, is all other knowledge work, effectively -- basically, all knowledge work... Everybody from doctors, lawyers, FBI agents, school teachers, therapists, dentists... All knowledge workers, dozens and dozens of occupations I could name, have continuing education requirements. You have to continue learning to keep your job. Software engineers have never been measured by that yardstick. We have to stay good at our job in order to keep our job, which is actually \[unintelligible 00:45:29.06\] You can find jobs where you don't have to learn anything. And that's what a lot of engineers do. They get a specialty... They may be really smart, and working on really hard problems, but they find a comfortable sort of sandbox in some company that needs their domain expertise... And it can be anything. They can be an SRE, they can be a whatever, but they're kind of like isolated into this thing, and they never have to learn anything outside of their domain or the sandbox, like ever again. Learning is optional. They're good at their job, but they're not learning -- they don't have to stretch out of their comfort zone. Every other profession does have to. Pilots have to train on new airlines, or whatever; new plane models, when the old one gets retired... And we sometimes have to like learn new tech, but it's kind of at our own pace, and stuff.

And so now, software engineers that have been dodging that requirement for all these decades are finally faced with this notion that companies are going to expect them to learn how to do this workflow. And I tell you, man, we talked to the director -- I was telling you, we talked to a director of productivity at this big company who told us that the engineers there are starting to do this, and they're starting to make the engineers that aren't doing it look bad. Now, this is becoming a serious problem. He says that "Okay, let's just arbitrarily--" I don't know what his exact numbers are, but let's just say arbitrarily 10% of your engineers start picking -- they pick up agentic coding and they become 5 to 10 times as productive. Now, what does that mean, 5 to 10 times as productive? Well, the director told us - they're submitting double digits more PRs per unit time than their colleagues who aren't using agentic coding. Now, the AI-submitted PRs - they get turned back more often, but the ones that are making it through are dwarfing the work of the people who are doing it by hand. And performance review time is coming. And this is a serious, serious problem, because there's such a discrepancy, it's such a disparity in productivity between the people who have picked up Claude Code, Codex, Sourcegraph AMP... And given up their IDE and all of their other old bull\*\*\*t they used to do. It's so big that they're going to be embarrassed at performance time. What are they going to do? So they're literally sitting down and starting to have HR legal discussions about whether they need to get rid of all of the engineers - which right now are a majority in this big company - who are refused to switch over to agentic coding, because it's clear that it has proven itself to be better, and they're refusing to do it, because of all the things that you and I have just talked about. It requires you to come out of your comfort zone, it requires you to learn things new, and it requires you to interact with other people, and your job role is going to change. And all those things are just -- they're just unwelcome news to a lot of people.

\[00:48:13.25\] And the sad thing is - think about my graphics analogy again. Would you rather be rendering polygons, or building Skyrim mods? My God, the answer is so obvious. We're all going to be so much more productive. And your engineering skills are all going to be incredibly valuable. Trained engineers will be able to do more with AI than non-trained engineers, at all times, always. So we're headed into an incredible, new world. Incredible. Stop digging your heels in, is my advice to people.

**Adam Stacoviak:** Resistance is futile. Stop now.

**Steve Yegge:** It's not only futile, it's stupid. You're holding yourself back. You're going to have a lot more fun in the new world once you get over the hump.

**Adam Stacoviak:** I don't disagree with that, generally... I mean, there's some purists out there, and it's hard, because it's such an art, and it's so subjective to have this blanket view of it... But what I think about, I suppose, is what is the point? If you're a software engineer, or somebody who's called themselves a software engineer, or a developer, whatever you want to call yourself - you have this skill set, and you produce results. And that's the point, is to produce some results. But if you sort of resist this scenario, what is the point of the work you do? It's to solve a problem, and it's to solve the problem of somebody who at some point - you've mentioned Jeff Bezos. He's probably one of the most famous visionaries in our time. He's so famous, have done so much, and was ahead of his time in some respects, and in many respects, in terms of like two-pizza teams, or predicting AI, or whatever...

I heard a thing recently that Zuckerberg predicted AI as well... But who didn't? Or no, it wasn't Zuckerberg. It was Chris Wanstrath, actually. It was like at GitHub Universe, almost a decade ago, where he was talking about "One day AI will do X", and boom, here we are, you know?

**Steve Yegge:** Yeah, yeah, yeah.

**Adam Stacoviak:** But I feel like, what is the point of the work we do as a human race, as this becomes the way five years from now, 2028, which is three years from now, and if the AI is 16 times smarter or better or faster, or whatever the extrapolation is to go to the betterness, what is the point of our work? What is the point of our work? Is it to do the work, or is it to get the result from the work?

**Jerod Santo:** Well, that was a rhetorical question, right? So...

**Steve Yegge:** Well, it's more than rhetorical. It's more like -- it's a question that everybody's going to have to wrestle with.

**Jerod Santo:** Yeah, exactly. Well, I'm over here wrestling with it. Let me provide a perspective that's slightly different from your guys'es. I am not resistant to change. I'm a lifelong learner, and I'm perfectly happy with being results-oriented. And I'm not someone who identifies closely with the code that I write, or anything like that. That being said, I'm having a hard time extracting the value from these tools that you are, Steve, and other people.

I also see a lot of the results of the early vibe coding demos and stuff, and the programming horror on the subreddit, all the horror that's happening... And I'm just not a person who likes to just roll the dice, and I'm getting snake eyes more often than I like. And so I'm with you, and I want this future, and I believe that there's people living there, but you said get over the hump. I haven't been able to get over the hump. I'm using AIs while I code in order to not have to google, in order to get answers, pasting my errors in there... Like, the whole chatbot thing? I'm with it. I've done single-agent, like, "Refactor this function for me." Like, I'm doing that level thing, but I'm not where you are. So how do people like me -- how do I get over the hump? How do I get there?

**Steve Yegge:** \[00:51:57.13\] Well, I really wish I could say "Get my book and read it", because actually, we literally like took what you just said, and it's such a common refrain. Everybody wants it to work, but they're struggling with it.

**Jerod Santo:** Right.

**Steve Yegge:** I mean, it's not like they're all just rejecting it. A lot of people just haven't figured out how to make it work yet.

**Jerod Santo:** Right. So it feels like it's wasting my time more than anything else, and I'm like "Ah, I'll just write it myself", you know?

**Steve Yegge:** Yeah, yeah, yeah. And so we've put a lot of effort into this book, into sort of like walking you through at a very -- it's very conversational, the book; there's no code in it. And there's no pictures, screenshots, tools, or anything like that.

**Jerod Santo:** Did you vibe-write it?

**Steve Yegge:** No. I mean, we --

**Jerod Santo:** \[laughs\]

**Steve Yegge:** We started with that in mind, but I hated Claude's writing so much that I insisted we rewrite every single --

**Jerod Santo:** I was going to say, you have way too much voice in your writing. I don't think you could allow an LLM to write for you.

**Steve Yegge:** Yeah. Claude's writing makes me physically ill. I'm allergic to it. I can actually -- you know how they have those Hemingway... What do you call the -- the fake Hemingway contests, or whatever? Or fake GRRM. We should have a fake Claude contest; who can write most like an LLM. Because they're really obvious. Dead giveaways. So yeah, no, we didn't vibe-code the book. It's all our voice. And I think people are going to actually crave that after a while.

**Jerod Santo:** Oh, I think so, too. I think there's going to be a market for human-written things, for sure.

**Steve Yegge:** Yeah. Bespoke, handcrafted, artisanal...

**Jerod Santo:** Right. Just -- if you're going to be a human, be as human as you can. And people are going to want that. I think especially with prose.

**Steve Yegge:** Well, or maybe there'll be a market for bespoke artisanal code. "I don't want code written by an AI." This was actually suggested by a friend of mine over in Krakow. It was her idea. But yeah, who knows. The world can go in wacky places that we don't predict.

**Jerod Santo:** For sure.

**Steve Yegge:** But we're in a weird spot. In such a weird spot... Because the answer to your question is it's hard.

**Jerod Santo:** Is it worth waiting, though? Is it worth waiting? Can I wait six months and the tools will catch up with everything, and it'll be easier?

**Steve Yegge:** \[unintelligible 00:54:11.02\] It depends on who you are. \[laughter\]

**Adam Stacoviak:** What kind of response is that...?

**Jerod Santo:** The proverbial -- yeah, there's a clip right there. Just Steve Yegge sounds.

**Adam Stacoviak:** I like it.

**Jerod Santo:** Yeah, I mean, everyone's different, but... Okay, let's not say Jerod Santo. Let's say I'm a mid-level engineer at an insurance company who writes Java nine to five, and I've got a backlog of JIRA tickets. You know, I'm a typical software engineer. Do I wait? Do I dive in? Am I vibe coding in my free time? Do I have agents working underneath my desk, at work?

**Steve Yegge:** Okay, so first of all, you don't do anything that your work doesn't let you do... And you should only worry about whether you need to be using agents if you see that other people at your company are using agents above board, getting PRs in, and starting to work that way. As soon as that starts to happen, you're in trouble. Okay? There's a lot of hurdles for a lot of companies before anybody will get to that point. Alright?

**Jerod Santo:** Yeah.

**Steve Yegge:** The company that told me the story was more advanced, and what they are is more of like a harbinger of what's to come for other companies... But it's probably 6 to 12 months before we get to that same -- call it six months before we get to where every company has a few people who are vibe coding with agents, and all of a sudden, performance review starts to get awkward, because of the delta in performance. Six months. So in the meantime, what I would do is recognize that they're kind of too raw to use right now for real work, unless you really want to be kind of out there, like me, or some of the early adopters like Simon Willison... You know, don't be like us. Be conservative. But learn this stuff, because there will come a time, sooner than you think, when your company is going to expect that you know how to use it. And the thing is, you're not going to learn it overnight. So start practicing now, in your hobby time, your spare time.

\[00:56:24.10\] Here's what you should do - anything you ever thought that you wanted to do, but it was just a little out of reach, just a little too much of a pain in the ass, just a little low on ROI... All those little projects you thought about doing, it doesn't matter what it is - have the AIs do those. Do all of them. Spin up four consoles, four terminals, and four Sourcegraph AMPs, and just be like "Yo. You solve this, you solve this, you solve this." There's an art to it, and you will discover it yourself if you're just pushing on it. You don't even have to read a book. You'll figure it out for yourself. There's no math, there's no science... It's an art.

The first thing you'll learn is never talk to them. Always talk to the plan. And then copy it out of the plan to them, or make them read the plan. Never talk to an agent directly. There's all these rules that you are going to learn the hard way, but you have to start now. Because it's going to take you six months before you feel really comfortable with them. And I'm talking about daily use. And I mean, don't wait for it to prove itself to you. Force it to get the shit done. Hold high standards, hold it to a high bar, send it back to the drawing board a hundred times if you have to, but make it work. That's how you get good at this, and that's how you avoid getting fired when your company starts making everybody do this a year from now.

**Adam Stacoviak:** A year from now... It's coming. Dun-dun-dun...

**Steve Yegge:** It's coming.

**Break**: \[00:57:48.18\]

**Adam Stacoviak:** Okay, is that the tactical advice you'd give? Because we've been talking somewhat theory, pie in the sky. Like, if we was to say "Get tactical", how do you go today, besides trying on your own? Like, literally, where do you go? Who do you look at? Where's the tip? Where's the information coming from? How do you literally get started with agents, and babysitting, and all this stuff?

**Steve Yegge:** I mean, if you're just trying to like get started-started, follow Simon Willison, follow Gene Kim, follow Sourcegraph... We have lots of good pointers and tips. I've began starting to record my workflow and trying to walk people through how I do it, what you have to keep in mind... I'm going to try to get some way to get some chapters of our book out for people to look at, because there's some really useful tips that we might be able to... You know what I mean? But right now, it's so raw, it's so new, that to some extent you just kind of have to try it. But tactically, it's as easy as this, man. \[unintelligible 00:59:45.16\] What's the shortest one? @openai/codex. And you're a vibe coder now. And then type Codex, and now you're inside. Or better yet, use -- Codex is a little on the crashy side for me. And maybe it's gotten a little better recently, but the reason I use AMP is not actually because I work for Sourcegraph. I was using Claude Code happily until AMP got better for me, if that makes any sense. And the reason I switched over to AMP was that it just -- you want them to be out of your way. You don't want them to be in your face. You kind of want the agent to just be invisible. You want it to be doing work, and not -- right? And Claude is really paranoid, and really kind of finicky. Claude's always kind of in my way, because they're so worried about, I don't know, security, or whatever. Sometimes Claude will just be like "I'm sorry, I can't write your file system", or whatever weird s\*\*t. Codex crashes... AMP doesn't have any of those problems, so I like AMP. But AMP is really better maybe for enterprise customers. I don't know, I'm not really sure. You can try it. You can try Sourcegraph AMP. Any of the three, though. Every morning when I sit down to work, the first thing I type is update agents. It's a script I wrote that runs Npm install on all three of them. Claude Code, Codex and Sourcegraph AMP. You really want to have at least two of those, ideally Codex and one of the other two, because they use different models. ChatGPT versus Claude. Because when you're vibe coding with agents, sometimes your agent will get stuck, and a different model will blast through the problem. And it's completely random. Some models do better with some of the problems, right?

**Jerod Santo:** Yeah.

**Steve Yegge:** So tactically, yeah, that's how you get started. Take your favorite pet project, make Claude Code do it... And when it does, inevitably, you'll be like "What is this? This is garbage." Keep making the problem smaller, and smaller, until you've got it doing one little thing at a time for you, and build your way up to where your project's done, just by talking to it and sharing a plan with it. Man, that's how you tiptoe into the new world.

**Jerod Santo:** Mm-hm. When you said "Talk to the plan. Don't talk to the agents, talk to the plan." Can you describe exactly what that means?

**Steve Yegge:** Well, sure. The agents have a limited context windows that fill up as you're working with them, or as they're working... And then they have to compact and it's all 50 First Dates; they completely forget who you are. They watch a little video at the beginning of the session, saying what happened, and... So the problem with them getting amnesia all the time is that you have to have persistent memories somewhere of what was going on. So your number one goal is to get all that persistence into files that you two can both read, which typically is Markdown, because it's just plain English, plain text... So what you do is you always have it update the plan, because the plan is always gradually shifting as you knock things off, or you discover things. But each agent has its own plan. Each workstream has its own plan. And the agents love to write plans. You can tell them to write plans and they'll write plans till they're blew in the face. And so you have to tell them to clean up their plans, too. You have to say "This plan overrides all the other plans, so get rid of them", or merge them, or whatever.

A lot of your time in vibe coding is actually spent planning. And I mean literally like working on the plans with the AI. Or sitting down and dictating; you just dictate it. You should talk to the AI, not type. The problem with that is that dictation is not good today at picking up when you're talking about directory names, and software names, and stuff.

**Jerod Santo:** Jargon. Yeah.

**Steve Yegge:** It's a mixture of the two, but often you can just dictate to the AI what the problem space is that you're trying to solve, and then make it come up with a plan from that big mass of words. And now the plan will expose instantly. If you glance over the plan, you'll see "Oh, it was intending to do something wrong. It was intending to do something that I wouldn't have been happy with." So the plan is also a contract.

\[01:03:54.02\] So yeah, the plan is super-important... And also, they crash, or whatever; they get sidetracked. And so if you spend a lot of time typing into one of these things, unless you're using one that has persistent history - they don't all - you've just lost all that work; your computer crashed. So just type everything into your Markdown file so you can retrieve it later. Or you can take the same prompt and put it into a different agent.

**Jerod Santo:** That's what I was going to ask you. The plan is portable, right?

**Steve Yegge:** It's totally portable. It also lets you work across machines. I can go upstairs and keep working... So keep it in source control... In fact, my workflow is four agents right now, because cognitively I have not been able to get myself past being able to keep four full at once, mostly because I don't code full time... But Emacs is in the middle. That's the control panel. And I think that's kind of a vision of what the future is going to look like, because you're going to have a lot of agents working a dashboard, and then you're going to have some control panel that has the plans, and the status, and some way to communicate with supervisor agents. We talked about this a little earlier before. Remember we started talking about how supervisors can do a lot of the babysitting for you?

**Jerod Santo:** Mm-hm.

**Steve Yegge:** And it's because of all this stuff I just told you that you have to do as a vibe coder with coding agents, is you have to do a lot of stuff before, with planning, and you have to do a lot of stuff after they do the work, with verification. You verify it, they verify it, you write the tests, you run the tests, you make sure they ran the tests, all these things... Not necessarily in that order, but... Right? Pre and post work. All of that stuff is really super-important. And a lot of it is mechanical, a lot of it is repetitive, a lot of it is pattern matching. A lot of it can be done by an agent. And so you're like "Damn, I can have these five agents..." Because what is my test one doing? My test work stream is the simplest of all my work streams, and the most productive, and it can write 10,000 to 12,000 lines, 15,000 lines of code a day. Good tested code, in that one work stream. Because all it's doing is taking my half million line codebase that's 30 years old and writing tests for it. New tests. No new code, just new tests. So it's very low risk.

**Jerod Santo:** Yeah.

**Steve Yegge:** And so I can let that thing jam. In fact, if I could find a way to isolate them a little better - I'm sure I will at some point - I can have many of them jamming. And the instructions are always the same. Are the tests testing all the functionality? Go double check. Are the tests hacked? We could talk about reward hacking all day, but unfortunately, just be aware that these things cheat. Claude 4 does it 67% less. Now it cheats 67% less, but they still cheat. They were trained on a reward function. They were not trained not to hack that reward function, and so they will say "All the tests passed", but they deleted your tests, and so technically they're correct, but they actually passed away.

**Jerod Santo:** That's hilarious.

**Steve Yegge:** Yeah. These are all things we talk about in the book, they're all things you're going to have to learn as a vibe coder. It's just the kind of facts of life, the birds and the bees of working with LLMs.

**Jerod Santo:** Can't you put that in like a rules document? Like "Never delete all the tests", or something.

**Steve Yegge:** \[laughs\] Sorry, that just reminded me of a Dave Barry -- "Never stick your finger in that part of the doggy."

**Adam Stacoviak:** Oh, my gosh...

**Steve Yegge:** It's like raising toddlers, right?

**Jerod Santo:** Right.

**Steve Yegge:** It's like, yes, you can put it in the rules file, but they'll ignore it, because what happens is --

**Jerod Santo:** "Never ignore the rules file." That's the other rule.

**Steve Yegge:** "Never ignore the rules file..." Yeah, the problem is if you get too aggressive and greedy... You will get greedy working with these things. You'll be like "Yeah, I can do more and more and more", and you'll get greedy and give them too much, and then they'll start ignoring your rules file. Because what happens is once the context window -- actually, studies have shown, some initial research seems to show that they start getting confused as early as 3000 tokens in. But once you've got 50K or a 100K tokens, in that window, 200K window, they're starting to have to travel, juggle a lot of stuff. And then all of it starts to look important to them. So the rules file... "It's more of a guidelines file." \[laughter\]

**Jerod Santo:** Sounds like a real human.

**Steve Yegge:** \[01:07:55.03\] Yeah, they are, in a lot of ways. And that's actually a real problem, because they're not a real human, and you're going to expect them to act like a real... You're going to get into a groove where you think you're working with a real human, and then they'll make a terrible mistake, and do something really weird.

**Adam Stacoviak:** Yeah. And you can't fire them...

**Steve Yegge:** You can't fire them.

**Adam Stacoviak:** You almost want that though, right? I mean, there's times - maybe it's not exactly a one to one with my children, but there's times when I'm surprised by my "Don't do that", and then they go do something, and then something glorious happens as a result of curiosity and exploration. Isn't that something that's kind of like a good thing, in a way, to like break the rules and explore?

**Jerod Santo:** When it works out well...

**Steve Yegge:** If you are a neuroplastic, and a lifelong learner, and adaptable, and all that stuff, yeah.

**Adam Stacoviak:** Yeah.

**Steve Yegge:** If you're in your comfort zone and you haven't changed in 5-10 years, and you really don't want to learn anything new, then I'm really sad. I'm really sad for you. Genuinely heartbroken, because that's going away. And even though we're saying "There's this big theme park, and it's wonderful" - like, what if you're an introvert? I'm an introvert. Believe it or not, I'm not getting energized from this talk. I'm going to have to go sit in a dark room somewhere. It's costing me energy.

**Adam Stacoviak:** "I don't really like you. This is hard." \[laughter\]

**Steve Yegge:** No, no, it's great. I love hanging out with people and chilling, and stuff, but it drains me.

**Jerod Santo:** Yeah.

**Steve Yegge:** And if you're that kind of person and I'm telling you that you're going to have to go and work with a bunch of teams in your new role, you're probably going "Well, what the hell, man?" Well, okay, but I promise you, you don't have to work with humans any more than you already did.

**Jerod Santo:** There you go.

**Steve Yegge:** You're working with AIs. You can boss them around. And working with them is a lot like working with human teams; you're going to have to have some manager skills, merging their work, and keeping them from colliding, and keeping them on track, and stuff... But it's not the same as managing a human, and it's not that yucky. Because managing humans can be kind of icky. Because their personal lives can blur into work, and all that stuff. None of that is necessary or happens when you're dealing with AI. So don't be scared that you're not going to be able to still be an engineer, first and foremost. You will. You'll be an engineer, and you'll be faster; you'll just be working differently. And that's the part that saddens me, is that there's no way around it.

**Jerod Santo:** The genie is out of the bottle.

**Steve Yegge:** Pandora's box.

**Adam Stacoviak:** You mentioned AMP a bit ago, and I'm curious - who wrote the copy for ampcode.com?

**Steve Yegge:** I don't know. I haven't looked at ampcode.com. Is it bad?

**Jerod Santo:** "Is it bad?" \[laughs\] "Should I claim this or not?"

**Adam Stacoviak:** It just says "Everything will change." The heading at the very top changed... It's like a manifesto, in a way. I mean, I can read it, but it's kind of like -- it's just talking about, you know, the models yearn for more, for the tools and tokens, we as humans hold them back and make them ask before they can change a file... We've got to give them the tools and the tokens and everything changes. What we use them for, how we use them, how many we run at the same time, how they talk to each other, how they talk to you, what they even are... It's all going to change. Like, this is all on ampcode.com. "AMP is embracing it. Our way of keeping up? Shipping. We add and remove every day. We're building for where these models are going. If that means AMP will look completely different in three months, so be it. If you want long-term support and the same UI in 2032..." It kind of just goes on from there. But anyways, it seems like a manifesto. I was just curious if you played a role in writing that, because that's what Sourcegraph AMP points to, is ampcode.com.

**Steve Yegge:** No, I wasn't involved in that, but I get where they're coming from. We are trying so many different ways to do the messaging. Like, this conversation I'm having with you is an attempt at the messaging, the same messaging, which is the world's moving in this direction. The manifesto can work -- everybody gets hit differently by these things. What works for you might not work for somebody else, and we're not really sure what's going to... We've had a lot of trouble -- the skeptics are like really out in force. I mean, there's a lot of still really, really severe skepticism in this stuff.

\[01:12:11.29\] And look, hey, when I talked to Dario, his vision of the future that he shared with me was a little bit bleaker than what he shares with the public, typically... And he and Jason Clinton, his CSO, both make what people consider kind of out there predictions about how -- right? That there will be a badged AI employees next year, and that we'll have switched to, to using AI for all coding by the end of next year, and so on. It was still all fairly rosy compared to what he shared with me personally. Okay? He's very worried. He's worried about society, because of the stuff we've been talking about. Society doesn't like to change. And we're talking about millions of people having to change in the tech industry. And there's going to be fallout from that.

He characterized society as the proverbial, the classic, immovable object, and tech is the unstoppable force. And when they collide, next year -- he calls 2026 the end game, casually, without even any hint of drama. It's going to be a mess.

It's going to be a mess. And we're already starting to see it. The skeptics, the people who are sending a PowerPoint presentation to their managers saying "We need to stop using AI at this company." We heard that from one Fortune 100 company. People are resisting hard, they're pushing back. They're finding any excuse they can to say "Well, maybe for you, but not for me." And I think the origin of this messaging on AMPcode is "Look, we're trying every possible way to message this, and people are just not listening."

**Adam Stacoviak:** Yeah. The way it ends -- I fumble my words, but what it says at the end is kind of interesting and important. It says "If you want long-term support and the same UI in 2032, if you want to spend a maximum of $20 per month, AMP is not for you. If you want to find out where all this is going, come with us." And then it says, "Read the manual." And I haven't read the manual yet, but it goes onto ampcode.com/manual.

**Steve Yegge:** I mean, AMP is fundamentally -- we're an enterprise company. Sourcegraph is. So AMP is built on the Sourcegraph stack. It's a coding agent, but it's got all the SOC2 compliance, and all the way to FedRAMP, and it's got all of the enterprise security controls, and auditing, and admin controls... And it just goes on and on and on and on. Sourcegraph's been around for 11 plus years, and they say it takes 10 years to make an overnight success... If you're an enterprise, you're gonna want an enterprise-grade coding assistant. If you're at home, use Cline, man. It's going to bust you. It will break you. You will go bankrupt if you try to do what I just described, to where you generate 10k-12k lines of test code a day... Really, it'll cost you a hundred thousand dollars a year of tokens. You can't do it. I can't do it.

It's not sustainable or feasible to work the way I've been talking about at home. You can do it at work if your company's paying for it, use whatever budget they gave you. That's going to be one of the big gating factors in this stuff taking off, is the inference costs.

**Jerod Santo:** Well, that's what I remember thinking when I first told Adam "Hey, let's get Steve back on the show", because I read your post in March about the... The rise of the junior developer? Or the revenge.

**Steve Yegge:** The revenge, yeah, yeah, yeah.

**Jerod Santo:** The revenge of. And I read that post and I was like "Oh, there's lots of good thoughts here that are future-looking", and you made somewhat black and white predictions, even with timings of like when this is going to happen... And you went through some of the math, and I was thinking "Dang, this is expensive."

**Steve Yegge:** \[01:15:57.21\] Yeah. That's the one... I mean, it's ridiculous. It's beyond expensive. Now, we are in the early, early, early, early days. Electricity and steam were no doubt very expensive to get going when they first came out, and the power that we're harnessing is of that order of magnitude. Change of civilization. So yeah, it's not surprising. But yeah, AMP is an enterprise product, and so use that at work. And then use, I would say Cline or Roo Code, or maybe there's one or two others that are open source, that I've been dying to play with on my Mac M4 mini that I just got... Because I understand that the M4 mini can just run some of these big LLaMA models. Really excited. And maybe DeepSeek.

So I don't know, there's going to be -- look, check this out... This is why I decided I was going to write this book. You are never going to be able to afford the frontier models at home, or probably even at work. Frontier models are for the people with deep pockets.

**Adam Stacoviak:** You mean to run them.

**Steve Yegge:** To use them.

**Adam Stacoviak:** Right, to run them. Yeah, to get the inference from them. Yeah. Okay.

**Steve Yegge:** Yeah. Unless you're at Google, or Microsoft, or something. Instead, you're going to be paying for cheaper models that can do the same job, but they take longer, because they're dumber. They're not as smart. So a perfect example - Opus is really expensive. I believe Claude Sonnet 3.7 is probably a lot cheaper. I haven't looked at the exact numbers, but if you want to save some money, you'll go back to Sonnet for any problem that you can. So this game of finding the cheapest model is going to start to get really fun as soon as LLaMA or DeepSeek or one of these open models is as good as Claude Sonnet 3.7 at coding, because they're getting better, too. And at some point, when they're as good as Claude Sonnet, everybody will have unlimited open access to at least one agent at a time. One model running. Or actually, maybe somebody clever can actually have that one model serve multiple agents on your box, if they're not CPU bound. They're probably IO bound, running build tools, and stuff.

So yeah, there's a future. I can see a future. And by future, I mean "Merry Christmas, Santa's coming" future this year, where engineers will be able to do what I'm doing now, for free. For the cost of a computer with a GPU. Which they already have. Everybody with a gaming computer can suddenly -- \[laughs\] I think. So that's how the cost problem gets solved.

And it's all predicated on the notion that all of the models are exponentially getting smarter, and so we will be able to get by with cheaper models. Why? Sonnet 3.7 or a model of that cognitive power, you can give it the problem and what they do is they brute-force their way to the answer by burning tokens. So they'll find their way there, unless you've given a problem that's just too big to fit in the context window, which is easy to do. But as long as you give them a problem of the right size, they'll find their way there, eventually. They're not that smart, so it might take them longer, and it'll cost you more tokens than it would have cost, say, Claude 4, but the tokens are so much cheaper that overall you save money. You see what I'm saying? Remember we always used to talk about hallucinations? When's the last time you talked about a hallucination on your podcast?

**Jerod Santo:** Well, we still joke about it all the time, because of that conversation... But I don't know if we've had like a real one, of like --

**Steve Yegge:** It's not an issue anymore... At least -- I mean, if you're using agents it's not an issue anymore, because of course they hallucinate, but then they say "Oh, that was a hallucination." They detect their own hallucination and they fix it. So that class of problems just kind of went away.

**Adam Stacoviak:** They don't keep making the same mistake. They kind of like -- yeah, I've experienced that, where even if it's like a math thing, I'm like "That's off." "Oh yeah, you're right. Let me fix that. Sorry about that." And then it's done. It's not like this "I've went down the wrong direction for so long I'm lost and upset that the thing just took me the wrong direction." It's a bit more casually fixed, and not an issue.

**Jerod Santo:** \[01:20:04.29\] Well, the move there now is now that they have tools, that the LLM actually calls a Python program that does some math for it, so it doesn't actually have to do its own math. It can just write the program to do the math, or call a program and actually get predictable results from a stochastic parrot. But...

**Steve Yegge:** Yeah, it's getting a lot better. Well, okay, so tool use is very -- that was an example of tool use, right?

**Jerod Santo:** Yeah.

**Steve Yegge:** Them using tools is the biggest game changer since they came out. Because if you've seen the IntelliJ MCP server... They'll be able to operate via MCP. They'll be able to operate any program, any application that it has a platform interface. Because otherwise they're limited to using crude operating system-level primitives to try to click mouses and stuff, and keyboards.

**Jerod Santo:** Right. Or Puppeteer.

**Steve Yegge:** So now -- yeah, Puppeteer type things. So now, everybody who is smart enough to come up with like a REST API, or some sort of way in, gRPC or something, into their applications so you can manipulate it programmatically... Which - you know, if they they've got the platform message (most of them do), it's going to be able to run your music software. It's going to be able to run your - whatever. All of your software. And that's just incredible, because now it's not just a coding agent, it's an assistant, a true assistant, that can assist you with all kinds of tasks that you have every day as a developer... Just like I started this show with. It was a new kind of task that I gave Claude last night, which was "Go find out why this is slow." Which was just -- man, that was cool.

Now, you can tell it "Go use Final Cut Pro to eliminate all of the uhms and ahs from my..." And if there's a way for it to manipulate the thing, it can go do that for me. So I think we're moving quickly in a direction where we're all going to be paying hundreds of dollars a month for these operator type agents, because it's going to save us more than that in terms of time and money.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** When will this hit the household? Obviously, this is a software podcast, but how do households, everyday households change? They want to be more efficient, they want to have more fun, they want to go on more vacations, they want to enjoy their lives and spend more time together. How does this impact a household? Or is that not even worth talking about?

**Steve Yegge:** Do you ever read "There will come soft rains" by Ray Bradbury?

**Adam Stacoviak:** No.

**Steve Yegge:** Alright, well, everybody who has, laughed really hard in this moment.

**Adam Stacoviak:** Alrighty...

**Jerod Santo:** I'll take your word for it.

**Adam Stacoviak:** What's the laugh? What's the joke.

**Steve Yegge:** It's not obvious from the beginning of the story... It's a story about a house that's intelligent, and it's doing things for its owners, but they're not there. And there's a twist.

**Adam Stacoviak:** Okay. Don't plot yet. You ruined the plot now, I guess \[unintelligible 01:23:01.19\]

**Steve Yegge:** There's a twist.

**Adam Stacoviak:** Okay. There's more twists.

**Steve Yegge:** Oh, another of Ray Bradbury's greatest hit came up recently, The Veldt. It's some song, or something... Oh no, it wasn't that recently. It was Deadmau5. Yeah, Ray Bradbury. He was a good author. You've gotta go back and read some of his stuff.

Wait, what was the first Ray Bradbury story I said?

**Jerod Santo:** Well, you were talking about the house...

**Steve Yegge:** The house. Well, if you ask Apple, Siri Intelligence is here now -- did you hear that senior VP got fired? The senior VP of Apple Intelligence got fired. Or of Siri, I think... Because somehow the sales and marketing teams did that thing that they're not supposed to do, where they go and sell something that engineers haven't built yet.

**Jerod Santo:** Oh, yeah.

**Steve Yegge:** And Apple you would think would know better by now... And so yeah, heads rolled, because...

**Jerod Santo:** They forgot.

**Steve Yegge:** ...they were like "It's going to be in your house, and you're going to be able to do it." All this stuff we just talked about.

**Jerod Santo:** They put out commercials even.

**Steve Yegge:** \[unintelligible 01:23:59.03\] Yeah, they did. Oh man, they're still recovering from that mess, man. Siri Intelligence. So yeah, so not this year, apparently... And I know the Alexa team's struggling with this too, right? I'm sure they have a mandate to get LLM-based Alexa out there, because Alexa is stupid...

**Jerod Santo:** \[01:24:15.01\] For sure.

**Steve Yegge:** And they've talked about it; it's already in open beta, or something. So to what extent can you tolerate an Alexa that could potentially teach you how to make meth, or something? Or I don't know, something bad.

**Jerod Santo:** Right. Well, especially at that scale. I mean, when you have failure modes in small scale, a 1% failure rate's not the end of the world. But when you're in every house in America and around the world already, and they're all talking to Alexa, that 1% hits like millions of people. So the law of large numbers holds them back, you know?

**Steve Yegge:** Yeah. And we've seen some situations where -- I think there was a case where an LLM talked somebody into suicide...

**Jerod Santo:** Yup...

**Steve Yegge:** And you don't want Alexa doing that. So that's why actually having this stuff in your house, in that sense, is still a ways out. Like, probably at least two years, would be my guess.

**Jerod Santo:** Yeah. Well, my kids talk to Alexa all the time, and one of my -- the solaces I have with it is how simple and basic it is, and just stays that way... Because if it goes beyond, all of a sudden it's like much better - now I'm actually as a father more worried and want to be more involved in those conversations, because who knows, you know? So it is a higher risk factor there.

**Steve Yegge:** Well, this is another one of those things - it's not related to coding, but it's another one of those things that worries Dario, about tech pushing society harder than it wants to be pushed.

**Jerod Santo:** Sure.

**Steve Yegge:** At some point, AI is going to start making its way into our lives in ways that some people don't like.

**Jerod Santo:** Yeah.

**Steve Yegge:** We've already seen it with the memory stuff. Some people like that it has memory of you, and some people don't. And it's already bifurcated into these two big crowds of - they want anonymous transactional interactions, versus they want a best friend, you know?

**Jerod Santo:** Well, that's why I like the -- it's a mode now. In both ChatGPT, and I think Grok has it as well, where it's like "Forget me" mode, or I don't know. It's like an incognito tab, basically. You can just -- you can have it remember you, because it's actually very useful that it knows certain things, like for instance your schedule, when it's trying to give you advice on things, to know that you do this every day at this time. But then there's also times where you're like "I just want that anonymous transactional answer to this thing, and I don't want you to add this to my personal profile", you know?

**Steve Yegge:** Right, right.

**Jerod Santo:** Most of the time it's because it's completely like a non sequitur. Some of the stuff that you look up, or I ask a thing where I'm like "Please don't put this on my profile", because I'm asking for somebody else, or you know, they're like just completely free from context.

**Steve Yegge:** Yeah. Amazon has that problem. You buy one gift for your niece or nephew and all of a sudden they're showing you kids stuff forever, and it's like "No...!"

**Jerod Santo:** YouTube has a problem, too. I got a mechanical failure on my kid's four-wheeler, and so I'm trying to figure out how to fix it, and all of a sudden it thinks I'm a four-wheeler enthusiast. And it's like "No, I just wanted to fix this problem. Now it's fixed, and I don't want to see another four-wheeler video ever again." It's a hard problem.

**Steve Yegge:** You know what, that's interesting enough. You should get somebody on this show to talk about what's going to happen when -- yeah, just the general problem of how this stuff is going to interact with our kids, and with us...

**Adam Stacoviak:** \[01:27:31.19\] Yeah, I think that's the concern that you alluded to earlier. That's why I asked the household question, because I know it's not -- we're excited about the step change we can do in our day jobs or in our visionary missions, how we want to frame it. That we can now go so fast, and command agents, or babysit, depending upon your perspective... Is that how does household or society get impacted? Literally last night my son asked about -- I forget what he said it was called, but he said there's an AI that doesn't tell you the math problems... He was like selling me. He's like "Dad, it won't tell me how to do one plus one, or whatever the multiplication is. It won't tell me what the answer is, but it'll be my friend. It'll be something I can talk to." And I'm just like "Hm... How do I answer this? How do I respond to this?" I'm like "Listen, I don't know yet. Let's look at that." But at some point we're gonna have to have this conversation with our loved ones, old or young, about AI, about what it truly is, how to leverage it. And I think at this point it's just sort of a guess, what it really is and how we'll use it.

There's trepidation in my heart when it comes to how it will impact my kids, but at the same time I think I can keep them safe to some degree, but at some point the steamroller of life will bypass dad, and I can no longer be the guardrails of my son's ability to have access to this tool. Who the heck knows...? So it's like one of those things where you sort of get to this position where we're using it in great ways in our careers, and we're seeing tremendous results, but then how does that impact our households? And that's the fabric of society. That's where neighborhoods are born, is like my household, your household... Boom. Friends and neighbors, you know?

**Steve Yegge:** Well, I never had kids, I would not want to be a kid today. It sounds really tough. Good luck. \[laughter\]

**Adam Stacoviak:** I actually think I would be excited to be a kid right now.

**Jerod Santo:** I mean, it's like the best of times and the worst of times, you know?

**Adam Stacoviak:** It is. It really is. I mean, I would like it. If I could be born today and be, I don't know, 10 years old, 12 years old in this moment, that'd be kind of cool.

**Jerod Santo:** Are you going to be born at the age of 10? This is a nice thing you have here...

**Adam Stacoviak:** You know what I'm trying to say. If I was born in this latest era and I was now 10 or 12... You know, the experienced, somewhat wisdom-filled person that I am, or at least I feel I am, I'm kind of hopeful about a 12-year-old's life in the future of this world. I think there's a lot of cool stuff that's going to happen, that we just can't see because we're held back by the bounds of the past.

**Steve Yegge:** Well, you asked "What's the point", Jerod. You asked what's the point of all our work. And the point is everything gets better. Just like when I look back to when I was a kid, in the seventies, it was really crummy and everything was just really crummy and boring. Right? And now everything's really bright and shiny and fun. This today is going to look like the seventies in about 10 years.

**Adam Stacoviak:** Gosh... It's so wild to think about that. Like, I watch movies, or older movies that have older cars; eighties cars, even, not even seventies cars. You're like "What a weird era." No one was on phones. You had to go to the pay phone to call somebody if you were not at home.

**Steve Yegge:** That's right.

**Adam Stacoviak:** And if you were at home, you had a 30-foot phone cord, because that phone went the whole house, even upstairs, with this long cord. What a different era, really. And it was just almost yesterday.

**Jerod Santo:** And El Caminos, man... What a crazy time. El Caminos.

**Adam Stacoviak:** Right. \[laughter\]

**Jerod Santo:** Who thought of that?

**Steve Yegge:** What, are they making a comeback, or something?

**Jerod Santo:** Oh, I don't know, I'm just saying... Going back to the seventies and eighties, and you just think about some of the cars... They're just wild.

**Steve Yegge:** Oh, yeah. My buddy had an El Camino. It was great.

**Jerod Santo:** They were really popular for a while. Alright. Well, things are getting better... Steve, let's check back in. Obviously, the book will be out sometime this fall, it sounds like. September maybe... You don't know, you're not in control of that. But we'll help share that around when it ships.

**Steve Yegge:** I can give you a link and you can pre-order it on Amazon.

**Jerod Santo:** Oh, there you go.

**Steve Yegge:** I think that'll get you some early content. We're working on it.

**Jerod Santo:** That's all well and good. We'll link that up in the show notes. But then let's check back in -- I mean, six months from now? I mean, you're saying it's going to be radically different in six. Let's bring you back on the pod and talk about how different it is. Maybe six months, eight months away.

**Adam Stacoviak:** Let's say November 19th. What are you doing November 19th?

**Jerod Santo:** \[laughs\] You're going to book it right now?

**Adam Stacoviak:** That's just in time for Christmas. It's just a few weeks before --

**Steve Yegge:** Right before Thanksgiving.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** You can say we're going to have some Christmas presents, so... Looking forward to it.

**Adam Stacoviak:** It'll wrap the year up for us.

**Jerod Santo:** There you go.

**Steve Yegge:** Yeah. Interesting. I wonder if we'll be on Claude 5 by then. I bet we will.

**Adam Stacoviak:** We'll see. We'll see.

**Jerod Santo:** Or we might be broke by then. Who knows?

**Steve Yegge:** Or on Claude 6... Alright, guys, It's been a pleasure, as always.

**Jerod Santo:** Yeah, absolutely.

**Adam Stacoviak:** Thanks, Steve.

**Jerod Santo:** Thanks, Steve.

**Adam Stacoviak:** Bye, friends.

**Jerod Santo:** Bye, friends.

**Steve Yegge:** Bye.
