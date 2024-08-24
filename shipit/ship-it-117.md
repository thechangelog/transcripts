**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I am your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** I had real food. I'm so excited.

**Justin Garrison:** Good job. Good job with eating that --

**Autumn Nash:** There's food and caffeine... I'm like bouncing in my seat.

**Justin Garrison:** You know, we got a lot of replies in Slack. Did you see them? About people listening to our voices at faster speeds...

**Autumn Nash:** Okay, okay, so somebody said they listen to us at - what was it, double speed? Do we sound like chipmunks y'all? Because the way that we sound regularly, when I'm caffeinated and Justin has candy and Dr. Pepper - do we sound like chipmunks at double speed? Like, I can't listen to my own voice, so I'm not going to do the experiment to figure this out, but we need to know. Do we sound like chipmunks?

**Justin Garrison:** Most of the podcast apps do a really good job of not raising the pitch. It's just - they lower it. But also, I know some of them will remove white spaces. So if I stopped talking right now, and they have that setting turned on, it would just collapse that white space there.

**Autumn Nash:** I love that you just did the Justin excited face when you stopped talking.

**Justin Garrison:** It was a demo, so it was cool. But anyway, today on the show, we have Steven, from Scanner. Steven's going to talk to us about the architecture of basically collecting logs at scale... Which is cool, because I used to run Logstash, and Elasticsearch, and there's a lot of things out there that kind of do a similar-ish thing, but he has a very specific focus on security teams using it for what does it look like logging for a security team. So it was fun to talk about what the architecture is, and how that impacts the costs for both him and the customers, as well as what the general use cases are. So it was a lot of fun.

**Autumn Nash:** I think logs are so important. And I also think when people are planning startups or just planning products in general, it's really important to think about not only what you want to build, but how people will use your product... Because I think sometimes we think that people will only use our product in ways that we designed them, and that's never how it goes. You know what I mean?

**Justin Garrison:** And I've lived through plenty of places where it was like Elasticsearch was there for just like collecting query logs. And then it became the source of metrics. And then you're like "Oh, I've got to query this all the time, and run these indexes, so then now it becomes metrics." And then those metrics get displayed on a dashboard, and that dashboard is refreshed every second.

**Autumn Nash:** Exactly.

**Justin Garrison:** And that had direct impact on the architecture of our Elasticsearch clusters... And it was just like "Oh maybe that wasn't the best place to--" And not only -- like, we shouldn't be looking for metrics out of the logs; we could just like export metrics that are just easier to collect and scale, and all that stuff... But there's so much information in logs that it's hard to ignore them. And I absolutely wish that logs could just go away, and we didn't need them anymore, and we could debug things on the fly... Because log storage is expensive, and sending logs is a lot of bandwidth, and all this stuff... But they exist for a reason.

**Autumn Nash:** Also, at a certain point you may say "Hey, this is really interesting. Let's start capturing this. Let's start querying for this." So I think things change and they grow and they evolve, so you have to take into account how those things will evolve eventually, and how they may be used. But I also think that the one thing that I learned from my solutions architect days always comes up is using the right database and data store for the right things. A lot of people will just be like "Well, I have experience in this database, so I'm going to use it for logs, or I'm going to use it for this." But all of those databases have specific use cases in which they do better for.

Also, I think people always get NoSQL wrong. Just because NoSQL is flexible, it doesn't mean that you can just put things in and take it out however you want to, or you're never going to have good performance.

**Justin Garrison:** I absolutely agree that picking the wrong tool or the wrong architecture is going to directly impact performance, and cost, and scalability and all that stuff. But also, I feel like, at least from my neck of the woods of NoSQL databases or schemaless, it's just like, we just don't want to make a decision now. Let me just punt that decision to someone in the future. Future me will have to live with whatever bad decisions we make today, by not making the decision. And in a lot of ways, schemaless was flexible enough to be like "Well, you could just update your app to make that better in the future." And it's like "Well--" You could still get better performance and scalability by making a decision up front.

**Autumn Nash:** It really is wonderful, because it allows you to say "Hey, we may need to add a column, or add this later, or look at this differently later." But you do know certain things. If you have an app and there's a login, and you're going to take a username and a password, you know those things are important. You know what ID or name or however you're going to look it up. So planning and having good planning in the beginning is really important to your performance. But you still get the flexibility of "Hey, I may want to play around with this, or that, or add this feature and have that flexibility." But it's flexible. It's not no schema. It's not "no thought has to be put into it." And us lying and telling people that is why we end up with bad performance.

\[06:04\] And then we're always like "Well, this database--" I'm just going to throw things out and just say people will say "Well, Snowflake's worse than this." But what is Snowflake's use case? That is for analytics and for learning more about data. You know what I mean? And for dumping a bunch of data and being able to find it. So I think we have to be careful saying that things have bad performance, or bad value when we're using it for the wrong use case, you know?

**Justin Garrison:** Yeah. And knowing that those use cases change over time, right? Because the decision I made up front of like "My logging system only needs these three fields", and then all of a sudden your logging system is something else, and some other use case comes up where they need more information... You have to be able to adapt those things, for sure.

**Autumn Nash:** Exactly. Or if your dataset or what you're storing is smaller, a lot of times people will be like "I can use S3 with Athena on it, and it'll be fine." And then eventually, your app gets so big that you have to find some sort of a NoSQL database, or just any kind of relational to NoSQL at some point for the application.

So I think a lot of times people have more experience with certain databases, so they want to use it for everything... And some databases are almost made for that. Like Mongo is a really good, easy, beginner, or maybe you don't have a ton of experience and you're going to build your first app, or an app that you don't want to be super-intensive for database learnings, and stuff... They're made for that. They have so many learnings and stuff at Mongo University for databases. And then AWS has a version of that same database, you know what I mean? And their partners.

So there's some databases who are made for "Hey, do you want to put something in something flexible? Do you want to not have a ton of experience?" And then there's some databases where we know you're going to need that skill level to run it. Like, Cassandra requires a certain skill level to scale it, and to maintain that. So sometimes in production you have to make that decision and be like "We have people that can do this, so we're going to pick this one" or whatever. There's not always best practices, but you do have to really think about what product you're choosing.

**Justin Garrison:** Alright, so let's jump into the interview with Steven, and we will be back afterwards to talk about some of the recent Azure outages, because they've been having a month in July. So we'll be back soon.

**Break**: \[08:15\]

**Justin Garrison:** Hello, and welcome to the show, Steven. Thanks for joining us today. We usually like to start off with just what software are you responsible for?

