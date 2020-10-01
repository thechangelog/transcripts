**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about Postgres. I'm joined by regulars, Jon Calhoun and Johnny Boursiquot. Hello, gentlemen.

**Johnny Boursiquot:** Hello.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** And we're also joined by a special guest, it's Johan Brandhorst. Hello, Johan.

**Johan Brandhorst:** Hello, Mat.

**Mat Ryer:** Welcome to the show. I should say welcome back to the show... I noticed your Twitter bio says that you're actually a maintainer of quite a few gRPC projects.

**Johan Brandhorst:** Yeah, that's right.

**Mat Ryer:** So you'll have to come back and do a different show about gRPC sometime.

**Johan Brandhorst:** Oh, I'd love that.

**Mat Ryer:** Yeah, we should do that. Aren't you working on gRPC, or something? Or you've just started somewhere?

**Johan Brandhorst:** Yeah, so I've just started a new job at a company called Buf, where we're working on stuff related to gRPC, but more specifically, around API management and making protobuf easier to use, basically.

**Mat Ryer:** Very cool. A lot of the gRPC repos you have are about making gRPC easy to use, like on the web, and things, aren't they?

**Johan Brandhorst:** Yeah, exactly. Especially at the start of gRPC, when it first came out, it was kind of dropped out of Google, and then obviously, you're expected to know as much about it as anyone at Google... So there was a lot of space for blogging and creating exemplary posts for \[unintelligible 00:03:18.09\] so familiar with the packages.

**Mat Ryer:** Yes. Great. And you also recently spoke at GopherCon EU about... What was the subject?

**Johan Brandhorst:** Postgres, yeah.

**Mat Ryer:** Postgres. What a great link. Not like an href, I mean like a proper one. Radio link.

**Johan Brandhorst:** Like a foreign key? \[laughter\]

**Johnny Boursiquot:** Oh, nice...!

**Mat Ryer:** Here we go...!

**Johnny Boursiquot:** This is gonna be a fun show.

**Mat Ryer:** It's gonna be either fun or chaotic. Let's find out. We should maybe start just at the very beginning... For anyone really new to programming, what is Postgres, and why would you ever use it?

**Johnny Boursiquot:** Oh, stop them. Stop them. \[laughter\]

**Mat Ryer:** If we've stomped in there, we are gonna have a troublesome show... \[laughter\]

**Johan Brandhorst:** \[00:04:09.22\] I kind of gave a whole introduction about this at the presentation, so I should know... Basically, what I said then was whenever you want to store some data that needs to live beyond the lifetime of your application, you'll probably want to use a data store. You can write to disk, for example, you can create a file, or whatever... But as soon as you want to do things like filter on the result sets, or read concurrently, or things like that - everything becomes much easier with a purpose-built application. And Postgres is one such application.

**Mat Ryer:** Yeah, that's great. So yeah, saving data... Not just dumb saving, like you say; sticking JSON into a text file, or something, but slightly more sophisticated things than that... And of course, Postgres has been around a while as well, hasn't it?

**Johan Brandhorst:** Yeah, it's over 20 years old now, actually. It came out of Berkeley, I think. It was a project that they were working on internally, and then they created an open source project out of it. That's why it's called Postgres; it's a post to something called -- I can't remember now. That was a poor lead on the--

**Mat Ryer:** That's alright. It's the post to something called Gres.

**Johan Brandhorst:** Exactly. That's kind of where the name comes from, actually.

**Mat Ryer:** Yeah, right, it makes sense. So Gres maybe was like a database before it.

**Johan Brandhorst:** Yeah. \[laughter\]

**Mat Ryer:** I mean, we can guess... Next week we're gonna be guessing the origins of the name Rust. \[laughter\] Okay, so Postgres then - it's been an option for a while; as you say, it's been around a while. What makes it a particular favorite of yours, compared to alternatives? Because there are lots of alternatives... And MySQLite for example is quite an interesting--

**Johan Brandhorst:** SQLite is also another popular database, like Postgres. The cool thing about SQLite is that it all works in a single file. Postgres is a little bit more complicated than that. But the big thing that Postgres has over SQLite in Go specifically is really good library support... Unfortunately, the SQLite driver that everyone uses is a cgo driver, and as most of you probably know, cgo means building with C, it means longer build times, it means less portable binaries, and stuff like that. In Go with Postgres we actually have several different pure Go libraries to speak with Postgres, which is really great. So that's just one reason to use Postgres.

But other things, such as the stability of the software, for example - as you say, it's over 20 years old. It's been used by thousands of companies worldwide. It's not gonna just corrupt your files, because those bugs have been ironed out by now. So within databases I think you often say you don't wanna use something that's less than ten years old, because this data needs to live for a long time. You wanna make sure it doesn't corrupt on the disk, or whatever... And Postgres is one such stable, mature solution.

It's also very fast, because it's written in C, and C is fast... And it's easy to run; you can provide containers for running in the cloud, or running it locally. You can also install it locally; you'll be able to install it on basically any operating system that you're running... And many cloud providers have especially built databases like RDS and GCP Cloud's SQL, for running Postgres-compatible servers... So you can just talk to Postgres anywhere, basically.

**Mat Ryer:** Yes, because it has a SQL interface, doesn't it, at its root?

**Johan Brandhorst:** Yeah. Well, the wire interface is a little bit different from other things. When I say "on the wire", it means the interface that you're really talking over the network. Obviously, to the user it provides a SQL, the structured query language interface, so you can do things like select and update and insert. So as a user it provides a similar interface to other SQL databases that you may have used... But on the wire, so to speak, it's a little bit different from, for example, MySQL.

But actually, Postgres has kind of spawned its own little sub-genre of databases. Because Postgres is so popular, a lot of other databases implement their wire format in the format of Postgres. For example, CockroachDB, which is a large, popular, well-funded startup that's basically taken Postgres and made it more easy to deploy at a very large scale, with the clustering and geo-distribution. For example, that implements the Postgres-wire interface, so that you can basically pretend that your CockroachDB database is actually a Postgres server, and you can use the normal Postgres Go drivers to work with CockroachDB.

**Mat Ryer:** \[00:08:40.25\] Hm. So as a programmer, what's it like to use -- presumably, you create tables at some point, and a table has columns, and there's data types, and things... Is it that familiar, the sort of spreadsheet kind of mindset? If you imagine a spreadsheet, it's that sort of thing, isn't it? Is it the same for Postgres?

**Johan Brandhorst:** Yeah, so you can say that it has rows and columns, of course... So you can imagine a matrix where each row is a new entry of data, and each column is a different data type or field in your schema... So it's built on SQL. That means that you have to define your tables in the SQL language before you start working with the data. So in contrast to something like a document database, where you can just take a blob of JSON and insert it, and again read it out when in Postgres and other SQL databases like it, you have to predefine the structure of your data.

So you will say "I want a table of users, and I want the users to have exactly these fields", and you can only insert data with that structure and you can know that when you're reading data out of it, it will have that structure. So it's much -- I kind of prefer saying that it's like going from using Python to using Go, in that you get that typing included in your data structures.

**Mat Ryer:** Yeah, absolutely. There is a nice freedom you get with document stores, because it feels like you can just throw anything in and query it and it works... And of course, if there's different shapes of data, that's no problem.

In practice, it turns out to be a little bit of a poisoned chalice, because often you've just moved the problem. You still need a schema, you still need data structures. They exist. You may not have discovered them upfront. But with a technology like Postgres, you do. You have to sort of plan a bit ahead.

