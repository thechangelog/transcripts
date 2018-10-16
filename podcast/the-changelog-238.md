**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 238 and today is an anthology show, backed by popular demand. Jerod and I spent the tail end of last year traveling the world. Jerod went to OSCON in London, I went to All Things Open in Raleigh, North Carolina, and we came back with so many great stories from the community.

Today we're sharing three of those stories with you. First up is Karen Sandler, known for her work as the executive director of the Software Freedom Conservancy. Second is Rachel Nabors. Rachel is known for her passion and expertise in web animation. Last up is Jono Bacon, known for his work guiding and leading open source communities.

We have three sponsors today - our friends at GoCD, Rollbar and also Toptal.

**Break:** \[00:01:21.20\]

**Karen Sandler:** We are on the expo floor at OSCON EU and it looks so serious here at The Changelog table.

**Jerod Santo:** There's lots going on...

**Karen Sandler:** There's tons of things going on, but there are really serious microphones and serious equipment, and this man has a serious look on his face, like he's doing some real journalism.

**Jerod Santo:** This is serious business. Well, thank you, I guess...

**Karen Sandler:** I feel serious.

**Jerod Santo:** I feel serious, too. Your talk this morning made me feel very serious.

**Karen Sandler:** You know what, I thought it was maybe more lighthearted than I probably was...

**Jerod Santo:** You could've been more gloomy if you wanted to.

**Karen Sandler:** Oh yeah, I needed it to be more lighthearted.

**Jerod Santo:** Well, you did take out all the pictures of sadness and put in penguins.

**Karen Sandler:** I did... Fuzzy baby penguins, they're adorable. It makes you feel better about all the terrible things that are... 

**Jerod Santo:** I liked that part. I actually got to make it up for... I missed yesterday's opening sessions.

**Karen Sandler:** I missed them too, because setting up the expo floor, we had to be here.

**Jerod Santo:** Right. But this morning I was lucky enough to see those, so I very much enjoyed it. Why don't you say where you're coming from and then give us just the synopsis of what you're talking about.

**Karen Sandler:** Sure. For people who don't know, I'm the executive director of the Software Freedom Conservancy. What I am known for is that I have a heart condition - I guess I'm not known for the heart condition, but...

**Jerod Santo:** ...you will be, soon.

**Karen Sandler:** I will be, soon. \[laughter\] So I literally have a big heart - it's called hypertrophic cardiomyopathy.

**Jerod Santo:** Which is a great play on words.

**Karen Sandler:** Totally.

**Jerod Santo:** Wait, what's it called?

**Karen Sandler:** Hypertrophic cardiomyopathy.

**Jerod Santo:** That's a big word.

**Karen Sandler:** It's a big word for a big heart.

**Jerod Santo:** Yeah. We have a saying around at Changelog, as you saw, Hacker To The Heart, and you're one-upping us by actually hacking your heart.

**Karen Sandler:** I wanna be able to hack my heart, but I can't, because the software in my defibrillator is proprietary software, and I know these devices have been hacked; they've been shown to be vulnerable, and yet we don't have any power to edit the source code and fix the problems that are there.

**Jerod Santo:** So one thing you said this morning is that you really, really, really love software.

**Karen Sandler:** I'm really, really into free software.

**Jerod Santo:** \[00:03:57.12\] Yeah, tell us about that. You've given us the heart part, and you can't access the source code on your own defibrillator...

**Karen Sandler:** I can't, so I became really passionate about free software because of that. As a result, I have really made an effort to use only free and open source software everywhere else where I possibly can. So I run Replicant on my phone...

**Jerod Santo:** Which is like a free operating system...

**Karen Sandler:** It's a free version of CyanogenMod it's like a free Android. One of the cool things about it - if you are like me and think this is cool; I'm so dorky...

**Jerod Santo:** Tell me and then I'll let you know if I do.

**Karen Sandler:** It disables the proprietary bit, so only one of the cameras has been reverse-engineered, so I only have one camera on my phone. It's new, I just switched from the G1 to the S3, so I'm kind of entering modern telephony a little bit... It doesn't have any GPS capability, so I still have to ask for directions on the street... \[laughs\]

**Jerod Santo:** Oh my goodness... So you're causing yourself real pain in order to stick with the principle.

**Karen Sandler:** I am, and it's worth it, because this way I can understand where the pain is, for starters, and I can explain to people where we're compromising fundamentally as a society, because where we don't have access to our source code, where we can't review it, we are fundamentally unsafe, and we are powerless to improve our situation.

**Jerod Santo:** Before you got the defibrillator -- I can't even say that word; how professional am I...?

**Karen Sandler:** Defibrillator.

**Jerod Santo:** Defibrillator. Before that...

**Karen Sandler:** You could say ICD.

**Jerod Santo:** Before you got the ICD - I can say that, thank you...

**Karen Sandler:** Or pacemaker-- like, yeah... Medical device.

**Jerod Santo:** I'll stick with ICD. Acronyms scare people. It makes me sound smart. So before you got the ICD, you weren't this passionate about it.

**Karen Sandler:** I thought open source was cool.

**Jerod Santo:** It was just cool. Like, I think the Tonight Show is cool. Was it at that level of like, "Oh, that's cool..."?

**Karen Sandler:** Yeah, you know... I'd say that a really long time ago when I was in college - I'll say it, in the '90s - I installed the Linux Lab in my university's computer center, because you needed a computer center at the time...

**Jerod Santo:** You did, absolutely.

**Karen Sandler:** Yes, and I remember thinking, "This Linux thing is so cool! It's too bad it won't go anywhere..." \[laughter\] I was a visionary.

**Jerod Santo:** Yeah, so you're not a prophet, we've got that established.

**Karen Sandler:** And then I went to law school, and...

**Jerod Santo:** You're a lawyer.

**Karen Sandler:** I'm a lawyer, yes.

**Jerod Santo:** So every time you give advice on the internet you can't say IANAL.

**Karen Sandler:** No, we have our own acronyms.

**Jerod Santo:** What is that?

**Karen Sandler:** IAAL...

**Jerod Santo:** I Am A Lawyer...

**Karen Sandler:** ... but TINLA.

**Jerod Santo:** This Is Not Legal Advice.

**Karen Sandler:** Yes! Good one! \[laughs\]

**Jerod Santo:** This is fun! I still don't know what ICD means, but...

**Karen Sandler:** Implanted Cardioverter.

**Jerod Santo:** You have spent a lot of money for that acronym... And a lot of time, at least. I'm assuming that money was spent.

**Karen Sandler:** Oh, becoming a lawyer...

**Jerod Santo:** Yeah.

**Karen Sandler:** I went to Columbia Law School, that is expensive.

**Jerod Santo:** So you are a lawyer...

**Karen Sandler:** I'm a lawyer... I play one on TV also.

**Jerod Santo:** ...and you do give legal advice, but you only do it pro bono.

**Karen Sandler:** ...not to you. \[laughter\]

**Jerod Santo:** Not right now. If I join the Software Freedom Conservancy, maybe you will.

**Karen Sandler:** So at Software Freedom Conservancy I am the executive director, so I'm primarily in a non-legal role, but we have a general counsel named Tony Sebro who is really, really great.

**Jerod Santo:** So you have a lawyer.

**Karen Sandler:** We have a lawyer, and we have pro bono lawyers as well, who volunteer with us, but I personally... I've actually never talked about this much, but I find that it's very confusing to be trying to act in a legal and non-legal capacity at the same time. When you think about legal issues, it's hard to assess risk... It's hard to make good decisions about what an organization should do if you also have to think about the legal...

**Jerod Santo:** Can you set it aside, though?

**Karen Sandler:** \[00:07:50.22\] You can, but it's much better to have somebody else tell you, "These are all of the concerns", because you're somewhat biased if you're in the non-legal capacity and you're making the business decisions. In our case, in our non-profit mission, you might want to be able to do something so badly that you're not looking quite so fairly at the law. And as much as we like to think of ourselves as just passionate, totally rational people, these biases sneak in in very, very subtle ways. So I find that I'm a better executive director when I have a lawyer who is--

**Jerod Santo:** You let them do the lawyer work and you can kind of turn that part of your brain off.

