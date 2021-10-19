**Adam Stacoviak:** Four years ago... Four years ago we talked to you. And since then, you have literally blown up in many good ways.

**Jerod Santo:** Now, if he literally blew up, wouldn't he have exploded, and his guts torn out...

**Adam Stacoviak:** Okay, figuratively literally... Jerod's always my word police...

**Jerod Santo:** I always do that to him.

**Adam Stacoviak:** He is.

**Jerod Santo:** Although technically, you're right. Literally, it can mean the exact opposite.

**Adam Stacoviak:** Right. Well, it depends what dictionary, right? In this case, blown up meaning that -- let's start over again. Gosh...!

**Jerod Santo:** I was digging that flow.

**Adam Stacoviak:** Oh, you were?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Alright, we'll keep it then. We'll keep it. If Jerod likes it, we'll keep it. But seriously, four years ago we've had a conversation with you. A much different freeCodeCamp today than four years ago. What are you doing that's so great? What are doing that's so well that it has gotten you to where you're at? Not just you, but the rest of everyone. The contributors...

**Jerod Santo:** We were pretty skeptical, were we not? I mean, we tend to be, at times, skeptical...

**Adam Stacoviak:** We're paid to be.

**Jerod Santo:** Yeah, we're paid to be skeptical... Well, there's lots of stuff that comes out, and certain things last... I think we were talking about that earlier, in the other show. By the way, kind of a companion podcast going on right here, so definitely listen to the other one as well. Links will be cross-posted.

**Adam Stacoviak:** That's right. Show notes, check them out.

**Jerod Santo:** I mentioned that lots of stuff hits our radar, and some things last and other things don't... And I know one of the things we were talking about then, four years ago (links in the show notes), the original Quincy Larson episode -- apologies, by the way; it took four years for us to get you back. It should have been much faster...

**Adam Stacoviak:** Yeah, we usually have the be-backs back sooner.

**Jerod Santo:** ...but you're still here. You've blown up, you did not fail to sustain...

**Adam Stacoviak:** So now you agree he blew up...

**Jerod Santo:** I do.

**Adam Stacoviak:** Okay, good. Well, I think the difference though, if I'm guessing, is that then it was just one pillar.

**Quincy Larson:** Right.

**Adam Stacoviak:** Now you've got many more pillars, or at least a plan for more pillars...

**Jerod Santo:** Lots of things have happened.

**Adam Stacoviak:** How does that work?

**Quincy Larson:** Yeah, so 2014, almost exactly five years ago, we launched just the curriculum itself. We had a chat room, and people coming to freeCodeCamp. They'd work through the curriculum and they would ask questions in a chat room... Which was originally HipChat, then it was Slack, and then it was Gitter. We still use Gitter, but now the main thing is the forum. So the curriculum was the original pillar of freeCodeCamp, and now we have a second pillar, which is the forum, which is growing really rapidly, and we've got a lot of exciting things going on there that I could talk about. And then the third pillar is the publication, freeCodeCamp.org/news.

**Adam Stacoviak:** Do you find it interesting that forums are cool again?

**Jerod Santo:** They were always cool.

**Adam Stacoviak:** \[03:59\] Or coolish... I mean, to some degree.

**Quincy Larson:** Yeah.

**Adam Stacoviak:** I think social networks --

**Jerod Santo:** Aren't forums kind of the quintessential community of the internet, to a certain degree...?

**Adam Stacoviak:** Yes, but then you've got social networks, and you've got groups within those networks, so it's like - what is truly a forum?

**Jerod Santo:** Sure.

**Adam Stacoviak:** You're saying, in this case, a literal forum, right?

**Quincy Larson:** Yeah, a self-hosted place where people can have threaded discussions over long periods of time, that's indexed by Google, that has its own search tools, that has accounts, that has moderator tools - all those things where the organization who's hosting that forum has control.

**Jerod Santo:** Complete control.

**Quincy Larson:** Yeah. If you contrast this with like a SubReddit, or if you contrast this with a Facebook group, a forum gives a lot more power to the organization. And that also means that the data stays on that server, with that organization. It's not being used for advertising.

**Adam Stacoviak:** Yeah. I'm curious how you host it. What do you do?

**Quincy Larson:** We use Discourse, which is a really popular forum tool created by Jeff Atwood and his partner Sam... I can't remember Sam's last name.

**Jerod Santo:** Saffron.

**Quincy Larson:** Sam Saffron, thank you. And they are really solid developers...

**Jerod Santo:** They are.

**Quincy Larson:** ...and they also know a lot about online communities, with Stack Overflow being one of the bigger ones... So a lot of the same defaults that they bring to the table are what we use. So yeah...

**Adam Stacoviak:** What about literal hosting, though? Like, do you host it yourself? What's your architecture?

**Jerod Santo:** AWS, or...?

**Quincy Larson:** It's a Docker image, and we have it on Digital Ocean.

**Adam Stacoviak:** Gotcha.

**Quincy Larson:** We publish this whole visualization of freeCodeCamp's architecture, and Discourse supports our instance, so they pay the $80/month for us to have a hosted Digital Ocean.

**Adam Stacoviak:** I see.

**Jerod Santo:** Cool.

**Adam Stacoviak:** I was asking that because Discourse does have like a service version, right?

**Quincy Larson:** Yes.

**Adam Stacoviak:** So you're not hosted by them. You host your own, but they support it.

**Jerod Santo:** They support it.

**Adam Stacoviak:** Gotcha.

**Quincy Larson:** Well, in the sense that every six months there's some huge thing and I start messaging them on their own Meta Discourse...

**Adam Stacoviak:** "Can you fix my thing...?"

**Quincy Larson:** Yeah, like "Hey...!"

**Jerod Santo:** Yeah, exactly.

**Quincy Larson:** Yeah, and we have SSH access, but if there's something catastrophic, we can ask them \[06:09\] flip the switches.

**Jerod Santo:** Right. So the buck doesn't stop at you in terms of the -- you host it, but you've got help.

**Quincy Larson:** Well, freeCodeCamp, the forum, is one of the bigger ones. I think there are probably some bigger -- I know Blizzard, and Apple...

**Adam Stacoviak:** Describe big.

**Quincy Larson:** We're getting about five million views a month on the forum.

**Jerod Santo:** Nice.

**Adam Stacoviak:** That's pretty big.

**Jerod Santo:** And I assume that's a lot of recurring -- I mean, there's lots of conversations, forum hits, some people are just googling and they find a solution in a forum, but there's a lot of people that are actually actively part of the community, posting answers and posting questions on the daily.

**Quincy Larson:** Yeah. At any given time, there might be 60, 80, 100 people logged in using the forum.

**Jerod Santo:** Let me go back and clarify the skepticism... Because it wasn't that we were skeptical of the concept, or the idea of freeCodeCamp. It was really just like the "Will it continue to last?" Because you're a nonprofit, there's lots of startups that are also nonprofits; they don't want to be nonprofits, but they are... But we talked about the sustainability of you pouring yourself into this; we didn't know, it was pretty new at the time... All you had was the curriculum, and it was like "Is this gonna be around five years from now?"

**Adam Stacoviak:** Right. You were also putting a ton of time in too, and it seemed like a lot of work... And every time you see those things, it's just a recipe for, maybe...

**Quincy Larson:** Yeah, for burnout.

**Jerod Santo:** Yeah, exactly.

**Quincy Larson:** Or goat farming in the resume.

**Jerod Santo:** Right. But you're still here, you're still standing, so I guess that's maybe the question--

**Adam Stacoviak:** Not even standing, he's thriving.

**Jerod Santo:** Fair enough. Striving - what's working, how did you get to this point? You have probably a team, I know you have lots of people that are working on it, so...

**Quincy Larson:** Absolutely, yeah.

**Jerod Santo:** So what did you figure out that way?

**Quincy Larson:** Well, the last time I was on, you two were both asking lots of very...

**Adam Stacoviak:** Similar questions?

**Quincy Larson:** ...good questions about sustainability, because...

**Jerod Santo:** \[laughs\] As we do...

**Quincy Larson:** \[07:53\] Yeah. And since you've had the whole Request For Commits series, which is phenomenal, and I recommend everybody check it out... And I listened to that, and Nadia Eghbal and Mikeal Rogers... And that was really helpful for me as well, just thinking about open source and sustainability. Since I visited, we finally got the 501(c)(3) status, which is the U.S. government's tax-exempt status code. It's the same one that Doctors Without Borders and the Red Cross and all these big NGOs have.

**Jerod Santo:** Right.

**Quincy Larson:** So now, if you donate to freeCodeCamp, you can deduct it from your taxes. And we ourselves don't have to pay taxes, which is a huge savings.

**Jerod Santo:** Absolutely.

**Quincy Larson:** Yeah, it makes a big difference. So we were able to shift from just selling merchandise, which was the only way we were sustaining freeCodeCamp, which \*spoiler alert\* it was barely covering even servers, let alone payroll and other things... And I've put a lot of my savings into it; I've put about $150,000 into freeCodeCamp, which - keep in mind, I was a teacher and a school director. I was basically saving half of everything I owned for like ten years. That was the money that I had, and we were gonna use that to get a house, or a down payment on a house in California...

**Jerod Santo:** Did that keep you up at nights? Were you confident you were gonna find that thing that works, or were there nights where you were like "You know what - I'm just wasting my savings away..."

**Quincy Larson:** I never thought it was wasted, because people were benefitting tremendously. But I was worried that it was not gonna work out and I was gonna have to go get a job. But really, that's a very nice first-world problem to have, like "Oh my gosh, if this fails, I'll just have to go out and get a nice job as a software engineer", right?

**Jerod Santo:** But ten years of your savings gone is beyond that, right?

**Adam Stacoviak:** What he's saying is that that doesn't outweigh the risk of loss. And I guess, to some degree, the belief in what you were doing enough to keep going - which you've done - \[unintelligible 00:09:51.22\] That kind of risk, that kind of -- any fear, anything...? Were you, like, twitching?

