**Erik St. Martin:** We are back for another episode of GoTime. This episode is number 19. Today on the show we have myself, Erik St. Martin, we have Carlisia Campos also here...

**Carlisia Campos:** Hi !

**Erik St. Martin:** ...and Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** ...and our special guest today is none other than Katrina Owen.

**Katrina Owen:** Hello!

**Erik St. Martin:** Why don't you go ahead and give everybody a little bit of background about yourself before we get started.

**Katrina Owen:** I work as a developer advocate at GitHub on the open source team there. I do a lot of community stuff - I go to conferences, meet people, and a lot of open source work. I have a project named Exercism that I own, which is a platform for practicing programming in a number of different languages, including Go.

**Erik St. Martin:** Yeah, Exercism has been taking off recently. I look probably like two weeks ago and was completely astonished by the number of languages that are supported there now.

**Katrina Owen:** Yeah, we hit 32, which was kind of a big number - two times two, times two, times two, times two, I think... \[laughter\] We passed that a few weeks ago when we launched I believe MIPS Assembly, which was kind of cool.

**Brian Ketelsen:** It is their big deband from MIPS Assembly?

**Katrina Owen:** It turns out that Assembly language courses at universities often use a textbook that uses MIPS Assembly.

**Brian Ketelsen:** Ah-ha!

**Erik St. Martin:** Interesting. I would actually like Assembly, because... I mean, most Assembly books that I've read or seen are very much documentation and not "How do you write idiomatic Assembly?" I don't think anything I've looked at with Assembly does more than teach you the individual instructions and what they do. You don't really learn patterns from that. So that would be kind of cool.

**Katrina Owen:** It is pretty cool.

**Erik St. Martin:** And all my free time to learn new languages... \[laughter\]

**Katrina Owen:** A language a year. You've got the next 33 years all laid up for you.

**Erik St. Martin:** Right, but by then, how many new languages will you have?

**Katrina Owen:** Yeah, that's the problem.

**Brian Ketelsen:** Yeah, your hockey stick growth is slowing us down, I can't live that long.

**Carlisia Campos:** Actually, I just remembered that a lot of people and myself included keep wondering what is idiomatic Go, because there is no such thing as a listing of what idiomatic Go is, and it sounds like it's a mythical thing to me. Exercism actually guides you through that. The comments that you get back on your solutions are very much geared towards helping you write idiomatic Go. So just by doing it, you start understanding what it is, and the comments are very helpful and very empathetic, so I highly recommend it.

**Erik St. Martin:** So let's actually step back for a second for anybody who's not familiar with Exercism.io. Do you wanna give a brief introduction to what that is, Kristina?

**Katrina Owen:** Sure. It's basically a platform for practicing. It's different from a lot of other places where you do coding challenges and katas in that there is not competition; you're not competing with anyone, there's no leaderboard, there are no prizes or badges or anything like that. This is really about the day-to-day practice of getting better at the craft of programming, or it could be a very quick little amp up that you need when you're going to suddenly start a new project at work, in Scala, or Java or some other language, and you need to get into that language and get your head wrapped around the syntax of a language and the conventions of that language quickly, so that you can start producing code in a more complex environment.

**Erik St. Martin:** \[\\00:04:24.25\\\] This is basically bite-sized problems to be solved that you submit and are reviewed by people who have more experience in the language, that kind of guide you through how you might do that.

**Katrina Owen:** Yeah.

**Erik St. Martin:** Is that done anonymously?

**Katrina Owen:** No, it uses your GitHub username and avatar. We've talked about making it anonymous, but for the moment we have just not gone down that route. As you said, the format of the exercise is bite-sized, it's very small, trivial programs like "Calculate whether or not a year is a leap year"... It's mostly 20 to 50-line problems. We give you a working test suite so that you know when you're done - though 'done' is just the first iteration - and then given feedback, you can produce a new solution, iterate on it and improve things.

**Carlisia Campos:** Those test suites are awesome, by the way. My first encounter with Go, right after I started doing the exercises, and immediately I wanted to learn how to do tests, and I'm like "Oh, look at that, there are tests right here", and that's where I started learning tests from. It was perfect. They were simple, they were clear, they were concise, and they were all I needed to learn the basics, the fundamentals of how to do unit tests with Go.

**Katrina Owen:** That's awesome. I talked to someone at GopherCon who said that they learned Go -- so they were a game developer in Lua, and when they were switching to Go they used Exercism to learn it. When they started their new job at Fastly, they were the only person on their team that knew how to write tests in Go.

**Erik St. Martin:** Oh, wow.

**Brian Ketelsen:** That's awesome. Validation right there for you.

**Katrina Owen:** Yeah.

**Erik St. Martin:** And now the reviews are kind of crowdsourced. These are people with more experience who are kind of volunteering their time?

**Katrina Owen:** Yes.

**Erik St. Martin:** So people also sign up to kind of do that, as well?

**Katrina Owen:** Yeah. It's hard... There's this asymmetry where people want feedback but don't necessarily want to give feedback or know how to give feedback, how to do a correct review. And it's really intimidating to come in and say, "Oh, I'm gonna give someone feedback on their code, but maybe I'm not really good at Go, or I don't really feel like I know what I'm doing, or when I look at some code I might not feel like I know... Like, it's just code - how do I know what's good or not good, or idiomatic or not idiomatic?" There's a barrier to entry on actually providing feedback.

**Erik St. Martin:** I think there's some emotional side of it too, where somebody's trying to step out of their comfort zone and learn something new, and you want to support them in that and not beat them down on what feel like trivial things, too. But you commonly see that with people that are new to code review. They see something that they'd say something to a fellow programmer that they've worked with for years, but they don't wanna say it to somebody new, because they don't know how they're gonna take that.

**Katrina Owen:** \[\\00:07:34.09\\\] Right, and that's part of the thing of being on the internet - you probably don't know the person, you don't know their learning style, you don't know why they're there learning Go... Maybe they're learning programming for the first time and Go just happens to be that language. Maybe the have been programming for 20 years and Go is just for fun, maybe they need Go desperately for a project... It's hard to know.

**Carlisia Campos:** But there is also the positive reinforcement type of feedback, and there is a lot of that on Exercism. Regarding comments, I heard the Request For Commits episode number four, which is about building successful open source communities, and the guy said "Well, I have this community, I've built it, and one day I went on vacation and I came back and I saw people commenting using my voice." On Exercism, because Katrina comments on things and her style is a very solid, professional way of commenting, very kind... You definitely notice it's a good comment, if you are not familiar with code review. So you also notice people using her voice on their comments, and I thought that was so amazing; it totally blew my mind when I started noticing that.

**Erik St. Martin:** That's interesting... So they kind of picked up the review style and the way to speak to people and are kind of mirroring that?

