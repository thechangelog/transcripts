**Jerod Santo:** We are back with yet another It Depends episode. That means I have to play my jingle.

**Jingle:** \[00:04:01.09\]

**Jerod Santo:** You know, there are no silver bullets... So the best way that we can help you build great software is to equip you with knowledge. Much of that knowledge can only be gained through experience, and that's why on this It Depends miniseries I sit down with experienced devs to discuss their decision-making process. Today I have with me Ben Johnson, who you may have heard on our shows in the past nine times. In fact, this is Ben's 10th appearance on Changelog pods.

Ben created BoltDB and is doing some gnarly and cool stuff with SQLite at Fly.io. Ben, welcome back.

**Ben Johnson:** Hey, thanks for having me, Jerod. It's good to be back.

**Jerod Santo:** It's great to have you. For some reason, your name always comes to mind when I think about databases. Is that weird? You're just living rent-free in my mind, I guess.

**Ben Johnson:** I guess so. I don't know. I think it's that I do weird stuff with databases, and maybe that's why it pops into people's heads.

**Jerod Santo:** I think that might be the case. A lot of your career has been focused on databases and in the Go community, and I'm curious, why for you databases? Why do you focus on that particular part of the technology stack?

**Ben Johnson:** That's a good question. I was a UI developer, I did data visualization for a big part of my career... Actually, I started off doing Oracle databases, and I thought I was really going to be an Oracle DBA early on in my career. But then everyone else that you're competing against has 20 years of experience at the time, and I just had to find a different route for a while... But I don't know, I think there's something raw about databases, and that's kind of the lowest level kind of abstraction you get to. I think it's kind of interesting.

**Jerod Santo:** It's kind of the most important part too, at the end of the day.

**Ben Johnson:** Yeah. And if you mess it up, then you really...

**Jerod Santo:** You mess it up and you have problems, right? Security, of course, is a big issue. But it's also the most lasting part of most valuable applications, is the data... And the application code and the features come and go, but the underlying data is valuable, probably even after the business is gone, or the application is no longer in use... It's like, that data has an inherent value to it. So it's definitely down in there, and oftentimes the most lasting part.

So today we want to talk about databases, and this is an It Depends where we kind of share decision­-making processes, how do you pick this, how do you decide that, knowing that everybody has a different context. And so we can't just simply say to you "Just use this", because that might not be true all the time. However, long time listeners of the Changelog know that I probably am going to say "Just use Postgres, and It Depends doesn't apply here..." But Ben, you might say something different, because I know you're an SQLite fan, so... Was that going to be your stock answer? "Just use SQLite", you know?

**Ben Johnson:** I would actually go with just use Postgres, generally.

**Jerod Santo:** Oh, you would?

**Ben Johnson:** Yeah. I think if you don't know databases very well, there's probably the most amount of information out there for how to use it, how to set it up, how to debug it, that kind of stuff. You get a lot of GUI tools, you get all that kind of stuff. I think it also depends on the community. I think PHP does a lot more MySQL, so maybe in that world you do MySQL... But yeah, I think Postgres, honestly, you can't -- it's hard to go too wrong with Postgres.

**Jerod Santo:** Yeah...

**Ben Johnson:** There's obviously sharp edges as well, but it's probably the least worst option out there.

**Jerod Santo:** \[laughs\] Alright, that's our show. You heard it here first. Just use --

**Ben Johnson:** Thanks for having me on.

**Jerod Santo:** Well, maybe we can adjust that, because there are so many specific use cases and so many scenarios for applications where the type of database you're using really does matter, and you can play to a database's strengths and get a lot of benefits... But maybe we adjust it to say "Just start with Postgres, and you're probably going to be a safe starting place." Or MySQL. But I agree, Postgres has the mind share, it has the tool share at this point, it has the momentum as an open source database. Although SQLite has a ton of momentum right now. But I think there's more caveats to SQLite, depending on what you're up to, and we can probably get into that as we talk here.

**Ben Johnson:** Yeah, for sure.

**Jerod Santo:** \[00:08:04.27\] But just the breadth of the types of databases is somewhat overwhelming. here we are talking about three different databases, but they're all pretty much the same. they probably share 90% overlap. And then the devil's in the details.

**Ben Johnson:** Yeah. And a lot of them -- even SQLite has support for MySQL style SQL, and Postgres style SQL, so you can kind of swap out parts of them... So they definitely try to overlap.

**Jerod Santo:** Right. And because there are extensions and plugins, there's crossover into different types. But if we're going to lay out some of the major types of databases - because before you pick a specific database, sometimes you have to even decide "What kind of style of database is going to play to my strengths?" I made a list here, and this is probably not, certainly not comprehensive... But if we're going to talk different types of databases - we have relational, graph, document, key-value, columnar, time series... Of course, there's vector DBs, which are all the rage right now because of semantic search...

**Ben Johnson:** I don't see an XML database in there, or an object-oriented database. Those are some old school ones...

**Jerod Santo:** Oh, yeah. What did I miss there? Oh yeah, ODBs.

**Ben Johnson:** Yeah.

**Jerod Santo:** I actually really that concept inside of working with an OO language - if you can map your data store directly on your object graph, and you're just talking about hydrating and dehydrating it, at the end of the day... Isn't that kind of what you want in an object-oriented language?

**Ben Johnson:** Yeah, it's kind of what ORMs do. they just do it on top of a different model, but... Yeah. There's this holy grail idea of just you write your application, and the objects just magically persist, and you don't have to worry about them, but --

**Jerod Santo:** Why can't we have that? I want that.

**Ben Johnson:** No, yeah, for sure. I think that there are -- I think, there's obviously self-referential types and some complications in there... One thing I noticed when I was doing a lot of development with Bolt is you kind of need a schema layer... But beyond just a schema layer, it's nice to have kind of a data language layer... Because you do a lot of stuff where you're "Oh, I need to pull down a certain set of data, I need to do some kind of export transform" or whatnot, that you don't necessarily want to tie to your application language. It might be a a migration you might do. So in that case, it is kind of nice to have some separation between generally your relational model and your actual application model.

