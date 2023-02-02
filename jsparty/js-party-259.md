**Jerod Santo:** Alright, y'all, you know what time it is... It is JS Party time! I'm Jerod, your internet friend, and I am joined today by b0neskull. What's up, Chris?

**Christopher Hiller:** What's up, Jerod?

**Jerod Santo:** Are you excited to go through some survey results?

**Christopher Hiller:** Yeah, I totally love this survey every year.

**Jerod Santo:** \[laughs\] Are you excited to play Headlines.

**Christopher Hiller:** No. You still haven't explained to me what that is...

**Jerod Santo:** That's part of the fun. I also have Kball with me. What's up, Kball?

**Kevin Ball:** Hello, hello. I'm excited to play Headlines, and watch b0neskull's head explode...

**Jerod Santo:** This will be fun. So Kball, you've played this alone, and Nick played it alone... And then Nick played it with Amal and Amelia. Who won that round, Nick? Was it me?

**Nick Nisi:** Probably. Of course.

**Jerod Santo:** Yeah, I think I won that round.

**Kevin Ball:** Am I the only one who's ever beaten you, Jerod?

**Jerod Santo:** I'm pretty sure I won. I can't remember exactly how it went down, but... if I recall correctly, I did end up pulling that one out as well. We'll see who wins this time around. \[whispering\] It's gonna be me... But first, we will talk to Nick. Have I intro-ed you, Nick? Hello. Ahoy!

**Nick Nisi:** Ahoy-hoy. How's it going?

**Jerod Santo:** It's going good. How's it going with you? I'm very excited to be here, and to get to our topics, like what's a testing framework and what's not. I'm so excited for that.

**Jerod Santo:** Yeah, so we will have the epic debate... Chris does have opinions on what is and what is not a testing framework. What is Selenium and why is it a testing framework?

**Nick Nisi:** Show title.

**Jerod Santo:** Survey results, 2022, State of JS. It's out, it's done, it's in the bag... Congrats to Sasha and the whole team. This is an epic effort each year; lots of adjustments, they've built out a lot of software to run this thing... I thought it was pretty cool - they say in the opener that this year they received almost 40,000 responses, which is about double of last year's amount. So we're starting to hit, I hope, at a certain point, critical mass. They've been working on getting more people from more places, and more areas, and more identities and stuff into this mix... We can talk about that as well.

**Kevin Ball:** I don't know, I was looking at the demographic breakdown... It still looks pretty unbalanced, but...

**Jerod Santo:** At a certain point, doesn't that also represent the industry that it's in, which is also unbalanced?

**Kevin Ball:** If it's as unbalanced as the survey results, I'm depressed...

**Jerod Santo:** Okay. You might just be depressed here for a few years as we continue to work on it. The question is, was it better than last year? And the answer to that is I don't know, because I didn't look at last year's. Maybe you can dig that up and we can get some results there... But let's dig into it anyways, and start with the most important category, which is favorite JavaScript podcasts... Which is the one that everybody skips to immediately, and answers, I think... Or is it just me...? And unfortunately, those blasted Syntax guys got us again. What's up with that, Nick? What can we do? How can we fix this bug?

**Nick Nisi:** I think it'll fix itself. We're now an award-winning podcast, so...

**Jerod Santo:** This is true.

**Nick Nisi:** I think we're in the running, and based on the -- we're in second place; they're ahead by like double.

**Jerod Santo:** They've doubled us up. We did get way more votes than last year, but again, twice as many participants, so it seems like we just scaled alongside the results... But I don't know.

**Christopher Hiller:** Where in this page do I see podcasts?

**Jerod Santo:** It's in the Resources section...

**Christopher Hiller:** Oh, of course.

**Jerod Santo:** Right underneath Video Creators, or something like this. And you'll see we have Syntax with 3359 votes, JS Party with 1546, HTTP 203 coming in at number three, and then the Changelog followed by JavaScript Jabber.

**Nick Nisi:** I think that's impressive...

**Jerod Santo:** Pretty similar to what it has been.

**Nick Nisi:** I think it's impressive for the Changelog too, for not being like a dedicated JS podcast, to be so high... It's awesome.

**Kevin Ball:** We're slowly creeping up on Syntax. I'm looking at last year versus this year. Last year, they had two and a half times as many votes as we did. This year is closer to two times.

**Jerod Santo:** Yes.

**Kevin Ball:** Keep projecting that out and in like 2030 we're passing them.

**Jerod Santo:** On an infinite timeline, we are going to be the number one podcast on this survey, darn it... And then we can all die happy and old. Alright, we kid a little bit... It's definitely not the most important part. It's just the most important for us as we navel gaze. Let's get into some of the actually interesting bits. Nick, what did you find interesting out of the survey results?

**Nick Nisi:** Well, if you go to the frameworks one - I immediately kind of jump to the frameworks, and I like seeing that graph of like where things are landing, and I kind of thought that it was interesting... If you look at the frontend frameworks ratios over time, React was not number one last year; it actually was overtaken by Svelte. This year, it's been overtaken by Qwick, Svelte, and Solid, which are all ahead of React in retention, and interest, too. But if you actually look at usage, React is wildly popular, in terms of people are still using it and haven't quite switched over to these other frameworks.

So I think it's important to take where things are headed, and where things are actually headed, and kind of compare them... But it's very interesting.

**Kevin Ball:** \[06:13\] I mean, interest - it says, "Want to learn, divided by want to learn and not interested." How many people haven't learned React yet?

**Nick Nisi:** It's true.

**Kevin Ball:** Like, it's gonna lose on interest, just because everybody already knows it.

**Nick Nisi:** Yeah, that's true.

**Jerod Santo:** So it's becoming an old, boring, but established and dominant. It's kind of par for the course, right?

**Kevin Ball:** It's not losing market share.

**Nick Nisi:** It's also not losing awareness.

**Jerod Santo:** It does seem like there's a heating up of the framework wars again, where it was like React kind of sucked all the air out of the room for maybe a few years there, and now there's interesting things abounding. Kball, I know you're interested in Qwik; we had Miško Hevery on the show last year, and he's coming up again; you're gonna go deeper, a deeper dive into Qwik, I think next week, or the following... So that'll be exciting.

