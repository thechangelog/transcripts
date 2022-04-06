**Gerhard Lazu:** We had Romano join us on episode 28, and when we finished recording, he told me that I would enjoy talking to you, Pia, about testing and quality assurance. And I'm so glad that you join us today. Welcome!

**Pia Wiedermayer:** Thanks, Gerhard. I'm very happy to be here.

**Gerhard Lazu:** Okay, so I will start with a clarifying question, because in November Romano published a very good YouTube video; I love the title - "Hey, dev ops, you're killing my job!" Maybe there were a couple more exclamation points there... But that was the actual title; great video. And in the beginning of that interview you say that quality assurance has a special place in your heart. What did you mean by that?

**Pia Wiedermayer:** Yeah, that's absolutely true. You know, I'm just passionate about quality. I come originally from the hotel business, and I used to work in four or five-star hotels, the really nice ones, where everything is super-clean and tidy, and everything looks perfect... So that's where my passion for quality comes from. But I always had this interest in technology, in IT... So somehow it happened that I got to join the software industry, also delivering high-quality software to our users, for our stakeholders, for the team that drives me, that makes me happy to deliver a good product, a great product.

**Gerhard Lazu:** \[00:04:01.06\] So I can imagine what a five-star hotel in Switzerland looks like, because that's the image that you have in mind. And I can imagine that. What about the equivalent in software? What does that look like? So when you say quality, that five-star Swiss hotel quality, what does that look like in software to you?

**Pia Wiedermayer:** That's a very good question. And to be honest, I think I haven't seen it so far...

**Gerhard Lazu:** Okay... \[laughs\]

**Pia Wiedermayer:** My standards are super-high. \[laughs\] That's why I'm good at my job. I'm not satisfied with medium.

**Gerhard Lazu:** So it's a very high bar, that's what I'm hearing. It's a very, very high bar that you have in your mind... So I'm curious, what does it even look like? That high bar that is very high to achieve, what does it look like for, let's say, a web app, or you can give any example that you want, from like an application or a product. What are the features, or how do you describe that? I mean, is it how it works, is it how it feels? Is it the flow, is it the design, is it the speed? What is it about it that makes it five-star?

**Pia Wiedermayer:** So to me, it's the combination of all what you've just mentioned, and probably a lot of stuff we didn't mention, and I will probably also forget... But it's not like just "It works." Yeah, the look, the feel, who are our users at the end, what do they do with our application, on which devices do they use it? There is a huge difference between mobile applications and desktop, and all that stuff; that's one thing. And then - yeah, far too often I've seen that we build products for ourselves, but not for our users. So we build what we think is cool, but we don't ask the users and check also what performance requirements do they have, how they interact with our application... Yeah, so devices I mentioned, where, in which occasions - all that stuff. And then - of course, yeah, our features that we're building, they just need to function. They need to do what they should do. But that's basic stuff to me.

So the four and the fifth star comes -- we make our users happy; not only happy, we surprise them with cool stuff. They didn't know that they would wanna have it. I think we can compare it with Apple. Or Steve Jobs. He came up with stuff nobody thought about, but a lot of people then said "Oh wow, that's great. I wanna have that stuff."

**Gerhard Lazu:** Okay. So if there was an application, or an experience - because I think a lot of what you mentioned is more about the experience that users get - did you ever have that experience with a different app, maybe that you weren't involved with directly, that five-star experience that we talk about? Or something at least that comes close to that. I know it's a very high bar, I understand that.

**Pia Wiedermayer:** Well, there is one funny example...

**Gerhard Lazu:** Sure.

**Pia Wiedermayer:** My bank where I have my account here in Switzerland - it's their mobile app. They have a funny feature; when you want to log out, you can just shake your phone, and then it logs you out. And they just got me with that. This is that star -- it's maybe not the fifth star, but that's a feature where I feel like "Oh, wow. I didn't expect that, but I love it." Since I knew it -- yeah...

**Gerhard Lazu:** So something that delights you. I get it. So when you think of five-star, it has to have an element of delight in that experience. Something that maybe you wouldn't expect, but something that brings you joy and it makes sense when you use it.

So I have a follow-up question - what happens if you get a large deposit, unexpected, and you're really happy, and you start shaking your app, of joy, and then you log yourself out? \[laughter\] It was just meant to be funny, it's okay. Alright... So what about things about that app that you mentioned, which is a mobile app - what about if it breaks? So have you ever seen it break, or maybe fail for you? I'm wondering if that has an impact on the five-star rating that you would be tempted to give it.

**Pia Wiedermayer:** \[00:08:26.28\] Yes. I've seen it fail, but I think with my experience - and I've been testing also mobile banking applications - my tolerance is higher. So I'm not freaking out when that app crashes. Instead, my mom would freak out, and think somebody has stolen her money, just because the mobile app crashed.

**Gerhard Lazu:** So you understand what goes behind the failure, and you're more tolerant to them, because you understand how difficult of a job it is to keep it running all the time, every time. So would it be safe to say or fair to say that as long as the failure is expected, or at least you understand why it happened, you're more forgiving and more accepting that "Yup, bad things happen. And you don't have to be up all the time, as long as you're not surprising me in a negative way. That's okay."