**Carlisia Campos:** Yes, and then I even told Katrina at one point, "Wow, this is so amazing. You come for the code, and you stay for the comments", because you also learn how to comment on code. You can be giving correct feedback and you can also positive feedback, and how you do it... Katrina is a pro, and you will learn that, either from her or from the members who are also learning from her and from each other. It's amazing.

**Brian Ketelsen:** I love that.

**Erik St. Martin:** I guess anybody who want's to take time out of their day to help review these challenges more than likely really care about trying to evolve people, and aren't going to be rude, right? Most people who are gonna be rude don't wanna waste their time anyway.

**Katrina Owen:** Yes, they're elsewhere.

**Carlisia Campos:** But you can be rude without meaning to be rude. For example, I know how to do code review and I know what good, empathetic comments look like, but when I'm tired, I comment on things and then I look at it and I'm like "Oh my gosh, I could have said that in such a much nicer way, and I didn't. Ugh!" So it takes practice... You exercise that muscle so that even when you're tired you do it the way that you think is a good way, the way that you want to. So I totally see how somebody commenting and it seems it's coming across as rude, but maybe it wasn't intentionally rude. Obviously, there are those that are blatantly rude and you can see the intention behind it, but in some cases they just don't know.

**Erik St. Martin:** I think an important thing to remember from both sides, and I tell this to some of the guys who are new to code review, is when you're thinking about it, solving the problem is the hardest part, right? So looking at somebody else's solution and telling them how they can refine that to make it a little cleaner or a little more performant, that's significantly easier - especially if you're already knowledgeable in the domain - than it is to solve the problem.

So if I reviewed your code, I may have a ton of things to say about your code, but if I was presented with the problem without ever seeing anybody else's solution, I may have suffered from the same things, right? So I think having that empathy and keeping that frame of mind that this evolves as somebody's understanding of the problem evolves, and you weren't there for all of the small decisions along the line that lead to this. You're looking at it as a completed product, and thinking "How can I make this better?"

**Katrina Owen:** \[\\00:11:57.05\\\] And especially when you're learning a new language, you're not familiar with the standard library functions and the packages, you're not familiar with scoping works or constants work, so you'll often see a lot of flaring around as people try to figure out how to even get the syntax right. Then once it compiles, it's like "Oh, it work. Wonderful!" \[unintelligible 00:12:22.16\] and then it turns out that you've done all this extra stuff that turns out to just be noise. Once you start understanding the underlying implementation and the underlying language syntax, you can start simplifying and removing some of the complexity, and you need human feedback for that.

**Erik St. Martin:** I think that's a fair point. And even with refactoring... Refactoring is its own skill set. There's people who can look at this and they're like "Oh yeah, I just have to check this one method and do this", but it's a whole new world that most people aren't presented with.

**Brian Ketelsen:** I used to call that "running it through the Erik machine", because I would write horrible code and then I would give it to Erik and he would make it beautiful and performant and work. Erik's good at that part.

**Erik St. Martin:** Well, I'm not always... I mean, I look at a lot of code too that even I have written, and I'm like "This doesn't look clean" and I'm not quite sure how I wanna start to make it prettier and more abstracted. Sometimes it takes a fresh pair of eyes.

**Katrina Owen:** It really does. I talk about refactoring a lot, and I've just realized recently that when I do a talk about refactoring, I'm showing someone the clear path, the obvious path, the one that's obvious in hindsight, and almost always when I'm actually refactoring for the first time, I have no idea where it's gonna end up. I just recognize specific red flags, or code smells, or there are things that I don't like, and I choose to go down a path of exploring a cleaner solution or a better abstraction, but I don't ever know -- half the time, or maybe more than half the time, I back out the thing that I tried and I end up going in a different direction.

Whenever I talk about this in public, I forget to mention that part, so it looks like I have this godlike view of the end product, and it really isn't true.

**Erik St. Martin:** I commonly, for problems I'm not certain on where I'm going with them, I commonly will spike out something that kind of works, and then throw it away and start completely over now that I have a better view of the actual domain.

**Katrina Owen:** Yeah... One of the things I've been learning over the past few years is how to take much smaller steps so that everything is passing the whole time, and as soon as I decide that I don't wanna go down on one route, I can back it out and the test suite's always green.

**Erik St. Martin:** The whole red/green/refactor?

**Katrina Owen:** Yeah, mostly like "Stay green when you're refactoring." A lot of people will -- something will break, and then they're like "Oh, I know what to do. I know where I'm going with this", and then it will be broken for a long time, sometimes hours or even days at times, until they get everything back under control. I've been trying to avoid that just as an exercise, to see what happens if I take a small step and I keep things passing the whole way. Can I add more duplication? Can I do something a little bit weird temporarily to keep things green, so that everything goes more under control?

**Erik St. Martin:** That's a fair point. I'm guilty of some commit bombs myself. I refactored a ton of stuff and the test suite's not quite passing for a while...

**Katrina Owen:** Well, in Go, with the compiler telling where all your types are wrong and where you need to update the APIs, it's actually a lot easier. I'm more reckless in Go than I am in Ruby.

**Brian Ketelsen:** \[\\00:16:02.29\\\] That's interesting to hear, because I think I was significantly more reckless in Ruby than I was in Go. Maybe I was writing poor Ruby, or maybe I'm writing poor Go, I don't know. Which do you think it is for you?

**Katrina Owen:** I don't think it's either, I think it's just the style.

**Carlisia Campos:** I think I'm less reckless at this point in Go than I ever was in Ruby, even after a few years of doing Ruby, because of two things. One, the syntax is so short, it's so easy to memorize what you have to do. And two, although you haven't memorized it yet, the compiler is giving you feedback, so you're kind of seeing what the errors. And again, going back to the first point, there are just so few errors that you memorize them quickly. So pretty much I don't get a whole lot of compiler errors because I know what to do with the syntax.

**Katrina Owen:** I wonder if 'reckless' is the wrong word here, because with Go I trust that the compiler is going to tell me about every single mistake. So if I do some complicated rename or start working on changing a type, I know that the compiler is going to tell me about every single location where I have to make that change. In Ruby there was nothing that was gonna tell me everything, and I couldn't trust that my tests had all the changes, so I had to tread my way much more carefully. In Go I think I just feel safer with the compiler at my back.

**Brian Ketelsen:** It's almost like you're more carefree.

**Katrina Owen:** Yeah.

**Erik St. Martin:** You tend to, rather than looking at it from the negative side, like "Oh, you can be more reckless in Go", maybe it's just you don't have to scrutinize your refactorings as much; you don't have to examine them and think about all the dynamic places that might cause problems during runtime.

**Carlisia Campos:** Yeah, I can see that.

**Erik St. Martin:** Before we move on to other things, I wanna go back to Exercism real quick because I think we really should try to shout out and get people involved. There's multiple ways to be involved, right? By submitting exercises for languages you're familiar with and by helping to review code. Where is the best place to send people to do that?

