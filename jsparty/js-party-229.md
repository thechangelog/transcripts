**Kevin Ball:** Hello, JS Party people! Yes, the sound of those beats, and if you're watching on YouTube, those bopping heads going back and forth - that means we are ready for this week's JS Party. I'm Kball, I'm your host this week, I am excited to do this episode. We're gonna try some new stuff, which should be fun. But I am joined this week by two of my favorite co-panelists. First off, Ali Spittel. Ali, how are you doing?

**Ali Spittel:** Good, good! How about you?

**Kevin Ball:** Life is good! I've got my coffee, I'm high-energy, and I'm ready to go. Nick Nisi!

**Nick Nisi:** Hoy-hoy! How's it going?

**Kevin Ball:** It's going well. Your consistency with hoy-hoy is amazing, because we have a recording of that, and it sounds just the same. I'll try that, and you tell me which one is real. \[Ahoy-hoy?\]

**Nick Nisi:** Ahoy-hoy?

**Kevin Ball:** Alright, maybe not as consistent as I thought, but okay.

**Nick Nisi:** \[laughs\]

**Kevin Ball:** So we are starting off this week with a new segment, and if it works, maybe we'll do this again a few times. So if you're listening, let us know what you think of this segment we'll try. This segment is gonna be about all the weird things that JavaScript as a language does.

This segment is called "WTF, JS?" and introducing this segment - folks, we were talking about it and we wanted an intro. Now, we have a lot of intros where we've got like Mat Ryer from Go Time or somebody to do it... And he's really talented, so if you ask him to do an intro, he'll play something on the guitar and sing it. Folks had me do the intro, and this is what you get.

**Jingle:** \[03:38\]

**Kevin Ball:** So WTF, JS about the weird things that is this language we spend so much of our time talking about. Ali, you have a really fun one to share. Do you wanna go first?

**Ali Spittel:** Yeah, yeah. I have two. Should we rotate?

**Kevin Ball:** Yeah, we could rotate. That sounds good.

**Ali Spittel:** Okay.

**Kevin Ball:** \[04:00\] I should warn folks, we're gonna import one of our panelists - he has some great takes on things, and we're just gonna reference occasionally... So listen out for some b0neskull sound effects as well as we go through here.

**Ali Spittel:** \[laughs\] Great. Because I'll be needing some bleeping for this one. So one of my favorite really weird JavaScript things is that you can actually write anything in JavaScript using only brackets, parentheses, a bang and a plus sign. So you can write anything in JavaScript with these. \[Wut?\] So if you use combinations of them, you can do anything.

For example, a Hello World of doing this would be 4,325 characters, so it's definitely not the efficient way of doing things. And it's become kind of an esoteric subset of JavaScript. It's named JS Bleep, inspired by brain bleep, which probably a lot of listeners have heard of... It's an esoteric programming language that's only using characters. And you can write the whole entire alphabet with this.

For example, if you wanted to get like an \[unintelligible 00:05:09.05\] for an alert, in order to do an alert - aren't alerts deprecated now? Anyways... If you wanted to write an alert, an array is truthy, so in order to get the word false, you could do bang and then an empty array. You can get true by doing bang bang and then that empty array, too.

So you can get the letter a from the word false by getting the first index from the word false, and then you could use the zero index, which is plus and then an empty array. So it's all really, really, really wild. It makes no sense.

**Kevin Ball:** Wait, wait, wait...

**Ali Spittel:** Yeah.

**Kevin Ball:** So you use bang array to generate a false, because that's the opposite of truthy.

**Ali Spittel:** Exactly.

**Kevin Ball:** But then you make it a string, or you treat it as a string, and you index into it.

**Ali Spittel:** You treat it as a string.

**Kevin Ball:** And so you're gonna index into it with one. But you don't wanna use the number, so you're actually getting one from the array plus one, or something.

**Ali Spittel:** Yeah, yeah.

**Kevin Ball:** You just blew my mind.

**Ali Spittel:** So you get the number one by doing -- let me see...

**Kevin Ball:** Oh, I see it. I was just playing with this. If you do plus array, you get zero. And if you do plus bang bang array, you get one.

**Ali Spittel:** There you go.

**Kevin Ball:** And then you could add another one. So you could do plus, bang bang, array.

**Ali Spittel:** Yeah...

**Kevin Ball:** Yeah, so you could do plus bang bang array, plus bang bang array, you get two. So now you've got all your numbers. Then you're indexing into false or true?

**Ali Spittel:** Yeah. Or false in order to get the a, for like an alert, for example. And then you could do the same in order to get the l from false, for an alert.

**Kevin Ball:** I guess I have to call out to Chris on this. \[Wut?\] That's blowing my mind. So how would you experiment with this? Where would you go?

**Ali Spittel:** Well, first you can just do it in your JavaScript console. So anywhere that you can run JavaScript, you can run JS Bleep. But you can also try out - there's this repl at jsbleep.com, but you sub in the word for bleep, the f-word there, and then you can put in any line of JavaScript and it will show you what it would be in JS Bleep.

**Kevin Ball:** Okay. So if we were to do a, and encode it in JS Bleep, it ends up... \[laughs\] Oh, dear. It's totally unreadable.

**Ali Spittel:** It's totally unreadable.

**Kevin Ball:** Alright. First entry dominating... Okay, Nick, what have you got?

**Nick Nisi:** Well, I've been struggling with this, because - I mean, just using JavaScript and not TypeScript is just a bit WTF... So I'll throw that out there as my first one. But I do have another one. Do you remember array-like objects? They still exist. I mean, they're still there. But WTF? They're wild. They're not quite arrays, they're just objects that have a length property and index things by numbers. And real APIs, like DOM APIs, use them and return them, and it facilitated the need for the array.from method, for example. It's just a big WTF to me, I don't know.