**Karen Sandler:** Exactly. And there's plenty of non-legal work for me to do, but I still am a lawyer. I teach classes for lawyers as well, and I only do pro bono legal work; I volunteer for the Free Software Foundation and the GNOME Foundation.

**Jerod Santo:** Okay, very cool. Do you mind if I ask personal questions at all?

**Karen Sandler:** Go for it. I put it out there because when I started out working on the legal issues around -- the medical devices issue, I try to not talk about personally having a heart condition and make it not about my defibrillator. I felt very uncomfortable talking publicly about having a heart condition, and then what I found was that after I published the article Killed By Code, which was kind of an academic-style article, I tried to put links on patient forums... I wanted people to understand that this was an issue, and to ask their doctors about free and open source software...

**Jerod Santo:** That's a hard sell...

**Karen Sandler:** \[laughs\] I was really naive about it... But I got attacked roundly on these forums because people said, "You're trying to scare us. You don't know what it's like to live with a heart condition, and my doctor is helping me and is telling me that I need this device, and I don't even know what to do with this information about the software on it."

**Jerod Santo:** Right. You did know, but you hadn't told everybody that you knew what it felt like...

**Karen Sandler:** Exactly, I didn't say, but then I realized that I had to explain that I had a heart condition, and what I found is that explaining to people why free and open source software matters is so much easier when I start explaining that I have a heart condition and my life relies on this software, because people understand then how critical software is for our society. It's a very short walk from medical devices to cars, in which we entrust our lives... And from cars to voting machines, our financial markets, and to everything we roll out. We live in an internet of things, where everything talks to everything else... We don't even know what our life and society-critical software is anymore.

**Jerod Santo:** Right. That makes sense, and I can see where you're guarded about that, but I think you do a much better-- I mean, we just met yesterday, right? But I can empathize with your situation and I can see the real ramifications.

**Karen Sandler:** It also makes you a little vulnerable, because you feel bad for me that I have a heart condition... \[laughs\]

**Jerod Santo:** I guess slightly...

**Karen Sandler:** But it puts it in real terms; it puts it in real, personal terms. You might know somebody who has a medical device or has a medical condition - it puts a face on it, which makes it easier to understand.

**Jerod Santo:** Yeah, I think that's a good strategy, at least in terms of relating your cause. You are on the principled side of refusing to use anything that is not completely free and open source, right?

**Karen Sandler:** Yeah, I mean... I will be totally honest with you - it is impossible to live in the real world today and be completely pure. Anyone who tells you that they are completely pure either has somebody else doing a lot of their normal life tasks for them... For example, if I wanna book an airline ticket, I have to use proprietary Javascript a lot of the time, to use my bank account access. I try to avoid these things. I can say to you I won't talk to you using Skype and I can make a point of it and it's easy, but at some point during the regular course of everyday living...

**Jerod Santo:** ...you have to.

**Karen Sandler:** \[00:11:56.23\] Yeah, and the choices that you have to make... Like, yes, it would take over three hours for me to go the bank, wait in line, do the things that I need to do, when it will take me ten minutes online. It doesn't make any sense, and you have to make some decisions.

**Jerod Santo:** I agree one hundred percent. The personal question I would have... I believe you're married, correct?

**Karen Sandler:** Yes.

**Jerod Santo:** So what does your husband think about that principle? Because it affects your life. Like you said, you don't have a GPS... I'm sure there's plenty of other things worse...

**Karen Sandler:** My god, he's so irritated at me... \[laughter\]

**Jerod Santo:** That's what I wanted to know.

**Karen Sandler:** He likes that I'm principled... Like I was saying, everybody has to use some proprietary software and they have to draw a line; everybody has to compromise a little bit if they're living in the real world. All I ask is that people make that choice thoughtfully, so that you think about what free software you use and what proprietary software you use and you find the right balance for you. Then mention that you would strive towards more freedom, because it's good for everyone. He's on board with that and he's very supportive... He's a musician, so his compromise area has to be different, because a lot of the software that you have to use in order to function professionally as a musician is proprietary software.

**Jerod Santo:** There are no alternatives, in some cases.

**Karen Sandler:** Exactly. But I would say he humors me a lot, because he runs CyanogenMod on his phone but not Replicant... \[laughter\]

**Jerod Santo:** He's not as hardcore.

**Karen Sandler:** No, but it does really irritate him because some of the times the compromises I make, where I'm willing to sacrifice my own convenience, inconveniences him too. So sometimes I have to call him because I am lost, while... You know, I don't have a car, because I live in New York, but when I'm driving sometimes, like for conferences when I'm on the road, I'll get lost and I won't be able to look at my phone to know where I'm going, so I'll call him and he'll be really irritated. But I work with Bradley Kuhn, who used to executive director of the Free Software Foundation and he's our president and distinguished technologist - and also our bookkeeper...

**Jerod Santo:** That's a lot of titles...

**Karen Sandler:** It really is... So I usually call him first, because we call each other when we're lost. \[laughs\]

**Jerod Santo:** I see... Because you're in the same boat, and he's not quite as annoyed as your husband might be.

**Karen Sandler:** No, no... Sometimes I'll call my mom. \[laughs\]

**Jerod Santo:** What does she think of it?

**Karen Sandler:** She thinks I'm totally crazy... She does. She's like "You're a lawyer and you're technical, you're a programmer, you have an engineering degree... Why are you not making a lot of money working for a for-profit company? Come on, what is wrong with you?!"

**Jerod Santo:** You have a degree from Columbia...

**Karen Sandler:** Yeah, and I was a cross-border securities lawyer for a while too at a law firm, so I now make about a third of what I made starting up from school... \[laughs\] So she thinks I'm totally crazy like that. But on the other hand, I think she understands that I am working towards an important societal issue, and she now understands more about it than she ever did before. I think she's coming around. It's hard for anyone to understand about free and open source software. Now that I've been doing it for about ten years, she's starting to get it... \[laughs\]

**Jerod Santo:** From a practical perspective, just playing the naysayer to a certain degree, with regard to getting free and open source software to be everywhere, years and years of proprietary software, there's mountains and mountains of code running devices and things, and maybe this is a fatalistic point of view, but has the train left the station? Can you put the toothpaste back into the bottle, or is it too late? Are you fighting a battle that you can't actually win?

**Karen Sandler:** \[00:15:48.16\] I think it's the wrong analogy. What's interesting is that I think that the meme that seems to be going around that people keep saying - and I think Cory even said it in his keynote today - is that open source has won. Open source is everywhere, open source is in everything, and therefore open source has won. I don't think that's really true... I think open source is at the core of a lot of things; it's at the lower levels, it's in everything, but in some ways we have less freedom than we did before, because now everything is wrapped in a proprietary wrapper, and you don't have access to the actual products that you have with the prevalence of non-copylefted licenses. It means that there is more that can be locked down and proprietary.

That means that we as consumers, we as individuals, we as hackers and we from a societal perspective have a lot less ability to do anything about the software that we have when there are problems. I think that there is some movement in really good directions...

Recently, a medical device manufacturer disclosed the fact that there was a vulnerability of their own volition, and announced their plans to fix it.

**Jerod Santo:** Where did that come from?

**Karen Sandler:** Actually, it was Johnson & Johnson, and they worked with Jay Radcliffe, who's a guy I worked with... I applied for a DMCA exception for medical devices. I think that security experts roundly agree that free and open source software is safer over time, and is going to be less vulnerable to attack. So I think companies are starting to wise up to the fact that security through obscurity doesn't work and that they might be liable if there are all these studies that show that this is the case and they've done nothing about it.

**Jerod Santo:** Tell me about your work with Software Freedom Conservancy. What do you guys do?

**Karen Sandler:** We are a non-profit umbrella for about 43 software projects.

**Jerod Santo:** Name names.

**Karen Sandler:** Squeak, Samba, Wine, Inkscape, Selenium, QEMU, phpMyAdmin... Oh, we're also the home for Outreachy, which is the internship program for women and under-represented groups in free software, and we also are perhaps best known for the work that we probably spend the least amount of our time and resources on, but gets the most press - the GPL-compliance project for Linux Kernel developers.

**Jerod Santo:** Okay, tell me about that... Because that gets the most press, so let's give it some more press here.

