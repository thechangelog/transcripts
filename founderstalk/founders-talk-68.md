**Adam Stacoviak:** This is one of those shows that starts out in a very unique way. Mike McDerment, the founder of FreshBooks, became a founder by accident. Like many of us, Mike had an itch that he just had to scratch, and one thing led to another, and soon enough FreshBooks became a key tool in the belt of many freelancers and agencies who were looking for an easy way to send invoices and get paid quickly online.

Getting started by accident was interesting to me, so that's exactly where we started. You're an accidental founder... How does that happen? How did you become an accidental founder, Mike? I still don't get that one...

**Mike McDerment:** First of all, I'd say when we started out -- I guess I had founded a design firm. But starting this company in an accidental way -- I think the inspiration for FreshBooks, for those who don't know it, was I basically was using Word and Excel to bill my clients; I saved over an invoice, and I just... That was the end of my rope, because that had a whole bunch of problems with it. And you know, I just built something; I wasn't really thinking. It was like a creative exercise. I think that's how it got started. It's like a little snowball rolling down the top of a big hill, and one thing led to another...

I will also say - maybe just a little window into me and what makes me tick is I like to follow my nose. Maybe it's a good scent for opportunity, and value, and the desire to solve problems for others, but that's really what it's been. I think I got into it through accident, and then just continued to follow the trail.

**Adam Stacoviak:** Gotcha. It seems kind of a common path, to just scratch your own itch, right? To figure out a problem -- in this case, you're an entrepreneur, so your problem turned into a company. You saved over an invoice, you created a better way to do online invoicing, in an age when it wasn't really happening much, right? Take us back to, say, the era. Name the year, give us a frame of reference for the length of time FreshBooks has been a business.

**Mike McDerment:** The moment when I got frustrated and saved over that invoice was actually in January 2013. If you go all the back there -- and I was running a small design firm, I had this business, I was working from home, I kind of had a constellation of contractors... So if you go back to that time, it was a very different time, with the technologies involved, with the availability of information for how to build a company.

Frankly, I think this notion of being a founder was less an obvious path. I think the movie The Social Network, and Facebook, and all this stuff -- there's been quite a significant transition, I would say, in just awareness of entrepreneurship as a path, and its desirability. The markets have been exciting for the last while so people are certainly considering it more. But back in 2003, it's like, the DotCom bubble just happened. Everybody's running for the hills; not too far from 9/11... It was a dark time. The technologies people use today to build the kinds of products and services we run just didn't even exist. So that's a bit of the context for where we got started.

**Adam Stacoviak:** Yeah. And just to clarify, you said 2013, but I think you meant 2003...

**Mike McDerment:** \[00:04:14.28\] Oh... \[laughs\] My bad. Hopefully, people can switch context there. Absolutely, I meant 2003. Yeah, that was the moment we got started, and it wasn't really a company for a little while, yet.

**Adam Stacoviak:** So let's talk about maybe that path then, the early days. I don't want you to go through your entire history, I'd like to focus on some things that you're doing now as a CEO... Because I think Mike today versus Mike in 2003, or even 2010, when we last spoke on a different podcast that I ran, called The Web 2.0 Show - that interview is still out there; we'll link it up in the show notes, and you can go back and listen to how terrible I sounded, and maybe how amazing you sounded, I don't know... We'll find out.

**Mike McDerment:** \[laughs\] We're probably both in the terrible bucket, who knows... Yeah, I'm afraid now. \[laughs\]

**Adam Stacoviak:** But back in these you'd mentioned that -- you're right, entrepreneurship wasn't something that was... It has become a thing that people are more aware of. And I think too, as you'd mentioned technology being available - today we have so much very modern software available at the touch of any button basically, to any software developer, or anybody who would have this itch that you once had... In those days you had to make everything. You were starting literally from scratch. Open source wasn't even as prolific as it is today, so... Help us understand the technological landscape of then, and the hurdles you had to go through to build a stable application like FreshBooks would have to be to face a Goliath like QuickBooks, or something else.

**Mike McDerment:** Yeah, very different times. There's two major things worth mentioning. First of all, a technology like Ruby on Rails, a framework for developing web applications really didn't exist, and we were building our own and rolling our own. There were some at the margins, but nothing like what's available now... And frankly, in the next 24 months after that, the landscape of Rails getting momentum and what have you was a big change. We were a LAMP shop, so PHP, Linux, Apache and MySQL.

