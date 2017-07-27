**Nadia Eghbal:** I'm Nadia Eghbal...

**Mikeal Rogers:** And I'm Mikeal Rogers.

**Nadia Eghbal:** On today's show, Mikeal and I talk with Charlotte Spencer, a software developer who's done a lot of notable work around making open source more approachable, and is a core member of the Hoodie project.

**Mikeal Rogers:** Charlotte is the creator of Your First PR, an organization that helps people make their first open source contribution, and helps projects attract new contributors.

**Nadia Eghbal:** In our time with Charlotte we got inside the head of first-time contributors and talked about what projects can do to attract, retain and communicate with contributors.

Charlotte, let's kick things off. What was your very first PR?

**Charlotte Spencer:** I had to check before we had this conversation. If you're using firstpr.me, by the lovely Andrew, who I believe that you had on your podcast a couple of weeks ago...

**Nadia Eghbal:** Oh, Andrew Nesbitt.

**Charlotte Spencer:** Yeah. Apparently my first pull request was spelling changes. I found some spelling mistakes in some kind of Node.js Express tutorial and fixed those, about three years ago.

**Nadia Eghbal:** Was this part of the 24 Pull Requests?

**Charlotte Spencer:** No, I've just grown up; I had the nickname spell checker, because I'm physically unable to do anything until I've corrected a spelling mistake... So I just saw it, and then discovered that I could press "Edit" on the page, and then did the thing.

**Nadia Eghbal:** Was it scary to make your first PR, or was it just sort of like "Oh, easy edit."

**Charlotte Spencer:** Oh no, it was kind of scary because I wasn't even a programmer at this point. I just knew what GitHub was. This was done three years ago, and I've actually been a programmer for two years. So it was kind of a "I hope no one is mean to me and this is the right thing to do." But it went really well, and they said thank you. Always thank your contributors. It was relatively straightforward, though scary.

**Nadia Eghbal:** Given that you've also recently learned how to program, and at the same time were getting into open source - I'm curious how those experiences were similar or different.

**Charlotte Spencer:** I'd say learning to do open source is obviously aided by being a developer, but I felt like the skill sets are very different. You can learn how to code, but you can do that in isolation, you can do that on your own. You can work on your own, you can be a contractor on your own in your little bedroom (where I am currently), but open source - you have to talk to people a lot, and it's way more tiring in my opinion than actually programming.

You're a developer, and then you have to go, "Oh wow, there are all these people who have opinions and need my help." So there's a lot more social aspect that has to be learned with open source, which is quite difficult. People call them soft skills, but I think they're hard skills.

**Nadia Eghbal:** It seems scarier somehow.

**Charlotte Spencer:** Yeah, well there are people - particularly when you become a project maintainer... There are lots of people who expect something of you. Like, you need to always be on and you need to always be ready to answer a question, but like "I'm in bed. Leave me alone." \[laughs\] Which I haven't said to anybody yet.

**Mikeal Rogers:** Are there any projects that do a better job of onboarding into that social atmosphere?

**Charlotte Spencer:** \[00:03:49.22\] Well, I guess a shameless plug for the open source project that I'm a member of - Hoodie. I know that you had Jan Lehnhardt on - who was the co-creator of that - a few weeks ago. I think that there's always things that we can improve on, but we do a pretty good job of onboarding people. For example, it's Hacktoberfest this month, which is DigitalOcean's month of making pull requests, and if you make four you get a T-shirt. So the activity is really busy at the moment, because there are a lot of people going "Hey, I wanna do my first pull request. This is amazing!", so we kind of onboard people before they even know they're being onboarded by providing them with issues, and we explain the step-by-step of everything that you need to do.

We mentor the pull request and invite you to Slack channels etc. As soon as you've made your first pull request, we invite you to be a contributor of the team. It can be quite fast and overwhelming - it was overwhelming when I came into Hoodie for the first time, but I think we do a very good job, at least from the beginning, on how to onboard people and get people into the project.

As Jan mentioned a few weeks ago, we're not very good yet at the "What next?" kind of things. We have a lot of people who contribute for the first time and then may not be able to do something after that. That's something that we need to talk about and work out how to keep people interested and keep people solving things and having a good time.

**Mikeal Rogers:** It's a good problem to have, though. I mean, you've done such a good job at getting people over the first step into the pipeline...

**Charlotte Spencer:** Yeah, it's also the scariest part. At that point people don't seem to be as fearful of contributing to open source, but we kind of don't yet have enough to give them to keep them doing the thing. They overcome their first barrier, and then we're like, "Oh yeah, we should probably think about how you can..." A lot of people are kind of able to do it themselves and they'll pick up some issues, but if you're still nervous because that's your first contribution, it's still really overwhelming; you did your one PR, you feel amazing, but "Oh gosh, I have no idea what to do next." That's the part that we should probably start looking at once we've released Hoodie 1.0.

**Nadia Eghbal:** And you're in that position yourself with Hoodie, right? Can you tell us and our listeners a little bit about how you went from your first contribution to Hoodie to becoming a member of the core team?

**Charlotte Spencer:** Oh, that's not a particularly interesting story, because it happened by accident. As I already mentioned, I don't enjoy spelling mistakes. There's nothing wrong with doing them, but I like to correct them if people are willing for me to do that. I think I followed Jan for some time on Twitter, and I think he tweeted like "Hey, look at this website!" The website was Hoodie, and as most of the people in Hoodie don't have English as their first language, there's a little bit of a grammatical barrier there. So it wasn't so much spelling mistakes, but more "This would sound better if it was this, rather than what you had previously." By that time, I had been teaching myself programming for like six months, and I'd had an internship at that point, and I knew how to do PR. You have to use GitHub properly at this point, so I think over the course of a weekend I did like ten pull request for various parts of the website.

Then I think it was Ola Gasidlo - who is awesome - who messaged me saying, "Hey, do you wanna be part of the GitHub group?" and I was like, "Yeah, cool." I started to focus a lot on accessibility and stuff... So, PR, PR, PR, but mainly focusing on the community and accessibility parts, and then I guess almost a year later I was told or suggested that I should be a core contributor. So it was quite fast from going from not being in the open source community at all and just barely being a programmer, to I'm now one of the big faces on the website. Which is awesome.

