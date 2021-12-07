**Adam Stacoviak:** Hello and welcome to The Changelog. This show is about getting to the heart of open source technologies and the people who create them. On today's show we're talking about GitHub's recent Open Source Survey with Frannie Zlotnick, Nadia Eghbal and Mikeal Rogers. You may know Nadia and Mikeal from our other podcast called Request For Commits (changelog.com/rfc).

We cover the back-story and key insights of this open data project from GitHub, which sheds light on the broader open source communities, attitudes, experiences and backgrounds of those who use, build and maintain open source software.

So we have a fun show today, a different show than maybe our normal episode of the Changelog. Jerod's sitting out, he's got an awesome baseball game to attend with his kids, and we have this cool show called Request For Commits - Nadia Eghbal and Mikeal Rogers host that show, and today we have a show kind of peeling back the layers of this Open Source Survey.

Mikeal, you're here, so you might as well say hello...

**Mikeal Rogers:** Hello... It's nice to be on the Changelog.

**Adam Stacoviak:** Yeah, it's been a while. On an episode - or I guess the after show of Request For Commits we were sort of chatting (this was like early this week, I think)... And Nadia, you and Frannie have done this cool thing - and many other people too, we'll talk about that... This open source survey conducted by GitHub. Nadia, you can say hello as well, since you're here...

**Nadia Eghbal:** Hi!

**Adam Stacoviak:** And we also have Frannie here. Frannie, you're in data at GitHub? What do you work on there?

**Frannie Zlotnick:** I am a data scientist. I work on mid to long-term research projects for internal, and in this case, sometimes external audiences.

**Adam Stacoviak:** And what is it about data that gets you excited?

**Frannie Zlotnick:** I really love being the first person in the world to see a thing. I like to know something before anybody else does.

**Adam Stacoviak:** Interesting! And carrying somewhat of a tradition of this show, we like to kind of dig a little bit into somebody's back-story... So what's your story? You're in data, you work at GitHub, but what's some of your back-story that we can share with the audience to give some context to who you are?

**Frannie Zlotnick:** Well, my background is academic social science; I was chained as a political scientist and I got interested in computational social science, which basically means doing social science with data sets that are too big to handle with the normal tools, so I started doing a little bit of CS and data mining type methodologies, and that kind of lead accidentally to working at GitHub. I actually interviewed before I knew what GitHub was... \[laughter\]

\[04:12\] I sort of fell into it accidentally, but it appealed to me because really the fascinating data on GitHub is all really social data; it's about how people are working together to build things, and that's actually a really fantastic place to be doing data work from a social science perspective.

**Adam Stacoviak:** I have an interesting history with GitHub to some degree, because I remember sitting in San Francisco in a random office with Chris Wanstrath and Tom Preston-Werner, conducting an interview for a podcast called The Web 2.0 Show. This was literally like a month and a half after GitHub launched, so... It's been a track. GitHub has evolved over the years; it started out as social coding and has done all these cool things to raise I guess the bar of open source, but also make it so much more accessible to the world

So GitHub has evolved tremendously. At first launch it didn't need - maybe it did, maybe it didn't need data scientists, I don't know... But you can totally see a true need now.

And then obviously this survey, Open SourceSurvey.org - I guess that redirects to 2017 because you have plans for a future version of this... Is that true?

**Nadia Eghbal:** Yes.

**Frannie Zlotnick:** Yeah.

**Adam Stacoviak:** So we're in a new world where GitHub is essentially (many might say) the epicenter of open source, and now needing folks like Frannie to help make sense and see data first, and hopefully peel back the layers of what's important out there.

**Mikeal Rogers:** One of the things that I find really interesting about this data set too is that, you know, GitHub changed open source, and now those people that are flooding in are sort of changing GitHub a little bit, too. It's really interesting to see some insights into what they think. How did the survey start? There's a lot of academic surveys out there, so I'm curious what the motivation behind this particular one was.

**Frannie Zlotnick:** This particular survey was the idea of a guy who used to work on the open source team at GitHub named Arfon Smith, who was our program manager for open data. I think you guys have interviewed him before, right?

**Nadia Eghbal:** Yeah, he was in season one.

**Frannie Zlotnick:** Yeah, so he came to me several months ago (8-9 months ago, I think; maybe more) and had this idea to use the access that we had to the open source community to gather high-quality data for researchers, and in particular academic researchers studying open source development and processes, help them get better data than they're able to get otherwise. Because you're right, there are a ton of surveys out there because this is a fascinating domain; it's a weird and unique form of production, of public goods that a lot of the world's critical services are based on, and people are really interested in understanding how and why people participate or don't in this community... But it's hard to get good data on it.

**Adam Stacoviak:** Why is that? What makes it hard to get good data? Is it selecting the right kind of people, or them self-selecting?

**Frannie Zlotnick:** Yeah, so for the types of questions that people are interested in, a large part of the problem is getting access to the right people. This is a community that's kind of over-surveyed; people get a lot of emails asking them to take surveys, and at some point they get tired of doing it, so it's hard to get the people you wanna talk to to take the survey, so the sampling is hard; an unbiased way is very difficult to do.

\[08:09\] Generally, what people have done is they'll go through public records of open source projects and look for people who committed or otherwise participated in a project and then just email them. But that means you miss this huge community of people that we know are there who are using projects and looking at them but not necessarily actively contributing to them, and we think that that's a really important part of the community, as well. But unless they leave a visible artifact of having been there, there's no way for the researchers to know that they're there.

By having access to the traffic going to these projects, we have an ability to get to people in a way that is virtually impossible for most other people.

**Adam Stacoviak:** Yeah. It certainly makes sense to be GitHub and conduct this interview, because otherwise, on the outside, like you had just said, it's difficult to seamlessly access those kinds of people.

Let's rewind a bit and kind of touch base on exactly what this is... So this is an open source survey conducted by GitHub in collaboration with researchers from academia, industry, other folks from the community... The purpose was to gather high-quality insights and data from those who were interacting with or even just checking out open source projects... A lot of responses - a little over 5,000 responses - not only from GitHub's data pool, but also it seems like random samples from other communities that aren't the GitHub platform, and then open sourcing that data set. Is that right?

**Frannie Zlotnick:** So it's a little over 5,500 randomly sampled respondents from open source repos on GitHub, and then another 500-ish responses from a non-random sample of communities off GitHub.

**Adam Stacoviak:** I see.

**Frannie Zlotnick:** We know that not all open source is on GitHub; there's a bunch of very important projects that predate GitHub or work on other platforms for lots of reasons, and we wanted them to be part of the sample as well. It's harder for us to access them, for obvious reasons. So that sample is non-random, but we did try to make an effort to make sure that they're representative in the data as well.

**Adam Stacoviak:** Right. And when you say random and non-random, that's really important to say for what reason, as somebody who doesn't do data much? Why is it so important to make that distinction?

