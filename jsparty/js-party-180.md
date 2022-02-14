**Jerod Santo:** Welcome back, everyone. It's JS Party time! We have a great show for you today. I'm joined by my good friend Feross. What's up, Feross?

**Feross Aboukhadijeh:** Hey, Jerod. How's it going?

**Jerod Santo:** It's going very well, excited to have a special guest with us from the SpiderMonkey team, it's Yulia Startsev. Yulia, thanks for joining us.

**Yulia Startsev:** It's my pleasure. Thank you for having me.

**Jerod Santo:** We are excited. So SpiderMonkey - give us the TL;DR. Introduce everybody to what this is, who's behind it, what it's for etc.

**Yulia Startsev:** So in the beginning there was the web... And they came up with this idea for a programming language that would be controlling the behavior of the web. Brendan Eich designed it and developed it, and it was initially called -- I think it was initially called \[unintelligible 00:02:44.05\] I should have actually practiced this intro...

**Jerod Santo:** \[laughs\] It's going so well...

**Yulia Startsev:** Anyway, long story short, there was the initial JavaScript engine, before it was called JavaScript. And then they scrapped it all and rewrote it, and that's SpiderMonkey. We're almost 25 years old. We started our life as part of Netscape, and since then, we moved with the rest of the Netscape codebase into being part of the Mozilla organization and making up Firefox. SpiderMonkey is a modern web browser; we are like the equivalent of V8 in Chrome, or of JSC in Safari. It's developed by Mozilla, we have contributors from the outside as well, and we're also embedded in a number of other domains, for example inside of Gnome, a couple of databases that you might be familiar with, and other places like that. That's SpiderMonkey.

**Jerod Santo:** Huh.

**Yulia Startsev:** And we really like heavy metal, so these posters. \[laughter\]

**Jerod Santo:** Yes, they have all sorts of cool posters which they put on their website. We'll link those up in the show notes as well. So how did you get involved?

**Yulia Startsev:** I have a bit of a weird back-story for ending up as a computer engineer. I'm completely self-taught. I started learning how to program maybe 5-6 years ago now... Maybe more. I've lost track of time. It's all a blur. But at some point I was like -- you know, I began programming, and I was like "Okay, this is just a job. I'm just doing this to get my next paycheck", and then I started getting really interested in "How do you program? What's the best way to do it? What are all the tools?", all these things, all these interesting bits and pieces that you can work with. Eventually, I got involved with developer tools, and got onto the DevTools team in Firefox. That codebase is entirely done in JavaScript and HTML. So if you wanted, as a JavaScript developer, to go and do your first contribution to a browser - because you know, a browser feels like this significant piece of software - that's a really great entry point, the DevTools. I think several of the DevTools teams actually use JavaScript as a backing language for what they do.

So I started working there, and I got even more interested, like "What's the design of the language? How do compilers work? How do you make this magical tool that is a programming language, which is so expressive and you can talk to other people through it - how does that happen? So I started teaching myself a little bit about compilers, a little bit about how languages are designed... Somehow, by magic, I ended up on TC39, and helping with the design of the language, asking questions, helping along from a developer tools' perspective, like "What does this new language feature look like in terms of developer tools?" Eventually, I moved entirely onto the SpiderMonkey team, which was my first exposure to C++, and also my first full-blown exposure to the complete structure of a compiler and working on it directly. That's the short version of the story.

**Feross Aboukhadijeh:** Wow, that's such an intense career arch... \[laughter\] You started programming 5-6 years ago, and then find yourself on TC39 and writing compilers... That's quite the journey.

**Yulia Startsev:** It was... \[laughs\]

**Feross Aboukhadijeh:** There must be something different about how you learn, or you must be intensely curious to keep digging to the next \[unintelligible 00:05:43.02\] at each stage of that process. You didn't just settle at the level of understanding that you had. You kind of kept going. That's pretty cool.

**Yulia Startsev:** Something someone once told me is that I was very brave, but my feeling of the situation, my comprehension of the situation was "Oh no, I just didn't know what was next..." \[laughs\] Somewhere between ignorance and bravery, so you end up in this situation... But yeah, generally, curiosity. Also, I think one thing that helped me go from not really knowing that much about programming to working on a compiler was I actually never accepted that I couldn't. So if some stuff was really hard and I was like "I don't really feel all that smart when I look at this", but I never thought that I couldn't. It's something that I've been telling others when they struggle, like "If you stop yourself without allowing yourself to fail, fail, fail, and then succeed, then you're not going to actually make it to that \[unintelligible 00:06:31.23\] you're going for." I have a lot of failures.

**Jerod Santo:** Yeah. Well, one thing I truly believe is that perseverance is one of the best character traits of great software developers. The ability to persevere through that trouble, which you apparently have -- because a lot of us bang our head against hard objects, and eventually, our head hurts, and we're like "I'm just gonna stop banging it." But it seems like you really just power through until you get over that hump.

**Yulia Startsev:** Yeah.

**Jerod Santo:** Meteoric rise... You also, I think, have a new record on JS Party - time to first shout-out. In our chat, Amry gave you a shout-out. "Thanks, Yulia, for your work. I use Firefox every day to make sure that Google's V8 monopoly does not go unchecked." So there you go.

**Yulia Startsev:** I mean, diversity of browsers is very important in keeping the web healthy and making sure that everybody has a voice in the ecosystem as much as possible.

**Jerod Santo:** One hundred percent agree.

**Yulia Startsev:** Thank you so much for using Firefox. It's always great to hear.

**Jerod Santo:** Tell us what your work looks like then... Because you're magically on TC39; we're gonna talk about some of the new things going on, the advancements of the SpiderMonkey team and all that you all have been up to... But I always get curious - I always ask open source developers "What does your day look like?", because it's kind of in their own hands; of course, a SpiderMonkey team member - I don't know what you do all day. What is it?

**Yulia Startsev:** Right. So I have an interesting role in SpiderMonkey, because I also handle our engagement with the committee. So part of my time - it can be an entire week - is dedicated to proposal reviews, so reading spec text. It's dedicated to opening issues on repositories about issues that have been found, either by myself or other engineers on the SpiderMonkey team; if they haven't had time to sort of formulate the issue into an understandable form, then I will go and do that. Or it's also talking to other SpiderMonkey engineers and asking "What do you think about this proposal? Have you taken a look at it? Any concerns?" If they've been working on it, I try to surface anything that they're unsure about to make sure that we communicate well with the community. So that's one part of my work.

Another part of my work is implementation. At the moment, my focus is not entirely in SpiderMonkey. I'm working on Gecko. Gecko is our DOM engine; so that's the embedder, in the case of Firefox, of the SpiderMonkey engine. So it takes care of script loading, and that's specifically what I'm looking at - how do we load scripts and then execute scripts in the browser? At the moment, the specific task I'm working on is looking at how we're loading JS modules into workers. It's a feature we don't currently support, and support was added to it recently by JSC. V8 has had it for a little while.

So my day starts basically with turning on my build machine and staring at a blank screen for a bit while I gather up the courage to open up a 2,000-line file, and then start poking away and taking a look at what I can do that's reasonable, asking questions about "Do I understand what's happening here?" A lot of it is reading code, and of course, coding. That makes up a big chunk of my day, switching over in the latter half of the week often to meetings. A lot of coordination meetings that I've mentioned earlier, assuming that they don't make up the whole week... And stuff like that. That's generally what it looks like.

