**Gerhard Lazu:** Ben, I am so happy to be welcoming you to Ship It. You have no idea. I've been looking forward to this since you joined fly.io. Welcome!

**Ben Johnson:** Thanks for having me. I'm stoked to be on here and chat about infrastructure and all that fun stuff.

**Gerhard Lazu:** Yeah, so I'll go straight into it. What made you join fly.io?

**Ben Johnson:** That's a good question. So I have a project called Litestream, where it basically does replication of SQLite databases, and it puts them up to S3, so you can run a single node safely... Because most small projects I have tend to be real small, or medium size, and they don't get hundreds of requests per second \[unintelligible 00:02:29.19\] in the tens of requests, or less requests. So I started going down that road, and I just kept finding that -- you know, I wanted to find a place where I could deploy out applications easily, but also have persistent disks; basically like Heroku, but with persistent disks... And everyone kept recommending Fly. They just kept coming up in conversations, and then we just chatting with them, we've realized we were going down the same road, where they want to build compute and just make it really easy to run stuff, and they don't want to have to worry about storage. Storage and state are always the most painful thing to deal with, and if they could just make it super-simple for people to ignore that more or less, that'd be great. And that's my goal too, is I want to make it so that the storage stuff is as invisible as possible. Obviously, state sucks, but you've got to deal with it, and minimizing that pain is the idea.

**Gerhard Lazu:** Right. So they were thinking along the same lines as you were thinking when it comes to storage, when it comes to keeping things simple, and just hit it off?

**Ben Johnson:** Yeah. And I don't have anything against Postgres. I think Postgres is great. It's a super-advanced database, it has all kinds of features, but most of the applications I write have a tiny fraction of the potential of Postgres... And I really love -- I used to work in embedded databases a lot. I wrote a library called BoltDB in the Go community; it's pretty popular. And there's a stark difference between writing with an embedded database, where everything is super-snappy, because all of your data is just nanoseconds away from you. Whereas when you have the connection to a query, to Postgres, if you're even in the same region, in AWS, it can be a full millisecond to do a round trip for a single query.

\[04:17\] So there's this different dynamic when you write applications with an embedded database, and I kind of miss the sequel side and a lot of that nice management stuff... So SQLite seemed a good middle ground between a raw key-value store embedded database that I had, and a giant Postgres server. So yeah, I kind of landed there. And they had the same feeling. Not everyone needs Postgres; a lot of people don't need Postgres, and it can be a lot of overhead, management... If you don't need that, then SQLite is an awesome alternative.

**Gerhard Lazu:** Yeah. Again, PostgreSQL - okay, we will come back to this, because I still don't think we have finished with that fly.io story. And the reason why we haven't is because soon after Changelog.com migrated to fly.io, you joined fly.io, and I didn't know about it. I was like "What?! No way! Ben joined? Ben, like. the Litestream Ben, joined fly.io? That's just unbelievable."

It's not just Changelog is running on the fly.io infrastructure, but Ben is also on the team, and your other blog post "All-in on SQLite Litestream. I really enjoyed reading that, and I just, I just couldn't believe it. We had Mark Ericksen in episode 51, and I was thinking, "Right, I have to talk to Ben for episode 59." And this is it. Just before the Kaizen. So the timing - honestly, I just couldn't make that up. Some things, they just happen. I think serendipity is how some people call it... And I don't think I'm seeing what I want to see, because it's real. Right? You joined fly.io, you're there... And you wrote that blog post that I had no idea about. And what you wrote in the end really, really resonated with me. So choose any four - can you tell us a bit about that? What are the four, and why can you choose all of them? Because it sounds too good to be true.

**Ben Johnson:** I have to think back to what the four were now...

**Gerhard Lazu:** Small, fast, reliable, and globally distributed. How can you have all four? That's just not possible.

**Ben Johnson:** Yeah, so I think the first three are SQLite's mantra of keep it fast, small, and easy. And then the globally distributed part - the way that I think about it is - the thing that I like about SQLite is that it's almost like a nice building block for a distributed system. It has a lot of really cool stuff built into it. It just needs all those fun, little, distributed systems algorithms that distribute and merge and control data, and the flow of all that stuff. If you can shim that in underneath it, and do it as invisibly as possible, then for a lot of applications it really works well, where you don't have -- obviously, it depends on restrictions you have for your database. If you need a ton of concurrency, or write concurrency specifically, then there can be trade-offs with SQLite. But there's other ways to get around that as well.

One interesting thing that a lot of people are asking for is they want to really segment their users. Maybe they have a SaaS, and maybe they have 1,000 users; instead of having one big database with 1,000 users and all their data in it that mixes together, they say "Hey, why can I not just build a database per user?" They're totally isolated, and for a lot of companies that's really important, that you don't accidentally miss a where clause, and suddenly you're spewing out other users' data.

I think once you look at something like that, whereas you had maybe write concurrency issues for one big database, if you split it out into a thousand little ones, you don't really have those same concurrency issues. You can write into them in parallel, and they don't actually have really anything to do with each other.

**Gerhard Lazu:** \[07:49\] So I'm wondering -- I mean, you're touching on so many interesting points, but the one which just... It just reminded me of a conversation which I had maybe a few days ago; this was with Alex Sims, we had him on episode 49; we talked about this eCommerce platform - actually, logistics fulfillment platform - and there was this problem of a main database, a main, let's say, your primary, which is the writer, and there's only one, and then you have lots of readers. But if you have to do any writes from different parts of the world, you have to go through this one primary. And latency is a pain. I want to use a different word, but I'm going to use pain.

**Ben Johnson:** \[unintelligible 00:08:27.27\]

**Gerhard Lazu:** So in that world, how could SQLite help? Sorry, in that architecture, how could SQLite help? Because I'm thinking cell-based architectures, and I know that AWS did a lot of work around that. Are we thinking the same thing, or is it something different?

**Ben Johnson:** It's really more like -- I mean, yeah, the write latency can be painful if you're coming from across the world. But I think there's probably an -- it depends on your application, again, but a lot of people have an expectation that if they go and they look around at a website, an eCommerce website, and they look at a different bunch of different pages, if all those product pages and the searches and all that are super-fast, and they're read-only, those can be replicated down to the edge, and you can really get the absolute best performance there. But I think people have an expectation when they go to actually check out that having an extra hundred milliseconds, or two hundred milliseconds isn't the biggest deal, especially as a trade-off if you have fast read latency. So I don't find that to be a big issue for the primary in a single location.

That being said, if you wanted to, you could -- I mean, because SQLite is so lightweight, you could have primaries for some users in one part of the world, and primaries for another in a different part of the world, and it's pretty easy to move those around and segment them. Especially around GDPR as well, if you have to have restrictions around that.

