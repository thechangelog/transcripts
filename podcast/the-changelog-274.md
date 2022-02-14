**Adam Stacoviak:** Mike, this is your fourth time back on this show. I mean, obviously we love you, man; we love having you back. Episode 92, episode 130, episode 159, Sidekiq, Inspeqtor, and obviously sustaining open source... How do you feel to be back on the show? You're like an OG around, basically...

**Jerod Santo:** A regular.

**Adam Stacoviak:** It's like cheers, everybody knows your name.

**Mike Perham:** Maybe I should host the show a little bit... \[laughter\]

**Adam Stacoviak:** That's not a bad idea.

**Jerod Santo:** That's an interesting idea.

**Mike Perham:** \[laughs\] Well, thank you for having me back. It's pretty impressive that you all have stayed around that long, and just continue with this podcast for so long. It's quite an achievement.

**Adam Stacoviak:** This would be roughly episode 270-something(ish), so we're in the 270's... Not bad.

**Jerod Santo:** Not bad.

**Mike Perham:** Wow.

**Adam Stacoviak:** Around for roughly eight(ish) years almost.

**Mike Perham:** That's incredible.

**Jerod Santo:** Well, we're still here, and you're still here as well, which also is quite impressive. Years and years of putting out awesome open source and also running a business around it... So congratulations on you also still being here after all these years.

**Mike Perham:** Thank you. I think we both had interesting journeys... Certainly off the beaten path.

**Adam Stacoviak:** It is off the beaten path. Well, on that note, let's catch up a bit. I know that we can easily send folks back to those episodes and do a full-on, but you've got kind of the main topic today, Faktory, but what's going on with Sidekiq? That's like your claim to fame, so to speak, your sustaining in open source... And you came up with Inspeqtor... What's new for you?

**Mike Perham:** \[03:54\] Yeah, so Sidekiq is definitely my meat and potatoes; that's what's paying the bills right now. But I've made my career for the last five years on background jobs, and so over the last year I've done some thinking about due directions that Sidekiq's architecture does not allow, so where I went with that is building a new under system called Faktory, which is sort of an inverse to the design of Sidekiq, and part of that inversion allows it to be language-independent... Whereas Sidekiq is tied to Ruby and sort of limits me in my customer base to people running Ruby, Faktory is designed to be language-independent.

You can use Faktory with any language. The idea is that I can come out with this sort of opinionated background job framework that's useful for any business application, and it doesn't matter what language you're authoring your business application in, you can leverage Faktory as infrastructure to scale your app. We'll see how that goes, it's still early days obviously, but this is something that I wanna put my efforts into over the next year, and see what I can make happen.

So toward that end, about two weeks ago I first announced Faktory and unveiled it. I'm approaching the second alpha release this week, and then over the next few months it will just be sort of the daily drudgery of building up a new large system, and hopefully building a new separate division of my business around Faktory, and possible commercial variants.

**Adam Stacoviak:** Have you hired anybody yet, or are you still solo? What's the scenario there?

**Jerod Santo:** I'm still solo today, but I'm thinking that if Faktory is successful and I get a commercial variant that is selling well and it looks like it is sustainable, then I probably would hire one or two people to join me in the effort of maintaining this, because ultimately my vision for Faktory is an order of magnitude larger than Sidekiq, and at that scale, at that size, I think I sort of run out of steam and I'll need help to support the number of customers that I have, and that sort of thing.

**Adam Stacoviak:** We don't want you to burnout, or work too hard - what is that? Working too hard, burning out - is that the same thing?

**Jerod Santo:** It can be.

**Mike Perham:** One can lead to the other, for sure.

**Jerod Santo:** This move kind of reminds me of Heroku's move back in the day... I don't remember when it was anymore, but they were originally -- well, all the way originally, they were actually like a web IDE for Rails, which was cool, but it wasn't really a product that people were buying. Then they were a hosting platform for Ruby on Rails, and then they took funding, got big... I'm not sure when Salesforce acquired them, so before or after this move, but the shift to polyglot from them was very much a move to broaden their customer base, so I see your move from Sidekiq, which is Ruby-based, to something that potentially can facilitate a service for lots of different languages, lots of different companies...

What drives the desire for you to get that much bigger potential customer base? Is it just wanting to grow the business, is it money, is it your board? Tell us some of your drivers to say "You know what, I'm gonna move outside of my meat and potatoes and try for a bigger pool."

**Mike Perham:** \[07:56\] Well, ultimately I think background jobs are something that can benefit almost every business application out there, and a lot of the background jobs systems out there are language-specific, like Celery, for instance, or they are language-agnostic, like Beanstalk, but they are essentially abandoned now, where no one's maintaining them. On top of that, I think a lot of the background job systems that are out there that are language-agnostic don't have a lot of -- they don't have the years and years of additional really nice features that become super useful in building business applications.

Sidekiq has sort of proven that there is a market for these frameworks that allow you to scale job processing across many machines along with the API's that you inevitably need when you're scaling your processing across many machines... Things like rate limiting, things like cron jobs - all this kind of stuff are really useful, generic tools that I wanna bring to everybody.

I'm proud of the fact that Sidekiq really took jobs to the next level in the Ruby world, so I wanna do that same taking to the next level for everybody else, and not have everybody else sort of reinventing the same thing over and over, but slightly different.

If we can all standardize -- I mean, with Rails it was proven that if we all standardize on one framework that everyone can use, then you can move so much faster and you can build so much more.

**Jerod Santo:** So you've got six months in the works as of the announcement post, which like you said, was a couple weeks ago as of the time of this recording; for those listening, it was 24th October 2017, I believe... Six months in the works; you said that you kind of inverted the architecture. I guess we could just dive right in and talk about Faktory in terms of the way that you've built it, and all the fun nitty-gritty. Tell us about this inversion from Sidekiq and how Faktory is put together.

