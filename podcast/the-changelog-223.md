**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode 223, and today Jerod and I are joined by Mike McQuaid, the maintainer of Homebrew. We talked about Homebrew's 1.0 release recently, we talked about a lot of the changes happening. There's no more /usr/local, Homebrew now lives at /usr/local/Homebrew. To keep usr/local cleaner, Homebrew also autoupdates now, and in the seven years of Homebrew, the community has grown to nearly 6,000 unique contributors.

There's also talks of Linuxbrew, which is a fork of Homebrew joining in lots of fun stuff happening in this package manager space for the operating systems. We have three sponsors on today's show - Rollbar, Toptal and Linode.

**Break:** \[\\00:00:57.10\\\]

**Adam Stacoviak:** We're back, we've got a fun show lined up. We've got Mike McQuaid here from Homebrew. Homebrew \[unintelligible 00:02:24.24\], recently Homebrew 1.0. Jerod, what do you think about that?

**Jerod Santo:** I was excited. I think our whole community was excited. It's a big announcement from a big project that many of us have relied upon for years and years, and it's awesome to see anything hit that 1.0 milestone. Mike, congratulations on the big release and welcome to the Changelog!

**Mike McQuaid:** Thank you very much, and thanks for having me, guys. It's an exciting time for most of the Homebrew team as well, because we've been a bit haphazard with the version numbers. I went through and actually took the time before the release to go and tag all the old version through there. Some of them are multiple versions in the space of a week, and then you have the years I think between some versions, and they're all a little bit arbitrary.

Now, it's kind of giving us this chance to become a more real software project and start doing semantic versioning and start thinking about how we're doing our release process and trying to have that stable base for people to be able to rely on.

**Jerod Santo:** Adam, you had a Homebrew show back before I was a co-host of the Changelog, all the way back in 2010, episode \#35. Do you wanna give us a little of background on that?

**Adam Stacoviak:** I wish I could... I wish I could remember six years back.

**Jerod Santo:** It's a long time ago.

**Adam Stacoviak:** I can barely remember last week or last month, but just based on our own show notes, me and Wynn - when Wynn was part of this show... And it's kind of funny, because now Wynn works with Mike; he's manager-manager of somebody's manager or something like that, at GitHub. We caught up with Max Howell, talked about Homebrew... I think this show was a lot more loose then. I don't think we were quite as standardized as we are now, where we kind of go into the history and go deep like this. It was a bit more of a wing it kind of show then, I guess.

\[\\00:04:05.21\\\] It was fun talking to Max. I can't remember a single thing we talked about. I know we talked about at least Mac, beer and scrobbling, because that's what the notes say. You can check that out at changelog.com/35, or scroll pretty far back in the list of podcasts that you have there when you're a listener.

**Jerod Santo:** Yeah, so it's been a long time and definitely kind of a catch-up show... But a new show, an introduction to Mike. Mike, we like to get backgrounds, origin stories... Kind of the roots of where you began in the programming trades. Can you tell us how you got started and what got you to where you are now?

**Mike McQuaid:** Sure thing. I guess I first got interested in computers and computery things being young and when my parents brought a PC home. I guess my parents learned that they could pretty much get me to do any chore, including mind-numbing spreadsheet entry, if it was on the computer. I was always fascinated with the thing, so when the time came to go off to college, I went and studied Computer Science. I basically just got more into open source while I was doing that. Our curriculum was kind of UNIX-focused, so I ended up using Linux on my desktop, and all the fun that that produced back in 2007 using Gentoo to compile everything from source. It would take days to get my system ready...

**Jerod Santo:** You were hardcore.

**Mike McQuaid:** Well, I don't know if it was so much hardcore or it was just masochistic, \[laughter\] but I certainly learned a wee bit along the way about how software gets put together, how things build, how they fail and stuff like that. So I dabbled with that through UNIX, I started doing little bits of open source programming by myself, like publishing stuff on my website, but not really collaborating with anyone, and beyond university group projects.

I guess I certainly got a bit involved with the Gentoo bug tracker and stuff like that, and then my summer after graduating I did Google Summer of Code on the KDE project, which is the Linux desktop environment, all that GUI and stuff like that. I worked on that for a few years, and that was great fun.

I had a job where I was doing Qt toolkits - which everyone thinks is Q-T, but it's actually cute \[Qt\], which is always interesting when you refer it to someone who doesn't know this as "Oh, they are also cute \[Qt\] developer."

**Jerod Santo:** What...?

**Mike McQuaid:** Yeah, so I was doing that. Part of the job, a lot of clients back then at least were wanting stuff that would run on at least two or three platforms - Windows, Mac and Linux. So I had an environment for each of those platforms, and I had a kind of a map that I kind of picked up because of that, but I didn't really use it for much.

Then I remember one day I had some friends over, I'd do a monitor setup and I was trying to watch a DVD without tearing on my new Nvidia card or whatever, and I couldn't get a DVD to play. This was in 2008, 2009 I think, and I couldn't get a DVD to play properly. That was the day I realized that my days with desktop Linux were done. I pulled up the Mac and that worked perfectly, so I slightly move my approach onto the Mac with \[unintelligible 00:07:41.08\] before I kind of gave up.

\[\\00:07:45.19\\\] Then I used MacPorts a bit, and then I ended up working on this thing called MacPorts Dummies, which lead me a little bit into Homebrew. MacPorts Dummies was a way of pretending that a bunch of stuff was installed that was provided by RSX. I kind of knew Max, who was a friend of a friend, and we ended up meeting up, going for a beer and stuff like that. He was like, "There's this Homebrew thing I made that you should check out. It sounds like it's sort of in keeping with your interests."

I guess that was about 2009 I started working on Homebrew, and I guess since then I've been working as a maintainer and never really stopped.

**Adam Stacoviak:** That's an interesting way to go to the Mac. I guess my story was a little different. I was on Windows and it just was a better machine, so I just kind of went to the Mac and didn't look back. But moving to the Mac, that's an interesting story.

**Mike McQuaid:** It's weird, I guess, because when I talk to a lot of people... Being involved with a project like Homebrew and I'm also really obsessive about OSX styling - I still use TextMate as my main editor, just because... I mean, as much as I love things like Atom and Sublime, they don't look quite right. So everyone assumes I'd be one of those people who's been on a Mac since I was...

**Adam Stacoviak:** A purist.

**Mike McQuaid:** Yeah, exactly

**Adam Stacoviak:** What year was that? Because you might be a purist.

**Mike McQuaid:** So I guess that was 2008 or 2009. The first Mac I had was on Leopard, on 10.5, also the first version of OSX that Homebrew supported. So yeah, I've been on it a wee while at this time, but I feel like the really hardcore folks are the people who had the OS 9 machine at home.

**Jerod Santo:** Right. I was a little bit sooner to the party than you, but not much. In fact, my past is very similar, only I was on Ubuntu in college. I started off in Windows in high-school, Ubuntu in college, and just got sick of having to deal with mostly device drivers and Wi-Fi back then. The Mac was tantalizing... I think it was probably 2007, and Leopard was also my first version.

That being said, I'm far moved away from TextMate at this point. Are you at least on TextMate 2, or you're like real old-school?

**Mike McQuaid:** Yeah, I'm on TextMate 2 and I'm kind of scratching my own itches quite a bit. I've made a few bundles for it and all this type of thing... But it just fits pretty well with my workflow. As I say, I try other things, but then there's these tiny little things that annoy me, and I might just be too old and far gone at this point, and too stuck in my ways.

**Jerod Santo:** So give us a little bit of context around... You gave us how you met Max and you started contributing to Homebrew and using it a lot. Give us the timeframe around Max's transition... You're now a lead maintainer; of course, it's a huge project with thousands of contributors, and many of that is because of the way that you used the contribute formula, which has recently changed and we'll talk about that soon. But help us out with the transition where you became "the man" when it comes to the Homebrew community and project.

