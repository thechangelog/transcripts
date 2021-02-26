**Johnny Boursiquot:** Hello everybody, and welcome to another episode of Go Time. This is the second episode of the year, being recorded at least... Is it the second one? What week is it?

**Kris Brandow:** It's February, Johnny. This is like the fourth, or the fifth episode...

**Jerod Santo:** I think we know what time it is... \[laughter\]

**Johnny Boursiquot:** This is not the second episode... \[laughs\] Yeah, let's keep it moving, because... Yeah, 2021 is starting out a bit suspect, but I'm still holding out hope. There's still hope. Alright, so I have some guests today, and I have my co-host, the lovely Kris Brandow... Hello, Kris.

**Kris Brandow:** Hello! How are you, Johnny?

**Johnny Boursiquot:** I'm feeling chirpy today, I'm feeling good. We'll see if that comes through in the show, but I'm feeling good. I'm feeling optimistic. We did manage to snag Jerod Santo, who's usually our editor-in-chief...

**Jerod Santo:** Yeah...

**Johnny Boursiquot:** ...making sure we all sound good, and post, and everything else...

**Jerod Santo:** Right.

**Johnny Boursiquot:** ...cutting out all the excess, and stuff like that... We did manage to snag him right before we went live. We convinced him to join us to talk about documentation today. Hi, Jerod.

**Jerod Santo:** Yeah, normally when you want to complain about Go Time content, you just email Mat Ryer. But if you wanna complain about how it sounds, then you can contact me... But today I guess you can just blame me for everything, because I will say dumb things and make the sound not so great, so... But I'm happy to be here with you, Johnny and Kris.

**Kris Brandow:** Awesome. We'll have fewer bad jokes, that'll be the thing.

**Johnny Boursiquot:** Yeah, yeah.

**Jerod Santo:** I can't promise that either. \[laughter\]

**Johnny Boursiquot:** Awesome. Last but certainly not least is Ian Lopshire, who says he's -- what was the joke again, Ian? Please, say it again.

**Ian Lopshire:** Well, what was it -- like a hobbit that can't quite stand straight, Lopshire?

**Johnny Boursiquot:** Right... \[laughter\]

**Jerod Santo:** Which is epic...

**Johnny Boursiquot:** Oh, man... Alright. So we have a pretty, I think, nice show for you today. It's a topic that is (I think) universally applicable to all developers, whether you're a Go developer, Ruby, Java, C\#, whatever, I think this is gonna apply broadly. But obviously, this is the Go Time podcast, and we're gonna tie it into some Go content, naturally... But the topic itself is one that we've heard from folks that actually suggest topics for episodes for the podcast as well... And also out there on social media we've seen some talk about documentation here and there... But really, what brought this show together - for me, the moment the topic came up, especially in the context in which it came up, I was like "Okay, naturally, we've gotta do a show on documentation."

And for me, what prompted that was a post recently by Forrest Brazeal (A Cloud Guru) around documentation. Not just reading documentation, like we're typically used to - or at least that I'm typically used to - not just look-ups when you're stuck kind of thing, but really deeply consuming documentation. And this became even more relevant when Eric Miller, who actually suggested one of the episode - shout-out to Eric for a nice topic suggestion there... His take was that coming from Python, which has extensive and often narrative documentation, GoDocs in particular seemed just like a bag of functions, documentation of functions.

I think a deep dive on how to approach GoDocs would be a great topic for beginners such as myself. I've just started working on Go, and have learned a tremendous amount from the show. Not assuming that everybody is familiar with Go etc. etc. But his concern sort of resonated. This is not the first time we as veterans in the community have heard about this comment, that "Oh, Go documentation is really meant for look-up, not really for learning and developing your practice of doing Go."

So today's show is really about documentation in the sense of how do we consume it today, how should we consume it, with what purpose and intent should we be consuming documentation? So that's the level-set, that's the sandbox we're gonna be playing in today, and I'm gonna fire off the first salvo to our guest. Hi, guest. You're in the hotseat.

**Ian Lopshire:** Alright. \[laughter\]

**Johnny Boursiquot:** How do you consume documentation today? In what style, and under what circumstances?

**Ian Lopshire:** You're right, it's a bit of a hotseat. I think there's kind of two places. It's when something's gone wrong, and I'm trying to figure out why... And second, kind of at the beginning of a project, just to get some context around how the things I'm using work. And maybe not just technical documentation, but other documentation, like policy, stuff like that; at the beginning of a project I try to at least do a quick overview of a lot of it.

**Johnny Boursiquot:** And Kris, same question to you - when do you find yourself looking up documentation, or diving in somehow?

**Kris Brandow:** I think I have two parts to my answer here... Because I think with Go I spend a lot of my time looking at GoDoc, looking at source code, trying to find all of the information that I can to understand how to do something... So I think when I am trying to learn something new, like trying to learn a library that I wanna use or something, I'll scour the documentation there. And then the other type is definitely when I need to remember something. I have Dash, which is a really awesome piece of software for macOS, where you can just hit a hotkey, type in some words, and boom, now you have the API that you're looking for, and you can understand how to use it.

I definitely think that when it comes to documentation as well, in Go it is one of those things I think is our weakness as a community. I got my start in, of all things, PHP and Drupal, and one of the things that I've always loved about that community and that software is that there is so much documentation. Just so, so, so much of it. And that documentation is actually what enabled me to become a software engineer in the first place, just being able to sit down and read docs. So I think there's a part of me that still yearns for that type of documentation, of just like heavily documenting how something work, where somebody can just sit down and read it, and it's not as GoDoc has traditionally been, a kind of bag of function documentation, oftentimes lacking in critical ways.

**Johnny Boursiquot:** So the first thing I noticed with documentation or reference material or learning material in general, regardless of the technology I've been in, is that you always notice an ever-flowing stream of just new tutorials, new beginner content.

Ruby, for example, is very old as a language, very established. It's been around for a long time, and yet you still see new content coming on blogs, or videos... There's an ever-flowing stream of learning material; a lot of it tends to be beginner to intermediate level related content, but because everybody's always learning or wants a new take on something, or a new generation of programmers that are adopting the language, they're picking up on new things - it's the same thing with Go, obviously; and Go has been around for quite some time now, and still, every now and then I'll see some post on Medium, or a number of other developer-related sites, content just coming out... Those tutorials and those videos on YouTube... Shout-out to Francesc Campoy, Just For Func. I miss that show, I miss you, Francesc...

