**Jerod Santo:** Welcome back everyone, Jerod here. I am joined today by Ben Johnson. Ben is a Denverite; I think that's what they're called... Is it Denverite? Is that the term for someone from Denver?

**Ben Johnson:** Yeah.

**Jerod Santo:** Okay.****

**Ben Johnson:** Yeah, we're Denverites.

**Jerod Santo:** Yeah, so Ben's a Denverite. We met Ben out at GopherCon back about a month ago now... He describes himself as an open source software developer who specializes in customer behavior analytics and data visualization. He's also big into distributed systems and data stores. Ben, welcome to the show.

**Ben Johnson:** Yeah, thanks for having me.

**Jerod Santo:** So out at GopherCon it seemed like your name kept coming up all over the place... Very active in the Go community, very active in the new wave data store community... Why don't you tell me a little bit about yourself, how you got here and what you do?

**Ben Johnson:** Yeah, sure. So I've been writing software for about 15 years now. I started out as an Oracle DBA back in the day, and kind of moved into web development, and just kind of jumped around. I started getting into open source 4-5 years ago, and somehow just kind of landed inside the database world, through just a lot of turns, and whatnot. I love writing open source, so I do that a lot in my free time.

**Jerod Santo:** What initially drew you to open source as a thing? What excited you?

**Ben Johnson:** I think the idea that you can put something out there and that it not only helps people, but people give you feedback and you get a kind of -- you just learn so much. As soon as you put out software, everyone will either love what you have, or tear you apart... There's all this learning, even if it is kind of hard.

**Jerod Santo:** I tried to do a little bit of exploration just to find out more about you online. @benbjohnson on Twitter, if anybody's interested out there... I noticed you don't seem to have a website. You apparently are a consultant of some kind. You do have a LinkedIn, I found that, but you seem to be focused on your GitHub and your Twitter and that's about it. Can you tell me about your business side and your consultancy and how that all works?

**Ben Johnson:** Sure. I work with InfluxDB. I just write a lot of the storage layer and the distributed systems parts of that database. That's who I work for during the day.

**Jerod Santo:** \[00:04:06.27\] Okay.

**Ben Johnson:** And I've consulted in the past... I used to work at Shopify for a while, so I just kind of hopped around here and here.

**Jerod Santo:** Right on. So you're focused on InfluxDB at the moment.

**Ben Johnson:** Mm-hm.

**Jerod Santo:** Well, we have you on the show because we wanna talk about databases... It seems like for a long time there was kind of your set of relational databases, and then there was these niche things out there that you heard of, these document stores, or column stores... I remember in the area that I worked there was actually a database called Caché.

**Ben Johnson:** I don't know that one.

**Jerod Santo:** You don't know that one. It's big in the medical world, and also in financial transactions and whatnot. But it was very niche; you kind of have these pockets, and it has its thing going on. And then you had the kind of NoSQL explosion a few years back, where you had your Mongos and your Reacts and interest around those... And we seem to be having another wave of new things; and maybe they're not new, it's just I think they're new, because I don't really come across them as much... Some of which are things that you're involved in - Influx, Bolt... You emailed me a list of things. I had never heard of half of these, and I try to keep up with open source, and it's just hard.

**Ben Johnson:** It's hard, for sure.

**Jerod Santo:** But there's LMDB, LevelDB, Parquet, which I'd never heard of, Cassandra, which is coming out of Twitter and Facebook and was big a little while ago... Has there been an explosion in data stores, or am I just noticing it?

**Ben Johnson:** Yeah, it's definitely an explosion. I think people are starting to realize that once you get to a certain scale or a certain use case, you can optimize at these really low levels. What used to just be an application, and you're going further down and lower down, you start to just build your own database at that point... And I think that people find a lot of either operational simplicity from having a very specific target or use case, or they just get a lot of performance out of it... There's all kinds of different reasons to get down that far.

**Jerod Santo:** I think when the NoSQL movement - we might just call it that - first hit... I can't remember the timing, but maybe it was ten years; I can't remember how long ago that was... And MongoDB became kind of a thing that was winning the hearts and minds of developers, there was this whole "Throw out your relational database" mindset. It seems like now that's kind of shifted, and it's not like "Throw it away", it's like "Here's something you can use in addition. Is that how you feel about these types of databases?

**Ben Johnson:** Yeah, I think a lot of it has to do with your requirements, what you know already, where you're coming from... I think SQL, back in the '80s, came out of -- you know, you had business people that would go up to a terminal and they wanted to be able to write their own queries, or some level of that. And then we started trying to fit it into this object model, too... And I think a lot of people have gotten tired of trying to fit the relational and object model together, and business users - they use a web UI now, that's made by a developer, so we don't have that direct SQL requirement anymore...

**Jerod Santo:** Right.

**Ben Johnson:** But I think that there's not -- the NoSQL movement doesn't have enough of a structure. We make all these databases, but we don't tell people how to actually use them, or what best practices are... So I think we developed these 20-30 years of SQL best practices that people -- I feel like they're starting to fall back on, and they're saying "Well, I know how to do that. I'll go back to doing that. This object or document database is confusing."

**Jerod Santo:** Yeah.

**Ben Johnson:** So I think if we can actually do a lot of education around that, I think there's some great use cases for document databases or key-value stores.

