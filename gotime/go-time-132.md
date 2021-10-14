**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about databases. I'm joined by Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** How's it going?

**Jon Calhoun:** Pretty good.

**Mat Ryer:** Have you ever used a database?

**Jon Calhoun:** A couple times...

**Mat Ryer:** Oh, cool! Well, we are very lucky to have an expert, I would say, in this field, which is gonna be very helpful for this show... It's Jaana B. Dogan. Hello, Jaana.

**Jaana Dogan:** Hello. How are you? I wouldn't say that I'm an expert, by the way. I'm more of like a frustrated user who decided to work on databases as a revenge, type of thing... \[laughter\]

**Mat Ryer:** That's even better. It's such a massive subject... Maybe we could start with some of the basics, like what are the main types of database that developers can choose.

**Jaana Dogan:** Databases is a very large spectrum, if you think about the way we categorize things. There are a few dimensions. For example, one of the dimensions is we have relational databases, and then we have schemaless databases. On the other hand, we have all these niche databases such as DocumentDB, GraphDB... It's more of like the data model you have, and the way you access that data model. It's a wide spectrum to talk about how we categorize databases, and I think partially today we will be talking a lot about how difficult it is to pick, how difficult it is to verify that that's the DB that fits the problem space, and so on. Even from a very high-level overview, databases are hard to categorize and hard to pick.

**Jon Calhoun:** \[00:03:53.04\] I'd even say especially now that-- I forget the name of it, but there's a couple of companies that essentially offer products that are like Google Spreadsheets as your database... So somebody who's not technical can go in and view stuff, but you can sort of use it as the database and it's slower, but it's like a new way of looking at it... And even that - you might use it for certain things, like storing stuff about customers, but it doesn't fit into any of the traditional database roles, in the sense that it's not performant in any of the good ways that you'd want for a high-load database.

**Mat Ryer:** Yeah, but for small cases.

**Jaana Dogan:** Definitely. Anything -- in any engine that you can store data... Not even an engine - any place that you can store data can be named as a database. I'm seeing sometimes blob storage sort of engines are also being called as a database, because you can index things interestingly, you can still query things. There are like column-based storage, blob storage, infrastructure and so on... Some people call them databases. It's hard to tell what is a database and what is not. I used to think that I need to just kind of go back and work on stateful workflows, and that's how I've found myself in databases, because everything that kind of like fits into the stateful workload kind of has a really huge dependency on the databases.

**Mat Ryer:** Very interesting. I've used -- extensively, I used to just use relational databases. For people who aren't familiar, you have tables (spreadsheets), and if you want to reference data across tables, you use a foreign key. So you point to the primary key in another table, and then later at query time you can join that data together. But at scale, that gets a little bit difficult to do, because that data is physically sometimes spread around, isn't it? And is that where schemaless databases kind of came from?

**Jaana Dogan:** Yeah, absolutely. The way the database works or the way it models things has a lot of things in common with the storage engine. So the way you store, the way you shard, the way you really partition the data has a lot to do with the type of capabilities it provides to query... So from a high-level perspective it's always important for a user to understand how at a lower layer things are stored, so you can estimate what is feasible, what use cases are actually a good fit for that type of database. Even though it sounds like a bit of work, I really suggest people to take a look at what type of use cases make sense, and at the end of the day at the storage level what do they do before evaluating anything.

**Mat Ryer:** Yeah, it's interesting, because when you have small data, you can kind of get away with anything. If you don't have loads of data, any database is probably gonna be fine. In some cases you could even, like you say, use blob stores or things in different ways. When we built the gopherize.me website, all the artwork is essentially just files in the blob store, and then there's a process that reads them, just lists them, and then it just saves a -- I think it was a JSON blob or something, that it would then load into memory very quickly. That's because it's kind of tiny data. You can get away with that. As soon as you start hitting scale though, things get a little bit more interesting, don't they?

**Jaana Dogan:** Yeah, especially if you wanna run interesting queries. The example you gave with relational databases - you wanna join multiple tables; some of them might be on one particular machine, some data might be on a different machine, and the engine should bring all this together, do the right filtering and whatever, and then join everything and then serve it to the user.

\[00:07:55.27\] I think from the perspective of if there's one node, for example, in a system, in a database where you only have one node, everything is pretty simple. As soon as you start distributing it, it's becoming complicated. Even in one node you have difficulties with different partitioning schemes and so on, so it's giving you a huge advantage to learn how the storage really works. It really gives you a lot of understanding of what is feasible and what are some of the capabilities, and what type of data or schema makes sense in particular use cases.

**Jon Calhoun:** Related to this - Mat, you talked about scale a couple times, and going up to scale in different size of databases... One of the things that's interesting to me about that is that -- I guess the question would more be "Do you think databases would have evolved the way they have if we had the hardware we have now when they needed to start evolving?"

**Jaana Dogan:** That's a really good question. I think there's one more thing that we should consider - the world was not disconnected... So I think in the last ten years people are really looking for faster results; they're looking for more complicated queries. We just realized that this is a trend at Google especially. In the beginning I think most of our systems were much simpler.

Over time, people's tolerance to latency was going low; at the same time, applications want to provide more interesting stuff, so they have to run more complicated queries, join more stuff together... And especially, think about a social network - there's all these different data models and different databases you need, because the data is becoming way too connected. You have your friends, and friends of friends, different schemas, connections and filtering requirements and so on. Everything is becoming more complicated, and at the same time, our networking for example is getting better, our computing power is getting cheaper... So there are definitely different trade-offs nowadays.

