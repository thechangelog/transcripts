**Jerod Santo:** We have quite a treat today... We're joined by both of the Pragmatic Programmers, Andy Hunt and Dave Thomas. Guys, thanks so much for sitting down and talking with us.

**Andy Hunt:** Thanks for having us!

**Jerod Santo:** So we're here to celebrate, and we're here to talk about a brand new edition of the classic The Pragmatic Programmer. The first edition - 20 years ago, October 1999. The new edition out in beta and eBook format now, printing in hardcover later this year, your journey to mastery. 20 years later, most technology books - their half-life is very short. In fact, they're kind of some of the most perishable goods; write a book on technology and you'll be editing it non-stop... But it took you 20 years for a second edition; how has this book stood the test of time?

**Dave Thomas:** Firstly, I'd say The Pragmatic Programmer is probably not really a book on technology per se. If I had to say what it was, it's a book on people, and people haven't changed that much. Expectations have changed, but the actual way people do things - I mean, that really hasn't changed for thousands of years; we're just as bad now as we were then, and that's just the way it is.

The content definitely has to be updated, because we had examples in there that make really no sense, unless you're into software archaeology... So we definitely had to update a lot of the code and a lot of the references we've made. But the biggest updates weren't because of the changes in technology, they were because of the changes in our experience... So that over the last 20 years we've explained the content of the book many times over, to different people, and as we've done that, we've discovered better ways of explaining things.

We've also looked at the reaction to various parts of the book, and discovered that we weren't really communicating as well as we thought we were some of the ideas that we had. A classic one is DRY. DRY has come to mean "Don't cut and paste", but the original "Don't repeat yourself" was nothing to do with code, it was to do with knowledge. So we've had to go through and update that...

Also, there's been changes in the way that the industry works. We are doing far more in terms of cloud type stuff, concurrency is now everybody's problem... So we've had to address those new areas as well.

**Andy Hunt:** \[00:04:06.11\] You have to sort of go back and put yourself into what the world was like 20 years ago, because certainly when we first took on this latest adventure, it's like "Oh, we'll just go through and change a couple of the technological references, and we'll beef up some of the things that we've had more experience with... But it won't be that different." And you go back and you read it and then you start to remember your friends at the time, your clients at the time, what you were working on, and you really start to realize what a different world it was 20 years ago. AOL was carpet-bombing people with CD's, trying to get you to dial-up, this sort of thing.

We didn't have anything in there talking about security, trying to fight against bad actors, because at the time it was sort of just a struggle to get your code to work; you didn't really have to worry specifically about it being attacked, for the most part... And now that's kind of step one.

A lot of things that we promoted and pushed were still very brand new at the time. We were talking a lot about insisting that you do unit testing, and that's part of the safety net that holds you up... But at the time, that wasn't really widely accepted, it wasn't as widely practiced, so we had advice in there saying "Go off and build your own unit testing framework for your favorite language, so you'll have it available...", which is kind of hilarious now, because now "No! Do not do that! That's a terrible idea." It was a great idea then, but times have changed now; that's ubiquitous, it's everywhere, so don't reinvent the wheel.

Some things like that changed, I certainly think for the better, where advice that we gave out, things that we were pushing, we were promoting, have become commonplace, have become widely accepted... So that's kind of heartening, on the one hand.

**Dave Thomas:** And the other thing to remember is that back when this was first written ('98-'99), that was before the snowboard meeting that kicked off the Agile movement \[unintelligible 00:06:08.15\] We were part of that, but it hadn't happened yet, and a lot of the vocabulary that has come to become common nowadays was formed by that movement. We've had the opportunity to simplify some explanations in light of the fact that stuff that we were talking about has now become commonplace as part of the various different agile ways of doing things.

**Adam Stacoviak:** Well, speaking of commonplace, one of the things that was not really commonplace at the time of the original launch was even Google. It was just barely out. And to be a programmer today, Google is your best friend, right? Find the answer if you've hit a wall. Even then, when you wrote the book, Google was barely even in the day-to-day lives.

**Andy Hunt:** We were using Altavista a lot, and a couple of the other early players... And again, it's funny, if you go back and read the original, there's almost this idea of breathless excitement about the Internet (capital I); "You can download all these languages, you can get help online from people, there's these communities... It's The Internet!" And again, it's really kind of like going back in time and reading some of this, going "Wow!" Because that was brand new, and exciting, and interesting... And now it's ubiquitous.

**Dave Thomas:** One of the exercise we had in the chapter on estimation was to calculate how long it would take to send -- I can't remember what it was... Like 10 MB, over a 9,600 \[unintelligible 00:07:45.01\]

**Jerod Santo:** Oh, man... That's probably harder to answer now.

**Dave Thomas:** It probably is, yeah. First, find \[unintelligible 00:07:50.11\]

**Jerod Santo:** \[00:07:54.01\] Exactly. One of the things you say in the preface, speaking to this - the things that have changed - you say that if you take a developer from 1999 and drop them into a team today, they'd struggle in this strange, new world... And that got me thinking, is there anything that you two struggle with in the strange, new world? And if not, how have you managed to keep up with the pace of change?

**Andy Hunt:** Well, everything, every day. It's funny, anytime I go out and give a conference talk, I always throw in a joke that "Well, it's Wednesday. That means there've been 47 new Javascript frameworks that came out this morning", and invariably, the whole crowd laughs nervously, because that's not far off...

**Jerod Santo:** \[laughs\] The nervous laughter.

**Andy Hunt:** The nervous laughter, yeah. On the one hand, it's kind of a fire hose, just the amount of ideas and attempts and things people are trying and doing... So it's kind of cool that we have that level of experimentation going on, and people trying to find new ways to express things, and better ways to approach problem-solving with different attitudes towards frameworks and approaches... But on the other hand, trying to keep up is difficult.

**Dave Thomas:** I don't see it as even just necessarily keeping up; I think that the actual rate of change -- people have become accustomed, almost like adrenaline junkies, to the rate of change, and kind of want to see it... And as a result, what happens is that a lot of stuff gets developed - new frameworks, new libraries, new techniques... It never quite gets fully there. And as a result, you're constantly dealing with stuff that is almost working, or that almost integrates into other things. And what that means is as a developer you're trying to do something which is difficult in the first place. You're trying to basically build a watch from component parts, and now you're being asked to do it while riding on a surfboard. I struggle with that a lot.

Right now, for example, I teach a class on programming languages at a local university, and I've been putting together some material using PEG parsers, and generating interpreters, and stuff like that... And I've probably wasted 2-3 days this last couple of weeks switching back and forth between Javascript and Typescript, and I even had a little go at OCaml, until I could find some combination of things that would actually work with all the various libraries that I wanted to work with. It was just ugly... And my heart goes out to developers nowadays, that you have to keep track of all that stuff. In a way, I think the best thing we can do for the world of developers right now would be to say "Okay, stop. Everybody, stop the madness. Let's just sit and breathe for a while, and write code using what we've got. And then let's not come up with the next big alternative to React, or others..."