**Karen Sandler:** \[laughs\] Okay. Linux Kernel developers who ideologically work on the Linux Kernel under the copyleft license of the GPL have been frustrated to see how much the license is violated in the industry, and so they came to us and asked us to enforce the licenses with companies, so we do that. Most of our coalition is anonymous, but we do have some members, I forget it's somewhere in 6 to 8 and 6 and 10 developers who have been public about their identity. One of those developers is Christoph Hellwig, and after four years of trying to get compliance from VMware, last year Christoph filed a lawsuit against VMware that we're funding, basically, to get them to comply with the GPL.

**Jerod Santo:** Is that just going through the process right now?

**Karen Sandler:** Yeah. We went through the bottom court decision where the court basically threw the case out on a technicality, so now it's on appeal.

**Jerod Santo:** Fun.

**Karen Sandler:** Yeah, it's the legal process... It's really annoying and really interesting to experience another legal system. Christoph's lawyer is Till Jaeger, who is an excellent lawyer. What's funny is that a number of lawyers that are not connected to the case (German lawyers) have said that the decision reads like the court was just trying to get rid of the decision, they were trying to not have to decide. One of the German lawyers that has said this actually published a memo about it in which he said that he believes that the decision violates Christoph's constitutional rights.

\[00:20:07.19\] We'll see what happens on appeal. Christoph has announced that he's appealing, and we've announced that we'll continue to fund it.

**Jerod Santo:** Cool, very interesting. Let's talk about the projects that are under your umbrella. First, let's talk about what service you provide for them, and then we'll talk about...

**Karen Sandler:** Yeah, so the way that conservancy works... There are a bunch of different fiscal sponsors in our space, and they all have different niches. The way that we work is that the projects are a part of us. Once they join us, it's as if we are their foundation. Some fiscal sponsors are organizations like Software In The Public Interest (SPI). Their projects have a loose affiliation with them; it's kind of like a grant making style relationship, where for us our projects are part of us. There are some advantages to it.

We signed legal agreements on behalf of our projects, so when our projects have conferences, we're the ones organizing the conferences; when they get donations, the donations come through us. We help developers travel to conferences by reimbursing their travel, we help with their trademarks... The Kernel developers aren't the only ones who want their license enforced, so we do that for our member projects who want it, as well. We help with licensing generally, any kind of legal questions that our projects might have, because they're us. Our projects are us, so our lawyers are their lawyers.

**Jerod Santo:** That's cool.

**Karen Sandler:** We help all around. We help with fundraising, and we also hire developers to work on our projects.

**Jerod Santo:** Lots of things.

**Karen Sandler:** So many things.

**Jerod Santo:** You must be busy.

*nKaren Sandler:** We just hired a new guy, Brad Smith; he used to work at the FSF, and in between was a developer and manager at Curoverse, which is a kind of interesting company. He has just started working for us, so we are now four full-time people. But sometimes when I go and I talk to people who know what we do, they're like, "Where is the rest of your staff?" They're struck to hear that we're less than 10 people.

**Jerod Santo:** So you mentioned some of your projects - Wine, Samba, Git, Linux Kernel -- or Linux Kernel is not, you're just providing legal...

**Karen Sandler:** To some Kernel developers.

**Jerod Santo:** Okay, some Kernel developers. Homebrew is one that I love...

**Karen Sandler:** QEMU, Homebrew...

**Jerod Santo:** That's a newer one, right?

**Karen Sandler:** phpMyAdmin, Selenium...

**Jerod Santo:** How do they become a part of your umbrella? How does that happen? What's the criteria and the process?

**Karen Sandler:** You can e-mail apply at SFConservancy.org to join. We have an application, and then we have a really awesome evaluations committee which is made up of free and open source software luminaries... Deb Nicholson, who I just saw walk by, is on our evaluations committee, but we've got a whole -- they're all famous people. \[laughter\]

**Jerod Santo:** Nice.

**Karen Sandler:** ...and they basically look and make sure that it's a good fit for our conservancy. We look to see it the project is mature enough, if it's not controlled by a single company, things like that. And we welcome new applications. We have a bit of a queue for joining, but we slowly get through it.

**Jerod Santo:** Is the idea to have a bundle and that's your set and then you're done? Or is it to grow until you support all? What's the thoughts on where it's gonna go?

**Karen Sandler:** Well, we just like to grow thoughtfully. We wanna provide what we do to as many free software projects as it makes sense to do so and who are a good fit for us. For example, the Bro Network Security Monitor...

**Jerod Santo:** Bro?

**Karen Sandler:** Bro, it's been their name for 20 years.

**Jerod Santo:** Really?

**Karen Sandler:** Yeah, so it predates programmer \[\\00:23:45.13\]...

**Jerod Santo:** Yeah, I was gonna say, they're hopping on that thing, are they?

**Karen Sandler:** \[laughs\] They asked me to keynote their conference this year, so when I was tweeting about it, I used the hashtag "betterkindofbro" Yeah, and they're called Bro because with any kind of network security software, the flipside is that it could easily be turned into surveillance software, so Bro is a reference to Big Brother.

**Jerod Santo:** \[00:24:08.09\] Oh, Big Bro...

**Karen Sandler:** So their logo is an eye, and the idea is that, as they develop, they need to always keep in mind the flipside of their work.

**Jerod Santo:** Right. That's definitely a thing to keep in mind, for sure. Closing up, final thoughts... If you had a single message to developers, whether it has to do with the foundation or whether it has to do with the conservancy or not, what would you say? Either a call to action, or... This is your message to the world.

**Karen Sandler:** Okay, I'll say two things.

**Jerod Santo:** Okay. Oh, I said just one. \[laughs\]

**Karen Sandler:** You said just one, but I'm saying two. You can cut me off if you want, you can edit it out, but now everyone will know there were two...

**Jerod Santo:** That's true... \[laugh\] Okay, I'll give you two. But not three.

**Karen Sandler:** Okay, so the main this is that I believe that we as people in the free and open source software community, people who are users, anyone who would be listening to The Changelog, are all people who understand the value of free and open source software for a whole host of reasons; either you're using it because of its utility, you see the advantages of open source - whatever it is, there is an ideological component to why you care about free and open source software, why you wanna use it. It's better in a number of ways, and I think that we have been hesitant to talk about it in ideological terms and afraid overall to talk about freedom because we're afraid of being like a crazy lunatic who is completely disproportionate about what we think is right in the world.

**Jerod Santo:** Right, we're afraid to be marginalized as extremists, or...

**Karen Sandler:** And the problem is that because of that, I believe that the ideology around license choices and everything has been eroded, and I mean that including why people choose permissive licenses now. I think that people default to the Apache license because they think that that's what will sell, and I think that that has caused this problem of open source being in everywhere and in everything, but us having less freedom than ever before.

What we're starting to come up on are those societal problems that we won't be able to fix - we don't be able to fix our bugs, we won't have control of our technology and control of our software as a general societal thing, unless we include more free and open source software. From an ethical perspective, I think that we are obligated as hackers to think about these issues and to try to include them when we think about the business cases for the software that we're creating.

I don't care really what license choice people make at the end of the day, I really don't, provided that it creates free and open source software. My call-to-action is really just to think about the important of freedom and think about the kind of world that you want to live in and create for the future, because the path we're on is amazing. We're gonna have self-driving cars very soon. Everything will be networked and everything will be talking to each other. Everything will be an instrument of surveillance, and everything will be critical. I wanna live in a world where we have control - not some third party, not some company, not some government, not something/somebody else. That's the main thing.

The second thing is please become a conservancy supporter.

**Jerod Santo:** There you go!

**Karen Sandler:** Go to SFConservancy.org and sign up as a supporter. It's $120, $10/month, which is just for going a lunch out, once a month, and it makes a huge difference to us. We'll send you a T-Shirt, and everything.

**Jerod Santo:** Awesome. Karen, thanks so much for sitting down with me, this was a great conversation.

**Karen Sandler:** Thanks for having me!

**Jerod Santo:** It was a lot of fun!

\[00:28:04.19\]

\*\*\*

**Adam Stacoviak:** Alright, that was Jerod Santo at OSCON, talking to Karen Sandler, the executive director of the Software Freedom Conservancy. She has a big heart, literally. Her heart condition requires a pacemaker, but she can't access the source code that runs it, and that's just wrong.

