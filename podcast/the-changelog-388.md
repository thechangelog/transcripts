**Jerod Santo:** Bill, you are a senior member of the technical staff at Carnegie Mellon's SEI (Software Engineering Institute). We're here to talk about your paper, which you published in IEEE Software back in September called "The end to the myth of individual programmer productivity." A good title, it caught my eye. First of all, thanks for joining us.

**William Nichols:** You're welcome. Thanks for having me here.

**Adam Stacoviak:** Good to have you, Bill.

**Jerod Santo:** So there is lore, there is a myth - or maybe it's not a myth; you're here to end the myth... We're gonna talk about it, about the 10x-er; maybe even more than 10x. Definitely that particular term, 10x-er, has become a thing, wherein certain programmers are massively more productive than other programmers... And it's really based out of anecdotal or experiential evidence, in many cases... And I thought it was interesting that you actually went and did some research, did a study, so we thought we'd bring you on to talk about it. First of all, I'd love to hear why you conducted this study and why this is something that interests you.

**William Nichols:** Well, let's start off with I'm working on a research project ongoing called SCOPE. I won't go into the acronym, but it is looking for what are the factors that affect software development; what affects the cost, what affects the productivity, the durations, and so forth... And one of the things I wanted to look at were some of the smaller micro-factors that we could look at almost experimentally.

I have this data sitting around from the personal software process course we taught for 20 years. I had essentially 20 years' worth of data. I think in this study I used about 10 years of it... And I wanted to see if we could find evidence for the effect of the individual programmers. A lot of what turned up from that study was mostly a non-result. I couldn't find factors that affected programmer productivity.

For example, we looked at this like experience. No real effect. To the extent we saw anything, it looked like experience actually was inversely-related to productivity. I have some potential explanations for that--

**Jerod Santo:** That's weird...

**William Nichols:** \[00:03:58.10\] Well, what it probably means is that the best programmers were being promoted out of programming into management.

**Jerod Santo:** Well, that's definitely something--

**Adam Stacoviak:** We've seen that happen, yeah.

**William Nichols:** It was a very small effect, just to be clear. It was statistically significant, but very small. The other thing to keep in mind is during this entire period the number of programmers was growing very rapidly, so there might have been an effect based on training. More people were going through universities, were being better trained... There are a number of things it could have been, but it wasn't a big effect.

So I decided I wanted to look at this in more detail, because it just seemed kind of odd. So I started looking at how big is the variation in the programmers themselves. Well, let me back up and tell you a little bit about what is the dataset. When we taught the personal software process, we were actually trying to teach them how to estimate work and how to improve their quality; how to reduce the number of defects they put into test, how to find defects before they got there, and so forth.

We used programs to reinforce the learning, as practicals... And we used the same programs for a number of years. We had essentially several thousand programmers go through this course, all of whom programmed the same ten exercises from the requirements. Now, they used their own development environment, their own programming languages and so forth, but it was kind of a unique set of data. I decided to try to take advantage of having this large cohort of developers who did exactly the same program and look at how they varied.

**Jerod Santo:** What kind of exercises are these? Are they small-scope things?

**William Nichols:** They're relatively small. I would characterize them as the kind of thing that a reasonably experienced programmer should be able to complete in an afternoon.

**Jerod Santo:** Okay.

**William Nichols:** Somewhere between 2 to 6 hours would be the norm. If you have some trouble it might take a little longer. We had people who sometimes took up to 10 hours, and there were outliers... But basically, if you were thinking about -- these were not terribly challenging problems. They were non-trivial, but they weren't terribly challenging. Things like you had to program a linked list and use that in a program to read in some data and sort. So basic, introductory things like that.

Some of the later programs involved -- I think the most complicated was the next-to-last exercise, where they had to build a matrix inversion to solve a set of linear equations for a multiple regression, using a matrix inversion. But they were given the specifications.

**Jerod Santo:** I was gonna say, are these things being taught in the class? These are things that they tell you the algorithm and you go ahead and implement it, right?

**William Nichols:** Right. They were given the algorithm, they were given any special knowledge. One they had to do a Simpson's integral, which is a numeric integration... But they were given the algorithm; so they didn't have to do the hard analytic part, they just had to program it. And we've found that pretty much anyone who is able to get through a university and work as a professional programmer can do these sorts of exercises. They shouldn't be those out there type of problems where you have to be a genius to figure them out. In fact, it should be pretty much normal.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So I think the context of this course is helpful as well, because at first I was like "Why are there people --" You said there was people with an average of 3.7 years experience, but there were people with 36 years experience and I was thinking "Why would somebody with 36 years programming experience be taking a college course?" and I think the context of this personal software process...

**William Nichols:** Yeah.

**Jerod Santo:** \[00:07:54.03\] So tell us about what you were teaching. This PSP was not something I had even heard of before...

**William Nichols:** Oh, okay.

**Jerod Santo:** ...so maybe it's very common and I'm out of the loop, maybe it's old-fashioned, I don't know... But tell us about that, and the kind of people that were in the class.

**William Nichols:** Alright. Well PSP (personal software process) wasn't all that common, but it was a technique we developed at SEI. It's actually mostly the work of Watts Humphrey. A little bit of an aside - you probably have heard of the book The Mythical Man Month...

**Jerod Santo:** Yeah, by Fred Brooks.

**William Nichols:** By Fred Brooks. Okay. What not everyone knows is Fred Brooks was fired from that project, the one that blew up on him, and he wrote the book about. Watts Humphrey was the guy who took over the project and brought it in.

**Jerod Santo:** Huh. I did not know that.

**William Nichols:** It's a little bit of history. So I worked with Watts for a number of years. It's a part of what got me to go to the SEI. And I took the personal software process -- it was really part of teaching developers how to plan and manage their work, so they could work on an industrial project and know how to talk to their management, negotiate schedules, bring the projects in on time... And the two key things we taught were estimation and quality.

The main things in quality were applying design techniques, then showing them how to do disciplined reviews of designs and code, so that you'd find your defects before a test. And what we tried to do was show them "Hey, you can actually write a program and you can get this to compile the first time, without getting compile warnings." Now, in the days before IDEs, that was a big thing.

**Adam Stacoviak:** Yeah...

**William Nichols:** And we showed them that "You should be able to get in the test, and it should run the test first time. You're not gonna get into here and run the test to find out where your problems were and fix the ones that hit, you're gonna actually get it to run the first time. The thinking here is this makes the entire development process more consistent, it makes it more predictable, and it gets you a much higher quality product in the end.

So there were a handful of adopters, and the people who were in these PSP courses were from industry. There were some university classes, but 90% of the data was from industry; it was from organizations that we were working with, trying to teach them how to manage software projects. And part of the training was taking the PSP course.

So the developers on the team would all take the course, they'd learn these techniques for how to estimate it, how to improve quality... And then we'd use that to help them manage their project. And we had some very notable successes with that. I could go into a few examples, but probably the most spectacular was the rewrite of the BursaTech trading engine. You've probably never heard of it, but BursaTech is the stock trading engine they use in Mexico... And they were falling behind, and there really are only a handful of engines in the world, a handful of those big trading engines for stocks, derivatives and so forth... One of them was in Mexico.

