**Erik St. Martin:** We are back for episode \#15 of GoTime. On the show today we have myself, Erik St. Martin, Brian Ketelsen is also here…

**Brian Ketelsen:** Hello.

**Erik St. Martin:** And Carlisia Campos…

**Carlisia Thompson:** Hi.

**Erik St. Martin:** And then our special guest today is pretty well known in the industry, and has quite a number of interesting projects and articles that have been out. Please welcome Ben Johnson.

**Ben Johnson:** Hey there. Thanks for having me.

**Brian Ketelsen:** I'm crazy excited about this, Erik. I've gotta tell you.

**Erik St. Martin:** I know, me too. I mean…

**Brian Ketelsen:** Ben is a staple in the Go community, the smartest man alive. Probably the nicest — maybe him and Matt Holt are probably in a tie for the nicest guys alive. So this is going to be an epic show.

**Erik St. Martin:** Well, I mean…

**Brian Ketelsen:** Seriously.

**Erik St. Martin:** One of the things that I remember — this was a number of years ago, but it was like, "I'm going to implement Raft." \[laughter\]

**Ben Johnson:** That wasn't necessarily a good idea, though.

**Erik St. Martin:** I mean, the learning lesson of it, right?

**Ben Johnson:** It was definitely a learning experience.

**Erik St. Martin:** Brian will tell you, I have the addiction to databases, too.

**Ben Johnson:** They're fun. They're really fun.

**Erik St. Martin:** So I think first — it's more newer content... One of the first things I want to talk about is your new series of posts, your walkthroughs.

**Ben Johnson:** Oh, sure.

**Brian Ketelsen:** Holy crap. Wow.

**Erik St. Martin:** Yeah.

**Ben Johnson:** It's been a really cool experience. I thought I would go through and explain some stuff. I use the standard library quite a bit. A lot of people gave me a hard time because I tend to not use their private libraries (maybe when I should), in lieu of the standard library. So I thought I would probably know most of it, but I learned a lot through the experience, too. Because little details about case folding in Unicode, all these little things you wouldn't expect, even from the first two introductory... You know, the IO, and the bytes, and the strings packages, which seemed like the most simple ones, obviously.

**Erik St. Martin:** I think that's the interesting thing about producing content, right? So if you prepare a talk, or an article, or write books or do instructional videos, you'll always want to make sure you don't misspeak, so you end up doing a lot more research, even on topics you think you already know well, and it forces you to learn new things.

**Ben Johnson:** Yeah, and I feel like it kind of lets you know what you don't know about the subject. Yeah, it can help you grow.

**Brian Ketelsen:** I really love the level of depth in these articles. It's fantastic. I don't think I've read better blog posts. I can't talk today \[laughter\]. We need to start this whole episode over with better lips.

So I really love the depth of knowledge in these. It's not written at such a level that it makes me feel like an idiot, it's just the tone and the technical detail is perfect. I really enjoy these series.

**Ben Johnson:** Oh, thank you.

**Erik St. Martin:** We'll link to all of these in the show notes, but we'll start dropping them in the GoTimeFM channel on Slack for anybody who's listening now, and wants to look through these posts if they haven't seen them already.

**Carlisia Thompson:** And this is so timeless. It's going to be useful for probably forever. We just need to do a good job resurfacing these posts once in a while.

**Ben Johnson:** The nice thing about the standard library stuff is that it doesn't really change. They'll fix bugs and make it faster, but you don't have to go back and revamp it. Well, maybe version 2.0, if that ever comes up for Go.

**Brian Ketelsen:** Never.

**Ben Johnson:** Yup, I agree.

**Erik St. Martin:** \[03:55\] I think we need more content going through the standard library like that, and showing use cases. Because you can browse through Go Docs, and stuff like that, and look on the Go website, and look through these things, but that doesn't necessarily show you… We talked about Sourcegraph tool, right? When you start to use something, being able to see example use cases of these things. One example is I think Bill Kennedy had posted something about reading byte streams, and stuff like that - and this was just a couple days ago - and you've also got your post that was recent about using all the io readers and writers and TeeReaders and MultiWriters and stuff like that. It kind of drives that stuff home, right? It starts making people aware of these functions and packages that you might not have already been aware of.

**Ben Johnson:** Yeah, for sure. You look at these packages and you see that the layout is alphabetical order, which is great if you know what you're looking for. It's been fun to break them down and understand… There's subcategories in these packages and what those look like. I think that helps to make it more relatable.

**Brian Ketelsen:** I like the sub-context that comes out - not directly, but indirectly I walk away reinforcing the idea of very small interfaces in Go. I know that in a practical way, a lot of us think of interfaces as a big thing. "I've got an interface to save my user to the database." But that's not really the idiomatic Go interface. The idiomatic Go interface is an io.Writer. It's a tiny thing, it does one thing. Walking through these blog posts, in the background, hammered that home for me.

**Erik St. Martin:** Yeah, especially the Standard Package Layout post. I was looking through that, and each approach was the negative sides to it. I could think of packages and projects that I've seen that have used it a lot. And you're like, "Yeah…" I've had some of the circular dependency issues, and stuff like that based on doing Rails-style layouts and things.

**Ben Johnson:** I try to think of that as well. The Go standard library, it always makes so much sense; all the names, and the packages... It's just so well laid out. I think that was a big inspiration, too. What did they get right, and how do we apply it to more specific application development? I think they are different worlds, but there's a lot you can borrow from both, you know?

**Erik St. Martin:** I think we need a service. Library Organization as a Service. Here's my project, \[laughs\] you tell me how to lay it out.

**Carlisia Thompson:** That's exactly the name of the conference talk that I think should be derived from the Standard Package Layout blog post. Packages as a Service \[laughter\].

**Brian Ketelsen:** Nice!

**Ben Johnson:** Should be like a package layout factory.

**Erik St. Martin:** "Send your project to Ben and have him send you back what the layout should be…"

**Brian Ketelsen:** That's fabulous; $50 and he'll reorganize all of your packages for you.

**Erik St. Martin:** Look at him undercutting your price already. \[laughter\]

**Brian Ketelsen:** Well, Ben's a superhero, it's only going to take him 10 minutes. That's a pretty good markup.

**Erik St. Martin:** That's true. If he could do one every 10 minutes, that would be a good hourly rate. \[laughter\]

**Ben Johnson:** I've gotten a handful of people so far on the Slack channel just pinging me, asking me questions about the design stuff, which has been nice. You just give some people some quick feedback. It's nice to do that early on, because you know, projects go on for years, and getting that first piece can make everything else so much easier.