**Katrina Owen:** There is a third option, secret door number three, and that is go to the Go language track repository on GitHub and watch it. Then when issues come in, help respond when pull requests come in, help review them. That would be an immense help to keep the language going and the people happy. So that's this sort of secret path to maintainership route.

The other pieces that you've already mentioned - doing the exercises, submitting them to the website... Once you submit, you get access to all of the other solutions to that particular exercise, so you can browse around and look at what other people have done, how that's different from yours; you can learn from reading their code and you can learn from comments that other people give on these solutions.

I have a little bot that does some linting and a little bit of static analysis in Go, to give feedback. It's mostly stuff that I was giving feedback on over and over again, so I just added this to the bot so that it automates that a little bit. But yeah, do the exercise and get feedback. In order to give feedback on an exercise, I would encourage you to do the exercise first, just to get a little bit of a feel for what the problem is and the different types of issues that people might run into with it.

**Brian Ketelsen:** Can you give us the link to that GitHub thing again, so we can make sure we get it in the show notes?

**Katrina Owen:** Yeah, for sure.

**Brian Ketelsen:** Awesome. So this is a good opportunity for us to take a break and thank our first sponsor, Linode.

**Break:** \[\\00:20:04.22\\\]

**Erik St. Martin:** Okay, so we were talking about Exercism. The other thing you recently did was the GopherCon talk, which blew many of our minds. I think you really were able to capture and put into words what a lot of us feel about breaking into the language, that we're too close to the problem sometimes because already have history there and we don't really think about... Like, I loved your graph analogy. That talk was probably one of the favorites there. I know a lot of people felt really close to it.

**Brian Ketelsen:** That was an amazing talk.

**Katrina Owen:** Thank you so much. It was a terrifying talk to do and to prepare.

**Erik St. Martin:** I don't know, I think you looked like a master up on the stage.

**Brian Ketelsen:** Not only did it resonate with almost everybody in the audience personally, but it was one of the best delivered talks and most compelling side decks, too. It was the total package: it was a great message, it was a great delivery, and a beautiful slide deck. First time I've seen a presentation where there was very little text on the screen, but instead images that were emotionally evocative towards the points that you were trying to make, and I thought that that was a very strong artistic use of slides. It drove home for me how much visually you can impact a presentation without words. I was really, truly impressed with the whole thing.

**Katrina Owen:** Thank you.

**Erik St. Martin:** I died with the Twinkie analogy, too. \[laughter\]

**Katrina Owen:** The Twinkie analogy is something I think about a lot. For anyone who didn't see the talk, when I read the language spec, I felt like I knew all the words - or almost all the words... There were some that I was completely unfamiliar with, like ebnf notation; that was something I had never actually been faced with before. And I really felt like I was reading the ingredients list for some complicated food or candy, and was expected to be able to draw a conclusion of how to produce that complicated food or candy from reading the ingredients list, and it made me feel pretty inadequate of a human.

**Erik St. Martin:** I've read the language spec a number of times and I continuously go back to it. It's hard to remember all that and put it in context sometimes. It's hard to just kind of read through it. It's small, and most of it we understand, but applying it is completely different.

**Katrina Owen:** Yeah. The purpose of it isn't really to tell you how to write Go code, it's more to tell you how to implement the Go language.

**Erik St. Martin:** That's true too for alternate compiler implementations.

**Brian Ketelsen:** \[\\00:24:04.13\\\] We mentioned a little bit earlier about idiomatic Go, and I remembered that we had a Wiki resource; there's a code review comments section on the GitHub.com/golang/go/wiki Code Review Comments, and it's what Google uses internally for their code reviews. So if there were no other canonical source of what idiomatic Go code should look like, that might be a really good place to start.

**Katrina Owen:** It's an awesome document. That and the Effective Go document/project as on my website - both of those are things that I refer to constantly when getting feedback on Go code. It's amazing.

**Erik St. Martin:** I need to look through the code review comments more often. I know I've looked at it in the past, but it's probably been a long time since I've look at it. It's amazing, especially as you get older, that "out of sight, out of mind." I'll be busy and I'll do stuff and I won't write code for a couple of months, and then I feel like somebody should put me through code review boot camp again, just to ensure that I'm still doing things correctly.

**Katrina Owen:** I actually did an experiment based on one of the exercises on Exercism. I started collecting some solutions that were typical - there might be 10 or 12 different directions that people take a solution in. As I put all of those in a document with the typical feedback that you might get if you go in that direction, and I kind of feel like it's a code review boot camp, a very small code review boot camp. You get reminded of where the resources are that refer to certain idioms or conventions, or why you might explain how the language works in this way and why you might choose this syntax over that syntax. It was an interesting experiment, I wish I could spend some more time developing that.

**Erik St. Martin:** So all of this stuff that you're doing really is kind of driving towards teaching people programming, and not just the language, but idioms and how to refactor talks you've done in the past. It seems like a lot of your motivation is to help people learn, and to learn in ways that work for them.

**Katrina Owen:** Yeah, I'm fascinated by how people learn, and I'm also fascinated by how often we teach people badly. The tools that we put in place, or the systems that we use often work for some people, but not for others, and the result is often that some people are left behind or left out, and left feeling that they're not smart enough or good enough, or competent, or they can't become programmers or they can't become whatever it is. And I feel that that's a tragedy really, for not just the people who are left behind, but for the community itself. We lose so much richness of experience, so much richness of all of these people with all of these experiences and points of view, and these ways of solving problems, and we don't have access to that if we only teach people in one way.

**Erik St. Martin:** Yeah, I love the approach of the small wins and kind of working on these things. We talked to Bryan Liles in the episode prior to the last and some of the same stuff was coming up, too. We talked about needing to have some of those small successes, because if you're just approached with one problem, or maybe ten different things you have to learn and understand to pull your website. What's DNS? What's HTTP, HTML, CSS, Javascript?

**Katrina Owen:** \[\\00:28:07.05\\\] What's a text editor? \[laughs\]

**Erik St. Martin:** Yeah. Now I need to store stuff in the database, now I need to learn SQL. You get hit with this, and it's easy to us to talk to friends or family or somebody who's interested in it, and be like "Oh yeah, all you gotta do is learn HTML and CSS and a little bit of Javascript. From there, pick a backend language and a database..." Then they're sitting here trying to figure out how tot get their web page showing up in a web server, and they feel inadequate and that it just takes natural ability. We forget that we learned all of these things in small wins, a little bit at a time.

**Katrina Owen:** Yeah, we weren't born knowing it either. We should \[unintelligible 00:28:49.19\] sometimes, I think.

**Erik St. Martin:** And there's so many other things, too. Git and GitHub, that's almost a necessity now, right? Oh, I wanna work on this thing... Before, you just had to unzip something. You just went to the website, you pulled down the TAR files (or the file, depending on the architecture you were working on) and you had the code.

