**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode 248, and today on the show we're talking to Zeno Rocha, principal developer advocate at Liferay; we're talking about DevRel, his open source work, his passion for teaching and giving talks at conferences... He also shares some really interesting stories about his first contributions to open source, how that played out and the lessons he learned along the way.

Our sponsors for the show today are Sentry, Toptal, Datadog and GoCD.

**Break:** \[00:01:09.12\]

**Adam Stacoviak:** Alright, we're back. Today we've got Zeno Rocha joining us today, principal developer advocate at Liferay. Zeno, I learned about you because I was trying to reach out to folks in that space - I was working with Sandra Persing at Mozilla; she's got going on DevRel Summit, and Justin Dorfman said "You need to talk to Zeno"... So here you are!

**Zeno Rocha:** Yeah, welcome, Adam... Welcome, everybody!

**Adam Stacoviak:** So first off, the coolest name ever - Zeno Rocha. You must get applause just when you say your name in front of the stage, or something like that.

**Zeno Rocha:** It's crazy... When I'm on the phone, I say my name and nobody understands it; it's not that good.

**Adam Stacoviak:** I'm an American, so I've got just the typical way I say it... What's the enunciated way to say it in your native tongue?

**Zeno Rocha:** Yeah, so I'm from Brazil, and usually people just call me Zeno (Zen-Oh)... But Zeno (Zeen-Oh) is fine, whatever you wanna call me, if it starts with Z, I will answer.

**Adam Stacoviak:** Okay, what about Rocha then?

**Zeno Rocha:** Yeah, Rocha is fine.

**Adam Stacoviak:** Okay, gotcha. So there's no rolling of the r, no trill there?

**Zeno Rocha:** No, no...

**Adam Stacoviak:** Okay, I thought that there might have been; now I'm slightly disappointed. \[laughter\] You've got a fun history in open source. Developer advocates, what a role that's -- I wouldn't say underappreciated, but under-understood, right? There's so much work inside of a company, because as companies like Liferay and others continue to grow and start to adopt more and more technology, so to speak, they become not simply just businesses, now they actually have software development departments that create proprietary software, and then also open sourcing that stuff... You've got to have somebody inside the company that knows both sides of the spectrum. Is that roughly a crack at what a developer advocate is to a company like Liferay?

**Zeno Rocha:** \[00:03:59.05\] Yeah, I think this is a new position on the market. This is something that when I started didn't exist, or if it existed, I didn't know about it, and it was like a natural progression, at least for me. Nowadays there's basically two kinds of companies that we have - we have companies that their audience, their target market are developers, so in that case the way that marketing is done is completely different and they need to adapt to that certain world, or we have companies that their end product is not only for developers. Let's say Facebook - it's not a company that their target audience are developers, but they do reach out to developers and they have this open source department because they know how important it is to reach out to developers when they build their SDKs and those kinds of things. So I think that's how it all started. This is a new position out there, and it's starting to grow more and more.

**Adam Stacoviak:** How new is this position? I think the first time I heard the title was maybe two(ish) years back. There's always been some sort of advocacy, but I think the first time I've actually heard the actual title was two, maybe three years back. Is that about when you think the word may have surfaced itself?

**Zeno Rocha:** Yeah... I'm not sure a hundred percent about how it started, but I think the first guy that had this title was a guy called Guy Kawasaki.

**Adam Stacoviak:** Right, at Apple.

**Zeno Rocha:** Yes, exactly. I think he was the one who started it, and I think it was like developer evangelist, or chief developer evangelist, chief evangelist - something like that. For a lot of time there were job titles that were related to that, like community manager, those kinds of things...

**Adam Stacoviak:** They're all in the same ballpark, basically.

**Zeno Rocha:** Exactly. Developer evangelist, developer advocate, community manager - they're all kind of related, but they have their differences. Some people don't like the name community manager, because a community - and we can talk about any kind of community - shouldn't be managed by someone... So I think this is a title that people are trained to not use that much anymore; they're going more towards "advocate", because it's like a group of people, facilitators to the community; it's not like the manage the community.

**Adam Stacoviak:** You know, I didn't get that memo; I didn't know that community manager wasn't cool anymore, I guess... That it was frowned upon, so to speak.

**Zeno Rocha:** \[laughs\] Yeah... This is something like a trend in the past years, that some people are starting to discuss more... Because now we're having conferences about developer relations; there's gonna be one in San Francisco, there's the DevRel summits that you just mentioned in Seattle, and you have conferences in Tokyo about that... I think this is like a field that is growing more and more, and it's interesting to see.

**Adam Stacoviak:** Have you been to one of these conferences yet?

**Zeno Rocha:** No, I have no idea how they are, but I'm curious.

**Adam Stacoviak:** Yeah, I'm kind of curious too, because as I mentioned how I came to know you better was through a friend of the show, Justin Dorfman (thanks, Justin!). I was talking to him, and he has played that kind of role at MaxCDN, which is now StackPath; now he is at Sticker Mule, big fan of the Changelog and the community, also running Sustain, an upcoming conference; if you haven't checked that out, go to SustainOSS.org. We're a part of that, as well. So if you're in that space at all, about sustaining open source or advocating -- so long story short, that's how I met you, through Justin... And sort of appearing into this world of DevRel.

\[00:08:15.28\] We like to travel to conferences with our podcast called Spotlight, so if you're listening to this and you haven't heard of Spotlight yet, go to Changelog.com/spotlight, lots of good episodes there that Jerod and I have done when traveling to OSCON, All Things Open, Node Interactive, and potentially some other conferences this year. But we like to go there and kind of pull back that hallway track that you don't often get a chance to record and take away, and share that with the rest of the world. So we sort of have the hallway track conversations you would want to have or have heard, if you were a fly on the wall, so to speak.

We're really interested in doing DevRel Summit with Sandra, and making that happen. So when I started to reach into this world a bit more and figure out how we can make it happen, one of the people that came up was talking to you.

But let me give you a full-on, true introduction, though. I don't wanna get too far into the show before we have a chance to do that. So for those who don't know -- you told us how to say your name and all that fun stuff, because that's a fun name, but give us a snapshot of who you are; give us a bit of your history... Either in this position you're in now, in this role you're in now, or in open source at large. You know your story best, help me share who you are.

