**Miguel de Icaza:** When I started with Linux it was a very fringy thing...

**Jerod Santo:** In like the '90s? What are we talking about here time-wise?

**Miguel de Icaza:** I started using UNIX -- it was around the Windows 3 era; that was the last time I used Windows and every time you had a mistake on Windows and it would crash, you would have to reboot the machine. I had a fancy IBM PlayStation -- well, the university had a fancy Playstation... Not Playstation, PS2; it was called PS2. And it took too long to boot. And at the same time the university got workstations, Ultrix -- DEC Workstations -- and the beautiful thing about that is you'd crash your program, and all you've got is this label segmentation fault, or "core dumped."

**Jerod Santo:** That's it...

**Miguel de Icaza:** Alright, let's try it again, right? To me it was magical, the fact that you didn't have to reboot, like "Huh, there was a bug. Let's fix it. Next." So I had to really move to UNIX, and at some point Linux became an option where I could run UNIX on my PC, and I believe I had like a 40 MB hard drive, so I had to partition that to have a chunk on DOS, where most of my work was done...

**Jerod Santo:** Right, to do a boot.

**Miguel de Icaza:** \[03:59\] And the other piece was Linux, and the challenge -- and at the time there was another one, BSD. BSD was the big name; there had been a series of Dr. Dobb's articles about 386 BSD. It was just around the time where NetBSD had essentially made it into a real thing. This was before the forks, or right about the time that they forked, between NetBSD and FreeBSD.

The problem was these BSD's didn't have dynamic libraries, so the nice thing about Linux is that they have dynamic libraries, shared libraries, which meant I could put it on my half a partition.

**Jerod Santo:** Oh, you could fit it in the space that you had.

**Miguel de Icaza:** Yes. I couldn't put BSD on the little space that I could afford, so I had to go with Linux... I can't remember what my first distro -- maybe it was HJ Lu's: two floppy disks.

**Jerod Santo:** It's interesting how what you would think would be an almost inconsequential scenario, where it's just like "I don't have the space", like that was the deciding factor, but it actually kind of changed your trajectory for you...

**Miguel de Icaza:** Yeah. I don't know if it was 40 MB... What was the thing that -- it was a 386 PC; I don't even know if it had a math coprocessor and Linux had that 387 Emulator at some point. I don't remember these things anymore, but that's roughly where I started. So it must have been 1991, 1992 perhaps... In that era; it was in that general neighborhood.

**Jerod Santo:** That got you into Linux. The question that we have, which maybe a lot of people ask you is "How does the original creator of Gnome come to work at Microsoft?" It seems like that's a long story.

**Miguel de Icaza:** It's a long story, yes. \[laughter\] Like I said, I was inspired by the vision of Richard Stallman very early on, before Linux, on these UNIX machines, because he was giving away an optimizing compiler. In Mexico you could get Turbo C, but that was a chip compiler, or Microsoft C; at the time it was also a chip compiler. And if you really wanted to get your code running fast, you needed to pony up for the expensive ones. I can't remember what they're called; I think it was a Portland C compiler, or something like that. There were a couple of commercial compilers, very high end, and they were very expensive, at least in Mexican pesos it sounded like the cost of a mansion.

**Jerod Santo:** No way...

**Miguel de Icaza:** Yeah, and a friend of mine came to me with a big printout and said, "Here! Here's how you..." -- the university had just gotten into internet, and they said "Here's how you make your UNIX machine useful. Look for this GNU stuff. There's a lot of good stuff in there." So you got through the list, it was a list of FTP sites, and it would say "This has XL lib, GNU utils..."

**Adam Stacoviak:** Wow.

**Miguel de Icaza:** So you would connect a random FTP site, nose around...

**Jerod Santo:** So you were like reading off of a print-off and typing in the FTP addresses...

**Miguel de Icaza:** Yeah, yeah. It was hard work. There was no Google. There was a 100-page printout and you would pick the FTP site; it was called The FTP List, or something, and it was essentially kind of an index. It was a hostname and what kinds of things they had, like a two or three-line description of each one.

**Adam Stacoviak:** That's interesting.

**Miguel de Icaza:** They were the GNU people giving away an optimizing compiler...

**Jerod Santo:** Which other companies were making big bucks off of, right?

