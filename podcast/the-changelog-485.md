**Adam Stacoviak:** Deepthi, thank you for joining the show. I've been a fan of Vitess, mainly by a way of PlanetScale. I'm not that deep and steeped in the horizontal scaling of MySQL myself personally, but having had a conversation with Sam Lambert on Founders Talk, I'm really gaining a lot of respect for his leadership, his new role as CEO there at PlanetScale, and really just the story of Vitess and how it's really just like doing tons of things for YouTube and all that stuff to really make scaling a MySQL database truly possible. So welcome to the show, thank you for coming.

**Deepthi Sigireddi:** Thank you.

**Adam Stacoviak:** What's the best place to begin when talking about Vitess? Should we explain the tech itself? Where should we begin the story of Vitess? I know it began in YouTube back in 2010, but what's a good sweet spot for you?

**Deepthi Sigireddi:** We should start with the history, why Vitess came into being, and then how people outside of YouTube saw Vitess, and why it got adoption outside of YouTube. So if we go back to the beginning, Vitess was started at YouTube, as you already know. And that was back in 2010.

\[04:35\] By the way, as an aside, YouTube has migrated off Vitess, so they are no longer the largest user or Vitess, or even a user of Vitess anymore. But Vitess did start at YouTube. And the reason Vitess even came into being was because YouTube was growing really fast, and they were running their video metadata store - not the actual video content, but just the titles, descriptions, comments that sort of thing associated with videos, on multiple MySQL instances already. So they weren't on a single MySQL instance, they were managing about eight MySQL instances, and they were having regular outages.

So the people who started Vitess, which includes Sugu, who's still working on Vitess at PlanetScale, and some others who are still at Google/YouTube, or have left Google and have moved on to other things.

So the team started Vitess, the problem they were trying to solve was this system keeps going down, it keeps having outages. How do we not have these outages? So they sat down and made a big list of all the outages they had experienced in some previous time horizon, whether it was a year, or two years, or whatever it was... And when they looked at that list and thought about "How do we solve this?" the only answer they could come up with was "We need to write a new piece of software to solve this, because there is no existing way to solve this."

So that's how Vitess started. And it started with solving that specific problem of "We are having database outages. How do we solve that?" And they did it by putting a layer in front of the MySQLs, which will do connection pooling, which will put limits on the number of results written by a query. A query might return a hundred thousand rows; no one's ever going to look at a hundred thousand rows. Why, right? And consolidating queries. So you may have thousands of clients trying to read the same rule; you don't actually have to fetch that rule thousands of times from the database. You can fetch it once and serve it to thousands of clients.

So these were the sorts of things that were initially built as Vitess at YouTube. Then over time, sharding an existing database became a functionality that was needed, and built into Vitess. But for about the first five years of the life of Vitess, YouTube was the only user, even though Vitess was open sourced in 2012, it was open sourced very early on in the journey to today. But for the first five years, YouTube was the only user.

But at that point there were other companies that faced similar scaling challenges and discovered that there was something called Vitess which was open source. And the way they found out about it is because Sugu and a couple of other people used to go and give talks. They would give interviews to journalists who would write about it. So this knowledge was out in the public domain, and around 2015 some other companies which also had scaling problems started looking at Vitess, trying it out, and then started going into production.

**Jerod Santo:** \[08:03\] So when to horizontal scaling, it seems like there's the first step that many companies take, which is "Let's separate our reads from our writes, and we can have a bunch of read databases and then a primary or some sort of write, or a set of writer", and that's one way to get going... At a small scale. You said there were already maybe eight databases at the time, they had scaled some already... And then sharding is another strategy which seems to come maybe at the same time, or later. Can you describe sharding, just so we're all on the same page? And then we'll see how it fits into Vitess' story as well. But just the concept of sharding, how it works generally, and maybe some of the challenges that it adds.

**Deepthi Sigireddi:** So the idea of sharding is that you have a whole set of data, and then you want to break it up into pieces, and store them and handle them separately. So a very simple example would be let's say you go to a conference and you are trying to check in, and they have these different counters or booths; if your last name starts from A to M, you go here. If it starts with M to Z, you go here. So that's a very simple example of sharding your dataset.

So in terms of what it means for Vitess, if we take any application that is storing data - let's say you have a set of people, a users table. What you're trying to do is to break it up and store it in different individual databases, but present an illusion to any application that is trying to access the data as if it is a single database. So that's sort of the essence of how you could horizontally scale something like MySQL without leaking the details of how it's actually being stored at the backend.

**Jerod Santo:** Right. So a naive implementation of sharding would be at your application layer. So as you go to your users table, every time in your application that you're gonna access some users, it would have to maybe do a look-up on the first letter of their last name and say "Okay, this one starts with S, and so I'm gonna go to this database that has the S'es in it." That works, right? But at the application layer it's very complicated to be doing that all the time. Sometimes you forget how it works, or a new engineer etc. So you can do that without Vitess; people do it all the time, build it into your application to shard. But what Vitess provides is this middle layer that hides that complexity underneath it, or tucks it away, so your application code can remain blissfully ignorant of that sharding strategy. I assume you could even change strategies or deploy multiple strategies, and your code that your developers are writing does not have to get spaghettied around. It doesn't have to have all those concerns the whole time. Is that what you're saying?

**Deepthi Sigireddi:** Yeah, that's exactly right. So the strategy you first described, where the application code itself figures out which shard to address its queries to - that's called manual sharding, or you can call it custom shard it, in some ways.

**Jerod Santo:** Sure.

**Deepthi Sigireddi:** But like you said, the application has to know, and nothing is transparent. What if you initially had two shards, and you name them one and two, and they've grown so big that you want to split them further. Now what do you do in the application? So all of that logic of how the data is stored has to now be spread through every component that needs to know it, including the application code. So that's the downside of the manual sharding approach. It's very high maintenance.

**Jerod Santo:** But in YouTube's particular case, they didn't even shard it first. They simply -- Vitess started off as like this connection pooling thing first.

**Deepthi Sigireddi:** Right, right.

**Jerod Santo:** \[11:55\] So that took them a long ways, right? That provided some scale.

