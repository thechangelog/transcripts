**Adam Stacoviak:** Well, Sarah, it's been a long time coming. We've been trying to get you on this show, I want to say for at least a couple years. You've been on JS Party, but not on the Changelog, which is - we call it our flagship show. It gets the most listens, it gets the widest reach... Definitely your audience, I would say, in terms of your book, and then also the things you talk about. I think this is a great place for you, but... Finally here. I'm so excited... So welcome.

**Sarah Drasner:** Yeah, thanks for having me.

**Adam Stacoviak:** And you wrote a book recently... You've written exclusively or extensively at CSS-Tricks... There's a couple different directions we can go, but I'm kind of curious about that one before we jump into your history, and what you've done, and the book you've written, and the waves it's making. How do you feel about the state of CSS-Tricks and your writing? I know it's all pointed there. What are your thoughts on that?

**Sarah Drasner:** Yeah, it's not actually exclusively on CSS-Tricks. I used to write for Smashing, and a few other publications... But yeah, I was a staff writer at CSS-Tricks. I love CSS-Tricks.

**Adam Stacoviak:** We do, too.

**Sarah Drasner:** I kind of grew up on it, and stuff...

**Jerod Santo:** Totally.

**Sarah Drasner:** So I started writing articles for CSS-Tricks, and I didn't think that they would be accepted, just because I found it to be such a good resource. I think my first one was about -- basically, I benchmarked different SVG animation technologies...You know, CSS versus six different ways to do it in JavaScript, and kind of highlighted some of those results... And I was surprised it got accepted, and then it also made a bunch of waves... You know, benchmarking always does. \[laughter\]

**Jerod Santo:** It does. It draws us out.

**Sarah Drasner:** It does, yeah. And I was quite worried about the waves that it was making. It was a controversial article, and Chris Coyier was "This is great! Everybody's excited! And getting involved and we're having really good conversations." I just loved his attitude and approach to healthy debate. So I wrote a few more, and he asked me to come on as a staff writer.

I think one of the funny things -- one thing I should mention to this audience, in case you're not familiar... CSS-Tricks was named at a time when people were learning CSS, but it's not just a CSS platform. It is much, much more broad than that. When React was first, starting to be widely used in the community I wrote an intro guide to React, and there's a lot of articles on there that are... I would say pretty much none of my articles on CSS-Tricks are CSS-related. But I think it was a really good resource for web dev; it still is. But Chris sold the company to Digital Ocean, who's doing a great job of maintaining and keeping it going now... I think Chris had done so much for so many years. Obviously, you kick things like that off not knowing you're gonna still be doing it 15 years later. So they kind of moved -- also at a time when I can't do that much IC work anymore for publications that. My role does keep me pretty busy. So yeah, it was kind of a natural progression.

**Adam Stacoviak:** Yeah. 2015 is the first blog post that you're mentioning. That benchmark was six years ago? What's that now. It's not six years ago...

**Jerod Santo:** eight years ago.

**Adam Stacoviak:** Eight years ago now? Gosh, my brain is jacked up. I was thinking it's 2021 again... Those were the days.

**Jerod Santo:** "Those were the days..." \[laughs\]

**Adam Stacoviak:** Anyways, I'm back. 2023. Here we are.

**Jerod Santo:** Yup.

**Adam Stacoviak:** 2015 though... that's a long time to be writing for an outlet, and... Do you miss it? Do you miss that community?

**Sarah Drasner:** I do...

**Adam Stacoviak:** Because no one's writing there that was writing there before. I'm just kind of curious how you feel about it now in terms of -- man, that was an outlet for you. You wrote a blog post to promote this book we're going to talk about today... So it's been crucial to you for so long.

**Sarah Drasner:** \[07:59\] Yeah, I don't really think about it as a promotion vector. That's not really what I used it for. I think it has been more cathartic to -- you know, I used to be a principal IC, not a manager... So for me to kick the tires on something, understand it in a deeper way... And then for those who have seen my articles, they're very demo-heavy, right? They're not just an explanation of the thing. I would build things, and kind of show how things work. And a lot of times when you're a principal IC, you learn things on the job, and then there's no way of explaining that to broader audiences. It just doesn't scale beyond your role at the company. I really was -- especially when I was working at Zillow, and Microsoft, I really wanted to make sure that the things that I was learning were available to everyone. And also for myself. Like, I forget things if I don't write them down. There's been a couple of times where -- even recently, I was working on a side project, and I googled how to do something, and my own article popped up, and I was "Damn it, I used to know this." \[laughter\] So it can be nice to leave yourself a breadcrumb trail for things you've already solved, too.

**Jerod Santo:** Right. Kind of an out of body experience to teach yourself something; like, you from the past, teaching yourself something now. I will just say, for those who remember the conversation we had with Chris after he sold CSS-Tricks - I asked him at the time, "Where are you going to land? What are you going to do?" Because he has such a voice. The guy is prolific in his writing. And I think he was shoving some stuff into the CodePen newsletter, is what he was saying; he just started turning it into his own editorial... But I'm happy to say -- because I missed his voice just a reader on CSS-Tricks after the sale. And there are still some good articles going out there. I just linked one up in Changelog News two weeks ago, I think, about passkeys, that was very well written. But Chris's voice is so prominent... In my history of the web, I'm "I wonder what Chris thinks about this, that, and the other thing." He has been writing quite a bit just on his own website now, so you can definitely still keep up, and I have been. So that is cool...

**Sarah Drasner:** I mean, Chris taught me a lot. I have a kind of graduate school, academic background, where my articles started off being not really written for the right audience, honestly. It was written for a more academic audience, and like essay-ish... And Chris would edit it to be a little bit more conversational and down to earth. And I'd go, "Oh, that is much more clear."

One of the magic things that Chris does really well is he takes complex subjects and he breaks it down in a way that's really easy to understand, and I think I got better at that through the course of working with him for so many years... And I can't thank him enough.

**Adam Stacoviak:** Jerod and I have had the pleasure and the pain of editing folks over the years, and it's a challenge to do that. Sometimes it's challenging to deliver it, because you may step on their toes, or it's like "Well, hey, that was my writing, and you kind of changed it to not be my writing", and it's kind of changed their voice.

**Sarah Drasner:** Yeah. And I think that was more of a struggle with the engineering management book. I wrote an O'Reilly book before this, and... You know, O'Reilly books - it doesn't really matter if it's your voice really, as long as the technical concept comes across. And then for the engineering management book it was a little bit harder. We went through four rounds of editing, or something that, and they really helped the book a lot. And then there were points in time where - you know, some of the editors weren't technical, because most of the book is more about management... And so they would say -- I have this one line where it's like "People aren't pure functions." You don't necessarily put in something one day, and get the same outcome the next. And they were like "No, we can't put that in there. People won't understand."

**Jerod Santo:** But that's great, if you ask me. That's brilliant.

**Adam Stacoviak:** That's a keeper.

**Jerod Santo:** Wrong audience.

**Sarah Drasner:** Exactly. There were some parts where I had to say, "No, I think this audience is going to get this."

