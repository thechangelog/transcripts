**Brian Ketelsen:** Okay, we're back. Today we have guest Todd McLeod joining us, and we'll be talking about a lot of exciting events in the Go community. Why don't we start off with you introducing yourself, Todd? Tell us who you are and what you've been doing in the Go community?

**Todd McLeod:** Yeah, great. I'm really glad to be here, I'm super excited to share my experience with Go and some of the things I've learned about Go. I'm a tenured faculty at Fresno City College in CIT and I'm also adjunct faculty at California State University Fresno in Computer Science, which is a bit of surprise... I didn't know that this was where my career was gonna end up, because I studied economics and I studied business, I got my MBA, and then I was hired by the college to teach accounting, started for them in 2000, and I had a real knack for computers. So in 2001 they moved me over into the tech side, doing some basic computer stuff, HTML, CSS, ColdFusion, and then slowly I just kind of evolved into more and more coding.

I really love to code, I like the creative process behind it. I feel like I have an artist's soul, and being able to create things, bringing together the left mind and the right mind, the engineering, the science... The precision of programming, but also being able to build something - I love that.
In 2013 my job duties had shifted at the university and the college in 2005, and I was put in charge of online education, and I basically started this institute to teach all of the college university professor in Central California how to teach online, because I'd been teaching online since 1997; I really embraced the web early. So from 2005 to 2013 I did no programming. I was in the programming game, and then I was out of it - cold out of it. My job is an entirely different description.

That kind of wound down in 2013 and they were like, "Well, do you wanna jump back into coding?" I was like "Yeah, okay... So what server-side language should I use now?" and "Do people still use Dreamweaver?" \[laughter\] and my colleague just shook her head... She was like, "Oh, god... You've got a lot to learn!"

I started looking around at different server-side languages, like "Hey, what JSP, ASP...? Dang, we can't use ColdFusion? I knew that one! PHP... Right? Or do we wanna go with Ruby, or Node, or Python...?" and then I had a student who I'd trained back in the early 2000s who'd become an awesome Javascript engineer - Aaron Roberson, shout out to... Shout out to Nike - he's up at Nike now, one of their engineers. And Aaron's like, "Dude, you gotta check out Go." I was like "Go? What's Go?" He's like, "Go is like the zen perfection of programming." I'm like, "Okay, I'm interested. Tell me more about Go" and he's like, "It was built by the masters..." I'm like, "What do you mean?" He's like, "Google built Go. They hired the heaviest hitters in the industry and they put some of the greatest minds to work." I'm like, "Who? Who are the greatest minds?" "Rob Pike, Robert Griesemer, Ken Thomson..." The same people who created the C programming language, UNIX, UTF-8, they created the language because all the languages in the world weren't making Google happy, and so Google said, "Let's build a new language."

\[00:04:09.01\] So they hired these guys who helped create C, helped create UNIX, helped create UTF-8 and they created this new language, Go. "You gotta check that out. It's built to do what Google does."

So when I heard that, I was like, "Okay, you totally got my interest." The credentials sold me alone, so I just started really having to level my skill set up. It was just like late nights, late nights, late nights, 2013... Is this too much? Do you guys want me to keep rambling?

**Brian Ketelsen:** No, ramble on!

**Todd McLeod:** This is my intro, right? 2013, late nights, Pluralsight, Lynda.com, Udacity... I went through this crazy course on Udacity - Introduction to Computer Science. It's one of the hardest courses I've ever taken in my life. It started out, the first couple of videos were on YouTube, and there was like 65,000 views on the first modules of videos; when I got to module seven I was getting into videos that were like 12 views, 13 views... It's like 65,000 people started this course, and we're down to 12 people who've made it this far. And at the end of the course in Python we rebuilt the algorithm that Larry Page used to create Google; the basic crawler to index everything, and parse all the HTML.

So it was a crazy intense course, taught myself Python online, taught myself Java, and then started picking up Go. Got some grant money, put some programs together...

In 2014 December, that's when I started learning Go, and then in 2015, literally two-and-a-half weeks later I was teaching it at the university the first time through. It was kind of a laboratory project where all of the students and myself are trying to figure out "How do we do web dev with this language?" Then in 2015 in the summer, awesome experience - this incredible grant. Strong Workforce development grant, gave us $100,000 - crazy amount of money - to put together a boot camp to train people how to do web dev. So we took that hundred thousand dollars and I hired all of the people that I wanted to learn from. We flew them in, and for four weeks Caleb Doxsey kicked my butt. I have so much appreciation for him, because he was a merciless teacher. He took no mercy and he just plowed ahead and he gave me more material than I could assimilate, and he really gave an incredible foundation for myself and everybody in our region who was interested in web dev, how to do web dev with Go.

Caleb really broke some incredible trail, and then we took all that which we learned from Caleb and we've just been teaching it at California State University Fresno and Fresno City College, and it's been an incredible experience just to be involved. I love the language. I love the fact -- to me it's a programmer's language. This isn't a Mickey Mouse language, this is for people who really know how to program, and you have to understand what's going on at all levels. If you're doing web dev with Go, you have to know the HTTP protocol, you have to know RFC 7230 and IETF. You have to know that every bunch of text is going back between the client and the server, it's formatted in a certain way. And you've got your start line, and then you have your headers, and then you have your body; you have to know the syntax of the status line and the request line, and be able to parse that and put together your own ServeMux. What is a ServeMux? First time I heard ServeMux mux I thought, "Man, are we talking about a dog here? What's a ServeMux?" But that's basically just another name for server, router...

\[00:07:56.26\] Once you understand all that, using the net package, you can start to put together your own server and do all of your own routing without even having to rely upon what's available to you in the net/http package. But when you can do that, you understand the net/http package.

