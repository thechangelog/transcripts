**Jerod Santo:** So we're joined by Robert C. Martin, or as you may know him, Uncle Bob. Bob, first of all, thanks so much for joining us.

**Bob Martin:** It's my pleasure.

**Jerod Santo:** I guess I'll ask the question that you probably get asked thousands of times, but I'm gonna ask you anyway, which is how did you convince a bunch of strangers to call you "Uncle"?

**Bob Martin:** \[laughs\] The year was 1988. I was working at a company, we were doing T1 telecommunication testing, and one of the programmers there was a guy who gave everybody a nickname, and I was Uncle Bob. He was one of those annoying people that would run around going "Uncle Bob, Uncle Bob, what about this? Uncle Bob, what about that?" So I really decided I hated it.

I left that company a couple of years later, and I went to another company... Actually, I went to \[unintelligible 00:02:31.24\] And nobody was calling me Uncle Bob, and it was weird. It was like "Wait, nobody is calling me Uncle Bob", so I made the mistake of putting it in my email signature... And I was just starting to get very active on the internet in those days, in the news groups, in the discussion groups, and it kind of stuck.

And I went to a conference a few years later, and people recognized me and they'd point me and they'd say "Uncle Bob!" and I thought "Oh my god, I've made this horrible error..." And I took it out of my email signature, hoping to expunge it, but it didn't go away... And eventually, I thought "This is actually a good brand. I should probably keep it." So that's the story...

**Jerod Santo:** Okay. Well, it stuck.

**Bob Martin:** It did stick... And now I'm happy for it, it's fine.

**Adam Stacoviak:** Do you get some inherited respect by being called Uncle Bob?

**Bob Martin:** I don't know if it's respect or not... There's an Uncle Bob storage place out there that people often refer me to.

**Jerod Santo:** Bob, in your latest book you were talking about Agile. Of course, you were there, you were part of the original group that penned the Agile Manifesto...

**Bob Martin:** Yup.

**Jerod Santo:** Man, it was a long time ago now - 2001.

**Bob Martin:** 2001.

**Jerod Santo:** Eighteen years later you're here to write about it, going back to the basics of Agile. Tell us what's happened; maybe introduce the folks to Agile. Many of us are just kind of living in a world where Agile is a bedrock of what we think we do, or we've been doing... And we know there was a group of people, and they wrote some stuff, and it has to do with not planning too much stuff upfront... But a lot of us are actually foreign to the concept, and then what's changed and what's happened, so kick us off in that direction.

**Bob Martin:** \[00:04:08.08\] It's been a huge controversy and a long, long discussion... So back in the extremely early days of software, going back into the 1950's or the 1960's, there was no standard process for doing software. Nobody knew what the heck to do. The programmers at the time were generally older people; they were in their 30's or 40's or 50's, because there were no universities teaching software in those days, so they hired mathematicians and engineers and other people to do software, and these guys were older... And they very quickly adopted a style which today we would squint and call Agile, but in those days they didn't call it anything at all; it was just kind of the way they worked.

They worked in short cycles, and they verified the outcome of those short cycles on a regular basis, and they wrote tests, and so on. One example of that is the programmers who wrote the code for the Mercury space capsule, who worked in cycles that were one day long. They wrote their unit tests in the morning and they made them pass in the afternoon. That's just one example of how the style started to enter into software.

Then in the 1970's (early '70s) there was this event. First of all, there were suddenly university programs that were graduating computer science graduates, and a flood of 20-somethings poured into the industry, mostly male, by the way, for some reason that we're still trying to figure out... And this flood of testosterone-laden 20-somethings poured into the industry, and I think the management at large thought "We've gotta get some control of these boys..." And right about that time a fellow by the name of Winston Royce wrote a paper. The paper was called "Managing large-scale software systems." I think that was it; something like that. And in this paper he drew the standard waterfall picture - "We're gonna do analysis, and then design, and then implementation, and then testing..." And he drew it with those nice little boxes, with the arrows flowing down, so it looked like a waterfall.

He wrote this paper in an attempt to tell people that this is probably a really bad idea, because nobody can actually do these phases in that order. The paper is a fascinating reading, if you ever read it.

Apparently, people did not read the paper, they just looked at that first image... And the first image was of the waterfall, and everybody said "Yeah, that makes perfect sense." And for some reason, for the next 30 years that was the model that dominated us. It got put into all kinds of process documents in the military, and in industry, and I remember - I was a young programmer at the time; perhaps I was 18 or 19 years old - seeing the articles in the trade journals come out about this idea that you could do the analysis first, and then when the analysis was done, you could do the design. And then when the design was done, you could do the implementation, and you could put dates on those events. And I thought "Oh, this is a godsend. This is wonderful!"

**Adam Stacoviak:** Of course!

**Bob Martin:** Yeah, because now if the analysis is done, you know you're a third done. And when the design is done, you know you're two thirds done. And honestly, we believed this. I believed it, everybody believed it, it was so compelling. It descends from another branch of management called scientific management, which was a competing theory at the time... A very successful one back at the turn of the previous century.

\[00:08:04.16\] Anyway, that dominated us for about 30 years. In the meantime, all of the original programmers who had been in their 40's and 50's and 60's - they all retired and quit, and those of us who joined in the '70s kind of grew up. And 30 years later we're all in our 50's and 40's and thinking "What the hell happened to us?" And a bunch of us got together at Snowbird in Utah in 2001 and said "Okay, how do we get out of this mess?"

There'd been a substantial movement in lightweight processes since about 1995. Ken Schwaber and Jeff Sutherland and Mike Beedle and Martine Devos - they wrote a paper in 1995 about Scrum; a real early paper about Scrum. Jim Coplien in 1996 or 1997 wrote a paper about the processes used by the most successful organizations. These introduced some of the ideas of Agile.

Kent Beck started promoting his extreme programming ideas in about 1998-1999. Pete Coad, who was running -- I can't remember the name of his company at the time... TogetherSoft. He had started promoting his particular brand of lightweight process, and there was this large, multifaceted movement, throwing off waterfall and trying to use a much lighter-weight approach, all of them based on short cycles, all of them based on feedback. So it was this group that met in 2001 at Snowbird. Martin Fowler and I got together at one point and we sent out an invitation. We said "Hey, let's all meet somewhere...", and Alistair Cockburn suggested Snowbird. So "Let's all meet at Snowbird, and we'll get together and we'll talk about this." We all got together at that meeting... And you know - when you get a bunch of opinionated people together in a meeting, it doesn't usually work out well. Usually, there's a lot of spitting, and hemming and hawing and posturing...

**Jerod Santo:** That's a lot of people, too.

**Bob Martin:** Well, it was 17... And the magic happened. Somehow, the magic happened. Now, this group of people has never met again, don't want to meet again. I don't know that we all like each other very much...

**Jerod Santo:** You don't have a 20-year reunion coming up?

**Bob Martin:** We tried the 10-year reunion, and most everybody got -- this was at the Agile conference. The Agile conference tried to organize it. And most everybody came; a few people didn't. Even then, it was like "Okay, we're on stage... Whatever." But we didn't have a lot to say to each other. \[laughs\] The magic happened once, and it cannot happen again... At least not with that group. But it was a very productive meeting, and at some point - I think it was at the end of the first day or the beginning of the second day - somebody put those four magic lines on the board. I think it was Ward Cunningham, and Ward thinks it was Martin Fowler, and nobody really remembers properly. But it was those four magic words saying "Hey, the old way was good, but there's this other way which we think might be a little better... So we prefer one over the other." We all thought that was the appropriate way to state it.

Now, at the end of the meeting we thought "Well, nothing's gonna happen with this..." Because that's the other thing about meetings like that - maybe they come to some kind of conclusion, and they leave a crater behind, and nobody ever cares to look into that crater again... But in this case, Ward Cunningham did something smart; he said "I'm gonna put this on a website, and I'm gonna let people sign it." And we were stunned. Tens of thousands of people signed this thing, and it started a movement.

