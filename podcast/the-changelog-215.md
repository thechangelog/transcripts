**Adam Stacoviak:** Welcome back everyone. This is The Changelog and I'm your host, Adam Stacoviak. This is episode 215 and today on this show Jerod and I are talking to David A. Wheeler. He's from the Core Infrastructure Initiative, and specifically we talked about the CII Best Practices Badge program. We talked about what this program is, where it came from, who thought of it, who developed it, why Heartbleed inspired it, and we also talked about why you should get certified and what certification means.

We have two sponsors today on the show, Linode and Toptal

**Break:** \[00:00:42.19\]

**Adam Stacoviak:** Alright Jerod, we're here with David A. Wheeler. Now, the A in the middle there is pretty important, because if you search for David Wheeler, what do you find?

**David A. Wheeler:** Probably a whole bunch of folks. \[laughs\]

**Adam Stacoviak:** A whole bunch of folks.

**David A. Wheeler:** I'm happy to talk to people as David, it's just A is my middle initial so people can find me later.

**Adam Stacoviak:** Gotcha. You know, like most good shows for us, this came from a ping, and this is actually from David himself. Give us a breakdown of what this ping was all about.

**David A. Wheeler:** Well, actually I've been listening to the Changelog for some time. I'm working on this project called Best Practices Badging project for the CII - I'm sure we'll talk about that in a moment - and I thought "Hey, who would be interested in this?" and "Oh man, I bet a lot of people who listen to the Changelog would love to hear about this", so I contacted you guys and here we are.

**Adam Stacoviak:** You've got lots of energy, David, I like that. You come on a show like this, and you go on pinging like "Who best to tell my story with than the Changelog?" That's awesome.

**David A. Wheeler:** You're welcome. I enjoy listening to you guys, so thanks for having me on.

**Jerod Santo:** I love it, too. In the pre-show David mentioned that he listens to our podcast, but he listens to us at 2.4x, which is just crazy fast, so I'm having a hard time keeping up with you, David. I gotta slow it down a little bit.

**Adam Stacoviak:** Maybe that's why he's got so much energy, because he's a 2.4x listener.

**Jerod Santo:** He wants to get a word in. \[laughter\]

**Adam Stacoviak:** That's kind of funny.

**David A. Wheeler:** Well, it's more because there's a lot of good stuff out there and it's kind of a firehouse to keep up, so I do what I can. I try to speed up my reading, speed up my listening so I can keep up.

**Jerod Santo:** Well, from our perspective we saw that ping, and we'll tell you, David, not very often do people ping us about themselves and get on the show. I think you're number two. The first one I believe was Evan You with Vue.js. He pinged us asking to be on, and his ping was quite impressive, and so we said "Yeah, come on on." Lots of times people are pinging about other projects. In your case I wasn't quite sure about the CII Best Practices Badge as a topic until I started hearing our friend Daniel Stenberg blog about it on a repeated basis and trying to get curl certified. So that certified this topic to me, and we're really glad to have you on the show.

**David A. Wheeler:** Thanks. He was very instrumental. He was one of the early people who reviewed it and provided a whole lot of comments. And curl does have the badge, I'm sure we'll talk more in a second, so I really appreciate that.

**Jerod Santo:** Very cool. Well as you know as a listener, before we dive into the topics we like to dive into the history of our own guests a little bit, and just hear where you're coming from. So if you had an origin story to tell, could you share it with us?

**David A. Wheeler:** \[00:04:04.26\] Sure, although my origin story is a little odd in some points... My first computer was actually in my middle school. They had an ancient PDP-8 which had six KB bytes total memory and a literal front panel. But as soon as I got to use that thing I was hooked. I loved computers and have loved them ever since.

A little later on I ended up with an Apple II and just studied the heck out of it. I think there was probably a time when I could have rebuilt it from transistors, because I thought it was incredibly amazing that you could do this thing called programming. And ever since I've been working very much on anything relating to computers, how can we make software, how can we make software better...

I've been doing since the '90s a lot of work relating specifically to either open source software, and I've been doing security even before that. So I'm really, really interested in open source software, I'm really interested in security, and that kind of brings you up to date where my actions are.

**Jerod Santo:** One of the interesting bits I pulled out of your bio which caught my eye was this line about the Scepter of Goth.

**David A. Wheeler:** Oh, yeah!

**Jerod Santo:** In the '80s you were the maintainer of the Scepter of Goth, which is the first commercial multiplayer role-playing game in the US and perhaps in the entire world. Can you unpack that for us and give us some details?

**David A. Wheeler:** Sure. You're pulling my way back machine.Yeah way, way back. I don't know if you remember Adventure and Zork and that sort of thing, but they were these text-based game where you could type back and forth to each other... Sorry, not back and forth to each other, but type in "Get thing/Drop Thing/Kill Troll", and basically some folks had the idea of "Well, this should be cool as a multiplayer game." This is back when modems were just becoming available and that sort of thing, and I was part of a company which basically ran as a franchise, this Scepter of Goth thing, where basically people would log in with their modems and they could work with other people, choose various characters - if you're familiar with \[unintelligible 00:06:31.10\] you've got the right idea. So you choose your own character, over time you get experience, you level up... A whole lot of mechanisms that now look kind of normal and every day and lots of systems use it, but it was kind of challenging in the first ime. "Gee, nobody's ever done a multiplayer all-time game before. How do you do this?"

We had all sorts of weird problems making that work, but it was a lot of fun.

**Jerod Santo:** Well, interestingly, just reading it I assumed it's mid-eighties and it's a multiplayer, so it must have been a card game or one of those book games where it reads out the scenarios. But this is actually a digital online experience for people.

**David A. Wheeler:** Oh, absolutely. "Go talk to the bartender" and that sort of thing. Now, the computers that we had at the time were really pathetic we were running these out of an 808-6 with 4.7 MHz running 16 users, so we had to do a lot of tricks. One of the big tricks we did which always tells some people, the dungeon masters could quietly show up and pretend to be some of the characters, and all of a sudden that bartender had amazing AI. \[laughter\] It only took a few times for people to be very impressed by that. But you could run around, get the monsters, try to find the sharkies to go buy your stuff, who was always getting shot down and moved somewhere else...