**Jerod Santo:** Yeah, and I think key-value stores is one where we've definitely seen a lot of activity, a lot of options... And maybe it's because a key-value store conceptually is pretty simple. I don't know, I'm not gonna go ahead and say to implement it is simple, because you would know a lot better than I do, and I'm sure there's tons of nitty-gritty details and bumps in that road... But man, there sure are a lot of options, and it seems like a lot of those options are written in Go.

**Ben Johnson:** \[00:08:22.26\] Yeah, there's been a huge influx. I think part of it is just the simplicity of -- if you get something written in Go, you can compile it onto a bunch of operating systems and just distribute it out. A lot of the uptake we got at Influx has just been people saying "This is really easy to set up, compared to a lot of other alternatives that have been around for longer." People can get it up and running... People don't wanna spend their whole day trying to learn one tool; they just wanna run a command and have it there. I think Go does that really well.

**Jerod Santo:** So you have one of these fancy new data stores... I'm just gonna act like an old man and talk about everything as if it's shiny, new and foreign to me... \[laughter\] At least for the first part of the call, until you kind of school me on how all these things work. But yours is called Bolt (boltdb/bolt on GitHub) and it seems to be production-ready. Why don't you go ahead and just give us the elevator pitch for BoltDB?

**Ben Johnson:** Sure. BoltDB is a read-optimized store, a key-value store, and its goals beyond anything else is just to be operationally simple, and to just have a clean API, and have strong transactional support. There's a lot of key-value stores out there that'll give you -- maybe it's really fast write performance, but the reads are really slow; maybe you'll get certain other benefits -- it might have a crazy API, but it might be fast... Actually, a lot of key-value stores seem to be centered around just being fast, which I feel like as computers get faster -- you know, most websites out there aren't getting thousands of hits per second. They're getting a hit per second, or somewhere in the tens of hits per second. So I think a lot of people look at the fastest thing out there, because they want everything to be blazing fast, and they just forget about all these other operational side considerations.

**Jerod Santo:** Yeah, it's kind of the thought that became a meme with Webscale back in the day, to find out what is and what is not Webscale... And the fact of many people's businesses and websites is you can count the Twitters and the Facebooks on one hand.

**Ben Johnson:** Yeah.

**Jerod Santo:** Sure, there are other large sites out there; there's the Reddits, and the top 100 Alexas, but most of us make our living and live on the web in kind of smaller, less populated areas.

**Ben Johnson:** Yeah, for sure. It's interesting to see all the databases that come out from the Facebooks and the Twitters, because they have such different requirements that 99% of people out there. It's interesting to see where the databases are coming from, and how those requirements line up.

**Jerod Santo:** Right. So it looks like Bolt was 1.0 November of 2014, and it's a bit of a remix, because you say it's inspired by Howard Chu's LMDB project. Could you tell us about LMDB, how it inspired Bolt, and then maybe what's different between the two?

**Ben Johnson:** Yeah, sure. LMDB is a great design. I really like what Howard did with that. And what it is - it's basically a B-tree. Your data is structured in this B-tree that -- you can access your data and you can write to it, and whenever you change a leaf inside of your tree, it will copy all the parents as well, and kind of make this new version of the tree. So every change will make this new version, this incremental version, so that as you're going along, everything that's reading from that tree will get kind of a snapshot of it, and work in a transactional way. And then as things update along, other readers get their own snapshot of the world.

\[00:12:20.04\] It's really good as far as having great transactional support. You can do great things operationally, where you can essentially just copy a file as a backup. And if you're setting up a website or you're setting up an application, you don't wanna have to worry about setting up MySQL, and having a replica, and doing all this other crazy stuff. You can attach on a web handler, an HTTP handler, and stream down your database if you wanted to have that option. It's three lines of code to do a backup, basically...

So certain things like that... It has this very simplistic design, as opposed to -- there's another type of database called LSM tree (log-structured merge-tree). And what that is - it takes these different levels... It'll kind of create keys and values in these sorted blocks, and each one will be a different file. And then as you get these files large enough, they get compacted and written into a new block that's larger... So it takes a bunch of them and it makes them into these larger ones that are at different levels. And those are really good for writes, but operationally it can be a huge pain, because you can end up with hundreds or thousands of files where you have this kind of tough -- it's kind of tough to snapshot, like just copy a file. It's much more involved than that, and how you try to string that out and stream it in. So operationally, Bolt is simpler, although it doesn't have the benefits of write optimization, something like an LSM does.

**Jerod Santo:** So again, it's the right tool for the right job. If you have a read-heavy situation, Bolt might be a little better fit; if it's write-heavy, then something that uses LSM might be a little better fit.

**Ben Johnson:** Yeah, for sure. And actually, a lot of people will ping me on Twitter or GitHub and say "Bolt is slow", or whatever.

**Jerod Santo:** Just like that...? Like, "Hey, Bolt is slow."

**Ben Johnson:** Pretty much. Or they'll say "Bolt sucks."

**Jerod Santo:** \[laughs\] People are so nice...

**Ben Johnson:** Yeah. And I will just paste them a link to a different database that will probably fit their use case better. I feel like people try to -- if you come across a project where they try to be everything to everyone... I feel like as engineers we should know that there's trade-offs on all this stuff. And you know, Bolt is not the right tool for probably many projects out there, but it might be for yours.

