**Jerod Santo:** Hello, internet. I'm Jerod, your friend, and I'm here joined by some master debaters. I have Kball with me. What's up, Kball?

**Kevin Ball:** I'm looking forward to this one. Hello.

**Jerod Santo:** Good to have you. And Amal is back. What's up, Amal?

**Amal Hussein:** Hey, hey. I need a soundboard effect right now. Like, you know, "Dung-dung!" Like, Law and Order meets like Rocky...

**Jerod Santo:** Hold tight, I'll get you something... \[We love JavaScript. We addicted to it. We love it all the time. We want it in our veins... Give me more. More, more.\] There's your soundboard for you...

**Amal Hussein:** That's a new one. Okay... \[laughter\] I'll take it.

**Jerod Santo:** Do you remember saying that?

**Amal Hussein:** I mean, vaguely... But yeah. Alright, I'll take it.

**Jerod Santo:** That's a cool one. I like that one.

**Amal Hussein:** That's a cool one. That's a very cool one.

**Jerod Santo:** And we're joined by a special guest debater. It's Eric Clemmons. Eric, welcome to JS Party.

**Eric Clemmons:** Hey! Happy to be here. \[unintelligible 00:01:32.20\]

**Jerod Santo:** Ooh, he brought his own soundboard... \[laughter\]

**Eric Clemmons:** I don't have a soundboard...

**Jerod Santo:** Yeah, we'll fix that up in post. So Amal invited Eric to debate with her... He's on your team, so why don't you do the proper intro and tell folks who Eric is, so he doesn't have to?

**Amal Hussein:** Yeah, Eric Clemmons is like a JavaScript gentleman from Texas... I don't know if that's even giving you justice.

**Eric Clemmons:** I'll take it.

**Amal Hussein:** He's a huge open sourcer, incredible lead engineer, he's worked a number of places, we've spent some time together at Stripe... And he's just kind of just overall -- I don't know, I'm gonna get bleeped... He's just a JavaScript badass... Really into kind of like solving problems when it comes to the developer experience. He's got some really cool libraries out there. One's called click-to-component, and it lets you kind of inspect your elements real-time. He's got some other really cool utils around testing... I don't know. Eric is just awesome, and I've wanted to have him on the show for a while, and glad he's finally on... But I'll let him introduce himself.

**Jerod Santo:** Here he is. Did she miss anything, Eric? Anything to add?

**Eric Clemmons:** I don't think there is. I'm kind of blushing and tearing up at the same time. That's really sweet. But yeah, the DX part is a very huge aspect of it. Anywhere that there's friction in the experience, gotta burn it with fire. You know, kind of like console.log, and print debugging, that sort of thing... \[laughter\]

**Jerod Santo:** Ohh, he's beginning... The debate hasn't begun yet, Eric. So for our longtime listeners --

**Kevin Ball:** Those are baked. Why you gotta add friction?

**Jerod Santo:** Kball, the debate hasn't begun... Let's hold it back. They're chomping at the bit here. So longtime listeners know that we routinely do debate episodes, where we pick a premise, and then we assign people to a side. They don't get to pick their side, because that wouldn't be as fun... And we debate whether or not that premise is true or false. We don't call it true or false, we call it Yep and Nope, because of our friend Alex Sexton's classic yepnope.js feature detection library from way back in the jQuery days. Alex was actually one of the original panelists on JS Party, so it's a nod to him. It's called a Yep/Nope, and we're gonna play that today.

Today's premise, if you haven't guessed already, is about debugging. And the question that we're trying to answer is "Is print debugging good enough?" So print debugging - what is that? Well, that's anytime that you're just putting print statements in, however you happen to do that. Most likely, in our world, console.log. It used to be alert debugging; you'd have an alert statement, and you would try to put some stuff in there, and it'd pop out and you'd read it and it'd say "object object". And then you wouldn't have any help from that whatsoever. But console.log is significantly better than the bad old days... But is it enough? Is print debugging good enough? Arguing the positive will Kball, and your humble moderator, even maybe not so humble moderator... Me. I will be arguing today, because scheduling conflicts. So that's the Yep side.

And on the Nope side, arguing that print debugging is not good enough will be Eric and Amal. We do this semi-formal, so we actually have a timer, and we have a buzzer, but we also have a shoestring budget, so our buzzer noise is Chris Hiller saying Wut. So if you hear this sound, \[Wut?\] your time is up. And if you don't stop talking, I will hit that button profusely, until you do. I might even do it to myself, which would be weird.

**Amal Hussein:** I might just break out into song, if you know... What, what, what-what, what... You can put a beat to that.

**Jerod Santo:** I'm never gonna stop you from singing, Amal. I'm just sitting here in anticipation, so... Whenever you break out into a song, I'm here for it... Because we need more soundboards.

**Kevin Ball:** Eric, do you beat-box? Y'all could do a duo.

**Eric Clemmons:** \[beat-box 00:05:19.17\]

**Kevin Ball:** Go, Amal.

**Amal Hussein:** Oh, gosh... On-demand isn't the way it works. It's when it comes. It comes in its own schedule.

**Jerod Santo:** She may be the Beyonce of the web platform, but she's not actually Beyonce.

**Amal Hussein:** Right, right. That is very accurate, on many levels.

**Jerod Santo:** That's fair.

**Amal Hussein:** Yeah. But there's some guitars behind Eric, for those of you listening... Eric plays a lot of music.

**Jerod Santo:** That's true. Eric, are you musical?

**Eric Clemmons:** I am. This was part of the compromise to move to Texas from like Seattle, was I got to bust out all my musical instruments again. In Seattle I just didn't have the room for the instruments, but now I do.

**Jerod Santo:** I was gonna say, you've got a drum kit back there as well.

**Eric Clemmons:** Yup. My very first drum set I've found when I was six in the church dumpster... So I haven't been able to quit playing drums since.

**Jerod Santo:** Wow. What kind of music do you play?

**Eric Clemmons:** Honestly, just anything I'm listening to in the car that sounds like it has a good beat, I come home and basically just replay it.

**Jerod Santo:** \[06:16\] Very cool. Well, we will cue you later to begin singing... I'm sure Amal will work you in. Let's start this debate before we lose all of our listeners, and the debate hasn't begun. So two minutes on the board, okay? You'll have two minutes to state your case, and then we'll rotate back and forth between teams. So we will start with our guests - well, our guest is Eric. Amal, you're on his team. Ladies will go first, so we'll let Amal go first... And you are arguing "No, print debugging is not good enough." There's two minutes on the board. Amal, let's hear it.