**Kevin Ball:** \[08:14\] So can you take an object that is not an array-like object and make it an array-like object by just giving it a length?

**Nick Nisi:** Yeah. But then it will -- like, if you give it a length of five and then you try to iterate over that with a for loop or something like that, it would be trying to look at the indexes, 0, 1, 2, 3, which could exist as properties on the object... Or it could not, and it could just be undefined and return undefined for everything. So it's just a weird way to get that.

But then on top of that, with modern JavaScript we also have -- you can implement iterables on there. You can use Symbol.iterator to create your own customer iterator method on anything, and... Yeah, it's just wild; all these ways that we have to sort of be arrays. And then we have sets, which is kind of like an array.

**Kevin Ball:** I'm trying to figure out what the right reaction to that is. I think it might be \[JavaScript should be destroyed!\]

**Nick Nisi:** Appropriate, yeah.

**Kevin Ball:** Possibly. Okay, so I've got one, which is more of a cross-browser oddity. So JavaScript, I think -- one of the things that makes JavaScript so weird is that there's no standard implementation environment. JavaScript is being run in different browsers, and also on the server, and these are all implementations of the language. So any sort of spec edge case gets treated in a different way.

The first one I'm gonna talk about is dates and timezones. If you do a new date - say you do \[unintelligible 00:09:38.15\] If you do that in Firefox, you get back a date that is January 1st, 2022. If you do that in Chrome, at least if you're in the U.S, you get back Monday, December 31st, 2021, because the new date does it in UTC, but if you're in a timezone such that that time UTC is actually the day before... Chrome actually returns the object in the user's timezone; so you can ask for one date and actually get the date previous.

Even more fun - if you ask for a date in February that does not exist... So February is a weird month, right? We've got only 28 days, where most months you can go up to 30 or 31. If you ask for the 31st of February, Firefox will rightly tell you "Hey, that's an invalid date", but Chrome will happily hand you a date that is for March 2nd. I don't know if that's a JavaScriptism or a browserism, but it's a hole in the spec that is implemented in kind of a weird way...

**Nick Nisi:** Dates are just so hard, in general.

**Kevin Ball:** Dates are hard.

**Ali Spittel:** So hard. So hard. Although I kind of like the way that Chrome handles it, that it goes to March 2nd, or whatever... Because it makes adding to dates much easier.

**Kevin Ball:** Totally. Well, and I was wondering - does it let me do that for anything? Can I ask for the 64th of January? But there it will do invalid.

**Ali Spittel:** Oh, interesting.

**Kevin Ball:** Or if you even ask for like the 32nd of something, it will do invalid. But if you ask for the 31st of February, it will map it over into March.

**Ali Spittel:** \[laughs\] It's so interesting. I wonder what the cut-off is.

**Kevin Ball:** I don't know.

**Ali Spittel:** Yeah, I guess we'd have to dig into the source code, or something. Or try it.

**Kevin Ball:** Ali, you said you had another one as well...

**Ali Spittel:** Yeah, so this is more of a programming oddity; and it's not even really an oddity, it's how it's supposed to be... But if you've ever done \[unintelligible 00:11:38.09\] in JavaScript, you'll notice that you get like three point and then a bunch of zeroes and then a four. You've probably done this before; you've done like \[unintelligible 00:11:48.22\] and seen this really random number show up. I've have it happen if a handle, like a shopping cart or whatever, with floats instead of strings, or instead of doing the integer math, or whatever.

\[12:06\] So this is a thing across most programming languages... It is the way that it has to be, because binary is base two, so it only handles one half, one fourth, one eighth cleanly. Something like one fifth or one tenth would be a repeating decimal. So this is expected that it needs to have, in order to be properly represented in binary, is to have this weird number at the end there... That's my other favorite one.

Actually, a reason for this - and there's a website that explains this really well... It's called -- so the subdomain is zero, and then it's point three, and then a bunch of zeroes, and then four .com. So we'll leave that in the show notes, but... I like these little explainer sites that explain this really niche concept.

**Nick Nisi:** There are a lot of them for JavaScript.

**Ali Spittel:** Yes.

**Kevin Ball:** You need to get exactly the right number of zeroes, so... I just checked to see if they've reserved the other domains if you typo it. So how many zeroes is that? It's like, one, two, three, four, five, six... It's like fifteen zeroes? So zero dot three, followed by fifteen zeroes, I think...

**Ali Spittel:** Yeah, I think it's ten to the negative fourteenth is what is says down in the footnotes. So that would track...

**Kevin Ball:** That's a fun one. Nick, do you have any other JavaScript weirdities that you wanna share?

**Nick Nisi:** Yeah, I'll share one more... These are all things that you never really run into, hopefully, in real-life code. So the number in JavaScript, like the number object or the number constructor has some constants on it; it has number dot min value, number dot max value... And those are some ridiculously high numbers. Or ridiculously low numbers.

If you take the min value, which if you just print it out, it's 5e to the negative 324th - if you do a comparison on that and say "number dot min value is greater than zero", it becomes true, even though it's a negative value. It's just amazing.

**Kevin Ball:** Is it a negative value? 5e negative -- that's like, five is positive. So it's going to --

**Nick Nisi:** Wait... Yeah, you're right --

**Kevin Ball:** It's like, 5 in the 324th decimal place past the -- or \[unintelligible 00:14:24.01\] Because you can do negative number dot min value and then it's false, too.

**Nick Nisi:** Yeah, you're right. But you can still have negative values, and you can have zero. So it should be the minimum value that you can have, but it's not.

**Kevin Ball:** Mm-hm. It's like the smallest fraction, not the most negative...