**Kevin Ball:** Next week.

**Nick Nisi:** Yeah, I think that's great. This kind of healthy competitiveness between the frameworks... Like, they're all pushing each other forward, which is exactly what you want. You don't want things to stagnate. And there's a lot of good ideas across all of these frameworks, and they do things a little bit differently, and there's a flavor that suits you probably; if not, there will be next year when you write it. But there's a lot of cool ideas, and nobody is sitting still, which is great.

**Kevin Ball:** Well, and one of the things I talked with Chris Ferdinandi about last week, I think, and that is showing up a little bit in this, but it'll be interesting to see how it plays out over the next couple of years, is more and more adopting of these frameworks that try to pre-compile away a large amount, and sort of ship a minimal runtime, ship smaller amounts of JavaScript. There's more sensitivity about how much JS is going over the wire.

**Jerod Santo:** Agreed, agreed. Chris, are you finding any interesting data points, any tidbits, any analyses that you can provide?

**Christopher Hiller:** I was looking at this, the Percentages tab, and then I clicked the Rankings tab, and that's easier for me to read... But if I look at usage, you have to remember that it's not like -- maybe you're in a job where you're using two, maybe even three, but the numbers don't add up to 100. So the usage is "Okay, like 82% of developers use React", or is it "They've used React before"?

**Jerod Santo:** Right...

**Christopher Hiller:** ...and right now they're using something else? And so, you can say, "Yes, I've used multiple of these frameworks." So it's kind of hard to get a good picture from this, I think, like "What do people use today at their job?" So I think that's -- I wish there was a good way to kind of surface that, but...

**Jerod Santo:** Right. Versus "I have used..."

**Kevin Ball:** Yeah, to distinguish using at work, using for a hobby... I mean, I think the retention might have to do with "Are they still using it or not?" But the context of "Where are they using it?" isn't there.

**Christopher Hiller:** Right. And is it the only one you're using? So it's just a little bit difficult for me to look at this and try to figure out "Well, what does this really mean?"

**Nick Nisi:** Yeah.

**Christopher Hiller:** I don't really know.

**Jerod Santo:** Another interesting tidbit with surveys in general is like survey fatigue... So one thing that was interesting to see - they have actually completion percentages. As a completionist, I respect that 90% of people got to the end, or... What was the number? No, that's not right. It was like 73% of people made it 90% of the way through, which is less impressive, but I think more accurate than what I said the first time... But pretty good. But what I notice with myself with surveys -it's like, I start off all gung-ho and like "I'm gonna answer all these", and then eventually, I either stop taking it, or the little demon inside me comes out and I'm like "I'm going to start just hitting C for everything." You know, like we used to do in school back in the day. And there's a lot of people out there that just want to see the world burn... And I think at 40,000, you're pretty safe that like those people are fringed out and don't really matter, but I know as a person who goes through all of our Frontend Feud surveys, there's always a few that answer every question incorrectly on purpose.

\[10:14\] So there's so many little things around the edges of surveys, such as that distinction you pointed out, Chris, which is a really big one when you think about... It like "How do I interpret this question and answer it?" On top of that, the people who are just trolling and lying; on top of that, the demographic problems.

Like, it's fun and interesting, but there's so many problems with them that what can we really -- like, Kball, when you look at these... I know you enjoy the analysis and the dissecting, but do they affect your life? Do they help you make decisions? Do they help you - what?

**Kevin Ball:** Good question. I use something like this often as just a hint at "Are there new things I should be checking out?" Like, looking at this, for example, Frontend Frameworks, I notice a new addition, Stencil. I've never heard of Stencil. I'm going to go look that up. I don't know what it is, or what it's doing, but maybe we should dig into it, maybe we should have a show about it.

Also look at this sometimes as a way to check my expectations a little bit, or give myself a little bit of feedback... If you go to Other Tools, and you look at libraries, the third most regularly used library by respondents to this survey is still jQuery...

**Jerod Santo:** Woo-hoo!

**Kevin Ball:** And we tend to get kind of in this world of "Okay, everybody's React, and everybody's doing this", and all of this, and very like front-focused... And React is old news at this point, right? Well, you know what's older news? jQuery is older news, and it's the third most popular library listed here.

So it's easy to be looking too far in the future, to be constantly thinking about "What's changing? What's new, what's new?" and sometimes I use this to sort of check my reality and say, "You know what - you can still build a lot of stuff, and a lot of people are building a lot of stuff with old, boring tools, and that's fine."

**Nick Nisi:** Yeah, absolutely. Same story with like Angular, right? The interest is towards the bottom, but once you sort by usage, it's second place. It just wildly jumps up.

**Jerod Santo:** What would be really cool is we just sort by revenue. I know this is impossible, but like global revenue, or like GDP for a JavaScript library or framework. That would be so cool. I think we'd see different results -- I think React will probably at this point still be where it is, but I think we'd see different flips in different places, because a lot of them... Like, Angular tends to be used more in enterprises, less as hobby horses, and so probably driving more revenue, but less interest, less joy. That'd be cool - global joy produced, right?

**Kevin Ball:** Even on the revenue, how would you attribute it? Would it be "This company is using this and it's driving it?" Because Google uses Angular for some things, but Google search is not using Angular. And Google Search drives a tremendous amount of their revenue.

**Jerod Santo:** Right, that's the problem, is you have to actually specify... You'd need breakdowns inside of each corporation, like which products are driving revenue. I mean, like I said, it's a pipe dream; you couldn't get it. But it'd be really cool. And actually, now that I said, I'm way more interested in global joy produced out of a library or framework; like, how cool would that be? Especially for the creators.

**Nick Nisi:** That'd probably be -- I don't know, I'm thinking like that'd be more like Eleventy or Astro.

**Jerod Santo:** How do you quantify joy in the first place? Yeah, exactly.

**Nick Nisi:** It'd be the static stuff.

**Christopher Hiller:** I think you'd have to define joy first... That may look very different.

