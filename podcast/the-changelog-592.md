**Adam Stacoviak:** Bryan Cantrill is here on the show, solo with me, which I think might be -- honestly, I've interviewed lots of people, but this might make my entire career. I've been a fan of you for so long. For real.

**Bryan Cantrill:** \[laugh\] Really?

**Adam Stacoviak:** And I'm just like such a fan of what you're doing currently... But also, we have to talk about where you've been, to where you've gotten to... So I think we talked in the preamble of like "Are you comfortable? Can we take pee breaks? Can we go long?" So we'll see what we do here. But the plan is "Don't stop, don't quit, until it's all out."

**Bryan Cantrill:** Let's do it. Let's go deep. Yeah, absolutely.

**Adam Stacoviak:** Do you have a lot of fans? Do you think -- do you have a lot of popularity? Do people like you a lot, Bryan?

**Bryan Cantrill:** You know, my kids say that "Dad, you're not famous, but you are nerd famous." And I have to say, it's kind of like the perfect level of fame. It actually just happened a couple days ago, I was in Chicago and someone came running ater me in the airport and stopped me to get a selfie, and explained that they love what we were doing...

**Adam Stacoviak:** Oh, gosh...

**Bryan Cantrill:** And you know, that stuff is great. I think it's terrific. I love that what we're doing is connecting to so many people. So I think it's terrific. But I don't know that I would want more fame than this. This is just fine with me.

**Adam Stacoviak:** Were you wearing an Oxide T-shirt, or something? Or were you wearing a Joyent T-shirt?

**Bryan Cantrill:** Yeah, Oxide. Yeah.

**Adam Stacoviak:** Oxide. Okay. So they were like "Looks similar... I know that brand. That must be..."

**Bryan Cantrill:** Exactly. "That's the guy."

**Adam Stacoviak:** Okay. "Let me run up to that person, because I feel comfortable enough to embarrass myself just enough to get the selfie."

**Bryan Cantrill:** I think it's great.

**Adam Stacoviak:** I don't have a selfie with you. Now I feel like this is like -- have we met face to face? I don't think we have.

**Bryan Cantrill:** I don't think we have. This has just been in the conversations. Yeah, I don't -- I mean, it feels like we have, but I don't think we actually have.

**Adam Stacoviak:** Yeah, it's such a weird thing in our world, isn't it? You know somebody, in quotes "know somebody" for so long, seemingly... And here I am, just a podcaster, and here you are, a world dominator, changing computing forever, so you say... And I just can't compare, you know? I just can't compare.

**Bryan Cantrill:** Well, we've never seen one another's legs... Right? That's always -- like, can you see someone's whole body? There's always that little bit of a shock, of like "Wow, this person is taller than I would have thought, or shorter than I would have thought, or this person is more average than I would have thought..." \[unintelligible 00:07:13.04\]

**Adam Stacoviak:** Yeah. You came up recently, I think it was in the post show... And I mentioned - this was on Tuesday; I mentioned I was talking to you... And they said "Have you seen the video of Bryan yelling into the server?" Do you recall this, where you were yelling into the server? I haven't found the clip yet... And you're trying to like predict latency, when you scream... Like, do you recall this?

**Bryan Cantrill:** Oh, for sure. So it's actually not me. I am the videographer. It's my colleague, Brendan Gregg, that's actually shouting at the drives.

**Adam Stacoviak:** Okay.

**Bryan Cantrill:** \[07:45\] And oh, for sure, I recall everything about that. That is very present in my memory.

**Adam Stacoviak:** When was that?

**Bryan Cantrill:** That was in 2008, and that was between Christmas and New Year's, 2008. And Brendan and I were solo in the office. Actually, the full backstory there is that a couple of weeks earlier we were trying to debug a latency outlier in a JBOD. Just a bunch of disks. So we had a single disk that was an outlier. And it was very perplexing... We were kind of staring at it, trying to understand "Why is this drive exhibiting worse latency than every other drive?", with my colleague Eric Schrock at the time, Adam Leventhal, and a couple other folks... And we were about to head to lunch, and Eric said -- the actual lab which was running the JBOD was next door to our office. And it's like "Well, why don't we go look at the JBOD before we go to lunch?" And I'm like, what you mean, look at the JBOD?" Like, we're gonna go like -- wait, what are we possibly going to see?

**Adam Stacoviak:** Right. Just disks, sitting there, doing their thing, right? They're plugged in, they're on...

**Bryan Cantrill:** Right. Are you gonna see like a raccoon chewing on one of the drives, or something like this? \[unintelligible 00:08:53.17\] what we're gonna see in one of the drives. But like, "Sure, why not? Let's go look at the drives." And actually, it's one of these interesting object lessons that when you're debugging a problem, you should always be open to asking questions that you think you already know the answer to, because you may learn something.

So we went in, and we were looking at the drive, and in particular Schrock actually pulled the drive out... And when he pulled the drive out, the drive was actually -- all of the screws in the bracket had worked their way out. And the drive itself was just hanging on the connector. And so what we were actually seeing was vibration in that drive. And so the drive was --

**Adam Stacoviak:** Which is bad for a drive.

**Bryan Cantrill:** It is bad. And in particular, this is a spinning media. This is not a flash drive. Vibration is bad in general, but it's extremely bad for -- I mean, a rotating media, spinning disk drive is a miracle of physics. It's amazing that it works at all.

**Adam Stacoviak:** It is, yeah.

**Bryan Cantrill:** They're very sensitive to vibe, very sensitive to thermals... And it was very eye-opening, because the drive was not reporting any errors. The drive was merely reporting these latency outliers. So we were all kind of marveling at this; you know, we replaced the screws, and the drive worked fine, and kind of marveling about it... And Brendan was reflecting, it's like "It would have been really nice to actually -- let's recreate that problem, so we can actually show it again." And he was trying to experiment with ways to induce vibration. And so one of the things he thought about was like "Well, maybe I can emit some sounds." So he was writing a Python program to emit various sounds to try to hit a resonant frequency of a drive, or something.

So by this point, like I said, it was between Christmas and New Years', and he and I were alone in the office... And Brendan comes running into the office from the lab next door, and says "You've got to see this", and runs out. And Brendan's the kind of guy that when he -- he doesn't really run very frequently. If Brendan's running, you should run the same direction that Brendan's running, right?

**Adam Stacoviak:** Okay.

**Bryan Cantrill:** So I'm like, "I don't even know where I'm going", but I started to run after him. And he says "Watch this." And he has our analytics up, it shows the real time latency, and he screams at the drives, and you see the latency all spike up. So he hands me the video camera, and I'm like "We've got to video this", and I video him screaming at the drives. A two-minute long video... I was laughing during it, because I was basically seeing it for the second time. And we uploaded it to -- there was a relatively new website at the time, YouTube... It had been around for maybe a year and a half, something like that...

**Adam Stacoviak:** For sure.

**Bryan Cantrill:** And I'm like, "Let's upload it to YouTube." So we upload this video to YouTube, and thinking like "This will get like 1,000 views. It'll be kind of fun. We'll kind of show some of the things we've done in terms of the storage appliance." I mean, I believe that thing has got like 4 million views at this point. The views are kind of crazy... And every so often it gets another like huge wave of views as it starts -- the YouTube recommendation algorithm recommends it to people.

\[12:19\] So it's a video that's endured, and it was seen -- so this is when we were at Sun Microsystems together... That video has been watched more than any other marketing material that Sun put together, that Sun developed. If you take the next, I believe, 10 put together, that video has been viewed more than they have been. It's only Sun's Super Bowl ads -- Sun had some very ill-advised Super Bowl ads. The Sun Super Bowl ads - two Super Bowl ads - were viewed obviously by more people, but... And you know, Sun was the kind of company where it didn't even occur to me to like ask permission before we did that... And fortunately, the marketing folks were pretty forgiving. They were like "One thing we do wish though is like -- you didn't actually mention the name Sun Microsystems at all." I'm like "Oh, did we forget --" Like, no company name, no logo... It's like "Oh, sorry about that. We've just mentioned Fishworks."

**Adam Stacoviak:** Right...

**Bryan Cantrill:** But yeah, I definitely remember that video very, very vividly. And then YouTube was convinced that I was like some early YouTube star, and I was trying to tell it that like "No, we're a one-trick kind of pony here."

**Adam Stacoviak:** This is accidental. Not on purpose.

**Bryan Cantrill:** This is accidental, exactly. Brendan was the talent.

**Adam Stacoviak:** Just showing the world how we work.

**Bryan Cantrill:** That's exactly right. Just showing the world something that we thought was pretty interesting.

**Adam Stacoviak:** Well, I think -- so I went and found it... I was thinking to myself, "Geez, Adam, why don't you know search YouTube in prep for this, and find this video?" So I searched "screaming into the server", which seems accurate... But the title of it is "Shouting in the data center."

**Bryan Cantrill:** Shouting in the data center, yes.

**Adam Stacoviak:** And this is on your user, your personal user on YouTube.

**Bryan Cantrill:** Yeah.

**Adam Stacoviak:** So this is the original, 15 years ago.

**Bryan Cantrill:** 15 years ago, that's the one. Yeah.

**Bryan Cantrill:** 4.2 million views. Does that sound accurate?

**Bryan Cantrill:** Yeah, that's it. That's the one. \[laughs\] And my kids are like "You idiot. You could have been an early YouTuber, and you fumbled your own future." My kids view this as just like, I'm a dismal failure because I didn't actually capitalize on this early success. But I'm trying to point out, like - look, Brendan was the on screen talent. I was just the one holding the video camera.

**Adam Stacoviak:** Right.

**Bryan Cantrill:** And it was very much just reflecting something that we thought was an interesting property of a system we discovered.

**Adam Stacoviak:** So going in on the technicals of latency from vibration, I would just call that loosely... Like, the screaming and the shouting creates vibrations... What exactly happens? Going beyond this awareness -- now you're aware; did you go further to root cause, "Okay, what is actually happening inside the spindles that creates latencies? Does the drive just spin less fast? What happens?"

**Bryan Cantrill:** No, the drive is spinning at a constant rate. 7200 RPM. But the pressure wave of the sound is blowing the head -- it's moving the head out of alignment, and it's getting what's called a non-repetitive runout. So the head is losing its track. And the fly height of these things is actually extremely low; it's really vulnerable to these kinds of things. And these are before helium drives, and there are other things that I think would arguably change the dynamics today... But they're just -- they're vulnerable to that kind of disturbance, so it's pretty easy to knock the heads out of alignment... And then they get retracked; they're able to figure out, "Okay, I've gotten knocked out of alignment, and I'm able to retrack myself and perform the read."

It's -- I mean, maybe "a tragedy" is a bit too strong, but we don't really... You know, hard drives are fading pretty quickly, they're being replaced by flash, because they are so mechanically finnicky. There are a lot of problems with a hard drive. We experimented for many years with making that rotational velocity faster, but that has gotten really diminishing returns. So we had like 15k RPM drives, and they may even made 20k RPM drives... But relative to the access of flash -- like, there's no comparison. Flash is much, much, much better.

**Adam Stacoviak:** \[16:16\] Yeah. Skip the spinning, just move to something different, that actually has better technology... Because at some point you've got thermodynamics that are going to push back, and physics to push back on... Like, you mentioned helium... I'm imagining that the reason for helium -- and I don't know all the science behind hard drives, but I know that the fly height of the head that reads the data off the disk is minimal. There's micrometers -- I don't even know what the term would be. Like nanometers...?

**Bryan Cantrill:** So the fly height... And I learned this - we deployed a lot of \[unintelligible 00:16:44.28\] Because talking about the importance of thermals in the data center for hard drives... And the fly height of an \[unintelligible 00:16:54.19\] drive during a write... And I'm like, I would have guessed -- I don't know what I would have guessed. I actually don't know. Hundreds of nanometers? I don't know. It was 0.8 nanometers. And I'm like -- I literally fell out of my chair. I'm like, do you mean 800 picometers? And he's like "Yeah, it actually is 800. You know, I hadn't thought about it that way, but it is 800 picometers." I'm like, "What do you mean you had thought about it that way?" 800 picometers... I mean, that is so unbelievably --

**Adam Stacoviak:** The accuracy... Yeah. The precision is just... How do you even --

**Bryan Cantrill:** Insane.

**Adam Stacoviak:** The engineering behind a hard drive is, like you had said before, basically a miracle that it even does what it does. And I mentioned helium, because I think that probably does with friction, right? You have to worry about friction, with the speed of the drives moving, right? Like, this is all an issue. The heat created inside of the speed of a 7200 RPM rotation, of -- what, are they six inch? No, they're like three and a half inch drives... The spindle's around 3.5-inch...

**Bryan Cantrill:** Well, and you are flying through air... And that's why I think that moving to helium -- changing that kind of substrate allowed for much more precision. But I mean, you have -- things like smoke can destroy the head. God, if someone were to do smoking in the data center, you could really do some damage. They're very, very, very precise instruments, and it's amazing that they work at all... And then of course, all we do in software is complain about them.

**Adam Stacoviak:** That's right. Absolutely. I guess, fast-forwarding a lot - because I do want to go back in the past, and we are in the past, because this was 15 years ago, while at Sun... But now, Oxide only deploys to NVMe, right? Like, you only deploy to flash. Fantastic, right? Like, you've made it. Congratulations.

**Bryan Cantrill:** That's right. \[laughs\]

**Adam Stacoviak:** No more hard drives.

**Bryan Cantrill:** No more hard drives, and... You know, we do not yet have an object storage, kind of a cheap and deep product... And I still think when we do that, that's going to be like QLC-based, with our own FTL. I don't think it's going to be --

**Adam Stacoviak:** I don't even know what you've just said there.

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** I know QLC... Everything else, I was like "What did you just say?"

**Bryan Cantrill:** Right. FTL's a flash translation layer.

**Adam Stacoviak:** Was that English? Was that an acronym? What was it?

**Bryan Cantrill:** Yeah, sorry... So QLC is a cheaper, denser, but less reliable flash. And FTL's a flash translation layer, and we would presume we would do our own software on top of QLC... But in part because the real challenge is that they have done an amazing job of improving the density of rotating media, but you can't do anything about the access time, or you can do very little about the access time. You can kind of like add a second head, and do some other tricks. And so you end up with this -- I mean, it ends up being a tape drive. It ends up looking largely like a tape drive, where you just -- you literally cannot... It takes so long to actually extract all the information out of it that if you actually blow a drive, resilvering takes a prohibitively long period of time.

