**Jerod Santo:** I'm joined today by Joran, creator of TigerBeetle. Welcome to the Changelog.

**Joran Dirk Greef:** Hey, Jerod. So great to be here. Thanks for having me.

**Jerod Santo:** Excited to talk to you. I've been excited ever since you were mentioned by Glauber Costa on our Turso episode. He spoke very highly of you, very highly of TigerBeetle, and I thought, "We've got to get this guy on the show."

**Joran Dirk Greef:** Yeah, so great to hear that. Glauber is sort of part of the mix in some of our design decisions for TigerBeetle... So I've always held him in high regard. And yeah, so I'd love to dive into that later, but yeah, thanks again.

**Jerod Santo:** Absolutely. Well, we'd love to hear what you've been up to. I read on your TigerBeetle blog that you said in July of 2020 you stumbled into a fundamental limitation in the general purpose database design for transaction processing. Can you tell us that story?

**Joran Dirk Greef:** Yeah, so it was the strangest performance optimization challenge that I've had to do... So I was doing performance engineering at the time, consulting on a central bank switch with the Gates Foundation. They had created an open source nonprofit central bank exchange, and I was brought in to see "How can we make it go faster?" So how can we do lots of transactions between banks? How can Alice pay Bob - and those are little payments, so this is the classical database problem, a transaction between one or more people. And if you look at the Postgres docs for Postgres transactions, the canonical example there is Alice pays Bob, databases need transactions, because they need to record people transactions.

**Jerod Santo:** Sure.

**Joran Dirk Greef:** And so the central bank exchange was a good example of why you need a database... Because it's literally money moving from one person to another. And so I came into this project and I had done a lot of performance optimization work, and specifically in Node.js. So I'd been involved in Node.js since Ryan Dahl announced it. I'd kind of already been writing JavaScript on the server before Node.js, using Rhino on the JVM, and I was convinced that JavaScript was going to be server side. So I was already writing it, and then Ryan Dahl came. And then I was in Node.js for 10 years and doing a lot of performance.

**Jerod Santo:** Interesting.

**Joran Dirk Greef:** Yeah. So this switch was written in actually Node.js, to make it a really accessible, open source project. And so it was like "How do you optimize Node.js?", and I had experience with this. But the surprise of this whole thing is that, you know, how do you make these transactions go faster through the switch? Inside, it's essentially just a general purpose database, 23 years old. MySQL was the one, and it's very basic. They're just doing -- if you look at those Postgres docs on transactions, they're doing classic debit/credit in a SQL transaction, nothing more. And that's it. And then I thought, "But how do you make it go faster?" So my first experiment was, "Well, let's give MySQL NVMe." And it didn't go faster. The system could only do 76 debit/credit financial transactions a second. And it didn't go faster. I thought, "Okay, that's odd..." Because normally, it makes the database go faster, Jerod.

**Jerod Santo:** \[00:08:23.22\] Yeah. Throw a little hardware at it, it'll go faster.

**Joran Dirk Greef:** Yeah. So I thought, "Well, maybe I did it wrong. Maybe it's not NVMe. Maybe the database is memory bound. Let's give it more cache."

**Jerod Santo:** Okay.

**Joran Dirk Greef:** So we gave it a lot of RAM, and nothing changed. It stayed 76. And then we thought, "Okay, there must be like some CPU-intensive algorithms." So we profiled Flame Graphs, everything. And there was nothing. The CPU was like 1%, you know... Even the database, there was -- everywhere you looked in the system, there was just no bottleneck, and yet the system could only do 76 TPS. Network also. You know, what we call the four primary colors: network, storage, memory, compute; we gave them all hardware, and there was no change. And this was so puzzling for me, because always with performance work there's some bottleneck somewhere, and you fix that, and then you fix the others. And here, it was the strangest problem, because you had to optimize a system where the hardware was doing nothing. It was idle. And people who had worked on other payment systems, they sort of took me aside and helped me along. They said, "You know, it's the row locks." And what they meant was when you do Alice pays Bob through a SQL transaction to represent a real world transaction, you go to the database from the app and you say, "Select me Alice and Bob's accounts. I want to get their balances." And then in the app, you check, "Does Alice have enough money to pay Bob? Yes." Then you do another query back and you say, "Okay, increment the debits or the credit columns, and also insert a record of the transfer." So you've only done two SQL queries within one SQL transaction.

**Jerod Santo:** Right.

**Joran Dirk Greef:** Yeah. And this is what I saw. In reality, the switch was doing 20 SQL queries within a SQL transaction, but they were all necessary and essential. And I've since then chatted to lots of other FinTech people, and usually it's like a -- there's about 10 SQL queries per debit/credit. If you want to do it really well, you could do it just like two, as I described.

And so actually, this was the problem. The SQL transaction was holding row locks on the account rows across the network latency. And even if that's, say, one millisecond round trip and you're doing two round trips, then you've got locks for a millisecond... And that means if your transactions are all sequential, your database tops out at a thousand TPS, a thousand debit/credits a second. And obviously, the next question we're going to say is "Well, let's go horizontal." But it doesn't change anything, because you have these row locks.

And the other problem that we saw is that there's a power law of contention, like the Pareto principle. 80% of real world transactions are through 20% of hot accounts. So for example, on the stock exchange, anyone who's bought shares has probably bought NVIDIA or sold NVIDIA, you know?

**Jerod Santo:** Sure.

**Joran Dirk Greef:** And so 90% of trades are NVIDIA or the super-stocks - Microsoft, and some of the others, you know.

**Jerod Santo:** Right. And a bunch of other ones just sit there, untraded.

**Joran Dirk Greef:** \[00:12:03.28\] Exactly. Then there's the long tail. But if you're the brokerage behind the stock markets, if you're powering like 30% of Nasdaq's volume, then most of your SQL transactions are hitting like only 10 rows, your 10 super-stocks. I mean, how many are there? And so they're permanently row-locked.

**Jerod Santo:** The Mag 7. There's seven of them.

**Joran Dirk Greef:** Oh, there's seven. That's it, yeah. And so that's like the brokerage. But the central bank was much the same. They only have like typically eight or so big participant banks around the table. And so all the money movements are literally going through eight SQL rows... But even if you're -- say you're building like Earth's biggest bookstorel; you've got the same problem. You've got the bestseller list of books. And so all your Black Friday transactions are hitting that.

So then we started to see - this is many businesses, many different kinds of industries. But let's go back to the beginning, back to the question. So it was row locks, and we realized it's a fundamental limit, and it's got nothing to do with the SQL database. Whether you pick Postgres, or MySQL, or something horizontal, or cloud... It actually doesn't matter. The problem is the interface of row locks across the network. And that was when we realized "Actually, we can't go faster. We need a transactions database, not a general purpose database." So that was the impetus, yeah.

**Jerod Santo:** Okay. So you're in 2020, you are trying to basically squeeze more transactions per second out of MySQL for kind of a specific type of transaction, right? Like, you are literally meaning financial transactions, not SQL transactions, which could be a bunch of different things that kind of roll out into a single unit of work. We talk about a SQL transaction - that could be lots of different things, and then it gets rolled back, or it gets committed. But you're actually saying "We're tracking and doing debits and credits, financial transactions, and we can't do these particularly simple type of SQL transaction any faster. We can scale horizontally, but we have the network row locks..." I'm sure there's a way in MySQL to say, "Well, let's just fly closer to the sun and turn off row locks", or something. But maybe you're also a central bank...

**Joran Dirk Greef:** That's --

**Jerod Santo:** Yeah... Not a great idea?

**Joran Dirk Greef:** In Postgres, it's almost the default. \[unintelligible 00:14:38.24\] Read committed isolation.

**Jerod Santo:** Oh, okay... \[laughs\]

**Joran Dirk Greef:** You fly close to the sun just by default, you know?

**Jerod Santo:** Right.

**Joran Dirk Greef:** You actually have to -- there's a lot of like tweaking you need to do just to get it safer, but...

**Jerod Santo:** Yeah, no, I mean, at the end of the day you decided "This requires a different kind of database. We should have a transactional database." Is that how you think of it? ...where it's like the core unit of work is a credit and a debit combined together. Is that right?

**Joran Dirk Greef:** That's right, yeah. And I had a little bit of luck in seeing this, because I've been coding for 30 years, since I was 11. Now I've given away my age...

**Jerod Santo:** You've dated yourself.