**Kevin Ball:** How do you define joy, Chris?

**Christopher Hiller:** I don't... \[laughter\]

**Jerod Santo:** Chris doesn't know what we're talking about.

**Christopher Hiller:** I am saying you've gotta define it so I understand what the hell you're talking about.

**Jerod Santo:** "...so I understand what it is..." \[laughs\]

**Kevin Ball:** You've gotta Marie Kondo this stuff. "Does this framework bring me joy? No. Trash it!"

**Jerod Santo:** Exactly. So Chris, which part of the survey brought you joy? I saw there was a note about Selenium. Was this joyful?

**Christopher Hiller:** No. Okay, well, first, it's not a JavaScript project. But second, it's not a testing framework either.

**Jerod Santo:** What is it...?

**Christopher Hiller:** \[14:08\] It's a browser automation framework. That's all it does. If you're "using Selenium", you're using some other client code, whether that's written in Python or Java... You're using -- God help you if you're trying to use it directly, but you're using some other framework. Maybe that's like WebDriver IO, maybe that's water in Ruby, or something like that... But Selenium is just a server. It just sits there. It provides a way for you to automate a browser. There's nothing about testing in Selenium. There's no test organization, there's no reporting, there's no assertions... It's just a browser automation framework. And that's the thing that I think, obviously, people still don't really understand.

On one hand, it seems a bit unfair to lump Selenium in with all these other ones, because it doesn't do that. It's not Cypress; it doesn't have assertions, or whatever. It doesn't work out of the box like that, and give you everything you need. So anyway, that's my Selenium rant, but... I don't think it belongs in this survey.

**Jerod Santo:** Do you think it belongs in your life?

**Christopher Hiller:** Selenium? I don't use it.

**Jerod Santo:** What do you use?

**Christopher Hiller:** Well, I work on Appium. Appium is basically Selenium for devices, right? So yeah, I don't use Selenium for anything. But sure, people can and should use Selenium where it's appropriate.

**Jerod Santo:** What's the test story in Appium? What do you do? How do you test it?

**Christopher Hiller:** It's the same story as in Selenium. Appium is not a testing framework. It's a device automation framework. And so if you want to use Appium to test your device, your mobile browser, or your Smart TV or whatever, you're probably going to pick up the one -- when we want to self-test stuff, we just use Mocha with WebDriver IO, and that seems to work fine. But Appium just sits there. It's an express server, and it talks to devices. But nobody else is going to look at an Express server and say, "Oh, that's a testing framework."

**Kevin Ball:** I feel like this sort of categorization error happens in a lot of places. I was looking at the Build Tools category here, and have Gulp in there. Now, first off, people are still using Gulp? Yes, people are still using Gulp.

**Jerod Santo:** Wow.

**Kevin Ball:** In fact, it says 25% of people are still using Gulp. It has dropped off to the bottom, but that's still it. But second, Gulp is not a build tool. Gulp is a task runner. People use it for builds, but there's a fundamental category error going on here, and I think it comes to that - what are most people encountering this, in what context, and how are they using it? Most people encounter Selenium when they're writing tests. Most people encounter Gulp when they're dealing with building a frontend project of some sort... So they include it in that category, even if that's not really what it is.

**Christopher Hiller:** Yeah. Another thing is this survey is for developers, and the main users of Selenium and Appium are not developers. They're QA engineers. They're automation test engineers, they're \[unintelligible 00:17:18.22\] And they're not going to use this survey.

**Kevin Ball:** Oh, I misquoted something about Gulp...

**Christopher Hiller:** What's that?

**Kevin Ball:** I just realized... This website is broken, the State of JS. If you select Usage, and then you click from percentages to rankings, it resets you to retention. Gulp has really low retention, but it's still the second-used, 50% used in usage of your build tools.

**Christopher Hiller:** Wow...!

**Kevin Ball:** Gulp is behind Webpack as the second most used build tool.

**Christopher Hiller:** How is it ahead of TSC...

**Kevin Ball:** Or Vite...

**Christopher Hiller:** ...of TypeScript?

**Jerod Santo:** Because they're new. Gulp -- I mean, I don't throw away any of my old scripts... Do you guys?

**Christopher Hiller:** Yeah. I throw them away. \[laughs\]

**Jerod Santo:** \[18:02\] Do you? I still run them. I still use them.

**Christopher Hiller:** I actually -- I spent quite a while pulling Gulp out of Appium. It was using Go, but no. It's just odd to me that like if you go and you look at the most dependent-upon dev dependencies, number one, I think, is ESLint, but number two is TypeScript now. So then why is Gulp higher than TypeScript? I don't know...

**Kevin Ball:** It's the TypeScript CLI... I suspect most people using TypeScript have it packaged up in WebPack, Vite, or Gulp.

**Christopher Hiller:** Hm. So they're not using it directly.

**Jerod Santo:** Or they don't think about it. I mean, if they were using it directly, they would. But when you think about TypeScript as a build tool - we know what it does, but... I mean, again, category errors; I don't think it's necessarily out of the -- it should be there, but it's not like what comes to mind. And maybe a lot of what people answer is what comes to mind. I don't know.

**Nick Nisi:** We can get really deep into semantics with that too, because Vite and other ones - they don't do anything with TypeScript, except ignore it. Whereas TSC is actually compiling it, and will give you errors, and things like that. But then you also have the language server part of it, that is actually probably -- like, it's probably higher than everyone, because if you're using VS Code, or have your Neovim set up, like, you're using that LSP.

**Jerod Santo:** I need to check out Vite, because I also don't do anything with TypeScript but ignore it.

**Kevin Ball:** You'll get alone.

**Nick Nisi:** Not for long, Jerod.

**Jerod Santo:** \[laughs\] I just ignore it, Nick. It's all I do with it.

**Christopher Hiller:** What's WMR?

**Nick Nisi:** We have a show on it, actually, with Jason Miller, I believe.

**Jerod Santo:** We do so many shows I can't recall...

**Christopher Hiller:** That doesn't answer the question, Nick... \[laughter\]

