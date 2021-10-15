**Jon Calhoun:** Hi, everybody. Welcome to Go Time. Today I'm joined by DaShaun Carter and Jacquie Grindrod, both of which have some recent experience diving into Go for the first time. First, let's just start with DaShaun - how are you?

**DaShaun Carter:** I'm wonderful. Life is good.

**Jon Calhoun:** That's good. Jacquie, how are you?

**Jacquie Grindrod:** I'm doing pretty great. It's been busy. We've just finished a virtual conference for the first time; it was in EU time, but that was exciting, and everything's going really well, all things considered.

**Jon Calhoun:** Awesome. So I'm excited to jump into this, because I think a lot of people are switching to Go these days, and it's always nice to talk about what they should be focusing on in that first week. I often feel like that first week makes or breaks somebody's experience with a language.

To start off, both of you do have experience diving into Go, so I guess let's just start there and just go over a little bit of what you two have been up to recently, and how it pertains to this, or how it led to this topic.

**Jacquie Grindrod:** Yeah, sure. So I guess just a quick introduction - my name is Jacquie, as you mentioned, and I'm a developer advocate at HashiCorp, which is one of the driving reasons I really wanted to start getting more into Go. It's my goal to eventually be able to contribute to the future development of some of our products. Otherwise, I got Canada Top 30 Under 30 Developers, so that's like a fun talking point, if anyone wants to talk to me about it. It's still surprising to me; it's been a year, but... \[laughs\]

And then coming out of being a DevOps practitioner for the last five years, with a focus in the healthcare environment... So yeah, I was getting started with Go next, right...?

**Jon Calhoun:** Yeah, so what was your experience learning Go? How did you go about doing it? I think yours is probably one of the more unique approaches.

**Jacquie Grindrod:** Yeah, so I started learning it -- this was actually my third attempt learning it. I've tried to learn it at previous jobs a few other times, and it just really didn't feel like there was enough support or time to dive into it. This time I started learning it on a live stream. Straight from installing Go, I started live streaming, I went to the document page, and was like "I don't even know how to run this, but here we go. Let's get started." And that was in preparation for my interviews at HashiCorp, because I learned that all of their products are basically in Go.

So I did all that livestreaming, and I was solving Exercism challenges on live stream, which was a bit more of a dive-in than I thought it was going to be initially, because you went straight from Hello World to "I got \[unintelligible 00:04:03.08\]" which had a lot of things I just wasn't ready for, like the custom stuff... I was gonna have it open on my other screen to reference that, but...

\[00:04:13.19\] It was a pretty big dive, and it felt like pair-programming with basically the internet, with whoever wanted to show up, which was pretty terrifying, but it was really nice, because it ended up being a lot of people that already know Go, and who are really friendly... And they end up being really good teachers, because they kind of come by and try to guide you the right way, instead of telling you the answer, which wasn't what I expected from that experience... So it was really nice.

**DaShaun Carter:** I have seen that... I kind of lurk and go and help, and I like to jump in, whether it's something I understand or not. "Hey, let's ask questions. Let's think out loud." I'm a big fan of pair programming... Not just for the exercise, but for how much I think things stick. I'm gonna go ahead and go out on a limb - since I didn't do any programming on this, I'm gonna assume that it was stickier for you. So yeah, we'll just start there.

And then, at that time - I'll introduce myself. My name is DaShaun, I work for VMware. I'm a \[unintelligible 00:05:05.23\] solution engineer. I've been doing development for 20+ years... And yeah, I love my job. If we pay attention to the news, the world is going crazy, and I think it was New Jersey, they decided "Hey, sorry, we can't get you your unemployment checks, because our systems are on COBOL and we have anybody to help us, and we're stuck. We're backed up." That was in the news today, and I was like "Oh yeah, let me go -- let's check out COBOL. Let's do the thing." And it was a fun little exercise - focus on COBOL, do some stuff... And then a couple of weeks later I got an email that said "Hey, there's a thing", and I was like "Yeah, that sounds awesome. Let's do the same thing that we did with Go. Let's jump in." And I did the same thing as Jacquie did, I jumped into the documentation.

I kind of looked for something like the CodeCamp setups, but I went to the documentation, jumped through, get a base-level understanding... But then, instead of going to the deep dive, she kind of jumped off the highboard as soon as she could doggie-pedal. I said "Um, I'm gonna go and sit on the beach a little bit, I'm gonna read the docs, and I'm gonna go look at GitHub projects that have issues that maybe say they're good for a first-timer." That's the route that I went.

**Jon Calhoun:** It sounds like you both started with the docs, and installing things. I guess one of the reasons I find that interesting is that I feel more and more these days a lot of people immediately go for a book, or a tutorial, or something different... So what caused you both to jump into the docs as your first choice?

**Jacquie Grindrod:** I guess in my case I started with the Exercism exercises, and I was like "Well, this is cool, but I don't actually have Go installed", and that kind of led me to go straight to the docs, because I was trying to answer the questions it was giving me... But I don't have it installed yet, I don't know what a lot of the terminology was that I was trying to figure out what to do with it; lots of doc references. And then I also had viewers that were linking me to a lot of other references to help, and I actually have those somewhere over here.

**Jon Calhoun:** Okay.

**DaShaun Carter:** Yeah, and... For me, the docs were good, and that kind of helped. You talked about getting a book - in the Kansas City 1999 it was a dotcom boom; it was exciting, lots of things. I didn't wanna say no to anything, so "Oh, you want me to go?", I'd go to the bookstore, buy a book on Go and then I'd go home and study, study, study, cram-cram-cram. And that was kind of the path. But today, especially with OSS projects, it's easier. It's easier to get into. And I was just trying to think back, did I ever see a Perl readme, Hello World? Did I ever see a Java Hello World? I took both of those in college, but I don't remember seeing anything that was "So here's how you install it, here's how you do it." That was an hour-long lecture on how to get that first one. So yeah, I'm comfortable learning there, and that's how I learned it there. I just go to the docs first.

**Jon Calhoun:** \[00:07:57.20\] Okay. I definitely think that makes sense, especially because sometimes it's challenging when you grab a book, and install instructions are one of the things that can sometimes be very hard to keep up to date in a printed book. You know, just because all these new things come out, you never really know what's gonna change; or Mac releases a new update and all of a sudden you have to say yes to all these permissions, and people are like "What is going on?" It's definitely challenging... Whereas docs are a nice living document that they can keep updated at all times.

So I guess one of the questions I have for both of you is that you both jumped to the docs and you're both looking to install Go. Did either of you start with the Go Playground?