**Jerod Santo:** Staring at code all day. That's like living the dream right there. Keep those meetings away. Keep them away.

**Yulia Startsev:** Yeah, right?

**Jerod Santo:** You also find time to livestream on Twitch a few of the things you're doing. Do you wanna tell folks about your livestream and the kind of stuff that is on there?

**Yulia Startsev:** Yeah. So there's an interesting thing that's happening... The livestream is on pause right now. But what the livestream was is on a bi-weekly and then monthly cadence - I had to slow it down a bit because of the attention that it took - what I would do is I would give a guided tour through how a specific complex feature was implemented in Firefox. I started off with what I thought was a small bug, and I took people through everything. So you start at the spec text, reading spec text. How do you read spec text? It's a weird language that we use there, where we've got proper grammar -- I don't know if all of the viewers are familiar with what a language grammar is, but it's a way of writing out how a programming language's syntax is supposed to look... We call it a grammar. And then also how do you read the semantics. We walk through all of that, and then we go through and in Firefox we would implement it, test it, and then ship it.

Right now, what this series is looking at is top-level await. It's a proposal I was involved in specifying; we just took it to stage 4. Top-level await allows you to use await on the top level of a module scope, so without any function wrapping it... And we're implementing that from scratch, as a guided tour, and reading all of the spec texts associated with it.

What's interesting about that proposal is you can see how much the specification diverges from an actual implementation, and the kind of things that an implementation has to deal with, like performance, and how we solve those things. So that's what that is. And it's on pause right now; it's gonna come back probably in August or September. The reason it's on pause is I did do this meteoric rise in CS, but of course it didn't really stop there, and I'm in university now. I've just started my masters, so I've taken a bit of time off to acclimatize to doing both schooling and work. So that's why it's on pause. But it'll be back soon, and I'm really excited to show people how everything works, especially with my new knowledge of \[unintelligible 00:11:28.11\] computer science.

**Feross Aboukhadijeh:** That's super-cool. I highly recommend people go back and get their masters in the middle of their careers. I did the same thing, and it was super-fun. I think you can have a really good time.

**Yulia Startsev:** Yeah, I totally agree. Doing a masters when you've already found what you enjoy doing - for me, compilers are just so cool. Languages are so cool. All of this stuff is amazing. So now I'm doing my masters specifically on that, and right now I'm in a software analysis class and I'm learning this stuff that I didn't know the words for, and I can directly apply it to what I'm working with; all of the things are connecting, and I feel like I have a much deeper understanding than I would have otherwise. It feels much more applied. It's really cool.

**Feross Aboukhadijeh:** Yeah, when you learn certain things as an undergraduate, it's just so must schooling has already -- you're getting four years of schooling without any real chance to meaningfully use what you're learning... So at some point I feel you kind of get filled up with knowledge, and it's actually beneficial to go out and use the knowledge. Then what happens is you run into situations where you hit the limit of your understanding, and at least for me, I was like "Ah, I don't have time to learn this thing right now, this big topic. But one day I'll sit down and I'll learn how it works, and it'll make my life easier the next time I run into this situation." When that happens for the third or fourth time, then you go back to your masters and you're finally exposed to that topic, you're like "Oh my gosh, this is really important. I've ran into this before; now's my chance to finally learn it." You're super-eager about learning it, and you know that it's gonna be really important, and then you remember it. It's just so much more meaningful when you know that it's a thing that's actually important, because you've run into it so many times before.

**Yulia Startsev:** Yeah. It's really cool, because everything connects right now. I'm going through so concepts that had I not known how a compiler works, and worked on one, \[unintelligible 00:13:11.18\] then coming to those mathematical concepts and being like "What is this?", I would have had so much more trouble and I would have just sort of figured it out for the tests and then forgotten about it... But now it's like "No, this is my life." \[laughs\] It's really cool.

**Feross Aboukhadijeh:** Yeah.

**Jerod Santo:** I was just gonna add that there's also a burnout of schooling. I'm just thinking about my path... I could see this path that you guys are on being something that would be attractive to me now... Whereas when I just graduated, I had just finished like 16 straight years of schooling, or whatever it was, elementary up through university. I was just done. I'm like, "I'm not gonna go to school for my masters. I've just had enough schooling."

I feel like a lot of people -- I mean, they continue that path, they're just not sure what to do next, and they'd like to learn more than I did... I didn't really enjoy it all that much... But now that I've had the gap, and I've had 15 years in industry, I could see where I have specific things that I enjoy, and I could dive into, like you've found, Yulia, with compilers... And I appreciate learning for learning's sake way more than I did back when I was in school... Because I had to learn, because that's what people told me to do for 16 years. I can see that being a refreshing change of pace, as opposed to just going one thing after the other, all the way through. I always looked at people that went from straight through grammar school up through their doctorate; 20 years of schooling... I just couldn't relate to that. But I can relate to this sentiment, so I think that's an interesting thing.

**Feross Aboukhadijeh:** I think in general schooling should be more of a lifelong thing, and we shouldn't compactify all of it to the front of your life, and then just stop at some point, and then you never step foot on a university campus again... I think it should be more of like -- I wish it was like you could take one class every semester, or one class every year. You just drop into something to kind of enhance your knowledge throughout your career. But it's just not easily structured that way. Even when you wanna go back to get your masters, you kind of have to put your job on hold, or take some time off to do it.

**Jerod Santo:** Yulia's over there like "I'm not putting my job on hold... Come on!" \[laughter\]

**Feross Aboukhadijeh:** You know what I mean though... You know what I mean. It just takes a lot of time; you have to basically do it in a concentrated --

**Jerod Santo:** You have to put your livestream on hold.

**Yulia Startsev:** It is hard... So I'm doing a remote program that's famous for being the equivalent of its own campus program, and it is hard... It is really hard to do. I haven't crammed in ten years, and now I'm cramming again, and it's really intense. And I'm only doing one class. So this thing that you mentioned, dropping in for one semester - I'm thinking like "If I had to do this for my entire life, I think \[unintelligible 00:15:42.04\] very difficult." \[laughs\]

**Feross Aboukhadijeh:** Oh wow, okay...

**Jerod Santo:** To each their own, I guess...

**Yulia Startsev:** I'm doing exactly that right now... I've been thinking a lot about education, because of course, I'm interested -- as an educator, the reason that compilers exists is because I think that compilers and computer science should be accessible to everyone. I think that this shouldn't be a scary piece of software to write. It should be something that is like "Oh yeah, I understand how that works, and I understand the basic structure of it, and how it's built, and what it means... And I could do it", rather than "Oh, I'm someone who only knows how to write JavaScript applications, and this world is blocked off for me."

Part of the reason why I kept digging was because I felt like that. I was like "Oh, I don't know how compilers works. I need to really work if I wanna know how the compiler works." And it's true, you do have to really work to learn how that thing works; but it's accessible, and I think how we do education determines whether or not people think that they can take on these complex topics.

One thing that was really inspiring for me was watching Dan Abramov's series on React. He made a number of topics that could have been explained in a very complex manner, very approachable to someone who's rather new to programming. That was early on in my career as a computer programmer. I think that's very important.