But yeah, there's always this content coming in. And those things play a role in our education as developers, and part of the documentation lore. But what we're talking about here really is there's a threshold where you consume documentation, not because you're stuck and you're looking for an answer, not because you wanna look up a term, not because you wanna solve a problem in the middle of a debugging session, but really documentation for absorbing and immersing yourself in a problem domain or a technology. And that's the context, that's the whole notion behind Forrest's post, which is actually titled "The career-changing art of reading the docs", in which he provides some examples of one individual in particular \[unintelligible 00:12:28.21\] I just started following him on Twitter, he's a very knowledgeable person...

He basically uses Jared as an example of what happens when you have somebody who deliberately consumes documentation... Not because they have a particular problem they're solving right now, but because they're trying to wrap their head around the entire problem domain. And this is something that I've intuitively done, but I've never quite found the words to articulate that extra level that you sort of reach once you really start to consume everything, front to back, cover to cover, the manual of a piece of technology. I'm wondering if any of you have experienced that level of ascension, if you will. It's like, you're coming to realize "Oh my God, there's so much I don't know about this."

Jerod, I haven't heard from you yet, and I know you do some Elixir, I know you do some other stuff... I'd be interested in hearing if you've experienced anything like that.

**Jerod Santo:** Great question. I've never considered if I've ascended before, so I'm trying to sit here and think "Have I reached ascension in my deep-dives of a particular technology?" And I think what we find, or what I've found, is that usually the documentation leaves off before there's any sort of holistic view; maybe it comes up short for me to have reached that point... And I find myself reaching into the source code in order to go from there.

So I think at a certain point, whatever -- I mean, there's different kinds of documentations, so we can talk about that; if we're talking about the official, first party documentation for any particularly complex piece of software, I can't say I've ever reached that point without going to the source code. And then I feel like "Okay, now I understand this intuitively, and inside and out." Because the documentation usually doesn't take you there. I think it's probably pretty hard to write documentation that good, especially in open source.

For smaller projects, I feel like maybe I can. I feel like Jeremy Ashkenas' literate programming efforts around CoffeeScript, and specifically \_js, where he wrote the documentation in a literate manner, which I was thinking about as I was listening back to your guys' show on writing, where you really are narratively telling a story of a piece of software, so I think something that Kris would really think is cool... I remember feeling like that told me the story of the software in a way that I understood it, just from reading the docs. And the docs was really narrative, and specific in telling why it's trying to do what it's trying to do, and it was really neat... And I felt like I got there maybe with that... But \_js is a group of utility functions - CoffeeScript, more complex - maybe that... But I don't know. Have you ascended, Johnny?

**Johnny Boursiquot:** Um, no. \[laughter\] No, that's the short answer to that.

**Jerod Santo:** Yeah.

**Johnny Boursiquot:** I do want to give Kris and Ian a chance to also (I guess) pontificate... I don't think that's a good word for what I'm looking for here. I'm looking for a realization, or coming to a dating moment of documentation exploration. Has that ever happened? Have you ever sensed that "Okay, I've consumed enough material on this thing, outside of the context of solving a particular problem, that I've somehow leveled up"?

**Ian Lopshire:** Yeah, so you've just talked about how a lot of projects often fall short of getting you to that level that you feel like you've ascended... But where I think that can happen is in actual specifications... Like, if you go read the PGP spec, or something like that, where by definition they have to get into those details...

**Jerod Santo:** Yeah, everything.

**Ian Lopshire:** Everything. I think that's where you can have that ascension moment. And a good exercise for that would be to go read one of those top to bottom, and just highlight everything you don't understand in red. And then read it one more time, and then do the same thing. You'll notice the second time a lot of that red just kind of go away, mostly because you just have this context; you start understanding the idioms they're using, the language they're using... Kind of their ideas. I think once you have the whole thing in your mind, that's when you have this ascension moment.

**Johnny Boursiquot:** Yeah, exactly. One of the things I usually tell Go developers that are wrapping their heads around Go - once you've done a tutorial, which I think the first one I went through, the Go tutorial online, I went halfway through, I was mentally exhausted; I was drained. It was a different paradigm than I was used to. It was a different way of thinking, of looking at programs... I was trying to figure out, "Oh, is it functional?" There was a lot going on in my head. I'm trying to wrap my head around this whole new language, and I had to pause halfway through, and then I went to watch some other videos, or consume some content, tutorials and whatnot, and I then I had to come back to it... And every time I'd get a little farther in. But I'd start from the beginning every time. And then as I did that, I experienced the same thing you just talked about, whereby things made a little more sense the second time or third time or fourth time around; they started making more sense.

So Kris, have you ascended? \[laughter\]

**Jerod Santo:** I love this question.

**Kris Brandow:** I wanna give two examples, because I have one that is non-software and one that is software. So my non-software one kind of dates back to my days in college, when I was a freshman. At my college we'd gotten this brand new television station, so no one knew how anything worked in it... And I joined up and I was like "Oh, this is all so cool!" and there's this thing called a video switcher, which if you've ever seen a picture of a television station or TV studio, it's that thing with all of the lights and the buttons...

**Jerod Santo:** And the knobs, yeah...

**Kris Brandow:** Yeah. So it's actually pretty simple, but it looks crazy... And I saw that, and I was like "I wanna know how this thing works." So I sat down and I literally pulled out the manual and started reading it, kind of cover to cover... And I had no idea and didn't understand anything for like the longest time, of just like reading it... And I'm like, "I don't get it. What is all this for? I am confused." But after a couple weeks of just sitting down and doing that, all of a sudden I was the most knowledgeable person in this station about how this switcher worked... And it felt super, super-good, because everyone else was now coming to me with questions about "How do we set this up? How can we do this?" and we got to do all this really awesome graphics stuff that we couldn't do before, because now someone had acquired the knowledge of the switcher.

I think that's one of the earliest times I can remember sitting down and pushing myself through documentation until I understood something... And I think that level of perseverance and the payoff I got from it motivated me to do the same thing with Drupal... Which for those of you that don't know, Drupal is a content management system and it's written in PHP, and is probably one of the most complex pieces of software that exists. Its learning curve is absolutely atrocious. You will spend so long trying to figure out how anything is working, and it will still be confusing. But it has a ton of really good documentation.

I remember over the course of the summer before I became a real software engineer, I was just reading the documentation over and over and over, and none of it made sense... And I think at some point I was literally screaming "Why aren't you working?!" at my computer. And then kind of as Ian was saying, as I went through things over and over and just kept digging and digging and trying to figure out how things work, things just started to make sense. And as I kind of alluded to before, that's literally how I managed to get my first job as a software engineer, just because I understood how Drupal worked. It was super-hot at the time, and people really, really wanted people that could actually go in and build custom modules and do things with Drupal.

