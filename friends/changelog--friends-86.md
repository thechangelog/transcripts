**Jerod Santo:** Well, my old friend, Amal Hussein, who you probably heard and saw on our recent Friendly Feud... But you're probably wondering, where'd she go? She's here, with me, for a one-on-one. Amal, welcome to the Changelog.

**Amal Hussein:** Hello, Jerod. I'm so excited to be back. It's been a real whirlwind, exciting year for me, and I haven't done barely any podcasting. Life has been kind of turned up to the max on all levels, which I think we'll unpack shortly...

**Jerod Santo:** Absolutely.

**Amal Hussein:** But so happy to be back, and yeah, share what I've been up to, and all the new things that are happening in my life, and... Yeah, I think we're gonna dig into all the things.

**Jerod Santo:** Yeah, absolutely. So we're recording on a Thursday morning, which is not our regular time... I'm drinking coffee, so forgive me if I'm not as sharp as you're used to when we chitchat around lunchtime or noon -- or 2 p.m, usually. See, I already misspoke, because I haven't had enough caffeine yet. But we're recording early on Thursday morning because you've been working this week and you've been having a huge feature you're trying to ship... We want to get into your journey... I don't even understand your journey as somebody who knows you pretty well, because you're at npm, and then this happened, and was it Stripe, or Meta, or this and that, some other company for a while... And I don't even know where you work, yet...

**Amal Hussein:** Yeah, I don't even know where I work either. I don't either. \[laughs\]

**Jerod Santo:** So you've been you've been making moves... But recently, literally this week, we had to bump recording a few times, just because you're trying to get a big feature out. And you did you ship it? I assumed you shipped it, because here you are.

**Amal Hussein:** We shipped it. We shipped it. I signed off 9 p.m. Eastern last night. I live on the East Coast. It was a long, long day... But no, we had a pretty big release going out this month. Data migrations, and just a huge release that also my team was in charge of kind of adding in an authentication layer to our integrations platform, which is what I'm in charge of. We'll dig into that. And so we're kind of adding in support for doing integrations that require third-party auth... And so that really touched everything, and literally every part... And so release days are always -- there's always getting through the release pipeline. Those challenges are very real.

**Jerod Santo:** Right. And you thought it was going to be released earlier than that. In fact, that's why we bumped a couple of times, which is totally cool with me... But I just think it's funny when it's like "Yeah, it should be done Tuesday morning", and then it's like "Well, maybe Wednesday morning." It's like "Well, how about 9 p.m. Eastern?"

**Amal Hussein:** Yeah...

**Jerod Santo:** So did something go wrong, or...?

**Amal Hussein:** It's not so much that stuff went wrong. Well, a couple of things - migrations are always tricky... So there's that. Definitely some things got adjusted. But it was more actually -- I think what we were really bitten by was the developer definition of done.

**Jerod Santo:** Right...

**Amal Hussein:** I think we always forget to account for "Okay, done is not just when I'm done, it's also when code's been reviewed, and code review updates have gone through, and CI has kind of done its thing, and we've fixed any new problems from the changes, and we've deployed somewhere off your machine, and we've integrated... Literally, almost like 30 percent of the work starts when a developer thinks that they're done.

**Jerod Santo:** They're done. Yeah. It's kind of a romantic optimism. "It's pretty much finished", right? Like, "I'm done." And like you said, there's still the other 80 percent to go.

**Amal Hussein:** Yeah. And I tell this to my team... So we were kind of in this is interesting mode where we're working on this massive new integration, massive thing that just touches everything, front to back, right to left... So then we're in the 20 percent phase of this project, where you've done 80 percent of the work and you have 20 percent left. So then you're struck by the fact that 80 percent of the work is in the last 20... And then you're done with what you think is done, but then you have to still get it over the wire, which - then a new clock starts. And then you're in another 80/20.

\[07:52\] So yeah, I think just shipping to production, shipping massive changes, specifically things that like go horizontal across multiple parts of your application, multiple projects, in our case... And so yeah, it's no small feat. So yeah, I miss the days when I was working purely on frontend, or something along those lines, where like it's "Oh, great..." I feel like the frontend community has the most enviable release process in many ways. It's just like the fastest, and then-then-then... But that's the benefit of just being on the top of the stack.

**Jerod Santo:** Right.

**Amal Hussein:** But yeah, anything lower is, you know... And that's been a big shift for me. I've worked on full stack applications my whole -- pretty much most of my career. I've spent a lot of time in the middle front; started out in the back, kind of moved up over time, and then kind of spent a good chunk of my time in middleware layers, in the middle of the app... And now I'm managing a pretty complex platform team. I was actually a principal engineer, still kind of am doing -- I'm doing that crazy job that's like TLM, tech lead manager... \[unintelligible 00:09:23.11\] now they're like "Oh, Amal, you're basically just like running this whole thing", like "Here, you just take this org. You run this now."

**Jerod Santo:** There you go.

**Amal Hussein:** So that kind of happens to me, which is why I've been like pendulum-swinging throughout my career, I've been doing this yoyo between principal and manager, and lead engineer and manager, and... I enjoy doing both jobs; definitely doing more principal right now, because I have a team of very senior engineers, and I don't really need to do much management per se. It's more just like giving my team technical direction and setting "Here's the architecture, here's the plan, here's what we're doing..."

**Jerod Santo:** Mm-hm. So give me your -- enumerate to me the companies that you've worked for. Because when we first met - this was probably 2018, 2017, something like this - you were at Bocoup, I believe. We met at All Things Open one of those years... And so for our listeners' sake, we've known each other for that long. And then we met there, hit it off, had a great time... We invited you on the Changelog. I think we had a great Changelog conversation back then. So good, I think, that we even put a quote of yours in our trailer, because it was just so high-quality. You were talking about like real applications - they're gnarly, and they've got these problems... And it was just like a really good --

**Amal Hussein:** They're living, breathing...

**Jerod Santo:** Yeah, exactly. And then I invited you on JS Party back then, you had the Web Platform Podcast, but it was kind of on - not a hiatus, but you guys were struggling to ship, and I was like "Why don't you just come be a panelist?" And so you were panelist on JS Party for many years... And during that time, it was like Bocoup, and then it was npm... Am I right?

**Amal Hussein:** Mm-hm.

**Jerod Santo:** And then npm got acquired... Or you were already --

**Amal Hussein:** Yeah, npm got acquired, and then shortly after they laid off majority of the company, but it sounds like three people... So I was part of that. And then --

**Jerod Santo:** Then what happened?

**Amal Hussein:** It was like this horrible thing where they -- yeah, only three people got offers to transition into GitHub. One of them was the founder, the other one was the community face, so they couldn't... Obviously, that would be bad. And then the other one would be -- the other person was just the lead, the architect that was still there. The single person that had the continuity of the legacy codebase. And then other folks were put on short-term contracts just to finish up, and/or laid off. It was rough. So yeah, after that I ended up at a pretty -- at the time, a pretty cool unicorn startup called Indigo, which is like an ag tech company.

**Jerod Santo:** Okay, I do remember this.

**Amal Hussein:** \[11:59\] Yeah. It was like building Uber for ag. I was basically a principal engineer building like Uber for agriculture. It was actually a pretty rewarding time in my career, because I got to learn a lot about the challenges in the ag world, and digitizing it, and kind of bringing it into the 21st century. The company had everything going for it. Again, very high evaluation, attracted a lot of really top talent etc. And unfortunately, just kind of fell into that same pit, I think, with startups sometimes when they're doing too well, but then they get struck by bad product management, and like leadership decisions, and it just kind of... Yeah, I don't know what's going on now, but... It still exists, and it's still doing its thing, but I am no longer there, neither is many of the people that I worked with. A lot of people have exited, had a lot of layoffs... And then I ended up at Stripe after that. Stripe was pretty fun. I was a staff engineer, but it was just also -- the hustle culture and the stress of that job was just not really worth it for me. It's absolutely zero work/life balance. And at that point -- I'm just at a point in my career where I want to work hard, I do work hard, naturally... So you have a person like me, who's a hardworker, and then you add in the "Oh my God, people fake-collaborating, but competing" kind of culture... I hate to say this as well; I don't really talk about this publicly, but I definitely also experienced a fair level of toxicity from co-workers in that role... And so it was just -- yeah, it was just like "Okay, not worth it."

**Jerod Santo:** No bueno.

**Amal Hussein:** I had multiple offers when I joined Stripe, literally, so...

**Jerod Santo:** So you picked Stripe. These were the good days, when you could just line up offers, and you were lining them up, and good for you. Stripe was obviously an attractive -- especially from the outside, it's an attractive place to work. I'm sure the compensation was great, the tech problems are interesting...

**Amal Hussein:** Very much.

**Jerod Santo:** But yeah, the hustle culture certainly still there.

**Amal Hussein:** Yeah.

**Jerod Santo:** So then you left Stripe, and then what?

**Amal Hussein:** So then yeah, like I said, I had lots of offers, and I was like "Okay, well, I need to optimize for--" Just being at Stripe, I was like "Oh, my God, this is like --" Stripe had a little bit of a Peter Pan syndrome, and I can't take credit for that. I won't name the person who came up with that, but it was so accurate... Peter Pan being like doesn't really want to grow up; it's this massive company that still tried to act small. And that caused a lot of problems, you know? And so yeah...

