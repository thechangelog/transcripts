**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 244, and today on the show we're talking to Tracy Lee, serial entrepreneur, Javascript developer and co-founder of This Dot Labs. We talked to Tracy about learning Javascript, the ins and outs of her road to get to where she's at today, breaking into the JS community and the fun cruise, workshops and conferences she's working on for the JS community.

We have three sponsors today: Rollbar, Hired and DataDog.

**Break:** \[00:01:05.06\]

**Adam Stacoviak:** We're back, and we've got Tracy Lee joining us today, talking about learning Javascript, the Javascript community, and all that and in between. Jerod, we actually have a new show people may not know about yet, called JS Party.

**Jerod Santo:** Yes, we do. It's a live show - it's our second live show, it records every Friday at 3 PM U.S. Eastern Time. Come hang out in the Changelog community and Slack with us live as we record. It's hosted by Mikeal Rogers, Alex Sexton and Rachel White. That is a fun show, we have a few episodes out there, so subscribe, join us and have a JS Party every Friday afternoon.

**Adam Stacoviak:** That's right, every Friday. Tracy, have you listened yet?

**Tracy Lee:** No, I haven't, but I love the fact that it's called JS Party.

**Adam Stacoviak:** It's the best way to do it, right?

**Tracy Lee:** Yeah. Do you guys have drinks as you're partying?

**Jerod Santo:** There's no rules, so...

**Adam Stacoviak:** Yeah, there's no rules.

**Jerod Santo:** It's all virtual, so BYO.

**Tracy Lee:** I wanted to do something called "Shots and a Pull Request". We filmed one episode of Shots and a Pull Request, and the shots were really disgusting.

**Jerod Santo:** Didn't go so well?

**Tracy Lee:** Well, we weren't doing like whiskey shots or vodka shots, it was was like "Let's make apple pie shots." We submitted one pull request to jQuery and then we decided to give up on that idea.

**Adam Stacoviak:** Oh, boy...

**Jerod Santo:** I think the shots to pull requests ratio is the important part, because the more shots you get, the pull request quality goes down and down, doesn't it?

**Tracy Lee:** Or it could go up, depending on who you're pairing with.

**Adam Stacoviak:** That's true. Some people get better drunk, I don't know... I haven't met anybody who doesn't.

**Tracy Lee:** \[00:03:57.02\] One of my friends, Jay - he's writing a Reactive programming language and he's super into WebAssembly right now. If you can imagine this guy, he's super technical and as he gets more drunk, the more I can snipe him into talking about things. The other day I was sniping him into something related to RxJS and he went off and taught me about prototypal inheritance, so...

**Jerod Santo:** Nice! Well, different strokes for different folks, I guess. You get him a little bit buzzed and he teaches you Javascript. That's excellent. \[laughter\]

**Tracy Lee:** \[unintelligible 00:04:35.21\] like "Well, you know... Let's sit down for three hours and let me just teach you Javascript, since you asked about my job." \[laughs\]

**Jerod Santo:** So let's give a little bit of your background, Tracy. First of all, thanks so much for joining us. You're a Google developer expert, you're a Javascript developer, you're a serial entrepreneur, have started and sold a business, and you're the co-founder of This Dot Labs, so we're talking about This Dot and a lot of the cool stuff that you guys are doing around JS and community building. You also say that you like to explore code in your free time, and building the JS community.

In light of that, give us the recent history of Tracy Lee, how you got into This Dot and how you got where you are today.

**Tracy Lee:** Yeah, I recently met somebody that had a very similar story to me - Preethy - at ReactConf. She came from the VC background... The way I got into Javascript was I was selling my company about two years ago, and when you're waiting for documents and paperwork to be finalized, you get bored, especially when -- you're basically going 1,000% and then you all of a sudden slow down to 50%. So I decided to take a little bit of time off.

I took three weeks off, did a week of HTML, a week of CSS, a week of Javascript and then I couldn't take it anymore, and then somebody stuck me on Ember, and I was like "Wow, this is great!" and I just spent all my free time writing Ember apps and getting excited about Javascript.

That was interesting, I did that for about a year, and after I sold my company I just started another company... Doing marketing - I didn't really wanna do marketing, I was much more excited about spending my entire life coding. So I started hosting events, doing random things... I started to have a little bit of \[unintelligible 00:06:41.20\] I think after eight years of pounding on something really hard, when you all of a sudden give yourself room to breathe, anything is possible.

Then about a year into my coding adventures with Ember, last year I got invited to ng-conf. It's actually kind of interesting to form our communities and looking at how big they are. If you look at Ember versus Angular, the community is huge. Angular somehow just sucked me in, really just took over my entire life last year. I was asked to be a Google developer expert, and I was writing my, you know, like what you do you actually do in Angular, or in Google, I realized that... I mean, I probably attended more than four conferences a month last year related to Angular, and started speaking a lot about Angular related things.

On Javascript - let me answer your real question... Because I did this, and I started getting deep into Javascript, I decided that I should probably be more of a useful human being, so I decided to start This Dot Media and stick all the things that I was doing together into one.

\[00:07:59.07\] I co-founded it with my friend Taras, who's known as EmberSherpa in the community, and we just sort of stuck both our companies together and said, "Hey, let's combine efforts and really bring awesome things to the Javascript community."

We're really passionate about helping people. I think one of the great things is when you work for yourself, you can do what you want; you have more control over how you spend your hours, and so I'm very lucky to have a very understanding and passionate co-founder who allows me to spend most of my time playing around and trying to help out as many people as possible.

You guys know about Contributor Days and This Dot Javascript, and that's sort of how my idea of helping the community manifests.

**Adam Stacoviak:** Yeah, being able to experiment is core to me. I think that's a lot of what we do around here, Jerod. Everything we do is an experiment in the next step, which is just reaching out to more developers and helping people realize they're not impostors, and find new things, and just enrich the community. Having that as an ability is priceless. You have to have that.