**Adam Stacoviak:** Right.

**Mike McDerment:** So I think just all those technologies that people take for granted now, like jQuery - not around; these fundamental building blocks... And then I think the other major one I'd call people's attention to, that we've seen over our tenure, is actually mobile. Smartphones were not a thing. I didn't even have a cell phone when I started the business. I was like "Yeah, forget it, I'll just stick to landlines."

**Adam Stacoviak:** \[laughs\]

**Mike McDerment:** Eventually, I got a clamshell... I may have had actually a pager for a while, and whatever... But it was just different. There was a whole other platform we needed to start building these products for, and frankly, that mobile piece started to just bring much more clarity to the art of ease of use and the user experience. It just forced -- it really brought new expectations with what is possible to people. I expected on my phone and my desktop - I expected those to be easy to use; like, really easy to use. I expected maybe to work with location services... Whole other considerations that no one was thinking about when we started that.

I think those were two of the big, fundamental changes from a technology standpoint. I guess the other one would be just cloud, being able to host your products in the cloud, versus bare metal, whether you're running it, or like we did, having it managed at Rackspace. But you know, those are three huge changes in terms of the technology landscape for these kinds of products.

**Adam Stacoviak:** Well, let's compare and contrast then, for the listeners' sake... I wanna get into this rewrite/competitor you built in a bit, so kind of dovetail into that if you'd like, but compare and contrast the technologies that you built the classic FreshBooks on, and the things you're using today... Like, are you using open source? Are you in the cloud? You don't have to go too deep into that, but just the tech... Give me kind of a bird's eye view of today versus then.

**Mike McDerment:** \[00:08:17.26\] Yeah. So we've always been open source, just LAMP stack being a thing... It's just that they were seriously under-developed at that point in time. Today we're a single-page app, with Ember hosted Google cloud... I think those are some of the big pieces. And then you have all these tools available to you, whether it's things like Datadog or whatever to monitor application performance, or all the tooling...

**Adam Stacoviak:** Observability, monitoring, stuff like that.

**Mike McDerment:** Yeah. GitHub to support your development practices... There have been a lot of changes in and around the actual technology choices that you use to build your actual product. A lot of the improvements have come in, like how we facilitate the production of software as well.

**Adam Stacoviak:** Well, let's dovetail then into how you almost killed FreshBooks. I assume that at some point -- I don't know really, I can only speculate, but it seems like maybe the technical direction of FreshBooks wasn't going the right direction, you needed to scale and do things, as you'd mentioned, mobile came into play... Maybe even responsive design had a big issue on that, or maybe just the fact that we had multiple-device styles, whether it was a desktop, or an iPad, or an iPhone, or something like that... Bring us into this idea of creating a competitor. This seems very -- I've never heard of this before, ever.

**Mike McDerment:** Yeah... To be honest, I think it's a proud moment. We like to think we find creative solutions to problems here at FreshBooks. That's part of the art, and this was definitely one.

Effectively, where we got to was -- you can talk about the age of some of the technology, and we had moved on and started upgrading parts of our stack, and using... We use a lot of Python today. We'd already started that for a lot of our back-end services... So we're using an ever-evolving and improving collection of technologies, that are more and more modern. So we weren't stuck back there.

But one of the places we were stuck is the architecture of our application when we started out was just not clean, so we had a lot of back-end, or almost middleware (if you want) logic baked in with our front-end. So if I think about the root cause for what we decided to do, which was to fully replatform, it was really because "Hey, we believe consumer expectations have changed so much - because of mobile, because of other advances - that if we want to win long-term, we're not gonna be able to refactor our way to greatness."

So we started out and said "Okay, if user experience matters, ease of use and simplicity, we have won on that today, but it will be harder and harder for us to win and win again, and win long-term, if we don't do something radical design-wise. Let's design those designs at where it would be... And then, you know, can we get from here to there?" And the short answer was "Not really." So we decided to replatform... And in so doing, it opened up a whole series of other problems for us.

Questions when you replatform - if you read Joel Spolsky, or what have you - the number one strategic mistake you can make as a software company is "You just don't do it. You're bound to fail."

**Adam Stacoviak:** It's severely frowned upon, yes.

