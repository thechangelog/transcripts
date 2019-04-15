**Jerod Santo:** So we're here to ask the question and hopefully get some answers, "Why do smart engineers write bad code?" We're joined by Adam Barr. You've been with Microsoft for 23 years, you're a veteran in the industry, and you have a book that dives all into this question, so obviously you have a lot of thoughts about it... But before we dive into the meat of the topic, let's learn a little bit about you and brings you here.

**Adam Barr:** I started working at Microsoft in 1990, a long, long time ago. Actually, one of my first projects was the very first version of Windows NT, which is now what people call Windows, after a couple of name changes... And before that, I was a self-taught BASIC programmer in high school, like a lot of people from my generation. I graduated from college in 1988.

I worked for Microsoft, as I've just said, for 23+ years. Now I work as a consultant. I wrote this book that came out last fall, "The Problem With Software: Why Smart Engineers Write Bad Code", which as you said, tries to answer that question.

**Jerod Santo:** So why that question? What brought you to write the book, and what was your motivation?

**Adam Barr:** One of the more interesting jobs -- I was primarily a developer, a dev lead, engineering manager, but for about five years in the middle I worked in this group called Engineering Excellence, inside Microsoft, which did training and consulting for teams internally. It was quite interesting, because normally at Microsoft you only get a view of the team you work on, and this enabled me to get this view across Microsoft.

I realized that even inside Microsoft, which people may think of from the outside as having this single way of writing software, there were actually a bunch of different ways; some were better and some were worse, but people didn't really know. They just tended to use the same technique and language and process that they'd used before, which might have been something that the person who created the group happened to like, or had some experience with... And from our central perspective in Engineering Excellence we could tell that some of these processes were better than others. It made me realize that across the industry you have the same issue - people just don't really know if the way they're writing software is actually correct, if they're using the right language, as I said, or the right tools and technologies.

\[00:03:53.06\] A lot of it starts with what I consider the basic problem with software, which is that when you're in school, Academia doesn't really study industry, and you don't get a lot of advice on this. You tend to write small pieces of software, two or three people working for a semester, and then you're done. In that environment really any language is fine, and everybody can meet in a room to discuss things, so stitching together large pieces of software from individual components doesn't really happen, and the original authors of the software are there for the entire duration, so they just know how it works; the documentation is not really an issue.

And then you get into the industry and you're working on these large pieces of software -- obviously, at Microsoft I worked on Windows and Office, two very large pieces of software. At this point they have thousands of developers on them, and this stitching together and maintaining it over different cycles of engineers as people leave and new people join really becomes critically important, and it's just not something people are prepared when they go to school and study computer science or software engineering.

**Jerod Santo:** So there are a couple of problems that I've seen with regards to Academia and its ability or inability to prepare programmers for industry. The one that you're hitting on here is really the scope of the work, maybe the breadth or the depth of the projects and the needs of the projects are not real enough, big enough, scoped enough for that to really make an impact or prepare you... And then the other problem that I see often is that the industry moves so fast, and the state of the art moves so fast, that many times people are learning technologies that are outdated by the time they graduate. Does that resonate with your experience and who you've spoken with about this, or is it mostly the scope of things in Academia that's the problem?

**Adam Barr:** Well, the state of the art issue is also there. Certainly, people come out of school - even if they did study web design (which they may not have done) and used a Javascript framework (which they may not have done), there's probably something new that's come along in the last six months, that makes their knowledge obsolete. And that's just a general problem in the industry; you get that switching jobs also. I use this framework, but now my other company is using a different framework.

I'm actually sympathetic to Academia in that situation. They really don't need to attempt to keep up with the absolute latest and greatest, because if you've had experience working on large pieces of code, then you can work on other large pieces of code and that knowledge transfers.

Trying to nail down the specific knowledge of a particular package or a particular back-end stack I think is difficult, and still may not apply, because there's a bunch of them out there now. And also, it would require Academia to move a little faster than they typically do or should, because of course, they might decide that some new package is the latest thing, but they might be wrong. So I don't think Academia should be out there trying to predict, "Okay, my students are graduating in two years. What specific languages are gonna important then?" But certainly, just giving students exposure to large-scale programming is very important.

You have these coding camps springing up, which are much shorter in duration and much more hands-on, and they could possibly focus on "Okay, we're actually gonna teach you something that you could then turn around and use the month after you graduate." I think that could be a very interesting way to become a programmer as well. I compare the amount of time I spent actually programming when I was in college, actually staying in front of a computer when I was there for four years; I only took eight upper-class computer science classes, and a lot of that was in the classroom... Versus a coding camp, where it's hands-on all the time for months. It's really pretty comparable. And you have an instructor there that can help students... So I think a coding camp is a very valid way if you really wanna get the latest and greatest stuff, but I think it's fine for Academia to say "No, we're gonna teach at a slightly more general level."

**Adam Stacoviak:** When you say "Academia" - you mentioned coding camps; would you consider Lambda School, or Bradfield School of Computer Science, if you're familiar with those...? Would you consider those in the grey area between bootcamps or coding camps and Academia? Because they kind of play in this intensive role, in this sort of partnered relationship with the would-be or could-be developer.

**Adam Barr:** \[00:08:14.23\] What I've read about Academia and what I looked at was really four-year universities, granting engineering degrees, essentially.

**Adam Stacoviak:** Gotcha.

**Adam Barr:** So yes, there are grey areas... There's companies... Amazon is or was running an internal coding camp, essentially, for their employees who wanna transition to become programmers... So there's a lot of ways you can learn that are a little more close to the industry, but also running as a for-profit business.

To me, I'm thinking of Academia as the ivory tower, with the professors in it. The tweed jackets with the elbow patches, that whole thing.

