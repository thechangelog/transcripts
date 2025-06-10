**Jerod Santo:** I want to read your title, because -- I mean, you just can't memorize that thing.

**Amanda Silver:** I know. Sorry. \[laughter\]

**Jerod Santo:** No need to apologize. It's a spectacular title.

**Adam Stacoviak:** I love it. Let it loose. Let it loose.

**Jerod Santo:** Well, today we're honored to be joined by Amanda Silver, CVP - that's Corporate Vice President - for Microsoft's Developer Division. You're the head of product design, user research, general manager of engineering systems... That's a lot.

**Amanda Silver:** It is. It's incredible.

**Jerod Santo:** What does it all mean?

**Amanda Silver:** What does it all mean? I mean, I think at the end of the day there's a group inside of Microsoft that's focused primarily with developers as our primary customers.

**Jerod Santo:** Okay.

**Amanda Silver:** And so when you think about what does Microsoft actually deliver to customers? Visual Studio Code, Visual Studio, .NET, TypeScript, our Azure application platform, our DevOps solutions... We work very, very closely with the GitHub team, do a lot of product integration across our products... So that's kind of what the gig is.

**Adam Stacoviak:** How do you feel about leading people? Is it fun for you?

**Amanda Silver:** I love leading people. I mean, I've actually done it since fairly early in my career. I think maybe two or three years in I started to be a manager of people. When I first started at Microsoft, I was working on the interop layer between .NET and unmanaged code... And so I kind of think about it as like I started at the systems level, and then I started working more and more on programming language design and API design. And then from there, I got more involved in the editor experience, the debugging experience... And that's about when I started to become a manager.

And for me, I think initially, it was a way for me to have more control and more influence over the product, so that was exciting. But I think over the years, I think anybody who's been in the industry long enough recognizes that software is 90%, 95% about people, and how do you construct the team, and how do you motivate them day to day, how do you have the right balance in terms of trying to push them to do what they may not be ready to do on their own, versus when do you take the temperature off and let them recoup from an intense period.

**Jerod Santo:** Right.

**Amanda Silver:** So I find a lot of joy in the act of management, and I also will say, I've come across a lot of managers in my history that are much more self-serving. That's their primary objective. And empire building, a lot of people call them... And for me, I think it's really important that I maintain my personal integrity, and I have to check my ego a lot to make sure that I'm not putting myself before my people.

**Adam Stacoviak:** That's tough, sometimes, right?

**Jerod Santo:** I don't know, I've never led quite as many teams as she's led, I'm sure... So you said empire building, and I date all the way back to when I, as a young college student, used to refer to Microsoft as evil empire. So just full confession. You know, the M dollar sign people... And over the years, I've changed. Microsoft has changed, it seems. And the embracing of open source, which has been kind of a decade-long story, and perhaps more, has been an amazing thing to watch from the outside, and see my relationship to Microsoft change over the years... And I think you've been along for the entire ride.

**Amanda Silver:** Yeah. I mean, that's been kind of core for my career at Microsoft, in a lot of senses. And even when I started at Microsoft in 2001 - let's back up for a second.

**Jerod Santo:** Okay, that's my college years right there.

**Amanda Silver:** When I started at Microsoft, I had two older brothers who were both in the tech industry, and were part of the dot-com bubble bust.

**Jerod Santo:** Sure.

**Amanda Silver:** They were each on their third job or something like that by the time I graduated from college. And so I thought, when I was graduating, like -- I thought I was going to be a scientist, because my dad was a scientist... But I thought, "You know, if I'm going to go get a PhD or whatever, maybe I should try industry a little bit." And so on a long shot, I just went to the tech career fair and handed out my resume to different companies that I thought would pay me decently in cash, because I wasn't interested in stock at the time... And Microsoft seemed like a relatively stable company. And Google at the time was a startup, and I was like "Not going to apply."

**Jerod Santo:** \[00:08:05.20\] \[laughs\] Too risky.

**Amanda Silver:** Too risky.

**Adam Stacoviak:** That's funny.

**Amanda Silver:** So I ended up at Microsoft. And I think my first decade or so I was really focused on enterprise software, .NET primarily. And it was like the Java/.NET tension, and that was kind of the main primary competition that we were thinking about at the time... But open source wasn't in the vernacular, it wasn't a thing at the time...

At the same time, I think it was ASP.NET that was the first to actually include open source in the product jQuery. Everybody had to use jQuery to be able to manage the different browser experiences, and so we first started to ship jQuery as part of ASP.NET, I guess in the 2008, 2009 kind of era. At the time, I was moving more -- I kind of moved into the JavaScript space. I started to work on - around 2009, 2010 I started to work on the Chakra JavaScript engine that was inside Internet Explorer at the time... And that was like a really big change in terms of the day-to-day competitive atmosphere that we were working in. Enterprise software moved much more slowly than the pace of the web at that time, and so it really changed the cadence for what we had to think about... And that's actually when we started to work on TypeScript.

TypeScript, originally, when we first started, was really trying to answer the challenge that we had inside Microsoft, which was that we were building what we now call M365, which is like the web experience for Excel, and PowerPoint, and SharePoint, and everything... But we had this challenge that we had a lot of developers inside Microsoft that had deep, deep, deep familiarity and decades of experience with C++ and C\#, but they really didn't know how to build for the browser. They didn't know how to build complex applications in JavaScript. And actually, at the time, the industry didn't really, either.

**Jerod Santo:** Do we now? \[laughter\]

**Amanda Silver:** We're a lot better.

**Jerod Santo:** We're getting there.

**Amanda Silver:** But a lot of the challenges were really about encapsulation and modularity, and how do you create modules. And so that's where TypeScript came from. And that's when we -- TypeScript was really our first open source project that we did fully open source from the get-go. And I remember in that era it took me like six months to convince the muckety-mucks that we should --

**Adam Stacoviak:** The muckety-mucks...

**Jerod Santo:** How did you finally convince them? What was the winning argument?

**Amanda Silver:** I think the argument was... So our objective at the time was to make sure that our internal developers didn't end up on a different path than the broad open source ecosystem that was benefiting from the evolution of JavaScript. We had decades of experience at that point of building our own C++ compiler, that kind of became really more the internal Microsoft C++ compiler, and was divorced from other paths of C++ compilers that were being used more broadly in the industry... And there was a challenge in terms of trying to keep them aligned. So over time, the internal Microsoft developers didn't get to benefit from what was happening in the broad industry on the C++ compiler. So with that experience, looking at this problem of "How do we address this large-scale JavaScript solution challenge?", we decided first of all we have to kind of stay in line with what the broad web industry is going to end up using...

\[00:12:01.18\] But then secondly, we also thought that if that was going to be the case, if we wanted to create something where we call it "first party equals third party", meaning that our developers internal to Microsoft use the same tools that our third party developers use, our external developers use.

**Jerod Santo:** Okay...