Their choice was either rewrite it, because it couldn't keep up with modern times, or buy the one they were using in New York or London. So they decided to rewrite it. And they with a relatively small team - I think maximum was a couple dozen people - it took them a little over a year. They put together probably about 500,000 lines of code. They had to run it in shadow mode before it went operational.

In the first year of operations it had a total of downtime that was in the order of minutes. Literally, minutes of downtime. And their performance was about a factor of ten. They could handle about ten times the number of transactions of any system that existed at the time.

So that was part of the benefit of doing things right the first way, doing things in a disciplined manner. That was kind of where all of this PSP training was coming from.

**Jerod Santo:** \[00:12:07.03\] Gotcha.

**William Nichols:** But what that really led to - once I've got this large body of data from the PSP training, we could repurpose that for other things... Like knowing how well people can really estimate, what were the results at the beginning versus the end of the course. We can measure things like how many lines of code do normal programmers tend to be able to write? What's their variation?

We haven't finished the study yet, but we started looking at differences in the programming language; all these people using a variety of different languages. Some used C, C++, a few in Fortran, all sorts of boutique languages, Java, BASIC... How do these differ as far as how long it took them to produce the code, how big the programs are, how defect-prone they were...

**Jerod Santo:** Lots of different stuff.

**William Nichols:** All sorts of different things you could look at observationally, with this data.

**Jerod Santo:** I know we're here to talk about productivity, but on the estimation side what was the -- give us the summary.

**William Nichols:** Oh, okay.

**Jerod Santo:** Is estimating a reliable thing you can do?

**William Nichols:** Well, you can get reasonably good, but there are limits. We've found initially people were consistently underestimating the work involved. Act surprised.

**Jerod Santo:** Exactly.

**Adam Stacoviak:** Yeah, right. \[laughs\]

**William Nichols:** Yeah. Okay, well what we taught them was "If you can get a good estimate of the size, that'll be a really good proxy for how long it's gonna take. It's not gonna be perfect, but it's gonna be a good proxy." So we focused o how to teach them size estimate. We used a T-shirt technique... You know, do a preliminary type of design; not a real design, but just what are the pieces you need, how big are these pieces, are they bigger than a bread basket, small/medium/large? You've got an inventory of stuff you've already written. Put them into bins, sort them. What does big look like? How big is a medium?

And by just throwing these into bins and aggregating them, you can get a pretty accurate result. We've found that they could normally get to about -- they would typically start off with a variance of about 50%, and we could get it to about 30%.

**Adam Stacoviak:** Yeah.

**William Nichols:** But at the end they were centered on the average, instead of way underestimating, and you didn't get the big outliers. So it was not a spectacular result, but it was pretty consistent. We showed "Yeah, this really does kind of work." It also says that the best you're ever gonna do probably on a project of about a day is gonna be somewhere around +/- 30%. That's just life. A lot of variation in how long it's gonna take you.

**Adam Stacoviak:** And these are personal estimates, too. These are not team estimates.

**William Nichols:** Right, these are personal estimates. And that really should have been the hint of what I was gonna find when I started looking at individual productivity.

**Jerod Santo:** Why should that have been the hint?

**William Nichols:** Well, we had these high variations in their estimates... And that kind of suggests that there are other factors involved here. It's not just a matter of estimating; it really suggested without demonstrating that people would sit down to work and it was probably not going to be what they thought, or they might be running into days when they're slower, or days when they're faster... And when I started to really dig at the data, that's where it kind of got interesting.

What I did initially was I said "Okay, everyone's done the same program." What was the variation of how long it took them to get that program done? I said "I'm not gonna complicate this by looking across different languages... Let's just look at the people who used the same language." That's why I trimmed it down to about 13% of the dataset, and just looked at the C programmers. I can do this with C++ and Java, with slightly smaller datasets. Beyond that it gets into really small data... But let's use the same program.

\[00:15:56.19\] Okay... Now I it turned out there were 494 of these developers. I ranked them 1 through 494. I used 500 because it's close and it's a round number. There were essentially 500. Okay... And I could actually, rather than looking at the size of the program and lines of code or anything, I just said "How long did it take them to finish?" Okay. Then I did the same thing with the second program and the third. And one of the things that really struck me was that the distribution of the times was just remarkably consistent.

The ratio of the fastest programmer to the 25th percentile, the median, the 75th - they looked like almost straight lines if you plot these across the ten programs. There was a lot of jitter when you looked at the outliers, the ones in the slowest 25%. A lot of variation there.

**Adam Stacoviak:** On the edges.

**William Nichols:** Yeah, on the edges. But everything else looked pretty consistent.

**Adam Stacoviak:** It's funny how that is on any plot, really, where you've got the extremes. You've got the far right, the far left and the middle, and you tend to have a lot of jitter on the fringes.

**William Nichols:** Yeah. But the thing is, on the fast side, you can only go so fast. So that was kind of constrained. You're not constrained on the slow side.

**Jerod Santo:** Yeah.

**William Nichols:** So that's where you saw most of the real variation.

**Jerod Santo:** But there was no control for quality in there? Because I always think of the three little pigs and the big bad wolf - that pig who built their house out of straw was done first... So you can schlock together a solution that's not quality, and that doesn't really mean you're being productive; it just looks productive.

**William Nichols:** That is true. To the extent that we had the controls on quality, we were measuring the number of defects that turned up when they ran tests. So I can look at those independently, and we were kind of guiding them along the way that they were doing certain quality things. But you are correct, there's no guarantee that they were consistent in how carefully they were handling all of the edge conditions... And we basically told them "Don't worry about all of the edge conditions. Your job is to get this program to run. Don't gold-plate it."

**Jerod Santo:** Gotcha.

**William Nichols:** So we were trying to guide them to give us, if not the minimal program that would solve the requirements, yet something not far from just the most basic that satisfied these requirements and runs correctly by completing these specific test cases.

**Adam Stacoviak:** So all C programmers, based on this subset.

**William Nichols:** Yeah.

**Adam Stacoviak:** All producing the same program, with similar control patterns, at least... And understandably similar defect testing in terms of the tests written. So as close as you possibly could be to control.

**William Nichols:** Yeah. We applied a certain number of controls to it. We weren't deliberately trying to control it, because this was not meant to be an experiment.

**Adam Stacoviak:** Well, my next question on that front is did they know they were being tested on this front? Did they know they were being a dataset for productivity? Obviously, they're in this course, and it's about that...

**Jerod Santo:** That's the beauty, is he back-fitted, didn't he?

**William Nichols:** \[laughs\] Well, there was no real intention of ever making it a test for productivity. That was something that we looked at after the fact.

**Adam Stacoviak:** Right.

**Jerod Santo:** That actually makes it more valid, because they're just moving at their regular pace. If you tell me we're having a race, I'm gonna run as fast as I can...

**William Nichols:** Exactly. And there is no intention -- the whole point of this exercise was to help them do something predictable. We wanted them to be in their normal development environment.

**Jerod Santo:** So what you found were these -- let's talk about the outliers a little bit... Because in my mind, that somewhat lends credence to the lore of the unicorn developer who is the 10x-er, who is the outlier. Isn't that kind of the mystique? That people are trying to hire those outliers, or find the people who really are that way.