**Jerod Santo:** Right. That leads me to a whole other line of thinking, which is beyond database choice... It's like, how much of your application logic should reside inside of your database? And I feel there's been a pendulum swing in both directions over time, where it used to be store procedures and all the things in there. And we found problems with that, operational problems, all kinds of things that you could say "Well, that's not ideal because of this." And then I think Ruby on Rails, at least in the web dev space, really swung in the opposite direction of your data store is a dumb thing that you treat as an input/output mechanism, that will store things on disk... And you put everything inside your application code; your consistency rules, your relationships - all that stuff is an app code... And that way, you can actually even just swap out the backend and not even worry about it. And I feel that was a move too far in the other way, because of the reasons you said. All of a sudden, you want to use it outside of the context of your Ruby code, and you're "Oh, where's all my consistency rules? Where's all my constraints, and all that?" Well, they're over there in your Ruby on Rails app, so you can't use it in any other context, so you lose it, and now you have data problems on the backend. So that's another thing, is where do you put stuff? Where do you fall on that, usually?

**Ben Johnson:** \[00:11:49.20\] I think the high-level things foreign key constraints, some checks, check constraints maybe, I would probably just put in the database. Because yeah, you do have a lot of users or clients for a database, not just your own single application... So I think it's tough. I mean, I think putting too much into your application layer - again if you ever want to rewrite it, or change it, or move somewhere else, you're moving everything. But -- I mean, I used to do stored procedures back in Oracle, and I would say the one thing I really loved about stored procedures is that they're just wicked fast. They're literally -- you're putting your code right next to your data, and it's hard to explain just how fast a stored procedure will run. So if you really need the speed, that can be great, but again, they're terrible to maintain. This was 20 years ago, so there was no Git repo where we versioned everything. It was "Oh, we're just going to upload this giant SQL file to replace our stored procedures and hope it works. So that's terrifying.

**Jerod Santo:** Yeah. I wonder if -- I'm sure there's people who feel like they've found a good middle ground, and I'm most familiar with Postgres, so writing PSQL functions and using extensions, but also keeping that stuff in version-controlled, maybe tested, I don't know, places, where you can... Because for me the distance from my code to a stored procedure was always the problem. It's like "Now I have to connect to a thing over there, and then update the stored procedure..." And it was always just a weird disconnect there that I felt was going to cause problems, whether it ever did or not.

But I'm wondering if people are building -- you know, similar to the folks who took Nginx to the limit, and made app frameworks right there inside Nginx, modules and stuff... And I wonder those people who are like Postgres, or whatever, pick your database, store procedures for life \[unintelligible 00:13:36.27\]

**Ben Johnson:** Yeah. I mean, one thing I like about SQLite is that your code is right next to your data, so you're almost writing stored procedures, just in the language of your choice, so you don't have that latency to go between the two. But as far as Postgres -- I mean, I hate writing SQL-based stored procedures. I think it's a pain. So I just generally move stuff to the application layer.

**Jerod Santo:** What about other functionality? So we've had Paul Copplestone on recently at Supabase, and he calls them Postgres maxis, because they really leverage the database. They're providing all kinds of services on top of it for things like background jobs... I think PubSub, of course, is there in Postgres... They do row-level access control, so really taking advantage of the security things that you can do inside of there... And I'm curious if that kind of stuff intrigues you, does that sound like you're taking it too far? ...in terms of what you're going to do with your database.

**Ben Johnson:** I think it's interesting to kind of play around and see where you can maximize different performance characteristics, I would say. I don't feel like from a usability standpoint it's always the best. I think that Postgres is a pain to set up a lot of times to begin with, so I think adding more to it just scares me a little bit. But yeah, I think that's cool, try new things out, see what sticks.

**Break**: \[00:15:03.15\]

**Jerod Santo:** How many different types of databases have you used throughout your career? I listed off a bunch of them. Have you used all those?

**Ben Johnson:** I think most of them. I haven't done a ton with graph databases, but I've done document databases, I've worked in time series before, I've done columnar, for analytics... The way I think of it in my head - I think document was an interesting kind of road we went down, of like -- you know, you kind of denormalize your data, and it makes it a lot faster just to grab one big, chunky object, instead of doing, you know, one, and then an n+1 query after that to grab all the children. But denormalization has its own issues, as far as, you know, you update in one place, and it doesn't update in all of them necessarily... So I think that -- especially with the work that Postgres and a lot of databases like SQLite have done as far as JSON embedding inside the rows, I don't see a big need for document databases these days. I think you can do a lot of that stuff inside relational databases.

**Jerod Santo:** I would tend to agree. I have used MongoDB on a production project. It was probably 10, 15 years ago now, and it was very much because I was convinced by one of their sales demos... So it was when they showed this layout of Magento, which is a PHP e-commerce framework, very popular then - probably still in use in many places now - and they showed the table structure of that particular piece of software... And it was gnarly, in the bad sense of gnarly. I mean, there were so many relationships, so many -- this is like "How many joins do you have to do to pull together your shopping cart?" was kind of like what this thing was.

**Ben Johnson:** Sure, yeah.

**Jerod Santo:** And it was just like "Wouldn't this all make a lot more sense if it was a single document, and they showed what it would look inside of Mongo, in a document-oriented data structure?" And then you'd just pull out the document for the shopping cart and you're rocking and rolling. And I was like "That's pretty compelling." I think it was exacerbated by the fact that Magento's structure was particularly heinous, in my opinion... Probably because it grew over time, as many of these things do. That's how your database tables can get out of control. And I thought "Yeah, that makes a ton of sense." I think for an e-commerce site, a document-oriented database made sense. And so I went for it. I was building an e-commerce thing for a client, and went with MongoDB... And it was relatively -- I think it fit pretty well.

The problem that I came across over time was I didn't really have any MongoDB chops. I have a brand new thing that I don't really know how to administer... And so that's where I get a little bit fish out of water with something where I feel this thing fits the data structures, and so then my application code becomes simpler, but now my operations are either more complicated, more expensive, and I have to pay somebody else to do it... And so in that case, I ended up being kind of upset that I did it... Because then I later learned about Postgres's JSON stuff and I was like "Oh, I can kind of have the best of both worlds if we just can shove a few non-normal things into an otherwise relational database."

And I do agree with you that, generally speaking, I think document-oriented, you can probably get away with not going with a document-oriented-first solution today.

**Ben Johnson:** You can do a lot of stuff too with materialized views, where you're essentially building a physical table out of query... And it automatically updates itself. So I think there's a lot of cool stuff you can kind of play around with to get around that.

