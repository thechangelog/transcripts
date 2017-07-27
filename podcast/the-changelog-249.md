**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode 249, and today we have an awesome show for you, produced in partnership with our friends at OSCON, one of the largest open source conferences out there.

**Break:** \[00:00:52.25\]

Our guest today is Scott Hanselman, Program Chair of OSCON, host of the podcast Hanselminutes, and advocate for open source inside Microsoft and the Azure Cloud team. We talked about the oldest software he wrote that's still in production, this shift inside of Microsoft to open source and why, as well as ways to make inclusion and diversity a priority in your communities.

Our sponsors today are Linode, Hired and DataDog.

**Break:** \[00:01:40.08\]

**Adam Stacoviak:** Alright, we're back. We've got another episode for you, this time in partnership with our friends running OSCON, talking to Scott Hanselman. Jerod, what is up, man?

**Jerod Santo:** Scott's up. Scott's up, and waiting in the wings... Scott Hanselman of course of Hanselminutes, works at Microsoft... You've probably heard him, read him, perhaps even spoken with him. Scott, thanks so much for joining us on the Changelog!

**Scott Hanselman:** It's my pleasure, thanks for having me on.

**Adam Stacoviak:** People read you, Scott? Like tarot card readers, or what?

**Scott Hanselman:** I've had a blog for many, many years, so apparently if you blog mediocrely for a decade or two, people will eventually recognize you.

**Adam Stacoviak:** How far back?

**Scott Hanselman:** 2002... That's 15 years, at least; 15-17 years, the podcast.

**Adam Stacoviak:** And the whole time about tech?

**Scott Hanselman:** Well, about tech, about diabetes, about hobbies, about 3D printing, about raising children, about travel, about all that kind of stuff. About life, but I would say primarily tech.

**Adam Stacoviak:** What's been the thing that has kept you going forward, through the blogging years, so to speak?

**Scott Hanselman:** Well, a lot of people started blogging in order to build a brand, and that is the wrong reason to blog. I blogged because I don't like e-mailing people. You all are very nice and it's nice to hang out and meet and stuff, but I wouldn't say we're friends - we're friendly, right?

**Adam Stacoviak:** Right.

**Scott Hanselman:** So let's say after the show one of you e-mails me a really amazing question, like "Yeah, Scott, great show. Hey, I have this question" - deep question, and then I'm like "Wow, great question. I would love to answer you, but I don't know you that well, and I'm really not gonna give you the gift of 5,000 of my keystrokes"; I've only got so many keystrokes left before I die, so I'm gonna put those literally anywhere but e-mail. I would put them in a blog post, or a Wiki, or maybe (God forbid) SharePoint, but somewhere where I could put them where there was a URL, and then I'd send you the URL.

\[00:04:03.11\] So in every interaction in life I would basically think of my blog as being a FAQ, and any ime I did something interesting, or anytime I wanted to google myself later, I would blog about it. If you do that twice a week for 20 years, people will eventually find you organically.

It's kind of a long-winded answer, but I think it makes the real point that you shouldn't be e-mailing people.

**Adam Stacoviak:** Yeah, I've e-mailed several people and I've actually heard that exact thing, where basically if you're answering to somebody or someone asks you a question and it's long-winded, basically make a version that's a bit more generic to the world and put it there. That way you can point a hundred - or thousands, basically, if you're Scott...

**Scott Hanselman:** Well, no... This is the thing - sometimes people say, "Well, I won't do a blog because only two or three people e-mail it." Well, but imagine if you got two, three, four times more e-mail done; that's what blogging will do. If two or three people visit your blog, those are two, three, four thousand keystrokes multiplied by the number of people who visit that you didn't have to type; so I think of X pageviews a month as being literally millions of keystrokes that I saved, and I live beyond my scaling ability.

**Adam Stacoviak:** I like the idea of the keystrokes left in your life. You hear breaths, you hear days, you hear whatever... It's more hacker, for sure, to say keystrokes.

**Scott Hanselman:** I made a website... Maybe you can go right now to keysleft.com, and put in how old you are, and put in how many keys you type, and it will tell you how many books you have left, how many programs, how many love letters, how many tweets, and how many e-mails to your boss, so then maybe you can prioritize the things you wanna spend time on.

**Jerod Santo:** Sounds terrible...

**Scott Hanselman:** It's empowering.

**Jerod Santo:** It's gonna take every keystroke that I hit, I'm gonna feel like I'm that much closer to death. I'm gonna feel like I'm literally dying as I'm typing.

**Scott Hanselman:** Well, you are dying, but you're dying when you're breathing, you're just not counting it. And if you go to KeysLeft and just look at it, it will count down, so you're actually seeing keystrokes that you're not typing disappearing from your life right now.

**Jerod Santo:** And how is this empowering?

**Scott Hanselman:** Well, if it doesn't get you blogging, then it will certainly make you think every time you send that e-mail. I don't send e-mails more than a couple of sentences.

**Adam Stacoviak:** This e-mail or blogging topic wasn't exactly on our docket, but going a little deeper into it... How many people out there have enough to blog about? Don't you think at some point saturation will start to happen and it's just like "You're just another blogger, you're just sharing more ideas." Do you feel like that, or do you feel like everybody could make a difference?

**Scott Hanselman:** I don't think that people should let their self-esteem get tangled into their blogging. We all have impostor syndrome - or at least I do - we all have the sense of "Well, everyone's said everything about Angular", right? I know that there's a bunch of geniuses out there that know about Angular, but the Cartesian product of the technologies that are out there and the people that experience them gives you an unlimited amount of potential blog posts about "Here was MY experience with Angular. I'm not an Angular expert, but my experience as a newbie learning Angular is valid." I accept that I am learning Angular, I am not an expert, and it's totally reasonable for me to write a blog post that compares Angular and Ember, and say "Here was my experience", and you present it in such a way that if the trolls come at you, you go "Hey, I'm just learning. This is four hours on a weekend, looking at Angular and Ember."

That is always a valid viewpoint, so as a former computer science professor, I very much write kind of like 100-200 level content from the point of view of someone who's learning, because I'm not a professional. I'm just an amateur that's been around for 25 years.

**Jerod Santo:** \[00:07:52.16\] What do you say to the argument about signal versus noise? If you are a beginner, or perhaps even if you're wrong - you don't know it when you're writing, or maybe you're not a good writer... We have this mass of data that we're all pumping out new things every day, and people are trying to find answers and experiences and things that help them along their way... At a certain point are we just adding more noise? Can you actually determine \[unintelligible 00:08:16.23\] as you're writing it?