**Mike Perham:** Yeah, so the way that Sidekiq works is that you have a centralized data store - in this case it's Redis - and it's running on some machine. Then you have one or more Sidekiq processes which are talking to Redis. That Sidekiq worker process implements all of the features that are required for job processing. So all those features are implemented in Ruby, that is running in that Sidekiq worker process.

So all those worker processes, they all talk to what I call this dumb data store, which is Redis, in that Redis doesn't have any logic in it; it just stores bits of data. And all my logic that operates on that data is all built in Ruby. So that's why you're locked into Ruby, because all of the advanced Sidekiq features that I sell are all implemented in Ruby also.

Now, with Faktory what I'm doing is I'm sort of embedding that data store into Faktory directly. So Faktory is a standalone daemon, kind of like Redis, where instead of exposing a bunch of data structure operations like Redis does, I expose a bunch of job operations. So all of my feature logic can be embedded in that Faktory server daemon that is sort of the central hub, and now all of your Faktory worker processes can be implemented in any language, because they don't have any of those more advanced job features that need to be implemented in them. All they do is pull a job and execute it, and then tell Faktory when the job is done.

\[12:23\] Faktory does everything else. It keeps track -- it gives you the web UI so you can sort of track all the jobs that you have in your system, and errors that have occurred, and showing you your sets of worker processes that you have out there, and what they're working on at any given moment.

That really makes the Faktory worker processes much simpler than the Sidekiq worker process now. In the last two weeks since I announced it, I've had people implement Faktory workers in six different languages, which is pretty amazing to see.

**Jerod Santo:** We actually noticed that listed out there; you've got Ruby, Go, Python 3, PHP, Rust, Elixir, Node, .NET... Obviously, the Ruby and the Go ones are first party official worker libraries or... Should I call them worker libraries?

**Mike Perham:** Yeah, client libraries, worker libraries...

**Jerod Santo:** Client libraries... Sure.

**Mike Perham:** Producer Consumer libraries...

**Jerod Santo:** And the comment we have in the note is kind of wow... Kind of wow how many there are already, considering this is brand new. So that speaks a little bit to your reputation in the community and the fact that people are getting excited about this. It also probably speaks to what you've just said, that they are much simpler to do than the Sidekiq worker process.

**Mike Perham:** Well, one of the reasons why I built Faktory is because over the years - the last couple years - I've heard dozens of people ask "Is there something like Sidekiq for my language?" That tells you that there's a bit of demand there. I'm not sure if it's enough demand to warrant venture capital investment and a hundred million dollar valuation, but that's not what I'm shooting for. I'm shooting for ma-and-pa's artisanal software that I can...

**Adam Stacoviak:** I love that!

**Mike Perham:** ...sort of build and maintain with a me or a small crew over the next decade. That's kind of the scale that I've always wanted to operate at.

**Jerod Santo:** Do you ever think about the speed at which a highly-funded company -- so ma-and-pa, what they're concerned about is usually Walmart and Amazon, and these huge megacorps coming in and steamrolling them... First of all, have you faced any fierce competition from startups, or do you have that fear, if Faktory's successful, somebody can throw 100 million into the rink and squash you?

**Mike Perham:** Well, I mean, if they throw 100 million into the rink, what does that entail, what does that mean? Typically, that means they need to make a 10x return if that's venture capital.

**Adam Stacoviak:** Right. Nobody invests without a return... Or they want one, at least.

**Jerod Santo:** Yeah, a lot of people invest without a return.

**Mike Perham:** Which means they've gotta make a billion dollars. But that means that their pricing needs to be commensurate with that funding and with that profit goal. I can keep my prices so low that it doesn't matter if some big corp wants to come in. As long as I'm making X thousand dollars a year, I can sustain myself forever. It doesn't matter if Amazon comes in and... You know, Amazon is gonna have SQS, RabbitMQ is a thing... There's all sorts of different queuing systems that are commercial. As long as the market is big enough for another entry -- it's not a winner-take-all thing.

**Adam Stacoviak:** \[16:04\] That goes back to what you said, too - you've gotten over the years lots of people saying "Hey, Mike, is there a Sidekiq for my language?", so that's definitely indicators for what people might call a product market fit, where you've got an idea. Sidekiq as a model has worked for Ruby, and others see it and they're excited about it and they say "Well, how do I use that for my language?" and now you have waypoints to say "This is a good thing to invest in."

**Mike Perham:** Yeah, and people have -- you know, some of the pushback I got on my initial announcement was "Oh, people should just use job library X, or use Rabbit" or "If you're not only pure in the cloud, why would you use this instead of SQS?" or something like that. But that's kind of like asking "If the Honda Accord exists, why would you buy a Toyota Camry?" or "Why would you buy a Ford F150?" Well, they're different things; they mean different things to different people. Different brands mean different things; they have different capabilities and different opinions, and different use cases for different business apps.

A business app that needs to scale to billions of jobs per day might be better off using SQS, where you can sort of scale infinitely, but your ops headache is gonna be commensurate with that choice. So what I find is that the people that use my stuff tend to be smaller shops that don't mind paying $1,000 or $2,000 to solve a problem immediately. They just don't want a lot of ops headache, and they don't wanna roll their own, so they'd rather pay me to give them a pre-baked solution that has all the opinions already baked in and solves a well-known problem, and then they can get on with their life.

**Adam Stacoviak:** So what do you think it is that's a secret sauce for Sidekiq that makes people wanna have it for their language? So if Sidekiq is focused on Ruby, what is the secret sauce? Have you boiled that down, do you know what that is?