**William Nichols:** \[00:19:50.23\] There you go, that is the mystique. Now, the funny thing s when I looked at the data -- I looked at these things using a lot of different techniques. Some of them I borrowed from social science, looking at the variation. Tim Menzies told me "No one is going to understand this. It's too complicated. Let's try to simplify it." So that's why I started doing things by ranking them. Just doing ranked analyses. It turned out the same people were not in the same position in all ten programs. Nowhere near.

**Jerod Santo:** Gotcha.

**William Nichols:** One of the plots I'm the proudest of... If you look at the plot number two in the paper, what I did was I took the programmers median ranking - that is where did they finish among their peers... They basically did ten exercises; was their median number ten? Was their median number -- I ranked their medians... I'm sorry, what I did was I took their medians and I ranked them, I ordered/sorted them.

What I did then was I took their range... So I used basically a binomial type of thing, non-parametric. I think I used take the ten programs threw out the two smallest and the two largest, and then you say "What are the odds of being above this 8 out of 10 times?" And that gives you like a 90% confidence range. Their true median will be somewhere in there.

And their range - this range of where you could place them was pretty close to half the sample. That range turned out to be pretty close to about a quarter of the sample, and if you took that full range, it was about half the sample. So that means the same developer - take your 250 out of 500 - some days he's going to be at 250... But is almost as likely going to be at about 125 or 375. And if you go down to the very best programmers, the ones who were typically the fastest few, their numbers typically ranged up to around 100. The most variation was at the slow end.

You should be aware that not everyone that took the class was a professional programmer. We had some people here who were managers, who hadn't programmed in a while. We had some people who might have been with the process improvement group, who weren't current... So it's not too surprising that we had some outliers on the slow side. But what the data was telling me is that - yeah, there's definitely a difference between your best programmers and your weakest programmers.

It gets really hard to tell the difference between a good programmer and a pretty good one. You can kind of tell an average programmer from your very best, but you'd better have a few data points, because there's a good chance that you're gonna get them wrong if you just take one sample.

**Adam Stacoviak:** Did you have any of this spectrum across the years? You mentioned it was over a decade, is that right?

**William Nichols:** That's right.

**Adam Stacoviak:** So if it was over a decade, was there any variance in terms of like the first five years it was better, or worse? Was the year range by any degree different?

**William Nichols:** The honest answer is I haven't looked at that carefully. It's actually a pretty reasonable question. I don't know if I have enough data points to get that accurately... But it's a very good question, because if there is an effect in this like the training, that's the kind of place where it might turn up.

**Adam Stacoviak:** Yeah. I was just thinking in terms of just the fact that over time things happen inside of people's lives that may not in others. Maybe the first five years there could have been a global pandemic happening... \[laughter\] Or not.

**Jerod Santo:** Or the Great Recession...

**Adam Stacoviak:** \[00:23:57.19\] So things would change obvious human behavior, so that might be an outlier, or that might be an indicator of data change... Because someone can go through a divorce, have a loss of life in their family... Different factors that weigh on them personally over time.

**William Nichols:** Oh, yeah.

**Jerod Santo:** Well, nobody was in it for ten years though. These were different students.

**William Nichols:** Right, that's a good point. One of the things that I was looking at is the difference between what I would call "between" and "within".

In the social sciences you'll have differences between groups. Things like socio-economic status... And you'll have some differences between groups, but you'll have some differences within groups. My group was the individual programmer. Each programmer was his/her own group. So this was a repeated measures approach. They took ten samples, reviewed measures...

And when I say "within", I say "What is the variation of an individual programmer? What is that programmer's variation across these ten exercises? Those all were being done within a few weeks typically. So that was a very small time span.

I did not get a chance to look at their behavior over time. We didn't get a chance to revisit that. But we did get a chance to look at what was the behavior of this overall super-group of programmers, what was the variation there, and what was the variation of the individual programmer.

The funny thing is when I looked at the total variation, when I did things like regressions, and very conventional measures variation, it was almost 50/50. That is almost half the variation was what total group wide among the 500 developers, and about half the variation was within individual developers. So it told me that the individual programmer varied from himself almost as much as the different programmers varied from each other. Now, again, to be clear, that doesn't mean that some programmers really aren't better than others...

**Jerod Santo:** Sure.

**William Nichols:** ...it tells you that there's a lot of noise in this data. And if you try to pick out the superior programmer form one sample or a couple of samples, you're probably just chasing noise. And that's kind of where I had the observation that all of these experiments that people have run before - and I cite them in the paper - DeMarco and Lister, some observations from Curtis, the original paper by Sackman, they all basically took a snapshot, "How did the group of developers do on a program?" And I said "Well, look, I reproduced their data. On any one of my programs it looks very much like what they were showing." But if I had to use the same people on another one, I get the same distribution, it's just all of the people moved around.

So in a sense, I can replicate their data, but it seems to indicate that it means something different. That we'd been ignoring that huge variation of how the individual performs from day to day - different programs, different problems, maybe they didn't sleep well the other night... A more typical problem might be you made some bone-headed programming mistake and you just couldn't see it. You didn't see it until someone walked by your desk and said "What's the problem?" and they saw it right away. How many times have you programmed and that's happened to you? You just get stuck for a while.

**Jerod Santo:** Too much. Too often. \[laughter\]

**William Nichols:** Too much. And all I'm telling you is--

**Adam Stacoviak:** ...take some shower time to get past it.

**Jerod Santo:** Yeah, take a walk.

**Adam Stacoviak:** Or a walk, or a bike ride.

**William Nichols:** Yeah. That's exactly the kind of thing we told them to do. So when they did that, by the way, they stopped the clock. The time is not the wall clock time or the calendar time, it's literally stopwatch time. They were using a tool where they would hit a timer button and working on this program. "I'm gonna take a break, I'm gonna stop it." It gets rid of a lot of noise.

So the message here is that that kind of variation, that kind of problem is normal. If you see that happening to yourself, it just means you're normal.

**Break:** \[00:28:08.10\]

**Jerod Santo:** Bill, if you were to summarize your findings -- I know we've talked about them some, but if you were to just lay it out, "Here's my take-away from my findings and doing this research and digging into this data I already had", could you give us the executive summary? What's your take on this scenario based on what you've found?

**William Nichols:** My short summary would be there's a lot of variation in program developers. And you're going to see about as much variation with one developer, within that developer, as you're going to see between the developers on your group. That's one of the things that you just have to be willing to deal with when you're going to be planning your projects - that there's gonna be a lot of variation... And the big source of variation is really just the individual variance. That'll be at least as big as the problems you have with some being better than others, as long as everyone is capable; as long as you have people capable of doing the work.

**Adam Stacoviak:** What's your goal with the findings? Who are you trying to communicate primarily to? Are you trying to help teams be more efficient? Are you trying to help larger industry users, the gigantors versus the small teams? Who are you trying to really influence with this summary?

**William Nichols:** That's a good question... And I wasn't really trying to influence anyone in particular, but if I were giving advice, I would say what you really need to do is focus on hiring good quality people, and don't obsess on trying to find that unicorn developer. Just to be clear, that unicorn developer might be able to do things that your normal developer can't You may be able to find that unicorn who can solve the super-difficult problem. I mean, how many Linus Torvalds in the world really are there?