**Joran Dirk Greef:** Yeah... And been coding for 30 years, and it's been my passion, and self-taught. So I didn't actually study computer science, because I was already reading papers, and I thought, "Well, I'm more like an autodidact. That's going along already." Actually, I've always loved business too, and people told me, they said, "You know, a great subject to study if you wanna understand the schema of business across all sectors, and anywhere in the world, it's double entry accounting." That's sort of -- and there's a quote from Warren Buffett, "Accounting is the language of business." So that's why many -- well, yeah, that's why I went and studied financial accounting. I majored in that at university, because I had a love for business and wanted to understand the schema, general entries, debit/credits. Because with debit/credit you are doing transactions. You're doing multi-row transactions between multiple parties.

\[00:16:25.11\] A debit/credit transaction could actually be you have many debits on one side and many credits. You're expressing something essential in life across -- and it's not only businesses. You could use this not only for money, but for inventory, stock counts, or just counting things, counting API usage, or counting kilowatt hours... It's basically "a counting", you're just counting. So any domain where you need to transact with counts, and it's quantities... It could be like valuable or not valuable, but it's just things are moving, moving around, and that's transactions.

And yeah, that's sort of what TigerBeetle was meant for. Sort of the canonical, general purpose example would be debit/credits. And so often we see this example given... But we thought, "Wouldn't it be great if you just got a database that did this out of the box?" That lets you in one query to the database execute 8,000 debit/credit transactions, instead of having to do 80,000 SQL queries to do the same. So that's one query and you do 8,000, instead of 80,000 queries. And so that's just TigerBeetle, you get these debit/credits. So we thought, "Let's build it in." It's kind of like financial asset; not only row-column consistency, but multi-row column consistency, so like transactional consistency. Double entry consistency, yeah.

**Jerod Santo:** Interesting. Now, I have not been in financial technology as much as you have. I've definitely dabbled, and I was a contract software developer for many years, and so I worked on contract, and I got into lots of different industries... And one thing I've found is lots of different industries have their little niche databases that people on the inside know, people on the outside don't... Or sometimes they're homegrown. I imagine inside these large financial institutions there's probably many - maybe homegrown, maybe there's a proprietary thing that's like "This is the database we use" because of the exact specific use case that you are speaking to. Now, am I right about that? Are there TigerBeetles living in large financial institutions and you decided "We want one for the world"? Or why did you decide to build this thing besides maybe go find one, or...?

**Joran Dirk Greef:** Yes, I think we're mostly right.

**Jerod Santo:** Okay.

**Joran Dirk Greef:** And the reason is because yes, everybody has to build this database, but what you usually see - and I also had no experience in payments specifically as I worked on the central bank switch. I came in from the technical and performance angle. I had the accounting experience. I could see that, yes, we're doing debit/credits, and... It was the payments people that also took me aside and they said, "You know, every single FinTech or -- this is only FinTech, but it applies to any business that needs to record transactions." Any money, you know.

**Jerod Santo:** Sure.

**Joran Dirk Greef:** But they said, "You know, they're all reinventing these debit/credit databases." And typically, what they do is they do it over a general purpose database. So I think this is also interesting, is that it's a kind of, again, lucky on timing, because SQL is like 50 years old, and it's been able to power OLTP transaction processing in the business transactions for 50 years. And so this has always been a latent problem, but we were starting to hit it now on the system.

**Jerod Santo:** \[00:20:19.15\] Gotcha.

**Joran Dirk Greef:** And that's because things I think are becoming more -- you know, the volumes are increasing, but... Yeah, back to your question, so I think, yeah, all these FinTechs were reinventing these databases, but they were building a database and didn't know it. So they were building a database in the application around... So that's why there was this central bank switch, and you can see the whole thing as a debit/credit database. It's like tens of thousands of lines of code around MySQL. But if they just had an OLTP database with a debit/credit interface, the switch would be so, so simple. And that was -- so that's how this work started. There was no desire to build a company, build a product, sell something... I was also passionate about the mission, because the switch was open source non-profit. I was told - and this was the mission, and it is - the cheaper, the more performant you make the system, you will reduce fees. The developing countries that run this will be able to lift a few million people above the critical poverty line. And it is literally actually, I don't know, on the order of about a billion people around the world that don't really have access to banking, like we take for granted in the West... Because they just don't have -- in those areas they have to walk miles just to move money. But everybody has a cell phone. So these systems were being built that you could power people to move money instantly on cell phones. But the performance is so important because as you make things faster, you make them cheaper. And now, for someone who's got -- they're sending like $10 back home... If you're taking 5% fees or 1% fees, that's life-changing, because that 4% means so much to them. They're going to maybe have an extra meal, and it's going to compound. So this difference in fees - that is why they are doing this.

So for me, it was really like -- we do want to make it faster. I'm not just consulting and I'm not -- there are like a thousand of MySQL knobs I could have tuned. We could have -- we did double performance. We could have made it a little bit more... But it was kind of like "We actually really want to make it really fast out of the box."

**Break**: \[00:22:47.17\]

**Jerod Santo:** Well, to just spoil the end of the story - it's not the end, but it's further down - you did end up designing something that's a thousand times faster... So I think you said three orders of magnitude. That's a big win. But let's talk about getting there. You decided "Okay, what we want is a database that's designed from the ground up for this kind of transaction." Then what do you do? You didn't wanna make a business out of it here. You have a business now, but did you decide "I'm gonna code up in my free time an open-source database for the world", or "I need to go raise money"? Where'd you go from there?

**Joran Dirk Greef:** Yeah, so I didn't have really any of those thoughts. I think the first thought I had was I figured we could fix the interface of the database instead of having row locks and multiple queries. We pack a lot of debit credits, first class, one database query back again, and you're done. You actually do get that 1000x performance, and it isn't -- you know, you have to only improve on 76 logical finished product TPS.

I think people sometimes get confused. They think we're talking row inserts per second. We're actually talking logical transactions, debit/credit with the contention row lock problem. If a database is only able to do 100 to 1,000 TPS, depending on the latency of the network and the contention, those are the two variables. You can plug them into Amdahl's law. Typically, if there's a round trip time 10 milliseconds, looking at 100 TPS, 50% contention, looking at 200 TPS; that's your max general purpose limit. And so if you wanna go 1,000 times faster, but you are now packing 10,000 transactions in one database round trip, it's only one meg of information. You're amortizing so many costs. It is not actually hard to do 100,000 a second, 200 -- we actually did a million a second with primary indexes only. TigerBeetle ships with 20 secondary indexes turned on. So it does between 100,000 to 300,000 a second. So it actually is -- I hate benchmark wars. That's why we never really do it. We just try to explain to people first principles, why it makes sense.

But that was sort of the first step. Like, that was my first feeling. And we only thought that, the 1,000x, because that was what --

**Jerod Santo:** Who's the we? You keep saying we, but you haven't described your partners yet.

**Joran Dirk Greef:** Okay. Yeah, yeah. So actually, it was me, and then Don Changfoot was working with me, guiding me around the system. I was doing the work, and then Don was helping me, and he was like my bridge and manager. There were also other people at Coil, my managers there, and surrounding team... Really bright people. My manager was the co-chair of the W3C Web Payments Group. He was the co-chair, but there was Visa and MasterCard and all of them also on that. So it was people who really understood payments. And yeah, so I say we, because I always like to include the team.

**Jerod Santo:** Sure.

**Joran Dirk Greef:** So today there's a team... But I did just create it, and it came out of this experience. So the first feeling was just "We need to go 1,000 times faster, because that is gonna drive down costs, and because the scale is actually 1,000x more." Countries that deploy these kinds of systems, you tend to get very small value transactions and massive volume. In India, for example, they've done four orders of magnitude scale in 10 years only. So in other words, 10 years ago, if you picked MySQL today, you need to -- you're telling MySQL "Go 10,000 times faster, please." There's no cloud database designed, you know... Most cloud databases were designed 2012, or 2015... None of them were designed for like four order magnitude increases. So there's no OLTP database on Earth that can power India or like Brazil's \[unintelligible 00:29:32.04\] These systems are already past three orders.

So we were like "Okay, we need at least 1,000x", because it's not -- this is something I think people also...

**Jerod Santo:** \[laughs\] "It's not as impressive as I'm impressed by it", is what you're saying. Like, there's people who've done 10,000, you're doing 1,000... I'm impressed, but India is not impressed, for instance.

**Joran Dirk Greef:** Yes. Well, you could actually take TigerBeetle today, run it on your laptop and your laptop could power India's transactions volume going through \[unintelligible 00:30:00.04\]

**Jerod Santo:** Wow.