**Mike McQuaid:** So the lead maintainer thing is quite recent. That title, at least, is literally just something we've sort of decided shortly before Homebrew 1.0. Like any open source project, we try not to build this into a way where we run Homebrew. There's the expectation that people will come in and come out, and I think Max just ended up having a different job and was spending less time on Homebrew, and some other people stepped up and were spending more time on Homebrew. In the end, he just ended up sort of drifting out and other people ended up drifting in.

When Max left - he was the lead at that point, and when he left we kind of agreed that we'd have a sort of democratic situation where we would decide things more or less by committee, and stuff like that. There's definitely a lot of open source projects where that goes pretty far.

I think where we struggled and where we felt the pain of that coming up recently was when I was contributing a lot more than other people were, and when you have the idea that "Oh, this is a democracy and everyone gets to vote", it doesn't... I guess I read that thing about the governance models and the best one... Meritocratic is a really loaded terms and I don't think it applies in open source, but what people have described is the meritocratic governance model is almost like you have more decision-making power based on doing more work, basically.

\[\\00:12:31.15\\\] That's not commit counts or lines of code changed, but basically if you're more involved, or you're spending more time on the project, and you're kind of leading the direction a bit more, then you probably have a bit more say.

I think the lead maintainer thing came about because I was essentially gonna fill in that role, and to validate some other complaints that were made, I was maybe sort of overruling or pushing through some things and not really operating by the committee's side of things.

My understanding was that people were annoyed that I was doing that, whereas I think actually, having talked about it more and come to the lead maintainer thing, what was annoying people more was actually this disconnect between the reality of me basically leading and other people feeling like they couldn't overrule me on things.

I'm sure you've all read and heard all this stuff about implicit and explicit power structures, and GitHub as a company has had its movement through there as well. I think that's basically what the move has been is that it's moved from being an implicit to an explicit thing. As a result, it's made a few little things a little bit easier.

**Adam Stacoviak:** So there was an explicit transition then from Max to your, or...?

**Mike McQuaid:** No, I guess the transition was from Max to all of the maintainers - I think it was five or six of us at that point. Then we grew up to 13 maintainers, and then the transition from that model to being me with the majority agreeing that that was a good move.

**Adam Stacoviak:** I'm sitting here on the Contributors tab, and it's funny you say that too, that there wasn't just contributors in terms of code, but contributors in terms of effort across the project, whether it's thought, leadership, governance, whatever. I think that that's something that the Contributors tab doesn't really reflect very well, but one thing that I was thinking about on the Contributors tab is I'm looking at Jack Nagel, I'm looking at you, I'm looking at Adam V., I'm looking at Max and several others that line up there... I kind of wish we can overlap, see Mike and you and Max and Adam - see all of your graphs on the same timeline, because looking at them I can see where Max was having fits and starts during 2012, and you seemed to start to get more involved in terms of contributions.

Then it seems like when Max dipped away and stepped off to do his own thing, or go to Apple or wherever his path has taken him, is when you got more involved, and the same thing with Jack and Adam as well. It's kind of interesting to look at the contributor graph that way.

**Mike McQuaid:** Yeah, and it's interesting as well because, as I suspected you were gonna mention later on anyway, we've split into two repositories now. You've got Homebrew/brew which is the package manager, and Homebrew/core which is the formulae, and we kind of split the history between them as well. You can kind of see the kind of disquiet difference in contribution patterns between the two. There's the same sort of faces in there, but there's people who are very active in one and not really in the other. I think that was the big thing where Max particularly was always most active in the package manager. And I guess lately I've been sort of similar; I've had a reasonable number of contributions to the packages, but not nearly as much as some other people.

\[\\00:16:04.19\\\] The 1.0 release has been more of a thing around the package manager rather than the packages itself, so that's where my focus has been the last few months certainly.

**Jerod Santo:** So when you went to this meritocracy or voting-based thing, you all found that it wasn't moving forward at the desired pace that you guys wanted it to, and because you were already kind of implicitly acting as a leader - or, as you thought, perhaps overstepping your bounds but people actually appreciated it - did you end up with this flat structure where it's Mike McQuaid and then everybody else, or is there underneath that structure a group of core maintainers and then everybody else? How exactly is it structured now?

**Mike McQuaid:** We have our lingo, and I realize it varies from project to project... What we call a maintainer is basically anybody who has commit access, and historically that's always been based on you getting commit access to both repositories, you don't just get it to one. That may be something that changes in the future if we have people who are very interested in just the package manager and not the packages, or vice-versa.

Then we have contributors, which are anyone who's ever submitted a single commit to any project within the Homebrew umbrella, and then we have users, obviously, which goes without saying.

So we've moved from a model of being all the maintainers are, at least on paper, on an equal footing, to me being in charge. But the way I've had a good manager in a workplace deal with this stuff in the past is that they basically only invoked their manager status when they have to. They will always try and have a discussion and win the discussion on an equal footing -- well, not win, but convince other people of their point... And I feel like it's the same thing with us now.

The lead position is mainly just there to be able to have me be able to say sometimes, like "Okay, we need someone to make a decision here. We have two sides who are kind of equal." Or equally, there's some stuff that is important in the direction of the project, and this is a feature that other people may not feel passionately about, but I feel that this has to go in and it's important for us to have this feature, even if the bulk of other maintainers might disagree on that front.

Maybe part of that is because we started gathering analytics - which I don't wanna get too much into... But before that, I was the person who most talked at conferences about Homebrew and stuff like that, and have kind of traveled around and met a lot of users, and there's a certain amount of stuff that \[unintelligible 00:18:51.29\] it doesn't turn into an issue tracker, but you speak to the same sort of power users again and again, and you hear the same complaints again and again in person. Some of that has sort of driven the product direction of Homebrew maybe a bit more. You just realize, like "Okay, people are not filing issues because they're confused about this. This is just something that they find annoying", and people generally don't file issues about just things that are annoyances. They file them about things that are actively broken, or whatever.

**Jerod Santo:** Let's touch real quick on GitHub's relationship with Homebrew with regard to employing you, and you're the lead maintainer... Is this officially sanction work, or are you still doing it completely on the side? Then we'll take our first break and on the other side we'll talk about the new stuff in Homebrew. Specifically, we'll probably start with the split repositories... But how does GitHub play into the mix?

**Mike McQuaid:** I guess I've been at GitHub coming up to three years, so certainly the majority of my time working on Homebrew has not been at GitHub. Similarly with my previous employees... They have, I guess, paid me to work on Homebrew on occasion when I've had Google Summer of Code students through GitHub and stuff like that, or Homebrew people at Summer of Code students which have been blessed with GitHub - I've spent work time on that.

\[\\00:20:11.29\\\] In terms of day to day work, I don't - in theory at least - work on it on GitHub's time. If I'm blocked waiting for something for like five minutes, like I'm waiting for a test to finish, I'll go through my Homebrew e-mails, triage, give a little reply, whatever... Then equally, if there's something that is going to or it's currently blowing up and will affect GitHub employees - because we use Homebrew fairly heavily internally - then I'll fix that. But I don't generally do the day to day Homebrew work during GitHub time. That's mainly my evenings, weekends, spare time etc.

**Jerod Santo:** Very good. Well, I think that sets us up. Let's take a break and on the other side we'll talk about what is new with Homebrew 1.0.0. We'll be right back.

**Break:** \[\\00:20:57.23\\\]

**Jerod Santo:** Alright, we are back, celebrating, cheersing even on Homebrew 1.0 with \[unintelligible 00:22:39.08\] Mike McQuaid. See what I did there?

**Adam Stacoviak:** I like that.

**Jerod Santo:** Mike, we like to hear all that's fresh and new... We haven't covered Homebrew for many years. You don't have to go through the entire history of the source code, but I kind of just wanna camp out on what's new with the official 1.0 release. There's a lot of highlights - we have the separate repos, we have the community side, we have the move out of /usr/local to /usr/local/Homebrew, we have the Software Freedom Conservancy thing... We'll kind of work our way down through the list, but let's start with where we left off, which was that you guys split the repositories up.

