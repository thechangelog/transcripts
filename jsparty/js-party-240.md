**Jerod Santo:** Hello, friends! The sounds of those Breakmaster Cylinder beats means it's time once again for a JS Party. I am Jerod, your internet friend, and I'm joined today by Kball. What's up, man?

**Kevin Ball:** Hey, hey! Excited to be here.

**Jerod Santo:** Excited to have you, as always. We have a special guest with us, Tejas Kumar. What's up, man?

**Tejas Kumar:** What's good! It's good to be here. I'm here only for the vibes.

**Jerod Santo:** You're here for the vibes. We have the vibes, so...

**Tejas Kumar:** That's right.

**Jerod Santo:** ...glad you're here.

**Kevin Ball:** We make the vibes.

**Tejas Kumar:** You are the vibes.

**Jerod Santo:** And we do, we're gonna continue to vibe... Let's start off with the React Brussels vibe. So last week we gave a holla to React Brussels. This week we have a speaker from React Brussels. Remember, that's the event happening in Brussels on October the 14th. And last week I gave you some of the details, but I forgot one big part. The part that I forgot is that Omar from the organizing team gave us a couple of things to help bring people out to the event. So the first thing is a coupon code, JSPARTYTIME. All caps. I don't know if the caps matter, but go ahead and, QA test that form, see if you can go all-caps, or if they have a case-insensitive matcher... And you save 30% off when you buy a ticket.

\[00:04:11.17\] We also have a free IRL ticket, and five online tickets to give away. So we will be doing that. We don't have a plan yet. Follow us on Twitter, @jspartyFM, so we'll let you know exactly how you can enter; it'll be pretty easy. And we will give out some tickets so we can get people out to the event. Tejas, are you excited about this conference?

**Tejas Kumar:** I'm so excited! Dude, this conference is like -- it's special. It's family style. It's very communal. It's a tiny team, and a small conference. It feels like it's just a bunch of friends hanging out, talking about React. It's the first time ever I think they do this, in-person anyway... But they did a -- it was like a JS Brussels conference. Brussels.js, I wanna say... It's the same team, and it's just the best -- and the thing that I like the most right is that they want to really highlight Brussels for you. They want to give you a tour, and "Hey, this is Belgium. let's go to cities and eat waffles" and... It's very proud of where it is. I like that.

**Jerod Santo:** Yeah.

**Kevin Ball:** I love those. Those like single-track, one to 500 people, embedded in a space, and taking advantage of that space. I've been to a few that did that, and those are the best memories.

**Jerod Santo:** That's my favorite. I like single track, because it's we're all having this one shared experience. Of course, it's fun to put together your schedule and say "I'm going to this one, and that one" for these multi-track conferences... But like the small, local, like you said, communal, single-track events where like the organizers really care, and they're really proud of their local region... So much fun, so interesting. And I'm getting super-jealous that I'm not going to be there.

**Tejas Kumar:** What?!

**Jerod Santo:** But happy to help Omar and the team... No, I'm not going to be there.

**Kevin Ball:** I'm a little jelly, too.

**Tejas Kumar:** Man, don't you have -- aren't you tight with Omar? It'd be like "Omar, make it happen, bro."

**Jerod Santo:** Okay... I haven't said that exact phrase. But if that works... We'll see. I'm gonna talk to Omar and see what happens. Tejas says "Make it happen, bro."

**Tejas Kumar:** Yeah, man.

**Jerod Santo:** So what's your talk gonna be about?

**Tejas Kumar:** I'm gonna be talking about React... Wow! Unexpected. No, I'm gonna --

**Jerod Santo:** Surprise...! \[laughter\]

**Tejas Kumar:** So I was reading the React docs, right? And these new concurrent features are nice, and really helpful. But since Dan Abramov had this JSConf Iceland talk where he kind of teased Suspense for data fetching, it's always been this thing that "Is it ready yet? And can I use it?" And with the new release, it is, but the React team is "Oh, but don't roll your own. You want to lean on a library, like React Query, or something." And I am not saying people shouldn't do that, but I'm saying if somebody just wanted to play and see how the libraries work with this, that's what my talks about... It's here's kind of what the libraries are doing, and if you wanted to build your own, just to have fun, this is how it would look.

And we do that controversial thing where we throw promises... And React caught some flack for that, "How could you throw promises? You're only supposed to throw errors." And JavaScript meanwhile is like "No, no, you can throw -- literally, you can throw yourself, if you try."

**Jerod Santo:** Throw whatever you want, man...

**Tejas Kumar:** Yeah, that's right. We're throwing some promises and looking at how it works in libraries.

**Jerod Santo:** Those are cool talks, because even if you're never going to use it directly, and you're going to use React Query or something, like just having that knowledge of what's going on under the hood, and I could reproduce this if I want to do because I went to this awesome talk - that gives you so much confidence when you're using stuff, and when you're debugging, "Why is it not working?", because now I understand what's going on down there, in the nitty-gritties.

**Tejas Kumar:** Yeah. And it also gives you like topics for communication. I can totally see -- hopefully people go to work the next day, or after the conference, and they're "You won't believe what I learned here. Let me show you." And they start pair-programming. And then community ensues; people end up more together. That's kind of the hope, the content I try to create.

**Kevin Ball:** So I'm one of those people a little skeptical about throwing promises, and throwing -- throwing random stuff. That feels like it should be a part of our WTFJS segment, of "Really?"

**Jerod Santo:** Oh, okay...

**Kevin Ball:** "Really? We're doing that?"

**Jerod Santo:** Just because you can doesn't mean you should, kind of a thing...

**Kevin Ball:** \[00:08:10.15\] Yeah... Well, and -- I don't know. So I'm kind of curious, as someone who started digging in and using it, how did it feel once you crossed that WTF boundary?

**Tejas Kumar:** I didn't even have the WTF boundary...

**Jerod Santo:** \[laughs\]