**Nadia Eghbal:** It's kind of interesting, because it seems like there are skills that you also had to learn outside of the project itself. That project might not always have the resources to teach a new contributor before you're able to do other things.

**Charlotte Spencer:** \[00:07:59.24\] Yeah. I think the best thing about the experience is that Hoodie were always around to answer questions. I'd sit in the Slack and I'd be like, "Oh, how do I do this? What's the best way to do this?" I wasn't ever doing it alone, and I think when you get large open source projects you're often maybe doing it alone because no one can hold your hand forever, but there was enough people at Hoodie to just be like, "Hey, we wanna see you succeed, so let's help you succeed." I think that's something that Hoodie does very well; you never really feel alone when you're contributing.

**Mikeal Rogers:** It sounds also like you're bringing a skillset that they were lacking a little bit, as well. The contribution is also really valued because it's not like they're just teaching how to do things that they were doing. You're actually bringing a lot of great skills to the table, as well.

**Charlotte Spencer:** I like to think so. \[laughter\] I mentioned Hacktoberfest, and we've got a lot of really good issues out there. That issue template kind of was kickstarted by me, because Hoodie allowed me to create my own open source project, which is Your First PR. I couldn't proclaim that we should be writing good issues without the open source project that I work with having good issues, so I kickstarted that. And then it snowballed into its own thing, and Gregor in particular is doing a really good work with starter issues and stuff... So I brought that, and I like to think that I brought some life experiences that maybe other people on the team hadn't considered... For example, I'm not nonbinary, and stuff like that; I'm not from Germany... \[laughter\] We're quite German, which is awesome, but I feel like I contributed to some opinions that maybe hadn't been thought about before.

The good thing about open source is that you can really get a lot of diverse opinions should you work hard at trying to get them and maintain them. And also, Hoodie didn't necessarily think too much about accessibility in the beginning, because it was more about "Let's help people to build awesome things", but I was more about "Let's help everyone to build awesome things." So a lot of my initial work was just making the website more accessible, our demo products more accessible, and then started to even take a step back from code and just think about how can we make the community more accessible.

**Mikeal Rogers:** Do you have any things that you did to make it more accessible that you wanna pull off the shelf and talk about? Just bite-sized stories maybe that were small adjustments that really made it more inviting for the community.

**Charlotte Spencer:** I guess my big thing is language. I'm someone who doesn't use traditional she/her, he/him pronouns, so removing the concept of "guys" out of the dynamic. We're not all "guys", so why are you referring to me as such?

Ableist language, like "crazy", "insane" and stuff like that... I also have mental health difficulties, and it's really important for me to cultivate an environment in which people are only saying nice things to each other or neutral things to each other. I don't have time for you to say, "Hey guys, check out this crazy React framework", because it's literal things that could be quite harmful. So I've kind of not started, but definitely doubled down on making sure that the language to be used within our communication was more welcoming.
\[00:11:44.17\] It sounds potentially silly to some, but generally just having a nice attitude, which is something that hoodie had already, but I like to think I'm quite nice, and I like to think that my nice attitude rubs off on other people as well. Nothing particularly code related... I don't really talk about code a lot in my day-to-day; just being nice and thinking about the words that we use. As I already mentioned, our GitHub issues, and stuff like that.

**Mikeal Rogers:** Keeping it nice is actually hard. As you get really big, everybody has to be nice, especially people in leadership. It's hard to keep that many people to it, you know?

**Charlotte Spencer:** I'm saying that I'm a nice person, and hopefully most people would agree, but it's a lot of work. To go back to the Hacktoberfest thing again, a lot of people are really excited about doing their first pull request, but so much so they're not really paying attention. We have 17 people ask to claim an issue after that issue has already been solved, so I have to \[unintelligible 00:12:43.18\]

**Nadia Eghbal:** Oh my gosh!

**Charlotte Spencer:** Yeah, it's a thing. I have to calmly explain, "Hello, blah-blah-blah" - add in all the usernames so they get a notification... "This has already been solved. Always a good idea to check before you claim something, because I don't want other people to step on other people's toes", because it's quite disheartening for you for example if Nadia claimed an issue, and then an hour later saying "I'm working on this right now." It's like, "No, Charlotte, you can't work on this because Nadia's already working on this. Maybe you work at different speeds, but Nadia had it first, so at least let Nadia have the chance of doing it before you try and muscle in." I wouldn't say people are trying to steal continuations off each other, but people need to slow down a little bit, and it's difficult in those situations when you get it ten times a day not to bash your head repeatedly against the desk. But I am again lucky in that most of my conversations with open source communities are quite nice. At least on GitHub. It's only when we get to Twitter that I get frustrated, but yeah... It's difficult to be nice, but it feels good when you are.

**Mikeal Rogers:** That's great. We sort of breezed over your first PR there, but I'd actually like to dig in a little bit more about exactly what it is and how it came about. You said that it grew out of Hoodie a bit - can you tell me about that?

**Charlotte Spencer:** It grew out of Hoodie in the sense that I felt that I had to save space in which to kind of bring out some of my own ideas. Your First PR is a Twitter account - a glorified Twitter account really, which when I have the time I post GitHub issues that I believe to be approachable for a beginner, whether they're a beginner to open source or perhaps a beginner to programming in its entirety.

The story behind that is also underwhelming in that I was sitting in this very bedroom, I think I was in my pajamas - I believe that they were polar bear pajamas to be specific - and I got really annoyed because I'd been in open source for six months at this point and I found it really nice and easy to get into. And it's a strange thing to be annoyed about, but I knew that a lot of people weren't having those same experiences, because a lot of projects are quite difficult to get into because they kind of expect you to contribute or hope that you'll contribute, but they don't really show you how to. So I spent ten hours that day going through all the issues on GitHub - a day before my eyes started to bleed - and I found that a lot of the GitHub issues were either badly written or they were just a type tool with no body and things like that. The people put beginner labels on them, and stuff... I'm like, "How is this a beginner issue when you don't even explain what the problem is? And you just assume that I know..." If I came into Hoodie the first time and you said, "Okay, so we need to upgrade the package" or "We need to write an NPM script to do this" and I'm like, "That's the title? I've never worked with this before, I've never worked with Hoodie before, but you put a beginner label on that? That's what...? It's a lie. That's not a beginner issue."

\[00:16:09.09\] It's a beginner issue for me, who has been working on Hoodie for however many months (over a year now); it's easy for me, but you can't put a beginner issue on something for someone who's never encountered that project.

