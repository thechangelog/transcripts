**Jerod Santo:** So we have Simon here, principal engineer at Shopify. Simon, welcome to the Changelog.

**Simon Eskildsen:** Thank you so much.

**Jerod Santo:** We're happy to have you. You're doing some interesting stuff in the world of learning and advancing as a developer. You've got some really cool napkin math stuff to tell us about, but a lot of us has come out of your experience working at Shopify through crazy amounts of growth. Why don't you tell us your Shopify journey?

**Simon Eskildsen:** Yeah, sure. I joined Shopify in about 2013, and back then we were still up in the ears to 100 or maybe 1,000 requests per second, and now we're flying somewhere around 100,000 or more requests per second. I've been really fortunate to be part of that journey on the infrastructure side, and just seeing us through every level of that, migrating from our own on-prem to the cloud, moving all of our shops between shards, sharding in the first place, running out of multiple regions, architecting from multiple continents, running shops out of multiple regions, and a lot of the foundational architecture that underpins the Shopify that we run today.

And yeah, out of that, I have spent a lot of time having to learn about all of these different things. I don't come from an academic background. I had some catching up to do, which meant trying to read the TCP book the first time; you encounter these kinds of problems...

**Jerod Santo:** Right.

**Simon Eskildsen:** I'm catching up as much as possible, and I think that's a pretty healthy mindset to maintain for as long as possible.

**Jerod Santo:** Yeah. Well, you may have over-compensated, because now you're out there teaching other people these things, which is a cool shift. Shopify is such a success story; it's pretty amazing. Adam, you and I were talking about it the other day, and I said it may be the most valuable company in Canada at this point, or one of the top ones by market cap, and maybe Ruby on Rails' monolith biggest success story in pure capitalistic terms. Just an amazing growth, an amazing company. One that we've been watching for many years, and it's probably been cool to be there on the inside and putting out the fires as it grows.

\[04:08\] One thing that you were a part of, which we aren't gonna talk about too much today, but we're gonna talk about a lot in an upcoming episode, was a recent rewrite or reimplementation of the storefront - no longer a monolith. Do you wanna give us a 30 seconds on that, so we can tease it up for a bigger show later?

**Simon Eskildsen:** Absolutely. So we built a team last year to completely redesign how we do the storefront. That is the serving of the stores that you see when you browse Shopify. We've learned a lot scaling that over the past 15 years or so, and fundamentally it just has some different requirements for how it needs to be running across multiple data centers, how it does caching, and all of these different things. Next time we'll talk much more about all of these details and what we did there. It's still Ruby, but it's now extracted out of the main monolith that still powers the APIs and all the business logic.

**Jerod Santo:** That had to be it.

**Adam Stacoviak:** You seem like a learn-by-doing kind of person. It's like, you've gotta do something for many years, and technologies progress over time, but then developers change the way they come into the market, being less experienced or more experienced... And now being in a position where you've gotta do what you're doing now, with learning by doing. You seem very much like that, where you've been at Shopify a very long time, and it's part of how you think, it seems... Versus like -- what I understand is you didn't go to college, and you went to Shopify and you've very much progressed there; so as Jerod said, you're leading in many ways. So rather than having that academic background, you kind of have this background of being in the trenches, so to speak... Having to read the book to get through it, rather than having taken the course to get your CS degree, for example.

**Simon Eskildsen:** Yeah. And I think what was really helpful for me was that when I was in high school, I got exposed to this world of competitive programming, where every nation essentially has a national team. And because Denmark, where I grew up, is a very small country, it's not super-difficult to make it to the national team, compared to somewhere like the United States. But that really got me exposed to another level of engineering, because before that I had mostly been exposed to JavaScript and Ruby on Rails and PHP... But seeing suddenly through these algorithms and how something like Google might work by understanding a bit more of the computer science, it was a fascinating journey. And then yeah, joining Shopify and getting to work on the systems that I'd seen and read about throughout high school was just a dream come true.

**Adam Stacoviak:** Competitive programming... Jerod, have you heard of that before? This is a first...

**Jerod Santo:** I've heard of it. I've never participated. I'd be afraid to do so. Tell us about it.

**Simon Eskildsen:** Yeah, sure. Essentially, it's a bit like an exam room. So you sit down, five hours, you have a computer, and you have an editor, and you have a C++ compiler, and that's pretty much it. On your table, you will find usually about three problems. The problems range a lot in what they might be. A problem, for example, that I encountered at one point was that you were told that on your machine there are these five directories. One directory has images that are of impressionist paintings. This one has images that are cubism, and so on. So you had all these directories. Then you had to write your own program, that with this little training dataset would be able to take an image that it had never seen before and classify it into one of these five categories, like "This is an impressionist painting. This is a cubist painting", and so on. So that might be a task, which is a very abstract one.

The way that you might solve that is that you might look at what is the average color difference between the pixels, because you can see that that is something that changes a lot based on the different kinds of paintings. If you have something like cubism, where you have these big areas that are yellow, and green, and so on, the average color difference is a lot smaller than something more impressionistic.

So that's more of a free problem, a kind of freeform, ad-hoc problem... But they might also be a lot more algorithmic in nature. One for example that I remember is that if you imagine a grid of intersections, imagine a Manhattan sort of situation where you have almost a perfect grid, and you then know that at each intersection there's a coffee shop, and each coffee shop has a Wi-Fi signal that has a certain radius, and it also has a certain bandwidth, and then it says "Assuming that you can connect to multiple Wi-Fi's at the same time and download on all of them, what is the best intersection for you to be in to get maximum bandwidth?" That's a more algorithmic problem.

\[08:28\] So then what you would do is you would write a solution to these, you upload your C++ program to what's called a judge, which is an internal -- the only thing you have access to, something running on the internal network... And then you'd get back a score, somewhere between 1 and 100 points. You usually get 100 points if you've solved the problem to perfection, but also very fast. So often you can solve these problems with a really simple, but very slow algorithm, and then you can get some points, let's say 30 points. But then if you come up with a much faster algorithm, you might be able to get up to 100 points. So you just sit there for five grueling hours and try to work through these problems, and trying to balance "Should I spend more time on this problem? Do I have it? Do I not have it?" and it's definitely some of the tougher hours in my life, sitting in these exam rooms... But also great fun.

**Adam Stacoviak:** This reminds me of Survivor, or Naked and Afraid for coders.

**Jerod Santo:** \[laughs\] I hope you weren't naked.

**Adam Stacoviak:** It's like, you've got the essentials, you're in the wilderness... You know, "the wilderness." Get out.

**Jerod Santo:** Yeah, exactly. Like an escape room.

**Adam Stacoviak:** It's cool.

**Jerod Santo:** So compare the pressure, the stress, the sweat dripping down your brow of competitive programming versus a typical Black Thursday at Shopify, where you're at peak requests per second, and maybe a server goes down, or something inevitably goes wrong... Is that equal amounts of stress, or is that way more stress because it's other people's money? How do those compare?

**Simon Eskildsen:** Well, it's very different, because on Black Friday...