**Mat Ryer:** Yeah, it's interesting, because when I think about the different types of data stores that I'm familiar with, broadly speaking schemaless data stores like MongoDB, or Cloud Firestore versus the relational databases, in a way if you know exactly what data you want, it's kind of easier in schemaless data stores. You kind of pre-prepare the data, in the sense that you often denormalize that data by essentially instead of joining data at query time, when you write the fields, you do the work to gather the data together that you need for read.

A simple example is if you have a person with addresses - in a relational database that would be that you have a person table and then an address table, and there would be some foreign key that linked them together, and then at query time you can get all of the addresses for a person. And if you then create an order, it's another reference to the address, and things like this.

In a denormalized world, that would be -- you would actually copy probably the address into the order, so that you don't have to go and find where that address is in order to have then the complete picture of that order. But of course, that is a trade-off, because now if that address gets updated or something changes - maybe you update your phone number on that - you then would have to actively go and find all the places where you've copied that data and update it, or do something in the application to kind of get around that.

I find that with rapid development, this very fast, iterative development, relational databases in some ways are quite a lot easier, because you can cook data in different and unexpected ways after the fact. When you do with schemaless data, especially if you really want those reads to be rapid, you can't really do that as much. You have to have written it in the right way in the first place. So I find that to be sometimes a little bit more difficult.

**Jaana Dogan:** \[00:12:11.17\] I think we had this conversation before at Go Time... We were talking about how it's easier to iterate on the schema, without the schemaless setting. And then once you are ready, some of the organizations are actually taking it and translating it to more of like relational and schema-based type of models. That's common, but it's also sometimes very difficult, because you're taking a database with a completely different set of trade-offs plus performance characteristics and trying to represent the data in a completely different way, in a new db; if you don't have experience with the db or migrating to, and especially if you're a slightly larger, more successful project, things are getting harder. But we see this shift too often...

On the other hand, with some applications where -- financial applications, for example, they really care about consistency, they really want their transactions, and they would really want their foreign keys... So they understand that it's difficult, iteration will take a while, but they start with the relational databases, because they know that's the way to go.

**Mat Ryer:** Yeah, I've seen that before as well, where you start with one type of database and then there's a particular problem that it doesn't do very well at... So them you introduce a different kind of database and have them both. That I think is probably more likely than -- we sometimes build these abstractions imagining that we can switch out our database. You're probably never gonna do that, but having different types of databases and representing data in different ways - it's kind of an optimization really after the fact, once you understand more about what you need or where your bottlenecks are.

**Jon Calhoun:** The classic example of that that I've heard - I've been told that at Stripe one of the common things they've done is that they have a NoSQL database that they're using for all the really high-speed transactions, but then on the backend when they wanna run analytics and do all these other things, it's really hard to do that, and a lot of times people want SQL, they wanna be able to use some tools that use SQL for that... So they actually take a lot of that data and translate it into a SQL database. And while it's delayed, it's only used internally, so that's okay... So they're taking that trade-off and deciding "It's useful to have this data in both formats..." And like you said, they didn't switch from one to the other; it's more of a "This makes sense for this use case, and we ported over to this for another use case."

**Jaana Dogan:** In my experience I'm seeing always two or three databases in a system. You can't really fight the trade-offs; you get benefit from them differently. There's usually a relational database, another database for warehousing reasons, like analytics and so on, and then there's usually a database or something like Elastic for search reasons. So you can at least list three core data resources.

**Mat Ryer:** Yeah, and then of course backup could even be a different one, where you're taking a backup and putting it in some kind of cold storage, or less active place. It's common, I think, for developers to want to get the perfect solution from the beginning and just build that, but probably a better strategy is to just start with something, one thing, simple, do what you're gonna do with it. And then as it starts to become a problem - hopefully you are keeping an eye on it - then you can start to think about these things and see if there's perhaps a different technology that would work.

**Jaana Dogan:** \[00:15:40.29\] I've seen a trend of -- people are starting from the database they know. For example, we're talking about a lot of limitations around MySQL, but if you consider the number of people who are using MySQL, it's kind of contradicting. But each time I talk to people who are very large users of MySQL, their number one argument is this - databases is a huge world; we really know MySQL, and that's a really safe path, because we know how it scales, how it fails... Even though there are difficulties or even though we will have to do some more work ourselves, at least we know what to do... And then they pivot from there. That's a really common thing - start at MySQL for your relational database, and then start evaluating things over time. Probably that's not going to cover whatever you need from a database.

**Mat Ryer:** Yeah, yeah. I think also if there's a technology that you'd prefer, as well, in the early stages of a project that goes quite a long way if you enjoy that sort of technology. I'm building a project at the moment using Cloud Firestore, which is this schemaless database, and it's extremely fast. Reads are extremely quick. But it's quite limited in what you can do, and you certainly can't join data in the way that you would with MySQL. In fact, if you want to even query or filter on multiple fields, you have to actively create an index for that. So that is quite a change, too. If you've only used relational databases in the past, that's quite a strange thing to then be faced with... And since you don't do joins in it, it means you get quite good at denormalizing and then working around the trade-offs that come with that denormalization.

It is very interesting... And in that case, with that technology, the limits actually really force you to understand the underlying technology and how it works, and that means -- I feel like we are making better decisions. It's not just a case of "The data is just there and I can get whatever data I like." We really have to think about "How do we want to read this data? How are we gonna present it to the users? What do they care about?" You really have to think about that at write time, versus being able to just do whatever you want later.

**Jaana Dogan:** Yeah, and even adopt new databases if your requirements change. You're iterating on your product and at some point you realize that you actually need this type of querying, and this is your latency requirements etc. and then you just bring in another database. You duplicate some data, but that's how it works.