**Amanda Silver:** If we wanted to accomplish that, then we had to build something that the JavaScript community would actually use and like. And at that time, there was still a fair amount of hostility towards Microsoft in that community.

**Jerod Santo:** Sure.

**Amanda Silver:** And so we absolutely had to launch it as open source, to be able to introduce TypeScript to the world and start to get traction.

**Adam Stacoviak:** From the inside, describe the hostility.

**Amanda Silver:** The hostility from the community?

**Adam Stacoviak:** Enumerate over how hostility shows up and manifests...

**Jerod Santo:** Yeah, how do you see it?

**Adam Stacoviak:** ...from the developer community at that time.

**Amanda Silver:** Well, I mean, there's many different forms. There's some folks who would never even consider anything from Microsoft, because there's just some kind of halo effect of history, or something like that, that they would refuse to use anything from Microsoft in their stack, period. And that they won't even look at how good the technology is.

Then there's kind of like the indifference, or treating Microsoft products as though they are irrelevant... And they just, again, wouldn't use it or consider it because Microsoft couldn't come up with it. It's kind of a disbelief, right? Microsoft couldn't come up with anything useful. And then there's the more kind of common conversations that we have inside the industry - I think everybody has them - which is more of the debates, where it's like, you end up with one developer who likes the technology, and can speak about the advantages of the technology, and another developer who has another argument, and they dislike the technology, and they will enumerate all of the ways that they dislike the technology, but really, at the core of it it's really some other kind of emotional thing. It's not actually on the technical merits.

**Jerod Santo:** Sure. I think in the past that was a lot clearer lines to draw, because you kind of couldn't live entirely in Microsoft's world, or live entirely in the open source or Unix-y world... And now it's just much more of one world, where it's like -- even if you are skeptical of Microsoft, try not to use some Microsoft open source. It's going to be used around you, and probably forced upon you perhaps by your teammates or something... And at the same time -- I mean, I think Azure made that change, to a large degree. Between open source and Azure in the cloud, it's lik, yeah, kind of ubiquitous at this point.

**Amanda Silver:** Well, that was the next thing that happened after TypeScript. We started to get a little bit of traction with TypeScript. And actually, there was a fantastic partnership that we had built with the Google Angular team at the time, that actually kind of got TypeScript... You know, in some senses, no programming language starts to get traction until it has frameworks. And so it was the Angular team at Google that we had a really close relationship with in building TypeScript in that era. And this was, again, 2011-2012... There was a lot of fickleness in the web community in terms of different frontend stacks. It was Angular, then React, and then Vue, and so on and so forth. But six or seven different frontend frameworks kind of made it through in those four or five years, that were very, very popular. And what became fairly obvious to us was we needed to create something that was a little bit more durable, that would be able to survive those different epochs of frontend frameworks. And I think over time, TypeScript kind of became that thing - which was great - and started to get more of the frontend community to use something in our stack, almost to their chagrin or reluctance or whatever... But I think that started to open the door. And then --

**Jerod Santo:** \[00:16:15.05\] And then VS Code kicked the door open. \[laughter\] Am I right?

**Amanda Silver:** And then we introduced VS Code. And I think that, in a lot of senses, TypeScript and VS Code actually went really hand-in-hand... Because part of what TypeScript was doing was creating static types over JavaScript. And the tooling for JavaScript wasn't particularly good at the time, because it was very hard to build great tooling for a dynamic programming language. And what TypeScript did is it created a way that we could create fantastic tooling. Whether you were writing code in TypeScript or in JavaScript, it didn't matter. We could create great tooling based on the TypeScript language service in VS Code.

And so the hypothesis was that if we created a great developer experience for TypeScript and JavaScript in VS Code, that every developer that's a web developer, it doesn't matter what you do on the backend, everyone has to do a little bit of JavaScript. And so if we created a great developer experience for JavaScript, that that would open doors that would ultimately allow us to pitch a larger tent that brought more developers into the fold, and help them to consider Azure, or any of our other services.

**Jerod Santo:** In retrospect, it's kind of a master stroke. I'm not sure if you masterminded this, or Satya did, or somebody else... Or if it just happened kind of organically over time, as things tend to do... Where it's like these dominoes just lined up, and really did change the brand and the developer relationship to Microsoft over time.

**Amanda Silver:** Well, I mean, I will say, certainly while I was present and helping and involved in shaping the strategy -- I definitely cannot take credit for the overall direction, and whether it was Anders Heilsberg helping shepherd TypeScript to come to the fore, or Erich Gamma and team kind of building VS Code... You know, just incredible people that I've gotten to work with over the years.

**Break**: \[00:18:36.11\]

**Jerod Santo:** So now you have VS Code, and TypeScript, and GitHub...

**Amanda Silver:** Yeah. Well, that was a little bit later.

**Jerod Santo:** Yeah, a little bit later. Maybe I'm jumping ahead. But I'm trying to get to present day, because here we are, at Build 2025...

**Amanda Silver:** That's right.

**Jerod Santo:** I was counting the mentions of "agentic" in the keynote this morning, because I'm a nerd like that, and I got to 187.

**Adam Stacoviak:** Okay, yeah.

**Jerod Santo:** Yeah, I even left off things like "model", or "MCP", or... I left Copilot off, which is like...

**Amanda Silver:** Wow.

**Jerod Santo:** Because I feel like you're just going to get to a thousand. I can't count that fast.

**Amanda Silver:** Well, you could always take a transcript, give it to an AI, and it can count it for you.

**Jerod Santo:** That's true, but I wanted to do it live.

**Adam Stacoviak:** I thought about that, too \[unintelligible 00:22:20.09\] I was like "Yeah, you know... It'll be easier later."

**Jerod Santo:** I thought about it as well, but you know --

**Adam Stacoviak:** "...on a word calculator."

**Jerod Santo:** ...we're going to keep the mind going as well... VS Code - I don't to call it a Trojan horse, because it has negative connotations, but it's kind of this thing that you've gotten out there now, as an open source project, and as a product that... I mean, how many millions of people use it, right? You probably know rough numbers...

**Amanda Silver:** We have 50 million monthly active users.

**Jerod Santo:** 50 million.

**Amanda Silver:** Five zero. Across VS Code and Visual Studio together.

**Jerod Santo:** Okay, so that's two of them.

**Amanda Silver:** Yeah.

**Jerod Santo:** And which one's bigger?

**Amanda Silver:** VS Code.

**Jerod Santo:** VS Code's bigger.

**Amanda Silver:** Significantly.

**Jerod Santo:** So, you have both arms of that. You have the IDE people in Visual Studio, and then you have the text editor people in VS Code. And through those platforms you can launch all this other stuff, right? Like, all this Copilot stuff. Is that how you look at it, or is that just how I look at it?

**Amanda Silver:** I think that we can kind of bootstrap a lot of developers to get more familiar with Copilot, for sure... And I think that in a lot of senses the code editing experience -- the table stakes have changed. You have to have AI as part of the code editing experience. So I don't know if it's as much as us going and forcing it on everyone, as much as it is "This is what is now expected of a modern code editor."

