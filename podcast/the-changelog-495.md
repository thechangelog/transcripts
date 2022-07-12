**Jerod Santo:** So James, the last time we had you on the show was 2017. That episode was called "The burden of open source." In your blog post announcing open sourcing of Actual, which we'll talk all about today, you talk about the magic of open source. I thought, "Well, there's a little bit of a yin and the yang right there." Maybe we just start right there and see what happens...

**James Long:** Yeah, it's been -- I mean, it feels a long time ago, so opinions can change. You try closed source for a while, and you sort of see the more nuanced take about it... So what do you want to know about it?

**Jerod Santo:** Well, it sounds like you're ready to give it another shot with this project. Last time you were talking about Prettier, and the success of Prettier, perhaps the surprise success... And of course, I think that leads to the burden, to a certain degree... But I think open source can be both magical and burdensome at different times, even in the same project. So I don't think they're necessarily antitheses, but it's interesting that your perspective has perhaps changed. Maybe let's just start with Actual, what it is, and when you started building it. We know that we're here to talk about the open sourcing of it, and so there's a long story from there to hear. And so why don't you just give us a little bit of that understanding, and we'll go from there.

**James Long:** Okay, sure. Yeah, Actual is a product that I built, it as a personal finance manager... Just the typical things where you import or add your transactions, and then it provides a way to budget and track your finances. The original goal was to be just a super-powerful tool built for personal finance geeks, in a way, or people who just like to manage their finances in a more detailed way. The primary method of budgeting right now is something called zero-based budgeting, which is a pretty detailed way to budget, which is where you actually track things down to every single dollar, and then if you overspend in one category, you have to sort of make up for it in the next month.

And so the overarching goal was not only to be -- because users are very detailed people, typically they also want powerful reporting, and ways to get insights from their data. And so the original goal was to have this whole thing, and the other big difference here is that it's actually a local-first app, so it's an app that you can run on your computer, all of the data is local... The big benefit for that was, in theory, I should be able to build a whole reporting mechanism that you can actually do custom queries and just dig into your data a whole lot more than you typically could on other apps, because other apps are just more constrained by the server, or they're running all of their clients queries on the server, and so you can't do certain things.

So in theory, if you wanted to, you could write a custom SQL query, which sounds super-geeky, and it is super-geeky, but if you can do that, then you can build up a higher level of things that aren't as complex... But it was a cool idea from the start to be "Hey, what if I could actually just write SQL queries against my personal finances?" And you can still technically do that today; it was a lot more work than I imagined, and so I never really got to the point where I was able to figure out the user experience of how to do that... It is still a potential avenue. So I never fulfilled that vision quite as much as I wanted to, but that was kind of the original vision.

I started hacking on it just for me probably around 2016. I was using it in a very limited way for a couple years, and then as I built it up, I sort of got to a point where it was "Hey, I've always wanted to launch a product. I have this thing, I might as well use this as the thing that I experience a launch." And so I launched it I think in January, I believe it was 2019, on Product Hunt. It got to number four of the day, it got a decent amount of users there, interest. I think I got 30 users, and it was very bare bones at that point. And then over the years, I gradually gained a couple hundred more users, and over time, up until the open source, I was at a point where I had a small, but decent income stream.

**Adam Stacoviak:** And you worked on it solely for a while, right? And then eventually you took a job at Stripe?

**Jerod Santo:** \[08:01\] That's right, yeah. End of 2017 I left Mozilla, and I was working for myself, doing consulting. And I worked part-time on Actual for about a year or two, and then most of 2020, I worked full time, essentially on Actual. And that was just the point where it just wasn't making enough money. We'll go into this more, I'm sure, but I just didn't realize how hard -- you always know it's hard to bootstrap something, but it's always surprisingly harder than you think it's going to be. My family was thinking about moving, and there's a lot of costs.

I've got three girls, three kids to take care of, and there comes a certain point when it's just "Where do my priorities lay?" And also, even for me personally, working alone is just not the healthiest way for me to grow. And so when it came down to it, I just realized that I had this opportunity at Stripe, and it was kind of hard to turn that down. And so I worked for Stripe, and then Actual became a side project for a couple years.

**Adam Stacoviak:** Yeah, going alone is challenging, man. It's a challenge, for sure. What is it that made you look at budgeting? Were you managing your own budget, and you're like "I've got some ideas" and you started hacking on it, and next thing you've got something that seems a product, that could be a product, and then you sort of got bit by the passion bug, and you're like "Man, I can actually solve this problem for other people"? Is that a version of your story, or is that way off?

**James Long:** It's not too far off. I was frustrated around the time that I started this, in 2015-2016, with not feeling I had a good understanding of my finances. I thought I had saved up enough money for this thing, but when I look at my bank account, why don't I have as much as I thought? And it's a surprisingly hard -- , you think you could just manage your transactions and then categorize them, and then look, and then there's your answers... But there's enough complexities, I guess especially as you have anything complex. If you have a mortgage, or you have some kids, or you're married, or you just have -- you have one thing that is a reoccurring bill that you just don't think is as high... I don't know. There's things with reimbursements; you bought a $100 thing off Amazon, but then you returned it... Where does that money go back into? There's enough things that add up to this vague buffer of things that is a mismatch of expectations in your money.

I think I was frustrated at -- I kept just watching my bank account and thinking I had certain amounts of money, but then when I actually really sat down to break it down, it's like, "Oh, I actually have to pay this bill next month, with this much, which means I don't have enough now to do this other thing." It's a surprisingly hard problem, which is I think why a lot of people just don't really budget, and they just kind of do spend, and then they watch their bank account.

I think I am a very detail-oriented person, and so for my personality I did want to just know more. And I think that was the crux of it. I was frustrated at just not knowing... That, combined with - I typically have a high bar for software. Kind of that typical developer thing, where I go and I use a bunch of apps, and I just don't like most of them. Because you log in to Mint and it's terrible, for all sorts of reasons. I think it's even gotten worse since then. Now it's just like super-simple, ads everywhere... Lots of bad things. And it works for some people. Totally great. I'm not putting down any other people's usages of Mint or YNAB, or anything like that. Totally great.

I did try YNAB for a while. This was actually before -- it's funny... I think this was a year or two before YNAB actually came out with their current version, which is on the web. Back then it was actually their primary app was their desktop app, which was YNAB 4, which is now there's like --

**Adam Stacoviak:** How do you say this? Is it Wine App?

**James Long:** \[12:01\] You Need a Budget. Ynab.com. So this is a different tool, that has a similar zero-based budgeting philosophy, that has roots in some of Dave Ramsey's sort of envelope style budgeting type stuff... This is the primary product in this space for zero-based budgeting. But their current solution is a web-based solution. There's a whole phase of YNAB before this, where it was just a pure local app. And there's a whole bunch of people who just love that app, and actually, still to this day have hacked up the app, because it doesn't work anymore on -- like, it's not supported. It doesn't work. But as things happen with software, there's a passionate, dedicated user base that's very niche, and they've hacked it to get it working on the latest Macs.

But I use it, and I did learn about zero-based budgeting philosophy kind of through this, and I did that. But the app itself just left a lot to be desired. And it got even worse when they released their web version, because they ditched certain features that I thought were ridiculous. It was this over-simplified, felt like a -- honestly, to me, it kind of just felt like a toy; very colorful in the wrong way.

**Jerod Santo:** Cartoony almost.

**James Long:** Just kind of cartoony, yeah. And it's totally fine if you like it, but for me, it was a response for like "I want something that I can use really elegantly, and it feels beautiful, and it does have a very high bar for user experience, but it's also powerful, and lets me open up the features and really just like write SQL queries against my data." That kind of a thing just doesn't really exist, and not even just for budgeting; in most software world, or in most apps, that balance is typically not a very common one.

I use a to-do list app called Things, if you've used that before...

**Adam Stacoviak:** I'm a user.

**James Long:** It's a fantastic app, right? It's a delightful user experience. That is a very good example of just like, on the mobile app, and on the desktop app - it just has all these really, really great interactions. It took me a while to start using it. When I first used it, I had that same reaction where I was like "This is beautiful, but it's just too simple for me. It just doesn't, I can't really do--" Like, you can't even do filters where it's one tag OR this other tag. If you click two tags, to highlight those two tags and filter by those, it's always AND. So you can't say "personal or house", you have to say "personal and house." It sounds like a simple example, but that's kind of the --

**Jerod Santo:** No, that drives me nuts in lots of different applications. I'm always like "Give me my or. Come on, I need an or."

**James Long:** Exactly yeah. And when you're running through an app like that to test it out, you're kind of "This is too simple." Now, I've eventually fallen in love with it, and that simplicity does have its benefits, and I actually like to use it all the time now... But for budgeting, I had that initial reaction of like "I really want to build this myself, because also I really want to just force myself to learn everything about this, and just think deeply about it." So I Just wanted to think deeply about it.