**Miguel de Icaza:** ...GCC, and I was like "Why? Why are you doing this?" And then at the time we started reading also some of the news, the Usenet at the time, or mailing list... I think it was called gnu-misc-discuss, and here was this compiler that was beating Sun's optimizing compiler, so I started reading the GNU Manifesto, and so on.

So ever since I decided "I'm gonna help the GNU project. Maybe I can't write code..." - at the time I couldn't write code, or I wasn't proficient enough in UNIX to do that, but I said "I'm gonna go ahead and help these guys." And I didn't have money -- you could contribute in two ways: give money or write code. "Well, the money is out of the question. The code? I don't know UNIX that well yet, so... Maybe one day." Anyways, that's how it started.

\[07:59\] I think my first -- I can't remember if it was... Either I joined the Wine Project, and I was writing with the Wine Project, writing the .ini reader, if you remember that format...

**Jerod Santo:** I don't remember the format, and I remember using Wine...

**Miguel de Icaza:** Yeah, so my first contribution was writing that thing, and then -- it wasn't really GNU, but it was my thing. I think I've been competing with Microsoft since 1991 or so... \[laughter\] Because come to think of it, I did the Midnight Commander in 1992, and that was already kind of my second thing, that was more serious. So yeah, maybe around 1991, and I've been competing with Microsoft ever since.

It started there, with the Windows emulation... We were gonna bring those apps to open source--

**Jerod Santo:** We're gonna run them on -- exactly.

**Miguel de Icaza:** We're gonna run them on our system. And then I worked for a while with the people doing open source Java. There were lots of interesting lessons on the dynamics of the community there. Then the Linux Kernel - I worked for a while on the Linux Kernel; I had this vision that workstations are gonna be the future, the SPARC Architecture was serious hardware, as opposed to the toy PC's, with their toy hard drives and their toy CPU's and their toy memories. So I worked on that for a while.

One day a friend of mine is like, "You realize that a PC with SCSI and a Pentium is ten times cheaper, and it's only half as slow?" I'm like, "Huh..." I started to rethink... Maybe workstations are not the future. \[laughter\] I had those experiences.

But yeah, I've been competing with Microsoft through all kinds of things -- working on the Linux Kernel, then I worked on drivers for the SPARC and the SGI and I worked with Ingo Molnar before he was world-renowned famous on the RAID drivers for Linux...

Then the next challenge was "Well, the Kernel's in good hands, what about the UI?" The UI was just terrible, so "Let's work on the UI", and I worked on GNOME for many years, and the GNOME Office piece also for a while...

Then Mono was -- we built this Outlook clone called Evolution, and we went through a lot of pain building it, and we said "There's gotta be a better way", and Microsoft came out with .NET. I was like, "Oh, this is something..."

**Jerod Santo:** Pretty good, yeah.