**Gerhard Lazu:** Oh, yes. That's a big one. Okay, okay. We have to slow down with the big topics, because each of those - they just deserve at least five minutes worth of discussion, 5-10 minutes worth of discussion. GDPR \[unintelligible 00:10:01.17\] Okay. Coming back to the primary and coming back to having a single source of truth... I know that some setups, and especially when you have a logistics supply chain, you need to know where items are, regardless where they are in the world, and you have to have a single unified view of where things are. Because if you don't, how do you reconcile that, right? It's a single company, it's a single organization, a single system; and they may have different fulfillment centers around the world, but they still need to have a unified view. And when you move items across, like units, you say, "Okay, this unit moves from here to here", you need to have a transaction; it just avoids all sorts of weird things happening in the system, data getting corrupted, a unit being in two places at once... Weird things like that. So are there ways that you can have primaries which are closer to you? Or basically, can you do writes which are lower latency, that would avoid having a single primary?

**Ben Johnson:** I mean, you could. You start getting into eventual consistency stuff. Because if you have a multi primary, or what used to be called a multi master, then you really get that issue where you have -- you're gonna have two records change at the same time, and you have to merge those in some way. And SQLite has some built-in stuff around that. There's a thing called a session extension, where you can actually pull out a changelog or a diff of your data, and you can send that to another database... But honestly, that comes with a whole host of issues, and you're probably a lot better off sharding before doing any of that, if it's possible.

And ultimately, I think a lot of problems are shardable, which is really nice. If you work in a SaaS, if you work in all kinds of stuff, those are usually really shardable. But if you have just a giant database, where everyone has to have access to it in real time, and do multiple concurrent writes, SQLite might not be a great fit for that, if you really need that concurrent write stuff. It does have really quick writes, so if you can do a lot of really tiny, small writes, those are great. But if you have long-running ones, \[unintelligible 00:12:04.00\] block out other writers. So I don't have a solution for you yet that's great.

**Gerhard Lazu:** \[12:10\] I know, that is a hard problem, for sure. And I know that Google Spanner keeps coming up, and they say, "Oh, we solved this problem." And again, I haven't looked close enough to know what are the trade-offs... Because there's always trade-offs. Everything is solved as long as you're willing to put up with the trade-offs. And most people when they start getting into it, they say, "Whoa, whoa, whoa, this is too complicated. I'm not doing that, no way."

**Ben Johnson:** I haven't looked at how they do a multi-primary, but I know you can look into stuff like optimistic locking, where you might change a row and then hopefully another system doesn't change it at the same time, and then you can back it out later... Or there's different ways of doing it. But yeah, that just sounds like a pain if you don't have to deal with it.

**Gerhard Lazu:** Yeah, for sure. For sure. Okay. So the reason why I was very excited to talk to you is because when we moved to fly.io, one thing which we did - we changed our PostgreSQL from running it in Kubernetes to it being almost managed... It's not fully, fully managed, but it's very easy to set it up, it's easy to set up replicas, it's easy to do all of that.

Now, PostgreSQL, that's -- again, the topic for the next Kaizen, episode 60, is how do we go from a single instance of the Changelog app to multiple instances. Because Erlang was made to be run in a distributed fashion, right? It was made for clustering, and it has this concept, it's first class in the Erlang runtime, the concept of a cluster. So with that, if you have multiple instances and they're spread around the world, then if the database is in a single place, it just makes things a bit more difficult. So I was wondering, is there a way that we could use SQLite with Litestream, to have copies of the database, which are basically sitting right next to the apps? Or maybe even with the apps? I'm thinking with the apps, right? Of course, with the apps. Yeah.

**Ben Johnson:** Yeah. So the upcoming release of Litestream we have read replicas coming in there. So essentially, you have a single primary, and then other replicas connect out to it and stream them down. And that works for a lot of situations where you just need to scale your reads, or you want to have local reads on replicas, so it'll be a good fit for that.

The one downside right now to Litestream - and actually, it's ironic that I'm at Fly... It's that when you have to restart the primary, it has to -- you can't switch a primary right now. It always stays at the same node. So you have write downtime when you switch over. But actually, we're learned a lot of lessons from Litestream and we're kind of revamping it a bit and making it so we can have the primary move, have a lot of this stuff just invisible to you underneath... So essentially, you should just get a directory that you can write your SQLite databases there and they just magically appear on all nodes at the same time.

**Gerhard Lazu:** So, currently, the setup that you would recommend with SQLite and Litestream is having a primary, which is where all the writes happen, and then having read replicas, is that right?

**Ben Johnson:** Yeah. Or if you just -- if you don't even need the read replication, and just having a single node, it works for a lot of apps, too. The main downside right now is when you restart, you'll have downtime during the restart. It was originally built more for a VPS, where you have a single server that's always running, and whenever you deploy, you just kind of restart that app real quick, but you can keep running Litestream in the background. So a lot of people are moving obviously to Dockerized deployments, and you have a lot more of these restarts, so we're taking everything we've learned from Litestream in the past and revamping to kind of address that new world.

**Gerhard Lazu:** Okay, just so that I understand this correctly, currently, today, if we were to use SQLite with Litestream, and we would push an update that would roll, in this case the app instance would bring a new one up - would there be downtime?

**Ben Johnson:** Yeah, currently there would be downtime \[unintelligible 00:15:59.29\]

**Gerhard Lazu:** \[16:02\] Interesting. How difficult would it be to set up a read replica as the application is booting, and then promote the read replica to be the writer after it starts?

**Ben Johnson:** I wouldn't say it's super-easy right now... I mean, it certainly can be done, but the focus of what we're doing right now is really more to -- there's a lot of lessons learned where you want to revamp certain parts to make a lot of this easier. One piece - we're talking about Elixir, and we want to be able to push... One issue that we actually have with Litestream read replicas is that, sure, you can push data down to the read replicas, but if you have something that needs to notify users on an event change, like a user updated, or some kind of event happened and you have to recheck the database, there's not really a mechanism for that right now. So we're trying to build part of that in as well, so that data changes on the primary - it can basically set a notification to let all the other replicas know that maybe a new user came in, and they can update that, and if they need to stream down data in real time, they can as well.

**Gerhard Lazu:** Right. Okay.

**Ben Johnson:** \[unintelligible 00:17:04.27\] putting time in to try to make the current read replicas switch over and whatnot. We're just kind revamping it a bit. So that should be available here in the next couple months.

**Gerhard Lazu:** Really? Okay, interesting. So do you know how it's going to work? Do you have an idea of what is the solution to no downtime look like? In your example, you have a primary writer, and you have a number of read replicas. Rather than promoting a read replica to a writer, what would you do differently?

**Ben Johnson:** That is what the new system is doing. We're kind of revamping how Litestream works entirely. Currently right now it just pushes up the write-ahead log from SQLite. So it basically takes a snapshot on a regular basis; by default, it'll do it every day, like every 24 hours. And then from that snapshot, it will do every single WAL page after that. We compress them down, and right now it ships it up to S3, or in the near future, it ships it down to read replicas. And then if ever a node fails and you need to replay everything, you can just grab the latest snapshot, replay all the WAL in between, and then you can do point-in-time restores as well.