**Jerod Santo:** You know what's funny -- we've just had Thomas Reynolds on the show last week, talking about Middleman, which is a static site generator; completely different situation, but... You know, he's been writing Ruby in JavaScript for years, and we started talking about programming languages and stuff, and I just asked him very poignantly if he's still bullish on Ruby... And his answer was very familiar to what you've just said here, where it's like "Well, there's probably a better tool for a different job that you may have." And it's like, well, that was an extremely level-headed answer.

**Ben Johnson:** Yeah.

**Jerod Santo:** It's funny, because we all kind of live, work and have our interactions on the internet, and I don't know if it's the written form versus here we are, you and I, talking on Skype... It's like, people are very level-headed about these types of things in real life. But when we get on the web, it's just like "Bolt sucks."

**Ben Johnson:** Yeah, exactly.

**Jerod Santo:** We lose all sense of like "Right tool for the right job", and we're all trying to just build good software... And we get into religious wars over these things. I wonder if it's just that degree of separation, or what it is about the internet that makes us like that.

**Ben Johnson:** I think it is just the anonymity. Because if I go to a conference, no one ever comes up to me and tells me how much it sucks. They say "I had this difficulty with performance, where I did this etc." And then you have to have a conversation about it.

**Jerod Santo:** Yeah.

**Ben Johnson:** And then everyone walks away kind of being a little more knowledgeable.

**Jerod Santo:** Right. Yeah, it's just hard to be nasty when you're face-to-face with somebody.

**Ben Johnson:** Exactly, yeah.

**Jerod Santo:** So let's go back to -- not Bolt sucking, but things that it's good at. And it must have a lot of use cases, because you do have a lot of adoption, you have a lot of other projects that kind of use Bolt behind the scenes. I think perhaps the reason is because it is embedded, as opposed to a server type of a setup. Can you talk about the embedded aspect of the database?

**Ben Johnson:** \[00:16:19.01\] Sure, yeah. So it's just a library that you bring into your Go program, and then you point it at a file, and you're basically ready to go. There's almost no configuration options. Even if you wanted them, you can't configure the database... And it's a single file, there's an OS lock on it, so you can only have one attached to that file at a time, as opposed to like a MySQL or a Postgres, where you have this gigantic configuration file where you have to find some tweaks to make...

So from that side, operationally, it's easy to just get it up and running. A lot of projects, especially when they're products, or like an open source project, you can't make that requirement to say "Okay, first you guys have to set up these four services, and then configure it here, and do all this stuff", because no one wants to go through all that. They don't wanna add one more thing to their stack. I think it's found a lot of success from that...

Another important thing too that people don't think about is that in a lot of projects the data store is not your bottleneck. You might have a lot of other processing going on, and you're just storing some metadata maybe, or you're transferring across the network, doing all kinds of other things.

**Jerod Santo:** Right.

**Ben Johnson:** So from that perspective, when performance is an issue, usually the next most important thing is operational simplicity, and just to be able to say "This is a file. I can just deploy it. I don't need to do anything beyond just starting up the program." I think that goes a long way.

**Jerod Santo:** Yea, I agree. Operational simplicity absolutely does go a long way. You also kind of focus on API simplicity, and the fact that this is just a key-value store... And that's not a bad thing, that's a good thing, right?

**Ben Johnson:** Yeah.

**Jerod Santo:** ...you're keeping it simple on purpose. As far as the API is concerned, is it just a matter of "I put data in with a key, and then I get it back out by that key?" Is it as simple as that, or is there more to it?

**Ben Johnson:** It's essentially that. You have things called buckets as well. They're basically like a keyspace; you can only have one unique key in a bucket, but you can have buckets inside buckets, and you can do some interesting things around that.

But honestly, most of the time when I use Bolt for an application, I'll treat it almost like the way that I structure tables inside a relational database. I kind of have top-level buckets where I might have a customer's bucket, or whatnot... And my primary key -- you can create sequential integers inside Bolt, per bucket, where I might have an ID for a user, and I can generate it off that bucket, the user's bucket, and then that becomes the key for them. So user one - it's point out this encoded data structure for the user.

**Jerod Santo:** Mm-hm.

**Ben Johnson:** So really, it's not actually that far of a departure from relational databases in that sense... Like, if you wanna find a user by ID, they just find their ID and look them up. You don't get the benefits of things like indexes, you don't get a fancy query language, but...

**Jerod Santo:** Yeah. So if you wanna find that user by their first name, now you're in trouble.

**Ben Johnson:** Yeah. I mean, you need to save that separately, and kind of create your own index. So there's definitely a bit of a hurdle in that sense. But if the indexing isn't a huge piece for you, or if you -- a lot of times people index using something like Elasticsearch, some full-text search engine... Actually, there's another one called Bleve, that'll use Bolt underneath... People can attach onto that and do their searches through that... So it depends on the use case; again, right tool for the right job. But I treat them kind of similarly to a relational database.

When you think about relational databases too, they store -- their rows that they have in there are just an encoded data structure that has a row ID that points to it. So they're almost key-value stores underneath, they just have kind of a relational layer on top.

**Jerod Santo:** \[00:20:10.14\] Yeah, that makes a lot of sense. And then when it comes back to the operational simplicity side of things, you're just storing all this in a file on disk, right? It's very SQLite in that sense.

**Ben Johnson:** Yeah. A single file, yeah. It's pretty straightforward.

**Jerod Santo:** Pretty straightforward. So backups, moving things around, copying data - you use your Linux, your Unix tools, right?