**Jerod Santo:** Going back to the coding schools a little bit... It seems like the fundamental premise of the coding bootcamps is counter to Academia, and it somewhat speaks to the problem that you're seeing with Academia not addressing real-world or industry needs. That being said, a short bootcamp isn't going to give a large-scale project either in that time, but just the idea that you can't possibly be prepared for industry completely; most of us learn on the job anyways, so let's get you up to speed and dangerous, so to speak, on a modern stack that is immediately employable or useful to industry, and then back-fill from there.

Obviously, you're gonna have to learn computer science concepts to make this your career. You can't do a ten-week or a 12-week session and expect to be proficient and done learning, right? You're just starting to learn. But that style of instead of saying "Well, let's go study computer science for four years, and then get industry experience", saying "Let's bootstrap industry experience and then back-fill maybe with a degree, maybe with online education...", you know, the computer sciency aspects. Do you think that's a viable way forward?

**Adam Barr:** Yeah, I think that coding camp graduates show up in industry with some gaps as well, that are different from the gaps...

**Jerod Santo:** Huge gaps.

**Adam Barr:** Huge gaps, that are different from the gaps that someone with a four-year degree typically shows up with. They have the very specific knowledge, but they don't have the breadth and the view across different technologies. So I certainly would not recommend somebody skipping college and going to bootcamp, and then try to go into the industry when they're 19 years old. I think you've got a lot of life skills in college, completely independent of what you learned about programming; you get a lot of life skills in college that are very valuable, so I would not present it as an alternative to college.

**Jerod Santo:** You can also come out with $150,000 in debt.

**Adam Barr:** Yes. Well, that is true. So I think that a coding camp after you've gotten a degree, and maybe you've had a degree that was in math or in a natural science, or something that had this sort of computational thinking angle to it a bit, you had some experience in modeling things in your mind, which would let you model how a computer was working and help you when you're debugging problems... I think with that, plus a coding camp degree, would be a viable candidate, certainly for that initial job, working in the same technology stack that you learned in your coding camp... And yes, I would certainly then recommend that you started working on your own, working on larger projects, maybe find an open source project to contribute to, to try to backfill the other gap in knowledge... This sort of broader view you might get in an actual four-year degree.

**Adam Stacoviak:** What about goals though? Don't you think that the goals for a bootcamp or the grey area of, as I mentioned, Lambda or Bradfield, for example, the goals are fundamentally different. The goals for Academia, for your program, for example, aren't to teach today's best practices - though they should be aware of them - and it's more like skills and skillsets there on the long-term, and deep knowledge in computer science or various areas of software engineering. The goals are fundamentally different, right?

**Adam Barr:** \[00:12:00.12\] Oh yeah, I agree. The bootcamp is trying to get somebody employed quickly, with a specific skillset, and that should not be what Academia is teaching. But Academia should be more focused on the other areas - what's the right language to use, can you tell if software is high-quality, can you tell if software is obsolete, what is good code, what is bad code, what's the right trade-off between performance and maintainability of the software... They should be studying that sort of thing in industry, rather than on these...

**Adam Stacoviak:** Fake projects.

**Adam Barr:** Either studying on these small projects, or really not concerning about -- I've never heard of anybody coming out of college where they studied things like code readability and maintainability; it's just not considered. It's just "Okay, you're writing code to implement an algorithm. Once it works, we're done." People rarely read each other's code, they don't do code reviews, they don't talk about large bodies of code, they don't read code as a way to understand how to write code... There's a whole area that they could dig into, completely independent of the specific technology which the bootcamps focus on.

**Jerod Santo:** Yeah. So if we compare the software engineering degree - I know computer science was the degree that I went after, but... If we think about software engineering and we just compare it to the other stem fields, specifically engineering, because that's the easiest comparison, it's pretty safe to say that if you -- and maybe this isn't something that's wrong, so I'll just say it and you all can push back, but... It seems like if I go and get a decent degree in civil engineering and I've got a stamp on the wall, on a piece of paper that I hang on my wall, that says I'm a civil engineer, I have a bachelor's degree in this particular area of study, you can trust me to pretty much know how to build a bridge after that, right?

**Adam Stacoviak:** Hopefully...

**Jerod Santo:** I don't know, is that civil or architectural -- you know, the things that a civil engineer should do. There's a corpus of knowledge that's old and refined, and relatively static. I'm just making some assumptions, because I'm not a civil engineer... But you know, the laws of physics aren't changing, for example. Whereas if somebody comes out and says "I have a computer science degree, or I have a stamp on a piece of paper on the wall that says I'm a software engineer", that doesn't necessarily tell us anything. Is that a true statement? Is that a problem?

**Adam Barr:** That's correct. Yeah, my brother actually has a civil engineering degree, so...

**Jerod Santo:** Oh, good.

**Adam Barr:** Yes, that's exactly the case. Civil engineering in college involves learning a lot more that somebody else has already figured out. So "When you design a bridge, this is how yo calculate the load, and these are the different materials. In this situation, you do this kind of bridge, and in this situation you do this kind of bridge..." And getting a software engineering or computer science degree - because right now the terms are essentially interchangeable; there's not really a specific specialization of one or the other, although you could foresee that... Getting a computer science or software engineering degree just means that "Okay, I took some classes, I learned some algorithms, and I probably taught myself to code in a lab, late at night, trying to implement a compiler, or something, without a lot of guidance, and certainly without a lot of picking up historical, empirical knowledge from previous studies. I just got it working. And maybe I did that in high school, in BASIC, or something", like I did, which is an even worse language to teach yourself to program in than a lot of languages used in the industry.

I mean, I know my personal experience and I've talked to other people, and this is not just because I went to school a long time ago... This is talking to recent graduates now at Microsoft. A lot of them just figured out on their own, and that worked, and it got them through college, and it really got them through internships at Microsoft, because Microsoft internships are also very small and short... And got them going, working there full-time, and then at that point, sometime after being hired, they had to realize, "Oh wait, I'm working on a large piece of software, with a lot of people, and things like code reviews really matter", whereas when I first came to Microsoft, to me a code review was sort of a veiled insult. "What, you have to review my code? Don't you know my code is perfect?"It just felt like people criticizing me for no reason.