I have a lot of comments about university-style education exams... Oh, my God. Why do they exist?! \[laughter\] I kind of understand it, but at the same time, as someone who's studying for the sake of studying and not for the sake of accreditation, I feel like exams are sort of this arbitrary bar that's put in place - quizzes, exams, and all this kind of stuff - that I don't actually learn all that much from, and they mostly cause stress... I feel like I learn a lot more from digging into a book and doing the exercises and then talking to people, and making sure that my ideas about a problem are correct, rather than sitting down and having a test. I don't like tests.

**Feross Aboukhadijeh:** Yeah, going back to school at this stage in your career really highlights all the things about school that are just weird, that you don't realize when you're in it the first time...

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** Exams are one of those, for sure. I think they're pretty helpful for people who would otherwise not do the work. You know, like when you have a deadline coming up and you finally do the thing that you've been procrastinating on - that's the purpose it mainly serves for people. And then I guess there's the whole evaluation aspect of it... But I question whether that's actually what the university is after with it. Anyway - yeah, it's just interesting; it's definitely an interesting perspective to go back. It's cool.

**Yulia Startsev:** Yeah. We might get stuck talking about school this whole podcast, so... \[laughs\]

**Feross Aboukhadijeh:** Yeah, we can move on...

**Jerod Santo:** Let me ask one question that's somewhat on-topic, but off-topic, which is - you've found that you're fascinated and excited about compilers... And I've wondered if you've thought about that analytically, like "Why?" Because people get excited about different things... Like, somebody really loves baseball; if you ask them "Why do you love baseball?", maybe they've thought about it, maybe they haven't. But have you thought about that? What is it about compilers that really gets you going?

**Yulia Startsev:** That's a great question. Actually, there's two things that I'm really fascinated about. Well, three things... Which I consider to be some of the most important parts of a process that I would call language design... Language design - you might think of it as the process of figuring out the formal specification of a language, and how it works, and what are the proofs behind it that a language is correct, and does the right thing, and that it's sound, for example with type systems and whatnot.

But there are lots of different parts to language design... Soundness is one part of it. Then there is formal aspects, the observational aspects, like "How does the language perform? Is it fast for certain tasks? Is it good for concurrency?"

Then there's another part to it, which is "How does the programming language impact the people who write programs with that programming language?" And how can a representation of a programming language impact how people solve problems? A really interesting example of that is the programming language R, which a statistician can pick up in about an hour and become productive in. Another excellent example of an interesting programming language that impacts how people model problems is Excel. JavaScript is another interesting programming language that models how beginners enter into the field of programming and then start immediately doing something that works.

Then there's a final aspect to it, which is "How do we collectively design languages? How do we determine what the problems a language is trying to solve are, and come to an agreement about that?" So that's the committee work. So those are the pieces that I'm interested in.

Actually, working on a compiler allows me to stretch that whole area of language design that I've just mentioned to you, so I get to go all the way from the nitty-gritty stuff about "How is it performing? How is it built? Is it right? Is it what we wanted to do? Are the semantics correct?" And then we can look at syntax and be like "Okay, for programmers, how are they reading this code? Are they coming to the right models in their minds about what it's supposed to do?" I find that really, really interesting. And then finally, we get into this "How do we make decisions as a group?"

I find that when I say that I'm a compiler engineer, I actually see it as encompassing this whole realm, and not just the technical aspects of the work. And it's a really cool place to work.

**Break:** \[20:50\]

**Jerod Santo:** So one thing that you and the SpiderMonkey team works on is developing features not in a silo, but alongside other people who are developing the same features, and then debating how those features could look, and the approving which ones are good, which ones are not good, which ones need to be changed... Are we implementing? Are we not implementing? When? All of these things, like you said, a lot of it is the communication and the humanity side, which is a fund challenge, I believe.

So you've had a lot of interaction with TC39 on your work with SpiderMonkey, and including recently top-level await is a thing that's been (I guess) approved, or ratified - I don't know; I don't know the language - and it's going into the browsers... So that's like a big feature that a lot of people have been waiting for and are excited about... Maybe tell us the top-level await story and we'll use that as kind of a view into how TC39 works.

**Yulia Startsev:** Okay. I don't know if I remember all of the details of how top-level await evolved, but I can try to take you through our pet feature - we can call it foo - or we can take top-level await as that example, and just walk through the journey of someone's got an idea and then it turns into a full-blown feature.

**Jerod Santo:** Okay.

**Yulia Startsev:** So let's say anybody, for example Feross, or Jerod - either one of you could come up with an idea, just any idea, and say "Hm, it would be really great if this was in JavaScript." What you would do then is you would go to our Discourse, the TC39 Discourse. It's discourse.tc39.es. If I'm wrong, go to the TC39 website, which is tc39/es, and then take a look at how to get involved \[unintelligible 00:23:42.17\] The Discourse is listed there. Also in the footer.

We have an area in the Discourse for posting your great new idea, and getting feedback from delegates about whether or not that should be included in the language, or what they think about it, or where we're tried something like that before and it failed, or where they see inherent flows in it, or it might just be picked up. What we call this idea of yours - we have a name for it, it's called Stage 0, or the strawperson proposal. And it can be really anything.

Now, to get it to stage 1 - we have a 4-stage process. Stage 0 is just any idea on the internet; usually, we know about it, sometimes we don't. Things are floating around. You can create an example repository of your idea using the TC39 proposal template on GitHub. You just create a repo based off of that template, and there you go. You've got your first stage 0 proposal, you've discussed it with people on Discourse, and ideally, someone on Discourse who is a TC39 delegate has come along and said "That's a great idea. I wanna take that to Committee", and you get to be a part of that whole process from that point on. In that case, you take the role of the author, and the TC39 delegate who's adopted your proposal will be your champion, the champion for your idea within the context of Committee.

That idea is taken to Committee and presented for stage 1. So it goes onto the agenda. Right now we meet eight times a year, and we discuss it in something called Plenary for about half an hour to an hour. People will say "Oh, this is a terrible idea. We should never do it." Usually, nobody says that for a stage 1 proposal. We try to bring ideas in. It's our siphon for like "What's the internet thinking about?" and in general, we consider proposals entering stage one as problem statements.

If we take, for example, top-level await, and you read the top-level await proposal repo, we have this section there called The Motivation. The Motivation is stating the problem that the top-level await is trying to solve. Stage one is really like "What is this thing? What's wrong?" and "Later how do we solve it?"

The solution and the problem are bundled together. This is still something we're figuring out, how do we separate those two, so that we can really discuss the problems in isolation and understand them fully before we go forward with the solution. Right now they're tightly couples.

So if we read the motivation section of top-level await, the motivation there is that the syntax overhead for doing something that will allow you to pause at the top level of a module is really, really painful. Syntactically it's buggy, and people have tried all different ways to get around this, but it's just not great. So that's the motivation for top-level await.

I think between stage 1 and stage 2 -- so stage 1 is we've accepted the problem, go ahead and investigate it, and come up with the best solution that you can given the information that you have... So figure out what the spec should kind of look like, figure out what kind of initial problem areas exist, figure out what the solution should look like. That's how we ended up with top-level await having just the await keyword before whatever you're awaiting.

There were other solutions for top-level await. One of them was to say that the module -- you mark the module that you're importing as async. That's another way to do it. Right now it's implicit that something is synchronous, but we had an idea of it being implicit. And there are still ideas around this floating around in the committee that we've been discussing recently.

