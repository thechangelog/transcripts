**Jerod Santo:** So Jessica, we have you back... Welcome. Back to the Changelog. We're happy to have you.

**Jessica Kerr:** I'm happy to be here again.

**Adam Stacoviak:** Yes...!

**Jerod Santo:** We had a lot of fun the last time you were on. In fact, I thought it was just last summer, but then I went back and looked, and lo and behold, it was like two years ago.

**Adam Stacoviak:** Too long ago. Too long.

**Jessica Kerr:** Well, it was still in the pandemic, so it's all one big soup, right?

**Adam Stacoviak:** It is.

**Jerod Santo:** Yes, it was early days of the pandemic.

**Adam Stacoviak:** Yes.

**Jerod Santo:** May of 2020.

**Jessica Kerr:** Back when we still had hope.

**Jerod Santo:** \[04:06\] And you had just set up a Rails 6 application with Avdi, and you had just installed Honeycomb on it, and you were like, "This is cool! Honeycomb!"

**Jessica Kerr:** Oh, that's right. Yeah.

**Jerod Santo:** I thought that's interesting, because you're there now.

**Jessica Kerr:** Right, right, right. Because the first thing, I was like, "How will we know people are using this?" And yeah, now I work at Honeycomb, which is fantastic.

**Jerod Santo:** How did that come to pass?

**Jessica Kerr:** Well, Charity Majors is the CTO, @mipsytipsy on Twitter. She called me and was like "Hey, we're looking for a very senior DevRel who can speak to developers." Because they have Liz Fong-Jones. I get to work with Liz Fong-Jones...

**Jerod Santo:** Nice.

**Jessica Kerr:** ...who was like the original SRE. And I get to come at observability from more of the developer side... Which is awesome, because I am very excited about it. As developers, I want people to get satisfaction from people actually using the code they write, as opposed to check the boxes, close the ticket. And observability gives us a way to find out whether the code we wrote weeks or months ago - or yesterday, if we're really quick with deploys - is being useful.

**Jerod Santo:** I think we've all been on those projects where you code, code, code, maybe you do something else, then you code some more... And maybe a month, or three months, or six months goes along, and then it gets canceled, or never shipped... Right?

**Jessica Kerr:** \[laughs\] Yeah.

**Jerod Santo:** Isn't that the worst? I mean, sure, you get paid, and you worked hard, so there's that feeling... But then you're like, "No one's using my code. It's never gonna benefit anybody. It doesn't feel quite so good."

**Jessica Kerr:** Right. I don't like working on greenfield projects for that reason. I don't wanna work on anything that's not in production... Which is why back in May of 2020, when Avdi and I were like "Let's make a Rails app", step one is get it online. Get it up at a domain.

**Jerod Santo:** Even if it doesn't do anything yet.

**Jessica Kerr:** Right. It doesn't do anything. It still doesn't do anything. But that's fine, it's a toy app.

**Jerod Santo:** \[laughs\] Right.

**Jessica Kerr:** Step two is find out whether anybody is hitting it. When people start to hit this, how will I know? I have to be able to answer that question before I make it do anything... So hence introducing Honeycomb really early, and then we can see whether people hit the site.

I love that if I go to the site, I can see that. And if I interact with it, I can see that in Honeycomb, in this case. And I just feel like I've made something real in the world.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** What's interesting about Honeycomb is how it can let you dig. You can see the traffic, so to speak, but then you can also dig into the details. We've done that on a recent episode of Ship It, Kaizen.

**Jessica Kerr:** Oh, nice.

**Jerod Santo:** We do a Kaizen episode every ten episodes; we talk about ourselves, basically, and how we're using certain tooling, and how we're building our infrastructure... And Honeycomb is a piece of our infrastructure.

**Jessica Kerr:** Nice.

**Jerod Santo:** And in particular, we have been hunting down this "Are we holding the CDN wrong?" essentially. Even with our S3 bucket, and caching, and we're constantly digging into the details of that, and the unknown unknowns we could dig into, as well as just simply website traffic. It's such a powerful tool.

**Jessica Kerr:** Yaay! I agree!

**Jerod Santo:** \[laughs\] Yeah, it is pretty cool. And actually, what you're saying there very much resonates with what Gerhard Lazu - who's the host of Ship It, and our SRE on Changelog.com - says all the time, which is like "Ship it as soon as possible. Get it out there, and then you'll see if it really works, or how it changes the world." Up until then, you're just guessing, right?

**Jessica Kerr:** You are just guessing. \[unintelligible 00:07:31.10\] is like your own little bubble. And our job as developers - I don't wanna think of it as writing software; I think of it as changing software. Because that extends forever into the future. So step one, get it out there, step two, change it. Step three through infinity - change it.

**Adam Stacoviak:** Mm-hm.

**Jerod Santo:** That's awesome. That's exactly why Gerhard had a little bit of a trouble with the name Ship It as the show's name, because he says "Once you ship it, that's the start. That's not the end goal", whereas a lot of us treat that as the end goal. Like, "I've written this thing, now I need to deploy it or ship it, and that's the last thing I do." He's like, "No, no, no. That's one of the first things you do", which is exactly what you did with that Rails 6 app.

**Jessica Kerr:** \[08:12\] Right. And I do it with a lot of things. I've got a little Intro to Observability course mostly up on graceful.dev now, which is Avdi's site for episodes and courses now; formerly RubyTapas. And the first thing I did was make a course and put a little bit of text in there. And it's public; I don't know who's gonna look at it... I mean, right now it's actually useful, but... To start with, it's a place. And then I start adding to it and adding to it.

**Jerod Santo:** Is there like a minimum viable concept in there, or is it just literally like "I have a fresh skeleton of an app. I'm gonna put it out there and then start building it in public"? Or is it worth building like feature one, and then going? It sounds like you literally go as soon as possible.

**Jessica Kerr:** I literally go as soon as possible. Now, I'm not gonna advertise it until I have something I actually want people to do there.

**Jerod Santo:** Right.

**Jessica Kerr:** If you think about it -- I mean, the web is a big place, and if you have a site up at a domain... What did we put ours at? \[unintelligible 00:09:13.21\] something like that. That doesn't bring anybody there. It's not like opening a storefront on a street where people are walking around.

**Jerod Santo:** Yeah.

**Jessica Kerr:** I mean, hypothetically, Google could --

**Jerod Santo:** Crawl it, yeah.

**Jessica Kerr:** ...put it in their index, and somebody could find it, but they'd probably have to be pretty darn specific... Because your Google ranking depends on how many people link there, and nobody links there. There's degrees of public; it's technically out there and somebody could find it if they tried, versus it's being advertised.

Honeycomb, in DevRel, I'm in the marketing department, which -- I mean, DevRel is... Who knows where to put it; nobody does. But what I like about that is I get to see the process of the marketing people drawing lines between stuff the engineers make, either code or posts that we write, or content that we make. The marketing people are out there, drawing lines between people who might need to see it.

We've got SDRs, sales development reps out there, emailing people who've shown interest in Honeycomb, being like, "Hey, this resource might be interesting to you." And we've got Google ads, and we've got LinkedIn ads, and social media... And all this stuff just draws the line between people who might actually use it and the stuff you've made. And I don't think most developers appreciate that if you put something out there, you might as well not have, approximately, other than that you can go test it and feel good about it... \[laughs\]

**Jerod Santo:** Right...

**Jessica Kerr:** ...until we draw those lines.

**Jerod Santo:** I think a lot of us do appreciate that with some of our blogs at least. I put it out there and no one's reading it. I think that we have some experience with that. But you're absolutely right, that inclination of like if it's public, it will be exposed, and everyone's gonna come rushing and judging.