**Jerod Santo:** Right. And I don't mean forcing it. I just think that you have this platform in which you can launch other stuff. And Copilot really has had a great opportunity there, to just be like "Bam. Right there. You're already using VS Code..."

**Amanda Silver:** That's true.

**Jerod Santo:** "It works great in VS Code. Click the button, bam."

**Amanda Silver:** I think that in a lot of senses -- you know, Microsoft has always been a developer-first company, since the MS-DOS BASIC days. That's been where Bill Gates' heart was at, and I think that as it moved through Balmer to Satya, we've consistently had a great sponsorship for our developer tools and platforms throughout history. And I think that the reason for that is because at the core, the CEOs and Microsoft always thinks about its reason to exist as a platform company. We are building a platform that other people build incredible things on top of, and to do that, you have to have developers as your focus. And so I think of the work that we do in the developer division as - it is a platform to bootstrap new things, new platforms, new adoption of new tools, new workflows... No question. But at the same time, there's lots of things that we've tried to launch in that way, and it didn't take off.

**Jerod Santo:** So it helps, but it's not like a cure-all.

**Amanda Silver:** Yeah. Exactly.

**Jerod Santo:** It's still got to be good.

**Amanda Silver:** Yeah.

**Adam Stacoviak:** Well, I think it's telling though that it happened with VS Code, though. It's 50 million developers across two different editors, combining them I guess that way... And that's a lot of developers you have a captive audience. I think that's what he's alluding to, is you have a captive audience to say "Okay, as you launch new things", or even breakthrough, like Copilot, for example, that you have a lot of developers that already have attention... And it's not that much harder to launch. It's distribution for an idea.

**Amanda Silver:** I would say, actually, that developers are one of the most empowered audiences across all of the audiences that we target. That they vote with their feet more than any other audience that exists, whether it's consumer, enterprise etc. Enterprise - totally different way that they drive decision-making. Developers - it's an end-user consumer audience that basically chooses things based on what's working for them.

\[00:26:13.11\] And we see all the time developers picking up new coding editors, picking up new frameworks... They're technology enthusiasts. That's actually one of the things that makes the job so rewarding, is I can launch something at the beginning of the day, and by the end of the day I know if it was a hit or a dud, because I have so many early adopters that are kicking the tires. And I think that we don't have a captive audience at all with our developer tools. I think that developers have a tremendous amount of agency.

**Jerod Santo:** Yeah.

**Amanda Silver:** The way that we think about it is we have to win their loyalty every day with actual great product experiences.

**Jerod Santo:** So this reminds me of a post I actually put in Changelog News today - I think Avdi Grimm wrote this - called "Developer Tooling is a Lousy Business." And he actually enumerated some of the points that you're making. You're saying it's great for us as developers, because we have the agency you speak of, and we're really, I guess, adept at handling our tools, and changing our tools... And that makes us somewhat of a fickle audience, because "What have you done for me lately?"

**Amanda Silver:** That's right.

**Jerod Santo:** And so in that sense, I guess, how is Copilot changing? Because I remember when it first came out and it was autocomplete, and it kind of was game-changing in that way, but it was really a non-deterministic autocomplete. That was good; it had its problems. And it has grown since then, and you guys continue to iterate and make it more and more awesome, and this year you're announcing a lot of it being a coding agent. Can you tell us all about it?

**Amanda Silver:** Yeah. Well, so in a lot of senses Copilot has gone through the same epics that AI itself has gone through. Over the past couple of years the AI basically got to the point where it was good at doing token prediction, and things like that, but then over the last couple of years we introduced chat, and that allowed you to have a conversation with a knowledge base based on retrieval-augmented generation... And then just over this past year, it started to get to the phase where it could actually start to take actions, because the models themselves got to the state where they could actually reason over what they were working on.

So for Copilot, we started with completions, and the completions at first were just a single line of code, and then they got to full function bodies, and then they got to longer, maybe a whole file... And then last year we introduced multi-file edits, so that you could actually make multiple changes to your codebase at once based on a basic prompt. We introduced chat capabilities, which could be based in the context of the project or the source code that you're already working in in the repo, and that kind of started to change the game... But I would say nothing has accelerated the capabilities as quickly as what we introduced with agent mode this past February, and then it's kind of rolled out over the past few months.

But agent mode - it is shocking what you can accomplish in just a really short amount of time, just letting it go. Basically, what you do with that -- and it's also had its own acceleration. But what you do with agent mode is you go into the prompt, into the Copilot chat experience, and you switch it to agent mode, pick a model, whether you want Sonnet 3.7, or you want GPT 4.0, or whatever you want to use... And then you give it a prompt, like "Add tests for this particular project." And it will then iterate and self-evaluate as it's iterating.

\[00:29:53.13\] So for example, in my demo earlier today, all I did was I gave it a source code repo for a website, and I said "Test this solution and write some tests, write some integration tests for me." And it basically started to do all of the automation to bring up the Playwright Automation Framework, bring up the website, start to traverse all of the different paths that it could go through in terms of the various different customer journeys on the website, and then it started to generate the tests themselves. And so what used to take me hours, maybe a half day, I can now get done in just a couple of minutes using agent mode. And so I think that's really changing the equation in terms of what these tools are capable of.

**Jerod Santo:** Yeah, it's really ramping up the potential gains. One thing that I fear with that is the more you change, the harder it is to find the thing that went wrong. It's like the needle in the haystack problem, where if it's an auto-complete of a single line - cool, I can just see what it says. If it's a function, I can kind of read through that real quick, or maybe go in and make changes. If it's a file - okay, now it's getting big. But as it's like multi-file changes, with all of this stuff going on, and it's been thinking for four minutes, and I'm not sure what it was thinking... It'll tell me if I want to look at it, but you know, here's this big change we're going to make...

**Amanda Silver:** Change log?

**Jerod Santo:** Exactly.

**Amanda Silver:** \[laughs\]

**Jerod Santo:** And now I've got my code review step, basically, and there's so many things there that I just get a little bit apprehensive of like "Am I going to be able to find potentially where that one needle is in the haystack that maybe make the whole thing go haywire?" Are there guards, are there helps? Are there concerns that that might be an issue?

**Amanda Silver:** I think that's something, first of all, that we need to think about in the design of the tool itself. We need to make sure that we are not introducing something that creates so much cognitive load for you to ingest in terms of change management that it's beyond your ability to reason over. So we are very intentional in terms of how we guide the prompts...

**Jerod Santo:** Break it down?