**Mike Perham:** Well, that's tough to say. There's an aspect of performance, because Sidekiq was certainly much higher performance than a lot of the existing Ruby solutions. It baked in a lot of features that the previous solutions all kind of separated into separate gems. Taking the example of Resque, one of the reasons I built Sidekiq was because Resque forced you to integrate six different gems just to get the web UI, to get retries, to get sort of a threaded model where you could get a higher performance than just forking per job... So having a strong opinion about how to bake all this stuff into one comprehensive, singular package is important to some people. It certainly makes your ops a lot easier, where you can just depend on one easy package instead of having to sort of tie together a half a dozen different packages, all with different versions, all maintained by different people. I think that's sort of Sidekiq's secret sauce.

In Faktory I try to bake as much stuff into it also; I try and sort of bake as much of value into it so that -- because ultimately that's what people are responding to... They wanna see the value in there, that this solves their problem and it comes with a lot of little nice bells and whistles that they can use.

**Jerod Santo:** \[19:51\] One feature -- we'll talk about, I guess, a comparison, and one thing \[19:53\] is so new, it doesn't have feature parity with Sidekiq... You wouldn't have released it for a while to get that done. But one thing when we're talking about the secret sauce is the bits that you make sure are coming over is it does have a Sidekiq-inspired web UI, which has become something that as a long-time Sidekiq user I'm just very used to the web UI being there. So that at least seems like something that you know is very important to many people. Is that fair to say?

**Mike Perham:** For sure. Setting up the web UI for Sidekiq, for many people, can be a bit difficult, especially if they have a fairly complex web application... So baking it into Faktory so that it's just a HTTP port and they can hit it with their browser really simplifies a lot of that. And it's also - going back to what I was saying before - a big part of the value there. It's a nice, attractive web UI that is baked in. You looked at something like Gearman or Beanstalkd - I don't know that they have a UI that's built in. I think Beanstalkd, the web UI does not come with it and you have to download a third-party web UI and set that up, configure that, whereas with Faktory it's all built into the system.

But where that's useful is that, because the web UI is baked into the one binary, the versions always work together. The storage and the web UI aren't two separate things that you can possibly update separately and then now they need to talk to each other and deal with different versions. It's just one binary. They're part of one whole, so there's no configuration, there's no management of "the thing has two separate units", you know what I mean?

**Jerod Santo:** Yeah, that's interesting. It seems like your goal to push more features into the server-side, but then also to simplify in terms of deployment and management storage, like you were moving dependencies with Redis being removed - I think we should dive into that a little bit in a minute, but how you struggled to find a balance between trying to make things simple, and yet still make it feature-rich inside that single binary...?

**Mike Perham:** Well, that's always a struggle. Keeping a system as simple as possible and considering the tradeoff of complexity versus features is part and parcel to software engineering in general. But I have definitely struggled with what I can put into Faktory and what I can't. There are some things where you're gonna need the worker process that is executing the jobs. You're gonna have to get some implementation from it for some features.

For instance, the worker has to acknowledge that the job is finished, right? If it fetches the job, it has to then tell Faktory "Hey, I'm done with this now." There's simply no way to not do that.

There's also API's like rate limiting. This is one example where your job may wanna do some sort of rate-limited operation, and if I build that into Faktory, that's fine, but the worker is going to have to call that rate limiting API to ensure that the rate limit is being enforced at any given moment. So yeah, there are some features that I can bake into Faktory sort of transparent to the worker process, but there are others that I can't. That'll influence a lot of the future feature design, and sort of the features that will be in commercial versions versus the open source version.

**Break:** \[24:21\]

**Jerod Santo:** So one of the major moving pieces that you've removed from Faktory - or I guess never included in Faktory - which is a big part of Sidekiq and you mentioned it previously is Redis... But you've gotta persist at queue somewhere, so tell us about that decision to remove Redis and what you're doing instead.

**Mike Perham:** Yeah, so this was quite possibly the hardest decision I had to make in designing and the initial implementation of Faktory. Obviously, you've gotta store data somewhere; you've gotta track thing and persist things. If I wanted the invert logic and push the logic from the worker process into the actual server itself, I would need to embed a storage engine, effectively... And Redis is not embeddable. Now, Redis has Lua hooks, it has modules, but all of those are not designed to build products on top of. They are designed for the end user to customize Redis for their own application.

For instance, I can't package up Faktory as a module and distribute it because modules for Redis can only be -- you have to compile a module into Redis. And on top of that, I'd be building on top of Redis, which believe me, I considered for a while, because I've got thousands of line of code which already have all these features implemented for it, so I could literally just port the system over if I wanted to. But ultimately, I decided to go with an engine that could be embedded, so that I could ship a single compiled binary.

So I looked around for a bunch of different things, and the best option that I sort of landed on today is RocksDB, which is an embedded key-value store that is built and maintained by Facebook. They use Rocks to power a lot of their internal services, and so to me that production quality is there. You never know if you're just using some random open source library. I wanted something that had a good production usage already.

\[28:18\] Redis obviously has tons of production usage, so it's rock-solid, but Rocks has proven to be extremely fast, and its production story, at least at Facebook, is also good.

To me, that was the best option that I had. Rocks does have some tradeoffs, it has some drawbacks versus Redis, but like I said, it's the best of what's out there right now.

**Jerod Santo:** It's interesting to think about the long-term. So if Faktory is successful and you continue building on the long-term implications of that particular decision, because while a lot of us don't consider our dependencies really well thought out anyways, but when you're putting together - especially at the application layer - you're putting together usually lots of different things to serve different purposes, and some dependencies, even like Sidekiq, right? Like, okay, it's pretty much the one you go to in the real world now, but in its day, for background jobs you could have reached for Resque, and Sidekiq, and I think delayed\_jobs, although that was getting crufty at the time... So these decisions are kind of made without extreme consideration sometimes, and sometimes that bites you and sometimes it doesn't, especially if they're more -- you can just swap them in an hour; the more modular, pluggable they are, you say "Well, I don't really like Background Job anymore, I'm gonna swap out for Sidekiq."