I think Go is amazing. For web dev it's my first choice. I love it because of the performance. Another interesting anecdote - just to finish the ramble - is when I first started learning Go there weren't a lot of materials out there for web dev, but Go was really big quickly in China, because Go scales incredibly; Go does what Google does. So one of the books that I started reading was a book written -- I think the guy's name was \[unintelligible 00:08:38.01\]. He wrote that book in Chinese and then it got translated to English, so I was trying to learn Go web dev in a book that was basically Chinglish. I don't know if you know Chinglish, you can google it.

It's been a fun experience, at times exhausting... Last night I was up 'till -- I mean, I saw Bill Kennedy tweet at like 3:30 my time, so he was just getting up, 6:30 East Coast time, and I was like, "Alright, Bill, talk to you in a couple hours..." I don't know, I've got a bit of that obsessive, intense, passionate focus. Like the artist soul - I get into something, I just love to get into it.

I'm putting together this training now to do web dev with Go, taking everything that Caleb taught all of us, and everything we've learned through teaching it. I think we've done seven sections now at the university and college, so everything we've learned teaching at the university and college to graduate students in computer science, who get it really quick and are super fast, super sharp and wanna know even more, to first-year community college students who for whatever reason didn't make it into the four-year university and are just getting going with academia and studying and all that.

Refining what we learned from Caleb and having taught it in these different environments, we've put together this really good, approachable - and that's the key word, approachable - code pathway for learning web dev with Go. Because I think for a language to be successful - and I really want Go to be successful because I don't wanna have to go learn another language - you have to make it practical. Like, "Hey, this has to get something done, it has to be really applicable" and if you study it as a student you can go out and you can get a job, but it also has to be approachable.
I think one of the next big things that I'd love to see for the language is like a Tony Gaddis style book; Tony Gaddis is a famous programming textbook author in academia, who's done some really popular books on Java, C and stuff like that. So I'd love to see a Tony Gaddis style book, because I think another one of the things is when you start teaching it at the college and the university people learn that, and then they go out in the workplace and they wanna use it.

It's really hard when you're already in the industry and you've got your day job, to then work all day, and if you're passionate you wanna just keep working around the clock at whatever you're doing... It's really hard to like, "Hey, I know Ruby, and I could get this knocked out in six weeks on Ruby, or I could take a year-and-a-half, or nine months and learn this new language and try to do it in that. Ugh, let's just get it to market." So it's hard to switch once you're out.

I think the language could really use a big foothold in academia, and I'm happy to be able to help with that. I'm happy to help bring it along and enjoy it. I also like the venture of cutting trails... So that's a little bit of my story, or a lot of my story. \[laughs\] Nice having all of you guys here, thanks for listening, we'll see you next week. \[laughter\] Did I take up a whole hour?

**Carlisia Pinto:** Good job, Todd. With that said, bye everybody. \[laughs\]

**Brian Ketelsen:** Yeah, but why don't we take a moment to introduce the rest of our show? \[laughs\] This is Brian Ketelsen, I'm sitting in for Erik St. Martin today, who's in an airport listening live... Hi, Erik, we miss you! And we've got Bill Kennedy in today...

**Bill Kennedy:** \[00:12:04.29\] Hey, everybody!

**Brian Ketelsen:** And Carlisia Pinto is joining us, as usual... And we're all excited to be here.

**Todd McLeod:** You know, funny story - and I love having Bill on the conversation with us, because I was like, "I've gotta learn Go! I've been charged by my community to help shepherd young minds into programming, and I don't have a solid enough grasp on this language", so I went up and I took Bill's training. At the time it was called Hardcore Go - now it's Ultimate Go. I took Bill's training and I told Bill what was going on, and Bill just cracked up. He was like, "Wow, this is the craziest story I've ever heard!" But Bill was great, so I'm really excited to have you on the call here, Bill. I really appreciate Bill's training - great training... And how much Bill has helped me out to educate me, so that I can then go educate other people. He's been a really wonderful mentor and helping teach me and helping grow the community. Cool to have you here, Bill!

**Bill Kennedy:** Yeah man, and I've got a lot of good questions for you... Because we're all trying to teach people right now at different levels, and you're getting people who have not even programmed before, right? Or by the time they're in one of your classes they've got some programming background...?

**Todd McLeod:** No, a lot of people have never coded before. I put one course out there on Udemy and I tried to make that as approachable as possible. And truth be told, that's when I was learning the language, so I'd learned some new stuff; my background is econ and business, and some of the nuances of programming that ColdFusion had completely abstracted away, I'm like, "Oh, okay... So how do we do recursion?" That was stuff I'd been learning in the entire 2013 on, so I just wanted to teach everybody what I'd been through. That's my Udemy course. It's very approachable, and a lot of people first time in there.

I think Go is a great first language, because it teaches programming fundamentals exceptionally. You have to know how to program to use it, and it also has a lot of room to grow. So it's not like some Mickey Mouse thing - Mickey Mouse is wonderful, but it's just a saying; my son loves Mickey Mouse... But it's not like some Mickey Mouse language where you're gonna hit a wall and you can't do anymore with it, or you're not actually learning what's happening. It's more low-level, so...

**Bill Kennedy:** I love those Udemy videos that you've been doing. I catch them every once in a while, and what's amazing to me - and I'm really interested how you got into this - you'll talk and teach, and then suddenly you just start writing everything that you're doing, and you're jumping around, and then you're writing more... I'm always curious what happens to all these incredible notes that you're putting together.

**Todd McLeod:** Oh, writing? What kind of writing? What do you mean?

**Bill Kennedy:** You'll say something, and...

**Todd McLeod:** In the video?

**Bill Kennedy:** Yeah, in the videos. You're like writing a whole document; by the time you're done with the video, you've got like three pages of notes written down. I've seen that in a few videos, it's really interesting. **Todd McLeod:** That's the thing, man... I'm not quite sure where I'm doing that, but I'm glad it's cool and I'm glad you like it. I have a big writer in me. For a long time my hobby in the evenings before I had kids was just to write fiction, so... I've written like 40 novels; that blows me away.