**Jerod Santo:** Did I say Black Thursday?

**Adam Stacoviak:** You said Black Thursday.

**Simon Eskildsen:** Yeah, it's all good... Because the Thursday is when you make the final changes, right? And we have a very elaborate plan on what risks you can take several weeks in. We're not gonna upgrade a MySQL version the week of Black Friday. In fact, we're probably not even gonna do that in November because of the things that can surface.

**Jerod Santo:** Batten down the hatches and hold on for... Yeah.

**Simon Eskildsen:** Pretty much.

**Adam Stacoviak:** Keep things the same. Don't change things... Much.

**Simon Eskildsen:** But it's also a really good internal deadline, in October, to make sure the things get in... Because suddenly, everything multiplies. Everything multiples, and it's really the final exam. I think it's more the kind of exam where you've built a lot, and now it's a bit out of your hands on Black Friday. You can respond to things, but there's no more building allowed. So it's a very different kind of pressure, where on Black Friday you have to sit there and monitor and make sure everything's fine. We sit in this long room -- well, we used to, before we all went remote... But we would all sit in this room and there's monitors all the way around, showing our dashboards with how all the systems are performing. We'd just sit there all day and explicitly do not try to do anything hard, because if something does come up, we all need to have maximum energy. We have an LTE router there in case something goes wrong, and we sit there and monitor, and we have teams doing that around that time.

Sometimes small things will happen and we'll see a little pimple in one of the graphs, and I'll look in and make sure everything is okay... But it's a different kind of pressure, because in the competitive contest you sit there and all of your training has come up to that point, and you cannot learn any more algorithms, no more data structures. You have to perform in that very moment. And Black Friday is a little bit the same, but...

**Jerod Santo:** It's just a different--

**Simon Eskildsen:** You have to sit back a little bit and just trust that you've done the work required up to then.

**Adam Stacoviak:** Yeah. How all this changed then with being remote? What are your anticipations for November coming up, and the way the world is now in terms of being distributed, and not in the same room?

**Simon Eskildsen:** \[11:49\] Well, the thing is that Covid was an unexpected Black Friday already. A lot of people started shopping online very rapidly, so the traffic already did go up a lot... So I think we've been prepared because of that. And what Black Friday is gonna look like this year - who knows? Maybe it's gonna look a lot smaller than previous years, because the steady state has gone up so much. Maybe it's gonna be a lot bigger, for opposite reasons. It's just very hard to predict, but we're of course preparing for the worst... Or the best, depending on who you ask. \[laughs\]

**Jerod Santo:** Right. So you've come up with a lot of different engineered approaches, tips and tricks and weird solutions... Share maybe one or two of your exploits. Not exploits like zero days, but the things you've done at Shopify over the years. You've mentioned in the pre-show you're doing some stuff with MySQL... When you have systems at scale, you have to do things that other engineers don't have to think about, because you hit up against the edges of certain technologies, and surely, you've done that over the years.

**Simon Eskildsen:** Yeah. I think maybe two that come to mind through history here are - one would be probably the biggest project, or the biggest project that I did the earliest was our podding project. Essentially, we've done sharding, so essentially taking our database and then splitting it into multiple. That was done around the same time I joined, and not by me, but by other teams... But we wanted to extend that even further, so that we could have essentially these groups of shops that live together and are isolated together, and those shops should be able to run in multiple data centers... Because before that, we would have one data center, all of the shops would be active in that data center. If something went horribly wrong, we would fail all of them over to the other data center. But we wanted to isolate these shops in a way where we could run them out of multiple data centers at the same time. That was a lot of engineering effort to make sure that there's nothing relying on the fact that everything is in one data center at the time. So that was one of the biggest projects that I did a few years ago, with a really good team.

This year, one of the things that I'm most excited about that we worked on was that a lot of my focus has been around capacity planning and resiliency, so essentially finding out that when a system becomes slow, how do you make sure that it doesn't jam up the entire system? It's a lot worse when a database is slow than if it's down, because it can clog up the systems and cause queues in all these different places, and cause much more cascading failures.

And one of the things that we've had great success with here is this technique called load shedding. The idea behind load shedding is essentially that when a system is overloaded or close to be overloaded, you wanna start prioritizing what type of traffic that you okay, and that you send through to the system. So if we have a store that is having a lot of malicious traffic or some kind of sophisticated DDOS, we wanna make sure that we start to drop that traffic before we start to drop the traffic at other merchants, to protect the platform.

We've done a lot of work in that, and we've done a lot of work at that at the edge, so that the load balancer can prioritize traffic, to make sure that our merchants have as much uptime as possible... But we wanted to go even further and start providing that at the database level.

One of the things that to me is very disappointing about the database realm today is that a lot of companies are SaaS companies; they're multi-tenant companies, and they run all these tenancies on one or a few databases. But one of these tenants might have a disproportionate impact on that database. They might have an API client that is doing a lot more requests than anyone else. Or they might have a customer that has a million orders because of some peculiarity in the way that they work. So you have all of this cardinality and all of this uniqueness to the merchants, or your customer... And that's not just a Shopify problem, that's a SaaS problem. Because what you get with SaaS is that you get these cost efficiencies of running on the same infrastructure, but I don't think the infrastructure has really caught up to that.

In a database today - you don't create a schema for every database. MySQL would scream at you if you tried to do that when you have enough tenants, because it's just not made for that. So it doesn't really give you any primitives to be able to do that. And by default, the way you design your database is really not set up for multi-tenancy at all. So to go back maybe to this example of a single tenant overwhelming the system, MySQL or Postgres or any -- there's no database that has a good mechanism for prioritizing traffic between these merchants.

\[15:59\] So what we have been looking at - we've found out that in the MySQL protocol you can send an arbitrary string back with a query. So we thought "What if along with the query results" - this could be a bunch of customers, a bunch of orders, whatever it might be, "what if we also sent back to the application how many resources that query took?" How many nanoseconds on the CPU? How much i/o time? How much memory was loaded into the page cache in MySQL? How expensive was this query? The kinds of things that you would see in a slow query log.

So you might think "Why is that useful that you're gonna look at that information?" Well, imagine an API throttle that is not some arbitrary number taken out of a hat, of "You can do 100 requests per second", but rather the API throttle was actually based on how the database is doing and how heavy the queries that your API calls are causing actually are?

Doing API throttling with something like GraphQL on an external API is incredibly difficult to do correctly, and you're almost always gonna either underestimate the query complexity or over-estimate it. But if we build systems that have multi-tenancy and databases that have multi-tenancy built in to that caliber, where they can feed it back to API throttling, that helps a lot.

You can then also feed it to your load shedding mechanism, so you can see "Oh, this tenant is being really bad at the database, even though they're only doing very few queries." So I think that's a really important thing for more databases to adopt, and we've been working on a patch to MySQL to expose this.

**Jerod Santo:** That's interesting. Do you have any observability problems, or was it Heisenberg's principle, where by the actual observing of the slow queries, if the response of like "Here is the metrics around this query" comes back with the query, are you not adding load to the already slow query as well? Is it just meaningless?