**Jerod Santo:** That's interesting, because GitHub was like that for a while, where they had this engineering -- not just engineering-led, but like engineers do what they want culture. And it was really cool and attracted great engineers at the start. And I remember Zach Holman, who's an early GitHubber, or who was on the conference scene, going around talking about this new style of company, which is like engineering-led, and you work on what you want to, and it's all the stuff that we want to hear. And that didn't scale. I mean, it's no surprise. But as GitHub grew, that just wasn't going to work anymore. And GitHub, to their credit - and Chris Wanstrath, and Tom Preston-Werner, and the other leaders inside GitHub that started it, they actually did grow up. I mean, they decided to make changes. And some of those changes were hard, and some were better than others, and mishandled... And of course, there were all kinds of issues along the way... But GitHub did grow up, and then it grew up so much that now it's like -- Microsoft bought it, and now it's like as grown up as you could possibly be, I think probably to its dismay at this point... But they had that to start, but then they actually, I think, realized it. Like "This is not going to last." And maybe it's interesting that -- at least when you were at Stripe, that culture had still existed there. And I'm wondering if it's them back...

**Amal Hussein:** \[16:04\] Yeah. I think your hypothesis and your question comment at the end was very on point. I do think it is holding them back in many ways. And yeah, we haven't seen an IPO, for many reasons. When I was there, it was like "IPO in two months. Two months."

**Jerod Santo:** I'm pretty sure there's lots of people that would love to see that IPO happen.

**Amal Hussein:** Oh, my God. Yeah, it was expected to be the biggest. I mean, when I joined Stripe, it was the most valuable VC-backed company in the world. I think it was like almost 100 billion valuation, or something wild like that. And there's so many great things about the product, the company, the ethos... But yeah, definitely needs a heavy dose of grown up on many levels, and I'll just kind of leave it at that.

**Jerod Santo:** Sure. So where'd you head after Stripe then?

**Amal Hussein:** So after Stripe, I was optimizing for the opposite of Stripe. I was in a very fortunate position, and I was like "Okay, I really just kind of want to be back in enterprise." I really thrive in enterprise; I spent a decent amount of my time in enterprise. And so I was like "Alright", just being poached by a team at Cisco working on a really important product, that's like a single pane of bringing Cisco together... Cisco is a massive company, the sixth largest software company in the world... And so they're bringing together --

**Jerod Santo:** Kind of quietly, too. You don't think about it too much, probably because they're at the network layer most of the time...

**Amal Hussein:** Yeah, network layer, but everything runs through Cisco software and hardware.

**Jerod Santo:** Yeah, totally. That's what I'm saying. It's kind of like Intel Inside; it's like Cisco Outside. But you don't think about it very much as such a big player, but it certainly is.

**Amal Hussein:** Right. And the company overall is just like a really nice company, really well run. It was actually really refreshing to be there, because they've got a really good internal -- basically, you're exposed to like "Wow, this is how big businesses run well on the inside", where you literally have 30% or something like that of the staff is dedicated towards internal operations. Whether it's HR, or anything. You have people in roles that are facing inward on the business itself, operating on the business. And so I think that was just very refreshing, I think, after being at like a Peter Pan company.

But also, I think the flip side to that, Cisco is unfortunately -- just one of the challenges we're dealing with in an org that's trying to kind of innovate and push things forward, we're kind of like a spear. We were like the COOs kind of pet project, kind of an innovation component, is that you're battling against a lot of just like legacy culture on bureaucracy, and what I like to call castle wall guarding... What am I thinking of...? People kind of protecting their forts.

**Jerod Santo:** Gatekeeping?

**Amal Hussein:** Not gatekeeping. Just like people trying to --

**Jerod Santo:** Wallkeeping...?

**Amal Hussein:** Yeah, they're trying to protect -- grow their orgs, grow their reporting chains...

**Jerod Santo:** They're en guard. They are guarding --

**Amal Hussein:** Yeah, castle-guarding, or whatever. And you just deal with a lot of bureaucracy and politics. So I think that was the biggest turnoff for me, was like "Man..." And someone like me, that's a little bit of a -- I hate to use the word; it's corny and way overused, but a little bit of a disruptor, in the sense of like I kind of act as a catalyst in many places that I joined, and just kind of trying to move things forward, and quickly...

**Jerod Santo:** Right. Well, let me say it for you, because you don't want to say yourself, but any room that you come into, the room changes. You're gonna have an impact.

**Amal Hussein:** \[laughs\] Your words, not mine.

**Jerod Santo:** It's just true. You're that kind of a presence, where it's like "Oh, Amal's here." We all know it, and we're happy... Some people probably not happy, especially if they're trying to guard that room... But yeah, I mean, you're definitely a disruptor. I think it is an overused word, but it's certainly fair, because you're going to make an impact, and that's powerful.

**Amal Hussein:** \[20:12\] Yeah, yeah. Well, your words, and thank you, it's very kind feedback. So basically, that was just an interesting challenge. I was just getting things done, and ruffled feathers. And I was just really very proud of the impact that I made there, in the amount of time, and the change that I was able to kind of bring to my team and the work that we were doing... But just kind of like politics, politics, politics was the kind of downside there.

Otherwise, just amazing people, really just impressively-run business. And I think the challenge there is just like - yeah, they're gonna need to change some of their internal cultures, I think, in order to really compete moving forward. Because you just can't -- that level of politicking and bureaucracy just cannot exist if you want to kind of compete in 2025. And what's interesting - when they want to move fast, they move fast. But then there's also just a lot of -- yeah, back channeling that happens. So yeah.

So basically, our org was -- unfortunately, the COO, the person at the company who kind of was shepherding this project, she exited the company. So you have your executive sponsors kind of gone, we had new leadership come in from Google, they started chopping things... So it was kind of a little bit of a bloodbath, and I got caught up in a wave of restructuring, which I was very fortunate, because there was other people who were just straight up just laid off... And so the restructuring for me was like "Okay, you have a job. We want you to stay at Cisco. Here's three months to do nothing other than just go find internal jobs that are open. Or externally. You can do whatever you want, but in three months if you choose to either not pick a team internally, and/or leave, you're gonna get a severance." So I just was like "You know what, I think I'm good, actually. I'm just gonna ride out these three months."

**Jerod Santo:** That happened to Justin Garrison at AWS. He had the exact same thing. I think he ended up silent sacking, because it's like, they don't want to actually let you go, but they're going to put you in -- not necessarily a lose/lose, but like a very hard to win game, where it's like "You need to find something else to do." And with him, I think they were just going to keep paying him... Because he kind of slipped under the radar, and they were just going to keep on paying him. And he's like "I'm not going to stick around for this, because who knows." But that was a move that I think corporates were making at that time. Some of it was to either decrease the size of their layoffs, make it not look so bad...

So it's like a silent sacking, where they're like "Find something to do." And "Well, what if I don't want to do any of those things? Or I can't?" or whatever it was. They also had that RTO policy, which I think he was going to be suffering under, so...

**Amal Hussein:** Oh, yeah, yeah. That's the other. It's like "Let's do layoffs without having to pay out severance packages" strategy. But yeah, it obviously wasn't just me. It was many, many people. And the folks that were in my round, we were really just kind of high cost numbers in a spreadsheet. I was in the middle of delivering some very important work, and making some incredible progress... And whether it was my performance reviews, or just peer feedback, and all of that stuff... Cisco had this nice thing where people give each other money, like "Thank you for this thing. Here's $25 to go spend on some website." So I just literally had like thousands of dollars racked up from thank yous and praise... So all indicators were high performer, and--

**Jerod Santo:** \[24:12\] Right. You were doing a good job.

**Amal Hussein:** Yeah. And it was just cost-driven. And I would agree with the fact that yeah, this overall org was pretty bloated. They kind of hired aggressively. And again, I think part of that was driven by this culture of, again, castle building; castle guarding. Like "Whoa, I'm gonna make my reporting chain the biggest. I'm gonna hire people I don't need, so that I have authority."

**Jerod Santo:** Totally.

**Amal Hussein:** So yeah, it's just the one downside... But yeah, Cisco -- would I work there in the future, if that problem didn't exist and if I were guaranteed to...? Probably, yeah. But I don't want to, though, because now I'm so happy at work... I just want to like retire with this company. I don't want to do anything else, you know?

**Break**: \[25:02\]

**Jerod Santo:** So where are you working now? So this is your new thing. Is it startup? Is that what it is?

**Amal Hussein:** It is, it is. I'm back in --

**Jerod Santo:** Okay, back to the startup side of things.

**Amal Hussein:** Yeah. I feel like singing that song, "I'm back in the saddle again..." \[laughs\] I really am. So I've never been at a startup that's this early stage, but also like high, high competence...

**Jerod Santo:** How early? Series A, or pre...?

**Amal Hussein:** We just closed series A, but we closed it late, because again, the company -- we have revenue coming in. There's just no desperate need to raise, if that makes sense. And so, yeah, the company is a few years old, but yeah, we're series A now... I'm like "Do I want to --" I have not publicly announced this at all.

**Jerod Santo:** \[28:08\] Let's break some news here. I mean, it's not even on your LinkedIn, or what?

**Amal Hussein:** It's not anything. My 2025 goal is to use LinkedIn. As in I have a LinkedIn profile, I do not use it, because every time I log on, it feels like -- it's like corporate worship meets corporate Facebook.

