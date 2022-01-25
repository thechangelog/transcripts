**Natalie Pistunovich:** Isn't that symbolic, that at the episode about AI we will have some issues with tech and computers and so on? ...just to remind who really is the boss... So today we promised you two hosts, but it's actually a one-on-one conversation, and I'm very excited to invite and introduce my guest today, Alexey Palazhchenko, who has been a Go user for a long time.

He is one of the organizers of the Russian Go community meetups and GopherCon Russia, and he even started the Go podcast called Golang Show in the past, before Go Time. Maybe you can tell us where does that live these days, or why not continue...?

**Alexey Palazhchenko:** It's hard for me to say, we basically just -- everyone moved on. Several people changed work, several people changed phase, it becomes scattered

**Natalie Pistunovich:** They changed their programming language...

**Alexey Palazhchenko:** No, most of them not. But a few of them moved to management, so...

**Natalie Pistunovich:** Okay. That technically is changing your programming language, right? You basically start programming in JIRA...

**Alexey Palazhchenko:** Yeah, and email up... \[laughter\] It's a funny thing that Go Time was originally called Go Show, but we asked the organizers to change the name, because otherwise it would be too close.

**Natalie Pistunovich:** \[laughs\] Interesting. I actually did not know that. That's fun.

**Alexey Palazhchenko:** Yeah.

**Natalie Pistunovich:** Well, these days you work for all two weeks as a CTO of FerretDB project, originally announced as MangoDB, as many people in the community loved, including myself... And we're even excited to have you in January talk about MangoDB at the Go Usergroup of Berlin.

**Alexey Palazhchenko:** Yeah. But I will be talking about FerretDB, because if I continue to use this name, MangoDB, we will be sued by MongoDB.

**Natalie Pistunovich:** I'm sorry...

**Alexey Palazhchenko:** \[04:07\] They don't like that we use a name too close to the trademark.

**Natalie Pistunovich:** That is fair, that is fair. How did you choose FerretDB?

**Alexey Palazhchenko:** Well, so we had a list of possible names, and we also had 20 different names of different bungus, but in the end we decided to use Ferret. As a fun, we say that it doesn't share a single letter with Mango, so no chance to sue us, at all. We shall be fine.

**Natalie Pistunovich:** \[laughs\] That is an interesting turn of events, I guess... So Alexey, how did you start using Go?

**Alexey Palazhchenko:** Yeah, so the funniest story is that I actually started using Go back at Microsoft; that was way before Microsoft was cool again. Many years ago I worked in a small startup called Qik, which was doing video calls. That was before FaceTime. Then when FaceTime was announced, everyone wanted FaceTime on their phone, but it was exclusive to iPhones, and then all Android developers, carriers in the United States came to us and they wanted to bring them video calls.

Then a year and a half later we were bought by Skype, and our small startup, which was like 50 people, started being integrated into Skype, which was 1,000 back at that time... And we were aligning the roadmaps, trying to understand what we'll build together, and several months later Skype was bought by Microsoft, and the whole process started again.

**Natalie Pistunovich:** You completed a circle. \[laughs\]

**Alexey Palazhchenko:** They started to align their roadmaps, and they basically forgot about us. This was a strange satellite office somewhere in Moscow; no one knew what they were doing at all. So at some point we had no work to do. We were still going to office, we were getting paid, but we didn't have any real work, just some maintain stuff. That was weird.

**Natalie Pistunovich:** And as a real developer, you had to complain when you had nothing to program.

**Alexey Palazhchenko:** Yeah. But again, that was Microsoft. We don't even know where to complain.

**Natalie Pistunovich:** \[laughs\] It makes sense.

**Alexey Palazhchenko:** For example, we did not receive new computers and we were using Macs, but you can't access Microsoft resources with Macs, for example, back then.

**Natalie Pistunovich:** Okay... \[laughs\]

**Alexey Palazhchenko:** Okay, so we decided to spend this time to sharpen our skills, trying something new... So we decided to make a multiplayer game of Go, of this board game... So we made one part of the settle in Erlang language, and we started working on a mobile client in C\#... And then I wrote the backend part that manages GNU Go program in Go. And that was release 60; that was after the early releases but before the 1.0 release... so it was like, I recently dig up this old code it's quite different, it had semicolons everywhere and also it had os error type instead of built-in error type... But still, \[07:18\] it still builds and runs today.

When I had a chance, I left Microsoft; basically, when my options waisted I started my own company, and we started using Go. That was Go 1.0 already.

**Natalie Pistunovich:** Wow.

**Alexey Palazhchenko:** And then left that company... And basically - yes, doing Go signs are 16 for fun and in-production signs, 16.0. So a long time ago.

**Natalie Pistunovich:** Okay. Wow. That is a funny turn of events. So did you choose to write the backend in Go because it was the Go game, or because you actually read about it somewhere?