**Zeno Rocha:** Yeah, sure. I'm a frontend developer by heart; that's what I love doing, that's what I like doing. I've started with Flash, as lots of people have. I remember I was working at this design agency, and it was great. At that time I loved to use Flash, it was great. When compared to other languages, I didn't have the same satisfaction as I had with Flash. I would spend hours... With some languages that I was trying in the beginning -- I was still in university and I would have to work for hours, and then compile, and then when I see something on my screen, it's like that black box with some message... And with Flash, I would work for 15 minutes, compile, and then I would see everything spinning around and doing all those kinds of things. For me, as a visual human being, that was very appealing.

Then at that time HTML5 just came out; there were a lot of people talking about it, but there was one guy in particular, Paul Irish... I was very inspired by that guy. I remember just watching what he was doing, and I was like "Oh my gosh, one day I wanna be like that guy, in Brazil." Basically, I was very interested in HTML5 Boilerplate and some other projects. There was like an eBook (an online book) called Dive Into HTML5, and I started translating that book... So it was a very interesting moment.

I started to do more experiments with HTML5. My first one - and I'm gonna send you this... You can check it out, and then you guys can see on the comments. So I made this as my first HTML5 experiment. Let me just send you...

The idea was just playing around with Canvas. There were lots of exciting technologies in HTML5, and this was one of them.

**Adam Stacoviak:** Wow...

3: Yeah, playing with Canvas and just -- there was local storage, I was playing with that... I was playing with everything that I could see about HTML5, but this one was very appealing to me, and I was just interested about it.

\[00:12:13.02\] So I was getting involved, looked at all this, and my father, he always said to me, "If you really wanna learn something, you need to teach it", right? This is a very common phrase - if you really wanna learn, teach it. I would hear dad, and I would go to these conferences and I was like, "Okay, so I'm interested in learning HTML5" -- at that time I didn't know HTML5 at all, but I was interested about it. I saw this conference, and they had like an open call for papers, so I was like, "Okay, I'm gonna submit a talk about HTML5." And they had this huge field so I could fill my work experience, and I didn't have any work experience; I was at the university, I was working with Flash, but I wanted to learn HTML5, so I submitted a talk about HTML5.

I didn't expect them to accept the talk, but they did. It was insane... I was super worried. I was like, "Oh my gosh, what have I done?" I thought about giving up, I was like, "Why have I done this? There's no reason, there's no point in doing this." But then I was like, "Okay, I'm gonna do this talk."

It was super nice because I got to learn HTML5 and just understand a little bit more. I didn't know everything about it, but I wanted to learn more. That really changed me. My first talk completely changed the way I looked to the world, the way I would view my work, my job, everything that I was doing.

From one point I was working as a freelancer, getting as much jobs as I could, trying to make as much money as I could, and when I gave that talk, everything transformed. I was getting into open source at the same time, so everything really transformed in my life. I was like, "Okay, now I see a meaning. It's not only about me... It's not only about me making money doing that kind of work"... Because at least for me, opening the code editor - I don't know if you felt that way before if you did freelance before - I would feel the pain, like "Oh my gosh, I need to work on this project. I don't wanna work anymore... I need to do X, Y and Z in this project." So that's how it all started. I started to give talks, and I started to get into open source.

**Adam Stacoviak:** How far back was this, this first talk you gave? Or at least this moment in time.

**Zeno Rocha:** Yeah, this was in 2011. I was still in the university and I was just starting to work my first job. That's when I submitted this talked, they accepted it and I gave it. Then it was like one after the other.

**Adam Stacoviak:** Where was the talk at?

**Zeno Rocha:** The talk was in Brazil, in a city near Rio. It was like an open source kind of conference. There were a lot of talks about Linux, Ubuntu, PHP, and other open source technologies. Frontend was really -- it's not like it is today, that frontend is super big and many people are interested in that. Frontend was just starting; there was not frontend tracks in a big conference, you know? But yeah, they accepted and I gave the talk.

**Adam Stacoviak:** \[00:16:07.14\] And to bring some context to where we're trying to get to - your first step into open source was sort of rocky. We had a call about a month or so ago, you and I, to kind of kick some conversations off basically about having you on the show, and you pointed me to this project you started called jQuery Boilerplate; it was to issue number 10 - we'll link it up in the show notes; if you're listening to this, check the show notes.

The title of this issue was sort of off-putting. I say "sort of" sort of tongue-in-cheek, because it was totally not cool. \[laughter\] It was just not the kind of issue you wanna see come through your e-mail inbox. The title of this issue is "Everything is wrong, so delete all of it. This way you can start over and do it right."

**Zeno Rocha:** Yeah...

**Adam Stacoviak:** So frame that for us - was this your very first project? What was the scenario here and how did this issue in particular impact you?

**Zeno Rocha:** Yeah, so I was really influenced by the success of HTML5 Boilerplate, and I was loving jQuery... At that time I hadn't built a single jQuery plugin, but I was interested in it. One day at work I was like, "Hm, maybe this piece of code that I'm writing - maybe I could make this as an open source project, as a jQuery plugin." So I was looking around, seeing all the options that were out there. Lots of different patterns for building jQuery plugins, and there was nothing like "Okay, this is the way you should go - one single pattern, at least for someone that is just starting. This is how you should do it."

So I was like, "Yeah, I should build one." But the problem is I haven't built anything before with that, but I was going to give it a try. So I built this repository - my first repository on GitHub, I guess, and then I built this pretty website and I launched it.

I launched that, and in the first day there were like 10 accesses. Nobody really saw it, just my friends. On the second day I sent a tweet to Smashing Magazine (that was in 2011) and then they shared the tweet. I was super surprised; I thought "Nobody is gonna see this, nobody is gonna like this, but I'm gonna give it a try." I sent a tweet, and they shared the project.

On the second day, there were like 2,000 people visiting. Suddenly, this project was like "Boom!" Everybody was seeing it, and then of course I was not an expert, I'm still not an expert, but I got this pull request - "Everything's wrong, so delete all of it. This way you can start over and do it right." So it was very harsh, very difficult, and I was like "Yeah, that's the end why again". Same question, I ask myself "Why have I done this? There was no reason for me to do this, I should have just stayed home doing other things."

