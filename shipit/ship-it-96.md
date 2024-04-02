**Justin Garrison:** Hello and welcome to the Ship It podcast. I am your host, Justin Garrison, and with me as always is my co-host, Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hey. How are you?

**Justin Garrison:** I'm doing just fine. I am looking forward to meeting you in-person next week. As we're recording this, it's a week behind where we're going to launch it, because Autumn and I will both be giving talks at Southern California Linux Expo. If you missed it, I'm sorry; if you came in said hi to us, thank you. Hopefully you had a good time, and got some swag, and were able to attend our talks.

**Autumn Nash:** Are you really going to withhold socks? Because I feel like you should give socks to your friends.

**Justin Garrison:** I think I have enough socks for you. I do have some swag. I got some stickers for various things... I'm one of the organizers for KCD LA, so I have stickers for that. I have stickers for my job, I have some socks from my job, I've got stickers for the Linux distro I help with... There's a lot of stuff. I'm just bringing boxes of stuff, and hopefully not coming home with it.

**Autumn Nash:** By the end of the conference you're going to be like "Everybody takes this stuff, so we don't have to take it home with us."

**Justin Garrison:** This is life in DevRel, yes. And so usually, when you travel to a conference, you want everyone to take everything, so you don't have to ship it back.

**Autumn Nash:** That's crazy.

**Justin Garrison:** But in this case, it's local for me, so I would just put it in my trunk and drive home.

**Autumn Nash:** I hope you clean out your car before this week.

**Justin Garrison:** On today's show we have an interview with Andy Glover. And Andy used to be part of the productivity engineering team at Netflix, which is an awesome topic to me, because I used to be part of a productivity engineering team at Disney Plus. And so we had a great conversation, not just about productivity engineering, but about platform engineering, and just in general how Netflix has grown over time using the cloud, and all sorts of things. It was a really fun conversation, that we went a little long on, which was fine, I think. We both had a good time.

**Autumn Nash:** It was adorable, because you guys are like rival companies, but like on the same track, and it was just... It was great.

**Justin Garrison:** It's fun when you kind of do the same thing in different environments, because you learn a lot from someone else. And even though neither -- I don't work at Disney Plus, and he doesn't work at Netflix, it was still...

**Autumn Nash:** It was also a really great time to work in both those areas.

**Justin Garrison:** Yeah, the twenty-teens timeframe, and even early 2020s - there was a lot changing in streaming. And now in 2024 there's a lot of regrets.

**Autumn Nash:** What are the lessons learned? You've gotta be positive...

**Justin Garrison:** Yeah... You know, I actually tried to sign up for cable like a month ago, and I didn't even realize, there's no one local anymore. It's like an outsourced thing that like you have to -- it was a weird situation, and I was like "Wait, I can't just get like a cable?" They're like "No, no. You're bundling everything. Like, if you want to come over to cable, we are not your cell provider, we are your password manager, we are everything." I'm like "I don't think I want to bundle that much. I just want a cable."

**Autumn Nash:** Yeah, "I'm good."

**Justin Garrison:** So unfortunately, this is where we're at in 2024. As always with the show, we wanted to start off with some articles that we've found interesting... Sometimes software and general Ship It-related items, sometimes not. This time, I will go first with an article I've found called "Maybe you don't need SRE." I very much like this article, because part of my title at Disney Plus was SRE. It was a very long title. It was weird. But I was technically platform engineering, SRE, productivity engineer. I don't know. But SRE in general as a thing is weird. And this article was from someone that used to be SRE at Google, and they talk about all of the "Here's what it says in the SRE book, and here's how it was implemented. And maybe you don't need these things."

**Autumn Nash:** That was wild, when I saw that article on Twitter, because it was like... For one, it's just so cool for people to be honest. You know how sometimes when things get popular, it becomes like the Holy Grail, and people want to implement it everywhere... And what you need at Google, you don't need at a small startup, you know what I mean?

**Justin Garrison:** Yeah, for sure.

**Autumn Nash:** They're not always valuable in each situation. It's really use case-depending. Like, if it's a huge enterprise, it's going to have different needs than a small company. At the same time, it was just like "Wow people that wrote this book were like "You really don't need \[unintelligible 00:04:43.24\]

**Justin Garrison:** And specifically in this article, I've found it really cool how they call out something that when I read the SRE book, I was like "Wait a minute, the SRE team at Google controls budget from the application teams." They're literally like "You will not have an engineer, because you are paying us to do your ops work", essentially.

**Autumn Nash:** Oh, I did not know that.

**Justin Garrison:** And that was like a big leverage that they could say "Hey, if you don't make the software good enough, then we're going to leave, and you have to run it yourself, and you don't get SRE anymore." And there was this big political power of what SRE inside of Google, at least what the book states it has... And what most people that implement SRE have. Because from my experience SRE kind of evolved out of this sys admins became DevOps engineers, who then became SRE...

**Autumn Nash:** Isn't it funny how it's done that crazy transition, and then they're like "DevOps is dead!" And then they're like "SRE...!"

**Justin Garrison:** Yeah, exactly. And a lot of that was to keep up with pay rates, right? Because in many cases, your sys admin was not making very much money, and they weren't even seen as the same tier as a developer, as an application developer. They weren't writing code. They were running systems, and they were basically managing tickets, and to some extent, the support desk; they were like help desk. They were just help desks that has SSH keys, at some level. And then DevOps came along and were like "Oh, we're working with the dev teams. We're not just reactive."

\[00:06:09.08\] And in this article too, they point out that SRE work should not be reactive. SRE work should be future-looking development, like actual software development. This toil that you're working on should be handled as a software problem, not as a systems or a process problem.

And so yeah, the article in general - again, lots of neat things, mainly around... The things that I really liked were around those power dynamics of what does the SRE team actually do inside of your company, and how much leverage do they have? Because if they are completely separate from the dev teams, if the budgets are separate, and if it's a junior-ish team, which they point out in here, where a lot of these teams are new, and they don't have political capital, so they can't work on good projects... And then people leave, because they get bored. And that cycle happens.

**Autumn Nash:** Isn't that crazy, how that's like a literal thing you have to call out? Nobody thinks about that kind of stuff, you know what I mean?

**Justin Garrison:** Yeah, so I found it really good. I agreed with pretty much all of it, where SREs that I've seen implemented, especially at large organizations, just ends up being like this pseudo-sysadmin team that maybe gets paid a little better, but has no more power than they used to have.

**Autumn Nash:** Is the on-call terrible for SRE?

**Justin Garrison:** It really depends on the company, is my opinion on that. I was a systems engineer at Disney Animation, and I never was on call; we didn't have an on call rotation, because we never had a public service. We never had a thing that was like "Oh, we don't even run a website. That's not us. We outsource that thing." And so as I was transitioning out of there, we did have like "Oh, we should know who to call if something happens", but all of our customers basically worked the same time that we worked. And if we weren't there, the customers weren't there either, in most cases. But Disney Plus was absolutely different. It was really nice being on the team, and working with some of the people, like -- Runbooks were actually really good there. But in general, I don't like being paged at night. Or at kids' birthday parties. And I have pictures of me being paged at Disneyland... And I brought my laptop in, we sit down and we fix it.

**Autumn Nash:** That's a bummer.

**Justin Garrison:** It's a lot of fun, but in general, SRE is usually just like the ops person for the dev team. And in this article, they definitely point out, the SRE teams should be software engineers, and they should not be managing the dev ops team. And it also points out in here how platform teams play in there... Because SRE is not platform.

**Autumn Nash:** Which is also really interesting, because I feel like these terms get floated around, but nobody really talks about the web of how they relate to each other. So I think that's really cool, because... You know, when you go to school for computer science, you're just like "I'm going to be an engineer", but what type of engineer? You know what I mean? People don't even know... I remember when I went into the solutions architect interview, I had to Google what a solutions architect was, because I was like "I just thought I was gonna be an engineer when I graduate with this degree", you know?

**Justin Garrison:** Yeah. To the extent -- like, they're not all defined, even at the same company. If you go to any large enterprise and it's like "Oh, what is SRE?" It was like "Well, what division are you in?" Because that's gonna have a different meaning.

**Autumn Nash:** Yeah, it's wild. Just like being a solutions architect. You can be a specialist versus generalist, and they're very different jobs. You can be on the service team, you can be... But it's also -- I think these things are really cool, because you can't want to be something if you don't know it exists. So I think when people talk about what's a TAM, what's a solutions architect, what's an SRE, what's DevOps, you know that it's out there, and it becomes an obtainable goal.

**Justin Garrison:** But also, none of these job titles existed when I was a kid, when I really think about that... Because they get rebranded, and things change.

**Autumn Nash:** Not even as a kid, though; have you ever got a job and you were like "This is my dream job", and then eventually you're like "Okay, I've done it. What do I want to do next?" You know what I mean?

**Justin Garrison:** Yeah.

**Autumn Nash:** So it's not even just as a kid. Like, you do DevRel now; you didn't start off in DevRel, but you're really good at it. So it's like, your job as a systems engineer prepared you for this, but it also -- like, this is like a skill to be able to explain technology to people, and it's not a skill that everybody that's technical has. So if you didn't know that existed...

**Justin Garrison:** \[00:10:05.05\] Yeah. And sometimes, depending on when you're looking for a certain type of job, that job may not exist, because the industry around it isn't -- they're ready for it, or the time has passed for it... There's so many things that we did in the '90s as like job titles that \[unintelligible 00:10:16.16\]

**Autumn Nash:** Well, just think about DBAs. And then we got managed databases, and the cloud... You know what I mean? And we still have DBAs, but it's not as common as we did before, because a lot of people don't manage their databases anymore.

**Justin Garrison:** Right. What you were doing as a DBA 20 years ago is probably very different than what you're doing as a DBA today.

**Autumn Nash:** Yes. That's kind of one of the cool things about our industry; you could be doing one thing -- I know so many people who were like engineers when they were TAMs, or they started off here, and they're something completely different later. And it's so cool that you get that... And also, nobody talks about getting into the industry, and you're like super-hyped, and then it's like "Okay, and then where do you go? How do you grow, and transition, and pivot?" Because everyone is just wanting to be an engineer, but you have no idea what space you want to work in; being a frontend engineer is very different than backend, or platform... So I think that's cool.