\[00:08:09.11\] People had a lot of fun with that. People still contact me about that. Of course, it's long since obsolete, people moved on, but it was kind of a cool experience at the time.

**Adam Stacoviak:** I'm curious about the maintainer side of that. If that's part of your origin story, it's not what you said, it's in what Jerod brought up from your bio, but it's in there for a reason, right? What's it like to maintain that?

**David A. Wheeler:** I remember one night where I was drinking, I think it was my second big gulp jolt at three in the morning, trying to fix a nasty, horrible bug. It was all in C, heavily optimized, with all sorts of special optimizations to try to coax out of these really slow, low-memory machines the kind of performance necessary. And I remember spending days optimizing one particular command, the follow command, but it was the way that you managed to get groups together, so it was important to get right, and the number of edge cases were ridiculous. Things like, "Well, wait a minute, you may be following someone who's invisible, so other people can't see him, and then a monster may be following you..." All sorts of crazy edge cases they had to deal with.

**Adam Stacoviak:** I think that Jerod is still involved in your system right now, because three jolts, those things were actually outlawed in certain states, because they had so much caffeine.

**David A. Wheeler:** Well, I remember my hands vibrating on the keyboard after one of those, so...

**Adam Stacoviak:** That's a fun story.

**David A. Wheeler:** Thanks, thanks. We had fun. There are other stories we could tell some time, but after that I was like, "Maybe I should do something else." \[laughs\]

**Jerod Santo:** So up to modern day where you're involved with this Best Practices Badge program, which is a Core Infrastructure Initiative, which is part of the Linux Foundation... So a couple of moving objects here we'd like to kind of define and nail down, and especially your relationship with these organizations - if you're gainfully employed, or are you running it, or it's a volunteer thing? Give us the rundown on the players involved in this situation.

**David A. Wheeler:** Sure, so let me pull out the baseball cards here so we can identify who's who. I think a lot of your listeners are probably already familiar with the Linux Foundation. They employ somebody called Linus Torvalds - you may have heard of him - and some other folks. They actually run a whole lot of projects, including the Linux Kernel as far as funding that and so on. But two years ago Heartbleed came out - big vulnerability in OpenSSL and the Linux Foundation looked and said, "Wow, a) that's a problem, but b) that's a symptom of a bigger problem. What can we do to fix that problem?" So they established this thing called the Core Infrastructure Initiative. It's not a very clear name, but the idea behind it is actually very clear. It's basically, "Can we identify the software that's important and find ways to improve things so that the software that we all depend on is more secure, in better shape, and that sort of thing", and even actually funded some specific projects. For example, they've actually put money into OpenSSL; they've put money into several other projects, basically trying to identify some of the key software - really important. "We need to make sure that stuff is more solid that it is, in case there's an issue."

One thing that immediately became clear is there is no way they can find everything, so they're also interested in some projects that can kind of raise all boats as it were, and that's where this Best Practices Badge comes in.

\[00:11:57.22\] The idea is hey, there are clearly some practices that are generally accepted as "These are things you should be doing" but it doesn't mean everybody is actually doing them. So can we come up with a list of "Here's the criteria that's generally accepted. This is what open source software projects should do", and then if you actually are doing them, you're getting a little badge. That, of course, helps users figure out "Hey, is my project okay or not? Is this project I depend on in decent shape, doing the basics or not?" And it also helps projects, because most people involved in projects, they wanna do the right stuff. It's not always obvious when you're trying to fix some specific bug, "Oh, wait a minute, you've got a basic problem here with your project." So it kind of helps them also figure out what the basics are.

**Jerod Santo:** When you talked about the Core Infrastructure Initiative you said that they raise funds, and if you look at the homepage there's quite a list of tech companies that are providing funding for this: Amazon, Google, Facebook, IBM, Microsoft... All the big players. And a lot of industry leading security experts as well; you have Bruce Schneier, Dan Kaminsky, Alan Cox and so on and so forth. So are these people paid as advisors, are they employees of this...? I'd just like to know how these things fit together.

**David A. Wheeler:** Yeah, there's probably other people who might be able to better answer all of that than I would, because I focused more on the badging and census work. But basically what happened is that each of those companies that you mentioned have kicked in funds, either to the Linux Foundation or, if you're looking at the CII list, that's all the folks who have kicked in money specifically for the Core Infrastructure Initiative. "We all depend on these programs, and we wanna make sure that they're healthy. If we put money together, by collaborating together with the funding we can help make those projects more healthy, better and so on", and they and everybody else reaps the benefits.

As far as who gets paid and so on, let's see... The Linux Foundation itself is something called a 501c6, which is basically a nonprofit industry consortium. Some of the people that you've mentioned there, they're actually employees of other companies, and they basically provide some time... They're funded by those companies to help oversee to make sure the Linux Foundation, the CII are on track, doing the best they can. And they certainly do direct, but they also provide great advice, because a lot of those people of course have been around in the industry for a long time; they're helping make sure that we get good things going.

The Linux Foundation CII itself has employees... I'm actually not an employee of the Linux Foundation. If you wanna follow the money stuff, I'm actually an employee of a different nonprofit company, contracted to the Linux Foundation. The Linux Foundation actually reached out to me because I'd been interested in open source security really since the early '90s, so I've been doing this stuff for a long time.

When they said, "Hey, who do we know that's really interested and has done a lot of background work on open source and security?" apparently I was on their shortlist. They reached out and said, "Oh man, this would be awesome. Let's make it happen", so that's what we did.

**Adam Stacoviak:** So what do you do from day to day then? Give us a lay of the land of what's a typical day of open source security role for you.

**David A. Wheeler:** It kind of depends on what I'm doing, on the particular projects I'm working on, but let me talk about the two projects for the CII I've been working on. One was the census project. One of the first things they needed to do was figure out "Well wait a minute, who should we send money to?" So I actually whipped up relatively quickly an effort to quantitatively evaluate projects. I'm sure you can appreciate that that's really hard to do, and it's particularly hard with all the different programming languages that exist out there.