**Jerod Santo:** "That doesn't answer the question..." It does tell us that we should know what it is... Yes, I remember, because we gave him a bunch of different acronyms that they could use, because it didn't have one, or something; like, their acronym was bad... I can't remember what it is. It's coming out of the Preact team, right?

**Nick Nisi:** Exactly, yeah.

**Jerod Santo:** Tell us more, Nick. Google it real quick.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** "ChatGPT, what is WMR?"

**Nick Nisi:** It's almost like a Create React App type of thing, or like a packaged runtime almost... Not runtime, that's the wrong word, but like a package build setup for an application. And yeah, it came out of Preact, but it does work with React, and maybe other things, too.

**Christopher Hiller:** I think we are excused, because if you look at the percentage of respondents who have never heard of WMR, it's like 95%, or something.

**Jerod Santo:** Right.

**Kevin Ball:** You can include us in that.

**Nick Nisi:** Not me.

**Kevin Ball:** Even Nick, who apparently did an episode on it...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** I was there, I have no excuses, but I still can't remember what it is. There's lots of things, and some things take hold, and other things don't; and I haven't heard WMR, I think, since then. Not to knock on it, it's just a fact.

**Kevin Ball:** Do you want to know something else depressing from this survey?

**Jerod Santo:** Okay...

**Kevin Ball:** "Which sites, courses etc. do you consult?" Number one, Stack Overflow. Okay, not so bad. Number two, MDN. Yeah, I'm with you. Number three, W3Schools.

**Jerod Santo:** Hm...

**Nick Nisi:** SEO.

**Jerod Santo:** SEO, man...

**Kevin Ball:** Please don't consult with W3Schools... Oh, my gosh...

**Christopher Hiller:** I've heard they've cleaned up their act. I've heard that they are okay now.

**Jerod Santo:** I've heard they were trying to, yes. I haven't checked.

**Christopher Hiller:** I haven't checked either... They burned that bridge long ago.

**Jerod Santo:** MDN - can we just stop for a second and just say how amazing MDN is though? It's so good. I love it.

**Nick Nisi:** Yeah. It really is.

**Kevin Ball:** MDN is phenomenal. Phenomenal. Why would you use anything else?

**Jerod Santo:** Right.

**Christopher Hiller:** SEO...

**Nick Nisi:** You know, I'm happy though that when I started off, everything was Experts Exchange.

**Jerod Santo:** Yes...!

**Nick Nisi:** And I don't see that on here at all.

**Jerod Santo:** I think it might have got banned off the internet. It's on the dark web now.

**Christopher Hiller:** Don't you have to like pay a micro transaction to see the answer, or something messed up like that?

**Nick Nisi:** Yeah.

**Jerod Santo:** On Experts Exchange?

**Christopher Hiller:** Yeah.

**Jerod Santo:** Oh, man... I don't know.

**Nick Nisi:** I remember just going to it, and it would have the exact question that you want to get answered, and then everything was blurred out after that.

**Christopher Hiller:** Yeah. And it's like you have to log in and pay for a subscription, or something. I don't know...

**Break:** \[22:19\]

**Jerod Santo:** Alright, we are back for the award-winning podcast to play its potentially award-winning game, Headlines. This is a game in which I have scoured the interwebs and I have found headlines. I have also fabricated some headlies. It is your guys' job to figure out which is which. So here's how the game works. I will read a headline, at which point each person has the opportunity to stake a claim - is that true or false? Is it a real headline, or is it a false headline? If you guessed right away, you can potentially win two points. Or you can wait for more information. I also have the first paragraph from the news stories that I will read. You can hear the first paragraph, which will give you much more information, and you can then decide whether it's true or false, at which point you score one point if you're correct, and zero if you're incorrect.

For longtime listeners who are wondering why I'm not punitive anymore, and subtracting points if you get it wrong - because my math skills are terrible, and I got confused last time, and it was rather embarrassing. So we're gonna go simple, positive scores. We're going to keep it positive today, and we are going to see who's the best at detecting BS.

**Kevin Ball:** Speaking of confused - you were asserting that you had won all of our individual headlies/headlines episodes before... So I looked up JS Party episode 220...

**Jerod Santo:** Okay...

**Kevin Ball:** ...and can I quote an authoritative source, Mr. Jerod Santo? "Final score: Jerod, 8. Kball, 8. It's hard to even utter the words, but you, sir, are the Headlies champion."

**Jerod Santo:** Oh, my...

**Kevin Ball:** In the words of the one, the only expert, Jerod Santo, it turns out that Jerod Santo has not won every single game of Headlines.

**Jerod Santo:** Well, I knew those transcripts would come back to bite me at some point...

**Christopher Hiller:** Jerod, wait, wait, wait... So if you are running the game, and you have the headline, how do you score points?

**Jerod Santo:** Okay, so that was one-on-one, because Kball was the only one on the show, and so it was him versus me, the game runner. I will not be a participant in this game. So it's going to be you guys against each other. I'm just going to run the game, so I'm not going to score any points today.

**Christopher Hiller:** Okay.

**Jerod Santo:** But back then it was just me versus Kball, so I had to make it competitive, because I make everything competitive.

**Christopher Hiller:** That doesn't make any sense, but okay.

**Nick Nisi:** So it's like the asterisk on the wins there for Kball.

**Jerod Santo:** Yeah. It didn't really count --

**Nick Nisi:** He won, but with an asterisk.

**Jerod Santo:** Yeah. So... Fair enough. Go with it, Chris...

**Kevin Ball:** So today - today will be the day that it really counts...

**Jerod Santo:** This is a pretty big deal.

**Kevin Ball:** Okay.

**Jerod Santo:** Alright. Are you guys ready for the first headline?

**Kevin Ball:** Nick, you're going down.

**Nick Nisi:** Let's do it.

**Jerod Santo:** The first headline is "Dancers flash mob funeral with Another One Bites the Dust." Nick, would you like to stake a claim or hear the paragraph?

**Nick Nisi:** Oh, I'm going to -- I'm gonna say that that one's true.

**Jerod Santo:** Okay, Nick claims true. Kball, do you want to guess, or...?

