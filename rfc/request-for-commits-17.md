**Mikeal Rogers:** Why don't we kick this off by just getting into how you started contributing to the WP-CLI, and how you went from just contributing a bit to becoming the primary maintainer?

**Daniel Bachhuber:** Sure. I started contributing when I worked for Automattic. Automattic is the company behind Wordpress.com and the Wordpress.com VIP program. At that time that I was working for Wordpress.com VIP, there was just on the file server a directory with hundreds of different bin scripts for performing different Wordpress management actions. For instance, a customer would write in with "I wanna take all these posts with this category and also assign another category." Just kind of a data transformation thing.

In that experience, all of these different bin scripts had different usage instructions, and it was basically hell trying to sort out how each one worked. At the time, I was a support engineer, so the day-to-day was just like "Get a ticket. Ticket asked you to do this. Spend 15 minutes figuring out how the script works", and that sort of thing. So I really wanted better usage instructions across all of the different bin scripts, and more importantly, consistent usage instructions and consistent usage behavior.

A colleague of mine, by the name of Thorsten Ott pointed me to the WP-CLI project, which at the time was just kind of early stages, and he said, "Hey, you should check this out. It's kind of a standard pattern, or emerging standard pattern for writing CLI scripts against Wordpress, and maybe adopt it for your quest for more consistency."

In that process, I just started contributing a lot of actually what was in the Wordpress.com codebase back to the WP-CLI project. It was a great experience, and from there I eventually became the maintainer when the existing maintainer stepped down.

**Mikeal Rogers:** What was that process like? Did the existing maintainer just kind of give up, or not have enough time, or were you just doing so much more that they decided to kind of hand it off to you?

**Daniel Bachhuber:** We are already gonna enter the rabbit hole of Wordpress, and Wordpress is an open source project... So this guy's name is Scribu - a very good developer, strong developer. I really enjoyed contributing to WP-CLI's project because every time I submitted a pull request, he would just tear me to shreds; everything I thought I knew about programming, I obviously didn't know. But it was a great learning experience, and for me it was really enjoyable, the times at which I achieved the high of actually a pull request being merged, an enjoyable learning experience. So hugely valuable, hugely rewarding... I loved it.

\[00:04:24.26\] Scribu is a great, great developer. He was also very active in the Wordpress project as a committer, and eventually just kind of threw his hands -- I mean, he's obviously the better person to ask as to why he left the Wordpress community, but he made the decision to leave the Wordpress community, and as such, threw all of his projects into the wild... In the case of WP-CLI, I was just the most active contributor at the time, and so he asked me "Hey, do you wanna be the maintainer", and not knowing any better, I was like "Sure!" That's kind of how I picked it up.

**Nadia Eghbal:** So there was no official hand-off, or anything...

**Daniel Bachhuber:** He wrote a blog post. Scribu was known for being the maintainer, and then he's like "Daniel is the new maintainer. Daniel has decision-making authority on everything, Daniel is responsible for tagging new releases..." On my end, it's like "I've gotta figure out how the releases are made in the first place." There wasn't really a hand-off period.

This was 2013... So February 2013 I got fired, and then a month later I lined up my dream job, so that's beginning March 2013, and then my daughter was born, my first child was born end of March, and then in the middle of my unofficial week-long paternity leave I was laid off. So it's like, getting fired and then getting laid off. At that point I'm like, "I'm never gonna work for a company again. Bad decision-making there." And in April I decided to inherit the responsibilities of this old -- at the time mature, and kind of non-trivial project to adopt. It turned out to be a fun, great decision, but it wasn't necessarily like I had a huge amount of time or openness to my schedule to take on the responsibilities.

**Nadia Eghbal:** It sounds insanely stressful.

**Daniel Bachhuber:** You know, everyone kind of has I feel like emotional attachment to open source as a big component to everyone's relationships to open source projects, and at the time, for all the other turmoil in my life, I had a strong, positive emotional attachment to WP-CLI, so it was like, "Of course I wanna maintain it. I don't care how much time it's gonna take. This is the most meaningful part of my career right now." \[laughter\]

**Mikeal Rogers:** Yeah, you see that a lot... The people that you work with, those relationships tend to last a little bit shorter than the friends that you meet in the community, and a lot of the attachments that come along with the work that you do in the community.

