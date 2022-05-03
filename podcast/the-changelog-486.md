**Jerod Santo:** So we have Frank Krueger with us to talk about his practical guide "Solving hard problems." Frank, welcome to the Changelog.

**Frank Krueger:** Yo, yo! Thank you for having me. I appreciate it to be here. Thank you.

**Jerod Santo:** We are happy to have you as well. This was a really cool post, and like you say in the post, nothing ground-breaking, no huge revelations, but just like, sometimes these are good things to write down, good things to think about from someone who's been through hard problems for a long time. You've been programming a long time. Give us a little bit of your back-story, your history, so we know where you're coming from that brought you to a place where you can write this down and have so many of us nod our heads along as we read with you.

**Frank Krueger:** I think the hard problems are the only ones that are interesting to solve, right? The only ones that kind of keep your heart pumping and keep you in this business... Otherwise it's easy to burn out.

**Jerod Santo:** Right.

**Frank Krueger:** But... Hi. I've been programming for a while now. I guess since I was 16. I got my first professional gig working at an R&D shop at General Motors. I got out of high school for half the time, and I got to work in an R&D lab and program embedded systems...

**Jerod Santo:** Wow.

**Frank Krueger:** ...and assembly in C. It was fun. But I was also a bit of a self-taught programmer, so I hacked video games... I eventually got a job at Microsoft, worked on Windows Vista, the best operating system ever released...

**Jerod Santo:** Oooh...!

**Adam Stacoviak:** Yes, that's my favorite one.

**Jerod Santo:** Do you still admit it?

**Frank Krueger:** You know, at this point I'm proud of it. I think it's one of those, if it doesn't kill you, it makes you stronger kind of things. I learned so much working on it. Everyone needs to work on a giant -- I'm not gonna call it a failure. It was released, it was fine. But not success. It's humbling.

**Jerod Santo:** Yeah. What part of Vista did you work on?

**Frank Krueger:** I was actually a dev in tests, so I was responsible for making sure that codecs like gif and jpeg and tif would not crash the machine. If you remember those days, Microsoft would be Slashdot a lot for like "New vulnerability found in gif. Just download this image and we can \[04:02\] your system."

**Jerod Santo:** Right. It would give you straight admin privileges. From like zero to admin privileges with one animated -- yeah, exactly.

**Frank Krueger:** \[04:11\] Yeah. So I showed up at Microsoft when security was becoming a really important thing... And we were cracking down on everything, and we were just beating these APIs to death. But I also worked on designing the imaging APIs for what became WPF, the C\# managed way to write Windows apps. It's a UI framework. So I worked on that. So good stuff came out of Vista. Honestly, we're using a lot of fundamental Vista technologies on Windows even today. They just -- it was a rough release.

**Adam Stacoviak:** To give you some credit though, the hard problem about Windows generally was the upgrade path. There was obviously some flaws in the operating system as the new versions come out, but the upgrade path seemed to be the biggest hurdle for Microsoft to finally -- and I'm not even sure they finally conquered it, because I've since bailed on the operating system. I got mad respect for it; lots of users, a massive base, but... The upgrade path was truly the challenge, not just simply the operating system as itself, like the new advancements in the tech.

**Frank Krueger:** Yeah, especially - we were trying to push the GPU. And the GPU wasn't even that old at this point. But we said -- Mac was running on the GPU, so we should be running on the GPU. It was doing its compositing on the GPU. So there was this big move of "They wanna increase the specs for that", and honestly, it takes a bit of bravery to move an operating system up a spec level like that, and say "Now we're gonna require this class of GPU." I don't think that that was a wrong decision necessarily. Windows had to get updated like that, and reverse compatibility or backwards compatibility unfortunately is the victim there.

**Adam Stacoviak:** Well, what a hard job it must be though to command the direction of an operating system used by not just millions, but like millions of millions. That's a high stakes game. You've got business-class customers, you've got the direction of Intel for example, or the PC in general... You can put it on pretty much anything. A Mac is designed to be on a particular system, so there's a lot less of an issue with the footprint in terms of what you would hit, and would it work. Whereas the PC landscape - it's no man's land.

**Jerod Santo:** It's every man's land.

**Adam Stacoviak:** Yeah, I guess that's the better case, every man's land.

**Frank Krueger:** \[06:29\] just so many GPUs. That was the hot topic at the time... To the point where, you know, long into the project I would still boot up the operating system some days and the monitor would be flipped vertically, and everything would be upside down. You're just like, "Oh, it's one of those builds..." So you would have to use the computer upside down to go download a new build an update your system and hope that the new, latest build doesn't have the upside-down bug to it.

**Jerod Santo:** So would you flip the monitor, or would you stand on your head? What was the move?

**Frank Krueger:** You just learn how to reverse it in your head...

**Jerod Santo:** \[laughs\]

**Frank Krueger:** It's amazing what the brain can accommodate... \[laughter\] You learn. You know, the first time it's hard; the second time it's harder. The third time you get used to it.

**Adam Stacoviak:** You could actually turn it around and have a mirror on the wall... You know what I mean? You could have mirrored it, literally, with a mirror.

**Frank Krueger:** Yeah.

**Adam Stacoviak:** But I guess not if it's upside down. You'd have to get a concave mirror then too, in that case, to help you out. Well, whatever...

**Frank Krueger:** Some monitors had a flip option, so if you were really desperate, you could go into the monitor settings and re-flip it.

**Adam Stacoviak:** Wow.

**Frank Krueger:** So you learn a lot on that kind of project...

**Jerod Santo:** Totally. So Adam said he bailed on Windows, I also bailed on Windows... It sounds like you also bailed on Windows, because you're like an iOS guys now, right?

**Frank Krueger:** Yeah.

**Jerod Santo:** You've been doing iOS development. Take us on the next part of your path.

**Frank Krueger:** Well, after that wonderful Windows Vista experience I bought a Mac, and I decided -- \[laughter\]

**Jerod Santo:** Haven't looked back. \[laughter\]

**Frank Krueger:** \[07:57\] That's not actually true, in the proper timeline... I started my own company. Some friends were needing help getting contract jobs... There was a lot of immigration and people taking advantage of contract employs for a long time, and so I started a contracting business to help out a lot of my friends that were working on a visa... And at the same time, I also became a military contractor, and worked on control systems for cruisers, for the \[08:25\] and spent quite a few years just doing embedded system development for militaries. That was another big learning experience.

**Jerod Santo:** Huh.

**Frank Krueger:** So basically, I wanted out of the PC world.

**Jerod Santo:** Yeah, you went real far upstream. So what were your learnings there? When I hear that, I think like large contracts, slow progress, bureaucracy... What was it like in reality?

**Frank Krueger:** Yeah, don't forget bribery and all that stuff, too.

**Jerod Santo:** \[08:54\]

**Adam Stacoviak:** Corruption...

**Frank Krueger:** Well, let's just say it opens your eyes to how the world works; when you see how the military works, then you're really seeing how the world works. But no, what I learned from a software perspective was reliability. So we would constantly talk about hot-swappable, cold-swappable... I had software - its only job was to control the rudder of the ship. You turned the wheel right, the rudder should go right. You turn the wheel left, the rudder should go left. It's the easiest program to write in the entire world. But the program still ended up being a hundred thousand lines of code, because there are somewhere around 500 error conditions, because the software has to run on five different locations on the ship, running in parallel on two identical copies in each location. If a part of the ship gets destroyed, the network has to recompensate at all these different levels. There are command security levels, there are alarmings to do, manual control overrides, all that stuff.