**Jerod Santo:** \[11:52\] Right... As iron sharpens iron a little bit. Well, we want to get into your book, "Engineering management for the rest of us." But of course, this comes at the end -- not the end, but after a lot of experience that you've had moving from an IC to a manager. I was just on LinkedIn, trying to catch up with your history and your experience categories; very envious. It's like a who's who of corporations. You were principal lead of Azure at Microsoft, you were VP of developer experience at Netlify... And now you're at Google, Director of Engineering, and a core developer web, according to the subtitle there. So is that accurate?

**Sarah Drasner:** Yeah, it's totally accurate. Core developer web - the job that I have at Google is a big one. It's web infrastructure at Google. So my group owns JavaScript and TypeScript languages and libraries at Google. Build, serve, web test, three different frameworks... One of which you know, is open source Angular; another one you may be aware of, because people talk about it sometimes, but it's not open source. It's called Wiz. And then there's Protos... There's just a lot of different things in this group.

**Jerod Santo:** When you think about it writ-large, all of that, just as a person, do you ever just go like "Wow, that's overwhelming"? Just the magnitude of it all... It's a lot of stuff.

**Sarah Drasner:** Yeah. Yeah, for sure. I'm quite honored to have a job like this, because I'm a big web nerd... And I get to collaborate with people like \[unintelligible 00:13:23.25\] who I have adored for years... And I think some of the mission and strategy that we get to put forth is super-exciting. There are days where I get off work and go "Today we enabled the success of YouTube search and workspace, with this one strategy." That's really exciting. So yeah, it's a great job in that way. And as you were mentioning with the LinkedIn, I love a challenge. I get bored easy if I don't have a challenge... So that part of the work - I'll be honest, I love it, I really do. It can be hard sometimes, but hard in that satisfying way.

**Jerod Santo:** Yeah. That's awesome. If you were to give a brief version, how did you get here? How did you end up in this position?

**Sarah Drasner:** I think the nerd part is the really important quality...

**Jerod Santo:** The real short answer... Okay. \[laughter\] Well, a lot of us are nerds, but not a lot of us have your role there.

**Sarah Drasner:** Yeah, I do think that having a lot of interest in the area, and wanting to dive in and make things better, whatever that looks like... You know, when I was a principal IC, I made things better via the vehicles of my own work. Via my own IC work, and kind of doing things that way. As a VP, or director, my work is more strategic, and throwing the gauntlet for other people to do some on-the-ground work. So I think both are really exciting, and you kind of need -- it's not like you need one with the other, but it's hard to be a really good manager without having some of that IC background to understand what the problem space is, and things. The area that I run is very technical, and so you can't do that kind of work without coming in with some understanding.

But at the same time, as a manager you have to have appetite to make things better. And I think that is the one thing that is consistent across all these jobs, is whatever I was doing was pretty outcome-driven, to like "I'm going to make things better. I'm either going to make things better via my coding all day, or I'm going to make things better via doing a lot of open source, or enabling other people, and ramping them up... I'm going to make things better by setting up the organization in a way where people can not have distractions, and be able to understand the strategy of their work..." Those are all just different vehicles to an outcome. So I would say if people are interested -- if people are nerds, and they're interested in these kind of roles, keep making things better; people do eventually see that. If you're jumping in and you're reducing chaos in the system, and you're trying to make things work better, it doesn't always happen, but hopefully, that is what people are looking for in folks, and what people will support.

**Jerod Santo:** \[16:25\] Wise words, indeed. So this book is for the rest of us, and in the abstract you're talking about how engineering managers and leaders - a lot of us study for years to become great engineers, and then we have this deal where as a great engineer, and individual contributor, you're killing it, you're having great outcomes, you're good at your job, and then you get elevated inside the organization to something that's entirely different. This is known as the Peter Principle, as people tend to get elevated to a place of their incompetence... Something along those lines, where it's like "Well, I was really good at one thing, and that got me a promotion to this other thing, and it's kind of a natural progression, but the job is different. I haven't trained for this, maybe I've never done it before..." We know some people go to engineering manager and then go back to engineering again. We've done a show on that topic as well, like finding out this isn't for me...

**Sarah Drasner:** I don't think it's about the Peter Principle. \[laughs\]

**Jerod Santo:** Oh, it's not?

**Sarah Drasner:** I think the Peter Principle is something else. I think the Peter Principle is talking about incompetence in leadership, and the book isn't really assumptive that people are incompetent. The book is talking more about that you do make a lateral shift from -- like, a lot of people are trained to be... Like you're saying, people train to become engineers, and then they get moved laterally, or they get promoted into leadership... But I wouldn't -- Peter Principle is more about people who shouldn't have the job that they have. I don't think that that's what this book is about. This book is more about people who are really capable, but need some tools in their toolset in order to get the job done appropriately. We've all had bobbleheady bosses who are not the best, sometimes... That's more like Peter Principle, in my mind.

**Jerod Santo:** Okay. We may be just interpreting that principle differently. I think we're on the same page with regards to you - you now have a new position that you're not used to doing, or you haven't done as much, you need the tools, and so you need either to learn how, or to find out via experience... And the set of things that you're doing on a day to day basis, they change somewhat dramatically. Right? So when did that first happen for you? Were you at Netlify at the time? Or were you at Microsoft?

**Sarah Drasner:** Oh, no. I've been managing much longer than that. Yeah, I don't know if you've seen Charity Majors' blog post about the managerial pendulum. It's a really good article about how sometimes people like to do IC work, they get burnt out on feeling like they're not moving bigger needles forward, and then they go to management, and they get burned out on not coding, and then they go back... I'm kind of that. I kind of do this managerial pendulum. I think my first lead role was probably 15 years ago, maybe more, and then went back to IC work, because I really wanted to be an IC... And typically, what happens with me is I love to code, and so I'm attracted to doing coding kind of work... But then sometimes I get frustrated if strategies are not getting unblocked, or there's chaos in the system, and my code can't do things that are good for the organization because it gets mired in bureaucracy, and crap, and things... So then I move over to management, or if somebody puts me in management... Sometimes -- like, at Microsoft they started moving me into management more towards the end of my tenure there, because I was helping fix things, like we were mentioning before. I didn't really want to be focusing on that at that time.

\[19:54\] And then the VP job at Netlify - I talked to Matt and Chris about that role, and they let me design that role, which is kind of unique, which was really great... And that was a really compelling offer, to be able to design what I wanted in a job. But yeah, I think I kind of go back and forth.

**Jerod Santo:** What were the most challenging parts with maybe your first time into it? ...like, when you came in. Maybe even when you sat down to write the book, and think like "What do I need to equip people with through this book in order to succeed in this role?" What were the things that you kind of bumped your head up against?

**Sarah Drasner:** Yeah, I think, like a lot of people, I went into management with no tool. The way that I entered management was through being a TL first; I just was the most senior person on the project, and I knew the most about the technology, so I was put in a tech lead role. And then eventually, that morphed into a management role. But I have no training in management. I don't know anything about management. And so some of the book is a lot of hard-earned lessons... And that's why I wrote it, was because I was thinking "Man, I've been at so many companies where I'm trying to teach other people one by one some of these things that I stumbled through myself. We have like a thousand bajillion articles about how-to's in code, but not that many about what you need to do to be a good manager." And it's hard on the people who are being learned on, right? All of the ICs who have managers who are just stumbling, trying to find their way. It's not through poor intentions, but people haven't given them tools... So I thought maybe it could be a good resource for folks so that they can be better set up to support their teams.