**Amanda Silver:** ...to kind of control just how much code is actually going to be generated. Other reasons that we do that as well. But I think the other thing is we really want to make sure that we are working with the workflow that you're used to. So another thing that we introduced today is the coding agent, where if you think about agent mode in VS Code as the experience that allows you to give it a prompt, and then you can do synchronous supervision over how it's completing all the tasks in that prompt... The coding agent is asynchronous. And so you can almost think about it as agent mode is your peer programmer, it's looking over your shoulder, it's accelerating your capabilities, but the coding agent is your peer programmer, where you can assign tasks to it as though it was another member of the team. And so it's just like in GitHub; if you're assigning an issue to your colleague, you would instead assign it to Copilot, and it can asynchronously go and execute that task and figure it out, come up with a plan and go and create a pull request and complete that task for you.

**Jerod Santo:** Right.

**Amanda Silver:** So what that I think enables is for you to then still think about the tasks that you're assigning to the agent in the same granularity that you would assigning it to another developer on your team.

**Jerod Santo:** Right.

**Adam Stacoviak:** So you could theoretically do a multi-file edit, build something, prompt it for that, and then run an agent against that and say "Debug this. Make sure it's sound code."

**Amanda Silver:** Correct, yeah.

**Adam Stacoviak:** So versus -- your question was "The fear of the code sucking", basically.

**Jerod Santo:** Right. I've got my coding agent, and my code review agent.

**Adam Stacoviak:** Well, don't worry, because at the end you can just unleash your agent, and just say "Agent, check that."

**Amanda Silver:** \[00:33:47.18\] That's right. I mean, you could certainly have parallel adversarial agents kind of working against each other. You could set up that kind of system where you basically start to build your code, you then want to say "Okay, I'm going to have one agent that's going to be focused on the readability and maintainability of this code, and another agent that's going to be focused on maybe the performance and optimization of the code." And you could have both of those things kind of going at the same time based on -- really, at the end of the day, in a sense, you kind of can create these things by virtue of just providing the prompt. You just say "Oh, Copilot, I have a new issue. I want to optimize the performance for this particular page."

**Jerod Santo:** Right.

**Amanda Silver:** It's actually going to do it. \[laughter\]

**Jerod Santo:** "It's actually going to do it."

**Amanda Silver:** It's going to do it.

**Adam Stacoviak:** I just think these little functions you can call... You know, "Check this, check that, write tests here, confirm..." That's really wild. And they do it.

**Amanda Silver:** Yeah. And we also have, obviously, pull request reviews as a part of Copilot as well. So we also apply it at that kind of large scale for -- basically, every code change that we make inside of Microsoft, or open source repos as well, we do kind of AI-based code reviews.

**Jerod Santo:** Right. I know you're using the classical data science form of adversarial there, but I kind of had a moment where I was like "It would be fun to just pit these agents against each other."

**Adam Stacoviak:** I was, too.

**Jerod Santo:** Like, "Listen, okay? This agent is not very good at their job, and they always get things wrong. Now, your job is to watch them, keep an eye on them..."

**Adam Stacoviak:** Right. He's known to hallucinate...

**Jerod Santo:** "You don't like them very much, you know..."

**Adam Stacoviak:** I was thinking that, too. Could they either -- when will they get upset, and will they compete? Can you compete them? "You both have the same job. The one who does it better gets the task."

**Jerod Santo:** Oh... \[unintelligible 00:35:38.27\]

**Amanda Silver:** \[unintelligible 00:35:39.01\]

**Adam Stacoviak:** Their job is to do the task and be excited about getting it right, and so they compete with the person or the other.

**Jerod Santo:** They wanna get promoted.

**Amanda Silver:** Well, I mean, I think that actually there's something to that. And I think one of the things for folks who are working on different machine learning models for the application to coding, we have benchmarks. Just like in the old days, when I was working on the JavaScript engine, we had performance benchmarks that we had to work on.

**Jerod Santo:** Sure.

**Amanda Silver:** Nowadays we have benchmarks for these SWE-agent kinds of models that are coming out. And so part of what we -- there's different kinds of techniques that you go through in terms of kind of getting the performance of the benchmark to be better, because you can optimize for different things. You can optimize for token consumption. So like "What's the cheapest way to accomplish it?" You could optimize for performance. "How can I complete the job more quickly?" You could optimize for accuracy. So in a lot of senses, what you're saying is actually not wrong. And I do think that over time, when we think about different competing agents that could actually go and fulfill your job, you could have ones that are experts in different types of tasks.

**Jerod Santo:** Fascinating potential world. You mentioned every line of code, or a lot of the codes that we do here at Microsoft... That got me thinking about your own products.

**Amanda Silver:** Yeah.

**Jerod Santo:** And Satya mentioned code modernization. Of course, a huge opportunity, for these agents to do. I was just thinking about Anders and the team's port over to Go...

**Amanda Silver:** Yeah.

**Jerod Santo:** ...and how tedious that could be unless you have some agents doing the work for you. I'm curious about your old software projects. I'm thinking Visual Studio is pretty old at this point...

**Amanda Silver:** Yeah, we have 20-year codebases, 25-year codebases...

**Jerod Santo:** Are you harnessing these things to modernize things like Visual Studio?

**Amanda Silver:** Can I say I'm glad you asked? \[laughter\]

**Jerod Santo:** You can say that, sure.

**Amanda Silver:** Well, actually, one of the things that we introduced today is allowing GitHub Copilot to help you modernize your .NET and Java code. So if you have a dependency on .NET 6, and you need to move to .NET 9, or you have a dependency on Java 8 and you need to move to Java 21, then you can actually use GitHub Copilot to help you do that. And this is a big deal, because it used to be that those kinds of jobs...

**Jerod Santo:** The worst.

**Amanda Silver:** \[00:38:10.25\] That's the thankless job that, as a developer, you hate that --

**Adam Stacoviak:** Didn't somebody spend 10 years doing that stuff?

**Amanda Silver:** Yeah.

**Jerod Santo:** Of course.

**Adam Stacoviak:** We just read the story...

**Jerod Santo:** Yeah.

**Amanda Silver:** That moment when your boss comes in and is like "We need to modernize the codebase, and I need you to work for six months on doing this port." Oh my God, that's crushing, because you don't get to do anything that's exciting.

**Jerod Santo:** Yeah. It's just tedious.

**Amanda Silver:** It's kind of tedious. And from our customers who are using it, they're telling us it takes care of 70% of the code migration. At least. So that's pretty incredible. We have success rates in the 90s of just upgrading your codebase. So I think that's one dimension of technical debt that this kind of stuff can take care of. Another is security vulnerabilities. And we're applying this internally at Microsoft very, very broadly. You can basically go look for CVEs, and once the CVEs are found, then we can actually go and file a PR to get it automatically fixed. And then all you have to do is review the code change.

So my hope -- I think that the industry is still saddled with incredible amounts of technical debt. And if we can actually go and erase a bunch of that technical debt... Like, just imagine how much more innovation could happen.

