**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens to code when it becomes software. I am your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Um, it's still Sunday. We still have coffee.

**Justin Garrison:** Hey, these episodes are a week apart from our last one, so no one knows it's still Sunday. They don't know that we're recording back to back intros.

**Autumn Nash:** It could have been the next Sunday, don't tell on me... Gosh.

**Justin Garrison:** We have a little bit of a backlog of our guests, which is great, because we're trying to get a little ahead before summer. We might need to travel, and take vacation time...

**Autumn Nash:** And children, don't forget.

**Justin Garrison:** Kids are out of school...

**Autumn Nash:** We have a lot of tiny humans between the two of us.

**Justin Garrison:** Yes. And so it would be nice to get ahead of those things, so we're recording some of these episodes, and they are released in a small trickle, but not too far removed from when we record them.

**Autumn Nash:** I mean, also, be real; we're gonna send each other articles and talk about this stuff. We either do it for the podcast, or we do it when nobody hears.

**Justin Garrison:** That's true. And on today's show we have Andrew Atkinson, who is going to talk all about Postgres, and Postgres database, and a lot of interesting -- I'm not a database person, so I'm learning a lot...

**Autumn Nash:** I always geeked about this... Just because the Postgres community is really friendly, and I had met Henrietta, and I wanted to go to the Chicago Postgres Day... But it was just too much back to back after Scale, and Awesome, and then possibly Grace Hopper... But I'm a geek to talk to them.

**Justin Garrison:** Yeah. So it was a lot of fun talking to them, and in learning more about just -- I don't know anything about the Postgres community, I've never been a part of it... The only time that I managed Postgres was I was like "Oh, why are these commands different than the MySQL commands?"

**Autumn Nash:** You know I love me some data and databases...

**Justin Garrison:** So before we get to the interview, we have a couple links to share, as always, in our intro. Autumn, why don't you go first?

**Autumn Nash:** Oh, you set me up. No... \[laughter\] Okay, so this week my link is kind of techie. I guess it affects everybody, but... Nobel Prize winning Harvard economist, Claudia Goldin says that we will never close the pay gap unless this happens.

**Justin Garrison:** Wait... If there's a spoiler there, what is the thing that needs to happen?

**Autumn Nash:** Well, what do you think so far?

**Justin Garrison:** I don't know. Maybe companies need to pay more equally?

**Autumn Nash:** It's almost, I don't know, ironic, how simple it is... But complex at the same time, I guess. It's almost like we needed somebody who was a Nobel Prize winner to tell us this, but at the same time, please, scream it from the rooftop for the rest of us. So she's basically saying that we can't get gender equality in the workplace and change the pay gap unless we get couples equality. But it's interesting, because it also talks about -- so basically, she calls the jobs greedy. So the jobs that really pay good salaries, they call them greedy. So it's greedy with your time, right? It's greedy with your work/life balance, etc. But most women, because you're typically caregivers, or you could be your parental caregivers, it could be marital caregivers, it could be disabled spouse caregivers... And obviously, a lot of us are mothers, but mostly it's mothers... So it talks about how women have to take the more flexible jobs, which is a job that may be remote, which is a job that may have better work/life balance, which ends up getting us paid much less. And it's interesting with the way that RTO is going, and the way of -- there's been a lot of articles about how women aren't having enough children. And we're saying the generations will not have enough people to take care of our generations, and the generations before us, because women don't want to have kids anymore, and a lot of women aren't having kids. And it's really interesting, we're being pushed, like "Hey, if you don't have enough kids, society is going to crash and burn", but then it's like "But we're going to pay you less. You're going to always have a lesser job." And at the same time, housing and childcare and food are astronomically expensive. Childcare is as much as my mortgage.

**Justin Garrison:** So you have two mortgages.

**Autumn Nash:** Yeah, basically. And it's wild because they -- I read an article and it talked about two different middle classes. There's the middle class that has a house that was bought like 15 years ago, and no kids and childcare. And then there's the new generation of the middle class, that you make all this money, but you have kids and childcare, or you bought a house in the last couple years, and you are two different income levels. You may make the same amount of money, but you are living two completely different lives.

And it was really interesting, and it talks about how women are only able to really do well in the workplace when they have 50/50 relationships, but also when jobs are more flexible, because it then gets to the point where it needs to be flexible for both partners. So when you give a man a more flexible job, it also helps the gender pay gap, because they can then be better partners. So it's really interesting. So flexible work is actually how we will get to better equality in the workforce. Yeah.

**Justin Garrison:** I've always had a very strong stance on my work/life balance. And even when I worked at Amazon, I --

**Autumn Nash:** \[06:10\] You were one of the first guys though that I've ever met... I remember one of our first video calls, and you were like "I have to work remotely, because I pick up my kids", and most guys will not say that. When you say that in a workplace, you make it easier for people like me, because then it's not like looked down upon.

I think the way that a lot of the workforce is going, the more people that accept being treated a certain way makes it harder for women, because we don't have that option to just be like "My wife's gonna go pick up the kids." So that is a big deal, when people like you say that. I have people I work with, and when they say those things, it makes it so much easier for me to stick around, you know?

**Justin Garrison:** And I really enjoy that. I drop off and pick up my kids from school almost every day. And I'm going to a trip next week, and it's my responsibility to find someone that is going to drop off and pick up my kids. And I asked my wife, "Hey, are you able to do this?" This is something that I take responsibility for. But I feel like a lot of that for me came from this article, like those greedy jobs, and just really -- success is this money, or monetary thing, or ownership... Like, I really, really try to define my success by waking up happy...

**Autumn Nash:** That's so true.

**Justin Garrison:** ...more days that I wake up not happy. And if that ratio starts going in one direction, I have to figure out why. I have to figure out what's changing. And maybe that's because -- like, I can be tired and happy. And as long as I want to wake up and I want to get up and I want to face the day, that to me is more successful than the higher paying job; and taking pay cuts, and working remote, and doing those things and being involved with my kids, and having -- like, knowing my neighbors has a surprisingly big impact on my happiness and life.

**Autumn Nash:** That also helps your family though, because then if God forbid you can't go pick up your kids, or something bad happens, you now have a community. Because community is important.

**Justin Garrison:** Right. Having that local community. And having communities online, having communities in open source, having communities on social media...

**Autumn Nash:** As a military spouse, I didn't have that community for years. There was nobody to put on my kids' pickup list. It was either "You get there or you're screwed." You'd put like random strangers that you just met two weeks ago on your kids' pickup list, because you didn't know anybody.

**Justin Garrison:** Yeah. There's a big difference between having a community that I see often face to face, and we have this shared community of locality, versus the shared community of interests. And my interests communities - I love them. I love being part of them. They help me grow. I hopefully help them grow in some ways. But that is a very different community than the neighbors that live on both sides of my house, the neighbors that live across the street from me, and anyone else that I see walking around my neighborhood. Those are the people that I try to get to know, at least as a "I know your names, I know your kids, I know at least where you work..." That is a really important thing.

**Autumn Nash:** That's also safer for your kids too, because now if they go over to those people's house, you actually know them. It's wild.