**Kevin Ball:** It's too good. I'm also going to say true.

**Jerod Santo:** True. And Chris, do you want to say true, false, or do you wanna hear the paragraph?

**Christopher Hiller:** Yeah, I'm gonna go with true.

**Jerod Santo:** True. Dancers flashmob funeral with Another One Bites the Dust - that is... True!

**Nick Nisi:** Wooh!

**Jerod Santo:** Congratulations. \[Win, win, win, win. We all win.\]

**Kevin Ball:** Another one bites the dust...! Another one bites the dust...!

**Jerod Santo:** \[25:55\] You guys all win on that one. A dance troupe flashmobbed a funeral with a performance of Queens, "Another One Bites the Dust" at the request of a woman who wanted her send-off to be memorable, but not sad. So that actually happened. Congratulations. Everybody has two points. I'm gonna keep a running tally this time, so that I do not do what I did last time.

Alright, headline number two: "Roomba testers feel misled after intimate images ended up on Facebook." I'll read it one more time, "Roomba testers feel misled after intimate images ended up on Facebook." Kball, we go to you first...

**Kevin Ball:** I love it.

**Jerod Santo:** True, false or hear more?

**Kevin Ball:** I love it, but I think it's false.

**Jerod Santo:** Kball goes in with a false... Chris, we turn to you...

**Christopher Hiller:** It's true.

**Jerod Santo:** Chris says it's true. And Nick.

**Nick Nisi:** I also think this one is true.

**Jerod Santo:** So we will not all win this round... Somebody will lose, and the loser of this round is Kball. That actually happened. An MIT Technology Review investigation recently revealed how images of a minor and a tester on the toilet ended up on social media. I Robot said it had consent to collect this kind of data from inside homes, but participants say otherwise.

**Kevin Ball:** Wow...

**Jerod Santo:** That's kind of a quintessential story for 2023, isn't it? Like, data privacy breach, Facebook's involved...

**Kevin Ball:** This reinforces actually -- and I should have gone with true, obviously, but this reinforces the regex that I have in my brain: anytime someone says "Smart blah", so in this case, it's like "Smart vacuum", I substitute "smart" for "surveillance." So Roomba, the surveillance vacuum.

**Jerod Santo:** I like that, Kball.

**Nick Nisi:** You know, Amazon has that drone coming out this year. I think this year...

**Jerod Santo:** Who does?

**Nick Nisi:** Amazon, or Nest... They have a drone that will patrol your house. It'll fly around your house with a camera, patrolling it when you're not there. So these stories are only going to increase.

**Christopher Hiller:** No, it's Amazon. It's Ring.

**Nick Nisi:** Or is it Ring? Sorry.

**Christopher Hiller:** It's Rring, not Nest.

**Jerod Santo:** Oh, was it Ring?

**Christopher Hiller:** Yeah. Nest is a Google --

**Nick Nisi:** Yeah, Nest is Google.

**Jerod Santo:** So Ring is owned by Google?

**Christopher Hiller:** Ring is Amazon, Nest is Google?

**Nick Nisi:** Sorry. I got that wrong. You're right.

**Jerod Santo:** Amazon - Ring. Okay. And so it flies around your house... When you're not there?

**Nick Nisi:** Theoretically.

**Jerod Santo:** When you're there, it just chills...

**Nick Nisi:** Oh, it's finally available, according to The Verge. For only $250.

**Jerod Santo:** So that's kind of cool... It's like having a patrol, like an armed patrol, only it's an Amazon device.

**Kevin Ball:** Before you know it, they're going to arm it.

**Jerod Santo:** Yeah. No doubt.

**Kevin Ball:** Take out your house invader remotely. Oops...! Someone came home early...

**Jerod Santo:** After two rounds, Nick and Chris are tied in first place with four points. Kball trailing with two points. We now turn to round three. The headline is "Microsoft combat goggles score as Congress says yes to buying more." I'll read it one more time... "Microsoft combat goggles score as Congress says yes to buying more." Chris, you're up first. You can call true or false, or you can wait for the paragraph.

**Christopher Hiller:** I'm going to wait for the paragraph.

**Jerod Santo:** Okay, Chris is going to wait. Nick.

**Nick Nisi:** It doesn't sound real... I'm gonna say that it's a lie.

**Jerod Santo:** Nick is calling false. Kball?

**Kevin Ball:** I'm gonna call false. I think it's not Microsoft. But I suspect that the combat goggles thing is going to be accurate... But we'll see. I'll just call it a lie.

**Jerod Santo:** So Chris, you are now on the hook. For one point, here's your extra information: "Microsoft Corp will be getting more orders for its combat goggles soon after Congress accepts the US Army's request for $400 million to buy as many as 6,900 of them this fiscal year."

**Christopher Hiller:** Yeah, I'm gonna go false.

**Jerod Santo:** \[29:46\] So we have three falses, but Chris waited for the paragraph. Is that correct? And the winner of this round is \[Win, win, win, win. We all win.\] You all win. Kball was correct. He was also incorrect. It was Microsoft. The difference is that I flipped the bit... Microsoft actually did not get approved. The combat goggles falter as Congress says no to buying more this year. So Congress actually did not approve this contract.

**Kevin Ball:** But Microsoft legit sells combat goggles... Interesting.

**Jerod Santo:** Yes, they do.

**Nick Nisi:** Wow.

**Jerod Santo:** So Nick gets two points, and Kball gets two points, and Chris gets one. So after three rounds, we have Nick in the lead with six, Chris in second with five, and Kball in third with four. It's a tight race. We now move to round four. There's five rounds, by the way, so this is the fourth of five.

"Adobe closed out 2022 and celebrated 40 years with an employee-only Katy Perry concert." Are we back around to Kball going first? Or who's going first this time?

**Kevin Ball:** This is the fourth round... I think it's Nick.

**Jerod Santo:** Okay, back to Nick. Nick, do you want to hear it again, or are you ready to guess?

**Nick Nisi:** I've got some breathing room; I'll wait for the paragraph.