So the downside, obviously, to all of that is that if you have a lot of writes in between your snapshots, then it can take a little while to download the snapshot and do all the replay. So some of the lessons learned around that is figuring out a better format than just the regular WAL file that SQLite has. So we can do more stuff around encryption, we can do stuff around compacting WAL files, so you can actually compact them down and to have a minimum set on interval. So if you want to do point-in-time restores to some point every, say, five minutes, or half hour, we can do that, and they're nearly instant. So it's just trying to take a lot of the little bits and bobs that people complained about, and finding better solutions for those.

**Gerhard Lazu:** Nice, nice. So who are the people driving those improvements? Do you have users that give you suggestions on how to do this? What does that look like, that process of people helping you improve this aspect of Litestream and how it interacts with SQLite?

**Ben Johnson:** Yeah, a lot of people either go through GitHub and log issues... We have a pretty decent-sized Slack for Litestream. I think it's a couple hundred people now. And people are very excited to use SQLite. People just love SQLite, I've gotta say... If you're ever gonna make an open source project that builds on something else, find something that builds on SQLite, because people love it.

But yeah, I think there's a lot of people that just have ideas of how they can simplify their stack, and just not worry about all the different Postgres settings, and setting your HPA for your user access, and all the little different tweaks and whatnot, and worrying about PgBouncer and all those things. You just run it and it just works, more or less.

There's a couple little settings you've gotta set on there to use it well, but it's just one or two; setting the WAL, and things like that.

**Gerhard Lazu:** \[20:02\] Okay. I think I know how you're going to answer this, but still... Let's assume that I'll be wrong. Why do people love SQLite?

**Ben Johnson:** I think people have a frustration with having so many dependencies out there. Everything always requires just way too much -- just way too much headspace that everything takes up. And you're not actually building your application, you're reading docs for Redis, or for some caching system or some load balancer, or whatever. And the idea of just actually writing your app, and -- the database is there and it just works, and it's super-solid, but it's not... I think in that blog post I wrote Postgres has -- I think their documentation is like three or four thousand pages in a PDF... It's crazy. I mean, it does everything, but same time, it's a lot to keep in your head. So I think that's really the reason people love it. If they have an application that works for it, then it feels great to use.

**Gerhard Lazu:** I remember when I got into Rails development, ages ago, and by default Ruby and Rails the framework was using SQLite in development mode, and it was glorious. There was this thing, you install it, you run it, and everything just works. That was such an a-ha moment. It was like "Yes, everything should be this simple." Well, not when you go into production, obviously. But then you would go like "Why not? Why couldn't it be this simple?" because there were certain advancements in, for example, disks, storage, the IO improvements... I mean, let's just stop at the IO improvements. You couldn't do things with regular disks 15 years ago, like the spinning disks that you can do today with SSDs. And if people think that SSDs are fast - well, when you try like an obtain drive, and you get hundreds of thousands of \[21:52\] and you're like "What is this thing? It's like RAM" and it is like RAM, exactly. So the boundaries are blurring between RAM and disks. That's how fast they get. So surely, that will change a few things, right?

**Ben Johnson:** Yeah, I think over time, if you look at 20 years ago, between 20 years ago and today it's not like things have gotten twice as fast; it's multiple orders of magnitude faster. And then back then it might have made sense -- you know, you're like "Oh, Postgres can run 10% or 20% faster than SQLite, say" but these days, when you already have a 200x improvement in speed of your disk or your CPU and whatnot, that little 10%, 20% doesn't really make a big difference anymore. Not for everybody, obviously. Some people really need to eke out all the performance they can, but it kind of opens up all these different possibilities for simplifying your stack while it's still being fast enough. And actually, we're getting in this weird place where it's not even actual hardware that's slow anymore, it's the actual speed of light, where you physically have to jump through time and space to pull your data from somewhere else. And if you could just shorten that distance, which is basically what SQLite does, then you can get quite a bit faster.

So when I did latency benchmarks between SQLite and Postgres, for Postgres within even the same region; different availability zones, maybe it could be up to a millisecond just to do a round trip of a single, like a select one. But then if you're doing locally with SQLite, just the overhead of getting that same query is about 20 microseconds, 10 to 20 microseconds. So you don't have to worry about things like N+1 queries so much anymore. If you want to destructure your queries and make them more composable, or just pull out a smaller amount of data, or not using an ORM, things that - it changes the simplicity of your application in a lot of ways you don't really think about upfront.

**Gerhard Lazu:** \[23:50\] I think that's what it is. I mean, this feels it changes everything. We thought that it wasn't possible, and all of a sudden it is. When I say all of a sudden, like in the last five years, it is... But many people still think it's not possible. And there are certain things which are hard, because without Litestream, how would you run SQLite? You can run it, but it's very limited, and actually it works for what it was designed to do. And then Litestream enters and things just change; that combined with the disks, combined with the networks, the fast networks, combined with 128 CPUs - sure, that's normal these days. We can get hosts with 128 CPUs. I've seen Kurt post some screenshots from fly.io for some of the servers, and those machines are crazy. So everything's local, the networks are fast, you have those VPNs, WireGuard building everywhere... That's nice and simple. That changes everything when it comes to having a private -- so there's a bunch of things that work really well together, and I was so excited when Litestream just entered this space, because it changed. It changed a bunch of things. And I was like "Yes!"

**Ben Johnson:** Yeah, there's been an influx of tools lately that are just -- it's nice to move towards that simplicity. We just feel like we've gotten so complex over the last decade or two.

**Break:** \[25:10\]

**Gerhard Lazu:** So why did you build Litestream? Do you remember the day when you thought "I know, I'm going to build this thing." What was that like?

**Ben Johnson:** It wasn't a single day necessarily. Originally, I was like, BoltDB, running an embedded database for your application development is just something people don't generally do. It's kind of weird. But I was determined to make application development work for an embedded database. And I tried it, I tried figuring out different schema things I could do with it; I did protobufs, you could encode into a byte slice and put that into your database. But then you'd have to make your own indexes, and it was such a pain. So don't ever do that.

But then I came around -- I was like, "You know what - SQLite is the nice, middle ground", and I was originally trying to figure out how we could hook into it. There's a bunch of different options you can do. They have a VF layer, a virtual file system layer instead of SQLite, and you can inject calls into there and maybe replicate those. You inject into a layer in the filesystem, make a FUSE filesystem, which is a user space filesystem... I tried way too many options before I finally landed on Litestream.

\[28:06\] And I even started porting SQLite code over to go, just to try to understand it better. That's my way of learning code... And it just struck me at one point - I think I was reading through some docs - that the write-ahead log, it basically... So Litestream is kind of predicated on this hack, and it works. It's a good hack, but it's a hack nonetheless, where SQLite... I have to explain a little bit about write-ahead logs real fast.

**Gerhard Lazu:** Go for it.

**Ben Johnson:** So you have a main database file, and then whenever you make changes to that file, if you run the write-ahead log mode, it'll actually write those changes, it'll pin them on to another file called the WAL write-ahead log. Each change gets tied onto the end, and then once it gets too large, it does a process called checkpointing, where checkpointing just basically copies all those pages back into the main database, and then restarts the WAL.