**Mat Ryer:** Yeah, and that's what we've done. We actually have BigQuery as well, as a part of this too. And there's other database technologies, and another one is Spanner, the Google product. And Jaana, you work on Spanner, don't you?

**Jaana Dogan:** Yeah, so I actually switched to the Spanner team almost a month ago, or maybe it's been more than a month... Time is flying to me nowadays. One reason I actually wanted to work on Spanner is I wanted to go back to databases. Before coming to Google I was mainly working on databases... And the reason I came to Google is actually I was table-flipping every day, because we were losing data, or we had performance problems and so on, and I just wanted to go to a company where databases are sorted out, so I can delegate my state work, state problems to something else, and I can focus on my app, my business logic, my higher-level stuff.

It's funny now, because I came to this company not to work on databases, but I eventually ended up working on databases... And I was talking about the Spanner team a couple of months ago, maybe around February, and I was wondering "Hey, what's going on?" I used to think that Spanner has a very different approach to some of the problems we're discussing right here, and I was wondering "What's going on with their --" they have a cloud product also, "What is the usage?" and so on. I thought that it's a huge missed opportunity; nobody's actually talking about Spanner, nobody's actually filling the gaps for Spanner, because its approach - which I can explain briefly what it does - is very different.

\[00:20:20.12\] It's a really interesting mental exercise for me to go back to databases, because it's on the other side of the spectrum, and from that perspective I learn more about the traditional databases. I constantly am comparing the design decisions and different fail modes and so on.

**Mat Ryer:** Yeah... When you say "table-flipping", that's not a database term, is it? You mean you were getting frustrated and turning tables over, right?

**Jaana Dogan:** \[laughs\] Yeah. Sorry, yes...

**Mat Ryer:** Table-flipping sounds like that could be a thing in databases, doesn't it?

**Jaana Dogan:** \[laughs\] It is going to be my new tool, if I ever build a tool, like some table, whatever...

**Mat Ryer:** Yeah, table-flipping. You can do it, it's cool.

**Jon Calhoun:** Just waiting for data to get thrown all over the place, just from random spots...

**Jaana Dogan:** Yeah.

**Break:** \[00:21:11.19\]

**Mat Ryer:** I remember when Spanner was first announced, and it did get quite a lot of press. It seemed like it was doing the impossible. What does it do differently, and what problems does it address?

**Jaana Dogan:** We've been talking about a lot of trade-offs, but we've never mentioned the cap theorem. Eric Brewer a while ago came up with this idea that there are three things you can have... In distributed systems you can't have three of these things; you have to pick two. And those three things are represented by CAP. C means consistency, A means Availability, and P means Partition tolerance, like network partitioning tolerance.

What he says is if you want 100% consistency and 100% network failure partitioning tolerance, you can't have 100% availability. You always have to make that sacrifice. We're talking about relational databases, as well as like schemaless NoSQL type of databases... Actually, relational databases are more like CP systems. They have higher consistency, they are more tolerant to partitioning... On the other hand, NoSQL databases are compromising from consistency; they're eventually consistent... But they provide higher availability. So they're AP systems.

So if you have this mental model, I think databases are becoming easier to understand, because you know that there's a limit, there's physical limits to the world, and you can't have it all.

**Mat Ryer:** I've worked for some project managers that really just don't agree with this. They want all three.

**Jaana Dogan:** Yes. Because it's just hard to explain. It's almost like -- if you don't know about the fundamentals of the limitations about distributed systems, it's hard to convince people, even if you are bringing all these papers and concepts and whatever.

**Mat Ryer:** \[00:23:59.20\] Yeah, it is counter-intuitive. You've mentioned eventual consistency. Developers should be familiar with this concept, because it is quite important, especially when you're working with data at scale. And essentially, it's the idea that if you're gonna put some data into the database, if you've got that data spread across physical locations, which you might do for some sensible reasons, it's gonna take some time for those changes to propagate. And it does seem counterintuitive to people, because you think "Well, I've put this in the database, and then I did a query, and that result didn't show up." And if you think about the user experience of that, it is quite bad. The users just created something, then they go back to look for it and it's not there... And that's just because maybe they hit a different node when they did the query, or you're waiting for the indexes to update, or whatever it is. How do we solve that? ...let me ask that question. How do we solve problems like that?

**Jon Calhoun:** I think there are some approaches... It kind of depends on what you're doing, but there are approaches depending on the problem. Let's say you've got this really popular website with comments, for some reason, and you need to go to a NoSQL database. Well, when a user posts a comment, you could basically say "Okay, this user needs to read from the spot where it was written to." We need to make sure that syncs up, so the user sees their own comment... To have that sort of consistency in their head.

But for other users who are browsing that website, if it takes a couple of seconds or a minute for that comment to show up, it really doesn't matter to them, because they don't really know any better. So it's one of those things where you can take trade-offs like that, where as long as the user who posted it gets that real-time feeling, the rest of the users can kind of have the "Don't see it for a minute" type approach. But it really just depends on what you're doing.

**Mat Ryer:** Yeah, it's funny you mentioned the feeling, because I've got around this problem in the past by in the browser just basically caching the comment. So it's gone to the API, it immediately puts it into the DOM... So it feels very snappy; it's done it immediately. But in the background, it's still waiting for that request to finish. And it is kind of smoke and mirrors sometimes, isn't it?

**Jaana Dogan:** It is. What you said was so true; it really depends on the use case. Users have to go through this gymnastic themselves to pick the right thing... And it has a lot to do, again, with the CAP; you can't have three of them, you have to pick two. What Spanner does, interestingly, is they claim that they actually are beating the CAP theorem... Which was something controversial, because what Eric Brewer says in theory - it's a model to think about very extremes. So Spanner says that we have them all. You don't have to make any compromises.