**Jerod Santo:** \[00:12:09.26\] There we go. So you had the four values, and 12 principles that came out of those four values...

**Bob Martin:** Yeah, four values, 12 principles...

**Jerod Santo:** ...and people signing it. This was 18 years ago...

**Bob Martin:** Yeah.

**Jerod Santo:** And then things proceeded from there, and I would say that modern-day software, for the most part, is written at least ostensibly in an Agile world, or in an Agile milieu. Or we think we're Agile, and there's a lot of buzzwords that have become attached to it, there's a lot of sub-classes... You list out a few of them in the book: Lean, Kanban, SAFe, XP, Scrum... There's all these things. There's consultants, there's trainings... There's just a whole -- a cottage industry, if you will, around this process or these ideas.

**Bob Martin:** Yes, that's true. The most successful thing about Agile is the word Agile. Everything else - maybe not so successful. The original concepts almost instantly started to get muddied, and lost, and twisted and turned, and people would ask "Well, what about this, or what about that? Can we use Agile to learn how to play the piano? Can we use Agile to do marketing of toothpaste?" So people wanted to take it and twist it and turn it in many different directions. And you're right, the consultants got into it. I was one of them. And we were trying to figure out a way to get companies to change to use Agile. This was called "the Agile transition." People are still selling Agile transitions today. And that was very difficult. Very, very difficult... Because people don't wanna change, and they wanna keep using the same methods.

So that was very hard, and people would push back on the rules, and twist them, and turn them... It was a very unsatisfying period. Until - and this didn't fix the problem, but there was an event... And the event was Ken Schwaber. Ken Schwaber came to me probably 2003 and he said "Bob, I'd like to use one of your classrooms." At the time I had a company; there was about 20 of us, we were training people, and I had a whole bunch of classrooms. And he said "I wanna use one of your classrooms. I wanna teach a class called Certified Scrum Master."

**Adam Stacoviak:** Oh, boy...

**Bob Martin:** And I listened to these three words and I thought "These three words don't have anything in common. \[laughter\] What could you possibly be teaching here, Ken?" But Ken was a friend of mine, and I thought "Okay, fine. You can use it." And he said "In return, I'll let your people attend the course, and they can all become Certified Scrum Masters." I said, "Yeah, fine. Whatever." I didn't go to it because I had to go somewhere else. \[Siri speaking in the background: "Okay, I've found this on the web..."\] Oh, Siri, thank you for helping me. Siri is telling me...

**Jerod Santo:** So helpful.

**Bob Martin:** So Ken did this course... And I thought it was a dumb idea. Who wants to go to a course named "Certified..." -- who wants to have a certificate saying that you're a Scrum Master? Well, apparently lots of people did. So I was wrong about that. And a flood of people started taking these courses. Apparently, they liked the idea of certification a lot, and they liked the idea of having this piece of paper. What was very disturbing to me - and remains disturbing to me - is that these people were not programmers. These people were project managers. So there was a flood of project managers that poured into the Agile community, and literally took it over.

\[00:15:52.07\] The Agile conferences went from being technical conferences to being management conferences, almost overnight. And literally, that didn't change. That has been the theme ever since. Agile has become a "soft skills, people management" kind of thing, with soft ideas, and loosey-goosey things, and "Oh, let's juggle" and "Let's play with mice", and things like that.

I'm an engineer, I'm a programmer, and most of the guys who went to Snowbird were very technically-based... Weren't into the real soft skills thing too much - some of them were, but most of them weren't - and this was disturbing. And we suffered it for a while, and then at one point a group broke away and said "Look, somebody needs to be promoting the hard skills. Test-driven development. Pair programming. Simple design. Refactoring." That was the core of the technical skills within Agile. Somebody needs to be promoting that, and the Agile community is not promoting that. The Scrum folks had pretty much abandoned any of the technical practices that had come into Agile... So the craftsmanship movement was born.

The craftsmanship movement was an attempt to reintroduce the technical skills and the technical disciplines back into Agile. The hope was that the Agile community would re-embrace the craftsmanship community and there'd be a joyful kumbaya, and everybody would be happy... But that never happened either. So here we are today, in 2019, and there is this definite split. There's the technical people, who like Agile; they want to do Agile, but they want to do it with technical disciplines... And then there's the vast array of non-technical Agile people, who are suffering through all the different adjectives. And the adjectives - there's "modern", and there's "safe", and there's "less", and there's "more"... God knows. There's a million adjectives put in front of Agile, most of which are there to satisfy either the differentiation of the company that's promoting them, or the companies who don't wanna do Agile but wanna say they're doing Agile. And that's where we are today, and that was really the motive for writing the book.

The book is a back-to-basics book. It says "Hey, this is what Agile was 19 years ago. This is what Agile was, this is what Agile will always be. Here are the rules, come read them. Here are the disciplines. They're simple, they're easy. They don't answer every question, they're not going to give you differentiation for a consulting agency, they're not going to let you learn how to do the piano in an Agile way, but if you wanna build software, here's a discipline that works." So that's kind of the reason for the book.

**Adam Stacoviak:** Yeah. Is it for an everyone book, or is it for a software developer who's been there, doing it for a while, and they're relearning and retraining - for a lack of better terms - as you say, "back to the basics"? Does it seem to assume that the reader is someone who's been in software, or is it for someone who's getting into software, trying to understand how to be on a team, or build a team, or run a team?

**Bob Martin:** It is very much for people who are in software projects. It's not a technical book. I don't put any code in it. But it is a book for people who are technically-minded and want concrete disciplines. And so it walks through the concrete disciplines that started Agile way back in the first place.

**Adam Stacoviak:** So it's one part history, one part application, one part definition, and maybe some guidance.

**Bob Martin:** \[00:19:49.18\] Yeah, that's a good way to put it. It does begin with history. That history I've just told you. It goes into that, at some detail. I ranted in it a fair bit about what has happened to Agile and what needs to now happen to Agile.

My views are not universal, so I included some people in the book who disagree with me. So there's a couple of chapters that are kind of point/counter-point chapters; they argue the other side of the case... Which I thought would be valuable for someone who is trying to understand what Agile is and what all the opinions are about.

**Adam Stacoviak:** Right. It's interesting too, because there's so many -- as you say, there's so many different variations of it. You've got Agile XP, Scrum, Lean, and I think you even mentioned in your book 5,328 other Agile methodologies out there...

**Bob Martin:** \[laughs\]

**Jerod Santo:** You counted every one...?

**Adam Stacoviak:** No, that's what it said.

**Bob Martin:** Yeah, that number -- I don't know where I got that number from. I could probably tell you, but you wouldn't wanna hear it.

**Jerod Santo:** It'd take too long.

**Bob Martin:** Yeah, yeah.

**Adam Stacoviak:** The point is that people coming to this need some sort of direction... And there's so many out there, so many named ways to do Agile, it's like "Well, where do I really begin? How do I actually do Agile? How do I achieve building software in a well way, with a team, and actually see results successfully, where we make customers happy, our business makes money, our software engineers and our teams thrive?"

**Bob Martin:** Yeah, and the book tries to make the point that you really don't need to hire anybody to train you for this. There's plenty of material out there. The book is one offering. There's many others. There's plenty of material on the internet that can teach you this. A small team of developers who wants to work in an Agile way will have no trouble finding the resources to help them through. If you wanna hire someone, well fine; be careful with that, because they may have their own agenda... But it's possible for a small team of developers to work in an Agile way without an awful lot of effort.

**Jerod Santo:** It seems like there's two kinds of trouble. There's the one that you see coming and the one that you don't see coming, because you don't think you have any trouble. And it seems like perhaps with Agile there's an overriding thought of like "We're already doing it." And so, like "Of course we're Agile...", because it becomes a marketing term. You don't wanna be non-Agile.