**Carlisia Pinto:** Let me translate to you - in a minute I'm gonna talk about that also, but let me translate to you where Bill is getting at - what Bill is getting at is are you writing a book about Go? That's what he wants to ask you.

**Todd McLeod:** Oh, am I writing a book about Go?

**Carlisia Pinto:** With all those notes...?

**Todd McLeod:** I'm not. I'm not writing a book about Go. I love being able to connect with people. I kind of view it as -- anthropologically we've learned from each other in person; that's the vast amount of our history through evolution as humans. We learned talking to each other, so in my trainings I really love trying to... So much gets conveyed non-verbally. You can hear my voice, but if you can also see me, I think that that conveys a lot.

\[00:16:14.26\] I just really love that medium of teaching where it's online, it's a course, you can see what I'm showing you on the screen, you get the nuances of my voice, I could school you a little bit and give you direction and tell you to do this exercise (Go do it! Go do it now! Just pause the video, do the exercise!) It's fun; personality comes through, you can see me...I really try to do that with all my courses.

A lot of courses are just sort of a very narrated, reading a script, voiceover presentation or screencast. You can learn things from those, but it lacks that life and that vitality. I think that's again where that sort of artistic soul of mine comes in, where I love to create and think about the aesthetics of it, and what's the final product, what's the feel of it gonna be, and how do you convey something and have a good time and enjoy it, and also build all that into it?

So I'm not writing a book right now, but check this out! When I do a course, like me last course on HTML and CSS -- because when I was teaching it and when I got back into it, I couldn't find any materials that taught it the way I thought it should be taught, and there's a lot of things that would... Like, "Let's jump really quickly into bootstrapping." It's like, "No, you should really understand the fundamentals of HTML and CSS before you jump into bootstrap." I know bootstrap gives you fast, quick results, but that comes at a price and is gonna catch up with you later.

My last course that I created HTML and CSS, the outline (the outline!) for that course is 300 pages. So I'm not writing a book, but my courses are very thorough. Each lecture I'm documenting what I say, and what the points should be that you get from that lecture, so students can go back and Ctrl+F through it to find that one subject. Or they could skim it and see, "Oh, do I need to watch this video?"
I just try to get people the tools they need to learn. That's my craft being an educator, how do I do it as well as possible and create the most beautiful and useful pieces of education material; like an architect might want - I want a beautiful and useful building... That kind of a deal, you know?

**Brian Ketelsen:** That's awesome. We need to take our first sponsor break.

**Break:** \[00:18:48.18\]

**Carlisia Pinto:** Todd, you said that you don't like the idea of bootstrapping because you quickly reach a point where you don't know what you are doing because you don't have the foundation... Or maybe I'm interpreting more than what you said here, but I think that also has to do with what you said about Go being a real language. But I want to hear from you what you mean when you say that Go is a real language. What does that mean to you?

**Todd McLeod:** Yeah, I really believe in minimalism and stripping things down and keeping everything as light as possible. Every line of code, you should know what it's doing and you should not have any extraneous code. If it's there and you're not using it, why is it there?

That's actually one of the design practices, idioms of Go - you can't have a variable if you're not gonna use it; that's an error, right? And I love that about Go. It's similar for me in everything I approach, like in my house - I don't wanna have stuff around if I'm not using it. Pass it on, donate it, let somebody else use it.

With HTML and CSS, I'm not a fan of frameworks and libraries. Yeah, they get a lot of things done for you quickly, and if you understand the fundamentals of HTML, CSS, Javascript enough to be able to go in and know what they're doing, and tweak them and adjust them when you need to do that - fantastic, use them all day, because it's a tool and there's a place where you can apply it. But if you just learn bootstrap, if you just learn jQuery, and if you do that at the expense of learning HTML and CSS, or at the expense of learning Javascript, then I think you've really missed - I strongly, firmly believe you've really missed - a super important layer in your educational foundation to be competent and skilled developing applications on the web.

So if you look at metrics, and I'm really into building website now, and we're putting together a website ourselves, which I'm very excited about, and performance is so key, it's such a key metric... When you look at studies on performance, like Amazon lowers their time by one hundred milliseconds and sales go up 1%, it's like, "Wow, people are super sensitive." Performance is really key, so the average size of a web page today - 2,200-2,400 kb, right? And the site we're building right now is 400-600 kb each page. So we're like one tenth, one-sixth the size of average sites. How do we do that? We don't have any jQuery, we don't have bootstrap, and when we want to put an image onto the page, we're not using Font Awesome. Because if you download Font Awesome, that's 100 kb. That's one twenty-fourth of your size budget for that page if you're trying to hit normal sizes today.
Instead, we extract SVGs, run them through Illustrator, get that SVG and then stick that code in. That costs us maybe 7 kb, or 5 kb on that page for those images.

\[00:23:56.17\] So just keeping things lean, and having complete control over your codebase, and a thorough understanding of your codebase - to me, that's what it means to be a craftsperson. This is very much a craft; it's the craft of building software. And just as somebody like a woodworker, they would know all the tools in the wood shop, and they would know the different characteristics of the different materials they work with. And when you first come into a craftsperson's workspace - like a woodworker's workspace - you might be like, "Holy cow, there's a lot to know about this craft! There's like a hundred different lays, or all these different little chisels and files, and where would you use each one and why, and which material would you choose for which situation...", but after time you become that craftsperson and you have that intimate knowledge of all of your tools and all of your materials, and you can really start to build beautiful, well-built, performant applications.

So that's my approach - just to do things well. When I looked at server-side languages, different languages approach things in different ways, but Go seemed to me to be the one that was the most zen - coming back to that word, zen - and the one that is the most fundamental. You're working down at a low level and you understand everything that's going on. You're actually getting that request and parsing that text and you can build your own ServeMux if you want. A lot of that is abstracted away for you if you use the net/http package in the standard library. But you could grapple it, you could wrap your head around it and you could see what's happening there.