**Simon Eskildsen:** Not really. In the benchmarks we looked at, the overhead is maybe 1% or 2%. It's really not bad at all, and that's a very constant factor. You're doing a little bit of bookkeeping to see how much time that thread in MySQL is spending on CPU, but you're not adding anything significant. It's usually just one context switch.

**Jerod Santo:** So that's the kind of thing that has to happen upstream though... So are you running a fork of MySQL, or is this still experimental phase, or how does that shake out?

**Simon Eskildsen:** Yeah, we're maintaining an internal fork. This is not in production on all the shards yet. There's a lot that you have to do in due diligence before you roll out your own patch with a bunch of C. But this is something that we're starting to roll out more heavily. And then we want not just to expose this information to upstream places so that we can do data analysis on it in the warehouse, and we can do the API throttling based on it, but now we can also build a load shedder inside of MySQL to prioritize traffic. So it chooses the queries that are the most valuable, rather than just the ones that are the most of to overwhelm the system.

**Break:** \[18:40\]

**Jerod Santo:** Simon, we talked about how you came into Shopify, no college degree; definitely education, but needing to learn a lot on the go... And you were so intentional and disciplined around this. You came up with different methodologies for learning, and you built that into a system. In fact, the first time that we came across you it was on the super-organizer sub-stack. There's a really nice article out there called "How to make yourself into a learning machine", which is all about you and the system that you came up with.

Out of that comes a lot of stuff, but most notably and most recently you have this idea of back of the napkin math, or quick math for understanding systems from first principles, which you're out there talking about... It's really interesting, and it allows people to really quickly and simply - perhaps simply; we'll talk about that - figure out a thing about a system, like how it should be performing, or how much it should cost, or how much throughput this should have, without having to say "I'll get back to you" or spend six hours crunching numbers.

So maybe start by telling us about your desire to learn in this intentional way that you're learning, and all the stuff that you're learning... I mean, you're reading books, and you're basically making sure you remember what you read as to simplify it, but there's a lot of interesting things in the details, and then how napkin math came into the equation.

**Simon Eskildsen:** Yeah, sure. So it's funny that we actually opened a bit with competitive programming unintentionally, because that's where these practices come from. When you're doing competitive programming, a lot of your time is spent trying to -- implementing a solution during a competition, you know it's gonna take you probably about 30 minutes to an hour, depending on the complexity of it. There's a lot of off by ones, there's not a lot of help from an editor or a linter or anything like that... So you really have to know how well your program is gonna perform beforehand, how fast is it gonna be and how many points is that gonna grant you.

\[22:01\] And fortunately, during these competitions -- it's a very controlled environment, so you know that if you only have to see n1 (like an O(N) algorithm) then you're probably gonna perform pretty well. If the input is 10,000 and you have an n2 (n square) algorithm, you're starting to get in trouble for doing something in less than a second. So there, the napkin math was really easy, and it was very encouraged. Anything you will read about competitive programming is gonna talk a lot about this strategizing of how much that's gonna create.

I kind of left that behind a little bit when I went into Shopify. There wasn't really a lot of where we would need that. There's not a lot of algorithms in day-to-day programming, for most programmers. But over time, as more and more of my time has been spent reviewing how systems are gonna perform, and doing tech reviews, and designing systems more so than implementing parts of them, I basically took up this practice again. You might find yourself in a meeting, and you have a conversation with the other people in the meeting, and someone says "Well, maybe we could do this", and someone else says "Well, that's probably too slow." And then someone else said "Well, why don't we try it, and then we'll meet in a week or two and see how it's doing." And then you go off from the meeting, and that person works on that for a week or two, you come back into the meeting room, and then the person comes back and says "Oh, it was too slow." And the person advocating for it in the first place says "What? You implemented it wrong. I'll come help you. Give me a week or two and then we'll go back to it."

You can see how this story unfolds... You spend a month or two going back and forth on this. But I think with a little bit of practice you can estimate the performance of systems ahead of time, and you can start to develop some expectations about how the system should perform. Is it reasonable to continue to have this written in Ruby or Python, instead of C++? Is it reasonable to use this database for this kind of operation? Can we build this on top of MySQL, or do we fundamentally need a different data structure?

I very firmly believe that you should be developing your understanding from the bottom up. For example, right now I'm working on search. And I don't know anything about search, but the first thing I do is I go start to learn how an inverted index works; how would I implement that, how does Lucene implement it? How do you do a top k, like get the top k best documents for a query, what does that look like? How does it do that efficiently, how is it laid out on disk? What heuristics does it use? And then build up from there. Because then, my question is not "Oh, does Elasticsearch provide an API for this?" I think about - hey, fundamentally, can an inverted index perform this operation? What would it look like? How long would it take? How would it do in MySQL compared to here? Oh, an inverted index is not just good at doing full-text search, it's also good at just merging arbitrary sets, which then leads you to find other applications.

So that's something that I've found really valuable - you can now go into the meeting that I've described before and be like "Hey, hang on... Let's draw these scenarios and then do some back of the envelope calculations."

An example might be that someone might say "Scanning a gig of memory on every single request? That's way too slow. There's no way we can do that." But then what you see is that if you sit down and you write a program in C, you allocate a bunch of memory, and then you go through it and maybe add out the numbers so the optimizers doesn't optimize it out - you see that you can actually read a gig of memory in about a hundred milliseconds. So maybe that's not so crazy, if you can also do a little bit of caching, right? So suddenly, these things that weren't even solutions before become solutions, become plausible.

My favorite thing about this is that I run this newsletter called The Napkin Math Newsletter. If you google "napkin math newsletter simon", you should find it. Essentially, this is my monthly exercise in napkin math. So I post myself these problems... A problem that I might post to myself is "How many transactions can a MySQL fundamentally do every single second? Is it 1,000? Is it 10,000?" And so I sat down and tried to construct a simple model of how does MySQL apply a transaction. I think about it from the bottom up.

\[26:03\] Then it's like, "Okay, you have to parse the SQL query. That's probably pretty fast. Then you have to figure out what's in this insert - there's a bunch of data, also pretty fast... So how do we commit this so it's durable? There's this whole asset guarantee that we have to hold up, that if the server shuts down, it either needs to be committed or not. So what does it need to do to do that? Well, it needs to take that transaction, that insert, and put it at the end of a file, and then it needs to tell the filesystem "Hey, commit this, send it to the hard drive, and don't tell me that it's committed before you're sure that it's committed to the hard drive."

**Jerod Santo:** Right. Do what you said you're gonna do... Yeah, exactly.

**Simon Eskildsen:** Exactly. And that operation is called fsync. So then the hypothesis forms, the napkin hypothesis forms, that - well, the number of transactions you should be able to do in MySQL every single second must be equal to how many fsyncs you can do per second... Unless there's a bottleneck somewhere else.