**Joran Dirk Greef:** \[00:30:03.18\] You really could, and it would be pretty easy. So it resets the experience... Which I think makes sense, because we've got 30 years of hardware and software research advance; how you could build a database today, a lot has changed. So if you just work with the grain... You know, in those days it was spinning disk; that was the bottleneck. Today it's memory bandwidth. So all the parameters of the design have been inverted.

**Jerod Santo:** Right.

**Joran Dirk Greef:** But again, it's actually not that hard, because there's just so much seismic differential waiting to be just -- I was just excited that we could now do something.

**Jerod Santo:** Yeah. Because all the major ones, the general-purpose ones, MySQL, Postgres, SQLite etc. they're 30 years old. I mean, they're '90s, sometimes in certain cases '80s... And so they were built with a different world of constraints. And they've shown amazing malleability and resilience, and the fact that they're still good enough for lots of things today is an amazing feat of engineering by all those teams. But to start fresh, and to start with a - is it a limited domain? I mean, you're not also bolting on general purpose on top of TigerBeetle. You're saying "Use TigerBeetle for these transactions, and then also use something else for the rest of your workloads"?

**Joran Dirk Greef:** And that's quite right, yes. And I agree with you, Jerod. It's so nice that you said, because I was wanting to say it, too...

**Jerod Santo:** Oh, yeah.

**Joran Dirk Greef:** It's a testament to the designers that these -- you know, Postgres powers the world of general purpose transactions, or if you need to build an app, whatever... But I think the interesting thing here, to your point about fixed domain - for many years what we call OLGP, General Purpose Database, that was used for OLAP, up until '93-'96. And then OLAP actually became a term. Online Analytics Processing. And then, because there was this whole paradigm shift, that "Look, Postgres is great. It's row major." Inside the elephant anatomy, that's how it stores the information. It's sort of designed for a 50/50 read/write split. And so it has like a B-tree that's maybe a little bit better for OLAP... But the OLAP people came along and said "No, no, we need to go column major." It's like a paradigm shift.

**Jerod Santo:** Right.

**Joran Dirk Greef:** So the anatomy of DuckDB is totally different to the elephant. And today we wouldn't say that Postgres is an OLAP database. It's a general purpose database. It's not Snowflake, or BigQuery.

**Jerod Santo:** Sure.

**Joran Dirk Greef:** And that's fine. And vice versa. The OLAP is not always OLGP. But I think today, for the same reason, because of increasing scale, and because you can specialize, there's like a paradigm shift... OLTP is not just rows and columns, row major or column major; it's multi-row major. You're doing things across rows with contention. So the concurrency control of the database inside looks totally different. The anatomy of a TigerBeetle, I would say, if I may...

**Jerod Santo:** Sure.

**Joran Dirk Greef:** ...it's different. It's a lot similar to Postgres, but it's also -- you can think of like the group commit that MySQL or Postgres has, and just dial it up 10X, make a much bigger group commit, much bigger batches. Also, again, like you said, fixed schema. So you don't need all the overhead of serialization, there's no inter-process communication... Just so many things.

It was just incredibly fun to design TigerBeetle, because it was such a simple problem. Just debit credit at scale. So in other words, I think this is it - TigerBeetle is not an OLAP database. It's also not a general purpose database. It's just an OLTP database, and that's all, you know?

**Jerod Santo:** Right.

**Joran Dirk Greef:** \[00:34:13.20\] And then Postgres is fantastic. So you never replace Postgres, just like if you're using OLAP you don't. But what you would do is OLGP is like your control plane in your stack. So you put all your entity information. People call it master data, or reference data. So it's the information -- you know, your users table, your usernames and addresses. If you're building Earth's biggest bookstore - usernames and addresses, names of your catalog, your book titles... Those are not really OLTP problems, because that's just... You know, you update your top 10 every now and then, or... You know what I mean. OLTP is like when people move a book into the shopping cart, because that's adjusting inventory that's held potentially for a shopping cart. After a certain amount of time, that debit/credit times out and rolls back. Then if people do check out their shopping cart, those goods and services are moving through logistics, supply, all of that, to warehouses, and delivery... That's all debit credit. Quantity is moving, and it's moving from one warehouse to another, to a driver, to the home, back again, okay, back again... All debit/credit. And then you've also got the checkout transaction with the money, that's also debit/credit. And so like that would be OLTP, and that's sort of the Black Friday problem. The Black Friday problem isn't "How do we store the book catalog, or update that?", because it doesn't change often. So that's a great general purpose problem. Just like users - they don't change the names often. So your database - that's great for variable length information... That information is actually very different to transactional information. Transactional information is very boring, essentially; just multi-row debit credit.

**Jerod Santo:** Right. And so this multi-row major that you describe...

**Joran Dirk Greef:** I made it up, yeah. I would always say multi-row, but let's call it multi-row major. \[laughs\]

**Jerod Santo:** Yeah, multi-row major, versus row major or column major.

**Joran Dirk Greef:** Yeah.

**Jerod Santo:** That makes sense to me, because every single transaction has -- you're gonna assume that over here there's an addition, over there there's a subtraction. There is this double entry thing where there's gonna be more than one row in pretty much anything that matters in TigerBeetle, right? And so that's an interesting way to think about it, and fundamentally a different way, like you said, versus thinking about it column or based on rows. How does that fundamental primitive manifest itself in your decision-making? I assume there's storage concerns, maybe like memory allocation, maybe there's protocol... I don't know where all that works its way out as you design this system. How does that affect everything that TigerBeetle is?

**Joran Dirk Greef:** Great. I'm so excited to dive in. \[laughs\]

**Jerod Santo:** Please do. Let's do it.

**Joran Dirk Greef:** Yeah, yeah. So let's apply this. Let's take the concurrency control, for example. So let's say we've got 8,000 debit/credits. So one debit credit would be like take something from Alice and give it to Bob. Then take something from Charlie and give it to Alice. Take something from Bob and give it to Charlie. And you've got 8,000 of these. Some of them might be contingent on the other, and you can actually express a few things around this... But let's just leave it like that. So you've got 8,000 debit/credits in one query. So the first thing - that comes off the wire into the database. The database is gonna write that to the log, and it's gonna then call fsync. What's great there is you've called fsync once for 8,000... So it's fsync once for one query, but that is amortized across 8,000 logical transactions. And fsync usually has a fixed cost. So it has a variable cost, but there's also always a fixed cost, and it's like half a millisecond, or a millisecond, or... It depends all on the hardware, but there's always a fixed cost. But now you've amortized that massively, over 8,000... Typically, the group commit for MySQL might be around 15 things. So it's much smaller. It will amortize fsync, but not by so many orders. That's the first thing.

\[00:38:32.28\] Now we've got the D in ACID. You know, atomicity, consistency, isolation, durability. Before the database processes it, it makes the request durable on disk, and calls fsync. The next thing it does is it'll take these 8,000 and apply it to the tables. It'll actually update the state on disk. And if it was something like a general purpose database, what it'll do is it'll take the first debit/credit, it'll read Alice's row and Bob's row for their accounts, then it will update the rows, and then it will write them back. Then it'll go on to the next one, read the two rows, update them, write them back. So on and so on. So you're looking at about 16,000 accounts that you read in and write out, and that typically takes what is called latches; little internal row locks also, inside the database.

**Jerod Santo:** Okay...

**Joran Dirk Greef:** So 16,000 little micro cuts; you're also contending there. And then -- but you see, here's the catch, is that the domain is usually... Again, everybody's buying NVIDIA. So if like 80% of your 8,000 are all NVIDIA, you're reading NVIDIA, writing NVIDIA; reading NVIDIA, writing -- latching NVIDIA, latching it. And you're doing it 16,000 times. And so what TigerBeetle does instead - and this is, again, with anatomy changes. Now, we first look through all 8,000, and we prefetch all the data dependencies in that request. So all the accounts, for example. And so we load NVIDIA once. Then we load the other six hot super-stocks, and then there's a long tail that we load... But actually, there's not many accounts, and they're usually hot in L1 cache, so they don't even go to disk, because we've got a specialized cache just for these accounts. Everything in TigerBeetle is CPU cacheline-aligned. And we think of that these days as like 128 bytes. Think cachelines are getting bigger. M1 started there. And everything is cacheline-aligned. We don't straddle cachelines for false sharing. Everything is zero copy deserialization, fixed size, very strict alignment. Powers of two, and we don't split machine words, or just... It doesn't always make a difference on the hardware, but it can. So these are all the little edges. The cache is optimized...