So the idea around Litestream was that in the docs it says SQLite can't do a checkpoint if there's any read transactions open, because they might depend on the write-ahead log. So with Litestream does is it basically just opens a long-running read transaction against the database, and doesn't let go of it. So it blocks all the checkpointing, and then it manages the checkpoint itself. It'll take off that read transaction, force the checkpoint, relock it, and it does a lot of consistency checks to make sure that the last page it read off the WAL is the same one as it did last time, and it can keep track of its position. So it basically keeps the WAL going as long as it needs, and then copies it out to a shadow background file, and then that gets replicated up to S3.

So that's the hack right there. I guess the moment, if you want to know, is when I found out I could just hack the checkpointing system and steal all the data.

**Gerhard Lazu:** Wow, okay...

**Ben Johnson:** Not actually steal it, but just copy it.

**Gerhard Lazu:** I know what you mean. So it wasn't by accident, it was by trial and error, trying different things, seeing what sticks, and eventually you landed across something which felt like "Wow, this could work, and this is actually good."

**Ben Johnson:** Yeah, basically. And it was five or six iterations before I landed on what Litestream is... And there's lot of ways you can do it, honestly

**Gerhard Lazu:** Oh, I love \[30:06\]

**Ben Johnson:** Then there's another one called -- I cannot pronounce the name; it's \[30:11\] it's another SQLite replication thing, and they inject through the virtual file system. So if you're using the non-WAL journaling mode, it's called the rollback journal - they hook into that, and they do it with the virtual file system. But that's an extra layer where you have to kind of build your application around that, and you have to inject it in there, in your application. And the thing about Litestream, that external design, is you can slap this against any legacy system that uses SQLite, and it just automagically works, because your application really doesn't have to know about Litestream. It's an operational concern, not a development concern.

**Gerhard Lazu:** Okay. So one area which I'm very intrigued about is the idea of an embedded database... Because Erlang - and again, Elixir, which is the language, and it's a DSL language that Phoenix uses. Phoenix is the web framework that changelog.com uses, and Chris McCord is also on the fly.io team, and he's the one that created it... So again, lots of great people coming together. And there's something there, there's something to great people coming together.

I was just talking to Frederic Branczyk I think last week, or recently, about what happens when great people come together. And that will be I think episode 57, I believe... By the time you're listening to this. It's not out yet. But it will be by the time this goes out.

Embedded databases in Erlang - there's AMNESIA DB. AMNESIA DB - it's often used and abused in different systems, because it was built for like 30 years ago, systems which existed 30 years ago. The biggest user of AMNESIA DB is RabbitMQ, and that leads to some very interesting behavior in RabbitMQ clusters when there's lots and lots of metadata. So RabbitMQ uses it to store users, bindings, policies... It's usually bindings that really mess things up. But as an embedded database, it works really well, because it's just part of the runtime. There's nothing else to do. It's like Go having an embedded database. It's at that level. Again, not going too deep into that specific rabbit hole...

\[32:25\] The concept of an embedded database is really powerful. When you see it used well, and when you see how far you can take it, it makes you think, "Why do I need this extra dependency?" And there comes a point when you absolutely will, but maybe you can take it further. Maybe you can build something on top of that primitive, still keep it embedded, and not need an external system. I mean, What would it look like if RabbitMQ needed PostgreSQL to store data? That'd be ludicrous, right? It's just like, "What?! No." But it could, if it needed to.

So embedded database as a concept in the Erlang world - it's normal. It works. And that made me think, why doesn't Phoenix have something like an embedded database? Why doesn't Phoenix run everything locally? \[unintelligible 00:33:14.21\] to store that when you have applications that are supposed to be stateless. And then when they restart, you want to be able to scale them nicely. There are certain properties about that.

But Litestream to me sounds like it's enabling a slightly different model for embedded databases, and that's what I find fascinating. The fact that you SQLite, because it's simple, because it's been a proven technology, battle-tested... It's a great idea. I think SQLite 0 isn't it like the most popular SQL database in the world?

**Ben Johnson:** Oh, yeah. It's on like billions, or -- yeah, it's a crazy number of devices. It's on every phone, toaster, fridge...

**Gerhard Lazu:** Exactly. It's everywhere.

**Ben Johnson:** Yeah, it's crazy.

**Gerhard Lazu:** So it's already there. It's already on all those systems. So having Litestream join it - wow. Now we're talking. The scale, just the sheer amount of scale is just mind-boggling; if you think billions of devices - that's just crazy. So before we go to billions, how about we'd start with like tens? So if you have ten instances of the application, what would it look like if the data was replicated, without it needing a complicated another database cluster, which has, as you mentioned, thousands and thousands of pages of documentation, for a good reason? What if it didn't have to be that complicated? And that is a very exciting proposition.

**Ben Johnson:** Yeah, that's kind of what I'm excited for. It's funny, I think database engineers are a unique kind of person, where -- if you get into JavaScript, there's some hot, new framework every six months. But if you get into writing databases, it's like -- this thing might be popular in five years. It takes so long to build it up, and whatnot. But that's what I see happening, or the trajectory - just making it as simple as possible and making it more and more invisible. But essentially, yeah, if you have ten nodes -- so a lot of people wonder "Do I really need to have something replicated across the world? It's fine just having this one instance here, in Virginia." I think people don't appreciate that 200 milliseconds of latency, if you're going around \[35:22\] to Asia, can really add up a lot, and it just makes the user experience pretty rough.

Right now - yeah, it can be kind of a pain to replicate everywhere, but the end goal really is just to make it as easy to run, say, ten nodes, as it is to run one. And you don't have to fiddle around, mess around with figuring out your primary, and how it replicates, and all that stuff. We essentially just want to make it so that as you scale up, scale down, whatever you want to do, it just kind of works. And even to the point too where we're working on making it so that it works on truly serverless platforms like Vercel, or things like Deno, where it's pure WebAssembly, that it can actually pull in JavaScript and run that. Or Cloudflare actually has a SQLite piece as well, but there's all kinds of ways where you can scale out and do different things... And if it can be as easy as it is when you just have a single node, I think that's pretty compelling.

**Gerhard Lazu:** \[36:21\] That's interesting. So you've just mentioned Cloudflare... I was thinking about their key-value store - is that SQLite by any chance?

**Ben Johnson:** No, so they have -- their naming convention I always get messed up... So they have durable objects, which I think is D0 is what they call it. And then I think D1 is something they built on top of that, which essentially has -- I think it's SQLite built on top of durable object objects... And they wrote a blog post, I think it came out a couple days after the blog post I wrote, and they don't have a lot of details on the exact way it works, but it's essentially SQLite underneath, and distributing that. So we'll have to see as far as performance goes. There's a lot of nitty-gritty details of how performant something is, depending on where you put the data and how it interacts with different parts. But I'm always excited to see more people getting into the SQLite space.

**Gerhard Lazu:** Yeah. Okay, I'll check it out, and also drop it in the show notes, because that sounds really interesting. Okay. Are you aware of any applications that do what I'm thinking of doing with Changelog, which is use SQLite, migrating from PostgreSQL to SQLite, replicating all the data, and every single application instance having its own copy, one of them being a primary today, and then having read replicas? Do you know anyone doing this today?