**Adam Stacoviak:** Wow... You're an impostor, man! You don't belong here. \[laughter\] Yeah, digging into this a little further, too... So when you fork a repository, you can do the work in your own branch; so the branch that this was done in, the branch name was called "Reset This Crap." \[laughter\] I don't know if you've noticed that; this is your story, not mine, but it goes even further... The branch they put this reset in was "reset-this-crap".

**Zeno Rocha:** \[00:20:00.27\] \[laughs\] It's crazy, yeah. I haven't seen that. But the interesting part of this pull request is that I accepted. It shows as closed, but I merged the commit, and I was willing to do it all over again. I remember reaching out to Addy Osmani he was working at AOL in the U.K. and I was like, "Hey, I know you are very good at the things you do" - he was doing some really good things with Javascript... And I just reached out to him; I sent an e-mail to him and asked for help, and he helped me. We kind of redid that, and it's still a very popular project, even though not as many people are using jQuery as before... But since 2011 people have been using this, and it kind of worked.

**Adam Stacoviak:** That's crazy... jQueryBoilerplate.com is the website Zeno was talking about. You've got Boilerplate there, you've got Patterns, you've got Generator, you've got Guides... And as you said, even though jQuery is sort of frowned upon now and they prefer to do it different ways, or it's just not cool anymore and the web has moved on, most people can actually pinpoint their start into web or Javascript because of jQuery, and anybody who would consider them primarily an HTML/CSS developer got into Javascript because of the ease and the connecting points of mapping DOM elements, the HTML classes to CSS classes, then to jQuery, Javascript classes. So it's got its point there, but...

So you reached out to Addy Osmani pre-Google... This was a while back. Most people know him from working at Google, and all the work he's done there, and other work you've done with him since then, but... What was that like, reaching out to somebody you didn't even know? Did you even know him?

**Zeno Rocha:** I didn't know him. My thoughts and my mindset is always "I'm gonna try to do this. If it works, great. If it doesn't, then that's fine." So that's why I reached out to him. When I see those people... They are all very busy people. Those guys that you see on Twitter all the time, doing some crazy project, they are always very busy and you always imagine that they will not have time for you; in most of the cases that's true... Life is all about time, so when you give your time to someone else - like, why am I here today, talking to you? I could be doing something else. I could be watching Netflix, I could be doing anything different from that...

**Adam Stacoviak:** Work...?

**Zeno Rocha:** Yeah, work, exactly...

**Adam Stacoviak:** More open source...

**Zeno Rocha:** \[laughs\] Yeah, another project, why not? But I think those people, they are also willing to help, so I think it was a good move, and I'm glad he replied. I also think that if you are listening and if you have someone that you really admire and you follow his or her work, why not reach out? Those people, they do a lot of work on their free time; they spend weekends doing those things, so sometimes just one phrase could change their day.

**Adam Stacoviak:** \[00:23:39.23\] Oh, man... We get e-mails every once in a while. They don't happen too often, but often enough that when we get them, they're nice boosts of confidence back into like "Okay, what we're doing is actually impacting people. Okay, what we're doing is really being appreciated by the people listening." Because other than people going to changelog.com/community and signing up and hopping in Slack and hanging out with us behind the scenes - you're part of that, too... Other than people doing that, we really haven't had this personal touch to the audiences listening to this show since 2009, which is when this show started.

We've been on air for the better part of seven(ish) years, you know? It's even more than that, isn't it? My math isn't correct. It's like eight(ish)...

**Zeno Rocha:** That's awesome, that's awesome...

**Adam Stacoviak:** It's been a while... So yeah, getting that kind of feedback is awesome, but something I don't wanna gloss over is you said that you accepted the pull request.

**Zeno Rocha:** Yeah.

**Adam Stacoviak:** Now, I don't wanna camp out there too much if it's not worth it, but I feel like if you accept the pull request that deletes all of your code, that's sort of like bold to do as the person submitting the PR, but then humble on the other side to actually take it and say "Okay, you're right" or whatever, and actually accept the pull request that deletes all of your code and start again. That's crazy.

**Zeno Rocha:** Yeah, I think you need to think about all the other people out there... This guy that opened the pull request, he was much more experienced than me, and there was no reason in being just like, "Okay, I'm not gonna do anything about it", or I could delete the repo... Ultimately, I wanted to help, and how can I better help other people? That's why I did that.

**Adam Stacoviak:** That was the whole point of the repo in the first place, this Boilerplate that would hopefully give someone else some bootstraps to stand up upon when doing anything new with jQuery.

**Zeno Rocha:** Yeah.

**Adam Stacoviak:** So have you ever had a run-in with the person who opened the pull request? I keep saying "the person" because I don't wanna say their name unless you want to, because I'm not gonna do that... We're gonna link to the issue, so you can do the research on your own; we're not trying to flame anybody, we're just sort of having a conversation around this moment in your time and how it's impacted your life and your story.

**Zeno Rocha:** Yeah, yeah... I didn't have the opportunity yet, but there's no...

**Adam Stacoviak:** There's no time limit.

**Zeno Rocha:** Yeah, that's fine.

**Adam Stacoviak:** The invitation, to some degree, is still open, basically.

**Zeno Rocha:** \[laughs\] Yeah.

**Adam Stacoviak:** Very cool. Well, you've done some other stuff. We're getting close to time for a break. One thing that we use, that's probably a very small project, but a cool project for you is clipboard.js. We use that on Changelog.com, so if you go to any episode and you click the Share button and you get that, there's an overlay that comes up... You get a chance to copy any of the URLs to link to it, so that's one thing. Then also the embedded code to embed our episodes into your blog, and our Medium posts, our websites, or whatever... We have that option; so we use clipboard.js for that.

We've got the Dracula Theme... We've talked about jQuery Boilerplate, one of your first, earlier projects, Browser Diet, and a ton of other stuff you've been involved in, web components, so I just wanna tee some of that stuff up before we go into this break, to sort of like let the audience marinate on some things we may talk about.

**Zeno Rocha:** Awesome.

**Adam Stacoviak:** So we'll take this break and when we come back we'll dive a little further into your story and some of that stuff. We'll be right back.

**Break:** \[00:27:07.06\]