**Alexey Palazhchenko:** It was completely random. I mean, I read about Go back when it was announced; back then I had just switched from C++ to Ruby language. I made the jump.

**Natalie Pistunovich:** That is a jump, for sure.

**Alexey Palazhchenko:** \[08:13\] Yeah. Then Go was completely random, but I actually liked it a lot. So I was programming in C++, and Ruby, and Python... and in pipe I was writing mostly with twisted framework with all those callbacks, and I immediately liked goroutines, and also the fact that the language is compiled, but it compiles very quickly as a static banner all the usual stuff. And - yeah, I never looked back since then.

**Natalie Pistunovich:** Interesting. Okay... So we're here to talk about AI-driven development. So when we say that, AI-driven development, what do you envision? What would development with AI be looking like in the future?

**Alexey Palazhchenko:** Yes, that would be something futuristic... You know, this dream of you having isolated compliance and you just draw arrows between then and the AI builds everything for you, you just have to -- you can just draw diagrams on the whiteboard and all the magic appears. I don't think we'll ever reach that goal, to be honest...

Actually, I would say that for me, the best solution would be something what GitHub Copilot already provides, maybe with a different interface. But the whole idea is that you have another someone, or something, in that case looking over code, suggesting and giving you tips. Basically, advanced ED but with some smarts about it. And yeah, I would say that the representation could be a bit different, but the whole idea I think has a future.

**Natalie Pistunovich:** When you were saying that drawing on the walls with the diagrams and then it completes for you, I was thinking of how when you type to some translator tool like DeepL that it automatically translates on the go. Just imagine, you're writing some arrows and it already writes the code and changes on the go. That would be very not efficient.

**Alexey Palazhchenko:** Yes. But also, that would be very fun.

**Natalie Pistunovich:** \[laughs\] Change all the code. It will be like in the Matrix; this is why the code is just running very fast on the screen, because it keeps changing.

**Alexey Palazhchenko:** Well, maybe that's why they made a new movie.

**Natalie Pistunovich:** That makes sense. All the dots are connecting... Yeah, so you say that you envision AI-driven development as something that is like an augmentation to the IDE, pretty much?

**Alexey Palazhchenko:** Yeah, I would say that's a good way to describe it.

**Natalie Pistunovich:** So the IDE handles things like your code, but it also handles your configurations, right? And AI is good in generating code, and it seems like it makes a lot of sense when it does that, but in configuration files whenever it does that it's usually like -- it generates a correct SSH key format-wise, but obviously, it doesn't generate the correct SSH key for you, or even like a valid one. Will it be augmenting things like not code, but still IDE?

**Alexey Palazhchenko:** Yeah, so \[unintelligible 00:11:00.01\] may think that we are joking but that's actually a term that Copilot can do that; it can generate an SSH key for you. Unfortunately, most likely it will be able to be used by someone else, but maybe that would be a feature for you.

**Natalie Pistunovich:** \[laughs\] An easy way to hack into somebody else's code.

**Alexey Palazhchenko:** Yeah. You just don't know who you're going to hack, but you're going to hack anyway. You know, maybe that Copilot discovers look for a security hold it will bascially try anything that sticks, and now we have it.

**Natalie Pistunovich:** Just throwing code at the AI.

**Alexey Palazhchenko:** Yeah, yeah. So yeah, it works great for Go, but also it works great for many other places, for example, forgive me, Sometimes Copilot writes better even than I do, even with augmentation of something like Grammarly, for example.

**Natalie Pistunovich:** Yeah. I guess it is based on a natural language engine, right? So that's an interesting point that you pointed out, actually. I didn't to write any readme with it, but that makes a lot of sense.

**Alexey Palazhchenko:** Just recently I was writing a Docker Compose file... It also made a lot of sense.

**Natalie Pistunovich:** Yeah.

**Alexey Palazhchenko:** \[12:09\] So essentially, it can write the whole project for you. There is a very fun video on YouTube where the guys writes a game in six minutes using Copilot. It's basically a game where you pick a random number, and whoever chooses a number closer to the random number wins. And it just works. He types much less than he presses stop to complete the sentence. It's just crazy. And yeah, I envision that in the future it can also write readme for your code, write Docker Compose, Kubernetes manifests, all that. Actually, I should try that with Kubernetes manifests. That would be fun to try.

**Natalie Pistunovich:** It does work well, from my experience. So what would you say the current state of AI-driven development these days -- do you know of people who are already using it at their job, or for fun? I guess for fun we know some, but for personal projects that are more than tab-tab-tab?