**Justin Garrison:** Yeah. And I know which houses I don't want them to go to. Right? Both sides of that are very helpful.

**Autumn Nash:** But having that knowledge, and also knowing your kid's friends is really important. There was a little girl who committed suicide, and she was a beautiful little girl, and it was because she was getting bullied so hard at school, and they had to switch her schools. And it was crazy, because her mom had to put her in a school where she worked closest to. And it's like - dude, I remember being a kid, and everything feels so big as a kid, you know? And it's just wild... Just the opportunity for me to be there for my children and be around is such a big deal... But that's a privilege. The privilege -- like, as a single mom, I don't always have the privilege to turn down a job, you know?

**Justin Garrison:** Yeah.

**Autumn Nash:** So it's wild where all this will shake up. I felt like we were getting closer to closing that gap, and does this mean that we're now gonna get farther away? It's wild.

**Justin Garrison:** \[09:59\] Yeah. But I think a lot of that, like the 50/50-ness of it also comes down to just like -- for me at least it was redefining what I wanted to do, what I thought was successful. And the more I thought about "Hey, I would rather be happy than rich" is like a huge mind shift for me. As a dude, that has all the benefits in the world, and a little bit of social pressure of like "Hey, you've gotta be successful." Actually, I don't think my definition matches yours. And that's okay.

**Autumn Nash:** And it sucks, because that's a privilege, to be able to pay your bills still, and to be able to do that.

**Justin Garrison:** Absolutely. It absolutely is. And that has helped me more in being able to have more flexibility in my schedule, and knowing that "This is important to me. I'm not going to schedule that meeting during this time, because that's school pickup." It's like "Oh, you'll take it from the car, or I won't do it. It's fine."

**Autumn Nash:** It's also awesome, because that's also why you -- like, being your friend as a woman is so much easier, because I don't have to explain certain things to you... We can be real friends in real life. We're not just people that talk to each other on a podcast, you know what I mean? And I think that also makes our podcast better. I think that makes you a better co-worker, it makes you -- I'm guessing your relationship with your kids is really cool, you know what I mean? It's crazy how those choices affect multiple areas of your life.

**Justin Garrison:** Yeah, for sure. There's always those trade-offs, and I think that this article really points out that the first step happens from that, just responsibilities at home, and cognitive overhead of "Who's planning the birthday party? Who's doing the laundry? Who's doing the dishes?" All of those things add up so much. It's like "Hey, who's responsible for dinner tonight?"

**Autumn Nash:** Yes. And those little things... Consideration is one of the biggest --

**Justin Garrison:** It is not a little thing when you have kids, especially one picky eater... \[laughs\]

**Autumn Nash:** I think people think you have to do something amazing. Like, you have to volunteer your time, and do all this... But consideration of your co-workers, of your spouse... And speaking up... Like when you're in a meeting, and somebody says they have to go pick up their kids, when you speak up and you're like "Yeah, dude, me too." It is huge. It is so huge.

I saw that actually on a PowerPoint at a tech conference, and somebody goes "Letting people show up to work as who they are." It's really easy to just be like "Hey, you have a cat, I have a cat, too. Do you have human babies, or fur babies?" And then when you're in a meeting and you kind of cosign... Someone's like "I have to go for an appointment" or "I have to pick up the kids", and then you're like "Me too", when you're new on a team, that makes you feel really included, and safe in that space.

**Justin Garrison:** And I think that one of the biggest downsides of remote work is everything becomes transactional, because you have to get work done in a certain amount of time... Because you have that flexibility, so you're trying to either cram more in less time...

**Autumn Nash:** I think it depends on your personality, because I can talk to anyone anywhere, and be besties.

**Justin Garrison:** But you don't necessarily have the opportunity, right? So many places I worked at it was just like every time I was on a video call with someone, we were talking about work. And it was not like a "Hey, let's come hang out." And some of that came down to timezone differences...

**Autumn Nash:** I think you have to be intentional, too.

**Justin Garrison:** There were definitely times it was like "Hey, this is a social hour. Come hang out."

**Autumn Nash:** Yeah. We have lunch and learns... We had apprentices, like, lunches, and all kinds of stuff.

**Justin Garrison:** But those are still inclusive of the timezone. Because I work now with people around the world.

**Autumn Nash:** Well, no, not necessarily... Because SAs are global. SAs are typically remote just by function. They have always been remote, way before COVID. And I felt probably the closest to some of my essay coworkers, and they weren't global all over the world... But it was just, I think also like being a solutions architect requires a lot of people skills, and tech skills...

**Justin Garrison:** Sure. But in that case, like "Hey, let's do a lunch and learn", you have a global team - someone's giving up a dinner time, not a lunch time. Someone's giving up a bedtime...

**Autumn Nash:** Or a morning time.

**Justin Garrison:** ...or a morning time to meet the lunch.

**Autumn Nash:** Yeah, I was like really early in the morning. Yeah.

**Justin Garrison:** And that's one of those things, that there's trade-offs with this remote culture, and remote -- everyone works, anywhere around the world; it's great for flexibility and it allows you to do that stuff, but you have to be cognizant of "Oh, this isn't your lunch." Like "Hey, look, we're gonna have a happy hour after work today", and it's just like "Oh, it's 9 AM for me. I'm not gonna show up with a --"

**Autumn Nash:** \[14:18\] We always did coffee and code, and some people would have happy hour, and some people would have coffees, and it was really fun.

**Justin Garrison:** Yeah. So those are just things to consider... And it's interesting --

**Autumn Nash:** Also, it helps if you have a Slack, the Slack plugin thing that tells you where your coworkers are, so you can set a reminder to send something in their appropriate timezone. That is such an underrated skill of productivity.

**Justin Garrison:** Yeah. Setting your timezone up in your chat system, and then having a way to only notify me out in these hours is --

**Autumn Nash:** Yeah. Well, you can also say at like 10 o'clock at night you think of something, you can set it to send it to somebody at 9 AM in the morning for that person.

**Justin Garrison:** I go back and forth on that one, because it is a great feature, but then it makes me check my messages at like 6am, or 7am, if they get back to me.

**Autumn Nash:** Oh, no, no, no. It sets it at nine for them.

**Justin Garrison:** No, no. Their 9 AM, if they're on the East Coast, is 6 AM for me.

**Autumn Nash:** Oh, I get what you're saying. And then it comes back. Okay, okay.

**Justin Garrison:** So at some point I just want it to be asynchronous and say "Hey, I'm not gonna set the expectation that I'm going to respond right away."

**Autumn Nash:** That's actually my favorite emails... For a long time, people were starting to put "I sent this when it was convenient for me, and you send it back when it's convenient for you", and I'm like "Yes!"

**Justin Garrison:** That medium matters, because one is designed to be asynchronous, one's a little more synchronous. Or at least might be assumed to be. And so yeah, I always go back for it on like "Should I schedule this for their time, and that I'm going to be --" I don't know. It's hard. It's very difficult. But I think it's great that it's been more talked about, and as a lot of companies are either bringing people back into offices, or more people are looking for new work that is more remote and flexible... I have co-workers around the world, and I really enjoy learning about -- I learned last week that Orthodox Easter has a different date than Western Easter. And that was really fascinating. I did not know that.

