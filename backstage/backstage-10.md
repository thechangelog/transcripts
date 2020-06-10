**Jerod Santo:** Welcome backstage. It's been a minute. We've been busy, cleaning all the couches, getting hand sanitizer collected... But now we've got the backstage area all pristine, we're socially distanced and we're ready to have a fun conversation with Owen Bickford. Owen, first of all, thanks for coming on Backstage with me.

**Owen Bickford:** Yes... I'm wearing my gloves, my mask... I'm ready to go.

**Jerod Santo:** Yes, we are clean and clear, and ready to rock. We're here to talk about Elixir again, specifically about our software that runs Changelog.com, and really how you became a contributor here recently. You wrote a blog post for us... You said you're a long-time listener, first-time caller...

**Owen Bickford:** Right, right.

**Jerod Santo:** Maybe let us know how you found the Changelog, what you listen to, and then what compelled you to hop in and get involved.

**Owen Bickford:** Right. Well, thanks for having me on. Yeah, this was one of the first -- this is probably the biggest open source contribution I've made...

**Jerod Santo:** Oh, really?

**Owen Bickford:** ...in history for me.

**Jerod Santo:** Awesome!

**Owen Bickford:** I've made a couple of one or two-line changes to repos here and there. Before this, my biggest change was four lines, or four characters on the Phoenix repo, just adding a line to the WebPack config, I think... So that was fun.

But yeah, I've been listening to Changelog for a few years now. I don't know exactly when I started. But my previous day job, I was in customer service, so I listened to a lot of podcasts, and a few years ago - We'll go back into the history a little bit more, but basically I was interested or I wanted to pursue software development as a career, so I started just tracking down podcasts... And I had already listened to a lot of podcasts every day, so I started digging up programming podcasts, or anything that's a developer or software, something in the title, or...

**Jerod Santo:** Yeah.

**Owen Bickford:** You know, you do a search, and whatever comes up, I would add just about anything, and gave it a listen at least. So yeah, I've been listening to the Changelog for probably at least three years...

**Jerod Santo:** And that's back when you were first getting into software then?

**Owen Bickford:** Well, we'll rewind a little bit. First of all - so I work at Comcast. I'm not here on behalf of the company or anything, but... Yeah, so my history is I've worked a lot of different jobs, didn't go to college for software engineering or anything. I've done everything from -- like, my first job was AM Radio. I worked in fast-food, in retail, I kind of wound up in customer service... And then fast-forward to October of last year, I actually made it in as a full-time developer at Comcast.

**Jerod Santo:** Wow.

**Owen Bickford:** So I'm pretty happy where I'm at now.

**Jerod Santo:** Self-taught then.

**Owen Bickford:** So my first introduction to programming was back in eighth grade. This would have been 1997-1998. I went to a small-town high school. We had kind of a middle school newspaper thing, and HTML4 was brand new at the time... So our middle school newspaper teacher I guess had just read the book over the summer, and was getting everyone up to speed on HTML and layout out your website with the frames, you know...

**Jerod Santo:** Oh, yeah.

**Owen Bickford:** You had your header frame, your menu frame on the side, and then your content frame off to the right... So that's where I started, just kind of handwriting HTML files for what you'd think of as a post, or an article now. You'd go in and just type everything right there in the HTML files. I don't think we had an IDE back then. It was all probably Notepad.

**Jerod Santo:** \[00:04:14.11\] A guy at least rocked Notepad++, or something...

**Owen Bickford:** In public school -- I don't know if it was licensing, or if no one knew that it existed... We were using Windows Notepad to do everything. Then we probably graduated to Dreamweaver at some point.

Then eventually -- I think the next step for me was back in the MySpace days... Kind of the amazing thing there was you could customize your profile with CSS. So you could just dump in CSS, and you could kind of dig around the page and find what IDs and classes on elements, and turn them of, or hide them, or do all kinds of crazy stuff you can't do on sites anymore. Or you can do them yourself in the browser, but no one gives you a CSS box you can just drop stuff into.

**Jerod Santo:** Somebody should bring that back, don't you think?

**Owen Bickford:** You could do in, of course, CSS-Tricks in your profile, or CodePen, but not in your Facebook profile.

**Jerod Santo:** Right. A glitch, or something.

**Owen Bickford:** They're not letting you anywhere near the Facebook design on your profile... So that was kind of the next big step for me. Then really -- like, I had kind of an eye for program or application design. I've always had complaints about the way things were designed, or the way they worked, and all that... But anytime I would try to learn programming, try to learn Android development or anything like that - it all went straight over my head. Because I didn't really understand the very fundamental stuff of what's a string...

**Jerod Santo:** Right. Variables...

**Owen Bickford:** That it's not like a physical piece of string... All that stuff. So I would get kind of lost trying to understand those words and the vocabulary... But anyway, I eventually -- I think when I started learning JavaScript, that was actually my first programming language, if you could call JavaScript... Is it a programming language?

**Jerod Santo:** I think you can call JavaScript a programming language, yeah.

**Owen Bickford:** Okay. Yeah, it's got its problems, but it's still there. Yeah, so I started learning that taking over a project from someone a few years ago. That would have been around probably 2015. That's where the bigger rabbit hole started... I think starting with jQuery, finding elements and manipulating with jQuery.

