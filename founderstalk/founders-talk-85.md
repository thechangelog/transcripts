**Adam Stacoviak:** Well, Sam, welcome to Founders Talk. It's been a bit, we've talked a few times... At least once, let's say. Big fan of what you're doing at PlanetScale, big fan of your journey to get here. The name says it all, right? PlanetScale. Isn't that cool, when you have a brand that says exactly what your intentions are?

**Sam Lambert:** Absolutely. And people have made many comments about the name, and the ambition that the name implies... And I like it. It's not easy to make a logo with a planet, I'll tell you that, because there's many planet-themed logos... But I do really like the name, and it certainly piques people's interest, certainly.

**Adam Stacoviak:** Mm-hm. Everybody -- I mean, at least me; I'll say me as in everybody... I like space a lot. I'm a real big fan of physics, I'm a real big fan of the very, very big, and the very, very small, and the examination of that, which is physics, right?

**Sam Lambert:** Yes.

**Adam Stacoviak:** Metaphysics, you've got interstellar physics, you've got all sorts of different stuff you're looking at when it comes to that... But I think planets, the planet idea totally makes sense for what you're doing with PlanetScale. When I've talked to many different entrepreneurs here on this show, the big issue tends to be the database, at some point. You might start someplace, and pick something off the shelf that works, or maybe you don't put a lot of thought into it, and I think over time the entrepreneur and developer's interaction with software creation and product development is evolving and maturing... But you tend to begin somewhere that is developer friendly, easy to deploy, easy(ish) to manager, for the most part, and then hopefully provides the end experience that your customers need and want...

\[04:08\] But I think what happens at today's scale from, say, a startup to a company like whomever, that will eventually IPO - somewhere along that road you hit some major bumps, typically in the database part. So that's what PlanetScale is trying to do, to solve that big problem. How did you become involved in PlanetScale? What's your journey to here?

**Sam Lambert:** So exactly what you said completely resonates with me, and I've lived through it a couple of times... And it's also very much the journey that our customers have been through. So every day, multiple times a day, we speak to engineers or founders and people that are scaling their business, and they picked the database that was right for day one, which is exactly what you should do... Pre-optimizing too much for a future that you may not even earn is unwise. You shouldn't do it. You've gotta build for today, get that first user, get the first ten, a hundred, a thousand, ten thousand, a million, and maybe even a billion if you're very lucky.

So there's a bunch of tools and a bunch of databases out there that are appropriate for that... Like, two clicks, you're up and running, super-easy. The constraints are just not there, or they're hidden. Or the trade-offs that early database has made - it's super user friendly, super developer friendly, and it makes it very easy to build upon... But then that doesn't last.

You remember the old days of Heroku, right? It still probably is one of the most default places to start beginning, and building an application.

**Adam Stacoviak:** It is. It is.

**Sam Lambert:** But then Heroku tax kicks in, and things get expensive. I've spoken to multiple people that run everything on Heroku except the database, which talks out to Amazon RDS, or whatever... Because the database is the first thing that crumbles, and then you've gotta do more. And I think this is kind of a fairly depressing state of the world. But I'll wind back and I'll get to the overall answer...

So how I came to know PlanetScale - well, I've been in databases for a long time. I was a database engineer by trade, and I joined GitHub in 2013; this amazing company. It was just growing like a weed, growing incredibly... Actually, I was thinking about this the other day - GitHub's series A was like a hundred million dollars?

**Adam Stacoviak:** Yeah.

**Sam Lambert:** People talk about how insane the funding environment is right now. That happened in 2012-2013 I think. Yeah, I think it had just happened when I joined. So nearly ten years ago, that valuation for series A was incredible. So this company was just so special, so much going on, so much growth, loved by developers... But we were having database problems, and that's why I joined, to work on those issues... And we kind of never resolved them. I mean, you just about put scale problems to bed, no matter what the tool is, no matter what part of the stack you fix those scale problems... And if you're in a high-growth company -- I mean, six months to a year, all of those decisions you made to scale for this order of magnitude are just completely out of date again, and you're back at it. This is an undifferentiated journey for all companies that are scaling.

Eventually, I ended up being lucky enough to run the infrastructure team at GitHub, and the platform team, and it became quite a large group, and we were running into more and more scale issues, and we discovered Vitess. Now, sharding had always been seen as this pattern that was used by all the mega-scalers, like YouTube, Google, Facebook, Yahoo!, LinkedIn...

**Adam Stacoviak:** Twitter...

**Sam Lambert:** \[08:00\] Twitter... Yeah. The list is like, you shard your database eventually. You horizontally scale. You're very soon in your journey, and now even quicker in most startups because of the way everything is accelerating... You out-live what a single box can do. And then having a master box and replicas - that falls down eventually as well. So you eventually get to sharding, and that is a very hard problem to solve. Just very difficult. And we were stuck between this "Well, we're scaling... Do we do it ourselves?" And just at the right time, Vitess came along. It was a sharding solution based on MySQL, that had been proven at massive scale. So Vitess was the database layer for YouTube, and it ran across 20 data centers, up 70,000 nodes... Just this huge database cluster. And they were all presented as a single application as well, which was very handy for us, because GitHub was a Rails app, and we didn't wanna make things extremely complex, and we didn't wanna push out sharding logic in the app... We wanted something that was fairly transparent, so we discovered this technology. And you know, the team loved it... We had a great database team at GitHub; they loved it, they saw the value... So I met with the founders and I asked if I could invest in the company, because I thought that's a great technology like this you that find impactful you should, so I did. Then I was advising for the company for a little while.

Then I was thinking about what I wanted to do next, and I thought if you have -- you know, after being through the GitHub journey and seeing the power that developers bring, and what phenomenal audience they are to build for and build with, I thought "If we can take this extremely powerful backend technology and deliver it so that we are that first database..." Right now, it's like a trade-off at either end of the spectrum. You don't pick the large-scale, hard to implement, hard to learn technologies. You do that later on in your journey, when it's appropriate, when you have loads of money and you can hire loads of engineers.

**Adam Stacoviak:** Yeah. You can just buy it out.

**Sam Lambert:** Right, exactly.

**Adam Stacoviak:** Throwing people at it.

**Sam Lambert:** And we always say, it's a nice problem to have. And it is. If you've hit that checkpoint, you staff up your army to take the next milestone, or whatever. So it was good. But I thought to myself, "It's 2021, there's been incredible disruption and innovation in places like serverless and the frontend stack, and we see companies like Vercel and Netlify and what Cloudflare are doing", and I thought to myself, "The time is now." If we have this backend tech that's so good, we can do this. We can be not only the best database to pick on that day one, we can be the best database for IPO. And Vitess has already proven at one end, and then we build PlanetScale on top, which is our serverless platform that we launched in May, that became GA last week... And we made it happen. And I've honestly been blown away by the reaction since.

I think there was need, there was demand... There was a miss, a massive miss in developer experience. So the trend was databases. Previously it was "We're solving some other problems for you, so we're gonna pass on a bit of that pain." But at PlanetScale, that's a no.

**Adam Stacoviak:** That's a no...

**Sam Lambert:** We wanna deliver incredibly powerful experiences, that are incredibly simple and easy, and that is possible thanks to a very proven and mature technology under the hood. If you're starting a database startup from scratch, you're battling both great experiences, building a database... It takes decades to build a really solid database. It really does. MySQL is what - 25 years old now?

**Adam Stacoviak:** Super-old.

**Sam Lambert:** It's still maturing.

**Adam Stacoviak:** Yeah.

**Sam Lambert:** Postgres has been around ages... And this is not bad stuff. This is good. This is maturity; this is what you want from your database. It can't be being risky. So building on those solid foundations, but with an eye for the beauty, and the eye for this great experience is really what we're here to do, and it's been amazing so far.

**Adam Stacoviak:** \[12:08\] PlanetScale as a company is, from my estimation, at least four years old, right?