**Jacquie Grindrod:** I didn't' even know that was a thing...

**DaShaun Carter:** I did not.

**Jacquie Grindrod:** No. I started with the docs, and then I got linked to Go By Example, and was checking that out next.

**Jon Calhoun:** Okay. I wonder if there's a way that that could be better referenced, I guess.

**DaShaun Carter:** Can you throw that link in the Slack?

**Jon Calhoun:** Play.golang.org.

**DaShaun Carter:** Yeah.

**Jon Calhoun:** So basically, the idea here is that it's like a little sandbox environment that as long as you're using the standard library, you can jump in and write Go code and it'll actually -- you can get it to format your code, you can get it to pull in some imports, and you can run your code and it'll spit out the output there. And it's a little bit different from running locally. Obviously, opening up a file is gonna be trickier... And there are some different aspects like that. But you can also share links to your source code, and I've found that for somebody who is on the fence about the whole thing, who just wants to see "Let me mess with that a little bit", it's a great spot where they can go without that overhead of "You need to install it and you need to figure all this stuff out." You can just write some code.

**DaShaun Carter:** You touched on a really good topic. That was a thing. If you've done the Perl and the Python and others -- I didn't know what was the environment, what it looked like. Did I have a sandbox, or was I installing things all over my laptop? And that was a concern. That was one of those things that I didn't know about the language, and that was one of those thoughts that I had early on, like "Should I start with the Docker image? Where should I be doing this?" So I explored. After installing it, I kind of explored "What else did it do?" But yeah, that was definitely a concern of mine, with the experience going into this; it was like "Yeah, what am I getting myself into?"

**Jon Calhoun:** For me that's a challenge because the more experience you have programming, the harder it is to empathize with the person who has less experience. After you've installed ten different languages, you kind of get to that point where you expect certain things to pop up and have to debug some stuff... But somebody the first time -- like, I can think back the first time I tried to learn Ruby on Rails I gave up because I couldn't get stuff installed. This was back when I was in college, and I just was like "I can't do this. It's not working. I give up." And that's always a disappointing outcome, when they're excited about something new and that's what happens.

**DaShaun Carter:** Absolutely. I feel your pain.

**Jacquie Grindrod:** I really relate to that.

**DaShaun Carter:** Especially with Ruby on Rails. I banged my head on those Rails quite a bit.

**Jon Calhoun:** I think it's better now.

**Jacquie Grindrod:** Mine was Python, with the 2.7 and the 3.x. I hit my head against that a lot. And the fun thing about that feeling of being like "Why can't I get this? What's wrong with me?" is our professor actually played -- I forget who did it, but the lightning talk... It's like three minutes, about a bunch of different languages. That was actually the moment where I watched that, and I was like "Okay, maybe it's not just me. All these languages just have different things going on", and that kind of made it feel a lot more approachable, just knowing it wasn't like "I'm not just getting it. Other people have had these problems and they're calling it out."

**Jon Calhoun:** It's nice that your professor did that, because I think -- I don't know, every language is just so frustrating in some of those senses... Okay, so you both jumped into the docs. I guess the next question I'd have would be "What was the first thing you started to code?" If somebody's trying to learn Go, what do you suggest? I think, Jacquie, you said Exercism. Is that where you would suggest people start?

**Jacquie Grindrod:** So I found it worked really well for me because you could put your solution in, you could see how other people solved it, but you'd also have mentors come and comment. The really nice thing for me about the mentors was that they were really good at giving iterative feedback. So they'd give me some feedback and be like "Here's how you can solve this a little bit more elegantly." And then I would do that, and then they'd come back and be like "Okay, so now that you've done that, here's another step you can do", until we got to that final iteration. And I do have all those commits tracked, so I can watch the way that I grew as I was learning, and the feedback I got.

\[00:12:10.22\] So I would actually recommend that, because it was a very nice experience for me. You got to do it, and you also got professional feedback from people who do this, which you might not always get if you're just learning a language on your own.

**DaShaun Carter:** You should capture one of those URLs if it's public. Throw one of those in there too, because that would be interesting to go and look, from my seat. Like, we were kind of both jumping into this, and I kind of -- yeah, I did not jump into the deep end. I sat back, and after I did Hello World on my Mac, I went over to my Linux box and I did the same thing, like "Hm, what are the differences?" I'm just trying to understand -- again, the ecosystem is easier.

So I didn't capture a whole lot of my examples, and I didn't have the mentorship. That's why I think I'm gonna still assume that you have a stickier experience with the language... But some of the differences that I was looking at was -- I was thinking, "How do I get this into a Docker? How do I automate this? What does it look like?" And one of the early things that stuck out was "Wait, my GitHub URLs are built-in? I don't have to pull anything down, this is just out-of-the-box?" That was something that really tickled my fancy, that automatic integration, with "Oh, that's where it is. You can compile it, and that's it." That was an exciting learning for me.

**Jon Calhoun:** One of the upsides to the GOPATH if you're using it is that that just works out of the box, and it's great. The unfortunate side effect of the way Go modules are now is that I think it's a little bit trickier. I'm guessing you might not have gotten into Go modules in the first week, because realistically there's no real reason to...

**DaShaun Carter:** I did, because the path that I went was "Oh, now I've gotta pick some projects. Well, in order to contribute to these projects, I've got to get them running." I've gotta figure out "Hey, did my change fix anything? I have to run the tests."

**Jon Calhoun:** Okay. So if I recall correctly, pulling something from GitHub that doesn't have -- I think if you're using modules... I don't remember if everything you're using has to have moduled versions or not... It's been a while since I've messed with that side of it. Whereas otherwise if you just were running it in the GOPATH, you can just pull and it just grabs whatever is in master and pulls it down. It's kind of a nice breath of fresh air, like you said, where it just grabs the code, and you can kind of pull it, and you're like "Oh, I don't have to go and install this other toolchain to manage all these things." So I've always found that that was a nice approach, especially now that GitHub has kind of become the standard for anything open source.

**DaShaun Carter:** One of them, yes.

**Jon Calhoun:** Okay, so you're both jumping in, and - I do wanna take a second to step back. Jacquie, you had mentioned Exercism, and doing projects, and having a mentor. For anybody unfamiliar - and you can correct me if I'm wrong, but I believe Exercism is this series of predefined exercises, and then after you complete each one, you submit it and then... Like, is it a random mentor that gets assigned to you?