I don't know if that answered your question, Carlisia, but being a programmer's language - and I don't have the depth of experience with Ruby, I never did any Ruby, but from what I've heard of Ruby, it's like there's a lot of magic. Also, from what I saw at Python and Django, it's like "Hey, put in a couple of lines of code, and KAPOW! in 15 minutes we have an entire cred application", and it's like, "Yeah, but what happened there?" How much ability do you have to customize it? Whereas if you learn web dev with Go, then you need to understand that the internet engineering task force are the people who put together the recommendations for how the internet and the web should be deployed and built, and they have these requests for comments, and there's been a variety of requests for comments in this entire history of how the web's been built, the 7230s up in there - those are the current ones - and then here are the specs, this is what happens... And then you could take that text that's coming in and you could work with it, pull out the pieces, pull out the method, pull out the route, and you make decisions based upon that, do a little conditional logic... That's what I mean about the programmer's language.

Sometimes I say "Go suffers no fools!" Kind of like the Pirate Ride at Disneyland... \[laughter\] Deeeeead meeen teeell nooo taaaales! Goooo suuuuffers nooo fooools! Because I'll hit these walls where I'm like, "I have no idea what is happening there", and Go has humbled me so many times. It brought me to my knees with hours spent contemplating the simplest things. In retrospect, I look at them and I'm like "Okay, I get that now, I understand it. It's simple now", but at the time I'm like "What the heck is happening there with StripPrefix? How do I get StripPrefix to work and serve my files?" Hours spent on that...

So it doesn't suffer fools. I mean, it's got \[unintelligible 00:27:42.12\] it's got a slice to bite. I mean, it gets down to all of your data structures and everything, and ... I just gotta ramble a little bit more about Go - this is one of the things I love about Go: innovation. Technology is about innovation, and for me - that's my perspective, but that's the heart and cornerstone of what programming technology is about.

\[00:28:10.05\] A lot of people, as I've met people learning the language, they're like "How come it doesn't have generics? This isn't OOP... Where is the inheritance?" \[laughs\] I'm like, "You're a programmer! You create things that innovate. You need to innovate, too", and I feel like that's what they did with Go.

They looked at, "Hey, this is how programming's evolved - spaghetti code, procedural, structed OOP"... They looked at research, like Tony Hoare's CSP, and then they said, "Let's integrate all that and do this new thing." When I first started to learn Go, people were like "Go's all about types. It's all about types." I'm like, "I don't understand that yet." But now I'm like, "Oh, it's totally all about types!" You create your own types. I can create my own type "hotdog" if I want, and the underlying type can be an int, and then I gotta attach a method to that. And interfaces...

I feel like Go innovated and took programming and tried to bring it to the next level. Whatever name you might put on that, but from spaghetti to procedural structured OOP to the next evolution of coding. So it's a programmer's language and it suffers no fools, because you gotta know what's going on, and to really use it you have to understand a lot of the most important concepts of programming.

**Carlisia Pinto:** I love the description that you gave. You threw a lot of concepts in there, and there's a lot \[unintelligible 00:29:43.00\] from what you said, but I think at the base of what you said, you're equating a real language with craftsmanship, and I agree with that. I think a lot of languages have so many options that you can throw at your code, and you spend a lot of time making decisions about things that at the end of the day are not really what's going to make your craft. And with Go, because it's so minimalistic and so simple, you start moving out of that and making a different type of decisions, but at the same time you are always thinking about tradeoffs.

**Bill Kennedy:** Todd, you're day in and day out in the classroom with people at all skill levels, and one of the things where at least GoBridge is really focused on going into next year is how do we take people who have never programmed before and want to program and get them learning programming with Go? There's lots of challenges there, and I thought it would be awesome if you can help anybody who's listening who's really interested in doing training. What are some really positive things that we can do, and maybe the things that you've learned not to do when it comes to teaching Go, especially beginners?

**Todd McLeod:** I love the adage of teaching that "the expert makes everything easy." Somebody who's super skilled with the language can, if they also have the ability to teach, and that's true with any subject. They could then convey difficult things simplistically. I feel like I'm just starting to hit stride with teaching the language, and being able to take all these concepts and in an hour I could lay out some really cool things for people...

You know, the first thing that came to mind, Bill, is I did a presentation here at a little tech event we had in Fresno, and gave everybody an introduction in the language and I made a video about that on YouTube. We could put that video in the show links. If there's people out there who are interested in Go, you're wanting to start to learn go, you could check out that video on my YouTube channel, and in 45 minutes it lays out how you declare your variables, different ways to use the variables... It lays out all the basics, gets you up to declaring types, structs, aggregate data type that holds different types of data together in one data type, and methods, and interfaces, and polymorphism... That's all in like 40 minutes.

\[00:32:23.12\] In terms of teaching people, like "Okay, GoBridge - we wanna reach out to people, disadvantaged populations also, and people who've had no experience with computers or maybe didn't grow up with a lot of access to computers...", I think that the next thing that comes to mind is reach them when they're young, if you can. There's research out there that shows there's a break point psychologically at age 13, and then again at age 25. After those break points it becomes harder and harder to learn a language, and that's just any language.

**Bill Kennedy:** Let me interrupt you real quick, because this is kind of what I'm looking for. Natalie, who lives in Berlin, has been giving classes to beginner-beginners. One of the things that she's noticed - and these are the kind of things that we as people who wanna educate won't learn until we get into the classroom... One of the things she's noticed which I thought was fascinating is that people who are just starting out programming will not ask questions. She's got to almost directly ask that person, "Ask me a question, ask me a question!" before they will. Are you finding those types of things? How are you dealing with those? How can somebody who wants to get into this space, what are they gonna experience and how have you gotten around those types of issues?

**Todd McLeod:** I think that that's a really key point to teaching anything, but a lot of people have difficulty asking questions. That, I think, is something that teachers need to be informed about - you really need to encourage your students, "Hey, ask questions!" That's your job as a student. If you knew everything, you'd be the teacher; but you don't, so you're the student. Once you know everything, you could be the teacher if you wanna be, and the way you learn everything is asking questions.