**Ben Johnson:** Sorry, are you thinking like taking the data that's in Postgres and converting it in real time to SQLite as primary?

**Gerhard Lazu:** Not real time. It's one of migration, we go from PostgreSQL to SQLite --

**Ben Johnson:** Oh, like you do it one time to switch over?

**Gerhard Lazu:** Yeah. And then --

**Ben Johnson:** Oh, sure.

**Gerhard Lazu:** ...every application instance has the data. Obviously, we would need for that for the read replicas to be able to promote to master, so that when we have a fleet of ten, we do a rolling update, the master just keeps moving around, and eventually, all instances get updated. I'm not sure how that would work in practice. There's a lot of things which we need to improve when it comes to boot times, and we do certain things which it means every app instance boots for I think 90 seconds today. And if you have five of those, that's a really long update. But do you know anyone doing something similar, using SQLite instead of PostgreSQL?

**Ben Johnson:** I wouldn't say anybody moving around the primary, I don't know anybody doing that right now. The replication stuff is still in beta, or it's pretty early-stage right now. There's someone running it in production... I just found out the other day...

**Gerhard Lazu:** Wow, okay.

**Ben Johnson:** Brave, brave soul. But no, I wouldn't say right now. I think making all that stuff really easy is going to be probably a couple of months away, making it so you can move the primary. But that is the end goal.

**Gerhard Lazu:** Interesting. Okay, that makes sense. And that gave me a different idea, because everybody wants to run this in production. I want to be that other brave soul that tries it, and maybe not with Changelog straight away, even though it's very interesting to see how it would work at this scale... But maybe at a smaller scale. And I'm thinking WordPress. There's a lot of WordPress websites out there, they don't need MySQL, they have very little traffic, many of those... If they had a SQL-- and there's always a single instance; if it goes down, they're usually on long-running hosts anyways. They don't tend to be running on Heroku or Kubernetes. And even if they are, they have a persistent disk. And if they don't, there's object storage, but things get complicated. So maybe for those types of applications SQLite with Litestream would make sense. Do you know anyone doing this today?

**Ben Johnson:** \[39:46\] Yeah, there's a lot of people doing that kind of stuff, where they run a single instance. WordPress is a great example. There's another guy named Michael Lynch, who runs -- he has some applications and he just keeps porting stuff over from FireStore or whatever, and rewrites them and puts them in SQLite, and uses Litestream, and blogs about them... But he's done stuff where he's taken an application that ran on Heroku, and he could run it with Litestream, and it would replicate in real time, and then he'd destroy it and then re-run it on fly.io. And since everything's on S3, it just magically works and comes back up. And he actually doesn't even run with that persistent disk behind, although I recommend that... But he'll just -- it just kills it, and then just replace all the data when it comes back up. He did a blog post, I guess he pays three cents a month for his data storage... \[laughs\]

**Gerhard Lazu:** Wow. That's crazy.

**Ben Johnson:** The funny thing about S3 - this is another hack around Litestream, where... You know, Amazon, they really make money when you download data from S3; you put up your data, and then you kind of put it on CloudFront, and a bunch of people download it; it's pretty expensive, and they make gobs of cash. But if you just are only uploading, which is basically what backups do, the actual cost - I think Ingress is free \[unintelligible 00:40:56.02\] per gigabyte. And then I think you pay per request, and it's like five, ten thousandths of a cent, or something like that every request. So if you're not doing constant writes, if you're only getting maybe a write every ten seconds or something like that, every minute, then your costs can be super-low, and you're just paying pennies per month for that kind of replication.

**Gerhard Lazu:** That's exactly what we used to do. Every hour, we used to back-up the entire database; it was so cheap to do that, the entire Changelog database, that it didn't even make sense to have deltas, diffs, write-ahead log, backups - none of that. Everything, do a dump, put it there -- no, no, sorry. Do a pg\_dump, let \[unintelligible 00:41:36.20\] Let me just reword that, so it sounds correct. Do a database Postgres SQL dump... I don't think I can -- the word "dump" is just very tricky to work into a conversation... But okay, this is about databases, so let's get serious. We would do a pg\_dump every hour, send it to S3, and not worry about it because the cost was so little. When you would have to restore, we would download, it would be compressed, so it'd go from one gig to maybe a hundred and something megabytes... So a 10x compression; it would compress really, really well. And we would do that. And we'd have to restore, once in a blue moon, or we would actually test restores more often though, actually, we'd have to restore - it was, again, a very simple system, it worked. And we used that for a long time, because when we set up clustering, we had issues. So with fly.io we don't have that, because it's all managed, so we don't have to worry about that. It's all just built-in. But when we had to use operators in Kubernetes to do that replication, configure things, things would just go wrong. The write-ahead log would just get blocked, and then replication would stop working, and then the write-ahead log would fill up the disk, and we had all sorts of weird cases. And that's just not a world I want to go back to.

**Ben Johnson:** Yeah, running state on Kubernetes is painful. I did that for years, and it's not easy.

**Gerhard Lazu:** Did you run PostgreSQL on Kubernetes?

**Ben Johnson:** Not Postgres. When I worked at InfluxData we wrote InfluxDB and we ran a lot of the cloud stuff on Kubernetes. So it was all stateful, and there was a lot of YAML in my day...

**Gerhard Lazu:** Oh, yes. Oh, yes, yes. Tell me about it. Okay... Yeah, so things are very different now, but... Not having to deal with that complexity - it's so nice. And when you start with a simple system, which SQLite definitely is, it just allows you to do things differently, and it just gives you more headspace. It just gives some of that headspace back, and I'm really appreciative to that. Simple, simple things.

**Ben Johnson:** Yeah. And honestly, I think backing up every hour I think is a great solution. On the Litestream website we have a page of alternatives and how you can do that... But even a script for like -- hey, you can just still do a cron-based backup every hour. We'll name our files based on a repeating date format, and we'll just overwrite the last one, and we'll have a rolling backup. And honestly, it works great. If you don't need the immediate point in time stuff with Litestream, or you want to run Litestream and a cron-based backup at the same time - they're not mutually exclusive. I'm overly paranoid about data, so I tend to back everything up twice.

**Gerhard Lazu:** \[44:22\] Twice. That's a great idea.

**Ben Johnson:** Yeah. I'll do a cron-based backup, and Litestream, right at the same time. It's so cheap as well. And the cron script is a couple lines of code, so it's not hard.

**Gerhard Lazu:** Okay. And do you backup to a different location than S3, or is it a different bucket?

**Ben Johnson:** I probably should, but no. It's going to S3 as well.

**Gerhard Lazu:** Okay. Yeah, that's one thing to improve, for sure. Because that's when I was thinking - okay, S3 is great, I'm sure it's going to be fine, but what if we can do just this one other place? And I know that R3 from Cloudflare - we were thinking about that, and especially when it comes to trialing it out... Let's just set up another backup location, see how well it works, and if we like it, maybe make that our primary backup location, or whatever.