**Scott Hanselman:** I don't think that you can, and I think that right now we do have a bit of a monoculture in that Google is the lens by which most people look at the internet, but PageRank has mostly worked, other than W3School.com, pretty much... \[laughter\]

**Adam Stacoviak:** I still don't know how that works.

**Scott Hanselman:** Yeah, I don't know how that works either. And experts exchange? I don't think it is invalid to say that the cream will eventually rise to the top. So regardless, if it is only me... Sometimes I will google for stuff - and of course, I google with Bing - and I'll add Hanselman at the end of the thing, because I know I blogged about it once. So I work on .NET, I wanna do some Angular, so I google ".NET Angular Hanselman", because I wanna limit it to my own blog, and I'll go "Oh, there's that time that I blogged about that" and then I'll copy/paste the commands, or whatever I need.

So there's value in simply using it as an online journal for stuff about yourself you might wanna google later.

**Jerod Santo:** Yeah. One particular post that you wrote back in 2011 resonated with many. In fact, you alluded to it here when you mentioned impostor syndrome, and you were even linking up I believe in a nav of your website, so it must be important to you... It's called "I'm a phony. Are you?" which is all about impostor syndrome and the Dunning-Kruger effect and such things. This is a thing that comes up often, and we talk about it a lot on The Changelog and all the different shows that we do.

It seems like - and I know that it's empowering to hear somebody like Scott Hanselman say that he's a phony... But why do you consider yourself a phony? Because in many people's eyes you're legit. You're the real deal and we're the phonies.

**Scott Hanselman:** I think the point of that post and the point of the general narrative around impostor syndrome is that we wanna get more people from more backgrounds into technology, and so many people have this sense of "I'm not supposed to be here." When I was coming up in tech, I used to work in banking and we would go to all of these fancy business meetings with fancy people who had VP in their title, and I remember one time I had to go to England to talk to a bunch of vice-presidents of English banks; it was like they get +2 charisma just for being English, then they've got suits on and stuff, and I mentioned to my VP before we were gonna go "I don't own a suit." I felt othered, I felt separate, I felt like that wasn't my world. I don't drink wine, I don't golf... I don't know those things, so then I find myself at a hotel after we go and present to the banks, and they're all sitting around smoking cigars and drinking wine and talking about golf, and I was not adulting very well. I'm still struggling to adult, and that feeling of being othered and being separate is magnified so much more when you're not just a straight white guy. If I had just kept my mouth shut and said, "Yes, hah-hah! Par, par... Cuban cigar..." I don't know, I don't sportsball...

**Adam Stacoviak:** Birdy!

**Scott Hanselman:** Yeah, exactly, "Birdy!" Exactly. If I had just kept my mouth shut, I would have fit in, right? But so many people are afraid to open their mouth... If I just simply accepted though that I had a right to be there and it's okay for me to be there, even though I'm not 100% fully prepared, saying that out loud is a way of naming it and claiming it, and letting other people know that it's okay to do that.

Let me give you another example, if you don't mind.

\[00:11:41.26\] I was at a conference recently called Codeland in New York, which is a really great conference. It's focused entirely on code newbies. It's run by the Code Newbies Organization, you should check them out online. And one young woman spoke to me on the side... We were having a conversation about feeling comfortable in a place, and she was saying how she didn't feel welcomed in tech etc., and how this conference is making her feel very special, even though she had impostor syndrome. And I just wasn't thinking, I just casually said, "Well, welcome. We are the tech community... On behalf of the tech community, welcome! You found your tribe, and we're here for you." She kind of started to tear up and said, "I've been in this community, but no one's ever actually formally welcomed me to it." It was symbolic, it was a throw-away statement, but at the same time it also gives one a sense like "Well, this is my people. The way I do tech is okay."

So popping off the stack to the original question about declaring to the universe that "Hey, I'm a phony, sure..." I mean, look, I've been in this business for many years now; does my degree from 20 years ago matter that much today? Not really... There's nothing you can do to go and say you belong, so I've just decided to stop being a professional, and I'll just be an amateur who is an avid learner. I'd much rather be an enthusiastic and kind amateur who is learning and improving, than just declare "I am an expert software engineer in all things." So yeah, I'm a phony, I'm a little bit in over my head at all times, but that's where you grow.

**Adam Stacoviak:** I feel the exact same way, because back in the day you used to hear from anybody "Hey, you learn every day of your life." You learn something new every day, right? So if you're that person, then you're never truly an expert, because you're constantly learning.

**Scott Hanselman:** Yeah, and there are gonna be people who will listen and there'll be people who have replied to that post and said "Oh, you're full of crap. Come on, I know what I'm doing; I worked hard to get here and I'm not a phony." And that's totally valid, if that's their experience, but I would argue that there is probably the plurality of people who feel this way, and we should make sure that they feel welcome too. So if you're not a phony - awesome, congratulations, you've made it! But I'm still occasionally feeling like I don't belong... Whether it's because of adulting or whether it's because I'm at an Erlang conference and I don't know what Erlang is, or whatever. We as tech leaders or at least as loud people - maybe we're not tech leaders, but we have podcasts - need to make people feel that they are welcome and they are not othered.

**Adam Stacoviak:** That's exactly why we created the Changelog Community. Changelog.com/community - you've got a bunch of interesting things there about what we're doing. I'm gonna quote some copy we have on this page, because when I wrote it it kind of brought a hacker tear to my eye... It says "Everyone is welcome. You are not an impostor. No matter where you're at on your hacker path, this community is a safe place for you to hang your hat and call home. All you have to do is take the first step." For us, that's the welcome mat. We want people to feel welcomed in this community, and that to me is like -- you need that invitation, you need that welcome mat to sort of take that first step.

**Scott Hanselman:** Excellent. Well, good for you for doing that.

**Jerod Santo:** It's hard to see from the inside, to know that's something that -- because it sounds like it surprised you once she began to tear up a little bit, and perhaps to you it seemed, like you said, a small interaction... But to see that emotional effect on somebody - it's harder to see that that's needed once you're already on the inside, so it's super valuable to see that happening.

**Scott Hanselman:** Yeah, and it's important for us not to get too comfortable either.