**Tracy Lee:** Like JS Party, right? You just decided you want to have a Javascript party...

**Adam Stacoviak:** Well, it was kind of like that... To some degree. There's several months in there of it, but the idea had been there for quite a while, and it got to a point where we were behind the scenes, with Mikeal Rogers, talking about what could be, and then one day Jerod's like "It should be called JS Party", and then it sort of just clicked from there, basically. Once you have the name -- the name, like anything in programming, is key.

**Tracy Lee:** It's kind of interesting talking about just sticking things out there or just doing things and then iterating from there... You know, whether it's an open source project or whether it's just bringing community together. I think one of the hardest things for people to do is just do it. If you fail, it's fine. You'll live again.

**Adam Stacoviak:** It's almost like people need permission to start, you know?

**Tracy Lee:** Yeah.

**Adam Stacoviak:** Like you said there, "just do it." It's the same thing as starting, but some people kind of get this impostor syndrome or this paralysis of like "I'm not good enough to do that. People won't possibly listen to me", or whatever they tell themselves to just not do it. Sometimes people just need to hear from somebody else "You should do that thing." Maybe that's what you did with This Dot Media.

**Tracy Lee:** Yeah, I was having a conversation with Michael Jackson who created React Router v4, and they just did a really big release, and made a lot of pretty significant changes... But we were talking about this idea of -- you know, they were working on it for so long and they were continuously making improvements, and it's so easy to say "There's just one more thing, there's just one more thing...", and at some point you just have to realize that you're just giving yourself an excuse to not release something or do something, and you should just do it.

**Adam Stacoviak:** We know that feeling, right Jerod?

**Jerod Santo:** Yeah, we've gotta remind ourselves of that all the time.

**Adam Stacoviak:** Are you looking at our playbook, or something...? \[laughter\]

**Tracy Lee:** This is the inspirational conversation to get you guys to release that thing that you're gonna release next week.

**Adam Stacoviak:** Oh gosh, there's so much... We have big plans, and I think the mantra that we speak to ourselves every time we feel like we have to go faster is to slow down. Because sure, everyone wants to go super fast, everybody wants to do all the things - everything right now, instant gratification. But at the end of the day, slow and steady wins the race, and that's what we live by.

**Jerod Santo:** \[00:12:01.06\] Yeah, which sounds actually kind of opposite of what we were saying, like "Just put it out there, just do it"... Internally, we're telling ourselves, "Slow and steady wins the race", because we've already decided that we're doing the next things, we're pushing forward... We've already given ourselves the permission to launch or to start, and now it's "Don't' get overwhelmed with the perfection side." "Perfect is the enemy of good" is the old saying, and it's so true...

Adam and I both go down rabbit holes where one or both of us has lead us down slower routes or worse routes because we're shooting for perfect. I'm thinking specifically of our transcripts, which still aren't on the website, because I have huge...

**Adam Stacoviak:** \[unintelligible 00:12:40.13\]

**Jerod Santo:** I have huge plans for our transcripts which, for the audience's sake and for you, Tracy, we have all of our episodes transcribed.

**Adam Stacoviak:** Like, every one of them.

**Jerod Santo:** Yeah, every single one. And we pay for someone to do a really good job of transcribing our episodes, and we haven't done anything with it yet because I haven't integrated it into our CMS, on our website. Why? Because I have this perfect plan, and it's gonna be so awesome.

**Adam Stacoviak:** And secretly behind the scenes I'm saying, "Just ship it!"

**Jerod Santo:** Yeah, he's like "Let's just get it out there."

**Adam Stacoviak:** We have a rough UI idea; we haven't actually designed it, but we kind of know how we want to do it, and it's not exactly how Jerod wants to do it... Which I'm cool with, because like you said, Tracy, part of it is the experimentation side. One of the joys of doing your own thing is being able to experiment, so I'm not gonna sit here and say, "Hey, Jerod, we really should just ship this thing", but at the same time, we really should just ship this thing.

**Jerod Santo:** Right. \[laughter\] See, it's a developer's dilemma.

**Tracy Lee:** I like your guys' strategy a little bit better. I sort of have to tell myself the same thing. Every year I sit down and I plan out my year, and I always try to shave off 20% of my plan. This year - I already burnt out this year, and that sucks... So I'm still trying to recover from that, but you see that, right? Like, I recently listened to your guys' podcast with James Long about burnout, and you see a lot of people and a lot of open source maintainers of large projects, you just see them burn out, and it's shitty...

**Adam Stacoviak:** It's a syndrome, for sure...

**Tracy Lee:** ...especially for a library that you're really depending on.

**Adam Stacoviak:** Yeah, it's definitely... I mean, it's been there for a while, that problem, and I think it's not been spoken of enough, maybe because of embarrassment, or "I should be able to do this." That's a whole separate topic, but I'm curious to know - it's mid-March, basically, and you've burnt out in quarter one. What happened there?

**Jerod Santo:** Yeah, what does that look like?

**Tracy Lee:** \[laughs\] Well, it looks like me sleeping for two weeks. \[laughter\]

**Adam Stacoviak:** You know, sometimes that's okay, too. Just like you said before, permission to start...

**Jerod Santo:** Permission to sleep.

**Adam Stacoviak:** ...sometimes you also need permission to stop.

**Tracy Lee:** Absolutely. My sister always says, "Be gentle with yourself." That's my constant thing in my head, "Be gentle with yourself." Some people are sprinters and some people are marathon runners - I'm trying to be a better marathon runner, and I think you forget sometimes when you start a business that - especially as a serial entrepreneurs - that "This is fine, it's gonna be \[unintelligible 00:15:36.15\] but it really isn't.

