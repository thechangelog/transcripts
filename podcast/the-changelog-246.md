**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 246, and today on the show we're talking to Kent C. Dodds, talking about guiding and supporting first-time contributors to open source. We talked about the many ways to be first-timer friendly, how to contribute to open source, the burden and balance of a maintainer, and a few of the projects Kent maintains, including his latest project at PayPal called Glamorous.

We have three sponsors for today's show: Sentry, Toptal and GoCD.

**Break:** \[00:01:07.06\]

**Adam Stacoviak:** Alright, we're back. We've got Kent C. Dodds joining us, Jerod. We've been trying to line this show up for a month(ish), something like that; we had to move it one time... But we've got him here, I'm excited. Are you excited?

**Jerod Santo:** Absolutely. And excited because this show is put together with help from our friend Dwayne O'Brien. Dwayne, shoutout, thank you so much for introducing us to Kent.

**Adam Stacoviak:** Yes. And Kent, welcome to the show.

**Kent C. Dodds:** Thank you, I'm happy to be here.

**Adam Stacoviak:** So we've got this passion and love for open source, and open source needs more community, more contributors, and I think the way -- you know, I went back and looked, and the Medium post that seems to be the most famous for you was actually pinned back in 2015, which I didn't realize, Jerod... I think we linked this up in Changelog Weekly recently, and I think I never even paid attention to the date stamp. I thought this was a newish movement for Kent, but he's been doing this for a while.

**Kent C. Dodds:** Yeah, it's timeless...

**Jerod Santo:** A couple years, at least, yeah?

**Kent C. Dodds:** Yeah... Yeah, it's pretty cool. I haven't actually done it a whole lot recently, but I still get people messaging me and tweeting me about it, saying that they've started doing it, and I'll follow the "first-timers only" tag on GitHub, and people are still doing it... So that's really cool to me, that it's inspired people to make their projects more first-timer friendly.

**Adam Stacoviak:** First-timer is sort of a loaded thing too, because you're like "Who is that really? Are they new to software development? Are they new to open source?" and in a lot of cases it's probably people who are just simply new to open source.

**Jerod Santo:** Totally.

**Adam Stacoviak:** You can assume that they're so new to everything that you've gotta spell out everything for them. It's more like, how do you open the door to say "You're invited to be a part of this..." It's on GitHub, or it's on SourceForge (back in the day), whatever it might have been, but this invitation basically says, "Here's easy ways to step into this project or this community and move this initiative along."

**Kent C. Dodds:** \[00:03:55.00\] Yeah, absolutely... If anybody hasn't read the First-Timers Only blog post, you just search "First-Timers Only" - this will probably give you a little bit of good context... But basically the idea is contributing to any project can be hard enough; whether you're really experienced or not, there's nuances in contributing to projects, so let's put away those nuances a little bit and make contributing as simple as possible, because the hard part about getting into open source isn't necessarily the actual code that you'll contribute, but it's figuring out how to work with GitHub, or wherever your project is hosted, but most of the time it's GitHub... Like, "What is a pull request? How do you fork? What even is a fork?" And especially, if you're new, how do you use Git, so that you can interact with that, with your fork, and that kind of thing.

So just making it as simple as possible to contribute, so that people can learn about the contributing portion, and then once they've figured out that contributing portion, then they can start utilizing the skills that they already have to contribute in other ways.

**Jerod Santo:** Kent, I'm curious why this is something that's so exciting or something that you're passionate about? I guess we got so excited having you on, we didn't even give you too much of an intro, but you're a software engineer at PayPal, you've done a lot of frontend stuff, you may know Kent's work from Frontend Masters, or perhaps as a teacher on Egghead... So you publish a lot, prolific on Twitter, specifically in the frontend and Javascript space. Did you have yourself a difficult time coming into open source, and so you're trying to help others get over that bump, or where is your motivation coming from?

**Kent C. Dodds:** I'm glad that you asked... So first off, I'm as privileged as \[unintelligible 00:05:41.24\] straight white American; I've had a computer since I was very little, so I just feel compelled to help other people who may not be as privileged as I have been. That's one of the major motivating factors for me - making this kind of thing accessible to people, because it's been so helpful for me.

My first foray into open source -- I don't even know when I learned what open source was, but I remember I was working on this Java project, and I developed this utilities library that was just useful in my projects. I've since learned that all of those utilities were available on other libraries, but I just decided, "Hey, I'll just put this up on this weird GitHub thing that I heard about"; I think it's called "My Java Helpers", or something like that. I'm pretty sure it's still on my GitHub. That was my first "something is on open source." So for me, I actually started publishing open source stuff before I started contributing to other people's stuff.

People will often say that it's kind of scary for them to put their code out there... Maybe I'm a big ham or something, but I don't mind pushing my stuff out; I don't care... I'm pretty sure that if it's bad -- it doesn't make a difference to me, I don't care if it's bad. And people will tell me it's bad and I can maybe fix it, or I can just not worry about it. \[laughter\]

So I made a couple libraries, and then I fixed a typo in some Java doc, and that was my first pull request, and then the rest is history... I just started contributing more and more. I think once you learn the process of contributing, then it just comes back down to your skills as a developer.

**Jerod Santo:** Yeah, I'm trying to just think back at my own experience, especially around contributing on GitHub, where things got a lot easier. In fact, I used open source for many years, and I even considered -- I remember I made a patch to a C library at one point, which I was proud of, because C for me is a difficult thing - memory management and all that; I've never been good at it - and I made an improvement to a thing... I can't remember what the thing was anymore, but I had not idea how to -- this was pre-GitHub at the time, so there really wasn't a good... I mean, we talk about a first-time experience and onboarding or ramping up - there's lots of terms for this, but getting people involved with open source is still hard, but the pre-GitHub era, it was...

**Adam Stacoviak:** \[00:08:21.08\] Way hard.

**Jerod Santo:** ...it was so opaque. Basically, you could generate a patch with Subversion and then email it to somebody (that might be a project maintainer), whose name is on the SourceForge page, or something... It was so opaque back then, that I kind of grew up in open source alongside GitHub, as they added features. The pull request was a new feature that came out, so I didn't really have to learn it because I was like, "Oh, they announced it", and then I checked it out... Point being is since I've been along for the ride of GitHub itself, I don't often look at it with the fresh eyes, because to me it's so much easier now than it used to be. But the fact of the matter is it's still really hard. There's still a lot of things to get over to get that first contribution going.