**Katrina Owen:** Yeah.

**Erik St. Martin:** Now here's this whole other thing, cloning and...

**Katrina Owen:** Yeah. I'm helping someone learn how to program, I've been doing that for a while, and they're like "Okay, so I made my first website." It's on their computer and they look at it in their browser using the File:///, right? "How do I put it on the internet?" I was like, "Oh, that's easy. You use GitHub Pages." \[laughs\]

**Brian Ketelsen:** Just register DNS...

**Katrina Owen:** No, it's way easier than the DNS, you don't have to know DNS. You can use GitHub Pages, but of course, then you have to know Git, and that's a painful process.

**Erik St. Martin:** Right.

**Carlisia Campos:** My thinking when I tell people who want to learn to program or are not super experienced yet is "Master your editor and learn Git." Carrie Miller has a great talk about the need to fail to learn things, the need to experiment, and knowing your editor well and knowing Git well will help so much towards that goal. Because with Git, you add things to Git, you keep track and you change, when you wanna go back you go back, you jump around, you wipe things out, you reset things... So knowing Git well - or at least well enough - is such a big help. It makes you go from 2 to 8 as a developer, I think. Not to mention that it's super useful; you're gonna need it anyway to put things on the web, and things like that.

**Katrina Owen:** Yeah, I completely agree. There's a new series by Michael Hartl that he and some of his colleagues are working on called "Learn Enough to Be Dangerous" (learnenough.com) The very first thing that he gives you is a tutorial for the command line. Like, "Get just enough command line to be dangerous." Then the second thing is a text editor, and the third thing is Git - that's super important.

**Erik St. Martin:** I have a friend that's breaking into programming, and I have him developing off of just an Ubuntu Linux machine, just so he can get enough basic commands - moving around, copying files... It's almost a necessity these days. One thing I like about the evolution of Linux is that it's much more approachable for people, but I think one drawback to that is many of the lessons I learned in tech were through diagnosing problems in Linux... \[laughter\] Why is the networking not working? Each one of those little problems is a learning lesson, but the problem is giving people problems that are easily approachable with their knowledge, so that it's just beyond their boundaries, and not something totally off the wall, like having to recompile your video driver in Apache because it doesn't work with the newest Kernel version, or something.

**Katrina Owen:** \[\\00:32:13.13\\\] Yeah, that's not very friendly towards newbies who learn to program for the first time.

**Erik St. Martin:** Yeah, I think a little bit of Linux knowledge... At least being able to SSH and understanding what SSH is. In this day and age, security is a big thing, so understanding a little bit about how firewalls work, cross-site scripting... You can't think about too much of it at once, that's the problem. I wish there was like a steps things, because that's always the hardest part I find. I could write down all the things you need to learn to write a production site, but what order to approach those? Because it feels like circular dependencies.

**Katrina Owen:** It's easy to make small adjustments for syntax and for standard library stuff, but it really isn't easy to figure out which order to teach those. Like you were saying, DNS and SSH, networking, debugging, troubleshooting...

**Erik St. Martin:** Yeah, understanding HTTP protocol, and cookies, and things like that. And now, I mean, TLS is becoming almost a requirement, so now you have to understand a little bit about that; it feels like we're evolving, but we're making it harder to break into. I used to just throw caution to the wind and drop PHP or Perl files upon a shared hosting site... \[laughter\]

**Katrina Owen:** ...which, let's say, it totally worked.

**Erik St. Martin:** Yeah. You needed to know how to use an FTP client and that was about it.

**Brian Ketelsen:** Those were the days... Just make sure it's in the right directory, and everything was taken care of.

**Erik St. Martin:** This is actually an interesting thought, too - would something like Exercism work in learning Linux basics, configuring Apache, or NGINX, or little micro successes there to help people learn the systems level of the field?

**Katrina Owen:** I think it would work, but I don't know how we would do feedback. I think we could make a lot of very small challenges that people could be successful with, but I don't know how we would look at what they did and say, "You could do it better in this way."

**Erik St. Martin:** Yeah, you're right, the feedback part, aside from the fact that it works would be difficult. I suppose if you're looking at different ways somebody wrote a systemd unit file or something, you could say "Well, you don't actually want to modify the original, you can do with the overwrites." So I suppose there's stuff like that, but the hard part would be transitioning that, because I feel like you'd wanna start with some sort of base VM or container that had most of the stuff there, and they just needed to complete some task for it for, say, the site fork, or something like that.

**Katrina Owen:** That is actually really useful, having something that basically works, and just change one thing. Or that almost works, and just find the one troubleshoot, one change you need to make - I think that would be a fantastic model.

**Erik St. Martin:** Here's a container that has a Caddy setup with your blog auto-generating, but a service doesn't start when the container starts, and go!

**Katrina Owen:** Yeah, exactly.

**Erik St. Martin:** Yeah, that would be interesting, to start thinking about some other things like that that are kind of ancillary bits of knowledge that are required to do what we do.

**Carlisia Campos:** Talking about ancillary bits of knowledge... Read the errors.

**Katrina Owen:** \[\\00:36:00.15\\\] YEAH! \[laughter\]

**Carlisia Campos:** It's not until you become beaten up by years and years of programming and debugging that you really give in, and "Okay, reading the error log is profitable. I'm going to do it." It's amazing... When people are new to programming you tell them, "Read the error log", and they don't. And you tell them, "Read the error log", and they don't... It takes a while for you to really convince yourself that is super profitable.

**Katrina Owen:** I would actually ask people, "So what does the error say?" and they would flip back to their terminal and say, "I think what's wrong is...", and I was like "No, no, no... What does the error say?" They're like, "Well, it says that there's...", and I'm like "No, read it out loud, word for word. Tell me the words." \[laughter\] Because it's so important.

**Carlisia Campos:** Yeah.

**Brian Ketelsen:** But how many times do we catch ourselves not reading the error? I do it at least once a week. Or the error message is staring me right in the face, telling me exactly what's wrong, and I change 16 other things trying to fix it before I realize what I've done.

**Katrina Owen:** Yeah, I'm always making assumptions.

**Brian Ketelsen:** And then I go foolish.

**Katrina Owen:** Yeah, because we are all foolish; let's just be honest here.

**Carlisia Campos:** I think we are in a hurry more than anything else.

**Katrina Owen:** Yeah, I think we are. About six years ago I was freaking out basically, because I thought I had to learn everything. Like, every new article that I saw was another thing I had to learn, and I had this backlog of hundreds and hundreds and hundreds of articles, tutorials and technologies I had to learn.