\[00:15:39.09\] Some of the biggest things for me this year were -- one of the things that I got really excited about last year was putting together this idea of This Dot Javascript. I guess the problem I was trying to solve was that I saw a lot of angst in the open source communities and the different frameworks communities, specifically on not feeling like they're knowing what's happening with the different frameworks, and there was complaints for example about ES2015 and TC39, and it being a closed box... So every quarter we do this thing called This Dot Javascript. It's live broadcasted online, and it's different people who are core maintainers doing ten minutes of just an update of "Hey, this is what's happening."

It's also kind of interesting, because when you talk to the core maintainers about This Dot Javascript, in general they're fine doing it, but then you ask them to do it a quarter later and they're like, "Dude, we don't have anything crazy to announce." It's not so much about that, though... It's mainly about...

**Adam Stacoviak:** It's a heartbeat.

**Tracy Lee:** Yeah, keeping in touch with people and making sure that they know what's happening, instead of every x amount of months all of a sudden like "Whooo!! Surprise!"

**Adam Stacoviak:** "Must have gigantic release, or nothing" kind of thing.

**Tracy Lee:** Yeah...

**Adam Stacoviak:** Or a big new feature, or some reason to praise. Celebrate the small wins is what we need to do more often, and I think that's what you're saying.

**Tracy Lee:** Yeah... And then we do this thing called JS Interactive. It was funny to me, because This Dot Javascript has I think over 20,000 views already on YouTube, and JS Interactive, which is the more interesting one, has maybe 3,000 or so.

A month later we do this interactive panel where we bring everybody else back, and then anybody can ask any questions. We had like 550 people attend live for This Dot Javascript, and then about 300 people attend for JS Interactive, and I was so confused, because that's really the cool stuff - the fact that you can ask Misko who created Angular anything you want, or Dan Abramov anything you want.

I think that's something really special, and that's what I'm trying to do... These people who are doing cool things in the community are also just people, and it's okay, you can talk to them, they're not scary; it'll be fine. It's something that I try to encourage.

**Jerod Santo:** Well, one thing we do wanna ask you about, Tracy, is especially now that you have learned Javascript over the last few years after selling your startup, so you're fresh to learning JS, and I myself kind of learned it slowly over years of just doing web development, and out of necessity, and there's a lot of people who are wanting to learn it, whether they're breaking into programming as a profession or as a hobby, or in the case of probably many of our listeners, they're coming from a different language or a different skill set inside of software development and are interested in JS because of the ubiquity of it and the opportunities there. So we're gonna ask you about learning JS, kind of have a conversation around like "Where does somebody start? How do you keep up these days?", and so on and so forth, but we're gonna take our first break, and we'll talk about that right after this.

**Break:** \[00:19:29.24\]

**Jerod Santo:** Alright, we are back with Tracy Lee, who you may know as LadeLeet on GitHub and Twitter.

**Adam Stacoviak:** I love that name.

**Jerod Santo:** Yeah, great name. Unforgettable. Tracy, when it comes to learning Javascript, things change very rapidly; they've changed since a couple years ago, they probably changed six months ago, the language is moving, the frameworks are moving, the browsers are moving...

We kind of know where you started, to a certain degree, with Ember, but if you have someone who's new to programming - let's take it from that angle first. They're not just learning Javascript, they're also learning programming, as many people are, especially with Stanford and many of the other universities are now using Javascript as their language of choice for computer science 101 and stuff... What do you think about the best way to break into JS and the web in the first quarter of 2017?

**Tracy Lee:** I still feel like I'm learning - and I am... For my projects mainly and what I do, I don't do it full-time. Some weeks I'll just code all week, some weeks I'll only code one day. I probably have only been doing Javascript part-time per se. Right now I'm learning RxJS, and I am doing a lot of it... In the beginning when you learn a language or learn something, you think it's really cool; then you just sort of stay there where you've landed, and you get really good and you really start understanding what you're doing.

Then, as you get deeper and you start doing things on your own, you start having more and more and more questions; you go deeper down the rabbit hole, and then there's a point of "Whow, now I know too much, and I don't know what I was supposed to know, and now I'm really frustrated because I need to know more, and I don't, and now I know I don't", right? \[laughs\]

**Jerod Santo:** Right. Ignorance was bliss, but now you know how little you know.

**Tracy Lee:** Exactly... I'm lucky to have Ben Lesh and Jay Phelps as two of my best friends; Ben wrote RxJS 5, so initially I was pairing with him and he was teaching me, and it seems awesome; "of course that's how you create an observable" and "of course that's how you wrap an API", but then I started doing it by myself... I tried to basically use a Raspberry Pi and then write all my code in RxJS, and then I realized without Ben telling me what operator to use, you don't know. You really have to understand these things.

\[00:24:03.27\] The other day, Ben and I sat down again and we went through it. Typescript I've done with Angular, but when you incorporate RxJS into your Angular code, you really do a lot of Typescript. So tons of Typescript, tons of RxJS, then also learning Javascript, right...? And then learning ES2015, and then learning Angular... And I think we're actually really lucky, because the people who do pick up Javascript right now - it's much easier to do and you don't have the legacy of "Oh, I know ES5, and whow... What is this ES2015 thing?", right?

Personally, I think if you do learn Javascript, you should choose a framework and mess around with it and get really good with it. If you choose Ember, Angular, React or Vue, they all have CLIs, so it's really for you to scaffold up a project and not have to worry about setting up your dev environment etc., it has the tests baked in for you... That in itself makes it easier, but then you learn everything all at once.

**Jerod Santo:** Let me stop you real quick, because a lot of people will never get past "pick a framework."

**Tracy Lee:** Okay.