**Alexey Palazhchenko:** Yeah, so I actually use it for work now, and it's kind of scary sometimes. Again, the project that I'm working on right now - we have this problem of MongoDB being quite aggressive with their license... So we should be very careful not to touch the SSPL license code. When I write some handler for data command I just write a comment and write a header and then it completes the code that looks like something very similar to what I want to write... But I also don't have just tokens like that in my code yet. For example, in MongoDB if you want to set some field, you set this $set field attribute. And I never had this field in my code yet... So it looks like it copied this code from some other code, and I'm pretty sure that other code would be SSPL-licensed. So that's a major concern for me, I would say.

**Natalie Pistunovich:** Interesting.

**Alexey Palazhchenko:** In the same time, in that particular case I actually went and tried to search this code, and I did not find it. So maybe it actually this code knowing that I am working with MongoDB, and pulling in some other code, maybe from some other languages. I don't know.

So that kind of thing kind of scares me... If you work in open source, you have to be very, very careful about licensing. That could be a problem for you. But in most other cases, that's just a miracle.

**Natalie Pistunovich:** Yeah, that is an interesting point that you're bringing. I'd never thought of it until now... When you use AI to help you write code, you actually have to add one more test to everything that you are allowed to use the code that it generated... Like, when you search, that this code does not exist somewhere. That is actually something that we might all be adding to our future checklists as developers.

**Alexey Palazhchenko:** Yeah. So actually, after that happened, I did some research what other people think. Yeah, a lot of people think that GitHub Copilot is basically a code laundering machine, because they publicly say that they teach the code on all the public code, not caring about the license. So I can assume that all public code includes some code you can't -- for example, GPL code. If you use a permissive license, you don't want to touch GPL code, but you don't know. The same thing - it would be hard to say "Okay, this code is copied verbatim", because basically almost nothing is copied verbatim... And then that would be for a judge to decide whether it was copied or not, we don't even know from the philosophical standpoint which should be considered copyable but not from a legal perspective.

So I would say that by the time we have some precedents and we actually know whether it was legal or not, our judges will be AI tools. So that would be an AI judging an AI.

**Natalie Pistunovich:** Maybe they will be the robots.

**Alexey Palazhchenko:** Yeah...

**Natalie Pistunovich:** \[15:59\] One of the interesting arguments in the conversation about AI writing code is that it's trained on open source code, and not all open source code, especially the one that is -- I mean, maybe it's even safe to say that most of the open source code is fun projects of people; it's not actually functioning things that are used in production somewhere. Because a lot of the production code is closed source, so it was not trained for GitHub, but it was actually peer-reviewer. And a lot of the open source code is just code something, learn to code, put it out there, and now Copilot got trained on my bad code, and the first time that I was learning Elixir, or something. And now it saw that, and found that this is an example of how you need to write Elixir code. So kind of how good is this auto-generated code.

On the level of "Did it learn from a good example or from a bad example?", because GitHub code is not labeled with "good repo", "bad repo". And also, even if the language is written correctly. Does it have good safety practices? Is the code that is out there secure or not? So you have to look out for so many things when you are choosing whether to accept AI-proposed code into your codebase or not.

**Alexey Palazhchenko:** Yeah, but at the same time, how do you know if the code you want to look on GitHub as you, as a human or whatever, is good or not? Let's say you want a new go developer you join a community and you want to say "Okay, how you organize my Go code." You google it and find this famous Go standard layout. Is it good? Is it not?

**Natalie Pistunovich:** I guess if it has some people thumbing it up, or even commenting... If it's active enough, it means enough people don't think it's bad.

**Alexey Palazhchenko:** Yeah, maybe. But maybe all those people's AI is too -- maybe it just found it, and started it, and then more people are coming and will start it... But the very first people did not know that it's maybe not good.

**Natalie Pistunovich:** Just skipped it for later...

**Alexey Palazhchenko:** Yeah. So I would say it's always for the human to decide, and I wonder how this would affect the coding styles of a human for example. It may be very different from what language designers expected it to be.

**Natalie Pistunovich:** Yeah. This brings me to the question if Go would be a good choice for AI-driven development, for the style of the language. What do you think?

**Alexey Palazhchenko:** Yes, all this power of go fmt, and you have the same standard for all the Go code - that seems to be very easy for Copilot to understand Go code. And I would say maybe Go is the single best language for that. I don't know another language that has this simple code structure, this regular structure with the same formatting. I can't imagine Copilot for something like C++, for example... Especially modern C++. That would be a hot mess. Because yeah, especially given that Copilot just grabs all the C++ code from GitHub, and then half of that is written 20 years ago, with a very different standard... That's basically a different language at this point.

**Natalie Pistunovich:** Yeah, that's actually another interesting point, that is AI code trained on up to date code, that is made for our machines, and not for the past machines.

**Alexey Palazhchenko:** Yeah. Can you imagine Go with generics generated by Copilot?

**Natalie Pistunovich:** Maybe we will have to... \[laughter\] Eventually we'll have to imagine how that works, yeah.

**Break:** \[19:32\]