\[19:58\] So I think it is -- unfortunately, even though it holds a special place in my heart... And I guess I don't miss it, at some level, but I think it is probably on the way out... Although I've been predicting the demise of the drive also for 15 years, so... It'll probably still be with us.

**Adam Stacoviak:** Yeah, I'm with you on that. Hindsight a bit is 20/20 in that case, but you've been in the game long enough to predict that future... And let's go back to that. I wanted to obviously touch the fact that you're at Oxide, you've founded Oxide, you are "creating servers as they should be..." But you began -- probably further back than Sun, but I began there, with Fishworks and this sort of common ground, to some degree... ZFS was born instead of Sun. You worked and co-founded fish worked, which was a group that really created a plan I think based on ZFS... And obviously, this is your life, so you can tell the story better than me bumbling and mumbling through it... But I didn't know that you worked at Sun. I had always just thought Joyent.

**Bryan Cantrill:** Oh, really? \[laughs\]

**Adam Stacoviak:** I never knew until I prepared for this conversation.

**Bryan Cantrill:** Oh, my gosh.

**Adam Stacoviak:** I never knew. And here's me, I've got this personal satisfaction and love for ZFS as a file system... I think it's just phenomenal, really, how easy it is to use, and how resilient it is, and how enterprise-grade it is... And all it takes is just an apt-get away to have this thing on any given Linux box, and I can just have the power of ZFS. And here you are, this division, Fishworks, building an appliance around ZFS. You were inside of \[unintelligible 00:21:35.04\] was created. Right?

**Bryan Cantrill:** Yeah. I mean, more direct than that.

**Adam Stacoviak:** More direct. Take us there.

**Bryan Cantrill:** Yeah, so I want to Sun in 1996, knew that I wanted to do OS development, and I wanted to work for a computer company. Even then, I really saw the power in combining hardware and software. And every computer company in 1996, with the exception of Sun, had decided to mortgage its future to Microsoft and Windows. It was a really dark time... I'm wearing the Unix shirt today...

**Adam Stacoviak:** That's right.

**Bryan Cantrill:** ...and Unix was on its deathbed. This is before -- you know, Linux was still very much a hobbyist project. BSD was mired in lawsuits. Microsoft was in kind of the height of its Gates and Ballmer era. The world was very proprietary. They were not really open source systems. And every major computer manufacturer - SGI, DG, IBM, and so on were all moving to Windows as their future. And it was really only Sun that saw its future as being its operating system.

And I had used Solaris a lot as an undergrad, and -- you know, I actually had kind of, I would say, a complicated relationship with it, because we'd used Solaris from the early days of Solaris, when there were some real problems with it... But it was a real -- so when I came out to interview at Sun, I didn't really know what I was going to find... And I interviewed with Jeff Bonwick, and it was just an absolute bolt of energy to talk to Bonwick. Jeff had had a post to comp.unix.solaris, describing what was new in Solaris 2.5, and I had reached out to him after seeing that... And meeting Jeff in person was a transformational moment in my life, because I met someone who was older than I was, 10 years older roughly, but had a real energy and zeal for system software development. And I realized that I was going to come join him and come work at Sun.

\[23:59\] So he and I along with Kevin Clark were in the Solaris performance group. And Jeff really had -- I mean, Jeff had a couple of chips on his shoulder... I would say that he and I respectively each had a big chip on our shoulder in circa 1996. I had a chip on my shoulder around the way the system was understood. I felt that the debugging infrastructure in the system was really inadequate, and I didn't understand why we had this entirely synthetic system that we had created... And yet we couldn't ask ourselves what the software was doing. It was really frustrating to me. There was a real lack of observability in the system, and I had some ideas as an undergrad about how I wanted to go instrument the system dynamically, and the idea for what would become DTrace. And when I was actually interviewing with Jeff - this is one of these moments where I remember exactly where I was... We were kind of coming back from lunch, over the 101 from Palo Alto, and I was walking Jeff through my ideas for what would become DTrace, and trying to understand why was dynamic text modification not being used for instrumentation of the system. I just didn't understand that. And Jeff was like "Yeah, it sounds like you should do that. In fact, you should come here and you should do that." And that was a really exhilarating feeling, to feel like kind of the future was open to someone who was so young.

So that kind of was my chip on the shoulder. And Jeff's chip on the shoulder was really frustrated about file systems. And frustrated by -- he thought UFS was a mess, and that all these various layers, the layering on top of that was a mess... And I think he and I respectively both really wanted to take on these problems. And it took until -- it'd be three to four years later before we could really go start that.

I started DTrace in 2001, and at roughly the same time he started Pacific, which is what ultimately became ZFS. And we realized that he -- there was kind of an aborted year, where he had tried to take an existing organization and turn it into something that would develop something much more novel... And it was just not organizationally going to happen. I could personally see that actually what Jeff needs is Jeff needs someone who is a fresh grad, who is remarkably talented, who's energized and can join him, and they can be bound together and go take on this problem together, and not a large team.

And I remember vividly when I was recruiting at a school, and we took Adam Leventhal and Matt Aarons out to dinner, and put the two of them in a cab back to school... And I said to my colleague at the time, "The future of the company is in the back of that cab." And Adam and Matt both came out to Sun. Matt joined Jeff on ZFS, on what became ZFS, and then Adam would join Mike and me on DTrace. And Adam, of course, works with me today at Oxide. And Matt's very much still involved in ZFS . So that was the beginning of a very, very, very long odyssey.

It's kind of remarkable to me now that -- I'm 50 now, and I think that Matt and Adam were 22 at the time. They were only slightly older than my oldest kid. And you think about the arrogance and the hubris about seeing that kind of potential in someone so young... But that potential was real. That was right. And that we can do kind of extraordinary things when we are given the power to do so.

And ultimately, Jeff and Matt building a much larger team around them. It wasn't just the two of them. But it definitely started with the two of them really testing out some of these early ideas. And then certainly it was really exhilarating for us on DTrace. And there were a bunch of other things happening at that same time, at that time in the early 2000s. It was kind of ironic, because it was after the dotcom bust. I mean, people do not know what an economic wipeout looks like. We have not seen anything --

**Adam Stacoviak:** \[28:31\] Since then, yeah.

**Bryan Cantrill:** ...that rivals the --

**Adam Stacoviak:** Close, but not quite.

**Bryan Cantrill:** Yeah. I mean, not quite. Definitely not. I mean, I think if you work in tech -- because I think what people don't realize is that 2001 was devastating. I mean, it was in a different era. There was no remote work, really... And companies slashed so much. I mean, I don't know if you were in Silicon Valley at the time, but anyone who was in Silicon Valley at the time will tell you, the eeriest thing was that the traffic disappeared.

**Adam Stacoviak:** Is that right?

**Bryan Cantrill:** Yeah. In like April of 2000, the traffic disappeared. And you're like, "Why is there no traffic right now?" And then the traffic never came back. And you realize that something very large is happening. And there was a long shadow from that, through 2002-2006. It was only in kind of 2006-2007 things kind of began to crawl back. And then 2008 was, of course, a very deep recession for the rest of the country... But I think was actually less -- I think tech was still recovering from this nuclear bomb. So I think it was actually less acute in tech.

**Adam Stacoviak:** And 2008 was largely in housing.

**Bryan Cantrill:** For sure.

**Adam Stacoviak:** But it affected everything. But it was largely in housing. And it affected everything by way of everybody has a house, or lots of people live somewhere, whether they owned it or not. So there was an effect that waved through things. But the dotcom bust was literally in tech. The epicenter was tech, right? It wasn't adjacent to tech. It was in tech.

**Bryan Cantrill:** It was in tech, and I think it just affected forward expectations so much, where there was just this idea that like, okay, all of this kind of heady thinking of the late '90s was just obviously wrong. And of course, most of it just ended up being actually just way ahead of its time. And then it wasn't really wrong. A lot of these things were not necessarily wrong, they were just way, way, way, way, way ahead of themselves. But the irony is that it was in that period that I think Sun was its most innovative... Which is kind of crazy, because it was when Sun went through layoff after layoff after layoff during that period... But in part because of -- you know, maybe it was the focus that desperation gives you. But it was during that period that I think we did our most interesting work, and that was when ZFS happened, that was when DTrace happened, that was when this \[unintelligible 00:31:01.24\] a bunch of other I think really interesting OS technologies, all that became open source then, in 2005... Which was really important to me personally, because I began to realize that I'd kind of done this very important body of work for myself in terms of DTrace... I created the tool that I wanted to use, and now I am actually worried that it's going to be trapped in a corporate vessel that's going to sink. And the last thing I wanted to do is to be the kind of person who was like pining about the tech that they no longer can have. It's like, I've implemented this thing, I want to be able to use it for the rest of my career...

And actually, it was great, because just yesterday I had a really interesting bug at a customer site at Oxide... And man, we were using DTrace so much to debug this thing. And the engineer Robert Mustacchi, who was working on this, he and I were both reflecting on it, being like "Man, thank God for this. Thank God for DTrace. How would we debug this without DTrace?"

**Adam Stacoviak:** \[32:08\] That's so crazy.

**Bryan Cantrill:** It's crazy.

**Adam Stacoviak:** I mean, that's gotta be so crazy for you to be using the tool so long from the day it was created, to be the person's who's like "Something's got to change here to do the work, to be recruited to do the work", to be in tumultuous times in a company, in an era of tech that's never been seen before - at least, we hope not - to be still using the tool, because of the open sourceness of it. Otherwise, it would have been trapped, right? ZFS was almost trapped in Sun. Open ZFS - there's some history there licensing-wise that makes ZFS a little challenging for folks to implement in Ubuntu or Linux today... It could have been that.

**Bryan Cantrill:** Yeah, absolutely. And it would have been very easy for all those things to be truly trapped. And it would have been awful.

**Adam Stacoviak:** More than awful. Yeah.

**Bryan Cantrill:** Yeah.

**Adam Stacoviak:** Catastrophic.

**Bryan Cantrill:** And I think there are many, many, many reasons to open source things, right? I mean, there are lots of reasons why open sources is really important. But one of the emotional things that we don't talk about in terms of open source, but to me personally is something I feel like deep in my heart, is open source is what allows engineers to achieve enduring meaning, and to really feel -- because if you ask an engineer "When have you been unhappiest in your career?", it's always a variant of the engineer was trying to make the right thing happen, and management was preventing it from happening. It's like the same story. And I feel that doing proprietary innovation is kind of a variant of that, where you work so hard for something that now somebody else owns... And on the one hand, it's like "Okay, they owned it because they paid for it." It makes sense, I guess. But it is really unfortunate when that thing is flown into the side of the mountain, and you no longer have the thing that you created, that you pour your soul into. And that can really chip away at your soul, to kind of lose that.

And conversely, it feels to me bluntly transcendent to be able to have this technology that I am using 20+ years after its creation, and I'm still grateful for it. And I love the fact that it's something that we are able to use so easily, so readily, so robustly. That is deeply, deeply, deeply gratifying.

So yeah, it changes one's disposition to kind of have that longer view about the importance of open source, for sure, to allow engineers to have that deeper meaning... And we got very lucky, because we got that deeper meaning with the stuff that we worked on at Sun at the time.

**Adam Stacoviak:** I love that story and that history. I've got a different perspective of this, I guess, same story, in a way, from Matt Aarons directly. So I talked to Matt Aarons a couple years back... You may have listened to that episode. I don't know how much of a fan you are...

**Bryan Cantrill:** Oh, no, yeah, I did. Yeah.

**Adam Stacoviak:** Well, you knew the story then. I mean, you were probably just listening for posterity's sake, for just sheer enjoyment, because you were there for the most part for all this stuff. And he was just literally telling me -- the title of that show was "Making the ZFS file system." And I thought that was cool. Jeff, how he recruited Matt... He didn't share the whole - you know, those two in the back of that cab there, the future of the company perspective like you did just now, but he was like "I'm a co-inventor of it, but really, Jeff was the real brains. I was a brand new person to the company, hadn't really done anything substantial... Obviously, I brought a lot of knowledge to the table and capability, but really, this was the brainchild of somebody else, and I was just there at the right place, at the right time, to help make ZFS what it is.

**Bryan Cantrill:** \[35:57\] So I think Matt is being characteristically self-effacing.

**Adam Stacoviak:** Is that right? Okay...

**Bryan Cantrill:** Yeah, yeah. He's being self-effacing. I mean, I think that he's right -- so, I mean, he's being very generous to Jeff, and he should be, but the Jeff's obviously much older than I am. I'm then five years older than Matt is. So there's an age and experience \[unintelligible 00:36:12.27\] for sure. Matt also brought not just enthusiasm, but terrific acumen and insight. And I remember one of the very first -- I can't remember if Matt talked about this or not... One of the very first things that Matt did is a prototype of like the directory hashing... And I just remember how great it was for Jeff, that he hadn't had to like micromanage us. He kind of like pointed Matt in this vague direction, Matt figured a ton of stuff out, and had a bunch of his own insights besides... And I think Matt is discounting that. I don't think Matt necessarily is -- I mean, Matt's on the inside of it, so he's not necessarily... He didn't have the perspective that I had on it, which is you have no idea how invigorating this is for Jeff. I mean, yes, on the one hand, Jeff's providing a lot of the energy and the seniority, for sure. But Matt was providing so much of that energy that it was energizing for Jeff. So it very much required -- I mean, my view on it was, like I said, Jeff needed someone to pair with on this. And Matt was perfect. So I think it very much required both of them.

**Adam Stacoviak:** It's crazy... Kind of fast-forwarding a little bit, I was like "Let me go Command+K your docs at Oxide and see where ZFS lives inside the stack", because I can't imagine someone like you would build what you have, even without your history, without having ZFS based in there somewhere, right?

**Bryan Cantrill:** That's right.

**Adam Stacoviak:** ...Open ZFS. And so of course, you call it Crucible.

**Bryan Cantrill:** Te Crucible storage -- yeah, Crucible is our storage service. So we're using ZFS in a slightly different capacity, but very load-bearing for us. So what we are not doing is using kind of the volume management piece with ZFS, at least not at the moment. We are putting effectively a different zpool on each of these \[unintelligible 00:38:07.19\] But we are very much using the fact that -- I mean ZFS has got, as you know, the idea of the filesystem as this lightweight abstraction that you can create many of, and you can have different policies around. There's so many different wins with ZFS. So while we aren't using the storage pooling necessarily, we are using all these other features of ZFS... And yeah, it's been terrific. So far, so good.

**Adam Stacoviak:** Mainly copy-on-write and snapshots, right? Like, that's what you come for. You stay for anything else, but you've come for copy-on-write and snapshots.