One thing about the original Homebrew repository - which, by the way, is still out there; you guys have it under /legacy-homebrew - is it was always one of the most forked and starred and watched and contributed to, probably has the most PRs perhaps of almost any repository on GitHub, because not just the package manager itself, the source code that makes up Homebrew, but also all the different formulae, which is the descriptions of how packages get installed and uninstalled.

\[\\00:23:58.22\\\] When I first saw that you guys split up into different repos I thought, "Oh no, they had this great star count, they had this great fork count, this statistical legacy there that now is going to be broken." But that being said, you all have set up analytics over the last year, so that gives you better stats than just the stars and the forks for actual usage.

Start off with telling us the onus behind splitting the repositories, and then perhaps give us some insight into the analytics that you guys have been tracking.

**Mike McQuaid:** Sure thing. The problem with Homebrew before was say you wanted to get a new version of some package, you'd run brew update to update Homebrew's definitions, and now it also updates the package manager. The problem with that is if you want the new update of something and we have made some change on master which breaks something for you, then there's no way you can get the new version of OpenSSL and not get the broken thing as well. We've had that goal for a long time, to be able to separate the package manager from the packages. I mean, that's what every other package manager does.

We wanted to separate those two things out so we can provide some degree of stability. That was the first step in a process which again, is noted in the release notes, that now we kind of jump between tags. If you're a Homebrew maintainer, then you continue to track the master branch, but everyone else kind of jumps between 1.0.0, 1.0.1 etc. That gives us time to build a few more QA on the package manager itself, while still having that ruling release approach for the formulae.

In terms of stars and all that type of stuff, that still breaks my heart a little bit. I still weep for the star count \[laughter\], but it's slowly getting its way up on the new repositories. It is useful to be able to see GitHub's contributor graph and see how that varies on the package manager compared to the packages, because that's interesting.

Another thing on there, which is a wee while off probably still, but we're trying to get the package manager -- there's another thing called Linux Brew, which is like running Homebrew on Linux, and stuff like that... And having the package manager be separate means that we can separate out our package definitions, but still have the package manager itself be cross-platform, support old platforms, stuff like that. And it generally just provides as a nice tool. Who knows, maybe one day it might even be bundles in RubyGems you can use to access your stuff.

Nowadays we have, as you mentioned, the analytics, that was introduced in March, I think. That basically provides us with the ability to see -- we can't see any stuff about individual users; if I wanted to see, "Okay, this particular user - what have they done?", that's not available to us. We kind of just use a random UUID that people can reset at any time. So we track users just so we can get user counts. I've got the analytics dashboard open right now; it's kind of a slightly weird mapping for what it's gonna be used for, but it basically lets you see what commands people run in proportion to each other, what packages people are running, what versions people are running, and the really useful stuff for us is what is the percentage breakdown on stuff like OSX versions, so then we can prioritize the support on different things, and also what are the most popular packages that people install, and what options they install them with, so again, we can prioritize options and things like that.

As a whole, it basically just provides what analytics tend to do for any piece of software, which is it lets us inform our future design and inform what things we focus on based on the stuff our users actually use, rather than our speculation of what the users use, which is something we didn't have before.

**Adam Stacoviak:** \[\\00:27:49.22\\\] GitHub stars and watchers are indicators, but they're not exactly... I don't think those things are for maintainers, I think they're more for the general public to show. They can't give you that deep of insight; knowing watchers and stars - those are important, but it's not giving you deep enough insights that you need as a maintainer these days.

**Mike McQuaid:** Yeah, I agree. You certainly can't have like, "Oh, we did this, we shipped this new feature and we got 5% more stars", that doesn't really help us, whereas when we see that we shipped this new feature and our error count's gone up from 0.01% to 0.05% and stuff like that, that's more of the type of things we're concerned about. And it's particularly useful when we can go and see... If something breaks, we periodically go through and do some porting, or when a new version of OSX is out or whatever, and it's useful to be able to go through all of our packages and be like, "Okay, well this thing's broken on the new version of OSX, but no one has actually installed this since March. So let's not go and spend like three hours trying to fix this piece of software that no one is actually using." We can just remove it instead - we call it "sending it to the bone yard." That means the definition is still there if someone wants to pick that up at a later point, and pull that through, then they can do that; it's all a bit easier than navigating through the Git history if you're not a Git whiz, and it lets us kind of push away the maintenance part of that, for a wee while at least.

**Adam Stacoviak:** Well, you wouldn't think twice - when delivering an application that you do for work, or whatever - about installing error tracking, or installing monitoring, or something like that. So it's almost the same case for Homebrew. You need something to track what's happening so that you can make good decisions for the future, right? You wouldn't think twice.

**Mike McQuaid:** Yeah, exactly. I think that's what it comes down to for me. I have used a lot of these tools across I think every workplace, I've used some sort of metrics tracking. I guess people sometimes think that metrics tracking is just Google Analytics, and like "Oh, well they don't have Google Analytics installed, so they're not tracking metrics." Or "Well actually, they're probably tracking metrics in the backend, and they're not doing this because they're selling your personal information." I mean, some companies are doing that, because they are selling your personal information, but in Homebrew's case it was kind of disappointing to see that "Yeah, exactly, we're not." We've specifically designed it so that we couldn't, even if we wanted to, get anything that would be commercially viable out of this.

It's kind of disappointing when you release some stuff like the analytics, because you get some people who express obviously some sort of solidarity with like, "Okay, I understand why you're using this", and most Homebrew users are developers, so there is that. But then there's this very vocal minority who it escalates beyond that and it becomes, "How dare you have this? How dare you it be opt out rather than opt in?" My reasoning, obviously, for it being opt-out is because you can gather back the data if you're tracking the majority of people, and not just the subset of people who decide to opt in. They may well have different behavior and stuff like that, which means that you're not able to make sound decisions.

So that vocal minority got very upset, some of them, on Hacker News and Reddit and stuff like that, and then start sending me personal e-mails telling me to do all sorts of things... \[laughter\] Yeah, it's not unpleasant, and with hindsight it's funny, and I'm lucky enough to have a thick enough skin that it didn't bother me too much.

It is depressing that we still in 2016 have to deal with stuff like this, because... If there's any of those people who -- and I did say this to someone who e-mailed me... That is what kills open source. That's what drives open source maintainers away and kills successful open source projects. I had moments -- bizarrely, some of our other major maintainers had to be talked into staying in the project at all, because they were...

\[\\00:31:53.08\\\] We talk about diversity problems sometimes in open source as well. Several of my co-workers who aren't just, you know, young white men, who I talked to about the Homebrew thing, they just said "That sounds awful. I would never want to be involved with a project where I would have that abuse, for something I do in my spare time to try to help out other people."

I think it does seem to be getting better and we do seem to be as a community recognizing that this behavior is not acceptable and this behavior is not how we build software, but we don't necessarily have all the toolings and institutions and everything quite figured out how to stop stuff like that when, as you say, you're an e-mail or a Twitter message away from someone starting to be mean.

**Jerod Santo:** Well, sorry that you had to go through all that, Mike. In light of the change and the fact that you guys have had a running for a while, would you mind sharing some stats with us? Like users, or popular packages... What fruit has come from these analytics?

**Mike McQuaid:** Yes, sure. I can see the active users, which I guess is someone who's run a Homebrew -- like, there's I think 2,000 people who've run a Homebrew command in the last 30 seconds or so - there may be more than that - and then I can see their version breakdown. Interestingly, there's still a lot more people running on pre-1.0. Out of the active users right now, there's over a thousand on the 0.9.9, and then 637 on 1.0.5, 209 on the last master commit, and stuff like that.

Then if I jump through to the most popular packages, somewhat unsurprisingly, OpenSSL is the most popular package by far, then followed by package config (pkg-config). This is one of those things where no one probably intentionally installs it, but it's a dependency for a lot of things. Then libpng, SQLite - great piece of software, NodeJS, Freetype - again, probably something that not a lot of people are installing intentionally, and then Git.

It is valuable to be able to see these kinds of things, and the dropdown is quite impressive. We have OpenSSL in Homebrew itself, and this tracks Homebrew and our third-party repositories, so maybe 4,000 different packages. Of that, OpenSSL itself has like 3.5% of all installs, of all software. It's quite interesting to see who quickly it drops off, and you get below 0.1% within the first 170 packages.