**Jerod Santo:** Because that is the biggest number in a single transaction, right? So you whittle it down to "What does one look like?" and then you add up whatever the time is for one; in this case, fsync outweighs every other thing, which is pretty much it rounds to zero... So that's why you say the number of fsyncs is equal to the amount of time, because it's just massively larger than any other time that there is.

You take that, apply it to an HTTP request, and you say, "Well, the network time is massively bigger than any other thing", just throwing that out there. So you're figuring out what it is for one, and in this case it happens to be fsync is pretty much what matters.

**Simon Eskildsen:** Exactly. So yeah, you look at the numbers, you're like "How long does it take to send the query to the database?" Well, probably a couple hundred microseconds. How long does it take to parse the query? Well, that's a couple hundred bytes; that's less than five nanoseconds. I'm just throwing out some numbers here, but all of these numbers can be found on github.com/sirupsen/napkin-math... And then you see that "Oh, there's an fsync operation here, fsync is benchmarked at about one millisecond." In the whole scheme of things, that's actually a fairly long time. And that seems to be the bottleneck for MySQL, because the network and so on is typically not the bottleneck. So yeah, you take one millisecond and you divide it into a second, and you see, "Okay, that's gotta be 1,000 transactions a second", right?

And so what I did for this edition of the napkin math newsletter where I investigated this was that I went and I actually tried to do as many transactions per second as I could. And I've found that I could do about five, to six, to seven thousand transactions per second. That's way higher than the thousand per second that I'd estimated from the fsync.

**Jerod Santo:** So you screwed it up, man...

**Simon Eskildsen:** So now we have what I call the first principle gap, where we constructed a simple bottom-up understanding of how the system works, and we have a real result, and there's a gap between them. They don't line up. Sometimes, if it's like 1,200 and 1,000 it's probably fine; it's rounding errors. But this is a significant enough gap that there's something there.

**Jerod Santo:** MySQL is probably cheating somewhere.

**Simon Eskildsen:** Yeah. My understanding of this system must be wrong.

**Jerod Santo:** Yeah.

**Simon Eskildsen:** And as it turns out, it was. So I started looking into it, I wrote some BPF probes to try to figure out what MySQL was doing and reading some of the source code, and some blog posts... And what it turns out that MySQL is that it does batching. If you have five transactions that come in in the same millisecond, it's gonna apply them as part of the same fsync. So instead of doing an fsync for every single transaction, it's better that it tries to group those commits together, and that's literally what's it's called - a group commit. And there's lots of examples of these kinds of discrepancies.

An example from another context that I really like was when Elon Musk wanted to build SpaceX, he went to -- I think he went to the Russians and he's like "How much does this rocket cost?" They're like 120 million. He's like "That's ridiculous." And then he multiplies aluminum costs and titanium costs and so on, like probably ten tons of this and 100 tons of this, and he multiplies it with the spot prices on the London Metal Exchange, and says "Okay, well all the materials for a rocket cost seven million. So that difference, that 113 million..."

**Jerod Santo:** Yeah, what is that? What's in there?

**Simon Eskildsen:** "...between the raw cost - that's inefficiencies, right? We should be able to do better." And in fact, he was able to do better.

**Jerod Santo:** \[30:09\] Was he right about that?

**Simon Eskildsen:** Yeah, he was right.

**Jerod Santo:** Gosh. That's smart.

**Adam Stacoviak:** Well, that's what happens when we assume though, right? You mentioned this --

**Jerod Santo:** You can never do that.

**Adam Stacoviak:** ...this sort of like root cause, understanding of a system. You assumed that one MySQL write was equal to one fsync. At least that's my understanding of what you're saying here. So you went into this problem with an assumption that was incorrect, and once you learned more, which is good for a developer to learn more about a system, you can then have more understanding of it and now go beyond just simply this limitation and start to understand that gap, as you mentioned, this first principle gap.

**Simon Eskildsen:** Yeah. And this was an example where my understanding didn't line up, but oftentimes the napkin result is much better than the real-world result. Something I was doing in a recent newsletter was that I was trying to figure out how fast we could serve a simple free text query... And Lucene, which is kind of the standard for doing free text searches and inverted indexes - Lucene is about 20 times slower than my napkin math for this. So I reached out to one of the maintainers and I'm like "Can you explain this? Is there an opportunity here to optimize Lucene, or is my understanding off?" And I've found both scenarios, where - well, there's something we can optimize in the system, or there's something wrong with my understanding of it. But typically, it's my understanding that's wrong, but sometimes there's a very real inefficiency... Like, someone has just written the code incorrectly, or it's not written in an optimum way.

**Adam Stacoviak:** But going back to your original example here, you mentioned the meeting... It sounded like you were kind of battling against this inefficiency of time. You'd mentioned roughly a month being wasted, or at least exploratory to discover this... Whereas if you took - I don't know how much time it takes you to do this research for these back of the napkin math scenarios, but in this case, if rather than you spent at least those two engineers' time, writing, investigating, arguing, taking lunches, whatever it took to come to this understanding of this system, how much the efficiency or the inefficiency is that time, versus the time it takes to investigate and do some sort of napkin math example to have an estimation, I suppose, of how it might perform.

**Simon Eskildsen:** Yeah. Well, the napkin math can often be done in a few minutes, right? Usually, the bottleneck is not doing the napkin math, the bottleneck is understanding the system enough that you can model it out in napkin math. So if we're trying to come up with a more concrete, it might be something like -- let's say for example that we have a Redis in production, and the production team that runs this Redis instance says "Okay, we've hit the max throughput; this Redis is doing 10,000 requests per second, and we need to shard Redis." And sharding Redis - that's a big undertaking; now we have to change all the application code to be on multiple Redises. If you're doing anything that does something on multiple keys, you have to make sure they're on the same Redis. It's a big undertaking. Now these developers have to spend months and months sharding this Redis.

Well, the napkin math person, the annoying person in the meeting with the napkin math hat on might say "Hang on... 10,000 requests per second? That's nothing. Machines are fast." And they might say "Okay, well reading about 64 bytes of memory takes about 5 nanoseconds, right? If you divide these things together, theoretically you should be able to do hundreds of thousands of requests per second per Redis instance." So what's going on here? Why are they reporting 10,000 requests per second, when the theoretical upper bound is hundreds of thousands of requests per second. Again, here's the discrepancy - is it my understanding of the system that's wrong? Is Redis doing a lot more than just reading memory and serving it over the network? Or is there an opportunity here? Is there something that's wrong with the system?

\[33:54\] So in this case of Redis, something that I've seen before is that Redis will get a lot slower if you have a lot of connections to it. So if you have a language that's not particularly fast, and it's spending a lot of time reading through Redis, you might have thousands of servers that are connecting to that Redis, causing tens of thousands of connections. Now Redis is not spending all of its time serving all of these queries, it's spending a lot of time just like an epoll call basically figuring out which connection is active now.