**Pia Wiedermayer:** For me, yes. And I think in general, if we are transparent with our users - and we definitely don't need to share everything, we don't wanna scare people. Not everybody is tech-interested. We are, but here and there a little bit more transparency and honesty with the users I think could help.

**Gerhard Lazu:** You say something very interesting... You say that quality is a lived principle. What do you mean by that?

**Pia Wiedermayer:** For me, when I started in software testing, quality was about quality assurance, it was about me at the end of the process having to check everything, and just giving some kind of sign-off and saying "Everything is okay."

**Gerhard Lazu:** So you as a QA person, your capacity as a QA tester - you need to give that sign-off, that's what you mean.

**Pia Wiedermayer:** Yes. So that's what was the normal when I started in that job, so quite some years ago. And I never really understood why it is only at the end of the process you say "Yeah, quality is fine, or it's not." So the longer I've been in that job, the more I realized "Now it's a team effort. It cannot be that I need to sign off stuff where I first don't have control of, I wasn't involved in development... I'm not a programmer, so I cannot judge how they coded stuff... So I only have had very small space for what I needed to do, and then I thought "No, that just doesn't feel right." So it has to be like quality is responsibility of the whole team, and we need to think about it from the very beginning, and not only at the end of the process, before we go live just quickly have a look, and...

**Gerhard Lazu:** So this sounds a lot to me like the Shift Left principle that, for example, security teams like to go on about how security is a Shift Left, you should start it from the beginning of the process, it's embedded in every single line that you write, every single feature that you add... It's not something that you do at the end. And I can see something similar happening with testing. That makes a lot of sense, and I'm wondering how do you make that work. So knowing that that's what needs to happen, the whole team is responsible for the quality of the software, how do you help the team see that and apply those principles?

**Pia Wiedermayer:** \[00:11:47.20\] Thanks for asking that question. I had to learn... As I said, when I started, for the first years being in that job, I was always at the end of the process, and I thought "Okay, that's also important, but that's not what I wanna do for the rest of my life." So I really had to put effort on it, talk to people, try to get closer to developers, get them talking to me, which is not always easy... But often, I got blocked by project managers, like "You're not allowed to talk to developers", all that stuff.

So in every project, still today, when I join, I face such situations, but I don't stop telling them first. It's much easier to build in quality than having to find every little thing and then we have to fix it at the end, or we have production incidents which can cause quite some costs and reputation damages, that stuff. So I try to give them examples... What's the difference if I'm testing at the end or if they let me talk to developers, let me get involved in the whole requirements gathering process?

I come up with examples, and the longer I work in that area, the more examples I have. That's cool. I'm super-happy that I always find cool people in all the different disciplines that support that approach. So my tip for everybody in a similar situation - try to find that partner in crime that's on your side. And then you get another one, and slowly you get the whole team on board, or the whole project.

Then simply what I do - today, in the current project where I am right now, I do a lot of pairing with developers. So I tell them "Listen, I'm not afraid of code. Just give me a hand, let's pair up, guide me through. Then I will ask you some question on how you test it, or how you plan to test it, and then we together build up good unit tests, integration tests... Maybe it makes sense to have also system tests... And we decide it together." That really helps both sides a lot, and we learn so much, and I really enjoy seeing my developer colleagues growing in their QA and testing skills, and also telling others "Yeah, now that I paired with Pia, now I know to write better tests, and now I don't get that many bugs reported at a later stage." That's super-nice.

**Gerhard Lazu:** You mentioned a lot of interesting things there, and I have to start asking questions.

**Pia Wiedermayer:** Yeah.

**Gerhard Lazu:** So what makes a good unit test?

**Pia Wiedermayer:** It's not about only unit tests. I think it's more general, what makes a good test. You first have to understand what's the requirement, what are you building, and then you need to think about "Okay, how can I prove that it's working?" That's like -- you have some cases for, I don't know, acceptance criteria 1, 2, 3; that's fine. And then, most of the times I come into play, then my colleagues ask me "Yeah, but what would be a negative case?" and then we just think about it. Or I bring in experience from other projects where I've been working maybe in a similar application.

So it's a lot about what you've learned during your career... There are certain techniques, like boundary value analysis, or -- I'm missing the word in English...

**Gerhard Lazu:** You can say it in Swiss, or German...

**Pia Wiedermayer:** Äquivalenzklassen.

**Gerhard Lazu:** I think I know what you mean... So let's see - if we were to explain that, it's the Liskov Substitution Principle, I think. The Liskov Substitution Principle, which says that you can replace something for something else, as long as the behavior is the same. And I have to check this, because it's been many years since I did this. I think our English listeners, that's what they're familiar with. So this is for object-oriented programming. Is that what you have in mind, object-oriented, or it's not related to a certain --

**Pia Wiedermayer:** \[00:16:09.09\] No.

**Gerhard Lazu:** Okay. So if we substitute a super-class object reference with an object of any of its sub-classes, the program should not break. So super-class and sub-class. If you replace the super-class with any of its sub-classes, the program will not break, because the behavior is supposed to be similar. Is that what you think, or do you think something else?

**Pia Wiedermayer:** It sounds pretty much like this, but there is an official name...