**Adam Stacoviak:** It is the way to do things.

**Bob Martin:** Yes, exactly.

**Jerod Santo:** A potential hire might say "Are you guys Agile?" and what kind of hiring person is gonna say "No"?

**Bob Martin:** Of course we are.

**Jerod Santo:** Right. We all think we're Agile... What are some surefire signs that you actually aren't? You think you're Agile, but you're doing things in a different way.

**Bob Martin:** Well, there's a couple of obvious giveaways. Number one is are you producing something deliverable every week or every two weeks? Something that you could deploy. You may not deploy it because maybe it doesn't have enough features, but technically, it is deployable; it's been tested, it's been documented... It's done, as far as what's been specified, and you can deploy it every two weeks. Some people use one week, some people use two. I like one, but some people use two. But that's a dead giveaway.

If you don't have that, if you are not delivering something on an extremely regular basis, something that is deployable every single time, then you're not doing Agile. You are not doing Agile if you are not intensely communicating with stakeholders. The programmers and the stakeholders have intense communication all through the development cycle.

\[00:23:27.28\] If you're working off of a set of requirements that are written down and the stakeholders are on the other side of the planet, you are not doing Agile. There's no way you can be doing Agile that way.

You are not doing Agile if you are not writing tests. If you do not have a suite of tests that can verify that the system you are writing works as specified, you are not doing Agile. You are not doing Agile if you lose control of the code. If you look at the code and the code is a mess, and there's no way you can clean it up because it's just too hard, you are not doing Agile. An Agile team always keeps control over the code, always keeps the code clean, because they have tests, because they refactor, because they use simple design, because they use those engineering practices. There's a whole bunch of other tell-tales that you could go into, but those are the most obvious, I think.

**Jerod Santo:** You're starting to sound like Jeff Foxworthy's "You Might Be a Redneck If... \[laughter\] "You're not doing Agile." You could have a whole stand-up routine where you're pulling out who's not Agile.

**Bob Martin:** Yes, well... \[laughter\] I've actually done that on stage, but never mind that...

**Break:** \[00:24:42.07\]

**Adam Stacoviak:** Bob, you said why you did this book, but why did you specifically -- you mentioned why it needed to be there, but why you particularly came back to this, this many years, to write not just this book, but a series of books around Agile and coding, and clean coding and these ways you prescribe things...? Why did you particularly come back to this subject matter?

**Bob Martin:** I've been a programmer for close to 50 years, half a century. I am 66 years old. I got my first programming job when I was 18. I wrote my first code several years before that, so... A very, very long time. And for most of that time I had no mentor, no one to teach me anything. It all had to be self-taught. I began at a time when the number of programmers in the world was probably numbered in the thousands, maybe the tens of thousands. Now that number is in the hundreds of millions. Someone with some experience needs to say to the very large number of people who don't have experience what mistakes they're gonna make and how they solve them. What things are valuable, and which things are not.

The need I felt to do that began probably about 15 years ago. At first, I thought "Who am I to tell people how to write code? Who am I...? I'm just a guy..." And then at some point I thought "No, somebody's gotta say this, somebody's gotta write these things down", and I started on this path of writing the Clean series - the Clean Code book, the Clean Coder book, the Clean Agile book, the Clean Architecture book... There will be a couple more to come yet. And I think the years that I've worked are the -- I don't know how to say this, but are the justification for me writing a series like that. How many programmers are there in the world now? I said there's something like a hundred million.

**Jerod Santo:** \[00:28:15.05\] Yeah, I was wondering where that number came from...

**Bob Martin:** Well, that's a soft number; it's hard to get the number... It depends on if you count the VBA programmers or not.

**Jerod Santo:** If you count the what? I missed it.

**Bob Martin:** The VBA programmers. Maybe the numbers look a lot different if you count all those guys.

**Jerod Santo:** Oh yeah, if you count Excel now you're huge.

**Bob Martin:** Yeah. Okay, but it's a large number. It's obviously more than ten million. It's probably somewhere between 50 and 100. And if we choose 100 as the number, then there's some really startling math you can do. The very first person to write code for an electronic computer was probably Alan Turing; there's some debate about this, but let's say it was Alan Turing in 1946. What kind of growth curve gets you from 1 to 100 million in 73 years? Well, it's not linear... \[laughs\]

**Jerod Santo:** No. No, it's not.

**Bob Martin:** It's an exponential growth curve.

**Jerod Santo:** For sure.

**Bob Martin:** Alright, so... We're programmers, we can choose the base of the exponent. We'll choose the base of two... So how many powers of two is 100 million? Well, two to the twentieth is a million, and two to the seventh is 128, so about 27. So there's 27 doublings in the number of programmers from 1946 to now, roughly. Okay, well that's 73 years, 27 doublings - that's one doubling every two-and-a-half years. Does the number of programmers in the world double every two-and-a-half years? That's a hell of a question. And initially, I think the answer is no, because during the first decade the doubling rate was much faster. First there was Alan Turing, and then there were ten guys the next day, and then there were 100 guys the next month.

**Jerod Santo:** Right.

**Bob Martin:** And then it slowed down. There's very good evidence that the current rate of doubling is every five years... And you can look at the age distribution of programmers to see this, and you can look at the want ads lists or the recruiting lists and see a definite trend. If the number of programmers in the world is doubling every five years - first of all, that represents an immense demand. A demand that is growing exponentially. And it's pretty clear that that's true, right? We're seeing software written in thermostats, and microwave ovens, and little things that we carry in our pocket, our car keys have software in them... So the amount of software getting written is just enormous. And this doubling rate means that half the programmers in the world have less than five years experience. This will always be true, as long as we're doubling every five years.

So we're stuck in an industry that is in a state of perpetual inexperience, and there aren't enough old guys to teach the new guys how to do it. If people look around at the software industry, they see a bunch of very young people, and they ask themselves the obvious question. First, they say "Well, this must be a young person's game. All the old people probably go into management later, or something." You might ask "Well, where did all the old programmers go?" and the answer to that is "We're all still here." We're all still here, we're all still writing code. We never went anywhere. There just weren't very many of us to begin with back in that time.

**Adam Stacoviak:** Your majority was already small.

**Bob Martin:** The original cohort was very small, compared to what it is now. And so who's training the youngsters coming in? And the answer to that is "Almost no one."

**Jerod Santo:** It's youngsters training youngsters, for the most part.

**Bob Martin:** \[00:32:00.09\] Yeah. And of course, after a year or two they think they know it. "Oh yeah, we know how to do this." And of course, they don't. So our industry is in a very precarious position. Now, you put that on top of something else, and you get a real firestorm. The other thing you put it on top of is the fact that in 1960, our society lived without computers. Nobody had a computer at home, nobody had access to a computer. A computer was something in a movie maybe, a science fiction movie, or a computer was something in a laboratory somewhere, and it cost millions of dollars, and only people in white coats used it, and so on. But over the years, that's changed dramatically, to the point now that in your house there are probably hundreds of little computers.

On your body there are probably a dozen or so, if you count your car keys, and your phone, and the battery case, and your AirPods, and the watch, and whatever you've got on you... Literally, on your body, there's probably a dozen or so computers. In your house there's hundreds. In your community there are hundreds of thousands. If you go out on the road, every car out there has software running it. And a modern car - I don't mean a Tesla - has 100 million lines of code in it. And if you're a programmer, that should scare the hell out of you. "Who wrote that code?"

**Jerod Santo:** That's a lot of code.

**Bob Martin:** "Who wrote that code? And did they test it?" Would you like to see the tests for the code that is running in your car? And you think "Well, most of that code is in the entertainment system, and it's in the navigation system", but a fair bit of that code sits in the engine. And when you put your foot on the accelerator, there is not a hard cable that goes and opens a butterfly valve in the carburetor anymore; there are if statements interpreting that pressure on your pedal. When you push on the brake, there's an if statement in there, deciding how to apply the brake, and where to apply the brake, and when to apply the brake. And wouldn't you like to know what tests were done on those if statements?