**Jerod Santo:** I think it's a -- I think it's, to its credit... And I've been a LinkedIn hater for many years. Adam loves LinkedIn, and he has, because he's gotten a lot of value out of it... I never got any value out of it for a long time, but it's becoming now one of the only places where everybody is...

**Amal Hussein:** It makes sense.

**Jerod Santo:** And I don't want to say like they behave themselves, but it's like, people are nicer there, because this is your professional network. That being said, it's starting to loosen up a little bit. Their feed is terrible, the way they load it. Like, I'm never enjoying the content there. But people are starting to post some memes... I can feel like I can be myself there a little bit. I've started to post random stuff, and it gets good reactions... So I don't know, it's --

**Amal Hussein:** That's how it starts.

**Jerod Santo:** Exactly.

**Amal Hussein:** Before you know it, it's going to be like a cesspool.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** It's a slippery slope.

**Jerod Santo:** It's the early days, you know, where it's not that sassy. You can dip your toe in. Anyways, it's not as bad as it once was. It's not cool. And that might be its saving grace. Like, it's not cool, but it's getting slightly more enjoyable of an area to hang out. Anyways.

**Amal Hussein:** Right. Right.

**Jerod Santo:** You haven't put this on LinkedIn, but you work in a place called - what's it called?

**Amal Hussein:** It's called Istari Digital.

**Jerod Santo:** Istari. Okay.

**Amal Hussein:** Yeah. And - yeah, it's like a pretty amazing...

**Jerod Santo:** What are you building? What is it? What do they do?

**Amal Hussein:** Oh my God, do you have three hours? No, I will tell you in a second...

**Jerod Santo:** Give me the one liner. What's the one liner? What's on their website?

**Amal Hussein:** Oh my God, I'm not prepped for a one liner. So speaking of websites, we have this website that I think was designed when the company first started, and nobody's touched it since, and it is going through a massive -- not a massive. There's going to be a rebranding and there's an official/for realz website coming...

**Jerod Santo:** Okay. So don't go to the website. We won't link it up.

**Amal Hussein:** Don't go to the website for another week or two.

**Jerod Santo:** Okay.

**Amal Hussein:** And we can link it in a week or two, I think.

**Jerod Santo:** Okay.

**Amal Hussein:** But no, it's basically a platform for -- everyone says "It's a platform for anything", but it really is. But the area that we're focused on right now is digital engineering. which is this concept of, if I had to kind of explain it like you're five, it's how folks working in aerospace and mechanical engineering people building things for the physical world, all the tools that they use, how those things can connect. So how do you actually connect highly secure, classified, IP-sensitive technical data? How do you connect all those threads together while being able to share, collaborate, have audit trails, and also protect your IP and protect the data?

So we have a zero knowledge, zero trust multi-tenancy platform, that has a control plane and a data plane that allows users to integrate all of their third-party tools, and all the things that they use to do their regular jobs, and like pull data from those things and connect them. We almost have an IDE-like experience, where you can make a digital thread, is what it's called... And actually, one of the founders of the company was the person who actually coined the whole term digital engineering and digital threads.

**Jerod Santo:** So what's a digital thread?

**Amal Hussein:** Yeah. So I'll give you an example. You pull data from CAD, for example, or you pull data -- or Excel; let's go even more basic.

**Jerod Santo:** Sure.

**Amal Hussein:** \[32:00\] So you can integrate Excel. We pull data from Excel, then you can take those values using our digital IDE to then push them into another program. So you can pull values from Excel, push them into CAD, then take that CAD file, then push it to another program, run a simulation... So you can actually build this kind of CI/CD, what we call CC, which is continuous compliance kind of like workflow, making sure that while you're building this thing in the physical world, it's still complying to the metrics.

So how do engineers that are working on a physical thing, basically, how do they collaborate? When they're making changes and they're tuning things, all this stuff is still like in bounds, it all still works together. And also, how do we give people on the team situational awareness? How do we share just pieces of our data with our vendors? So I have a third party vendor who's building the tires for this airplane - how do I just share the specs that they need? Right now, unfortunately, a lot of people -- there's emailing of things... There's no secure way for people to share these technical files and this technical data. And it also costs a lot of time when you don't have a way of digitally kind of certifying that something works.

So using our IDE, essentially, using our SDK and our tooling and our integrations, you're able to kind of digitally certify things basically, based on the source of truth. So you're able to connect all these authoritative sources of truth together, and then say "Okay, this works." Because I'm actually running a real simulation, I'm actually looking at the real data, I'm able to pull and extract different pieces and put it together.

So essentially, it's a digital engineering, digital threading platform, but the core architecture can be used for anything. Digital engineering -- so aerospace and defense is the first industry that we're kind of focused on.

**Jerod Santo:** That's why you didn't need to raise any money.

**Amal Hussein:** That's why we didn't need to raise any money. \[laughter\] We got a lot of money...

**Jerod Santo:** Go where the money is, you know... Get those customers going...

**Amal Hussein:** You got it. And what's really cool about this is -- we are a trust platform. We don't look at your data, we actually -- we use this tokenization workflow, which is we kind of bypass... We use our clients to connect directly to storage buckets. And so we generate a token, and we store a reference to that token in \[unintelligible 00:34:45.29\] But none of your data passes through our layer. And so hence the control plane/data plane that we set up.

**Jerod Santo:** Right. That's cool.

**Amal Hussein:** It's just very, very cool. And in an age where everyone wants your data, and everyone -- it's just really refreshing to be working on software that protects, and the whole \[unintelligible 00:35:10.03\]

**Jerod Santo:** Cares about that side of it. Yeah, it doesn't want the access.

**Amal Hussein:** We don't want the access.

**Jerod Santo:** I can't lose what I don't have. Or I can't mistreat what I don't have, or sell it later.

**Amal Hussein:** Yeah.

**Jerod Santo:** So... Meta question then. How did you find this place?

**Amal Hussein:** Oh, yeah. Oh, my God. So this is the best part about this job. So this is why I'm like, you know, it's early, so I get to move at the pace that I want to. And what's really nice about startups is that anyone knows, if you want to have an impact, you can have an impact. The shovels are on the ground, just pick it up, you know what I mean?

**Jerod Santo:** There you go.

**Amal Hussein:** But the way I got poached was actually through my colleagues at \[unintelligible 00:35:52.15\] at Stripe; the colleagues that I liked at Stripe. They poached me into this.

**Jerod Santo:** Okay. So they work there, and they're like "Let's get Amal."

**Amal Hussein:** \[36:02\] Yeah, some of my ex colleagues at Stripe work there. A few people, both in high leadership positions in engineering, both like VP of engineering, or distinguished engineer, and then another engineering leader kind of reached out and was like "Hey..." And some of these people are also people that I knew pre-Stripe, folks I've had longtime friendships with, like Maggie Johnson \[unintelligible 00:36:24.19\] being the -- I don't know if she's been on the pod before. And all of this kind of was a funny timing for me, which maybe I'll get into the funny timing story later... But it's been this refreshing experience of working with really smart people on a very hard problem. And it's not just folks from Stripe, it's folks from many companies that you recognize; a lot of companies that you know on a first name basis... But it's like everybody's favorite people from the jobs that they've worked at, so it feels like we've collected all these awesome people, and we are all working together.

And then we also have a lot of people that worked on really high-level stuff in the Air Force. And as you know, the military has been a source of a lot of big innovation, except for -- I think Gen AI is the one thing that they've missed, and I think through our platform hopefully we get to maybe help the government innovate on that, because there's a huge AI play for us as well.

But it's just been really nice working with innovators who have this background from the military as well, working on just like really hard problems, just for the Air Force, for Space Force, you name it. People who have this expertise. There's this nice kind of adult culture that we have at the company, which has been really refreshing for me. There's this adolescent culture that kind of, unfortunately, is very pervasive in tech, and I think it's just been really refreshing to be at a company where, you know, actually, you don't really need to bring your whole self to work. We're just kind of actually here for a job.

**Jerod Santo:** Yeah. I like that.

**Amal Hussein:** Yeah. And then also just high, high diversity, too. You realize the military is actually one of the most diverse employers in the world.

**Jerod Santo:** Yeah, it is.

**Amal Hussein:** I'm a woman of color, and I've just had -- yeah, it's just been very refreshing seeing the level of diversity within the company, but also just the fact that no one really seems to care what your gender is, or what your color is, or whatever. We're all just getting things done, you know. So I think that's just also just been really refreshing on a personal level.

**Jerod Santo:** Yeah. So you're working on a digital engineering, digital threading platform. When I met you, you were all about the web platform. You're kind of moving to a different platform now. Is the web just not part of your life as much? Is the web a deployment target? Does it play a role? Obviously, web tech certainly does APIs, HTTP etc. But is the web less important in your life these days, or...?

**Amal Hussein:** Yeah, that's a really -- that's a deep question. So I am pretty much like exclusively working on software that -- working on platform services, and software that's installed on OS'es... Things that I'm just deep in. Obviously, we have clients, we have SDKs and things like that...

**Jerod Santo:** No TypeScript, right? No TypeScript.

**Amal Hussein:** I'm not touching or dealing with TypeScript on a day to day basis at all.

**Jerod Santo:** Do you hear that, Nick Nisi?