**Adam Stacoviak:** What made you want to write it?

**Sarah Drasner:** That... I mean, basically -- I've written books before, so I know it's not about the money... \[laughs\] Nobody really makes money on books. It was more about providing a resource that people could use to understand the base things, so that they wouldn't have to keep learning over and over again, without something to grab on to. Giving people tools that were kind of hard-earned.

**Adam Stacoviak:** I love your opening up to the book, the very first chapter. I don't want to blow it for anybody reading, or gonna read the book, but - spoiler, first chapter is "Caring for your team." I love -- that kind of reminds me to some degree of Rachel Potvin, when we had her on the show, former director of engineering at GitHub... And that was kind of her thesis of managing and leading, was it's 50% people and 50% outcomes on what you can produce. But the first 50% was not the outcomes on what you produce, it was the people. And it was -- you can't have a good team if they're burnt out, you can't have a good team if they have terrible relationships, or anything like that. So I'm just curious if that's how you feel as well, and why you began your book with that chapter.

**Sarah Drasner:** Yeah, absolutely. You hit the nail on the head. Caring for your team is -- basically, I think sometimes people try to split up engineering culture and engineering productivity... And they're one and the same. It is not two different things. Think about the times that you're in IC; if you're not aligned to the mission, you feel burned out, you feel underpaid, that your boss doesn't think about you and understand your work, then you can write good code. It's hard to write good code. And a lot of times when products don't work together, it's because those teams aren't talking together, and they're not working together. We see this again and again in people kind of shipping the org chart, and the kismet between teams or productive staff do a really good job... And I think Nicole Forsgren, Jez Humble and Kim wrote this book called Accelerate, which if you're not familiar with it, is a great one, which kind of proves this with data, of going through these developer surveys, and what they found was the teams that have more psychological safety to share mistakes, they feel more supported, things like that - they just produce more, and they produce better work, and there's less outages. So that one's an interesting read, just to kind of validate some of these things in a more data-driven way.

\[24:08\] Yeah, I do think that trust is really important, working together, and cohesion is really important... And it's hard. It sounds super-easy. It sounds like "Oh, yeah, trust..." but that's really hard. It's a very easy thing to destroy. It's a really precious thing.

**Adam Stacoviak:** Well, that quote in there is just mind-blowing, honestly... It says "Trust is built in drops, and lost in buckets." And that was a quote from the founder of UnderArmour, Kevin Plank. I'd never heard that quote until -- or read that, actually; I didn't hear it. I hadn't heard of that quote before I had read your book, and I was like "That is a phenomenal quote." I'm glad you included it, but it's just so true. It's like, you gain it incrementally, you gain it over time, it's iterative towards trust... But to lose it is just so quick.

**Sarah Drasner:** Yeah, absolutely. And that's why some of the chapters are -- the first kind of fundamental chapter is giving people tools around values. That was probably the biggest tool in my toolbelt, the thing that allowed me to work with different types of people much better. And I'm on a journey; I'm not perfect. I don't want to give the impression that because I wrote a book, I'm great at everything. That's not true. But that really helped me, because understanding that people may have different values than you, and that's why they do the things that they do, and it makes sense to them - it allowed me to kind of have a framework to understand where people were coming from.

And we do values exercises in our teams. It really helps you see where the person is coming from. You're like "Oh, you really value X. That's why Y is happening." Or "I value this, and that's not the same as you. We both care about these things." It kind of allows you to then find a way to align to similar outcomes, while acknowledging that you're not the same person.

**Break**: \[26:03\]

**Jerod Santo:** So what does that values exercise look like? You just ask everybody what their values are? Is it more complicated than that?

**Sarah Drasner:** Yeah, there's a couple of exercises that I go through in the book. One of the values exercises is just that; you put a bunch of values on the board, you ask people to pick three to five, depending on how much time you have... And you ask them to talk about the origin of those values, like what makes that a value. And as they talk through it, you do get a better sense of -- you know, I'll give a couple of examples, anonymous examples, somebody saying, "Oh, well, one of my values is my family. So I really have to have work/life balance. Because if I don't create that boundary for my family, then I'm not living my values and I burn out." And that can make it really clear why the person is not on after hours, ever. And that's okay. All the way to "I value honesty and directness, and my family was really strict, and their form of kindness was to be honest. You don't care unless you are direct." And you can have someone else on the team who doesn't like confrontation, and they value people getting along. So you can see how things might not work with them at first, until they understand that about each other. So maybe that person who likes to move away from conflict learns to move a little bit more towards it; the person who likes the conflict knows to be a little bit more gentle with the person who dislikes it... We're not trying to make a world that fits everyone, it's not possible, but just to understand each other better, so that we can work together more easily.

**Jerod Santo:** \[32:06\] Going back to the trust thing for a moment... Trust is tough -- like you said, Adam, or like the Under Armour guy said...

**Adam Stacoviak:** Kevin Plank, yeah.

**Jerod Santo:** As Kevin Plank said, it's about - you build it in drops. You build it kind of step by step. But in business life, and I'm sure in management as well, you hire a new person, or maybe sometimes somebody else hires them and says they're on your team now. And you're like "Okay." And you just met them, maybe you have some history, maybe you have a little bit of a rapport, but you don't know them all that well... How do you deal with trust in that circumstance? What's the most adaptive way as a manager? Do you give the benefit of the doubt until proven otherwise? Are you somewhat kind of like "Ehm..." Because there's certain people that tend to be more skeptical, or less trustworthy by default... I tend to trust people too much sometimes, until they burn me, you know... And I just wonder, is there a right way, is there a better way when it comes to leading teams?

**Sarah Drasner:** Well, I think trust is something that's built incrementally over time, as you mentioned. I do think that you have to give people the benefit of the doubt, and try to see things from their perspective, and building things... But you can also set up the initial parts of that engagement by asking questions that build trust together, like "What do you value? What motivates you? When you're first kicking things off, how do you like to get feedback?" Just things that can help you understand the person, so that you're not like "Do I trust them? Do I not?" And by keeping that also consistent, keeping things consistent across people is really important, because human bias is just a thing. There's just study after study that we all have biases; it's just who we are, and how it works. So if you're going to try to eliminate or reduce -- you can't eliminate, but reduce bias as much as possible, keeping a consistency allows you to not treat one person different than another. Because humans do tend to like people more that they are more lile. And you don't want that in a team. You don't want to make people feel excluded by accident. So if you can try to set up the same kind of systems of building trust with people, and keep it egalitarian, or as equal across boundaries as possible, then at least you're starting from a base that's kind of the same across people as much as you can.

**Jerod Santo:** There's probably even more difficult times, I guess, post-pandemic, or during the now after, where we have way less data with regards to our relationships in our teams; we have way less bandwidth. Even us here, we can see each other's faces, we can hear each other's voices, but it's a pixelated rendition of who we are, and it's hard to get to know each other via these channels, and Zoom calls, and whatnot. Have you found it in your teams, in your work - and maybe it even manifested into the book - ways that you can overcome some of these drawbacks of digital communications?