**Jerod Santo:** Yeah... That actually leads to what I was gonna say, because you've been in the tech community for so long, a tech leader as you said, or perhaps a loud person, you have a career in coding, and yet you still... What today in 2017 - you mentioned Erlang offhand - trips your impostor syndrome even now? What puts you out of your comfort zone?

**Scott Hanselman:** \[00:15:51.21\] Well, just a couple of days ago I was at a conference in Philly, called Philly Emerging Tech, which is a really very well done conference, and I would think that it's skewed a little advanced, so maybe more of a 200-300 level (even 400), and someone suggested that I go see this amazing talk about free monads. And I sat there for a while, and they were typing, and the person clearly knew their stuff, and they were a very charming and a very dynamic speaker, so the gentleman did a great job... But about ten minutes in I finally just turned to the lady to my right and I said, "What language is this?", because I didn't even know what he was programming in. And she said it was Scala. He was using words like non-descriptive functoid etc., and I just sat there... I just gave up.

So then I tweeted, "I still don't know what a monad is", and that tweet got like 500 retweets and turned out to a whole conversation, and the conversations were basically -- the replies were twofold... It was either, "Oh, it's just a non-descriptive functoid of a whatever... It's easy", and the other people were like "Yeah, I'm in software 20 years and I still don't know what a monad is." So people were comforted by that.

I think it's important for us to -- if you hear an acronym in a meeting and you have the ability and the privilege to go and ask, maybe other people in the room would like to know what that acronym is, too... So you can lend your privilege to people by saying, "What is that TLA? Oh, three-letter acronym... Cool, thanks."

**Jerod Santo:** Did you ever go figure out what monad is?

**Scott Hanselman:** I kind of get it... There was a really cool cartoon I saw about boxing and unboxing values and stuff... As my friend John Skeet says, "There's a moment every once in a while for 60 seconds where I can hold it, and then I lose it." So I know it's in there and one day I'll have a dream about it and I'll wake up and know it... But for now I don't really need it.

**Jerod Santo:** Yeah, I'm in the same camp as you. I think I've had it explained to me a half a dozen times in different ways, whether by cartoon or example code or a paragraph, or even in audio form. I always walk away thinking, "Okay, I get it..." and then 20 minutes later I have no idea what a monad is again.

**Scott Hanselman:** Yup... Well, one day, one day... Just like the electoral college will understand it and what it means...

**Jerod Santo:** \[laughs\] Maybe. So let's go back a little bit. Tell us a little bit about -- you've been in it for a long time... One question I like to ask people - because software is so ephemeral nowadays... I like to think about software that endures the test of time, so one question that I like to ask people - especially those who have been industry as long as you have - what is the oldest piece of software that you wrote, that is still in production use today, and by production I mean it's still valuable and being put to use? One that's still executed \[unintelligible 00:18:31.27\]

**Scott Hanselman:** Let me think here... Well, the oldest... I'm going farther and farther back... I wrote in 1994-1995 an application for the PalmPilot called GlucoPilot... Glucose and PalmPilot - that is a handheld diabetes management system; the first portable blood sugar management system. I wrote it in C++ in CodeWarrior (Metrowerks), and I still get e-mail from people who use that application. So that would be 22 years... I worked before Microsoft as a chief architect of a company called Corillian, that got bought by CheckFree, that got bought by Fiserv, and I worked on the retail online banking frontend for that, which is used in something like 25% of the U.S. retail online banking... So that's something. That was 15 years ago.

Ten years ago I worked on \[unintelligible 00:19:40.20\] and Clemens Vasters and I know it's being used, because it runs my blog, and that's 13+ years... So I would say 22-odd years, maybe...

I did another couple of apps before that, but they were Windows 3.1 and it's unlikely that they're still used. But the PalmPilot one, I know for a fact it's still being run.

**Jerod Santo:** \[00:20:01.28\] That's excellent.

**Scott Hanselman:** Yeah...

**Jerod Santo:** Talk about using your keystrokes well...

**Scott Hanselman:** That's a good question though, yeah.

**Jerod Santo:** That was one of the better answers... A lot of people will -- it will either be something that they're still using... For myself, I have software that's probably ten years old(ish) that's still in production use BY ME, but not by anybody running a PalmPilot.

**Scott Hanselman:** Oh, I've got an even better one... BabySmash.com. When my 11-year-old was not 11, I made an application to teach him his letters, where you smash the keyboard and it puts the letters up. And then if the kid accidentally types a word, all the letters jump out of the way and they spell each other and they read the word... So it's like lights and colors and singing and shapes and stuff.

I wrote that just sitting on the couch while we were watching Lifetime, or something. That is absolutely -- and he's now 11. That app is actively being used and is on GitHub.

**Adam Stacoviak:** It makes sense to be watching Lifetime while you wrote this, because obviously, family man...

**Scott Hanselman:** Well, you know... I was supposed to be doing work, but it wasn't quite work... \[laughter\]

**Adam Stacoviak:** That's super cool, especially if it's -- well, maybe not a machine you are willing to let a kid break, but kids love early access to technology. My 13-month-old, if he sees my iPhone, he's gonna play with it. And he can't do anything, because he can't get past this, you know...

**Scott Hanselman:** You've gotta get BabySmash... The thing about BabySmash that was so fun about it was that I implemented multi-monitor support, so you can let the kids smash on your three or four-monitor setup. I've got all these great videos -- people send me videos and clips all the time, I've got hundreds of them, of their kids on these amazing multi-monitor flight simulator type things, where the kid is like doing some "really important" computing, and they've got BabySmash on all the monitors, filling them with shapes and colors and stuff. It's all animated and juicy. It's way before iPhone and iPads and existed.

**Adam Stacoviak:** We need to bring this back to...

**Scott Hanselman:** Well, we don't have to bring it back, because fresh babies are coming every day. \[laughter\]

**Adam Stacoviak:** Well, what I mean is new platforms, or...

**Scott Hanselman:** Oh, yeah, so it's been ported, actually... There's iPhone ports and Android ports... Somebody's got an Xbox one... They're out there. It's all open source, that's the joy. And now that my kid is too old to care -- it's a good point, I now realize he's old enough now that he can actually maintain it.

**Adam Stacoviak:** Wow...

**Jerod Santo:** Oh, there you go.

**Scott Hanselman:** So the kid that used it \[unintelligible 00:22:27.02\] 11, 12 years later are now maintaining the software... I have to get on that.

**Jerod Santo:** Yeah, absolutely.

**Adam Stacoviak:** So when you say "open source", does that mean it's also on GitHub?