**Amal Hussein:** \[laughs\]

**Jerod Santo:** Neither of us are.

**Amal Hussein:** We have a wonderful internal UI for our app and all that jazz, but that is not my domain.

**Jerod Santo:** Are you actually coding, or are you spec'ing? What are you doing? Are you vibe-coding?

**Amal Hussein:** All of the above. No vibe coding, yeah. Although, you know... Oh, my God.

**Jerod Santo:** \[unintelligible 00:40:00.27\]

**Amal Hussein:** \[40:03\] All of the above. Yeah. Writing software, doing a lot of architecture and design... Not spending as much time as I want writing software, and that's always been a challenge when you're a lead, because you're in so many meetings... But very involved with the actual design and rollout of what we're doing day to day. And then - yeah, I basically lead an integrations platform. So we manage the interface for how things connect into our platform, which is -- and I've leveraged all my expertise, everything, my npm background... What I've created is essentially something very similar to MCP, actually.

**Jerod Santo:** Oh, model context protocol?

**Amal Hussein:** Yes. Yeah.

**Jerod Santo:** Well, that's an acronym that I know, but I don't know much else beyond the acronym. I know the acronym, and I know what they're trying to do. But I'm not sure -- I don't know the protocol at all. And very few of us probably do. It's pretty new stuff, so feel free to elaborate if you want to.

**Amal Hussein:** Yeah, sure. So I mean, essentially, I run a team that -- one of the things that my team owns is agents. So we actually have agents that do the tasks, do the work, and we have a standard interface for how these third party integrations connect in. And that was kind of my first baby when I joined Istari, was like "Oh, we need a clean way of doing this integration." This is a third party integration, and so we kind of have something very similar to package managers. We have packages that can get installed, and how those things get managed, and published, and registered is borrowed a lot from my experience working at npm.

And what we've done is kind of created this standard way for any third party package, any third party tool to connect and integrate in with our agents, so that our agents can do the things that our users want to do on the other side. So we have functions that can be invoked, that users can invoke, and... Yeah, so I feel like I'm getting into the weeds, and this is where I'd want to have a screen, and pull up a demo...

**Jerod Santo:** Sure.

**Amal Hussein:** But yeah, so we --

**Jerod Santo:** We don't have a demo available, so we're not gonna do that.

**Amal Hussein:** Yeah, we don't have a demo available right now and we don't have a screen, but... I think it'll be worth it, once we're a little further along - and we've actually just started to come out of stealth. We've been talking to a lot of customers... We have many customers who, again, you would know on a first name basis, but in terms of beyond our customers, we're just starting to come out of stealth. And so I think it'll be worth it to even just -- once we're further along, I'd be happy to kind of come back on the show, maybe with Maggie, who's our head of product, to kind of actually just talk through what is this. And we are hiring... Can I make a plug?

**Jerod Santo:** Sure, go for it. I'm sure our listeners would love to hear about someone hiring. That's always good right now. We want hirers.

**Amal Hussein:** Yeah. If you're an infra engineer, or -- hiring also people for my team... Please, feel free to find me on --

**Jerod Santo:** So what do they do? They can't go to the website.

**Amal Hussein:** Find me on LinkedIn. Find me on LinkedIn.

**Jerod Santo:** Are you gonna be there?

**Amal Hussein:** I have a LinkedIn... Just DM me, and... Yes, yes.

**Jerod Santo:** There you go.

**Amal Hussein:** I basically said that as soon as we update our website, I will update my LinkedIn.

**Jerod Santo:** Okay. So it's like a standoff. It's like playing chicken.

**Amal Hussein:** It is. Yes. But no, DM me. And yeah, I'd love to talk about it more. But basically, the long story short is I am in an exciting job, that is super-challenging... And working on really complex problems, and also a lot of complex constraints. For example, I'm not working on SaaS anymore. And so this isn't just a pure SaaS --

**Jerod Santo:** No web. Heck with the web. Done with the web.

**Amal Hussein:** No, we're not done with the web. I'm not done with the web.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** \[43:51\] But this is not just a purely SaaS problem. We can host it, and we do host it, but it's also -- you can run this fully on prem. So having to design under a lot of constraints where something should be able to be fully on prem, something should be able to be fully functional in an air-gapped environment... Imagine basically our software should be able to run --

**Jerod Santo:** How do you connect threads together in an air-gapped environment? It doesn't make sense.

**Amal Hussein:** Through the internet.

**Jerod Santo:** Well, it's air-gapped. There's no internet.

**Amal Hussein:** No, it's not internet. I said intranet.

**Jerod Santo:** Oh, intranet.

**Amal Hussein:** Yeah.

**Jerod Santo:** Okay. When I think air-gapped, I think like you have to walk over to the computer to put something into it, because there's no network at all.

**Amal Hussein:** Yeah. It's an internal network.

**Jerod Santo:** Internal network. Gotcha.

**Amal Hussein:** Internal network. Nothing from the outside.

**Jerod Santo:** Right, right, right.

**Amal Hussein:** Yeah.

**Jerod Santo:** So you have these different deployment targets on prem, hosted?

**Amal Hussein:** Yeah. Multi cloud...

**Jerod Santo:** Multi cloud.

**Amal Hussein:** AWS, Azure, GCP, OCI...

**Jerod Santo:** Will it run on my phone?

**Amal Hussein:** Not just AWS. AWS commercial and AWS -- all the gov clouds, all the secure clouds, too... Which is its own thing. I've learned so much. I've learned -- not run on your phone yet. Maybe someday.

**Jerod Santo:** Well, that would be like the last deployment target. That, or my dishwasher... I mean, what are you guys -- what are you building over there? It's got to run on everything.

**Amal Hussein:** Everything, everything. Again, I --

**Jerod Santo:** It's the everything platform that runs on everything. Okay.

**Amal Hussein:** It really is. So that's why this is an exceptionally hard problem. And my team, we own the agents, we own a lot of platform services, we have stuff that we -- we're basically in integration, so we touch everything. We're in the middle of everything. And so it's also just -- yeah, I think even just like hiring for this team, you're looking for someone that is comfortable stretching themselves, not just in terms of stack, but in terms of you're comfortable working on Windows targets, on Red Hat Enterprise Linux, you name it.

**Jerod Santo:** AIX, you know... Windows 95... You've got to run on everything.

**Amal Hussein:** \[laughs\] Gotta run on everything.

**Jerod Santo:** So you're in charge of the of agents. How do you find agents working today? And -- I don't know, I have so many questions about agents... What are they? Where's their intelligence coming from? What models are being deployed? And are they good? I mean, I just feel like agents are still a promise, but not a reality.

**Amal Hussein:** Right. I don't know, I feel like I had been working on agents before they were cool, I feel like... Because it's been a year or so, a year plus for Istari; I've been there a year. Basically, think about it this way - they're like the robots of the future, in the sense that we need machines to be able to do remote execution for us, and to be able to remotely execute on tasks, and remotely do work, right?

**Jerod Santo:** Right.

**Amal Hussein:** So in theory, they should be really dumb, but then how do we make them smart? And so we make them smart through our integrations, through like "Here's an integration. Here's code for you to go use this third party module, or some third party tool."

**Jerod Santo:** Right. Give that model some context. It's model context.

**Amal Hussein:** Exactly. And then all the functions, but like -- but ultimately, these are robots that are basically just following instructions; they're just kind of performing remote tasks. I feel like we started this dance, to some degree, with edge computing, right? Like "Oh, we need to be able to do compute on the edge", you know what I mean?

**Jerod Santo:** Sure.

**Amal Hussein:** And so now we need to be able to do more than just compute. We need to be able to have interactive compute, on any edge. And our agents are designed to run on supercomputers, they're designed to run on your desktop...

**Jerod Santo:** To run on anything.

**Amal Hussein:** ...they're designed to run on anything. You know what I mean? That's the other thing - like I said, it's a very hard job.

**Jerod Santo:** Can you trust them, though? Can you trust them to run on anything? Are they not going to execute the wrong thing out there?

**Amal Hussein:** Right. And that's exactly why we have something called the control plane and the data plane, right? Our control plane doesn't speak to agents, agents speak to the control plane. So there's just a secure communication flow, and --

**Jerod Santo:** \[48:08\] Like, it's one way.

**Amal Hussein:** Right. All the MTLS, and --

**Jerod Santo:** I don't know if that is.

**Amal Hussein:** Just encrypted, like --

**Jerod Santo:** Okay, so TLS with an M in front of it.

**Amal Hussein:** Yes. Yeah.

**Jerod Santo:** Okay, I do know what it is. Thank you.

**Amal Hussein:** Yeah. Right. \[laughter\]

**Jerod Santo:** I'm with you. I'm back.

**Amal Hussein:** Yeah. And then PAT generation, tokens... There's ways to make this secure; it is secure. Again, security -- essentially, our target is working with the most classified, most sensitive information. So security and being secure is core to everything.

**Jerod Santo:** Gotcha.

**Amal Hussein:** So again, like I said, why it's a hard problem... And I can't get into everything...

**Jerod Santo:** Sure, sure, sure. Can you talk about models? Or is that proprietary?

**Amal Hussein:** Models?

**Jerod Santo:** Like, what models are these agents using for their intelligence? Are you using LLaMA? Is it DeepSeek? Do you have your own models that you've trained?