**Adam Stacoviak:** You also have a lot more things changing nowadays, too. You've got the most recent president of the United States advocating for people to learn code -- like, normal people... When I say that, I mean people who've never thought about touching a computer, or their only computer has ever been on an iPhone, or something like that. They now have this invitation of "Well, you can actually learn to code", and there's a new way you can do life as an engineer, or even just someone who is a drive-by contributor. You've got these people who are now being invited into this unique fold now, and they're like "What is even source, let alone open source?", they're just like, "How do I jump on this train?"

**Kent C. Dodds:** Right, absolutely.

**Jerod Santo:** Well, there's so much opportunity in our industry, and there's so many people that need access to those opportunities, around making a good living... Not just the salaries that we can demand because of the situation that we're in in our industry, but also just the freedom of life - you can work from anywhere... It's just a great and enjoyable thing as a career, and so we have people motivated, you have opportunity, and then you have this movement around open source as a resume... Or you have certain companies demanding that you have a GitHub profile which is attractive for them to hire you. Kent, I'm curious what your thoughts are on that whole thing, of like GitHub as a resume, or open source as a resume.

**Kent C. Dodds:** Yeah, I'm glad that you asked. GitHub as a resume is interesting... The real problem that I have with people saying you must have an active GitHub for us to even interview you is that it's inherently privileged. There are some people who go to work and they work on their closed door stuff, and then they get home and they have to take care of their suffering spouse or their seven kids or whatever it is, and they are totally dead by the end of the day, there's no way they can contribute to open source.

Then there's also people who love coding and they're really super good at it, but they're not really interested in doing it 24/7. I would look at somebody's GitHub to see if they have anything and peruse the issues that they've been commenting on, like "Is this person cordial? Is this the kind of person that I want on my team?" But if they don't have anything there, like they still have the stock avatar, I'm not gonna count that against them. I'll just assume that they have been unable to contribute, or maybe that's just not their thing.

It does say something when somebody is really into open source; I guess it can say that they don't know how to balance their life, but it's really hard to read that from a GitHub profile. It's just kind of a fuzzy area, so I would definitely never say you must have an active GitHub profile to be of any interest to me, because it's just way too overloaded with privilege.

**Adam Stacoviak:** \[00:12:19.14\] That's like saying you've gotta live in a certain city of a certain state... It's no different. It's sort of silly, because you're limiting your potential. There could be great software engineers, as you mentioned, out there that just -- they do the balance: they work 8, they play 8, they sleep 8, and they don't have time for open source, or they just never made time yet, so they haven't played that role, but yet they're great.

**Jerod Santo:** Right. There's plenty of people who are mechanics - and they're great mechanics - and that's their job... And they go home from being a mechanic, and they don't wanna work on machines anymore, until tomorrow.

**Adam Stacoviak:** That's right.

**Jerod Santo:** And then tomorrow they're gonna go back to being a great mechanic... And if you just completely said, "I don't hire any mechanics who aren't also hobbyists... So passionate that it consumes them 24/7", you're cutting yourself out from... I agree with you, Kent, it's a completely privileged thing, because some people - maybe they do wanna be a mechanic as a hobby, but they just can't because of life circumstances... But you eliminate a huge swathe of your talent pool by saying, "Well, you also have to be a hobbyist."

**Kent C. Dodds:** Absolutely. And there have been times in my contributor graph -- I have a pretty heavy contributor graph, but there have been times that I've taken a couple of breaks for like a month or so... Because you need a break every now and then, there's nothing wrong with that. And especially if you were to say, "I will only hire people with active GitHub profiles" - you're going to wind up with a situation where people get burned out on stuff, and it's not really a great situation to be in.

Also, a real challenge that I have occasionally and I've seen is that people will get so excited and into open source that they neglect their work duties. So even if you say, "Okay, I only want active GitHub contributors", what are they actually gonna be contributing to when they get into your company? So you need to hire for much more than that... That's just another thing to think about.

**Jerod Santo:** Yeah... There's so many factors. Hiring is hard. It's easy to armchair higher, but it's hard to actually hire well. Tell us about yourself in terms of -- I don't wanna get too personal, but your work/life balance. Because you work for PayPal, and you told me offline that you have open source projects inside PayPal that you're doing... So you have open source opportunities at PayPal, but you also have your frontend masters courses, you're teaching, you're doing websites like these, you're doing talks... How do you hold it all together?

**Kent C. Dodds:** Several people have asked me that on my \[unintelligible 00:15:11.25\] so I've got a pretty detailed outline of what my schedule looks like, but...

**Adam Stacoviak:** And you maintain that?

**Kent C. Dodds:** Sorry?

**Adam Stacoviak:** And you maintain it, the schedule? Because every time I make a schedule it's like... It's a wish.

**Kent C. Dodds:** I don't really maintain it, but it's not like really detailed... It's basically like, "This is kind of generally how I make it work." But first off, I don't really have a ton of hobbies outside of coding. I really enjoy coding and that's just kind of what I like to do. My wife is super supportive, so if I'm working on an Egghead course or a Frontend Masters workshop and I'm really coming down to the wire or something, she'll kind of step it up and take care of things while I finish that up. I have three kids, so there's a lot of effort around that... Shoutout to Brooke.

\[00:16:11.29\] I try to wake up early every morning to get a couple hours in working on my workshops, and those kinds of things. Generally, this stuff that I do for my workshops inevitably will lead to some open source tool, or something... Just this morning I was working on my testing workshop for Frontend Masters, and I have this tool called SplitGuide that makes it really easy for me to have like "Here's what your exercises are and here's what the final version should look like." It's just a tool to make that creating experience really easy.

There was just a small issue in that library, so I really quickly made a patch and released it, and I have the whole release process automated as well, so I can -- automation actually plays a huge role in my ability to do as much as I do.

My contributions are more often than not incidental to the work that I'm doing. There are a couple projects that I'm using at PayPal... We have something that's like, "This isn't a super experience, so I'll just go and make a contribution to something." Or like I'll be reading the docs for Babel or something, and like "Oh, that doesn't look right. Let me fix that really quick", and GitHub's editor makes it really easy.

So lots of really incidental contributions that are normally related to what I'm working on already. And then just being pretty strict with my time. I don't play video games, I just do coding stuff... And it's fun to me. I enjoy that.

**Adam Stacoviak:** That's fine. I mean... Not everybody who's a software developer has to be a gamer, you know?

**Jerod Santo:** Right... Although, if you're a gamer and you're not playing Breath of the Wild, then you're missing out. \[laughter\]