So I think this topic of documentation is super near and dear to my heart, because it's one of those things that allowed me to become a software engineer in the first place.

**Johnny Boursiquot:** It's interesting, there's this common thread in all these stories, which I think we can't let escape. So that common thread is that the content that Ian sits down to consume, the content that Kris sits down to consume - it's not like y'all have some secret backdoor access to some mythical library somewhere, where you are the only one who has access to that content, and you go and you learn things and you come back from the mountaintop with all the knowledge. It's the same exact content that everybody else has access to... Yet, people would rather come to another person, another human to ask a question, rather than reading the docs. All you have to do is look online, if you can somehow avoid the doom scrolling; you'll find on social media sites of people asking questions whereby a bunch of other people are just jumping in and saying "Hey, have you tried this? Have you tried that?" And you'll have that one person who has actually read the docs and says "Oh yeah, here's the thing you need. Click here."

Usually, you have a lot of people \[unintelligible 00:21:35.05\] AWS, because that's my bread and butter, so typically I see this as well... You have people who ask questions on the forums, or on Stack Overflow, and you typically have maybe an AWS employee who jumps in and provides a direct link to something, or provides some piece of seemingly esoteric knowledge around what could be happening, what the problem might be. These people live and breathe that tech, but a lot of times - which is why you have people like AWS Heroes, these awards that are given out to folks who basically have done the work to be as knowledgeable or more knowledgeable than the support people in the forums, that come and provide these answers.

It's a magical thing when folks out there that are using the technology are coming to you, who do not work at company X, about technology X. It's an amazing feeling, it's an amazing thing to watch and see... But everybody has the same access to the same content, yet the blog posts still get an audience, the videos still get an audience, whether they're beginner/intermediate level or not... There's a constant stream of content; it's hard to really -- I mean, you kind of have to ignore some at some point; there's just so much of it. But that's the common thing - everybody has access to the same content, but only those who spend the time immersing themselves and deeply consuming that content back to back, so you can get context around a technology... Only those people are considered experts, in a way.

So with that in mind, my next question to you is has that expertise building -- and Kris, you touched on this earlier... Has that expertise building helped you in your career? Do you have a recollection or a memory, like Kris just gave as an example, do you have a recollection that says "Yes, demonstrating that expertise here, based on the work I've put in..." Maybe reading the docs, doing some exercise, whatever it is, outside the context of actually solving a problem you have right now. That deliberate effort - has that in some way helped you in your career?

**Kris Brandow:** I will say a resounding yes. There's this really interesting trait about me in my career, that I've only kind of realized in the past couple years... And that is that I've never had a software engineering job where I've been in a junior engineering position. Every job I've been at, I've been the most senior person on the team as far as knowledge and expertise in whatever we were working with is, whether that was Drupal or Go... And I think pretty much all of that is owed to me sitting down with the documentation and pushing myself through and continually learning, not because I needed to solve a problem right now, but mostly because I was interested in how things worked, and dug into them, and sat down and was like "Alright, this thing is bothering me, that I don't have this knowledge right now. So I'm gonna go and really acquire this knowledge." And you wind up where you're trying to acquire one piece of knowledge and you acquire a ton of ancillary knowledge around it...

I think that's the kind of mindset that I had that led to me being so senior most of the times, because everybody else around was doing the thing I just mentioned, where they just go and ask someone to answer a question that they had right now", and then "Oh, my question is answered. I'm not gonna have to dig around anymore." And I think when you have to dig in the docs, you spend a lot of time finding other things and asking other questions. And as soon as you kind of jump from question to question to question, you just kind of grow your knowledge base. And that's what I feel I've done in my career, and that's what's led me to this kind of peculiar position where I'm just like "Yeah, I've never been in that junior engineer position, or that intermediate engineer position." It's always everyone else coming and asking me, "Oh, how do we do this? How does this work? Can you design a system that solves this problem that we have?"

**Johnny Boursiquot:** Ian, I wanna hear from you.

**Ian Lopshire:** Yeah, I'll mirror Kris on this - it's a resounding yes, but kind of in a little bit of a different way. In my previous jobs I've worked really close with payroll HR teams to build automations around those... And I was really successful, because I was able to dive in and read not only the laws, but the company policies; I was able to gain a really large context around all of those. So when someone came to me and said "Hey, can we do this?", the answer would be "Oh, no, that's actually not legal", or "Yes, we can do that." Or when someone proposed something... Like, once you have that context around a problem domain, working with that team is just so much easier.

**Johnny Boursiquot:** There's a nuance there, because you have to be very deliberate with that knowledge acquisition. So you don't have an infinite number of hours; if you do, you and I need to talk, because I would like to borrow some of your mojo... We have a finite number of hours every day that we can dedicate to this.

One of the examples that was given in a post I read was that the individual dedicated an hour a day, or something like that, a specific set of time... Even going as far as to block it off on their calendar as deep work, so that they would be uninterrupted in this sort of deliberate knowledge acquisition. Not fixing a bug, not trying to do something on the day-to-day, but literally trying to read the next chapter of the manual... Which is slightly different, obviously, but in the context you give, I'm wondering -- the nuance that I've identified there is that you might spend a lot of time getting to know your problem domain; not just the technology domain, but the business domain.

So at that point, if you can somehow demonstrate the ability to communicate using the terminology, using the language of the business, something that is very prevalent in the -- what's the book I'm thinking of...? Domain-Driven Design. Learning to communicate in the language of the business, with the people around you... Somehow, you become a conduit, you become that bridge from "Here's the thing the business wants to do, and here's the thing that you, the engineer, who can translate those needs into actual running software - you become an expert at that as well." So it's not just deep work around the tech, but it's deep work around your problem domain. Would you say that's fair?

**Ian Lopshire:** Yeah, I'd say that's fair. I think understanding the problem domain is almost more important than the tech. I feel like so often a business has a need, and they come to tech with a solution. One of my sayings at my previous jobs was "Don't come to me with a solution, come to me with a problem." Because we know the tech. We know what's possible, what's not possible, what works and what doesn't. The businesspeople might not know that.

But if they come to you with a problem, you can create probably a better technological solution than they could have, just because you know the tech... And as long as you know enough of the business to also know how to solve that problem, I think you end up with a lot better software in general.

**Jerod Santo:** Yeah. I think the galaxy-brain move there is to be able to actually extract the problem from their given solution, and say "Let's back up here." And you can just even ask them. I've done this thing. I've done a lot of client work, and clients come and tell you what they want... And then you say "Hold on, hold on, hold on... What problem are you trying to solve?" And then they say "Well, I'm trying to solve this problem" and you're like "Oh, well there's six ways of solving that problem, and you've just given me one of them. It happens to be that yours is the most expensive way that you could have possibly selected... Because you don't know the difference. So I'm here to give you the five other options. We can talk through them etc."