**Jerod Santo:** Curious, in light of transparency in open source, the spirit of the community. Have you considered making -- I don't know if you can even do that with Google Analytics, but like an open dashboard where anybody can come and see the usages?

**Mike McQuaid:** Yeah, you can't, unfortunately. What I've been considering is doing a database dump every so often of the stuff that I'm most interested in. But again, there doesn't seem to be a trivial way of automating that, so it needs to be me manually going in and clicking through every time. That's still on my list of things to try and do to try and improve the transparency of this, and then hopefully people can see that there's nothing nefarious happening here.

**Jerod Santo:** Yeah, because they can see the source code at least, of where the calls to track are happening in Google Analytics, or calls off to Google Analytics. But it would be really cool to have publicly available the results of that data, because then you can have people draw other insights or just enjoy it, and remove that fear of what you all are tracking.

**Mike McQuaid:** And the thing that some people have asked already actually about that, people who are scientists have been asking, "It would be really useful for me, as I've worked on some piece of software as part of my PhD, to be able to put in a paper - this has actually been used this many times, or installed this many times", because that gives some - I don't know, I'm not a scientist, but that gives I think some sort of weighting or a sense of importance to the kind of work they'd been doing, which I can understand.

**Jerod Santo:** \[\\00:36:05.03\\\] Yeah. Or people who are putting the work in to maintain specific formulas - or formulae, as you guys like to call them. I'd like to know, like "Is this worth my effort? Me and six other people are using it, and I got six complaints." That's all users, as opposed to "Oh, a lot of people are really drawing value from this, I'm gonna continue to maintain it."

**Mike McQuaid:** Yeah, exactly.

**Jerod Santo:** Well, one thing you mentioned is updating. In light of those stats not everybody's on 1.0, but just moving on to some of the other new features is you guys now have auto-updating built in, is that correct?

**Mike McQuaid:** Yeah, we do. If you run brew install it will check the updates in the background by default once a minute. When I say "in the background" I don't actually mean in the background; I mean before you run the commander we'll check for updates. Now actually that's one of my favorite features in there, because it was a really fun exercise for me in performance benchmarking on the full stack. This is something I had a while ago, I was like, I want to be able to run auto-updates, because a lot of the time when things break, we tend to get a very long tail of people who haven't run the update who file the issue for something we just fixed a day, a week, sometimes even a month earlier. And I've always wanted to have that, but the updates at that time took probably about 15 to 30 seconds, depending on where you were in the world, and stuff like that, sort of minimum to do that.

That always frustrated me, so in the end I kind of poured some time into that and worked on a few things that made that really fast, and more reliable. One thing was moving the auto-update stuff from Ruby into Bash, more just because Ruby gets more upset when you modify its own code underneath it than Bash does, or at least it's easier to work around that in Bash.

The other thing that was kind of fun, but completely \[unintelligible 00:38:02.11\] thing was with me working after work at GitHub, I noticed that the slowest thing by far was doing a git fetch on a massive repository like Homebrew that \[unintelligible 00:38:12.07\] pull requests, and stuff like that. That git fetch - like a no-op git fetch when there's nothing to fetch - was actually pretty slow. I was at that time on the GitHub API team, so in my weekend I figured I'd go and see if I could play around and figure out a way to make that faster, because we have \[unintelligible 00:38:36.03\] and there's like an API call you can use to get the latest state of a branch. So I kind of tweaked that a little bit, I made it so you can pass in the \[unintelligible 00:38:46.27\] from git as the etag to that, so you get three or four unmodified if nothing has changed, and therefore not use up your rate limit and allow us at GitHub to kind of deliver that from the cache.

As a result, I flipped that git fetch operation to just being an HTTP call, and that's way faster for both GitHub to process and for Homebrew to process. So I was able to play around with that and do some parallelization, stuff like that, and now it's generally under a second or around about a second, down from 30 when you are doing an auto-update. That seemed like a reasonable amount of time for people to spend on every call, considering if you do a Brew install, the compilation and extraction time are going to be significantly longer than that anyway.

**Jerod Santo:** Life is good when you control both sides of the API, right?

**Mike McQuaid:** Yeah, it's much, much easier when you have that. It's nice to be able to jump in there and play around. But I think even if I didn't control that side of things, there might have been ways I could have played around and made it a little bit faster. But no, it's certainly easier, as you say, when you have that... And when you have very smart co-workers who I can kind of bump it off, who actually work on Git itself as their day job, and then be like "Okay, am I being stupid here? Why is this slow?" and all this type of thing in there, and then discussing an approach with them. That was pretty fun.

**Jerod Santo:** \[\\00:40:16.05\\\] Just one aspect of user experience, I think focusing on speed is key there. In fact, Adam and I were kind of lamenting a little bit before the call about certain bits of software that do autoupdate but you don't run them enough for them to ever be updated. The example - for me, at least - is Firefox, which I don't use on a regular basis, but I do use if I'm doing browser testing or for one-off purposes, and it seems like... I think they may do it in the background now, but it used to be every time I launched Firefox it would say, "Hey, we have an update."

I use Brew all the time, so I don't have that issue, but it can be the kind of thing where you don't launch it very often, and then it feels like every time you're running the Brew command it's updating. Sometimes I just gotta get this thing installed; I need this command so I can fix something that's on fire... So speed I think is important to fix that. If it happens real fast, no big deal. But in light of "There is a new update", does it automatically run that for you, or does it prompt you where you can say, "Not right now." Have you thought through those kinds of things?

**Mike McQuaid:** In terms of our commands, we have a separation between update and upgrade. Update is basically you get all the definitions in the package manager at the latest version. Upgrade is install OpenSSL 1.1 instead of 1.0. So yes, we don't auto-upgrade.

**Jerod Santo:** Sure, but I'm referring to... Say I run brew install jq, because I need to parse some JSON command line real fast...

**Mike McQuaid:** Yeah, and you don't wanna wait the couple of seconds for the update. Yeah, that's one of those things that we kind of considered, but in the end, the support burden for that is worth it for us. You would not believe how many annoying... Because again, I don't think we mind that much about the issue count or whatever, or the number of issues people are filing; the worst thing is when you get the same issue again and again and again, and the response to fix it is the same again and again and again. My attitude is always trying to automate myself out of the job.

If it's the same command we're having to tell people to run every single time and people are still not running that command, then it's like "Well, we're gonna just run that command for you."

**Jerod Santo:** \[laughs\] I think the pain is alleviated because of the small payload size of updating Homebrew, whereas with my Firefox example, you gotta download a 16 MB file, or whatever it is, so it's more of like, "Okay, I'm gonna sit and wait." But in this case, even when you do have... I run brew install jq and I'm a dot release behind, we're talking like seconds to get that thing upgraded, is that right?

**Adam Stacoviak:** That's the point where I was doing the auto-updating - when you're doing a brew install, not just brew update.

**Mike McQuaid:** Yeah, so basically a brew install now does a brew update in the background.

**Adam Stacoviak:** Okay, I'm tracking now. I heard you said that before, but I wasn't sure under which command it was doing it in the background; you said once per minute, or something. What if you do brew update?

**Mike McQuaid:** Yeah, so if you do brew update, then it will basically skip them, or skip even looking the next minute. Then, as I said, it's optimized for the no-op case where if you don't actually have anything to update there, then it will just ignore it.

**Adam Stacoviak:** And as you said, it's just definitions, right? It's just pulling back the latest things that are available to brew install.

**Mike McQuaid:** \[\\00:43:43.25\\\] Yeah, exactly. The other thing that's kind of tricky from a package manager perspective is that you have this conflict between what people want and what people need. Humans, myself included, are lazy, and if you can avoid upgrading something now and if you can kind of put it off until tomorrow, most people will. But then there's some other stuff that's like, "Well, actually that's a really big deal with security, so you need to update this now." If you don't want to update it now, then we've gotta nudge you in the right direction so that you do that, so that your machine doesn't get \[unintelligible 00:44:20.04\] and we're at least partly responsible.

