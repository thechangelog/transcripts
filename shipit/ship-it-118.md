**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens when you -- after you push git? ...I don't know how this is --

**Autumn Nash:** Git push?

**Justin Garrison:** Yeah, that's the phrase we want. But also after you have a split brain database, and you freeze when you're talking.

**Autumn Nash:** I'm just saying, if you drink coffee, you wouldn't have this problem...

**Justin Garrison:** I don't think coffee would solve my problem right now. I am your host, Justin Garrison, and with me as always is Autumn. How's it going, Autumn?

**Autumn Nash:** I mean, great, because I just had coffee and a donut, so my brain is firing on all signals.

**Justin Garrison:** Caffeine and sugar. That is all --

**Autumn Nash:** My brain is so happy right now. Well, also, we just talked about databases, so... Living my best life.

**Justin Garrison:** This was a phenomenal conversation.

**Autumn Nash:** I had so much -- yo, I am now like just... I love her. Like, I am a stan. Like, just amazing. I feel like this episode was a gift to me, and I appreciate you.

**Justin Garrison:** You're welcome. So Silvia Botros is the guest for today. She goes by dbsmasher online, a lot of places.

**Autumn Nash:** Also, that is the best friggin' social handle ever. Can we talk?

**Justin Garrison:** We didn't even get into the whole -- like, she has this curse of technology that is just hilarious. She used to post it --

**Autumn Nash:** Can we bring her back for another one? Can we bring her back for another episode, mostly just so I can talk to her? Yeah, we'll also take the podcast, but like... You know how some people, when you meet them, it's almost like they say "Don't meet your heroes or cool people, because they'll disappoint you"? She does not disappoint. I was like "You're even cooler than I thought you were going to be. Can we be besties?" She's probably like "This girl's crazy", but I'm totally like "We have to be friends."

**Justin Garrison:** I kept most of this conversation with you a secret, because I knew how awesome she was, and I was just like "Autumn's gonna... Yeah."

**Autumn Nash:** Usually I'm like "How dare you?", but I'm so happy. I feel like this was a gift, and I'm so here for it.

**Justin Garrison:** Yeah. Anyone listening to this right now can't see it... Autumn is bouncing \[unintelligible 00:05:51.17\] That's your excited face. You just start jumping.

**Autumn Nash:** I know. I'm so happy.

**Justin Garrison:** Some of that might be the caffeine, but the rest of it is just --

**Autumn Nash:** No, it's totally her. It's totally her. I was just like "I want to be like you. Teach me how to do these things." I think I have a new hero.

**Justin Garrison:** So we actually do go a little long in the conversation, so let's jump right into it and we'll come back with a little quiz afterwards, just so that everyone -- we don't want to delay it anymore. This is plenty of suspense...

**Autumn Nash:** Oh, y'all, he's going to make me do another quiz...

**Justin Garrison:** We'll come back with a quiz. It'll be fun. But right now, enjoy the conversation with Sylvia.

**Justin Garrison:** Thank you so much, Sylvia, for coming on the show and talking to us about MySQL. You are currently a senior architect at Twilio, and you are architecting -- specifically, you focus on databases, right?

**Silvia Botros:** I've had a previous stint at Twilio where my focus was databases, and when I decided to go back to Twilio - it's slightly more expanded now, where it's a lot of databases, but also a lot of general SRE work.

**Justin Garrison:** As a senior architect, you need to see more things. You can't just focus on the one area.

**Silvia Botros:** Yeah. I mean, career matters, as flawed as they can be, it's still useful to have one. At Twilio specifically, they focus very much -- after like a staff-level engineer, the principal and architect and senior architect, they focus very much more on like scope, and the impact you present in that scope, and not as much about tickets finished and work done, that kind of thing. It becomes a very different kind of job. So for senior architect it's the top of the IC ladder. And yeah, it's like, if you're going to be director level, senior director level, IC, but not managing anybody, it needs to come with like a lot of impact, and broad influence in the work.

**Autumn Nash:** Tell us about your career background before you were a senior architect, because that's like an amazing role, so you must have done a lot of cool things. Tell us about you.

**Silvia Botros:** \[07:59\] Or we say "We've seen some things." It could be that, too. A little bit of both. I'm an immigrant. I moved to the States when I was about 21, so I sort of had to restart college kind of later than most of my peers... I did my college here, in Southern California, \[unintelligible 00:08:15.14\] Titans, down in Fullerton. Just the way life worked out, as soon as I finished, I moved out to the East coast. My husband, who's a physician, started his residency. And so my first job out of college was in a now long gone CDN called Panther Express, which is part of what was known at the time as Alicorp. And for those who are listening who are probably old enough to remember this - this is a long time ago - there was a company called DoubleClick, that kind of pioneered ad tech, basically. Its founders sold it to Google for a lot of money at the time. It was probably like kind of a record --

**Justin Garrison:** It was huge at the time, yeah.

**Autumn Nash:** ...acquisition at the time. Yup. So those two guys, Dwight Merriman and I think Ryan, Kevin Ryan, I think was his name... They started this sort of group of companies called Alicorp. It was basically an incubator before incubators was a thing, in New York City. And under that umbrella, there was a number of companies.

One of them was my first employer, Panther CDN, which didn't last very long. But some of our sister companies in the same office space were now well-known names -- like, there was Silicon Alley Insider, which became Business Insider. There was TenGen, which is now MongoDB. And there was a couple of other that I -- oh, and Gilt Group, if anybody listening also wants to buy... I think they do like flash sales for designer stuff. It's very much in a completely different area.

**Justin Garrison:** Oh, okay.

**Autumn Nash:** So the interesting part was I got to spend my first year or so, fresh out of college, in that same office space as everybody else. There was really not much of a boundary between those companies; just sitting next to each other. And so I got to learn a bunch of Python, I got to learn a bunch of Django... College was all C++, and nobody at that point was doing C++ really, voluntarily. So it was like "You've got to learn some new languages." And there was some MySQL.

The way I ended up in databases is about the six-month mark after I started the database -- Panther Express was small. So it was one database. And the database that ran the billing stuff had some script that runs overnight to aggregate usage data. And that script started to take longer than 24 hours to finish. It's not ideal if it's an a nightly script.

**Justin Garrison:** Yeah. Those cron jobs overlap.

**Silvia Botros:** Yup. Long story short, nobody wanted to touch the database. I got curious and started looking up what is MySQL, started looking up, reading the documentation... I grabbed a book called High Performance MySQL, second edition, and started reading on it, and I realized that when they set up the company, they set up that database and just installed MySQL, started the process and walked away.

**Justin Garrison:** "This is done. Alright, next \[unintelligible 00:10:57.07\]

**Autumn Nash:** That's like a common story in a lot of companies and applications.

**Silvia Botros:** I'm still like, in some MySQL DBA circles -- I don't think a single one of them chose that path. I think every single one of us, including my co-author, we just tripped on a database early in our career, and the rest is history. I don't think anybody chooses this life. It chooses you.