Mikeal Rogers had a similar sentiment. He codes in public, a lot of open source stuff... And it's open source from day one, commit one. And he's just out there, toiling, in the public, and I was like, "Mikeal, this thing that I'm looking at is nowhere near ready or finished." He's like, "Yeah, I know." I'm like, "Why don't you just write the thing, and then keep it private, and then open it?" He's like, "No one's watching." It's just public. I'm like, "Dude, I'm watching." He's like, "Well, you're the one." \[laughs\]

**Adam Stacoviak:** You're the one, yeah.

**Jessica Kerr:** Well, that's your problem.

**Jerod Santo:** "Maybe there's like ten people watching, but they understand me. They know what I'm doing. You know me, you know what I'm doing here." And I was like, "That's interesting", because a lot of us like to hold our cards close to the chest and then make a big proclamation. You've still gotta make the proclamation at a certain point, right?

**Jessica Kerr:** Right, right. Making the proclamation is a separate thing from making it public.

**Jerod Santo:** Right.

**Adam Stacoviak:** And you can even launch again too, in the marketing sense, like with products.

**Jessica Kerr:** Oh, yeah.

**Adam Stacoviak:** You can launch once...

**Jerod Santo:** Sure.

**Adam Stacoviak:** And you can launch again.

**Jessica Kerr:** And launch is not deploy. Launch is that advertising blitz. It's emailing your mailing list and announcing it. It's a press release sometimes. So launch is like -- I mean, it needs to come after a deploy... \[laughter\]

**Jerod Santo:** \[12:19\] Right.

**Adam Stacoviak:** Hopefully...

**Jessica Kerr:** But engineering doesn't launch features. Marketing launches features.

**Jerod Santo:** Right. That's how you get vaporware though, is the launch comes before any sort of deploy, and there never is a deploy.

**Adam Stacoviak:** When you get your system out there initially though... So let's say if you wanna use this Rails 6 app as the example, as the consensus that you wanna use that as the example - when you get it out there initially, what are some of the early things you begin to learn about the system you're putting out there? What's the point of getting it out there early? What are some of the things that you're grokking from it being in production? Is it the server, is it how the server responds to the code you're deploying? Is it the literal state of production and how it operates? Because at that point, it's not CPU load, and it's not traffic, because there is none. What are you learning at that point?

**Jessica Kerr:** Well, one thing is "Can I deploy it?" And that's kind of a big thing. It gets you in the mindset early of "If I can't get this into production, then I haven't done it." Of "How will I do this? How will I migrate this?" At that stage, the answer to "How will I migrate this?" can be "I will take the app down, wipe out the database, and it'll just be down for a few minutes."

**Jerod Santo:** Right.

**Jessica Kerr:** But it gets you thinking about that transition of "Every change that I make is not just about the end state, it's always how do we get from here to there." And then the more customers you have, the more painful that is... Because eventually, if you have a real site - not like our toy - if you have a real product, people are gonna notice if you take it down for a few minutes, and they're sure as heck gonna notice if you wipe out the database. So you have to think about migrations, you have to think about transitions... And that's what serious production development is about, in the sense that usually, that part is harder than just making it work.

**Adam Stacoviak:** To your point of changing the software - I just thought about this as you were saying that... Each deploy to a production application is simply changing code. You've written the code locally; this ideal of like you're not writing code necessarily, you're changing code. I think that deploy practice is an artifact of that; when you put new code out there to your application, you're just simply changing it. You're taking written code and you're changing the application. So it just reinforces this idea of like you're just simply changing code, changing existing code out there, evolving it.

**Jessica Kerr:** Yeah. And when you get used to that, then it helps you think of your work less as this high, modernist "I must take this perfect vision in my head and make it real in the world, and I must boss all the developers around to make sure my architecture vision is perfectly implemented", which is not possible. The developers have to make decisions. And more into "Okay, how do I take the world as it is and nudge it toward what I want it to be?" And then you start feeling really antsy when you've had a branch open too long...

**Jerod Santo:** Right...

**Jessica Kerr:** ...for some people that's a week, for some people that's an hour. But when you get used to working really close to production, in the sense of you feel that the loop is incomplete until you've seen it in production and seen that effect or traces in Honeycomb - I don't know, it's a different way of conceiving our role in the world as less of someone who implements our vision and more of someone who works within an environment to change both of us.

**Jerod Santo:** \[15:51\] How far do you take that with regards to source code? I'm starting to think about Fossil. We just did a show about git reset and how to manage your git local changes, and present them to your team for a pull request... And then we have Fossil, which is an SCM written by Richard Hipp from SQLite, and it kind of works different than git, insofar as like you make a commit - it's shared to your whole team who's on that project. It's Amelia out there... The whole like presenting even your code to your teammates isn't really a thing. He's just like "No. Every change, everything you do, mistakes and all, whatever it is - it should be shared immediately and always." And there's some people that really love that model; I'm not sure if you've tried writing code that way... I've never done it. I've used git pretty much only, and I very much shy away from that... I feel like it's like getting dressed in the morning; at a certain point, I wanna prepare before I enter the world... But I do see there's value; one of the values is your code is immediately shared. You never have that whole "In case of fire, git push and then run out of the building." It's already --

**Jessica Kerr:** And you never have merge conflicts.

**Jerod Santo:** Yeah, exactly. So there's tactical benefits. But conceptually, what do you think about that? Every line of code, every keystroke - just go public with it.

**Jessica Kerr:** So it's like live-coding together. If you share a workspace in VS Code... I was doing that the other day, sharing a workspace in VS Code, and "Oops! We both changed that file." \[laughter\] "Oh yeah, sorry I broke you there..."

**Jerod Santo:** Right.

**Jessica Kerr:** "Your main doesn't work because I created another main in the same directory. Let me move that out of your way."

**Jerod Santo:** How rare is that though? Is that pretty rare?

**Jessica Kerr:** Yeah, it's not something that I've (even that was a toy project) done on a large team, and I can see it being a problem on a team with a lot of workflows. On the other hand, if you're ensemble working - well, that just goes away, because everybody's sharing one typist.

**Jerod Santo:** Right.

**Jessica Kerr:** I like the part where it just makes any conflicts really tiny, because you find out about them right away. On the other hand, sometimes you need privacy, and I love branches for that in particular. I love to branch explicitly, like "I'm just gonna try something, and no one else is gonna see it. It's gonna be on my computer, because you don't want this garbage."

**Jerod Santo:** Yeah, exactly. \[laughs\] Right. I do that quite often, so that's why I'm shying away from it conceptually...

**Jessica Kerr:** Well, we can have both.

**Jerod Santo:** Yeah, exactly. I'm not saying you have to choose one \[unintelligible 00:18:13.17\] I'm just curious if you've tried the other direction.

**Jessica Kerr:** Yeah, because if you want a change to stick, you've gotta get it integrated. And I do find excruciating the pull request process.

**Jerod Santo:** Hm. How so?

**Jessica Kerr:** Next week I start a rotation on the Honeycomb product engineering team, and I'm like, "What can I do to prep?" And there's, of course, like, install stuff on your laptop, and then there's this "Read this document about the pull request." I hate pull requests so much... I hate them.

**Jerod Santo:** \[laughs\] Just because of the ceremony, or what do you hate specifically?

**Jessica Kerr:** The context switching. The part where "Okay, I've got this as far as I can. Now I have to wait for someone else to look at it. And then I'm gonna have to come back to it." Somebody pinged me the other day about a pull request that I made to our infrastructure repository months ago. They're like, "Did you forget about this?" I'm like, "Yeah, I forgot about this. Because WHY THE F SHOULD I REMEMBER?"

**Jerod Santo:** \[laughs\]

**Jessica Kerr:** I mean, it was just like giving myself permissions to something, so I merged it months later... And it doesn't matter; it was very specific. But the more common case with the pull request that's been open for months if "Well, delete that!" \[laughs\]