**Adam Stacoviak:** I got to thinking about this idea of the state of human velocity. We are now doing things that we wouldn't normally do. Not because we can't do them, but because they're just so time-consuming. Like porting a codebase to something else. We were spending a decade to do something like that. And now I think we have access to a tool that lets us think bigger. Not because it does the work, but because we can get past the hard things easier and sooner. So the speed of humanity, essentially, is... It's kind of like maybe the inflection point of speed for humanity... Because we've been going pretty slow. Since the 1900s you've got cars, and industry change, and at the end of the 1900s you have the explosion of computers and the internet... And in the 2000s, it's social media and all the things... And now it's like, AI is here to help us all go to a new plateau, faster.

**Amanda Silver:** Yeah. I think in a lot of senses, we've been struggling -- I wouldn't say struggling. I would say limited by the available developer talent in the world. We still have a shortage of developers, in my opinion. A significant shortage of developers across the world. And especially developers who have higher level systems thinking and reasoning capabilities. And so I think that, in a lot of senses, what this all represents is an opportunity to spread that knowledge a bit more broadly. And think about all of the apps that your organizations wanted you to write, but you never got to, because your backlog was so long.

I think there's huge amounts of demand and need in the industry overall that is just not getting addressed today, because developers are settled with technical debt, and what they already have on their plate is significant enough to occupy them. And so if we can actually erase a bunch of that, I think that's going to make a huge difference overall.

But I think the other thing that's super-important in all of this is there are aspects of the developer job that are not awesome, technical debt being one of them. Another thankless task is being on call, and responding to live site incidents in the middle of the night. I know that a lot of our developers do not relish that aspect of their job.

**Jerod Santo:** Sure.

**Amanda Silver:** \[00:41:47.22\] And I think that a lot of the new capabilities in AI allow us to offload, at least the less complex cases of site reliability engineering response to agents. So one of the things that we talked about today is we introduced a new site reliability engineer SRE Agent that can actually deal with - if my app suddenly starts to be unhealthy, it can actually go and do a profile, and understand if it's a memory issue, and even start to auto scale your infrastructure to be able to respond and mitigate the issue. It may not be the permanent right repair item or fix - that might come a little bit later - but it can do that first line of response. And for us inside Microsoft, we've actually been applying it internally significantly and have dealt with a ton of -- like, hundreds; I think we're probably at thousands now, of incidents that have been managed in this way... Such that developers never needed to get involved. And then they just review the repair items from the recommendations from this autonomous SRE agent.

So I think that's pretty cool, because that -- there's aspects of the developer job that's all about creation, and you love that moment where you when you get to write new code, you get to scaffold out new... I always loved scaffolding out new class libraries, and frameworks, and just doing the first rough-in of the application. That was always my favorite part. But this means that developers just -- they don't have to get woken up in the middle of the night, and their job doesn't have to be awful.

**Adam Stacoviak:** It's like self-healing, and I imagine that - you said the fix may not be a permanent one; it's more focused on uptime.

**Amanda Silver:** Yeah, exactly.

**Adam Stacoviak:** "My goal as this autonomous agent is not the best long term fix. It's keeping the application up."

**Amanda Silver:** Yeah. I mean, SRE agents - SREs in general - are always focused on application uptime, and mean time to mitigation. So if there is an incident, how long does it take for them to actually respond to it. And then they also are concerned about things like costs and operations over time... And I think they can much more meaningfully contribute to how to build healthy, large-scale systems that operate well.

**Jerod Santo:** So are these agents actually applying the fixes, and the person doesn't have to come in and hit that button that says "Yeah, let's go ahead and do this"? Did I hear that right?

**Amanda Silver:** Correct. Yeah. I mean, it's all within policy. You can decide like what limits you want it to have. But if you need to scale your infrastructure up to be able to handle more memory, for example, it could deal with that automatically in the middle of the night, without having to ping you and wake you up. And then you come in in the morning and it says "Hey, we had this incident. We had this out of memory exception that happened here", and then you can go investigate it in the morning and go figure out what's the long term fix.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** You could almost have it do the fix and another agent to check the fix.

**Amanda Silver:** That's right.

**Adam Stacoviak:** I mean your policy, you alluded to the policy. The policy essentially is an augmentation of potentially an agent that has different parameters.

**Jerod Santo:** You're trying to take us out of the job, aren't you?

**Adam Stacoviak:** I mean, I'm just saying, that's just the -- that's where it's going.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Not necessarily, but that's what you can do, though. You can have \[unintelligible 00:45:28.20\] all the time. You can have an agent that just checks it to confirm based on policy.

**Amanda Silver:** That's right.

**Adam Stacoviak:** Within these bounds, you have agency to do this thing.

**Amanda Silver:** Correct. Yeah.

**Adam Stacoviak:** Without all those bounds, it is a no.

**Amanda Silver:** Yeah. When we talk about like what are the skill sets that developers are going to need to have for the future, it's still the same complex systems reasoning. When you think about "If I have multiple policies that I am applying to how to manage infrastructure during a live site incident" - that in and of itself, that set of policy rules, that is a complex system. And you have to think through "Well, what happens when this rule conflicts with that rule? How is the system going to respond?" So I think that's where a lot of our brain time is going to start going, is thinking about how these different kinds of systems and agents that are somewhat autonomous are going to interact.

**Break**: \[00:46:29.07\]

**Adam Stacoviak:** Are you thinking about how these agents manifest as a visible layer to this agentic internet and web that was alluded to? Because I'm thinking like --

**Amanda Silver:** I love that.

**Adam Stacoviak:** There's this idea of agents available, and so why recreate the wheel...? I was really just thinking about the idea of a secret agent. \[laughter\]

**Jerod Santo:** Why were you doing that, Adam?

**Adam Stacoviak:** I was just like "That's a really cool name for an agent that doles out secrets", maybe. Or just deals with authentication and authorization kind of thing. If there was an agent, if there was a secret agent...

**Amanda Silver:** That's cute.

**Adam Stacoviak:** And I would want to discover that secret agent.

**Amanda Silver:** That's cute. Okay.

**Adam Stacoviak:** Anyways...

**Amanda Silver:** Well, a couple things I would say about that. First of all, yes, I think in terms of thinking about the common way that you can go interact with all of these different agents - yes, I do think that ultimately, our goal is that GitHub Copilot can become that common substrate. It's almost like the omnipresent agentic command center that allows you to interface, no matter if you're talking about your infrastructure, or your code, or your test, or even tasks that I have to do to go work through the bureaucratic layers of our ops team, or whatever it is... I think a lot of that can start to become interfaced through working with GitHub Copilot. So yes on that point. I think what you're bringing up around secrets is a great question, right?

**Adam Stacoviak:** Sure. I was just wanting to call it a secret agent, though. \[laughter\]

**Amanda Silver:** No, but here's the thing, though. Here's the thing. I have kind of two jobs at Microsoft. One is I'm head of product for our developer division, and the other job is I'm basically the GM for our platform engineering team. And so that means that basically we build all of the tools and all of the policies for all of the internal engineering teams at Microsoft. So we kind of take all of our third-party products and we host them and administer them and extend them and incubate in them for our first-party engineers. One of the big things that we've been trying to focus on is expunging secrets from our codebases, because secrets are dangerous.