**Justin Garrison:** \[unintelligible 00:11:20.15\] has spoken.

**Silvia Botros:** That just happens to you. But yeah, I was super-excited at the time. I was like "Oh we need to go change this config, and that config, and we can do that." I fixed the issue with the cron job at the time, but of course -- I didn't know it at the time, but you fix one problem and that just gets you to the next problem.

**Justin Garrison:** You touched it last, you are responsible.

**Silvia Botros:** Exactly what Justin just said. That is also the other lesson I did not know at the time. You touched it last, it's yours now.

**Autumn Nash:** I feel like you should make that shirt that says "Now about this database life", or something about database life, and you should just sell it with your book.

**Silvia Botros:** The database life chooses you.

**Autumn Nash:** Yes.

**Silvia Botros:** That sounds really cool, actually. I should get that done.

**Autumn Nash:** I'd buy it, I'm just saying.

**Silvia Botros:** \[12:09\] So about the one year mark was the market crash of 2009, and Panther Express did not survive it. We ended up getting bought by a competitor whose headquarter's in Korea, a completely different stack. They sort of bought it for the customer base, and still needed to figure out "Okay, now we have to keep running this thing, but then slowly sort of absorb--" Like, all of that kind of M&A fun stuff. But then at that point it became clear that "The data store stuff is important, because that's a big part of the value we just paid money for, and she's the one who knows how to run it."

So I stayed with them for another three years after that, and then moved back to California... And because of a layoff over in \[unintelligible 00:12:50.10\] and all sorts of conversations here in Southern California, I happened to just also - again, I was in SoCal, interviewing with someone else entirely, another company entirely, but that didn't go well, so I sort of took an interview with this very small company in Anaheim called SendGrid. I got to learn through that interview that apparently sending email is a business. That was news to me. They were looking for their first in-house DBA. So that was my first time going "Yes, this is now my job. It's not just like the second thing I do."

**Justin Garrison:** Yeah.

**Silvia Botros:** I got to interview with one of the co-founders. I, in my Dunning-Kruger hubris of being a junior at the time told him to his face he's using my SQL wrong. Bless that man. He had the humility to be like "I think you're right. I'm going to hire you." I started at SendGrid in 2012, and since then it became a rocket ship. I ended up staying with SendGrid all the way through to the IPO, and then a year later Twilio acquired them, and by then I was an architect/senior principal. I had helped build an entire DBRE team inside SendGrid, and started helping with other things in Twilio. And yeah, here we are.

**Justin Garrison:** DBRE is not a term I hear enough.

**Silvia Botros:** I know.

**Justin Garrison:** That's so crucial. Database reliability engineer. That's really important.

**Silvia Botros:** I feel like we dropped the ball on properly popularizing Charity and Lane Campbell's movie -- uh, not movie. Book.

**Justin Garrison:** I'd watch the movie.

**Silvia Botros:** I know, right? They wrote that book even like -- that book was done before I even started talking with O'Reilly about mine. And I remember loving that book, and I still now will refer to it sometimes. Like, I tried to borrow a lot of the concepts in our edition of High-performance MySQL, but really, it was around -- about a few years into my time with SendGrid was when I realized that this job can no longer be like a hero thing. I did it as sort of like -- because it feels nice when they call you into the incident, and you figure out what's wrong with the database... But I'm liek "That's not --" Burnout was starting to settle in, and at that point I was like about 10 years into my career and I was like "This is not really healthy. This needs to stop being like sort of a magical job."

**Justin Garrison:** Even just the general -- like, words matter. We still call a lot of people that manage databases administrators, as like a "You do the maintenance tasks. Like, you're not doing engineering work. You're an admin." And SRE became this "Oh, you can be cool in ops again." You can do cool stuff and be an operator. And database engineering feels different than database administration.

**Autumn Nash:** I feel like they use these titles to pay people less half the time. They'll be like "Well, you're a data engineer", but then you're doing data engineering. They're so --

**Silvia Botros:** Oh, I have a whole rant...

**Autumn Nash:** Yeah. Like, why do they do that? And then they'll be like "You're a business intelligence engineer or a data scientist", and I'm like "They both have masters degrees, and you're paying one 60% less."
**Silvia Botros:** Don't even -- I don't know if we have enough time in this podcast about \[unintelligible 00:16:01.17\] And I know that your listeners probably don't want to hear me rant about HR practices. It's not what we're here for.

**Autumn Nash:** But I do though. I do.

**Silvia Botros:** \[16:09\] So here's the thing I did... So I was lucky in my time in SendGrid, because I was there for so long that I had a long trail of like leaders, some of whom were really good at sort of helping me recognize where my actual strengths are, and sort of realizing "Oh, it's not like \[unintelligible 00:16:22.12\] You need to start building a team, be a leader, even if you don't want to be a manager." And so something I did about that -- because when I finally got to the point of understanding how that worked, and sort of advocating for my promotions, I decided I don't want the team I hired to go through the same thing. And so when it came time to sort of phase out our consultants, who were sort of my backbone for four or five years, and sort of "We're hiring an internal team. Here's some headcount, and here's a partner/people manager who's going to help you -- you and him are going to figure out what this team looks like." And he and I, very early on -- I was like "We're not hiring DBAs. I don't even want DBA on the job title." We didn't call them DBREs, because it was before the whole SRE thing. It was still like the height of DevOps days. And so I decided to be like "We're going to call them database engineers", because I was like "This is the team that's not going to be administrators. I'm going to want--" We had like a headcount of four, and I was like "I want maybe one or two of them to have some solid past experience, and the other two I want them brand new. Like, they're just software engineers, but they decided to switch gears."

**Autumn Nash:** Can we talk about how much I love you that you were like "Give me new people, so I can teach a skill"? That's the only way you can get more people to have these skills. I love that.

**Silvia Botros:** And it was so fulfilling. It's one of my -- if someone asks me about my career progression so far and things that I'm proud of, this is probably the thing I'm most proud of, is that we got the opportunity to have headcount, and sort of org structure. It's not just "Go hire the best people only, and then have them fight over the cool work, and nobody wants to do the other stuff." Because also at the same time my engineering leadership at the time was also making this culture shift in \[unintelligible 00:18:06.28\] SendGrid, where we were moving away from ops is on call for everything, and more like your product teams, you're on call for your services. And it was very clear at that point from talking to my VPE that the database is part of the service, obviously. And I was already long on the path of helping SendGrid sort of shard its databases by function. So that was already sort of going in the same line with that. So it was like "But those engineers don't know how to do anything with databases. If you're paging them about a database, all they're going to do is escalate to you", me specifically at that point as well.