So for example a table then, if we were modeling a blog and we had blogs, and we had posts, and then comments - we might have a table for blogs, a table for posts, and a table for comments. And that's because each of those data types looks different. A comment might have an author, and a timestamp, as actually they all might. But those other fields might be different. I can't think of another example.

So that gives you this sort of idea. And then they link together by referring to the primary keys in those other tables. I just wanna give a very basic kind of overview for anyone that really hasn't had a chance yet to play with databases properly.

**Jon Calhoun:** I think your spreadsheet analogy is a pretty good one for anybody who's never used Postgres, or any SQL database... Where essentially, you just have to predefine the columns up top, and then you can't have multiple sheets that are connected. So like when Mat's talking about having IDs that link to other tables, it's almost like you have your user spreadsheet, and then there it might say "Okay, if you wanna find this user's purchases or something, you have to go to the purchases spreadsheet and find all the ones where the user ID column has that user ID." I think that's probably one of the biggest differences between a lot of other types of databases, is that in a SQL database you're generally running queries to join that data, to connect them all... Whereas in a lot of NoSQL databases you do a lot of that work upfront, to get whatever format you need it in... And that can be good or bad, depending on the situation.

**Johan Brandhorst:** Yeah.

**Johnny Boursiquot:** \[00:12:11.13\] I've heard from people who deal with very large scale that at some point the relational model - be it with MySQL, Postgres, Microsoft Access, whatever you wanna use... \[laughter\] Microsoft Access - I have nightmares about that still... Yeah, so at some point the relational model - they say that it starts to break down. I'm curious, has any of us on the show here ever reached that sort of theoretical boundary where having a relational model really starts to break down in terms of speed of access... Or really, once you start having such complicated business logic that you have the number of tables you're joining start to create a performance barrier, and basically how you'd go around that.

**Jon Calhoun:** I can say for me -- I've had cases where very complex queries joining a bunch of different tables caused us to have really slow queries... But almost every time it wasn't that the database couldn't handle it, it's that we were doing something else wrong. Or we had to optimize something else.

The simplest example of this is if you set up a database and you don't have any indexes, so there's no sorting of your fields there, and you're looking up users by email address - well, that'll work pretty fine; it'll work well until you have a certain number of users. And then at that point, eventually, it's just gonna take too long to scan the entire database for all those users. But the way you fix that is you add an index and all of a sudden that query becomes quick again. And basically, my experience for -- now, granted, I think there is some upper threshold, but all of my experiences have been that we've basically just gotten into one of those situations where we need to understand the problem better, and define indexes or something to simplify it in some way.

**Mat Ryer:** Yeah, denormalization is something that comes up when I think about this kind of thing, because often that's a decision that you make really for performance reasons... And with relational databases - they're nice, because you can kind of query them in different ways later. You can join in the query itself, make different joins on the data, to mix data in different and new ways. So that's very nice, if you're exploring possibilities with an existing application. If you contrast that to document stores, where you're just storing basically JSON blobs, you have to pre-prepare everything in that JSON blob really, or have some tech around it to simulate that.

Maybe there's a way when a user changes their profile picture, maybe there's a task that goes back in a document store and updates all the previous times that that was copied... And you wouldn't need to do that in a relational database, because of course you're joining it at runtime. And that's another time when - at least when I think about this at massive scale, that's why document stores exist, isn't it? ...it's because at massive scale that data is probably distributed geographically, and just joining it is not as simple as just reading from one place. That's one of the problems we have with it.

**Johan Brandhorst:** I think that's one of the problems that Cockroach is trying to solve, as well. So they used a Raft algorithm to have a leader/follower relationship between nodes, so that the data is replicated across different geographical nodes. That's how they try to solve that sort of thing. But yeah, that's definitely one of the problems with Postgres specifically as well, like "How do you do that sort of data replication otherwise?"

**Johnny Boursiquot:** \[00:15:45.10\] I wanna pull on that thread a little bit, because depending on how much data you're dealing with, it's usually unclear... If you're reading a blog post, reading off content out there, you'll eventually run across \[unintelligible 00:15:57.16\] as well once you reach a certain scale; the number of, say, read replicas you're gonna have stops being good enough... And there's various metrics you can use for that. I think it's gonna vary from team to team, and probably domain to domain.

Then you're gonna see some advice around "Well, yes, it's good to store your 'transactional' data in a relational store", but if you wanna do things like reporting, for example, these kinds of things should live in a separate database, whereby you have a lot more denormalization going on, maybe you're using a data warehouse, maybe you're using a different approach altogether; maybe you're using star schemas, hybrids, or whatever the case may be, but you're really moving away from the use cases. You're splitting the use case, whereby you might have an application which is - this is where your users are using your application, and pumping a lot of data in there... And maybe you might have a read replica for their read-heavy actions... But for your internal business users, or even for a separate product, that's realized quite heavily on computation and reads, and sort of reporting, creating dashboards, and things like that... Maybe you wanna move that data to a different database system altogether.

I've seen Postgres using both of those cases. You can create your schema, to use a common terminology from my data warehousing days... You can create a star schema also in your relational database. It could be a separate user, it could be a separate database, but you can use the same traditional relational databases to actually create those.

So I'm curious what our collective experiences have been with regards to how soon do you make that split in your applications? Or do I go for as long as you can, where I say "Hey, you know what - using Postgres is just fine. I don't need to bring in new tech to do reporting. I can just create another schema inside of my existing server and I'm good." So what is the advice, first of all, with regards to transactional versus pure reporting OLAP data, versus - you know, do you keep everything in one system? What are the things you're considering before you make that decision?

**Johan Brandhorst:** Well, that's a big question...

**Johnny Boursiquot:** We ask big questions on this show.

**Jon Calhoun:** I'm very much a "If it isn't broke, don't fix it" type person, but that's only because it's bitten me so many times to do that... So I very much will stick with Postgres until I'm absolutely certain I cannot solve this problem without it.

**Johnny Boursiquot:** And when is that for you? What is that?

**Jon Calhoun:** It just depends, is the problem. I've talked to people -- in multiple cases, I've heard hundreds of millions of rows works in SQL databases, fine. But I also know there are some tables where that probably doesn't work because of how much data you're storing, or whatever else it is. There could be something weird there. I think it just really depends on this specific problem what you're working on... But for me, it basically just came down to like, if I'm actually seeing bad performance, then I start looking at "Is there a way to fix this within Postgres?" Or "Is there gonna be a better long-term solution?" is sometimes also the thing you look at, to switch to something else. So it's really hard to tell somebody when they should do it, because it just really depends.

**Johnny Boursiquot:** It sounds like you've narrowed it down to just performance though, right?

**Jon Calhoun:** For me that's what it's mostly been... But it's kind of hard to say, because if I could put a little bit of effort into this and get the Postgres to work, that's one option. But if I know it's gonna continuously cause more issues down the road for us developers to maintain, then at some point, even if we can get the performance there in Postgres, it might not make sense to stay there, if it's gonna cause a lot bigger developer headache over the lifetime of it.

**Mat Ryer:** You could always just stick a cache in front of it, and then it doesn't really matter how fast it is at all... You can relax a bit then.

**Johnny Boursiquot:** Mat, is your cache also on your database server?