**Adam Stacoviak:** Alright, we're back with Zeno Rocha, talking about this cool history you've got, man... I love it. And for some reason, people like to start things with you in issues; I don't know why that's a thing for you, but that's just how it works out. \[laughter\] Maybe that's how it is for most people and I'm just an idiot...

We mentioned before the break us using clipboard.js, and apparently this is a pretty popular repository. Approximately 16,000 stars - that's kind of popular, right? But back in October 2015, you got this issue which was like basically "How did the repo become so popular in a few days?" 5,000 stars in a few days... People were essentially attributing it to other things that were not what was true, like Hacker News, or somebody promoting it, or whatever. Basically, it seemed to be Hacker News. But then you kind of chimed in about five comments into this issue, of like trying to investigate why this project was so popular, or why it had gotten so many stars (5,000 in just a few days, as the issue had mentioned) and you sort of break it down... Experience, credibility, docs and demos, timing - you sort of put things in perspective for everybody, like all this work you put into it that was unseen.

As we've gone through open source the last couple of years, more and more things like this become contributions that are more welcomed - obviously, because that's what you need - but then also those who are giving those kinds of contributions, they're being thanked a lot differently... Not simply just code contributions, but community, docs, knowing your audience - these things you're talking through in this issue, but this is sort of an interesting place you find yourself in, which is having to defend yourself in issues...

**Zeno Rocha:** \[laughs\] Yeah, clipboard.js was a very interesting project for me... Before and for a long time I was building websites, or these projects that I was participating in, and for every site of a library or of a framework, you usually have code snippets, right? And those code snippets, if you wanna make it good, then you have some syntax highlights on the code snippet, you put a Copy To Clipboard button on that so it makes it easier for people to just use that code piece... But then at that time the only solution was ZeroClipboard. That was what GitHub was using, for example. It was like this Flash -- they had like a Flash file, and the only way of doing that on the web before was by using Flash.

**Adam Stacoviak:** I heard of this hack, it was pretty nasty.

**Zeno Rocha:** \[00:31:57.25\] Exactly.

**Adam Stacoviak:** And it required Flash... So as the modern web begins to move away from it, obviously you have a feature that may or may not work.

**Zeno Rocha:** Exactly, and I never liked the idea of using Flash on my sites, and I was always trying to avoid that. So for many, many years I had that feeling inside of me, like "Oh, this is horrible, I don't wanna use Flash on my sites", and when I was following what was going on on the Web platform, I noticed this new API called zac command. I was like "Hm, that's interesting", and then I noticed that you could do some copy and cutting, and I started to dig more. This API was not compatible in many browsers yet, but I was just going through that...

So basically I just launched the project, it got super popular, and then this guy asked this question on the GitHub issue, and everybody was replying "Oh, it's popular because of Hacker News. Hacker News, Hacker News..." and I was like, "Whoa, wait a second... Of course it's on the first page of Hacker News, but the only reason why it's there is because of X, Y, Z." So I was trying to explain what is the background and why those -- it's very easy for someone to see... And when they think about a certain person, "Oh, I know that person..." In your case, you know me because of clipboard.js; some other person may know me because of something else, or something else I'm gonna build in six months. So it's very easy to -- you just see that moment in time and you just make your point about someone based on that particular things.

I really disagree with that kind of thinking because in order to make something successful, it's a long way. So I was basically trying to explain, like this popular reason because one point is experience. Because I have been doing open source for a long time, I know what works, what doesn't work... I have been giving talks, I have been building projects.

In order to build something that is easy to understand -- and building that particular project was not difficult; you could build one that is much better than clipboard.js for sure, that's not a problem... But how you make that in such a way that it's easy for other people to consume - that's the most difficult part, and that's what people don't understand. So they go to GitHub, they create their thing, and they hope "Okay, now everybody's gonna love this", and it's not like this.

I remember spending one or two days or a weekend on the library itself, and then I'd spend like two weeks on the website; and not because the website is complex...

**Adam Stacoviak:** That's funny.

**Zeno Rocha:** Yeah...

**Adam Stacoviak:** I was expecting a much different ratio, honestly...

**Zeno Rocha:** \[laughs\] Yeah... And it's not like the website is complex; if you see the website, it's ridiculously easy; there's no secrets at all... One page there's nothing on the website. But the way the website was built, and every particular piece that I was worried about - that was one of the reasons why it was successful.

\[00:35:46.13\] And also, in order to make something that has a big impact, one thing that helped me was also this credibility that I have been building for many years. I have some following on Twitter, on GitHub... I always try to provide value for other people, always. There's not a single day that I don't try to help other people. When you do that for a long period, you start to grow that group of people that follow you and keep track of what you do; I think that was another step.

And taking care of your docs, how you communicate your demos - this is super important. It's very easy to just throw your code out there and expect people to just use it, but if you don't have docs, if you don't explain why you created the project in the first place... I remember spending a lot of time just on the first paragraph of the site. I was watching that TED talk about "start with Why", and I'm still really inspired by that and I try to do everything this way... And I was like, "Okay, I'm gonna start my project with the Why", and then "How can I communicate in a good way?"

And then also the way I timed the project was also very crucial, because I knew that only Chrome was supporting that particular feature. That was it, only Chrome. So I built it and then I waited. I was waiting until Firefox would release that feature as well, and I knew Firefox was going to release, because I was tracking comments on blog posts and I noticed some developers saying "Oh, this is on the other Firefox, it's in beta", and they talked about when they were going to release the stable version.

I was tracking that, so when they released Firefox, I think I waited a few days until people would upgrade, and then I released the project. That was another important factor.

Also, I think just knowing who you're building things for is an important aspect. The way I communicate on clipboard.js - I know that everybody hates Flash, I know that everybody hates big frameworks and things that are slow; I know that everybody loves a simple API, easy to use - you copy this, you know it works... So that was what I was trying to do, and that's what I try to do with everything that I do.

It's not just "Put something out there." You can do this, but then you're not truly worried about others, you're worried about you. It depends on what you're looking for on the project.

**Adam Stacoviak:** Yeah, I can see this now, and I can't say that I see what you've shared just now just by looking at it... But now that you've shared it, it's almost like knowing the secret and then watching the magician again - you can see how the trick was played out. I can see your Why statement here at the top of the page, and I think that's phenomenal, but you can tell how calculated - that's the thing that kept resonating with me as you were talking through this story. It seems very calculated, especially when you started to describe the patience that you had to not only create it, but then be ready when the world was ready to accept it... Not just one browser, but now you've got the next other major browser people use or developers use to test their websites against this stuff. That's pretty cool, man.

