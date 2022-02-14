**Jerod Santo:** Hisham, first of all, thanks for coming on Maintainer Spotlight. We appreciate it.

**Hisham Muhammad:** Yeah, thanks for having me.

**Jerod Santo:** And I guess I should start by saying thanks for htop. I've been using htop for years, and I even have a long-standing bash alias that says "If htop is on this machine, alias top to htop", because it aims to be a better top, and it certainly is, in my opinion... So I use it whenever possible.

**Hisham Muhammad:** Oh, thanks. It's appreciated. I have that alias as well.

**Jerod Santo:** I think a lot of us do... So we're here to talk about not just htop - you have lots of things going on; GoboLinux, you have other projects that you're interested in, things still not announced quite yet, but coming soon... And htop just hit 3.0. This was a big release, maybe not so much because of what was in the release, although there are features in there, there are a lot of updates, a lot of bug fixes in there... But really how 3.0 came together, because this was long-time kind of unmaintained by you. Do you wanna tell the story of your recent htop history and what happened?

**Hisham Muhammad:** Yeah, sure. I can go through that story. Well, htop 3.0 - after maintaining htop for over 15 years, htop 3.0 was a surprise to me. I literally woke up one Saturday morning and I had a Twitter notification that someone @ tagged me in a news post about the release of htop 3.0... Which said "Htop 3.0 released. The project has been taken over by a group of maintainers after a prolonged inactivity from Hisham", from myself. So yeah -- well, I jumped out of the bed to check-- \[laughter\]

**Jerod Santo:** \[04:12\] This was a pleasant surprise. This was not like "Oh no, someone hacked my machine!"

**Hisham Muhammad:** Yeah, so I jumped out of the bed, and I just straight ran it to write a reply on GitHub, because there was an open GitHub issue with the title "Is this project still maintained?" I wrote a response there, and I started the response with -- I don't have it open here to get it literally, but I pretty much started with "First of all, I'm very happy to see this", because I'm sure that everyone who saw this news and who knew me as the maintainer would have questions, like "What happened?"

So I ended up writing this long post on which I explained what went on... In that post I say a lot of things, and one of them was that my first reaction when I saw that tweet was, to be honest, one of relief... So essentially, at this moment I'm retiring from htop maintainership. I saw the whole thread that was going in that GitHub issue about asking if the project was maintained; people were going like "I wonder if he's okay." Everything was super-respectful and friendly. Someone said "Well, his GitHub activity continues to be green." You know, the tiles with your activity...

**Jerod Santo:** Right.

**Hisham Muhammad:** But I wasn't answering the emails, and all of that... So yeah, what happened there was really that at one point -- htop has a long history, and as time went on... The project really started as a way for me to -- in a typical free open source software scratch-your-own-itch, take something that you're annoyed by and try to fix it... So I started the project many years ago, and at one point I considered it pretty much done, like for my own use. And then it was maintenance that went on... And I started to take longer and longer breaks from the project. Sometimes it would take like six months, and then I would look back at it, merge a couple of PRs, and fix something here and there, and make another release... For a long time, it was kind of a low-key maintenance thing, for years on. Like, if you have used htop for a long time, you've noticed it pretty much looked the same for a long time, and it has become this sort of like reliable, dependable thing that's there, and works the way I want it to work.

At one point I started looking at CP, and some other things; like, you don't expect the copy command to change overnight, or something like that... So yeah, it felt pretty much done to me. And those breaks kept getting longer and longer, and eventually at one point I had an email filter that just sent everything that mentioned htop to an email folder, which I would occasionally - maybe like twice a year - look at it and do batched maintenance. But as you said, I'm so involved in so many things... And I think we're gonna touch on the point of burnout more deeply later, because it's an interesting topic...

At one point I realized that I hadn't looked at the project for a whole year, and I felt a sort of sigh of relief, like "Oh, that was refreshing." I wrote it down there in that post, I'm mentioning this. And then I realized -- I started actually thinking about handing over the project, but I've never done that before for an open source project, like to find someone to pass it on, and if you find it to be sort of a burden to you, do you wanna instill that burden on others? You feel that mixed feelings about your responsibility to the project...

\[08:02\] But then along that mix of emotions, months flew by again, and I did nothing. And when I realized -- I guess it was a year-and-a-half... And fast-forward to that day, when the announcement came. Basically, I told this whole story there, to show my side of what's going on, what was happening... And the reaction has been overall positive from all sides. The new maintainers - I got in touch with them, and I apologized to them for having to have that one-side decision of forking the project, which I understand is not the ideal way of doing things... And I said "Okay, all is well when it ends well."

At the same time, I made myself available for any of the transition matters... My old website now redirects to the new one, which has a much cooler domain, by the way - htop.dev.

**Jerod Santo:** Cool domain, yeah.

**Hisham Muhammad:** And that's what's happened, basically. Now I'm very happy that it's an actual group of maintainers. It's a collective now. I think the project is in very good hands, and I'm very happy for how it turned out. To some people my reaction might have been a surprise, but as I said, I think this is free open source software working as intended, and it has been overall positive from all sides.

**Adam Stacoviak:** Well, you got that email filter there that filters out htop, and coming back to it once in a while is one thing... Because you need those natural breaks. If you don't think something needs to be advanced, or in your expression of it, you mentioned how it was sort of done to you... But you mentioned there was a couple other people that tried to reach out to you about changes to it, and maybe that's sort of the feedback loop being broken, so to speak, of a maintainer or a creator of a project not really hearing the community... And that's kind of what happened, right? You had filtered the emails, and people were trying to reach out to you to sort of collaborate, I suppose, in this new GitHub fashion - "new GitHub" meaning like the last ten years of GitHub (or more), of how it's become more and more collaborative... But they tried to reach out and you just were in and out of the project as you saw fit, because that's just how it worked for you. Is that right?