**Jerod Santo:** Right...

**William Nichols:** But if you're trying to put together a team that's going to build software, you need to find capable people. You wanna be above a cut line of capability. But beyond that, you're not gonna help yourself by trying to find the best 5% of programmers and stacking your team. It just isn't gonna work. Your best bet is to get a good set of programmers, capable, and then put them in an environment where they can succeed... And there are a lot of other things you can do environmentally to make the work process more effective.

**Adam Stacoviak:** \[00:32:03.11\] This reminds me a lot of what you're suggesting here from that movie Moneyball. Anybody seen that movie Moneyball?

**Jerod Santo:** Mm-hm.

**Adam Stacoviak:** Essentially, a lot of the teams are trying to optimize for the amazing, the best ever, and not the base hitters, not the people who can be consistent. And it sounds like what you're describing, Bill, is focus on people who can do the job and be consistent at it, and get base hits, potentially even doubles... Because you know, base hits lead to more people on base, and more people - to use the baseball analogy fully - to get back to home. That's the point of baseball, to get back to home.

**Jerod Santo:** Right. Well, it seems like on top of that -- I think about NBA teams, because there's a strategy of just stacking all these all-stars on a single team... You get five of the best players in the league on the team, and what you find is that that can backfire, because they have interpersonal problems, they all want the ball all the time etc. Sometimes it works out, but oftentimes it doesn't. However, I think what Bill is saying here is in the NBA they have much better stats.

You can look at the guy who shoots 65% from threes (well, no one really does that), a really good three-point shooter, and say "Well, I know I've got the best three-point shooter". But when it comes to programming, there's -- he tried; Bill tried, and what he found was a lot of noise, right? You can't even get the stats right.

**William Nichols:** Well, that's really very perceptive... And a couple of things that I would build on here is -- that's one of the metaphors I've used over time. I was one of the -- I don't know if you guys have ever read Bill James. I was reading him back when he did his first historical baseball abstract. And when I saw some of those measurements, I said "Ah, this is what I've been looking for."

**Jerod Santo:** Really?

**William Nichols:** Because it solves the problem. And -- well, let me go back to another 1980 metaphor; that was the Miracle on Ice team.

**Jerod Santo:** Oh yeah, 1980.

**William Nichols:** Herb Brooks said "I don't want the best players, I want the best team." He was criticized for not taking some really good hockey players... But he had a specific type of game he wanted to play. He needed certain types of skills and he needed a certain mix of skills to make it work. And for a software development team it's really the same thing. It's not like you have to have the Harlan Mills surgical team, but you do need to have certain types of skills. You need to have people who know how to use different tools. You wanna have people who are really good at design.

We've been most effective when we had one or two people who were really, really good at reviewing work... They might have been really good at reviewing designs, they might have been really good at reviewing code. And when you put those on a team, it's where you get that situation where the whole really is more than the sum of the parts.

**Adam Stacoviak:** Yeah.

**William Nichols:** So when you put together the right set of skills, you get a team that's much better than any one individually.

**Adam Stacoviak:** It would make sense too to sort of stack the team up with that kind of skillset across the board, because one person can't handle that much cognitive load anyways...

**William Nichols:** Exactly.

**Adam Stacoviak:** They can't be all the skills at once. While they may have them all, they can't be them all at once.

**William Nichols:** Exactly. And even more to the point is you can't teach people to be intelligent. You've gotta have a certain base capability. But most of these other things, like using a tool, using Git or other's revision control effectively is a skill. It takes skill and it takes repetition. Doing good design involves a lot of skill and a lot of practice. When you compose teams who have members on them who have each really worked at honing a certain skill, they can come together and you can have a more effective team, because "Hey, now I know someone I can go to if I have a certain type of problem."

And going back to the baseball analogy, if Babe Ruth hits a lot of home runs, they're worth a lot more if he's got a few guys in front of him getting on base.

**Jerod Santo:** That's right.

**Adam Stacoviak:** \[00:36:03.17\] That's true. Absolutely true. What are your thoughts on people trying to derive insights from a repository of code? So rather than study the humans, study the artifacts, the output.

**William Nichols:** There's a lot of work going on in looking at those artifacts... And I certainly thing there's a lot you can infer from them, but you've gotta be cautious too, because you don't necessarily know how it go there. All you have at the end of the day is the artifact.

So what I've tended to focus on is the entire development process. What are the steps that you took to get there? Now, sometimes you can infer other things from the artifacts; it depends on things like how many times you checked them in, what kind of other information you're gathering. Are you getting all of the defects recorded? Are they only being recorded after the release, or are you getting defects recorded in tests? Which version of tests?

So I'm not gonna say you can't get things from that, I'm just gonna say that it is limited, and the thing that you really have to be aware of is what were the limits based on what information was recorded? Now, there's a whole discipline of mining software repositories... A lot of that work is going on.

**Jerod Santo:** I enjoy sometimes trolling through subreddits, especially of cryptocurrency projects, because there's a lot of people who are fanboys of a project, which is ultimately a software project with a financial thing attached to it... And yet they are unable to judge a software project, and they will often post how many commits they have been making this week on their GitHub repository as some sort of benchmark... Like "Hey, guys, 105 commits this week. We're killing it." It's like, "Well, what is a commit?" Not every commit is created equally. It's just funny, because you have these people mis-applying--

**Adam Stacoviak:** Especially if 100 of them were typos in documentation.

**William Nichols:** Oh, yeah.

**Adam Stacoviak:** And five were actually code.

**Jerod Santo:** Or you just write a bot that makes commits once in a while to make it look like you're working on it.

**William Nichols:** Yeah, there are two things I would say about that. That's a very insightful comment. The things that we have coached the development teams on is - okay, you're taking/recording all of this data... Don't use this as a contest; don't use this to rate people. Don't even think about it. In fact, it's better when you report this to management that you give them things like aggregated numbers, that are really on point for "Are you on progress? Are you doing the things you said you were going to do?" Because if you start focusing on your numbers, you're gonna put the cart before the horse and you're gonna be doing the wrong things.

So it's really a matter of -- you're taking these numbers entirely as a way of getting insight into what you're doing. You don't want that to be the end in itself. Now, if you just are recording the kind of data that you're using and you're seeing these numbers, then you typically will see fairly predictable distributions. So over time you're gonna see "Yeah, a distribution small/medium/large" for example, and you can kind of add them up together, because as long as the distributions are consistent, you'll get reproducible results. It's when you start artificially manipulating those outputs that the data becomes useless.

**Adam Stacoviak:** Yeah, and how often does your own personal bias play a role in your findings? You almost have a preconceived assumption, which is your bias going in, and then you kind of --

**Jerod Santo:** You're digging for what you wanna look for...

**Adam Stacoviak:** ...you handle the data in such a way that you come to the outcome you assumed you would come to.

**William Nichols:** Yeah. You've just described one of the big problems in the replication crisis. Have you read much about that?

**Jerod Santo:** No.

**Adam Stacoviak:** No.