But okay, let's go back. So now we load just NVIDIA, the super-stocks and a long tail, but actually they're all in L1 or in L2... And then we've got the data dependencies cached. Then we push all 8,000 through, and then we write them back. And so it's just -- I think you've got it now. It's just drastically simpler. It's kind of like -- you just do less, and that's how you go faster, because you're doing so much less. You don't have SQL string passing.

**Jerod Santo:** Right. It almost feels like you're cheating, but you're not. You're just doing exactly what needs to be done and nothing more, because you're not general purpose, right?

**Joran Dirk Greef:** \[00:41:45.10\] Yeah, exactly. I often like to say we didn't do anything special. It's kind of embarrassing. It's so simple. The 1000x trick, it's -- yes, we use \[unintelligible 00:41:54.03\] we do direct IO, DMA to disk, zero copy... All the stuff. Actually, it doesn't make a performance difference. It makes -- it does, that's why we do it. It makes a 1%, 5%... And it all adds up. But that wouldn't get you 1000x. Just like stored procedures in a general purpose also wouldn't get you 1000x. Stored procedures will get you -- you get those 10 SQL queries down to one. But now you're still doing one for one, and you've still got -- so you only went 10x faster or 10x cheaper. If you really want to go 1000x, you actually have to just have first-class debit/credit in the network interface, change the concurrency control... We even -- TigerBeetle has its own LSM storage engine, LSM tree. We designed it from first principles, again, just for OLTP. So it's actually -- it's an LSM forest. We have an LSM tree for every object that the database stores. So transfers and accounts. Accounts and transfers between them; debit/credit transfers between accounts. Those are two trees. And then all the secondary indexes around each object is like 10 trees, and 10 trees... So for every size key and every size value, it's in a separate tree.

And again, there's just things you can do now. RocksDB or LevelDB, which is what you find in a lot of general purpose databases - they use length prefixes for the key. So it's a four-byte length prefix... Or it's variable length, but now you've got the CPU branching costs etc. And then there's, again, a length prefix for the value. But if you know that your secondary indexes are only 8 to 16 bytes, and you then add the cost of length prefixes, four plus four is eight... You know, eight bytes of overhead just to store 16 bytes of actual user data - you're burning a lot of memory bandwidth, a lot of disk bandwidth, and you're going slower than a database that doesn't have length prefixes at all. And so TigerBeetle -- each LSM tree stores pure user data. Literally, we put the key and the value; there is no length prefix, because each tree knows at comp time what the size of the key is. So yeah, we can go on and on, but... And then the consensus protocol - we did also similar optimizations. Yeah.

**Jerod Santo:** So hyper-tuned for this specific type of workload... Which also happens to be one of the most important workloads as well. So let's imagine that I'm an e-commerce shop, and I'm not gonna roll out Shopify. I'm gonna do it myself, because it makes sense. And so far -- I'm a Postgres guy, and personally I respect MySQL, but I just use Postgres as my example, because that's what I've been using for 15 years. So let's say that I've got my Postgres database, it's been running everything just fine, it's got my users in there, it also has all my transactions... And I'm hitting up against scale issues. This is a good problem for me, because it means I'm doing more sales. And so I'm selling a lot of books, and I'm hitting scale issues, and someone says "You should really look into TigerBeetle for your transactions specifically." And I think to myself "Postgres hasn't failed me for 30 years." TigerBeetle hasn't existed until 2020 at the earliest. You can tell me when it's 1.0, or when you guys actually shipped a product... Because conception to now, we're five years in.

**Joran Dirk Greef:** Yes.

**Jerod Santo:** I'm gonna trust my most precious -- my sales. I'm gonna trust that, to something that's this new. I'm sure you face this a lot, as you go and try to get people to try out TigerBeetle. What's your response to that concern? Because it's a valid concern. Not super -- what's it called? ...battle-hardened yet. Or maybe it is. Tell me about that.

**Joran Dirk Greef:** \[00:46:02.28\] Yeah, great. I love the question. That was my second thought, as TigerBeetle was created. First thought is --

**Jerod Santo:** Yeah, "No one's gonna trust us. Why are they gonna trust us?"

**Joran Dirk Greef:** Yeah. And the second thought was this question, "How can you possibly be as safe as 30-year-old software that was created Windows 95? How could you possibly be as safe?" And I think the answer to that is actually a question. In the same way that "How could you be 1,000 times faster than something that is 30 years old?", the question is "What has changed in the world in the last 30 years?" So much has changed from a performance perspective... And then when we look to safety, and especially mission-critical safety, so much has changed.

So 30 years ago, consensus didn't really exist in industry. Brian Oki had pioneered consensus a year before Paxos View-stamped Replication in '88. That was his thesis at MIT, with Barbara Liskov. The consensus did exist... You know, how can you replicate data across data centers for durability, to actually survive loss of a machine or disk? But that wasn't really an industry 30 years ago, so you don't really have first-class replication. Yes, you do have it these days, but it wasn't designed in from the start. And I think there's more examples around testing. So deterministic simulation testing, what FoundationDB did - and we actually got it from the people at Dropbox, not Foundation. James Cowling and them at Dropbox were also doing DST.

The idea is like you design your whole software system that it executes deterministically. So you don't use -- if you use a hash table, the hash table, given the same inputs, always gets the same layout. You don't use randomness in the logical parts that users would see. you can think of it basically like fuzzing your software or property-based testing. Given the same inputs, you get the same outputs, and you design all your software like this. Then you can test it. But if the test fails, when you replay it, you'll get the same result. And so distributed systems were so hard to build 30 years ago, so not many people did. And then when they started really building them, they actually started with eventual consistency, because people were still figuring out how to do strict serializability. So there was a lot of fashion around eventual consistency, which has gone away, I think... But back then, to build a distributed system you just kind of assumed it'll just be eventual.

So how to build distributed systems was quite hard. And it was hard because it was hard to test them, because the failure of one system over there causes the failure of another system here. And you can never -- when you find a rare bug, you can never replay it, and you need so many machines... And these bugs -- you know, before TigerBeetle, I worked on systems that were distributed, like full duplex file sync, hence my interest in Dropbox. But those systems were incredibly hard to test. There would be bugs, you know they're there, they're taking a year to find and fix. And then you realize it's a buffer overflow in the libuv. That was some of my first C code that I ever wrote, years before TigerBeetle. It was fixing a buffer overflow in libuv. It was the Windows event notification, some interaction with multi-byte UTF-8, and different normalizations of NFC, NFD. That was this distributed system's bug. And it also needed long file paths. So it took a year -- like, we knew it was there...

**Jerod Santo:** Was that your Node.js days, or that was prior to Node.js days?

**Joran Dirk Greef:** Oh, that was Node.js days, yeah. So around 2016. And we were using Jepsen style techniques, where you've got fault injection... Like, chaos engineering. That's what we were doing. So you could get the bug, but to even -- you could get this amazing bug, you knew it was there... It was like the tease. And you could never find it, reproduce it, or fix it.

**Jerod Santo:** \[00:50:24.16\] Ugh. The worst.

**Joran Dirk Greef:** And it literally took a year. So coming to TigerBeetle, I knew from Dropbox there were newer ways to build distributed systems. Just like you don't need to use eventual consistency anymore, there's proper consensus, no one should give that up lightly... You don't need to, because you can get great performance first, and so much performance fundamentally, you fix the design, and then you can add consensus. It's not expensive when the design is right. I mean, consensus is literally just, you append to the log in Fsync, and in parallel, you send it across the network to a backup machine in Fsync. That's replication, 99% of the time. And then consensus does the automated failover of the backups, the primary.

So consensus doesn't really have a cost. That's a common myth. All these things have changed... But coming back to it, testing has changed, and how you test distributed systems. Because you can actually model a whole cluster of machines in a logical simulation that's deterministic. Now, you test it just like Jepsen, but the whole universe is under deterministic control. You can even speed up time. So you can like fast-forward the movie to see if there's a happy ending. If it does, great. Watch another movie. Each movie is like a seed; you know, how you can generate a Worms level. You know the Worms game, or scorched earth games would be like randomly generated... All from a seed.

**Jerod Santo:** Oh, yeah.

**Joran Dirk Greef:** And so this is just classic fuzzing, property-based testing with seeds, but you're taking these distributed systems and they're all -- the database was born to run in a flight simulator. It's deterministic. And if you can do that, you can build systems that -- you're kind of doing Jepsen, but you're also speeding up time. You can reproduce.

**Jerod Santo:** Right.