**Sam Lambert:** Three.

**Adam Stacoviak:** Three, okay.

**Sam Lambert:** Yes, we've just hit three. It was co-founded by Sugu and Jiten when they came out of YouTube, and they took Vitess with them, basically.

**Adam Stacoviak:** Okay. So was Vitess always open source? What's the trendline since the possibility of PlanetScale was only possible because of Vitess, from basically what you've just said there? If Vitess is the underlying technology and PlanetScale is the developer experience/user experience of implementing that as a serverless application to use, a serverless platform to use for developers - what's the trendline for Vitess? What's the lifespan of that? Where did it began, where did it come to open source, how did you come to know it? Did you use it at GitHub? Give us some deeper details there.

**Sam Lambert:** Yeah, so Vitess was developed I think about eight years ago at YouTube. And it was, again, the same story - YouTube was becoming the massively prolific website that we all know now. Did you know YouTube is the second-largest search engine in the world?

**Adam Stacoviak:** Is it really?

**Sam Lambert:** Yeah.

**Adam Stacoviak:** It's definitely one of the first that I go to when I research anything products.

**Sam Lambert:** Anything.

**Adam Stacoviak:** If we buy something new, I'm like, "Babe, have we --" My wife will ask me questions, and my response is "Babe, have we looked on YouTube yet to confirm this is --" Because there's always somebody on there talking about how that thing works, how it actually is used. It's everyday folks in most cases.

We just bought -- I don't know if you saw this TV called The Frame from Samsung. It sits on your wall like a picture frame.

**Sam Lambert:** Yes...

**Adam Stacoviak:** Very flat, it's got a component box that goes in a separate room or in a separate cabinet, it's very sleek... And it can look just like art. And so before we bought it, I'm like, "I can't believe this TV exists and it can perform in that way."So just to be sure, before we bought it, I'm like, "Let's go check it out on YouTube." So yeah, I definitely agree that it's one of my go-to places for new information.

**Sam Lambert:** I do know The Frame, and I have a number of friends that have it, and it's an amazing TV. I did buy a bunch of TVs before this, and now I feel very jealous... And I'm in that horrible state you get with products where it's like, I can't justify getting rid of one. You know what I mean?

**Adam Stacoviak:** Yeah, yeah.

**Sam Lambert:** You're like, "You know, maybe this will hopefully break next year so I have an excuse", but it won't.

**Adam Stacoviak:** That's kind of what happened in our case. Something happened with our current TV and we had to take it down and do some stuff behind it. We had it hung over our mantel in our main room, and long story short, we had to make some changes, basically. And while we had it down, we're like, "Maybe we should look at The Frame." So long story short - yeah. And then as soon as we thought about it, we were like, "Okay, before we actually push Buy now, let's go to YouTube, let's search, let's see what people are using..." Because for me it's not just a TV, it's how can I actually make the image look when watching movies. Like, does it have cinema mode? Does it have gamma changes that you can do with the color and the spectrums to make it really shine?

And let me just say real quick - this is not an ad for The Frame - I love the TV. It's phenomenal. I've just set it up recently... Like yesterday, to be exact, and I like it a lot. I've watched 4K content... Phenomenal. So I don't mean to make you more jealous, Sam... I'm sorry.

**Sam Lambert:** Samsung though, if you do wanna send us some money for shilling the product, you're also more than welcome as well, if you want some brand ambassadors.

**Adam Stacoviak:** That's right. Or use our database, PlanetScale.

**Sam Lambert:** Yeah, just use it. Samsung as well if you need a database. There you go, two way, I'll buy the Frame, you buy the database.

**Adam Stacoviak:** That's right.

**Sam Lambert:** So - also YouTube, by the way, if you need to change a socket or fix a thermostat - YouTube.

**Adam Stacoviak:** Oh, yeah.

**Sam Lambert:** \[15:47\] It's also the biggest education platform in the world. So anyway, YouTube is booming, and now they're in the billions of users scale. And they're of course running MySQL, because MySQL is just ubiquitous in the very large website space, and they had to come up with a solution for scaling it. And actually Sugu, our co-founder, he did a really good talk at Prisma's Serverless Data Conf that happened last week, and I really recommend checking that out. He tells the story and goes into the story of how we did this with Vitess.

So Vitess was born on Borg. People may know Borg as the predecessor to Kubernetes. Kubernetes is kind of architecturally based on Borg, which is this very, very large container runtime system that powers pretty much all of Google. Some of the core tenets of Borg are "No real persistence." Like, if you lose a node, it's gone; it's never coming back. So they had to orchestrate and run MySQL on this environment, so they needed to build this orchestration and sharding system to do this, and that's how they built Vitess. And it was built very pragmatically, and in fact, it was also one of the earliest Go projects. People don't realize this, but Vitess was running on Go from such incredibly early day... And the Go team, actually, when this History of Go article came out a while back, they called out our co-founders as a thank you, because them building Vitess - and Vitess is one of the largest Go applications out there - really helped actually Go evolve, and they gave lots of feedback.

So it was very interesting... Vitess was born at this incredible moment of time when Go was coming about, when the way of running applications the Borg way, that became the Kubernetes way... So it was those two ingredients - new language, a new way of running applications, and then the final piece that is essential - demand. So building deeply technical systems without the pressure of a reason to do so.

There's something special when you're building a technology to serve a single website, and then you have to deploy this technology over and over again, with continual load, that means you're kind of born in the fire. When they deployed Vitess, if it had a bug, with a billion users, you discover that immensely quickly. And that is another challenge if you're building a database from the ground-up. It's a hard thing to do without that immediate demand. You're not always deploying into your customers' environments. You're not always debugging it. So Vitess had a really smart team of engineers building it for a very long time, with the demands of an extremely rapidly growing website, and I think all of those things together made a very powerful and resilient system.

So when they decided to open source it - and it is truly open source; it's out there for everybody to use, modify, do whatever, host themselves if they feel free... They signed it over to the CNCF, so it's kind of neutralized/neutral, and they've basically put it out there, and other companies started to adopt it, Slack being one of those very early adopters. And Slack have blogged about Vitess, and how they use Vitess, and it's their main database... Just, again, giant scale, and thank you to Slack and their fantastic engineers that have continued to commit to Vitess and make modifications and improve it based on their needs.

If you look at the commit history and if you look at the contributors to Vitess, it is just a litany of some of the biggest sites in the world, or platforms in the world. So this base of people that run the software and improve it and continue to make it better means that we have very -- like, we talk about standing on the shoulders of giants... These are giant giants.

And that's the history of Vitess. We started using it at GitHub, it's been fantastic, and that's how I came in contact with it.

\[20:01\] It's beautiful in the sense that it's wonderful to see all these companies collaborating... This is a game I play, I game a little bit, and we found out from the game creators that the new version of said game... They hit us up and they were like, "Oh, we're using Vitess as the backend for this." It was just crazy. I was sitting there, playing the game, thinking "This is awesome." Or every Slack message I send... It's really delightful to know that the technology that we contribute to and that we maintain - and we do maintain the project, and the project maintainers work here - has such an impact. It just feels amazing.

And then the icing on the top is that now thousands of the startups that have started this year that use PlanetScale have that stack factored in, and they're not gonna go through that painful middle period of redoing the database, ripping the database out... They factored scale in early, and that's the real moment in time. And you think about all these other platforms you can consume now, you can build an incredibly scalable stack while still picking the stack that is appropriate for day one, is still the fastest to use, fastest to build against. It's awesome.