So what I learned was how to write reliable software. I even wanna rephrase it - it started my journey on how to write reliable software... Because there's nothing like having people's lives in your hands, and you having to prove that your software is correct.

**Jerod Santo:** Yeah. It's like having a very simple game, like Pawn or something, where the controls are left, right, up and down, like a 2D game, but then it's on like Expert mode, where any little mistake and you immediately die and have to start over...

**Frank Krueger:** Yeah.

**Jerod Santo:** Because like you said, all those error modes, and then redundancy too, right? It has to run in multiple places at the same time. It sounds like hard problems.

**Frank Krueger:** I was also designing user interfaces that became hardware panels. So I would draw up a hardware panel with all these buttons, and these displays, I would have to help manufacturing actually build the panel, I'd help them wire the panel, connect that into all the software... Because back then you didn't use touchscreens, you used giant panels of arrays of buttons. And so I was also building all those panels. So a lot of, you know, just how do you guarantee that you're even talking to the user interface correctly? You know, there's those kind of tiny details you don't think about when you're writing an iOS app, for instance.

**Jerod Santo:** Yeah... It makes you take iteration for granted when you don't have to have that circumstance. It's like, if you're designing a hardware panel that has to go off to be manufactured, you've gotta get that design right before you send that design off, right? You can't say "Well, we'll just ship this, and as soon as we start using it, we'll know where it fails." Because once you're using it, it's done. It's set in stone basically, right?

**Frank Krueger:** Yeah. I remember one time I was presenting this system to a submarine commander. He was just a part of an entourage, and I was just giving a demo. And he looked at me and said "Why is this thing so complicated?" And I had to laugh, because -- I just turned around, because I had it sitting right next there, was "The book of error codes." That was not written by me, it was written by all the admirals \[11:53\] And I just handed him the book of error codes, and I'm like "That's why. 500 error codes."

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** "Why is this so complicated...?"

**Jerod Santo:** You threw the book at him.

**Frank Krueger:** Oh yeah, I guess. I didn't throw it; he was quite intimidating.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What's the biggest learning you've learned - or continue to learn - when it comes to reliability? What are some of the cardinal sins, or cardinal rules?

**Frank Krueger:** \[12:13\] You have to test the error path just as much as you test the functioning path. It's always an edge case in the error handling where you mess things up. It's so easy to write code that, you know, when it's working correctly, it works correctly. That's the easiest code to write.

**Jerod Santo:** Right.

**Frank Krueger:** What happens if this line fails, what happens if that line fails, what happens if the machinery fails, what if the connection fails... Handling all those error conditions. And the best way to do that is to just assume anything can error at any time; and that sounds like a terrible way to program... But programming systems like Erlang have showed us the correct way to do that. So I fell in love with isolated processes, that were expected to fail, and you just handled those failure conditions. Every message pass, every function call can fail, and you'd better have a good, smart plan for how to handle that.

So to answer your question in general, the answer is "Assume everything can fail, and make sure --" You know, just in my own code, I would just put random "Throw exception here." Just to see what happens.

**Jerod Santo:** Hm... Like, while you're working, just to see what happens... It's like your own little Chaos Monkey, but inside your own local codebase. That's a cool idea.

**Frank Krueger:** Yeah. Especially if you're trying to solve a hard problem that you really don't know how to work on... It's much more fun to pop up an error dialogue; you're like, "Oh, that took down the whole process. I wasn't expecting that..."

**Jerod Santo:** Good way to procrastinate, right?

**Frank Krueger:** Yeah. And it helps the overall quality, because...

**Jerod Santo:** Oh, for sure.

**Frank Krueger:** ...chances are... You know, software seems to fail. I keep trying to write -- and I say this, I don't want you to think that I write correct software, because I have crash report after crash report on my apps, but... You keep working at it. You chisel it away.

**Jerod Santo:** Alright, so bring us from defense contractor to iOS developer.

**Frank Krueger:** We just have to take a break from all that, right? It's just a little bit too much... \[laughter\]

**Jerod Santo:** Burnt out.

**Frank Krueger:** Yeah.

**Adam Stacoviak:** It's just a little bit too much.

**Jerod Santo:** ...going indie.

**Frank Krueger:** Yeah, go indie. Well, I already had my company, so I already don't have a job anymore; I'm one of those people... And I decided I wanted to write software. So I actually first tried to write Windows apps at first, but there was not a great marketplace for that. I was inspired by a MacBook that I had just bought; the iPhone had just come out, I was really inspired by that... For my whole life I had wanted a smart computer in my pocket, and finally there was a really good one, and that was awesome. I really wanted to program it, even though you couldn't... But it was all that just culminating into -- I mean, I even wanted to program it so much I wrote a DNS server that re-routed all the YouTube calls, so that you could watch your own videos using the YouTube app on the iPhone... I was just so desperate to write software for it.

**Jerod Santo:** Wow.

**Frank Krueger:** And the moment Apple had an SDK, I just jumped on top of it.

**Jerod Santo:** Did you hop into the original concept, the "really sweet solution" I think they called it, which was the web apps? I mean, did you try to do web apps initially? Because before the App Store, that was Apple's first like "Hey, you can program it with web apps." And it was kind of like \[15:12\] But did you at least try that kind of stuff?

**Frank Krueger:** So I skipped another little part of my career. I spent two years being a web developer after the military stuff, and -- that kind of burnt me out. I was like, "I don't really wanna do this." HTML was crushing my soul. All of it was crushing my soul. I was a native app developer; I'd been writing UIs in VB since the '90s. I like writing native apps, I know how native app APIs work, rendering engines, all that stuff. It's just a more comfortable place for me.

**Jerod Santo:** Gotcha.

**Frank Krueger:** Plus, I even question it, to this day, like "Should I become a web developer again?" But I think I just got so burnt out with just two years of being a web developer that I never want to do it again.

**Jerod Santo:** \[15:53\] Yeah, if you couldn't last two years back then, you probably wouldn't last six months now... Because things are rapidly evolving, and there's always a new target. And there's a lot of power in the web in terms of freedom and expressiveness, and permissionless, to a certain degree, -ness... But there's a lot that comes alongside it as well. So if you've been building native UIs your whole life... You know \[16:20\]

**Frank Krueger:** And \[16:23\] so nicely constrained; they were all the same resolution, 320x480. No one had a different-sized iPhone... They were slow, your software couldn't do much, so you had to be a clever programmer, and I always loved being a clever programmer... You know, who doesn't love to optimize code? It's fun. It gave you an excuse to do that. And they had, most importantly, a store. Because I'm an engineer, and I'm terrible at marketing and sales. And I really need to rely on a third-party to be a publisher. And early successes in the App Store showed that you could actually make some money at it... Versus starting your own website, drawing people to your own website, doing sales that way.

**Jerod Santo:** So are you designing, building and selling your own apps on the store, or are you contracting for other companies and building their apps?

**Frank Krueger:** I've contracted with a company once, and built one app, but I was reminded that I don't like having a boss... So I tend to stick to "I design an app, write it, and sell it." It's a good system. I'm basically only accountable to the people who purchase it, and whether anyone purchases it... You know, I can spend two years working on something that I think is awesome, release it, make $10/month on it, and get a nice splash of cold water on the face and remind "Don't write what you want, write what other people want." \[laughs\]

**Jerod Santo:** Yeah. So have you been able to build a sustainable business inside the App Store?