**Bryan Cantrill:** Snapshots, encrypted data at rest... I mean, the fact that you've actually got a proper file system, and you don't have to -- I mean, there's a bunch of value on top of it. And honestly, from my perspective, the fact that you actually have the data integrity guarantees... I mean, I have seen -- and Matt may have relayed this to you... And there were a couple of these, but one that really sticks out... I can't remember if Matt relayed this \[unintelligible 00:39:11.22\] to you or not... There was someone who was reporting -- ZFS is reporting data corruption, right? So ZFS is not going to return corrupt data to you. ZFS will indicate "I've had data corruption." And ZFS is reporting data corruption; this was relatively early on in the development of ZFS. And everybody believes that ZFS is mistakenly reporting data corruption, or ZFS is itself corrupting the data. So I recall several weeks of debugging before they realized this particular DMA controller, silicon \[unintelligible 00:39:47.08\] controller, if my memory serves correctly, was corrupting the last 64 bytes of a transaction under certain conditions. And this was a bug in the controller itself, not in our software. And this was one of the most widespread DMA controllers anywhere... And they realized that like "Oh my God, this thing's just been corrupting data everywhere, and only ZFS detected it."

**Adam Stacoviak:** \[laughs\] That's awesome.

**Bryan Cantrill:** It was crazy. And it was like one of those moments --

**Adam Stacoviak:** I mean, not awesome, but awesome that otherwise it would have been unknown, if ZFS wasn't as good as it is, basically.

**Bryan Cantrill:** \[40:23\] Absolutely. And it was one of these moments where you realize that these storage systems are really complicated, and that when you have these kinds of errors, people don't necessarily have ways of observing them. So the DMA controller vendor is not necessarily gonna -- they're gonna be very hard-pressed to be directly connected to the folks who are actually seeing data corruption. Because software doesn't routinely validate the data that it's getting back. Or if it does it, it does it in a checksum that is stored within the same block. And if I gave you a block that you corrupted on the way down, and you corrupted it in the same way returning back up, it's like the block looks self-consistent, so I don't know the difference. It's like, "No, this block is actually corrupt." And it was very eye-opening. And it's like, I'm sorry, I'm not living without that, ever, in my life. I'm just like, "No, thank you. I would like to know when my data is corrupt. Please don't return it to me if my data is corrupt."

**Adam Stacoviak:** Precisely.

**Bryan Cantrill:** I mean, file system corruption is really, really horrifying. It's very hard to trust again when you've seen file system corruption. And you know, in all of my years with ZFS, \[unintelligible 00:41:28.03\] we had some data take some very long vacations, but it always came home. We did not actually have corrupt data. And that is -- I mean, first and foremost, data cannot be corrupt. So yeah... Definitely I'll be using ZFS for the rest of my career, thank you very much.

**Adam Stacoviak:** Yeah, thank you very much. Thank you, I suppose, to the early days... Like you'd mentioned, even in your own passion, for Sun to get to open source those things. And I think it was only because of those actions was what is known as ZFS was able to survive Oracle's acquisition... Which you were there for, I think, in 2010. You were there --

**Bryan Cantrill:** Oh, yeah.

**Adam Stacoviak:** ...based on your LinkedIn history, I assume. The date range seems to stamp when the acquisition happened. So you were there.

**Bryan Cantrill:** Oh, yeah. Very much so. I actually went into the acquisition with a very open mind... This just sounds like -- God, this is embarrassing, and it just sounds \[unintelligible 00:42:26.07\] naive...

**Adam Stacoviak:** Tell it.

**Bryan Cantrill:** Well, I was just like "You know, this can be good. This is going to be --"

**Adam Stacoviak:** \[laughs\]

**Bryan Cantrill:** I know, right? "We're going to take the technical excellence of Sun, and we're going to combine it with the business savvy of Oracle." I mean, it was almost immediately after the acquisition that I realized just how stupid that was, and that Oracle doesn't actually have business savvy in any true sense. Oracle understands coercion. That's what Oracle understands. And the way that Oracle operates is they get the leverage to be able to coerce their customers, and then they lack the mirror neurons to stop themselves from just excruciating coercion.

I felt embarrassed to work for Oracle, which is not something -- I felt ashamed. Not something that I would have anticipated. But one of the things that I really learned very quickly after the acquisition is despite Sun's faults - and Sun had plenty of faults - Sun's customers, our customers wanted Sun to succeed. And what I realized was like, despite our faults, our customers trusted us, because we were always transparent with them, like warts and all. Sun did try to pretend that it was something -- I mean, again, every company has got faults, but for its size and history, and staying power, Sun had really surprisingly few... I mean, no one went to jail at Sun, there were not these major ethical transgressions... And Sun's customers, by and large, wanted Sun to succeed, because they trusted the company. And that was not true with Oracle. When you get to Oracle -- Oracle's customers don't trust Oracle. And Oracle's customers are -- I mean, when I was there in 2010, the state of California refused to purchase any more Oracle. The state I lived in, the government of the state I lived in refused to purchase the product, because they had outstanding lawsuits... I mean, that's not what I want to do with my career.

\[44:40\] What I learned in that whole process is that the meaning of an endeavor is really important to me. There's got to be a bigger why. Why are we doing this? And I have always believed that in computing there's this line -- I'm not a huge Halt and Catch Fire fan, but there is a line that I do love, which is... I'm a much bigger Silicon Valley fan than Halt and Catch Fire.

**Adam Stacoviak:** Oh gosh, you said at first. Okay.

**Bryan Cantrill:** There you go. And we'll go there. But there is a line that I do love in Halt and Catch Fire, which is "We're not the thing. We're the thing that gets us to the thing." And to me what that means is computing is a tool for humanity. And it's a tool to allow people to do extraordinary things. And I just feel really strongly that the meaning of being in computing infrastructure is to unlock the potential that people can go create for themselves. And that necessitates a relationship with customers that is based on trust. And you can't have this transactional antagonistic relationship with your customers, because you lose the meaning. It's like, no longer is it about "How can I use your thing to go create something larger than the two of us together?", it's about you trying to extract the most amount of licensing revenue from me, or whatever. And it's just like "Nah. No, thank you."

**Adam Stacoviak:** Yeah.

**Bryan Cantrill:** That's not for me. And Sun was always about something bigger. And you can see many echoes, and many have seen many echoes of Sun in Oxide... And we've tried to recreate some of the good bits without recreating the bad bits. But certainly the good bits we've tried to recreate at Oxide is that call to mission...

**Adam Stacoviak:** All you have to do is not get acquired by Oracle and you're good to go.

**Bryan Cantrill:** \[laughs\] I'm pretty sure we're going to be safe on that front.

**Adam Stacoviak:** Can you rubber-stamp that right now?

**Bryan Cantrill:** I can rubber-stamp that I'm --

**Adam Stacoviak:** \[unintelligible 00:46:33.12\]

**Bryan Cantrill:** Yeah, I think so. I don't think Oracle's gonna be interested in acquiring Oxide.

**Adam Stacoviak:** \[laughs\] Not yet. We'll see.

**Bryan Cantrill:** I don't think so.

**Adam Stacoviak:** If you do your job right, maybe.

**Bryan Cantrill:** You know what, if we do our job right -- I actually... No. I actually -- this is another I guess belief of mine, but I really want us to be... Like, the exit for Oxide is a public company. I believe in the democratization of capitalism. I believe that it should be owned by the public. And I know that plenty who are in a public company will roll their eyes to this, because it's a lot of work to be a public company. You've got a level of scrutiny that's obviously extraordinarily high, and so on... But I just think we see the greatest societal dividends when companies are public. I think there's a lot of importance in -- and I guess this makes me... You know, it says something crazy about our divisive age, that that view seems nuts. It's like "Oh my God, who is this socialist, that they believe in public companies?" But I do actually believe that companies should be -- I think there's a lot of value in being owned by the public.

**Adam Stacoviak:** When you say public, you mean publicly-traded, right?

**Bryan Cantrill:** Publicly-traded, publicly-owned.

**Adam Stacoviak:** Which is actually not socialist, right? That's capitalist.

**Bryan Cantrill:** That's my view, that when people can -- because it used to be that the companies went public much earlier. And a lot of that kind of ascendancy, the public could participate in. And you could have someone who was a barber, who was able to put away some money and buy some shares of Apple... And you know, they've been able to enjoy some of that success. We've democratized that success. I think, it's really, really important. So that to me is the future for Oxide. Big public company.

**Break**: \[48:33\]

**Adam Stacoviak:** Those are lofty goals. We're 55-ish minutes in, and we have barely talked about Oxide, really.

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** We've just talked about your journey, which I think is super-interesting, personally... So I hope the listeners also appreciate it. I'm a historian to some degree, I would say, over the last two years of Sun, and ZFS in particular. I didn't know about the story behind the scenes of DTrace and its origins. I've used the tool before, but I never knew its origin. I didn't even know you created it. I'm so embarrassed in a way to know you -- like, my fame for you, I suppose, began with Joyent, as CTO there, not everything before that, which was really your true beginning, and maybe your best work... Not that there wasn't good work at Joyent, but you've left, and you've done what you've done now to kind of recreate what you loved most inside of Sun, as you've just said, to sort of give on-prem this full stack a new life.

**Bryan Cantrill:** I mean, I would say Oxide pulls from a lot of different threads. Oxide pulls a lot from Joyent, and the history of Joyent. Oxide pulls a lot from -- I mean, Oxide is pulling in all of our history running a public cloud, developing the software there... We have the whole Node.js experiment, which was interesting, but was --

**Adam Stacoviak:** It was interesting...?

**Bryan Cantrill:** Well, you know, it was a whole different set of education, where one of the things that I -- and part of the reason I went to Joyent is because of my own enthusiasm for Node. And Node was happening at that time. So this is in 2010, and we had used at Fishworks, at Sun, we had obviously done our own... We really wanted to make this thing a tight product, which was one thing that Sun was not very good at historically. So we wanted to take these great technologies in terms of ZFS, in terms of DTrace, the operating system, and really turn that into a very tight product. Part of that meant a great graphical interface, which Sun was not historically very good at.

In 2006, when we started, that meant Ajax, right? Remember Ajax, asynchronous JavaScript and XML?

**Adam Stacoviak:** Oh, yeah.

**Bryan Cantrill:** And so we pretty quickly drew the conclusion that all these frameworks were kind of junk at the time. We were going to write our own JavaScript. And people were like "Oh my God, you're gonna write straight to the DOM?" It's like, we're a bunch of kernel programmers. This is not a big -- this is not low-level systems programming. Writing to the DOM is not --

**Adam Stacoviak:** Right. Low-level to the browser, but not low-level to the system.

**Bryan Cantrill:** That's right. That's right. So as a result, we did a lot of JavaScript, and I had just never done anything with JavaScript. And I was only adopting it because it was the lingua franca of the browser. And I began to realize "Wait a minute, JavaScript is like a real programming language." And the same realization I think was happening everywhere in 2007.

**Adam Stacoviak:** For sure. Yeah, it was a boom.

**Bryan Cantrill:** People were like "Hey, this --" I kind of was blowing this language off as like glorified blink tags, or whatever... But this is like "We've got a real programming language here. We can now do these actual single-page apps, we can write a real app, that kind of spreads across the browser, in the back end... And there's a whole bunch of stuff we can do."

So I was like "This is really interesting, and I'm really enjoying JavaScript." Then we also extended that onto the server side, and we were starting to -- we did our CLI, I reimplemented it... Our CLI had started as this Perl monstrosity - like there's any other kind of Perl - and I realized, "I'm down the wrong path, and I need to rewrite this thing in JavaScript." And that was really, really eye-opening for me, because we were able to reimplement this thing really cleanly in JavaScript.

\[55:54\] And I'm like "I think this has got a lot of potential on the server side." Node was a catalyst for that.

So I went into Joyent and Node full of enthusiasm for Node.js in 2010. A bit more jaundiced after a couple of years, because I had this idea that we would be able to really bring robustness and rigor... There are things I loved about JavaScript, but there are things where JavaScript needed best practices in order to make it rigorous. And there was just a lot of resistance. And we had done a bunch of technologies, we had developed a bunch of things to make it more dependable, and so on... But that was not the priority of that broader -- the broader community was a JavaScript community, not a Node community. And there was just some pretty deep fractures that I had kind of wanted to bridge, and I began to realize "These are not actually bridgeable." And I actually gave a talk on this. I mean, there was this fracture... Kind of famously, there was a fork --

**Adam Stacoviak:** Io.js.

**Bryan Cantrill:** Io.js, 2014...

**Adam Stacoviak:** You know, just to interject a little bit here... I talked to Scott Hammond when this happened.

**Bryan Cantrill:** Ah, did you?

**Adam Stacoviak:** He graced me with his presence. I was a lowly podcaster, green behind the ears in comparison; maybe still green. This is 2015, during the whole, major shake-up --

**Bryan Cantrill:** Did you talk to Scott in 20-- okay, yeah. Scott's the best.

**Adam Stacoviak:** Yeah. He gave me -- I mean, he is a CEO. I mean, he didn't have to give me his time. But there was a lot of things, as you know, happening in the Node world. Node was very important, and you had this fork, and it was forked by major players and people within the community. So it wasn't just this "We're upset, let's do something different." And there was a huge rift. And Io.js was legitimately trying to truly fork and stay separated, but then eventually it came back, and Scott - we did a show, it's called "The Future of Node.js", and largely it was about this rift, and the stewardship and the opportunity to guide and direct Node.js, and to be good stewards... And so that was largely what we had talked about.

**Bryan Cantrill:** I don't know if you saw, they just did a documentary on this...

**Adam Stacoviak:** Yes.

**Bryan Cantrill:** ...that Scott was a part of, which I thought was great. Actually, it was funny, because he's like "I actually didn't want to tell you I was doing that, because I thought you'd try to talk me out of it." Like, "No, I'm not trying to talk you out of it, because I thought you would bring a different voice." And he did. I thought he was great. I think the one thing that that documentary didn't really hit on - which is not necessarily any fault of theirs... But Io.js was actually symptomatic of much deeper fractures. And it was very easy for people to say "Oh, this is like a Joyent versus the community fracture." And it's like "No. No, no. This fracture is actually a lot deeper." And I will say, I got some satisfaction - in 2017, at Node Summit, the organizer of Node Summit says "Hey, I'd love for you to give a talk on Node." This is in 2017, three years after the fork. And I'm like "Bad idea. I've got nothing nice to say. This is not -- I don't think that's a good idea." It's like "Oh, no, that would be great. Like, if you've got nothing nice to say, that would be a great keynote." I'm like, "Oh, God... Alright."