\[00:16:13.12\] So we basically identified some metrics that we could use that would at least give us some indications of risk, scored a whole bunch of projects and helped to identify some of the projects that were really important and had real concerns. I don't think it will be terribly surprising that some of the ones we identified include things like OpenSSL, the Network Time Protocol daemon, and various other things that everybody depends on, they're really important, but for various reasons there are reasons to be concerned about the project.

They took that data... Now, that wasn't supposed to just give them the answers, so as to help them make a decision, and that's what they did. That seemed to have been really helpful, and I'm probably gonna go back and do a round two of that thing.

For the badging project, again it's the "Hey, we've got this idea. Can we identify the criteria and help projects determine if they need them or not? If so, they get a badge." I'm actually the project lead. I'm basically the guy who grabbed information from all over, talked to everybody, came up with draft criteria... I should note that the badging project and actually the census project themselves are both open source software projects. We've got mailing lists, we've got a GitHub location, all the code's available, MIT license in both cases for the code...

So basically, we came up with drafts and then begged for feedback from lots of folks. You mentioned Curl, that's one thing... I probably should give shout outs for more people than I can easily remember, so my apologies for all I've missed, but Greg K.H. from the Linux Kernel, and lots of other folks actually provided some really great feedback. I should also quickly note Karl Fogel, who wrote the book Producing Open Source Software. A lot of the criteria actually derived from his book, and he actually reviewed it and gave us some great feedback. Basically, we did our best to gather the information and then put it out to the community to review, comment on, critique and improve.

**Jerod Santo:** Very cool. We'll cut you off there for a split second, David, for a break. We do have actually a little bit of a cross reference there... You mentioned Karl Fogel - he is our very first guest on our brand new show, which just launched, with Nadia Eghbal and Mikeal Rogers. It's called Request For Commits, or RFC. He's actually the guest on the first two episodes.

The show is all about sustainability, community, the business side of open source - all those cool things. So if you're listening and you find that interesting, check out rfc.fm. We'll take a quick break. David, on the other side, I do have a quick question for you, since you've been around for so long in the open source community. You have this term FLOSS and then we have this other term, OSS, and it seems like depending on how long people have been around they may use one, they may use the other... I'd like to get your take on that, but we're gonna take a quick break and we'll talk about that, as well as all the details on the badging program after this.

**Break:** \[00:19:22.20\]

**Jerod Santo:** \[00:20:27.03\] Alright, we are back with David A. Wheeler, talking about all things best practices, open source, free/libre open source software... David, I have a question for you about these terms. It seems like it depends when you come into the open source ecosystem; it's kind of a smell or a tell, depending on if you say FLOSS or if you say OSS or open source. I've noticed on your bio you have the FLOSS, and you also mentioned that you've been into it since the '90s. I'm curious about your take on that, and the change in terms, the acronyms, does it really matter...? What does it all mean?

**David A. Wheeler:** Well, I'm not sure I can completely answer "What's it all mean?"... \[laughter\]

**Jerod Santo:** Come on!...

**David A. Wheeler:** Yeah, so this really comes back to a split... A long time back the term 'free software' was used for quite some time to describe software where you can use it for your own purpose, you can modify it, you can redistribute it modified or unmodified, without constraints, like royalties.

**Jerod Santo:** We're talking about the Free Software Foundation in that case, right? Richard Stallman and the Free Software Foundation.

**David A. Wheeler:** That's right. The Free Software Foundation, for example. I think they were established in '84, and that's the terminology that they used. And this kind of software existed even before that, but it didn't always have a name.

The problem with the phrase 'free software' is what they meant was freedom, but nobody gets freedom. They assume free software means no price, so a number of people many years ago declared, "Hey, why don't we create a new term?" and they came up with 'open source software'.

Most people I think use the phrase 'open source software', but not everybody. There's a number of folks who insist on using 'free software' and typically they're emphasizing a difference in motivation. They're emphasizing the purpose of making the software is an ethical reason, not just an engineering reason. That's not always true. Some people use the phrase 'open source software' and having an ethical undertone to it; sometimes people use 'free software' in its original meaning.

Most of the times when I'm writing or talking I'm not usually emphasizing the motivations, I'm emphasizing the rights that you have when you use the software. Then you have the problem of one group calling it 'X open source software', another calls it 'free software', and in fact there's another group that wants to call it 'libre software', so "Gee, what do I do?" So when I started writing about this stuff in order to try to cover everybody, I started to use the phrase 'free/libre open source software', which is FLOSS. There doesn't seem to be any way to make absolutely everybody happy anyway, \[laughter\] but that's been my attempt trying to cover... Hey, for a lot of this stuff it doesn't matter what your motivations are. In fact, people's motivations differ depending on projects and even over time.

That phrase is often used, trying to cover a waterfront of reasons and motivations. I'm happy to use the phrase 'open source software', I'm happy to use the phrase 'free/libre open source software'. In all cases we're talking about the same set of rights, though people have different motivations for why they do it.

**Jerod Santo:** \[00:24:00.03\] Yeah. It seems like we have a standard case of 'naming things is hard' and 'operator overloading'... The similar problems we come into when we're actually writing the software is when we're talking about things, and names mean different things to different people, at different times, so you have kind of this stew of different words that we use, and terms.

**David A. Wheeler:** Right. And of course, it's perfectly okay for people to say, "Here's our particular motivation and here's why" - that's fine. But it makes life complicated when you're trying to talk about something when the motivations behind it are currently what you're focusing on at the moment. Maybe for some other things, but a lot of times when I'm writing it's not the motivations, but the results.

**Jerod Santo:** In fact, there's even a recent movement to introduce even a new nomenclature because the 'open source' versus 'free software' is so troubled, and it reminded me that XKCD, the one about - not protocols... Is it protocols? Where there's too many protocols...

**David A. Wheeler:** Yeah, so we're gonna add another one. There were 14 protocols and now there are 15, or something like that...

**Jerod Santo:** Exactly. Like, let's create one to rule them all, and now you just added another one to the mix.

**Jerod Santo:** I remember the cartoon, yes.

**Adam Stacoviak:** I'm glad we asked this question; I don't know if it requires a deep dive, but we're camping on it for a second, at least. It always feels to me like maybe FLOSS is - I really hate to say this, but it kind of feels old hat and uncool, whereas open source software (OSS) feels like new hat, cool, new hotness kind of thing, and it almost is a divide of old school open source and new school open source. That to me, as somebody who is just an observer, obviously, after all these years, it seems like that's the term that divides.

