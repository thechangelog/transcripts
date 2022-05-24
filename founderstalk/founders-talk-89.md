**Adam Stacoviak:** Well, Sid, we're back in the saddle, you and me, riding again... So excited. So excited. I mean, the last time we talked was not that long ago, but pretty long ago, I suppose, in the digital space. We talked May of 2020, barely into the pandemic, and one of the big questions I had for you then was "When is the IPO?" because you had been talking about this for a while. And I guess now we can say "When do you IPO?" because - congratulations, by the way, to you and the team.

**Sid Sijbrandij:** Yeah, thanks, Adam. It's great to be back, and yeah, it feels like a different era, the last time we talked.

**Adam Stacoviak:** Yeah. We kind of have some history, to some degree... I would actually say quite a bit of history. We talked to you the very first time in 2013. This goes way back. That show is titled GitLab and open source.

**Sid Sijbrandij:** Yeah. You were early. But I bet with all the guests you have, you're gonna have tons of more companies that will go public. This is such an amazing space.

**Adam Stacoviak:** Yeah. And I absolutely agree with that. And I think the question, too -- and we'll probably go into some detail around this... So GitHub obviously was acquired by Microsoft, I wanna say like four years ago now; 2018, I'm guessing, just from memory...

**Sid Sijbrandij:** Yeah, that's correct.

**Adam Stacoviak:** \[00:04:15.26\] I think their acquisition was 7.5 billion... We did talk to Jason Warner, who was one of the champions behind the scenes on that deal, making it happen... He was former CTO at GitHub. And one of the questions I've asked you in the past, and come up often, is to stay independent and go public, or become acquired, and what that is. I think you shared a bit of sentiment around that the last time we talked, which was - I'll paraphrase it, basically... You basically phrased it as if, one, it wasn't just your decision solo; you don't make the only decisions, you do have shareholders and investors and board members and people who make decisions besides just you... Just because you're CEO you can't do anything you want. You have to have approval, and buy-in from other constituents... And then also this idea, this ambition, as you had said, to remain independent.

So going public to IPO, GitLab, into the public offering space was a strategic move to enable you to sort of, I would assume, remain true to the open source roots. Is that what you meant by the independence?

**Sid Sijbrandij:** Yeah, for sure. Being a good steward of the open source project, but also being independent from many of the hyperclouds. It's become a multi-cloud world, and if you saw for example the MinIO announcement raising their series B, they talk about most customers are gonna use multiple clouds. And our customers want the same security, the same productivity, the same way of working, irrespective of which cloud they use. And commonly, they use multiple ones. They have a preferred one, but they had another preferred one some time ago, or they acquired companies, or they needed specific functionality. And what GitLab gives them is an independent vendor that supports every hypercloud, supports their on-prem infrastructure that many have, and delivers the same security, the same compliance, whatever cloud they use, and that's super-important to them.

**Adam Stacoviak:** Mm-hm. We're seeing this more and more too, I would say like with Copilot, Codespaces, and then there's alternatives like Gitpod to Codespaces... This agnostic, this sort of like multi-cloud, not tied into Azure, not tied into the Microsoft world. People really love the GitHub infrastructure because of the community, and the social, and I would say their grip on the open source commons. And I use that term lightly, but kind of also negatively, the word "grip" in there... Because GitHub obviously has done a great job, and Microsoft too has done a great job for open source. But it's sort of there, I would say it's stuck because of network effects; not because it may be the best place so much for it... But this agnostic approach, this multi-cloud approach you speak of - you've got Gitpod, Codespaces, you've got Tabnine on the Copilot space, so to speak... So when you think about GitHub and non-independent, and GitLab independent, agnostic, cloud, multi, no tie-in, this independence you speak of - how do you see this landscape shaping out, where you sort of see GitHub pioneering, or maybe introducing it... Because Gitpod was out two years in open source in advance of Codespaces. And no knock to Codespaces or the work behind Gitpod, but GitHub came out after that with Codespaces, Tabnine has been out there, I think it's been in incubation... We've had the CEO on our show before on the Changelog podcast talking deeply about the founder story of that, and all the interest behind AI-assisted development, essentially. This term that's sort of propped up, and Copilot has been a part of that as well.

\[00:08:06.20\] But this Microsoft/GitHub world where you have non-indie tools, non-independent tools, and then you have the GitLabs and the Tabnines and the others in this sort of "independent" space. What do you think about this?

**Sid Sijbrandij:** Yeah, there's strong network effects around open source projects. So if you're gonna host your open source project somewhere, you can pick either, but there's an incentive to be on GitHub, because a lot of open source developers are already there. That network effect is much reduced if you're talking about a company. If as a company I'm gonna choose a platform, I can just tell all the people in the company working on the proprietary code to use something else. So that's something where we specialize.

GitLab is an open source platform that mostly hosts closed source code. GitHub is the opposite. It's closed source, and they're really good at hosting open source projects. So we've chosen different adventures, and we're really comfortable with our adventure, making companies more productive, having a DevOps platform that allows them to go quicker from planning something to getting it out there and getting the feedback by integrating all the steps on the DevOps lifecycle in a single application, a single data store, and make that work really well.

**Adam Stacoviak:** Yeah, I think -- I'm not even sure today what GitHub's tagline is... But I do know yours. As I said, we do have some history. We had the chance to come out to San Francisco I think about 4-5 years back now. I think you had another masterplan; every year you have a new masterplan, and you invited myself and Jerod, my co-partner here at Changelog to announce that with you. And we talked -- I think it was the early days of you sort of discussing this fuller, more DevOps platform. This is like early days, I would say, of it, or the beginning innings of that adventure for you. Today, everything from managed to protect, and everything in between, you call yourselves a DevOps platform. What does that really mean?

**Sid Sijbrandij:** It used to be, and it's still the case for most companies today, that they had to evolve; they have more and more DevOps tools, they have more and more projects. And it evolved from every team can select their own tools, to "Hey, we're gonna select some best-in-class solutions", to now "Hey, we selected the best-in-class solutions, but we now need to add digital duct tape to string it all together." And that approach is starting to break down. What's much better is to have it in a single application. But that now has a lot of functionality, and it seems that that is the future, and it means doing everything from planning, and coding, to verifying it, securing it, delivering it, configuring it, monitoring it, within one application.