Then by 2015-2016 ES6 (or ES2015 at the time) was already kind of hot off the presses, so there was a lot of content coming out about how to do things with that, and how it's better, and how you could clean up your code, and all this...

I wrote a lot of bad code, but I was learning jQuery to get started, learning ES6 to improve on things a little bit. Then I started learning React, because it seemed like that would be the thing to do... You know, there's a lot of content...

**Jerod Santo:** Yeah, there sure is.

**Owen Bickford:** Basically, my learning is based on what's available on YouTube...

**Jerod Santo:** What you can learn, yeah.

**Owen Bickford:** ...and articles that are available online.

**Jerod Santo:** What are you writing at Comcast?

**Owen Bickford:** The department I'm in, it's PHP.

**Jerod Santo:** Okay.

**Owen Bickford:** For the most part.

**Jerod Santo:** So how did you get interested in Elixir then?

**Owen Bickford:** \[00:07:48.17\] This is an interesting question. So because I was trying to figure out what immutable data meant - this was something that you'd hear from Dan Abramov, and sometimes in these React talks... Data is immutable. Functional programming - I was trying to understand what that meant... So I started doing searches on that, and Elixir started popping up, so I would watch talks about Elixir... I've watched hours and hours and hours of talks. Way more watching than actual coding.

So I was really impressed with the talks, and everything they were saying made sense. It was hard for me to actually jump in and write code. I didn't understand anything about modules, or the bigger application design... Because it's pretty different from a traditional JavaScript application, at least compared to what I was writing.

So I kind of acknowledged Elixir, thought that it was really interesting, but the docs were way over my head (the documentation). So I just kind of put a pin in it and then kept on. I decided to -- instead of trying to learn 3-4 different languages at once, I'd figured I'd focus on JavaScript, trying to get at least the client-side JavaScript down... Because most of what I was doing was kind of layout, with HTML/CSS, interactivity with JavaScript, and that kind of thing. So not a whole lot of server-side JavaScript at that point.

Anyway, once I got that -- I wouldn't say "mastered", but once I got a lot more comfortable with JavaScript and the fundamental data types and all that kind of stuff, and the concepts of programming, then I started coming back to Elixir, the documentation started making a lot more sense, and then the challenges that people would talk about - they were being addressed with Elixir. That started to make a little bit more sense as well. So yeah, that's kind of how I got into Elixir, the long version...

**Jerod Santo:** Yeah. And it also kind of explains why you suffered through my YouTube video... Because you just consume hours and hours of programming content on YouTube, I guess.

**Owen Bickford:** The best way to not get anything done is just fire up YouTube, and just go down that rabbit hole.

**Jerod Santo:** That's funny, because I never turn to YouTube for that kind of stuff. I'd say it's a generational thing, but I think we're near the same age... I just feel like it's the last place I go to learn programming things, or explore development concepts, because I just feel like everything's so long. Everything's a commitment. I can scan a blog post, but scanning the YouTube vide - I don't know. Do you just sit and watch the entire thing, or do you scan? How do you consume YouTube?

**Owen Bickford:** It depends. I've gotten a little bit pickier. A lot of the Elixir content that I've watched is talks - from ElixirConf, Lonestar, all the different international conferences they have. That was always really interesting. That you could even run Elixir on like a Raspberry Pi or something, and turn off LEDs, and stuff like that... It seemed really interesting.

I've dabbled a little bit in Python, and things on the Raspberry Pi as well. But as far as like the YouTube stuff... So for me, at least up to this point, the things made more sense is documentation - sometimes it's hard to read and actually sink in... So if I'm trying to learn a new concept -- I can't think of an example, but if there's something that's kind of going over my head with documentation, or the written words, then I'll look it up on YouTube. Or if I'm just trying to kill time and I don't have anything to do, that's where I'll fire up some YouTube content, if I've already finished up my hours of podcast or the day.

**Jerod Santo:** \[00:12:10.16\] \[laughs\]

**Owen Bickford:** So yeah, I've listened to a lot of Jose's talks, and some of the core team members... I think the funny thing with those talks is you can kind of -- it's really interesting how some people just really have some kind of innate ability to present, and then everyone else is just an engineer; like they're really, really smart...

**Jerod Santo:** Right...

**Owen Bickford:** ...they know what they're talking about, but making it interesting is a wholly entirely different...

**Jerod Santo:** Skillset.

**Owen Bickford:** Yes, different skillset.

**Jerod Santo:** Yes, absolutely. Well, Jose makes everything interesting... If for no other reason that his excitement level is contagious. He's so into what he's doing, and it just gets you into it. At least it does me.

**Owen Bickford:** So the people that are really good at their talks are the ones who tell a story. You have some kind of arc. You're not just talking about this package, and how you made the package, and the lines of code that are involved... That's good to see sometimes, but now you can do things. But if you don't wrap it up in a story, and if you don't have a dynamic presentation in some way, then... And I think -- this is just kind of a mental trick, because I think everyone maybe has it in their mind that they sound really interesting, or they feel like they're really boring, so they kind of get in this headspace. But yeah, whether it's entertaining or not, you can still learn a whole lot of stuff from those talks... And that's where people bring up new ideas, or new approaches to solving problems that have already been solved in the past.