**Sarah Drasner:** I actually see it a little differently. I don't think that we have no data, but I think -- I've been a remote leader for many, many years, even before the pandemic, and remote leadership takes extra time and care, like you're saying. There's that kind of pixelated things on the screen where you're not building quite as much trust and mirror neurons that you are when you're in person. That's why in remote leadership before the pandemic you saw each other in-person; you would meet once a quarter or something, and you'd get to see each other. And then some of the trust that's built there can carry on.

But remote leadership isn't the same pre-pandemic and during a pandemic. And I think the things that were different - one, everyone was terrified. No matter who you were, you were dealing with this massive issue, that was going across all these different boundaries; people had different thoughts and opinions about it, but it was happening to all of us at once. That was on people's minds; that's very different than normal life.

\[35:58\] Not being able to see each other in person ever was really hard. And then I think remote teams before the pandemic also took certain steps to make sure we had async hygiene setup, that we knew when people were working when, that were passing batons between... And everyone during the pandemic was just kind of thrown into it. It wasn't like "This is what we're gonna do, and this is how we're going to do it, and we're going to set up a system to make this successful." It was like "Ta-da! You're remote." \[laughs\]

**Jerod Santo:** "Here we are..." Yeah.

**Sarah Drasner:** And it wasn't necessarily something people opted into, it wasn't something people necessarily thought about building a system around... So we're seeing a lot of variance, or at least -- my org has many teams; some of them are remote, some of them aren't, and some of them are hybrid. And you can see there's differences, because some people care more about async hygiene, and setting those things up... Some people kind of fell into it... Your mileage may vary depending on the way that it's executed; some of the methodology is important, too.

**Adam Stacoviak:** I was digging your chapter on change. I like change, but I don't like change... \[laughter\] I was surprised when I read that that I didn't see a mention of "Who moved my cheese", which is the quintessential book to point to when you talk about change... But you did have another awesome quote that opened it up. I'm gonna read it, if you don't mind. This is from Charles Darwin. It says "It's not the strongest or most intelligent who survive, but those who can best manage change", which basically is resilience. If you can adapt and maneuver around this... And this is, to some degree, hedging off of the pandemic, because we all had to change pretty quickly, and adapt pretty quickly. Can you speak to what you've learned around change management and resilience as a manager, and how you help people and groups through, I guess, massive change like that?

**Sarah Drasner:** It's such a great question. Yeah, I agree with you that it is resilience. It is building resilience to change. If you're at a big company, some change happens because other people decide things that you're not in control of, that you then have to own somehow. And then sometimes change happens because you see a need for the change to occur. In all cases, usually the trick - the biggest trick; there's not just one, and your mileage may vary on different situations - is aligning people to the reasons why the change is occurring. It's really hard for people to internalize and move towards that change if they're not aligned, if they are not talked down to in that process, if they get a bunch of corp speak, if there's ambiguity... You're causing people stress, and they don't know why. That's an awful situation for really smart people, which - you know, your teams usually are really smart. \[laughs\] So they're deserving of that kind of trust that you're unpacking things well.

So there's some transparency, there's some alignment on why things need to be the way that they are... But it also can be quite chaotic if there isn't good information flow. Some of the chaos that I've seen and done - because I make mistakes too, all the time - is not aligning a smaller group of stakeholders first, and then rolling things out. If information is uneven... Or let's say you have multiple partners - you usually have eng PM, TPM... Let's say those top-level people aren't all aligned as a change is rolling out; that can be really confusing, if they're hearing one thing from their PM, another thing from their engineering lead... That happens a lot, especially at scale. So that kind of change is aligning first in some groups, and then rolling out information and decisions to lower and lower level tiers, making it so that TLs and engineering managers know information before they're ICs, so they can internalize it, ask questions, push back...

There's a lot of times when you roll out a change where if you don't do that, people who are smart at the kind of engineering management layer will be like "Hey, did you think about X?" And you're like "Ohh! I did not." \[laughter\]

\[40:12\] So it's not just making sure people are bought in, but it's actually being open to maybe you shouldn't be making those changes; maybe there's something you didn't think about. Giving a moment in time to address some of the feedback at every level. It's a hard thing. I'm making it sound easy... It's actually really, really tough to keep people aligned, or even keep things open enough that people can address, and then close it down so that people know a decision was made.

**Jerod Santo:** How many people are you inside your org, generally?

**Sarah Drasner:** We're around 120, I think, with cross-functional partners as well.

**Jerod Santo:** Okay. Do you ever have to say "That's it, we're all gonna get into a room, digital or otherwise. We need to figure this out. Everybody in a room"? Or do you speak to the managers who speak to their teams? How does it work?

**Sarah Drasner:** We do have all-hands every quarter. So that's -- I bring everybody together. We're working on this 10-year strategy, we rolled that out to the team this last time... But even in that one, we aligned at director level, then leads level, then engineering, and engineering managers and TL level, then the whole org... So by the time we did the all-hands, people had a chance to raise their voice, bring things up... And we change things during the process. We would read people in, they'd bring things up, we'd iterate, we find either better ways of thinking about the problem, or better ways of communicating... Yeah, it's a 120-person work, so it's not like coming together to be like "This is what's up." It's more like "Hey, this is where we're thinking about going. What are your thoughts?" We open up a thing called Dory, so that people can put questions, even if they're anonymous, so that we can talk about the hard stuff... And people's concerns - I do think that it's a sign of health when you address concerns, not when you push them down and pretend they're not there... And try to be as open and open to follow-up calls and things as possible.

But in between those orders, I do meet with my directs, and our cross-functional leadership once a week. We also have a thing called topicals, where we go over a certain topic for an hour... One of them's more of a status thing, and the other one's digging into "How are decisions made on our team?" Or other kind of things that can kind of keep us healthy. And then we do have a manager cabal and a TL forum for those groups, too.

**Jerod Santo:** So top-down change we've been speaking about. What about bottom-up change? What about empowerment, or ICs feeling like they can affect change? How do you make avenues and make that something that can happen, so that people feel they're not just being talked to?

**Sarah Drasner:** So Google is a very bottom-up culture. Almost nothing happens top-down. That web strategy is a really strong exception. The majority of the things that we do on the team do have genesis from the team. It is this team deciding what they're doing, bringing it up and saying, "I think we need to go in this direction." Every once in a while - you know, for some teams I do come in and throw gauntlets... And what I mean by that is to say "Okay, we're going in this direction. I'm not sure about it. Maybe you're right, maybe we need to go in this direction, but I need this validated. You have to defend this for the next 10 years to all of our stakeholders and customers and partners, across YouTube, and Gmail, and search, and everything. Tell me why. Why is this the right direction? And have you considered this approach, this approach, this approach? I would love for you to set aside some time and explore that." So they set some time aside, they explore it, and they come back to me and they're like "This isn't the right direction. We should go in this other direction." I'm like "Cool."

\[44:13\] But I'm not telling them "Go in this other direction." I'm saying "You tell me, but I just want you to really do the homework here." Or sometimes I'll go to teams like the Angular team, and be like "Hey, you don't have to do this because I want you to, but have you thought about X, Y and Z? It feels like there's something to be discovered here." And they'll come back and they'll be like "There is, and we're gonna do X."