Our society at this point depends for its existence on software. Nothing can get done without software. No one can do anything without software. You can't buy anything, you can't sell anything. No insurance can be bought. You can't microwave a hot dog, you can't wash the dishes, you can't wash your clothes or dry your clothes, you can't watch TV, cannot make a phone call, can't drive anywhere. You can't do anything. No law can be passed, no law can be enforced without software sitting in the middle of it. Our society rides on top of software, and we don't quite get this yet. We don't quite get how vulnerable we are to all of this software and the people who are writing it.

There have been a number of disasters, we can count them. There was Knight Capital... If you remember, Knight Capital lost 450 million dollars in 45 minutes because some poor software guy did something stupid. I won't go into the details, but it was a very sad story... Several dozen people have been killed or injured or maimed by cars that have run out of control and the brakes don't work because of software failures... We could talk about the 737 Max, I suppose; there's a software portion in there. It's not entirely a software issue, but there is a component that is software. We could talk about the Volkswagen mess in California... And that's an interesting one, because that's where you had some programmers actually lying and cheating, and the behest of their company; their company told them to do it.

**Jerod Santo:** Yeah... That's right.

**Bob Martin:** So we sit at this very interesting precipice. Our society depends on software, and the software is being written by vast numbers of people with almost no experience.

**Adam Stacoviak:** \[00:36:09.21\] So that answers the question of basically why you wrote this book...

**Bob Martin:** \[laughs out loud\]

**Jerod Santo:** You paint a scary picture..

**Adam Stacoviak:** ...which I love. I love it.

**Jerod Santo:** You love that? I think--

**Adam Stacoviak:** No, I mean, I love that reasoning why, because there's actually a section in the book where some of what he said somewhat quoted from that; I wouldn't say it's quoted, because he's the one who's written it, but it's "We rule the world." It's talking about how software developers are super-influential. We (for a lack of better terms) rule the world, because so much sits at the software developer's hands to ensure people not being killed via software that doesn't work properly. So I kind of understand the importance of it. It's really interesting to look at the statistics of that and say, because of the doubling, how many people become software developers each year, and how many of those are inexperienced because of the doubling factor of every five years that we double. That's just astounding to me. I never really considered those numbers...

**Bob Martin:** Well, it's astounding to me, too. And why would you, right? Because you live in this industry, you work in this industry...

**Jerod Santo:** Right.

**Bob Martin:** Okay, you see a few more programmers from time to time, but you really don't see the impact, unless you think about it. And it's been insidious. The software has invaded our way of life to the point that now -- I mean, I can't tell the time without invoking a software system. And this software system on my wrist yells at me all the time. It gives me the news.

**Adam Stacoviak:** It just yelled at you a bit ago.

**Bob Martin:** It talks to me about Donald Trump, and it's continuously talking to me about Donald Trump. It's remarkable.

**Jerod Santo:** Yeah. Well, it's so stinkin' useful. There's no going back.

**Bob Martin:** There's no going back. It's impossible to go back, and we don't wanna go back.

**Jerod Santo:** No.

**Bob Martin:** On the other hand, society doesn't quite realize just how dependent society is on software.

**Adam Stacoviak:** Yeah.

**Bob Martin:** And it will likely take some kind of event... And that event will be some kind of horrible tragedy. Some poor software guy will do something stupid and kill 10,000 people. And when that occurs, the politicians of the world will not be able to ignore it, so they'll have to stand up and wag their and point their finger at all the programmers and say "How could you have let this happen?" And you'd like to think at that point that the finger would not point at the programmers, right? It would point at managers, it would point at businesspeople. But we saw what happened when the CEO of Volkswagen North America was called to testify before Congress about the cheating and lying that was done in the software of the Volkswagen car. He said "Well, it was just a couple of software developers who did it..." He just took the finger and moved it right back to the programmers. And to some extent, that's justified, because it was a couple of programmers. Maybe more than a couple.

**Jerod Santo:** They were complicit.

**Bob Martin:** But again, it's our fingers on the keyboard. We are writing that code. How do we answer that question? When the politicians of the world finally stare us in the eye and say "Hey, guys, how could you have let this happen?", how do we answer that question? Do we say "Well, you know, my boss told me it had to be done on Tuesday." \[laughter\] If that's our answer...

**Jerod Santo:** That's true...

**Bob Martin:** ...if that's our answer, then we're toast. And the politicians of the world will start to pass laws. And we'll be told what languages we can use, what platforms we can use, what signatures we have to get, what processes we have to follow... A bunch of guys, a bunch of bureaucrats will make these decisions, and they will get turned into laws; and we'll all work for the Post Office.

**Jerod Santo:** Is there anything that's inevitable though? I mean, good code or bad... Even the best Agile practitioners write code with bugs in it. So I'm not saying don't try, but I'm saying that if the numbers are there and this is going to happen, even if the code was really well written, the regulation is still gonna happen.

**Bob Martin:** \[00:40:05.01\] The regulation is going to happen. There's no way to avoid that. In the end, it's got to happen. The question is whether we get to regulate ourselves or whether we are regulated by someone else. If the answer to the question -- they come and they point their finger at us and say "How could you have let this happen?", and if the answer to that question is "Look, this was an accident. It was terrible, it was horrible, but it was not because we were being negligent... And here's why. Here are the practices that we follow. Here are the disciplines that we follow. Here are the standards we uphold." If we can come back with that statement, then we will probably escape the worst of the regulations. They will still regulate us, but maybe they'll use our own regulations.

That's what the doctors did. The government finally went to the doctors and said "You guys are out of control. We need to regulate you", and the doctors handed them a whole bunch of rules. "Oh, we've been working on these rules for 15 years." And the government said "Oh great, because we certainly don't wanna decide that stuff", and they just made the doctors' rules the law.

**Jerod Santo:** Okay, it makes sense.

**Bob Martin:** That's kind of where I hope it all goes.

**Adam Stacoviak:** This subject we're talking about now is coming from chapter two (roughly) and the title for that chapter is "The reasons for Agile."

**Bob Martin:** Yes.

**Adam Stacoviak:** So are you saying that -- I guess it would make sense if you're going to influence, as you've mentioned, sort of rewinding a bit, the reasons why you wrote this book and the reasons why you're passionate about this is because 1) you've got a lot of experience in software, and 2) you see the doubling and you see the influence and the impact of software on our world, and it would make sense to influence good software. And how do you do that? You would want to enforce - or in this case reinforce - good practices for producing good software, for good teams to produce good software. So the reasons for Agile is to save the world? \[laughter\]

**Bob Martin:** I couldn't have said it better myself?

**Jerod Santo:** There you go...

**Bob Martin:** Yeah, the reason for Agile is to save the world. I think Agile is a component. Agile is one component in a much larger field. Agile is a way to get a small group of people working together on relatively small projects... And that's really all it is. It's not a way to build the next air traffic control system. It's not something like that. You may use Agile in a bunch of little teams to build that air traffic control system, but Agile is not the over-arching management system. Agile is a small thing, for small teams, so it's one component of the set of disciplines that programmers are going to need in the coming years... But there are others. There's the whole notion of clean code in testing, and there's the whole notion of architectural boundaries, and clean architecture, and the book Clean Architecture...

So I've been writing this series as a kind of educational tools to inform programmers of what the future of programming ought to look like.

**Break:** \[00:43:19.18\]

**Adam Stacoviak:** Bob, in a section of your book called "Iron Cross" you mention this concept of Good, Fast, Cheap and Done, and that's the Iron Cross.

**Bob Martin:** Yes.