**Autumn Nash:** All the cool Spain -- holidays in Spain that were going on, I think last week, but I only learned that from having global co-workers.

**Justin Garrison:** I have a co-worker in Spain, and yeah, people were just out of the office for a lot of the week. I'm like "Why?" I'm like "Oh, cool. Your culture has different things that you celebrate." And that's awesome. And I get to learn about some of that stuff just by being exposed to it a little bit.

**Autumn Nash:** It's so cool.

**Justin Garrison:** My link of the week is very different. \[laughter\] I stumbled upon this website last week as I was looking up kernel parameters to provide in Linux... And they're called sys control values that you have to set in kernel parameters... And this is called sysctl-explorer.net. And it allows you to figure out what these settings mean, because they're all kind of obscure, they have short names for various things, and you may not know what they're for, and what they do. And it doesn't go into a lot of detail, but it's starting... And I've found this website, and I've found it useful already, because I looked up a couple things that were part of these parameters I wanted to set. I was looking for a specific one. And they have plans to maybe expand this to things like Sysfs, the virtual filesystem for Linux parameters, and things like proc, that are also useful.

So sysctl-explorer was just a very practical thing that I've found, that I was like "Hey, I'm gonna put that in the show notes", because I already used it twice, and I think other people might find it useful as well.

**Autumn Nash:** I love that, when you find, or just anyone finds something cool, and then you post it, or talk about it... It's just a great way of finding new productivity hacks and cool tools that you've never used.

**Justin Garrison:** Right. I mean, I've spent so much time in man pages, and I'm like "Oh, this is just a different web interface for it", and that is also useful.

**Autumn Nash:** It's also really interesting how so many engineers or system devs or just people have different processes... Emacs users love them some Emacs. People will get into whole fights about languages, or like Vim versus like Neovim... It's just so funny.

**Justin Garrison:** Tabs and spaces...

**Autumn Nash:** Yes...! I love the passion. Also, we're ridiculous. But I love it.

**Justin Garrison:** Alright, so let's jump into our interview with Andrew, and talk all about Postgres.

**Break**: \[18:11\]

**Justin Garrison:** Alright, thank you so much, Andrew Atkinson, for coming on the show today. Andrew, let's talk about some databases and Ruby. What do you say?

**Andrew Atkinson:** Yeah, thanks for having me. Excited to be here. Let's do it.

**Justin Garrison:** Yeah. Tell us a little about yourself.

**Andrew Atkinson:** Yeah. My name is Andrew Atkinson. I've been a software engineer for about 15 years at mostly startups, midsized companies, but I've also worked for some bigger companies - Microsoft and Groupon. And the last few years I've been going more into a specialty area, which is database performance, and kind of actually all things Postgres-related specifically, having used it at a bunch of companies, and then moving into this, like, a bit of education and advocacy as well for that tech stack.

But yeah, day to day I'm working as a developer, and outside of work, I'm a dad, and I have a couple young kids, and --

**Autumn Nash:** How many kids do you have?

**Andrew Atkinson:** I've got two girls. Two younger girls.

**Autumn Nash:** That's awesome. Your house must be so like cute and peaceful...

**Andrew Atkinson:** Yeah, a lot of cute stuff, dresses and dolls...

**Autumn Nash:** I'm so jelly...

**Justin Garrison:** Both of us have all boys, and it's just a mess --

**Autumn Nash:** I have three boys, and it is just chaos, and they're so stinky... They used to be really cute, and now they're cute, but like kind of smelly... And there's Minecraft stuff everywhere... And I'm so jelly. You must get to buy cute clothes. You know what boy clothes are? Shorts, and shirts, over and over again.

**Andrew Atkinson:** Yeah, I can see that. Yeah, my wife's like the lead clothing purchaser, and I just, I'm kind of along for the ride... But

I do like the --

**Autumn Nash:** You're like "I just work here."

**Justin Garrison:** I like these titles we have here. This is like "Hey, I product-manage some clothes here and see how this is gonna go..." \[laughter\]

**Andrew Atkinson:** It's definitely about -- yeah, I'm sure you all can relate, but I think we've been more successful as parents by like dividing certain responsibilities...

**Autumn Nash:** You've gotta divide and conquer. See, you guys were smart, and you had as many kids as like parents... And I messed up.

**Justin Garrison:** Do not get outnumbered.

**Autumn Nash:** I outnumbered y'all. I'm like, "Everyone, don't die."

**Justin Garrison:** I mean, divide and conquer with the kids responsibilities, but also with your backlogs, right? And when you're choosing, like "Hey, we have a big backlog of things to do", why in 2024 would someone pick Postgres as a database?

**Andrew Atkinson:** Ah, yes. Nice segue.

**Justin Garrison:** I try. "Bring it back..."

**Andrew Atkinson:** Yes.

**Autumn Nash:** I love when Justin does dad jokes, but includes tech... It's great. I love it.

**Andrew Atkinson:** I think being a Postgres specialist, I've noticed people want me to like answer questions like this... And it's not really -- it's a little tricky, because I've just mostly been a user for a bit... So just to be fully transparent, I feel like I've sort of backfilled some reasons. I do have an answer for your question, but... One of the biggest things I tend to think about, that a lot of folks mention, is what's cool about Postgres is there are a lot of open source pieces of software; open source - we could get into the benefits of that, of course. But what's interesting about Postgres is there isn't really just one specific company that drives the innovation of it, and the maintenance of it. So it's really a collection of -- like, loads of different companies are represented in who's actually a contributor and a committer to it, and then also the broader ecosystem, which includes people like me speaking at conferences about it as kind of the user side of it, and that sort of thing... But what I like is, in terms of that, like not single company, it makes me feel good that it's going to be around; it's been around for decades, it's going to be around for decades more... And building a career around it I think is a safer bet than technologies where they might be tied to one company's kind of quarter-by-quarter growth cycles. For some people that's appealing...

**Justin Garrison:** Just to play devil's -- like, if I sed-replaced everything you just said about Postgres and put it in Redis, all of those statements would be true, except for there was just a license change on Redis. Right?

**Andrew Atkinson:** Yeah, it's true.

**Justin Garrison:** This is a big concern in open source anything right now... Not to derail the conversation, but I think that's an interesting point... Absolutely everything you said is something I would have been saying about a lot of things three, four, five years ago. And now the industry has changed in various ways that community-backed open sources is a little harder to find... And maybe it's a foundation that has to run these things, or be in charge of them, but... That's a really interesting perspective, of just like "Hey, with a lot of contributors, and a lot of innovation, and people dedicated to this thing, it can become a standard" like Redis kind of did. The Redis API is the standard that we can reimplement in many other ways. But the project itself, what it has become, is like "Well, am I allowed to use that thing anymore?" There's a lot of other legal questions around this stuff.