**Justin Garrison:** I really honestly think that working in a helpdesk helped me a lot identify some of that... Because you get calls for all of the departments that are behind you, that you support.

**Autumn Nash:** But it makes me so upset that people always want to say that's like a non-traditional -- people are like "That's a non-traditional background." And a lot of people have degrees that were working in the helpdesk. Dude, some of the best principals I know were either helpdesk people, engineers, cloud or support engineers, or they were test engineers; QA testers. They are the best. They will debug stuff in a way that you're just like "I didn't even know you could do that." Literally, one of my favorite principals - she is just amazing. And she used to be a support engineer, and I'm just like "How can we down that?" People look down at people, like "Oh, you're like a non-traditional." And I'm like "They are badass. They can do the most amazing things with a terminal, and find this problem..." And I'm just like "Teach me your ways."

**Justin Garrison:** I think one of my biggest realizations, at least the past couple years, is the fact that I don't think I ever left the help desk.

**Autumn Nash:** No, it's all troubleshooting. Most of being an engineer is trying to figure out where, what went wrong. The whole time.

**Justin Garrison:** But yeah, like, who I'm helping and who's calling me is different; it has changed. But in general, the skills I learned at a help desk are still super-valid.

**Autumn Nash:** And nobody's better than anybody. We're all trying to fix somebody's problem. You're all getting a ticket. You're all fixing it. You know what I mean? Like, everybody is gonna, like, all hands in. It's really well paid groundwork, and it's all the same. You know?

**Justin Garrison:** Yeah.

**Autumn Nash:** Okay. So my link is Penn Live, I think... I think we've all seen it, but "Ex school worker stole AI secret from China, according to the feds." But I just think that it's wild. AI has got to the Department of Justice... So apparently, the Department of Justice uncovered that this person stole 500 confidential files from Google, and sent it to China. But it's crazy, the Attorney General is commenting on tech, you know?

**Justin Garrison:** I mean, I guess it depends on who you're stealing it for. If that went between companies, that's a localization, or Supreme Court maybe, but...

**Autumn Nash:** You're like "What were you doing...?! And how much were they paying you, dude?"

**Justin Garrison:** Yeah, I mean, at some point you have to trust the people you work with... And sometimes you say "Oh, we pay these people enough." It's like "Well, if someone else is gonna pay them more, people might just chase that still. And that is a scary --

**Autumn Nash:** Dude, you worked at Google. What did you need?

**Justin Garrison:** This actually reminds me of way back when GPG came out. Pretty Good Privacy. That's PGP. When it came out, they had it, and they had software, and they open-sourced it. And the United States was coming after them for lawsuits, the person who wrote it - I forget his name - because it was security code. And security code was seen as munitions to be exported. So you could not export it. It was open source; it was available. The Internet wasn't a thing yet, but we could put it on a disk and give it to someone.

**Autumn Nash:** \[00:14:24.20\] You know, I never thought of open source in that context... Because I've only done it in the context of the internet, and pulling things off GitHub... So that's wild; open source back when you were like given discs... That's really cool.

**Justin Garrison:** Yeah, it was a physical disk, and they're like "We cannot fly internationally with this, because it is a munitions export according to the governments." And so in order to get rid of all of the accusations, and get past the rules that were in place, was he literally wrote a book with all of the source code in it, because there was still a provision that you could write code in a book, and that would not be an export. And now that it was publicly available in the book, he could then put it on a disk and give it someone.

**Autumn Nash:** First of all, can I just say that I love your random tidbits of information?

**Justin Garrison:** I just read it last week, and it was amazing. I'm looking for that book now.

**Autumn Nash:** It makes my life like -- I won't see you for three days, and then you're just like "Guess what I did this weekend?" and I'm like "I'm so here for it. Tell me." Your eyes get like the Justin-like thing, and I'm just like -- you know when you know that your friend's about to tell you something, but it's gonna be like good, right? You're just like "I'm so here for it."

**Justin Garrison:** I'm just glad that they're still good... Because my kids don't think they're good. No one else that I'm talking to in-person. They're just like "What?!"

**Autumn Nash:** Oh, dude, my kids think I'm so lame. My kid was like "You're over protective." And I was like "Rude. I'm cool. I've got pink hair. Stop trying to -- why are you so offensive? Like, I gave birth to you and I feed you." Okay, this is crazy. It carries a 10-year penalty... And the fines are up to $250,000. And they are basically saying that -- it illustrates the affiliations of companies based in the People's Republic of China, and that they're willing to steal American innovation, but I'm just like "What was he doing, and where was he stealing it for?" Because dude, if he was just giving it to some tiny company, there's no way that they would have went after him like this. I was like "What were you trying to do with AI?"

**Justin Garrison:** There's a lot of questions in there, of like "Where was he starting from? What did he work on? Where was the information going?"

**Autumn Nash:** And they were so vague about it. I was like "Oh, we're gonna find out about this later, and it's gonna be good." I'm just like "I can't wait till there's a TV show about it." Some sort of documentary is gonna be lit.

**Justin Garrison:** It'll be an episode of Silicon Valley, or something like that.

**Autumn Nash:** No, I want one of those, like CNBC, like "American Greed." Those ones are so good. People do crazy stuff. Like "Dude takes his tiny plane, flies it into lake, fakes his own death, and comes back 10 years later", and you're like "Damn, dude." How bad were your problems?

**Justin Garrison:** Okay, another site... I literally just watched a documentary. It was an ESPN documentary about someone that -- in the late '90s, someone that bought the hockey team the New York Islanders. And they were like "I'm gonna buy them for $160 million. And here's my bank account, here's my all this stuff. I'm just gonna go straight to buy them." They had no money. They did not have any of them, and they forged all these documents.

**Autumn Nash:** Okay, as a brown person in America, you can go into a store and people will follow you for something that costs $5, but dude can walk in and just be like "I've got like 160 mil."

**Justin Garrison:** It was back in the '90s, and it was hard to verify some stuff... But he sent some faxes, and he's like "Here's my budget, and I want to buy the Islanders", and he was the legal owner of the team for like four weeks.

**Autumn Nash:** I have one for you that beats that.

**Justin Garrison:** What's that?

**Autumn Nash:** \[00:17:40.20\] So there's this episode of American Greed. I may or may not have seen all of the ones on Hulu; don't judge me \[unintelligible 00:17:45.00\] obsession, but... There was this dude, and he was a brain surgeon, or spinal... Something that you should not touch. Okay? And he faked all of it. Like, he was in there, just like literally making it so people couldn't walk, killing people... Like, first of all, the audacity; who walks into an actual operating room, and is just like "I got this"? Like, for real. Wouldn't you be like "Oh, that sounds horrible. I wouldn't want to hurt somebody." The audacity that this man was like "I got it." And just walked in, playing with people's brains and stuff, like "No big deal." Just murdering people. And nobody stopped him. He went and he did it so many times, and made it so people couldn't walk, people died... And I was like "Y'all just let him do it to like a bunch of people, and you're like "Oh, at some point, we should --" Like, what?!

**Justin Garrison:** There's an opposite of that, too. The podcast The Darknet Diaries is all about, you know, darker sides of the internet. And there's a company called Exact, which was basically shut down, because they had schools, multiple hundreds of schools that were "training" people to do different skills, but it was not legitimate schools, and they were not actually giving them training, but they would give them actual like "Here's your degree", and people could say "I have a degree from this school." It's like, it's not real. None of it was real. And it was all a scam to be able to get people to like "Hey, we're having problems with this thing. Can you pay us $500 so we can expedite this process?" And like they had like these courses made, but they weren't like real, legitimate courses. And hundreds of thousands of people got "degree" from these schools, from all different things, and they just kept starting and creating new and new schools. Every time they got found out, they would shut one down, and they were like "Oh, here's another one."

**Autumn Nash:** When they did that with the Art Institute, that's like one thing. \[unintelligible 00:19:27.11\] But that's one thing. Okay? Like, I went to some crappy school, and you're like "Dude." And I'm going like "Art school is not for me at this point." But like, people's brains though, and like...

**Justin Garrison:** At least the interview they were doing with someone, they would say -- like, they had some areas that they would not give degrees for, and I think medical was one of them... Because like "No, we have morals, alright?"

**Autumn Nash:** Oh, thank God. I was like "Do we need to go --" They were like "This is our line."

**Justin Garrison:** But they would do it for like counseling, like school counselors, and people that it was just like "Wait a minute", and it was like, you couldn't track it back to one school.

**Autumn Nash:** Do we just need to do -- like, how do we find all the people they gave fake degrees to?

**Justin Garrison:** I don't even know anymore. The whole degree system... I am confused.

**Autumn Nash:** This is a funny thing, okay? Being a woman and telling your friends to apply for jobs, they're like "I'm not qualified, even though I have 90% of this application", and you're like "Dude, there's people out here faking their whole life. Just apply. They'll tell you if you're not good at it. Just do it."

**Justin Garrison:** Well, that was quite a few different tangents... But really fun. And I think our conversation with Andy goes a lot of different ways too, so...

**Autumn Nash:** I feel like we've reined it in in our conversation with Andy, because there was a whole 20 minutes before that. We did a good job. I feel like it could have been worse.

**Justin Garrison:** Yeah, we came back around, and it's a great conversation. Everyone's gonna love it, and it is very much more related to infrastructure and software than this conversation we've had about education.

**Autumn Nash:** And crime. Don't forget the crime.

**Justin Garrison:** And the crime as well. Anyway, let's jump over to the conversation with Andy, and then I've got a couple of things after that.

**Break**: \[00:21:15.02\]

**Justin Garrison:** So today on the show, like we said, we have Andy Glover, who is the CTO at ReadySet. We will get into some of the details about what he's doing at ReadySet, but this podcast specifically is about his 10 years at Netflix, working on the productivity engineering team... And what that means, and how that interacts with DevOps, and platform engineering, and all of the things that is not necessarily current Netflix, but from his experience of going through a big transition of DVDs to streaming services. Welcome to the show, Andy.

**Andy Glover:** Hey, thanks for having me.

**Autumn Nash:** How's CTO life?

**Andy Glover:** Oh, CTO life is great. I'm at a small startup, so having, again, spent a long time at Netflix, a big, giant enterprise, basically, with huge scale... And now I've jumped headfirst back into a small startup, trying to figure out product-market fit, with a super-interesting technology.