**Ben Johnson:** Yeah. And Backblaze has super-cheap object storage. They're pretty good. GCP and Azure, and all that...

**Gerhard Lazu:** All the big ones, all the big ones, yeah.

**Ben Johnson:** Yeah, all the big ones.

**Gerhard Lazu:** I know what you mean. But Backblaze - that's a good shout-out, because I use Backblaze to back things up myself, even though I have ZFS and it never failed me; that file system is amazing. I still back everything up, because what if it fails one day, or what if an upgrade goes wrong? And they sometimes do. Rarely, but they sometimes do. You don't wanna find out.

**Ben Johnson:** Someone was asking on Litestream recently if it could do Google Drive and Dropbox as a destination... Which you can, technically. You can do another file location. If you have this amount, you could just copy over to that. So yeah, that's kind of a simple, hacky way to have an alternate location, too.

**Break:** \[45:57\]

**Gerhard Lazu:** So we talked quite a lot about applications and the web, because that's my primary focus... But I know, and we've touched up on this - a lot of people use SQLite with mobile phones in the context of applications running on mobile phones. Do you know anyone using Litestream with a mobile application that uses SQLite?

**Ben Johnson:** I don't know anybody doing it on mobile right now. People have been interested in it, how to sync data down... The biggest thing with mobile is that you really don't have a single primary for your database. If you made it your phone, you could do it, I guess. But typically, people have a server, and they need to sync data between, and merge conflicts, and stuff that. So something like the session extension is usually a better choice if you want to do something around that.

**Gerhard Lazu:** Right. Right.

**Ben Johnson:** But it's an interesting idea. Have an offline database locally, and all that.

**Gerhard Lazu:** Okay. Now, you mentioned something very important. GDPR. I know that many people think about that. Many people think about data locality, the laws and rules that govern where data is stored, where data is transferred to... I think that in that world, \[unintelligible 00:50:44.01\] as well, that's coming, which are even more strict rules around data and where it should reside, for European users... I see a future where data locality is going to be very important. The data will not be able to leave certain countries, not even in transit, encrypted, it doesn't matter. No, no, no. It will always stay in that country. In that world, I think cell-based architectures -- sharding, but even cell-based architectures, local based architectures will become very important. Do you see Litestream playing a role in that world?

**Ben Johnson:** I mean, Litestream, but also just SQLite in general. I think the simpler you can make a primitive of where you store your data, the easier it is to control where your data is. If you have to spin up a bunch of -- you know, if every region needs its own primary and replicas and all that, and you're running on Postgres, that can be kind of painful, if you have twelve different clusters of Postgres. But if you're just throwing a SQLite database on your application node - that's a lot simpler to manage, and kind of make sure that... You know, data doesn't need to transfer between your database server and your application node when your data is already on your application node. So I think it makes sense. I think you could do it either way, but I like to think that SQLite is a bit simpler.

**Gerhard Lazu:** In that world, one thing which I cannot imagine is how would a team that works on this application manage, first of all in their heads, the idea that there's N versions of that application, each with N data stores... Each basically has their own... You would need basically to have some sort of a regional routing, so you can get to specific nodes... And then that node only has data for that region... I think that can be mentally really challenging. How do you think about that, if at all? Have you thought about that?

**Ben Johnson:** Yeah, I think if you really needed the isolation - maybe you're setting up a separate VPC for everyone that you need to isolate for, and you can control... If you're using Amazon, for example. But yeah, I agree. I think the other interesting piece with the SQLite... It seems like a small thing to switch out SQLite and Postgres, conceptually at least... But when you have something like Postgres, a lot of times people put other things like caching in front of it; maybe like a Redis, or Memcache... And you end up having a lot of external systems because you have this slow data transfer; the latency between the application server and the production server. So if you remove that latency and you move the data store directly onto the application node, you really don't need a caching layer. A lot of your data is probably going to be in memory anyway, just through the OS page cache... So those lookups are super-fast, and you're spreading out your reads anyway, through multiple nodes. So I think you're getting rid of not just Postgres, but a host of other systems that are built around it.

So I think the next evolution of the SQLite world that I'd love to see is systems that are traditionally other services, other servers, that are kind of built into SQLite. A job system would be awesome. I keep wanting to build a job system for SQLite where it just kind of works, and it'll call your code and it'll just automatically do that thing. I think there's a lot of architectures you could make for that. It could be a library built into your application, but then you're kind of dependent on the programming language you're using. It could be even an external system that then calls into a binary, and runs jobs... Because SQLite is a multi-process system, or multi-process database, so you could connect to it from multiple processes...

\[54:16\] I think it's a really interesting space, because you can really have a single binary where everything kind of lives, like if you're building Go, or Rust, or whatnot. A couple of other languages, too. But yeah, just that you can ship a single file, and that is what you're running - it's awesome.

**Gerhard Lazu:** Super-powerful, definitely. So when you mentioned about a job system in SQLite - I don't have the mental model that you do. Can you expand a little bit what will that enable, if SQLite had a job system?

**Ben Johnson:** I mean, the biggest thing with a job system... So I come from the Go world mainly, and people think, "Oh, we'll just shoot off a goroutine; a thread or a goroutine, and it'll do whatever this work external to... You know, maybe the request that requested it." But the downside of that, obviously, is if your system dies, then you lose all that stuff, because it's all in memory. So the biggest piece with a job system is really just maintaining that state of "Hey, I wanted this job to run, and then something will pick it up at some point in the future." Maybe you could schedule it in the future, maybe it runs now, and then if it fails, you can retry it... You can kind of keep a log with that status of what that job is.

So I think it's something like -- was it Sidekiq, or Resque? \[unintelligible 00:55:24.25\] developed those. Something like that, but with an embedded database layer. And I think that would resolve a lot of issues people have with developing against just a SQLite database; usually jobs comes up, so... I think that would help a lot.

**Gerhard Lazu:** Okay, how would a job system is SQLite help Litestream?

**Ben Johnson:** I don't know that it would help Litestream other than just add adoption for SQLite. Because jobs are just -- they're pretty critical to a lot of different systems. If you need something that runs nightly, if you need something that runs every hour to do some kind of bulk processing, you really kind of need that job. It kind of sucks to rebuild that in your language; just making a timer and hope that it's good enough. So that's kind of where I see.

**Gerhard Lazu:** Okay. So you mentioned this piece of work that you're currently focusing on in the context of Litestream, getting your read replicas, being able to promote them to primary writers... Are there other things that you're working on in the Litestream space, or things that you would like to be able to be able to work on?

**Ben Johnson:** I mean, that's mostly what I'm working on right now. We kind of want to make a layer where it's a bit agnostic to the underlying replication, so we can have different models. Some people really want to have a synchronous replication model, so you really don't lose any data. But you do that at the cost of maybe slower writes, because you have to confirm you write to a secondary every time you do a write. An async model where maybe you have a bound of an upper time that you can lag behind on your replicas... A lot of things that. I don't know if we'd go as far as like a Raft model, where you actually have distributed consensus. There's other tools, like rqlite, that are good for that. So I think there's some interesting stuff in that space, and that's my current focus, I would say.