So then you might find "Oh, maybe instead of doing all of this sharding effort, we could put a proxy in front of Redis, like Envoy or something else, to reduce the number of connections on Redis, and suddenly we don't have to shard it. We just have to put a proxy there." And these developers might have just saved 3-4 months of sharding work, and all of the risks that taking something like that on entails, right? Like, now you have these keys on different servers, and you're almost certainly gonna mess that up. So that might be an example where napkin math really helps guide your decisions, because it just questions - is this really the maximum throughput?

**Jerod Santo:** Well, you've done a lot of people a service by putting the numbers out there on that repo that you referenced. You have things like the latency in the throughput of system calls, hashing, context switching, TCP echo service... That's where I'd probably get stuck, because I would understand the system to a certain degree from first principles. I do wanna ask where you start - we'll get back to that. Once I have that understanding, I'm like "I don't know how long this thing generally takes", and probably these are like a google or two away, but you can always find the one result that misleads you completely and ruins your napkin math... So it's pretty cool; if people wanna do this, we'll link out to that repo where a lot of these numbers are out there. There's also a lot of question marks, like how long does a mutex write take...

**Simon Eskildsen:** Please contribute...

**Jerod Santo:** ...so there's some places to contribute there.

**Adam Stacoviak:** To contribute, yeah...

**Jerod Santo:** But let's go back to that very first example... Maybe the search example. So you were just like "I'm gonna go read about these indexes and how they work." Well, how did you know that search works that way? How did you know that that's the place to start? Because you've gotta find the bottom to build up from there, and sometimes that can be a big effort as well, just knowing "Where do I look?"

**Simon Eskildsen:** It's a really good question.

**Adam Stacoviak:** It's also similar to yak shaving.

**Jerod Santo:** Sort of. It can be.

**Adam Stacoviak:** Right? I mean, you can really yak shave on this kind of investigation.

**Jerod Santo:** Right. Instead of using Lucene, you built your own Lucene in the process... Yeah, exactly. But yeah, how do you know where to start?

**Simon Eskildsen:** Yeah, I think one thing that I definitely just wanna point out before we go further is that this napkin math is not my idea; this is not an original idea at all.

**Jerod Santo:** Sure.

**Simon Eskildsen:** People have been doing this since the beginning of time.

**Jerod Santo:** Oh, yeah. This is how we find out if a business is a good idea, right? We're sitting in a diner, we're writing on a... "If I sell this many widgets for this price, am I gonna make money or not?" For sure.

**Simon Eskildsen:** Exactly. And in the computer science realm, Jeff Dean, who's the legend engineer at Google, who sat behind a lot of the engineering that a lot of us build on top of - I think he had a slideshow where he sort of mentioned it as like "Oh, by the way, this is something that you might wanna do", and then posted some numbers that have been going around. I decided to create my own one, because it's fun, sitting there and disassembling things to make sure that it's as fast as it can get, and writing the Rust program to do that... But also because I was missing more than just the latency. I wanted the throughput, like how much can you process in a millisecond? How long does it take to process a gigabyte?

So to go back to your question of "How do you develop this first principle understanding?" I think in a lot of cases you can ask an expert. A lot of places might have a -- for example, if you're modeling something like a MySQL, you're gonna have in a lot of cases, at least at larger companies, some DBA who can tell you how that BTREE is laid out on disk, and that's gonna be a really enlightening conversation for you, because you can't do the napkin math unless you understand the system.

So for something like an inverted index, you can read about how an inverted index works. There's a book on Lucene called "Lucene in action", and I essentially just started reading that book. And then you sort of develop just a stronger and stronger model of how this works, you read the -- there's some documentation for Lucene and how it's implemented... And then you start seeing, "Okay, well it's sort of implemented like this", and so if you need to find a term that is mentioned in a million documents, and you also wanna check that against another term that's also in a million documents - well, then you probably have to read one million documents, plus one million document IDs, each one of those identifiers is like (let's say) 64 bits, so now you have 2,064,000 integers, and then you can roughly figure out how long is that gonna take to read, and join those two together, doing a search across both of them... And then you also get into things like "Oh, it's actually possible to read faster than the 64-bit integers", because you learn randomly that Lucene actually does really good compression, and in a lot of cases can get these down to about 8 bits per document ID stored.

\[38:33\] This is counter-intuitive to a lot of people, that reading compressed data in a lot of cases is actually faster than reading uncompressed data, because your machine is bottlenecked by the memory bandwidth that you can get... So between you getting pages from memory, you have a lot of CPU cycles where you're not doing anything. So if you can get more in each memory page and then decompress it, uncompress it in the spare cycles until you get the next piece of memory, you can often read faster than otherwise. But of course, this gets into the nuances of like -- now we're beyond napkin math; now we're no longer concerned about just getting this right within an order of magnitude, now we're really trying to squeeze this out... But yeah, essentially, you just have to start reading the literature, which is usually a good practice, I think.

But yeah, you can end up in a yak shave. This whole yak shave on reading a paper comparing different compression techniques for storing integers in something like an inverted index - well, that's probably a yak shave that I didn't need to take, but it turned out to be really interesting.

**Jerod Santo:** Yeah, there's a nice side effect of knowledge. You're getting the knowledge as a side effect... Because there's two ways of going about it that I see. You're tasked with this thing - let's evaluate what search solution we're gonna do; whether we write our own, use Lucene, whatever it is. Well, the first thing we'll try to do oftentimes is "Well, how long would it take for me just to try it?" A feasibility kind of a spike. I know that in your case with the meeting you have a month lag time, because you've got lunches, and stuff... Apparently, they're going to lunches a lot, Adam... But you know, maybe I can do that in two--

**Adam Stacoviak:** Well, he mentioned two weeks each, and I've figured they would do lunches, and talks, and...

**Jerod Santo:** I know. They're gonna have to. What are these developers doing?!

**Adam Stacoviak:** Walks, ideations...

**Simon Eskildsen:** Vacations, long weekends, time at the cottage...

**Jerod Santo:** Yeah, exactly. So I don't know what they're doing all that time.

**Adam Stacoviak:** That's right.

**Jerod Santo:** But sometimes you can spike out a thing in a couple hours and get your answer... You have this answer of "Is this feasible? Is this a good idea?", but you don't necessarily have the side effect of "I still don't know how it works. I just know that it worked out in the math." But the napkin math way of going about it - if you don't understand the system's principles, you can't really just grab a napkin and get your numbers. You've gotta go get the knowledge... And maybe that takes two hours and then you've got a wash, but you ended up with "Now I understand how search works."

**Simon Eskildsen:** If you can't do the napkin math, it's probably also too early to go and actually implement the system. I call this "programming through the wall", when you just keep writing code, and it's like "Oh, I'm almost there", and then you just write code a little bit harder... When in a lot of cases you just wanna step back and think about the system and learn a little bit more about it.

But I don't mean to say here that all tech problems can be solved by just sitting with a piece of paper and a pen and doing all of this. In a lot of cases you just need more information from actually writing some code, and you can often get stuck in a rut of just analysis paralysis... But I think that napkin math plays a bigger role - and could play a bigger role - than it does now for a lot of projects.