**Erik St. Martin:** It gets really hard, right? There's the common expression 'it's hard to change the wheels on a moving bus.' Especially the bigger projects, you start going down this road, and you're kind of trapped in it. It takes too much effort to change out the organization, and abstract things out the proper way. It becomes a massive effort. Getting off on the right foot is good.

**Carlisia Thompson:** \[08:00\] I really liked when I saw... Ben gave a lightning talk at GopherCon and I was there, and I went, "Okay! This is what I'm talking about! I need to learn how to do this." Because a lot of the Go projects that I've seen, a lot of them have a model package, and I just cringe. I don't know why I cringe; I started to understand why now, after going through this learning.

Then I look at the models, and they have model information, and they have database implementation information altogether, and I don't like that \[laughs\]. So I really, really like the way that Ben lays everything out, and separates everything. Recently, I laid out a project from scratch. I'm not super experienced with Go, but I thought about it for a long time, because I feel that I need to have things organized, and if I don't know where to put them, I don't know what it is that I'm doing, and I need to figure it out. It's just part of the process for me.

**Brian Ketelsen:** That leads me to an interesting question that I always struggle within Go packages. How big is a package? How big should a package be? Where are the boundaries for your packages? I always make too many packages; I don't know whether that's Ruby or Java in my background coming out, but I always make too many, and then regret it instantly.

**Ben Johnson:** I think I've gone back and forth. I used to very much be on the mono package, like "Just put everything in there. It's a pain to try to separate out everything." I've gone the opposite end, too. I don't think that code size, the number of lines, is necessarily a good proxy for it. Sometimes you can have a huge package, and it feels fine. Other times, it's rough. I don't know. Separating by dependencies has worked for me so far. It works out to a midsized project, probably. If you have a really huge project, you might need to start breaking some stuff down further. I've been everywhere on that spectrum.

**Brian Ketelsen:** That was kind of the anti-case I was thinking of. When you think of a large Go project, like Docker or Kubernetes, I wouldn't even know where to begin to start making those boundaries; it's so complex. When you think about dependencies… Good Lord, what are the dependencies in Kubernetes? I don't know. Maybe that's just too deep for me to think about right now.

**Erik St. Martin:** But I think you can go back to the basics a little bit too, right? Two common books that I remember recommending to people over the years is Robert Martin's Clean Code, and he wrote another one, too; and The Pragmatic Programmer: From Journeyman to Master. Both of them advocate… You want things that aren't highly coupled together, for one, but your packages should be cohesive, right? Everything within the package should make sense. They should all be operating on the same data. If two packages seem to want to know too much about each other, then really you probably have your code in the wrong place, right?

**Ben Johnson:** Yeah, that's a good point.

**Brian Ketelsen:** That's what Nathan Youngman says on our Slack channel, "A package for a single idea" is something he heard from a talk a little bit ago. And that's good advice if you can well define what an idea is. If an idea is something not very broadly defined, that might work.

**Erik St. Martin:** So talk to us about the motivation behind this series of posts. Is this something you're going to continue doing? And this is kind of like a side step from some of the things that you've been talking about, right? The first two GopherCons; the first one was writing high-performance databases, the second one was static code analysis, and now it's kind of like a shift into getting back to the basics, like project organization and library usage.

**Ben Johnson:** \[12:02\] I think that I go from low level to high-level, and back again. I think that this structuring of projects and these high level concepts, they're kind of where I am now. I've been doing a lot more at the application level, and trying to figure out how that looks for Go applications. One thing that's always bothered me is when people say you can't write websites and web applications in Go, that it's an API thing, but it's not. You can't really build real web apps with it. I think there's now that sense of how you structure projects. I want to find a better way to do that. Part of it has been from doing stuff with Bolt. In my opinion, at least in our industry, we have containers, we have Kubernetes - which are great tools if you're at that scale, and you need super high uptime and crazy requirements, but I think for probably 90% of the applications out there, you could probably run on a single server fine and handle hundreds of thousands of requests per second, which is probably most people's load using something like Bolt, or some other key/value database. I'm trying to figure out how to simplify the stack and get away from traditional SQL databases, and things like that.

**Erik St. Martin:** There is a lot of the whole 'fear of missing out' thing. All these new technologies come out and you want to feel that you need to use it.

**Ben Johnson:** Yeah, totally.

**Erik St. Martin:** Otherwise you feel like you're obsolete, you're not sticking with modern times. But as you said, the majority of people's systems just don't need to scale. Everybody doesn't have Kubernetes-level problems. If you have just three nodes that you're managing, I'd argue that you probably don't need Kubernetes for that. It's pretty simple to do with Puppet and Ansible, and things like this. They come with their own problems, too. I love Kubernetes, I really do, but it comes with its own set of unique problems and constraints. More things you need to manage, and setup and configure, and all these things. It's a lot of cognitive load for something you may not need, you're just using it for the sake of being able to say that you use it.

**Ben Johnson:** I totally agree.

**Carlisia Thompson:** Going back to something that Ben said… Ben, what do you think or tell people when they say, "Well, Go is not really for web apps; I don't know if it's even for API." Do you hear people say that?

**Ben Johnson:** I think it does well with APIs. I think… I did a talk over at GopherCon for the kickoff party that was around... A lot of the industry is moving, we're not doing… Well, two things that Go's not really good at is templating and SQL databases. I mean, it's not great. You can use it, but it's not great. And the premise was a lot of people are moving away from SQL databases, key/value stores, or NoSQL databases, so that's less of a problem. And then using things like React on the frontend, that's making it so we are interacting with APIs and we don't have to have this templating side. I think the industry shift is actually moving more towards that Go is better for.

**Carlisia Thompson:** Yeah, and even Amber - I learned that actually just yesterday, that they have something that generates JSON API's pack, and if you have a schema for that, I think they auto-generate code. Somebody was saying it's super easy, and we can do that with an API in Go, of course. Now, I have to follow up on something else you said now. Why is Go not good to use with SQL? I've never heard that before.

**Ben Johnson:** If you use something like… I came from Rails before Go; that was my most recent language I was doing before Go.

**Erik St. Martin:** You're in good company. We're all ex-Ruby on Rails people.

**Ben Johnson:** \[16:07\] When you're doing simple web apps that don't need a lot of performance, Rails is pretty great. You just throw some migrations up there, and you just start typing, and you get all kinds of stuff for free. You're never really interacting with SQL at that low level. Go has some ORM tools; I haven't used any for quite a while. I'm not a huge fan of SQL databases. I used to be an Oracle DBA for years when I first started out, so I think SQL databases are really cool for certain applications, but the more I get into it, there's just this insanity of how we're sticking data in and out, and converting it, and doing this relational object impedance thing where the things that we do in our applications don't fit in the SQL Database.