**Frannie Zlotnick:** Typically, the way open source surveys have been done is to use opt-in sampling; basically, somebody makes a survey and then they publicize it in lots of places like Twitter or on a website, and they basically kind of broadcast that they're doing a survey and ask people to come to them. That means that people go out of their way to say "I want you to hear my opinion", and the people who do that are kind of weird, right? They're people who have very strong opinions on things, or they're people who think taking a survey is a fun way to spend 15 minutes, which is weird. \[laughter\] So there's lots of reasons why that gets you a pretty biased sample; it gets you a very opinionated sample. It's subject to basically kind of gaming -- like, people will try to send the link to specific groups that they want to take the survey, but maybe not other people.

So the way you get high-quality data that is closer to representative of the whole community is you randomly select people, hopefully in a way that gives everybody who's there an equal probability of being invited to take the survey.

**Adam Stacoviak:** \[11:58\] With that in mind, you've got quite a few questions, so maybe not a 15-minute survey; maybe a half hour, 45 minutes... This is 50 questions - what's the rough average that you would expect for someone to dedicate towards entering this?

**Frannie Zlotnick:** This was actually an 11-15 minute survey, depending on which set of branches you hit. If you answered some questions in a certain way, you'd get some additional questions. But the average time was something like 11 minutes. That was intentional. A really long survey is really tedious and taxing. You get better data if people don't find it really annoying to take your survey.

We made a big effort to make sure that we use almost exclusively closed response questions that we wrote in a really straightforward way that it was easy to take the survey as fast as possible, given the volume of stuff we wanted to cover, so that it wouldn't take up too much of people's time.

We had actually a really good completion rate. It was something like 50% of the people who started taking it finished it, which is really high for a survey of this length.

**Adam Stacoviak:** Wow! That is really high. I've visited lots of surveys and was like "No..." \[laughter\]

**Nadia Eghbal:** I was nervous about that. I was just afraid people weren't gonna take it, because it was a really long survey, but it turned out to be great.

**Adam Stacoviak:** Well, surveys in general are pretty tough. Mikeal, you may have some experience with Node Foundation, I know you do surveys there, or have done surveys there each year. Were you involved in that at all?

**Mikeal Rogers:** Yeah. We did the one where you kind of blast everybody and you try to get everybody to get in on the survey. The one thing that we do to try to quantify what kinds of respondents we're getting is that we ask a question "How many years have you been using Node?" and we have a pretty good idea of what their growth trajectory is, so we know how many users in the overall community have only been using it a year, two years or three years... So we know that the respondents tend to be people who are in the slice of our community that is very high, so we don't consider the results to be representative of the entire community, but more like representative of the people that have more experience, because those are the people that are filling out the survey.

And we have a few other questions in there that help us kind of slice up the data to know which section of the community that it's addressing. We don't really have any kind of mechanism to randomly select the way that GitHub can here; they can really look at it and get a very truly representative sample.

**Frannie Zlotnick:** Yeah. And to be fair, there's also another -- we have this problem of response bias too, where not everyone we invite actually takes it. Some certain percentage of the people that we invited to take it actually did so. So there's certainly ways in which the people who did decide to take it are different from the overall community. For example, a huge percentage of people say that they are maintainers or people that have actually contributed, and we see in our traffic numbers that there are many, many more people who are just visiting or using repos without actually necessarily actively contributing to them, and they are not represented in the data in as high numbers as we see.

So there's still this sort of bias in who decides to participate, but because we invited in a random way, it's a better sample; not necessarily precisely representative, but it's higher quality than you would otherwise get.

**Adam Stacoviak:** Let's find out where this came from, if you don't mind. I wanna go deeper into the context, some of the insights discovered from this. It sounds like this has been in the making for quite a while. You mentioned Arfon Smith, also on season one of RFC - great episode, we'll put that in the show notes, so go check that out... But this predates your getting hired there, Nadia, so where does this begin in terms of like motivation...? What was the purpose, what were the beginnings of this effort?

**Frannie Zlotnick:** \[16:00\] Yeah, the motivation was really just to make data available for people to do interesting and good research on this community. It's good for us internally at GitHub if people are doing research on what makes open source sustainable and healthy; the data is useful to us as well.

We also have interest in making sure that the data is available not just to researchers but also broadly available to the people who can kind of do the most with it, which is the community itself. So the idea was really just to use our unique position with regard to the community to be able to create high-quality data that could then be used by other people to do interesting research. and to help people make decisions on what their communities need, and help people understand different parts of their community, like help maintainers understand contributors, help contributors understand users who don't necessarily contribute... Things like that.

**Adam Stacoviak:** Can you go back to the moment, to some degree...? Was it some sort of message, an email? Was it a face-to-face conversation? What was the original context for like "Hey, we should do this survey. We need to know this information", and who was there and what was going on to sort of surface this desire?

**Frannie Zlotnick:** I think it was a video chat between me and Arfon. He sent me a message asking me to -- I think at this time Arfon was doing his nomadic thing; he was traveling around the country in a van with his family... So I don't remember exactly where he was, but I was in our office and he was in a van somewhere... \[laughter\]

**Adam Stacoviak:** The last time when we caught up with him for RFC he was in Canada. That was about nine months ago, so it might have been then.

**Frannie Zlotnick:** It might have been then. I think I remember there being some trees behind him... It looked really pretty.

**Adam Stacoviak:** Canada's got a lot of trees. \[laughter\]

**Frannie Zlotnick:** He just pitched this idea to me... He said "I would love if we could do a survey of open source; do it well, with rigorous academic standards, because there's a ton of data out there. People really wanna know these things, but they don't have the tools or maybe the technical background to know how to do it in a high-quality way, and it's impactful. People are using the data to make decisions about what they do... Or they're publishing papers on it. Can we do something that would provide good data, help get people interested in using our data for other types of things, and also make sure that when people are trying their best to make data-driven decisions that they're using high-quality data?"

I thought that sounded really interesting. I'd mostly been working on internal-facing things... You know, reports for internal people at the company, and it sounded like a really fun opportunity to learn more about open source, because I'm not a domain expert in it, and to do something that would have a really wide audience and potentially a really large impact.

**Adam Stacoviak:** After the break we'll dive deep into the insights of this open source survey from GitHub. With more than 50 questions, this survey is by far one of the most widest-range research topics GitHub has done to release as open data. We're gonna highlight some of the most actionable and important insights from this after this break.

**Break:** \[20:05\]

**Mikeal Rogers:** I'm kind of ready to dive into the insights a little bit... Is everybody else ready to dive into the insights?

**Adam Stacoviak:** Do it, man! Open it up, Mikeal!

**Frannie Zlotnick:** Yes.