**Jerod Santo:** Okay, Nick's gonna wait. Kball?

**Kevin Ball:** Can I hear the headline again?

**Jerod Santo:** "Adobe closed out 2022 and celebrated 40 years with an employee-only Katy Perry concert." What's your thoughts right now? What are you thinking?

**Kevin Ball:** So on the one hand, we have generally a bad tech environment. People are cutting back, there's the zeitgeist of cutting back. This sounds like not generally what's going on. On the other hand, Adobe just splurged shiitake tons of money for Figma, and so it is clearly doing okay, at least along some dimensions for cash. I'm still gonna go false. I think the environment is too stingy across the board, and contagion is a thing... Also, Katy Perry? Really?

**Jerod Santo:** \[laughs\]

**Kevin Ball:** If they had it, it's going to be someone else.

**Jerod Santo:** Okay. So Nick's waiting, Kball false... Chris, what do you think? Has Kball convinced you of a false?

**Christopher Hiller:** So this is the last round?

**Jerod Santo:** This is the fourth of five, so there's one more round after this.

**Christopher Hiller:** Well, that makes things more complicated...

**Jerod Santo:** \[laughs\]

**Christopher Hiller:** Yeah, I'm gonna go false though. I'm gonna go false.

**Jerod Santo:** Okay, so we have two falses registered, and we also have Nick waiting to hear this paragraph. "Despite economic headwinds, Adobe went big on its 2022 holiday party. The event attendees shot hoops in an arcade, received spray-on temporary tattoos, and grabbed drinks and food from a variety of vendors. The stage then transformed into a mushroom-filled Fantasyland and out walked the night's surprise headliner, Katy Perry." \[laughter\]

**Nick Nisi:** It's gotta be false... Food trucks and then Katy Perry is like what I heard...

**Christopher Hiller:** Mushroom-filled Fantasyland..." \[laughs\]

**Kevin Ball:** "Mushroom-filled Fantasyland" is what I heard...

**Jerod Santo:** Well, the truth is stranger than fiction, because with this one you all lose. This actually happened. It is true.

**Kevin Ball:** Holy smokes...

**Christopher Hiller:** Oh, man... \[laughter\]

**Jerod Santo:** Tacos, sliders, dumplings...

**Nick Nisi:** Really in a fig jam with that one.

**Jerod Santo:** It was a 90-minute concert with Katy Perry on a mushroom-filled Fantasyland, and there's pictures and videos on the internet if you want to go look for them. Okay, so in round four nobody scores; you were all wrong, so the scores remain the same. Nick in first with six, then Chris with five, Kball with four... That brings us to our final round. Kball, you run out of time to pull out a victory.

Our fifth headline and final is "Boston Dynamics in talks with OpenAI to bring GPT-powered tech to their humanoid robots."

**Kevin Ball:** Oh, that's delightful... I'm gonna say yes, because it's the zeitgeist of the moment.

**Jerod Santo:** Okay, Kball with a true. Chris, what do you think?

**Christopher Hiller:** I have to go? Nick can't go before me?

**Jerod Santo:** You have to go. You can wait; you're one point behind Nick, so if you wait and get it right, and he gets it wrong, you'll tie him.

**Christopher Hiller:** Yeah, I don't want to tie him.

**Jerod Santo:** But if you want two points, you have to guess now.

**Christopher Hiller:** Okay... Well, I'll go -- and Kball... What did Kball do?

**Kevin Ball:** \[34:15\] I said true, even though this also sounds like something that --

**Christopher Hiller:** Okay, I'm gonna go false.

**Jerod Santo:** Okay, he's just playing the game now. He's going opposite Kball... Which leads to Nick. So Nick, if you get this right, you win. If you get it wrong, and Chris gets it right, he wins. He's already on board with false.

**Nick Nisi:** Yeah... Hmm...

**Kevin Ball:** You could go strategy-wise. If you say false, then the worst you can do is tie.

**Nick Nisi:** But you said false, right?

**Jerod Santo:** Kball's in on true.

**Kevin Ball:** I said true.

**Nick Nisi:** You said true. See, if my only goal is defeating you, then I should go with you, so that if you win, I win.

**Kevin Ball:** That's true. If your only goal is defeating me, you should go with me. And if your goal is to --

**Jerod Santo:** Why would you make that your only goal?

**Kevin Ball:** ...optimize your chance for first place, you should go the other way.

**Nick Nisi:** Yeah, I don't know... I just clinged onto that as my goal.

**Jerod Santo:** I see.

**Kevin Ball:** A worthwhile goal.

**Nick Nisi:** Yeah. \[laughs\]

**Jerod Santo:** Beating Kball - always worthwhile. I would also try to beat Chris if I were you, but that's just me.

**Nick Nisi:** Okay. Okay. So is that telling me to go with false?

**Kevin Ball:** You can clearly not choose the wine in front of me.

**Jerod Santo:** I think your best strategy is to be correct.

**Nick Nisi:** Yeah.

**Jerod Santo:** Yeah, exactly... \[laughs\]

**Nick Nisi:** Can you read it one more time? I forgot what we're even talking about.

**Jerod Santo:** "Boston Dynamics is in talks with OpenAI to bring GPT-powered tech to their humanoid robots."

**Nick Nisi:** You know, I'm gonna go with false, just thinking -- like, not trying to gamify this. Do they even have humanoid robots?

**Jerod Santo:** Boston Dynamics?

**Kevin Ball:** Oh, yeah. They have videos of them dancing, and doing all sorts of things...

**Nick Nisi:** Oh, they do...!

**Jerod Santo:** Yeah, they're the ones with the dancing robots. They have the dog, they have --

**Kevin Ball:** They're super-creepy.

**Jerod Santo:** Yeah.

**Nick Nisi:** They do. Okay.

**Christopher Hiller:** You're sure you don't want to pick the other one?

**Jerod Santo:** \[laughs\]

**Christopher Hiller:** Are you sure you don't want to pick true?

**Nick Nisi:** I'm gonna go with false.