**Jerod Santo:** I'm just saying that even experienced developers never get past that... So let's say I'm at - and to a certain degree I agree with you - especially one that's kind of "hold your hand" quite a bit, such as Ember, that kind of gives you a batteries included framework framework, as opposed to \[unintelligible 00:26:02.13\] a couple libraries and stuff that you have to pick and choose your own things - something like that is nice when you're learning, because it's warm and cozy inside this nice, big framework... But how do people even decide what's worth investing into?

For instance, what you guys do with This Dot and This Dot Javascript is you're framework agnostic. You're interested in Angular, you're interested in Amber, React, Vue - which is, by the way, a good move for business opportunities... But for learning, like you said, pick one and go. Does it matter? To a newer developer, can you just say "Who cares? Just grab one and get a project"?

**Tracy Lee:** So I haven't played around with Vue yet, I don't know what the syntax is like, so I can't comment on that... I can only comment on Amber, Angular and React. If you want serious guard rails, then go with something like Ember or Angular. If you want to have more options of choice and learn more Javascript-specific, but maybe not be as productive... Like, more Javascript, less productive because you need to learn more Javascript and more how to configure things, then probably go with React. If you don't care about those things and you just wanna get really productive and build applications and have things done for you, then picking something like Ember, Angular is better.

One of my girlfriends just moved from -- she works at Netflix, and she moved from Ember to React recently because of her job... She was really happy that Ember -- she said that Ember helps you think about scale and what you need to do next, and it gives you a good foundation on how to be very organized with your project.

\[00:28:02.04\] When she moved over to React, it was good to have that sort of -- it's almost like going to the army first, I guess, and then going out into the wild; like, you're always gonna make your bed...

**Adam Stacoviak:** The discipline.

**Jerod Santo:** Yeah, you're ingrained with structure.

**Tracy Lee:** Yeah, exactly.

**Jerod Santo:** I like that analogy.

**Tracy Lee:** Yeah, so I don't really know... I mean, I think also if you look at just -- let's say you take Angular and React as an example... Like, what syntax are you most comfortable with? I'm very comfortable in Angular because I've done Ember and I feel like the syntax is very similar, and how they structure things is very similar, so me going into React was a little bit more difficult because of JSX, and it just blew my mind what I could do there.

**Jerod Santo:** When you started a couple years ago, did you have programming background? Or this was all brand new to you. The first time you saw a loop, or the assignment of variables and stuff like that - did you have...? I mean, I'm just now gonna extrapolate what I think, because your experience is a very positive one, and one that I think could be modeled after... I think you were perhaps in a privileged position to have friends that were framework authors; not everybody has Ben Lesh as a friend to sit and -- like, the person that created RxJS can teach you RxJS. But if I can just extrapolate that out and say "Have a mentor." Find a mentor or a teacher. It's a huge, advantageous thing to have somebody who, whether or not they wrote RxJS, knows it and can teach you that. But when you first got started with Ember and you said you played with it for a year or so, doing different things, were you learning all of the -- like, what variable assignment is, and looping, and iterators...? Did you ever learn all of that stuff alongside Ember?

**Tracy Lee:** Yes, but I'm more focused on "What do I want to do?" and "What do I want to build?" I didn't tell myself like "Oh, I need to learn loops, I need to learn this and I need to learn that."

**Jerod Santo:** Right.

**Tracy Lee:** I think if you get to know me, I know a lot of stuff I probably shouldn't know as a beginner, and then I don't know a lot of stuff I probably should know as a beginner. I think you just need to be comfortable with the fact that you're gonna learn what you're gonna learn, and everybody's gonna have a very different experience on how they learn and what sticks and what doesn't.

It's gonna be okay, and you don't have to force yourself to do things. I think the best thing for anybody is to just pick something that you love doing... For example now with RxJS, Ben and I are building a pun app. We've taken the new Google image recognition API, and you can hold up a real life banana and it will spit out banana puns to you... \[laughs\]

**Jerod Santo:** Nice.

**Adam Stacoviak:** Interesting.

**Tracy Lee:** You just have to have fun... I mean, what else are we gonna build? Whatever... But it's amusing and it's actually really interesting. I wouldn't worry about all that stuff.

\[00:31:43.03\] Going back to the mentor thing, that is so important... I have people reach out to me all the time and say, "Hey, I need help with X." If I can help, I will, or I can pass them off to somebody. I was really happy when I started learning React that I was able to just -- like, Dan Abramov was nice enough to just help me with what to me were really stupid things... \[laughs\]

So don't be afraid. Ben Lesh always says, "Hey, if you need help, just let me know. It'll be fine." I think that the Angular team is very friendly and open and welcome, and the Ember community... There's the Slack channel in which you can literally go into a NeedHelp and people will mess around with you there.

I'll tell you guys about This Dot Labs and this idea of having a mentor... We're really big on mentorship, myself and EmberSherpa, and what we do is we actually help companies -- I think what we realize is if you sit and you bang your head on something, whether you're working in Javascript or whether you're just learning Javascript, it can be really frustrating. You can spend many, many days doing it, where it might have just been a simple problem.

We collected a few of our friends who were core contributors or authors of different frameworks and libraries, and then you can actually buy a certain number of hours of their time for a month to sort of have that guaranteed support when you're doing code reviews, architecture etc. It's nice to just have somebody there for you, and I think that speaks a lot to just like, everybody should just find a mentor.

**Jerod Santo:** Yeah...

**Adam Stacoviak:** It sounds easier said than done.

**Jerod Santo:** Yeah. It's nice if you can afford one, in that case. But just thinking back now to your learning, it sounds like you were very goal-oriented, as opposed to knowledge-oriented, or I don't know how you put that...

**Adam Stacoviak:** Mission-minded.

**Jerod Santo:** Yeah, and that's by the way something that I tell people when they ask me questions about learning how to program and all that... You have to have a goal, whether that's like a toy or a business that you wanna build by yourself, or whatever the goal is... Something that you think needs to exist in the world \[unintelligible 00:34:18.20\]