I remember when I was in grad school I would ask questions, I would ask questions, I would ask questions, and professors would be like, "Okay, come see me in the office hour, because you're the only one with questions." Then, after class, people would be like, "Thank you so much for asking those questions, I don't get it either." I'm like, "Why weren't you asking questions then?"
So it is hard for people to ask questions, and I think just bringing that human element and connecting with your students and creating that atmosphere where they feel comfortable, and where it's fine to not get it... There's a saying that I came up with one time, "The more I admit I don't know, the higher I go. The higher I go, the harder it becomes to admit I don't know." I don't know if it's an ego thing... It's a tough thing, but encouraging students to ask questions is a good one.

**Brian Ketelsen:** I think that there is definitely a social factor in people not wanting to admit that there are things that they don't know, and I think it changes in different cultures, too. It's a lot stronger in the American culture from what I've seen, and there are definitely other cultures where people have a different approach to what they know and what they don't know.

**Carlisia Pinto:** You know what, I'm going to risk and say it might be a universal thing, because I grew up in Brazil and my elementary, all the way up to high-school was done in Brazil. Like Todd, I was the one asking the questions all the time, sometimes up to the point of being a pain in the butt, and 90% of the class wasn't asking questions. It was always like this; I lived in different cities, it was always like this. So it might be normal... most people won't ask questions.

**Todd McLeod:** \[00:36:06.14\] Alright, enough theory. Let's model it. Let's all start admitting what we don't know. \[laughter\] Right now.

**Brian Ketelsen:** Well, I can tell you one way to figure out what you don't know - by using Backtrace, our second sponsor.

**Break:** \[00:36:18.00\]

**Carlisia Pinto:** Talking about beginners and teaching, I have a question for Todd that's more generic. I would like to know your opinion about whether kids should learn how to program early on? I will volunteer my opinion - I say usually kids should not be spending time programming early on. Maybe when they are early teens they could start learning, because I think kids should invest time in learning especially how to write. There is so much reasoning and logic that goes into writing, and programming is so much about reasoning and logic, and writing is so important for so many aspects of our lives, that I think you have to make time for programming and you have to cut time from somewhere.

I'd much rather have kids spending extra time in writing, rather than programming. When they get to a point where they can assimilate things at a faster rate, which will be when they are older, they can pick up programming really quickly. People think that they need to get kids into programming early because it takes so long to learn programming - I don't agree with that. I think when you're ready, you learn fast. So what's your opinion on that? When your students come into your class, do they have a background in programming, do they start early? Do you see there is a difference? Who is better prepared to learn as far as you can tell?

**Todd McLeod:** The students that I've seen that started programming really young, they did that because they had a passion for it. I haven't seen any tiger parents who are like, "I'm gonna make my kid program. He's gonna be the next \[unintelligible 00:39:02.05\] of programming." I haven't seen that in our community, but the kids who got into it because they were just passionate about it, if they got into it young, they are amazing. They speak that language like it's their native tongue.

I think it's fantastic if kids could program before 13. I also think if we're gonna force certain subjects on students (reading, writing, arithmetic) I think coding needs to be in there. That needs to be your bread and butter. That's the new math, that's the way we do calculations for engineering tasks. Like yeah, you need to know some basics - multiplication, division, subtraction, addition, but beyond that you should just be coding, I think.

**Brian Ketelsen:** \[00:39:48.01\] I'd rather see official logic, first. I'd rather have a formal training in real logic than programming first. I think programming is an extension to math and logic, so a good background in math and then logic and then programming would help programmers. I think one of the things that I stumbled with -- I was one of those kids that was programming at ten, and I didn't understand all of the concepts, so I fumbled through them. Had I had maybe more formal training in logic earlier, it might have been easier.

**Todd McLeod:** Oh, cool.

**Bill Kennedy:** When I think about teaching beginners, I'm always focused on what is that visual aspect to it? Because I feel if there isn't a visual aspect it's really hard, because everything's just abstracted. So how do you bring a visual aspect that is reasonable to that beginner programmer, so they can really see what they're doing, outside of writing to standard out?

**Todd McLeod:** Yeah.

**Brian Ketelsen:** This is kind of off-topic, but it just reminded me... I traded in my Mac on a Surface Book a month ago, and I've been on the road for an entire month with the Surface Book training, and it's been awesome, I really love it. But one of the things that really stood out for me as an exceptional reason to do this is that in the middle of the class when somebody asks me, "How does Kubernetes' networking work?" I stop what I'm doing, I open up the sketchbook and I draw on the screen a diagram of Kubernetes' network. The first time I did it, the entire class stood up with their cell phones and took a picture of the projector.

**Todd McLeod:** That's awesome.

**Brian Ketelsen:** I was blown away. I didn't realize just how much the ability to draw live on the screen would make a big difference. It's just a totally random thought, but it's part of that whole visual thing.

**Todd McLeod:** Yeah, I like that.

**Bill Kennedy:** And Todd, you know I live on the whiteboard in the classroom.

**Todd McLeod:** Yeah.

**Bill Kennedy:** Do you use a whiteboard in your classroom at all? How do you do that visual piece when you're in your classroom?

**Todd McLeod:** Yeah, totally, I use a whiteboard. It depends upon what I'm trying to convey, but it's another tool at my disposal, so when the situation calls for it, I like the whiteboard. Also, I've just started for my online courses - instead of trying to photoshop something out and make a diagram, I just get a blank white piece of page, some colored pens, take a picture of it with my cell phone - good enough. I like that sketched out quality, it's nice. So it's kind of similar to you, Brian, where you're just sketching it out on your screen.

**Brian Ketelsen:** Yeah, I find it really helps. I ended up doing it in every class this last month.