But with this decision, anybody who's doing persistence, when you're selecting your persistence engine, it has huge ramifications down the road, so it's a really big decision to make.
Give us some insight, how did you go about -- you said that it was production-grade and you liked that Facebook was behind it, but what was your process? Like, what do you go about "Okay, I am going to compare against Redis; I want something embeddable", but it sounds like you weren't completely sold against Redis at the time, even though you preferred an embedded solution. Did you just google around, find all the embedded Go things and then compare them? What's your style of picking a big dependency like that?

**Mike Perham:** There's a couple of things that I was looking for. First was that I knew that I wanted to use Go to build it, so I knew that I had to have something that would integrate with my language of choice. The number two concern was long-term support. Is this thing going to be worked on for the next N years? Is it going to be something that I can submit a bug for, and someone will look at it in days, rather than months or years, or never?

**Jerod Santo:** Right.

**Mike Perham:** You look at something like SQLite - that's a great example of a storage engine that is something that I would consider using if I wanted a SQL engine for a product like Faktory... I definitely would have gone with something like SQLite, because it has proven to be long-term reliable, long-term supported, and sort of has this proven track record over multiple years.

When I first was looking for storage engines, I went straight to BoltDB, which has a really good reputation in the Go community as this nice embedded key-value store library. Ben Johnson, the maintainer, has a very good reputation as a good developer.

\[32:04\] So I looked at Bolt. Bolt is great. The problem I found though is it's very slow for the use case that Faktory wants to use it for, which is a lot of inserts and deletes really fast. Bolt is more of like a binary tree type storage system where you don't necessarily insert a ton, but you maybe read a lot, so maybe for indexes and stuff like that it's really good. But with queues, you push a job into the queue and then you pop it off really fast. So you're inserting and deleting usually within microseconds or milliseconds of each other.

So that's where RocksDB's design really shines, because it proved to be 100 to 1000x faster than BoltDB. RocksDB's design is what's called an LSM (log-structured merge tree, I believe). The idea is that every persistence operation writes to a log, and then regularly the system will take that log and sort of persist it to an actual file that is sort of a binary tree. But if the log just contains like an insert and then a delete, then it will actually never get into the binary tree. So your really fast writes prove to just be constant order time, instead of login. If you know anything about algorithmic complexity, that's a really nice advantage.

**Adam Stacoviak:** How did you get to that research? Did you find a white paper, a blog post? Did you just tinker with it? What got you there to get that understanding? Is that on the surface from the readme?

**Mike Perham:** When I was originally building the storage subsystem for Faktory, I designed it out with a few interfaces and then I just built two different implementations. One was a RocksDB implementation and one was a BoltDB implementation, and then I wrote a load test for it.

**Adam Stacoviak:** Wow.

**Mike Perham:** I ran a load test, and the pushing and popping on queues for Bolt was about a thousand times slower than Rock's. And even though Rocks has some disadvantages over Bolt, namely it's written in C++, so it pulls in the entire C runtime and it increases the complexity of building Faktory, the performance advantage outweighs that disadvantage.

**Adam Stacoviak:** What's interesting too is both of these projects were born around the same time - 2013 - and this reminds me, Jerod, so much of the call we had with Oz, just kind of like the perspective you have when choosing a database or a dependency, as you asked earlier, the process you go through for which -- you don't just use it because it's popular, because somebody that you know and respect wrote it; you kind of do your own due diligence in A/B testing in this case with Mike.

**Jerod Santo:** Right. Yeah, it's tricky too, because on the other side of -- I don't know what you would call it... Haphazard selection dependencies, or pick the first one that looks good you go with - on the other side of that is some serious analysis paralysis which you can get into as well, right? On the far extreme is trying 15 different choices and running all these tests and spending months and months and still not pushing the needle forward. But that being said, I think the best way once you've gotten to a point where you maybe narrowed it down by features and by these other heuristics - support, and the other things that Mike has been talking about - you've just gotta see how it works for your use case.

\[36:11\] You can use somebody else's blog post as a waypoint for your decision, but their use case may be even just slightly different than yours, like Mike noticed with a queue, the reads and writes, the pushing and the popping happening really fast... Well, if he would have read a blog post about Bolt and not tried it for himself, and just thrown it in and kept on building, he would have missed out on an opportunity to have a much better performing dependency.

**Adam Stacoviak:** Mike, maybe pontificate on that. If you hadn't done that research, with the user experience of Faktory B if you went the other route, which was a thousand times slower in your case... Would it just be slower? Would you have released it? Where would you be at?

**Mike Perham:** I think anybody who's sort of trying to build a professional caliber tool is gonna have load tests of some sort, and sort of performance tests... Just sort of get a big baseline feel of performance of the system, so that over the next few major releases you can detect regressions, and that sort of thing. So I think it was just natural for me as an engineer trying to build a quality product, I just said "Okay, well I've gotta build a load test here", so I've built it with Bolt and ran it, and got like 50 pushes and pops a second, and said "Whow, that's way slower than I expected it was going to be."

Once I saw that, I thought to myself, "Okay, I need to either tune Bolt or sort of determine what's wrong here." So I actually pinged Evan Phoenix who is also a really well-known Ruby and Go person. He told me about the LSM (log-structured merge) design and pointed me to LevelDB, and projects like that.

So Evan said "Oh, this is not just a flag you can tune in Bolt, it's part of the design of Bolt. That's why the performance is this slow." That's when I said "Okay, I'm gonna abstract the storage out in the interfaces and build another impl with the LSM implementation of some sort." I looked around for LevelDB implementations and that's when I found Rocks.

**Jerod Santo:** Nice. Phone a friend option - always useful.

**Mike Perham:** You talk to your friends in the industry who sort of know what they're talking about - certainly more than me at the time - and get a feeling for what's going on, which of your assumptions are being violated here? My assumption was that Bolt was a good implementation for the persistence pattern that I needed, but that proved to be false.