**Mike McDerment:** Yes, it's severely frowned-upon, and I think there's good reasons for that. First of all, it's gonna take longer and cost more than you think. You may never finish. That is a very likely scenario. And actually, we tried twice before, and failed... So it was the third time that we kind of got it done.

My favorite ones are maybe less obvious and more business-oriented, but you could build another version of your offering, and it could fundamentally perform worse from a business standpoint, and you wouldn't even know. What happens is inside the building -- you're building a new platform, and your team is falling in love with doing the new thing... But that doesn't mean it's better, or more business-performant. And that should be the reason you're doing this stuff. Technology, as much as we all love it, is a means to an end, and if you're making the \[unintelligible 00:12:05.27\] So you wouldn't know that for sure...

\[00:12:14.18\] Then there's the good old "Hey, your competitors are still moving, while you're standing still, replatforming." That's not good. They're catching up if you've got a lead. Okay, that's bad, because it's probably gonna be a multi-year thing if you're relatively established... We're number two in America for small business accounting software, so it's hard to do that...

And then finally, my favorite one - I like to call it a sophomore jinx, but I like to describe it this way... If you've ever had a band you love their first album, and you go buy the second one and you're ashamed to be a fan, because it's so bad...

**Adam Stacoviak:** Yeah.

**Mike McDerment:** Right? That is a bad scenario.

**Adam Stacoviak:** One-hit wonder, or one-album wonder...

**Mike McDerment:** Yeah, exactly. It's like, "Man, I don't wanna be one of those..." I think that presents itself when you go and redesign a new thing. There's no guarantee your customers are gonna love it. People are inherently afraid of change, so things are kind of stacked against you...

So then we had a whole bunch of problems. Basically, like "Oh, how do we measure it and know it's better? How do we get some stealth while we're working on this, so our competitors can't find us?" I was chewing on all these problems and came up with this crazy idea one weekend when I was chewing on these problems... I was like "Well, what happened if we created a company that had nothing to do with us? No one could track the two companies together. And we use that as like a Petri dish to build the new FreshBooks." What we would get out of that is we could build something out of our competitors' eyes, or even our customers' eyes, frankly, which is helpful in a lot of ways. We could scale it up to know if it was actually business-performant and better...

Because it wasn't our brand -- and I think once you have a brand and people trust you, you really cannot take as much risk... A really new, fragile, embryonic technology - there's big risk in that, whether it's user experience risk, or production availability, or data loss risk... All these risks are there. So if you're flying under the banner of your existing brand, it gets very hard to take the kinds of risks that lead to something really innovative. I think that's why actually a lot of big companies suck at this stuff. It's one of the reasons; there are others... But it's less talked about, and super-important.

I really wanted to have an environment and a set of conditions where people can take risks. So by creating this new company, which we incorporated on its own, had its own website, its own brand name, did everything over here... We ran it actually live for like 9-12 months before determining it was ready to switch it over and start moving some people over. That was the approach we took, and that was kind of why; that was the context. But yeah, it was definitely a different way to solve a problem.

And then I'll go further and say then we had this other problem of "Okay, we have two platforms. People don't like to switch..." We believe in the four E's, which is Executing Extraordinary Experiences Everyday. Very customer service and customer-focused orientation as a business. We recognized that people wanna not be -- you know, a lot of migrations go badly because you're building a platform and you force everybody to migrate, that platform's not ready... And as much as you think it is, and your team is in love with their new thing, I can tell you - the new FreshBooks was not perfectly for everyone day one, at all. So it would have been tragic if we'd forced everybody over. We didn't do that.

We actually ran both platforms and let our customers choose when to move over, and if they wanted to move over. We thought that was the right thing to do, because we are a serious business software, we are playing a core role in people's lives... And having that choice we just thought was empowering to then, and would help build trust. We actually helped people roll back if it didn't work out the way they wanted it to.

So all this -- we tried to take this challenging thing that is usually a major trust-mitigating event and find a way to design the experiences so ideally it's trust-building or neutral. We had lots of people who were super-excited about the new FreshBooks. The vast majority. But we definitely had some people who were like "This is not what I had hoped." And that might have been two years ago. And now they'd be like "Oh, it's better than I imagined." This is the thing about software.

\[00:16:12.07\] So I think not only was creating a new company novel and different, our approach to migrating customers from one platform to another - I've never heard of anyone else doing that before; also novel. I think the team, and for executing the complexity in those things, and conceiving of them, deserve a lot of credit.