**Frank Krueger:** Yeah, I have. Since I would say about 2010 is when I've started making enough money where I could comfortably live on it. And I've been able to continue that up to whatever this is these days... Does time exist? I don't know. \[laughter\] And sustainable is the right -- it's always been my focus too, so I love that you chose that work. I want to be doing this into my 80's... If I'm lucky.

**Adam Stacoviak:** Wow. Well, the good thing is that you're focused on your -- I guess you're self-aware enough to know what your strengths or weaknesses are, which is sort of half the battle when you pick your career or pick your path, because you recognize that you're an engineer first, and marketing and distribution is not your strong suit. And to leverage a way to still get joy from your passion and your craft, while also making an impact - I think that takes a bit of time sometimes to iterate towards... Like, "Okay, I should be doing this." Like, focusing on something where there's actually a store, with distribution, that brings people there. What you've gotta compete with at that point is value for the app; like, does the app actually solve the problem? Not so much "Hey, come find my app." And I guess there is a bit of a challenge for some indie Mac app developers or iOS developers; they do have to market. I mean, it's not that you don't... I'm sure you can make more if you marketed, but it's not necessary if you have the right kind of distribution opportunities.

**Frank Krueger:** It's tricky, because all my marketing friends scream at me because I do basically zero marketing. So what I rely on is this terrible test of "You release the app and you see how many people bought it." If a lot of people bought it on day one, the app's probably gonna do alright. If no one bought it on day one, then there is just not an existing market there, so you have to hire the marketer to create the demand, instead of fulfilling an existing demand. I would much rather fulfill an existing demand, but I understand marketing's places like "Maybe you've never heard of this concept, and you've totally gotta check it out." So that's their job.

**Jerod Santo:** \[19:58\] Right. I mean, some of it is awareness. There might be demand, but people just don't know that it exists. But then there's also -- like, when you push something up a hill and it's heavy, and you're like, "Why am I continuing when I have this other ball that's rolling down this hill?", or at least there's an obvious demand... So I think that puts a lot of pressure on your day one launch though, doesn't it?

**Frank Krueger:** Oh, yeah.

**Jerod Santo:** You spend two years toiling, you put a thing out... I mean, that's gotta be a pretty stressful day or week.

**Frank Krueger:** It's the worst...

**Adam Stacoviak:** "It's the worst..." \[laughter\]

**Jerod Santo:** "I hate launching. I hate shipping."

**Frank Krueger:** Yeah, yeah... \[laughs\] Talk about real lessons learned... What did they say, "A painting is never finished. You just stop working on it"? Same thing applies for an app.

**Adam Stacoviak:** Yeah, okay...

**Frank Krueger:** I always say, I know when I need to release an app - when I hate it. That's when I know I've gotten to the right mental place where this thing actually needs to be shipped now. But day one is also - there's a little fog of war. I have a little bit of an online following, so I can always have a few sales on day one. What really matters is week two. You wanna know where that number is gonna be in week two.

So day one is just fun, party times, and all you're telling yourself is "Don't even think about any of this until week two. Let's see what the week two number is."

**Jerod Santo:** That's wise. What's your batting average? How many apps have you put out, and of those, what percentage are successes in terms of you're gonna keep working on them, or they still make money for you today?

**Frank Krueger:** Not good. It depends on which \[21:28\]

**Jerod Santo:** \[laughs\] Sorry for asking...

**Adam Stacoviak:** At least he's honest. He could have been like, "It's amazing!"

**Frank Krueger:** \[laughs\] Well, let's be real... Luck is a huge part of this universe. I released an app that had no competitors in 2010, and it's created a niche for itself. It exists in its own little universe, and I've been lucky and I've been able to live off of that app. And that's iCircuit. Have I been able to recreate that success? No. And so that's the tricky part. I have apps that do good; I could probably live off of those other ones if you take away one. My whole fear was "I don't wanna live off of one app", because I'm just too neurotic to do that. I need to have a portfolio of something else out there. But I haven't been able to recreate that kind of success on-demand.

But then I wanna say, I've had some critical successes, where a lot of people like my apps. So they're well-regarded in that way, and that pleases me just as much... Except I do need to pay rent and survive in Seattle. It's not a cheap city.

**Jerod Santo:** Right. Well, I definitely hope you continue to have success on the App Store. I think it's still something to be proud of; there's a lot of people that go through life and never have a success on the App Store. If you think of musicians, you have the one-hit wonders... And it's like, hey, people make fun of a one-hit wonder, but it's like, most of us are zero-hit wonders. Like, that's actually pretty stinking good... And the fact that you can live off it and continue to do what you love, and you continue to step up to the plate and see if you can hit another one is admirable, and very respectable. So I appreciate your honesty, but it's nothing to be ashamed of; you definitely have done well.

**Frank Krueger:** No, I just wanted to make it clear... There's always a \[23:18\] It's not easy. It's a tough world. I used to do a lot of speaking at conferences, and people would ask "Oh, I wanna get into app development. What's your advice?" And my advice was "I lost money for the first two years, so have a lot of money in the bank before you even attempt to do this." It's hard to find that market.

But the actual good advice is pick your markets, find an existing demand... Pick a market that has a lot of money, and where there's not much competition. That's a sweet spot; work in that space. Then you can actually make a living off of it. You don't make a game. Your game is not gonna be successful. It doesn't even matter how good it is, you're not gonna make any money off of it.

**Jerod Santo:** Too much competition?

**Frank Krueger:** Yeah. When the store was small, life was definitely easier... But finding something on the store just from natural search - it only accounts for 20% of your sales, my sales. It's not a lot.

**Adam Stacoviak:** \[24:13\] Where does the other 80% come from then?

**Frank Krueger:** Word of mouth, links... My app has been used in universities now, so it's a part of some curriculums. That always helps. Become a part of a curriculum. \[laughs\]

**Jerod Santo:** There you go... Sales security.

**Frank Krueger:** Yeah, things like that. A lot of Google searching... The good thing about an older app is you have better SEO than a newer app. New apps are tough. New apps - hire someone to do the marketing, if you can afford it.

**Adam Stacoviak:** Do you spend a lot of your time on iCircuit, or is your time kind of divided now, considering your other apps that you might be running, or...?

**Frank Krueger:** It's still because I rely on it so much, I still put a fair amount of time into it to maintain it, make sure it's running good, make sure the reviews are still good, and everyone's still happy with it... But I'm a self-employed engineer, of course I work on random other projects 75% of the time. And a lot of them -- it's always tricky, because a lot of them could become apps. But something you learn is the moment you release an app, you now have to maintain that app for the rest of your life... So I never wanna release -- I used to think I'll just throw out all these apps, and whatever sticks, sticks... But now I've learned that you really wanna be careful what you release, so I'm a little slower to release new apps these days.

**Adam Stacoviak:** You've gotta maintain it, right? If it's this successful, you've gotta learn to love it, basically, right?

**Frank Krueger:** Success can be its own worst enemy, you know? The nice thing about being self-employed is you don't really have to do anything if you don't want to, if you're paying the bills... But then if you have all these people using your app and they want support and they want all these things, it's something you -- it's a job. It's a real job.

**Jerod Santo:** You got from one boss to thousands of bosses.

**Frank Krueger:** That's exactly it. \[laughs\]

**Break:** \[26:04\]