**Jacquie Grindrod:** I think it's whichever mentor is available. You're correct, it's a series of exercises, and they have different learnings paths. If you're not somebody that's comfortable with having people come look at your code, you can actually opt out of that. That was the big pull for me to go to it, was that I can check off, "I'd like somebody to come look at it." Then you can also share your solutions with other people who are learning, so you'd see how other people tackled it, as well as getting the mentor feedback.

**Jon Calhoun:** Okay. And then basically every exercise you're completing, you're getting that feedback and they can sort of give you that iterative "Here's one way to try to improve it. Go try to do that", and you can keep improving.

**Jacquie Grindrod:** Yeah.

**Jon Calhoun:** Okay. So I do really like that approach, in the sense that once you have sort of standard exercises, everybody can sort of build a process for that. Because my guess is that for people who mentor there a lot, they probably see the same types of progress that people can make almost every time, so they almost have like a checklist of like "Where's the person at in my progress list?" and "Let me see if I can help them move to the next one", which I imagine would make that process a lot more efficient.

**Jacquie Grindrod:** \[00:16:08.09\] Yeah, it seemed like it was prepared answers, but they were prepared answers that fit, so it felt right still. And I guess the other thing I didn't mention is I was also keeping a project log while I was doing this, so any resources that got linked during my stream or stuff like that is available in my project log, too.

**Jon Calhoun:** Awesome.

**DaShaun Carter:** That's great.

**Jon Calhoun:** Okay, so I guess that day one you're both just sort of building these projects... What were your expectations for your first week, like when you'd first started, and then what did the reality turn out to be?

**Jacquie Grindrod:** That's a really good question. I was learning -- I think I mentioned a couple weeks before I had an interview, because I was expecting to have some Go questions in my interview... So coming into this, my expectation was basically "I just need to absorb as much Go as possible, and just hope it lands and sticks." So I was doing a few questions every day, and then trying to review it and get the iterations. I didn't really expect it to go that far, because my previous attempts hadn't been very successful. They were pretty frustrating for me. But this time I did get a lot more questions done than I expected to, and I did feel like I was learning it much better than I expected to, to the point that when I did get an interview question, I actually was able to complete the question AND submit it with tests, so I was like "I'm learning..." \[laughs\] So that felt really nice.

**Jon Calhoun:** That's awesome.

**DaShaun Carter:** That is. And mine I think was academic. I was like "What is it like?" And the approach that I was going in with this is I had a hypothesis that a company, an enterprise - they should kind of pick one. If you wanna level up everybody and you wanna pass MVP, you've gotta kind of pick one. I'd been on the opposite side of that; I worked for a company and they bought a startup, and the startup decided "We don't care, just get it done. Do this, and that, and that", and then when they sold, they sold us a bunch of hundreds of languages, and all this, that and the other, ten different UI frameworks, ten different data frameworks all in the same package, and I was like "Yeah, maybe I was biased going into it." So I've just kind of had this thread where maybe if a company wants to level everybody up and be able to deliver something, pass MVP, maybe they should pick one.

I know that different languages have their own strengths and weaknesses, but I feel like a lot of them can do a lot of the things. There's a web framework, there's slicing and dicing any which way... Even for COBOL. Like, hey, somebody did a web framework in COBOL. These are crazy things, but what does it take to get up and get out? Because the other part of a startup is "How fast can you level somebody up in a language?" It was kind of academic, but I was keeping those kinds of things in mind. I'm not sure what my expectation was.

**Jon Calhoun:** That makes sense. And I completely agree with you that picking a language, especially one you're familiar with, and being willing to focus on that tends to pay dividends in the long-run. One of the biggest issues I guess I see in tech at times is that people are constantly grabbing for the new thing, and that distracts them from really developing any sort of strong foundation with anything else.

I even think that's part of the issue with people who are learning at first, is that they spend so much time trying to pick all the right things to learn, that if they just dove in with the first few things they saw, they probably would have had more progress than spending a lot of time -- like, I actually just talked to somebody recently who had emailed me, and basically she had been trying to get into coding for a while, and she had talked to her -- I think it was her boyfriend, and other people at work, and she kept trying to find the best resources... And I basically was blunt and said "It really sounds like you're talking about all the ways to learn this thing..." And I see this with business, too. People talk about starting a business, rather than actually starting a business... And I was like "But what you really need to be doing right now is to stop emailing me or anybody else. Just pick something and go with it. And I don't care what resource you use, it almost does not matter. You just need to focus on learning."

**DaShaun Carter:** \[00:20:05.18\] I agree with you 100%. You heard the same thing from Jacquie and myself - it's about getting reps in. Coming into it, I agree. Just pick one and go (haha, I said Go). Is it gonna be successful? Nobody has a crystal ball. But part of the exercises, part of what I wanted to get out of it, or maybe I was trying to confirm something that I assumed, is that if Jacquie comes by and she says "Hey, I've got this billion-dollar idea and I'd like you to be a part of it. We're doing everything in Go", I wanna have the confidence that I can jump into something and get far enough along where I can connect the dots and I can get something out, I can run the tests, I can get it to production, I can monitor it, I can get some sense of what's going on. That's where I wanted to be.

**Jacquie Grindrod:** Have I got news for you...! \[laughter\] I'm just kidding, it's not a project. But yeah, on the front of learning things, an advantage that I didn't really realize -- I knew I had it, but I didn't really consider it until a conversation I had (I think) last week, or this week... It was about concepts like garbage collection. I would have learned that in my computer science classes, and there are things that I just kind of knew about going into this, that I didn't really think about in terms of when I'm learning it on the job in an ops role. Maybe that's not something that just gets presented to you. It might be those kind of concepts that you need to learn outside of just the code... And that's been interesting to figure out "How do you review best practices across different languages, or different architecture patterns?", which is not my strength, but... Trying to figure that out while learning the language can be pretty overwhelming, and just figuring out where to start.

**Jon Calhoun:** I think it's hard to focus on it right away because you almost need to experience doing it the wrong way for the right way to actually make sense.

**Jacquie Grindrod:** So much this... \[laughs\]

**DaShaun Carter:** I agree. Patterns. Just patterns. That's something I was looking for, like "What do I see people doing? What do I see in these projects?" But that's a thing that I think you don't need to know right away. If I'm talking in this onboarding, I'm grabbing somebody that's fresh and I'm saying "Hey, we're doing everything in Go, but this is a million-dollar idea. Get with it. Let's get excited", I'm not gonna say "Now you need to know how to do distributed systems globally." That's not it. You don't need to know those patterns yet. But \[unintelligible 00:22:21.18\] more of the case is "Hey, here's how you do a controller. Here's how you do mapping. I'll tell you the patterns, I'll give you maybe some examples... Yeah, get your reps in. Get your reps in, make mistakes. Then we'll talk about patterns later on."