**Joran Dirk Greef:** And then once you've had that experience, you have to ask now "Do the 30-year-old systems have this level of testing?" Yes, they have 30 years of testing, but with DST, you can speed up time. So we've actually worked it out in TigerBeetle, one tick of our event loop is typically 10 milliseconds. We collapse that into a while true loop. We get a factor of 700X speed up when you take into account the CPU overheads of just executing our protocols. So we flatten everything and we execute it, and you get a 700X time acceleration. So we have a fleet of a thousand CPU cores dedicated to TigerBeetle. We got them from Hetzner. Thank you very much, Hetzner.

**Jerod Santo:** Nice.

**Joran Dirk Greef:** They're in Finland, so nice and cool... They're burning clean energy.

**Jerod Santo:** There you go.

**Joran Dirk Greef:** And a thousand CPU core fleet, they run DST 24/7... And that adds up. I mean, it is roughly 700X. It's a thousand cores, because we pay for it, dedicated. And they run -- we do a lot of work to like optimize how much we're using those cores... But it does add up to -- on the order of like 2000 years a day of test time. And but you see, now again we're simulating like disk corruption, and we're simulating things like we write to the disk, and the disk says "Yes, I have fsynced, but the firmware didn't." Or we write to the disk and the disk writes it to the wrong place. So TigerBeetle has like an explicit storage fault model. So we do assume that disks will break, but they don't only fail stop. They actually are like kind of -- we call them near Byzantine. So disks do - very rarely, but 1% in a year or two, a disk will have some kind of corruption or latent sector error. Then you get a latent sector error... A little bit less common is like silent bit rot, a little bit less is misdirected IO, where it actually just writes to the wrong place... And this can be the hardware, or the disk firmware... Even the file system.

\[00:54:30.11\] So two years ago XFS actually had a misdirected write bug. And if your database was running on that particular version of XFS and you triggered that, your database would write to the wrong location on disk. And now the question is, "Well, who tests for this?" And you almost can't, unless you're using these new techniques.

**Jerod Santo:** Yeah.

**Joran Dirk Greef:** So I don't know. I mean -- yeah...

**Jerod Santo:** It's cool.

**Joran Dirk Greef:** I guess the question was it's not enough actually to be as safe as what was safe 30 years ago. We've got new techniques, and there's a few more of them in TigerBeetle.

**Jerod Santo:** Yeah. No, I think that's super-cool. It reminds me of light bulbs, for some reason. LED light bulbs - they say they're supposed to last 25 years, or something. And I'm always like "You don't know that, because you haven't been using them for 25 years." In fact, the house that I currently live in, we're going on 10 years now, and they sold us on all LED light bulbs... And I remember as the installer was putting them in, he's like "You're never going to have to replace any of these." And you know what? I've replaced a whole bunch of them. So whoever did their testing can't do what you guys can do, which is - they can't just fast-forward time and prove that this thing's going to last for 25 years, because they haven't been building these for 25 years. But what's super-cool with this -- what's it called, deterministic simulation testing?

**Joran Dirk Greef:** Simulation testing, yes.

**Jerod Santo:** Yeah. What's cool about it is you guys can actually, just through CPU power and design, you can actually simulate all this time. And so you can claim, even though you've only been around for five years - I'm giving you all five, even though I'm sure it's technically less than that - that you've actually tested for hundreds of years, right? Like, you could just say that because you've done that work through this three-dimensional simulation that I'm imagining that you put the system through at all times. I think that's pretty cool.

**Joran Dirk Greef:** Yes. At least we're trying to get there, you know? So we would also say it's only as good as our coverage, and our combinations of coverage, and our state space exploration... But we invest so much into that as well, you know? And so it does -- because we also know how many bugs we find, and how rare they are. If you think of it like a hacker, they require like eight exploits to be chained, and each exploits is tough. And you just know that traditional software - there must be so many millions of bugs. But yet we don't find them in the real world, because they're so, so rare... But with the DST you do actually, and we find them pretty quickly. So yeah, so we wouldn't claim, but it's very strong.

**Jerod Santo:** It gives you some confidence that you wouldn't have otherwise. And I think that's very valuable. But like you said, or maybe you didn't say it, but I was thinking it while you said it - there's no accounting for the real world. So like Mike Tyson's famous statement, "Everybody has a plan till they get punched in the mouth", or something like that.

**Joran Dirk Greef:** \[laughs\] Which is how it works, right?

**Jerod Santo:** You can simulate all you want, and it's amazing what y'all are doing, but then there's the actual reality, and there's always gonna be something. And so - is TigerBeetle out there? Is it in production, in reality yet? Are people using it? What's the state of that side of it?

**Joran Dirk Greef:** \[00:57:45.24\] It is, very much so. So we had a customer reach out to us, they needed to -- I mean, we've got a few customers, but just an example of one... End of last year they reached out, they said "Look, some regulations are changing. They need massive throughput, because it can put their business ahead." We had to get them -- for like sheer business strategy, they needed to migrate within 45 days a workload of like 100 million transactions a month. Logical. 100 million logical transactions a month. They needed to migrate within 45 days from the old system. We migrated them, and they saturated their central bank limit, and they were happy, you know?

**Jerod Santo:** Nice. Yeah.

**Joran Dirk Greef:** And we pulled it off, and the system just works.

**Jerod Santo:** That's gotta feel good.

**Joran Dirk Greef:** It did, yeah. That was great, you know? And there's national projects, three different countries, whether it's for the whole national transportation system, or the central bank digital currency, or another central bank exchange... TigerBeetle is going into the current production version of that gate switch now, as we speak. But I think, just to go back, Jerod, to the DST - it's a lot like formal methods. The difference is that formal methods check the design of a protocol, so that you know that the protocol could possibly work. It's formally proven that it could work. But for me, always the challenge was, "Well, how do I know that I've just --" Because I'm not a -- I always feel like I'm getting slower every day. How do I know that I coded this correctly? I know the protocol's correct.

**Jerod Santo:** Right. Implementation.

**Joran Dirk Greef:** I know \[unintelligible 00:59:25.07\] replication, Paxos, Raft - they're formally proven, but the implementation is like thousands of lines of code. And so how do you check that? And so DST is actually checking the actual code, and the simulator is checking for split brain, it's checking linearizability, strictizability, of which linearizability is a part... And it's even checking things like fsync gate. So cache coherency - TigerBeetle's user space page cache, is it coherent with the disk at all times? Even if there's Fsync IO faults. So Postgres - they are fixing this, they're adding direct IO. If people want to find out, it's called Fsync gate, 2018, but most databases still can't survive fsync gate. They were actually patches where databases patched like MySQL etc. to panic. The problem is when they start up, they still read the log from the kernel page cache, which is no longer coherent. So actually they have to use direct IO. So Postgres has been on a long journey, laudably, to add async IO, direct IO... It's in -- I'm not sure yet, it might already be in as the default... But those are kinds of the things you need to survive. And that isn't even an explicit storage fault model, but TigerBeetle simulator is actually checking. So your simulator can reach in and check so many invariants.

But then also, I think back to what we were saying about claims and coverage, you wanna have a very buggy view of the world. So you take your four primary colors, network, storage, memory, compute, you assign explicit fault models. So compute, we say "Look, that would be in the domain of Byzantine fault tolerance, so we don't solve that." And that's explicit. Memory would be ECC; that's our fault model. And then what TigerBeetle focuses on is the network fault model, so packets are lost, reordered, replayed, misdirected. Classic Jepsen; partitions, all of that. That's what makes consensus so hard, is just solving the network fault model is almost impossible. Then TigerBeetle adds the storage fault model explicit. So you write to the disk, wrong place, forgotten, you read from the disk -- you're actually reading from the wrong place. So you'll get a sector as a valid checksum for the database, but it's the wrong -- now you need to daisychain your checksums.

And then what we do is with these -- this is sort of the buggiest view of these four. Okay, the first two, we've been explicit that we don't solve those, because they have different levels of probability. The probability of a CPU fault is astronomically more rare than a memory fault, which in turn is astronomically more rare than network fault. Maybe it's the other way around. Sorry --

**Jerod Santo:** \[01:02:17.11\] Sure.

**Joran Dirk Greef:** The rarest thing is the CPU, then it's the memory, then it's the storage, and then it's the network. So most people are just solving network, TigerBeetle solves storage. But storage is when -- at scale, it happens more and more. So 1% of disks around a two-year window.