**Gerhard Lazu:** Yeah, let's find it. Black box testing technique. Okay, that's interesting... Partition testing. Okay...

**Pia Wiedermayer:** So the first entries - I think it's similar to what you've just explained.

**Gerhard Lazu:** Yeah, maybe. So the equivalence partition - a subset of the value domain of a variable within a component or system in which all values are expected to be treated the same based on a specification. Okay, interesting. How did we end up with this term? I'm curious. You were giving examples of good techniques to apply, I think...?

**Pia Wiedermayer:** Yes.

**Gerhard Lazu:** ...and you were giving this as a good technique. So you were mentioning about the boundary, something-something?

**Pia Wiedermayer:** Yes, boundary value analysis. When you're in the testing area, then that's also something. So when you say, for example, between 5 and 10, this happens. So 5 would be at the boundary, and then 4 is below, and 6 is above. So that's also a testing technique.

**Gerhard Lazu:** I see. Okay, so boundary value analysis and equivalence partitioning testing. So when you have a large pool of test data, you can't test all the combinations, and then you select a subset of that.

**Pia Wiedermayer:** Correct.

**Gerhard Lazu:** Okay. That makes sense.

**Pia Wiedermayer:** So you have those classes, or these techniques, and that's super-helpful, because usually -- I mean, you cannot and it doesn't make sense to test all combinations.

**Gerhard Lazu:** It's not practical, yeah.

**Pia Wiedermayer:** So that's super-helpful. And that's basic stuff I thought my developer colleagues know. But they don't. A lot of them don't. And it's super-cool, when I tell them and say "Listen, let's add here boundary value tests, and also let's check the negative value", and then they're like "Wow, that's so cool. That helps so much. That's cool!" It also makes me happy, because I thought it's basic stuff.

**Gerhard Lazu:** Of course, yeah. You'd think of course other people know what you know; I mean, how do you mean they don't know something that you know...? \[laughter\] I think it's like the Dunning-Kruger effect; I think there's a little bit of that there.

**Pia Wiedermayer:** Yeah. I hope not too much... \[laughs\]

**Gerhard Lazu:** Not too much, right. It depends where you land on the scale.

**Pia Wiedermayer:** Yeah.

**Gerhard Lazu:** The point being that experience plays a huge part in this, and you were alluding to that earlier, where you were saying that you can draw on your previous experience to know what to apply when, based on similar situations in the past... And you have a good starting point, so you have a feeling of "Okay, I think we should start here, and then let's just see what the context requires us to do." But many people, even though let's say they may know all these techniques, it's the experience that comes with it to know what to apply when, why, and how to combine those things. Because once you start combining, things start having unique test suites, which - it's very difficult to reproduce them across projects. But your experience - you can draw on that and say "You know what - this requires that", and you can already see the things which are being pulled in based on the starting point. So that makes a lot of sense to me.

Okay, what would you say to someone that doesn't want to test? They think that tests are a waste of time. Have you met such a person, such a developer?

**Pia Wiedermayer:** Yeah... Unfortunately, yes.

**Gerhard Lazu:** Okay, and what did you do? \[laughs\]

**Pia Wiedermayer:** \[00:19:53.19\] They are out there. They are not as many as they used to be. I'm happy about that. But still, there are some people. A lot of people have -- you know, everybody's proud a little bit, more or less... So sometimes it works when you ask people "Yeah, but don't you have some kind of... Anspruch an deine Arbeit."

**Gerhard Lazu:** Like a responsibility towards what you do... Like, what do you call that? The professional duty; not the fiduciary... There's a specific word that people use. I'm blanking out now as well. I think some would call it professionalism, and that's all-encompassing. It says "Aren't you a professional? And if you're a professional, why wouldn't you do things to the best of your ability? Why wouldn't you go beyond what you think is acceptable and go to what we as a team think needs to happen?"

**Pia Wiedermayer:** I try to reframe it...

**Gerhard Lazu:** Dictionary?

**Pia Wiedermayer:** Yeah, I looked in the dictionary, but it doesn't find the right word. I ask people, "Don't you have some kind of quality standard to your own work?"

**Gerhard Lazu:** Right.

**Pia Wiedermayer:** So how do you know that you've done it correctly, and that whatever you developed works as it should work? And then I had some situations where they told me, "Yeah, but you will be testing it. So you will tell me."

**Gerhard Lazu:** Ah, I see.

**Pia Wiedermayer:** And this changes...

**Gerhard Lazu:** I see where you're going with this. I think some people call it craftsmanship; so don't you have that craftsmanship to your work? Shouldn't you hold it in high regard, and shouldn't you be proud of what you do, and do it (again) to the best of your abilities, but in a way that goes beyond the bare minimum?

We're not aiming for bare minimum. We're aiming for that high bar, which we may not achieve, but we will try to go as high as possible. And part of that is me doing the best I can, including exceeding my own abilities. If I have to learn something, I'll go for it. And if you're trying to teach them something, they should be at least receptive to what you're trying to tell them. And they'll say "No, I don't write tests."

Okay. So how well did that work in practice? You told them this, and what did they say? What was the response? Did it work, is what I'm asking.

**Pia Wiedermayer:** Most of the times it works, but I couldn't convince everybody.