So I got angry, and then I did a Twitter account and I started to post good issues. That kind of seemed to have a trickle-down effect, which maintainers in particular -- because although it is for new people to do their first pull request, it's actually a slight sub-tweet to project maintainers, saying "You could do better. Here are some people who are doing better. I will help you to be better if you take the time out, and here's a good place to get started." Yeah, so tweets and stuff is what that is.

**Mikeal Rogers:** That's great. It's a great site.

**Charlotte Spencer:** Oh, it's a very badly designed website.

**Mikeal Rogers:** But it has this link to this "first-timers only" article that I actually had never read before, from Kent Dodds. It's fantastic.

**Charlotte Spencer:** Yeah, Kent does great stuff. We kind of started to do similar things like that at the same time, but not knowing of each other. We kind of know of each other now and we support each other's work a little bit. It's good. The more people are talking about this, the better.

**Mikeal Rogers:** Awesome. I think we're gonna go into a break now, but when we get right back we're gonna get into what it's like to be a maintainer. Stick around.

**Break:** \[00:17:37.04\]

**Mikeal Rogers:** Charlotte, one of the complaints that I get, even when we... You know, we just did this great thing Code and Learn at Node Interactive where we have 20 people submit their first PR, and a few of the contributors woke up and were a little bit grumpy because they woke up to 20 new PRs that they needed to review... \[laughter\]

**Charlotte Spencer:** Oh, yeah...

**Mikeal Rogers:** And generally, one of the problems that we get into is that there's too few maintainers, and increasing the funnel actually puts a lot of new load on them to get at these PRs. What are the conversations like with project like that that have fewer maintainers that you're trying to get to be more welcoming and to bring in more newcomers?

**Charlotte Spencer:** I'd say firstly it's actually okay for those maintainers to be grumpy about something. It's how they deal with it after the fact... I don't mind if you wake up and you're like, "Oh, I don't wanna review these pull requests", because sometimes it takes me a notoriously long time to review something, particularly for the Your First PR website. But it's kind of how you deal with the pull request... If you're like, "Oh, I don't have time to review this" and "Please, only contribute to things that I've asked you to contribute to" - that's just a bad attitude, and shame on you. But it's okay to be grumpy about something. As I already mentioned about the numerous people not paying attention to the status of an issue, for example, it's frustrating. Be more productive with that frustration, I suppose, but it's okay to not want to review something. You don't have to review something, because as a maintainer, you don't actually owe people anything. Yes, you're the head of a project, but you're the head of a project in which you work for free in your spare time, and contributors shouldn't expect too much from a maintainer.

\[00:20:06.28\] But at the same time you are an open source project, and you are calling for contributions, so I don't know... You can be grumpy, that's okay, but... If someone's doing their first ever pull request, you need to remember how terrified they probably are, and how in their head they're doing a good thing for you, and they probably are doing a good thing for you, so it's okay to take a little bit of time to not review that pull request - maybe a week or a month. Again, you don't owe anybody anything, but just conduct yourself as nice as possible when you actually engage with that person, because like I said, they're doing their first pull request, they think they're doing you a favor and they're just really excited about potentially contributing code to something major like Node.js for the first time.

I feel like if we spent more time remembering what it was like to be a first-time contributor, we'd all be a little bit nicer to people.

**Mikeal Rogers:** Yeah, it's fine if you wanna complain in the backchannel, just don't take it out on the person sending the pull request.

**Charlotte Spencer:** Yeah. I complain all the time. I have a private Twitter account where I just complain about everything, and I complain in private Slack channels and the communities I admin, and stuff. Everyone who knows I'm nice also knows that I am one of the biggest complainers in the world. A lot of people won't see that directly because it doesn't help anybody for me to do that.

**Nadia Eghbal:** What do you think people forget about what it's like being a new contributor? What is that person thinking about and what are they hoping to get out of the experience.

**Charlotte Spencer:** I've been doing programming for two years, which isn't a long time, and I still wake up most days anxious about the program that I'm gonna do... Or I'm trying to do some pull requests for Hacktober, I'm like "Oh gosh, what if they don't like it? What if I got it wrong?" and I even do this when I'm reviewing other people's pull requests for Hoodie. It's like, "Oh, what if I missed something? What if I did this...?" Maybe it helps that I have anxiety issues, I guess, so I'm always kind of in that anxious state. Just wonder what it feels like whenever you do something new for the first time. Like, you have a first date, or something; or you drive a car for the first time. It is nerve wracking.

Even if you have to write it down on a post-it note somewhere - new contributors feel anxious, scared, worried that they've done something wrong. If you can remember that going into when you review a pull request; even if you're reviewing a pull request for someone who's done 6,000 pull requests, just remember that things can be scary forever, so just treat it with a little bit of... You know, give someone a hug, or something, because it's a scary thing. We just need to remember that everything is actually quite difficult.

**Nadia Eghbal:** Here's what I found interesting about... In fact, they've both recently learned how to code, and also dove into the world of open source because they think they are really separate things, too. I've met people who are very experienced with software development, but have never made an open source contribution or don't even know what GitHub is. I think it sometimes \[unintelligible 00:23:29.16\] that a first-time contributor doesn't know anything about software either, and it's not... It's like the social aspect itself can be scary enough on its own, it's not even about code or anything.

**Mikeal Rogers:** Yeah, I loved that first date analogy because it captures how awkward it is. \[laughter\]

**Charlotte Spencer:** Oh, yeah.

**Mikeal Rogers:** You just don't feel comfortable in the position that you're in.

**Nadia Eghbal:** And you could have gotten on other dates and been really comfortable with other people, but this date is awkward.

**Charlotte Spencer:** Yeah, I mean, I just submitted a pull request but it hasn't been reviewed in three days, so should I call them, or should I wait for them to call me? It's difficult. \[laughter\]

**Mikeal Rogers:** Wow, we could really take this analogy pretty far, I think.

**Charlotte Spencer:** \[00:24:08.07\] I could write a book about it. \[laughter\]

**Mikeal Rogers:** That's be great. I hope that you put together some kind of comic strip with that, it would be brilliant.

**Charlotte Spencer:** That would be great.