**Jerod Santo:** Yeah.

**Jessica Kerr:** So in a lot of senses, what I hate about the pull request process is just a real, unavoidable coordination cost of working with the team, of getting a change into the code. I'm not just changing code here. We already talked about we're also changing running software that's gonna impact users. But the thing is, I'm also changing a shared piece of knowledge that belongs to the whole team.

\[20:02\] And so part of that transition process is not just how is this gonna transition for users, how are they going to have a smooth experience and how are they gonna find out about it, which involves marketing etc. it's also a transition for the rest of the team... Because this codebase that we're mentally integrated with, we have a hopefully overlapping mental model of how this code works, and that's how we're able to work in it, and that is affected by every change that I make.

One of the things we're trying to do with pull requests is I have to see what this code is gonna do, but also, other people need to see what this code is gonna do, and they need to know why it works the way it does, so that they can make the good decisions later, so that it continues to do that etc.

**Jerod Santo:** It's almost like your own little marketing channel for your changes to your team. This is me announcing what I'm doing...

**Jessica Kerr:** Yeah...

**Jerod Santo:** Because I could just push this code up and it would be in there. I know I do that on our project a lot, and Adam's like "Hey, this doesn't work like it used to." \[unintelligible 00:21:05.26\] I'm like, "Yeah, I changed it." He's like, "Oh." I'm like, "Here's your announcement. It's different now." But that's cool; we don't do marketing very well with each other. But a pull request -- and maybe that's why we hate it, because it's like ceremony, and formalization... It's all the stuff that is hard for us to do, and we just wanna keep making progress. It almost feels like an impediment... Impedance? I don't know the word.

**Jessica Kerr:** Mm-hm. Compared to working alone, it is.

**Jerod Santo:** Yeah.

**Jessica Kerr:** But it's what lets us work together smoothly. Because otherwise - yeah, Adam trips over your thing, and he's thrown off... Or he breaks it completely, because he's expecting it to work like it used to. The alternative to this work of coordination, this coordination of joint activity is what it is - is stumbling, and tripping, and unexpected problems.

**Adam Stacoviak:** So how do you then -- are you trying to fix the pull requests? Is it that you don't like the time sink involved necessarily, or just the slowdown for you...?

**Jessica Kerr:** If I had my druthers, we would do ensemble working, and we would all work at the same time, and there would be no conflicts, and no merge requests, and no broadcast... Because we're all right there. Not all-all; you know, there's a rotation of -- not everybody's there every day, but when you have enough overlap in your work, those little bumps stay little.

So I'd much prefer pairing, and better than pairing is ensemble working. Let's just -- everyone who works on this piece of the codebase works together on it. But you've gotta keep that kind of small. It's all trade-offs... Most people prefer to be able to make progress by themselves. And even I like some time of "Let me just futz around with this for a while and learn something."

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** That's the only way I know to avoid it.

**Adam Stacoviak:** It seems like some of the things you prefer might be a rigid system, in terms of -- everybody together means like "Well, if my kid has to get picked up, then it's kind of challenging to be there when you need me to be there" kind of thing. Is that what you mean? The togetherness is good, but it seems rigid, whereas if I can't show up when you can show up, Jessica, then you're not showing up the same way you could that day, or that few hours, for example.

**Jessica Kerr:** So in ensembler working the ideal is the whole team works together, and say a team is five people. Occasionally, other people float in, too. Like designers, or product people who contribute. But say there's a core team of five, with different expertise, that maintain the same piece of code. A typical ensemble is gonna be four. It's just whoever's there that day for the six hours or whatever that you try to overlap... And some days it'll be three; and some days it'll be seven, because you have guests.

\[23:49\] The point is that when somebody goes to the bathroom, the group attention continues. There's like this focus that's more resilient than an individual focus, because you don't need everybody there, every single minute. You need each person there most of the time. And then the direct working together is the best way we know to share expertise and have that flow between people, when they can immediately say "Wait, that code looks weird to me." "Oh yeah, we changed that an hour ago."

The limitation of our work on software is not clock time, it's not how much we can type; it's knowledge. It's how much we can know. It's all the different contexts that need to go into the decisions of how are the people using this now, what is it supposed to do, how has this changed in the past, why does this code look like \[unintelligible 00:24:45.01\] There's just so much knowledge...

**Jerod Santo:** Yeah.

**Jessica Kerr:** How does this interact with the other systems that it interfaces with? What do they even do? How does Fossil work? How does our deployment pipeline work? Is this gonna break the documentation? Oh my gosh, there's so much to consider. And we try to accommodate all of those considerations by putting sections in our pull request template...! And honestly, I don't wanna have to be the only person thinking about all this stuff and getting it all together... I really like working in a team.

**Jerod Santo:** I've never done this. So I've done pairing, but I've never done more than two. I certainly understand the advantage of having different brains on the same problem with slightly different perspectives and expertise, like "Well, I know exactly how Fossil works, so I'll help you out there." You don't have to go ask George, or whatever, like "Hey, why...?"

**Jessica Kerr:** Yeah, yeah.

**Jerod Santo:** That whole deal would be great. Do you find, if you're not the typist - maybe there's four people in an ensemble. Do you find it harder as just a person who's there to think and to talk and to collaborate, maintaining focus, or not being distracted? Because there's very little movement that you're doing. It just seems like it's easy to check out in a larger group.

**Jessica Kerr:** Yeah, of course it's easier in person, because we do this shared attention thing really well in person.

**Jerod Santo:** Right.

**Jessica Kerr:** One thing I find is that pair programming tires me out faster than programming by myself, because I maintain focus better. Because there's someone else to maintain my focus. And I'm not like "Ahh, Twitter...!"

**Jerod Santo:** But when there's four of you, you can still be like "Twitter...!", and somebody else is talking.

**Jessica Kerr:** Yeah, yeah. But actually, one, I'm less likely to check Twitter because someone else is talking, than I am individually. But I'm much more likely to check Twitter, or more constructively go look up the thing that we were talking about and find the API docs for it.

**Jerod Santo:** Right.

**Jessica Kerr:** It's okay for one of the four people to have their attention wandering at any given time.

**Jerod Santo:** Sure, because they're getting picked up by the other people.

**Jessica Kerr:** Yeah, yeah. And it's much easier to bring your attention back into a conversation than it is the other person typing, or talking, or whatever. So I actually find it much more natural to focus together. I find it requires less intense focus, and it's just much easier to bring my focus back.

**Adam Stacoviak:** Is this actually a thing though? You're saying ensemble programming, working together... Is this a real thing? What is this?

**Jessica Kerr:** Right, right. So this is the practice formally known as mob programming. Woody Zuill came up with the term "mob programming" for this several years ago, and it gained a lot of popularity under that. But there's also a lot of people going "Ugh, mobs..." Here especially in Europe, there's nothing positive about the word "mob". So Emily Bache came up with the phrase "ensemble working", because ensemble is just nicer; it's still a group of people coordinating together... And it's more than programming. I mean, a lot of it is programming, but we do other things. We write documentations, we fill out timesheets, whatever it is we need to do together.

**Adam Stacoviak:** \[27:58\] Is it like, in simple terms -- let me see if I can just grok this without even knowing the defection of it... Is it just simply coordinating working as like say four or more at a particular time, for a certain sustained period, on a problem set?

**Jessica Kerr:** Oh, yeah.

**Adam Stacoviak:** Is that what it is, just coordinating times of --

**Jessica Kerr:** Yeah.

**Adam Stacoviak:** That way, I'm not working at my timezone, in my timeframe; I put two hours and then I quit, and then you come and put two... It's together, right? Ensemble means together.