But going back to the conversation about reading, and really the deep work concepts that you were talking about, Johnny, I wanna state something that's totally obvious, but needs to be said - reading is really hard, and applied reading is even harder... So hard things aren't fun, generally, unless you have some sort of other motivation... Kris really wanted to understand this. Or maybe you really wanna excel in your job.

So a lot of us fail to read well, because reading well is hard, and requires discipline, and applied effort, and it really becomes, I think, a super-power for software developers who can read well. You're talking about where a lot of us get stuck, Johnny. Stack Overflow is easy, unless they remove your question... \[laughter\] But a lot of times you don't even have to put a question up; it's already been asked and answered. Google's easy. Walk across the room, ask your senior lead - easy... But actually digging in there and reading what you have to read to grok whatever system, whether it's in the small or in the large, holistically understand everything - that's hard work.

So you have to apply yourself, and sometimes we do and sometimes we don't. I think the people that succeed a lot of times in software are those that have just powered through that difficulty enough times where it does start to get easier and easier and easier over time... And then you can get to a point where you can now critique the docs and say "Hey, here's where it's falling down here." But it is really hard to do well, and so I think it's worth acknowledging that.

Me acknowledging that for myself has allowed me to persevere sometimes, because I get down on myself and I'm like "Actually, what I'm trying to understand here is really complicated, and these docs aren't quite what I would need to get there... But I'm gonna just keep banging my head against the computer until I get there..." So I would encourage other people to do that when you're down, in that moment of despair, where you're like "I'm never gonna understand this." I think perseverance is what dictates success in a lot of those circumstances.

**Kris Brandow:** And that kind of reminds me... I think part of my background that enables me to do this - as a child I was both an athlete and a musician, and I think the common conception about both sports and music, and I think art to a large degree, is like "Oh, you're doing it because it's fun. You're enjoying doing this. It's fun and enjoyable." And I think if you talk to really any musician, or any artist, or athlete, they're like "This is not fun. My body hurts." Or "I am playing the same boring thing, over and over again, because I keep messing it up."

**Jerod Santo:** Right.

**Kris Brandow:** I think that perception of "Oh, this should be fun. I should be enjoying this, and if I'm not enjoying this, then I shouldn't be doing it, or something is wrong" is like the key thing that makes it hard for people to do things like actively read and consume this type of content. And I think you gain that perseverance not by doing something magical, but by just pushing yourself a little bit more each time... And not pushing yourself too much, because I think that's something that a lot of people do - and I've definitely been guilty of this myself, where you're just like "I'm just gonna learn this, and just sit down and spend four hours a day reading this, and doing this, and that is how I'm going to learn it."

And of the successful habits that I've had in my life, none of them have been built like that. They've all been built by me starting off with something small, that I can do consistently, and I do it every day, or I do it every - whatever the cadence is; no matter how I feel, no matter if I'd rather be doing something else. I don't have anything -- my writing was like this; it's like, I write every day. It doesn't matter if I don't have anything that I can think about writing, or if I don't feel like writing, or my day is super-busy... It's like, no; I sit down and I do it, because that's how you really build those skills, and that's how you really build that perseverance and that stamina.

I think it's the same thing with reading the docs. You don't have to dedicate three, six, seven hours a day to reading the docs to get more of this knowledge. You just have to dedicate a good chunk of time every day and say "Okay, every day I'm gonna spend -- if it's 15 minutes, or half an hour, sitting down...", and this is my concentration time. This is the time I'm going to dig in and read these docs and really try to understand. And if I get stuck, then I get stuck; I read the same thing over and over, and I kind of push past a little bit to see if there's something a little bit further down the line that'll help me... But if there's not, then I'm gonna stay here, I'm gonna sit and I'm gonna try and do it, and if I'm stuck for too long, I'll go to something else and I'll come back later.

But I think that's the thing you have to do for the perseverance. As Johnny said, it's not magical; we don't have access to some special information somewhere. It's literally just block out the time, do it, and do it every day, even when you don't want to.

**Break:** \[00:34:10.24\]

**Johnny Boursiquot:** I do have to acknowledge that all things being equal, if you are capable of sitting down for 30 minutes, an hour, or two, for really a decent chunk of time to consume content, that's great; then it's just a matter of -- I don't wanna call it willpower, but your motivation to sit down, like you're saying, Kris, sitting in that pain, pushing through that pain, because on the other side there's a payoff. But I do wanna acknowledge that for some it's not easy. Perhaps it's some sort of a reading disability, perhaps it's ADHD, whatever the case might be; I don't know enough about these challenges to speak to them.

I'm hoping there are solutions out there for those who struggle with these things, to be able to take advantage of what we're prescribing here today, that deep consuming of documentation to achieve expertise... But that's something I do want to acknowledge. If folks in the Go Time channel know of any resources and things like that that they wanna share, I'd love to be able to put that out there for those who could benefit.

I do want to switch gears slightly back towards the Go documentation, because we haven't yet answered Eric Miller's query... "How do I, coming from other languages (in his case it was Python), where the documentation is more narrative in nature..." - and that's the kind of documentation you can sit down and read cover to cover... And I'm not saying it's some sort of nice romance novel, and you're gonna be happy with it at the end or whatever, but it is much more readable than our documentation, the GoDocs, which are more reference-like; not storytelling, not reading content... It doesn't lend itself well to cover-to-cover reading. So what can we do in the Go community to make some aspect of Go documentation - I'm not saying "Let's blow up GoDocs and reinvent it." I think there's an opportunity here for complementary documentation, that makes for a more readable facet to the body of documentation we have.

And yes, there's tutorials, and blog posts, and things like that, but there's different kinds of documentation, which I'll touch on in a bit... But any ideas, any first impressions of how we within the Go community could make our content to our documentation more consumable?

**Kris Brandow:** I think one of the things, which was an episode we had really recently, was the "Play with Go" system. I think that's a really good foundation to build fantastically better documentation on. So I think definitely a part of the problem here is from the library maintainer perspective, of like "How do I go about writing documentation?"

I think a lot of library maintainers do want to have really good documentation, but I think when you look at the examples of what is fantastic documentation, I think BoltDB is like a really good example. It's just like "Okay, there's a giant readme, and Ben sat down and took a lot of time in figuring out what he wanted to put in there, and basically just dumping out information." I think that's really hard to do, especially with everything that is kind of on library maintainers as it is. It's not easy maintaining a Go library, especially an open source one. Personal experience - it is very difficult to do.