**Nick Nisi:** Yeah. And I think that it's just taking that float and converting it to an int, and then doing the comparison to zero, which is why it's coming out that way.

**Kevin Ball:** Interesting.

**Nick Nisi:** There's always lots of fun, simple explanations as to why those things happen, but... It's very fun.

**Kevin Ball:** I see there's also a number.max\_safe\_integer. I don't know if this would do it for you, but if I do in Chrome, the max safe integer +1 it shows me a number that is one more. But if I also do max safe integer +2, it actually shows me the same number.

So if I do number.max\_safe\_integer +1 equals the number.max\_safe\_integer +2, it says true. But if I do +3 on one side, it says false.

**Nick Nisi:** Yeah.

**Kevin Ball:** So at least in Chrome it's jumping in some weird way.

**Nick Nisi:** Yeah. I'm trying in the node:repl too, and I was trying with the min\_safe\_integer, and subtracting one, and subtracting two, and those are identical. And then subtracting three is two more; or two less, I guess. And then subtracting five is two less from that.

**Kevin Ball:** I think that might be just a Chrome bug, but that sounds like \[JavaScript should be destroyed!\]

**Nick Nisi:** \[15:55\] \[laughs\] It's just like physics, right? JavaScript is the black hole that physics falls apart around, where that number addition falls apart around. Arithmetic.

**Kevin Ball:** Awesome. I have one last one that I will share, which is related to sort. So if you have a set of strings and you have them in an array, you can sort them. And if you sort them without passing a comparison function, it will do kind of what you expect - it will sort them in alphabetical order. But if you pass a comparison function, which is something that in theory you should be able to do - you pass a and b, and you return b - a, which is what works with numbers or things like that, it behaves differently once again in Chrome versus Firefox.

I think it has to do with string subtraction not being defined -- or returning not a number. But it's kind of weird... In theory, if you wanna sort something backwards, you pass in the comparator and you do b - a instead of a - b. The default will be ascending order; you wanna do it backwards, you pass this in. But for strings, it suddenly goes to indeterminate behavior, so I think you need like a reverse method instead.

**Ali Spittel:** I think it's also super-interesting that the algorithm that different browsers use for sort is different, too. Some of them use Timsort, some of them use merge sort, and then some are quicksort, which I think is also fascinating.

**Kevin Ball:** Totally. So there you have it, our inaugural WTF, JS. Let us know what y'all think; do you want more of this, or it's worthless because this stuff is actually not things that you should be using in your day to day.

**Break:** \[17:44\]

**Kevin Ball:** Talking about maintainable codebases - let's just have a little bit more of a conversation about what makes for a maintainable codebase. I think not using JS Bleep comes to mind... \[laughter\]

**Ali Spittel:** This is a big one... It's really hard to write a 4,000-letter long Hello World.

**Kevin Ball:** That is kind of an interesting code obfuscation, and if you're trying to get something in that people aren't gonna understand, you could do something there...

**Ali Spittel:** Yeah, but for the most part, don't do it at home, folks.

**Kevin Ball:** Is there a way to go backwards from a JS Bleep to what it was trying to do?

**Ali Spittel:** I don't know if there's an interpreter for it... I mean, you could just execute the code, a console log on it, or like an eval to a string, and then console log, or something... That'd probably be how you'd have to do it.

**Kevin Ball:** So what else have y'all seen that makes for making a codebase maintainable? I feel like we all want a maintainable codebase, right? We all want something that is "Oh, this is gonna be easy to maintain, and it's not gonna keep blowing up on us. We're not gonna have the team slowing down because the codebase is hard to maintain", but what does that actually mean to you?

**Nick Nisi:** Well, there's some basic things that really used to be much more of a problem, but aren't really in today's world, and that's like code style. We used to maintain a manual code style document that was like "You should have a space after an if statement, but before the parentheses", and things like that. But we don't have that anymore in like a document style, we just have tools like Prettier, or some other formatter that just formats it for you. And as long as everyone's on board with that, then all the code looks the same, in a good way, and it makes it much more readable for everyone.

**Ali Spittel:** \[21:56\] Yeah, it saves you from having to have arguments within code reviews... Like, "Hey, I don't like this semicolon." "Okay, well, automate it; it doesn't matter, anybody. We have a guide for this."

**Nick Nisi:** \[laughs\] Yes.

**Kevin Ball:** Yeah, some of the choices - Prettier, or Black, or the Python Formatter, or all these different formatters, some of the choices are really weird. But it does stop the arguments.

**Ali Spittel:** Definitely.

**Nick Nisi:** And you can really use that as a tool. I write the most concise code... Like, on a single line I'll write things very quickly, and then I'll hit Save, and Prettier will format it for me. So I can use that as a shortcut to write code fast, and then it just get prettified as I go.

**Ali Spittel:** Yeah. That's what I do for sure as well. It's too much work to worry about indentation myself. I'll just have my editor do that for me.

I think another really important one for maintainable codebases is an appropriate level of abstraction. I think that sometimes you can go really heavy on abstraction and it makes it so that the codebase is impossible to navigate, especially for somebody joining that codebase; they just can't figure out where to find things. So if there's like 18 levels of inheritance, or something like that, that makes it very difficult to find "Hey, this is where this attribute is coming from, or this is where this method is."

But then also, on the inverse, if you are rewriting things over and over and over again, that also becomes impossible to maintain, because then you have to update things in 18 different places every single time that you wanna update something. So having a very appropriate level of abstraction is difficult to do, but I think it's one of the most important things for making it so that more people can contribute to a codebase, and that that codebase is able to live a long time.

**Kevin Ball:** So how would you define or measure, or what are the smells or whatever that say "This is the appropriate level of abstraction?"