But in Eric Brewer's mental model about his theorem - if you think about the very extreme cases, like 100% availability, 100% consistency, 100% partitioning - that type of extremes can't exist because of the physical limitations of the world... You will have some sort of network partitioning of some sort... And Spanner is actually a typical CP system; it has 100% consistency, and it's very tolerant to partitioning, but its availability is significantly higher than any other relational database. It provides five nines of availability, which means like 5 minutes downtime a year. That's amazing. Most other relational databases require 10 minutes or whatever a month for maintenance and so on... Or if you wanna upgrade the schema, it requires downtime. Or the failover requires downtime. So how did this happen...?

The Spanner team says they're beating the CAP theorem, because they provide this high availability... And it has a lot to do with the way the internals of this distributed system are working, plus our good networking infrastructure. We're just kind of like improving the availability -- not to 100%; we're still talking about five nines, but five nines is actually a lot in practice.

\[00:28:09.27\] So our goal is maybe you shouldn't make as many compromises. We will try to provide you a higher availability, but you will still have the transactional relational database. But at the same time we have a lot of limitations around the type of the schema limitations, for example, some SQL limitations... Because it's hard to deliver really complicated queries on a very highly distributed system.

Latency-wise, for example, the way we handle writes are completely different from traditional databases... But we are trying to pick the best. For example, unlike other traditional databases, when a write comes to Spanner, we go and write it to multiple replicas. It arrives at the leader, but we synchronously sync it with other replicas.

But we use Paxos \[unintelligible 00:29:19.24\] so if a replica goes down, it doesn't really stop the write. And in traditional databases they don't have this concept, so it's just kind of like if something goes down - that write fails, or there's going to be huge latency until something comes back up again, and so on... So they are trying to pick up those different flavors of things... Because you know, the world has changed a lot; we have better networking now, we have better computers, we have specialized hardware, and so on... Everything is going distributed; we need larger-scale, more resilience... Why not think about a completely new database in this new world, with the new rules...?

That's why I like the project, because it looks things from a different perspective, and then you are internalizing all the other hard problems in other databases by looking from that perspective.

**Mat Ryer:** Yeah, that is so cool... It's funny, because that's kind of how I see Go as a language as well. Someone commented that Go is kind of just like C. But C was designed back when computers had a single core, and not much memory... You know, things were different, and Go was designed for more modern architectures, so it definitely does make sense that you would do that for databases as well.

**Jaana Dogan:** And Spanner has the same level of opinionation. It has an opinionated sharding scheme, for example... But it works for the people, and you can tweak it. You have to learn how to tweak it. But it just works for a lot of workloads. We use Spanner at Google for lots of things. There are databases actually built on top of Spanner; they are trying to migrate everyone to Spanner databases. It just works for a lot of cases. It gives you some sort of opinionation, but as a result of that, you don't have to think about these hard problems of sharding, all the failovers... You have this global consistency which is great, because you can start a transaction in one microservice, and then you can update the same table on another microservice without making them collaborate. You don't have to acquire an exclusive lock, or whatever. The database is just going to handle it. It will see if they are serializing, if there's any conflict or whatever, and it's going to abort.

There are different trade-offs, and this database is really designed for distributed systems... And with these new rules, in the new world, this is what I think a database should look like.

**Mat Ryer:** That's amazing. I love that you're building databases on top of Spanner. That is quite a testament to how good Spanner is, isn't it?

**Jaana Dogan:** \[00:32:07.01\] Yeah, I mean storage systems are always bootstrapping from each other, because it's just hard to come up with something from scratch, for example. Spanner had metadata in Bigtable when it was first bootstrapping, and it's using our earlier storage, blob storage engine and file system Colossus. So they're all sort of dependent on each other... And it's funny, because I think Colossus nowadays is using Spanner for metadata, or something like that. So there's always these bootstrapping and interdependencies, but that's how we evolve. You can't build everything from scratch. You have to pick the right things that are available to you. It's almost like they wrote the compiler in C, and then migrated everything to Go at a later time, when everything is just more -- you know, Go is more sufficient enough to support the compiler itself. So you see all this bootstrapping and common usages and so on in storage.

**Mat Ryer:** Yeah, it's so meta. I love it.

**Jaana Dogan:** Yeah. \[laughs\]

**Mat Ryer:** Another thing that the Cloudfire store thing does that's quite interesting is with IDs. IDs is another thing that you sort of -- in the early days I took for granted that the database could just create the IDs, and often they would just be an incrementing number. So the first entry that goes into the database is 1, and then the next one is 2, and so on. I don't have to teach people how to count... Are there any problems with that when you're talking about data at scale, or in a distributed--

**Jaana Dogan:** So in the storage layer, if you are -- there are some databases that takes that ID and then stores things in that order. For example, if you have ID 1, 2 and 3 will be in the same partition, and so on.

**Mat Ryer:** Next to it, right?

**Jaana Dogan:** Yeah. And that sometimes creates these hot spots. For example, if your ID is -- for example in Twitter's case, if you have your ID which is something gradually incrementing, you will always have the same shard, that all the recent tweets are coming to -- you know, you have to query from. So in order to deal with this, databases use hash functions; they take the key and then hash things, and so on... But some databases, rather than going that way, they are like "Okay, we're not going to. We will tell the user that we're going to use the ID when we're storing things, so they can tweak things maybe." They suggest you not to use order increment, because it's going to create all these hot spots, and so on. Again, it's a design choice.