**Amal Hussein:** Thank you, Jerod. And hello, listeners. Print debugging is certainly one way to do it. It's not wrong. But the web has evolved. We have so many better ways to debug and inspect. There's lots of engineers that have created awesome tools and protocols that allow you to kind of connect with your code in a more intimate way than just logging statements.

So why would you limit yourself to just a bunch of logs, which aren't always even -- you never know where you're even logging from sometimes, unless you're in a Node environment and you can print a context as well... And so logs are great, but there's so much more. And hopefully, Eric, and I will be getting into all the things... And with all the new features that have come into Chrome Dev Tools, which is kind of a shared universal protocol between a lot of browsers - why limit yourself to just logs? You can do things like even mock your HTTP headers now.

So we've gone way beyond the days of just kind of breakpoints... We're now able to manually trigger errors, and say, "Hey, I want to kind of always have this network request fail, and so let's see how resilient my app is for when this network request fails." You can do all kinds of things, like conditional breakpoints, you can watch all the variables in your execution context... There's so much, so why limit yourself to just logs? There's more than logs.

**Jerod Santo:** \[Wut?\] Alright, very good. Opening case by Amal. Kball. Make our opening case for us, please.

**Kevin Ball:** Alright. Amal, in previous debates, you have said something along the lines of "Just because you can do it doesn't mean you should do it." You have argued about the dangerous path that extensive developer experience-focused tooling React and other things have led us towards, and how those are poisonous for the web. And so I want to say, as developers, we've got to master the basics. We've got to stay with what's real, what's built-in, what works well... And when it comes to debugging, that is console.log or printf debugging. You know, it's a "keep it simple, stupid" type of situation, right? Like, keep it simple. This is all you need.

What are you doing in debugging? You're trying to understand the state of things as they're going along... And you said something like "You never know where you're logging from." Have you ever heard of logging "I got here"? That's a core to printf debugging, "I got here." I got here, too. Keep it going.

**Jerod Santo:** So fun.

**Kevin Ball:** But in a slightly more serious frame... There are so many different environments that you're gonna want to debug in. Sometimes you're able to debug something totally locally, other times a problem doesn't emerge until you're out in production, you're in a distributed application, you have race conditions, and all these other things... And the thing that all of these fancy debugging tools do so much of the time is they will freeze you in time. But now you have gotten rid of your race condition. Your bug goes away, you get a heisenbug, and if that's how you teach yourself to debug, you'll never be able to use the tooling that happens in real time, flowing out data, and giving you that availability. Console.log becomes observability in production. It becomes, "Let's understand the state of many things happening at once", and it becomes a foundation for you to debug all of those complicated environments and other situations that show up outside of your packaged development environment.

**Jerod Santo:** \[10:13\] \[Wut?\] Alright, perfectly coming in on time, like the pro that he is. Llike the winner that he's gonna be. Eric, it's now your turn to spend two minutes talking about logging or not logging. Go.

**Eric Clemmons:** Yeah, I mean, Kball's not wrong.

**Jerod Santo:** Good start...

**Eric Clemmons:** I mean, if you have like one tool in your tool belt, that tool looks pretty good. And it pays to be proficient with a lot of other tools. Because I mean, if we talk about logging - yeah, that's one piece of it. But it's missing the rest of the history of how we even got there, especially if we're talking about the user's machine. If you're console-logging, you're on your machine. You've already gone into the codebase. What about everything else that happened before then? What made their environment unique, those race conditions that only they got to see, because they have a different environmental config, or a different browser, or maybe even like a different backend configuration that you're just not aware of, that doesn't match what you've been testing or developing against?

So yeah, it's a tool we've had, there's not a lot of friction to it, it kind of reminds me of that meme with this cavemen with a square wheel, and someone else offers them a round wheel, and they're like "No, thanks. We're too busy." Yeah, if you like to be effective... I mean, we could learn from other people in the industry. For example, Next.js - big topic - has just launched their app router... And Tim Neutkens has even mentioned that like there's 20 super-complicated bugs that would have taken days to reproduce and actually investigate if it wasn't for improved logging tools. So half of the story is actually what's going on on the user's machine who isn't a developer, who doesn't have console.log developing. So \[unintelligible 00:11:46.23\] to debugging, but maybe just grabbing the wrong tool for the job.

**Jerod Santo:** \[Wut?\] Alright, I will now respond. It's interesting, Eric, that you mentioned improved logging tools... We're all for improved logging tools. We want the best logging tools that there are. But at the end of the day, these are logging tools, and logging is good enough. Print statements are good enough. Kball mentioned the KISS principle, right? Keep it stupid simple. I'll also mention this - you want to be able to learn something that's transferable. So I have logging skills, and I've worked in many different areas, with many different languages, and many different runtimes, and my ability to print stuff has paid off everywhere I've gone. Now, I also learned a little bit of GDB, the GNU Debugger... And let me tell you how inscrutable that tool is. And I learned how to use it, and I got some value out of it, and then I went into the web browser and I realized 0% of my GDB skills actually transfer into the web browser. And so now I invested a bunch of time learning a very sophisticated, powerful power tool, and I couldn't take that anywhere.

Now, I could dive into Chrome DevTools and learn all the intricacies of Chrome DevTools, and maybe they'll change, and my knowledge will be gone. Or I'll switch to the backend, and now all of a sudden I don't know the backend tools. And so there's a real value in simple tools, easy to learn, easy to transfer, and good enough to get the job done most of the time.

Now, I still have 40 seconds left, so I will start our classic move of appealing to authority, and I will read some quotes at this time. "I don't like debuggers. Never have. Probably never will." End of quote. Linus Torvalds.

"After over 30 years of programming in assembler, Fortran, C, C++ etc. I feel no desire to use a debugger." Neal Butterworth.

"I've met junior developers who feel like they don't know how to use a debugger, or they don't know what they're doing, and they just put print statements out. That's completely legitimate. In fact, it tends to be my go-to thing doing that." Matt Ryer. \[Wut?\] And my time is up.

Thus concludes round one of our debate. So far, the Yups have it, the Nopes are struggling, but we'll see what happens in round two.