**Mikeal Rogers:** So this first one about documentation is actually very interesting to me. It seems like something obvious, right? Like, "Of course docs are important", but everybody says that and nobody actually does a very good job of it. It's interesting here, because the way that it's framed - you have a question about problems that are encountered in open source... Some of the other things that you ask about other than documentation are unresponsiveness, or dismissive responses in issues, in PRs and things like that.

I know that across all the projects that are trying to take getting new contributors seriously, there's been a huge focus on improving that flow and making things nicer and easier to get in, and maybe not so much on documentation. And now we're seeing this data that really shows that documentation is much higher... It's something like 96% of the respondents...

**Nadia Eghbal:** 93%.

**Mikeal Rogers:** 93%... Wow! That's unbelievable. So it looks like, more than just this question, you all really dove into this to figure out what is going on here, so why don't you tell us a little bit more about that?

**Frannie Zlotnick:** Yeah, so one of the things that is pretty well-studied are the reasons why people do contribute to, or otherwise engage with open source, but a thing that hasn't been as well studied are the things that prevent people who would like to but are not necessarily contributing as much or in the ways that they want to. So we devoted a whole section of the survey to negative experiences in open source, which is probably kind of a bummer to take the survey and only get to talk about the crappy things you encounter... But it was where there was kind of a hole in the data that existed, as I saw it, and also kind of more actionable than -- you know, like "Tell us all the wonderful things you get out of doing open source." Those are kind of self-evident, we know a lot about that already.

What we don't know are more about the types of things that get in people's way, that make it hard for them to contribute.

**Nadia Eghbal:** I like \[unintelligible 00:23:25.20\] our findings around different groups that aren't traditionally super well represented in open source value those processes more. I thought that was an important way to tie together why documentation matter, to also getting new contributors.

**Mikeal Rogers:** Yeah, you made a particular point in here about English and how nearly a quarter of open source communities have less than very well English skills. So it's not saying "All docs need to be in another language", but it needs to be in a form of English that is not really complicated, right?

**Adam Stacoviak:** \[24:04\] That's something actually that I personally discovered while at Node Interactive recently, Mikeal, when I was invited to come up there with you all and do that. I was talking to Shiya Luo, and she was originally from China, but works at Autodesk and had moved to San Francisco, but also kind of went back and forth. We talked about the Great Firewall of China, the disconnection there, but she talked a really big deal about the difference of accessibility to docs because of the language barrier... And then the time it takes for things to be translated, and by the time it is translated - if it ever is - it's kind of too late.

**Mikeal Rogers:** Yeah. The way that we kind of solved this in the Node Project is just that a lot of people that speak other languages are contributors or committers in some way and they watch doc changes. As doc changes happen, they make suggestions about the language to simplify it a little bit, to make it more easily translatable, but also that just makes it more understandable.

**Nadia Eghbal:** \[unintelligible 00:25:00.19\] probably not as much for Node, but for smaller projects where they've got relatively common contributors, someone volunteering to translate the docs. But then, that's not a commitment to keeping them updated forever. So yeah, I definitely see the value of -- if you're gonna write in English, at least simplifying the language can make a big difference.

**Mikeal Rogers:** I saw a completely different piece of research lately... It tried to quantify all of the steps that a contributor to open source goes through - not just the visible ones, like the pull requests, and each comment, and things like that, but a lot of sort of the invisible steps that they do on their own, like running the tests locally and checking documentation... And I was kind of blown away by the number of times that they check some form of documentation in the project. They try to find things that are similar, they try to check the documentation, the code style and all these things.

That should have made me not very surprised when I saw that documentation was so important, but still I don't think that I internalized it enough. A huge part of the process of contributing is just going back to the documentation and reading it.

**Adam Stacoviak:** Well, no one's too good for docs, right? I mean, you're never expert enough to not need docs is my point... No matter how good you are, it's like "What was the documentation saying...? How was that used?" If you can keep it all in your brain, you're superhuman and I don't know how you got there, but write a book about it, or something...

**Nadia Eghbal:** Also, it's kind of dumb not to -- like, why remember all this stuff when you can just refer to the documentation when you need it? I don't wanna waste that brain space.

**Adam Stacoviak:** Right, exactly. When we look at this... It sounds like you had 50 good questions, but from that, at least at the public website, we've got five core highlighted actionable insights, one of them being documentation. Frannie, you mentioned the negative interactions section, so there's some insights around that... How open source is being used by the whole entire world, not just San Francisco, for example.

Using and contributing to open source happens a lot, even on the job, and it's often the default when choosing open source software. Why, at least from the public website, only share those insights? What's the plan for future insights being shared?

**Frannie Zlotnick:** That's a great question. I think we wanted to highlight some of the more actionable things... Things that we knew would be either really highly interesting, that people would really wanna know about - the demographic stuff falls in that category. Some stuff that's really actionable, like "Write documentation. Make sure that it's accessible to people with varying English skills", and then stuff that was like really strong signals in the data.

It's certainly not all that there is in there, and I think a fully complete treatment of all the data in there would be just overwhelming, and people would stop reading it; they wouldn't go through the whole thing.

\[28:11\] We wanted to keep it pretty limited to some key things, and then leave the rest of it open for other people to find and to research and to publish on. Because the original idea - really the point was the data... That we would putting out the data for the research community and for the open source community to do what they will with it.

The insight section was more of a "Oh, we found all this fascinating stuff." We wanna make sure that people actually do learn these things from it, but it's kind of a small chunk of what's in there.

**Nadia Eghbal:** I'd also add... Any of those top 5 insights - it wasn't like one question to one insight. Each of those was a mix of probably like at least five questions per section, of looking at the data and saying -- I mean, the documentation part is interesting, but then the non-native English speakers is interesting, so what does that mean together? Some of that was already a little bit of an analysis and mixing together existing questions.

We did go through all of the questions as a group, just to see -- given Frannie's experience with data, my experience with open source, and we had a few other folks in there, too... Of just saying like "Given our collective knowledge, what do we think is really interesting and actionable here?" But yeah, it's definitely not complete either.

**Mikeal Rogers:** I think it's a little timely, too. As we've been recording season 2 of RFC, we've been able to talk to a lot more people that have raised money for their projects, for fairly big, notable projects, and the recurring theme seems to be "We have this money and we don't know what to do with it, because there's not a lot of really discreet, specific things that you can spend it on..." But documentation is one of those things. You can hire somebody to just write better documentation. That's like a really actionable thing, and armed with this data, to say "Actually, this is the most important thing. It's probably something that we should spend money on" - that's really actionable and really timely.

**Adam Stacoviak:** That makes a lot of sense, because we often hear "We have money... How do we spend it? Do we spend it on staffing more people to put more developers behind the project, or do we embrace or invite community into this? Do we do events? Do we do meetups? Do we do Swag?" There's so many unknowns out there, so being able to have unbiased opinions on what really matters certainly gives better waypoints for maintainers and community leaders in open source to take action upon. Without something like this, you're sort of just shooting in the dark.