**Hisham Muhammad:** Yeah, that's right. And I see different projects in very different ways. In open source everything always falls under that same umbrella, of -- you know, based on the licenses, and all of that...

**Adam Stacoviak:** Yeah.

**Hisham Muhammad:** But the nature of projects is very different... Because for me, htop was always this kind of like one-person hobby project; there was never a developer team, or any of that... And I am part of other projects which are more collaborative, and you feel that sense of responsibility, and communicating, and all of that... But for htop, back from the start - in like 2004 - it was a very different world back then. You're talking about like GitHub in the last ten years, but this was started back in the days of SourceForge, for those of us who are old enough to remember... And the dynamics were very different. It would have a mailing list, or something like that...

And many of the licenses in free software, they come with the whole thing, like "This is offered as is, with no warranty", in capital letters... And again, sometimes projects have this implied notion that "We're responsible to actually be available whenever someone reaches out", or something like that... But in that sense, no warranty comes with that as well. Sometimes people will just -- you know, like "Here's something I did. Here's the code. If it's useful for you, feel free to use it... But I'm not really on the hook for answering the emails in a timely fashion, or any of that." Of course, I like it when I reach out to other free software maintainers and they're responsive to me...

\[12:05\] And I, as I said, at the same time I have another project where I'm the maintainer of the Lua language package manager, LuaRocks, and that has an ecosystem around it, of other developers who develop Lua modules and put them in the repository... That is a very much alive project, that needs that tending to, that housekeeping... Whereas htop was this kind of hobby, weekend thing where sometimes I will hack on it for a while, and sometimes not... And I treated those very differently. I guess at one point I started that email filtering thing as sort of an organizing thing, like "Oh, I can't look into this right now, but I don't want it to slip away in the inbox mess." I'm just setting everything htop aside, so that next time I look at htop, in my next round of playing with the project, I will get to this...

**Jerod Santo:** Right.

**Adam Stacoviak:** Well, it makes jumping back into things a little easier if you've got sort of a collective, but you don't wanna be distracted, because it doesn't require daily maintenance, or even monthly maintenance. It's more like...

**Jerod Santo:** ...in the meantime...

**Adam Stacoviak:** "...when I wanna look at it, this is where I go", and it's easy, so you will procrastinate less, and maybe there's a lot of psychological things you could do to yourself to sort of be productive with what matters most today. This kind of reminds me though, Jerod, of something that Nadia said recently when we talked to her, which was like -- not really a one-to-one, but more like "If it's public, it doesn't mean that it's participatory."

So not so much that htop wasn't open source and available for others to participate, but more like - as you had said, Hisham, it's more like "It's a one-person project. It doesn't need a lot of people involved in it." It's not active like maybe LuaRocks might be, so you just weren't really paying attention to the fact that others might wanna share their opinions and interact and progress the project, as natural open source kind of is today. Would you agree with that?

**Hisham Muhammad:** Yeah. Because in fact, there were many patch releases of htop which were mostly based on me merging community contributions... And then I figured "Okay, I'm now gonna do a round of maintenance on this in which I'm gonna look at all the PRs", which takes time; sometimes assessing the validity of a PR actually takes longer than it takes to write it, because some people will just send you a change, like "Okay, I tried something out, and it kind of works for me", and then I had to look at "Will it work for everybody? Will this crash any other corner cases?" and things like that. What about the systems that I can't test myself? Ever since htop became portable and wasn't a Linux-only thing, that increased... Because someone might come out of the blue and send you a huge patch with support for a new operating system, which you have no way to test.

**Jerod Santo:** Right...

**Hisham Muhammad:** This has happened. I've gotten a huge patch, which was very intrusive, with many considerable changes for adding for IBM AIX support...

**Jerod Santo:** Did you merge that?

**Hisham Muhammad:** I don't even know what the status of AIX is nowadays. It's kind of a legacy Unix by now... And I looked at it, it was this huge patch, I have no way to test it, and probably no way to maintain it myself... Like, okay, what if anything goes wrong and somebody complains that something is not working? Or what if this breaks something else? So at that point, for that one patch I just let it slide, and said "Okay, if you folks want to run it on AIX, I guess you guys can maintain it on a fork with it, and essentially do the maintenance of that."

On the other hand, the Solaris one I did merge in, because there's the whole OpenSolaris, illumos and the subsequent systems that do follow on that tradition... And I was like "Okay, that will have more of a living open source community around it, and I might be able to ping more people to help me out on that one."

\[16:03\] So yeah, even that baseline maintenance work, that you do in batches - sometimes it can be significant... But yes, of course, there were lots of people who had reached out to me over time, and it's amazing getting those patches... At one point I joked around and said "Yeah, the software is writing itself", because all I'm doing is clicking the Merge button. There were htop releases - even as far as like ten years ago - which had not even a lot of code from myself, like lines of code which I've written myself. It was mostly merging patches. For stable projects, that sort of becomes a norm over time.

**Jerod Santo:** What I've found interesting about this thread - it probably wasn't interesting to the people involved; it might have been frustrating to them - was how they were kind of becoming htop archaeologists, like "What's going on with this project?" Because the initial "Is this maintained?" issue was open all the way back in March; here we are in September, I think you replied a couple weeks ago... So the story began in March on this thread, ended at the end of August... And in the meantime, like you said, you were doing other work. You have your LuaRocks, you have GoboLinux, you have -- I think some of your work is also open source, or public on GitHub... So like you said, the GitHub contributions were happening, maybe you were posting to your blog, I don't know if you were tweeting, or whatever... In the meantime, because you had that email filter set up, you weren't seeing any of this activity.

And it's fun to read, they were like "Well, it looks like the guy is alive and doing well... He's just not replying here", so they were starting to figure out like "Okay, what's going on here?" And eventually, people stepped up, which - like you said, this seems like very much an open source success story, because you've had this desire to hand it off over the years. It's kind of done to you, it does what you want it to do, maintenance is a burden, but one that you're willing to do every once in a while for a while... But if you could have had a reliable person or people maybe five years ago, maybe three years ago, whatever it was, you probably would have handed it off then... And by matter of circumstance here, you just kind of ignored it, filtered it to a place you weren't looking, and people just popped up out of nowhere and said "Hey, I can maintain this." That's somewhat rare; it happens, but it doesn't happen all that often... And there were a lot of people who just stepped up and took over. Pretty cool.