**Adam Stacoviak:** Very dangerous.

**Amanda Silver:** And if you have them in your codebases, then if you have malicious actors, they can go in and try to exfiltrate your code and get your secrets, and then get access to your infrastructure. So generally, we are trying to move towards a system where we do not have secrets checked into our codebases. That said, that's a great application of the kind of policy that can be applied at your organizational level, to say "Look, if I have any code that looks like a secret, I want you to flag it, I want you to file an issue, because I want that to be manually checked." And we also have in GitHub Advanced Security detection of those kinds of secrets as well, so that we can actually make sure that you never push it into your codebase.

**Adam Stacoviak:** Well, then I propose that you make that a product. \[laughter\]

**Amanda Silver:** Done, sir.

**Adam Stacoviak:** And you call it Secret Agent, and you credit Adam Stacoviak as the idea for the \[unintelligible 00:50:46.28\]

**Jerod Santo:** Just in the fine print at the bottom...

**Adam Stacoviak:** I just like that. It's so cool to have that. Make that a thing.

**Jerod Santo:** Make that a thing... Now you have three jobs at Microsoft. The third one is to get that thing named Secret Agent.

**Amanda Silver:** I'm working on a Secret Agent.

**Adam Stacoviak:** It's catchy.

**Amanda Silver:** I think it's called GitHub Advanced Security.

**Adam Stacoviak:** Well, there you go. It's a cool name, but...

**Jerod Santo:** A.k.a...

**Adam Stacoviak:** ...it's not a brand. Secret Agent...!

**Jerod Santo:** Yeah, if you whisper it, it sounds even cooler.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Oh, my. So do you think about cascading effects? Especially - I'm just back on the SRE side of things, and thinking about turning over so much to...

**Amanda Silver:** Control.

**Jerod Santo:** Yeah... To software agents... Which, again, are - what did Nathan Sobo call it?

**Adam Stacoviak:** A genius golden retriever on acid.

**Jerod Santo:** On acid, yes. Which - maybe those are the models he's working with. But you know, a thing that you don't ultimately know what it's going to do. Now, you can train, and fine-tune, and guard, and watch agents watching agents all you want... However, we've seen at scale the internet operating, distributed systems at scale - things go wrong in ways that are sometimes very quick, very catastrophic, and compounding and cascading.

\[00:52:09.02\] One thing that I think about is some of these stock market trades, when you have quick corrections or crashes is because you have software making margin calls and trading with software programs, and eventually what happens is the New York Stock Exchange actually just stops everything and is like "Let's chill out here."

**Amanda Silver:** Yeah.

**Jerod Santo:** And I think there's a potential of that kind of thing with agent SREs, changing the memory on your VM, and then this happens...

**Adam Stacoviak:** Like a race condition amongst agents, or something like that.

**Jerod Santo:** And I'm wondering -- I know you all think about security a lot, and... What kind of stuff is out there for just making sure that maybe there's a pull-the-plug moment, or a way that you can get back in the loop and say "Okay, let's just chill out here, guys."

**Amanda Silver:** That's a fantastic question.

**Adam Stacoviak:** Guys... You called them guys.

**Jerod Santo:** Well, just a team, you know...

**Amanda Silver:** So I think generally what our approach is is that we want to make sure that every agentic workflow is completely auditable, so that we can see what the agent is actually executing, look over it in history; that we do have controls over it to be able to say "These are the resources that you have access to." And we also have to think about things, like ways of testing the models themselves, whether it's a model that we build, or it's a model that you build for your software... And that's part of what we build with the AI Foundry, that allows you to actually evaluate the models against all different kinds of checks. Whether that's safety and security checks, whether that's responsible AI kinds of, harassment kinds of scenarios, or language that's inappropriate... A lot of that is really what has to get built as a part of kind of building and evaluating models themselves.

And then we also want to have this common agentic control layer across all of the software that uses agents, so that we can see what those agents are actually actively doing, what resources they have access to, and restrict what they have access to if they start to go astray.

**Jerod Santo:** Right.

**Amanda Silver:** And we'll be showing a demo of that tomorrow.

**Jerod Santo:** Oh, cool.

**Amanda Silver:** Yeah.

**Jerod Santo:** Yeah, it's really just a big orchestration problem at the end of the day, and then underneath it you have your -- what do you guys call them? Not the frontier, but the Foundry.

**Adam Stacoviak:** Foundry, yeah.

**Jerod Santo:** \[unintelligible 00:54:24.19\] the models themselves. And I think it's really cool how much choice is available...

**Adam Stacoviak:** So much.

**Jerod Santo:** ...at the model level. Because I've even, in my personal use and in my coding use, have appreciated the ability just to swap these different ones, especially as they leapfrog each other in capabilities...

**Amanda Silver:** Yeah.

**Jerod Santo:** ...and I think it's really cool how many different models are available.

**Amanda Silver:** Yeah. I mean, that's one of the things that I think has been really great about kind of bringing GitHub models into -- or bringing the AI Foundry model catalog into GitHub models, is it allows developers to be able to go kick the tires on all the different models that are out there. And they all have different kind of strengths and weaknesses, and in some senses I think about it as a search space of different model characteristics, that have a certain price and a certain performance. And you just need to kind of go find what's the right one for your particular use case.

And I think that the fact that we've integrated GitHub models -- sorry, an AI Foundry model catalog into GitHub models really does allow developers right in GitHub to go test these different models in a playground. And then further, because we have in VS Code the ability to select models as a part of your chat experience, we also find a lot of developers using that chat experience as a way to go test which model is meeting their particular needs for their use case, that they then go write into the application that they're building.

**Jerod Santo:** That's awesome. No further questions... \[laughter\] I don't have any questions about that. I just think it's cool. And you're not the only ones who's doing that. A lot of people are, and I think it's great. I love just giving developers choice, versus saying "No, you're going to use this. It's the best one. Trust us."

**Amanda Silver:** \[00:56:10.13\] Always. Always.

**Jerod Santo:** Don't do that to me. That being said, which one's the best one? \[laughter\]

**Adam Stacoviak:** Well, I'm waiting for .agent to become a TLD.

**Amanda Silver:** Oh, yeah.

**Jerod Santo:** That'd be a good one.

**Adam Stacoviak:** I mean, .ai is cool, but...

**Jerod Santo:** .agent.

**Adam Stacoviak:** .agent. Because then you'd have the secret.agent.

**Amanda Silver:** Yeah.

**Jerod Santo:** It's all for this one thing.

**Amanda Silver:** Domain registered. Yeah.

**Jerod Santo:** Yeah. That would be a good TLD, because I think there's going to be -- they're going to be selling agents like you're selling apps at this point. Don't you think?

**Adam Stacoviak:** Well, if there's a company well-positioned to sponsor in some way, shape, or form... Because we just learned about DNS with Anthony Eden, and how TLDs come into play...