Spanner also doesn't support order incrementing. We're actually doing some work around to support it, but Spanner's sharding mechanism has a lot to do with the primary key. The primary key is very important in Spanner, and we're trying to actually now build things on top of that to make sure that we are not creating those hot spots.

**Mat Ryer:** Yeah, that is really interesting. What we're doing is actually random IDs, and having an element of randomness to it... Which when you think about it, it does seem crazy, when you think "We're gonna just create a random ID, and then --" Of course, you have to think "Well, what happens if on that tiny change -- is it possible that you could have two of these random IDs created at the same time?" It's technically possible, but just within the laws of physics it's so unlikely. Is that it?

**Jaana Dogan:** \[00:35:46.28\] But it's still possible to reject the insert, right? Let's say that you picked 8 bits of some random generator \[unintelligible 00:35:55.03\] and there's a lot of collisions. Then you can actually retry by generating another ID in the app level, and then insert with that number. So it's very important for the database to have some constraints. In Spanner we still have the constraints; the primary key cannot be duplicated. It has to be unique. So it provides to us the type of constraints which help at the application level a lot.

**Mat Ryer:** Yeah, that's interesting, because I think understanding the database often does drive changes in the design of the application, like you talk about. But what happens in that case though if, say, two IDs just happen to create the same ID. If it's an eventually consistent thing, wouldn't they both feel like they've created the record? At what point do they find out that that's failed?

**Jaana Dogan:** This is why you need transactions. In databases there's this concept called transactions. Transactions have some properties in relational databases. This is summarized by ACID. ACID means Atomicity, Consistency, Isolation and Durability. It means that whatever you commit needs to be consistent at the end. You shouldn't have two IDs at the same time, and whatever. So the database, if there's something conflicting going on, can reject the second insert, if you generated a duplicate key. And then you at the application level can write logic to retry with a newly-generated thing. So you will have consistency all across, without eventually waiting for things to happen... Because your transaction is going to be aborted by the time you are trying to commit, because you generated a duplicate key.

**Mat Ryer:** Yeah.

**Jon Calhoun:** Even if you didn't have the transactions, I imagine you could come up with some sort of strategy, but it just might be a little different... One example is if you have five servers, each one might have a unique ID, and they might take your unique identifier and at the very end throw their unique ID. So even if it does succeed, you know each one is gonna be separate. You just have to have whichever one you wrote to first tell you what the actual real ID is at this point.

**Mat Ryer:** So it puts the Node ID on it, and mixes it together.

**Jon Calhoun:** Yeah, something like that. You know it's unique, so even if both worked, they're both gonna be unique; they're just gonna both have a different suffix of some sort, or something like that.

**Jaana Dogan:** The other strategy is to have a generator, so the generator generates and makes sure that it's actually unique. It kind of like stores the fact that it's actually generated. This is a complicated problem and I don't wanna talk about all the fail modes, but your IDs can come from a trusted source, let's say. You can provision maybe exclusive locks, and whatever... So you can make sure that you can trust that ID.

**Mat Ryer:** Yeah. I've used a system before, I worked in a place and there was an ID service, and you could say "Give me ten IDs", and then it would give you the guarantee, I guess, that they were unique.

**Jaana Dogan:** Yeah.

**Mat Ryer:** It was weird, as someone that was only used to just the database, just incrementing the number itself, to then have to do different things and write different behaviors to solve that. It was really an interesting thing.

**Jaana Dogan:** Yeah. And one of the other alternatives is to do optimistic locking. What you can do is add a version number or something to the record, and you can say "Only insert this if the version is 1." So you can make sure that no one has ever written to that record before you. That also gives you -- you can implement that constraint yourself at the application level.

**Mat Ryer:** Yeah, so if somebody did get in before you, of course the version number would have changed, and then you know that; you notice that it's changed, and then you could either take those changes and reapply yours, and then apply them back. Yeah, that is interesting... It's nice when the database does that for you.

**Jaana Dogan:** \[00:40:08.05\] Exactly. That's why I work for Spanner, seriously.

**Mat Ryer:** \[laughs\] Yeah.

**Jaana Dogan:** One of the things that I wanted to discuss is I'm so tired and frustrated about the fact that I need to do what my database is supposed to do. All that logic shouldn't be leaking to the application level... But that's sort of what the reality is right now. So I'm just trying to understand "Hey, what is next in databases? How can we make people more productive?" If it's just giving them a slightly more opinionated thing, that does some of these things, maybe more like consistencying better, then why not?

**Jon Calhoun:** I think that's probably why Rails was so popular. It took that even a step farther, and was like "You don't even need to know SQL. You just have to have an idea of how it works, and you can be productive." I think a lot of people really liked that. But there is the downside of, like you said, some things still do leak, and you can have really slow queries and things like that as a result... But it did try to make that leap, which I think is why so many people just felt productive in Rails.

**Break:** \[00:41:18.16\]

**Jaana Dogan:** I realized that there was no way for me to explain what Spanner does, so I wrote that article about things I wish more developers knew about databases, to sort of like give people a catalog of different things that you have to worry about. It's definitely not a full, comprehensive list, but it kind of gives you -- there's a lot to worry about... And you as a random person kind of like discovering those problems along the way as you experience problems, experience data loss, and so on... And it's such a challenging thing for people who are working in databases, because they can't explain what the database is good for, because nobody understands what is the large list of the problems around.

So I find it equally challenging to be on the other side, as a person who is working on databases, because it's so hard to explain the whole spectrum. Why would anyone care? That's the database's one and only job at the end of the day... But if you give them an opinionated set of things that will make them productive enough, they wanna give it a try and they like it.