**Scott Hanselman:** Oh, absolutely. It's on GitHub. Everything's on GitHub.

**Adam Stacoviak:** Oh, okay.

**Scott Hanselman:** Yeah, because when SourceForge started sucking, we moved it over to GitHub.

**Adam Stacoviak:** Makes sense. Well, we are up to our first break - let's take that, and when we come back, we'll dive a bit more into conferences, what you're doing with OSCON, and a bunch of other fun stuff that we have such great plans to talk about. So we'll take this break and we'll be right back.

**Break:** \[00:22:58.26\]

**Jerod Santo:** Alright, we are back with Scott Hanselman. Scott, you have a long-storied history inside and outside of Microsoft. One thing I'd love to hear from you is how you manage your time a little bit, because you have this full-time career with Microsoft, you also have all this extra stuff that you've been doing... But we'd like to see where you're coming from as an employee of Microsoft, having all these things on the side, and kind of what's your purview into the software ecosystem.

**Scott Hanselman:** That is a broad question, almost completely open-ended.

**Jerod Santo:** Just take the best path through it.

**Scott Hanselman:** I've worked at Microsoft for now like eight years or so, but because I work in Portland, I don't work in Seattle - I like to joke that I'm outside the Redmond reality distortion field... And that's not necessarily meant as a dig to my co-workers, but it allows me to be slightly more in the community.

There's lots of different people at Microsoft; it's a big company with a lot of different people from a lot of different backgrounds, but there are some people who go to work, and they go home, and they go to work again, and they're always in Redmond, Washington... And they're working, they don't have time to go to conferences, they don't have time to talk to developers, so they can get a little bit of a groupthink... So one of the things that I try to add to it is just a little external perspective.

I've since built a team, and I've got Maria in New York, John in San Diego, Jeff in Philly... So we are all outside Seattle, all in different communities, all trying to give a perspective on how we've gotta do things. And I went to Microsoft to do open source and open-source things, and through a cast of thousands and lots and lots of support, working from within, from the lower levels and pushing it up, with support from management, we were able to open-source a ton of stuff.

That has been possible through bosses that would -- you know, we have reasonably flexible work hours, they don't mind me blogging on the side... I told them when I came there that the podcast was mine and it was going to continue... All of those things need to be made possible by the first-level and second-level bosses.

You can usually get away with a lot of stuff if a VP doesn't know it's happening, right? So some of this stuff was very much like changed from within. Then once it got visible, the VPs started to go, "Okay, well that's... Is that good, is that bad?" and then they educate themselves about open source, and then we had support from the highest VPs, and now fast-forward a couple years, people who were mid-managers are VPs now... So those of us at the low end now have what we call "executive air support."

Scott Guthrie, who's our VP, who was just a regular Joe when I got there, now supports open source fully and does everything that we can to make us successful.

**Adam Stacoviak:** So has your podcast been around advocating open source then?

**Scott Hanselman:** Yeah, my podcast has always been about open source, about useful software and about inclusion. The focus on the podcast lately is it tries to be like NPR, where I have this theory where there's people going on commutes around half an hour - my show is only a half an hour long - and they want to stay up on the latest tech or the latest whatever, and this show gives them an insight into tech that they're not working on.

So let's say that you're just like an average Joe or Jane who's going to work at Aflac, or some company that does textboxes over data... And you doing textboxes over data for years, it's very easy to not know what React is, or Angular, or Redux, or whatever... Like, Jenkins came and went... All that kind of stuff just sounds like words, and you're like, "Well, I wish I had time to go to a meetup, but I gotta make this software." My show tries to give them that insight into new tech, new perspectives and new ideas from people they haven't ordinarily heard of, people who aren't on the conference speaking circuit.

\[00:28:19.16\] Just like when you turn on Fresh Air on NPR and you're like, "Oh, it's that guy from that thing that I'm kind of vaguely familiar with", and then after half an hour you're like, "Wow, Chris Pratt's going places. I didn't know he was beyond just community."

**Adam Stacoviak:** Right, makes sense.

**Jerod Santo:** Yeah... Well, that's one of the things I love about audio, and one of the reasons why we do this show, as well. I'm a podcast junkie in terms of listeners... I listen to podcasts a lot as a way of augmenting my keeping up or my education. What it really does is it provides breadth of knowledge, as opposed to books or sometimes blog posts, or diving real deep and getting depth of knowledge... Which actually helps with impostor syndrome, by the way. You feel like less of an impostor when you at least understand that acronym or that concept at a layman's level.

And audio, as a passive medium, is one that I can do well mowing the lawn, or working out, or driving - like you said, that commute is an excellent way of just getting more breadth... So I think podcasts like yours - and hopefully like ours, as well - is a real value to people, keeping up and not falling behind.

**Adam Stacoviak:** We're also remote people, too... Scott, you're providing a show for people who can't get to meetups or can't get into community; that also is the same thing for those who are remote. Jerod's in Omaha, I'm in Houston... I could easily go down into Houston and go to meetups and hang out with some people; I know some people in Houston and it's pretty easy to tap in, but I've got family, we're doing things, and I don't have the time to do it. So not just those who are constantly working, but those who just don't have access; they're just far away, or even in a different country. We have listeners that tweet and e-mail us in different languages, like ones that I can't even read. So our reach is far more than just our -- you know, because I'm in the U.S. or because we're in the U.S., our U.S. borders... It's not even just like Canada and Mexico, it's far beyond that; it's Japan, it's South America...

**Scott Hanselman:** It's important to remember that -- and for many people who are listening, these are like "Duuh!" statements, but bear with me... It's important to remember, as three Americans on the podcast here, there's a whole class of people out there that have absolutely no interest in coming here, and they're gonna live happy and fulfilled and wonderful lives... So let us not presume that what we say is necessarily gospel or provides a whole lot of value, but it's exciting to find out when you're being heard; I have a lot of great friends in Iran that listen to my show, so it's always exciting to see how they do software, and how their teams work.

**Jerod Santo:** Absolutely, that's always exciting, and somewhat fearful when you see a tweet that's in Chinese or Japanese, and you hope it's good, so you click on the Translate button... And the translation doesn't quite get you there, but you're thinking "I think this is a positive thing..."

**Adam Stacoviak:** Yeah, definitely. I've translated a couple recently and I'm like, "Wow, okay... That was really nice!", even if it was not perfect, you know?