So the teams are pretty empowered in that way. But sometimes I give feedback, or throw gauntlets. I use the term throw gauntlets a lot.

**Adam Stacoviak:** I love gauntlets.

**Jerod Santo:** I like that term, throw gauntlets... Especially as somebody like yourself, who likes a challenge. When someone throws me a gauntlet, I'm like "Alright, here we go..."

**Adam Stacoviak:** Yeah.

**Sarah Drasner:** Yeah, because if you feel trusted and empowered to do it, then -- they can come back to me and be like "Yeah, we're sticking to the course." Whatever.

**Adam Stacoviak:** Right. Or even just being able -- the question I think you asked, in this example with the gauntlet at least, was "Defend your position" and "Can you do it for the next 10 years?" Like, if you have this conviction for X, Y or Z, whatever that might be, consider the stakeholders, the customers and the next 10 years of these products; how they'll change or be influenced by this non-change. I think that's pretty powerful, because it's like, well, that gives them an opportunity to go and reexamine their thoughts and their feelings, maybe reexamine their data that's already informing their decisions, and then come back to you and say "You know what, Sarah, you're right. This could be a good direction, but because of this, this or this, these are the reasons why." And as a manager, that's gotta make you feel good, right? When somebody can go and give you that firm foundation. Because in a lot of ways as a manager you're not providing the foundation, necessarily; you're providing the opportunity for the foundation, and it's the ICs, and those who are the doers that are kind of putting that foundation down, that you get to then stand up on when you say to your bosses, and their bosses, saying, "Hey, this choice was for this reason, or for this reason, and I have a firm foundation because of this data." That's gonna make you feel pretty good.

**Sarah Drasner:** Oh, yeah, absolutely. And it creates alignment up and down and around. What we can't do is ship our opinions. We're too high-scale, and we serve too many people to say "I like X, so we're doing X." That can't be the reason why we're doing things. We have to gather requirements for customers, we have to think engineers, and we have to be really diligent and methodical about the way that we think about these things, and the way we solve problems. So we have to kind of check ourselves and move ourselves away from strongly-held opinions as much as we can in order to do that work. And you know, they're smart, and they are closest to the problem... So definitely, you don't want to get in the way of intelligent people who know the space. You just kind of want to guide the conversation a little bit. Because sometimes when you get really close to a problem, that's all you can see; you kind of have to encourage moments in time where they can zoom out a little bit, and kind of reconsider things.

I'll give another example... Our build serve process in Google is very different from the outside world. But what I asked that team was "Look, you can't use the outside world stuff, I get it. But Parcel, WebPack, or ESBuild, all of these innovations have done amazing things for a good reason. Take some time and reverse-engineer, and tell me what you think." And they came back and they're like "Yeah, we can't change our system, like move it to this system... But we just discovered a bunch of passes that we don't have to do, that could save us X, Y, and Z, and these performance benefits." Like, that's amazing. And it doesn't necessarily mean that they're going to change their whole trajectory or anything, it's just being open to other things.

**Jerod Santo:** \[48:11\] Right. Steal some good ideas. And sometimes you take a good idea, and you don't take it, but you're like "I just know that now", and it may come in use down the road...

**Adam Stacoviak:** For sure.

**Jerod Santo:** ...and that's super-powerful stuff.

**Adam Stacoviak:** You said "We can't ship our opinions." And I tried to search quickly on Google, and I can't find anybody who said that before. Is that a Sarah thing? Did you make that up? That's phenomenal.

**Sarah Drasner:** Yeah... \[laughs\] That's just me.

**Jerod Santo:** Just now, or do you say that a lot?

**Sarah Drasner:** I don't think I say it a lot... I might have said it internally a couple of times to people...

**Adam Stacoviak:** We can't ship our opinions. I love that. And that's so true, because that's gotta be great to have as a tool, is just words as a manager... Because that's so true. If you have an opinion, you can't ship the opinion. I don't wanna restate what I said before, but the data, and the foundation etc. - you can't give just the opinion and be like "Well, that's how I feel, and so therefore we should just ship it." But that's pretty profound. I like that.

**Jerod Santo:** I was gonna say, Adam, isn't that what you and I do? We basically ship our opinions, don't we?

**Adam Stacoviak:** Well, we're different... \[laughter\]

**Jerod Santo:** Yes, we are.

**Adam Stacoviak:** We're different.

**Jerod Santo:** I know...

**Adam Stacoviak:** We're not the common product...

**Jerod Santo:** It's like that one episode we did, "You are not Google." Remember that one, way back in the day?

**Adam Stacoviak:** Yeah.

**Jerod Santo:** We are not Google, so we can ship our opinions... But your mileage may vary.

**Adam Stacoviak:** Right.

**Sarah Drasner:** Yeah. I think all of this stuff is your mileage may vary. I try to give that caveat in the book a lot. I've worked at startups, I've worked at big companies... I don't use the same tools for both of those jobs. They're quite different.

**Jerod Santo:** Right. That's actually a real stumbling block, it seems, for many engineers and teams, is kind of taking big tech solutions to their small type problems, or just misapplying things and saying, "Well, if it works for Facebook, so it'll work for us", and it's like "Yeah..." I mean, that was actually -- the thrust of that show we did years ago with Oz Onay, "You are not Google/Amazon/-" whoever else.

**Adam Stacoviak:** LinkedIn I think even.

**Jerod Santo:** Maybe it was LinkedIn, I don't know... Just because different tools and different solutions don't fit every single scenario. And so we need to evaluate and apply engineering thought to decide what's going to work in our circumstance. And you can read Sarah's book and probably get lots of tools and interesting things out of it, but then you have to put it through its paces, and see how it's actually going to help you or not given your context, because Sarah didn't have your context necessarily when she wrote it.

**Sarah Drasner:** That is 100% correct. Yeah, I completely agree. I'm trying to say that a couple of times, that what works for me exactly won't work for you exactly. And yeah, you hit the nail on the head, that engineering is a lot of "It depends." It really is. There's nothing in engineering, usually, that is without trade-offs. And so you have to always consider if you're making the right trade-offs for what you're doing, and for your own team. And I don't have every experience in the book in the world, either. So you may have a different experience than me.

**Jerod Santo:** Yeah. So it sounds like the whole "It depends thing" applies just as much to management as it does to engineering.

**Sarah Drasner:** For sure. Although I think yes and no... Like, just like in software engineering, there are some things that are true-ish, that could be applied to many things... There's software that can be very brittle, that you probably don't want to write. And I think that there's stuff in engineering like that, too. There's a lot that -- and I think the book does try to generalize the things that are a little bit more -- you know, the stuff that could be useful for more people. There's a bunch of chapters where your mileage may vary. I talk about what it's like if you try to prioritize between PM and Eng projects, and things like that; that's very "Your mileage may vary." That's just in case you don't have a process setup, or things of that nature... Like setting up your calendar. You can set up your calendar however you want, but here's some things I do.

**Jerod Santo:** Right.