**Adam Stacoviak:** It's interesting. I mean, you've got this history personally with the database engine itself, Vitess, coming from GitHub... I'm curious, what was it like to implement it I suppose there to some degree, like maybe just roll it out? What were you converting from? What was the migration like? And how much of that pain surfaced when you came over to PlanetScale eventually? I like your story, how you said you invested in the company, and you advised, and then you came over as chief product officer, and then I think a few months later, if not just a very short time later, was announced as the new CEO. I think that's an interesting journey. So I'd love to pick out how Vitess was looked at inside of GitHub, at what scale, how it came to be, and then kind of dovetail into your journey to PlanetScale itself... To think "Now we could take this database in much different directions." Like you said, at the right time, at the right place, with the right demand.

**Sam Lambert:** Yeah, so the adoption at GitHub was bumpy, like it is with every -- so Vitess is an amazingly powerful tool, but it's not perfect. And what it does for you is way more than -- you know, you just couldn't build it yourself; starting from scratch to do all this yourself would just be wild, and take way too long. So what Vitess gives you in return is you cut to the chase very quickly on scaling, but if you're just installing it yourself, you're likely gonna need a team of engineers to learn. It's like with every system, you have to learn the quirks, you have to learn its failure modes.

So we did it incrementally... We have a great team of application engineers at GitHub that started to split specific tables out of the database and put it in Vitess. So there was a lot of very, very large tables, that just kept growing and growing... And everyone has these in their application. Your notification tables was one that was just a complete pain. And it was just like, every notification on GitHub just got put in this table, so it just started to get massive. The others is like statuses, or whatever.

So you know like at the bottom of your pull request, when all the CI checks come back, and GitHub was developing the product around this, and all of these statuses for pull requests, like pass, fail, whatever, was just, again, all piling up into a massive table. And people look at pull requests that are like three years old and they might wanna resurrect them, so these statuses needed to be there... So again, it was just like massive amounts of data. And I think around the time GitHub was probably around 30 million users at the time, with a lot of heavy usage.

My favorite thing to look at in the usage graphs at GitHub was you could see all of the cron ticks for the world, because everyone had crons that would pull their repo down and do testing. And you could see this spike through all of the graphs, whether it was like frontend, CPU load, whether it was database queries... Every single performance graph at GitHub had these ticks, had these large spikes. On the hour was the largest, then half an hour, then 15, 10, 5, 1 minute... And you would just see these little -- because all of the world's crons are running to pull code down from GitHub and start up CI processes.

\[24:21\] Anyway, we were trying to scale that, so we adopted things incrementally, table by table, and moved them over to Vitess, and it just worked fantastically, and we still see the enthusiasm from the different engineering teams that get to use it... That's how I got involved.

So then when I was here at PlanetScale, I thought "We can democratize this tech. We can give it to everybody", and then it came to the team. And I have to give all of the credit to the great team that we have at PlanetScale. Not only do we have the Vitess team, that are just literal wizards... They're writing query planners, and you look at the annotation and their notes in the formula that they're working, and I just look at this and just think "I don't know anything about computers." \[laughter\] You just think, "Wow, these people are phenomenal."

**Adam Stacoviak:** Yeah...

**Sam Lambert:** Databases are tough. The trust people put in a database is immense. You have to take it so seriously, what you're doing... And they do take it incredibly seriously, and they work incredibly diligently. We did a BF for compatibility, to make sure we were just compatible with all the frameworks that are out there... And we're very compatible with MySQL. There's a few caveats and a few things that we don't support, and we do that in the favor of scale and user experience in the long run, and there's just certain things that just kind of don't work fundamentally in the long run... And they just put lists of lists of things that were incompatible and just burnt it down. They work with such pace and they deliver such reliable software... They're an amazing team.

So you pair that team and these people, these experts in databases, in the very kind of core essence of what a database is... And then we have this team of folks that build the experiences, like the soft service. If we think of Vitess as like this incredibly powerful engine, then we have people that are equally dedicated towards building an amazing interior, and something that has that quality and refinement. You know when you slam the car door on a really good car, and it just makes that clunk that just feels so satisfying?

**Adam Stacoviak:** Yeah... It's like a very soft hard close...

**Sam Lambert:** Yes.

**Adam Stacoviak:** \*clunk\* it's not \*katunk\* it's more like \*sslk\*

**Sam Lambert:** You can't describe it, you just know it. I love that you tried to make those sounds there...

**Adam Stacoviak:** Well, I had to, because I know exactly what you're saying.

**Sam Lambert:** I feel like we're really bringing the audience with us. It's interactive.

**Adam Stacoviak:** Yeah. We're really taking them on a journey here.

**Sam Lambert:** It's an audible journey. So they really put the effort into refining things, and I think we're all scratching an itch of kind of building the database we wish we had, at all points in our career... And they've put so much dedication into building those experiences. We have this Twitter channel that all of the mentions of PlanetScale go into it, and you see people commenting like "This is the nicest logging experience I've ever had", or "The CLI is just incredible to use, and we're gonna copy PlanetScale's way of doing logins", or all of these various little details that get put into the product... And so much of it -- it's like unnecessary and extremely necessary at the same time. People will buy a proven enterprise-grade database. We have something so unique and so powerful that people will buy that. That's for sure.

We take it to this extent where we want it to be delightful and accessible to absolutely everybody, and that is where the detail comes in. We have the teams that work on the details and the experiences that people run into, so diligent, so dedicated and so talented, and they have taste, and that is something that is very hard to replicate. I just feel constant excitement whenever they share their work, or whenever I see them deliver things; I feel excited and humbled, and just -- and it makes me happy, just to see them work.

\[28:13\] The import feature we just released last week - no one's ever done it that way before. I went and looked at every other competitor, how they do imports, and it's like, "Well, here's the instructions, and how to dump your database... And you have to restore that database into our thing, and connect up here, or set some environment variables, and this, and that..." And it's just a mess. With what our team delivered, you just put in credentials, we connect, thanks to Vitess and VReplication we just pull the data in, no dumping, no restoring, and then you can switch your connections to PlanetScale and we'll proxy back to your old database and do a cut, and you can do a fully online migration on our platform with this tool, and thanks to Vitess, thanks to the refinement and polish they've put on... It's just magical. I've seen people take months to do something as complex as that, and now it's a fully online operation... And it is just the import tool. We could have just gone, "Oh, we'll do it the lazy way like everyone else does it" and move on. But we didn't, because our standards are much higher than that. We wanna make something that's delightful for every second that you use it.

**Adam Stacoviak:** How did that feature come about in particular? I wanna put some heavy weight on this, because this to me is like the clincher. If you can get this down right, like you said, fully online... It's one thing technically to make it possible, but then too to make the user experience so easy to do... Just establish your connection to your database, it does all the magic inside of it, and you can essentially proxy to PlanetScale in between to try it out, essentially.

We always say, if you can try it and prove to yourself and your team that it's reliable, that it's a good fit, whatever it might be - that's the magical way to get people to 1) try it, and then potentially switch. But this seems a lot easier, because you just swap to PlanetScale when it's time, without any downtime.

**Sam Lambert:** Yeah, so it came about in multiple ways. Nothing ever comes about the way you would imagine it, or the way your memory summarizes things... It came about from - first of all, we knew we needed to do it; it's table stakes to have imports. So we looked at the technology we have; we know Vitess can manage external nodes, and we know Vitess can -- there's this primitive in Vitess called VReplication, which is incredibly powerful. If you think of resharding as a problem - it's actually very, very complicated. So to reshard, you essentially have lots of buckets or nodes full of data. They're separated by a scheme. So you may shard on user ID, tenant ID, whatever. And then to reshard, to change that scheme, you have to fan in all of the data from those shards and fan it out to another sharding scheme, while being online, while being completely safe with the data... And it's very hard to do. And that, again, was solved at YouTube. We have customers that do multi-petabyte reshards; reshard if fanny if state in fanny. And so that itself was a really hard problem to solve, and Vitess has solved it.

And in building that kind of replication stream technology, VReplication, you can do many, many other things. One of those things is looking at other MySQL nodes and use it to kind of nibble the data into Vitess. So we looked at that as a functionality like "Great, that's one strength."