**Andrew Atkinson:** \[24:07\] For sure, yeah. And I've heard people use the term "rug pull", kind of the license change... And for anyone that's interested about this with Postgres, I personally haven't gone into a lot of deep thinking about it, but there are people to have been writing about "Will Postgres ever pull a rug pull?" sort of thing.

And I guess a couple more things that come to mind along those lines to me is another big reason to choose Postgres is its extensibility. And if you look into the ecosystem, a lot of folks don't know even that there is an extensions mechanism, and that there's a lot of commercial companies that are building commercial extensions and hosting platforms with Postgres as its core. And I think that also kind of -- like, I guess to maybe contradict a bit of "There isn't a single company", I guess... Well, maybe it doesn't contradict. There's dozens of companies that are building on Postgres, and I don't know if I know how that's going to shake out, but to me it sort of broadens the user base and the financial backing and the financial interests, and that sort of thing.

Here's the weird thing though for me. There's all the commercial side of software, and stuff like this... But I'm also involved a bit, mostly just as a reader, but within the email-based Postgres - they call it the hackers list, but with the actual kind of trunk or main in development that's going on, I'll tend to follow the list a bit... There's this kind of two worlds, I think, of commercial software, and all of that, and making money off open source software is not trivial, and I'm not an expert on that at all... But then there's kind of like this real tangible connection with the actual development of it, that's very much like standards-oriented; we're going to implement a feature that has standards that it's associated with, we're going to implement high-leverage features, we're going to maintain backwards compatibility...

I'm rambling a bit, but just to wrap it up here - there's the actual people doing the development, and I wanted to mention this too, that I've had the privilege now of attending a few Postgres conferences, and you can just meet these people. They're there, and you can interact with them on the list... And these are some really prolific, super-knowledgeable programmers, that some of them work for these big companies, but some of them are, I don't know, kind of volunteers, I guess... That sort of makes me feel like -- it gives me some confidence in the project's longevity, too... You know what I mean? ...regarding the license change, and all that. There's just a lot of people involved. I mean, I think if you look at the last release of Postgres, it was something like 300 named people in the either contributors or committers list.

**Autumn Nash:** We're already at the point where we are trying so hard to get people to contribute to open source, and looking at how we can get more people to contribute... And now how do we stop people from having the fear that you're going to contribute to this new thing, and then the rug is gonna get pulled? So I do think that's like a really interesting conversation. Did you go to Postgres Chicago Day?

**Andrew Atkinson:** I did, yeah. I was able to present there too, which was just last Friday from when we're recording this.

**Autumn Nash:** Oh, that's cool.

**Andrew Atkinson:** Yeah. For example, there's also this Postgres ecosystem I wanted to just quickly shout-out - Pganalyze, which is a commercial Postgres observability tool. I've been using it with a couple clients I've been consulting with. I'm a big fan of it. But Lucas, who's the founder, was there at the conference, and it was nice to engage... But also at the conference were sponsors; big companies like Microsoft was there. They have a number of employees that work full-time on Postgres as contributors or committers...

So yeah, I know we're kind of like at the industry level maybe here. I could also zoom way into the individual developer level for the "Why Postgres." Does that work? Should we do that?

**Autumn Nash:** Let's do why, and maybe why not. Oh, there's another lady named Henrietta that I've met. She came to MySQL talk, and she invited me to Postgres Chicago, but I couldn't go, because it's between Scale and possibly Grace Hopper... But I think it's cool that there's a lot of push to get women into the Postgres community, which I think is -- it just seems very welcoming to me. I think that's really rad. And she gave me some tickets that we got to donate to Milspouse Coders, so I definitely appreciate the Postgres community, and how they're really trying to get more people into the community, and give people options. I thought that was really cool. They gave us tickets to give away, so I thought that was really nice of her. She was really cool.

**Andrew Atkinson:** \[28:21\] Yeah, Henrietta is someone who I call a friend now. We've been able to meet a couple of times, and...

**Autumn Nash:** She's amazing. She's very knowledgeable, and she's super-kind.

**Andrew Atkinson:** Yeah. She's also an author of her book - I was just making sure I had the title right. It's called "Postgres Query Optimization." It's a book that I read as part of what led me into wanting to write a book... I've also been able to connect with Henrietta about the author experience and stuff, and writing about Postgres... But yeah, I really like -- she runs the Postgres Chicago meetup as well, besides the conference. She's the leader of the PG Day, which was in its second year this year... And it's something they're gonna keep doing. So it'll be available next year, 2025.

And yeah, I agree, there's definitely an explicit emphasis on diversity of all types for attendees, but a focus on women, non binary, not men... Because unfortunately, with our industry in general, with the disparities that are in place within databases, I think it's some of the same problems that are even worse... You know, like imbalances.

**Autumn Nash:** Yeah. Because database is a very - not niche, but like a unique niche. People were usually like DBAs, or kind of fell into it some way... So it's not like a lot of traditional like "Hey, you just go to college and you're gonna work in databases." So I thought it was cool that she not only is like -- to see a woman in databases in like more of a leadership role... And she's extremely welcoming and very -- she's doing a lot of things. I thought that was cool. Because representation really matters. And you can say that you want diversity, but the Postgres community I feel like does a lot of actually like walking the walk, and actually doing it... So I thought that was really cool. It's a very cool, welcoming open source community.

**Andrew Atkinson:** Yeah, that's great to hear. Melanie Plageman, she just recently was honored as a -- she's been a longtime contributor to Postgres. She works at Microsoft, and became recently a committer, which is a noteworthy achievement, because you have to be a contributor for years, and kind of earn the ability to commit.

**Autumn Nash:** Wow. That's a big deal.

**Andrew Atkinson:** Yeah, so that's really cool. I've also met \[unintelligible 00:30:28.24\] who's based in France. She's a frequent conference presenter, a working DBA, and works with EDB, and is big on bringing more women into the community... Also a super-intelligent, kind person that I've been able to meet through the events...

So yeah, I mean, for anyone listening to this that's curious, if you are a little bit interested in Postgres events or databases, and even if you're a developer that's not working as a DBA, I've found them to be really nice community events. They have single-day and multi day-events... So yeah, check those out.

**Autumn Nash:** Also, another funny thing is I feel like a lot of people don't realize - there's a ton of vendor databases that are built on Postgres. So people will be like "Well, why use Postgres?" You're kind of using Postgres in a lot of areas. And that's just the ones that people tell people about. There's probably a ton of other databases that are like low-key Postgres underneath the hood. So I think Postgres is much more powerful of a skill... Because a lot of people don't get into databases and learn data modeling, or learn really in-depth in databases, and they think it's just like -- but everything uses data. So everything is going to store data, use it, pull from it, or whatever. So I think it's a worthy skill. Also, you guys donated a ticket, and we got to give that ticket from Milspouse Coders to like somebody who was laid off, so they could go and talk to people and get jobs... So I really appreciate that.

**Andrew Atkinson:** Nice. That's really good to hear.

**Justin Garrison:** \[31:58\] So a lot of this is why Postgres has been around a while, why the community is growing and is great, and why we want to use it... Why would someone not want to use Postgres? That's the other end of it. Because that's where I usually kind of pull out the "Oh, no, I've seen the bad things", or having a little more exposure into other databases... I mean \[unintelligible 00:32:15.05\] is kind of a straightforward maybe comparison... But even something else that's like a no SQL database - why would someone not choose Postgres?