**Adam Stacoviak:** "Fine..."

**Bryan Cantrill:** "Fine." And actually, the talks that I am most grateful for are the talks that people have asked me to give on a particular topic... Because it forced me to kind of get out of my own comfort zone, and I'm like "Okay, wait a minute, how do I actually talk about this? I want to talk about what happened here, and I do want to do it in a way that's actually reflective and constructive." And what I began to realize is like "Okay, actually what happened here is not just --" It's like, yeah, \[unintelligible 00:59:45.19\] and that's kind of easy to gravitate to. But there's actually something deeper. There was a values clash, there was a divergence in values. And once you see it that way, you see beyond kind of the Joyent v. community aspect of it...

\[01:00:06.26\] And so in this presentation - "Software platform is a reflection of values" I think is the name of the talk. But I kind of walk people through the values that we had, that Node had for itself, and the values that kind of we had at Joyent, and other people in the industry had, and kind of how those values didn't match.

And I said that in hindsight, a rift was inevitable. And in 2014, that fracture finally happened. Does anyone remember what happened in 2014? And I'm thinking like, I am making this a little too obvious in this talk. The audience is going to realize what I'm doing, and they're not going to lunge into this bear trap. But it turns out the audience absolutely lunged into the bear trap, and everyone -- you could hear the audience say "Io.js."

**Adam Stacoviak:** Like I did just now.

**Bryan Cantrill:** Like you. Io.js also happened in 2014... But I'm talking about something that actually happened before Io.js. And I pull up TJ Holowaychuk's farewell to the Node.js community. So TJ Holowaychuk was by far and away the largest Node contributor, and walked away from Node prior to the fork, for effectively all of the same kinds of issues that we at Joyent had. And what you began to realize is like this values divergence was driving lots of people away. And a lot of people got driven to Go at the time. And if you look at the rise of Go - that is happening just prior to that Io.js fork, as people are realizing "I like the idea of being able to -- there are things that I like here. I like the performance... But there are things that I don't like here. I don't like how sloppy this is. I don't like how easy it is to have a typo that creates a bug for me in production, for example. I want something more robust", and they're beginning to gravitate towards Go.

And TJ Holowaychuk, when he walked away from Node, no one said anything about it. I'm like, it's kind of amazing to me. This is like, I don't know, Brian Kernighan walks away from C. Like, no one's gonna say anything about it? Or Russ Cox walks away from Go. Is anyone gonna say -- Bjarne Stroustrup walks away from C++? It feels to me like -- that's probably a bit too far, because TJ was not the creator of Node. But he was very prolific. And to me, it was a time for reflection. But people were so caught up in kind of the personalities of the moment, and the conflict of the moment, and the corporate v. community kind of narrative that they were losing track of the fact that there's a bigger values divergence here that was driving away a lot of folks in the community.

And I was actually pretty satisfied. The audience is like "Yes!" If you turn up the volume on that, you can hear people gasp.

**Adam Stacoviak:** Is that right? What was the line that made them gasp? Can you recall?

**Bryan Cantrill:** Yeah, it was just me showing the TJ Holowaychuk's farewell message. And like, that's what I'm referring to. And I had a couple of people coming up to me afterwards and being like "Oh, my God, I had forgotten about that." And it was so gutting... I remember when I read that, and I was just gutted that TJ had left, and kind of no one talked about it, and everyone kind of went on to the next thing... But you're right, there was something bigger that was happening there. And I think some of that has been resolved by TypeScript, to a degree... And I think things have just kind of settled. I think that folks that are looking for something else went elsewhere. And that included me. It's just like, Node is not a good fit. It's a great fit for a bunch of software in the world, and it's not a good fit for the software that I want to write. And it's not a great fit when you've got load-bearing infrastructure software, that's got to be right all the time, that needs to run forever. I want something else.

\[01:04:11.12\] And to me, Go is not the right fit either. And what I realized in 2018 was that Rust is going to be the next thing for me. And Rust is the language that -- the values of Rust very much align with my own personal values. And I think that the whole Node experience -- so it's easy to see the echoes of Sun in Oxide, but there are arguably just as many echoes of Joyent in Oxide, because that experience was so educational for me with respect to Node, and being so -- I wanted to be much more mindful about the way that I looked to a platform, and how a platform reflected those values. And then the kind of technologists that you're going to attract. I mean, the name Oxide is very much a tip of the hat to Rust, because we knew that we wanted to go build in Rust. And I knew that we would be able to attract technologists that kind of shared our worldview on how things should be. And that's been even truer than I could have possibly imagined. You know, just like, the future of the company being in the back of the cab, the future of software being in Rust, at least for the software that I want to write, has been even truer than I could have imagined, and the technologists we've attracted to Oxide are extraordinary, and very much share that worldview, and Rust being a very concrete embodiment of that expression.

**Adam Stacoviak:** Let's go to where Oxide begins. Not so much as a company, but as a convictioned, or convictionable - I'm not sure what the word might be, but something where you have conviction... This idea - you have enough conviction in the idea to begin to take the steps, whether it's a phone call, a simple text message to Steve, or your co-founders, or Adam Levanthal... Whomever, however it first began. Take me to that moment. What was the conviction, what was the initial idea? How did you get there?

**Bryan Cantrill:** Yeah. So the origin of Oxide, first, long before we had a name or an idea, is that I wanted to do something with Steve. So actually, Steve and I had been together at Joyent. I went to Joyent, I loved the technical positioning, but I wasn't necessarily in love with the folks that were running the company at the time. And I didn't meet Steve until after I came to Joyent. I met Steve on my second or third day at Joyent. And I remember exactly where I was when we had that first conversation, where it's like "Wait a minute, who is this guy?" This is great. And Steve and I had a great run together at Joyent. Ultimately, we both \[unintelligible 01:06:45.26\] we hired Scott, and Steve and I both learned a lot from Scott. And after the acquisition of Joyent by Samsung, as we were beginning to realize that like "Okay, Samsung is not where I'm going to spend the rest of my career", and "What's next for me?", Steve and I wanted to go do something together.

And you know, the environment such as it is at Samsung, there was always a little bit of a concern that one of us would get axed before it was time to go start a company... And the unstated belief there was - it would be Steve who'd be axed, just because Steve was running... He was running our go to market on the commercial side for Joyent, and it just felt like that's a function that Samsung might get rid of. You just didn't know.

And I remember we were at a coffee together, and it was just really important to me that Steve and I do something together. Again, no idea what it was this point. And so I'm trying to make -- and he and I are both concerned, reasonably, that Steve will be on the street, and I'm like "I need you to go consult for a year, or something. I don't know, I need you to wait for me, basically", because we were all going to be at Samsung for three years, kind of the term of the deal, and so on.

\[01:08:07.20\] So as we were saying this - again, with this kind of implicit assumption that if anyone was going to be axed, it would be Steve- I get a text message from Scott, my boss, saying "You've gotta get back here right now. The folks at Samsung want to talk to. I've got no idea what this is about." And Steve's like "Maybe you're the one that's gonna get axed."

**Adam Stacoviak:** Oh, gosh...

**Bryan Cantrill:** And I'm like, "Jesus, maybe I am going to --" And I remember, I had a very weird conversation as I'm going for the elevator, thinking like "We're kind of laughing about it", and I sit down with the folks from Samsung, and Scott's in the room... And he says "The CEO", pointing to Scott, "the CEO manages HR, they manage marketing, they manage sales... But what does the CTO do?" Pointing at me. And I'm like, "I am getting fired in the next sentence." I am just completely convinced that I'm getting fired in the next sentence. And I just remember thinking like "No, I want to live." But I was not getting fired. It was fine. It was just very -- it was one in many, many, many very strange conversations...

**Adam Stacoviak:** What did you say? You can't go on with this story without telling me what you said. How did you respond?

**Bryan Cantrill:** Well, it was a rhetorical question.

**Adam Stacoviak:** Okay.

**Bryan Cantrill:** I'm like "Do you actually want me --"

**Adam Stacoviak:** "...to enumerate what I do here?"

**Adam Stacoviak:** No. This is very -- they actually said "Samsung has no Nobel Prize winners." That was the next sentence. And I'm like, "Do you want me --" I actually did say "Do you want me to posit why that might be? Am I supposed to like expand on that, like why that might be the case?" And "You have done DTrace", they said to me. And I'm like "Where are we? And what is going on? I'm so confused..."

**Adam Stacoviak:** "What are you getting at?"

**Bryan Cantrill:** Like, I do not know what's happening... Like, "We want you to do cloud DTrace." And I'm like, "What? What the hell is cloud DTrace?" Like, okay. Fine. Like "When do you think it will be done?" I'm like "When will what be done? The thing that you just invented in the last sentence?" And actually, it was an interesting opportunity to be like "Okay, well, actually, let me walk you through the full history of DTrace, where the original ideation for that was in 1995, and it wasn't really done until 2005." So 10 years.

**Adam Stacoviak:** A decade.

**Bryan Cantrill:** A decade. So if you want me to put a schedule estimate on the thing you just invented in the last sentence - a decade. Next question. I didn't say it exactly that way, but it captures a lot of -- so there's a lot that's endearing about Samsung, and a lot that's frustrating about Samsung. But in that whole experience, for me it was just a very emotional reminder of how much like "No, I want my next thing to be with Steve."

So we knew we wanted to do something together, and it was just -- we were contemplating bad ideas, basically. And we had a bunch of bad ideas, and kind of during this time I talked to a friend of mine who had been an early CTO when it became a prominent public company, and was employee number four, or whatever it was, and he was very good, asked very thoughtful questions... And he's like "Why do you want to do this?" "What do you mean, why do I want to do this?" "Like, why do you want to start a company? Starting a company takes so much emotional energy. What is it that you want to create?" I think it's a really good question.

**Adam Stacoviak:** \[01:11:52.23\] Yeah.

**Bryan Cantrill:** Because when you think about "What am I trying to do?", there are a bunch of answers to that. I want to create things that are valuable to people, and I want to create a sustainable business. There are a bunch of things that I want to go do. But as I began to kind of like think about this in terms of like prioritizing them, and thinking about in particular when have I been happiest in my career - which I think is a really important question to ask people. We ask people this as part of the Oxide application process, and it's very revealing to ask people "When have you been happiest in your career, and why?" So I was reflecting then, I'm like "When have I been happiest?" And the moments that I've been happiest were - you know, we talked about those moments in the early 2000s, with ZFS and DTrace, and this exhilarating sense of creation, from this team of folks. It was not any one of us alone. It was Matt, and it was Jeff, and it was Adam, and it was Schrok... It was all the all these people together, working together to create something bigger than themselves. When Adam, Mike and I did DTrace, I remember so many times thinking "This is so much bigger than any one of us. It requires all three of us at the absolute limit to create."

When at Joyent, there were a bunch of times when coming together as a team, whether it was \[unintelligible 01:13:12.19\] or whether it was working on Triton, a bunch of technologies where we felt like we were creating something beyond ourselves... It's like, that's what I wanted. And I'm like "I want a team coming together to create something bigger than themselves." Like, that's actually when I'm happiest. And the other stuff is still important. And it was a really helpful to kind of have that at the back of my mind, of like "Whatever it is, it needs to be big enough to attract that kind of team."

I knew that it needed to be deep enough to be able to hold my own attention for a decade. And when Steve and I were kicking around ideas, they were all kind of small ball ideas that didn't really have that; that weren't gonna necessarily have that staying power. So he and I are both like rejecting idea after idea after idea, right? And it was really when we -- again, we knew we wanted to start something, we didn't know what it was gonna be... I'm like "Well, look, I should start mailing venture capitalists at least, and we should at least start having these conversations." And I'd talked to VCs throughout my career, but I had never started anything... And so I actually went back to the email of a pretty prominent VC who I used to meet with reasonably regularly... Like, every year we would get lunch, or something. And I wanted to just remind myself of his email address. And the email he had sent me is like "Hey, I love getting lunch with you today. I just want to remind you, I will fund literally anything you put in front of me." And I remember thinking like, "Okay, this is maybe the catalyst that I need to go big." And I really think it's important with new company formation that you've gotta go big. You've gotta go big. And certainly for the kind of company we wanted to go build. And I'm like "Steve--" And this is a moment - wait, we are at Samsung, just suffering from the problems of deploying at scale. And in particular, we've got a bunch of Dell machines that are dying with these uncorrectable memory errors. Dell is not -- the whole experience is awful. And Samsung's extremely upset. Dell was extremely useless. Dell was like -- this has been escalated to like Michael Dell's level... So this is like one of these things where Dell's solution to the problem is to put more and more people on the call... So Dell was like "Okay, we've got like 35 people on the call... So let's go around and do intros." And I'm like "No. No."

**Adam Stacoviak:** Gosh, no. We'll be here all day.

**Bryan Cantrill:** Exactly. I'm not here to run out the clock. So I don't want to hear an introduction from anyone that's not going to solve my problem. And everyone was like "Okay." And what I began to realize was Dell themselves did not understand the origin of this problem. They were trying to tell us like "Oh, we've never seen this before", which is like "Oh my God, this is just such garbage." It's kind of gaslighting from Dell. Dell was spending their time trying to find something else they could blame. And again, for a long time I thought this is out of laziness.

\[01:16:26.09\] And what I began to realize for this particular problem is like "Oh no, wait a minute, they don't actually understand how their own systems are built. They actually don't get it. They themselves - they're doing this not out of laziness. This is out of fear. They don't know how this system works, and they don't understand how it fails."

I mean, there were some comical moments... There was one moment where they're like "What we need you to do is we need you to re-flash the ME, the Intel management engine", which is this off chip part that is basically the brainstem of an Intel machine. And I'm like "What do you mean? Do you think this is an ME issue?" They're like "No, we need you take the same image that you've already flashed on there, and re-flash it." I'm like "You want me to like -- do you think this is like program text corruption?" And they're like "Well, we can't actually tell you any other details, because our NDA with Intel prohibits us from going into any of the details." I'm like, "What are you talking about?" And this is like post Spectre meltdown, when Intel, to their credit, was... I mean, we had a very close relationship with Intel after the Spectre meltdown. We found out about the Spectre meltdown on the internet, so Intel was a bit apologetic about that... I'm like, "I'm just gonna call up Intel right now. We'll get Intel on the call. We've got our folks at Intel. If this is an Intel ME--" Because I'm actually thinking like -- I'm making the mistake of taking Dell at their word. I'm like "Oh my God, there's a very serious ME issue that Dell \[unintelligible 01:17:53.11\] that I don't know about, that's affecting all of these servers... Like, let's get Intel in here right now." And they're like, "Oh, actually, no, no, don't do that. It's not Intel." I'm like "What?" They're like "No, we don't think it's Intel." I'm like "So you're just making stuff up. You're just making stuff up." And again, I was kind of at this moment where it's like "This is not out of laziness. This is out of like -- they don't know what's going on. They actually don't know what's going on. They don't know what's going on, they are not doing first principles engineering, and when they say "You're the only customer that seeing this", it's like, yeah, I am the only customer who's seeing this, because the other customers that are running at scale, at Google, at Meta, at Amazon, they're not Dell customers. So you're right. They're not seeing this, because they're not your customers."