**William Nichols:** \[00:39:52.25\] Oh, okay, look up "replication crisis". There's a lot of literature on that, especially since about 2005. A Stanford professor -- don't ask me to pronounce his name Ioannidis was noting that it was very hard to find results in social sciences that replicate. And a lot of that is because of a number of very predictable things. You're gonna have the file drawer effect... "If you don't find what you want, your study never sees the light of day." There are all sorts of things that people call, like p-hacking. P is the measure of statistical significance.

So there are easy ways that if you wanna get a result, you can manipulate your data to kind of nudge it in that direction.

**Adam Stacoviak:** Yeah. That's why you have to be wary of documentaries... Because it's very easy to watch pretty much any documentary and come out a believer...

**Jerod Santo:** Oh, I know.

**Adam Stacoviak:** ...not because of your own personal inherent beliefs prior to, but because the whole point of the documentary is to lead you to a conclusion, and that conclusion is their conclusion... And in some cases you really can't help it, because they've proven all the data to that direction, versus the other. There's no argument.

**Jerod Santo:** And the hardest part is sometimes they're actually right. And then other times they're wrong. And it's like "How can I know?"

**Adam Stacoviak:** That's right.

**Jerod Santo:** "You're just so convincing."

**William Nichols:** Exactly.

**Jerod Santo:** Yeah, it's really tough.

**Adam Stacoviak:** That's right.

**William Nichols:** It's really frustrating when you have all of these studies out there... And how many times have you watched the news on the latest medical study? And "Okay, is fat good for you or not good for you?" Who knows...

**Adam Stacoviak:** Well, we know that one. Just kidding... \[laughter\]

**Jerod Santo:** That's good, man.

**Adam Stacoviak:** We do know that one...

**William Nichols:** But we didn't always...

**Adam Stacoviak:** Yeah... I mean, even in today's climate too, when you think about how do you push back against Coronavirus - in a lot of cases, a lot of the experts say testing. Because if you don't know where it's at, you don't know how to fight it, or how it's mutating, or how it's affecting the population, who it's affecting... All these different factors. If you don't have the tests, and you don't have testing in place...

**Jerod Santo:** You can't manage what you can't measure.

**Adam Stacoviak:** Yeah, exactly. You can social distance all you want, which is a great precaution, but until we have conclusive testing in any given population, you can't understand where the spread is and how it's affecting the population.

**William Nichols:** And you won't really know "When can we stop social distancing?"

**Jerod Santo:** Exactly.

**William Nichols:** How are you gonna measure it? So those all touch on a lot of the problems we have in software engineering, trying to get data. We've talked a little bit before -- one of the metaphors I've used is you can watch baseball games... How many people are at a typical ball game? 20k, 30k? In some of the big cities maybe 50k? Big games, and they might have a couple million on TV. And we have evidence now that for generations there were a lot of serious mistakes in the valuation of those players.

Now, these are players who we're watching do their jobs. They're keeping meticulous records, we're reading the summaries in the newspaper the next morning, and we can still make mistakes in valuation. What does that say about the rest of us?

**Jerod Santo:** We're not doing so well.

**William Nichols:** Well, it's just the state of being, isn't it?

**Jerod Santo:** Yeah. Well, let's bring it back to some more studying you've done before. This study which I've believed you've mentioned before, Menzies, from 2016, "Are delayed issues harder to resolve?" and you're kind of revisiting this idea of cost to fix, the facts throughout the lifecycle of a software project... So kind of break into what this acronym DIE stands for, and what it's all about.

**William Nichols:** Well, Tim came up with the delayed issue effect. In this case, what we were looking at were some industrial data. I had data from (I think it was about) 190 different software development teams. We had all of the defect data that they had collected throughout their processes, and they were from a lot of different industries, very heterogeneous data...

So it's got some of that noise, but we knew "Was this defect injected in the requirements? Was it injected during design? Was it injected during the design of the product? Somewhere during the testing? Was it injected when they wrote the code? Where did you find it? Was it in one of the reviews, was it in an inspection, was it in a test, was this post-development?"

\[00:44:07.02\] So we looked at the activity difference between when the defect was injected and when it was removed. Now, we happened to have stopwatch-level defect information on how long it took the developer to fix that problem... That is once it came back to the developer's desk, how long did this actually take to fix? Upfront acknowledgment - that's not including a wasted time the user had to spend figuring it out, writing up the report, or bookkeeping, the organization might have gone through taking in problems... But the actual developer-facing time.

We've found that, by and large, it just wasn't growing that fast. It was growing, but typically if you've found a defect during your development, it was pretty cheap. If you've found it after development, it took a factor typically a couple of times as big to fix.

It took longer to find and fix if it was a test-type defect, compared to (say) a review defect. But once it was any kind of test or field, it was relatively flat... So one of the inferences would be that modern development has really flattened that curve. I don't know how long you guys have been -- when I started programming, my first program I wrote on punch cards.

**Jerod Santo:** You beat us.

**Adam Stacoviak:** Yeah, I skipped that step.

**William Nichols:** Most people have, by now. I didn't use a CRT until I was a sophomore in college...

**Jerod Santo:** CRT? What's a CRT? I'm just kidding... \[laughter\]

**William Nichols:** Cathode-ray tube.

**Jerod Santo:** I'm just joking...

**William Nichols:** Yeah. I learned how to program with Emacs, but it was really hard in the early days, wherein you had to do these builds on programs, and they would take forever because you had to recompile everything based on cards, or you had to submit it to a batch system... The modern development environment, with most things at your desktop, the builds are so quick - a lot of things that really took a long time before have been flattened.

Developer-facing time on fixing those things isn't all that different. Yeah, for a field of defect it can be hard to find the actual source of the problem...

**Jerod Santo:** Yeah...

**William Nichols:** ...but those factors of 10 to 1, 100 to 1 that came out of some studies in the '80s - we don't see anything like that, at least in this data. So it tells you that either something has changed, or there was a bias in how they collected their data.

**Adam Stacoviak:** Which we've talked about.

**William Nichols:** Yeah, but they collected their data in the 1980s. It was a very different world.

**Jerod Santo:** Yeah. What I find interesting about your historical touchpoints there... Punch cards - gone. CRTs - pretty much gone. Emacs? It's alive and kickin', baby. It's alive and kickin'.

**William Nichols:** It sure is. Richard Stallman.

**Jerod Santo:** So a lot of the software -- I mean, we definitely have modernized quite a bit, but it's amazing how there's certain pieces of software that are still relevant today, despite all the changes in modern development techniques... Vim and Emacs being two of the staples.

**William Nichols:** Yeah, if you're a programmer, odds are you know at least one of Vi or Emacs.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** One thing mentioned in this study too is - I don't know if it's significant or not - the TSP versus PSP, which is the team software process. Is it similar? Are they parallel studies? What is this?

**William Nichols:** Well, the team software process is really the industrial version of personal software process. We taught people PSP so that they would learn how to do things like record data, how to make estimates. The team software process was how to do this in a real industrial environment, so that you could coordinate with your team members, you could report up to management, you could make your estimates, you could see if an overall project was really on track. So the PSP was sort of subsumed into the team software process, but the team software process was for planning really big programs.