Amal, we're back to you now. You have one minute; you can answer any of the things that we've said, or you can just go off and say whatever it is you like, for one minute.

**Amal Hussein:** \[14:13\] Can we first start by acknowledging that the moderator is the non-neutral party? And so you get to add to the hype factor of your team, which really -- I mean, let's be honest, is it a tool? Is logging a tool? Or is it just like a thing?

**Jerod Santo:** Wait, is this your time? Okay, I'm gonna start your time? You're just launching into an argument before your time starts...

**Amal Hussein:** \[laughs\] I'm rolling it.

**Jerod Santo:** Okay. Your timer is going, Amal.

**Kevin Ball:** This is preparation for the reality of the corporate world. The moderator is always biased. \[laughter\]

**Amal Hussein:** Right, right. It's a hard, cold lesson in capitalism, or something. But okay, so yeah, logging, as Eric mentioned - not wrong. It's certainly a thing that you could do. But given the variety of options that you have at your disposal when trying to problem-solve, why limit yourself to the most rudimentary option?

So when you, for example, are able to actually stop at a breakpoint, and inspect your code, and see where -- you can look at the call stack, you're able to look at not only how you got here, but where, because of the variables and all the things in scope, where you're going to potentially head to next... \[Wut?\] There's so many other options. Why limit yourself to logging? I mean, for me, that's the ultimate argument. \[Wut?\]

**Jerod Santo:** Alright. Kball, one minute.

**Kevin Ball:** Let's be real - debugging is a means to an end. The point is not the debugging process, it's to find that stinking bug and get rid of it. And you could do the classic developer thing, which is spend your three weeks learning your tools, digging in, getting it set up, perfect debugger, learning the changes that happened since the last release statement, and then you're one day to debug. Or you could use the same tools that have been working the same way since the dawn of programming, and get to your bug a heck of a lot faster. And I know, as developers, we love to dig into fancy tools. Like, that's one of the reasons we got into development. And it's great if you're doing it for fun. But if your goal is debugging, and getting to the end of that bug, stick with the tool that you already know, that works well, that's going to be transferable, as Jerod said, and fix your bug that much faster.

**Jerod Santo:** \[Wut?\]

**Amal Hussein:** ...or slower.

**Jerod Santo:** Coming in right on time. Alright, Eric, your turn.

**Eric Clemmons:** Right on. I think it's wise for us to recognize that code is a means to an end. But it's also pragmatic to say that how we work, how we do the job that people are paying us to do, the faster we can shorten that time between "That's not doing the thing that we paid you to do. Make it do the thing that we paid you to do", is in the best interest of the company, and also kind of what makes you valuable as an employee.

So there are going to be non-transferable skills at any sort of job - who to talk to, what the bug tracking system is, how the release management process works, what the codebase even looks like; is it going to be different from the last place? That's largely non-transferable.

So if we level-up our tools to be able to get us to "Where is the problem actually happening?" and let us get us into a reproducible state faster, as fast as it was for the user to experience that bug, that's going to shave off a ton of time of us trying to set up an environment, us trying to do console.logging replaying, and constantly changing our print statements until we can actually identify where it was, where we could have had the information to begin with, versus throwing it away. \[Wut?\]

**Jerod Santo:** One minute for me... I will now continue reading quotes off of the internet. No, I'm just kidding... \[laughter\] But I will mention that I have polled the audience, our Changelog community, and 55% of respondents mostly use print statements. And only 45% mostly use a debugger. So there's wisdom in the crowd, and proficient, crowdly devs find print statements to be good enough. As do I.

\[18:00\] So I will now tell an anecdote of my life. I have been developing software for 20+ years, various stages of quality... And so that can be up to the reader of the code, I suppose. But I've put up production systems, and I've built all kinds of things... And like I said, back in the day, I learned GDB, and I learned how to use a debugger, and I see the value in it. Ultimately, the ROI on that tool is lower than I'm willing to invest. And so as I move on in my life to the next phase... Oh my gosh, I just got started. Hold on, I now allow myself 20 more seconds... \[laughter\]

**Kevin Ball:** Just gonna lean on that scale a little more there...

**Jerod Santo:** Yeah... I'll stop, because I am a fair moderator. I'm not biased. I'll stop right there. But y'all know where I was driving with that little story. And I was going to a really good place. Okay, we'll give Amal one more minute. Do you want another minute? Have you got anything else to say? Or are you all out of arguments?

**Amal Hussein:** Yeah, sure.

**Jerod Santo:** Alright, go ahead.

**Amal Hussein:** I mean, I feel like I've been arguing against logs, but really what I should be doing is arguing for all the things that you can do beyond logging. So look at how the web has evolved. So we have tools like Lighthouse, that allow you to kind of debug all kinds of issues in your application real-time. And that's something that you can't do from a logger. You can record your performance, you can look at your heaps and get snapshots of kind of how much bandwidth you're utilizing. Or device compute you're utilizing. You can figure out how long API requests are taking. There's all this kind of conversational -- there's a kind of a huge conversational element, and almost like a query-like elements to debugging, which you can't get from just plain logs. \[Wut?\] And so yeah, why limit yourself?

**Jerod Santo:** Kball, one more minute.

**Amal Hussein:** The world is -- it's a big, big place out there.

**Jerod Santo:** \[Wut?\] Listener, disregard the last thing Amal said. It didn't count. It was outside of the time. Okay, Kball, go.

**Kevin Ball:** So I think fundamentally we might be disagreeing about what logs are. So when I want to debug something that happened to a user in production, I go and I look at the information I have about what happened to them. It's in my logs. I go and look up the exception trace. What was the exception that it threw? That's a log. I go and look at my observability of like "Okay, how many other people have hit this? What are the data on that?" That's an aggregation of logs.

Fundamentally, logs is what's underneath all of these advanced tools. And if we start from thinking about what data do we need to log - and I don't just mean "What data do I need to log now to debug this problem that I'm doing now?" But if I start from a log-centric mindset, I am thinking about "What do I need to be logging throughout my application's path, such that when something goes wrong, I have the information that I need in order to track down what it was?" Because I can't predict what is going to go wrong, or when it's going to go wrong. I don't have a controlled environment for when things go wrong for users... \[Wut?\] So I need to be thinking from a log mindset what needs to be there for that future self.

**Amal Hussein:** Log mindset.

**Jerod Santo:** Do not pay attention to the last thing Kball said, unless it was really good for you, then go ahead and keep it. Alright, Eric, final statements. You've got one minute. Go, sir.