**Nadia Eghbal:** That's the awkward part of it too, right? A maintainer shouldn't feel pressured to respond to anything immediately, but when there is an early response, it also really increases engagement apparently. So maybe even just like saying, "Hey, I see this. I'll get to it later" is useful, so people don't feel like they're not getting anything from the other side.

**Charlotte Spencer:** Yeah. I had this lovely person... I opened an issue like a year ago and I wanted to turn the Your First PR website into a -- set it up \[unintelligible 00:24:59.20\] so that it could take blog posts, and this really lovely person spent a long time doing that for me, and it took me like three months to review it, to the point where they closed their pull request because I just didn't... I had a few times said, "This is really good. As soon as I get a moment I'll get to it", but life finds a way to ruin everything, so it got longer and longer before I could review this pull request. And he closed it, and then ten minutes later I was like, "This is really good work. Can you re-open your pull request and I'll merge immediately?" And I did, and I obviously apologized profusely, so much so that they actually did some more work for me, and I have the tab open. If you're listening, friend, I will merge it as soon as I get off this interview. \[laughter\]

**Nadia Eghbal:** I like that. It's kind of just like having open channels of communication so that people understand that everyone is trying. I feel that way about even just like e-mail and everything in general; meeting with people... We're all trying our best with the time that we have.

**Charlotte Spencer:** Yeah. I'm actually merging the pull request right now. Yaay!!

**Nadia Eghbal:** Live merge! Nice!

**Mikeal Rogers:** That's great!

**Nadia Eghbal:** Kind of shifting gears a little bit, I feel like a lot of times that people talk about contributions, they talk about contributing code, and the conversation we've had even now - there are plenty other contributions you could make that aren't code related; what are some categories of contributions that you think maintainers forget to ask about?

**Charlotte Spencer:** Everything that isn't code... I do this talk called Open Open Source, which is about 20 minutes in which we basically have a conversation much like we're having here about how to improve the experience and what the experience is like. And 15 minutes in, I'm like "You'll have noticed that I haven't talked about programming or any code at all" and then I flash a big slide saying that code isn't important, because... You know, let's say Node.js, for example - and I use that as an example because Mikeal is on the call - you know, someone could have written Node.js, and it was a thing, and it was perfect from the beginning. But imagine if nobody knew about Node.js; how do people find out about Node.js? Well, there are people doing tweets, and there are people writing articles, and there are people that are moderating the community and the GitHub issues and the pull requests, making sure that they were good and that they were reviewed... There are people who you never hear from who sat in their room thinking about how you can take Node.js to the next level... All work that we did behind the scenes at Hoodie as well - there's a lot of behind the scenes work of just thinking, which I think that is underrated when it comes to open source. The code doesn't just happen, the pull requests don't just get merged. There's loads of discussion and there's loads of sitting quietly in your room thinking about what the next step is. But then again, you can't write an issue to someone saying, "Can't you do some thinking for me?"

\[00:28:10.04\] A concrete example is does somebody wanna write a blog post about Node Interactive? Does someone wanna write a blog post about the event that Hoodie just spoke at? Can somebody help us design a new logo, and things like that? There are millions of things that I can't think of right now that people can do that can be way more important than the code that you're writing.

**Mikeal Rogers:** And some of them are just fun and community building. I remember in the io.js days, some sectors logged an issue that was like, "Hey, let's talk about fun logos", and it blew up to like 500 comments.

**Charlotte Spencer:** Yeah, I remember that.

**Mikeal Rogers:** Yeah, and it's just people posting, like -- some of them serious brand treatments and some of them hilarious, these quickly photoshopped things, and it was really fun. A lot of the way that people found out about io.js and got interested in it was this crazy logo thread.

**Charlotte Spencer:** That's pretty much how I remember io.js being a thing, that logo thread. I did a very small version of that for Your First PR when I was like - a couple of days after I started the thing - "Can someone make me a logo?" There were ten people who I had never heard of it before, I never had a conversation with before... Obviously, of varying quality, but I merged them all because I was like, "Oh, now I have ten logos, so I can do whatever I want." But it was just nice that people were trying... And people saying like, "I'm not a programmer, but you helped me to do a pull request for the first time, of something that I'm really passionate about, which is art." People don't spend enough time thinking about art when it comes to programming really.

I consider programming an art. I am an artist, I just happen to do art by the medium of code. So those are just awesome contributions that make me happy. Sometimes even more happy than "Oh, I've built a thing, an app!" or "I turned your website into a blog." If someone's like, "Oh, I spent ten minutes in Paint doing a logo", I'm like "Oh, that's amazing!"

**Nadia Eghbal:** \[laughs\] This all sounds really great for big community projects. Hoodie has a very active contributor community, and Node obviously has a very large community... Do you think this is also true for a small project that has just a couple of maintainers, where they feel like they're doing the bulk of work? If they put something out there, will people respond?

**Charlotte Spencer:** I think it very much depends... It's much harder for two people who don't have followers on Twitter, for example. Just two cool people, doing a cool thing - it's much harder to get your project out there, which is also another tertiary reason I guess for Your First PR, because I wanted to highlight project doing really awesome things but didn't have 5,000 stars on GitHub and didn't have their own newsletter and things like that; there are so many people doing awesome things, but they don't often get the help that they need because they're not big and awesome like Rails, or RSpec, or Node...

Even a little bit to Your First PR - although it's not really a code-based thing, there are a lot of people contributing their projects and issues and things like that. So if you're tiny it's much harder, and there's a lot of work that needs to be put in there.

**Mikeal Rogers:** I think some of these things are even more important for small projects, like being nice and really welcoming... Because at the end of the day you do have less people coming because you're a smaller project. You need to work even harder to try and retain them and make their experience pleasant.

**Charlotte Spencer:** \[00:31:54.00\] I imagine it must be quite stressful, because you have to get everything right. I would expect someone to have a code of conduct, have a readme me that I can actually understand, and things like that. That's a lot of work, and if you're just one person who wrote a 500-line module about how to ride a unicorn, but you really want contributors but no one knows about you - if I come into your project, I do unfortunately have this expectation that you've got a few things right already, like having a code of conduct and things like that.
I have quite high standards for any GitHub project because I believe that we can do good things and we can have good projects. Small projects is on my list of things to think about on how we can actually help them to get help. I have written a blog post about things that you can do to make your project more accessible, but that doesn't necessarily mean anything if you're not able to attract people to your project to help. I need to think about that.