**Jerod Santo:** Kind of like a feature freeze on all programming.

**Andy Hunt:** On the world... \[laughter\]

**Dave Thomas:** The problem is, like I said, people love to think that they can do it better. I mean, I know I have that problem... So they go out and they create something which is addressing the one particular \[unintelligible 00:11:15.04\] in something else, and ignoring all of the other smart decisions that went into that original thing. Then they release that as the solution to this problem, and then people adopt that, but it's missing other things, so then they go and they write their own version, which has those things... It goes on and on and on, and it never actually gets resolved.

I just feel that we are too willing to hope that there is a silver bullet out there. It's 40-50 years old, and there are no silver bullets.

**Adam Stacoviak:** Isn't that the name of progress to some degree though? You almost have to sacrifice a bunch of bad decisions to make a good decision.

**Dave Thomas:** \[00:12:01.03\] Yeah, to a point. But once those bad decisions are actually stopping you going forward, then you're into the negative territory. If we were to make bad decisions more slowly, then we'd be able to make more progress, that's what I'm saying. I'm all for experimenting, I'm just saying we don't always have to be using the cutting edge of everything, every time we write a piece of code.

**Andy Hunt:** Again, it comes down to context. A lot of the times boring is great. There's some applications, some things out there... The thing that's driving my pacemaker, my MRI machine, whatever - I'd like that to be built with pretty boring tech; something very stable, that's been around forever, no surprises. I do not want last Wednesday's Javascript framework involved in that.

**Adam Stacoviak:** \[laughs\] Unless it's a web view of stats, or something.

**Andy Hunt:** Right, right. Something non-critical.

**Jerod Santo:** Read-only.

**Andy Hunt:** Even that will probably crash on you, but...

**Adam Stacoviak:** Yeah.

**Andy Hunt:** Boring has its place. An underlying message we strive to talk about in the book a lot in the book is this importance of context. You can't say "You should always use boring." I would love ot say "Freeze the world, don't make any changes", but you really can't. You can't say "Always use boring", you can't say "Always use cutting edge." It just depends. It totally depends on the context, and that's something we tend to be a little tone-deaf to. We wanna use the latest shiny, because it's exciting and it's fun; "Hey, let's use it on this project, with this set of hapless users, and they'll never know what hit them."

**Jerod Santo:** One piece of advice that I've heard and I tried, and I think it has some legs, is that when it comes time to pick a tool or pick technologies for a particular task, and you wanna have some sort of progress, but you don't wanna go all-in, is let's say there's eight components that you need to pull in; seven of them, choose boring. Choose the one you've used before, it's a known quantity etc. And then mix in one thing that's shiny, or new, or different, but also is kind of a control case for you to actually test that one thing, versus "I've just decided to pick seven new technologies and I don't know what I'm doing."

Sometimes a little bit of that... Moderation, I guess, goes a long way.

**Andy Hunt:** And in general, you only wanna change one thing at a time, right? If you're debugging, you're not gonna change five different lines of code, swap in a new library and cross-compile it to a different target. "Well, let's see if the bug is there now." You have no idea what's going on if you do that sort of thing. Change one thing, see what happens.

**Dave Thomas:** When you teach kids to climb, you always say the rule of three, right? You only ever more one hand, one foot, and that way you've already got three other things holding on. I think it's the same with software.

**Adam Stacoviak:** I practice that same principle getting out of the bathtub. \[laughter\]

**Dave Thomas:** Yeah, I saw that video.

**Adam Stacoviak:** It's surprisingly very good with bathtubs, as well as climbing... Because a lot of people slip and fall, and break something, and I don't wanna be that person.

**Dave Thomas:** There you go.

**Adam Stacoviak:** Speaking of this book in particular, this came from experiences, right? You guys have been in the software business for a very long time. This book actually came from your experiences that I assume you wanted to preach to other software developers, to make them better software developers, by way of the experiences you have with your clients.

**Andy Hunt:** Yes, but I wouldn't say -- we try not to preach. It was more a case of we were out there, working in the trenches, working in the field, working alongside with folks, and what both Dave and I noticed, going from client to client, different company to different company, large to small, people were making the same classes of mistakes. They were doing the same things, looking at the wrong end of the telescope, and suffering in the same ways.

\[00:16:01.28\] The original idea was that we were just gonna write a little whitepaper of the things that we'd observed. It's like "You know, it hurts less if you do it this way. Try to bear this in mind." But of course, you can't just come out and tell people "Brush your teeth" and "Eat your broccoli", or this kind of exercise.

**Dave Thomas:** You always get that the wrong way around.

**Andy Hunt:** I always do. I usually do "Eat your broccoli" and "Brush your teeth", which is out of order...

**Adam Stacoviak:** \[laughs\]

**Andy Hunt:** You know, you can't just come out and tell people "Eat less and run more. Diet and exercise." You have to be a little more circumspect about it. So we came up with this sort of set of little stories, anecdotes, metaphors, ways we would explain things to people that would kind of help get it in there and help them understand "Oh, okay, I see what you're talking about. It's not just iterative and incremental. Oh, it's a tracer bullet. I understand that", or whatever it might be.

Just in talking to clients, we had started accumulating these little stories, anecdotes, metaphors and so on, and we felt "This would be okay. We'll just write some of them down, just to save us some time going into a new client. We can just give them this little brief and say "Start with this", and then by the time we get there, we've got more of a common vocabulary, we can talk about some of these issues better."

Unlike any software project ever, that little idea of a whitepaper grew into a larger project, and that became The Pragmatic Programmer book.

**Adam Stacoviak:** Let me go a little deeper to then into the differences, I would say. We're 20 years later, you're still in the software business; not much has probably changed about the two of you... I mean, it's part of the question, really - what are the differences in the last two decades? 20 years in software is like -- I don't know... Do we compare it to the dog years? Is it times seven? What's the multiple there? It's a lot.

**Andy Hunt:** Yeah, it's a big multiple.

**Adam Stacoviak:** There's a lot of progress. What's changed in 20 years?

**Andy Hunt:** Everything and nothing, to be flip about it... And Dave can certainly go and tell you something about the -- I think there's a fundamental shift of attitudes... I was really struck when we came back and looked at the original Prag Prog at how object-oriented centric it was... Because if you'd ask me, I wouldn't have remembered that "Oh yes, that was very much kind of an OO style sort of a book", but it really was. Most of the architectural and design tips were at least OO-flavored, if not overtly "This only works in an OO-style system." So there was a lot of that, a lot of examples... I thought it was kind of interesting - it used iteration, it used for loops. Because that was a convenient pedagogical technique to talk about invariance, or this or that, or whatever we were discussing... And you look at that sort of thing now, and it's like "Well, people don't really do that anymore." You don't use a raw for loop, you're using a list comprehension, or an iterator, or something.

So there's definitely a lot of that, attitudes and approaches that changed. Moving stuff to the cloud - big change. We would talk about the build machine sitting in the corner... Which some people still have, bless their hearts... But that right there is a really big shift, of having build machines that are just fungible resources, off somewhere else. Spot instances, on demand. You can say that in one sentence and that's kind of a small change, but that really engenders a sea-change of attitudes of how you approach deployment, how fast you can deploy, what your restrictions are... It really opens up a whole different world.