**Amal Hussein:** Yeah, I don't think I can get into that.

**Jerod Santo:** Okay.

**Amal Hussein:** Like I said, once we're further, I'm excited to...

**Jerod Santo:** Would you use one of these to buy yourself something off of Amazon?

**Amal Hussein:** I would. Oh, yeah.

**Jerod Santo:** Like "Hey, go get me a new sweater."

**Amal Hussein:** Well, it can do anything you instruct it to do. Anything that a module -- any function that's in a module is what it can do.

**Jerod Santo:** Gotcha.

**Amal Hussein:** So if you trust the module author, you can have it do whatever you want.

**Jerod Santo:** So the agent is like a little program that runs other programs in a remote context.

**Amal Hussein:** Exactly.

**Jerod Santo:** Okay, interesting.

**Amal Hussein:** Yeah, robot of the future.

**Jerod Santo:** Have you thought and talked about agentic coding much? This is slightly upstream, but it's also in the world of agents.

**Amal Hussein:** Yeah, I've like read a little bit, and I've even seen some Changelog stuff come \[unintelligible 00:50:05.17\] on that... I mean, what's interesting is there's so much innovation and change right now... We're just kind of grasping, and it feels like a mound that's continually shaping and reshaping. I just saw something like "Oh, is Diffusion dead?" The thing that was so popular just two years ago, or something... So everything is morphing, everything is shaping. We are shaping and defining our future day by day, hour by hour at this point... And so yeah, I'm not over-invested in keeping up with all the specifics of the hype train, if that makes sense. It's just for sanity. What I do know is that I am building for the future, and I've gone through my own journey with AI and usage of AI... And basically, what I'm doing - we're building a reference architecture to scale with LLMs. That's kind of what we're doing at Istari as well.

**Jerod Santo:** Take us on your journey.

**Break**: \[51:14\]

**Jerod Santo:** Take me on your journey.

**Amal Hussein:** Well, there's a lot of feelings. So my journey has just been like -- you know, I was just terrified at first, because it's like "What is this?"

**Jerod Santo:** "I don't like new things... This is scary." Yeah, sure.

**Amal Hussein:** Yeah. And then you use it and you figure out, "Okay, actually, this is really useful." And now I use AI multiple times a day, every day, to do my work, to check my work, to help clean up docs, to write tests... Whatever it is. But there's just kind of this -- what I don't like that's going on is this hype from these founders, Perplexity founders, or whoever founders that are just like "In 12 months, all code will be written by AI." Things like that are just -- they have to be taken with a grain of salt. These are people selling products; they're not gods, they cannot predict the future.

**Jerod Santo:** For sure.

**Amal Hussein:** And also, the role of the software engineer feels like it's very much shifting, in the sense that - I think we have to accept that AI is here. We have to get to a place of acceptance. And so how are we building and incorporating this into our products? How are we delivering more value for our customers using AI? Not just kind of the slap-on experience, but how are we truly integrating this into our products in a way that makes sense, that solves problems faster for customers, internally or externally...

And yeah, I think it's okay to be afraid. I think that's normal, and expected. For me, I don't know if it was -- it probably was; it was FUD. It was like fear, uncertainty, doubt. It's probably a mix of what I had. But I think being kind of more future-focused -- I actually think this is a pretty exciting time, if you're willing to just kind of shut your fear, mute your fear for a second, and actually just kind of see the opportunities ahead... Which I think are actually pretty plentiful if you're willing to dig in and lean in.

Unfortunately, this is yet another thing that's volatile and shifting for us... It's like "Man, can we ever get a break in tech? Can I just get like one month of stability? Just please." But this is the job, this is the self-flatulating industry that we've all picked, and so here we are.

**Jerod Santo:** Yeah. We've got a shiny, new wheel that we reinvented. You better get that new wheel...!

**Amal Hussein:** Right. But I don't know, what do you think?

**Jerod Santo:** So -- I mean, I think medium term I'm definitely... I'm not gonna say the word bullish, because I'm not necessarily -- I think bullish implies that you're also excited about it. But I'm confident that our day to day work as -- now I'm talking about software engineering, not necessarily product development... But I think that our day to day work is changing, and is going to continue to change over the next 18-24 months. I don't know exactly where it plateaus, or if it plateaus. I feel like I've hit a few plateaus over the last 24 months, but every time you plateau, then like you said, a month goes by and it's something else.

And so I think where the agentic coding, where the AI is actually writing the code for you is the next question mark for me... Where it's like "Is this actually going to be the future?" Because I think it's pretty clear that it's found its use in our lives as an auto completer, as a rubber duck programmer...

**Amal Hussein:** Right.

**Jerod Santo:** \[57:59\] And we're okay with it spitting out boilerplate that we then agree to, and change, or whatever. But where the real gains can be had in productivity is "Can I have a fleet of little AI agents, and I send them off to do things, and they're better than me at it anyways, and they do the things, and they come back, and I'm done, or I'm moving on to my next thing?" Which some people think is happening, or will happen in the next 12 months.

I'm just not -- that's why I asked you, do you trust your agents? Because I'm just not so sure if and when that's going to be like human out of the loop... Because honestly, if -- I make fun of vibe coding all the time, mostly because I think it's a really fun term. I'm really glad it got coined, I've made a bunch of memes about it... But if vibe coding could actually be the future of coding, like if they could get that good, it's going to be dramatically different. It's going to be very exciting. It's going to be very scary for people who make their careers coding.

**Amal Hussein:** Yeah, yeah.

**Jerod Santo:** And I'm not sure, long-term, if it's actually going to deliver on that promise. So that's why I ask people when agents come up, like "How good are these suckers?" Because there are those who think -- I most recently read the Steve Yegge post, "The revenge of the junior developer." I covered that in Changelog News. Of course, he works at Sourcegraph, and so I said that on the show, I'm like "He's selling tools that are going to put AI agents into your IDE, and so he's incentivized to be bullish on this." But he's saying fleets of agents are going to 10X and 100X in the next 12 months our ability to write code. And he's a smart person. He's not just a hype boy. I respect Steve, he's had quite a career... And I'm just not sure if he's right or not. So that's why I just don't know.

I see a lot of stuff out there that's like "This is great for proofs of concepts and prototypes", but will it soon be great for production systems, or is it always going to be -- and by always, I mean over the next foreseeable years... Just that quality of "Now we've got the prototype. Now let's go build the thing." I'm not sure. That's why I ask everybody how they feel about agents. I feel like the agents you guys are deploying are different than coding agents.

**Amal Hussein:** Yeah, yeah. They are different, but I think for us, our goal is we want to have an LLM be able to write our integrations. That's the way we scale. Otherwise it's like a boil the ocean problem, because every company, every customer has their own stack etc. And so that's kind of what we're working towards.

I think in terms of the coding agents that you talk about, just taking my Istari hat off and putting my Amal engineer hat on - I'm not personally convinced that we're ever going to have humans out of the loop if you want production software running. I mean, not this decade anyway.

**Jerod Santo:** I'm kind of with you, but then I have to like check my bias and be like "Is that because I'm a curmudgeon?"

**Amal Hussein:** No, no. I don't think it is, because you need an AI to check the AI to check the AI. And then --

**Jerod Santo:** But can't you just do that? Like, they do have AIs -- you know, one of the problems with hallucinations can be solved by simply having another one that checks the original one and being like "Nah, that doesn't sound right." And so while we can't get to like a hundred percent accuracy with this current technology, because they are just next word predictors, you can have AIs that watch AIs that watch AIs. And if you have enough of that, you can on an infinite scale approach zero. And so you can kind of solve that problem by literally having the AIs watching AIs watching AIs.

**Amal Hussein:** Yeah, but at that point it just becomes a matter of like compute, and complexity, and you're managing a different set of problems. So you're just trading one bag of problems for another. And also - I'm sorry, is there a problem with using humans?

**Jerod Santo:** Well... \[laughs\]

**Amal Hussein:** \[01:02:06.19\] Like, yeah, we're using AI to go faster. It seems like the best compromise, in the sense that I think that's the kind of -- having the AI speed pack, I think. The AI jet pack on a human, I think for me is what actually the future looks like.

**Jerod Santo:** I think that's a surefire win. I agree with you that that's going to be, and is, even today... Even at the most basic levels now, the way I use AI in my coding, which is basic. I'm basic.

**Amal Hussein:** Yeah.

**Jerod Santo:** I basically - pun not intended there - I have just... I don't do any of the fancy stuff. All I do is instead of ever getting a Google search, anything that I would have previously just pasted into Google, I just paste it into an LLM instead.

**Amal Hussein:** Yeah, same.

**Jerod Santo:** And even just that move is probably like a 20% speed up boost over the Google path. Because the Google path requires you to go read the result, click on this blog... Oh, this person doesn't know what they're talking about. Go back, go out. Here's a Stack Overflow thread. Oh, that's not exactly my problem. And so of course, the LLM is going to be wrong 1 in 10, but...

**Amal Hussein:** Those odds are better.

**Jerod Santo:** Yeah. It's just better. So it's better than Google. And so me plus that is better than me plus Google. For sure. I'm convinced of that. And so as those things increase, those automatic wins for human engineers to be better, we just need to swipe those up and use them as engineers. But at a certain point - yeah, how good is it going to get, is the question that I don't have the answer to.