**Eric Clemmons:** Yeah, I mean, if we're gonna talk about how we store data, like the .har files that we record in browsers, and everything we store, we might as well say yup to JSON, and I'll be on the same page and end the show now. But it's more to that. If we look at the patterns of when logging is good enough, we're seeing engineers keep -- like that quote from earlier, just like "I see junior engineers..." Yeah, because it's a low-level tool and primitive. You learn that day one of programming. But if you want to stay at a junior-level debugging experience, then that's perfectly fine. But as we improve and grow, one of the things that we should be doing is having faster, rapid iteration loops, and a lot of that comes from leveraging the tools that are applicable to the environment we're in, that's in the stack that we're in, and the company that we're in, and using those tools so that way we can go from zero to fixed as soon as possible. And if that means moving console statements around, you can just look at the number of typing, like how many key presses you've been using to debug something to realize that this is kind of an inefficient process. If you could have gone to what the end result is faster, where that undefined came from, you'd be done. \[Wut?\]

**Jerod Santo:** \[22:34\] Okay. So as moderator, I will defer my final minute in order to tally the results... And we had -- let's see, carry the three... Okay, over here... Wow. After this scientific result calculating, it turns out that for the first time in Yup/Nope history Jerod didn't win. We all win. \[Win, win, win, win, win. We all win.\] So congratulations to both sides for presenting excellent cases. We all win, guys. How does it feel?

**Amal Hussein:** Not rigged... \[laughter\]

**Jerod Santo:** Alright, well, dear listener, obviously, you have a real winner in mind, and so you can email us, you can tweet at us, and you can just tell us that it was me, and then we'll feel better about it. But I'm not going to declare myself the winner, because I've transcended such things. But finally, at the end of the day, we're happy, because we all are going to find that stinking bug. \[Ah-hah! I've found ya, ya stinkin' bug!\]

**Break**: \[23:35\]

**Jerod Santo:** And thus ends our Yup/Nope debate, but we're not finished talking. So let's now just discuss freely amongst ourselves - no timers, no moderator, no Jerod winning everything, but just giving you guys that olive branch and saying that we all won, even though we really know what happened... Instead of all that, let's just discuss debugging tools, techniques, what do you all do... Are you representing the side that you actually believe in? I will say that I do use console logging for most situations. There are obviously scenarios where you get a particularly sophisticated bug, and you do need a little bit more firepower in that circumstance, and so I will move on from there... But I do find that for most things, it's enough to use console.log. And because of the power of the dev tools, console.log has so many features, like right-click "Store as global variable" - that's basically print debugging, but it's going beyond print debugging, isn't it? ...because now you're actually interacting with the environment as it is, and that's incredibly useful for diving into an object and seeing what data is there and all that. So that's my actual take, because I do mostly do print statements, but I also like to hop into the runtime and stop things, and try things when it's sophisticated, or difficult, or when print statements aren't quite good enough, even though mostly they are. So that's what I'm thinking. Eric, what's your stance? How do you debug? What are the tools that you use in these circumstances?

**Eric Clemmons:** It's a lot of the same. And really, the biggest problem isn't so much of where to put that print statement, or if I'm going to run Node Inspector, and debug this thing in Chrome, and set a breakpoint... I find actually breakpoints be more of a hindrance; I've recently learned how to do like the variable watching, which has been way more useful for me... To just say, "Let me know what this value is and how it changes." We've talked about race conditions earlier, Kball... It's kinda like that example, is I want to see the thing run and play, and then just get into the iteration loop. But that's not really where the friction is. Most of the friction for me is trying to get to the reproducibility part; it's all the stuff outside of my control. I've spent so much time over my career trying to have reproducible environments, and trying to like log in as and impersonate some special user session... And that -- I mean, there's tools solving for that now, but I see that as being where like most of the "Works on my machine" issue is coming from; the code part has become easy to actually debug once you have reproducibility.

**Jerod Santo:** Yeah. Good point. Reproducibility is killer. A lot of the work is just getting to that spot, or finding that spot. Yeah.

**Amal Hussein:** Yeah, I would second that breakpoints can be annoying AF. However, helpful AF. However, I think for me that -- I didn't want to argue this earlier, because it wasn't team log... But console.log has really gotten very souped up; there's really smart things you can do now. There's console.assert, that lets you kind of do a conditional console.log, where you can say - your first parameter is what your truthy or falsy value is... So you can do a check to say "If this is true, then do a log." So if you don't want to end up --

**Kevin Ball:** Yeah, that is such a useful tactic.

**Amal Hussein:** So good.

**Kevin Ball:** It's so helpful.

**Amal Hussein:** Yeah. I mean, it's way better than a breakpoint, because then you don't have to find -- there's all this context switching, right? So there's that, and then just being able to kind of also view your data in a richer way, like things that you're logging, with console.table, console.dir, whether you're trying to kind of open up arrays, or objects... There's nice ways to kind of quantify the data that you're printing. So logs are great, but for me, there's just nothing more beautiful than also just typing debugger-semicolon and just letting your code rip, like run. And being able to just kind of inject a breakpoint from code. I think that's also just really nice, and something that I don't see developers utilize enough; you don't have to kind of futz about.

However, I think some of our pain points around using breakpoints have greatly smoothed over in the recent versions of Chrome. Everything from kind of like auto-ignoring third party scripts... Like, don't you hate it when you're just trying to like walk, get to a place, and then it's like "Why am I in all this obfuscated JavaScript that I haven't written? Get me out of here." So being able to ignore third-party scripts; and then being able to even just click on entire directories from within your debugger and just say ignore; like, your Node modules, or any other directory that you want to ignore.

So there's lots of kind of nice UX improvements, I think, that have happened around working with breakpoints... So if it's been a while, or if you've hated breakpoints your whole life, I'd say give them another chance. I think there's a lot of really nice improvements that have come in over the past year and a half.

**Jerod Santo:** \[30:35\] I think it's also worth pointing out that there's kind of different kinds of debugging... Because a lot of the debugging that I do is actually just development. So I'm actively coding, and I'm just like shaking out bugs while I'm coding. And so in those cases, console.log is darn near all you need... Because you're like coding, you're doing a thing, you're like "Okay, this is not working. What's wrong with this object here? Okay, I'm gonna print it, I'm gonna look at it. Okay, no wonder; it didn't have this property. Okay, go back to my code."