You have to break it out, and then we recreate, rebuild it back again. Going through the whole idea of setting these strings over to a database, they have to get parsed, and they get optimized, they get saved in a query cache, and then they get planned, and all this stuff... There's so many crazy steps involved in using SQL… It's an everyday thing now, but if you really dive into it, and think about it, it's kind of nuts what we have to do to stick data into SQL databases, instead of say… I can say an object database, but even just -- like in the instance of Bolt. Serializing objects into bytes and saving those is relatively well understood, and an easy thing to do. I'm surprised that our industry hasn't done that more, going for these very simple tools.

**Erik St. Martin:** So I need to find the YouTube talk that I saw, and I may be misspeaking about what he worked on, but I believe that he worked on DB2, or something along those lines. And he was doing a talk, basically, about the things he knows for certain, which is history repeats itself, and he was bringing up that whole shift towards key/value stores. Everybody's on the hype of key/value stores, and he's like, "That's what databases were when they first came out…"

**Brian Ketelsen:** Yeah, in the '60s.

**Erik St. Martin:** Yeah, it was built into the mainframe application, everything. That's just what it did. And they had these maintenance windows when they would update, and then they needed to try to avoid that as the internet came to be and these systems needed to be online more, they couldn't withstand being down. At first they were bank systems, and it was okay for them to be offline after hours.

So SQL came to light because SQL was sellable to business people. You could teach the basics of SQL to a business person fairly quickly, before you get into complex joins and indexes, and all that stuff. But if somebody wanted to query spreadsheet-ish data, they could do that, and that was the shift there. He was talking about distributed databases, and he's like, "Yeah, we had those too, except they were called federated." \[laugh\] And this is history repeating itself. Now that we need performance, we're going back the other direction, but it's just the new old stuff, right?

**Ben Johnson:** Yeah, for sure. If you look at SQL databases.... SQL is just an abstraction layer, underneath the running whatever kind of engine underneath, which is essentially just a key/value store from a Row ID2, some byte-encoded row that's in there. That's interesting just to look at all the little layers.

**Erik St. Martin:** And the difficulty there with performance becomes because of that layer of abstraction, it has to seek so much data of off disk to bring it up into the layer that starts doing the filtering. I know my SQL especially over-fetches data. At least that's done on the machine level, it's not all being passed back?

**Ben Johnson:** Yeah.

**Erik St. Martin:** \[20:00\] I like the approach that we're starting to think about things differently. I like the idea of column-oriented databases, things like... Cassandra was a big one I kind of liked. You could have these really wide rows, and you could scan along them, and read in just as much of that as you wanted, and it kind of takes a new way of thinking about the problem. But these things are highly interesting, and most people aren't doing a lot of complex stuff with data, too. They can't just write they own little key/value logic over the top of.

**Carlisia Thompson:** I have to say that if you have used a NoSQL database and have experience and you can make tradeoff calculations, it's great. But if you don't have that much experience, and you want to know, "Okay, I have this data model, should I be looking at a NoSQL style or architecture?" It's really hard to figure that out, because you search on the internet - where else would you go? And there are all kinds of opinions in each and every way, and you just can't make up a decision. Without going through the experience, it's really hard to learn how to decide, okay, can I safely go in this direction? No, maybe I missed something; if you know how somebody decides to do, okay, I can safely go with NoSQL here, and I'll be fine down the road.

**Erik St. Martin:** I think NoSQL is also an abstraction. So underneath, NoSQL is interacting with a

key/value store, too. So it's just trying to use some sort of probabilistic algorithm where it needs to go to find the data. I think that's an abstraction, too.

Choosing databases is hard, you really have to look at your data model and your access patterns. If you're looking stuff up by key a lot, having the overhead of a SQL Database just doesn't make sense. But there's also speed of development. Everything's a tradeoff. If you're doing a lot of stuff that's doing aggregates, you're trying to do averages and counts and all this stuff, this is going to cause you to have to seek a lot of data and read through it, and perform those calculations yourself. If you're comfortable with the tradeoff of time for development for performance, that may make sense. But if you're trying to get a prototype out, it may not make the best sense. And I'd love to hear your take on it too, Ben.

**Ben Johnson:** Yeah, yeah. I think the difference of NoSQL versus SQL... I think the NoSQL isn't necessarily key/value, it's really more… There's been a lot of databases that try to optimize for a certain domain, I guess, and that tends to be where they shine. If you have a database around time series data, you could really optimize big things with time series, if you have a database specific for that, or if you have a search database. This certain kind of domains that are more specific than the generic SQL. I think that that tends to be where it shines. As far as the aggregates… Yeah, if you're trying to get a prototype out and you know SQL really well; I would totally go for SQL, without a doubt. It's probably not worth learning a new language or system to make something quick and simple.

The things that I like specifically about key/value is that there's a lot of features that you think of that tend to be more around SQL databases, where it's like, "Oh, you have a schema!" A schema and a key/value store can be just a serialization library. ProtoBufs is actually a good serialization library, and they give you things like versioning, just really quick encoding and decoding, and you layer that on top of a key/value store, and you're starting to build your own database. It's simple, but that's a good thing.

\[24:10\] Another thing, when you think about SQL and the SQL language - and I've done SQL for years, and I still find it to be really frustrating when you get down to more complex queries. Your query language when you're actually using a key/value store ends up being Go, which is awesome, because you can do anything you want in Go. So if you need to scan a table, or scan a set of keys and values, you can make an index inside of a key/value store... You can do all those things, and it's really just Go code underneath that's processing it. So you can do a lot to optimize. You no longer have these ideas like query planning. Your query planning is done before compile time, and you're writing the code to actually do the query.

**Erik St. Martin:** There's little misses too, with people, with even indexing. The number of people that are surprised to find out that a single query only uses one index. You think it's the index-2 fields, and they're searching on both fields that somehow it does some sort of merge of those indexes and it makes things faster, and it's going to pick the best one and it could be wrong.

**Ben Johnson:** Oh, yeah. Depending on how you order the fields of the index, they may or may not use it based on statistics, and the statistics can change over time, which can change your query plan. There's a lot of unknowns, and again, crazy stuff that happens inside of a SQL databases that I think we've become accustomed to, that I think are much simpler once you move to a simpler store.

**Erik St. Martin:** The hard part about the shift becomes when you're not a 100% sure what you're going to do with your data. It becomes very easy to open up a CLI app, or your favorite GUI app for a SQL Database, and just poke around with the data, and start trying queries, and discover what it is that you're trying to do, and then implement that in the code side. It becomes harder to do that, but I think the biggest difficulty from the development standpoint — and Brian can agree too, because we've looked at a multitude of databases — it becomes the operational aspects.