And so it was a recognition that we needed a team that didn't just fix databases for people, but wanted to sort of build tools to help people own their own databases. The couple who had previous experience, teach. You get called in, you tell them what they should look at, and what they should -- they go through incident reviews, and explain "You had a deadlock because you were doing this, and this is how your table looks." And so like try to use as many opportunities as possible to sort of teach those engineers. And it was not an easy road. We definitely had struggles with a bunch of folks at that point who were like "I didn't sign up for this. I don't want to learn about databases." But this is a thing that a company has to sort of do when it goes out of startup mode, and now you're big enough that you can't have like two or three people -- first of all, how many DBAs are you going to hire? And then second of all, you can't have them be sort of like that one -- you know that XKCD comic with the one stone in the corner that's holding up the whole thing? You can't do that. That's a business risk. Even in like cold-hearted, pragmatic terms, not even human terms, it's a business risk. What if a bus hits that person? What if they win the lottery and walk away?

**Autumn Nash:** Can we just talk about just -- I just... I love you. Okay, there's so many things I'm so excited about. First of all, I love databases because everybody's always like "Oh, I don't want to touch database. That's not cool." But what is in one of the most important parts of every business? The data.

**Silvia Botros:** \[20:12\] Can't live without them.

**Autumn Nash:** Yes. And then the fact that you wanted to take new people and teach them - this is what is going to... I call this the new like "Mess around and find out" era of tech. This is going to bite us all in the butt; with all the AI, and how we don't want to teach junior people, and we only want to hire senior people... There are certain skills that you're just not going to get out of thin air. And if we don't learn how to teach people skills, we're going to ruin the -- when you teach people how to do things, you get paged less. You know what I mean?

**Silvia Botros:** Ooh, I've got some bad news for you. So that has been going that way long before the whole AI thing started.

**Autumn Nash:** I think it's going to get worse, because they're not --

**Silvia Botros:** Yes.

**Autumn Nash:** Look at how they're not hiring any more junior positions for engineering. The majority of what they're hiring for is mid and senior level right now. And it's been for like the last year.

**Silvia Botros:** Well, that's in part a whole like zero interest rates versus non-zero interest rates. That's a big part of it. But then also -yeah, this has been a simmering sort of rant with some of my tech circle of friends for a while, long, long before even AI... I think things like AI and ChatGPT and Copilot probably will make it worse. But we had this whole time of like engineers coming out of college and think their entire job is to glue a bunch of APIs from other vendors together. And then you have this whole -- I think there's even a... Yeah, I'm pretty sure there's a post about this in my blog from like four years ago; I'm going to have to find that and send it to Justin, maybe.

**Justin Garrison:** Yeah, we can put it in the notes.

**Silvia Botros:** Yeah. Because I was starting to realize that I was encountering more and more new engineers who have already gotten to like - not necessarily junior or like brand new, but like a few years into their career... And they basically think the entire job is glue together some APIs and some managed services in AWS.

**Autumn Nash:** I think it's also because we don't teach anymore. You're supposed to just come in and just know what you're doing. And I think it makes senior engineers better engineers when they have to teach people. And then the junior engineers become better engineers because they're getting led the right direction. You know what I mean?

**Silvia Botros:** We don't incentivize curiosity. I think one of the hardest challenges if you have an engineering work that's going to grow a lot, and a lot of those grew a lot in the last few years and now shrinking back - it's like, you didn't incentivize curiosity. And so I get it. I get folks who are like "Well, I'm using a managed database. Why do I have to care about that?" I'm like "Guess what? You'll still get deadlocks in the managed database."

**Autumn Nash:** Not just that, but the way that you put data in and take it out and plan your schema... We're going to pay so much more. We had somebody one day that was like "Oh, well, NoSQL is schema-less." And I'm like "Oh, no, it's not."

**Silvia Botros:** That was such an interesting fork in my road very, very early on, where I was like sitting right there, and like Panther Express had this database that was basically a very wide JSON thing in a MySQL table that did not scale. And then the founder of that company decided that he hates SQL, so he went and founded MongoDB.

**Autumn Nash:** Oh, my God. Y'all, y'all can't see her, but her face right now... The best.

**Silvia Botros:** So I remember struggling with this, and at the time I was like "Maybe I'm just too young to understand. I'm still early in my career."

**Autumn Nash:** Oh, no, you were right. You were right.

**Silvia Botros:** But I remember distinctly having conversations with this senior engineer who made the move from Panther to be senior engineers over in Mongo, and became core contributors to Mongo, and back and forth about the importance of transactions.

**Autumn Nash:** Oh, my goodness.

**Silvia Botros:** Because Mongo for quite a long time was like "No transactions. You don't need those."

**Justin Garrison:** Yeah.

**Silvia Botros:** And I remember going "Man, this is why I'm getting paged by that other database right here in Panther for four years."

**Autumn Nash:** \[24:10\] I think they get so wrapped up into NoSQL and SQL and like each database that they don't realize that their tools - they all take tuning. You need to be careful what your use case is. They're all a tool that's right for a certain use case. And they're just like "This will do things, and it'll be magical." And I'm like "No. No. That's not \[unintelligible 00:24:28.08\]

**Silvia Botros:** Exactly. People think I'm joking when I say all databases are terrible, but truly, they all have a terrible side to them.

**Autumn Nash:** Well, for the wrong thing, a hundred percent. Or the wrong access... I don't understand, I'm just like -- and not just that, but once you get to a certain scale, you may have to re-architect, because now your use case is a different use case.

**Silvia Botros:** Absolutely. Yeah. And it's funny, because I think a lot of folks mistakenly -- and this is a dynamic that's still ongoing right now, in my day job, where people... I'm not sure. I've never truly probed into that because it's not helpful, but I think in some cases they think because my name is on that book, that I want everything to run in MySQL.

**Autumn Nash:** Oh, my God. I hate that.

**Silvia Botros:** And I'm like "No. In fact, I think you're using it too much."

**Autumn Nash:** Yeah. My background's in NoSQL, and I started with like Cassandra and like Dynamo and like DocumentDB, all that kind of deal...

**Silvia Botros:** Ooh, Cassandra...

**Autumn Nash:** As like a solutions architect. And I'm just like "You have to use the right database. If it's not right for a NoSQL database, I'm going to tell you to go get RDS, or like SQL, or MySQL, or..."

**Silvia Botros:** See, as a solutions architect, that's not really -- generally speaking, it's not a job that's incentivized to say something like that.

**Autumn Nash:** But you should.

**Silvia Botros:** Exactly. When I encounter vendors who say stuff like that, I'm like "Ooh, now you've gained my respect. Let me listen to what you're saying."

**Autumn Nash:** Because it's that trust though, right? Like, I'm not going to trust you if you -- when you go and you're in a conversation with someone and they're like "Yse this tool for everything", I'm like "Hm..." There's nothing in tech that like you're just like -- I hate when people are like "Let's take this hammer and hit everything with it." I'm like "That's not going to end well." Why do you do this to me?

**Silvia Botros:** No, Justin, no...

**Autumn Nash:** You're giving me PTSD. Stop...

**Break**: \[26:26\]

**Justin Garrison:** I love your career progression of like you got nerd-sniped by a database problem.

**Autumn Nash:** But can we just talk about how badass you are?

**Silvia Botros:** Well, thank you.