The graph database side though I think is a little trickier. I think there are extensions for graph language stuff within SQL, but it's always heinous. Or you can do CTEs, common table expressions, and they're recursive and they're impossible to debug... But they can work. I mean, that's an option. But I think that's a fairly rare instance where you have stuff that's so relational -- or not relational... It's weird. It is relational.

**Jerod Santo:** It is relational, yeah.

**Ben Johnson:** I mean, they have things that relate to other things... If you need to do six degrees of Kevin Bacon in your application for some reason, then I think a graph database makes sense.

**Jerod Santo:** \[00:22:07.13\] Right. Yeah, your typical social network makes sense for a graph database, because if you think about followers and followings and friendships and these kinds of relations, if it's all about that, then - the way I heard it explained is if you have edges and nodes in a system, if the edges are more important than the nodes are, which the edges would be the connecting points, then you're probably well served by a graph database. And in the case of a social network, that's pretty much what it's all about, right? It's like who's connected to whom, where. Then something like Neo4j or other graph solutions have made sense... I've never used one of those, and so I can't speak to it personally.

**Ben Johnson:** Yeah, I haven't really either. I think the funny thing though is all these essentially boil down to B+ trees as the actual implementation. So it's kind of all a matter of language at the high level. They're all kind of key-value stores underneath. It's interesting too, because most of it you're optimizing to minimize the number of queries, so you don't have so much latency. So you can send a single query to get a bunch of relationships, instead of sending a ton of queries to get those. Whereas once you actually get to running something locally, like a Bolt or a SQLite, you don't have that overhead, so you could make a bunch of different queries and you can essentially kind of have kind of the best of all those worlds. You could basically write kind of a graph database with just a SQLite, since you're so close to the data.

**Jerod Santo:** Right. So how much of that is file structure on disk, binary blob formats, that whole deal, layout of the data on disk, and how much of that is client server? Because it seems like when you say embedded we're removing that client server connection, which oftentimes is a network connection, it could also be a socket... But that connection is going to be latency, right?

**Ben Johnson:** Yeah. I mean, generally there's the physical latency just going between this box to this box, or this region to this region... Which can be significant when you have a hundred queries. But then - yeah, Postgres you can run locally, you can run just over like a Unix socket, and it's quite fast. SQLite runs just in process, so there's not even like a process barrier to go between... I mean, you can have the kernel for locking and whatnot, but you're really as close as you can possibly be to the data. So it's pretty fast.

**Jerod Santo:** And that's what you're building with BoltDB as well, right? This was an embedded key value store for Go.

**Ben Johnson:** So yeah, the data was actually memory mapped into like a read-only map. So you'd actually interact directly with this memory map, which essentially pulls the data up from disk into the OS page cache. So as long as you have -- if you can fit most of your data into memory, at least the hot parts of your data, it's basically you're just interacting with the speed of the memory, which is, again, quite fast.

**Jerod Santo:** And what were BoltDB's perfect use cases, and then where would you get to where it's like "Ah, that's probably not best for something like this"? ...and using that as a proxy for these embedded key-value stores.

**Ben Johnson:** Sure, yeah. I think BoltDB was good when you have some kind of simple structure that you're trying to use, and you don't need a lot of things like indexes, or anything too complicated. If you're storing just some basic objects or basic rows, you can do a lot with just converting that to JSON and storing that in a blob, and then decoding that when you read it out. You could use protocol buffers, anything like that to kind of encode your data.

It's good if you really want a really super-lightweight dependency. If you want it to be pure Go, that goes a long way. I would say most people are probably better served with SQLite. It has an actual schema on top of it. I know there's a lot of applications now that are actually using it as their file format. I think Audacity is one of them, so you can actually just pop it up and just read, look at your data with a SQLite CLI, which is kind of cool...

**Jerod Santo:** That is cool, yeah.

**Ben Johnson:** So generally, I would probably lean towards SQLite for most use cases.

**Jerod Santo:** While we're talking key-value stores - thoughts on Redis?

**Ben Johnson:** \[00:26:05.13\] I don't use a ton of Redis. Most of the use cases I see it for are more at like a caching layer. And I know it does a bunch of other things, too; you can do kind of queues, and you can do sets, and all kinds of stuff. I think those are probably fine, but it seems like it's rarely used as a primary store. It's more like a memcached kind of thing.

**Jerod Santo:** Right.

**Ben Johnson:** So I think it's fine for that use case. I don't know about its durability guarantees, I'm not sure about its transactional guarantees... That's another one you get into. And the more you learn about transactional guarantees, and where the defaults are on things like Postgres and MySQL - I think they're atrocious. Most people don't understand isolation levels, really... So when you actually look at what guarantees you actually get, they're pretty limited. That's one reason I do like SQLite, is it has a really strong isolation level. And it's the only one you can do.

**Jerod Santo:** Can you say more about isolation levels?

**Ben Johnson:** Sure. Isolation levels are around where -- when you read something from the database, if other transactions are going on at the same time... Sometimes the transaction level will mean if you read it one time and then someone else updates it and you read it again in the same transaction, you may get the same version, you may get the new version... So there's a lot of weird little edge cases where you can get into, where you might -- maybe you fetch a list of objects and then you run a count for however many objects... And those two may differ depending on your isolation level and whatever else is going on. So it can be tricky if you're not using something really strict, like serializability, or snapshot isolation is another strong one that's generally pretty good... But I think Postgres uses \[unintelligible 00:27:38.19\] if I remember correctly, which is one of the lower ones, the least strong...

**Jerod Santo:** One of the least strong isolation guarantees. Is that what it's called?

**Ben Johnson:** Yeah. And you can use things like select for update as well to give yourself some locking around things and whatnot.

**Jerod Santo:** And select for update - what's that do?

**Ben Johnson:** So select for update, if you're going to select a list of data, like do a query, and then you basically want to say "I'm going to update parts of this data after that", it'll actually take a lock on those rows, or maybe even the table, so that they aren't changed from underneath you... But it does block other people from using those as well.

**Jerod Santo:** Gotcha. Where does one go to get that level of knowledge about these different things?

**Ben Johnson:** I mean, writing databases helps...

**Jerod Santo:** \[laughs\] Well, we don't all have that much time, Ben.

**Ben Johnson:** No, that's fair. That's fair.

**Jerod Santo:** "Write a few databases, then you'll understand it..."

**Ben Johnson:** Yeah. Just -- yeah. After your fifth database, \[unintelligible 00:28:31.08\]