I find that I learn things best when I'm learning them as a means to an end that I care about, but not as the end goal. Adam, maybe you can speak to this as well in terms of -- this is why side projects are so important, and why open source is so important... You start something goal-oriented, you're learning, you're building something you wanna see exist in the world, and sometimes it blossoms into something you never plan on it being, and that's the beauty of really the web, but also of open source.

Adam, do you find that you learn better when you have a goal in mind, as opposed to...?

**Adam Stacoviak:** Totally, yeah. One hundred percent. I mean, just winging it is great, but you'll sit there and just stare at a blank screen, whereas if you kind of know "Well, I wanna build a basic website and hold some data, or return something back to the user if they do this. Or they can log in and look up results or search something." Having that as a placeholder in your brain or even some sort of idea - it makes it so much easier to actually approach it, because you're not just looking at the language and thinking, "Okay, what could I do with it?" It's more like, "What do I wanna do, and how can I make it do it?"

**Jerod Santo:** Right.

**Tracy Lee:** This is another really big thing with a mentor... A lot of people will come and say, "Hey, I really need help", and I'm like "Okay, what do you need help with?"

**Adam Stacoviak:** Ideas...

**Tracy Lee:** \[00:35:56.08\] "I really wanna learn Javascript" - that's not actionable. If you're like, "Hey, I'm really trying to get this RxJS to work as a Raspberry Pi", which has been the thing that I've been messing around with lately... If you say that, then somebody who would want to help you, can help you, because you have something they can help you with.

**Adam Stacoviak:** It also speaks to maybe your place on the path, too. Learning Javascript is such an open-ended thing to say... "Well, okay, at what point are you? Are you brand new to the web?" Like, you were on Facebook one day and you're like "I can actually make the web, let me do it. Somebody told me Javascript is a place to start", or are you a little further down the line and you know some HTML, you know a little CSS, you know roughly how the web works and things like that, and you're just further down that path? It speaks to where you're at.

**Tracy Lee:** Yeah... I think also just people who are maybe backend developers or non-Javascript developers, because of how Javascript is these days and because of the tools that are out there (like the CLIs), it's amazing how easy it is for somebody to get started. I think the experience a few years ago was very, very different from the experience now.

**Jerod Santo:** Yeah, speak to that, around the CLIs... I know that Ember built its own CLI and it was a hit, so the other frameworks kind of followed suit, or were inspired by that and realized that's a great user experience, especially at first run experience. When they did that, there was a lot of pushback, because there were things like Yeoman, and I don't know what else - Grunt maybe - at time, like boilerplaters and code generators... And it's kind of like these are generic tools that everybody else was using, but Ember built one specific to Ember.

Tell us about the CLI landscape in Javascript nowadays, and why it's so awesome.

**Tracy Lee:** So you have EmberCLI, which because it's -- I don't wanna say it's the oldest, but I would say...

**Jerod Santo:** It's the original gangsta.

**Adam Stacoviak:** OG.

**Tracy Lee:** Yeah... \[laughter\] I would say probably somewhere around 95% (if not more) Ember apps are built with EmberCLI. So they are very focused on the convention of a configuration thing, and that means that -- like, there's so much thought around it... The way you deploy your apps - there's an addon for that; how you generate anything - there is a very set, prescribed way to do almost everything in Ember. Because of that, the CLI has more ability for you to generate different things. You can generate routes, components you can generate in both EmberCLI and AngularCLI.

But if you just NPM install EmberCLI and then you just say... I think it's Ember--help, you can see all the different commands that you can actually use, and everything is pretty well documented. So AngularCLI came about a year ago, and it was originally built on top of EmberCLI, so it was actually an addon based on -- AngularCLI was an addon of EmberCLI, and last year they made their own changes and made up their own changing things from using Broccoli to Webpack etc., and making it for the Angular community.

\[00:40:04.23\] There's a lot of features that AngularCLI is still trying to do... I think they're in RC -- I don't remember which RC they are right now, but it's... Or no, sorry, they're in beta right now... I think it's like beta 1 or 2 for AngularCLI. But it's good enough; you can generate models and services and components, and different things like that in AngularCLI, and it does a lot more configuration than it did last year for you. Last year you were still adding things to your module file, and the imports, and doing a little bit of configuration; now it's very much like the EmberCLI experience.

Then that as well - all you have to do is NPM install and then it just spins up an app for you. Same thing with Create React App. I think the most important thing for this is that Create React App sets up your development server, and you can just get started.

**Jerod Santo:** Right, it's all the tedious, tricky parts that you get stuck on.

**Tracy Lee:** Yeah, you literally don't have to do anything except for install, and then generate a new \[unintelligible 00:41:22.02\] and then you have an app and you can just mess around with it, and you can see the results of what you're doing immediately. Like, done. This is great for children too, if you want your kids to code, like "Hey, scaffold up a new app. Go crazy." \[laughs\]

**Jerod Santo:** Because you can get lost in the wiring up of the glue and never make it to writing any of your own code, if you don't have those tools available at scaffolding for use. It's awesome.

It's perhaps worth mentioning now there's also, after ReactConf, Create React Native App is a thing.

**Tracy Lee:** Yes, CRNA.

**Jerod Santo:** It'll scaffold you up a React Native app, which is really neat.

**Tracy Lee:** Yeah, so now you have Create React App and Create React Native App. Those are pretty cool things, too. It's much less; you can't do a lot, except for the fact that it sets things up for you.

**Jerod Santo:** It's a start...

**Tracy Lee:** Yeah, the start is great. With AngularCLI you can generate your components, you can generate services and they'll create those dummy templates for you, which is kind of nice. I'm hoping that something happens with Create React App at some point in time.

**Jerod Santo:** I think you're right... For developers who are just moving from space to space, coming to Javascript, especially with all these command line tools nowadays, they'll find it a lot easier to get into it, so that's great.