**Scott Hanselman:** Well, I reply in broken Google Translate, and they often appreciate the effort, and I appreciate them.

**Jerod Santo:** Oh, nice.

**Adam Stacoviak:** I remember doing this... This is pre-recent stuff, but back when I was really trying to be an advocate for those who were writing CSS and I wanted them to learn Sass, I was like all over Twitter; Twitter was the proving platform for starting TheSassWay.com, which turned into a community-run blog on GitHub and all that good stuff... But I was relentless about tweeting people, and I would just be watching the Sass keywords. They would be in different languages, and I'd translate it, and then I'd write what I wanna say and translate it back, and I respond and I'm just hoping that Google was right and they didn't make me say anything mean... Because I was that relentless and I was doing something very similar.

\[00:32:09.17\] And they were like, "Wow, somebody actually is advocating for people to learn this new thing", and it was just a very pure and childlike approach, joy-wise, towards reaching out to people and being inviting. It was pretty cool.

**Scott Hanselman:** That's good.

**Jerod Santo:** I never even considered responding back in their language using Translate. I guess I assumed that would be offensive, or I could potentially offend, but I'm glad you've gotten good results \[unintelligible 00:32:36.14\] so I think that is neat.

Let's step back to where we were; we're a little bit off, navel-gazing a little bit - my fault, not yours... We were talking about Microsoft and open source, and this changing shift. We cover the open source community, and unless we're not doing our jobs very well, we've covered this change, this shift towards an investment in open source coming from Microsoft over the last few years, and I find it very interesting that it seems like from -- maybe not from the higher levels, but from the lower levels you were instrumental in pushing that forward. Can you expand some more on that? Because you touched on it, but... Just the recent history of Microsoft's open sourcing of almost all the things at this point.

**Scott Hanselman:** The idea was to start with the ASP.NET framework, which is kind of like the Rails part of Ruby on Rails. It's the string concatenation part, I like to say... Everyone likes to think that their web framework is so sophisticated and amazing, but ultimately you're just angle brackets and curly braces together into strings... So it's the Django, it's the Rails, it's the Express - that's kind of a non-committal thing to open source, right? You're not giving away everything; you're saying "Here's our sauce, but we're not gonna show you everything that's happening in the kitchen."

In doing that though, we built up a community of people who are excited to go on and improve that, and by making that not just open source - which is step zero - but also doing takebacks, so actually taking pull requests, taking commits, that started to build out this community, and then we slowly kind of worked our way down the stack, until now the entire stack, all the way into the compilers and the libraries and the Jitter and the garbage collector are all open source, where you could even (if you wanted to) take a Raspberry Pi and build the whole thing on ARM or on some other platform and be somewhat successful.

We've got a number of customers who have actually got embedded NoSQL databases written entirely in open source C\# running on a Raspberry Pi... A fleet of them, a big cluster of Pi's. That would not have been possible had we not kind of slowly, piece by piece, proven the model.

It's pushing this rock uphill, until it eventually rolls down the other side, and then hopefully it doesn't kill anybody.

**Jerod Santo:** What were the convincing arguments, the things that worked? Because obviously probably along the way there were things that don't convince the higher-ups... I believe you said -- what did you call it, the executive air?

**Scott Hanselman:** Executive air cover, executive support... That's the idea that like "We're going in!", like \[unintelligible 00:35:18.28\] "We need air cover!" So it's like, I'm gonna do something stupid, I wanna make sure that I have a boss, who that when some other boss, some other general on another battlefield says "Wait a second, this is not compliant with our whatevers that your vice-president or your boss says that's a good idea."

For example, at my last company I had executive air cover, 15 years ago, when I introduced continuous integration into your pipeline. That was not a thing. We were using a program called CruiseControl.net, that was like a build server... Introducing unit testing in a build server into a bank is a big deal, and doing that you could ruffle a lot of feathers and upset a lot of people; having executive buy-in, or at least executive air cover, so that when someone gets mad or someone's cheese gets moved, the boss can say "Well yeah, you know, we needed to move your cheese... It was getting old."

**Jerod Santo:** \[00:36:18.06\] So what were the arguments...? So here's the perspective I'm trying to get, because from where I'm standing and where Adam's standing, we're very much on the indie side, very small -- open source has been in our blood, so to speak, for many years, so we don't see it from the inside of corporations, but we're speaking with many corporations where they're now embracing it. There's inner source, and things moving towards...

**Adam Stacoviak:** Foreign office, even... Open source offices.

**Jerod Santo:** Yeah, corporations have open source offices to open source their things. So Microsoft being previously notoriously proprietary on that side of the fence, this change is very uplifting... It seems like there's other people who could be trying to convince inside their corporation that open sourcing is a good idea... So that's why I say, what were the convincing things?

**Scott Hanselman:** You have to know why someone is motivated to do their job and what their job is. If you, as an engineer, go and talk to someone with an MBA and try to explain to them why open source is important to you, that does not tell them why it's important. You have to be empathetic and put yourself into their shoes. So for a businessperson or an MBA type, you might go and have to say "We need to do open source because we are losing deals because it's not open source", or "We need to use open source because the community perceives us as being closed, and the temperature has changed in the community such that closed source is no longer cool."

You might wanna then go to an engineering manager and say "We need to use open source because we don't have enough people, and there's more innovation in the community than there is internally." Or you go to that engineering manager and you say "We are not the smartest people in the room, and it is hubris for us to continue to believe we are the smartest people in the room. Let's get expertise. We can't hire that expertise, let's use the open source community."

So you're going around saying "open source is important", but you're changing your story based on what the story is that the other want to hear.

**Jerod Santo:** And specifically -- I don't think you can get this specific, I guess it might be a little bit too far back... But what were the convincing arguments in your cases?

**Scott Hanselman:** You're implying that my advanced age prevents my memory? \[laughter\]

**Jerod Santo:** Yes, I'm being ageist right now... I'm assuming you're older than me, and I'm using it against you. No, I'm just saying that maybe I'm asking a question that goes too far back for you to remember the details of the specific arguments that you used in specific cases, but I think your generalized answer is probably better anyways.

**Scott Hanselman:** Those general answers are pretty specific. But it also gets to - and this is entirely my opinion, so if you're a journalist, be aware; my opinion - the larger Microsoft strategy, which is what I like to say is "running your own for-loop in the cloud", right? Microsoft wants to sell you stuff.

**Adam Stacoviak:** Anytime, anywhere.