**Jerod Santo:** I was hoping for like a website or something where I could just read a table that says "Here's what you should use."

**Ben Johnson:** I mean, it's tough... There's definitely a lot of people that do blog posts about internals. On the Fly blog that we have we've written a bunch on SQLite internals and how that works.

So if you look at Kyle Kingsbury, who goes by Aphyr online, he does a bunch of writing on kind of how -- he basically tests production databases and breaks them. That's kind of what he's known for.

**Jerod Santo:** Okay.

**Ben Johnson:** So he'll go in and he'll actually go and find where they may guarantee a certain isolation level, or there's certain guarantees and they don't actually hold up. Then they'll write a whole blog post dumping on that.

**Jerod Santo:** Nice. Sounds fun.

**Ben Johnson:** And then the companies go and fix them. It's great.

**Jerod Santo:** Yeah.

**Ben Johnson:** And once you get into distributed systems especially, it's kind of hard to keep in your head all the different clients going on, what their views of data are, and how they interact with each other... So Kyle Kingsbury has a website, Jepsen - that's his software as well, software to test these different databases. But on there, there's a list of consistency models that he'll show on there. And that's a great resource to kind of dive in and to kind of understand the relationship between them. There's kind of two different camps. There's kind of more traditional databases and their write isolation, more or less, I would say. That's where you think of like read committed, or read uncommitted, and snapshot consistency... But then there's also things where you get into eventually consistent systems, about what they can read, and it's more kind of like a read consistency side.

\[00:30:05.28\] So there's a lot to read out there, honestly, and it's kind of -- it hurts the brain a lot. I would just say, if you're not sure, generally try to have the highest isolation level you can, and you won't get a bunch of weird little bugs later on that you can't figure out.

**Jerod Santo:** And is SQLite's isolation level so good because of its embedded nature, or because they've coded it in such a way that it's that good, or both?

**Ben Johnson:** I think it's more of a simplicity. They only allow a single writer, so it basically guarantees serializability, because you can't have other writers at the same time. You also get a consistent view of the data.

**Jerod Santo:** It's a bummer though, right? It's a bummer that you can't have more than one writer at the same time, right?

**Ben Johnson:** I would say generally it's a bad idea to have long-running writes anyway, regardless of the system. You can get into deadlocks, and you can get into all kinds of lock issues. So I like the idea. You can generally do writes very, very fast in SQLite. So they seem like they -- yeah, they don't feel like you only have a single writer. You can write a bunch.

**Jerod Santo:** It seems like it's parallel, but it's not.

**Ben Johnson:** Yeah.

**Jerod Santo:** Yeah. It's just so close to parallel; like it rounds to zero kind of a thing, but it's not actually zero, so to speak.

**Ben Johnson:** Yeah. But it makes the model much simpler to think about.

**Jerod Santo:** Simplicity. Is this something that you like in software, Ben?

**Ben Johnson:** A little bit, yeah. I'm a big fan.

**Jerod Santo:** \[laughs\]

**Ben Johnson:** There's just so much over-engineering, I feel like, for a lot of this stuff. And I think I've railed on this for a while, but I feel like people have these extreme ideas of what they need as far as their uptime, or their durability... Everyone thinks that "Hey, I should never, ever, ever lose data", which - it sounds like you shouldn't, right? But there's never a guarantee. Like, you could lose your database, and then you could lose all your backups, and you could lose this and that... So you're really just kind of adding nines onto your durability over time.

And one of my favorite -- and I bring this up, but I really don't mean to dump on these people; I think they do a great job. But one of my favorite examples is GitLab, where they lost six hours of data kind of famously years ago.

**Jerod Santo:** Okay, I'm kind of recalling...

**Ben Johnson:** And it was very public. But they're a public company. They got through that, it was fine. It wasn't the end of the world. You can't do that with all data, but I don't think people actually think about how impactful some level of data loss is. I know that sounds weird, but... And then they just try to over-optimize to make sure that they never, ever, ever lose data.

**Jerod Santo:** Well, certainly the law of diminishing returns comes into effect, right?

**Ben Johnson:** Yeah, exactly.

**Jerod Santo:** You continue to exert effort as you try to get that down to zero, and money, and time, and all the things that effort requires, but you are only now squeezing out very minuscule gains at a certain point, where you can get huge gains to start with. And so what is that happy place where you can say "You know what? Six hours..." It was similar to a decision that I made a while ago, which I can't think of it specifically, but I remember talking to Adam about it. It had to do with our website. And maybe it was Gerhard as well, when he asked me "Well, what happens to Changelog's business if Changelog.com goes down?" And I said "Well, for how long?" Because we could be down for 24 hours and our business is not going to disappear. In fact, our MP3s are served elsewhere... Of course, we couldn't publish new episodes, but if we're down for 24 hours, we're not going to be happy. I don't want that to happen. But we're not going to die as a business. Now, if our website was down for 30 days --

**Ben Johnson:** Yeah, that'd be rough.

**Jerod Santo:** I mean people would wonder if we literally died. So there is a level that you have to define what kind of thresholds matter for us in our use cases. And I think, as weird as it sounds, Ben, saying "Some data loss is okay", coming from a database guy... Refreshing, I guess. \[laughs\] It makes me feel better.

**Ben Johnson:** \[00:33:53.24\] Yeah. And honestly, I wrote a tool called Litestream, where you can kind of continuously stream updates up to S3 for SQLite... So you basically have this super-small window of data loss of maybe a second or two. But honestly, that's even overkill for a lot of people. There's even documentation on the website of "Hey, if you just want to use a cron job and back up hourly, here's how to do it." It's simple, and it's hard to break. So I think there's great options when you don't need that really high level of data loss guarantee, I guess.

**Jerod Santo:** Right. I think it's easy for us all to kind of jump to the maximal side of anything... Because I immediately think "Well, that wouldn't work for Amazon", because every second they're down, they're literally losing hundreds of thousands, if not millions of dollars in sales. And so then I'm like "But I'm not building a solution for Amazon. I'm building it for me."

**Ben Johnson:** Yeah.

**Jerod Santo:** And I don't know why that is, that we immediately go to -- maybe it's a purist thing, or...