**Jerod Santo:** Frank, sometimes you find yourself in a position of needing to write some code that you're just not sure how to write. I know this about you, because you wrote this down... And there's certain steps you take when you're \[28:36\] No huge revelations, just hard-earned advice. I'm transliterating your opening paragraph and I'm putting it into third person, even though you wrote it in the first... So if this sounds weird, that's what's going on here... But the point is you wrote this post, "Your practical guide to solving hard problems", and there's nine steps. Do you wanna kick off this conversation and just walking us through maybe some of the hard problems you've had to solve, or the types of things that stump you? And then we'll get going into actually your steps. Obviously, this is prescriptive, to a certain degree, and what you think works well for you... But it's more, I think, maybe fodder for us, something to think about; how each and every one of us solves problems is gonna be different, but I think there's some similarities, so... Open us up, will you, Frank?

**Frank Krueger:** Yeah, sure. Just for some context, I was having a conversation with a friend; we were talking about Twitch streaming - we've both been doing Twitch streaming - and he was talking about how hard it is to solve hard problems, and Twitch-stream, and code at the same time... It's a bit of a high pressure situation.

**Jerod Santo:** Yeah...

**Frank Krueger:** So I was thinking to myself - you don't get to do meta thought too much - what is my answer to that. And what I decided was I have totally fallen back on programming advice I think I received in the 1980s, which was if you need to solve a hard problem, just talk it out first. And what that means is just kind of write it out long-form, without having to worry about the details, and then break it down into sub-problems, and solve those sub-problems. So that's what I meant by "no big revelations here", something I totally read in the '80s. But it was something I realized I do a lot on the Twitch stream, because in a high-pressure situation where you need to solve a problem, you fall back on what works for you. Well, what works for me is writing out really long function names, and just saying what the function needs to do and return, and that kind of stuff.

But hard problems - I wrote a C compiler and C interpreter for my circuit simulator. So while the circuit simulator is running at, let's call it a megahertz, or at least trying to run a megahertz, it's also executing C code, it's also talking to hardware, it's also drawing to the thing... So just writing a C compiler is a pain, writing a C interpreter that does that at the same time is a pain... I have another IDE that does live IntelliSense with ML completion... These are features that even desktop IDEs sometimes don't have, and I have that running on iOS just fine.

Even today, I was working on a problem where I'm trying to do these 3D LiDAR scans and turn them into a mesh, and there is this algorithm to align these 3D scans called the Iterative Closest Point Algorithm. And it's a tough little algorithm, and not many people want to implement it. When I scoured the internet for solutions to it, there were 20 of them. Half of them had GPL license that I couldn't touch, the other half are in Python, a language I'm not using for my apps... Others would be in C++, and they have so many dependencies I can't do them, so I come down to this unfortunate realization that, "Oh, my God, I have to write the algorithm myself. Good luck." \[laughs\] Those kinds are hard problems, always in service of -- generally, these are the kind of problems of I'm trying to add a feature to my app. These aren't the other hard problems, which are "There's a bug in my app, and I'm trying to find it." That is a whole different kind of terribly hard problem. This advice won't help you too much with that.

**Jerod Santo:** Right. That one's more reactive, and these are more proactive, right?

**Frank Krueger:** \[31:59\] Yeah. This is how to push your own limits, let's say. \[laughs\] I don't like to do boring programming on Twitch. I like to always be at the edge of my own skill level. And so it's nice to have a procedure to fall back on when your mind is racing and you're wondering if you're looking like a complete fool in front of a live audience.

**Jerod Santo:** Well, I guess your number one is somewhat confusing then, because if you're in front of a live audience, number one says, "Think hard about the problem for a few weeks before typing any code." So I'm just imagining you live on Twitch, just sitting there, staring off into the distance, thinking hard, hard thoughts. \[laughter\]

**Adam Stacoviak:** "What is Frank doing? He's been at this for a week. What's going on with this guy? He hasn't moved."

**Jerod Santo:** That's a long Twitch stream...

**Frank Krueger:** It does happen, but usually I catch myself around the one-minute mark.

**Jerod Santo:** Right.

**Jerod Santo:** I realize I've been completely still for one minute. No, what happens is I think about the problem for two weeks before the Twitch stream, where I feel like I've solved it in my head. You know when you get that feeling, "I've solved it in my head. Now I've just got to dump it out in code", that's usually the main point I want to be at when I start a Twitch stream.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But this all comes from - I'm just a slow thinker. I'm terrible at interviews. Someone will pose a problem to me and I'll just stutter and stop, because I realize I don't think. What I do is I do other things, and then the back of my head solves the problem, and then it informs me when there's a solution. And so I need that kind of time period. It's just how things work for me.

**Adam Stacoviak:** Yeah.

**Frank Krueger:** And so I don't ever like to just jump into code. I like to let it percolate in my head. It's so much easier to change architectures in your head. It's so much easier to change programming languages. It's so much easier to change libraries. There are no version dependency failures in your head. So I highly recommend write as much of it in your head as you can before you sit down, because the moment you sit down, now you're fighting a compiler, and a runtime, and all that stuff.

**Jerod Santo:** Yeah. That's fascinating, because I don't disagree, but then in practice, I find that my style is more twiddling bits around. I think as I write. And if I'm staring at a blank canvas or just sitting there in my head -- and like you said, you admitted you don't like to sit there and stare off in the distance. You do other things, and it's just kind of like you think about it over time; I don't know, like shower thoughts kind of a thing, and that's when the solutions come. But most of my stuff in practice, I write this way as well, pros. I actually edit while I write, and I know that people who write tell you not to do that. They say, "Write a rough draft. Just get all your thoughts out and then go back, either edit that draft or throw the draft away and keep the parts you like and rewrite and rewrite", but I will literally edit as I write. And I edit as I code. As I code, I'm thinking, and then I'll throw stuff away, and it's different than that. But I'm wondering if I need to differentiate between when I'm really stuck... Sometimes I don't know I have a hard problem until I really get stuck. Whereas in this case you know that "Okay, I've got this rhythm I need to somehow implement", and so you can think about that without having to twiddle some bits to realize, "I don't know how to do this." Sometimes I don't know I'm on a hard problem until I hit my head against it.

**Frank Krueger:** Yeah. When you're doing calculus, you don't want to think about algebra. The algebra should be cold. There is the high-level problem I'm trying to solve, how it fits into my app and all that stuff, and then there's the low level, "What class am I going to put this into? What module am I going to put this into? How am I going to actually share the data around?" That is just glorified bookkeeping, and you can do that as a background process while you're thinking about the harder problem. So I like to constantly make progress, so I constantly edit, too. But I don't think of that as a bad thing; I think of that as me doing something mundane while I procrastinate on the harder problem.

**Jerod Santo:** Yeah.

**Frank Krueger:** \[35:47\] Sometimes you got to clean up the code to get it to a place where you think you can actually solve the hard problem, too. Some refactorings are required. But a huge chunk of programming is just regurgitation of data paths that you've created for the last ten years and you're just putting them back into this app, unfortunately.

It goes both ways. Sometimes -- like, a lot of what I'm going to describe in this blog was a top-down perspective on it, but I love to start at the bottom, too. Who doesn't like to write a little math function, and then a bigger function on top of that, a bigger function on top of that, and work your way up? But at some point, you're going to have to integrate that into a bigger system and come back down again. So... Just different ways of attacking.

**Jerod Santo:** Right. Yeah, sometimes I actually accomplish a lot of stuff while I'm not doing the coding that I'm supposed to be doing. I used to call it procrasticoding. It's like, "Look what I accomplished."

**Frank Krueger:** Yeah.

**Jerod Santo:** ...while I was putting off what I know is a much more difficult task. And at least I feel like I am making progress. And it is real progress, right? You're doing things that matter. They just aren't the things that you need to be doing, eventually.