**Jerod Santo:** False. The blurb is "Atlas, the world's most advanced humanoid robot, may soon gain more human-like communication abilities. Their potential partnership with OpenAI would be a major step forward in the field of robotics, as it could open up new possibilities for robots in industries such as healthcare, hospitality and retail." That paragraph was 100% written by me when I made up this story, because it is not true. It is false.

**Kevin Ball:** This is not my day. Nick, you have succeeded in defeating Kball.

**Nick Nisi:** \[laughs\] I wasn't trying.

**Jerod Santo:** So Nick and Chris both score two, Kball scores zero, and a runaway victory - actually, a runaway losery by Kball, and the other two are pretty close. Nick with eight, Chris with seven, Kball with...

**Kevin Ball:** Four.

**Jerod Santo:** ...four. Embarrassing.

**Kevin Ball:** Terrible.

**Jerod Santo:** So our big winner for today is Nick. Congratulations! \[applause\] And Chris, a fine showing for your first time. This wasn't so bad, right?

**Christopher Hiller:** No, that wasn't so bad.

**Jerod Santo:** There we go.

**Christopher Hiller:** I should probably be a little less cautious though... \[laughter\]

**Jerod Santo:** Yeah, that one point killed you.

**Christopher Hiller:** Yeah.

**Jerod Santo:** I need to think of a new way of designing the game so that you guys want to hear the paragraphs... Because I really put the most work in on the paragraphs. The headlines are easy. But that's on me.

**Christopher Hiller:** Well, I mean, you could just read the paragraphs...

**Jerod Santo:** Just require it.

**Christopher Hiller:** ...like after we choose, even if we all choose before you read it.

**Jerod Santo:** That's what I just did.

**Christopher Hiller:** Yeah. What you just did, essentially.

**Nick Nisi:** Or just take away all the work and have GPT...

**Jerod Santo:** I actually did ask GPT to come up with some fake ones, and they were terrible.

**Nick Nisi:** Really?

**Jerod Santo:** Yeah. It was all like "Big company X launches product Y." And product Y is like a Rover, or a man on Mars. They're just completely unbelievable. I was like "Be more believable", and then they were not. I was like "Alright, I'm done with you."

**Kevin Ball:** So on the topic of using those blurbs... What if you always read it before you told the answer, and we got two times we could swap our answer out of the five? So we would place our bets...

**Jerod Santo:** I see.

**Kevin Ball:** Actually - yeah, instead of having the two in one. You're always betting after the headline, but you can change your mind twice.

**Jerod Santo:** I like that mechanic. Very good.

**Break:** \[38:17\]

**Jerod Santo:** Alright, after that excellently thought out game of Headlies, it's now time for Pro Tip time.

**Jingle:** \[38:36\]

**Nick Nisi:** Why...? Why is it still a thing?

**Kevin Ball:** Oh, it's delightful, Nick.

**Jerod Santo:** Because it's spectacular.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Pro Tip Time. This is where we share our pro tips. They can be useful, they can be silly, they can be whatever we like, as long as they are professionally tips. Nick, got any pro tips?

**Nick Nisi:** I do. Maybe I have two, I don't know. My main one that I put down was - there's probably an LSP for it, or there's probably a language server for it. Over the two weeks that I had off over the holidays, I completely rewrote 1,100 lines of my dotfiles, and kind of redid everything that I'm doing... And as part of that, I switched from like the LSP installer plugin over to one called Mason, and it gives you a list of like all of the LSPs that it knows about, and linters, and formatters, and all of that. But it's just like a plugin that maintains all of those for you. And these LSPs are theoretically editor-agnostic, so they should work in other editors that support language servers, which is like VS Code, and other ones, if there are other ones.

And just going through the list, there are some amazing plugins for the LSP, for like different languages, and for different everything. So like one in particular that I was having fun with was installing one for Markdown, and -- installing two for Markdown, specifically. One's called Vale, and the other one is called Proselint. And they just yell at you in LSP form for writing terribly... \[laughs\] Which is exactly what they're doing.

**Kevin Ball:** So wait, wait. Hold on, step back.

**Nick Nisi:** Yeah.

**Kevin Ball:** Define LSP and LSP form.

**Nick Nisi:** Okay. LSP - Language Server Protocol. It's what like TypeScript uses to tell you, "You're trying to use that as a number, but you actually passed a string", things like that. And the LSP form can vary based on your editor and how you're using it, but for myself in Neovim, it puts virtual text to the right of the line, that tells me exactly like "You're doing this wrong", or "That's a number. That's undefined, and you didn't check for that to be undefined." So that's what I mean by LSP form, I suppose.

And so this is like going through -- and I just opened up like one of my very few blog posts from my website in it, and it's just kind of funny, the tips that it gives me about my horrible writing. It tells me a lot that -- for one of them specifically, I'm talking about a video that I did at a meetup called OMG, or Omaha Maker Group... But it tells me that "OMG is chat speak. Write it out." So that's like one tip that it gives me.

Another one is it tells me that I'm using over 30 PPM. I don't actually know yet what PPM means, but I'm using -- it basically boils down to "I'm using too many..." It says "More than 30 ppm of exclamations. Keep them under control." So I'm being too excited in my writing, so I should use less exclamation points. I just think it's funny that these tools exist...

**Kevin Ball:** Parts per million?

**Nick Nisi:** Yeah, I don't know...

**Christopher Hiller:** Paragraphs per --

**Nick Nisi:** I definitely don't have a million characters.

**Christopher Hiller:** So is that coming out of something called Proselint?

**Nick Nisi:** It is. And so yeah, it's a linter/LSP. I mean, it's not an LSP. It's a linter in that case. But I'm thinking more in terms of these plugins that theoretically are editor-agnostic at least... And so it's just really cool being able to play with them and see what they give you. So my pro tip is go explore what LSPs you can install to yell at you more, because you're not being yelled at enough by your tools.

**Jerod Santo:** \[42:16\] I like it. LSPs, LSPs everywhere. Kball, how about you?