**Ben Johnson:** I think probably, but yeah... I think the funny thing too is when you get into high availability, where you have multiple servers, you want one to fail over or whatnot... A lot of times you can make it so complex that you actually lower your availability, where something goes down and it doesn't fail over right, or you might even lose some data in there because of how it fails over... So honestly, sometimes just having a database that dies, and then you just bring up a backup might be the best thing. That's probably fun.

**Jerod Santo:** \[laughs\] Yeah, you might actually save yourself downtime and trouble by having simpler solutions.

**Break**: \[00:35:27.02\]

**Jerod Santo:** Well, you'll like this, Ben. I wrote this on Monday for Changelog News. I was covering a story called "Why CSV is still king", which - of course, there's the details in there, but you kind of get the point from the title of their post. And one of the reasons \[unintelligible 00:37:38.04\] One of these interesting accidental standards; nobody designed this thing. It's almost like JavaScript, 10 days in a lab and now out it comes... This just became a thing, and remains a thing, and this whole point of this post was -- and it ain't going anywhere, basically. But one of the things they said is it's good enough for many situations, and it's dead simple to use. It's just dead simple. And so that got me thinking more and more about simplicity. And of course, there's two sides to simplicity. One side is like, it's not clever; it's not impressive. It's simple.

**Ben Johnson:** Yeah. No one puts CSV on their resume, yeah.

**Jerod Santo:** Right. I mean, you're not gonna get a job because you know how to do CSVs. We even have a term, simpleton... That's explaining somebody who's not very deep, right? They're a simpleton. And so nobody wants to be called that. And I remember Jamis Buck, who was prominent in the Ruby community, worked at 37signals, was core contributor on Ruby on Rails, and he wrote the Capistrano deployment tool, which turned out wasn't super-simple, but I think he wanted it to be... And one time he said "Everybody thinks simple is" -- paraphrasing, not quoting him. "Everybody thinks simple is unimpressive, because they think it's easy. They think simple is easy, but simple is actually the hardest thing to accomplish in a complex world." And so it looks easy, but the hard part was making it simple, so that it actually looks easy. And so it actually is impressive, but it's not impressive. It's one of these weird deals, right?

**Ben Johnson:** Yeah. It's always weird when you -- you might have tried a thousand different ways of doing something, trying to get down to that simple essence, and then when you finally get to it and explain it to somebody, they're like "Oh yeah, duh."

**Jerod Santo:** Yeah, exactly.

**Ben Johnson:** "Well yeah, you didn't get the whole journey..."

**Jerod Santo:** Right. And the solution was obvious, but it was only obvious once you went through the journey and made it obvious to the person you presented it to. Anyways, what I wrote was - you know the old saying in real estate, the three things that matter in picking a property is location, location, location. Well, I said the three and most important factors in determining the desirability of a solution - implying software solution, of course - are simplicity, simplicity, and simplicity. I kind of think that's true.

**Ben Johnson:** Yeah, I would probably agree with you on that.

**Jerod Santo:** It might be like the highest thing that you can achieve in software is simplicity, which is probably why you like SQLite.

**Ben Johnson:** Yeah, no, it's great to debug, and I think that's a lot of it too, is none of these solutions are perfect. And when they go wrong, can you just open up a file and edit it, and see "Oh it's missing a double quotes", or something like that? You can't do that with protocol buffers.

**Jerod Santo:** Right.

**Ben Johnson:** \[unintelligible 00:40:17.13\] honestly.

**Jerod Santo:** Yeah. And to that point - you know, I've been using Postgres for many, many years, and I'm proficient with it. But I've never -- I know where the data folder is, but I've never gone in there and poked around. I know lots of people have, and so I'm not saying that that particular part of Postgres is complex. Maybe it's not. It's just like a thing that's been a black box to me, and I think that does speak volumes about their abstraction layer. But I've also used SQLite quite a bit, and I've got no problem just opening up a SQLite file in either the SQL command, or using an editor, or whatever... Obviously, I'm not going to open it up in Zed and read it from there. Maybe you do, Ben, but I'm not quite that far into the matrix yet.

**Ben Johnson:** Everybody needs a hobby...

**Jerod Santo:** Yeah... And so there is something about that, just being able to -- it's just a file on disk. And that goes back to even, I think, some of the virtues of the Unix philosophy. Or maybe it's Linux. "Everything's a file." Is that part of the Unix philosophy? I know it speaks to it...

**Ben Johnson:** I think so. Yeah.

**Jerod Santo:** Yeah. Everything's a file. There's a simplicity to that. And of course, it has its drawbacks. It's not perfect. But it's also kind of nice in a lot of ways to just have that simple mental model around it. So SQLite definitely has that going for it. What are the drawbacks of SQLite though? I mean, they have to be some.

**Ben Johnson:** Oh, there definitely are. I think people that are used to more of a graphical user interface - there's not a great way to do that for remote databases. Honestly, that's one of the biggest things I find that people hit. I always use CLIs, so it never bothers me, but that is definitely a big one.

\[00:41:54.02\] I mean, like you mentioned around concurrency - you can't have multiple writers. There's obviously some solutions around disaster recovery you can do, but essentially, it is just a file on a disk. It can be on its own; you can't just replicate it with just simple SQLite. So there's definitely some trade-offs.

**Jerod Santo:** Right. So in comes Litestream. You built that for that purpose, right?

**Ben Johnson:** Yeah. For disaster recovery. Just trying to push it up somewhere so that you can basically run an app on a single server and not worry about it just crapping out and then you lose all your data. You can set it up so you kind of restore immediately, and get all your data right back.

**Jerod Santo:** Have you spoken with the SQLite folks, like Richard Hipp and his team, about... You seem to think that -- I would think that something like that would be part of what they offer then, to just completely knock out that particular drawback.

**Ben Johnson:** I think they -- I did talk to them pretty shortly after the Litestream stuff came out. I got on a little conference call with them. Super-nice, great people. I think that they tend to have a focus more on embedded devices and single server or single system uses.

I think a lot of their -- they have the SQLite Consortium as well, which is a bunch of companies that pay money to kind of help support the ecosystem. But I think a lot of it is more like device manufacturers and things like that. So I don't think that they have a strong incentive to go outside of that right now.

**Jerod Santo:** They aren't trying to serve that particular use case, but you want to use it that way.

**Ben Johnson:** Yeah. I liked writing stuff in Bolt. It was super-fast. But I just wanted a schema, and indexes, without building those myself inside Bolt. So SQLite was a good in between.

**Jerod Santo:** How far do you think SQLite could go in a web server dynamic, web app scenario?