Is this intuition in you? Did you learn this? How do you teach somebody some of these meticulously calculated things that you've done here, with this project in particular?

**Zeno Rocha:** \[00:39:57.15\] Yeah, I think it comes down to experience. I have a guy on my team now, he's starting to learn how to code. He's learning all those things, and there's no way for him, even though three months after, now he knows how to code, he knows how to build things - there's no way for him to understand all this and do that in a little time and build something that has that impact. I think that there are all those things that you need to build on top of to get there, and it's just a matter of using lots of things, always keep looking to what other people are doing, what works/doesn't work for others, and just your experience as a user - that's super important.

I have been using tons of libraries for a long time. I know that you need to start with the install part, so they know how they can get and use that. I know that you need to show how you can instantiate that thing under code; I know that when you approach with an example - how you should approach, what is the best example that that audience is gonna get what you're trying to communicate visually?

I know that most of the developers - they use GitHub or they have used GitHub in the past, so when they copy a repo in order to clone it, they always use the GitHub interface to copy. That's a very strong example and everybody loves that, so I start with that example. Then you keep going. I know that showing the browser support is important. I know that if there is no browser support for a particular feature, you need to offer something, because that's the first thing they're gonna ask. That's because when I was giving talks about HTML5 in 2011, everybody would say "Oh, but HTML5 is only going to be ready in 2020", you know?

**Adam Stacoviak:** Right. "Why are you talking about this if it's not even supported?"

**Zeno Rocha:** Exactly, exactly... So I've listened to people asking me those questions for years, and now I learned how to answer those questions. I think it comes down to just hard work; there's no other answer.

**Adam Stacoviak:** So not only have you done something pretty cool and very calculated with this project, but then you've also got another project about losing weight, but not on your body...

**Zeno Rocha:** \[laughs\] Yeah...

**Adam Stacoviak:** ...in the browser, on your sites. I can see Dracula coming up in our listed topics to talk about dev space, and they're all well designed, they're well thought through; you can definitely tell they're purposeful. And to some out there who aim or aspire to be an open source developer, that's daunting because it's like "Well, I've gotta do all this work to release my open source... I just wanna share my code. I don't wanna go through all these things." Well, if you want a project to be successful or to reach the widest audience, or in your case as you said, help people, then you've gotta put in the work. And it seems like you've really nailed down how to put in the work, either by you doing the work yourself, or finding other people who care about something similar and getting other illustrators or designers to take on -- so you're not taking the full burden of building BrowserDiet.com, for example, How To Lose Weight In The Browser... So talk to me about this, what's the story here?

**Zeno Rocha:** \[00:43:51.21\] Yeah, so this one -- and I think for those projects, it's interesting... We talk about getting a project to be popular, right? And what is the reason behind it? It's not like, "Oh, I want to be popular on GitHub or Twitter. I wanna have more followers." You need to understand what is your Why; that's what motivated me to go one step further. For Browser Diet it was exactly like this.

When you start with web development, usually the first thing you wanna do is "Okay, I wanna get things done with that language. How can I just make something work?" So when you learn how to make something work, that's good, that's fine, and then you start progressing. The next step is usually you know how something works, "Now how can I make that thing better?" For me it was like this - I was learning more about web performance and how I could improve my websites, and I remember there were basically like two guides about that: one from Google, one from Yahoo!, and that's it. There were only those two guides, and there were those wide pages, very long pages about something... It was very dense, very hard to read; it was not easy to consume.

Maybe it was easy for someone else more experienced, but not for me. Coming from another country, it was not like in my age, or whatever were the reasons. I wanted something that was easy to digest.

So I was like, "Okay, so I'm just trying to create..." -- I would just call some friends that I know that care about performance, and I was like, "Okay, let's try to build this guide. Let's divide the work. You do the performance tips for HTML, you do the work for CSS, you do the work for Javascript... Let's try to break that down, but let's try to do this differently."

I invested a lot in "How can I make this fun? How can I make this attractive for just regular people, not super big experts." That's how we did it... We launched it, it was very fun.

The thing that I'm most proud of - a few days after, people were starting to send translations. I launched in Portuguese and in English, and then people saw that there was more than one language, and then they were like, "Oh, let's send a pull request." There were translations in Spanish, in Polish, in French, Chinese - all these languages, and it was super nice.

The thing that strikes me the most -- when I go to Google Analytics, I see how many people are going to the site; I go there, and then "Okay, let me check the demographics." I don't feel proud about just looking to the number of people are seeing, and I'm like "Oh, I'm so nice because I made this project and lots of people use it..." - it's not for my ego, it's more for when I go to Demographics and I see that "Oh, there's an access from Madagascar. How come my work..." -- and that's crazy, if you think about it... You close your eyes and you think about it, "How did my work reach that place?"

**Adam Stacoviak:** Right... Somebody in Madagascar right now is listening to this show.

**Zeno Rocha:** Exactly!

**Adam Stacoviak:** That's crazy!

**Zeno Rocha:** \[00:47:52.19\] Yeah, the only thing I know about Madagascar is the lion -- it's the Disney movie, right? It's the only thing I know. That's crazy, it's just insane. That's what motivates me. If you do that extra step, if you try to do something more polished and you reach those places, it's a crazy feeling. Just crazy.

**Adam Stacoviak:** So break down this particular page, BrowserDiet.com. It's got headings, "does performance really matter?", so it's essentially like a single-page -- not a single-page app, but there's a single-page guide into basically breaking down web performance and how to get the most out of your web page. As you said, at that time there wasn't a lot information out there, so this was a plan to get more of this information to the masses.

Now, one thing that stands out to me in the interface pretty quickly - and I'm wondering if it was there always - is the Edit button that links back to this repo in GitHub, back to each thing. Was this there from day one?

**Zeno Rocha:** Not from day one, but it was something that I learned along the way. This is something that I try to do on every documentation page that I write nowadays. I think when you build something and if that particular content is on GitHub, I always try to use markdown. If I'm doing something that is content-heavy, like this - this is a guide that each tip - if you check the source code - is a markdown file. So what is the easiest way for people to contribute with content? It's markdown, you need to use markdown.