And I finally decided that I was gonna give up. I was not gonna learn anything. I was gonna only do research or learn something new for one of two reasons. The first one was if I had an error, I would slow down and figure out exactly why I have the error. No more jumping on Stack Overflow and guess, like copy and paste and see if maybe the error goes away, whether or not I understand how it went away. And the second reason was I'm just too curious and I can't not learn the thing. But the error thing is kind of the most important.

**Brian Ketelsen:** Yeah, that's a good rule to live by.

**Erik St. Martin:** Yeah... I need to go through and clear out all my bookmarks of things that I wanna learn, and accept that some of the stacks of books that I bought I'm just never gonna get to. Because I tend to want to dive in; there'll be some new thing that I'm challenged with, and I'd be like "Oh, that seems cool", and I wanna know everything I can about it, so I'll buy books and I'll bookmark sites, and then I start to realize that I don't have time to make it through one of those books, much less five.

**Katrina Owen:** Yeah. I try to put off actually bookmarking or searching or buying until I sit down and decide to do it, because it's like, I know how to google, I can find those links if I want to; I can find the books if I'm ready. If I have a whole weekend to spend on something, I'm sure I'll find good resources. I don't have to save it off ahead of time.

**Erik St. Martin:** That's true. You just kind of do it real time, rather than pre-plan your learning flow.

**Katrina Owen:** It's hard though, because it's tempting.

**Brian Ketelsen:** Speaking of errors, our other sponsor is Backtrace.

**Break:** \[\\00:39:28.26\\\]

**Erik St. Martin:** That was perfect. If felt kind of right in.

**Carlisia Campos:** We planned it. It was all planned. Everything we do is planned.

**Erik St. Martin:** We all knew the way the topic was gonna flow. So I think we've got about 20 minutes left, and I wanted to get to a technology you had mentioned in the e-mail, Katrina, which is the GraphQL API. That's been something that has been on my radar for probably a year or two, the whole notion of GraphQL. I'd love to talk about that more.

**Katrina Owen:** Let's do it. Should I start?

**Erik St. Martin:** Yeah.

**Katrina Owen:** I was gonna write a little tool a couple weeks ago, and this was a tool that the idea is to use the GitHub APIs to get more data about the health of a repo or the health of a project. By health, the things that I'm thinking about the most are how responsive are the maintainers. If you post an issue or if you submit a pull request, how long will it take you to get someone from the core team to comment on that or give you some idea that you are not posting into a black hole? That's one thing.

The other thing is, are there any people actually commenting on pull requests and issues? It doesn't even need to be the maintainers. If someone's giving code reviews, it doesn't really need to be someone who has a commit on the project. So I wanted to use the GitHub APIs to find this information, because it's not obvious just by looking at the repo.

I realized that I was gonna have to make basically a bajillion requests, and for every request that I made, I was gonna have to make an extra request to figure out some ancillary information that I needed in order to do this analysis. This was like a week before GitHub announced the GraphQL integration.

So the thing about GraphQL is you can now design your query upfront and get all of the data back and not have this N+1 problem when talking to the API. That's pretty exciting.

**Erik St. Martin:** I didn't even realize that GitHub had GraphQL APIs now. The only place I had really seen leveraged was through Facebook where it came out of, but it's really cool, the way you nest the information that you want, and then kind of have these little -- I don't know what you would call the little additions where you can kind of do the first/last; they probably have naming for those little operations or directives, or whatever they call them. Then you can mutate the data...

It was really cool thinking about that, where you have this highly nested data where you don't wanna have your looping problems, and stuff like that. So have you actually had a chance to work with GraphQL?

**Katrina Owen:** No, it's on my list for when I get home from this trip.

**Erik St. Martin:** \[\\00:43:45.13\\\] I have to admit I have yet to work with it, but it seemed interesting. A couple of years ago Brian and I were working on a project that had that kind of nested data where you wanted to get this tree of information and do counts on some of them, and things like that. We ended up designing something different; GraphQL wasn't released yet, right Brian?

**Brian Ketelsen:** No.

**Erik St. Martin:** It was something that Facebook had started talking about.

**Brian Ketelsen:** It was unreleased at that point. It probably would have worked, but maybe it wouldn't have been fast enough. I don't know.

**Erik St. Martin:** So in your concept of doing this intelligent querying against the GitHub API, it's just to kind of rate the contributors to a different project to kind of determine who should have what role, or...?

**Katrina Owen:** Yeah, there are two things. One is where do I need to put my attention? I might have 70 repositories, and it's really hard to know what the state of everything is, and I get 500 notifications every week about issues that I need to look at. So I need to know if there are repositories where the maintainers are on top of things; I can put that in a different filter in my inbox, and I can check in once a week for every other week, and just make sure that they don't need me for anything, but they've got this.

Then for the ones that don't have responsive maintainers, I can spend more time. I can filter that into something that I check every day and make sure that I give the feedback that needs to be given on a regular basis, and much more aggressively. The other thing is for a repository where someone is giving feedback and they don't have commit, it would allow me to find people who probably should have commit on that repository, or they're doing the work of a maintainer but they haven't been recognized as such yet.

I had a working prototype where I was sucking down the data, but I was using the old APIs, not the GraphQL APIs, so it wouldn't work to get me all the \[unintelligible 00:46:05.20\]

**Carlisia Campos:** Besides the use cases that you just gave us for the maintainer, for the consumer of the project, I think it would be super awesome. Every time I run into a project that I'm considering, unless it's a super well-established and well-known project, there is a checklist of things that I do. I go through the issues list, I see if there are issues abandoned, I see if there are PRs abandoned, or I see people commenting, I see if PRs are being closed, I see how many issues and how many PRs are open... Of course, if it's an active project there can be a ton of PRs open, but they are being cycled through quickly, that's fine; if things are stale... I wanna know those things, and I do them manually. So that would be so awesome, if we could have that.

**Katrina Owen:** Yeah, this would potentially... What you said - run it against the repo and say, "Yes, people are getting responses." That would actually work even if there's not a lot of activity. If people get a response very quickly, even though the project is mostly stable, then it's still a good project to contribute to. Whereas if it's a project where the average response time is months or years, you might not wanna contribute.

**Carlisia Campos:** Super cool.

**Erik St. Martin:** Yeah, that's awesome. Although I have to say I've never worked on a project so big that it would require hitting the API to determine the state of my project. That's a whole new world.

**Carlisia Campos:** But sometimes you might not be a maintainer that works on a project that's so big, but you might have a ton of little projects, and it takes a lot of time to be on top of everything.

**Katrina Owen:** \[\\00:48:02.24\\\] Yes.

**Erik St. Martin:** Doing open source stuff on the side and also holding down a day job, it's a struggle for a lot of people, so anything that can kind of help organize things and tell them where their minimum amount of time is best spent, I definitely think it's advantageous.

**Katrina Owen:** There's a really good question in the chat right now: what if the project is run by someone who closes the issue instantly and dismisses them? That's really not healthy behavior at all, and I don't know if we could surface that with the data. Are they also giving a response when they close it? If all of the issues are closed within... There's a difference between responding to an issue and closing an issue. I don't know, it's definitely something that is very interesting to look into.