**Steven Wu:** Yeah, so I'm the CTO of our startup. So I pretty much -- so our startup is a seven-person company. So I pretty much do everything, because there isn't that much.

**Justin Garrison:** That's an engineering team right there.

**Steven Wu:** Yeah. So I guess, is this like what is our stack, more interesting? Or...

**Justin Garrison:** Well, so let's start -- what is the startup? What is it doing, and...

**Steven Wu:** Yeah, so we're Scanner, we are a -- I guess the tagline is that we're like a petabyte-scale log search and storage company. So imagine something like Splunk, or like Datadog, or like CrowdStrike, Falcon... I don't know if it will still be timely when this comes out...

**Justin Garrison:** \[laughs\]

**Steven Wu:** ...where basically, if you have application logs or security-relevant access logs, you dump them in an S3, and you might have terabytes or petabytes of them, and we run a bunch of distributed systems that index them, and then we have some extremely -- I guess I'd call them extremely opinionated cloud-native architecture query engine that goes through and searches it really fast, so you can ask it about all the things that are in that data. Yeah, that's the high level.

**Justin Garrison:** So let's describe that infrastructure a little bit more, because there's plenty of log searching engines, right? I could do Logstash from back in the day, or plenty of open source -- the things that exists, that we could pull off the shelf... What makes Scanner different, and how does that architecture impact it?

**Steven Wu:** There's kind of a couple things. So basically, we're cloud-native. A lot of these older generation stuff, like Splunk, like Datadog, like stuff based around Logstash, etc. a lot of that tends to be -- it's very important to these companies, because of a function of the times that they have good on-prem solutions, and they kind of have these applications that are designed to be run on physical computers, and so on. So if you're running a Splunk cluster, you have like a -- maybe not a physical computer, but even on the cloud option it's like a VPC somewhere, and that's like a node, and that handles all of the capacities of the system, which includes concerns like storage, it concerns compute... And one of the big things is that for the most part your usage of those resources are not uniform over time, and they are not uniform in any given instant. For instance, you need storage all the time, but you pretty much don't query most of the time. So if you kind of think about what the average query use case looks like, you spend like five minutes typing stuff into the search box every day, and then the other 23 hours and 55 minutes you're not, right? So when you have physical computers that have some constant resource constraints, and some very spiky resource constraints, you have a lot of like weird utilization issues... And this leads to a lot of basically costs.

So in our system basically each of our things, each of the pieces of that system, each of those concerns are farmed out to the cloud service that is specialized towards handling that. So all of the index files go in object storage in S3, we run ECS clusters, or whatever... Well, not whatever; that's what we do. I actually know that. For the actual indexing. And then we run basically serverless compute for doing the query, and each of those things are chosen specifically because that particular operation has a particular set of properties in terms of the volume, the spikiness in variance, the availability requirements and so on, that are very, very different. And I can kind of talk about any of those in detail; I don't want to get lost too much in the specifics, but...

I think we're kind of seeing a world now where in the current generation of these log search platforms people are more and more -- you'll see the term separating compute from storage more and more in people's marketing material, because I think we are realizing now that even very, very large companies like Fortune 50 companies are moving all their stuff to the cloud, that you can now in fact build things with the assumption that pretty much even the biggest companies have enough cloud stuff for you to work with... Whereas I think even like five years ago you couldn't. If you wanted to work with a big financial institution, you had to have some literal on-prem distribution where you gave them a computer. So I think it's there's a sea change that has kind of enabled this to be possible kind of in like the business landscape, and just in terms of people moving from on-prem to cloud generally.

**Autumn Nash:** How do you feel like your company can still bring value even though people seem to be -- well, I won't say like one size fits all, but a lot of people seem to be moving away from the cloud, because they feel that the cloud has gotten so expensive... So how does your startup stay relevant with this kind of a narrative? It doesn't mean that it's necessarily true for everyone. I think cloud is valuable, and on prem is valuable. But right now we seem to be in like this cycle of narratives, and that is one of the current ones.

**Steven Wu:** Yeah. Well, this isn't exactly a direct answer to your question, but our product is extremely cheap compared to pretty much any other product in the space. I feel like throwing out numbers feels really salesy, but the normal actual charge we see tends to be a literal order of magnitude lower than stuff like Splunk Cloud, which is like a comparable cloud service in terms of functionality.

\[16:05\] We see people with cost as a concern, but at least for the kinds of companies that we talk to, none of them really feel that it's realistic for them to move completely off the cloud. And these tend to be -- because our main use case is actually security, our product is marketed as a SIEM, which is like a Security Information Event Management system. And the smallest company that has like a security team of five people is like a billion-dollar company, so that's like the smallest company that we work with. And for those companies, I think, once they have infrastructure, the inertia and the size of what you have just means that you're -- you can't move off the cloud so much as you're just trying to cut cloud costs. So I think what we build fits really nicely into that narrative, because it's like a cloud service that kind of works alongside and takes advantage of everything available to you in that environment, but it also doesn't break the bank like pretty much every other logging service does.

**Justin Garrison:** But how does that fit with the actual native services? Because you're not going to beat the price of S3, right? Athena with S3 is going to be cheaper than anything else out there. And I don't know about the cost for CloudWatch at scale, but CloudWatch is a similar --

**Steven Wu:** S3 isn't a comparable product, because you can't search S3. You can use something like Athena --

**Justin Garrison:** Right, Athena is the --

**Steven Wu:** ...but that is really terrible.

**Justin Garrison:** I love Athena. I used to use Athena...

**Steven Wu:** You're the first person I've ever heard say that.

**Justin Garrison:** I have not used it for a while. But when I was using it for production workloads, I thought it was fantastic.

**Steven Wu:** Yeah. So I will say that Athena works; it's very easy to set up. You don't have to set it up, you just dump your files on there and it runs. And that's kind of similar to the story that we have. I'll say, one of the common demos we do when we do the cold outreach, and we're like "Hey, do you want to see the product?" and they're like "Sure." And we show them this demo where we have some search over like a demo Athena dataset, a couple hundred terabytes... And we started at the beginning, and then we run the search on our platform, and it finishes in like five seconds. And then we go back to Athena, it's still running, and then we go like do the call... We actually stopped doing this, because it costs a lot of money, but we're doing this for a while, where it'll just run the entire sales call, a 30 to 40-minute sales call; we'll come back and be like "Hey, Athena is still going." We stopped doing this because it costs us like $100 per call, it turns out, when you do this... But that's how I'd say that our product is differentiated from or better than just using Athena, which is that Athena doesn't do indexing, and Athena has like a limit to how fast it scans things. And there are some things that Athena does really quickly if you partition in the correct way, and know exactly which keys to hit and so on... But that isn't all queries, and we find that a lot of people are just like "Oh, I have this request ID, and I need to find what happened with this request ID. It happened like six days ago. Or like maybe it happened five days ago. I don't know which day it happened." And in that case, Athena is not very good, because Athena just does a full dataset scan every time, and they don't have indexing, and I think their particular -- what they have in terms of compute, in terms of the query engine kind of requires that they do the scan, because of the other properties of the system, I guess.