**Deepthi Sigireddi:** Yeah, yeah. So what you get with connection pooling is that instead of every request keeping a connection open to the backend MySQL, whether or not there's traffic flowing on it - because most connections have intermittent traffic. It's not like data is flowing back and forth all the time. If I'm on the YouTube website and I click on a video, they have to show me the metadata for the video, and then I'm gonna watch the video. So for (I don't know) five, ten, twenty minutes I may not need to go back to the database at all, just to give a very crude example.

So what connection pooling gets you is instead of thousands of connections to the backend database, you can say "I only need a handful of connections", whether that's 20, or 50, or 100, for a specific application that is going against the backend database. But on the frontend you can still serve tens of thousands of concurrent users, because there is this natural property to use a behavior that -- database requests are always intermittent; they are not continuous.

**Jerod Santo:** Hm. So you're fighting against those peak moments. You have to guard against the peaks.

**Deepthi Sigireddi:** Yes, yes.

**Jerod Santo:** Actually, they're almost the only thing that matters. You have to have the capacity at the peaks, because the valleys are just gonna be there.

**Deepthi Sigireddi:** So one of the things you can do by having a connection pool is that you can convert load into latency. So if you can serve ten thousand users without any noticeable lag, and suddenly you get a hundred thousand - if you can make them wait, then maybe they will get a response after 2 seconds, instead of 10 milliseconds or 20 milliseconds. But you get the ability to handle that load just by delaying some of that work.

Obviously, if you have a sustained peak, if your traffic doubled overnight and it stays double, then you have to start provisioning more capacity at the backend. But transient peaks you can handle with a connection pooling strategy.

**Jerod Santo:** Which is nice, because on the web, transient peaks are normal, and overnight double your capacity is abnormal, right? You don't expect that. Maybe when the Covid lockdowns hit, many companies found themselves suddenly having twice as much traffic at a sustained clip. But other times, it's like -- maybe an Instagram influencer sends a bunch of traffic your way, but they're very fickle, and they leave quickly, right?

**Deepthi Sigireddi:** \[laughs\]

**Jerod Santo:** Okay, so Vitess starts as this connection pooler inside of YouTube, but then it adds sharding, which I think is a huge deal, and probably highly complicated to implement, and then also I assume requires a lot of setup, and definitions... There's strategies there. In terms of just the features of Vitess over the years to now, maybe like the flagships - those are some things. What are some other scaling features that it provides, or are those the two big ones that Vitess gives you?

**Deepthi Sigireddi:** The other feature I want to talk about is schema changes. Prior to Vitess providing integrated schema changes, people were using all kinds of tools to manage schema changes to large MySQL deployments. Because you can't just -- on a production database which is of any significant size, you can't just directly execute schema changes, because the effect of those is unknown. How many rows might be affected, whether a table will get locked up and that translates to application downtime... These are all the sorts of problems that people running MySQL in production faced, and they built tools to work around these problems.

\[15:51\] At GitHub they built a tool called GitHub Online Schema Tool. Percona built something called pt-osc. So all of these were meant to work around how schema changes worked in MySQL, especially in older versions, which was not very well. Not only are schema changes not transactional, so you can't roll them back, but their effect on database performance was unpredictable. So in Vitess, in about 2019 we actually started integrating ghost and pt online schema change, and we also built our own Vitess-native way of doing schema changes on MySQL in a safe manner.

The foundation for this online schema change technology, or Vitess-native online schema change technology is the same foundation that underlies sharding, and that's something we call VReplication.

So the way sharding evolved - when it was first built, you had to add a column to every table that you wanted to shard, and store a value in that, and use that value to define which shard that row would go to. But over time, that became transparent, in the sense that you no longer added to need an extra column to a table; you could take an existing column in a table that you were trying to shard, and define a function on it, and use that function to define how the table is going to be sharded.

I think starting in about 2018 we built this VReplication technology which now underlies sharding. So there was a previous generation of sharding code, which still exists, and it's called legacy, and we will phase it out, and there is the new generation of the sharding code. And what VReplication does is it leverages MySQL's Binlog replication. So in MySQL, when you have a primary replica configuration, there are something called binary logs, which the primary that is taking the writes will write out, and replicas will subscribe to those logs, and they will receive those logs from the primary, and then they'll apply them to their own databases, and that's how replication works. So what Vitess can do is it can subscribe to those binary logs, and filter them.

So by filtering them, you're saying "Okay, maybe I'm in a resharding operation, so I have this one database, I want to break it into two..." I can look at the binlogs and say "This change should go to this new shard; this other change should go to the other shard. And that enables many different types of workflows. So you may want to do what we used to call vertical sharding, where you want to take a whole table and move it to a different database. Or you may want to do horizontal sharding, where you have a big table and you want to break it into multiple shards. Or you may just want to do something like a materialized view. So there is a table with data, you're interested in a subset of the data for some particular application, and maybe you also want to do some aggregations on that. Maybe you just want a count or a sum of some column, number of orders, or total value of orders. So materialization is something you can do with VReplication.

So this technology we built, that can look at MySQL's binary logs and process them in different ways for different applications eventually became the foundation for also doing schema changes in a very robust way.

**Jerod Santo:** That sounds super-slick. How long did it take to come to that implementation? You said 2019 was when these things took hold, this VReplication.

**Deepthi Sigireddi:** \[19:51\] Most of the VReplication code in its initial incarnation was written by Sugu, and I think it took him about a year to do that. After that, we've had more people working on it, and I would say it took another year for it to get to the point where it was stable, and Vitess users were using these VReplication-based workflows to do sharding on their production systems. It was at that point that we started building the online schema change functionality on top of it.

**Jerod Santo:** I just find it fascinating that a tool that began nine years prior - assuming it's around 2019 - the a-ha moment or the idea of like "Hey, let's take these binary logs and provide this filtering mechanism, and that will be how we shard... But then also, by the way, this is a really great way of doing schema changes." And then a year of effort by one person - or I'm sure there's other people involved along the way... Lots of effort to roll that out, to develop it, and then to test it, and to actually integrate it... Now it's being used in massive scale.

It's just amazing to me that sometimes it takes that long of doing it differently, or of just toiling, or working on other things, and then being like "Oh, here's a much better way of doing it, that actually solves two problems at once." It's really cool.

**Deepthi Sigireddi:** So the amazing thing about VReplication is that it was originally created to do sharding, and the table level or at the database level. But once it came out - and this is something we see every once in a while with Vitess. We may develop something for a particular use case, but people will start using it for other use cases. Because you can never think of all the use cases. VReplication, for example - we have someone who's using it to create a development copy of their production database that developers can have access to, with all the PII redacted. So they select a subset of the columns from the production database tables so that there's no user information, there's no addresses, credit cards, what have you, and developers can then use that redacted database for testing out new features, and they don't have to access the production database directly.

**Jerod Santo:** Super-cool.

**Adam Stacoviak:** You've mentioned Sugu a couple of times... Can you kind of just share who this infamous/famous person is behind the scenes, who had toiled away as Jerod mentioned and as you mentioned, Deepthi. Can you impart to our listeners who that person is?

**Deepthi Sigireddi:** Sure. Sugu was at YouTube when Vitess was created. He was one of the co-creators of Vitess. He was instrumental in open sourcing it. He says that the reason they open sourced it is because they never wanted to reinvent it... And you know how things are these days; no one stays at the same company forever, so they were looking forward to the day when they would eventually leave YouTube and might have to solve database scaling problems elsewhere.

So he was instrumental in open sourcing Vitess to start with, in 2012. He came up with the name Vitess; the project at YouTube was called Voltron, but when they open sourced it they had to change the name, because Voltron is copyrighted by whoever owns that character.

**Adam Stacoviak:** For sure, yeah. 1980's nostalgia, for sure.

**Deepthi Sigireddi:** \[laughs\] And they had written code where components names like vt-something. There were directories in the code with vt in them. So they were like, "Okay, we have to find a name that still can be contracted to vt." And Sugu happens to be someone who's fluent in French, so he took the word vitesse from French; it's spelled with an -e at the end, and it means fast. And then he took the e out and called it Vitess, without the e.

\[23:44\] So Sugu was an engineer at YouTube, he was instrumental in creating Vitess, and eventually there came a time when Vitess was a technology, not a product. So in that sense, it wasn't a revenue-generating project for YouTube, and there was probably not a lot of appetite to invest into it. At the same time, there were outside users, users who were using the open source version of Vitess, and they needed support. So how do you deal with this, right? So it was at that point that Sugu went and talked to some of the people in the Kubernetes community who had started the Cloud Native Computing Foundation, and they recommended that Vitess should be donated to CNCF. Google was on board with that.

Google, from what I know, from what I have seen, is extremely open source friendly. They are a part of CNCF. They are a major sponsor to many, many open source projects and conferences and communities. So they were on board with that, and Sugu saw the project Vitess through its donation/adoption to CNCF, and at that point he left Google and he co-founded PlanetScale with Jiten, who was also a former YouTuber.

**Break:** \[25:15\]

**Jerod Santo:** So Vitess has had a long journey inside, and now outside of YouTube. At a certain point you came along and got attached to the project. Can you tell us your journey, maybe even in your career, and then how it got attached to Vitess along the way?

**Deepthi Sigireddi:** So I started working with databases back in, I would say, 2000. I did not study databases at all as part of my formal education, but I had to start working with them because that was the way the world was going. I was working at a company that built supply chain software, and specifically, we were building software for retailers, and retailers have a lot of data, and they stored them in databases. So whatever software we built had to work with databases. And those were the days when we still used to ship CDs to customers.

We were trying to build this large-scale supply chain planning system for retailers, and it had to work with Oracle, it had to work with DB2... At some point we thought that it would need to work with Informix, but slowly we realized that no one actually was using Informix anymore at that point.

\[28:02\] So I had to learn how to write code that worked against databases. All of the data is gonna be stored in the database. You're gonna fetch some of it into memory, you do something with it, write the results back into the database.

Along the way I learned how to write SQL, I ended up writing -- I didn't write the full parser, but I borrowed a SQL parser that somebody else had written, and I was using it to understand SQL that was part of our application, and emit the two variants, Oracle and DB2, because we did not want to maintain two versions of queries, and they were queries that had to be returned differently for the two different databases.

Time went on, I continued working with Oracle, and I did that for about 15 years. I switched jobs a couple of times, but everywhere I went, the database of choice was Oracle, so I was working with Oracle databases. And I learned how to write SQL, I learned how to tune queries, and how to manage schemas... There were always DBAs, but there was always stuff you had to do as an application developer at the database level as well. And we were writing database access objects, database access layers, all those kinds of things.

Then, in 2018 I was coming off of like a one-year hiatus from work. I had taken time off for personal reasons, family reasons, so I was unemployed, and I was looking to get back into a job. And I was even debating whether I wanted to keep doing software engineering. I had been a software engineer, a tech lead, an engineering manager in previous gigs... Or whether I wanted to do product management; because I had done a little bit of product management as well before.

So I had sort of just started looking around, what would I want to do, what sort of companies do I want to apply to... And coincidentally, my husband was actually working at YouTube at that time. This was after Sugu and Jiten had already started PlanetScale, and YouTube was already on its way to migrating off Vitess. They had started their migration project.

So my husband was at YouTube and he heard about the migration project off Vitess. So he looked up Vitess, and he happened to go look at Sugu's LinkedIn page, and then LinkedIn showed him Jiten's LinkedIn page, so he looked at it, and he was done. So the next time Jiten logged into LinkedIn, LinkedIn showed him someone from YouTube has viewed your profile.

**Jerod Santo:** Okay... The plot thickens.

**Deepthi Sigireddi:** Yeah. So he looked at \[unintelligible 00:30:49.11\] LinkedIn profile and he was like "Oh, maybe this will be a good hire for PlanetScale. We should talk to this guy." So they met, they talked, and my husband was not ready to leave Google at that time, but he said "Oh, by the way, my wife is looking for a job." So that's how I ended up interviewing with PlanetScale and they ended up making me an offer.

**Jerod Santo:** That's awesome.

**Deepthi Sigireddi:** Before I spoke to them, I was actually not looking at startups. I felt that in terms of workload, career progression, I would actually be much better off working for a big company; because tech startups, Silicon Valley startups have a reputation of requiring a lot of hours, and I did not want to work a lot of hours. I did not want to work nights and weekends.

But after I talked to the people at PlanetScale, I met Sugu, he gave me a very early demo of VReplication... It was just a demo. The code had not been written yet. And I was just blown away by what Vitess was and what Vitess could do. And I was like, "I must work on this, because this is just so cool." So I ended up accepting the offer from PlanetScale, and I went to work at PlanetScale, and for the first couple of months I actually worked on the database as a service side; because what PlanetScale was trying to do was to launch a database as a service built on Vitess.

\[32:15\] So I went to work on the Kubernetes operator to start with. But pretty soon, they needed more than one person to be working on Vitess. Sugu was the only person working on Vitess at that time, at PlanetScale, and the engineering team was literally four people. So we had Sugu, we had an engineering lead, and two other people.

So they said "Okay, the engineering lead needs to focus on the PlanetScale side of things, the database as a service side of things. So you are the next logical person to start working on Vitess." And that's how I started working on Vitess.

**Jerod Santo:** Awesome.

**Deepthi Sigireddi:** And that was 3,5 years ago now.

**Adam Stacoviak:** Wow. It's incredible how you can step away from a career for a bit and come back into probably - I can imagine, just by the joy you're sharing here as you describe your story... The listeners aren't getting to see your face, but I can see a lot of joy in your face as you describe this journey of your own... To step away and then come back into - not so much a boring, big tech job, but something that seems to be startup, exciting, and maybe the opposite of what you thought a startup could be, or would do for you.

**Deepthi Sigireddi:** Right. So I think I had definitely been through some not fun times... At an earlier point in my career I had somewhat burnt out a little bit. I was even questioning whether I wanted to be in the tech industry anymore... But working on Vitess I think has really brought that joy back. It's given me back the zest of working on something interesting. You're working on hard problems, but it's not hopeless, because there is progress being made on these basic computer science problems on an ongoing basis.

In Vitess we are grappling with distributed systems, and the theory and practice of distributed systems keeps evolving, and we can learn from what other people are doing, and maybe we can do something that others can learn from. So to me, that is awesome.

**Adam Stacoviak:** Something you said before we took the break - and this kind of dovetails a bit into more of the journey - is this idea of Vitess being open source; not wanting to write it again in the future. That to me is kind of the core component of open source, especially something that's born inside of a large organization like YouTube has become. And I could just see - like, how would the world be right now, given what PlanetScale is doing, and how it's also supporting Vitess in its journey through CNCF, from incubation to graduation, Sugu's journey personally, and the team that's grown up around; that idea to open source it was profound, because "I don't wanna write this thing again somewhere else. I'm gonna leave eventually, because that's how things work; eventually, you're gonna go somewhere else and do something else." What about for you? What do you think about the idea of open sourcing Vitess? Was it just genius to do that? What do you think?

**Deepthi Sigireddi:** I do think it was genius, because it happened -- open source is now, I guess, 30 years old. But in 2012, it wasn't as intuitive or as much of a default as it is today. Today, engineers working at any company - they would love to open source their work. It wasn't that way back then. Most companies kept their work proprietary. There is an additional bit of hassle involved in open sourcing something...

**Adam Stacoviak:** \[35:50\] I recall way back... This is sort of tangential, in a way, but this was 2009, I was at Future of Web Apps in (I think it was) Miami, Florida. And Blaine - I can't remember his last name at the moment; Jerod, you may remember... He was CTO at the time, I believe, of Twitter. And Twitter was falling over left and right, and it was based on MySQL. And I can remember, he had to leave his talk on stage to go and deal with a sharding issue, essentially, because it was just constantly falling down. The Fail Whale was a big meme, all that good stuff... And I just think about - Twitter then, had Vitess been a thing and open sourced, they wouldn't have had to rewrite or do their own thing.

That's what I think about... Now you've got sort of ultra-massive-scale applications happening because just the state of the internet, the state of the web, the state of applications has just ballooned in terms of adoption, whether it's because of Covid, or other things that have happened, that made people sort of like gravitate towards the internet. But not having to recreate that wheel because it was open source could have saved Twitter in those days. If Twitter would have been now, and that problem would have been now, they would have just used that open source tooling, versus Blaine leaving the talk to go and shard Twitter's database.

**Jerod Santo:** Right.

**Deepthi Sigireddi:** That's so true. And so many of the biggest companies were using MySQL. So Google was using MySQL, they had their own of MySQL, Facebook still uses MySQL, they still have their own MySQL build... Twitter still uses MySQL... And they continue to do that today. Well, Google's probably done with MySQL. I don't know. But Twitter, Facebook... Facebook we know still is running their own MySQL. Compare that to companies like Square and Slack, who got to the scale where they needed to shard in, say, 2016. Or they were already sharding in a custom way, and it wasn't really scalable. The strategy wasn't scalable; operating the system wasn't scalable. And at that point, when they looked around, they were able to say "Well, there is this piece of software, which is open source... So if it doesn't quite work for us, we can contribute and make it better. And it's already been proven at YouTube scale. So why not?"

That's in fact exactly what happened when companies like Square and Slack adopted Vitess. Vitess was built for YouTube's use case, so there were definitely going to be things that didn't work for them, and they actually started contributing back to the codebase for the particular use cases that didn't work. And that made things easier for the next adopter who came along... So that we are now at the point where typically people can adopt Vitess without having to contribute anything back to it. If they want to, sure; but the sort of gaps people used to find back in 2015 when the first non-Google users came along don't exist anymore. And that's because the various adopters have contributed back to open source, and made it better for everyone who comes after them.

**Jerod Santo:** What if you were starting a business today? So Vitess seems like it unlocks operational horizontal scale at the cost of what starts off as complexity, additional moving parts, setup, time investment... So for many companies perhaps it is a premature optimization - this is where I'm asking, I'm not saying - to start with Vitess right away.

**Deepthi Sigireddi:** Yeah. I have to agree that starting with Vitess and trying to run it yourself is definitely a premature optimization. Anyone who's starting something today is better off choosing whatever is easiest to deploy and manage. And it's not that MySQL was the easiest thing to deploy and manage back when these companies that are huge today were startups, 20-25 years ago... But it was cheap, and that's why they started with MySQL, right?

**Jerod Santo:** Yeah.

**Deepthi Sigireddi:** \[40:16\] But today, people have a lot more options. You don't have to run your own database anymore. And in fact, a lot of startup founders are developers who have grown up with AWS and they instinctively go to RDS. They'll say "I'll just provision an RDS MySQL or an RDS Postgres and use that."

**Jerod Santo:** Right. "I'll pay Amazon to deal with my scaling problems", right?

**Deepthi Sigireddi:** Right.

**Jerod Santo:** So that works, sometimes. Sometimes you do the math and you get to a certain scale where that AWS bill is unwieldy, and you decide "Okay, maybe we can run our own infrastructure, or maybe we could take this off AWS and run it better ourselves. Cheaper etc." Are there companies doing that? I'm just trying to think of who adopts Vitess; is it like the entrenched, large, super-scale companies that have MySQL? Are there new MySQL companies that are using it today and they've just showed up out of nowhere? Is the community well set?

**Deepthi Sigireddi:** Most Vitess adopters tend to come to Vitess because they have a scaling problem. So even if you're using RDS, it won't scale beyond a certain point, because it's not MySQL. It is not sharded MySQL.

**Jerod Santo:** Right.

**Deepthi Sigireddi:** So that's sort of the path to Vitess for open source adopters of Vitess.

**Jerod Santo:** Yeah. So you know you need it by the time you need it. You feel the pain, it's probably the leading option in the space... I don't know if there's competitors to Vitess in terms of other ways of horizontally scaling MySQL...

**Deepthi Sigireddi:** I don't believe there is anyone else, or anything else you can use to horizontally scale MySQL right now.

**Jerod Santo:** Vitess is compatible with MySQL alikes, like MariaDB and such... But how MySQL-specific is it? Could it be abstracted to all relational databases and Postgres users, or no?

**Deepthi Sigireddi:** It is actually very MySQL-specific, because we are managing MySQL. You're always in a replicated mode, you have a primary, and you have replicas, and Vitess knows which is the primary, what are the replicas... And if there is a failure and you're recovering, then you are changing that configuration. You now have a different primary.

**Jerod Santo:** Yeah.

**Deepthi Sigireddi:** So Vitess is managing all of that, which means Vitess is managing replication at the MySQL level. And we are hooking into that replication to do resharding, and we are providing that illusion of a single database, which means clients talk to us using MySQL protocol. Or they can use gRPC. But we masquerade as a single MySQL server. So that SQL grammar and query language support is also MySQL-specific. It does not have any non-MySQL constructs in it. So it is fairly well-tied to MySQL.

**Jerod Santo:** Fair enough. Sometimes that's what you do - you just carve out your area of the world and you say "We're gonna do it this way. We're gonna serve this group of people, and it's gonna be awesome." And that's just the end of that story.

**Deepthi Sigireddi:** Right. So this is a question that we get asked on the PlanetScale side as well. "Are you going to support Postgres?" And the answer to that is at some point you will stop caring about the particular SQL dialect, and you will choose it as a data store. This is a database, it's not very difficult to learn the particular language that it understands... It's SQL, you just use that.

**Jerod Santo:** Right. You've just gotta wait it out.

**Deepthi Sigireddi:** You only do that if you're getting something else in return. And that something else is ease of use. It has to be easy to use. Easy to deploy, easy to use, easy to run...

**Jerod Santo:** \[44:11\] Yeah. Reliable, seamless... You just don't care anymore, because it's always there, it scales for you, it's easy to use, and you just use the language that it provides.

**Adam Stacoviak:** One thing, Jerod, when you asked about "Would you start using Vitess?" As you know, Sam Lambert was on -- Sam is the CEO of PlanetScale. He was on Founders Talk and he shared a sentiment on that front, which is - essentially, if you're gonna use Vitess, and as you had said, Deepthi, to not start there, but PlanetScale is designed to be the beginning. So rather than begin a brand new application on Vitess, with the complexity and all the simplicity you really want in the early stages of a startup or an idea... He was saying "Begin with PlanetScale, because it is Vitess as a service", plus plus, DX, UX, all that good stuff. That that's the starting point. Not to promote that by any means, but that's something he had said on the show, in terms of a starting point. And that's by design. It's because of Vitess being a thing that PlanetScale exists. So just to put that out there...

When someone's trying to adopt Vitess, what does it take to adopt it? What's the stack like? How does the stack change? What is it like to deploy it? How does it run? Is it its own server? What is it like?

**Deepthi Sigireddi:** So there's definitely a hardware cost to it when you start deploying Vitess. Typically, what people will do is they have their MySQL instances already, and they'll just put Vitess in front of it, and start routing the application queries through Vitess. Obviously, you have to run these additional components that Vitess brings in. For every MySQL database that you have, you run a management component called vttablet, and you run a bunch of proxies which will receive the MySQL queries connections from clients, and then pass them to the tablets which will eventually execute those queries on MySQL. So there is a hardware cost associated with it.

There is also compatibility. So Vitess is MySQL-compatible, but MySQL query syntax and constructs keep evolving. Vitess started (I think) maybe on MySQL 5.5, and we now support almost all the constructs in 5.7, but not everything that is 8.0, because a lot of new syntax was introduced in 8.0. And where this becomes hard - it's easy if you're unsharded. You sort of just have to understand the syntax and you can pass it through. But in a sharded system, what you end up doing is that you take each query and you have to plan that query, and you have to say which of the backing MySQL should this query eventually go to? Because it's not going to go to all of them; it's going to go to either one of them, or a subset of them. In rare cases - yes, if you do select star from a sharded table, you have to go to all of them. But usually, you want to go to a subset or a single one. And query planning is where we figure this out. What that means is that any new syntax or construct that MySQL introduces, we have to be able to understand that, because maybe it's a function, and the function is being applied to the results of multiple rows, and you have to know how to implement that function in Vitess in order to still provide that transparency. What's another example...? Or it's a join, and if it's going to be a cross-shard join, then you have to do some of the processing in-memory, after fetching the results from different individual MySQL databases. So all of this is happening in Vitess, which means that to this date there is a compatibility gap between Vitess and MySQL, and we are trying to close that.

\[48:16\] We started the compatibility project formally in... I have to think. I think January of 2020. So it's been two years. And we are still working on it. We have a sub-team at PlanetScale, all of whom are Vitess maintainers, who focus on closing this compatibility gap. And the way we did it was we said "Okay, we'll take some popular developer frameworks, like Ruby on Rails, or try to run WordPress on Vitess and look at the queries that are being executed." And especially with frameworks, they execute some preamble queries, some information schema, metadata queries, and so on. And then we start adding support for those things.

But to come back to the original question, which is "What does that journey of adopting Vitess look like for someone who starts on Vitess?" You may find that there are some queries that you are using which don't work with Vitess in a sharded mode. It's much rarer with unsharded, but there was a user on open source who said, "Oh, I'm using common table expressions. They don't work with Vitess." And I had to say "Yeah, they don't work with Vitess because we haven't added support yet." But most of the time it's not unsharded but sharded that causes the incompatibilities. So people will take a test environment, they'll have some test data, they'll put Vitess in front of their MySQLs, they will start sending some test traffic through Vitess, and then they'll discover what other things that don't work. At that point they have a choice of either contributing a fix upstream to make it work, or changing how their application works, so that those queries are not produced anymore.

So that's the sort of journey people tend to go through when they come to Vitess. And then, once they know that either all the queries work, or we've made the - usually not big changes; minor changes needed for the application to work, then you can start moving from test into production.

**Adam Stacoviak:** How often in these scenarios, whenever someone adopts or attempts to adopt Vitess, hits this lack of compatibility in a sharded mode, or something like that? Do they often contribute, or at least provide some guidance to the specific concerns and how it works to enable that compatibility? Because if this project has been a year or more -- if it was early 2020... I'm trying to remember what year this is. 2022. Okay, cool. Because Covid's got my brain still yet. I can't remember years anymore. So it's like two years at least, right? This is a long project, so I imagine that you've got limited bandwidth, limited core contributors... Maybe we could talk about how open your team is, or the team is, to more contributors, and how that works... But how often does someone come to Vitess and leave bummed out, but then maybe they find a way to actually contribute back to make that compatibility possible?

**Deepthi Sigireddi:** It's hard to know. We only know about the big ones, the big companies, where they put in a sustained effort because they really had no other option.

**Adam Stacoviak:** You're the only game in town when it comes to scaling MySQL; you said so yourself. What other options do you have? Build it yourself, or use Vitess. So why not just build features in Vitess, right?

**Deepthi Sigireddi:** Yeah. So in fact, some people built it themselves. We just don't hear about all of them. I know of one, but there must be many others who built their own custom way of sharding on top of MySQL, because they needed to. But if you don't want to build it yourself, then yeah, Vitess is pretty much the only option, unless -- I don't know, some people may just migrate out of MySQL at that point. I don't know what people are doing.

\[52:09\] So I think this sort of contributing back upstream and sticking to it in spite of hitting roadblocks probably happened a lot more in the early days. The gap is much narrower now in terms of compatibility. My sense is that it's actually rarer for people to hit those things and then say "Oh no, we can't deal with this." The gap is small enough that -- first of all, we have a list of things that don't work, that's in the public repo, that anybody can look at, and if somebody says "What are the queries that are not supported?", we can just point them to that, so they can upfront scan through them and look at their own application and make some decisions.

Beyond that, we are obviously open to contributions, but I think the fact that the people at PlanetScale who do this do it full-time, versus someone who's trying to adopt Vitess is either a database infrastructure engineer, or some other type of infrastructure engineer - they have their day job, right? So we don't see at this point a whole lot of contributions to Vitess in terms of compatibility. Most of it is happening from PlanetScale.

**Break:** \[53:32\]

**Jerod Santo:** Deepthi, I'm not sure if you have read or know about Nadia Eghbal's "Working in public" book... But in this book, after she's done lots of research, she categorized four types of open source projects, according to kind of two strata. You have user growth, and contributor growth. And if a project is high user growth, but low contributor growth, she calls that a stadium project, where there's a rockstar on page and there's a whole bunch of people in the crowd, and they're looking at the rockstar, waiting for that person to do their rockstar thing. And then if it's high user growth, but high contributor growth, she calls that a federation... Like the Rust Foundation, or these kinds of things.

If there's low user growth, like something that you've just built for yourself - there's low user growth, low contributor growth, so not many people use it, but also not many people find it useful, she calls those toys. So maybe you have your own dotfiles, you have a command line app that you use just for yourself, scripts etc.

And then there's a fourth group, which is low user growth, but high contributor growth, and she calls those clubs. So they're never gonna be that big, but the people who get involved tend to be contributors. If you're using it, you're probably contributing. She calls those clubs. And I've been trying to think about Vitess in light of one of those four categorizations. It kind of seems like a club, because you have probably not that many users, because your users are kind of de facto scaled organizations - which there aren't that many of those in the world. But then when I look at the contributors, it seems like mostly it's PlanetScale. So it's kind of a stadium in that sense, it's kind of a club... I'm just kind of curious, what kind of project do you think it is? Maybe there's been large contributions by the folks at Slack, by other users around... But I'm just curious, how many of the users are also contributing, and how that all breaks out, and how it feels as a community.

**Deepthi Sigireddi:** So given that we are a CNCF project, CNCF actually tracks these statistics and we have some numbers.

**Jerod Santo:** Oh, great.

**Deepthi Sigireddi:** So in terms of users, it's actually very difficult for us to know whether someone is running Vitess in production, because they don't have to share that information.

**Jerod Santo:** Unless they come out and tell you they're doing it.

**Deepthi Sigireddi:** Right. So it's completely voluntary. Some people will talk about it, they will go to conferences and talk about it, they will actually add their logo to the Vitess homepage... And others will never talk about it. So we do know of companies where people have told us in confidence that they're using Vitess, but they will never be public about it.

**Jerod Santo:** They'll never tell anybody.

**Deepthi Sigireddi:** Yeah. So if I look at our Slack workspace, we have 2,000+ people on there. They are not all active on an ongoing basis, but it's a decent-sized community. It's not tiny. I think earlier on Vitess was where the user growth and contributor growth was similar. Every new user ended up contributing, and there were very significant contributions from Flipkart, from Slack, from Square... But I think now it is at a point where there are more users than contributors. Most users who come in and try to use Vitess don't actually need to contribute. And also because there is PlanetScale, and the initial revenue stream for PlanetScale was doing support for people doing their own Vitess deployments.

So for companies that were trying to run Vitess on their own, but wanted some help, PlanetScale would do that. So at that point, they would funnel any bug fixes or features they needed through PlanetScale. So to the outside world, it looks like PlanetScale is making this contribution, but it's motivated by the needs of a particular user.

\[01:01:55.17\] So I think we have evolved to a point where PlanetScale is the main contributor and maintainer to Vitess. We still get contributions from other maintainers, we still get contributions from random people, people that I don't know. But it's definitely now I think more of the stadium type of project.

**Jerod Santo:** Yeah.

**Deepthi Sigireddi:** There are, I think, other reasons too, besides the one I talked about, which is PlanetScale was supporting people who wanted to do this, so then that just became the easiest way for them to get stuff done, and Vitess was contributing it themselves. I think the other reason also is that initially, when I started working on Vitess, there were only two people at PlanetScale working on Vitess. Obviously, we couldn't do everything that open source users needed, and people had to contribute.

Slack, for instance, contributed many significant things, which they found, because of the way they were trying to run Vitess. They didn't expect Sugu and me to do all of those things, because it was physically impossible to do so. But the maintainer team at PlanetScale has grown to the point where we can do the bulk of thing that are flowing either from users of PlanetScale databases, or open source users. So it just seems easier sometimes for people to say "Oh, here is a bug" and maybe somebody will jump in and say "I know how to fix it. It'll take me ten minutes. I'll do it."

**Adam Stacoviak:** It's interesting, because the motivation from PlanetScale's side obviously is it's core to PlanetScale as a commercial open source company to have that expertise, and then to fix and improve Vitess. So it's natural.

**Deepthi Sigireddi:** Yeah.

**Adam Stacoviak:** Although, at some point everyone is benefitting. Those users that are non-PlanetScale companies are benefitting from their contribution back to Vitess, and they may not be PlanetScale customers. So it could be a waste, or -- I don't know, maybe it works out in the end. Maybe that's just how open source works. You just trust the contribution. I don't know how to describe it, but you just trust the give-back, the generosity, so to speak.

**Deepthi Sigireddi:** So there are different open source governance models. I was reading an article written by the founder of Drupal about this, how in any open source project there are givers and takers. And if that balance goes out of whack, if there are community members that are mostly takers and they're not enough givers, then eventually the project may not survive long-term. So those are things that all open source maintainers have to think about.

For Vitess, right now, PlanetScale is backing it. So the number of givers in terms of individuals is high, but in terms of corporate entities it's pretty low.

**Adam Stacoviak:** Yeah, it's pretty low. Is that something that -- and I don't know how you separate yourself, because you work for Planet Scale, but you also are a core contributor to Vitess... And I wanna get into some of your particular contributions, because you're quite a subject matter expert, and I wanna know more about your actual contributions beyond your wealth of knowledge of its story and how beautifully you've but I've gotta imagine that there's some desire there. So how do you personally separate your psychological balance between "I work for PlanetScale, but I also am pro Vitess, and I am a core contributor there"? How do you wanna see the balance change and shift? If there's listeners out there at Netflix and they use it, or at XYZ and they adopt Vitess, how do you want corporate contributions back to balance out the PlanetScale give, and backing of it?

**Deepthi Sigireddi:** \[01:05:52.25\] So if I think back to how I got more and more involved in Vitess as a PlanetScale employee - I started off with "Okay, there are some bugs that need to be fixed. Let's fix them. There are some features that PlanetScale support customers want. Let's add those features." And slowly, because of my own desire to learn more about Vitess, I started spending a lot of time in the open source Slack, where people ask questions. And I would look up the answers to the those questions. Basically, if somebody asks a question, I don't know the answer to it; so I'll go and run Vitess myself in my local environment, try it out, and understand how it works, and then trace it back to the code, and then at that point I'll be able to answer that question. Or I may just search through the Slack messages to find the answer.

So I had to build my competence in Vitess at the code level, but I also had to build my competence in Vitess as a user, from the user perspective. And when you do that, you actually develop empathy for people who are trying to use the software, because you are not just looking at it as the writer of the software, but as someone who has to use it, and you start empathizing with how hard it can be sometimes. So that to me is what drives the balance.

Vitess is open source, which implies a certain contract between the project and its users. The project is embodied by the maintainer team, and I'm part of that maintainer team. I'm just fortunate that PlanetScale pays me a salary so that I can do this full-time. Most people don't have that luxury.

So like you said, I have to balance what I owe PlanetScale, because they are paying me a salary, versus this more idealistic nature of open source software where you're altruistically giving, without expecting anything in return.

**Adam Stacoviak:** Yeah, precisely.

**Deepthi Sigireddi:** That is a difficult balance. The best thing though is that everything we do in Vitess for PlanetScale is usable by anyone. It goes upstream. For PlanetScale, to start with, we started the compatibility project, and we worked on adding constructs, adding syntax, and so on and so forth, for a year. And we did some very basic testing with various frameworks. Ruby on Rails - okay, it works. Can you deploy WordPress? It works. Django - it works. And so on. But for PlanetScale we had to actually make sure that anything you did in Ruby on Rails would work, because the PlanetScale app is built using Ruby on Rails. And PlanetScale uses PlanetScale for Vitess as its own data store.

**Adam Stacoviak:** Sure.

**Deepthi Sigireddi:** So PlanetScale runs on PlanetScale. So we did a three-month (one quarter) project, where we went through and looked at all the Ruby on Rails guides, and proved that all of those constructs that you can use in Ruby on Rails, the Active Record guides, will actually work against Vitess. Now, we did that for PlanetScale, but it benefits anybody who tries to write a Ruby on Rails app against Vitess, or tries to write a Ruby on Rails app against PlanetScale.

So that's just one example of something we did because we wanted it for PlanetScale. And some of this work was done by -- a lot of the testing was done by non-core Vitess maintainers, but the bug fixes were done by the Vitess maintainers.

**Jerod Santo:** So I'm a bit torn, because it seems like Vitess is in good hands, but then I also see all these other corporations who are using it, and I think "Shouldn't they also be pitching in?" I guess it's part of CNCF, or it's graduated. Maybe tell everybody what that means for Vitess, having graduated from CNCF, and maybe I guess some of the financial side of the open source commons here.

**Deepthi Sigireddi:** \[01:10:07.02\] So Vitess, when it joined CNCF in early 2018 - the process probably started in 2017, but it was January 2018 that Vitess became a part of CNCF as an incubating project. And then graduation was in 2019. So CNCF has certain criteria for graduation, and one of them is that the project has to be supported by multiple entities, so that it doesn't just disappear if one of those corporate entities disappears. And when they had the meeting or the review, Michael Demmer from Slack was in that meeting to say that "Even if PlanetScale goes away, Vitess is so important, so foundational for Slack at this point that we will maintain it."

So because Vitess is running in production at some of these huge companies, and it is storing their business data - Slack, Square, HubSpot - right now PlanetScale is doing most of the maintenance, and that's fine; but if PlanetScale were to go away, other people would have to step in. They would not have a choice.

**Adam Stacoviak:** Yeah, one of the criteria -- I'm not gonna read them all, but one of the criteria for the graduation stage for a CNCF project, the very first line is "Have committers from at least two organizations." And a few other things, essentially, for this due diligence. It's set to balance the need for the technology, and also the support of the technology. And I assume that all maintainers are not employed by PlanetScale, given that graduation stage.

**Deepthi Sigireddi:** Yeah. So about 50% of the maintainers are now PlanetScale employees, and a lot of it is because PlanetScale staffed up the Vitess team, and over time people just commit so much when they're doing it full-time that they end up becoming maintainers. Their contributions reach a level where you can give them write permissions. They know some part of the code well enough to review other people's work and to make decisions on how that should evolve in the future, and things like that. So that's sort of why about 50% of the maintainer team is now from PlanetScale. But we do have maintainers from Slack, from Square, HubSpot, a few other companies. So there are about ten people who are not PlanetScale employees.

**Jerod Santo:** Also, on the list of users - Pinterest, GitHub, New Relic... These are companies that are not going to allow it to disappear. Maybe they're not maintaining today, but like you said, if PlanetScale scaled back its maintenance quite a bit, somebody would step up.

**Deepthi Sigireddi:** Right.

**Jerod Santo:** If it weren't Slack, it's going to be Square. If it's not Square, it's gonna be Pinterest, and so on. There's just too much vested interest in the project for it to be abandoned at this phase.

**Deepthi Sigireddi:** Exactly, yeah. In terms of support from the foundation, they pay for our GitHub repositories. So they provide -- obviously, the project itself has no money. Anything that requires spending either comes from PlanetScale or from the foundation. So GitHub repositories, Docker... We have a Docker team plan. They've given us Equinix Metal hardware on which we run daily benchmarks and we publish those benchmarks on a separate website, benchmark.vitess.io. So that's continuously updated, and these benchmarks are running all the time. We needed some dedicated servers for running some portion of our CI, and the foundation gave that to us. So they do provide a lot of support in terms of whatever the project needs to keep going.

**Adam Stacoviak:** \[01:13:59.07\] Since you mentioned contributions, I've gotta hear more. Can you boast a bit? Can you share some of your contributions in particular?

**Deepthi Sigireddi:** \[laughs\] Okay. So a few things stand out. Vitess has backup restore functionality. For any database, you need that, and specifically in the case of Vitess, if you want to add more replicas, you will restore from a backup, and then catch up to the current primary, and then you are ready to serve.

So Vitess had its own way of doing backups, which was basically "Shut down the MySQL, copy everything over, and then restart it." A number of members of the community wanted extra backup support; they wanted to be able to use Xtrabackup to take backups, so that they don't have to bring down the MySQL. Because with extra backup, you can take backups on a running instance. So that was my first major enhancement to Vitess, and that's why I remember it so clearly. And this was actually sponsored by Slack, but I ended up being the person doing the work.

And then, once we did that we also did a feature where you could do point in time recovery. So let's say somebody did something bad, lost some data, you want to go back to a good, known time. You want to be able to go backwards in time. Most of the time this is for the purpose of 4 and 6. You wanna go back and say "Okay, what happened, what was the state of the data at the time" or whatever. But point in time recovery was something else where -- I didn't do all of the work, but myself and another engineer together did that.

And then, health check. So in Vitess there is a component called health check. So what we are doing is that if you look at the Vitess architecture, there's a metadata store, a TopoServer which stores the list of all the tablets. But you don't rely on that when you are serving queries. So you have the proxy layer called VTGate, which receives the MySQL connections and queries, and sends them to the tablets. But it needs to know what is the primary for a given shard. And the way it keeps track of that is that it establishes connections to all the tablets and it receives periodical checks.

So this health check code was actually very complex, and we would get bug reports, and they were very obscure, very hard to track down... They would only happen under certain conditions, because mostly they were race conditions, or issues with locking, and stuff like that.

So I ended up rewriting all of that, and that is one of the hardest software projects I've done in my life, because that code was very complex; it was almost impossible to understand what it was doing at a core level. So Sugu sat down and told me what it should do. He said "Don't think about what the code looks like right now. I'll tell you what it should do, and then you can implement that."

It was so difficult that parts of it were done by three people together. So we would get onto a Zoom call or some sort of a video call, and screenshare, and start looking at the code together and start writing code together. So the health-check rewrite was a big deal. And what that enabled us to do was to support replica transactions.

Prior to rewriting the healthcheck we did not have a way to do read-only transactions on replicas. You could do read transactions on the primary, but there were some users who said "We basically want a snapshot when we begin the transaction. We don't wanna see the commits that happen while we are reading data. So we really want to do a "Begin, read, read, read, read, read, and end." So replica transactions was something that we were able to do because we rewrote the health-checks. So these are some things that I can remember.

**Adam Stacoviak:** \[01:17:55.26\] It's big deal stuff there, Deepthi. Congrats. Coming back from a year hiatus, back into the swing of things, and kicking butt, from what I can tell. Let's talk about the future then. I know on the blog you had mentioned - or at least \[unintelligible 01:18:08.29\] had mentioned back last month the announcement of general availability of Vitess 13... So what's in that? What's in the future? What's the future of Vitess? Is it separated from PlanetScale's roadmap? How do you map out Vitess' -- obviously, there's a lot of users, so there's some user demand as well; it's not all PlanetScale demand, or support demand back into Vitess... But give us a snapshot of 13 and maybe into the future.

**Deepthi Sigireddi:** I think in 13 -- so we keep working on compatibility, and one of the things our query serving team realized at some point was that they needed to rewrite how the query planning was being done. Query planning was being done in a particular way at the code level, and they sort of had to tear the whole thing apart and put it back together, but that would have been very risky. So what they did instead is that they wrote a new version of the query planner while keeping the old one. And then the new version reached parity with the old one. We were able to say, "Okay, now the new planner is GA, and it supports constructs that the old one simply could not." It was too complex at a code level to add support to certain things in the old planner.

So the new query planner is GA. We spent like a couple of releases building that up. First you have to reach parity, then you can start doing new stuff. So in this new release we were able to add support to a number of constructs that didn't work earlier, because towards the end of the previous release we actually completed the work of bringing it up to parity. So that's a big thing.

And then the online schema changes - a lot of improvements have been done to the online schema changes over time, and a number of them happened in the last release, and there will still be a few going forward, but that is getting quite stable now.

So looking ahead to the next release, the big things that we want to go into GA in the next release are the Vitess native online schema changes, which are still marked experimental... We started -- actually, I don't know if I should say "we". The maintainers from Slack started building a replacement UI for what we had. So Vitess has a very primitive management UI, which was written back in 2012, or something like that. It looks very ugly, it's still using some old versions of Angular.js, which you can't upgrade from, and so on and so forth.

So the team at Slack actually started building a UI for their own Slack internal usage, and at some point they were able to open source it. So they were able to get their management to agree to open source it, and then they talked to myself and a few others who were in the maintainer team about how they can go about doing that.

So this new-generation UI called VTAdmin, Vitess Admin UI, is expected to go GA in the next release. They've been working on it for almost two years now, so it's been a long process... But I'm actually looking forward to that, because when I do demos, it's like "How can I show this really old and ugly UI?" \[laughter\] But I don't have a choice.

**Jerod Santo:** Right. That's exciting.

**Deepthi Sigireddi:** The other thing that was sort of a missing piece in Vitess for a long time was automatic failure detection. So we didn't talk about Kubernetes, but if you are running Vitess in Kubernetes and a Vitess component goes down, Kubernetes will bring it back up. But what if a MySQL instance goes down? Kubernetes will bring it back up, but it will take time. And maybe people are running it with System V, or systemctl, or something else that can bring it back up, but when a MySQL goes down, to bring it back up takes time. And that time could range from 30 seconds to several minutes. And for most production systems, that's too long.

\[01:22:20.23\] So what we really need to do is for Vitess to monitor these and to do an automatic failover when a MySQL instance goes down. And for the longest time, Vitess didn't do that itself. There was another open source project called Orchestrator, which people would integrate with to get this ability. Because Vitess might be running in Kubernetes, outside Kubernetes, you can run it in many different ways... But what we've started doing - and this is, again, a project that started in 2020, I want to say; so it's been in the works for over a year - was to take what Orchestrator does... It's open source, right? We can copy it in and change it the way we want to. So we took what Orchestrator does, brought in some of the code, rewrote some of the code to do it the Vitess way, so that within Vitess there is a component that is watching all the MySQL databases, and if the primary goes down, the failover is automatic. It doesn't have to be human intervention.

So that self-healing mode, or autopilot, is where we want Vitess to go more and more, as we look out beyond this year and look into the future for the next two to five years. Self-healing, autopilot, usability - these are things that we want to worry about for the community.

Some of these are relevant for PlanetScale, but usability is not a bit issue for PlanetScale, because PlanetScale has its own UX. Vitess is really a backend component as far as PlanetScale is concerned. VTAdmin UI - maybe, maybe not. So it's a mix of what is driven by PlanetScale and what is driven just as project vision or driven by the community.

**Adam Stacoviak:** I guess one more question on the release schedule. Is there -- since you mentioned 13, the next release... What is the schedule? Is there a schedule? Is it monthly? Is the next version 14? Is it 13.5? How do you version, how do you release? What's the schedule?

**Deepthi Sigireddi:** There is a release schedule. The next version is 14. So a couple of years ago one of our maintainers wrote this up as a Vitess enhancement proposal. So we have a repo called enhancements. This is modeled after Python, Kubernetes... Everybody does this now. If you want to do some fundamental change, you write it up as an enhancement proposal.

So there is a published release cadence. They used to do four releases a year, so every quarter, effectively, and starting this year we are going to do three releases a year. The releases come with certain guarantees that the open source maintainer will maintain a release for a year after the release date. And maintaining means that any major vulnerabilities will be patched. If there is a critical bug that can lead to data loss, or system downtime, that will be fixed, and we will do patch releases if necessary. We don't typically do more than one or two patch releases for a major release, but we do end up doing a couple of patch releases for each major release.

**Adam Stacoviak:** Gotcha. Anything we didn't ask you, Deepthi? Anything that we left on the table, that we didn't get a chance to ask you, in closing?

**Deepthi Sigireddi:** Ah, we didn't talk about Kubernetes. So - I guess two things. One is Vitess has been cloud-native since 2015. You have been able to run Vitess in Kubernetes since 2015. And that is a non-trivial thing, because like I said, you can't just kill a MySQL pod and restart it on another Node and expect it to work, because it needs its storage, right?

**Jerod Santo:** Yeah.

**Deepthi Sigireddi:** \[01:26:06.20\] So that's one thing. I think the other thing is that the reason Vitess or PlanetScale or anything like this is relevant and will continue to be relevant is that if I look at the database market, there are some trends, right? One of them is the move to cloud. Everybody wants to run everything in the cloud. They no longer want to deal with their own data centers. That is a clear trend. And with cloud comes Kubernetes. So there is data on Kubernetes community; they do surveys, and more and more companies are getting comfortable with putting their data into Kubernetes. So the combination of this means that people are going to go to managed services.

Vitess is a project that people have traditionally run on their own, but I expect that most people will actually prefer to either run Vitess on some sort of a Kubernetes service, from Amazon, or Google, or whoever, or to pay someone else to do it.

**Adam Stacoviak:** Yeah, why run it yourself when you can have somebody else run it for you? You just stick to your actual guns, so to speak, and build your own product, instead of supporting infra. Or - why, unless you absolutely had to, really? Unless you had a specific use case for doing so. And the team.

**Deepthi Sigireddi:** Yeah, yeah. So this is the trend towards specialization that we have seen already with hardware, right? People used to run their own servers for everything, and now most of that happens in the cloud, because it's just easier to pay Amazon or Google to run your servers for you, except under certain conditions.

**Adam Stacoviak:** Well, Deepthi, it's been a great journey with you, learning about Vitess, yourself, Sugu... All of the corporate community involved in Vitess, of course, and all the maintainers involved. I'm excited for what the future is for it. We don't personally use MySQL, which is why Jerod had the question of Postgres. Because we're kind of a Postgres family around here.

**Jerod Santo:** Sorry...

**Adam Stacoviak:** Although we're not haters.

**Jerod Santo:** No.

**Adam Stacoviak:** We just have preferences.

**Jerod Santo:** That's right.

**Adam Stacoviak:** But we appreciate you sharing your journey, we appreciate your time. Thank you.

**Deepthi Sigireddi:** I really enjoyed this conversation. I always love talking about Vitess, and I in particular enjoyed the direction in which you took the conversation, so thank you.

**Adam Stacoviak:** Awesome. Thank you.

**Jerod Santo:** Your enthusiasm is infectious.

**Adam Stacoviak:** Yes. Very much so.