**Carlisia Pinto:** And talking about your online courses, the Udemy course on Go that you have - first of all, I wanna say for everybody to hear, I have seen so many people comment on Slack, on Twitter that they learned Go by doing the Udemy course that you have, and that they loved it.

**Todd McLeod:** That's cool.

**Carlisia Pinto:** It's over and over and over again. I haven't taken the course yet, but it's definitely on my to-do list. Now, I wanted to ask you why do you think people rave about your course so much?

**Todd McLeod:** I don't know, maybe because I'm a goofball. \[laughs\] For me it's kind of like just hanging out here with you guys. It's fun, I like talking, and I like sharing. For me, I approach it as... I hate the ivory tower of academia, and I hate that pretention and ostentation (or however you say that word). I like approachable, and I think we're all in this together; I know some things, so let me share them with you, and I know that all of you can and have -- Bill and Brian, I've learned from you guys... We all learn from each other. I just approach it in that way, and that's how I approach my classes. It's like, "Hey, let's have a good time and enjoy ourselves and figure this stuff out."

\[00:44:00.01\] I think also it's the fact that I've been doing it since (gosh, man...) 1997. That's almost two decades. If you look at Malcolm Gladwell's theory of outliers, it takes 10,000 hours, or 4 hours a day for ten years to become an expert at something, and I definitely know that the way I teach today is really different than the way I taught when I started out. I think it's a skill, like anything, knowing how to present material and how to do oratory oration, public speaking in a way that's captivating and compelling. Pacing, changing the volume - which I've just done here to demonstrate it - and then speeding it up... All of that, as humans, we are designed to notice that which changes. If you can keep stimulating people, they keep paying attention. You do that in a variety of different little techniques that I don't even think about anymore, unless I stop and start talking about them.

So I think that all has something to do with it.

**Bill Kennedy:** Todd, I can also give you an answer to this because over the last three months -- in fact two days ago at the Vancouver Meetup somebody was glowing talking about your course and the videos. I'm seeing this more and more, and it's always this ridiculously positive, glowing experience. I ask people what they're getting out of the video, and I think it also kind of lends into some things that Natalie was sharing with me too with her experience. I think that when you're on that video teaching people, people are not threatened like you're this authority. You're able to give people that idea that you are with them, in the same boat, and you're gonna make mistakes, and you're gonna learn with them on this video, and I think it just completely relaxes people.
In Natalie's experience, she's told me, in the classroom when she's made mistakes, it has sometimes really helped the entire class open up a little bit more because it's like, "She's not perfect, and neither are we." I think that's a huge aspect to your videos and how you approach teaching.

**Todd McLeod:** Oh, nice.

**Carlisia Pinto:** And we should mention that Todd's giving a coupon code for a discount for his Udemy course. The code is "gotime", so for listeners - you can definitely use that

**Todd McLeod:** Yeah, and I also really believe in pay it forward, help the world... I only got to where I am because tons of people helped me out along the way. I think 'gotime' gives you access to my courses for $10, so if you can't afford that because you're in a third-world country where 10 USD is a month's wage or something, or you're just a student and you're eating Top Ramen, just send me a note on Twitter and I'll give you free access. Don't even think twice about it; I love to do that, I love to help people out, and it's awesome for me just to see... I truly believe education is one of the noblest of endeavors, and as somebody improves themselves, they're improving the world. Like Gandhi said, "Be the change." If you are that change, if you are making change in your life, if you're educating yourself, you are making the world a better place. And then once you have risen up, once you've lifted yourself up, you're now in a position to lift other people up.

I'm a full believer in doing what I can to help others, and if you can't afford it just send me a note and I'll give you free access.

**Brian Ketelsen:** We love that attitude. Bill and Erik and I feel the same way about the book that we wrote, and when people ask, we're always glad to help them have it without cost.

**Carlisia Pinto:** I think Bill Kennedy gets paid every time he sends somebody a book, because he's always trying to push the book for free to people. \[laughter\]

**Todd McLeod:** \[00:47:59.16\] Yeah, he gave my entire class his book. You know, that generous spirit always comes back. You can never have too many friends.

**Bill Kennedy:** Actually, the royalties to the book, Brian, that goes back to Gopher Academy every year for the scholarship fund, right?

**Brian Ketelsen:** Yeah, we split the royalties for the book between GoBridge and Gopher Academy, so none of us are making any money off the book anyway. \[laughs\] They help support the scholarship fund for GopherCon, they help support all of the GoBridge activities...

**Todd McLeod:** Sounds great.

**Brian Ketelsen:** So let's more to interesting Go news and projects. I'd like to start this off with something that's interesting but not perhaps awesome - the Reddit Golang Subreddit kerfuffle this week.

**Carlisia Pinto:** Oh my god...

**Brian Ketelsen:** ...started with the CEO of Reddit deleting things and editing posts, which I find absolutely an abomination. You should never ever change user's content. It's horrible, and I reacted very poorly by saying that Reddit was a "wretched hive of scum and villainy", the Ben Kenobi quote. A lot of people took that poorly... I would like to publicly apologize for mischaracterizing all of Reddit for just the tiny percentage of the world that's really a wretched hive of scum and villany. Most of the people on Reddit are really awesome, especially the Go Reddit, so this is my public apology for my gross overstatement of the issues on Reddit.

**Carlisia Pinto:** I wanna say something about that - I saw so many well thought out and kind comments on that thread. People saying, "Let's have temperament. Let's really think this through. Do we really wanna delete Subreddit?" They had a really nice conversation, it was lovely to see.

**Brian Ketelsen:** So on to more interesting news... Go 1.8 Beta 1 released today, raise your hand if you installed it. I already did. Can you see my hand?

**Todd McLeod:** I'm installing it tonight.

**Brian Ketelsen:** It is awesome. By awesome, I mean it didn't break anything, and the compiles are a little faster, and the code seems a little bit faster. Overall, awesome.