**Adam Stacoviak:** Certainly it would take a lot of trust of a team in a leader like you to believe in that path and to put their neck on the line every single day, and come to work, and kill it, and do what you've done... So I guess the question hanging in my mind is "Is the new FreshBooks the same technology that you built with this competitor? Was it a one-to-one?" Did you essentially acquire that company? So you wanted to build it in secret, but in the public side at some point they do connect the dots, and you're here talking today, so it's not a secret... So how do you do that and then fold all this in in a way that remains trustworthy?

**Mike McDerment:** Yeah, we could probably write several books on this...

**Adam Stacoviak:** Take your time with that one...

**Mike McDerment:** No, I'll try and articulate it, because what's really fascinating about this when you're inside the problem is literally -- like, you are lost in a maze of possibilities, and it is completely overwhelming, you don't know which way to go, and it's like you're kind of at square one on this journey of building software. That is exhilarating, but also kind of terrifying.

So here's the thing - that seemed so complex to us, but after a time I came to realize \[unintelligible 00:17:37.17\] it's like "You know what - if you're not us, if you're a net new person to FreshBooks, and you sign up for a new offering, you don't know anything else. You don't care." \[laughs\]

**Adam Stacoviak:** Yeah. All you want is a good product.

**Mike McDerment:** Yeah. So it's like, we're managing all this complexity and have all this history, but somebody who signs up today - all they know is what they signed up for. So basically, what we did is we went back to the users of the new platform (it was called BillSpring), and we told them it had been acquired by FreshBooks. Full stop.

**Adam Stacoviak:** Okay. I was curious how that would work out.

**Mike McDerment:** Yeah. And it was like "Hey, we've acquired it." End of story. There was not much \[unintelligible 00:18:16.17\] That's fine. And they could keep using it, so whatever.

**Adam Stacoviak:** And in all honesty, that's exactly what it was, right? I mean...

**Mike McDerment:** Yeah, yeah.

**Adam Stacoviak:** That's true. It's not that it was not factual. That's the truth.

**Mike McDerment:** Yeah. The part that was less obvious was that we'd built it. \[laughs\]

**Adam Stacoviak:** Right.

**Mike McDerment:** I hate to think anyone would think we were disingenuous about that, like they were actively trying to get away from us, but... No, so we designed, built, conceived that whole thing, built it... Then we sort of acquired it, and that was the public way for people to easily understand it, and we started flying our logo there. Then we just started signing people up, who signed up at FreshBooks, on that new thing. It was kind of that simple.

It took us a while to realize it could be that simple. That was a thing... And again, I think we deserve a lot of credit for -- I think we could have executed it in a much more convoluted and confusing way. It was convoluted and confusing for our experience, but we got to a place of simplicity, and that is a beautiful thing.

**Adam Stacoviak:** Yeah... You couldn't do that with, say, GitHub, for example. You mentioned GitHub earlier. Let's say five years from now -- Microsoft recently acquired GitHub, and they're like "Wow, we have to replatform this thing." I don't think GitHub would be easy to replatform in the same way you had done. So it seems like this solution -- so listeners who are tuning into this might be thinking "Dang, Mike, you just hit the Holy Grail. I've gotta replatform" or "I'm in a scenario like this. Let me do what you've done." I mean, one, would you do it again?

**Mike McDerment:** I think that is the question, and I honestly don't know. The benefits and the trade-offs were so interesting and fascinating... I think for the team and the company and realizing what we're capable of, I wanna do it every day. But in terms of the cost and the time and what have you, it's like, "Man, could we find a way to refactor it?" \[laughs\]

**Adam Stacoviak:** \[00:20:08.19\] How many years has it been into this transition? Because I'm a customer... So let's do full disclosure here - I'm actually a user of FreshBooks for a long time, using the classic version of it, and I know that you've had a non-classic version for at least a couple of years.

**Mike McDerment:** Yeah, that's right. And we would have started building that 18 months before that, so call it a solid 3,5 years.

**Adam Stacoviak:** Right. I mean, some businesses don't even last that long, you know what I mean? And you've been transitioning and migrating for that long. That's pretty wild.

**Mike McDerment:** Yeah, running in parallel. I think we realized we could do that without too much burden, which was good. And maybe someone else's platform - that would not be the case.