And all of these things together - the mail back from the VC saying that they would fund literally anything we put in front of them, the desire to have a large, invigorated team, doing something beyond themselves, the desire to work with Steve, the very clear problem we had in front of us... It's like, all of this kind of came together, and I'm like "We've got to start a computer company. That's what we've got to go do." And I remember sitting in Steve's office, being like "We've got to start a computer company", and Steve's like "I mean, yes... But like --"

**Adam Stacoviak:** "Do you know what's required to do that...?" Is that what you're saying?

**Bryan Cantrill:** Nope, none of that.

**Adam Stacoviak:** Okay...

**Bryan Cantrill:** I mean, he may say now that like "God, I should have..." But no, no. He was like "Can we? Are we allowed to? Do you think we can get that funded?"

**Adam Stacoviak:** Oh. Like permission, in a way?

**Bryan Cantrill:** Yeah, like permission. Exactly. "Do you think, like -- can we...?" I'm like, "Yeah."

**Adam Stacoviak:** "Of course!"

**Bryan Cantrill:** \[01:19:40.00\] I'm like "Steve, that's what's in our heart." And it is. And it just felt so right, because that's like, that is what our entire careers had been pointed to, with Steve having come up at Dell, and having been at Dell for 10 years, and I had been at Sun... It's like, that's what it was pointed towards. And you know, when you've got that level of conviction -- and of course, as we began to do our own homework, we began to realize that lots of people in the industry had come to the same conclusion. And we talked to actually plenty of people who were like "Great idea. You're never gonna get it funded." And what we discovered is that it's challenging to get it funded. It's definitely contrarian. But in venture capital you want to be contrarian, and right. Those are the big wins.

**Adam Stacoviak:** Yeah, those are the big wins.

**Bryan Cantrill:** The big, big wins are when you are contrarian, and right. And we got truly blessed to find Eclipse Ventures. And we felt very lucky to find the team at Eclipse, and very much shared our worldview... And what I learned later -- it was very interesting, because we did this kind of raise... And they tell you -- you're an entrepreneur, and you want to move everyone through the process at the same pace, because you want to have... Every entrepreneur's fantasy is you've got different VC firms that are kind of fighting over a term sheet, right? And that's great. What a terrific fantasy. In practice, you don't control the timeline at which VCs move. And in particular, what we've found is that VC firms varied wildly in their appreciation of this problem space.

So what we would have happen over and over again is we would hit a firm where one partner would really understand it, but they would struggle -- the rest of the partnership wouldn't understand it. I had one VC firm that reached out to me, they're like "Hey, we hear you're raising. We want you to come in and pitch to the firm." And I'm like "Terrible idea. You guys are a terrible fit. No."

**Adam Stacoviak:** You just told them that point blank?

**Bryan Cantrill:** Oh yeah, absolutely.

**Adam Stacoviak:** Was that your response via email, is like "No, it's a terrible fit."

**Bryan Cantrill:** "No, terrible fit."

**Adam Stacoviak:** \[unintelligible 01:22:05.16\] in those situations though, right? You can't waste people's time, or your time.

**Bryan Cantrill:** 100%. So I'd be like "We're a bad fit. This is hard tech. Yuck, you're not a hard tech firm. We're doing hardware-software codesign... Every one of your portfolio companies is on a public cloud. You're a bad fit." But this is like total shades of HBO Silicon Valley, in the Sand Hill Shuffle...

**Adam Stacoviak:** Yeah. Negging you, and stuff. They were nagging you, you were negging them...

**Bryan Cantrill:** Yeah, so you tell VCs --

**Adam Stacoviak:** Or was it fake users? Which one was it?

**Bryan Cantrill:** Exactly. It was negging them. And obviously, I'm using this deliberately. But when I'm saying "Look, you're a terrible fit", they're like "Oh, we're now very interested." I'm like, "No. It's like, no."

**Adam Stacoviak:** "We're more interested because we're not a good fit."

**Bryan Cantrill:** Exactly. And so actually, with this particular firm, I remember telling them that the -- also, in particular, on our first slide, it's like Jeff Bezos, at the time - now it's Andy Jassy... "This is the company. Jeff Bezos is not going to own and operate every computer on the planet. Not every server is going to be a public cloud machine. There is going to be on premises computing. Folks that run on prem, whether that is for economic reasons, as Samsung had to, whether that is for risk management, or security reasons, as certainly you see in federal spaces, government spaces and so on, whether that is for latency reasons, as you get people kind of collocating near their data, and so on... There are lots of reasons to run on prem." And they're like, "Okay, yes." But then you get to the next slide and their first objection is like "But won't it all go to the public cloud?" I'm like, "Okay, this is why we shouldn't be here... Because you only see public cloud computing. And we are very pro-cloud. I love cloud, I think it's great." I think for startups, public cloud is perfect, because when you are starting from zero, of course you should not buy your own hardware. Like, go spin that up in the public cloud. That's awesome. But you get to a certain scale, or you have certain constraints, you will need to own and operate your own computer, in your own data center, collocated data center. So they just don't see that. They don't see that world.

\[01:24:18.14\] So with this particular firm -- so every time I'd be like "You know what, this is why we should leave." So kind of like "We should leave." "No, no, no, no. Stay, stay, stay. No, we're interested. You're making us more interested." And like "Oh, God, what are we doing? Why are we doing this?"

And the real problem is they would kind of convince us to stay, and we would say. We should have just like walked out. At one point I did tell that particular firm, I'm like "You have to understand, we are going whaling. You should be fishing from the pier. You should not come whaling with -- it's like, stay here. You don't want to come out on this whaling vessel with us. You do not want to be on this multi-year, dangerous voyage." But again that did nothing. And of course, they spent a ton of time, and then ultimately, they realized, like, "I think we should fish from the pier." It's like, "Yes. You should fish from the pier."

**Adam Stacoviak:** "Thank you for the education \[unintelligible 01:25:12.00\]

**Bryan Cantrill:** Yeah, yeah, exactly. Exactly.

**Adam Stacoviak:** That is hilarious. Yeah. Nagging, though... Well, that is a lot of what happened in obviously the show that we keep mentioning - and I'm resisting going deeper, but... You live this stuff, man. That's crazy. Not only you're a fan of the show, but you literally live -- I mean, I live it too, but not quite the same way that you live it. You've lived it from the Halt and Catch Fire kind of ideas, to truly Silicon Valley satire TV show ideas... You've been in the room where you neg yourself... Like, that's crazy.

**Bryan Cantrill:** Oh, it's great. I mean --

**Adam Stacoviak:** What a blessing, right?

**Bryan Cantrill:** I think it's great. I love it, and I just think it's extraordinary, because it's so well written and so funny... And it's actually a way that I can -- certainly with my teenagers, I can actually kind of pause it and explain like "No, this is like a real point that they're raising here. And this is like a real issue. I've actually seen this kind of issue." I kind of explain how -- because it's so well researched. It's really well done.

**Adam Stacoviak:** Well, even earlier in the show, I think -- I almost mentioned it, but I'll kind of mention it briefly here... You were talking about Sun, and the way Oracle bought it, and the acquisition process... It made me think of when Jared had said in episode one "You take an application like this and you make it business-facing." Like, that literal line there was like Oracle's -- somebody inside of Oracle said that line to somebody, and said "We should acquire Sun. You take an application like Sun and all they're doing over there, and you make it enterprise-facing, and business-facing. And then you see what can happen. Like, they have no idea what they've built", which is kind of what Richard Hendricks dealt with, which is he built this music search app that had superfast compression... And he was just trying to build this music app. He wasn't trying to build the compression algorithm... But he kind of stumbled on what had become in the show middle-out, and all this fun stuff... And he was largely unaware of the true diamond in the rough that he had created. And that was Hooli trying to give him the money, and then the whole entire show spun off from that day one, basically.

**Bryan Cantrill:** Yeah, totally. I think in terms of like actually what motivated Oracle with respect to Sun, I think it actually is Java, for what that's worth. I think what they saw was the opportunity to go really exploit Java, and use Java to coerce rents out of -- assuming, in many ways, Oracle v. Google was very predictable. I think we've kind of forgotten how important that battle was. And I guess -- I mean, I guess you could argue that it kind of ended in a stalemate... But Oracle I think wanted to acquire Sun because of its ability to go extract monopoly rents out of Java... Which is a little bit ridiculous, and I think has probably accelerated the adoption of alternatives, for sure.

**Adam Stacoviak:** \[01:28:12.25\] Well, \[unintelligible 01:28:12.19\] for a second there, but Oxide is very much an ambitious play. How many years are you into this -- is it three years?

**Bryan Cantrill:** Four. Four and change.

**Adam Stacoviak:** Four years.

**Bryan Cantrill:** Yeah. Four years and a long way to go. This was kind of always the belief, is that we -- the ambition here is substantial. We're really trying to make up for a multi-decade rift between the kind of computers that people could buy, and what the hyperscalers were making for themselves. And what we wanted to be able to do is really develop the rack scale machine that includes both the hardware and the software required to create and manage elastic infrastructure on prem. Cloud computing, effectively, on prem. And there's a lot there. There's a lot of surface area there. Because it's not just -- it's virtualization, it's compute virtualization, of course, but it's not just compute, right? It's storage virtualization, it's network virtualization... We've done our own hypervisor, we've done our own host operating system, we've done our own embedded operating system for the service processor, we've done our own switch, we've done all of our own software there, we've done our own -- we talked about Crucible earlier, we're obviously using ZFS, we've done our own... So we've done all of that stuff, we've opened it all up, which has been fun... So it's all open source. We've done our own control plane, our own distributed system... And wherever possible, we will take components off the shelf. We're not trying to reinvent everything for its own sake, certainly. But we believe very strongly that we need to take full responsibility for the system. And what we will never do is what Dell had done to us so many times, is effectively blame the customer for their problems. And when you've got an Oxide rack, and if you've got a stock provision, or something's not working or not performing or what have you, it's like, we want that to be an Oxide problem. And even if the root cause is not an Oxide issue, we want to be able to fully understand all aspects of that problem.

So owning every aspect of our stack has allowed us to do that, and we've come -- it's extraordinary that we got this thing working, and we got it shipped, and we got it passing regulatory compliance, so we've got it running in production now, in customer data centers... It's really exciting. But there remains a long way to go. So this is not -- the journey is nowhere near at its end, for sure.

**Adam Stacoviak:** Well, I think it came from a good place really, at least based on your story, with this animosity with your personal experience with Dell... Not knowing the system -- you don't want to build everything, I'm assuming; I'm paraphrasing, to some degree. You don't want to build everything, but you do want to if you have to, because you want to know your system, so that whenever the future Samsungs that the future Bryans work at come to you with a problem, you don't tell them to re-flash the EM.

**Bryan Cantrill:** That's exactly right.

**Adam Stacoviak:** Right?

**Bryan Cantrill:** Yes!

**Adam Stacoviak:** You have a different answer to get to the customer's problem, and get to root cause. And I think they couldn't -- based on what you shared with your story and your history and your experience, was that Dell could not own the problem, because they could not realize that they were the problem in the way they treat their systems, and first principles, actions etc. You have very much rebuilt what could be based on first principles, so that you don't have that same scenarios in the future. So you're kind of like protecting the future Bryans and whomever elses that might do what you've done, from having that same experience.

**Bryan Cantrill:** That's exactly right.

**Adam Stacoviak:** And actually, I think the other bet probably is the on-prem. Not so much that cloud is bad, but public cloud is not the only way. And we're seeing permutations right now in the marketplace. You've got that with David Heinemeier Hansson, DHH famously, with Rails and Ruby on Rails, pushing back hard, ejecting from the cloud... Now, that's one path, and probably way more that you're personally familiar with, but that's what I'm most familiar with, is there's a lot of pushback on that.

\[01:32:24.02\] And I actually have a friend - and we talked loosely in DMs about this. I have a friend that works for ERCOT here in Texas, and he's like "We only do on-prem. We don't have any public cloud stuff. We only do on-prem. We only do rack and stack our own thing, and we only have our own collo." So they're like -- that's your future customer. You're welcome.

**Bryan Cantrill:** Absolutely.

**Adam Stacoviak:** I mean, you did the work. I'm just just "Hey, do you know about Oxide? Okay, cool." Check.

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** And I sent them the URL right away via text. I was like "Check them out", all that good stuff. But like you had said before, there's a lot of organizations out there that just the public cloud will never work for. And the lack of visibility into all the permutations of the system, whether it's storage, o computer, whatever, that invisibility with other systems like Dell, like you'd mentioned, that's gonna be a challenge for those people. And it is a challenge, because they're working around it with different systems, like Kubernetes or whatever, to get observability, and that scale, and all the resilience you want in a stack.

**Bryan Cantrill:** That's exactly right. No, that's exactly right. And Kubernetes is obviously great, and we actually just got back from Red Hat Summit, which was really exhilarating...

**Adam Stacoviak:** I saw you, man. I was like "Man, there's Unix, that big, old rack..." I loved it. I was watching some videos on LinkedIn, so I appreciate the coverage there.

**Bryan Cantrill:** Oh, it was great. And we have a lot of supporters of Oxide inside Red Hat, which is really exhilarating... And OpenShift on top of Oxide makes a lot of sense, and I think that's so -- Kubernetes does a great job of kind of solving that problem from the VM up... And it's from the VM down that's been the issue. And there's been a lot of challenges with respect to the integration, and... Again, the whole thing goes sideways; if you're running on prem, the whole thing goes sideways, and everyone's pointing fingers at one another. And ultimately, as the person deploying the infrastructure, you feel like -- you're trying to manage divorce proceedings between... There was a great tweet, "Dealing with a support issue with Dell and VMware I feel like I'm dealing with my divorced parents." And for end users, that's a really frustrating feeling. And we're excited that we're able to help people deliver high-quality, robust infrastructure, and we can help them delight their customers, and help them -- because again, we're not the thing. We're the thing that gets you to the thing. Our job is to enable other people to do great work with this incredible device, the computer, and enable one another to really innovate, and so on. But it's like, infrastructure should be out of the way to allow you to do that. You want that infrastructure to be -- and honestly, AWS, how much innovation has the public cloud unlocked? A lot. I mean, the public cloud has been really important for a lot of new company formation... And I think that a lot of that same kind of pace of innovation has arguably been deprived to folks on prem. So we're really excited to extend that.