Then eventually, after working with other people's code for a while, it sort of dawned on me "Oh yeah, okay, I understand now." There's certain standards that you want to enforce, and there's actually benefits of a code review; it makes you better as a programmer.

**Adam Stacoviak:** \[00:16:09.03\] I've got a question here on this front - do you think that this gap that we're identifying also leads into interesting and/or bad hiring practices? If we don't understand what a software engineer truly can do... As you said, Jerod, if I have this stamp on the wall that says "Hey, I'm a software engineer..."

**Jerod Santo:** A piece of paper, yeah.

**Adam Stacoviak:** ...it's difficult to quantify or understand the necessary skillsets, so it almost leads to bad hiring practices too, by asking "Hey, can you do these really stupid things, that don't even really fit into your job?" They wanna know if you can sort a list, or write an algorithm; meanwhile, you're gonna be writing a Rails app, or something like that.

**Jerod Santo:** A whiteboard, yeah.

**Adam Barr:** Right. There's this joke about "What do you call a person who graduated last in their medical school class?" And the answer is "A doctor." Because when you graduated from medical school and you passed whatever test you have to take, you're a doctor; you have learned all this stuff. And I've asked doctors, "How do you interview people?" and they say "Oh, well, we just talk about how they deal with patients, and their views on certain different styles of care, or whatever", but nothing about "Hey, here's a wound. Can you sew it up?"

**Jerod Santo:** Can you dress it?

**Adam Stacoviak:** Right.

**Adam Barr:** Yeah. They assume they know that; I mean, they went to medical school. You get nothing of this sort in software engineering, so you do wind up doing a lot of these coding interviews, and there are different theories on whether they're good or bad... I personally think they're bad, but it's not clear that there's anything better at this point, because you don't really know what it means to have a software engineering degree.

Microsoft, on occasion, would hire people who are music majors, but they'd coded on the side... Which is sort of cool for the music major, and it's good that Microsoft is thinking beyond just a certain degree... But if you hired a doctor who had been a music major, that would be really weird. And the fact that it works in software engineering is more, I think, an indication of the current immaturity of the industry.

So the coding interviews - I've realized even looking through feedback; when you interview at Microsoft, you see all the feedback - it's not even clear what people are looking for in interviews. Some people are really looking for a specific algorithm; can the person guess an algorithm that I have in mind. I was more looking for "Can they write some code, reason about it, explain what it does?" Say things like "After one iteration of the loop, such and such will be true", and therefore they can try to prove it works; then talk about optimization, and working with certain constraints... Essentially, what you actually do when you're debugging something. And the code they write is just the starting point.

I once did an interview where somebody said "Solve this problem", and I came up with an algorithm, and I wrote it; I think I wrote it correctly. Then about ten minutes left in the interview I realize my algorithm was broken, when I was talking about testing it; it just didn't handle some case. So I said that, rewrote a correct algorithm - again, I think I wrote the code correctly - in the last ten minutes. So is that a good interview or a bad interview?

**Jerod Santo:** Right...

**Adam Barr:** But I think some people would say that's a terrible interview; they wrote a bad algorithm and they only got lucky to catch it at the very end. What if it had shipped etc. But my view would be, "Well, that's a pretty good interview", because first of all, I solved two problems for the price of one, and I realized while discussing testing that I had a bug, and then I fixed it, which is really what you actually do as a software engineer. But I think a lot of people would disagree on that, and say "No, no, you've gotta come up with a clever algorithm or we're not gonna hire you."

**Break:** \[00:19:28.14\]

**Jerod Santo:** We've been talking about this gap between industry and Academia, and why smart engineers can write bad code. Adam, I'm assuming the response to that is because they aren't taught well enough to write good code coming out of college... What are some things we can change, if we're just going to maybe mold a four-year curriculum, or take existing university and change the way they do what they do to produce better output? What would you change?

**Adam Barr:** Well, one big thing which really has only become possible in the last 10 or 15 years is reading and modifying large bodies of code. That's one of the big gaps you get. You don't get that experience in college. And now we have all these large open source projects, so it's something I encourage people -- if they ask me "How can I make myself a better candidate for a company like Microsoft?", I say "Contribute to an open source project, or at least make changes, learn the code... Make changes, even if you can't get them accepted; commit them."

I think universities could certainly do that - they could have a class that was some open source project (Linux, Apache, something) and have a professor get some familiarity with it, and then guide the class through first understanding the code, and then making changes, and then you can start discussing the style of coding used, and how you'd match that, and whether you liked it or not... And the students could start looking at each other's changes before they actually try to commit them publicly.

Really, there's nothing stopping you from doing that. I think it'd be quite an interesting class, I think the students would be interested, and it would just give you in an interview something to talk about that was not "Okay, the two of us wrote a little app for two months, and then we threw it away", especially if your changes got committed, but even if it wasn't; essentially, there's nothing blocking that, and I would encourage universities to offer that sort of class.

The other thing I think is just have more hands-on classes. I know computer labs can cost money and it's tricky to keep them working and whatnot, but add some classes where you're actually in a lab with the instructor, and you're working through problems, and you can help each other; the instructor, the TA's can help... Rather than all the instruction being just in a class, and then the students go off without the professor and try to actually write the code.

A lot of the problems you hit happen when you're actually writing code, and it would be good to have the professor with the experience to say "Oh yes, I can help you with that", or just give advice, if people want it.

I spent a lot of time in college -- we had one big lab in school, because this was pre-internet, pre-campus networks... So we were all together, but still we'd mostly just be grinding away in grim silence next to each other. Nowadays students mostly code in their own rooms, so they're not near even other students they could ask for help... So having more labs, even if the students have to bring their own computers, but just having it all be programming together I think would be very helpful.