**Quincy Larson:** Oh, yeah. It was a long-- and I had my first child about one year in...

**Adam Stacoviak:** Okay... It gets deeper.

**Quincy Larson:** And we were living in the Bay Area in a one-bedroom apartment. It was like 700 sqft. and we had a baby in there. And I was just on my laptop, all day long, every day, just crunching, trying to reassure my wife that we would pull through and everything would be okay. Now, she had a job at a tech company doing accounting, and as a result we had health insurance... So our position was already better than a lot of Americans, and we both had lots of options.

So I just wanna emphasize that we were coming from a position of great flexibility and privilege, that a lot of people do not enjoy... So I don't wanna sound at all -- because really, worst-case-scenario, I had standing offers from different companies that would probably hire me, and all those things. But freeCodeCamp was doing great, people were using it, people loved it, and I knew that we could make it work. Where there's use, there's usefulness.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So what financially made it work finally? It's working now, right?

**Quincy Larson:** Yeah, we're breakeven, essentially... So what we did was as soon as it became clear that we were gonna get our tax-exempt status; not that we actually got it quite yet, but before that, we had always been just shifting -- "If you wanna support freeCodeCamp, here. Donate money instead to Women Who Code, or donate money to Hack Club, or donate money to Hacker Dojo", or some of these other nonprofits that are helping in developer education... Because we really wanted to make sure that people were able to deduct things, and the money was going to a proper nonprofit.

\[11:48\] So once we got the nonprofit status, retroactively, all the donations to us were tax-deductible. And I remember just holding my newborn son, and holding up the certification that I got from the U.S. government, and that was kind of the light at the end of the tunnel. From there, we just worked really hard to get a whole lot of people doing monthly recurring donations to us, which is beneficial not only because a lot of people can afford $5, even $25 - we had a few people giving $250/month... A lot of people can afford that. And since it's monthly, it gives us the ability to project out a budget.

For an organization like us, we just need to be able to budget. We're not trying to make huge fixed cost investments. We're just paying for servers, we're paying for people to be working at freeCodeCamp full-time.

**Jerod Santo:** Let me throw a number at you here... This comes from your five years of freeCodeCamp post, which is on Changelog News and also in the show notes for those who missed it... More than 40,000 freeCodeCamp graduates are now working in tech, at companies like Apple, Google, Microsoft, Amazon and Spotify. Surely, many other companies as well. That's an astronomical number, 40,000. Those are people who have been certified to the program?

**Quincy Larson:** Many of them have gotten certifications. That includes everybody who's in our LinkedIn alumni network, which is like 60,000(ish) people who are working now in technical roles. Not everybody ultimately got the certification... Because if you get a job, you're a graduate. That's the graduation...

**Jerod Santo:** Well, the certification would be a means to an end.

**Quincy Larson:** Exactly.

**Jerod Santo:** Once you have the end, you're not gonna be like "Well, I really need my FCC certification. I got a job."

**Quincy Larson:** Yeah, and a lot of people get the job and then they'll come back and gradually try to finish it.

**Adam Stacoviak:** Not that FCC...

**Jerod Santo:** What's that?

**Adam Stacoviak:** Not that FCC... This FCC.

**Jerod Santo:** FreeCodeCamp. Well, of course. \[laughter\]

**Quincy Larson:** Not the Federal Communications Commission.

**Adam Stacoviak:** Just in case somebody's thinking like "FCC? Certified --what?!"

**Jerod Santo:** "Do they certify people? When were you FCC-certified?

**Adam Stacoviak:** Well, this is audio, and this is the airwaves; the internet airwaves.

**Jerod Santo:** That's right. Okay, but still, 40,000 people - that is, to me, a huge amount. What does that feel like? Do you feel those numbers, or do they get so big at a certain point that it's kind of like another drop in the bucket? I mean, some numbers are hard to actually reify in your mind.

**Quincy Larson:** Well, I'm extremely blessed, and I just feel incredibly grateful that there are so many people out there who bother emailing me or tweeting at me or sharing these stories of their transitions from working in accounting, or being a trucker, working in manufacturing... All these different fields that they've gone from, to doing software development.

**Adam Stacoviak:** That's interesting.

**Quincy Larson:** So it contextualizes those numbers. Practically, every day I get an email from somebody saying "Hey, I just was able to do this. Thanks again." And then I'm able to follow up and say "Oh, can you tell me a little bit more about how you made this transition? Can you post it on the forum?" Because a whole lot of people are in the process of trying to make this transition.

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Yeah.

**Quincy Larson:** So the numbers -- I mean, it's abstract that it's that large, but I have so many concrete examples of that every day, that drive home to me... So for me, it's a dream come true. I never would have imagined that we would have anywhere near the scale of people being able to accomplish new things and provide for their families in new ways, and actualize themselves and be creative in new ways... So yeah, it's just been a huge honor and a huge blessing.

**Jerod Santo:** One of the challenges that we've seen people facing coming out of non-traditional education backgrounds such as "I have a freeCodeCamp certification, or some sort of other bootcamp, or I'm self-taught" - that hiring process is difficult for them, for lots of reasons. One of the reasons is that companies and organizations aren't always on board with hiring. I mean, more people are looking for senior developers than junior developers, and people who are going through freeCodeCamp - it sounds like they're having success getting hired. Do you help them on that side of things, or is there community support?

I'm wondering if there's tips and tricks, or how are people having that level of success, of like "Yeah, I got through the program and I got a job", because like you said, the job is what most of us are after. So I'm just curious if the community helps on the job side, or if it's just like once you're through the program, you just are competent enough to get yourself a job?

**Quincy Larson:** \[16:18\] Yeah, it's a great question. We've kind of made a neutrality setup, where we don't specifically guide people to specific companies. We built out a job board, and we were gonna have it to where people could apply for jobs directly through freeCodeCamp, but we just thought if somebody has a negative experience, or if there are people out there who are -- you know, you read about a lot of these Silicon Valley companies that basically just pretend that they've got all this VC funding, and things like that, and then the funding never materializes, and these people will have moved to this expensive city, and basically get stiffed on their paycheck.

We didn't want to be associated with any sort of project like that, so we just decided we're gonna leave the job board stuff and the recruitment stuff to the experts, and we're just going to focus on training people. Now, we do have an interview preparation section, that has hundreds of additional algorithm challenges. We've updated a lot of the project Euler problems, Rosetta code problems, and made them interactive, with tests that you can run right in the browser instead of having -- you know, the old interface for project Euler was... It's like a 20-year-old website... But it's just like you enter a number, and it tells you whether you're right or wrong. It doesn't give you any more feedback than that, and it just takes a long time to enter it.

So rather than having to do all that coding locally and then go and type a number into a web form and see if you're right, we just modernized it and made it an interactive experience.

We've got lots of interview preparation stuff... We've also got at this point probably hundreds of "I got a job" type posts on the forum, and we've got lots of articles from people who transitioned successfully from other fields into tech, who successfully got jobs at Amazon, or Google, or other places like that, telling how they went through that process... Especially, the thing that people underestimate the most is just the sheer numbers game that the modern developer job application process constitutes.

It is quite often for somebody who's finished freeCodeCamp or somebody who's gone to a bootcamp to have to apply to hundreds of jobs. Then they'll start to get interviews, and then they'll start to get offers. But we just try to instill in people the notion that this is hard, this is not easy; anybody who tells you it's easy to go out and get a developer job - they're probably trying to sell you something... Because it's not easy.

**Jerod Santo:** That's right.

**Quincy Larson:** So we have all these resources, and we have a supportive community who's there to share in your accomplishments, and you can just read lots of anecdotes that realize the statistics that we all know - that there are a tremendous number of developer jobs, at all different levels. Certainly, there are a lot of middle-tier and senior jobs, and the senior ones are the ones where the recruiters most actively go out and aggressively try to recruit people... But there are definitely tons of small/medium-level businesses...

**Jerod Santo:** Entry-level.

**Quincy Larson:** ...that just need somebody -- you know, the church, or the local food bank, or the other organizations that wanna have a nice website, or just need somebody to help set up a Facebook group, or configure a Wix website, or something like that.

**Jerod Santo:** From your vantage point, can you see trends there, in terms of it getting -- by no means is it easy, but is it trending up in terms of the entry-level opportunities, in your opinion, or has it just kind of been like a steady churn? Obviously, this would be from your vantage point, not like it's based on numbers, but...

**Quincy Larson:** \[20:03\] So I could look at the numbers, and we do have quite a bit of data that we've made public, for the last three years; we didn't do it this year, just because we'd already done it so many times, and there was already so much data, and it's a lot of work... We did what's called "The New Coder Survey", and it shows how many -- it asks about 50 questions, and we had like 30,000 respondents, so it's a really huge dataset...

**Jerod Santo:** Nice, yeah.

**Quincy Larson:** ...significant from a statistical standpoint. And if you dig into that, you can see how many months of experience people had before they started applying for jobs, or how long they've been working in jobs, and you can sort of play with the numbers and figure that out. I don't have a really well-informed answer on that. A lot of what I hear is just at the street level people like saying that they got a job, or people saying they haven't gotten a job yet... Reality is messy, and every employer is different... Every country is different, too. European -- when I say European, that's really like a collection of a whole bunch of city states, right?

**Jerod Santo:** It's a broad brush, yeah.

**Quincy Larson:** And then, you know, you go to India, you go to China, you go to all these other countries where freeCodeCamp is really big, and the market is completely different. I've been to startups in Shanghai, where I walk in the room and half the people working in the developer bullpen are freeCodeCamp grads.

**Jerod Santo:** Wow.

**Quincy Larson:** So there are definitely jobs...

**Adam Stacoviak:** It's intense.

**Quincy Larson:** ...out there for people, it's just a question of what those jobs look like, and how many applications you have to make, and how many people are competing for those same jobs. I will say this though - getting a job, I think a lot of people think it's all about your skills, but it's really about three things, in my opinion. It's about your skills, it's about your reputation, and it's about your network, whom you know. If you know the right people, you can get in even with subpar skills, subpar reputation. If you have a great reputation, you may not be the best developer, but people know who you are from your blog posts or from your YouTube channel, or from your podcast, or just from your open source projects that you've contributed to.