**David A. Wheeler:** I don't think that's a good way to look at it actually, because frankly FLOSS and OSS are actually from the same time period. And I did wanna respect the folks who have a very, very specific agenda - I don't necessarily agree with it, but I don't want to downgrade or make it sound as if I'm disrespecting their goals.

**Adam Stacoviak:** Not at all. That's not what I'm trying to do at all by saying that. I'm not saying that's the truth, I'm saying that seems like an observation of how it's perceived.

**David A. Wheeler:** Right. And I think one challenge is that the phrase 'free' is... I actually complained to Richard Stallman back in the '80s, it's a stupid word. Because everyone knows what free means, it means 'no price', and he insisted on it anyway. And all the confusion that came later was because he... I think you noted earlier, naming is hard, I could totally agree, but it's also important because you only have so many words and you gotta try to do the best you can to make things clear, and I don't think that word 'free' has actually helped; I think it's actually impeded communication, and that's unfortunate.

**Jerod Santo:** Yeah, and at the same time other words are also problematic, like 'open' - 'open' is another word, especially when we get into products, and Android is open, iOS is closed, and it's like "What does that mean? What's open to you? What's open to me?" These are the things we need to be talking about and come into as much as we can, where we can understand what each other means, and not just arguing about the words, but trying to overcome that subjectiveness.

It's interesting for sure, and I think Adam's point perhaps casts it a little bit differently; not that people who say FLOSS are old school and lame - or I don't know what you said, Adam...

**Adam Stacoviak:** I didn't say lame.

**Jerod Santo:** \[00:27:49.15\] Okay, I threw that one in there. So it's like, people who've come into open source software more recently, they don't have necessarily the history. The term FLOSS is less used nowadays not because it's lame or old, but I think because even the scenario that you just laid out for us may have never been laid out even on the Changelog, and so it's just like a lack of historical knowledge of the terms and their use, so...

**David A. Wheeler:** It's a general problem. People aren't aware of the history of a lot of this stuff. I actually am interested in history, both computer history and general history, and there are reasons things happened in a certain way, and I think it's often helpful to know why that is, because frankly it makes it a lot easier to understand the now when you understand where it came from.

And there's that old phrase, "You don't know history, you're doomed to repeat it"... My gosh, how many times have people repeated the same stupid mistakes in computers because they aren't aware that "Yeah, that's been done before. Here's why that didn't work".

**Jerod Santo:** Yeah. Just a quick plug for somebody else's podcast on the topic, because it's so topical - The Curious Minds Podcast recently did a two-part series about the Free Software Foundation, the Open Source Initiative... They actually got Richard Stallman to interview; at first I was mad, because we've never had him, but then I listened to it and heard all of the stuff he had to go through to get him to agree, and I realized we're never gonna have him on the show.

It's a really good two-part series. It talks all about the words, the divide, the ideologies and all those things, so I would submit that to the listeners; check out Curious Minds and just look for the open source ones.

But let's get back to you, David, and your initiative with the Best Practices Badge. You've given the overview; let's get back to that initial reason behind the Core Infrastructure Initiative, the Heartbleed, the security problems. Just reiterate for us and tell us maybe exactly the genesis story of the Best Practices Badge program.

**David A. Wheeler:** Well, probably a good place as any is the Heartbleed vulnerability, which was a vulnerability in OpenSSL. Initially one of the big problems was it was a really bad vulnerability in OpenSSL, and OpenSSL is used all over. One of the side problems was a lot of people weren't even realizing that they had OpenSSL in there, so it was a big effort... Once that vulnerability was found, there was this huge effort to figure out, "Wait a minute, what do I update?" "Well, everything." "Oh, what?" It was a bad vulnerability, big impact. But then when people started drilling in a little further, there were lots of programs, even projects that were well-run, with very conscientious people, lots of people, lots of resources, lots of everything, doing everything right - you can still make a mistake. But the problem with OpenSSL was that it wasn't just this one vulnerability; that suddenly cast a light on "This is really an important project, but in fact there's only two people working on it part-time.

There's a lot of things they aren't doing that they really should be doing", and it's actually surprising that more vulnerabilities hadn't slipped out. When people started to investigate it further... This is a problem, and in fact you can look around and find other programs that don't do things. Infact you ask them, "Shouldn't you do that?" "Well yeah, I haven't gotten around to that yet." So basically that's one of the geneses of this Badge program, it's "Hey, what can we do to raise the boats for lots of projects, and identifying those."

We came up with a number of different criteria. There's actually 66 criteria basically, after looking at what people do, and it turns out that the Open SSL folks weren't doing about a third of them; kind of the basic stuff that you were supposed to be doing, they weren't doing, and that lead to, frankly, a lot of problems.

**Jerod Santo:** \[00:32:03.10\] Give us like a top five. What are some easy ones?

**David A. Wheeler:** I'll tell you what, instead of just... What I can do is if I go to bestpractices.coreinfrastructure.org site, that's basically the web application that has the badging and so on, and "Hey, go there and get yourself a badge." If you do go to the Projects page and look up OpenSSL, you'll find there's actually two entries for it. There's current OpenSSL, and I'm happy to say that they actually have a badge now... But we went back and said, "Hey, what was the status of them?" and one of the members of the OpenSSL team went back and tried to fill in what were they not doing.

Basically they didn't have very clear information on how to contribute to software on the site, they didn't have information on what to contribute, what were the requirements for contributions. They weren't putting out the intermediate forms to the public, for people to review before it became the official version. They didn't have an officially published, "Here is how you report vulnerabilities." They had a general bug report, but it wasn't immediately obvious that that's how you were supposed to send in vulnerability reports or not. They didn't, in general, add new tests when they added new functionality. You'd think there would be a "Hey, I added a new crypto algorithm. Let's make sure that we add tests for that." "Well... Sometimes."

**Jerod Santo:** \[laughs\] Not so much.

**David A. Wheeler:** Not so much! And they weren't enabling compiler warning flags and other things... Basically using lots of tools to find problems before it got out the door. Those are just a few of the problems.