So now you wanna take your proposal, whatever it is, to stage 2. By stage 2 you should have a complete idea what the API should look like for that proposal. You should have a good argument about how it solves the problem that you want to solve, and you should already have a spec text ready.

Stage 2 is about ironing out the problems, ensuring that we haven't missed anything. This is sort of like the draft process. We're drafting the final spec text, we're figuring out everything that we can before we start implementing the proposal fully in browser. That may also come with a polyfill. Maybe one browser or another browser, when they think that the idea is really good, they might implement it early at stage 2, or not. So that's what the draft stage is for. Then we move into stage 3, which is where I usually get deeply involved. For example, the transition from stage 2 to stage 3 is very hard; we want to make sure that we don't miss anything that could potentially be a problem going into stage 3, that we can foresee before we have to implement the work. Because when we're talking about implementing a proposal - for example, top-level await took six months to implement. Most browsers were around the area of six months of engineering time to implement it into a given browser... And these things can even be more work. They can be a year of work, multiple engineers working on it.

So we have to be really careful before we invest that kind of work that we're not giving a specification that's inherently buggy... Although sometimes you miss things, and we have to roll back. So the stages don't just move in a forward direction, they sometimes loop back. One example is we've just had regular expression group indices move forward to stage 4... That was stuck at stage 3 for a long time; it didn't actually get rolled back. It's details... We've had stuff rolled back when we've had inherent problems between proposals that we didn't foresee... So we had these two proposals in stage three, and one of them had to be rolled back, because it turned out that that was the one that needed to be fixed in order for it to move back up the stages to stage 3. So something like that can happen... Or we may end up re-questioning whether or not the grounds for the proposal were appropriate, and then moving it back up.

Another important detail is that if there's disagreements about this, the committee doesn't really reject proposals. Let's say something's going through the stages and you're like "Oh, God. Oh, God. This should never go into JavaScript" and you're really worried about it, one thing to pay attention to is if the proposal has been blocked and hasn't been progressing. We don't generally formally reject ideas. We keep a record of everything that we've tried, so that the next time maybe someone comes along in ten years and is like "Hey, that thing that you thought was a bad idea - actually, we have a really important use case for that now", and then we can pick up work from that proposal and use it as a historical base for future work.

**Jerod Santo:** That's cool.

**Yulia Startsev:** Yeah. It's a very long and complicated process; I'll try to keep it shorter. And then finally, stage 4 is spec. We're in spec. That's where top-level await just made that jump. We went from stage 3 to stage 4 in the last meeting.

**Jerod Santo:** So what do you do in the case of competing ideas around implementation or API? You mentioned the implicit await versus the explicit. Were those two different proposals, or was there one proposal and then people debating how to go about that proposal? And then how does a decision come out? Is there a vote? How does that work?

**Yulia Startsev:** So we do both things, actually. We debate within the context of a single proposal, and sometimes we also have forks of the proposal which show competing ideas about how this thing could be implemented. Now, the most famous fork -- we call it the Backpocket Solution... The most famous fork of a proposal was ES5. Perhaps you recall ES4, this specification that we've worked on for ten years, and you got from ES3 directly to ES5... Why did that happen? Because ES4 was developed over ten years, and then implementers took a look at that and said "This isn't implementable. We can't do it. It's too much." It had doubled the size of the specification. We couldn't implement it. So what happened is a group of delegates sort of sprung off and sort of like started taking pieces of this massive specification, and we're like "Okay, these pieces make sense as an incremental improvement that is scoped and can be implemented." I think it was ES3.something. It was this bridge ES3.5, something like this. It was this bridge specification before we made the jump to 5, and we completely skipped ES4.

So that's the most famous of the Backpocket proposal. We had also Backpocket proposals come up for private fields, which was rather contentious... But what's interesting is those Backpocket proposals were always like "Oh, there's this specific problem with our current solution to the private fields problem. We propose that we do it this way instead." But every time that we got into debate, we would compare the two and discuss whether or not this second idea was a valid, better solution than the initial idea, and we always came back that that initial idea was the better one. SO we went through this process of deciding which one really fully covers the problem space, and that's how we ended up going with private fields the way that it was designed.

We also have people in committee who are protecting things that are intrinsic features of the language that could potentially disappear if we didn't protect them. One famous example is polyfillable implementations. Can we polyfill this thing? For example, had we specified modules a little bit differently, then you wouldn't be able to inject code so that it would run before the module ran, polyfilling like -- let's say a browser had the wrong implementation of Promise; you wouldn't be able to fix that implementation of Promise, because if we designed the module system in a specific way, then the modules would run before you polyfilled it. So that's one example of a critical idea to the JavaScript language that that needs to be possible, that we try to maintain.

These kind of features of the language - they're a little bit strange, they're not all written down, so some of our decisions might look a little bit like "Why did you decide to do that in that way?" Oftentimes it's because we're protecting certain features of the language so that they're still possible, so certain applications remain possible as we evolve the language.

**Jerod Santo:** That's interesting. So you should have some sort of a -- I would think there'd be a list, like "The 10 commandments of JavaScript features. Thou shalt be pollyfillable." It sounds like a pretty good guiding principle of like "Hey, if your proposal is not polyfillable, it's not gonna get accepted." Does that not exist anywhere? Is that just in the psyches of the committee, or...?

**Yulia Startsev:** At the moment it's sort of held near and dear to different delegates; different delegates maintain certain values about the language that they protect... There's a real risk, and this is why the question of "How do we design as a group?" is so important. This is why this is the fourth tier of language design in my mind, is because we need to be able to make these decisions effectively, considering all of the values that are represented by this cross-section of people.

And it's also a little bit arbitrary, because we have specific people on the committee. We don't have the entire planet on the committee. We wouldn't be able to handle that amount of information. But the people who are in the committee do care a lot, and they're largely volunteers, and they have been with the language for a long time.

To mediate for this -- you know, it's the bus problem. If one of us gets hit by a bus, then we won't necessarily pay attention to everything about the language... To mediate that, we've started a new project, which is writing down the intrinsics and making them a part of the normative text of the specification. What does normative mean? Normative means that it impacts the implementations, and it's a much stronger guarantee than another part of the specification which we call prose, which is explanatory text around the specification that does not impact the implementations. So that's one mediation that we have upcoming that should eventually come into fruition, and we will have a list of things that we think about when we design a language.

**Jerod Santo:** So how big is the committee?

**Yulia Startsev:** I don't know exactly how many members... So members are companies -- I don't know exactly how many members there are, because the members belong to ECMA, which is the standards body that we're a part of (ECMA International) and at committee we usually have between 40 and 80 people present.

**Jerod Santo:** And in the case of a contentious proposal - does it just end up going to a vote, or how do you resolve conflict?

**Yulia Startsev:** We have to all agree.

**Jerod Santo:** Unanimous.

**Yulia Startsev:** This is an unusual thing... It's a unanimous agreement not to block. So not everyone is necessarily happy with the proposal, but they all accept it in the current form that it goes forward in. So 80 people have to say that they won't say no.

**Jerod Santo:** That sets stuff up for a filibuster, doesn't it? You've got one stuck member that's just like -- that's a lot of power in the hands of one member. "No. I'm gonna block."

**Yulia Startsev:** Yeah. It's a lot of power in one member.