**Ben Johnson:** Oh, yeah, pretty much. There's some blocking stuff, so you have to go through -- it'll actually be a transactional copy inside the database. So you start a transaction and you can stream it out. But it'll go as fast as your SSD can read the data off. So it goes pretty snappy.

**Jerod Santo:** And it sounds like you've gotten that into a scenario -- it says "Bolt currently in high-load production environments, serving databases as large as one Terabyte."

**Ben Johnson:** Yeah.

**Jerod Santo:** So even in that case, you just have one Terabyte file sitting there?

**Ben Johnson:** Sometimes we'll split it off into multiple partitions... But that's more of a load balancing thing. It was actually -- at Shopify we've created an analytics database that was clustered, and we had multiple Bolt partitions running on each one, and then we'd copy them around and redistribute the load as we needed it to. We used consistent hashing inside of there, to be able to redirect requests to the correct partition.

**Jerod Santo:** Very cool. Well, this sounds like a good spot to stop and hear from one of our awesome sponsors. When we get back, I'm gonna talk to you about some more use cases, maybe compare it to a few other key-value stores - LevelDB, and others people might be familiar with. Memcached, Redis, such things. So stick around, and we'll be right back.

**Break:** \[00:21:53.26\]

**Jerod Santo:** Alright, we are back with Ben Johnson, talking all things open source databases, and specifically at this moment BoltDB, which is Ben's popular key-value store in the Go ecosystem.

Ben, we were talking about use cases... Can you give us how it's being used in the wild, and maybe some projects that are built on top of Bolt?

**Ben Johnson:** Yeah, sure. I think it's largely used by projects that want -- a lot of times it's projects that have a data store they need inside of there, but that's not the main focus of the application; it's not like a web app, or some giant database is sitting behind it and people are using it.

**Jerod Santo:** Right.

**Ben Johnson:** I think it's getting towards that, but I think a lot of cases tend to be it's storing metadata, or smaller sets of data, currently. There are definitely some exceptions to that. There's a guy named Tv; he wrote Bazil, which is like a distributed file system, personal file system, like Dropbox is, but he's using Bolt for that. He's actually been around for a long time.

When I first wrote Bolt and I put it out there - or not even put it out there; I just had it as a repo - he just came along one day and he was just going line by line through the code, and being like "This is wrong, this is wrong..."

**Jerod Santo:** Whaat...? \[laughs\]

**Ben Johnson:** I mean, in the most friendly way. He'd tell me how to fix it, he'd give me links to low-level Unix documentation... So he definitely helped to stabilize Bolt, so a huge shout-out to him. I know that at Heroku they have some log stuff that runs through Bolt, or uses Bolt in some capacity... But yeah, there's definitely some cool projects out there that people are using it for.

**Jerod Santo:** In addition to that, it seems like whenever you talk about key-values, there are a few common use cases - specifically thinking about web apps; that's kind of where my mind goes, as I'm a web developer by trade. So caching is a big one, background jobs... It seems like those queues are pretty good scenarios. There are tools out there that do such things; I mentioned them before the break - Memcached, and also Redis. Can you compare and contrast to those, if you're familiar with them?

**Ben Johnson:** Sure, yeah.

**Jerod Santo:** And how good would Bolt be at those particular jobs?

**Ben Johnson:** Well, Memcached is meant to be - if I understand it correctly - an in-memory cache. I don't think there's a backing store on it.

**Jerod Santo:** Yeah, it's not persistent.

**Ben Johnson:** Yeah. It's been a long time since I've used it. So you can store data in there all day, but it's meant to just be a layer to hit quickly, but you can always fall back to the underlying data store. So Bolt, in contrast, writes all the data to disk safely; even in the event of a crash, it will come back up. And if you've committed a transaction, that transaction will be there.

If you look at something like Redis, on the other hand, it has two different persistence layers. They have a write-ahead log and a snapshot, I think... I could totally be butchering this. But Redis - it stands at kind of a higher layer. They have a key-value piece in there, but I know they have a whole bunch of other data structures they do as well.

**Jerod Santo:** Yeah. I mean, as far as complexity goes, Redis has lists, and sets, and different objects, and stuff.

**Ben Johnson:** Yeah, which is really cool. They don't have a sense of a transaction though, so I think if you really want strong transactions, which I think a lot of people don't realize how important that is... We get these kind of weird, inconsistent states when we're trying to write ten keys, but we only write eight of them... And you know what happened to those last two, and we try to resolve that by writing jobs to kind of fix it later on, or check for it.

**Jerod Santo:** Yeah.

**Ben Johnson:** \[00:28:02.24\] But if you can actually get strong, serializable transactions, I think that goes a long way.

**Jerod Santo:** So Bolt has transactions...

**Ben Johnson:** Yeah. They're actually full ACID serializable transactions.

**Jerod Santo:** So can you teach me that like I'm five? Can you just go through a transaction and tell us what that all implies?

**Ben Johnson:** Sure. So you start a transactions - we can do read transactions or write transactions. Write transactions you can only have one at a time, so they all go sequentially; they're serialized. Read transactions can start on and off whenever they want. You can have multiple at the same time, and all will go off with the same -- that point in time when the transaction started.

So the actual write transactions - they will kind of give you a space to work in, and you can change data and rewrite those keys and values, or create buckets... And then when it goes to commit it, it'll take those pages it wrote and it'll write all the all the pages out, and then it'll write a new meta-page, and it kind of has this almost -- if you've ever done graphics stuff, it has basically a double-buffer for your meta page.