So I can agree that a key/value store is fantastic for my use case, but it becomes hard, because how do I manage backups and restores, and things like that? There needs to be operational pieces of it too if you're going to stand it up in production. Along with the overhead of building your own code to interact with the key/value store, you now need to build your own tooling for managing the database, and fixing corrupted files, and all the stuff that goes along with it.

**Ben Johnson:** Yeah, I totally agree with that. I think there's a lot of education side too that's missing. If you're going to start off in that world, it's just not much there to fall back on and to learn from. I hope that improves. I'm definitely going to be writing some blog posts on that, too.

**Carlisia Thompson:** That's a call-to-action for you too, Brian \[laughter\].

**Brian Ketelsen:** Exactly. So I have a question for you, Ben. This is a kind of out-there question. Usually when you have a project, you get a feel for how people are using it. What is the craziest thing you've seen done with BoltDB?

**Ben Johnson:** I would definitely say… This is easy, I can answer this right away. At the GopherCon, I was talking to Marty Schoch—I don't know if that's how you pronounce his last name. He does Bleve—which I thought was always called BLEEVE. But Bleve si the full-text search in Go.

**Brian Ketelsen:** Yup.

**Ben Johnson:** He actually wrote an LSM tree with Bolt; like, there were multiple Bolts that were merged together at runtime. As far as key/value stores go, they tend to be either LSM trees, which are kind of like these LevelDB or RocksDB. They end up having these different levels of data storage, and they get merged at query time, and they get compacted and all kinds of stuff. They tend to be much more complicated, and there's B+ trees - like Bolt - which tend to be very simple databases. He actually used the B+ tree Bolt's to actually build up an LSM tree that would merge in. I thought that was nuts.

**Brian Ketelsen:** \[28:17\] So how does that work? Is each level a Bolt database?

**Ben Johnson:** Yeah.

**Brian Ketelsen:** Wow.

**Ben Johnson:** Just cool, yeah. He made it work. He actually got a performance improvement for… I think it was write performance he was doing. I don't remember the details, but he has a lightning talk. It was great.

**Erik St. Martin:** Well, LSM trees are very efficient on writes. That's why you see stuff like RocksDB. They're very highly optimized for the right speed.

**Ben Johnson:** Sure, sure.

**Brian Ketelsen:** I'm interested... Did he implement the Bloom filters, and stuff like that to determine…?

**Ben Johnson:** I don't know if he got that far. That would be pretty cool.

**Erik St. Martin:** Yeah, I want to see that. If you have a link to that, I would be very interested in that, because that type of stuff really interests me, and… We would have a whole week of episodes on how B trees work, and LSM trees, and all that stuff, but…

When we say LSM, for anybody who's not aware, log-structured merge-tree, and it's just kind of that access pattern, how it builds levels as it stores, and as Ben said, kind of merges them back together. Cassandra is also another big user of LSM trees.

**Ben Johnson:** Yeah, and they work great for a lot of use cases. They tend to be much more complex, especially operationally, but they get much better write speed, on something like a B+ tree typically, for random writes. You do stuff in things like range scans, you need to go over an ordered set of keys... They're typically much slower, because they have to jump around at the different levels, but really good... It's just tradeoffs, that's all it is.

**Erik St. Martin:** So now the largest user of Bolt is InfluxDB, right?

**Ben Johnson:** No. Influx ended up… They have their own format for time series, that's more efficient. The Bolt piece is more of a stop gap. There are a lot of pieces going on as far as distribution of the data, query language, and all that. We moved off of Bolt as actual main storage. We have something called TSM-1 now.

**Erik St. Martin:** Okay. Okay, I remember it having swappable backends to begin with. I think you guys decided that it was too much overhead to support all of them.

**Ben Johnson:** At the time there weren't many people, so it was way too much overhead. There were some issues with some of the other libraries we were using, more from an operational standpoint, not so much from the performance standpoint. As far as the largest user, which I'm not sure… Actually, I don't know how much this public around a certain company is using it; I did find out that there's one company that uses it... I think they have a three or four terabyte-Bolt database. I posted that on the Gophers Slack inside the Bolt Channel. I said, "Hey, this is crazy, someone is using a three-four terabyte-Bolt database" and there were a bunch of people that chimed in, and they were like, "Oh, yeah, I got that, too!" They're using these substantial-sized databases and it's working well for them.

**Brian Ketelsen:** Wow. So how does one operate, how does an operator manage a large BoltDB database that big? How do you take backups of that file? What are the operational concerns when it comes to using BoltDB?

**Ben Johnson:** It is a B+ tree, so as it gets larger, depending on how you structure your buckets inside, the accesses will get, I think login slower. Don't quote me on that. One of those O(n), big O notations. So it will start getting a little slower over time. As far as operationally, Bolt, the actual transaction itself implements io.Writer too, so you can actually send a Writer to it, in order to write out the whole database for you. I like hooking it up to HTTP; so if I just want to do a cURL command, I can just pull down the database. Obviously not a public endpoint, but it makes it really easy just to take snapshots.

**Brian Ketelsen:** \[32:10\] Oh, nice.

**Ben Johnson:** Yeah. Fully serializable, ACID, all that jazz.

**Brian Ketelsen:** That's beautiful.

**Ben Johnson:** And again, that's another tradeoff, too. If you're using an LSM tree, it's much more difficult to snapshot the whole database, because you have multiple files as well other operational issues there. It's not a good or bad, it's again, tradeoffs.

**Erik St. Martin:** I think with almost every tech decision, you have to look at your problems base and determine which decisions gives you the best amount of benefit for the least amount of drawbacks, right?

**Ben Johnson:** Yeah, totally.

**Erik St. Martin:** I think that's kind of the whole thing, how we were talking about the appeal of things like Rails. If you're a company that's bootstrapping yourself, and trying to get a product to market, get a proof of concept out - there's huge appeal in how fast you can deploy a proof of concept website in Rails.

**Ben Johnson:** Oh, sure. Yeah.

**Erik St. Martin:** Especially if the majority of it is CRUD-based operations. I mean, you can throw together a decent site in a weekend, just hammering it out.

**Ben Johnson:** It's pretty much what hackathons are, or the startup weekends - it's just like quick Rails apps in a day or two. You can really get some great stuff, some concepts going.

**Erik St. Martin:** What were those called, the Rails events, Brian? They held a couple locally here, too, where they kind of did it across the country, and people got together. They formed teams and built stuff. It wasn't a hackathon, they called it something else…

**Carlisia Thompson:** I know what you're talking about, it was at Gopher Gala. I did it once... Rails Rumble.