**Jerod Santo:** So then that person, that entity just has to be convinced? Is that how it works?

**Yulia Startsev:** Yes.

**Jerod Santo:** Why does it work that way?

**Yulia Startsev:** Excellent question. It works this way because the community used to be smaller. It was like 12 people. This is when ES5 and ES6 were being developed; at the time, it was a system that made sense. But as you probably know from other political systems, once you have such a system, it's very difficult to move away from it. That said, it has saved our skin a couple of times. One example is observables. This was a popular feature proposal; a lot of JavaScript developers liked it a lot, and there was one person who said no. And they said no after -- the other thing is committee work isn't free. We spend a lot of our lives thinking about these programming language features, and how are we going to implement them, and how should they be spec'ed... So it's a lot of work that you're saying no to. There's a lot of social pressure to not say no. One person said no, and they completely stopped further discussion on that proposal.

One thing that we're encouraging now - if you read the proposal document today, we have an important document around how we make decisions. It's called the Proposal Document. It tells you how to block in an effective and productive way... Because just saying no isn't very good, because it doesn't lead us anywhere. I think one important aspect of that document is that it says "When you say no, you have to give a reason, so that we can learn from why a proposal failed."

Going back to the story about observables, one person said no, everybody was mad for a while, and then three years later people were like "Oh, thank God we didn't do observables. That guy was totally right. We should not have done it, for exactly the reason that he said."

So it's an interesting process. I think one of the big reasons why it's working for us is that we have a lot of people participating in good faith. People want JavaScript to succeed. They want it to be a good language. They aren't blocking just to be difficult.

**Jerod Santo:** I would imagine there could be situations where you have members that are not acting in good faith... Or maybe not just not in good faith, but in their own interest. So if you have members who represent Apple and you have members that represent Google, those two entities could be at odds. Maybe they have corporate reasons for certain features working in certain ways, or doing this and not doing that... Ultimately, they have to implement it into their browsers anyways, so they can also I guess hold out on that aspect... But to me, it's just fascinating, and I appreciate all the work that y'all do, because us regular JavaScript developers -- I never think about this stuff. I never thought how much (for lack of a better word) political machinations go into deciding like how I wrap my regex, or how I import a module. There's a lot of thought and debate, and politicking in the sense of like dialogue that goes into these things. Feross, do you ever think about this? I guess every once in a while when we have someone on the show I think about it, but not very often.

**Feross Aboukhadijeh:** I think about it sometimes, but most of the time I don't have as much time as I'd like to to devote to looking into this stuff, so I just kind of learn about things when someone writes a nice blog post about them that explains how they work.

**Jerod Santo:** Exactly.

**Feross Aboukhadijeh:** Sometimes I get involved earlier, when there's something that the language just feels like it's missing, and I'm looking for some solution... But this usually happens more with web features, so kind of outside of the realm of ECMA. It'd be more like I'll find some browser proposal that I'll get involved earlier with that kind of stuff... Less though in the JS language itself.

**Jerod Santo:** In the language.

**Feross Aboukhadijeh:** Yeah.

**Yulia Startsev:** Yeah, I think it's also very interesting how different the HTML standard is compared to ECMA in terms of its governance... And you'll also find different standards bodies have a very different governance structure, and you end up having different conversations as a result. That's very interesting to me. And thinking about how do we best come to those decisions - it's just a very interesting area.

**Jerod Santo:** \[unintelligible 00:39:38.10\] of "Here are N organizations that do standards in technology space, and based on these criteria, actually this way of going about it is better than that way, for these reasons." When it comes time for you to pick your governance model for your foundation - or whatever it is; for you specification - you can say "Actually, the way these people are doing it, for these scientific criteria (that I can't make up off the top of my head), this is a good way of going about it." Maybe the 100% unanimous thing makes total sense in practice, or its pros are more than its cons, and so that'd be a good one to adopt. Or maybe it's actually slowing you all down, and HTML folks do it better, and that would be a smarter of doing it. I think maybe those things exist, and this is just a world hat I don't live in, but... That would be cool.

**Yulia Startsev:** You know, it's really interesting that you bring that up, because there is a study of how people make decisions... It's called Argumentation Theory. It's basically the study of how rhetoric really works in large-scale discussions. When I started looking at this, I was like, "Oh, cool, rationale design." Lots of languages have rationales of how are they designed... But then also discovering programs that can determine the rationale for how a certain decision was reached - those also exist. Then there's people studying this and writing philosophical texts about how decision are made, what kinds of arguments have weight, which ones influence a discussion but maybe aren't correct - that's another really, really interesting study, and in fact, part of what I wanna do as my masters work.

**Jerod Santo:** Oh, cool.

**Yulia Startsev:** We have a professor who specializes in that, and I've been in touch with him a little bit. I'm hoping to convince him to take me on.

**Jerod Santo:** You'll have to use your argumentation theory in order to convince him. What were you gonna say, Feross?

**Feross Aboukhadijeh:** One thing I'm curious about that just came to mind is how would you say that your perspective differs from some of the other members? I don't know if you represent just sort of -- I'm guessing you also represent SpiderMonkey, or Mozilla's position \[unintelligible 00:41:32.24\] opinion of the organization to the group... How would you say that your or Mozilla's perspective differs, and what sorts of proposals do you find yourself frequently at odds with, or more in favor of?

**Yulia Startsev:** It's a fantastic question. That actually brings us back to something that Jerod said earlier, about let's say you've got Google and Apple arguing over something. One thing that happens pretty often is you have the browser space sort of saying like "This is an important feature for us", and then other embedders of JavaScript being like "Well, actually we have other concerns."

We had a really interesting discussion recently... So there's two discussions I'll bring up. The first one is around realms. I don't know if you've heard of the proposal... Probably everyone's worked with iFrames, and you know that you can pass information from the parent document into the iFrame... You can actually pass objects directly in between those two documents. What realms are is realms give you the ability to create a global, a separate JavaScript global without creating a document to embed it in. What you can do with JavaScript in an iFrame without having the iFrame wrapping it.

And one thing that was important from the browser's perspective is that you couldn't arbitrarily pass objects between these two things. This was something that was viewed as a mistake in the world of iFrames.

Now, for other environments such as Node, this was like "Well, no, this is something that we do wanna do. This is a really nice way to program. We wanna be able to pass objects unwrapped." So that was one place where we said "No, we can't do it like that."

Additionally, we also said that the JavaScript space, what we specify in ECMA, shouldn't be kept separate from the HTML APIs that are provided into JavaScript, for example Fetch. Or maybe something like B2A or A2B APIs that -- I forget; one of them is in JavaScript, one of them is in HTML, and as a JavaScript developer, you shouldn't need to know which standards body specified something in order to be able to use it. So one requirement we had for realms as well was that we consider a few HTML APIs that should also be wrapped in the realm's proposal.

So that's one example where we took a strong position, and that shows also the browser interest. This is a common thing that we take - we say that JavaScript should still be coherent with the web... And that influences things for places that are not involving themselves in the web, like embedded JavaScript running on tiny microchips. They don't care about that stuff, but we do, so...

**Feross Aboukhadijeh:** That makes sense, yeah. As a web browser implementer you're gonna have opinions on that. Realms is a really cool proposal, I'm really looking forward to that. I kind of wanna build some stuff with it, and it's really cool. By the way, when do you think that's gonna be something that we can play with?