**Tejas Kumar:** ...because, like -- I don't know, I've been doing JavaScript for so long that I just expect all kinds of BS to be able to be done.

**Kevin Ball:** \[laughs\]

**Jerod Santo:** There you go.

**Tejas Kumar:** I've been writing JavaScript since I was like 12. I'm 29.

**Jerod Santo:** That's more than half your life.

**Kevin Ball:** You have internalized the WTF.

**Tejas Kumar:** Exactly. Because I'm not a purist. I've never come from like -- I didn't even know what Turing-complete meant until like two years ago. I'm closer to JavaScript than proper programming, if that makes sense. So to me, I don't see the problem with throwing promises. I'm curious, Kball, what makes you feel like WTF about throwing promises?

**Kevin Ball:** Um... There's a couple of things. So one is just -- it feels like it would make it very hard to track control flow, and understand where... It's almost to like a go-to level, of "Okay, hop myself way back out to who knows where", like the tracking control flow, and how does logic move through the system, and how does that work - it just feels like it is going to be full of foot guns, and very, very challenging to reason about and to debug. That's the main place that I'm coming from there, is just like thinking about, "Okay, how would I understand what's going on in this code when I'm coming in and it's broken, because either somebody else wrote it, or I wrote it, and it's six months ago, or what have you, and I don't have the mental model for how it was supposed to work... Like, how am I going to track this down and figure it out?" So that's kind of like my initial reaction.

Now, as I have not yet played around with this idea of throwing promises. So it may be that in practice that is not as much of an issue. But certainly, in considering it, it feels "Okay, this is going to maybe work when I follow the golden path, and anytime anything breaks, it's going to be a nightmare to figure out what's going on."

**Tejas Kumar:** Yeah... That's because the error constructor gives you a stack trace, right? That's the whole point of throwing even the constructed errors. I see that. Yeah. Although -- I understand your perspective, absolutely... But from the React perspective as well, the reason they even do this is because the component tree can be super-deep, and they essentially want to recreate -- like, Suspense is basically error boundaries. You catch something that's data-fetching some levels deep in your tree, and don't render the DOM until it's ready. So conceptually, throwing a promise is kind of just like throwing to something above that's going to catch, and be "Okay, spinner here, if the delay is too long." That's kind of why I think they even went for that concept... Because as far as I know, in JavaScript there's nothing that works quite like that, where you can throw from n levels deep and respond to it. Maybe event emitters probably work that way... But yeah, I can understand how.

**Kevin Ball:** Now, what happens if the promise isn't taught?

**Tejas Kumar:** That's a good question. I think as of now, your global app Suspense, so the whole app doesn't render. So I think there's like a root-level catch block, so to speak... Meaning until every suspense boundary fetches and is ready, nothing flushes to the screen. You just get a blank screen.

**Kevin Ball:** And if you've already rendered something and you navigate somewhere else, or have a sub-component that's now re-rendering and throwing a promise that isn't caught - does it blank out your screen?

**Tejas Kumar:** I think it warns you in the console. I don't know what happens on the screen, but I think it warns you in the console, like "Hey, just so you know, this thing suspended, but there was no fallback." Usually, there's a fallback prop that you give to it, which is like a loading spinner or something... But in the absence of a fallback, that's actually a good -- actually, I don't know how that responds. It would be fun to try.

**Kevin Ball:** \[00:11:57.23\] I hear the problem that we're solving here, and it is a real problem, but I think it's also... Once again, you're depending on how that's handled, which I don't have a sense, but it's essentially eliminating the possibility of containment for that component. Right? That component cannot function necessarily in isolation. The parents have to understand that it's going to throw something, and I need to handle that.

**Tejas Kumar:** Yes.

**Kevin Ball:** Which - that's okay for some patterns. And that does solve some otherwise relatively unsolved issues here. I just -- it feels fraught to me. It feels like this is going to add a lot of maintenance overhead.

**Tejas Kumar:** Yeah... And it's also going to add a lot of cognitive load, it sounds like... Because if you did want to run this component in isolation, you would then have to think, "Oh wait, I should add a Suspense boundary, just at the boundary of this component itself." And that would then at least - while the component loads its data, you have the possibility to show something else. But you still have to keep that in mind. If not, React will warn you. So yeah, I agree.

**Kevin Ball:** What happens if you nest Suspense boundaries?

**Tejas Kumar:** That's a good question. You can nest them, and I think -- I don't know if this is out yet, but from what I saw in early demos, you can give them like different timeouts. So if you have A at the top, and then B is a nested Suspense boundary, what would happen is your app would render until B, and then pause rendering until B has data. And the highest up element from the thing that's suspending would pause, until the thing that's suspending has data. Now, if there's multiple layers of Suspense boundaries... But if there's just one at the very top of your app, then you have the choice of like not rendering anything, or even like removing your app from the screen while something deeply nested is fetching.

It does give you a containment problem, I hear that, and it also gives you like fine-grained control as to what to show and what to hide based on... You could - for example, if you have like a little to-do list, you could choose to hide your whole app while the list refreshes, or you could choose to just hide one to-do if you update. You have more control.

**Kevin Ball:** Yeah. I feel like this is potentially why the recommendation is there to say like "Use this within the context of libraries or things like that", because it creates this ability to foot gun. You want to have someone who has spent the time to understand this...

**Jerod Santo:** Guard rails.

**Kevin Ball:** ...and go build a bunch of guardrails around it, exactly. But yeah, I mean, to your point, it can be really valuable to know enough to go outside of that when you want to.

**Tejas Kumar:** Exactly. And even if not, it's just fun to \*bleep\* Can I swear on this podcast? Is that allowed?

**Jerod Santo:** You just did... Well, we'll bleep you in the final one, but it's all good.

**Kevin Ball:** I have occasionally gotten a little salty as well...

**Jerod Santo:** Sometimes Kball just does it just I have to get the bleep out... Which is just rude.