**Break:** \[00:22:44.19\]

**Jon Calhoun:** DaShaun, you were mentioning getting your reps in, and Jacquie, you mentioned earlier that you've quit in the past a couple of times, so you almost went in with that expectation. So when somebody's jumping in here and learning about a new language -- I mean, if you have any Go-specific tips, obviously they're helpful, but this is really any language, or learning to program in general... How do you keep yourself motivated or what advice do you give to people who are in that first week? How do you keep it so you continue through the whole first week, and that you move on to the next week?

**Jacquie Grindrod:** \[00:24:21.04\] That's a really good question. For me it was having these bite-sized programs or challenges that I could just do a little bit of every day. I was doing the Lighthouse Labs JavaScript Challenge before this, which kind of set me up into having a story that continues over a couple of days, and just doing 10 to 30 minutes of coding every one of those days. That was how -- you know, I'd get my coffee and I'd start my challenge before the workday started... And I found that was really good to keep me accountable to it. Also, the streaming was really good to keep me accountable to it...

**DaShaun Carter:** Absolutely.

**Jacquie Grindrod:** ...because you know, you're livestreaming, you're there, you're committed; suddenly, it's a lot more serious than "Okay, I'm just gonna sit on my couch and try to write it, and if it doesn't work, it doesn't work." I did try to quit, I don't know how many times, and viewers would be like "Don't quit, you're almost there. Just do it!" and that's how I stayed on one of my live streams 90 minutes later than I was planning on going to bed at... But you know, I did actually get it done, and it worked really well.

**Jon Calhoun:** That's awesome. So were you livestreaming every day then?

**Jacquie Grindrod:** Pretty close to it. There was a couple flights around the country in the middle there for Christmas and some other stuff, but I was doing my best to stream every day until I was in houses that didn't have good enough internet for it... But then I'd already kind of got then pattern, so I was still doing the exercises on my own.

**Jon Calhoun:** And did you find that people were actually showing up frequently, expecting you to be there and kind of motivating you to keep doing it?

**Jacquie Grindrod:** So I was in a stream or Discord called Parti Corgi, which was awesome, and I would post in there when I was about to stream... And a lot of other people there are streamers, so they would usually come by and show up... And then I also tweeted. As far as consistency - I think there was a couple people that generally showed up, and then I think I was around like 5 to 11 viewers concurrently usually, which was a lot more than I expected for "Hey, I'm just gonna go read these docs on stream, and try to narrate them to you so you don't leave while I'm doing this..." \[laughs\] But yeah, there were people that were consistently there, and it was nice, because it was kind of like having this little support circle that - I really didn't expect this. I expected streaming to be more like people coming in and being like "Hey, you're doing that wrong. Hey, why didn't you do this?" So it was really nice.

**DaShaun Carter:** I'm gonna paint a picture... This is pretty similar -- like I'd said, every rep counts. I've been to the gym... Have you guys been to the gym? Maybe not lately... But it's kind of the same experience - you definitely went out and you kind of said "Hey, I'm gonna go to the gym. I put it on the schedule and I'm going." And maybe if you have a gym buddy, I think everything goes better. You're pairing. You had some accountability. And I basically said "Oh, I'm gonna buy some weights... I'm gonna put them down here." This was my path; I didn't put any deadline or I didn't have any severe accountability fitting it in. It was my number one focus, but still - not only is it gonna be stickier for you. I think that accountability - yeah, I think you probably went further, faster.

**Jacquie Grindrod:** I do think having the timeline and the accountability... Because you know, interviews are pretty good motivators. I think that really helped me to be more dedicated to it. Consistency is something that I tend to struggle with throughout my career. I'm pretty vocal about it on Twitter, but I've got ADHD, so that's one of those known things that's hard... So having that tight deadline gets kicks in that sense of like "We cannot procrastinate. We've gotta do this today." And then having those people to just -- when it was getting hard and I was scared I just wasn't gonna be able to do it, having those people just cheerleading really helped me get through and learn so much, so fast.

I know another resource I've found is -- there's this \#100daysofcode that you'll see on Twitter at times, that I think Alex Kallaway is who started it... Basically, the idea is that you sign up publicly to do 100 days of at least one hour a day of coding. And I know at first that sounds like a lot, and realistically even in my mind, I'm like "If you wanna take Sundays off or something, I would be okay with that." But I do really like the idea of being accountable and being public about it, so that you have this motivation of "If I don't do it, somebody might notice that I skipped a day", or something.

\[00:28:23.00\] And it sometimes sucks because you don't wanna guilt people into working on something, but at the same time almost everything worthwhile takes effort and work when you don't wanna do it. DaShaun, you were talking about the gym - nobody likes going to the gym every single time they have to go. Sure, you might like it 90% of the time, but there's gonna be that day where you're like "I really don't wanna go to the gym today."

**DaShaun Carter:** It's a great metaphor, yeah.

**Jon Calhoun:** But yeah, if you don't stick it out, it really can just lead to you quitting altogether. Missing one time all of a sudden leads to skipping two... And Jacquie, when you mentioned doing it live, I guess I kind of compared it almost to having a trainer. If you have the live audience there - I've found that people at the gym, when they have a trainer, they're not paying the trainer necessarily for anything aside from accountability.

**DaShaun Carter:** Yes.

**Jacquie Grindrod:** That's actually how I got the gym to work for me - I had a personal trainer who is one of my friends and going into that space, and she just showed up and would be live "We're gonna do this today" and I'd be like "Are we really doing those things? I don't know if I can lift those weights", and she's like "You can lift those weights, you just don't think you can lift those weights." So it was good.

**DaShaun Carter:** Again, with that metaphor - I think it's amazing. I'm an old man; I have kids, I have to know what I'm about and I have to be like "Hey, this is how things work." And regarding \#100daysofcode, I think if you can do anything for 100 days straight -- like, I can't even get 5,000 steps for 100 days straight. But if I commit -- if you can do something, I think you can change your life, no matter what it is. Drawing a picture, writing in Go, anything. And there's value behind that.

The problem with this exercise is like "Hey, I'm jumping in", and if I wanna do that, I have to kind of know where I'm going, and what that framework didn't provide. It was "Hey, do you wanna do Go? Yeah, step-step-step-step. These are the things that you should do." You kind of have to go out and find the Exercism that you're gonna pull in.

So yeah, I definitely see the value in that, but even that - I think you need some guidance. And I think that's why a lot of people do that exercise on Twitch, or on live... Because they're like "Okay, so I got through this thing. Now what should I do next?" and if you've got an audience -- and it only takes one person to put you in the next step.