**Jessica Kerr:** Right, right.

**Adam Stacoviak:** Okay. Not necessarily in the same room but together in the same problem.

**Jessica Kerr:** Right. Because we have to do it remotely now, of course; it's much better in the same room. But it means one screen, one person is typing at a time. And the other people are making the decisions about what to type. The person typing is a very smart data entry person; so we take turns, right? 3 to 10 minutes typing. And then sometimes you have one person in charge - again, taking turns - of telling the person what to type. In a more experienced group you don't need that. And the rest of the group is making the decisions.

This has the property that all decisions are voiced, so that the whole group at least has the opportunity -- I mean, maybe sometimes I'm checking Twitter, but overall I'm keeping up. And that's about it. There's one path of change happening in the code, not four... And that change has everyone's knowledge in it already.

**Adam Stacoviak:** And it's effective because of that last point, because everybody's knowledge is in it.

**Jessica Kerr:** Mm-hm.

**Adam Stacoviak:** Is it typically four people?

**Jessica Kerr:** It is... Some people have six... I view a pair as a degenerate mob... \[laughter\]

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** Or a mini-ensemble.

**Jessica Kerr:** Yeah.

**Adam Stacoviak:** Okay... I'm just thinking, because there's a lot of pushback against meetings even. Like, "Oh, gosh... Do all these expensive engineers need to be at this meeting?" I just wonder if there's a similar sentiment.

**Jessica Kerr:** But we're working.

**Jerod Santo:** Right.

**Jessica Kerr:** Meetings feel unproductive because we're not working. Here we're working. We're working as effectively as we possibly can.

**Jerod Santo:** Right.

**Adam Stacoviak:** It reminds me of that movie... Tom Cruise, Oblivion-something... Oblivion Horizon... There's a narrator, I suppose, or this voice in the void that asks this team, Tom Cruise and his co-star, "Are you an effective team?" That's the question that the AI or something keeps asking them... Like, "Are you an effective team?" And it's this response of like, "Yes, we're effective." And if they're not an effective team, then the voice helps them be effective. So that's the question you all are asking yourselves, is like "Are we an effective team, in this movement?"

**Jessica Kerr:** Yeah. Not "Are we an efficient team?"

**Adam Stacoviak:** Right.

**Jessica Kerr:** The efficiency comes from being effective. It comes from making fewer mistakes, it comes from not having to context switch to the pull request, or merge conflict, or getting tripped up by not knowing everything that's going on. It's about maximizing effectiveness.

**Jerod Santo:** When you say every decision is vocalized, do you mean down to the "We're gonna write a statement right here"?

**Jessica Kerr:** Okay, so this actually works out to be kind of cool... Because say you have a designer as one of the team members. They take a turn at the keyboard, too. They're also gonna type. When the designer is at the keyboard, you're probably gonna have to say at one point -- so you'll start with the overall goal of "We wanna check for errors." And then you'll be like, "Okay, we need to say if error is nil, or if error is not nil." And then you'll be like, "Okay, type if, space, err, space, does not equal..." So you kind of like start -- as you're saying what you wanna do, you typically start at a high level, and then as the person at the keyboard looks at you like "You want me to what?", you get more and more detailed.

**Jerod Santo:** Right.

**Jessica Kerr:** But then when you've got one of the developers who's fluent in this programming language out there, you'll be like "Check for errors", and they'll type "if err!= nil \[unintelligible 00:31:58.09\] So different people are different levels of smart input devices.

**Jerod Santo:** \[32:10\] Gotcha.

**Jessica Kerr:** And over time, even that designer is gonna know --

**Jerod Santo:** He's gonna get good at it.

**Jessica Kerr:** Yeah, yeah. You get to where you have to say less and less to get the intention that you're describing expressed in the code.

**Adam Stacoviak:** So being effective in tandem as the team is one thing, but is it an effective and proven way to program? Obviously, it's got a name, it's got even a formally known as name...

**Jerod Santo:** Right...

**Jessica Kerr:** \[laughs\] I mean, plenty of people do it...

**Adam Stacoviak:** Is it accepted as effective? Does it help your team do a better job by ensembling, so to speak?

**Jessica Kerr:** Corgibytes is a company that ensembles almost exclusively... They are famous for their specialty in scary legacy codebases.

**Jerod Santo:** Legacy code rocks!

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** Mm-hm. Exactly. I forget where Leonard works... There are other companies and teams within companies that work this way exclusively. I mean, not everybody wants to work this way, and not every team is going to, but it is effective for the teams that choose it.

**Adam Stacoviak:** Right. I asked you that question not so much to get you to confirm yes or no more or less, but more so for our listeners. When we uncover these -- I would call this a hidden gem; I had no idea it existed. I've heard of pair programming before. I haven't heard of ensemble programming, nor have I heard the formally known as version of it either, and what the details are around it.

**Jessica Kerr:** \[laughs\]

**Adam Stacoviak:** And I think when we uncover these things, when we have people like you on, who are just super-knowledgeable about things that Jerod and I maybe -- we're just imposters, to some degree. Jerod is less than I am, but maybe me for sure more.

**Jessica Kerr:** Dude... You can't know about everything.

**Adam Stacoviak:** But I wanna uncover these details.

**Jessica Kerr:** That's what podcasts are for.

**Jerod Santo:** Exactly. That's why you're here, Jessica. We're learning. We're here to learn.

**Adam Stacoviak:** That's right. You know, I want you to help our listeners really understand why you all choose this practice and how it works for your team, and what is it that makes it effective for you. That's why I asked those questions.

**Jessica Kerr:** Right. I haven't got to work on a team on a real piece of software doing ensemble programming. I mean, I'm pretty much DevRel now, so I do a lot of toys, a lot of experiments, a lot of figuring out how to work with something. But next week, I get to work on a real team, but they don't pair or ensemble very much.

**Jerod Santo:** \[laughs\]

**Jessica Kerr:** So that's okay. It'll still be fun.

**Break:** \[34:39\]

**Jerod Santo:** Speaking of things that people do together... Games!

**Jessica Kerr:** Ooh! Games! Okay, that's something I've done a lot more of since the pandemic started.

**Jerod Santo:** Right? I think we all have...

**Jessica Kerr:** Yeah. I've been fascinated by the theory of games for a little while... Ever since I read James Carse's Finite and Infinite Games. The way humans play games says something interesting about us, that is something we don't really understand about ourselves. And now, from this latest book, which is called "Games: Agency as Art", I've finally found the connection that I'm looking for to software development.

**Jerod Santo:** Okay, tell us.

**Jessica Kerr:** You know how we like to gamify things?

**Jerod Santo:** Totally.

**Jessica Kerr:** We'll set an OKR, and whoever increases the time spent on site the most will get a $5 gift certificate at Starbucks.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Is this legitimate, or is this a...?

**Jerod Santo:** Oh, yeah. Well, $5 might be underselling it, but...

**Jessica Kerr:** Right. I'm exaggerating.

**Adam Stacoviak:** Okay.

**Jerod Santo:** \[laughs\] Definitely legitimate happens though.

**Jessica Kerr:** Yeah. But typically, they're trying to just tap into people's competitive nature.

**Jerod Santo:** Sure.

**Jessica Kerr:** And it'll be fun because it's competitive. And that makes it a game. And then what you get is a bunch of dark web tricks that just make it harder for people to navigate the page, so they stay on it longer. I mean, among other things...

**Jerod Santo:** Sure.

**Jessica Kerr:** Sometimes you defeat your objective by aiming too focusedly on the key result.

**Adam Stacoviak:** Right. The Close button moves when you're trying to hover over, kind of things.

**Jessica Kerr:** \[laughs\]

**Adam Stacoviak:** It's like, I cannot catch the Close button...