**Jerod Santo:** Right. It's a tool for your toolbox.

**Adam Stacoviak:** What it seems like is you're encouraging this exploration though, so that you don't go and waste the two weeks to go and implement an example, and then two more on the argument, in that scenario in particular. You're encouraging one other option to take, rather than a Redis rewrite that might take months and months and months on an assumption, when you could have just put Envoy in front of it and proxy it and solve the problem... To encourage that exploration I think is what's kind of key here.

Knowing more about the system is always gonna be a good thing. It may be a yak shave in some cases, or it may not be, but it's gonna deepen your understanding, and you're encouraging exploration.

**Simon Eskildsen:** Totally. And that's also how I use the newsletter. There are these problems that are ruminating in my mind, that I'm very interested in. Recently, I was interested in "How do you synchronize data really efficiently between a mobile client and a server? How do you do that really, really well?"

\[42:17\] So I just decided that I was gonna make a napkin math problem about it, and then just started thinking about "How could this work?" and then diving down, and adding complexity as I've found out that the simplest solutions wouldn't work. And that exercise I think is really valuable, but it certainly takes time.

**Jerod Santo:** So the way the newsletter works is you send out the problem, and then you follow up with the math solution? Or do you send it all out at once? Is it interactive? Do I get a chance to do my own math and then we reconvene with your answers, or how does that work?

**Simon Eskildsen:** Yeah, that's what I did for the -- I've been writing the newsletter for about a year now, and for the first maybe nine or so I did exactly that... I sent out "Hey, here's the problem, here's the scenario. Your co-worker is saying the Redis is slow. Is it really slow? What's the theoretical max throughput etc." But what I've found was that a lot of people just didn't do it.

**Jerod Santo:** They just wanted the answer.

**Simon Eskildsen:** There were a couple of signals that just said that people just didn't do it... So people read it like a blog post, but where the context was a month delayed. So I've switched format now, to just make it more of an article... But I really hope that people are doing this behind the scenes.

And something that I also didn't mention, but something where napkin math is incredibly useful is financial estimates. How much money is it gonna take to store all of this data? How much money is it gonna take to run this streaming process job all the time? How much extra money is it gonna take to run another 50 Redises? And I have those numbers in the napkin math GitHub repository as well, which just kind of rounds it to numbers that are easy to do some math with.

**Break:** \[43:40\]

**Jerod Santo:** Alright, Simon, so say that somebody is sold on the idea of adding this tool to their belt of tools they can reach for when it's time to solve a problem, or do a feasibility research, and then like "Let's just do some quick napkin math." But I've never done this before in the context of systems; maybe you've done it with your budget, or some expenses, or a business idea, but I haven't done it well, and I don't really trust my ability to come up with an answer that I'm gonna have much confidence in. You have some techniques that you apply, and some tips for getting started. Do you wanna walk us through those?

**Simon Eskildsen:** \[45:47\] Yeah, absolutely. These are in the GitHub repo as well. The first one is to not over-complicate it. We had this example before of a Redis instance, and what are the things that actually matter... Let's take a database query instead. When you're committing a database query to disk, the latency that's going to matter is committing the query to disk. Parsing the SQL statement is not really gonna matter. Maybe you add on a couple hundred nanoseconds, but in the grand scheme of things it's just not gonna matter. So just don't put those things in there, and just focus on the biggest, slowest bottlenecks in the system that you're trying to model. So that would be the first thing, and my rule of thumb is that if you have more than six assumptions, like more than six additions in your napkin math, you probably need to simplify things a little bit. That's usually a bad sign.

The other thing too is when I do napkin math I usually try to keep the units. This is a thing like, for example, the kilobytes and terabytes and things like that - just keeping those there. Or terabytes per second, or requests per second. Keeping the units is really handy, because then you make sure that you don't get a wrong number. So it's just kind of a checksumming. And WolframAlpha is often -- often I don't actually do this on a napkin, I just do it in WolframAlpha, because WolframAlpha is very good at handling units, it's very good at handling conversions between different units, so kilobytes to terabytes and the other way around... So usually, I just type in things with the units into WolframAlpha, and then it gives me the right result. And if the units look weird, then I know that I did something wrong.

**Jerod Santo:** Plus, it helps you conceptualize it better. If you're thinking in megabytes and you type in megabytes, it just conceptually is right there... Versus having to do the conversion yourself, and then having to convert it back when you think about it.

**Simon Eskildsen:** Exactly. And then the third one is to calculate with the exponents. Often, if you end up having something like 3.924 x 10<sup>8</sup>, or something, just lose everything after the decimal. It just doesn't matter in the grand scheme of things. With napkin math you're just trying to get within an order of magnitude of the actual performance of the system... And as long as you're within that order of magnitude, you've probably done it roughly right. That's one that I also really make sure... And this also means that it's just much easier to do if you are doing it in a meeting room on a whiteboard, that you just have to multiply or add the coefficients of the exponents together, instead of trying to do multiplication or fractions, and things like that; that's just not fun, and you're gonna embarrass yourself in front of your co-workers.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** You can be um-ing it a lot... Um, ah...

**Jerod Santo:** "I got that one wrong..."

**Adam Stacoviak:** And pull your phone up and get on WolframAlpha... Never mind. Yeah, you'd be stuttering.

**Simon Eskildsen:** Because that's the beauty -- the reason why napkin math... When you're by yourself, you have a calculator available, and you can write that out and put that in the GitHub repo...

**Adam Stacoviak:** Right.

**Simon Eskildsen:** It doesn't mean that you shouldn't try to still keep the units and not overcomplicate things, because otherwise your co-workers are just gonna approve the PR because it looks complicated. And also, just keep yourself to high school math. You don't need anything fancy.

And then I think the last one that I have on the list here is arguably the most important, which is to do what's called a Fermi decomposition of the problem. This sounds really fancy, but it's really not. It's just decomposition, with a fancy name. And the reason why it's called a Fermi decomposition is because there's this physics professor called Enrico Fermi - he was Italian, he worked on the Manhattan Project, and he was a very revered physicist among his co-workers, because he had this knack for estimating things.

For example, when they did the famous first detonation of an atom bomb in Nevada, he dropped a couple of shreds of paper from the air, and based on how far they moved after the blast, he estimated to a pretty good precision how strong that atom bomb was... Which was very remarkable at the time, because actually doing the calculations for that is probably beyond any of our math skills, and it took them weeks to do... But he had an estimate immediately.

You have to remember that this was at a time where people were literally afraid that they were gonna blow open the ozone layer, because they just did not know how powerful this was gonna be. So the fact that they had that right there and then, and he did an estimate that was so close, was remarkable at the time.

\[50:10\] He's very famous for this, and probably the most famous example of a Fermi decomposition is to answer these kind of -- I'm imagining that he sort of went around the Manhattan Project and then over lunch asked his co-workers these ridiculous questions, like "How many piano tuners are there in Chicago?" is the really famous one. And how are you gonna answer that? Who cares, and how are you gonna answer that?

**Jerod Santo:** You break it down, that's how you do it.