**Jerod Santo:** Great point.

**Adam Stacoviak:** Everyone wants to de-risk a choice, right? And the way you de-risk a choice is by some sort of assurance or certainty. So if you have a decent reputation, you can kind of bet that you're a decent person.

**Quincy Larson:** Yeah. De-risking is exactly what I think employers are trying to do.

**Jerod Santo:** For sure.

**Quincy Larson:** They're just trying not to make the catastrophic choice that results in them having to terminate somebody, pay a whole bunch of severance, and then go through the entire job--

**Jerod Santo:** Do it all over again.

**Quincy Larson:** Yeah. And it's costly.

**Jerod Santo:** It is.

**Adam Stacoviak:** It's funny though that who you know comes so -- it makes sense, but we try to be in a world where it's not about who you know, because it almost seems unfair...

**Jerod Santo:** And yet it totally still is a fact of life. \[laughs\]

**Adam Stacoviak:** Right, that's what I mean. So if you don't know the right kind of people, you can't build your reputation properly... Or at least maybe add to an area where you have less of a reputation. You have somebody vouching for you, for a lack of better terms. If you have a network, to some degree, associating with you, therefore adding to your reputation - that you're trustworthy, that you're somebody worth betting on or taking a risk on.

**Jerod Santo:** Right.

**Quincy Larson:** Yeah, and this is why the local markets are so important. People focus so much on Silicon Valley, and they're hypercompetitive, trying to get a job offer from Google, Facebook or Amazon, but if you go to a lot of communities -- we're here in Houston, and I live in the Dallas Metropolitan Area, and Jerod lives up in Omaha; these are all completely different tech ecosystems, with different employers, different hiring cultures, different circles of people that meet together for tech talks and events, and different professional groups...

If you learn your local meta, and if you're content to stay in the city you are in currently, there won't necessarily be a clear roadmap for you to get to that job. But if you pound the pavement and if you get to meet people, I think things will work out for you, because you're already doing a lot more work than most of the job applicants do.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[24:05\] Plus, like you said, many companies that aren't traditional software companies need software people. As the old saying goes, "Software is eating the world." Every company is becoming a software company. Well, there's a lot more competition to work at the software company; they need developers, because they develop software for a living. But there's a lot of companies that just need one or two people, and maybe their bar is a little bit lower, the competition is gonna be less... Maybe you have a friend who works there... There's just lots of those, what you may consider non-traditional software opportunities, where it's like "Well, maybe they're not a software company, but they have software needs", and I bet you can pitch in there, maybe even more so than you could at the place that has 100 developers already.

**Adam Stacoviak:** Yeah. If getting a developer job is hard, does that mean that it's got something broken in the system? If it's hard to get a job that way, it's somewhat of an indicator that there's a broken system.

**Quincy Larson:** Yeah.

**Adam Stacoviak:** Or there's a broken process, or something is broken. What makes it so difficult?

**Quincy Larson:** It's hard here in the U.S. Again, I have lots of friends in China and in India, and places like that, where I think it's comparatively easy. Not in every city in those countries, but in a lot of markets it's just much easier to got out and get a job. In the U.S. we have a combination of benefits, like -- the legal framework and all these things make hiring and firing very difficult... Because it's costly to make a mistake, really... So that makes employers risk-averse, even in a field where there's so much demand.

Also, employers to some extent are operating under pattern recognition, so they're like "Oh, this person has worked at this company." That's the biggest indicator of your likelihood of success - whom have you worked for, and do they have similarly stringent hiring requirements? If you've worked at Google, there's a very good chance that you're going to be a good employee at XYZ Corp as well.

There's a great -- she writes a lot of articles for freeCodeCamp's publication as well, \[unintelligible 00:26:09.14\] she does interviewing.io, and she's written a ton of articles that are much more data-driven on this... But I wouldn't say hiring is broken - that's kind of a strong word - but I would say there are very clear ways in which things could be improved, without having to completely overhaul the way that we handle labor in the United States, for example. Pair programming, or doing more take-home assignments, rather than doing whiteboard challenges would be on fairly obvious improvement... Because that is heavily biased toward recent college graduates, who just spent a whole bunch of time basically going ad nauseam through algorithms for tests, and stuff like that.

It doesn't work as well when you're hiring somebody who' s been out of the job market for a while, if they've just had a kid, or somebody who has just been working for a long time, but hasn't interviewed for jobs recently.

**Adam Stacoviak:** Your mission isn't to get people hired, it's to educate. Would you agree with that, or is it kind of both sides? Because you don't really help place, so -- it's implied by your efforts.

**Quincy Larson:** Our official mission is just to help as many people as possible learn to code. It's written at the bottom of every single page in our footer. That's our official NGO's mission. That said, virtually everybody who uses freeCodeCamp dreams of one day becoming more technical. Now, whether that's actually being a software engineer, or just being a designer who can code, or a marketer who can code, or somebody who wants to build a cool interface for their drone that they're flying around as a hobby, somebody who wants to build an Alexa app just to impress their kids... There are so many different use cases for programming knowledge, but it's all a net positive.

\[28:04\] I like to say that back in the 1600's you didn't need to be able to read to go out and work. But the people who did sit down and take the time to read were infinitely - not infinitely, but they were dramatically better off as a result. Same thing in the 1920's - if you learned how to drive a car, suddenly you had all these new opportunities open to you. And more recently, like the 1990's, people really learned how to use spreadsheets, they learned how to use word processors, they learned how to use these slide-based tools like PowerPoint, and that opened up so many opportunities for people.

So yeah, you can get by without it. You could be a congressperson in 2019 who doesn't know how to type and just relies on the secretary to do the typing for them, right? But real-life - you are better off just gathering those additional skills. And I think that soon people will awaken to the fact that being able to code is very helpful, and it does give you a whole lot of additional options.

**Break:** \[29:12\]

**Jerod Santo:** So figuring out the financials is one aspect of sustainability. Another aspect is making it so that Quincy doesn't have to do all the work...

**Quincy Larson:** Yes...

**Jerod Santo:** ...and surely, you have a team at this point and lots of people contributing. I'd like to hear the different roles, who's involved, and then as a follow-up to that, how you inspired them to get involved in freeCodeCamp's mission?

**Quincy Larson:** Absolutely, yeah. FreeCodeCamp - currently we have a lot of active contributors, and I'm extremely grateful for all of them. We're getting ready to -- maybe by the time this episode goes live we'll have our top contributors for 2019. We've got some really nice backpacks that we're gonna ship to them to recognize their efforts, to say "2019 Top Contributor." It's got that freeCodeCamp logo... And these are the same backpacks that we sold a few months ago. We're actually running a second run of those too, since we're gonna be printing these top contributor ones.

But there are seven people who work for freeCodeCamp full-time, including myself. They are all generalists, in the sense that they all wear a lot of hats. Everybody comes up through freeCodeCamp as contributors. After a few years of contributing, if they seem to be particularly capable or particularly passionate, and we have the resources, then we will bring them on.

Currently, the team is, again, me, doing just everything -- like, I do support, and I'm overseeing a couple different projects. Then we have Beau Carnes, who is running the freeCodeCamp YouTube channel, which recently became the biggest programming channel on YouTube. It's got 1.4 million subscribers now.

\[32:02\] There's a channel called TheNewBoston that hasn't been updated in like 4-5 years, and they have more subscribers than we do... But other than them, I think we're the biggest. So Beau runs that, he creates a lot of the videos, he does a lot of the editing for our contributors, and Beau also is working with a curriculum... Beau worked as a teacher for 5-6 years prior to joining freeCodeCamp - a public school teacher up in Michigan.

We have Abbey (Abigail Rennemeyer). She is based in Portland, and she worked as an archeologist before. She has a totally different background. But she had been editing thousands of articles for the freeCodeCamp publication. She kept doing it, and I was like "Hey, do you wanna do this full-time?", so she's been doing that. She also runs the podcast... So if you've listened to the freeCodeCamp podcast, there's a good chance you've heard her interviewing people.

Then we have Ahmad Abdolsaheb. He's in Turkey. He recently immigrated to Turkey. He is doing some exciting things over there. He does a lot of the design... When we overhauled freeCodeCamp's visual design, he did a lot of that work. He also does a lot of the \[unintelligible 00:33:28.17\] code maintenance.

Then we have Mrugesh Mohapatra, who is in Bangalore. He does pretty much everything regarding the core codebase, and all the servers... He's the person we call if something catastrophic happens.

Then we have Kris Koishigawa who's in South Korea. He was working as a teacher for the last six years, and started contributing a whole lot to our interview prep section, so we brought him on. He and Beau are working together on the updated curriculum, which I can talk about in a minute.

Then we also have Miya Liu, who is based in Suzhou, China. She's running the freeCodeCamp China team. We basically have like a completely parallel organization in China. We've got a Chinese language forum, a Chinese language publication, and a Chinese language curriculum. Hundreds of thousands of people are using that. I think I got everybody...

**Jerod Santo:** It is hard to always remember everyone on the spot, as we've experienced recently as well.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So that's amazing, you have a parallel organization in China. I'm just curious, in terms of the freeCodeCamp alum, or even just the users - I mean, your team is spread abroad, and so where is your biggest audience? Do you have a foothold in--

**Quincy Larson:** India.

**Jerod Santo:** Is it India?

**Quincy Larson:** India and the United States are neck in neck. Sometimes there are more people in India, sometimes there are more people in the U.S. And then Nigeria is third, and China.

**Adam Stacoviak:** Is that based on just visits, or how do you --

**Quincy Larson:** Use.

**Adam Stacoviak:** Logged in use?

**Quincy Larson:** Time on site.

**Jerod Santo:** Right, gotcha. So you have Chinese translations... Do you have translation into other languages as well?