**Natalie Pistunovich:** I've been trying to do the Advent of Code on different programming languages with using Codex, which is the underlying engine of Copilot. So basically, Copilot is kind of you take whatever you have in your IDE, and then you add the prompt to that, so kind of like the secret sauce, and then you send that to the end point of Codex. And what I was trying to do, and gave up in the middle because it didn't work at all, is trying to do the same with the different languages. And just finding the right context for some of the languages that are not supported as well, like Java, for example... Finding a standard highest header was a big deal. All Go programs will start with package main import. Not many languages have this standard thing, for Java or for C.

For C, for example, you'll probably start with an import, but maybe not... Not all languages have such a signature, if you will, to also help the AI generate, or even understand what language you wanted to use. I guess that's another big benefit of Go, in addition to having this standard formatting, that it always has the same beginning. So I agree with you that I also find Go to be a good choice for this reason.

Last week was GopherCon, and there were some conversations around that, and one of the points that I made in a talk about that was that Go will not land you in the uncanny valley of code. That graph that makes you feel awkward about robots, and the one that can make you feel awkward about code. Because if it looks like it's computer-generated, it's like a weird robot. But if it looks like Go code that everybody else wrote, you're probably gonna feel comfortable with it.

**Alexey Palazhchenko:** Well, I would say that generated Go code sometimes looks like uncanny valley. So it kind of makes sense, but it also kind of doesn't, and it looks very weird... Look at it careful and it doesn't even compile. It doesn't work. But it looks like it almost does what you need it to do.

This video has a great example when the guy was making a game where you should guess the number, and the one who chooses the closest number wins. But Copilot always steered him to the game of "You have to choose the correct number exactly." So it basically tried to redefine the rules of the game. That was quite strange to see.

**Natalie Pistunovich:** Interesting. So was it doing that instructions via comments, like the documentation of the function, or...?

**Alexey Palazhchenko:** Yeah, yeah. He basically wrote the first line of comment, and then Copilot suggested even comments for that, and then code.

**Natalie Pistunovich:** And what is your experience of using Copilot with other languages that are not Go?

**Alexey Palazhchenko:** So the second-best language Copilot works for me is actually English... As I mentioned, readme generation is just great. And comments -- yeah, sometimes it writes better comments for my code than I would do.

And you know, they have this new feature in beta when they allow you to describe the code as English. For example, you have a snippet of code, and -- yeah, most importantly, it works with regular expressions. It translates regular expressions to plain English. That's just great for people who don't know regular expressions. Basically you understand the jargon after that it just explains it in plain English. That's great.

**Natalie Pistunovich:** Would you say it works great in both ways? Regex to English and English to regex?

**Alexey Palazhchenko:** Yeah, I did not try that. It would be interesting. Actually, the problem there - it's not an algorithm; it's just machine learning. And maybe it's not even correct. That would be also interesting, to check if that's correct. Yeah, I tried that with Python. I mean, it still works, but in my opinion the Go snippets are better overall in code.

**Natalie Pistunovich:** \[24:17\] I tried writing some Bash scripts with it and that was also successful in doing what it was supposed to do. I guess Bash is similar to Go in that sense, that it's a kind of one way of doing things.

**Alexey Palazhchenko:** Yeah, maybe just my way of writing Python is outdated. The last instruction I was using was using Python 2 when I switched to Go. So maybe Python 3 is very different.

**Natalie Pistunovich:** I imagine Python has multiple ways of doing things, so you cannot just set a one-one. And what languages did you get to try that were not really a good choice?

**Alexey Palazhchenko:** Actually, I don't think I tried a lot of languages. At my current job I use Yaml. Yaml works great; English works great. I used configuration file, JSON works great. Everything was pretty much great for me.

**Natalie Pistunovich:** Well...

**Alexey Palazhchenko:** I imagine something like \[unintelligible 00:25:12.03\] programming language would not work very well.

**Natalie Pistunovich:** \[unintelligible 00:25:18.22\] might be interesting to see how that goes. English to \[unintelligible 00:25:23.16\]

**Alexey Palazhchenko:** Imagine you could write a Ph.D. with Copilot.

**Natalie Pistunovich:** "Here is my thesis in one line... Please write my expanded thesis, with correct formatting." This will be it. So AI can be used to augment your life as a developer, in helping you write code and helping you write readmes... But I can think of all other types of help that it can do. For example, creating the documentation for your code, right?

**Alexey Palazhchenko:** Yeah, absolutely.

**Natalie Pistunovich:** Kind of the other way around from Copilot. I saw in some -- for example in Replit, which is kind of an online IDE, and there you can highlight a function and then say what does it do. And then it will -- similarly, I guess, to a readme, it will be sort of your English used in programming languages, a helper. Can you imagine some more other interesting places where your AI can be augmenting our developer lives?