**Jerod Santo:** Yeah, there was Smash the Monkey. Do you remember the old ad, Smash the Monkey?

**Jessica Kerr:** "If we make it not work the first time, they'll click it twice as much!"

**Jerod Santo:** Exactly. Double your click-through rate right there.

**Adam Stacoviak:** It's like double the points.

**Jessica Kerr:** That's also an exaggeration... But in marketing, this can be like "Okay, we want more product sign-ups. Let's offer a T-shirt to everyone who signs up." And then you get a bunch of garbage sign-ups, and you give out a bunch of T-shirts to people who could care less about your product... And it's actually a negative to have those sign-ups in the product. This is garbage data.

**Adam Stacoviak:** Not to mention the Carbon footprint of shipping those T-shirts to people who don't even want them, or produced the shirt in the first place.

**Jessica Kerr:** Yeah. Or not the people you want to have them.

**Adam Stacoviak:** Yeah. It seems like such a wasteful activity.

**Jessica Kerr:** Exactly. Exactly.

**Adam Stacoviak:** Fabrication, really.

**Jessica Kerr:** If in marketing... Because we talk about this at Honeycomb - should we offer swag for this? I think it'll attract the wrong audience. How do we attract the right audience? Because while we have OKRs and we care about product sign-ups, that's as part of people getting value out of the product, and so we don't maximize product sign-ups. We work to increase product sign-ups; that's different.

So gamification as it's usually described is away to add achievements and points, and give people a dopamine rush of "Oh, you got an achievement! You deleted ten lines of code today. Woo!" Don't incentivize me to do something non-optimal. Anyway...

\[39:48\] Also, I don't like the competitive instinct, the focus on competitiveness, because that's not what I want on this team. That's not where I want people to be in their brains. And yet, there is total value in making work more like a game. Not with points, not with competition; this book finally described it for me. When you look at games, the major magic that brings a lot of us to play them is the experience that we get from being able to solve problems that we have the ability to solve, but they're not super-easy.

The example that it lists is like Super Mario Bros. In Super Mario Bros the game designer gives you a few abilities. You can walk, run and jump. And that's it. You can walk, run and jump.

**Jerod Santo:** Right.

**Jessica Kerr:** But then you're presented with a world full of chasms to jump over, and monsters to jump upon.

**Jerod Santo:** And flower power.

**Jessica Kerr:** And your jump is just far enough to get over that chasm. Sometimes you need to run and jump. But not at the beginning. It lets you develop that skill.

**Adam Stacoviak:** Yeah.

**Jessica Kerr:** So the problems and your abilities are both set by the game designer. The game designer gets to set the goal, and then as players, we choose to adopt that goal. We have the goal of reaching the flag at the end, and we adopt it over and over and over, because we like the experience of running and jumping and getting just barely across the chasm, hole, whatever.

**Adam Stacoviak:** The gap, yeah.

**Jessica Kerr:** Yeah. So when I look at that as one of the core qualities of a game, and then I look at my software teams, and -- I mean, in the real world our ends are a lot messier, and we're never gonna get the slickness of the game of "I've reached the flag. I'm done with the level." Even when you deploy the software, you still need to go back and check it, and is it still working. That flag falls down on its own. But can we come closer to setting goals, whether for a quarter, or a sprint, or an hour, and having the abilities that we need to reach them?

It made me think about DevOps and automating deploy work, for instance. If you have a bunch of people who've been doing manual deploys, and they consider that -- maybe they're ops people and they consider that a significant part of their job. Well, they have the ability to accomplish the problem \[unintelligible 00:42:34.05\] by the end of the day. But when you automate those deploys and you give them different problems of "Now your job is to maintain this automation", you've taken away the problem that they know how to solve, and given them one that they don't have the ability currently to solve. And some people are gonna be like "Oh, now I get to learn this, that and the other." And they're gonna be okay, because they're excited about bringing their ability up to that level.

**Jerod Santo:** Right.

**Jessica Kerr:** And then you give them the space for that and it works out. But other people don't have those abilities, and maybe aren't excited about getting them. And then you've broken the game for them, and work becomes a different experience.

**Jerod Santo:** There might be a similar chasm between engineering and management. It's the old Peter Principle, you get promoted to the level of your incompetence, or something like that...

**Jessica Kerr:** Right. Before that, you're able to bump up the problem as your skill level increases... And now you're just allowed to keep jumping in that hole over and over.

**Jerod Santo:** It's a whole different game, right? Like, "Oh, now you're playing a brand new game, and none of your skills transfer." I mean, some of them do, but that can be problematic as well, or challenging, at least. Some people love that challenge, and other ones are like "I'm gonna go back to being a --" What do they call them...? Individual contributor, IC...

**Jessica Kerr:** Yeah.

**Adam Stacoviak:** IC, yeah.

**Jessica Kerr:** Ironic, because the higher level you get as an IC, the less individual your work is.

**Jerod Santo:** Especially if you're doing ensemble programming.

**Jessica Kerr:** \[44:04\] Yeah.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** So this book has really opened your eyes to ways to use or to not use the gamification ideas in work scenarios.

**Jessica Kerr:** Yeah, to completely rethink what we mean by gamification.

**Adam Stacoviak:** Gotcha.

**Jessica Kerr:** Can we make our work more like an effective game? Can we scale the goals of an hour, a day, a sprint, a quarter, to something people can achieve? Can we give them the abilities that they need to achieve that? Automation can help with this. Automation can make things easier. I like to think about observability, for instance, giving people the ability to make useful software; as opposed to right now, the only feedback mechanism we have is -- I don't know, the JIRA ticket's done. So can we set a different goal? Something maybe more satisfying than "Close the JIRA ticket." Although "Close the JIRA ticket" can be a sub-goal. You've got games within games within games... The little puzzle games within the \[unintelligible 00:45:03.20\]

**Jerod Santo:** Right.

**Jessica Kerr:** So we can do that. But can we look at our work and notice the friction? Where are our goals too easy? Where are they too hard? Where are our abilities not suited for them? And maybe that means hiring someone with that knowledge, and then ensemble working with them, \[unintelligible 00:45:27.25\] the rest of the team, or something.

**Adam Stacoviak:** That's what I love about the Mario game, honestly, when you mentioned that... I think his name is Shigeru Miyamoto, he is the original Mario game designer. And I actually got into this kick where we got into the Nintendo Switch... I'd kind of gotten out of playing games, particularly Mario games, or Nintendo games. We had a Nintendo way back in the day, and then obviously we had a Wii, and then we finally got the Switch was old enough to play... And kind of gotten back into the details of the making of these games. There's some really interesting YouTube videos out there, documentaries on this game in particular, where Super Mario Bros came from, where Mario 3 came from, how it came to be... And why Mario 2 was so different than the other games.

**Jerod Santo:** Why is it so different? I've always wondered that.

**Adam Stacoviak:** Well, you have to watch the documentary, Jerod. It's a whole podcast episode.

**Jessica Kerr:** \[laughs\] Linked in the show notes.

**Jerod Santo:** \[laughs\] Yeah.

**Adam Stacoviak:** I'll give you a real super-TL;DR.

**Jerod Santo:** Thank you.

**Adam Stacoviak:** So the Nintendo folks were commissioned to make a separate game for a different company, for like an unveiling of a product. And they made a whole separate game, and then they just translated those characters to Mario 2 characters.

**Jerod Santo:** I see.

**Adam Stacoviak:** Kept similar traits in terms of their abilities... That's why \[unintelligible 00:46:45.27\] could jump, and float a little bit, and then fall...

**Jerod Santo:** Right.