**Tejas Kumar:** \[laughs\] Yeah... No, but you actually -- like, through this discussion I kind of have more content for my talk now and React Brussels, because I could even just tell people "Hey, listen, this is why use a library." But just in case... You know, you want to \*bleep\* together...

**Jerod Santo:** Totally.

**Kevin Ball:** We're hackers, right? That's fun.

**Jerod Santo:** I was gonna say, hackers gonna hack. That's what we do. So of course.

**Tejas Kumar:** Usually, talks like this of mine are like the best received... I showed up to a meet-up once and did not plan to do a talk there, but it was kind of dead, and the meetup organizer was like "Dude, can you do something?" I didn't prepare anything, but "Okay, sure." So I get up to present something, and I'm like "What do I present?" And then I'm like "You know what - let's just reimplement React, like a cheap version of React, a cheap clone from scratch." How we did it was we wrote a React component, but we never imported React from React. So when you run this, you have a JavaScript error saying, "Cannot read create element if undefined." Right? And then we literally just like polyfilled this whole thing as we went...

**Kevin Ball:** Yeah, going backwards from the API.

**Tejas Kumar:** Exactly. And we did that over 45 minutes, and by the end, we implemented React to render our hooks, and we kind of also inadvertently understood why the rules of hooks apply... Like, why can't you have conditional use states, and so on. It was fun. That was like my best, most well-received presentation ever, and it was a complete fluke.

**Kevin Ball:** \[00:16:04.15\] That's awesome.

**Jerod Santo:** Did it get recorded?

**Tejas Kumar:** It did, yeah. It's on YouTube. It's called "Deconstructing React."

**Jerod Santo:** Okay, we'll link that one up. That sounds awesome.

**Kevin Ball:** That's why if you're a meetup organizer, you should always have a talk in your backpocket. You are the ultimate backfill. What if you hadn't been there?

**Tejas Kumar:** Yeah... And I wasn't even planning it. That's the cool thing, it was very spontaneous... And because I had really no material, I was involving the people who were there. I'm "Hey listen, why don't we all just like hack together and see what happens?" And people got really invested as well, like on-site. It was really a fun, fun time. And now - man, this YouTube video, whenever I feel bad about myself, I just go on YouTube and look at the comments. And people say the nicest things...

**Kevin Ball:** That's awesome.

**Tejas Kumar:** ...which is so weird, because if you go on Twitter -- like, internet people... Someone tweeted recently and said, "No one can ever hate you as much as they do on the internet." \[laughs\] Like, internet people usually on Twitter I find to be mean, just because there's no face or voice or humanity to connect to the person.

**Jerod Santo:** There's no repercussion.

**Tejas Kumar:** Right, and you can hide behind the anonymity. Or not the anonymity, but the lack of --

**Jerod Santo:** Pseudonimity.

**Tejas Kumar:** Yeah, exactly. But on YouTube, on this video - I think there's enough personality where people are actually nice. So anyway...

**Kevin Ball:** I love making talks interactive in that way... Though I've found that if you plan on it, so you prepare enough content that it's gonna be half of your talk, and you're like "I'm gonna bring them in, I'm gonna be interactive", sometimes you end up with a dead audience and you're sunk.

**Tejas Kumar:** Yup.

**Jerod Santo:** Then what do you do?

**Tejas Kumar:** And then you're like "Dang it, I put all my eggs in this one basket", you know?

**Jerod Santo:** Right.

**Kevin Ball:** Yeah. Yeah.

**Jerod Santo:** Then you ask them not to record it, and move on with your life. \[unintelligible 00:17:42.11\] post it on YouTube. \[laughter\]

**Break:** \[00:17:48.10\]

**Jerod Santo:** So we wanted to talk about this thing you wrote recently on your website, "The pillars of impact for web engineers." Interesting, it started off as "This is gonna be a text message", and then I guess you realized you had a lot to say about it, so you turned it into a nice, big, long blog post, and then I assume you just texted the link to the blog post. That's very much a Scott Hanselman move...

**Tejas Kumar:** Oh, really? I didn't know that.

**Jerod Santo:** Yeah, he will not email anybody answers... I'm speaking very generally; I'm sure he does it sometimes. But his stance is like "You only have so many keystrokes in your life, and so if you're going to write something, write it in a place that's public", of course, assuming that you're giving public advice, and then take that link and give it to the person and now you've shared it with much more -- it's about impact, right? You have a much bigger impact with your words, versus writing a personal email that only one person will ever read. So anyways, that's his stance; it seems like in this case, you followed that exact same thing, and here we are, now a lot more people are benefiting from your thoughts. So why don't you unpack this for us? These different pillars you come up with, of different ways you can have impact as an engineer.

**Tejas Kumar:** Yeah, sure. One of my best friends, a former coworker at Spotify, Iris, asked me about this; I don't remember why, but... It was at the time where I was thinking about the industry at large anyway... And I am really tired of working with really smart people.

**Kevin Ball:** Preach...

**Tejas Kumar:** Sometimes there's people who are like "I'm so smart", and who are like -- you know, there's an energy, there's a tech bro energy that is not conducive to good vibes. It's very much a - if I ask you a question, I already know you're just going to paste me a Google result link to some abstract results, that I could do myself. But you just want to show me how busy you are, or whatever. And I think we have missed the mark on what we consider smart historically, where we think smart is somebody who can write like a one-line MapReduce; whereas I think we've kind of missed prioritizing emotional intelligence as highly as we ought, personally.

\[00:22:07.01\] That's kind of some of the thinking that went in here, because in these pillars of impact, as I've written - there's four of them, because you know, like legs on a table; four pillars usually lead to something standing. Only one of them, the last one is technical impact... Because we're in a day and age, y'all, where I think pretty much anyone who has the resources and means can learn how to code. freeCodeCamp, Quincy Larson, like that stuff... I think there's like 3,000 hours of courses where you could just learn stuff.