**Jerod Santo:** Can we get an ETA on our favorite features? \[laughs\]

**Feross Aboukhadijeh:** Yeah, exactly.

**Yulia Startsev:** Well, I think you may be able to play with it already. You can work with \[unintelligible 00:44:19.26\] polyfill, that allows you to do some of this stuff that realms promises to be able to do... Or if you want, you can grab the Firefox browser and try playing around with the compartments that we have, which is essentially the realms proposal... Because we do have something that allows us to generate JavaScript globals without having a document, but it's all internal browser APIs. We're really happy to expose that...

Actually, the direction that the realms proposal has taken now (isolated realms) is something we're very happy with, because it not only maintains the restrictions that we've represented as browsers, it also follows some of the design principles that HTML has, which is that APIs like this should be async.

So we're really happy with that new proposal and we're really hoping that it moves forward, because we think it's a good solution. Not everyone agrees with us... So it's hard to say; we thought it might move forward in the last meeting, but it didn't, so there's more to discuss and more to figure out there.

**Jerod Santo:** So what practical things - either of you could answer this - would realms unlock, that I couldn't do today? Why are you excited, Feross?

**Feross Aboukhadijeh:** Well, I'm excited by the idea that we could have better permissioning for different packages/modules within an app. Right now, whenever you install something from npm, you include it in your Node.js app and it can do anything that your code can do. There's no way to say like "This module is a pure function. It's just computing something based on its inputs. Give me an output. It shouldn't really need the ability to talk to the network or to read files off my file system. I wanna be able to just run this module in like a purely isolated environment where I can restrict it from doing anything I don't want it to do... And I think realms enable that.

Obviously, you need to build some tooling on top of it to make it actually easy for people to use it, because I think the API, when I last looked at it, was pretty low-level...

**Yulia Startsev:** Yeah, yeah.

**Feross Aboukhadijeh:** But that's a really cool idea, and I could see that paving the way for a world where you have almost like smartphone-style permissions... You know, when you install an app for the first time on your phone, it says "Hey, I would like to use the camera" or "Hey, I would like to use the microphone." When I install a package from npm, it would be cool if I had to opt into the permissions that it wants, and if it tried to change those permissions -- you know, if someone published a patched version and suddenly it's reading files off my disk where it wasn't before, I feel like that's a thing where you'd want it to really be a red flag. Either it should fail, or it should effectively prompt the developer for permission in some way. When I say "prompt", I don't mean literally a pop-up running in your Node app, but something where you have like a configuration file that sort of grants permissions to different packages.

There's actually some cool work in this area right now with a project called LavaMoat. They're probably using the shim that you mentioned, Yulia, because you can use it today in Node... But I guess it would be better if it was using the real realms; I'm not sure, I haven't looked too in-depth into it. But it's called LavaMoat, if people are interested in looking at it.

**Yulia Startsev:** Yeah. Another thing that people can look up is compartments. Realms is the underlying proposal that will allow compartments to exist, which is a thing that will say "This realm can have access to these pieces." And "Here you go, this realm. Go and do stuff."

Realms is a fantastic way to do encapsulation of certain types of logic, in particular to keep the integrity of a program running as you expect. One thing that realms will not give you - and this is another place where browsers have a very strong opinion - is security. A realm will not be a full sandbox that will protect your code, because of Spectre. So anything that can take advantage of Spectre is immediately insecure, and realms doesn't run in a separate process. So the only way you would be able to get full security is if you have it running in a separate process, just because of this massive vulnerability that came up.

But realms are still very useful for this integrity question and encapsulation. For example, if you wanna run a set of tests, you could run your test suite inside of a realm, and you can run the program that you're testing separately. So that's a really interesting application of realms.

Of course, there is the compartments proposal, which will allow you to say "Okay, this should only have access to fetch, time, and some other things." And then otherwise it can't automatically access things accidentally. It just won't have access to the time API, for example. It can still escape the books, but it's a little bit more contained, a little bit more controlled.

**Feross Aboukhadijeh:** Right. It sounds like you shouldn't run outright malicious code inside of a realm and rely on it...

**Yulia Startsev:** Yes.

**Feross Aboukhadijeh:** But I still think if I were to install a malicious npm package by accident, because it got compromised, I would be much happier having it run in a realm, than having it run randomly on my computer, being able to access all of the core Node APIs and reading files, and child-process.exec-ing things...

**Jerod Santo:** Totally.

**Feross Aboukhadijeh:** Is that fair, or am I thinking about it wrong?

**Yulia Startsev:** Well, the thing is I don't want you to have the wrong model to think that it'll actually protect you... Because the best way to make sure that that is properly sandboxed is by running it in a separate process that doesn't have access to everything. So that's the best guarantee that it won't escape the sandbox. But if, say, you're downloading an npm library and you're not really sure if you trust them how they've used all the APIs correctly - not that they're actively malicious, but maybe they've made some small mistake - not everything blows up, for example.

For example, they won't polyfill your array object to do the wrong thing suddenly, which would suck. You have your own copy of the array object outside of that realm running in the parent realm, and you can use that instead. But if you have a malicious code running in a realm and it's written in a time when realms exist, and it knows how to escape realms, it will be able to escape realms.

**Feross Aboukhadijeh:** And escaping a realm in this case means running code outside of the realm, not just like leaking some information...

**Yulia Startsev:** Yeah.

**Feross Aboukhadijeh:** Oh, okay...

**Yulia Startsev:** It's just that realms are not a strong security boundary. I'm not very confident in what I'm saying, because I haven't looked at realms for a while, but the thing that's sort of being like "Hm--" One thing you should keep in mind is it's not a strong security boundary.

**Feross Aboukhadijeh:** Okay.

**Yulia Startsev:** It's more of an integrity boundary... Which is another way to think about security. The definition of security has multiple facets to it, and integrity is an important one... And that's what it gives you.

**Feross Aboukhadijeh:** Cool. I could ask you more and more questions all day about realms, but I will refrain myself... \[laughter\] It's a cool proposal.

**Yulia Startsev:** It is a very cool proposal. I'm not an expert on it, actually. The best people to talk about it are the champions, so...

**Jerod Santo:** Well, I've found the compartment proposal. We'll get the realms proposal and LavaMoat in the show notes for those who wanna do their own research.

**Break:** \[50:46\]

**Jerod Santo:** Many of us are just building apps for the browser, using the browser, to live our lives... We don't really understand exactly how it works. We know that SpiderMonkey is part of Firefox. You've mentioned Gecko... We understand that V8 is inside of Chromium-based things, and SpiderMonkey - you can embed it in a bunch of stuff... But let's take Firefox, for example. When I load a web page - let's say I load hag.codes, and Firefox does its thing... can you explain, at least to some level of granularity, how it all fits together? Where is Firefox interacting with your work, for example?

**Yulia Startsev:** So I won't be able to answer this fully, but I can answer it to the best of my ability, and get to the point where I start to understand things well, which is the script loader... So my understanding, my mental model of what the browser is doing is you type your URL into the URL bar and you press Enter. And when you press Enter, that string is taken and put into our network handling component (I think it's \[unintelligible 00:53:16.28\]), which is the thing that goes and retrieves information from the web; it goes and makes the requests using TCP, and then it's like "Go and get me this information", and then it starts getting a stream of information in, and packing it together... And then once it's packed together, something that looks like an HTML page -- and I think we don't even wait for the entire HTML page to load. We start parsing it earlier, and incrementally building it... Because HTML is very permissive. So this is how I imagine we're doing it.