**Hisham Muhammad:** Yeah... It's funny to think about it, because yes, I was working at GitHub, I was tweeting, life was going on as normal. The way you described it, I was thinking in the back of my head - it's so funny, it's kind of an observation of the state of technology and the way we communicate nowadays, and all of that... Because if it was in the '90s, someone would have called me on the phone, I guess, about this... \[laughs\]

**Jerod Santo:** Right...

**Hisham Muhammad:** And I think what happened specifically in my case - it also had a lot to do with the burnout angle of things... Because one of the things that I mentioned in that message that I posted that Saturday morning was that at one point in time I had a conversation where I was talking about burnout, and open source maintenance, in which I said "Well, if a project is unmaintained and important enough, then it will be eventually forked." If people actually need, if there is a concrete need for the fixes to get in and for things to move on, they will. And I wrote that, and after writing that, after posting it, I recalled what was the context in which I actually said that... And it was actually at one of the Google Summer of Code Mentors Summit sessions, for which I have been for a number of years a mentor at that event, mentoring students on open source for the LuaRocks project. And we had that session, where it was all like a room full of open source maintainers, and we were all talking about burnout...

\[20:03\] And people were talking about that feeling of responsibility that they had for their projects, and how they felt that they could never take time off, and all of that, and how pressured they felt about that, and how that was one of the things leading to burnout. And at that point I mentioned, "Actually, I'm here for LuaRocks, but I'm also maintaining htop, and I kind of take regular breaks from that project", and people stared at me with wide eyes, and going like "What?! You don't look at it every single day? What if someone has something...?" I go like "Well, if something's critical, I'll probably get to know it sooner or later." That happened at one point... There was this crazy bug hitting Apple, Mac systems, in which there was a kernel bug in macOS, which htop by trying to read its state of threads, it was consuming some resource from the kernel... And it turns out that opening htop managed to crash the macOS kernel.

**Jerod Santo:** Wow... Congratulations. \[laughs\] Quite a feat!

**Hisham Muhammad:** Yeah. At first, I looked at it and I was like "Well, that's Apple's problem. They should fix their kernel." But that was like the most commented thread on the history of the project, with like 200 messages, or something like that... And I was like "Okay, I'm gonna put a mitigation for this, until Apple gets its act together." So I did that. So I kept that in mind; I thought "Okay, if something gets critical to that point, I will know about it, even between my breaks." And I guess this htop 3.0 was kind of a similar event... But otherwise, we can't let ourselves -- it can get super-overwhelming, and I understand that as htop is important for me and for lots of people...

As I said, the fact that it was forked meant that it was really important for someone; important enough for people to put in that effort, and I feel super-flattered, and I feel like it's probably one of the things in my professional career as a software developer that I'm the most proud of, having written this project and having seen it become an open source success in that sense... As important that software is, people's mental health and all of that is more important than that.

**Jerod Santo:** Totally.

**Hisham Muhammad:** So when I was in that session, I was talking to other open source developers, which - they felt super-pressured and super-unhappy with that situation, and not knowing what to do... What I told them that day was like "Hey, take breaks if you need. If something happens, things will eventually sort out by themselves", because the software is out there, it's in the open... That's something that we can do in open source. If the project was proprietary, even if it had a huge user base community, and I decided to disappear, there would be nothing that could be done. People would have to try to write it again from scratch, or something like that... But then it would not have been an option. Open source does give you that option, so maintainers should keep that in mind, that they should take breaks if they need.

**Jerod Santo:** Right. It might also be in a sweet spot in scope. I didn't look at the lines of code and all that, and how complex of a project htop is. Conceptually at least, it seems like the kind of thing where if you're gonna hop in and maintain, if you have pull requests, you have bug fixes, you have minor things - is it the kind of project were you could grok it after a little while, and start to dink around? Or is it massively complex?

\[24:03\] Because sometimes a piece of software has the value -- like you said, if it's valuable, somebody will fork it, somebody will maintain it. Sometimes the people that are relying on it don't have the skills, and they're not gonna have the time or the money that require the skills. They would love to maintain it, if they could, but they can't. In this case, it seems like there's some people who are willing to and able to maintain htop.

**Hisham Muhammad:** Yeah, that's a great question... And yes, that does factor in. I think for htop's case, while everyone likes to believe that they write clean code... Right? \[laughs\] ...and I always felt that the codebase was approachable, given that the number of PRs I got over the years, and that people would add features and send in stuff... So I was never too worried on that regard. I have seen projects that went unmaintained, which ended up in this situation that you described, in which people say "Oh my god, this is super-important, but the codebase is inescrutable", not because it's badly written, but because it's ultra-complex, and things like that.

In the case of htop, I don't think it to be super-complicated. I actually was complemented by the new maintainers. They said "Okay, thanks for maintaining it." One of our out-of-bands emails after the 3.0 release, they said "Oh, thanks for having -- it's been fun to work on the codebase", and I was like "Okay, glad you like it. Enjoy!"

**Jerod Santo:** It's always nice...

**Hisham Muhammad:** As I said, it's a matter of how needed the maintenance is to people, and what are the stakes... Because at the same time -- when I look at the new maintainers, some of the emails were like @redhat.com, @debian.org... They were coming from established organizations, established names in the open source world. That feels reassuring, and it feels like "Okay, these folks will have the time and the resources to keep maintaining it", so that feels good... As you said, even for complex projects.

That reminded me of the OpenSSL situation after Heartbleed... And people were like "Okay, everyone is using this", and large companies at one point stepped in.

**Jerod Santo:** Stepped up, yeah.