**Adam Stacoviak:** So you had incumbents like Mint... Aaron \[15:03\] if I can recall correctly, forever ago was on the Web 2.0 show, Jerod, before my day on that podcast.

**Jerod Santo:** Oh. Way back.

**Adam Stacoviak:** As a matter of fact, I got an email recently from Aaron wanting to come on Founders Talk, so it'd be interesting to go back and talk about Mint and his journey to where he's at today.

**Jerod Santo:** I was a Mint user back -- I mean, right when it very first launched, before they got bought by... Was it Intuit that owns them?

**Adam Stacoviak:** Yeah, yeah.

**Jerod Santo:** And for me--

**Adam Stacoviak:** And Noah Kagan, he was famous for the original growth marketing of Mint, and things he had done to get it to its user base, and whatnot... But it was an incumbent. I mean, it's been out there for - I'm guessing 15 years; just guessing. A long time.

**James Long:** That's probably about right.

**Adam Stacoviak:** At least, right?

**Jerod Santo:** Yeah. I mean, a long time.

**Adam Stacoviak:** More? I mean... And it's still alive. It might be dead-alive, or dead to some... Dead to James...

**Jerod Santo:** Just littered with ads now. Well, I think their innovation was you don't have to enter your things yourself, right? I mean, most of us, that's where we fail at budgeting. It's like, "I'm not gonna go enter all my transactions. Maybe I'll do it for a little while, but eventually, I'm going to fall off the wagon, and then it becomes useless." And so Mint's like "Hey, we'll do it for you."

**Adam Stacoviak:** \[16:10\] It's like push-ups. Do you do those things every day? \[laughs\]

**Jerod Santo:** No...

**Adam Stacoviak:** Maybe?

**Jerod Santo:** No days, hopefully...

**Adam Stacoviak:** Maybe not...? \[laughs\]

**James Long:** I mean, you have to, because you're not gonna go back two weeks and enter all those transactions, right?

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** You give up and declare bankruptcy.

**Jerod Santo:** So that was Mint's deal. That's what really put them on the scene. And then they started just layering on kind of upsells and other things. I eventually was like "Yeah, I'm done with Mint", because it got yucky for me as a user. But it seems like James, your audience for Actual is pretty niche-y. I mean, people who really sweat the details of user experience, plus people who would see the value in local-first... And then that desire to be able to -- maybe they never was actualized (pun not intended) the ability to\[16:54\] queries, but that desire of like "that would attract me to a tool." It seems that's a small subset of the people who need budgeting, which is darn near everybody.

**James Long:** Yeah. So my pitch is -- not pitch as much as just like I'm just gonna throw this out there... I don't think it's very niche, because those properties have second-order effects I guess, which are much more apparent to the user. For example, local-first. The app is just --

**Jerod Santo:** Fast.

**James Long:** ...fast by default. I mean, it's no question. That's the first thing that everybody always says when they try the app. They feel it. They feel their data sitting right there on the hard disk. And I don't have to think about it. I can run 100 queries straight from the frontend, not even in the backend. So there is kind of a frontend and a server process running, but that process is always a local process. I can run queries, send them to the server, and I can fire off 100 right from the frontend, and you don't feel that at all. It's one of those things that just changed the whole experience of the app. There's no - you do a bulk edit of your 3,000 transactions in an account, because you're doing something crazy and you're really restructuring things, and you bulk-edit things to add a note to these 3,000 transactions, so you select them all and type "archived". It happens in 200 milliseconds. Whereas you go to any other app and there's this huge cliff of anything that's outside of the ordinary workflow that they've specifically manually optimized - suddenly it has to span their five database clusters, and it takes you'll see the loading spinner for like -- I mean, in Gmail you archive 1,000 messages, and you archive them, and you see it spinning for like ten seconds. And then the UI doesn't really respond right. You have to refresh the whole page to actually see the properly updated state. It's totally broken.

**Adam Stacoviak:** Yeah.

**James Long:** So I would say there's all these second-order effects which are the things that sell the app to the primary user, because it's that and also the beautiful user experience, which - you know, I designed a lot of this app. I got a lot of feedback from designers, so I wouldn't say it's -- it's not close to Things' quality, but I think it's there. It's there enough to where users tend to still mention this, that it's just a nice app.

I don't want to be the -- there's other budgeting apps that just throw hundreds of numbers at you on a screen, and it's very complex. This is a complex app, but it tries to do that philosophy where it's discoverable, and it's simple at first; it looks simple. That's another thing that people say about the app, is it just looks so simple at first. I thought that this was just going to be not interesting of an app, but it turns out you can actually edit rules, and do complex rules, and you kind of can unpeel the layers. That shows off, too. That, plus the fast, is a really deadly combo. I mean, it's a really, really powerful, powerful thing.

\[19:58\] So the thing that I think I would love to take Actual, if somebody was going to do this, is to focus less on the zero-based budgeting - and if any Actual users are listening to this, don't freak out; that's always going to be there. But there's totally a capability for this to be a more generic transaction management tool, which you don't have to be writing those SQL transactions or queries, because there's a whole kind of other spiel about that, where the 1% power users can be building a lot of cool stuff that benefit the rest of the audience.

So I think a lot of this does not have to be niche, in my opinion. I think if I was really passionate and not a little bit burned out, I would go get VC funding and build this out into a proper product. And I think it totally has the right -- people say there's no money in budgeting apps, but like you said, everybody needs a budget.

**Jerod Santo:** Yeah.

**James Long:** In the last two years I've seen four tools launch, and now they have a lot of users and are making decent money. It's totally a viable product space.

**Jerod Santo:** Yeah. Well, everybody needs a budget, but not everybody knows they need to budget. I think as we get into an economic downturn, I think budgeting suddenly becomes more and more popular.

**Adam Stacoviak:** It could be a good time for you, James.

**Jerod Santo:** And I definitely understand where you're coming from, with saying like the things that you push are not the local-first in terms of it being like a nerdy thing that nerds like... You push the performance; you promote the fact that this makes it super-fast, super-simple, and privacy-focused. Those are things that I think the general public are all interested in.

So in your post you say it's hard to build a product, but it's harder to build a business. You worked on it for many years. This is not like a funeral arrangement; the thing is living on, it's living on open source... But you're not going to pursue it as a business for yourself anymore. You're a little burnt out, you're not gonna go the VC route... What were the hard parts in the business? What made it burn you out? What made it not hit that hockey stick growth that people desire when they go on to turn a side project into a business?

**James Long:** I've always said that I actually like marketing, and it's true; I think I still do like doing that. I like having exposure. I like going on podcasts this. I like talking at conferences. I like even just paying for marketing and paying for promoted tweets, and stuff that. All of that stuff was very interesting to me. But I think it was hard -- because I'm doing a novel product, where it is local-first, that requires a pretty significant investment on my part technically. And so I can't just fall into the happy path where AWS or a Heroku-like thing is taking care of a lot of stuff. I can't use an existing framework, because it just is incompatible with everything that I'm doing, which is local-first. So unfortunately, that did require a significant investment, which because it's hard to context-switch, I ended up focusing more on the tech side of things and less on the marketing.

And so I think that's one thing where it fell down, where I just wasn't spending time getting and actually selling to users like I should have been, because it's hard -- I think I learned... Like, early on, I felt like I couldn't go and talk to users and sell them on it because it wasn't really good enough yet. And I think that's a very common pitfall that a lot of new entrepreneur-type people fall into, where it's like "How can I publish a landing page and get emails when I don't even have a screenshot of the app yet?" I remember thinking that. And now I'm just like "That's the stupidest thing I ever thought." You just pitch the idea; you write some text and you describe what it should be, and then you have an email page. And if people are interested, then they'll sign up for it. That's all you've gotta do. It's not that hard.

So I over-thought a lot about that... I thought I needed much more weight behind a sale than I needed to have at the beginning... And therefore I deferred the marketing and the sales. Plus, with the investment of tech required, it's just very distracting, and I just easily fell into the tech part of it more.

**Jerod Santo:** Sure. Well, we all understand that, engineering is the fun part. And you can get knee-deep, and sometimes neck-deep.

**James Long:** \[24:06\] And that's not even talking about the business side, which I think you're maybe pointing to more, which is what was hard about that, which is I was stubborn and I really wanted to prove that I could build mobile apps as well. And so not only did I have to implement an authentication flow, and a subscription management system, and deal with all of that stuff, I also had to use iOS and get my apps in their store, and then they are forcing you to use their subscription system, and so I had to set up that whole thing and just manage all of that... That is a ton of work. Don't downplay -- like, if you're thinking about building an app, you've got to figure out how to streamline that stuff, or find somebody else to help with that. Dealing just with all of that - that's the business side of it that is really, really time-sucking.