I think if we gave more tools to make it easier to guide library maintainers to what is expected, it would be a bit easier to get that -- not really higher quality, but more narrative documentation, the stuff you can more easily follow.

**Jerod Santo:** So can we talk about some different kinds of documentation? Because I feel like as a community, the Go community can rally around the other kinds of documentation more so than the official reference docs. Is that fair? Or as a somewhat of an observer of the Go community, and not in the inside, let me ask this question first - can you go collaborate on that documentation, or is it the Go team that does that? Can we actually affect that change or not? I don't know.

**Johnny Boursiquot:** Well, I wanna hang on to that question, because I think we should level-set a little bit around what it means to produce documentation. So a few years ago, maybe 3 or 4 years, I saw this talk from a person by the name \[unintelligible 00:40:40.25\] given at PyCon Australia in 2017. And in that talk, Daniel proceeds to break down -- I experienced the talk, sort of a wiping away of some crud I had in my eyes around the different kinds of documentation... Because I was conflating different kinds of documentation together, so he clarified, he washed away the mud from my eyes from me, so I could see the different kinds of documentation and how they fit together.

So you have tutorials - those are learning-oriented. You're sitting down, you're going through the tutorial, you're reading something, you're trying it out, so you're going back and forth, you read, you do, you read, you do... They're learning-oriented.

Then you have your how-to guides. Your how-to guides are problem-oriented. You want to solve problem X - you go to the how-to guide, you find problem X, and it tells you step by step what it is that you need to do; the how-to. "This is how you solve this problem."

And then you have your explanations. Those are the understanding-oriented. Those are the things that you are more likely to see narratives around, stories around. Those are the conference talks, if they've done well. You're able to not touch on a bunch of low-level esoteric minutiae, but really paint a broad picture for you, "This is what I'm talking about. This is the problem we're solving, this is what I'm presenting." That's your explanation.

And then you have your reference. This is exactly where the GoDoc sits. It's a reference. It's for look-up. You know exactly what you're looking for. You already know in your mind, "Yes, I think I've seen a function or a package in Go that does this." Then you go to GoDoc and you look for it. You're doing a look-up. That's a dictionary. That's what it is.

So all of these things, no one is better than the other. It's all working together, and it creates a documentation ecosystem, a well-documented ecosystem.

To circle back around to your question, Jerod, what's the right angle here? There's lots of ways you can go about this whole documentation or attempting to solve Eric Miller's problem... I'm sure he has access to the tutorials, like we all do... There's some how-to guides \[unintelligible 00:43:04.02\] here and there... I would say we can do better with the explanation aspect of things, which I suspect really that's what's lacking for him... And obviously, we have the reference, which is golden. It serves its purpose. Knowing what we know of documentation and what I've just explained here, how could we try to solve Eric's problem?

**Ian Lopshire:** So GoDoc, like you said, is like a reference. You need to know what you're looking for. But I don't think it has to be. I've been in GoDocs for certain repositories where there's a lot of specific examples about how to do specific things with that library, and I think that really is where you can provide the Why and the How-to... And I think highlighting those examples better and just having them goes a long way into making GoDoc way more usable, especially for newer people.

**Jerod Santo:** Well, that goes back to my question about who can edit those and who can work on that... Because ultimately, like Johnny says, you have these four kinds of documentation, and no single one person or no small core team would we ever expect to accomplish all of that. So where can we actually effect change as a Go community? Where can we throw in and improve? I'm just curious, are there pull requests against GoDoc? Can you throw examples in there and they'll be added?

I know one thing that other communities have done in the past - have had their online docs, and underneath them they add a discuss board for people to add comments underneath, and say "Hey, here's a great example of when I just did that" or "Avoid this particular use case." So they're enabling the users of the language to add to the docs, without being official; it's just a discussion underneath.

So I don't know how all that works, but definitely, the Go community can add to the corpus of how-to's and explainers and discussions. So maybe helping Eric understand that ecosystem, "Where do I go for my discussions? Do I go to Stack Overflow? Do I go to the Golang Gopher Slack? If I have a question that's contextual and I need someone's advice, where are those discussions taking place in the Go community?"

**Kris Brandow:** To kind of answer your question directly, GoDoc is generated from the repositories themselves, so opening a pull request to whatever library that you're interacting with is the way that you can add more documentation, add examples, add more prose.

I think GoDoc, even though it's now being retired in favor of Go.dev, I think that it had the right idea... Because I definitely agree with Ian here, that GoDoc isn't really only reference. Not reference in the way that I think we're thinking about it. I think it's closer to reference in the way that a manual style is. There's a lot of "I wanna know how to use this word in this context." "Okay, boom. Go here, read this." But there's also a lot of essays. And I think that's true of most manuals like that; it's like "Here's some general information about this topic, about how to use this thing, that you can just sit down and read, and now you'll understand more."

And I think - once again, to go back to what Ian was saying, good Go docs look like that. You have this kind of giant thing at the top that is this prose, that is this narrative of like "This is how you use this package. This is how you use these series of packages", and then you have these examples; if you wanna do a specific thing, here's how you do that specific thing, and then you also have the reference.

I think that a lot of the problem with -- probably a bit of the problem that Eric is having, and a problem I've had myself, is when those things aren't there, and GoDoc is literally just a reference... And usually when that happens, even the reference stuff - you have to just look at the source code anyway, because there's just not enough in the doc comments to give you an understanding of how to even use this thing. And I think that's probably caused by two things. I think one is that we as a language, since our source code is so regular, it's really easy to read. So I think for a lot of us, we just go and read the source code, because it's not gonna be frustrating to read that, and that gives us kind of a really low-level understanding of what is going on... So I think that kind of relieves some pressure on having our docs be better.

And I think the other thing is that it's -- that's what I said before, it's just a lot to ask of maintainers, to "Please go write me some nice docs." And I think we as a community, one of the big things we can do is really emphasize to people that contributing... Like, sure, contributing code is a good thing; contributing to docs is one of the best things that you can do. I don't like tiering things, but I'm kind of like "If you're someone that goes around and adds docs to repositories, to libraries, to packages, that's a higher level of contribution that going in and fixing some small bug... Because you're enabling people to now consume that and use that code, and you're making our community so much better than any one bug fix or feature addition can really do.

**Ian Lopshire:** Just to expand on that a little bit... If you are new coming to Go, that reference piece of GoDoc basically comes for free. So you do end up seeing a lot of libraries that it's just the reference and doesn't have any of the additional stuff. As a new person, you might get the idea that that is what GoDoc is...