**Hisham Muhammad:** So I guess it's a matter of that.

**Jerod Santo:** Well, I guess a shout-out is due to a few folks... Nathan Scott is one of the people who stepped up and kickstarted the fork. There's an account called FasterIT out of Germany; another GitHub account who seems like they were involved in the takeover. Anybody else -- the cool thing is, because htop is so prevalent and has been around for so long, it's that it's in all the repos. You can apt-get it, you can yum-install it... And I did see people from Debian hopping into that thread, saying "Yeah, if you guys wanna maintain this..." Because one of the problems is if you hadn't showed up, taking over maintenance would have been much more difficult, I imagine, because it's not just the source code, it's the distribution, and I'm sure that you have some sort of interaction with the distributors. Is that right?

**Hisham Muhammad:** Yeah, that's right... And let's give a shout-out to Nathan Scott, and also to Graham Inggs) and Daniel Lange (I don't know where in the world he's from, so whether I should pronounce that in an English or German way). And yes, I got in touch with the maintainers of a few distros to confirm - "Yes, moving on for the next releases. Get the upstream from here. Htop.dev is the new upstream." And that very morning I made a point of redirecting the website to the new one, so that the URL pointed to, so that would be a clear indication... And also, now under my personal GitHub account the repo is now archived, and the readme points to the new one.

\[28:07\] We didn't transfer over the repo, because the new one had already been kickstarted, and had new issues, new PRs, and we didn't wanna override any of the new activity. At the same time, I think it's good to give the new maintainers a clean slate.

And as I said, if any of the old PRs is super-important, they will be ported over... So they got in touch, and I left comments in the old PRs, telling people to "Hey, consider reopening there in the new repo if you still want this merged", and all of that. I understand that it's important that I got involved; I think it does help a lot. As I said, if something like this happened -- and I'd never actually foreseen this to happen, but if something of this kind would have happened, eventually I would expect to get involved.

**Break:** \[29:04\]

**Jerod Santo:** So you seem to have a pretty healthy relationship with your open source projects. The ability to step away I think is a skill, or it may be a personality trait which you have... I'm curious on the other hand, when you hand off something which you've maintained for very long, which you've created - this was your brain child, this was your baby for all these years, and you've given it to a bunch of strangers... Does that concern you? What if they destroy htop and it sucks after this? Is there any sort of those feelings, of like maybe it's gonna not be maintained the way that I would want to, or as well as I would do it, any of that?

**Hisham Muhammad:** Yeah, that's an interesting question, and probably something that a long time ago, a younger version of me might have worried about... But I think over time you rethink things. The older versions - they will always be there, right? If that's my open source legacy, and people wanna--

**Jerod Santo:** With your name on the commit messages... Right?

**Hisham Muhammad:** Yeah, if people wanna check out what was it like when I was involved, it will always be there.

**Jerod Santo:** Right, true.

**Hisham Muhammad:** But at the same time, I'm happier to see it live on, in that sense. Because I think that's the ultimate success of an open source project - it outlives its original maintainers, and it carries on. So in that sense, the way I look at it nowadays, I think that's the ultimate success, to be able to reach that point.

I have other projects which I would love to retire from, but which I don't know if there would be new maintainers. I'm actually actively thinking about this now - now that I've seen this happen once, should I be proactive on this?

**Jerod Santo:** It can happen, yeah.

**Hisham Muhammad:** Yeah, it can happen; should I be proactive and say "Okay, we're looking for new maintainers"?

**Jerod Santo:** What have you got? What projects are you looking for new maintainers? We happen to have a podcast with software developers who listen to it, so...

**Adam Stacoviak:** That's right. \[laughs\]

**Jerod Santo:** ...are you looking for maintainers? I mean, put up a sign.

**Hisham Muhammad:** \[32:19\] Yeah... As of now, LuaRocks itself is a project that I'm sort of overwhelmed by nowadays, because I've been lead-maintaining it for a long, long time. That project started in 2006, I guess...

**Adam Stacoviak:** It's a long time.

**Jerod Santo:** Is there a team around you for that one?

**Hisham Muhammad:** Yeah, so around LuaRocks there are other maintainers, but it's very much on a whenever-I'm-available basis as well. They're not regular maintainers. I keep LuaRocks going as part of my work as well, so this is something that I am involved with because we use it at work... But I would love to see someone step up and take the lead in the project, so I could still be involved, but not in a leading position... And I'm trying to figure out how to do it, because sometimes in projects inertia is very strong. People will not say "Hey, I would like to lead" if there is someone else leading, and all those kinds of things.

And regarding my personal relationship with my project, I've realized that -- well, GoboLinux, which is this super-experimental alternative Linux distro that I started back in college with my college friends... Which - I use it to this day; if you look at my laptop, it's this super-hacky, running all sorts of experimental stuff, including the distro... It's super-hacky, including this distro that we maintain with a very small group of people... And that kind of project is one that we also maintain. Every couple of years we get together and we cook up a new version. It's not for general use, at all.

When I look at it -- I had this bunch of projects which I started in the early 2000's, and which I have been maintaining for a long time... And at one point in time I was like "Yeah, most of what I do now is maintenance, and I haven't started a new project in a long time." And I started to feel this itch of starting new projects, and having more freedom to be creative again. And as life goes by, there's work, and you have a lot less time to do that... And the few time that I have for open source projects, I wanted to spend in more creative ways... So that had to do with me stepping away from htop for so long, because that's the time that I had to try new things, and all of that...

**Jerod Santo:** Well, if you wanna find a new maintainer for LuaRocks, what you do is you create a folder in your email, and you send all your LuaRocks stuff to that...

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** ...then you ignore it for six months, and then Boom! Someone's gonna pop up.

**Adam Stacoviak:** There you go. The recipe.

**Jerod Santo:** Here it is.

**Hisham Muhammad:** Yeah... \[laughs\]

**Jerod Santo:** That's the formula, we've found it.