**Adam Stacoviak:** Well, speaking of, I guess, being such a burden, how long did it take you to get more people on the team? And describe how your team has ebbed and flowed from inception to now.

**James Long:** More people on the team for Actual?

**Adam Stacoviak:** Mm-hm.

**James Long:** There hasn't really ever been a team. Over the years, I would tell people all the time, my biggest problem is I need to figure out how to involve people. And I never really figured out how to do that. When you're bootstrapping, you can't pay people. There were many -- there was like four or five times where I tried out a contributor model where people were just interested; people would ask a lot, actually, "How can I help contribute?" And so I'd bring on some people, and then obviously, as just a free contributor, they do a little bit of work and then they just kind of fade away. It's just how it is. And then at that point, it's something even else more for me to manage, helping them, getting them running, sort of mentoring them and helping... It's just like an extra thing on top of everything else. I never figured out how to get past that threshold.

There was one success, which was earlier this year, a couple of months before I open sourced, as I was trying to scramble and sort of solve this. I finally found a good service, who helped me find a personal assistant, a virtual assistant, who helped manage support. And she was amazing. I was feeling very guilty, because I had, I think, 200 unread emails that I just lost track of over a month or so, that I hadn't responded to. In two days, she brought that down to zero. Just answered everything, and categorized everything, and just really cleaned it up. And then at that point, she would take on support, and that was a huge help. So that was good.

It's not development, where it was super, super-expensive. I think you can find places to pull off and get help that isn't going to drain your whole finances like hiring other developers, or something.

**Jerod Santo:** Right. Well, especially when you are a developer, and you love that part, the first move is to hire the not-that-part; the other parts. Either the things that you aren't as good at, or the things that you don't like to do. And it also is a bonus, in the sense of like if support is what you need to help with, generally salaries or pay for support agent is lower than developers etc. It works out.

On the sales side, it seems like maybe what -- it's interesting, because what you have is like developer friends and audience, you have respect in the developer community... There's really cool tech inside of here. I've heard you on a podcast or two over the years talking about some of the stuff you've built inside Actual, or for Actual... Really cool things in there. And you have Twitter followers, you do well on Hacker News, etc. when you write... But in terms of finance, you're a nobody in that world... I think so. I'm just assuming. You mentioned Dave Ramsey... It seems a lot of these products or software services that are successful are kind of attached to a guru or a personality, or some sort of a program... You know, Suze Orman helps people with finances, Dave Ramsey helps people... I'm sure there's other people...

**Adam Stacoviak:** Suze Orman?

**Jerod Santo:** Yeah, Suze Orman - doesn't she help people with their finances?

**Adam Stacoviak:** \[28:10\] Sure.

**Jerod Santo:** And so I wonder, on the marketing front, if something like that -- or did you try anything like that? What if we get attached to some sort of a bigger rodeo show, and that they sell the idea? Because you almost have to be like "Here's why you need budgeting, and maybe this style of budgeting... And by the way, Actual is the best way. It's super-fast, it's privacy-focused." That could be like a sales funnel. But it's hard to get that thing going unless you want to become a finance superstar, or something.

**James Long:** Well, I think there's opportunities to not become one like that, because that is probably a lifelong-type -- or not a life-long, but one stage of your career; like a decade. But one thing that I should have done more is reach out to people . There's popular blogs that people read; they aren't Dave Ramsey famous, but you don't have to be Dave Ramsey famous to really give a good kickstart for a product uptick in sales. But there's a lot of blogs that I could have been reaching out to, developing those relationships... But again, that's just like a very sales thing. Anything that took more than a couple of days - which is very hard to context-switch into, because that means that I'm putting the product down...

**Jerod Santo:** Sure.

**James Long:** ...and it's not getting features for a month or two... It's very hard to context-switch between development and all the other stuff, because you've got to be on top of that sales, developing those relationships with those bloggers to get featured... It's hard to do it.

**Jerod Santo:** Did you ever feel like the product is not good enough? So like that old saying, if you're proud of your first release, it was too late, kind of thing. And I wonder if your desire to keep doing product versus going out and switching to the sales context is because deep down you're kind of like "It's not good enough yet" or "I'm not happy with it."

**James Long:** Oh, totally. Yeah, that's what I was mentioning earlier; even just feeling like I couldn't put up a landing page without a screenshot. That's ridiculous. You don't need to have that already to sell. You can sell somebody with an idea, without -- the feature doesn't even need to be there yet. People do sales all the time, and say "Hey, we're gonna build this incredible feature. Here's how it's gonna work; it's gonna be amazing" and it's not even built yet... Which can be a problem, but you can totally make sales that way, and I should have embraced that more.

I do think that there was a point when I really should have and could have switched to that... I was somewhat aware of a lot of this stuff even in that moment, but one thing that I would say is if you are building a product, or if you are trying to achieve anything, try to do it quickly, and make quick decisions, and move fast... Not just so that you will make progress fast, but when something kind of slows down... Like, if I was a year into Actual - when you've been doing something for a while, it's really easy to just keep that pace. It's really hard to -- I don't know, if I have a problem on my house, like fixing a toilet that's been broken for a year, there's something about the psychology of it that's like "I'll fix it next week. It's already been a year, I'll fix it next week." Whereas if it broke yesterday, I'll probably go out to Lowe's this weekend, come back, it's a 15-minute fix, and I'll fix it, right?

There's some psychology there that's interesting, where if you aren't acting on things fast, they just sort of become this pile of responsibility behind you that you just sort of ignore. I think that's one thing that sort of happened, to me at least. It's like, "I've already been working on this for so long... Let's just keep building a couple more things."

**Jerod Santo:** You've got me thinking about the broken window theory, but I can't remember if that's the exact application of what you're talking about, or if that's slightly different. But the idea there, at least the start of the idea - I can't remember the end. The start of the idea is if you've got a broken window, you can fix it right now. Because if you leave that broken window broken, I think it's a signal, and maybe a signal to the outsiders that no one's taking care of this house, or something. But also, it's kind of like, you know, then the next thing breaks, and you're like, "Well, the window's already broken, too." It's kind of like "Well, I'm already not taking care of this, and so..."

**Adam Stacoviak:** \[32:18\] Yeah.

**Jerod Santo:** Oh, here, we've got "Neglect accelerates the rot faster than any other factor." That's Jeff Atwood talking about the broken window theory, so I've found it a little bit. So there's a little bit of that going on there. I definitely understand how that is.

**Adam Stacoviak:** It's a metaphor that leads to the disorder, essentially. If you have a broken window here, in this house - well, then your neighbor is gonna be okay with their lawn being not so good. Or your neighbors don't want to deal with their landscaping, so you don't... It's almost like osmosis, in a way. You sort of do things based upon other things happening around you... It's disorder that happens because of other disorder. It's kind of like that.

**James Long:** Yeah.

**Adam Stacoviak:** Similar, I would say -- I mean, you're talking about procrastination because of the burden and weight. You've got a snowball coming down the hill at you, and you feel "If I could just keep running, that snowball will never hit me." But it's getting bigger... There's 200 emails sitting there, but okay, I've got to plow through this.

I would suspect it's easy for us to speculate and theorize why, and all the ways you could have done different things. But it seems to me - and maybe you can clarify this - that you were alone too long, in a very useful application. And had you gotten not just users, or more users, but belief in the financial and business ability of what you were building... Because you can build a product, you can build an app, but that is not a business, and it's not venture capital, it's not investment, it's not whatever. You were a solo bootstrapper too long and you sort of maybe got in the weeds. Hearing so far of your story, it seems like that's where you're at; you kind of got too far in the alone weeds, and you didn't find a healthy path to a "success" to get that next step, which is financial viability of the application, being able to hire people, etc. You were alone too long. Would you agree with that?

**James Long:** I think so, yeah. I think that's aligned with everything that I've said so far. And just general thoughts about -- I mean, honestly, I think one thing that I learned too was that I don't think I want to be a CEO of a company. I wish I had found -- the perfect thing that could have happened... And I did try. It's hard when you're distributed and I'm not in a city that's San Francisco or New York. I'm not going to meetups locally that I'm meeting a lot of like-minded people. And then COVID happened too, where it's like I wasn't even going to conferences anymore.

The best thing that could have happened was finding a co-founder that would have become a CEO-like thing. It could have still been a developer, but still somebody who was still very critical, and in a positive way very critical about what we're working on, and helping shape the business. That would have solved the loneliness problem, it would have solved the... I don't actually want to run a company, right? I'm happy being super-involved and making critical decisions and shaping it, but at the end of the day, that's not my strength, when it comes down to it.