\[00:48:10.08\] I have some TSP data for projects that spanned multiple years. So you would look at the data very differently, and one of the things you couldn't get from that is you're not gonna have the same programmers developing the same thing. It just doesn't happen. In the real world, everyone is developing a different piece of software. So they aren't really apples to apples comparisons anymore, and you can't treat them as such. You have to look at the data a little differently. But they record the same types of data - how long did something take, how big was it, were there defects, where did I find them, where did they come in?

**Jerod Santo:** Are these processes still taught today, or they have been subsumed by things like XP, and Scrum, and other processes? I was thinking about your personal software process and how different it is to TDD in a testing way, where you can make your tests pass the first time; well, TDD advocates will say "Never do that." Like red-green-refactor, it should fail, right? So it's at odds with a few of these other processes. I'm curious if it's still extant, if it's in the world of Academia... Tell us about it.

**William Nichols:** Well, it's still being used. By and large, the Agile techniques have more or less taken over the world. I can give you some various reasons for it, but part of it is it's just a lot easier to teach people to do that. And if you talked to some of the early Agile adopters, what they were really trying to do - they were trying to deal with a world in which the number of programmers was growing exponentially.

If you took any group of programmers, you always had this surge of new guys, because every cadre, every new cohort was twice as big as the last one. So you were always dealing with these inexperienced programmers and needed to do something very simple.

Now, you said something very interesting, and I hear that again and again, about "the program should fail the first time." Well, the way we would teach them - and we've taught people to do that - is "Okay, if you wanna program that way, that's fine. But the first failure is not a failure. Yeah, you should get a red light the first time, but that's not a failure, because that's what you intended it to do."

**Jerod Santo:** Right. It's expected.

**William Nichols:** It's expected. But we're counting our mistakes. Mistakes that caused a program and caused you to do some additional rework. Not the first development. Yeah, that first failure is an expected failure...

Superficially, it sounds like they're at odds. They really aren't. But the mindset and the discipline is somewhat different. We were really focused on doing things like being methodical, really engaging in the design... You see more of these things coming out now as we move into the dev ops world. The pendulum is swinging back the other way, but that's a whole other discussion.

**Adam Stacoviak:** It kind of reminds me of that quote -- I believe it's Thomas Edison saying "I haven't failed 10,000, I've only found 10,000 ways my idea didn't work."

**Jerod Santo:** He's an optimist...

**William Nichols:** Yeah, one of the things we tried to teach was that testing alone is never enough, because you can't test everything. If you're doing something like the avionics DO-178C, where they have truly comprehensive testing - that's extraordinarily expensive. By and large the best testing I've found will find maybe about half the total defects, so you've got to do other things to find the edge cases... And that could be things like designing it so that it can't happen; doing inspections on your design and your code, so that you know these code conditions or these input conditions aren't going to hit, or that you're controlling for them. But it is almost impossible to test quality in the code. You need testing, but it shouldn't be your starting point in the quality; it's really your end point.

**Break:** \[00:52:11.20\]

**Jerod Santo:** So Bill, we've talked about a few of your research papers... Let's talk about some vapor research here, things that you have currently brewing, which is a very interesting cost/benefit analysis of static analysis, and doing that during development. This is something that you have in progress. Do you wanna talk about it?

**William Nichols:** Sure. I wrote a technical report, but that's mostly just a data dump. Technically, I had to get a lot of the data out there, so that I could publish it openly; it had to go through a lot of different approvals. The underlying problem is we have all of these commercial tools for analyzing code and finding defects.

You're probably familiar with things like Coverity, Clang, SonarQube, Klocwork, FxCop... These things are very good at finding defects... And I wasn't really interested in comparing one to another, because they often find different types of things. But the question was "How do they affect the software development process?" If I'm a program manager and I have to make a decision, should I spend the money to put these things on the project, and have the developers use them? Is that money well spent?

So I decided I could look at this from a very narrow standpoint - I don't care about how much they spend specifically (that's a financial problem), but using these tools, how much time do they take? How many defects do they find? And what I was finding was that pretty consistently the teams that I was following, the teams that I had data for, that use these tools, were consistently finding defects, they were removing them... Removal costs were relatively low, and from an economic standpoint, at the margins, they were actually finishing faster, and spending less time in development. So operationally at least, these tools had a small but measurable improvement in the performance.

Now, the flipside is this was just through the development. You're gonna have a higher-quality product at the end, because you have all these other defects that didn't have to go through tests, that didn't escape from tests, and aren't gonna be found in the field because they were swept out by these tools. So the bottom line in that was that the effects looked like they were actually pretty modest. They weren't as enormous as you might expect... But that is stipulating that these were teams that were actually doing a pretty good job on quality already.

I have some anecdotal data from a guy at the veterans administration, and he was ready to pull his hair out at the quality of codes that were being given to him... So he basically said "You're not gonna give me this delivery until you've run it through this commercial static analysis tool, and resolved every defect that it finds." It doesn't mean you have to make all the changes, but you have to run this tool and you have to dispose of all of these problems - either it was a mistake or it wasn't - and until you've done that, you're not done. The first time he did that, he had like 109,000 reports on 100,000 lines of code.

**Jerod Santo:** \[00:56:04.02\] Wow.

**Adam Stacoviak:** That's a lot.

**Jerod Santo:** Sounds like fun.

**William Nichols:** That's a lot, yeah. But he found that once the--

**Jerod Santo:** More than one per line... Is that more than one per line?

**William Nichols:** More than one per line, yeah.

**Jerod Santo:** \[laughs\] I'm just doing the math, and I'm like "Wait a second..."

**William Nichols:** Yeah. But he found that once it became clear that he was gonna use this as a part of his acceptance criteria, they would have to build it into their process and just start getting used to it... And he found that his data was suggesting they were actually coming in faster. So I wanted to look at that atomically.

I used our TSP data, which said "We've found all of these defects. Which ones specifically were being found by the static analysis? How much time was spent running these tools and finding the defects and fixing them?" And I did some modeling to make some estimates on how much time was being saved downstream... Because no, you're not gonna be finding quite as many things in tests. But I said "Okay... It looks like this is not taking longer." Anyone who says this is gonna take longer is probably wrong.

So operationally, these things actually speed up development. So you could not make an economic case not to use them. Why would you not use them? Well, maybe they cost too much. That's a different argument.

**Jerod Santo:** Right

**Adam Stacoviak:** Yeah.

**William Nichols:** But operationally, the data says they work. There are other things that work too, and there's evidence that they find different things than you might find, using tests or using other types of inspection techniques... But there's no reason not to use them.

**Adam Stacoviak:** Did you apply the DIE model to this, by any chance? Because if you've got these defects in there over time, other inherent costs or hidden costs that sort of linger and hide...

**William Nichols:** Yeah, good question. What I did was for each of the teams I created a parametric model, and I've done this before -- I didn't send you a copy of this one, but I did a paper a few years back for software quality professionals that showed you could model the economics of some of these things. The model included how much time you're gonna spend on these different activities; how much time have you spent doing design, coding, testing... How many defects did you inject in each of these activities? Where are you finding the defects? How effective were these activities at finding and removing defects? And for every defect, how long does it take?