**Dave Thomas:** \[00:19:53.27\] I think it's funny that a man originally born in Connecticut - or was it New York? Whatever... - has been living in the South long enough that he can say "Bless their hearts." \[laughter\] It's a nice touch.

**Jerod Santo:** It is nice.

**Dave Thomas:** I think the other thing that's changed is -- like I said, people haven't changed, but people's sensibilities have. I think that we have seen with the increasingly pervasive impact of computer technology on our lives that the responsibility that's been put on developers to behave ethically has increased dramatically. In the old days, you wrote code and it ran on a mainframe, or maybe it ran on a PC, or possibly even on a web server, but it would be kind of boring, old code that did some business function. Now you're writing code that can change people's lives, that can kill people if it goes wrong. As a result, we need to think a lot harder about the impact of the code we write... So we have tried, throughout the book, both implicitly and explicitly, to tell people "You've gotta be more conscious of what's happening to the code that you write."

At the end we talk about "Don't enable scumbags." I hope that doesn't get beeped...

**Jerod Santo:** No.

**Dave Thomas:** But it's true. It is possible to write software which is used for some very, very bad things, and we wanna be thinking about that... Because really, the community of software developers, we're in a position which is pretty unique. We can and we are changing the world, and the world that we create is largely up to us. I mean, yeah, people are gonna tell us what they want, but we have the power to say yes or no... And we need to be thinking very hard, "Is the software that they're wanting me to write going to harm other people?" And if so, are you prepared to take that in on your conscience?

**Break:** \[00:22:08.03\]

**Jerod Santo:** Do you two still work together, beyond just writing the book?

**Dave Thomas:** Sort of, is the answer. Andy is still running \[unintelligible 00:23:35.14\] I kind of retired into gentile a year or so ago.

**Jerod Santo:** Gotcha.

**Dave Thomas:** But we interact. It's actually been quite fun - doing this book has been an excuse to work together again for a while... And it's actually kind of nice, after a break, to go back and work with someone you've worked with for a long time, because you can still use the shorthand. You don't worry about all the kind of day-to-day stuff that normally gets in the way.

**Andy Hunt:** \[00:24:08.06\] It was funny, when we first decided that we should take a serious look at redoing this edition of the pragmatic programmer, we each went off and made a list of - to answer your question - what were the biggest changes over the last 20 years? What are the things we should address? What topics did we feel we should drop, which ones should we revisit a little stronger? And when we came back and compared our lists, they were 75%-80% the same. So we started off definitely on the same page.

**Jerod Santo:** So we've talked about what changed the most... I was thinking about your book in terms of churn and in terms of diffs, because you have the two versions - you can run a diffing tool against them and see what's changed, what's new, and maybe interestingly, what hasn't changed; the most timeless of things that you wrote 20 years ago... What are those things that still stand as true today as they were when you first penned them, 20 years ago?

**Dave Thomas:** Yeah, we did actually write a diffing tool. It's not quite as easy as doing a git-diff, because we moved from using LaTeX to using Markdown on the second edition... But we wrote a quick tool that basically did a -- what is it called...? Co-sign, whatever comparison, on a paragraph by paragraph basis, to see what had changed... And the answer is about 75% of the paragraphs have changed.

**Jerod Santo:** 75%, is that what you said?

**Dave Thomas:** Yeah, 75%... And by change, I don't just mean a small typo fix, or something...

**Jerod Santo:** Rewritten...

**Dave Thomas:** Well, it's kind of like enough wording has changed to reach the threshold of my diff.

**Jerod Santo:** Gotcha.

**Dave Thomas:** About 30% of the tips are brand new; they weren't even in the original book. And probably at least half of the remaining tips have been rewritten. So probably only about a third of the tips escaped with just a kind of light dusting. But the things that haven't changed really are the fundamental human things: communication, working with people and trying to work out what they want, and why that's not always easy. All those kinds of things I don't think will ever change, until we get mind-melding... It's pretty easy to predict actually which ones would change the most.

**Andy Hunt:** And again, you can go back to Fred Brooks' book The Mythical Man-Month, and it's all talking about the IBM mainframes, and languages and technologies we don't use anymore... But if you went through and did a Search and Replace with some more modern tech stack, it would read as fresh today as it did 40 years ago... Because again, it's people problems, and we haven't changed. These are still the things that we're facing... But we have this kind of -- Dave was talking before about this adrenaline junkie aspect of our workflow; we want the shiny, new thing... So we have this kind of amnesia in the industry, that "Oh, surely, we've solved all those people problems. We've got JIRA, we've got agile techniques. We don't have people problems anymore", and you just kind of skate over it. It's like "No... It doesn't work that way." You still have these issues, and you still have to learn how to work around them, and learn how to work with people and get things done.

**Adam Stacoviak:** How do you feel about empathy in today's workplace? I feel like in the last 20 years that's the thing that separated most. Before we were far more collocated, working together, and over the last 20 years we've been separated more and more. Now we use things like Zoom, or Skype, or Slack, or whatever might still be cool to communicate... And the ability to have a face-to-face, person-to-person interaction is lost, and therefore it's hard to empathize.

**Dave Thomas:** \[00:28:01.01\] I think that's a really astute thing, and it's not just in the workplace. If I look at my kids, I would say the majority of their interactions with their friends are online. Yeah, they see them sometimes, but most of the time they'll be sitting there chatting with them online somehow. And yeah, I think that does actually impact everybody's empathy; not just developers', but the entire world, as we move away from face-to-face, and reading body language... Basically, just sitting quietly with people.

I think that definitely impacts the world, and it could be the reason we're seeing a more aggressive apparent society than we have for a long time.

**Adam Stacoviak:** I looked on your table of contents, and you mentioned that a lot of the things cover is people problems... But not a lot of the titles of these sections really describe what I might find as people problems.

**Dave Thomas:** The thing there is that the symptom is not expressed as a people problem, but the cause is. With many of the tips, if you actually go into them, what you'll find is - yeah, we'll talk about, and there's definitely very technical tips in there, but in a lot of them we'll be talking about how... For example, the section on naming things; it actually talked about research that says about the idea that the names that you give things actually changes the way you think about them. That's a people problem, right? And the idea of naming is incredibly important. The idea of clarity -- not just clarity when you're naming them, but clarity that helps you think about things better. That's a people problem.

It's all to do with various psychology and physiology and other kind of -ologies that are to do with our failings as human beings... Or maybe that's not the right word; not failings. Maybe our ambiguities and our weaknesses.

**Jerod Santo:** I'm still back on the amnesia bit myself, and Andy, I was just curious if you have thoughts on how we solve these problems... Because we do have this issue in our industry where there's a lot of wheel reinvention; sometimes it's experimental, in the name of progress, but a lot of times it's making the same mistakes as people that have gone before us. Obviously, you can write a book. That's one way you can pass on knowledge, but how else do we either institutionalize, or community-ize into our culture the passing on of the knowledge from those who've come before us, so that we stop making the same problems, and we can go out and make some different problems?