**Justin Garrison:** No, and then she like goes and picks up this book, and then you write the --

**Autumn Nash:** Write the next version of it.

**Justin Garrison:** Two editions later, you're the author, "High Performance MySQL."

**Autumn Nash:** Can we talk about it? You're like "I had no idea what this was, and I picked up a book and now I'm the next generation write of it."

**Justin Garrison:** "And now I'm the author", right.

**Silvia Botros:** Yeah... Yeah, that was a whole other story.

**Autumn Nash:** But - okay, so it's so hard to find women in data, and stuff... And you're a principal architect. That is so badass. I want to be you when I grow up, and I'm going to follow you around. We're gonna be besties after this. Teach me your ways.

**Silvia Botros:** Yeah, the book thing was wild.

**Autumn Nash:** How did you get called or asked to do this book? Tell us about it.

**Silvia Botros:** High Performance MySQL, if you're in any of the MySQL circles have been to Percona Live when it used to run in-person, it's a well-known book. And second and third edition were primarily written by a gentleman called Baron Schwartz. He wrote himself some of the most classic tools in the MySQL space, he wrote them in Perl. Like, that was the thing back then. It's like pre-Bash.

**Justin Garrison:** Yeah, Perl is OG.

**Autumn Nash:** We're taking it back old school...

**Justin Garrison:** If you were doing database engineering, you've got some Perl tools in there.

**Silvia Botros:** Baron helped -- was he co-founder, or like...? I think he was co-founder. Percona, the group that does -- they're more than MySQL now. They do actually a lot of Mongo work too, and Kubernetes work. So he co-founded with them. And then after he left that company, he has decided at that point that things are starting to evolve where there is not a good option in the market for database monitoring. So he founded a company called Vivid Cortex, which basically helps you... Like, it was the first - I think one of the first to do deep relational database monitoring, where you fingerprint the queries, you start sending stats about individual queries, and you sort of try to go and see "Oh, this particular query is taking that much cycle, it's taking that much time over a month", or something.

**Autumn Nash:** What's fingerprinting a query? That sounds really interesting.

**Silvia Botros:** So what it does - it's basically an agent that runs on your database, and it listens on the same port as the database, and because of privacy, you don't want to just take all the same queries and just pipe them as is into your metrics or your data store analysis, because there's going to be a lot of sensitive information in there... But what it does is it looks at patterns in those queries, where like you keep having the same select, just with a different username, but it happens this often, and each time it takes this many milliseconds, but it happens so often that it's actually taking up like so many hours in a given day if you were to stack them up together.

**Autumn Nash:** Oh, I love metrics and observability like that, that finds patterns. Now I just blame you for the rabbit hole that I'm going to go down all weekend.

**Justin Garrison:** Autumn's weekend is planned.

3:So dropping ahead a little bit, Vivid Cortex has been acquired by SolarWinds a long time ago, and so they're basically the database performance monitoring portion of SolarWinds' product suite. But when it started, it was around the same time when I had been at that point a few years at SendGrid. And SendGrid was trying to sort of popularize its blog. This was the age where all the companies wanted to have a technical blog, kind of like the Netflix blog, and you would write up specifically about how you do the technical things. And so I wrote a blog post at that point about how we were moving towards sharding, and why we don't want everything in one big database, and then the tradeoffs of that. I get a cold email from Baron Schwartz, going, "Hey Silvia, I saw your blog post. I'm starting this new company after I left Percona. Can you get on a call? I would like to see if you can be an early adopter of Vivid Cortex." And I distinctly remember pinging my best friend at work and going "Oh, my God, Baron Schwartz just emailed me!"

**Autumn Nash:** Can we post your blog in the show notes? Because I want to read it.

**Silvia Botros:** Yeah.

**Autumn Nash:** I mean, mostly for me. I guess we can share it with other people, but...

**Silvia Botros:** I haven't written anything in a few years. It's been a couple of years of --

**Autumn Nash:** Yeah, but I'm sure it's still accurate, though. That's awesome. that's crazy... You read that book when you were looking to solve a problem, and then he's in your email. It's wild.

**Silvia Botros:** Yeah. So I got on a call with him, he showed me a demo, I got super-excited... Because that was around the same time -- serendipitously, this was around the same time when we were starting at SendGrid to go "We need others to be on call for the databases. It can't be just the one person." And so this -- I showed it to my leadership, we ended up taking on the contract... We were one of the first white papers on Vivid Cortex's website, and it was a very good way for me to sort of show engineers how to figure out their performance problems. Because up to that point, if you felt -- like, if you were perceiving a slowness on the application side, your only recourse is ping me, I have to go collect slow logs directly on the database, run them through pt-query-digest, which Baron also wrote, and then pull out this text-based report and start telling them what's going on. And it's such a long cycle, and very reactive.

\[34:10\] And at that point, you probably have incidents, or you should have an incident in your hand. Turning it around where it's like already a tool that's just running, and you just go and you see "Okay, this query used to be this little, and now it's that big. The number of rows expanded. Did a customer decide to hit us a little too hard?" Like, those kinds of conversations.

And so through that partnership with Vivid Cortex, and even after he sold it - and he's now in retirement, basically - we stayed in touch. So when O'Reilly came to him years later and were like "Hey, High Performance MySQL third edition is like hitting six-ish years now", or eight years almost, and there's been other major releases of MySQL since then... And things like AWS Aurora had been around for like five, six years, and it was becoming very solid, not like brand new and sketch... And so they were like "Are you interested in helping in working with a fourth edition?", he was like "Absolutely not. I don't even do any of that stuff anymore." And so he actually directed their development editor to me, and I ended up agreeing to do it.

**Autumn Nash:** That's kind of dope, that he gave you that credit, and that he wasn't one of those dudes who was like "Let's make more money, even though I haven't touched that database in--" Because sometimes people will do that. So it's really dope that he gave you that opportunity.

**Silvia Botros:** I mean, at that point he had done two editions, he knew how the royalties works. I don't think it was from that. But also, to be honest, Baron is a great person just on a human level, and he's always been very much into this field \[unintelligible 00:35:42.28\] a very specific way. People in jokes in our field will say something about like "The administrator is like this dude at the corner with the neck beard and all that", and like, DBAs are even worse. We're even far more \[unintelligible 00:35:55.28\] Yeah, it's a thing.

**Justin Garrison:** You have a robe, an \[unintelligible 00:36:00.22\] and the pointed hat, and you're like "No, don't talk to me."

**Silvia Botros:** Yeah.

**Justin Garrison:** In writing that book, what's something that you learned as you're -- because writing a book, you just have to think so slowly about how you're saying things. And I've found it very interesting of just like, there's things that emerged that you didn't really expect. Was there something in writing the book that you're like "Oh, this stuck with me"?

**Silvia Botros:** So part of why Baron had O'Reilly go to me was, one, he was ready to pass the torch, and then the other thing is he already knew at that point through conversations he and I have had when we would meet at conferences and whatnot that my view on the job has really, really changed. When I first met Baron, I was still very much like "I'm the database sorceress of the company, and I have had all the keys." Not a single scheme of change was happening without me.