Next up, I talked to Rachel Nabors at All Things Open. We talked about repeatable business models, the state of web animation and where we're heading, the cognitive science behind motion in user interfaces, some great places to start adding motion and animation to your interfaces, and what we might expect to see with animation and motion in Microsoft Edge.

Before this next segment I wanna mention our friends at Rollbar.

**Break:** \[00:28:43.10\]

**Adam Stacoviak:** Tell me your name, tell me what you do, give me a snapshot of who you are.

**Rachel Nabors:** Oh, that's cruel.

**Adam Stacoviak:** Cruel or cool?

**Rachel Nabors:** Cruel. You're like, "Just tell me who you are"... That's hard.

**Adam Stacoviak:** \[laughs\] It's too hard to explain?

**Rachel Nabors:** No, it's hard because everybody's got this job title, this thing that they wear and it identifies them, and I've always had trouble... I'm always the odd duckling.

**Adam Stacoviak:** Me too. What do you do? I can tell you all the hats I wear. Pick a hat. What's your favorite hat?

**Rachel Nabors:** I'm gonna tell you where I am now. I'm Rachel Nabors, I'm the founder of the Animation Network Slack Channel at Slack.animationnetwork.com. It's where everybody goes to talk about web animations on the internet, and sometimes we talk about UI animations on native; native people are welcome too, we love you; you've been using it longer than we have. I'm also the curator of WebAnimationWeekly.com, the newsletter - it's super awesome.

I've done a lot of work with web animation, motion design and user interfaces, I've written a lot about it; I just finished documenting the Web Animations' API on Mozilla's developer network, so you can read all about it under the Web Animations' API there; it's awesome. I made super cool demos for it.

I've been doing my own thing with web animation for the last three years in Portland, Oregon, which has been awesome... Absolutely awesome. But one of the problems I run into - sometimes you really love something and it doesn't love you back quite enough to make it a full-time job, right?

I love web animation, I love CSS animation, I love all the things that we can do, all the specs that we need to make and all the work that browsers are doing, and I needed to make that a real job, because that doesn't really translate into consulting work the way you'd hope it would.

**Adam Stacoviak:** Right.

**Rachel Nabors:** So anyway, I've got some big life changes in the store... I've just accepted an offer to work for Microsoft's Edge developer team, which I'm gonna be starting on 7th November. So now I get to this official-like, and now when I get stranded in Manila - because they shut down the airport for the APEC Summit - I won't be alone and out of pocket change, and having to figure out where I'm gonna spend the next week. It's nice. Sometimes it's nice to have that corporate wing to snuggle under while you're doing the good work.

**Adam Stacoviak:** \[00:32:16.11\] I'm sure your road to get to that good offer has been a long road, right?

**Rachel Nabors:** It wasn't a road I was purposefully following. I just remember that three years ago I was doing so much with animation: I was talking about it, I was traveling, I was finally getting my legs under me and feeling like I was actually making a difference. It's amazing... Before I did web development, I did comics, I made comics for a living, for teenage girls; I did this as a teenager. I had an interesting thing where I realized that comics weren't going to pay the bills and I had to go get a real job, and I ended up using all the skills I was using to promote comics on the web to become a developer.

Long story, but the point is life comes and goes in these cycles where the thing that you love leads to the thing that you do, but not quite in the way that you thought it would. I would get these e-mails from girls saying, "Your comic changed my life. You got me through a hard time in my life" and now, only three years after I started traveling the world, talking about animations and doing great things with them, I'm getting e-mails from people who say, "Thank you for all your work. I saw your recorded talk from three years ago, it got me into animation. I can't get enough of it." Even people I look up to and I link to almost weekly in the newsletter have confided it. It's like, "Yeah, you were my inspiration to get started." I'm like, "Really? You have more Twitter followers than I do now. How did that happen? What the heck?"

It's a booming place to be, and I'm just so happy to see this space grow, and it's kind of nice that it's all working out. I'm really happy.

**Adam Stacoviak:** It's good when things you work so hard to get to - especially when they're your passion - eventually work out. Is there anything in particular over your trip to where you're at now that was pivotal? Things you've done, any life lessons that you had to deal with, some wisdom or advice you can share?

**Rachel Nabors:** I've got a lot, but you don't have alcohol, and this is public, so I'll go with the ones that are safe to share. First of all, if you do at one point in your life decide, "I'm gonna go all in and just try to do something I love for a living", be warned that you need to find some kind of a repeatable business plan to make money off of it, or you could end up in an abusive relationship with the thing that you love.

I had this problem with comics. Not so much with web animation, because web animation is awesome and you can pretty much scoop by on the occasional speaker fee and consulting gig, but with comics I was working 60 hours a week and I was not making enough to make ends meet. When I had a medical emergency, it was like, "Oh, I gotta find a new line of work. This is not gonna work." I was walking that knife's edge all along and didn't really know it.

I saw that again with web animation. I did a lot of wonderful projects - I did devtoolschallenger.com last year with Mozilla, I worked on the Salesforce Lightning Design Systems motion portion, which if you're thinking about adding motion design to your style guides or your product, you should definitely go check out Salesforce's Lightning Design System. Their implementation of animation is pretty top notch, and a lot of other really nice -- it's just a really good example of a style guide and a pattern guide. It's beautiful.

So I did all these different things, but none of them were repeatable. And while that's great for a person who loves to learn, like myself - loving learning, loving doing new and unusual things - that's sort of not how you do it as an entrepreneur. An entrepreneur finds a system that makes money and then repeats it over and over again.

\[00:35:57.20\] I kind of hate repeating stuff. I hate repeating myself. When I make a workshop and I record and I put it up for sale, I do it because I don't wanna give the workshop anymore. I just wanna point people at the workshop and be like, "Okay, if you wanna learn how to do that, you can go here." I don't wanna talk about it anymore. There's nothing more for me to learn here. I have learned it, I am done.

So it's important to keep in mind it can be really tempting to just run off and do whatever you please, but you may find yourself in a place where if you like learning more than you like businessing, that you don't really have a repeatable business plan. This might not be such a big issue if you're a person that likes doing something that's very lucrative, like database analysis - a lot of people are gonna find work, even if they're changing what they're interested in... But if you're in something very niche, for example you like to build HTML5 games, or you love CSS animations, you might find that that repeatable business is a little harder to nail down. So it's a good idea to look out for that before you start working for yourself.

**Adam Stacoviak:** What was your repeatable business model? Did you find one?

**Rachel Nabors:** No, but to be honest, when I started working for myself, I believe what I said to myself was, I really wanna keep doing this. I don't like doing what I'm doing here in-house, I wanna do this. And maybe if I keep doing it enough, and enough people watch, someday someone will come to me and say, "Rachel, you should do that with us", and then I'll do it with them, and that's pretty much what happened; it just took three years. I've been having a lot of fun along the way.

Now, the repeatable business I did find, which was only toward the tail end, was "Hey, when something becomes popular enough - like animation - then you can sell the expertise that you have accumulated in the form of online workshops, seminars, training sessions etc. which is a whole other kind of hustle and requires all kinds of things like business development, building website with markety words that you may not like building. And if you don't like doing something, it's nice if you've got some cash saved so you can pay someone else to do the thing that you don't like doing.

Personally, I cringe every time I have to use marketer speak, but if you don't offer people a value proposition, they've got no reason to give you money. There is no such thing as meritocracy when you're trying to make money. you have to come forward and slam people in the face with "Here is why you should give me money, and if you press this button you can do that."

**Adam Stacoviak:** Right. Talk about the state of web animation then. Since you have such accumulated knowledge, talk about where we're at, what's going on with web animation, where are we leading to?

**Rachel Nabors:** We're leading to a very exciting place. One of the reasons why -- I don't know, I don't think I could have gone in-house for anybody but the Edge team. It's really changing the way the web is built. We've always thought of the web -- well, excluding that bout of Flash fun that we had, we've always thought about the web as kind of a static document thing. Even HTML is a document; it's in the tags, it's right there, "document". We think of it as kind of like a glorified microfiche, a way of storing words with the odd picture, maybe some audio or video here and there, but mostly we think of it as a way of storing words and arranging the words to make them look interesting.