**Ben Johnson:** I think it really depends on your language. I write in Go mostly, and it's really fast. So I can serve hundreds, if not thousands of requests per second out of a SQLite database, on a pretty minimal hardware... But I know Ruby and things that, they tend to go a lot slower and are more CPU bound. So I'm sure you'd probably get some limitations around that, but maybe you could just scale up the number of processors. I'm not sure. But I think it's probably beyond the scale of 90% of websites out there, you know?

**Jerod Santo:** Yeah.

**Ben Johnson:** ...I think you're probably fine.

**Jerod Santo:** That reminds me of something Brian LaRue told me on JSParty a couple of months ago, about dynamism inside of a web page. And they've done some actual work on this. And I can't remember the exact percentage he gave... We can go back and pull that out if we need to. But something like 90% of all elements on a page are completely inert. It might even be higher than that. Meaning they're just written once and it's just -- it's the head of your page, it's the footer, it's the this. Most of those things, it's just - they're inert. And very few elements are dynamic in any way. And I think probably 90% of web apps out there are mostly inert; they're doing stuff.

**Ben Johnson:** Probably a lot of it, yeah.

**Jerod Santo:** But not the way that we designed for such scale.

**Ben Johnson:** Yeah. And honestly, I really miss -- I mean, I know we're kind of going back to server-side rendered applications, which I love... But when all the React stuff came around or whatnot, every time I went to a web page and it had some fancy JavaScript stuff going on, I just knew the Back button wasn't going to quite work how I wanted it to, or some certain little things that just always drove me nuts. So I miss just like basic web apps.

**Jerod Santo:** That pendulum has begun to swung back, for sure.

**Ben Johnson:** Yeah. I know Remix I think does a bunch of server-side, and I think React does as well.

**Jerod Santo:** React themselves are moving server-side as well, to provide more of a full-stack solution... Although that's had a lot of issues because of just the nature of how React started, and what it is, and the user base of React. It's been very difficult for them to make that transition. So I think there's opportunity for newer component libraries that are server-side in nature or full-stack in nature to start with to actually gain some foothold, because simplicity and React at this point are not in the same ballpark. They just aren't.

**Ben Johnson:** \[00:46:09.05\] Yeah. I try to learn React once every two years... And I'm like "Eh, I'll just go back to writing Go."

**Jerod Santo:** Yeah. The basics aren't too bad, but things do get complex pretty quickly. But anyways, we were talking SQLite and scaling. You all have put on some work to do some horizontal scaling as well, like moving it around to different regions, and having -- like if I had a web app with app servers geographically distributed, aren't you trying to also take my SQLite database and move it around, and have it replicated around the world?

**Ben Johnson:** Yeah. So we have an open-source project called LiteFS, where we essentially -- we implement kind of like a file system layer in Fuse, so that we intercept... We basically -- it's a pass-through file system, essentially. So all your SQLite writes and whatnot go straight through to the database, but we can essentially detect where transactions start and end, so that we can then kind of wrap up those changes into a separate file, and then ship those out to other SQLite or Litestream -- sorry, LiteFS... Too many Lites. LiteFS nodes, and they can then apply those changes. And it's all done kind of at a file system layer and a physical layer, so you can use any extensions you want on top of that. It's not specific to any of those.

**Jerod Santo:** So as an app developer, I don't have to necessarily think about it. I just deploy and say "Put my--" I was going to say dynos, but that's the Heroku thing. What do y'all call it at Fly? Put my Fly machines...?

**Ben Johnson:** Machines over here at Fly, but yeah. But yeah, you can spin up machines in different regions, and then they just automatically can connect up to the primary, and stream down changes.

**Jerod Santo:** Are people using that?

**Ben Johnson:** Yeah, we've got quite a few people using it.

**Jerod Santo:** Nice.

**Ben Johnson:** Yeah. And if it's your use case and you need low latency stuff around the world, which can go a long way, then I think it's a good fit for people. It's a lot simpler than setting up Postgres, and a bunch of replicas, and things like that in there.

**Jerod Santo:** So I was checking out the LiteFS repo on GitHub. By the way, of course, everybody knows Fly.io is a sponsor of the Changelog. This is not a sponsored episode. We had Ben on for years before he ever worked at Fly. Just so happens, there's lots of crossover in things that we're interested in and our sponsors.

**Ben Johnson:** It's a small world, too.

**Jerod Santo:** Yeah, exactly. There's the disclaimer there. I was looking at LiteFS on the old GitHub there, and it was like, latest commit seven months ago. Is this thing finished? Or have you moved on, or what's going on?

**Ben Johnson:** We haven't done as many changes recently on it. It was in pretty good state for a long time. So we've done some incremental changes, but by and large, it's mostly just kind of worked. And I think getting too fancy with any tooling can cause its own issues.

**Jerod Santo:** Yeah. Well, you move away from that simplicity model. The other thing that I was thinking about with you, Ben, is just your willingness to declare something finished, or at least that you're done with it. Moving on from BoltDB, your strong stances on open source, but not open contribution, and just... There's an expectation setting that you do that I really appreciate. And I wonder where that comes from. Most people don't have the guts to just say that kind of stuff.

**Ben Johnson:** No, I think it's just a lot of burnout, mostly.

**Jerod Santo:** \[laughs\] You're just sick of it.

**Ben Johnson:** Yeah. I mean, I just realized with Bolt, especially; I just got to a point where I got so burnt out trying to maintain it... Especially at a certain scale. Any changes could potentially affect performance characteristics, and you just have to do so much testing on it. It probably hadn't been set up to the level that I really needed it to be, so every change involved just so much time.

**Jerod Santo:** And Bolt really thrived in the era of the launching into the stratosphere of the cloud-native stuff, didn't it? Like, Go systems, Kubernetes...

**Ben Johnson:** Oh, sure. Yeah.

**Jerod Santo:** I'm not sure if it's in Kubernetes, but things around it...

**Ben Johnson:** That's in Etcd, which is in Kubernetes.

**Jerod Santo:** \[00:49:54.03\] It's in Etcd, yeah. Exactly. And the amount of success, and money, and valuations, and money raising stuff were just going through the roof... And all these BoltDBs and all of these different things. Wasn't it?

**Ben Johnson:** Oh, yeah. Go kind of went crazy with the cloud-native stuff.