**Break**: \[01:35:35.03\]

**Adam Stacoviak:** Aside from long side, has there been, or has there been any particular push for being very on-prem-friendly? Like, you're building the full stack, the full rack. Hardware and software marriage. What Apple has done, in a lot of ways, for the Macintosh, where you marry this beautiful \[unintelligible 01:38:20.09\] product. And in a lot of cases there's beauty in everything that Apple has really made; not just literally beauty in its physical form, but the marriage of great hardware paired with great software has unlocked a lot of creativity for creators. I'm on a Macintosh right now, I assume you probably might be as well, I don't know; maybe the year of Linux desktop is finally here for you, who knows...?

**Bryan Cantrill:** I'm on a framework, so... Similar, though. \[unintelligible 01:38:44.03\]

**Adam Stacoviak:** Gotcha. Yeah, I'm just thinking like, who else is for on-prem? Is there anyone else doing any version of what you're doing?

**Bryan Cantrill:** Oh, if there's other companies? No. \[laughter\] I mean, no. And I kind of assumed that -- I mean, there have been companies that have taken swings at it. But part -- and when we were raising, we went into all of them in detail. So there's so many companies that you have not heard of, that I dug up the graves for, talked to the entrepreneurs, talked to the VCs, like "What went wrong?" And a bunch of them had hit on kind of the need for the same thing that Oxide had done. The challenge is that they didn't go big enough, early enough. So by the time they realized the actual true enormity of the problem in front of them, they were really low on capital. And from all of that, I realized that you really need to take -- it's very technical, and it's very big, and you can't underestimate it. You've got to be really

clear-eyed about how big this thing is. And you've got to take the right approach to the market. You can't try to take a shortcut here. What you said earlier about first principles. First principles is very important. You've got to do it from first principles. And when you're taking -- taking venture money, it takes the right kind of investor to not take shortcuts.

**Adam Stacoviak:** Well, yeah, because they want a return, right?

**Bryan Cantrill:** They want a return.

**Adam Stacoviak:** That's whole point.

**Bryan Cantrill:** That's the whole point.

**Adam Stacoviak:** Kind of. For the most part. I mean, the right venture capitalists will be in it for the long haul, because they see the long haul journey, and they understand the road required to get there. But in the end, the goal really is return.

**Bryan Cantrill:** Return is the goal. And also, if you're uncomfortable with that goal, do not take venture money, because their goal -- they have responsibility to their LPs. And it takes the right kind of investor to not take a shortcut. And it takes the right kind of investor to -- and as a company, you're constantly trying to figure out "Okay, what is the most expedient path we can take, that is not going to result in work that is throw-away or going in the wrong direction. So we were constantly doing that, for the lifetime of the company. We are constantly trying to figure out "What can we do that gets towards --" The problem is the minimum viable product is very large. So I had kind of assumed when we raised that another company would see that we had raised, and realized that like "Oh, you actually can raise for this." And I assumed that we would have another startup that would raise behind us. But it turns out it was a little harder to raise than I thought it was going to be...

I mean, obviously, we raised, and found the right investor, but I also really realized that it's going to be really hard for a company coming behind us. And I want to make it -- for anyone who would have that kind of desire, anyone who's got that kind of entrepreneurial spirit, who would want to raise behind us, we want to make sure that coming to Oxide is a much better approach for them, and they would much rather just like "Actually, I'd rather just join Oxide."

\[01:42:06.10\] So we really tried to make ourselves appealing to anyone who had that desire. And I think we've done that. I think we've got a lot of people at Oxide who have that -- who certainly share our mission, and have that mindset of creating something new. And as a result, I think due to a combination of factors there's not really another startup raising behind us... Which - you know, there are some investors who are just like "Well, this is such a great idea. Why are you the only one?"

**Adam Stacoviak:** Because it takes too much.

**Bryan Cantrill:** It's hard.

**Adam Stacoviak:** But you have so much -- I mean, to speak for you, hearing some of your history and then reading your resume... You have so much history in what has gotten you particularly here today. Sun, DTrace, the sheer desire to build the best system, the morals and desire to build the best thing... Not so much just the best, but the thing that you understand how the system works. Observability was your original concern into the system. And that probably from just a psychological perspective is also your same demeanor currently...

**Bryan Cantrill:** It is.

**Adam Stacoviak:** Observability into the thing you're building, with the right kind of people. Your conviction for Rust. Just being on the call with 35 people asking you to do intros, when all you want to do is solve your problem... Like, "It pissed me off enough, and I'm just going to create a company around this thing, okay?"

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** Right? That's how I look at like your journey, based on what I've heard, to get to here. And compete with that? No, thank you. No one has the acumen and the history that you have to be where you're at today... Enough to not want to just join, like you had said.

You're kind of the positive side, the positive effects, I guess, of a black hole, with gravity. You can't get away from it. Oxide does visually - beautiful. Technically - beautiful. Organizationally - beautiful. Even from your principles - beautiful. You've created a beautiful thing to not want to compete with, in a lot of cases, to go on prem. So you're in a great position, from what I can tell.

**Bryan Cantrill:** Yeah, I mean -- well, thank you for saying that. That's certainly been our intent. And it all goes back to kind of that question that a friend of mine asked me, in terms of like what made me happiest. It's like, "How do you kind of gather--" All of that is in the spirit of gathering up a team. And we've done some things along the way that have been really surprising, and that I would not have anticipated. And as we have formed the team, gathered the team, built the team... The team has reinforced itself, and it's just absolutely extraordinary, and so exhilarating to watch people create not just for the customers that we want to serve, but create for one another. And really being inspired by one another is just really singularly satisfying to watch.

**Adam Stacoviak:** Are you by nature individually or corporately contrarian?

**Bryan Cantrill:** It's a great question. I don't feel that way. But I also think that there may be some people who know me well, who would feel it's ridiculous that I would not say that I'm contrarian... Because there have been so many things where I have thought differently than many people. And I think I'm unafraid to go my own way. I'm unafraid of my own conviction. And I think that conviction doesn't necessarily need to be contrarian. Like, I'm not -- I'm definitely not uncomfortable when I agree with a lot of people. That's fine with me.

\[01:45:51.18\] You do get folks that are so contrarian, that like "No, I'm comfortable if I'm doing the same as everyone else." And I don't feel that way, but I definitely have the strength of conviction. And I think the older that I've gotten, the more that I've felt some of that strength. Because I think that you kind of go through this -- you know, when I was young I would feel this outrageously strong conviction, just like when I was putting Matt and Adam in the back of a cab, that I feel kind of in hindsight you're kind of like "Alright, you're a bit over your skis. You've got no basis for feeling that strong a conviction." But that strength of conviction is really important.

You get kind of this point in I think mid career, where I began to feel that maybe I was too strong in some of these convictions, and beginning to be -- and some of that amenability can be really good... But in doing some of that, I've also -- I kind of rediscovered the importance of some of those deeply-held convictions. And I would say that the experience with Node.js and Joyent is an example of that. We were kind of rediscovering like "No, no, this is why--" And kind of finding different ways to phrase that conviction too, where it's not just like, okay -- this is not just like in my gut; let's actually take this apart a little bit. And being very explicit about values is a great example of that, where it's really important -- at Oxide we are very explicit about our values, and we differentiate that from the principles. And that's been really, really important for the company, because it has given us a lexicon by which we are able to kind of express what is in our kind of collective gut, because we do have shared values... But then especially as those diverge a little bit, being able to kind of express that divergence.

So I do think I've got -- I don't think I'm contrarian, but I think that I have the courage of my conviction, if that's... And I've also been right - and maybe this is a little bit dangerous, but I've also been right plenty of times when lots of people thought I was wrong... And I think the reason I say that that's dangerous is because I think that you do see this in folks, that if this happens to them enough times where they've been right when everyone else has been wrong, they do become just like abjectly contrarian, and they start to ignore preponderance of evidence, because they're so used to -- like, "Well, sorry, I've been right before, when all the evidence has been wrong. And so now I'm going to be--"

**Adam Stacoviak:** Anti data, anti evidence, whatever it might be.

**Bryan Cantrill:** Anti data, anti evidence... And I think there's a whole generation of entrepreneurs that you see this in, that is really -- it's dangerous. So I would like to believe that I am nowhere near falling into that, where I'm always willing to listen to evidence in the data, but I'm also willing to have the courage of my convictions, for sure.

**Adam Stacoviak:** I guess zooming out, maybe big picture to some degree... You're four years in, you said you have a long road to go, and you've taken a long road to get here, and you're not done... Which means maybe you're not exactly at product-market fit, or what they might call product-market fit...

**Bryan Cantrill:** Oh...

**Adam Stacoviak:** That's not my question, but I'm curious about that piece there.

**Bryan Cantrill:** No, I think we're a product-market fit, I just think that there's like --

**Adam Stacoviak:** You're getting close, right? The idea is there.

**Bryan Cantrill:** For sure. And I just feel that there's so much more to go do to execute on the vision. Just like -- I mean, you look at AWS, where AWS was 2010. Whatever, 2014. It's like, there was so much more to go flesh out to execute on their vision... And I think that we've got product-market fit, it's just that there's so much more we can and will go do... Because this rift -- because no one else has addressed this rift, there are now a bunch of things that we uniquely can go do, that no one else has been able to go do. And that's the stuff that is super-exciting. When you go think about like - now we can actually begin to think really, truly holistically about the system, and we can begin to do things like true holistic power management, and be able to correlate software workload to the CO2 that it emits... Which we've never been able to really do before. There's a whole bunch of stuff that we can go do, and it gets to that observability that's deep in the marrow...

**Adam Stacoviak:** \[01:50:28.14\] Yeah.

**Bryan Cantrill:** And I feel that there are years and years and years worth of work to go do to fully execute on that vision.

**Adam Stacoviak:** Okay. So given that - that was not exactly my question; I wanted to understand product-market fit and what your position was on that currently. If you're successful -- I imagine you're a version of success today, so I'm not gonna say you're not successful by saying "If successful." If you're truly successful to where you're trying to go, what will happen to on prem, to compute? How will the market be divided when it comes to on prem, private cloud, to public cloud? What will happen?

**Bryan Cantrill:** That's a great question. So I think that public cloud, I think, will always be important. I think that it will -- just as we will always have hotels, I think public cloud will be important. I think that the presence of a viable on prem option, that gives you the same developer velocity, for lack of a better word... I'm not a huge fan of that term, because it makes a developer sound like a projectile... But I'm gonna go with it. But the ability to deploy infrastructure quickly - if the on prem user has that same power, I think you are going to have different people making different decisions. I think you will have people who grew up on the public cloud, who grow to a certain scale on the public cloud, and then realize "Actually, I want to control my own thing. I want to get on prem. Economically, I want to get on prem." I think you will get people who want to do "Actually, I don't want this to be op ex. I want this to be cap ex." Which is reasonable.

I mean, if you look at -- we all know Moore's Law is slowing down. Everybody knows that. What does that actually mean though, Moore's law is slowing down? If Moore's law is slowing down, that means that the life of a computer should be longer. And if the life of a computer is longer, that means that there's more of a reason to own that asset, if you know you're gonna use it for the lifetime.

I mean, not that long ago, Amazon changed their depreciation schedules, right? This is one of these little details that's happening in the financial disclosures of a bunch of companies, is that they are changing their depreciation schedules. This is financial engineering; this is making their numbers look better. But let me tell you what they're not doing when they're extending this depreciation schedule; they're not cutting prices.

**Adam Stacoviak:** Right. They're making more.

**Bryan Cantrill:** They're making more. And if you're going to run compute for years, at scale, you should own it. And I think that you're going to have -- I believe that in this arbitrary future, the choice between on prem and cloud computing should not be the choice between modernity and antiquity the way it is today. It should not be the choice between a product and a DIY mess the way it is today. It should not be the choice between "I've got actually a vendor who is very responsive to me", be it at Amazon, or GCP, or whomever, versus this finger pointing exercise I have between... It's like, that should not be the choice. The choice should be purely around economics, around risk management, around latency... And I think that for a bunch of people, they will remain on prem, they will choose to be on prem... And then I think you're also going to have people who are going to always have to be on prem, and I think in many ways the thing that is most satisfying in Oxide is bringing those folks modernity. Because they've got no choice. They've gotta be on prem.

\[01:54:13.28\] I'm a naval vessel at sea, right? It has to be on prem, sorry. We're not using the public cloud on an aircraft carrier. And it's like, "But what is that using for its infrastructure? And shouldn't that infrastructure also be elastic infrastructure?" And I think that that's where you're allowing people to do things that they fundamentally couldn't do before.

So in terms of how it settles out, I think it'll be interesting. I think it's hard to imagine that public cloud will be any less than a third of compute, maybe even two thirds of compute, kind of somewhere in there... It's hard to imagine that on prem is going to be less than a third of all compute. So I think it's going to be kind of a third -- I would say a third, very strict on prem, a third probably very strict public cloud, because it just makes sense... And then you've got a third that will be kind of swinging a little bit in the middle. But in a world where people are not having to choose between modernity and antiquity; they're able to get that modernity wherever they are.

**Adam Stacoviak:** How do you quantify, I suppose, the total addressable market, the TAM of this? Not that you'll capture it all, but how do you address -- I mean, obviously, any company is like the TAM, right? Anybody who ever has bought public cloud is in the TAM. Anybody who has ever done anything on prem, at any scale, is some version of TAM. But at some point, you look at who you can truly capture. What is the capturable in the next, I don't know, year to five years, quantified in dollars, to some degree?

**Bryan Cantrill:** Alright, are you looking to \[unintelligible 01:55:53.11\] Are we raising here? Alright, there we go --

**Adam Stacoviak:** Off the cuff, no true numbers here...

**Bryan Cantrill:** No, I mean, the TAM numbers are always --

**Adam Stacoviak:** For sure, that's the fictitious one. I want the closer to real.