**Hisham Muhammad:** Yeah, as funny as that sounds, that comes to what I was saying earlier about the different nature of open source projects, right? Because LuaRocks has this live server, LuaRocks.org, with people uploading things, downloading things...

**Jerod Santo:** Right... Just a different beast.

**Hisham Muhammad:** Exactly. I maintain the CLI tool; the server component has a different maintainer. Shout-out to Leaf, who maintains the LuaRocks.org server... So that project has a community around it, and it has that different maintenance style as a necessity. So for that one I could never do that, and nothing of that sort ever happened with LuaRocks, because things go into my inbox, and I do check it out, and have a different maintenance style for that project. Depending on the nature of what you do, some different maintenance styles come with it...

\[36:01\] So for LuaRocks it was kind of different, and I'm assuming it will be somewhat more difficult... But then again, there's the bus factor and all of that; if I disappeared for real tomorrow, I'm sure eventually things would be sorted out, because LuaRocks is used quite a lot by the Lua community... So now, seeing what happened with htop, I think "Okay, it's possible to do this. I just have to figure out the way to adapt to a new role."

**Adam Stacoviak:** Yeah. You'd mentioned relief in particular though in your response, and even at the start of the show you mentioned that your response, while you got this notification of 3.0 for htop via Twitter, so this not normal way to be told about changes to your project - you weren't pissed off, you weren't upset.

**Hisham Muhammad:** Not at all.

**Adam Stacoviak:** You were relieved.

**Jerod Santo:** Happy.

**Hisham Muhammad:** Yes, yes.

**Adam Stacoviak:** Well, maybe the juxtaposition of this with LuaRocks, if you got a Twitter notification tomorrow there was a new lead maintainer of the CLI tool for LuaRocks, would you be relieved or would you be upset?

**Hisham Muhammad:** I would be happy for that, as I said. I would consider that to be a mark of success for a project... And in the end, we have to keep in mind - in open source people throw around that word "community" a lot as this kind of like random concept, but in the end it's really about people. Recently, in the Lua community I had someone who I consider a friend, even though I never met him personally, who passed away suddenly... And we had to -- some of my projects I had handed over to him in the past. I had made the coverage analysis tool for Lua, LuaCov, and he had been maintaining it for a few years after I had started the project and maintained it myself for a few years...

And so -- well, there was this whole commotion in the community with his passing, and we had to scramble, "Okay, what happens with his projects now?" I sort of inherited back the ones that I had passed to him, and took it on myself as a personal matter to figure out what to do with those projects moving on, and then some of the other projects; the community got together to get the necessary patches merged, and new releases out, and all of that... And it's a pretty strong wake-up call to you about "What does really matter here?" It's really a community of people who care about each other, and who got to know each other through the work that they do... But in the end, when you build a community of people, you have to keep that in mind.

**Adam Stacoviak:** Yeah.

**Hisham Muhammad:** Because of the pandemic -- the Lua Workshop was supposed to be held in Germany this year, and it was canceled... I remember a couple of years ago the Lua Workshop was in Lithuania, and a bunch of us flew over to Lithuania from Brazil, from France, from the U.S, from the Netherlands, from all over... And at one point I was like "Yeah, I come to this workshop because of you folks", to meet the people who have become my friends over the years... Not so much about Lua itself, or the talks... We go there and we give talks to each other, we present the talks, and there's always new people who are getting into the community and getting to know folks... So yeah, this is super-important, and in the end it's a huge part of why I do open source nowadays, why I keep doing it...

**Adam Stacoviak:** Well, you seem to have a deep connection to other people... And going back to the relief, the relief was from what though?

**Hisham Muhammad:** \[40:10\] Yeah, because you kind of have that sense of lingering guilt when you're not responsive, if you take the time to -- so you have to balance "Okay, now I'm taking this break for myself. Okay, but what if I was on the other side, and I had this bug that was hitting me every day?" At one point I'd get so annoyed that I decide to hack on it and fix it. Then I fix it, then I open a PR and I send it over, and I say "Okay, please get it into the next version", and I go months without an answer...

**Jerod Santo:** Yeah... I've been on that side of a relationship before with a project... A couple of times.

**Hisham Muhammad:** Yeah.

**Jerod Santo:** Not where it's so -- like, I can live off of my own fork, or I can just depend on that and I'm okay; it's not like a huge "My life is ruined" or "My business is ruined" scenario... But like you said, you take the time, you're usually somewhat angry, because it's not working the way you need it to, and you have -- there's ramp-up time; like, figure out "How do I contribute to this thing? Where do I even put this in? Am I gonna break it?" There's all of the questions... Like, "How do I talk nicely?" You do all the work - and it can take hours - and submit a patch... And then it just never goes anywhere. I've been on that side, and maybe you have as well. As a member of the open source world you kind of go on both sides. Sometimes you're the maintainer, sometimes you're the submitter... And I wouldn't say it hurts, but it definitely sucks when that happens.

So I can see, from your perspective, the guilt of knowing "Well, I've got all these PRs out there, I've got these open issues, and I can't look at them because I'm living my life, and all of the reasons I've stated", but they're still there, and those are real people on the other end of those PRs.

**Hisham Muhammad:** Yeah, it comes from acknowledging that it's real people on both sides, as you said... And on one hand, your rational self thinks that "Yeah, I never gave an SLA for my open source users..."

**Jerod Santo:** Which is 100% true.

**Hisham Muhammad:** Which is 100% true. And then on the other hand, you go like "Yeah, but that's not how I would like to be treated myself."

**Jerod Santo:** Exactly.

**Hisham Muhammad:** But it doesn't scale. You're only one person, and if I was to give the kind of prompt, in-depth, thoughtful response for every communication that comes my way, on all of the projects that I'm involved with, at the ideal level maybe that would take my entire weekend, or there won't even be enough hours in the day, or something like that, if you're running a one-man show project like that, or something... So you have to weigh those thing... Some things are just not scalable in that sense.