**Nadia Eghbal:** Can you talk about that a little bit? I think that when people think about strategies for getting new contributors sometimes it's like "Make sure your documentation is really good and you have all these nice things written out." That's also like, you have to go out to meetups and talk about your project...

**Charlotte Spencer:** Yeah, it's exhausting.

**Nadia Eghbal:** Very different things, right?

**Charlotte Spencer:** Yes.

**Nadia Eghbal:** And having to balance out... It almost seems like some of the inbound stuff is like must-have. Once you can actually get somebody looking at your project, you've gotta make sure they stick around by giving them clear things to do, but no one will ever find it if you don't ever put yourself out there.

**Charlotte Spencer:** Yeah, and I think that... Oh, I'm too tired to go to meetups, and the only events I go to now - and it sounds a little bit arrogant, but the only events I really go to are either really niche ones where it's a couple of friends talking about something, or something that I'm speaking at. Because attending meetups is extremely exhausting. It doesn't help if you have social anxiety, like I do.

There's a lot of expectations on small projects to be like, "You have to be awesome at everything, and you need to tell me exactly what you need from me, and you need to sit there with me and help me, because you're really tiny and you want my help, so you have to do everything for me." It's like, "Actually, no. I just wanna play Playstation and hack on my kids, but at the same time I want this, this, this to succeed." So you have to put that extra effort in, because you are just one person with an awesome thing to say, and it's a lot of physical and emotional labor.

I guess I'd recommend two things. One, have a code of conduct; I think that is the most important part of a project going forward. You need to set out your intentions immediately. And have a really good readme. A really good readme can go a long way. I guess it's like a pitch - I have opinions about that, but you're pitching yourself to people who both want to use you and help you. Like, "This is Node.js. This is Hoodie. We do this thing. We are made up of blah, blah and blah, and we'd really like your help on blah. Here's how to get started" etc.

If you can do a really good pitch in the readme, a pitch that's nicely worded and is friendly, liberal use of emoji and just a nice attitude, you're probably more likely to get someone going, "Oh, these people sound cool. I think I'll give them a hand." So I guess it's just about that nice thing again.

And probably have some kind of social media presence on Twitter and tell me what your project is, so I can spam it out to people or retweet it on Your First PR Twitter account.

\[00:35:48.18\] It's sad, but you still to some extent have to know people... And I don't necessarily mean famous people, because I have no time for tech celebrities, and the concept of such, even though I know that I may be considered some form of name in the open source community -- well, I mean, I've been invited on this podcast, I guess... But know people who have the time to help you with things, and can share the project with friends. If you know that somebody has a specific problem, and you can be like, "Well, I solved this problem, so if this works for you, can you share it with people that you work or in your Slack channel?" So you don't need to... I don't know what I'm saying, but it's a lot of hard work.

If you start with a good readme, maybe you have a couple of beginner issues that you can... Or even you just ask people to kind of collaborate with you and have a nice attitude, I think that can go a long way.

**Mikeal Rogers:** I think that the readme thing is so important. This is probably one of the biggest and positive shifts from GitHub - how important and upfront GitHub made the readmes.

**Charlotte Spencer:** Yes!

**Mikeal Rogers:** It really does set all of the expectations for your project, good and bad. I have some projects where the readme literally says, "Don't use this. Don't try to contribute to it." \[unintelligible 00:37:10.07\] and then a lot of other readmes that say the exact opposite.

**Charlotte Spencer:** It's about intention, and if you can make your intention immediately clear, you can either save someone a lot of time, so they know not to hack on Mikeal.js, because it's not ready \[unintelligible 00:37:26.16\]. Or you outline a few things you're looking to ship. Intention is key, and I can probably do an entire interview topic about intention alone. Make yourself clear, don't confuse people, and you can go a long way.

**Nadia Eghbal:** I think about documenting everything also. Not just documenting how your products works, but it's also documenting processes, documenting the time that you do or don't have available... All that stuff.

**Charlotte Spencer:** Yeah, which is a lot of what we do in the Hoodie editorial team. It's like, "How do I do this thing? Why are we doing this thing? What is our goal and how are we gonna get there?"

**Nadia Eghbal:** For projects that have beginner-friendly issues, how do they decide what counts as a first-timers only type issue? Because that seems like an imbalance that you even felt from your first PR where people tagged things as "first timers only" and they're very clearly not. But it's hard to remember sometimes, right?

**Charlotte Spencer:** It's super difficult, and I think that there's issues for a beginner to a project that assumes that you have some form of experience, and then there are the issues where anybody who's never used, or potentially hasn't even programmed before, could do it. In a lot of the "first-timers only" issues that we have in our Hoodie project, we will outline every single step that you need to do to make the pull request, from the commit messages that you should use, how to fork and make a pull request, the line-by-line changes that you could do in the HTML to make this thing work, how to test and what it should look like. But I guess the other is "Give me enough information so that I can google the problem, find a solution, and if that doesn't work, at least I made a good go of it."

It's a sliding scale, and I don't think anybody who says... I don't know if there is a true beginner issue, but as long as people are around to help the people who might get stuck on the beginner issue, then it's okay. But there's not such thing as easy, and this is something that I say a lot as well. Easy is never easy or simple, because someone will inevitably struggle with the thing that you think is easy. \[00:39:54.23\] Some people use "easy" as a label for their pull requests, and it's just a fallacy. "Beginner" is better; it's a little bit of a vague one, but it's better than the alternative, I guess.

With Hoodie, we always have someone around that will be able to guide someone if they're not doing so well on an issue. So even if it's a hard beginner issue, we'll help you get there in the end. And if you can't get there in the end that's okay, but you made it some of the way. As long as you learn something, then we're happy.

**Mikeal Rogers:** It sounds like the most important thing is to build the support system, and then the support system can improve on itself by improving the criteria for first-timer issues and stuff like that. But as long as you have that support system there, you're gonna be able to help people out anyway, right?

**Charlotte Spencer:** Yeah, I mean building a support system is extremely difficult. I'm an admin for a relatively new Javascript Slack called WeAllJS.org, which was started by Kat Marchán, and I can tell you that 50% of the conversation and the messages sent in that Slack group is the admins in the private channel going "How can we be better? How can we be more supportive?" and there is no instant answer to that. I think you just make mistakes and then you build upon them. We certainly did make a couple of mistakes in the beginning of building that community, but they informed the rest of our work into making that community supportive. I guess you can never get it perfect, but trying is nine-tenths of the problem, I suppose.