**Jacquie Grindrod:** That reminds me - I totally forgot to mention, but right after the Exercism exercises, one of my friends was building out an API in Go that he just wanted to do some things to learn... So it was really nice to be like "Hey, I've tried these exercises, but they kind of hold your hand through it, so how about I try building something that I don't know what that looks like yet?" So it was really nice that we did these pairing sessions on Zoom.

We would just sit down and pair, and he would talk through what he wanted to build, and I would kind of drive while building it, because he more or less knew what he was doing. But it was a really nice opportunity to get that experience, and like "Okay, how am I gonna build the structure for this? How am I gonna try and think of what function it's gonna call, or what API paths it needs?" And that was very complementary to the more guided exercises, too.

**DaShaun Carter:** Yeah.

**Jon Calhoun:** I've even found that there's a lot of communities focused exclusively on basically forming a study group to hold each other accountable and to give each other ideas of where to go next... I think Reddit is a pretty common place. I don't remember the exact Subreddits, but I know there's a couple there where people will essentially just have a study group and they're like "This is the problem we're working on today. Here's tomorrow's problem", and that sort of helps everybody keep motivated to keep up with the group and to work on this stuff.

Part of my experience with school was that a major part of going to a university and learning computer science there was that you worked with other students. You actually had that collaboration, you had a teacher setting a pace... And I think that's probably one of the biggest challenges to self-guided learning - keeping a pace and having people to work with.

**DaShaun Carter:** \[00:31:57.26\] Absolutely. And I can go ahead and give a shout-out to Jim and Jessie from my computer science program back in university; having that community to get through things. I'd say today we probably don't need to have those study buddies, and you're probably not sitting in class as much now in June 2020, but having that accountability, having somebody there with you along the way... And just like you said, that study group - I think that that's huge, even at work, as you're kind of going through and your learning. I think it fits with anything. I think that probably the biggest thing is like, yeah, have somebody that you can bounce things off of.

I have a co-worker, Sean, that we're learning new stuff. There's always new technology we have to pick up. But every once in a while, we're like "Let's just sync up. What did you think about this? Have you heard this? Have you seen that?" It's a Zoom call just to bounce ideas back, have somebody else that's on the journey... Trying to get better.

I think already I've realized that, man, you know what - the path that I took, even though it was easy, even though it kind of fit my schedule, if I really wanted to adopt and maybe take a step at my career path... I think Jacquie did it. Like "Hey, let's go. Let's get our feet wet", and then cannonball in the deep end.

**Jacquie Grindrod:** It's funny that you say that, because I actually have the opposite perspective of you, with you going and looking at tickets where you're like "Oh, they're flagged for new people. How do you contribute?" I am still absolutely terrified of doing my first open source commit... Sorry, co-workers; I'll do it soon. But I've been wanting to sit on that and do that. I know there's those flags for new people, but I think that takes a lot of courage... Because for mine, it was like "I'm just doing this exercise, and it's gonna go there, and honestly, nobody's gonna probably look at it other than the mentors... And that's a pretty safe space.

**DaShaun Carter:** So I'm gonna go ahead and ask Jon to help us out... We're gonna jump onto Jacquie's stream and we're gonna find an issue on one of these projects, and you can mentor us as we look for one of these "good for first-timers" and commit some OSS.

**Jacquie Grindrod:** I'm super-here for this. We'll follow up on it. \[laughs\]

**DaShaun Carter:** Yes. To do. I'm gonna go ahead and open up a ticket.

**Jon Calhoun:** I think it's important to also note that what works for each person is gonna be slightly different. Like Jacquie said, for some people jumping on an open source project is absolutely terrifying. For others, if you've gotten familiar with doing it, even if it's as simple as looking at the docs, sometimes that can be an entryway into a new language - looking at docs, trying to look at the code to see if you can help update some docs, or do something...

**DaShaun Carter:** That is contributing. Absolutely.

**Jon Calhoun:** I know, it is contributing, but it can also lead to understanding the language, even if you don't know it that well... Because you're reading the docs, you're like "This is what it says it does. Now I can look at the code and try to understand how it's actually doing that."

**DaShaun Carter:** Yeah.

**Jon Calhoun:** But then I've even seen some people who take books and courses and they don't necessarily have exercises like Jacquie said, but what they'll do is they'll take the content in the book or the course or whatever it is and they'll slightly modify at their second pass and be like, "Can I build something like what they're teaching, but not exactly the same?" and that pushes them outside of their boundaries a little bit.

And even the live streaming bit, one of the things that I've seen a lot of people do is they start blogging about what they're learning as a way of just sharing it publicly, and that forces them to really think about what they're learning... Sort of like, Jacquie, if you're trying to verbalize what you're reading in the docs, that probably helps to make sure you understand it... Rather than skimming something and just being like "Well, I think I know what that means... Whatever."

So all these different approaches - I think a lot of them have the same fundamental benefits; they're just different ways that each person is comfortable with.

**DaShaun Carter:** Absolutely. So I'm gonna step out of that thread for a little bit and I'm gonna say - hey, coming in, she's trying to understand the language... I kind of have some language experience and I have the enterprisy "Okay, this is all the things that can go wrong, and this is the distributed stuff." So I wasn't as worried about doing actual development as I was about getting Go code in production, what does that look like. And again, I guess we're coming at it from different perspectives.

**Jon Calhoun:** \[00:36:03.04\] I think I could tell that some, because you immediately started thinking about Docker... And I'm guessing Jackie didn't want to consider using Docker to run her Go stuff. I could be wrong.

**Jacquie Grindrod:** Oh, I did.

**Jon Calhoun:** You did?

**Jacquie Grindrod:** \[laughs\] I have a pretty strong background with Docker and Kubernetes. Actually, my very first Go -- before I started learning Go it was \[unintelligible 00:36:20.24\] I pulled that repository and then got it to run with a new Kubernetes setup locally, and had I had a lot of Go troubleshooting for paths, and stuff... But that was the very first one. I liked it, but it was kind of like "Okay, I'm distracting myself and I'm pulling myself away from the learning that's uncomfortable, that I need to do, to focus on stuff I'm kind of familiar with already..."

**Jon Calhoun:** Okay. So I guess I'm the lone person here who avoided Docker the whole time, just because it's not something I had a lot of experience with, and I was like "I'm just gonna stick with installing it on my machine..." Because it was something I got comfortable doing.