**Adam Stacoviak:** And then you talk about managers not understanding "the fundamental physics" of software projects... So when you say that, what do you mean by "the fundamental physics" of software projects? What are those?

**Bob Martin:** \[laughs\] This relates to the Iron Cross of project management, which is a fairly well-known concept in project management circles. It's Good, Fast, Cheap, Done - pick any three and you're not gonna get the fourth. And why can't you get the fourth? Well, because something needs to be managed; there needs to be room to manage something. If you could get all four of those, there's nothing to manage. So something has to be managed, and therefore you can't have all three.

Now, the real job of a good manager is to set the coefficients on all four of those. "How good does it need to be? How fast does it need to be done? How cheap, and how..." - how good, fast, cheap and done. Okay.

**Jerod Santo:** All four.

**Bob Martin:** So you set the coefficients on that. And this is one of the things that Agile tries to do by setting up this rhythm of every two weeks... Because you're starting to develop real features, and you can deploy those real features every two weeks, and you can measure how fast that's going. You can measure by just looking how much is getting done every two weeks; you can measure and develop what we call a velocity. And that velocity is probably gonna be really bad news. You're probably gonna look at the original schedule and realize the velocity is far too slow. And the good thing about Agile is that it tells you that early.

In some ways, Agile is a way of destroying hope, as early as possible. Get the hope out of the project, get the project down to reality. The reality is gonna be bad news, but at least we get that bad news early enough that we can then manage the situation. And you manage the situation maybe by changing dates, maybe by cutting features, maybe by adding staff... And you can do that early enough to make a difference. But if you get the bad news early enough, you can manage. Now, that's the fundamental physics, right? You can't have everything.

You can't ask programmers to come up with an estimate, and then expect them to hold that estimate, because no one knows; no one knows how long it takes to do software. No one knows how long it's going to take to do this project, and so you have to accept the Iron Cross, accept that you're going to be managing this by cutting something you want - cutting a feature, cutting a date, cutting a budget, or increasing a budget by adding staff... You're going to have to face that, because that's how you're gonna manage the project.

**Jerod Santo:** Let's talk about estimates a little bit, because as you said, nobody knows, and as somebody who's had a lot of wrong estimates in my life, I know very well... \[laughter\] I've been doing this long enough to know that I don't know, and I'll often say to people "Would you like me to lie to you in great detail, or vaguely?", because you're kind of on a sliding scale there. What is some advice for estimates? Because while we admit that it can't be accurate, and it's a shame that people take an estimate and turn it into a concrete, and hold you to it - that's unfortunate, but it happens - there's still things that we can do to have better estimates or worse estimates, and you have advice on this... So what have you learned in terms of estimation that you can give to us, and we can take it and say "Well, my estimates are better than they used to be, because I apply this strategy..."

**Bob Martin:** Of course. So the first thing to realize is why it's difficult to estimate software in particular. The example I like to use is how long does it take you to tie your shoes? Maybe it takes you ten seconds...

**Jerod Santo:** \[00:48:19.18\] Yeah. Five, ten...

**Bob Martin:** If you're good at it, ten seconds; okay, 10-15 seconds. And you don't even think about it, right? The motions are baked into your fingers. You just zip-zip-zip and they're tied. Now, estimate how long it would take you to write down the instructions for tying shoes, and make sure that a robot can execute. A moron, a computer-driven robot... And all of a sudden, you're looking at months' worth of work. Months. To try and get that done. Why? Because writing down the instructions of things is much harder than actually doing the things... And when programmers estimate, they estimate something and think "Well, you know, that sounds awful simple..." and they forget that they are trying to write down the programs for a moron to execute, for an automaton to execute. Very difficult.

Now, how do you improve your estimates? Well, first of all, you recognize that. You recognize that the way you're going to look at the problem is not estimable. It's not gonna give you the right number. So then the next thing you do is you say "Okay, because I don't know how to estimate, the best thing I can do is come up with some kind of probability range." And then you divide things up into ranges. I like to use three. This is an old technique called PERT from way back from the 1950's. Program Estimation and something Technique (PERT). What you do is you say "Okay, if everything goes the way it normally goes, how long would it take me to do this?", and you come up with some number. "Okay, I think if everything goes the way it normally goes, it's gonna take me three weeks." And then you come up with another number. This number is "If everything goes perfectly...", and to the extent that you have no fights with your significant other, and all of your co-workers are polite, and they don't bother you, and there aren't any meetings...

**Jerod Santo:** Best-case scenario.

**Bob Martin:** Yeah. And they call it the 5% scenario. This has a one-in-twenty chance of being right... "Okay, well maybe then I could get it done in two weeks." So you've got two for the best-case, three for the normal case, and then you do the worst-case scenario, which is the 95% case. So you've got a one-in-twenty chance that it could be this bad. And this is like "Everything goes wrong, short of nuclear war. It's just terrible." Everything goes wrong, and you're like "Well, then it might take me ten weeks."

So you've got this very interesting probability distribution - 2, 3 and 10. And that's usually the kind of curve that it really is... And you present that to management. Say "Okay guys, these are our numbers. It might be two, it's probably gonna be more like three, and it might be as bad as ten." No manager is gonna like that.

**Jerod Santo:** No.

**Bob Martin:** Because the managers want to push the risk back onto the programmers. They want the programmers to absorb the risk, and the programmers cannot absorb the risk. There's no way they can do that. So the programmers have to be honest with this probability distribution and face down the managers and say "Look, this is the risk. This is the risk profile, I can't do anything about it. Right now, these are the best data I can give you." This is extremely difficult for programmers to do. Managers will push back like crazy. They'll try something like "Well, can't you just deliver by a certain date?!"

**Adam Stacoviak:** And pound their fist.

**Bob Martin:** And the intimidation factor comes in, right...?

**Jerod Santo:** Yeah.

**Bob Martin:** And programmers are not trained in dealing with intimidation. "We didn't get into this business because we like people."

**Adam Stacoviak:** \[00:51:58.23\] \[laughs\]

**Bob Martin:** "We got into this business because...

**Jerod Santo:** "...we like computers!"

**Bob Martin:** "...we wanna have our heads down, writing code, and not have people bother us." So when a manager who is very good at manipulating people comes to a programmer, the programmer usually has no idea how to handle this. That's why I wrote "The Clean Coder." The book "The Clean Coder" is all about situations like this - how do you handle the fact that your manager is going to over-intimidate you? And the answer to that, in this case, is you have to stick to those numbers, and you have to avoid the traps. The traps are insidious. For example, your manager will come to you and say "Well, can you at least try?!" And the answer to that is "No. I am already trying. I can't try any more than I am. How dare you even insinuate that I am not trying?" You don't probably wanna say it that way, but... \[laughter\] But the way you think about it should be that way - "How dare this person insinuate that I am not trying now? These are the best numbers I can give you."

**Adam Stacoviak:** Yeah.

**Bob Martin:** I had this experience long ago. I was in a meeting with a bunch of managers and I was running a group. My group - I had met with a customer and I'd made some commitments to a customer, and they were reasonable and rational commitments; the poor customer had already been delayed long enough... And then I went into this meeting with a bunch of managers, and it was the typical kind of resource meeting. "Oh, we've gotta cut resources to go over here, we've got this problem over here... We've gotta take from there to go to here...", and these guys - I could see what they were doing. They were going to take some of my people.

And it was very reasonable, and very rational... And I literally threw a fit. And it's not something I normally do, but in that meeting I just got so angry. I said "Look, we have made promises to this guy for months. I told him we were gonna do this. You cannot take these people!", something to that effect. And all these managers looked at me with a very different kind of respect, and said "Well, you've made a good point there." Now, my point was entirely emotional. I didn't make a rational point, it was entirely emotional... But they accepted that. And that's when I learned that managers get to the truth. Managers are good people people; they know how to manipulate people. They get to the truth by testing your resolve, by testing your emotions. If they can drive you to an emotional confrontation, then they know "Oh, this is really the truth."