**Quincy Larson:** Yeah, that's a great question. What we're trying to do is just really make sure that we have everything rock-solid in Chinese. And Chinese is bigger than most of the other world languages combined... It's second only to English. If you look at Wikipedia usage - and this is what we used for our metrics, to plan internationalization... We looked at how Wikipedia was being used, and we looked at the world language usage for different translations on Wikipedia... Then we looked at the total number of speakers of those languages that were using the internet actively.

\[36:01\] China is just exploding in terms of people adopting technology, and they're very enthusiastic about it. A lot of them are getting great jobs, and there's a lot of money going into just a lot of different aspects of artificial intelligence - machine learning, essentially. The real machine learning, and also the "if then" statements, and stuff like that...

Then also there is a whole lot of expertise in China. India - a lot of the great Indian engineers stay here, and a lot of the Chinese engineers go back to China and create companies. I'm trying to think of some names of famous engineers who've left Google, or have left teaching at Stanford, who've gone back to China... But there are a lot of really promising companies over there.

So we wanted to do China first. Personally maybe I'm a little bit biased, because I lived in China for like five years, my wife is Chinese, and I'm just very optimistic about the future of China. Over the course of the past 30 years they've taken hundreds of millions of people from subsistence agriculture and they've transformed into a manufacturing center of the world, and now they're transforming into much more services, and a creative-based economy. Learning to code is gonna be a big part of that.

**Jerod Santo:** For sure.

**Adam Stacoviak:** Can you speak to the need for a native language curriculum? Specifically what I've heard at least with China is that there's this desire, obviously, a massive amount of people there, but most of the documentation, a lot of the books tend to be or are more likely to be in English. Can you speak to the need for a native language curriculum?

**Quincy Larson:** Yeah, well it's always easiest to learn in your native language; it's one less thing you need to worry about. A lot of people - more than a billion - have Chinese as their main language...

**Adam Stacoviak:** More than a billion?

**Quincy Larson:** Yeah. I mean, if you include written Chinese... There are a lot of spoken dialect variations.

**Adam Stacoviak:** How many on Earth? 6.5, 7 billion people?

**Jerod Santo:** Oh, you're behind. It's like 7.5 or 8 at this point.

**Quincy Larson:** Yeah, it'll be 8 in like 10 or 15 years.

**Adam Stacoviak:** Okay. It's been a while since I've been into the stats machine here... Okay. But the point is that's quite a lot of people.

**Jerod Santo:** Oh, for sure.

**Adam Stacoviak:** More than a billion people... That's a massive amount of people.

**Jerod Santo:** That's like -- I was gonna say one-and-a-half Facebook, but I can't remember what Facebook's numbers are...

**Quincy Larson:** Facebook I think is 2.5 billion.

**Adam Stacoviak:** Oh, there you go...

**Jerod Santo:** Gosh, that's crazy.

**Adam Stacoviak:** It's interesting too to hear your insights on the choice to use a massive, global site like Wikipedia as an example to say...

**Jerod Santo:** That's smart.

**Adam Stacoviak:** ...why did you choose, what did you choose first, under what circumstances... Because in a lot of ways what you're doing is creating a Wikipedia (for a lack of better terms) for software developers, right? The curriculum is very much like that.

**Quincy Larson:** Wikipedia has been a huge influence on us. And of course, Wikipedia is mostly open source as well, and they're also a non-profit...

**Jerod Santo:** Right.

**Quincy Larson:** So in many ways, if Wikipedia hadn't proved out the concept that you could have donor-supported commons of learning material - in their case more encyclopedic, in our case more procedural, skill-focused learning... FreeCodeCamp - probably we wouldn't have attempted it, because we needed that proof of concept. I'm not the kind of person who's gonna throw their entire livelihood behind a totally wild guess. But I sensed - I guess correctly, in retrospect - that there would be demand there, and that people that were graduating from freeCodeCamp and going on and getting these great jobs would turn around and donate back to the organization, and it would be sustainable.

**Adam Stacoviak:** \[39:53\] Do you see somebody utilizing freeCodeCamp, and maybe a bootcamp as well, or some sort of intensive -- is there a scenario where it's only freeCodeCamp? I know you're not trying to do that, because you're very community-minded and oriented... But is the intention to be freeCodeCamp alone, or is it sort of like a companion to other learning opportunities?

**Quincy Larson:** I've always viewed freeCodeCamp as a core curriculum, if you will... And a lot of coding bootcamps do use freeCodeCamp as either part of their curriculum, or they use it as their pre-course work... And we have a really good relationship with a lot of coding bootcamps. I'm very excited about the future of coding bootcamps... Really anything that can drive down the cost of adult education, because universities are \[unintelligible 00:40:30.00\]

**Adam Stacoviak:** The hardest part about that too is curriculum development. If you had to start from scratch every time you wanna start up another bootcamp opportunity in your neck of the woods, whether it's here in the States, or elsewhere abroad, if you can shrink that time from desire to teach to teaching, it's a leg up on opportunity.

**Quincy Larson:** Yeah, I'd agree it's the hardest part, but it's not the most important part. The most important part is the interpersonal relationships that a teacher/professor has with their students, and that students have with one another... And the counselors that help you prepare for the job search, and all the other things that the university, or a coding bootcamp, or any sort of adult education program can add, the value-add.

The curriculum itself, if you think about it, very few people actually design curriculums, since most universities have textbooks... You go to ECON101 and everybody has the same textbooks, regardless which university you're studying at, for the most part.

**Adam Stacoviak:** Gotcha.

**Quincy Larson:** So freeCodeCamp can be a free, interactive textbook that these organizations can use, and of course, it can be used on its own, just like I could go to a library and crack open a textbook, and learn economics, or I can learn how to program in C just from a textbook, or from some sort of static resource.

The main advantage with freeCodeCamp, of course, is it's experiential, it's project-focused, and things stick a lot better when you're actually building.

**Adam Stacoviak:** Right. How do you keep it fresh, how do you keep it relevant, current? Maybe the naysayers are saying "Oh, your curriculum is not current enough, or is not idiomatic enough..." How do you push back the haters, basically?

**Quincy Larson:** Well, we just focus on fundamentals. We're not gonna be covering bleeding edge tools, for the most part. I believe that everybody needs to just get a really strong foundation first, and most of what constitutes foundational knowledge as a developer is stuff that was figured out in like the '60s and '70s, and in the case of mathematics sometimes hundreds of years ago, thousands of years ago.

So what we're teaching is just the most ubiquitous tools, that are the most generally-applicable. I think Node.js has, to a large extent, won the web server war, if you will... And JavaScript is useful for pretty much any kind of web development. We're getting ready to introduce Python as well as a core part of the curriculum. Currently, it's six certifications. Each certification requires you to build five projects and get all their tests passing, so we're adding four additional Python-focused certifications.

Right now our certifications - just for people who aren't aware - front-end specific we have the Responsive Web Design, we have JavaScript Algorithms and Data Structures, then we have Front-end Libraries, Data Visualization (with D3.js primarily), and then we have the full-stack-focused ones, which are APIs and Microservices, and Information Security Quality Assurance.

We're gonna add four additional Python ones that will be either at the end of that, or we'll kind of break up those... But we're adding Scientific Computing with Python, we're adding Data Analysis, we're adding Information Security with Python, and we are adding Machine Learning, using TensorFlow, Keras, and potentially scikit-learn.

So we're adding lots of tools, but these are not tools that are groundbreakingly new. These are things that academics and practitioners in the field have been using for years.

**Jerod Santo:** \[44:14\] Sure. What about the small things, like -- I think of the JavaScript syntax, and the updates to the language. I mean, the nice thing about web development is it's mostly additive. New technologies add on top of HTML and on to of CSS. With trends in JavaScript, I think the big change between callbacks to promises to async/await - those are things that do get outdated. Do you just churn it out and keep it updated, or do you not fight those battles? What do you do there?

**Quincy Larson:** We just update. For example CSS variables - we're probably gonna rip out our Sass section at this point... Because CSS is getting so many of the core features that those pre-processors offer...

**Jerod Santo:** Did you hear that, Adam? They're taking Sass out.

**Adam Stacoviak:** Yeah. It's about time. \[laughter\]

**Quincy Larson:** Yeah. And we used to have a Bootstrap section, but we're probably just gonna teach Flexbox and Grid, and stuff like that. So we do go through an update, and like you've just asked, specifically as new features are added to ES6, or ES2019, or whatever they're calling it this year...

**Jerod Santo:** Right.

**Quincy Larson:** ...we'll just go and update the individual lessons. We're trying to update them in situ, and add additional lessons, if necessary. The entire curriculum is about to become completely project-oriented. This is something we started at the beginning of the year. We're rewriting our lessons to all be building projects. So instead of "Learn JavaScript, and here are 200 JavaScript lessons that are tangentially related. Go through them", it's "Learn JavaScript by building a role-playing game."

**Jerod Santo:** Nice.

**Quincy Larson:** So you'll build a role-playing game and you'll learn basic JavaScript from that. You'll learn typography from building a USDA nutrition label.

**Jerod Santo:** That's a good one.

**Quincy Larson:** You'll learn all these different things through projects. Currently, the curriculum is like 30 certification projects and a whole bunch of lessons. Soon it'll be 30 certification projects and also a whole bunch of practice projects, like 30 or 40 practice projects. Those will all be interactive, with tests the entire time, and you'll build the projects one line at a time, one passing test at a time.

**Adam Stacoviak:** It's so much easier to learn when you have some sort of concrete expectation or visual in mind... Giving somebody a goal, and not just abstract thoughts of like "Oh, here's 200 different 200 tangential lessons on JavaScript." It's more like "Here's what we're learning in order to build something like this, that you've seen in the real world, you may have even used in the real world..." Nutrition labels, for example. What was the one before? Was it tables?

**Quincy Larson:** Learning typography.

**Adam Stacoviak:** Typography, yeah.

**Quincy Larson:** Like visual hierarchy.

**Adam Stacoviak:** Yeah, that makes sense.