**DaShaun Carter:** Yeah. If you didn't have the experience -- one thing at a time; that's cool. But we talked about comfort, and the value -- it was a picture that made sense, and I'd heard it before, framed different ways... Like, "When you push yourself out of your comfort zone, that's when you're growing", but it was drawn as like a circle, with a circle in the middle. In the center, that's your comfort zone. The closer you get out to that edge, that's where you learn. And the whole goal is to try to be in that uncomfortable outside. Like, no toes in the water. Be in that deep end, outside of your comfort zone. That's where you're gonna learn the most... And I think it ties back to Jacquie's path. She just jumped in, in the pairing. I think that that's gonna make it sticky.

**Jon Calhoun:** Definitely. If anybody has an opportunity to get a mentor, pair, or even if you just get the opportunity to jump in and watch somebody else livestream and ask questions, I also think that's another valuable approach, and it can be less intimidating than driving yourself with other people watching.

**Jacquie Grindrod:** Definitely. I'm very lucky to have had a mentor since I think my first month in the industry... So he's been my mentor for five years now, and it's been really nice; he's continued to grow with me, and that's been just such an influence on being able to learn faster... Because I spent the first two years of my career just looking at everything I could, to one day meet with him and be like "I know something you don't." It took two years, but it happened. \[laughs\]

**DaShaun Carter:** Yeah. Another training metaphor/pairing metaphor, kind of thing - in life there's always somebody out in front, like your mentor, your buddy Jon. And you're like "I wanna get to where he's at. I like the stuff he's doing." Jon's still moving forward. Jon's doing stuff -- maybe he changed the direction, but he's out front.

But there's always somebody behind you, too. And this is another -- you know, you're in the gym, doing reps, and you see the young son, the kid across the hall... He's looking at you, you're in front of him, and they're watching for you to do the example. So that's the high five to the doing it live, putting yourself out there and realizing "Hey, maybe there's somebody that hasn't done any programming whatsoever, and they wanna get to where you are."

**Jacquie Grindrod:** I'll try not to tangent too much, but yeah, it's so important, I think, to have examples of people that aren't doing it perfectly, and they're learning, because -- like, impostor syndrome is really real in our industry. There's a lot of like you look at it, you don't get it, and you're just like "Okay, maybe tech is just not for me." And I firmly believe that tech is for everybody. You just need the right problems and the right kind of approach.

The other thing that would be really good for people learning to contribute is if you go through the docs and it doesn't make sense to you, but you eventually figure it out - go back and contribute.

**DaShaun Carter:** Yes!

**Jacquie Grindrod:** It's such a great way to learn. You get experience with the community, and you're helping somebody else not have the same problems in the future.

**DaShaun Carter:** That was the other note that I wanted to circle back, because we talked about -- you know, contributing to docs is valuable. "Hey, you know what - I'm new here. This didn't make sense to me." That is valuable. Somebody's going to appreciate that. And it might change. Somebody says "You know what - we explained it in two different ways on this one. Maybe that would help over here." Yeah, the contributing to docs is huge... And I also thing that going and answering Stack Overflow questions is super-valuable for the community.

**Jacquie Grindrod:** \[00:40:17.01\] One day, when I'm bold... \[laughs\]

**Jon Calhoun:** My biggest challenge with Stack Overflow questions has always been that if you're a beginner, it sometimes can be frustrating that all the beginner questions either get flagged as a duplicate, or answered really quickly, and you're like "When do I get to jump in?" It would be nice to have something like a "First-timers only" type tag for Stack Overflow, too.

**DaShaun Carter:** Mm-hm. My answer on that was it can be intimidating. There's people that have like 100,000 points, or whatever the measure is... And yeah, it can be intimidating. But I think that that organization, the way they do things, I think it's kind of like a game... Like, "Hey, you answered your first question." But just reading the questions - even if it's already been answered; read the questions, like "Is that something I could figure out?" Like "What would I do if I wanted to figure that out? Maybe I'm not ready to answer it. Maybe I'll go over here and I'll try... Let me take it for a run." I could imagine that's what I was doing. I was like "I don't understand. I think that I understand Go. Let me see if any of these questions make sense to me. Do I even understand the question? If I don't, maybe I should get a couple more reps in."

**Break:** \[00:41:33.01\]

**Jon Calhoun:** Alright, so taking a step in a slightly different direction... Now that you two have jumped into Go and you've tried to learn it for at least some short period of time, were there any mistakes or pitfalls that you think that people should try to avoid, or things that you wish you would have done differently?

**DaShaun Carter:** I wish I would have started with a pair. I wish I had a buddy to do it with me.

**Jacquie Grindrod:** I'm looking at my repository to try and jog my memory here, but... I think my main one is pretty general - I tend to be too perfectionist or anxious about submitting things, and that's what gets me out of actually doing the work and submitting it... So I think that's probably my biggest one - to try and just be more gentle with myself and to be okay pushing out work in progress code, so that it can get reviews and I can learn faster. It's still hard. I know it's not Go-specific, but that's the main one jumping out at me.

**Jon Calhoun:** No, that makes sense though. I think you've both mentioned that seeing people who are human, who make mistakes, who -- you just don't write the perfect version of code the first time is very valuable... And I think having that history is often -- you view it as "Oh, people are gonna see these mistakes and think that I didn't know what I was doing, but on the other hand, somebody who's coming along later might learn more from it because they're sort of seeing that thought process, which is equally valuable to actually seeing the final solution.

**DaShaun Carter:** A hundred percent. That's exactly why I wanted that repository. I wanna go see what are the baby steps that you took. Yeah, comments are important, but having somebody -- so now I've got somebody that I can reach out to. You know, when I've got questions, I'm gonna reach out to Jacquie, or I'm gonna reach out to Jon. Yeah, it's a great place to be in.

**Jon Calhoun:** So DaShaun, you were focusing on getting something up in production. Was there anything specific there? Specific about Go, that either made that easier or harder, that you've found?

**DaShaun Carter:** \[00:44:10.19\] I still kind of hesitated... And this is gonna sound weird. I kind of had this image of Go -- I didn't know the ecosystem at all. I didn't know how it was delivered, I didn't know anything. And I had this kind of like -- it was magic, so I didn't really know what I was getting into... And yeah, kind of understanding -- the cool thing was I didn't have to do a bunch of crazy pipelines in order to get it. I was using Buildpacks, so that made it a little bit easier... But yeah, I don't think there's anything that really threw me off or put a blocker around anything. It felt comfortable, I felt easy, to be honest. It was like an old friend, it was like "Yeah, let's go for a bike ride", and we're doing stuff.