**Frank Krueger:** Yeah.

**Jerod Santo:** You're just kind of--

**Frank Krueger:** Or you write some unit tasks...

**Jerod Santo:** Yeah.

**Frank Krueger:** Just test something that's already been tested, just to build the confidence... \[laughter\] There's that test-first development about test-driven development...

**Jerod Santo:** Yeah.

**Frank Krueger:** But I don't know... Me personally, I tend to write something, and then use tests to kind of prove that it's working. But other times, a test-first can definitely help you out, just to get the brain juices flowing and all that kind of stuff.

**Jerod Santo:** Sure. Yeah, I find it's helpful when I'm not sure what an API surface might look, or how I want to use the thing. A lot of times, my designs come out of my desire to use it in a certain way, in the area of the code that I'm going to be using this thing. And so I'll use test-driven for that, because what is a test if not the first user of your API?

And so you can actually write out the API the way you kind of think of using this function or this module in the tests, and then, obviously, they're failing, and so you're kind of doing test-driven development. But when I really don't know what I'm doing, I don't test first, I test later. But when I kind of don't know what I'm doing, then I test first. It's a gray area.

**Frank Krueger:** That's why my number two is just figure out what your inputs and outputs are. What are we actually talking about in this thing? So I want to solve this problem of aligning LIDAR scans to create a mesh. It is a multi-step problem. You've got to align the things. You have to create a distance function to turn it into a solid. You have to sample that into a voxel grid. Then you have to use marching cubes on top of the grid to create an actual mesh in the end. That is a big, long process, but in the end I can say, "Well, it takes a set of point clouds and outputs a mesh." So I start with a function, convert point clouds to mesh... And you just start there, and sometimes you've just got to -- I like to make progress, and typing out that long function name... I have no idea how to implement that function, but just typing out that name, giving it some arguments, some parameters, and giving it a return type - that makes me happy. I feel like I've made some progress.

**Jerod Santo:** Yeah.

**Frank Krueger:** And then you can even write a test for that. Test the dumbest thing, but it's doing something, and then you can build your tests from there.

**Adam Stacoviak:** It sounds like momentum is a characteristic you're both describing, because in a lot of cases solving any problem, whether it's coding or not coding, or just doing -- like if you're procrastinating. I guess if you're not coding, you're kind of procrastinating. So the solver of the problem of the procrastinator is just get some motion, get some momentum. And before you know it, you've got enough inertia going that you're going to carry through.

**Frank Krueger:** God, you nailed it. That's perfect. I mean, that is the problem, too. I don't have to work on a hard problem; I could just maintain apps forever. That'd be fine. So where do you get the energy or the incentive to do it? Well, you've got to start small, because the big problem is too hard. You start with a small one and you build up that. I call it confidence, but momentum's a great word, too. But you're also building up confidence, "Maybe I can actually solve this."

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It's like that old adage, "How do you eat an elephant? One bite at a time." I think that's the way it goes. But that's really what the hard problems are, right? Like, "How am I going to eat this elephant, for instance?" A big thing, that's tough and all these -- and it's like, well, momentum, right? You've got to get started. And I really like the top-down approach for this that you described, because the details are where the difficulty is, but your end goal and your starting place are actually relatively straightforward to define. In fact, if you can't define your end goal, then you've got some other thinking to do, right?

\[40:20\] I've done a lot of client work where that's a lot of the conversation I have with them, is they're describing this problem or this solution, or whatever they're describing to me, and I have to either derive from them or have them explicitly state, "Well, let's forget all of this stuff you're saying. What exactly do you want it to do?" That's your outputs, right? Your inputs and your outputs. And if you can define well your outputs, what are you trying to accomplish? What's the goal of this hard problem? You know what your inputs are because you're already there. That's where you stopped, right? You stopped at your inputs, and you know your end goal, and now you have something that's tangible. Like you said, that's momentum. And you can go from there. Now the solution in between - it's going to be a long and winding road. You may find out, actually, there was some other way of attacking it that made it into an easy problem. But you're going to find that along in the journey. But if you don't know where you are and where you're going, then the rest of it is not procrastinating, it's actually just like mindless wandering. There's no good end to that.

**Frank Krueger:** Yeah.

**Adam Stacoviak:** Also in point five you talk about sprinkling in fun, which I think is this psychological hack. You say "Go implement a few of those functions." You know they're not all hard, and some may even be fun. So I think it's important as you're tackling hard challenges to stretch yourself out a bit by stretching yourself, or being at the edge, as you said before, of your comfort zone, so to speak... But also sprinkling some fun, because that's going to keep the dopamine hits going. We are a monkey brain -- we know how the brain works, to some degree; there is some knowledge on that. So why not actually leverage that in your style of getting something out of yourself?

**Frank Krueger:** Yeah, I call this hacking the programmer neurosis, or something like that. You have to have that positive reward, otherwise it becomes drudgery, and we don't do good work when we're doing that kind of stuff, so you have to get those dopamine hits and all that. And I mean it. The hardest algorithms I've had to ever implement - it turns out only 10% of the final code was actually hard. The other 90% was bookkeeping, moving it from this data source to that data source, making web requests, authentication, something terrible like that... The terrible stuff that's all just "Bro, we can do that." And so, A, keep the momentum up, as like before, but also some of those might be fun; probably not the authentication part, but maybe you could show a cute emoji somewhere, or a profile image or something. I love graphics programming, so if I get stuck on a problem, I'll just start drawing debug information. Normally, I rely on printf debugging, like all proper programmers.

**Jerod Santo:** Yeah.

**Frank Krueger:** But eventually, the problem will just be so hard, and I really have to get to this limit, but I'll start drawing to the screen to try to visualize the data in a way that I can comprehend a little bit better. And then you can save that for later and put that as like an advanced settings mode for the user, or something like that. But yeah, I like making progress, and for me, that's usually do something you know and love, like graphics, and that'll just help you keep moving, too.

**Adam Stacoviak:** It seems like this might be leading towards a solo dev, too; like, you're by yourself. Does this need to be flipped entirely differently in terms of one through whatever number, eight or nine? I think that's eight... If you've got a group. And the reason why I was thinking this, I almost brought up - Jerod, sorry - Silicon valley.

**Jerod Santo:** Gosh, not again...

**Adam Stacoviak:** Silicon Valley, the TV show is famous for this algorithm that was created, right?

**Jerod Santo:** Is it famous though?

**Adam Stacoviak:** The whole series was about Richard Hendricks and this algorithm, "My algorithm", right? And I think it was in like episode one or two by the time they go to \[unintelligible 00:43:51.01\] But they did it as a group, and it was fun. So talking about fun and momentum - that made me think about them and solving this algorithm problem. They did as a group. And it was only because they're such fun characters, I guess. I mean, obviously it's TV, so it's not real, so to speak, but it's based on possible reality. I'm just curious, does this translate from individual developer to how you think and get progress yourself, to a one-person team, to a two or three or four? How does this translate to groupthink?

**Frank Krueger:** \[44:26\] Well, it's been literally ten years since I've worked on a properly big team, but I would say it still applies just fine, because you get an issue assigned to you, and your boss or someone's expecting you to fix that issue, unless your company is purely people doing whatever they want. There's usually some level of organization, some task has been assigned to you, and so you would apply this general procedure to that task.

What you benefit from in a large company is when you get stuck on any part of it, you can go talk to a coworker and be like, "Hey, I made it this far. Help me get over this next little hurdle." That's the benefit there. It's something I'm jealous of, being an individual worker, because if I run into a hard problem, especially in a field where I don't have close friends that are also in that same field - so, well, I'm just up a creek without a paddle... Whereas at a company, you're surrounded by smart people.