It's that kind of weird conflict that you have where sometimes you've gotta just force people to do things, or not implement things that they want you to. A recent thing that could have made the 1.0 release and I kind of pruned it from there - we used to let you run Homebrew as root. You would have to completely change all the ownerships so it was root to almost emphasize that "Look, I'm really sure", but in the end we were just like, "You know what? There's a use case for this, but it's just a really bad idea." If you run Homebrew as root, while all the package managers that run as root, they drop privileges because that's what they're designed; so they will run as root, and then when it actually comes to doing an installation or whatever, they'll go and be like "Okay, I'm a user now with no privileges, so I can't do stuff."

In Homebrew, because the vast majority of our users are not running as root, we haven't implemented that, and we don't have the motivation to implement that. So if you run Homebrew as root, a makefile can now literally change any file in your entire system. That's bad... And we added a sandbox; that means that obviously you're running as the same user, and then we stop the build process from being able to write to arbitrary locations on your system. But again, to make it even worse, sandbox broke when you were the root user, so we had to disable the sandbox for the root user. At that point we were like, "Okay, this is just way too dangerous. Unfortunately, we need to make the call... We know better than other people do, assessing the risk in this situation", because we've seen what happens when there's a makefile log that starts trying to just delete random files of your system, and users maybe haven't seen that. When that happens and they destroy everything and they don't have any backups, they may not hold us responsible, but they kind of should, if we have seen that coming and we've not addressed it properly.

**Jerod Santo:** While we're talking about technical changes, let's hit on one more and then we'll take our next break. You've changed the default location of the Homebrew repository. In fact, I believe as you upgrade it we'll move it for you, from usr/local to subdirectory usr/local/Homebrew. Can you speak to that change and the implications of what it all entails?

**Mike McQuaid:** People have always a had a bit of love/hate relationship with Homebrew being installed in usr/local. The main reason Homebrew is there - originally, at least - was because that's in your compiler and a bunch of other \[unintelligible 00:46:56.14\] by default. So that basically means - with RubyGems and various other things - if you have a library in there, in usr/local/lib, usr/local/bin, then they will look in there and you don't need to manually specify your location. That works quite nice for most people. And again, when Homebrew got started, that's something that helped - again, adding to this sort of zero configuration approach that Homebrew is taking on things.

The problem with this, as time goes on and we say in our repo like, "Oh yeah, we wanna add a readme, we wanna add a code of conduct, we wanna add a bunch of stuff in our repository root", the problem with that is all that stuff ends up then getting dumped in usr/local. Then people are like, "Okay, well /usr/local/bin/wget - okay, I'm fine with that. usr/local/readme.md - that feels kind of weird to me when there's other stuff in usr/local." People were annoyed with that, and I kind of understand that.

\[\\00:47:54.10\\\] It was actually one of our users who came up with something which was, frankly, a hack, but it's never really been patched, which was that by default Homebrew's (what we call the) prefix, which is usr/local, and that's where all your files get symlinked to, like usr/local/bin etc. - that has actually remained unchanged, and that was the same as where we had the repository previously. But there was a hack you could do where you could install the repository in a different case and a different place, and symlink it finally, and then it would put the repository's files - the readme file, code of conduct, documentation or whatever - in a different path that you specify of your choosing. Then usr/local would contain just the symlinks and the installed packages.

You may have seen the usr/local/cellar directory - that's where all the binaries are actually stored, and then they're symlinked into various different locations. The problem is if we decided to move that, we would have to rebuild all our binary packages for all of our OSX versions, and that's basically a massive pain that we don't want to have to go through.

This hack that this person suggested, I tried it out on my own machine for a few weeks, and it was completely flawless. Everything just worked absolutely perfectly. That allows us now, after the move, to have all our binary packages be the same, still have all the compiler search paths be found, but now we can move stuff around in our repository on GitHub. If we want a readme.md file, or a contributing.md file, or change those file names or whatever, they can all now live inside usr/local/homebrew instead, and we don't need to worry about junking up people's usr/local.

Another final benefit from that - we would tell people to take ownership of usr/local. I'd just recursively \[unintelligible 00:49:48.15\] that so you could always write anywhere in there. The problem is Apple's OSX installers and various other tools would reset that every time. So every time there's a new version of OSX that comes out, it would be that kind of reset process and it was a massive pain for a lot of people. Now what we do instead is we create the root level directories in usr/local, get people to \[unintelligible 00:50:12.02\] instead, which our installed does by default, and then you just have those root level directories which kind of stick there. Anything else can dump files in usr/local, can change the ownership of usr/local and all that good stuff, and that doesn't affect us anymore.

Again, that's another example of somewhere where it's massively cut down on a bunch of these issues we would just see again and again on every OSX release. So yeah, it's been great. Or Mac OS, I should say.

**Adam Stacoviak:** I've actually been bit by that bug once before.

**Mike McQuaid:** Yeah, I've been bit by that one several times before; I forget that it happens, and then it happens and then everything explodes.

**Jerod Santo:** I just upgraded at 1.0 yesterday, and as far as the upgrade - because I upgraded to Sierra last week, and I just did the upgrade to Homebrew 1.0 yesterday, and I had to change ownership on usr/local, because Homebrew had set it back to root:wheel, or something like that. So yeah, I can see that happening to everybody.

**Mike McQuaid:** Yeah, exactly... And nicely now, after the migration we then tell people, "Okay, you can actually now change this back." That's now the last time. So when Sierra +1... I'm still hoping for Mac OS Sea Lion to come out, \[laughter\] and when that comes out, then hopefully these permission issues will just be gone for good at that point, which will be lovely.

**Adam Stacoviak:** That's funny. As we're talking through all this, the details, I'm just reflecting back on earlier in this show when you said that you do this Homebrew stuff, as you said, whenever you're running a test suite and it takes five minutes, or something like that... I'm just reflecting on all these details and all this complexity and all this community and all this -- how important Homebrew is to so many developers out there, how you and others do this in your spare time. That's just crazy to me.

**Mike McQuaid:** \[\\00:51:54.02\\\] Yeah, I mean, I say kind of here and there, but in the run up to 1.0 I'd sort of decided I wanted to ship it all around about the Sierra release. In the two weeks before that, I was just like doing pretty much every evening and weekend, pretty much all evening and weekend. I think we were getting to the point where my dog and wife would've not tolerated any further. \[laughter\]

**Adam Stacoviak:** We know you're a dog lover too, we can hear your pups in the background there for a second or two... They got a little cameo on the show.

**Mike McQuaid:** Yeah, I do love my dog; she's pretty great, and she's in my GitHub profile picture as well.

**Adam Stacoviak:** Cool, let's pause there then. When we come back, we've got lots of other things to talk about - Software Freedom Conservancy, the new community site, several other things happening... More community growth and maybe even more ways that the community could step in and support Homebrew and ship their own formula - or formulae, as you might say. Let's pause here, and we'll be right back.

**Break:** \[\\00:52:54.08\\\]

**Adam Stacoviak:** We're back with Mike McQuaid, talking about Homebrew. Mike, around Homebrew there's several terminologies used - you've got cask, you've got tap, you've got brew, you've got formula/formulae... I think that's changed, if I'm correct.

**Jerod Santo:** It's plural form.

**Adam Stacoviak:** It's plural form, okay. Walk us through some of the terminology. Do you tap a cask? Do you tap a keg? What is it? How does this work?

**Mike McQuaid:** I think the terminology is a bit sometimes tenuous in places and it's not quite all adding up, but a tap effectively what we call a third-party repository. That was initially created -- that was one of Max's last big features he worked on. A tap basically allows anyone to be able to have a Git repository which -- well, it doesn't actually have to be a Git repository anymore, but a directory with a collection of formulae or Homebrew extension commands that they can go and say to anyone, "Okay, here's this one command you can use to install a tap on your machine, and Brew Update will then keep that up to date, and Brew Install will then let you install from any of those taps, as well."