**Andy Hunt:** That's a really good question, and I wish I had a glib answer to say "Oh, just do X, Y, Z." It's sort of endemic to the way that we work that we kind of throw out the old code, throw out the old compiler, the old language. No one's using Turbo Pascal these days, I notice; that's been a few decades... We have such a constant drive to write code faster, provide more functionality, more quickly, use new technology, follow the latest chips, the latest whatever... There's such a pervasive drive for new, new, new, that people really aren't in the habit of digging through old memory management theses or dissertations, and seeing what people came up with before that was useful. Sometimes they do, and you'll see an article on Hacker News or Reddit or something where somebody dug back and found some gem that had been overlooked, applied it into a modern context, and wow - here's this new, cool thing. Well, it's not new; it goes back when.

**Jerod Santo:** Right.

**Andy Hunt:** \[00:32:04.20\] In quite a few places in the book we point out that this idea came from Simula, in 1967, or this idea came from this other place, way back when... We don't have a good sense of history. I like to lay blame for a lot of our issues at the college or university level; that may or may not be fair, but that's where I put it... Because it is rare to find a history of computing class that would teach you how the ideas came to be, and who worked on what.

**Dave Thomas:** I don't think this should a separate class. What we do is we write software, and just like poets and authors, we start with a blank page and we create something from it. Now, if you want to become an author, I would suggest that one of the things that you do from age four is...

**Jerod Santo:** Read.

**Dave Thomas:** You read, yeah. You read, and you read, and that I think is incredibly important to the ability to write. You see tricks; the more you read, the more you understand how people are organizing their thoughts on paper, and everything else. Now, I'm not talking about developers reading books here. I'm talking about developers reading code, and trying to read a variety of code. So they go back and they look at code written in different languages, and try to work out how that works, why that works, why does it work the way it works. So I would like to see the idea of teaching tied into this idea of learning how people did things in the past, reading their code, and then discussing, "Okay, why did that happen?"

I'll give a good example - why did C++ have the pre and post-increment operators? ++ and --. The reason - it's kind of weird. The fact that you can write \[unintelligible 00:34:10.25\] which takes a character point and dereferences it to return the character, and then increments it by one. Well, the reason is that the machines in Bell Labs - there are PDPs, and the PDP has seven different addressing modes, and two of them are pre and post-increment address dereference... So that maps directly onto the hardware. And it's like "Oh, okay... So that's why it's there."

Then you can ask yourself, "Okay, is there something I really need to think about going forward? Do I need that online, or is it just a convenience that happened to be there?"

**Jerod Santo:** Yeah.

**Dave Thomas:** Same with Go To Considered Harmful. You have to understand -- people would quote Go To Considered Harmful, and entire languages are being written without Go To, based on the title of that paper. But the title of that paper actually wasn't the title of that paper, it was a letter written to the CACM. The original title was something totally different, and the editors changed it to "Go To Considered Harmful", because it was more sexy as a title.

**Andy Hunt:** Clickbaity. That's the word you want.

**Dave Thomas:** Yeah. And the actual context of Go To Considered Harmful as a letter is actually to do with program proving. The fact that if you have a Go To statement, it is really hard to write proofs of programs. And back then, the idea was that we should be able to mathematically prove our programs correct. There were people who spent their entire careers working on program proving. Now, we still have that in some very restricted domains, like logic design, but that is no longer relevant to us... And yet, we still carry around all of these things that we've received based on headlines - Go To Considered Harmful, post-increment - and don't really know why we do it.

**Jerod Santo:** \[00:36:07.26\] Here's one that I learned - globals are evil. Global variables are evil, but it's almost like a cargo cult; I never learned why. It's just like a maxim; it's just like "This is true..."

**Dave Thomas:** You should read our book.

**Andy Hunt:** We have a whole section on that... But let me get back to that for a second, talking about the Go To, and these old letters and old articles and old addresses. We pick up the wrong ones. We capitalized on Go To Considered Harmful and made a thing out of that, but what about -- was it Dijkstra who had the Turing Award lecture about the very humble programmer? That is a critical piece of early literature... And you talk about things that haven't changed. This was 1972...? Somebody can google it while I'm rambling... And he makes the very important point that complexity will overwhelm us if we don't take a very humble, very measured approach. And it's been 30-40 years and everyone - present company included - has ignored this wonderful advice. Humility is difficult in our environment, in our culture, and it is probably, of all the human factorsy things that you need to be a good developer, I would submit that being humble, realizing you don't know all the answers, that you need to find out, that you need to experiment, get feedback, try it.

This part of our headlong rush into the shiny new thing is this kind of faith that "Well, that's gonna be better. I can do it better. I'm better than this/that." Yeah, maybe... But you should validate that. You should try it. You should go back and read these things. You should try these other experiments.

**Adam Stacoviak:** Well, if they don't read a book like you've written here, where will people get this kind of wisdom? This sort of history, I would even say this reverence for the history - where does somebody learn that in today's world?

**Andy Hunt:** A mentor. Somebody in their company, someone they know who's older, experienced, been around, is aware of this sort of oral history. And that's a rare thing; that's kind of hard to find out there.

**Dave Thomas:** I think there's another way too, which is we have the entire world available to us now, thanks to the Internet (upper case I). That means that we've also got opportunities to play with things that we never used to have. So if you are motivated and if you're curious, you can go back and you can actually get a copy of a Simula compiler, and run it on your local machine.

For this course I'm giving, I was looking for a PDP-11 emulator, so we'd all be able to write some PDP-11 assembler... And I've found one that actually runs in the browser.

**Jerod Santo:** Nice.

**Dave Thomas:** It's written in Javascript, and it actually emulates a PDP-11/70 in my browser, and you have to slow it down, because by default, it would run faster than a PDP-11/70 would, running in my browser.

**Adam Stacoviak:** Hah! That's funny.

**Dave Thomas:** Yeah. The things you can do to research history - it's phenomenal. If you wanted to go back and have a look at Turing, and have a look at the stuff \[unintelligible 00:39:32.19\] and all those kind of stuff - it's just... It's there, and you can play with it, but people don't. People are always looking forward, never looking back.

**Jerod Santo:** Well, I agree with you. I feel like a lot of us just wanna have some work. A lot of us just wanna become functional programmers, so we can get a job, and then we're busy with our job.

**Dave Thomas:** \[00:40:00.04\] And you've gotta start with that, but it's that old saying about chopping down all the trees - first you have to sharpen the axe, right? So one of the important things - and we mentioned this a little in the book - is you have to set aside time to sharpen your axe, to improve your knowledge portfolio and sharpen your skills. It doesn't come for free. You can't just go to college or university, or go to a code bootcamp and "Now I know everything." It's not like the matrix, where you stick the jack in your head and "Boom! I know jiu-jitsu."

**Jerod Santo:** Someday...