**Amal Hussein:** Okay. So I hear that. Here's where I'm coming from. And I'm sure there's many people who would disagree with this, but... I don't know, maybe not that many, actually. But ultimately, your code has to be compliant. If you're running software for any business, any business that's doing anything meaningful, whether it's finance, education etc. there's some level of compliance that you have to adhere to. And so if you don't actually know what's in there, and you don't have a human in the loop guarantee, you can't certify guarantee... For me, there's just a giant compliance problem that I see.

And then there's also just lots of code that's sensitive, whether it's financial algorithms, and, and, and... There's just a lot of kind of many critical software that is dealing with sensitive transactions.

**Jerod Santo:** Sure.

**Amal Hussein:** So that's the other thing. And we've seen now with the recent vibe coding how easy it is to hack these apps, because they're so poorly made. There's just -- like, sure, people who don't have a software background can write apps. By all means, let's democratize that. Go for it. But if you're trying to write something in a production context that needs to be compliant and secure, and scalable, and where you can actually fix your production problem within a timely manner, and... Basically, any code that needs to run a real business that's dealing with critical or sensitive and important stuff, I just, I don't see how this scales. And maybe this is my 2025 basic mind... She doesn't know --

**Jerod Santo:** \[laughs\] Basic minds think alike... Isn't that what you said on the Friendly Feud?

**Amal Hussein:** Yeah, right. Right. She can't see the future, yadda, yadda, yadda. But ultimately, I'm just trying to understand "Where's all this poo-poo talk --", why are we poo-pooing software engineers? This is what I just don't understand. I feel like there's this attitude of "Oh, we don't need developers anymore. We're gonna be able to do this and that." What have developers really done to kind of deserve this type of rhetoric? Do you know what I'm talking about, Jerod?

**Jerod Santo:** I do...

**Amal Hussein:** \[01:06:05.18\] You've seen that, where people are excited that software engineering jobs are going to be reduced, or diminished, or software engineers are going to have less responsibility, or whatever... There's just like this celebration of -- I don't even want to call it a downfall, but a perceived downfall... And I just don't really understand where that's coming from. And I think for me the only thing I can chalk it up to, keeping it totally real, is the fact that software engineers are -- we have been able to assert some type of agency in this world. We're well paid... We're not in the wealth-wealth class, but we're not -- most people are upper middle class, at least in North America.

**Jerod Santo:** For sure.

**Amal Hussein:** And so we're like a group that has some agency, in terms of being able to switch jobs, or whatever else... I know recent years have been tough, but generally speaking, for experienced engineers, I certainly still feel like I have agency. I get hit up for stuff... And so I'm just trying to understand, why this hate towards developers? I don't know if you have thoughts...

**Jerod Santo:** I do. I feel like anything I could say would be generalizing, because I think there's lots of different reasons why people might be excited about that... One of the memes that I made about vibe coding was - do you know the exit ramp meme? ...where it's a car going on the highway, and it could be going straight, but then there's an exit ramp.

**Amal Hussein:** Oh, right. I've seen that.

**Jerod Santo:** And the car is pulling a hard right...

**Amal Hussein:** Yeah, yeah.

**Jerod Santo:** Well, I made one of those, because I had copious free time... And the straight path -- so in the car was the startup guy, or the idea guy, I think I called him. And the straight path was like code school. Because that's really the ilk of the startup guy, the idea guy, specifically - and gal; just a gender-neutral guy.

**Amal Hussein:** Yeah, a person. I get it.

**Jerod Santo:** Most of the time it's guys, honestly... It just is. It's that they don't have any ability to build what the idea is, and so they're looking for a technical co-founder. That's a trope. That's a real thing. And it's the plight of them, because they can't actually do what they want to do, because they can't do what they want to do. Okay? So the old way was like code school, and we'd be like "Yo, just go to code school, work hard for however long it's gonna take you, and then you can build your idea." And then the exit ramp now is this guy going vibe code school. He's going to vibe code school, because now he can vibe code it. And that's very empowering to idea guys. And I feel like -- and this is just one particular stereotype. Like I said, lots of different reasons. But we have had agency; we've also had kind of superpowers, where it's like we can take your idea, and we can build it. And that's very valuable in the marketplace. But also, if I have an idea, I just build that idea. Amal, if you have an idea, you just build it.

**Amal Hussein:** I just build it. Yeah. When I have time. Yes. Yeah, exactly.

**Jerod Santo:** Yeah, exactly. We aren't actually very good, and our ideas kind of suck... And there's lots of reasons why we still fail. But that's been a superpower for software engineers ever since maybe the dawn of the internet. We could just take an idea, without permission, build it, put it on the internet, be the next Jeff Bezos, or whatever it is.

**Amal Hussein:** Right.

**Jerod Santo:** Now other people think maybe this is going to get them there, and we're not necessary anymore. So that's one possible reason why people are excited for the demise of the software engineer. It's like "Well, we don't need you guys anymore. Maybe."

**Amal Hussein:** \[01:09:41.20\] Yeah, I think there's something to that. We've been a bottleneck, and a frustrating one. Because there's so much of -- unfortunately, one of the problems in our industry is we have this... So unfortunately, in our industry we fetishize a handful of companies. Everyone wants to work for these handful of companies. And you have the brilliant software minds highly underutilized at these handful of companies, such that really smart people are working on things like animating poop emojis, when they could be really solving critical problems for the government, in education, colleges... All kinds of industries. Every industry needs to level up its technology and digital transformation. There's just so much work to do, but we kind of -- we're not line balanced when it comes to where people are working, and/or where they want to work, and/or what they're working on.

So I hope that this period that we're in in our industry kind of helps improve our line balance, so that we're more balanced across all the industries that need our support... But ultimately, we have been a bad bottleneck for all these people who can't hire good talent, because either they're too expensive, or there's too few of us, right?

**Jerod Santo:** Right.

**Amal Hussein:** So that's definitely one thing. And another thing is that -- yes, time is a real limiting factor, and AI lets us do more with our time. So that's fantastic. However, there's something called physics, and real world constraints, like time, and your body, and all this other stuff... There was a study that was done on languages, and no matter how fast you might think Vietnamese sounds, or Mandarin sounds, or how slow you think English sounds, the actual average words per minute spoken in any language actually roughly translates to be about the same.

**Jerod Santo:** Really?

**Amal Hussein:** Which says something about your brain's ability to process information. We are still singular human beings.

**Jerod Santo:** We're bandwidth-constrained.

**Amal Hussein:** We're bandwidth-constrained. So yes, we can do more and all the things, but ultimately, doing more also means managing more. So it's one of those things where if my team is now shipping more and more features, each feature we ship needs some amount of maintenance. So ultimately, if the same amount of people keep making more work, but we're not maintaining it - that math doesn't really add up. So yes, doing more means we need more. This is where I go back to - I don't see how any of this scales without people. Because yes, we can do more and produce more, but all that code ultimately needs to live on infra, it needs to be maintained, it needs security patches... Yes, we're going to have AI be able to do a lot of it, but there's still going -- with more AI generating stuff, there's still going to need... We might not need as many people, but we still need people. So by kind of us exponentiating via AI, I think there's still a growth curve for engineers. A big one, actually.

Maybe I'm conservative, but that's kind of where I stand. And it's very frustrating to me to see all these AI startup founders just kind of rejoicing at the -- they're just brushing off the value that software engineers bring... While all of these LLMs have been trained on work produced by software engineers, actually. You know what I mean?

**Jerod Santo:** Yeah.

**Amal Hussein:** And, and, and, right? Not just trained on, but who produced this stuff? Who's rolling out this stuff. I don't know, we should be more angry about it, I'll just put it there.

**Jerod Santo:** Well, they're disruptors, Amal. They're trying to disrupt the industry, because there's lots of money to be made if you can make software without all the people that you have to pay to make software. Or if you can sell the tools that allow other people to do that. That's what a lot of these companies are trying to be, is the pickaxe sales people during the gold rush. And the new gold rush is vibe-coding.

**Amal Hussein:** \[01:14:13.12\] That's exactly it.

**Jerod Santo:** It is.

**Amal Hussein:** That's exactly it. And so it's like, you know what? It's fine. Let people figure it out and fail. This is why we have open markets and free markets. Ultimately, there's room for experimentation and whatnot. It's just, the challenge in our industry is we don't have the best leaders, because there's something called FOMO, and like domino effects of FOMO, and people just feeling like they're missing out, and they act on imperfect information, and they follow trends that are not really actually well intended, well thought out, well whatever. Things happen that I think -- yeah, people act on hype more than they should, basically, to put it simply.

**Jerod Santo:** Let me take the other side of this for a moment, because you and I are pretty much in agreement, or also in similar places in our careers... And one of the reasons why Steve Yegge called this post that he wrote, which - it's a good read; he's a good writer, so it's entertaining alongside him making his points... But he called it "The revenge of the junior developer." And the reason why he said that is because he's noticed that junior devs, or non devs who are trying to get into it are way more open to accepting and trying, and really trying to push the edge of these new technologies, specifically around agents, coding, and vibe coding, and all these things. Whereas seniors and more experienced developers - we're still testing the waters and stuff, or some of us just write it off and are never going to use it. But we're just more stuck in our ways, and I guess in that sense anti democratization. So from our perspective, our bias might be that way because in a very real way, you've worked really hard to get where you are. And so have I. I mean, maybe not really hard, but I've put some work in. You probably worked harder than I did... We don't need to compare. We've been in the industry a long time.