We've seen that future a long time ago, and we're working with the wider community to make that platform as mature as possible, so that it becomes a replacement for all the point solutions.

**Adam Stacoviak:** And I guess to add one more notch to that belt, you had, I believe it may have been your first M&A as an IPO-ed company recently, Opstrace back in December... Is that your first M&A so far, I guess, as CEO and now IPO-ed company?

**Sid Sijbrandij:** Yeah. And it speaks to that strategy. We want to have better monitoring in that single application, and we were really impressed with the team at Opstrace. And because of this acquisition, people can expect a monitoring functionality in GitLab to mature at a more rapid rate and become a replacement quicker for point solutions.

**Adam Stacoviak:** Yeah. A couple shows back before this show will be out - this show will be out sometime in March... So in late January, early February we released a show with Honeycomb's CEO, Christine Yen. She's awesome; I mean, if you haven't listened to that show, Sid, go listen to that show. She's super-wise, I love their journey... And they really coined the term "observability".

\[00:12:10.27\] She shared a story with the conference Monitorama, when Honeycomb was kind of early days in what they would call the observability space. And the tagline for the conference was like "DevOps" or "Opsy things". It didn't have the term "observability" at all. And her CTO, former CEO and co-founder, Charity Majors, was giving a talk... And this is probably five or six -- I forget what the timeframe is. Listen to the show; it's in the show notes, it's in the transcript... I'll paraphrase most of it. But Charity was giving a talk at the conference, and it was something around observability. She started to coin the term.

So there was one talk that year at Monitorama, and no tagline change. The next year there were four or five talks with the term "observability", and the tagline for the conference was still the same. The next year, there was like 11 talks with "observability" in it, and then the tagline for the conference changed from just "Opsy and monitoring" to also observability. So this really started to be a trend. And that's really what Opstrace was really pioneering, was another area of observability. Did you not have observability prior to Opstrace? What was monitoring like within GitLab at that time, or before the M&A?

**Sid Sijbrandij:** Yeah, we're still working on building this out... But the short part of it is we had some functionality, but people were hardly using it. We weren't using it ourselves internally, which is always a signal. So with this, we'll be able to more rapidly mature it. And observability is a complex subject, \[unintelligible 00:13:46.12\] can do a much better job than me explaining that. But one of the trends that has been happening is that you don't use a separate tool for logging and another tool for metrics, and then another tool to set alarms, and then another tool for tracing. That's coming together in a single application.

So you see, as DevOps matures, that tools are kind of starting to cluster together. We think that clustering is also gonna happen between the different point solutions, between your observability stack. The observability stack should be informed about what environments you have, what you're trying to deploy. If I have a code change, a merge request, I wanna know how my CPU usage changed because of that. And if that's really bad, I'll probably want to automatically revert it and redeploy that.

**Adam Stacoviak:** Yeah. Again, I think this is -- while it may have been born as an idea inside of Honeycomb, maybe inside of Charity and Christine's heads as co-founders to that company, this idea of observability I think has transcended simply Honeycomb and simply their platform to become widely known and widely used. I think anybody who's done anything with stack traces, logs etc. from an error tracking service... One of our partners, Sentry, for example - I know they talk about observability. Prior to that it was just simply error monitoring and error tracking.

This term "observability" has really kind of gone above and beyond what Honeycomb has done, and it's sort of like rounded. It's not even super-clear to everybody. Everybody didn't have the same definition of what observability is. But from what I understand, it's focused on what's happening in production. Less like dev environments. Obviously, not my local machine. It's more about what's happening in production, and as you had said, how did this pull request, how did this merge request or this deploy change production, and what's happening there. The unknown unknowns basically is what Christine has said to me on various conversations around observability.

**Sid Sijbrandij:** \[00:15:55.29\] Yeah, I totally agree. And what you see at most companies is that only their top applications have everything implemented. Their top applications - they have the logging, they have the error tracking, they have the tracing and everything else. But the vast majority of applications don't have it configured. So that's what we wanna make easier.

My co-founder, Dmitriy, coded error tracking in GitLab as one of the last things he did before he recently left. And now in GitLab you can have error tracking set up, and we're gonna make that the default, so that it's set up by default. So that it's not an extra step, and it's not like your stuff is down, and "Oh, I should add error monitoring to figure out what's going on." That should be done for every application.

But if you have thousands of projects and you have tens and tens of tools, that becomes a really exponential, complex problem, so the DevOps platform should solve it for you from day one.