**Quincy Larson:** This is all, of course, open source. It's all on GitHub. So if you wanna see exactly how our curriculum is coming along, you can check it out. We're gonna keep plugging away at it. Like I said, Kris Koishigawa and Beau Carnes are working on this basically full-time, doing instructional design... They're both trained classroom teachers, who've also learned web development on their own, through freeCodeCamp, over the years, and through other resources... So it should be really, really solid. And even if it's not totally solid when it launches, that's the great thing about open source - it'll gradually accrue a whole bunch of improvements, and eventually it will be great... Eventually. \[laughter\]

**Jerod Santo:** Eventually great... That's like eventual consistency, only it's eventual greatness.

**Quincy Larson:** Exactly.

**Jerod Santo:** So in addition to the refresh of the curriculum you've also launched a brand new refresh to the learning platform. You're now buzzword-compliant, because you're on the JAMstack.

**Quincy Larson:** Yeah.

**Jerod Santo:** Do you wanna talk about some of the new infra, and the code, and what you're doing there?

**Quincy Larson:** Yeah, absolutely. JAMstack - JavaScript APIs and Markup is what JAMstack stands for. My friend Matt Biilmann over at Netlify coined that term in a bar at some point; I don't remember the exact story, but... He's been a big proponent of the security and the performance boost that you can get from just doing everything at build time and then just serving the static files, essentially.

**Jerod Santo:** \[48:18\] Right.

**Quincy Larson:** So now if you go to freeCodeCamp.org and you go into /learn app, pretty much everything is prepackaged, and you get the entire application; it just loads, and it'll work offline. It won't work offline perfectly right now, but we're working on getting it to be an offline-first app.

There are a lot of advantages, and a lot of those advantages have to do with the fact that we don't have to \[cell phone alert\] Sorry, that little ding threw me off...

**Adam Stacoviak:** Ha-ha! Text message.

**Quincy Larson:** Okay... Yeah. A lot of those advantages just have to do with the fact that we don't wanna spend as much money on servers. We can cache everything...

**Jerod Santo:** Yeah... Has that been a substantial difference for you all?

**Quincy Larson:** It's been like $5,000/month on servers.

**Jerod Santo:** What are you spending now that you're on JAM?

**Quincy Larson:** I think we're spending like $4,000... But we're still doing a lot of the optimizations.

**Jerod Santo:** A thousand bucks a month...

**Quincy Larson:** I mean, gradually, it will reduce.

**Adam Stacoviak:** Yeah. Wow.

**Jerod Santo:** Eventual greatness...

**Adam Stacoviak:** Eventual greatness. I'm curious, if you have such a massive global audience, why - and this is just the partnership personality in me comes out... It's like, why you wouldn't reach out to someone in that business to establish some sort of partnership and make that zero or very low?

**Quincy Larson:** If anybody is listening who's in a position to grant a whole lot of credits, or do something like that...

**Adam Stacoviak:** You'll take them.

**Quincy Larson:** Yeah, we'll take them. We use all that we can get from Amazon, Azure, Google Cloud... We use all their credits we can get. We just need a lot.

**Adam Stacoviak:** Are you picking on the platform?

**Quincy Larson:** I ain't picky... As long as it's reliable.

**Adam Stacoviak:** Okay.

**Quincy Larson:** Azure is where a lot of our stuff is hosted, Digital Ocean is where some of it is hosted... We have to be very mindful about what services we look at, how critical they are...

**Adam Stacoviak:** Yeah, of course.

**Quincy Larson:** So far, Azure, in my experience, has been incredibly reliable. And AWS is really reliable, too. But we decided to locate most of our database and our servers in Azure, because they gave the most generous credits, candidly. They give every non-profit like $3,500, $4,000/year in credits, and that's a big headstart.

We locate everything in the same data center. It reduces latency. So if we have a significant offer of credits, we might be able to relocate the entire stack for /learn over to a different place. But we wouldn't wanna do a piecemeal just because of the introduction of latency, and additional security risks, and stuff like that.

**Adam Stacoviak:** But either way, with the new stack you've definitely been able to shrink said budget, so...

**Quincy Larson:** Yeah. And this is just day one. This is the very beginning of the process.

**Jerod Santo:** Is there a stack though? I mean, isn't that the point of JAMstack, is you do it when you build, and then-- well, you said most of your stack is \[unintelligible 00:51:02.25\]

**Quincy Larson:** We still have servers, like an API...

**Jerod Santo:** These are things like APIs...

**Quincy Larson:** Yeah.

**Jerod Santo:** That's the A in the JAM.

**Quincy Larson:** Whenever you complete a lesson, for example, it writes back, and if it can't establish connection with the server, it just stores in local memory/storage that we use. Then when it reestablishes connection, then it pushes. So we're building out all that kind of redundancy and turgidness.

**Jerod Santo:** Right. Very cool. Any drawbacks on the JAMstack so far? Things like "Oh, we didn't see this one coming..."

**Quincy Larson:** Cache invalidation is always challenging. You push a bunch of changes, and they're cached on Cloudflare, or Netlify, or a CDN, or something, and you just have to wait till it propagates, or "Hey, try refreshing." We're working on figuring out a way to do that, so we don't have to tell people "Try doing a hard refresh."

**Jerod Santo:** That's a web developer's least favorite phrase, is "Try refreshing." We hate saying that.

**Adam Stacoviak:** That's like "Have you turned it off and on again?"

**Jerod Santo:** Right. It's kind of like the "Yeah, it kind of failed at the cache invalidation part. Hard refresh." You have to go teach people how to hard refresh, versus regular refresh. I've been there, done that... \[laughs\]

**Quincy Larson:** \[52:06\] So that's been the biggest drawback... And I think Netlify was under a DDOS attack the other day. We had some uptime issues with that. But again, they're doing the best they can, they're a pretty small organization compared to the AWSes of the world... We just wanna be there to support them, and we're just grateful that Netlify, Discourse, a whole lot of other organizations have given us in-kind sponsorship... So they're not giving us money, but they were giving us servers and services. That makes a big difference.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So the third pillar of what you're up to... We've talked about the learning platform; the forums we touched on at the very beginning of the conversation, but we haven't talked much about the publication.

**Quincy Larson:** Yeah, that's a big part of freeCodeCamp. We have freeCodeCamp.org/news, and we have hundreds of authors who are publishing articles there every week. We don't get hundreds of articles every week; we're going for quality over quantity. It's not an open publishing platform where you can just sign in and start publishing... With the publication you have to apply, and we're really selective. I think we have like 5% selectivity.

Most people will submit a whole bunch of writing samples, we'll force them to read our styleguide, and all that stuff; make them jump through all the hoops if they want it badly enough. Then we'll give them a conditional account (a contributor account) and then they can write drafts and we can look at those. The moment we see one of the drafts that we're like "Yeah, this is ready to go. This is solid", we can do a little bit of editing, publish it, and then we give them full access to our Google Analytics, so they can see exactly who's reading their articles... Basically, everything Google Analytics tracks, and we've got a bunch of additional custom filters, and stuff, to make it really simple for them.

That's the only tracking we use, by the way... We use Google Analytics because, at this point, it's the only -- server-side analytics are great, but you just don't have enough information for the authors to be able to understand the readership.

**Adam Stacoviak:** This process of collaboration - or lack thereof, if there isn't any - on the \[unintelligible 00:54:13.12\] process, how do you handle that? Do you have baked-in processes where you're giving them feedback and suggesting edits, or do you make the edits and say "This is how it is"? How is that relationship?

**Quincy Larson:** Yeah, we make the edits for them, and then we tell them what edits we made, generally. Usually, the edits are seemingly unimportant, but actually really important. The headline is, by far, the most important thing, practically to the point where I'm like "I'm just gonna write the headlines for you...", because that's all 90% of what people see, especially in the age of Apple News, and Reddit, and all these aggregators... People just scroll through headlines, and that's their news. Very few people actually click through.

**Adam Stacoviak:** Do you actually say anything, like a headline is a suggestion from them, and it is in your hands at the end? What they write may actually become the headline, but it's actually just a suggestion, and it's more like--

**Quincy Larson:** Yeah, we're clear that -- essentially, they're writing, and to save a whole bunch of back-and-forth and a bunch of communication overhead that slows things down, we just apply the edits ourselves... And people understand it, they appreciate it, because they understand that we care a lot about quality, and we wanna get their article read by as many people as possible. The way we do that, of course, is after they publish it, we publicize it through our Twitter account, which - I don't know how many followers it has; it has a high level of engagement, let's say that. Generally, when we tweet something, it gets retweeted like 10 to sometimes 100 times.

We also have a huge LinkedIn alumni network, and we get like two million impressions a month, just off posting things on LinkedIn. Then of course I have my email blast that I send out, and I've got a mailing list of like 2.5 million people. So a lot of people click through and read those articles that I choose for the email blast...

**Jerod Santo:** It's worth it.

**Quincy Larson:** So we're giving them a megaphone to reach a whole lot of people and to really raise their profile in the developer community, and they take that opportunity seriously.

**Break:** \[56:18\]

**Jerod Santo:** What kind of pieces are you looking for? Because I remember in your post you mentioned journalistic stuff eventually, or... I don't know. Tell us.

**Quincy Larson:** Eventually, we'd like to have explanatory journalism, where we take like net neutrality... For example, I wrote 10,000 words about net neutrality, and to put everything in context, right during the peak of people asking about net neutrality, and curious about it... And I put it in a historic context, with all the other mediums that preceded it, the other media that preceded it, like radio, cable, stuff like that. So that would be kind of like the archetypal -- like, if I was gonna lead by example, I'd say we should be writing in-depth articles like this... And there are plenty of other publications that write that, like The New York Times, The Wall Street Journal... A lot of them will just have really in-depth articles that put things in a historical context. It's not just like "This happened, and this happened, and then this happened." It's like "This happened, and here's why that's significant from a historical perspective", or "Here's what that means."