**Scott Hanselman:** Anytime, anywhere. It used to be "Hey, buy Windows. Hey, buy Xbox. Hey, buy Office. And if you don't want Windows, well, let me tell you why Windows is better." Now we've got this great cloud, and if you wanna run Python or Erlang or PHP or whatever makes you happy, we're gonna run it best in Azure. You love Ruby on Rails? Cool, I just did a blog post where I was on Windows, running Rails on Bash on a real Ubuntu - not a VM; Ubuntu runs on Windows now - and then fired up Rails entirely on Ubuntu, and then pushed it up into Azure and did it all in Visual Studio Code.

So in five years we've blinked and then reality is now a hybrid, and Microsoft's fine with it all. If you don't like it, fine, I don't care. I have an iPhone, but it's also got Word and Excel on it, you know what I mean? That's a whole other kind of idea, but it's not a radical shift in the sense of "Hey, we have Office - that's good. Hey, we're good at code - that's cool." All we're doing is saying "All comers are welcome." So this gets back to the initial thing that we've talked about 40 minutes ago, which is how do you make things as inclusive and welcoming to everyone, whether it be a programming language, a personal language or whatever.

**Adam Stacoviak:** \[00:40:20.15\] Open source is the way then?

**Scott Hanselman:** I think open source is certainly a gateway drug.

**Adam Stacoviak:** Yeah. One more note on this subject... I was talking to Gaurav Seth, program manager of ChakraCore, Chakra and Typescript, on a different show called Spotlight... I was actually at Node Interactive, having this conversation face-to-face, and his demeanor changed so much when I asked him the question basically like "So you're an 11-year veteran at Microsoft", and he's describing this shift of proprietary, as Jerod mentioned, to open source, this new Microsoft we're all seeing... And I asked him the question - I forget exactly what it was, but you can see the sheer joy, as an engineer, because he's been an engineer at Microsoft the whole time; not a manager, not an executive, not a VP... A doer. Not like those people don't work, but just using the analogy there... But he was excited. He was like, "I'm never leaving..." and it was almost like he could have been thinking about leaving, but now this new Microsoft got him so excited that he's able to do things in the community - as you even mentioned earlier, Scott - that he wouldn't ever be able to be doing before. You could see a complete demeanor change and a visual change of his body language when I asked him that question, and his happiness came out. He was like, "Yes! I can finally do things I wanted to do."

**Scott Hanselman:** Absolutely, that's exactly true. I think that people are starting to realize also that there is evil companies, and then there are simply kind of unorganized companies. I've never been in a meeting where someone has steepled their fingers and went "Yees, yeees... Oh-oh-oh-oh!" I think it doesn't happen at Microsoft. We might screw up, we might put out a tone-deaf ad, or accidentally try to write something and do a non-invented syndrome, but that's just because we're big and unorganized... 130,000 people, or whatever. But as far as like pure evil - I haven't seen it. And that's not like Uber level of evil.

**Jerod Santo:** I was gonna say, "Well..." We can probably come up with a couple of examples.

**Adam Stacoviak:** I would also just kind of describe the way from the outsider's perspective that this change in Microsoft seems - in a good way - kind of like a cold, where one part of Microsoft caught the cold and they're sneezing on folks, and now everybody's kind of like getting this open source bug, and maybe that's what we're kind of seeing unraveled.

**Scott Hanselman:** That is a very weird analogy, but I'm gonna go ahead and take that. Another idea - I'm gonna take your analogy and bring it back to, if you're familiar with who Seth Godin is...

**Adam Stacoviak:** Yeah.

**Scott Hanselman:** He had a conference called the Ideavirus. That's one word, if you google for that. That's exactly what you described; it's like "Oh, well, that looks good. I wanna do that, too."

**Adam Stacoviak:** Yeah. That might be why I used that analogy, because it is kind of weird. Seth Godin's book, Sneezers, Attracting Sneezers - the same book, probably similar chapter, whatever... \[laughter\]

**Jerod Santo:** Probably. How I like to think about it, which to me is exciting, is being -- in my mind, I was anti-Microsoft for a long time... No offence, Scott, but I was.

**Scott Hanselman:** No, I don't mind... I mean, that's more Microsoft for me.

**Jerod Santo:** I know, but I just felt compelled to say it anyways. So when I started to heard the inkling in the news of like "This is happening, that is happening", my cynic is like "This is a facade."

**Adam Stacoviak:** "They're fake. They're not real."

**Jerod Santo:** "They're trying to get us to like them again, and we'll never like them..." Just that that person inside me that I don't like very much thinks of it that way, and what's uplifting and I'm happy to hear over the last few years is that it has been more like a thing that happened from the inside out, and as Adam said, it's like a cold that has caught on and now everybody's sneezing... I don't understand these analogies, but..

**Adam Stacoviak:** \[00:44:07.29\] \[laughs\] Sorry about that.

**Jerod Santo:** The whole company is sick now and we're happy about it? I don't get it.

**Adam Stacoviak:** The idea is spreading.

**Jerod Santo:** Yeah, so it is a very real thing that has spread, and that's such a benefit for the whole community. It's awesome.

**Scott Hanselman:** I wrote a blog post a while back called "Microsoft killed my pappy." For those of you who may be listening and are like "What's a pappy?" - your pappy is like your grandpappy, like "Microsoft killed my pappy and I'll never forgive them!" Well, it's like, I've met 23-year-olds that seem to claim this sense of generational pain around Microsoft being evil, and it's like "You weren't even born during the browser wars. I fought in the browser wars, young man!" \[laughter\]

**Adam Stacoviak:** That's so funny.

**Scott Hanselman:** And it's like, "I appreciate that you hate Microsoft. Yeah, they do some dumb stuff with patents, yeah, there's the whole Android back and forth thing", but I think Microsoft has pretty much claimed its space as not even remotely in the top three evil companies. We know what the other companies are doing.

Again, to get back to the big -- it's a big company and it's not that organized all the time, but I tell you... I have personally met, hung out with Satya - super nice person, wants to do the right thing. It's possible to have a great company that's an open source company, that also makes money and serves both the user and the shareholder, and one day if it's not, I will quit.

I've said this before - if Microsoft or my team does something that I can't get behind or I'm not okay with, I'll leave. I have no problem doing that.

**Jerod Santo:** I think that's a good stopping point. On the other side of the break we're gonna talk about getting people together in meet space - yes, conferences. Stay tuned for that.

**Break:** \[00:45:53.12\]