Actually, a fun little fact - when we split out Homebrew into the two repositories, the formulae became the earn tap. Previously, you have all the kind of central formulae and then you had taps, but now actually everywhere that contains formulae is always in some sort of tap.

**Jerod Santo:** Seemingly, that's a promotion of the tap idea, because back when I first started using Homebrew, using a third-party repository for formulae was kind of like a sketch, and you were like "Well, if you really have to, do this." Now it seems like that's very commonplace. Is that a fair characterization?

**Mike McQuaid:** Yeah, definitely. I think there's a recognition in that that a) people are gonna want to do stuff that we don't have the -- if you work at a company, you may well won't have internal tools which are installed by Homebrew through a tap, but also it's helped us with some of the really long tail stuff, because now we can say to people "If you're the only person interested in this, then you can just create your own tap and you can keep that up to date." Then, if more and more people use that - particularly now that we have analytics for some of this stuff - then we can consider bringing that into Homebrew itself. Before that, we couldn't. Not the kind of private taps that are revealed by analytics - we're careful to not do that, but within the Homebrew organization we have several taps for different things. It lets us as well kind of subdivide maintainers based on things they're interested in. We have a science tap, a PHP tap, a Python tap.

\[\\00:56:10.07\\\] To install Python, you don't have to tap the Python tap, but it provides some sort of stuff which is deeper into that ecosystem, and stuff which we wouldn't include in our main repository can kind of find a home in some of these taps instead. And these taps can be run independently and a little bit looser on some of the restrictions that we have to have to keep the core working effectively.

**Jerod Santo:** Tell us about Cask. What's Cask?

**Mike McQuaid:** Yeah, that was quite exciting. Brew Cask was originally made a \[unintelligible 00:56:39.20\] Someone basically really liked Homebrew, but they hated the fact that when you install Mac applications you have to download the Zip or the package file, the MG or whatever and move the file there. It's almost always the same process every time, and I think they were just like, "Well, why can I install my command line software beautifully, but then I have to basically drag and drop the thing with my mouse? Ugh!" \[laughter\]

**Adam Stacoviak:** That's the sound I make when I do it.

**Mike McQuaid:** Exactly. I actually quite like drag and drop... I kind of miss that a little bit in some ways, dragging the icon into the applications folder, and it's all nice and pretty...

**Jerod Santo:** You can still do it, Mike. No one's stopping, man. You can still do it.

**Mike McQuaid:** Yeah... My obsessive desire to script everything is stopping me, unfortunately. \[laughter\] So they made this Brew Cask command so that you can do that - you can do Brew Cask Install and Google Chrome, whatever...

We had a summer coach student this summer, Anastasia, who is a very smart Russian student who worked on basically trying to unify the two projects. Homebrew Cask was originally kind of almost an extension in just a tap, and because we didn't provide any sort of official API for them, they kept ending up being broken by our changes, so in the end they ended up vendoring a lot of Homebrew's code.

In Google's Summer of Code this summer, the student worked on basically de-vendoring all this stuff so that we could share a lot more code between the two projects, and de-duplicating between the two projects, so that stuff which didn't make sense to have in both wasn't in both, both in terms of source code, but also in terms of things that are installed. When they both installed identical software, there wasn't a need to have them both.

And then finally actually moving all of Homebrew Cask's package manager code into the Homebrew package manager itself. Now we have Homebrew Cask living within Homebrew itself. When you run Brew Cask, now that's part of the Homebrew package manager and part of the Homebrew release process, and stuff like that, and we're able to do stuff like share a lot more code, shared maintainers, shared testing, and that provides some guarantee as well that we're never gonna break Homebrew Cask stuff because our package manager tests are now running all the Homebrew Cask's test as well.

**Jerod Santo:** I just did a Brew Cask list on my machine and it turns out, even though I don't know what Cask is, I've used it to install Screen Hero. I believe someone said, "Yeah, just type this", and I thought "Oh, that's really cool." You just type "brew cask install screen hero" or whatever the application is, and magic happens. Then you forget that you did it, and all is well.

**Mike McQuaid:** And the cool thing that comes on top of Brew Tap and Brew Cask as well, which not many people know about, I think partly because I've not done a good job at describing it is that thing Brew Bundle - that lets you have a Brew file, kind of like a Gem file, in which you specify a list of Homebrew packages, Cask packages and Taps and eventually even Mac App Store packages as well, and then you can run Brew Bundle and it will go through that list and install any of the ones that aren't installed. You can also do the reverse, where you can dump to a file and then have that as kind of almost like a backup of everything you've got installed and all the options that are installed and stuff like that.

\[\\01:00:09.08\\\] That's been really useful for letting people almost import and export a configuration, but also for having a system-wide installation, so you can have one script which then installs all of your software. We've been leaning on that heavily inside of GitHub as well, to have that per project, so you can specify a definition of "This project requires MySQL and NGINX and stuff like that." There's hasn't really been a good way before that of kind of defining that. Often that's just in the documentation, but we can actually have it now in the Brew file, so it will install the correct version of MySQL and then start up a daemon in the background, on the system, if it's not already running. That will be a no-op if that stuff is already installed and the daemon is already running.

**Adam Stacoviak:** That Brew file is really handy for scripters. I've seen that actually I think in maybe earlier versions of Thoughtbot's Laptop project, where they're doing lots of interesting things around... They actually used to support Linux and Mac, and now it's just Mac, but it's kind of like their way of setting up a development machine, and I'm pretty sure I recall seeing a Brew file on that; that's kind of where I actually stumbled upon that, and I thought it's interesting to see, like "Here's a way you can just run a lot of Brew commands", basically.

**Mike McQuaid:** Yeah, exactly. It's pretty neat for that, and again, being able to standardize these things... I \*self-plug\* have a little project called Strap that we use inside of GitHub. It's kind of a system bootstrap-type thing. It's a different approach than Thoughtbot Laptop, because it's not opinionated at all about what stuff should be installed. If you have a Brew file in your dotfiles directory, it will check out your dotfiles directory and run the Brew file in there.

Every person can have their own almost custom system bootstrap script from that perspective and still yet have a sort of centralized way of running that for everyone, so it's been quite neat. My long-time dream - if I ever get around to it, which I probably never will - is to try and work with a few other people and see if we can get some sort of Brew file definition format which a bunch of package managers support, so that you can declare in a project that "Okay, this project needs MySQL installed, \[unintelligible 01:02:24.10\]", whatever native package manager dependencies, and that file can then be read whether you're on Fedora, or NuGet on Windows maybe even, or a Homebrew or MacPorts and have a single file which could be used to share metadata across all these package managers. That's kind of a little dream of mine, that may or may not happen one day.

**Jerod Santo:** That would be cool. I think RVM had a similar dream... Isn't that right, Adam? For RVM 3. I'm not sure if you ever got there, but it was kind of like beyond Ruby versioning; it was versioning for everything... You could just list all your, you know, "This requires Postgres, this requires Redis", for instance... Definitely a dream to get everybody involved, because that's a lot of different software projects that would need to come on board. You probably couldn't call it Brew File; it'd have to be like Package File, or...

**Mike McQuaid:** Yeah, obviously.

**Jerod Santo:** I'll submit a term - you should call it "Dependencies."

**Mike McQuaid:** Yeah, that seems fine.

**Jerod Santo:** People tend to like that one.

**Mike McQuaid:** But I'll have to have some slight pun on the name, just because I'm British and that's what happens to us. \[laughter\]

**Adam Stacoviak:** Tell us about keg.

**Mike McQuaid:** That's one of the hardest \[unintelligible 01:03:38.04\] and even the Homebrew maintainers probably disagree on what a keg actually is... But that's the directory when you install Homebrew -- a package in it. The directory uses the prefix, so this is gonna get a bit package manager navel-gazy, but the way most package managers work is they have a unified prefix. What I mean by that is when you run configure or make install on two pieces of software, the prefix you set is, say, /usr/local. Then what it does is it chucks binaries in usr/local/bin, it chucks libraries in usr/local/lib etc. That's the general way most package managers work.