If you're doing -- well, I don't wanna pontificate on what the right use cases are for Bolt, but suffice to say that Rocks has proven to be, like I said, orders of magnitude faster, so I realized that I had to go with something like Rocks.

Now, I couldn't find any other LevelDB clone for Go that was really sort of production hardened and that's why I went with Rocks... Because I would have preferred and loved to have seen something that was native Go, something that I could tell is running in production and is gonna be supported for the next N years... And I know that Facebook has several engineers working full-time on Rocks, and they're pushing new versions all the time. That is a very strong endorsement to use it in my own stuff.

**Jerod Santo:** \[40:19\] Just found it here - we actually had Ben Johnson on The Changelog back in 2015, talking about BoltDB; I think he actually compared and contrasted with LevelDB at the time, so he's very well aware of these different architectures.

Adam, I don't think you were on that show; I think it was just me and Ben. We also had Ben on GoTime. He's somewhat of a regular around here as well, great developer, and these aren't things that he would take as a personal slight against Bolt, this is just the way that they're built - they're built for different optimizations, and BoltDB not fitting Faktory's use case.

**Mike Perham:** Exactly. I've never met Ben - he's a Twitter friend - but he's always been a perfectly pragmatic person, and I would hope that we would have that in common. What is a tool that is awesome and appropriate for one use case could just completely fall over for another use case, and that's just software for you.

**Jerod Santo:** Exactly.

**Mike Perham:** It is what it is. Like I said, I pinged Evan Phoenix initially because I know he's used Bolt before, just for him to sanity check... He had access to the Faktory repository from day one, just because I like to have a back-up person in case I get hit by a bus who can actually sort of open source the code that I was working on at the time, and that way it's not just lost to the sands of time.

But I gave Evan access from day one, so he had access to the Faktory code, and I pointed him to the load test and I pointed him to the storage implementation and I said "Am I going crazy here? I'm getting these unusually slow numbers over what I expected" and he was the one who looked at it. Ben just didn't have access to the repo, so that's why I turned to Evan.

**Jerod Santo:** So you selected RocksDB; now, both of those would have been embedded. Tell us about the ramifications of embedded, with regards I guess to the practical use of Faktory. I always think of it as people understand how to maintain Redis because it's a standalone thing, so they're used to backups, they're used to redundancy or whatever the opposite side of Redis is. When you have an embedded thing, it's just like "Is all your data just in that binary?" Where does it store stuff? Tell us about that, about how you back it up and stuff like that.

**Mike Perham:** Right. So embedded just means that the storage subsystem is running within your process, it's not running as a separate daemon over the networks. MySQL, Postgres, Redis - all of those are sort of network storage daemons, whereas embedded means that it's running within my process, and my process is the Faktory process. So Faktory is both a network daemon that sort of surfaces an API that workers can call, but it also has a storage subsystem so it can persist all the data that its API's sort of expose.

What that means is that Faktory basically has a storage directory on your desk, where it places all these different data files that contain your persisted job data. All of that data is RocksDB, effectively. RocksDB owns the data in that directory, and I just point RocksDB to say "Here's the Faktory database. Please open it up and let's get started."

**Jerod Santo:** \[44:02\] So the backups would be similar to just a disk copy... The files on disk.

**Mike Perham:** Not quite. RocksDB does surface, backup and restore API's, so you have to call the backup API and you have to call the restore of the API. Faktory exposes those API's as a command line tool. Faktory has a Faktory CLI command line tool, where you can say "Faktory CLI backup" and "Faktory CLI restore", and that's it. It does it all automatically for you based on the backups that you've taken.
So I envision people taking a backup maybe every five minutes or every hour or whatever they wanna do, and if they find that their store has for some reason gotten corrupted or the disk breaks or whatever, then they can restore their latest backup and get back most of the data that has been lost.

**Jerod Santo:** So your overall take on ripping Redis -- he called it "removing", even though it was never there... But not including Redis. Like, here you are, you're an alpha, you're out there, you've seen people's feedback, you've built the system around RocksDB - are you happy with that choice at this point? Are you having buyer's remorse, or are you missing Redis at all? How do you feel?

**Mike Perham:** Well, it's been a mixed bag, like any sort of decision. There's good and bad parts of it. With Rocks, the tools that it gives me are much lower-level than Redis. I'm dealing with C++ API's rather than a nice set of data structure commands that Redis exposes.

Ultimately, Redis is a great thing. I love it. I will never consider ripping it out of Sidekiq. People have asked me to build Sidekiq for other storage engines, and my take is "No way! Sidekiq is optimized for Redis." And Redis gives you a lot of - like you say - built-in ops knowledge in the industry; people know how to run Redis. There are Redis SaaS's that are out there where you can just say "Hey, here's $50/month. Give me a Redis URL", and boom, you've got something that you can run Sidekiq against. Faktory doesn't have that, but Faktory is still brand new. We're working on that.

Rocks doesn't give me some of the things that Redis does have, like replication, so I can't run a replica in another availability zone or in another data center, and have sort of an almost real-time backup. So there are tradeoffs for sure, but ultimately, Redis didn't have that embedded mode that I had to have if I wanted to centralize the logic into a single binary. So the ease of use of Faktory is awesome because it's just a single binary you just run, but it comes at these tradeoffs of losing the built-in ops lore that Redis has in the community.

**Break:** \[47:46\]

**Jerod Santo:** So Mike, you mentioned that there is no SaaS for Faktory; there's one for Redis, you can get a Redis To Go URL, or your insert RedisSaaS\_URL. Here is that a thing? Because I'm thinking "What's better than having a single binary? It's having no binary." Like, let me just get my worker process and I'll just point it at a Faktory thing and be off to the races. Is that something that's on your radar?