**Adam Stacoviak:** There you go...

**Jerod Santo:** I'll just throw that out there, because it's... Amazing!

**Adam Stacoviak:** You know, on the note of balance, Kent... You mentioned your schedule, the things you're involved in, and we were talking about being invitational and being polite and providing good on-ramps for first-time contributors and guiding them if we see that they have the default avatar and things like that... There's a flipside to that - you've also got first-time contributors to some degree where you're a first-time creator of an open source project, and in some ways you're kind of like the same thing, but at an org level... And someone like you who's done some stuff in open source and have your own projects out there, there's that balance as a first-time contributor but also as a maintainer in providing those ramps for people to come in to play. How tough is it as someone who creates open source to balance not only the roles of being a maintainer, but also being the inviter, the guider, that person who's essentially helping attach training wheels to people to get them involved in open source?

**Kent C. Dodds:** Are you saying the balance of "Well, if I were to just do this myself it would take five minutes, but if I'm gonna spend time helping this person, it's gonna take two hours"? Is that what you're talking about?

**Adam Stacoviak:** Just being the maintainer, being somebody who's got to be the leader, potentially even be the person who does meetups or goes speak at conferences, but also be thoughtful enough to say, "Here's how you can first-time contribute", or "Here's where to put code in things", like you mentioned in that article back in 2015. How do you balance being a maintainer, but also being that person, too?

**Kent C. Dodds:** \[00:19:52.14\] That's an interesting question... I guess I don't really see them as separate. I feel like my goal in my open source projects is first and foremost to solve the pain that I'm feeling, and then secondly to -- like, if I can take that solution and make it generally applicable, I can save hundreds or thousands or tens of thousands of hours of developer time... And that's pretty cool, that's a really awesome feeling. So if I'm going to do that though, I have enough open source projects now to realize that I can't spread myself too thin on these, or I'm not gonna be having any more fun; it's just not fun anymore.

I see building a community around projects as an essential part of maintaining projects. The only way to do that effectively is to have a good code of conduct that's enforced. I've, luckily, never had to enforce my code of conduct, but I have one and it's very clear that there is one. I have very good contributing guidelines. Sometimes I'll even have a video that demonstrates how the code is set up.

Often, my projects are fairly small, and so they should be pretty straightforward. I also do a lot of things to encourage people to contribute themselves. If somebody files an issue, it used to be that I would be like, "Sweet. Time me, I'll show you how fast I can fix this problem." I remember saying, "I'll have this released in five minutes" and it was nine minutes, and they were like "Oh my gosh, that's amazing!" and I used to feel so cool about that. But that's just a recipe for disaster. What you wanna do instead is invite the person who filed the issue to make a pull request to do it, and more often than not -- well, maybe not more often than not, but pretty often I'll have people say, "Oh, I just remembered this is open source. Yeah, I'll do that."

Even if it means guiding them - sure, it takes you more time to guide somebody to figure out how to do something, but what you have at the end of it is another person who's familiar with the code who's interested and invested.

There are a lot of things that you can do to increase people's investment in your open source projects, and the more invested you have other people in your project, the more likely you will be able to live your life of leisure and let other people manage your project... Steps in automation and that kind of thing as well, which has also been a really valuable thing for me. I have a generator that will automatically generate all the files I need for my projects, that are really common for most of my projects. That automatically creates the code of conducts, creates the contributing guidelines that are really nicely spelled out, and especially helpful for beginners... Then I have this automated released for all of my libraries, so I can actually merge a pull request and it gets released when I'm on my phone. That's pretty awesome.

So being a good maintainer of a project, in my mind, is not separate from being a really cordial and friendly person, because your effort to build a community will improve the maintenance of your project in the long run anyway.

**Jerod Santo:** Yeah, we've had the fortunate situation with Changelog.com, which has been open source since I think October...?

**Adam Stacoviak:** October, yeah.

**Jerod Santo:** Yeah, October... Which is interesting, because it's open source, but it's not like a little library - or even a tool - it's our website, and it's a product, that has a product direction... So it's a different kind of open source project that many; of course, they take many shapes and forms... But we weren't expecting too much contribution because it's our website... People use the website, so we thought we'd have some interested -- it's written in Elixir, which some people are interested in seeing an Elixir application, or a Phoenix-based application that's in production, like what it all looks like to glue that together...

\[00:24:09.17\] So we open-sourced it mostly because first of all we love open source, and it would be weird if our stuff wasn't open source, but secondly, it was more as people could look at it, file issues against it... As a headquarters, so to speak. But we weren't expecting too many people to actually contribute.

We've been happily surprised by many people hopping -- I think we're up to like 20+ contributors at this point - fixing bugs, adding little features... Really cool stuff.

**Adam Stacoviak:** And some big features, too.

**Jerod Santo:** Yeah, one that was really cool... And maybe Adam you can grab the fella's name, so we can say thank you on the air while I describe what he added... He added a persistent Play/Pause button, so anywhere you are on the site, we have a persistent player in the footer, a sticky footer, where any page your own, if you're playing an episode, it follows along and it continues to play. He was getting annoyed that when he'd go to a different page where that same episode would be in a list view or something, it wouldn't be synchronized with the player. He had a feature where no matter where you are, it shows if it's play or pause the current episode... Stuff that we wouldn't even think of.

**Kent C. Dodds:** That's super.

**Adam Stacoviak:** I didn't find that person's name... I was grabbing the one for the fix for 1.5.7 and 1.5.8 \[unintelligible 00:25:27.09\] mentioning. Lavimo is his name, he's from Italy; Marco is his first name... An Italian last name which I can't pronounce, but that's the one I thought you were wanting to shout out... But even the play/pause was pretty cool, too.

**Jerod Santo:** I wanna shout them all out. \[laughter\]

**Adam Stacoviak:** We'll have a shoutout show one day, for sure.

**Jerod Santo:** Yeah, because one of my points I was trying to make is when these people come along, how do you show that you're actually grateful, besides merging it and saying thanks? So one thing I thought of is we'll find their Twitter name, go over to Twitter and we'll thank them there, with links back to the pull request... Trying to amplify your appreciation, so that it's felt. So that's one idea.

**Kent C. Dodds:** Yeah, that's great. That's a really good idea. I know the Babel folks do that as well. This is something else that's really good for helping build the community around your project, and it's something I have strong feelings about as well. I actually have a couple of projects that are like products, not like a tool or library or something, and getting contributors around those is really valuable. I actually myself had a podcast until just November last year called Javascript Air. The website for that was open source as well.