And so I'm debugging while I code. In that case, I don't really find -- I do like to stop the world every once in a while, but I don't find it to be super-useful. But then you have the one that is like -- somebody opens a ticket, and it's like "Okay, this --" And it comes back to what Eric was talking about, with reproducibility. It's like, this bug exists in production, and it exists for this user, at this time of day; they happen to live in San Diego. But the production database is in Tokyo, or something. And now you're like "Okay, I'm not like actively doing stuff... I'm just here to solve a problem. Where do I start?" And a lot of the difficulty is, "Well, how do I get my system that I'm working on to look like production, to look like that user?" And Eric, you mentioned shadowing techniques, or like login as, or masquerading as a user kind of things, which - that stuff is very valuable, but you end up having to develop that yourself, or you have to like buy a system that allows you to do that... So a lot of times, I think that's the really complicated part of debugging.

**Kevin Ball:** Having a local production environment, something that connects to the production databases, but lets you reproduce in a local environment is super-helpful for that. That was something that I hadn't seen that much, and then my last job had that, and I was like "Oh, this is really cool."

**Jerod Santo:** Are there guardrails around that?

**Kevin Ball:** In that case, there were. So the default was you were in read-only mode. So you could log in, you're accessing it, but you're read-only; writes are just ignored. And that was implemented at the data layer, so it would have been very, very hard to mess that up. That was the biggest guardrail. There were others. There was like a banner on, "You are in production mode", or whatever. "Be careful." Things like that.

**Jerod Santo:** So that's something that somebody at your previous employer put together, right?

**Kevin Ball:** They built, yeah. And it was easier to do in that environment because they were operating in a world where even the development environment was connecting to a cloud database... So you didn't have this local versus cloud split in the same way. So the environmental change was not that different... Though if you're already implementing a cloud environment for your production, and you're already thinking about how that works, adding a local prod version of that, so long as you have your tunneling things figured out, which is kind of the key question, is like permissions and tunneling, and how are you doing it... We were operating in a trustless mode for everything; we didn't have, "Oh, this is a trusted network and this is not", which once again, that setup makes that a lot easier to generalize... If you're having the "Oh, we're inside the cluster, so we're trusted" type of setup, it's a lot harder to implement a local production environment.

Coming back to this question of debugging - you're totally right, Jerod, a lot of debugging is in flow with development. When I think about debugging, I don't even think about that. That's just like, that's development. Okay, I'm working on that in whatever the tool is for the job. And when I think about debugging, a lot of times the things that I would get brought into, especially my last few positions, it's like "This is something that happens somewhere in production, and we don't know why, and we don't know what reproduces it." So sometimes it's figuring out how do you get your reproducibility, and in some cases there is no way to get to reproducibility. It only happens when certain things align.

\[34:15\] And so then it really becomes about how do you -- it is this observability question, extension of logging, of like "How do you get enough stuff in place in your application environment, so that when the problem happens, the information is captured, enough information is captured that you can reproduce what actually went on there?" And I do think in that situation -- the "console.log" debugging is a closer mindset to that, but it's really... Like, we're starting to talk about observability, and this question of "How do you log out sufficient application state to understand what went on when you're looking at it after the fact?", rather than "I have an environment where I've reproduced an issue, and I'm doing things, and I'm able to tinker and go back and forth", which is where both the inflow of development debugging happens, and also where a debugger or tools like that tend to be very useful.

**Amal Hussein:** That's a really good point, Kball. I think for me, just listening to you, I was reminded of console.trace; something else that I'm -- at one point in my career I remember I just like substituted all my logs for traces. It was super-annoying, but it was helpful. Annoying because you get this long output... But yeah, it's nice to be able to see how you got there. I forgot that you can't actually do that with a log.

**Jerod Santo:** Is that the same thing where it gives you a full stack trace? What does console.trace do?

**Amal Hussein:** It basically it prints out, you know, if you give it a thing to print out, but then after that, you see how you got here. So we are in this function, and before this we were in this function, and this function... So it's kind of like your stack trace, but it gives you that, I don't know, five or six lines deep of everything that happened; what contexts were you in before you got to this context, basically... Which is very, very helpful.

But I think for me, debugging is just about piecing together the map of your state, your application state... And I remember the first time I debugged, it wasn't even in a JavaScript context. It was like in Python, and Ruby... All these -- similar to the debugger statement in JavaScript; you know, in those languages you can put like a binding pry, or \[unintelligible 00:36:27.02\]

**Jerod Santo:** Right. \[unintelligible 00:36:28.21\] in Ruby...

**Amal Hussein:** Exactly. And so you immediately open up this repl context where you can actually query and see "Okay, what is my application state right now?" And I think for me, that's the secret sauce power of being able to actually stop and pause in an execution context, is actually understanding "What are the values of all these variables right now, and where's the disconnect?" Because you're there because something isn't happening as you expect it to be. And so I think that's very useful. And I think tools like TypeScript have reduced the need for some of that, to be honest. I think there's a little more predictability in our overall state because of TypeScript... But still.

**Jerod Santo:** But still.

**Amal Hussein:** \*bleep\* still happens, yes.

**Jerod Santo:** So Eric, in your work, when you get a ticket, or you get an issue, or a colleague comes to you and says, "Hey, I've got this bug. I can't figure it out", what do you generally do? Where do you start? What are the steps that you take to get through that?

**Eric Clemmons:** The very first thing is always "Alright, show me with a video, a reproducible repo", something like that. It's usually -- it's kind of like "Have we logged enough?" If I find myself going to Data Dog to look at raw logs for what happened, I already know I'm going to be having a bad day. I'm like "This is too far in. I know I'm missing off on network requests, and everything." Yeah, but once you get into "Okay, I can point to where the problem is", it's kind of like normal development, like you mentioned, Jerod. We're constantly logging, seeing what the state is of how something's working... And I have a nagging voice in the back of my head that's like "You're putting all these console.logs in here." And I have a personal rule that says "It's okay for bugs that happen once." Hopefully, employers aren't listening, but... You know, "It's okay for bugs happen once, but just not twice."