**Alexey Palazhchenko:** Well, I can imagine it doing pull request reviews. They already have quite some help with linters, and CI, and all that... But imagine Angry AI saying "You should DRY this code" or "You should use single \[unintelligible 00:26:35.25\]" or something like that... And then there would be a slider, like "Angry team leader" or "Pleasant team leader", with different settings.

**Natalie Pistunovich:** Or like a linter for the answers... A linter before you basically submit your review, that kind of helps you choose the -- "This word is nicer than that word." Or more encouraging.

**Alexey Palazhchenko:** Actually, one I think I would want from Copilot is to generate proper \[unintelligible 00:27:05.05\] configuration file for me... Because it has so many configuration options.

**Natalie Pistunovich:** Yeah. It can be sort of like a smart configuration values, right? Kind of like "This is my use case. Give me what's a good default to have."

**Alexey Palazhchenko:** Yeah. Or just "This is my code. \[unintelligible 00:27:19.26\] disable everything.

**Natalie Pistunovich:** I hope somebody is listening and writing down and making a startup of each of those ideas, because it's all useful tools.

**Alexey Palazhchenko:** Yeah, yeah.

**Natalie Pistunovich:** I have one more to add to our list... Something that you give it a piece of code and then say "Find the security vulnerabilities." Something to point out to you "This is what you should be doing better."

**Alexey Palazhchenko:** Yeah, yeah.

**Natalie Pistunovich:** Would you say that one of the interesting things about FerretDB is that it's actually AI-generated, augmented? The first AI-augmented database?

**Alexey Palazhchenko:** Yeah, you can say so... Actually, when I started I was just alone, myself and Copilot. So you can see he's my co-author now. Right now we have a lot of people from community just jumping in and starting to help... But the core of it was written by me and Copilot. That would be an interesting take, from all the project... The first database system written by machine learning.

**Natalie Pistunovich:** \[28:16\] By machines, for machines.

**Alexey Palazhchenko:** Yeah. \[laughter\]

**Natalie Pistunovich:** I guess it can be also interesting if it helps you to choose names for your project... You know, names for variables. This is a great tool to have. Something that will help you choose variable names.

**Alexey Palazhchenko:** Yeah, that would be very cool. And yeah, names for projects are very hard, actually. We spend a lot of time thinking about it.

**Natalie Pistunovich:** And this can also be aware of all the licenses out there.

**Alexey Palazhchenko:** Yeah. You know you can license particular strings, and then you can use the strings in your code.

**Natalie Pistunovich:** Or an AI that helps you choose a license for your project.

**Alexey Palazhchenko:** I see, yeah. That would be interesting, too.

**Natalie Pistunovich:** The list is really long at this point. I start to forget -- I'm gonna listen to those afterwards and write them down, one by one.

**Alexey Palazhchenko:** The next step would be it would just write a special license for your code. Only for your code. Custom-tailored for you.

**Natalie Pistunovich:** Mind=blown. \[laughs\]

**Alexey Palazhchenko:** It's like, we don't have enough licenses already...

**Natalie Pistunovich:** I guess you can always make it more specific... So what would be your recommendations for Go developers who are not yet using Copilot, or kind of just played around with it a little bit? So how can you use that as a tool to make your developer life better? What can you already do?

**Alexey Palazhchenko:** Yeah, so I would say the hardest problem for you could be just get access to it... Because as far as I know, it's still not public \[unintelligible 00:29:35.09\] If you have it and if you've found a way to have it -- maybe people can contact you and you ask them nicely to give some access... \[laughs\] But I would say just try it out if you have access to it, and start writing code with maybe a bit more comments than you previously used, especially if you never write comments in your public code, or private code. Then, after that, it just works miracles. Of course, you should try to verify the code \[unintelligible 00:30:06.07\] not just blindly accept it. Other than that, I would say go ahead.

**Natalie Pistunovich:** So starting by better documentation.

**Alexey Palazhchenko:** Yeah. And maybe you can just start a new project completely and open a readme file and start typing, and write a sentence, and just autocomplete.

**Natalie Pistunovich:** Yeah. Yeah. It can be also interesting to use for maybe refactoring.

**Alexey Palazhchenko:** Refactoring would be actually a really interesting use case... Because right now, all refactoring I know in various editors and IDEs is just completely algorithmic. It's very deterministic. Simple methods like \[unintelligible 00:30:42.21\] But if you're using AI - yeah, that would be a very powerful tool.

**Natalie Pistunovich:** I can imagine also improving your testing. All the tests that you have for your code; it can also be a quick, easy win.

**Alexey Palazhchenko:** Yeah... For that, I would still prefer \[unintelligible 00:30:59.23\] But as for generating initial seed data for \[unintelligible 00:31:02.02\] yeah, that would be great. Actually, I think I did write some tests using Copilot this way.