Programmers don't do that. Programmers get to the truth by doing the math. We're technical people, we don't want the emotion. The emotion bothers us. But managers want the emotion. That's how they get to the truth. I learned that a long time ago, and it's served me well.

**Jerod Santo:** So with a lot of these estimates that we're doing - a lot of times another aspect of Agile or these methodologies is the user stories.

**Bob Martin:** Yes.

**Jerod Santo:** And a lot of times when you're doing the estimate, you're doing it for a user story.

**Bob Martin:** Yes.

**Jerod Santo:** What I've found - and this is not even in other people, but in myself - is that the user stories themselves suck, and so it was really hard to estimate... Because I'm not good at writing user stories, and I'm sure there's other people like me, where you'll have two next to each other; one is a huge scope, one is a tiny thing... I don't really understand all that's implied. You have a lot of thoughts on user stories as well, including kind of a -- maybe not an Uncle Bob, maybe a Grandpa Bob idea about using physical index cars...

**Bob Martin:** \[laughs\]

**Jerod Santo:** So we wanna talk about user stories next, and why you want us to write the on actual paper. I mean, come on Bob, you're talking about software taking over the world. Do you want us to use pen and paper...?

**Bob Martin:** Yeah, well...

**Adam Stacoviak:** Back to the basics.

**Bob Martin:** \[00:55:55.18\] Everybody is tempted to use a tool, but the problem I have with tools is not the tools themselves. The tools are fine. The problem is that teams will go to the tool first. They'll say "Okay, what tool do we need to manage our user stories?" and they'll buy one. And then the tool will dominate them. The tool's rules will dominate them, and they won't learn how to do it by themselves. So the advice I give to people is first couple of months use index cards, and get good at it, and then you'll be able to pick the tool, and then you can dominate the tool. Because you'll already know how to do it, so you will force the tool into your way of doing it, rather than the tool forcing you in its way of doing it. So that's my problem with tools...

**Adam Stacoviak:** Yeah. That's why Scrum software and Agile software is so hard to even make, because there's so many different variations of Agile. XP, Scrum, Lean...

**Bob Martin:** Yeah, yeah.

**Adam Stacoviak:** There is not rule set, so creating software to do Agile is extremely hard, because there's so many ways to subscribe and unsubscribe from certain prescriptions of what we call Agile.

**Bob Martin:** Well, and then it's software, and software is a set of procedures. So the people who make the tools have a mindset of how the procedure ought to be followed, and that just carries into the tool and will dominate whatever team adopts the tool. You know this is happening when people use the name of the tool for the work they're doing. You know, "Have you written your JIRAs today?" That's an obvious clue that the tool is dominating.

So now the user stories - you said you're bad at writing user stories...

**Jerod Santo:** Yeah, how do you write a good user story?

**Bob Martin:** ...everybody is bad at writing it. Well, so first of all -- go ahead.

**Jerod Santo:** No, I just get the sense that I'm not the only one, that's why I'm okay. I'm okay admitting it, because I've seen some bad ones out there as well. I don't think it's easy to do well.

**Bob Martin:** It's not easy to do well, but one of the issues here is that you don't need to do it well. A user story should not have detail in it. A user story is a flashcard, it's a mnemonic...

**Jerod Santo:** But shouldn't it estimate required detail? I mean, I can do a better estimate with \[unintelligible 00:57:56.29\]

**Bob Martin:** Well, hang on...

**Jerod Santo:** Okay...

**Bob Martin:** Yes, but -- so I'm gonna have a conversation with the stakeholders. We're all in a meeting, we're having a conversation with stakeholders. We're talking about a feature, and we're talking about a way this feature out to work... And we'll be discussing it all. "Maybe it could do this, and maybe it could do that etc." We're not writing any of this down. This is way too early to write this stuff down. But what we do put eventually on a user story is a word, or two words, or three words, or something like that, that will remind us of this conversation. This is an old thing from Ron Jeffries, "A user story is a reminder of a conversation", and it's a reminder to continue a conversation.

**Jerod Santo:** Okay.

**Bob Martin:** Alright, so the words you put down on the user story aren't very important, except that they should restart the memory of the conversation. Then you put an estimate on the card. But the estimate has no units. It's just a number. So you look at the card and you go "Okay, that one's a three." And you put the number three down. Someone's gonna be like "Three what? Three days? Three hours? What?!" No, just three.

**Jerod Santo:** Isn't that arbitrary and meaningless?

**Bob Martin:** Entirely. It's entirely meaningless...

**Jerod Santo:** \[laughs\] Okay...

**Bob Martin:** But that's good. That's good.

**Adam Stacoviak:** We're driving to meaning, Jerod. We're driving to meaning.

**Jerod Santo:** Okay, take me on the road...

**Bob Martin:** So now comes the next story. A bunch of people are talking over, blah-blah-blah, and you put two or three words down on the card, and then you look at it and say "Well, that just feels like it's more complicated than that three. I betcha that's a five." And you put a five down on it and you're done.

And you keep doing it this way. The numbers are relative, they're not absolute. They're not naming an absolute time; they're just relative time. Not even relative time, they're relative feel.

**Jerod Santo:** Okay.

**Bob Martin:** It's very loosey-goosey. There's no science to this.

**Jerod Santo:** It's subjective.

**Bob Martin:** It's very subjective... Except that it's relative. And it turns out that people are much better at relative estimates than they are at absolute estimates.

**Jerod Santo:** Okay.

**Bob Martin:** \[00:59:59.13\] If I say "Well, you know, it took us six years to get to the Moon. How long do you think it's gonna take to get to Mars?" You could come up with a relative estimate, right?

**Jerod Santo:** "Longer than that..."

**Bob Martin:** "Oh, it's probably gonna be three decades." \[laughter\]

**Jerod Santo:** Those are the kinds of estimates I give. "This is harder/easier than the other thing."

**Adam Stacoviak:** Yeah.

**Bob Martin:** So that's the way that we deal with the cards... And then we say "Okay, these numbers on the cards - they're some kind of point value. Now, in a two-week iteration, how many of those points can you get done?" And the developers don't know; they come up with some number... They'll say "Oh, we think we can get 30 done." Well, they don't get 30 done. They get 12 done at the end of the iteration, at the end of the sprint, at the end of the two-week period... They get 12 done. "Ohh, we've failed horribly!" No, you haven't failed. Iterations never fail.

You cannot fail an iteration, because the purpose of an iteration is to produce data, and even getting nothing done is data. And that's data that goes to managers, and managers can use that to manage the project. So iterations never fail. There is no target for the iteration. That 12 number was just complete nonsense. It was a way for the stakeholders to pull out 12 months from the deck of cards and say "Well, try to get these 12 done", and then later on you come back and say "Well, we didn't get that many done."

**Adam Stacoviak:** Would you also say these estimates are to bring the team to the same page? Because I've been in estimates where we come out thinking -- for example, a story... We do our Scrum Poker -- or what's that called again? I forget what the name...

**Bob Martin:** Yeah, a Planning Poker.

**Adam Stacoviak:** A Planning Poker, that's it. Thank you. And I love the cards, the website... I think it's PlanningPoker.com, or something like that.

**Bob Martin:** Yeah.

**Adam Stacoviak:** We used to do this all the time. And everyone would anonymously put in there their number of what the story would be. So we'd say "Here's the story we're all estimating." Everyone would estimate it. And we'd essentially reveal the cards and the numbers... And it was cool, because you'd see like "Three, three, three, five, seven", or some crazy number, or something... There was always some outlier, and that person got to share why. And again, back to relativity - it was relative to other stories we already estimate, or we were planning to estimate; so they were all relative. And this whole process was less about defining the number, from my experience, and more about bringing the team to the same page.