\[38:14\] And so anytime I do something ephemeral, like putting into console.log, that ultimately gets deleted from that bug, that nagging voice is saying "Well, you could have been doing test-driven development for this, right? Couldn't this have been a test to make sure it doesn't happen again, instead of you just logging out \[unintelligible 00:38:27.04\] Now the undefined isn't happening, and I fixed it." So that's usually how the flow goes, is identification, reproduction, and then whether or not that fix is going to be resilient to more code changes in the future.

**Kevin Ball:** I think there's something really important in that, which is trying to identify not just what was the immediate source of this bug, but what is the underlying fragility, whether it's in our processes, or our systems, or whatever, that led to this bug being possible. Ad bugs are gonna happen, we are all human, humans make mistakes... But you can often start to detect things like that, where you might say, "Oh, we're using JavaScript instead of TypeScript, and so we have this whole set of things." Maybe if we move to TypeScript, this wouldn't be possible." Or we have a set of types that are not sufficiently constrained here, and so we're running into challenges. Or maybe you can say, "Oh, this system is developed in a way or works in a way such that it results in lots of buggy code. It's really hard to work with, and people tend to misinterpret it because the API is shaped funny", or something like that. Okay, let's identify those patterns that lead to the bugs, and then say, "Okay, when we have time, or let us make some time... How do we address that systemic issue so this class of bugs completely disappears? ...not just let's whack a mole them down as they show up."

**Jerod Santo:** Yeah, well said. And I think, Eric, your point about adding tests - I mean, there's no better time to add a test than when you've just fixed a bug... Because now you know exactly one thing that could go wrong, and you can add a test that just makes sure that at least that one particular thing is never going to go wrong again. So even if you don't TDD it, you can at least add a regression test after the fact, that just tests for that bug. But it actually is a good way to debug, is once you know what the problem is --

**Kevin Ball:** I was gonna say, even better is before.

**Jerod Santo:** Yeah. You write that as a test, and then you make the test pass, and life is good from there. I will say, when it comes to actually identification - so I've worked on a lot of network systems, I've worked on a lot of web apps and stuff, and there are certain people that you work with over time who are just really good at finding... You know, a lot of times you've got to find the bug; that's all the work. So reproducibility is the name of the game; it's like "How do I reproduce this?" And sometimes you can just get yourself in this general arena of the bug, but you're not really sure exactly what's going wrong, but you know it's not this subsystem, or that subsystem. It's over here in this subsystem, and you're trying to feel around in the dark. Depending on your tooling, it could be more or less dark, but a lot of times it is, for what exactly is causing that circumstance. And people that I've learned from that are really good at that - some of it eventually expertise turns into intuition, and they'll just kind of know what's wrong... And you're like "How'd you do that?" and they can't describe it, and you're like "Dang."

**Amal Hussein:** \[singing\] I feel it in my finger...

**Jerod Santo:** Yeah, exactly.

**Amal Hussein:** No, I'm just kidding. See, I've found an opportunity to sing...

**Jerod Santo:** Oh, no, but then you stopped short. We want you to launch into it. Eric will grab his guitar, and then Kball and I will just dance.

**Amal Hussein:** Yeah, exactly. \[laughs\] Yeah, we'll just be squashing bugs.

**Jerod Santo:** We'll have an actual party... But if you don't have that intuition, I'll say this - only change one thing at a time. That's how you find it. You keep everything -- like, caeteris paribus; everything else is the same. I'm going to change one input, I'm gonna test it. Then I'm gonna put that input back to what it was, and I'm gonna change my next thing, and I'm gonna test it.

\[41:51\] Never change three things and then see "Oh, I've reproduced it all of a sudden." Well, which one was it?" "I changed three." "Those three together? Or was it two of the three? Or was it just that one?" "I don't know." And now I have six more things I have to go try before I actually have confidence that the bug is fixed. So that's like the best, for me, advice; when you don't have the intuition, eventually you'll get there, I think, if you develop long enough. Just change one thing at a time, until you land on it.

**Eric Clemmons:** When you mentioned that intuition - how much of that is the building up of the skill of being able to identify where problems can happen, those types of problems, the entire classes that we ideally want to remove? Or is it intuition of how the system works? Like, where the system's fragile, where the system is resilient, that sort of thing.

**Jerod Santo:** Yeah. I would say that I've seen it be both; it's kind of hard to actually dissect that and say either or, because I've been with people who are deeply into a system, like they know that system inside out. And that's the guy or gal that you're gonna go to with the bug, because they know the system. And then I've also -- I have one individual in mind specifically, who's just good at finding bugs in anything. And so it didn't matter if he has the domain expertise, or he wrote that subsystem or not, it's like "Hey, George, or whatever", I'll keep it anonymous, to not embarrass somebody with compliments... He's just good at debugging things generally; it's like, he just knows how to -- I don't know. So I've seen people that are kind of in both camps. Does that align with you guys, or...?

**Amal Hussein:** Yeah, that's very aligned with my experience. There's some people who have just been doing this for so long, they are very familiar with "Oh, you're seeing this problem, and it has these symptoms? Oh, it's likely due to XYZ." And they don't know your system at all.

**Jerod Santo:** Right. They're like "It's DNS." And you're like "No, it's not DNS." And then 17 hours later, it was DNS.

**Amal Hussein:** Right. And then there's the people who've been there so long, they're familiar with all the problems. They're like "Oh, when this thing happens, it's because this API system and this thing, or this thing are down." Like, they're very familiar with the specifics of that. And to that, I would say that -- when you've been there long enough that you know all the things that could go wrong, maybe we should be putting more resilience in strengthening that part of the code, if it's so problematic that everyone knows "When this thing happens, it's this problem."

But for me, the debugging is -- I think Eric kind of mentioned this earlier... It's really your best way of reducing that time to solving a problem, is "What's your observability stack?" Because I don't feel like teams invest in that enough often; it's always an afterthought, absorbability, both from just analytics metrics, things like Sentry... All kinds of just ways to kind of log out your application state, and getting a baseline; the sooner you have all that stuff in, you have a baseline of "normal", and it's easier to kind of see when things are going haywire. You can set thresholds, you can monitor for changes etc.

So I would say really don't sleep on observability. It's very much like the public health versus kind of ER; like, proactive versus reactive. But it usually really goes a very long way into kind of reducing how long it takes you to figure out what's going wrong. It's an important part of the debugger's toolkit.