**Gerhard Lazu:** But it catches the majority, so that's a good enough --

**Pia Wiedermayer:** Yeah.

**Gerhard Lazu:** ...approach to take.

**Pia Wiedermayer:** Very often, people - especially when they are doing this job for a long time already, it's strange to them that I don't wanna be the one telling them "This is not good, and this is not good..." That I wanna support them earlier in the process. So they need to also change their mind in that regard and see that "Ah, okay, that role of the tester or the QA person changes." They also need to be open to that, and it works. As I said, most of the people are open to that, and then when they made the first experiences with that new way of working together with testing people, then they are happy, and they really enjoy that way of working.

**Gerhard Lazu:** Okay.

**Break:** \[00:23:04.18\]

**Gerhard Lazu:** So I'm curious now, what is the connection between a good test suite? And we'll come back to this later, what it means to have a good test suite, which includes all the things. Or test suites, plural. Everything that -- is it called test in a system? How would you call that thing, by the way? All the unit tests, all the integration tests, all the system tests, black box tests...? Anything.

**Pia Wiedermayer:** Yeah, I think it's our test repository, our test library...

**Gerhard Lazu:** Okay. So imagine that that works well, and you have a good test library. What is the relationship between a good test library and deploying software, shipping software?

**Pia Wiedermayer:** That's very good, yeah. I was waiting for that.

**Gerhard Lazu:** Okay. \[laughs\]

**Pia Wiedermayer:** The connection is very important, because I really like how things changed in the last years with this whole dev ops movement, and people wanna automate stuff more, and have less manual steps when it comes to testing, deployment, all that stuff... And to me, it's important to have a good test library across all different test levels; so from unit test, to end-to-end. And then, looking at our deployment pipeline, we need to think "Okay, where?" Because usually, you will have more than one environment. So you don't just code on your machine and deploy to production. I hope not.

**Gerhard Lazu:** Why not? Because I think you should. I think if you're not doing that, something somewhere is not as good as it should be. If you have that full confidence in what you write and what you build, and you make small changes, and you keep constantly shipping them out into production... So what is the smallest change that I can make which moves this in the right direction? Whether it's a feature, whether it's a fix, whatever it is. It doesn't really matter. You're trying to learn something. How can I get it out there as soon as possible, so that I see that it actually works? Because it's the combination of all the things, which maybe it results in it not working. And the sooner you find that out, the smaller the change, the better you chances for finding the improvement. What would make this better? "Hm... It didn't work the way I thought it did. The tests are green, everything worked, but it still doesn't behave correctly. So what am I missing? What do I need to learn here?" You can only do that in production. Anything else is like a pretend. You know, staging... Everything's fine, everything's fine... And the longer you wait until you get into production, the more difficult it is for you to realize "Well, where is the delta?" Because there are so many steps.

But anyways, that's my thinking... And I welcome a different opinion, because I want to learn why that is. I want to figure out what the delta is, what am I missing.

**Pia Wiedermayer:** So my wish is -- also, I'm completely with you, that what you've just described is possible. That would be great. Just looking at my experience and where I am right now, I wouldn't take that risk. We have a lot of homework to do --

**Gerhard Lazu:** To get there.

**Pia Wiedermayer:** ...to clean up, to get there. But that should be absolutely the goal, so I'm completely with you. But looking at let's say a bigger project... Most of my projects were in financial institutions, and big projects... So when we look at those projects and applications we developed there - we have a lot of dependencies, there is a lot of risk involved... And as I said, if you make mistakes and you have incidents in production, severe ones, then also reputation is a topic.

So coming back to this, okay, how should we combine our test library which we've designed and built up very clever, and smart, and combine that with our deployment - then it's important to me that we think about "Okay, which tests do we wanna have, where, on which deployment executed? Where do we wanna have hard quality gates?" So like "You cannot deploy when certain tests are red." Which things are acceptable...

\[00:28:19.15\] So we need to define, as a team, and always be aware of "Okay, what risk is behind?", so in the end we build the process -- until we come from the developing machine to the production most efficiently, and find as much as possible before we go into production and then have some reputation issues when it's \[unintelligible 00:28:41.23\]

**Gerhard Lazu:** Have you ever been part of projects where even though all the sign-offs and all the process was okay, failures still happened?

**Pia Wiedermayer:** Oh yeah, sure. \[laughs\]

**Gerhard Lazu:** So what happened afterwards? What happened when everybody did what they were supposed to do, and there were still issues? What happened afterwards?

**Pia Wiedermayer:** So two different things I've experienced. The first, which I really don't like, is finger-pointing. So who's responsible for that? Who didn't do his/her job correctly? I really don't like that. For example, some years ago when I was a test manager and having to give the sign-off - yes, we did our tests, and from our side it looks good etc. we can go into production... And then, day one in production, some severe incident popped up; then my boss came to my desk and said "Pia, why haven't you tested that? What's wrong with you and your testers?"

**Gerhard Lazu:** What did you do then? I mean, that's a very -- I'm not sure what word to use, because it's a really important one, and I want to get this one right... So first of all, it's a very unfair situation to be in. It's very narrow-minded to approach it like that; it's unfair towards you, it's unfair towards the team, because everyone is trying to do their best, and if we made a mistake, it was an honest one. We're not trying to sneak bugs in, right? Our job is to find them. And sometimes we don't. And that's normal, it happens.