**Nadia Eghbal:** It was fun to see a lot of common wisdom that gets passed around and seeing how that maps to the data that we found. Some of them were really spot on. I was actually picky of you, Mikeal, in the negative interactions findings, because you had this tweet from a while ago that was like "Don't tolerate assholes" -- oh, sorry, Adam...

**Adam Stacoviak:** No, it's okay... Go ahead. \[laughter\] Heads up if you're in a car with a kid or you've got your kids around - mute it, or whatever. Go ahead.

**Nadia Eghbal:** \[laughs\] Just repeating his tweet verbatim - "Don't tolerate assholes in open source, because new people that see that will wanna walk away", or something like that. You probably remember it better than I do.

**Mikeal Rogers:** Yeah. Well, there's an interesting Venn diagram that goes with it.

**Nadia Eghbal:** Yeah, I remember that.

**Mikeal Rogers:** Assholes are just a really small dot, and then there's people who tolerate assholes, and then a much larger bubble of nice people. And some nice people will tolerate that kind of behavior, but far more just won't. So you're excluding this much bigger group when you accommodate people who are toxic.

**Nadia Eghbal:** \[32:03\] And that was totally what we had found about... A smaller portion of people have personally experienced something, but a lot more people have seen something happen, and there's a pretty significant number of people that stop contributing to your project when they see behavior like that. It was good to actually have data to say this really does matter. That common practice or common wisdom is actually true and useful.

**Adam Stacoviak:** It's interesting to see how much negativity is out there. Even 18% of respondents having -- that's enough. I mean...

**Nadia Eghbal:** It's a lot!

**Adam Stacoviak:** It's a huge amount. That means if you interact with open source 100 times, 18 times out of this hundred you're gonna get some sort of negative reaction. I got negativity today. It happens...

**Mikeal Rogers:** Hold on, you're interpreting the data a little bit off there. This is about individual people, not individual interactions.

**Adam Stacoviak:** Well, that's 18% of responses -- oh, I guess you're right. You're right, I'll stand corrected then. But I'm sure my number is just as accurate.

**Frannie Zlotnick:** It's definitely higher than you want it to be, but it's also not out of line with the data from similar communities, especially online communities. It's not necessarily just open source that has this problem, but I think the visibility of open source, everything being open and kind of having a little bit of a viral aspect to it... People fire issues to each other, just to "Take a look at what happened over here..." The visibility might be higher.

People being jerks to each other on the internet is a thing that happens in a lot of places.

**Mikeal Rogers:** I think one of the insights here is -- you have 50% of people have witnessed negative behavior and 21% of them have actually left the project because of that. Just from the witnessing, not even necessarily being the victim of it.

**Adam Stacoviak:** Well, that's the truth. If you just witness the negative behavior, you're gonna assume that that's a common thing or a standard, or it happens often, especially if you see negativity unresponded to, like allowing it... That's the difference; that's why I think maybe your tweet, Mikeal - and Nadia, your mention of it - may be right on point... Because if you allow somebody to be that jerk, then you're not so much just as at fault, but somebody needs to say "Hey, that's not how we act here." I think that's probably a good reason why a lot of code of conducts have become more common... It's to say "If you're gonna participate in this - whatever this is - here are the rules for which we all agree to abide by. If you don't, here's the ramifications and here's how you contact someone to say "Hey, this is happening. Can you please make it stop?"

**Nadia Eghbal:** I wanna reemphasize a phrase, a point about the fact that the levels of negative interactions that we saw is not that different from other online communities. One thing that was sort of sad to see in a lot of the press reporting - their takeaway was "This open source is really terrible and toxic, and everything is just like Linus Torvalds", and it makes me sad, because at least for me, part of the goal with this data was to -- I don't wanna scare people off from contributing to open source. I think it's important to highlight that this stuff is not great, but it's not different from other online communities.

I think open source gets an unfair reputation for that and it turns a lot of people off from it. But none of it is great, because humans are just kind of not nice to each other on the internet, period, when left unchecked... But being able to see that is useful.

**Mikeal Rogers:** \[35:51\] I think one important difference though between GitHub and other online communities is that if you're really into ham radios and you go on ham radio forum and you experience negative behavior, your choice is basically "I stop talking about ham radios on the internet, or I continue to put up with this." On GitHub it's literally like "I just go to another project that's not terrible." So you have this huge number of people that actually just leave projects because of it, right?

**Nadia Eghbal:** Yeah.

**Adam Stacoviak:** At the same time, you can't make or instill a change unless you measure it, right? That's a known thing. So just having this data alone shouldn't say "Oh, this is an issue", to scare people off, as you said. It should be something that attracts some change. Being aware of an issue is the way you instill some change.

**Nadia Eghbal:** Exactly.

**Adam Stacoviak:** Coming up after the break, we get into a heavy topic - dealing with negativity in open source. We also talked about maintainers having to be the police... And an even more touchy subject - the accuracy of this research. Is this a true representation of the overall open source community? All this and more after the break.

**Break:** \[37:24\]

**Adam Stacoviak:** This is a tough subject, not often discussed - the impact of negativity in open source. Sometimes when that happens, people are force to go into private channels or to enforce their code of conduct and get into very uncomfortable situations, basically having to deal with these negative experiences that have real consequences to not just the people, but also to the project. Sometimes people just don't interact, or they just don't interact publicly. What do you think?

**Frannie Zlotnick:** Yeah, people might withdraw from a project, they might keep working on the project, but start working in kind of backchannels; instead of working publicly in the repo, they may start pinging people through email, Slack, or other methods, to avoid the public microscope of attention on the work, or maybe risk somebody saying something really critical and that ending up being part of their public professional record.

**Adam Stacoviak:** Well, no one wants that, right? If we were in an issue and Mikeal called me a name, I would probably not wanna talk to him ever again for one, and then two, I would just be like "I'm not being involved in this anymore. I'm done." Or maybe I wouldn't; maybe I would just take it and just feel stupid. What do you think, Mikeal? What are common interactions like? Is that how you would respond?

**Mikeal Rogers:** \[laughs\] What do I think as in, do you wanna test this out and have me call you a name on the internet? \[laughter\] I think the top line of this is that people that experience negative behavior -- okay, I will put it this way... It's really important to deal with negative behavior when it happens at the project level. The next point in here is that the most effective tool here is to ban people... Maybe even banning people fairly liberally is a fairly good idea.

One of the arguments that we hear over and over again is that using bans and using other moderation tools, we keep creating a higher and higher bar for the kinds of behavior that does that... But there are a lot of other negative consequences to not dealing with it - not just the person who's the victim of the behavior, but also everybody watching can just move to another project a lot of the time... Or they might move into private channels, which is not good for an open source project.