So explanatory technology journalism - that's our aspiring goal. One of our goals is to get people to actually come to freeCodeCamp.org every day, and have something new and exciting that they can learn. Right now, people just blow through the curriculum and they get a job, and they're like "Awesome. Oh, freeCodeCamp - I used that back in 2017." I hear that all the time, and I'm like "We're still doing a lot of exciting stuff!"

**Adam Stacoviak:** Yeah... "We're still here!" I was gonna ask you about that, because it's one thing if your mission is to educate as a primary mission, and you've mentioned the three pillars... It's gonna be very difficult to keep a captive audience, because of what you've just said. It's very easy for people to be transient, given that their goals and their means have been covered, and they're gone.

**Quincy Larson:** Yeah. And there's always more stuff to learn, right? I learned a lot about quantum computing in the past few weeks. I learned a lot about micron-length semiconductor manufacturing, and stuff like that. There's always new stuff that's coming out. Technology, by definition, is new, so there's always new stuff. And just being able to explain how you orchestrate with Kubernetes, or how a Docker container works... What's the difference between a Docker image and a Docker container, or a Docker instance? I can't even remember all the different terms associated with Docker.

**Jerod Santo:** You need an article.

**Adam Stacoviak:** You've mentioned a freeCodeCamp mission, but it seems like the roles of these pillars are distinct... So do they have their own agenda that feeds into a sort of main or corporate agenda?

**Jerod Santo:** Yeah, why these three?

**Quincy Larson:** Yeah. We are strong believers in content. I think that one of the biggest tragedies is that so much of the rewards of the web have been accrued by platforms that are basically just aggregating other people's content... If you look at Facebook, and Reddit, and all these companies, they're benefitting from providing the basic infrastructure. You could argue that Medium fits that boat, Quora - they just create the software, and everybody else comes and adds the content... And people don't care about the infrastructure that much. They really are there for the content, right?

**Jerod Santo:** Right, the content is the value.

**Quincy Larson:** It'd be like you saying "Netflix should accrue 100% of the value, because they created such a great streaming platform... And the Hollywood movie companies shouldn't get anything, because hey, they just created the content. Content's free, right? Or cheap."

**Jerod Santo:** Right, right.

**Quincy Larson:** But content is not a commodity. Really good content is incredibly valuable. And if you look -- there's The Information, for example. It's like this news publication that charges hundreds of dollars a year to get a subscription. The Economist, historically, has always charged like $150 or $200/year for a subscription... And I think we're gonna see more and more of these publications that are like "This is really high-quality, so we're not gonna give it away for free." At the same time, there are publications that do give it away for free, like ProPublica, and The Guardian, and places like that... And that's because they're fully donor-supported. They can do that.

And freeCodeCamp, of course, is being donor-supported by small, individual donors. We're a grassroots organization, we can do that. We can make everything free, and we can provide tons of content from our community and from ourselves, paid staffers like me, who are writing articles, things like that.

**Jerod Santo:** Yeah. So let's talk about donations real quick, and then we'll switch gears, because I do wanna talk about the meetup. You mentioned platforms...

**Quincy Larson:** Yeah.

**Jerod Santo:** So five bucks a month - let's just say I go and sign up for recurring. I'm in, I like your mission, I've got the cash - I'm gonna give you five bucks a month. Where does that money go?

**Quincy Larson:** \[01:03:55.24\] Yeah, great question. First, we've got seven people... Okay, first let me talk big numbers, so everybody understands. FreeCodeCamp's 2019 budget was $373,000. That may sound like a lot of money, but I know developers in Silicon Valley who personally make more money than that a year.

**Jerod Santo:** Sure.

**Quincy Larson:** That is maybe payroll for like 3-4 people, right? And we're figuring out a way to stretch it across seven people, and we're also paying tens of thousands of dollars a year in servers. So the answer is 100% of that gets consumed by what is traditionally called programs, when you analyze a nonprofit. There's fundraising, there's administration, and there's programs. And we don't really have administration...

**Jerod Santo:** You don't do fundraising.

**Quincy Larson:** ...we don't do fundraising... We have Quincy Larson saying "Please donate to our non-profit. Please, sir..." \[laughs\] We don't have a PR firm, we don't have a marketing department... You could argue that we could do better, and we could raise more money...

**Jerod Santo:** Yeah, I was gonna ask--

**Quincy Larson:** ...but that introduces a lot of complexity in the organization.

**Jerod Santo:** It does.

**Quincy Larson:** And right now, everybody who works at freeCodeCamp came up through freeCodeCamp. We never interviewed anybody.

**Jerod Santo:** Yeah, I get it, and I would say that -- I know a lot of nonprofits that do the fundraising side... And of course, it's akin to like a bootstrapped company getting VC funding; there's some analogs there, but it's different... But the hardest way is the individual recurring donations, versus having a person on staff - maybe it's you, or maybe it's somebody who's really good at going around to the big donors, to the foundations...

**Quincy Larson:** Yeah, I'm not good at that... \[laughs\]

**Jerod Santo:** Maybe that's the reason why, it's just -- my point is you could get a one million dollar grant...

**Quincy Larson:** Maybe, yeah. But we'd be beholden to those organizations, and also, that would kind of spoil us.

**Jerod Santo:** That's why I said there's some--

**Quincy Larson:** By going out and fighting in the field to earn people's donations - regular people, people who are just working day jobs, have kids to feed, and paying mortgages, but they're like "Hey - yeah, I can spare five bucks for freeCodeCamp a month" or "Yeah, it's the end of the year and I can just give them $1,000 or $10,000."

**Adam Stacoviak:** What about those companies though that are reaping the benefits of your work?

**Quincy Larson:** That's fine. It's a positive externality for them, right? It's consumer surplus for them.

**Adam Stacoviak:** But there's uncaptured opportunity there.

**Quincy Larson:** Yeah. I mean, you could argue the same thing with Wikipedia. How much value do you think Wikipedia has bestowed upon the world by making it to where I can get good factual information within seconds, from a relatively objective arbiter of truth? Yeah, there's a whole lot of value that is not captured...

**Jerod Santo:** \[unintelligible 01:06:28.18\]

**Quincy Larson:** ...but that's kind of the point.

**Jerod Santo:** Yeah, but then they also have to put Jimmy Wales' face on Wikipedia for like one month every year...

**Adam Stacoviak:** Oh my gosh, yeah...

**Jerod Santo:** ...and bug the \[unintelligible 01:06:37.03\] out of their users, when they could just do these other things, such as some tasteful ads...

**Quincy Larson:** Yeah.

**Jerod Santo:** I know you-- I'm just throwing out--

**Quincy Larson:** No, no, I have no problem with advertising. I think it's a great model, especially for podcasts... But also, if you don't have the invasive ad networks, I think that's great.

**Jerod Santo:** Yeah, ethical advertising could be a -- I know you've decided to go pretty much ad-free across the board. I think that's an admirable decision. That being said, we're back -- I cut you off on the donations thing... So pretty much that whole five bucks is going right towards programs...

**Quincy Larson:** Yes.

**Jerod Santo:** ...and there's no fluff, there's nothing else. It's all right there, for now.

**Quincy Larson:** We're extremely lean. \[laughter\] We're living lean. I mean, we have in-depth discussions about whether to pay for a $20/month service...

**Adam Stacoviak:** Really?

**Quincy Larson:** Yeah. I mean, we just wanna operate really efficiently. A lot of my heroes, like Sam Walton, for example, founded Walmart on this notion of thrift... And you can argue that Walmart has not been the best employer, the best patron of different communities that it's been in, but it's hard to argue that it hasn't been good for the end consumer, because they've managed to drive down the prices of so many things...

**Jerod Santo:** Absolutely.

**Quincy Larson:** ...and save people an incredible amount of money, especially families. These are corporations that could probably make a lot more money, but they're choosing to be broader and more resilient to changes in the economy, and things like that.

**Adam Stacoviak:** It's a trade-off.

**Quincy Larson:** \[01:08:07.04\] Yeah, it's a trade-off. But with freeCodeCamp we're never gonna capture all the value. If we can capture - just to give you an idea - less than 0.1%... Or, I'm sorry, it's about 0.5% of our monthly active users, to donate... So it's just a fraction. If I can get a little bit better at my pitching... \[laughs\]

**Adam Stacoviak:** Let me go into my next question then... Let's talk about scale. What are the conversations you have with yourself or anyone else on the team about -- you said your budget was 375k/year, or 378k?

**Jerod Santo:** Last year.

**Quincy Larson:** 377k. For this year.

**Jerod Santo:** This year, right.

**Quincy Larson:** 373k, sorry. 373k.

**Adam Stacoviak:** So when you talk about growth of revenue, or income dollars, or however describe it in nonprofit senses, what are the ways in which you make that number grow?

**Quincy Larson:** Yeah, so we just get more people using freeCodeCamp, it's as simple as that. The more people that use freeCodeCamp, a certain percentage of them will go ahead and get great jobs, and turn around and donate. Sometimes we hit a windfall. Like I was saying earlier, we had somebody who donated $10,000 earlier this month, Shawn Wan. He went through freeCodeCamp, he works at Netlify, and he had money at the end of the year and he wanted to donate to a high-impact charity.

FreeCodeCamp, just to put our capital efficiency in perspective - we have delivered 1.1 billion minutes of instruction this year. That's the equivalent of two thousand years of learning, in one year. We've done that for $373,000. That's the equivalent of 50 hours of instruction for every dollar spent.

**Jerod Santo:** Now you're putting it in terms I like to hear. That makes my five bucks feel a lot bigger.

**Quincy Larson:** Yeah. So your five bucks each month is essentially paying for an entire classroom of people to learn. One thing that is important to note also is that these people are able to do it for free, and the scale that we're operating at - it's not only self-paced and free, and fully interactive, it's just incredibly cheap. To put that 50 hours per dollar in perspective, in the United States the average cost of having a child in a public school is $10/hour/child.

**Jerod Santo:** Wow.