A person that doesn't see things that way, I would call them narrow-minded, and maybe not as experienced as they maybe should be, or claim to be, or want to be. What did you do in that situation? What did you say? Do you remember?

**Pia Wiedermayer:** I don't remember what I said, but I tried to protect my team, and go back and see "Okay, maybe we really missed something. Maybe it could be the tests on our side can be/should be improved", but also, I reported back to development, business analysis, whoever I could get in touch with, I tried to listen how can we prevent that in the future. I tried to not take it too personally... But yeah, there is a reason that I don't work for that company anymore.

**Gerhard Lazu:** Right. Okay.

**Pia Wiedermayer:** That's one of the reasons. \[laughs\]

**Gerhard Lazu:** Yeah, that's one solution. \[laughs\] "You know what? No, I'm not going to put up with this. I'm walking out of here, because that's not how it should work. And if you don't get it, I'm not going to explain it to you. I'm in the wrong place, so thank you very much, bye." Okay, that's one way of approaching it, for sure.

So I like how you think about this as the whole team is responsible. It's not a person's responsibility. Yes, you will have more experienced people and more senior people, and you'll have maybe people that can see a few steps ahead... But those people will know that mistakes will happen. And I think it's not about not making mistakes, it's about building resilient systems that in the face of mistakes they will be able to handle those issues as best as they can. Obviously, every system has a tolerance limit; it's not indestructible or undeletable. There may be some downtime, or there may be some data loss; it will happen at some point, and we try to build redundancy in as much as we can... But systems should be resilient, so that at the first failure they don't just fall over. And obviously, we can't foresee all the things, and we learn all the time... But optimize for learning. Optimize for recovering from failures really quickly, that maybe only a subset of users are affected. And then you replay some data, and there's no data loss, because you have multiple redundancy. There's a temporary data loss, but not a permanent one. You can recover.

\[00:32:32.09\] So what are your thoughts on that? What are your thoughts on resilient systems, on building resilient systems? Not that they don't fail, but they can tolerate failure well; and when there are mistakes - because there will be - they won't fall over.

**Pia Wiedermayer:** Yeah, very good point... But let me just --

**Gerhard Lazu:** Sure.

**Pia Wiedermayer:** ...one thing to the previous question. So the second situation I've experienced when we have failures in production it's the different thing, like "Okay, team, how can we improve how we can prevent that? Whether we as a team, as humans, what can we do?" Really this inspect and adapt approach - I think that that's super-important. And not finger-pointing. Just believe that everybody did his/her best. As you said, we don't wanna just sneak in bugs just because we think it's funny.

So that's one thing which I think is super-important, just the belief that everybody does his/her best. And then also, what you just said, building our system to be tolerant as good as we can. And think about how can we do that.

I just had yesterday or the day before a discussion with a colleague in my current team, because we were analyzing some issue last week, and it took us so many hours in our team... And in the end, first it wasn't in our area, so another team had to take over, and they also took ours; that's a different story. But in the end, we found out the logging was just not there, or not helpful the way it was implemented, so that's why it took us so much time to find out more or less where the issue could be. And then still, we had to give it to another team, because it was in our responsibility.

So I think that that's very important, to think about "Okay, what do we do if things are down, if there are errors?" We wanna know that before the user calls support. We wanna make sure that we have good monitoring built up, that we have good logging, which provides meaningful logs to us... And yes, have this resilience that if something is down, that the other server takes over. It's a combination of the team trying to improve as humans and as a team together, and the technical part, so what can we do there. The combination of both hopefully helps us to have more resilient systems.

**Gerhard Lazu:** I see. Do you test for that? Do you test for resilience?

**Pia Wiedermayer:** Me personally, I didn't have the chance so far, but I would be really interested in doing that... But that's a good point; probably I'll ask in my project if there is a possibility to shadow operations people when they do that. Because usually, in the companies where I've worked in, it's with the operations department, they do this disaster recovery -- how do they call it? Yeah, so they do it quarterly, something like that; usually in the banks. So I would be super-interested in that.

**Gerhard Lazu:** \[00:35:59.06\] For sure, there is that side of testing. But there's also what happens to the system when there's for example data that it doesn't expect. I have been part of teams -- you mentioned banks. A couple of years back we had security scanners, which would start throwing garbage traffic on ports that weren't expecting them. And then those services, the listeners on those ports - they didn't know how to handle that data, and they would crash, because they weren't resilient to garbage data. No one was expecting that something on that port would start sending random data. And those security scanners, every Saturday when they would run, they would do that. So systems would be crashing every Saturday, and who wants that...? Everybody's away, they're off, and they have to be paged, because the systems are crashing every single Saturday. It was just maddening.

It took them a few months to figure out what the problem was, and it took us, because we were part of it as well... So I'm wondering about those sorts of tests, where the systems are receiving unexpected inputs, unexpected data... Something that you don't expect to happen happens, not necessarily from an operational perspective, but from a code perspective.