It's just really important to deal with the behavior, to actually moderate it in some way. If you don't, something like three times the number of people that experience it are potentially also seeing it, and they're gonna do something as a result.

**Adam Stacoviak:** The problem with the blocking part though - the banning, the blocking - is that somebody's gotta be the police and somebody's gotta be the bad guy, or bad person, so to speak... Which is okay, but that just means that somebody who may not exactly wanna take on the role of being the enforcer, so to speak, has to take on that role, and that has to happen in every single project, and that could become an issue just generally.

I don't always wanna be the bad person and say "Hey, you can't play anymore, because you've crossed the line here." I get it that it's needed, but it's hard to be that person.

**Frannie Zlotnick:** We asked about individual users having the ability to block another user, and that's separate from asking a maintainer to go in and block somebody from a project.

**Adam Stacoviak:** Hm... Interesting.

**Frannie Zlotnick:** Actually, the finding is that an individual having the ability to block another user without having to involve somebody else is the part that is most effective at addressing problematic behavior. If you have to ask a third-party - we asked about maintainers, we asked about legal intervention, police intervention, ISPs or hosting services... Bringing in these third parties at any level is less effective than giving people the power to protect themselves on an individual basis.

\[42:11\] I think the findings suggest that you wanna move away from having a kind of third-party policemen and give people tooling to be able to say "Whether or not this person is part of this community or not, I don't wanna interact with them."

**Adam Stacoviak:** So a singular level opt-out, basically...

**Frannie Zlotnick:** Yeah. Because anything that relies on maintainers - first of all, as you said, it puts somebody in this police role that they probably don't wanna be in, or they may or may not wanna be in. And it also means that you need to have a really responsive maintainer in order to have any sort of like ability to have this \[unintelligible 00:42:48.29\] And there's lots of projects where the maintainers are not necessarily responsive on the timeline that you would need in order to address it.

**Adam Stacoviak:** It certainly adds one more notch to the job role of being a maintainer, if that were the case, you know? Like, "Must also be police."

**Mikeal Rogers:** And I think that it's important for you to think about these things in your project. But that's a really good point, which is that a lot of individual maintainers are just not engaged enough in the projects to even do that. And in fact, there's not a lot of other people engaged in that particular issue, so it's really enough for the one user that's seeing (or experiencing) this to just block that person. That kind of scales down to all of these smaller projects that don't have as much infrastructure.

I'll also just give a shoutout to GitHub making improvements... There is a beta-tested feature right now for temporary bans at the org level. So you can kick people out temporarily, and it's not so much of a permanent ban. It's a nice way to say "That behavior is not appropriate. Here's a consequence, but you're not banned for life."

**Frannie Zlotnick:** Yeah. I see this finding as being -- the people who should pay attention to this finding are people like us, like GitHub and other platforms... It's like a platform-level finding, like "This is what we need to build in order to make sure that communities have the ability for people to work in healthy and safe ways." It's not necessarily at the project level; it's not necessary on a maintainer to go build something to do this. The platform should make this available.

**Mikeal Rogers:** Nice. Earlier we talked a bit about how this has been covered in the media... In that vein, I saw an article on Wired talking about some of the gender imbalance stuff, and one thing that I noticed was that the metrics that they took from the survey they were sort of implying were the overall GitHub metrics, and that the overall GitHub users were only 3% women.

**Frannie Zlotnick:** That's not true. \[laughter\]

**Mikeal Rogers:** I'll let you dig into that a little bit... Can you tell us a little bit about the gender imbalance findings that you found?

**Frannie Zlotnick:** Yeah... They're not good. 95% of the people who gave a substitute answer to a gender question identified as men, and only 3% identified as women. Another 1% identified as non-binary. It's just a profound imbalance, there's no other way to talk about it.

**Adam Stacoviak:** Does this go back to the pool for which the data it represents -- going back to the random/non-random question, biased/unbiased... This assumes that the person was on GitHub, they were prompted some way to say "We have this survey, please take part." Being that it's such a wide chasm between those numbers - 95%, 3% and 1% - I'm just wondering, given that big of a difference, how confident do you feel in the accuracy of that? If you took the same and you expanded across all of GitHub and everyone who has ever interacted with GitHub answered, would that still be true?

**Frannie Zlotnick:** \[46:09\] The way we sampled was definitely not how you would try to get all GitHub users. You had to do a really specific set of actions on a licensed open source repo that indicated sincere interest in open source in order to make it into the pool, and then we randomly sampled from that. So it's definitely in no way representative of the general GitHub user base.

**Adam Stacoviak:** Can you share what those actions might be, maybe to kind of give folks an idea...? Or is that secret stuff?

**Frannie Zlotnick:** It's not secret. If you download the data set, there's some documentation that has more details than the website. You had to do something like three clicks on a licensed repo or visit three licensed projects within 30 minutes in order to make it into the sampling frame. And that's because it's really easy to fall into a GitHub repo from Google and like not really intend to be there... So we were trying to make sure that we were only getting people who seemed to have a sincere interest in open source.

To get back to the sampling part, there's a possibility that maybe women are more likely to use open source or be interested in it but not be contributors, and maybe they felt like when they got invited we didn't actually mean them; maybe they don't consider themselves a member of the community or something, so they felt like "Oh, we probably don't wanna hear from them." That's possible... But an imbalance this large, I think that this is probably pretty accurate for open source, and it's consistent with basically all other research that's been done on open source communities -- it's something like between one and ten percent.

**Adam Stacoviak:** The reason why I ask this question isn't to deny the accuracy, it's because it makes me sad. \[laughter\]

**Nadia Eghbal:** It took me a few weeks to process that finding.

**Adam Stacoviak:** Yeah, I mean, that's really sad. If that is representative of the truth, we've gotta do a better job.

**Mikeal Rogers:** Well, understanding how the selection works now, I'm not that surprised. I've seen these other studies that show between one and ten percent. All of them have different issues in their sampling, but at no point has there ever been data that shows that open source is as good as even the rest of the industry, which is only 22%... And from my own experience, when you work in these communities, as you work your way up the engagement stack, from user and casual contributor and then eventually into leadership, the numbers just get smaller and smaller, and become less and less visible... With a couple individual communities as really important exceptions that should probably be studied so that we can figure out how to do this better.

I'm unhappy about the number, but now I can see why it would be there.

**Adam Stacoviak:** So if someone has my reaction - this is a question for all of you here - what can we as a community do? What are some ways to fine-tune that ratio to be a bit less of a chasm between the two?

**Nadia Eghbal:** One thing that made me happy from the reaction was there were a couple people - prominent open source contributors - who offered to mentor people that are trying to get into open source... I think from the React community there were a couple people. I thought that was really nice, just for people to be sort of like aware that if the numbers are that bad, it's really important to keep an eye out for people that are interested in contributing but might need a little bit of an extra push. That's obviously not super scalable, but I thought it was just like a nice human response.