**Erik St. Martin:** Rails Rumble. That's what I'm talking about. There were some cool things that came out of that that I really wish had gone somewhere. And some of them were completely humorous. Like, who came up with this idea?

It actually reminds me too, because there's a new database I saw come out too called noms, and it reminds me of a Rails Rumble project that was here local in Tampa that was called the Omnominator \[laughs\].

**Brian Ketelsen:** Omnominator, that's right. I remember that.

**Erik St. Martin:** I can't remember exactly what it did, but it was something along the lines of finding a local restaurant, but I loved the name \[laughs\].

**Brian Ketelsen:** Yeah, like a food truck search engine, or something silly like that.

**Erik St. Martin:** For the life of me, I can't remember... I haven't seen a Rails Rumble; I haven't been completely connected to the Rails world in a while, either.

**Brian Ketelsen:** No comment.

**Erik St. Martin:** So Adam Stacoviak from Changelog just posted a link to it. The site is not up, but the GitHub still exists for Omnominator.

**Carlisia Thompson:** I want to make sure we get Ben to answer the question that Erik asked.

**Erik St. Martin:** Answer the question, Ben! \[laughter\]

**Carlisia Thompson:** Now that you've written a couple of really thorough blog posts on doing the walkthrough with Go Standard libraries, are you up to doing more of it?

**Ben Johnson:** Oh, yeah. I have 27 more posts lined up, that I'm working on.

**Carlisia Thompson:** Wow.

**Ben Johnson:** I'm trying to start on the lowest level of the stack, which is why I did IO and bytes first, because I really don't depend on much Unicode stuff. But I kind of want to move up into the encoding ones, and things that lay on top of that, and so on and so forth.

**Erik St. Martin:** Nice.

**Ben Johnson:** Yeah. The next one that's coming is the encoding package. Most people have never actually looked at the encoding package because there's only four interfaces, but I started breaking it out, and going to do some overviews of the other packages inside of there, and what encoding means, and it should work out pretty well.

**Erik St. Martin:** \[35:48\] I think working with bytes and streams in the IO package is a really good place to start. Especially if people come from dynamic languages, they're highly used to just working with strings, so they're going to favor those a lot and create a lot of copies, and they're going to buffer a lot of stuff into memory when they don't need to, and they can kind of be copied across these… Pairing together these reader and writer interfaces. I think it's a fantastic place to start and to get people thinking about problems in a new way rather than read in all this data from some place, hold it in memory, and then write it out somewhere else.

**Ben Johnson:** Yeah. Yeah, thanks.

**Erik St. Martin:** I'd like to see you answer to Bill's challenge. It wasn't really a challenge, but he was looking for a better way to… Basically replacing a string in a stream, in a continuous stream. I started on a solution for it, but I just haven't had the time to put into doing it.

**Ben Johnson:** Replacing a stream? What was the example?

**Erik St. Martin:** He had a piece of code that he had put up on Play, the playground, and it was basically just taking bytes, and when it saw bytes in the stream, it would do it. I was trying to do a continuous stream, so basically no matter how many bytes were read in, it could figure out and buffer just enough bytes per second, to see whether the next character matched if it only got a partial read.

**Ben Johnson:** Oh, sure. Yeah.

**Erik St. Martin:** Because that's a common mistake people get when they're using readers and things like that, to think that they're reading all the content in one read; it could come up short for whatever reason. So that was basically what I was trying to implement a solution for, to kind of demonstrate if you're looking for the word 'omnom' \[laughs\].

**Ben Johnson:** I look for that all the time.

**Erik St. Martin:** Yeah, you could get the 'o' and the 'm' at the end of your first read and the rest is in the next, so that you can't just look at the buffer that came out of that. You're gonna have to look at the stream and build a little state machine internally as the bytes go by to figure out whether you found what it is.

**Ben Johnson:** I was going to say state machine is probably a good way to go.

**Erik St. Martin:** I started on an approach, I just didn't have the time to finish it. I think it would be an interesting thing to finish because it demonstrates a lot of the points from both your Bytes Walkthrough and the IO Package.

**Ben Johnson:** Oh sure, yeah.

**Brian Ketelsen:** What was nice about that specifically is that it kind of turned into VimGolf where we started with an implementation, and then somebody improved it, and then somebody else improved it, and then somebody really improved it. That's how I learned. That's wonderful. I love seeing the evolution of performance, knowing that the first way worked just fine. Often that's where a lot of us stop because that's all we need, but when those cases come along when you really need that last bit of performance, it's fun to see how to get there.

**Erik St. Martin:** So the interesting thing about that problem was I was like, "Oh, this is going to be easy; I'll build a little state machine." What prevented me from finishing it is there's several little edge cases that come as a part of it, like when you get the partial read. You need to buffer for a second because you can't stream it out the other side yet, because you don't know whether you need to do the replacement yet. You have the first two letters; this could be the word but it might not be. You need a small buffer, but only in that instance. You don't want to buffer when you know you're reading characters that you couldn't possibly be part of the stream that you're trying to replace. So there's just overhead in doing the buffering.

I was trying to build the most efficient version I could, and then I kept ending up in these edge cases where based on the number of bytes that ended up being read, it'd be like sometimes it worked, and I'm like, "Why?!" Programming is hard.

**Brian Ketelsen:** It is.

**Ben Johnson:** Computers are hard.

**Erik St. Martin:** I think we got 10 or 15 minutes left; did you guys want to talk about anything else going on in the community or any interesting projects? I know I mentioned the noms database, I don't know if you've got a chance to look at that.

**Ben Johnson:** \[40:04\] No, I haven't yet. Is that the one based on Git?

**Erik St. Martin:** Yeah, that's exactly the one.

**Ben Johnson:** Okay, no, I haven't taken a look yet.

**Erik St. Martin:** So I haven't played with it, but I thought it was pretty interesting because one of the things that appealed to me was… It has the content addressable, which is becoming popular too, in storage, and the append-only, so you only get versioning. But one of the things why I really want to play with the idea is I love the decentralized nature of it. This is especially true because we can build client-sized applications in Go. We're still working on GUI, right? But you can still build client-side applications, so I love the decentralized nature of it. You could be working on something, and it could merge with work that somebody else has done.

**Brian Ketelsen:** That gives me nightmares, thinking about the database rebase \[laughter\]. I am not rebasing my database.

**Erik St. Martin:** So that becomes the question, right? I have not played with it. Don't take that as me advocating that you should go out and try and use this for that. But it did trigger that idea that I'd like to play with it, and see how well that works.

**Brian Ketelsen:** I'm curious to take a look at it. I didn't have time to read the readme before we talked, but the tradeoffs that they've chosen are interesting, because in databases everything is a tradeoff. You have to choose. So what's the use case that they're trying to solve?