What I did was I added a page, JavascriptAir.com/contributors where it listed all of the people who've made contributions, links to their pull requests and that kind of thing. That I think really gets people excited about contributing... And then you tweet out, "This person is a new contributor to the site", and it's really exciting.

For open source projects, especially for small projects, often you won't have a website, it'll just be your readme... So actually, the first I did something like this was a project that actually was a website. It's called Repeat To Do, just this little app that I built for my wife. But when just random people started contributing things, I wanted to express my gratitude, so I had a little table in the readme that listed who the contributor was, gave their avatar and what their contribution was... And this wasn't free - this took some time, but it was a way to say, "Hey, I really do appreciate the contribution that you gave, and here's some evidence of that. Everybody in the world can see that you contributed to this project, and I'm really grateful for that."

\[00:28:07.11\] I found that as I have been doing that, I actually made a specification for that - it's called All Contributors - and as I've been doing this on all of my projects, people are so much more excited about contributing to the project, they're so much more invested in the project, because they can see their name and their face in a prominent place on that project. That's an exciting thing to me, and it's not hidden behind the Contributors on GitHub, but it's somewhere prominent where people can see that. So they'll contribute more when they see their contributions are appreciated like that.

**Jerod Santo:** Yeah, absolutely. That's awesome. In fact, I'm over here, Adam, getting convicted that we're doing more for our contributors...

**Adam Stacoviak:** Yeah... We always can. We never do enough...

**Jerod Santo:** Right, absolutely. And I think what you're kind of getting at is the recognition, but you're also creating a sense of community around it, where it's not like one person and these driveby's happen to help out, but it's still about Kent... It's sharing the love and creating community around it.

I wanna continue this conversation; we're gonna hit on our first break. Specifically, you have this All Contributors repo... I think there's more to be said about this, and you have a lot of insights, Kent. So let's pause here, and we'll come back with more about how to recognize and attract contributors. We'll be right back.

**Break:** \[00:29:26.17\]

**Jerod Santo:** Alright, we are back with Kent C. Dodds, talking about all things open source, especially around community, contributions, first-timers, these kinds of things. And by the way, in the break we found the fella's name who contributed that very cool feature - Christian Franco. Shoutout to Christian, thank you so much for hopping on.

**Adam Stacoviak:** I love the way he did it, too... He opened the issue, and he was like sharing his idea; he wasn't just saying, "Here's the pull request, here's the..." He was like, "This is the idea I have. It took about roughly this amount of time. Do you think this is a good idea?" I kind of like that approach too, because it gives us a chance to probably develop together, rather than saying "Just send a PR." You hear that often, and it sort of sounds condescending, where you're like "Oh, you've got that idea? Great. Send the PR, do the work." "Just send the PR" - it sounds sort of nasty even sometimes.

**Kent C. Dodds:** Yeah, it totally does, especially for people who are just getting started... Especially for something like your project, where lots of people could be just getting into software development, maybe they've never done open source before but they're trying to learn about it... So hearing "Just open a PR" can be really kind of scary to people, because "I don't even know what a PR is..."

**Adam Stacoviak:** "What the heck is that...?"

**Kent C. Dodds:** "What is this...?" So I actually have a website called MakeAPullRequest.com, and it directs people to a free course that I have on Egghead about how to make a pull request. So instead of "You can feel free to make a PR", you say "Feel free to MakeAPullRequest.com" and then they can go learn about what that is.

**Adam Stacoviak:** That is so cool.

**Kent C. Dodds:** \[00:32:02.13\] And if they already know what a pull request is, that's fine, they just keep moving on. It's so much more friendly when you give people a resource, and it's not that hard to do, especially with GitHub, \[unintelligible 00:32:13.29\] Let's give people the resources and enable them to solve their own problems. I think that's really important.

**Adam Stacoviak:** Let me ask you this - this is maybe slightly off-topic to some degree... We asked you before what's your motivation behind this, and then here's this free course; it's 38 minutes long, but it probably took two weeks... I don't know, maybe a week, I have no idea how long, but whatever it is, it's enough time. You've got your day job, you've got your family... How do you benefit from the time you invest in this, and what makes you do it?

**Kent C. Dodds:** Well, that's a good question. Yeah, it definitely took more than two weeks. These courses take quite a while.

**Adam Stacoviak:** And it's free. It's not like, "Hey, Kent, we'll pay a royalty for this free course..." I don't know what your \[unintelligible 00:33:07.23\]

**Kent C. Dodds:** Actually, that is what it is... \[laughter\]

**Adam Stacoviak:** Okay... I guessed it right on the money.

**Jerod Santo:** "Ding-ding-ding-ding-ding..."

**Kent C. Dodds:** I have to give such a shoutout to Egghead.io, because they had half of their stuff - maybe more than half of their stuff is totally free, and they still pay royalties for that free stuff. Especially the open source stuff, they see it as like a public service that they're paying for for everybody... That's super, super awesome. I've gotta be honest, I've got a bunch of courses on Egghead, and my How To Contribute To Open Source is not my top-ranking course or anything like that... But just the fact that Egghead is willing to make that absolutely free is just super cool of them.

I have the flipside course as well, How To Write An Open Source Project. I don't really talk about maintaining or anything, but the tooling around things and stuff like that. That's totally free as well, so props to Egghead for being so awesome and hosting this, and funding my time so that I can devote some time to making these really great resources.

**Adam Stacoviak:** I didn't expect that answer, but that's cool... I like that.

**Jerod Santo:** That's very cool. Definitely a shoutout to Egghead on that.

**Adam Stacoviak:** Let's come back to the balance piece -- well, not back to balance... Back to creating community, back to your All Contributors idea, and giving that back to those who get involved. We talked about creating community and I feel like that's something we've done for a while, Jerod, but we're kind of doing better most recently. If you're gonna try and do something successfully, you've gotta have a community, and there's many ways to "create community." You can't just throw it in the microwave and put it on High for five minutes, you've got to do something specific. Kent what are the easiest ways to -- what are some of the ways you suggest to begin to create and nurture community?

**Kent C. Dodds:** There are lots of different things, but one of the top things I would say is make sure that you have a code of conduct for your project. For some reason, this is controversial. I don't know why, because it's seems so obvious to me. Making it so that people see very clearly that your is a safe and friendly community, that people can feel welcome whether or not they fit the mold of the developer that the world has created I think is really a valuable piece of building your community. So a code of conduct...