**Autumn Nash:** How do you like the contrast between like startup, and like big enterprise?

**Andy Glover:** Well, it's very different... When you're at a big enterprise, everything's kind of like done, so to speak. They figured out most problems, and it's just more on like execution. And then when you go to a small startup, you have to figure out both. You've got to figure out what the problem is, how you're going to solve it, and then you've got to figure out how to execute... And it's not even just tech, but it's like people, and the processes around that as well. So it does make you appreciate when you come from like a Netflix or a Disney or whatever it is, the hard work that the initial (we'll say) founders, who created those companies and created that culture, and scaled it to, in the case of Netflix and Disney, billions and billions of dollars, and thousands of people. It gives you a deep appreciation for how hard that is.

**Autumn Nash:** Yeah, because they've made those processes so you can focus on the tech. But then when you go to a startup, you've got to do all those processes. Well, and then that kind of goes back to platform engineering and what your team did, is letting engineers focus on doing just the writing of code while you worked on the infrastructure. So maybe you could explain what a platform engineer is, and what the team did?

**Andy Glover:** Yeah, exactly. And I think what's fascinating, by the way, is that platform engineering is becoming kind of like a buzz phrase in our industry... And at Netflix, platform engineering at this point has probably been around -- it predates me, so we'll say 13 plus years. And the whole idea of platform engineering at Netflix, or I would imagine any company - it's a leverage play.

\[00:26:10.26\] And so when you think about, again, trying to get a product from 0 to 60, or idea to customers' hands, your most expensive resource is people... Whether we like it or not, developers - I think we like it - are very expensive. And as a business, you're like "Hey, we want to get this thing, this feature, whatever it is, in front of people as quickly as possible, and obviously, as reliably as possible as well." And so when you look at a platform team, the whole idea there is to ultimately make, we'll say development teams more productive. Again, it's that leverage play, like "What can platform engineers do to enable the feature engineer to work on their feature, and not have to worry about "the platform" or in this case "infrastructure", but I'm putting that in quotes as well, because infrastructure is very large. It's not just machines, but it's everything around the machines.

And so at Netflix, platform largely is three domains. It's development experience, compute, basically where all this stuff runs, and then storage. And that's platform. And I imagine that's pretty much platform at any large, or any company. You don't have to be a large company to have a platform. But certainly, I imagine, big enterprises like Disney, Netflix and the like have platform teams. And again, the whole purpose as a platform engineer is you are enabling other engineers to be more productive. And we can talk about what productive means, but that's the goal.

**Autumn Nash:** Were you guys like the beginning of the concept of the platform teams?

**Andy Glover:** Yeah, I think Netflix probably was leading the charge there. I mean, I'd never really -- it's funny, because when you're there, you don't realize it.

**Autumn Nash:** Well, I mean, at Netflix. Were you guys the first platform teams at Netflix?

**Andy Glover:** Were we the first platform teams at Netflix? Yes.

**Autumn Nash:** So like when you start - because like you said, people are expensive. And you're getting this whole team that you're creating to do this... What metrics did you use to kind of quantify you were doing a good job, and this was valuable?

**Andy Glover:** Great question. I think - and that story definitely has evolved, and full disclosure, I imagine is still evolving at Netflix. So when I got to Netflix, the metric for leverage at the end of the day was very much like asking other teams "Are you getting value out of these platform teams?" And there was no singular metric that you could measure other than "Hey, Justin, your team does this feature thing on iOS. Do you feel platform's giving you some sort of leverage?" And usually, the answer was yes. If it was a no, then it was like "Well, how can then we do better?" Autumn, are you getting what you think you need out of platform? And so it was a constant conversation across the company to ensure that we were providing value.

And I think the metrics were even finer-grained at a team level. So I ran delivery engineering, so ultimately, I was charged with enabling people to move fast with reliability. And so my metrics would be like "Autumn, are you using my products?" And if you weren't, then it's like "Why aren't you, and what can I do to enable you to use my products?"

Today, or I'll say when I was leaving, there was a much more rigorous process put into place to say "Could we actually measure "productivity", or spend?" So how much, from a productivity standpoint, what's the lead time for developers? When they come to Netflix, when are they actually "productive", and pushing to production? So how many days is that, or hours?

**Autumn Nash:** That seems to be the industry standard now, of all big enterprises. Like, when can you get people in, and when can they start contributing, basically?

**Andy Glover:** Yeah. Because - back to that, like, they're expensive.

**Justin Garrison:** Yeah, it's a return on investment. It's like "Hey, we're investing in this person. We have a contract, and their time now should be making us money." Andy, you were mentioning Disney... I don't know if we actually have mentioned it on the podcast yet, but I used to work on the productivity engineering team at Disney Plus. And so this topic is near and dear to my heart. And so you've talked about platform engineering... How do you differentiate that from productivity engineering?

**Andy Glover:** \[00:29:59.18\] Well, so at Netflix, productivity engineering was a sub-org of platform. So again, back to the notion of, you know, lowercase p platform teams are charged with a leveraged play, and then there's a focus of that leverage. And so at Netflix, productivity engineering when I was there was very much focused on the developer experience at Netflix, and how can we make developers more productive through the lifecycle, the SDLC of your day to day interaction, let's say with code. And so we thought of it in three domains. There was a focus on the local development experience, where you and I were talking about like Spring Boot and whatnot, and there's other languages in there. And then it was the delivery experience, CI/CD. So how do I take what I've written locally and get it somewhere reliably? And then there was - we'll call it like the production or operational experience; how can I observe it, and obviously fix it if something happens. And that's productivity engineering; that sits in a larger organization that is then charged with "Well, where's all this stuff run? Where's the compute infrastructure?', if you will, which is quite large at, again, a streaming company. And then actually even bigger is data, right? So where's all the data that we're gathering? Where does it rest, and then how can we access it? And how can we make sense of it?

**Autumn Nash:** And it's really cool, because your time at Netflix not only went from like the DVD to like streaming, but also it was a huge time for infrastructure. Infrastructure has come so far, in the last 5-10 years. There's just so many more I guess products in the market, for like "Hey, come do this. Come use TerraForm. Come use Ansible. Come use all these different like parts of like --" And more things are available, people want to automate it in different ways... So how did the boom of, I guess, infrastructure tech maybe (I don't know what you'd call it) and the fact that you were transitioning from DVDs, to like streaming... That's a lot of change, and a lot of industry change, and growth... That's a very exciting time.

**Andy Glover:** It was. I joined Netflix in 2013, and they had already as an organization decided "Hey, we're gonna do the streaming thing." So they had been streaming for a little while. And moreover, the big thing that Netflix pioneered then, which now doesn't even seem neat, is they were in a datacenter, and they were like "Hey, we're going to the cloud." Back to your point about infrastructure. So that also coincided with "We've got this DVD thing, and we want to do the streaming thing." And so there was a very deliberate decision to separate the two. Like, DVD is going to run on its own, all intents and purposes in a different room, different infrastructure, different teams, and then we're gonna do this streaming thing, we're gonna do it in the cloud, because we want to be able to scale, basically, or burst out into more capacity.

**Autumn Nash:** Which is really smart too, because you can completely turn off the DVD, because it's separate eventually, and the fact that they started in the cloud meant that they could -- like, you don't have to know all of where you're going to scale, because it's easier to scale in the cloud. Also, I think Netflix is so good at teaching. When they do these transitions, or they do -- like, what they learn, they're super-good at kind of playing it forward, and like putting it in a blog, or giving talks at re:Invent, or like different places. They're really good at sharing their experience, which I think is cool.

**Andy Glover:** I agree with you. I mean, that was one of the reasons why I wanted to go to Netflix, because there was this brand of "Hey, they're doing really interesting things, and sharing it with the world." And I think there was a deliberate decision, that obviously predates me, where leadership said "Hey, let's do this. Let's share with the world. One, so that we can pay it forward", like you said... And I think the other one was "It's industry validation." So if Netflix shares "Hey, we did this really cool thing", and you all are like "That's the worst idea we've ever heard. We solved it in this way." It's like "Well, maybe Netflix is doing it wrong." It just so happened Netflix was doing a lot of things right, because they were early.

**Autumn Nash:** It's also a great recruitment tool, because when the next engineer reads it, and they're like "That is awesome. I want to be a part of it", you know.

**Justin Garrison:** That's a really good point about like recruitment and sharing, because I was from the outside following what Netflix was doing for a very long time, with - when you initially were going to the cloud, you were making immutable infrastructure, you were making these VM images, and then you were shipping your application as a VM... And then containers came out. And Netflix didn't share a lot, because you had this product; as a productivity, as a platform team, you were all-in on VMs for a while. You were shipping VMs, and packaging those in ways that could be reused and scaled, ASGs... It works great. But then containers comes around, "Actually, we could ship a smaller package, and we can make it react a little faster." And it took a little while for Netflix to really come out and start talking about containers, and how you were using it with Titus, the container orchestrator that was built, that originally was Mesos-based, and I think it's now Kubernetes-based...

**Andy Glover:** \[00:34:29.07\] Yup.

**Justin Garrison:** But you went through these multiple cycles as a platform team. How did those migrations essentially impact what the developers were responsible for, or how much they had to know? Because that shift from on-prem, to golden image VM-building to container orchestration are very different environments for one platform team to kind of see it through.

**Andy Glover:** So the short answer is it's super, super-painful. And I've got like scars all over me. So if I start weeping during this conversation, please edit it out. \[laughter\]

**Autumn Nash:** When you get like PTSD, you're like "Oh, I remember that..."

**Andy Glover:** Gosh, Justin, why did you go there...? So -- you captured it.

**Autumn Nash:** Andy's sweating... \[laughter\]

**Andy Glover:** So I think this is a lesson learned for all of us; it's not unique to Netflix. But what happens is you build this machine that works really, really well. And so what you paint it is like, yeah, Netflix built, I'll say, a machine that enabled rapid development, and I'll say reliable development in AWS with VMs. And in retrospect, everything's great in the rearview mirror, and it was like "Yeah, it was kind of painful here and there", but it was battle-hardened and rock-solid. And then containers came out. And there was a -- oh my gosh, a lot of conversations on "Hey, how do we take advantage of containers?" And there's kind of two ways of looking at the advantage of containers. There's the developer experience, which I want to definitely come back to, and then there's the infrastructure, like "How do you actually run these things?"