**Autumn Nash:** How do you differentiate yourself between the fact that you can -- a lot of databases and database engineering is how you, for one, tune your database and your schema, and the different ways that you can bring in a database architect and get better throughput, and just kind of deal with your data better. So how do you --

**Steven Wu:** I also don't have a direct answer to that question, because pretty much everyone we talk to does not like using things like Snowflake, for various reasons. I think if you're doing a lot of these kinds of application logging things where you're just like "Oh, I have a new service. I want to just dump it into logs", it's a pain in the ass to ETL that into some form where it is columnar, that you can put it into like a schemafull system.

**Autumn Nash:** Yeah. Well, I mean, every database has a schema, but Snowflake is definitely more flaky when you do analytics on your workload, or something. That would be something that would be really expensive for a log use case. So your use case is just for logging? Or...

**Steven Wu:** \[20:07\] Yeah, we're basically fully focused on the like kind of freeform text search with aggregations use case. So our product is not schemafull. So you can dump arbitrary text files or JSON files into it, and it is aware of the concept of columns, but there's no -- you don't have to pre-specify "These are the columns or you're we want to index." We index pretty much everything you dump in. And the columns end up just kind of being like metadata information on that data, where -- I mean, I don't want to say it's like NoSQL, because it's not a database in the traditional sense... But it is NoSQL in that there's no tables, no schema... And kind of the goal is just to make it as easy as possible to get your data in there and have it be usable, and then to have the right tools so that you can still kind of treat it as if it were a columnar... Which is an interesting technical problem, I think, and I think a lot of our resources have been spent on "How do we make this system fast?" And how do we make these particular aggregation operations feel good? And what do you do if someone does aggregations on columns in weird ways, where that column has exactly one value in the entire database, and it's like somewhere over here in this corner, \[unintelligible 00:21:10.06\] And I don't think we solve it perfectly, but I do kind of think that, for the most part, there are notable advantages of using something like what we do over using something that requires a schema. And I think it might be true that if you had like a really, really, really, really big cluster of whatever database system is your preference, and you sharded it, and you have like a guy or like two guys full-time running it, that you could get comparable or better performance, but it costs you a lot more, both in terms of having two guys running it, but also just in terms of you would need a lot of beef to handle that much MySQL or that much Postgres, or that much Snowflake even.

And I just I brought up Snowflake because Snowflake is one of the direct -- when we sell to a lot of these security teams, Snowflake is the preferred data store. And a lot of companies -- I don't know how familiar you guys are, but like Panther Labs, for instance, is like one of the larger SIEM tools, and their entire product is built on top of Snowflake. So they basically -- they just give you access to like querying on Snowflake, which is very powerful. But then also, it costs the same as Snowflake, so that ends up being a blocker for lots of people.

**Autumn Nash:** We have to be careful, though... I think NoSQL is flexible schema, not necessarily no schema, because that gets you into a lot of trouble... And I think a lot of the issue is that logs - you want to be able to dump them and you want to be able to query them, but you don't want to spend a lot on it, because you know that you're going to just collect massive amounts of data. But that's kind of like picking the right database, because you don't want to pick something that is made for analytics and for querying, like a column database, like a Cassandra or a Snowflake, because that's not really -- I mean, you can put logs in those, but Snowflake - you know that you're going to pay for that. You know what I mean?

**Steven Wu:** Oh, I completely agree. But people do that in practice.

**Autumn Nash:** Oh, yeah, totally. But I think that that's where database architects come in with using the right database. But I do get where you're coming from. I just don't want to tell people that NoSQL databases are schemeless, which just starts -- we will get like database people fighting. But I get it.

**Steven Wu:** They have no predefined schema; you don't have to predefine what columns you want beforehand. I think that's maybe a better way for me to describe our product, at least.

**Autumn Nash:** Yeah, they're more flexible.

**Steven Wu:** I completely agree with the better product thing, or better/best database thing. I think part of what we try to do is design a product that is the quote-unquote best database for the particular use case that that we have. And a lot of it's like weird trade-offs. There are a lot of kinds of queries we can't do under our current architecture; we don't support multiple tables, we don't support joins... And it's because those things are nice to have, but not high priority for when you are like a security analyst, or you are even like a guy doing DevOps stuff, where mostly what you're looking for is a particular needle in your haystack, or you're like looking to see if -- you know, have any of these IPs tried to hit my system? ...that sort of thing. And it's useful to see aggregations, but it's less useful to have these really big, complicated joins that you might see in like more traditional data warehouse software. So I think that's kind of \[unintelligible 00:24:18.24\]

**Autumn Nash:** \[24:21\] Your use case seems like it would be valuable for maybe smaller teams, that can't bring in someone to help them work on their schemas, or architect their data, to be able to retrieve and put it in the right way. So maybe it would be better for a smaller team that just wants logs, and maybe it doesn't have like database specialties, or like that kind of knowledge. It would make it more straightforward to be able to just dump in the logs and get what you need.

**Steven Wu:** I think that's empirically been untrue. I think we mostly work actually with larger companies.

**Autumn Nash:** Oh, okay.

**Steven Wu:** I think the problem with the database guy is that headcount is really expensive.

**Autumn Nash:** Yeah, it is.

**Steven Wu:** The database guy costs you six figures. And I think in today's --

**Justin Garrison:** Or girl.

**Steven Wu:** Yeah, or girl. Sorry. But in today's economy, given kind of the direction we see with lots of these teams, a lot of companies we work with are, you might say, new wave IPO companies where they're not necessarily profitable, where I think right now cost is just very, very important. And so being able to not need a DBA, and not run your own cluster of extremely large, beefy hardware has been just financially valuable. If you have a team of four or five analysts, it's nice to just be able to have that team of four or five analysts not need four and five analysts, and a DBA, I think is kind of, I guess, my counter to that.

**Justin Garrison:** When we were first talking about this episode, we weren't really talking about costs, but it goes along the lines of you were mentioning how you scale up and down quickly with your queries as a differentiator for keeping your costs low. \[unintelligible 00:25:58.08\] Can you describe how that works?