So a lot of benefits to being a solo dev, but that's not one of them. You are so lucky to be able to tap into other people's brains. So I probably should have put that on this list somewhere, but for me, where that is, is searching the academic papers and seeing what the research scientists are doing. Those are my closest peers that I have easy access to, aside from Twitter, "Help, help, help, help", or Stack Overflow, I guess.

**Jerod Santo:** So real quick, let me summarize the process, because we beat around it and we're talking about it, but we stopped off this conversation with "Create this one function." So we talked about its top-down. And so your overarching advice is define your inputs and outputs, write down this function that doesn't do anything that has the entire thing in the name; basically, like one big function. And then inside of that function, you're going to write kind of the steps that you can currently see, right? Maybe it's six steps that you think are the steps, write those as functions. And they'll just have a not implemented error, they're not done yet; you're basically just scaffolding out the idea of what the code might look like when it's done, to get some momentum going. And then it's like, rinse and repeat, or drill down. So empty functions all the way down until you get to the point where you can actually implement something, right?

So this is kind of like a programmer's way of saying "Break it down into small problems", right? And one bite at a time. And then as Adam referenced in step five, do the ones that you know, or the easy ones, or the fun ones, leave the authentication to last... We always will, right? And then you're left with -- actually, when you do that process over and over, and you just iterate that, you're going to have most of it solved, because most of the hard problem is not the hard part. It's overwhelming, but like you said, a small percentage of it actually is - let's call it complicated, and everything else is just a bunch of steps that overwhelm you until you break them down.

So once you're there, then you're going to have what you call in step seven, 80% solution, with a few pesky functions left, right? And those pesky ones are the hard part. And then you say from there, "Okay, now it's time to go out to the interwebs, see what other people have done..." In your case for this algorithm, you've found this Python project. You're not going to pull it in, but maybe you'll just read their code and see how they implement it, and see if you can port some of that, or at least get inspired by some of that, to solve those very last heart problems.

\[47:41\] Now, I don't work in large teams either. I have worked in teams though. And I will say that this process is very teamwork-oriented, or it can be, because every step along the way -- I mean, you could whiteboard this thing up until the point where you're implementing those individual functions, right? So you can write down this on a whiteboard, you can name them like functions, you can say, "Alright, what other steps do we have? Maybe I missed one. I thought of three", and then somebody else thinks of, "Oh, don't forget, there's this other step." And so this could very much be done in a collaborative way, which would probably get you there faster, better than you would by yourself, without getting blocked, until you get to the point where you are implementing individual functions. Then just one person's like, "Well, go write the auth, Jerod, while I do this algorithm part, or this shader." And so I think that while it is written with you by yourself in mind, I think that it definitely is the kind of process that you can do as a team, and have a lot of success.

**Frank Krueger:** Yeah. I like your whiteboard analogy. I wish I used mine more. I tend to draw on it and then leave what was up there for far too long. The old advice used to be "Write pseudo code", but who's got time for pseudo code? That's kind of pointless. \[laughter\] I mean, that's just silly. Our modern programming languages are high-level enough that we don't have to worry about low-level stuff. We can focus on the algorithm, moving data around, that kind of stuff. So don't get bogged down in those kind of details. And yeah, especially if you're a company, you can ask for help.

I'm amazed at GitHub as a resource. If we had done this even ten years ago, I'd say, I don't even know what my answer would be, because it was so hard to find existing source code out there. But now GitHub - you go to their global search, you type in any term you want, filter out all the ones that are GPL, so that you can actually use it, and then go read that source code and learn from it. GitHub has done so much to benefit the world and the community.

I don't think that you should just go in there and pull in libraries all the time. One skill I developed early on in my career was reading code in one language, and retyping it out, translating it really quickly into another language, because dealing with C++ dependencies is terrible. Even Python dependencies are slightly terrible. I work mostly in the .NET world. We have terrible dependency issues also, but they're not nearly as bad as those of other languages. So quite often, if I find something in another language, I'll just retype it. And the nice thing about that is you learn so much when you force yourself to transcribe someone else's code. You can't just cheat, like "Oh, I totally understand that part." Well, can you translate it into your native language? Let's see you do that, tough guy. So I like to do that stuff too, just as a learning thing and an opportunity to grow.

**Jerod Santo:** Yeah, it definitely fun, because it's not hard, but it's mind-engaging work, right? You can't do it mindlessly, but it's not a hard problem, right? It's like, well, I mean, okay, make sure that it works in that other language first, maybe download it, compile it and run it before you start cargo-culting it... But once you know that it works, and you also don't know -- just because it's on GitHub doesn't mean it's good, right? The way they've done it might not be the best way of attacking the problem. But if it works and you can run it, then just go into that process of saying, "Okay, read this. How would I write that in this language?" You're going to learn a lot actually on both sides of that. So definitely a plus one on your statement there, and recommend it as a process... And much better than writing it from scratch yourself, right? Like, you've got somebody holding your hand along the way.

**Frank Krueger:** Well, it's also neat to see it from a few perspectives. Going back to that LiDAR scanning problem I mentioned - a big step of that is the marching cubes algorithm, which turns voxels into a mesh. And it's a pretty standard algorithm. There is one standard form of it, and then there is an improved form of it. Everyone implements the improved form of it. But it's a little bit of hard code to read. It's just written a little bit funny. I think the original is in C, but it's a funny dialect to see... And it's really fascinating to see other people's translations of it into other languages. You can tell they copied it, but they modified it a little bit. And so I would look at the JavaScript version of it, the Python version of it, the C++ version of it, all these just to get a general, "Oh, okay, this how it works, and this is how I'm going to make my version", yet another variant on it. But again, that's almost rote work, too.

\[52:12\] I worked on that code because I was pretty confident I could find resources for it, when I was ignoring a much harder problem, which is the image registration, where all the images have to line up... Because that's a much, much harder problem than this other one that's been a known technique since the 1980s. And so it was fun to just spend a couple days working on a 1980s algorithm while I percolated the thoughts in my head for the other one.

**Jerod Santo:** It's like a whole new level. It's like, there's one level, which is "This is hard for me", and then there's another level which like, "This is hard for humanity", or this is an unknown thing that maybe somebody's solved it in some lab or inside some proprietary company somewhere. But there are problems where you're not going to find them out there on GitHub or - what is it called? The archive with the X in there?

**Frank Krueger:** Archive with the X, yeah. Any paper.

**Break:** \[53:07\]

**Adam Stacoviak:** We're kind of back to some psychological type things too, because whenever you have a challenge just generally as a human, it's often perspective that can give you that shift to see things differently. And I've heard it be said, if you're familiar with cameras and focal lengths, you might have a wide angle lens, like a 12 millimeter or 20 millimeter, that gives you a wider point of view... However, when you go into portrait mode or something like that, you might go to like an 85 mill, or something like that that's got a longer lens.

The point is, is if you look at the image that comes out of each of those lens types, which is basically perspective, it's zooming into micro and zooming out to macro. It's that perspective shift, because when you see something from somebody else's perspective, like in this case in particular, like Python or a different language, you get to see -- and I think that's what we do here with this show, too; we've never been like a camp type show. We cover Ruby, or C, or only particular languages, only particular camps, because it's always about, okay, at large, how we solve this problem with code or with programming. And being able to see how somebody might do it in JavaScript or a different language is like, okay, their constraints are X. They did this for this reason. They also have npm, this massive registry with millions and millions of developers pouring into it. So because of that, they can do this, this and this. Whereas here, you don't have that ability or constraint. And so you do it this way, you write it all yourself etc.