**Simon Eskildsen:** Yeah, exactly. You break it down. So you go like, "Okay, probably we should know roughly how many people there are in Chicago, right?" Again, this is napkin math. We just have to be within an order of magnitude and it will all work out. So there's maybe like 9-10 million in the metropolitan area of Chicago... That's an estimate that I think most people could probably get there, somewhere between 5 and 10 million... And then you think, okay, how many people are there per household? Maybe like two people per household on average in that area; then you start to think, how many households might have a piano. Do you guys have a piano?

**Jerod Santo:** No... Do you have a piano.

**Adam Stacoviak:** No piano here. We have a keyboard... Well, I guess it's a piano. It's not like a grand piano, it's more of like a keyboard piano.

**Simon Eskildsen:** Does it need a tuner?

**Jerod Santo:** Nope. Digital.

**Adam Stacoviak:** No. It's not a piano then.

**Simon Eskildsen:** So we might say maybe like 1 in 20 households have a piano...

**Jerod Santo:** Oh, wow... I was gonna go with 1 in 100.

**Simon Eskildsen:** You were gonna go 1 in 100. Okay, that's high.

**Jerod Santo:** Or low...

**Simon Eskildsen:** So we could go 1 in 20, 1 in 100, 1 in 50... I think there's a lot of homes with pianos where they just can't get rid of them, because getting rid of them is the worst...

**Jerod Santo:** Right.

**Simon Eskildsen:** And then we might estimate how often these things are tuned. The estimate that I used when I was doing a presentation on this was about once a year. That seems really high, that 1 in 20 people would tune this once a year... But maybe once every few years.

Then we have to think about how much can a piano tuner do. Tuning a piano, including driving within the Chicago Metropolitan Area, would maybe take about two hours, and then we assume that a piano tuner works eight hours a day, maybe about 50 weeks a year... You know, Americans are working a lot of weeks a year. This is in America, so - 50 weeks a year...

**Jerod Santo:** Fair.

**Simon Eskildsen:** And then we can start to kind of compose these numbers, and then we say, okay, we look at how many pianos there are and so on, and we say there's probably about 200,000 piano tunings per year in Chicago. How many can each piano tuner do? Maybe about a thousand, if you use those numbers from before... And then we get somewhere around 200 piano tuners in Chicago. So that's the rough estimate. This technique is called Fermi decomposition.

**Jerod Santo:** How many actual tuners are there?

**Adam Stacoviak:** And again, it's not meant to be on the money, it's meant to be within an order of magnitude...

**Simon Eskildsen:** Yeah.

**Adam Stacoviak:** Because one thing I'd throw in there - it might be a curveball - is you assume that the supply is equal to demand.

**Simon Eskildsen:** Yes.

**Adam Stacoviak:** Because there may be more people capable of tuning a piano, even though they may not do it professionally, and therefore the supply may actually be disproportionate to the demand.

**Simon Eskildsen:** Yeah. Now you're going from napkin to somewhere else, right?

**Jerod Santo:** Right. More granular.

**Adam Stacoviak:** Theoretically, yeah.

**Simon Eskildsen:** We might have done this napkin math because we wanted to figure out "Is there any opportunity here?" This could be someone trying to do product-market fit, or whatever, and they're looking in the phonebook and they're seeing one piano tuner, they call them up and they try to book with him to figure out how busy he is, and it's like "Oh, this piano tuner can only be booked three months out", and they call someone else and she says "Oh yeah, I'm booked all year", and then this person is like "Oh, there's a big opportunity here, because there's a mismatch between what's in the phonebook and what I estimated." And then you might do a little bit more analysis after that.

**Adam Stacoviak:** You're getting into a good point, which is what's the point?

**Jerod Santo:** Right. What question are you asking?

**Adam Stacoviak:** What's the point of the napkin math? What's the whole point?

**Jerod Santo:** Right.

**Adam Stacoviak:** It's not to get to an accurate number in particular, it's to determine a good next step, right?

**Simon Eskildsen:** Exactly.

**Jerod Santo:** Right. It's to answer a different question. The question you're asking is not the one you care about... Because if you cared about that question, you would ask it in a much more granular way. You would say "Well, what about churches and community centers? They're likely to have pianos. We should add those in." Right? But we don't care about the actual piano tuners, we care about some other question we're trying to answer, which is like "Is there an opportunity in Chicago to open up a piano tuning business?"

**Simon Eskildsen:** \[54:14\] The question that you're trying to answer with napkin math is "Is there something there?"

**Jerod Santo:** Exactly.

**Simon Eskildsen:** And then I think about decisions in kind of a decision tree. You have these branches. And your job as a decision-maker is to figure out how far down these different branches you need to go, and to chop the ones off that don't look fruitful as fast as you can.

An example of using this might be something like you receive your bill from your cloud provider, and the bill is $100,000. And you're like, "That seems pretty high." You're deep in the red, and you're trying to figure out "Is this reasonable or not?" So you look at it and you say "I'm doing about 10,000 requests per second." You're doing this on a whiteboard; you're in crisis mode, because you're deep in the red, and you're doing this with your co-workers.

Okay, friends, we're doing 10,000 rps. Each one is 100 milliseconds. So if this is single-threaded, we divide those two numbers and we see that we need about a thousand CPUs to serve all of this traffic, if all of that is CPU time. Okay... So if we know that one CPU costs $10/month, then we multiply 10 by 1,000, and we know that to serve all this traffic should be about $10,000/month, right? So now we have an estimate here. Our bill was $100,000, our main application costs roughly $10,000. What's going on here? We have this gap again.

So you might add in database costs and so on, but they're just not adding up, and then you start going into it and you find out that one of your co-workers left 200 machines running that they were training some machine learning model on and they forgot to turn it off, and that happened, and then you have an RCA, and you figure out that you need to have something that monitors how many machines are running, or whatever. But these are the kinds of things where -- again, the question you're trying to answer is "Is there something here?" Or if these numbers added up to $70,000 or $80,000, it's like "Okay, this must just be what it costs. We need to optimize it."

**Jerod Santo:** Yeah, that's really powerful stuff. I also think when you're doing feasibility -- again, if we go back to the opportunity to start a business or have a business that actually, you know, the dog hunts... You know, you're comparing your potential revenue versus your potential costs. So the cost calculations, if you're gonna be cloud-based, a lot of times is exactly what you're doing - you're estimating how much this is gonna require us, what are we gonna be paying out a month to Amazon or to Microsoft or to Google, and is that gonna actually scale alongside the revenue that will come in?

So you can have your napkin math on the revenue side, and your napkin math on the expenses side, and start to make some decisions on "Is this completely upside down? Is it tight? Is it obviously an opportunity?" And then once you start having those answers, then you can say "Well, it's obviously an opportunity. Let's get more specific. Let's fill in those gaps and take out the napkin and put it in the calculator, in the more specific spreadsheets, and drill in." But if it's completely backwards, let's not waste our time with the details. It's not gonna work.