**Jerod Santo:** Well, I would be interested to hear some of your thoughts on some of this stuff that we're doing on YouTube. We're just dabbling at this point. We've always been audio and written content.

We had a Changelog Films division where we were going real pro-style, produced film video. We did some stuff at conferences...

**Owen Bickford:** Kind of like mini-docs, or something?

**Jerod Santo:** Yeah, exactly. It was just a big production, and we weren't very good at it because we were just getting started, and it was difficult to sell the concepts to potential sponsors and people to get involved... So we've always kind of just sidelined that. We see that there's a lot of people like yourself, who are on YouTube and they are looking for developer stuff; they wanna learn, they wanna be entertained. YouTube has probably the biggest audience right now in content, especially in video content, of course.

I know Spotify is trying to get into that game as they are moving into podcasting, but they're also slightly gonna be moving into video, which will be interesting to see if they can swipe away some of that YouTube audience. But anyways...

**Owen Bickford:** It's a little bit of escapism, too.

**Jerod Santo:** Sure.

**Owen Bickford:** May of 2020 - the news isn't exactly appealing at the moment, so having something else to spend your time on and put your brain on is worthwhile.

**Jerod Santo:** Yeah, so we've been dabbling, and you've seen a little bit of what we've been doing. I've been trying to think of different styles of content we can put on YouTube. I've come up with a few different (what I call) series, or types of things... The one that you were watching was a jam session, I think, which is really kind of a free-form, long-form... Exactly what it sounds like. Like, "I've never done this before, let's try it out. Let's go on a jam session, turn on some music and code." Which is kind of the easiest thing to do in video.

\[00:15:59.01\] And then I have another series called kicking the tires, which is really supposed to be like an intro to a tool, or to a concept, especially relating it back to the things that we have on the show. So I did one for Algo VPN after we had the creator on the Changelog, so there's a nice little back and forth there. And I'm trying to keep those five or ten minutes.

I can't remember which one you watched. Was it the live dashboard?

**Owen Bickford:** Jam session, using Phoenix LiveView to build a collaborative -- you were gonna build a sketch...

**Jerod Santo:** That's right.

**Owen Bickford:** Was it the Scratchpad?

**Jerod Santo:** A Scratchpad for our show notes.

**Owen Bickford:** That's what it was.

**Jerod Santo:** Yeah, exactly. A collaborative Scratchpad like Google Docs. So I did another one recently which was maybe 20 minutes, 30 minutes, which was like a kicking the tires on Phoenix LiveDashboard. And then we're posting clips from our shows on YouTube, which are like 60 seconds, 90 seconds, just trying to get some people exposed to the podcasts that we have. But we haven't dove fully into any of these things.

I'm just curious, what kind of stuff do you like? What kind of YouTube videos really catch your eye, or you're gonna watch those every time?

**Owen Bickford:** So I actually got some really good perspective on this recently, because I've been getting my husband to learn Elixir, and we're doing flashcards, we've got copies of some books, and stuff... And he's a little bit more sponge-like than me, so he gets things a lot faster...

**Jerod Santo:** Picking them up faster than you did?

**Owen Bickford:** Yeah. And I guess it helps he already went through maybe a Swift course, learning how to do something with Swift. That was a few years ago. Anyway, so we have different preferences. I think people that are watching your videos are gonna want different things, so variety is probably good... As long as it's consistent.

Some people really like a short video. The one I watched today was from Chris McCord, showing how to make a Twitter clone in 17-18 minutes, or something... And even if I'm not typing along with him, that's something I could show to someone else if I wanted to sell them on Elixir and Phoenix. It's like "Look, this isn't gonna take all day for you to see the benefits of what's happening here... And also, if I just wanna get an idea of how it's done, then I can watch that and kind of get it over with real fast, and start either moving on to the next video, or actually start writing some code.

**Jerod Santo:** Right.

**Owen Bickford:** I know that some developers -- and this is also something that's helped me personally, is watching people kind of fumble around, do things the wrong way a few times, come back and fix their mistakes, and stuff like that... And I've heard other people get feedback that that's really good, as well.

**Jerod Santo:** It's a balance of how polished should it be, versus how realistic should it be, also.

**Owen Bickford:** Right.

**Jerod Santo:** You're trying to shoot for not too long, but also not so perfect that it's obvious that like "That's not how I code." It's like putting on a facade.

**Owen Bickford:** Right. I don't think you have really one audience. I think you have 2-3 audiences. You have people that want like "Just give me the byte-sized stuff." You have people who wanna kill and hour or two of just you shooting the breeze with somebody...

**Jerod Santo:** Right.

**Owen Bickford:** And then people who will listen to whatever, I don't know...

**Jerod Santo:** So maybe that's why some of the variety ideas I have are maybe good, if I can execute on them. Another style that I wanna do -- I call it code review... It's where I'm basically a newb looking at an open source piece of software, with the creator of the software, in a shared video.