**Steven Wu:** Yeah, so basically the boring version is that we just use serverless. And I think there's a lot of interesting details with this, but basically --

**Justin Garrison:** You're gonna have to define serverless there, because there's a lot of things that --

**Steven Wu:** Yeah, for instance we use Lambda on AWS. So we use basically scalable compute. And Lambda has some really nice properties. So Lambda can go from zero to like tens of thousands of compute CPUs pretty much instantly, and then it can go back down pretty much instantly. And this flexibility is great if you're willing to pay the cost, which is it costs a lot; like, it costs twice as much as normal compute.

**Justin Garrison:** It is the most expensive compute option on AWS.

**Steven Wu:** Yeah, basically. But if you kind of think about the properties of how querying works, like how do you query your dataset - you query your dataset for five minutes a day. And so if you're paying for 10 minutes of compute to query your dataset five minutes a day, that's still better than paying for 24 hours of compute to not query it for 24 hours a day. So in the long run, people need 10,000 CPUs for not very long each day, and so it ends up kind of being in terms of the trade-offs the right choice.

I think there's also lots of interesting things that fall out of our decision to use Lambdas. I don't know how deep we want to get into the specifics of the stack, but...

**Justin Garrison:** Well, so if I understand it, I go in, I type a query -- I'm looking for some something in the logs, and then you just fire off a bunch of Lambda functions that are going to look at each section of the logs, or each index...

**Steven Wu:** Yeah, we have an index, and then -- yeah.

**Justin Garrison:** Yeah, you can limit not raw looking at the logs. Like, not every Lambda's downloading something from S3 and then looking at it. But at some point, there's gonna be an index that's like "Oh yeah, this section has it. Now go get the raw data and go find the relevant information."

**Steven Wu:** Yeah. I think a lot of what's like tricky or difficult about systems like this is that it turns out doing really simple things is really hard when you have 10,000 little guys doing it at the same time. And I think a lot of the trade-offs that we make that are real technical concerns end up just being like "Oh yeah, it turns out that if you do this on one computer, it's super-easy, and if you do this on 10,000, it gets weird." Happy to kind of jump into that. I don't know what the direction you want to take is...

**Justin Garrison:** \[28:05\] Well, yeah, I mean, at some point everyone outgrows Lambda, mostly because of the costs, right? So if people are only querying things five minutes a day, it's fine. But once you have enough customers that every five minutes someone's querying something, it would just be faster to run an EC2 instance. Or faster and cheaper.

**Autumn Nash:** Not just that, but it's also the length of a longer query. Because sometimes a query will start off not that long, and you're only doing it for five minutes, and then you get more and more customers, and all of a sudden it's running over that time that makes Lambda efficient.

**Steven Wu:** Yeah. Pretty much all the customers we work with require their own environment. None of them -- because a lot of it is kind of like "Oh, it's sensitive security data. It's like our access logs, our firewall logs", or whatever. People don't really want to do multi-tenant for what we do. So a lot of the appeal of how we present our product is like you just get your own account, it's just your stuff in here. There's no one else's stuff in here. There's no chance of "Oh, someone messes with the database settings and now we can look at the whole database", because there's only one database and it's just for you.

And the thing you say about the EC2 stuff is true. I think that one of the ways you can think about how something like Lambda works is that you are literally benefiting from implicit multi-tenancy, because AWS is running that on the same --

**Justin Garrison:** S3 is still multi tenant, even if you're not.

**Steven Wu:** Yeah. But it's like a good way to kind of -- because everyone trusts AWS to do their multi tenancy well, whereas they might not trust random startup number three to do their multi-tenancy well. That part's definitely true. At some point we kind of are just like going to be pegging the physical hardware underneath to 200% all day because of volume, but... When it comes to particular -- we can't actually share EC2 between multiple customers, because they all want their own stuff. And the average size --

**Justin Garrison:** I mean, you could run an instance.

**Steven Wu:** We can. But the average team size is like ten people, and that doesn't scale up that high. Like, even if you look at very, very large companies... Some of the companies we talk to are Fortune 50 companies, and they have multiple different security teams, but those individual teams are still...

**Justin Garrison:** Siloed.

**Steven Wu:** Yeah. And they have like a dozen or two dozen analysts, and that's the entire team. So the query use case -- and this kind of happens to be the case for a lot of kind of like more security analysis side stuff, where the read volume isn't high, but it is very -- like, if you look for the data, you want it to show up instantly, but you're not doing that most of the time, most of the day. We did have a company that hired some consultants to do their querying, and they would copy-paste these queries where they would look for one IP at a time, and they would just do this all \[unintelligible 00:30:40.12\] once every minute for like an hour every day... And then we kind of saw this and we're like "Hey, you guys can just use an \[unintelligible 00:30:47.25\] But I think for the most part, you don't see super, super-high query load. I mean, I guess in terms of costs, the Lambda costs that we have are usually one of the smaller -- if you look at the AWS breakdown of costs, it's usually one of the smaller things that we get charged for.

**Justin Garrison:** Well, sure. I mean, if you're if you're storing logs, log storage is always one of the -- where you're storing is always the highest kind of thing, because it's just like a bunch of stuff that you don't know if you need or not. And reducing the amount of things you store is the easiest way to drive down that cost. Even if it was like "I have a petabyte of S3 storage, and I have an EC2 instance", right? The EC2 instance is gonna be lost in the noise, like it doesn't actually matter.

But what I find interesting here is you're doing S3 for the storage, which is still, again, the highest cost of the system, probably, and Lambda, which is the highest cost compute you could buy, that you run single-tenant for each customer. And then in that case you're not going to get overlap, you're not going to get reuse, you're just going to be paying the extra overhead of Lambda usage for each customer, whether they're using the system or not. If they're not using the system, great; great for you. There's no extra costs there.

**Steven Wu:** \[31:59\] Well, that's what I mean - there is no overhead of Lambda usage for us. The overhead is a constant factor.

**Justin Garrison:** Unless it's being used, right.

**Steven Wu:** Yeah. The overhead is a constant factor on being used, so what we actually do is we just don't run it unless you ask for it. The system fast-starts all the compute the instant you hit Enter in a query, and then it fast spins that down. And so the overhead is -- if we use EC2 during that time, we would pay half as much. But that time is not a lot of time.

**Justin Garrison:** Right.

**Steven Wu:** During the rest of time we pay zero instead.