**Sarah Drasner:** \[52:05\] But there are things I think that you can't not do. There are some things that I see managers mixing up, or forgetting about, or losing the forest for the trees on that I try to cover in that... Like, just even the general idea that you should be making things better; that it is your job to solve problems. Sometimes people forget that. People get wrapped up in the power parts, and forget the responsibility parts. There are also things that you probably can't not do, like supporting your team in their careers. I've definitely talked to managers who are like "Wait, you have one-on-ones?" I'm like "You don't?" \[laughs\] "Why aren't you having one-on-ones?" So I would say having one-on-ones is maybe not a Sarah thing, and maybe more like "You probably should be doing that." Yeah.

**Jerod Santo:** What does that look like exactly?

**Sarah Drasner:** Well, what it looks exactly, how you set up your one-on-ones can depend on the person... But the idea that you meet with your staff, and meet with them alone, and talk about their careers, and talk about what's on their mind, and what they're working on... I think that probably all managers should be doing. I don't take that many strong opinions, but that's probably my strong opinion, strongly held.

**Jerod Santo:** How often should that happen?

**Sarah Drasner:** Well, that's the "Mileage may vary" part. I have seen people at startups who have 15 direct reports, which I think is way too much... That's really a lot; beyond eight to ten, it gets really hard. If you have that many direct reports, then you're probably not seeing people quite as much. But what I try to do is keep under eight, and meet with them every week. The length of time depends on how much trust is built, and what's going on. When I first joined Google, I had hour-longs with every single person on my team, so that we could get to know each other, and we could build trust, and we could see each other for a little bit longer and I could get to know what they're doing.

Over time, some of those decreased to a half an hour a week, if things are just humming along. Like, I have multiple people on my staff that - they're just doing a great job; they don't need -- we can share FYIs, and we can talk through things for their careers... But I trust them; they do a great job.

Sometimes I have longer one-on-ones, like - I have an Uber TL and he and I have tons to talk about. We run out of time on hour-longs every week, because there's so much going on in the org that the two of us have to collaborate on, and make sure that we're driving and executing on. So it kind of depends.

**Break**: \[54:39\]

**Adam Stacoviak:** When you do those one-on-ones - I suppose it may change over time, but maybe give me a version of initially, and then maybe over time... But do you structure them in terms of like you have particular questions, or certain hit points that you go against? Or do you just do a lot of listening? How do you move along that path?

**Sarah Drasner:** Great question. Yeah, I have a standard doc that I use for the first one-on-one, that asks things like "Are you happy with your career here? Why, or why not?" It starts with intros, of course. "What do you do outside of work for fun? What motivates you? How do you like feedback? What's your biggest blocker here?" I have a bunch of questions that. And I tell them straight up when we join the call, "This is your time. We don't have to talk about any of these things if you don't want to. I put these down for everybody, and it's kind of useful to understand these things about each other... But this is the first time we're meeting. We don't have to talk about this, we can talk about whatever you want to." So from there, it is a lot of listening, because they're either going through the questions, or they're telling me something that's been on their mind for a really long time that they need solved, or something. Or they're telling me about something that's very important to them.

And there can be times in coaching where you're listening, and there can be times in coaching where you're giving advice. I tend to ask people which one they want, because sometimes people just wanna vent, and sometimes people want my perspective... And sometimes I coach via questions, because they might know the answer internally to them, and I want to bring out that answer; just what I do with the TLs. "Why is this an issue for you?" I had somebody who was like "I don't want to go for a promo?" I'm like, "Why don't you want to go for a promo?" And they talk through something bad that happened in their life, and things... Sometimes asking why is part of the discussion, too. I tend to be a "jump in and fix it" person, so I always have to be really careful to not do that when people don't want that. \[laughs\]

**Adam Stacoviak:** Do you feel like you're a pseudo-therapist sometimes in this position?

**Sarah Drasner:** Yeah, sometimes... But I think most of my work is technical, and then every once in a while people don't get along and I have to help. So only if necessary. I don't think I make a good therapist...

**Adam Stacoviak:** Okay... Whether by choice or by force, that's kind of what I meant by that. Sometimes, by nature of the job, you're forced into it.

**Sarah Drasner:** It definitely happens, for sure. Yeah. \[laughs\]

**Jerod Santo:** \[59:55\] Okay, do you have any other "can't-nots"? Because you said one-on-ones is a can't not. You also seem pretty hardline 8 to 10 direct reports, don't go over that, if you can avoid it. Are there any other kind of rules of thumb, or things that you're like "You know what - I have strong opinions about this is pretty much the right way or the wrong way of doing something"?

**Sarah Drasner:** Oh, good question. I'm trying to think. I think you have to align people to why. That is a really important one. I think most of the time that people get really bogged down, or they don't believe in their leaders, or trust problems happen, it's because people aren't aligned to the outcome; they don't know why they're doing things. They think that leadership is hiding something, or there's some sort of ambiguity, or there isn't transparency... The thing that I think leaders get worried about is that people won't trust them if they are more honest. I think the opposite happens... \[laughs\] Like, if they don't act a commanding force, then people won't respect them. I think actually respect happens a little bit more -- people can definitely pretend to be aligned when they are fearful, but I don't actually think that people do their best work in fear.

**Jerod Santo:** I tend to agree with that.

**Adam Stacoviak:** Can't-nots... That's a good question, Jerod. I like that. So that's it? That's end of line for can't-nots? You're on a roll. I love them.

**Jerod Santo:** Align your whys, one-on-ones, and not too many direct reports. So doing those three at least, then you're off to a good start. You said most of your work is technical... What do you mean by that exactly?

**Sarah Drasner:** Well, most of it is trying to figure out what we need to build, why we need to build it, meeting with customers... You know, to make solutions that our team does for all of the problem spaces that Google has - we call these PAs customers, like Google Docs Sheets, that's workspace, that's one. YouTube is another. Search is another. Ads is another. Pantheon, which is Google Cloud Console, is another... In order to make solutions that fit all of those massive PAs and all of their distinct needs, we have to be very, very diligent about collecting what their needs are in the requirements space, and understand the restrictions of our own technology, tech debt, and things that, in order to solve those problems for our users. And that is technical work. That is not something that you can do by being hands-off. You have to kind of dive in, you have to ask other kinds of questions... I mean, we're all engineers, so people love to come with solutions to problems without even understanding what the problem is... And so we have to kind of work together on building what's right. And that can be really hard. So that's the majority of what I do.

**Jerod Santo:** How much do you get into the weeds, or how much are you hands-on with regards to process, when we go into individual engineering teams? ...how they go about accomplishing the goals that you all have agreed upon, going about. Are you in there on the weeds in that, or are you just gonna stay out of it?

**Sarah Drasner:** I'm mostly letting teams self-organize around what they want to be doing. Every team has different needs, and things. We are trying to create a little bit more consistent process for understanding the broader portfolio for horizontal efforts, meaning like -- let's say one team on a framework needs something done, but it actually affects the way Build serve works, it affects the way SaaS works, it affects... Like, all of our teams need to be at least aligned on that that is a high priority, and that we all need to get it done together... We have some things that are process-oriented to prioritize our work together, to understand what people are working on, where the risks are... We have processes in place to understand where things are for strategic customers, whether they're red, yellow, green in terms of status, and things that, so we can collaborate well. But no, in terms of the very \[unintelligible 01:03:52.15\] I trust them.