**Mat Ryer:** Yeah... You know, there's some other design principles and properties of a system that are important, especially when we're working, like you say, in modern architectures with message queues and databases that have eventual consistency and these kinds of things...

One of them that I think is very important, that I don't know that loads of developers are familiar with it, but it's idempotency. Operations that are idempotent essentially no matter how many times you apply the operation, the end result is the same as just applying it once. For example, if I were to have a counter and I apply the operation +1, if I ran that three times, then the number is gonna go up three times. That's not idempotent.

\[00:44:13.00\] An idempotent version might be for me to set the number to three, and then if I set to three three times, the end result is the same; it's set to three. Little things like that, and designing systems with that sort of knowledge I think really helps... And you can kind of design for failure. You know that "Yeah, this message system has this at-once guarantee", but that means it's possible that it may deliver the same message multiple times. Well, if that operation is idempotent, for example, that's okay that that happens. But it doesn't mean that you can't be useful without knowing that, but of course, it does help. Are there any other things that you wish developers knew about when it came to databases?

**Jaana Dogan:** I have a really good book to suggest. Martin Kleppmann's book on Designing Data-intensive Applications, I think that's the name. It is a really huge, comprehensive list of all the things you have to know. If you need a catalogue or a reference, what are some of the fail modes, or what is the spectrum of the problems in this particular area? You can take a look at that book, you don't have to read it page by page... But if you need to understand a certain topic, you can just go and -- he does a really good categorization plus explaining what is out there, giving really good references. I really suggest that book to everyone who wants to learn more.

**Mat Ryer:** And I will recommend Jaana's blog post, because it's phenomenal. We'll post it in the show notes.

**Jaana Dogan:** Do you need a fun fact?

**Mat Ryer:** Yes, please. I think we do. \[laughs\] This is an intense episode; I think a fun fact is just what we need right now.

**Jaana Dogan:** \[laughs\] I actually was reading Martin Kleppmann's book, maybe two months ago... And then in my dream, I saw myself writing that blog post; as soon as I woke up, I took notes... I think I drafted ten items on the cover of that book. That blog post actually probably came from some of the ideas that I got from his book, and so on... So that's really funny -- I saw that the article was being very useful in my dream, and it turned out to be true. It's so funny.

**Mat Ryer:** Well, if people didn't feel stupid before, the fact that Jaana is coming up with this stuff in her sleep is certainly gonna do that. That's how Paul McCartney wrote Yesterday, by the way. He just woke up and had the song.

**Jon Calhoun:** My dreams are way less productive.

**Mat Ryer:** Yeah. I just dreamed my legs were made of jelly. That's not helping anyone. \[laughter\] I can't turn that into a blog post... I probably could. I might.

**Jaana Dogan:** I actually am an impostor. All of these good ideas are coming to me when I'm dreaming. I'm serious.

**Mat Ryer:** Yeah, wow...

**Jaana Dogan:** That's why I'm sleeping. I should just go back to sleep.

**Jon Calhoun:** I don't think that makes you an impostor. I think that means you know this stuff so much that it can't slow down.

**Mat Ryer:** That's amazing though... So in your dream, were you actually thinking through these -- do you remember the dream at all, or did you just wake up and had the point? Were you trying to solve this in your dream?

**Jaana Dogan:** I remember the dream; I saw that I wrote the article. The article had ten items, and I remember that the first -- it was something about network partitioning tolerance which became the first item. There was something about ACID, there was something about consistency, there was something about optimistic locking... I think ten of the items or seven of the items in the actual article came from my dream. And I can send you maybe the screenshot of the frontpage; so I'm waking up from the dream, taking notes, and then going back to sleep. \[laughter\]

**Mat Ryer:** \[00:48:02.16\] Great. I love that. Wow... If you're gonna do a talk and you don't quite have enough, can you just have a quick nap and top it up?

**Jaana Dogan:** \[laughs\] I sleep when I need to debug. There is one funny thing - I used to see myself as a package in the systems that I designed before coming to Google. That was the way for me to debug the things that I was working on. Then I came to Google and we have distributed tracing, so it became slightly easier... But I remember myself seen as a message in the RabbitMQ on a topic, or something; that was a horror movie, it was a very overwhelming nightmare... But it really helps me to internalize some of the mechanics of the things and debug.

This is a known phenomena, by the way. Most of the people see some of the problems they're dealing with when they're sleeping, and then they're like "Oh, gotcha. I got it!"

**Mat Ryer:** Yeah, it has happened to me. It is very satisfying. It is whatever's going on in the sleep, that organizing process, putting the memories in and all that stuff is kind of awesome. That is awesome, I can't believe that.

**Jon Calhoun:** I'm just gonna put this up to something your brains do differently than mine, because otherwise I'm gonna feel like mine's broken.

**Mat Ryer:** What are you dreaming about? You've probably got some great dreams.

**Jon Calhoun:** I've even seen things -- well, somebody talked about when people think. whether or not they think thoughts and words in their head, or if it's just something else... And if you're in one camp or the other, it's really hard to imagine the other, because I don't know how that would work.

**Mat Ryer:** What do you mean? Like, people think in words...

**Jon Calhoun:** In words.

**Mat Ryer:** ...rather than abstract--

**Jon Calhoun:** Rather than something abstract, or I don't know... I don't know, because I think I'm more of a words person. But even then, thinking about how you think is a hard thing to put down...

**Mat Ryer:** Yeah, it's a bit too meta.

**Jaana Dogan:** Yeah, I heard that people don't talk to themselves when they're thinking. There are people who only can use visuals or abstractions when they're thinking about anything, anything random. Their thinking process doesn't have that inner voice, which is very hard for me to relate to, because that's such a hard concept for me to have that inner voice with me all the time.