**Jerod Santo:** Right. You've gotta have lots of money to host a TLD.

**Amanda Silver:** Yeah, there is a whole namespace question - how do you find all these different agents? How do you figure out which one you want to deploy for this particular problem? And I think that's one of the big next things. Both agents and tools, there's going to be -- just like there's a catalog for models, there's going to be catalogs for agents and for tools.

**Adam Stacoviak:** And the best way to catalog them is .agent.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** It really is. I mean, if you're building an agentic web, this open agent web that's happening... .agent.

**Amanda Silver:** Okay. I'll take it to the top.

**Adam Stacoviak:** Two more missions... I hope you don't mind.

**Amanda Silver:** Alright.

**Adam Stacoviak:** And just come back to me for any final sign-off on these ideas, and stuff.

**Amanda Silver:** Love it.

**Adam Stacoviak:** I can give you more.

**Amanda Silver:** Love it.

**Jerod Santo:** So the advancements every year are interesting... It's moving very fast. Here we are, '25... If it were up to you, '26, the three of us sit down... You don't have to unveil any secret roadmaps or anything, but what would be going on next year this time if you were excited about it? What would be the next step? We're at agents... Where are we next year?

**Amanda Silver:** Well, first of all, I think the agents -- we've seen with agents just how powerful they are, and so we've seen a lot of promise. I think there's also a lot of peril in there as well.

**Jerod Santo:** Yes.

**Amanda Silver:** And what's going to start happening is that -- basically, a lot of folks are using them without real security controls. And so I think we're going to need to see more ways, to your point earlier, around "How do I audit and control all of these agents working throughout my enterprise or my team?" So I think that's one thing.

**Jerod Santo:** Sure.

**Amanda Silver:** We're going to start seeing a lot more controls in that sense. The other thing is, part of what we're seeing - and this has really only accelerated over the last three, four months as we've started to have capabilities like agent mode in VS Code, is the capabilities of the software development team are also changing. Developers now can do better designs. They can make things not just prettier, but more easily usable without having to have designers involved. Designers can code. Product managers can now code. So what does that mean for how we think about the evolution of the software development team, and what canvases do we think we need to do collaboration?

**Adam Stacoviak:** I think of it like giving somebody who -- the whole team, or the whole group of people you just mentioned, they all speak a language. Let's just say it's English, for just lack of better terms for this analogy. I think of it like these folks have a limit of vocabulary, and these folks have a limit of vocabulary. And they're all specialized. And now they have a more shared language spectrum.

**Amanda Silver:** Exactly.

**Adam Stacoviak:** Because you have the words, we have the words... We can share the words. That's called speaking, of course, as you know... But I feel like that's what it does. You now give them -- they all spoke English already, because they all understood some of the code, some of the design, some of these different features... But now they can all speak a certain language.

**Amanda Silver:** \[00:59:53.10\] I completely agree with you. But I think that part of what's going to happen is that everyone is going to start contributing to the codebase more easily.

**Adam Stacoviak:** Which is better for the product. And the user, obviously...

**Amanda Silver:** I think so, too... But I think we're already starting to see designers contribute code. In terms of like rather than handing a design over the wall, and say "Engineer go implement it", now the designer can actually go and, if they want rounded corners, they can get rounded corners to happen. Or if a PM has an idea around a new feature that they want to experiment with, maybe they can go build an initial prototype with that, without having to go bother the engineers to go get that done. And I think that starts to kind of raise interesting questions around "How do you think about architecting different kinds of systems?"

I think maybe one of the things that might happen is that there's a difference between solutions that are more sitting at that SaaS, level versus services that are more at that systems level. I think that that SaaS level is going to start to be something that is more easily extended. Today, when we think about something like a Microsoft Office, or M365, or we think about something like GitHub itself, it's essentially an end user experience, a SaaS that is being provided and has extensibility points. And those extensibility points are painstakingly crafted, because every time that you expose a new API that allows you to customize the environment, it both empowers your users to go build other things, but it also represents kind of a boat anchor that you're stuck with the back compatibility for that contract.

But I think that what this is now kind of enabling is for you to start to build other systems, other automation on top of other systems much more easily... Even without the API, to be frank, because now it can just traverse the DOM, or whatever it needs to do... And I think that means that a lot more software becomes a lot more extensible. And I think that that means also that the way that you build software itself is going to end up changing over time.

The other thing that I think is super-interesting is we also spend a huge amount of time right now on the view, creating the view.

**Jerod Santo:** Sure.

**Amanda Silver:** Like an MVC kind of model...

**Jerod Santo:** Yeah, totally.

**Amanda Silver:** I think in the future, it might just be that you focus on the model, and the view you actually go and specify with a design system.

**Adam Stacoviak:** Well, I saw a T-shirt downstairs, it had a bunch of things crossed off. I think developer was one of them, and something else, and then it just said "Builder".

**Amanda Silver:** Yeah.

**Adam Stacoviak:** And so I feel like y'all have been ahead of the times, basically, with I think people becoming builders, rather than just developer, or just designer, and the word 'just' not pejoratively, if that's even a way to say it... But more so builder. Everybody's a builder, and everybody can contribute.

**Amanda Silver:** Yeah. Love it.

**Jerod Santo:** I have a question that I think maybe would have been way better back in the VS Code part, but as we wrap up --

**Amanda Silver:** Spicy?

**Jerod Santo:** I don't know if it's spicy or not, but I'm curious... We were kind of debating VS Code's foothold, and is it a strategic advantage, and this and that... And the open-sourcing of that, and that it's been a good thing for Microsoft... What we've seen recently in the vibe coding space is VS Code forks.

**Amanda Silver:** Uh-huh.

**Jerod Santo:** And these forks come up fast and furious, and they're getting huge valuations...

**Adam Stacoviak:** They sell for billions.

**Jerod Santo:** Right, they sell for billions. They're getting large user bases very quickly, or at least it seems like they are... And in a sense, that's a little bit of a backfire, because now you're providing VS Code, this platform, which is just forkable, and now you're giving competitors an opportunity to just catch up real quick and compete with Copilot in weeks. I mean they can vibe code their way to a $3 billion valuation. Does that bother you? Is that -- do you even see it? Are these just like the the cockroaches that you just say "Get out of here, cockroach"? Or how do you guys view it? How do you view it?

**Amanda Silver:** \[01:04:01.02\] No, I mean I --

**Adam Stacoviak:** You Kelsey Hightowered that one. \[laughter\] I love you, Kelsey...

**Amanda Silver:** I think that there's real real innovation that's happening in the industry, and a level of competition that we haven't seen for a long time. So I have a tremendous amount of respect for you know the competition that we're seeing right now in the code editing space.

I will say, like - yes, I think that there is a lot that has been built on top of the open source codebase of VS Code, and I think that is creating a foothold that allows others to kind of go and create additional, you know, features or differentiation on top of it... But that's I think one of the reasons why we've decided to actually open-source the GitHub Copilot extension for VS Code, and build it directly into the VS Code codebase. We really do think that the AI experience is now table stakes for any code editor. And in the same way that VS Code has been open from the get-go, we think that now the AI capabilities in VS Code also need to be part of the open source codebase.