**Jerod Santo:** At enough scale, you're gonna hit that enough times that it seriously matters, versus at small scale where you're like "Ah, we don't ever have to worry about that." Yeah, that probability thing is one of the reasons why I think logically as humans we fail often to reasonably consider scenarios... Because we think about worst case scenarios, but we don't pair that with probability of scenarios. And so it's like "What's the worst that could happen?" And for some reason - this is like off topic, but in our hearts we give that like 100% chance, right? Like, if that happens - well, let's assume it does happen. So 100% chance on that. Then it's terrible. But we don't also think like "Pair that with probability." So that's kind of what you're saying with the CPU stuff. It's like, the odds of a CPU failure - okay, catastrophic, of course, but exceedingly rare, versus the likelihood of a drive failure, for instance.

**Joran Dirk Greef:** Exactly. Drive, or network... Yeah.

**Jerod Santo:** Right. Network is probably the most unreliable at this point, I would assume, since our drives don't spin anymore...

**Joran Dirk Greef:** That's it, yeah.

**Jerod Santo:** Yeah, the network is incredibly unreliable, unfortunately.

**Break**: \[01:03:46.17\]

**Jerod Santo:** Well, while we're talking about the simulation stuff, I do want to take a quick aside and talk about something I've found that was really cool on your website. SimTigerBeetle. sim.tigerbeetle.com. This is a simulator for distributed database scenarios. It's like a game... Well, for the video folks, we'll put it up for you guys to look at. This is really cool. You can play these different games, like the Mexican standoff, the prime time, and the radioactive hard drive.

What's going on with this? This is like out of left field when I saw it. This is not -- I wouldn't expect this from you, Joran. What is this thing?

**Joran Dirk Greef:** I thought you didn't expect it, Jerod. Yeah.

**Jerod Santo:** I didn't expect it. I saw it, I'm like "Okay..." I started playing it, and it's like, it's polished, the graphics are awesome, there's sound, there's music... And it's like a game, all about distributed system failures. Tell me more.

**Joran Dirk Greef:** Maybe our team, we just enjoy TigerBeetle too much. \[laughter\] You know, it kept me company in lockdown, in COVID. That was July 2020. March 2020 I started on the Switch. It was my birthday, you know? And a week later, the world went into lockdown. And I was locked down solving this problem. July, 2020, I sketched TigerBeetle, created the prototype, many versions, and never stopped.

I don't know, maybe it's because it's out of that experience that we, as a team, we have so much fun or we really enjoy it... But some TigerBeetle is kind of an expression of that, because the feeling of our DST simulator -- the name of it is the VOPR, Viewstamped Operation Replicator. It's a homage or ode to war games. It's got the WOPR, that classic simulator in war games. And so TigerBeetle's simulator is called the VOPR.

**Jerod Santo:** Nice.

**Joran Dirk Greef:** But the VOPR for us was such an experience, you know? Switching it on for the first time... I was listening to Kings of Leon, Crawl as I switched it on.

**Jerod Santo:** \[laughs\]

**Joran Dirk Greef:** And we had been building TigerBeetle for a year, with the whole design, all careful default models... We had the interfaces designed... I knew we would do DST, and I planned it like that... A year in, it took about a week to build the first version of the simulator and then we switched it on. And just the bugs came falling out of the trees...

**Jerod Santo:** I bet.

**Joran Dirk Greef:** ...and you'd fix like five a day... And each of these was like one of those one-year bugs from before. Now you're fixing like five a day. And that experience - oh, it was just special as a programmer. I wish it for everyone. And I think people are getting into this style. But this runs in our terminal, so I did a demo to a friend for the very first time, Dominik Tornow - fantastic - of Resonate. I really look up to him in distributed systems. He's become a mentor and friend. And if I have a hard problem in distributed systems, I'll ask Dominic. But I had just met him, and I showed him our simulator running in the terminal, and I'd never shown anyone before. And he was like "Wow..." He'd done formal methods. He's like "This is formal methods like on the code." And I showed him the probabilities of the fault models for each simulation run, and he was blown away. He said, "No, you've got to tell people about this." And then I thought, "Well, how do you show this to people?" And I'm a dad, and I thought "How do I encourage my daughter?" Not encourage her, but just -- you know, how do you encourage the next generation to get excited about computer science?

**Jerod Santo:** Yeah, intrigued.

**Joran Dirk Greef:** Yeah. And to me, this was the most magical part of programming in my own journey. So I thought, "Well, let's make a game. Let's take our simulator and let's put a graphical frontend on top to hook into all these events. And then we can create different levels for people, showing them how consensus works." If there are no network failures, so everything's perfect, you'll simulate the network latencies and disks... Everything's simulated, the clocks, all of that, but there are no faults. And so it's perfect. And now you can actually just teach just normal replication through the consensus protocol. And then the next level is like, okay, now we're gonna introduce probabilities of partitions, and network faults, but the disk is perfect. And then the next level is, "Okay, disk is radioactive."

**Jerod Santo:** Yeah. Well, I played it for 5 or 10 minutes and I had a blast. It's like "Here's a hammer. You can start hammering stuff and see how it reroutes", and... Really, really cool.

**Joran Dirk Greef:** Yeah. And you know, each of those beetles that you hit, they're running -- each of them is running real TigerBeetle code, compiled to WASM.

**Jerod Santo:** Really?

**Joran Dirk Greef:** \[01:12:08.07\] Yes. It's the real code in your browser, for the cluster. When you take a hammer and hit the beetle, you're actually physically crashing the machine, and it's restarting. And you're actually getting to touch a simulated world, but against the real code, as a human.

**Jerod Santo:** That's amazing.

**Joran Dirk Greef:** Yeah.

**Jerod Santo:** I feel like, as a TigerBeetle engineer, you could just be playing that game, and Joran asks you what you're up to and you're just like "I'm working", you know? "I'm simulating some crashes here... Come on."

**Joran Dirk Greef:** Yeah. Well, I have done that... I do do that, Jerod.

**Jerod Santo:** \[laughs\]

**Joran Dirk Greef:** Sometimes, instead of doom scrolling, you just sim scroll.

**Jerod Santo:** Yeah, you might as well.

**Joran Dirk Greef:** My daughter says to me "Papa, can we play the TigerBeetle game?" And then -- but I'm glad you call it a game, because we meant it like in the walking sim genre. So it's a game that you can't win, because no matter what you do, things recover.

**Jerod Santo:** Right. You can't knock the whole system out. It's going to go back to good. It's going to find its way back.

**Joran Dirk Greef:** Yes. You actually can, if you're really lucky. When I do it in live presentations, it's never failed me. But theoretically, you could crash the cluster, because you see, those human tools allow you to inject more faults than the \[unintelligible 01:13:30.08\] tolerance. And then the system is designed to shut down safely. So you might run into that, but you would have to be very quick.

**Jerod Santo:** Yeah. Well, I was too slow in my five minutes of playing around. I wasn't quite fast enough.

**Joran Dirk Greef:** I'm also. Always.

**Jerod Santo:** But I didn't know it was possible. So now that I know it's possible, maybe I'll commit myself to shutting that system down. Pretty cool.

**Joran Dirk Greef:** Oh, but there is a game, Jerod, at the end. I don't know if you've played the credits in Radioactive.

**Jerod Santo:** I have not. No. Is this an Easter egg?

**Joran Dirk Greef:** Yeah. After Radioactive, at the end, the credits go, and that becomes like a little platform jumper game...

**Jerod Santo:** Oh, man...

**Joran Dirk Greef:** And you can jump and spin a beetle, and you do get a score. That one is quite hard.

**Jerod Santo:** That sounds amazing. I'm going to go do that after we hang up here. Two more things --

**Joran Dirk Greef:** Maybe I should just -- if I can just quickly add...

**Jerod Santo:** Sure.

**Joran Dirk Greef:** That game, it was created part-time. I met Fabio Arnold in Milan, the very first Zig meetup in Europe. He was there, and he created it part-time; just a few hours every week, with Joey Mach's Illustrator from Rio de Janeiro, Brazil; just the two of them. And they created it like very, very low budget. But they had such passion, and we then carried on and we put more into it, so it did become more polished. But that's just the skill tribute to them.

**Jerod Santo:** Cool. Yeah, I think for those who go out and give it a play, you will notice immediately - and I did - just how much love is put into something like that. You mean it when you say "We just love TigerBeetle", and this whole system because, there's custom sounds, and there's music... This is a labor of love, for sure, and a really cool way to show off what you all have built, in a way that is difficult just with our brains, as you talk about it, for me to map it onto my brain and make sense of it. But when you put it out there in that visual way, it's very compelling. So shout-out to them for their labor, and for you to keep polishing that thing up.