\[00:35:54.14\] There are a couple other things that I think are really useful, too. Having some sort of roadmap for your project... Sometimes people just wanna contribute to open source, whether or not they are experiencing a specific pain with a library or something, they want to just help out in some way... So whether your roadmap is in the form of issues or some markdown file in your project, having something where somebody can go to and see what are some things you want to do in the future... Or really useful are things that you definitely don't want to do in the project, and some reasons for why not. That can be pretty useful as well.

Also, having a really easy setup for your project... Like, if you have to install a bunch of different global things for your project, that can really be a barrier of entry for people coming into your project and trying to contribute. Often, you'll have somebody try to set things up and they fail, and it makes them feel like they're stupid or something, and so they don't even bring it up to you, so you don't even know that you're missing out on contributors because they feel dumb and they don't want to admit that or whatever, and they just move on to something else.

**Adam Stacoviak:** Yeah... That's me. I'm that person. "I wanna help, but I don't wanna be the idiot. How do I not know this...? I'm the impostor here."

**Kent C. Dodds:** Totally, yeah. So making it as simple as "Okay, Git-clone this thing", where you have a link to what Git is. Make it so simple... The really advanced person can skip over that link, but the person who's new to programming or new to your project or new to Git - that link will be invaluable to them. Sure, there's Google, but if your goal is to build a really good community around your project, you want it to be as friendly as possible. Lower as many barriers as you can. So yeah, "Git-clone this project, change your directory into that project that you cloned, and then run this one script that will setup everything", and that script works on every platform, Windows or Mac or Linux. If you can make your setup that simple, then you're gonna have a much easier time getting contributors to your project.

Then automating code quality... So if you're doing Javascript stuff, ESLint, or whatever project that you have, try to do something to make it really easy, so that when people are contributing their patches, you don't nitpick on them on code style or on really obvious bugs. Just try to make the pit of success bigger, so that you can focus on the right things...

**Adam Stacoviak:** Pit of success, I like that.

**Kent C. Dodds:** Yeah, that's one of the major goals in getting contributors - making that pit of success bigger... And especially having your setup instructions be -- like, often I'll see people say "Just clone the repo and then make your changes and then run the test", and the real problem with that is if I clone the repo where the tests are already failing (and that happens all the time) and then I go and make my changes and then I run the test just to make sure I didn't break anything, I suddenly have a bunch of tests that are broken and I think that is was my problem, so I'll spend two hours on it, trying to figure out how my changes broke the tests, only to find out that the tests were broken to begin with.

So having really clear setup instructions that validate that everything is clean and good before people even start making their changes is more valuable than we think.

**Jerod Santo:** That's all great advice. Once they get to the success - once you fall into the pit of success... I'm now picturing that and it's pretty cool...

**Adam Stacoviak:** There's a party in there...

**Jerod Santo:** \[00:40:00.09\] ...because I'm so used to the despair... \[laughter\] I'm wondering what the pit of success looks like, you know? But getting back to your All Contributors idea, once they have that contribution and they created that value for the project and for the community, that reward, that recognition - it's very important to expand that beyond just the person who gets their pull request merged. So that's kind of your idea behind All Contributors, which is a specification for recognizing everybody, not just people who submit code, and I think that's probably one where it flies under our radar the most... We don't think about it, because it's all about getting that merge, becoming a contributor on the graph, but the fact is in any successful open source project and community there are many people who are not contributing code - or contributing less code - and have all these other responsibilities. Webpack has become a bit of a model open source project recently because of its success financially, and because of the value it's bringing to the frontend community...

I bet if we ran the numbers, Sean Larkin would have maybe the fewest commits, compared to a few of the other people who are on the core team... So you'd think that his contributions aren't as important because he has less commits, but the fact is he's been paramount in a lot of their recent success and helping to bring new people on. Of course, that project is so large... They have documentation repos and I'm sure he has lots of commits there, so... I say all that to say what's a way that we can get past that blind spot of "If you're not contributing code, you're not getting recognized"?

**Kent C. Dodds:** Yeah, it's such a big problem -- we have in our mind that open source is all about the code, but it is so much more about the people. Just imagine Webpack if Sean Larking hadn't started working on getting the word out or helping people... I have courses on Egghead and Frontend Masters about Webpack - if nobody had done any community work or instruction work or anything like that, if it had just been Tobias working on the code, that project would not be nearly as useful or successful as it is.

So recognizing the contributions of people who have not contributed code is I think -- you should almost feel obligated to do this, because they're making just as big an impact on your project as the code itself. So a documentation, or a tutorial, or blog posts - even example repos, or something like that - answering questions on Stack Overflow or Gitter or Slack, or in the issues... Doing stuff like that frees the maintainer's time up so they can continue working on the code of the project.

It all accumulates together to make the product, and GitHub is really good at recognizing people who contribute code. That's pretty easy with the Git Graph, but it's really hard to automate the recognition of people who are contributing in sometimes even greater ways throughout the community. So that's what All Contributors is about - there's a CLI to help make it a little bit easier, because... Especially for something like Webpack, this would be a huge maintenance burden.

Most of the time for my projects I will ask people to add themselves to the list. There's a script they run, it's really straightforward for people. I've never really had -- people had trouble with that... And it's added minimal overhead for the maintenance of my projects and a great amount of gain.

\[00:44:09.22\] And it makes it so much less about myself as the project creator and so much more about other people who have contributed to the project. That makes me feel better about having the project under my username. It just makes it feel so much more right, I guess, because we're recognizing people who are contributing in any form.

**Adam Stacoviak:** Can we dive a little further into All Contributors then? You mentioned it's got a CLI, and it's a specification... So it's 1) Here's how you can do it, but then there's also the CLI part which is on NPM, which you can use to automate some of this stuff. You mentioned that you're pretty excited about automation; I'm not sure what word you've used earlier in the first part of this show, but all I know is that you like it a lot, so that's why you created this. What are the sources, how does it automate some of this "burden" on whomever is doing this to give that thanks? How do you make it a little faster, a little easier, a little less painful to add contributors and recognize the areas in which, based on the specification, how they contributed and the value the bring to the community?

**Kent C. Dodds:** Yeah, good question. Just to give a little bit of context... The All Contributors specification says that you should have a table in a prominent place for your project, and most of the time this will be the readme, toward the bottom, that lists all of the people who have contributed; it has their avatar, their name, and the types of contributions that they've made. We do that with emoji, so you have a computer for code, a wrench for tools, and there's infrastructure and documentation and stuff like that.