And we certainly believe in, you know, whether it's VS Code, or TypeScript, or anything that we do in like the Azure SDKs, or .NET - all of that's open source. Half of what my team works on is done in the open and open source. You know, we certainly see that especially when you're trying to build a community around a technology, an ecosystem around the technology, building in the open actually creates better products. You know, it allows more people to contribute, whether they're contributing pull requests, and code contributions, or if they're just logging issues and they care enough to actually follow through with really great issue descriptions. That's an important way to contribute to the codebase, and we see that across all of our open source codebases.

And I think what we hope to see now is - there's a tremendous amount of innovation that's been happening in AI-based coding. What we hope to see is more of the community contributing back to the VS Code codebase to really advance the state of the art for everybody.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I'm not sure I would call them competitors, though...

**Jerod Santo:** You don't think Windsurf is a competitor of Copilot?

**Adam Stacoviak:** I would say --

**Jerod Santo:** I'm going to use one or the other, aren't I?

**Adam Stacoviak:** I guess so... But is that your customer, for a lack of better terms?

**Jerod Santo:** Oh... They want all the customers? Don't you?

**Adam Stacoviak:** I don't think so. I think --

**Jerod Santo:** Let her answer... \[laughs\]

**Adam Stacoviak:** Well, this is what I assumed you were thinking. And you said a lot of things, but you didn't say this. But if I read between the lines and I think - if I were you, I wouldn't see it as competitors, because you are focused on developers using VS Code, and I don't think they're not not developers, but if you're vibe-coding, it's not a developer action; it's a different way to get the end result.

**Amanda Silver:** Yeah. Right --

**Adam Stacoviak:** A developer writes code and cares about the code, whereas the other way is -- it's not so much less about the code, it's a different way to get there. That's how I look at it.

**Amanda Silver:** So I think I think there's kind of two pivots to that. First of all, I think that code editors, generally, if your primary task is to write code, then I would say any of the popular code editors are competitors, in a sense. But to the point earlier that we were talking about, we believe that we live or die by day to day product truth, and we have to basically win every developer based on their usage and experience with our products. And we strive to make the best products we possibly can.

I think to your point around vibe coding and how does that relate - I see vibe coding as a really interesting evolution. It's not quite --

**Adam Stacoviak:** I'm throwing zero stones at that. I'm a agnostic when it comes to all innovation. Whatever gets us to the next place, we're gonna love it. That's what I'm for.

**Amanda Silver:** Totally.

**Adam Stacoviak:** And if vibe coding is one of the ways we get there, or it invites more people in to build software - cool.

**Amanda Silver:** \[01:07:59.15\] I think vibe coding invites a lot of people in to go build more software. I think that it's not your typical pro dev software developer, but I think that what vibe coding has kind of started to create is more of this pattern of what I would call like natural language-driven development... Which is like starts with maybe a vibe initial prompt, but then it evolves into --

**Adam Stacoviak:** Something \[unintelligible 01:08:24.07\]

**Amanda Silver:** ...a full spec. And the spec is still written in natural language, it's not written in C\#, or TypeScript, or JavaScript, or anything like that. It's written in a natural language; English in my case, but it could be written in whatever. But then you take that spec, and then you use that spec as the prompt. And that allows you to then iterate to this level that's like, you can get to a much more sophisticated first implementation of the code that you're aiming to implement. And then you continue to iterate, and you may even modify the spec, as opposed to modifying the code. So I think that's starting to change things.

From there, then it's like, okay, well, now that PM can contribute even a spec for a feature, or they can contribute a spec for the initial product... The active testing could also be, in some senses, a large prompt. The designer could contribute a design system into the codebase... And so I think what we start to see is that over time the codebase is not just everything that builds; it's all of the prompts...

**Jerod Santo:** It's all the metadata.

**Amanda Silver:** ...for all of the systems, and all of the different, you know, phases that you go through of the software development lifecycle.

**Jerod Santo:** Yeah. I think that's really insightful, and one of the things that I've noticed as an experienced developer trying to adapt and adopt the tools is that software isn't built in like a chat scenario. Like, you don't chat your way to a software system, because there's just like so much chatting that goes on -- you know, you design specifications... And yeah, you may have conversations that lead to that design decision that you make... But once you make that, you don't want that to be like one moment in a conversation that was way up here and you've gotta tell your coding agent to scroll back and "Remember what I said back then?" You want to actually have tangible outputs.

A spec that gets created through - whether it's a vibe session, or just a peer programming session... Now I have this written document that evolves. And it would be so cool to be able to take that spec and be like "Alright, here's a different model." You know, start fresh. We don't need to use the code. We have the spec. And you can take the same spec, six different models, write the program. Maybe take the best one on each, or whatever it is... Have something that you could like start from, so you're actually building out an architecture. Is that formalizable?

**Amanda Silver:** Yeah, it is. I mean, we now are starting to do more spec-driven development. We have .prd files that, you know, would be the description of the spec. And those kinds of things are starting to get checked into the codebases. But I think also there was a nugget in what you were talking about in terms of like design decisions that are made throughout the process. Sometimes it's not just the spec that you actually use...

**Jerod Santo:** It's the why.

**Amanda Silver:** Well, it's the conversation. Like, if you think about, you were having a conversation with your designer, or another engineer on the team, in terms of how something should work... Maybe over time the history of that conversation should actually be something that's persisted into the codebase, in some senses.

**Jerod Santo:** Yeah. And hopefully in a summarized fashion, so it's actually grokkable...

**Amanda Silver:** Yeah, exactly.

**Jerod Santo:** I know there's some people that keep actual -- I can't remember if it's called a why document... But it's basically around their decisions. Not the decision we made, but why we made the decision. And so you can go back to that and be like "No, here's why there's this fence here."

**Amanda Silver:** Exactly.

**Jerod Santo:** You see a fence, you're like "Why is the fence there? It doesn't need to be there." It's like, "Well, there was a reason... And none of us know why. It's lost to history." But now you can go back to that chat or that context, and at least link it somehow, whether it's summarized, or linkable, or whatever it is, to be like "Here's our spec. And then this part of the spec here - why is it like that? Well, here's the why."

**Amanda Silver:** Yeah. Maybe in that world developers don't have to write documentation.

**Jerod Santo:** Now you're selling me.

**Adam Stacoviak:** Oh, my gosh... \[laughter\] Or they write one. They write one, the initial spec.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Yeah, I was thinking about that, too.

**Jerod Santo:** Alright, awesome. This has been a blast.

**Amanda Silver:** Yeah, thanks for having me, guys.

**Jerod Santo:** Thanks so much for sitting down with us, Amanda.

**Adam Stacoviak:** Very fun. Thank you.