**Adam Stacoviak:** Right. Divided efforts, forked interests, attention spans etc. So they are two distinct platforms, and even today you still have FreshBooks new and FreshBooks classic. You still have two distinct platforms.

**Mike McDerment:** We have customers on two platforms, yeah. We're only available as new FreshBooks.

**Adam Stacoviak:** Right. So when somebody buys today, somebody subscribes today, word of mouth, whatever, it's new FreshBooks only.

**Mike McDerment:** That's correct.

**Adam Stacoviak:** What's the skew then percentage-wise, old platform/new platform?

**Mike McDerment:** Most people are on new FreshBooks. Lion's share.

**Adam Stacoviak:** So I'm the anomaly here then.

**Mike McDerment:** Yeah. You're certainly in the minority. \[laughs\]

**Adam Stacoviak:** Well, pre-call I did say that it was my fault, not your fault, because it's just fear of change. That's the problem here. It's not that you haven't sold me on it, it's just plain, old, simple fear of change... And that's what happens.

**Mike McDerment:** This is the thing about replatforms, and that's why I think the mechanism in letting people go - we're trying to boil a frog, Adam, so to speak... Until you're just like "Yeah, it's just time for me to go over. I've geared myself up, and it's gonna be great." That will happen in time, and we'll have everybody over on new FreshBooks in time... But for now, it's great. We want happy customers, and it's been working well for us.

**Adam Stacoviak:** Let's laser in a bit more to you. I know we've been talking to you mostly about FreshBooks' journey, not so much Mike's journey... But what are your biggest challenges today as a CEO? What are you personally facing?

**Mike McDerment:** Yeah, my patented answer to this question - but I'll get into some other more interesting things - is "Ask me in 20 minutes and I'll have a different answer." I'm just always chewing through a series of problems.

I think if I make it really personal -- you know, we're over 300 people, we're hiring 50 right now... I think how your role changes, and how you need to change, and these kinds of things... I think I went through -- I was very much like a hands-on, directive startup founder at the start, that sort of "crazy founder guy", who was pushing things through, and what have you... Then I went on a journey of learning how to get out of the way...

The biggest unlocking thing for me was realizing I just needed to hire a whole other level of seasoned maturity around me, and that's what I like working with... I've always been great with people who have been there, done that, got the T-shirt. It was kind of the in-between phase that was harder.

So I built a team of those folks, and then started learning how to lead a little more, and I think this whole BillSpring thing was like "Hey, that's the job. You're leading." So that was part of the journey. And everyone still has their tendencies and biases, so I'm constantly trying to grow out of any sort of reactionary behaviors, and always be very disciplined about how I'm manifesting, and the effect I have on others, and for the business, and thinking sort of long-term...

I mean, I think one of the hardest things for me has always been letting people make their mistakes. I'm sitting there, it's so obvious to me they're making a mistake, I just wanna give them the answer, but you've gotta let them go and do it. That has been one of the hardest lessons for me. And that's not to say I think I'm always hard, or anything like that. That's not the point. But when I know someone's heading down the wrong path... Back in the day I would never let them do it. I'd just be like, "No, we're doing this", whatever.

\[00:23:59.19\] Ultimately, people don't build up and get to the same level of capability if you're sort of stealing that away from them. So that was poor leadership and management on a bunch of levels from me. That I think has been one of the hardest things.

And then, interestingly, I'm coming into a phase again now where it's like "Okay, things are operating at a scale...", I brought in a better half, who's like a president, to drive the next growth period of the business... And I actually need to go back to almost those earlier days, and tinkering and bringing some of that kind of thinking into the business... So I'm working on longer-term, squishier things now, around brand, and things of that nature, which I'm very well-suited to do, but are decidedly less operational; they still require a measure of leadership, but the focus is very different. Far more intangible, nothing urgent, but all highly important, as opposed to a lot of years where everything is urgent and important. So that's kind of a little window into my life these days.

**Break:** \[00:25:09.17\]

**Adam Stacoviak:** The next question for you, I guess, dove-tailing off of that, is how do you keep up as a leader? Where do you get your skills? Do you read books, do you have a coach? How do you keep yourself sharp? Is it just bloodied knuckles? Are you a lone ranger? Give us your personality type.

**Mike McDerment:** Yeah, so I think it's a confluence of things, and I'll try and talk some of those and tell you where I am right now. I didn't ever work anywhere else, didn't really have a manager or boss or any of these things... So leading and things of this nature have always been a bit of a mystery to me. No role models is another way to put it... Which is hard.