I think it was pretty much near universal within, let's say, Netflix engineering, that the developer experience with containers is just superior to what was before. And that was -- I remember in my early days at Netflix firing up services that I was working on, and it was kind of painful, like "How do I actually test this thing and run it locally?" And the fact is you couldn't always run it locally, so you had to deploy it to the cloud, and all that. And back to your point, baking that golden image took time...

So again, everyone talks about moving fast and breaking things. The reality is no one wants to break anything, but everyone definitely wants to move fast. And so it's like "How quickly can I add a feature, and then get it in front of somebody?" And that was slow, compared to where the company is today. And it was that whole VM-based thing.

So there was definitely a lot of conversations on how basically development teams could leverage containers, and then "deliver that" to the infrastructure, and then let the infrastructure figure out where and how to run those containers. That story is probably -- again, I've been out of Netflix for a year, but probably is still being told, and it's probably a great podcast that you should do, is talk to where they are... But that was a very - I'll say it's probably still a very challenging evolution. Because ultimately, if you think about platform teams providing leverage, running a massive infrastructure like Netflix... I mean, think about the billions of devices that are like streaming at any given point across the world... It's super-reliable, and based on, we'll say, VM ASGs. And then you want to change that to something else, like a container orchestration engine; we'll just say Kubernetes. Titus is Netflix's manifestation. It's definitely come a long way in being battle-hardened, but it's just a new way of like "How are we going to run these things at scale?" And there was always that tension of like "Well, we've got great observability, we've got great reliability, when these things break, we know how to spin them up, we can evacuate regions... We can do all these things", and then you introduce kind of a new layer and infrastructure, and it's just a lot of new work.

\[00:38:09.08\] And so that migration... You know, Titus was born probably 2014-2015, and when I left last year, it was still there. Now, there was a great use case for containers, in production; I'm sure you can read about this on the Netflix blog. That was batch processing. So if you think about like the Netflix infrastructure, there's all the infrastructure required for you to watch something in the moment, right? And in fact, the reality is like when you sign into Netflix, and you see "You are authenticated", and then you see the list of content, that's all served up with AWS. And then when you hit Play, it's actually served up from a point of presence near you, like a POP. So Netflix runs its own CDN. And so the compute needed to do that AWS, or that, you know, when I come in and sign in, and see what's available, is one piece. And then there's all the compute needed on the back side of that to say "Hey, Autumn, this is your recommendation. Based on these things you watch, this is what we're going to show you." That's a batch process. And those teams found immediate value with something like Titus years and years ago. So that's where Titus kind of got its foothold, and now where it is today - like I said, probably a great conversation to have with someone there now...

**Justin Garrison:** Well, open invitation to anyone on the Titus team, or the Netflix POP, the CDN team... Because that is actually one of the most fascinating things that I've always thought of. Because Disney Plus, we used other people's CDNs. It was just like "Hey, we just find all the CDNs all around the world that already exist." And Netflix is one of the really good success hybrid stories, where you use on-prem Point of Presence, where you actually have hardware that you're responsible for, they go to colos, for the things that make sense, that like "Hey, guess what? I don't want to pay for egress." And we could just like do peering contracts with the people in these areas, and put a box in a colo, and then we can store all our bits there, whatever is needed in that region, and serve it up. And then all that other dynamic stuff that might need to scale for live events, or big signups for Stranger Things, or whatever, that can be a little more dynamic in the cloud environment, where it's like "Oh, those do scale up and down." These points of presence - they don't have to scale up and down. We don't have to do dynamic scaling for everything. Let's just do on-prem where on-prem makes sense, and use the cloud where the cloud makes sense.

**Autumn Nash:** I have so many questions. I'm so excited about this.

**Andy Glover:** Yeah. We should totally talk with the Open Connect. So then the CDN team at Netflix is called Open Connect, and those folks, they've done just incredible work. I mean, everyone at Netflix has done incredible work, but they've done some really interesting work from that standpoint.

**Autumn Nash:** I love that your experience -- everybody talks about building cool things, but nobody talks about that growing pains that you go through when you're in the middle of building those cool things, and you look back and you're like "It was cool, but wow..." But also, suggesting what was it while you were building Disney Plus, and then what was the relationship kind of wanting to learn from what Netflix did, versus you guys are building a streaming service, Netflix is kind of like your partner, and you're both building this? And then also for you, Andy - Disney Plus is new competitors coming, but you also worked with them. What was that like for you guys both?

**Justin Garrison:** I mean, we never met before... But also, when I joined at Disney Plus, it was a year before Disney Plus launched. And so we had one goal in mind; it was like "It could not crash on launch day." That was it. A lot of the stuff had already been established, they already had a lot of container stuff there... We had a very similar productivity engineering team, where we had a deployment team, we had a CI/CD team, and then we had an infrastructure observability team, which was my team. That was the group I was on.

**Autumn Nash:** But let's give you credit, though... It launched during COVID, and they had so many more users than it was supposed to; the fact that it didn't crash is like, wow... You know what I mean?

**Justin Garrison:** It launched November, so it launched just before COVID...

**Autumn Nash:** Well, but I mean, it was such a rush... You know what I mean?

**Justin Garrison:** I did not sleep that night, because I was just excited for it. It was coming, I was like "This is literally like --" I was watching the Slack channel of people like "Hey, we're pushing the app live in this store, we're pushing the app live here. Oh, it's going live in this region, it's going live here." And I slept for, I think, three hours at night. And to this day, the very best thing that I ever did was just before I went to bed, I'm like "I'm gonna set a Twitter alert for \#Disneyisdown."

Literally. Because I'm just like "You know what --"

**Autumn Nash:** \[00:42:22.14\] Dang, Justin, you were preparing for the worst...

**Justin Garrison:** No, but seriously, what's gonna happen -- and my alarms aren't gonna hit at some point, and I want to know from my customer if this is going to happen. Because I was responsible for the infrastructure.

**Autumn Nash:** So it launched, and didn't go down. But the fact of scale... Think about the fact that they had Disney, like sing-alongs and all these things that they had to add, because all of a sudden we're stuck in the house. Our kids are like -- Disney Plus got me through like having an apprenticeship during COVID. And can you imagine how much scale that they did not expect for? Like, you guys had so many customers.

**Justin Garrison:** Andy, I don't know about for you, but one of the, I don't know, dirty secrets, or interesting secrets for me was the fact that Disney Plus was not dynamically scaling on launch day. It was scaling a bit, but we had scaled up for probably three weeks before. We're like "This is how much we expect to need. We need to pre-warm load balancers, we need to have scaling groups already ready to go... We are not waiting for somebody hit the API, and then we're going to add a node." No, no, no. We were just quadrupling all of our infrastructure a month ahead of time, which allowed people like - well, you could only dynamically scale in the cloud. I'm like, "To some degree..." I was like "But I could have bought hardware for that. We could have had that here in a month, and racked and stacked, and ready to go", sort of thing. But yeah, that was one of the interesting things to me, was like launching Disney Plus, which went from 0 to 10 million users in 24 hours.

**Autumn Nash:** And then after, in months, the amount of people that it got... And think about it, it's not like people were watching for a couple of hours after school. People were watching 24/7, trying to get their kids to sit down.

**Justin Garrison:** It was a great experience for me to be able to go -- especially coming from movies. Because movies, once the movie launched, I didn't do anything. I didn't have to touch a thing. We literally would archive all of the stuff, where it's like "Okay, Frozen 2 is out. There you go. Just go ahead and put that in the archive", we moved to the next thing. Disney Plus was the exact opposite, where it's like "Hey, you're launching something..." Stranger Things come out, and like now the work starts. Like, hey, we're working up to this point, and now we have to do all the other work to make it happen all the time.

**Autumn Nash:** Not just that, but you guys soft-launched, so you were still pulling things from Netflix... You know what I mean? Like, you had to continue to add so much content when you first started.

**Justin Garrison:** And that's like a different -- like, Disney and Netflix are so big at the enterprise level. That's a completely different team. The most complex step functions infrastructure I've ever seen was the media ingestion pipeline for Disney Plus.

**Andy Glover:** Oh, yeah...

**Justin Garrison:** And the amount of steps that had to -- because we used a lot of Lambda, a lot of step functions. When I saw that, I was just like "Whoa, what are we doing? Like, this is --"

**Autumn Nash:** And can you imagine if like one thing breaks...?

**Justin Garrison:** Well, and the amount of checkpointing, and streams... You have to say like "Oh, we made it to this step, and so now we're gonna restart from there once we get a new one", and all this stuff.

**Autumn Nash:** What kind of testing do you do with that much data, to make sure it's intensive for what it's going to do? Also, something I thought was really interesting - as \[unintelligible 00:45:07.04\] when you start, you have to do a mock presentation. And one of the coolest things was that -- because there's only so much you can talk about. And Netflix and Disney are actually really cool customers, that let you talk about, you know, the compute... Like I said, they're really good at sharing, especially Netflix. And I remember getting to put like baby Yoda on a slide, because Disney Plus used DynamoDB for bookmarks. Like, it's so cool the way that Netflix and Disney Plus to use data, to then suggesting this to their customers. What was that like? Because I'm guessing when you were there during the first part of streaming and everything, you started taking in data that you probably weren't taking in before, to learn more about customers and to suggest stuff... So what did you have to do for infrastructure, for like trying to take in that new data and use it for like the platform things?

**Andy Glover:** Well, yeah, therein lies all the scale challenges. So Netflix in the end ended up using Cassandra...

**Autumn Nash:** \[00:46:00.15\] Oh, my God. Can we just talk about that for like \[unintelligible 00:46:01.13\] and Netflix literally hired some of the best Cassandra database people. And that is hard to find. That is a skill. Scaling Cassandra is no easy task. It is a whole thing. Those nodes are --

**Andy Glover:** Yeah, again, that's part of that -- when I talk about platform and leverage, there was a platform team focused on Cassandra, and scaling it, with the rings, and... And I think there were early experiments that predate me, that the teams were looking at like SimpleDB... And there were some products that leveraged SimpleDB when I got there. But in the end, it was a conscious choice "We're going to store our streaming data in Cassandra." Today, Netflix uses probably every database under the sun to do something, you know...