I still think for completely new people there's a lot of work that needs to be done, but yeah... We're making moves.

**Adam Stacoviak:** Another good place to just get started is sometimes just to read code. I can think back to -- I mean, this is sort of stupid to say (at least I think so)... I learned to mess with CSS by basically just messing with other people's better CSS.

**Jerod Santo:** Sure...

**Adam Stacoviak:** CSS for me was like the hardest thing to learn, because I was like, "What the heck is margin and padding?" and this \[unintelligible 00:43:31.10\] the same concept is there... These little silly things that should be easy, I learned by reading other people's code. That's something you said, Jerod, in a really popular blog post that you wrote on the Changelog.

**Jerod Santo:** Right. Yeah, that's definitely a great way of learning - reading other people's code. Another point real quick, before we hit this break, is when it comes (especially) to children, but anyone who's new to programming and doesn't know much about the web, you don't even need an editor, you don't need a command line tool... All you have to do is pop up some dev tools and show them how they can manipulate the page...

**Adam Stacoviak:** \[00:44:08.18\] Any page.

**Jerod Santo:** Yeah, exactly, and the one that I always do which catches them immediately, is just inspect an element and just start hitting delete, and different elements of the page just start disappearing. That always impresses kids.

**Adam Stacoviak:** \[laughs\] They're like, "I can remove that, nice. Can I put it back?"

**Jerod Santo:** Right... Like, "Yeah... A little harder." \[laughs\]

**Adam Stacoviak:** Yeah, refresh.

**Tracy Lee:** Which is like the more advanced way to change your report card, you know?

**Adam Stacoviak:** Yes. That's the truth, yeah.

**Tracy Lee:** "Mom, look, it's online!" \[laughs\]

**Adam Stacoviak:** Yeah...

**Jerod Santo:** Right? \[laughs\] Danger, danger!

**Adam Stacoviak:** That's true. As Jerod mentioned, we are getting close to our next break, but Tracy, you do some organizing, so when we come back from this break -- when I say "organizing", I mean organizing conferences, cruises, workshops... All that fun stuff. So when we come back from this break, we're gonna dive deeper into the fun things you're doing. We'll be right back.

**Break:** \[00:45:00.10\]

**Adam Stacoviak:** And we're back with Tracy Lee... A lot of fun here, kind of getting to know you, kind of getting to know how to learn Javascript, and ultimately organize and inspire communities. You said in the pre-call that you're organizing a cruise, a workshop, and also Angular Contributor Days. You also mentioned in the first part of the show - I probably shouldn't bring this back up again, but you mentioned you burnt out in the first part of the year... So you're doing all these things fairly soon...

**Jerod Santo:** You're rubbing it in, man...

**Adam Stacoviak:** I don't mean to rub it in, \[laughter\] but we all have to face the truth. Tell us about these things.

**Tracy Lee:** Okay, let me say one thing about burnout, because one of my friends, I feel like he needs to deal with this, too... If you're feeling stressed out or burnt out and you wanna stop, you should just stop. Also, everybody invests so much time and energy in getting fit - you wanna get fit, you wanna go on a diet, you wanna whatever, but people forget that they should also be investing money in their mental health, and sometimes that's better...

**Adam Stacoviak:** Yeah.

**Tracy Lee:** So you should... If you feel stressed out or depressed or whatever it is, it's really important for you to spend those dollars into mental health, just as the way you would spend it into your physical health. I felt like I should mention that...

**Adam Stacoviak:** Is mental health part of the organizing thing for you, to get out and meet people and be amongst community, and interact with real people versus digital artifacts on a machine?

**Tracy Lee:** Yeah... I think that the mental health thing is more like... Dealing with burnout -- everybody burns out sometimes, and if you feel like you need help in that sense, you should get help on it.

For me, organizing things and getting excited about things -- I used to say I was an introvert, but I still don't know, because I derive so much joy and energy from organizing things and bringing people together, but at the same time I love just spending a week not talking to anybody, except for on the internet, and I need that time... So I'm not really sure what I am.

**Adam Stacoviak:** \[00:48:13.24\] I think everybody needs a level of solitude... That's what that probably means for you, because I'm the same way, where I love being with people, but I also -- if I get a chance to... I love my family, but if I get a chance to have a solo weekend just to sleep in or experiment or tinker or play video games or watch movies or whatever, I'm like "Yes, that's cool. I love it." It doesn't happen often, but it's nice.

**Tracy Lee:** Yeah... So I'll talk to you guys about Contributor Days. You can go ContributorDays.com and see what we've been doing there. We're just about to release the videos for RxJS Contributor Days. This came about because I wanted to help framework authors get together with customers (big customers of theirs) and also core contributors, stick them all in a room and try to help them be more productive.

With RxJS Contributor Days, we are doing that once a year. It was really amazing what came out of it... You have people from the Angular Core Team coming, you have people from the Nuclide project at Facebook, who use RxJS a lot; you had people from the Slack team come, who uses it a lot, you had Matt Podwysocki, who was the original creator of RxJS, André Staltz from -- well, André does so many things, but CycleJS I think is what he's mostly known for, or Evan You from Vue.js... So sticking them all in a room and then just trying to figure out, "Alright, RxJS is Angular's only external dependency, so what are they concerned about? What is the core team not addressing?

We had a few beginners or teachers in the room, and it was like "Okay, how can the core team actually make RxJS more attainable to learn, more approachable to learn?" Same thing with Angular Contributors Days; we're gonna have Misko Hevery, Igor Minar, Jules Kremer and Stephen Fluin leading the charge on Angular Contributor Days, and we're inviting a bunch of large companies that are using Angular and people who are heavy contributors.