So it has to write all the data first, and then it writes a new meta page to point to that new data, and the transaction is not committed until it writes that single last meta page. So it has this interesting piece to it, where it's -- it's not recovery, like you get in a lot of databases. If it crashes, it'll just start back up with whatever data is committed. There's no, it doesn't have to read a log to reapply changes, it's just whatever it was... And it has this unique safety property, which is really nice. I don't know if that's in-depth enough, or you want some more details.

**Jerod Santo:** No, that was pretty good.

**Ben Johnson:** Okay.

**Jerod Santo:** And you implemented all that yourself, so that sounds like something that is a nice thing to have, especially for something that you're gonna be building on top of. It sounds like a feature that is definitely not unique to Bolt, but as far as key-values go, I think that's a nice-to-have. Or it's kind of even a -- you've gotta have that, right?

**Ben Johnson:** Well, you'd think you've gotta have it, but... Serializable transactions - they're not even the default on a lot of relational databases. I think they're actually re-committed transactions. There's all kinds of different isolation levels, and it's honestly hard to remember all the little nuances.

**Jerod Santo:** Sure.

**Ben Johnson:** But serializable transactions means you can't read anything in another transaction that's been committed already, but didn't get committed before the transaction started. You kind of get this whole view of the database. It's basically how you think of transactions in your head, normally. It's like, "I have this safe world where everything is how I expect it to be." That's a serializable transaction.

**Jerod Santo:** Right.

**Ben Johnson:** There's a lot of other ones that try to make trade-offs for performance...

**Jerod Santo:** Or speed, yeah.

**Ben Johnson:** Yeah, where you can read things that have been committed in another transaction after this one started, but before it stopped; it's confusing, honestly. But if you think of transactions, it's probably what you'd expect.

**Jerod Santo:** But yeah, it's really useful to have that safety... And I tried to pare down Bolt to really be like the core things that I needed. AlanDB had a lot of other features around performance, where you could write stuff directly into the database, instead of going through some other safety measures, and they had some other trade-offs they made... But I tried to cut out all those extra pieces... So it ended up being like 2000 lines of code, which I don't know if that sounds like a lot for a database this tiny...

**Jerod Santo:** Yeah, I was gonna say... It sounds like a lot if I was just gonna sit down and code that day, but... For a database it doesn't sound like too much.

**Ben Johnson:** Yeah. So AlanDB I think is about 8,000 lines. If you look at LevelDB, I think it's around 20,000 lines...

**Jerod Santo:** LevelDB is very similar to Bolt. It's out of Google. It seems like there are some differences.

**Ben Johnson:** \[00:32:02.25\] Yeah, so that's an LSM-tree. So that'll do the write-optimized, whereas -- so you could write stuff in the LevelDB much faster than you can in Bolt. But if you're looking to do range scans, where you have a set of data in order that you're trying to go across, Bolt will be much faster than LevelDB.

**Jerod Santo:** Awesome. So that's Bolt in a nutshell... Great readme, by the way. I've gotta give you respect for going into great detail there.

**Ben Johnson:** Thanks.

**Jerod Santo:** GitHub.com/boltdb/bolt, check out the readme. Ben goes through not just usage and backups and stuff, but he actually goes through a comparison with other databases, he'll talk about the LSM-tree versus the B-tree, when you should use which one, there's even caveats and limitations... Lots to be had there. Check out Bolt, a low-level key-value store that's simple on purpose, and it sounds like it's a rock; it's been production-ready since November of last year, and people are picking it up, so check that out.

I think we should switch gears a little bit and talk about the next one. I know we had a list of a ton of databases... We're just gonna pick a couple, because we don't have too much time... The next is the one that you seem to be working with either in a consulting capacity, or full-time, but... InfluxDB, which is open source as well, but also has a business built around it. Can you tell us about Influx?

**Ben Johnson:** Sure, yeah. It's a time series database, and we really centered it around being easy to get up and running. We have clustering in there, we can actually spread it across a lot of machines... And then we're building out a lot of great functionality now for doing a lot of write-ahead logs for write optimization, and doing compression in there to shrink down the size of the database... So it's coming along.

People have really been interested in it as far as -- again, it's one of those simple databases that... You know, we use Bolt underneath, so there's no other service to get up and running. I know some other things have relied on Redis, or some other data stores in the past... Actually, a lot of them rely on Cassandra in the background, they kind of push that of to there... But we're -- it's really just one binary, you just download it and just start up. It's been great in that sense. People have been really interested.

**Jerod Santo:** So as far as time series databases go - I don't have much of a context besides speaking with Julius Volz about Prometheus, which at its core has a time series database... And I know that Prometheus uses Bolt here or there... I'm curious about if he uses Influx or not... But are there other time series databases out there that people can pick up and use, or is this a brand new thing?

**Ben Johnson:** There's been times series databases out there, but the funny thing with time series databases, especially some of the older ones, is that they're just notoriously difficult to get up and running... And a lot of people will actually pick up Influx, more or less -- I mean, initially out of frustration; they spend three hours trying to get Graphite running, or something like that...

**Jerod Santo:** Right... \[laughs\]