\[50:09\] For me, the documentation part of it ties really strongly back to this... Document your stuff and make it as transparent as possible, so that everybody understands how to get into it. That was why we did the open source guides earlier this year too, so that it doesn't feel like open source is this big, shadowy process and you have to talk to the right people to understand how it works.

Some of that ties into also the findings around people who had given or received help from a stranger in open source, and seeing that women were less likely to ask for help from a stranger, because there's sort of the assumption that "I'm not allowed to do that", or whatever... So just really going out of your way to -- and it's not just women... There are a lot of people who are hesitant to contribute because they don't feel comfortable asking for this sort of thing, so making processes really explicit and transparent might bring more people out of the woodwork than you would expect. That was my take on that.

**Adam Stacoviak:** This last point here, too - half of contributors say that their open source work was somewhat or very important in getting their current job/role. That's in the same area we're talking about here in terms of this data being shown on the website. Knowing how crucial open source is in general, but then also at the micro-level of me or someone else getting a future job, or the dream job, so to speak; how important it is to be able to interact with open source makes it even more important to be welcoming, because it's THAT important to them as a person, but also to tech in general.

**Mikeal Rogers:** I've also seen data that shows that people with open source experience make more money on average than other average developers, so it's also important there.

One of the answers to this problem you can see in this data a little bit. You have the differences between men and women on some of these things, and some of the biggest gaps are in code of conduct and welcoming community; this is just far more important to women.

I've certainly experienced this as a conference organizer where you're trying to invite and get people out, and especially when it's the first time that people are being visible, women are much more cautious about this than men are.

**Adam Stacoviak:** Is it the code of conduct and what it says, or is it the fact that it's there because somebody knew it was important enough to put there and take the time to figure out what that community's conduct should represent?

**Mikeal Rogers:** I feel like at this point if you don't have it you're making a different kind of statement. \[laughter\] It's not like the code of conduct makes a statement, actually not having it makes a statement, and that's a really negative statement. \[laughs\]

**Adam Stacoviak:** Let's use the Changelog as an example, because we literally - as of like maybe two, three weeks ago maybe, and today is 5th June (WWDC day, by the way; Apple good stuff, whatever) -- we just recently put a code of conduct in, and that's not because we're idiots, it's because we didn't think we really needed one; we have a group of podcasts, a newsletter, so we didn't really have a community, and we've actually had a membership/community for a while now... And for me, my paralysis - and I'm not sure if this reflects Jerod's opinion - around it was like "I don't know the first step to enact one... Do I write it by hand? Do I adopt one from another community that best represents me?" I'm kind of going on a rabbit hole here, but the point I'm trying to make is that even we - I would imagine we're pretty close to open source and we realize how important this is - only recently have enacted one, and I don't feel like we were behind the curve; I feel like we did it when we needed to.

**Nadia Eghbal:** You know, we wrote an open source guide about that. Just saying... \[laughter\]

**Adam Stacoviak:** \[54:01\] I may get it and read it... \[laughs\] \[unintelligible 00:54:02.16\]

**Frannie Zlotnick:** One of the neat things about the code of conduct findings - we didn't highlight this in the write-up, but I kind of wish we had - was that it has this reputation of being controversial, because there's some loud people on the internet who really, really hate them... But our findings show that they're actually not controversial. We allowed people to say about all these things in that table that you're looking at, from responsive maintainers all the way down to contributor license agreements, like "Is it very important to have it?" all the way to "It doesn't matter either way", all the way to "Very important not to have it."

We allowed people to say "I really, really don't wanna see this on a project", all the way to "I really want to see it." And only something like 4% of people said it was important not to have a code of conduct; the vast majority of people either really want to see them, they say it's important, or they're kind of indifferent about it, and that includes men. If you throw all the women in the data out, that's still true. So they're broadly popular... You're not actually going to dissuade a lot of contributors from participating if you have one, even though there's this sort of reputation on the internet that you're taking a side in a culture where it's like most people actually are pretty happy to see one, or they don't care either way.

So it seems like a good and easy way to make a community welcoming to the people who care about it, and it's not going to turn away other people.

**Adam Stacoviak:** I think either way it's really about opening the door, right? Like you said, if people are indifferent, then they're not gonna stay or leave because of it, but there are gonna be people who don't come at all if you don't have it.

**Nadia Eghbal:** Yeah, and it's not just codes of conduct, too. I think there's also just a broader cultural issue of -- I can only speak from my experience, so I guess I'll just do that... It's sometimes wanting to have permission to do something, or feeling like you're not good enough unless someone says you're good enough to do a thing, and then you're okay to do it. So for me at least, it's not like I wouldn't speak at a conference if -- it's not like if I see a code of conduct it's like "Oh, great, this is the conference for me", but it's more like "Well, am I qualified as a speaker? Is that okay?" So for me, one of the big takeaways from something like certain groups wanting processes clearly spelled out or documentation, it's just like really encouraging people when they're on the fence to just say "Yes, you can do it! Just do it!" and just being really supportive and encouraging of people that might be kind of like hovering on the sidelines, unsure whether they wanna participate or not. Everyone can play that role day to day of if you see someone with potential, just encourage them to get out there.

**Mikeal Rogers:** Yeah... And to call back to what we were talking about earlier with signaling to everybody watching that you care about this kind of thing - how you handle that pull request and that discussion around the code of conduct says a lot about the project... Because while it isn't controversial among most maintainers as this data shows, it is controversial among Fortran members who will show up and just start saying stuff.

Either you allow that to become like a giant thread that derails the pull request, or you merge it and close it and lock it and say "I'm sorry, but that's not our community... Go away." \[laughs\] And that sends the right kind of signal.

**Nadia Eghbal:** Yeah, that's a good takeaway. The people who are really loud about this stuff are not actually representative of the silent majority.

**Adam Stacoviak:** Coming up after the break we talk about the relationship of businesses and open source - how they use it, whether or not they encourage contributing to it. We also examine how open source has become the culture default in many cases, and what people actually value in open source, because you might be surprised... And what you can expect from the future of this survey.

**Break:** \[58:17\]

**Adam Stacoviak:** I can't remember the exact code you have, Mikeal, but you had a quote on the bonus episode, the season one, the behind-the-scenes episode of Request For Commits, about the relationship of businesses and their relationship with open source and how it's severely skewed. With so much as this data shows of open source contributions happening on the job, it kind of reflects back on that idea that more companies should help sustain open source. But it doesn't mean just money, it might mean that 10%-20% time being allowed towards open source.

We've been talking about this on Request For Commits... What do you all think about this finding? Are you surprised? Are you enlightened?