**Pia Wiedermayer:** Yeah. Also here - I haven't been doing that yet, but I also would be super-curious... I called testers specialized in those areas, like security penetration testing, some random data, that stuff, I've called those people into one or two of my past projects, but unfortunately, at that point in time it was more like a box we needed to check. So that was in this company where also myself, I was at the end of the process, and then there came this time when it says "Yeah, we need to have some security tests performed." That's the way it worked, yeah.

**Gerhard Lazu:** That's why those situations - I know them, because they are very difficult to troubleshoot, because they happen so far down the line that people don't even know what is happening. Like, there's this thing, no one understands it, there's maybe ten layers, ten different systems, no one even knows what they are, and there's a behavior that no one can explain. Good luck digging. Good luck exploring what the hell is going on. And it takes you a few months to figure it out, because as you know, those systems are really complex in banks. There's layers, and layers, and layers... And sometimes you are not even allowed to know what those layers are, and that makes it even more challenging. You don't have the security clearance to go beyond a certain level.

**Break:** \[00:38:24.13\]

**Gerhard Lazu:** So I'm wondering, Pia, when you think about a good test suite, what do you imagine?

**Pia Wiedermayer:** I imagine - and some of our listeners probably know it - a pyramid, and there is this automation test pyramid. But for myself, it doesn't have to be -- the automation test pyramid is just a test pyramid. And we have all the different test levels in there, so starting down below with the unit tests, and then go up to integration tests, and then it comes system tests. Then, most of the pyramid pictures end, so that's it.

My pyramid has on top something called system integration. That's where you really integrate your application with all the surrounding stuff. Because I told you, I mainly worked in big projects, for big organizations, and there you have a lot of dependencies. And people tend to forget that. Although if you mock stuff before, by surprise - well, it doesn't surprise me - when you then really integrate with the real interfaces, then things just crash, or don't work the way we think they do. On top of that, I would mention end-to-end tests. So this is more like when you look really from a user perspective, going through what is our user doing with our application.

**Gerhard Lazu:** So you imagine the pyramid, as you mentioned, of different layers of testing... What about how many tests you should have, or how long they should take to run, all of them?

**Pia Wiedermayer:** So how many, looking at the amount, it makes -- and that's why it's a pyramid; it should stand for the amount of tests you have in each level. So the most you should have down at the unit test level. They are cheapest there, and whatever combinations you can test there, you should do that on that level. And they are super-fast. And then going up, you get less and less tests, and really focus on what has not been tested before. What really makes sense to test on the upper levels.

And how long they take - like everything, we can automate, or where it's useful to automate, I would go for that... Because that should be faster than a human. If it's not, then if you look at some UI end-to-end automation, if that takes longer than myself clicking through it, then something is not good with that test. So we should rethink if that really makes sense to automate, or if we really need that test.

So I wouldn't go for automation just for the sake of automation. But on the lower levels, absolutely. And then I expect the tests to be fast.

**Gerhard Lazu:** Okay. So how long do you think they should take to run all of them, end-to-end? All types of tests; the whole test suite, that's how I refer to it. I refer to it like the whole test suite. Unit tests, integration, end-to-end, system integration - all of it. Manual, if you have manual...

**Pia Wiedermayer:** \[00:44:09.20\] Let's say we have some manual tests, because I haven't seen it without any manual tests. If there were no manual tests at all, then usually we found stuff in production. Severe stuff.

**Gerhard Lazu:** Okay.

**Pia Wiedermayer:** So let's say we have some manual tests... It would be great, let's say - my wish, half a day, all in all.

**Gerhard Lazu:** Half a day, okay. So if the tests take half a day to run, if we use that... So first of all, do they run before you deploy to production, or after you deploy to production? And I kid you not, some teams test after they deploy to production. It happens. Or at least I've seen it happen.

**Pia Wiedermayer:** Yeah. I would have them running before production. But from my experience, it makes sense to have certain kind of smoke tests after you deploy to production...

**Gerhard Lazu:** Okay, okay.

**Pia Wiedermayer:** ...just to double-check. Because I haven't seen a test environment really being a twin of production.

**Gerhard Lazu:** Yeah. It doesn't happen, you're right. I haven't seen it either. Maybe it exists, but... Yeah, I don't know. Okay... So to me, or to us two, it doesn't exist. That makes sense. Okay. So if the tests take half a day to run, most of them before we deploy to production, that means that we can only deploy twice a day at most. I think I would say once a day, because I don't think you run the tests as soon as you come in. So the thing which I'm trying to get to is that to me sounds very long. Because if it takes that long, that means you're only deploying once a day, at most. What about deploying once every two minutes, or five minutes? I mean, there's no way you can do that, because if the tests need to run, they take half a day, it's impossible.

**Pia Wiedermayer:** I would love to see that. So don't get me wrong, that would be awesome, if we come there.

**Gerhard Lazu:** It would be a dream, yeah.

**Pia Wiedermayer:** I would love it. When I say half a day, this is already quite --

**Gerhard Lazu:** Fast.