**Ben Johnson:** Yeah, I was thinking that too, I wonder what their use case was.

**Erik St. Martin:** They have a Slack, a mailing list, and a Twitter. We should ask them.

**Brian Ketelsen:** Yup. Well, they do, they've got it all. They even have a cute logo.

**Ben Johnson:** Typically, we mention these things, and then somebody who works on it, or knows a person who works on it just happens to be in the Slack channel, and we're being fed information real-time \[laughs\].

**Brian Ketelsen:** It's not happening today. Why are the noms people not in GoTime FM Slack? Somebody fix this.

**Carlisia Thompson:** Talking about cute logos, the project I want to mention today also has to do with database and it totally won me just for the website, because the website and the logo is also cute and well put together. It's simple and clean. So if you want to sell something to me, you know how to do it \[laughter\].

**Erik St. Martin:** Give it a cute logo?

**Carlisia Thompson:** If it's cute and color-coded, there we go. I'm sold.

**Erik St. Martin:** I have this blade of grass, but it comes with a very cool logo. \[laughter\]

**Carlisia Thompson:** Exactly.

**Brian Ketelsen:** Sold!

**Carlisia Thompson:** I'm easy like that. So this is not an ORM, this is a productive data access layer for Go. I'm finding this so funny because I think in every other language, a package like this will say, "We are an ORM. We are the best ORM", no matter how full-featured it was. But with Go, it was like, "No, no, no. We're not an ORM! We're not an ORM. \[laughs\]

**Brian Ketelsen:** It's a dirty word in Go.

**Carlisia Thompson:** It's a totally dirty word, right? So much. I chuckle every time.

So I was looking at not ORMs and ORMs recently, and I found this today - it was actually in the Go newsletter, and I think I'm going to use it. It's not full-featured, it's not doing a lot of things that makes me scared. Being very new to Go, I don't think I can recognize enough to make decisions; my package is doing way too many things, I back off. That's my measurements right now. But I want to have a little functionality. I have an API that's going to have filters and parameters, and I want to just drop them into variables, put them inside the function, and voila. I don't want to be writing out SQL and doing a bunch of things by hand. I think I'll gain a little velocity, so I think I'm going to use this.

**Brian Ketelsen:** \[44:20\] That's where people in the programming world always differ. There's a category of people that want to write their SQL perfectly tuned by hand, execute it, and then map those back into structures, and use them for whatever they need to. There's another category of people that doesn't want to think about the database in any way, shape, or form. And there's very little in the middle.

**Carlisia Thompson:** Yeah.

**Erik St. Martin:** So I'm actually somewhere in the middle.

**Brian Ketelsen:** Oh, you just had to be contrary.

**Carlisia Thompson:** With this, you can totally just send SQL. So I like that because I anticipated that I would need to do that. If it didn't have that feature, I wouldn't use it. But I think all of these libraries will have that, I would imagine. So you get something... You get both things.

**Erik St. Martin:** Some of my pain points with doing straight SQL is… Anybody who's tried using the standard database SQL package can attest to this - scanning individual things gets painful. Especially when you're changing the SQL, you didn't get your type right, and all these things. That can cause a lot of pain, so I like the idea of things that make it easy to map my data and query back into my type.

But there's also the other side of it. We talked about Rails. I love how easy Rails is to do these things, but there's two sides of that equation. It's not saying that I don't believe in that, because I really do; that fast prototyping is awesome. But there's two issues I end up having occasionally with it. One, when you have a complex query. Typically, you're fooling around with it, writing actual SQL, trying to make sure you get your dataset right. And then you're translating it into Active Record-type format, and then you need to change it, and you try to shift it back the other way.

There's this translation process, but for the most part if you get familiar with Active Record, that's not a big thing. But for new people, there's also the fact that things like major ORMs can be leaky abstractions. They're perfect abstractions when everything is going well, but if you don't understand the SQL that's being run under the covers, that can really affect your performance. You get into N+1 query, N+1 issues, and stuff like that. It gets hard; where is the perfect balance? I don't know if I have the answer for that. I feel like I'm somewhere in-between.

**Carlisia Thompson:** Yeah. There is the performance issue that if you're not aware what's going behind the scenes, you can get into trouble. That might also be the issue where you want to do something a little bit different, and now what? But you can always fall back to SQL, I guess.

**Erik St. Martin:** It sounded like, from your standpoint, Ben, that you like the ORM side of things; you think that's a point where we could be better at, that would grow Go usage? Adoption, rather.

**Ben Johnson:** I wouldn't even necessarily say that. I think when you get into ORMs, unless you're generating the code… A lot of ORMs use a lot of interfaces, and you lose the type-safety, and you just get a lot of issues on that side. I think there's some fundamental issues from mapping objects to relational ideas that you just can't get around. Personally, I think you get around a lot of it if you use a local key/value store, but again, that's not for everybody. You get away from N+1 queries; they don't exist because you don't have to do fetches to a remote server. You don't have SQL injection, because you don't have SQL. I think it's a different mindset.

\[48:07\] So I wouldn't say ORMs are the way to go. Personally, I would avoid SQL, if you can. But that's my own personal opinion.

**Erik St. Martin:** All key/value store, all the way.

**Ben Johnson:** All the way.

**Brian Ketelsen:** If you were going to avoid SQL, how would you build a system that had to have more than one active copy of the database? Is it possible to do something like that with Bolt?

**Ben Johnson:** More than one active copy... Like distributing it in a cluster?

**Brian Ketelsen:** Yeah.

**Ben Johnson:** I think you can do things around. I think you have the same tradeoffs, whether it's Bolt or some other database where if you need to scale things horizontally, typically you need to shard your data. If you have a lot of coordination inside a distributed system, even a database, there's going to be locks and all kinds of tradeoffs there. So I'd say you could certainly shard out your data using Bolt. One thing Bolt is missing that I'm working on is doing an async transaction log, so you can actually connect one application instance to another, and have it be a…

**Brian Ketelsen:** Like a standby?

**Ben Johnson:** Yeah, a standby. That's one alternative.

**Brian Ketelsen:** So does BoltDB offer any sort of replication log now? Synchronous or asynchronous?

**Ben Johnson:** Not currently, but that is something I want to include in there.

**Brian Ketelsen:** Nice.

**Ben Johnson:** Because I think that would solve probably 95% of these cases out there, with a database and a standby that you can fall over to. That's why a lot of people run with Postgres, that uses async logs by default, I believe.

**Erik St. Martin:** Right. So I think we're starting to close down on time, and I want to make sure we have time to go through Free Software Friday, but there's one other project you've been working on that I want to take the time to mention and that's the Secret Lives of Data.