\[00:23:48.12\] The other thing - I talk in the book about empirical studies, which is basically studying programmers, how they work, and I think students should both read empirical studies... Microsoft Research is actually driving a good uptick in empirical studies of software engineering, which was a big thing in the '70s, but kind of died out. So students should study some of that. There's actual studies about what's the right amount of code, what's the right length for a method, things like that; studies of variable naming, this sort of thing.

So I think students could study that, but they could also try to do a little bit themselves. They could actually try to do a little research project where "We write code in two different ways/two different languages/with two different constraints, and actually try to figure out something about which is better." Probably to learn about it, and probably just to get students to realize that there are different ways to write code, and the way they've learned or taught themselves may not be the only way.

I think people come out of college -- because they've been successful being self-taught, they come out with a little hubris; they're not humble enough, and it takes them a while to get knocked down a few pegs and realize that they do have something to learn, they're not the genius programmer that they probably think they are. Certainly I essentially felt that way when I came out of college, and it took a while to get disabused of that notion.

**Jerod Santo:** Yeah, all it takes is a little bit of your code running in the real world for a few days, or a few hours even, to realize that we're not quite as clever as we think we are.

**Adam Barr:** Right. With paying customers, and...

**Jerod Santo:** Yeah.

**Adam Barr:** Back when I would start, we were still in the "throw it over the wall" days, where we essentially blamed the test team if there were any bugs, which is a terrible, terrible attitude, because it let us get away with believing in our own omniscience a little longer. But eventually, things get to customers, and they get to customers a lot quicker nowadays, if you're working on a web service, and then you realize, "Oh, well, there's a bug" and you wrote the code, so it's really your fault.

**Adam Stacoviak:** As part of writing this book, so having that answer, what would you change? Are there any Academia programs out there that are doing somewhat right, or mostly right, or really right, that sort of lead you to this change? Because I've gotta imagine that you've done a lot of research as part of writing this book, right?

**Adam Barr:** Yes, I did a lot of research; I read a lot of books... \[laughter\]

**Adam Stacoviak:** Sort of a trick question there...

**Adam Barr:** I talked to academics, I talked to professors who are into language study, the theory of languages, comparing languages, choosing the right language... I was at Carnegie Mellon. One school that I saw some graduates apply to Microsoft - it had some very impressive candidates - was a school called Olin in Massachusetts, which is specifically an engineering college. It seemed to have a bit more of a "Let's focus on actual real-world problems" approach.

So there's little bits here and there, but I think the general engineering degree from a big school - they'll pretty much follow the same general pattern I did when I was in school. That's based on talking to people and also just seeing candidates come in, and what courses they take, and what skillset they had when they showed up at Microsoft to interview... At least up to a couple years ago when I left Microsoft.

**Adam Stacoviak:** I'm thinking of two angles for this. One, to give some praise to those out there that are seeking to create that feedback loop between industry and Academia, but then also potentially some pointers to those listening that are not quite in their software engineering career, that are pursuing a four-year degree, or know someone, to say "Hey, Carnegie Mellon, or these other schools might be great examples", from your point of view, given this problem that we're talking about.

**Adam Barr:** The other thing I do wanna call out is the couple of school - Carnegie Mellon and Harvey Mudd - which are addressing another problem in software engineering, which is the lack of women, and they are really trying to make sure their programs are as open as possible to women, and encouraging them and supporting them, and trying not to get people scared off by the high school nerd type (which of course I was) who is most likely male, and make sure that a CS program is welcoming to people who just show up and say "Hey, I want a major in computer science, because I like computers, I like games, I like virtual reality. I have an interest in it, but I was not in the programming club in high school." I think that's very important, just to expand the pool of people who can become professional programmers, because we need a lot of programmers...

**Adam Stacoviak:** \[00:28:10.10\] Absolutely.

**Adam Barr:** ...and knocking 50% of the world's population out of the running from the start, of course, is a bad idea.

**Jerod Santo:** Thinking about this concept, good code/bad code, and even the problem with that and the troubles in that, and just going back to the analogy - because we can only compare ourselves to these other established academic traditions - you now when you made a bad bridge, because the bridge falls down. The laws of physics aren't changing. It seems like we are such a young industry, and software engineering is such a -- you know, is it an art, is it a science, is it a craft? I don't know, it seems like an amalgam. It's such a new thing... Like, what are best practices? What is good code? Even these things are moving targets.

We can teach design patterns, we can have principles, like "Don't repeat yourself", "Single responsibility" etc. but even those can be abused, and misused, and produce bad code at the end of the day, because the person who was following the rule didn't understand the times at which it make sense to break the rule to actually write good code... I kind of throw my hands up and say "Some of this seems like an untenable problem", and Adam, I'm curious what you think with regards to how do we even go about designing, or describing, or defining what code is good, what code is bad. Has there enough work been done in this in an objectified, quantifiable way, that we teach it with authority?

**Adam Barr:** I mean, there has been some research, there's been an uptick in it recently; I just saw a research on variable names recently, which is great... And that sounds like a simple thing, but at least it's a start, to say "Okay, we're not gonna argue over that." You could, of course, talk about tabs versus spaces, which is getting a little to the silly side, but... Things like method naming, and what's the right amount of commenting, and that sort of thing - those are very important, and there are better or worse ways to do it, and they have been studied.

I think there are things you can learn I think if industry had more of a demand for that sort of knowledge, if they actually paid attention to these sorts of studies, because Microsoft Research did a lot of studies of software engineering, but not a lot of that knowledge filtered back into actual product groups... So if people cared about that, it would drive more demand for it, and you could start studying all of these problems. But I think there is better code and worse code; a lot of it is only determined after the fact, long-term. Whether code is maintainable - you would see that in the bug rate, things like that, but that would take a while.