**Autumn Nash:** But it's still amazing, because when you go to Cassandra presentations, and different talks, and different conferences, some of the best engineering talks are from Netflix, because they have some of the best -- and they've used it so long, and they've put so much -- like, Cassandra is a highly available, super big-scale database. You're not going to use that unless you are taking in like tons of data, and it needs to be everywhere. And it's just so impressive how Justin was saying about how they pick what they want to run on-prem, what they want to run in the cloud. They've made such good choices, Netflix... Even what you guys went through with containers and everything, they've made such good choices of hiring the best people for a lot of things, and finding the right tech for things. The fact that they are so good at picking what to run in the Cloud, what to run on prem...

**Justin Garrison:** And I mean, what we were just saying about that, though - like, that's a hard-earned best choice. You had to make the mistakes first.

**Andy Glover:** I was gonna say, yeah... Because we're here, again, looking in the rearview mirror, being like "Man, they made so many good choices." And what you don't know is all the failures that went into making that choice.

**Autumn Nash:** But to be able to pivot, though... A lot of people will be like "This was a horrible idea, but we're gonna keep going, because it's how we've always done it." That is a thing.

**Justin Garrison:** I think that gets so one of the key benefits of a platform team, is because your platform is moving while you're trying to keep some consistency for the people that don't need to learn all of those other bits of like "Hey, we went from VMs to containers. Hopefully, your developer experience isn't completely different... There are gonna be changes, we are going to do some things different, but hopefully, at least some of the interfaces and some of the things that you know as a developer have not completely shifted out from underneath you, like they might have when you went from on-prem to the cloud."

**Andy Glover:** Sure.

**Justin Garrison:** Like, the first time you're just like "This is in a different place. I don't know what's going on." My box under my desk was the fastest way I could ship anything in an on-prem environment. Because it's like "Hey, I already have a computer, I already have resources, it's already on the network... Here, everyone, hit my IP address. And then we're going to add it to DNS, and then we're going to ship my box. That's the new production thing." And you kind of want that experience for wherever you go. You want to make it that easy to say "I don't care if you're going to Amazon in a VM, or a container, or a CDN, you should be able to get the same -- the box under my desk is the most I need to understand." I can set up my dev experience, and then be productive in writing lines of code, closing tickets, whatever it is of that measurements, and then everything else is someone else's team to make sure that that experience is seen through end to end.

**Autumn Nash:** That also relates to that article you were talking about, of cognitive load and focus of developers... Because every time you have to go figure out the stuff that's underneath what you work on, you're stopping what you're doing, you're stopping your flow, and then you have to go figure this out and debug it for forever. So as long as you can keep people working kind of in their zone, and not adding to their cognitive load, and as much context-switching... Like, we all do it, but the least amount possible. You're so much more productive. So that adds so much value.

**Andy Glover:** \[00:49:52.29\] I agree. And as I was thinking through kind of like all the lessons learned that you can learn from a Netflix and Disney, and every other company out there that's articulating "Hey, we learned this lesson", I think a big part of that is like humility and empathy... And that's very much -- going back to our conversation about when you go to a small company and you realize "Wow, at this big company they established like this culture", and the things that I appreciate having learned, having spent time at Netflix was the values of, one, humility, and being able to talk through like "Hey, we messed this up." So that manifests itself in blameless post mortems, and all these lessons learned... And "Hey, this thing broke really badly, and ultimately affected, X, Y and Z, whether that be you as a member trying to stream, or you as a developer trying to do this thing in production, or whatever. And importantly, trying to figure out "What did we learn from that? How can we make it better?"

**Autumn Nash:** I think engineering would be such a better culture if we had more empathy... Because you have to break things to learn. But if we don't share knowledge and have empathy, everybody's too scared to break things or to ask questions. And I think we'd scale so much faster.

**Andy Glover:** Well, and then back to the definition of a platform team is ultimately like - it's a leverage play, right? And how can I provide you and Justin leverage? I have to understand what you are trying to get done; I have to have empathy for your job. And each of you are probably doing something different. Let's imagine, Autumn, you're on a data team, trying to basically scale or get answers from data... And then Justin, you're an edge team, trying to make sure, whatever, these devices work in this region. And they're two separate problems, and I've got to figure out "Well, what is the leverage play that I can help both of you?" And this is probably a bad use case, but if I ignore you, Autumn, and I help Justin, then back to our kind of metrics discussion, when I come to you and be like "Hey, is platform providing value to you?", you're gonna be like "No. I had to do all this myself. And I was hoping you all could do some of that for me, because I have limited capacity." Again, people are expensive, and we're trying to get this stuff done for the business, and ideally, the commonality is done by you as a platform team. And so that's really important, is having that empathetic relationship, so that you can, again, show success when it comes to metrics, and investing in something like a platform.

**Justin Garrison:** I don't know how this was for you, but one of the best tips that I give, that I learned from Disney Plus was building a platform -- like, the best thing we ever did was we said no to some teams. We said "Actually, our platform is not going to be for you." For the people that had data, they're like "I need stateful workloads." And I was like "I cannot give you stateful workloads right now. If you need that, you have to go do it yourself. You have to go flex that muscle and learn how to do it." I can only solve the problem for the other people that would either want to rearchitect into what I can give them, or the people that already fit this.

And so I think when they started that platform, which was stateless containers on top of ECS, it was probably 40% to 50% of applications fit that. Like "Cool, half of the architecture is going to fit here." And then people started rearchitecting, and were like "Ph, we're getting 20%, 30% on top of that", because people were like "Oh, this isn't so hard. I'll put that in the database and we'll just run it here as a stateless workload." But that other 20% to 30% on top of it were like "No, actually, I can't just do that. I need a file system, and I need it to be persistent", and all of those things. "I'm sorry, I cannot solve that problem for you." And I see platform teams think that they have to be 100%, and they have to solve everyone's problem. And they don't understand that that just adds complexity for the other people, the 30% end tail of people you might want on the platform; they're gonna make it so much more complicated for the other 70% that already on the platform. And being able to say no to people is like a huge benefit of just like "Actually, no, I'm not going to do that for you."

**Andy Glover:** Couldn't agree more. Easier said than done...

**Justin Garrison:** Yes, yes, you need political capital for that.

**Andy Glover:** And so a lesson learned. And I think there's three things that came to mind as you were talking about that... Certainly me as a leader, I've made those mistakes in my past at Netflix, not saying no. And it's usually "No, not now", it's not "No, not ever."

**Justin Garrison:** Yeah.

**Andy Glover:** And I think in general, because platform teams are a leverage play - and again, we'll say with lack of hardcore metrics, it was very much like people say kind of a feeling; like, again, "Autumn, am I helping you?" And if you're like "No", then it's like "Well, I've gotta figure out how to help you", and so I'm almost incentivized to say yes, even when I should be saying no. So there's that --

**Autumn Nash:** \[00:54:13.03\] That's a lot of pressure.

**Andy Glover:** Yeah. So there's a balance there. But I couldn't be more, Justin, in terms of I think to be an effective platform team, you have to basically say no, and figure out like what is the leverage play that -- and there's other metrics in there. Let's imagine your or Justin are in this imaginary world that is bigger, or generates more revenue, whatever it is; there's metrics there that help inform "Okay, platform is going to provide leverage \[unintelligible 00:54:33.09\] And then empowering, let's say, those teams to be like "You can build your own platform team if you need to, and we'll figure out a path in the future to maybe reintegrate that to a commonality play."

The other thing that came to mind - and we were talking about this earlier - lesson learned, is evolution is hard, especially in the infrastructure space. You don't know what you don't know in the future, right? And so can you build today with the future in mind? And sometimes you can, but a lot of times you're just trying to get stuff done. And so with Disney, I'm pretty sure you all came out of the box, and you were using Kubernetes.

**Justin Garrison:** It was all ECS.

**Andy Glover:** Okay, but you were born with containers, right? Netflix, when it was born, was not using containers, so there was this evolutionary challenge of like "How do we - as a company, do we leverage this new tech that appears to provide, let's say, a productivity play?" And so, one of the challenges we learned through evolution was the idea of abstractions, and opinions. Back to no... So abstractions - when Netflix went to the cloud, for lack of a better way of putting it, a lot of bells and whistles and knobs and dials were exposed up the stack. And that made sense, because people were just figuring this stuff out, like "How do we leverage the cloud?" So like "Here, app team, basically, here's a dial to do this thing", or whatever. It makes sense in the moment; it enabled Netflix to move fast. It made it hard, as Netflix evolved, like "How do we change things underneath without affecting the teams on the top?" And that's really hard.

**Justin Garrison:** Well, taking away a dial is really difficult. Like, "Hey, guess what - I'm gonna set that for you now."

**Andy Glover:** Yeah, exactly. It's like "I need that dial."

**Justin Garrison:** Even if they weren't using it, even if they never changed the default, once the setting's gone, you're just like "Wait a minute... What happened to my dial? I want that."

**Autumn Nash:** I also think that when you allow an engineering team to focus on kind of figuring out the first solution, they can kind of do a better job. And when management kind of shields you from doing a million things at once, you can focus, get that out, and then go to the next project, or whatever. But like you said, you want your customers to feel like \[unintelligible 00:56:37.11\] So it's cool to hear somebody who is in leadership at like a huge company for so long talk about empathy, and talk about the struggle it is to keep all the people happy, you know what I mean? Because I feel like we don't have enough empathy in tech, and a lot of it is like "You just have to be like a hardcore developer times 100, and sleep at the office", and nobody talks about that empathy. And I think we would have such a better culture if more people -- like, it makes me happy that you're CTO now at a startup, because the fact that you talked about that empathy, and also the struggles of wanting to do right by everybody... We need more leaders coming from that place, and talking about that... Because that is rarely the answer when you ask people about what you need in engineering. So I just think that's really cool.

**Andy Glover:** Well, you know, there's an old saying, "Tech's easy. People are hard." And so I think to be an effective leader, you have to understand the humans... And figure out kind of like "Hey, what am I trying to build for you, and why do you need this." Or "What problems do you have, and how can I help you?", and why do you have those problems.