**Kevin Ball:** I want to take something that Jerod said and extend it. So Jerod, you talked about changing one thing at a time, and I think that is an example of something that I've found to be very important with debugging, which is just being extremely systematic about understanding what is true and what is not true. I've found with a lot of newer engineers, or people who struggle with debugging, they'll jump to conclusions about what's probably going on, and then spend their time trying to verify that conclusion. And it comes back to - it's hard to prove something is true, it's much easier to prove something is not true. And so I always start with, "Okay, what is going on? Show me the situation."

**Jerod Santo:** "What is going on?" Yeah, that's what Eric said earlier. Yeah, "Show it to me."

**Kevin Ball:** \[45:59\] What do we know is true? What do we know is true? Can we confirm that? So going back to if we're using logs, or we're using a debugger, or whatever... If you know the error is happening in a particular function, don't jump to somewhere down in the function and try to figure it out. Logout what is true when you enter that function. What arguments were passed? Do those match your expectations, or is there something unexpected happening on there? Start from validating those very basic, fundamental assumptions, because usually, bugs don't arise because our assumptions were correct and then we implemented it wrong. Usually, they arise because there was a gap in our assumptions; we were assuming that something would be true, that it turns out in some situations is not true.

And so the sooner that you can get to the point of "Oh, here's the place where my assumptions are not being validated", the sooner you're going to be able to figure out, "Okay, why? And is the problem that I need to handle this other case, or is the problem that something upstream is breaking and sending me invalid things?" It gets you arrowed into that much quicker. But I think a lot of folks start with, "Oh, I think the problem's here", and they jump right in, and they never take the time to validate their assumptions and move systematically.

**Eric Clemmons:** Brilliant. It reminds me just how little we do as kind of like engineers to test for like the non-happy paths; those assumptions are baked into so much code. I mean, you can look at failure states... And it's actually one of the beautiful things about being in the frontend space as a web developer, is that that's a portable skill, of being able to work in the browser. You hand me a URL if something's going wrong, and I'm going to be able to look at these really rich tools that you don't get when you console.log in Node. I can actually expand out variables, and copy to the console, like you mentioned. It's almost always like at the network layer, where we see that some happy path assumption isn't true anymore. And then that's whenever all the problems arise.

**Jerod Santo:** I'll give one other bit of generic advice... This maybe more along the "While I'm coding, troubleshooting, debugging", less so than just "Here comes a production ticket." In my experience, it's almost always your code. And this is just a humbling -- I mean, 9 times out of 10. I mean, sure, the further you get away from your code, the least likely it is to be where the problem lies. The fact -- like, is it in the Linux kernel? Probably not. Is it in Node.js? Probably not. Now, there are bugs there, there are problems, and there are things that change out from under you... But that's like the 1 in 10 cases, like "Well, Node's API has a bug in this version." And most of the time, 9 times out of 10, if you're looking for the problem, look in your code, and then look in the code that's touching your code, and then work your way down. Because I, especially as a young man, would immediately -- I was a Ruby on Rails developer, and I would dive into the Rails codebase immediately, and be like "What are they doing wrong this time?!" And it was always me. I was like "Wait a second..." Talk about checking your assumptions, right?

So just be humble enough to start with your own code, and stay there for a while, even when you can't find it, before you decide "I'm gonna hop into Chrome Dev Tools and open up the source code for the dev tools. Maybe the dev tools are actually printing this wrong..." That's how strongly I would not let myself be the source of the bug... So it's almost always your fault.

**Kevin Ball:** Almost always.

**Amal Hussein:** Yeah...

**Kevin Ball:** But...

**Jerod Santo:** But...?!

**Kevin Ball:** Well, it is almost always true, and you are absolutely correct, that's where you should start. And we did an episode where we shared debugging horror stories, and I will say the horror stories usually have to do with something in the environment.

**Jerod Santo:** Yeah. That's why I said nine out 9 times out of 10. I mean, if you do enough bugs - I mean, 1 out of 10 is a decent clip. If you're gonna do 100 bugs a month, it's gonna be somebody else's fault. And that's a made-up number, of course, but it's almost always yours.

**Eric Clemmons:** Everything was working, until you put your code in. And then now it's broken, so... Yeah, that is the one variable, is yourself.

**Jerod Santo:** \[50:01\] Yeah. It's also the thing that you can control the best... Upstream bugs are the worst, because now you're like opening a ticket, it goes into a queue... Hopefully, you have a workaround that you can do for now, and then you put a little note in there, like "Once this issue gets closed, I can take out this monkey patch", or whatever. And then that lives for like seven years in the codebase, of course... But the further away the bug is from your code, actually the less agency and autonomy you have. And so it's better than it is your own, because you can just change your own code. Whereas upstream - you've got bigger problems. But they do happen.

**Eric Clemmons:** Have you used patch-package for issues like that?

**Jerod Santo:** No, please explain.

**Eric Clemmons:** I see Kball is nodding over there... I discovered it a few years ago, but effectively, you find an issue in some upstream package, something in your Node modules, you try your code, your code is flawless, as usual, and so you trace up, and then you find it's some sort of Node module... And you go in there and you change the code for the Node module, and you fix it. So what this patch-package does is it'll do a diff of your Node module, create a diff of that, generate a PR for the upstream package that has the issue... Meanwhile, anytime you install that dependency again for anyone else on your team, a patch will be applied to it, a Git patch will be applied to it... So that way, your fix for it before it lands upstream is at least in your project, and you can benefit from it. It works pretty well in my experience, with the exception of the more transpilation npm projects have, where they have like one single index.js file that's giant, it makes the utility a little bit lower.

**Kevin Ball:** Yeah, it's really useful. It works best also with projects that are likely to accept your patch sooner, because the more there's churn -- like, if you update the package, you need to now update your patch in patch-package, because otherwise it won't necessarily apply cleanly if there's been other changed around... So if you have a package that changes frequently, but doesn't accept your change, it either you're pinning to the version that you have, or you're having to continually keep redoing that work.

**Amal Hussein:** Yeah, I don't see how it would work without pinning a version... Because if you can't guarantee that your merge is gonna get accepted, you're risking it just randomly breaking for others. But that's so cool, Eric; thanks for sharing that.

**Jerod Santo:** Yeah, I'll link that one up in the show notes.

**Amal Hussein:** Yeah. I mean, open source code is battle-tested, there's more people using it, so to Jerod's point - yeah, start with your code first, because it's likely the least -- especially if it's new, the least battle-tested code in your stack... But I mean, considering that only one out of every ten lines is code that you write in your application, for every 10 lines that you ship, 9 of those are from third party libraries... I mean, it's pretty amazing that we don't have more issues.