So I think part of it was like even if I magically could have gotten the number of users where I could have started hiring, I'm not somebody who wants to be hiring people, and then I'm only managing them. I want to be a tech lead, I want to be -- you know, I manage pretty complex things at Stripe, that require cross-organizational efforts, and I love working with people. But at the end of the day, I'm not a manager, I'm not a CEO, like, personality. I think that's also what it comes down to.

So it's not even that it's like a problem that I couldn't solve. I think it's just like a problem that would not have worked out regardless, unless I had -- I think the only thing that could have happened is if I had found a good co-founder that solved that role. But finding co-founders is incredibly hard; people that you can trust and actually do that. Unfortunately, that didn't -- and so open sourcing this, when it really came down to it, was kind of the only path that I saw that made sense.

**Break:** \[36:30\]

**Jerod Santo:** So you say that open sourcing was the only choice you had left, but what about sell? It's valuable, you've put a lot of years into it, you've got paying customers, maybe not that many, but you've got a great-looking business for somebody who could be a CEO and be a salesman... Why not just sell it?

**James Long:** I did think about that, actually. I actually reached out to one or two companies that have bought other respectful, or respected companies that I know of, from people that I respect as well. So I knew that they would give me a fair assessment. Even though I hadn't really heard of them before, I knew that their track record was pretty good.

The first one responded that day, and was like "You're not making 10k ARR, so we're not interested yet. That's kind of the baseline that we have."

**Jerod Santo:** Gotcha.

**James Long:** And I think I never heard back from the other one. I didn't pursue it super-strongly, because it just really wouldn't have been the right fit... And I also think that once -- I mean, maybe this is me selling it short, maybe I should have pursued it further... But the local first architecture and all of that kind of a thing - I think that would make it hard to sell. I think once a company was starting to do due diligence, it required -- it's something unlike they've ever seen before. And I say that in a good way, but also in a way that's like... It would be hard for them to maintain it. I was already starting to get -- I got a couple of comments when I was talking to people about selling it that were sort of implying -- I don't think it's out of question, but...

**Jerod Santo:** Yeah, yeah. Can you unpack why that is? I mean, what makes it such a unique piece of software? Why it's harder to maintain.

**James Long:** It's just the local-first aspect of it, where -- it's not a macOS app, built on macOS APIs. Technically, macOS-native apps are local-first, right?

**Jerod Santo:** \[40:18\] Yeah.

**James Long:** They're built against those APIs. It is a cross-platform, local-first API that works on the web as well... Getting that to work required significant investment and novel research, requiring new ways of doing things. Absurd SQL is a whole other thing that we could talk about, which is like a sub-project that spawned out of this... Which is like another really big innovation in the open source world, which I haven't really had time itself to manage, because of Actual, and that's another reason for open sourcing Actual, is trying to get back to something like that. But that's a whole other project that I think could be a whole other podcast on... But to be honest, somewhat groundbreaking innovations to use SQLite in a persistent way in the browser, but it stores the file chunks in IndexDB, and it actually blows away IndexDB's performance. It's a significant undertaking; we're dealing with writing C code to optimize file disk access, so that it works better with IndexDB. So it's not something that's a typical SaaS app that a company is going to come in and buy, and then suddenly like "Let's ramp it up to get 20,000 users and just scale it out in all of the ways that are normal, that we're used to."

**Jerod Santo:** I see. So because of the technical innovations, and maybe lateral moves that you made technically to achieve things, it's not that it's just prohibitively expensive to host and maintain, but to actually build upon from where you are requires a certain skill set that most companies either don't have, or don't want to hire for.

**James Long:** Totally. It's actually the most scalable architecture you could possibly have, because you don't even need a server.

**Jerod Santo:** That's what I would expect. I'd expect it would be cheap to host.

**James Long:** But development is expensive. So unfortunately, that is the cost there, where it probably requires very highly skilled developers to actually really be able to dig into the hard parts of this.

**Jerod Santo:** Why don't they just hire you?

**James Long:** I mean, that's fair...

**Jerod Santo:** \[laughs\] You've gotta sell that idea, but...

**James Long:** Yeah.

**Jerod Santo:** ...I don't know, it seems feasible. I think somebody saw the vision and the potential, even though the user count is low and the money coming in is low. So if they're hyper-focused on ARR, which I think a lot of SaaS investors are at this point - they're just like "Here's your numbers you've got to hit", and "We've got too many opportunities, we're not going to even take a look at you." But I think the right person, with the right business already, who could see that vision and realize, "Wow, this is almost like an untapped thing that just got burnt out because one guy has been doing everything, and he's been neglecting the sales and the marketing and the business side, but he's available for contract, or whatever..." I don't know, I feel like you could probably get a sell. But that would be itself a whole other undertaking that would make you have to ignore the product, right?

**Adam Stacoviak:** Yeah.

**James Long:** Well, I mean, if there's an end in sight, I think that's okay. I think I could have done that. But I still think that one downside is that I had built up -- I think I could have sold. I think I'd have to swallow some pride, because it is one of those things where like when you do things solo, you can build up a lot of very personal relationships with your users, and there's a lot of trust there, there's a lot of things... And so there is another aspect where like -- I bet if I had sold, it would have been even... Like, there's a lot of people who reacted to open source where they are worried about not being able to set things up themselves, and it totally makes sense, because they're not technical users, but they're happy for that direction.

I think if I had sold, it would have been a very similar response from a lot of people, where they're going to leave the app... But it would have been like an angry response, which - I mean, honestly, a lot of apps do that. Things change and things happen. But I think it would have -- I think there's a lot of trust in there that it's like I've been saying I'm in it for the long haul, and then you turn around and sell it... Which, you know, it would have been my right to do to be honest, but it still would have pissed off a lot of people, and I didn't really feel like dealing with that. And I honestly, I don't think it would have sold for --

**Jerod Santo:** \[44:17\] That might have been the humbling part, right? The price that you would have had to receive is probably not worth the sweat equity that you have in it.

**James Long:** Exactly.

**Jerod Santo:** So it wouldn't have felt good to have this small exit, plus maybe alienate some of your most loyal users... I understand why that is not the best route. And so open source is the path that you chose. And of course, that's the opposite of alienation. It's inviting everybody in, right? To a certain degree. You do have the ones that don't want to set it up and can't code, and all that. But instead of spending your goodwill with a sale, you're almost buying goodwill with open sourcing, because now you're just giving a gift to the world.

**Adam Stacoviak:** How many users are you talking about here? You said 10k ARR, which is annual recurring revenue, so that's less than 10k in a year. Not 10k a month, it's less than 10k in a year.

**James Long:** Oh, did I? I meant to say MRR. Did I say ARR?

**Adam Stacoviak:** You did say ARR...

**James Long:** Sorry about that. Yeah, their requirement was at least 10k MRR.

**Adam Stacoviak:** Okay, so that's monthly recurring revenue. Okay. So what was your user account roughly?

**James Long:** It was roughly 800.

**Adam Stacoviak:** Okay. I mean, that's respectable.

**Jerod Santo:** Is that paying, or... Is it all paid, or is it freemium?

**James Long:** No, those are all paid, yeah. I don't have a free plan. So those are all paying, 800. So $3,200 revenue. The cost of the business was really only a couple hundred dollars total. So about $3,000, which is not a bad side income stream.

**Jerod Santo:** Yeah.

**James Long:** And another -- I guess I'm thinking of people listening, who are people sort of me five years ago, thinking about getting into development and wanting to launch something out, and thinking that they can make money... One of the big shifts that this whole experience really drove home for me was just how different money is when you think about it from a business perspective. I mean, money is just entirely different from -- like, making $3,000 a month, when I tell my friend that, they're like "Dude, that's awesome." They're thinking of their 7k a month salary, and it's like "You're almost making half of what I make." But when you think about it as a business income stream, suddenly if I have to hire one developer even just part time, there goes almost all that money. That's not even enough to hire a developer part-time, somebody who would be really skilled enough to work on Actual.

And so money from a business perspective, having to set aside $20,000 to invest in development for a couple months - if you're a business and you can't afford that, that's a huge problem. But 20k for a personal -- you know, if I'm about to buy something for 20k, I agonize over that for week. I hate buying cars, because they are so freakin' expensive. But 20k in business money is nothing, right? I mean, for most businesses, that shouldn't be anything, if you're doing it right.

So 3k - a lot of people were like "Dude, you're giving up $3,000 a month." To me, it's just like, you don't understand the burden, because I was lonely, and the next thing I really needed to do is either find a co-founder, which I couldn't do, or hire somebody else to help development. Like, properly hire; don't outsource some cheap labor. Properly hire somebody to help development. And $3,000 a month is not anywhere close to being able to hire somebody out.

So you're kind of stuck in this awkward middle phase, which I think happens with bootstrapping, right? You've got to really bear through that awkward phase where you make enough money, to get to the point where you can start hiring out.