**Erik St. Martin:** Yeah, because I think there's a lot of factors that go into that too, right? Maybe they're quick fixes that require commits, maybe it's a duplicate of other issues... There's probably somebody who's better at math than I that can figure out some insights into whether it's unhealthy closing of issues, or maybe they can do some text analysis on it, sentiment analysis on the text and determine if they're closing them with very negative comments all the time.

**Katrina Owen:** Yeah, so thanks for the question, Florian; the question was mentioned in the GoTime FM Slack channel.

**Brian Ketelsen:** Yeah, how awesome is it that our guests are answering questions live on Slack while we broadcast? This is 2016, folks. This is it. This is 2016. We have reached the future.

**Carlisia Campos:** Katrina, you also have a blog that you post to... Maybe not super frequently, but the content is amazing. I know you have one blog post that coincidentally last week Aaron Schlesinger took one of the concurrency examples... Three Trivial Concurrency Exercises For The Confused Newbie Gopher. He took exercise number two out of that and he did one episode of Go In 5 Minutes.

**Katrina Owen:** That's awesome, I didn't know that.

**Carlisia Campos:** Yeah, I'll link to it. It's super helpful.

**Katrina Owen:** That's great to know. I just kind of write... Sometimes I'll run into a question that it seems like there should be a good answer, but there is no blog post that really does that, so I try to just write that blog post that somebody might stumble on and could be useful to them. The most recent thing I posted was how do you take a static hand crafted website and turn it into something that Hugo generates, if you discover that what you needed wasn't a brochure site after all and you're actually adding things to it regularly. It becomes really tedious if you're copying and pasting headers.

The Hugo documentation and reference material is awesome. However, if you haven't really gotten into Hugo, it's hard to figure out when you have a more focused... Like, "I just want to figure how to do X. I wanna take my website and convert it to Hugo."

Anyway, that's the type of blog post that I try to write - the little thing that you stumble across that was tricky and really does have a simple answer.

**Brian Ketelsen:** I've gotta go read that. I've probably done 15 Hugo website cut-ups now, and I'm getting really good, but I wish I had your blog post two years ago.

**Katrina Owen:** \[\\00:51:59.07\\\] Well, the first time it's so hard...

**Brian Ketelsen:** It's painful.

**Erik St. Martin:** So I think we've got about ten minutes left, and I'd love to move on to some projects and news. Brian's got a good one.

**Brian Ketelsen:** I've got some big news I'm itching to share. One of our prolific listeners, Chase Adams, had a brand new baby girl L, and he's constantly tweeting pictures of him and her listening to GoTime FM, so we want to congratulate Chase and mom and baby L. Congratulations on the new Gopher addition to your family. There's no better news than babies, that's so exciting.

**Erik St. Martin:** He was reading Go books to the baby while it was still in her stomach.

**Brian Ketelsen:** That's how you do it.

**Erik St. Martin:** That's commitment.

**Carlisia Campos:** She'll be on GoTime giving us tips pretty soon. \[laughter\]

**Brian Ketelsen:** Soon enough.

**Erik St. Martin:** Guest on the show at two. Brian, I think you sent this out somewhere, and I'm stealing it because it was pretty awesome. There's this GitHub project that's completely written in Go, but it takes a picture and then creates geometry shapes and rebuilds the image with it. It's just awesome. It's far beyond my ability, but this thing is pretty sweet. It's called Primitive.

**Brian Ketelsen:** Oh, that's right... Fogleman?

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** Github.com/fogleman/primitive. They have a Twitter feed too, they've just posted something on Twitter, so I started following the Twitter feed too, because it's really neat. They take these images and turn them into a very low number of polygons using Go, and they're surprisingly artistic and fun to look at, so I followed their Twitter feed, too.

**Erik St. Martin:** I love it when people come up with these creative uses for things that you totally would not have thought of.

**Brian Ketelsen:** I did this this morning, I did a primitive rendition of the barbecue gopher from our Gopher Barbecue Slack channel. I will drop that into our Slack here while we're talking, so that everybody can see how cool Primitive is while we're poking around here.

**Katrina Owen:** Wow, that's beautiful.

**Erik St. Martin:** Yeah, I don't know who thought of this, but this is just crazy. I wanna go through a picture collection and just run all of it through there. I need to write a script, see what emerges.

**Katrina Owen:** Awesome! This might have to be my next slide deck for my next talk.

**Brian Ketelsen:** The neat thing about it is that you can choose to output a regular file, or if you choose a .gif, it will create an animated .gif for you and show the process while it creates all those polygons, and that is just so cool to watch. I'm really enjoying that.

**Erik St. Martin:** That's actually a fun idea - take your slide deck, run your slide deck through this, and then get new images.

**Katrina Owen:** Cool.

**Erik St. Martin:** Alright, anybody else have any fun projects and news?

**Carlisia Campos:** I wanna mention something that I thought was super interesting and cool... Sameer Ajmani, he managed the Go language team; he posted on Twitter a couple days ago that he's looking for people who are using Go to teach university courses, because he wants to help them have better resources. I'd really like to see Go moving in that direction. I also then found out that there was a Wiki page on the Golang Wiki that lists a bunch of CS courses that are already using Go; I had no idea.

**Katrina Owen:** That's brilliant.

**Carlisia Campos:** \[\\00:56:00.20\\\] Yeah, right? I had no idea. So spread the word, because I think Go is such a good language to learn how to program. I might be biased... I don't know. I think it is.

**Brian Ketelsen:** I was just having a conversation two days ago with somebody who's name I've already forgotten, who teaches Go at a college in California, and he loves it. He says it's the perfect teaching language.

**Carlisia Campos:** I know, it's Todd McLeod's.

**Brian Ketelsen:** Maybe that's it. I don't know. I've slept since then, so I've forgotten.

**Carlisia Campos:** He teaches in Fresno. He recently did a GoBridge workshop in Fresno, it was very cool. Actually, that is a good segue into my next thing that I want to mention, which was mentioned by Florin Patan in our ping repo (thank you!). It is Better Go Playground Chrome Extension. This thing is so cool. Basically, you install it in the Chrome and just leave it there, and every time you go to the playground, you're gonna have syntax highlighting; it gives you the option of having a dark or light theme, and it also says that it has autocompletes, but I haven't figured out how to activate it.

Also, if you run your code and you have errors, there will be an indication in the line, telling you where the error is. When I got the extension, I remembered that Todd had a bunch of snippets from the Go Playground, and I just went through the list and opened them in a Go Playground to test out this extension. \[unintelligible 00:57:44.28\] That's what I wanted to mention for projects and news.