It sort of gets to this problem that people tend to study small pieces of code, and in particular what you can study in small pieces of code is performance, whether it runs fast. You can tweak the code, make it 5% faster by some clever little trick in how you write the code, and that's easy to evaluate by yourself, even on a smaller project in school, so people tend to focus on that. And a lot of people think that code that runs fast and is really "clever" is good code... Whereas figuring out if code is maintainable involves talking to other people, and then also just long-term usage over a large group of people, so it's very hard to study in an academic setting. You could do it, but it would require more work, so people tend to bias towards the things that they like when they're writing on their own, versus things that matter when working on a large piece of software.

So I think that's the important thing to realize... Although a lot of people seem to instinctively think that "Well, code that's faster is also cleaner, because I've cut out some code", or something. In fact, the typical pattern is that code starts out fairly cleanly designed, and then in order to make some performance optimizations, people will add some side-channel, or some extra API parameter or whatever, just because "Oh, in this situation we need to optimize it", and really performance is generally fighting against clean design, and therefore against readability and maintainability.

\[00:31:58.26\] I think a lot of people don't realize that, and when they complain about new kids coming out of school, that's what they complain about. They'll talk about people programming in C\# and they don't realize what exactly goes on when they're manipulating a string, and "Isn't that a terrible thing?" And to me -- I mean, I'll take people not knowing what code is generated on string manipulation; I'll take that gladly over buffer exploits in network-facing C code, where yeah, everyone knows what's going on with that string manipulation because you wrote the code yourself and you got it wrong, and you have a buffer overrun. That's much worse than, "Oh yeah, these kids today don't know what's going on."

To me, having string manipulation taken out of the hands of programmers, the nitty-gritty details, is a fantastic thing, which is why most modern languages have chosen to do that.

**Adam Stacoviak:** So you're basically saying it depends. \[laughter\]

**Adam Barr:** Yeah, I guess you could summarize most of my answers that way. As I said, think about readability over performance and cleverness; if we just got that notion lodged in everybody's head that that's what matters, I think that would be a huge step forward.

**Jerod Santo:** Sure. I agree with that. That being said, readability is inherently subjective, because it's up to the scrutiny of the reader, you know? Just like "Beauty is in the eye of the beholder." Readability is in the eye of the reader. Maybe we need to start so simple as prioritizing priorities, and saying readability is a priority; that's a good enough starting place.

From there, you have to then define "What is readable code, versus unreadable?" or "What is maintainable/changeable?" And like you said, you can track that retroactively. But to teach it in a rigorous, authoritative way - not to use that style, but... To have some truths about readability, it seems like a large endeavor, and one that would require -- it seems like this is what Academia should be doing. Shouldn't that be what they're doing?

**Adam Barr:** Oh, I absolutely agree. I mean, yes, of course, there's some subjective aspects to it, but you could first of all want to find out; you could say "We want to know what readable code is, and we want to study it", and if industry could say "If Academia tells us something, we'll actually pay attention to it", which is another problem. We won't just keep doing whatever we did last week.

Something like method length has been studied somewhat, and Steve McConnell in Code Complete looked at various studies; of course, that was 20+ years ago, but I think the answer was "Over 200 lines is too long." That was what the research actually showed back then. And you have people running around saying that over 10 lines is too long. I once saw a talk at Microsoft where somebody said that if you have to add a comment to your code at all, it means your method is too long... Which I think is silly, but of course, that's just my opinion. But clearly, you have wide disagreement if some people are claiming 200 is the cut-off and some people are claiming 10 lines is the cut-off... And this could be studied; yes, it's somewhat subjective, but at least get some clarity on these orders of magnitude differences that people are just arguing about, without neither side having particular proof of what they're saying.

**Jerod Santo:** Yeah. Interesting. To get even more extreme than that - I'm thinking about Sandi Metz's five rules; she's a long-time OOP programmer and teacher, and she has rules for programming. She says "Do these rules, and then eventually you'll learn when and why you can break them, and you'll get good at object-oriented programming." Her rules, very quickly: 100 lines per class, five lines per method (which I find incredibly constraining; when I tried this, I just immediately broke that one), four parameters per method, one object per view (that's a specific to MVC pattern, I believe), two class names per controller action. The last one is specific to Ruby on Rails, in that case, but at least the first three: a hundred line per class, five lines per method, four parameters per method, or four arguments sent in.

Those are some very constricting rules, that she believes produces good code... Or I guess produces clean code. So that produces clean code. So definitely some work being done in this space, but no consensus, because a lot of people would disagree with those rules.

**Adam Barr:** \[00:36:09.29\] Right. And what did she study? Is that just her personal experience, and based on what? I'm sure that's correct in some situations and incorrect in other situations... I think you have a lot of this where it's just--

**Jerod Santo:** Yeah, and she'll even say that it's not always correct, but she teaches it as a starting place for people, to go from there; start there and then move away. And hers is all industry experience, she's not an academic.

**Adam Barr:** Yeah, a lot of programming wisdom is "Hey, this thing works for me, so let's tell other people about it." The Law of Demeter, which is this pretty standard object-oriented concept; you know, class A knows about class B, and A can know about B, and B can know about C, but A should know details of C... Which was actually presented at OOPSLA a while ago. The original paper even, which was actually from academics, just said "Look, this is something we came up with. It might be a good idea, it might be a bad idea. It probably doesn't apply to all situations."

**Jerod Santo:** \[laughs\] I love it.

**Adam Barr:** "We need to study this more." The academic approach, where this is just one study, kind of thing...

**Jerod Santo:** Yeah.

**Adam Barr:** And clearly, there's some counter-examples where forcing an extra method on B, just to avoid A calling to C is sort of silly... But you know, now the Law of Demeter is often proposed as like "This is a thing you've gotta do. This is object-oriented canon. Don't violate it." So things tend to grow like that.

Even Agile... If you read the first Scrum paper, which was also at OOPSLA, Scrum was about only object-oriented code, and it was only about incremental improvements, not about version one, and it was only about a certain team size, and then it got popular, and now it's turned into this "be all, end all, solves all problems for all teams", and it's even leaking outside of computer science; my brother is a civil engineer and has heard about how Scrum can help you in engineering projects.