There's one tool that I made - this is another hack... \[laughs\] I feel like my whole career is just a bunch of hacks.

**Gerhard Lazu:** Isn't it for all of us?

**Ben Johnson:** Yeah, exactly.

**Gerhard Lazu:** That's how you know you have a successful career - you've done a lot of crazy things, a few stuck, and they're brilliant. Brilliant hacks, just to be clear...

**Ben Johnson:** Oh man, I have so many hacks that just never took off... \[laughs\] But another project I work on is called Postlite. I think it has a ton of potential, I just don't have any time for it right now... One big issue that people have with running SQLite in production is that -- like, you use a command line tool... I typically use a command line SQL tool, or even with Postgres, I use pgSQL... And you just SSH in, run your commands... That's kind of how I work. But I know a lot of people having a GUI around that stuff. And the big problem, obviously, with SQLite is that you can't SSH over to it and run a GUI with it. So Postlite, actually - it runs a proxy around your SQLite database and it listens via a Postgres protocol. So you can actually connect to your Postgres tools, your GUI tools to your SQLite database on a remote host through that.

\[58:15\] And I'll just -- I'll dig into the implementation, because I think it's really cool. So the hack around this that makes it work - so the biggest issue... You know, people have tried to do this a little bit in the past, but the biggest issue is that when a GUI tool connects, it tries to get all the pg\_catalog information; so all the table names, and columns, and whatnot. That obviously doesn't exist in SQLite. So what Postlite does is it actually -- so you can do a thing where you attach databases onto other databases in SQLlite. So you can kind of query between the two. So what it does is it actually attaches an in-memory database to your database, and it's called pg\_catalog, and then it attaches virtual tables onto that. So they're just fake tables that Postlite generates for you. So it can list out the databases, and columns or whatnot. And yeah, so it essentially just like hacks together this pg\_catalog for your SQLite database, and then communicates over the pgwire protocol. So yeah, it's a fun little tool, and I think it has a ton of potential. And it actually works, but it's just not well-tested.

**Gerhard Lazu:** Is this somewhere like on GitHub, on a repo that people can go and check it out?

**Ben Johnson:** Yeah, if you go to github.com/benbohnson/postlite.

**Gerhard Lazu:** Okay. We'll see -- if any of the listeners is interested, have a look. I'll put it in the show notes.

**Ben Johnson:** Yeah. If anybody wants to contribute or maintain it, or hit me up.

**Gerhard Lazu:** That's a good one. That's a good one. Okay. So is there anything that you would to know about the Changelog setup, infrastructure, how I'm thinking about things, where I would to take things, why...? Anything bad would be interesting for Litestream maybe?

**Ben Johnson:** Yeah. I mean, you guys have an interesting setup. You're still on Kubernetes, right? Are you running Kubernetes in Fly, or not anymore? Or you're totally off of it.

**Gerhard Lazu:** We migrated from Kubernetes to fly.io.

**Ben Johnson:** Yeah, that was a lot of YAML you just tossed in the bin.

**Gerhard Lazu:** Oh, yes. Oh, yes.

**Ben Johnson:** I think I'd be curious then -- okay, I had it in my head that you're running Kubernetes on Fly, which would be impressive... Which I think does work, actually, but it seems like overkill. I guess what is your goal -- I know a lot of the stuff you guys build, you have an intellectual curiosity; you want to be engaged and know the actual system. But in addition to that, are you looking to reduce latency, reduce configuration overhead? Or just make it easier, make it simpler? I guess what would be your pain points that you guys have right now?

**Ben Johnson:** So right now I don't think it's so much of pain points, it's more like an improvement that we could do. So I mentioned the slow boot times of applications, and there's only one instance right now... So we would want to go from one instance to multiple application instances. But if every application instance, when there's an update, takes 90 seconds to boot, that's a bit too long. They do a bunch of things they don't need to, so we will be looking at improving the boot times. But then you have multiple applications, and we still have the CDN in front, and that's great, because we just need to be in so many locations, the application is very read-heavy... But our integration with the CDN hasn't always been great, and I think we talked about it in episode 50. Even during our Fly migration, there was a misconfiguration in our CDN, which was as a result of using the UI incorrectly, the CDN UI... So there was that episode...

But just simplifying the way we do things, and basically sharing it with the world. This is why we did it. We did it. We start with the why. And this is how we did. So there's a pull request, there's a story, there's even an episode like this one, where we talk to the ones that helped us, gave us the idea...

So I'm wondering, what could we do better than we do? Literally, how do we improve what we have today? How do we make it simpler? How do we make it in this case boot faster? How can we have more than one application? Because before, every single request ran through the CDN; the website would be down when the application instance would be down. And we could only run one, because we had block storage, and there was like write once...

**Ben Johnson:** \[01:02:24.26\] Oh, sure.

**Gerhard Lazu:** ...so it wasn't like write many... That meant that we could only have one instance running. But now on Fly, now we have PostgreSQL, now we have actually the object storage; that's the most important one. All the media is stored on the object storage in S3; it's no longer stored on a volume which is attached, and that a huge -- actually, that's the first step towards having a number of application instances. But then there's the database, and in Fly, if we spin multiples, they will run in different zones, in different -- do they call them regions in Fly? I forget the exact name.

**Ben Johnson:** Yeah, regions. Yup.

**Gerhard Lazu:** So they will run in multiple regions, and then the database primary will be in one... So I'm thinking, is there something we could do about the data so that it's local, it's faster? And that's why I was curious to talk to you, to see where SQLite and Litestream is... And I think it's getting there. There's this first hurdle for the application to not have to go down when there's an update... But I'm feeling good about that, I have to say. I like how you think about it. I like how methodically you go know over that improvement, and I know it's gonna take a while, especially if there's something that you can trust. And that's why I'm curious to see where do you see Litestream going, so that I know "Does it match what I'm thinking?"

**Ben Johnson:** Yeah. Ideally -- honestly, our goal, at least inside of Fly... All this other stuff is going to be open source, but the benefit of me being at Fly is we can tightly integrate it as well into everything we're doing. We essentially just want to give you a directory on the instance that you have, and you just write to it like a regular SQLite database. You don't have to know anything about it, and it just kind of magically works. And then it's instantly - you know, given the speed of light - on all your other instances at the same time.

So it's not that you have to think, "Oh, I need to configure this, I need to set the number of replicas, and I need to configure the primary, I need to do all these different things, and I need to set backups and whatnot..." Essentially, you just set a flag on your deploy and say, "Hey, I want this directory, this magic directory", and it just handles it all for you.

**Gerhard Lazu:** That's really cool.

**Ben Johnson:** So that's, I guess, from the grand idea of what we're doing, that's the goal. And we want to make it work on everything, really. Even if you're running Kubernetes and you want to run SQLite on Kubernetes, it should work there as well. So hopefully we just simplify the stack as we go.