Sure, even in a well-run project you can make a mistake that gets out, but these are the kinds of things where, you know, no. Not only you should have a test suite, but you should be improving it as you add new functionality. You should tell people how to report vulnerabilities, and that sort of thing. So that's kind of the level for how the criteria looks likes; it's those kinds of things. "Where's your repo? Where's your project page?" - which could be the same. "Do you have version control? Do you have an issue tracker?" You'd be shocked to know that there are open source projects that people depend on that don't have these kinds of basics that help them keep their project under control and help them focus on the problems and fix things before the users have to suffer with them.

**Jerod Santo:** Let's take a moment and talk about the badge itself.

**David A. Wheeler:** Sure.

**Jerod Santo:** I can't remember if we've given that context or not, but I don't wanna go the whole show without saying that we're talking about an actual badge in terms of something that you put on your GitHub Readme or on your project website, like a little image that's like - what is it, Adam? Shields.io or Badges.io? That's what we're talking.

**David A. Wheeler:** That's exactly right.

**Adam Stacoviak:** I think shields merged with badges, but yeah, I think you're right.

**David A. Wheeler:** Ours is actually from shields.io, in terms of the look and so on. Basically, if you stick that on, it will say "CII Best Practices" and either "In progress" with the percentage, or if you get a hundred percent, you get a "Passing - 100%. Congratulations"

We have a scoring mechanism... There's a couple criteria which are not actually strictly speaking required. There's Shoulds. You cannot do them, but you have to justify it, or Suggests. Okay, you don't have to do it, but we want you to think about that and make sure you tell us whether or not you actually do those or not. And then basically we score out all your Musts and Shoulds and Suggesteds. If you get a hundred percent, congratulations, you've got a badge.

**Jerod Santo:** \[00:36:14.02\] Developers love badges. I remember Coderwall was very popular; people like to have little things that show off what they've done. Have you found that to be a significant enough motivation to have people submitting their projects to get a badge?

**David A. Wheeler:** Yes, people have big changes to their projects in order to get a badge. What's sad is that some of the things that people are doing - or you know what, it's not sad; it's kind of the point - are the kinds of things like "Well wait a minute, shouldn't you have done that already?" "Well, yes... But here it is now." People have created test suites, people have ways to implement HTTPS, people have reported "Hey, here's how to report vulnerabilities." By the way, I should note that these are some of the more common problems in getting a badge. They may tell you how to report bugs, but it's not obvious when you want to report a vulnerability if you're supposed to use the same process or not. It's fine if you wanna use the same process, just make it really clear.

That's particularly a problem if you are on GitHub, which a lot of folks are. Currently, there's no way to have a private bug report to a public repo.

**Adam Stacoviak:** Yeah, something that's got sensitive information involved. Like a vulnerability you might wanna actually pass to the maintainer in a secret manner so that it doesn't get public and they can actually fix it before it becomes a deeper vulnerability.

**Jerod Santo:** One of the workarounds for that - have a different bug tracker for security vulnerabilities...

**David A. Wheeler:** There's actually a thousand ways to do it, we don't care which way.

**Adam Stacoviak:** That's what the badge is for!

**Jerod Santo:** Well, I know, but it seems like there should be one true way, shouldn't there?

**Adam Stacoviak:** One more protocol!

**Jerod Santo:** Yeah. \[laughs\]

**David A. Wheeler:** I'm not a big fan of the one true way. Step back and ask yourself "What is actually required?" There are projects... By the way, \[unintelligible 00:38:10.09\] has this interesting policy where they forbid private discussions of any kind; that includes vulnerabilities.

**Adam Stacoviak:** What?

**David A. Wheeler:** If you're gonna report something, it must be public, and there it is. I'm not necessarily a fan of that, but they are sure clear about it.

**Jerod Santo:** They're never gonna get a Best Practices Badge.

**David A. Wheeler:** Well, you know what? For the Best Practices Badge we don't say it has to be private, you just have to have a way to report it.

**Jerod Santo:** Oh, okay.

**David A. Wheeler:** I think most people - and I think reasonably so; certainly on all my projects, I'd prefer that you send stuff to me privately. But then you gotta tell people how to do that, and that's okay.

**Jerod Santo:** I think 'one true way' was probably the wrong way to phrase it. What I meant to say is there should be a happy path. There should be an easy path for everybody to get there, and it seems like saying "Well, there's ten thousand different way you can get this done" is like "Well... Which way should I do?"

**David A. Wheeler:** Well, now of course I guess I'm gonna reveal the grand secret - which isn't actually secret at all - which is in process of doing this we've actually been contacting other repos... For example, GitHub doesn't support private reports on public repos, so we've actually contacted them and specifically asked it and put it on their own issue tracker, "Hey, could you please add this functionality?"

Obviously, GitHub isn't required to do that, but we're making sure that they're aware of that.

Savannah, which is where a lot of the GNU-based projects - you can pull up a Linux distro, it's gonna have a lot of projects that are actually run off Savannah. Savannah has HTTPS on the project pages, but not on the repos. What?! \[laughter\] So we're talking with them...

\[00:40:01.20\] I agree with you that for some of this stuff we clearly need to fix it once, but we're actually already pursuing that as well in the process of making the badge and the criteria. We were actually alerted to that by projects themselves; "Hey, we wanna do this."

There are ways to do it now, and we're working with projects to make things better for everybody. You can figure out a way to get people to send you private messages - here's an e-mail, here's a little website just for this purpose, whatever. So there are ways we can do it now, and we're working on making it better for everybody.

**Jerod Santo:** Just to answer my own question a little bit, and we've covered a few of these, but the Linux Kernel, as you said, is badged up; NodeJS, curl, as we've mentioned in the intro, GitLab, and of course, OpenSSL.

One thing that was interesting - you can see the entire list of projects on the website, which we'll have it linked up in the show notes, there are 182 projects in the index, but only 22 of those are passing. So that tells me it either takes a while, or it's hard... Or maybe you can tell us why so many are still not quite there yet.