**Andy Hunt:** That's a great start, and you can start getting work that way, but it's an ongoing, continual process. You have to make the commitment to always be learning, to always learn something.

**Dave Thomas:** If you think about, say, a jazz pianist. A jazz pianist probably started off learning to play the piano by reading music and basically copying what was there on the page. So you would sit there and you'd play "Mary had a little lamb", and then get more and more complicated. And there are still musicians who are incredibly good musicians, who fundamentally sight-read, and memorize a piece and they can play a piece, and whatever. But if you wanna be a jazz musician, that's not good enough. You have to understand the theory of what you're doing.

It's really staggering to me that if you go online and you look at videos of jazz musicians explaining what they're doing and how they're doing it, it's all theory. I always thought these guys were just playing out of their souls, but they play out of their souls and their brains at the same time; they actually understand the underlying reality of what they're doing... And it's the same with software; you can start off by cutting and pasting out of whatever you find online, and developing applications that way... But if at some point you wanna become a virtuoso, if you want to develop new things that haven't been done before, then you've got to go back and understand the basics; you've gotta understand the theory.

**Andy Hunt:** And that's something I think -- one of the things that's changed over the interleaving years... You know, when we started off, when our careers were young, you kind of had to know a bit more of the lower levels; you had to know a little bit about boolean logic and transistors and chips and gates, and assembly language. These days you've got students starting it at Javascript, starting in at a higher-level language. So in a way -- again, it's a two-edged sword. We had kind of an unfair advantage, because you had to know a lot of that stuff back in the day.

It's like when the Model T first came out - the starter instructions ran two pages, because that's what it took to get it going. You had to be a mechanic in order to own and run one. As opposed to now - you walk near the car with your fob and it just starts. It's a much different world. But that low-level knowledge, understanding how all the higher levels of abstraction feed down and actually run on the bare metal - that model is crucially important, I think, to have in your head. Otherwise, when you're operating in one of the higher-level languages and something goes wrong, you have no idea what's going on.

**Jerod Santo:** Isn't that an unfortunate fact though? The definition of a leaky abstraction is that you have to understand the things beneath it, or on the other side, in order to use it correctly. Wouldn't it be - I guess this is just an idealist perspective - better if we didn't have to know \[unintelligible 00:43:38.03\]

**Andy Hunt:** That'd be great. That'd be nice. That'd be awesome.

**Jerod Santo:** Yeah. It's just not the way the world works.

**Andy Hunt:** Yeah.

**Adam Stacoviak:** Don't ask for what you can't get.

**Jerod Santo:** Yeah.

**Andy Hunt:** \[laughs\]

**Dave Thomas:** \[00:43:47.00\] No, it depends on the level of... If you can componentize stuff well enough that it is genuinely a black box, then you don't have to know how it works. For example, my car has so far exceeded my knowledge of how it works... But unless it's something really trivial, it goes down to the shop every time something breaks. Because I open the front of my car and it basically looks like a big plastic box. I have no idea what's going on. But that's okay, and I'm happy to use my car, because it is componentized to the point where somebody somewhere can fix it. If software were componentized, the same would be true. If I could rely on a box that did something, a library for example -- which I do, actually, thinking about it... When I get a sign out of a math library, or a co-sign, I don't know which particular expansion it uses; I don't know how it does it. I know is probably way, way beyond my level of math understanding, but I don't care, because it's gonna produce a sign.

**Jerod Santo:** Right.

**Dave Thomas:** But if I'm gonna use a library that does parsing, for example, and every now and then I get a funky result... Well, I'm never sure - is it my fault? Is it its fault? And depending on the newness of the library, I'm kind of incline to think "Well, maybe is its fault. I've gotta dig into it." The number of times I've ended up putting tracing code into other people's library code, just so I can find out what's going on - that's where that componentization idea breaks down.

**Jerod Santo:** To reuse the metaphor with the car - as developers, are we all called to be the mechanic, or can some of us be the end user of the car, in a componentized world, and maybe just have to send the component off to the mechanic every once in a while?

**Dave Thomas:** Think about the car as being a network of components. At one level you buy a car, but the car consists of a \[unintelligible 00:45:52.24\]

**Andy Hunt:** Thank you, there you go... Wow!

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** You know more about cars than you're leading on...

**Dave Thomas:** Yeah... But then all of those things are themselves components that other people rely on. So there's probably -- I don't know how many levels deep it goes before you get to a rock in the ground, that somebody has to dig out, to turn into steel... But maybe it's 20 layers deep. And at each of those layers, people are relying on the previous layers being rock-solid components, that they actually can rely on without having to dig into too much.

That's what we're lacking... So you don't have to know. If you can rely on the things that you're relying on, as in if you know that they're gonna be good for you, you understand 100% how they work, there's no ambiguity, there's no bugs or whatever else, then we are all car drivers.

**Jerod Santo:** Right.

**Dave Thomas:** But the reality is what we actually are -- some of us are injector makers, some of us handle the radios, some of us handle the wheels, and we're all doing the things that rely on people at levels below us.

**Andy Hunt:** And I think the important thing to remember - which again I think we lose sight of - is this is still brand new to us as a species. The whole field of computing has only been in existence, depending where you count from, 50-60 years tops; late '40s maybe. That's nothing. You look at some of the older professions - legal, medical - where they've had hundreds of years, thousands of years in some cases, to come up with "Here's how we mentor people, here's how we educate people to bring them through the ranks, here's how we attack problems, here's how we address ethics in our profession..." We've had a lot of time to work out those issues in other areas, and we're embryonic at this point. 50 years is nothing.

**Break:** \[00:48:01.21\]

**Adam Stacoviak:** It sounds like this book became a happy accident, in terms of you weren't intending to write the book, and you wrote down some of your thoughts, and that became this very popular 20-year-old book that we're now talking about, with a brand new edition 20 years later.

**Jerod Santo:** It's been used in university courses, or some sort of course education as well, so...

**Andy Hunt:** Yeah.

**Jerod Santo:** ...a huge success.

**Adam Stacoviak:** Unexpected... So what else was unexpected from this book?

**Dave Thomas:** Oh, everything. I think it's fair to say the book changed our lives... Because because of the book we got an entree into conference life, we got to meet a whole bunch of very interesting people, we got involved with the Agile Manifesto folks... And we ended up with a publishing business. So the book changed everything; where would we be now without it, I'm not 100% sure.

**Andy Hunt:** So the publishing business was -- you talk about happy accidents, right? We did not sit down and decide "Hey, let's start a publishing business." That was not our original idea. What we'd wanted to do, as a follow-on -- so we'd written The Pragmatic Programmer, we'd written the first Programming Ruby book, so that had come on the scene...

**Adam Stacoviak:** The PickAxe book, right?

**Andy Hunt:** The PickAxe, yeah. And we thought, "You know, what the world really needs, the better mousetrap, what we need here..." - we wanted to come up with a kind of starter kit in a box for teams. So we'd have a pile of books on the things you absolutely had to know to get started, and some desk toys, Nerf guns, some rubber ducks to put on your terminal... This kind of thing. And we went pretty far down that road. We actually lined up a source of rubber ducks that we could get imported...