Then there's like a build process that converts all those into HTML blocks, and then I put all those HTML blocks in the same page. I really wanted to do in such a way that if you click this Edit on GitHub, all you see is a markdown file and then you can start editing this markdown file on GitHub.

Today, and as I learn more and more about documentation, there are a few things that need to be done in documentation pages that can drastically improve your project, and all you need is to just put a link to it.

**Adam Stacoviak:** Yeah. I mean, these things seem to me like invitations, each section. If I read this, I'm like "Oh, I can add this tidbit to this to correct it", or even seeing the dropdown Select menu at the top for being able to choose a different language - it seems very inviting to say "This is a working document. This is not set in stone. We may have started this..." -- that's probably a bad example, I won't do that... I was gonna make a Billy Joel joke with "We didn't start the fire", but as I started to unravel it in my head, it just didn't make any sense.

The long story short is you made this, but it doesn't mean that you're the only person in charge of moving it forward, and if you have opinions or thoughts on how this could change for the better to help the masses, as you're trying to do with the mission of this project, then certainly step in, and here's your single button for any tip in there to do so.

**Zeno Rocha:** Exactly. When you write documentation - or anything that is content-heavy - it's hard to know if people... First, if that's right or wrong. You do your best to do it the right way, but maybe you missed something; maybe there's a typo, or maybe what you wrote is not 100% true for 100% of the cases... So having these options to edit, that's super cool.

\[00:51:46.15\] Another thing I like is feedback. When you go to something and then -- in this site we don't have that, but maybe you could have... In the past, you know, there was like the thumbs up and thumbs down; you'd just vote to tell what is the feedback for that particular section. I think nowadays, as I'm thinking more about this -- the project that I'm working nowadays, for example, we have that, but I see a trend in terms of reaction. If you see someone sends a message in Slack, you can put a reaction as an emoji; same for Facebook, same for GitHub, and you see all those big players going in this direction. This is something we could apply to our open source projects, because it gives a lot of information in a much more refined feedback for everything that we're doing.

**Adam Stacoviak:** Yeah. We're up against our next break again, so let's take a break... When we come back, we're gonna talk a bit about Dracula, which is super cool - theming for pretty much any code editor: Vim, Zsh - you name it. It's super cool, I love it. Then some cool stuff you've done with DevSpace, and then potentially, if you wanna share the story around your talk engagement at Erupt, we might get into that too. Hopefully we have enough time... Let's break here and when we come back we'll dive into that stuff.

**Break:** \[00:53:17.12\]

**Adam Stacoviak:** Alright, we're back with Zeno Rocha, talking about his cool open source. This thread through all this things is just like careful, meticulous thoughtfulness, helpful - these are all adjectives I think of when I think about the way you approach the project you're involved in.

The next one on the list for us to talk about is Dracula Theme, or just Dracula, basically. Some may say Dracula Theme because that's the theme they're using for their particular code editor, whether it's Atom, Alfred, Emacs, Pygments, Slack... I mean, anywhere you could basically apply theme, Dracula is there. What is this project? Why?

**Zeno Rocha:** Yeah, why?! \[laughter\]

**Adam Stacoviak:** Ha-ha-ha! Couldn't help but do that.

**Zeno Rocha:** \[laughs\] Basically, this one has started from a very crazy story of my life. I was giving talks a lot, traveling around and I was giving a talk in Germany. I ate something, I wasn't feeling good at all. Then I got on a flight to give a talk in Spain, and in the middle of the flight I was feeling very bad. I ended up in the hospital for like three weeks, it was crazy... Then at some point I was feeling better, I could use my computer at the hospital, and I was just working over there; I was a little happy, because I had my computer and I could communicate with my family.

Then at some point when I was in the hospital I left my room for 10-15 seconds and someone stole my computer. It was the worst feeling in the world. Okay, so I had no computer, I had no way to communicate with my family - crazy story, I know, I'm gonna get there... And then I had some co-workers in Spain, so they brought me a new computer.

\[00:55:55.11\] I was configuring everything for my new computer, and then I was using iTerm, I was using Sublime... I was using all those things, and then I was like "Now that I have a fresh computer, fresh setup", and I was installing all those softwares, I noticed I had lost everything, all my configurations, so I was like, "Oh, I think I'm gonna give it a try and start to build a theme that I can use on all those new softwares that I'm installing." So that's how I started Dracula.

Basically, I like dark things... I'm not a big fan of light colors on code editors, so...

**Adam Stacoviak:** No, nobody is... I shouldn't say that, actually. If you're out there and like a light team, come see us after show. We'll convince you why you shouldn't.

**Zeno Rocha:** Yeah, that's very controversial, I'm not gonna even get into that.

**Adam Stacoviak:** Yeah, tabs versus spaces, basically.

**Zeno Rocha:** Yeah, exactly. \[laughs\] But that's basically how it started, and it's just like a theme... Just a color scheme that you can use on your code editor. I cited with you the ones I used, and I think nowadays there's around 60 (65-67) softwares that have themes for Sublime, even paid software, which is crazy.

I saw the other day, there's this new cool app for taking notes, it's called Bear. And in order to have themes, you need to pay. One of the paid themes is Dracula - crazy! \[laughs\]

**Adam Stacoviak:** What?!

**Zeno Rocha:** Yeah, it's crazy.

**Adam Stacoviak:** Wow...

**Zeno Rocha:** But it's MIT, the license, so they can use it, that's fine.

**Adam Stacoviak:** Well, it's not they're not paying for Dracula, they're paying for access to themes, and Dracula is one of them. But either way... For one, in a hospital, and somebody steals your computer -- how dare somebody ever steal your computer? Not just yours, but anybody's. To a hacker, that's their lifeline; you basically just stole everything... Assuming you may back up something - of course you're using Git and GitHub, so you've probably got all your projects backed up hopefully, you've pushed all of your latest branches and what not. So that's a good reason to always ship your code to somewhere else, basically.

**Zeno Rocha:** Yeah, I learned two things... So I didn't lose my projects; they were all on GitHub and it was fine, but I lost my talks, because I didn't backup, so that was bad.

**Adam Stacoviak:** That's so painful, man...