So writing code and being able to google and stack-overflow internals of React or Elasticsearch or whatever it may be - I don't believe this is as valuable, for example, as recognizing when your teammate is either burnt out and then covering for them. Or recognizing when somebody really cares about documentation, and if you're in a position to do so, saying, "Hey, why don't you lead that? I would love to follow you here" and kind of let them take the lead and pioneer some stuff. Those things - we even call them soft skills, and I have a problem with this, because I feel like calling them --

**Jerod Santo:** Oh, you're talking Kball's language.

**Tejas Kumar:** I feel like calling them soft minimizes them, right? But really, these interpersonal relationship things -- like, Kball, you were talking about connection earlier; those, in my opinion, matter way more than the technical BS that we do, because anyone could do that these days. So that's kind of what led into this blog post.

**Kevin Ball:** I'm on a campaign to get them called human skills, rather than soft skills.

**Tejas Kumar:** Exactly. That's good. Yeah, why don't you tell me more? Jerod said I was speaking your language. I'm curious.

**Jerod Santo:** Start a petition.

**Kevin Ball:** I love this. One thing that immediately springs to mind, and something that I try to communicate to as many engineers as possible is your technical skills are important, and may be a distinguisher of success early in your career. But overwhelmingly, what I see that separates folks who kind of go always and get stuck, from those who are successful later in their career, is those human skills. It's communication, it's empathy, it's leadership, it's coaching, it's all of these different pieces that go into "How do I take this base of technical skills that I built up, and actually apply it in a way that makes my co-workers better, my company better, my product better?" Like, really understanding all of the things that go around it. Because at the end of the day, what we do with our technical skills is solve human problems. And to solve the right human problems, and to understand those problems well enough to solve them, you need those human skills.

**Tejas Kumar:** Yeah,

**Jerod Santo:** Let me hop on for a second, because I think there's a strong sales pitch for this for people that might kind of roll their eyes, or kind of say, "Here we go again, talking human skills..." When you talk about investing in yourself, like what you're going to get better at, what you're going to improve, as engineers we think about scalability, right? Like, how something scales horizontally, vertically etc. And our technical skills - they can't scale very far; in fact if you pick the wrong technology, you can invest in skills that will be dead in six months. Or maybe four years, or whatever. My jQuery skills today don't really mean much anymore, even though I still have them. Like, is nobody hiring jQuery today? I would love to... But the communication stuff specifically - and a lot of these things, but specifically things like communication, as you improve and you put effort into improving your communication, this is not just helping you in the world of your career and your business. This is your entire life. Like, this scales horizontally across all your relationships, all of your interactions with other people... There's real scale to investing in these human skills... And not necessarily instead of technical skills, but also, in addition to your technical skills. And they are, as -- I'm going to agree with you, Kball... They are the things that level you up beyond landing that job and staying in the industry as an employed person; like, getting to that next phase - it's almost always human stuff.

**Tejas Kumar:** \[00:26:06.16\] Yeah. It's interesting, because I'm a great example of this. Honestly, when I started my career, I was not very competent technically. Some would say today I'm not very competent technically. I mean, I throw promises, for goodness sake, you know what I'm saying?

**Jerod Santo:** You throw promises, man... Come on!

**Kevin Ball:** But you did reimplement React... In 45 minutes.

**Tejas Kumar:** That was a cheap clone. But yeah, I hear what you're saying. Thank you, by the way. No, but the only reason I've seen the success that I've seen, which I consider to be a significant amount given my background, is because I tend to be good interpersonally with people. I've put in the work to create a likable, amicable, friendly personality. And this, I believe, pays dividends. Conversely, I've seen a lot of people, especially in this industry, where supply and demand are so heavily in favor of me, of the individual. People don't last long in jobs. I especially think about my friend \[unintelligible 00:26:59.18\] who - like, he'll finish like a year somewhere, and then go get a new job. And this is not like an exception. This is common. In this industry I don't know people stay at jobs for --

**Jerod Santo:** No, that's common.

**Tejas Kumar:** Yeah. I don't know people who stay at jobs for more than two years. Because we have the options, right? Every time I hear someone leave a job, it's almost never about "Oh, the code was too hard." It was usually "Ah, the people didn't believe in me", or something like this. It's usually an interpersonal thing.

I also read a study where they kind of found that after earning a certain amount of money - I think it was like something of the order of $70,000 a year or something - people tend to think less of every extra dollar. And then suddenly, these interpersonal things, these human skills, as we're calling them, become way more of a factor in choosing where you work and why you work there.

**Jerod Santo:** Right.

**Tejas Kumar:** I think this is invaluable. And this blog post is an attempt at highlighting these things. And also speaking to some of the realities in the industry, man. I've had co-workers tell me they think I write shit code because I'm Indian.

**Jerod Santo:** What?

**Tejas Kumar:** Yeah. And I've had them even justify it, argue to my face, telling me "Well, it's just law of averages. There's so many call centers and consultants who don't have the time to be trained."

**Jerod Santo:** \[laughs\] Wow.

**Tejas Kumar:** Yeah, exactly. And so the blog post is kind of talking about -- now, whether we recognize it or not, statements like that, and conversations like that also have impact. It's just not very good impact, you know?

**Jerod Santo:** Right. The wrong kind.

**Tejas Kumar:** Right, exactly. So this post kind of talks about the wrong kind of impact, and the healthy kind of impact, ultimately, trying to help us move towards -- you know, as Kball was saying, connection, and community with other human beings is really the \*bleep\* Sorry, I know you're gonna bleep that, but it's -- I don't know how else to say it.

**Jerod Santo:** You're making me work, man. You're making me work.

**Kevin Ball:** I mean, at this point, that's how I decide where to work. There's these different things you can decide what do you want to work on, right? Is this a great company? Are they going to the moon? Salaries, cool projects, whatever. My number one thing I look for is, "Do I want to work with these people?"

**Tejas Kumar:** Exactly.