**Bill Kennedy:** Cool! I'm kind of excited about two pieces of this update. The new profiling that you can get out of a tracing tool, and I'm really interested to see how the plugin stuff ends up working and being adopted, because some of that is a little -- we can get in a lot of trouble with a plugin, but it's also really interesting.

**Brian Ketelsen:** I'm afraid of the plugins, honestly. One of the things I loved about Go was that it was static and there was no question at runtime what was going to be happening with your app. The whole idea of dynamically loading other code just opens a whole can of fear for me. I'm sure I'll get over it eventually...

**Carlisia Pinto:** I wonder if you could block that from happening. Could you lock a code and say, "Hey, nothing external is going to plug into my code and run."

**Brian Ketelsen:** You have to actually write code to dynamically load other plugins, so it's not gonna happen automatically or by mistake. It's not something that can happen implicitly, you have to explicitly make it happen. But it scares me a little bit, I'll be honest.

I am very excited about all of the changes in the http package, graceful shutdowns, context everywhere, and the DB SQL package - holy cow! Almost every function in DB SQL now has an equivalent that takes a context as the first parameter, so we get awesome cancellations all throughout the database package...

I don't even know what kind of speed they're taking over at the garbage collection team, but they must be living next to a math lab because all they do is make that damn garbage collector faster and faster and faster and faster. Kudos to them for working so hard to make garbage collection awesome.

**Bill Kennedy:** \[00:52:05.24\] Brian, I'm sure you had the same thought I did reading through the 1.8 notes. All I thought about was, "Oh my god, we have a lot of work to do to update materials for teaching."

**Brian Ketelsen:** Right? Yeah, so much! There's so many big changes, and the thing about the Go 1 compatibility guarantee is that that code that you wrote for Go 1 is still gonna work in 1.8. I love that. But I was actually thinking exactly the same thing this morning, or last night when I was reading those release notes - "God, I've got a lot of material to update."

**Bill Kennedy:** Yeah, and context, because it's being used as much as it is, I think now becomes a really important topic for all of us to start teaching and teaching effectively, and making sure people aren't abusing the context as a generic bag of values and teaching cancellation properly.

**Brian Ketelsen:** Yeah, I teach context now in day two or my three-day class. I bring it right in. I almost have to, it's so big in Go now.

**Todd McLeod:** Yeah, I wanna come sit in on your guys' classes again, get a fresh take on all the material you're teaching. I like learning from you.

**Carlisia Pinto:** Really looking forward to taking Brian's online class about... Is it web development the name of the class, Brian?

**Brian Ketelsen:** Which one?

**Carlisia Pinto:** The one that you're doing online.

**Brian Ketelsen:** Well, which one? I'm doing a lot online. I've got one at the end of the month, Go for not-beginners... What's it called? Go Beyond The Basics. But it's not necessarily web.

**Carlisia Pinto:** Yeah, that one. That's the one.

**Brian Ketelsen:** You'd better hurry up and sign up, too. Last I heard, out of the 300 seats in that there were only 20 left, and it just opened yesterday.

**Carlisia Pinto:** I need to find somebody to pay for me. \[laughter\]

**Brian Ketelsen:** Well, I'm doing it again in January and February, so there'll be time to take it again.

**Carlisia Pinto:** Yeah, I'm sure. I'll definitely take it.

**Bill Kennedy:** Is that one of the classes through O'Reilly?

**Brian Ketelsen:** That's an O'Reilly webinar. I don't know how their new pricing scheme works, but I think it's open for anybody who's a Safari Online member, or something like that. Some really ridiculously lower pricing for Safari people.

**Carlisia Pinto:** Oh, I think I signed up for that and haven't canceled at work. \[laughs\]

**Brian Ketelsen:** Yeah, check it out, because I think it makes a big difference.

**Carlisia Pinto:** I'll check it out. Thanks for letting me know.

**Brian Ketelsen:** And let's see... Oh, oh, oh! This one could not be more exciting. You know, when I get excited about Go packages, holy cow! Travis Jeffery - or Jeffery Travis, I'm not sure which, because they both sound like first names - is writing a Kafka implementation in Go, and I wish I had a dollar for every time I said, "I wish somebody would just rewrite Kafka in Go." Now, somebody's doing it. It's called jocko, it's at github.com/travisjeffery/jocko. It's nearly implemented; I think there's just a few bits left, and when I was talking to him on Twitter he said that the bits that were left were really just a weekend of work. I don't know what quality level it's at - I haven't tried it yet - but I'm so excited.

It's completely client-compatible with Kafka, and there's nothing that makes me more excited than having Kafka without having to put a JVM on a machine somewhere. Crazy excited about Kafka rewritten in Go. Jocko is the name of that.

**Bill Kennedy:** Are you using Kafka in anything that you're building now, or is it just...?

**Brian Ketelsen:** I use Kafka everywhere I can. I probably said this on the show before, I think it's probably the most underrated technology of the last ten years. It's such an amazing tool for data storage and streaming... It's like Git, but for your data. It's amazing.

**Todd McLeod:** Hm! Yeah, I'm gonna model that not knowing right here for all the other students out there. I experienced this at times when I listened to GoTime, but it's like, "Oh yeah, what is Kafka? I've never heard of it, never been exposed to it." So it's like GitHub, but for data.

**Brian Ketelsen:** \[00:56:04.27\] Well, that's a poor way to say it, maybe I should have said it better. Kafka is a... Gosh, it's so difficult to describe. It's a distributed data store that processes streams that allows you to get to your data at different points in time. We use Kafka frequently as the source of truth for our data, and then other systems, like the databases, the queues and whatever, read from Kafka. That propagates the data throughout the system. So Kafka is the source of truth, and everything else reads from Kafka.

Distributed log - thank you, Erik St. Martin for jumping in and telling me it's a distributed log. So it kind of allows you to have any client be able to come in that can say, "Start me at zero and give me all of the changes in the data." It's an amazing system... If you haven't played with Kafka yet, go check out the documentation. There's a steep conceptual curve to Kafka, so you need to dedicate some time to read it. But once I did that, I just could not love technology more than I love Kafka.