**Jerod Santo:** \[01:03:58.29\] There's your trust, again. It comes back to trust. So these processing tools - are there like internal Kanban board style things, or just generally speaking that kind of tool that everybody uses to see where the status of certain things are, I'm assuming?

**Sarah Drasner:** Yeah, we have some internal tooling for that, just like other companies do.

**Jerod Santo:** Alright, so we've got the can't do; we've got the can't-nots. You have to do these things. What about things to avoid? Like "Don't do this. This is a fail every time. Trust me, I've done it before. Tried it, it doesn't work very well." Do you have anything that people can avoid?

**Sarah Drasner:** Oh, yeah. A big one that I had mistakes of earlier in my career, and continue to, probably - because I used to be an IC, and we just talked about trust, one of the biggest mistakes I had was diving in to do it myself. Sometimes it is faster if I write the code myself, because I know how to get it done.

**Jerod Santo:** And more fun. \[laughter\]

**Sarah Drasner:** And the truth of the matter is - and this was especially true when I was switching... And the truth of the matter is you have to teach people on your team - and sometimes it will take longer for them to learn, and things, but you're making an investment, and you're helping them learn, so that they can be empowered for the next time, and stuff... And some of that is even protection. Like, I'm kind of a mama bear, and I want to protect my team... Just like, you know, these are great humans, who are thoughtful, and productive, and wonderful. You want to protect them. But I have learned over time that you can protect too hard, where you don't allow them to grow.

There was a person that I was trying to get promoted, and I protected them from all sorts of cruft and politics and things... And then when I left, they had no tools to deal with any of that stuff. And I really didn't set them up well, because I protected them too hard. I should have been still protecting them, but maybe teaching them along the way, so that they knew how to navigate it when I was gone.

Another example of this is - you know, just in tech kinds of things, like... I'm sad to say, I've been the manager of teams where I had so much of the infrastructure, and I built so much of it that when I left, they were like "What is this...?!" \[laughs\] That's not good. That's a lesson I had to learn, for sure.

So you know, some of it is about learning myself how to empower people, instead of fixing everything myself. Sometimes, out of very good intentions of like wanting to protect people, or sometimes I'd protected so hard that I wasn't letting my peers in. Like, you protect so hard that you aren't being a good partner to everyone across all of your peer landscape, and driving towards more common company goals that you need to all be collaborating on. That's not a good partnership. You're working at the same company; they're not against you.

**Jerod Santo:** Right...

**Sarah Drasner:** So I had to learn to - not let go of mama-bearing... You have to have some protection of your team; that's part of your job, and caring for them. But not holding it so tight that they weren't able to function well, or learn, or grow, or work with other people.

**Jerod Santo:** It seems like a tough balance to strike. It seems like one that maybe you almost can't learn until retrospect, at least the first couple of times... Because how do you know when it's too tight, until you look back and you're like "Ah, that was too tight."

**Sarah Drasner:** Yeah...

**Adam Stacoviak:** That's right.

**Sarah Drasner:** Well, I definitely learned it through mistakes, you know... \[laughter\]

**Jerod Santo:** That's how we learn.

**Adam Stacoviak:** What about self-management? The last part of your book is kind of tactical in terms of how do you deal with you. Not anyone else, but how do you take care of you. There's a chapter in a book that I like to read... And I reread it. It's called Essentialism. Sarah, if you've read it before, let me know, but there's a chapter in the book that essentially is called "Protect the asset." And that's kind of how I would summarize part four, your work - it's kind of like protect the asset. Can you maybe pick some favorites from that section, that are your favorites in terms of protecting the asset, and managing yourself?

**Sarah Drasner:** I love that. Actually, I don't know the book Essentialism. I'll go look it up.

**Adam Stacoviak:** It's amazing.

**Sarah Drasner:** \[01:07:58.06\] That's cool. Yeah, you're absolutely right, it is protect the asset. You cannot be a good leader to your team if you're not taking care of yourself. And taking care of yourself can mean something managing your to do list, and making sure that you are working on the highest priorities for your organization, and not just reacting to chaos... Because it's always going to be a little bit chaotic. The more you grow, the more chaos there is. So you have to kind of figure out in this wide bucket of things you could do with your time, how are you going to spend your time that's most effective, and that's going to be most strategic for your organization? You can't do that unless you have a good process to understand your work, understand what's still open, that you haven't closed, understand what day you're doing what thing... So there's some of those processes in there that are kind of tactical... And again, other people can have other systems than me. My thought there is you have to have something in place to help you figure this out, and to hold that information; you don't have to use mine.

And then other things are just keeping the oxygen mask on. There were times I was overworking so much that I wasn't seeing my family and my friends, and things... And then I started getting really bummed out, and guess who's a bad leader? A bummed out person. I kind of tie that chapter a little bit with boundaries... Because in order to take care of yourself, you also sometimes have to make boundaries where you understand what your values are, protect them, and make sure you have time for the things that fill you up.

Another example of this is - I exercise... I don't actually exercise to keep myself fit; and that's nice, but I exercise because I know I have better mental energy, and then I have more to give... I have better capacity when I exercise. I just get those endorphins from running, and that allows me to be a little bit more open to people. The days I skip exercising, I can actually tell. I can tell that I'm not showing up for my team quite as well. And that might not be true for you. I'm not saying that you have to go exercise. I'm saying, figure out the stuff that you need, that's going to be very particular to you. Maybe you really want a certain walk on your way to work, because that helps you clear your mind, and stuff. Maybe you need to spend an hour on Reddit, so that you can just goof off, and have some time to yourself. Whatever that thing is, make sure you're doing it.

**Adam Stacoviak:** Right. Truth. Everybody needs a distraction. Sometimes they're healthy, and sometimes they're maladaptive, you know? So true. That's the filling your cup chapter. I enjoyed that one... Because you can't be you, unless you're you. If you don't take care of yourself and you don't find a way to fill your cup, and set boundaries, and say no to things that should be said no to, and define all those things for yourself... If you can't self-manage, and self-regulate, then you're no good to anybody else.

**Jerod Santo:** Here's a related question... Maybe you guys can both answer this one, because I struggle with this... It's "How do you know when to say no to something or somebody?" And then how do you actually say it?

**Sarah Drasner:** That's a great question. That's one I actually had to go to therapy for... \[laughter\]

**Jerod Santo:** Okay...

**Sarah Drasner:** Like, I'm really bad at saying no. I was not raised to say no. So I still think it's hard... I do think that one thing that can be challenging is that people... There are - not everybody, but there can be an expectation that you say yes to everybody, and that your time is available for everyone. Doing audits, one thing that I did, that I think I talked through in the book, is I write four buckets of my values, like the things that I want, or that I think are important, and I put those buckets, and then I write down all the things that I'm doing, and then I put them into the buckets. And things that cross over many buckets are things I keep, and the things that are in one bucket or in no buckets, I go "Okay, it's in no buckets. Why am I still doing this?" \[laughs\]

**Jerod Santo:** \[01:12:03.22\] "Why am I doing this thing...?" Yeah. That's a good move.

**Adam Stacoviak:** Key objectives. I like that. Saying no is hard, Jerod...

**Jerod Santo:** I know.