**Kevin Ball:** Everything else is secondary, or third, or what have you. Like, the number one question is, "Do I want to work with these people?" And conversely, I'm closing in on three years at my current company, and especially before the job market started going South, you're hearing all these people, they're shifting around, and you get this like "Am I missing out? What's going on?" I was like "Oh, I should talk to different people." I talked to some folks and I'm like "No, I want to keep working with these people. They're amazing." All that other stuff is shiny and exciting, but the people are the reason that it's fun to show up somewhere.

3:Exactly. And this goes so much deeper even, because... Like, I recently read a book, I'll talk about it in the shout-out section if we get to it... But essentially, the author highlights how what made us the apex predator at the top of the food chain, and human beings superior above animals and all this - it's not that we were the smartest necessarily, but that we were the most collaborative. Human connection, by and large, is the whole deal, man. So when we work together in a team where we feel at home, amazing things happen.

\[00:30:12.24\] So yeah, I think the interpersonal vibe - you could just summarize and call it a vibe, right? But like the interpersonal energy is so key. And honestly, where I work today - look, there's sometimes drama, and there's communication issues with the people and so on... But my immediate team, the dev rel team, these people - dude, I'd be comfortable going to war with them on my side, so to speak. They have my back. I know it. And even if there's times where I'm looking around and I'm like "Oh, my friend Hussein at Google wants to hire me there", and if the job market looks attractive, I'm like "But these people here... These are my people, man."

**Jerod Santo:** It says a lot for retention.

**Kevin Ball:** I'd love if we could then dig into some kind of actionable things for folks. A lot of this comes from the top, comes from team culture, comes from manager culture, things like that. But if you're on a team, you're an individual, how do you go about improving the vibe?

**Tejas Kumar:** Yeah, this is a great -- you won't believe how many conversations I have weekly with people at my work about this. For one thing, recently, I read this book, "I'm Telling You", I'll shout it out at the end... What I do to bring the vibe is, number one -- and I don't have a formula. This is conjecture, right? But number one, I realize that I cannot read minds. Human beings, 10 out of 10 times have no idea what the other person is thinking. It's just impossible. So sometimes, I'll get a pull request review full of nitpicks." Hey, can you use the word directory instead of folder in this readme?" and I'm like "Really, bro? You wanna go there?" But I don't know if this is malicious or not; it's probably not. I have no way of knowing. So I keep that at the forefront of my mind when I see things, just like "Hey, I don't know what this person -- I could even ask them." And that removes some of this initial kind of vitriol that is instinctive within us when we receive things we perceive as hostile.

So that's one thing I do... The other thing I do is I tend to value connection with humans. Again, I've read lots of research, from MIT and Harvard and Yale, and it turns out "No man is an island" is an extremely true maxim. We were not made to be alone. So what I'll do is I'll try to pursue "Hey, let's just hang out and have like a water cooler Zoom chat", things like this. But above and beyond that, I recognize the flipside of this, and I think this is probably the most important thing I'll say. And I'll stop after this, because I think that's enough... It's recognizing loneliness as this silent killer, murderous disease, that just kind of creeps up on us.

And I don't know what kind of society y'all were raised in... I was raised with this weird, pseudo-Indian, Middle Eastern vibe. That's where I grew up. And in India, you don't talk about that stuff. It's like "Oh, no, no, you can't admit you're lonely. That's weak. You're weak. What, are you weak? Are you a girl, or something?" This is what we grew up with. It's toxic; it's not really healthy, right? And when we don't acknowledge, "Hey, I'm feeling super-lonely and I need some connection", then we start playing with fire. Because in the literature - and this is consistent research across multiple bodies and years and researchers that show that when people feel lonely, two things happen. One, you trust other people less. And two, you just automatically assume ill intent. If you're really suffering from loneliness, and somebody brings you a cake, you're going to be like "Wait, is this poison? Why? What's your agenda here?" And conversely, if you're in community, the same events will elicit a different response; you'll be trusting, and if somebody comes and punches you, but you're full of community, you'll be like "Wait, you didn't mean that, right?" Like, you'd assume good intent.

Organically - and I've, in the past, had managers who tell me "Oh, just assume good intent." But telling someone to do that isn't enough. And from what I've seen, being in community makes assuming good intent more accessible. So that's kind of what I do, is now I have destigmatized in myself loneliness. I started to recognize, Hey, I feel super-lonely right now." Thankfully, I have a wife, so I go to her and I'm like "Listen, I'm super-lonely right now. Could you spend like five minutes with me so I get back to reality?" And she does this, and then I come back and read a pull request that once seemed hostile, and now I'm like "Oh man, this is fine." Either this is fine, or I have even like empathy for the person. I'm like "Oh, they must be having a hard day, or something." So that yeah, that's kind of what I'm doing to bring the vibe, and it seems to be working.

**Kevin Ball:** \[00:34:25.06\] I love some of the things you're talking about there, and I want to combine two of them. A practice I've been doing for a while, and encouraging my reports now that I'm a manager to do, which is - if you get a PR review or a ticket or something from someone that you don't have already a personal connection to, set up a 30-minute one-on-one that is purely about creating a social connection. Doing that just helped tremendously, so much in like getting the level of malicious intent feeling of like "Why are they doing this? Why are they asking this mean thing?", whatever.

It's even bigger across engineering, right? Set that up with the customer success rep who keeps filing tickets that you have to solve. Because the more they understand that you are a human being, and you understand that they're a human being, implicitly... Like, we know that in our heads, but you feel that, because you know "Hey, Brian's not filing this ticket to make me mad. He's filing this because he's got this thing, and I know he's cool, and we'd vibe over music and whatever." It just makes such a world of difference in all this world of interaction that's so text-based, to make that social connection, once you start having any of that coming through.

**Jerod Santo:** All good. The blog post "Pillars of impact for web engineers" - it's in your show notes. Obviously, we're not going to cover it word for word, so if you like what Tejas is saying, and you'd like to hear more, go give that one a read.

**Break:** \[00:35:46.03\]

**Jerod Santo:** Alright, guess what time it is. It's time for story of the week.