**Ben Johnson:** Right, sure. So it's a project that has been active, although I haven't produced anything for quite some time. I did this visualization of Raft (Raft is a distributed consensus protocol). What that means is if you have a cluster of nodes and they need to agree on some data, basically a transaction log, you need to agree on all these things in the log, even in the case of failover or your network gets split - how does that actually work? It was made by Diego Ongaro out of Stanford, along with John Ousterhout — I don't know if I'm saying his name right \[laughter\]. I totally butchered that, I'm sorry.

But yeah, they've tried to make a simpler Paxos, if you want to think of it like that. Like a multi-Paxos. But the problem is when you read the paper, probably several times, if you're not in that world of distributed systems, distributed consensus, a lot of these concepts just don't make any sense. I used to do a lot of data visualization in a past life, and I really enjoyed D3 visualization, so I thought I'd try to apply that to Raft and distributed computing systems. So that's what the Secret Lives of Data is, this visualization of how Raft works.

**Erik St. Martin:** I love it, because it makes the topics a lot more approachable. For a lot of people who don't work in this space, you say 'distributed consensus' and their eyes immediately roll over, right? This is something that's completely unapproachable, it's only for Ph.D. candidates at MIT, Berkeley, or whatever. So I've seen the Paxos white paper, and then you see Raft; I remember seeing that. The PDF is 11 or 12 pages or something, that explains Raft, and I was like, "Wow this makes things much more approachable", and then I saw the Secret Lives of Data. I was like, "Well, this makes it even easier to just kind of…" It may not be enough to implement, but it's enough for people to understand how distributed consensus works, and things like that, and some of the problems along with it. And I saw on the GitHub that you had planned to talk about how Kafka works?

**Ben Johnson:** \[52:06\] Yeah, that was my next one I was going to do. As far as seeing things… I feel like we have a lot of fancy words in our industry that typically mean really simple concepts, and I think when you can just see a concept... A lot of times it only takes five minutes to just visualize a concept, and be like "Oh, I totally understand how Kafka works, or distributed consensus." They're scary words, but it's really simple concepts underneath.

**Brian Ketelsen:** Log-structured merge?

**Ben Johnson:** Log-structured merge-tree. It sounds like a nightmare, but it's not. It's not overly complex when you get into it. The implementation is, but the actual idea of it is not.

As far as Kafka, I started working on that, and I've tried a lot of different methods for trying to visualize that. I wanted to try to do more for blog posts where it had visualization within it, but it didn't quite fit. I wanted to move to where I was generating out of video, because whenever you put up any kind of content on the internet, there's a whole bunch of people that tell you it sucks. One problem that people said about Secret Lives of Data was that it just moved too slow. So I was trying to figure out whether to do video around that, and then give some kind of narration at the same time, some kind of caption, or something in there, just so it would move at a better pace.

**Erik St. Martin:** I think part of it, too... If it didn't move faster, you could make it more interactive, which would force people to be slower, like if they were supplying the data that went across, or something like that. But I think that's the hard part with teaching anybody anything - if you move faster, for some people it's going to be too fast. If you go slower for some people, it's going to be too slow for others. And that middle ground is insanely harder to reach. It's something that Brian and I have struggled with. Anybody who's tried to teach anything to anybody, trying to find that middle ground, I think that you're going to end up leaving people off on one side or the other, and it's really hard, and it breaks your heart trying to figure out a way to get everybody.

**Ben Johnson:** Yeah, I totally agree.

**Erik St. Martin:** Maybe you could have an automated play thing, where you don't have to click play, it just automatically transitions at a set interval, and you could put a slider for speeding it up or slowing it down or something like that.

**Ben Johnson:** Yeah, that's true. Also the other part of it is it was just insanely hard to make, because I actually had to implement - because I was doing it all the time; it wasn't a set amount of time - I actually had to build the Raft implementation in JavaScript, that actually runs behind the scenes. I'm trying to find a much more simpler way to visualize.

**Erik St. Martin:** \[laughs\] I see... I didn't think about that. You actually implemented Raft in JavaScript.

**Ben Johnson:** Yeah, it was terrible. It was a bad idea \[laughter\].

**Erik St. Martin:** Brian is giving you evil eyes from behind the microphone; I know it \[laughter\]. I know he's thinking, "Somebody's going to use this for evil."

**Brian Ketelsen:** Yeah, it's going to be done. Never release that code, Ben.

**Ben Johnson:** Oh, no, no.

**Brian Ketelsen:** Never!

**Ben Johnson:** Ever.

**Erik St. Martin:** So I know we're running short on time, I think we might actually be a couple minutes over. But one thing we like to do with each show is Free Software Friday, where all of us will go across the board and list off some open source projects that are currently or have made our lives easier in the past, just because as we've spoken with other open source maintainers, most of the time, you only see the hate. You don't really see the love, so we want to continue to spread love for projects that are making our lives easier.

So with that, Brian, do you want to go first?

**Brian Ketelsen:** \[55:48\] Yeah, I'll kick it off with Minikube; github.com/kubernetes/minikube. K-U-B-E. It's a really fast and easy way to get you going on a Kubernetes cluster on your local laptop, which is awesome if you don't want to run 17 VMs to have a cluster. Very nice, simple, lightweight, easy way to get going.

**Carlisia Thompson:** I can go next. First, let me mention that library I was talking about, it's upper.io/database.

**Brian Ketelsen:** Oh, the database library earlier?

**Carlisia Thompson:** Yeah. The not-ORM library. Before I forget too, I want to mention that Ben did a remote meetup event and he showed how to use BoltDB. That was pretty awesome.

**Erik St. Martin:** Oh, cool, was that recorded?

**Carlisia Thompson:** It is, yes. So if you go to remotemeetup.golangbridge.org, you will have the past events, and you'll find his event there. It was very good, I saw that one.

**Erik St. Martin:** Oh, awesome.

**Carlisia Thompson:** The free software I want to mention today is called Stow, it's part of the… I don't know how to pronounce this…

**Erik St. Martin:** GNU.

**Carlisia Thompson:** GNU, yes. I found this out through looking through Brian's and Erik's Dot files. I don't understand how I've been a programmer this long and I didn't know about this.

**Erik St. Martin:** It's actually used under the covers for a lot of stuff to manage new versions of libraries.

**Carlisia Thompson:** I thought it only did symlinks?

**Erik St. Martin:** It does do symlinks, so it can basically symlink the default version of, say, a dynamic library or static library, to the most recent version of it that may exist somewhere else. But it's used for several things like that.

**Carlisia Thompson:** Interesting.

**Brian Ketelsen:** But it's very useful for DOT files.