**Justin Garrison:** Right. And the overhead I was talking about was actually cognitive overhead for using Lambda, right? Because Lambda is harder to do those 10,000 workers than to say "Oh, this one process is gonna do a thing." You could architect the system more simple by saying it's a load balancer in front of EC2 ASG, and S3 in the backend. And it's just like "Oh, it could always run, and there's no overhead for it." But I still come back to this - why wouldn't I as a as a customer use OpenSearch, as a hosted service that is a little more query-friendly than Athena, and has a lot more I guess community around it. I don't have to learn a specific -- there is a specific syntax to query it, but there's enough information on the internet that it's not a very specific... Like, OpenSearch is just a generic search engine for these logs.

**Steven Wu:** Yeah, so I think it kind of comes down to if you are doing that, you're still paying costs. So I don't know if OpenSearch is as popular with the clients we talk to, but a lot of people use things like the ELK stack, with Elastic, and... And a lot of that - it sounds really nice when you see that, because it's like "Oh, if I just run my own Elastic server, or whatever, it's free", right? But it's not actually free, because you still actually pay for the compute, and you still actually pay for the three or four guys who now need to maintain it.

**Justin Garrison:** Or girls.

**Steven Wu:** Yeah, or girls. Sorry. I'm using guys in a gender-neutral sense.

**Justin Garrison:** But it's not, so I'm just I'm just pointing it out. Guys is not gender-neutral, so...

**Steven Wu:** Sure. Sorry, I kind of lost my thought there...

**Justin Garrison:** But it takes time, and it costs money... Like, the most expensive thing in your infrastructure is the people that run it.

**Steven Wu:** Correct.

**Justin Garrison:** Right. And in some cases, we outsource that people that run it to another company, to mostly hide that cost. And we say "Hey, I'm going to pay them more money than I would pay my own people, because I don't want to have to think about it." The cognitive load of "I don't have to manage a team" is great. That's one of the huge benefits of the cloud in general, is just like "I'm going to pay more money, but I have less cognitive load, and my company is actually smaller, and we can do different things, we can focus on different areas, than managing those people that would run the thing for us."

**Steven Wu:** Sure. I'm not sure what to say here other than that, all-in, our product costs about 10 times less than running Elastic yourself. It is both cheaper and less cognitive overhead. I don't want to sound like a marketing track or whatever, but I think one of the upsides of having chosen our architecture is that it -- like, we chose it to cost less. We specifically chose it because there are qualitative differences in how cloud services run, that allow you to build a system that is cheaper and better suited to the problem.

**Justin Garrison:** But that costs less isn't static, right? If I query the system 100 times a day, or 100% of the time a day, it's more expensive, right? These architecture decisions drive direct impact on the cost, right?

**Steven Wu:** I mean, yeah, you could, but nobody does.

**Justin Garrison:** Yet. Nobody does yet. And this is just like, if more people start using it, and there's more information there to be gathered, at some point there's a tipping point when you outgrow Lambda just as a cost model.

**Steven Wu:** I think one important thing here is that the usage pattern of a product like ours is not the same as that of a consumer product. Like, people don't -- if you're a 10-person team of analysts, you don't use the product more and more of your day; your analyst team doesn't grow at the same rate as your company, and so on. Like I said, we work with some very large companies, companies that are worth billions of dollars or more, and we don't notice that those guys have a higher propensity... I mean, they spend more on querying because they have more data, but they don't necessarily have a linearly higher propensity to query because they're a larger company.

**Justin Garrison:** \[36:04\] The size of the company doesn't matter. The value of the information does, right? And as soon as there's valuable information, I want to query it more, and I can automate those queries. As soon as I say "Oh, you know what? I can trigger something based on that data. I'm going to query it every five minutes."

**Autumn Nash:** Yeah, especially because it stops you from having to think about it, and then if something goes wrong, you can then go look at those intervals and compare them, so...

**Justin Garrison:** Right. And that and then I'm going to store that information that I got from queries that I'm going to run every five minutes, because it's there and it's available for me - I'm going to go store that in a time-series database.

**Steven Wu:** Well, I don't know, I don't think I'm here to defend the market use case of a product which exists, but...

**Justin Garrison:** I'm just trying to point out that like market use case is never the actual use usage. The intended reason the product exists - customers will find a way to make it valuable to them. If they say "This thing is valuable", they will use it however they want, and that architecture that you design has impact on what they are able to do and your costs directly.

**Steven Wu:** I completely agree with you. I think you're completely right. I mean, in terms of what if someone just queries nonstop, all day, 24/7 - we've never seen anything even close to that. But if they did - yeah, we'd charge for query. At some point, we have like a threshold, a very generous threshold of free query capacity. And then when you get past that, you pay us -- I don't know the exact number, because part of it's like contract negotiated, but it's like $2 a terabyte, right? Athena costs five, so it is less than Athena, which also has the same property, right?

**Justin Garrison:** Right. But there's always that tipping point of like ELK is cheaper.

**Steven Wu:** That's true.

**Justin Garrison:** Like "Hey, if I want to query this all the time, guess what? Paying the person and running the ELK stack is cheaper." Like, there's never like a flat line of like --

**Steven Wu:** You're right, it just doesn't happen. And I'm pretty confident in saying that.

**Autumn Nash:** How will you keep up keeping that cheaper when the cloud providers are all providing a similar service that they have the means to eventually make it cheaper? You know what I mean? Depending on how big the customer is.

**Steven Wu:** Yeah. Well, they already provide that service. They already provide Athena. There's already Azure Sentinel. These products already exist, and they aren't cheaper. Someday they might be, but I think that is kind of the nature of --

**Autumn Nash:** Yeah, tech in general.

**Steven Wu:** ...building a product. Yeah products get better; our product will get better, their product will get better... Maybe in 10 years we'll be forced off by market monopoly pressure when AWS decides to release exactly our product, but better, like they always do... I think that's just a threat that pretty much every cloud provider has, which is that "Yeah, why doesn't the cloud provider just use their hardware to do your thing, but without your margins?" I think that's very reasonable.

**Justin Garrison:** I don't know, with current trends they're all going to deprecate every service... So I don't think you have to worry about that.

**Steven Wu:** That's true.

**Justin Garrison:** All the services are going away. They're not adding any more right now. So...

**Steven Wu:** That's true. But I think in practice, we have been cheaper than the native cloud provider provided services, and faster, blah, blah, blah. I don't know. I feel weird talking up these properties of the products, I feel like I'm doing a sales thing, and I'm not trying to do a sales thing, but...