Creating that table in markdown is pretty tedious. It's really hard to maintain something like that, so instead there's this AllContributors RCFile that has all the metadata about the project, and the CLI will give you a prompt that says "Okay, what's your GitHub username? What are the contributions that you've made?" and then it'll add you to the contributors, to that RCFile, and then it'll generate the table based off of that. There's also a badge that you can have as well, and it'll generate the badge that says the number of contributors.

So when somebody's contributing to one of my projects, I have very detailed, step-by-step, "Here's how you set up the project, here's how you contribute, and before you push up your changes, add yourself to the table by running this script." That process is really simple for people to do. Sometimes people will forget, and I'll just ask them... If they want to do it, then they can just run that script, they update their pull request...

I've had a handful of people who were like "Oh, goodness gracious, I fixed a typo, I'm not gonna put myself on there." That's totally fine with me, I'm not gonna -- the thing is, All Contributors shouldn't be an additional burden on the maintainer, or at least it should be as little as possible. It should be more helpful in building the community around the project. So if somebody doesn't wanna put themselves on there, that's fine... But I do have a dream of one day having a GitHub bot where you'll be able to add a label to an issue, or add a comment that says "Add this person as a contributor", so you don't even have to \[unintelligible 00:47:53.10\] the repo, run the CLI or anything.

\[00:47:58.05\] I see that as something that would be something fairly straightforward to do... It's just a matter of taking the time to do that. If anybody listening wants to do that, it'd be awesome!

**Adam Stacoviak:** So essentially using the GitHub issues as an interface, essentially, to do this.

**Kent C. Dodds:** Yeah, you could, say, make a new issue that says "Add this person to the contributors table", and then the bot would do that and close the issue. It'd happen just like that.

**Adam Stacoviak:** I mean, I want that... That's super cool.

**Jerod Santo:** So we'll link this up in the show notes, to this repo, All Contributors of Kent's. I finally scrolled down to the bottom and saw the table, and it's super cool! It's got everybody's avatars, and their names, and then like you said, a little emoji for their contributions, like book if you've done docs... What's the eyes? The eyes are if you've reviewed pull requests.

Now, Kent, yours has more emoji's than everybody else's, and there's one that I'm confused about because it's the woman holding her hand up, and she's not in the key... Does that mean you're the server?

**Kent C. Dodds:** Actually, I need to update this... But that little woman holding her hand up used to be answering questions, but I've gotten some feedback that was gender-specific, so people asked me to change that. And I'm happy to do that... You'll notice the emoji is totally gender-neutral. As you can see here, I've gotten quite a few contributions from people asking for those kinds of things, and I'm happy to do that.

**Jerod Santo:** We've gotta set this up on our repo, Adam. I would love to see this on more repos, with GitHub readmes. Because the avatars are there and they're nice and big... I don't know, it brings the humanity right to the project's homepage, that is usually missing.

One thing I've always loved about GitHub is the code always comes first, and that to me was a revelation, because back in the SourceForge days I didn't know you could even look. I thought open source was just kind of free, and when you download the thing, you can look inside there. I didn't know back then that they had it, so I loved how when GitHub came out, you land on it and you see source files, right? And that's great, and I love that, but it's still about bits and bytes, it's still about code. But this brings a human angle right on the frontpage of the project, if the homepage happens to be a GitHub readme. I don't know... You relate to it a little bit just by seeing that table.