**Adam Stacoviak:** So it was a non-Mario game that they translated to Mario... And I don't know the details, why they actually stuck, but that's why it was so different - because it was so foreign. They wanted it to grab things and throw things, but it was always this characteristic of all the Mario games pretty much, even to this day, where level one wasn't necessarily easy, but it was the basic skills you needed to learn to get to level two. And then once you got to level two, or different scenarios, you learned things in level one that translated to level two, that you added upon. And you got new powers, and new abilities, and you can fly further, and jump higher...

**Jerod Santo:** Right.

**Adam Stacoviak:** You know, Luigi jumps higher than Mario, for example; all the characters have their own traits. And that's part of the game mechanics. I love that about it, because if you can kind of translate some of that to the way you translate skills in a team... You know, "How can I give you level one here, that builds on level two?" kind of ideas. And they were genius with the design of Mario.

**Jessica Kerr:** Yeah...

**Adam Stacoviak:** From a literal game standpoint and the actual way you learn how to play it. Because you learn how to play by playing the game. And that's kind of really interesting.

**Jessica Kerr:** Yeah, yeah, yeah! And can we be deliberate about that in our teams? Maybe we don't have enough knowledge on Ansible, because we've got this legacy system that's deployed in that. What goal can we choose to take on that will increase our skill in Ansible? And maybe it's "Make this small change to the deployment process."

So some goals you choose to take on not because they are the most critical thing in your customers biofeature list, but because they're going to give you the skills that you need to have the flexibility to do much more interesting things at level three and four. So that's another way. And I can call that gamification.

**Break:** \[48:40\]

**Jerod Santo:** So who's the Shigeru Miyamoto of our career game?

**Jessica Kerr:** Kent Beck.

**Adam Stacoviak:** Too easy? \[laughter\]

**Jessica Kerr:** Easy one.

**Jerod Santo:** He's the one. Okay... We should just go ask him what \[unintelligible 00:51:07.19\]

**Adam Stacoviak:** Yeah, I mean... It's incentivizing, really.

**Jerod Santo:** Sure.

**Adam Stacoviak:** That's the same thing with gamification, is "How can I give you a rush? How can I incentivize you to do something? How can I motivate you to do something? How can we as a team adhere to --" Is that a bad word?

**Jessica Kerr:** See, I hate the word "incentivize" or "motivate."

**Jerod Santo:** Why?

**Jessica Kerr:** Here's an important part about games, also from the book; not the only way we play games. Sometimes we actually play because we care about winning.

**Adam Stacoviak:** Sure.

**Jessica Kerr:** There are people who care about winning. Or some people are professionals and get paid to win, so they care about money. But a lot of us take on the goals of the game in order to have the experience of playing.

**Adam Stacoviak:** Sure.

**Jessica Kerr:** I currently play Genshin Impact. The real reason I play Genshin Impact is because my kids do, and I wanna connect with them. But in order to have fun at the game, I choose to take on the goal of leveling up my character, or defeating these monsters, or solving the silly side quest. And I choose to take on the goals in order to have the experience of striving play. In order to have a thrill of defeating the monsters in this domain, or getting killed by them. And failure is its own kind of thrill, of "Oh, no...!" and you get to tell the story to your friends.

**Jerod Santo:** That's not the kind of thrill that I like, but keep going.

**Jessica Kerr:** But it adds to the next win, if nothing else.

**Jerod Santo:** It does, yeah. It raises the stakes.

**Jessica Kerr:** Yeah. So we don't have to be incentivized to take on these goals. We don't have to take on the goal of "Users spend more time on the page." We don't have to be incentivized to take on that goal. We can take on that goal for its own purposes, which is because it helps us make useful decisions about what change to make next.

\[53:02\] And when we're in the code, we can think about "Oh, if I add this piece of information, will people spend more time on the page?" And yeah, maybe it'll draw their attention to something that really interests them. But I won't choose to maliciously make them spend more time on the page. I would totally joke about that. "Whoa! We can make the button not work the first time" in the ensemble. But we wouldn't actually do that, because we've taken on this goal deliberately, in order to guide our decisions in the game we're playing today. And you don't have to incentivize it, because incentivize it messes it up. Because "Oh, but it would easier to make the button not work. And if I do that, then I'll win!" That's the competitive spirit. "And I'll beat the other people!" Or "I'll get the $5 Starbucks gift card!"

**Jerod Santo:** Sure. I think we'll get into the semantic debate around what "incentivize" means, but it seems like to me that you're talking about intrinsic motivation versus extrinsic motivation.

**Jessica Kerr:** Yeah. It's intrinsic motivation when we choose to take on the goal.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Right.

**Jessica Kerr:** And it's extrinsic motivation when you're like, "Well, but we'll give you a gift card."

**Jerod Santo:** Right.

**Jessica Kerr:** No, no, you don't want the people who are signing up for your product to get the swag.

**Adam Stacoviak:** We want certain skillsets though, right? So you identify what skills the team has, and I guess in the context of "incentivize" there I was thinking, okay, if you took your ensemble and you said "Okay, this person could leverage more knowledge on, say, Docker, and containers, and what that means to use Docker, and how we use it." As an example for me, recently... I was really scared of Docker, I didn't really understand it, I didn't understand the difference between that and Docker Compose, and I didn't understand why the Docker Compose Yaml file had various versions for the Yaml...

**Jessica Kerr:** No one understands Yaml.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** It didn't make any sense to me until I dug in and learned. And now, once I've learned it, my incentive was "Okay, now I wanna orchestrate some services here at my home." And I mainly use Docker in what I call home lab production, really. It's production for me, but if it dies, no big deal, because it's just my Pi-hole is not working.

**Jessica Kerr:** \[laughs\]

**Adam Stacoviak:** And technically, my internet stops working, because it is my DNS provider...

**Jerod Santo:** Hey, that's production right there.

**Jessica Kerr:** Oh, that matters...

**Adam Stacoviak:** That does matter. So that is production there. But you know, my Pi-hole is a Docker image, my Plex is a Docker image... When you look at a team, you can say "Okay, who needs to learn more about this? How can we incentivize them/motivate them to want to learn more about that? Because the team can now be more full in terms of a skillset." That was the context for me using "incentivize" and "motivate".

**Jessica Kerr:** Okay. Or what goal can we ask them to take on, that will have the effect of teaching them about Docker?

**Adam Stacoviak:** What happens when you give them that goal?

**Jessica Kerr:** Yeah, when you give them that goal and they --

**Adam Stacoviak:** They're incentivized. \[laughter\]

**Jerod Santo:** See, that's what I said. We're gonna get into a semantic debate.

**Jessica Kerr:** I would say they incentivize themselves.

**Adam Stacoviak:** Sure.

**Jerod Santo:** Sure.

**Adam Stacoviak:** But it does happen.

**Jerod Santo:** What happens when they aren't incentivized though? So that's where I think the Amazon gift card comes in. It's like, "Well, we tried that whole thing where you should want to go on the journey, or you should want to better the thing. It's not working", and now that's usually where these silly and often backfiring systems get put in place.

**Jessica Kerr:** Yeah. Because with knowledge work, those external motivations do not work.

**Jerod Santo:** Right.

**Jessica Kerr:** Our job is making decisions, and we can make decisions that will reach that number, and also hurt the company. When we choose to adopt a goal, like winning in a game, we choose to adopt it for a period of time. And we always have in the back of our heads "Also, I need to go to bed." As adults anyway. The kids struggle with this. But we don't adopt it universally. It doesn't consume us. If you tell people they're gonna lose their job if they don't X, you're gonna get people who are consumed with X, because they have to be, in a way that's not healthy for the company, and in a way that doesn't lead to the best decisions.