**Erik St. Martin:** This is like one step closer to Brian's ultimate goal, which is to just deploy a VM in a cloud and develop off of it.

**Brian Ketelsen:** Oh, don't get me started. I am there. Maybe we should have an episode on that, because I completed it today, Erik. My goal is done. It is complete.

**Erik St. Martin:** That's awesome.

**Brian Ketelsen:** In fact, I showed it off to somebody today, and he was pretty impressed. So the one thing I wanted to bring up was Gallium, which is the framework for building native web apps in Go, much like React Native, but Go Native, and that is totally awesome. I can't wait to dig into that some time in 2018 when I have some free time. It has all of the native app bits that you need, and then you can just start up a Go web server and serve your UI through the native app. Super excited about that... We've needed a Go solution for that problem for a long time. That's at github.com/alexflint/gallium. Go play with it.

**Erik St. Martin:** This is very much similar to Electron, but in Go.

**Brian Ketelsen:** Yes, exactly.

**Erik St. Martin:** This is really cool. This was a while back, but I was attempting to do something with Go and Seth, which was the Chrome embedded framework. I never took off with it too far, I think mostly because of time. But this is really cool.

**Brian Ketelsen:** Yeah, I wanna play with it. A lot. I won't, because I don't have time. \[laughter\]

**Erik St. Martin:** Our first episode in mid-2018, we will talk about what you did with it. \[laughter\]

**Brian Ketelsen:** \[\\00:59:45.07\\\] So maybe that's a good segue into \#FreeSoftwareFriday. \[laughter\] Familiar listeners will know that we love to shout out to open source projects and maintainers, and just let them that we care, we love them, we love the work they do and we appreciate their projects, so I will start out today with something that's probably a little bit cheesy, but dammit, I love Go, and I've spent so much time this last week or two building a lot of tooling for my training classes, and I just don't think there's a way in the world I could have done it without Go.

A couple hundred lines of code and I've got a fully automated solution to bring new students online, on a server, with a Go environment and a web IDE with two clicks. It's just amazing. I love Go. Thank you, Go. Thank you, Go Team, thank you everybody who's contributed to go. Big hearts everywhere.

**Carlisia Campos:** And you have a pretty cool course to teach people how to do that, right?

**Brian Ketelsen:** That's true, I'm teaching a lot of classes, upcoming in October. Boston, I've got an online class 24th or 23rd October, both through O'Reilly. If you're listening live, you can use discount code Ketelsen to get 25% off either one of those classes.

**Carlisia Campos:** I really wanna take your online class \[unintelligible 01:01:16.08\] you'll be teaching.

**Erik St. Martin:** They have claims. \[laughs\]

**Carlisia Campos:** Well, I'll be lucky if Fastly pays for it, so I'm definitely gonna be asking. Because I think I'm right there, needing to master everything that's listed there. I feel like I'm close, but it's also very confusing to figure out what the idiomatic way is, and you spend a lot of time trying to figure that out, as opposed to just \[unintelligible 01:01:45.22\]. So I think the course is perfect for me, for where I am, so I definitely wanna take it.

**Erik St. Martin:** So this is the thing that Brian's been trying to show off to me for like the last week, and I've been too busy. It creates a user, sandboxes them inside of a container, copies over the training material... It did a whole bunch of stuff; it has a little command line tool for it...

**Brian Ketelsen:** Everything. You go to a web page with an invite code, and it creates you a complete online Go development environment with a web shell and a web IDE. It's all Sandbox, it's got Docker, and all you really have to do is fill in your name and an invite code and hit Go, and it just works.

**Katrina Owen:** Brilliant.

**Brian Ketelsen:** It almost falls into what we were talking about earlier, that idea of building environments for people to learn it. I noticed Andrew Gerrand posted a slide deck about an idea today, the Go workspace tool that he's working on. The same concept - how do you get somebody from, "Okay, I've installed Go" to "How do I start using Go?" There's a gap there, and I'm aiming to narrow that gap with my students. With some time I'd like to make it open source, because I think it's powerful enough that it would be helpful for other people teaching.

**Carlisia Campos:** And for the record, he's not working on it... I think he's \[unintelligible 01:03:19.20\] out there and trying to entice people to take on the work where he left off. He's done some work, but he doesn't seem to have the bandwidth to continue. He explicitly said he's not working on it.

**Brian Ketelsen:** Well, that's too bad.

**Erik St. Martin:** Alright. Carlisia, do you wanna go next?

**Carlisia Campos:** Yes. I definitely wanna give a shout out to Exercism - how could we not? It's awesome. Katrina is awesome, everything about it is awesome. If you haven't checked that out...

**Erik St. Martin:** I don't think I wanna know how much time she's invested into that... It's probably scary.

**Katrina Owen:** Yeah, I don't wanna talk about that. \[laughter\]

**Erik St. Martin:** \[\\01:04:00.09\\\] Those battle scars...

**Carlisia Campos:** And I also wanna give a shout out to GoConvey. I have been using it a lot. I don't use it as a test package, but I use it to -- we were talking about refactoring, red/green. If you put it up on your project and you open it on your browser, it just gives you that nice green-red-green-red. I don't have my editor set up to check compiler errors on tests, I check it on GoConvey and I feel super productive like that. I'm changing things, either on the tests or \[unintelligible 01:04:42.04\] file on the corresponding file, and I just get the notification from GoConvey. It's quick, and it's been great. I love it. I love color-coded things as well, that makes me so happy!

**Erik St. Martin:** I used to use it a lot, and I'm actually ashamed to say I haven't used it very much lately. I think it's like you jump in and you try to start doing stuff quickly, and then that kind of becomes your pattern and you fall off from some of these things. I need to start using it again.

**Brian Ketelsen:** But it's so pretty, having that dashboard.

**Erik St. Martin:** Yeah, and the browser notifications.

**Brian Ketelsen:** Yeah.

**Carlisia Campos:** Yeah, and the green is such a pretty green; you wanna see that green all the time. \[laughter\]

**Brian Ketelsen:** I long for the green.

**Carlisia Campos:** Another thing that I love about it is that it gives you a percentage of your test coverage. On the left it keeps track, and you see a bar inching up as you add tests. And everytime you change a test, if there was a change to the code coverage, if it was an increase you would see an up arrow with a notification, and if it was a decrease, you would see a down arrow with a notification. It's sort of like a game, you just wanna see the up arrow all the time. You wanna see an arrow there. Because if you change something and there is no change in the code coverage, it doesn't give you anything. So you just wanna keep seeing that up arrow there all the time.

**Brian Ketelsen:** It's like that stupid fuel economy gauge in my car - every time I see it I'm like "Oh, I need to back off the gas..." \[laughter\]

**Erik St. Martin:** The hard part with that though is by gamifying it like that you can also get bad habits too, because you can increase code coverage with meaningless tests, too. Code coverage just means that every line is executed, it doesn't necessarily mean that you're actually testing real-world use cases and paths to a good program. That's the hard part with the aiming for 100% code coverage. You can get there and not necessarily have a good test suite.