\[00:57:47.18\] There's one thing I wanted to come back to when we were talking about Disney Plus, and COVID... All the lessons learned... Netflix had this idea - or I'll say the Super-Bowl was Netflix's... Or I should say - excuse me - New Year's Day was Netflix's version of the Super-Bowl. The idea being is that all the humans would basically watch a lot of Netflix on New Year's Day. And so that was the day that everyone wanted to make sure the thing works... Back to your point, Justin, like "Hey, there's an alert. Make sure Netflix is working on New Year's Day." And the second best day was like Christmas Day, because everyone would get like a new TV, with like Netflix on it.

**Autumn Nash:** That's what I was wondering, like why New Year's... Because you think also on Christmas people watch so many Christmas movies, and people, all the kids are home. So why New Year's, I wonder...?

**Andy Glover:** That's a good question, because New Year's Day I usually was doing something outside... But anyways, point being is that we always had these records, like "Hey, in 2018 we set a new record. Our Super-Bowl day was Blah." And obviously, that informed how we built our infrastructure and how we scaled it. Long story short, COVID hits. The entire world is in lockdown, and everyone's basically watching Disney Plus, and Netflix. Specifically on Netflix, I think everyone was watching the tiger one, right? I forget the name of that show.

**Justin Garrison:** Yeah, yeah...

**Andy Glover:** And essentially, Netflix had its Super-Bowl every day. And it just kept getting bigger and bigger in terms of the numbers of people watching Netflix simultaneously. And the infrastructure just scaled. Like, it worked. And so it's a testament to like everything we've talked about, all the lessons learned, all the amazing people that were working hard and were there in the moment, or who had left previously, but helped build this machine. It worked. Netflix scaled, and was able to stream pretty much flawlessly throughout lockdown, and hopefully brought some amount of joy...

**Autumn Nash:** Oh, you brought me so much joy... Not just me, but the fact that my kids could sit down for five seconds...

**Andy Glover:** Yeah, and in the moment it was really scary. Like you were saying, Justin, everyone's like on their -- just like worried that the thing's gonna fall over. "How are we going to fix this? Because we're all remote." And it worked, and I think it speaks, again, to the notion - if you invest in a leverage play, in a platform team, and you staff it with amazing engineers, who are humble, and empathetic, and many other important facets that we could dig into some other time, you get that payoff. And that was it for Netflix, was the lockdown; the globe basically watched the content... And since leaving, I don't know if Netflix has hit new records in terms of streaming, but I doubt they are as big as they were at that moment. And I'm sure it's similar for Disney Plus.

**Justin Garrison:** What you described to me sounds a lot just like momentum. If I have a car and I push it down a hill, it's just gonna keep going without me adding more efforts. But if one of the wheels is not aligned or loose, it's gonna start veering one way or another. It's just like "Oh, that's not the direction we want to go." And aligning yourself, your infrastructure and your applications to be able to be reliable enough to kind of coast for a while is a huge thing. It's a big investment upfront. You have to make sure things are ready to go. But a lot of people ask me why is it -- like, Twitter was supposed to fail. They let off all these people, all this infrastructure stuff, and I'm like, they had such a good infrastructure team to scale up and down over time that there's so much momentum there. If you don't change things, you can coast for a very, very long time.

**Autumn Nash:** And I don't think they get enough credit... The people that built it to not fall over do not get enough credit.

**Justin Garrison:** I knew a lot of people on the Twitter team, and they were great engineers, and they were doing stuff in the right ways, from everything that I could see on the outside. But yeah, it takes a lot of investment upfront, to like "Hey, how do we just set this up?" And if we're not constantly making new changes, and replatforming and doing this other stuff, you can't stay on that for a long time, which is also the hard part of being able to say "The platform needs to change now." There is going to be a big shift. We have to move in a different direction.

**Andy Glover:** \[01:01:54.09\] Well, and it goes back to - I'll say one thing about humility, back to, is 99.99% of the time platform just works, and if you are a customer of the "platform", you don't think about it. If you've done your job well as a platform team, app teams don't know. They only know when it breaks, and that's that 0.01 time. And that's when they're really upset, because they're like "Hey, this thing isn't working, and I can't do my job." And it is a rightful kind of surprise, or anger or frustration, but you have to have that humility to not be like "Hey, Justin, it was working for the last 25 hours and you didn't ever say "Thank you." And then you've just gotta jump on and be like "Justin's blocked. Let's fix his problem."

And the other thing I'll say that, again, testament to investment and platforms, is you build these massive systems, and one thing Netflix - and we were talking about this earlier, Autumn - that Netflix invested heavily in was the... I'll just put it in quotes, the idea of "chaos". It's like, things break in a distributed system; that is a certainty. In fact, there was a almost a mantra of like "Let's not try to get every edge case tested, because we know it's gonna break in some weird way." And so Netflix proactively led the charge - and I know Amazon and other companies were doing this as well - of like "Let's just break it on purpose and get really good at recovering."

**Autumn Nash:** Chaos engineering at Netflix was like - I remember like being in college and just reading all the articles... And I think my favorite is post mortems. Netflix has blogged about all the cool stuff they do, and then just reading about how they were like "We're gonna go in and just do crazy stuff, and absolutely just wreck everything, and then we're gonna learn from it." I love that. It's like the puzzle. It's seeing the real puzzle and experimenting of like engineering the real computer science part... Because it is a science; you go, you break it all, you experiment, and then you fix it. It's so cool.

**Andy Glover:** Yeah. And even to make that happen, there's obviously a cultural component to make it safe to like "Let's go break stuff", and hopefully not affect obviously Autumn and Justin, as members of Netflix.

**Autumn Nash:** People always say "Oh, you have to break stuff first." And I'm like "You have to give people a safe environment to learn and break stuff." Like, you can't just say "Break stuff, but we're gonna look at you like you're crazy if you break stuff or don't know how to do it." You know what I mean? If you want that kind of innovation, you have to create that culture and that environment.

**Andy Glover:** And one other thing that I think some people forget... So there's the cultural aspect of making it safe to break things, and then there's the technical aspect of having a great observability platform, so you actually know what broke and how it broke. I think there's this -- I talked to some companies that are like "Yeah, we want to do chaos engineering", and I was like "Well, let's talk about observability. How are you using Datadog, or whatever it is?" And it's like "Oh, we don't really have a great story there." It's like "Well, you definitely don't want to be breaking things. Fix that first..."

**Autumn Nash:** I made a tweet about that I think a week ago... It was somebody from a company, and he was talking about - I think he had worked somewhere for 10 or 15 years, and he was talking about one of the most important things he learned was observability. And I think that it's two planes. So you want to be observable with like metrics with your system, but also you should have some sort of like a beat on your customers, and how they're giving you feedback to what they like... You know what I mean? But observability is like one of the most underrated parts of tech. Because how do you build good things if you don't have metrics to know if they're working properly, and if your customers are happy? That's not just something product and other people should be concerned about. Your engineers need to know that, because how are they going to build -- how are they going to make good decisions? How do they make good designs? You know what I mean?

**Justin Garrison:** I set up Twitter notifications for hashtags, what are you talking about? \[laughter\]

**Andy Glover:** Yeah, exactly. \[unintelligible 01:05:30.09\]

**Autumn Nash:** That's what I'm saying. But it's underrated, though. That's something that we do in our personal time; that's never part of the job description, and it should be. When you have more of an insight to customers on the business side, you can be a better engineer, and you can add more value. And I love that you said that, because it is so underrated.

**Justin Garrison:** \[01:05:52.02\] And I think that's a really difficult thing with something like productivity engineering, or platform engineering, when the actual metric you're getting from someone -- like, you can get the "Are you using my platform?" But at the end of the day, it's kind of just like a vibes metric. You have to go talk to the human. You have to go ask the person "Hey, is this valuable? Whatever your definition of valuable is, you need to tell me yes or no."

**Autumn Nash:** But just like Andy said, that's like a Yelp review, right? Do people make Yelp reviews when they're happy? No. They make them when they're mad. So that's such a hard -- I feel like I almost have so much empathy for the pressure that you must have been on... Because can you imagine, they're only calling you when they're upset... So it could be great, but people are just like "Oh, it's another day..."

**Andy Glover:** Yeah, I know at one point the team was leveraging NPS, Net Promoter Score. So it's like "Hey, Autumn, would you recommend platforms tools to your friends?" as kind of a maybe another way of --

**Autumn Nash:** And nobody pays attention to those surveys until you have the bad day where you're like "I hate this', and you're like "No, never."

**Andy Glover:** You know, so one other lesson learned, for what it's worth, going back to empathy, is again, having the humility to sit there and listen to you, let's say Autumn, when you're angry, writing a Yelp review of how horrible it is. But then being able to have kind of, again, the realization of like "She cares enough to tell us", right? Because the worst thing is I don't like your product, and so I'm just not going to use it, and I'm never going to tell you. And so having kind of like the presence of mind to be like "Okay, this person doesn't like what I've built for them, but at least they care enough to tell me, and so let me learn, and then I can figure out how to prioritize that." Having gone through that process many times, both at Netflix and before, I do find that that's kind of another skill of... Sometimes people just don't want to hear from the angry customer. It's like, they took the time to tell you; that's a blessing. You should thank them.

**Autumn Nash:** I love that you said that, because we used to always get like "Well, your connection part is broken", or "We hate this here", or "We don't have this feature, so we're never using your service again." But to me - like, okay, yes, you had a bad day... But they also told you. Like, if you get so many -- I would go and I would kind of like use the RSS feed, and I would take the data from like Stack Overflow, and different places and I would be like "Okay, but if eight people are saying the same thing, and then every month it goes up and you've got like 45 people saying "I would use your service if you had this one thing", your product needs to know about that. You guys need to start having that discussion of "Do we need to add this feature?" You know what I mean?

We would work with teams that used our product more than we did. They know. They are great feedback. Take it, because you can make such a better product if you listen to them.

**Justin Garrison:** One of the best investments I ever made in that feedback loop was literally just buying some donuts and sending them out in our area, and then just inviting our customers -- like, I just emailed the customer teams and I'm like "Hey, by the way, there's free donuts over here. There's no meeting, there's no requirement, no nothing."

**Autumn Nash:** Okay, it makes me sad... I take donuts into the office all the time, and everyone's always on a diet, so I just sit there and eat them by myself, and I'm just like "Why...?!"