So I think perspective shifting like that really gives you a leg up, because as you said before, stand on the shoulder of giants; get somebody else's perspective who's been down that road a bit before, and translate it to your particular need. You say yet another, but if it's an iOS app and it's not open source, then yet another is just fine, right? It's a bespoke specific need you have, so why not yet another, right?

**Frank Krueger:** Right. That's nicely said. Perspective is so important. I was working on another compiler, a different, C++ to IL. IL is the intermediate language. .NET apps run on. It's the managed runtime language. It's a compiler. It's very difficult to write. It wasn't actually going from the C++, it was going from LLVM's intermediate representations; so it went from IR to IL. So I'm going from these two different representations of a program. And that was one of the most sophisticated pieces of software I've written maybe in my career up to this point, to the point where I got really stuck on a part of the problem. The way the two languages represent data is just different.

I actually had to refer back to the Dragon Book. Do you know what the dragon book is? It's the compilers, principles and practices, a very famous compilers book written in the 1970s. And I was reading Wikipedia page after Wikipedia page, modern treatment after modern treatment... What I was trying to do was synthesize these phi nodes. It's a complicated thing of data management. And I couldn't understand any of the algorithms until I opened the Dragon Book and saw in the 1970s their pseudo code implementation of the algorithm, which threw away all the details, ignored all these modern advances that aren't actually advancements - you don't actually need them - and written out in this very clear style, and all capital letters. I don't even know what language they were pretending to be in that book. But just finally getting it from this old, old resource, and realizing, "Oh, my God, in the 1970s there was chapter five, section four, and they describe exactly the problem I'm having, and they -- oh, my God, even better, have a solution to it."

**Jerod Santo:** \[01:00:20.19\] Wow.

**Frank Krueger:** ...and then you can transcribe that solution from their crazy whatever language that was into whatever you want to be using. And you learn a lot during that process. That felt so good to me when I finally found that.

**Jerod Santo:** It's like coming across a hidden treasure somewhere and you're like, "Look at this! Look what I've found!"

**Frank Krueger:** I knew they were smart.

**Jerod Santo:** That's crazy.

**Adam Stacoviak:** You want to tell somebody at that moment, but nobody -- not that they don't care, they just can't care. It's like--

**Jerod Santo:** They just can't care. \[laughs\]

**Adam Stacoviak:** You know what I mean? They can't care. It's like, "I have no idea what you're talking about, Frank. Okay. But congratulations on solving the problem."

**Frank Krueger:** Well, there's a little street cred, too... Like, just knowing about the book shows that you're semi-interested in compiler technology. Actually having a use for the book - I feel like I became a computer scientist that day. I actually applied something from the Dragon Book.

**Jerod Santo:** Yeah.

**Frank Krueger:** It was a real high point in my career, to be thoroughly honest, and that's where you're standing on the shoulder of giants.

**Jerod Santo:** It's like you graduated from Hogwarts that day. You became a wizard. You became a real wizard.

**Frank Krueger:** By copying a wizard spell, but yeah. \[laughs\] But I realized the wizard spell worked. Yeah, I was very Harry or Hermione there.

**Jerod Santo:** So this is a related question; a little bit off topic, but I thought about it because Adam started talking about npm, and we're talking about finding solutions and being comfortable with other people's code. I'm curious what your appetite is for dependencies. It seems like you're probably the kind of guy who's like more on the "not invented here" side of the spectrum, where you probably implement most of those things yourself. But I'm curious, when do you pull in like a third party library or a dependency? Are there use cases where you're happy to do that, or do you pretty much write it all yourself?

**Frank Krueger:** I honestly think I've hit maturity when I look first for someone else's solution. I don't always do that. I do tend to be -- I definitely lean towards the NIH side. I would say when I started my career, I was just completely NIH. I wanted to know how the universe worked, therefore I'd program the universe; I'd do everything from scratch. Nowadays, there's just no time for that. Our apps are so much bigger than old apps. You look at apps from the 1980s and the 1990s - they're so wee; they're tiny compared to what we're producing these days. The amount of libraries that we pull in, the amount of dependencies we pull in. For example, I use all of Apple's frameworks, every single one of them, all 5,000 of them. I use every line of code out of all of them.

**Jerod Santo:** You use all of them. \[laughter\]

**Frank Krueger:** Because there's just a wealth there.

**Jerod Santo:** Yeah.

**Frank Krueger:** Well, it's kind of amazing, because I'm a .NET programmer running their apps on iOS. So I have the entire .NET ecosystem at my disposal, and I have the entire Apple ecosystem at my disposal. So chances are something good has been written in one of those two worlds, and I can pull in packages. Me personally, and I guess as a company, I'm happy to take first-party dependencies. I feel very comfortable taking first-party. Third-party, I'm a little more suspicious about. If someone releases a library that does exactly what I want, and I look over their code and it does it roughly in a way I approve of, I am very happy to take a dependency on them, 100%. But I don't like to take dependency on third-party frameworks and things that are prescriptive, and try to tell you how to write an app, and that kind of stuff. So I'll pull in feature dependencies, but I'll rely on the first-party for my frameworks, and the rest is up to me, I guess.

**Jerod Santo:** Gotcha. So are you writing iOS apps in C\#?

**Frank Krueger:** Yeah, C\#. Actually, I use a lot of F\# these days. That's my current favorite language.

**Jerod Santo:** Okay.

**Frank Krueger:** Yeah.

**Jerod Santo:** And Apple's tooling just works hunky-dory with all the .NET stuff, or is there some sort of layer between those two?

**Frank Krueger:** \[01:03:59.12\] There's a little layer, but it's mostly just like C++ wrappers over a C API. You're just trying to make the API a little more friendly to use. And then .NET programs can be compiled down to native code, so it's not an issue; you're just talking to their APIs, as any old program would talk to their APIs.

**Jerod Santo:** Huh.

**Frank Krueger:** And that's been on since like 2008. And I adopted it just because - better debugger support. I'm a kind of a programming language bigot, so I prefer those programming languages... And I just know that ecosystems so well at this point that it's my strength. Why would I ever give up a strength? That's dumb. You don't do that in business. You play to your strengths, and it's the strength of mine, so-

**Jerod Santo:** Right.

**Adam Stacoviak:** For sure.

**Frank Krueger:** It's a good system though; good debugger, good threading, garbage collector... Every language should have a garbage collector. Come on. Life's too short to manage memory.

**Jerod Santo:** You're not going to get an argument from me on that one... Although I did just hear a fellow on Go Time during the Unpopular Opinions segment, who stated that to this day, he thinks C is the best programming language, and he gives us reasoning on that episode. And - well, to each their own.

**Frank Krueger:** C is the universal assembler.

**Jerod Santo:** It's a strange thing to say on a Go podcast, but nonetheless, he's trying to be unpopular, so...

**Frank Krueger:** It's not a bad opinion. If you want to write a cross-platform library, I would write it in C. Every platform can compile C, and even better, most high-level languages can bind to C a lot easier than they can bind to like C++ or Rust or something like that. So C is still an excellent choice; if you're willing to put in the pain and the effort of dealing with C and you really want a cross-platform library, C is not a terrible option.