Then it's about giving the overall feeling of what we wanna build and what needs to be possible, and handing it to the engineering team, who are incredibly picky and talented, and have a very high bar... And this is what they came back with.

**Adam Stacoviak:** \[32:02\] I like to use the word "selective" instead of picky.

**Sam Lambert:** Yes, selective, picky...

**Adam Stacoviak:** Highly selective, highly picky...

**Sam Lambert:** Yeah. They just have a high bar for things. They wanna build really great things. And so that's what they came back with. And there was always that "And another, and one more thing..."

**Adam Stacoviak:** Right.

**Sam Lambert:** "And we're gonna do the proxying, and we're gonna make this possible." And yeah, it's just mind-blowing every time we see it. And then obviously, we put our incredibly talented product designers on hoof, who are very good at what they do, and then kind of some magic comes out. It's an intertwining of culture, talent, knowing what users want, knowing what our standard is, and coming together as a group to build it.

**Break:** \[32:46\]

**Adam Stacoviak:** So you said you got exposed to Vitess inside GitHub... What do you think GitHub would have been like in your day if PlanetScale existed exactly as it is now, with the promise that it exists now, in that day, for GitHub? How would GitHub have changed if it had PlanetScale then?

**Sam Lambert:** It's an interesting thought experiment. As the person building databases back then, I would have loved to have a product like this around... And that's what I think about. I think about the limiting factors. I think one of the amazing things about GitHub was very selective, very talented early engineers, that had great taste and knew what to build, and I would like to believe that what we're building would pass the test of getting out of their way and enabling them to build and scale such an incredible product. And that's who we're doing -- we're doing it for the next generation, the next GitHubs, the next Slacks, the next Stripes, whoever is building the next big startup.

We have a startup -- obviously I'm not gonna name names, but they're not really a startup now; they're just crushing it, but they've been on the platform for a little while now... And they see 40% growth month on month. Every month, their data size, their usage goes up by 40%. It's amazing. It's just amazing to see; when the database gets out of the way - and obviously, we can't take full credit for everything, but it is just awesome to solve problems for companies that are growing and scaling so quickly. It's just immense fun; it's really awesome.

**Adam Stacoviak:** \[36:04\] Let's talk about your journey then to CEO. Did you expect to, I suppose, have this exposure early on to Vitess, this desire to invest, to advise, to eventually rethink what's next for you, make that move to chief product officer at PlanetScale? And then -- how many months after that was it that you were promoted as a CEO? What's that journey been like for you to go from that journey to exposure to it, investment, advisement, chief product officer, now CEO? What's that -- is it like expected, unexpected? Delightful? How do you feel about this journey of yours?

**Sam Lambert:** It's completely unexpected. I think it would have kind of been a little -- um, it'd be a bit aggressively ambitious, I think, to maybe expect it all to happen this way. And honestly, it's been amazing. I don't really think too far ahead, for myself personally. I think very far ahead in terms of what I would love the company to become, and what I want our product to become, and it feels like we haven't even gotten started, and it's already been incredible.

I tend to just see what comes up and try and capitalize on what's there, and make the best decisions I can at the time, to make things kind of happen. That's kind of been this journey. I joined GitHub because it was this crazy, incredible company, full of absolutely amazing people, and I kind of just followed where that went. And I don't think you need to have a grand plan. Just do great things with great people, and the rest kind of sorts itself out from there.

**Adam Stacoviak:** Yeah. What was the early impression for you though? When you were -- I mean, I don't wanna say your time at GitHub was done, I'm just trying to capture maybe how you felt then, but... What was it that was making you question what was next for you, and what was the attractive piece for you for PlanetScale? What was that attraction?

**Sam Lambert:** So I went to Facebook for a little while after GitHub.

**Adam Stacoviak:** Okay...

**Sam Lambert:** I went to work on systems that were just at colossal scale. And this scale, this Facebook, YouTube type scale - it's a different world. There's a team at Facebook that just adds overlays for graphs that explain world events... Because if you have 3,5 billion active users, world events like elections and things actually meaningfully affect engagement on the platform. So it was just this gigantic scale problem to work on, and it was very, very interesting.

On the other side, I felt there was something missing. I loved developing products and getting to work on GitHub Actions was some of the most fun I had in my career... And I wanted that again. I love databases, and I just got chatting to the co-founders of PlanetScale and it kind of just came together. I just saw an immense amount of potential here, and I knew that myself and a few folks were kind of ready to move on to the next thing. By the time I left GitHub, I had been there eight years, which is a long time in startup world, and the company had evolved and changed a lot... So I just felt like I was ready to do something new.

I came over here and started talking to some old colleagues, and pitched them on what I felt we could do, and one by one they came along, and we made some really fantastic hires, and now the company has grown immensely, even in the last year... And it just feels awesome. It just feels right. You're on this journey. You kind of get into a state of flow. You know, you have those days where you go from one thing to the next, and it feels like there's almost a soundtrack playing to your life; it almost feels like a montage in a show, or a movie, or whatever... It just kind of flows from one thing into another. And that's what has started to build up here.

Now we're definitely in that state of flow, and it just feels incredible. You hop from customer call with a major brand, and they're like "We're on. We wanna do this." Or you jump into a product review and the engineers have just far exceeded everything you expected you could do. Or you have a leadership meeting and you meet a bunch of folks on this journey with you who are trying to not just build a great product, but build a great product and kind of view the experience internally almost as a product.

\[40:25\] And the days just kind of melt away, and you have so much fun. I'm kind of dedicated to enjoying every second of it, even the low points, because I never thought I'd get to do something as fun as GitHub again... And getting to do something like this the second time, I'm taking it all in, and just enjoying the small moments. The late nights where you're with a few colleagues and you're just like batting around ideas and hopes for the future... Or just the little conversations.

We're gonna be certain people's first ever job, and it will shape their career, and that's just awesome. I think it's so amazing. It's such a -- you know, people mock it and laugh at it, and I sound silly when I talk about the journey; it's so cliché. But it really feels like it.

**Adam Stacoviak:** I'm with you, man.

**Sam Lambert:** It's amazing.

**Adam Stacoviak:** I agree with that. You have a sort of reverence for the process; not just the possibility, but for the people involved, and all the details... I love that you think about the fact that working at PlanetScale is gonna be somebody's first job, and what that impact will be. I think in many ways it does shape you. It gets to shape you. And if you can build the company right and the culture right and the trajectory of where you can go right, and have the right kind of team, at the right time, with the right kind of demand...

I agree with your sentiment on the sort of soundtrack to daily life, bouncing from one day to the next, and it just sort of seems to click... Even when it doesn't fully click perfectly, like a bad day or a down moment, it doesn't seem like it's -- those are the days truly to enjoy, honestly.

**Sam Lambert:** Absolutely.

**Adam Stacoviak:** They really are.

**Sam Lambert:** And you have hard days. We have problems. But if you frame them with the gratitude that you're still around... And think about it, we are through so many filters; our stage in the company, with the demand that we have and the people we have, we've got so much further than 99% of companies. So when you have problems, you think, "I'm sure glad I have this problem, versus the opposite." And then you can feel very grateful for that.

There's great learning and fun to be had from even going through shitty things, but with great people. And especially people that have a sense of humor. I think we definitely do have a very strong sense of humor in our culture, and a lot of people are very funny... And you can take things seriously all the time, but I think that just wears on you. There's certain situations that happen in your company life where you can either take them super-seriously and beat yourself and beat each other up about it, or you can say "It's kind of funny that that happened... What a stroke. What a fluke. Oh, dear." And then just move on, and kind of laugh it off, and make a joke, and carry on. I like working with people with great sense of humor, and we've got some really funny, talented people over here. It's great.