**Adam Stacoviak:** Wow...

**Jerod Santo:** Awesome.

**Andy Hunt:** ...and boxes, and shipping, and all this kind of logistics, and then we figured -- well, the real problem was we didn't actually have enough content to really fuel this endeavor... So we needed a couple books on the real basics, like how to use version control, how to incorporate automation (dev ops now) into your project, how to do unit testing. The real basics. So we figured "Okay, we'll just write those books first, then we'll have something to put in this box." And those became the first books that The Pragmatic Bookshelf published, starting in the fall of 2003. So we had the first couple books out, and then these became incredibly popular, to our surprise.

We had friends start to write to us and say "Hey, can I write a book for all y'all?" Because "all y'all" is the proper plural, as I discovered. I thought it was just "y'all" down here; I was wrong. It's "all y'all." \[laughter\] So our friends started coming and saying "Hey, we'd like to write a book. Can we write a book?", and we started publishing books, and never did get back around to the "developer in a box" concept.

**Jerod Santo:** \[00:51:56.26\] Maybe now is the time. Get them rubber ducks back out.1

**Adam Stacoviak:** Do you still have that supplier in check? \[laughter\]

**Andy Hunt:** That was a lot of years ago... I don't know if they're still in business now.

**Jerod Santo:** Free business idea for the listeners; if you wanna do Developer In a Box, it's out there.

**Andy Hunt:** Well, now we've got the books to support that with, so...

**Jerod Santo:** Alright, so they call dibs. Don't do it.

**Andy Hunt:** Yeah. \[laughter\]

**Adam Stacoviak:** Well, that's interesting, because I came on this scene -- Jerod has a bit more of a history; he's gone to school for what he knows, and I just sort of learned what I know by rubbing my knuckles on the ground, and punching things, and just... Bloodying my knuckles, long story short... And what's interesting is that your repertoire of books was my learning ground, so to speak. If it hadn't been for you all doing what you did, and this happy accident we're speaking of...

**Jerod Santo:** All y'all...

**Adam Stacoviak:** All y'all...

**Dave Thomas:** No, there's only two of us. It's singular. \[laughter\] "All y'all" only kicks in at five or six.

**Adam Stacoviak:** You know, this happy accident has enabled myself, as well as many others, I'm sure -- Dave, you mentioned life-changing... That must be really life-changing as well. You've been able to influence so many careers, as well as useful software.

**Dave Thomas:** I think the word you're looking for is "scary", but yeah. This is gonna sound a bit phony, but honestly, it's genuinely humbling. I always remember, I was doing talks -- for a while I was on this "No fluff, just stuff" tour, which basically takes a conference to a different city in the United States, once every two weeks; it just moves around the country, which is a really great way to develop your speaking jobs... And somebody came up to me after one of my talks and said -- it was the day after I'd spoken, and he said "You know, I listened to your talk, and I went and I quit my job." And I went "Ohhhhhh, no!" \[laughter\] And it was like "Okay, what have I done? Have I depressed him so much that he's gonna go and become a farmer, or something?" And no, basically I was talking about whatever it was, and his current job didn't offer that, so he decided he wanted it, and he went and found something else and quit his previous job. And that kind of thing happens a lot, and it is really scary.

It's very easy to sit there and say "Okay, I'm just gonna make dramatic points that sound good, generate little sound bites, and go for the clickbait kind of stuff", and not realize that what you do actually does have an impact, and you've gotta be a little bit careful, and a little bit responsible... So that you're not gonna go out and create an entire generation of psychopaths.

**Andy Hunt:** People often say, "Well, you got lucky", and in part we did. If the book had come out ten years earlier or ten years later, I don't think it would have had anywhere near the impact that it did. As it turned out, we had the right book, but at the right time. It was what people needed to hear then, and I think that made a big difference.

Also, it wasn't universally beloved when we were working on it. We had a couple reviewers - one in particular who thought that writing a book such as this, that didn't have hard proofs and hard logic behind it, was irresponsible, and that we should not publish this thing. This was a heinous -- I forget what words he used, but very, very negative, like "You have no right to say this kind of stuff." And it was like "Well, it needs to be said, so... Thank you very much for your input, thank you for your feedback", and we went ahead anyway... And I'm glad we did.

I guess my point here is if you come out with something, you're always gonna have naysayers. You will have people who say that you're wrong, or they disagree, or whatever... And hey, you know what? It's a big world. That's fine.

\[00:56:13.12\] We've had enough feedback over the 20 years from people who, like you said, this has changed their careers, this has changed their lives for the better. We get fan mail. I think it's kind of rare in the tech book world that you get a lot of fan mail from people, especially 10-20 years after the fact... But we still get fan mail email regularly, that this has made a big impact on people... And as Dave says, that is pretty humbling. I'll still chalk it up to beginner's luck, because we were just writing down what worked for us. "Here are the things that we've noticed. Here's the stuff that you might wanna think about. Try and do it this way."

We approached it very realistically, very honestly. We didn't have a product to sell, we weren't trying to sell some big IDE or some development tool or some process... It's just "Hey, here's the stuff we've done. This works. Give it a shot." And that's proved to be workable and very popular.

**Dave Thomas:** I think the book was just pure, dumb luck. I think the Book Shelf was also dumb luck, but for another reason. When we were looking around to start creating the first couple books, we had the decision "Do we publish them ourselves, or do we send them off to a publisher and just basically do the writing?" And we asked ourselves the one fatal question that I think every entrepreneur needs to ask themselves, and that is "How hard can it be?"

**Adam Stacoviak:** Ah, yes...

**Dave Thomas:** And we answered it using the same stupid answer of every entrepreneur, and that would be "Oh, come on, it can't be that hard." I think had we known going into it the -- I think the expression is "pecked to death by ducks." There are thousands and thousands and thousands of little, small details in the publishing world that if you knew about upfront, you would just basically go "Oh, no, I'll let someone else deal with that." But because we didn't know that, we went in and we just basically said "Well, how should we do this?" and we applied all of our software development ideas to publishing. We did it that way, and as a result, for a while we were the fastest-growing publisher in the world... Which is kind of easy to do when you start from almost nothing, but at the same time, our systems still are way superior to any commercial publisher out there, any big brand name publisher out there, just because we didn't actually carry that history with us.

I think that's really important - going into something big like that from a position of confidence that isn't necessarily rooted in reality. I think that's one of the best ways of making sure you succeed.

**Adam Stacoviak:** Something about the book amounts then. Since you've been doing this for quite a while... I mean, tons of categories on the left-hand side of The Pragmatic Book Shelf... There's lots of books. How many books in total, how many words in total? Any stats?