**Jerod Santo:** But you're saying that it is not...

**Ian Lopshire:** It doesn't have to be.

**Jerod Santo:** It doesn't necessarily, but that's the state of it, because it's kind of--

**Ian Lopshire:** Yeah, it comes for free.

**Jerod Santo:** It's for free, and it's kind of following the example that's there.

**Johnny Boursiquot:** So before we officially transition into Unpopular Opinions - get your trigger finger ready, Jerod... Perhaps one thing to also acknowledge and consider is that it is intimidating for somebody who is learning Go - or really any other language, for that matter - to just go read the code. If you're old enough to remember the first days of the web, when everybody was - at least those of us who were in tech - learning HTML, and JavaScript, and CSS, and all that stuff... You could always view source, and everything was just right there; the JavaScript was right there, the HTML was right there, the CSS was right there... A lot of us learned, or self-taught that way; we read the code, only because we didn't have anything better.

There were the books, and things like that, but... I don't know about you, but back in the day when I first started out, I couldn't afford a $40 book from a publisher. Stuff wasn't available online as it is now. So really, a lot of us taught ourselves by View Source.

Today, things can be easier - and there's nothing wrong with learning by View Source. If that's the way you learn best - great. Read the code. The standard library, minus a few parts, is generally very readable...

**Jerod Santo:** The good parts...

**Johnny Boursiquot:** The good parts... \[laughter\]is generally very readable.

**Jerod Santo:** That'd be a good blog post. Point out which parts we should read and which ones we shouldn't... \[laughter\]

**Johnny Boursiquot:** I think where I'm going with this is that there are any solutions... Well, no. There are many parts to the solution to this problem. And different things will be applicable under different circumstances. Even if you're the same person, you may need different kinds of documentation at different times... And depending on the level you're at - beginner, intermediate, advanced, master of the Universe for that thing... Whatever it is, you will need some documentation at some point. You have to find the kind of documentation that is tailored at the level you're looking for... But there's no shortage for documentation.

If you are out there - and I'm speaking to you, listener, or watcher - and thinking "I've been meaning to muster up the energy or overcome the impostor syndrome to write a blog post as a beginner", and you're thinking "Oh, man, everybody's already written a beginner blog post on this thing. My voice doesn't matter. I'm not gonna really add anything to that", you need to get over that. There's always room for new ideas, there's always room for new thinking, new approaches... Even if you think you're rehashing something else somebody has said, I haven't read your take on that thing. I've read dozens more, but I don't mind reading another one.

So get over that fear, put something out there, whatever form or shape that you'd like... Just contribute your part. We want your part in the lore, especially for documentation as we're talking about here. We want your part of the story. So contribute that.

**Break:** \[00:51:30.12\]

**Johnny Boursiquot:** Good stuff... Man, I like that song. Okay, so during pre-show, Ian told us he came prepared... Like, ready to fire off a bleve of just unpopular opinions. Ian, lay one on us.

**Ian Lopshire:** It's really one that I really thought I would -- \[laughter\] That opinion is that futures and/or promises have a place in Go. I'm not saying that it belongs in the standard library or should even be used often, but I definitely think the community is lacking a really good future and/or promise package. And I can elaborate on why, but I don't know if you want that...

**Johnny Boursiquot:** Oh, so you just wanted to drop the bomb and run? \[laughter\] You know, my friend, you're gonna have to explain yourself.

**Jerod Santo:** Just hangs up on us...? Yeah, please tell us why.

**Ian Lopshire:** Alright, yeah. \[laughter\] Yeah, so I think you can do everything that you could do with futures and/or promises - I'm just gonna call them futures now - using just channels, and just kind of native Go syntax. But this idea of having just a piece of memory that is or is not ready that I'm gonna put something is just so simple and it's so easy to reason about for doing pipelining and complex parallel things, especially to someone that's not necessarily a Go expert. It's so much easier to reason about then passing channels around, or worrying about who's gonna close this channel; is this channel closed? ...that sort of thing.

I've been experimenting with it off and on, and I do think it leads to some very, very readable code, especially for things that are inherently unreadable. Concurrency code is kind of inherently hard to read... So yeah, I think we're lacking that, and I think it would actually be beneficial.

**Johnny Boursiquot:** Ian, I don't believe you. \[laughs\]

**Ian Lopshire:** You don't believe me that it doesn't exist? It does exist.

**Johnny Boursiquot:** Well, yeah, I don't believe -- I'm gonna dissent. I don't believe that promises or something like it is needed in Go. I think that is a paradigm, that is a way of thinking about concurrency that is a carryover perhaps from the JS world, or other technologies that use those paradigms. And again, I'm not saying that those things are bad. I'm not saying channels over those mechanisms, more so -- I'm in the camp that I'd like one way to do something in Go. The channels and the concurrency primitives that we have now do that job exceptionally well if you don't abuse them... And adding another -- How is it I keep finding myself in this spot where I'm defending for more of a conservative approach to the language evolution...

**Jerod Santo:** The status quo.

**Johnny Boursiquot:** I know, right? Is this what happens when people just get comfortable with something and you just don't want no new ideas, no new thoughts...

**Jerod Santo:** Yeah. Get your futures off my lawn. \[laughter\]

**Johnny Boursiquot:** Get your futures off my lawn. That is awesome. That needs to be a clip somewhere. But yeah, I guess that's my approach. I appreciate the idea, I'm just not convinced.

**Kris Brandow:** I kind of feel like building features around channels, and building an API for that feels like such a small API...

**Ian Lopshire:** It's tiny, yeah.

**Kris Brandow:** I don't know if it's worth adding... Versus just writing it when you need it. I think that's kind of where I sit with this. I think there are a place where this concept of doing delayed processing makes a lot of sense, and I think that is a paradigm in Go, using goroutines and channels... And I feel like this fits with the "Please don't expose channels more than we need a nice API for promises and futures", because I think that's something that I think is kind of fraught in the Go community... Like, returning channels to people -- it's a footgun. It's definitely a footgun, because - as you brought it up: "Who's gonna close the channel? Who owns this channel?"

So I think there definitely are some downsides to exposing channels... But I think just covering them up a little bit, and then kind of having the same concept is definitely a programming paradigm that's useful. I think my worry with adding an official promises or futures type of thing is that it'll encourage people not to learn goroutines and channels; it'll encourage people to "Oh, I know this from JavaScript, so I'm gonna keep doing it the way that I did in JavaScript."