We're not only trying to address the fact that these people don't get to sit with the core contributors very often, but allowing the cross-pollination of ideas to actually happen. I think a lot of times in open source one person's hacking on one thing, another person's hacking on another thing... If you just get everybody together, you realize that maybe you're trying to solve the same problem, so you can distribute resources a little bit better, and then hopefully set the pace for the year of "Okay, now I have these relationships, now I can do awesome things with those new relationships."

**Jerod Santo:** This is the kind of thing that anybody who's active in open source or in these projects can come to, or is it just for the core maintainers and big corporations? Who's the target audience, beyond the core maintainers who are obviously there?

**Tracy Lee:** You can go to ContributorDays.com and actually apply to participate. We'll have a React one coming up, and we do have an Angular one coming up, and we're looking for people who are either really big companies who are using Angular or React or anything else, and then we're also looking for people who are actually senior developers and actually contributing and might want to hop on another project.

\[00:52:14.15\] If somebody's really prolific in React and they wanna contribute to Angular, this is a great way to get started. So it's definitely not a beginner level thing.

**Jerod Santo:** Very cool. So you've done one of these, the RxJS one last month... Was that your first one?

**Tracy Lee:** That was our first one, and we're also releasing the videos from the entire day, so even if you didn't attend, you get to go and watch all the conversations. All the hard conversations between the Angular core team and the RxJS core team - really cool, and all the conversations about "How do you address documentation, for example, in the community?" or (going back to documentation) "What operators do you use?" There's a lot more, but I think those are the two biggest, most exciting things that came out of RxJS Contributor Days. Same thing for Angular, you'll be able to see that. I think providing visibility and openness in our communities is really important... And humanness. People can be really mean on the internet.

**Adam Stacoviak:** Oh, man...

**Tracy Lee:** Right?! Or you see some people and you're like, "Man, that guy is so mean...", but then when you meet them in person you realize that they are also just human and maybe sometimes things just come off wrong, so part of the mission as well is like "Hey, look at these people, they're all human, and we're all trying our hardest to do awesome things for the greater community."

Most of these open source people are spending their free time hacking on things. If they don't respond to an issue, don't get mad. \[laughs\]

**Adam Stacoviak:** Yeah... Conversations are blending together that I -- it was either the James Long conversation that was recently on the podcast feed, or a side conversation that's in lieu of a future conversation that we'll have on the Changelog about this very thing of like how us humans respond on the internet, basically. You think you're talking to a machine, but there's actually a human on the other side.
If you're listening to this and you've already listened to the James Long episode and that's it, tell us in the members Slack or on Twitter, "Adam, you've already said it somewhere else." Connect a dot for me, because I'm not sure which one it was.

All too often do we talk to one another digitally. It was with James Long - now I know, because I just remembered my own thing... Through issues or comments on an issue, you just -- because GitHub has made it so accessible to collaborate, we don't feel like we're talking to another human, we feel like we're just talking to the machine, which is the internet, and we're actually talking to another human being and potentially hurting their feelings, or \[unintelligible 00:55:23.01\] that day, or demolishing their motivation because of one thing; they're doing it in their spare time, and that's not cool.

**Tracy Lee:** Yeah...

**Adam Stacoviak:** With Contributor Days, you're doing a ton stuff... You said videos in there, so that means that you've got some legitness to it basically actually videoing it; you're putting those back on YouTube or the internet somewhere for free for the community to listen to, you're doing a lot of work around organizing it, so that means you're reaching out either to inviting, or reaching out to those who are maintainers of projects to get together with potentially their most sought after users, which is people who are actually using their stuff... It takes a lot of work, right?

\[\\00:56:09.15\] I'm kind of curious... We talked a bit about your motivation already to do what you're doing now, but I'm kind of curious about the sustainability of it. That's kind of a thrown around word, but how do you fund this? Is this a make-money thing? What is this for you all?

**Tracy Lee:** Yeah, that's been an interesting thing too, because I think for the folks who spend hours and hours on open source, you don't ever question their motivation. For me sometimes when I do things, people are like "Why is she doing this?" \[laughter\]

**Adam Stacoviak:** I wasn't thinking that...

**Tracy Lee:** Well, it's because I'm passionate about bringing people together and I'm really passionate about helping people. So I'll spend a lot of time doing that because I know I'm really good at it, and I just can't help myself. Some things come about not because I premeditated them, but just because I'm like "Okay, I feel like I need to help in this area and I'm willing to devote time to it."

I like making an impact in the world, and I'll choose things \[unintelligible 00:57:30.09\] Contributor Days, I think those are contributing to the greater Javascript ecosystem as a whole. Things like Ng-Cruise, for example... I'm throwing an Angular Cruise conference at the end of May - 29th May we leave Miami to cruise the Bahamas, and... I do those things because I was on a cruise last year and I said, "Hey, I should hang out with a bunch of people. Let's all go hack on a cruise!" So we're doing that. It's fun...

**Adam Stacoviak:** And with cruises you also get those excursions... You probably have several days of boat time, and then you'll have days of excursions off to Jamaica, or somewhere in the Caribbean's, or is that...? You said you're leaving Miami, so I'm assuming the Caribbean.

**Tracy Lee:** We're doing the Caribbean, and I actually really hate the idea of being stuck on a boat, so every single day we dock on a port, and every single day we have an excursion. So we do a full day of conference - sometimes maybe two or three hours of conference - and then we go hang out and do excursions. I think over 80% of the people who have actually booked on the cruise already are bringing one of their spouses, which is crazy... Like, who would have thought? Or maybe it should have been expected, I don't know...

**Adam Stacoviak:** Buddies of mine did a cruise five years ago. The LessConf guys: Alan Branch, Steven Bristol - they did a conference called LessCruise, and it was similar in the makeup that you've just described, where you'll get together a little bit and you have community stuff, but then it's really about being in the real world together with geek friends you already know that are already in your obscure part of the internet, basically.