**Bryan Cantrill:** 150 billion easily, and you're gonna get a fraction of that. I mean, I think that we have got a -- I'm less focused on that, and more in terms of like what that total market is... Because we know the total market is extremely large. So to a certain degree, it doesn't hugely matter, because it's very large.

**Adam Stacoviak:** It's basically everybody, yeah.

**Bryan Cantrill:** The total potential addressable market is certainly large enough to allow for a viable Oxide. No question about that. So our question is not that; our question is more -- and this is what we've been engaged in post our launch, and as we are getting customers into production, and getting new customers online, is finding those customers that represent those big verticals, and when we're talking about product-market fit, making sure that those customers are absolutely delighted with their experience, and just getting totally bolted down. Because what you don't want to do is go overly broad, while you're still figuring that out. Because the TAM is very large, but also very varied... And one of the ways that companies have perished is that they go too broad, too early, they get pulled in too many different directions, and they actually end up truly satisfying no one, and they drift beneath the waves.

So our focus has really been on getting our earliest customers, identifying the right customers, customers for whom Oxide is really strategic, and represents a big part of their vision for themselves... And then getting those customers just delighted with what they're getting. That kind of emphasis on customer delight is really important to us as a company. And it's a stark contrast, I think, from what people have had in the on prem space.

**Adam Stacoviak:** \[01:58:07.11\] Well, that may be true... And maybe as you scale it gets harder and harder to do that. I would argue that Dell is very big, and so to use them as the example, because that's where you began - I think as you get to that scale, it gets harder to give every customer the most... But I guess at the same time it was Samsung. So it's not like they didn't have a reason to be very helpful, but I guess to be the best at service, when you're as big as Dell, may be the actual challenge. Maybe the ability to execute is being smaller, or more nimble, or I don't know how to describe that necessarily... What do you think?

**Bryan Cantrill:** Okay, so challenge accepted. So I think that -- so great customer experience comes from a couple of different things. It has to start from a great product. If you don't have a great product, it's really hard to paper over that with great customer experience. And that's Dells problem. For a long time, I thought Dell's problem was they don't care about me. Then I began to realize that like "No. Dell's problem is they don't understand their own product." I keep waiting to get through to the right person at Dell... It's like, there is no right person at Dell, because --

**Adam Stacoviak:** Because nobody knows.

**Bryan Cantrill:** Because nobody knows. And I think that if you can develop the right product based on first principles, it's like being a healthy person. If you're a healthy person, it's easy to stay healthy. If you start having many things go wrong, it's very hard to pull all that back together. And we can, I think, as we scale - and it's certainly a challenge for the company, but I think if we remain deliberate about how we add to the company, unified by our values and shared mission, I absolutely think that we can continue to deliver an extraordinary customer experience... Because these things build on one another. And I think because we have built this thing on first principles, magic does not happen in this system. So if we see anything go wrong, we want to completely understand it. And we've already had this happen a couple times with customers, where something happened that didn't even really affect them, but it bothers us. So we'll be like "Actually, so that issue - I know it's not an issue for you. We've actually taken it to root cause, and here's what we have discovered", and being kind of completely transparent with them about what that whole journey...

I think actually in terms of that customer experience, being open source is actually huge. I mean, we had a customer we were working on -- we wanted to reassure them that they had hit an issue that we were working on... And we wanted to reassure them that we're continuing to work on their issue. They're like "No, no, no, we know. We're actually watching the GitHub issue. We've been watching the conversation back and forth this morning between two engineers on it." And that level of transparency is something that I think most companies -- I'll just be totally blunt. Most companies don't have the confidence to be that transparent with people. Most companies are afraid -- I mean, most companies are absolutely terrified of saying what Dell was never able to tell me. "We don't know." Because fundamentally, a company doesn't -- that kind of punctures this myth of the company. And we've taken the opposite approach, of like "We're going to be first principles, we're going to be completely transparent." I'm happy to tell you when we don't know. By the way, if I tell you we don't know, I'm also going to tell you "Here are all the things we're doing to try to figure this thing out. We don't know, but here are our hypotheses; here's all what we're doing to actually go understand this thing."

**Adam Stacoviak:** \[02:02:01.07\] Yeah. Well, that's because your "I don't know" has a parentheses after it, with the word 'yet'. "We don't know yet."

**Bryan Cantrill:** That's right.

**Adam Stacoviak:** "Because we're on the pursuit of knowing, but we don't know yet. And I'm okay with telling you that." That's clarity, right? That's setting clear expectations; clarity that you do not have the answer just yet, but you're trying to get there. I think that's a healthy relationship. So many people hide behind, I guess maybe their pride, to some degree... Either a corporate pride, or a personal pride, where "I have to know this--" I mean, their head can roll, too. So the person who couldn't give you the answer couldn't tell you that because maybe they'd be fired. And that's an awful thing to have happen to you, obviously. So there's many reasons why they can't fully say that... But I think from the top down, building a company that can say "I don't know yet" is the way to be, because you enable everyone else to say, and you empower them to say "I don't know. But we're gonna find out. And this is how we're trying to find out."

**Bryan Cantrill:** That's right. And I think we've taken that transparency to somewhat new extremes... One thing that I love is that we -- I mean, obviously you and I are both fans of podcasts... And one thing that's been super-fun is that we've taken the engineering team and we have talked about things that engineering teams never talk about. Things like \[unintelligible 02:03:17.08\] or compliance. Folks don't talk about it, because again, they feel embarrassed. They don't want to tell you about all the things, all the terror of bringing up a new board. And all the things -- and it is terrifying... Because by the way, if you can't boo, you don't have a product. So the stakes are high. And there were some moments that were really, really terrifying. I love sharing those moments... Maybe just because I'm an oversharer, but also because it's like, it's a great story. It's like, who doesn't want to hear a story of the time that we didn't know if we were going to live or die, because we had a 1k Ohm resistor where we should have had a 499 Ohm resistor... Which was a concrete example where 500 ohms of resistance was the difference between life and death for Oxide. And we've had lots of variants of those.

**Adam Stacoviak:** I bet.

**Bryan Cantrill:** And I think they're really interesting, I think they're really instructive, and I think that more companies should describe more of this stuff in detail, because they would find that they build better relationships with their own customers. Certainly, if I've got a company that's being that transparent with me, I love it, as a customer of theirs. This is great. This is giving me the reassurance -- you telling me what you know, what you don't know gives me more assurance, because I also know "Hey, if you tell me you know something, I actually know you know it. Because you're so candid with me when you don't know something, I actually have got a lot more confidence in the stuff that you do know." And to me, that's been really, really important. It's been really important with our earliest customers, and it's been really exciting, I think... But it's also terrifying for a company to have that much transparency.

**Adam Stacoviak:** Yeah, absolutely. I guess where are you on this journey? ...since we began kind of the funding method to get here, and the craziness that you did with the conviction to actually do this idea... Are you planning to raise more money anytime soon? What keeps you alive? I know you've got a launch that you've done, you're in customers' data centers... Where are you at as a company in terms of when you need to raise again, and healthy, not healthy?

**Bryan Cantrill:** Yeah, so as a company, I think we are -- we absolutely need to raise again. So we had very much raised with the intent of -- our next milestones were getting in the market, getting our earliest customers, getting them successful. And we're really excited about our progress there. We will be raising again, for sure, and we -- I think we're starting that kind of towards the end of the year. We're excited, because I think there's some things that we have done that look a little less idiosyncratic now... I mean, it was really frustrating, I would say, that so many firms were puking at the integrated hardware/software...

\[02:06:19.19\] I mean, it was amazing, and we talked to -- I mean, I'm gonna call them out, because they deserve to be called out for it... NEA was like "We will not fund any company that has a hardware component." And it's like "Okay. Really?" First, I'm not even sure that's right. I'm sure you could find hardware companies in their portfolio. I'm sure this was just an excuse they were giving us... But it's like, so you do not want to fund the next Apple, the next NVIDIA, the next AMD? You're not gonna fund those companies. Those companies are not interesting to you?

**Adam Stacoviak:** Right...

**Bryan Cantrill:** And I think that that has changed, I'm sure, in the last four years. I think that this is where the AI boom has had such a hardware component, that it has reminded people that actually --

**Adam Stacoviak:** It's not just software.

**Bryan Cantrill:** It's not just software. It's not just software. So we've got, I think, more -- which is exciting, that we've got more and more investors that are not puking on that. That are excited by that. That see the potential, that see that there's not a lot of other folks doing this, which is really exhilarating. So yeah, we will raise again, but we're definitely confident that we're gonna be able to do so, because we've got a lot of wind in the back at the moment.

**Adam Stacoviak:** Since you're such a Silicon Valley fan, and I think we can both agree that we're big fans of that show... When I was talking to Resend's founder, Zeno Rocha, recently, towards the end of the show I said "Oh, so you're in season two for Resend." What season do you think you're in in terms of a business?

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** Like, if you can align the placement of your business to a season, juxtaposed against Pied Piper, are you --

**Bryan Cantrill:** Oh, my God...

**Adam Stacoviak:** ...have you just landed Dan Melcher's data play, or...? Where are you at?

**Bryan Cantrill:** Okay, so that is so funny. What a great question. Oh, my God. I love the Dan Melcher question, because we have not \[unintelligible 02:08:14.20\] So I think that that's a really interesting object lesson. There's so much in Silicon Valley \[unintelligible 02:08:18.24\] So for those who have not watched the show, Richard in kind of a moment of desperation lands this insurance company for its data. And there's a really -- the interesting object lesson there is it's a bad customer for them, right? They go in purely as a cost savings play. Like, that's it. And there's no \[unintelligible 02:08:43.24\]

**Adam Stacoviak:** Sure. Season one's debacle, yeah.

**Bryan Cantrill:** After season one's debacle, their proponent at the insurance company is only looking to save money. That's it. It's not really any strategic value. So there's the episode where there's the uncharacteristic cold day in Silicon Valley, which of course is like a warm day in most other places; it's like 50 degrees, or whatever... And it's causing a bunch of data transfer that Richard's not anticipating, and it's like a financial crisis for Pied Piper. And it's an interesting object lesson in not being transparent. Melcher's got no idea what's going on behind the scenes, doesn't have any appreciation or doesn't care at all about the technology, and is really only interested in money. So we've actually wanted to avoid -- I'd actually used that example a couple of times, of like... Because we have had customers that come inbound, that are not a good fit for us, because we're not sufficiently strategic to them. And we don't want them to be in a situation where you want to take us in a direction that is actually not where we want to go as a company. And you want to be in a position where you've got some discretion over the costumers that you take. Now, I mean, I think what's also great about that particular kind of storyline is they don't have that discretion. They're desperate.

**Adam Stacoviak:** \[02:10:06.15\] Yeah. I think they couldn't get venture capital, right? That was part of it. Like "If we can't get VC money, \[unintelligible 02:10:08.27\] I think the one analogy was Jared was on Zillow, and he was looking at a property that he can't buy; just a dream, because he's a dreamer... And I think it was like "Well, that would be a Ponzi scheme. We need to make something, to sell something so we can, live basically." They needed a deal. And that's kind of where they went into that. I'm not suggesting that's exactly one to one true for you, but I think where are you at in seasons is like -- will you eventually kill yourself, too? Not yourself as a human being, but does Oxide have to fail disastrously to actually not take over the world \[unintelligible 02:10:45.25\] for everybody, kind of thing.

**Bryan Cantrill:** Yeah, "No, thank you" on that. There are many seasons of Silicon Valley that we will not be retracing. There will be no Piper Pulse in Oxide's future. I obviously love the late seasons of Silicon Valley, when they get much larger, because there's so many large company just shenanigans that they pull in there that are just genius... But we're in those early days. We're in those early days, of the early customers, and getting those customers -- unlike Melcher, getting those customers really delighted, and beginning to scale out, as we scale the number of customers as well.

So we're definitely -- it's early for the company, for sure... But we also have a lot of technical risk that has been de-risked. I mean, this is an audacious thing that we did. And the fact that we got this -- again, our own switch, our own \[unintelligible 02:11:43.07\] our own operating system, our own control plane, our own everything... The fact that this is working, let alone running in production, let alone working well, is really -- it puts a lot of tech risk behind us, and a lot of opportunities still in front of us.

**Adam Stacoviak:** So that customer you mentioned, that called upon you, in that case where it wasn't a strategic alliance, or in alignment... Did you tell him no? "No, we can't sell it to you"? Is that what you do when there's no alignment, you say, "We're for sale, but we can't sell to you"?

**Bryan Cantrill:** "We're just not a good fit for you right now." And you can feel when people are -- and you've gotta love these champions who are -- they're their own internal champions, and they love Oxide, and that's great... But we really have to kind of explain to them why we don't think we're a good fit for where you are right now. And there are often a bunch of factors, but one of them is just like "Look, all of the compute that you need is going to be on one rack. You never are going to need 10 racks or 20 racks. The beginning and end of your deployment is going to be as a one-rack customer." And that just immediately lowers the strategic value of Oxide for them. And we just don't want them to be in a situation where it's like you literally have no other computer, and you are solely dependent on Oxide. Obviously, we've made that successful, but that's just not the kind of the right customer for us right now. We're really looking for those customers for whom \[unintelligible 02:13:19.20\] is strategically very important, and one rack is not the end of where they're going. It's the potential beginning.

**Adam Stacoviak:** So if you know who's not your customer, where are you the best fit? Even right now, in the next year-ish of where you want to be at to understand your fit for the customer, see it deployed, understand the permutations of what they're using it for and how it's being used... What is the best fit for Oxide today?

**Bryan Cantrill:** \[02:13:49.08\] I mean -- and we've got a couple of these, which is great. I'm just blessed with \[unintelligible 02:13:51.20\] verticals, but folks that are either significantly on prem today, or want to do big on prem experiments, that are like "I'm currently -- I'm public cloud born, but there's some big strategic reasons why I may want to go on prem in a very big way." Cloud-educated, for sure. Like, "I understand cloud computing, I know the public cloud, but it's not a fit for this use case." Deeply technical is extremely helpful, not because the product -- the product itself, I mean, we pride ourselves on the fact that it's API-driven, CLI-driven, UI-driven \[unintelligible 02:14:28.06\] terrific job, making the product easy to use. But I think it's important for teams -- to really appreciate the transparency that we bring, it helps for a team to be technical. Because if a team's like "I don't understand why you guys keep disparaging Dell, because they're fine for me", there's a certain degree where it's like you're just not deploying enough of it. You know what I mean? Where it's like, if you have had nothing but great experiences with Dell or HP or Supermicro, you just have not deployed at sufficient scale, or in sufficient depth, or with sufficient bluntly attention to availability... So you just haven't hit these issues.