**Bill Kennedy:** Hey guys, I'm in the middle of a training in Vancouver at Hootsuite and I gotta get out of here, but I really appreciate you letting me be on the show today. Todd, it was awesome to talk to you. Brian, Carlisia, we'll talk soon. Thank you guys again for letting me be a host today.

**Carlisia Pinto:** Thanks a bunch, Bill.

**Todd McLeod:** Yeah, good visiting, Bill.

**Brian Ketelsen:** Take care, and tell the people at Hootsuite I don't hold it against them that they picked you instead of me. \[laughter\]

**Todd McLeod:** I'm not even on the radar. \[laughter\]

**Brian Ketelsen:** Take care! Alright, so let's move on to \#FreeSoftwareFriday, one of my favorite segments. Every week we try to give a shout out to an open source maintainer or a group that makes a project that you love. Sometimes not everybody has one, sometimes we have more than one, but today I'll start off with the surprise of the year, maybe the surprise of the decade... I'm gonna shout out to Microsoft, and Rich Turner and the whole team at the Windows Subsystem for Linux group, for replacing three computers on my desktop with just one.

I am so excited about Windows Subsystem for Linux; I now run a Surface Book and Linux right on top of it. I don't need my Mac and my Linux and my Windows machine anymore to get all of the different jobs that I need to do. I don't even have a Mac anymore, so thank you to everybody at the WSL team for finally making 2016 the year of Linux on a desktop.

**Carlisia Pinto:** You don't have a Mac? That's blasphemy.

**Brian Ketelsen:** No, it's not. It's awesome. I gotta tell you, it's amazing.

**Carlisia Pinto:** Oh my god!

**Brian Ketelsen:** There's a handful of things that I miss from my Mac, but I've got Linux, and it's right there, and it's real Linux, and it works.

**Todd McLeod:** Nice.

**Carlisia Pinto:** I mean, I get it if you didn't have the Mac before and you just had Linux, but you had a Mac all this time and you just got rid of it.

**Brian Ketelsen:** Yeah, I've written a couple blog posts about this. We probably don't have time on this show to go into why I switched, but absolutely I'm happy.

**Carlisia Pinto:** Alright, give me the links. \[laughter\] Anyway... I'm gonna break the rule today and I'm not gonna give a shout out to software, I'm going to instead give a shout out to all the Go Meetup organizers. It so happened last night that I was with Erik here in San Diego because he was here for work. And I met up with him and also \[unintelligible 00:59:39.06\] who is the other Go Meetup organizer here in San Diego with me, and also Alex... But anyways, we were talking about meetups, and you know, it's such hard work; I talked to other organizers as well - it's such hard work, and it takes so much grit and really a desire to grow the community and help the community stay together.

\[01:00:02.03\] I have a huge appreciation and I wanna give a shout out to everybody. Along the same lines, also I wanna say that I'm gonna be in the Boston area for Christmas, Go Patriots! And I would love to get together with the Meetup organizers there. I'm also gonna be in San Francisco in January and I'm hoping that the San Francisco Meetup is gonna happen on the week that I'm there. Meetups are awesome.

**Todd McLeod:** Yeah, and I just would also like to chime in that if there's anything I could do for any of those meetups or any of the different groups around the world, if you wanna have me as a guest speaker and you're close to Fresno, or you just wanna videoconference me in to talk about Go or any of that stuff, feel free to reach out to me, Todd McLeod. Twitter is probably the easiest way to reach me, @todd\_mcleod. That link will be in the show notes, too.

\#FreeSoftwareFriday - reflecting upon this, what free software do I use for which I'm appreciative, and when I started to reflect upon that question, I kind of just had this sense of amazement, because there's so much free software which I use, and I haven't really thought about it before. I had that amazement and gratitude, like "Oh my gosh, look at what humans have created!" There's so much which is out there. So many different things came to mind for me, but the big ones which often times go unnoticed and we just sort of take them for granted - I mentioned the IETF and the RFCs, and the entire web... \[laughs\] GoDoc.org - who made GoDoc.org? It has both the standard library and third-party packages. I use that every day. I love GoDoc.org.

Or just the different packages that you can find in there that people have coded up. \[unintelligible 01:02:02.25\], Satori, Julien Schmidt - all of them in the last week. So I just have that sense of appreciation for the amount of free sharing and giving which goes on in the world, and just taking that moment to recognize it. So thank you, Brian, for coming up with that idea for \#FreeSoftwareFriday, because it was a really cool experience just to sort of step back and pause and be like, "Holy cow!" Yeah, there are a lot of people who are doing a lot of good, and just doing things to contribute to the greater commons of the world.

**Brian Ketelsen:** Yeah, and by the way, GoDoc was Gary Byrd and he donated it to the Go Team two years ago, give or take, and we all use GoDoc so often, so thank you to him specifically.

**Todd McLeod:** Yeah.

**Brian Ketelsen:** So on that note, I'd like to thank everybody... Todd, thanks for coming in, Carlisia and Bill who's already departed, but thanks for stepping in for us today, Bill. Thanks to everybody who's listening out there, thanks to our dedicated Slack team in the GoTimeFM channel on the Gopher Slack, we couldn't have this much fun without you guys. Thank you to both Minio and Backtrace for being amazing companies and sponsors for us.

We encourage you to share this show with all of your friends, and especially if they like Go or if you're trying to kind of nudge them towards Go - we might be able to help with that. An easy way to subscribe is to head to GoTime.fm and you can subscribe to our weekly e-mail, which should be coming shortly. You can follow us on Twitter on @GoTimeFM, and if you have something that you wanna discuss on the show, or a guest you think we might want to bring on, head to GitHub.com/gotimefm/ping.

On that note, thanks everybody. We really appreciate this show, it was a fun one!

**Todd McLeod:** Yeah, great fun, thank you!

**Carlisia Pinto:** Bye!