It was very much that kind of state. And through starting with getting Vivid Cortex, plus all of the other changes that we were doing, I was moving very much towards "No, this job needs to be domestified. It needs to be reliability-focused.

It needs to be ROI-focused." We can't be like "I'm going to benchmark this database and I'm going to squeeze every little bit of performance out of it." That's not going to be how it continues to work.

And so he knew that if I took that on, I would not just want to do it... When I talked to him about it, I was like "I'm going to change a lot in the book." At that point I had not even read the third edition. I was like "The job has changed, and this book has to change with it", and he was like "Yes, I know. Do it."

I signed up initially to be a single fourth edition author, but I signed that contract January 2020, and then three months later a major event happened...

**Justin Garrison:** 2020 was a ride.

**Silvia Botros:** Yeah. So around May or June was when my production editor was like "I think you need a co-author." And I was like "I think so, too." I needed a co-author who agreed philosophically on certain things with me. And so I already had known Jeremy for quite a while, and we were both about the same thing. We had been doing databases for so long, and we were ready for databases to stop being so special... And so we hauled the inside of that book a lot. We removed entire chapters about benchmarking.

**Justin Garrison:** \[38:18\] Wow.

**Silvia Botros:** Yeah. We added chapters about DB -- like, I added I added one chapter specifically that I felt strongly about, about DBRE principles. We obviously, for obvious reasons, needed to expand on the cloud offering and compliance things, because there was none of that in the past...

**Autumn Nash:** Compliance is so important.

**Silvia Botros:** Yeah. Cloud databases, too. When I pulled out the third edition and looked at what Baron wrote about Aurora MySQL, at that point it was maybe a page, in a 500-page book. And I was like "Dude, you did not really want to look into this at all." And he was like "Yeah, I was not interested."

**Autumn Nash:** Well, not just that, but Aurora has become huge, with so many companies using it, and how performant it is.

**Silvia Botros:** Yeah. The difference of years was huge. I remember when Aurora first came out and it was like "Man--", half of the feature set didn't work. There was a lot of downtime involved, because brand new, completely proprietary storage layer.

**Autumn Nash:** Yeah.

**Silvia Botros:** But by the time me and Jeremy got involved, it was a completely different beast.

**Autumn Nash:** And its performance is crazy.

**Silvia Botros:** Yeah. One of my vivid memories of that journey of writing the book is how much the seasoned DBAs who were technical reviewers for the book really took a hard time... Not all of them, some of them. A few of them had a really hard time with my direction with the book about "This job is not about \[unintelligible 00:39:32.24\] benchmarks anymore."

**Justin Garrison:** Because you've got a bunch of DBAs that made that their career for so long, and you're telling them "In this book we're not doing that anymore."

**Silvia Botros:** And I was saying that even for large companies.

**Autumn Nash:** I think a lot of DBAs also are not fans of making certain things more...

**Silvia Botros:** Accessible?

**Autumn Nash:** Yes, that was what I was going for, but I was trying to be nice about it.

**Justin Garrison:** Job security is a thing, yeah...

**Autumn Nash:** Also, they're very against like managed databases, because I think it gives them a view that they are no longer needed. But you still need someone who knows your database.

**Justin Garrison:** I mean, in technology we attach ourselves to a thing that we do. Like, our identity is really tied to this thing that I do. And in a specialized field like databases - or at least traditionally specialized... Silvia, you were saying like "This shouldn't be as specialized as everyone has treated it in the past." But being a special identity is really important for a lot of people.

**Autumn Nash:** But I think we've talked on the podcast about how far infrastructure's come in the last couple of years... But databases have in a way been kind of wild too, because if you think about it, DBAs were walking around with pagers, and like very specialized... And then we had all these managed databases come out and it changed the way that people were using databases. And it was like "You don't need DBAs. You don't need all these database people. Just get a managed database."

**Silvia Botros:** Oh, that is the biggest lie ever told.

**Autumn Nash:** Well, not just that. And so then these companies did these long migrations, and they migrated to these databases, and they still -- like, they're putting in data and access patterns, doing all this stuff completely wrong...

**Silvia Botros:** It turns out you still need the pager, it's just different things.

**Autumn Nash:** Exactly. So just like infrastructure has kind of been on a ride, so has databases, but I think it's not talked about as much. Like, databases in the cloud, and then how we're getting massive amounts of data... And the transition between DBAs, and now cloud and managed databases... Like, you rewrote that book rightfully so, because it's like a completely different world. But a lot of the foundational pieces, you still need those, but you have to think of it in a completely different context.

**Silvia Botros:** Exactly. I mean, the way I talk about it with our engineers at Twilio now, it's like, it's not about what you're using, it's about outcomes.

**Autumn Nash:** Yes.

**Silvia Botros:** And when you are a company -- Twilio has, in some parts of our product... We have a variety of products in Twilio. But things like email - we're talking planet scale. Black Friday, Cyber Monday, we send trillions of emails over just a couple of days. You want the stuff that doesn't make you money boring. And if that means you let go of the things that got you here, so you can do something else... So like you make it boring, so that the real stuff that's important continues going - do that. It's not about which database you're using. It's what are you trying to accomplish?

People get surprised when I go "That's an S3 file. Why is that a database?" So that happens.

**Autumn Nash:** \[42:23\] Why are you spending the extra money for no reason...?

**Silvia Botros:** I mean, here's the thing... I mean, we talk about cogs, and yes, that's a more important thing now with our economic landscape... But your time as an engineer is still the most expensive thing. Why are you spending time trying to tune this database when it could be an S3 file? This data doesn't change except once every day.

**Autumn Nash:** Yeah. You talked about your career progression when you really enjoyed the hero aspect, and then you started to kind of get burned out, and then you got to the point where you wanted to teach people... Can you tell us about how you continued to progress in your career, but also kind of healed that burnout, and how you kind of transitioned to the teaching aspect? ...like, how can other people be better at teaching also?

**Silvia Botros:** I don't know if you ever do really fix the burnout... At that time - credit where due; I had really helpful eng leadership at that point. I remember our VP of Ops at the time at one point - and that's seared into my brain. We were talking about the details of managing the database, and spreading all of those -- the gnarly mechanics of how to do this... And I was still operating at that point with the assumption that there's no headcount for me... And he looked at me and he goes "No, you're a leader. We're going to do headcount, you're going to get -- the contractors are not serving your purposes anymore. I want you to lead this area of the business." And it was like "Oh. Oh, this is about the business, not about the databases." And I've taken that with me ever since then.

Now, as far as like burnout, there's different ways burnout happens, and some of them are under our control and some of them are not. I highly recommend -- there's a book on burnout, and its title is really escaping me right now, but it's really, really good. And that helped me sort of change my view on certain things. I've learned over the last -- especially the last few years, to recognize early things under my control and things that are not. And that has been really helpful. Because if you try to push the rock up the hill, it's just not going to happen.