**Amal Hussein:** Yeah, we can both pat each other on the back.

**Jerod Santo:** That's right. That's right. But we're builders. So you can bring me your idea, and I could build it. And that didn't grow on a tree, or that wasn't gifted to me by God when I was born... I worked hard to get there. And so seeing people potentially be able to just acquire our skills without any effort... Maybe that hurts a little bit. Maybe we don't like that. You know, there's a little bit of -- I won't to call it gatekeeping. Maybe it's guarding the castle, you know... Because this castle was hard to build, and I'm valuable now as a worker because of the skills I've acquired... And I don't know, maybe I don't want that to go away, and so I prefer not to believe that it's going to.

**Amal Hussein:** Yeah, yeah. You know, it's really interesting you say that, because I feel like -- I see the same kind of phenomena happen in the South, in the United States, where whenever they try to raise minimum wage past... I don't know, it's like something ridiculously low still in many parts of the country; under $10, I think, even... Whenever they try to raise it to like an actual living wage, there's just so much pushback, and I feel like that pushback happens because people are like "Well, it took me years to make that kind of money, and it doesn't make sense that somebody would just get that right away." This feeling that people need to earn it, or go through the same level of...

**Jerod Santo:** Effort.

**Amal Hussein:** ...effort, you know, that they did. And the reality is - sure, somebody using LLMs... By all means, I still see myself as being senior to that person, by a huge majority... I also think that having a software background with AI just puts me in a completely different category. It exponentiates me in the same way that it exponentiates that other person who has zero knowledge. But it's exponentiation, so there's a high log factor to account for.

**Jerod Santo:** \[01:18:25.01\] Right. Right.

**Amal Hussein:** So we're still not on the same level, and I think software engineers need to understand that. And that's why I said earlier, acceptance is the first phase. And the next phase is you've got to get moving on this stuff and start building for the future, keyword being future. Because if you dig your heels in and you're like "Whatever, I'm gonna just show that I can do this from scratch, and I can do it the hard way", and this and that - awesome. But I don't think the skills that we used to pride ourselves on are going to be as relevant anymore, specifically the free type coding for 20 minutes because you've memorized all the syntax...

**Jerod Santo:** Right.

**Amal Hussein:** Somebody is going to be able to code faster than you using prompts.

**Jerod Santo:** "This is Unix, I know this."

**Amal Hussein:** Yeah. 10 times faster -- like, a bajillion times faster than you. So we have to relearn some things in terms of the way we work... But I think this is all part of the next phase of what it means to be a senior software engineer in 2025.

**Jerod Santo:** Right.

**Amal Hussein:** We have just new benchmarks, new ways of working... I think these are conversations we need to be having more, they just haven't been happening enough. And quite frankly, it's still a very challenging time in terms of the market, the job market, so...

**Jerod Santo:** For sure. I think it's a really good point. And to just to draw a gross analogy, or a basic -- just to get back to basics... If we talk about a pickaxe, imagine somebody who spent years trying to dig gold with their hands, and then the pickaxe comes along. And it's like "Hey guys, I've been digging gold with my hands, and now you get a pickaxe."

**Amal Hussein:** Exactly. "What the hell...?!"

**Jerod Santo:** So two points to that. The first one is you also get a pickaxe. Okay?

**Amal Hussein:** Exactly,

**Jerod Santo:** So your life's better now, because you can just grab the pickaxe. And the other thing is, do you know how strong you got while you were digging rocks up with your bare hands? And so when you put a pickaxe in your hand, you're going to be better at it, stronger - it's a gross analogy - than the person who just came off the streets and you hand them a pickaxe. You have skills. You can actually leverage the tool better than other people can. And so don't forgo the pickaxe because you got really good at using your hands. Grab that sucker and be good at it.

**Amal Hussein:** You got it, you got it. And I think... Also, just remember, y'all - yes, this is our industry; for me, I have a lot of passion that I bring to my job, and I have a lot of passion towards this industry because it helps me solve problems, it helps me build cool stuff, yadda, yadda, yadda. I'm very intellectually satisfied. This is a huge source of -- there's some value there for me. However, this is also just a job, and I think now more than ever we really need to be focusing on not just boundaries, but just understanding that there's more to life than tech... Because it's so ubiquitous, it's just important to remind yourself that just because AI is here doesn't mean you need to start another eight-hour shift when you're home. You've got to find balance and just take care of yourself and your bodies... Because I think what's going to happen with this Ferrari that everybody has now is you can't be driving the Ferrari all the time. It's a lot.

\[01:21:58.03\] There's a lot of cognitive overhead and overload that comes with this stuff. So yeah, I think we're still figuring out how we balance the physics of our humanity with this kind of "infinite superpower." I think that's still TBD...

**Jerod Santo:** Well, to that point --

**Amal Hussein:** To that point, yes, yes. I think we're gonna get to my favorite topic.

**Jerod Santo:** Do you want to talk about having a baby? I mean, you had a baby.

**Amal Hussein:** Yeah, I had a baby, everyone. I got an upgrade to mom.

**Jerod Santo:** Yeah. It's a title no one can take away from you, right?

**Amal Hussein:** Seriously. No. And that's it. Becoming a mother has been a centering and clarifying experience. And actually, a surprising side effect happened as well, which is actually me being more confident and efficient at work, even. I felt like I was already pretty confident; I probably could have been more efficient, but generally pretty efficient...

**Jerod Santo:** Yeah.

**Amal Hussein:** ...and I think it just comes down to that age-old saying of "If you want something done, give it to a busy person", you know?

**Jerod Santo:** Right. That's a classic.

**Amal Hussein:** Yeah.

**Jerod Santo:** Because you're busier than you've ever been... Which means you've got to get stuff done, because you don't have time to screw around.

**Amal Hussein:** I don't have time to bikeshed all the things. We've just got to get it moving.

**Jerod Santo:** Yeah. There is a clarity that comes from what's actually important here...

**Amal Hussein:** Oh, yeah.

**Jerod Santo:** ...when you just don't have time to dork around. You're like "No, I'm not gonna spend a half hour on what color this bikeshed should be."

**Amal Hussein:** Exactly. Exactly. That's exactly it. And so it's just been this thing that has brought -- I feel like it's been like a fluff compressor... You know, like, you take a pillow that has all the air, and then if you scrunch it down, it's like "Oh, this pillow is actually a lot smaller without the air", all the air being fluff in my life, or something along those lines. And I was already -- you know, I had a lot going on, but now I'm just really pressed for time, and so... Yeah, I'm just in real do mode. And I think also a problem that I've had historically in my life was being a perfectionist, and wanting everything to be perfect... And I think that's also just -- I've had really good practice with just like "Oh, actually, no, this doesn't have to be perfect." It's brought me to this new phase of my life as well, which has been very healthy, and again, productive. Because you're not letting perfect get in the way of good, you know?

**Jerod Santo:** Right. You don't have a choice anymore.

**Amal Hussein:** Exactly. And so --

**Jerod Santo:** But you also don't get to sleep very much, do you? I mean... How old is your child?

**Amal Hussein:** So my son is turning six months...

**Jerod Santo:** Okay. So you're outside of the real hard area. Is he a good sleeper, though?

**Amal Hussein:** He is, thank goodness.

**Jerod Santo:** That helps.

**Amal Hussein:** He's been sleeping eight hours, ish, since he was like three months... And so thank God. I took like three and a half months off of work, and just in time for returning to work.

**Jerod Santo:** Yeah.

**Amal Hussein:** But no, it's just one of the reasons why life just got very busy. I was just at this -- Istari has been like "Whoa." I mean, I've never worked at the pace that I have, while not feeling an ounce of burnout... And then that's just amazing. And I realized "Oh, why is it that I felt burnt out at other jobs?" and it's like "Oh, it's because burnout isn't necessarily about working hard." It's actually when you don't feel like you're making as much traction as you should be, and you're working really hard and things aren't moving, you get burnt out sometimes. Or when you don't get the gratification back... But it's just in this really nice "Work hard, get done, ship, make a difference" kind of like... And working in a high, high trust environment, with really smart, kind people, in a rapid fashion has just been really, for me at this stage in my career... I feel like I'm bringing it all together; I'm bringing in all of my skills - alignment, design, working on complex problems... All the experience that I have just in software engineering from all the jobs are coming into this role, and I get to kind of exercise all these skills - leadership, you name it.

\[01:26:21.18\] And it's just been really fun. Like I said, I didn't know I was going to enjoy early startup this much. I hope to be able to kind of just stay with Istari, and like I said, just kind of retire... That's my goal. I don't want to work anywhere else.

**Jerod Santo:** I was gonna say, I think stability at this point is probably attractive to you, because you've had a lot of jobs over a not very long time. I mean, you've moved a lot.

**Amal Hussein:** Yeah. And moving is also -- that moving came from impatience on my part. Minus the npm layoff, really, everything else was just like me being impatient and being like "Oh, I'm done. F this." You know what I mean?

**Jerod Santo:** Right.

**Amal Hussein:** And so - yeah, so that's nice. That part is nice. And then - what else? Yeah, it's just amazing. Being a mom is --