**Quincy Larson:** So freeCodeCamp is several orders of magnitude more efficient than -- and granted, they're trying to accomplish totally different things. We don't have classrooms, we don't have a student-teacher ratio of like 17 to 1, or whatever... We just do instructional design, and people work through it at their own pace. But it's because of those concerted decisions that we're able to be dramatically more efficient. These are all conscious decisions we've made because our ultimate goal is scale; our ultimate goal is helping as many people as possible, for as little money as absolutely necessary.

**Adam Stacoviak:** I like the fact that you're focused on those two metrics. You grow the number of freeCodeCamp (I guess) interested people, users, however you wanna describe it, and then that obviously impacts the ratio of donors. And you can sort of grow that one to grow this one, or you can grow this one, too... Meaning if you grew the amount from 5%...

**Jerod Santo:** 0.5%. Isn't that what you said?

**Quincy Larson:** Yeah.

**Adam Stacoviak:** Okay, 0.5%.

**Jerod Santo:** Half a percent. Double that...

**Adam Stacoviak:** Geez, if you double it to 1%...

**Jerod Santo:** Right.

**Adam Stacoviak:** So you can focus on those two metrics - either grow the total captive audience, or grow the...

**Jerod Santo:** Conversion.

**Adam Stacoviak:** ...ratio of donors. I like the simplicity of focusing on two things, rather than so many other things to grow, to scale.

**Quincy Larson:** Yeah, and that's why I'm reluctant to bringing in a fundraising expert to try to personally fly around and meet with the CEOs of all these different companies.

**Jerod Santo:** \[01:11:58.25\] If you can get by without it, it's obviously better, and not have to do that... And it seems like you're on that path. You have these two numbers... The higher-leveraged one is honestly the percentage...

**Quincy Larson:** Yeah.

**Jerod Santo:** ...but you seem to be pretty good at growing the top-end funnel at this point, with all these people using it.

**Adam Stacoviak:** You've also been very patient. Four years ago we talked to you... And I don't wanna use this word too loosely, but you're not greedy, right? There are some people that just -- and I don't know really how you describe greed where it's not egregious...

**Jerod Santo:** Overly greedy? You have the right level of greed.

**Adam Stacoviak:** Right, yeah. You can have...

**Jerod Santo:** Ambition.

**Adam Stacoviak:** ...capitalistic ambitions and not be greedy. You seem to have a patience that is uncanny before that. Not everybody has the kind of patience you have.

**Quincy Larson:** Yeah, well I managed for-profit companies before I started freeCodeCamp, as a school director, essentially; it was a private, intensive English program, and I had to make sure that we had a good \[unintelligible 01:13:01.22\] and all those metrics that matter. And I have kind of a traditional business background in addition to my education background, so I can understand the physics of business, so to speak. And that's really helpful, because that gives me some perspective. It's kind of like if you're a jazz musician - if you don't know how to play, you can just do \[unintelligible 01:13:22.07\] it doesn't sound good. But if you do know how to play, you know exactly how to break the rules and how to bend the rules to make it sound really cool.

To some extent, the fact that I'm older - I'm gonna turn 40 next year - that gives me a huge edge, because I've got the life experience, I've run a lot of organizations before freeCodeCamp, so I knew the people part of it, and the budgeting part of it... So I guess, in some respects, one of the reasons I'm more patient is I'm more confident in the state of the world and how things work and fit together. And also, I have my wife, who has the patience of Job... And she had a job with benefits, and we had health insurance for our kid and for ourselves... So I didn't need to run out and buy that Ferrari, or whatever it is that startup people do when they exit.

FreeCodeCamp will hopefully go on forever, and hopefully, at least for the rest of my life, which I'm hoping to live to be 90, 100 - hopefully, I can continue to be involved, and leading or helping somebody else lead the organization for the rest of my life. So everything is long-term. This is not a problem that's going to magically solve itself. If you look at how long it's taken to get people to even get literacy to the rate it is, after 400 years... This is going to be an ongoing challenge, to teach people about technology.

**Jerod Santo:** We probably have people coming into developer land at a faster rate than the birth rate, at this point... Just a thought exercise.

**Adam Stacoviak:** That's true.

**Jerod Santo:** Think about which one is actually happening faster... So I think maybe we're converting more developers than we're birthing them, at this point... So a huge, massive, forward-looking opportunity as well, and impact. So let's do a hard cut to--

**Adam Stacoviak:** Can I ask one question before the hard cut?

**Jerod Santo:** Yes.

**Adam Stacoviak:** Have you gotten offers, or people, venture capital - anybody that's come to you and said "Quincy, I will buy what you've got. I will give--" whatever it might be.

**Quincy Larson:** Sure, yeah.

**Adam Stacoviak:** How often do you get these things?

**Quincy Larson:** I'm not gonna say the names, but we've had some big companies that approached us, for acquihire, I guess. I don't know how it would work... This was before we got the tax-exempt status. But once we got that, people just left us alone, because -- you can, in theory, unwind an NGO. If somebody wanted to acquire the Red Cross, it'd be this bureaucratic nightmare...

**Jerod Santo:** Really?

**Quincy Larson:** ... and you'd spend so much time... But it is possible to convert--

**Jerod Santo:** It's possible?

**Quincy Larson:** Yeah, but that's never gonna happen here. And I'm grateful that those organizations saw value in freeCodeCamp, but that's not where we're going. We don't wanna be freeCodeCamp by ACME Corporation, or something like that.

**Jerod Santo:** Right.

**Adam Stacoviak:** \[01:16:16.02\] I just would imagine the offers are plentiful, and the temptation is very large...

**Quincy Larson:** I mean, it's not really for me...

**Adam Stacoviak:** It could be, for some. It depends.

**Quincy Larson:** Yeah. I'm just a simple dude. I like hanging out with my kids, I like reading books and going for runs. I don't know -- because I'm in this very fortunate position where I live, in a really advanced country, with rule of law, order... You get more money - it's almost like an insurance policy. Like "If I get cancer, I'll be able to pay for all my chemotherapy and my radiotherapy, or any surgeries necessary. If my kids get cancer, I'll be able to pay for that." So money at some point just becomes a score, a number that in theory you can dip into if you really need to. I don't think that that really applies to me. I'd much rather just be a normal person and have a normal, middle-class, middle-American life, than be cruising around in a Ferrari in San Francisco, or something.

**Adam Stacoviak:** Yeah. Hard left. Go ahead.

**Jerod Santo:** Okay, hard left turn... In closing, we're gonna talk about this topic - because you're not busy enough with freeCodeCamp, you decide "You know what we're gonna do? We wanna disrupt Meetup with an open source event planning platform, not just for developers, but for everybody to be able to just set up their own instance, with a Docker container." Tell us about Chapter, and why you're doing this, and how it relates to the recent changes... I'm not sure if it was actually inspired by that, or if you were already working on it and you're like "Oh, this is opportunistic." Tell us the story of Chapter real quick.

**Quincy Larson:** Yeah, so Meetup was acquired by WeWork a couple years ago. WeWork, as we all know, was not worth as much as they said it was...

**Jerod Santo:** Pretty disastrous, the reverse IPO...

**Quincy Larson:** Yeah, it's one for the history books. But anyway, WeWork -- as of October, when I made this announcement, it was a few hours after Meetup had announced that they were enacting this new policy, that they were going to charge everybody a $2 RSVP fee whenever they RSVP-ed for an event.

Now, freeCodeCamp \[unintelligible 01:18:33.24\] has 40(ish) meetups on Meetup. Most of our study groups are organized on Facebook, because it's free, but some meetups will pay the $20/month to have a meetup page, which I think is ridiculous that it costs that much money... But it does, and people are willing to pay for it. So we quickly did some back-of-the-envelope calculations, and based on the number of events we had, it would have cost us like $20,000 extra every year... Not just to us, but to the entire community in aggregate, if they were all paying this $2 RSVP.

**Adam Stacoviak:** Yeah, and that two bucks is essentially yours to potentially get as a donation, so it just diminishes your opportunity.

**Quincy Larson:** Yeah, or it's just money in their pocket that they shouldn't have to spend to RSVP a free event.

**Jerod Santo:** And it's not for the organizer, it's for the people who attend.

**Quincy Larson:** Yeah. It's for Meetup. It's for the platform/infrastructure that hasn't changed. The only notable thing that Meetup has done in the past ten years was get acquired by WeWork.

**Jerod Santo:** They have the exact same website.

**Quincy Larson:** They have been standing still in terms of product, in my humble opinion... And I say this as somebody who's been using Meetup for the last \[unintelligible 01:19:32.26\]

**Adam Stacoviak:** I could say that as well... Recently, as part of this, was like "I thought I closed my account." I double-checked, I didn't, and I was like "I'll close it." Because I thought I did before, when they were acquired by WeWork.

**Jerod Santo:** I never knew they got acquired. This was the first I had heard. I mean, I've just been a grudging Meetup user as well, just more from the--

**Adam Stacoviak:** \[01:19:53.06\] They've done some other stuff, too... I can't recall what, but it was just like -- it wasn't something like "I'm canceling Meetup from my life." It was more like "I don't use the platform anymore, I don't find value in it", and I'm like "Well..." If you leave a profile somewhere, at least your data is still there, so there's still this opportunity for them to use you, when you've since gone away. So my thought was like "I'm gonna pull my account and not do that anymore."

**Jerod Santo:** What I love about the open source community is we don't have to put up with that stuff if we don't want to. With that being said, somebody has to step up and throw some code on the table, or a spec on the table... That's one of the things we talked with ceejbot about what they're doing with the federated replacement for the package management... What was it called? I can't remember the name of it, all of a sudden.

**Quincy Larson:** Entropic?

**Jerod Santo:** Yeah, Entropic.

**Adam Stacoviak:** Entropic, yeah.

**Jerod Santo:** And just the fact that it's like "Well, we could all sit around and complain", and hey, as people who talk into microphones a lot, some of what we do--

**Adam Stacoviak:** The easiest thing for us to do is to complain.