**Ali Spittel:** That's a good question... I don't know if there's a set of finite rules that I would have, but I think one of the biggest things -- and I guess this is less relevant because object-oriented programming isn't as hot in JavaScript right now... But that is something that I saw all the time when I was a software engineer working on the backend, is that there would be so many levels of inheritance that it would just be impossible to figure out where things were coming from.

So having a set rule on your codebase, whether it's like three levels of inheritance, or two, or something like that, where you can have abstractions but you make it so that they're at least possible to navigate. I think that's important.

I also think that when you're cleaning up duplication, thinking about "Hey, is this something that's gonna be duplicated twice, or is this something that's gonna be duplicated 50 times? And if it's something that's just going to be duplicated twice, maybe - just maybe - think about like "Is this going to make the codebase more complex to abstract this? Or is it going to make it more readable?" I think thinking about those types of things is important.

Another smaller thing - and I used to read a lot of Sandi Metz earlier in my career, like obsess with her books... And I know that they're Ruby-oriented, but I think that they really do apply to any programmer. I've never really been a full-time Ruby person myself, so I've learned a ton from there... And I think another thing that she mentions is having relatively short classes, methods and functions... So having like a hundred lines as your length for a class - which, I think that those rules can be bent a little bit, depending on your individual codebase... But I do think that if you're going to a file of code and it has like 4,000 lines of code in it, that becomes very hard to navigate as well, and I do see that all the time still... These really, really long files, or these really, really long classes...

\[26:02\] And also, a function should do one thing and one thing well; if it's doing three different things, if the function should have an "and" in the name of it, that's another sign that it's going to be very difficult to figure out what that function is doing and to update it in the future.

So her rule is like five lines of code for a method or function... And I think that in a lot of cases that's a decent length as well. Maybe you could double that for your codebase, or something like that. But again, if you're getting to like 100-line functions, which - again, I've seen in production codebases it's sometimes like... It made me really think that it's going to be pretty hard to maintain that.

**Kevin Ball:** Totally. Well, and you've alluded to something that I think is good, which is - most of these rules should be rules of thumb, that occasionally you'll find a case where it's not appropriate, and you should not get in a fight over a six-line function just because five is your line. Maybe sometimes you actually need six lines. Especially like white space-sensitive languages like Python, or if your Prettier format in JavaScript extends how you're doing it - don't fight over that number. But it is a good rule of thumb.

I think this question of what's the right level of DRYness is really interesting...

**Ali Spittel:** Yes!

**Kevin Ball:** The industry was obsessed for a while about "DRY everything! DRY everything! DRY everything!" And I remember having a conversation a long time ago with Michael Chan (@chantastic) for the React podcast. We recorded an episode with him, and we were talking about - DRY code is dead code. It's code that's not changing. And that can be really good for something that's well understood, but if it's an actively changing part of your codebase... Or - it wasn't dead code, it was like brittle code. DRY code is brittle, in the sense that it's hard to change it, because lots of things depends on it behaving in a particular way. So it can be good to DRY things out when you've got something that has showed up as a pattern over and over again and you know "Okay, we're always wanting to do this in this particular way." But actively changing parts of your codebase should probably not be DRY, because you're still trying to understand like "Are they abstractable bits?"

What else makes for a maintainable codebase? Or maybe turning it around - what makes for a terrible, hard to maintain codebase?

**Ali Spittel:** Probably the inverse of what we've just talked about, for the most part... \[laughs\] I think another one that we haven't talked about yet is testing, and on both sides making sure that you have a system set up that you can catch errors, and make sure that adding one feature isn't breaking a bunch of other features, or even any features. That's really important to have.

Also, I think writing tests makes it so that you have to think about your code a little bit more as well, so I think that's another big value-add there. So that's another point of conversation, is testing.

**Nick Nisi:** Yeah. And testing the right things. Having a testing codebase that you trust, too. Like, if there's any -- like, we have occasionally some tests that are... I'm forgetting the word for them, but they intermittently fail in areas, and it makes us really skeptical about the code. And it might just be things that are just weird timeouts and things with the tests, but it causes distrust in the testing system, and it causes distrust when we go to change those things.

**Kevin Ball:** Mm-hm. I was gonna go in a similar direction, but talking about testing at the right levels of abstraction. Backend models, unit testing, really fine-grained unit testing can be really useful. For Vue components, testing the rendered state to me is usually -- like, unit tests are not the right level of abstraction there, because anytime you're changing your UI you just end up with additional churn, and you're not actually checking very much... And I ended up biasing much more for end-to-end tests to test my UI, and then if there's logic that's happening in the frontend, we can have unit tests for those. But the HTML that's getting rendered, in my experience, having tests in that reduces the maintainability of that code, because you just end up doubling the effort anytime you make a change.

**Nick Nisi:** \[30:13\] Let me ask you a question on that, Kball... When you say "end-to-end", what's the end and what's the other end? Is it like from this end of the component to that end of the component? Or from this end of --

**Kevin Ball:** No, a whole stack. So get a database booted up, render your application, use Selenium to drive through it as an actual browser, as a user would, build yourself utilities for logging in and getting yourself all in the right state... But testing the UI as a user, as it connects all the way back to your API.

**Nick Nisi:** Mm-hm. Now, that's a complex setup. Does that lead to issues, because it's harder to just spin up quickly? Maybe it is, I don't know.

**Kevin Ball:** Yeah, that's a good question. So we run end-to-end primarily in our CI tools, so it takes a long time. The end-to-end tests are the slowest part of our testing. And this actually kind of gets to another area here... So not just tests, but tests that run automatically; tests that don't require cognitive overhead, remembering to run them, doing something like that, but tests that run in a -- anytime you push a change and you're submitting a pull request, that all the tests pass and they catch things... I think it's a huge part of what makes for a maintainable codebase.