**Jingle:** \[00:39:57.08\]

**Tejas Kumar:** Wow, man... Jerod, that's an amazing singing voice you have.

**Jerod Santo:** I am an excellent musician, except for that's not me. So... I can't take credit. But I did commission it, so I guess I can take some credit. That's our good friend, Mat Ryer.

**Kevin Ball:** It was on the fly, right? He did that on the fly when you asked him.

**Tejas Kumar:** Yeah, he just did it, just now.

**Jerod Santo:** He did. Just now. Yeah, he actually -- I just keep them in the corner, over here, with his guitar, and I just throw change at him... You know, like "Sing, monkey, sing."

**Tejas Kumar:** \[laughs\]

**Jerod Santo:** No. It's our good friend, Mat Ryer from Go Time, and he's quite the musician. So this is story of the week. This is where we take turns sharing what we believe are the most important or biggest stories of the week, and then we debate who's actually got the best story... No, we don't really care about that. That's just the premise. We just share stories and talk about them.

So I will kick us off with what is I guess not something that's happened, but something that's talked about going to happen, which is that Deno has announced on their blog some big changes ahead. So this is future stuff for Deno. Interesting, anytime that you see a company announcing things that are going to happen, you think, "Are they reacting to something that's been going on? It seems like they feel like they have to say something." And I think they are reacting to some of the excitement and the buzz around Bun, the new JS runtime, which is blazing fast, and is very much a competitor to Deno and Node.js, the up and comer... Which got a bunch of people's ears perking up in the recent weeks because of the speed.

So Deno has a couple of announcements... Two big ones here that I'll focus in on; they actually announced a few more things that are going to happen. The first one is that they've been working on some updates that will allow Deno to easily import NPM packages, which will make the vast majority of NPM packages work in Deno within the next three months. So as I often say, no self-respecting software developer gives an ETA when they don't have to, but they've locked themselves into a 90-day cycle on this feature. They must be pretty close to having it finished.

**Kevin Ball:** \[00:42:12.21\] Maybe they listened to JS Party back when Deno was initially announced and we were ragging on them for not having package support.

**Jerod Santo:** And we were like "You've gotta support Npm." Yeah, totally. Although I think strategically, this is somewhat of an obvious need. Now, I guess the technical requirements to get them there were probably not straightforward, so that's why it's taken a while. But I think anytime you start something brand new, you want to have an ecosystem that exists, and you're ignoring the largest package ecosystem in the world; not the wisest move. So they're working on that.

And the second one is their goal is to make Deno the fastest JS runtime. This is why I said I think they're reacting very much to a lot of the excitement around Bun... And they said for starters, the next release of Deno will include a new HTTP server. It's the fastest JS web server ever built.

So I'm sure you two saw this announcement... A lot of people talking about Deno's big changes coming soon. Curious your hot takes, or maybe it's been a few days, maybe you have some warmed down takes... What do you think about this? What's going on?

**Tejas Kumar:** I think it's really nice that Deno's having some type of interop with Npm, because that's been a deterrent for me like going full-on on Deno so far. I wonder how this is going to be received. But it kind of reminds me of the author of Homebrew wanting to like recreate Homebrew, but using the blockchain... Have you heard of this? It's called Tea, and it's basically brew, but--

**Jerod Santo:** Yeah, Max Howell, the original creator of Homebrew. I did hear about this. I heard the initial announcement and I haven't heard anything since, but I'm sure they're working on it.

**Tejas Kumar:** Yeah. It just reminds me of that, because it's this like big step of -- it's a big change. I feel like this change to Deno is in a similar order. I'm excited to see how the community will grow and actually use it. I'm excited to use it myself.

**Jerod Santo:** Kball, does this make Deno suddenly -- I mean, assuming that they ship this at some point in the next 90 days... Does it make it much more of a feasible adoption story for you as a developer?

**Kevin Ball:** Potentially, yeah. I mean, it's a sign that maybe they're starting to listen to the developer community and think about what's going to make this usable, instead of a fun toy.

**Tejas Kumar:** Wow, controversial.

**Jerod Santo:** Okay. Very hot, very spicy take.

**Tejas Kumar:** There's some salt behind that, man...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** To be fair, right...? So when you want to run an early project, and you want to explore some new things, it's actually better to treat it as a toy, or treat it as something where you're not trying to meet everybody's needs, you're not trying to do all these things... Because that's what it lets you explore. But it also means that you have something that is not necessarily ready for production use in any way, right? Like, importing from a URL that you don't own has always struck me as like... It's not standardized, it's not -- nobody's gonna do that in production. Now you're gonna have to set up your own package management system to make sure that you have consistent versions, and other things.

Like, just all sorts of layers of this that just did not feel like they were aiming at trying to get this used by people who are not playing and hacking for fun... Which - fine. That may be the best way to approach it when you're trying to do something new and different, and I'm totally fine with that. But I did feel like there was maybe some attempts to sell it as something that was for people doing production projects before it was actually trying to listen to what those folks needed... And this looks like, okay, maybe they're listening. So... Great.

**Jerod Santo:** What's interesting is that that's the route that Go went, with just import a URL... And 10 years later - I mean, longer than that, but the GO community has been dealing with that, and the fallout of that, and like the... Now there's go mod, like this module system. They've been working around, like "Okay, but we do need actual package management" ever since.

**Kevin Ball:** Ever since. Right? And that came because it was from Google, right? Like, Google didn't care. Google, they were like

"We own all our stuff. We're gonna write all our own code anyway. We don't care." But Deno is coming from the outside.

**Jerod Santo:** \[00:45:57.01\] Right, that's what I'm saying. It seems like they would have learned -- and even Go has had serious ramifications from that decision amongst the community, and it seems like Deno starting maybe eight years into Go's lifespan would have looked over and said, "I like the purity of -- well, just another Universal Resource Locator; just give us that and we can resolve and download." It's very webby, but it's actually lacking in many significant ways.