\[57:00\] If you're asking people to (I don't know), deliver packages on foot - I'm sure there's also problems with this... There's a delivery person outside right now. \[laughs\] You're asking people to deliver packages on foot, and you want them to go faster, and you give them a prize for being faster - maybe, maybe that might help. They'll probably just do it wrong, because you've twisted their incentives again. But if it's physical activity, maybe you can get people to go faster, spend more energy on it.

**Adam Stacoviak:** And there's always the possibility of a good-intentioned incentive going wrong in the hands of the incentivee, I guess; I don't know... Like, the incentivizer/incentivee.

**Jessica Kerr:** Yeah, yeah!

**Adam Stacoviak:** Whoever receives this incentive can skew \[unintelligible 00:57:43.12\] the goal set, the process to get to the goal.

**Jessica Kerr:** Right. Which is why I like the concept of games as a goal, an end that we choose to take on, because then we still have the perspective of "We chose to take this on within this context, and there's also a wider context."

**Adam Stacoviak:** Right. I think that's the beauty of the title of the book that you're reading though... What is it? The Agency of Games, is that right?

**Jessica Kerr:** Games: Agency as Art.

**Adam Stacoviak:** Because let me share some psychological prowess that I've learned through osmosis from my co-host on Brain Science...

**Jessica Kerr:** Oh, goodie.

**Adam Stacoviak:** And it's simply that when we are involved in making the choice, we're far more going to be aligned to the outcome of that choice. Whereas if Jerod chooses something for me and I have no agency - to use the word of the book - no control, no possibility to input my own desires into this choice, then I'm not gonna be aligned with that outcome... Because I have no agency, no control, no ability to choose that thing. It's the same reason why people make or don't break habits, or have certain things happen to them, some sort of activities in their life because they haven't chosen to stop the pain, haven't chosen to make the change. And if you can't put that choice into place, then you can't -- like for me, even with Docker; I spent years not really understanding deeply how I can leverage it myself personally. I've always understood it philosophically and how it's used in production, of course, and how people use it in software development, but me personally - I never understood how I could personally use it in my own scenarios. And I only learned it because I chose to want to have a Pi-hole, or to run my Plex in a different way, that made more sense for me, and my storage, and my ZFS, and all this different stuff.

**Jessica Kerr:** Right. And you chose to set those goals. You didn't have to.

**Adam Stacoviak:** Right, exactly.

**Jessica Kerr:** There's other ways to accomplish a local file server, or whatever you wanna have at home.

**Adam Stacoviak:** Yeah. That's only after I've lost data so many times that I'm like "I need something more robust, I need ZFS."

**Jerod Santo:** \[laughs\] There's your motivation right there. "I'm sick of losing my data."

**Adam Stacoviak:** So yeah, that's certainly -- I mean, I've been literally iterating towards the current scenario, which is like, it's perfect right now; I never have to touch it. If it weren't for an update to the image...

**Jessica Kerr:** You jinxed it. It's gonna break. \[laughs\]

**Jerod Santo:** Yeah. It's going down. Right now.

**Adam Stacoviak:** No, it literally doesn't. It's so well-tested. I did lose data in the past, but it's so perfect now that it's kind of boring. I told Matt Ahrens, one of the co-creators of ZFS, I'm like "It's so boring to run ZFS, because it just is \[unintelligible 01:00:26.04\] software."

**Jessica Kerr:** Nice.

**Adam Stacoviak:** It doesn't need much administration.

**Jerod Santo:** File systems should be boring once you set them up, right?

**Adam Stacoviak:** It should be, sure. But even Plex too, and Docker... Only because I finally chose to get more serious about running those services here locally did I then understand what it would take to buckle down and really understand Docker, how I can use Docker Compose, and all those fun things. To really fully understand my system.

**Jessica Kerr:** And then I imagine you find that knowledge useful elsewhere.

**Adam Stacoviak:** Yeah, yeah. I'm telling you about it right now. That's my usefulness.

**Jessica Kerr:** There you go. That totally matters.

**Adam Stacoviak:** And my kids love watching our Plex. I mean, that's the ultimate daily dose of usefulness, man...

**Jessica Kerr:** \[01:01:12.00\] \[laughs\] Yeah, but you chose to take on the restriction of "I'm gonna do this locally", in order to have the experience of doing it locally... And also, there's some other benefits of whatever excuse you have for doing it locally. \[laughter\]

**Adam Stacoviak:** Well, it's local to the network, that's why it's local.

**Jessica Kerr:** Yeah. And that's handy. If the external internet goes down, it might still work.

**Adam Stacoviak:** Production would be, I guess, non -- so it is deployed locally, but it is accessible externally, too...

**Jessica Kerr:** Nice.

**Adam Stacoviak:** ...which does require some talking through firewalls and certain things, port-forwarding, and stuff like that. I won't tell you which ports I'm using, because you might try and get into my network, but there are certain ways you can get in from the outside that are done well, basically. So it is production, it is deployed, basically; it's just deployed to a local network... Because that's where it lives. My Pi-hole would not be a Pi-hole in the actual internet.

**Jerod Santo:** By the way, Pi-hole is a Raspberry Pi-based firewall software. It's not a euphemism for your mouth...

**Jessica Kerr:** It's not your mouth.

**Adam Stacoviak:** Pi-hole.

**Jerod Santo:** I'd like to disclaimer that... People are like, "What? Why is he talking about his mouth in this weird way?"

**Jessica Kerr:** \[laughs\]

**Adam Stacoviak:** I love Pi-hole. It's amazing. And Plex is a home media server, basically. So I've got a Linux box with massive amounts of storage, running ZFS as a file system, with a Docker container that runs Plex... And there you go.

**Jessica Kerr:** See, the outcome of an accomplishment like that is not just the running software or hardware configuration that you have. It's also the next version of you. It's how you are different. And I think that's a really important part when we're thinking about socio-technical systems; the output of each change to the software is - yes, a difference in how the software runs. But it's also the next version of the team and the code. Is the code more or less maintainable? A lot of that has to do with its relationship to the team, and whether everyone at the team looked at the pull request and knows what's going on now. \[laughs\]

But when we look at the next version of us that comes out of taking on a particular end and accomplishing it, then the means matter a lot more. If we worked on this feature together in an ensemble, we will be a different set of people, and probably the code will be a little different - certainly, our relationship with it will - than if one person implemented it and another person approved the pull request.

**Jerod Santo:** That's pretty deep, Jessica. We change the software, and the software changes us.

**Jessica Kerr:** Yeah. And us changing the software changes us. And we learn about Docker, or whatever.

**Adam Stacoviak:** Yeah. It reminds me a little bit of quantum computing, Jerod... In that realm, or at least in the quantum realm, where a particular particle is changed because you observed it.

**Jerod Santo:** Right.

**Adam Stacoviak:** So to observe it is to change it.

**Jerod Santo:** There you go.

**Adam Stacoviak:** So you can't nakedly observe it without changing it. It's a change because you observed it.

**Jessica Kerr:** Yeah, yeah. Can I make another book recommendation?

**Adam Stacoviak:** Yeah, please.

**Jerod Santo:** Sure.

**Jessica Kerr:** I've recently finished Amanda Gefter's book, it's called "Trespassing on Einstein's Lawn."

**Adam Stacoviak:** Good title.

**Jessica Kerr:** And it's about cosmology, it's about how she became a science writer in order to talk to prominent physicists about their theories of how the Universe began, because she and her dad were fascinated by the question. And a big part of the answers that she comes to - I don't think this is a spoiler - is that there is no observer independence, and it also really matters that there's more than one observer. The Universe wouldn't exist if nobody looked at it, kind of thing... Which is why I like to deploy my software and hook it up to Honeycomb... \[laughter\] Because does it really exist if I can't observe when somebody hits it?

**Jerod Santo:** \[01:05:15.13\] Full circle. Going full circle...

**Jessica Kerr:** There you go.