**Adam Stacoviak:** For me it's three words I use to help me shift my perspective in moments like that... Rather than thinking "I have to do X", to shift it to a gratitude position, I say "I get to do X." So I might think "Gosh, I've gotta ship two podcasts between today and tomorrow, because it's Thanksgiving coming up." And that is a burden, because producing great podcasts is a lot of work. There's a lot of detail that goes into all the process, and all the bits and whatnot... And I could -- despite what an awesome job it is that we get to do here at Changelog, there was a day when I was like, "Man, one day I hope all I can do every day is just produce podcasts." And then now, it's like, well, that's the burden... Right?

**Sam Lambert:** Yeah.

**Adam Stacoviak:** \[44:10\] So you can say "I have to... Ugh...", with this begrudge in the heart. Or you can shift to a gratitude position, which is "I get to." "I get to produce two podcasts this week. And not only do I get to produce these awesome podcasts, somebody out there is gonna hear Sam share his story about why PlanetScale is what it is, and why he believes in it, and why the team is phenomenal around it etc. Somebody's gonna get impacted and their life will be changed." Rather than just saying, "Oh man, I've gotta ship two podcasts this week." Or "I've gotta deal with this bug/feature" or "I've gotta be on instance this weekend", or whatever.

**Sam Lambert:** Reframing is very powerful...

**Adam Stacoviak:** Yeah.

**Sam Lambert:** And it's a really hard thing to admit to ourselves, but you can choose your experience of the world. It's exceptionally difficult... Once you realize that, you get even more of a burden on yourself, in the sense that you can choose how you perceive what happens and how you remember the effects it has on you.

I used to think extreme positivity was being very naive. Or like optimists were naive. Surely, nothing's perfect... And optimism is not about thinking the world is perfect, and thinking whatever; but being optimistic - and now I try and be extremely optimistic... The optimism that -- you know, "We'll get through things. We'll do something."

**Adam Stacoviak:** Yeah,

**Sam Lambert:** But it took me a long time. I was extremely pessimistic, and kind of learning that -- you know, the law of scenarios. Like, how many scenarios where you text someone and they don't reply, and you're like "Oh my God, I've offended someone" or whatever. But you don't know; you truly don't know. And 99.9% of the time you haven't done anything. The people that chose to say "I don't know, so I'm just gonna assume the absolute best, versus the worst" - neither is more wrong or correct; it doesn't matter either way. It took me a long time to think about that truly, and realize that even in terrible situations, even when someone's being rude to you, or mean, or whatever, you can just put a positive spin on it, commit it to disk, get it out of your head, and move on. Once you learn to do that, the world starts to get a lot easier and better. But it is very, very hard. We're in an industry of pessimism, I think, but you only build great things if you're super-optimistic about them.

**Adam Stacoviak:** Yeah, exactly. I mean, I happen to be the optimist, at least in my relationship with Jerod, my business partner, and my wife. I'm sunshine and rainbows, and she's sunburn and cavities. So when we look at scenarios, we look at them slightly differently... And I'm not always perfectly an optimist, but I tend to be like "What's the good in this scenario?"

**Sam Lambert:** Yeah.

**Adam Stacoviak:** One thing I heard was that you can't choose how people will behave, react or respond to life events. But what you can control is how you respond.

**Sam Lambert:** Exactly.

**Adam Stacoviak:** And I think that's kind of what you said before, like you can choose how you respond to life events. Now, granted, there's some things you go through that are super-challenging and you're not gonna be the best person ever, but just knowing that you have the choice on how to respond, even if you don't do it right the first time, the next time that it happens, or the next time that it happens, that you get to change and evolve how you respond... Because how we respond to the goods and the bads and the ups and the downs - in a lot of cases it's our choice on how we respond to those things. Because I can get mad and throw a fit and maybe even smash something nearby... Or I can pause for a moment, take a breath, think about it a little differently. What's the upside here? What's the next step I could take this in a positive direction, versus the negative direction? And then take that first step. And the momentum tends to be the thing that carries us. So just creating that momentum in the right direction you wanna go or should go is truly half the battle.

**Sam Lambert:** Yes.

**Adam Stacoviak:** \[48:13\] Once you're there, it's like, "Wow...!" It's almost like your days now; That momentum was a little hard to get to, but once you got there, it just sort of keeps clicking.

**Sam Lambert:** You're right. I sort of think manifestation is both quite dumb, and probably the most amazing thing that you can actually do... Right?

**Adam Stacoviak:** \[laughs\] Yeah.

**Sam Lambert:** There's people who are like, "Oh, I'm gonna manifest this" and it's like "Yeah, your bank account isn't growing if you just sit and think about it." But at the same time, if you manifest this -- your idea of wanting to be successful and make something... It actually changes everything. If you believe in doing something great and awesome...

I've never thought of a good way of framing this. Maybe someone has already done so, but... It's those micro decisions and attitude that you bring to things. This morning I woke up and I was really grumpy and pissed off, and I thought I was gonna have a really rough day. And then I worked out, and my entire attitude towards the day changed. None of my schedule ahead of me, the criteria for the day, the things I was gonna -- nothing changed. Literally, nothing changed for that hour I was working out. But the attitude did, and it completely changed how I approached everything. And that feeling.

I think if you do that on a larger scale for your life, and try to manifest the life that you want, it kind of takes care of itself in a lot of ways. You kind of just have to push forward and flow from one of those states to the other. And going back to what you said, I think you can probably go to the extent of saying - at some point, you can say you're responsible for every action or reaction that you take. It's just impossible to control all of them. Ultimately you are, right? And some people have managed to gain incredible self-control. I think for most of us, that level is fairly unachievable.

**Adam Stacoviak:** Yeah. Well, there's some edges of emotional intelligence and emotions that I'm not that familiar with, which is why I kind of caveat it with most of the things you're in control of. Because I think there's some things around just humanity and emotion that we can't often change that something would make us depressed, or make us sad if a sad thing happens. So I don't wanna say that you have full control over it. In many ways, it is a result of your action. And if you practice behavioral change, and emotional intelligence and things like that that really shape and mature your perspectives on (I guess) life events, then with all practice like that you eventually get better or improve. Like, you're just not born with emotional intelligence. You're not born with the best way to change. So you aren't in control of it, but I think over time you get better and better at it, which is an interesting thing, honestly.

**Sam Lambert:** Agreed. Well, and kind of controlling the lizard brain and controlling those default reactions that you have to things, and how you react...

**Adam Stacoviak:** Right. So let's come back to current, really. So new CEO... This is the first time CEO position for you.

**Sam Lambert:** Yes.

**Adam Stacoviak:** Is it the best time of your life? The mostly best time of your life? How have you taken on this new role? What are some of the particular challenges that you've 1) hated, but then also enjoyed?

**Sam Lambert:** I love the job. I absolutely love the job, and I feel incredibly lucky and privileged to be able to do the job. I will say though, it's a very tough job. And it's funny, I didn't imagine what it would feel like until I took the job, and I knew I was gonna be the CEO for probably a month before it happened. But even just minutes after it was announced, you just feel this very strange feeling...

\[51:55\] And people say it's the loneliest job in the world, and I think that's true. Again, just insanely fortunate to have such an amazing team at PlanetScale, but in a lot of ways, you're responsible for the final say. And if things go wrong inside your company...

**Adam Stacoviak:** It's your fault.

**Sam Lambert:** ...it's up to you to fix it. Yeah, it's your fault. Ultimately, you can trace back every single issue in the company to being my fault at some point. And that's hard. It's also an immense privilege though, because you get the ability to shape things and change the things you don't like. And I try and do that. I really want to build a phenomenal culture for people to work here, and be happy, and do the best work of their careers. And sometimes that means not always doing what people are asking.