**Mikeal Rogers:** I have a couple things that are surprising about this... One is I was really surprised that the number of people that found certain policies unclear - that was really interesting to me, and I'm very curious, do they contribute anyway when it's unclear? Do they use it anyway when it's unclear?

**Frannie Zlotnick:** Yes...

**Adam Stacoviak:** Yes, they do. \[laughter\]

**Mikeal Rogers:** Yes, they do?

**Frannie Zlotnick:** They're actually separate questions, like "What's your employer's policy and what do you do?" The people who say that it's either unclear or they don't know what the policy is, their practices look like those of people who say their policies are supportive of it. So in the absence of any clear rule, people will do it.

I think that demonstrates that you kind of need to -- in modern software development, open source is pervasive. You can't not use it, and you need to fix things if they don't work. So if you have any justifiable way of doing it, you will do it. That's what I took from that...

**Mikeal Rogers:** I find that really fascinating... They're doing it anyway, but it's not like they're being encouraged to do it. I think the people that say that they have a permissive -- that means that their employer has been very clear that they can/they should...

**Frannie Zlotnick:** "Permissive" means either "Your employer is encouraging of it", which was a little less than half (46%), or they were accepting of it; they wouldn't tell you not to do it, but they wouldn't necessarily go out of their way to encourage it.

**Mikeal Rogers:** \[01:01:51.15\] So what is the disparity between people encouraging the use of open source versus the contribution to open source?

**Frannie Zlotnick:** Sorry, I don't quite understand the question.

**Mikeal Rogers:** So using open source applications and using open source dependencies are incredibly high, right? So you have permissive, which I think covers "encourages" and "allows", right?

**Frannie Zlotnick:** Yeah.

**Mikeal Rogers:** So that's really high, right? It's in like 80%. But it drops considerably when you talk about contributing. So clearly there's a huge disparity here between people that are being strongly encouraged to use open source, and then they are not encourage in the same way to contribute back to open source, right?

**Frannie Zlotnick:** Well, specifically the question is asked about IP policies on non-work contributions, so it might be that people don't know what their IP policy specifically is...

**Mikeal Rogers:** Interesting.

**Frannie Zlotnick:** It may not mean that they're not allowed to do it or not encouraged to do it, but they're not super familiar with that specific policy, or there's something about non-work contributions that are different. We actually didn't ask about contributions on the job, which we should have... That was an oversight; next year we'll ask about it.

**Adam Stacoviak:** Does that mean in their on-work time they're contributing to non-work open source, and they're not sure about their ability to contribute to non-work open source while working?

**Mikeal Rogers:** It could even be off work though, because people have employment agreements that say that everything that they produce is owned by that company...

**Adam Stacoviak:** Right, whether they're working or not, or even the hardware they're using...

**Mikeal Rogers:** Yes.

**Nadia Eghbal:** It's really telling, right? It's not surprising that everyone's using it, but it's unclear how you're able to contribute back, and hopefully that will change.

**Adam Stacoviak:** So should that just mean that employers should make it a bit more clear about the company's relationship with open source and the permissions around it?

**Mikeal Rogers:** To come back to your point, you were saying that they should dedicate some amount of time, and I don't think that we're at even the place where we can say that they should be dedicating some of that time, because what this looks like is that employers are encouraging people to use open source and depend on open source at a rate that they're not telling them to contribute back anything.

**Adam Stacoviak:** Yeah, that's certainly true.

**Mikeal Rogers:** So just getting to those levels might be enough... Without dedicating four hours, or whatever. Maybe we should be setting our goals a little bit differently.

**Nadia Eghbal:** And they definitely go hand-in-hand; if you don't have a policy and you don't know what it is, then you're definitely not gonna just contribute before you know what the policy is.

**Adam Stacoviak:** Yeah, if you don't know the policy, or if there is one, you're not being encouraged to do so.

**Mikeal Rogers:** Yeah. I mean, it sounds like people are, anyway... And I think that that's kind of telling too, because it looks like they're doing it because there's no other way... Like there's no other way for them to get this bug fixed in their critical dependency unless they have this policy, so they just kind of ignore it.

I did notice that there was a restrictive -- people that actually are restricted from contributing and using, and that's the most offensive to me even though it's a really small number, because it looks like... I can't eyeball the numbers from the graph, but it's either two or three times as many people that are -- I mean, there's a bunch of people that are being highly restricted from contributing to open source but are not being restricted from using it in any way... Which is just a sense of... \[laughter\]

**Adam Stacoviak:** The last one though is a bit telling, around "Open source is the default." We kind of -- did you really need to do the survey to find that out, though? \[laughter\]

**Mikeal Rogers:** \[unintelligible 01:05:41.08\] your claims with data, though... \[laughs\]

**Adam Stacoviak:** Of course, we need that.

**Nadia Eghbal:** What I thought was really interesting about this is it wasn't that people necessarily thought open source was better among most parameters, besides security... People actually think proprietary does better in a lot of situations, and yet the vast majority of people will still seek out open source options, which says something a little bit more interesting me... It's not just like "Oh, people recognize that open source is better than proprietary and that's why they do it", it's like they don't even know if it's better or not, but for some reason they're just gonna keep using it anyway, because it's so culturally default at this point that that's just what you do; it doesn't even matter what the quality is, and that kind of says something too about the state of where we're at with open source... Everyone is gonna use it, but...

**Mikeal Rogers:** \[01:06:23.17\] It's also free, though... \[laughs\]

**Nadia Eghbal:** But interestingly, people didn't value the cost as much as -- cost was not even one of the top reasons for what people value in choosing software, which is also really bizarre to me... You would think that those two things would be explicitly tied.

This is just me guessing, but I think it goes even beyond that... People just do open source because they hear that's what they're supposed to be doing. People aren't really thinking twice about even that it is open source, or the cost, or anything. It's just like "This is what I do... I take this software that comes from magical berries somewhere and I just put it in my software, and that's it." \[laughter\]

**Mikeal Rogers:** They heard React was cool, so they used it.

**Nadia Eghbal:** Right, exactly. That matches up at least anecdotally with how I understand a lot of software gets made.

**Adam Stacoviak:** Yeah. Stability, security and user experience are the highest of the importance graph, yet 72% say they always seek it out, and that kind of says to some degree regardless of stability, security and user experience, because as you said, it's the cultural default.

**Nadia Eghbal:** And you can see cost is down there in the middle somewhere...

**Adam Stacoviak:** Yeah, I mean... I didn't answer this survey, I wasn't one of the lucky ones who clicked five times and went through the special portal... So I didn't get to answer this, but to me, I pay for things. If I value them, I pay for them. I don't care how much it costs; cost matters, but I'm not seeking it for free. If it matters, you pay for it, one way or another, whether it's involvement or actual dollar exchange.