**Jerod Santo:** Observability and ensemble. You've gotta have more than one person...

**Adam Stacoviak:** All the nuggets in one sentence.

**Jerod Santo:** That's awesome.

**Adam Stacoviak:** This is interesting. I like even this aspect, because I can imagine one day - I don't know when, but I could imagine one day my fascination with like... I love Sci-Fi books, and I'm gonna put this on my list, because I think this is probably in that wheelhouse at least... I love plausible Sci-Fi. That's what I call it, at least. I like that it's not real, but it could be real, given certain known knowns of theorizing physics of today. Cosmology, etc. And there's one particular book series that I'm reading now that just really pushes the AI perspective really good. And I can't recall the actual author's name this very moment, but I'm gonna pull it up here in a second... His name is Dennis E. Taylor. Yes, Dennis, you know, I've been talking to your on Twitter DM.

**Jessica Kerr:** Nice

**Adam Stacoviak:** I'm gonna get you on some podcast at some point. But he's written a book series called -- it's called The Bobiverse book series, but I love this idea, because he was a programmer. And he's a snowboarder, mountain-biker, lives in the Pacific North-West... You know, a retired programmer who now writes plausible Sci-Fi books really, really well. And I could imagine, similar to Amanda - these are fictitious stories, of course; they're not real. But he could be on a panel with known physicists because of how well he writes in this realm. I'm sure he does some deep knowledge and some deep reading on actual physics, and I'm sure he's probably taken classes... And I have no idea about the guy's knowledge base, nor do I know of Amanda's either, but I imagine that they're coming from the outside in, so to speak. They're not physicists, they write these books, with their deep knowledge...

**Jessica Kerr:** But what they are doing is grasping the physics and explaining it to us.

**Adam Stacoviak:** Right. Yeah.

**Jessica Kerr:** Or making it real to us, one way or another.

**Adam Stacoviak:** Precisely, yeah. And that's such a cool way to get access to -- because otherwise, how would you do it? Would you just write Einstein's theory? Would you write the three laws to get into that club, so to speak? No, not necessarily. Is this like a different vector of attack, so to speak, to get into that sphere, into those knowledge bases, and access to those people...?

**Jessica Kerr:** Yeah, you do have to do the work to understand it, to be able to have a conversation with the people who are at the forefront of physics, in this case. And my 14-year-old daughter has picked up this book now. I handed this book to them and they actually started reading it, and they've actually read like half of it, which doesn't happen very often with a paper book. They mostly read fan fiction.

**Adam Stacoviak:** Wow.

**Jessica Kerr:** And they like the way it makes them think.

**Jerod Santo:** Very cool. Well, we'll definitely link out to all of those books. I don't have any book recommends, but I do wanna give a book recommend that is related to the gamification topic that we've just touched on, and a shout-out to a certain degree to Quincy Larsen and our friends at freeCodeCamp.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** When Quincy was last on the show he said he wants to gamify education, and they have been working on that for a while. I'm not sure if you guys saw or not, but they have a Learn to Code RPG now...

**Adam Stacoviak:** I did see that, yeah.

**Jerod Santo:** ...which we will link to in our show notes. It's hours of gameplay, it's very much original art and music. It's super-cool. You can play this role-playing game while you're learning computer science quizzes and questions. So a little bit of a tie-in there... I'm not sure if you get a free Amazon gift card at the end or not, but... \[laughter\] I just wanted to mention that, because it's a very cool accomplishment as well for him. It's something he's been working towards for a very long time. It's very much their first try at games with education, and definitely relevant to what we have to say today.

\[01:09:06.02\] Jessica, this has been a blast. Any final words? You've already blown our minds in a couple different ways, but if you have any other words of wisdom before we call it a show, please do share.

**Jessica Kerr:** Oh. I just wanna give you a few links.

**Jerod Santo:** Okay.

**Jessica Kerr:** I recommend my introduction to observability course at graceful.dev, which I will link in the show notes... And sign up for a free Honeycomb account, because that will improve my OKR.

**Jerod Santo:** \[laughs\]

**Jessica Kerr:** Honeycomb.io. \[laughter\]

**Jerod Santo:** Awesome.

**Adam Stacoviak:** She will get something from that, because she's been incentivized. Ha-ha-ha!

**Jessica Kerr:** See, what the OKR does is make me think about closing the loop for something I've already created, of "How do I draw the line back to a call-to-action?" See...

**Jerod Santo:** Well played. You win today's game. \[laughter\]

**Adam Stacoviak:** On that note too, it's been a while since we've talked to Avdi, and I didn't know about this transition from RubyTapas to Graceful.dev.

**Jessica Kerr:** He would love to talk to you about that.

**Adam Stacoviak:** That's really cool. And I've been a fan of his for many years, obviously. I always appreciate the knowledge he puts out there, both free and paid. He's amazing.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And this is super-cool, that RubyTapas has evolved into this. Now, you can put some stuff there too, and it's more than just Avdi; I'm looking into it, of course, but... That's cool.

**Jessica Kerr:** Yeah, yeah. He's aiming for more creators; still very, very hand-picked. This is not gonna be a...

**Jerod Santo:** Platform.

**Jessica Kerr:** Yeah, yeah. I mean, it's his platform, but it is not a generic platform.

**Jerod Santo:** Right, right. It's not like a "Post your thing here. Publish it immediately", kind of...

**Jessica Kerr:** Yeah, exactly. Exactly.

**Adam Stacoviak:** It says "Tasteful software development training with Avdi Grimm and friends."

**Jessica Kerr:** Yes.

**Jerod Santo:** So I have been backchanneling with Avdi a little bit over the...

**Jessica Kerr:** Cool

**Jerod Santo:** ...the winter break, about his -- he's been writing this cool Lemonade Stand series. I'm sure you're aware of it...

**Jessica Kerr:** Oh, the Banana Stand.

**Jerod Santo:** Lemonade Stand... Yeah, the Banana Stand from Arrested Development. I'm not sure why I said Lemonade. Same concept... The money is in the Banana Stand though, not in the Lemonade Stand. Anyways... I've been trying to get him on the show, so stay tuned for that; I'm sure we can get Avdi on to talk about both topics.

**Jessica Kerr:** Good.

**Adam Stacoviak:** Cool. I'd love to have Avdi back on. It's been a while.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Actually, closing one other loop - the last time I think we talked to him was about pair programming.

**Jerod Santo:** Oh, wow.

**Adam Stacoviak:** I mean, that was forever ago. I think that might have been in its upcoming, new renaissance. I don't know how many times it's come and gone, but it was in a resurgence the last time pair programming was --

**Jerod Santo:** It was definitely back in the Ruby Rogue's days, which was a long time ago.

**Jessica Kerr:** That was a long time ago.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Cool. Well, Jessica, it's always fun catching up with you. My favorite thing about you, as a closing part, is just the sheer willingness to share your wisdom. I love that.

**Jessica Kerr:** Oh, thank you.

**Adam Stacoviak:** Whether it's leftfield or not, you somehow find a way to loop it all in, and I love that about you, so I always love having you on the show.

**Jessica Kerr:** Put it in public! That'll maybe make it good later. \[laughter\]

**Adam Stacoviak:** That's what I love about you though. I appreciate you coming on the show. I always learn something new every time you come on the show, so hopefully our audience feels the same. Your shows tend to be high listens, so I think maybe that's what it does, too; our audience loves you, so...

**Jessica Kerr:** Yaay!

**Jerod Santo:** People love it.

**Adam Stacoviak:** ...thanks for coming back. We appreciate you.

**Jessica Kerr:** Thank you so much! Have a great afternoon. See you next time.

**Jerod Santo:** Yes. You're welcome back anytime, for sure.

**Jessica Kerr:** Thanks!