**Nadia Eghbal:** I think it's a good time to take a break. When we come back, we'll talk about how to get new contributors coming back.

**Break:** \[00:41:46.18\]

**Nadia Eghbal:** In the beginning of this podcast we were talking a little bit about the need to keep first-time contributors going in some way, and figure out how to give them medium-level opportunities to continue being involved. Can we come back to that a little bit and talk about how to retain first-time contributors?

**Charlotte Spencer:** Well, the first thought that came into my head was actually transparency. If you let people know what's happening in the project, then they're more likely to be able to keep up with you, and they'll also have an idea of where they can kind of contribute. A lot of programming languages and frameworks are doing This Week In... So you have This Week In Rust, This Week In React, and it lets you know what things were merged, who did their first contributions, what the goal for the next few months is. If you can just be a little bit transparent about what's going on, I think that there's a danger of -- and this happened in Hoodie when I first joined, and I had to say "Can you cut it out?" because there'd be a lot of conversations in backchannels that I wasn't a part of, so I wouldn't know where to go from those initial contributions.

\[00:44:08.14\] I didn't know what was happening half of the time. Someone would be, "Oh yeah, we've talked about that the other day", and I was like, "Well, you know, I wasn't there for that conversation and you didn't document it anywhere, so how am I supposed to know where to go next?" So a little bit of transparency, releases where you actually explain the things that happened during that release, This Week In Rust, newsletters and such... If everybody is as informed as you, they feel more comfortable and confident in being able to follow on the journey, I guess.

**Nadia Eghbal:** When I first thought about it, I was thinking "what are the next issues you can throw at a contributor to keep them going?", but what you were talking about is more about getting someone involved in the community and making it fun, and having them feel an emotional connection to the project, right?

**Charlotte Spencer:** Yeah. Seeing everybody as equals, rather than maintainers and contributors is a big thing. If you can keep people involved in the conversations... This is something that I believe just in the general day-to-day. I feel like having a junior in your team is extremely valuable because they question everything that you do. And having new contributors that you actually go, "I'd like to hear your opinion" can be massively valuable for your project. It makes them feel more included, and also informs them about what's coming up next.

If I said to them, "Okay, we're gonna rebuild everything in React", which obviously would never happen, because Hoodie is a framework, but for example... "We're gonna build everything in React", so maybe for the next couple of weeks your contributions could be learning React and being able to help us build these certain things, and helping people who don't know React to learn React, and things like that. You don't have to be committing work and making pull requests to contribute. A lot of it has to do with conversations and knowing the right words and things like that.

Having mid-level GitHub issues is a great thing; it's something that we at Hoodie aren't necessarily doing a good job of at the moment, but I do know that we keep potential contributors and users informed of what we do on a day-to-day. I think that's very valuable.

**Mikeal Rogers:** I think there's this interesting contradiction that you eventually get into at scale between transparency and communication. Transparency is like table stakes, right? People can't get involved if they can't see it happening, so it has to be transparent. But eventually so many things are happening that nobody can reasonably actually figure out what's going on; there's just too much. And we're definitely way beyond that with Node now, where there's just so many things happening and so many different groups all the time that it's really hard to figure out the top-level overview of what's going on.

We're continuing to just try to figure out ways that we can inform people. We actually have Jenn Turner who does the Hoodie newsletter...

**Charlotte Spencer:** Oh, I love Jenn.

**Mikeal Rogers:** She's working on the newsletter for Node.js now, so that we can try to keep people more up to date...

**Charlotte Spencer:** That's awesome. Jenn does great work when it comes to communicating, stuff like that.

**Mikeal Rogers:** Yeah, she's fantastic. Really fantastic. And I think also we've even had some contributors show up that are saying, "You know what? You all documented these policies a while back, but actually when I watch you operating, you're operating a little bit differently. We need to get the policy updated." When everything is out there in public, eventually people just kind of show up to start contributing to it if you value it and if you make them feel welcomed and everything.

**Charlotte Spencer:** \[00:47:48.29\] I actually have contributed something to Node such that my name pops up every so often when you do a new release, and I updated your code of conduct, because I knew where to go and I knew that that's how the community worked. But yeah, I think about Node.js largely when it comes to kind of... Because Hoodie isn't as big as Node.js, but hopefully one day will be, so when I'm thinking about "Okay, what's next?", I think about "How does Node do it?" and sometimes, "How can we do it better than Node are doing it?" Because I imagine that you must have -- it is difficult to run something that is the largest anything in open source right now.

So it's good for me to look at maybe how things don't necessarily go the way that you planned, and for me to go "Okay, well how can I learn from that, do it better and then feed it back, so that they can do it better as well?" Because for a short time I was on the Node.js Inclusivity Working Group for example, and it's... Node is huge, and kind of overwhelming.

**Mikeal Rogers:** Yes, yes, that's definitely true. For us, in a year and a half we went from 70 to now over 90 committers. It also happened really quickly, and while that was really scary to go through, it also had this kind of side benefit of us not really being able to cargo cult any process. The process had to change really quickly.

Looking at the Hoodie project and Your First PR, I think it's all coming from the same culture of openness and inclusion, and the kind of open open source liberal contribution agreements where you're getting people to commit rightfully quickly, and stuff like that.

With the Node project, we've just been constantly iterating on all of the processes. The processes are not set in stone. The processes are immutable, they need to change all of the time, and everybody needs to get comfortable with changing them. That then allows us to change and scale as we go forward.

I think that one of the worst things that I've seen projects do, especially huge projects, is that they find a process that works at the scale that they're at, and then when they double in size, it doesn't work anymore and they don't feel enabled to change it. They feel like, you know, this is the only process that enables their values, rather than going back to the values to create new processes.

**Charlotte Spencer:** Yeah. One of the first things I say when I give my Open Open Source talk is "Although the word is in the name, open source is actually incredibly closed", because there definitely is that cargo culting. I'm subject to that as well, because once I'm comfortable with something, I don't like things to change. But when I work in open source, I have to be prepared for things to change, even on a daily basis, which is not necessarily something that happens in Hoodie right now, but I imagine it probably does happen in Node quite a lot, because you have all of these different experiences and opinions, and sometimes you just get it wrong. I think the main thing for open source maintainers is to realize that 1) they're not a benevolent dictator; that just doesn't work in today's open source \[unintelligible 00:50:49.13\] And to admit when you do it wrong. A lot of the stuff that we talk about in WeAllJS is we have to be immediately prepared to realize when we have done something wrong so we can make it better in the future for everybody.