So it's kind of like they're walking me through code, I'm the person who's the neophyte, and I'm asking questions, and they're explaining why they made that decision, or how this thing works, top to bottom. That's another idea. I haven't tried that one yet, but that's on my list of video styles to try. I haven't seen too much of that on YouTube, where you kind of have -- it's not pair programming; it's like a walkthrough with an expert, and then with a non-expert who is a developer, so I know the kind of questions to ask.

**Owen Bickford:** \[00:20:17.14\] Well, are you getting enough, or too many contributions to the Changelog repos?

**Jerod Santo:** Um... So the Changelog is a weird open source project. We're not open source so that we can be a community-built platform. We're open source because we love open source, and we love to do everything in the open... And because, especially when we first wrote the CMS, there was no prominent production-grade Elixir/Phoenix apps that people could go to and either use as a reference, or learn...

You listened to the episode with Nick Janetakis - he's built his entire video platform basically by looking at our code. And he's contributed --

**Owen Bickford:** And copied a couple files?

**Jerod Santo:** Yeah, and he's in our Slack, and he gives me tips like "Hey, did you know you've got a little security vulnerability here? And then I go and fix it. That's kind of why we're open source. So I love the contributions...

**Owen Bickford:** But you're not looking for a stream of PRs, basically.

**Jerod Santo:** No, not really. I mean, I would accept a stream of PRs, especially if they're good ideas... But we kind of have our own roadmap, we know what we wanna do, this platform is pretty stable... So we're not trying to build a movement around Changelog.com's source code.

That being said, anytime somebody comes in and makes my life better or easier, like you did - I totally appreciate that, and we'll accept those undoubtedly.

**Owen Bickford:** So the one thing that kind of -- the idea that I was having when you were describing your video strategy is if you're trying to... Let's say you did want more pull requests...

**Jerod Santo:** Contributions, yeah.

**Owen Bickford:** Yeah, contributions on Changelog. Then maybe you would have a playlist or a feed on Changelog YouTube -- I mean, we're talking about PR today, but maybe you ask everyone whose PR gets merged if they wanna talk about their PR on a video call, or something.

**Jerod Santo:** Right, do a video.

**Owen Bickford:** Yeah.

**Jerod Santo:** Similar to what I did with you with the podcast, but do it with a video.

**Owen Bickford:** Yeah, like where you kind of go over the code in the video, and stuff like that.

**Jerod Santo:** Yeah. That would definitely incentivize contributions, I believe.

**Owen Bickford:** Because coding videos are fun to watch...

**Jerod Santo:** They are.

**Owen Bickford:** ...especially when you learn something.

**Jerod Santo:** \[unintelligible 00:22:47.00\]

**Owen Bickford:** Yeah, yeah. So coding videos are fun, but... Yeah, so that was just kind of an idea as far as if you're looking for content to dump into YouTube. It would build a relationship between the repos and your channel...

**Jerod Santo:** Yeah, totally. That's a great idea. That reminds me of another style I want to try, which I call "PRs Welcome." I like to just name things and then never create them... Which is kind of a series where I'm going around and doing somewhat random - similar to what you did - open source contributions on people's repos and videoing that. Like the process of finding a thing, cloning it, giving it a shot, maybe picking an issue, and going through a pull request flow. Obviously, I'd have to maybe experience the full thing. It takes a few days sometimes to get everything through. I had to cut that up and edit it and stuff. But it'd be kind of cool to just document some open source contributions as well... So I like those ideas.

Let's talk about what happened. So I had a video, a jam session, and I'm coding up some Phoenix LiveView stuff, which is requiring me to change my mix dependencies, change some commonly-used files, like my endpoints, or my application.exe, and my router, and stuff like that... And because I'm on this little 13-inch MacBook Pro and I've got multiple monitors going, and I have ScreenFlow recording my machine, and I have Elixir doing its thing, and I probably have other software running as well that I can't think of right now - every time I save a file and Elixir needs to recompile, it's dog-slow. My computer just dogs down... Which doesn't make for very good video, does it...? "Oooh, and we're compiling...!"

**Owen Bickford:** \[00:24:50.16\] I'm gonna scrub this video; if our feed gets cut off, I'm sorry. I'm just scrubbing; I wanted to check something here in that video...

**Jerod Santo:** Yeah, so I'm just like, as I record this video, I have all these moments where basically I'm just waiting for my Elixir app to recompile... Which was painful. And I'm talking about how it's painful on the episode, on the video. And then you must have suffered through it alongside me, because then you opened up an issue a day or two later on our GitHub repo, saying basically "Yeah, that was painful. We should fix this." \[laughter\]

**Owen Bickford:** In a nutshell, yeah.

**Jerod Santo:** Yeah, in a nutshell. So what was that from your perspective? Was it like "Hey, here's a great opportunity to do some open source?" Or "I would like to keep watching these videos, but I can't suffer through this again"? What were you thinking?

**Owen Bickford:** Well, I wasn't really complaining that way...

**Jerod Santo:** I know you weren't.

**Owen Bickford:** I was just like "Okay, I see that every time you would save a file in the terminal, when you would hit Recompile or whenever you would restart the application, it would have to recompile 220 files...

**Jerod Santo:** Yes.

**Owen Bickford:** ...which seemed a little bit excessive to me. I hadn't ever looked at the Changelog repo before that, but I was like "I've read a couple articles recently that I think have to do with this particular problem, and I wonder if I can actually go in and figure out what the hell is going on, and how to actually fix it based on tops articles.