I did want to touch on the open source side, and kind of the business end. You mentioned some customers, you raised some money now, so this is like a serious business, but it also is an open source database... Can you talk about the give and take there, the push and pull, the decision-making process? Because we talked to a lot of people in your circumstance, and some of them have made other decisions, some of them have made the exact same decision you've made... And we're all trying to figure it out, how can we make this thing work. So tell us your side of the open source/VC story.

**Joran Dirk Greef:** \[01:16:09.04\] Yeah, thanks so much for asking that, Jerod. That was my third feeling.

**Jerod Santo:** \[laughs\] I'm hitting all your feelings here.

**Joran Dirk Greef:** My first feeling was -- yeah, yeah, yeah, but really... Like, July 2020, as the project was started, I remember clearly there were three moments. The first moment was like "Wow, this prototype is fast. It's like, the design works... Wow, this maybe could change things for the open source switch." That was it. And maybe it could change things beyond, but I didn't know. The second moment I remember was the DST, switching it on Kings of Leon, Crawl. The third moment was this wondering of -- what actually happened was we designed it to be so much safer that yes, it gained adoption within this Gates Foundation project. We won trust, and they are integrating it today. It'll power countries at the national level, who knows in how many years, but as it gets deployed. So we did solve the trust problem of being so much safer, because we designed it like that as well.

But then the third moment was people then within that project saying "This is all well, but open source is too cheap. Where's the company to support it? Where are the people that are gonna be available to service and really work?" You need open source... So this system is Apache 2 open source, and all the software it uses -- it cannot use software that isn't open source, because otherwise it just would be a non-starter. So TigerBeetle was also created -- like, contracting then, it had to be Apache 2.0. That was obvious to me open source, because otherwise you don't fulfill the mission... Which is what inspired the performance and the safety, is actually to make this really safe, because it is people's money.

So then the question was people were saying, "Where's the company to support this open source? It's too cheap." But I still -- I didn't have a clear vision of like business model at that stage. And then it became clear, as startups said to me "Open source is too expensive." \[laughs\]

**Jerod Santo:** Hmm... Too cheap...?

**Joran Dirk Greef:** So on the one hand, you have countries saying it's too cheap, and then you have startups saying it's too expensive. And I'm like "This is Goldilocks. We're just trying to make some great open source porridge, and it's either too cheap or too expensive." But nobody's saying it's free as in puppies. It's too cheap... And then I realized, okay, that's it. Business model is orthogonal to open source. Business is about trust. People trust you, at the national enterprise, and it's always about trust. That is what you sell as a business, is trust; your brand, your reputation. It's actually -- I use the word "It's brand", and I think startups talk a lot about go to market... I think it's more interesting to talk about brand. Do we all appreciate the value of brand? Because brand is trust. And I must thank my auditing professors. They used to ask us, "What do accountants sell? Trust." That's the only thing we sell, is trust that the numbers are correct.

**Jerod Santo:** Right.

**Joran Dirk Greef:** \[01:19:44.08\] Yeah, so business is about trust, and it's also about value. And so startups - they want a push button experience. "Who will run TigerBeetle for me?" Because that can make it cheaper for me than if I had an engineer do three months of work around the SRE of a database.

**Jerod Santo:** Right.

**Joran Dirk Greef:** So you can actually have a business and sell something that's gonna make something cheaper for startups. And similarly for enterprise, you can have a business and sell something that is going to provide the value they need, which is - now, they might have SRE teams, but they need the infrastructure to support massive scale, like Petabytes. How do you connect TigerBeetle to object storage S3. Like, OLTP data lake; not only OLAP data lake, but let's just connect the OLTP direct to S3.

And so this comes to your question about the tug of war, and licensing, and all of this. And I think the big mistake that we can make - and I used to make this until it became clear for me that third moment - was that an open source license affects the implementation, not the interface. But when it comes to competition in the business world, that doesn't happen at the implementation. Typically, it happens at the interface. So if you think of like some of the fiercest competition, when things were really on a knife's edge for the web, it was the interface, not the browser implementations. It was the interface that the war was fought. Mozilla fought that war, and we needed other browsers to fight it, because the interface was being embraced, extended and extinguished. Triple E. And then you think of like Android, and Java, and again, it wasn't about the Android implementation, it was the interface. And that was that Oracle/Google lawsuit, you know? And then again, you think of like "Well, Confluent --" Kafka's Apache 2.0 open source.

Then Red Panda came along - and I'm a huge fan of Red Panda, because very similar design decisions around being direct with the hardware, static communication... All of this very, very similar. We came from a similar time period, but in that time period the things were changing, how you built things. But Red Panda came along and they saw the open source implementation of Kafka and said, "Well, thank you, but we don't want it. But that interface, that is great. That's where our business will be also. That interface, thank you very much." And so they built a massive high-performance implementation.

And then WarpStream came along and they said, "Well, Red Panda, you are business source license, not open source source available. Confluent or Kafka, you are Apache 2.0 open source." But that's all implementation. I'm gonna do my own implementation, thank you very much, of object storage. But the interface - great. Okay, now we're all competing. And so I think the myth is that source available was kind of the thing that always -- I always feel that something inside of me dies when I see a great company relicense, or when I see a young startup follow that lead. Because to me, source available says that "We think it's gonna stop competition." It doesn't. You may as well be on the beach, building little moats and sandcastles, but innovation technology is like a wave. It'll just find a way around you. It'll WarpStream around you. You can't legislate competition away. And we shouldn't be trying to build companies where we think the success of the company is us creating a monopoly. The world's too big. There's too much for you to be -- you don't need monopolies to do really great. And that doesn't build trust, to say to your customers "You can only buy from me."

So I think people think it stops competition, and they think it helps them sell, and it actually defeats both of those, because you get complacent, and you actually fail to build trust. So you burn trust when you relicense, and if you start source available, you're gonna be doing diligence with enterprising and say "Sorry, you're not open source." It's license confusion, you know. And maybe some people get it, but there's a little 1% headwind. And it's actually - it's a category error, because you're spending so much effort chatting to people about implementation licensing... And the rest of the world is competing on interface. And TigerBeetle's interface is quite simple. Very simple.

\[01:24:30.17\] So we could -- I don't know, whatever license we apply, it doesn't matter. Debit/credit is where we compete. There are companies that offer debit/credit as an API and it's very similar to TigerBeetle. But we compete on trust. We didn't just take a general purpose database and slap on debit/credit. We went deep; we really cared and we built the whole thing.

And people pay us. So before we were a company, we had an energy company reach out and we landed quite a good contract, very quickly. And I think it came down to trust. So open source builds trust. So open source is great for business. It's also orthogonal.

I think the other thing is if you -- so there's a lot of things in TigerBeetle that are like the... I had done many experiments of my own, my passion projects. They're all in TigerBeetle. Many parts of the design of TigerBeetle come from these various experiments that I did. And so I was never going to put that all into a project if it's not open source, because it's just too valuable. I want to always be able to play with it no matter what happens to it. And I think we all feel like that, like our critical infrastructure just has to be open source. So yeah, I think that's kind of how I think of it.

**Jerod Santo:** No, I think that's a great perspective, and a specific explanation that I haven't heard previously, so I definitely appreciate it. I'm mulling on it. I think I agree with most of what you said. And the implementation versus interface dichotomy is one that I hadn't considered that explicitly, and I need to think through it more. So I appreciate your thoughts on the matter.

Question is, what happens? You know, Apache 2.0, your heart and soul is into this thing... What do you do? How do you respond if and when AWS comes by and says "TigerBeetle by AWS, for sale now"? Does that scare you? Does that threaten you? What do you think about that scenario? Because that's what a lot of people are concerned about most specifically.

**Joran Dirk Greef:** Yeah, so I think one can try and stop it. You can build the castles in the sand... Or you can just say "Look, the wave is inevitable. It's coming. Let's prepare for it." So what we do is we get the surfboard ready...

**Jerod Santo:** \[laughs\] And you ride the wave.

**Joran Dirk Greef:** ...and we're on the beach, we're waiting for it to come.

**Jerod Santo:** Okay.

**Joran Dirk Greef:** And actually, we're already paddling up, and there's the swell. The wave will take its time to catch up, but we're already surfing. And so there are gonna be -- we just get into the water and... It's like we could have the cavalry in the castle, or we could get them out into the field and have great cavalry, and great user experience. Like, let's compete on -- let's actually add value and serve the community honorably at a profit. Let AWS catch us in that. And great. If they decide that they couldn't build a debit credit database as well as TigerBeetle so that they offer it as their OLTP flagship database, TigerBeetle - well, that builds trust. A rising tide lifts all boats, and now we're surfing the wave with AWS.