Be open to change, that's literally what open source is about, right? It's open, and if we cannot be open, then we really do need to change that name.

**Mikeal Rogers:** \[laughs\] Exactly.

**Charlotte Spencer:** Like "door slightly open between the hours of five to ten PM" source, you know? \[laughter\] Working title.

**Nadia Eghbal:** I like these \[unintelligible 00:51:31.29\]

**Charlotte Spencer:** I'm hilarious, right?

**Nadia Eghbal:** You are hilarious. \[laughter\]

**Charlotte Spencer:** Yay! Validated!

**Nadia Eghbal:** Shifting gears a little bit, something else you had mentioned in the beginning of this podcast was Hacktoberfest, which is happening this month. For people who don't know what it is, it's an online event to get new contributors to projects, and if you make four pull requests on a project, then you get a T-shirt.

\[00:52:00.11\] So for events that are focused on getting new contributors to projects, I think there's a lot of good will among events and initiatives that want to increase contributions, but then having to balance on the other side, of not upsetting maintainers who might not be expecting a barrage of PRs, who might not actually be looking for contributions, do you have any sense around best practices for contribution-type events to run these in ways that are actually mutually beneficial for both sides?

**Charlotte Spencer:** Probably not, but I'll give it a go. Which part do we wanna talk about first - how to do an event, or how to \[unintelligible 00:52:37.02\] those kind of low quality, spammy type PRs that I've seen happen recently, like how to stop those? Because my first thing is if you wanna do an initiative, then particularly if it's like a small project or something that kind of isn't used to have been barraged by pull requests - talk to the maintainer first. I know that might sound really obvious, but...

**Nadia Eghbal:** It's not, apparently.