And you're loading your HTML, and as you're loading the HTML and parsing it, you're building up a representation called the DOM (document object model). In the DOM, you eventually hit something that's a script tag. Once you hit a script tag, depending on how it's being loaded - it might be loaded as async or deferred - and also the type of script that you're loading, the script loader will be called and do slightly different things.

The script loader will get the request and be told "Here's the script that you need to go and fetch." It will go and open a channel to fetch the things from the network, so this is gonna be your next network request, and the stream will come in and we will pack those bytes until we have a file that we can represent. Once we have the file that we can represent, we then take that and -- I don't know the exact switch that happens here, but we usually try to parse things off the main thread. We delegate it to some other thread, and then it takes care of the parsing, and then it takes care of getting it all ready for it to be run.

Once it's ready to be run, we execute the script, and depending on how you've written your HTML page, the document \[unintelligible 00:54:49.25\] will fire before or after the script has been finished executing. So depending on it you've got a regular JavaScript script, this is what will happen. So this is the regular flow, as I understand it.

Then if you've got a module flow, it's a little bit different. So what happens when you've got a module that you're loading, what'll happen is it'll encounter the script tag, and the script tag will say that it's a module... Or it'll encounter a normal script and find it inside of their dynamic import. And once that happens, that triggers a slightly different process, where you'll go and you'll fetch the script, and get it and then parse it, and be like "Okay, now I've got a module", and that module will have a different representation, which is a list of other scripts that I wanna load. And immediately, your browser will go and fetch those other scripts, all of them. So the entire module tree will be fetched and parsed ahead of time.

Then, once everything is ready, we start evaluating everything. Now, in classic scripts you'll evaluate from the top down. In modules you will evaluate from the innermost module back to the root module. And this is maintained even in top-level await, where all the modules are transformed from synchronous code into asynchronous code. So each module is represented as a promise, which we evaluate one after the other. In one case you're interacting with a promise machinery, and in the other case you're interacting with regular machinery.

Then you load the innermost module, and then go out, like a Matryoska doll. Then you've got your complete application running, probably in a loop, doing stuff, listening for events, stuff like that.

**Jerod Santo:** Alright. That was a very good explanation. I definitely appreciate it. At which point in that does the SpiderMonkey engine engage? Is it merely on "Here's a block of execute this code" or is it also in the module loading and Russian dolling effect?

**Yulia Startsev:** Right. So there's a really interesting thing about how this spec actually dictates how the engine also interacts with the host that it's in. These are called host hooks. So exactly what you said, that second point - the engine is engaged, SpiderMonkey gets called at the point where we're ready to parse. SpiderMonkey takes care of all of the parsing, and it takes care of all of the execution side of things.

**Jerod Santo:** Okay.

**Yulia Startsev:** But for example with modules -- like, with scripts you can more closely couple those. You can parse it, and do whatever work, and then you can evaluate it, but you can also do them one after the other immediately. With modules, you can't necessarily do that. You need to first fetch everything, and do that as part of the fetch step, and in order to fetch everything, you need to parse. So you need to both fetch and parse all the scripts. Then you can separate evaluation from that.

I have a proposal around this, because one of the issues around modules is that the number of network requests you need to do to load an entire module tree can impact your app's startup performance pretty significantly. That parsing and fetching chunk can take up about half the execution time of the module, so one of the thoughts was "Can we completely decouple these two parts of module loading?"

So that first part is handled by SpiderMonkey. SpiderMonkey is called by the script loader to go and do this work, the parsing, the fetching and the linking of all the modules together, and then SpiderMonkey is later called to do the evaluation work. So all of these things sort of like link together, and what SpiderMonkey does is after it's parsed the modules, it actually calls back into the host, the script loader, and tells the script loader to then go and do the fetch. So these two things are sort of like hooking into each other this way.

**Jerod Santo:** Okay. Now I know why my website's so slow. There's so much to do...! The amount of complexity and depth to this is somewhat overwhelming, in the sense of when we really think about it... And we take it for granted, because -- I mean, I joke about my websites being slow, but it really happens all so fast. It's crazy.

**Yulia Startsev:** Yeah. In some cases, we might be able to improve module load performance without doing different module evaluation. There is a gulf between the CommonJS module era and where we are today, in that a number of CommonJS modules cannot be directly translated into ESMs. And that's one of the problems that I want to solve at some point... Because we have a similar problem. We have an early-adopted module system that doesn't actually work for the web. You might ask "Why doesn't it work for the web?" So I mentioned that loading modules while running scripts is something we can't do; the reason we can't do this is if we run asynchronous code during synchronous code, we have to block the main thread. That's something we never wanna do on the web, because then things lock up, and that's a bad user experience. That's why we want all of our APIs to be async. It should all be delegated to go and be done at a later point in time... So we can't do what the original CommonJS implementation did, which is block until the request finishes and come back, and then continue executing... So that's a unique problem where if you wanna transition from CommonJS into ESMs, you end up rewriting a lot of your code as async... And that can be hard to look at, and hard to reason about.

**Jerod Santo:** Tell us more about this proposal you have, and maybe its process. This might tie together both subjects now, because we have your own personal proposal; this ties into SpiderMonkey's work and Firefox's needs... And it's kind of a stage 1, or maybe it's on ice... What's the status, and maybe tell us the story about this deferred module loading thing. Or execution.

**Yulia Startsev:** So deferred module evaluation will give developers the ability to say that they don't want the module to execute until it's needed, for example on first use. Let's say you've got a module graph that you wanna load, and it all gets fetched and it's ready for you... But you can select certain modules and say "I don't want them to run yet. I want them only to run if I actually use them", for example if someone clicks a button on your React page; someone clicks that button and you wanna load that in another component, and you don't want to run all of that code ahead of time, you wanna run it later. You know, there are other optimizations for this. This is sort of a simple example of this.

One way to do that is I think React now has a way to hide the asynchronous nature of this fetch, so that it looks like it's synchronous code, but it isn't actually synchronous code. I think they use error catching in order to do that. It's a really interesting approach that they took, algebraic effects, but it also shows that this is a problem, and developers are having a hard time reasoning about this asynchronous code which is a complexity of the web platform that isn't their fault and isn't actually logic in their program; it's logic about the web. The question is "How do we remove that complexity so that it's easier to program for the web without having to do asynchronous code when you don't intend to do asynchronous work?"

Deferred module evaluation is one stab at it, but there is another way to do this, which is by exposing the module loader itself and allowing programmers to write their own module loaders with their own logic around module loading. So you could for example reimplement a CommonJS loader that has the same concepts as CommonJS, but it takes into account the asynchronous nature of the web, and allow people to program as they would, and then handle that stuff within the loader. So that's one way we could do that, by exposing the loader. And then deferred module evaluation does that automatically for you; it's an opinionated approach to it, and not everybody would be necessarily happy with that, and not everybody already is happy with that, so we might take a slightly different approach.

It is a little bit on ice right now, because I am working on revamping the module loading in Firefox, so we can do it for workers as well... So until I figure that out -- because it also impacts our internal project, which is reworking our internal module loader so that it can do the same stuff... It might in turn influence that proposal, and then we could bring this research into the open web and allow people to use it as well.