**Natalie Pistunovich:** I'm curious now if there's already some existing library that somebody created that "Here's a great dataset (or pack), all the things you can ever test, all the inputs that are worth being tested", or something like this, and generated by Copilot, and then this will become kind of one of the new things that you always involve in your testing flow.

**Alexey Palazhchenko:** Yeah, actually there's a repository, something about like "repository of bad \[unintelligible 00:31:36.26\]" which contains all these weird edge cases, like \[unintelligible 00:31:41.03\]

**Natalie Pistunovich:** It would be interesting to tell "fuzz it for me", or something like this. Find fuzzy inputs.

**Alexey Palazhchenko:** \[32:02\] That might be another most effective way to use a machine learning framework, but...

**Natalie Pistunovich:** I probably saw some interesting examples, but yeah... Maybe not. I'm trying to think what other interesting recommendations we can give to listeners who are just getting -- or you know what? Let's take one step back and let's speak to those who are maybe a little bit cynical about including AI in their flow, and look at that as an NFT or whatnot; a new buzzword. So why is it actually a good idea to include AI in your flow? Why should I not just stick to my good, old Vim, or IDE like VS Code, with no any other add-ons?

**Alexey Palazhchenko:** I would say a simple answer is it just really helps. There's some issues with representation, like I said before... For example for me, sometimes these suggestions are not formatted very nicely; sometimes they jump when I start typing and want to take a different direction it suddenly appears. Then I have to hit escape to cancel it.

So I would say representation could be better, but when it works nicely, you go much faster. Significantly faster. And that helps. You can be more productive. Not productive in a way as a joke; very productive as in you type a lot and then delete a lot, and you're just typing very fast... But in a good way.

**Natalie Pistunovich:** Well, to play a little bit the devil's advocate, we started this show with listing all the different things that you might need to be reviewing if you are getting the help of an AI to be your co-programmer, if you're doing pair programming with it... So is it actually more efficient?

**Alexey Palazhchenko:** I would say yes. One problem that we did not mention yet - for me at least - is that you just compile it, you have to switch \[unintelligible 00:33:55.07\] between reading and writing. Sometimes you read the code, you understand where you should place new code, how it works, how you refactor it, and then you start writing. And then you pause, you look for what happened, refactor it. With Copilot's suggestions, you have to configure timing pretty well. Otherwise you can be interrupted in your flow. But once you're just used to it, or you configured it, it works much better.

I would say that I did some measurements \[unintelligible 00:34:27.04\] but I've found it helpful... Simple code, repetitive code is generated basically by GitHub Copilot automatically.

**Natalie Pistunovich:** Would you say that Copilot is a good tool to use if you are diving into a completely new codebase? ...so you're kind of even trying to understand what goes where... Speaking of reading versus writing.

**Alexey Palazhchenko:** I don't know... Right now, I don't think Copilot provides much help there. I mean, it works for small pieces, for like "Explain this function." I don't think it works for "Explain this project" or "Explain this module/package."

**Natalie Pistunovich:** Library...

**Alexey Palazhchenko:** Yeah. Who knows, maybe that will work in just a few weeks, months, maybe a year.

**Natalie Pistunovich:** Yeah.

**Alexey Palazhchenko:** I think one Go-specific way where Copilot would help is as a generics replacement. You don't have to write all this code yourself, you don't have to use generics; you can just ask the compiler to generate all the various functions for \[unintelligible 00:35:32.02\] and it works great.

**Natalie Pistunovich:** \[laughs\] That's an interesting approach.

**Alexey Palazhchenko:** Yeah... I mean, we used these code generators everyone wrote back in the day, and... \[unintelligible 00:35:45.00\] Just use Copilot. That would be fine.

**Natalie Pistunovich:** So what would your ideal Copilot Go library look like? What would be a super-useful function/functions?

**Alexey Palazhchenko:** I don't know...

**Natalie Pistunovich:** I can imagine like replacing these reflections and so on would be --

**Alexey Palazhchenko:** So we were speaking about the machine learning model explaining this code. I wrote something like "explain this usage of concurrency".

**Natalie Pistunovich:** \[36:16\] In the sense of what are potential outputs, or what are you missing when you're looking at it, or what exactly?

**Alexey Palazhchenko:** So on many layers. For example, this function that taps these channels cannot tap that and that, and that channel is closed at this point, and then the big picture... And then the ultimate question - it should answer "Was it worth it a lot, or you should just write linear code there, without all the goroutines and channels, and be more simple?"

**Natalie Pistunovich:** So basically sort of a take one time --

**Alexey Palazhchenko:** Yeah. Actually, the last question would be the simplest one, I guess... It's just a constant answer, "No. Write simple code."

**Natalie Pistunovich:** I guess that's part of the value proposition of Go, right? That it's simple. Last week we had - it was part of GopherCon - a game on Go Time where we had to guess what gophers answered. So there was a survey to some hundreds of participants of the conference, and one of the questions was "What is the word that you would use to describe Go?" And then we had to guess what people answered. So the number one answer was "simple". So that might be a little bit funny with that...