**Frannie Zlotnick:** It probably matters where in someone's lifecycle they are. I bet that if we split it out by whether people were students versus employed, maybe cost would be higher.

**Adam Stacoviak:** That's true. Even if I didn't have the money to pay for it and I still valued it, I'd be like "I can't buy it, I'm a student."

**Frannie Zlotnick:** Yeah... I haven't looked at that \[unintelligible 01:08:24.29\] I thought it was interesting. Something like 20% of the data is people who are students.

**Adam Stacoviak:** That's a good point right there, that someone should look into this. This data that you've pulled back is all open source; the GitHub repo is linked up on the website Open SourceSurvey.org, so it's not like you can't go and find it. You can download the data and just get started. There's a big Download button at the bottom of the site.

So what we've been talking through is your findings of this, your insights from this... That doesn't mean that somebody else might go and -- that doesn't mean the questions changed, but someone can go back to this data and pull back more insights than the five you shared here.

You've dug into it quite a big, shared a lot of details, even came up with some graphs to share all the data points that we've talked through...

**Frannie Zlotnick:** Yeah, the whole point is that it's an open data project, so we hope people will use it and learn from it. There's a lot more in here than we've covered, a lot of really fascinating things that we found but didn't have room for in the write-up. So please do go analyze it and tell us what you found; we really wanna know how people are using it, because we'd like to do this again and we wanna know what was useful, what didn't turn out to be useful, how are people using it.

**Adam Stacoviak:** Can we expect this to be a once-a-year thing, a twice-a-year thing? Open source moves fast and everybody is just trying to keep up, so should we do this once a year, twice a year? What do you see the future of this survey becoming?

**Frannie Zlotnick:** You know, it was a ton of work... I've been sort of thinking like once every two years, but if we get --

**Adam Stacoviak:** I was being ambitious, sorry...

**Frannie Zlotnick:** \[01:10:11.11\] If a lot of people are using it and a lot of people are finding either the insights or the raw data really valuable and people have ideas about things they wanna know over time or new questions they wanna ask, I think now that we've done it once... I have a pretty good idea of how we could change how we did it so that it would take less time.

**Adam Stacoviak:** Well, the insights part seems to be the most time-consuming... Actually conducting or allowing somebody to take the survey seems to be a pretty passive type of role.

**Frannie Zlotnick:** Actually, the hardest part was writing the survey. I wasn't familiar with the existing research on open source, so I had to go learn about and I had to go write a whole 54-question instrument, with a lot of help from our collaborators in academia and in the industry - I don't know if we've talked about them yet, but... Tons of contributions from people who are doing a lot of active research in this field. That was actually the most time-consuming part of it.

**Adam Stacoviak:** Well, without having done all the work you've done of course I can have this point of view, but now that it's there, do you see the questions needing to change very much to continue the survey? Does it have to stop, or is this something that can keep operating on the random selections, as you've mentioned to Mikeal's question a little bit earlier? Can the same 54-question survey keep going to keep gathering and maybe keep a real-time pulse on the results?

**Frannie Zlotnick:** Yeah, that's a good question. One of the things that we've tried to be conscious of is that open source is a community that's over-surveyed, so we don't wanna add to the noise. People in open source are constantly getting emails asking them to take surveys. Partly, we hope that we can cut down on some of that uncoordinated research efforts by providing one single high-quality data set that everybody uses, instead of trying to piece together their own.

We don't wanna bother people with our research unless we think that these things are actually changing all the time... But if people wanna know -- like, "We saw this last year, and we wanna know how it's changed a year later, because we've invested a lot in (say) our documentation efforts." That's certainly something that we could consider doing.

I was sort of thinking that we would do a whole new -- every time we do this we just ask completely different questions, to try to open up new avenues of research. It kind of matters what the research community and what the open source community wants out of this data.

**Nadia Eghbal:** And obviously, hopefully in two years from now there are gonna be so many different things that open source will be facing, given the pace that it changes at.

**Adam Stacoviak:** Yeah.

**Mikeal Rogers:** So before Adam closes out the Changelog here, I'm just gonna do a complete take over for RFC, with Nadia...

**Adam Stacoviak:** Please do...

**Mikeal Rogers:** At RFC we focus on open source sustainability, and I'm staring at this figure about what open source users value in the software, so why are people actually using open source. We know that there's these widespread sustainability issues, and the first things that they impact, and the things they impact the worst are stability and security, which are the most important things to people.

Conversely, the classic business models around funding open source rely on support or new features, and support is ranked the absolute lowest thing that people care about, with innovation being second to that. So literally, the things that people care about and how we've traditionally looked at funding are at opposite ends of the spectrum.

**Nadia Eghbal:** \[01:14:17.22\] I was hoping someone else would notice that... I'm glad you pointed that out. I think it's funny, because almost always when people talk about turning an open source project into a "real business" or whatever, it's just like "Oh, we'll offer support and services"... And people actually don't really care.

**Adam Stacoviak:** Well, that should be a clear indicator to anybody who's going that route to say that's probably or could be the wrong route to go. It'd be nice to do this in a year and see if that number changes much though, because I'm very surprised that those two are the lowest.

**Mikeal Rogers:** We'll see if support gets lower... \[laughs\]

**Adam Stacoviak:** I don't know if it could get any lower. It's literally right above "Less important."

**Frannie Zlotnick:** Well, that's not the full scale. I think one thing to keep in mind is that we know these things actually do vary quite a bit by community. Actually, this particular set of questions was taken from some ongoing research by a lab over at Carnegie Mellon that studies differences in the values of different ecosystems.

They've done this among a number of communities and found differences in what different open source communities value in the things that they build and in their own processes. Overall, if you aggregate all of the projects together, this is what falls out of that. But there's probably significant variation between communities in what they value.

For your individual project it may not be the case that support is the least important thing, but when you aggregate everyone together, that's how it falls out.

**Adam Stacoviak:** Any call to action for those listening? We've got a lot of people who listen to this show, a lot of people who care about open source - either they're contributors, they desire to get into new languages, they listen to this show for various reasons... At all chasms of developerhood, so to speak... What call to action could you give...? I mean, obviously, go check it out, pull down the data, play with it if you're a data scientist, gather your insights, but what other call to action can you give to the listening audience?

**Nadia Eghbal:** I really hope that open source projects use some of this stuff to figure out how to get new contributors on board and how to strengthen their communities, because I think there's a lot of really good insights around that.

**Adam Stacoviak:** Open SourceSurvey.org. I'll also mention that at the very bottom you can subscribe to survey updates; you can put your email address there, click the button Subscribe... I guess that means that we'll obviously have to do another show like this, because this was super fun. I love rountableing this and dig in through everything and getting to hear different perspectives. It's been a lot of fun. Nadia, Mikeal, Frannie, this has been fun. Thank you!

**Frannie Zlotnick:** Thank you!