What about the runtime speed stuff? I mean, even in their expansion, they say "There's been a lot of chatter recently about runtime speed." I mean, they seem like they're pretty intimidated here by what Bun is up to.

**Tejas Kumar:** Yeah, Bun and the workers runtime. I don't know how Deno Deploy works, how well it works rather with serverless functions. That's another thing I want to try and play with. Because it's a beefier runtime, so I'd expect it to not be -- I'd love to just see numbers about how that looks anyway.

**Jerod Santo:** How fast to boot, and stuff. Yeah.

**Kevin Ball:** Yeah, I think there are probably a subset of people for which that's important... I've found that anytime I'm running server-side code, the limiting factor is almost never the code itself, and it's network access and database access... So I don't have any use cases where the speed of that thing is going to make that big of a difference.

**Jerod Santo:** I think in the somewhat distant, or maybe near future, like where everyone's building with these serverless platforms, and the edge processing - that boot time, that speed of just like from the point that you invoke this remote function to the point that it's finished, has become very important for the Lambdas of the world, for the Vercels, for the Netlify Function, the CloudFlares etc. In your dev box, in your local machine, \[unintelligible 00:47:34.27\] long-running server process - like, who cares, right? Node's plenty fast for that kind of stuff, as long as you're not blocking or something.

**Kevin Ball:** So there's an interesting separation there between execution time and boot time. We had a conversation -- was it with CloudFlare, or someone like that, on a previous episode... I can look it up. Where they were basically compiling the entire Node runtime to WebAssembly, because then they didn't have to boot the Node process for the serverless thing. And so if they're -- and I haven't dug deep into what Deno's promising or what Bun is doing, but if they are dramatically improving the boot time for running it, as compared to the sort of execution time once the thread is booted - that could have a serious impact on serverless environments.

**Jerod Santo:** Alright, so that's Deno's big changes. A lot of talk; they still have to deliver. Hopefully, they are. This is definitely a good direction, especially with the Npm stuff, for them to get people using it actually out there in the real world. I'd love to see the competition, too. Like, the fact that Bun comes out makes these benchmarks blow everybody's mind, and it's like -- now the Deno team is like "Hey, we've got to get faster." That - everybody wins. So that's super-cool. Alright, let's move on... Kball, what is your story the week?

**Kevin Ball:** Yeah, so I saw that Chrome, in their next mainline release, is going to have container queries.

**Tejas Kumar:** Whoooh!

**Kevin Ball:** Yes. They've been shipping it behind a flag for a while, people testing it, doing different things... In case folks are not familiar with container careers, this has been like a top-requested CSS feature for as long as I've been in web development, which - that's a long-ass time.

**Tejas Kumar:** I need to tell you all, this is really exciting, especially for me, because the first conference I ever spoke at was JSConf EU in 2018, four years ago, and there was a talk about container queries at this conference, where effectively the talk was, "Here's why they can't be done." So four years later - ah, they're shipping in Chrome. This is a huge deal. It's really awesome to see.

**Jerod Santo:** So that's coming up in version 1.05. What's Chrome at now? Is it like right around the corner, or is this out there on the beta channel? What's the status?

**Kevin Ball:** I just upgraded to 1.04, I think, so this is next.

**Tejas Kumar:** Yeah.

**Jerod Santo:** Okay. So right around the corner. Less than two weeks away, right? Or not -- is a two-week cycle or a six-week cycle? I can never remember. And neither can you. None of us work on the Chrome team. I don't know; just hit your update function and see if it's there. 1.05...

**Kevin Ball:** \[00:50:09.04\] I think it's six weeks.

**Jerod Santo:** Just reboot your own Chrome. Six weeks sounds like it makes more sense.

**Tejas Kumar:** I'm curious to look into this article and see the syntax one would have to write in CSS to query a container. That sounds interesting. But it definitely unlocks a whole world of new things you can do. I'm excited.

**Jerod Santo:** Absolutely. Alright, real quick, a real quick look... So that's Chrome. CanIuse.com container queries...

**Kevin Ball:** Under development.

**Jerod Santo:** Safari 16 technology preview, it's supported. Chrome 1.05, partial support. 1.06 it says it's totally green. So Safari, which includes iOS, and Chrome, are green. And Firefox is still bloody red... So it's not going to have 100% coverage anytime soon, but I'm wondering if and when Firefox is going to jump on this bandwagon. Hopefully soon, hopefully soon. Alright, Tejas, what about yourself? What's your story the week?

**Tejas Kumar:** My story of the week is something that I'm really excited about... It's from Juri Strumpflohner, who works on the Narwhal team. They make this awesome tool for mono repos.

**Jerod Santo:** Yeah, we just had Juri on the podcast a couple of weeks back.

**Tejas Kumar:** Juri is the best, and so is Nx. Honestly, they could do a masterclass in developer experience, in my opinion. Their tool for monorepos is just -- it's pristine. Anyway, he wrote a blog post today about how Nx is helping the environment by saving two centuries of compute time. So it's a fascinating read about caching. And I'm not going to like tell you about it, because there's a link, you can read it yourself... But what I will tell you, and I think what's more interesting for the podcast, is why I chose to share this and why I think it's such a huge deal... And that's because the planet's dying, and we make it worse with the work we do... Especially installing all those Node modules, you people... I'm joking.

**Jerod Santo:** Use Deno, man. There's no Node modules, you know?

**Tejas Kumar:** See, that should be their pitch.

**Jerod Santo:** \[laughs\] Save the planet.

**Tejas Kumar:** Yeah. Use Deno, save the world. No, but this talks about the reduced carbon footprint of Nx Cloud based on their reduced computation through caching. So they in the last seven days have saved about 400 kilograms of carbon dioxide emissions. 400 kilograms - that's almost half a ton. In a week. It's a fascinating read about how they're doing this. And what I really like about this is it draws attention to responsible computing. Going back to human skills, I think being conscious of our environmental impact is another human skill that's quite important. And that's another pillar of impact, if you will, going back to the blog post. We do have an environmental impact at this point that we have to acknowledge. You know why? Because it's the peak of summer here in Germany, some 100 degrees Fahrenheit, and it just like literally started flooding and bucketing outside, thunderstorms out of literally nowhere. And I'm not used to extreme weather like this, y'all. All of this kind of inspired me sharing this big story of the week.