**Zeno Rocha:** Yeah, so painful... The most painful part was losing my stickers.

**Adam Stacoviak:** Oh, yes...

**Zeno Rocha:** That is hard, man... That is hard.

**Adam Stacoviak:** There's lots of people who put stickers on their computer, but there's not many -- basically, if you do that, if you put stickers on your computer, it's like a big thing to those people who do it. I stopped doing it because I'm not mobile enough to need to make my MacBook look different than somebody else's; that's reason number one. And number two is just because you want to represent yourself, right? It's identity. But to those who do it, it's like "How dare you 1) talk about my stickers in a bad way, or 2) take my computers with them on it? Don't do that!"

**Zeno Rocha:** Yeah, exactly. So nowadays I have like a backup of stickers, so if I need to change mine... I know some people buy covers for their computers...

**Adam Stacoviak:** Yeah, I used to do that... Buy a cover, put stickers on the cover...

**Zeno Rocha:** Yeah...

**Adam Stacoviak:** \[00:59:46.18\] That was me. I didn't wanna sticker up the actual MacBook, it was just too impressive to do, which... I have a different feeling about that now, but whatever. Anyways... I've turned a new leaf. But this is super cool - so you pretty much have a theme for everything, but you didn't do all the work to do all this, did you? You just sort of started the process, and everybody else... Just like translating BrowserDiet - you just started the thing and people came along and agreed with the need, this help you were providing to the community for open source... How did that work?

**Zeno Rocha:** Nowadays, if I go -- I just went to the organization page on GitHub, I went to Themes, and there are 44 themes on that organization. There's a basically like a theme for each theme. It's usually like one member or two members per theme, but I try not to -- because I don't know most of the softwares, I didn't use the software that people are submitting, so there's no way for me to...

And I learned that in order to scale an open source project, you need to give power to other people; there's no other way. You are just one person. So that's what I do nowadays... I have the repo, and we try to follow a pattern; if you go to each repo, there is like some consistency in terms of what is the readme about, what is the structure of the readme - it shows who built the theme, a screenshot of the theme, install instructions... So there is a pattern and we try to follow that, but there's so many things that it's impossible.

Softwares change all the time, so you need to update the theme... It's very hard, man. Maintaining themes is not easy, but I'm glad people are using Dracula.

**Adam Stacoviak:** Yeah, it's pretty crazy. There isn't one thing in here that Sublime, Atom, that people don't use. And I think what's interesting is just laying down the tracks for others to follow. Something that was actually said in one of the most recent episodes of the Changelog by Kent C. Dodds - and tell me if you agree with this... He said, "Give commit access freely and early. The payoff is worth it."

So you've got this thing - it's sort of pride, it's sort of ego... These are some things you touched on earlier; you didn't say pride, I did, but you said ego... And there's often reasons why we as humanity have those things - it's because we wanna retain and command control, and we have to realize that open source is not one person, it's not an island, it's an ecosystem, it's a community of people, and the only way to make that possible is by I guess being a bit vulnerable and sharing some of that control, and maybe giving some of that trust early or often to people.

It's tough in a world where maybe you've been wronged by somebody, like your first step into open source - "Delete all the things, do it over!" It's pretty easy to be jaded if that's how you started, but you're not. I don't get it. You're an anomaly.

**Zeno Rocha:** I guess everything about open source is counter intuitive. We could be spending our time doing freelance work on our free time, and instead of making money, we are building something for free, and sometimes we're spending even more time doing this than the other thing. Same as what you -- this quote is perfect... It's super counter intuitive. We as human beings, we wanna have control over this thing that we've just created. There is no reason... I know sometimes they do something wrong and then you see that and you're like "Ugh...!" but it totally pays off. It's crazy... Everything about open source is crazy. I don't know how it works.

**Adam Stacoviak:** \[01:04:05.11\] It's good though, because it's an exercise in humanity, if you ask me... I think that's what I've learned. I came for the code and I stayed for the people - that's how I feel about open source. It's weird how we got here, and I didn't expect this to be the path that it ended up being. That's why we're doing such crazy things at Changelog, because we care about people; we wanna help people.

Sure, talking to people like you on shows like this, and producing podcasts, and sending out e-mails and newsletters, and doing live shows, going to conferences, doing some of the film stuff we do - that's all fun, but at the end of it all, the whole point of it all is touching people's lives, inspiring people, hearing people's unique stories, and just getting into trenches with the people, you know? That's what it's all about for us.

Back to Dracula though... DraculaTheme.com. If you're listening to this, go there, scan, and if your editor/thing you want a theme is not in that list, clearly you can fork this and contribute back, or create a -- is the process to fork, or is it to create your own repo and then do a Git submodule? What's the process?

**Zeno Rocha:** Nowadays, since everything is spread across repos, usually you create a new repo, you fork the template (which has everything that you need in the readme) and then you start building your code over there.

**Adam Stacoviak:** Nice. So you've got an easy to find template. We'll find that and we'll link it up in the show notes too, so that way we can give one less step to those who are following along with this process.

It's a crazy story... In the hospital, somebody steals your computer, you find some time, and then next thing you know, you're themeing all the things, basically. I love it.

We're getting close to the end of time, we've got about five(ish) minutes to go. Two more things we wanna talk about -- or actually it was technically one, because you mentioned the hospital story... Maybe that's all you wanna mention about it - you tell me... But then you've got DevSpace. So if anybody out there -- I don't know, have you heard of this thing called GitHub? \[laughter\] You know, notifications, you can track people, different orgs... Lots of stuff is happening on GitHub, and unless you're eyeballing your e-mail for your notifications or maybe you're sending those things into a Slack room or something like that, it just sort of blends together. You've made it a way with DevSpace to stay up to date with what's happening on GitHub pretty easily in a -- if you've ever used TweetDeck, or HootSuite even... Very similar, where you have columns, you've got threads essentially that way; very easy to follow. Why did you make this?

**Zeno Rocha:** I think it was a natural step, since I was using GitHub so much and I was working with other people... I just wanted to visualize what was going on across all these orgs, all these repos, and that's what I built it in. At the same time, I have been using TweetDeck for a long time, I like the way the columns are structured; I think it's a good layout for keeping updated with what's going on, so I basically replicated that model for GitHub.