So if one person thought it was a seven - okay, well, advocate for that. Why is it a seven? If you think it's a three, why is it a three? And somewhere we find ourselves actually sitting on a five. And it's not that it was five days, five hours, five heart points, whatever it was... It was more about getting to the same page, and being on the same playing field, and having a shared understanding of what we're trying to accomplish.

**Bob Martin:** Yes, yes. That's an old technique, it's called \[unintelligible 01:02:47.00\] It's basically the idea that a bunch of people make their estimates and then share about why they differ. And Planning Poker is a shortcut way of doing that, but a very powerful way of doing that. Now, you don't need to use cards; you can get those decks of Planning Poker cards, but I just like to use fingers. One, two, three. Everybody holds \[unintelligible 01:03:10.10\] throw up the number of fingers, and... "Yeah, okay, why did you have three when everybody else put up one?"

**Adam Stacoviak:** Well, now we have emojis.

**Jerod Santo:** That's right. Yup.

**Bob Martin:** \[laughs\] Little frowny faces. Oh, boy...

**Jerod Santo:** \[unintelligible 01:03:25.08\] angry.

**Adam Stacoviak:** But the point though is to bring everyone to the same page.

**Bob Martin:** Well, that's one of the points, yes.

**Adam Stacoviak:** Does that resonate with you, Jerod?

**Jerod Santo:** Does it resonate with me?

**Adam Stacoviak:** Right. Have you done Planning Poker like that, and is that answering the questions you're asking?

**Jerod Santo:** No... A lot of this kind of seems like a waste of time to me, but...

**Adam Stacoviak:** So I was of that opinion too, until we did it religiously for years. And again, it's back to producing data, shipping something, getting to some point to understand what we're trying to build and what we're all trying to go to, and it was about team cohersion... If that's a word; correct me if I'm wrong.

**Jerod Santo:** Cohesion.

**Bob Martin:** \[01:04:05.18\] Cohesion, yeah. Or coherence.

**Jerod Santo:** Yeah, exactly. Two words.

**Adam Stacoviak:** Yeah, coherence. It's about bringing the team together, and that was more the point. And I get that it seems loosey-goosey, doesn't really make sense, it's sort of very ephemeral, but actually, when practiced like that, it kept us together, and we were all together in what we were building.

**Bob Martin:** And you know, it seems loosey-goosey and it seems like it's almost vaporware... On the other hand, if you have a deck of story cards that total up to 200 points, and the team is getting 20 points per iteration done, you know it's gonna be about ten iterations.

**Adam Stacoviak:** Yeah.

**Bob Martin:** And managers can look at that and go "Oh. I can measure this."

**Adam Stacoviak:** Yeah. And you can measure even from sprint to sprint, and whatever. You can do your burn down charts, you can do all these different necessary tools that sort of like predict this data... But really, it's about being able to predictably predict the unpredictable.

**Bob Martin:** Predictably predict the unpredictable.

**Jerod Santo:** Yeah, which I don't think is possible. I don't think you can predict the unpredictable. And isn't this fodder for abuse from the management side? Like, "Well, it should be 20 iterations, and you're at 24, so you're not working hard enough." You said there's no failed iterations...

**Adam Stacoviak:** Absolutely.

**Jerod Santo:** ...but if I'm trying to estimate it off of an iteration, and you're way slower than you were before, isn't that an indicator to me?

**Bob Martin:** Well, it could be an indicator to you as a manager who doesn't know how to manage something, yes. But here we are giving you, Mr. Manager, these numbers and these tools, and this information, every two weeks, that you can use to manage this project. And if you turn that into a club to beat us, then we're just gonna lie to you.

**Adam Stacoviak:** Right.

**Jerod Santo:** How often do you think that happens?

**Bob Martin:** \[laughs\]

**Adam Stacoviak:** The alternative though in the waterfall world is what? Let's compare that scenario to the prior iterations.

**Jerod Santo:** Well, I'm not advocating for waterfall.

**Adam Stacoviak:** I know you're not, but I'm just saying... Sure, it seems like fodder, but what are the alternatives? The alternatives is misinformation, fabricated estimates, period, with no process to even somewhat estimate. And then no one gets to make good software. And then 10,000 people die because of a bad failed test, or something... \[laughter\]

**Bob Martin:** And it's the end of the world.

**Adam Stacoviak:** I don't know, that's what's written in his book. My example is because of his book, so I'm not being morbid here about it...

**Jerod Santo:** I get it, I get it...

**Adam Stacoviak:** ...but very serious though.

**Jerod Santo:** Yeah. Well, I mean, I think we could dispel of the estimates altogether and just move forward without the point system, and all of that, and just still pick the priority things, and still work in two-week iterations...

**Bob Martin:** People do that. They use a Kanban kind of approach, and it works just fine.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Which is why there's so many iterations of Agile too, because -- Bob, you can speak to this, too... That's why it's so difficult, I guess, to really understand Agile well, because there's so many different variations of it. It's almost like you can subscribe to some things, but unsubscribe from others, and everyone kind of does it a little differently. What I always thought of for us was that "Let's best understand what Agile asks us to deliver in terms of how to build a framework, and let's do the things that make sense for us and our teams (so they're adaptable), so it doesn't force us into a way of doing things that we're not comfortable with, but something that we can use as tooling to be a better team, deliver better estimations, understand what we're trying to build better, and let's pick and choose... But that's kind of what the downfall of it is, in a way, but also the good thing. It's both good and bad, because it's hard to follow, because so many people do it so differently.

**Bob Martin:** \[01:07:37.25\] One of the reasons I wrote the book was to reduce that variation down to a single set of disciplines again. So if you read Clean Agile, you'll see pretty much one way to do Agile. And somewhere in the book I say "Okay, now these rules can vary, and teams need to adjust them, but you have to be very careful how you adjust them." Because once you give people license to adjust them, they will adjust them out of existence. You can't allow that and still call it Agile. You can't still call it Agile if you say "Well, we don't believe in doing tests. We're just not gonna write tests." Well, that's not Agile anymore.

**Jerod Santo:** Right.

**Bob Martin:** Or "Our iteration is gonna be six months." What?! That's not Agile anymore. So there is some room for variation, and one of the variations that's a good one is the Kanban variation, where you give up on the whole point thing and just start moving stories, and you just count the number of stories. "Oh, we're getting somewhere between three and six done." That's good enough, for a lot of teams.

**Jerod Santo:** Yeah. Again, even with that side, the struggle is the stories tend to be not scoped the same. So on one side you have -- and I've seen tools where it's like "This is a bug. This is a chore. This is a feature." Well, that's not granular enough, because you might have a feature that's gonna take you half an hour, and a feature right next to it that's gonna take you three weeks. And it's like, "Well, they're both stories."

**Bob Martin:** That's one of the reasons for the points.

**Jerod Santo:** Yeah, I get it. I get it. Good point. Okay, well let's talk about one other small aspect, or maybe a tactical detail which it seems like a lot of people are getting wrong out there, just from my experience - stand-up meetings. Wrong in terms of not the way that you think about them in the book...

**Bob Martin:** \[laughs\]

**Jerod Santo:** Tell us about this... When I read this part of your book, I thought "Oh yeah, this is way more reasonable than what seems to be happening, which is stand-ups." Go ahead.

**Bob Martin:** The stand-up meeting - mostly it came from the Scrum work, and the Scrum work said "You know, there ought to be this meeting, the daily Scrum. And there's pigs and chickens...", and I won't go into that whole thing. The extreme programming people said "Well, you know, let's just have a meeting every day, and we'll call it the stand-up meeting because we stand up, so that the meeting is short. We don't let anybody sit down.

And somebody said "Well, we can shorten it by posing three questions." So everybody stands in a circle and they answer three questions - "What did you do yesterday? What do you think you're gonna do today? What's in your way?" And nobody says anything besides that. No discussions, no complaints, no nothing. Just those three things.