**Jerod Santo:** Alright, we are back with Scott Hanselman.

**Scott Hanselman:** AND WE'RE BACK! Oh, sorry... That was your... My bad.

**Jerod Santo:** You can bring us back in, Scott... You wanna bring us in?

**Scott Hanselman:** "And we're back, with the third act of the Changelog." \[laughter\]

**Jerod Santo:** Okay, maybe I should do it.

**Scott Hanselman:** Too much? \[laughter\] Too Frasier? No, please, go ahead.

**Jerod Santo:** Well, we're in, this is it. You brought us back in.

**Scott Hanselman:** Oh, that's a nightmare... So sorry.

**Adam Stacoviak:** \[unintelligible 00:47:30.13\]

**Jerod Santo:** Let's talk about conferences. You've just recently been at a couple, and we're all gonna be at OSCON in Austin next month, in May. In fact, we have a special promo code for that... By the way, listeners, if you wanna come meet us at OSCON, we will be there, Scott will be there... Use code "ChangelogHallPass" to experience the highlights of OSCON with an expo hall pass for free. Is that right, Adam?

**Adam Stacoviak:** That's totally free. Yeah, 100% free.

**Scott Hanselman:** Oh, wow. That's quite the hookup.

**Adam Stacoviak:** Yeah, oscon.com, click Register, click Expo Hall Pass, and when you get asked for a coupon code, just pop in "ChangelogHallPass" and you'll get it for free.

**Scott Hanselman:** \[00:48:13.00\] And they can tweet that, can't they?

**Adam Stacoviak:** Tweet it, share it, blog it, podcast it... Whatever it takes.

**Jerod Santo:** Podcast it... \[laughs\] We'll be out there in the expo hall, and in fact we have free T-shirts for every Changelog community member until T-shirts run out.

**Adam Stacoviak:** Limited supply.

**Jerod Santo:** We have free stickers for everybody, so make sure you stop by and say hi to us. But that's enough of OSCON-specific stuff... Let's talk about conferences in general. Scott, you seem to have opinions about what makes a good conference, what makes a bad conference, and secretly - although we're on the air here - Adam and I have been talking about conferences and maybe throwing one in the not too distant future. So give us some tips and share with everybody what makes a good conference and a bad conference.

**Scott Hanselman:** Well, I think that having a conference that knows who its audience is and also knows what level it should come in as is important. Certainly a conference that is aiming at a 300-400 level deep technical talks as if it were the last year of Computer Science class of a four-year degree or a six-year degree is one kind of conference, while a beginners getting together is a kind of conference, while a conference about feelings and about soft skills... There was one called OS Fields recently that was pretty good.

Know who your audience is, but then I think it's - while this may not be the right place, because we're presumably three straight white guys on a Skype - the difference between diversity and inclusion, which I think is an important topic worth pointing out. You don't wanna try to build a team of power rangers; that's just pie chart diversity where it's like "Yeah, we have one Chinese girl and a black guy. You can't have two, because it's the power rangers, you've gotta just..." - that's wrong, and if you very well-meaning, very kind gentleman decide to go and start a podcast and then start asking your couple of friends of color "Hey, do you know anyone cool who can speak at our conference?", that's kind of the wrong way to go about it.

If you haven't already, you should start diversifying the people that you listen to, the people that you follow, and exploring... There's a whole ton of people who are not on the conference circuit, but they're building amazing stuff. Invite them. Say, "Hey, I really dig what you're doing. Come and talk with us." Work with them.

The conference I just came back from called Codeland was unique because the organizer \[unintelligible 00:50:26.28\] actually coached and worked with each presenter, even myself; some people were first-time presenters, some people were 20-year presenters. She worked with them for hours, coaching, making sure the message lands right... You could tell who was a pro presented and who wasn't. They had people from the New York Public Library, they had people from the industry, they had people from the government. They had the CTO of New York City. All these different people, and it was the most consistent, clean conference I've ever seen put together, and that's because you don't just invite people and have them show up, and then do their standard shtick, and you don't just pull from the same pool of 200 people that are out there on the circuit.

You've gotta mix it up, and diversity isn't just about picking a team of good-looking power rangers... \[laughter\] It's different perspectives, it's different ages... Hey, you laugh, but it's true. This is not Nickelodeon, this is not The Suite Life of Zack & Cody.

**Jerod Santo:** Yeah, it's a very apt way of describing it. It tickles me, the way that you say that. It's empowering, and it's an effective way of saying that.

**Scott Hanselman:** And I think that trying to go and say, "Well, we've got 38% women. That's success" - that's not how it's done. Ask people, talk to people and invite people because their stuff is cool. If you look at my podcast, it's a very inclusive podcast because I am reaching out across the aisle and inviting people, like "We think you're great, let's hear from you."

\[00:51:59.18\] If they are from an under-represented group, then we, the three white guys on Skype, are lending our privilege; we are lending our privilege to them to lift up their voices, and then... Many of my podcast guests have gone on to do speaking, and books, and keynotes of their own, and I'm happy to just have been a tiny, tiny ramp to lift their voices up, and that's how you put together an inclusive conference, not by asking your black friend if they know anyone.

**Jerod Santo:** So where's the place for the demographic breakdowns, because it seems like there's value there, but is it only perhaps in retrospectives, when you can kind of gauge how you did it, perhaps? I mean, we have corporations that are releasing diversity numbers and we hold them to certain bars, and we look at that and say "Oh, it's on an upward shift, so that's a good thing", and we can all agree that's a good thing, but... Is that the cart before the horse?

**Scott Hanselman:** I think that's the cart before the horse. I like to think about it in terms of, if I look at the wall of faces of people who are speaking at a conference, does it look like a party I'd like to go to? Does it look like they're my friends? Does it look like America? Does it look like the world? You know what I'm saying?

When we were at the conference at Codeland, or even OSCON last year, which had some amazing inclusivity numbers, if you looked at it, it looked like America. It looked like a bunch of people that live here. The fact is that we all look different, and people are differently abled, and people are of different ages... So it's not just about colors and making a nice United Colors of Benetton looking ad where everyone's cute, it's about different voices... And if you look at the wall and you say, "Yeah, look at that!", that's aspirational, that's representative. That's success.

To give another example, I won't speak on a panel if it's all dudes. Someone will invite me, I'll say "Okay, great. Who's on the panel?" and I go "Really? Six guys, and you couldn't find one woman to talk about data science? Let me give you the names of 58 women that are doing amazing work in data science. Let's get some voices out there."