**Jerod Santo:** Yeah, it was kind of just a coincidence, so to speak, that you had read some stuff, specifically--

**Owen Bickford:** The timing was just lining up perfectly for this.

**Jerod Santo:** Yeah, dealing with this issue, which -- I had not read these articles. I didn't know about this... And it turns out that there's quite a big difference in module dependencies, depending on if you use import or if you use aliases.

**Owen Bickford:** Right.

**Jerod Santo:** How good are you at describing that situation? Because you're probably better than me at this point.

**Owen Bickford:** I've read these things a few times...

**Jerod Santo:** \[laughs\]

**Owen Bickford:** ...so I will try and be correct. And then if I am incorrect, there are experts online.

**Jerod Santo:** Yes, there are.

**Owen Bickford:** So the first question I have, before I forget - that laptop, is it a dual core, quad core? Do you remember?

**Jerod Santo:** Yeah, good question. I can just do About this Mac right quick... It's a 13-inch MacBook Pro, 2017; it is a 3,1 GHz dual core Intel Core i5.

**Owen Bickford:** Okay.

**Jerod Santo:** Which is a pretty weak machine. In fact, Zoom won't even let me do the virtual backgrounds, because you have to have an i7 at least... They're so lame. So yeah, it's not very beefy, but it's a 2017 MacBook Pro.

**Owen Bickford:** So kind of the excellent thing about Elixir is it builds on Erlang, and the compiler can take advantage of whatever cores you have on your machine, and whatever threads, if it's multi-threaded. So while Elixir doesn't do multi-threading internally per se, the compiler can use all the threads that are available on your computer. So with a dual core you're really constrained. So you're waiting longer for each of these files to compile.

\[00:28:13.02\] I just built a Linux machine for the first time. It's an 8-core Ryzen. It wasn't really suffering quite as much with those 220 files. It would take a couple of seconds... But I could see in the video it would take several seconds --

**Jerod Santo:** Yeah, it could be 30 seconds.

**Owen Bickford:** Yeah, the problem with that is that at the time that you start to compile, you know what your next step is. But then during that 30 seconds, 40 seconds, however long it is, some other idea pops in. "Oh, I need to also check this other thing."

**Jerod Santo:** You pop open another tab, and then you forget there was actually compiling... Then you're like "Oh yeah, I should go back and look at it." Yeah, it ruins your low.

**Owen Bickford:** All that context-switching...

**Jerod Santo:** It is painful.

**Owen Bickford:** ...it makes it hard to make progress on your application. So these articles that I'd read were -- one of them was from one of the Elixir contributors, Wojtek Mach, I think... And I have completely forgot the other guy's name. And there actually have been some articles, even a few years ago, addressing the same thing. But there were some fresh articles that I'd seen from the -- I guess the primary one would be from the Dashbit blog. I think it's the new startup from some of the Elixir core team members.

**Jerod Santo:** Yeah, so Plataformatec got acquihired, so Jose Valim and a few others from the core team started Dashbit to do Elixir consulting and other things underneath that entity.

**Owen Bickford:** Right.

**Jerod Santo:** And they have their own blog now.

**Owen Bickford:** And really, those are some of the best articles you can get... Because they're coming from the core team, and some contributors who aren't in the core team, but they know the ins and outs of the compiler... And they're also really good at writing, so that it's not super-dry.

**Jerod Santo:** Right.

**Owen Bickford:** But there's not a lot of extra metaphors, and things like that. So it's focused, but written for humans. Anyway, so I see this video... You're trying to get LiveView into your -- was LiveView already in the application? Or were you kind of adding it for the first time?

**Jerod Santo:** I was adding it for the first time, yeah.

**Owen Bickford:** Okay. So there was configuration stuff that was taking a while to work out... That's just what happens when you're trying to bring something in for the first time... But at some point, you'd finished all the configuration, but whenever you would write something into a file, it would take forever for the application to recompile.

**Jerod Santo:** Yeah.

**Owen Bickford:** Anyways, so I jump into the repo, and I just looked to see if there had been any kind of mention of this, and issues, or anything like that. I didn't see anything happening, or any movement with that. So I just open an issue, just because I wanted to make sure, before I started chipping away at the code, and forking it, and all this other stuff - I wanted to make sure that someone wasn't already working on it, and that this would be something worthwhile to take a shot at.

**Jerod Santo:** Right.

**Owen Bickford:** So you responded, you said "Yeah, that would be great."

**Jerod Santo:** Plus you wanted to see if we're nice, too. When you start contributing to open source projects and the people are jerks, you're like "I'm out of here. I'm not gonna waste my time with people." I mean, that's me. I'll test the waters. "Are these people kind to their randos who show up in their issues or not?

**Owen Bickford:** Yeah, "How prickly is this particular organization?"

**Jerod Santo:** Exactly.

**Owen Bickford:** Because engineers can be prickly, for sure.

**Jerod Santo:** Well, I'm glad we didn't scare you away.