**Mike Perham:** Absolutely, one hundred percent. That was part of -- when I sort of inverted the design I realized "Hey, if I'm centralizing all this stuff, there's no better description of centralization than SaaS", because that's really what you're doing, you're paying somebody else to run this thing for you. So yeah, I've thought about it.

One of the decisions I've made in the past is that I don't wanna run a SaaS...

**Jerod Santo:** But you're thinking about it.

**Mike Perham:** I don't like the 24/7 ops situation. Well, I'm thinking about how Faktory could be used in that mode, and it can certainly be used to build a business that does that.

**Jerod Santo:** But you want someone else to build the business.

**Mike Perham:** Exactly. So what I've thought about and the direction I wanna go is I wanna put out a Faktory Pro that I'm selling, a product that sort of is the same sort of model as Sidekiq and Sidekiq Pro and Sidekiq Enterprise, that will have some additional features that aren't in the open source version. But then I can also have people who run SaaS's that can either offer Faktory for free, or they can offer Faktory Pro for an additional monthly rate, and then I take a cut of that.

So I can either sell it on premises for anybody that wants to run it internally, or I can offer Faktory Pro through the use -- sort of VAR's (value-added resellers) that are running SaaS's. There's already one fellow who's expressed the desire to build a SaaS, and who's already sort of announced that he's working in this direction, so I'm really curious to see what happens long-term here.

**Adam Stacoviak:** I'm kind of curious - we asked you earlier in the call about the state of Inspeqtor. You had success with Sidekiq, and Inspeqtor - you kind of took them the same path with a similar open source, open core pro model, right? And support, or things added onto that. I'm just wondering if because of the success of the Sidekiq model has been so great that you feel like it is the right way for everything you do...?

**Mike Perham:** Well, I think that Inspeqtor and Inspeqtor Pro were less of a success. I've essentially given up on the projects myself. Yeah, I guess Inspeqtor is a very -- how would I describe it...? It's very limited in what it does. It's sort of -- it's funny, I released the 1.0 and it's kind of a 100% of the functionality that I ever wanted in it, really... And the pro version I guess doesn't seem to really add that much value on top of the open source version, so I really haven't seen much uptake from the pro, I haven't seen that many sales from it.

\[54:24\] It could also be that it's just kind of a nice-to-have, but an optional piece of infrastructure. It's not core to any application development, whereas I think background jobs and scaling business transactions across many machines - a lot more companies around the world see that as important to their app.

**Adam Stacoviak:** Another question on that is, you know, Inspeqtor is monitoring. I think back in the day when we had you on the show talking about this you mentioned it was sort of "Monit, but better", if I can recall back to some of the things you've said. But there's full-on businesses around monitoring, and the question Jerod asked you was like "Is this the next SaaS for you?" and you said that you don't really wanna do that, so I see monitoring as this -- not that I'm saying you missed it, but this could have been potentially a SaaS, and then here you are with Faktory that could be a SaaS... I'm not really saying any in particular, I'm just saying like these are opportunities that could not just be open source and pro, and going back to that, is that the right model?

**Mike Perham:** Yeah, absolutely. It could be that the market that I was going for, the product fit just wasn't there with the direction that the industry was going. You look at something like DataDog, it has monitoring for all these various different daemons already.

**Adam Stacoviak:** They're a big business, and one of our sponsors, too.

**Mike Perham:** Yeah, no doubt. I mean, I use them every day to monitor my own hosts, so I know and love their service. It's quite possible that there just wasn't the product fit that Sidekiq had, and we'll see if Faktory is gonna fall more on the Sidekiq side or Inspeqtor side, but so far the uptake has been nice to see.

Like I said, I'm gonna put another six months to a year into this and see what happens with Faktory, see if it grows nicely or if it just sort of plateaus early and really doesn't go anywhere. Time will tell.

**Jerod Santo:** Looking at this from a macro level, which I guess Adam and I tend to do, because we talk to a lot of people in open source trying to use different means and methods of sustaining their work in open source, we look at exemplars and I think over time we've said you've got your Red Hat style, you've got your GitLabs, you have your webpack who's making Open Collective work, you've got Evan You who's making Patreon work, and you have Mike Perham who's making kind of a freemium -- or not freemium... What do you call it? Like a pro and community edition work...

**Mike Perham:** They describe it as open core.

**Jerod Santo:** Open core, thank you; I just blanked that. But then I start to ask people, is there another Webpack for that model? Is there another Mike? And I don't know if there is. Is there somebody else who's taken or done the same model that you've done in a similar scale with Sidekiq and made that exact same model work very well in a similar fashion that you have, that you know of?

**Mike Perham:** \[57:51\] Well, I know that there's been a lot of Java application servers, like JBoss, or... I'm probably dating myself now, but you look at WebLogic and WebSphere - they all have sort of community editions, but then they also have the big corporate enterprise version. And typically, the enterprise version has additional features like replication, data grid caching across -- geo-replicated data caching and all this sort of stuff... So it is a thing to offer sort of a light community version and then a more sort of product enhanced, more enhanced commercial version on top of that.

I think the Java world, the world of application servers -- and when you get right down to it, that's kind of what Sidekiq is. If you squint from really far away, Sidekiq is kind of a Ruby application server. It's using Rails for its major framework, but at the end of the day you're farming work out to a cluster of machines, and that's part of what an application server does.

The only part that Sidekiq doesn't do is the web side, but that makes it sort of independent of the web or whatever the style of the day might be.

**Jerod Santo:** Right. Well, let's get back to Faktory as a service, the idea. So you have one person who's potentially interested; let's say we have listeners whose ears are perking up, perhaps they're entrepreneurial ops people with some development skills, or whoever they think they happen to be, and they're like "Wow, I could be a value-added reseller for Mike." What's the path there, what's the process? They catch you up on Twitter, they email you privately? Are you soliciting for people who might wanna do this, or you're just hoping that one person does it and you can make them the official Faktory service?