We don't really think about the web - or at least we didn't until recently - as a user interface or an app, or something like a tool that we can use to do things. It's been kind of interesting watching frameworks like React and Angular kind of turning the ship on that. I've been enjoying watching motion creeping in around the edges, and part of that is definitely due to native apps challenging the state of the web. You'll hear it when you go to conferences like Chrome Dev Summit, about how the web has to stay competitive with native, so that it's not completely abandoned and everyone isn't just like turning on Facebook as soon as they turn their phones on, so that they're actually going to Wikipedia, they're actually going to your personal blog site, that they're still accessing this non-walled garden, and this thicket of information out there where anybody can be an author and anybody can share things or design things or come up with some new invention.

\[00:40:21.27\] It all starts in the web before it goes native, and the web has to be able to compete... And let's face it, native does some things better than the web does, for instance like going offline, having animated user interfaces. Animated user interfaces, by the way, are really good for users.

**Adam Stacoviak:** They're fun.

**Rachel Nabors:** Well, they can be fun, but they also can be very accessible for young and old people because of the way they tap into the human visual processing system. That's something I talk about an awful lot, and I've just finished two workshops talking about that, so I probably don't wanna go on about it too much, but let's just say that animation does serve a practical purpose, it does off-load cognitive load from the main thread of your human processing unit as it were to the visual cortex. Basically, it lets you stay on task by not making you think about what just happened on the page when it changes. The computer is showing you what just happened.

**Adam Stacoviak:** Being obvious, basically.

**Rachel Nabors:** Yeah.

**Adam Stacoviak:** Because of the animation, because of the motion, it's obvious something's changed, so your mind has to think less.

**Rachel Nabors:** Right, and there's a definite in art, and even more importantly, there's a science to how you do that. A lot of people are gonna do it poorly - I don't wanna use the word wrong, because that sounds so mean, but there's gonna be a learning process while everybody is nailing this down. But the great thing about how we are starting to use animation on the web now is unlike in native, unlike in gaming, and unlike in software system development (which never releases its findings anyway), the web -- we have a tendency to share our findings. If somebody finds a paper that shows that there's a better way to animate something, I'm gonna write an entire article about it and share it with the whole community. That's what I love about seeing animation coming into its own on the web. It's gonna be its own thing, and it will change the way all websites look like in the future forever.

**Adam Stacoviak:** So for someone out there who's thinking, "Jeez, I've known about web animations, I've wanted to do more of that on my site, I want that button to grow when somebody clicks it", what are some obvious hit lists that you go down with or you get asked about? What are some good hit lists of animations you recommend or places to start?

**Rachel Nabors:** That's a good question. First of all, there's my newsletter - WebAnimationWeekly.com, but there's also a UIAnimationWeekly.com that's put out by Val Head. That's totally worth looking at. Currently there's not one place that you go for all the animation goodness, but if you follow these two newsletters and dig through their archives, you're gonna get some great leads. I know that sounds like a really simple answer, but it is that simple.

**Adam Stacoviak:** What I'm asking for though is specific examples. Let's say if I've got a menu, rather than just simply clicking it and it appears, help me understand some interesting visual ways that are just like no-brainers that people should be doing more often, that help entice and enhance the user interface, do those things - like you mentioned - cognitive load on the user's brain, thinking about the next step... What are some easy ones they can do? Specific to animations, not so much resources.

**Rachel Nabors:** Alright, so when we talk about user interface animations, I'm more practical over pretty. It's one of the things that I think developers tend to think about design and also animation is that it's just there to make things look pretty. Well, let's talk about utilitarian animation here. I'm not gonna tell you how to make it delightful or pretty, I'm gonna tell you how to make it look good when you have pneumonia and you're on your laptop or your touchscreen iPad and you're just bopping around and you have no idea what's going on. True story.

\[00:44:06.13\] So you've got a menu that comes on and off the screen, right? You interact with something and Boom! There's a menu there. So let's talk about what happens there. Your brain, when it's just jump-cutting on and off - jump-cut is a term from film, it means when the camera just immediately cuts to a different position; there's no panning, the camera's not physically moving, it's just... You're looking at one person's face, and now you're looking at another person's face, and you've gotta infer that you're looking in another direction now. So when the human eye sees something change on the screen, it does this little magic trick where it goes, "Oh, the screen hasn't changed", does a quick check of the screen, sees that nothing changed but this one bit of information is still there, so it infers that whatever action you took prior to that new thing being there must have caused it, and that there was some in-between state - maybe if it's right below the thing you clicked, then it must have dropped down from the thing that you clicked; or if it's filling up the whole page, it's like a modal that has expanded, and if you get rid of it, the page will return.

Now, think about how you could use animation to keep the brain from having to do all those checks and make all those suppositions and run that extra route. What you could do is you could have that drop down physically \[\\00:45:21.21\] or you could have it fade in. Now, there are these things called vestibular disorders - a certain number of the population is afflicted by these, wherein movement on a screen will cause them to feel a certain amount of nausea or discomfort, maybe a headache. For some people it's utterly debilitating. So if you have a lot of motion, a lot of blinking things, a lot of moving things on your page, it can cause them to really not wanna use your website.

For these users, you probably wanna limit yourself to things like fades or color changes, stuff that doesn't move too much. You can never really go wrong with an opacity change is what I like to think, because these are less triggering for people with vestibular disorders. If you have a large user base and you really want to use motion to connect two disparate things to each other - which there are use cases where using motion to connect two things makes a lot more sense than a fade - then you're probably gonna wanna test on people or offer them the option to turn animations off on your page. I'm actually looking forward to a day when browsers have a reduced motion option the same way iOS does.

**Adam Stacoviak:** That's interesting, I never thought about... Because we as developers, we as people who make the web, as you said earlier, we think visually, we think you're gonna advise people on a utilitarian way... It was more like form versus function, what you were saying. "I'm gonna tell you how to do it, not so much how to make it pretty" were some of the words you used. And I never really thought about if I wanna put animations or motion into the things I'm doing on my web interface, whether I should offer the option to not, for those people who have that condition.

**Rachel Nabors:** It's something that we're going to have to think about more and more in the future. But you should remember that most apps on iOS also do not offer people options to do this, so...

**Adam Stacoviak:** ...don't worry that much?

**Rachel Nabors:** Well, I'm saying you should worry, but it's one of those things where you have to decide how much you worry for your users. That's something you're going to have to take on yourself. Accessibility is a big deal on the web right now, and I'm totally 100% behind it. But you can make things 100% everywhere - runs great without Javascript, perfectly accessible, dot the i's, cross the t's, works for people with every single kind of colorblindness that there is... You can spend a lot of time doing all of that, but some of your users may not have those problems, and that might be a wasted effort.

It really comes down to having a conversation with your users. The more users you have, the more you gotta take in these things to be concerned with them. And you have to remember that sometimes if you're not taking accessibility into account, you're limiting your user base, by omission.

**Adam Stacoviak:** \[00:48:05.19\] Yeah. So you mentioned you took a new position, you accepted the offer with Microsoft to work on the Edge team...

**Rachel Nabors:** Oh, yes!

**Adam Stacoviak:** Dream with us a little bit. Pontificate where you might go, what might happen... What's gonna happen with this new change for you specifically, but also web animation - what do you see happening from this?

**Rachel Nabors:** I can't say much about where I see animation going at Edge yet, because I haven't gotten my boots on the ground yet, and also, even if I had, I'm not sure whether I would be able to talk about that. So you understand...

But let's see... I will be moving to Seattle, from Portland - I'm gonna miss Portland like crazy. But I'm also gonna be surrounded by super smart people who are actually building rendering engines, which is very exciting for me. Rendering engines are a lot of fun; every browser has one, and every browser has its own quirks. They're like individual workhorses with their own attitudes and their own problems, and you gotta go and know how to work with each of them. So I'm looking forward to getting my hands in there and seeing what it's like and learning from those people.

I don't think a lot is going to change with what I personally do, except I won't be taking on consulting clients. I'll still be going to conferences, I'll still be reaching out to people, I'll still be writing docs, I'll still be working at the W3C, working on specs that let people use animations in good ways. We could use some complex timing functions so we can export from After Effects, and have a perfect curve in our motion functions", but that's really hard to do right now because of the way CSS animation timing curves line up or don't line up with the way After Effects maps motion, and there's gotta be some ideal format there. That's a challenge that needs to be solved.