So I understand why it happens. People are successful, they can write books, they can go to conferences, people wanna hear more, so of course they're happy to tell them. And it's not a knock on the people that came up with Scrum. In the situation they were working on - small projects, making incremental improvements - it was a great idea; it was much better than trying to do some crazy waterfall project management, which was completely unnecessary, and not responsive to customers, and all that stuff. So Scrum in its correct environment is a good idea, but it got overhyped, like a lot of these things do.

You can look at dev ops, or functional programming; that's sort of what's getting over-hyped right now. Again, when there are good situations where dev ops is an improvement, or a functional language is the right choice, but they're not the magic solution to all software engineering problems.

**Jerod Santo:** So you're saying it depends...

**Adam Barr:** Yes, in this case I'm definitely saying it depends... \[laughter\] And that's one piece of advice to software engineers - just be a little skeptical if someone comes to town and says "Hey, I've got the solution here." Try to figure out if it actually really applies for your situation or not. Don't just go for the latest cool thing.

**Jerod Santo:** Here's a pro tip for people who are writing best practices or pattern style - if you aren't sure if it's a good idea or a bad idea, don't call it a law. The Law of Demeter - I think that's maybe the hubris there; even though they admit, like you said, in their paper that "This is a concept, we see some value to it." You call something a law, something like gravity; we're all pretty much stuck to that one. But with the Law of Demeter, as a young programmer, you hear law and you think "Alright, I can never call through to C. It's just a rule." That's problematic.

**Break:** \[00:39:43.18\]

**Adam Stacoviak:** So the goal of this book is to raise awareness, get the industry people interested in what's going on, but also Academia, having that feedback between the two counterparts. Industry is moving forward maybe faster, as we've said, than Academia, and for good reasons, and Academia has a whole different goal set in terms of educating the future software engineers of the world. So how do we get these two parties to talk more? Is it conferences, is it podcasts, is it forums? Based on your research, what are some good ways that we can get this feedback loop going?

**Adam Barr:** Well, I think conferences is a great starting point. I think that people in the industry tend to go to very technology-focused conferences, or open source conferences, and there's a lot of great conferences put on by IEEE/ACM, which people might think of as "Oh, that's academic stuff", but really it's actually a lot of valuable knowledge you can bring back... And then they do focus even somewhat on software engineering, not just on algorithms, on vision or AI. There are conferences about software engineering, but put on by the IEEE/ACM, not a particular technology or by Microsoft, a company.

**Adam Stacoviak:** With these conferences, do you think that professors or those who are in the positions to create curriculum or lead curriculum, they feel invited or welcomed, or there's actually content there that makes them feel like their time is valuable? Because obviously, they're probably older in their life, they probably have other things that are maybe attracting their time, like maybe vacations or something like that, when they've got some downtime... Do you think they feel like they're welcomed into this community?

**Adam Barr:** I think the professors, the researchers are welcomed. It's interesting, the term "software engineering" really first came into common usage in 1968, when NATO put on a software engineering conference and invited academics and industry people together, and they all agreed that "Yes, we have a problem with software engineering." Even 50 years ago we had the same problems - bugs, predictability and all that.

So they agreed, "Yes, we should have a conference next year to try to solve this problem." And in 1969 they had a conference, the second NATO software engineering conference, also the last NATO software engineering conference, because academics and industry got into a big argument about whose fault it was. The academics were off in the cloud, and the industry guys just wanna shovel software out the door... So that was the end of that. But there are some good conferences now.

I think one issue is that -- because I've talked to academics about this, and they say "Oh, there's people from Microsoft who come to our conference, and they present, and we talk to them", but that tends to be Microsoft Research, which is not the product groups. So as I said earlier, that knowledge doesn't tend to transfer back to the product groups that actually work on shipping software, and I wish we had a lot more people from those product groups that are actually shipping stuff go to those conferences.

\[00:43:58.13\] The big one probably is the International Conference on Software Engineering (ICSE), which is happening actually in May. That's a joint IEEE/ACM conference in Montreal this year, which is my hometown. Unfortunately, I can't go because of conflicts, but that's a very good, There's papers on a variety of topics, but some of them are about software engineering, some empirical studies of software engineering, where you could actually learn about this.

Somebody from a product group coming there and saying, "Hey, I actually work on a large piece of software. What can you teach me?" would be very welcomed. I think that people do want this knowledge to spread in the industry, it's just that there's a slight lack of this knowledge, and also industry is viewed as not really welcomed there, because they're just interested in shipping stuff and counting their money and whatnot.

So I think it would be great... The more actual people working on shipping software who showed up at these IEEE/ACM kinds of conferences, the better. So there's that, and there's actually the Empirical Software Engineering and Measurement Conference (ESEM), which is in Brazil next year... There's one on computer science education which just happened; next year's is in Portland, Oregon actually... It has a lot of interesting papers about people learning to program, which is actually still an important topic for industry people.

There's the Computer-Human Interaction Conference (CHI), which I think is in Scotland this year, coming up... Again, a very interesting topic for a lot of software developers. Actually, CHI started out studying programmers; that was the computer-human interaction they were interested in, it was programmers working with their computers, and it really was empirical software studies, but then it kind of veered into looking at users, how people interact with user interfaces, and stuff... But again, still very interesting for any programmer to learn about this sort of thing.

**Adam Stacoviak:** Jerod, have you heard of any of these conferences? Are they new on your list?

**Jerod Santo:** No, these are all not on my list, so I feel like this is good information to have. I'm also just revisiting the ACM (acm.org), which I haven't really considered this organization I think since I was at university. I think they gave free membership, or at least discounted membership back then, so I remember reading a few papers on ACM, but... Adam, would you even suggest membership of ACM, and participation in that organization or similar ones as a step?