**Jerod Santo:** So you work from home then? I mean, a lot of the challenges are around logistics, of course, the timing... The baby's crying while you're in a meeting... Stuff like that.

**Amal Hussein:** Yeah. It's honestly been, knock on wood, thank God --

**Jerod Santo:** It hasn't been a problem.

**Amal Hussein:** ...extremely smooth.

**Jerod Santo:** Nice.

**Amal Hussein:** We have a five-bedroom house, I have childcare right in my house... I'm nursing parent, I feed my son on -- like, just get off camera, and I'm telling people what to do, and I'm feeding my kiddo...

**Jerod Santo:** That's awesome.

**Amal Hussein:** That's been awesome. I make sure my husband gets a photo of that at some point for our own internal memory book... But yeah, it's been just -- it's work. We're both busy. And my mom's also coming to help; she's retiring, so then we're gonna have even hopefully more help...

**Jerod Santo:** Cool.

**Amal Hussein:** But it's been seamless so far, and also just very rewarding. I actually already want to --

**Jerod Santo:** I was gonna ask if you're gonna scale. \[unintelligible 01:28:14.04\]

**Amal Hussein:** Yeah, I do want to do this again, which is crazy, because from day zero to day 59 I was just like "This is amazing. I'm so glad we did this... But holy moly, how do people do this more than once?"

**Jerod Santo:** "Never doing it again." \[laughs\]

**Amal Hussein:** And then day 60 hit, and it was just this shift, instantly. It was like "Oh, we're in a groove. We got this. Let's do this again. Can you believe it?" Like, it was just this overnight switch. But no, I definitely want to do it again. I'm reserving the right to change my mind, but I think in a year or two I'd love to give this another whirl.

**Jerod Santo:** Are you an only child?

**Amal Hussein:** I am not an only child. I have two siblings, but we are so far apart in age. I'm like six and a half years --

**Jerod Santo:** So you kind of were...

**Amal Hussein:** Yeah. So I want to do something not like that for my son.

**Jerod Santo:** Yeah. I think only child is tough. I mean, we have a large family, as you know, and my wife came from a large family... I'm one of three, and older sister three years older, and my brother was eight years younger than me, 11 years younger than my sister... And so he was -- I mean, he's not an only child, but kind of like you, where it's like he was kind of raised... We were already -- I mean, I was in middle school when he was a toddler. And so he's kind of raised like an only child.

**Amal Hussein:** Yeah.

**Jerod Santo:** And I've just seen - even our kids, we have built-in friendships, like inside of your own family. There's just a safety and a blessing to that I think is irreplaceable. So yeah, I'd definitely encourage you to scale; have a few agents running around.

**Amal Hussein:** Oh, my gosh... I'm telling you, Jerod, if I knew I was gonna love being a mom this much, I would have done it like way sooner. Like, I held off so long... And the funny thing with the timing, by the way - I didn't get back to that. So I was interviewing for like -- I was this crazy person that was like "I want to go back to the office, because I really miss being with my colleagues." And I was like "You know what, I want to start a job where I'm in the office once a week or so." So I was interviewing for jobs out of New York City, I was going to commute into the city, we were going to get a little studio there...

**Jerod Santo:** \[01:30:19.18\] Really?

**Amal Hussein:** Yeah, because my husband and I, we moved -- we left Boston, we went to the other side of Massachusetts, we bought a house in the Berkshires... And so we're like two hours from Boston, two hours from New York now, and we spend a lot of time in both cities still... And so I was like "Oh, we can just get like a studio in New York, and I can be there a few times a month." And I was interviewing with -- actually, my first choice was Datadog. They had actually -- if you're listening to this, the person from Datadog... He listens to Changelog. They were so generous, and made this incredible offer to lead this team that was very exciting to me... And I just had to kind of walk away from that whole thing, because I found out, just as I was about to start my interviews, that I was pregnant. I didn't think it was going to happen that quick. I was like "Wait, what? No. I'm in my late 30s. There's no way." I think it was 37 at the time, and I was like "There's no way that I'm going to get pregnant this fast. Everybody I know has trouble getting pregnant", and I was like "I have 6 to 12 months. No problem." And it happened right away for us, because - I don't know how science works, apparently, and I falsely applied statistics to myself, that...

**Jerod Santo:** Right. You generalized. But you're not a generalization. You're a specific.

**Amal Hussein:** Yeah. So I thought, \[unintelligible 01:31:31.22\] and then I got pregnant, and I was like "Okay, well, this changes everything." And so I just kind of paused on all my New York City jobs. I was like "I'm not going into an office."

**Jerod Santo:** Right. That's not going to work. Yup.

**Amal Hussein:** And then, fortunately, this Istari thing came along. Maggie found out that I was open, and that I was regrouping, that I was like "I'm refiguring out -- I now need to just focus on remote roles." And then she's like "Hey, if you're open, we're actually hiring. We need you." And that was it. That was how I got started.

**Jerod Santo:** Gotcha.

**Amal Hussein:** So it's good to have friends, people. Keep in touch with your network.

**Jerod Santo:** For sure.

**Amal Hussein:** You never know where your next opportunity is going to come from.

**Jerod Santo:** That's right. Well, exciting times. Happy to catch up with you, and now I know the full story. I'm very excited for you and for your scale. Maybe you'll catch up with my wife and I one of these days. I don't know. I don't know if you have enough time left. 37...

**Amal Hussein:** I'm not 37 anymore, actually.

**Jerod Santo:** Okay,

**Amal Hussein:** \[laughs\] I am north of that. But I'm telling you, if I can squeeze in two kids, I would love to. But realistically, I think just like one more, realistically.

**Jerod Santo:** But hey, you're not a statistic. So go for the gusto, and just see what happens. \[laughter\] Nobody knows. Nobody knows their own body.

**Amal Hussein:** Thanks, Jerod. Thanks.

**Jerod Santo:** I'm just curious, why did you decide to wait so long?

**Amal Hussein:** \[01:33:09.17\] Oh, it was fear, really. I wasn't sure how I was going to change. I like my life. I like who I am, I've worked really hard on myself, professionally, personally, all the things... And I was really afraid of becoming one of those parents that just doesn't have a life, and doesn't do anything other than child stuff. I see a lot of parents like that. And I was like -- I just didn't know. It was such a black box.

**Jerod Santo:** Sure.

**Amal Hussein:** And so I think there was a lot of fear... Like, I've been in a stable relationship for a long time. My husband and I have been together for a long time. And so, you know, it wasn't like anything relationship-wise that was holding me back. It was really just fear of the unknown.

**Jerod Santo:** Yeah.

**Amal Hussein:** And then it was just kind of like "Oh, we're just going to do this", and I didn't even think about it. If any of Changelog listeners see me in person, I will tell you the story of how I found out. It's a little too personal to share in like a 10,000-person podcast...

**Jerod Santo:** Okay, no problem,

**Amal Hussein:** But it's a pretty funny story. And it took me not thinking about it to do it, because I think if I continue to think about it, I would have just never done it. You know what I mean? You just had to kind of -- just, whatever. Go for it.

**Jerod Santo:** Rip off the bandaid.

**Amal Hussein:** Rip off the bandaid. But it was really fear that was holding me back, and now I know that I'm still me, and I'm still -- yeah, actually, not only am I still me, but I'm still motivated in a way that I feel is coming from a place that's even more stable, and there's no vanity. It's like, I want to do well so that I can take care of my family. You know what I mean? And I now have somebody depending on me. So it just changes the stakes. It's no longer just like doing well for the sake of doing well. There's something more meaningful behind it. Not to say that people who don't have children don't have. That's not what I'm saying.

**Jerod Santo:** Sure.

**Amal Hussein:** It's just that my motivations are now driven I think from a more... Yeah, an extra --

**Jerod Santo:** You have an external dependency.

**Amal Hussein:** Yeah, less vain -- external dependency... \[laughter\]

**Jerod Santo:** You've got a dependency now, you know? You've got a supply chain you've got to work on.

**Amal Hussein:** Yeah, yeah. And I think it's just like -- all the things that I didn't even think I would enjoy, I'm enjoying. I didn't even think about, okay, dressing my baby is so much fun. And then watching my baby's development is so much fun. And then teaching my baby, and like reading to my baby, and singing to my baby. All these things, it's like, wow, you didn't even think about it. At least I didn't.

**Jerod Santo:** Right.

**Amal Hussein:** But I'm just -- I'm really enjoying this. I hope we're blessed with being able to do this again, and I think it's just a good antidote for me personally, with everything that's happening in the world, and all the uncertainty, my little nuclear bubble is a huge source of gratification, and love, and clarity, and all the things... And it just puts a lot into perspective.

**Jerod Santo:** Well said. Let's end on that. Love catching up with you. We'll have to do it again sometime... And once Istari gets that website out, we're gonna check it out. We're gonna check that sucker out.

**Amal Hussein:** Yeah, we have a website, it's just not great.

**Jerod Santo:** \[laughs\] \[unintelligible 01:36:39.04\] The new one.

**Amal Hussein:** Yeah, yeah.

**Jerod Santo:** The better one. So congrats on everything, and we'll talk soon.

**Amal Hussein:** Thank you. Alright. Cheers...

**Jerod Santo:** Alright, bye.

**Amal Hussein:** Bye...