**Autumn Nash:** How did you build a team without being a people manager? Was it more like you were sourcing the team, and then getting the right people, and then planning it? Because I think that's like an IC dream, when you don't want to do people managing, but you want to learn --

**Silvia Botros:** I know, right?

**Autumn Nash:** That's living the dream.

**Silvia Botros:** I really lucked out with that one. So they actually first offered me that. And that was before we had a full IC ladder. And I remember at the time -- so around the same time, Camille Fournier published her Rent the Runway ladder. And I thought about it for a bit and I remember having actually a long conversation with Charity Majors. And she was like "You don't sound like you would enjoy people management at all. You're still very much into fixing the technical problems."

So I actually went to my leadership at that point and said "I want to lead this team, but I don't want to manage this team." And I don't know what kind of light came down on them from above and they decided "We'll do that."

**Autumn Nash:** What does that look like, leading but not managing?

**Silvia Botros:** So first they hired the manager. I had a wonderful partner in that manager. He's a great guy, John Martin. I don't know if Justin knows him. In any case, they hired him, and then he and I -- at that point, they had him as my manager. I was still like senior staff, I think, at that point. But I had been clear at that point -- I brought them that Rent the Runway career ladder and I told them "We should have this", and I wanted to go in that IC path. I want us to start having a principal role, and architect role, and grow that. I'm sure there was conversations without me as well. Like, it wasn't just me bringing it in. I don't want to make it sound like \[unintelligible 00:46:01.28\] or anything.

\[46:06\] And so they hired that manager, and he and I started together sort of planning what we want the team to look like. So it was it was a long journey... So what we ended up doing is he owned the -- he was technically the hiring manager. He did the initial screening, but I worked with him on writing the job requirement, on writing the interview loop, on figuring out who else \[unintelligible 00:46:24.27\] Obviously, I was as well. So I was involved in all the hiring decisions. That was a big part of the success there. And then as the team got completely fleshed out, it was like "Okay, we're going to have this kind of work for these folks, and then we'll have those pair this way, so that this new for this person who is brand, brand new to databases gets to learn."

I was lucky to kind of catch a couple of really promising engineers. One of them moved on to be like a senior DBE in other places, and sort of took the same mindset with him... Two of them are still here, actually, at Twilio, really good team members... It's been really great watching all of that happen.

**Autumn Nash:** It seems like support has really been pivotal in your career to kind of support you to get to this next level, because you're amazing. And someone obviously saw how amazing you are. What else do you think really helped your career progression? Because I think that's hard. When you first get into tech, you're so excited and you're like "Oh, all these cool, new things." We always talk about how to get into tech, but how did you grow your career? How did you go from junior, to mid, to where you are? What do you think was pivotal or important to that?

**Silvia Botros:** I think it's really, really important to have curiosity, and have mentorship. In my conversations in my current job, when we talk about role expectations in a calibration kind of framework or anything like that, I expect -- folks who already have titles like me or are very close to me, I expect that they're showing signals of how they teach people around them. I'm very much not of a "You got to that role, and you continue in that role, just being the hero of things."

**Justin Garrison:** You can't keep your head down. You have to look up and you have to tell other people how to get there.

**Silvia Botros:** Yeah. I'll have to see signals that you're actually raising other boats. And then honestly, for specifically someone who looks like me, like minorities in tech, I think it's really important to have a network outside of your employer. Because if you only rely on your company, you're probably going to have single digits \[unintelligible 00:48:25.29\] I mean, that's just the sad reality. There's only one other woman who's at my level, I think, right now, at Twilio.

When I first became architect with SendGrid -- I became architect with SendGrid right before the acquisition.

I was the only one. The rest were dudes. And they were great dudes, and they were very helpful, but it's still the reality at that point. I still started to have conversations with other women who got to senior levels outside, because you have to have that. So build a network. It's harder now. I mean, honestly, one of my biggest parts of grief about Twitter is tech Twitter.

**Autumn Nash:** That is so true. I feel like I learned so much on Twitter, and met so many great people, and that's what makes me sad. Everyone's like "Well, we just don't want to hype Elon up", but like...

**Silvia Botros:** Yeah, the first time I got to talk to Jeremy, my co-author, was through Twitter.

**Autumn Nash:** I've met so many wonderful people that way.

**Silvia Botros:** Yeah. So that was unfortunate. I obviously had already built a network, so I just kept that network afterwards, through other means... I would say now that we're a few years removed, a year-ish removed from this whole thing, I would say probably Mastodon is where I'm seeing tech Twitter come up the most.

**Autumn Nash:** But it's so sad, because now women that are interested in data won't see you on Twitter. You know what I mean? Because we haven't got back to like one centralized place, it's like... Representation matters, and the fact that we don't have a place to see other people succeeding in that... I mean, I guess you can go on LinkedIn and stuff, but whatever was captured in tech Twitter -- exactly. You know what I mean? I feel like Mastodon and Bluesky have gotten so boring, not because they're not good social medias, but just cause we're not all in one place.

**Silvia Botros:** \[50:10\] It's a difficult one.

**Autumn Nash:** Yeah. I don't know how we get the magic back.

**Silvia Botros:** Yeah. And I don't know if that's ever going to get solved. What I'm seeing, like outside of social media, there are things like Lead Dev - they're a group that have multiple conferences that still run in person, things like StaffPlus and \[unintelligible 00:50:30.19\] And they actually are very good at making sure their speaker lineups in their events are as diverse as possible. I gave them the keynote for the first StaffPlus in New York a few years ago. The curator of the event is a friend who's a woman, senior engineering career, Tanya Riley... Who by the way, if y'all are looking to follow the IC leadership path, read her book, "Staff engineer path."

**Justin Garrison:** That is one of the few books that I had to stop reading in audio form... Because I usually listen to audiobooks. There was so much information... I'm like "I have to stop and write notes, because this is amazing." And I was like "No, I'm not doing the audiobook. I'm going to buy this book, I'm going to write it down, and I'm going to read it slowly."

**Silvia Botros:** Yeah. For anybody who's looking to go into this path, the two books that are sort of like hand-in-hand, and both written by women, which I love, "The staff engineer's path" and "The manager's path." Because you're not going to be a manager, but as you get further from architect and above, you're going to talk with managers all the time. In fact, those are going to be your first team.

**Justin Garrison:** And "The manager's path" helps you understand their incentives, and why they're -- reading that book helped me understand how I should help my manager be successful, in a lot of ways. It's just like "Oh, we're both here working."

**Silvia Botros:** I did not understand how VPs think about things, how to get VPs to care about certain things, and why are they in so many meetings... Junior engineers will always say stuff like this, "They're just in meetings all the time." I'm like "It's not just meetings. There's an overhead to communication when the company grows." So that book was so helpful... Shout-out to Camille Fournier. So helpful in understanding that mindset. "Oh, this is the stuff they care about." Because if you don't understand their incentives, you can't work with them. It's that simple.