**Ben Johnson:** And they just give up. It's interesting, the technical decisions you make along the way about what dependencies you might need, and how those dependencies change over time, and how that makes a project easy or hard to get up and running... It's not a new thing by any means. I think there's a lot of ease of use stuff. We have a query language in there, we do a lot around the way people are gonna retain data long-term, and how they roll it up, and how they can move it around... So there's a lot of thought that's put in that, too.

**Jerod Santo:** So let's maybe zoom out a second, talk about time series as a thing. When would I reach for this type of a data store. The one I can think of off the top of my head is analytics... But are there other use cases for time series data stores?

**Ben Johnson:** Sure, yeah. Analytics is a big one. Monitoring has been another big one as well. A lot of people have sensor data. That's actually been a big, growing one with Indeed.

\[00:36:05.21\] There's some weird use cases with sensor data as well... There's a company that has sensors, but they don't send data continuously. They store it up, and then every four hours they send off the data... And some databases - they expect kind of a stream of data coming in, and stuff will get dropped off if it's too late, or out of order, or certain things like that. Sensor data has been a big one as well. So I think between those three - those are probably the main ones.

**Jerod Santo:** Yeah, I can see it also with streaming financial transactions and market stuff...

**Ben Johnson:** Yeah, that's another one, too.

**Jerod Santo:** Yeah. Anything that's going to have a real-time stream of data, and you're gonna be either capturing it, or aggregating points in time to use later - it seems like that's kind of where these things play.

**Ben Johnson:** Yeah, it's one of those things, too -- it's one of those use cases that's grown large enough where people have started writing databases specifically for it... And if you try to put it into something like MySQL - I mean, MySQL has a ton of features on there for relational access, and indexes, and all kinds of stuff... But if you really just have a timestamp and a value or a set of values, and that's the data that you have going in, there's much better ways you can optimize that in a specific store.

**Jerod Santo:** So Influx is both an open source project and a company... I'm not sure what the product is; if it's services, if it's a pro-plan... How does the business side break apart from the open source side of Influx?

**Ben Johnson:** The business side - we have a managed/hosted product over there as well... And we have SLA stuff as well for more enterprise customers. Those have been the big pushes, too. We have some stuff coming down the line as well, but I think that's more hush-hush.

**Jerod Santo:** Okay.

**Ben Johnson:** Yeah, so people have been pretty excited too about having kind of a roadmap of where Influx is going and what we're doing with that. I think a lot of times -- some businesses have been hesitant with other open source projects if they don't know the long-term... Like, if they wanna built a product on top of Influx, they wanna know that there's a company there, and that they have funding, and they have...

**Jerod Santo:** It's not gonna disappear.

**Ben Johnson:** Exactly, yeah. Because sometimes projects do kind of go into the ether...

**Jerod Santo:** Right. Yeah, and I guess whenever you have a business divide and an open source divide, we start to wonder about licenses. By the way, Changelog listeners always are asking us, "Talk more about licenses." Bolt is MIT-licensed. How does Influx's license break out?

**Ben Johnson:** Yeah, Influx is also -- I believe either MIT or BSD. Honestly, one of the reasons I came on originally with them is that both of the founders are just awesome, laidback, cool guys that love open source. \[unintelligible 00:39:00.27\] has been involved on the Ruby side for a long time... And they're very focused on putting out stuff and being in the community, and talking to people on Twitter, on GitHub, and getting people involved... So I really like that about them. But they don't have a restriction around a GPL license, or anything like that.

**Jerod Santo:** Okay.

**Ben Johnson:** So they've been pretty open about it all. I know there's been some contention about whether you should do a dual license, or how all that lays out... I'm kind of anti-GPL personally, but... I'm sure that's gonna start a flame war right there... \[laughs\]

**Jerod Santo:** Well, why? Tell us why.

**Ben Johnson:** I think the thing is -- I guess I shouldn't say "anti-GPL." If it works for you, that's great. For me personally, I like to make things, and I like to be able to just put them out there in the world, and people can kind of riff off that and do something with it if they want to, or they could go build a company out of it.

\[00:40:04.07\] If I can do something that will somehow make value in the world, I think that's awesome. But whenever I see something that's GPL, I don't know if I'm ever gonna wanna do something in that realm again. I don't wanna worry about some derivative work issue coming along later on... So if I see GPL, I honestly just close down the project; I don't even look at the project, because I don't know --

**Jerod Santo:** Just like that.

**Ben Johnson:** Yeah, just like that. I mean, I hate to even say that, because I think people have done great work that is GPL, but there are a lot of businesses that just simply can't use it... And some people may wanna use it in a business capacity... There's all kinds of hoops that just kind of make me skittish, personally.

**Jerod Santo:** Yeah, I'm of two minds, as I am on many things... I can see both sides. But I personally MIT-license almost everything I do. That being said, I'm mostly putting out small things that are, I think, trivial... Not like your -- I mean, even your BoltDB is more ambitious, and because its infrastructure is more likely to be included in commercial products than anything that I build open source... So if I had a more substantial, bigger thing, I might put more thought into it, personally.

But yeah, I can see how the GPL limits adoption, absolutely, and how there's a lot of noise in open source, especially now more than ever... It's hard to let the cream rise to the top, so to speak. That's one of our missions with The Changelog, is to shine the light on open source, like the little guys who are doing cool things, but their voice gets drowned out in the crowd; we like to shine a light on that... Because we realize that there's a lot of noise. So putting a GPL license on your thing makes it harder for it take off like it would with a more liberal license. That being said, I also understand the side where it's like, companies are just profiting off of my work - I get that. I get that, too. So it's tough.