I'm biased towards binding. I really want all languages to be able to use all libraries from all other languages. As much as I love transcribing code, I really wish I could just pull in a Python module, I really wish I could just pull in a Ruby module... But because of reasons, we have to keep our little isolated language worlds. It's terrible.

**Adam Stacoviak:** That kind of speaks to point nine then to some degree, or at least tangentially, which is once you've stood on all the shoulders of the giants and there's no more to be had - well, it's you. It's all up to you, as you say. Think big.

**Jerod Santo:** Your career depends on it.

**Adam Stacoviak:** And you even prescribe a bath, which I totally agree with, which is this whole idea of like step away to get unstuck, you know?

**Frank Krueger:** Yeah.

**Adam Stacoviak:** Perhaps a shower. I have a lot of my great thoughts, or at least mostly great thoughts, away from the actual work itself, you know?

**Frank Krueger:** Oh, yeah.

**Adam Stacoviak:** I could be on a bike route with my son. I could be driving. I could literally be showering, or doing something mundane as like, "Okay, now I understand how I've got to go tackle this", or at least one idea that I can begin to iterate again and kind of go back through step one through nine again, to some degree, which is this sort of cycle that you might go through.

**Frank Krueger:** Yeah, you're basically -- I should have put Go.2.1 because now you're back to thinking or about it for two weeks. You need a break. You're too deep in, you've lost the way... You need some rubber ducks. I probably should have put some rubber ducks mentioned in this, because I totally abuse my friends... And they have no idea what I'm talking about, but I'll just explain a technical problem to them and it just helps. It's coworkers. This is what coworkers are for, too; I have to abuse my friends for that same thing.

**Adam Stacoviak:** My wife is my coworker. She's like, "I love you. However, I'm so done hearing you talk -- I don't even know what you're talking about." And I'm like, "Babe, just listen, please. I mean, I will talk... You can just nod your head, or you can just be in the same room, but if I can talk it out loud and just think out loud..." Just thinking it, for some reason... It could be in your brain, but for some reason, putting it out into the world vocally, speaking the words, making your brain and your body say the words, something happens there when you translate it actually to English and put it out there.

**Frank Krueger:** You proceduralize it.

**Adam Stacoviak:** Yeah.

**Frank Krueger:** Spoken word isn't necessarily procedural, so you've got to put things in an order; that requires you to think about the order for a minute... And that kind of gets us back to steps two and three of just write the function name down and write the order down. Write what words you would tell your wife or your mom or whoever you're going to talk to about this problem - write that out, but use C syntax instead of English syntax for that But just write out that problem.

**Jerod Santo:** \[01:08:16.16\] Right.

**Frank Krueger:** Yeah. Rubber ducks are so amazing...

**Adam Stacoviak:** You hear a lot of people talking to themselves too, if they don't have any friends or coworkers or moms or dads or wives, or whatever. You're going to get a lot of people talking to themselves, which I'm totally cool with. I don't know if you guys talk to yourself often, but every once in a while, you'll catch me talking to myself.

**Frank Krueger:** I am always narrating in my head. I keep it in my head. \[laughs\] But you know, the other fun hack in all this stuff -- I don't know if you guys have used GitHub's Copilot yet, but you write out long function names, with some comments, and a little bit of context. It's--

**Jerod Santo:** Ooh, those start filling in the gaps for you.

**Frank Krueger:** Ooh. Ooh, brother. That code just starts writing itself. \[laughter\] So guess what - long function names are back. The clearer you are - long variable names. You've got to give that AI a little bit of context. Once it's got some context... It's seen a lot of code; it's going to write some code.

**Jerod Santo:** I like that. It's like a quantifiable argument towards verbosity and programming, which has always kind of been a stylistic argument... You know, like more information versus overload; verbosity versus terseness. I think it was Shakespeare who famously said that brevity is the soul of wit, but it's not necessarily the soul of readability. That's my part. I added the second part. Shakespeare didn't say the second part. And if he did, the guy is brilliant. But now it's like, "Hey, don't be brief. Be verbose, because you've got to give that thing something to move on. You don't want to have to write the actual code, do you?"

**Adam Stacoviak:** It's almost like a code search too, right? You're putting the function name in... It's almost like a code search, in a way.

**Frank Krueger:** Yeah, it's a way better Stack Overflow search, or something like that.

**Jerod Santo:** It's like "A wish is a dream your heart makes", you know? You've just gotta put a function name into the world and just hope that an implementation comes back to you.

**Frank Krueger:** You know, they talk about how test-driven development changes your style of programming... Copilot has changed my style of programming, because it totally works very well with this top-down approach. The details are the details. Guess what? Bookkeeping, boring code - that's the code AI has seen the most of, and that's the one it's really good at filling in. It'll make mistakes on a complicated part, but you tell it, "Save this to this table", it's going to write that SQL statement perfectly.

**Adam Stacoviak:** Wow.

**Frank Krueger:** Anyway, till the bots replace us, we can still keep working on the hard problems. They still can't solve those ones.

**Adam Stacoviak:** We had a show on this whole new paradigm where it's AI assisted development, and we talked about that... Like, will we be replaced? And the consensus was generally no. Mostly no. I mean, maybe at some point...

**Frank Krueger:** It lacks the creative part.

**Adam Stacoviak:** You still need the thinking, right? The going away and thinking part is still the thing the machine can't quite do yet.

**Frank Krueger:** But use it for all that bookkeeping code, all that boilerplate code... Of course I want the AI to generate that. I don't need to concern myself with it. It definitely changes your style of programming,

**Adam Stacoviak:** Similar to what you said about garbage collection, I heard recently -- and guys probably both have desks and wires and stuff like that... So I heard somebody say that life is too short for wire management or cable management. It's almost the same thing. It's like, you know what - boilerplate code? Forget it. Life's just too short for boilerplate code, or cable management, or garbage collection... Skip it.

**Frank Krueger:** Do you know how many button on-click handlers I've subscribed to in 20 years of writing UIs? I don't ever need to write that ever again. I'm more than happy for the AI to do that. I don't think it has that creative aspect to it yet, of course. It just needs to be 100 times bigger, and then it'll have that creative aspect. It's not going to create Wordle, but it'll help the heck out of you to write Wordle, no problem.

**Adam Stacoviak:** \[01:11:47.14\] Frank, it's been fun going on this journey with you. What I appreciate most, honestly, and I think this is a a tribute back to you, but also a word of wisdom to others listening, is put your thoughts out there. I think the world benefits when we share our wisdom, and I think this is definitely wisdom. Because you're going to have somebody else come along to this show, or to the blog post itself, outside of the podcast, and just hear from the ground level how someone else who's been in the trenches since the '80s or longer, who's been in embedded systems, to iOS, to .NET, all these fun things you're doing, and just kind of like gleaning from your wisdom, which I really appreciate. So thank you for writing it, thank you for sharing your thoughts here with us today, and we appreciate you, Frank.

**Frank Krueger:** Oh, thank you very much. A quick lesson I learned in Twitch was I never wanted to make a mistake, and then finally someone told me it's when you make your mistakes and when you struggle, that's when it's most interesting. Because you always want to see how people get out of the hard parts. The easy parts are the easy parts.

**Adam Stacoviak:** Yeah.

**Frank Krueger:** So I appreciate you having me on. Really, a life goal here accomplished, checkmark and all that kind of stuff... \[laughs\]

**Adam Stacoviak:** Nice.

**Frank Krueger:** It's been really fun chatting with you. I appreciate it.

**Jerod Santo:** Well, we're honored to have you man. It's been awesome.

**Adam Stacoviak:** Thank you, Frank.