**Jon Calhoun:** Okay. So one final question, I guess, related to this - you both said you had history with other languages. So when you came to Go, how did that language feel to you? Did it feel easy to read and understand comparatively, or some things throwing you off? I say this because everybody has a different history as to where they come from, and I think you try to relate things to what you previous knew... But I didn't know -- Jacquie, you kind of said that it sounded like you had some languages you used at school, but you never had ten years of working on the job, using Java, building big things, so you didn't have a lot of things stuck in your head that were really hard to get out of that mindset. So was Go easy to switch into because of that? And DaShaun, when you were looking at this stuff, was it easy to pick up in that sense, or how was the language?

**Jacquie Grindrod:** I guess that very first time I was coming out of a background with object-oriented programming, and not a lot of actual career programming... So there was a lot of theory and kind of doing stuff. And you know, you're doing the functions, and this textbook is old, and it's like a 10-year deprecated function, and that's kind of what my school experience was like.

So coming into Go the first time, one of my co-workers was trying to help teach me it, and they kept talking about like "It's a functional language, it's a functional language", but I didn't understand what the difference was, so it felt like I spent most of that time just trying to wrap my head around it, but not really actually implementing it or practicing or learning it very well... So I think that's why I quit the first time. It just was like "I don't know how to wrap my head around this, I don't know why this isn't fitting."

The second time it felt a lot easier, compared to... My more recent experience would have been -- I've done Python on and off throughout my career, and then recently I also learned GDScript to try and hack together a video game... And I feel like both of those had a lot of environment setup that had to be done. It was a lot more bespoke; you're putting these pieces together to make sure it will run... And a lot of troubleshooting, like "Oh, this didn't run. What's wrong with this?" Whereas I felt like with Go I basically installed it and it just kind of ran. I think I had a path issue once, but for the most part that wasn't a thing I was troubleshooting, and that felt really nice. I just got to go forward and focus on building things and learning.

**Jon Calhoun:** So the second time did you spend a lot of time thinking about like "Is this an object-oriented language, or is this functional?" or did you just move past that in code.

**Jacquie Grindrod:** This time I was like, we're not even gonna look at the word 'function', unless it's func. We're just gonna go in and follow the steps. No overthinking, no over-architecting, no hitting my head against the wall because "Oh, what if this is not what I think it is?" Just do the thing.

**DaShaun Carter:** Yeah, just do the thing.

**Jacquie Grindrod:** Yeah.

**DaShaun Carter:** Like, "Hey, I'm your trainer. All we're gonna do is air squats. Just do the thing." A good air squat from a bad air squat - not that big of a difference, but there's a difference. We've gotta do it. Yeah, just do the thing. That's it.

I was coming in, figuring out syntax... That didn't seem like that was gonna be a real issue. Comfort - was it easy to read? It was. It felt easy. I wasn't trying to go any further that Hello World in production. Have some confidence that I could keep it up, and have some confidence that I knew how to measure, knew how to ask "Hey, is it running?" I wanted to be able to answer those questions.

\[00:48:08.00\] I think that next step is getting into "What does the language do well?" I think every language has its strengths and weaknesses. Do I need to get there? So if I'm onboarding and I'm trying to get a part of this language and be a part of the community, do I need to know its strengths and weaknesses, or do I just need to get more reps? And I think it's the latter. I think I just need to go in. If I enjoy the community, I think that makes a big difference. If I've got support and leadership, I think that makes a big difference. Go in and get some reps.

**Jon Calhoun:** I think community is something -- it comes up a lot on this podcast, at least, because between the Gophers Slack, and just generally the code of conduct that's enforced everywhere, and the people that at least I interact with in the Go ecosystem, are all very welcoming. They try to be very tolerant of all different views and anything like that, and they don't put up with any abuse or any other stuff like that... Which is really helpful, compared to other languages where that's not always the case. It doesn't feel welcoming everywhere.

**DaShaun Carter:** I thought that the Go community was magic and that they had figured out how to block all the bad people from their Slack channel, from the repos... But I went over to my mother-in-law's and I was still able to get in, so that wasn't it... I don't know how or what -- the community is amazing, and I feel like I got pulled in by the community. \[unintelligible 00:49:26.06\] So yeah, that was it. There was no career goal, there was no anything else. I was an academic, but this was the next one I was gonna do.

**Jacquie Grindrod:** That's what happened to me last year in the summer, too. I was like "I'm not really planning on writing any Go in the near future", and I'd made some friends in the local Toronto community that were like "Well, why don't you just come to the Go meetup anyway?" and I was like "Okay... Sure. I'll try", and everyone was just so friendly and welcoming. It didn't even matter -- I was like, "I haven't installed Go, or anything." They're like "Yeah, we still want your questions. Ask. Ask as a beginner." And it was actually one of those Toronto community members that referred me to come to this podcast. I was like "I haven't done that much in Go. Are you sure?" and she was just like "Yes...! Go do this, go talk", and I'm really happy, because all around the community it's just been such a nice, supportive experience.

**Jon Calhoun:** I think it's important to focus on that too, because if you just focus on the people with 20 years of experience programming, who are coming to Go and can pick this up quickly, you lose out on an entire generation of new views. It might seem easier upfront, in the sense that there's less support, and you don't have to tolerate whatever you aren't comfortable with or whatever you don't know, but I think in the long-term you're shooting yourself in the foot. It's not a good long-term plan.

Okay, so we always do a segment called the Unpopular Opinion...

**Jingle:** \[00:50:54.03\] to \[00:51:09.13\]

**Jon Calhoun:** So if either of you have one - you don't have to share one, but it's completely up to you. We ask for an unpopular opinion; it can be related to tech, or not related to tech. So do either of you have something you'd like to share?

**DaShaun Carter:** I have one. I think that pair programming is an unpopular opinion. I did it earlier in my career; I took a lot of time -- a lot of companies are afraid to adopt it. I work for a company that I think does it really well, but I still think it's an unpopular opinion that pair programming, mob programming - I think that's the way things are gonna be done if you wanna be successful in the future.

**Jacquie Grindrod:** I think the closest I have is -- hopefully it's not controversial here, because that would make me sad, but that documentation contribution is contribution that is as important and sometimes more important than just the actual code... And I see a lot of that, where people always kind of drop the docs. That's the closest thing I have right now, but... You know, it's important; it builds up that "How do we bring people into our circle that's building this tech, and expand?" and then be able to build better things together. Hopefully not too much of a hot take here, but...

**DaShaun Carter:** I think it is. I think it's a hot take. Yeah, let's fight the good fight. Keep preaching it.