**Andrew Atkinson:** I've got a couple of ideas to answer this question, but I'll just also say it's not really where I'm spending a lot of my energy on. I'm more working on Postgres specifically, so I tend to have a very echo chamber/social media situation, and people I talk with about that... But at a past company I was at, for example, they were looking into using Pinecone as a place to store vector embeddings information, and we were trying to add AI features to the application... And there's a lot of energy in the industry now around different vector storage options. So maybe someone might want to say "Well, maybe we want a dedicated vector storage database for its performance benefits, its index types", that sort of thing. With that being said, again, the extensibility of Postgres - Pgvector has become very popular as a Postgres extension to store vector embeddings, and there's a lot of folks writing about why you might want to stick with Postgres... You know, if you're using it for like your application database, or maybe you're running a second instance that's more focused on your AI use cases, your vector storage...

**Autumn Nash:** I think that when you're choosing between Postgres and NoSQL though, it's kind of bigger of like just what NoSQL versus a relational database does, right? So relational databases are great for when you know what your access pattern's going to be, and when you know what your database structure is going to be, and it's going to stay that way continuously. And you're going to pull the same type of like structure over and over again. When you need a more unstructured database, or flexible, you're going to want NoSQL. So I think that they're different data models. Because even the databases that are typically built on Postgres are relational databases. So it's more like relational versus non-relational.

**Justin Garrison:** But even as Andrew was just saying, having a vector plugin like Pgvector - it allows you to store vectors... Which - I think there's also like a graph database which... I mean vector is very related to that. I still don't understand the difference between a graph database and a vector database. And I've tried to ask this multiple times, and everyone's just like "Well, one has direction." I'm like "Well, yeah, but node edges can have directions, too." I don't understand. If someone knows, please reach out to me. I've asked this multiple times at conferences, and I cannot get a good explanation that I understand... And that's probably the low bar of trying to hammer it home for me. But Postgres is so flexible in that you can have raw JSON documents in a NoSQL-style, lik "just store these bits."

**Andrew Atkinson:** Yeah. I've heard that, and I think that's what a lot of folks say, that if you don't really know... And actually, I tried to directly address that in writing about the JSON storage options in Postgres when I was writing about that too, where it's like - well, imagine there's an example app for the book... And I was like, imagine you wanted to store a bunch of metrics about a new feature area, and you didn't really know which metrics you would have, what their data types would be, what you might store as a value for those metrics... It's kind of a mini-example, but it sets up -- it's using the JSONB column as a column, the data type within Postgres, which you can index, and you can get good performance off of for querying.

But you can also do things like - there's an open source tool called JSON Schema Validation, or something... Now I'm kind of forgetting the name. But what you can do is, you can kind of do no schema, or NoSQL at the outset. You can just slam a blob of - as long as it's JSON-compatible text, into a column. And then you can actually come back later and add type information and even check it automatically with a constraint. So you can say "Well, we actually have these few keys within here. They should have these data types. For any new inserts or updates or deletes, we'll check them against this schema." It's sort of like a ninja move maybe, but it's like "Oh, you want no schema? We can do that. And then we can add a schema later."

**Autumn Nash:** \[36:15\] Well, which is interesting, because you do -- I think that when we say that, it's like, you have to know your access patterns for NoSQL. If you want it to be efficient, you'd need to be able to plan out your access patterns, and I think people hear like "unstructured data", and they think you can just put whatever you want in there, in any pattern. And that's not true, if you want to be able to pull it out in like a proper way.

So I do think that Postgres is probably the most flexible version -- well, maybe the most flexible version of relational database that is kind of comparable to like a MongoDB, or a DocumentDB, but still, I guess, relational... So I do think that that's what makes it a really interesting SQL database.

**Andrew Atkinson:** Yeah, there's certainly those options there. I personally haven't worked on like a really big scale, Mongo or kinda like a NoSQL-based primary persistence layer application. I imagine it might -- there are definitely a lot of examples of folks migrating to Postgres, migrating the data... I have done a bit of migration from Elasticsearch, which is a text search-oriented sort of database optimized for full-text search... And then sort of like wedging that data back from kind of a flat or JSON structured data into kind of like a normalized, relational data model data. It's not super-trivial, but from an infrastructure or from a query pattern's perspective, like you were mentioning, I think a lot about the read and write query patterns for the application, and it's always kind of a trade-off between those two things, where you might have really high ingestion rate data, where maybe less schema structure is going to be beneficial to receiving lots of data; that could be events, or sensors, or things like that. But then how are you querying that data? Do you need to then build like a secondary storage mechanism to query it efficiently? Are you willing to trade off some write time latency to have better read latency?

If you dig in a bit to Postgres, there's a lot of different features that you can leverage to basically get more comparable performance, whether you're optimizing your writes, or whether you want to take unstructured data and make it more efficient to read, and that kind of thing... But with that all said, I think if you do have a good idea -- if you are in a position to choose Postgres or something else, and you have a really strong idea of your data ingestion, and your query patterns, probably what any good engineer would do - you might want to try a couple alternatives, and do some benchmarks, simulate loading a million rows, querying thousands of records in some sort of level of concurrency, that sort of thing...

**Justin Garrison:** Is the current state of the art for scaling something like Postgres? The last time I ran a database in any sort of like -- it needed to be reliable. And I didn't want to lose the data situation where it was just like "Oh, I just scaled it up. We just vertically scaled the machine. One machine was good enough for our needs at the time", and then you could do things like "Oh, we have read replicas, and we just send the reads over there, we send the writes over here, and then we load-balance in front of that." Is that still state of the art for how you're going to scale a Postgres database in 2024?

**Andrew Atkinson:** Yeah, I mean, more or less. I mean, Postgres architecturally is still a single instance database. So there's not a concept of nodes, or different instances in the core community Postgres distribution. But like Autumn was saying, there's lots of companies building on Postgres. So for example, Microsoft supports Citus, which is a multi-node Postgres distribution, so you can add more nodes if you want, and you can distribute your writes and your reads to different nodes... So that is one way to scale up. That would be an alternative to just vertically scaling up a single instance. You would scale out more by adding more nodes.

\[40:06\] Typically though, the web applications I work on -- and with modern cloud providers you can get so much hardware, so many resources on a single instance, that I actually tend to encourage people... Like, it's fine; single-instance scalability is fine. I mean, unless you're Google, maybe... But you can get servers with -- I saw at one point Amazon was gonna launch... And I'm sure Google Cloud Platform, Microsoft, these other big cloud providers have similar things... Servers with 24 terabytes of RAM. So if you can get more RAM than the size of your database, all of your queries are going to fit into the memory of your instance, and you're going to have super-high performance queries, even with relatively minimal effort on indexing, and things like that.

**Autumn Nash:** So if it's staying in one instance, how do you kind of make sure you're getting it highly available everywhere? Because it's only on one instance.