**Mike Perham:** I'm not soliciting actively, but I'm happy to entertain offers. The last thing I want is a dozen different drive-by emails from people who want me to provide 90% of the tech work, and then they just sort of spin up a bunch of Docker containers on EC2 and they're done. That's not really what I want. I'm focused on the product, on features, and kind of trying to determine what goes in the community version and what goes in the commercial version.

I would expect a SaaS to more focus on obviously ease of spinning up an instance, but then things like reliability and data storage, back-ups and restores, automating all that so that anybody who's using Faktory doesn't have to deal with that or worry about a disk dying, or something like that.

**Adam Stacoviak:** It's the last thing you wanna worry about, right? Unless you have to do that, unless you have to have that concern; you wanna offer that to somebody else if you can, because you get back to doing the viable stuff, which is building the product.

**Mike Perham:** Yeah, I mean ultimately I'm really limited by what RocksDB offers in terms of reliability and high availability. They don't provide a clustering mode, they don't provide real-time replication, so the best I can offer right now is backups. So you can call the backup API once a minute or once an hour, but ultimately that's sort of what I'm limited by.

**Jerod Santo:** \[01:01:50.21\] Let's talk about Faktory versus Sidekiq. I'm sure we have lots of people out there using Sidekiq, and they're probably wondering what does this mean for Sidekiq (a), and then b) should I be looking to switch off Sidekiq because Faktory offers performance, security or some other thing, ease of use that Sidekiq will never offer me. What do you say to those folks?

**Mike Perham:** Okay, those are two great questions. The first thing I wanna make clear is that Sidekiq will be supported for the foreseeable future. I'll say it right now - for the next ten years, Sidekiq will be supported, without a doubt.

**Adam Stacoviak:** It's a big claim. Ten years.

**Mike Perham:** Yeah. I'm making plenty of money right now where I can justify spending the next ten years just focused on it. So it will be around, it will be supported; I'm just an email away if people have any problems with it. As Ruby and Rails change over time, Sidekiq will change with them to work as best as it can.

Where Faktory shines is that Ruby itself has started to get this reputation as sort of stagnant. People aren't seeing it as the hot new thing, they're not necessarily using it to build new applications anymore. Sidekiq is as robust as the Ruby community is; I mean robust in terms of growth of my business. I don't wanna see my business stagnate over time, so part of this effort is to bring the Sidekiq conventions and opinions to all languages, and at the same time continue to grow as those conventions and opinions grow more popular in all these different languages, hopefully my business will grow also.

The question of "Should I use Sidekiq or should I use Faktory?" - well, first of all, Faktory only has a quarter of the features that Sidekiq has today. So if you need something reliable today and you wanna use Ruby, Sidekiq is the natural choice. But over the next year or two, Faktory will continue to get more features, it will - presuming that the open source version gets traction - see a commercial version that has more features in it... And what you get with that is you get the polyglot design. So now whatever language your business decides to use in the future, you can use Faktory with it. So it's a little more futureproof. As the winds of the industry change and languages come and go, hopefully Faktory will be there on all those new languages.

**Jerod Santo:** Yeah, whereas -- so with Sidekiq both the users and the business is locked into Ruby, but with Faktory, like you said, your business is now futureproof in terms of reaching the hot, new, interesting platforms and languages... But also as your users' businesses change, they are not locking themselves in; they can continue to grow and adapt their applications and not have to swap out their backgrounding infrastructure to do that.

**Mike Perham:** Right.

**Jerod Santo:** Pretty cool.

**Mike Perham:** Ultimately, I see my value as not "I'm selling you a bunch of Ruby code" and thus limiting myself. What I'm selling is the conventions and the opinions that a really nice feature-rich background job system gives you. Ideally, that will scale to any programming language. You know, maybe not assembly language, but hopefully everything else. \[laughter\]

**Jerod Santo:** Cool. Well, let's end with a little bit of a roadmap. Tell us with Faktory where you're aiming at for 1.0 perhaps, what's coming down the pipeline, and then we'll talk about how people can hop in and help out.

**Mike Perham:** \[01:05:52.22\] Sure. Well, as you mentioned, the initial announcement was two weeks ago. I'm preparing the second alpha release right now. I've gotten probably about half a dozen to a dozen different contributors that have really populated the chat room and started submitting PRs. I'm getting pretty close to 100 PRs now, just in the last two weeks, which is awesome.

**Jerod Santo:** Wow.

**Mike Perham:** I've had people contribute several major features, including job prioritization. So Sidekiq never had job prioritization where you could say "In this queue, this job has priority 9" or "This job has priority 1", like as in high or low priority.

**Jerod Santo:** Which one to run first, yeah.

**Mike Perham:** Yeah, because people would ask me "My queue is backed up, I've got 1,000 jobs; I wanna push this job to the front of the queue", and my answer was always, "Well, you need to have a separate queue", which was like \[unintelligible 01:06:52.23\] Yeah, and that's because Redis didn't have a really good data structure for doing that really efficiently, whereas now that I control the storage subsystem, I can implement that easily.

A fellow named Andrew Stuckey sort of really took a shine to Faktory when it was first announced, and he suggested this feature and I said "It sounds great, although I'm not sure how to implement it." Then this guy went along and just implemented it for me. He really is the MVP of this next release, he did a great job on implementing this thing.

So now if you have the default queue and you push 1,000 jobs to it, now you can say priority 9, and that job will go all the way to the front of the queue and it will be next one popped off, even though it was the last one pushed.

**Jerod Santo:** Nice!

**Mike Perham:** I think people will find that really nice for that use case of having emergency jobs, where you might have jobs that are sort of system-generated and those are just normal jobs, but then you have user-waiting type jobs, and you want those jobs to fire off asap; that's where job prioritization really starts to shine.