**Adam Barr:** I would recommend that ACM and IEEE Computer Society - which are sort of similar, and they both put on conferences, and they're both useful... ACM has this awesome digital library, they've got all their publications going back 50+ years online. All the OOPSLA stuff... OOPSA is the ACM object-oriented conference. If you wanna read the original Scrum paper or the original Law of Demeter paper, or whatever... You can read Edsger Dijkstra complaining about this, that and the other... So there's a lot of good stuff, if you just want some historical background... Probably half the references in my book are just some obscure ACM paper that you have to -- I think you need a membership to read. Although your company may have a membership; if you're at a university, as you said, you can probably get a free membership.

I think ACM and IEEE Computer Society are very valuable things to join. Though my brother is a civil engineer, so he belongs to ACSE, the equivalent to the American Society of Civil Engineers, and it's kind of unquestioned, that of course a civil engineer would at least belong to that, and get their publications, have access to their library... And the fact that most programmers don't know about them, and certainly don't belong to them, is just kind of a strange thing in software. We're professional engineers working in industry, why would we not be involved with the two big professional associations in our industry?

**Jerod Santo:** It's a good question. Adam, have you ever thought about joining ACM, or anything like this?

**Adam Stacoviak:** No.

**Jerod Santo:** Me neither.

**Adam Stacoviak:** I mean, they're not even on my radar.

**Jerod Santo:** There's the disconnect right there, on display.

**Adam Barr:** And they actually have magazines. There's this thing they send you...

**Jerod Santo:** \[00:47:57.15\] Yeah, I definitely remember them, but it's almost like once I graduated college and went into the field and started writing software professionally, I completely disconnected from these things, and haven't ever considered them until today. \[laughs\] Which was 14-16 years later.

**Adam Barr:** Yeah, they just had an article by a physicist about why quantum computing might be entirely bogus, which was interesting to read... That sort of thing. They talk about self-driving cars a bit now... So just interesting stuff to read about. And like I said, it just seems like you should belong to it as a working programmer. I'm not trying to personally shame you, and I'm not here to sell memberships, but...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I think when we ask the question "How do we get both sides to speak?", I think we have the first step would be to be aware of the presence of each other. As an organization like Changelog Media, producing podcasts around software developers and the whole entire culture of creating software, whether it's leading it, creating it, designing it, you name it, I would imagine it would make sense for the two parties to be aware of one another, so that we can shed some light... And that's why this conversation with you is so important.

**Adam Barr:** Well, this is great. I feel all warm and fuzzy, because this really is what my book is trying to drive. I'm not proposing a solution to the problem with software; I have some suggestions, a lot of the stuff we talked about, but a lot of it is just bringing people together, recognizing the problem, and then we can start trying to tackle it.

**Adam Stacoviak:** The first step to any problem-solving is admitting there's a problem, and understanding it.

**Adam Barr:** And even back in the old days, working in Windows NT, we thought we were doing good engineering, and I think we were doing better engineering than most... I mean, we really tried to design in quality, to the extent that we understood that, but still, we had no unit tests... As I said, we had that "throw it over the wall" culture to tests, where we sort of blame tests if bugs happened. It took a long time to ship... So even people who wanted to do it well back then just didn't have the knowledge to do it well. But now I think there's a lot more out there; that's why the subtitle of the book, "Smart Engineers Write Bad Code" - I'm not trying to throw the engineers under the bus; for one thing, I am an engineer. People mean well, they're not malicious, they want to write good software, but there's this knowledge gap that they have.

**Jerod Santo:** While you were talking about Microsoft and the good old days, or the bad old days, or at least just the old days of Windows NT, what did you work on there? Any horror stories, or maybe the opposite of a horror story? Any good stories? Anything that was amazing that happened, or terrible, while you were there, that you'd like to share before we call it a show?

**Adam Barr:** Well, I worked on the first version of Windows NT, I worked on low-level networking, network transports and network card drivers. This is under Dave Cutler, back in the day, and there was probably only 40 or 50 developers on the whole thing. Now there's thousands, literally. We just had a reunion, actually, a 25-year reunion of shipping the first version in 1993, and Cutler was there, and a bunch of people I hadn't seen in a long time, which was really nice.

It was really where I worked on large software, and you get these problems where it happens once, and it triggers in a debugger, something crashes, and you have to go forensically, investigate it by digging through memory, and if you lose your Repro step if somebody kicks a power plug out of the wall, or your debugger disconnects or something, you've lost your state and you have to hope it happens again.

Thinking back, there were a lot of very difficult bugs in that environment, because you're so far down in the guts of the system. That's where I remember some specific bugs; we had weird bugs that happened due to something in a network lab configuration, or we had a bug because of a bad hardware chip, the actual network chip had a bug, which you never think of as a software developer... Things like that.

But then we also had bugs that were very tricky software problems that you just had to figure out. We had one bug where we tried to figure out what was happening with a Token Ring driver, which is some network technology so obscure that I'm sure most of your listeners never heard of it... So we had this Token Ring bug, and we said "Well, let's try to write to a log, some logging memory, to see what's happening, just track to this point. We've got a packet, we send a packet, the packet is completely transmitting, and we start out writing words to the log, transmit, receive, and we realize that even that was messing up the timing so much that we could write a single letter to the log. And we're talking about basically writing something to memory; writing one byte instead of six bytes, or whatever. We had to change it so we were writing only a single byte to memory at each point in this log, otherwise it messed up the timing and the bug never happened again. Things like that...

\[00:52:37.07\] When you start to work on applications and higher-level stuff, it's like "Oh, wow, this bug just repros every time. You run this test script and the thing crashes." It seems so easy, but... Yeah, just a lot of time spent, and that was back when you couldn't work remotely; you had to go into the lab to look at problems, you had to go to your desk to work on anything, so you spent a lot of time at work. If something broke, you were getting in your car and going to work to look at it; you couldn't just remote in.

When I look back -- I don't know if you ever read "The Soul of a New Machine", that book about a Data General project back in this '70s...

**Jerod Santo:** No.