And as far as what you guys are doing, I think that the CDN is a big thing, moving stuff up to object storage, especially large files, is great. I know there's some CDN stuff that we do, like if we can serve it straight out of the instances, or pull off static files, and we can serve those separately - that might simplify your stack on Fly.

I would say... The startup time, is that part of -- are you guys deploying as an app? I don't if you looked at the new Machines stuff that Fly has...

**Gerhard Lazu:** I've seen the new Machines; we're not using those. We're still deploying as containers. So we build a container image, and then it pulls down the container image; actually, we publish it with Fly. And I think there's some improvements to be done there, but the boot times - it's actually the application trying to still synchronize thing, and that's something which I'm going to look into over the coming weeks. So the application - it's still thinking that it needs to back things up to S3. That's the initial logic which we had, because on boot time it would say "Do I have to back things up?" and it would do that in terms of synchronizing files. But it no longer needs to do that, because everything is on S3 right now, in terms of the static files.

**Ben Johnson:** \[01:05:49.25\] Yeah, that makes sense. If you look at the Machines as well - once you get your application side startup latency going, or worked out, the Machine stuff really is snappy. You're essentially -- so the Fly apps kind of manage your scaling, and are kind of a higher-level layer, and the machines are really "I want to boot up an instance, a specific instance in this region, and I'll put my application on there. And I want a bit of a specific instance somewhere else as well." You get a lot more fine-grained control, but they're also a lot faster. So you get sub-second startup times from those.

**Gerhard Lazu:** Interesting.

**Ben Johnson:** So those are pretty nice. And we just released those I think in the last week or so.

**Gerhard Lazu:** Yeah, it's a recent. Okay. I will check those out, because I've seen them being mentioned, but I didn't have time to dig into them. But that sounds really, really interesting. Okay.

**Ben Johnson:** Yeah. I think it's a cool thing. If you don't need that higher-level management of deploying the app and scaling, auto-scaling, and all kinds of stuff that, it can be a great option just to get super-snappy machines.

**Gerhard Lazu:** Yeah, I think so. So one more crazy idea and then we go for the wrap-up... What would it look if we didn't use a CDN, and we would have many application instances, all running on Fly, across all the regions we have most users in; they'll be close to our users, the application itself would be basically like a CDN edge location, it would cache everything that it serves, in terms from the object storage maybe, and the data would be also local, from the database... Lots of reads, but everything will be local, so we don't have to have primary and going from the edge location to the primary, so all the reads are local... Do you imagine that working?

**Ben Johnson:** Oh, yeah. I think that's sort of the goal is with Fly as well. We want to get rid of the CDN more or less. You don't really need a CDN if you have your application nodes running at the edge. They can serve those static files themselves... Or even today, you can run Postgres and have replicas around the world as well. So yeah, I think that would totally work, and it's great if you have -- you guys have a very international audience as well, so having servers down in South America, or Asia, Europe, Australia, Africa, I think that would be great.

**Gerhard Lazu:** I was just looking, I think -- when I do the intros for the episode, I check a couple of interesting facts out, and I just mention them in the intros... And two episodes ago, I was looking at all the CDN edge locations that serve traffic - it was 93 in the last seven days. So 93 edge locations served--

**Ben Johnson:** Oh, wow.

**Gerhard Lazu:** ...some amount of traffic. It's a lot of locations. But there's always the first 10 or 20 which are the busiest, and then you have a very nice small tail; it's a short tail, which means that there's not many from the last 50 or so regions. And I think there's a couple of important edge locations, and then the rest it's-- it's good enough, it's close enough. It's still milliseconds. It's not seconds.

\[01:08:52.05\]But the one thing which still in my head is not clear - if the application is basically acting as a cache, essentially, for the object storage, when the application gets restarted, the instance, then all the caching which it had, it will disappear.

**Ben Johnson:** Yeah. If you don't have-- well, are you doing persistent disks on those instances? Are they ephemeral?

**Gerhard Lazu:** So they're all ephemeral. We don't use any persistent disk. But that's interesting, because if we did...

**Ben Johnson:** Yeah, you could do it persistently. I mean, you could always just pull down the cache again, but yeah... Because you do have-- there is going to be a limit on how much you can store on the ephemeral drives. I think it's -- I don't know \[unintelligible 01:09:30.07\] You can test it out, I'm sure, but I don't think it's a stable number...

**Gerhard Lazu:** No, I'm pretty sure we would want persistent disk for that... But the persistent disks are only there to basically persist the cache, so that when we restart the instance, we reattach the disk and we still have that previous cache. We don't start with an empty cache, with a cold cache, because that would not be good, even for the object storage bill.

**Ben Johnson:** Yeah, \[unintelligible 01:09:56.21\] and then attach volumes on there. I think that's a great way to make it super-snappy; they restart fast. That would probably be the way to go.

**Gerhard Lazu:** Nah, I'm probably dreaming. While I was kind of dreaming at the beginning, now I'm way ahead in the future. \[laughter\] Okay, coming back into the present, as we prepare to wrap up, I'm thinking, which is your key takeaway, Ben, for our listeners, the ones that stuck with us all the way to the end?

**Ben Johnson:** Sure, yeah. I think a key takeaway is that if you're looking to simplify your stack... I think that in any technology, and Litestream included, it's always an evolution. So I think if you're interested in simplifying your stack, working with an embedded database, just having that really snappy, fast back and forth between your application and your database, I would love to have people try it out. Give it a try. Maybe it doesn't fit for maybe your big, huge application that some Fortune 500 companies are running on, but there's thousands, millions of applications that don't have those same requirements, that can do something simpler. We're continually improving and revamping and making it better over time, and the feedback from the community really drives a lot of that. So I'd say jump in, reach out to me. I would love to hear people's feedback on their experience and what they're looking for, for sure.

**Gerhard Lazu:** There's more feedback coming your way, Ben. I'm very excited to try Litestream in a couple of situations, but I'm especially thinking about WordPress. I don't think many people know this, but they will find out in the next few seconds... I still host maybe 20-something WordPress websites, and I've been doing so for over a decade now.

**Ben Johnson:** Oh, nice.

**Gerhard Lazu:** And I'm thinking of improving that infrastructure, and I'm thinking of giving SQLite and Litestream a go with WordPress, to see what that looks like.

**Ben Johnson:** Yeah, I'd love to hear your feedback on it. I think it's a great fit.

**Gerhard Lazu:** Well, thank you very much, Ben, for today. I had a lot of fun talking to you. You just gave me so many ideas, and I'm looking forward to what you do at Fly. I think it's a great combination. Kurt is just building an amazing team. I cannot imagine a better place for Changelog to be running on, and I'm very much looking forward to what we do in the second half of this year. And 2023 - oh, boy. Oh, boy. Even my dreams aren't big enough for what is to come, I'm sure of it.

**Ben Johnson:** Yeah. \[unintelligible 01:12:18.05\] bigger. Thanks for having me on. It's been great talking to you.

**Gerhard Lazu:** Thank you, Ben. Until next time.

**Ben Johnson:** Yeah, have a good one.