**Ben Johnson:** Yeah. I had a discussion with \[unintelligible 00:42:08.22\] with Mike Perham... Is that how you say his last name, Perham?

**Jerod Santo:** Yup.

**Ben Johnson:** Yeah, and it seems like the GPL - the dual license is working for him with Sidekiq.

**Jerod Santo:** Yup.

**Ben Johnson:** So I certainly -- I don't wanna knock it, by any means. I think there's definitely a use case out there for it.

**Jerod Santo:** Yeah. And we've had Mike on the show a few times. He's been unique in the ability to turn a popular open source project into a business... A lifestyle business, not a VC-funded, larger thing... And he has a lot of opinions on not just licensing, but also the sustainability of open source, and how to make it work for you.

I'll just submit that for the listeners... If you're interested in that topic - I don't have the episode numbers on me, but go to changelog.com/podcasts and just search in page for the word "Mike" or "Perham." You'll find some interesting episodes on that.

Yeah, when it comes to licensing, it's something that we all have to wrestle with, as we put our software out there - what are our priorities and what do we feel comfortable with. Everybody's gotta make their own decision on that front.

**Ben Johnson:** Yes. It's a mined field though.

**Jerod Santo:** It really is, yeah. So back to Influx just a little bit... It's at 0.9.2, so not quite at 1.0. But it seems like it's out there and getting steam... Anything else about InfluxDB that you wanna hit on before I move on?

**Ben Johnson:** Yeah, we just keep working at it. It's just a product that's continually evolving and improving... So I think that if people have tried it in the past, we've done a lot to improve upon it, so I hope people try it again, certainly.

**Jerod Santo:** Awesome. Alright, we'll take our second break... When we get back, I wanna talk to you about something a little bit different, which is -- I'll just leave it as "The Secret Lives of Data." Let's just leave it right there, and we'll peel that up hard when we get back.

**Break:** \[00:44:20.21\]

**Jerod Santo:** Alright, we are back with Ben Johnson, talking open source databases... And perhaps somewhat related is this really cool thing called The Secret Lives of Data", thesecretlivesofdata.com (we'll link it up in the show notes), where he explains a thing called Raft in a cool, visual way. Ben, can you tell us about this?

**Ben Johnson:** Yeah, sure. The Secret Lives of Data is just meant to be a project where -- I feel like distributed systems and database topics and computer science topics... I honestly feel like you can explain any of those topics with circles and lines and motion... Whenever you go on a whiteboard, you're like "This is this server here, and it sends the data here and does that", but we don't have that. We have books, static images, and I feel like there's a piece that's lacking... Especially with so many distributed databases, and all these kind of systems design things that people need to learn about, but it's research papers, and it's these books that come out that are kind of tough to sink in...

So I wanted to find some way that was easily digestible to explain complicated topics, like distributed consensus, for example. It's not like the easiest topic to explain to someone... But if you can step through it, piece by piece, and kind of show some motion with it, I think people tend to pick it up. I've had a lot of people actually mention that they read through the paper a couple of times, but it didn't click until they saw this visualization of it.

So to explain what it actually is... It's almost like a motion graphic of how Raft and distributed consensus -- so this protocol called Raft implements distributed consensus, where you have a set of nodes, like a cluster of computers, and they need to agree on some value, and how that happens and how it changes over time... And if you get a split in your network, what happens to different sets of nodes, and how does it avoid situations where some nodes think that they might have one value, another might think it has a value... So there's all these edge cases that you don't think about, and that are kind of hard to wrap your head around... But I try to explain that visually.

**Jerod Santo:** It does a great job, by the way.

**Ben Johnson:** Oh, thank you.

**Jerod Santo:** This is incredibly impressive. I don't know when you launched this, but I think it hit my feeds then. I didn't know who did it at the time, but then when I started doing some research into it, I was like "Oh, man, he did this. That's pretty cool!" So where's the motivation behind sinking the time into this? Do you have an educational background, or what made you wanna do this?

**Ben Johnson:** \[00:48:05.18\] People have put out so many great resources that I've learned from... I know you had Ilya Grigorik on the show a bunch...

**Jerod Santo:** Yeah.

**Ben Johnson:** When I first got into writing databases, everytime I'd find some concept that I wanted to learn about, I'd type it into Google and he'd have the first page on there with his blog, about some obscure topic, about like bloom filters or whatever.

**Jerod Santo:** Yeah, exactly...

**Ben Johnson:** And he sunk so much time at his blog to explain these great things that I learned from. I feel like that's some way I can give back. I knew Raft really well, and I've implemented implantations in that... And yeah, I was just trying to think of a great way to visualize that and show it. At first, I thought it was gonna be like a week and I'd be done...

**Jerod Santo:** How long did it take?

**Ben Johnson:** I think it was like a month and a half.

**Jerod Santo:** Wow.

**Ben Johnson:** I ended up writing -- I wrote in D3, but D3 doesn't have a way to stop motion partway through...

**Jerod Santo:** Okay.

**Ben Johnson:** ...so I actually had to write my own timers and framework on how it's gonna structure stuff... And I essentially wrote a Raft implementation in JavaScript, that I could run inside... Because if you play the visualization twice, it will actually be different the second time... You know, the way the nodes shoot off. So it was a huge pain...