**Adam Stacoviak:** Well, you feel guilty for not responding or not showing up, but then you're sort of trapped, so to speak, because there is no playbook, that I'm aware of at least. And if there is one, let's put it in the show notes, or highlight it more, of how to be a one-person(ish) maintainer. Maybe take contributions, as you metioned, as you've been doing before; the code writing itself, so to speak, as you'd mentioned... But how do you care about something like this, be the creator and maintainer of it for so long, but then be able to hand it off in a way that lets it have life, doesn't ruin it, as Jerod mentioned before, and there's just no -- it's kind of icky, right? There is no Easy button for it, so you just never do it. You just sort of procrastinate, you kick the can down the road a little bit further, because there's no--

**Jerod Santo:** Yeah, because you don't know how.

**Adam Stacoviak:** Yeah, it's not easy to do. There's no right or wrong way, or there's just not playbook for saying "Hey, this is how you begin to hand off a project."

**Jerod Santo:** \[43:59\] There's no obviously right way.

**Hisham Muhammad:** Yeah, I 100% agree. And even if you're not wanting to hand it off or you just want it to keep going, but in a maintenance style that makes it sustainable... And one thing to keep in mind is that there are a lot, a lot more open source projects which are one-person shows like this... Because when we think of open source, you can think of like the huge projects, like GCC, the Linux Kernel, and all of that. And when people go "How do I contribute to open source?", "Yeah, you start with the tiny patch to some project", and people usually point folks to huge projects, and all that...

But you know, if you look at the GitHub archive and things like that, there are so many projects which are -- most of the repos are one-person only, and many of the ones that are used a lot... I see a lot of that in the Lua community, because of the LuaRocks repo. It's a lot of modules, so if you look at something like -- a lot of times, many times bigger, like npm; how many of those packages are maintained by a single person? And yeah, there is no playbook on how to deal with that.

I think what we're doing here in this conversation helps. Because I think part of it is for people on both sides of the table to understand the social contract that's established between maintainers and users, especially for things like developer tools, and things like that - we have this additional angle in which often the user is also a maintainer of something else... But in many cases, for many types of software that's not the case...

So yeah, I think step one is an understanding of what goes on on both sides, and sharing experiences, like "Okay, this is what happened for this project, these were the circumstances, these are the things that went well, these were the things that went not so well..." I do not consider this to be a fully-smooth transition. As you said, there was this whole thread that went on from March until now, which could have been easily avoided, and I totally take the responsibility for that. We're happy that the outcome was positive...

But yeah, it's important to share those experiences within the open source community at large. That's why I'm happy to be here, talking to you guys about this... Because we need to learn how things happen, and slowly try to improve them.

**Jerod Santo:** Yeah. Well, that's the reason for this series, the Maintainer Spotlight series - it's so that we can share the stories of maintainers, the wins, the losses, the accidental successes and all the things... Because there's so much that goes into it, and because open source is such a broad thing. We're starting to have some formalization via Nadia Eghbal's work with Working in Public, about how to even talk about different types of projects... Because it's so diverse that you can't just say "Well, this is how you hand off a project", because there is no "This is how you hand off a project", right?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It's different every time. And sometimes it goes great, and sometimes it goes terrible. So yeah, I think sharing, creating a community around maintainers, providing more conversations that say "Oh, I listened to that. What Hisham did actually helped me out in my project, because X, Y or Z." So hopefully we have some of that effect. But you'd think over time we could maybe aggregate some sort of a knowledge base, or like a starting point, like "Hey, I'm burnt out. I need to hand this off. Where do I start?" Maybe we can start to create those kind of resources... But it's difficult and lacking at the moment.

**Hisham Muhammad:** \[47:58\] Yeah, I fully agree, and it sounds like a great idea. I think one good first step is recognizing the different types of projects, the different types of communities, the different types of maintenance styles... As I said, I've been engaging in multiple different maintenance styles at the same time. For htop I was taking this hobbyist, once-in-a-while approach. For LuaRocks -- LuaRocks is also this kind of old project, which is also kind of in maintenance mode; we're not making any earth-shattering changes on it at this time... But it's important enough for a community that we want to keep it working. And if anything breaks, it gets immediately noticed and it has this -- the whole server-side aspect has this very much like online effect, like it has to be up... So that requires a different maintenance style.

At the same time, I do open source at work, so when you have an open source project that's backed by a company, that has a completely different maintenance style... And sometimes you have projects that it's like you do it once and throw it away, and then you say like "Okay, I don't expect to get any kind of maintenance to it, but I'm gonna just put it out there in case it's useful for someone", in which case you might even mark it on the readme, like "Yeah, it's just here, but don't use it in production." I've seen lots of projects like that.

So yeah, all of these sites exist. Maybe we should start talking more about this, giving those styles names, so that, you know, "This is a project of type X. This is a project of type Y", and then people would immediately understand and not have a stigma of the kind of interactions that they will or will not get from it, and things like that. So yeah, I'm all for having those types of conversations.

**Jerod Santo:** Yeah, so Nadia Eghbal has come up with a taxonomy that has four types of projects... And it's based on the relationship with user growth to contributor growth. Your project htop would be what she calls a Stadium, because you have one or very few maintainers, and the user growth grows dramatically, but the contributor growth stays relatively small.

Then there's a project like LuaRocks, which - I'm not sure if that would be a club, or... What was the other two types? I don't know them right off the top of my head.

**Adam Stacoviak:** I'm blanking...

**Jerod Santo:** There's clubs, there's stadiums... Foundations play into it - what's that one called? Anyways... I need to go read the book again, and do my studying. But that particular taxonomy - I'm sure our listeners are yelling into their airpods, awe... get it right  - is derivate. It's based on observing a project and saying "Based on the project's relationship with its users and its contributors, it's X, Y or Z."