**David A. Wheeler:** Well, the criteria we created - as I said, we talked to a lot of folks - it's basically what do most projects do for each one. But here's the challenge: if you identify a bunch of criteria that each of which most projects do, and then you say "Hey, you've gotta do them all", often times what people find is they do almost all of them, except for these two. We've actually been tracking those... I actually recently posted an analysis of the projects which are close but not quite making it, to figure out what were the ones that were most missed. So let me list those that are kind of the most missed ones. We take feedback and we basically planned to update the criteria every year, and we actually have an intent to add higher levels in the future, but right now we have that basic, passing level.

The most missed in terms of the criteria where tests are added; basically, as you add functionality, you add tests. The second most missed was HTTPS. There were some others about crypto certs, vulnerability reporting - basically, tell us how to report vulnerabilities. For the tests that are added - could we reduce the criteria? We could, but should we, really? If you add new functionality, shouldn't you be adding new tests? We're not mandating a hundred percent coverage rating, we're just, "Keep improving."

For HTTPS, if folks want HTTPS, go to Let's Encrypt, they'll give you a certificate for free. For vulnerability reporting, that's one sentence on the Readme, on your project page.

Another one that's coming is knowing just the basics about secure design and common errors. That's really just knowing how the basic principles, such as \[unintelligible 00:43:21.26\] what they are, how to counter them. They aren't hard to do, and while we could back off on those things, no one is actually suggesting that we should. It's just that there's a number of projects that don't need those sorts of things, so what we're trying to do is instead of changing the criteria, we're trying to help the projects actually meet them, which is gonna be good for everybody.

**Adam Stacoviak:** Alright, best to take a quick break here. When we come back we have a couple questions, mainly around not so much just the motivations, but also maybe how they maintain. For example, if someone gets to a hundred percent and they get the badge and all that good stuff and they prove they're certified and follow these best practices, I'm curious on the follow-up, the checks and bounces over the years, how that works out. So we'll take this break, and we come back to that.

**Break:** \[00:44:21.00\]

**Adam Stacoviak:** We're back with David A. Wheeler, and we're talking about this great badge initiative to show off the best practices of core infrastructure out there. Obviously, as an industry we were blindsided by Heartbleed, so something had to be done, and this is obviously a great initiative.

David, in the side chat we had before in our break, I'm kind of curious about the motivations. If someone's trying to do this with the best practices, they're not just trying to get a badge; what's the motivation for this, what are they trying to show off? That they actually follow the best practices? Can you help break that down a little bit more clearly?

**David A. Wheeler:** Sure. I think the badge is all about helping projects identify what are those key best practices that are gonna help them be successful, produce good results. And also for the potential users of that software, help them figure out which projects are doing well, versus the ones that are kind of in trouble or kind of dodgy.

So really, I would strongly encourage any open source software project, go to the bestpractices.coreinfrastructure.org site, click on Get A Badge, and get a badge for your open source project.

**Adam Stacoviak:** This is for everyone. Not big or not small, just everyone.

**David A. Wheeler:** Everyone! The whole point is hey, there's just somebody - it probably depends on the software that your project develops... So for somebody you're important. And in fact, for most projects, people often have no idea how many other people really depend on that software. I think almost everybody... If you're involved in an open source project, you're not there to produce crap; you're there to try to create something that's useful and helpful, and you wanna do that by doing the right things. Well, what are those right things? What are the things that are more likely to make your project successful?

I've emphasized the badge because it's a convenient shorthand, but really the goal isn't to get a badge; the goal is to do things that are gonna help you succeed. And by talking to everybody that we can, getting that experience from projects that are both old and new, people who've studied it, what are the things that are really kind of those fundamental things, and then from there we've distilled it down to a set of "These are the things you should be doing."

By getting a badge, not only are you showing your users, "Hey, we're on track", but in fact you're helping make your project better for the future.

**Jerod Santo:** And on the consumer side of that the benefit is once these badges get to be in such numbers that you come to expect them, at least on certain projects, you can use that as an indicator of - if not the quality of the project, because there's other things... You can look at the code coverage, what's the code scoring system, where they have A+ and B- and what not...?

**David A. Wheeler:** There's several of them. The code coverage with statement of branch coverage is a pretty common measure.

**Jerod Santo:** Yeah, exactly, those sorts of measures. That's what these badges are for, to give a high-level view of what's going on, or the dependencies that are there. Ways that you can proxy an idea about quality. I think with this one maybe you can't tell the quality of the project, but you can at least tell how serious they are. If they're not just trying to apply best practices, but they're actually going after... They wanna have a badge that shows off that they're trying to go after best practices. So hopefully we get to a point where it's something that we can look at and say "Okay, this is a +1 for this project."

**David A. Wheeler:** \[00:48:24.26\] Right, and a lot of these criteria really are about helping you go to the right direction. The challenge, and I'm a big fan of static analyzers and code coverage and so on - they can only tell you the current state. That's not a problem, that's a good thing, but it doesn't mean, for example... I actually talked to an open source project - I'm not sure I should pull them out like this, but it's widely used and there's no issue tracker. They have no idea what problems they need to work with, because they have to keep hunting through the old e-mails in their mailing list, trying to figure out what to do now. That's just sad.

We've got version control systems, we've got issue trackers, we've got all these tools... Please, go use them! Your life will be better for it! It's that sort of thing where yes, just following, just doing these certain things doesn't make your code into magic gold, but you can at least avoid some of the crazy problems and help set it on a good path.

**Adam Stacoviak:** So the goal of this began with the blindsiding of Heartbleed, and obviously creating a list of best practices and providing a way for open source projects to self-initiate and go and volunteer to follow them, get a badge, and then get to passing, or at least their progress level into passing... I'm curious about the lifespan of this. Is there a committee, are there people who are keeping these projects in check? How do you know once they have achieved a certain passing level they actually maintain the best practices? How does that work?

**David A. Wheeler:** Well, there's actually several things. Before going into that I should probably talk a little but about how you get a badge in the first place, because I think that will help level-set stuff. To get a badge, basically, somebody from the project clicks on "Get a badge" and they fill in basically a form. You basically click on "Did I meet, did I not meet..." For almost all of them you can justify, and some you have to justify.