**Miguel de Icaza:** So I've kind of been working on .NET -- by this time it's like 2000 or 2001 (I can't remember the year now). We started building .NET for the sake of building better Linux desktop apps; that was the goal.

**Jerod Santo:** That was the reason...?

**Miguel de Icaza:** That was the reason, yeah. Because Evolution -- our app was called Evolution.

**Jerod Santo:** Because the .NET tools were far superior to what you had...?

**Miguel de Icaza:** Yeah, so the history of GNOME is -- around that time there was this fairly influential paper or pitch that was made by a professor called Jim Osterhout; he designed and implemented this language called Tcl/Tk, and he had a very powerful at USENIX one year where he said "Higher-level languages achieve more productivity and fewer bugs than lower-level languages." It's something that resonated with me a lot. We wanted really to raise the programming level and reduce errors, simplify our development and be more effective. If we're gonna compete head-on with Microsoft, we've gotta do that.

**Jerod Santo:** \[laughs\] That's what you were doing. Head-on.

**Miguel de Icaza:** \[11:46\] But Tcl is a language with some kinks - it was good for the time - and around that time Richard Stallman says "You know, if we recompile Tcl to Scheme, you're ten times faster. There was a paper going around at USENIX too that said "If you recompile everything to Scheme, Scheme automatically makes it fast", and minds were blown. And it turns out many years later that the measurements were all busted and they benchmarked the wrong thing...

**Jerod Santo:** Oh, broken benchmarks.

**Miguel de Icaza:** But anyways, it was enough at the time to say two things - "Let's use a high-level language" and two, "Let's use Scheme." The GNU project had their own Scheme interpreter called Guile... And man, so when we started GNOME we said "Alright, we're gonna build a desktop and we're gonna build a core foundation, high performance, or performance in the sense that if you code in C, and the higher levels in a scripting language", and we started building some of the apps in Scheme, using Guile, but it took forever to start up. Launching Guile would be like four, five seconds just to get the prompt; it was way too slow. So it kind of became a thing in GNOME that we would make our core API's used in many languages. Scheme was one, and sadly, the GNU Project went into this way of developing where they work and work and never release, so... It's not like Git where you can check out, right? They would go dark, and you would get updates every few eons...

**Adam Stacoviak:** You're like "Are they coming back? Are they fading? Are they gone forever?"

**Miguel de Icaza:** Yeah, exactly. So that was painful. So then we did Python, and we did Perl... All these things were essentially "How can we use a higher-level language?" It was even Objective-C; we even had Objective-C bindings for GNOME.

**Jerod Santo:** Wow.

**Miguel de Icaza:** And I think one of the first IRC clients is written in Objective-C for GNOME, if you can believe that.

**Jerod Santo:** That's very strange.

**Miguel de Icaza:** So that was kind of the genesis of our thinking of "We need to support more than one language." And what .NET made very interesting at the time was - with scripting languages, they're incredibly powerful, but remember, this is the year 1997... So yes, they're powerful, but they're incredibly slow. These machines have -- if you're lucky, you have 8 megs of memory; if you're lucky. At least most students. I wasn't lucky enough. So 8 megabytes was plentiful. Then I was a sysadmin, so I managed these larger machines with 16 megabytes. But scripting languages were just not very good.

Java at this point was proprietary; there were two versions - a proprietary version, but it was semi-licensed, and it was a long story, not worth getting into it... And then an open source effort. But because there was one that was freely available but proprietary, the open source one never caught on. There was just no need for it.

**Jerod Santo:** It was proprietary, but free as in no cost.

**Miguel de Icaza:** Yeah, proprietary, but cost-free. The open source one struggled for many years to get traction. So along comes .NET and I said, "Well, this is what we need." It has the characteristics of a higher-level language, but the performance of a low-level language. That's what the doctor ordered.

And unlike Java, it very quickly took off, because there was not free .NET, so either we built it or we didn't have it. So the community rallied around this thing, and very quickly we built a community that essentially replicated .NET, and that was the Mono project.

So I've competed with Microsoft all these years, and you know, there's ups and downs with Mono, a kind of a struggle to find a niche... On the desktop it was useful, but then people fear that --

**Jerod Santo:** Of what might happen, right?

**Miguel de Icaza:** Yes. There was a fear that Microsoft would do something, so it really set it back, so we said "Alright, let's aim Mono at the server", so we did Mono for the server... But then the customers were Windows people, and it was like "Well, I don't really know if I wanna try Linux..." So this is the era where Linux still hasn't really broken through, right? But at this point - I think it was around 2006 and 2007... Yes, Linux is starting to get juice, but it's still not dominant; you'd still use Solaris for your serious deployments.

**Jerod Santo:** Was there a line of communication at all back in the earlier Mono days with Microsoft?

**Miguel de Icaza:** \[16:06\] There were communications with a lot of engineers... A lot of engineers, program managers... Mostly in personal capacity, never in an official capacity. And then Sam Ruby from IBM, who later became a big Ruby person - oddly, Sam Ruby... \[laughter\] Had invited us - at the time of my previous company - to join the Ecma meetings, because we had this implementation of .NET that we had built from specs, and they said "Well, who better to join the Ecma meeting than somebody who actually has implemented the specs, to iron out the details? So we did have contact to a lot of Microsoft people through the committee.

**Jerod Santo:** I see. It was a common meeting ground around the spec.

**Miguel de Icaza:** Yes, and this was around 2002... Wow, these dates look so far away. So yeah, there was really no communication with Microsoft. So like I said, Mono kind of struggled with this -- the community rejection for a few years; things got worse when there was an agreement between my employer at the time (Novell) and Microsoft, so everybody was like it was a big conspiracy theory...

So it was in an odd place. It was an open source project - it was a great open source project with a difficult home; we were in the middle of all these things.

And then the iPhone happened. So here's what's interesting - Mono was sort of rejected by the harder line free software open source community people on this fear... But meanwhile, there were very pragmatic people outside of the Linux world, like people in the Mac world, that had no problem with it. And one of those people was Joachim Ante, from my company called Unity. It was called OVER the EDGE Entertainment at the time. So Unity had a game engine written - a great game engine - and they used Python to script their games, and of course it was too slow, so the games were very slow. So they ripped out Python and they put the Mono VM in place, and they got all their performance back.

**Jerod Santo:** Nice!

**Miguel de Icaza:** So it was the same struggle that we went through, and this was around (I wanna say) 2006 or so... Roughly around this time. So they were a pragmatic group of people that had a genuine need for Mono -- and there were many more, but Unity was a key one. And when the iPhone happens, Unity comes to us - at this time we're \[unintelligible 00:18:46.14\] - and says "Hey listen, help us put Mono on the iPhone." So we put Mono on the iPhone, and then Apple changed the way that you had to run on the iPhone, which was a very challenging problem for us, because Mono was a JIT compiler...

**Jerod Santo:** Which was against the rules.

**Miguel de Icaza:** Well, it wasn't at this point, but yes, it became against the rules. It wasn't really against the rules, it's a Kernel feature... So for security purposes, iOS and the consoles (PlayStation, Xbox) prevent you from JIT compiling. It doesn't make the system completely secure, but it eliminates a vast series of attacks, and the fear is when you have a million machines that are identical, running the same software, you can create a bot army; you hack one, you hack all. So it was a security measure for these systems.

So we first put Mono in there; we were very happy, the JIT compiler runs. And then Apple disables this, and Unity comes back to us and says "Hey, we have this product on iOS, we need .NET to be statically compiled. Can you do that?" We were like, "Oh, that's kind of impossible. Well, let's think about it."

One of our guys, Zoltán Varga - they went and made a static compiler for .NET, and it was amazing. We gave it to Unity. At this point, Unity is probably four or five employees.

**Jerod Santo:** \[20:07\] Forty-five?

**Miguel de Icaza:** No, four or five guys...

**Jerod Santo:** Okay, just making sure...

**Miguel de Icaza:** They were working at somebody's garage. And they shipped their product for iOS, built games for iOS using this thing, this 3D tech. They were the kings of this space.

**Jerod Santo:** Nice.

**Miguel de Icaza:** And within a year, Unity went from 4-5 employees at GDC -- they had this bulletin on a 9x9 or 5x5 space, and the next year they had one of the largest boots, and they were 80 employees.

**Jerod Santo:** Wow. So this is like the early days of the App Store...

**Miguel de Icaza:** Very early days of the App Store.

**Jerod Santo:** '08, '09...?

**Miguel de Icaza:** Yeah, I don't know when the App Store launched, but it was when the App Store launched. So it was a very popular product, and we said "Huh, well we did Mono for these guys. Maybe there's an interest in .NET... Not for games, but for apps", and the alternative was using Objective-C. So we built - with the same technology that we gave Unity, we used it to build our own product.

And it turns out that outside the open source world there really was no -- nobody had issues with .NET technology, they all embraced it very quickly, so it was a very successful product. That is the origin of what became Xamarin.

At that point... We really stopped worrying about the fear of "What could Microsoft do?" and we kind of plot our own destiny. We said "Well, people loved .NET, they loved the iPhone, and then we did the Android version, and people love Android... There's a big carrot." Before, there was no carrot, right? With the server; it was like, "Well, Linux? I don't know..." Now you had this big carrot. You can write code very effectively for these two platforms, on C\#... It's better than anything else. So it took off.

**Jerod Santo:** Yeah, you had a winner in your hands.

**Miguel de Icaza:** So I would say that at that point we sort of stopped competing with Microsoft because there was really no -- I mean, we were building a product in a market that didn't really exist; it was no longer a "We'll bring Microsoft tech to Linux", it was "We'll bring Microsoft tech to iOS and Android, and with nobody really in that space..." People were there to make money, they were not there to fix the fundamental flaws in society...

**Jerod Santo:** \[laughs\] Yeah, idealistic reasons. There were capitalistic reasons to be in there.

**Miguel de Icaza:** Yeah, I mean, people were in there to make money. It was a more pragmatic crowd. And I stopped competing with Microsoft at that point, and it was more like a very good complement to what Microsoft was doing.

**Break:** \[23:00\]

**Jerod Santo:** What was your personal demeanor towards the company? I mean, you say you were always competing... But was it antagonistic, or was it in good spirit of competition?

**Miguel de Icaza:** I think it went through a few phases. For example, very early on when I was -- I was a very big open source advocate, and I did all kinds of advocacy in Mexico and third-world countries, and I had my pitch nailed to "Why you should use open source instead of..."

**Adam Stacoviak:** Can you remember some of it?

**Miguel de Icaza:** Yes, of course; I'll make the pitch in a second, but...

**Jerod Santo:** Pitches.

**Adam Stacoviak:** I wanna hear it. \[laughter\]

**Miguel de Icaza:** The pitch at that time was very simple - listen, we're sending all kinds of money outside of the country for running proprietary software. Let's not do that. Let's invest that money in the country, let's use open source, let's build that stuff. And I used to say "Listen, you've seen how much a barrel of oil is, right? So how many barrels of oil does a country need to ship outside to get a single license of a piece of proprietary software?" It's a powerful image.

The idea works great, up until the point that you realize that people -- they're not gonna send the money, they're gonna spend it on something else, or they're just not gonna spend it. So the idea that you would reinvest in the country didn't really pan out. People were not going to reinvest...

**Adam Stacoviak:** If you don't have to spend the money, don't spend the money. \[unintelligible 00:28:09.20\]

**Miguel de Icaza:** You know, "We'll spend on education, we'll help our people, we'll do these things", and that didn't necessarily -- but anyways, that was my pitch at the time. And you know, there would be places where we would have a panel, "Why you should use Windows vs. Linux? You should use Linux because A, B, C, D..."

So I did advocacy for many years. This was 2004, 2006... A long time ago; a very long time ago. 2001... That was easier; you've got Windows 95, you've got Windows 2000, and you've got Linux.

**Jerod Santo:** And then just recently -- I mean, it was really pretty recently, almost two years ago, which seems recently in the long span, that Microsoft acquired Xamarin... What was your -- once you were no longer competing with Microsoft, does the edge wear off?

**Miguel de Icaza:** Well, I think that there were two things. There was the early competition in my, I would say, almost -- not teen, because I'm older than that, but the Windows 95 era, right? The 95 era, it's very clear - they have a great UI, but we have multitasking, and we don't crash. And you can use one Linux machine to be a server for everything. One PC can do it all. It was amazing. So that was one era of advocacy, the one that I described.

And then there was the uglier era when open source kind of becomes a brand, and I don't know if you remember this, but there were the Halloween papers, which were internal Microsoft documents that say "How do you compete with something like Linux?"

**Jerod Santo:** I don't remember that.

**Miguel de Icaza:** \[29:54\] There were kind of a big scandal, because they got annotated. In retrospect, I don't think there were ever very serious documents, but somebody in a massive organization wrote papers saying "Hey, this is how you do it." You write dozens of these things continuously, right?

**Adam Stacoviak:** There were a lot of internal memos, recounts of...

**Miguel de Icaza:** But it became seen -- from the open source perspective it was seen as like "Oh my god, this is the..."

**Jerod Santo:** Right, evil empire.

**Miguel de Icaza:** Yeah, kind of like that, and it was seen that way, and that didn't foment a great environment. There was this notion -- the press was, you know... "Microsoft is toast, Windows is not gonna exist. Linux is gonna take over the whole world...", so there were a lot of very nervous people, and in particular the previous CEO was fairly antagonistic toward Linux for many years, or took an antagonistic position towards Linux and the GPL.

But I think, it's a little bit like that diagram of -- I don't know, one of these analyst firms uses the hype graph, where you have exceeded expectations...

**Jerod Santo:** And then it comes back down...

**Miguel de Icaza:** And it comes back down, and then once you understand, it's like "Oh, everything is terrible..."

**Jerod Santo:** The trough of sorrow...?

**Miguel de Icaza:** Yeah, the trough of despair, or something like that. So what happened is that over the years the hype of what was open source - eventually people understood what it was, both us and the industry... Both us, the advocates, and the industry. We understood what it was and what it could do and what it couldn't do, and where it worked well and where it didn't work well. Even Red Hat went through this process, right?

So I think that the thinking internally of Microsoft started to change, and Microsoft started to open-source a lot of things... Bit by bit. Somebody was asking yesterday "What are the things that Microsoft open-sourced?" and they were kind of thinking towards 2010, and it's like "No, there's stuff that went back to 2006, 2005... They did little bits, they did little pieces.

**Adam Stacoviak:** Testing the waters.

**Miguel de Icaza:** Testing the waters...

**Jerod Santo:** Those might even mean somewhat grassroots efforts inside of the company back then.

**Miguel de Icaza:** I think they were grassroots efforts. There were people inside the company that believe in the model and they push for the model and they make a case, and I think that at the time making a case was very tough, right? The environment was not necessarily supportive. Now it's very straightforward to open source a piece of tech at Microsoft; there's a pipeline, a review process, very straightforward business needs. You fill in a form, your manager approves it - off you go.

**Adam Stacoviak:** Done.

**Miguel de Icaza:** Basically, yeah. You need to make a case that you're not doing something... I can't just go and fill in a form to open source Windows, right? But if I write some code, I can certainly do that.

**Adam Stacoviak:** On that note, there was one point in your career where you mentioned -- I think it was when you were being interviewed, I think earlier on in your career, towards Microsoft, and you had on this advocacy of open source you mentioned that they should open source IE. This was way back in IE's lifetime, and you were kind of using Netscape as a case study of like, "Hey, this is what they're doing." Can you kind of pontificate...?

**Miguel de Icaza:** Netscape actually happened later. They were not open-sourced at that point. Yeah, there wasn't -- I had an interview with Microsoft... I was working on Linux on the SPARC, supporting Linux on the SPARC, so a friend of mine, Randy Chapman, said "Hey, we're working on importing IE to SPARC, and they're interviewing here. Do you wanna come?" And I came and I interviewed with the people - I don't know who interviewed me anymore, but I made my pitch. "You should make IE open source." That was my pitch. "Make this open source. There's all these benefits", and I think they were like "Alright... Whatever, dude."

**Adam Stacoviak:** So we heard a story that...

**Miguel de Icaza:** \[33:52\] But remember, this is 1997... And Mozilla doesn't go open source until 1999. At this point Mozilla is still proprietary.

**Adam Stacoviak:** We've got alternate influences on this side, too. We've got Brendan Eich on record, talking deeply about the funding of the browsers and the funding of the web through -- and I'm only paraphrasing this big story that he knows very intimately, but just the browsers wars, and ads, and how everything's been paid for, essentially, long story short... But I'm trying to figure out if you've got some sort of idea of how IE or even Microsoft might be different as a company, and maybe even how we may be different had they done what you said... Because they didn't.

**Miguel de Icaza:** That's so difficult... That's one of those hypotheticals that are very tough to answer. I mean, remember, at this point I was a very strong advocate. This is my hardcore years of advocacy, and coming to Microsoft was kind of "I'll go to Microsoft if I can change the company from the inside", kind of thing. I wonder if HR still has notes on that... I wonder if we can dig those up.

**Jerod Santo:** That'd be awesome.

**Miguel de Icaza:** But essentially, that was my pitch, "We've gotta make this open source." I think that the people that I was talking to were probably engineering managers, and were like "Whatever." \[unintelligible 00:35:14.26\] "Go do this link list on the board!"

**Jerod Santo:** So why do you say "interviewing"? You mean to work there? You were interviewing to work there?

**Miguel de Icaza:** Yes, that's right.

**Jerod Santo:** And you're trying to tell them to open source... So you're giving them like high-level strategic advice during your interview to work there. \[laughter\]

**Adam Stacoviak:** Well, he said if he was gonna go there, he was gonna change the company from the inside.

**Jerod Santo:** Well, I realize that, but when you first said interviewing, I was just thinking it would be like this. That makes it even funnier... You were in that sense very hardcore with advocacy.

Fast-forward to the day, inside of the industry and software, are the things that you care about with that level of passion now that are different? Or is that like a young man's energy that slowly subsides?

**Miguel de Icaza:** Well, I mean, I still care very passionately about the -- there's things that I care about in tech and things that I care about outside of tech, and I think that my advocacy and my heart breaks for all the disasters in the world... If you follow my Twitter for years, or my blog, you'll see that; there's a particular series of injustices that have -- you know, Palestine has always been a very sad story.

I still care about those things, and I think they got really the short end of the stick but there's countless other problems in society that need to be solved. We have a lot of really smart people, and we should be fixing those issues.

I think that the passion and the desire to go and fix those things is there. Having kids certainly doesn't leave a lot of time to sign up for doing talks and advocacy in places... But one of my co-workers, Nina Vyedin - she runs the Indivisible Summerville organization and they're doing all kinds of very interesting social changes in our community; they start there and they take it elsewhere. But I think that just having a family kind of takes a toll on your time for doing some of the more advocacy things that I do wanna do.

In the tech world, I would say, before I go there, that one thing that was very interesting is that the new CEO is very different, Satya Nadella. Not only he embraces the change in Linux and open source and these things, but as an individual he is deeply empathetic, he relates to other people, and he tries o get himself in other people's shoes, and tries to understand their perspective.

\[37:53\] So from the tech perspective, I like to think that we can do more, in our software, to be more empathetic. I think that it shows beautifully, for example, with Apple products; they're products that people love to use... They work for the user, not against the user, and it's a different mindset than the raw engineering perspective of "I'm gonna build a piece of great software. It's gonna be very fast, very efficient... Very something - very configurable, very programmable. It's gonna be the Swiss army knife." And as it turns out, there's a time for the Swiss army knife and there's a time for just a bottle opener. Sometimes all you need is a bottle opener.

**Jerod Santo:** Right, a single-purpose tool.

**Miguel de Icaza:** Yeah. So in tech, I care passionately about "How can we make our tools better, simpler, more accessible, easier to use? How do we make developers happier?" It's been kind of a motto for our company - for Xamarin it was, definitely, and we try to bring that culture, which is "How do you delight developers?" How are developers struggling, and what can you do to get out of their way?

I have to say, I'm guilty as much as anybody else. We've built tools that are sometimes too complex, and how do we remove the complexity? How do we make our tools simpler? I would say from that perspective I change from advocacy, from licenses, which is a done deal - it's a battle that has been won, right? And I really try to look for inspiration on design, and what we can do for the user.

And I'm saying design because now when I work with other teams, companies, partners, people inside the company, we still have a mentality (all of us) where if we need to build a solution, we start coding right away... "Okay, let me architect this. Login, I'm gonna put this in the database, it's gonna go here. I have a screen; I roughly know where things go..." - so you go through this process and then your user experience is miserable.

So I do like the idea of "Let's first sit down and try to understand what problem we're trying to solve; let's design on paper."

**Jerod Santo:** Yeah. Let's think about it first.

**Miguel de Icaza:** Yeah. There was a co-worker of mine from many years ago, Anna Dirks that started this at our previous company, at Novell. She would prototype on paper. At the beginning I was like, "Why are you doing high tech on paper? We're software engineers, we don't do paper." But she was a big influence, because she would meet with customers and she would show them "Okay, here's that UI that I've drawn on paper. Here's a menu. What would you do next?" "I would click here." "Alright, what will you do next?"

**Adam Stacoviak:** Wow...

**Miguel de Icaza:** And she would put post-it notes. "Now this is a button. What do you do here?"

The nice thing is that it's super cheap. You prototype on paper! What does it cost, like a couple of cents and a pen?"

**Adam Stacoviak:** Yeah. It's real-time, there's no bugs...

**Miguel de Icaza:** And then you get a mock-up, at the end of the day. You spend one workday...

**Adam Stacoviak:** No crash...

**Miguel de Icaza:** One workday, you've got mockups, and then you refine them a little bit, and then you go design, and by the time you're implementing, you're not writing and rewriting and rewriting, and customizing...

**Adam Stacoviak:** Yeah, you're informed.

**Miguel de Icaza:** When somebody says "Well, you should add these buttons", like "Well, do you want me to wire that up? I've gotta change everything." As engineers, we have to embrace this world where we can think first about the user, show some empathy... That's what I like about Satya and his whole pitch in his book "Hit Refresh" - we've gotta get into the user's shoes and try to do what they're gonna do, and save yourself a lot of time, a lot of engineering by knowing what you're gonna do.

\[42:00\] So I care a lot about that. I don't know that I communicate that always as well as I could, even to my team, but that's one thing I feel...

**Adam Stacoviak:** Hopefully this podcast will influence that a little bit.

**Jerod Santo:** Just tell your team to listen to The Changelog.

**Miguel de Icaza:** We can do that... I should do that.

**Jerod Santo:** Or you can talk to them directly, I guess. \[laughter\] It's your team. We won't tell you what to do.

**Miguel de Icaza:** "Okay guys, we're gonna make things easy!"

**Jerod Santo:** Well, when you talk about that, especially what you said of Xamarin, the focus on the users or the developers, so "let's design for them" - it reminds me of Mats with the Ruby programming language. I feel like his statement of like "I'm going to design for programmer happiness" will be his legacy, even more so than the language that came from that... Because languages come and go, but that - I've seen that philosophy embraced, and it resonates so well with all of us. It's like, "Yeah, we should do that." That's empathetic, that's powerful.

That idea - I love it being such a meme, because as it spreads, we all benefit. And if the developers are more empowered, more...

**Adam Stacoviak:** Enlightened.

**Jerod Santo:** More able to do things, enlightened, designed for...

**Adam Stacoviak:** Delighted... Sorry, not enlightened, delighted.

**Jerod Santo:** Sure. Then they're gonna -- hopefully that's a pay-it-forward type of a thing; they're gonna be more able to do build things for other people in such a way.

**Miguel de Icaza:** I think that we need to become more rounded individuals. The software engineer should say "Where's the design? Help me not waste my time. Tell me what I'm building, what are the expectations here?"

**Jerod Santo:** And why.

**Miguel de Icaza:** Perhaps I also care a lot about the fact that sometimes we write code with no documentation. Engineers have this thing where they're like cats in water; they don't wanna write dogs.

**Jerod Santo:** Cats in water...

**Adam Stacoviak:** They don't like it.

**Jerod Santo:** Cats don't write documentation, either.

**Miguel de Icaza:** Well, I don't know how cats are in Nebraska, but cats on the East Coast...

**Jerod Santo:** \[laughs\] They don't like water. I thought you said they don't like to write documentation in the water.

**Miguel de Icaza:** Engineers on the East Coast and documentation are like "Mrrr...!"

**Adam Stacoviak:** Only if I have to.

**Miguel de Icaza:** Yes. "Only if my boss forces me to, and then I'll drag my feet", right? And engineers are very good at coming up with excuses. It's like "I'll document it... I'm still changing things, I'll document it when it's fully ready." Then by the time it's ready, it's like "What happened?" and then they go "Well, do you want me to document or do you want me to work on the new feature?"

**Jerod Santo:** Right. I ran out of time.

**Miguel de Icaza:** It's magical, and it happens every time.

**Jerod Santo:** I guess the last question from me is - surely, you do a lot of conversations like these... Is there a question or a topic or a thing that you're just waiting for somebody to ask it to you so you can answer this thing or talk about this particular thing but nobody ever does?

**Miguel de Icaza:** At my age, every question is a good question.

**Jerod Santo:** You don't have anything to get off your chest, or anything that you just wanna talk about?

**Miguel de Icaza:** No, not really. I guess no, I don't have anything to get off my chest.

**Jerod Santo:** \[45:14\] Fair enough.

**Miguel de Icaza:** Let me close with one thing - what has been fabulous is in this new Microsoft just how much open source code is written by Microsoft and contributed to Microsoft. The other day I saw the stats and there were these gianormous numbers; I think GitHub published them. Microsoft I think is now the number one contributor - by some metric, I don't know what it is... I don't know if the number matters anyways. It's so much code that...

**Adam Stacoviak:** It's an indicator of change, if anything.

**Miguel de Icaza:** It's an indicator of change, yes, and I'm very happy that .NET went from being the crown proprietary jewel of Microsoft to now be open source, and that Microsoft was willing to let go this fabulous developer technology, and they're incredibly sophisticated compilers and runtimes and garbage collectors... And they went with a license that is beyond generous; it's just MIT. It's a gift to the world, and it took years of work of many people inside and outside, and advocacy and discussions... So there's thanks to be given to everyone that made that happen. And .NET now is everywhere; it runs from my watch, to my phone, to the servers, to the Azure supercomputers, where I have it running WebAssembly, too... It runs on everything.

**Jerod Santo:** WebAssembly, too?

**Miguel de Icaza:** Yeah, we've got WebAssembly too now. So it's everywhere. It's a fantastic effort, and I hope we can get more people building software there. Our goal is always -- going back to this theme from 20 years ago (or maybe 17 years ago)... We want you to write good software, we want to catch errors for you, we want your software to be of high quality - how can we help you? That's the mission. That's what the entire developer division at Microsoft does. That's the mission, and I think we're making a good dent in society that way.