**Adam Stacoviak:** What about the 800 that you've got? What did you do to get them? What was the hard path to that 800 people? You said no marketing... How did you get the 800 people, and what would it take to 2x that, 3x that, 5x that? How hard was it to get that number?

**James Long:** I mean, I launched in early 2018 and I had like 32. Maybe by the end of 2019 I had like 100 people. So it was a very slow path for the first couple of years, because I really was just building up the product, which probably wasn't the best path forward.

\[48:12\] Eventually, I did start doing just lightweight marketing in the form of just content marketing... I would just write blog posts. I just started talking more. I was just getting more exposure. That, plus word of mouth, where people would discover it because they would see that it's a super-fast app that's surprisingly good compared to a lot of other things out there. It was just word of mouth marketing in a lot of ways, which is the best and most powerful form of marketing, even though it can be the slowest. Once I reached about 150-200, then it was a slow -- every couple of months was another 50 or 100 users. It was a very, very slow ramp-up.

**Adam Stacoviak:** So this was very word of mouth, very organic growth.

**James Long:** Yes.

**Adam Stacoviak:** This was not like "We marketed, we did Facebook ads, and so therefore we got 1,000 users", which wasn't the case, because you got 800. But you got a certain number of users because of certain output; you put out x, and in comes X. This was organic growth.

**James Long:** Mostly organic. I mean, I don't know if you would consider this organic growth, but another example is going back to Absurd SQL. When I launched that, it got a ton, a ton of attention. That was a hugely successful launch. And Actual was the implementation. This was the production usage of it. And so that was another bump. So just things that, where it's just marketing via stream, like other projects that get number one on Hacker News for a whole day.

**Adam Stacoviak:** Were you close to users at all? Did you talk to a lot of users?

**James Long:** Yes, I had a Slack that was pretty active, and now I've moved to Discord when I open sourced it, because Discord is just way, way better. But I was pretty close to them. I would sit in the Slack, and every now and then it would be more. And I would usually respond to email, but--

**Adam Stacoviak:** Would you hear stories though? Would you hear "This is how I'm using it. This is how it changed my budget." "Wow, Mint has great potential, but it just is X, Y, or Z wrong for me, and Actual is better" or "YNAB was x, and this is better" or "Every dollar has a good possibility, but it's just too clunky", which I find that. I love the concept of every dollar, which is Dave Ramsey's application kind of goes back to Jerod's seller acquisition kind of thing... I'm asking these questions because I feel like -- and I'm not in the weeds with you, but just on the outside, looking into some of the things, if you got to 800, which is a pretty respectable number, with no money spent in marketing really, just effort and showing up, what if you did a little bit more on that other front, which is more storytelling of your user base, and things that? Could you have gotten to 3,000 users or whatever number that was double or triple that? ...to give yourself - I guess not just more money, which is a resource, but just almost the belief that what you're putting out there is changing lives.

Because my hypothesis in this space, this budgeting space - one, it's psychological. People do not like to budget. When you talk to anybody about budgeting, it's almost like dogma. It's almost a religion in a way even. It's like "Well, hang on, you're talking about my money? What do you want to know about me? Are you trying to sell something to me?" So everybody has a different way they think about money, they think about budgeting... So it's almost like counterculture to even talk about budgeting, one. So it's a hard job to solve for. And then two, almost every application out there for budgeting is not that good. So you almost have a disbelief as a user who desires to budget better, save for things in their life, buy a home, build a pool, buy a bike, buy a truck - whatever; buy these things you want to have in your life. You want to do these things, but nothing out there really offers it to you, and then here's this thing that has this potential, and I see it as like a really good potential, you just need some more support to get you to that next big win, that next gust of wind to get you through the choppy waters and out to sea.

**James Long:** \[52:10\] Yeah, I think it's just the loneliness problem. I think there was almost such a point where the thought of having 3,000 users or 800 - I just literally cannot support that by myself.

**Jerod Santo:** You need a co-founder... Because you could have went out and maybe raised $5 million, or $15 million, especially last year. Now it's probably harder. But money was cheap last year. But even if you did that, you wouldn't have that partner, right? Because you don't want to be a CEO or manager, and that's what you would have had to become with the money. But if you had somebody who'd do that - that was really a lack of a co-founder.

**James Long:** Yeah, I think that's what it was. So here's the thing... Here's why open sourcing really was the right move... And I didn't know exactly what to expect, but when I sat down and I talked to a couple companies to sell it, it still didn't sit right with me for the reasons we already talked about. It just felt like it would have been kind of a sour ending to this large project that I had been working on for a long time. And I knew I didn't want to do that; I just really felt like open sourcing was sort of like fulfilling the promise that I was telling people. It's like, I'm in it for the long haul. If something doesn't work out, there's a potential for open sourcing it. And after doing that, honestly, it's been better than I could have ever expected. I got way more attention. It was number one Hacker News for that whole day. I did not expect that, at all. I didn't even know Hacker News would really even care or know what it actually even was. But I guess I built up enough of an interesting product. And then Discord's got 600 users. People joined it that first day.

**Adam Stacoviak:** 600 new people in your Discord the first day?

**James Long:** Mm-hm. Well, I was number one on Hacker News the whole day, so it got 15,000 --

**Adam Stacoviak:** James...!

**James Long:** But here's the thing--

**Jerod Santo:** James...! \[laughter\]

**James Long:** There's a really interesting model here, which has potential; this open source model. So I haven't turned off my servers yet. I still have -- it's down to... 50 or 100 people left, so I have about 700--

**Jerod Santo:** That's what I was gonna ask because, why not open source it, but also just keep building the business side?

**James Long:** Yeah, so that is a totally potential option. It's not something I think back in February when I was really digging into this and starting to build out the open source version - I was pretty burned out on just the whole... I just want my time at night back, because I have a full-time job, too.

**Adam Stacoviak:** Yeah, totally understandable. Even when we give you this feedback, I want you to understand we're not coming at you. We're empathetically talking with you through your journey; so do not feel like we're calling you out, or saying you did wrong... By no means. Everybody's journey is tough, and you made choices. I would say more than anything Jerod and I are trying to encourage you through the process... Because I see so much possibility, but you've been through the thick of it, so it's --

**Jerod Santo:** Encouraging analysis.

**Adam Stacoviak:** Yeah. So I just want you to understand that. And the listeners, too. We're not coming at James, by any means.

**James Long:** Yeah. Well, that's what a lot of the -- not a lot, but some of the Hacker News comments was like "Dude, this guy's got balls. He dropped $3,000 a month on the floor." I read comments like that, and I feel like they don't -- that goes back to the business money versus personal money type thing. But I do think there is some truth to some of those comments where there probably was potential. If somebody was able to join me or figure out how to make this work, then there is a possibility that there was some other outcome, where we could have grown this into something, and it could have been good.

But I do think that there is still -- I think it's probably even better now than it could have been, because the trust gained from having this open source model is huge. And so now it's like this very potent app of very novel, very privacy-focused, now it's open source - that component even builds even more of that trust in the privacy-focused aspect of it... Which honestly, I think this whole world is going to move to at some point. I think that it's also positioned in a point to where whenever we switch even more to privacy-focused stuff, as people are getting more and more allergic to everybody spying on each other, especially with their finances, that this is a product so well-positioned to counteract that.

\[56:28\] All it takes is one bad post for Mint or YNAB, about them doing something bad with your data, and Actual will be -- by the way, when I open sourced Actual... Or this was before I open sourced Actual; this is a little bit of a rabbit trail, but one of the reasons why I got 800 users - I was about 500 back in November I think it was... And YNAB nixed their grandfather plans, basically increasing the cost of YNAB for all of these long-term loyal users; they increased the price for them by 100%. It was gonna be twice as expensive for them, because they were getting like a grandfather price... And it pissed them all off. And they had a huge -- a ton of people left YNAB around that time, and there was a post on the YNAB Subreddit about YNAB alternatives, and Actual ended up being the top one, the number one YNAB alternative in that post, which is really cool. So that was a cool -- I gained 300 users from that within a month or two.

**Jerod Santo:** Nice. So that's another "I just need to market this product a little bit better." So there is still this potential for this open source model working out really well, where you have this open source model, but you still have -- like, open sourcing is great, and being able to run it on your own server is great, but it is still something you have to manage and do, and it's just kind of annoying. So we could still provide a hosted option, and then the open source version just becomes a funnel into that hosted option.

And from all of this visibility that I've gotten, there's actually one or two people that I'm talking to who potentially could be a -- not co-founder, but some sort of partnership role, where they are interested in taking on more of that business part, and then they get some of the profit, and then it just becomes like a mutual... And so there is hope. So that I think is a very positive thing that came out of open sourcing, is just like the exposure, and... People kind of being surprised that it wasn't doing better, and so they were interested in being involved to help make it better.