Nothing against the paradigms of other languages, but this is Go. We have our idioms, and we have them for a reason... If you're gonna hang out in the Go camp, please learn our idioms. I have had my share of that Java Go, that Ruby Go, that C++ Go, and that JavaScript Go. I don't really want any more of it.

**Ian Lopshire:** And I understand that... And I would be against adding it to the standard library, or as a language feature. Just the idea of a similar concept to a future; like you said, a wrapper around channels, that just does not actually expose the channel. I've used it in a couple of places and it's worked really well.

**Kris Brandow:** I think there was a proposal we talked about... What was that, last week? Yeah, last week... That had this kind of deferred processing -- I think it was called "eval", that is this similar concept to this, where you can actually make it so a function doesn't execute unless it's actually used... Which I think is kind of related type of functionality... But also slightly different. But I could also see how that could easily be abused to make futures and put them everywhere, and have Go be inherently less readable.

**Johnny Boursiquot:** Alright. Kris, we're right at your doorstep. What is your unpopular opinion?

**Kris Brandow:** I think my unpopular opinion is related to the content of this show... It's that we shouldn't try and make software engineering as a whole too easy; or I guess easier. I want to extrapolate on that quite a bit...

**Jerod Santo:** Please do.

**Johnny Boursiquot:** Please, do...! \[laughter\] I wanna hear this one.

**Jerod Santo:** I was actually gonna joke about that earlier, like - we're making it too easy to learn.

**Kris Brandow:** So I think that the trouble here is that while it's really helpful for people to have an easy on-ramp to learning and acquiring a language, there is going to be a point at which it is going to be hard. It's just going to be hard. And I think it does us a disservice, or it does people a disservice if they are given -- I feel like it sounds like a bait-and-switch. If they're given this kind of easy on-ramp to doing the basic stuff and the simple stuff, and then they get walloped with this "Oh, now everything's gonna get really hard", and you're not gonna have any of that stamina, any of that discipline built up to kind of get yourself over that.

There's some things I've read - I don't remember where I've read them, but this idea that, you know, starting off a computer science curriculum with pointers and recursion basically weeded out a lot of people, because it was such a hard concept for people to grapple with... But the result of people that pushed through was that they had a much easier time in the long run being able to comprehend and understand computer science curriculum. And I think that's kind of true of a lot of things that are like this, a lot of things that involve a lot of practice, or a lot of "not having fun" most of the time.

I've read this book recently called Peak, and one of the things that they talk about in the opening of it - the book really is all about how do you become expert-level or elite-level at what you're doing... And the thing that they put in the beginning is like, if you wanna become a really good tennis player, a lot of people think "Well, get a tennis racket and start playing some tennis games, and do it on the weekend, and then just kind of keep doing that, and that will be enough, that will be sufficient." And you can't become a great tennis player by doing that. You have to continue pushing yourself.

And I think in that kind of vein, by making it really easy to start up, by making it so that you just get all of these quick wins, you just get really addicted, to those quick wins... And there's nothing there to help you push through when you get to the other side. So either you stop learning, which I think is the epidemic that is in our industry right now, is people not advancing their skills, not learning, not practicing, not reading the docs more. Or you quit, because you've just hit this wall.

So I feel like this is super-unpopular, but I feel like it's kind of real talk... It's like, yeah, this is not an easy industry; this is not an easy thing to do. And if we can't weather through what is necessary to acquire the skills that we're going to have to have to continue to grow in the future, we're gonna continue having the problems that we have now, with the quality of our software, and our ability to hire and retain and grow as a community. I feel like Johnny has something to say about that...

**Johnny Boursiquot:** Nope. I'm gonna pass on that one...

**Jerod Santo:** I have things to say... Unless, Johnny, you were just joking. Were you actually gonna bring something?

**Johnny Boursiquot:** No, no, no.

**Jerod Santo:** Okay.

**Johnny Boursiquot:** I understand the context in which Kris is talking about.

**Jerod Santo:** I would say I agree and disagree with you. And I think that what I agree about is that we should not act as if this is not difficult. I think that's the bait-and-switch. I think that should be clear and upfront, that this is a difficult thing; it's a very young industry, we're still figuring it out as we're going, which mean the goal posts are gonna move as you advance... And you're gonna have to be okay with that; because as they move, you're gonna have to change the direction that you're kicking, or you're gonna miss a lot of shots... I don't know, I'm losing my metaphor. Kicks...?

**Kris Brandow:** \[laughs\] Goals? I think goals...

**Johnny Boursiquot:** Football, basketball...? Where are we?

**Jerod Santo:** Sorry, I went to a football metaphor, and then I immediately lost it. So we should be upfront with that. This is not an easy discipline. It's gonna get really hard, you're gonna hit this problem, that problem, and the other thing, and you're gonna have to be able to power through that. There are not just complex issues, but even just topics that are really hard to grok - recursion, pointers, computer sciency things.

So that should not be like "Hey, everybody should be a developer, because it's easy, and it's fun, and it's all unicorns and rainbows", because that's just not the case. There's a lot of hard work, and all the things that you're saying, Kris.

That being said, the quick wins are very empowering, and easy on-ramps aren't gonna stop the people who are gonna make it through. The ones who did really good at the recursion class in the class - they're also gonna get through those easier on-ramps just fine... But what those on-ramps can provide for somebody is sort of like an extrinsic motivation that they may not have had otherwise, especially for young people, that hey, there is satisfaction in this career, there is empowerment in this career, there is things that you can do which will give you joy, or help others... And you can do those things if you power through, and we can get you started as easily as possible to get to the hard parts. I think that those might provide some people with motivation that they may never have gotten to if you just hit them over the head with recursion.

So I'm kind of of both minds. I see what you're saying. We shouldn't bait-and-switch, but I don't think that means we have to make it hard on purpose, because it's already gonna be hard. Or not easier... I don't know. I can't remember how you worded it.

**Kris Brandow:** Yeah, I agree with you on that. I think that the way I'm trying to -- it's tough to articulate this well...

**Jerod Santo:** It is.

**Kris Brandow:** Because it is a very nuanced and careful thing, of like --

**Jerod Santo:** But it has to be a one-liner for Unpopular Opinion, because that's the segment, right?

**Kris Brandow:** I'm not saying that we shouldn't make our docs better, or that we shouldn't have more tutorials or books that make it easier to grok some of these concepts...

**Ian Lopshire:** \[unintelligible 01:05:21.22\]

**Kris Brandow:** ...but I think you really did hit on what I'm trying to articulate here, which is we can't have this idea that "Oh, anybody can write an app" or "It's easy to write an app" or "It's easy to do this thing" or "Come on board, it's just gonna be great!" Or we can't fall into that desperation of "We need to hire a lot more software engineers, so we need to make it easier for people to become software engineers." That's not the solution there.