**Jerod Santo:** It's a large surface area.

**Amal Hussein:** ...more issues around the integration layer.

**Jerod Santo:** It is. Sometimes I'm still amazed at all it works.

**Amal Hussein:** It's really amazing. And not only that, just with security issues too, that there's not more burning security issues every time. That's also very impressive.

**Jerod Santo:** Alright, do we have any final thoughts on debugging, tools you like etc. before we call this a conversation?

**Eric Clemmons:** I want to look into Replay. I've seen a lot of discussion about it. Replay.io. And the biggest question I kind of have is like when a bug has already happened, how can I get to that replay? Does it require like a Chrome extension, does it require an app to be running? What does this mean for like an end user versus as a developer tool? And I don't have the answers. I don't know if anyone else is has used it... But the promise of something that can give me a replayable session is - that's where I want to be, like developer experience... I want to do my job normally, let the bugs normally happen like they do, and then try to just go back in time and be like "Okay, now let's pretend the code was actually this, and I did it right the first time around. Now does it play through cleanly?" That's where I would like to be in a developer world, of not have to have that stop because of an error and that cold start problem again.

**Jerod Santo:** \[54:18\] Right. Yeah, if reproducibility is the biggest time-sink for us, and like the one that you have to work through, if you can provide that, you can reduce the time to reproducibility, and provide an option to like just replay history with this code, versus the code that currently exists... I mean, you're gonna save a lot of people a lot of time. And so that's great. I hadn't seen this before.

**Amal Hussein:** Yeah. Do you want to just give people context or what Replay is, Eric, and if it's available outside of the React world, or...?

**Eric Clemmons:** I unfortunately don't. It's one of those tools to where you've got to invest the time into researching it. But it's only been ephemeral, of like -- I brought up the Tim Neutkens quote earlier, and it just struck a chord with me... Like, yes, super-complicated bug that would have been days to reproduce - I spent some time over at AWS, and every customer's environment is different. And because of that, the way one thing behaved would be entirely different from something else because of some statefulness of their specific backend... And it's like "If only I could see exactly how their backend was configured, I'd be able to figure this out."

So I think that's kind of like the thing, is that having -- like, Kball mentioned, where I'm at now is similar to where we used production data, with like a \[unintelligible 00:55:32.07\] and that's been fantastic. So if that were extended even further, it would introduce time and recording into production, like real data with local files, that would be my sweet spot for just day to day work. And naturally, part of that is like debugging.

**Amal Hussein:** Y'all remember back in the day when Redux first came out, I think the biggest kind of a-ha was the time travel debugging feature? And I heard this straight from the maintainers... It's funny, actually, Mark Erikson, as well as Brian Vaughn from the React team, and Mark Erikson, both friends of mine now work at Replay, the startup that you're talking about... But Mark is one of the maintainers for Redux, and he mentioned that surprisingly, not that many people took advantage of time travel debugging, despite it being the thing that people were most excited about, because it gave that predictability of like your state and being able to replay it. So yeah, I'm curious to see if -- I think maybe Replay...

**Jerod Santo:** Did he say why that was the case? Maybe it was too hard to do, or...?

**Amal Hussein:** I think config, setup... The pipeline around kind of, okay, once you capture the replay, how can you see it? I think Replay, the startup, is actually kind of smoothing that experience out.

**Jerod Santo:** Right. That's what they're trying to do.

**Amal Hussein:** Yeah. So if they make it a service, I'm excited to see if there's more adoption around it.

**Eric Clemmons:** Yeah, because a mixed app with that has more than Redux wouldn't get to benefit from time-travel debugging; only the state from the Redux store.

**Jerod Santo:** Right.

**Eric Clemmons:** I think that's kind of the problem, is that it's kinda like betting on the web and betting on the environment we're in; all the statefulness that really matters is there in the browser, is there when you're doing that console.log or your debug. So if the statefulness is managed there, that's the ideal, irrespective of how my app looks today in Redux, versus MobX, versus Prisma, or whatever else the next iteration is.

**Kevin Ball:** Well, and this is pointing towards something that might be worth touching on, which is writing code that is debuggable. And one of the biggest sources of challenge, as we've highlighted, is reproducibility. Reproducibility has to do with state. You have to get this thing, whatever it is, into the state that reproduces the bug. The more that you can separate state from functionality and implementation, and have your state encapsulated, and then have your functions encapsulated - and this is pointing towards functional styles of development, this is pointing towards declarative development, which was a direction we've kind of moved in for a lot of web frontend stuff at least...

\[58:08\] But the more you could separate those things out, so that you can test your logic independent of your state, and pass in all sorts of different states, and the more that you have state in a place that it's easy to snapshot it and replay, or do things like that, the more debuggable your code is going to be, and the easier all of this is going to be.

**Jerod Santo:** Well said. Alright, we are hitting up against our time here... Eric, thanks so much for coming on the pod today. We'd love to have you back anytime. You don't need to wait for Amal, or another debate episode... Just give us a holler if you've got something to talk about. We'd love to have you on the show more often. Where can people connect with you? Where can they get to know you, talk to you etc. on the internets, besides going to Texas and finding your house? I mean, that would be weird.

**Eric Clemmons:** Just over barbecue, or something... Yeah, I'm still on the Twitters, @EricClemmons, so just my full name. Otherwise, the GitHub, and... But yeah, Twitter is the best place to ping me.

**Jerod Santo:** Sounds good. Amal, Kball, thanks for debating with us as masterfully as you always do.

**Amal Hussein:** I don't like debates, but this was fun. I don't do well with time pressure...

**Jerod Santo:** Hey, I mean... On this debate we won, you won, the listener won... We all win. It does get any better than that. Maybe because it's Friday, we're recording on a Friday and I'm just feeling gracious today. I'm just allowing others to finally get in on the good, good wins that I usually rack up. The only person who lost today, let's be honest - it was Nick Nisi. Because a) he didn't win the debate, and then b) we barely mentioned \[His beloved TypeScript\]. So... That's two losses for Nick, which is a good note to end on.

I'm Jerod, this is JS Party, on behalf of Amal, Kball and our guest, Eric Clemmons, thanks for listening. We'll be back next week with an awesome episode, I'm sure. So stick around, and we'll talk to you all on the next one.