**Jerod Santo:** It's by no means the end of Actual; it's just kind of like a new beginning, and it's opened up huge opportunities. That's spectacular. And it makes sense, especially with this kind of app, because there's such a mainstream potential user base that the further and further your app moves away from developer land in terms of the target audience - like, it's not a dev tool, for instance - the more you being open source for most people doesn't matter to them at all. They're like "Oh, that's cool." Maybe they're like "Oh, cool, so I can trust it." But they're never going to be like "Well, then I don't have to pay for it, because I can self host it." There's millions of people that will never do that. And they're not on Hacker News' homepage. So you expose it to those people, and then they are early adopters, and the ones that will self host and stuff, and so you're not getting them as customers. But as it spreads through that mechanism, more and more of those people are not going to be running their own instance.

Now, maybe you'll have somebody stand up their own instance and say, "Hey, we also host Actual for $2 a month", and then you've gotta make moves, probably.

**James Long:** Yeah, and it's like -- that is an interesting potential possibility, I guess... Talking to people about partnerships, or "Do we want to have an official hosted version?", open sourcing is a little bit risky, because somebody could technically go along and do that. We talked about licensing issues, maybe there is a license that I could use to prevent that... But really, when it comes down to it, after talking to people, there's not really -- I think you burn more goodwill with weird licensing issues like that, than trying to prevent that.

\[01:00:01.19\] So I think the best thing to do is just to get out in front. And if we're going to do that, then we just need to do this sooner rather than later, and prevent some side company from trying to take this and do that. But yeah, I think that even though people might not really care about the open source aspect of it, it's just an interesting model for me, because a lot of developers are happy -- I guess it's interesting to talk about now contrasting this with Prettier, kind of to loop it back all the way to the very beginning, where when I was talking about Prettier before, I was a little bit angry at open sourcing and the entitlement of developers and users of that kind of a thing. But with Actual, I'm sitting here now, and I'm getting developers who, for some whatever reason, they care enough about it that they're happy to do free work for the app. And there's this potential to have a hosted version of it, which makes money for it... And so now, a lot of the development burden has been lifted from me. And if I have a partner who is going to take some of the business burden too, it takes burdens from both fronts.

So even if the user does not directly care about the open source, it still benefits the app, because there are features that developers will come in and just implement for the app, and the users can end up just getting them for free. Even if I would have never thought of that feature. So the open source is still beneficial for users, too.

**Adam Stacoviak:** So to summarize, you didn't want to grow because you couldn't support it personally, as a solo founder. You would love to keep doing it, but you want to get your nights back. You couldn't do that, because that would require growth and growth means you solo still yet. So you need more users, but you can get more users, because you won't work on more users, because it's like this cyclical thing happening here... What you really need is just really a co-founder to be in the CEO type role, or that leader role, and let you be in more of a CTO/tech lead type role, where you can oversee product and... Obviously, be joined on company decisions and things like that. It doesn't mean you take a backseat by any means.

This is a lot the story of InfluxDB and Paul Dix. That was kind of similar to what he did there. I don't know the exact story, because I haven't had Paul himself on Founders Talk yet, but I did have his CEO now on the show, and that was quite an interesting story. Paul founded the company, along with another person that I can't recall the name of, and in many ways, Paul, helps lead in a lot of ways the direction of InfluxDB, the product direction, etc. And permissive license, open source, deeply-rooted in open source... But he's in the CTO role, and not in a CEO role. And I think the point of encouragement I would give you is that you can still build whatever this is, even if it is open source, and still be successful, and not have to be the CEO, and not have to be the one who is in that manager or lead role; you could still be in a lead role, but on a more product and technical-focused role, rather than the CEO; "how does the company have finances and win in the marketplace role", which I think is more in line with the CEO role. A CEO does a lot of those things, but if you have a CTO, which is pretty often as a CEO, you let them handle a lot of those technical concerns and issues and you deal with different burdens. But it's possible. I still think there's a lot of possibility for you.

**James Long:** Thanks, yeah. And it's something I'm still interested in. I think I was more burned out, like I was saying, back in February. But now seeing just such a huge response to the open sourcing, it is very encouraging, so that provides a lot of chance to sort of not just give it all up, I guess... Which I don't think I was ever going to do totally, but I think I was feeling that a little bit earlier. But now it's certainly like "There's something here."

**Adam Stacoviak:** Well, you deprecated the mobile apps, which is like a big portion of the user experience, right? You basically cut off two of the legs, if it's a three-leg, chair/stool... You know, that's two of the legs.

**James Long:** \[01:04:14.15\] That's a lot. And yeah, it kind of sucks, because I wish I had the courage to just do that two years ago. Because as much as I am just a really stubborn person, and just really wanting to prove myself in some way... And I really do enjoy doing iOS - not as much Android, but just native apps... I think they're really valuable and I do enjoy it, but I should have just done that because it was such a huge... I mean, they're written in React Native, and they use the same backend, so all of the logic is shared across them, but the UIs are unique, and they're different. That was a bad decision, because that was not a good time investment. And being in the App Store - I have a lot of gripes with app stores now too, with mobile development stuff, because Apple -- I was pushing an update to my app just for a simple bug fix. That was around the time Apple was now requiring all users to use their subscription model. And they rejected my app, because they said, "Hey, you're not using our subscription model, you're using Stripe." And I didn't even have the ability to have users subscribe on the mobile app. You could only log in. They changed their rules to be more strict, and so you literally, if you use a thing that requires a login, you have to use their subscription service.

And so I ended up setting all that up - I don't know why I did it - and I did all that work. And I got it working, and it's fin. There's a whole different sign in subscription flow... It's just like pain in the butt. So cutting that off - I should have done it two years ago, and maybe I could have gotten a better balance of work-life stuff, because I would have been able to... Just not as much work, basically.

But now it's - yeah, again, open source, so there's some development help; if I'm able to find people to help with the business, and now we can ditch the mobile apps, that's a much better balance. That feels a lot healthier. And just investing in making the app itself responsive, so you can actually load it in Safari, on the mobile app, or something that. And then focusing on desktop as the primary experience probably, and then the mobile app would just be - you can see a lot of the reports and see your budget and stuff that, but there's probably going to be features that you just can't do there... But make it work on web.

**Break:** \[01:06:33.03\]

**Jerod Santo:** So let's nerd out a little bit on some of the tech you have inside of this project... Because hey, it's all open. It's all out there. It's all there to be seen and heard. Although Absurd SQL is not in the Actual org; it's on jlongster, so we'll make sure to link to that one separately. But that seems like a good place to start, because this is like a separate project, as you said, Actual uses it, and it starts off with the readme. "This is an Absurd project." So you touched on it, but give us more of the deep dive. What is this thing? Why is it Absurd? Why did you build it?

**James Long:** Yes, it's Absurd, because the web storage APIs are just absurd. And this adds on an additional layer of absurdity. It's because, essentially, I really wanted to use SQLite in the browser. And so to do that, you can use it in a WebAssembly compiled version of SQLite instead. There's this big binary blob that you can download, and it runs just fine. The problem is that it doesn't persist. And so in SQLite, usually it persists -- it knows how to persist to disk by writing out individual small chunks, usually on the size of like 4k blocks. And so as the data changes, it writes those blocks down into the disk.

The recommended way that I've seen before to persist SQLite databases before is to actually just write the entire database to IndexDB. And so literally, if you have a 10 megabyte database, every single change you're writing down an entire 10 megabyte encoded string; it's totally ridiculous and horrible. That's just not going to work.

And so the absurdity comes into play because the way that this works is it hooks into SQLite's APIs to write things down, and it basically captures those requests. It basically acts like a file system. So SQLite tells the file system to write down these 4k blocks, and then the file system goes and says, "Okay, I'm going to go and write that down on your hard drive." Well, with Absurd SQL, what it does is it takes those blocks and it writes them down into IndexDB. And so if you look in IndexDB and Actual, and you look at that database, you'll just see a bunch of pages, meaning like each row - or not pages; each row is a block. And so there's each row of a 4k binary array buffer.

And so it's absurd... The one level of absurdity is that it's translating SQLite, which is this normal database thing, into IndexDB. There's another level of absurdity, where there used to be this thing called WebSQL, which actually was SQLite, provided as a web API. So you could literally run SQLite queries directly in the browser, and that was like another alternative to IndexDB. IndexDB won out, so unfortunately we need to do this weird hack where we store it in IndexDB.

Now, the absurdity goes even deeper, because most browsers use SQLite internally to implement IndexDB.

\[01:12:09.25\] So technically speaking, when you're using Absurd SQL to store the SQLite data in IndexDB, what's happening is that it's storing it in IndexDB, in these individual blocks. IndexDB is then taking that and cutting it up differently, and putting each of those blocks in different things inside of a SQLite table on your local machine, which then that actually gets cut up differently and ends up in your hard drive in a totally different way.