**Alexey Palazhchenko:** Yeah, yeah. That's the reason why I chose Go in the first place. It would be my answer, too.

**Natalie Pistunovich:** Go is used a lot, or more and more, not just for regular code, like web code, but also for infrastructure; like, different tools that are written in Go. So how can we improve that with AI? Let's see what we can do better.

**Alexey Palazhchenko:** So let's imagine that we have an AI that actually can write the domain-specific language for our infrastructure. So for all those benefits of Go, Go is quite \[unintelligible 00:37:54.27\] language, and this error handling can -- I mean, writing business logic in Go is not the nicest way to use the language. It's great for infrastructure, it's great for some places where you manage bytes and so on, but if you want to write high-level business logic in Go, that's not very easy.

At the same time, existing solutions for integrating different other languages are also not great.

So imagine that Copilot analyzes your business problem, your domain, and then creates a tailored, domain-specific language for your problem, implement it in Go, with virtual machine and just-in-time compilation.

**Natalie Pistunovich:** Interesting... How would you name the startup that does that? \[laughter\] That sounds like such a useful pitch...

**Alexey Palazhchenko:** Yeah. For that, we need to create another machine learning model, to come up with a name.

**Natalie Pistunovich:** \[laughs\] Those are some interesting things. It would be interesting to listen to this show in like five years and see which of those already spun up to be a tool or a product. Or an open source project. Maybe somebody will go to Copilot and will write something, "Create for me a project that does this", and then it will be what we need.

**Alexey Palazhchenko:** Yeah. And then you click a button, "Create Repository" and it already contains all the code in it.

**Natalie Pistunovich:** And the license.

**Alexey Palazhchenko:** Yeah. \[laughter\]

**Natalie Pistunovich:** It's always important to have the right license.

**Alexey Palazhchenko:** Yeah. So we'll be out of job. Completely out of job. You don't even have to pick up the license.

**Natalie Pistunovich:** \[laughs\] Computers will be arguing with each other. Yeah, it brings us back to this AI judges, right? That seems to be like the logical next step of the computer industry.

**Alexey Palazhchenko:** And then we all will be in Matrix.

**Natalie Pistunovich:** Well, that is some interesting expected future for the development of our life as developers. Not to ask in our lifetime, but let's say in our professional career, which is hopefully for most people shorter than our lifetime, what things do you see that will be becoming a very common thing in a very short term? Something that you would write in your CV when you're looking for your next job, so a couple of years from now. What would be an AI skill that is related to development?

**Alexey Palazhchenko:** \[40:11\] I think for machine learning you have to have some experience already. And if you don't have it by now, then in a few years it might be a problem to find a good job. And I guess -- yeah, I think Copilot will be much more common, in more editors, more languages, with different representations.

**Natalie Pistunovich:** Would you be writing that on your CV? I'm asking because I saw CVs of people who write that they do Git as a skill, but I never -- I cannot remember, let's say, seeing a CV that mentions their favorite IDE. So like "I am good with Vim. I am good with VS Code." But would you say that Copilot is more in the category of your IDE, or more in the category of skills like Git?

**Alexey Palazhchenko:** Actually, I saw quite a lot of CVs that mention a preferred editor. Like, "I have skills in IDE" for example.

**Natalie Pistunovich:** Okay. Interesting.

**Alexey Palazhchenko:** Yeah, people do write that. Maybe \[unintelligible 00:41:09.05\] people just write down all the keywords they know in English \[unintelligible 00:41:13.27\] is in Russian...

**Natalie Pistunovich:** Or you're coming very opinionated. "If you're not working with Vim, I don't want to work here."

**Alexey Palazhchenko:** Yeah, that also happens, yeah. I saw that, too. I mean, with Copilot you don't have to have some special skills to use it, right? It doesn't have much configuration options. It's not like you could have a ton of knobs to tweak, and you are an expert of tweaking the machine learning model for your use case. You don't even have access to it. I don't think that Copilot would be in a lot of CVs, but then again, we have editors in the CV, so someone will definitely mention Copilot. We can take a look right now and link it in. I'm pretty sure someone already mentioned it.

**Natalie Pistunovich:** \[laughs\] Copilot, yeah.

**Alexey Palazhchenko:** Except Copilot developers, of course.

**Natalie Pistunovich:** Yeah. What I can imagine is that sometimes when using the different OpenAI engines, like GPT-3, Codex, whatever, you have to write the prompt -- or you can write the prompt in different ways, and one way would yield you a better result than another, right? That's kind of the concept of prompt engineering. So I can imagine that this is a little bit similar in that sense in Copilot, in the sense that if you write your comment in one way, it will create one function, and if you write your comment a little bit better, it will create another function.