**Owen Bickford:** \[00:31:59.07\] No, not at all. I'm actually pulling up -- is that issue still open? Let's see... Yup, okay. So this was issue number 314 on that Changelog.com repo. So let's see... Yeah, once you kind of acknowledge that this was something to look at -- at this point I still had no idea what I was actually gonna have to do to fix the problem, and I'd read these two articles, and I started working on it after a few days, and kind of struggling with "Did I bite off more than I can chew? Am I the right person to do this? Should I have just done this and then pushed it after the fact? Why am I doing this in public?"

So anyway, I kind of sort through all that internal stuff and start coordinating with people, and then I started seeing interest from other people as well. You had commented a couple times, we got Nick who commented... And then I kind of -- I was kind of keeping track of things I was running into, just because I knew that if I would put it at least in a comment, someone would be watching and have something to say about it.

First I started with regular expressions. I was like "I'm just gonna go in, I'm gonna find all the modules that are being imported, I'm gonna convert those to aliases, and then figure out throughout the rest of the code where those functions are", and just -- that is kind of the worst possible... That's like just going in and manually updating every individual one, manually almost.

**Jerod Santo:** Yeah...

**Owen Bickford:** The application, especially Changelog's application, is sufficiently complex. That just won't work.

**Jerod Santo:** Yeah. It has surface area. It's not complex in terms of conceptually complex, there's not a lot of very advanced things at play... You might even call it sprawling in the codebase. There's just lots of files, there's lots of areas... I have shared helpers, and I use them all around the place... You know, if I'm gonna use them, they're shared; they're there to help me... So yeah, there's just lots of files, lots of code to cover.

**Owen Bickford:** And you can get away with using regular expressions to update module names and things like that...

**Jerod Santo:** Right.

**Owen Bickford:** ...but this was a whole different kind of beast. Fortunately for everybody, Wojtek I guess had been alerted to this, and jumped in... He actually mentioned that he had written an article, which was great to see... And that he had written another article subsequently, that I had either overlooked, or forgotten about, or whatever... So not only did he mention the newer article, but he pointed out that that article had a script that he had created to automatically go through and convert these things to aliases.

He pushed a pull request where he made some changes, and reduced a few of those import dependencies. I guess this would be the point where you wanna maybe explain what a cross-module import dependency is.

**Jerod Santo:** Yes.

**Owen Bickford:** The whole problem here is that whenever you import a module in Elixir, it kind of brings in all the functions and macros. I think the macros come in as well, but it imports at least all the functions into the target module that you're importing into... So then whenever you make a change to that parent module, it has to recompile all of the children modules that are -- you know, those functions need to be updated at that point.

**Jerod Santo:** \[00:36:02.01\] The dependent ones, right.

**Owen Bickford:** Right.