As much as we can, we want to automate this. We've already automated a number of things, because there's actually... A lot of these questions you can answer in many cases. Particularly if you're on GitHub, we can tell certain things right away; we can look at the repo and fill in some information. For some things it's just... \[unintelligible 00:50:53.12\] isn't quite up to the task of handling it, not yet. But even just with the things that we have automated now, we can quickly determine "Hey, you did eight", and kind of go from there.

The current plan is to do an update of these criteria every year - we're targeting January. So basically, each year we'll have some adjustments. That means that you'll need to go back and at least update your entry over a year, and in that process that will force the automatic evaluation; technically the badge is good for a year, but you don't have to redo the work. It's not a lot of work, it only takes about an hour on average to get the information, and that assumes that your project's already in order. Obviously, if you're not doing any testing, the problem isn't that "Gee, I have to click on Unmet for testing the unique tasks" \[laughs\]

**Jerod Santo:** \[unintelligible 00:51:52.17\]

**David A. Wheeler:** Yeah... You know what, actually people are kind of surprised... We actually don't mandate a coverage level.

**Jerod Santo:** I was just gonna ask that.

**David A. Wheeler:** \[00:52:03.02\] Instead what we focused on - do you have a test framework and are you working on getting better? For some projects actually test coverage is kind of tricky.

Greg K.H. and I had a lot of interesting conversations. The Linux Kernel folks for example, the interesting problem is that they have a lot of drivers, which practically nobody has the hardware. So it's really, really hard to do coverage testing with real hardware when you don't have the real hardware. And yeah, you can do simulations, but that tests the simulators, not the hardware. So instead what we've really focused on is "Have you started and are you going in the right direction?"

I mentioned earlier, we do hope to have higher levels of badges, and then I think we are almost certainly going to have a coverage requirement.

But I think, to be honest, we were kind of a little surprised. There's so many projects which aren't really doing the fundamentals that right now we're much more focused on getting people to the point where - you have tests, you have a test framework, you're adding tests when you add a functionality, you have HTTPS, you know about designing secure software, you know about the common kinds of mistakes that people make and how to counter them. Right now, that's kind of been our focus until people are kind of more set, and then we can work on those higher levels.

**Jerod Santo:** Two thoughts there. The first one is the easiest way to get a hundred percent code coverage is to have a single test that asserts 'true'. \[laughter\] Obviously, you can fake that pretty easily.

Thing two is, when you get to a certain level of coverage, you start to determine... It's harder to determine what is and what is not a best practice, because there's way more dissension on what different developers think is appropriate test coverage. So I assume that as you got to that phase, you'll have a lot more argumentation or debate about what should or should not be required.

**David A. Wheeler:** Yeah, and it also depends on how critical your software is. I'm certainly not against code coverage. The badge app itself, as I mentioned, it's open source... I probably shouldn't mention - yes, we got our own badge. \[laughter\]

**Jerod Santo:** You gotta get your own badge, right? If you don't have your own badge, it's like go on home, just go home!

**David A. Wheeler:** Exactly! I think it would be ridiculously hypocritical if we don't get our own badge. But we do a whole lot of practices. For example, we have code coverage - I think the last time I checked it was at something like 98%. We use CircleCI, check our builds, run the automated tests and so on. So I'm certainly not opposed to coverage testing. But I think you're right, I think 80-90% for most software is... You should be at least getting that. Whether or not you run all the way to a hundred percent... There's nothing terribly wrong with getting a hundred percent, but often times those last tests aren't necessarily worth the effort, because the code coverage can hide some other problems. Just because you ran the test doesn't mean that you're really in a good situation. There are other kinds of testing you should do.

**Jerod Santo:** While we're here, let's talk about the application itself. Give us a quick, technical breakdown of what it is, how it works, maybe the technologies involved and who helped you build it.

**David A. Wheeler:** Sure. The basic notion is filling a form. It's a web application, you fill in a form. We're really trying to make things as simple and as straightforward as possible.

Now, it's not quite filling in a form, because once you give us the project you're on and the repo you're on, we actually go out and try to fill in some of the form automatically, and even to the point where if we can determine with high probability that in fact something isn't true, we don't care what the human says. It's not true. So in some cases, we will override what the human claims.

\[00:56:07.00\] That's it, it's fundamentally a form entry. We're using Ruby on Rails, which is a bog-standard and pretty darn common way to implement an application with forms and databases and that sort of thing.

We have, of course, automated tests, as I've mentioned; it's near a hundred percent coverage. In fact, one of the more interesting things from my vantage point is we wanna make sure that ours is secure, so we actually have on our page a description about how we make sure that the thing is secure.

For example, we try not to store anything that's not public anyway. You can't reveal what you're not hiding. There is some slightly sensitive information. We do have e-mail addresses of people. If they're not using GitHub login we do have some passwords, but we use iterated salted hashes for the password, so even if you get our database, you don't get the actual, straight up password. We just try to apply various sorts of rational things... Ruby is of course memory-safe, so we don't have those kinds of problems. We apply the typical security recommendations, various kinds of hardening things. We use four different static analyzers, check the Ruby and the Javascript also, because there's some Javascript on it.

Brakeman which is a very nice little static analyzer if you're doing Ruby on Rails. Basically, we're not really depending on any one thing. We're actually using a suite of tools and approaches, any one of which helps, and the combination together makes it much more likely that when we put something out it's much more likely to just work.

**Jerod Santo:** Very good. Well, any final thoughts or closing words on the Best Practices Badge program before we get into our closing questions?

**David A. Wheeler:** I think the main thing - if you don't remember anything else from this conversation, what I would say is please, if you're involved in an open source project, please pop over to bestpractices.coreinfrastructure.org, click on Get Your Badge Now, and go get yourself a badge. It doesn't take that long, it doesn't cost anything, and it basically will help you figure out, "Hey, is your project in good shape?" And if it's not in good shape, it will help you identify exactly what needs fixing, and then you can go and work on fixing it. And once you've done that, you can get yourself a badge. As we talked earlier, the badge is a nice short head, but really the goal isn't the badge; the goal is to get projects in good shape. We don't want more Heartbleeds. Mistakes are gonna happen, but we want those mistakes to be unusual leakages after doing all the right things, not "Wow, there were some basic things I should have been doing."