**Erik St. Martin:** Yeah. I cheated for DOT files \[laugh\].

**Carlisia Thompson:** I see, I see. That's why the description here was a bit off from what I was expecting. But yeah, to manage DOT files… Wow, it's so easy. It's so easy to use! Can't believe I didn't know about it. Not I use it to manage my symlinks.

**Erik St. Martin:** Yeah, so the cool thing about it is you can basically layer symlinks. The way I set it up in my DOT files is I have a DOT file GitHub repository, and all of my configuration files are stored in this DOT files directory, but then they're managed… The path structures based on the way it would be in my home directory, and then I can just do Stow and give it one directory, like Git. Then it symlinks all my Git DOT files to my home directory back to my DOT files' directory. Then I can just keep adding files, and keep telling it to reStow for those symlinks. If the directories already exist in your home directory, it symlinks individual files. If the directory doesn't exist, it symlinks the whole directory. It's kind of cool, because if you have Linux and Mac and all these things, you can kind of tell it to symlink just the things that on that box, rather than getting all of your DOT files, all or nothing.

**Brian Ketelsen:** Yeah, it's winning.

**Carlisia Thompson:** My biggest problem with symlinking manually was to remember how to un-symlink things. With Stow there's a delete command, and it's so easy.

**Erik St. Martin:** Yeah. To un-Stow it?

**Carlisia Thompson:** Yes, or un-Stow; I don't know, I don't know remember. I only did it once. I set it up super quickly and it worked, and I never had to look at it again. That's why I thought it was so great.

**Brian Ketelsen:** Stow/d, I think.

**Erik St. Martin:** Yes.

**Brian Ketelsen:** Awesome.

**Erik St. Martin:** So we have another lover of Stow.

**Brian Ketelsen:** Yay!

**Carlisia Thompson:** Yes, thank you. You did a great job explaining how it works, Erik. Thank you.

**Erik St. Martin:** I set up that readme a long time ago. At the time, I think Brian was wanting to steal some DOT files, and a couple of other people we worked with, so I wrote up a thing because I was having to go to people's desks and help them, so it was just easier that way.

So Ben, do you have a project you want to thank?

**Ben Johnson:** \[01:00:01.13\] I don't have a project, mine is more like a maintainer. Kelsey Hightower, I just think he does… I know he's the Kubernetes guy, and sadly, I actually don't use Kubernetes, but I think he does a fantastic job being an evangelist for that. But really I think he's done so much in the community, and a lot of stuff he's done personally has meant a lot to me, so I just want to say thanks to him. I hope he keeps up everything he's doing and supporting the community, and everybody in it. Also, he had a fantastic intro at GopherCon this year. I thought he did an excellent job.

**BRIAN KETELSEN:** Amen.

**Ben Johnson:** So when the videos come out, please go watch that.

**Erik St. Martin:** I've heard. Kelsey is a person. Kelsey Hightower is a person as well as his contributions in both articles and sample code; I think we all can admire and aspire to live up to that. Just a great guy all-around.

**Brian Ketelsen:** I want to be like Kelsey.

**Erik St. Martin:** Me too. Can I be like Kelsey when I grow up?

**Brian Ketelsen:** It's going to take a lot of work.

**Erik St. Martin:** So for my project, I'm actually going to sidestep development in Go projects.

**Brian Ketelsen:** What?

**Erik St. Martin:** Yeah, I'm going to do it. So as a hobby thing, I'm also - in addition to being addicted to databases, I'm addicted to information security. There's a distro a lot of people use, which is called Kali Linux, which is kind of based on Debian. But I'm an Arch user all the way around, so shortly before GopherCon I stumbled upon this, and it's a project called ArchStrike (archstrike.org). It's basically an Arch repository with all the InfoSec tools you might expect in Kali Linux, which is really cool. Now I get to stay in Arch, and not have to have a Kali VM running somewhere. I'm not sure how many other people in the Go world are InfoSec people, but I imagine they're there.

**Brian Ketelsen:** Both of them are very excited right now \[laughter\].

**Erik St. Martin:** You have to be a Go person listening to this podcast who also likes InfoSec and ArchStrike. And Arch Linux.

**Carlisia Thompson:** And none of them are in the Slack right now. I'm sorry \[laughter\].

**Erik St. Martin:** I think we made it all the way through our Free Software Friday. Before we start to close out the show, I do want to point out that the Changelog has another new podcast that's out that's called Request for Commits, and they're speaking with people about open source sustainability, and the human side of code. Business licensing, how projects are supported financially... That is changelog.com/rfc. Definitely check that out if you like our podcast, and the Changelog podcast - because who doesn't like the Changelog podcast?

**Brian Ketelsen:** Right?

**Erik St. Martin:** There's going to be one guy. I know there is.

**Brian Ketelsen:** There's always one guy. Like the one guy on the GopherCon survey that thought Renee's talk was unsatisfactory. Seriously, a talk on the Gopher onset? You're out. Don't come back. We don't need you.

**Carlisia Thompson:** Wow, her talk was awesome, I thought.

**Erik St. Martin:** I think it was a nice mind-break. You forget how overwhelming all that content being jammed into you for two days straight can be. I think it was fun, and I think it was a nice step away from brain overload.

**Brian Ketelsen:** It was awesome.

**Erik St. Martin:** Did anybody else have anything else they want to mention before we close out the show?

**Brian Ketelsen:** \[01:03:33.20\] There's gotta be something I forgot. Oh, you know how much I love to generate things in DSLs. The Quilt project I found yesterday; github.com/NetSys/quilt. Pretty cool way to generate container orchestration for your container deployments. It's a little bit outside of the realm of just straight Go programming, but it very much fits in my "generate all the things" mantra, which is a replacement for Docker Swarm, Kubernetes, or Mesos. And it uses a declarative DSL to describe your deployment, and then you just run it. It's kind of cool.

**Erik St. Martin:** Well that's interesting, I haven't seen that yet.

**Brian Ketelsen:** I find all the cool stuff.

**Erik St. Martin:** Alright, I think we are out of time. I just want to thank everybody for being on the show. Thanks to Brian, Carlisia, and Ben, especially Ben for coming on the show, and talking, I think mostly databases. But this has been a great show. Thank you to all the listeners, both live, and who will be listening. If you aren't subscribed, you can go to gotime.fm, follow us on Twitter, we're at twitter.com/gotimefm. And we have a GitHub, which is github.com/gotimefm/ping, if you want to suggest speakers, or ask to be on, or have questions you might want us to ask speakers. And I think that's it, everybody. Thanks again.

**Brian Ketelsen:** Thanks, Ben!

**Carlisia Thompson:** Thank you!

**Ben Johnson:** Thanks for having me.