But what I think would be also useful - and I mentioned this to her and she seemed to have some excitement around it - is what if you could explicitly state what you want your project to be? Not "This is what it is because this is how it worked out", but give this project a name - "This is a tool for me" or "This is a club. Come join my club." We had to come up with the names. But you could actually - people are using the readmes to set some expectations, like "Pull requests welcome" or "Hey, you can look at my code, but it's not really participatory." People say those kinds of things. But I agree with you, that if we start giving names to these styles of projects... Not what they end up being, but what they want to be upfront. That could be your step -- you know, "Add that to the list of things I do when I open source something, is I give it a name of what style it is." Because then you come to their source code and you know immediately what to expect from that particular project.

**Adam Stacoviak:** Let me close the loop here, because I happen to have a PDF of her book right here...

**Jerod Santo:** \[51:59\] Oh, good. Yeah, remind me.

**Adam Stacoviak:** I just went ahead and searched it... So to quote the book, it says "Focusing on the relationship between contributors and users, we can think of projects in terms of their contributor growth and user growth, and this gives us four production models: federations, clubs, toys and stadiums."

**Jerod Santo:** Toys... That's the one I couldn't remember. Yeah, so the federation is -- yeah, I was pretty close.

**Adam Stacoviak:** Yeah, you were pretty close.

**Jerod Santo:** So that's a start.

**Adam Stacoviak:** Yeah. I think that's important too, because naming things - something we say on Brain Science, and a lot of why I find this interesting is because there are a lot of psychological tie-overs to what we talk about on Brain Science, where we really focus on what we know about the brain to transform our lives, whether it's habits, or working in teams, or dealing with burnout, or stepping away to get unstuck - all these fun things - or the power of our choices in our lives... You know, we've gotta think about naming things to tame things, and that's what happens here - because Nadia is able to give a taxonomy, and an example, naming them helps us all as a collection, a community, to tame the idea; what does it mean to be a federation, or a club, or a toy, or a stadium, as an example of open source. So names really give us all something to anchor to... And that's a great thing. But it takes somebody to take that first step - in this case it was Nadia - to give us those models and those names to anchor to.

**Hisham Muhammad:** Yeah, I fully agree with that. I think it makes a lot of sense. Usually, what happens is that people realize after the fact what the project ended up turning into... Because often when you start -- whenever they start, they're always a one-person show anyway, and sometimes going like "Okay, I'm starting this and I want this to be a federation" can sound like a super-lofty goal, and you don't know if anyone is gonna pay attention to your project or care about it, or if you're gonna be able to build a community, so people might be reluctant on that...

**Jerod Santo:** There are times when - like when Kubernetes came out of Google, for example.

**Hisham Muhammad:** Yeah, but that comes from Google.

**Jerod Santo:** I know, but again, that would be an opportunity for them to state what this project is, right?

**Adam Stacoviak:** Like current status, essentially. Like "We aspire to be a stadium" or "We aspire to be a federation, but right now we're a toy."

**Jerod Santo:** "Currently a toy, but I might become a..." Yeah.

**Hisham Muhammad:** Yeah, you make a good point. Not all projects start from a single person. They might start from a company, and they might start with a huge backing from day one... So it's part of that. It ties into not only the relationship between users and maintainers, but also funding, things like that.

LuaRocks has had this weird history over time. The project was actually started back when I was doing my masters, and we had this industry/academy joint research project for the development of Lua, because I was doing my masters over at the University PUC in Rio, which was where the Lua language was created... And so for that, I had funding to kickstart the project. I was not doing it as a hobby, as a part-time thing, so that was my dayjob for two years, as I was doing that.

After the research project was gone and there was no more funding, for a few years I kept maintaining it on like a volunteer/hobbyist basis, just because of my attachment to the project, and all that... And we were talking about that sense of responsibility, like "Okay, now this is out in the open and people are relying on it."

Every now and then I would actually do a consulting gig that was coming from corporate users of it, and now I'm working at a company which uses it, so I'm again effectively being paid to maintain it... The funding story for it has changed over time, my relationship with the project has changed over time... These thing are very dynamic, which can be a complicating factor...

\[56:04\] But yes, having names for things - I remember in the early days of open source, when people were talking about the cathedral, and the bazaar, to compare development styles, and they would call it "Oh, open source is like this, and proprietary software is like this... You know, like a cathedral..." And even that is not precise, because for example the Lua language itself, my advisor, who was my masters and Ph.D. advisor, who was the creator of the language, Roberto Ierusalimschy - they have at PUC-Rio a team of three professors who single-handedly develop and maintain the Lua language, the reference implementation (the language and its implementation), and it's open source, it's MIT-licensed, and they've been doing this since the mid-'90s. They do it to this day. They take no contributions or patches; all of the code is written by those three people. They have a mailing list, they take feedback, they help run the Lua Workshops, they're super-friendly to the community and all of that, but they say "No. No, thanks. We're academics. The result of our work goes in papers", and they're subject to that whole academic lifestyle, which is very different from open source community...

And then they go like -- I don't know if it's because they wanna state in the papers that "This is our original work", because of academic restrictions or whatnot, or if it's just the style that they personally prefer. Because time and again, they said "We'll take ideas/suggestions, and then we'll implement it ourselves... But thanks, we don't want any contributions."

So it's 100% a cathedral, but it's been open source from day one... So whatever works for the maintainers.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Well, that makes me think of the clear communication, and the need for a good feedback loop. As a maintainer, as a contributor, as a user, that feedback loop and the clarity required - so those three, this example you gave, their community is probably more cool with "Hey, they don't take contributions because they've been pretty clear with the expectation as a user, or as a would-be or a desire to be contributor.