**Justin Garrison:** Well, but like every property has a trade-off, right? You chose properties for a very specific use case, for a very specific reason, and those things absolutely are faster and cheaper in that context. And then they are not faster and cheaper in another context. And that is the thing that is always the -- you've got to find the right person that has the context. And that's great. If you find that person, like "We want this, we have this many people overhead that do the thing, then absolutely, this architecture is the thing you would want to build... And here you go, we built it for you as a product. You can just go buy it."

**Steven Wu:** Yeah. I completely agree with you. We actually did a lot of -- before we built, we talked to a lot of people, and we kind of... You know, the standard product development type stuff that we kind of go through the use cases and how people use the product... And we talked to a lot of people \[unintelligible 00:39:46.27\] the funnel, and I think it's pretty much never the case. Like, our trade-offs work for most concrete implementations of security team processes and DevOps team processes that we've encountered. I think it is certainly possible that someone could run a script that \[unintelligible 00:40:04.10\] nonstop, 24/7. We don't really see that that often with something like a Splunk. I mean, I guess you have like online detection rules...

**Justin Garrison:** \[40:15\] And I just want to say, you don't see it yet, right? It's always a -- it's gonna come.

**Steven Wu:** If it does come, I think there are definitely -- if you're automating a query, for instance, there's actually things. So there's this notion of a thing called like an automated detection rule for like XDR type stuff, and basically, the idea is you have some query... So the way that Splunk or like Datadog or those guys implement it is that you have some query, and it runs every five minutes. And it's a query like "Did this thing happen? Did someone change admin permissions on my AWS rules? Or did someone change - whatever? Did we get ingress from like weird IP addresses that we know to be compromised?", stuff like that. And when those find something, they send off an alert, so it's like the whole workflow... And those queries are queries that you run pretty much every five minutes, every minute, whatever... But they are also the same query that runs every five minutes. For that particular use case we actually have a bunch of these -- we have like incremental caches where you can kind of... If you're careful about how you select your aggregations, and how you select their mathematical properties, you can actually build like a cool little rollup tree where you -- you're effectively only running that query over your entire dataset once ever, you just do it incrementally as it comes in. Stuff like dashboards, same thing. You can kind of build this cool, incremental cache of everything, and then you just ask the cache for this range, and it tells you... And there's no query cost involved.

So I think for stuff that isn't ad hoc querying, stuff that isn't freeform exploratory querying, which I think in that model that you're talking about is probably most of that very high-volume automated, like, people doing this query every two minutes on a script type thing, that basically doesn't cost us anything at all, because of that choice of caching. And it is true that all of it is trade-offs. I think we have made really strong, very specific, opinionated trade-offs. I think I said at the beginning, we have a very opinionated cloud architecture. But I think a lot of the gamble of doing this company such as it is is that we're gambling on having made the right trade-offs. And I think that's kind of true for any technical decision. There are trade-offs that you have to make for your problem domain, and you can get way better performance under certain circumstances by making those trade-offs, and not on others.

**Justin Garrison:** When I worked at Amazon, one of my favorite things was there was a emailing list called OpsWins. And anyone could email this email list, and anyone could subscribe to it... And they would describe something that they did on the operations side, that was a win in whatever definition that was for a win. And I loved it, because it was like "We tweaked this portion of a load balancer, and it reduced latency for like 90% of customers." And I was like "That's amazing!" Someone just went through and it's just -- a lot of it was just about like one or two people diving deep for a month or two, and saying "Hey, I need to find this specific use case, or this specific reason that this is happening in our logs. Let me block out a couple sprints, and we're gonna figure it out, and maybe we're gonna get something out of it. Hopefully, we get something out of it", but not always. Like, it doesn't always come up.

But I feel like a lot of companies, especially large companies, don't celebrate the operations side of things and how that impacts the business. And almost every one of these ops wins emails had a dollar amount attached to it, where it said "Hey, we reduced storage by switching on this feature, that was a new thing that a service had, and now we saved a billion dollars every year." And it's just like "Whoa that was cool." Someone just went in and was just like "Well, let me just test this. Let me make sure it can deploy. Okay, it'll go through." And most of them were like roll-ups for like a PM did a thing... And it actually happened six months ago, but it was awesome to see. Every time I'd come through it, I was like "I love the ops wins emails", and I wish more companies had that sort of stuff, to really celebrates how architecture changes and someone diving deep into a problem is like "Oh, that is what we actually want to encourage people to do, to go figure out why that's happening, figure out who it impacts, and then figure out like what we can do to change it."

**Autumn Nash:** \[44:04\] How is your product queried? Is it like a SQL query, or how do you do queries?

**Steven Wu:** We have a -- I guess the closest analog is something like the Splunk query language, or the Elastic, or the Kibana query language, I guess is what they call it... It's not SQL; it is generally less powerful than SQL. It supports filtering, pipelining and aggregation. So you can say "Oh, I want to look at all things that have this word in them", and then I pipe it through like a stats table to like group it by some quantity, and then I take that and sort it by this other quantity. That's like three commands that you can pipe in sequence.

It is not SQL, it is less powerful than SQL. You can't do stuff like joins with it, in particular; I think that's the biggest difference between something like this and SQL. And once again, I think it's like a trade-off. People want something that's close to what they're used to, and a lot of people come here from Splunk, or from ELK, or from Datadog, or similar products, and they want a query language that is familiar to them. So it is technically our own query language, but it's designed to look like Splunk as much as possible.

**Autumn Nash:** Okay.

**Steven Wu:** There's a whole rabbit hole of like we wrote our own parser type stuff, that I think someday would make a cool blog post, but...

**Autumn Nash:** So do they have to learn that language to use your product, basically?

**Steven Wu:** Yeah.

**Autumn Nash:** Okay.

**Steven Wu:** I mean, again, I think we tried to design it like Splunk as much as possible. Yeah, at some level, you do have to learn some properties of the new language, because the system has different properties. The query language is directly an interface to that.

**Autumn Nash:** Okay.

**Justin Garrison:** Cool. Well, Steven, thank you so much for coming on the show and talking to us all about Scanner, and what you do, and how it's architected. That was really cool.

**Steven Wu:** Yeah, thank you. Thanks for having me.

**Autumn Nash:** Yeah, thank you for coming.

**Justin Garrison:** If people want to find you online, where should they reach out?

**Steven Wu:** You can email me. I'm swwu, that's my initials, at Scanner.dev. You can also just go to the website, Scanner.dev. It has -- it probably will explain the product much better than I did.

**Justin Garrison:** Cool. Alright, thank you so much.

**Break**: \[46:00\]