So I think I had some combination of some formative experiences, where the only profession I had before doing this stuff, so to speak, was frankly a "camp counselor." The way that manifested for me is in my last two years doing that I took people on a 36-day and a 42-day canoe trip. So it's me, in the woods, with one other co-counselor, and a bunch of people who were like 16 years old, or whatever.

And what happens is -- we would travel long distances in a given day, like 30 miles kind of thing; it would not be a ridiculous day on water and land...

**Adam Stacoviak:** That's a long trip on a canoe.

**Mike McDerment:** Yeah, that's one day. We did longer ones, we did shorter ones, but on some of these trips, that was kind of an average day. We were moving. And what you get out of that is a sense of perseverance, and team work, and all these things. So I think that was a formative experience for me, where I got a lot of situational awareness for how things can go.

Then, when I started on this road of building this company, I realized how gapped I was on business, and all these other things, and so my orientation was to collect advisors. I would reach out and network with people who knew more, and I think I had -- for whatever reason, people were always... I guess I had a knack for building rapport and having people want to help me. It wasn't a push. Pretty soon they'd be pulling, and they'd make time for me, and they were helpful... So I would collect these advisors for the many, many problems I had to solve. That became an input, and they became instructive for me.

Then I think another thing that happened was I hired these more -- I would then read the internet, and I read a lot of books... I'm kind of like an input learner, so I read it, I consume it, I digest it, I refer to it and build on it later. That's part of how I learn. So every night I'm probably reading for half an hour, and it's almost always a business book.

I do like other forms of books, and I like reading in general, but mostly I'm reading about how to be a better business operator and grower.

Then the final thing is just surrounding myself with -- and I think where most of the stuff I've gotten in the last few years has been frankly the management team members I hire, who are all more expert... I cannot do their job. But that's not my job. My job is to build the team, and to point the company in the right direction, understanding the market, and the customer, make sure the bank accounts is full... I can do those things. But they operate their functional areas, and they're great with people leadership, people management \[unintelligible 00:32:09.24\]

\[00:32:12.06\] And then the final thing I layer on top of that is I now do these things -- we have a weekly thing called Shorthands; we offer everybody lunch and we give them recent updates of the company.

And not every time, but most of the time I'll do a thing called "Mike's Musing", which is I literally talk about something I've learned about leadership. That act of having to explain it to somebody else helps to reinforce how much -- it turns out I've actually learned a bunch... But the act of consciously saying \[unintelligible 00:32:37.02\] they're always inspired by some manager or leader I'd been talking with in the last 72 hours, and then I just take this lesson, and I don't refer to that individual or anything like that, but I just say "Hey, here's how I'd handle this. Let's build our collective leadership capacity." I think those are the things on that journey that \[unintelligible 00:32:55.07\]

**Adam Stacoviak:** What do you think gets you excited these days then? Just to rewind a little bit, some of the things you said - you said "I haven't worked anywhere else really", you've been a founder/CEO for quite some time now, so you've done (for a lack of better terms) this job; whether it's changed over the years or not, you've been in this position... At some point you get bored, right? Maybe, maybe not - I don't know. What keeps you excited? What is it for you?

**Mike McDerment:** I think this transition to less operational was quite uncomfortable at the start, but now I'm starting to realize "Oh yeah, I'm getting back to more creating." I'm a builder, I like to create and build. If there's like three phases - create, build, scale - my super-strengths are probably in the create and buildout phases. And then my super-strength is probably -- am I a world-class scaler of things? No. But can I see 3-5 years down the road, to help those people who do scale and point them in the right direction? Yes.

So it's like "Hey, know your strengths", and then it's like, okay, if I'm spending all my time, in an 18-month plus to 3-year area, and that's my area of influence, then it's like "Okay, what do I need to think about that's building, and how do I make that happen?" That's a fun problem set. Highly valuable and impactful, and it's a luxury to even be here. But in some ways, it's a lot like going back to the beginning. I just learn more along the way.

So that's the place, and then I work with -- I've actually helped found some other companies, and one in particular that I've spent some time with, which is a good... It is at the earlier stages, and it's very interesting. And helping that team is a source of motivation outside the office.