So not so much to call you out, but more like if that feedback loop is there for your users to say "Hey, I take frequent sabbaticals. Don't be offended." The SLA wasn't there, of course; less pointing that out, but more so to say -- my takeaway is a couple things; it's clear communication, and that feedback loop that we all desire, because it helps us to reduce our anxiety, or concerns, or whatever... And then the other side is the kindness that's required. Because as you'd mentioned, it's software, sure, but it's really a community of people. And what I see that played out with this htop 3.0, all that played out was those folks were very kind to you. They didn't think that Hisham was ignoring them, and he's a bad person... In many ways, they were regarded and concerned of like "It seems like he's okay because of these reasons", as Jerod has said earlier, and I think that's what we all need to lead with - this nature of kindness... Rather than what could have played out, which is "This person is terrible, because he had this repo/project that is very useful, they're not responsive", and they could have said a bunch of nasty things about you, but they led with kindness, and that's my take - the need for clear communication and lead with kindness.

**Hisham Muhammad:** Yeah, for sure. This was a super-positive experience, and I feel like I've come out a better person out of it, from what I've learned; as you said, in terms of communication and all that. And also, to participate in this episode in which the kindness really went both ways, in the sense that, as you said, they didn't think I was a terrible person... And at the same time, I didn't think "Oh my god, they stole my project", or anything like that.

**Jerod Santo:** Right.

**Adam Stacoviak:** Yes.

**Hisham Muhammad:** \[59:59\] So in that sense, the kindness really went both ways, and I think it becomes a multiplier. I've never had so many heart emojis in a GitHub comment all my life, and I probably don't expect to have it again.

**Jerod Santo:** \[laughs\] Well, on that front, let's give a shout-out to afontenot, the person who opened this particular issue back in March, "Is this project maintained?" Because a lot of times that very first nudge, that first comment, that first issue sets a tone. And they start off by saying "I want to emphasize right at the outset that I don't believe project maintainers have any kind of obligation to the community to continue working on a project. I'm very grateful for htop and all the work that has been put into this thus far." And then they go on to say "Is this project maintained?"

That's a great way to set a precedent kindness and respect and empathy, before you go ahead and say "Is anybody maintaining this?" Instead of just saying "WTF. Why aren't you maintaining this?" They really did set a tone, and that tone remained the entire -- I mean, I read most of the thread; almost everybody was positive, and they were adding to the conversation... Like I said, it became this archaeology, "Where is Hisham?", you know... And then once you hopped in, it was kind of a love fest. So really, we see a lot of drama in GitHub issues. This is the opposite case. This was pretty cool.

**Adam Stacoviak:** Yeah.

**Hisham Muhammad:** Yeah, I felt like it... And it's a great point that you made, how setting the tone was something that kind of like guided the conversation... And also, that first person said -- I don't recall the exact words, I don't have it open in front of me, but it says "I'm not volunteering to become the maintainer", or something like that. Something you mentioned earlier - not everybody has the skills, time, inclination, whatever...

**Jerod Santo:** Totally.

**Hisham Muhammad:** But that was a huge contribution to the project. That one message. Sometimes it's all you need to do. And this is what I see a lot... As you said, sometimes there's a lot of drama on GitHub, or on the internet at large... But generally, my relationship with open source, with free software, those communities has been positive, in that sense. I feel this thread is actually representative of my life with free and open source software, really. If I fly out for a conference, whether it was FISL (International Free Software Forum) that happened here in my neighborhood, in Porto Alegre, Southern Brazil, every year, where people from all over Latin America would fly here... Or in Brussels, at FOSDEM, where the European free software folks get together... It's always generally positive. We see a lot of -- sometimes the drama gets over-amplified on the internet... But when it comes to people meeting face-to-face - and I know that meeting face-to-face is not something available to everybody, so we have to be mindful of that. Whenever we've got the chance to meet people face-to-face, or even over a video call, as I'm talking to you folks - that's a way of having a more personal connection - we have to carry that to our online written communications and interactions.

\[01:03:18.04\] I feel that -- I kind of have sort of a pet peeve with the whole code review culture and what it is... I notice that even the style of writing that people use when they're doing code reviews is kind of different when they're sending a message on Slack, or something. When I noticed that, I decided to become more consciously informal, and go like "Hey, it looks like something like this is missing etc. \*emoji\*" Not in a forced way, but - okay, I'm gonna talk to this person the way I would talk to them in-person, rather than "This seems inappropriate at line 375." You feel like the schoolmaster, grading someone's PR, like "This is acceptable. No, this is unacceptable." So I think it boils down to this as well, how we communicate and how we interact with people. It makes a difference.

As you said, the way the conversation starts is the way the conversation flows. To that - yeah, for sure. That was super-important.

**Adam Stacoviak:** And I'm so grateful that that's the case here. I think I mentioned it before - my takeaway is "Lead with kindness" in these scenarios... And because of that, we can point back to this not as a hostile takeover, but as a kind takeover of this project. And we can all look back at this as an open source community and say "This was an example of things working out well, and people being treated with respect and empathy, and having compassion", rather than the drama that can sometimes ensue... Because I think we forget that we are literally talking to other humans. It seems so logical - I suppose illogical, potentially - to think like that, but other humans... Be authentic. Talk to people with kindness and act as if they're there on the other line, reading your words, rather than just simply -- I don't know, like a machine...

It's easier said than done sometimes, but that's my hope. This conversation and this example gives me hope that we have this opportunity in open source.

Hisham, thank so much for 1) coming on the show, and being open and honest in sharing your side of the story and all that it is, and even what this project meant to you; LuaRocks as well, and your contribution to open source, and being a person that can point back to doing things in a kind way, and caring about actual people, and showing up, and whatnot. Thank you so much, Hisham, for this time you've shared with us. We appreciate it.

**Hisham Muhammad:** Thank you folks for this space where we can talk about this. I know this has a huge audience, and I hope this conversation becomes useful for more people who are perhaps in similar situations, where we can spread this kindness and make sure that this is the norm in free and open source software, and software in general, and life in general. It goes beyond software, right?

**Adam Stacoviak:** That's right.

**Jerod Santo:** Thanks, Hisham.

**Hisham Muhammad:** Yeah, thank you.