**Adam Stacoviak:** Something you had said - and I don't know if this is public or not, but in your \[unintelligible 00:17:01.13\] you shared some of the vision etc. This idea of bringing your own tools; I think the term you used was BYO, bring your own ops, I believe... And then Best In Class was another acronym... But essentially, you had four different tiers, and GitLab was the final, the far right. So left, I would equate to bad, and right equating to good - I don't know, you tell me, but... This evolution of how teams choose tools, and then how they then, as you said before, digital duct tape them together, add members to their team, SREs, ops... You know, having to have more burn rate if it's a startup to have that kind of team to enable that... And I would imagine the reason why you're so bullish on all-in-one platform is 1) you can have (in quotes, because you're probably biased) "the best", and then 2) that they're automatically configured, as you had just said, with error monitoring. Can you break down the "bring your own" to "the best-in-class" to what GitLab is bringing to market as an all-in-one platform, single-application, as you say?

**Sid Sijbrandij:** I'd love to. And this is all being driven by two trends. The first trend is more and more DevOps tools. It used to be you did DevOps if you had an SVN and a Jenkins installation. Then you were doing DevOps. And today we have tools like Sentry for error monitoring. There's many, many tools that we need. And not only do we have more tools per project, we also have more and more projects. It used to be that you had a few monoliths in a company. Now we have microservices... The company is all becoming about software.

So you have a growth of the number of projects, you have the growth of the number of tools per project, and together that's causing an exponential increase in the number of tool project integrations. And it's becoming too much work. That's why it's shifting.

When DevOps started, in the early DevOps days it was bring-your-own. Every team could figure it out for themselves. But then everyone was working on a different set of tools, and it didn't work. So the company said "We're gonna do best-in-class. We're gonna select ten DevOps tools that everyone here is gonna use." And then the transitions between the tools became the problem. The hand-off from your version management to your CI, to your CD etc. So the company said "Okay, we're gonna innovate, we're gonna make our own DevOps platform." We call that DIY DevOps, where you duct-tape together all the different point solutions. That DIY DevOps is where most companies are today, and it's starting to break down.

The next step is a DevOps platform. A single application with a single data store that does it all. It's the natural evolution as we need more and more tools, and we have an increasing amount of software in companies.

**Adam Stacoviak:** \[00:19:56.26\] When you say single app and single data store - now, obviously, you're cloud... I know - which is kind of funny, actually, just to rewind a little bit back in the day to the 2013 episode we did, which was (I would think) the earliest I can imagine even knowing the GitLab name, and the brand, and even you. I think we called you Sytse back then, which I believe is your real name, but now you go by Sid...

**Sid Sijbrandij:** Yeah, for sure.

**Adam Stacoviak:** ...because I think maybe that's easier for people to pronounce for you.

**Sid Sijbrandij:** Exactly.

**Adam Stacoviak:** So I even go back and listen to that episode and I stumbled over even saying your name properly, so I apologize again, even though I did back then, but...

**Sid Sijbrandij:** It's good. That's the reason I changed it. I wanna make it easy on people.

**Adam Stacoviak:** That's right. And at the time, one of our sponsors was DigitalOcean. And what's funny - I actually went back and listened to this, and I stumbled through the ad read. We actually did the ad reads live on the air; we don't do that anymore. We do those in post-production and we make them better, and all that good stuff. But one thing you said was that you were using DigitalOcean back in those days even... And it was part of where you stored some of (I guess) the application GitLab.

So when it comes to a single app and single data store, and you've got global customers, what can you share about the infrastructure of GitLab to make it fast and global? As a distributed, when it's a single data store... And how much do you know about your database, how it's setup? What do you know about I guess your cloud infra, basically? What can you share?

**Sid Sijbrandij:** Yeah, so gitlab.com is hosted on GCP, but as an open core project, what's really important to us is that people can host it wherever they want. So a ton of our customers host it themselves, and that can be on GCP, AWS, on Azure, on DigitalOcean, on their own infrastructure...

And then, when I talk about a single data store, it doesn't mean that the whole data in the world is in one place; it means that all your DevOps data is in one place. And the problem is if you have point solutions, they have different concepts. One calls it an environment, and the other one calls it something else, and it doesn't quite map, because that idea of what an environment constitutes is different. So you can't get the metrics of your review app, and now you don't know why your review app - what error came out of that. Or they don't fit with the right management; like, you're a developer, and it means in this tool you can do that, and in that tool you can't quite do that. So now you have to ask a colleague, because the permission system wasn't right.

What you wanna see over the lifecycle of work, like where does it get stuck? At GitLab you can measure cycle time; you can see "Okay, this is when I planned to do it. This is when I started working. This is how long it was in the review. This is when I deployed it." And you can see "Okay, where is stuff getting delayed?", so you can fix that. That's really hard if you use multiple tools.

So either you end up with a whole bunch of digital duct tape and you end up with a team of sometimes 50 people who are making your DIY DevOps platform, or you join the collaboration. Because GitLab is a collaboration of all the companies using it making it better together. You save a whole bunch of time, and you end up with something much better than you could make on your own.

**Adam Stacoviak:** Yeah, let's not forget that -- and I know you can't, and many can't, but GitLab is open source. You'd mentioned that one of the advantages, and I guess a value-add to using GitLab is that if your company buys in, let's say "Yeah, GitLab for us. We wanna use it everywhere. We wanna use it for our proprietary code." Okay, open source may have its home elsewhere, whatever. But this idea of having contributors be able to contribute back to GitLab, beyond staff of those companies. Can you talk about the advantages of that? Going back even to this idea of like the reason why you went to the IPO status versus an acquisition...

\[00:24:00.01\] And as you said back then, hey, if there was an offer that was an offer you couldn't refuse, as the mob movies might say, that you and others may have chosen that route. But IPO was the route y'all went, and one of the reasons why was because you wanted to stay independent. And independent means, again, back to being able to stay true to open source, and all this. But what does it mean for a brand or an organization or a team or an enterprise to choose GitLab and then also be able to have some say in how the application gets built over time?

**Sid Sijbrandij:** Yeah, it gives them two things. It gives them control, and kind of the fruits of the collaboration. So control - you can inspect the code, you can modify it, you can contribute back to it. If a company really needs something - and don't forget, this is one of the most... Every company has become a software company. So the process that delivers the software is one of the most crucial pieces. Sometimes you just really need something, and you can contribute it to GitLab, and it's there.

The best thing about that is everyone is doing that, so you benefit from what others are contributing. Every month, hundreds of improvements in GitLab are driven by the wider community... And it's like, one person writes it, in one organization, and all these other organizations benefit from it. And I think it makes so much sense that something you collaborate with is something you can contribute back to.

**Break:** \[00:25:27.11\]

**Adam Stacoviak:** How do you build a company around that idea, and then take it public? So you have - let's just put it in quotes - "three contributions" from your user base, whether they're enterprise, or individuals of the open core. And obviously, there's certain things that are in GitLab Enterprise that has a different license, so it doesn't have your standard MIT license, which I believe is your open core of GitLab is MIT-licensed, so very permissive... How do you build a company around that? How did you build a company around that?

**Sid Sijbrandij:** There's two important things. First, what's your business model? We tried donations, we tried paid support, but the only thing that worked was paying for software, and that's open core. There's some code that's open source, some code that's proprietary.

\[00:27:54.18\] Then it's like, "Okay, what is gonna be proprietary?" And we decided to do what we now call buyer-based open core. It depends on who the audience is for that feature. If it's aimed at an individual contributor, it's gonna be open source. If it's aimed at an executive who wants kind of company-wide reporting on compliance, it's gonna be a paid feature.

And one of the important things is even the proprietary code, you can see it, it's all out on the internet; you can inspect it, you can modify it, and you can contribute back to it. The code you contribute back to the proprietary part becomes "Yeah, we charge money for it." The code that you contribute back to the other part - it stays yours; you have your developer certificate of origin, and that's it. It's a shared effort.

**Adam Stacoviak:** How often does that happen then? How often do you see (I guess) non-enterprise staff contributing back to proprietary/you-make-money-from-it software?

**Sid Sijbrandij:** I think we're seeing it more and more, where people use GitLab in their daily work, and it's important... Like, this is one of the most complex things they do; they need a change, they need to make some progress, and people contribute back. So although most contributions is functionality aimed at ICs, because individual contributors are more likely to contribute; we have many, many more contributions from ICs than we get from executives, because typically they're not coders... And it's natural to make something you want. But we get contributions to the proprietary part of GitLab as well, and those are very welcome. And I think what we'll see more and more is that companies say "You know, this DIY DevOps platform \[unintelligible 00:29:37.06\] was so strategic that I had 50 people working it. Now that we start doing GitLab, 45 of them can move on to something that really differentiates our business, to really business initiatives, but five of them should stay behind. So if we need something, we can make it. If we need in-house expertise, we can do that."

So I think the future of software is gonna be more of a hybrid. It's not just commercial, off-the-shelf, and it's not just open source. It's a hybrid of the two, because that works the best.

**Adam Stacoviak:** I guess we're now at a point where 15 week ago you announced your IPO. I'm rough-guesstimating that, so correct me if my weeks are off; at least based upon this record date. Air date may be more than that, so if you're listening to this, it's obviously more than 15 weeks... But that's my rough estimation, and at least that's what my stock ticker shows; I now track GitLab, so... Congrats, I think the price today is at like $60-ish, something like that. Maybe $62, $63, something like that, per share. One, congrats. I mean, like I said, we've been talking for many years... I would, I guess, call us friends... Sid, I'm not sure if you would consider me a friend, but --

**Sid Sijbrandij:** I would.

**Adam Stacoviak:** ...at least friendly over the years, right? We're friends... I mean, I don't call you for your birthday; I wouldn't mind if I knew it, though. I would tell you.

**Sid Sijbrandij:** There's a lot of people I haven't bought a shaver, so I think we're friends.

**Adam Stacoviak:** Okay, cool. And one, I'm very happy for you. I've seen you, I would say -- I don't wanna use the term grow up, because you're a grown-up, of course; but mature, as a CEO, and then as a leader.

**Sid Sijbrandij:** Sure. As a leader, for sure.

**Adam Stacoviak:** And I think you've had a similar mindset, but I think you've obviously matured over the years, and I've been very impressed... In fact, a recent podcast we had - I can't recall which one it is in the moment, but I'll put it in the show notes... But I was commenting about your shadow program, and just how... We were talking about being real as individuals and as leadership, and I think you're probably one of the most - from what I can tell - real people that I've ever interacted with, especially at a CEO level. I think you seem very genuine, very real, very caring... And I love how you had that shadow program.

\[00:31:54.02\] Obviously, it's probably given a lot back to the individuals who have shadowed you, but I'm sure that you probably learned a lot, too... Because sometimes when you're exposed to both the positive and the negative about yourself, you grow a little bit. And maybe that's where you've gotten some of that maturity from, but... Speak to the shadow program, and I suppose just being real... Because you seem like you're a pretty genuine person.

**Sid Sijbrandij:** So the shadow program is one of the best things that have happened in my life. Two people at GitLab are in most of the calls during my week. And it's a two-week rotation, so there's always someone rotating in and rotating out that week. First of all, it's great for those people; they learn a lot. A person who just completed it was like "I did an MBA, and I spent years on that, and now in a few weeks I learned how it is in reality. It was a super-helpful addition to that."

It's also great for me. I get to share all the things I'm learning with other people, without a lot of time invested, and it's great to educate people. But also, you're a slightly better version of yourself when the audience is bigger. So I try to be a better version. I'm sometimes a bit real to the extent that I'm direct and negative, and that's something I will continue to work on through my career.

For example, right now the shadows rate me on every meeting I do. I get a positivity score. And it's exactly what you think it would be. And I get to reflect back on the day and what I could have done better. At GitLab, a lot of things are going well, so in general I should be pretty positive, and I'm not always like that. So it helps me reflect on that, but it's also giving these people an idea of across the company. GitLab is functionally organized, so you know exactly what's going on in your function, but it's hard to know what's going on within the company, and this is a great way to see everything and also see a big of high-level or executive decision-making.

**Adam Stacoviak:** Do those (I guess) scorecards - how do those get shared? They just get shared with you only? How does that work? Is there any visibility and transparency to others on the scoring?

**Sid Sijbrandij:** There's no transparency in that. It's in the CEO shadow private channel, and that's just me, the shadows and the chief of staff.

**Adam Stacoviak:** Gotcha. So what does that do for you then? It seems like then, based on this rotation and I guess timeframe of how often people roll in and roll out of this program, that it's pretty much always. Is there ever a break, when you don't have shadows?

**Sid Sijbrandij:** Well, coincidentally, someone had to not do the rotation last-minute this week, so we moved that up... So this week no. But I think about 40 weeks of the year we do it. It used to be a requirement that you already had to be a team member at GitLab for a while; we just scrapped that last week. So we try to keep it accessible and have a lot of people go through it.

I think for me, looking at those scores, it's a reflection. What you wanna be, especially in my position, if I say something, it carries more weight. So I wanna be really intentional. And sometimes you're negative, because there was really something wrong, and people should realize that and take action on it.

Sometimes you're negative because something else is going on, and you're a bit grumpy, and you aren't fully aware of yourself. But for that person it might be like the only half-hour they're gonna speak to you this year about that work, and it has a big impact. And you weren't intentional about it, and you've gotta improve that.

**Adam Stacoviak:** What do you think then -- is this a common program that CEOs do? Is this a common practice? We'll probably talk about remote, and how the pandemic shifted the world to really embrace this idea of remote... You've been remote-first for a very -- as far as I can remember really, but... Is this shadow program a ubiquitous thing among executives like yourself?

**Sid Sijbrandij:** \[00:36:02.07\] It requires an extraordinary degree of transparency and confidentiality. What other companies do is they have people shadow from time to time, but it's only one, two or three days, and the activities that they can attend are much more curated. All the hard conversations are moved out of those days to make it acceptable for people to shadow.

At GitLab they cannot attend every meeting, but they can attend a ton... And one reason is that we're really good in transparency. People are comfortable with bigger audiences, more people who are in the meeting, can see the recording, can see the notes etc.

Also, so far we've been really good with confidentiality. I'm not aware of a single shadow leak, and I'm really proud of the people who participate, of keeping it confidential and making it possible for future shadows to attend.

**Adam Stacoviak:** Yeah, that's something to think about too, because there's a lot more restrictions on what you can share and what you can talk about, obviously, because you're a publicly-traded company... There's certain things you can answer a certain way... I'd imagine that not so much before this particular call, but just in general you have some sort of HR or PR coaching of like "Sid, \[unintelligible 00:37:18.05\] My famous thing to think about is -- are you by any chance, Sid, a fan of the movie The Martian?

**Sid Sijbrandij:** The Martian doesn't ring a bell.

**Adam Stacoviak:** Matt Damon...

**Sid Sijbrandij:** Oh, that movie. I've seen it, but I don't recall it that well. I do think there's a lot of training around, for example, material non-public information. And as a mitigation for that, for example, the shadows are restricted in their stock trading.

**Adam Stacoviak:** Ah, yes.

**Sid Sijbrandij:** Like, even if you weren't before you joined the shadow program, what you learn during the shadow program is gonna restrict you from trading, because we don't want you to use what you've learned to trade and put other investors at a disadvantage.

**Adam Stacoviak:** Right. The actor who played Vincent Kapoor in the movie - just to kind of close that loop - he was, I guess... I don't wanna ruin the movie for people, but hey, long story short, the main character is stranded on Mars. That's the whole point of the movie. So I'm not ruining the movie for anybody. But the actor who played the character Vincent Kapoor worked at NASA, and had to give essentially a press conference, and he had to answer some questions... And he answered one question kind of just terse, I would just say. It was a very quick response, and the actress who played Annie Montrose -- cut to the next scene, it was basically like "You can't say that. You can't say that." So I'm just imagining now that you're an IPO-ed company and there's certain things you may have behind the scenes, "Hey, Sid, you can't say that like that anymore. Next time don't do that." It's not \[unintelligible 00:38:54.27\] but it's more like you've got buffers and boundaries that you have to endure as a CEO of a publicly-traded company.

**Sid Sijbrandij:** Yeah. I don't remember that scene. I do think I remember Matt Damon growing potatoes on Mars.

**Adam Stacoviak:** Oh, yeah. Absolutely. I guess what's this journey been like for you, since we've talked in 2013, maybe no ambition to IPO, maybe an ambition to IPO, I don't know... Maybe a desire, but not a possibility that seemed possible at that time. And then we've talked a number of times over the years, as I mentioned, us coming out and helping you with the masterplan, the livestream you did, had you on Founders Talk a year and a half back... How has this journey been for you to IPO? What do you think the biggest changes have been for you?

**Sid Sijbrandij:** Yeah, we've always had the ambition to become a public company, for two reasons. First of all, we had to return liquidity to our investors.

**Adam Stacoviak:** Yeah, that's kind of necessary.

**Sid Sijbrandij:** \[00:39:55.09\] And there's two ways to do that - either you get acquired, or you become a public company. And we want to stay independent, if we can. So that was great. The second thing was to get more attention for the company and the product. GitLab has been a bit of this great secret, and with going public we've gotten more attention for the company and the product and the impact that we can have for our customers. So that's been amazing.

At the same time, it's not the end of the journey. It's a step along the way. We have big aspirations for the company. We're in a 40-billion-dollar DevOps market, and we see that our customers, when they implement GitLab, they can release ten times as frequently as they could before, for example at T-mobile. So it's an amazing impact that you can have if you switch from a DIY DevOps to a DevOps platform. So we wanna keep working really hard to make sure that that's an option that everybody considers, and make sure that the people who partner with us realize that impact.

**Adam Stacoviak:** What about you personally though? What's changed in your life? Do you wear different clothes? Do you comb your hair different? Do you go to a different gym? How has Sid's life changed? Are you more or less stressed, do you have more free time? How's life for you?

**Sid Sijbrandij:** I think there's more visibility. So far, so good. I think we're super-happy with where we are as a company. I actually didn't go to the gym, but now I'm working out with my wife, and sometimes with a personal trainer, and it's great to be able to afford a personal trainer. I did a full-body workout this morning. I never thought I'd become a morning person, but I get up at 5:30 now every day.

Clothing-wise, I think you were laughing about my shirt...

**Adam Stacoviak:** I wasn't laughing, I was commenting. Definitely not laughing.

**Sid Sijbrandij:** I think I'm wearing the same thing every day.

**Adam Stacoviak:** I call it the Sid uniform. When I see you, at least the last four years...

**Sid Sijbrandij:** It's the Sid uniform. I wear the same thing.

**Adam Stacoviak:** Light blue, button-up, clean-shaven...

**Sid Sijbrandij:** It works. I have ten in the closet. I just wear that all the time. And there's more visibility, not just on the success of the company, but also on me as a person. I try to use that in a way that's beneficial for the company.

**Adam Stacoviak:** What about the company? How has the company changed? One thing I know about GitLab is your culture has been strong. You've been very strong on the remote side, you've been very strong in terms of your transparency, in terms of your open playbook, and how you hire and how you document the goings and comings on of your company... You know, not all of it is out there for the world to see, but there's just a lot that you put out there that's like - if you wanna know how GitLab operates before you even apply, it seems pretty easy to sort of skim and learn and kind of go deep. How has the company changed? Does the IPO change a company? Has it strengthened you? Has it made it harder to keep things, like you had said before, confidentiality? What's changed about the company and culture?

**Sid Sijbrandij:** I think it made us stronger. There's a lot of rigor around processes if you wanna go public, and that made us better. I think we got to keep almost all of the transparency, for which I'm grateful. And for our values, we have 20 ways in which we reinforce our values, and we're only adding to those. None of them got removed.

For the team members there's now more liquidity for their stock, so that's awesome... But also, we try to communicate "Look, this is a really big market. We have the leading DevOps platform, and this is gonna be a very exciting journey going forward."

**Break:** \[00:43:52.23\]

**Adam Stacoviak:** When we spoke last, we were kind of early steeped in the pandemic; it was May 2020. I think we were still trying to get our heads on in terms of what was gonna happen with the world, and just a few months into the pandemic. But GitLab has always been very remote-first, as far as I've ever known it. And one thing that I think you've done kind of doubling down on it has been this handbook for being remote. One, how did that help you, I suppose, with marketing? Did it help you with brand awareness? What was the real reason behind a lot of the remote and remote-first education you put out there?

**Sid Sijbrandij:** Yeah, because we had this public handbook of how we operated, we always got a lot of questions, and at a certain point we decided, "Okay, let's put more effort into this." We hired Darren Murph, the world's most productive logger, and he started taking the lessons from our handbook and putting it in a digestible form for companies.

\[00:47:53.08\] Then the pandemic hit, and suddenly, everyone had to go remote. And all that material he produced was suddenly highly in demand, and we were able to help a ton of customers go remote. And with that, they also realized working remotely you're really dependent on your tools, and same for producing your software; if you have everything in a single application, that's gonna make it easier.

I think what's happening now is that a lot of companies made that transition to remote working, and they're productive, but it doesn't feel that they have the same \[unintelligible 00:48:27.04\] the same connection to one another, so now a lot of companies need to become intentional about information communication, and we're trying to help there and give them tools to do it.

When people say they wanna return to the office, it's not because they miss the furniture; they miss those informal moments, and you can create that while being remote. Don't spend 99% of your time on planning when to go back to the office. Spend some of your time making the current situation work better for everyone, and build that trust, and build that connection.

**Adam Stacoviak:** What are your thoughts then? Do you think, in terms of remote -- will we go back, or will be always have remote? I mean, obviously, not every job -- you can't be a rocket scientist unless you're probably next to the rocket. Maybe you can; I suppose you can speculate on the physics of the matter. But to truly test it, you kind of have to be with other scientists, likely, in a similar or same room, and doing things. How do you see this remote world panning out? What's your perspective, personally?

**Sid Sijbrandij:** I think there's very few jobs that can't be done remote. I think in healthcare there's some obvious examples. Yeah, if you're very close to the hardware, that makes sense. But even a rocket, to a huge extent, is simulation. We're gonna go to hybrid, but there's two forms of hybrid. There's the hybrid where some people are always in the office and some people are always working remove. We think that's gonna be very miserable for the remote people.

There's also the hybrid where it's possible to come to the office, and people do that every now and then. That works, but then you still have the problem that you need to hire near your office location. And a lot of companies are finding that the ability to hire anywhere in the world is a great advantage, and they're using that more and more.

So we're gonna have collocated companies, we're gonna have hybrid companies of both variants, and we're gonna have all-remote companies. And I think a lot of the new companies are gonna be all-remote.

**Adam Stacoviak:** Well, I know that remote -- I guess as the enterprise grows, it becomes more challenging. But as you said, there's certain roles that truly just can't be remote. I saw a picture the other day on LinkedIn - it was a cubicle desk, with a mom. I assume a new mom, because that's what the caption said. And their child right next to them, in sort of like a play area. I don't know, is that a thing? Will be have that kind of scenario where we may go back to the office and you have a new mom or a new dad and they've got their kid next to them at the workforce? If you can work from home and you can do work from home, can you not do home from work, was the angle of this idea.

**Sid Sijbrandij:** I think for a lot of people the flexibility of remote is really helpful to deal with their other obligations in life, for example kids. We should also remember that the past couple of years it's not been working remote, it's been working from home during a pandemic where your kids can't go to school. That's quite something.

**Adam Stacoviak:** We've always, for example, paid for our offices. Remote doesn't mean work from home, it means work from where you wanna work, and if you wanna work from an office, GitLab will pay for that. It's just that we're not all gonna go to the same office.

So I think there's gonna be a lot more flexibility, and I think there's gonna be a lot of people who now experience remote. Their companies are gonna go back to their old ways, and they're gonna feel like they're not on the same page as everybody who's in the office. They're gonna miss out on information and career opportunities, and they're gonna say "You know what - I'm gonna work for an all-remote company going forward."

**Adam Stacoviak:** \[00:52:08.03\] You see a lot of power shift to the - what do you call it; the worker, or the employee... You see a lot of power shift there, because they're obviously the holder of their talents, and they can put that talent to work where they so choose. It's opt-in. And they can opt out, too. They can say "Well, if things change... And hey, I love this company, I'm loyal, I'll stick around for a bit, and see how this plays out... But hey, if this doesn't seem to work because I'm required to go to the office, or drive that hour to wherever, or live close to wherever", and that just doesn't jive with them, they have obviously the ability... And we've seen this kind of great resignation \[unintelligible 00:52:47.12\] people choosing where they wanna put their talents. People choosing where they wanna place their most formidable years in their career they choose. And sometimes, in many cases, in the majority of the cases, they're choosing to go places where they're remote-friendly or remote-first.

**Sid Sijbrandij:** Yeah. People have more options, and it's great. I suspect that companies are gonna become more differentiated. If you could only hire the people within some radius of your office, you wanted to make sure that there wasn't any argument against you. Now that people can join you from anywhere, I think you have the option as a company to be more opinionated, and say "Okay, this is what we stand for, and this is what we don't stand for." And it's not that one is right and one is wrong. We're transparent and we iterate. Apple is secretive and they have big launches. Both models work. Apple was a more successful company than GitLab. But we really believe in our model, and we wanna attract people who also believe in that. And there's enough options if you work remote to go somewhere else. And we don't need 100% of the world to wanna work for us. We can still hire more than enough people if only part of the population believes in that.

So I look forward to more choice, and not just because there's a greater demand for talent, which is amazing, but also because people are gonna be more picky. They want a company that matches the values that they have.

**Adam Stacoviak:** Absolutely. Let's come back to -- since you said comparing and contrasting there, let's come back to, I suppose, the win here that you've done for open source. Yet another win, I suppose, for open source. You're a publicly-traded company, you're open source... What do you think this has done for open source? This triumph.

**Sid Sijbrandij:** I think we're a very small part of that. I think we see a ton of great open core companies...

**Adam Stacoviak:** HashiCorp...

**Sid Sijbrandij:** HashiCorp, Confluent, Elasticsearch... And we're following in the footsteps of even a pure open source company in the name of Red Hat. So I do think that if you make something that's used by developers, by IT people, open core is becoming a more and more important way to do that, to the point where it's getting harder and harder for 100% proprietary companies to even get significant traction for their offering.

**Adam Stacoviak:** Let's just imagine somehow you're not who you are, and you can speak to Sytse from 2013, or even prior to that, about this possibility. What would you say to 2013 you, in terms of ambition and perseverance and possibility?

**Sid Sijbrandij:** I don't know, probably light up a little bit; it's gonna be okay. But who knows...? Who knows what that would have done with the old me. I think this path is not obvious, and pretty lucky with being able to find such an opportunity... I just focused on making the most of it.

**Adam Stacoviak:** \[00:56:01.11\] Yeah. I've always been impressed, I really have. I think you've done a fantastic job as the CEO of GitLab to IPO it, I believe... And I follow the headlines, so these numbers maybe need to be corrected; maybe you can correct them, I don't know. I think 13 billion dollars is what you IPO-ed at roughly, in terms of market cap... Which when we compare that against the obvious competitor to you, which is GitHub, being acquired for 7.5 billion - I think there was some sort of comparison, too... Like, if they would have held out, how much more they would have made... The shareholders, essentially, the option holders of GitLab, if they had done what you had done. I mean, that's just such a massive number, really... I mean, 13 billion dollars, Sid... Congratulations.

**Sid Sijbrandij:** I think GitHub sold for Microsoft stock, which did really well even since that acquisition.

**Adam Stacoviak:** Right.

**Sid Sijbrandij:** A lot of the stock is with early believers in the company; the early employees, the early investors... So we're working really hard to make sure that we keep growing as a company, and to make sure that it's a successful outcome for as many people as possible.

**Adam Stacoviak:** Since we're talking about GitHub, coming back to that - I know that over the years, and I think we may have touched on it a little bit the last time you were on Founders Talk... You know, obviously, GitHub is a competitor to you, there's an obvious comparison, because they're the next Goliath in the room... I don't know, are you David, or are you Goliath now, Sid? I don't know, you can answer that one. But there's a misconception, I would say, to GitLab, to know the DevOps story - and I know we shared that quite a bit, but... There's this chasm, I think, that people seem to think that GitLab is not the DevOps platform that you are; that you're only code. And that's kind of what GitHub was for a while, and still kind of is. Like, "Hey, that's where we put our open source code. That's where we put our code, period." And now, obviously, Codespaces, and Copilot, and the various things being bolted on enable that to become more platform-like. How does that misconception strike you? What do you do to push back on that?

**Sid Sijbrandij:** I think it's hard to see the breadth of GitLab, and that's because some of the functionality is very early. But if you look at our history, we've been able to go from just source control to also having probably the best in the world CI offering, to now having a pretty complete packaging offering, to now getting a better and better release offering with our Kubernetes agent.

So it wasn't obvious a few years ago that a DevOps platform was something that people needed, and it's becoming more obvious today, and we're really proud to be leading in that, and to -- we think it makes a ton of sense. It's a ton of functionality in one application, and there's not gonna be a whole lot of products in that market as we currently estimate the future.

**Adam Stacoviak:** What about teams then who enjoy the DIY, the digital duct tape? And as you had said, you believe you have one of the best in the industry CI platforms. And I don't disagree, because you've been tested, you've won awards, and I hear friends talk greatly about it. Unfortunately, our code is on GitHub; we are an open source project, we're liberally-licensed... We're a platform for ourselves. Not many people are committing to our code and forking us. But we are open source, we're a very -- the Changelog.com codebase is an example of a production Elixir/Phoenix application which is pretty cool... But if we wanted to use, for example, your CI, we would have challenges, because we'd have to have all of GitLab. We'd have to be all-in. How do you deal with that? Is that a major challenge? Are we a one-off and an anomaly, or is that a major problem that you're trying solve, where it's like, "Okay, if you wanna use GitLab, you'll wanna use the CI/CD feature"? ...which is amazing. How can teams just use one amazing feature and slowly adopt the larger GitLab ecosystem?

**Sid Sijbrandij:** \[00:59:59.02\] Yeah, you can. We're not forcing you to use everything... And almost every organization that transitions, transitions point by point. Point solution by point solution. You can use GitLab's CI with GitHub source control. So that's already possible today. And we find most customers replace about three point solutions a year. In year one, two and three. So it's a gradual adoption.

And as for your question about the digital duct tape and enjoying that, that's great. We have a value called "Boring solutions", and there we say "Look, don't bring your hobby into the codebase. If you like something, that's great. If you wanna experiment with something, that's great. Just don't bring it into the codebase. Because the more boring we can keep that, the easier it is for other people to contribute." And I think that's why you should pick GitLab over digital duct tape; it's more fleshed out, it's easier to operate, it allows people to contribute, and you can focus on things that make a difference for your business specifically, because you don't have to reinvent the DevOps wheel. That's an effort that's hundreds of contributions every month that are already happening.

**Adam Stacoviak:** Is there a sweet spot in terms of team size that truly can embrace and enjoy the GitLab ecosystem? Is it a team of four, startup, brand new idea, move fast? Or is it enterprise, lots of people, collaboration required? How do you see GitLab, or where is the chasm there?

**Sid Sijbrandij:** So GitLab is used by single individuals, seven-person teams, all the way to the biggest organizations in the world. I think in general the more tools you have and the more projects you have, the more it shines; the more complex, the better. Especially interesting is a lot of compliance and security requirements of really big organizations, lots of projects in motion really want more metrics into productivity, where are things getting stuck... That's where GitLab shines even more, and that's where the return is even bigger.

**Adam Stacoviak:** Because you're a full application, you're a full platform, versus just code, just deployment, just CI. Maybe I guess now with Opstrace and more monitoring, more observability features as you begin to integrate that team and that platform into the GitLab stack... It's interesting. What do you think then is the new direction? ...the next direction. Not so much new, but next. Where is GitLab trending? What's the next big thing? Can you share, can you forward-think? You can't really, but how much can you share?

**Sid Sijbrandij:** Yeah, we have a lot of information out there in public. In general, we're very early in building a dev ops platform. We consider only about 15% of the functionality in GitLab complete or lovable. So we've got a lot of work to do to make sure every single part is best-in-class. And at the same time, there's lots of exciting developments. For example, we're investing in MLOps, making it easier to also have your machine learning happening with the help of GitLab.

**Adam Stacoviak:** What about you? I know Dmitriy stepped away. I don't recall the exact details of why. Maybe it was just good timing... I know he's had like a 10+ year run, maybe; I can't recall the exact number of years. But what about for you? Do you plan to be CEO for as long as you possibly can? What's your personal outlook in your role at GitLab?

**Sid Sijbrandij:** Yeah, I'm committed to GitLab for the long run, and I plan to stay on for as long as the board will have me. And for Dmitriy, we talked about this during Y Combinator, because we were gonna raise from external investors, and I said "What's your commitment?" Because if you take somebody else's money, you can't go. You have to try to return that. And he said "My commitment is ten years." And I thought, "Wow, that's more than enough time."

**Adam Stacoviak:** Right. Barely enough time, actually... Right?

**Sid Sijbrandij:** \[01:03:59.03\] Well, I thought talking from 2015. And he said, "No, no, no. From the start of the project, from 2011."

**Adam Stacoviak:** Oh. Wow. Okay. So you were already four years into that ten years.

**Sid Sijbrandij:** Our IPO was to the month ten years after that.

**Adam Stacoviak:** Wow. What about your friendship? How did this journey treat you all? Was that bittersweet when he departed? Were you just loose terms on that ten years? "Can you rethink that? Can you make it 12?" How did you handle it personally?

**Sid Sijbrandij:** I think it was good. I never asked him to reconsider, and also, he was ready for it. Imagine someone who's so creative and so much of a builder to create GitLab from nothing. Ten years is a very long time to stick with a single project... And I think he did awesome.

As I said, in his last months he still integrated error tracking into GitLab. It was a great collaboration. He's now taking an extended break, and I look forward to seeing what he comes up with after that.

**Adam Stacoviak:** Yeah. Hopefully the creativity remains in the tech space, and he doesn't move to an adjacent industry where we don't get to see it too much. Obviously, if it's something tech-related, we'll hear headlines. Maybe we'll hear it no matter what, who knows.

**Sid Sijbrandij:** We'll see. But for now, he said "I look forward to no calendar."

**Adam Stacoviak:** Yeah, for sure. I can imagine that. Well, if I had an exit from an IPO-ed company, I would totally take an extended break, and I would not feel bad at all... Especially if I put my committed ten years in, and I stuck to my guns, and I followed through... Which is really half the battle, I would say; just showing up. Sometimes to win deals in life, just show up and do what you say you're gonna do. That seems like such a shame that that's the bar. Show up on time, and do what you said you're gonna do. That's all it takes to win in most cases. But good for Dmitriy, and good for you and the rest of the team for him sticking to that commitment.

What's next? What's on the horizon, Sid? What can you share? Anything in closing?

**Sid Sijbrandij:** Yeah, we've got a ton of plans. I'm just really excited about the market we're in. If you think about the DevOps market, imagine what an opportunity that is to go after. We can see the impact we have on companies; we're really excited to keep growing the capabilities, keep growing the community around GitLab. Every company needs to become a software company, and it's great to be able to help them get a lot more productive at producing that.

**Adam Stacoviak:** Well, Sid, it's always a pleasure to catch up with you. Very excited for you and proud of the work you've put in, and the rest of the team at GitLab. I think I may have DM-ed you on LinkedIn, I think I may have emailed you - I can't recall, but I imagine you probably had a million emails, and probably restrictions on who you can reply to... But when the moment happened that y'all IPO-ed, I was very happy for you, and behind the scenes I had my hands in the air and saying "Go, Sid! Go GitLab! Go team!" for you all, because I've been a big fan of yours over the years, and I'm just so happy that you've gotten to this moment in your life and in your career, and for the company.

**Sid Sijbrandij:** \[01:07:12.18\] I really appreciate it. Yeah, we were in this quiet period at that time, which means you keep your mouth shut, so I did that... But I really appreciate the support.

**Adam Stacoviak:** Yeah. I did not take offense, by any means; I knew about the quiet period, I figured that was the case, so I wasn't offended or upset, by any means. And I'm glad that you made some time to come here on the show today and just talk through where you're at and what you're up to... And I'm very excited.

Anything else, anything left? Anywhere -- like, if someone wants to keep up with GitLab in terms of the future of the platform... Our main audience obviously is curious about entrepreneurship, and they're curious about being a founder and leading a tech company, but I think our primary audience really is developers. So if you're speaking to developers right now, where can those folks go? Where is the best place for them to go to just track what is coming for GitLab in the future?

**Sid Sijbrandij:** Yeah, they can follow GitLab on Twitter, they can subscribe to our blog... Also, if you google "GitLab roadmap" you'll find a lot of resources. And there's also pretty good YouTube videos. For example, our upcoming release - every month we have a video about that. If you google GitLab and filter YouTube, you'll find a ton of videos.

**Adam Stacoviak:** Awesome. So you've got your roadmap online, we'll send folks to your YouTube, your Twitter... And I guess RSS on blogs. I don't know who subscribes to RSS these days; I know I still do... I still love RSS.

**Sid Sijbrandij:** Yeah, me too. But for all the rest of people, you can just enter your email address and we'll send it to you.

**Adam Stacoviak:** Very cool. Sid, thank you so much for your time today. I really appreciate you, and it's been fun talking to you. Thank you.

**Sid Sijbrandij:** Thanks, Adam.