You have all of these sources of information... You have a picture of the world - like we all do - that is completely unique, and you try and balance things... And I think some of the best businesses and products are built on unresolvable tensions. Let me put it this way - in every company, the sales team always want more, more, more. The engineering team want more time to do X type of work. The marketing wishes this was -- and I'm not saying it's specific to PlanetScale; it happens everywhere. There's overlapping priorities for each part of the organization. And if you can hold them in balance, you can build a pretty healthy culture. And you're the one who has to do that. And it means disappointing some people at certain times.

I saw a really good tweet about this the other day, where someone basically said "Nothing destroys an organization faster than a leader with a desire to be well-liked." I think that's true. I think if your goal is to be liked all of the time, you just give people the sugar, rather than the vegetables. If I gave my two-year-old everything he asked for for his dinner, he'd be eating a lot of ice-cream, and he'd be happy for the moment. In the long-run I don't think it'd be so good for him; definitely not his teeth, at least.

So sometimes you just have to kind of say, you know, you have a perspective, or a view of things, and you have to hold firm to it, even though it's not exactly the most popular thing to do... But in the long-run, I think you're measured in years, maybe even decades, and so sometimes it can feel a bit lonely from that perspective.

On the other hand, if you surround yourself with a great team - and I think this team is phenomenal, and I love this team - it is incredibly delightful in ways that I also never expected. So it's a mix. It's a big mix. But I wouldn't change it.

**Adam Stacoviak:** The balance you speak of is certainly part of the joy and frustration, because it's like, "Wow, I get to balance these different things" or "I get to put certain practices or systems in place to organize the chaos that might ensue if there is no organization. I get to help orchestrate that. And maybe not solo, but I get to influence, I get to put the right people in place to lead in the best ways possible to create that balance. Yeah, I think you're spot on with the balances. If you don't have that balance, things really get off kilter, and it could be a bad thing.

**Sam Lambert:** Exactly. And you can barely influence them now. You get about six months of -- the decisions you make now are probably coming to fruition in six months' time, and that kind of filters down through the different organizations, and whatever. So you have to think clearly about where you wanna be in the long-term, and whether things are being shaped towards it.

Also, I don't really wanna build the type of company where I make all the decisions. I'm not the smartest person in the room. There's amazingly talented folks here that have honed their craft over many years. The more I can give them to decide and build against and decentralize how things are done, the better things will be. If you just limit the company behind the world that you see, you will stumble, because you have your own perspective and view upon the world, and it's not the same as everyone else's.

\[56:14\] That's why I try and also talk to young developers that are very unreasonable and have very unreasonable views of the world or what products can do... Because it tells you something. That's why I think serverless is such a fantastic movement, because it's really unreasonable in wonderful ways.

The demands on building a serverless product are really hard. It goes against the trend of how we've traditionally built applications. But it's that unreasonableness that is so optimistic to me. It's like, yeah, actually, previously you couldn't do this. Or "Actually, this is a really hard problem. But you know what - we're not gonna stop until we reduce it into something that can be simply understood and mastered." And that is really, really tough. But it's an amazing discipline and it's great fun to do with really awesome people.

**Adam Stacoviak:** What do you think you have changed in your life as you've taken on this new role? The reason why I ask this question is I could see in my life when I've taken on new challenging roles that I've never filled before, how I would shift and change my perspective, and my psyche... I might -- not so much change my habits and eating habits or whatnot, but I might just be a bit more disciplined in certain things. Do you intend to get more sleep than you did before? Did you commit to reading certain books, or getting a coach? What were some things that you bolted on new when you took on this role?

**Sam Lambert:** I think my appreciation for anyone that's managed to build a successful company, and learning from them. I think we oversimplify what it takes, and the immense emotional burden that it puts on everyone involved in doing so... And I've gained an incredibly strong appreciation for that, and I think it's made me a lot less critical about this... Because you kind of walk a mile in their shoes and you're like "Yes, it's hard."

I've tried to be more disciplined, I've tried to stick to more of a routine, I've tried to be less reactive to just general things that happen, and just more focused. Because I've realized that scope creep and time creep -- you have to be so much more discipline with your time, because no one will value your time as much as you will yourself. And a loss of time, and burning and wasting time has and can have an extremely detrimental effect on you and your company. And at the end of the day, I just wanna bring home a massive win for everyone that's come to this company and is here building something, and I wanna deliver something amazing for our users. I take that just extremely seriously, and it just takes daily thinking and iterating over the problems continually.

And look, I don't want anyone to listen to me and think that I've made it, or there's any advice here worth taking... You have to find your own path. But I think just dedicate to be learning and seeing how you're wrong... And you kind of learn that over and over again, and you really see the effects of your decision compound over time, and it's very stark. It's great to have that kind of challenge. I think it makes you better if you're dedicated to being better.

**Adam Stacoviak:** What about the fact that you're not in general availability? How does that shift the focus of the company? It's like, being in closed beta, or limited beta, you're in one way perfecting product, you're doing certain things behind the scenes; not quite focused on growth, but kind of focused on growth, because hey, you want to... But how does the company momentum shift at large now being general availability?

**Sam Lambert:** \[59:52\] It definitely accelerates, in the sense that it's on, right? You launch, you kind of launch once, and it's happened. It feels awesome. We were very lucky that even during beta major websites moved to PlanetScale, which is so awesome.

**Adam Stacoviak:** Do you wanna name some names? Can you name any names? A couple I'm sure are listed on your website, right?

**Sam Lambert:** Unfortunately not... So we have some case studies coming out soon...

**Adam Stacoviak:** Okay.

**Sam Lambert:** But yeah, to see that happen, to see people up and running and successful while in beta is a testament to how our teams have worked, and how well they build things. And yes, we have rough edges, everyone does. And we always will. But it was an awesome period to be in beta. It was really fun to learn and meet customers and talk to customers. And now it's just about continuing that. It's like the beginning of the beginning. We've only just started to deliver the very beginning of what our technology can do.

In the announcement post I said probably around 10% of the Vitess' power has been shown through the PlanetScale platform. So the next couple of years is really about starting to show that, and really changing people's expectation of what databases can do and should do.

We've been in this kind of -- the conventional wisdom up until now has been "Do less with the database. Move concerns and pieces of the architecture away from the database", and I think we're gonna lead a new way of thinking in terms of bringing more back to the database. A well-run, a well-factored database can actually do a lot for you. That's gonna get super-exciting.

So being out of GA was good. It was good for all of us. It feels like a release of tension, and now we're there, and the product is ready... It just helps even more with companies and sales, getting on board now we're past the whole phase of the beta.

**Break:** \[01:01:53.17\]

**Adam Stacoviak:** Another thing you mentioned in that announcement post was just the framing of the beginning. You said the beginning of the journey was December 1st, 2020. So this is when the first line of code was committed on PlanetScale's cloud database platform. So - okay, I'm not that bad at math, but it's not even December 1st of 2021, so less than a year later, beta, to general availability... I didn't add up all your funding; I think it's probably 80(ish), 100(ish) million dollars in funding raised so far. Most recent your series C, 50 million dollar series C, led by Kleiner Perkins... You're moving at an incredible clip.

**Sam Lambert:** \[01:04:15.09\] Yes. That astounds me, honestly... And again, it's like that compounding improvement daily, and just the pace. We talk about pace internally... Pace is an incredible competitive advantage. I think any company can be quick and develop something quickly for three months, or whatever, and then it becomes reckless, or whatever. We obsess over having a pace that is aggressive, but short-footed.

**Adam Stacoviak:** How do you do that? How do you put that pace into motion? Can you give me some of the mechanics? How do you say "Hey, team, this is our pace", and they're like "Okay." What are the mechanics of how you put that pace into motion?

**Sam Lambert:** Yeah, you're right, we are moving at a real clip, and that's actually why I put that in there, because I want people to know this. One, because I'm just so incredibly proud of the team and how they've done it. And two, I want people to know that buying in, and kind of being part of this journey means you're gonna get more and more amazing things very quickly.