**Andy Hunt:** Words I don't know... Last time I counted we were hovering around 300-350 titles that we'd published, somewhere in that neck of the woods. It's a little trickier to answer, because what counts as a book? Is it the same book that's had multiple editions? Do you count the different editions? Obviously, we have ones that went out of print... As you mentioned earlier, a lot of tech books have a short shelf life, so many times we have to retire one, and we'll come out with another edition if it makes sense. Or if it's something that has already passed by the wayside, like the Google Glass book, for example; that was fairly short-lived. \[laughs\]

**Dave Thomas:** What is the stat on the current size of the repository?

**Andy Hunt:** \[01:00:12.17\] It's big. It's 1,5-2 gigs, I think.

**Dave Thomas:** No, no... Way bigger than that. When I last looked at it, it was over 8.

**Andy Hunt:** It's probably 10 or 12 then, would be my guess. It's... It's big.

**Jerod Santo:** It's big... \[laughter\]

**Adam Stacoviak:** By repository you mean of the books, right? You keep them in digital format.

**Dave Thomas:** Oh, yeah. All the source for the books is under version control.

**Andy Hunt:** And see, this was our saving grace. Going into an industry we knew nothing about, we approached it as if it were a software project. Everything is under version control; there is a build machine in the cloud that produces the books as you check in. There's all these sort of trappings that you would expect if you were a software person...

I remember, one of the first publishing conferences we went to, one of the other publishers - we were chatting, and his jaw was on the floor that we had everything even in the same format. And it's the side effects, right? By virtue of having everything in version control, we could tell at a glance when an author had last worked on a book, how fast they were going, when they were working... We had all these statistics for free, just by having that version control. Everything is in the same format, so you don't have these issues that other publishers have, like "Well, this one was in Word. This one was in QuarkXPress back in the day. This was in FrameMaker, this was in InDesign", or whatever.

These things we did sort of by accident, and they ended up saving our bacon. There's whole cottage industries that sprung up in publishing to help other publishers get around these problems, that we never had in the first place, because we did it differently.

**Dave Thomas:** Yeah, I was at a publishing conference -- I don't typically go to publishing conferences, because it's too depressing... But I went to one in New York City, and I was sitting in the audience... This would be about 2008-2009, something like that, and it was a talk on creating ePubs. I was kind of interested, because we'd just gone through that process of creating ePubs... And the speaker described the flow that they went through to create an ePub, which was baroque, at best. He at the end said "So we can go from (I think it was) Quark format into an ePub in just over a week."

**Jerod Santo:** Wow...

**Dave Thomas:** And the audience went wild... "Wow, that's really incredible." Literally, when he said that, applause broke out. And I was sitting in the audience with my laptop, and actually -- there was an erata I had to fix on a book, and I'd actually fixed the erata, regenerated the book, created the ePub and pushed it. And that was in the first quarter of his talk.

**Andy Hunt:** On the hotel Wi-Fi, no less... \[laughter\]

**Jerod Santo:** That's a feat!

**Adam Stacoviak:** Yes!

**Dave Thomas:** Well, it's not a feat, it's just a side effect. That's like saying --

**Jerod Santo:** No, I mean the Wi-Fi.

**Dave Thomas:** Oh, the Wi-Fi... Yes, yeah. But the rest of it, it's like -- you know, people that say "I can deploy my application on every commit."

**Jerod Santo:** Right.

**Dave Thomas:** And that's what we do. We actually considered doing that. We considered creating a new beta book every time the author checked in anything... But then we thought, and common sense actually prevailed on that.

**Jerod Santo:** Mm-hm. You had some bad check-ins.

**Dave Thomas:** Oh, yeah... \[laughs\]

**Adam Stacoviak:** Rollbacks...

**Dave Thomas:** Well, and authors have been known to insert comments... You know, "I hate this X, X, X...", or whatever. So yeah, it requires a little bit of editorial control.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[01:04:00.17\] Speaking of processes and editorial control and tools, whenever I'm reading a book that has multiple authors, I find myself wanting to peel back the covers and think like "Who wrote this sentence? Whose ideas were these?" I'm sure it's difficult as a co-authoring to have a singular voice... Or do you have multiple voices? I was reading the DRY section of the new edition, where you are talking about how people kind of took that wrong, like you'd mentioned at the top of the show, Dave... And it starts off with this James T. Kirk reference, and I'm thinking "Is this a Dave thing? Is this an Andy thing?" It makes me wonder - who writes what, how do you guys work together? What are the logistics of the process?

**Andy Hunt:** We ended up, from our experience with the first book - and it took us a long time to get there... We took over a year of not taking on clients, working just on the first edition of The Pragmatic Programmer... And we would argue; Dave and I would argue over this word, that word, or this sentence...

**Jerod Santo:** Wow.

**Dave Thomas:** We had a process that we settled on. We used version control for it... And the process was when somebody finished something, they would say to the other person "Here you go", and the other person had one or two choices; they could either say "I love it" or they'd say "I'm gonna rewrite this part of it." You couldn't just sit there and bitch about it.

**Jerod Santo:** No criticizing, just rewrite it.

**Dave Thomas:** Yeah, no criticizing. So we would go around -- some of those sections went through that mill so many times that I don't think anyone could actually work out who wrote which character, never mind which word, in those sections. And that had the unintended consequence of helping us blend our style.

I could definitely tell stuff Andy wrote and stuff I wrote if we write them individually. But when we put them together in a book, and particularly the new content is kind of interesting. The new content - we didn't need to do that as much. We still went through that process, but it wasn't anywhere near as intense, because we'd actually kind of developed a shared common style, having spent all that time working through it on the first edition.

**Andy Hunt:** And plus, we wanted to match the existing text from the first edition... So whatever drift had happened over the last couple of years, we needed to sort of match or refresh what was there, so you can't tell "Here's where we chopped the limb off and sowed something else on." And remarkably, I think it worked out really well. If I go back and read it now, I find it harder and harder to remember "Was this back in the first edition or was this something new that we added?" It's much more seamless. I was kind of afraid it wouldn't be, because it's been 20 years, and our styles have changed, we write differently... A book that I would write myself I think would have a different style than this. This is very consciously "Okay, this is this voice. This is our shared voice for this topic." I think it worked out really well, really seamlessly.

**Jerod Santo:** Adam and I have worked together and collaborated on text, and prose, and rewriting each other's things, and it can be difficult on a relationship, even in the small amount that him and I do. Sometimes we have to talk about things, or provide context, why I didn't like the way this was worded, or why I rewrote it... I imagine you guys went through a pressure cook; the relationship -- you spend some time writing the thing, and then you wake up the next day and Dave has rewritten that entire section because he didn't like it. Did that put a lot of stress on your relationship? It seems like talking with you today that everything is okay, but were there any knockdown drag-outs, if that's a phrase?

**Dave Thomas:** \[01:07:57.18\] Yeah, there were... But nothing that was permanent, let's put it that way. We had a few, like, "people hanging up on other people" type phone calls... \[laughter\] But it was mostly just kind of people who were passionate about an idea, and expressing that idea. And partly at the beginning it was trying to develop a shared vision of a voice, and that's a really hard thing to express, because it's kind of more "You know it when you see it." You can't sit there and plan ahead.