**Adam Stacoviak:** At the same time, it seemed like GitHub \[unintelligible 00:50:31.25\] the most prominent thing they made the readme the first-class second-class citizen. It was still second, but it was the first class of anything. They kind of popularized how important a readme.md file (or whatever format you're doing it in; I think .txt or .md were the default ways)... Those two things made it like "Here's the code and here's..." - whatever else you wanted to put in it. Most often that was like hopefully instructions, and now with something like All Contributors you've got not just the contributors to have in GitHub, which is codegraph only, it's everything else.

**Kent C. Dodds:** Yeah, and that human aspect too is really valuable, because often we'll look at code and it's just code, and we easily forget that this code was created by somebody who had a problem and they tried their best at making a solution. So when you go to the issues, you'll be like "I can't believe this doesn't support this thing..." Pretty much only people who are not very nice do that, but that's easy to do. And when you have people's avatars, like these are the people who put forth some of their own time to make this available, it makes you appreciate the project and those people's efforts quite a bit more.

**Adam Stacoviak:** \[00:51:56.12\] Yeah. It's time for our second break... We've talked quite a bit about sharing the love back to those contributing and creating community around it... Let's take this break, and when we come back we're gonna start talking about managing an open source project. You mentioned that you did a video (I believe) on Egghead on creating a project on GitHub...? Let's talk about the managing side. So let's break here and when we come back we'll talk about that.

**Break:** \[00:52:22.17\]

**Adam Stacoviak:** Alright, we're back with Kent C. Dodds and we're talking about some fun stuff. The next thing on the list, Kent - you give lots of talks, and you've got this talk you've given at All Things Open, which is actually where we met face-to-face, we had breakfast (which was super awesome), but you talk about scratching-your-own-itch open source, getting into it, managing your own open source project... Great, you finally ship your first thing, you're excited about it, and then now the burden of open source hits you. You've got PRs, you've got bugs, you've got things that start to happen and start to come out of being a manager of an open source project.

I don't know if you caught this, but recently we had James Long on the show - that title of the show was actually called "The Burden Of Open Source" and it was based on this blog post he did recently, which is Why I'm Frequently Absent From Open Source. It sort of got into this thing where he was scratching his own itch, releases a thing and it becomes sort of popular; he's got family, he's got other expectations outside of his code life, that he just wasn't ready for this burden of being a maintainer. I'm not sure if that's the only thing your abstract is painting, but it's certainly a part of it, so help us navigate what you're talking about here around managing an open source project, or maybe even the burden of doing so.

**Kent C. Dodds:** Yeah, absolutely. That was a great episode, by the way. That also makes me think of Nolan Lawson's blog post that he gave a couple weeks ago about what it's like to be an open source maintainer.

**Adam Stacoviak:** Yeah, it was in the same timeframe... We should have had a roundtable, a panelists show around that, honestly...

**Jerod Santo:** I think we could get hundreds of people on the show to talk about that topic, right? Because we've all felt it in one way or the other.

**Kent C. Dodds:** Yeah... Sometimes you'll just throw something out there and you don't think it's gonna be a big deal, and then all of a sudden tons and tons of people are using it. So if you haven't read that blog post from Nolan, I recommend people look at that. It helps you empathize a little bit better with maintainers.

So yeah, there's definitely a pain with managing open source projects... I've had a couple of projects that have been pretty popular and taken a lot of my time, and it can be really draining emotionally, and mentally, and physically on you, especially -- I'm a family man, so I'm trying to balance work and life and open source, and the fun part of open source, the reason that we do it. That can be challenging. So pretty much the premise of Managing an Open source Project - that talk, which unfortunately the All Things Open recording... There was a problem with it, so I'm still looking for a conference to give that at to get a real recording... But that talk is basically, if you set up your project in a good way, then you can distribute the effort amongst the community that you've built around the project.

\[00:56:01.22\] I give several must-haves and a couple of "This is really useful for this reason...", that kind of thing. I talk about how to structure your documentation so that you get users, and actually I kind of base things off of this contributor pipeline thing that I got from Mikeal Rogers, the Healthy Open Source blog posts, where basically you have this big circle of users and a smaller circle of contributors, and then a smaller circle committers, and then an even smaller circle of the technical committee, or the people in charge of making decisions when there's some sort of dissent, or something. Your goal is to make each circle bigger, so that you can spread the requirements of that open source project across the community.

The more users that you have, the more contributors you're going to get - potentially... And that's kind of the goal, to set your project up for success in that conversion process. Because there are some projects that are just really heavily used, but because they don't have a great setup for a community around that project, they aren't doing very well converting users into contributors and then into committers. So stuff like having really good documentation, having places for the community to work together, chat, or using Stack Overflow effectively and having a really good workflow for issues and pull requests and that kind of thing...

One tip that I don't see enough but I think would be really great for people to do more is if you have a domain for your library or your project, making short URLs or maybe subdomains that redirect could be really helpful for the community. For example with Angular Formly I started getting a lot of requests for help, support kind of things, so I created a subdomain called help.angular-formly.com, and that redirected to a JS Bin that was all set up with Angular Formly and everything that you needed, and it had instructions on how to get help. So like "Fork this JS Bin and then make your changes to demonstrate what you are trying to accomplish, and then post that to Stack Overflow", and then we have people who subscribe to the Stack Overflow RSS feed for the Angular Formly tag and they can answer your question. And what's really cool out of that is most of the time people will solve their problem while they're creating that JS Bin; they'll realize, "Oh, it's actually something in my ops that's messed up", or something like that. That's like a tenth of time, but the general idea of having some short URLs that are easy to remember - because once you start using them in the chat or whatever, then people will remember those really easily and start sharing those with people themselves.

So you make the process of maintaining and the process of helping with the community - make that process as easy as possible, so that other people start taking those responsibilities, and then you can get some of your life back. Also, having a really good Getting Started guide or some sort of guideline... If you get the same kind of questions from people, you add that to some sort of FAQ, or something.

There are lots of little things that you can do, automation and that kind of thing, to make your life as a maintainer much easier, and kind of pass the buck on to the general community. And at the end of the day if you're not happy with the way that things are going in your open source project and maintaining it, then hand it off, give it to somebody else to maintain. And if nobody else wants to do it, then that's -- this is the way that code works: if somebody doesn't need to use the project, then they won't use it. If they do and it's not serving their purposes, then they're going to have contribute in some way, or fork it or whatever, and what do you care if they do? If it's not bringing you happiness, then stop doing it and move on to something that does. Anyway, lots of words \[unintelligible 01:00:34.01\]

**Adam Stacoviak:** \[01:00:34.23\] Knowing when to quit is tough. It's easier -- I actually heard this recently from the fellow who runs Jupiter Broadcasting... He said, "Quitting something is harder than starting something", and that could not be more true than anything I've ever heard before. It's so hard to quit something, but knowing when to quit is almost just as hard to recognize. That's just tough stuff.

**Kent C. Dodds:** Yeah, and you want the project that you've poured so much time in to be useful to people, so this is part of the thing that compels us to forego things we'd rather do, so that we can make this more useful to people... But this is why building a community around the project is so useful, and giving commit access really freely and early to people... Just give it out liberally; anybody who makes a non-trivial change to your codebase, give them commit access. There are ways to secure things a little bit with GitHub, and goodness gracious, we have Git...

**Adam Stacoviak:** Yeah, and you can roll back into...

**Kent C. Dodds:** This isn't Subversion, or something really hard...

**Adam Stacoviak:** So what you're saying is loosen up on the keys and better balance the responsibilities of running things.

**Kent C. Dodds:** Yeah, absolutely. I've had several projects that I've completely handed over to somebody else, and they made it so much better than I ever would have had the time to do, and it's because I gave commit access freely and early. And when somebody gets those keys, unless they're like a super jerk - which I haven't yet experienced, but I could see that happening... Once somebody gets those keys, they suddenly feel a really strong responsibility, and especially if this is somebody who hasn't done a lot of open source before, or maybe this is the only project they've really contributed to... They take so much responsibility and they are so excited to have a project they can say they're a major contributor on.

So yeah, just give that commit access to people. I realized that sometimes you want to make sure that the project continues to solve the original use case that you set out to do and you have a direction for it, but it's really a decision between you having the micro-manager control over the project and you having your life as a human being and an individual. You just have to weigh things... And I would say most of the time the community can make a better project than you can by yourself, so just feel free to give that commit access to people and let them run with it.

**Adam Stacoviak:** I've got a small story that isn't exactly truly relevant here, but I'm gonna share a very small version of the story.

**Kent C. Dodds:** Let's hear it!

**Jerod Santo:** Let's hear it!

**Adam Stacoviak:** The relevance is what you just said there, which is responsibility can really level up somebody pretty quickly. What I mean by that is when I was in the military, I was what they would call a slow speed soldier at first. I went through bootcamp, I wasn't trying to excel... I was doing whatever I had to do just to get through it, because I just was like, "Whatever..." I was 18, I didn't have much of a head on my shoulders yet, my dad died early in my young life, so I didn't have that father figure, so I was like "Whatever... I'm just doing this." But when I got into what they call AIT (Advanced Individual Training) the drill sergeant called me out and put me as the first squad lead, which is like a really responsible role. I became the highest-speed soldier that day, because I was like "Holy crap, somebody sees something in me. They gave me responsibility!"

\[01:04:21.06\] Next thing you know I'm spit-shining my boots, I'm pressing my uniform, I'm running faster... All these different things that made me a better soldier happened because that person gave me -- I didn't earn it, he gave me the responsibility and it was up to me to lose it. So I think doing that in our community can have the same effect.

**Kent C. Dodds:** Yeah.

**Jerod Santo:** I'd like to stay off-topic and say can you share a picture of you in a uniform? Because I know I would love to see it, and I'm sure the listening audience wouldn't mind that either.

**Adam Stacoviak:** Yeah... Heather's got tons, she shares them on personal social media all the time, but I'll find one up and I'll throw it in the show notes this time. I was a cool high-speed soldier. \[laughter\] I wasn't at first... I was slow-speed, not cool at first, and then I was like "You know what? I've got this responsibility..." I got so much better as a soldier; I started loving the military...

I was in my very young career at that point. I was barely even in; I hadn't even officially gotten into my job yet... But when I did get to my job though - since we're on this tangent, I'll share a bit more... When I got to Fort Drum New York and I stood before my platoon sergeant - I never curse on the show - he said, "Hot damn, soldier! You are spit-shined and polished!" and he could not believe it. He could not believe it. He's like, "I've never seen anybody come in from basic training looking like you do. What did you do? Get down and get me 20!" \[laughter\] So I had to beat my face, I had to start doing push-ups right in front of him, and I'm spit-shined and polished, and everybody was like...

**Jerod Santo:** \[unintelligible 01:05:51.14\]

**Adam Stacoviak:** I was turning heads as a young -- I didn't even have any brass on my collar, which means I had no rank. I was like the lowest private you could be. I was like A1, nothing, and I was getting respect because I came in as someone who wanted to level up, and it all started because somebody gave me responsibility... And I didn't even deserve it. I was an idiot at first, and that drill sergeant gave it to me, and I took it.

**Jerod Santo:** Wow... That was definitely the most personal anecdote I think you've ever shared on this show, Adam.

**Adam Stacoviak:** It may be.

**Jerod Santo:** Kent, you brought out a whole new side of Adam.

**Kent C. Dodds:** Excellent! \[laughter\]

**Adam Stacoviak:** Off the tangent now, back into "Give people responsibility", hold the keys loosely, and the quote going into the show, Jerod, for this one is "Give commit access freely and early." So trust your community, give them responsibility; they will lead the way, they will step it up.

Kent, you had a couple things you wanted to mention? We're getting short on time because of my tangent, but we'll extend five minutes... So you've got something coming up at PayPal that you're announcing, you've got a blog post keyed up... What is this about?

**Kent C. Dodds:** Yeah, so part of being able to do open source - or my privilege, I guess, is being able to do open source at PayPal. One of the projects that I've been working on recently is this thing called Glamorous. It's taking some very strong hints from Styled Components, which is this solution for creating React components that come pre-styled, that carry their styles with them; this idea of components in CSS and JS and all that. Styled Components is awesome; I love the API, but I decided that I didn't love a couple of things about it, so I created something that's similar, that solves my use case a little bit better. So I'm gonna go ahead and publish this blog post, and I think everybody is gonna hear this in a couple of days - this will be published already. It's called Glamorous, go look it up.

**Adam Stacoviak:** \[01:08:07.22\] It will be in the show notes, for sure.

**Jerod Santo:** Are you hitting the Publish button right now, as we're talking?

**Kent C. Dodds:** I've just hit it. Yeah, that's it. It's done.

**Jerod Santo:** Yay!! Now you have to maintain this open source project, so congratulations... \[laughter\]

**Kent C. Dodds:** Yeah... I'll build a community around it, so we're good.

**Jerod Santo:** There you go. Just follow your own advice and I'm sure it'll be fine.

**Kent C. Dodds:** Yeah.

**Jerod Santo:** Very cool. Glamorous - good name.

**Kent C. Dodds:** Yeah, it's kind of fun. You'll know the logo, it looks really similar to the Styled Components logo, shamelessly inspired and permission-granted...

**Adam Stacoviak:** Nice.

**Kent C. Dodds:** Yeah, and the API is really similar, so it makes sense. It's curly braces surrounding some lipstick emoji, so... When you see it, you'll know it.

The other thing I wanted to make sure I shared before we wrap up is this thing I have on GitHub called Stack Overflow Copy Paste. This is the project that I used when I was demonstrating how to contribute to an open source project on GitHub in that course I have on Egghead. At the end of that course I invite people to make pull requests to this project as a way to learn the workflow and to follow along with the course. So if anybody listening hasn't actually jumped into open source before, or they just don't feel comfortable with the process or anything, this is a very, very low-risk way to get into it, because I will be very friendly and you have pretty much no fear of getting rejected, because the whole point of the project is it's a bunch of different Javascript modules that are basically answers from Stack Overflow questions.

We've got a flatten implementation that comes from Stack Overflow, a remove duplicates from array implementation, a sum implementation, like adding numbers together... So it's like totally bogus stuff, it doesn't actually -- hopefully nobody actually uses this module... But yeah, the whole idea is for people to get into open source, figure out what the process of filing an issue and discussing a solution, and forking and cloning and creating your pull request, that whole process can be learned from this repo.

This is something that I do because I think that open source is great, and I want people to learn how to do it, and I'm happy to help. So Stack Overflow Copy Paste, check that out.

**Adam Stacoviak:** What a teacher, man... You never stop teaching. You never stop trying to help in however you can, to get people over that next hurdle. I feel like that's everybody, Jerod... You've got a hurdle in front of you, Kent, you've got a hurdle in front of you, and somebody out there - who knows who it's gonna be - is gonna help you get over that next hurdle... And that's what you do, Kent. That's crazy. I love it.

**Kent C. Dodds:** \[01:11:12.03\] I'm very self-motivated, because you find out how much you learn when you teach. I've learned a ton from my experience teaching. It could be a little bit selfish, but thank you.

**Adam Stacoviak:** Well, Kent, anything else you want to share? Anything else that's last-minute advice, words of inspiration, next steps, call-to-action...? Anything else to share before we go?

**Kent C. Dodds:** No, I think it's mostly just like look for opportunities to serve others and give of yourself. It'll make you a happier person. And remember to focus on your own mental health and make sure to give some time to yourself as well.

**Adam Stacoviak:** Wise words, my friend. Thank you, Kent, so much for sharing your time today and for being so passionate about what you do, and for being a little selfish, too... That's always a good thing. Thanks again!

**Kent C. Dodds:** Thank you!