There's actually a whole realm we could talk about there in terms of practices... Like, having a general team practice of always having a clean trunk, or main branch that can be deployed, so that you reduce the cognitive overhead of "Wait, if I'm doing this change, do I have to check with these people, or check this thing before I can push it out and do things like that?" That's not necessarily anything in the code itself, it's a practice for how you keep the code, how you approach the code, and what qualifies as done... But it makes a huge difference in your sense of maintainability. Because now if an issue comes in and I wanna do a point fix and deploy it, I know I can.

**Nick Nisi:** Yeah. And kind of leading -- well, not really leading from that, but... Another similar thing is having tests run automatically is a really good thing, so having like a whole CI pipeline... But also just thinking about your review pipeline and how code reviews get done. We utilize a tool that GitHub provides called a Code Owners file, that lets you specify files or globs of files that are owned by a particular. So you can freely go change whatever files, but the Code Owners file will just automatically tag the appropriate people to be a reviewer on that pull request as it goes through, just to make sure that you have more domain-level experts looking at things before they're getting merged.

**Kevin Ball:** That's cool. I didn't know about that feature. I'll put a link in the show notes on that. I wanna look into that. Anything else that comes to mind, either on the "Absolutely you should be doing this", or "Absolutely you should not be doing this"?

I think one thing that helps in terms of maintainability - and kind of going in that tooling direction - is typed code. It makes a big difference in terms of maintainability...

**Nick Nisi:** It does.

**Kevin Ball:** ...because it has a whole class of issues that you can catch now at compile time without additional requirements from the user to think about it. I spent a lot of my career in loose typing, duck typing worlds, and there you have to be extremely thoughtful about how you write your unit tests to handle and catch classes of errors that the type checked will catch for you without you ever having to think about it. So it makes both writing new code, but especially refactoring code, changing code, just so much easier that it dramatically increases the maintainability of your codebase.

TypeScript is a great example, in Python there's Mypy... Even languages that don't have strong typing have abilities to add that level of protection at this point.

**Ali Spittel:** \[34:06\] I think one other thing that we have not mentioned so far is documentation. That's another important thing; you can actually hand off a project from one engineer to another, or have multiple engineers working on it, so that one doesn't have to mind-read for the previous person writing the code, like "Why were these decisions made?" Having decision documents when an architectural decision is being made... All those types of things help to set context for the next person, so the next person isn't just like "Let's rewrite this for the sake of rewriting this", or whatever. What was the context there? Why did people make those decisions?

There's a lot of different layers of documentations, from code comments to more centralized, true documentation for a project, to the decision and architectural documents from the beginning of the project. I think keeping all of those and making sure to surface them is another really important part.

**Kevin Ball:** Totally.

**Nick Nisi:** I was gonna say, kind of towards the using types - which is another form of documentation really... But using code generation whenever possible, specifically for things like - don't be manually typing out the responses that you get from your server, or your database, or whatever. Have those be automatically generated. And there's great tools that can do it from GraphQL, or from REST schemas, and just generate them automatically, so that they're always 100% correct, and then you don't have any ambiguity or incorrect types that you're working off of.

**Kevin Ball:** Totally. Going in on the documentation a little bit, which I love that you brought that up, Ali... I think one of the things that I've seen be challenging, especially for newer developers, is to know the right level of documentation and commenting to put in.

**Ali Spittel:** Yeah.

**Kevin Ball:** A rule of thumb that I've heard that I really like is if you're commenting in a file, within a function or something like that, comments should always be a different level of abstraction than the code. So either a higher level of abstraction, communicating the why behind this, why would you use this function, why would you do this, or a lower level of abstraction, where it's like "Okay, here's the details of why this algorithm works."

I think a lot of more novice developers or folks who haven't thought about it deeply will comment at the same level as their code. "I'm going to change this thing to this thing." And the code should already do that.

**Ali Spittel:** It should document itself, yeah.

**Kevin Ball:** Yeah. It should document itself there. Where the additional commenting is really helpful is that additional context that's at a slightly different layer of abstraction.

**Ali Spittel:** For sure. The comments should be the why, not the what.

**Kevin Ball:** Mm-hm. Have you encountered other good guidelines for the right level of abstraction to do in design decision documents, or the other types of documentation that you brought up?

**Ali Spittel:** I don't know if I have direct rules for them by any means, but I think that having those is important. I've worked at a lot of early-stage startups and those things just do not exist whatsoever. And then working at a bigger company, having to do reviews before any code is written, of "Here's the plans, here's what we're gonna do, here are the thoughts behind this, here's why these decisions were made" - I think that that's incredibly important, because I've seen so many times where its' like "Okay, we've got this Python codebase; let's now rewrite it in Ruby because that person who was writing Ruby before, or the person who was writing Python left the team, and we don't understand why they've decided to do it this way... So let's just start from scratch." It's just not productive. So having to think through those things, justify them to other people, so that if people disagree, they can disagree then, rather than after the codebase is written. I think that that's so important.

\[37:45\] Also, just having to justify your decisions is such an important part of being an engineer... But then the documentation point, for maybe like an API, or something like that, having it laid out like "Here's how to use this", you don't just have to guess, you don't just have to dive into the code in order to figure out how to use your API or documentation to explain how the codebase is organized. That's another huge one, so that more people can jump into it and they don't have to spend a week trying to figure out where the class for this is... I think that all those are things that really help out.

**Kevin Ball:** Totally. Something you were saying reminded me... I was having a conversation like this on what belongs in a design doc, and a couple of things that I have been thinking about and trying to advocate to folks as well are the things you consider that you chose not to do... Because I think a lot of times we forget the negative space; we talk a lot about where we landed and our final thing, but we don't talk about what we ruled out and why.