**Andrew Atkinson:** Yeah, you would definitely set up replication. And so Postgres has a couple of replication types. You can do physical, and then you can do logical, which is really cool. Logical gives you a lot of options to slice and dice your portions of your database that you want to replicate and whatnot. But yeah, like Justin was saying, most of the times that I've worked on Postgres at bigger scale, it's with web applications where there are loads more reads than writes. So it could be one or more read replicas.

**Autumn Nash:** Yeah.

**Andrew Atkinson:** And of course, as you all may know, a lot of the more modern Postgres hosting options, they do kind of a Compute and Storage separation. So essentially, with more of a shared storage model across nodes, you can kind of take away the problem of replica latency, that might affect your ability to query data on a replica.

**Autumn Nash:** Which you need too, because I mean you need it just for backups... Because if not, you take out your database and you've lost all your data. So...

**Andrew Atkinson:** Right.

**Autumn Nash:** I mean, that makes sense.

**Andrew Atkinson:** Some folks might run a replica even if they don't actively use it by the application just as a failover mechanism... So you can -- and Postgres supports this natively; you can do a promotion of a standby server running in a read-only mode become the new writable primary node.

**Autumn Nash:** It's amazing; Hadoop is built on it, Red Hat's database is built on it... I think Redshift may have it somewhere in there... So it's crazy.

**Andrew Atkinson:** Redshift, yeah, is on an old version of Postgres, per my last understanding. Like 9 dot something.

**Autumn Nash:** So it's amazing. People will turn their nose up at Postgres, and I'm like "That's because you don't know what's built on Postgres."

**Andrew Atkinson:** Yeah, I mean, Yugabyte is another multi-node Postgres option, that is both open source, and they have a commercial hosting option... Timescale... I could rattle off five or six more companies. But yeah, for sure.

**Autumn Nash:** I remember reading \[unintelligible 00:42:46.20\] I think they have a paper on Hadoop. And it's amazing the way that they built it. It's crazy. For one, Postgres and SQL are easy -- not easy, but like, SQL is taught in all college courses, for databases. So you know that you will be able to get people to work on that database, so you can find people with those skills... So if you can make Postgres highly available, and you can do that, the things that we could do with JSON here, it is easier to get more people to work on a Postgres database than to get people to work on a NoSQL database. So a lot of things you can do what you need to do to make something work for you if you have the right skill... Because every database has caveats, but I think Postgres is always going to have the fact that it's easy to find people to work with it. And then you have to get people that are good at performance, obviously. That's not as easy to find. But as far as queering it, it is easy to find examples.

**Andrew Atkinson:** I'm available for consulting. But yes, yes, I agree. \[laughs\]

**Justin Garrison:** And that's a huge piece...

**Andrew Atkinson:** It is, yeah.

**Justin Garrison:** \[43:53\] Because the lower in the stack you get, or the closer you get to the bits that you store, the more paranoid you have to get with how it's used, and where it's available, and how it's accessed. All this stuff becomes more critical. If you have physical hard drives in a data center, you have to back them up. That is on me to do it. If I'm throwing something on S3, I don't care. The 18 nines that Amazon gives me for that data - I'm fine with that, as long as my access patterns match. But the closer you get to that data that you're responsible for, the more important it is to have someone that knows what they're doing.

**Autumn Nash:** It's so interesting... I think that's what the thing is -- cloud was so famous, and now we're going back to on-prem. All these NoSQL databases were so famous, and now people are migrating from NoSQL back to like Postgres. It really shows you - people went for what was really popular, and now we're going back to almost the basics; maybe not the basics...

**Justin Garrison:** The fundamentals.

**Autumn Nash:** Yes. You know what I mean?

**Justin Garrison:** Like, you know what - this has been working for a while for a lot of people, and this makes sense, if we have the skill set.

**Autumn Nash:** It's really interesting to see how things are shifting.

**Justin Garrison:** I'm curious, as that pendulum swings back, what are the skill sets that are hard to get now? You mentioned if people are moving back on prem -- most of the developers that I've talked to and worked with it, they've never run a data center. They haven't been inside the cold aisle, or the hot aisle, and --

**Autumn Nash:** But it was funny, because five years ago, when I started in tech, there were a bunch of DBAs trying to learn how to do managed databases. Because that was where the jobs were swinging. And now I know people who are some of the best database people, and they had a hard time getting jobs because of ageism. And I'm like "You better be nice to those people. They know how to run a database on-prem. Be nice to them." But it's interesting... And it's such an interesting -- certain things you'll only learn from going back and forth to those two... And the ability to give the advice of like "Managed database versus on prem", or to be able to say "Hey, relational versus Postgres..." That was one of the most important things I learned, being able to really compare relational and NoSQL databases.

**Justin Garrison:** And I think that goes right back to the skill sets... Because a lot of people went to managed databases, because they didn't have the skill sets in-house to manage something critical.

**Autumn Nash:** Well, not just that, but they want it to start a smaller team. And a lot of what cloud did was say "Hey, you don't need a DBA. You don't need an administrator. We're going to take all that for you."

**Justin Garrison:** You outsource your ops.

**Autumn Nash:** Yeah. "You just need to get so many devs, and we'll handle all the other stuff for you." And now people are like "We want to make it cheaper." And I'm like "Well, you've gotta pay people. Is it cheap?" It's all trade-offs.

**Andrew Atkinson:** It is. Yeah.

**Justin Garrison:** I mean, the thing that most people don't think about is like Amazon runs on-prem. AWS - it runs on-prem, and they have people that do the things on-prem.

**Autumn Nash:** That's what I'm saying. I don't think that either is like -- I don't think NoSQL versus relational databases are a "For sure" answer. And I don't think on-prem versus cloud is a "For sure" answer. But they're all trade-offs. And I think people are like -- I think it's hilarious when they're like "Cloud is expensive, and I'm gonna go on-prem." I'm like "You need to hire a very smart DBA."

**Andrew Atkinson:** Expensive engineers.

**Autumn Nash:** Yes. But also, sometimes on-prem can be better. But nobody wants to be flexible about learning those trade-offs to really do their due diligence. They just want to hype up a train that somebody put on Twitter. And I'm like "No. You can't spend millions of dollars because some dude said something on Twitter."

**Andrew Atkinson:** Yeah, I feel like as I've worked at different companies, and have been more as an application developer, and then more on infrastructure teams too, I've kind of come back to some fundamentals. SQL - it's beneficial, whether you're doing OLTP application work, or analytical-style OLAP type of work for application developers... Whether it's on-prem or hosted, I think the best return on investment is learning query planning, learning index design, and being able to --

**Autumn Nash:** Learning how to put in -- yes, like your data modeling, and how you're putting in the data and out... Because that will save you so much money.

**Andrew Atkinson:** \[47:56\] Yeah.

**Justin Garrison:** That's a big point when I was asking about scalability... Because I'm talking about like the systems. How do we scale these out? How do we scale them up? And actually, you could just structure your data better, and optimize your queries.

