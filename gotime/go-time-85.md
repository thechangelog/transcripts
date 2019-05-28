**Carmen Andoh:** Welcome back, everyone, to Go Time. I am Carmen Andoh and Mat is out this week, so I will be your host for the journey. Joining me today is our recurring panelist, Ashley McNamara. Say hello, Ashley.

**Ashley McNamara:** Hello, everyone.

**Carmen Andoh:** And we have a returning guest, Jon Calhoun, who is the content founder for [Gophercises.com](https://gophercises.com/), but also [UseGolang.com](https://www.usegolang.com/), [TestWithGo.com](https://testwithgo.com/), [ErrorsInGo.com](https://errorsingo.com/)... So I'm excited to have you on, Jon. Say hi.

**Jon Calhoun:** Hey, everybody.

**Carmen Andoh:** And now we have a new guest, Dave Valentine. He's the instructor of Udemy's [A Gentle Introduction to Golang for Beginners](https://www.udemy.com/a-gentle-introduction-to-google-go-golang-for-beginners/?couponCode=GOTIME_2019). Welcome to our show!

**David Valentine:** Thank you so much! It's a pleasure to be here for the first time.

**Carmen Andoh:** Speaking of beginnings, when we asked Dave to show up on the show and give a profile pic, he submitted one of him as like a toddler, with TRS-80 Model 1, circa 1980... I think that's probably when you began?

**David Valentine:** Absolutely! And Carmen, I have to say, I was chuckling when you were like "What computer is that?!" \[laughter\] But yes, yes, I got a start in the microcomputer generation world, so I started with TRS-80, and I moved over to a PC Junior, and then continued on through microcomputers and programming way back at that time... So I've had an early start on things.

**Carmen Andoh:** Wow...!

**Ashley McNamara:** That is hard! That is a hardcore nerd.

**Carmen Andoh:** Yeah... Total nostalgia ahoy, I'm sure, for many people. Certainly you can share what you started with when you were beginning, your first computer, in the \#GoTimeFM channel on GopherSlack.

Okay, so let's talk a little bit about today's theme... This is Golang For Beginners. I had originally envisioned this episode to be meant to engage both non-Go-users, that listen to maybe sister podcasts on Changelog, or any Go-curious programmers out there, as well as encourage those have just started with Go and want to level up beyond the basics. I'm hoping that maybe we can start and just see where the conversation takes us. We have three wonderful experts online today, and see what their perspectives and their experiences and how they've shared content to help gophers worldwide.

I guess the first thing I wanted to start with is to ask - what is a beginner? What types of beginners are there? Anyone?

**Ashley McNamara:** \[00:04:18.15\] Good question. There are beginners that know one programming language and they want to learn another; there are people that are career-transitioning, that don't know any programming... There's all kinds of beginners.

**Jon Calhoun:** I was gonna say, there's even the curious kids who don't know what they're doing and like to break their parents' technology, which is probably some of us... \[laughter\]

**Carmen Andoh:** Yeah.

**Ashley McNamara:** Those are my favorites.

**David Valentine:** Absolutely. I've experienced that with one of the courses that I've published... One of the kids was literally saying "I don't have system privilege to install Go on my computer. What do I do? How do I get around that kind of a thing?"

**Carmen Andoh:** Whoa...! \[laughs\]

**David Valentine:** ...because his dad had bought him the course. I've actually in my program originally created a course that was in advance of the one I currently have in the marketplace, which I've since retired, that was kind of trying to get the entire beginners in Go space, where it's for people that are experienced with programming, and it's for people that are new to programming for the first time... But what I found was I was trying to appeal to too many different people, so the course content wasn't that effective.

Since then, I've actually specialized in making something very clear it is for absolute beginners, because I actually walk them through some of the fundamentals of computer science in learning Go, and giving them a foundation if they've never seen anything before. So I've actually learned to specialize.

**Carmen Andoh:** And is this the course that I mentioned before, or is this a different course?

**David Valentine:** It is exactly the course you've just mentioned, yes. That one's been in the marketplace since January of this year. It's a reboot specifically - and I've taken the other one out of the marketplace - intended for people that have never seen programming languages before, and wanna get started with the exciting computer language Go.

**Carmen Andoh:** That's great. And just a reminder to everyone - what Dave is referring to is Udemy (Udemy.com) and it's called A Gentle Introduction to Golang for Beginners. Is that what you mean by "Gentle", the idea that you're a complete beginner, not just a beginner to Go?

**David Valentine:** Exactly right, that is just it. What tends to happen with beginners is that they end up making assumptions about what the computer is doing underneath, and they end up almost with a heuristic knowledge, or almost some voodoo... "Why is it like that?!" Well, I prefer to try to explain tip to tail everything that's happening; maybe it's that deep computer background from that TRS-80 timeframe... But I get into memory, and what computer code actually looks like, and the role of a compiler, and I try to expose all of the pieces, so at the end the light bulb goes on, and somebody understands -- especially when it comes to understanding the concept of what's at a memory location, versus what a memory location is itself. That is the type of journey that I bring people through, specifically though in relation to the computer language Go.

**Ashley McNamara:** That is the kind of course that I value specifically as somebody who does not have a CS degree. I think I get into the weeds often, because what happens - I am my own worst enemy - is I try to learn something and I'm like "No, no, I need to know the thing before that, and then the thing before that, and then the thing before that", until I'm like "Have I learned anything at all?" \[laughter\] So I like to get into the weeds a little bit, but if it's self-guided, sometimes I'm too in the weeds.

**Jon Calhoun:** \[00:07:52.21\] I think this is one of the reasons why at times I feel like the younger you are, the easier it is to learn this stuff... Because you're more willing to just take things for granted, I think. Whereas the older you get, you're like -- I just think that it's easy, as an adult, to think "I need to figure out what all these things are doing and understand and at all." As a kid, you're just like "I'm willing to just trust you and just go with it, and let it go."

**Carmen Andoh:** Interesting. So you think that's maybe the key, just sort of trusting whoever has shaped the content is gonna structure the content, that's how you're gonna learn, or...?

**Jon Calhoun:** I think sometimes. One example I can give is I talked to somebody who had started a company, and when they started the company, they couldn't find a technical founder, so they basically just went and learned programming on their own... And I was talking to them about how they learned to program, and the one thing I found interesting was that they basically forced themselves to go through 3 or 4 complete web development courses... And they said the first time there was a lot of things that were mentioned that they just didn't quite get, but by the time they went through their third course, some of those things -- they had enough understanding and foundation that those more intricate details started to make sense... And I think if you get too focused on them early, you just go down too many rabbit holes and you don't really get anywhere. But if you're willing to just push yourself through it and realize that "I'll come back to this later" or "We'll go through the material again later", then that can really help.

**Carmen Andoh:** That's a good point. Now, you've mentioned a little bit about kids and whatnot - I also wanted to ask a little bit what everyone's thoughts were about industry trends and educational backgrounds... Because I'm seeing that we are increasingly having people within our industry that are not formally trained with the university CS degree, but maybe are self-taught, or they went through a bootcamp. I know Ashley that was your path, right?

**Ashley McNamara:** Yes.

**Carmen Andoh:** So is there anything in terms of difference between how we teach people that are not CS degree learners?

**Ashley McNamara:** Bootcamps are predatory. Sorry, all bootcamp grads... I value you; you don't know that you're predatory... I did all of the OpenCourseWare for all of the major universities. That material was way more valuable. But it's hard when you don't know where to start; you believe that you need a classroom setting.

Some of us are not in a place where we can go get our CS degrees. That is a place of privilege... So some of us have to learn. With all of these online courses out there, there are many more opportunities to self-pace and self-teach... And not all of them are great, so it takes some time to get through them. But for me, I wanna say that the most valuable learning that I did when I was learning to program was the OpenCourseWare.

**Carmen Andoh:** Jon and Dave, can you tell us a little bit about your personal journeys, both as beginners, but just beginners to Go, how you leveled up there?

**David Valentine:** Absolutely. I'll jump in there first. Go is -- gosh, my eighth, ninth, tenth (I'm not even sure anymore) computer language, and obviously having a background in computer science and having done a lot of things with it... Python is another one of the language that I do a lot with, because I also teach and introduce people to machine learning and artificial intelligence concepts and courses.

With Go, to be honest, it sort of came about for me from market research, because I became curious about what I should make my next great course on. And then I found this amazing computer language that really is a next-generation computer language... Because almost any other language that we may even consider new was really developed in the last century, right? And I love the Go story, the legend being that people were waiting for a C++ program to finish compiling and said "Hey, if we were to develop a language now, what could/should/would that look like?" And you've got some brilliant engineers that ended up putting it together... So I became absolutely fascinated by it.

I realized that - here was a language that back in the day when I learned C for the first time, very much smelled like, tasted like, acted like C, exposed some of those fundamental computer bits, but had grown into being so much more than a system-based language. So I literally fell in love with it.

\[00:12:14.07\] Then because I had intended to develop a course on it -- what I really try to do in all the courses that I teach is I try to develop a roadmap so that my students aren't depending on me. With the internet there is this amazing amount of material out there, but it's not curated in a meaningful way... And that is maybe the secret sauce that I try to bring to the table. Because people have the itch, they have that "How do I get up to speed and make meaningful use of my time in order to achieve a learning understanding with Go?", or whatever their thing is. And so in the course I have what I call an emergency Golang parachute, which is learning resources, right out of the gate, saying "If you get stuck, here's all the really other cool stuff that's out there that you should know about, so that you can take advantage of that in order to supplement your learning." And then I finish off the course with "Here's where to go from here to continue your learning journey", and then take them through that piece where they can effectively then use those examples and resources.

It's that very beginning. That beginning is so hard for people that don't have any experience, so giving them that ignition, even that permission to break things and experiment with things, and to think about things as they're coding and developing their exercises and so on - it gets them that little bit of traction with their wheels and gets them started. And the more students I can get started, the happier I am.

**Carmen Andoh:** That's great! I think that's also a really good companion or complementary to what Jon does... Which is - okay, you have an ignition, you know the basics and the foundations; the next thing you've gotta do is... \[laughs\] Gophercises! Right, Jon? Tell us a little bit about that.

**Jon Calhoun:** Yeah, so... Basically, whenever I learned, what I generally found was that it didn't matter if I was coding the prettiest code, or anything; it generally came down to if I coded a lot, I learned a lot. And if I didn't build things, I sort of just stopped learning. And I think a lot of times I've talked to tons and tons of people who are like "I'm trying to build things, but I can't come up with a good project." And what's even worse is if they come up with a project they like -- I had a friend who did this all the time... He'd say "I have this cool project" and he'd present it to me, and I'd be like "Well, it's gonna be really hard for you to do that project at your current skill level because there's like six other factors that you don't know much about, and I know from experience that they're going to be very hard." They'll want to get data from it and they'll assume there's an API to get some data, and it's like "Nah, that doesn't really exist. You're probably gonna have to scrape web pages, and that's gonna be terribly hard."

So Gophercises was kind of me saying -- you know, if I was starting over and I just wanted some random exercises to build, that weren't completely boring, but would challenge me, would teach me to read the docs, to look at different APIs in the standard library, to do stuff like that, what would they look like? And I basically just sat down and picked out 20 projects that -- I sort of picked them intentionally to try different stuff. I didn't wanna keep using the same thing; I didn't wanna build like 20 web applications... But the idea was, you know, if you go through all of these and you code them all and you actually give it an honest shot of trying to solve each problem on your own, you will learn a ton in the process. Even if you don't complete them fully, or you don't understand everything, or your code is pretty ugly - it doesn't matter; you'll still learn a lot doing it.

**Ashley McNamara:** I think that that's so valuable as well, because - I tweeted about this recently... When I was learning to code, I was already pretty well established in tech on Twitter; so I'm like "How should I start?" "Just build something!" "Build what?" "Something." "What? Where do I start? How do I start? What do I build? I don't know." "Well, you know what - figure it out; that's how you learn, just figure it out."

**Jon Calhoun:** And that's really frustrating.

**Ashley McNamara:** \[00:16:09.26\] So frustrating... Like, build a to-do app. Tell me something, tell me where to start. I feel like really experienced programmers - that's their go-to advice. "Well, just go build something."

**David Valentine:** Actually, the other advice that I'd add to that though... I mean, if you've got a project, build it. But don't just build it just once, build it three times. \[laughs\]

**Carmen Andoh:** Huh...

**David Valentine:** Because the first time you build it, you're gonna commit all the sins and you're gonna build the wrong thing. It's not gonna meet the needs that you're looking to address with it, it's not gonna work well. You're gonna think "Ugh, that was horrific..."

The second time it will probably function and achieve what you want it to achieve in terms of the end results of the things that you're building, but you're gonna think "Ugh, that is some ugly, awful, evil code." There are monsters working inside that that you hate. And the third time, you're in a position where you can actually put together some really elegant approaches to develop some beautiful code.

So if I were to add any advice with that, once you do find that something, whatever that is, if that's reproducing someone's example or finding anything that inspires you to build something, build it three times.

**Ashley McNamara:** Wow... I love that advice.

**Carmen Andoh:** Me too. I heard once that if you want to become a great writer, don't read 100 books; just read one book 100 times. I think this is kind of in the same vein, Dave, in that this gives you the chance to revisit a thing at different stages - which is reality - in terms of maintaining a piece of software as it ages, as you age and increase in your skillset etc. That's really great. I love that and I'm gonna try that.

**Jon Calhoun:** Just to add something to that - I know some people get bored doing that, or I should say some people seem like they do; even if you don't build the exact same thing, I think building similar things probably would go in line with what Dave is saying... Because I'll see people take a course, and they'll just build whatever is in the course, and they'll be done. And what I really like to encourage is to go back through the course and build something similar, but not quite the same, so it forces you to go out on your own and sort of do what he's saying, to try different stuff, to do a little bit different... But you're still building the same basic building blocks; you're building a web application, or you're building a CLI or whatever, but it might do something slightly different, that forces you to really think about what you're doing and consider stuff.

**Carmen Andoh:** Yes, John. And I think that learning is repetition, right? If you learn anything, you're gonna need to repeat it in order to make it go to long-term memory. But I think that that's also a great approach.

**Break:** \[00:18:50.29\]

**Carmen Andoh:** Well, I wanna segue into instead of maybe talking more about how we learn and approaches to learning, let's talk about learning in Go. We kind of touched on that, about the starting point and foundations and computer science fundamentals in your Udemy course, Dave, but... How do you teach beginners Go? And we can talk about this either from other languages, in terms of their experience, or from scratch. What do you think is unique to learning in Go, versus just programming in general?

**David Valentine:** Well, I specifically at this point specialize in starting from scratch, so I have my course that is designed really to bring someone up from scratch. One thing I did find is that originally some people were finding some trouble with the technical aspects of it; they were having some trouble with GOPATH and GOROOT, and some of those things... And originally, I had created Windows installation videos and saying "Hey, if you want, you can go ahead and do the same thing on Mac, you can do the same thing on Linux...", and when I rebooted the course and specialized more in helping beginners, I said "To heck with that noise", and I literally have approached it to give them videos, and follow-through instructions on Windows 10, on macOS, as well as Ubuntu Linux, so that they at least have something that looks, tastes and smells similar to whatever platform they have, because there were some people that were experiencing problems. And my intent with it is to reduce the amount of friction at all possible.

Once they achieve that though, what I find is that people are really functional within it, they get an understanding... One of the beautiful things that is unique about Go as well is that if people want, they can get into the Go code itself; it's there, it's in your work station. If you're interested in how println() works, and things of that nature, you can sort of dive into it, and start to see these other elements and how they come together in the compiler, and provide the end user experience of the compilation and the code that gets executed.

So I think it's really similar to other programming languages in the sense that the fundamentals are the same, but it has great syntax, it's really thoughtful, it's really built for concurrency, and I think it's a really effective language for beginners, because some of those obscure elements in earlier languages aren't there, it's very quick to compile... So I'm really an evangelist when it comes to it. But I did find that some of the students that always experience that have that little bit of friction at first, and now if I can get them over that, then they're off to the races. It's usually a very early problem early on, or they're off to the races and then asking more advanced items out of the gate. So there's this pendulum that swings in their experience, I find, where they're like "Oh, that was awesome! What's next?"

**Ashley McNamara:** In the beginning -- well, you know, until recently (Thanks, Go team!), GOPATH was a nightmare. Once you got through that hurdle, after you're ready to throw your computer, and then you build something, you're feeling better... But I think that the hurdle of setting up your GOPATH was such a nightmare that people were just like "No... No. If this is just setup, how's it gonna be?"

**David Valentine:** \[00:24:04.05\] Oh, absolutely. And getting to be set out of the default was the most brilliant thing that could happen.

**Jon Calhoun:** I think that's one of the reasons why you see PHP being so popular still to this day. And I still think one of the big reasons it was was because if you knew very little, you could find a free PHP server and just upload a file, or you FTP in, or something, and connect to it and change a file, and you would see results. You didn't have to understand or install anything, and you could get stuff working. And I think every new language should strive for as much simplicity as possible.

That's one of the reasons why I love the Go Playground, because I'm glad they thought about -- like, we need some way for somebody to quickly and easily just write some code; yeah, it's limited to the standard library, and some stuff like that, but it's still a great learning tool for somebody who, like you said, couldn't install it for some reason, or they just wanna see it before they actually spend that time... Because I think if we don't focus on that sum, there's languages like Javascript where you can have interactive tutorials really easily in Javascript, and somebody can just bring up Chrome and open up Chrome DevTools and write some Javascript... So the barrier to entry there is so small that I think it's important for other languages to keep that in mind.

**Carmen Andoh:** Yeah, this is a good thing that I kind of was wondering... Like, how much is setup a part of learning Go versus other languages? And you mentioned PHP and Java, and if it's different. What are some of the setup gotchas in addition, or you think are gonna be the gotchas, or the learning gotchas? And maybe we can ask for audience participation on the \#GoTimeFm Slack channel.

**Ashley McNamara:** Well, some of these \[unintelligible 00:25:31.24\] are saying that GOPATH made perfect sense to them, so... Good job, guys! Good job.

**Jon Calhoun:** I think the problem with it was it either made sense to you, or it made no sense to you. There was no middle ground.

**Ashley McNamara:** Yes.

**David Valentine:** And it was also very platform-specific as well, right? Because at that point when you're hooking into environment variables, or whatever your platform is, you can get stuck in the details of your particular platform.

**Jon Calhoun:** Yeah. Especially because a lot of beginners are coming from Windows, and setting environment variables has always seemed easier to me in Mac or Linux, whereas in Windows, trying to get somebody to go set that stuff up correctly was sometimes a pain.

**Ashley McNamara:** Super-pain. Me and [Steve Francia](https://twitter.com/spf13) (Hi, Steve!) used to teach workshops, and the first thing that we would do is "Raise your hand if you use a Windows machine. Great. You guys are now friends, because you're going to need to help each other during setup, because we cannot help you."

**Carmen Andoh:** Yeah, taught them, and I have that material and I thought it was amazing... A CLI workshop, and I think it was for OSCON last year, or the year before. The slide deck is something like 300-some slides, and setup, Ashley, was like the first third of that. So I just wonder - is that the hump that we just want to help beginners get over, and then they'll be able to get really productive soon after that?

**Ashley McNamara:** It really was the first half of the workshop. Setup was difficult for a lot of people. There was a lot of going around and helping people get their machines set up. Once we got into building the app, things seemed to flow much easier... So yeah, setup was definitely a big issue.

**Jon Calhoun:** I think setup is also the biggest quitting point, too.

**Carmen Andoh:** Yeah.

**Jon Calhoun:** At some point during setup, if it stops working, you quit. But if you're writing code and you've got most things running, I think you're less likely to quit at that point.

**Carmen Andoh:** And is this unique to Go? I wanna give a nod to any beginner out there, whether it's somebody who's already learned something else in terms of the programming language, or someone who's a complete beginner - is setup a quitting point for all languages, or is it a little bit more painful in Go?

**Jon Calhoun:** I think it's all. I think every language has some barrier to entry, and once you get it, you're good, but up until that point it can be frustrating.

**David Valentine:** I do think it also depends whether you're talking about an interpreted language or a compiled language as well, right? Because it is a little hard to compare Go to an interpreted language, the like of PHP perhaps, in the way that it's structured and some of those elements that it actually achieves underneath.

\[00:28:03.29\] One other element I think comes into play is once you have Go set up, what do you hook in after that? Is it an IDE? Do you have plans for an IDE? Because there's some really outstanding things you can do afterwards, and yeah, I show - just like everyone else does - how do you make a Hello, world program on the command line. But then if you can actually trace, and set up breakpoints, and have an IDE experience after that that will help guide the student, then they can trace their way through the code, which again, will help them understand what's actually happening underneath the covers.

So there's that initial setup, but then also -- ask anyone, they have their favorite, whether it's Atom, Sublime, Visual Studio Code... Everyone has their favorite tools to then add to whatever language they're programming in at that point.

**Carmen Andoh:** And then what do you think about in terms of content or setup, in terms of audience competence? We have a comment here from Cory LaNou in the \#GoTimeFM Slack, who said that go install was the easiest that he's ever used... But again, it was geared towards me as an audience, so we're saying somebody who's an inexperienced beginner. So for the people who have sort of looked through content, created content, in this panel, do you feel that there are audience for whom there are content gaps for beginners?

**Ashley McNamara:** Yeah, I do think... When people ask me what language they should start with, I usually say Python, because there's so much information out there, and I felt like setup was easier, for some reason. For Go, I feel like there's a lot of highly technical things out there, which is great, and then there are some beginner courses that may or may not work; I'm excited to try your guys' (courses). So I just felt like beginner materials were super-lacking.

For me, when I learn a new programming language - I am not ashamed by this, I don't care if you laugh - I buy children's books. I love kids' programming books. They are the greatest. There needs to be one for Go yesterday.

**Carmen Andoh:** Oh my god, yes! \[laughs\] Well, you know, there was this trend - it's probably about eight years old now; do you remember ELI5, Explain It Like I'm 5?

**Ashley McNamara:** Yes.

**Carmen Andoh:** Those were great. We had someone in the chat earlier saying "Well, I need to learn the thing to get to the thing, and learn the thing before that thing", and it's just a recursive -- but I don't know this all the way down, so I'm hoping your Gentle Beginners' Course tackles exactly that.

**David Valentine:** Well, I appreciate that, and I'll tell you, you're almost throwing the gauntlet down, because I have twin eleven-year-olds, and while they have tasted a little bit of Python and a lot of Scratch, I'm thinking I should be maybe the first to write a Golang children's book at this rate, so... We'll see. I'll give it some thought.

**Ashley McNamara:** Please do.

**Carmen Andoh:** Yes.

**Jon Calhoun:** I hope you have a good artist, because I feel like that'd be my biggest limitation; if I was drawing it, it would like a five-year-old drew the whole thing.

**David Valentine:** Oh, \[unintelligible 00:31:03.01\] I'd be full up on the red, green and blue colors. It would look horrific, so... Yeah, I need -- any artists, shout it out and I could probably use some folks to collaborate with on this, no doubt.

**Ashley McNamara:** I'm here, I'm taking note... \[laughs\]

**Carmen Andoh:** Well, there may or may not be a pre-eminent artist for the Golang community speaking to us at this moment, right now, maybe... I don't know, what you think...? \[laughs\] Yeah, Ashley's gophers are -- how many are there in your automated--

**Ashley McNamara:** Hundreds.

**Carmen Andoh:** Billions, in gopherize.me.

**Ashley McNamara:** Oh, in gopherize.me there are billions. I don't know how many combinations there are right now. I think I might have added some things... But billions.

**Carmen Andoh:** And I really like whoever did your artwork on your Gopercises, Jon. I think it looks like Ashley-esque, but it could be someone else.

**Ashley McNamara:** Yeah, it's not me.

**David Valentine:** I think that was Marcus Olsen, I wanna say...

**Ashley McNamara:** Yes, it was. Yes!

**David Valentine:** \[00:32:01.24\] Because Ashley is who introduced me to him... But I've actually gotten into the habit of -- so Ashley is usually really swamped, so I've gotten into the habit of trying to find different artists for all of the courses, because I like them to have a slightly unique feel. The testing course was Egon Elbre, and I have an algorithms course that I'm working on that is another Gopher in the community... I think it's Adrian -- I'm drawing a blank on his last name though. And then I have another artist who's working on another course that's way down the pipeline.

So I'm trying to use different artists for all of them, because I think it's cool to have different people drawing gophers, and I know that Ashley is just overwhelmed with stuff, so I don't wanna keep bugging her...

**Carmen Andoh:** But it just goes to show that I think when you are making content, whether that is for beginners, or for anyone - we are not a black and white or grey world, right? We are a world of color, and we like visuals, and we like fun, and we learn better when we feel we're at play.

I remember Richard Feynman talking about how he battled burnout and won a Nobel prize for his Feynam techniques; we're kind of veering into physics, but still learning for beginners... And he always said "Just keep a sense of play about you", and Ashley, that's what I love about the gophers that you bring to the table and to the community.

Anyway, [Jerod Santo](https://twitter.com/jerodsanto), who's also part of the Changelog crew, said that they'd do an ELI5 (explain it like I'm 5) on the sister podcast, JS Party. That would be a great segment for Go Time. So if any of you are down to come back and do a repeat, but for 4-5 year olds, by our inner 5-year-olds, I'd love to do that episode.

**David Valentine:** That'd be awesome.

**Ashley McNamara:** Yeah, same. I'm here for it.

**Break:** \[00:33:38.14\]

**Carmen Andoh:** I want to talk a little bit about learning mediums. Each of you has created or taught content in this new world of online, so I would love to talk about your perspectives about pros and cons about each of these mediums. Jon, we're talking about your Gophercises with code, accompanied by videos; Dave, this would be your online course, workshops that you've given at events and conferences, Ashley... So what are some of the pros and cons about each of these mediums for beginners.

**Jon Calhoun:** I guess I can start with some of them... I like videos because you can show mistakes. I think it's important, especially for beginners, to see that even experienced developers make mistakes, but also to see how you get to derived code... Because I think there's a lot of times where we'll just show them the final code, and as developers, we know that there might be three refactors that got us there... And I think having a video makes it possible to do that, versus if you're doing a book or something like that, it's much harder because to actually show them "Well, I went to this line and changed this one thing, then I went to this other file and changed this one thing" - it becomes a lot.

So I think videos are really good for that interactive -- or not quite interactive, but something like that... But I've also started to find that books are probably more accessible; something that I hate about videos is that you almost need to find translators for a couple different languages, or you need to get somebody to come in and actually write all the transcripts up, because anything automated just doesn't do a good enough job.

So basically that's something I've been struggling with lately, trying to figure out the right approach to that... Because I think that making videos more accessible is something that needs to happen in the future.

**David Valentine:** \[00:36:12.03\] One of the things that I think is important - because I recognize that my courses have reached 160-something different countries - is having good closed captioning. And I have to admit right now my Golang course doesn't have it yet, but to second Jon's thoughts around closed-captioning -- because some people, English may not be their native language; they speak several different languages, so having something there is extremely useful for them... But the challenge is that the automated closed-captioning just doesn't work. I don't know how many times I've said "Udemy", and it gets translated to "you and me", on the Udemy platform itself... Or something absolutely crazy. And I'm thinking, if there's any word that Udemy would have right in their closed-captioning, it would be Udemy, right? So that is a huge technical challenge and hurdle.

The other thing - because I did have a background in teaching outside of this, where I've done some workshops in-person in advance of this type of experience, as well as having tutored one-on-one - is you lose that interaction when you have an online video, and it is extremely difficult to iterate, and make changes. There's substitutes for it, but I like to see eyes, and even just "Hello!" and putting content out there into the world - it's a very different platform when you're doing a static video than when you're recording.

I think ideally what I'd almost prefer to do as I grow and continue to make new courses is to teach in a live event, record those, so at least I've got somebody else I'm talking to. And if you see that deer in headlights look, you get that sense of "Oh, okay, I've fallen off track here. I need some more explanation here." It's a very different approach.

Mind you, you get unlimited redo's when you're recording video, right? So it's like "Oh, that was -- I need more coffee", or something. So there's pros and cons of each, but everyone has its own flavor and piece to it, right?

**Ashley McNamara:** I feel like every way that we do this is valuable. We all have different learning styles. For me - it's hard for me to consume the content on video. I'm like "Okay, now I have to pause the video, and do this step. Play the video again." And then I go back, "Did I do that step right?" So for me, I like step-by-step instructions, so the workshops are really helpful... But the cons of a workshop is that a lot of people are afraid to ask questions. So they will sit there and act like they know what's going on when they don't know what's going on, so we have to constantly go around and be like "Do you really understand? You can ask questions, it's fine."

So video, written tutorials, workshops - they're all valuable in their own way; we all learn differently.

**Jon Calhoun:** Just to chime in one additional -- one of the reasons I have never focused on workshops, conferences, that sort of stuff as much... And I think it's easy to forget when you live in a city, but there's a lot of people who live nowhere near a city, or they don't have the resources to pay for a workshop, or something... To give you an example, I live two hours away from the nearest city, and that's Pittsburgh, which is not exactly a massive city. So just knowing that there's a lot of people out there who cannot go to that type of thing, I definitely think that there's a good -- like you said, we need almost everything, because some people are gonna do better in the workshops, and some people meet more people and they'll actually collaborate with them afterwards, other people will do online courses...

I think one of the big things I've just noticed is that people find other people to collaborate with and to learn with - that's very huge.

**Carmen Andoh:** So collaboration, in-person, gauging for deer in the headlights, course correcting - that's typically been the traditional way of learning, right? But it doesn't scale. It doesn't scale the teacher, and it's not accessible to rural and suburban learners.

**Jon Calhoun:** \[00:39:56.09\] I think it can scale, it just scales differently. One way I've seen it scale is I've seen people who do online courses, and they'll essentially have -- they call them classes, or whatever... But essentially, a bunch of people sign up and they say "Alright, we're gonna start in December, and every week you're supposed to go through so much content", and then you're all in a Slack channel and you discuss that content, and you're expected to keep up with the classroom on that content. It's less acceptable in the sense that you can't just start whenever you want, but I think there are ways to get that simulated classroom environment.

I think as course creators, it's things we have to think about... Like, is there a way that we can make that possible? I think tools like Slack have made it much better, too. I've gotten into this habit of -- all the courses I have, I provide support for, but I've gotten into this habit of "Any of the paid of courses, you've got access to a Slack", and I basically say "Ask your question there." Even if you e-mail it to me and I can answer in five seconds, I say "Ask the question there", because this is the best way to foster this growth between different people taking the course - you each try to answer the questions and help each other out. That will establish that learning, it'll help you get used to helping each other...

Over time, it's gotten to this point where I can sometimes check the Slack, and somebody asked a question and somebody answered it better than I could have, before I even got to it.

**Carmen Andoh:** That's great. That's always great, the feedback loops, and in-person for me is when I can get unblocked. I know that the other exercise site that I've tried is [Exercism.io](https://exercism.io/), for not just Go, but a variety of languages... And I was a mentor for Go. So when I signed on to be a mentor, they were like "Listen, if you agree to walk through the code exercise, we all as a community try to get the next person in the queue", so that their feedback is as quick as possible, so there is that online mentorship, and trying to scale that differently, as you said.

**Ashley McNamara:** I love Exercism.io. Thanks Katrina and team. Also, I feel like I need to mention it, because it's great and we haven't talked about it yet, but [JustForFunc](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw) - I love it.

**Carmen Andoh:** Yeah. And I just wanted to ask Jon, before I talk about other possible resources for gophers... Can you tell us a little bit more about where learners could go for Gophercises? Are they gonna get that content for asking questions within the course, as they sign on?

**Jon Calhoun:** Gophercises - there's a channel in the GopherSlack, \#gophercises, and there's some people there; I don't know if that one's actually that active... That one's a little bit harder because it's not paid, so supporting it is a little bit trickier. People e-mail me, and I do try to answer where I can, in the Slack, if they ask questions... I try to check there every so often and respond. So all those are options. Because I think that one right now has something like 20,000 students, and it can be a little bit trickier sometimes, whenever I've got a bunch of other things I have to do. But I do try to help, and I do try to answer e-mail, and that sort of stuff, so those are all viable options.

**Carmen Andoh:** Great. Well, we're about ten minutes out... Let's go beyond Hello, world or Go 101, and Go 201. We have a great foundational course, and we have exercises - where else can Go beginners go next, once they get there?

**David Valentine:** I'll jump in there. Once you've got your head around some basic Go, you've done lots of different examples and you have the basic language across, I think at that point jumping into effective Go in terms of learning how to write good, clean, idiomatic Go code is your very next step. Then, as Ashley was mentioning when we were talking about building examples, another item I think that is fantastic, which is similar to Awesome Python, is Awesome Go. If you go to [awesome-go.com](https://awesome-go.com/), you'll end up with a list of curated Go frameworks, libraries and software, and anything that floats your boat - whether you're interested in audio and music, or bot building, or any kind of different piece, there are some really outstanding resources available there.

\[00:43:50.01\] And then finally, the third thing I'd lead off with in that respect would be to go to Go users groups, because almost any geography that you're in, either there's online forums or in-person groups (especially the in-person groups), you'll find that there are Go user groups. I live in a fairly small city in Canada called Winnipeg, which is smack central in the prairies, and yet we have a thriving Go user group locally. So unless you're rural, you may be able to find and crash a Go user group (even if you're traveling) and to connect with Go users in-person which I think it's amazing.

**Ashley McNamara:** Plus one to Go user groups.

**Carmen Andoh:** Yeah, we're actually trying to build that up and strengthen a unified Go user group called The Go Developer Network. I joined Google a couple months ago and I have another colleague that joined the team recently - his name is Van Riper - and he wants to complement GoBridge's efforts, as well as Women Who Go's efforts into getting this network of groups to be able to maybe give them content, help them, maybe something like a live broadcast, give them a chance to go at their own pace... But I really like the idea of community and the importance of in-person learning, and trying to balance that off with the people for whom maybe online courses are not working.

**Jon Calhoun:** I think it's a really good thing that that's something you focus on. We talked about all these things with learning languages, but we didn't really talk about the community, or the fact that some coding communities really weren't that inclusive or inviting. I think the fact that Go has stressed that from the start is one of the huge things for learning it, especially if you happen to be in a minority group, or something... That can be very helpful, that you can actually feel okay being yourself and not having to pretend you're somebody else as you're learning.

**Ashley McNamara:** Absolutely. That's why I moved from Python to Go. The Python community is fine, but... So I've found that within the Go community there's no such thing as a dumb question, and I'm really good at asking dumb questions. People are just super, super-helpful; they will go out of their way to help you. I've never been part of a community like this.

**Carmen Andoh:** Agreed. And it's the reason I chose Go and stuck with Go, and I just really am happy for that... So yeah, thank you Jon for bringing that up, because it is, I feel, of paramount importance in terms of learning/mastering the language, and then staying and keeping in community and contributing to the language.

One thing you mentioned, Dave, was Awesome Go. There's also [libhunt.com](https://libhunt.com/), which I think works for all languages, and then they have [go.libhunt.com](https://go.libhunt.com/)... Which is a similar thing. You can go see third-party packages, and compare them to other packages, depending on what you wanna do. They release the newest/greatest, and I kind of like that, to keep up with my things.

I know that Mark Bates, who is a panelist on this show, along with Cory LaNou, they made [Gopher Guides](https://www.gopherguides.com/), and I think this is along the same lines of trying to find a curated path based on a certain thing that you wanna learn, whether that's a data structure, or a type, or an algorithm... So I'm gonna give a little shout-out to them for that.

Any other resources for people to go, or go-to's (pun intended)? We've been very short on Go puns this episode. Shame on us.

**Jon Calhoun:** I think one that everybody says and it's very hard, but if you can find an open source project you like, it can be daunting at first, because you'll be like "How do I get started here? There's so much there..." But you mentioned Mark Bates - I think one of the things that he's done a great job with Buffalo is that he can help people get started; help with documentation, or help with something that's relatively easy, as you get familiar with stuff.

But that one comes to mind because there were one or two people that were very early students of one of the courses I made, and they later were telling me that they were actually contributing more heavily to those projects, and it was because they really helped them grow as a developer, and learn more about them, and get to the point where they could actually fix PRs.

It's not gonna happen overnight. I don't think you can ever, as a beginner, jump into a project and make meaningful code changes, or big code changes. People who run open source projects have to resist this urge to fix a one-line bug; they sort of have to set it aside for a beginner to tackle. But if you can find the right projects, and maybe ask around in the Go community for suggestions, that's a great way to grow, where you just gradually do small changes and work your way up to handling more and more of the codebase.

**Ashley McNamara:** \[00:48:11.17\] I agree. That is advice I give often. And what I would like to see in the future is people prioritizing PRs, like "Here's what's great for a beginner. Here's what's great for people that are more advanced." There's a site called Up-For-Grabs. It's not .com, I can't remember what it is (up-for-grabs.net), but it does just that, where it's like "These are great bug fixes that you can do as a beginner. So it will rank things. I would love to see people do that within open source in general.

**Carmen Andoh:** Yeah. I love when GitHub tags "Great first issue", and then you can just sort by the tags, and they optimize their project not for getting things done necessarily, but for -- well, yes, that's certainly important, but also for being inclusive and trying to onboard new members into their project or their ecosystem and whatnot.

**Jon Calhoun:** Another one is [FirstTimersOnly](https://www.firsttimersonly.com/), where basically they limit specific issues, and you have to be a first-time contributor to that project to do it.

**Carmen Andoh:** Oh, that's nice.

**Ashley McNamara:** I love it.

**Carmen Andoh:** And we would be remiss if we didn't mention \#golang-newbies in the GopherSlack. When I first began, I just loved being able to ask, as Ashley said, all the questions. And I was sort of fearless, because I had people that I had already met in person who said "Just ask the question. When you do, if you do that, then it will make people more comfortable in asking what they are afraid of, to ask questions." So yes, \#golang-newbies in GopherSlack.

**Jon Calhoun:** It's funny, because that reminds me of -- before GoTime got rebooted, I was talking to Mat Ryer and he had said that one of his goals was to say "I don't know" in the podcast, at least once or twice... And his goal for that was basically just so beginners realize that it's okay to admit you don't know and to ask questions. I think that's important, like you said, just to really reinforce that it's okay to ask questions, and that nobody's gonna think you're a bad developer because of it.

**Carmen Andoh:** Yes.

**Ashley McNamara:** And there's so much that Mat doesn't know... \[laughter\]

**Carmen Andoh:** We had to throw Mat some shade... But I think our episode is quasi-complete, because we threw MAt some shade we've given Steve a hello, we mentioned Mark and his Gopher Guides... Anything else we're missing before we go?

**David Valentine:** Just to add on the question piece, one thing I notice with the courses that I teach - so often someone asks a question, and then next thing you know there's a crowd of me-too's. And I'm like "Where were you a minute ago? Why did so-and-so have to be the first one to ask?" And then inevitably, when the answer is made, you get a handful of a dozen or so thank-you's. Make it interactive. Especially when you're trying to bring that about, I really find that people are unnecessarily shy, for whatever reason.

**Ashley McNamara:** It's not even unnecessarily shy... I think that people's fear of embarrassment rules them. All psychological. So there has to be somebody in the room who just doesn't embarrass by not knowing something.

**Jon Calhoun:** I think also how you answer can make a huge impact... Because if you make it sound like it was something obvious, or - another example is if somebody says "Well, I'm not sure, but I wanna try to help you", and if you just jump in and just disregard everything they said, then they're not gonna try that in the future. So I think there's a lot of thinking about how we answer questions and how we present stuff to people, and just trying to be as gentle or friendly as possible is very important.

**David Valentine:** Absolutely.

**Carmen Andoh:** Very good.

**Ashley McNamara:** Definitely encourage those people to ask more questions; it might open it up for other people to ask more questions.

**Carmen Andoh:** Great! Well, we're kind of coming up on the top of the hour. There's a couple things I wanted to mention... First of all, there's one last segment that I'm really interested in learning more about, and I made a survey; I am not a survey designer, but I really am curious - how many of you here on this panel have had to learn a new programming language while on the job?

**Ashley McNamara:** I have.

**Carmen Andoh:** \[00:52:07.05\] Yeah... And is learning while on the job, whether it's because you have to or you're exploring for new tooling, or because it's a change in the technical stack - how does learning or beginning from that headspace any different from learning maybe on your own time?

**Ashley McNamara:** I feel like it's different, because usually if it's for work, you know why you need to learn it. So you kind of have some base knowledge. You're like "I have to learn it because I need to build this feature, or we're building this tool, and that's why I have to learn it." So you can google more specifically...

**Carmen Andoh:** Okay. Jon, Dave?

**Jon Calhoun:** I've had to learn on the job, and like Ashley said, it's specifics, but also your focus is on being productive, not academic learning, so that forces you to not let yourself get distracted as much, I guess is the best way to put it. If you need to build a WebSocket server or something, you're gonna focus more on "I just need to get this done. I can come back and fine-tune it later, or I can come back and look at those things I'm not quite sure about later." Whereas when you're learning it just for leisure, there's no really time restrictions or anything, so you have a little bit more ability to get distracted.

**David Valentine:** Well, I think that getting distracted is the enjoyment that you have when you decide to explore something in your own personal time, for your own personal benefit. You can go down those rabbit holes, you can explore... It's almost like a buffet of knowledge. And I love reading, and learning, and I listen to a lot of podcasts because I wanna experience those tangential things that I may not otherwise have. But I will say, even though programming isn't a day-to-day part of my job, I think anyone in IT or anyone in the world in general can literally have what happened to me this recent Friday, where the CIO called the boss and said "I want Dave full-time on this other project. Whatever he's doing right now goes away." The next thing you know is "Okay... So let's figure out how we're gonna approach this", and what I need to do there, and what his objectives are, and how do I fulfill those.

So it's very pointed, because you're trying to get to a particular objective... But the pleasure of just learning something for kicks and giggles - there's a joy with that as well, and it's different than when you're trying to fulfill what the CIO asked on a Friday morning.

**Jon Calhoun:** Yeah.

**Ashley McNamara:** Yes.

**Jon Calhoun:** I guess I should say, those distractions can be very good things, but I just think that's one of the big differences - sometimes they're good, sometimes they're bad, and I think that having them there... It just is one of the big differences for me, as I just felt like in the work environment I never had that freedom to just really look at the stuff, explore things... You can't go compare three different HTTP routers; it's like "I just need to pick one and use it."

**Ashley McNamara:** Exactly. You definitely get less in the weeds when it's for work.

**Carmen Andoh:** \[00:54:58.18\] Very cool. I wanna hear more about this... I am gonna put a link in the chat - it's bit.ly/onjobcodesurvey. I wanna share it on my Twitter, and maybe everyone else can share it... I just wanna know, because it's kind of my one "How is that different?", and are there any gaps out there in the ocean of content that you think that need to be most filled at this point, as we close out?

**David Valentine:** Children's book. Dang it. \[laughs\]

**Carmen Andoh:** Alright, I think that's what's happening... Children's book. It is happening.

**Ashley McNamara:** Please do it. [Brian Ketelsen](https://twitter.com/bketelsen) and I were supposed to do it, but we are just far too busy. I really need somebody to do this. Just selfishly, please do it.

**Carmen Andoh:** Amazing.

**Jon Calhoun:** I almost feel like there needs to be resources teaching people how to ignore all the bad advice they're gonna get. Like Ashley had said, people keep telling you to build something, or if you get on the Go Reddit, they're gonna tell you never to use third-party libraries... There's a lot of things like that, and I think when you're learning, especially as a beginner, it's really easy to get suckered into this "I need to use all these things." It's almost like they need a practical guide to just ignoring all that other stuff that doesn't matter, and just focusing on what does matter.

**Carmen Andoh:** Yes...!

**Ashley McNamara:** Yes, also please write that.

**Carmen Andoh:** Yes, I have that as a survey question, which is like "What is this letter to your past self? What do you wish that you didn't have to unnecessarily go through?" So yeah, totally. I think that's great. I wish we had more time to discuss that, but that is just really some of the best -- if we could get rid of some of the headaches that we ourselves had to endure... But maybe that's all part of the journey.

So I'm gonna close out... I have a closing out section here, so let me just gather my wits and then I'll read it, and then we'll say bye.

Whatever kind of beginner you are, we hope this episode has given you a good starting point as you start to learn and improve your Go. The learning gotchas, how learning Go might be different from your current programming language, where to ask questions and get help from the community, and where to continue on your learning journey. Whatever you do, embrace failure and don't stop trying. Engage with others. Use your resources - GopherSlack, \#golang-newbies, attend meetups (online or in-person). Like the famous quote from Benjamin Franklin, "Tell me and I forget. Teach me and I may remember. Involve me, and I learn."

Thanks everyone for today's episode of GoTime FM. Thank you, Ashley, thank you Jon, thank you Dave for joining me. We'll see you next week.