**Justin Garrison:** Silvia, I have one last question for you, and it's one that we've actually gotten from the community in some regards, and just people in general... But people trying to like pick a database, and as an expert in this field, what's a telltale sign that someone should not be using MySQL?

**Silvia Botros:** If you have gotten to a size where a minute or so of "I can't write to the database" causes your leadership to freak out, and call you in, and "How did that go down?", you should understand at that point the business is telling you you are supposed to optimize for availability, and figure out a path to eventual consistency in how you solve the problems. Start talking to your product folks about SLOs, start talking about "Do we really need everything to be quote-unquote real time?" That's my biggest pet peeve, in some ways. What does that even mean?

**Justin Garrison:** What is real time?

**Silvia Botros:** Yeah, what is real time? But when people come to you with conversations like that, and this feature is sitting on top of a database that is relational, which by design means it optimizes for consistency, not availability, even in the managed solutions, this is your sign. You need to start talking about -- either you need to move the business, which is a harder sell, or you need to start introducing layers of reliability between this database and how you deliver the feature to the customers. Introduce queues, introduce caches. When the writer is failing over, you have to figure out what degraded mode looks like. It needs to become far more nuanced. It's not going to be binary from then on. That ship sailed. But yeah, that's definitely one of the biggest signals. If you start saying "I want Aurora, but I want it to fail over without any downtime", I'm going to be like "Well, meet the CAP theorem."

**Autumn Nash:** Yeah. I was going to say, that's when the CAP theorem comes in. Do you want availability, or do you want consistency?

**Silvia Botros:** \[54:11\] It's just reality. These are your tools. Figure out how to make them work for you.

**Autumn Nash:** I wish people looked at NoSQL databases and SQL databases in that realm, and not in such black and white.

**Silvia Botros:** Yeah, none of it is really black and white.

**Justin Garrison:** Nothing ever is.

**Silvia Botros:** Nope. You think it's real time, you think it's consistent. Well, guess what? Go look at some Jepsen reports. Even on my SQL itself.

**Autumn Nash:** I feel like when you talk to somebody who is really thinking of it in terms of the CAP theorem, it's very gray. And when someone starts saying black and white, I'm like "This is marketing."

**Silvia Botros:** Yes. Very true.

**Autumn Nash:** We're no longer talking technically.

**Justin Garrison:** Silvia, thank you so much for coming on the show. I feel like we could talk to you for another hour about this, because there's so much information.

**Silvia Botros:** Oh, thank you. It was fun.

**Autumn Nash:** Oh, I need to know where to find you, because I'm gonna follow you around for the rest of my tech career. Teach me all the things.

**Silvia Botros:** My online handle, which was kind of a joke at first, and I just stuck with it for over 10 years now, is @dbsmasher.

**Autumn Nash:** Oh my God, I love you so much. Where have you been all my life?

**Silvia Botros:** So yeah, I don't -- I mean the sad reality, I don't post online about tech as much anymore. Although when I do, it's most likely going to be on Mastodon. And then we'll have the blog...

**Autumn Nash:** Like, if I have to go back to Mastodon for you, I'll do it.

**Silvia Botros:** Oh, I know. I know. Mastodon is a mixed bag. I'm very --

**Autumn Nash:** I was not ready...

**Silvia Botros:** Yeah, I know. That's why I don't open it very often. But I've noticed -- when I say something about tech, it seems to sort of get much more of a reaction there than like Threads. So I guess that's where we are. I'm still there too, but you know... My focus right now in my social media posting is like trolling my friends, really.

**Autumn Nash:** I'm here for that too, though. Like, I'll take the tech, and that. I'm totally here for it.

**Silvia Botros:** And yeah, I guess I have a blog. I have not updated it in a bit, but some of it are still opinions I strongly hold.

**Justin Garrison:** Awesome. Well, thank you so much, and we'll put those in the show notes.

**Autumn Nash:** Sure. Thank you.

**Break**: \[56:18\]

**Justin Garrison:** Thank you, Silvia, again, for coming on the show. I have a feeling we'll have you back at some point, because this was too good...

**Autumn Nash:** Please... Please... Please...

**Justin Garrison:** We have so many other questions. But for right now, for the outro for today I made a quiz. More or less I had --

**Autumn Nash:** Oh, guys... I'm scared.

**Justin Garrison:** I had ChatGPT create a quiz.

**Autumn Nash:** Oh no, that's even worse...

**Justin Garrison:** So sometimes it's a little more entertaining, sometimes it's just a little more obvious on things...

**Autumn Nash:** I like it when you make it name stuff, because it's always ridiculous.

**Justin Garrison:** I did not come up with a creative name for this one.

**Autumn Nash:** Dang it...

**Justin Garrison:** It was just basically what database should you pick. So what the DB. And it's about -- if you have a description of a use case, or data, or something, which database would you pick? And you are much more experienced in databases, so I think you're going to nail all of these. And just, upfront, if you need help, we have multiple choice. I'm not going to give you multiple choice...

**Autumn Nash:** I don't know, because I feel like a lot of times when it comes to a database or learning about a use case, I'm down to try it, but you have to be able to ask questions, you know what I mean? But I'll try.

**Justin Garrison:** Absolutely. Yeah, this is contrived examples... Most of it is just like trying to lean into the experience or the benefits of specific databases... And none of them are like really obscure. So these are like the kind of common ones, that I think of. I know all the names. I'm not a database person, I knew all of the databases described here. And some of them, again, probably have overlap. You could probably -- there's probably multiple answers.

**Autumn Nash:** Yeah. Also, let's be real... Five of these are probably built on Postgres, with a fancy name... But okay.

**Justin Garrison:** So question one. This database is designed to handle large volumes of unstructured data, like text and multimedia files. It is often used for applications that require flexible schema and rapid development.

**Autumn Nash:** Mongo?

**Justin Garrison:** Yes. MongoDB. See? It gives you a couple of hints in there, which I like. Because a couple of these answers I think I might've gotten right, but I don't know. Question two. This database excels in managing complex relationships between data points, and is commonly used for applications needing strong consistency and support for ACID transactions. It is a go-to choice for financial systems and applications requiring complex queries.

**Autumn Nash:** Cassandra? Redshift? Cassandra?

**Justin Garrison:** This one they put as MySQL. I would have picked MySQL only because of the -- I mean, I guess ACID is a lot of them. But...

**Autumn Nash:** Oh, wait... See, because ACID is a new feature for Cassandra that they're trying out... It wasn't ACID for like forever, but I guess it depends on when --

**Justin Garrison:** I didn't even know Cassandra had ACID.

**Autumn Nash:** ...even though some people are like "It's not possible, because you have to pick one." But it is now a new feature.

**Justin Garrison:** I probably would have picked Oracle for the answer on this one, just because hit the financial systems and complex queries.

**Autumn Nash:** Actually, a lot of financial systems use Cassandra, and it's still technically a column database, but the ACID transaction should have been the hint for it to be a SQL database... But it is now a new feature in Cassandra.