\[\\01:04:22.14\\\] What Homebrew does, which was actually aped off by Max's \[unintelligible 01:04:25.20\] of another package manager whose name escapes me off the top of my head at the moment, but basically having every single package in its own prefix, by package and by version. If you go into usr/local/Cellar, you will see you have usr/local/Cellar and then the names of all your packages - usr/local/Cellar and then a subdirectory called wget and then a subdirectory of whatever version of wget is installed. Then within that you have bin, lib, all these other directories. Then what Homebrew does is we then symlink the contents of those subdirectories back into the usr/local/bin. So in usr/local/bin/wget, that's not actually the wget binary; that's a symlink to usr/local/Cellar/wget/version/bin/wget.

Basically, the benefit for that is it lets you stop software from stomping on each other. You can have software installed side by side which installs conflicting things, but they just both can't be linked at the same time, rather than being like, "Okay, we actually just can't install these two things in the package manager at the same time."

**Adam Stacoviak:** I might actually suggest after this that there actually be some sort of glossary for Homebrew, because you'll have so many terms... I'd forgot about Cellar, and we actually asked about keg as a joke, because I didn't think it was a real thing. I was hoping you'd laugh, but it's actually real... So our next one is "Tell us about pints", but...

**Mike McQuaid:** Yeah, pints are not real. \[laughter\] I mean, they are real but not in Homebrew.

**Jerod Santo:** They're real to me...

**Mike McQuaid:** Yeah, yeah... I mean, we definitely could do a glossary.

**Adam Stacoviak:** If anything, it could be an attractor to contributors because it's funny, it's just a new way to talk about your project and just have fun with what it is.

**Mike McQuaid:** Yeah, exactly. The reason why I didn't do that originally is my whole thing was I wanted to rename everything, so we wouldn't call text kegs anywhere...

**Adam Stacoviak:** Careful now...

**Mike McQuaid:** Exactly, exactly.

**Adam Stacoviak:** You were concerned about the analytics people getting you... Uff!

**Jerod Santo:** This is the real reason he wanted to be a lead maintainer, so he could rename all of the... Would you just come up with a brand new analogy, or would you just remove all analogies?

**Mike McQuaid:** I think we'd just call things "packages", or if there's an established name already, call them that - packages, prefix, whatever. But I think the argument I probably mostly agree with at this point, that pretty much every other person in the world said is that "Okay, you might make things slightly easier for new users", but at this point Homebrew is at the point where you're probably gonna confuse a lot of people who learned the existing terminology, more than you're gonna help a new user at Codecademy understand this stuff. As you say, probably the best middle ground is just have a glossary and define these things.

**Adam Stacoviak:** I guess it depends though on this changed stuff now. The naysayer army says "Don't do that!", but I think if the plan was wider adoption and agree or invitation, and if the normalizing of the puns, while we all love puns and just the play on words kind of gets played out, so to speak... If reducing that helped invite people and actually contributed to a greater project, I might be for it, but it would hurt along the way. I'd cry a little bit.

**Mike McQuaid:** Yeah, I do agree. It's maybe whether we can change some of these things whilst maintaining other things, or whatever. We could certainly maintain \[unintelligible 01:07:53.17\] nice, cute emojis we have and stuff like that, whilst maybe renaming some of these things. Yeah, it's still a source of debate and torment for us all.

**Jerod Santo:** \[\\01:08:06.14\\\] Adam sounds like he's for it, I'm against it. There you go, you split us down in the middle.

**Adam Stacoviak:** I'm not exactly for it...

**Jerod Santo:** Embrace the analogy and just... Homebrew has a personality, it has a theme. It's actually worked out better than most names in terms of like... They have kegs and casks and taps - those are things that actually make some sense now \[unintelligible 01:08:29.14\] what do you say, boneyard, or graveyard, or something? Some things just don't match. Then you get mad because you're like "Oh, we can't think of a beer-themed boneyard", but along the way I think it's helped massively, and I think it makes it kind of a joy in certain ways.

**Mike McQuaid:** Yeah. I redesigned the website with help from an Australian designer, Danielle (whose full name is actually on the website). I think that was part of what I was going for a little bit with the redesign as well, because she came up with these great new icons you may have seen. They feel a lot more playful and fun. I loved them when I sat upon them at first, because it just feels like that's the vibe of our project. We're trying to have that fun, slightly jovial or slightly silly... Part of that is the fact that we have prose guidelines, and in our prose guidelines we favor British English just because Max was British, and I was, and partly just because a little part of me - I think this is a more Scottish thing that a British thing - is I kind of just like being difficult.

I'm one of those people when I worked with Qt back then as well, when you define colors, that was a Qt color. And I would regularly name my Qt colors, variables color with a COLOUR, just because I'm a \[unintelligible 01:09:54.22\] British person. I find it funny to do those types of things. I think part of that kind of creeps into Homebrew and we do try and... We kind of have to remind people sometimes that we know some of this stuff's a little bit silly, but that's the project. We're not a company, we're not a serious business, and we can afford to be a little bit more silly even when maybe sometimes it's a little bit self-destructive, because that fun is what keeps us working on it, I guess.

**Jerod Santo:** Right. Well, now that you're getting kind of beyond yourself and talking about the community and the group of people that are all involved with it, let's change focus. We're getting a little bit low on time here, but let's talk about the social side of things in 1.0. You have two of what I would call social announcements or things that have happened at least in light of 1.0. One is the joining of the Software Freedom Conservancy, and the other is the setting up of the community Discourse. I'm not sure exactly when those things happened, but let's start with the Software Freedom Conservancy. Homebrew has joined that - what does that mean for the project?

**Mike McQuaid:** It's one of those things for open source that you don't really understand until you run a big project for a while. When your project has no possession effectively, then there's not really a need as much for a thing like Software Freedom Conservancy. The problem is when you have -- we had a Kickstarter a few years ago which was really great, that let us buy some Mac Minis which we used for our CI. As I get older - thankfully not that old, and I'm a bit of a paranoid person anyway - part of me is like, "Okay, well these CI's are in a data center that a friend of mine runs on OSP in the UK, and we have a bunch of money in a bank account, which again, I have access to, but other people have credentials too, and stuff like that. What happens to those servers if I get hit by a car? What happens when they go down? What happens to the money in that bank account?"

That stuff gets a little bit more worrying and it becomes one of these things where you think, "Well, it's actually not very responsible of me just assuming that this project will survive my health", and it also means that if I ever did want to or have to step away from the project, then the unwrangling of me from the project could be a lot more difficult.

\[\\01:12:06.03\\\] What the Software Freedom Conservancy provides is a legal entity to own these things, and a legal entity to... If Homebrew ever got sued for whatever reason, then the Software Freedom Conservancy would defend us. On top of that as well, they're a 501(c)(3) for non-Americans and a nonprofit in the U.S., which makes it a lot easier to accept donations, which are tax-deductible for individuals and corporations to provide. We've not managed to do a mass amount of fundraising yet; that's probably my next big project, to try and lean in on that a bit more, because our recurring monthly revenue is zero, but basically just all those things that kind of help provide some more infrastructure and architecture around the governance and running of the project.

**Adam Stacoviak:** I'm surprised to hear that it's zero... That there's no contributions, there's no donations... We're running low on time so this is harder to tap into - to keep using your terms - but it just surprises me that Homebrew is used by so many and depended upon by so many... I mean, I don't know that many developers out there that aren't developing at least on a Mac... More off a Linux, but not as often on Windows, although it's becoming more and more popular with Ubuntu's announcement of Bash on Microsoft and all that good stuff, but I'm just surprised... Wow.

**Mike McQuaid:** Yeah. Part of that - we're coming to personal beliefs and stuff - my whole thing is I don't do happy spending money on a recurring basis until I have money coming in on a recurring basis, but in my personal life I'm with Homebrew. So it restricts the stuff we can do with this, certain things... I would love to just be able to spin up an AWS instance to run that, but we don't have the money so we can't afford to do that. It is a bit of a pain, and it's not hit us that adversely yet, but as I say, on the flipside, we've not ever really, beyond the Kickstarter, tried to do decent fundraising for that. That's something I do want to personally do in the future.