**Jon Calhoun:** \[00:52:08.12\] It's one of those things that -- I agree with Jacquie, I really hope it's not a hot take... Because anybody who's run an open source project should realize that the docs are so valuable. Not only do they make sure you're understanding it and bring people into it, but they also free up other people to write more code, and build more features, because they're not supporting people who have questions, who don't understand things... It just compounds so quickly, and is such a big deal.

**DaShaun Carter:** Maybe the hot take is docs in the enterprise. Docs for the code that your enterprise is making money on. Maybe that's the hot take. The value in those teams. I've seen those teams; you know who you are. They do so much, and they get little recognition when they put on a lot of valuable work.

**Jon Calhoun:** And DaShaun, I completely agree with you that pair programming is an undervalued way of coding. Mat's not here, unfortunately, but he pair programs exclusively when he's building his new startup called Pace... And I've done some pair programming with a friend of mine, and I've talked to Mat about it a good bit, and it's one of those things that I think from a higher-up manager's perspective, they view this as "We've got two developers and they're only producing one set of output." And I think they miss the fact that there's a lot of small tasks -- not even small, but there's a lot of follow-up tasks to coding that can be sort of skipped or expedited. One great one is code review. If somebody was there when you coded the whole thing, code review is not really this long process where they're trying to figure it out. It's "Hey, I was there the whole time. We've discussed all of this already. It's already in a good state."

But then even beyond that, you just get multiple perspectives from everything. If somebody falls sick or they need to go to another company, or whatever happens, you have somebody else who understands the code. There's just so much there that I think people miss, and it's so valuable to have any -- especially junior developers too is another spot where I see it as getting them up to speed, so they can start contributing. Pair programming does wonders, compared to any other approach.

**DaShaun Carter:** Yes. That's it. The example that I always give is the Alt+Tab, or whatever -- there's keystrokes that you did, like Ctrl+E, Ctrl+E. You saw somebody else do that. You didn't read the docs to go and figure out "I wanna switch between these windows. Where would I find that?" I don't even know how you'd find it. What would you look for? But it's those things that I've got hundreds of them along the way, that I've picked up when I was -- not necessarily pair programming, but I was sitting next to somebody and they were doing it. I was like "Well, what did you just do there?" And that's where you get things. But now formalize it, and none of those get missed. The whole team gets it. So yeah.

**Jacquie Grindrod:** I feel like I could do an entire podcast episode on just pair programming, and maybe I will in the future... But I did have a team --

**DaShaun Carter:** I'm there.

**Jacquie Grindrod:** Yes! Okay, I'm writing that down, too. But I did have a team where -- we were a DevOps team that was supporting about seven different products. Some were going live, some were old... There was a lot going on. And we made this push that all tasks should be pair-programmed. And we did get a lot of pushback, that was like "Well, there's only four of you, and we have all this stuff going on. It needs to go to prod. We don't have time for you to do that, we don't have the luxury of pair programming." And what ended up happening was that we pushed back, we did the pair programming, and... You know there's that first bump, where you're like "What's the best practice for pair programming?" We literally googled that, and found the first thing and ran with that, where you'd do like 15 minutes driving, and then you'd swap , and the person that wasn't driving would be taking the documentation notes as you go. So now you've already got doc notes, and it's working...

At the end of the day it saved us so much time... As you mentioned, you get that context that you might not have gotten otherwise, and lots of learning experiences.

And then we would have another person do the code review that wasn't somebody that worked on it, just to get that third set of eyes on it. And it just felt great.

**Jon Calhoun:** \[00:55:58.23\] I enjoy talking to different people about their processes with pair programming, because it's interesting how many different approaches there are, but how they all still seem to work, depending on the people... Because I think that Mat and Dave - I've gotten the impression that somebody will drive for hours sometimes, and they're just like "Whatever." It just whoever decides to drive that day. But they've also been pair programming like five years, so it's a probably slightly different setup. But even then, you're talking about the tools you use; I think anybody who wants to do it, literally just jump into Zoom, or any video chat, and just start going. You'll figure out some stuff along the way, like "Maybe we need to do something different." But I think it's worth diving into and trying.

**Jacquie Grindrod:** My pro tip there is that things like Atom and VS Code have a remote pairing option, so you can create a session and actually go through the code together, so that you're not scrolling, and it's like "No, wait! Scroll back up to that line. Oh, wait, no. Down."

**DaShaun Carter:** Yup. That's something we didn't talk on here, like \[unintelligible 00:56:50.27\] Don't worry about having the right IDE, or anything like that. \[unintelligible 00:56:56.02\] Just get into any editor and go. Don't worry about the toolset so much... But yeah, the pairing - there are ways that you can level up that pairing, especially doing it remote.

**Jon Calhoun:** Yeah, my argument for that for people generally tends to be that the first editor I ever used was Notepad, which if anybody is using Notepad on Windows, it's terrible... But you build several things with that. And then even beyond that, I did programming competitions in college, and my team made it to world finals and I used this -- I think it was called KEdit. It's in Linux, it's just like a default editor there... And I wrote Java code in KEdit, without any autocomplete, anything else. And our team still managed to make it all the way to world finals doing that. So obviously, if you can manage that -- it's not that it's not eventually worth looking at them, but it's not a big enough barrier to keep you from learning a language.

**DaShaun Carter:** Not for the one-on-one, yeah. It's been a good exercise. This has been fun.

**Jon Calhoun:** Yeah, definitely. Jacquie and DaShaun - thank you both for joining, it's been wonderful having you both. Is there anything you'd like to say before we close up?

**Jacquie Grindrod:** Well, I wasn't prepared for this, and I should have been...

**Jon Calhoun:** You can just say that, that's all you have to do.

**Jacquie Grindrod:** Yeah, I mean, if anyone wants to talk remote pair programming, I've got lots of things to say; I didn't say them today, but I'm more than happy to. If you wanna get started in any of the communities, again, I'm more than happy to help you get through that and talk through it. Feel free to DM me on Twitter, @devopsjacquie. My DMs are always open.

And then outside of that, thank you so much for having me here. This has been a really great chat. I was kind of nervous, but this went really well, and I really enjoyed it. I'm actually walking away learning some things, so that's the best kind of experience.

**DaShaun Carter:** Me too. You know, get your feet wet. It's a great community to get into. I felt like it was easy. I think that pair-pair-pair; if you have the opportunity to pair, do that. But if not, every rep counts.

**Jon Calhoun:** Well, thank you both for being here, and everybody else, thank you for listening to Go Time.

**DaShaun Carter:** Thanks for having us.

**Jacquie Grindrod:** Thank you.