**Brian Ketelsen:** That's a show all on its own.

**Carlisia Campos:** Yeah, that is true. But Go also has a very good test coverage tool. If you haven't exercised that path, you know you should. Maybe you write a test and it's not gonna be the best test; maybe it's gonna be misleading, but at least... I think not having the test is bad; having tests that are not good tests is like, "Okay, it's not good", you gotta make it better. The next step then is having tests that are meaningful.

**Brian Ketelsen:** Yeah, any tests are better than no tests.

**Erik St. Martin:** Agreed.

**Brian Ketelsen:** It's funny, because I think we talked about this an episode or two ago... In the Rubby world, where testing was religious, I didn't like writing tests and I didn't write a lot of tests. Now in Go I very frequently do TDD and I test everything, and it's strange... And I have that compiler backing me up too, I don't know. It's strange.

**Katrina Owen:** \[\\01:08:05.12\\\] In Ruby a lot of the tests were so slow that it was just painful. In Go the tests are much quicker.

**Brian Ketelsen:** You know, maybe that's it - it's the nearly instantaneous response time. I'm impatient.

**Carlisia Campos:** Fast tests is what hooked me to Go. Go had me at fast tests.

**Katrina Owen:** Yeah, fast tests was my motivation to learn how to refactor, so that I could have less decoupling and load fewer dependencies when I was testing my code.

**Erik St. Martin:** That's kind of a big goal of mine. I always find it hard when I'm up against something that requires a lot of mocking and stubbing in order to \[unintelligible 01:08:46.01\], but I can't stand that having to require having some Etcd cluster for this thing to run against. I don't want that. It means I can't just run it on my laptop while I'm on an airplane.

**Brian Ketelsen:** Well, that brings up a completely random thought about the Gopher Slack - we have a barbecue channel, and we are building a PID controller for our barbecue grills, which will automate keeping the grill at a particular temperature by controlling the air flow into the fire pit. And the first thing I did when I started writing the code was build out the interfaces, because seriously, I don't wanna have to test I2C interface on a Raspberry Pi. I just don't.

**Katrina Owen:** You shouldn't have to.

**Brian Ketelsen:** Yeah, those are things that I want to mock immediately. So I built all the interfaces first, and I'm building mocks now for all of them; even without having all of the hardware, I'll be able to prove most of the application logic is good before we get it put together.

**Erik St. Martin:** Now, the benefit of doing only end-to-end testing... So, granted, development time is longer, but it tastes way better. \[laughter\]

**Katrina Owen:** It's part of a slow go movement...

**Erik St. Martin:** It's actually surprising how many people are really jumping in on the project, too.

**Katrina Owen:** Awesome.

**Brian Ketelsen:** That's github.com/bbqgophers, if anybody wants to jump in and join. We're having a ton of fun. Raspberry Pi's, little bits of electronics and lots of Go. And barbecue, don't forget the barbeque part; that's the important thing. We might have won the best name ever. The PID controller that we're writing is called Qpid. \[laughter\]

**Katrina Owen:** Yeah, that's adorable. You win.

**Erik St. Martin:** You win the internet. My project this week is Bosun, which came out of Stack Overflow. It's this really cool library that can kind of go up against time series databases, OpenTSDB, Elasticsearch, InfluxDB, and basically has this kind of like expressive language that you can use to do counts and aggregates and things like that, and then do alerting based off of that. It's great for monitoring...

**Brian Ketelsen:** Barbecue?

**Erik St. Martin:** ...which might also be very good for monitoring barbecue.

**Brian Ketelsen:** Is that how it came up?

**Erik St. Martin:** That is exactly... Well, Comcast is using it too internally, so I have to be fair. That's what we're using for Kubernetes monitoring and alerting. But it came up for this episode because somebody suggested another one, and then I suggested this one for monitoring the grill temperatures.

**Brian Ketelsen:** Metrics or it didn't happen.

**Erik St. Martin:** Alright, I don't wanna blindside you here Katrina, but did you have anybody you wanted to give a shout out to?

**Katrina Owen:** \[\\01:12:02.09\\\] I do. I would love to the Hoodie team. They are an open source project who... So this is someone who knows how to do community. They have possibly the healthiest open source community and healthiest open source project that I have ever seen in my whole life, and I aspire to basically become them, if I can, when I grow up. A lot of communities struggle with things like communication, triage, issues and prioritization and documentation, and the Hoodie team has built tools around the entire onboarding process to become a contributor, to mentor contributors, and they value the whole contributions equally; it's not like your measuring who gets commits into master. They help build out the tools so that it's clear that they value mentorship, value documentation and value triage and project management.

I think that what they've done with their communities is absolutely amazing. One of their team members was on another Changelog episode not too long ago, Jan Lehnardt. He was on the Request for Commits episode \#4, talking about building healthy communities. Absolutely worth a listen.

**Carlisia Campos:** That's the person I was referring to when I mentioned that he went away on vacation, then came back and people were talking in his voice. I was comparing him to you, Katrina. I noticed that pattern as well with Exercism.

**Katrina Owen:** I'm so flattered... I want to be him when I grow up. \[laughter\]

**Carlisia Campos:** Let's not end this show... Can we just keep going?

**Brian Ketelsen:** Let's just keep going, just let it roll.

**Erik St. Martin:** Unfortunately it has to end sometime. I think we would all get hungry.

**Brian Ketelsen:** Well, soon my kids will be knocking on the door. "Feed us, feed us, feed us!"

**Erik St. Martin:** Alright.

**Brian Ketelsen:** Well, it's been a very awesome show. Thanks so much for coming on, Katrina.

**Katrina Owen:** Thanks so much for inviting me, it's been a lot of fun.

**Brian Ketelsen:** I think we've really covered a wide gamut of things on this show. That's atypical, but we've covered a lot of territory in this show.

**Erik St. Martin:** Choosing the headline for the episode will be fun, like which things to mention. But yeah, definitely thank you for coming on, this has been a lot of fun.

**Katrina Owen:** Thanks so much for having me.

**Erik St. Martin:** And thanks to all the listeners and everybody who's participating live in the Slack channel. For next week, if anybody else wants to participate, we're on the Gophers Slack in GoTime FM. We are @GoTimeFM on Twitter, we are GoTime.fm online if you want to subscribe if you haven't already subscribed. Big shout out to our sponsors, Linode and Backtrace for this episode. If you wanna be a guest or you wanna suggest guests or topics, GitHub.com/gotimefm/ping. I think I covered everything... Alright everybody, it's been fun.

**Carlisia Campos:** Thank you, goodbye!

**Brian Ketelsen:** Goodbye!

**Katrina Owen:** Thanks, bye-bye!