There's like four different layers here that the web browser is forcing you to go through, instead of just opening a direct SQLite file on your local machine, and letting SQLite optimize against the pure, raw file access.

**Jerod Santo:** Wow. Do you know why IndexDB won out over Web SQL?

**James Long:** The biggest reason -- I think Mozilla was a big company that pushed back. I think Safari might -- no, I think Safari was one of the ones that embraced it. I can't remember exactly. But I think Mozilla was one of the main ones that pushed back, with the reasons that the APIs would be determined by SQLite. Like, SQLite would be the referenced API for a web API. And that was concerning, because they didn't control the web API, essentially. When you run a SQL query, and give it to Web SQL, and it gives it directly to SQLite, browsers can no longer tweak the API, change the semantics, and do things and control it in ways that would be better for security. Say there's a security flaw, or there's something that they find problematic with how it plays with the browser - they have no control over that. And so I do actually understand the reasons. I think it's --

**Jerod Santo:** An alternative would be to subset SQLite, and say "Here is our allowed list of keywords that you can use with SQLite, and we'll pass all those directly through... But these are the ones we don't support." Maybe that would have been an option.

**James Long:** I mean, there could be more nuanced problems where it's not even just keywords, but it's just like you do a select with an inter-join in a specific way that it ends up hitting some flaw in the whole system... But another way could be to fork SQLite, and do stuff like that...

**Jerod Santo:** Have a SQLite-esque API.

**James Long:** Right. And it's something that they control, but it's still -- I think, basically, if you look at any Web API, you can go and hit a formal spec for that API, right? You can go and see in this massive HTML document... They all look exactly the same, they all have the table of contents, they all have exactly the same spec format. This did not fit that mold at all. This doesn't have a spec. The implementation is the spec, and so I think web APIs tend to be kind of allergic to that kind of stuff because it didn't go through the web standards process, and so it just isn't... It isn't as vetted. And so I think there's some fear for that.

Because when it really comes down to it, if they embrace this and it really came to be this big thing, and this big standard API, but there ended up being some pretty critical security flaw - I mean, that could be a pretty big problem for the web. That could be a death of the web type situation.

**Jerod Santo:** No, they could just patch it like they patched any other security flaws in the browsers, right?

**James Long:** Well, it could be something intrinsic in how SQLite works, because SQLite was not built with the browser in mind. So there just tends to be -- I don't know, I think I get the fear. I think it's unfortunate that there wasn't a more involved attempt to reach that need. I think it's unfortunate that IndexDB was the solution, essentially. I don't know what the better solution would be, but it's unfortunate that it just died, without really trying out the things that we're talking about.

**Jerod Santo:** \[01:16:04.07\] Yeah. Well, it seems like it's never too late to add... Like, IndexDB is going to be there now. And it's there. But local storage is also there, and so maybe at some point a revisit and saying "IndexDB is clearly insufficient for developers' needs based on the absurd things that developers are doing in order to have an API that is useful and malleable and desirable in the browser. Hence look at James Long's Absurd SQL project. And maybe it's time to give them something else." I don't think it's too late for that. I think obviously the original VHS versus Betamax is over, and IndexDB won. It looks like back on Ken I used WebSQL, Database, Firefox never supported it. Safari had support for Safari 3 through 12, and then they took it out. I'm not sure the story there... And everybody else seemed to support it. And still does, it looks like. But you can't count on it being there. So okay, Absurd SQL... But the moral of the story is it's still faster than IndexDB. Isn't that what you said earlier in the show? That's the crazy part.

**James Long:** Yeah, this was one of the things that was like a rare combination of events; I implemented it to do to get to a certain need, and then there were these other compounding factors that sort of played out, which was surprising in a very, very good way. The reason is - because IndexDB is just very, very slow. That's one of the critical problems with it. When you're doing more than a couple of reads and writes, it just gets very, very slow. Especially in certain browsers. I think Chrome - I can say this with confidence, actually, Chrome was one of the slowest ones. It was pretty bad.

You can use transactions, and you can sort of manually optimize it, but it gets very difficult to optimize, especially when you're doing things at the application scale. And so with SQLite, what it does is because it's writing down these 4k blocks, when you make a bunch of writes, 4k is actually a lot of data, and you can do a lot of updates. You can update thousands of rows in SQLite, and it will end up only having to write two of those 4k blocks. And so what you end up with at the file system - or not at the file system layer, but at the browser layer, at the IndexDB layer, is two writes. You write these two 4k blobs. And actually writing those 4k blobs, or writing one 4k blob is fast; it's like something about the actual overhead of a write in IndexDB that is really, really slow. Writing 4k, that amount of data is totally fine. It's the same as writing like two bytes. It's just something about the actual write call, and the transactional semantics and all of that that is just really, really slow.

So if you update a thousand rows in Absurd SQL and just use SQLite, you automatically get that batching down to just two IndexDB writes, instead of doing a thousand IndexDB rights, which is just incredibly slow... Unless you do it in a super-specific way; but that means that your entire app, if you're writing it against IndexDB, has to be aware of these very specific pitfalls of performance. Whereas with Absurd SQL, you get all of these improvements for free. So you can just do as many writes and reads as you want to, and it's just super, super-fast. For reads it's the same thing. You can read 5,000 rows and it ends up only doing three reads.

If you look at the graphs on my announcement post, it was insane when I actually benchmarked it out. The performance of SQLite just grew as a huge curve, and then if the y axis is the milliseconds, you'll see IndexDB is just this small blue line as the rows are getting larger at the very bottom, but SQLite is still going all the way up.

**Adam Stacoviak:** \[01:19:56.11\] Have you ever talked to Richard Hicks about this stuff? Sorry, Richard Hipp.

**James Long:** I haven't. They actually just released some sort of in-browser thing, and they were saying it's just not the same use case, and Absurd SQL is a great way to persist it. But I should reach out, now that it's kind of a proven project.

**Adam Stacoviak:** Yeah. Well, worst case, he's just curious, you know?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** He was talking about the test suite. That's another thing I was thinking about with Actual - did you include the test suite with the open sourcing of Actual? Because part of the part of -- you know, if somebody grabs Actual in the future, open source-wise, and tries to use it, if they don't have your test suite, in SQLite's case, then... That's the cream of the crop...

**Jerod Santo:** They're running lame.

**Adam Stacoviak:** ...the massive test suite behind the scenes.

**James Long:** Yeah, it's an interesting model.

**Jerod Santo:** Do you have a test suite?

**James Long:** Actual does have a test suite.

**Jerod Santo:** Okay. I've always gotta clear that, just in case... \[laughs\]

**James Long:** Oh yeah, totally. I mean, it doesn't cover everything, especially at the UI layer; it doesn't cover most of the stuff. However, I literally took the folder Actual and I removed a bunch of the tracking and subscription code, but I actually published pretty much the folder as it is, with all the test suites, and everything.

**Jerod Santo:** Alright, so that's Absurd SQL. Links in the show notes. What else are you proud of in terms of Actual's technology?

**James Long:** There's a lot of things I'm proud of technically. I mean, the whole local-first thing is pretty novel. I think Absurd SQL is really one cool thing to come out of this. Another thing which I haven't really spun off as its own project or anything, just because I'm not super-interested to do that, is the syncing engine. And so you mentioned hearing me on some other podcasts - that's probably what I was talking about, which is there's a whole -- because it's local-first, you still want the ability to have your data on different devices, and automatically have it backed up in a way, so that if you just drop your computer and it breaks, you don't want to lose your data.

I think that was one thing I ran into early on, which is "Man, this liberal-first stuff is so cool, but it really sucks that if I drop my computer, it's just gone." That's why the internet and the cloud came to be such a compelling platform. And so I was talking to some friends and I was looking into it a little bit, and I almost -- I didn't get this to work, but I landed on an architecture that ended up working really well, where all of the changes happen locally, but they go through this system using something called CRDTs. It's a pretty elegant solution to this whole problem, where it can sync these CRDT messages around. Everything always syncs up to the latest version, and it's a whole custom syncing layer, and it works pretty well. So I'm pretty proud of that.

**Jerod Santo:** Why are you not interested in extracting that? Just too ingrained?

**James Long:** It's kind of ingrained. It would take some work to extract it out, and I'm also not entirely sure what I would really get out of it. I think that there's such a small amount of people that--

**Jerod Santo:** Another Hacker News round. \[laughs\]

**James Long:** Another Hacker News round. Another project to support.

**Jerod Santo:** Yeah...