**Adam Stacoviak:** One thing that is different about this versus the things that we've talked about before is -- what?

**Zeno Rocha:** It's not open source yet.

**Adam Stacoviak:** Oh, so you've got the "yet" in parenthesis then? What's the reason why?

**Zeno Rocha:** The way DevSpace was started - I was only thinking about the end result, and not about the code as much... Let's put it this way - I just wanted to put something out there, and one of the excuses I used to build DevSpace was also I wanted to try React... So it was my first project with React, and it was like "Okay, I'm just gonna keep this as a private repo for now, and then when I find time, I'll make this open source." \[laughs\] That's pretty much it.

**Adam Stacoviak:** \[01:08:26.11\] So this is a web app, it's not an actual native app, so I'm assuming that you may be following the conversations happening around progressive web apps.

**Zeno Rocha:** Yes, that's exactly another excuse that I used for building this. I wanted to try progressive web apps, and basically the way I built is if you go to your Android or your iOS phone, you can add it to your home screen; it has service workers, all that kind of things, and you can have an app-like user experience on your phone.

**Adam Stacoviak:** Gotcha. And what's the state of that with iOS, for those who haven't been tracking PWAs?

**Zeno Rocha:** Yeah, it's working fine on iOS as well.

**Adam Stacoviak:** Okay. Last I checked, at least, I wasn't sure that service workers was available in Safari. Is that a new thing? How new is that?

**Zeno Rocha:** I'm not sure about service workers in particular, but the manifest file which has everything you need to make that work - it's working.

**Adam Stacoviak:** Have you blogged at all about some of your tribulations around this path, to follow the PWA bandwagon basically and make DevSpace?

**Zeno Rocha:** I haven't. I was super into PWAs a few months ago, and I was like "Okay, I'm gonna build this. This is gonna be a use case that I can share with everybody..." In the end I didn't have time to write a blog post.

**Adam Stacoviak:** So since you've kind of answered the one question, the next question was gonna be -- until I looked into basically how to install it from Mac or Android; now I see instructions, so then I thought, "Well, it's probably down to the PWA space", versus say Electron, for example. Any reason why you went with the PWA route versus Electron? Since it's a desktop application... Did you want it to be a mobile thing too, I guess?

**Zeno Rocha:** Yes, so I have a local version of DevSpace using Electron, and I may share that in the future. Nowadays, clipboard.js is taking a lot of my free time, it's almost everything for that. But if I find some time, I wanna share the Electron version. It's working fine on my machine, but in order to share it with another people you need installers, certificates for Mac - all those borings parts that you need. Once I finish all that, I will share.

**Adam Stacoviak:** When Feross Aboukhadijeh was on the show a little while back, right toward the end of the show (I'll link to this in the show notes; do go back and listen to that), he has an idea... He wasn't very clear exactly what it was or now it worked, but basically it would take that last mile that Electron makes building native apps on multiple platforms pretty easy, except for the packaging part, right? Which is the things you just described there. So he has an idea for that that he may do as a money-making idea, I suppose, because he's all about passive income and what not... So you should follow Feross if you don't already to maybe check that out.

**Zeno Rocha:** That's awesome.

**Adam Stacoviak:** \[01:11:55.25\] Anyways, let's get back to the "yet" in parenthesis... Maybe this is a syndrome - we've only got about a minute-and-a-half to go, but maybe this is a syndrome where someone like who is so thoughtful, is so caring, is so meticulously planning and what not, that they feel like they can't open source something because of the potential backlash of the not so good code because they put so much good code out there. How do you feel about that?

**Zeno Rocha:** I feel like this is a real pressure that you get once you start doing more stuff. I don't think it prevents me from doing that; I don't stop writing new projects because of that, but it's something that I wish I didn't feel. I wish I would just put it out there, and if it's bad, it's bad... Send a pull request. But yeah, it's just something that I wish I didn't feel. \[laughs\]

**Adam Stacoviak:** The pressure is real.

**Zeno Rocha:** Yeah...

**Adam Stacoviak:** Well, you know, it's a good thing though. It shows that you put the time in, right? We're just back to that original issue like "Why in the world did this repo get 5,000 stars in three days?" Well, it's because I put in the work. You weren't being boastful about it, you were just being truthful and factual. "It's popular because I put in the work..." And because you put in the work, people have slightly higher (dare I say it) expectations of you because of that. That's not a bad thing.

**Zeno Rocha:** Yeah, I think my mindset nowadays is I'd rather spend one year in a project and do something high-quality, something that I'm proud, something that I'll come to my mom and say "Hey, mom, here's a project that I've built... Let me show you", than doing 30 projects and doing things that are not good or don't work. So I think as a developer this is something I try to take with me - quality first.

**Adam Stacoviak:** Quality first... I like that. So we're here at the end, and one last thing from you is any closing thoughts, any words of inspiration, anything that we just didn't have a chance to cover that you're like "Man, I've got to say this before we close off." Do you have anything like that?

**Zeno Rocha:** No, I think my... The reason why I'm doing this is I just want to -- I hope that this helps someone. If you're listening... I'm not here to be like "Oh, here's all the projects that I've built! Look how awesome I am!" or "Just use everything that I did" - that was not the goal at all. The only reason why we're here is because we wanted to just give a different perspective on how you could work, or a different take...

\[01:15:12.01\] I learned so much from other people, and if I have the opportunity, I wanna share those things that I learned. So I hope this was helpful... I'm super glad that I'm here. I have been listening to The Changelog for a lot of time, and now I'm here, so thanks, Adam!

**Adam Stacoviak:** No problem. It was really fun, and I'm glad... I know we didn't get a chance to talk about this, but we'll link in the show notes because I did catch this as I was planning for this call - it's ZenoRocha.com/reminder. It's just a reminder to people what time means, and I have a similar blog post I wrote after someone passed away, that I kind of reflected on what time means... So I really appreciate you taking the time to sit down and have this conversation, and also the time that you spend to enrich the lives of developers out there. That's our mission, that's your mission, and it takes time to do so, and we only get so much time, so I appreciate you taking your time today. And you, the listener listening to this, I appreciate your time as well, so thank you for tuning in. That's it, man. Thank you so much for joining us, it was a pleasure!

**Zeno Rocha:** Awesome, thank you. Bye-bye, everybody!