You can get the whole thing done in five minutes. And that's fine. Those meetings are fine. If you can pull those off once a day, that's great... Because they only last 5-10 minutes, and who cares...? The problem people have, however, is these meetings turn into big grumble fests, and they try to solve problems in them, and they go on for an hour-and-a-half, and it's just awful.

The other thing is that people become slaves to these meetings. Now, half the time you don't need them. You don't need to meet every day. If you've got a team of people working together, they already know what they're all working on, and they already know what the problems are... So maybe you say "Well, we'll do it every Wednesday", or maybe every other day, or something like that. There's no rule that says it has to be every day. No rule that says you actually have to do it at all. Maybe you do it once in an iteration.

**Adam Stacoviak:** Yeah, it's suggested, not \[unintelligible 01:11:03.29\]

**Bob Martin:** If the team is really good, if the team has really gelled, you hardly ever need to do those at all. They just happen kind of by themselves.

**Adam Stacoviak:** Would you say then that Agile is a maturing mechanism for teams? Because a less mature team wouldn't need the daily meetings, or the daily stand-up, so to speak. A more mature team, that works well together, that has communication beyond this meeting, understands. It's a maturing process, or a maturing-enabler, I suppose, for teams.

**Bob Martin:** Have you ever taken a martial art?

**Adam Stacoviak:** Yeah.

**Bob Martin:** Which one?

**Adam Stacoviak:** Karate.

**Bob Martin:** Karate, okay. So you start out as a white belt, and there's no flexibility. The instructor says, and you do. That's it. And you repeat it over and over again; if you're gonna do a strike, it's gonna be a strike exactly the same way, and the angle of your arm, the tension of your muscles is all tested. You have to do it the same way, over and over again. And as you rise through the belts, this persists. There's this one way, and the sensei will make sure you're doing it the one way.

\[01:12:08.24\] Then you become a black belt, and the rules change, immediately. Sensei says "How come you're following all these rules? You know all this stuff now. You know how to infer, you know how to deal with this... So now start inventing your own style, that's composed of all these things, but is not these things." That's what happens in a team. If you have a brand new team, and you tell them they're gonna do Agile, you'd better have them stick to the rules. They're white belts. But as they mature, they can look at those rules and maturely adjust them, and twist them and tweak them, so that they're better for their own purposes.

**Jerod Santo:** I like that.

**Adam Stacoviak:** So yes.

**Jerod Santo:** So yes... \[laughs\]

**Adam Stacoviak:** So yes...

**Bob Martin:** \[laughs\] So yes.

**Jerod Santo:** The answer to the question, Bob... It was a yes/no question.

**Adam Stacoviak:** \[unintelligible 01:12:55.10\] So yes. \[laughter\]

**Jerod Santo:** One last train of thought. We were talking about bringing teams together... You talk about colocation in this book, and you say "A team composed of people who work almost entirely from home will never work as well as a team that is collocated", and yet we see the movement in our industry away from colocation and towards more remote teams. Does this worry you? Do you think we'll figure it out?

**Bob Martin:** It worries me to some extent. Now, I have worked on remote teams, and they can work just fine. But I've also worked on collocated teams, and there's just nothing like it. If you are with a group of people, in the same space, looking at each other in the eye, smelling each other's fear, you see all the body language, you see all the funny, little eye gestures and faces that people make, and there is this gelling that occurs in that kind of environment which cannot occur in a remote environment. Now, that doesn't mean the remote environment can't work. It can. It's just going to be less effective. That's really all.

A very wise person once said "If you can't have a collocated space, at least have a collocated mind space." If everybody is sharing the same mindset, the same ideas, the same vision, the same values, then at least you've got something tying that group of people together.

**Jerod Santo:** Yeah, because it seems like the other side of non-collocation is that while it is less of a benefit for the team, it seems like in many cases it's a huge benefit for the individuals on that team, because it allows them to live a lifestyle that's healthier and better in many, many ways.

**Bob Martin:** I cannot deny that. Having been on a remote team, I understand that very well.

**Adam Stacoviak:** I think with all things like this though there's always trade-offs. There's always gonna be good things and bad things for either side, and I think it really comes down to what you're trying to do; if some of the culture you're trying to do is face-to-face people, like if you're a face-to-face kind of company/organization, then it would make sense to have collocated spaces. If you're less concerned and you're more pro the benefits of a distributed team, having your own lifestyle, having your own schedule, whatever those are, then you're obviously gonna see success in those areas because that's what you thrive in. There's always trade-offs, whether it's in-person or not in-person.

**Bob Martin:** \[01:15:37.05\] Yup. That's certainly true. It's easier to get the people you want if you don't have to locate them together.

**Jerod Santo:** For sure.

**Bob Martin:** It's easier to find talent... There is an immense amount of talent that cannot come to work. And in our industry, tapping that talent is really valuable.

**Adam Stacoviak:** What do you have to say then to hybrid teams, where you have collocated and distributed in the same team set.

**Bob Martin:** The people who are collocated will always have an advantage over the people who are distributed. And the people who are distributed will tend to take the less collaborative tasks, and the collocated people will tend to take the more collaborative tasks. There's gonna be stress when it comes to salary review time, because the value of the collocated people is probably going to be seen as higher than the value of the distributed folks. That's just a fact of life.

**Adam Stacoviak:** Yeah. I've experienced that.

**Bob Martin:** Yeah. But you know, if you've got a good collocated team and there's some really good talent out there, that's half a continent away, and you want that talent, I'd go for it. I wouldn't force that to be a totally collocated team.

**Adam Stacoviak:** I think it also depends on what you've just said there, basically. If you're aware of those trade-offs, if you're aware that there is gonna be seemingly more value in the people that are collocated, or some perception of this - if you're aware of this offset (for a lack of better terms), then you can operate around it. Or as you mentioned, have a shared mindset.

**Bob Martin:** Yeah.

**Adam Stacoviak:** Even if you're collocated, act distributed.

**Bob Martin:** \[laughs\]

**Adam Stacoviak:** Have digital communications.

**Bob Martin:** Even if you're collocated, act distributed... Well, you'd have to do that, to some extent.

**Jerod Santo:** What do you mean by that?

**Bob Martin:** You'd wanna use chat more, and you'd wanna have \[unintelligible 01:17:35.23\] more.

**Adam Stacoviak:** For example, don't have in-person meetings without others. In-person meetings are on Zoom, even if you're collocated.

**Jerod Santo:** That's weird though.

**Adam Stacoviak:** I'm not saying they're right or wrong, I'm just saying that that's how you include -- you have to include the people that are not in the collocation. So you have to find a way to merge, and act--

**Bob Martin:** I understand that... It's just that you're gonna have a couple of guys go out to lunch and they're gonna solve a problem while they're out to lunch.

**Adam Stacoviak:** And that's fine. That's fine. Impromptu meetings - they happen. But deliberate meetings - you should be inviting and including them, too.

**Bob Martin:** Yeah, yeah.

**Adam Stacoviak:** That's all I'm saying. It's like -- you're gonna have that. It's natural. It's a natural benefit and artifact of being in-person. You're gonna have happenstance conversations that solve problems, and that's okay.

**Bob Martin:** Sure.

**Adam Stacoviak:** And that's a trade-off. That's something to be aware of. If you're that person who's distributed, you should understand that that's gonna be an effect, that's gonna be something that happens with collocated people.

**Bob Martin:** Yeah, I agree.

**Jerod Santo:** Well, the book is called "Clean Agile: Back to Basics." In his own words, "The grumblings of a curmudgeon telling all those newfangled kids to get off his lawn." If that intrigued you, if this conversation intrigued you, definitely check out Bob's new book. Bob, we're honored to have you here. Thanks so much for sitting down and chatting with us.

**Bob Martin:** Thank you for inviting me. It's been a fun talk.

**Adam Stacoviak:** Thanks, Bob.