**Adam Stacoviak:** How many times have you done this, Simon?

**Simon Eskildsen:** I don't know, I've lost count.

**Adam Stacoviak:** Hundreds, thousands?

**Jerod Santo:** Give us just a back of the napkin--

**Adam Stacoviak:** Give me a napkin math estimation... \[laughter\]

**Simon Eskildsen:** Okay...

**Jerod Santo:** "I've been alive for this many years..."

**Simon Eskildsen:** You know, I don't write that much code anymore, right? But then I'd be like "How many PRs do I do a week? How many of them require napkin math?" But I really find that it's just useful to -- when I'm reviewing code, I also think about this. It's not necessarily that I'm sitting down, drawing something... But I'm like - okay, this person is getting this much throughput on this, or they're doing these kinds of calls on this critical path. Is this gonna work or not?

We talked about that MySQL extension earlier, right? Okay, it's doing this many syscalls, and we know every syscall -- based on the napkin math, we know a syscall might take about 500 to 1,000 nanoseconds, depending on it; we're doing this many, we know how much overhead we can roughly introduce per query... And it's like "Okay, we need to reduce the amount of system calls we have here, because we have a very tight budget." So we might look at things like that... And over time, you also start to build an intuition.

\[58:16\] I'm sure that both of you have encountered people who have mastery over some domain, and they just look at what you're doing and they say "Yeah, this is not gonna work." And you're like "What do you mean it's not gonna work?"

**Adam Stacoviak:** Immediately.

**Jerod Santo:** Yeah, they just know immediately. Like, "Nope, it doesn't make sense."

**Simon Eskildsen:** There's that famous story of a firefighter who took his team into a building, and they were trying to get people out and so on, and I think they emptied the building... And then they were standing in the lobby of this building. And suddenly, the guy who was in charge of this operation said "Everyone out!" People were like "What do you mean, everyone out?" But you know, you just follow order in these kinds of circumstances.

They all ran out, and about a minute or two after they were out of the building, the floor collapsed. So how did he know that? Well, he built some kind of mastery, and mastery is built by deliberate practice over time... And at some point you might not even need to really reference these numbers anymore, because you start to have a pretty good feeling for what's fast and what's not fast.

**Jerod Santo:** Right.

**Adam Stacoviak:** The point of me asking that question was to really get to how many times has this saved your bacon, so to speak. The reason why our audience might care deeply about this or pick up this practice is because 1) you're introducing this idea to us, even though you're not the inventor of the idea... But the reason why you do it has been because it's paid itself in dividends in your career.

**Simon Eskildsen:** Yeah... I mean, it's hard to say, because I don't have the timeline in front of me, or the parallel reality where I didn't have this, right? I think that the biggest place where I end up applying it again and again - and again, it's hard to give a number; I would say I do this at least once a week, I apply it to something at work, where it has some impact... What that impact is -- it's not always true, but the impact almost always is "Hey, this simple solution is gonna work. It's fast enough." Because the engineers, if they have an idea for how to make something fast, they usually will, even if it takes longer. And they will justify why that's the best thing to do. But when you realize that reading a megabyte of memory, even on every single request - probably not your bottleneck. That only takes 100 microseconds; it's not really that long if your requests are taking 100 milliseconds. So yeah, it's hard to answer the question directly.

**Adam Stacoviak:** Yeah. Well, you mentioned this newsletter you have. Where can people subscribe to that, so they can follow along as you do more of these napkin problems and you share them?

**Simon Eskildsen:** Yeah, so it's linked from the GitHub repository at github.com/sirupsen/napkin-math. You can go to my website, which is sirupsen.com/napkin and you can subscribe there. If you google just "simon napkin math", I think it will probably come up as well. It's kind of a niche market. And yeah, then every month you should receive some kind of deep dive.

My co-workers joke with me, because they know exactly what project I'm working on based on the napkin math newsletter... So I'm very much doing this on things that I'm actually working on, on real problems.

**Jerod Santo:** Nice.

**Simon Eskildsen:** So I've at least done this 12 times next month, because these are real problems, and a lot of these I sent to co-workers because they ask a question and then I go deep on it in one of these newsletters. So that's very real, yeah.

**Jerod Santo:** Well, you've got one new subscriber. I'm subscribing right when we hang up this call. One last question for you - do you have a specific brand of napkin that you suggest?

**Simon Eskildsen:** I actually do not own any napkins... At all. So I've never done this on a napkin.

**Adam Stacoviak:** At all. \[laughs\]

**Simon Eskildsen:** It's terrible.

**Jerod Santo:** You're a charlatan. \[laughs\]

**Simon Eskildsen:** I do all of this on an iPad...

**Jerod Santo:** I thought maybe you were just working for Big Napkin, and you're just out there shilling napkins, but...

**Simon Eskildsen:** \[laughs\] Yeah, I should have some napkins in the background here, and set this up a little bit better.

**Jerod Santo:** You should. You should come up with a little Simon-branded napkin, and you could sell those on your website.

**Simon Eskildsen:** \[01:01:48.15\] That's true...

**Jerod Santo:** Like, come on, merchandise this thing.

**Simon Eskildsen:** You know, if I'd done that, maybe I'd make some money after this aired... Yeah. Because unfortunately, all of this is free. I'm not earning a dime on this.

**Jerod Santo:** Huge missed opportunity.

**Simon Eskildsen:** Yeah, do you know anyone in Big Napkin?

**Jerod Santo:** We do now... \[laughs\]

**Adam Stacoviak:** They're gonna reach out after this and be like "We can sell you some napkins..."

**Simon Eskildsen:** Yeah, "We can help you out here."

**Jerod Santo:** Strike up a product placement deal, perfect.

**Adam Stacoviak:** Can we sponsor this show in retrospect?

**Simon Eskildsen:** \[unintelligible 01:02:11.21\] it should be sort of the size of the airline napkin, like those really low-quality ones...

**Jerod Santo:** That's right... Because then you run out of room real fast and you have to grab another one, so now you're using two...

**Simon Eskildsen:** Exactly.

**Adam Stacoviak:** You need constraints.

**Simon Eskildsen:** I bet you also the airlines probably -- you know, they're desperate to make money right now.

**Adam Stacoviak:** They'll sell you some of their napkins.

**Simon Eskildsen:** Yeah, I think so.

**Jerod Santo:** I think we should just do the math and see if this could be a business.

**Simon Eskildsen:** True.

**Adam Stacoviak:** I like it.

**Jerod Santo:** Awesome.

**Adam Stacoviak:** Simon, thanks for sharing this wisdom...

**Jerod Santo:** Cool stuff, man.

**Adam Stacoviak:** ...this exploration, this desire for curiosity I think is pretty interesting... And that's what's interesting to me - you encourage this exploration to see if there's actually something there worth doing more of or not, and if the original assumption was correct.

Links will be in the show notes, listeners, you know that... So the repo, and the newsletter, all that stuff. Check your notes, you will see it there. Simon, thank you so much.

**Simon Eskildsen:** Thanks for having me on the show.