**Jon Calhoun:** I imagine those people don't talk to themselves, because that's usually my inner voice just coming through my lips... And if somebody looks at me, I'm like "Oh, don't worry. I'm not crazy. I swear." \[laughter\]

**Mat Ryer:** Oh, you're just saying it out loud.

**Jon Calhoun:** Yeah, sometimes. If I get really caught up in what I'm thinking about, I have caught myself saying things out loud that I'm sort of thinking in my head... And it makes you look really weird at the time.

**Mat Ryer:** I bet that has got you into some trouble.

**Jon Calhoun:** Nah...

**Mat Ryer:** \[laughs\] It depends what you're thinking.

**Jon Calhoun:** It's always programming, it's never anything that would get me in trouble.

**Mat Ryer:** Well, that's because you're a nice bloke.

**Jon Calhoun:** Yeah, sure. \[laughs\] No, I don't know... I'm gonna say it's because those are the things I think hardest about. They require the most thought.

**Mat Ryer:** Do you ever have that feeling where you know that an idea is about to happen? It hasn't happened yet, but you know that something's gonna happen somehow... And it can be a few seconds where you think "Oh, hang on... I'm about to have an idea", and then it does happen. But it's just a feeling before that, and I can't figure out how that could happen. Did you ever have that?

**Jon Calhoun:** I think I've just had the opposite, where I'm like "I had a good idea, and now I don't know what happened to it." \[laughter\]

**Mat Ryer:** Jon, I bet you just can't remember your dreams; you're probably solving all kinds of things in there... You just can't remember it.

**Jon Calhoun:** I mean, that could be it. I'm told that if you write down and think about your dreams consistently, you'll start to remember more of them, but I've never done that.

**Mat Ryer:** Well, it's amazing. Well, it's that time again... It's time for Unpopular Opinions!

**Jingle:** \[00:52:00.27\] to \[00:52:16.27\]

**Mat Ryer:** So... Has anybody got an unpopular opinion?

**Jaana Dogan:** To be honest, I haven't practiced for this particular question... But I can think about one. I have too many unpopular opinions. The only criticism I get is most of my unpopular opinions are actually popular opinions, but I never feel like I can verbalize them.

**Jon Calhoun:** You haven't found the crowd that agrees with you to hang out with...

**Jaana Dogan:** \[laughs\]

**Jon Calhoun:** I mean, I can tell you the same thing that I said on Twitter earlier, Mat - I definitely think that at some point in most developers' careers they should do debugging through printing out code, and walking through it step by step. Now, it definitely doesn't work for very large applications or anything crazy, but we had to do this in school for this one programming team I was on... And I've found when you're thinking about something complex, like an algorithm or something that's a little bit more substance than just print out 'foobar', or whatever... That by printing it out it forces you to take a step back, and instead of being like "Why is this one test case--" or in your mind you're thinking it's an edge case; "the whole thing's right, I've just gotta figure out why this one edge case is wrong." But sometimes you need to take a step back and rethink the entire algorithm, or everything that you're basing your assumptions on... And when you print it out, you don't have the ability to just change one thing and rerun it, because you'll catch yourself doing that with a debugger, or something like that. You'll just change one line, rerun it real quick; change another line, rerun it, and be like "Alright, why isn't this working?" But if you actually have to sit there and trace it with your head, with paper, you don't have the opportunity to do that, so you're forced to be like "Could this be wrong? What fundamentally might be wrong with this?"

**Mat Ryer:** Yeah, that really resonates. I find just thinking is the best way to debug something. Obviously, that requires you to really kind of hold a good chunk of the system in your brain somehow... And obviously, the bigger and more complex the system, the more difficult that is. It's another argument for keeping things simple.

But yeah, I think some people are more hands-on, and they want to go and use a debugger and look at the variables and just watch things changing... And I find that to be quite a difficult thing to do. So for me it's easier to just -- I mean, you probably just have a siesta Jaana?

**Jaana Dogan:** My opinion on this is, you know, I start with `printf`debugging all the time, because it's much easier, convenient, whatever... But if I need to break certain conditions -- sometimes things are extraordinarily hard to debug, because they happen very rarely... And if you are really targeting that particular thing, maybe it makes sense to use a debugger. But it also depends on how good the overall workflow is. Some languages or some platforms have a really good debugging experience; that makes it so much easier. But in Go, for example, I always use `printf`. I am actually very sad that with the new module thing you need to explicitly overwrite the stuff that you are depending on, because it's sitting in a read-only type of -- there's the file modes for the modules are different now. It's not like you have the GOPATH and you can change every line whenever...

I'm a little bit sad, because it's not a big friction for me, but it's still kind of like -- I need to tell my editor "Yes, you can overwrite this type of thing" and you can see that your text editor is asking whether you wanna overwrite, even though there's a \[unintelligible 00:55:46.28\]or whatever... I like to, in short -- to summarize, I really like `printf` debugging. That's the number one thing, and I think it helps you to internalize the source code much better, just because you're just switching and reading things more. In the debug mode you just only are caring about the execution path.

**Jon Calhoun:** \[00:56:07.10\] I should say that I don't hate debuggers -- I think I'm similar to Jaana, where I don't hate debuggers or anything like that; I just think that learning to debug in these other ways helps you train your brain to think about the right things...