**Adam Stacoviak:** Well, if there's some way we can help you play a role a little bit... I mean, I know that Jerod and I, we both have some passions around that and we can always talk to you outside of the context of this show to help you on that front, to give you some ideas and collaborate on that front a little bit.

**Mike McQuaid:** Yeah, that would be great.

**Adam Stacoviak:** It's something I think we have some future ideas around; nothing that's exactly solid, but definitely some passion. And anytime we hear of something like Homebrew having zero recurring revenue to do even stickers, and anything that's community outreach, not so much like just to have money... To have money to do things that are community-related or growth-related, or outreach, or anything whatsoever... You can't sponsor one of the maintainers going to a talk because you just have no funds to do any of that stuff. It's very limiting, and I think that there's so many people out there using it, there's gotta be some way you can bring in... At least a buck a user, and that would be a lot.

**Mike McQuaid:** Yeah.

**Jerod Santo:** Well, let's cover real quick, even though we're really short on time - give us the information on the community Discourse site, and the purpose in deciding for that.

**Mike McQuaid:** That's something we shipped I think on the same day as 1.0. It's basically just another way of communicating on Homebrew. We've got a mailing list on our channel, we've got the issue tracker, and none of them are quite... They will feel slightly formal in their own ways, and I think that Discourse has been kind of great since it started actually, just allowing people a little bit more of a freeform place to talk, to post about issues in a little bit of a looser way, and people to be able to help each other, as well. It seems to be \[unintelligible 01:16:00.22\] which is nice, which is that it's not just the maintainers who are jumping in and helping people there, and a bit more of a kind of discussion, and stuff like that. It's been good.

**Adam Stacoviak:** \[\\01:16:12.06\\\] One more thing I've heard you mention earlier and I'm just curious what the tying is together, because I've seen the footer, it's maintained by Linux Brew, but earlier you mentioned Linux Brew, but it also says it's the Homebrew package manager for Linux. Is there an affiliation there? I know one of the maintainers crosses over, at least. What's the relationship there?

**Mike McQuaid:** I think originally Linux Brew was just a fork, and then we kind of created that and they just kind of had a bunch of patches on top of Homebrew. But then with 1.0, we have what I call a generic backend, which is a backend that doesn't assume anything OSX or Linux-centric, and can kind of run the tests, run an install on Linux and Mac. Now that we have that backend, we're trying to do more porting to try and get things from Linux Brew's brew package manager fork into Homebrew itself, and then hopefully - maybe at 1.1, or whatever - we'll have a point where the Linux Brew brew can go away entirely and we can run that entirely off Homebrew's brew and we can have a unified package manager that works on a OSX and on Linux.

**Adam Stacoviak:** Nice, good stuff. Is there anything we missed in this conversation? Jerod and I had quite a list to talk here pretty much just based around your 1.0 announcement, but is there anything we've missed that you wanted to make sure we talked about?

**Mike McQuaid:** I don't think so. I think that was everything I've wanted to talk about. I looked at your little notes about the common questions at the end of the show; I'm not sure if we're doing them or not, but I think we've touched on almost all of them anyway, so...

**Adam Stacoviak:** Well, there's one we wanna camp out on, which is essentially a great invitation from you and the other maintainers of Homebrew to the community. There's a lot of listeners of this show from all walks of open source, all walks of developer life, so if you were putting out a widespread invitation to those who could step into Homebrew and help out in various ways, what would those ways be?

**Mike McQuaid:** Yeah, that's a great question. I think basically just getting involved at all is great. We have a thing in our Homebrew/brew/readme about the easiest to get involved, which is basically we have an audit tool for running through things and seeing if there's any little violations of our style. That's a great way to get started and get familiar with our workflow, but I think the main thing I would just say is anyone who's sort of in the wider Homebrew community is just be nice to each other. I think open source, as I kind of touched upon a little bit earlier, has a problem with retaining and welcoming people, particularly people from more diverse backgrounds than it's historically been. That's something I feel like everyone can do, whether it's on Homebrew or on any project, to kind of make the open source ecosystem a better place - try and just be nice, be friendly, be helpful, be kind to people in Homebrew and on any open source project, because that's the way we're gonna grow this community and that's the way we're all gonna make better software together.

When you don't have those things, people stop working on things like Homebrew. When you don't have those things, people don't wanna work on open source, and that hurts us all, really.

**Adam Stacoviak:** We need kind of like a universal MINASWAN - Matz Is Nice So We Are Nice. It could be like our Maintainers Are Nice So We Are Nice.

**Mike McQuaid:** I like that, that's nice.

**Adam Stacoviak:** I think \[unintelligible 01:19:36.16\] everyone says they're nice and it's a variation of nice, but maybe they're not nice; maybe there's a project out there that's just lead by somebody who's a complete jerk, or not a very nice person, so therefore their community is not very nice. I think when we look at the leadership of Homebrew over the years, starting out with Max, and the leadership that stepped up over these years, you've all been very nice. There's no reason not to be nice back.

**Mike McQuaid:** \[\\01:20:05.18\\\] Yeah. Well, we do try to be. The thing that I think is important to remember is, again, when you're saying everyone thinks they're nice, is you're as nice as the way you treat the person you are angriest with, the person you are most disgusted with. It's not when it's dealing your day-to-day, it's when you're really angry or frustrated or disappointed or confused. Your behavior in that situation is what we're asking you as open source people and equally myself as well - that's the stuff we need to work on. Because it's very easy to be nice in the times where you think things are great, but it's harder in the times where everything is broken and your house is on fire.

**Adam Stacoviak:** That's true. It's actually a good example of when people are actually nice, it's when they're angry, or should be angry or could be angry. That's totally true.

One thing I wanna mention to the listeners before we close out is that we have this e-mail called Changelog Weekly - I don't know if you subscribed to it or not, Mike, but every week on Saturday... And Jerod, now it seems like Sundays have kind of been a better day for us; we've just had such business going on between the new site going out, three shows, lots of stuff happening around the business front...

**Jerod Santo:** I've been changing our verbiage to "every weekend."

**Adam Stacoviak:** Every weekend, yeah. I think Saturday has been a great day traditionally for us, but Sunday has turned out to be the day we actually end up shipping this e-mail. In that e-mail - the most recent one, issue \#124 - we mentioned Homebrew 1.0 and many other awesome things. If you're not subscribed to that, go to Changelog.com/weekly, subscribe... All we ask for is your e-mail, but if you put your name in there we greet your nicely in the e-mail. The name is optional, so don't feel like you have to. A lot of people read that e-mail; we include our latest episodes and everything in terms of open source, software development encouragement, things like Mike is talking about here, with being nice and stuff like that; a lot of stuff around software development. If you don't subscribe to that, Jerod, what have we got? Sad faces or happy faces?

**Jerod Santo:** Emoji sad face.

**Adam Stacoviak:** Emoji sad face. Mike, do you subscribe to this? Just curious.

**Mike McQuaid:** Yeah, I do, as of three seconds ago.

**Jerod Santo:** \[laughs\] That's all we ask, that's all we ask.

**Adam Stacoviak:** What's your favorite issue? Just kidding.

**Mike McQuaid:** My favorite issue is the next one.

**Adam Stacoviak:** \#125, nice.

**Jerod Santo:** You're gonna love it.

**Adam Stacoviak:** You're gonna love it. Now we have a lot of pressure on us to please Mike.

**Jerod Santo:** I don't wanna see an unsubscribe on Sunday. I'm gonna e-mail you nasty things.

**Adam Stacoviak:** That's right. Yes, that's the way we do it. But that's what I wanna mention in closing, just because we mentioned Homebrew's 1.0 announcement recently in that e-mail - a great place to mention that. If you listen to this show and you don't subscribe to that e-mail, you're just missing out; that's all I can say. Do that now, take our direction. That's it for this show fellas, so let's say goodbye.

**Mike McQuaid:** Goodbye, guys.

**Jerod Santo:** Goodbye!