You get to hang together in real life and do real things, rather than just simply thinking about code. But you also do have some of that time where you can collect together on the top -- I can't remember what it's called... The deck. And just hang out and talk about stuff, or actually conference a little bit.

**Tracy Lee:** \[00:59:49.05\] Yeah. My favorite thing to do is to get all my friends in a room and then... \[laughs\] I love doing this at conferences... So we're all hanging out... I was \[unintelligible 01:00:01.04\] taught me how to use Angular and Palmer components together. Then my other friend taught me how to hook up IoT and \[unintelligible 01:00:11.24\] with Angular, and then another friend taught me how to set up a real-time database with Firebase. There was one other pairing session - I can't remember what it was now, but I was literally... Oh, yeah, that's right, NativeScript. So my friend Sebastian taught me how to use NativeScript in Angular.

I was able to do that in two hours, so you know... That's what the cruise is gonna be like. You have all the speakers, like Jeff Cross, Victor Savkin, Mike Brocchi who is one of the main people for AngularCLI; Ben Lesh, RxJS... They're all getting on this cruise, and they can't really go anywhere... \[laughs\]

**Adam Stacoviak:** You've got them cornered. That's the best way to make it happen... By force, basically.

**Tracy Lee:** Yeah, \[unintelligible 01:01:02.10\] \[laughter\] Force pair with me! \[laughs\]

**Adam Stacoviak:** Yes, that's --force... \[laughter\] That's a good way to do it, for sure. That sounds fun... What's the URL for the cruise?

**Tracy Lee:** It's just NgCruise.com.

**Adam Stacoviak:** Alright, we'll make sure we put those in the show notes for sure. Jerod, maybe we have talked about this, I don't know, but I've had a similar desire to do a cruise with people, because I've been on a cruise before and I liked it a lot. I didn't really care for the boat days that much... It'd be nice to actually be able to collect together during that time, but the excursions are so much fun... Just getting out of your neck of the woods, basically, is a good thing. And doing that with the Changelog community would be a cool thing.

**Tracy Lee:** Yeah, just with like-minded people I think it's interesting. That's where the bonding happens, right? These people are your friends forever... At least for the next five years.

**Jerod Santo:** That is forever in internet years...

**Adam Stacoviak:** That's true.

**Tracy Lee:** Yeah.

**Jerod Santo:** Speaking of internet... Is there internet on these cruises? I haven't been on a cruise since I was twelve.

**Tracy Lee:** Oh, yeah...

**Adam Stacoviak:** It's expensive, I believe...

**Tracy Lee:** No, this is the beautiful part.

**Adam Stacoviak:** I thought it was $10/day, or I don't know... Enough.

**Jerod Santo:** Well, that's not bad. $10/day is not bad.

**Adam Stacoviak:** I could be wrong. I remember terminals...

**Tracy Lee:** I think it's like $15/day.

**Adam Stacoviak:** I don't know if it was that... Per person though, Jerod...

**Jerod Santo:** That's chump change.

**Tracy Lee:** I mean, okay... Before it used to be like $100/day, if not more. But now you get like $16/day unlimited internet, and it's fast enough to NPM install, so...

**Jerod Santo:** It's gotta be satellite though, isn't it? They don't have wires, or cell towers...

**Tracy Lee:** Yeah, but it's good enough. It's good enough to where I feel comfortable being on a cruise with internet... That was my biggest blocker for many years. Running your own startup, you can't just leave, you know? So I would not get on a cruise until last year, and I was like, "Oh, man..." I facetimed for five hours... I mean, way to spend time on a cruise, but... \[laughter\]

**Jerod Santo:** Yeah, I'd expect there to be bad latency with satellite...

**Tracy Lee:** No, it's really not bad.

**Jerod Santo:** Cool. Alright, fine, I'll go.

**Adam Stacoviak:** \[laughs\] You'll be there. Alright, cool.

**Jerod Santo:** You talked me into it.

**Adam Stacoviak:** So it's NgCruise.com, is that right?

**Tracy Lee:** Yeah.

**Adam Stacoviak:** \[01:03:50.05\] Okay. We also have ContributorDays.com, we have ThisDot.co. That's the number of record for This Dot Media. You're doing lots of fun stuff... You've got what seems like a Labs section which we didn't talk about much, the media portion for this...

**Tracy Lee:** That's how we fund ourselves, by the way. We have clients.

**Adam Stacoviak:** Okay, there you go. It seemed consultancy, but I wasn't sure. Okay.

**Tracy Lee:** Yeah.

**Adam Stacoviak:** Cool, what else would you like to close on? We're getting ready to wrap up here. What closing advice do you wanna share with the listening audience?

**Tracy Lee:** I would say the biggest thing is just install some CLI and start it, start your server and check out just even how an app is scaffolded up, let's say in Angular, and test it around and just play with it. Twitter is something that I think some people don't use, but if you need help or wanna talk to people, literally everyone's on Twitter mostly. If you just search "angular on Twitter" or you just @ me on Twitter and ask me for help, or anybody... I'm more than happy to start getting you integrated into the community and helping you get help wherever we can.

**Adam Stacoviak:** And just do it, right?

**Tracy Lee:** Yeah, just do it.

**Adam Stacoviak:** And stop if you need to.

**Jerod Santo:** You have to give Nike a quarter every time you say that. \[laughter\]

**Adam Stacoviak:** Is that the truth? Well, maybe... Okay, start, and keep it simple.

**Jerod Santo:** Just start it.

**Adam Stacoviak:** Tracy, thank you so much for joining us. It was a pleasure to learn more about you and what you're doing with This Dot Media, and the kind of heart you have to get people together, help people and make an impact... I think it's such an inspiring thing.

You've learned what you've learned so fast, you've got some great mentors, and you're able to share what you've learned along the way and connect people as you do. That's awesome. Thanks for coming on the show today.