**Justin Garrison:** If you want the multiple choice options, I can give them to you as well.

**Autumn Nash:** Okay.

**Justin Garrison:** Question three. This database -- and give me a second, so that people listening can struggle and yell in their cars.

**Autumn Nash:** Oh, you're right. Sorry, I get excited.

**Justin Garrison:** I know. This is your game, but I want people in the car to --

**Autumn Nash:** It's my happy place.

**Justin Garrison:** This database is optimized for fast, low-latency access to key-value pairs. It is often used as a cache or for real-time analytics, and can handle high throughput workloads.

**Autumn Nash:** \[01:02:00.09\] Redis, or Dynamo?

**Justin Garrison:** I was gonna say, they also relicensed recently, and yes, it's Redis.

**Autumn Nash:** Yeah. Also, that booth was so awkward during Google Next. Everybody was like "We like you, but you're doing evil stuff, so we're going to walk past you." It's like, "This is so awkward."

**Justin Garrison:** Question four. This database is specifically designed to handle hierarchical or graph-like data structures, making it ideal for applications such as social networks, organizational charts, and recommendation engines.

**Autumn Nash:** The managed version of it would be Neptune, but we're talking about some sort of a graph database?

**Justin Garrison:** Neo4j is the one that I know, and that's the answer that ChatGPT picked. I haven't seen anything wildly inaccurate yet, which is surprising. No hallucinations yet. Alright, question five. This database is known for its ability to scale horizontally, and manage large volumes of data across distributed systems. It is eventually consistent, and well-suited for big data or real time analytics.

**Autumn Nash:** Give me the multiple choice, because this could be like multiple...

**Justin Garrison:** It's going to be very obvious in the multiple choice here. a) Cassandra, b) SQLite, c) Postgres, d) Microsoft SQL Server.

**Autumn Nash:** Cassandra?

**Justin Garrison:** Yeah. I did try multiple times to get it to give me one of these questions to describe Excel. Because Excel is the widest used database in the world...

**Autumn Nash:** Why do you want to hurt me like that?

**Justin Garrison:** ...and it would not spit it out for me.

**Autumn Nash:** I thought we were friends. You just wake up sometimes and sometimes you're like "Oh, I'm going to give Autumn a gift, talking to Sylvia." And then other times you're like "I'm going to hurt her soul." And I'm going to ask you to give Excel -- like, it is not a database. Stop it!

**Justin Garrison:** Excel is totally a database.

**Autumn Nash:** This is just... Why are you like this? This is like...

**Justin Garrison:** Question six.

**Autumn Nash:** He's like "Let me go for another one." Why are you like this...?

**Justin Garrison:** I think there's seven questions. Oh, I have eight. Nevermind. Six. This database supports complex queries and transactions with support for relational data, but is known for its high-performance and scalability. It's often used in enterprise environments where both high data consistency and high throughput are needed. This is the first one I know for sure I would have got wrong... And I will give you a hint that it is -- specifically, they call it a managed database.

**Autumn Nash:** Can you read it again?

**Justin Garrison:** This database supports complex queries and transactions with support for relational data.

**Autumn Nash:** Redshift? Snowflake?

**Justin Garrison:** It is one you're familiar with. I'll give you the -- well, there's only one managed database in the multiple choice, so I would have given it away. It is an AWS database.

**Autumn Nash:** Dynamo?

**Justin Garrison:** It's Aurora. And I don't know if all of those things describe Aurora accurately or not.

**Autumn Nash:** Wait --

**Justin Garrison:** That's not necessarily -- and there's so much overlap in AWS databases that it's probably --

**Autumn Nash:** Can we go back and --

**Justin Garrison:** This database supports complex queries and transactions with support for relational data, but is known for its high performance and scalability. It's often used --

**Autumn Nash:** Oh, relational. Yeah, Aurora.

**Justin Garrison:** \[01:05:12.24\] It's often used in enterprise environments where both high data consistency and high throughput are needed. The high throughput is what kind of leaned me towards Aurora, but --

**Autumn Nash:** Yeah, because I think it's supposed to be four times faster than regular MySQL, but... I don't know, I feel like that's a really crappy description for Aurora.

**Justin Garrison:** Yeah. I don't think that one was the best. Seven. No, I'm not reading seven, because seven is a repeat. It's a different question. It's the same database. It's MySQL. Or -- it was Mongo again.

**Autumn Nash:** Mongo is used for a lot of different things, because it's --

**Justin Garrison:** It's true. The question was "This database is web scale."

**Autumn Nash:** Oh. Shots fired.

**Justin Garrison:** Alright, the last question. This SQL database is known - it does say SQL database - for its robust transactional support, and is frequently used in applications where data integrity and consistency are critical. It offers strong consistency and support for complex joins. This could be pretty much any.

**Autumn Nash:** Postgres?

**Justin Garrison:** Yeah, it's Postgres. That's what they called it. But that's pretty much any SQL database that's --

**Autumn Nash:** That's what I'm saying, some of these descriptions are kind of crappy.

**Justin Garrison:** I was going to add on that one, it's also the foundation for pretty much every other database.

**Autumn Nash:** Yeah. Well, not just that, but some of the -- I missed the SQL part in the last question, which would have told me that it was not Dynamo and it was like Aurora or one of those, but... I don't know. I feel like some of these are very general, and they can be multiple things... But yeah, that's definitely Postgres.

**Justin Garrison:** Yeah. There are multiple correct answers for these generic descriptions for what a database does.

**Autumn Nash:** Yeah.

**Justin Garrison:** So yeah, that was the quiz. It was okay.

**Autumn Nash:** I love databases so much.

**Justin Garrison:** I know. I want to tease out some more obscure ones, and that I can give you multiple choice for them. But we'll figure that one out.

**Autumn Nash:** I love that you can use it for so many different things...

**Justin Garrison:** Or just use a file system, and Excel.

**Autumn Nash:** Why are you like this? You know, I love our friendship, but then every now and then I feel like you just do stuff to hurt me, and I just --

**Justin Garrison:** Because I'm a sysadmin and I don't want to learn any more SQL than I have to.

**Autumn Nash:** Which is funny, because a lot of databases will go and make SQL-like languages. Cassandra has like CQL. So it's like the Cassandra Query Language that is made to look more like SQL... But you'd be surprised how many -- like, that's a great skill, because...

**Justin Garrison:** Oh no, absolutely. There are a lot of use cases for --

**Autumn Nash:** You learn it once and then all of a sudden you just slap it on something else, and keep it moving.

**Justin Garrison:** Thank you everyone for listening to the show, and if you have any guests that you would like to come on show, we would love to hear from some people that work at these managed database services, or open source projects, because we have a big area there that we can explore, and talking about them.

**Autumn Nash:** We need more database people. I love me some databases.

**Justin Garrison:** Talking about them in the context of managing systems is really interesting. So if you have suggestions, feel free to reach out. We are shipit \[at\] Changelog.com, and we will talk to you again soon.