I think that this unpopular opinion is kind of a pushback against that, of saying "No, what we're doing is extremely difficult", and we are very new; this industry is very new. We have a lot to figure out. And what we need right now isn't just more people. We don't need more bodies. I feel like every company has this thing where they're like "I need to hire 50 engineers", and it's like, you don't need more bodies; you need to have more concentration and discipline, and you need to be able to persevere through these bumps that you're heading.

The Mythical Man-Month is still true - you can't just throw people at problems, and I feel like that's kind of the ethos of everything right now. And I feel like the kind of way we're going with a lot of the material that we're creating is "How do we make it easier for people to get in the door?" and I think if we don't consider "How do we ensure that people know that this isn't going to be as easy as we're trying to make it?" then we're going to have a big problem in a couple of years.

**Jerod Santo:** Well, that leads in to my unpopular opinion...

**Johnny Boursiquot:** Oh. Lay it on us.

**Jerod Santo:** ...which is also - I kind of stole my own thunder earlier in the show... Because my opinion is that one of the primary traits of successful developers is stubbornness. Not intelligence necessarily, not anything else... Although we can have more than one trait, people; it can happen. But I think that what I've seen over the years and what I've experienced is the ones that really succeed - and of course, define success... Proficiency in what they're doing, maybe you reach a level of a CTO, maybe you're a senior engineer... Whatever it is. Like, you can build apps; you can make it through... It's that those people are generally stubborn. And maybe that's not the perfect word to use, but... That refusal to give up until it works. Powering through the docs, like we talked about, or through the source code... The willingness to dive into the source code and say "Nah, I'm not gonna just go eat dinner right now."

Now, it doesn't mean it's always the best trait, but I think it's there often. "I'm gonna sit here and I'm not leaving till I understand this." I see that in so many successful engineers that I've met over the years, and we've interviewed on the shows... The ones that will just keep rewriting that function until it's good enough; they're never happy with it being good enough, and they're gonna keep going until they have the ability to write functions pretty well the first time around, or maybe the second pass. Stubbornness is usually there.

Now, stubbornness causes all sorts of problems, too. It can actually be maladaptive in many circumstances, and make social interactions, and working on a team - all these things can actually cause problems. But I think it's a virtue in certain cases. When it comes to software development I think that lots of the people I've seen who are successful are also stubborn, or persevere, or however you wanna say it in a kinder way. That's my opinion... And I'm not gonna change my mind about it, because I'm stubborn.

**Kris Brandow:** I don't think that's unpopular... Maybe it's my weird way of thinking, but I think that that's true of a lot of disciplines... Like I've been talking about, being an athlete, or being a musician...

**Jerod Santo:** Yes.

**Kris Brandow:** ...I think that stubbornness is required to get to those elite levels. And I think that you're exactly right in that you have to develop that ability to just kind of stick with it. Because if you don't - yeah, it's just gonna be like "Oh, I'm gonna go do something else."

It reminds me of the -- I don't know where I heard it, but someone was watching a band playing, and they kind of went up to the keyboard player afterward, and they're like "Oh man, I wish I could play keyboard as well as you." And the guy was like, "No, you don't." And the audience member was like "Wait, what? What do you mean?" He's like "Oh, if you wished you could play keyboard as well as me, you'd spend ten hours a day practicing, like I do."

**Jerod Santo:** Yeah.

**Kris Brandow:** And I think that kind of hits on the same sort of theme that you were saying - this stubbornness, this perseverance, this wanting to stick with it and keep doing it even when it gets tough.

**Jerod Santo:** I think the reason why I think it might be unpopular is because the stereotype, or maybe the mythos of the 10X engineer is the one who was doing math equations when they were eight, and they have this intelligence. That seems to be what people think as the primary trait. Systems thinking, intelligence, and these other traits... And I think actually just powering through is what most successful engineers end up doing to get to where they are. Johnny, what do you think?

**Johnny Boursiquot:** I think if you can find those "10x engineers", the people that are so brilliant, they stand out from the crowd - and I'm not saying those people don't exist; there's a lot of literature around 10x engineering out there, floating about... But if you can find those people and you can afford them, hire them. I'm not saying they don't exist, but if you can find them and you can afford them, hire them. Good for you. But. This leads into my actual unpopular opinion.

**Jerod Santo:** Let's hear it.

**Johnny Boursiquot:** I would rather work with a single junior developer that has spent the time to acquire domain knowledge and expertise than with a team of senior developers without that domain expertise. Because while I can go fast with that team of senior developers, I am more likely to actually solve the problem right the first time with that domain knowledge that I'm getting from that junior developer. And that expertise is acquired how? We've just spent a whole episode talking about it. \[laughter\]

**Kris Brandow:** I feel like in that case though -- is that junior engineer really a junior engineer? Or are they a --

**Johnny Boursiquot:** It's just a title, right?

**Kris Brandow:** Yeah. Another hot take/unpopular opinion - our titling in this industry is absolutely atrocious.

**Jerod Santo:** Yes.

**Johnny Boursiquot:** Ooh, that's for another episode. We're gonna dive into that one. \[laughter\] Alright, well - there you have it, folks. Thank you so much for having spent an hour plus talking about documentation, of all things. But as you at least should know by now, there's different levels of documentation, there's different ways of consuming documentation. Documentation can add value to not just your know-how, but also your career. You can be strategic about documentation reading and consumption; not just technical, not just when you need it, you go look for it... You can be deliberate about knowledge acquisition through documentation reading. And if you have ideas for how to improve our Go community's documentation and body of works around documentation, we welcome your contribution and efforts.

With that, I thank my guests on the show - Ian, thank you for coming...

**Ian Lopshire:** Yeah, happy to be here.

**Johnny Boursiquot:** Awesome. Jerod, our editor/guest as well today - thank you for being here.

**Jerod Santo:** Thanks for inviting me.

**Johnny Boursiquot:** Yes, it was a blast. And as always, Kris, thank you for being here and adding lots of flavor.

**Kris Brandow:** Of course, that's what I do.

**Johnny Boursiquot:** Awesome, awesome. Alright, y'all... Until next one.

**Outro:** \[01:13:03.10\]

**Mat Ryer:** Aah... I can't believe I got this book -- oh, sorry. I didn't see you there. People ask me, junior devs often say "How do you remember all the types, functions and methods in the standard library?" Well, if you can, it's quite easy - just turn them in to a song. So filepath.Walk becomes Sweet Filepath of Mine. \[Mat singing the song 01:14:58.23\]