**Jerod Santo:** You're swimming. You're out there, surfing. I love it. I love it. I think it's a great way to think about it. Because like you said, the wave is inevitable, so you might as well prepare for it. You might as well ride it; ride that wave.

**Joran Dirk Greef:** Yeah. And I think also we've seen this play out a few times, that source available doesn't stop at AWS. So if it's valuable enough, they'll write the implementation. If you relicense, they will immediately fork your community. Now you've got two problems. They're still competing, and now they lead the interface. And that's when it's fatal for a company.

\[01:28:22.29\] When I see them relicense and you see the classic AWS, I think "Oh, gee, they did it". Yeah, that's actually the thing you don't want, is when your open source clients are being bought up and being led now. Yeah, but I love AWS. I love their work. I've learned so much from their distributed systems. I've got friends that work there... So really to me that isn't the threat. The threat is -- you know, what's the problem with the world? I am. We are as a team.

**Jerod Santo:** Sure.

**Joran Dirk Greef:** So the threat is really that we stop investing in performance and safety. We stop being trustworthy, building trust.

Maybe we should say Jerod too, is that your product is more than the open source. There's a principle here, too. I think it works both ways. If we connect TigerBeetle to a proprietary API, proprietary interface, our principle as a company is that's viral. So if someone wants to license their interface as proprietary, our connector will be proprietary. For example S3, if we connect to S3 for massive scale, then we charge for that, fairly. We make our honest profits; so serve the community honorably, at a profit. There must be a profit, because there's entropy in the world.

**Jerod Santo:** Sure.

**Joran Dirk Greef:** But if something's open source, we'll then reconnect it. And there's lots of -- just like people would pay Amazon for Aurora, because there's a great value in all the management around Postgres... Again, porridge is too hot or cold. So we'd be curious to get your thoughts once you've thought about it, and I can sharpen the argument... Because I really think we need more founders need to stand up... And we've all been given a lot from the previous generation of open source, and I think it would be great if we all say "Okay, we're gonna pay it forward as well. Make a technical contribution." There's no reason not to. I think it's better for business, actually.

**Jerod Santo:** No, I definitely appreciate everything you said right there. And I will be listening to it back as we produce this and consuming it more. I love the surf the wave analogy. That's where you really sold me. So so far I'm amenable to your argument, but I'm very easily convinced on the air here. Is there anything else TigerBeetle or otherwise that you wanted to touch on, that I haven't brought up yet? It's been a great conversation.

**Joran Dirk Greef:** Yeah, no, I've loved it too. I mean, I guess we should say we wrote it in Zig, this new systems language.

**Jerod Santo:** Oh yes, I didn't bring up the language wars yet. We have to get our clip, because the flame wars must rage on. You wrote it in Zig, I assume from the day one; it was a day one decision. And you are probably happy with it, since you just brought it up now. So Zig for the win, it sounds like. Is that your overall message? You love it?

**Joran Dirk Greef:** Yeah, it was also just a big wave. You could see the swell, and you're like "I'm going for that wave..."

**Jerod Santo:** You're hopping on that wave. Yeah, it's been a good choice so far.

**Joran Dirk Greef:** Yeah. When Node.js came up, I jumped on, because it made sense. And then I was really happy that I did. And when I saw Zig come, I thought "Well, it's not often that you have these moments." Rust was another one. But with TigerBeetle the timing meant that -- you know, we could have caught the rust wave, but there were so many thousands on already. We would have been a drop in the ocean.

\[01:32:06.23\] Also, we wanted to do static memory allocation, and Zig is actually really ideal for that. It's really perfect for the TigerBeetle design. It would have been much harder to do our intrusive memory patterns, and direct hardware access \[unintelligible 01:32:20.25\] zero copy. Two of our team -- one of our team is actually the co-founder of the Rust language, Graydon. He was the project lead, Brian Anderson (brson) at Mozilla. His desk was next to Brendan Eich. And he's writing our Rust client in Zig. Well, in Rust, sorry; he's writing it in Rust.

**Jerod Santo:** Okay. I was like "Wait a second..."

**Joran Dirk Greef:** But he writes Zig normally. But he's writing our Rust client. And then Matklad is the creator of Rust Analyzer and IntelliJ Rust. He joined the company -- he's basically like a co-founder. So there were a few of us... And my senior partner from Coil - not many people know, but he came with, and Matklad, Federico, Rafael... But they sort of are the core team. And Matklad joined -- he wrote a blog post called "Hard Mode Rust", trying to do static allocation, very similar patterns. And then Jamie Brandon introduced us. And Matklad was like "I've been trying to do this in Rust", and they're like "But Tiger-style - our way of coding in TigerBeetle, Tiger-style... We've got our engineering methodology written up."

**Jerod Santo:** Oh, really? Can you link me up to that? We probably don't have time to go into detail, but I'd love to read it. Tiger-style you call this?

**Joran Dirk Greef:** Tiger-style, yeah. And that's sort of all the safety techniques. So assuming that we do still have bugs, we also have like 6,000 assertions that check the operation of TigerBeetle in production. If any one of them trips - it's like 6,000 tripwires - then there's probably maybe a CPU fault, or a memory fault, or a bug. And then we immediately shut down the whole database. You wanna operate safely, or not at all. And that way you get total quality control, and the system becomes safer and safer. You don't have latent bugs. Yeah, so Zig really suited not only the performance, but also some of the safety decisions.

**Jerod Santo:** Right. It wasn't merely the trend. There's also technical reasons that you chose it.

**Joran Dirk Greef:** Yeah, I think we picked Zig before Bun. The only other major Zig project at the time was River, by Isaac Freund, a Wayland compositor. Amazing, amazing programmer, Isaac. He contracted on TigerBeetle for quite a while. And then it was TigerBeetle, and then Bun... Also Mach engine was around the same time as TigerBeetle... But we really just picked it because I was doing a lot of C code, and Zig was just a perfect replacement for C, and for these new memory patterns. That was it, yeah.

**Jerod Santo:** \[01:35:13.22\] Very cool. Ahead of the wave on that one. You were an early adopter on Zig, and probably one of Zig's - I don't know if largest codebases, but maybe most production grade and out there, successful projects to date. Would you say that's fair?

**Joran Dirk Greef:** I would say yeah. Bun is also pretty massive...

**Jerod Santo:** For sure.

**Joran Dirk Greef:** There's also Ghostty, by Mitchell Hashimoto, which is like incredible code. His performance work there is very similar, trying to get as close to pure memory bandwidth as you can. So he's making a terminal... How can you make that as close to memory bandwidth performance?

**Jerod Santo:** Right.

**Joran Dirk Greef:** Which is also what we think with TigerBeetle, and same as Jared with Bun.

**Jerod Santo:** Yeah.

**Joran Dirk Greef:** And I think that goes back to what we were saying, the love for that \[unintelligible 01:36:04.19\] that you see. We're actually trying to show what it feels like if you're coding in open source, because we've really crafted everything. You may as well enjoy... And this sort of came from Antirez; his craft of Redis impacted me a lot.

**Jerod Santo:** Well, speaking of all these things, we just put a clip out today as a record of our conversation with Antirez, which was just a couple of weeks back. And did you know he's hard at work trying to get Redis to be open source again, inside of Redis Inc.? He's advocating.

**Joran Dirk Greef:** Oh, wow.

**Jerod Santo:** He's returned to Redis, and he thinks he can get the company culture moved in a place where they'll get switched off of that proprietary new license, and... Probably AGPL, but I think you'll find that good news, considering your stance on open source. I'm excited about it. Hopefully that happens.

**Joran Dirk Greef:** That's great. And again, I should be clear - I love open source also because I love how it enables business, businesses. So I actually think it's great for business. I don't just like open source because I like it, you know. But I actually think it is better for trust, for sales... It makes everything easier. But yeah, that's fantastic news. I can't wait to listen.

**Jerod Santo:** Yeah. Cool, cool, cool. Well, Joran, I appreciate you coming on the show. I'm fascinated... I don't have any use cases for TigerBeetle in my life, but I respect it, and I'm sure our audience will enjoy this conversation as well. So appreciate your time, appreciate your work, and your perspective on open source and business, which is refreshing, especially in a sea of people who are kind of moving away from your perspective. But maybe back again. We'll see. I mean, Elasticsearch is back, maybe Redis is coming back... We'll see what happens, but I appreciate you coming on the show.

**Joran Dirk Greef:** Yeah, there's always a new wave to come. Yeah, and I appreciate you too, Jerod. Thanks so much for this. It's been really, really special.