And then the other thing that I think is really helpful if you can do it - it's hard, but if you can lay out what would make it worth reconsidering this decision. Like, what types of changes, new information or new tools or new things would make it worth reconsidering this decision. Because I think some of the resistance to design docs is the world is dynamic, things are changing. It might actually be different, but you want the design docs so that you're not always relitigating this.

**Ali Spittel:** Yeah.

**Kevin Ball:** If somebody is coming in and saying "Did you think about this? Did you think about this?" you can say "Yes, look in the design docs. You can see all the things we thought about." But there is sometimes that question of like "Here's something I didn't think of. Here's the thing." So if you can sort of flesh out "These are the types of things that would cause this decision to not be right anymore..." That can be super-helpful.

**Ali Spittel:** Yeah, definitely. Super-important. And having a review meeting about that design doc I think is so important too, so that people can poke holes in it before the decisions are actually fully made and can't be reversed.

**Break:** \[39:50\]

**Kevin Ball:** So we wanted to talk a little bit about the current moment in tech, because it feels like if you're on Twitter, or if you're watching things, the zeitgeist has shifted within like weeks from "This is the hottest market for engineers in history! You have dozens of job offers", and if you're hiring you just can't find people, to "Oh, no! Everything is stopping!" In like weeks it has gone there.

And Y Combinator put this memo out about like "Plan for the worst! Try to do all these things", and Sequoia has a deck, and all of these different things... So I thought it might be worth us just sort of talking about what's actually going on - what's causing this, is it as bad as people are saying, and what should people do about this.

I have lots of thoughts, because it's been top-front of my mind, but I'm very curious what y'all have seen, and heard, and how you're thinking about this.

**Nick Nisi:** I'd be lying if I said it didn't cause extra anxiety just thinking about it a little bit... It's been on my mind, because you're right, it did just go from "You can leave and get 30% to 50% just by hopping companies" to "Maybe I won't have a job next week." And I don't think that's the case for me, but it does seem like just the tides are shifting.

But at the same time, is there a delineation that can be made between some of the more venture-backed startup companies, versus more established companies? Because at the same time, we've seen articles about Microsoft doubling their compensation budgets for the next year.

**Ali Spittel:** Yeah, I think it's unreal how fast this has turned. The economy in general has clearly shifted with the response to inflation, and then also the shift in the markets as well... I think that a lot of software engineers, a lot of our compensation is based on the company's stock, and so that has dramatically decreased for a lot of people over the past few months as well... So even if you're at your current job, you're probably still affected, even if you haven't been laid off, so I think it's a really interesting economic moment of "Will this be a recession?", which is a very scary thought, I think, for a lot of us... Or is this just a momentary thing? Is it just that things are shifting and we're kind of correcting for the fact that a lot of these companies boomed really fast due to the changes in our lives, due to the pandemic.

\[44:24\] I think that we'll have to see, I don't think that anybody knows... People who work in finance have predictions, but I think it's a really hard thing to predict, and there's lots of conflicting predictions out there... But it's a tough time, and it's really wild how fast it shifted from, like, you've gotta leave your job, you've gotta get a new job while everything's hot... Software engineers are getting paid a bagillion dollars a year, and now everybody needs to take advantage -- I'm sure that everybody saw the rumors on social media about Web 3, and how much people were making in that realm... I mean, that crashed overnight as well. So it's a really, really crazy time, both for us in tech, but also I think outside of it as well.

**Kevin Ball:** Yeah. Well, one of the interesting things is there's a lot of companies that are doing lay-offs. There's this layoffs.fyi site that is just tracking what layoffs are happening in tech, and there are quite a few.

There's also a lot of companies that are still hiring. I saw this Twitter thread that was talking about how basically somebody was at a CTO forum and half of the people were like "Oh, I'm worried we're gonna do layoffs" and half of the people were like "Oh my gosh, I can finally hit my hiring goals! This will be great!" So it definitely seems like there's stuff going on, but there's also companies -- it's not universal; it's not something where every tech company all of a sudden is laying people off or stopping hiring.

At my company we're still hiring. We are looking at potentially shifting some of our later in the year hiring targets, because we were planning to continue hiring very rapidly... But short-term we're still hiring tons of folks. We're small, but we had new engineers start this week, I have new engineers starting in two weeks... My team is growing.

**Ali Spittel:** Yeah. At AWS we're still hiring like crazy as well. I can't find enough engineers still, so... That's one side of it.

**Kevin Ball:** Yeah. The sky is not falling everywhere.

**Ali Spittel:** Yeah.

**Kevin Ball:** So I was trying to think about what are the actual dynamics here, and I feel like there's a couple of things going on, and they're all kind of hitting at the same time. So one is, as you highlighted, there's a set of companies that grew really fast all of a sudden because of the pandemic, and perhaps grew based on the assumption that this was going to change things forever... And then it's looking like it's not going to change things forever. So things like food delivery companies, and teleconferencing companies, and eCommerce companies - all of these had a massive change all of a sudden from the pandemic, and hired massively, and a lot of them are doing layoffs now. I mean, the pandemic is still ongoing, there's a ton of Covid out there, but also a lot of people are kind of over it and they're going back to work in-person, and they're eating out, and all these other things. So the demand has not stayed elevated in the same way.

**Ali Spittel:** Traveling and conferences, too.

**Kevin Ball:** Traveling is starting, conferences are starting...

**Ali Spittel:** Yeah.

**Kevin Ball:** So I think that's one dynamic, and I don't know - are there other categories of things that fit in there, that people if they're working in that space should be worried about?