So we talk about pace a lot internally at PlanetScale, and having the right pace of delivering things quickly, with high quality, and being short-footed. And pace is this incredible competitive advantage. If you look at companies like Apple, people judge their individual things they deliver. "This doesn't make sense. They've removed the headphone jack", or whatever... And then over time, you see that they are moving at this pace that is measured in the decade. Then you look back at what Apple have done in a single decade and you're like, "My God, they've changed personal computing again." But if you zoom into a quarter, it just doesn't look like much,

So we wanna hold this steady pace that means we don't lose focus, we don't slow down, because it's sustainable. And I think most engineering teams or most companies could probably put all their employees on a death march for a quarter and catch up and deliver kind of quickly, but by the end of it everyone's burnt out, they're tired, they're upset and they're not gonna do it again. But if you have a pace where people feel energized and motivated, and the pace is a focus...

Because if you think about your pace as a company and you obsess over it, you can avoid getting dragged down by unnecessary process. How many companies lament when they were tiny and small and agile and could get things done, and they slow down as more people get added into the mix. And if you focus extremely hard on your culture, and not losing that pace, you question why things have slowed down.

You can deliver things well and reasonably without becoming this slow, big company that doesn't get anything done. And we don't want to be that. We wanna keep delivering year after year... And yeah, everything that exists on our platform pre-December of last year is pretty much just Vitess. Everything else was rewritten from the ground up to deliver the PlanetScale platform, and the team did a really phenomenal job.

**Adam Stacoviak:** When it comes to, I guess, competition, so to speak... So Vitess is open source; you're talking about pace and being able to be ahead of competition, so to speak... If Vitess is open source, obviously somebody else can adopt Vitess and do universe-scale, versus planet-scale, you know what I mean? Or solar-system-scale, whatever the next layer up is.

**Sam Lambert:** Yeah.

**Adam Stacoviak:** How do you look at, say, MySQL, Postgres, how do you look at serverless/not serverless? How do you look at the different options when it comes to a database and compete against them, or just showcase what you do better or do differently? How do you map out the why's of what you've done?

**Sam Lambert:** \[01:08:06.26\] So we are open source. We don't hide behind BSL licensing, and it is true that someone could go and use Vitess. It wouldn't be as easy for them; we have the Vitess experts, the Vitess maintainers and core contributors work for PlanetScale, so that's an advantage that we have... But also, people can't really clone taste, and I've said this before... When you're building things well, with taste, with quality, it's very hard for companies to copy. And we make it harder the higher that we raise the bar.

MySQL is great. Great backend technology. Postgres, again, is a great backend technology. They are storage engines, and they both do good things, and they're very similar to each other. I think the fact that that's still the debate between the two in 2021 is quite depressing. I don't think about competition much, because the vision we have for the company and for databases far exceeds anything anyone is doing right now, or has done... And so I keep my eye on that. We've already started to show this, right? We've put branching out there; it hadn't been seen before. Very quickly copied, 5-6 vendors just copying it. Fine. It's good. I would rather be in the situation of being copied than doing the copying. And we will make sure that the bar goes up every single year for what it takes to put a competitive database into the market... And we'll fight that war on every front. There's the taste, the ease of use front, and then there's the scale front. When we are in calls with customers and if they're competitive with other database platforms, you ask them what's the biggest customer, and then they compare it to whoever is running Vitess or whatnot - that just ends the conversation very quickly, usually.

**Adam Stacoviak:** You seem like you're trying to do something different to databases than anybody else has tried to do before. You're just really trying to look at every different angle of the way a developer would 1) interact with and use it, and then 2) the way it obviously gets put into production and works for the end user. Because that's the goal, right?

**Sam Lambert:** Yes.

**Adam Stacoviak:** The necessary detail of a database is that it performs in production so that it can satisfy a user's desired feature, so they can get their job done, doing whatever they do, whether it's search on YouTube, or whether it's posting a Slack message, or looking at a GitHub commit and seeing some of the history, whether it's today or last year - you want that to perform very well.

**Sam Lambert:** And that is the table stakes, and we take that extremely seriously. That's why we put equal focus on the backend and what the database does. We just decided to take it further onward from there. Most PMs at database companies, I think all they think about is how queries perform, how will ever. And of course we think that way. You know, we wouldn't be the most scalable and we wouldn't have Vitess perform in such a proven way if that wasn't a focus. We just obsess it -- and like you said, we obsess over the daily lives of developers. It's not just enough to do what databases are meant to do and then just throw our hands up and give up. We think about "No. How does the database join you in your software development lifecycle?" That's why branches are not just there to be a place where you experiment or stage schema changes. They're designed to be your development environment, they're designed to be isolated. The reason we don't have a local -- you can download Vitess locally, but we don't have a local copy of PlanetScale's functionalities because we're long on the future of development being cloud-based.

Back in December of last year I did an internal demo of PlanetScale working with GitHub Codespaces, and we thought about the ergonomics of using PlanetScale as your development database, because we go that far into thinking about how we make developers' lives better all over. And the database is such a source of pain... And you've done a great if you get it to not be a source of pain. We want it to be a source of delight, and that takes that additional level of obsession.

**Adam Stacoviak:** \[01:12:09.19\] Mm-hm. Why serverless? Why the big bet on serverless? You say cloud... Why the big bet on serverless? Why is this the future?

**Sam Lambert:** Well, I think it's what the cloud is supposed to have been. You look at what a lot of the major clouds provide for you now. Some provide very good services. Amazon has some great services, like S3 and whatever... But that didn't go far enough. I think the real promise of the cloud is yet to be met and it's starting with serverless. We think of this cloud as this ever-expanding, powerful thing, that can just enable so much for what we do, and everything is connected to the cloud, and whatever... But it's got a long way to go in terms of user experience and usability, and it's complex, and people who, say they have a large Amazon architecture or whatever, they've got a large operations team behind that. And with this new era of products and these new companies that are kind of baking themselves into this mold of this serverless model, I think that will start to change. We'll still need operators; of course we will. They're so important; they're critically important internally in what we do. But it's not just about that. It's about what our customers can do without having to hire up massive teams.

I've said this before, and a lot of people have made a similar prediction which is there's gonna be massive, multi-billion-dollar companies that are like 5 or 10 people, because they have managed to leverage so many of the tools and serverless platforms out there. So serverless is this all-in, much more refined view of how you can deliver cloud products without passing on silly, meaningless abstractions.

I remember I signed up when I was doing my sort of early discovery of what we should build as a product - I was signing up for other database products, and it's like, they're asking you to specify VCPUs, and stuff like this. And it's like, if you're a founder with the next Stripe in your head, that you need to bring to the world, why the hell are you trying to work out what a VCPU means? What does it mean? Like, I don't know how bad your software is; I don't know what resources are consumed. I just wanna do the thing you promised you were gonna do. How do I reason about 10 VCPUs versus 24 VCPUs on software I've never used before? It's just silly. It's lazy, it's hostile to the user.

We just say "We're gonna give you a performant database, and we're gonna charge you for the things you know you do with it, which is query it and store data on it." And that's the experience.

**Adam Stacoviak:** \[laughs\] It seems so logical the way you describe it and put it in the market. It seems like that's -- and maybe that's why you're winning. That's how it should be.

**Sam Lambert:** You know, it could be. We haven't won yet, but I think when you look at the amount of other serverless databases that have followed suit, it's clearly resonant with people. And again, we're gonna keep moving that boundary.

It would have just seemed weird to develop a product like this, now or in the last 3-4 years, and not make it something serverless.