**Justin Garrison:** Thank you so much, Steven, for coming on the show today and talking to us all about the infrastructure and scaling for Scanner. Let's jump into the outro here for what used to be called "How things break", and now this is kind of like a regular occurrence, that things have been breaking... And so I think we just did one of these recently, but we wanted to talk about -- because we talked about CrowdStrike recently... And we're actually going to lean into talking about some of the outages that Azure had in July. And I know this podcast is coming out in August, but looking back a little bit here.

And first of all, I want to say, no shade to the people that run these services, the people that are responsible for them...

**Autumn Nash:** Oh, no. It's hard.

**Justin Garrison:** This is absolutely a complex system, with unknown variables, and we understand that things happen. We also want to say that, at least my opinion, outages are generally like an organizational problem. This is not an individual, a service, or a mishap, like "Oh, who wrote that line of code at CrowdStrike?" Like, it doesn't matter. The organizational processes and protections that were in place allowed it to happen, and that is a different problem than who wrote the line.

**Autumn Nash:** But be real, be real. We are all engineers, and engineer adjacentness here, and we all know that if you keep firing engineers, and you keep saying that AI and all these automated things are going to do our jobs, eventually we keep having these outages and we're all like "Well, what did you think \[unintelligible 00:48:55.10\]

**Justin Garrison:** The year of 2024 seems to have more and more problems... And I don't know if that is generally because -- I mean, obviously, a lot of people have been let go from jobs... And I just saw a stat today that it was like 30,000 people, developers in the gaming industry were recently let go. Bungie had another set of layoffs recently... And it was like a third of all of the engineers in the gaming industry were let go in the last year.

**Autumn Nash:** I think the amount of institutional knowledge that tech has lost with the reshuffling... Like, even if you didn't fire -- I feel like the ones that are still there, we all have survivors guilt, than the people that got laid off, have left. There's so many -- it's not a good... The vibes are off. It feels like everybody's riding the struggle bus. You talk to your friends, and everyone's at a different company, and everyone is just -- the morale is not... It's not great, you know? And I think that the amount of people that have lost their jobs, and...

I mean, there were people that were fired from these big companies, that -- they had so much experience; they had built so many of these services, and had so much institutional knowledge. That one dude from Google, who had like 16 years -- wasn't the guy that did the patent for like search fired from Google? You know what I mean? You can't tell me that like you YOLO fired all these people, and you thought nothing bad was gonna happen.

**Justin Garrison:** At some point, that's like the business decision of "We need to be profitable, or we need to make money, and so these people are really expensive. Let's get rid of them" is wild to me, because --

**Autumn Nash:** That is cool, because the profitability depends on your services being reliable. You know what I mean?

**Justin Garrison:** And a lot of these, I would say centralized services, cloud environments, whatever you want to call them, the companies that have been letting people go - you have to shed that load, because you are reducing your capacity to do things... And for some people, they say "Oh, AI is gonna solve it for us." But in other cases we have to just shed the load, and so they're either deprecating services, or they're deprecating customers. They're getting rid of something to make it easier to operate this stuff, and software doesn't operate itself.

**Autumn Nash:** But it's just wild to me that they were so willing to make this investment into AI, which -- it's not saying that there isn't going to be something good that comes from AI, but it was such an investment at the loss of humans that have been doing the work, and making it profitable for you, you know? And like, okay, you're building software, but so much work goes into maintaining it, into being able to fix the outages... And okay, you've released it. Now how are customers going to use it? And how are we going to break it on accident? You know what I mean? So...

**Justin Garrison:** And the maintenance is why this podcast exists, right? I love talking about the the 90% lifecycle of software.

**Autumn Nash:** That's the hardest part of software. Like, writing it is cool, but what happens when this edge case that you didn't think about comes back to bite you?

**Justin Garrison:** So talking about the Azure outage that happened on July 30th, 2024, they had a denial of service, a DDoS attack at Azure Front Door, which is like their CDN component. So they were having this DDoS... They don't say in the outage how large it was, but they say that there was a DDoS attack.

**Autumn Nash:** \[52:14\] Maybe we should give a little context. So a DDoS attack is a denial of service attack, which I'm sure most people know, which means your service is getting overwhelmed with a bunch of requests, usually.

**Justin Garrison:** And those can happen all different ways, right? You can either have too many connections going in, which is called like a SYN flood, where everyone's like "Hey, open a connection for me", and then it just never closes; you could have just sending too much data... Like, network pipes are only so big; you can always send so much data over, and if everyone sends it to the same endpoint... All these reasons. They don't go into details of what that DDoS was, but they say in the outage that there was latency spikes from a DDoS, and so they had to mitigate that. And this is at the CDN level. This is all where traffic comes from, everything, for all of their services.

**Autumn Nash:** Also, a CDN is a content delivery network, which is usually when you're putting content all around the world... So you can make latency lower for people trying to access your more popular or more accessed content, so it lowers your latency.

**Justin Garrison:** Right. And that is a component of caching, where you just say "We're just going to put more data close to someone", and you have all these little CDN point of presences, POPs all over the world, and hopefully someone's local network will route them in the right place. You have ways of routing people to those CDN locations. But they were getting a DDoS, and it says in the -- and again, I always recommend people go to like the source of these sort of outages. Like, there's a bunch of roundups and people rewriting what Microsoft wrote, but I just go read the original one; and we'll link it in the show notes. But they say "The initial investigation suggests that an error in implementation of our defenses amplified the impact of the attack, rather than mitigate it."

So something, someone, some automated system, whatever it was, created a change in this firewall ruling, or this load shedding setting that said "Okay, let's not accept all those requests", and whatever it was made the problem worse, and then basically brought down Azure for 10 hours.

**Autumn Nash:** Which - a global outage for 10 hours is a long time.

**Justin Garrison:** Yes. And again, a CDN is -- again, this is Azure Front Door, so like everything is hitting this to get to the backend services. The backend services were all probably fine. In many cases, all the backend services.

**Autumn Nash:** But you can't even access them because the CDN's down.

**Justin Garrison:** Right. If you can't get to the service, then it is effectively down... Even though all the backend services teams are like "Ah, my metrics say I'm good."

**Autumn Nash:** Which is wild, because now your CDN that what supposed to lower your latency and make it more highly available is causing your service to now not be available.

**Justin Garrison:** Right. There's always a load balancer or some single point that gets into the rest of the application, and many, many ways that that single point can break. There's always a single point of failure notion in any infrastructure where you're like "I don't want a single point of failure." It's like, well, at some level your DNS might be that single point of failure, or your IP address.