It's been kind of sitting idle for a little while, but I ended up taking a while off and learning this program called After Effects from Adobe, which actually does motion graphics... Because I thought there had to be an easier way, and there is. People do this for a living. It's almost like a Flash, but you can generate video, and do all kinds of stuff. People use it for special effects in movies a lot...

So yeah, I wanna start doing stuff as -- originally, I was gonna do five-minute videos for things like Apache Kafka, or Cassandra, or all these more complicated databases and how they work underneath...

**Jerod Santo:** Yeah, yeah.

**Ben Johnson:** So I've spent like 3-4 months learning after effects, and reading books, and watching videos on it... And then I ran out of time to actually make the visualizations. But I realized also -- originally, I was gonna do these five-minute videos, but then I kind of realized later on snippets seem to be much more easily digestible, so I'm thinking about doing a smaller format of like 20-second animated GIFs that I can post up to Twitter. It seems like they'd be able to spread a little better. You just click on it and learn about how Apache Kafka works in 30 seconds.

**Jerod Santo:** Yeah.

**Ben Johnson:** So we'll see if that works, but that's my goal right now.

**Jerod Santo:** I love it. I would say just to exhort you to continue in these efforts, because I think it is a powerful way of teaching... And you know, maybe not to give up completely on the work you put in to build this one - maybe it's just too crazy, but if you could get some sort of a framework in place to where you could do other things more easily, then you could start to have an infrastructure for other people building out these types of things on the web. That being said, animated GIFs - people love those.

**Ben Johnson:** People love them, yeah.

**Jerod Santo:** Although it's strange to find one that's useful... \[laughs\]

**Ben Johnson:** It is. I think they would probably the first ones...

**Jerod Santo:** They're usually just displaying some sort of emotion or surprise... But yeah, the first useful animated GIF - maybe you get on Wikipedia for that.

**Ben Johnson:** I hope so. It would be my entry

**Jerod Santo:** Awesome. Well, we'll link that up in the show notes. Ben, I think it's time to go to our awesome closing questions... And we will ask the first one, which has become somewhat compulsory these days, which is "Who is your programming hero?'

**Ben Johnson:** \[00:52:01.07\] I would have to say Ilya Grigorik. I just learned so much from that guy from his blog... And I would totally just be his groupie, totally; if he was at a conference, I'd just follow him around the whole time.

**Jerod Santo:** I have to give my Amen on that one. He's influenced me quite a bit in my development... And I don't get too nervous for these shows, but with Ilya for the first time I had that like "Oh man, this guy is so smart." I hope I don't sound like a dope interviewing him. Yeah, he's awesome. Shout-out to Ilya out there. Very cool.

Next one is Open Source Radar. So if you had a weekend and you were just gonna hack on some stuff, you weren't working on your After Effects things, but some new project, something that's interesting to you, what is it?

**Ben Johnson:** It's not even necessarily a new project, but the new stuff going into -- like, the Go standard library and the Go toolchain... Things have just been fascinating. There's just been a lot of stuff around the garbage collection... And then - this is actually standard library, but go-fuzz is another one that came out recently, which is kind of like fuzz testing, and just making really solid libraries that are well-tested against all kinds of crazy incoming data. So I'd say those two.

**Jerod Santo:** Very good, very good. The last one for you is - if you weren't an awesome open source developer working on these database tools and whatnot, if you weren't doing this, what else would you be doing?

**Ben Johnson:** Man, that's a tough question right there... Hm. This is gonna be kind of a cop-out answer, but I started doing the startup thing for several years; I was gonna make a company and do all this stuff... And I eventually stopped doing that, because I came to this realization that I'd made a bunch of money, I'd just go write open source all day for my free time... So I can't think of what else I'd be doing, honestly, with my free time. I think I might just go on hikes. We've got some awesome stuff around here in Colorado, so I think I'd likely be a tour guide maybe.

**Jerod Santo:** That works. I love that. So you're like "Well, if I can make a bunch of money, then I can go do open source for the rest of my days." You're like "Wait a second..."

**Ben Johnson:** "Wait, I can do that right now."

**Jerod Santo:** "...I can just do open source right now."

**Ben Johnson:** Yeah, exactly.

**Jerod Santo:** Awesome. Well, one thing to mention before we say goodbye is that we've been doing a film series, Changelog Films, at all of the - not all of them, but many - developer conferences. We call it Beyond Code, and we ask similar questions to the ones that we ask for our closing questions - in fact, Programming Hero is featured in that series as well - to different developers of all shapes and sizes at the after-parties of different conferences. It's really cool, I want you to check it out.

We've just finally launched the website, because we've had the videos forever, but the cobbler's kids have no shoes, so making a website for ourselves was a lot of work... But we're pretty proud of it, and we want you to check it out. It's at BeyondCode.tv. Right now we have season one up. That was that Keep Ruby Weird last fall. We have seasons 2, 3 and 4 also in the can... So those videos will be showing up there shortly. Check it out, BeyondCode.tv, and let us know what you think.

I just wanna say thanks to you, Ben, for joining us. It was a really good conversation. I'm excited about BoltDB and all of these cool, new things coming out of the Go ecosystem. I wanna give a shout-out to our Changelog members and our awesome sponsors for this show, helping make it happen. Don't forget to tune in next week, when Carin Meier joins us to talk about Clojure. Check that out. Until then, we'll see ya!

**Ben Johnson:** Thanks for having me, Jerod.