**Justin Garrison:** I do think that post-COVID, with a lot more remote work, and a lot more people that maybe gained some COVID weight, like I did. There's a lot of that where it's just like actually people have changed their mindsets on some of those things. So maybe it's a "We need to buy some lunch", or something like that.

**Andy Glover:** Swag. Stickers.

**Justin Garrison:** Yeah, whatever it is.

**Autumn Nash:** No. Guys, let's go back to donuts. \[unintelligible 01:09:15.27\]

**Andy Glover:** Find gluten-free, sugar-free, vegan donuts.

**Autumn Nash:** This is how we know Justin doesn't drink coffee. He was ready to give up donuts. Like, you have questionable life choices. We're friends, but...

**Justin Garrison:** But appealing to the human side of it was the best way to get any sort of feedback. No metrics I was collecting could tell me the things I was missing. And being able to go talk to my customer in-person, and just saying like "Hey, how's your project going? Like, don't even talk about mine. Just like, how's your sprint going? What tickets are you punting on?" All that sort of stuff. It's so valuable to make the human connection between people to get the actual feedback; you could never measure and you could never find it on a dashboard. But then you can say "Actually, I get what they were saying, because I can connect that to something else that someone else told me, and maybe they're related." And that in and of itself allows you to know exactly, or at least get a vibe on how the platform is doing, if you need to change directions, if there's some other problem that's underlying it, that's like "Actually, people hate our tools, and we should just throw it all away."

**Autumn Nash:** \[01:10:16.18\] I just want to point out that what you're both saying is that engineers need people skills.

**Andy Glover:** They do.

**Autumn Nash:** No, but it's so underrated. Nobody pays attention to soft skills. That is so important. To work with other humans...

**Andy Glover:** Again, coming full circle - this theme of full circle in our conversation... So I'm originally from the East Coast; I'm talking to you from the West Coast. Netflix made me move to the Bay Area, because Netflix at that time had a policy, all engineering is collocated. We were in a few buildings. And back to kind of relationships, and to your point about "Hey, donuts...", a lot of people would ask "Well, how do you gather priorities and meet your customers?" It's like "Well, it's all about relationships." And I used to brag at one point - I did feel this - I knew every engineer at Netflix, let's say in 2014-2015, because we were all on the same campus, we had lunch together, we could get coffee... And I would go to you, Justin, and be like "Hey, I'm building this thing. Can you help me? Or can I help you? And can you help me make it better?" And COVID, obviously, dispersed everyone. We had to go remote. And we lived on those kind of relationships, because I had met you, Autumn, in person; we had had coffee together, we had that kind of like trust. And then obviously, we did a bunch of hiring, and every company did that... And so I think one of the biggest issues that I think we're all struggling with is "How do we move fast, with empathy?" Obviously, getting stuff done from a tech standpoint, and humility, in this remote, hybrid world... It's hard. I don't have a good answer. Some companies are just like "Hey, return to office. You've got to come to the office X days a week."

**Autumn Nash:** We're actually doing a talk on that, me and a couple of my friends that also work at the same company... Because we're a nonprofit, and we have a board. But our board is dispersed all over the world, because they're military spouses. So there's people in Guam, there's people in Japan, there's people in California... Just everywhere. And we're all in different time zones. So we planned full hackathons across the country, in different time zones; we've run a whole nonprofit, and scaled it from no money to like giving out scholarships... And at this point we're partners with the DoD, with the military spouse employment programs, and we're the only nonprofit in there. And you have to be able to ask questions, like ask about people's lives... Like "Hey, I saw that you had a kid, or a dog, or... Me and Justin will talk about Disney, or you know... And me and Justin have never met in real life.

**Justin Garrison:** Well, this is real life... \[laughter\]

**Andy Glover:** No, this is actually not...

**Autumn Nash:** You know what I mean? Like, not in person. We've never been in the same -- Scale will be the first time that we ever meet each other in real life, physically. So I think people need to make the effort, and there needs to be more -- to get to know people as humans, you know what I mean? And to treat people as we're humans, and we're all going through our own things, and to actually reach out... But I think sometimes so much is put on technical skills, but you need to be a human that can relate and talk to each other, because we're trying to solve problems, and engineering is a team sport. You need each other to do things. So I think that would really help get people forward.

**Andy Glover:** At the end of the day, I think, human beings, I think we all value a sense of belonging, whether it be in a group or with another human... And that's to your point about like chit-chatting about like Disney, or the stuff on Justin's wall, or whatever, you know... And what I certainly found and have found with remote is it's very tactical. It's like "Hey, I've got 30 minutes to talk about business..."

**Justin Garrison:** It's all transactions.

**Andy Glover:** Yeah. Transactions. That's the word I was looking for. And you've got to take a moment; it's like "How's it going? What's going on in life? What did you do this weekend?"

**Autumn Nash:** \[01:14:02.20\] I make a point to do that, just because I want to know the people I work with. Honestly, they're so smart. They're some of the smartest people I've ever met. I'm like "Let's be friends." I want to know all the things. It's so funny, one of my coworkers has like the cutest dog ever. He's so much fun, and I'm just like -- engineers just generally, they think that we all just sit in like a corner in the dark, and don't talk to people, so you have to get over that initial after... You have to breakdown people's walls and be like "Hey, I want to get to know you", and just kind of ask them about their lives, and their weekends, and their families... It's amazing.

**Justin Garrison:** We had a bot at Disney Plus, I think it was called Donut, which would introduce you -- it was an opt-in program, and anyone could opt into it. Anyone that was opted in would get randomly matched with someone else in the program. And it was great, because --

**Autumn Nash:** So what you're saying is donuts are amazing?

**Justin Garrison:** Yeah, I didn't always give out donuts, because I had that still... So it was just like a 30-minute -- like hey, you just throw it on your calendar, and it's like, you don't know who this person is; they don't work on your team, they don't work with you... It's just "Hey, here's 30 minutes to not -- it's a meeting for no work content."

**Autumn Nash:** That's my favorite part of AWS during COVID. I don't know if it's the same feel now, but you could literally -- I remember being in... One of the first things that you do, like the two-day classes or whatever... And they were directors, and you could reach out to all these people that were directors, that were engineers, that were project managers, and they're like "You can grab time on my calendar." And I took them up on that offer. I was like "I want to know how you got here. I want to know about you." And it was so cool. You could talk to some of the most amazing, brilliant people and learn about them. And it's so cool. They're real people; they're people, but they're amazing, and so smart. It was so cool.

**Justin Garrison:** When I started at Disney Animation, and Disney Streaming, and Amazon, I asked my manager, "Who are three people that I should meet?" Because my manager had been there longer. And then I'd go meet those three people. Like, who are three people that I don't work with, that I should meet? And then when I'd talk to those people, I'd ask them, "Who are three people you think I should go meet?" And I would just expand so quickly, of just like meeting people that were recommended within -- and then just say "Hey, I have no agenda here. I just want to know what you do, what you're working on", and that I think, especially at Disney Plus, grew that platform ability of like "I understand a little more of the business now, and like who relies on who... And when I fail, how many people downstream it might affect. For a platform team it's super-important.

**Autumn Nash:** Also, there's always a bunch of random Slack channels that you have to join. I loved \[unintelligible 01:16:29.25\] even though it sucks without you now. How dare you leave us...?

**Andy Glover:** You know, that last point you made, Justin, is one more thing I'll add to kind of platform engineering in general... Is that if you're in a platform team, you are in essence in the trenches, and the people you're supporting are working directly on the product. So in the case of Netflix, the teams that my teams were supporting, ultimately, when they got to go home, they could point, if they had a child, "Hey, look, Susie, you're watching Netflix. I made that button right there blink for you." And there's a certain sense of pride that the end user teams get. And a platform team sometimes doesn't get that, because it's like -- but my whole thing was like when my kids asked me "Well, what do you do at Netflix, dad?" and I was like "I make sure it works. So like when you watch it, it works."

**Justin Garrison:** And you also get blamed when it's down.

**Andy Glover:** That's right. Yeah. So yeah, "Dad, it's \[unintelligible 01:17:24.02\] I'm like "No, it's buffering. That's Comcast." \[laughter\]

**Autumn Nash:** Did your kids ever bust into your office and they're like "Dad, you broke it."

**Andy Glover:** No. Mostly it was like "Hey, Dad, could you get this content on Netflix?" I was like "I don't do that." And eventually, I just started going along with it. Like "Sure. Yeah, I'll talk to so and so and we'll see if we can get whatever..."

**Justin Garrison:** "Alright, I'll go talk to Bluey. We'll get it on."

**Autumn Nash:** I'm so jelly. Do you know how hard it is to tell your kids is that working in Java is cool? I'm just like "Java is built with Minecraft. Minecraft is built with Java." You have like the coolest kid street cred job.

**Andy Glover:** \[01:18:04.22\] Well, and so the important thing as platform team leadership and everything else I've said is also connecting the dots back to the product, and being able to draw that line in terms of -- basically, how I said it is "We're a leverage play. You enable those teams. When we're down, Netflix is down, or Disney's down", or whatever, JPMorgan Chase. Whatever company you're at. And making that kind of like the mission and the vision of like "Yes, you're in the trenches. You're not necessarily working on the end code or the \[unintelligible 01:18:31.08\] features for our user base. But without you, they would not get it. And I think that's important for leadership to kind of remind, and again, continually draw that dotted line of like what you're doing is vitally important. And without you, the company wouldn't be as successful as it is today.

**Justin Garrison:** I think it's a great place to end it. So Andy, thank you so much. We have been talking for quite a while now, and this has been a great conversation. I know we could talk for another hour about all sorts of different things... But if someone wants to reach out to you or find you online, what's the best place to do that?

**Andy Glover:** So I am on X, formerly known as Twitter, @aglover, and I have increasingly found that LinkedIn is becoming somewhat of a new kind of Twitter...

**Autumn Nash:** I get way more engagement on LinkedIn now. It's so weird...

**Andy Glover:** I do blog... It's called thediscoblog.com. I've had that for many, many years, and I reincarnated it recently. So yeah, find me on Twitter, LinkedIn or my blog.

**Break**: \[01:19:29.15\]