**Jerod Santo:** Well, I can't give any opinions on your solution, but I can tell you that your problem is on point; your problem statement is 100% valid with this guy, and I would definitely appreciate ways of (I guess) papering over - maybe that's a pejorative; I don't mean that in a negative light, but like solving that problem of this impedance mismatch between async and sync, and the mindset of developer causes lots of slowdowns in development cycles, and bugs, and there's lots of education that has to happen because of it... Where if we could solve that problem in an elegant way, that would be a huge boon to all of us.

**Yulia Startsev:** Yeah. I think this is where we come to the third phase of development. Sorry, not development... Language design. We've talked quite a bit about decision-making as a group, as an aspect of language design, and now we're talking a little bit about the mental model, how a language's design will impact how people model problems. One of the parts of that is how much do you expose of the complexities of the domain in which you're working to the programmer, so that they can work with it directly, and how much of it do you hide, so that they can work more efficiently with the domain that they're interested in representing through code.

I think that's a really important problem, and in some cases we wanna give lower-level tools, in other cases we wanna give higher-level tools... And in some ways, this aspect of the web, the asynchronicity of the web by requirement - if we can do that by design, it would be really interesting, I think, for developers, and make it easier for them to work with their chosen domain, the one that they're trying to implement.

**Jerod Santo:** Fascinating stuff, Yulia. Hey, you are welcome back on JS Party any time. I've learned a lot today; you're very bright, you're very good at explaining things to people with lower capacities like myself...

**Yulia Startsev:** Thank you.

**Jerod Santo:** Honestly, please come back. Maybe we'll have you back to talk a full episode on realms, maybe bring somebody from the committee who's a champion, a realms champ...?

**Yulia Startsev:** Yeah, we should get a realms champ on here.

**Jerod Santo:** Yeah, we should. We'll bring our realms champ, it's Feross. He'll be on our side. You'll bring your champion, we'll bring ours...

**Yulia Startsev:** \[unintelligible 01:04:40.02\] \[laughter\]

**Jerod Santo:** ...and we can have a proper realms conversation, with a little less hand-waving than the three of us had to do... That would be really fun. But best of luck to you on your masters and all you're doing. I hope you get your livestream back up, and I appreciate all the work that you and everybody at Mozilla does on SpiderMonkey, and on Firefox... This is important work, and you're pushing the web forward, and you're doing it in this group, thinking in a "best idea wins" way, which ultimately means we all win. So we appreciate your efforts on that front as well.

Feross, thanks for being here, thanks for hanging with us. That's our show for this week.

**Feross Aboukhadijeh:** Thanks a lot, Yulia.

**Yulia Startsev:** Thank you both for having me here. I had a lot of fun. I hope we can do it sometime again. That was great.

**Jerod Santo:** We absolutely can. Alright, that's our show, and we'll talk to everybody next week.

**Outro:** \[01:05:28.02\]

**Jerod Santo:** And Yulia... Your last name - Startsev?

**Yulia Startsev:** Startsev. Correct.

**Jerod Santo:** Startsev. Okay. Feross, your last name? Nah, I'm not gonna say it. \[laughter\] You know I know how.

**Feross Aboukhadijeh:** Aboukhadijeh.

**Jerod Santo:** You know I know, because it rhymes with DJ. It sounds like DJ. Like you're booking a DJ.

**Feross Aboukhadijeh:** Yeah, you like saying my last name. I think you find opportunities --

**Jerod Santo:** I kind of enjoy saying it, I'm not gonna lie.

**Feross Aboukhadijeh:** Nice...

**Jerod Santo:** But you're kind of going the Prince/Madonna route online... You're Feross.

**Feross Aboukhadijeh:** Yeah...

**Jerod Santo:** No last name required. Everybody knows Feross...

**Feross Aboukhadijeh:** Yeah... \[laughs\]

**Jerod Santo:** He's that mad scientist over there, that you can't figure out his last name until you book a DJ.

**Feross Aboukhadijeh:** It's cleaner. It's just simple. Nice and simple.

**Jerod Santo:** It is. Plus it's pretty unique, so there are not namespace clashes... I've got the problem of Jared the Subway guy, who turns out is like a longtime pedophile, and stuff... Terrible, terrible namespace clash. I'm not associated with that man, neither do I enjoy Subway sandwiches, so I'm doubly not with him... \[laughter\] But are there any other Feross'es out there?

**Feross Aboukhadijeh:** I mean, somebody else bought Feross.com, and I regret it... Because I think I was like 11 or 10 years old when I wanted to buy my first domain name, and I didn't have the $7 to buy Feross.com back then... So I only bought the other domain I wanted, for the site I was building at the time. Then a couple years later this random other guy who spells his name the same as me bought it, and I've been on .org ever since \[01:07:53.12\]

**Jerod Santo:** Oh, gosh... Like a chump.

**Feross Aboukhadijeh:** Yeah, I know... \[laughter\]

**Jerod Santo:** So I've wanted santo.com, which was held by some -- there's some company that just bought every last name .com just to hold them and be a jerk and sell them to you, because capitalism... But then I've found the Tonga domain, .to. So I really wanted san.to, because that's a great hack... But somebody owned that one as well. It's a three-letter domain and Tonga, san. So I've been hounding that for years. I'm playing a long game. I'm gonna get it eventually. Every six months I just go check it and see if they let it lapse... Literally, since 2008 I've been doing that. Maybe if you just stick around long enough, that guy will let it -- is he using Feross.com, or not?

**Feross Aboukhadijeh:** I mean, he's trying to have like a rap career, or something...

**Jerod Santo:** Oh, he's never gonna give it up then... Can give that up! That's the dream. \[laughter\] You can't give up your rap dream. Sorry, you're not gonna get it. Feross.org is cool though. It's because you're a non-profit, you know?

**Yulia Startsev:** \[unintelligible 01:09:00.17\]

**Jerod Santo:** Yeah, exactly. \[laughs\]

**Yulia Startsev:** ...rather than a commercial entity.

**Jerod Santo:** That's right. You're a non-profit. It's even cooler.

**Feross Aboukhadijeh:** Yeah... It gets the job done.

**Yulia Startsev:** I think the one web domain that I've wanted to get and couldn't is the one when they put up the xxx domain for pornography sites... I wanted to get yyy.xxx, but someone was squatting on it already, and I was like "Dang it!" This was back in my art school days; it was a perfect \[01:09:29.11\] website.

**Jerod Santo:** Yeah, totally... You've gotta move fast on the xxx domains, it turns out...

**Yulia Startsev:** You've gotta move fast on this... \[laughter\] But when I lost my GitHub access, I ended up with hag.codes, and that works out pretty well... When they came up with the .codes domain.

**Jerod Santo:** I saw that one. That was cool. Because your code \[01:09:48.24\]

**Yulia Startsev:** Exactly.

**Jerod Santo:** Yeah. I like that domain. I'm nowhere near as creative, so I just went for jerodsanto.net. I have the .com, but I redirected it to .net, because -- I don't know why... Back when I first signed up, I thought .net was cooler, and I've always just left it, because I don't really use it anyways...

Anyways, we should do a podcast, shall we?

**Yulia Startsev:** \[laughs\]

**Jerod Santo:** Here comes the intro music, and then I'll introduce the show.