**Charlotte Spencer:** It's open source, but people don't like talking to other people. This is the most I've spoken to anybody in like a week. Communication is really difficult, but if I walk up and say "Hey, I'm gonna do an event for Hoodie (imagine that I'm not a Hoodie contributor at this point) and I'm gonna get a hundred people in a room and we're all gonna do our first pull request through Hoodie by the end of the day"... Like, now putting my maintainer hat back on for Hoodie, I would be happy, but also terrified and wondering what on Earth is going on because I just get barraged by these things and I was hoping to have a quiet night at home, and now suddenly I've got a hundred pull requests to deal with...

That initial communication of like "Hey, I'd really like to do this thing. Do you have the capacity to deal with me doing this thing?" Because at the end of the day y'all are doing the contributions, but I'm the one at the end of the day who's sitting there and ticking all the boxes off and merging those PRs or not merging those PRs, and explaining why those PRs can't be merged... So before you even do the even or even start to organize the event, talk to people first: "Is this a good idea? Will anybody actually be interested, and can the projects support these kinds of contributions right now?"

If the answers are yes, then I guess we get started with our first event, which is awesome. Before I was a developer I was an events organizer for the tech community, and it's an extremely hard job, but I don't think... For these kinds of things you need to be super professional, you need a comfy chair, some water, some snacks, depending on the length of the event, and just a nice, warm atmosphere. I think that covers 99% of the things that you need to do.

I am doing exactly that right now at home. I'm in a comfortable chair, I'm wearing my hoodie because it's freezing in here, I have some water, and I'm contributing to this podcast. Maybe I'm extremely low maintenance, but if you tick off those basic human needs and people are very comfortable and are starting to do these contributions... You don't have to have sponsors or a fancy venue, or whatever. You can rent out the basement of a pub for three hours and put on my Spotify playlist and then we can just do some contributions.

The main thing is that people have support, which is probably the hardest part. \[unintelligible 00:55:40.08\] teaching people Node.js, and you spend six hours in a room with, obviously, regular breaks; you have a bathroom, you have some food and drink, and then you just support each other. It doesn't have to be fancy.

**Nadia Eghbal:** \[00:55:56.21\] How much hands-on support do you think organizers should expect to give to people that haven't contributed before for an in-person event? Because I was surprised by this.

**Charlotte Spencer:** You should probably assess the skill levels of the people. Hoodie had done events where it's your first ever contribution, but they've also done events where "Hey, it's just some friends who are quite confident in their abilities hacking together" and a shared goal. So know the comfort level of the people who are coming to the event first, and be specific about what kind of event it is going to be as well. If it is an event for beginners, then organizers should be prepared to be spending a lot of time helping people. But if it's just a casual hackathon thing where at the end of the day you might have made a pull request, but it's also just kind of a bit of a get-together, then it would definitely be less hands-on.

Again, we go back to intention. What is your intention? Know that from the beginning; communicate with the project, and then it just comes down to admin, which is difficult... But once you know the intention, it's easier to do.

**Mikeal Rogers:** Also, a pro tip: if you're targeting new people, be prepared to spend the first hour at least just setting up their environment.

**Charlotte Spencer:** Oh, yeah.

**Mikeal Rogers:** That's what new means. New does not mean, "I am here with your entire source code, repository checked out and the build system working." That's not what that means.

**Charlotte Spencer:** Yeah...

**Nadia Eghbal:** Very good point.

**Charlotte Spencer:** The first hour of Node together is like "We're now gonna get set up and we're not gonna move on until people have installed Node. Then we're not gonna move on until people have installed this NPM package", because if we let people race ahead, then people get left behind. Things like Rails Girls (London) they do an evening setup before the actual event, so we can be like "We're gonna have some drinks and some olives, or whatever snack food people eat (olives are gross - you heard it here); let's spend three hours casually getting set up so that we can do Rails in the morning."

Obviously, if you can't make the setup event, then there'll probably be some extra preamble at the beginning of the event trying to help people again. But be prepared to be taking people through a setup. There's absolutely no way that people are gonna be fully prepared.

I used to do Javascript workshops, and it was more than a handful of times that people turned up without a laptop. So maybe even having spare laptops where people can just run a repl or something, you know? Disaster planning is something that you learn very quickly when you're an events organizer. Assume that everything is going to go wrong, and then how are we gonna fix that?

**Mikeal Rogers:** Yeah.

**Nadia Eghbal:** And then on the maintainers side, it's natural I assume that some people are just gonna try to game the system, submit things that are not great for the sake of saying they contributed. Are there things at events that the event organizers themselves can do to reduce from happening?

**Charlotte Spencer:** Well, if the event organizers are actually maintainers of the project, you can be like "Well, I'm not accepting this pull request, and here are the reasons why - because all you did was add some spacing in one commit and then take away some spacing in the second commit. That's not a pull request. Congratulations on making a pull request, but that is not the goal of this event."

If you're not a project maintainer, hopefully you'll feel comfortable enough to be like, "Look, we are not expecting you to do something amazing, but we do expect you to do something where the positives outweigh the negatives. Bear in mind that someone has to sit there and review this pull request. And if they've got 500 pull requests where 250 of them are you committing some white space and then uncommitting it, like... Don't do that, because you're gonna make people sad, and the goal of open source is not to make people sad."

\[00:59:59.04\] That should be the tagline of open source - "We're not here to make people be sad, we are here to contribute and be a community." The only time I really see spammy PRs is when we have events like Hacktoberfest and 24 Pull Requests. I know that a few project maintainers are struggling... To some degree I am with Hoodie at the moment, where people are spamming like "I wanna do this, I wanna do this" or just committing to one known project with the spammiest pull requests to get a T-shirt. I guess that's just kind of acting in bad faith. I don't ever wanna tell somebody that their contribution is not valuable. You do the really spammy pull request, but hey, at least you managed to do a pull request for potentially the first time.

Maintaining a project is a lot of emotional labor, so I have to be the person to be like, "Look, this is not something that I would consider to be something that I can put into this project. I'd appreciate it if you didn't do such pull requests."

They're obviously just doing it for a T-shirt, but it's really difficult... You have to be that person who weighs the values of other people's work, and that's really dangerous territory. We had this conversation with Andrew Nesbitt's project 24 Pull Requests a year or a year and a half ago, being like "There are lots of people who are doing spammy pull requests, so somebody who's got 300 pull requests by the end of the first day because they just committed some white space to each of their projects - how do you deal with that?" I wasn't comfortable taking people off a project or removing them from the contribution list because they still did something, and the moment we start to discuss who's more valuable than other people, we get into some really dangerous territory.

So I think in the end people removed pull request counts from all profiles or something like that, and made it so that everybody's contributions were valuable. Because it is not for me to reasons - unless it's obviously spamming - what is and what isn't valuable in general to a project.

**Nadia Eghbal:** So looking ahead, beyond Your First Pull Request and beyond becoming a full-time regular contributor, what happens when people's personal circumstances change and open source projects are not something they can spend a lot of time on? How can those projects navigate the flux from contributors who, you know, if you had a couple that were contributing a lot at one point and are now kind of pulling back, how does that affect the project and how can they avoid losing steam?

**Charlotte Spencer:** It can be pretty daunting if you're a small project. When the Hoodie editorial team started, it started over the Christmas period, which was a terrible mistake, because obviously people went "Yeah, this is awesome" and then disappeared for like three weeks; that's going to happen, but we need... There's an amazing person who does most of our TGIF, Friday link posts for Hoodie. And they are to go away for three weeks, or they're on holiday, or they're getting married or having a baby, or they're just tired, or they're sick, or something, so that person can disappear without any notice, and that is annoying... But you are not paying that person to do any work, so you have to be prepared to have those people jumping in and out at all times.

The best thing to do is have someone who can take over from that work, so if this person goes off sick, then Gregor or Jenn step up to write the newsletter for that Friday, or something like that. And I'll make sure to make some time to review whatever comes out of that if the regular person's not there, and things like that.

\[01:03:51.10\] It's kind of like a tag team, no one's ever gonna be available at all times, so you need -- and this is just a general rule for projects, and even in the workplace... Don't pigeonhole anybody, because if only one person can do the thing -- I think it's called "the bus factor", like "What would happen if that person got hit by a bus?", which... Tech has this horrible way of being really quite violent in the terminology it uses. But if that person got hit by a bus, could anybody continue? And you need to think about that in open source, because no one's gonna be around forever, because people enjoy taking naps, and not doing open source.

In fact, I'd encourage people to spend less time working on open source at points in their life, because it can turn into a second job and it can be very exhausting. But yeah, as a project maintainer, be prepared that people could go away at any point. So if you have abandonment issues, then that's something obviously one needs to work on. You just need to either take on the work yourself, or have three other people that know how to do exactly the same thing.

Easier with larger projects like Node.js, probably. We've got it quite down well in the editorial team, but there have been times in Hoodie where the only work that's being done is a greenkeeper doing an automatic pull request to update a Node version or something. Lulls are fine. Hopefully, lulls mean that people are just taking a holiday. But yeah, we can't expect anything from anybody. You're gonna have to deal with it, unfortunately. There's no magic solution to that, it just happens. Expect it.

**Mikeal Rogers:** And people should take naps, people who take care of each other; in and of themselves, for sure. \[laughs\]

**Charlotte Spencer:** Oh, yeah. I'm about to stop giving my open source talk because it's being done now, but my next talk is about self-care, and naps, and stuff. Everytime I give my open source talk, the most quotes phrase on Twitter is "Take more naps", because 1) they're great, and 2) you're probably overworking yourself. If you'd spend more time taking naps, your contributions will probably end up being more valuable, because you're more rested and you're less stressed. Open source will be here forever. If it's not you doing it, somebody else will do it, so just go to sleep for a bit. No one's gonna hate you, and if somebody does hate you, then send them to me and we'll have some words.

**Mikeal Rogers:** That's a great note to leave it on, until we have you come back to talk about self-care for another 90 minutes.

**Charlotte Spencer:** Oh yeah, I'd love to.

**Mikeal Rogers:** It will be awesome! Great, thank you so much for coming, this was great!

**Nadia Eghbal:** Thanks, Charlotte.

**Charlotte Spencer:** So we're actually ending on me threatening people, that's how we're ending this podcast... \[laughter\]

**Nadia Eghbal:** Sounds about right!

**Charlotte Spencer:** I love everybody and I am a very non-violent person. Disclaimer.

**Mikeal Rogers:** Thanks for coming, it was great!