**Adam Stacoviak:** That's smart.

**Mike Perham:** That will be in the next release, which I'm hoping will come out in the next week. We're putting some polish into a Docker image, so that people will be able to download Faktory straight from Docker Hub and run it right on their machine in seconds, rather than having to build everything manually.

We also landed a Homebrew recipe, so that people can actually install it from Homebrew on OS 10 directly. Sorry, it's called MacOS now, I guess, right? I'm so old-school, I call it OS 10 still.

So yeah, just in the last two weeks the open source community response has been awesome, and it's been really invigorating to already have a few -- I've already landed two or three committers into the project who submitted multiple PRs and thereby earned the right to be a committer.

We'll see how it goes, but the plan is over the next couple months, over the winter, to sort of stabilize Faktory, evangelize its use, try to get people starting to use it, maybe even in staging or even in production if they're a little bit crazy, and also try and get some trusted comrades that can maintain the worker libraries. I maintain the Ruby and Go worker libraries, but there's all those other ones that you mentioned that all have their own independent maintainers and I need to ensure that those maintainers stay up to date with the latest changes in Faktory, especially since it's so amorphous right now. It hasn't really solidified yet; we're still changing the protocol, we're still adding new commands every week... So over the next couple months that will solidify and we'll really get a reliable set of commands that all the workers will support.

**Jerod Santo:** \[01:10:26.25\] Just real quick, Mike - that was one thing, we recently did have the RabbitMQ team on; they've been doing it for ten years, so we had them on to talk about their ten-year anniversary of RabbitMQ, and really they shared a lot of lessons that they learned throughout that time, because they've made all the mistakes and had successes along the way, and they were very open with us to talk about those things.

One of the things they said which they've regretted to a certain degree is that there are so many client libraries in various states of quality and support and maintenance; they have a couple that are first-party, just like in your circumstance, although you're just getting started with Faktory... And they weren't always diligent to bring those people along and keep those things quality; I can't remember the exact wording, but really just helping that ecosystem flourish in a way where -- you know, for your particular language there is a high-quality worker library available, which may not be developed by you or people that are employed by you, but the people who are working on it are keeping it up to date, or keeping it well tested and well documented, which is hugely valuable to Faktory as an overall ecosystem.

**Mike Perham:** Yeah, for sure. Earlier I mentioned that if Faktory sees some success, I might be hiring people. I think hiring people to maintain the worker libraries in addition to maintaining the core Faktory repo would be an actual fit.

**Jerod Santo:** Absolutely.

**Mike Perham:** These people have shown an interest in the background job system. They've shown that they have the willpower to sort of learn a new system and dive in and sort of build something on top of it, and that goes a long way in building up a resume that recommends them. So we'll see what happens over time, but hopefully I can get half a dozen libraries for different languages that are well maintained and reliable... Because it really doesn't take more than that. You need a JavaScript, you need a Python, you need possibly like a Java or a C\# library, and that's gonna get you 90% of the industry.

**Jerod Santo:** Right.

**Mike Perham:** And everything can kind of fallout from there. So yeah, we'll see what happens.

**Jerod Santo:** Well, let's close with a call-to-action, or some sort of thing that people can do if they're interested. Obviously, we'll have all the links in the show notes to the typical pages, but if you had a specific thing that you could say to the open source community with regards to Faktory or what you're up to, what would you ask of them?

**Mike Perham:** I would just suggest that they download and run the Docker image that we're gonna publish for the next release, and sort of take it out for a spin, and click around the web UI and sort of see what it can do. We'll try and publish a Rails app that can be used to do work against Faktory, because there's a couple moving parts here. It's not a trivial thing to just download and run, but I'll do my best to make that easy and hopefully the listeners can take it for a spin and see what it's all about.

**Adam Stacoviak:** \[01:14:14.13\] You mentioned that you can install via Homebrew as well, and you have to tap that first. Do you have a tap? Because it's still kind of in flux...

**Mike Perham:** Yeah, I think it's a cask or a tap or something like that.

**Adam Stacoviak:** brew tap contrib sys/factory and then brew install factory.

**Mike Perham:** Yeah, that's it. So I guess it is a tap.

**Jerod Santo:** Tap that.

**Adam Stacoviak:** We'll link up the installation docs, which also has your Docker and Linux information there as well, in the show notes. And then you also have Gitter. You mentioned earlier being able to chat, so I guess if anybody wants to talk to you in real time, they can go to your Gitter chat room for this.

**Mike Perham:** Yeah. I'm not in there all the time, but I'm trying to jump in when I can. I do find real-time chat to be kind of a timesink. I have been jumping into it the last couple of weeks just because I'm trying to get people ramped up and started with the system. When I initially released it, I didn't really have any easy way for people to get started with it. The chat room and me walking them through it was really the only way. But now that we've got Homebrew and we've got Docker, I think it's easier for people to get started without having to get directions directly from me.

**Adam Stacoviak:** That's good, it invites the community to gather around it, and that's a good place to go. Even if you're not there all the time, it's a good central location to at least queue up some things.

**Mike Perham:** Yeah, and there'll be other people in there all the time, I'm sure, some seasoned Faktory pros who have upwards of two weeks of knowledge of the system...

**Adam Stacoviak:** Upwards of two weeks... \[laughter\]

**Mike Perham:** ...that can answer questions.

**Adam Stacoviak:** Good one. Mike, it's been a pleasure having you back. I'm so thrilled to see our paths continue to align, and then your continued success. Don't take my questions earlier as anything negative towards the success you've done, because you're certainly a model for success when it comes to sustaining open source, and your family, and building a business around it. You're very much a model for people to follow, and we appreciate you sharing your time.

**Mike Perham:** Thanks, I appreciate the kind words.