**Jerod Santo:** And you can specify "I'm gonna import this module, but only give me these functions." There's commands and there's ways you can specify how that works. But if you just say \`import changelog.helpers\`, you're gonna get every function in that module imported as a bare function name that you can call without any reference inside of the importing function... And then that links those two at compile time.

**Owen Bickford:** Right.

**Jerod Santo:** And so there you have a compile-time dependency.

**Owen Bickford:** So on a new project, that can be appealing, because you don't have to type out the full module name. To use a function, you just type the function name itself. But once your application grows a little bit, especially once you get into dozens of modules. That means you've got all these cross-module dependencies. Then you save a file, and then there's all these other modules that have to be recompiled, so that everything is basically synchronized.

**Jerod Santo:** And you end up with 220 files to recompile.

**Owen Bickford:** Right. So long story short - that imports to alias script that Wojtek wrote was really helpful. At first I ran it -- we had some trouble because there were a couple of edge cases with the way that code was written in Changelog, and the compiler capabilities on the 1.10 version of elixir... So it was doing really great at converting some things, but other things were getting mangled a little bit... And we go into detail on that in the article and the issue, but basically once I switched over to the master version of Elixir, so kind of the dev version, that's kind of the bleeding edge stuff, I was able to -- and some tips from Wojtek helped on this as well, but basically I kind of updated that script a little bit, so that it... Well, first of all, using the new version of Elixir allowed it to see into those HTML template files within Elixir, so with the next version of Elixir, the compiler will be able to get more information about functions that are imported or being referenced inside of a .eex file, which are your HTML templates.

**Jerod Santo:** Which we have a lot of those as well.

**Owen Bickford:** Yes.

**Jerod Santo:** Yeah, so missing those would be tragic.

**Owen Bickford:** I used to think that was kind of an over-complicated way of doing things, but I've really learned to love breaking things out into all these separate files... But that's a tangent.

So with the new version of Elixir, I was able to catch more of the functions, so they could be converted. And then the other problem I ran into with the script was that I had to -- alright, so we'll back up a little bit. Inside of some of these modules, there's a feature of Elixir where you can pipe the value -- or the value that's returned from one function can be piped into the next function.

So you can kind of daisy-chain a list of functions to transform some data. Typically, you'll see those written out on separate lines, but whenever you have just a couple of those, or maybe two or three, if it's less than 140 characters long total, then sometimes it makes sense just to put them all on the same line.

**Jerod Santo:** Yup.

**Owen Bickford:** For the script though, and for the compiler, the problem was that it would kind of -- once you would update the first function that needed to be updated, then that second function was in a different place. So it would go on to the next function, start to update it, but all the characters were kind of getting mangled. So I kind of dumbed down the script a little bit; I just used a regular expression Find & Replace just within that single line of code. That solved that problem. It just wound up with maybe two or three lines where I had to go in and manually correct a meta tag that was a description. So there was a description function, there was also an attribute on that tag for description, so it would kind of append the module to both...

**Jerod Santo:** \[00:40:27.12\] Yeah, it's like a namespace conflict where you have a function call a description, and then you also have the HTML element attribute description...

**Owen Bickford:** Right. So once those were sorted out -- and that was kind of the simpler way to get this done without having to wait for the compiler updates later this year. So once I did that, I kind of wrote up the problems I ran into, how I got around those, and then Wojtek chimed in that yeah, this was something they were already aware of, and they actually had been discussing a new feature within Elixir. I think this applies to the compiler, where it can update the formatting of a function without depending on its position within a line of code. So I think it will go in more to like the AST, which -- that one's still a little bit over my head, but it'll go into the actual structure of the code and start renaming things instead of looking at the text.

**Jerod Santo:** Right, the plain text in the files.

**Owen Bickford:** Right. So with all that in place, after all those changes, by the time we got all this down, we went from recompiling 220 files to just needing to recompile five whenever you'd make a change.

**Jerod Santo:** So that's a win...

**Owen Bickford:** A little bit. I was hoping to get to one file.

**Jerod Santo:** 98% was what the final number came out; a cross-module dependency reduction of 98%, which makes me feel like I've been just doing it wrong all these years... But what's funny is -- so when you first made me aware of the problem, and maybe the takeaway for me... So I tried to find rules or best practices to follow, so that's why I chimed in and I asked Wojtek and you "Well, should I just never use imports then? Because WTF... Eventually they'll come back to bite me? Is it just import that's problematic, everywhere? Are just imports considered harmful, or whatever?", which isn't the case... But really what it is is that you should use imports with your own code sparingly.

So if you are using third-party code and you import that - it's not really problematic, because there's very little need for those files to be recompiled very often as you go about developing... Because you're gonna pull them in once, you're gonna compile them... You're only really gonna recompile them when you update your deps, or something like that.

So importing other people's code is nice ergonomics, it's compile-time stuff... Go for it. It's when you go about importing your own code into your own code - which I was doing quite a bit - is when you run into this more often, because you're changing those files more often, is what he said...

**Owen Bickford:** Right.

**Jerod Santo:** Which I think is a good takeaway for me. It's an easy rule for me to follow. I can go ahead and import third-party code, but I'm just gonna go and alias my own stuff, unless it's like my own plugs, which I writes ones and never gonna touch again, kind of thing.

**Owen Bickford:** And with our IDEs now, you get tab completion. If you have to alias a module name, and it's like \[unintelligible 00:43:52.28\] then you don't have to type the first couple of characters anyway, to get the full name. But with aliases, you kind of accomplish nearly the same thing, without having to worry about all the cross-module dependencies.

**Jerod Santo:** \[00:44:15.04\] Right.

**Owen Bickford:** Instead of getting the full domain name of that module, you get just the last section. Or you can even give it a custom alias for a particular module.

**Jerod Santo:** Which sometimes you have to... For instance, we have changelog.repo, but there's also ecto.repo, I believe... Or I have changelog.schema, and there's also ecto.schema, perhaps. I forget the details, but I know there's ecto.query, and I may have a query module... So if I alias both of those to query, I would have a conflict there. So you'd have to give each one their own little alias sub-name. And you can do that with the way you go about calling that macro, so... Not a problem, but just a little bit more typing, that's all.

**Owen Bickford:** Just a little bit.

**Jerod Santo:** But way less compiling.

**Owen Bickford:** It's what we do all day, so it's not like--

**Jerod Santo:** No, it's not a big deal.

**Owen Bickford:** It's not like having to grab a shovel, or something, so...

**Jerod Santo:** Yeah, no doubt. What's funny is how lame I am -- so when you first made me aware of this, and Wojtek did as well, before you submitted your pull request I was coding in our repo... And now that I have this knowledge in my hand, I'm not -- I was not going to put in this effort that you put in, so I'm very appreciative of the effort that you put in... I was just gonna slowly change them myself over time, as I edited certain sections of the site. I would manually Find & Replace inside the file, using basic regular expressions, or just select the word and then Cmd+D inside VS Code to select all of them... So I would just slowly improve -- and that's how I write software, versus like a huge, big refactoring, which requires a lot of effort to put in... I'm too lazy and lame, that I would just like deal with it and I was gonna slowly change it. So I'm happy that it all got changed at once. So that's how I was tackling it.

**Owen Bickford:** Right. I'm glad that you guys have tests, because that gave me a little bit more confidence once I started running the scripts and trying things. I could just run the tests afterwards... I wasn't clicking through the entire application, I could just run the test. If everything passed, then I was happy to go ahead and start committing those changes.

**Jerod Santo:** Right. That's really the huge benefit. Test suites argue for or against TDD and testing as you develop out... But when it comes to refactoring and making massive changes, a comprehensive test suite I would say is crucial. I might say it's compulsory. I don't think I would do it in many cases; in fact, I've inherited rescue projects that don't have test suites, and the clients want changes, and I'm like "Look, I can't with confidence make any of these changes, because I have no idea what this is going to affect... So my first step is I need tests. You're gonna have to pay me to write some tests, and then we can talk about making changes."

I think there's good evidence that a complete stranger can clone the repo and make these massive changes with confidence that at least -- I don't think we're at 100% coverage; I know we're not at 100% coverage... But we're at pretty good coverage, enough where you can make these kinds of changes with confidence.

**Owen Bickford:** Yeah. Especially with a big open source project, it gives you a lot of confidence. You can have your CI builds running those tests automatically, and then people can kind of do whatever they want with the code, but it doesn't make it into your repo if it's not passing those tests. And I've still got a lot to learn myself about actually writing tests, but... It was nice that those were already done and I could just kind of check what I was doing against those tests.

**Jerod Santo:** \[00:47:58.29\] Yeah, I think a lot of the reticence against test writing is once you start trying to do it, you realize that writing tests can often be harder than writing the actual implementation. And so it's like, "Well, it's hard enough to write the code. I also have to write the tests", and then you realize your code is hard to test, which actually is a nice smell that your API isn't well designed, which is one of the selling points of TDD - people will say that that test is your first user of your implementation, and your test will tell you that your implementation is difficult to test, therefore it's difficult to use, and you will actually change your API design to allow your tests to be easily written. I've found that to be true sometimes, and also false in other cases, in my experience, where I feel like sometimes I'm designing my API for the test, but then I'm not using it that way in my other code... Anyways, that's a tangent as well. But yeah, testing is not easy, and writing good tests takes time and experience.

**Owen Bickford:** I've got a book around here somewhere, but -- yeah, I cracked open the "Property-Based testing with the PropEr." That one's kind of written for -- I think primarily for Erlang, but they do give you Erlang and Elixir code. That one definitely -- once I started working on my own Elixir applications, or if I can start working on that day job, then I'll be... I think property-based testing makes more sense, because you define kind of like your schema; you're providing a bunch of general information about what you want from your application and from the modules... And then it will just generate some random test data, and then make sure that it's handling things that you couldn't imagine --

**Jerod Santo:** Right. Kind of like a fuzzer.

**Owen Bickford:** Right.

**Jerod Santo:** Yeah. I've never actually used property-based testing. I've seen a talk on it, and I've definitely had people tell me about it... I knew it was a thing in Erlang, and I've never actually given it a shot. Is there easy access via Elixir to property-based testing, where you can drop them into a repo and see how it works?

**Owen Bickford:** If you wanted to try it for the first time, I would probably take a look at the norm package documentation, because it's a way of declaring custom types for your application or for a module. And then if you have one of those data generators in your application, you can just tell it to generate some data, and it will generate whatever -- like, if you're telling it that this first argument should be a string, then it will generate some random strings and kind of give you a better idea of what's gonna break your application.

**Jerod Santo:** Yeah. It sounds like a good subject for a future jam session.

**Owen Bickford:** Yes.

**Jerod Santo:** That would be cool.

**Owen Bickford:** The example that he has in the docs - it's really easy. It's just one module, you're creating an RGB to HEX converter... So that one you can do in an afternoon, and then kind of get a feel for how that particular package works, the problems it solves, and then maybe how to do some property-based testing, as well.

**Jerod Santo:** Well, we'd be remiss not to mention that you did also write up this entire experience as a Changelog post, so we'll put that in the show notes for those interested. It seems to have resonated pretty well with the Elixirists around the community, especially on the SubReddit; they were quite appreciative of this. Because I think it's information that a lot of people writing Elixir would wanna know. Even though there's those existing blog posts, here's an example of putting those into action, how you use the import alias script, stuff like that... So that's really cool as well.

**Owen Bickford:** Yeah. I'm glad.

**Jerod Santo:** You're not using Elixir in any sort of day-to-day context though... Are you gonna get like a side project, or are you gonna get a gig, or what are you gonna do?

**Owen Bickford:** For a while last year I was working on a project, converting something from PHP to Elixir, with a Phoenix application... And I didn't manage to finish it before I got the new day job, so...

**Jerod Santo:** Gotcha.

**Owen Bickford:** So I was building kind of an e-commerce application... You know, building up users, and roles, and that kind of stuff. I did a lot of work on that... So I've kind of gotten the bare-bones stuff down, and gotten confident with the CRUD operations, the more backend stuff. Distributed networking and communications stuff I think is the next frontier for me. I've got a couple of ideas on things I'll be working on, but maybe I could talk about those in the future.

**Jerod Santo:** Yeah, man. Very cool stuff. Well, Owen, thanks so much for getting involved. Sometimes it's tough to just put yourself out there and take that first step and open an issue or open a pull request and say "Hey, I can pitch a hand." We definitely appreciate it. Adam told me to tell you thanks from him. He's bunkered down; not from Coronavirus -- well, also from Coronavirus, but there's also a massive storm in Houston right now. He was gonna join this, but couldn't, but he wanted to say thanks to you... And yeah, we appreciate you coming on Backstage and sharing your story, man. It's pretty cool.

**Owen Bickford:** Yeah, thanks for having me.