**Jerod Santo:** Yeah, we complain quite a bit... But in the open source world, it's like "Hey, we can actually solve some of these problems." And that's why I was impressed by the announcement, and your guys' at least beginning of an effort to say "You know what, Meetup has value. This is a thing that needs to exist, but it's not like it's irreplicable, or replaceable."

**Quincy Larson:** Yeah. It's not that complicated.

**Adam Stacoviak:** What's the state of it?

**Quincy Larson:** Yeah, we quickly made an announcement... I thought about it really hard, and I just decided "Yes, this is important enough. This is going to make a big enough difference for just us, that it's worth having a self-hosted chapter management tool." That's what it is - it's for multi-chapter organizations. So we're not trying to boil the ocean and just say "We're all events, everywhere", just like Meetup is. We're just focused on the YMCA, or the Boys & Girls Club of America, or Rotary Club, Lions Club - some of these other organizations that have lots of chapters; they could just have their own server, they can have full control of the data, and people can go there and set up events.

They can have chapter organizers, and then they can have some discovery within their own organization, and they can just have a little subdomain or subdirectory that's like Ymca.com/chapter, or WomenWhoCode.org/chapter, or something like that.

As far as how it's coming along, I tweeted out this somewhat angry tweet, by Quincy Larson relatively emotionless tweet standards, and a lot of people were like "Yeah, that's messed up." I think it was the screenshot of the Meetup...

**Jerod Santo:** Their announcement, or whatever...

**Quincy Larson:** ...their cheerful announcement, "Oh, don't worry, everybody..."

**Jerod Santo:** Yeah, "Great news, everyone!"

**Quincy Larson:** Yeah. "This is actually gonna slightly reduce your costs as an organizer, and pass massive costs onto the community." But anyway, a lot of people retweeted, and I had a little link to a Discord room, which - Discord is not open source, of course, but it is pretty convenient for just organizing an impromptu thing.

**Jerod Santo:** Sure.

**Quincy Larson:** I've used it for hackathons, and stuff... So everybody jumped on there, and we got like a thousand people jump in. Most of them, of course, promptly left and forgot about it, but some of them stayed, and we started brainstorming, like "What kind of tools are we gonna use? What's the user story? What are they gonna look like? Who are the roles?" and we quickly got a lot of stuff ironed out... We got the schema, we got an API documentation up, we got an API up, so now we're just building a lot of the additional functionality we need for our MVP. Soon it will be up, and of course, it won't be amazing right off the bat, but eventually it will be great.

**Jerod Santo:** I love this.

**Adam Stacoviak:** "Of course, it won't be amazing, but eventually it'll be great."

**Jerod Santo:** There's a theme to this. That's right.

**Adam Stacoviak:** I like that.

**Jerod Santo:** A theme for this show, "Eventual greatness." So how do people get involved? The typical GitHub flow?

**Quincy Larson:** Yeah.

**Jerod Santo:** Find Chapter in the show notes and get involved, because this is a thing that we all could use...And if you could use it, and you want to have -- it seems like, to me, pretty easy entry, low-hanging collaborator fruit, like "Hey, here's a pretty open project, that's still getting itself figured out." That's the best time to get involved, because - huge impact, you can be a big contributor early on... Check out Chapter, from the freeCodeCamp crew.

**Quincy Larson:** \[01:24:01.09\] Yeah.

**Adam Stacoviak:** Would you say it's a Meetup alternative though?

**Quincy Larson:** Well, for our purposes, as an NGO that has lots of chapters around the world? Absolutely. We're not gonna use Meetup anymore.

**Adam Stacoviak:** So you're solving your own problem first, and hopefully the problem you have is multiplied by many others.

**Jerod Santo:** Well, it definitely is...

**Quincy Larson:** Well, I'm confident it is.

**Jerod Santo:** Yeah, it definitely is.

**Adam Stacoviak:** It sure is.

**Quincy Larson:** But even if only we used it internally, it'd still be...

**Adam Stacoviak:** It's just fine.

**Quincy Larson:** ...$20,000 in savings, and also the pride of us being able to go in and tweak things and not having all of our user data just be owned by WeWork and their desperate cash-squeezing efforts.

**Jerod Santo:** So what about more traditional meetups? We have the Nebraska JavaScript meetup, which is a very typical JavaScript meetup. It's not multi-chapter, it's just like "Well, we do a meetup here, and you can RSVP..."

**Quincy Larson:** You could run your own instance. It's just $20, or whatever, or $5 to get a tiny little server that'll run it. We're trying to make it as compact as possible. Instead of using Elasticsearch, for example, we're just gonna use Postgres queries. So little tweaks like that, that just reduce the number of services we have to have running in a Docker container.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Has the idea of federated ever made it into --

**Quincy Larson:** Yeah.

**Adam Stacoviak:** And how did that go? What were the thoughts around that?

**Quincy Larson:** I mean, not necessarily from a technological perspective, but just like a way that you can opt into being part of a shared discovery network...

**Adam Stacoviak:** Right, exactly.

**Jerod Santo:** Right.

**Quincy Larson:** Because the main benefit of Meetup is really discovery.

**Adam Stacoviak:** Yeah, exactly. That's the only benefit.

**Quincy Larson:** If you have your own organization, you already have a mailing list with tons of people, people know your website and they're visiting it already, then you don't need to worry as much about discovery, but it's still a nice thing to have.

**Adam Stacoviak:** Well, you still go there and check your interests, too. So if a new group comes up near you geographically - let's say my interests are JavaScript and Ruby; well, anytime anything touches those two areas, then I'm gonna get notified. So you wouldn't wanna just prop up your tent without an audience, and no opportunity for discovery.

**Quincy Larson:** Yeah, you wouldn't.

**Adam Stacoviak:** That's why I was curious about federated.

**Quincy Larson:** I mean, this could eventually come to displace Meetup, in a lot of respects, but that's not our goal at this point... Even though initially I was so angry at Meetup, I was like "Yeah, let's just create a Meetup killer", but that's not how I think when I'm thinking clear-headedly and I don't see red.

**Jerod Santo:** \[laughs\]

**Quincy Larson:** I think practically - what can we do for our organization? What can we do for our community? And this is a right scope/right scale tool, that's gonna work for them.

**Adam Stacoviak:** Right. Well, it's been five years... Four since we last talked, five since the inception. This is your fifth year anniversary... Similar question in the companion podcast you asked us, which was "Hey, what's the next five years like for you? What does the future hold for you? Are you \[unintelligible 01:26:44.22\] like I am currently, or are you visionary and you've got lots of ambition?"

**Quincy Larson:** \[01:26:50.16\] I have an incredible amount of things I'd like to do; a lot of it comes down to how much we have in our budget... Because we don't wanna overextend ourselves. We're a tiny organization, and we wanna make sure everything we do, we do properly, and that we're not spreading ourselves too thin.

So if we can continue to grow our budget, we'd like to do a lot more explanatory journalism, and explain a lot more about technology, and put tech news in context through really in-depth primers. We'd like to create a lot more really good first-party courses, and we'd like to create a lot more interactive curricula.

We'd love to be able to figure out a way that we could pay for servers, so that we could actually have Linux-focused challenges, Git-focused challenges - all these things that require file systems, essentially. You can only do so much in the browser... For example, we're able to do Python because Mozilla just released a giant library that's a significant update from Brython, or some of these other browser-based Python tool.

But we'd really like to be able to actually have full development environments on a server that is showing up on freeCodeCamp, that you yourself have your own little mini compartment on the server. It costs a lot of money.

If we're able to increase the budget, we're gonna just keep doing what we do with those three pillars, we're gonna keep growing the number of people on the forum, and by extension, in IRL events... And we're also just gonna keep creating articles, and videos, and we're gonna keep expanding the curriculum.

**Adam Stacoviak:** Gosh, we haven't even talked about that side of the publication, your YouTube channel... I mean, we're on there right now, theoretically...

**Quincy Larson:** \[laughs\] Subscribe. We do have a YouTube channel.

**Adam Stacoviak:** Click the bell for notifications.

**Jerod Santo:** \[unintelligible 01:28:33.04\] like and subscribe, and click the bell.

**Adam Stacoviak:** Yeah, that's right. YouTubers... They always -- it's like, "Subscribe AND the bell." Why did YouTube do that?

**Quincy Larson:** They want you to have to subscribe twice.

**Jerod Santo:** I've never hit the bell in my life.

**Adam Stacoviak:** Actually, it's kind of like a double opt-in. You subscribe because you're interested...

**Jerod Santo:** What does the bell give you?

**Adam Stacoviak:** Notifications.

**Jerod Santo:** I don't care that much when you post a video. I'll come watch it on my own term, thank you very much. No one's that important.

**Adam Stacoviak:** Well, that's what the double opt-in is.

**Jerod Santo:** I mean, I get it from the creator's side. I would love to have the bell for my channel, but I don't wanna have your bell for my feed. \[laughs\]

**Adam Stacoviak:** Keep your bell, alright? Keep your bell...

**Jerod Santo:** Well, Quincy... Man. It's been an amazing--

**Adam Stacoviak:** Yeah, what a journey.

**Jerod Santo:** It's been fun watching you over these last five years. The numbers speak for themselves... I think the fact that you can educate at such an efficient rate makes it total sense for people who have the funds, and have benefit from freeCodeCamp; I know people who have. That five bucks seems like it makes a lot of sense, so... One more time in a pitch to our listeners - if you appreciate the work they're doing and you wanna help educate the next generation of coders out there, whether they're young or old, or what part of the world they're in...

**Adam Stacoviak:** Yeah

**Jerod Santo:** ...no better way than to do a recurring donation to freeCodeCamp.

**Adam Stacoviak:** And when he says "no better", there's no more efficient way.

**Jerod Santo:** Right. And the leverage is amazing.

**Quincy Larson:** Yeah.

**Jerod Santo:** Thanks for sitting down with us. We really appreciate you, and all the work you're doing.

**Quincy Larson:** That's again for having me back. It's been a privilege talking to you gentlemen.

**Adam Stacoviak:** Thanks, Quincy. Same here.