Mat, when you said it's important to sit there and think about the problem, I think that's the reason -- in college especially, I think people should be printing out some of their code, because that's when you're learning to think and learning to actually be a programmer... And it's a useful tool for that. I haven't printed out code in the last ten years, so it's not like something I'm doing daily or something like that... It's just doing it a few times sort of forced me to actually avoid those bad habits that otherwise might just leave you floundering and tweaking one line at a time.

**Mat Ryer:** Jon, you're talking about literally printing a hard copy of the code...

**Jon Calhoun:** I've printed hard copies of code, yes. So what I mean by that is -- a lot of this stems from the fact that I did ACM ICPC is what it's called; Intercollegiate Programming Competition. And the way they do it... If you've ever done Google Code Jam, or Top Coder, or... There's different competitions like that. They're mostly algorithm-based, and they're like problem solving. So most solutions are less than 200 lines of code, generally speaking... But the ACM one specifically is for college students, and you're on teams of three, with one computer. So because of that limitation, anytime you have a bug, your first thought is supposed to be "Print out your code and let somebody else do something else", because you don't wanna hold somebody else up, sitting there, when you don't even have a clue what's wrong with your stuff.

So it sort of forced you to sit down and be like "Alright, where in this code could it be wrong?" and you come up with a couple "This is what I think is wrong. Here's how I can test it" and then when you're finally ready, you say "Okay, I'd like to be back on the computer if somebody else is done with whatever they're doing."

So that's where I first started doing it... But this was also working with much more complex algorithms. It would be like implementing a minimum-cost maximum-flow type things, that are a little bit more complex than a bubble sort, or something like that. And when you're doing that, it's easy to have some bugs in your code. So as a result, it's something where you just had to sit and think about it.

**Jaana Dogan:** There was a really quote from I think Ken Thompson or Dennis Ritchie... Their approach to debugging is `printf` debugging. They were talking about how reading the code and looking things from a different perspective actually helps you to debug things, and `printf` debugging is sort of like helping that process. And I kind of am relating to that. I really like to go and dig in and just put some printlines here and there.

I don't wanna necessarily focus only on the execution path, because you just wanna have a better sense of the codebase in general when you're debugging things, to see how things fit together, and so on. So I love `printf` debugging.

At school, by the way, just because you asked, they ask us to design a debugger. And I created this trampoline thing, which basically takes every symbol, puts a `printf` before calling the function... It just basically rewrites the program to put a `printf`, and then calls into the actual function. So when you run it in the debug mode, it just prints out all the function calls. To me, that approach is really nice, and is a really good starting point. Everything that is interactive I think is secondary and is more for those advanced cases where it's hard to reproduce some of the cases and you need to evaluate and break the breakpoints with some conditions, and so on.

**Mat Ryer:** Yeah, that's it. It's very specific when you're doing that. You're right; you're kind of watching the execution of things, and that might be very appropriate. One of the nice things about just thinking is you can go anywhere very quickly. It's a very fast way of navigating this virtual model of the system... And you can consider more things more quickly, it seems, by doing that.

\[01:00:08.00\] I don't know if I've always done it like that, but... I mean, I did a tweet about this; the best tweet I've ever done, and it's also inspired a lot of trolls as well... For the first time I've had actual trolls, which is very exciting for me. It was like being a woman on Twitter.

**Jaana Dogan:** \[laughs\] One more thing about this topic is I was kind of like a bigger fan of debuggers, and then I spent a couple of days like 10-15 years ago, because our debugger had some bugs with concurrency... So I was never able to reproduce some of the bugs, and that was the moment that I actually stopped trusting debuggers. I always do `printf`, because debuggers do all these crazy rewrites, and so on... I just want minimal impact on my code; I just wanna be able to see what's going on first, and then yes, if I couldn't really figure it out, I could always take another look with the debugger.

**Mat Ryer:** Yeah, that's actually a great example, because when you're stepping through code, you're not running code concurrently like you would normally. So if you're just thinking, you can actually consider those kinds of more abstract things and more complicated things. It's quite a good example of a place where, you know - yes, it might be too narrow in some cases, but it's really whatever works for people. Don't troll me, please.

**Jaana Dogan:** \[laughs\]

**Mat Ryer:** Well, I think that's all the time we have today. Jaana, thank you so much. I really feel like I've learned so much, and I'm sure our listeners have also... So thank you very much. Jon, I didn't learn anything from you today, mate...

**Jon Calhoun:** It's okay.

**Mat Ryer:** \[laughs\] I'm just kidding.

**Jon Calhoun:** I was supposed to tell Jaana today... Jerod, one of the producers behind Changelog, told me that I was supposed to ask "What's the best database?" and then I was supposed to ask "And why is Postgres the best database?"

**Jaana Dogan:** I have some opinions even for Postgres... But you know, Postgres is one of these -- at least it's doing the basics right, and it's not super-crazily surprising... It's like actually doing the bare minimum. There are some gotchas that you have to learn about every database, and I think -- yes, I agree with the fact that Postgres is one of the best databases ever. And this is a strong opinion, and it's an outrageous to probably say out loud, but I am a big fan of Postgres.

**Jon Calhoun:** I mean, I'll agree with it, because it's my go-to tool for most things, because it works.

**Jaana Dogan:** It works.

**Mat Ryer:** Yeah. Great. Well, thank you very much. Thanks for listening, everyone. We'll see you next time.

**Outro:** \[01:02:59.27\]

**Jaana Dogan:** This topic really needs like five hours. I could really talk about like five hours, and we would be able to still capture only 5%. And that's my daily challenge right now, like "How are we supposed to give people an accessible entry point to these problems, and what we are doing with these problems" and so on. So this was very useful for me, because I got a lot of opinions from the way that you see things, and that really helped me to see your mental model about these problems, and so on. Thank you.