**Ali Spittel:** I'm not sure. I think that one that we've seen already is eCommerce get hit really bad, and growth tech more generally... Just watching my portfolio of stocks, seeing Shopify going way down, and other companies in that kind of same realm; I've seen a lot of that.

And then I think the other really big one is crypto. We've seen that that was just soaring this winter, and everybody's like "You've gotta get in, you've gotta work for it while you can. You've gotta get in on this. It's gonna be worth 85x in a year" or whatever. And then it's really crashed.

\[48:10\] I'm not sure what the job situation looks like in that realm right now, but I think that that's another industry that's probably really struggling right now.

**Kevin Ball:** Yeah, I feel like crypto is kind of a particular case of a broader thing, which is like companies that were very dependent on how much capital was sloshing around. I'm a very crypto-skeptic among other things, and whether you're a crypto-skeptic or crypto-positive, I think you probably agree that a huge amount of the money flowing into crypto was just capital trying to find returns, capital flowing around, because we had very loose capital... And that has started to end. There's all sorts of capital tightening that is happening, and I think that's hitting crypto, I think that's likely to hit real estate, and real estate sales are already slowing, but I think companies that are serving the real estate market may end up getting hit there...

And anyone else who's depending on there being really cheap capital, because we've gone from an era of cheap capital to an era where capital is getting more expensive. That's also very cyclic, because VCs are -- you'd think that VCs are risk-tolerant, but VCs are the most risk-averse people in so many ways. So they're like "Oh, things are tightening. I've gotta tighten, too." So all of these open spigots of money are shutting down. So anyone who's dependent on that really cheap available capital - they're running into challenges. Who's not hit? You've mentioned AWS is not hit too much...

**Ali Spittel:** At least not yet. We're still hiring like crazy right now. If anybody is looking, feel free to reach out. I can definitely set you up there. But I don't know, so far being at a bigger company, I've felt a little bit isolated from it personally... But that's just been my experience so far.

**Nick Nisi:** It seems like the more established companies - meaning like they have means of revenue - they're less affected by it, at least right now... But who knows how that could change.

**Ali Spittel:** Yeah, companies that are profitable probably are a little bit safer as well, because they're not reliant on just funding; they can actually make the money themselves as well.

**Kevin Ball:** Yeah. We have heard things about hiring freezes at some of the bigger tech companies

**Ali Spittel:** Yeah...

**Kevin Ball:** Let's see... I know Meta had one. Did Google as well? I'm not sure.

**Ali Spittel:** I don't think Google, but I think Twitter...

**Kevin Ball:** Twitter...

**Ali Spittel:** Which I guess is less big, but...

**Nick Nisi:** That makes sense though.

**Ali Spittel:** Weird in the middle there.

**Nick Nisi:** And Meta - they're betting everything on something that's not gonna be ready for years, so... It makes sense there, too.

**Ali Spittel:** It seems like social media in general might be a little bit impacted, which I think goes along with what we've been saying, is that social media grew a lot during the pandemic, because people were stuck online; they couldn't see people in person. So it makes sense that they might be declining or shrinking a little bit due to the change in people's lifestyles.

**Kevin Ball:** Totally. They're also very ad-focused, and so depending on where their advertising money is coming from...

**Ali Spittel:** Yeah.

**Kevin Ball:** I don't know how many of our listeners remember back to the '01 crash, but a huge amount of that crash was because all the ad-focused tech companies - their revenue was being propped up by other tech companies, and so some of them started, and then that cut everybody's revenue all at once. Tech has diversified massively since then, but I wouldn't be surprised if for example a lot of Facebook's ad revenue was from other companies that had grown massively during the pandemic and are cutting back. That may -- depending on who's advertising on your channel, anyone who's ad-focused may get that kind of knock-on effect.

We're hiring as well. We're much smaller than AWS, but if you're interesting in working at a small company, you can hit me up. I know there's lots of folks out there still hiring.

So I think coming back to what should an individual do if you're concerned about this, which - you know, it's fair to be concerned. I think there are going to be a lot of people impacted. So Nick and Ali, what would your recommendations be for people who are maybe feeling a little bit uncertain?

**Ali Spittel:** \[52:19\] I think my first piece of advice is that if you're already employed somewhere, it's probably a pretty good time to stay there, and not to job-hop for the most part, I think for the reason that at a lot of companies layoffs are first in/first out -- or last in/first out, I guess... So if you were recently hired, you probably have a better probability of being one of the first people laid off. So I would suggest if you've been somewhere, that it's probably a pretty good time to sit tight... But if you were laid off, to definitely reach out to your network; a lot of more tech things are happening right now, so make sure to solidify that. It's still a good time to learn new skills and make sure that you're keeping on top of the industry. So that would be my basic advice.

**Nick Nisi:** Yeah. I was gonna say kind of the same thing... Don't assume too much of a safety net, ever. You can pretty much be let go at any time, for any reason, in this country at least. And it's always best to be a little selfish on that, like looking out for yourself and kind of preparing... Or having like a basic preparation; you don't have to be ready to walk out the door at a moment's notice, but keep your tech skills up, keep your interviewing skills up, and you can still be on the lookout for those opportunities, because they usually stick around for a while... So you know, like, "Something happens, this is where I'm gonna go immediately." And your network is a great first place to start.

**Kevin Ball:** You talked about keeping your tech skills up - you can keep your network warm, too. Reach out to folks, even though you're not looking, and re-open conversations. "How are you doing? How is it where you're working? Are you all still hiring? Oh, okay, cool." So then you know if something happens and suddenly you need to find something, they've already got you in mind, you've sussed out where there are maybe opportunities, and it's really fast.