**Adam Stacoviak:** You've had a big November, you got Managed Cloud out there, you went GA, we talked about database imports... We didn't touch on - because this isn't an announcement podcast by any means, but we didn't touch on the Prisma data platform integration that you've got going on. I'm sure that's a big win for you as well, how that plugs into Vercel and how easy it is to take essentially an application to production... Like you had said, just this idea -- and I think that's what's really interesting about where you're going and what Vercel is doing and what Netlify is doing and what Prisma is doing in terms of their data platform... Just like enabling that future founder who's got the next Stripe idea in their head to just build the company initially technologically pretty easily (in quotes, "pretty easily"), being able to use technology like yours, that's sitting on the shoulders of giants. The giant shoulders, essentially, as you've said before.

\[01:16:16.29\] And hey, you don't have to scale to a certain amount of people... If you have a billion-dollar company, if you have five or ten people, that's pretty impossible. So I don't know, I'm not sure about that, Sam. You'll have to check your math on that one.

**Sam Lambert:** We'll see. We'll meet up in a few years and we'll see who's right.

**Adam Stacoviak:** Okay...

**Sam Lambert:** We'll see where that prediction is.

**Adam Stacoviak:** We'll have to get more specific on it to make the prediction right though... Because a billion dollars - five, or let's say sub-ten people. Would you say sub-ten people?2

**Sam Lambert:** Yes.

**Adam Stacoviak:** Would it be a good stretch for you then?

**Sam Lambert:** Yes.

**Adam Stacoviak:** I think that'd be possible, but they would be eking at the seams, for sure, with ten people. They'd need to scale people.

**Sam Lambert:** Nice problem to have... At least it wasn't their tech stack that was getting in the way...

**Adam Stacoviak:** That's true. Okay. Touché. Gotcha, Sam.

**Sam Lambert:** That's an amazing advantage.

**Adam Stacoviak:** Okay. So they don't have a staff of DevOps, potentially.

**Sam Lambert:** Right, exactly. They'll have just a few motivated developers.

**Adam Stacoviak:** Yeah.

**Sam Lambert:** I've heard of one-person teams making 8-10 million dollars/year on the Heroku app store, and things like this. Single developers building useful bits of functionality. We'll see what the world comes to. But working with Prisma has been fantastic. That is a team of people that, again, just have great taste. They have attracted and inspired a whole audience of young, talented, motivated developers. We love working with the Prisma team. When we started speaking to them, it was clear there was a big unmet need in terms of the backend, how a truly powerful serverless SQL database would just be perfect for their user base... And we were just really grateful to be able to partner with them on their platform, and being the database there that is powering the backend is just great.

Every day on Twitter, multiple times a day, I see people "Oh, I just picked up my new stack. PlanetScale, Prisma, Netlify, Vercel", whatever... And they just love it. They're just like up and running, producing people. People are doing tutorials of building apps in like an hour. And you think to yourself, "Well, that stack is gonna scale to probably a few million users, really, before it has problems." And that's just never been done before. That just makes me so excited and optimistic. And just working with like-minded companies that love developers and love building great user experiences as much as we do is -- it's awesome.

**Adam Stacoviak:** Can I call out one of the tweets that you're probably mentioning, if you don't mind? Can I quote one of them?

**Sam Lambert:** Yes, go for it.

**Adam Stacoviak:** Brian Lovin - you probably know him. He co-founded Spectrum, acquired by GitHub...

**Sam Lambert:** I love Brian Lovin. He's a great person, incredibly talented.

**Adam Stacoviak:** Yeah... He says "It's wild how Prisma and PlanetScale together have empowered me to build things I would have never even tried to make before." And that's what's interesting about timing, as you said before, momentum and demand. Because that's demand, right? Once you realize when you couple a few things together in a unique way that was never possible before, because 1) it didn't exist, and now the internet might even have the user base... Because like, you couldn't have built the application ten years ago that had that kind of demand, because the people just weren't there. Ten years ago the internet did not have the same amount of people on it to have that demand, or that accessible demand that mobile phones bring, and whatnot.

I just think that's interesting, how you could be at a certain place, in a certain time, have that kind of demand, in Brian's case, that you could put these two things together and build things you never thought before because they just weren't there.

**Sam Lambert:** \[01:19:51.04\] It's awesome. It makes me so excited about our future as an industry, or species, that technology is going so much better that it is enabling these things to happen... Which is awesome. I mean, it's the same with the power of open source as well. The things that are happening, the collaboration that's happening, people coming together - it really feels like the promise and the future. And Brian is wonderfully complementary and it makes me so excited to read -- you know, people say these things every day now, and it has the same effect on me; every time you read it, you just feel so proud... And also so excited, because you know what's coming next. We know - I know - at PlanetScale that we have just begun. It feels like we're just welcoming people through the door of the chocolate factory, and there's such a big, wild ride to come... And that gets me up every single day. I just wake up -- sometimes it gets to Friday night and I'm just sad the week's over. I wake up every day just so hyped and excited to do this, and I just love it. I absolutely love it. And I love the people we get to do it with.

**Adam Stacoviak:** Well, speaking of what's next - we talked about your series C funding; congratulations...

**Sam Lambert:** Thank you.

**Adam Stacoviak:** General availability of the platform is out there, you've got some adoption happening, obviously, and you're shifting your focus to something new, since only 10% of what you've been able to do is out there... I love to ask this question - I didn't prep you for it, so this is sort of a curveball, to some degree, but I'm sure you'll handle it no problem... But what's on the horizon? What's something people know nothing about, or very little about, that you can share? What can you tease about the very next big thing coming from PlanetScale.

**Sam Lambert:** Okay. It is a tease, because we don't publicly share our roadmap, just because we don't wanna disappoint people... The tease I will say is Vitess wasn't just YouTube's database; it filled a number of roles that are essential to building a very large-scale operation. Those things in Vitess - they're mature, they're stable, and throughout next year, a bunch of those primitives are gonna peek through into our product. Our job now is to build incredibly simple and beautiful user experiences on top of what's already there... And yeah, it's coming soon for folks that are already on the platform, and getting them excited.

There's a lot of fundamental work we could do to make developers' lives simple in terms of learning databases, gaining knowledge and harnessing that power, and we have a lot of great ideas on how we can do that, and bring modern database practices to the modern developer, and really starting to meet their expectations.

So it's gonna get very exciting. There's a feature that is nearly done, that just -- we would have avoided hours or days in total of downtime at GitHub if that had existed when we were doing our thing. So I'm very excited to put that into the world. No other product has done it, it has not been achieved so far. It is fully stable and ready in the backend, and now we're just adding the polish and making it happen.

**Adam Stacoviak:** Okay. So coming soon then.

**Sam Lambert:** Coming soon. All coming soon.

**Adam Stacoviak:** Is it gonna be a Christmas gift, or a new year's gift? Give me a rough ETA.

**Sam Lambert:** I wouldn't wanna ruin everyone's Christmases by taking them away from their families to play with great, fun database products... So it will be early next year.

**Adam Stacoviak:** Q1, okay.

**Sam Lambert:** Q1, yeah.

**Adam Stacoviak:** Cool. Sam, I've had so much fun talking to you, through your journey, through Vitess, through what you've done with Vitess, with PlanetScale, the way that you love on developers, the way that you care about the -- you know, that day one decision that doesn't have to be a day one only; it doesn't have to be a redo at year three or four or five, whenever you begin to scale beyond your abilities with current databases... And I just love the way that you had that gratitude perspective and how you look at each new hire as "This could be their first job ever."

I just love the perspective that you bring, so I can imagine how fortunate your team must feel to have you as CEO of the company, with the perspective you have. I've really enjoyed the conversation we've had... Is there anything else that I haven't asked you, anything else you wanna put out there before we call this show a show?

**Sam Lambert:** I just wanna say a massive thank you for having me. It's been really enjoyable getting to know you and getting to chat. To everyone listening, if you wanna experience the future of databases, planetscale.com, or @isamlambert on Twitter if you wanna engage and chat about the world we're building.

**Adam Stacoviak:** Sam, thank you so much. It's been awesome. I appreciate you.

**Sam Lambert:** Thank you.