**Kevin Ball:** Yeah, mine is, as is my want, a human thing, not a technical thing... But since we're in January, everybody's focusing on New Year's resolutions, and goals for the year, and things like that... And I want to share the pro tip that at least for me, it works a lot better to focus on habits rather than goals. So instead of saying "I want to write 12 blog posts this year", I'm going to develop the habit of "I'm gonna write every day." I'm going to focus on 500 words every day, or something like that... But the goal is the habit of what I'm doing there. Or similarly for fitness. I think we've talked about this before, but it's not like "I'm gonna deadlift 300 pounds." It's "I'm gonna work out three or four times a week", and build a habit there. So that is my pro tip.

And there's some thinking behind this, right? So the thing with a goal, especially if you do -- like, the sexy thing is, "Oh, we're gonna make a SMART goal, and we're gonna have it be specific, and measurable", and all these different things, and time-bound. But the problem is, if you do that, what happens if you don't hit your goal? So like "Oh, I was very specific. I'm going to do this. I can measure it, I know how I'm measuring it, and I'm going to do it by this time. And that time has passed, and my specific measurement has not happened. What is my incentive to keep going and start again?" But in the real world, it's going to be a lot better if you keep going, and you accomplish that a week or two later. And if you focused, instead of "What am I specifically doing?" or whatever, you're saying, "I'm gonna build a habit of working towards this direction." You're gonna get there, and that's what's gonna keep you going and moving in the right direction, far more than your SMART goal.

**Jerod Santo:** Your surveillance goal? Sorry, I'm just applying your regex.

**Kevin Ball:** Exactly. Don't create surveillance goals.

**Jerod Santo:** Very cool. I have a pro tip... This is not out of my head. This comes from the brain of Scott Antipa, who's a programmer in San Francisco. He says, "You can store your app's entire state in the URL." He's certainly not the only one who's done this, but he lays it out very nicely... And I will just read what he had to say about that. He says that he's building this flowchart editor that runs in the browser, and he wanted a way for people to use it without having to sign in, or store any data on his servers. And he wanted to give them control over their data, and to be able to store it locally to open and edit later, and also make it easy to share with other people just by copying the URL and sharing it as a link. So he decided to encode the entire application's state as Base64, and then put it in the hash mark of the URL. I think it's called the fragment identifier... And so he has a little -- it's super-easy to do; he has laid out how you do this. You basically just take the JSON -- if you have all your app's state in JSON, you just stringify that, then you run some sort of compression on it, so you can fit more data into the URL... Of course, URLs do have a max length, and I'm not sure how much data you can fit in before you hit that... But there's some compression you can run on, and then you Base64-encode it, and then you just push that onto the URL... And then later on, when you need it, you decode it, you uncompress it, you parse it back into JSON, and you apply it into your application's state.

So that's a cool way of having persistent storage that's persisted not in a cookie, on a server-side database, and not in local storage, where it's stuck in that browser session. It's stored in the URL. Which is, I think, kind of cool.

There's other people that do this. He mentions Mermaid JS. I'm not sure if you've seen mermaid.live; it's a very cool diagramming tool inside of Markdown, that GitHub supports now. They do it. So people do this, and it seems like it works... And so that's something that you can do.

\[46:01\] I really liked the side effect of having no sign in, no local storage. Copy and paste the URL, and you can just like refresh and rehydrate application state just using that. So check it out. I'll link to that in the show notes, his blog post, "How to store your app's entire state in the URL." So that's my pro tip. Chris, did you think of one?

**Christopher Hiller:** Yeah. So I don't think I've mentioned this, but I may have mentioned it before... It's a thing called Graphite. It's like an app -- it's like an SaaS and a CLI, and it integrates with GitHub. Graph.dev is the site.

Anyway, so what this thing does is - it like builds this metadata on top of Git, and it helps you do stack pull requests. And I've been using the heck out of it. So I don't know what it is about the way I work; maybe I'm just doing something that I shouldn't be doing... But I will make a pull request, and then I'll be like "Okay, I need to work on this other thing now", and I need the stuff that was from my pull request. And so I can either add all my new junk to that original pull request, or I can make a new one, targeting the first pull request. And so that's what this thing helps you do - it creates a stack of pull requests.

So part of the dashboard thing is - because if one of these pull requests in the stack gets merged, what it'll do is it'll automatically re-stack everything, and change the targets, and rebase the merged PR onto the one that it was targeting. And so it does all this stuff automatically, and then in their dashboard they have a tool to help you review this code, because it's not so easy to do in the GitHub UI... Because if you add any sort of commit to the PR - well, there it is, and it's all mixed in to the list of files in your PR in GitHub. But what their review interface does is it splits it up by stack, and so it knows which PR, what code came from. And a reviewer can easily only review the stuff that was in one particular PR, even if it's been merged back into the original one.

So this is probably really difficult to explain, and I hope they do okay, because they're just like a startup making this thing... Because again, it's like -- it's pretty technical, and it's really hard to explain... But it's really cool to use, and I would suggest check it out if you've ever been in a situation where you're like "Oh, I have this work that's in progress, but then I have this other tangential thing that I need to get done based on that work." And of course, if you use GitHub, too. But it's been really helpful; it does all this automatic rebasing, and pulling changes down, and re-stacking everything automatically, and so there's not a whole lot of -- you don't have to think too hard about managing the stack of pull requests and branches. It's cool. Graphite.dev.

**Nick Nisi:** I immediately signed up. This looks awesome.

**Kevin Ball:** It does look cool.

**Jerod Santo:** Very cool. Thanks for your pro tips. So in review, there's an LSP for that, focus on habits, store stuff in the URL, and check out graphite.dev.

Alright, that is our show for today. Nick, Kball, Chris - thanks so much for partying with me today. It was lots of fun. Always a good day when Kball loses at headlies, so we're happy over here... Just kidding, Kball. I love you. And that's it. That's JS Party. I'm Jerod -- um, final words? I'll give you guys a final word. What have you got?

**Christopher Hiller:** Bye.

**Nick Nisi:** TypeScript...!

**Kevin Ball:** \[unintelligible 00:49:57.24\] Go!

**Jerod Santo:** You heard it here last. Alright, that's our show. Talk to you next time!