**Kevin Ball:** Yeah, we touched a little bit on this in our podcast with Juri, which was I think just three or four weeks ago... But it looks like the article goes much deeper on what they're doing there, which is great.

**Tejas Kumar:** Yeah, I recommend it.

**Jerod Santo:** Very cool stuff, with big implications. Well, we're running short on time, but when I get to shout-outs, because you've teased it a couple of times, and we have to deliver this book recommendation which you're in love with, Tejas. Explain the book, why you love it, where people can find it.

**Tejas Kumar:** Sure.

**Jerod Santo:** Kball already bought it during the break, so this is a good sales pitch. Actually, you just told Kball that it's great, and Kball just bought it...

**Tejas Kumar:** Yeah.

**Jerod Santo:** So help every else be convinced.

**Tejas Kumar:** \[00:53:44.25\] So I first of all need to say I have no vested interest in this book. I'm not gonna get money or anything if you buy it. I'm not an affiliate, or whatever, but I genuinely believe in it. It has helped every relationship I have, and all of the strained ones that I have had - many of us have difficult relationships - have recovered gracefully. It's really -- I've seen the results. This book is called "Plays well with others" by Eric Barker. And I love the concept even, because how it works is the book explores maxims that we hear growing up. Maxims like "Just be yourself" and maxims is like "When in Rome, do as the Romans do." And then you ask yourself, "Okay, but which one? Both of these conflict? Do I be myself, or do I do as the Romans do?" And what Eric does is he takes these sayings and examines them through the lens of science, citing research from leading research bodies. And the cool thing about this book is I read it on my iPhone, so the screen size is a bit small, but on my device, the last 200 pages were all footnotes and citations. And you can go read the research for yourself. It's fascinating stuff.

So the book looks at questions like "Can you judge a book by its cover?" meaning can you read people's intentions or not? Is no man an island? Do opposites actually attract? And it's got amazing takeaways for interpersonal relationships, work relationships, marriages... Every relationship you can think of. So yeah, huge shout-out from me, and I would recommend it to literally everyone.

**Jerod Santo:** Very cool. Well, the link's in the show notes. Kball, I know you had some shout-outs written down. We have a minute or two; if you want to make it quick, we'll do some more shout-outs before the show's over.

**Kevin Ball:** Yeah, I just have one I was going to shout out, which is leaddev.com. It's one of the few places I've seen that is actually publishing good technical and non-technical content for engineers who are way beyond just working on technical details. So this human skills concept that we've been talking about, architectural concepts, all sorts of different things. So they focus on both kind of staff plus engineers, so folks who are really advanced in their careers, but still as individual contributors, and then they also have a bunch of stuff for engineering managers and leaders.

I have been loving their content, I've started trying to write for them, I love their -- they've got panels, they've got conferences, they've got all sorts of stuff... So I just love seeing more attention on those later stages of a career that often had been neglected, and there's not much good material out there for it.

**Jerod Santo:** Very cool. And I see you have been doing some of your own writing on the side as well, isn't that right, Kball? Do you want to shout out any of your -- what are some of your pieces you've written?

**Tejas Kumar:** Well, I've published two pieces with them so far. They're both focused on that sort of bridge between technology and human skill. So one is focused on the idea of quality ratchets, so how do you institute it -- once you get to be working on problems that are too big to solve in one go, how do you start introducing ratchets into that, so that you can improve the quality, and then it doesn't backslide while you have to focus on something else? So how do you introduce both technical ratchets, human ratchets, other types of things in place to kind of keep quality moving in the right direction.

The other one is on a refactoring technique called "Creating application seams", and this idea of creating seams in your application that give you the ability to kind of chunk changes in a way that's not impactful to the rest of code. This is an especially useful technique when you work with a lot of legacy code, where legacy code is anything six months and older, is one of my favorite definitions... Or anything untested, or anything where stuff has gotten a little out of hand and things are kind of spaghettied together, or you've got your data model tangled up with your usage, or all sorts of different problems - how do you kind of tease that apart and create something that is actually easy to work with?

So those are both fun... I'm pitching them some more articles. Like I said, I loved what they're doing here, and this is a domain that I think there's really interesting ideas to talk about, like how do we make engineering as a discipline better, beyond writing better code?

**Jerod Santo:** Very cool. Alright, we're getting to the end of the show. Tejas, thanks so much for joining us. Any final words from you before we call it a day?

**Tejas Kumar:** This has been great. I've enjoyed vibing with y'all thoroughly. You're nice people. I would do this again sometime.

**Kevin Ball:** Let's do it.

**Jerod Santo:** We appreciate it. We enjoyed having you on as well. If you like Tejas, you like what he's up to, maybe go see his talk at React Brussels. If you're in the area of Brussels October 14, try to go IRL. If you're not, they are going to be hybrid, so it'll be online as well. Maybe check out his YouTube, if you want to check out that talk he was referring to earlier, where he deconstructs react. Of course, all the links to all the things are in your show notes. We've got the Pillars of Impact blog post, we've got all the news we discussed, we have a link to that book. and LeadDev -- Kball, hook me up with your pieces; we'll link to your pieces as well... And so you can follow up and follow the trail of the interesting stuff discussed here.

Well, that's all for today. Oh, and don't forget, if you do want to go to React Brussels, save yourself 30%. Get that JS Party time coupon code, and follow @jspartyFM on Twitter for details about the giving away of one IRL ticket and five online tickets. So don't miss out on that opportunity. Why not, right? Why not? That's what I say.

So that's all for now. Thanks for listening. I'm Jerod, that's Kball, Tejas was our special guest today... And we'll talk to you all next time!