**Jerod Santo:** Which you probably didn't see coming.

**Ben Johnson:** No, no, not at all. And honestly, I wasn't ever trying to write Bolt to be the Go database. I was mostly just trying to learn about databases when I wrote it.

**Jerod Santo:** Right. That's how you know so many isolation levels.

**Ben Johnson:** There you go.

**Jerod Santo:** So LiteFS, in good shape... I haven't played with it, but I'm definitely interested in the concept. Of course, our production app is already Postgres, so waiting for a good use case to try out a geographically distributed SQLite, and just see how it all works... Because it fascinates me. It seems like -- I don't want to say a square peg/round hole specifically, because I feel like that's usually a bad idea... But it definitely seems kind of stretching into an area where even the SQLite team, like you said, aren't super-keen on it. What was your guys' driving force behind this move?

**Ben Johnson:** I think there are a lot of people that are interested in using SQLite. Honestly, the two biggest things for my complaints as far as Litestream were that it didn't have a failover system. So if you wanted to do a deploy, you had to take down your app for a second or two, and then roll it back up.

And then the other one was just read replicas. So people might want to have read replication out to some distant area, and it just didn't support that. So that's kind of where the driving force was around that.

**Jerod Santo:** Gotcha.

**Ben Johnson:** But it is -- it's a fine line, though. I mean, SQLite is kind of known for simplicity, so adding any complexity, definitely -- there's a certain level that people find acceptable, and it's kind of a gray area where that is...

**Jerod Santo:** Right. It probably depends on each individual's taste, you know?

**Ben Johnson:** Yeah. Whereas I'm sure if you built this into some more complex product, people would be like "Okay, that's fine."

**Jerod Santo:** \[laughs\]

**Ben Johnson:** But people are very, very focused on simplicity within the SQLite community.

**Jerod Santo:** If you take something that's simple and make it complex, people are upset. If you take something complex and make it more complex, "Yeah, we'll buy that!"

**Ben Johnson:** Yeah, people will pay money for that.

**Jerod Santo:** That's funny. What are you working on now, then?

**Ben Johnson:** I'm doing a lot of stuff at Fly... I mean, still doing some SQLite work, but... Yeah, I'm VP of product here at Fly now, so kind of stretching my hands out into different projects and whatnot.

**Jerod Santo:** Right on. Hung up the nights and weekends open source stuff?

**Ben Johnson:** Yeah, pretty much. I don't do as much code these days at Fly, so I've got to find a little side project or something to nerd out on. Maybe the RQLite guy. He's a manager at Google. I used to work with him, but... He gets all his pent-up engineering energy out by working on RQLite, a distributed SQLite system.

**Jerod Santo:** Oh, I haven't heard of that, RQLite. Tell me more. Do you know more about it?

**Ben Johnson:** Oh, it's Raft-based system. It's more of a client-server model than something like LiteFS, which is more like a direct SQLite filesystem-based. But yeah, he's great. He's a great guy.

**Jerod Santo:** That is cool.

**Ben Johnson:** We didn't actually do SQLite at the time when we worked together, but for some reason we both went out...

**Jerod Santo:** You were both interested in it?

**Ben Johnson:** ...and made distributed SQLite implementations.

**Jerod Santo:** Yeah. Have you looked into any of the vector stuff? I've only been listening about it. I know there's PGVector, there's probably SQLite Vector things...

**Ben Johnson:** Yeah, there's a SQLite Vector extension as well. I haven't really dug in a ton to that stuff. I kind of researched a little bit when the AI stuff first started coming out, but... No, I haven't found a great use case that I love AI stuff for. But yeah, so I haven't really dug in. I like infra stuff. I like writing infrastructure code. So I think that's kind of where I stick to.

**Jerod Santo:** You're still happy with Go?

**Ben Johnson:** Yeah, I love Go.

**Jerod Santo:** Haven't had any wanderlust?

**Ben Johnson:** \[00:53:50.25\] I don't know, some things I like... Like Zig, I thought was kind of interesting. I wish it was just more mature. But I like the idea of specifically allocating your memory very intentionally, I guess. So I find that interesting. I liked Rust, the language, but the actual async implementation I got so infuriated by that I just gave up on Rust.

**Jerod Santo:** What triggered you the most about it?

**Ben Johnson:** It's like it's its own language, where -- it actually compiles down to a finite state machine. So you can't actually do recursive calls, and async Rust, and a bunch of other weird limitations... And then there's a bunch of weird naming stuff of like pin and unpin, and sync, and... I don't know, there's just way too many everything around Rust. It felt like so much cognitive load was just remembering all these little rules, and I didn't actually enjoy writing code.

**Jerod Santo:** Not simple enough for you. Too complex.

**Ben Johnson:** Yeah.

**Jerod Santo:** Well, if you were just more clever and wise, Ben, you could handle the complexity.

**Ben Johnson:** There you go. That's the problem. I feel like you can get 95% of the things in Rust with just -- Go has the race tracker, and there's other ways you can kind of emulate some of that stuff... It won't get you the perfect Rust safety, but I think you can get pretty close.

**Jerod Santo:** The only thing on my list that we haven't talked about yet is mixing and matching. So oftentimes you're picking - when we go back to databases, you're picking a database. And I think that it's common to believe that you have to just pick one and go with it... And there's no rule in the rule book for programming that you just have to have a singular database. And I know lots of companies have multivariate, or whatever you call it, multiple data stores, depending on what they're up to... Pretty common at least to have something a relational database and then also have something else, depending on what you're up to. Oftentimes that is a key-value store, often used as a caching layer, but can be used for other things as well. Have you ever gone multi-database in projects of your own, or...? You've seen people do it, I'm sure.

**Ben Johnson:** Yeah, or at least projects I've worked on have gone multi-database. I feel like there's so many consistency issues, though, you tend to hit, just trying to keep everything in sync, and that can be its own headache. So I think unless you have a really good use case for it, or the performance is significantly better... Or maybe it's just data that -- I don't know how to describe this exactly, but it's data you don't really care as much about. So a lot of times, if you have metrics, for example - you can throw those in time series, and it doesn't have to sync up with your relational data or whatnot.

So yeah, I think time series is a great example of something where you can get something that's 10 times faster than the relational equivalent. So it makes sense. Although you have timescale, which works in Postgres; everything works in Postgres, right? But I think there's certain use cases for specific types of databases like that.