**Justin Garrison:** Thank you so much, Andy, for being on the show. We are going to have him back in the future to talk about other things that he's working on. ReadySet sounds really interesting, and he actually has other people that he wants to introduce us to at Netflix, that are either currently there, or were there... So it's great that Andy was able to come on, and I'm looking forward to more conversation in this space... Today's episode opened up so many other doors of things that I want to explore.

**Autumn Nash:** Totally.

**Justin Garrison:** For the end of the show today, we have the segment called WTA.

**Autumn Nash:** What the Acronyms...

**Justin Garrison:** What the Acronym. Of course.

**Autumn Nash:** I love that you came up with that. It's so...

**Justin Garrison:** It is obvious. It's What the Acronym. So as we've been continuing making outros that are not consistent, and different every show...

**Autumn Nash:** You mean variety. It's perspective. Variety, Justin...

**Justin Garrison:** At some point I'm gonna lose ideas, and we're just gonna go recycle them again... But at least we have five or six of them ready to go.

**Autumn Nash:** Don't lie with us. We'll find another tangent to go off on.

**Justin Garrison:** If there was video in this podcast, we could do gifs, we could do so many other things. But because it's audio-only, we want to focus on the audio. We have some limitations. But anyway, we wanted to explain just some acronyms, and what they mean, and maybe even where they came from... Because acronyms are kind of a core part of tech, and sometimes they're very gatekeepy. And sometimes there's also like obvious, "Oh, I use that acronym all the time, and I did not realize that's what it was." And so we wanted to share some.

And I'm going to start with actually things that are not technically acronyms, but are numeranims, where it's a number and a shortened word from it, and it has numbers in it. So the one that I use a lot is k8s. It's a shortening of the word Kubernetes...

**Autumn Nash:** But why...?

**Justin Garrison:** Because between the K and the s there are eight letters. And that's it. And it just starts with the first letter, how many letters in between, and then the last letter.

**Autumn Nash:** I always felt so left out... Like, is there like a container secret here?

**Justin Garrison:** Nope. Some people pronounce it kates, like a name or something, or Kate, or something like that... But it is just a -- it's a numeranim that shortens Kubernetes, because sometimes people don't want to spell it.

**Autumn Nash:** \[01:22:01.24\] I love that you made all of your acronyms this, and you went off on another Justin tangent. That's great.

**Justin Garrison:** A lot of them are in like frontend development more, and design... Because observability is one of them, which we - o11y. There's 11 letters inside of observability between the o and the y. Internationalization, i18n, because that would be a hard one to spell...

**Autumn Nash:** Are they like variable names, or are they actually like people refer to them with these?

**Justin Garrison:** Usually you'll see them in like documentation about like how to do something, or it's like "Hey, we just don't want to spell. We need to internationalize this all the time." Or accessibility, a11y, where it's like "Hey, this needs to be accessible." Or I just need to add the accessibility, or whatever. You just put a11y, and people are like "Oh, okay, we need some accessibility. And then the last one that I had was y2k, which obviously doesn't mean that there's two characters between a y and a k, but it's a millennial tech problem. This was if you're old enough to exist on the internet and be around... It was y2k.

**Autumn Nash:** Are you calling us old? I feel like you're calling us old.

**Justin Garrison:** I'm calling myself old, because I remember it. I did not work in tech at the time. I was still in high school when y2k happened. So I did not even have a computer, and I saw it on the news.

**Autumn Nash:** I feel better, because you're older than me, so I'm just gonna assume you're gonna be the old one, and I'll just like pretend like I'm not. Okay, so mine are very database-featured. You know how much I love data, so I'm super-excited about this... So ACID; they're usually ACID transactions, which is like "Autonomacy, Consistency, Isolation and Durability." So if you're a web site, or any kind of transactions, or doing any kind of sales transactions, you don't want your card to be charged twice. So if you refresh or something, or something doesn't load, you wouldn't want to have multiple transactions. So it's basically like a check to making sure the transaction went through and it's not happening multiple times.

**Justin Garrison:** You want something to happen only once, right?

**Autumn Nash:** Exactly.

**Justin Garrison:** So every time I pull out Apple Pay and tap to pay, I'm gonna say ACID.

**Autumn Nash:** Yes.

**Justin Garrison:** Because I don't want to get overcharged, so I just have to --

**Autumn Nash:** It's really important, because for one, people would stop using their cards to pay online. You have to have that trust that people are going to have accurate transactions. And then you also don't want to end up giving away your product without being paid for it, right?

**Justin Garrison:** But this is more than just card payments. I mean, you need other things to be ACID compliant, or...

**Autumn Nash:** Yeah. Also just making sure that you're getting data. It's a whole compliancy, but that's just to me the easiest way to explain if you've never seen ACID before, I guess. Or if it's a new concept, I guess.

I like to find real-world relations for things, because I hate when people do that gatekeeping stuff, where they explain stuff at like a really high level, but they don't make it digestible for someone who's never heard it before...

**Justin Garrison:** Right. An actual use case.

**Autumn Nash:** Yes. Well, use cases, or like some sort of physical relation to something... Because I like it when it's related to something that everybody can understand.

**Justin Garrison:** I feel like the word ACID... Like, I wish it was more relatable. We had fuzzing on the last show, and that one has like a very --

**Autumn Nash:** I'm really sad that didn't make it into \[unintelligible 01:25:08.22\]

**Justin Garrison:** But at least that one -- I have a visualization of like what fuzzing is. It's just like "Oh, it's like a fuzzy amount of data", or something. ACID I feel like should be -- I don't know, it seems like it would hurt.

**Autumn Nash:** Once you know what it does though, and you start seeing it, it kind of is nice. But like CRUD - at first I was like "CRUD?" But it makes sense, because it has all the different...

**Justin Garrison:** The verbs.

**Autumn Nash:** Verbs, but I was thinking -- not events, but different things that you would do with a database. So CRUD is Create, Read, Update, and Delete. Those are all the functions that you want to use with the database. CRUD operations. So I think it's cool that these are useful, I guess... Because sometimes you have like abbreviations and you're just like "We did like a whole--"

**Justin Garrison:** \[01:25:55.20\] Why do we need this...?

**Autumn Nash:** Yes. You're just being so extra. Like, that doesn't even make sense. You're like, there's nothing that relates back to that. You were just bored one day, and you just came up with it, and I'm just like "Goodness." So I do appreciate when you're like "Oh, that makes sense."

**Justin Garrison:** I think one of the weird things about acronyms is when you hear people pronounce some of them, and not other ones...

**Autumn Nash:** Oh, my God... How do you say data? Data or data?

**Justin Garrison:** I do data.

**Autumn Nash:** I do data, too.

**Justin Garrison:** But is data plural or singular?

**Autumn Nash:** But when I read the memes, I say it both ways in my head... Like, when you see them...

**Justin Garrison:** I heard someone spell out SQL, instead of saying sequel. And I was like "Whoa... Okay, yeah, that's --"

**Autumn Nash:** I've done that before.

**Justin Garrison:** That's a thing.... Or - GUI is a common one, that like people pronounce... Like CRUD, right? You're not gonna say C, R, U, D. That'd be a weird --

**Autumn Nash:** But it's so weird because you say these things in your head when you're studying and when you're reading off the internet for so long... And then you don't think about how you would say it in a conversation, and then my brain is like "Oh, wait..."

**Justin Garrison:** The only difference between an audiobook and like a physical book when you're reading it is the fact that in the audio book you know how to pronounce all the names.

**Autumn Nash:** Yeah, that's true. So my next one is asynchronous IO. So it's a more efficient way for a system to use resources, and it's a form of input/output processes, that permit it to process and continue before something finishes. Kind of in the same realm of functionality of ACID, but just making sure that you get through the whole process, and the process has done what it's supposed to do.

**Justin Garrison:** I mean, async specifically - you don't want to block. Like, don't stop everything to let this happen.

**Autumn Nash:** Exactly. And it's also like going in the right order... So that's important. You want to make sure that you're hitting all the things in the right order, and it finishes and completes before you start again.

**Justin Garrison:** IO in there is like another acronym that's just -- because you don't say...

**Autumn Nash:** Yeah. Input and Output.

**Justin Garrison:** Yeah, you don't say asynchronous input and output. It's async IO, and AIO.

**Autumn Nash:** It's an acronym in an acronym. So AIO is asynchronous \[unintelligible 01:27:58.24\] And then object relational mapping... This is something that you typically use with a SQL database, and it's usually kind of a tool to help query things. So usually they'll have MySQL Workbench, or like something that helps you to query...

**Justin Garrison:** An ORM tool that lets you visualize it, those relationships.

**Autumn Nash:** Yeah. So it's a query tool that helps you to query a SQL database. So it's kind of like a bridge between the two, I guess.

**Justin Garrison:** Is it generating the SQL itself, typically? Or is it making that relationship in the tool itself because it's directly connected to the database? Or is it like I have to map this out, and then go query it somewhere else?

**Autumn Nash:** It helps developers to interact with a relational database... But I'm honestly not sure on that level how it does it, to be honest.

**Justin Garrison:** I know some of them will connect live, but also, are you doing that to production? Do you have read/write access?

**Autumn Nash:** I think NoSQL databases don't need that, because of the way that they connect straight to an application... But don't quote me.

**Justin Garrison:** That's fine. I won't quote you, because you're on the podcast, so it's you're recorded. So thanks, everyone, for listening to today's show. We hope that you enjoyed it. Again, if you have someone that you would like to hear on the show, or you would like to be on the show, or topics that you're interested in, feel free to email us at shipit \[at\] changelog.com. We do read all the emails. I think I'm a little bit behind them responding, but we will get to them for sure at some point, because we love hearing from you, and we want to know what you're interested in. And even just how the show is going for you. This is - I don't remember, our sixth or seventh episode after the reboots, and we're still finding our groove in some things, but overall, having a lot of fun.

**Autumn Nash:** Oh wait, I've figured it out. Okay, I googled it. It's like SQL alchemy. Oh, I love that with Python and Django and stuff. I love using that to connect your database and get it to do all the things that you want. It's awesome.

**Justin Garrison:** So thanks everyone again, and we will talk to you again, or we'll be talking at you next week.

**Autumn Nash:** Hopefully we get to interview some cool people at Scale. I'm excited.

**Justin Garrison:** Yeah. Alright, bye.