**Autumn Nash:** It's always DNS. But I think this also goes back to the point that you were making earlier during our interview, though... We can always architect things for what we think is going to happen, but sometimes something will surprise you because of something that is used in a way that's different than the way that you architect it thinking of how it's going to go. You architect something, a CDN, hoping it makes it highly available, and then you end up in a problem where it's stopping you from being available. So I think this actually adds greatly to your point that you made earlier.

**Justin Garrison:** Right. And like the Azure Front Door service I guarantee you was architected for handling a DDoS. Absolutely -- like, that is the Front Door service. You have to be able to mitigate something. So you either have something in front of it to load shed... But it does not necessarily always architect for "Hey, we wanted the load shed, and also someone changed a setting that amplified the impact." And not to say that it was the wrong setting. This setting probably was the right setting in a runbook somewhere; that was the perfect thing to do in a different context.

**Autumn Nash:** \[56:08\] Which is another reason why I think automating security things like this without -- like, automation is always going to make things more efficient, but this is why you also need humans, right? Because when something happens, and maybe -- like, this works for 75% of the time. And then the one time it happens and it's not a good thing, you need a human to be like "Oh, crap. We need to go fix this."

**Justin Garrison:** Well, and automation is great until it's automating the wrong thing.

**Autumn Nash:** That's what I'm saying. But it can't make that decision and differentiate that sometimes. Sometimes it can, but I think that we will always need humans and people with the right context... Because even if you had a human and they didn't have the right context, but that's why the institutional knowledge is important. The people that built it, and actually building things and not just having other things build it for you; really being able to have the context you need to fix something... Because you can't rely just solely off of automation.

**Justin Garrison:** Well, and I told you the time that I took down Disney animation for an afternoon, right?

**Autumn Nash:** No, but do tell.

**Justin Garrison:** So it was automation of like there was a Google Chrome patch that was being affected in the wild, and it was like "Hey, we need to update this now across all devices." I'm like "Great, we have automation in place to allow us to update Google Chrome everywhere really quick. No problem. I will run that command, it'll automate it, it'll get it going for us." What I what I failed to remember was that we also had Google Chrome installed on most of our servers, for various reasons. And so when I did the update all of our Google Chrome installations everywhere, it did it thousands and thousands of times, and it made all of these outbound connections to Google, and Google blocked us. And Google said "Hey, you can't make that many connections at a time. We will not allow that from any single IP address." And we were a G Suite customer, which also meant that Gmail was down, and Google Docs were down, and calendar was down, and all of these things. If you were on our ISP, on our outbound connections, if you're connected to the Wi-Fi, or connected to any of the networks, Google did not work for you. And that was an automation piece that I didn't know all the content; like, I forgot that that happened, and I automated my way into taking down the building for a good like three or four hours. During a production time, right? ...which is funny, I think we were working on Ralph Breaks the Internet at the time, and I completely broke the internet for Google...

**Autumn Nash:** Oh, no. You broke the internet.

**Justin Garrison:** I did. Yeah. So for one day we renamed the movie to Justin Broke the Internet. But yeah, and so it was difficult, because that was an outage that happened, that I caused through that automation.

**Autumn Nash:** My kids are gonna think you're even cooler, because now you're Justin that Broke the Internet.

**Justin Garrison:** But it was a really difficult situation that we had to like work with networking teams to start dropping the connections out to Google on individual devices... We were scanning as many servers as we could, we were stopping the downloads that were going... Anyone that had a connection was going through a crawl... But then all these systems had incremental back-offs. So they were all saying "Oh, well, I couldn't connect this time, so I'll try again in five minutes", which would then just block the internet even more. So I know how this works in an automated situation, and that really sucks that Azure was down for that long for this sort of thing.

\[59:18\] I also wanted to talk about the outage they had on July 18th, because that wasn't a global outage, but that was an outage in US Central, which took down -- I think I counted it out, it was like 24 services that were backend services. So the entire region was basically -- it was like the SQL database was down. Virtual machines were down. This was all like fundamental things, including Office 365 and things like that, because there was a storage problem on the backend. And I always want these things to have more details than they have, but also, I understand that you can't share all of the details, as I've written plenty of these...

**Autumn Nash:** You also don't want to teach people how to do it later, you know?

**Justin Garrison:** Right. There's an internal postmortem, and then there's the public-facing, customers can see this postmortem. And that's just how it works. But that was another one that was over -- I think it was four hours? Let's see... Nine o'clock to -- oh, this one goes all the way to 11 the next day. 11pm the next day. But this was also the day before CrowdStrike happened. This was literally the night before CrowdStrike. And they have another postmortem for CrowdStrike affecting their servers as well, but this was specifically -- the storage happened before CrowdStrike rolled out problems. So this was -- Azure went down that evening, and then that night, around 2am or something, CrowdStrike affected the rest of the world. So no one even noticed that all of these services were down for a little while, because the rest of the world broke.

**Autumn Nash:** Yeah, it was already down, so they were like -- nobody had access.

**Justin Garrison:** It was like "You know what? Azure does not matter if my local machine is blue-screening."

**Autumn Nash:** Yeah.

**Justin Garrison:** But yeah, I'm gonna have links to these in the show notes, just because - actually, they don't have a permalink? I don't think they have a permalink to this specific outage. They just have the one page. I'm gonna have to find out if I can put a link to both these in the show notes. But in both cases, it's just like these things are happening at larger scales as we start to centralize more and more stuff. And not saying centralization is always bad, but that architecture of centralization can have a much broader impact.

**Autumn Nash:** Interesting.

**Justin Garrison:** Interesting. That's all you've got.

**Autumn Nash:** I mean, I don't think it's centralization, I think it's -- we've made a lot of interesting business decisions, and now those things are coming home to roost. But we'll see.

**Justin Garrison:** Well, I mean, the business decision of moving to Azure... That is a business decision that has affected people.

**Autumn Nash:** No, I think it is all of things that are going on in tech, in general. I think we are seeing a lot of the same things happening everywhere.

**Justin Garrison:** No, but I mean, if you are a customer, you are tying your availability to the providers that you pick. And their decisions to rearchitect their implementations, or layoff engineers, or move everyone to AI impacts your business, your ability to do things. So these are partners, and you have to make sure that you pick the right partner... But again, their business incentives change, too... And at some point, you have to be able to renegotiate, or at least reevaluate your business decisions from before. And tying these things so tightly to one location and one provider is extremely dangerous, as they are businesses that are making money as well.

**Autumn Nash:** Yeah.

**Justin Garrison:** Alright. Well, thank you so much again, everyone, for listening. And if you want to hear some people on the show, feel free to email us, it is shipit \[at\] Changelog.com, and we will talk to you all again soon.