**James Long:** So I started that probably three or four years ago, and there are other projects... There's a project called yjs, which I would recommend linking to if you can... It's another CRDT implementation. There's other more mature projects; there's that, and there's Automerge, which is another project... I think there's a third one too, that I forget, that I would push people towards using. I just don't have any interest in competing with those ones. But now that I've already ingrained it into Actual and it works pretty well, I'm not interested in switching mine to others, but I wouldn't recommend --

**Jerod Santo:** Sure.

**James Long:** I'm not going to tell people to use mine when there are these other more mature ones out there.

**Jerod Santo:** Comments on React Native? It looks like you're using React Native...

**James Long:** I am using React Native currently, for the mobile apps that are going away. I think a lot of my problems with it are just Facebook's management of it, because it's very driven from -- internally, they developed React Native for their stuff, and then they sync out the changes to the open source world, and it makes the whole open source world feel kind of like a second-class citizen.

\[01:23:54.09\] It's a little bit weird to me - there's a company called Expo that does a lot of tooling and libraries around React Native... A lot of that work is really, really great. It's a little bit weird to me though that a lot of that's even required. I like to use things at its core. I like to use it straight out of the box, because usually that's the most important method. But Expo is kind of the most supported method now for React Native. And it's a little bit weird to me that a third party is the most supported. In fact, I think if you go to React Native docs, Expo is like the thing to get started. And I don't really understand why they haven't merged yet. I assume that's just because they don't want to be part of the Facebook org, and all that kind of stuff.

So I think there's just like -- it feels messy. It feels like I'm not sure who is what, which libraries to use... There's like a React Native Reanimated library, which is an amazing animation library that fixes a lot of problems with React Native's built-in animation library. But why do I need to use an entire replacement for the animation system? I feel like I have to glue together a lot of things was to get it to work well, and that's kind of annoying. But it's a pretty good -- I'm very excited for the React Native rewrite that they're doing. They're actually rewriting a lot of the core components to fix some of the pretty core problems with it... And so I think there could be a good feature for React Native, but I'm a little out of it. I haven't really used it for the last year, when I kind of stopped working on the mobile apps.

**Jerod Santo:** Well, your desktop app is built on Electron, and you want it to be fast and simple and privacy-focused. There are alternatives upcoming around Electron. I think Tauri is the one that people are talking about today. We haven't really looked into it that much... But Electron is awesome. It also can hog resources. I'm curious if you've done any workarounds, or if you thought of trying out something... In the newer crop, I think there's -- Tauri is on top my head, but there's two or three kind of like "We are cross-platform desktop frameworks that are not Electron", is kind of what their pitch is. I'm curious, thoughts there?

**James Long:** Sure. I haven't experimented with them a ton. I'm super-interested in them. Tauri - I have a lot of respect for it. I know people who rave about it that I respect, and so that typically is a signal for me that I should look into it... But I just haven't had the time to really look into it. It should be really relatively painless to port Actual over. Actual already works on the web, so it works in most browsers, and so if it's something that's using the local version of the browser, it should be totally fine. I'm not embedding and assuming an Electron specific version of the renderer is there. I don't do a ton of desktop integrat-- I don't do a ton of really weird native API usage of Electron. Most of the app is pretty isolated in the web view.

The one thing that I do use is the backend process when you call fork on Electron; it actually forks a native Node process. It's as if you ran Node from the command line. It's just pure Node, there's no UI. That is what the backend runs, which is really nice, because I just have a pure, isolated Node process. So I'm curious how Tauri solves that, or how I would do that there. If I can spawn a Node process for the backend, then I'm good. But I haven't really had a chance to look into them a ton.

**Jerod Santo:** Cool. That's a show we should also do... Adam, we were talking what shows should we do - I think a Tauri show at this point would be on point. That's all from me... Any other cool tech in there, James? Or Adam, anything you've been holding back, questions to ask him?

**Adam Stacoviak:** Just a mention or a note on Tauri... We had a really good episode with them on JS Party, then rebroadcasted on the Changelog, from 1Password... They're actually a premium sponsor of Tauri, so that's interesting.

**Jerod Santo:** 1Password is a sponsor of Tauri?

**Adam Stacoviak:** \[01:27:54.27\] Yeah, they're a premium sponsor. There's two tiers; there's sponsors, and then premium sponsors.

**Jerod Santo:** Aren't they on Electron? Are they built on Tauri now?

**Adam Stacoviak:** I don't know, maybe there's something that happened in there.

**Jerod Santo:** Okay, interesting. Any technological innovations that we haven't uncovered, or just waiting in the Actual source code, waiting to be found?

**James Long:** There's probably other stuff in there... I think the syncing stuff and Absurd SQL is really the two groundbreaking things, I think. They're most interesting.

**Jerod Santo:** Well, the source code is open, so go out there and dive into it, check out what James is up to. I'm sure he's accepting contributions. What's your call to our listener, if they're interested? Is it the open source side, is it encouragement? Is it to checkout Absurd SQL? What should they be doing to connect with you and connect around this project?

**James Long:** I think the easiest thing is Discord. I guess we can maybe add a link to the Discord in the show notes.

**Jerod Santo:** Sure

**James Long:** That's probably the easiest way to -- I don't have a clear page to just say right now, which has the Discord link.

**Adam Stacoviak:** We'll link to actualbudget.com, which will link to most things... Slack is listed in the Community section.

**James Long:** I got so burned out, y'all. I haven't even updated it to Discord.

**Jerod Santo:** \[laughs\] You just quit updating links, and stuff. We'll go directly to Discord as well. We'll have all the links..

**James Long:** If you go to actualbudget.com/open source, that does have a link. That's my open source posts, and that does have a link to the Discord, which I will make sure is updated to the latest one. But that's probably the best place to -- the community is very, very active there. I just moved literally in the last two weeks, and so I haven't really been involved there much... But I do usually dive in there every couple days and sort of just like involve and talk to the community. That's where you can ask people, "How can I help? What's the status of everything?"

I really would love soon help just maintaining the GitHub project itself, just setting up everything. Setting up WebHooks, making sure actions work... Just things like that, because there's actually a bunch of PRs out there that I haven't had time to really manage, but I really need help setting up just the whole contribution process for how you block PRs on reviews, and things like that. So if you have a lot of experience with that, that's probably the most needed. But I would say jump into the Discord if you're interested at all, and there's a lot of really active people there to help get started.

**Adam Stacoviak:** Cool. One correction, you said /open source, it's /open source. So if you're listening and you went there and it 404s, that's why. We'll put a link in the show notes to /open source.

James... So you're taking a break for a bit; you think you're going to take a break for a bit. What's a good hypothesis of what you might do in the near future, as it relates to Actual? Are you breaking, are you getting back with family and time, and getting your evenings back? How are you feeling?

**James Long:** I think the open sourcing, or just all of the attention that I got from that was pretty encouraging. I think if I'd open source it -- well, all of my just existing users just were "Oh, that's cool" and then they started using the open source version... I'd probably eventually not do much. But I'm kind of reinspired a little bit, so I think I might -- we just moved, so I'm focusing on on all that right now. I think just finding better balance, and we're just -- I kind of see my role right now as sort of a project maintainer; just helping people get PRs in, answering the questions, and just kind of helping the project along. And then if there's a business partner, and if one of those people work out, then we might have a hosted plan coming out soon, that will continue that on in a different way. It will look the same as current users, but it'll be a whole new stack, where it's hosted somewhere else. That is a potential opportunity. But right now, I mainly just see myself as a project manager to help unblock people who are interested in helping get things done, just helping get PRs in, basically. So that's the near term for now. But right now, my job and my family and my nights do come first, so there'll be weeks where I don't do much, and that's okay.

**James Long:** \[01:32:07.00\] That is okay. Good for you, man. That's good. The one thing I think I want to give you a pat on the back for is prioritizing your priorities, really. So often do we just pursue things blindly, in some ways, because we're passionate, we complexity, we like to do clever things, we like to innovate, we love to pursue the dream of something, right? But you've got your family, you've got your girls, as you mentioned in the show, and making sure that you're the James you need to be, the daddy you need to be for them is the most important thing in the end. Finding that balance is really the most important thing. And we want you to have that; we want you to have that balance, and go back and get that balance. And if the passion bug gets you again, we want to encourage you in that path too, and figure something out. We think there's a lot of opportunity here. Jerod and I were asking lots of grilling questions about where you've been, choices you've made and whatnot, but we just want to be a source of encouragement for you, that when and if you pick the ball back up, we'll be here to say "You can do it!"

**James Long:** Well, cool, thank you. I appreciate that. It means a lot.

**Adam Stacoviak:** And thank you for coming on the show and answering all our questions, and exposing the world with your code, and all the cool stuff you're doing with Absurd, and Actual, Actual Server, and just your journey. We really appreciate you sharing a lot with us, so thank you so much.

**James Long:** Yeah, thanks for having me. I enjoyed it. It was good.