**Jerod Santo:** Yeah. One that comes to mind just because it's open source and we've spoken a couple of times with the creators of it is Plausible Analytics. And they use Postgres for their standard data, but then the actual analytic data, they use Clickhouse.

**Ben Johnson:** Oh, okay.

**Jerod Santo:** And so then it's columnar, I believe. I've never used Clickhouse. I think that one's open source... It might be open source-ish. You never know anymore.

**Ben Johnson:** No, I mean, people like it, but I know there's a company behind it. I'm not sure what parts are open source.

**Jerod Santo:** Yeah. It's just the whole open source project plus business thing has gotten very gray in the last couple of years, as the sands of time are shifting underneath us. Redis was once open source, isn't anymore. Elastic, of course... We haven't even talked about Elastic, but... I think Clickhouse still is pure open source, and then has probably a hosted service for you. That's my guess.

**Ben Johnson:** That would make sense. Yeah. I've heard it's good though. People like it.

**Jerod Santo:** Well, Ben, anything else about databases that we haven't discussed? I mean, there are lots of other things about databases, I'm sure, but... Anything that was on your mind or you think would be helpful for folks before we call it a show?

**Ben Johnson:** I think your advice of just picking Postgres is probably a good thing.

**Jerod Santo:** No, it's supposed to be an It Depends, Ben.

**Ben Johnson:** No, yeah, it's --

**Jerod Santo:** No, I said "Just start with Postgres."

**Ben Johnson:** \[00:58:01.07\] Start with Postgres, yeah. But I think there's so many areas you can kind of delve into, and I think there are definitely use cases for people that need something faster, or whatnot. It's interesting, a lot of these kind of niche databases came because you can get a 10x performance if you relax certain constraints. If you don't need a certain isolation level, for example, you can really go a lot faster. So I think kind of delving in and kind of understanding your data, and what the needs are, and what constraints you have can really help you kind of pick out which database works for your situation and what performance needs you actually have.

**Jerod Santo:** Good advice. Good advice, indeed. And last question for you, Ben... How do you make software simple?

**Ben Johnson:** I think you have a -- I think it's good to start with a vision of what you're trying to make, and then just stick with that. And then instead of trying to figure out -- I don't know, I think I have an allergy to writing more docs. So if there's weird edge cases and whatnot that it's going to create, I try to avoid those, so I don't have to document them. So if I can give someone just the simplest command to just do something that they want, and keep the doc simple, then I think that's a great way to go.

**Jerod Santo:** So do you believe that the simplicity needs to exist at the interface more so than at the code? Meaning, do you hide the complexity from the user, or do you design out the complexity? How do you go about it?

**Ben Johnson:** I think you have to design out the complexity, honestly. I think that any kind of weird complexity in your code is going to seep its way out into the UI, because you're going to have to account for it when things go wrong or whatnot.

**Jerod Santo:** Right. And how do you go about designing out complexity? Do you take a lot of walks? Do you draw things --

**Ben Johnson:** I do take a lot of walks, actually. It helps a lot.

**Jerod Santo:** \[laughs\] Do you have a whiteboard?

**Ben Johnson:** No, actually I don't really whiteboard that much. I just do a lot of iterations. I tend to write kind of the application domain out, without so much concern of the underlying dependencies... Whether it's a database, whether it's a file system layer or whatnot. And just try to understand kind of what those entities are that I'm working with. It's almost like normalization in databases, figuring out kind of where your tables split up, and how they relate to each other. You kind of start from that. And then find ways to simply build in your persistence, or your interface via HTTP, or CLI or whatnot.

**Jerod Santo:** Yeah. I'm going to go back to Jamis Buck one more time, because I think he said two things that really stuck with me, and I'm going to reference them both in the same show. The first one was about simplicity that I said earlier. And then the second one he said is that when he designs an API or when he's building an API - and we're talking about not like an HTTP API, but a function name, parameters, a library, etc. That he actually starts with using a fake one that he wants to use. And so he will just call a function that doesn't exist, and pass it what he wants to pass it as the user of that thing. And he works backwards from there to create all the things behind it that would actually make that API exist. And so it's very similar to what you're describing there.

**Ben Johnson:** Yeah, that's a good way to do it too, for sure.

**Jerod Santo:** Yeah, so I submit that to you and to our listener as a way of at least try it out, see if it works. It's similar to TDD in certain ways. I think he was talking about TDD when he said that. Anyways, alright. Good stuff. Appreciate it. We have officially It Depends on databases. It turns out "Just start with Postgres", but don't necessarily stop there, depending on your particular use case. Anything else, Ben, before I let you go?

**Ben Johnson:** No, I think that covers it pretty well. Thank you.

**Jerod Santo:** Cool, man. Well, I appreciate the work you do, I appreciate you coming on the show 10 times now... And I'm going to go write a SQL query to see if you are our most guested person.

**Ben Johnson:** Maybe.

**Jerod Santo:** You might be up there, because you've been on so many different of our shows. I can't think of anybody else who would be hitting double digits, but by the time we'll ship this, I'll throw it in the outro, and we'll see if we can crown you the most frequent Changelog guest. How do you feel? I mean, you're at least in the top five, for sure.

**Ben Johnson:** Good, yeah. I like talking to you guys. I don't think it's that you guys invite me on so much, it's just more that I'm old and I've been around long enough...

**Jerod Santo:** You've been around a long time? Well, there might be some truth to that, because we haven't had you on for a while.

**Ben Johnson:** Yeah. I remember meeting you guys at like I think the first or second GopherCon in 2014, o '15?

**Jerod Santo:** '14 or '15. Yeah, I remember that as well. So we were all around back then...

**Ben Johnson:** Yeah, early days.

**Jerod Santo:** Yeah. Similar ages. Yeah, so you haven't been on the show since July of last year. You were on The Solo Gopher with Kris and Ian on GoTime. Your first appearance goes back to the Changelog 170, 2015. It looks like it was just me and you on that show. "BoltDB, InfluxDB, and Key-Value Databases." So there we are, a decade ago, talking databases.

**Ben Johnson:** Man.

**Jerod Santo:** And here we are... That's cool.

**Ben Johnson:** Still here. Yup.

**Jerod Santo:** Alright, good stuff. Appreciate it, and... That's all. We'll talk to you all on the next one.

**Ben Johnson:** Cool. Thanks for having me.

**Jerod Santo:** Bye, friends.