**Nadia Eghbal:** Can we talk a little bit about that? Just because I was looking at your [GitHub contributions](https://github.com/danielbachhuber) -- I mean, you're incredibly active, like orders of magnitude active than most other people on GitHub... But at least just in my interactions with you, I rarely hear you sort of like conveying a sense of burnout, or being really stressed out by that kind of work, and it sounds like you just actively derive a lot of pleasure out of it.

**Daniel Bachhuber:** Oh, sure! I mean, why else would you do it? \[laughter\]

**Nadia Eghbal:** Yeah, I guess so, yeah! I mean, how do you keep such a positive attitude about all the work that you're doing? Is it just that you just set really good boundaries about the work that you do, or do you just love it that much and you're that crazy?

**Daniel Bachhuber:** \[00:07:57.18\] I think it's both. I think setting boundaries is integral, and if I could help anyone else involved in open source in any way, it'd be like coaching and education around setting boundaries. That is a whole two hours of conversation in itself. But I actually like to thank Github, for all of its limits, being such an amazing user experience around contributing to open source... Because the Wordpress project actually is still on SVN, in Trac, and like... I don't like to touch that with a ten-foot pole, you know? When was the last time you submitted a patch to an SVN-based project?

**Mikeal Rogers:** Um, probably 2009...

**Daniel Bachhuber:** Yeah, a long time ago. Right now, if I wanna fix something in Wordpress, I have to create a patch - using Git, thankfully - and upload it to Trac, and then hope that someone wants to commit my patch, or provide feedback, or even comment on it in the first place.

**Nadia Eghbal:** Has that, in your experience, changed how Wordpress gets new contributors, versus something like WP-CLI getting contributors, because it's on GitHub? Is it just a lot harder?

**Daniel Bachhuber:** Yeah... And that is a very multi-faceted topic, like "How to get new contributors? What is the right number of contributors for a project?" I think the developer experience of contributing is kind of tantamount to developers contributing to the project, but the thing to note about the Wordpress project is that the Wordpress project exists as this user-facing project; the end result of Wordpress for the end user is what is most important, not the developer contribution experience. To the degree to which the developer contribution experience improves end user product, then investments are made to improve developer experience... But it's all about the end user experience, and not developers wanting to commit new features to Wordpress. And I think that's -- so Wordpress claims 28% of the web, and it's because, you know, for all of its faults, it's a user-friendly product that lots of users depend on personally, depend on for business... And that user friendliness exists because the user is prioritized over the developer. Deep, heady topics. Can we talk about something a little lighter?

**Nadia Eghbal:** \[laughter\] \[unintelligible 00:10:53.13\]

**Mikeal Rogers:** I wanna come back to this point where, you know, it sounds like you're out of the job, so you've gotta figure out your personal sustainability, with a new baby, and you're also dealing with taking on this new project, which I imagine also has some sustainability challenges. Did you consider those kind of separate, or together? Or how did you kind of dig into that?

**Daniel Bachhuber:** I think at that time I -- so, the business I do right now and the business I've done for a while is just consulting; companies hire me to do different stuff. I have a few monthly ongoing retainers with long-time clients, and then on occasion I pick up a kind of a fixed "Go build this" sort of thing. So the open source thing has always been fun on the side, and investment back into the community, and that sort of thing... And that's how I treated WP-CLI and the many other projects I've done for a long time. And then WP-CLI itself eventually became this -- I don't know, the best metaphor is "Death by a thousand paper cuts." It's fun and rewarding until it's a job that you have to do, and it requires commitment on a regular basis, or else everything falls behind and it's on you, it's your fault that everything's falling behind. So I eventually hit that, but it took me like a good two years to hit that experience.

**Nadia Eghbal:** \[00:12:26.26\] Did it just sort of like creep up on you? Was there something that caused it?

**Daniel Bachhuber:** I think that for a lot of developers you're constantly seeking out new challenges, and that's part of the motivation behind what you do. So as soon as something becomes easy to do, or you're not really getting that thrill of learning something new out of it, then it just kind of becomes work. So I think it just took me that period of time to... And it's something that I'm actively thinking about too, as a part of contributor experience, because I think for a lot of -- you know, the leveling up of a contributor from a one-time contribution to regular, ongoing contribution, the motivation on their part is that "Wow, this is fun, new and exciting, and I wanna do this, and this is really interesting to me, because it's fun, new and exciting, and I get to learn and grow, and interact with this community that I'm slowly developing relationships with", and that sort of thing. And I think that the responsibility of the people maintaining the project should focus in part on keeping that alive as long as possible, because I think that keeps that contributor's experience healthy as long as possible. But then you need to kind of figure out what is a realistic expectation around how long someone's going to contribute as a part of that "It feels good, enjoyable, learning" type experience. Mikeal, what have you seen with the Node project in this regard? In terms of the average lifespan of a contributor, I guess...

**Mikeal Rogers:** Well, I mean, obviously a lot of people come in and leave, right? And we do optimize for people that casually kind of float in and out, so we don't rely on everybody sticking around. I think for the people that do stick around, it's just a matter of having a clear set of work for them to take on and responsibility for them to take on. And that's all working out quite well.

I will say that on kind of the burnout end, or the "I have too much work" end - and you can tell me if this lines up with your experience, but what I see a lot is that somebody will carve out responsibility for themselves, and they'll take responsibility for it, and they'll take on a task or a set of responsibilities that fits how much time they currently have to work on it, but over time, because the project is growing, that set of responsibilities actually doubles. And all of a sudden, that amount of time that they had cut out for it isn't enough. And it's not that they have less time, it's actually that the task has ballooned in size, without anybody really recognizing that. I don't know if you've seen that in your projects as well...

**Daniel Bachhuber:** I've seen it in my own experience, and I know that it's true just based off common sense. I think the other aspect of it too is people are typically ambitious with the amount of time that they have to commit to a project, and how quickly they will be able to accomplish what they have committed to. And if someone does that too early on, or at any point in the process, they can be burned out at that point, just because they get overwhelmed by this big thing that they've taken on, that's bigger than what they can take on. There's like so much stuff to do that's not committing code...

**Mikeal Rogers:** Yeah, definitely.

**Nadia Eghbal:** I think that what you were saying was sort of touching more on the incentives or like the intrinsic motivations for someone to keep pushing through whatever, no matter what the task is, and I guess I'm hearing from you, Mikeal, more about the size of the task or the actual work in front of you becomes unmanageable...

\[00:16:17.19\] But I think if you're sufficiently intrinsically motivated, it shouldn't matter what the size of the task is, or you would find help to push through it, so... I guess I'd push back on it a little, I don't know.

**Mikeal Rogers:** Well, I think also to Daniel's point, a lot of the intrinsic motivation is learning something new. And when people are early contributors and they're doing early reviews, on the outside that might seem like really menial work, but they actually are learning something by doing that. By teaching it to other people and reviewing other people's code, it is a learning experience for them, to a point; eventually it does become just kind of a monotonous thing. The Node project relies on just bringing in a lot of new people all the time, so there's always a new batch of people that are learning in that way, with these easier reviews that we have to get done. And the people that are really deeply technically invested in particular areas don't have to do that work. They can focus on just the really technical reviews.

**Nadia Eghbal:** I was thinking that the incentives sort of change over time maybe to -- I don't know if this is some of your experience, but maybe you join because you're learning all these great new things, and there are all these new tasks... And then there are other incentives to keep you in, like the leadership aspect of it, or the community, or just like the people that you like spending time with, and those are also good reasons to stick around and do anything. But I guess even then, you're still learning different things, or you're learning different types of skills if you're taking a leadership position, or whatever that is.

**Daniel Bachhuber:** So from your two's perspective, I'm really curious about the distribution of involvement types across an open source ecosystem, in the sense that there are a few different stereotypes that are easy to point to... One is the late-night hobby hacker. They've got a 9-to-5 that keeps them occupied, possibly even something unrelated to the open source project that they're contributing to, but they have the passion for the open source project, so in the time that they have available on nights and weekends they try to contribute to the project.

Then there's the kind of commercial open source contributor, in the sense that they have a 9-to-5 job that's directly related to the open source project that they're contributing to, and it's a justifiable use of their work time to contribute and be involved in the project. What do you think is the distribution breakdown, how does that break down amongst different types of projects, and are there other stereotypes that don't fit into one of those two?

**Mikeal Rogers:** I think there are, but it is really project-dependent, I think. For instance, what I see in projects that are focused on developers, or their users are developers - they get a lot more users, just like people that use it every day have an itch to scratch. Whereas something like Wordpress, which is incredibly usable for regular people that aren't developers, a lot of just the day-to-day users aren't gonna translate into contributors as much, right? So you're gonna see people much deeper into the investment end of it, where literally they are these hobby hackers, or these commercial interests. I think if you're observing that in your projects around Wordpress, that makes a lot of sense, because of the user base that you're tapping into there.

**Break:** \[00:20:01.20\]

**Nadia Eghbal:** Daniel, one of the reasons that I wanted to have you on here was because you've done a lot of interesting public experiments around both getting new contributors and new maintainers, and getting paid directly for your work, and in some cases those things even overlap... So I wanted to just kind of start by asking you, since you've tried both of those avenues and sustainability is both about money and contributors, what sort of balance have you found in terms of figuring out when it's one and when it's the other?

**Daniel Bachhuber:** That is a really hard question to answer, because I don't even have an answer to this.

**Nadia Eghbal:** Well, so there are a couple things - we could just start to talk about the [Kickstarter campaign](https://www.kickstarter.com/projects/danielbachhuber/a-more-restful-wp-cli), for example, which seemed like a really successful campaign that you did last year. I remember you said that you were gonna work on it part-time throughout that time; it wasn't gonna be a full-time thing for six months, and you decided you actually just wanted it to be a part-time thing, and I think right now the way you're getting paid is specifically part-time. So why are you not making it a full-time thing?

**Daniel Bachhuber:** Right. So back to the beginning -- and part of what's relevant is that I am self-employed, and I do all of my time-tracking, and measure how much I'm earning in terms of billable hours. So for me, participation on stuff that isn't global hours has to be justifiable in some way, or kept in check; otherwise I don't make enough money in a month, and my wife's like "Why can't we pay our mortgage this month?" It's like, "Well, I had too much fun doing this other thing, sorry."

So I think that kind of ties into the economic equation, because the economics of open source involvement, on one end, it's companies sponsoring employee time on a project; Facebook is doing this with React, and there's plenty of examples in the ecosystem for that. And that's justifiable from a company perspective, and it's -- it's not that it's easier to do, but it's easier to do when it's a line item in a budget, and it's much harder for freelancers to do, or even people that run small businesses, because half of an employee's time for a small business is actually a sizeable productivity loss for the business in investment of time.

The Kickstarter came about when I left the full-time job. It's like, I've been doing this WP-CLI thing on the side, I'd love to get paid to be able to spend more time on it, and how am I gonna get people to pay me to work on open source? Well, maybe I'll do a Kickstarter. And under the encouragement of half a dozen people, that were like "I love WP-CLI. I think that's a great idea. I'd put some money towards it", I launched this Kickstarter.

\[00:24:10.24\] I think one of the things about a Kickstarter campaign - actually, I wrote a blog post with all these conclusions that I came to, that I think can serve as a reference point for other people... But in order to sell a Kickstarter, you have to be selling something sexy, and often that's new feature development. And you know, there's costs with new feature development that aren't just directly the cost of developing the new feature... So the way that I kind of pitched it was "Here's this new feature that I'm gonna work on over the period of time", and frankly, I didn't really do rough time estimations and cost breakdowns and that sort of thing, because I knew that the maintenance burden cost of it far exceeds new feature development. And the Kickstarter - this was November of 2014, I think (at least a couple years ago) - got funded in 12 hours, and in fact, I was able to raise twice what I asked for.

The second half actually went towards a lot of my involvement towards the Wordpress REST API project, which was a new feature that was finally committed in total to Wordpress core last December.

So I thought it was an interesting experience and I learned a lot. I don't know that it leads towards sustainability for our project, because it's hard to be repeatable; you're selling a feature that you're building, so for better or for worse people have to like the idea of that feature. So there's a certain amount of marketing involved, and if you're an open source developer, maybe you're good at marketing, maybe you're not... So it only works and it is only funded if you think of some new feature that you're gonna build, and sell it to everyone. Is that really sustainability?

So it was a fun experiment... Maybe I'll do it again. The way that I think about Kickstarter projects right now is that they're kind of like debt financing, where your collateral is your reputation within the community. If you wanna raise 40k on your reputation within a community, or 50k, or whatever amount, you're free to, but it is debt that you have to pay back, in a sense, through labor or whatever you're gonna produce; no one's gonna give you that to do whatever you want.

**Mikeal Rogers:** There's a couple different ways to do crowdfunding, right? There's Patreon, where it's more recurring, and it's just sort of like directed at you. Obviously, Kickstarter really does has to be about a feature, because it's one big push... Is there something that you kind of prefer about that approach though? Especially because you're working on it part-time; do you like to have it locked into a project or a set of specific goals and not be that kind of recurring revenue?

**Daniel Bachhuber:** That's a good transition to what's going on right now, and I think it brings up a good point. I wanna cover the point first, which is of that Kickstarter campaign, the large dollar amount contributions represented easily the majority of the total amount. So if you wanna do a Kickstarter campaign, you've gotta figure out who your big backers are gonna be, and make sure that they are on board with funding you.

**Nadia Eghbal:** And how did you get those?

**Daniel Bachhuber:** People I know? I don't know.

**Nadia Eghbal:** Got it.

**Daniel Bachhuber:** \[00:27:57.27\] In the Wordpress ecosystem, WP-CLI is this project that everyone depends on; all the businesses in the ecosystem. So it's almost like priceless, in a sense. Not to toot my own horn a little bit too much, but there's not an equivalent good that you can just use. Yeah, someone could fork the project or rebuild it with Symfony Console or something right now, but there's not really a competitive equivalent application, and it is a tool that everyone literally depends on. I'm terrified of shipping a bad build and breaking half of all of the world's Wordpress data, you know?

So I think that if your project lends itself to that sort of value proposition for larger companies, then it's just a matter of having a conversation with them; you can talk to the C-level executives all day long about what you wanna do. If your project isn't defensible in that way, well, it's gonna be hard to convince a company to give you money to support the project, because they don't drive as much value out of your project that you're putting your time into. Or there's an equivalent project that they could easily switch to if your was no longer sustainable.

**Mikeal Rogers:** This is interesting though, because you're essentially saying that there is a particular skillset that you need to have in order to reach out to these companies and get them to invest in this Kickstarter, and I think when a lot of people point at Kickstarter as a sustainability method, they just go like "Just developers go put up a thing, and Kickstarter people will come to it." And it actually requires this other skillset, which honestly, if you have this skillset, there's probably easier ways to get money out of these companies.

**Nadia Eghbal:** Yeah... I almost have like a moral objection to having developers pay $5 and $10 donations to pay for this stuff, when really it's companies that I think should be paying for that kind of stuff. But I think a lot of people don't think about it or don't want to deal with the company's sponsorship side of things.

**Daniel Bachhuber:** But how do you force a company to pay for an open source product that they can use freely?

**Nadia Eghbal:** I don't know. You tell me, because you did it. \[laughter\]

**Daniel Bachhuber:** I'm not forcing anyone right now...

**Nadia Eghbal:** I'm sorry... \[laughs\] You've gotten a lot of sponsorships this year, right?

**Daniel Bachhuber:** Right. So the way that it's working right now -- well, the way that it worked last year is I tried to build a business around WP-CLI, building premium WP-CLI commands that were specifically tailored to larger businesses... And then also enterprise support, however you describe that.

I think it's a relatively common model amongst open source projects. It kind of worked... It didn't really work that well; it was gonna be like a long, slow grind sort of a business. But most importantly, because it's just me doing my thing, and I've only got so much time in the week, and my time is zero-sum, the time that I was putting towards building this fledgling business was taking away from my time maintaining the project. And at the end of the day I didn't have enough faith in the business itself. The business existed because I wanted a business to back WP-CLI the project; the business didn't exist because I found some other valuable thing that I could create and charge companies for. So at the end of the last year I just came to the conclusion that like "You know what? This is not working. Calling a spade a spade", and kind of the end of my rope, trying to figure out how to get money into the project.

\[00:31:53.23\] So I did this last-ditch titled "What is WP-CLI worth to you?" [blog post](https://make.wordpress.org/cli/2016/12/12/the-big-question/), and I just had a call to give me money, and some links where people could give me money, and it was probably the worst-timed fundraising campaign anyone could ever do, because it was in the middle of December, right as all the companies that would sponsor are closing up their budgets for the year, closing up their offices for the year... And it was really last-ditch on my part, but I wanted at the time to keep WP-CLI an independent project, and invest resources into it. Because I felt like the year prior I had kind of been just, you know, not really taking on any new big challenges, or technical challenges, just kind of like polishing things, finishing things up, closing shop.

Then what ended up happening is that Matt Mullenweg (co-founder of Wordpress, founder of Automattic), my old boss - influential person in the Wordpress ecosystem... He was able to negotiate with some hosting companies and other players in the Wordpress ecosystem, and they came on as major backers of the project. So where I'm at right now is that I have budget for 2017 to pay myself on a part-time basis, and I've hired another co-maintainer on a part-time basis, and I probably have budget for a third, or means to invest money into the project in other ways; I'm actually having a logo designed right now, and that sort of thing.

So as far as sustainability goes, like, sustainable for 2017 and loving it! And who knows what 2018 is gonna be. \[laughs\]

**Nadia Eghbal:** So it's just for 2017, the sponsorships?

**Daniel Bachhuber:** That is the commitment right now. Matt said it's not gonna be any problem to get the same amount of funding for next year. There's actually a good amount of money in the Wordpress ecosystem. One of the most challenging things is that these companies do have the money to invest, but that money is in the marketing budget, not on the "Give money to open source projects" budget.

**Mikeal Rogers:** There isn't a budget called that. Nobody has that budget line, it turns out... \[laughter\]

**Daniel Bachhuber:** Yeah, and companies too are -- or at least a lot of companies are hesitant to enter long-term pay for software contracts, because you can basically never get out of those, unless you suddenly don't need the software anymore, which is not very often.

**Nadia Eghbal:** It's interesting that it took Matt getting involved to get those sponsorships, and sort of this high-level "What is this worth to you? Seriously, somebody do something" kind of call to action. \[laughter\]

**Daniel Bachhuber:** It's interesting, but if you know the Wordpress ecosystem, that's kind of how the Wordpress ecosystem works. Here's an equivalent - Drupal. Drupal has a foundation, Drupal has Acquia, the company, which contributes a lot of development time... I'm pretty sure the foundation has employees... The Wordpress foundation has a board of directors and no employees. So the people that are involved in the Wordpress ecosystem on a regular, committed basis, are doing so either goodness of their own heart (God bless them!) or as some amount of contributed time as an employee of some company that is donating employee time towards the project. So a lot of that is just kind of negotiated behind the scenes. If a company wants to have more status within the Wordpress ecosystem, they may invest employee time on one or more projects.

\[00:36:09.16\] Matt will ask companies to invest employee time on behalf of the project. Matt's actually publicly called out -- there's this phrase, "Five for the future", so 5% of all employee time towards the project for businesses operating in the Wordpress ecosystem... And most businesses aren't contributing nearly that amount, even Automattic. Automattic, as of a year ago (I don't know the current numbers), it was more like 2% or 3% of employee time... But Automattic has (I don't know) 50 employees, or some large number, dedicated in part or full-time to the project in varying capacities.

**Nadia Eghbal:** As a maintainer, would you rather have a company offer employee time or money to you?

**Daniel Bachhuber:** Well, money is only good if I know what I'm gonna use it for. Obviously, I'm paying myself -- the opinion I have about that is I'm paying myself on a part-time basis, and it's a monthly stipend, because I think that like... You know, I'm an entrepreneur and a business owner and I've got little other things that I'm doing here and there, and if you're working in an open source community, I feel like you shouldn't get rich doing the open source project; you should get rich elsewhere, doing businessy things.

So the way that it's justifiable for me to get paid to work on the project is that I'm paying myself far under market rate, and it's part-time basis, and it's basically the time that I need to spend on the project to keep it moving forward on a regular basis... You know, ongoing committed time. But I don't expect it to be my full livelihood. It's kind of like a fun thing that I get to do on a part-time basis.

I think that the dynamics of contributing to an open source project on a full-time basis and a part-time basis are actually hugely different, in the sense that if you're working on a project on a full-time basis, it's possible to fall into this trap of inventing more work for yourself to do, whereas if it's on a part-time basis, my theory is that you have a limited amount of time available, and you're more likely to focus that time on what is actually the most important thing for you to work on, and is a meaningful contribution to the project... And just by the nature of restricting the amount of time that you have to work on stuff, you're less likely to work on the frivolous stuff that's not going to yield long-term benefit for the project.

**Mikeal Rogers:** It puts you kind of on equal footing with other contributors coming to the project too, that are doing it part-time. There's not this huge time and disparity between you.

**Daniel Bachhuber:** Right. And there's this dynamic too of like, "Well, I get paid to work on the project" versus "I don't get paid to work on the project", and that's something I'm struggling with every day. The way that I justify that right now is that the people that get paid to work on the project should actively be thinking about and working on making the experience of the non-paid contributor much more enjoyable. So the non-paid contributor should, in an ideal world, only get to experience positive emotions working on an open source project... Meaning when they go to the backlog to look for something to work on, all of the issues are clearly documented, they have their selection of stuff to work on. When they submit a pull request, they should receive feedback on that pull request in a timely manner. So the paid people get paid to do the janitorial drudge work, and the non-paid people get to scratch their itch, and learn, and grow, and that sort of thing.

\[00:40:12.00\] And also the non-paid thing is non-committal. I've started onboarding committers to the project, people who have commit access, but it's volunteer basis, and I'm trying to be very clear that "The expectation is that you're here to have fun, learn and grow, and as soon as any of those principles are in violation, I want you to leave. Getting burnout is a really sucky experience, and I don't want you to have that experience with this project."

**Mikeal Rogers:** Before we move into the next break, I wanted to just come back to the actual numbers... So you funded a Kickstarter... You said that it got fully funded and then got some more, and then now you have this new system that Matt Mullenweg -- could you tell us the difference in the numbers there, between what you raised in the Kickstarter and what Matt was able to raise from these companies?

**Daniel Bachhuber:** Well, I'm not sharing any of the numbers publicly, because there's a bunch of downsides to that and not very many upsides. From a perspective of other open source projects that have funding for maintainers to get paid to work on a project, it is a healthier number than that. And I have budget approximately to pay three people part-time to work on a project... And some budget for travel and other miscellaneous expenses.

**Break:** \[00:41:40.05\]

**Mikeal Rogers:** Tell us a little bit about why you did eventually decide to join the Wordpress project, and maybe why it wasn't always part of the Wordpress project.

**Daniel Bachhuber:** That's a great question, and also a very difficult one. Actually, it's not difficult to answer, because it's happened and there's a conclusion to it. So ultimately, the decision to join the Wordpress project revolved around the wp-cli.org domain, in the sense that... I don't actually own the domain. The original creator of the project owns the domain. And when it came to raising money directly for the project to pay myself, "Daniel's trying to commercialize this thing, oh my gosh!", the original author wasn't sure whether he wanted to give up the domain, or under what terms he wanted to give up the domain. So I'm thinking "Well great, I'm not gonna start a business around a domain and a trademark that I don't own." If it becomes a million dollar business, this guy is gonna come say "Give me 50% of it", or whatever.

\[00:44:04.17\] So it was just kind of stressful, and keep in mind this is middle of December, two days before I'm headed on family vacation to relax and take a break from life, and that sort of thing. And all throughout the vacation I had this unanswered question of "Under what terms am I going to get the wp-cli.org domain?"

When I got back from vacation, I finally was able to connect with him. His thought process was basically does he give me the domain outright, or does he lease it to me for $1/year under some specific terms, so that I don't take the project in some direction that's divergent from its original ethos, and what it is today, and that sort of thing.

At that point I'm just like, "There is no way that all this stress and agony and everything related to this is worth the amount of money that I'm trying to raise to work part-time on the project." So I got on a call with him and I'm like, "Okay, so keeping WP-CLI independent doesn't seem like it's the best option at this point. What's the second best option?" Well, you know, WP-CLI becomes an official Wordpress.org project. "Okay, let's talk to Matt about that."

I think that the reason that it hadn't been an official Wordpress project for a long time was again around the dynamics of the Wordpress ecosystem. Matt Mullenweg is definitely BDFL, for better or for worse, and the project itself is oriented towards the end user. So you as a developer open a new track ticket, say "I wanna refactor the bootstrap load process for WP-CLI." Okay, how does that benefit the end user? "Well, it doesn't, but it fits some esoteric corporate enterprise need that I have that kind of scratches my own itch too", and it's like "Okay, so not a priority."

I think for a lot of developers in the ecosystem there's a little bit of animosity - and at times a lot of animosity and tension - around the decision-making process for the Wordpress project, and... Why deal with that? If you can be independent and just kind of do your own thing... That's much better.

Ultimately, that was why it was not top of my list thing that I wanted to do, cede control to the Wordpress project, whose decision-making process is potentially divergent from my own.

**Mikeal Rogers:** The moment you said "Trac ticket" I was like, "Oh, god..."

**Daniel Bachhuber:** Yeah, there's a little bit of "Ugh... Ouch!"

**Mikeal Rogers:** Yeah.

**Nadia Eghbal:** Was the fear from the original maintainer about the project going in the direction whose vision he didn't agree with, or was it about the money part of it?

**Daniel Bachhuber:** You know, introducing money to any sort of situation always makes things more complex. One obvious here is "Daniel couldn't make this a proprietary license, or have some split license that's kind of orthogonal to the ethos of the community around it, in the interest of trying to commercialize it and make money off of it." I think he just wanted to retain some influence over the final decision there.

**Mikeal Rogers:** Is the project GPL? Is that the license on it?

**Daniel Bachhuber:** It's MIT.

**Nadia Eghbal:** Uuuh...

**Daniel Bachhuber:** Even more free!

**Nadia Eghbal:** Uuuuuuh...

**Mikeal Rogers:** \[00:47:55.06\] Well, when you said potentially do a dual license, I assumed that that would mean that it was GPL, because that's one of the ways that you can kind of get money out of GPL code if you own the copyright on it. But if it's not even GPL, that actually -- the dual licensing becomes pretty difficult.

**Daniel Bachhuber:** Yes. I wanna talk about GPL just a little bit, because the GPL is actually this huge topic in the Wordpress ecosystem, in that it's used as often a blunt instrument for enforcing certain economic dynamics around everyone's businesses in the Wordpress ecosystem, and ultimately it's around the end users.

**Mikeal Rogers:** And Automattic the company, as well, right?

**Daniel Bachhuber:** And Automattic... So the way that you make money in a GPL-based software ecosystem is selling hosting, selling premium GPL-licensed software - either plugins or themes - and what you're actually selling when you sell premium GPL-licensed software is updates and support. Because the GPL license grants the user indefinite use of the software, as long as they want it... As soon as they have access to it. So often all these premium businesses put that access behind some sort of paywall. But as soon as that software exists on the internet, anyone else can redistribute it, because that's one of the freedoms that the GPL grants you.

Then another business type is just kind of a SaaS business, where the GPL licensed software is not novel, and it connects to some SaaS application thing that you need.

**Nadia Eghbal:** So is there any conflict in yours being MIT versus everything else in Wordpress being GPL?

**Daniel Bachhuber:** There hasn't, and arguably that's because the MIT license is more permissive. The GPL enforces itself upon derivative works, which is why I couldn't actually -- if WP-CLI was GPL-licensed, I couldn't split-license the PHP code, because the PHP code could be argued to be a derivative work of the original GPL-licensed code. If I packaged some CSS with WP-CLI, I could split-license that... But that too has been the subject of many a holy war in the Wordpress ecosystem, in the sense that some Wordpress themes were sold under a split license, where the non-PHP files were licensed with some proprietary license, and people that do that in the Wordpress ecosystem are basically banned from the official Wordpress community... So it's very much discouraged.

**Nadia Eghbal:** You were talking in the last segment about you don't think people should get rich off open source, they should get rich off of a different way... You have feelings of not working full-time on these projects, but you're part of an ecosystem that's basically not any of those things. Automattic is I think well past a billion dollar valuation. Does that lead to any weird internal conflicts for you?

**Daniel Bachhuber:** I mean, my whole life story is weird internal conflict... Isn't that like the nature of being human?

**Nadia Eghbal:** \[laughs\] Yeah...

**Daniel Bachhuber:** As a software developer, I very much want to create new work and be able to benefit from the ongoing value of the work that I've created. Mike Perham of Sidekiq lives literally five miles from me, in the next little town over, and I've hung out with him a few times and know his story, and it's like "Man, I'm glad you made it!"

\[00:52:11.12\] Sidekiq, for those who don't know, there's the open source version, but then there's the enterprise version that is actually proprietary license, and charges based off of usage. For the Ruby community, that's perfectly acceptable, because many enterprises are perfectly willing to pay for the value that it provides... And for Mike, it has produced a very viable, valuable business, as long as it continues to operate as it does.

But in the Wordpress ecosystem, none of that kind of license-based business model is -- what's the best way to describe it...? It's just frowned upon; it's not part of how you do business.

**Mikeal Rogers:** I mean, it seems like all of this kind of licensing stuff around the GPL leads to a lot of conflict in the community side of things. And if you're really just focused on the community and the people aspect, and you're not looking at things from a licensing-centric point of view... It sounds to me like you're just a little bit exhausted by the level of conflict, in general.

Earlier, we talked a lot about encouraging new contributions, encouraging new contributors, getting people up this educational ladder, making it really easy for them, making sure that the paid developers are doing this stuff that makes it easier for newer contributors... How do you kind of reconcile what all of that stuff and what's going on in your project and your role as a leader in that project, in rooms and in conversations in the broader Wordpress ecosystem? I'm sure that they're talking about a lot of the same issues, like attracting new contributors, but have such a different context that they're living in...

**Daniel Bachhuber:** So it's fun being a part of an experiment in software development and sustainability in the Wordpress ecosystem. Matt himself looks upon the WP-CLI project as "This is an experiment of investing into an open source project that could be replicable or might not be, but it's something that we're trying out and we're open to trying out, and we're interested to see what the results are."

That's kind of the way that it's thought about, and many people in the Wordpress ecosystem are very acutely aware of the challenges of developing open source software. Because there's kind of two aspects of it. One is "Yeah, you just write some code and throw it up on GitHub and it's open source and that's great", and some people use it, and then there's kind of an associated maintenance burden, that sort of thing. But then there's also this challenge of within a mature open source software ecosystem - there's companies operating in that, and often those companies are actually competitors.

I wish I had said it at the beginning of the show, because one of the reasons that I love open source so much as I do is because I think it's this very fascinating time of companies get to collaborate without complicated partnership agreements. You know, my employee here can submit a pull request to Airbnb's repo, and that sort of thing... And there's so much mutual value creation. So for a mature open source software ecosystem - lots of companies operating, and really what they're trying to do is figure out how they can all collaborate for the better of the project, because that collaboration makes the project better, and ultimately makes their businesses better.

\[00:55:56.17\] It's a very challenging process, but for WP-CLI -- WP-CLI exists at the intersection of all these hosting companies that are dependent on it, agencies that are dependent on it, and other Wordpress professionals. And they all want to see the project succeed and be healthy and do exactly what they need to and solve more problems for them. This is an experiment in trying to deliver that value to them in a sustainable way, because it's not a solved problem.

**Mikeal Rogers:** So you're pretty aware of this exact same problem in the main Wordpress project, and you feel like you're solving it actually a lot better... What would your advice be to the main Wordpress project on how to go about this a little bit better?

**Daniel Bachhuber:** Well, the main Wordpress project has the challenge of reconciling what developers want out of the software, versus what end users want out of the software, and often those are divergent, or the priorities are just completely different. I think for better or for worse, Wordpress is end user software that developers are contributing to because either they use it too, or they have some business built around it, and the important contribution expectation to set is that ultimately your work effort is going towards a better user experience. The purpose of having you contribute to the project is to go towards a better user experience.

If your contribution does not meet that objective, then it's not important for the project... And I understand that you really want this feature built or thing committed, but unless it achieves that end goal, it doesn't make sense for the project.

**Mikeal Rogers:** So rather than balance those two constituencies, you have a sub-project -- well, not a sub-project, but a related project, Wordpress CLI, that really doesn't have the end user; it's sitting in the background, it's used by hosting companies and stuff like that... Is that a strategy, to start to spin off the components that have clear constituencies, like developers or hosting companies or whatever, where they can be created in isolation from all of the concerns about how this impacts the end user?

**Daniel Bachhuber:** I think that's one strategy for distributing the maintenance burden a bit, and that's one that I'm trying to execute on with WP-CLI right now. I think for the Wordpress project itself, it needs more involvement from non-developer contributors that really take the project's vision and shape it based off of their interpretations of how to improve the user experience, but aren't focused on adding new features, but focused on user flows, what the end user is trying to do, user experience and that sort of thing. But those are hard -- like, where do you find those contributors to open source?

**Nadia Eghbal:** That's what I was gonna ask. It's something that I keep hearing, but it seems really hard. It seems like if anyone were to do it, is would be Wordpress, just because they have a company that can help shape that vision, and they have sort of an orientation towards a BDFL, where you can sort of say "This is a priority", and bring those kinds of people in.

I'm wondering, when you were finding your new co-maintainer, what was that process like, to be able to find somebody not just to contribute, but to take a significant role in the project?

**Daniel Bachhuber:** So the selection pool was somewhat limited, in the sense that paying someone a part-time stipend that already has a full-time salary feels a little bit weird, because it's like "Where are you gonna fit that into your full-time job?" So the selection pool was self-employed freelancers, pretty much... Or a small -- I'd certainly be open to someone that owns a small business and is selling something, but has extra time to do something on the side.

\[01:00:05.01\] I think it kind of gets into diversity in representation in the Wordpress ecosystem too, or any software ecosystem. I think the end goal is as much diversity as possible, under the hypothesis that greater diversity produces greater software. And Wordpress I think already has very good diversity, because so many people enter into the project from the end user perspective; they wanna set up a website or a blog, and Wordpress is the most approachable software... And these people are like a lawyer here, and a teacher here, and some grandparent here. It literally is used by a huge diversity of demographics, and there's entry points for those people to become more involved in the community and participate as they have time. There's meetups, and Wordcamps globally, hundreds every year... The actual code contribution or product contribution is much more challenging still, I think, but there's a lot of user participation entry points. I got off on a tangent...

**Nadia Eghbal:** \[unintelligible 01:01:20.02\]

**Daniel Bachhuber:** So back to the original point, diversity in contribution base - as far as developers contributing consistently to open source projects, well there's kind of two ways that you can go about it. One is it's ancillary to your full-time work, so it's secondary to your full-time work, and you can do it on nights and weekends; then do it as long as that's sustainable and you don't get burnt out. And I didn't wanna set that expectation for the next person I was bringing on. Or you can do it on behalf of your employer, as part of employee time.

The Wordpress ecosystem -- you know, any of these hosting companies or agencies will hire really good developers when there is a really good developer to be hired... But really good developers are kind of in short supply, and I have incredibly high standards (probably too high) for the people that I wanna work with. So for me, I had this incredibly high standard of someone that I wanted to bring on as an equal in the project, and someone who I trusted the judgment of as an equal, and trusted the technical skill of. His name is Alan, and he actually has just kind of entered the Wordpress community maybe a year ago, after 20 odd years working in super corporate enterprise software development environment. He's very technically strong and very knowledgeable. I met him once... It was just kind of all through personal networks, and that sort of thing.

**Nadia Eghbal:** How did you convince him to take that kind of a role? Or I don't know if he needed convincing or not, but...

**Daniel Bachhuber:** He didn't need a ton of convincing. I think that the challenge is what is the expectation of commitment? He didn't need convincing because the project has enough of good vibes in the ecosystem that it's like, "Of course. Yeah, I'd do that." But then the second question is "What do you actually want me to do?" It's like, "Well, on average, 5-10 hours a week towards the project." You know, sometimes getting to work on stuff that you wanna work on, but often times just stuff that needs to be done, because it needs to be done, because someone needs to do it. That required a little bit of communication and discussion, what that would actually look like.

**Nadia Eghbal:** And just to sort of like -- as we're wrapping up here, and thinking about bringing on new co-maintainers, for you what is keeping you still on the project? Why didn't you just hand it off completely, and when will you know that you're done with WP-CLI?

**Daniel Bachhuber:** Oh, tough...

**Nadia Eghbal:** \[01:04:11.08\] Hard-hitting questions in the end... \[laughter\]

**Daniel Bachhuber:** Right at the end! "So, when are you gonna quit WP-CLI...?" \[laughter\]

**Nadia Eghbal:** Theoretically, when are you gonna know inside yourself that it's time to move on? Is it you being in a good place, is it you not being interested anymore?

**Daniel Bachhuber:** You know, finding new ways to be interested in the project is a forever challenge - not as a bad thing, but it's just a cycle that comes and goes. I wanna leave it in a better place than where I got it, and that's kind of preventing me from just throwing my hands up and walking away. And I think that ties too to personal reputations, in the sense that this ecosystem is one that I operate on. I have many users as clients for other stuff that they need done related to Wordpress, and it would not look good upon me to just throw my hands up - as I've done in that past - and walk away. I can throw my hands up, but as long as I -- because who knows... I've gotta trust that the next person to take the reins, or the next people to take the reins, are gonna produce as good of a product (if not better) that I'm capable of, in order for me to trust them to take things on.

I don't know... Mikeal, in conversations that we've had indirectly, I think that your perspective on liberal contribution policies is something that I am learning a lot from, and also have very strong feelings about... \[laughter\] Because ultimately, it comes down to trusting other people, and I'm a control freak. Trust to me is earned and built, not something I give out freely, I guess.

**Mikeal Rogers:** Well, I think one of the tricks to it is that one, Git allows you to make mistakes and to back them out. The level of trust -- we need to reset this mindset from the old Subversion mindset, where a mistake could cost everybody a day's worth of work that wants to work on this project, and in Git it's just incredibly difficult to do that. You can really easily back stuff out. So the level of trust that you need to give somebody a commit bit is much lower.

I also think that there's a higher level of decision-making around "Do we allow this feature to go in? Do we let the project move in this particular direction?" Those decision-makers don't have to be the list of committers; the list of committers can be the people reviewing code and the people that you trust a bit, and you can have a kind of separate group of people that are making the really tough, the really hard choices. Like you say, the people that have really earned that kind of trust.

**Daniel Bachhuber:** That's actually a really interesting topic that I wanted to talk about an hour about, which is another existential question I have is "Is WP-CLI done?" or like "In two months, could it be done, and we'll just call it done and then make bug fixes and no new feature development, that sort of thing?" Is Node done? Does Node need new features? It's like, "Well, clearly it needs this feature and this feature and this feature", but I kind of feel like as time goes on, the features get a little bit more esoteric... Or at least it's possible for all of the new feature development to become mostly esoteric, like totally off on the left field type of features; not necessarily like core features that end users are gonna use on a daily basis.

\[01:08:04.25\] And reconciling how we decide which new features to embark on building, because it's gonna be some amount of upfront development time, it's gonna be ongoing maintenance burden and it's gonna be support costs... I don't have a good answer to it at this point. I'm trying to develop a process for making those decisions and having other people making those decisions too, but I think -- like, one pushback I've gotten about investing time into WP-CLI is like "It's done, isn't it? Why does it need more work?"

**Mikeal Rogers:** To tie this all off and to pull it back to the liberal contributions stuff, one thing that I will say - and this is very counter-intuitive, because the people that come to your project often wanna pull it in strange directions... But it turns out that the more people that you add as committers, the more people that you give a stake in it, the more conservative the project gets about adding new things. Because the moment that these people become responsible for maintaining this stuff and fixing all of the bugs in it, the project becomes much more conservative.

**Daniel Bachhuber:** You succumb to entropy.

**Mikeal Rogers:** A bit, yeah. \[laughs\] I mean, it's good to be cautious. I think the more contributors that you have and the more committers that you have, you would assume you also have many more users, and it's a lot more users that you can break, so it's probably good to be more conservative about where you're going, right?

**Daniel Bachhuber:** I have a fun anecdote to that, related to another one of those internal conversations... So last week I shipped Google Analytics real-time usage tracking (anonymizing data, of course) and like, wow, did that get pushback... \[laughs\] Pushback to the point of reverting. So it was this feature, it's like tracked in real time (it was really cool) usage of WP-CLI, and it hadn't gone into a stable release, it was just the people that were running trunk, basically...

There's the tinfoil hat people that want it to be opt-in, and this and that, and I was just like "You know, it's not worth it..."

**Nadia Eghbal:** I'm so disappointed you reverted... Disappointed in you, Daniel! \[laughter\]

**Mikeal Rogers:** On that note...

**Nadia Eghbal:** On that note... \[laughing out loud\]

**Mikeal Rogers:** Yeah, I think we're all out of time today... Although I do wish that we had an hour to dive into liberal contribution some more. Maybe that's another conversation for next season, so...

**Daniel Bachhuber:** Well, I think how to decide upon new features as it relates to liberal contribution policy would be a good angle to it.

**Mikeal Rogers:** Very good. Yeah, I agree. We'll have to get into it. Maybe we'll do a conference panel, or something like that. Thanks for coming on though, we really appreciate you taking the time.

**Daniel Bachhuber:** Thank you so much for having me.