So I did some parametric averages of the defects finds in different phases, and I used that parametric model to estimate "If I find this defect in static analysis, how much time is that going to save me downstream? Oh, I only had about 50% chance of finding that in tests, and it was going to take about three times longer. Okay, that was a net win."

**Adam Stacoviak:** Yeah.

**William Nichols:** But that's the way I did the modeling and the actual parameters I put in the paper. The model is not dissimilar to some of the things you've seen from -- you've probably heard of COCOMO. There's a variant of COCOMO called COQUALMO, by one of Barry Boehm's students, and it turned out that our models have a lot of commonalities. They aren't exactly alike, but they look enough alike that we could talk to each other about it.

**Jerod Santo:** I have not heard of COCOMO. Adam, have you heard of COCOMO?

**Adam Stacoviak:** No.

**William Nichols:** Oh, COCOMO is a parametric software size estimator. If you look up COCOMO, Barry Boehm - he came out of TRW with this originally in the '80s. It was "How can I estimate the cost of a big software program before I begin work?"

**Adam Stacoviak:** Yeah... Based on Google, it says "COCOMO is a constructive cost model, a regression model based on lines of code (LOC). It's a procedural cost estimate model for software projects, and is often used as a process of reliably predicting the various parameters associated with making a project such as size, effort, cost, time and quality." That's on GeeksForGeeks.org.

**Jerod Santo:** \[01:00:00.15\] Gotcha.

**William Nichols:** Exactly. Basically, with something like a COCOMO you'll get some kind of wag about how big is the software gonna be; it might start out with a function point estimate, but you have to get into something like lines of code. You'll put a bunch of tuning parameters, like "What is the experience of the developers who are gonna work on this? Is this precendeted?" Various types of parameters... And you get an estimate out at the end. COQUALMO basically uses what I would call a parameterized defect containment model to estimate the costs associated with managing quality during the development.

**Jerod Santo:** So you mentioned you had anecdotal evidence on the improvement side... And you had good results on the TSP data that you had...

**William Nichols:** Yeah. My data suggested the anecdotal evidence was consistent with anecdotal evidence.

**Jerod Santo:** Right. What would be really cool would be the same teams with and without the static analysis.

**William Nichols:** Yeah...

**Jerod Santo:** The teams that might have already been performing well because of good practice, or... You've got a couple 10x-ers in there... Just kidding.

**Adam Stacoviak:** \[laughs\] It's a recursive problem here... "Were there 10x-ers? Were there not?" Do they really exist?

**Jerod Santo:** \[laughs\]

**William Nichols:** Yeah... What you'd really like to see is some kind of longitudinal study where you introduced it. But now you're getting into why getting these things out of software is so hard.

**Jerod Santo:** Yeah. You need to raise some money to do a longitudinal study like that. That'd be a lot of work.

**William Nichols:** And getting people to cooperate with that sort of thing.

**Jerod Santo:** Right.

**Adam Stacoviak:** Well, some of the tooling you've mentioned - COCOMO and others - I hadn't heard of before, but it reminded me of like Code Climate or other analysis tools that try to infer or determine problems, essentially, whether it's a particular language, or a particular framework they're analyzing... And I'm just kind of curious, of those that you're studying, what kind of teams were using those kind of tooling? Is it large-scale teams, with 500+ engineers, or 100 engineers? What size teams, what are some of the parameters there, versus maybe a modern team that tries to be smaller? ...like eight people or less; one product manager, a few developers, a designer... How is a teams layout using that tooling?

**William Nichols:** Okay. What I've found -- the teams that we were working with were typically in the modern team size. If you have more than about ten people, it's generally because you've got multiple teams working together on a bigger project. So most of our data was from teams in the order of 5-10 people. However, for one study I did have this one team that essentially had -- I think it maxed out at about 40 people... So they were kind of an outlier. That was in a military application, longer-term, so a lot of those people were on or off the project at various times. I'd have to go back in the data and do a lot more granular inspection to see what were the most at any one time.

**Adam Stacoviak:** Yeah.

**William Nichols:** But most of the teams were in the 5-10 range.

**Adam Stacoviak:** Let's use Jerod as an example here. Jerod, you always mention how you haven't had a typical trajectory of a software developer...

**Jerod Santo:** No.

**Adam Stacoviak:** You haven't worked inside a large enterprise before...

**Jerod Santo:** Correct.

**Adam Stacoviak:** You've never used tooling like this, or do you use tooling like this? What kind of tools do you use to find your bugs, to find your defects? Is it error tracking, or is it users?

**Jerod Santo:** That question presupposes that I write bugs, Adam, which is a false dichotomy -- no, I fix my bugs in production... I don't know; I'm not a good software engineer, so I just kind of roll with the punches. A team of one, with very few quality controls in place is how I've been rolling... \[laughs\]

I do test-driven development to a certain degree. I'm not a red-green-refactor zealot; I don't think you have to go red. But I do write tests as I go, sometimes exploratory... Sometimes when I do know the solution, I just wanna harness it as I develop it... And then I add regression tests when there are bugs that are fixed. But I don't use any sort of static analysis, I don't use very much tooling at all... But I think that's probably because of how small my teams are, which is usually myself and maybe one or two contractors, and that's it.

**Adam Stacoviak:** \[01:04:16.23\] Yeah.

**Jerod Santo:** It's just so much easier to manage when you don't have more people.

**Adam Stacoviak:** So Bill, in this case then, hearing Jerod's example of his cycles, and knowing what you know about all the studies you've done, do you believe that a static analysis tool would help a Jerod out there?

**William Nichols:** If you think about the kind of warnings you get in an IDE or in a compiler, the typical static analysis tools simply find more... And what I've typically found is that if you use one of these tools before you start running tests, you typically are going to find some things before you get into tests; and some of those might have turned up in the tests. So I think you probably would find that they're likely to be helpful. Not guaranteed, because you've gotta pick the right tool, that's aligned with the type of environment you're gonna be using operationally. It's gonna be finding the right types of bugs.

**Adam Stacoviak:** So it's an indicator light. "Here's more things to pay attention to, right or wrong".

**William Nichols:** Yeah. And what I've typically found is that a rising tide floats all boats. If you find a bunch of these warnings, some fraction of those were going to turn up as testing problems. Some of those were going to turn up in the field. And if you are unfortunate enough to be in a domain where you've got real security issues, some fraction of those would actually turn out to be a security violation, and might actually be exploitable.

**Jerod Santo:** For sure.

**William Nichols:** But it's a small number. It's a very small number, and the best way to get something really secure into the field is make sure it doesn't have any bugs before you ship it.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** So you have all of this data... We talked about your programmer productivity data, those ten years of PSP exercise, results and timings, we have this static analysis data, and you're slicing and dicing it, you're analyzing it, you're putting your thought into it... I'm curious if you've ever thought "What if I just put the data out there?" Publicize the data, made it public, open license or whatever, and invited more people to -- get more eyes on it, that way maybe you get more insights from the same amounts of information?

**William Nichols:** I have actually done that fairly recently. If you check the citations in the paper, I think I do refer to where I put the PSP data.

**Jerod Santo:** Okay.

**William Nichols:** If I didn't put it in that paper, then that was my mistake. I know I have put it out there since.

**Adam Stacoviak:** Which paper, Bill?