Or you say, "Wow, everyone on the entire panel is 45? Hey, I know some cool data scientists that are in their early 20s and are doing some amazing work", and the only way that you're able to know those names is by diversifying the people that you follow and by reading different papers or different blogs and different podcasts.

I hope I don't sound too preachy, but I just think that we, the white guys, need to do better. And the way that we can do that is by changing our headspace around this, and trying to think about inclusiveness and not diversity.

**Adam Stacoviak:** You kind of give a call-to-action for those listening, basically saying "If you don't have, go find. If you look around, if you look to the left and to the right and it's not inclusive, it's not diverse, go find them." How do they go and find...? Maybe it seems like an easy answer, but how do you go find people that are not in your normal circles -- I'm not saying "normal"... It's really hard to dance around these words, but how do you go out and find diversity? Where do you go look for it? Do you go to a conference?

**Scott Hanselman:** Well, it's pretty easy... Look in the mirror, and then follow people who aren't that. Do you know how your Facebook page after the elections becomes this weird...

**Adam Stacoviak:** I don't use Facebook.

**Scott Hanselman:** Let's pretend that there was a world where you use Facebook.

**Adam Stacoviak:** \[laughs\] Yeah.

**Scott Hanselman:** If you have a feed, that feed has been tailored. You've taught Facebook how to treat you, so you're gonna say, "Political statement!" and everyone else is gonna be like, "Yeah! F- yeah, political statement!" And it's like, "Yeah, I'm so glad you agree, too." Well, that's not because your political statement is right, that's just because you've curated a feed of people that think like you.

My buddy Anil Dash, who is the CEO of Fog Creek, had this experiment he did where for a year he would only retweet women. This is an experiment, and I'm not saying necessarily it's a good thing or a bad thing; it's simply an experiment. What he did is he has half a million followers on Twitter (so he has significant size) and he says "Well, here are some under-represented voices. I will lend my privilege and I will lift up their voices, so as an experiment I will only retweet them." Men might say, "Oh, that really sucks!" I really don't think that Anil's retweet was really the thing that made your business fail, so take a breath... It's okay that he did that, I think it's a great idea...

**Jerod Santo:** \[00:56:18.08\] \[laughs\] If you're mad about that, you've got too much time on your hands.

**Scott Hanselman:** Yeah, quit being mad about that; worry about other stuff. So that's a great experiment, because it forced him to go looking for people doing amazing work, but he could find those great women and those great people of color doing cool work, and then look at their follower lists. If you meet a really cool woman or person of color or someone who's not like you in data science (I'm just using that as an example), look at their list of followers. They will have either consciously or unconsciously created a list of their own followers, which are people in their field that make them feel welcome. Then follow those people.

**Adam Stacoviak:** Gotcha. That's a great answer on how to do that. The thing -- I need it, but then at the same time there's lots of people listening to this show who think "Great advice, Scott... How do I do that?"

**Scott Hanselman:** Yeah, absolutely. And the no-no is don't call your one friend and ask them if they know anybody. It is not their job to help you make--

**Adam Stacoviak:** That's an episode of "It's Always Sun In Philadelphia."

**Scott Hanselman:** I don't know, I have to go and watch that... It's important to know that it's not your black friend's job to help you find more black friends, and it's not their job to help you diversify your conference, nor is it their job to make you feel better about yourself.

**Adam Stacoviak:** I actually think it's episode one of season one, so it's pretty easy to get there. Or at least episode two. \[laughter\]

**Scott Hanselman:** Alright, we'll check that out.

**Adam Stacoviak:** Yeah.

**Scott Hanselman:** There you go. It's usually a pretty uncomfortable show.

**Adam Stacoviak:** Well, that's the whole premise... They touch on the uncomfortable, basically.

**Scott Hanselman:** Yeah, just like we are right now. I'm sure there's a bunch of listeners right now that are like, "Wow, that took a turn..." But it's important and you've gotta think about it like that, so... Tweet me if you think it sucked.

**Adam Stacoviak:** I mean, sure, it is uncomfortable. I mean, I think it CAN be uncomfortable.

**Scott Hanselman:** I am not uncomfortable, nor am I dancing around my words, you'll notice.

**Adam Stacoviak:** No, I mean...

**Scott Hanselman:** No, I feel strongly about this, because here's the deal... It doesn't threaten me. Your success doesn't threaten me. Your success lifts us all up, and that's kind of my whole thing. Let's bring more people in, and let's not convert them to our way of thinking... Let's not have a monoculture. If you have a new person on the team, don't use words like "culture fit." That's coded language to make them feel like "Well, they've not seen Office Space, so they're not our kind of people. What do we do? We make them watch Office Space." Well, what do THEY wanna watch? What do they listen to? What do they do? Let's widen it. My shows, my music, my things, my prospects will be broadened by their perspective.

**Adam Stacoviak:** Yeah, absolutely.

**Scott Hanselman:** And then... You have to make them watch Office Space.

**Jerod Santo:** Yeah, I was gonna say... \[unintelligible 00:58:42.22\] because I'll definitely ask them to watch Office Space.

**Scott Hanselman:** It's required for everyone to watch Office Space. \[laughter\]

**Adam Stacoviak:** Required reading, here you go. Have fun.

**Scott Hanselman:** Yeah!

**Adam Stacoviak:** Well, Scott, this was a blast. It was great to meet with you, catch up with you, hear a bit about your past, talk a lot about Microsoft and where it's going, and then obviously, this comfortable/uncomfortable conversation near the end about a much needed discussed topic, so thank you for sharing.

**Jerod Santo:** Inclusion, not diversity.

**Scott Hanselman:** I appreciate that. And again, remember, you heard it on a show with three white guys, so maybe this isn't the show, maybe I didn't do it right. Go and diversify your podcasts. Wouldn't you agree with that, as podcast junkies? There's a lot of great podcasts out there from so many different people... Maybe try listening to one from different people and see what their perspective is as well.

**Adam Stacoviak:** Yeah, absolutely.

**Scott Hanselman:** And my show! Listen to MY show, friends of Changelog.

**Adam Stacoviak:** What's the URL?

**Scott Hanselman:** HanselMinutes.com. If you go and google for Scott, scroll past "Scott toilet paper" and you'll find me right there.

**Adam Stacoviak:** Nice. Thanks again, Scott.

**Scott Hanselman:** Bye.