We wanna get to the point where projects are in great shape and they're ready to go, they're firing on all cylinders, and that's what I'd love to see out of this.

**Adam Stacoviak:** And for those out there who are a little afraid of forms, like I am - I sometimes don't like to fill them out, I like to peek behind them if I can, and when I can't, I just get a little scared... \[laughter\]

**David A. Wheeler:** Well, if you wanna peek behind, the code for everything is on GitHub, so there is no secret there on what the form is. We actually have a separate page on GitHub with just the criteria, if you wanna see what you'll need to fill in.

\[00:59:57.17\] A lot of people are like, "Gee, I don't know about the criteria, I'll just click on Get My Badge Now and get started." You don't have to do it instantly, you can fill a little bit and say "Oh man, I don't have any tests..."

**Adam Stacoviak:** Yeah, that's the point I was trying to get to, being able to see the criteria. You have a great doc in the GitHub repo and you can read that, it's like a blog post, if you just wanna know what it takes before you even fill out the form or get started; just kind of seeing behind the veil, so to say. I wanted to plug your Criteria.md file, because it's extensive, it's got a lot of great information in there, it's very exhaustive, and it's also obviously in Git, so you can contribute back if there's a misspelling or a typo or whatever. You can easily see this information.

**David A. Wheeler:** Yeah, we take pull requests. In fact, we've got an issue tracker, we take pull requests... People have proposed all sort of... In fact, the criteria themselves, it's not just me. We've gotten hits back from all sorts of folks, and I think at this point, generally when people have issues, it's not that they think the criteria are wrong, it's that "Oh, I'm not doing it." That's sad, of course... You don't have an issue tracker? What's wrong with you? But in a sense it's good, because it means that the criteria are doing their job, they're helping people identify those basics that people are generally doing, but maybe you're not.

**Adam Stacoviak:** We may have covered it, but for those out there who are thinking "This is great, I didn't know about this" and they wanna be involved in some way, shape or form, whether it's... The obvious one is that they're involved in a project, submitting to get a badge, but let's say they wanna support this. What are the best ways for the open source community to step in and support you and support the Linux Foundation in this initiative?

**David A. Wheeler:** I think the most obvious one really is, as I've mentioned earlier, if you're involved in a project, please go work on getting a badge. If there's a project you're depending on that you're not currently involved in, but they're missing some criteria, go have them. I'm sure there are projects that you're depending on that could really need your help. If they don't a test suite, you know what? Help them make one.

Different projects have different problems. Older projects often have the problem that they don't have test suites. Newer projects, which think they're open source, often tend to not have a license, which means they're not open source at all. So help them identify and fix those problems.

I guess the third way would be with the whole badging project itself. We would love to get feedback, improvements, suggestions... We don't wanna change the criteria willy nilly because people spend time answering those, but certainly if they need to be clarified, that's great. If they wanna actually change them, add new ones or delete ones, that's fine, although we wanna do that much more slowly, particularly adding new criteria. We don't wanna do that more than annually. But we can, and we expect to, but we're gonna need people's help because we wanna make sure that we have everybody's viewpoints, not just one person's.

Hopefully that will give you at least a... There is room for lots of people to contribute, in a lot of different ways.

**Adam Stacoviak:** Yeah. We'll definitely link up the Criteria.md file because that's interesting to me... Just being able to breeze that on your own, just to look at it. I like how you said if you're not involved on a project and you depend on a project, that as an applicant for a badge who doesn't have the badge or doesn't have tests, then obviously step in or reach out to the maintainer and ask them how you can help to spread the word about this initiative. That makes a lot of sense to me.

\[01:04:12.08\] One question, David... Since you're a listener of this show, you may know that when we tail off the show we like to ask about somebody who's influenced you. We often call it the programming hero, or just hero in general, and I'm kind of curious who might be your hero, because you were a child of the '80s, you were doing lots of cool stuff way back then, so you've got expansive history of who may have influenced you over the years. If you had to narrow it down to one though, who might be your hero?

**David A. Wheeler:** I've got several I could point to, but if I only am allowed to use one, I guess I'd point out Robert Dewar; some people may not know him... Unfortunately, he died not that long ago, but he's done all sorts of cool things. He was an academic, he did a lot of advocacy for open source software, he started an open source company which is still thriving... But the area that I remember him in specifically is a compiler author; he wrote several interesting compilers. Way back when he actually wrote the GNAT, the gcc-ada compiler. At the time he wrote it, there was this sort of set of "Here's how you do this sort of compiler." This sort of compilation works for x or y, you've gotta have all these complicated caches, and have talked to a lot of folks, he worked out a system he kind of blew away the conventional wisdom. Instead of having this complicated caching system that required really a whole lot of complicated, error-prone code to keep straight, he basically threw away all of that, and instead worked very, very carefully on a hand-optimized lexer. It was a pain to make that hand-optimized lexer, but it was a little tiny piece of the compiler, and by optimizing one little piece, he managed to eliminate a huge raft of code, and the whole compiler was much, much, much faster than anything that had been around before.

So basically by looking carefully at the problem he figured out, "Oh, here's a much better way of doing the tradeoffs than had been done before." He ended up with something that was tons faster, much smaller - what's not to like? And it was more reliable, too.

**Adam Stacoviak:** Obviously I love that, that's good stuff there. David, it's absolutely been a pleasure to have you on this show. I know that having a listener on the show is a bonus, for sure, and then having not only a listener on the show, but someone who shared a ping and shared their story with us on there... Obviously we track that quite well, so listeners out there, if you're listening to this and you're thinking, "Man, I love this show. I wanna suggest a topic, or maybe I'll even suggest myself to come on", go to GitHub.com/thechangelog/ping, there's issues there, submit one, look over some, help us out to say hello to people, or give feedback on different ideas. We love that.

David, this Core Infrastructure Initiative is a great thing. I'm glad that the Linux Foundation and the foundation you work with are doing this; this is great work to be doing for the open source community. That is it for this week. Thanks, Dave, for coming on this show, and listeners for tuning. Let's call this done and say goodbye.

**Jerod Santo:** Goodbye!

**David A. Wheeler:** Goodbye, thanks!