**Mat Ryer:** \[00:19:45.13\] Actually, that's a good point, because sometimes you want to have data ready in a different format... So sometimes these queries might be slow-running, so you wouldn't do them while a user is waiting in the browser for the answer, but maybe you do it on a schedule (I don't know) and save the results each time, and then they're easier to read. And then I potentially would do that in the same database... They're the sorts of things you do to address performance problems. I think we get a little bit obsessed with the performance of individual components, and sometimes when you step back and look at the whole system, it might end up being insignificant compared to other things.

We should do an entire episode on caching, because that is its own world of pain... You know, very powerful, but not something you have to worry about too much, unless you get to big scale. I think that's the other thing - most projects stay quite small, and that's why you don't have to worry so much about performance.

**Johnny Boursiquot:** Along those lines, when we do have that show - and I'm gonna hold you to that - on caching (and I think we do need to have one), I do want us to talk about views, specifically materialized views, in database technology... Because what I've noticed - it should be no surprise on folks listening to this show - I work for Heroku and we probably have the largest fleet of Postgres databases for our cloud platform - that's our bread and butter. And we see all kinds of different patterns of usage for Postgres. And my single biggest takeaway from my experience there has been that folks underestimate how much power Postgres has. They're quick to bring in other technologies to solve certain kinds of problems that they don't necessarily need to. Maybe that's being driven by hype... "Oh, let me go try Cockroach." Well, why? "Well, I wanna use NoSQL." Well, have you tried to model your domain? Have you tried to model your business problem? What kind of data are you dealing with? Is it graph-like, is it relational in nature? There's a lot of work that is missing, and some pre-work that is missing, before you make that database technology choice. And if you don't know enough now to make the "appropriate choice" for your domain, start with a relational model, start with Postgres... You don't have to use Postgres; you can use MySQL if you want, but start with a relational model, because the tooling that exists for relational databases... I mean, relational databases have been around for many, many, many years; a lot of hard problems that have already been solved.

So the tooling, and the domain knowledge, the developer mindshare - all that stuff is there. The NoSQL stuff is still -- I mean, there's wide adoption for it, but there's not nearly as much content on how to solve different kinds of problems - performance problems, operational problems - as it is in the relational world.

So you can start with -- just start out with Postgres, it's fine. And then just like Johan's saying, you address your performance or scale problem once you reached that point where you can actually pinpoint, you can actually see based on metrics, based on your utilization, hopefully you have monitoring going on and you can see what your performance looks like from day to day, week to week, month to month... Then you're making decisions based on data. Not on a hunch, not on the latest hype, not on what big, famous tech company has just published a blog post about using something else instead of Postgres, or something like that... Base your decision on what your actual needs are. And I'm curious to hear what Johan has to say about that, because he's been quiet... And I don't want you to be quiet.

**Johan Brandhorst:** \[laughs\] No, I was sitting here, nodding along to what you were saying - start with Postgres... Because I think a lot of users come into this space knowing what to use, and there's was kind of a hope with my talk just giving you introduction to something you can use, some opinionated tips on what libraries to use, and so on... Giving you a head start, just getting started with actually moving away from the problem of choosing a technology, and actually using a technology to solve your problems.

I really agree with that sentiment, that a lot of people will try and google "What should I use to store my data?" or even read some popular programmer's blog where they have tested out the latest technology and found it to be really good for their very specialized use case, and then applied that to all of their problems, because that's all they know. You know, starting with something well tested, well established... Like you said, it's good to develop a mindshare like Postgres; it will take you very far before you need to change.

**Break:** \[00:24:17.15\]

**Jon Calhoun:** I think there's also probably the issue that MongoDB is so easy just to throw data at, like Johnny said, without even thinking about what your schema is going to be or what data you're going to have... But I think when people are first learning, sometimes it's easier just to have something you can throw stuff at and not care about. And I think that just sort of sticks, because -- at some point, if you want to use Postgres, or really any SQL database, you have to learn SQL to some degree... And then as you get to more and more complex queries, and you get more and more data, you have to learn it even further... And I think some people just don't like that learning curve; they just don't like to have to invest into that. But I do think that's often a mistake, because -- we've talked about all these different use cases for SQL, and I've seen so many great cases where you get so much by using a SQL database.

One company I worked for, our entire metrics dashboard was just a couple of SQL queries that you fed into the graphing software, and it just spit the whole thing out. So we didn't have to do any work, and we could get pretty much any metric we wanted graphed, and anybody who was on the sales team or whatever could track these things really easily. That was really powerful, because it wasn't a massive developer effort to get them these things they needed. It was "Okay, just tell me what you need and I'll write the query for it and you're good."

And I think people get worried that -- like Johnny said, they think that it's gonna cap them somewhere, and I think that they don't realize that more than likely if it actually caps you, you're at a stage where you can invest in experts, people who specifically this is what they focus on for their entire career, and they can help you figure out good solutions... And you're gonna need somebody like that at that point. But if you're not at that point, you can almost just bring somebody in to consult for like one day, who could probably come in there and get your database running 100 times faster than it was, just by looking at obvious issues and teaching you how to fix them. That sounds like a lot, but it's really not, in comparison to investing in a technology that might not solve your problems and might lead to way worse issues.

**Mat Ryer:** Yeah, I think that's great advice. It's the same thing like in JavaScript and Go. Go has that type-safety, so if it asks for a string, you can only give it a string, and it's enforced by the compiler... A bit like how these table schemas - kind of enforcing that schema for the data, and any exceptions to that will be an error, probably. And of course, in JavaScript if something is asking for a string, you can say "No, here's a photograph of a cat, and that's it." JavaScript will say "Okay, cool. Thanks", and it just carries on.

**Johan Brandhorst:** I hate it when that happens.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** \[00:27:49.10\] Yeah, it's a good point; you don't solve any problems, you're just moving them. That's the thing. So it feels good just throwing stuff in a data store, but at some point you have to read it and use it, and then if it's not in the same schema, you've got even more work to do to figure that mess out.

But one of the approaches that I remember when I used to do relational database work in Ruby days were migrations... And I wonder if you can do migrations with Postgres. Migrations are, for anyone that doesn't know - essentially, in order to describe the schema, you run SQL commands. You might say "Create this table, and add these columns. Add this column that says String", and things like this. And of course, you can use the same kinds of commands to remove things as well. So migrations are essentially a little script that makes a little change to the database, accompanied by another little script to undo that change... And that allows you to move forwards and backwards through your database schema quite easily.

Do migrations exist in Postgres? Is it just something you would build yourself, or are there other tools already that help you do it?

**Johan Brandhorst:** In Postgres - obviously, as you were saying already, Postgres uses SQL, so any migrations that you want to do will have to be done with the @sql. I have a library that I quite like to use, which is called golang-migrate. Funnily enough, it's probably the first thing that shows up if you try to google search for it...

**Johnny Boursiquot:** That's good SEO right there. That is excellent SEO right there. \[laughs\]

**Johan Brandhorst:** Basically, it just has this structure of files where you order your migrations by lexicographically-sorted filenames... So basically, \[unintelligible 00:29:34.25\] the first kind of snippet of SQL commands that you want to run when you first start working with a database, which will then gonna be the thing that creates the tables and sets up any relationships between the tables, and then nothing else.

So the more interesting use case for migrations is later on when you decide that "Hey, we actually need to add some more information to this table here, but we already have a lot of customers in the table", we'd have to manually go through and add the email to all of them, or whatever. So a migration script looks at the existing data - you write some SQL to do this, of course... You write some SQL to look at the existing data and then adapt the existing data for the new table data that you've added with your changes. So that's really the key reason why you need migrations, really.

If you're a novice user and you find yourself never making any changes to the database, you could probably get away with not using migrations... But I quite like doing it from the start, because it means you can very easily pick it up again when you actually need to make those changes... And I often find that you do need to make those changes eventually. It's also a really nice operation between querying, which is something that you can -- there's a few different libraries in Go for querying data that don't actually do anything about creating data, or creating tables... And the migrations script, which is responsible for setting up and also tearing down the schema itself. So it's kind of a nice approach in between the two.

**Mat Ryer:** Yeah, and so when you instantiate a new database, it essentially just runs through those migrations in order, applying them one by one, and you know that you'll end up in the same state as your latest release, I guess.

**Johan Brandhorst:** Yeah. So you have to be a little bit careful, because often when you have a database, you'll want it to be used by several clients. And if you do something like an upgrade of a system where you shut down one server and you start up a new server that has a new feature, so you have both an old server and a new server speaking to the database at the same time, you'll need to make sure that the migrations are being applied in a backwards-compatible fashion, so that both of those clients can continue to operate at the same time.

But if you have a single server and a single database, then it's very easy, because you can just apply all the migrations when you start up, because you know no one else is talking to the database. That's really the simplest case.

**Mat Ryer:** \[00:31:55.14\] Yeah. It's nice also because you used to be able to try things out, and undo them, essentially. Often it's difficult to do -- sometimes you might be making destructive changes. If one of your migrations deletes a column, then you're gonna lose data. In the down script you can't put that data back... But assuming you've thought about it properly - yeah, you could be a bit more experimental with different data schemas, and then you either just don't commit the migrations, or you can roll back to a previous version, delete the future ones and try something else. Yeah, it is really cool as a tech.

Well, you mentioned the clients in Go... I'm interested, from a Go perspective, how do you actually use Postgres? And I'm even thinking in the context of, say, a website that is hosting a blog, at what point would you make the connection to Postgres? Do you tend to make one connection per instance of your code running, and then create sessions off that? Or would each handler make its own connection? How does it actually work from a Go developer's point of view?

**Johan Brandhorst:** Yeah, so if we take a step back and look at the standard library database SQL package, that actually has a connection pool built in. So if you come from another language like Python or Ruby, you might be familiar with putting something -- I think there's a PgBouncer or something like that which does connection pooling between your database and your client... In Go you don't need to do that sort of thing, because it's already built into the standard library. So what you would normally do when you connect to the database is just create a single SQL.db handle, and then that's safe for concurrent use. So you can use that in all of your handlers, even though they're being called from different goroutines, from different clients.

You can also configure things such as max connections on the SQL connection, but normally that's all handled by the Go standard library, so you don't really have to worry about it, which is really nice.

**Mat Ryer:** So you do use the Go standard library then. Or do you use other third-party libraries?

**Johan Brandhorst:** This is not very common, actually, but my Postgres driver of choice, jackc/pgx - it actually has its own little interface as well for interacting with Postgres, which is a little bit faster, because it doesn't have to go through that compatibility layer, so it can structure things a little bit differently. It has binary encoding that it uses when it talks to Postgres, whereas the database SQL uses a slightly different encoding, as far as I understand.

However, I still try to use the standard library, just because it's compatible with the rest of the Go ecosystem, really. For example, if you have a query builder or some sort of generator to make calls to the database on the SQL.db handle, that's what they expect. And if you're using pgx, then you have the choice of choosing between the two. For example, I would use the SQL.db interface as much as possible, because most of the time, that performance is gonna be absolutely fine for you. But if you do have a specific use case, or you find that actually you're being bottlenecked by the standard library here, you can switch to the more efficient binary interface. I would only really consider it if you have to insert thousands of rows, or something like that, and you want to do it very quickly... Then that's something that you can do with jackc/pgx. You can switch to the binary encoding interface and do that within a single connection, and then switch back to the standard library one for normal interface handling.

**Jon Calhoun:** So one of our listeners had actually asked "How hard is the switch from lib/pq to jackc/pgx?" Because I think historically lib/pq was recommended as a library, but I think that one uses cgo, doesn't it?

**Johan Brandhorst:** \[00:35:44.17\] I don't think so. I think it's pure as well. But I used to use lib/pq as well back when I started using Go. But it hasn't really kept up with the advances that jackc/pgx has. I think jackc was later to the stage, but it's really picked up because it has this really rich type package, which implements a lot of the Postgres types, so you can work in a Go type-safe way with the Postgres types, like money, and date, and things like that. Postgres has really a lot of interesting types that you can take advantage of with jackc. And then it also has this second interface, which is optimized for speed. It has a really cool way of copying from an interface, so you can give it an interface and then it will kind of call a function on that until it's done. It's like, you give it an iterator. So I think jackc/pgx has innovated a lot in this space in the last 3-4 years, which is why it's taken over the crown from lib/pq.

**Johnny Boursiquot:** So I have to confess... I like using the standard library. And some of the things that bother folks, like having to map fields to different fields, from the database and over to your Go types - I don't find these things annoying as much. But when I do, I do like to use sqlx, which is probably one of the early nice little abstractions, nice little wrapper around the standard library database SQL package. That made it easy to ingest all your fields into a type all at once, as opposed to do all the scanning for different things... So it was for the vast majority of the projects where I need a relational data store, that I do rely on a combination of the standard library and just the sqlx wrapper.

I have no doubt that lib/pq, which probably still is by far the most widely-used Postgres library within the Go ecosystem - but I have no doubt that it works quite well, and I've used it as well... The new kid on the block. I'm not sure if it's new at this point; like, 3-4 years old. I haven't tried it though myself, but from what I've read, from the documentation, it has some very nice efficiency and performance gains that it has added. It doesn't use the standard database SQL approach.

I don't wanna be a wet blanket. It always comes as "Well, don't jump to the new fangle thing right away" kind of thing. Understand your needs first. And if you're gonna pick a driver, that's fine. I'm not saying use all the different drivers, and have different drivers do different things in your application... But again, perhaps that's the right approach. Perhaps using the standard library and sqlx for the vast majority of your application is good enough, and then the area where you actually need performance - maybe you're doing heavy batch processing, maybe you need to do lots and lots of inserts and you don't want the index getting in your way for your reads... Maybe you do use something specialized like that, right?

So for me, all of this comes back to pretty much optimization. If you pick something just because you hear it's fast, and you're making that decision "Well, I'm gonna go with that one", not knowing why you're going with a particular library, then that's where I'm usually "Okay, let's slow down a little bit. Let's understand why using the standard library or a thin wrapper around the standard library is not good enough for your use case." I have no problem with using the latest and greatest, if you can justify why you wanna use that.

At this point in my career I'm kind of boring. I don't like the exciting stuff, especially as an SRE. I don't want exciting with the things that I'm responsible for. It's really like "Beyond the standard library, what else do you need?" and "Can you get away with using the standard library, or some very thin wrapper around that?"

**Jon Calhoun:** A question for you, Johnny... You like using the standard library for it, but I feel like in my experience Postgres is the one that interacts the most poorly with the standard library. And more specifically, I'm referring to -- like, \`lastInsertId\` doesn't work... And then I think -- I don't remember which ones use which, but the characters you use for variables you're putting in...

**Johan Brandhorst:** Dollars, yeah.

**Jon Calhoun:** ...I know Postgres uses the dollar sign, and then the numbers...

**Johnny Boursiquot:** Dollar sign, yup.

**Jon Calhoun:** \[00:39:54.05\] ...and I think all the others use question marks... So one of the benefits in my mind of using the standard library is I can run my tests with SQLite, and have it in memory, and that's real nice, because I can just throw the whole thing out afterwards... But that's really hard to actually achieve with the standard library, unless you put in extra work that I generally don't wanna put in, because it's just not fun to do... So I guess what are the benefits you see from the standard library from that perspective, and for somebody who is just getting started with it, do you have any advice for those gotchas?

**Johnny Boursiquot:** Let me throw that back you... When was the last time you switched databases? When was the last time you said "You know what - I'm gonna start with Postgres, but I might end up with MySQL"?

**Jon Calhoun:** So I've never switched them in that sense. The only reason that it matters to me is that I like running SQLite for a lot of tests... Because that means that actually setting things up is a lot simpler. It's not "Oh, you need to install Postgres, and you need to make sure your database is up and running, and you need to do all this stuff..." It's literally just "Okay, I'm just gonna throw this thing in memory", and I can run all the migrations from that point and have the test go. So it's more of a simplicity type thing there... But I often find that it's hard to actually make work, because all the differences that exist.

**Johnny Boursiquot:** Well, I would say that while I see your point, if I knew that I needed to do some integration testing, I need to actually hit -- if I don't have enough abstractions around my testing, that I actually need to use a data store and communicate over the wire to a data store, I would just run a Docker version of Postgres. Heck, I have Postgres installed locally on my machine. No abstraction layer needed.

So I think it's just a choice, and I think Johan is gonna have some flavor to add to that... But personally, I wouldn't wanna use two different databases for my testing, however similar they might be... And I know you have a slightly different view on that, but I'm interested in seeing what Johan has to say about that, too.

**Johan Brandhorst:** It's great that you brought up testing, because that's one of the things I want to talk about today... And I agree with Johnny that if you have to make your tests so that you have to use one flavor of SQL to test, and another flavor to run, then - well, to start with, your tests might not be giving you the confidence you want, but also, there's a better solution today, which is that you can use automated Docker testing to create a Docker container during the lifetime of your test, and talk to that as if it's a real Postgres -- it's a real Postgres container, so you can talk to it like a real Postgres server, and then just shut it down after the test finishes.

That was something I demoed during my talk, and I think maybe the most revelatory thing that I really brought onto the whole talk - because people afterwards were like "Oh, this is so cool!" and yeah, I agree, it is so cool; it completely revolutionizes the way that you do database testing... You don't really have to have a Docker Compose script or whatever where you spin up a database, then you run your integration tests with a build tag on them or something like that, because you don't want to run them if you run go test, because someone needs to have a database running... And you also don't need to annotate your CI at testing with extra containers, or whatever; everything just works. You just spin up a database... This is during the runtime of your tests; it uses a Docker socket API to just spin up a database, take the IP and port of that database, talk to it during a test, and then shut it down immediately after it... And it runs in like three seconds total. It's mind-blowing when you see it for the first time, and I highly recommend you try and check it out.

**Jon Calhoun:** I'll have to check it out, because one of the reasons I like SQLite stuff is that if I'm running a bunch of tests concurrently, I can have a bunch of them loading up in separate instances of memory, and do stuff like that... But I do fully agree that you still need to test against Postgres, which is why generally speaking I'd more consider that something I'd run in my CI tool... So it happens there before it actually goes anywhere, but I don't have to do it locally as much.

And it depends from company to company. I think some of this stems from -- you know, coming from a Rails background, I think it was pretty common Rails to run one flavor of database locally and another one depending... There were definitely times where that bit you, but it handled a lot of stuff for you sometimes, so you could do it.

**Johan Brandhorst:** \[00:44:06.20\] Actually, another thing that's kind of related to this is one of my hopes for generics in Go is that the database interface in the standard library is going to get a bit of an overhaul... Because I think it's probably one of the weakest-typed interfaces in the entire standard library... Because you have to query, and then you have to give it a variadic slice of interface, which is as bad as it gets... I can't wait to see what we can come up with to make that easier to use... And I think that would also help maybe in this case, where we have a different sort of placeholders. I guess the dream of a database/sql standard library package is that you should be able to use it with any SQL database, right? Maybe even at initialization times say "I want placeholders to be question marks", and then everything else should just work... As long as you're using the SQL standard. That's the dream. And I think practically that probably doesn't work at all.

I think if you were trying to write a package that is supposed to be agnostic between different flavors of SQL and different databases, you're gonna end up making a lot of compromises that will compromise your type safety, compromise performance... And it's not really there, but I hope that generics could help in that area.

**Break:** \[00:45:27.07\]

**Jon Calhoun:** When you're talking about the performance stuff - Johnny, you mentioned actually just using the standard library, and writing your queries and actually inserting it into whatever field you need to... I've used ORMs and I find them useful in certain scenarios, especially when people don't know SQL that well, as a way to get them a taste for it... But I've also found that even if you're using sqlx, which is really not that much, you tend to write queries that allow you to use their tools to basically take all the data that you're pulling and putting it into a Go struct... Rather than writing the correct query, that might require you to do more work, but you're like "I don't wanna do that, so I'll run two queries instead" or something.

I've noticed that just weird queries like that tend to happen, where you almost write bad code because you're trying to leverage a tool a little bit more than just putting in the work to get it done the right way the first time.

**Johnny Boursiquot:** That's in my world -- at least in my mind, ORM is a dirty word. \[laughs\] I don't know, I'm generalizing here; obviously, it has its uses... But I've been a part of so many teams where we rely so heavily on ORMs, and they are great for the 80% use case; and then there's that extra 20% where you have -- you try and twist the ORM so much... And it's not the fault of the ORM, it's more like basically we're abusing it, or maybe we're nesting some things, or maybe we're using it in a way it wasn't intended, or it's too easy to make certain common mistakes and we end up creating way too much thrashing with the database, and you're doing n+1 type queries, and it becomes a performance issue, and then often you don't find out about these kinds of problems during testing. You will find out about them in production, because locally, typically, you have a smaller-sized dataset; you're not querying as much data, or maybe things tend to be hyper-optimized from a performance perspective when you're testing locally, because you don't want data or your querying to impact the speed of your tests, and things like that.

So you want that quick feedback. But at staging or in production, where the data volume is much higher, you go find out about these kinds of things in that environment, \[unintelligible 00:48:29.23\] And always somehow the ORM ends up being the culprit when I start to dive deep into "Okay, let's troubleshoot this problem. Let's figure out what's causing this problem." It's because the ORM allowed the developer to make those kinds of mistakes.

\[00:48:50.05\] Basically, when I talk about using a standard database SQL package, it's not because I believe it's superior to all other approaches, it's because my pendulum has swung from really liking the abstractions of the ORM to basically seeing being bitten by it so many times to basically say "You know what - I wanna write the actual SQL queries." I wanna know everything I'm gonna be writing in there; what the interaction is gonna be with the database, and I can do an explain plan on it, and I can see exactly what the cost is gonna be in the database server. I can actually see it; the same sort of values we hold dear in the Go community, that explicitness... It might be a little verbose defined, but I'm willing to pay that cognitive cost in order to get that clarity and know exactly what the query is gonna look like on the other side.

So yes, ORMs are great, and I think they're great for prototyping, but for certain parts of your codebase where you really need to keep an eye on performance... Maybe you have a really complex query, lots of things you're joining, and if you can't prove exactly how that's gonna perform in production, maybe you write the SQL yourself.

**Mat Ryer:** For anyone that doesn't know what you're actually talking about, ORMs - can we just illuminate that a little bit? What does it literally stand for? Is it like Object Relationship--

**Johan Brandhorst:** Relational mapping model, yeah...

**Jon Calhoun:** Object Relational Model, or something...? I don't know. Mapping? I don't know.

**Mat Ryer:** Okay, something like that. But what is it?

**Jon Calhoun:** So there's a couple different ways you can think about interacting with your database. ORMs are -- you essentially write code in whatever programming language you're in; that's Go for us. And your database, generally speaking, gets mapped to whatever that code is, and then you write queries in Go code, and that Go code gets mapped to some sort of query in the database. I think at a high-level that's the easiest way to put it.

**Mat Ryer:** Right.

**Jon Calhoun:** So you don't really have to learn SQL, you just write Go code using this library, and it handles all of that for you. Now, the next step that you occasionally see is generators, which -- I think SQLBoiler is one that's popular in Go... Basically, they'll look at your database and they'll try to generate Go code from the database. So they look very similar to ORMs, but they still use the database as the source of truth, and they don't try to translate the other way.

And then there's the kind of pure "Use SQL and translate back and forth yourself" approach, which is - you have a lot more control that way, so you can fine-tune everything. And I should say, Johnny, when you were talking about performance, and stuff - I generally view ORMs as a stopgap. You can use them, but you should have the mindset of you might have to replace them at some point, and you should be aware of that potentially being a risk.

**Johnny Boursiquot:** Actually, Mat, you may be able to shed some light on this, because there are ways to actually write your data access layer - in Go otherwise, but we're not specifically talking about Go here - that would allow you to do what Jon's talking about, right? To be able to swap out that data access layer with maybe another data access layer that doesn't use an ORM, but uses raw SQL instead. Like, what is the approach? What is the recommended approach here? What is the best practice, at least within the Go community, for writing -- for not spreading, sprinkling your SQL all over your codebase?

**Mat Ryer:** \[00:52:02.02\] That's a good question.

**Jon Calhoun:** That's probably my biggest issue with ORMs - anybody who's come from Rails has seen a view that has a SQL query in it... And somebody doesn't realize it's a SQL query because they're just writing Ruby code... But you see that and you're like "Why are you running queries inside of a view? That makes no sense." And I think that that's one of the biggest issues you run into with ORM - you get what should be database access layer code scattered throughout the rest of your application. So I don't know what your approach is, Mat, but mine is generally to define the few queries I need, or however many there are, and to basically make little services that are like "Okay, if I need to --" Let's say for users, like authenticating, creating accounts, that sort of stuff; I'll sort of define a little struct that has all the methods for that, and then the rest of my code just expects an interface that has those methods... And I pass in -- depending on the application, what I pass in will kind of change, but I'll often try to pass in something that's unspecific to the database as I can make it.

Now, there are exceptions... IDs in databases often tend to be integers of some sort, so that ends up getting into your code, in some sense... But there are other things you can -- or maybe not integers; maybe you're using UUIDs or something, but still, you get some of that in there... But you can still pull a lot of it out.

**Johnny Boursiquot:** Don't use auto-increment. Just a side note... Just use UUIDs. Trust me.

**Jon Calhoun:** Johnny. Let me use auto-increment.

**Johnny Boursiquot:** \[laughs\]

**Johan Brandhorst:** I don't!

**Mat Ryer:** So Johan, do you use an ORM?

**Johan Brandhorst:** Actually, I have never had the pleasure of using an ORM, so what am I doing on this show talking about databases...? Very early on in my career I was kind of persuaded against using an ORM, because naturally, as a beginner programmer, I was like "Oh, this looks cool..." But I never really had to use it, because I was told by someone who knew better than me that that was a bad idea... So here I am, saying to other beginners like myself once was that you should try not to use the ORM, even though it looks really appealing at first. You should probably just learn to use SQL. It's really not that bad, and you'll learn to love it, like I do.

**Jon Calhoun:** I would agree with that, having come from the other side... Because everything specific to Rails that I learned is useless to me now. And everything I learned about SQL along the way when I couldn't get that to work is much more useful to me, and it'll carry over to any language.

**Johnny Boursiquot:** That's right.

**Mat Ryer:** Well, that would have been an Unpopular Opinion section, but everyone agrees...

**Johnny Boursiquot:** \[laughs\] It's not that unpopular, I guess...

**Mat Ryer:** It's not happened before, where we all agree...

**Jon Calhoun:** Alright, so I have a question for the rest of you. Johnny, earlier you had mentioned that when you go to production, you sometimes don't notice performance issues, and that sort of thing... And earlier we talked about migrations, and that sort of stuff, so my question is "How do you guys handle testing for things like migrations, or things like performance, when generally speaking you don't have a dataset the same as production?" Do you have a nightly type environment or a test environment that clones the database, or do you take other approaches?

**Johnny Boursiquot:** We've taken several approaches... The one I've liked the most, and I like it because it was sufficiently complex that we had an elegant way of solving it... And because we were dealing with data, some PI data (personally identifiable information) in the system, we had to find a way to effectively not expose, not copy that data into multiple environments. We kind of created a compliance risk...

So what we did is basically watch the data -- when you have primary and other replicas, the primary typically needs to communicate changes to those read-only replicas... So if you tap into that stream, going back and forth - or rather typically going one way, from the primary (actually where you're writing your data) to the read-onlies, if you tap into that stream, you will see exactly what the changes are.

\[00:56:08.04\] So now we can sort of inject ourselves - basically, you can think of it as a listener - whereby we can actually see the data and actually keep our separate test environment up to date with that stream of information... And then during that copying over, we actually apply transformation to that data to remove (or to anonymize rather) the data before it actually gets stored on disk with the test environment.

That's an elaborate and more complicated way of doing it, but that's one where it was the most fun for me, because one, that's when I figured out basically how the replication was working between the primary and secondary nodes, and basically being able to transform the data in flight, before you write it to disk - that was a really fun technical challenge... But that's definitely one of the more complicated ways to do it.

**Jon Calhoun:** To make sure I understand -- so you have the lead database... I'm so used to bad terms, sorry. And then you have the follower. Did you spin up a new follower that you intended to use for test, one that was popping all the data over to that new follower, and that's when you did all the transformations?

**Johnny Boursiquot:** Well, it wasn't in the follower pool. Basically, the primary wasn't aware of that separate -- it's not really a follower, it's just a separate instance somewhere else...

**Jon Calhoun:** Okay.

**Johnny Boursiquot:** ...and basically we would be writing that data to it. Obviously, it was a little slower, but it was a test environment. It didn't need to be to-the-millisecond up to date. We could apply our transforms before the data got written. It was a way of actually interjecting ourselves in that process.

**Jon Calhoun:** Oh, so you kept this going all the time then?

**Johnny Boursiquot:** Well, yeah. Yeah.

**Jon Calhoun:** Okay. So it wasn't a one-time thing; you just kept it up to date, and then you could use it in the future.

**Johnny Boursiquot:** Yeah, we kept it up to date as the system changed, and we just kept our staging environment up to date.

**Mat Ryer:** It's really clever, because if you'd just read it normally, that of course would have been activity on the database, potentially...

**Johnny Boursiquot:** Exactly. It would have been another client, yeah.

**Mat Ryer:** Yeah... It's funny, because we're kind of looking at this exact thing, and it's basically -- as Johnny described, what we're gonna do is read from one place, I do the anonymizing thing, and what we really want is the shape of the data. We're not gonna read it; we're not gonna sit and read through things... So we'll probably scramble everything; we'll probably mix all the words up and everything, just so that you don't get -- because customer data, if you really care about that, then it's not acceptable to just copy the production database to test, to work on... It doesn't matter really what the data is, but... That's really clever though. I love the way that it was just -- it must have been some listener API, so it could receive the changes; that's a really smart solution.

**Johan Brandhorst:** Another way you can also test migrations specifically is actually write the test where -- if you have access to the migration files, you can kind of migrate to the first step, you can insert some data... Now, obviously, it won't be entirely representative of your production database, where you may have hundreds of thousands of customers, or whatever... But you insert some data, and then you do the migrations in the next step, and you check that that data was updated correctly. And you can do that for all of your migrations as well, and then run that as a normal test... Especially if you spin up a database with the dockertest container. So that's what I've been doing for some of my projects...

**Mat Ryer:** In only three minutes...

**Johnny Boursiquot:** Yeah. \[laughter\]

**Mat Ryer:** To be fair, I saw that demo that you did, and it didn't look real. It was so quick... Yeah.

**Johan Brandhorst:** I wanna say as well, the first time I ran that -- I had just formatted my PC, so the first time I ran it, I had to pull down the Docker image as well, and it still took 12 seconds in total... But the second time I ran it, it took three seconds.

**Mat Ryer:** \[00:59:48.15\] \[laughs\] We'll post a link to dockertest in the show notes, dear listener...

**Jon Calhoun:** I need to look at that myself, so...

**Mat Ryer:** Yeah. It's good. It's a good point, because you wanna test as close to that production environment as possible.

**Jon Calhoun:** Especially with like migrations and all that sort of stuff - if you're doing anything complex, it can be really hard because you might have data that you just don't expect to be in the format it is, or something. I've definitely had one or two cases where we were running Rails migrations during a deploy, and all of a sudden something breaks and everybody just loses it, because you're like "I don't know what's happening right now." And it's just hard if you somehow missed it in a test, or something; you have to find good solutions for that.

**Johan Brandhorst:** Yeah. Even the solution that Johnny was proposing may suffer from that issue, because you anonymize the data, and all of a sudden you took out all of the Unicode names, or something... You can never really be sure, unless you're doing it straight up against your Postgres test database, right? \[laughs\]

**Johnny Boursiquot:** And production. \[laughter\]

**Jon Calhoun:** That's terrifying though.

**Mat Ryer:** That can't be our advice at the end of the show... "Test in production."

**Johnny Boursiquot:** "Test your data changes in production." \[laughs\]

**Jon Calhoun:** One last question then... Somebody on Twitter had asked "Why do we import the underscore for SQL packages?

**Mat Ryer:** I think this is left over from not a great design decision in the early days. I don't think anyone would design packages today that use this underscore import thing. Isn't it where there's an init function, and obviously when it's imported, the inits in a package will run, and they can sometimes then interfere. They can import other packages, they can set variables, they can do these magical things in global space.

**Johnny Boursiquot:** It's a huge side effect.

**Mat Ryer:** Yeah, yeah.

**Jon Calhoun:** The worst part is I think all they do is they call \`sql.register\`, and they pass in a name, and then they pass in the driver. I think that's literally the line.

**Johnny Boursiquot:** Well, you hope, yeah... You hope... \[laughter\]

**Jon Calhoun:** You hope that's all they're doing... But the worst part is I look at it and I'm like "If I had to import this package, I could have just written that line myself and been done with it."

**Mat Ryer:** That's right, and I think that was it. It was before we had a lot of experience with Go, I think. It was early days, where that just wasn't obvious. It seems really quite obvious now in retrospect. It's the same with the image packages. If you wanna support gif and JPEG and things, you just have to make sure the packages are imported; you don't use them. It's so weird, and I really don't like it. It's no harm to just say \`sql.register\` and pass the thing in. It's a a bit more verbose... So if you're designing packages, then please just make it verbose. It's so tempting to want to be very nice and make users' lives very easy, and do everything for them... But yeah, I think that's one example where you shouldn't try. Don't try and be too clever, just let them import a package and then use it. And if they don't use it, don't import it. Don't have any side effects to importing a package.

**Johnny Boursiquot:** This is one of the cases where ignorance is not bliss.

**Mat Ryer:** \[laughs\] Yeah.

**Jon Calhoun:** Once you understand how it works, it's still not ideal, but it's not as terrifying. But I completely understand the first time anybody sees it, they're like "Look, there's magic in Go", and I'm like "Not really..." It just requires you -- it forces you to learn about init, which in some ways I'm like "We don't really wanna teach people about this."

**Johnny Boursiquot:** \[laughs\] Stay away from globals, generally speaking, and stay away from init...

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Is it time for Unpopular Opinions? I want an unpopular opinion from Johan.

**Johan Brandhorst:** Oh, I can do that, actually.

**Mat Ryer:** Okay, well then let's do it!

**Johan Brandhorst:** I could do an unpopular opinion...

**Jingle:** \[01:03:59.22\]

**Johan Brandhorst:** I have this library that I like to use, which is called Squirrel, and it's a query builder. It uses the builder pattern. Everyone hates the builder pattern in Go, right? And for good reason, because the builder pattern doesn't work well with the static typing that Go provides, because we don't have generics... And Squirrel suffers from this problem as well, but it also provides a lot of power at the same time.

So it's like, the one exception to the rule of "Don't use the builder pattern anywhere" is for query building use the Squirrel package, because it's really easy to use at constructing queries with.

**Mat Ryer:** So the builder package then, for anyone not familiar - this is where you get these fluent APIs where every method returns the main object itself, and--

**Johnny Boursiquot:** Right, you chain your calls.

**Mat Ryer:** ...then lets you chain them. Yeah, right

**Jon Calhoun:** And I should say, I hate these... Because you can't define interfaces that work with them, at all. It's just a nightmare. So I do have one question, Johan... Could you reconstruct the Squirrel package using functional options?

**Johan Brandhorst:** Potentially...

**Jon Calhoun:** Because I've looked at GORM, which is a big ORM for Go, and I'm pretty sure you could rewrite a vast majority of it using that; I just don't think that was as popular when those libraries were written.

**Johan Brandhorst:** You're right that it's annoying to use, because you can't construct an interface that works with it... In the cases where I have been using it, it's usually just like in a single API layer; you're just using it through that package, and you don't really have to pass around in any kind of generic way.

And also, Squirrel does provide a few interfaces for working with the standard library. It has a BaseRunner, or whatever... An interface that describes how sql rows behaves, so that you can operate on that and pass that through functions if you want to.

I find it the one exception to this rule, but generally, the builder pattern and (like Mat described) fluent interfaces like that just don't work very well in Go. That's my unpopular opinion.

**Mat Ryer:** It is a bit unpopular, because I don't know that I would agree. I'm just looking at the syntax... You're sort of writing strongly-typed code, so there's that; because obviously, the alternative is just a SQL string, I assume... But you lose that sqlness, don't you? It doesn't say "select star from table." You lose that a little bit. But you do get type safety.

**Jon Calhoun:** The reason I ask about the functional options one is that if everything returns the same object, that means that every option function is essentially just going to be a function that accepts that one argument, and then you can just list a bunch of them as things you're passing into like squirrel.query, and then you pass in all your options for it. I think that's the type of library that probably could be rewritten like that, and it might work a little bit easier in some ways... I'm not positive...

**Johan Brandhorst:** Me too. \[laughs\]

**Mat Ryer:** It'd be a good exercise. I'd like to see you try that, Jon... Live, on Twitch.

**Johnny Boursiquot:** \[laughs\]

**Jon Calhoun:** Well, I've done it with GORM a little bit. Not the whole thing, because that would just take forever, but I've definitely toyed with doing some of it, so I know there's -- the hard part is there might be some weird edge case I don't know about, and you almost have to do the entire thing exhaustively to see if it works.

**Mat Ryer:** Yeah. But talking about these abstractions, and things - we have in Pace a very light abstraction over the data store. It's a schemaless document store. So the get and the put operations are abstracted in this kind of really light way, but what it allows us to do is check -- because obviously, it's a remote service, and sometimes that can fail with temporary errors... So what we can do in that abstraction is check if there was like just a network error, and just try again. And then you get a kind of robustness for free.

And again, a bit like the example earlier, of using SQL most of the time, and then you can break that rule and use different ones, I think that is quite a nice way to do it. Use the abstraction -- it's not gonna be 100%, but use it for the 80% of the cases, and then you can do perhaps more in-depth things after, in those cases where you really need it. So yeah, I like that... I've definitely got a lot to think about for this.

\[01:08:16.15\] Just one last question then, Johan... One of the nice things about these kinds of builder tools and packages is that you protect against some security considerations like SQL injection. This is where you're talking about using question marks and dollar symbols for parameters - it's instead of just building strings up yourself, isn't it? Why is that important?

**Johan Brandhorst:** The danger of an SQL injection is that you provide some sort of user input that maybe prematurely interrupts your SQL statement and then construct its own SQL statement, and in such a way could make changes in the database, or extract data from the database in a very dangerous way. And the way that you protect against that sort of thing is by using these placeholders or extrapolated variables. They have many different names...

And the way that Squirrel makes this easier is by -- like, when you normally use the Go standard library database/SQL interface, you may be tempted to just use \`fmt.sprintf\` to construct your queries... This is kind of the major danger, where you might end up causing an SQL injection without thinking about it.

If you've ever found yourself "Oh, I don't really want to write out this very long SQL query. I don't want to have to map the names myself. I'll just use a \`fmt.sprintf\` in a helper package somewhere", and then accidentally you may have gotten the argument wrong or something like that, and you ended up with something that the user can manipulate inside of your query - that's super-dangerous, and a sure way to just avoid that thing altogether is to use Squirrel, because all of the variables that you put into the builder automatically become interpolated variables.

**Johnny Boursiquot:** I need to ask, have you met Bobby Tables?

**Johan Brandhorst:** I have met Bobby Tables. \[laughter\] This is a great one, actually... So the reference that Johnny is making there is to an XKCD comic, which has a very illustrative way of showing just exactly what SQL injection means. There's a school principal who's making a call to a concerned parent (I suppose), asking about their son, Bobby Tables -- DROP TABLE students, or something like that... The parent says "Yes, we called him Bobby Tables" and then the principal says "Well, I hope you're happy; we've lost this year's student records."

It's really funny, because obviously, the implication there is that they had to enter their kid's name somewhere, in some sort of form, and they thought "Hey, it'd be fun to see if this is vulnerable to a SQL injection." And then they put in a command that if it was vulnerable to a SQL injection, dropped the table called STUDENTS... And of course, the joke then is that it actually did, and the principal was furious about it. And the lesson, I guess, is that you shouldn't have been vulnerable to SQL injection.

**Mat Ryer:** Then he's got no job though, so it's no good telling him that, is there? His life's devastated by that, but... \[laughter\] Yeah, I did start telling a story once, and we had Felippo, a security engineer on the Go team actually, just stopped me halfway and said "Just don't tell that story..." It was a similar kind of story about SQL injection. A good lesson for all... Yeah, he stopped me from telling it, which is a good -- but if you see me in the real world, I'll tell you my story about SQL injection. Yeah, but don't worry, kids, you won't be SQL injected. I don't know what that means...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Don't worry, that bit will be cut out...

**Johnny Boursiquot:** That didn't come out right. \[laughs\]

**Mat Ryer:** No, no. I was gonna say - don't worry; if you use it the right way, it's not something to be scared of... If you use Squirrel, and things.

**Jon Calhoun:** You're gonna have to change the rating for the podcast now, Mat... \[laughter\]

**Mat Ryer:** I'm just gonna make a quick note of the timestamp that I said that at, for editing purposes...

**Jon Calhoun:** It's like "PG up until the 58-minute mark, and then - nope."

**Mat Ryer:** Yeah. That's actually how we should do the podcast. It should be an hour, and then an alarm goes off, and then it's like the purge. We can say whatever we want. \[laughter\]

**Johan Brandhorst:** It's the watershed in the U.K, right?

**Jon Calhoun:** If your kids are in the car, you need to close their ears...

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** \[laughs\] Awesome.

**Mat Ryer:** Well, this was a great show. Thank you so much. It was great to learn so much about Postgres. I think it's nice for junior people to know as well that it's a perfectly reasonable choice. Pick it up, get going with it, learn it, see what you can do with it, see what you can build.

Thank you so much to our special guest, Johan Brandhorst, and Johnny Boursiquot and Jon Calhoun who were here also. We will see you next time on Go Time. Goodbye!

**Outro:** \[01:13:20.27\]

**Johnny Boursiquot:** And it's Johaen, not Johan.

**Johan Brandhorst:** Yeah, it depends where you are, to be honest... Johaen works...

**Jon Calhoun:** Do you prefer Johan?

**Mat Ryer:** How do you say it?

**Johan Brandhorst:** Johaen, I think...

**Johnny Boursiquot:** You think? \[laughs\]

**Mat Ryer:** You don't really say your own name...

**Johan Brandhorst:** I don't. Exactly.

**Mat Ryer:** When do you need to say your own name?

**Jon Calhoun:** When your mom is mad at you, what does she yell?

**Johan Brandhorst:** That's a different question, because my mom is Swedish, and in Sweden we would say Juwan... But in English -- no one with an English background will get that right, unfortunately... And it sounds butchered, no matter how much they try.

**Johnny Boursiquot:** It's actually "You won" something.

**Johan Brandhorst:** Yeah, but it's like the Irish Ewan, like Ewan McGregor.

**Johnny Boursiquot:** Ewan, right, right.

**Jon Calhoun:** So if we wanna properly introduce you, we have to call your mom up, record her saying it...

**Johnny Boursiquot:** Ewan.

**Jon Calhoun:** ...and just slip that in there.

**Mat Ryer:** Pardon, why is your name different when you're in trouble?

**Johnny Boursiquot:** \[laughs\]

**Johan Brandhorst:** Yeah...

**Mat Ryer:** Your names change in Sweden if you get in trouble. It's like good cop/bad cop, or something. I don't know, I just wanna learn...

**Johan Brandhorst:** We should have another episode about that.

**Mat Ryer:** \[laughs\]

**Johnny Boursiquot:** Why? Why not both? We can do both right now.

**Mat Ryer:** Yeah. Well, okay... Okay, hint taken. \[laughter\] Drop it, don't mention it. Okay, fair play. I'll take a hint, and then I won't mention it again. That's me; you can rely on me for that.

**Jon Calhoun:** I feel like Mat is making me lie today. I'm like "We're talking about Postgres in Go", and it's like "No, we're not. We're not talking about that at all right now."

**Mat Ryer:** We should though. That would be good, if we could.

**Jon Calhoun:** Alright, is everybody recording locally?