There's work with motion paths right now, which have been renamed "offset paths". I'd like to work a little bit with those, too...

**Adam Stacoviak:** ...rename?

**Rachel Nabors:** I don't wanna rename them, but I'm sure they're going to be renamed again, because "offset path" - it isn't quite clear what that does.

**Adam Stacoviak:** That's what I meant, it's not clear what it's doing.

**Rachel Nabors:** Exactly. But at the same time, it doesn't always use things that are moving, so calling them "motion path" when you can have static elements on it seems a bit misleading, doesn't it? So the idea was to call it an offset, because that way it could be set off from its original position, and it could be moving or not moving. Dan C. Wilson is a great person to follow when it comes to motion paths. I just saw him give a talk on this topic (I'm just gonna call them motion paths, because you know what I mean). I just saw him give a great talk on this topic at CSS Dev Conf. It was amazing, the CSS Dev Conf in San Antonio... So many people from the Slack channel showed up there. I think four of us - maybe five - gave talks, and they weren't all about web animation; two of us did not.

Sarah Drasner spoke about creativity in programming -- or was it Eli? Yes, Eli Fitch talked about perceived performance. Unfortunately, the portion of his talk that had to do with animation was lost during a home break-in. It's a scary story, we won't get onto it on your podcast, because this is not a scary podcast, but I do wish that those slides had not been lost to the world; it would have been great stuff.

**Adam Stacoviak:** Well, one thing I'm definitely happy about is having someone like you, as passionate as you are, leading the charts for this stuff, because we need people like you to care so much about this, to wanna work so closely with people who are developing rendering engines to improve them and make them better, and ultimately educate us all on better ways to use web animations and how to document them and all those good things.

Is there anything else you wanna share with the audience that I haven't asked you?

**Rachel Nabors:** \[00:52:00.01\] Well, I won't be giving as many workshops in the future as I have been, so I guess it's timely that I am launching my own little CSS Animations and Transitions workshop, which I believe you can get to at RachelNabors.com/css-animations-course. That's the only thing I have to announce at this time. I'm really looking forward to getting back home... I'm taking a train there.

**Adam Stacoviak:** Oh, really?

**Rachel Nabors:** After All Things Open I'm gonna be getting on a train.

**Adam Stacoviak:** That's a long trip.

**Rachel Nabors:** It is. It's like three days across the top of the United States.

**Adam Stacoviak:** Wow. Any stops along the way?

**Rachel Nabors:** No, not really.

**Adam Stacoviak:** Just a straight train ride?

**Rachel Nabors:** I think I'm gonna stop off in Washington DC to see a friend, and then I'm gonna do my lifelong dream of a train ride across the United States. And then it's back to work as usual, at Microsoft.

**Adam Stacoviak:** Well, thank you so much, Rachel, for stopping by and speaking at this awesome conference, and giving so much back to this awesome community. Thank you so much.

**Rachel Nabors:** Thank you for having me, Adam, and thank you for producing this podcast.

\*\*\*

**Adam Stacoviak:** Alright, that was Rachel Nabors, talking about all things web animation. Learn more about Rachel at RachelNabors.com.

Next up is Jono Bacon. I talked to Jono at All Things Open about his talk, "Building a Community Exoskeleton" and how open source communities organize.

Before this next segment, I wanna mention our friends at Toptal.

**Break:** \[00:53:24.05\]

**Jono Bacon:** I'm Jono Bacon. I'm originally English, but I live in California now, in the Easy Bay, and like a lot of people in this industry, I do a certain amount of travel - which is always fun - so home changes from time to time.

**Adam Stacoviak:** So home is wherever YOU are, basically.

**Jono Bacon:** Yeah, home is sometimes the hotel, but most of the time, thankfully, in my actual house in America.

**Adam Stacoviak:** So we know you - at least to my knowledge; I know of you - about community. I first heard of you when you were employed at GitHub, around community there... You gave a talk today around the Exoskeleton - was it today or was it yesterday?

**Jono Bacon:** Yesterday, earlier on.

**Adam Stacoviak:** Yesterday. I'll just say, you gave a talk here at All Things Open about a Community Exoskeleton - was that the talk name?

**Jono Bacon:** Yeah, that's right.

**Adam Stacoviak:** I've got it up here... "Building a Community Exoskeleton" - is it like scaffolding, basically, for a community?

**Jono Bacon:** Yeah, community has been my passion since I've first heard about Linux and open source, back in 1998. The thing that switched on in my head was, "This is how we make the world a better place, the way in which we innovate." The way we help people to live happier lives is, as human beings, we want to be connected to people and we want to do things that have meaning, generally.

Without sounding like Tony Robbins, the pathway to a happier existence is living a life of dignity, and to live a life of dignity, you need to feel some self-worth, and to have self-worth, you need to have access to make a difference. So in some capacity, for some people, it's Elon Musk it's changing the whole world, for some people it's making a difference in their family or in their local community. So that's been my passion, and it's a fascinating jigsaw puzzle to figure out, like "How do we help groups of people to work well together?"

\[00:56:02.18\] The community exoskeleton essentially is a metaphor for -- you know, if you're gonna build an iron man costume for helping someone to be successful in a technology community, what are the bits that you wanna build into that, and how do we do that? The talk is really more about how do you go about building a community in a predictable way and delivering good results.

**Adam Stacoviak:** Take us back to when you got excited about community, when that became a passion for you. Where were you at, what were you doing, what happened in your life that made you think "Community is my thing. I'm good at building community, I'm good at getting people excited about community"? When was that for you?

**Jono Bacon:** I remember it like it was yesterday. I was 18 years old, I was living at home with my parents... My brother, Simon, who got me into computers when I was a kid, came back - he had been in the U.S. for a couple of months - and I was winging about Windows. He said, "Don't use that Mickey Mouse operating system. You should use Linux." Back then, Linux was a bit involved, shall we say... So I went and bought this book - I was working in a bookshop part-time; I bought a book and it had a CD in the back, and I installed this version of Slackware. He installed it for me and then wrote the login details for -- it removed Windows from my machine. This was like hardcore training camp, kind of get going...

He wrote the login details on a post-it note and then immediately left. I was just stuck with Linux on my machine, and this book. The technology was a little overwhelming for me, because I wasn't particularly technical back then, but I read the first chapter of this book, and it said there's people all over the world, and they work together electronically on the internet to build this operating system. For me, the idea of electronic collaboration was in itself fascinating; it wasn't really much of an internet back there, in a general setting...

**Adam Stacoviak:** What year was this?

**Jono Bacon:** 1998.

**Adam Stacoviak:** Okay. So I was 18-ish, going on 19 in that timeframe. How old were you?

**Jono Bacon:** I was like 18. Were you born in '79?

**Adam Stacoviak:** Yeah.

**Jono Bacon:** Same here.

**Adam Stacoviak:** Same age. What month?

**Jono Bacon:** September.

**Adam Stacoviak:** March.

**Jono Bacon:** Really?

**Adam Stacoviak:** I got to beat you by just a little bit.

**Jono Bacon:** Two good-looking guys with similar birthdays.

**Adam Stacoviak:** Right, there you go! \[laughter\]

**Jono Bacon:** So yeah, so it was...

**Adam Stacoviak:** ...not much of an internet back then.

**Jono Bacon:** Not much, and I was getting online with BBS and stuff like that. And for me, being in England, it was restrictive because we had to pay per minute. Over here, you had free local phone calls, but back then you had to pay ten pence a minute. But I read this chapter, and you know, I was a long head kid in Southern England at the time; I didn't feel like I had much of an impact in the world, but there was something in me that just resonated with this notion of people working together. It's such a cliché to say, but a light bulb went off. It really did. And from that moment forth, I was just captivated by it.

What I loved about it was as a kid I didn't feel like I could have much of an impact in the world, but back then I started organizing the website for Linux users in the U.K., and I joined an open source project and exhibited at a conference, and I started meeting really cool people. It was awesome, it was what it should be for kids getting started in technology. I feel so fortunate that I was able to experience that, whereas some other obviously haven't.

**Adam Stacoviak:** So break down this exoskeleton.

**Jono Bacon:** In a nutshell, the way I look at it is all communities can be broken into two types; I call them read and write. Read communities are where you get together to consume something. That might be Lord of the Rings, Taylor Swift, Megadeth, whatever it might be. That's people who just get together because they have a common interest. Those communities are relatively straightforward to build, because people just need the resources to spend time with each other, to communicate...

**Adam Stacoviak:** To consume...

**Jono Bacon:** Yeah, and a level of com(munity). The expectations of those communities are relatively simple.

\[00:59:55.28\] You then get write communities where people get together because they wanna build something together, and open source is the example of that, or Wikipedia, or OpenStreetMap, and they're way more complicated, because there's all kinds of expectations around how decisions are made, how we collaborate, how trust is distributed and all this kind of stuff. So my basic philosophy is, first of all, pick which community you are. Then what you need to do is essentially build a user persona around the kind of people you wanna bring in.

For most open source communities, you may have personas around developers or translators or advocates or whatever else

**Adam Stacoviak:** So roles are types of people...

**Jono Bacon:** Yes, each role, then think about the persona - how do these people consume? What motivates them? What are the fears that they have? And that paints a picture of the people you're trying to attract. You have to do that first, before you can really understand how to bring people in.

Then the next step - when someone joins a community, they typically get onto what I call an on-ramp, which is "What are the things you need to do to make your first contribution?" For example, in open source there's typically six things that you need to do: you need to discover that you can actually help; you need to have permission from the project to actually come and do something. Then you need to setup your toolchain, learn the skills to participate, find something to work on, get help and feel appreciated once you've done that first thing.

It's amazing how many projects don't get that right, where people get stuck at stage two. I had a bit of a rant in my session earlier on... If you're asking people to go through these complicated lists of instructions to setting up your tools and building the project and stuff like that, you've already failed. There's only so much attention in the world, and you're trying to capture someone's attention away from Playstations and TVs and whatever else. You have to get this stuff right.

Setting up your toolchain should take minutes; not that long. I like to think about that with every step of the on-ramp. Then what happens is when they've made that first contribution, I think there's three broad groupings in the community: new people, regulars and leaders. And you want people to transition between those states.

When you're new, you wanna focus more on mentoring and incentivizing people to start. But for people who are regularly participating, that's more of a circular workflow. Understanding context, discussing with other members of the community, knowing what to work on and then write code, write tests, submit pull requests, continuous integration deployment, all that kind of stuff. That circular workflow is repeated over and over again in communities for regulars, and you wanna make sure that bits of it don't feel frustrating... Like when a little barb sticks out - like if it's irritating to submit a pull request, then people get frustrated and they move on.

So the workflow is critical there, and the way we move people through those three different segments is by essentially engaging with them in different ways, and then incentivizing them. So the way in which you engage new people is lots of personal support and help. But the way in which you engage your leaders is very different. You want those people to feel like they can play an active role in making decisions and helping other people, and things like that.

The exoskeleton essentially is "How do we put those pieces in place?", but what's really important is that underneath that, the basement of all of that model is the psychology of how people operate. We're animals, and we forget that; some people are more animals than us. \[laughs\] We're irrational in really predictable ways, so it's important that we understand the psychology of people, because that's the skeleton on which we build all of this community stuff on top.

**Adam Stacoviak:** So what is it that you do nowadays? Do you do contracting? How are you currently impacting the community? Are you consulting at large? You had this great idea, which sounds awesome and I think it's great - how do you help people implement it? Are you for hire?

**Jono Bacon:** \[01:03:55.22\] Yeah, so I'm basically a consultant. I set up a consultancy practice about five, six months ago. I'd already been consulting for years on the side, here and there. And frankly - this is gonna sound dis..., it's not meant to - I wrote a book on community called The Art Of Community, and it was mainly people who read the book who said, "Could you help us build a community?", and that's how it came in.

But I always had limited time, particularly having a family... So I thought, "You know what? Let's see if we could do this full-time." So what I tend to do is work with companies and help them to build out a community strategy and then to help them execute that strategy. The execution piece varies, because some companies want me to build it out for them, and some companies want me to hire someone and then train them, or some companies want somebody else to build it. Because, you know, you don't necessarily want to pay consultant fees where you could pay a community manager, for the execution piece.

I'm really enjoying it, because I love the diversity... Throughout my career, I've always loved to just work with companies and help projects as well. Where I've worked - at GitHub, Canonical or XPRIZE or elsewhere, I've always been focused on one organization, and that's cool... But now I get to work with Huawei and Microsoft, for the Creative Commons, data.world, HackerOne, GitLab...

**Adam Stacoviak:** Big influence.

**Jono Bacon:** Yeah, and I enjoy it because it's a strategic... You know, the relationship when you're a consultant is different to the relationship when you're an employee, because you're being brought in for the very specific focus that you have as a consultant. So as an employee, often you have to affect change in a bottom-up kind of way, whereas a consultant, you have permission in many ways to just be blunt about the way that you're doing things. You don't hire a consultant just to be told what you wanna hear.

**Adam Stacoviak:** You can call the shots a bit more. You have a bit more control because you can walk out... For the most part.

**Jono Bacon:** Yes, and it's challenging but it's fun. One of the main reasons in what I like to do is I want to learn every detail of how this stuff works. My primary goal in life is to really understand every nuance of how we build communities and then to translate that information into reusable information that other people can use. Not just selling that, not just doing that as a consultant, but speaking at conferences or writing books, or talking on podcasts, or whatever it means. I think this is how we make the world a better place.

**Adam Stacoviak:** So on the documentation side of things, how do you document some of your ideas? Do you have any upcoming books, any course plans? How can people tap into, aside from hearing you at a talk or at a conference or on a podcast like this...? How can people tap into some of the -- or even without having to hire you? How can they asynchronously pull knowledge out of your -- or leverage some of your experiences?

**Jono Bacon:** Yeah, another one of the reasons why I wanted to consult was to focus more of my time on doing exactly that. I wrote The Art Of Community, it's published by O'Reilly, but it was important to me when we talked about that book to make it available under the Creating Commons, so people who can't afford to go out and buy it can utilize this, so people can go download that as well.

I do a lot of speaking at conferences, but also I'm writing a lot more on my blog, as well. I'm writing pieces about different elements of this. For example, I wrote a piece on, you know, some interesting research has found that if you over award your community members, you get worse performance. We usually think, "Oh, when they get to this level we give them hoodies and then we'll send them laptops." You can actually get to a point where people stop performing. They're so focused on getting the rewards that they get freaked out and they don't actually do very well. I wrote a little piece on that.

My blog is jonobacon.org and I'm just writing more and more content there. I am working on another book right now, which I'm looking forward to getting cracking on.

**Adam Stacoviak:** Do you have a working title?

**Jono Bacon:** Not yet.

**Adam Stacoviak:** Is it about community?

**Jono Bacon:** Yes.

**Adam Stacoviak:** \[01:07:49.15\] That was a trick question.

**Jono Bacon:** \[laughs\], Who'd have thunk it eh? For me, a lot of it is just building relationships and having conversations with people. The thing that kind of sucks about being a consultant is I don't wanna give off the vibe that you can only talk to me if you pay me. It's a way of earning money for me, but what's way more important is getting the ideas out there and...

**Adam Stacoviak:** Once it gets past a certain point, that's when it's paid, or something like that.

**Jono Bacon:** Yeah. Right now, a big chunk of my time is completely unpaid, because there's so many projects that I'd like to play a helpful role in, and I don't want them to pay me. I wanna have an impact; I wanna be able to get off this rock and say, "I've made a tangible difference in this." The only people who can play a role in that is people with fat wallets, so...

**Adam Stacoviak:** What do you think about a conference like this, All Things Open? Is this your first time here? Have you been here before?

**Jono Bacon:** I came for the first time last year, and I was absolutely blown away. Todd Lewis who is the main organizer, he and I have become friends over the last year, and we talked a similar kind of point - I love what you're doing, I love the personality of the conference. It's a tech conference, but it's got a little bit of character, a little bit more character than some others. And I said to him, "Just let me know if I can help with anything", and we've stayed in touch. This year I was MC-ing the keynotes and doing some talks, and stuff like that.

**Adam Stacoviak:** So you were the MC?

**Jono Bacon:** Yeah.

**Adam Stacoviak:** I was stuck here.

**Jono Bacon:** You've been working, man.

**Adam Stacoviak:** I'm in this booth the whole time, talking to people... This whole conference, this has been my conference experience right here. But the good thing is I've been talking to a lot of cool people from this conference, both speakers and attendees, and I'm blown away just like you are.

**Jono Bacon:** It's awesome, isn't it?

**Adam Stacoviak:** I didn't come last year, but I came this year. Someone else said they compare it to the U.S.'s FOSDEM, it's got that kind of vibe, for example, around open source. I think it's a cool community. I've met so many Changelog fans come by and they're like, "Hey, I love The Changelog", high-fiving... They just keep walking by and I'm talking to people.

**Jono Bacon:** You've got a great spot here as well.

**Adam Stacoviak:** It's a pretty good spot, I like it. We're actually closing down... It's like the end of this show, there is no one else here besides the disablers, the deconstructors, and we're closing it down.

**Jono Bacon:** Yeah, it's interesting because there's a conference OSCON that O'Reilly put on, which I'm a big fan of.

**Adam Stacoviak:** Right, we'll be there, in Austin.

**Jono Bacon:** You're going there?

**Adam Stacoviak:** We'll be there in Austin.

**Jono Bacon:** Nice, I'll be there as well.

**Adam Stacoviak:** We're doing something just like this.

**Jono Bacon:** Sweet. Well, there's OSCON and there's another conference which happens in L.A. called SCALE (Southern California Linux Expo). Have you been there?

**Adam Stacoviak:** No.

**Jono Bacon:** You should check that out, it's cool. A buddy of mine Ilan Rabinovitch one of the greatest people in open source... He runs that, with obviously a lot of other people. He gets very angry whenever I tell people that he does it; he's like, "No, there's a team out there.' And he's right. He's right, but like, "Take the credit, dude." \[laughs\]

But All Things Open to me, it's as if OSCON and SCALE made out, you know? It's got the business value of an OSCON, but it's got that community spirit -- I mean, there's business value at SCALE as well, but SCALE is known for its community spirit, and I love that. Also, it's different... It's out in Raleigh, it's not another thing in San Francisco or Austin...

**Adam Stacoviak:** Right... You've gotta travel to get there.

**Jono Bacon:** Yeah, I like this town.

**Adam Stacoviak:** Yeah. I mean, I had to travel here too, from Houston. I've met so many locals, too. A lot of people from Raleigh come to this conference...

**Jono Bacon:** Nice people.

**Adam Stacoviak:** Yeah, great. I think there was about 2,500 people here too, which was a good turnout for a conference, which means the community is certainly growing and thriving, which is a good thing for this conference.

**Jono Bacon:** \[01:11:54.19\] And it's up every year. This is the fourth year of All Things Open. Last year I think there were about 1,500 people; this year it's 2,400 people. It's growing. Todd and the team do a really tremendous job, and I feel honored that I could play a small role this year. I'll be here whether I'm speaking or not speaking next year, for sure.

**Adam Stacoviak:** So what have I not asked you that... To the audience listening - advice, an anecdote, closing thoughts... What do you wanna shut down with?

**Jono Bacon:** That's a good question, I don't know... I mean, I don't really have much of an agenda. I think what you do is cool, and thank you for inviting me on. I love what you do, I think you're a good guy, and what you're saying about the potential with what you're doing - there's loads of potential, right? Podcasting is interesting. I do a podcast with some friends, Bad Voltage - that was just kind of like... I latched together some friends, switched the microphones on; it's not like a big, professional operation by any stretch, but I know there's a lot of work in doing this kind of stuff well... But there's so much potential, I think particularly as people are wanting to consume media in more personal ways, in smaller ways... More and more people that I know, for example, are just getting into YouTube. Not because of YouTube, just because it's different to get in television on like cable. And it's cool, you get really detailed, really focused content that's fun to listen to.

**Adam Stacoviak:** You get to focus on that niche that you thrive in, and on the personal side, I love this because we're sitting here face to face, in an empty conference hall basically now... Earlier there was much, much more traffic, everybody was still here, but now we're closing down the shop. But this is a face-to-face conversation.

**Jono Bacon:** Yeah, I love it.

**Adam Stacoviak:** ...it just so happens that we take it and publish it, so that everybody else can listen to it, too. We did it for All Things Open because... The interesting thing here is our new tagline is "Hacker To The Heart." We sat down basically in a bunker for two days, took away our phones, took away our computers, no internet connection, and Jerod and myself, my wife, Jake and the team from Elevate (which is our branding company; they worked with us to get to where we're at right now branding-wise), we sat down and we said, "Okay, so who are we?" A brand-intensive for two days straight, basically... Two eight-hour days, nothing but finding out who we are. And the reason why I tell this story is because we got to the point where we were like, "The essence of who we are is about people."

**Jono Bacon:** Yeah, absolutely.

**Adam Stacoviak:** Much like you'll find with your message of your community and what you do - it's all about people, it's all about relationships, it's all about people's stories... It's not just about the software. Sure, that's a huge component of it, but it's more so about the people and the community.

**Jono Bacon:** I'll tell you what... I'll give you one example that's lived with me for years that I think perfectly - in my mind, at least - encapsulates the impact of building community effectively, or that it can have in someone's life. When I used to work at Canonical, the people who make Ubuntu...

**Adam Stacoviak:** I love Ubuntu.

**Jono Bacon:** Yeah, I was there for like just under eight years, and it was an absolute blast. Shortly after I joined, I get an e-mail from this kid based out in Africa, somewhere - I forget exactly which country in the continent it was - and (I think he was like 12, 13 years old) he lived in a rural village and he spent his entire week doing chores around the village and basically earning money - he didn't have a computer - and what he'd do is he'd basically earn his money, and then on the weekend on a Saturday he'd walk three hours to his local town, take that money, buy an hour's worth of internet access and contribute to Ubuntu.

**Adam Stacoviak:** What?!

**Jono Bacon:** And I just thought to myself, when I got that e-mail I was like, "My job in Canonical, in Ubuntu is to help that kid get the best hour of his life", but my job more widely in our industry is help everybody empower kids like that to get the best out of their hours. It was just such a visible demonstration of when you can connect somebody's passion with a way in which they can make contribution effectively and they can feel a part of something...

\[01:16:06.19\] I mean, just look at Wikipedia, look at open source - it's amazing, and we haven't even scratched the surface of figuring any of this stuff out and that's what blows my mind. It's a good time to be alive. We're gonna do some cool stuff.

**Adam Stacoviak:** Absolutely. The one thing I'll close with is -- on that piece there was getting to the heart of it... That's where our tagline came from, getting to the heart, and that's what this conference is about, that's what this series is about - it's about helping tell the stories from this community, getting to hear this piece from you here, your passions for community and help you share with everyone else how to build that exoskeleton for their community.

I'm so glad that you're here to share that message, and the book coming up, and the blog series that you're writing, all the consulting you're doing - I appreciate your work in the community, man. Thank you very much.

**Jono Bacon:** Likewise, man. Thank you, I appreciate you having me on.

**Adam Stacoviak:** Thank you, Jono.

**Jono Bacon:** Thanks, bro.

**Adam Stacoviak:** I appreciate it.

**Adam Stacoviak:** Alright, that wraps up our anthology from OSCON and All Things Open. I hope you enjoyed the conversations Jerod and I were able to have at these great conferences; I know Jerod and I definitely did. Taking with people face-to-face is so awesome, and being in the trenches with fellow community members is where we like to be.

If you're listening to this and you run a conference, get in touch. We'd love to help you share the stories from your conference. E-mail us, editors@changelog.com and thanks again to our friends at OSCON and All Things Open for working with us, and our friends at ThoughtWorks who run GoCD, Rollbar and also Toptal for sponsoring this show.

Our theme music was created by Breakmaster Cylinder. Last but not least, thanks to Fastly, our bandwidth partner. If you're impressed by how fast you can download our shows, it's because of Fastly. Head to Fastly.com, tell them Changelog sent you, and thanks for listening.