**Pia Wiedermayer:** Yes. Because what I've seen - and I think a lot of organizations have to clean up a lot of \[unintelligible 00:46:05.24\] Looking at test data, infrastructure, all that stuff; all that in combination slows down our tests, our pipelines. and again, from my experience, it always makes sense to have at least a handful of manual tests, which you don't wanna automate or you cannot automate. I've seen both. That's also a factor, where it's like, "Okay, it takes some time for a human."

**Gerhard Lazu:** I'm curious, can you give me an example of a test that you cannot automate? And I'm thinking about like a real world one. One that you ran, that you could not automate.

**Pia Wiedermayer:** That's a tough question.

**Gerhard Lazu:** I know. \[laughs\] You can take a rain check on it, if you want; we can skip it, it's not a problem. But I'm genuinely curious. It's not a trick question, I'm genuinely curious about tests that you couldn't automate, and why; why couldn't you automate it.

**Pia Wiedermayer:** Couldn't is maybe the wrong word. Maybe it wasn't -- you know, the effort it would have taken to automate it instead of having a human doing it... It was cheaper to have a human doing it.

**Gerhard Lazu:** Yeah, so that's the test which I'm trying to understand; what is that test that is cheaper to have a human doing it. What specifically was making that test hard to automate? Or not worth it; like, it just didn't make sense. It was not feasible to automate it.

**Pia Wiedermayer:** When you have a whole workflow, when you go from one application to the other, not all tools are able to handle that. So that was one thing I've experienced - as long as you have your web app and you're only in that browser, everything is fine. But as soon as you need to, I don't know, maybe prepare something before in your CRM, which you have as a desktop application, and then you take that data and go to your browser - not a lot of tools can handle that. Or the tools that can handle that are very expensive. So that's one thing.

\[00:48:05.14\] Then dealing with unexpected behavior on the UI. So a human just reacts spontaneously, according to the situation, and the robot just waits for some button and just runs in a timeout because that button is not there, for example.

**Gerhard Lazu:** Right.

**Pia Wiedermayer:** I made that experience, I wanted to automate stuff on the UI, and I was so disconnected to development... And although I told them that I need unique identifiers for the buttons, for everything, they just changed the stuff, and then you know, my automation always crashed, because it didn't find that button anymore.

So it's not you cannot automate, but it's just so much effort to maintain, and I'm so much faster when I do it myself. I think it's not about cannot automate stuff, but does it make sense at that point, here, looking at effort, costs, how often do we need that test...? Is it one we wanna execute with every deployment, or do we only execute it once per quarter, or so?

**Gerhard Lazu:** Okay. So the way I understand it, it's more about systems. It doesn't matter what type of system it is. Systems that are not built to be testable, in that the testing is an afterthought, it's something that happens at the end. And if stuff breaks, and testing breaks, it's not my problem. So I can see us coming back to the beginning, where if testing and quality is not on everyone's mind, then testing becomes so expensive that it's maybe not worth doing, because the system just works against it, it's hostile to testing. I would call it hostile systems to test; who wants to do that...? And not only that, but how expensive is it to maintain that test suite, which keeps breaking, because the application doesn't care about testing, and the tester goes like "You know what - it's just easier to click buttons. I'll be able to respond much quicker than to change my code to test something which I don't know how it's going to change." Okay, so that makes sense.

Now, it's very -- I don't wanna say sad, because it's unfortunate; that's the one word that I would use... It's frustrating; I can feel some of your frustration that we were touching on earlier, when you are working with teams that see things that way. Obviously, they have to go through a process as a team before the system is easily testable and the tests are of a high quality... Because there's also something to be said about the quality of tests, not just the quality of a system. They are sometimes related, but not always.

Okay. So now that we are talking about bad tests, and bad test suites, and hostile systems, I'm sure that you have a couple of great examples to give us, of systems which were horrible to work with from a testing perspective. What did they look like in practice?

**Pia Wiedermayer:** Well, first off, when me as a testing specialist I join a project, a team, and I come there, usually they have some kind of test suite already in place... And very often I see the test pyramid being upside down. So you have a lot of manual, end-to-end tests... I've seen calculations tested on the UI by a manual tester... It just doesn't make any sense, but that's the truth unfortunately. And I've seen systems where there were no unit tests, at all. Nothing.

**Gerhard Lazu:** Wow.

**Pia Wiedermayer:** Yeah. And then if there were some unit tests, then they were not transparent, so that testers were distracted from development, so they had no knowledge about what has been tested already by developers. So they just tested everything again. I've seen that far too often. But it's getting less and less, I'm very happy about that. And other things where I try to -- you know, I didn't want to do repetitive stuff. I don't like that. That's boring. I wanna use my brain for the interesting, for the tricky stuff...

\[00:52:11.14\] So I wanted to automate my -- you know, the regression tests I did for every release, over and over again, so I wanted to automate them on the UI. And then - yeah, UI was unstable, and the agreed identifiers which I used for automation, they just disappeared... Yeah. So the developers, they didn't care, or they just forgot about informing me that things changed... And yeah, it's like you said before; it's just not built for testability.

**Gerhard Lazu:** If you do test-driven development, you know it. And if you don't, you may not know it, but others will, including your end users. Stuff breaks all the time, and people are so fed up with it; like, nothing works. Or if it does, it sometimes works, depending on the day, if it rains. It works if it doesn't rain, or if it doesn't snow.