**Adam Barr:** It was this crazy death march project, actually shipping hardware... And when I read that book, I thought "Wow, I wanna work on a project like that", and a bunch of other software engineers I talked to at Microsoft also read The Soul of a New Machine, and also had the same response, "Wow, I wanna work on a project like that", when you're sort of young and it seems exciting... And I really did work on that kind of project, and in retrospect, looking back, yes, it was a great experience, and all that. So I don't regret doing it, but... You know, I'm glad I got that checked off and now I can work on more rational things. But it was a great thing, and obviously it was hugely successful for Microsoft, and is the foundation of Windows, and it made a lot of money, and it's used by a billion people, or whatever it is... So it's kind of cool that somewhere down there in the guts of Windows there's probably still a couple lines of code that I wrote.

**Jerod Santo:** Especially if they're still using that Token Ring technology. \[laughs\]

**Adam Barr:** Yeah, hopefully not... I was in an airport in Barbados a couple months ago and they were remote booting, doing a network boot of the check-in terminal, because they had to reboot it, and I'm like "Oh, well, that's my code. It's about to get probably some of my code there", because I worked on remote boot at one point, too. "That's probably my code that's gonna get run soon."

**Jerod Santo:** Nice. Well, the best code is the code that continues to bring value, years down the road. If you think about what code is for - code that you write, and then gets used by a few people for a small amount of time and just doesn't have much value to it, even if it's readable and maintainable, and all the virtues... But code, even if it was ugly, and it was nasty, and it was bug-ridden, you had to bleed it out back in the day... And here it is, 30 years later, still bringing some value to some people around the world. That's a pretty cool thing.

**Adam Barr:** Yeah, and hopefully my code is somewhat readable.

**Jerod Santo:** \[laughs\] Well, I didn't mean to imply that it was terrible, I'm just saying you've learned a lot since then.

**Adam Barr:** When you're working at Microsoft, I would sometimes get mail 15 years after I'd work on something, because my name was there in the code, my alias was there in the code as the person who worked on it; these questions, "Why did you do this? I'm modifying something, and..." Yeah, trying to remember that is a little difficult... But hopefully -- I didn't get a lot of questions, because it was mostly understandable.

**Adam Stacoviak:** Maybe from that comparison, Jerod, there might be actually two types of code... Well, three - good code, bad code and valuable code. Because you can write good code that's not valuable, and you can have valuable code that's not good code.

**Jerod Santo:** What you want is good, valuable code.

**Adam Stacoviak:** That's right.

**Jerod Santo:** \[laughs\] Good, valuable code.

**Adam Stacoviak:** We know that much. Well, we'll take bad, valuable code too, because why not, right?

**Jerod Santo:** That's right, that's right.

**Adam Stacoviak:** I just think, you know, coming at it from that lens, is like thinking of a value standpoint... Because you can always go back and refactor, right? I mean, just because it's written doesn't mean you can't go back and change it. Obviously, that's time, and time is money, but if value is something we seek, then it's simply just good or bad. That might be more long-term value.

**Jerod Santo:** Yeah.

**Adam Barr:** \[00:55:57.04\] But I know there were cases at Microsoft where people would say "We can't understand this thing. We're just gonna throw it away." Some particular module, or a part of the NT kernel, or some application, where because of how it was written and the fact that everybody who worked on it was no longer around, it was just completely replaced, and obviously that's a big negative, if your code is just completely incomprehensible, and people think it's better to spend the time to completely rewrite it. For that to happen to your code. I don't think that has happened to anything I wrote, although who knows...

**Adam Stacoviak:** Me neither.

**Adam Barr:** Or they were kind enough not to tell me, I don't know.

**Jerod Santo:** Auto-mailer when they delete your last line of code from the system, to send an e-mail off... "Your code has been deleted. It has been wiped from the system." That would be rude.

**Adam Stacoviak:** So now that we're here at the tail end, remind us where the best place is to buy this book. If someone wants to go deeper than simply this conversation; this is an industry insider where you're explaining why there's so much bad software out there, and why Academia doesn't teach programmers what industry wants them to know. If they wanna dive deeper into this, where's the best place to buy this book?

**Adam Barr:** Well, it's on Amazon, BarnesAndNoble.com... It's published by MIT Press. I know the Barnes & Nobles in Seattle had it last time I checked, if you actually wanna go to a physical bookstore and buy it. Also, it's available on Kindle and whatever other eBook formats you choose to use.

**Adam Stacoviak:** You know, speaking of going to a real bookstore, I went to a Barnes & Noble recently, and those places are actually pretty cool. You can grab the book you wanna buy, you can look through it... I mean, how novel of an idea is that? You can even sit down in a comfortable chair and read a little bit of it. So cool! I would actually recommend that.

**Jerod Santo:** It turns out physical retail stores have value. Who would have thought...?

**Adam Stacoviak:** They do. Who would have thought...? And they've got cool music in there, a decent environment... It depends on when you go too, of course, but I'm an advocate of it.

**Adam Barr:** I do like bookstores, although there's been some shrinking of bookstores. I hope that Barnes & Nobles survives, and you still have that opportunity to go in, as you said, and actually get a book.

I live in Redmond, Washington and there's a local bookstore called "Bricks and Mortar Books", which started I think a couple years ago... And they're just being a nice little community bookstore. I certainly hope they survive. I try to go there and buy books there if I think they'll have it.

**Adam Stacoviak:** There you have it... The Problem With Software: Why Smart Engineers Write Bad Code. We've dug in deep with you, Adam. Thank you so much for your time. We'll link it up in the show notes...

**Adam Barr:** Well, thank you for having me.

**Adam Stacoviak:** And I really appreciate what you're doing for the industry, and your veteranship, and... You know, I've used Windows before, so I've used your code at least once...

**Jerod Santo:** Once...? \[laughs\]

**Adam Stacoviak:** Thank you for your time.

**Adam Barr:** My pleasure, thank you. I'm glad you enjoyed it.