**Autumn Nash:** If there's anything I want to learn from all the people that are like OGs in databases is learning to be really good at data modeling... Because you can save people millions of dollars. People are all about like "We need bigger instances, and we need to scale." No. Be efficient with your resources. It's amazing.

I just remember being in rooms, and I would just listen to them talk, and I'm like "You guys are amazing", what they can do. It's not so much what -- like, you can do a lot of whatever you're working with if you're doing it efficiently, and you know what you're doing. Having that knowledge is amazing.

**Andrew Atkinson:** Yeah. So that was part of what fired me up about the book concept too, is I think that there's a lot of developers focused on kind of like programming language, or application framework level optimizations... Which are good, too. But a lot of times, they might miss that a big portion of performance has to do with what data we're accessing.

**Autumn Nash:** Nobody teaches that in school.

**Andrew Atkinson:** Right. Yeah. Whether it's writing or reading data. But usually reading data. Like, how do we access the smallest bit of data, and how that actually shakes out to latency, with basically file system access on a database server, and doing that efficiently, with minimal latency, and being able to really introspect and use the observability tooling that's built in, for example for Postgres...

And by the way, actually, I'll answer your original question one more time - the query planner information, with every release of Postgres, they keep adding more and more query planner optimizations. So they look at different types of query patterns, and they're like "How can we solve this at the planner level?", which is super-cool, I think. But also, as a developer, learning to use that information... I do think Postgres - I've heard from others - has the most information available, and possibly one of the better query planners. Again, it's open source versus like a commercial relational database, which is going to be able to pour lots of resources into that, too. But as an open source database, the level of information - it's not super-easy, but it's straightforward to learn bit by bit what all the parts mean. And as a user of the database, you can get a lot of deep knowledge about what's actually happening with your query workload. And if you can then apply that to design more efficient schemas, better supportive indexes, and that sort of thing, like Autumn was saying, you can -- you can save a lot of money just by doing less work with your...

**Justin Garrison:** Is there like a -- like, I think of distributed tracing for applications, like span trees, and like the waterfalls... Does a query planner have that amount of detail? Like flame graphs that you get for an application. My binary - where's it spending all its time? I'm assuming that exists for something like Postgres.

**Andrew Atkinson:** Yeah, that is really what I'm talking about.

**Justin Garrison:** Yeah. That's cool.

**Andrew Atkinson:** So in other relational databases they support the 'explain' keyword,a nd then there's different levels of additional parameters you can add, like analyze buffers, verbose etc. that give you more and more information. But you can get very granular on - for each table that's accessed, how specifically is it accessed; you can look at which pages are accessed behind the scenes. You can look at any CPU operations, like filtering, sorting etc. and you can see the costs of each of those pieces, so then you can zero in on the most costly pieces and address those, and improve your overall performance. That's the topic I'm most passionate about lately. It's what I spoke at a PG Day Chicago, and I have a couple of presentations coming up on this topic as well.

**Autumn Nash:** If people had more knowledge, and when you start building your great idea, your teams like "Docker" - you know, when you're building that service, if you put more thought into how you're going to put this data in and access it, it will not only save you a ton of money, but it saves you... Like, so many people have to go through painful rewrites, or you're doing things that are just so much more work because you didn't think of that upfront.

So having the knowledge out there to be able to give developers that information to make good decisions is so underrated, which makes Postgres so underrated, because I feel like, for one, it's a ton of examples out there, a ton more knowledge in books, and the fact that you have these tools, and that you can do a little bit of what non-relational databases give you - well, it's still relational, but that NoSQL gives you - but also have all that knowledge and information out there is really important.

**Andrew Atkinson:** \[52:25\] Yeah. And you can run Postgres locally, you can run it in a VM or a container... So it's easy to just play around with on your local laptop. You can load in millions of records, and you can play around and get a sense for your production-like environment, and really build the skills hands-on yourself, which is a big part of what I like, and isn't always the case for some offerings. It's hard to like -- can you really get a copy of this particular database engine locally, and "Can I really easily set up a lab (so to speak) to test it out?" And you can do that with Postgres, which is fun. So it's a great way to really build -- and as a developer myself, I've always learned the most by hands-on work, and building little things.

**Autumn Nash:** It's so important. And also, when you're stuck and something breaks, there's so much information out there to be like "Hey, I had this problem. Did you have this problem?" Like, who wants to get stuck somewhere and you can't fix it? That's part of our jobs.

**Andrew Atkinson:** Fixing problems. Yup, for sure.

**Autumn Nash:** Yeah. So I think Postgres is very underrated as a database.

**Justin Garrison:** Well, I think it's a good place to wrap up, because I completely agree. Like, being able to learn something on your own time, on something that you already own locally... Like, I could just run it on my laptop, my desktop, and poke at it, and send some example datasets into it, and then figure out like "Okay, how would I optimize this?" Sometimes it's too much to take in; you have to have some guides on like "Hey, I want to fit it in these areas", which I know Andrew you do a lot of with Ruby on Rails and Postgres. You can say "Hey, let's narrow down the scope of what we want to try to do, and let's just spin up an example Ruby on Rails app with a Postgres database, and then we can go from there."

**Autumn Nash:** Every time I hear Ruby, I think about the four hours I spent trying to find an end to like one of the -- I don't know what you'd call it... Like methods, or whatever. And I needed another end, and I was building an alarm...

**Andrew Atkinson:** Oh, yeah...

**Autumn Nash:** Those four hours of my life I will never get back. Why are they -- can we get better errors?

**Andrew Atkinson:** Yeah, unfortunately with a dynamic language you can get some really non-clear errors. But...

**Autumn Nash:** I was like, who uses this for infrastructure?! Don't give me that face, Justin. We know what we're both talking about, but still. Okay, for the listeners, you can't see that Justin just took like the biggest sip of tea... We're going to ignore that.

**Justin Garrison:** You think this is water... \[laughter\]

**Andrew Atkinson:** Yeah, that's true. Whether you use -- I've got connections that are in PHP Laravel world, Django Python... Java Dropwizard is a framework I used to use at a past employer... If you have the opportunity to do app development with Postgres, you can run it all locally, and you can really build a lot of those skills hands-on, which I think is really cool. And I also wanted to just quickly mention that the app I use for the book is on GitHub, it's public; anyone can look at it, you don't need to buy the book. And so if someone wants a little silly app to play with, where they can boot the schema up and play around and modify it and stuff, that's an option as well.

**Autumn Nash:** That's awesome.

**Justin Garrison:** I mean, those little silly apps go a long way...

**Autumn Nash:** They do.

**Justin Garrison:** ...to just get someone started. So Andrew, if anyone wants to reach out to you online, where would they find you?

**Andrew Atkinson:** Yeah, I blog at AndyAtkinson.com. I'm also on Twitter, @andatki. LinkedIn, Mastodon... You can find me on those places.

**Autumn Nash:** We've gotta get you on Bluesky, dude.

**Andrew Atkinson:** I'm on Bluesky. It's really sad. Bluesky is built on Postgres if you didn't know that.

**Autumn Nash:** That's awesome!

**Andrew Atkinson:** Yeah.

**Autumn Nash:** It was nice meeting you...