So when we were arguing about "No, I think we should explain it this way", "No, I think we should explain it that way", it got very difficult, which is why to some extent we settled on the "Show me" as opposed to "Tell me." Because if I didn't like the voice, then I could rewrite something in a different voice and say "Here, this is what I mean." That would be an easier point to discuss.

**Andy Hunt:** One of my favorite quotes of all time - former president Jimmy Carter was in an interview, and somebody asked him something about "Had you ever considered, over the course of your life, cheating on your wife?" And he said "Oh no, absolutely not. Murder, yes. I did consider killing her." And the interview came out when they were working on a book together. So Jimmy, of all people - here's one of the kindest, gentlest people, like "Oh, murder? Yes, absolutely. Yup." Straight up. \[laughter\] So it happens, but you know, we went with it.

**Adam Stacoviak:** I feel we're lucky then, Jerod. I haven't hung up on you yet, and vice-versa.

**Jerod Santo:** And no murders to speak of.

**Adam Stacoviak:** No murders. We're doing good. Or we have something to look forward to. One of the two. \[laughter\]

**Dave Thomas:** That just means you're not serious enough.

**Andy Hunt:** Right, right. \[laughs\]

**Adam Stacoviak:** We're not pushing hard enough.

**Andy Hunt:** Right.

**Jerod Santo:** Well, guys, this has been a blast of a conversation. I would love to ask you -- this might be a hard one, like "Pick your favorite child" kind of thing, but if you had to take one big idea, one topic of the book, the thing that is your favorite... Like, "I love this section. I think it's the best." You can pick three, if you can't pick your favorite child, but... If there was a one big idea - you can each answer this one - that is like "If you get the book, you've gotta read this thing, because it's something I'm proud of, or it's something I think is 100% worth your time", what would that be?

**Andy Hunt:** Yes.

**Jerod Santo:** No, that's too glib. You've gotta give me a real answer.

**Dave Thomas:** Alright, I'll start up.

**Jerod Santo:** \[laughs\] There we go.

**Dave Thomas:** My favorites are the two new tips; one of them starts it and one of them ends it. The one that starts it basically says "It's your life." You are in control of it, you have agency, so you actually have to do something. Too many people are on autopilot; they'll take a job because it's the one they got offered, and then they'll stay there until they just can't stand it anymore, and then they'll take the next job that's offered etc. They will complain that they're using a language that they don't like, and keep complaining, as opposed to actually finding an environment where they can use a language they do like, or whatever else. They all complain that their employer isn't teaching them enough, but it's not their employer's job to teach them, it's theirs. So it basically says "It's your life, and you can make it any way you want it to be, but you have to actually do something."

Then the other side of that is the last tip, which is kind of like -- it was an awkward tip, and it's funny, we're going to print and I'm still not 100% sure whether or not it's a good idea to end on it... But it basically is the idea of the responsibility, and the idea that you are taking responsibility for the stuff that you do... Which is kind of like another way of saying "It's your life", but it makes you think about it in terms of the big picture, as well as the personal picture.

\[01:12:08.11\] Those two things for me I think are the more important tips in the book, because they are the ones that give you the idea that you have responsibility, both for yourself and also for everybody else.

**Andy Hunt:** So now that he's taken those... \[laughter\]

**Jerod Santo:** You go first, you get the best stuff.

**Andy Hunt:** Exactly, exactly. So I would say -- I don't know that they're my favorites, but I think that they're the most important ones that people need to pay attention to, and heed... There's a new tip called "Don't outrun your headlights", and it kind of goes back to what we were talking about earlier, about Dijkstra talking about the importance of being a humble programmer. Not going faster that you can see. Taking small steps, small bites. And there's several different tips that express variations of this idea. The essence of design, going for something that's gonna be easiest to change, taking the smallest steps possible; the essence of agility, trying something small, seeing what happens, and then acting on that feedback. So there's a set of tips that go around this idea of not going faster than you can; taking the small steps, getting the feedback, working on it... And that's expressed in a couple of different ways, from a couple of different angles, different levels of abstraction, but it's a very common thought of "Don't overextend yourself."

If you're trying to be as clever as you possibly can when you're writing the code, you've got no bandwidth left when it's time to debug it, or explain it to someone, or port it, or do whatever you have to do with it. You've already maxed out your capacity, your capability; you've got no headroom. So you actually wanna go the exact opposite - you wanna write the absolute simplest, most concise, most elegant thing you can get away with, and then go from there.

**Adam Stacoviak:** Let's set the tone for those who are gonna pick this book up today, maybe even for the first time, or maybe even for the second time, if they're a "be back" reader, so to speak... This is not the same book. We mentioned earlier about the diff, that you really couldn't tell; there's lots of change, 75% of the topics had changed etc. This is not the same book.

**Andy Hunt:** No. You're exactly right. This is a very different book, because we're at a very different point in time. This is 20 years later. If it was just the same book and we had changed a couple labels in it, changed Eiffel to Elixir, or changed C\# to Rust, and made no other changes, it would kind of be the same book... But that would have done a disservice to everyone, because the world is different now. So yeah, it's a very different book. The first edition was good for its time; we're hoping this edition will be good for the conditions we're in now. 20 years from now, when we do the 40th anniversary edition, from our walkers, that'll be different yet again, and we'll explain how to be nice to Skynet, and let you code, and whatever.

**Adam Stacoviak:** \[01:15:20.24\] Continue to think free, I suppose.

**Andy Hunt:** \[laughs\]

**Adam Stacoviak:** Well, I just wanted to ask you that question because I think it's an encouragement to hear from the both of you, from you specifically, that this book is worth either picking up for the first time, or picking up again, if you've read the first edition. So this 20 years later second edition is very much a new book, new principles to learn, new things to consider on your journey as a software developer, to this thing called mastery, which we all never really truly ever get to, because we're always improving. That's really awesome.

I wanna encourage people, too... The book is in beta, it's out right now, you can go get it today, in eBook format, at pragprog.com. The hardcover is coming out later this year, is that right? There's no real set date.

**Andy Hunt:** There probably is... We don't know what it is, but it'll be in the fall. It'll be roughly middle of September, middle of October sort of timeframe... Just in time for Christmas, so you can get the nice hardcover edition for yourself and all your loved ones.

**Adam Stacoviak:** Yeah. And I would encourage too, the eBook format, since Dave mentioned that if you enable a scumbag, you are a scumbag section may not be the ending; hey, maybe you might even leave. Get the eBook now. And the encouragement there is that you will get 50% off the hardcover, which I think is just very generous of you fellas to do that, like "Buy the eBook today, and you get 50% off the hardcover when it comes out", which is super-cool.

**Andy Hunt:** Yup.

**Adam Stacoviak:** Fellas, thank you so much for sharing your wisdom, for remaining friends, calling back, for encouraging change through prose, rather than argument. I think that's veryb wise of you fellas to act on that, but then also to share that with the rest of us, so... Thank you for your time today.

**Andy Hunt:** Thank you so much for having us.

**Dave Thomas:** Yeah, thank you.