So you kind of you need a team to be \[unintelligible 02:15:09.12\] enough to appreciate Oxide's differentiators. And fortunately, we've been blessed by a bunch of those, which is great. This is a real -- the value of kind of connecting with people at kind of a grassroots level. There are a bunch of folks out there that fit that bill.

**Adam Stacoviak:** Well, not that you need our mouthpiece to connect with those folks, but we have a lot of engineers and a lot of big places, and small places, ICs everywhere, that listen to this show. I'm always surprised by literally who we reach across the globe, and the people who write in to us and say "I've been listening to you for a decade or more", or I listen to you doing the dishes, sometimes in the shower - which I debate with Jerod; I'm like "Seriously? Somebody's listening to us in the shower?" And it's true. Somebody -- at least one person has admitted to listen to us in the shower.

**Bryan Cantrill:** You know, I love podcasts, but not in the shower.

**Adam Stacoviak:** Not in the shower. Yeah, me neither. Although, I've never tried it, so I can't say I really wouldn't like it. I might try it.

**Bryan Cantrill:** Podcasts doing the dishes, though - I'm 100% on that.

**Adam Stacoviak:** Yeah, for sure. I can't be productive in my house, I can't do my daily chores as a human being in my household unless I throw on my noise-cancelling headphones and just jam on a book, or jam on a podcast, or a sermon, or something like that, that really just is a good hour-ish of something.

**Bryan Cantrill:** A hundred percent.

**Adam Stacoviak:** So thankfully, we recorded almost three hours - well, two and a half hours now - here for somebody doing multiple

days of their chores. So you're welcome, y'all.

**Bryan Cantrill:** \[laughs\] Yeah. We've got you doing the dishes, we've got you doing yard work, you're walking the dog a couple of times...

**Adam Stacoviak:** That's right. And then if you're done with all that, try us in the shower.

**Bryan Cantrill:** \[laughs\] Alright, now you made it weird.

**Adam Stacoviak:** So let's say that there's an IC out there, or somebody that has been listening deeply to this, they understand your personal journey, they understand what you're trying to do with Oxide, and they've got your problem. Like, point out some specific companies you would love to work with... If you want to. And if you don't want to, then don't. But is there any particular name that you can drop?

**Bryan Cantrill:** Ooh, like a specific name of a company...?

**Adam Stacoviak:** Yeah, not like a person's name, but like a brand name.

**Bryan Cantrill:** Oh, man.

**Adam Stacoviak:** Where do you think you'd be perfect at? You know they've got problems, maybe you're even a customer of theirs... Like, I've seen this latency. OMG, I can fix this for you, if you just buy Oxide."

**Bryan Cantrill:** Yeah. That's funny, because --

**Adam Stacoviak:** Or where do you think you'd like really do a good experiment at, even? I mentioned my friend at ERCOT, for example. They only do on prem, because they're ERCOT. They run the energy grid in Texas. It's a big deal to obviously have a strong, resilient energy grid. And any systems deployed for a company like that, or I guess an organization like that, you're gonna want to have great on-prem hardware, where they probably are racking and stacking Dell.

**Bryan Cantrill:** \[02:17:50.29\] Okay, so --

**Adam Stacoviak:** You could pause if you need to think about it, too. I mean...

**Bryan Cantrill:** Yeah, so part of my challenge here is that we've got so many conversations going with companies that already kind of fit this bill for me... So I will say that -- I'm just really interested by how people use compute, kind of industrially. So whether it's financial services, healthcare, energy... I will say that a place that I'm super-interested in, that I think will be a big deal for us in the limit, is in biotech. Biotech pharma. But I just feel like there's so many interesting problems that computation is going to -- computation has got the potential to really change lives in the limit. And I think that like a lot of those, if you look at biomed, or biotech in general, the compute needs just make the cloud economically a non-starter. And they really need to be on prem, but they often don't have -- they really do not want to be spending a lot of time and energy managing infrastructure.

So I think that will be a big space for us in the limit. That would definitely be big for us. But I think financial services folks -- and this is where, honestly, the Broadcom acquisition of VMware has definitely served to accelerate things... Yeah, and it turns out that's not going so well if you're a VMware customer. Broadcom is not so great, and so we've got a bunch of folks who are using this as an opportunity to really reconsider a bunch of things. So we've seen certainly a bunch of that in financial services. I think we've seen a bunch of that in kind of federal spaces, and I think we will see a bunch of that in energy, in oil and gas, and I think we will see a bunch of that in biotech.

But yeah, it's funny, because in terms of like "Boy, what is like the dream customer that I want to land?", I am so -- it's so interesting to me when people are using compute as a differentiator, \[unintelligible 02:20:01.09\] differentiator, which so many companies are. I think I'm always intrigued by - and I feel very lucky with our earliest customers, in terms of what they're doing, and just total reverence for their technologists. I know it's only like -- I can't pick among my children, but you know... I love them all. I love all customers, Adam. I love them all.

**Adam Stacoviak:** Yeah. Now I'm actually worried if -- well, I guess 'worried' is probably not the best word... Slightly concerned. Can you handle the influx of need? Because when you're at the innovators dilemma, which you've been at for the past four years... You've launched, so you've crossed that chasm, so to speak, and now you need to begin to experiment in production, in ways, and you need to do that with confidence, and you need to do that without screwing up everything, basically... So you can only take on so much burden as, I guess, deployed product. Can you handle the demand that's coming to you right now?

**Bryan Cantrill:** That's right. And I think that -- I mean, Steve, my co-founder, likes this metaphor, that I think is very apt, of the gas and the clutch, right? And you're really trying to hit the gas and the clutch at just that right friction point. And if you pop the clutch too quickly, you're going to stall the engine. And if you gas it without pulling the clutch out, you're just going to rev the engine, and you're not going to do anything. And so you need to be right at that friction point, and in every domain of the company.

So there are a bunch of things that we're doing. I mean, to make it really concrete, looking \[unintelligible 02:21:28.10\] teams have been working on is how do we significantly up our ability to produce racks, by developing better infrastructure for things like testing. In software we love to talk about automated testing, and we will for sure do this on an upcoming Oxide & Friends, but some of the hardware that we've done for automated testing, and to improve our ability to test the rack - because that improves our ability to actually deliver the rack. The faster we can test it, the faster we can find manufacturing defects such as they exist, the faster we can actually ship the thing, and the more we can scale that out. We developed our manufacturing and software at Oxide, and we developed a lot of our own jigs, and so on... So that's going to be super-important to -- that's a big part of being at that friction point, is developing that apparatus to allow us to go faster from an operational perspective.

**Adam Stacoviak:** \[02:22:36.27\] You're making your own hardware?

**Bryan Cantrill:** Yeah.

**Adam Stacoviak:** Self manufacturing.

**Bryan Cantrill:** Yeah, so we've got a manufacturer, Benchmark Electronics, that is our contract manufacturer, but we very much like -- I mean, they do the assembly, and we provide the infrastructure for things like system tests, and component tests, and so on. So it's very much a collaboration.

**Adam Stacoviak:** Well, that's a whole three more hours. We can't even talk about that. We're out of time, Bryan. Gosh. We'll have to do more of this. I mean, I'm not denying you talking, by any means, but I feel like there's just so much more to cover that we can't cover in one session, obviously...

**Bryan Cantrill:** There is. And I think that stuff is super-important, because we -- I mean, know on wood, we haven't had this happen yet... But if we were to have an issue where we had a defect in the field, we would want to be able to trace that back through manufacturing, to be able to understand, like "Is there something happening on the manufacturing line?" And we've got to own that whole thing end to end. o yeah, that's extremely important to us, that we're able to actually own that whole thing.

**Adam Stacoviak:** Wow.

**Bryan Cantrill:** And Benchmark has been a great partner in that regard.

**Adam Stacoviak:** I'm impressed. I was impressed before this conversation. I'm even more impressed during the conversation. I'm gonna listen -- I'm gonna go in the shower, okay?

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** I'm gonna take a two and half hour shower, and I'm gonna listen to us, or mostly you talk, and me ask a few decent questions, and listen back. Because as a podcaster in the moment you can only get so much from the conversation... Like, there's a second layer that I get after the relisten, so to speak. So I'm going to take a long shower and listen this conversation... And maybe stop there, just because I feel like -- gosh, you're self-manufacturing... It's just so much more. You're really committed, I would say, is probably the -- if I had to summarize your standpoint, it's committed.

**Bryan Cantrill:** Very committed.

**Adam Stacoviak:** Right.

**Bryan Cantrill:** Very committed. All-in.

**Adam Stacoviak:** Conviction and committed. That's wild. Good for you, good for Steve, good for everybody else part of the team, Adam, the other Steve that I know, Steve Klabnik, who's been a longtime friend of ours... So when we think about all you've done... Jessie Frazelle, everybody that's involved in the origination of what you're doing... I'm such a fan. Really, I'm such a fan.

**Bryan Cantrill:** Thank you so much.

**Adam Stacoviak:** Everything I could do to not talk more about literally Silicon Valley the TV show in this conversation - because we could...

**Bryan Cantrill:** We could, I know. I know.

**Adam Stacoviak:** I just sprinkled a little bit in there, because we had to... It was necessary, but maybe, maybe some time we can just like literally just talk about only that.

**Bryan Cantrill:** Oh, that'd be great.

**Adam Stacoviak:** Would you like that? I really did reach out to the actress that plays Gwart...

**Bryan Cantrill:** Did you? Nice!

**Adam Stacoviak:** ...and I talked to her handler. Listen... So I talked to her handler...

**Bryan Cantrill:** Oh, my God.

**Adam Stacoviak:** ...or whoever answers her emails. I assume her handler. I don't know the title they call that person... Just for sake of not butchering their name...

**Bryan Cantrill:** Because I had DM-ed -- I mean, just to give people a little bit of the backstory here in terms of Gwart... Because I DM-ed you at this, right?

**Adam Stacoviak:** Well, you told me -- you left me hanging for a bit there. You told me that Gwart had a cameo in season one, and then you didn't respond me for a week, and I'm like...

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** ...are you being for real? So then you're like "Yes, it's episode one." And then it's at the party, at the toga party. And sure enough, she was there. And I asked -- I had to confirm... I saw Gwart, I saw the actress who played Gwart. Her name is Nandini Bapat... I don't know how you say her last name. I'm sorry, Nandini. It's B-A-P-A-T.

\[02:26:10.29\] So in disbelief, I watched the episode, saw the actress who plays Gwart, went to search for who the actress was on IMDb, of course... That's like my bible for all things when it comes to movies, and TV, and cinema and whatnot... Found her name, found our website, reached out to the Contact form... This is probably a half hour after you finally told me which episode. I immediately went and watched.

**Bryan Cantrill:** \[laugh\] This is awesome.

**Adam Stacoviak:** I reached out and said "Hey..." Let me see if I can get the email up too, because I'll verbatim what I exactly said...

**Bryan Cantrill:** This is awesome. My 16-year-old and I pour over this together, and it was when we were doing a rewatch where he was like "Oh my God, that's Gwart", in season one.

**Adam Stacoviak:** And that's so cool. So I talked to Nandini's assistant, Marjorie, by the way... I don't actually have a copy of what I said, but she said "Thank you for reaching out and supporting Nandini in Silicon Valley. Yes, she did have a cameo appearance in season one, episode four. It was an unexpected bonus that Nandini happened to be working as a background actor on the show before she was hired to play Gwart in its final season." So technically, it's Gwart, but not Gwart.

**Bryan Cantrill:** Not Gwart. Ooh. Alright.

**Adam Stacoviak:** Yeah. So technically, closing the loop, she was a background actress at the time.

**Bryan Cantrill:** That's amazing.

**Adam Stacoviak:** So she was there as a background role... I don't think she even had the glasses of Gwart on, if I recall correctly, going back to --

**Bryan Cantrill:** Yeah, it was definitely like --

**Adam Stacoviak:** And Gwart wears those thick Coke bottle glasses. Right? Signature of Gwart. So you're right, but technically not right.

**Bryan Cantrill:** \[laughs\]

**Adam Stacoviak:** The actress who plays Gwart was extra-ing at the time, got a gig, and then came back for season six as true Gwart.

**Bryan Cantrill:** I'm calling that Gwart.

**Adam Stacoviak:** I agree. I'm with you. So I just said in response, "So cool." And I this is the salesman in me, okay? This is how I am as a person. If I have an opportunity to talk to you, I'm going to ask you a couple more questions, and get - not so much more out of you, but get an opportunity. Right? I love opportunities. I said "So cool. Thank you for closing the loop for me on that. Do you think she'd be down to pod with me and some big fans of Silicon Valley?" I'm dropping you --

**Bryan Cantrill:** You're dropping me. I like it. I like it. I'm in that sentence.

**Adam Stacoviak:** And from \[unintelligible 02:28:22.04\] And she says "Of course. My pleasure. She is always open to talking to fans."

**Bryan Cantrill:** I like it.

**Adam Stacoviak:** So at some point, we may be talking to the actress who played Gwart...

**Bryan Cantrill:** That'd be great.

**Adam Stacoviak:** ...on a podcast, about our favorite show in the whole world.

**Bryan Cantrill:** I love it. I do love it. God.

**Adam Stacoviak:** What a great way to close the show, right?

**Bryan Cantrill:** It is.

**Adam Stacoviak:** That's the way you close a show. It's the proper way.

**Bryan Cantrill:** That is the way.

**Adam Stacoviak:** Talking about Silicon Valley, and the future.

**Bryan Cantrill:** And the future. It's been a lot of fun.

**Adam Stacoviak:** It has been a lot of fun.

**Bryan Cantrill:** I mean, it always is. It always is. Obviously, I'm a big fan, so I always, always appreciate nerding out on Silicon Valley. Both the literal and the metaphorical.

**Adam Stacoviak:** I'm glad that when I dropped the Dan Melcher reference, you were able to not just go there with me, you were also able to reiterate for the audience exactly what was happening in the season, in the episode, to kind of give context.

**Bryan Cantrill:** I think it's so good.

**Adam Stacoviak:** That's how you know we could be true friends, Bryan. That's how you know.

**Bryan Cantrill:** That is. That's it. That's it.

**Adam Stacoviak:** If nothing else, we always have Silicon Valley.

**Bryan Cantrill:** We will always have Silicon Valley, Adam.

**Adam Stacoviak:** Thank you, Bryan. It's been awesome. Thank you.

**Bryan Cantrill:** Thank you so much for having me.