But the point is, I actually have some big, meaty, interesting challenges inside the office... Because this is what happens; some of the problems you've gotta solve multiple times, and that can be a little frustrating... But we've got a long way to go, and a big, big platform, and opportunity ahead of us. I think we're in the early days of really taking advantage of -- whether it's machine learning... Early days for our category in doing that stuff, and that to me is a lot of fun, exciting.

**Adam Stacoviak:** Yeah. Well, you mentioned bringing in -- I believe you said a president. Is that right? ...to sort of take over more of the next phase of growth for you.

**Mike McDerment:** Yeah. I think the way I would look at it -- and that's not the actual title, but I think the easiest way to think about a role is... Interesting construct - we're two in a box; we run the company together, we do one-to-one-to-ones with our senior management team, so the three of us are in there, and what have you.

The individual in question has been fantastically successful, and they like to lean in the 0 to 18-month timeframe, and I lean 18-month plus... So we're together, on the same page with each other's files, but we don't need to go to the same meetings. In the same meeting, we bring a different area of focus. He might be called a COO in other businesses. I think this individual brings a lot more to bear than most COOs would... So it's a great partnership, from my point of view.

\[00:36:01.05\] It actually is quite liberating, because it's like "Okay, you run the results in the operations, and I'm gonna run the future. We'll do both together", but that's where the emphasis lies, and kind of more the accountabilities, and that's fine.

**Adam Stacoviak:** I guess the reason why I brought that back up in that capacity was to say that you began as the original founder, the visionary, and you've had to graduate yourself out of this role of everyday doing, and more leading and building the team, as you'd mentioned - you mentioned you couldn't do their job etc. - to now being in a position where you can free yourself up again to get back into the details. So I asked you about your motivation etc, and I guess that leads me to this question of like -- you know, if that's the case, if you're now able to get back into some of these bigger challenges you mentioned, that are still in the office, what's the next big thing for you? What's the next big thing for FreshBooks?

**Mike McDerment:** Yeah, so as a rule, we wouldn't disclose... Right? \[laughter\] But I will say Fridays are my favorite days. That's where I go to the sprint reviews for our product development teams. So it's back to details. I'm not the core person driving those meetings, but I'm there, I'm seeing the things get groomed up, and I have the opportunity to ask questions, and play the role of like... We were talking about a feature the other day, and this team is building it, and they've looked at the competitors, and they're like "Hold up, we're gonna build it like this", and I'm like "Whoa, whoa, whoa. Stop the presses. You're building something that was intended to replicate a paper world. We have this great opportunity to run in the cloud now. We can do so much that could not be conceived of before. Why would we recreate that model?" And ask questions like that, and help them connect, like "You know, instead of creating that thing, you can manifest it in three other ways that are not recreating that thing. You can add messaging and notifications around its creation, and sequencing events off that... A piece of paper could never do these things. Let's think about this differently."

So the teams are cranking away... That's a fun role to play, and I think impactful long-term. That's some of my favorite stuff I get to do. And then i have some pet projects that are more secret in nature. We have categories of products that we would like to offer you, and some of those are known... But there's categories that I think should exist for you and don't, so "Hey, who's gonna go and create those? Probably this guy." So there's a lot of work to do, and that is exciting to me.

**Adam Stacoviak:** So FreshBooks has been around for a while, and you expect it to be around for a lot longer. It's not going anywhere. You're only gonna get bigger and better.

**Mike McDerment:** That is the plan of record.

**Adam Stacoviak:** That's the goal.

**Mike McDerment:** Yeah. \[laughter\]

**Adam Stacoviak:** Well, Mike, thank you so much for your time today. It was excellent catching back up with you. It's literally been nine years since we last spoke. The last time we talked was on that podcast... We're not great friends; we should be great friends, but hey, that's how it works out, right?

**Mike McDerment:** Yeah, it feels like it. Nice to pick up where we left off, Adam. And thank you for choosing FreshBooks all these years.

**Adam Stacoviak:** Yes, I love FreshBooks. And that's not a paid thing. Hey, I really love FreshBooks, I think it's an amazing product. I've always had great respect for you and your team, and FreshBooks for me, honestly -- I just love it. It's amazing. Trustworthy, reliable... It's never failed me. That's the best part. It's never failed me, ever. I love that.

**Mike McDerment:** That makes me very happy to hear.

**Adam Stacoviak:** Mike, thank you so much. I appreciate it.

**Mike McDerment:** Okay, thanks for having me, Adam.