Now, I'm very network-driven, but I've been in the industry for almost 20 years at this point. What about folks who are new to the industry? What can they do to survive and hopefully even thrive in this moment?

**Ali Spittel:** Well, I think the same is true, that networking -- even if that network is new, it's so important. And if you can build that network when you don't need anything from them, that's how you're going to build the most authentic network that's going to be there when you do need something. And make sure that the relationship is mutual as well, that you're giving in some way, not just taking.

For a lot of people though, giving you a job at their company is really great for them as well. So I'm not saying to not ask for that, or anything like that. But if you're just constantly asking people code questions, or "Hey, can you do this for me, can you do this for me, can you do this for me?" it makes it feel like it's a one-directional, para-social type relationship; so make sure that it's mutual, and that you have things that you're conversing about, that you're checking in on them, seeing how you can help them as well. That's one big thing.

Events are happening, so if you're comfortable going to those, it's a great time to do that. But you can also network a ton online, too. The best way I've found is to learn in public. Write blog posts about what you're learning. You don't have to be like a 10x expert in the industry for 50 years in order to write a good blog post. You can have learned something a couple weeks ago and still be able to teach something pretty well to people. I have found that that works really well for people trying to look for jobs, is to just teach somebody else something, and give back to the community... Because you're proving your skills, and you're also getting yourself out there. So that's my biggest piece of advice, I think.

**Kevin Ball:** Nick, anything from you? I mean, Ali, you kind of nailed it along a number of dimensions...

**Nick Nisi:** \[56:00\] Yeah, I really like that... Just kind of reiterating -- like, there's always people that know more than you, and there's always people that know less than you. And your insight into how you learn things, or just sharing what you have learned is always valuable. Somebody will find it valuable.

**Ali Spittel:** Definitely. And I think we don't talk about portfolios as much anymore, but I think that's still a really great way to display your skills, especially if you're a newbie, showing that you have built X app, and then explain your process for building it, and what technology you used, why you decided to do things X and Y way. That's going to go really far, and also actually really prepare you for interviews too, because that's going to be \[unintelligible 00:56:41.17\] like the trade-offs and all that. So that's another thing that you can do if you're unemployed and trying to become employed.

**Kevin Ball:** One other thing that I'm gonna put out there for folks is if you have time, getting involved with an open source project is another useful way to network and also build a track record... Because a lot of the challenge in hiring folks who are newer to the industry - and I speak this now as a hiring manager - is there's no track record. I have no idea looking at your resume if you are just out of school, or just out of bootcamp, or whatever. I have no idea if you're one of the bootcamp grads who's gonna be amazing or one of the bootcamp grads who still doesn't know anything about code. And we can try to figure that out, but a lot of companies won't bother. A lot of companies will look and they'll say "Eh, not worth our time."

I can tell you, we're right now - it's hard to filter through bootcamp grads. We've got hundreds of bootcamp grads applying, and it takes a lot of time and energy. And we care a lot, so we're figuring out "How do we work through this?", but it is really hard, and a lot of companies will just say "No. You know what - if you don't have any track record, I'm not even gonna bother talking with you." So looking for ways to manufacture that track record, and one way you can do that is getting involved with open source. And if you can show a history of contribution to a project, that is a track record. The people who are on that project are going to know of you, they become a \[unintelligible 00:58:08.15\] a set of people. So I hesitate to point everyone there, because it does take a time commitment, and not everyone has the ability to put that time in. But if you do, that can be a great way to hack around that lack of track record.

**Nick Nisi:** Another thing that's very related to that, that helped me early on in my career is getting involved with the local dev community. I'm in Omaha, it's not a huge community, but there's some very niche people that I got to know, and I got several offers and accepted a few, just from word of mouth, or we knew each other from going to the Perl meetup, or things like that. Just getting involved early on really helped my career tremendously. It's harder now to give that advice, I think, in a pandemic/post-pandemic world, where those things exist or don't anymore...

**Ali Spittel:** Yeah. I think a lot of them are coming back, but even the ones that aren't, there's still virtual events. Or you can use social media in that same kind of way that we used in-person events back in the day.

**Nick Nisi:** For sure.

**Ali Spittel:** I will also say that as a fellow hiring manager, a lot of times if you can build some sort of relationship with those hiring managers, that tends to help out a little bit as well. So if you can -- it just all goes back to networking; building up that strong network and making relationships. I saw this so much - I used to teach at a coding bootcamp and I also used to hire a lot of juniors, of this kind of like spray technique for applying to jobs, of just submitting a resume every single place you could, and applying for every single job on LinkedIn... And in a lot of cases, those types of jobs get thousands of applicants, so it's impossible to get to the top of that pile of resumes if you don't have some sort of knowledge of somebody at the company, or some sort of personal outreach, or something along those lines.

So if you can find "Hey, this is the hiring manager for the role", and you write them an email about how I'm qualified for it or whatever, I think things like that can go a long way too, because you can get really lost in that sea of applicants. Or if you've met them at a meetup, or something along those lines, that goes a long way, too.

**Kevin Ball:** Totally. In the end, we are still human, and...

**Ali Spittel:** Yes.

**Kevin Ball:** ...reaching out as a human makes a big difference. Awesome. Well, any last things y'all wanna leave folks with, or should we call this a wrap?

**Ali Spittel:** I think we're probably pretty good.

**Kevin Ball:** Amazing. Alright, well, thank you, everyone, for joining us for this JS Party, for the inaugural WTF, JS, for a discussion about maintainable codebases, and a look at this moment in technology.

We'll catch you all next week. If you're listening and you wanna join us live, you can always join us live on Thursdays at 10 AM Pacific, 1 o'clock Eastern, and who knows what it is in Omaha... But \[unintelligible 01:01:07.16\] Alright, take it easy, y'all.