**Andrew Atkinson:** Likewise. Yeah, nice to meet you, Justin and Autumn... And yeah, thanks again for the opportunity to be here with you.

**Justin Garrison:** Thanks so much for coming.

**Break**: \[56:08\]

**Justin Garrison:** Thanks again, Andrew, for coming on the show and talking to us all about Postgres, and a little bit of Ruby, and how it works, how it runs, and how to upgrade all this stuff. It's great as me from -- I've always been avoiding databases pretty much my entire career...

**Autumn Nash:** Come to the dark side.

**Justin Garrison:** \[laughs\] And hearing from people that actually enjoy it, and know how it works is always refreshing that I get to learn lots of things. For today's outro we have a few open source projects that we've recently found, and that we just thought were kind of interesting... So we wanted to share them. I'm gonna go first with mine. I've got one called rhttp. And it stands for a REPL for HTTP. And so if you don't know what a REPL is, it's basically -- what's it called? Read, Evaluate, Print, Loop. That's it. Read, Evaluate, Print, Loop. I cannot remember that. So people use different tools for this... Postmate? Not Postmate.

**Autumn Nash:** Postman?

**Justin Garrison:** Postman? Yeah, Postman is like the GUI version of like "Hey, I need to send a request to a website, see what JSON I get back or what data I get back." And rhttp basically does that in a TUI, in a terminal user interface. So you don't get a GUI, but you get all the same sort of output, where you're just like "I need this URL, I'm putting in this data..." You could do it with curl, but sometimes it's hard to like curl \[unintelligible 00:57:22.09\] and all this stuff... And rhttp puts it on a nice TUI for you to interact with the website.

The next one I'll share is called Tu. It's a command line tool to convert natural language date time into UTC. And I love this...

**Autumn Nash:** Can we just talk about how little things like that can just ruin your whole day? There's little, tiny things that tell me you want to ruin an engineers day, and you make little, small changes in those things and you just throw so many things off. It's ridiculous.

**Justin Garrison:** Yeah. I mean, UTC is the one true timezone for anyone running systems, and so everything should be in UTC... But sometimes it's hard to be like "Wait, when did this happen?" If I'm writing a post mortem or something, I'm like "Okay, wait, what am I doing?" And so Tu is just a command line tool, and you say "tu tomorrow". And it'll take the now time, and it converts it directly into a UTC timestamp, that then you can go search for something.

**Autumn Nash:** Oh, I love that.

**Justin Garrison:** And it's just like "Boom!" You get the full string with everything that you normally -- because I'm always like "Wait, which form--" And you're like "I know the standard format, but I don't want to type it out. I don't want to think about it."

**Autumn Nash:** Those are the things in technology that makes it all worth it, when it's something that makes your life easier, or automates something... And it's just like, someone thought of this because it solved a problem, and then made it, and then allowed everyone to use it and make their lives better. It makes me happy.

**Justin Garrison:** Right. And when I found Tu, I was like "Oh, this is what I needed." Because I wanted like "tu last week" or yesterday at midnight. And you could just do that standard, what I would think of as what time that was, and then I automatically get the UTC timestamp from it.

And the last one I wanted to share is called Poetry Camera. And this is a project that I randomly --

**Autumn Nash:** Poetry Camera.

**Justin Garrison:** \[59:17\] Poetry Camera. So I've found it on TikTok, I believe... The lady that's building it - you can take a Raspberry Pi Zero... This is for you, Autumn. This is for your kids. It's built on a Raspberry Pi Zero. And it runs a Python script with a local large-ish language model, and it has an actual camera attached to it. So you take a picture, and it spits out -- it actually prints out text of a poem about what it sees. You don't get a printout of the picture, you get a poem representing what the camera saw.

**Autumn Nash:** My kids would make so many ridiculous poems about just ridiculous -- like Cheetos, or something.

**Justin Garrison:** Well, I mean, how many poems can you write about a butt? That's what my kids would do.

**Autumn Nash:** Dude, my kids will put the word 'fart' in anything. It's horrible. And they still think it's funny, after the millionth time. It does not lose its steam. I don't understand. I'm just like "How many times can that be funny?"

**Justin Garrison:** So yeah, so this project was cool because it runs on a Raspberry Pi Zero. If you have one sitting in a drawer somewhere... It does need some other hardware.

**Autumn Nash:** Raspberry Pi needs to like sponsor you and my children at this point. And Alan.

**Justin Garrison:** But it's cool that it's battery powered, it has a shutter button, and it takes a camera, and it has a little printer that you can get with it... And it's just neat. It's a cool little Python \[unintelligible 01:00:34.19\]

**Autumn Nash:** That's actually cool. They're actually trying to build a Raspberry Pi with a security camera. Not that they need a security camera...

**Justin Garrison:** Oh... And this one actually has a website. I don't remember what the full... I think it's probably like poetrycamera. Poetry.camera is the website. So you can see it -- it's actually a fully 3D printed case, and everything. We'll put a link in the show notes... Because she is making it, but the project is open source, and you can build one yourself if you wanted to.

**Autumn Nash:** That's really cool.

**Justin Garrison:** How about you?

**Autumn Nash:** Oh. So I've got a repo of a bunch of open source projects created by women... Which I thought was cool, because some of these I had no idea. And also the fact that there's not as many women in open source, I thought that was really cool. And some of them have really cool names, like "Ghost and exorcism." I was like "I just want to know what it is."

**Justin Garrison:** Ghosts is a blogging platform. And it's a pretty popular one. It's like blogging and newsletters. Oh, and Liz Rice is on there. Liz is great.

**Autumn Nash:** It was really cool that a lot of neat people contribute to these open source -- I meant to these repos. I love a good Git repo that tells you about bunch of different projects. They're like treasure troves... You just end up finding all these cool things that you would have never came across before.

**Justin Garrison:** I'm a maintainer for two awesome lists that --

**Autumn Nash:** And you didn't even give them to me yet? What is this friendship based on?

**Justin Garrison:** Well, I don't know if you want my awesome -- I have an awesome Tmux list. So if you use Tmux in your terminal...

**Autumn Nash:** Are these boring awesome lists, or are they cool?

**Justin Garrison:** No, they are ops-focused, really. Awesome Tmux is my repo, and... What is my other awesome? Oh, Awesome TUIs. Terminal User Interfaces. I'm just a big terminal user. The Awesome TUIs is actually how I've found the rhttp... Because that one - someone added a pull request. And it's great, because when you have a popular awesome list, people send you cool stuff. And I'm like "I never would have found this otherwise." People are like "Yeah, I just built it." And so it's been great, because I learned about a lot of Tmux tricks, and a lot of TUIs that I would not have known otherwise.

**Autumn Nash:** When people just share all the things that they're really into, and it's a subject that you're really into, and then you find all these cool ways to make your life better... It makes me happy.

**Justin Garrison:** Yeah. So we will have those links in the show notes... And thanks again, Andrew. And for everyone listening - again if you would like to hear from someone on the show, if you have a cool project, feel free to send us an email at shipit \[at\] changelog.com, and we will talk to you all next week.