**Adam Stacoviak:** My problem, I think, with saying no... And we said this on the podcast we have Sarah, called Brain Science... And so it's myself and somebody way smarter than myself; she's a doctor in clinical psychology. Her name is Mireille Reece. Dr. Mireille Rece, to those who really want to get formal... But we did this show called "Your choice is your superpower." So that's essentially what Jerod's asking here, is how do you say yes or how do you say no. And that's challenging, because -- or even to know really when to say no. Because there's times I've wanted to say no, and I reluctantly said yes... And I went in it with reluctance, and I got into the situation, or whatever it might be, and I learned and I stretched and I grew as a result. And even though I didn't want to, it was uncomfortable to say yes, I want to say no, I'm thankful I did say yes. That's what makes saying no hard.

**Jerod Santo:** But then there's other times where the exact opposite thing happens.

**Adam Stacoviak:** Exactly. And there's other times where I said no, I felt very convicted for saying -- I felt great conviction for saying no, and then I'm so thankful I did, because wow, I dodged a major bullet there. So it's just really tough to know when to say yes, or to say no.

**Sarah Drasner:** There's also a scale element... I think that there was a point in my career, and maybe for yours, too. I'd love to hear from both of you about this... But there was a time when I had limitless time, and I could say yes to everything. And I didn't have many requests for my time coming in. In fact, I was hungry for more. And I started engaging open source, and I was really hungry... Like, "What can I work on? I want to work on everything."

**Jerod Santo:** Totally.

**Sarah Drasner:** And then you get to a certain point, especially with open source, where the requests or the volume of requests are way bigger than the amount of time that you have, and that's when this starts to become more of an issue... Because yeah, if you start saying no too early, then you miss out on all that great growth that Adam was just talking about. You don't want to say that you're creating a boundary when you're really just protecting yourself from learning.

**Adam Stacoviak:** You're scared, even.

**Sarah Drasner:** Yeah, or you're scared, or something that. And at the same time - I'll be honest, at this scale, if I added up the amount of requests for my time a week, it would probably be 400 hours. I can't do 400 hours of work in a week. So I have to be careful about my time now, in a way that I didn't before. I think it's kind of very clear on the high-scale spectrum and very clear on the low-scale spectrum, and really hard in the middle. That's when I went to therapy. \[laughter\]

**Adam Stacoviak:** Well, you bring up a good point though, with therapy... It's that you do need somebody to bounce things off of. It could be a legitimate therapist, but some people - they think well by thinking out loud. And it doesn't become true or become concrete; they need to speak, they need to talk it through, they can internalize it... And it could be a therapist, it could be a really good friend, it could be a close boss, or an adjacent co-worker... Whatever it might be. Find somebody that is out there, that can be that confidant to you. But just talking through things can be very powerful. And some people literally need it to really concrete the things that are in their brain, and how they feel.

**Sarah Drasner:** Yeah. And also, there's a little bit of tough love element in there. You need somebody who can -- if you are going to go with someone else and do rubber-ducky kind of things, you need someone who is comfortable pushing back on you lovingly. I needed that, where I was saying yes to all these things, and they had to feel comfortable enough saying "You say you want to see your friends and your family, and you're sabotaging that by doing X, Y and Z." Only somebody who's really comfortable holding me accountable, and then in a loving way, can help you sort that out and go "Ah, you're right. I totally am."

**Adam Stacoviak:** \[01:16:08.02\] And their job isn't to convict you and say, "Well, Sarah, you're wrong. Fix it."

**Sarah Drasner:** Yeah. \[laughs\]

**Adam Stacoviak:** It's just more like "Hey, adjustments. Course correction. A few degrees." It's not a 180 necessarily. Maybe sometimes it is. But in some cases, like "Hey, reminder - this is what you said you wanted to do... But this, this, and this is leading to not doing that." And there you go.

**Sarah Drasner:** Y'all ask such great, thoughtful questions. I feel I'm learning as much on this podcast... \[laughs\]

**Adam Stacoviak:** Oh, get outta here, Sarah. Get outta here... \[laughs\]

**Jerod Santo:** I doubt it. But I appreciate that sentiment. Well, Sarah, we're just gonna say, we're very, very happy that you said yes to us to come on the show. It's been --

**Sarah Drasner:** Thank you so much for having me. This has been a pleasure. Yeah, I appreciate it.

**Adam Stacoviak:** It's been a pleasure reading your book, honestly. I feel like even for non-managers, it's still good, too. I'm the rest of us, I suppose. I manage -- who do I manage around here, Jerod? Me...

**Jerod Santo:** Mostly yourself, but also --

**Adam Stacoviak:** Mostly me, right?

**Jerod Santo:** We manage each other, yeah...

**Adam Stacoviak:** To some degree, yeah. We're accountable to each other, for sure. So small teams like ours, which is just basically Jerod and I plus a small cadre of contributors and full-time employees... But it's not a big team. It's not Google, right? Although you do work there, and your experience comes from large organizations, I've learned a lot from reading your books, so I really appreciate your writing it. More than anything, you said early on that - I'm going to paraphrase to some degree, but just that you don't know all the things, so some people might see "Well, Sarah wrote a book, so she must know everything." I'm just thankful that you were confident enough to write down what you did learn, because so often, we don't do that. We don't leave the breadcrumbs for the later us'es; the people that are inspired by us, to follow whatever it might be. And we may not be the most inspiring people, maybe some more than others... The point is you took the time to actually write your thoughts down, and put it down... You threw the gauntlet down, as you said before...

**Sarah Drasner:** That's right. She threw down.

**Adam Stacoviak:** You know, that's enough. And I think that - you know, one thing we do here as, I guess, for the most part, podcasters, sometimes therapists, sometimes great friends... I think we help people realize they have more power than they believe they have. And I'm thankful for people like you, who wrote down so much, before this book even, too. You put so much wisdom out there, and you put it out there for everybody to read, and that is so appreciated. I really appreciate that.

**Sarah Drasner:** Thanks, I really appreciate that. It's a big labor of love, so it's nice to know that people got something out of it. It's a lot of time and energy and blood and sweat and tears to do stuff like this...
**Adam Stacoviak:** For sure.

**Sarah Drasner:** ...so I'm really happy that it's been useful for people, and I really appreciate y'all engaging and talking through stuff.

**Jerod Santo:** You bet. I'll just add that I really love the artwork on the cover...

**Adam Stacoviak:** Yes.

**Jerod Santo:** And to our listener, you can check it out. Of course we'll link it up in the show notes, but engmanagement.dev - is that the best place to send them?

**Sarah Drasner:** Yeah.

**Jerod Santo:** Engmanagement.dev. You can see that artwork, and links to Amazon, as well as get a free chapter... So definitely, definitely check it out.

**Adam Stacoviak:** Anything left we didn't ask you, Sarah? Anything left unsaid, that you want to end with here on the show?

**Sarah Drasner:** Oh man, that's such a good thing that I wish that I had something really good, but... No --

**Jerod Santo:** Like coin another phrase real quick...

**Sarah Drasner:** I could say anything. \[laughter\]

**Adam Stacoviak:** Well, the mic is yours.

**Sarah Drasner:** \[laughs\] I know. I think we covered things pretty well, and I really appreciate it.

**Adam Stacoviak:** Cool. Good to have you. Thank you so much.

**Sarah Drasner:** Thanks.