And back to this Advent of Code with Codex, I noticed that sometimes some of the days when I just copy-pasted the entire instruction of what is the Advent Code of today that you need to solve, for some languages it solved it perfectly from the first attempt, for some other languages, other days, were just not working. So you can even change your comment or change your instruction to the computer... So you can argue that prompt engineering can be even used in Copilot.

**Alexey Palazhchenko:** Yeah, that's definitely a useful skill to mention in your CV. You know how \[unintelligible 00:43:07.06\] things for Copilot. You're fast at tweaking words for Copilot.

**Natalie Pistunovich:** I wonder if this is a similar category to "I'm really good in documenting my code." Would you write that in your CV? \[laughs\]

**Alexey Palazhchenko:** Yeah, I'm also very quick at quitting Vim...

**Natalie Pistunovich:** \[laughs\] "I can do that in only 7.5 seconds." \[laughs\] I guess that all falls under communication skills... But then maybe this is kind of the expanding my communication skills with my human teammates, and with my AI augmentation tools...?

**Alexey Palazhchenko:** Yes, that would be interesting, if the skills should be significantly different \[unintelligible 00:43:43.18\] You speak with humans with one language, and with AI this different language.

**Natalie Pistunovich:** There is a point to that, because the model was trained on English, or on natural language, and it was trained on code... But it was trained only on a subset, and it's always -- like, it will never be the same subset of the average person. It's not like the average person of one country has another world of context and vocabulary and whatnot of another person, in another language... So maybe even skills of English is actually becoming more of a need for a developer to have, so you can better communicate with the AI.

**Alexey Palazhchenko:** \[44:22\] Yeah. And also imagine that you have to command AI to write the code for you, for it to work... But you don't want to command your co-workers, right? That would be a different language already on that level.

**Natalie Pistunovich:** For sure. Interesting. Okay, so if we summarize kind of the tip around communication skills and how to present that next time you speak about your Copilot skills in a professional setup like a job interview, what would be your take-away?

**Alexey Palazhchenko:** Yeah, so you could say that you have soft skills and hard skills. Soft skills is how you talk with people, and hard skills is how you talk with AI. \[laughs\] You can say that "Soft-hard skills" or "Hard-soft skills."

**Natalie Pistunovich:** Yeah. Firmware skills, right? Firm skills.

**Alexey Palazhchenko:** Yeah. \[laughter\] Yeah, separate section. LinkedIn will introduce it next year.

**Natalie Pistunovich:** Yeah. More AI engines will be doing code, so it only makes sense. Well, that was an inspiring and interesting conversation... Time for some unpopular opinion. I hope you have one.

**Jingle:** \[45:28\] to \[45:45\]

**Natalie Pistunovich:** The nice thing about this tune is that even on episodes where Mat is not here with us, he is a little bit with us... Because he is the creator of this short tune, so... Hi, Mat. I hope you're feeling better.

**Alexey Palazhchenko:** Well, yeah... Mat can't be imitated, for sure. So my unpopular opinion would be about generics in Go...

**Natalie Pistunovich:** Dun-dun-duuuun...!

**Alexey Palazhchenko:** Yeah, so quite a lot of people consider generics to be great in Go, and it works great for them... And even more people consider that generics were a bit rushed, and are afraid of them, I would say... So for me, personally, generics went, I would say, sideways. There are a lot of things in Go that could be potentially solved with generics, but couldn't be right now, because of different directions they went.

To give you an example, let's say I have something like a JSON object and I want to traverse it by using paths and indexes, field names as strings and indexes as integers... And I can't write generic functions that accept a combination of them. It can either accept a list of paths, or a list of indexes. But I can't write a function that accepts both strings and integers. So I either have to use a reflection for that, or an empty interface, or code generation, but not generics.

So my opinion would be like generics went in a direction I did not want them to go. So they did not change a lot of how I write Go, and I don't expect that to change anytime soon.

**Natalie Pistunovich:** Okay... My follow-up question would be do you think your unpopular opinion will be a little bit unpopular, or very unpopular, or actually it may be popular? What is your prediction?

**Alexey Palazhchenko:** I would say a little bit unpopular.

**Natalie Pistunovich:** Okay... So you're not going to necessarily make it to the rank of the most unpopular ever opinion...

**Alexey Palazhchenko:** Who knows...? Maybe generics will be fixed with the help of Copilot in the next release.

**Natalie Pistunovich:** \[laughs\] Yeah, interesting. I have to say, the last couple of episodes had unpopular opinions on the field of generics; what a surprise... Well, that was an interesting conversation, for sure. If anybody who has listened to this episode and wants to try Copilot but is not there yet, so you can apply on the GitHub website... Probably googling "copilot github" would be the best way to join the waitlist.

Yeah, that would be wrapping it up for today, so thank you all for joining us... And join our outro tune.