**William Nichols:** I think I put it in the IEEE. I believe I put the IEEE paper into the IEEE's repository. I should have also put that out somewhere on our SEI -- well, it might be available from SEI, it may not. There was a lot of resistance for a long time, because there were concerns about privacy. What I did with that data - I really stripped out everything that could be even vaguely identifiable. So it was really easy for the PSP data. That is out there.

I think the biggest barrier is if you haven't taken the PSP course, the data is pretty overwhelming, and it's really hard to get your head around. I've found that unless I worked with someone -- if they hadn't taken a PSP course, they really didn't know what to do with the data... And the problem is even more so with the team software process data, because the data itself is noisier.

**Adam Stacoviak:** Yeah.

**William Nichols:** You don't have those constraints.

**Adam Stacoviak:** You have to understand the data to understand where the noise lives, and operate around it.

**William Nichols:** \[01:07:57.20\] Yeah. So it's out there... It hasn't been out publicly available for a long time, so... But I've historically had very little pull. Tim Menzies is one of the few who's come to me for data.

**Jerod Santo:** Gotcha. So the programmer productivity paper was published in September of 2019, or in the September/October issue... I'm curious if there's been a response that's been measurable from the community, if people are giving you high fives... Have they said "Oh, come on Bill, you're full it"? What's been the response?

**William Nichols:** That's a good question. I was kind of surprised to just how big the response was. It went kind of viral on places like Reddit, Stack Exchange... We ended up with thousands of hits on our SEI website when I wrote the blog. Very little came out of the IEEE, by the way. But when I did a blog on the SEI website in January, that went viral... And then people went back and looked at the IEEE paper.

It's kind of interesting, because a lot of the comments you get on places like Reddit were mostly critical. They were bringing up things that this study didn't really aim to do, like saying "That's not how you measure programmer productivity anyway. The unicorn developer can solve a more difficult problem." Okay, well that's fine, but that's not what this study was aimed at.

I got some pushback on the other side, from people like Steve McConnell, about "Well, what about all of the things you haven't accounted for? What about attrition, bias? I still see a lot of high rates of variation in individual developers on your paper. Why did you stop at the 5% and the 95% ranges?" and this and that.

So yeah, there was plenty of criticism, which frankly I welcome, because at least people are talking about it, and they're actually discussing the issues.

**Adam Stacoviak:** Well, it also depends on what you're trying to get at, what the point is. What are you optimizing for? Are you optimizing for the absolute truth, or some sort of indicator of truth, so that we can be better at what we do, and maybe try to hire the 10x-ers (good luck), or find the base hitters, like we've talked about.

**William Nichols:** Yeah, and more to the point is what question are you really trying to answer? Because one of the things that came out was when people say 10x programmer, they don't always mean the same thing. Some people mean it very literally. There are plenty of papers that study the productivity; factor of ten productivity differences. But that's not necessarily what all the programmers mean. 10x - they mean the unicorn. Ten times is really kind of a metaphorical "40 days and 40 nights" type of thing.

**Jerod Santo:** Yeah. Most people that I hear say the 10x developer nowadays - maybe 2020 time range - are speaking not so much of somebody who can code faster, better, stronger than anybody else, but it's really the multipliers inside of a team. It's the person that can make everybody else around them better. It's the Scottie Pippens on the team, that is like "That team is better because Scottie Pippen..." - NBA, '90s Bulls reference for those out there...

**Adam Stacoviak:** Yes...

**Jerod Santo:** Look up '90s Bulls, they were pretty good...

**William Nichols:** Yeah.

**Jerod Santo:** ...is a player like that. It's like, everybody else is better because Scottie Pippen is on the team. That person is a force multiplier, even if they are going to finish these exercises faster than anybody else.

**William Nichols:** And you know, I actually will have a lot of sympathy with that, because one of the things I've talked about - how do you, as a manager, improve the productivity of your team? It's putting together the right team, and getting the right set of skills.

I'll give you another example... Have you ever heard of William Shockley?

**Jerod Santo:** No.

**Adam Stacoviak:** No.

**William Nichols:** He was more or less the inventor of the transistor.

**Jerod Santo:** Okay...

**William Nichols:** Everyone hated the guy. He founded one of the big electronics firms out in Silicon Valley. He basically made Silicon Valley what it is, along with HP.

**Jerod Santo:** Bell Labs?

**William Nichols:** \[01:12:06.26\] He was such a terrible person to work for that the guy who founded Intel left and made a fortune, because he couldn't stand working for Shockley. But Shockley wrote a short paper thinking about "Why are some people so much more productive than others, from writing papers?" And he sat down, thought about "Well, let's see... To have a good paper, you have to have a good idea. You have to be good at managing the research. You have to be really good at collecting and managing your data. You have to be really good at writing." He'd put together a list of maybe six, seven items, just brainstorming, that you had to be good at.

So he said, "Okay, what are the odds that someone's gonna be better than average in these seven different categories?" And he said "Oh, that's gonna lead you to a log-normal distribution" which is kind of what we see, isn't it? Well, I would take that as - yeah, you're not going to find too many people who are better than average at seven different categories.

**Jerod Santo:** Right.

**William Nichols:** But you can build a team with people who are better than average at one or two of them... And now you've got a team that can do that sort of thing. Those are your force multipliers.

**Adam Stacoviak:** Yeah, I think in today's age we see the aspects of community forming, for one... But then the multiplier of good teams... Like, here at Changelog we have a great team. It's not because I'm amazing or Jerod is amazing, it's because the whole entire team works very well together. I've been a proponent, having even come from the military too, to focus on team advantages versus individual advantages.

Now, you always have that individual that will be the Scottie Pippen, the force multiplier. You're gonna have that. It's gonna be natural. But rather optimize for a strong team than finding that person, because that person will eventually just naturally appear, given enough effort. And I don't have all of your data, I haven't surmised that from all of your data or all your insights, but that's at least my personal uninvited opinion... Or maybe invited, who knows...?

**Jerod Santo:** \[laughs\]

**William Nichols:** And that's the sort of thing I would recommend... As a manager in an organization, when you're trying to build teams...

**Adam Stacoviak:** Strong team.

**William Nichols:** ...when you're trying to build a strong team, do the things that help you build a strong team. Don't wait for the Scottie Pippen to come around. Look for the ways to put together that effective team. Herb Brooks beat the mighty Soviet Red Army team.

**Jerod Santo:** That's right. The Miracle on Ice.

**William Nichols:** With a bunch of college players.

**Adam Stacoviak:** It just shows you that anything is possible, really. Bill, thank you so much for your dedication to the craft, and to teaching. Without people like you in the game - since we're speaking metaphorically about games and teams... It makes sense. We need people like you, so thank you, from our side, and from our audience's side... To do all the teaching you've done, and all the insights and the research you've done, and for sharing that. It takes a lot of dedication, a lot of time, and we don't discount that one one little bit. We thank you for that.

**William Nichols:** Well, thanks for having me. You ask great questions; it's really a pleasure to talk to people who can put those challenging and insightful questions out there.

**Adam Stacoviak:** That's what we aim to do around here. And audience, thank you for listening. Bill, thanks for coming on today. We appreciate your time.

**William Nichols:** You're welcome.