How did you improve the situation of codebases where tests were an issue? What are the first three steps that you take with those teams, and with those systems?

**Pia Wiedermayer:** I tried to get developers and testers on one table, and really discussed about "Okay, where do we find out the status quo, where do we stand, and find out what is our test coverage? Do we have tests? Where do we have tests? And the tests we have, do they make sense? Because I've also seen projects where you just have tests to fulfill some coverage, but they don't mean anything... So I digged in -- in one of my former projects I really sat together with developers, we rotated, every second day a different one had to sit together with me and go through another part of our system, and really dig into the codebase and see "Okay, what do we have, unit tests, in that area?" And it took time, but it really improved so much our understanding of where we stand, where we had gaps, so we could fill them up. And I, in the end, I could reduce most of my manual test cases because I had that transparency, I knew exactly what they already tested on the lower levels.

**Gerhard Lazu:** Yeah. So I have an interesting question... Or at least I think it's interesting. Do you enjoy deleting tests more, or writing tests? What do you enjoy more? Deleting a bad test, or adding a test which is missing?

**Pia Wiedermayer:** Deleting. I love it.

**Gerhard Lazu:** Why?

**Pia Wiedermayer:** Because I wanna focus on the stuff that makes sense, and not repeat things just because I don't have a good feeling. I wanna have this transparency, and when I have that, then I'm super-confident with just deleting.

In my former project, where I could get rid of a lot of manual tests, there were other teams; and every team, they also had their testers. And the other testers were like, "Are you crazy? You cannot just delete that." I'm like, "Sure I can." And if it doesn't work out, if I delete too many tests, then we'll find out as a team, and then we will improve. But we together take that risk. And I now click the delete button and that was so -- ah, that was a great feeling. I love to do that.

**Gerhard Lazu:** Yeah, I think very similarly about that. The things which you don't get to do, or the things that you get to remove oftentimes it's so much better than the stuff that you add. What is the simplest thing that I can get away with? And do I need this? And if I don't need this, I just get rid of it. Why have it around? It's a liability. Those four or five lines - it doesn't matter how many it is, it's just a liability.

What is the worst test that you ever came across in your career? Do you remember it?

**Pia Wiedermayer:** I have some examples...

**Gerhard Lazu:** So it's more than one, okay. I like where this is going. \[laughs\] Do tell.

**Pia Wiedermayer:** \[00:55:55.27\] For instance, there is a test library, we have feature files, so we have test scenarios written in Gherkin syntax, and it's not only one, unfortunately... But you know, Gherkin syntax is quite simple; it's given, when, then. So you have given/when. That's it. So I was wondering, "Okay, where does that test go to? What should that do?" \[laughs\]

**Gerhard Lazu:** I see.

**Pia Wiedermayer:** And then I thought "Okay, there is some kind of--" It gets even better. There is some kind of manual description for that in a different test tool. So in case that automation fails, if you wanna play it through manually, you have a description somewhere else. And then I went to that other tool, and then I looked at this manual description, and there was not even a step. There was only the title. So it's a complete placeholder. It didn't help me to find out what that test actually should do.

**Gerhard Lazu:** Right. So there was a mystery test that you didn't know what it was supposed to do, it was there... Did you delete it?

**Pia Wiedermayer:** Not yet. But I will.

**Gerhard Lazu:** Okay, great. That's great. \[laughs\] So a test that tests nothing is one of the worst tests that you can come across, right? Because it just occupies mental space, and it adds no value whatsoever. Okay, so that means that if you were to write a test like that, that doesn't test anything - don't do it. Don't add it. Or do, knowing that someone will delete it and they will feel good about it... So I'm not sure which way this can go, but... \[laughter\] An eternal optimist; that's how you think. You can take even like a bad situation and make it a good one. Okay.

So as we prepare to wrap up, what would you say is the most important takeaway for our listeners from this conversation?

**Pia Wiedermayer:** Looking at all techniques and frameworks and tools we have nowadays, they are all super-cool. But to me, in my experience, it's the people in the end who make the product a success, the project... If you don't have the right people in your team willing to really work together as a team, then the best automation tool or whatever framework can't help you.

**Gerhard Lazu:** That's a great one. Okay. That definitely resonates with me, so thank you for sharing so many great insights with us, Pia. I look forward to your next presentations. Is there a conference that you'll be presenting to, or that you want to present at? I know that dev ops Zurich is coming up, so that's why I ask... Did you submit your CFP?

**Pia Wiedermayer:** No, that's on my list for next year, because the week after I will be at the EuroSTAR in Copenhagen. That's the biggest software testing conference in Europe, and I'm super-excited; I will be talking about "From waterfall testing to agile quality assurance."

**Gerhard Lazu:** Oh, okay. Okay. Interesting. Will it be a recorded one?

**Pia Wiedermayer:** I hope so. I don't know. But it's planned to be on-site, finally. I hope that it will work out. And if there will be a recording, I hope I can share it, because I think it's interesting for also everybody not being at the conference.

**Gerhard Lazu:** Yeah. I'm looking forward to that. Thank you, Pia, for joining us today, and I'm looking forward to next time. Thank you.

**Pia Wiedermayer:** Thank you so much!
