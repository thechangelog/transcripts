**Jerod Santo:** Alright, we have Nikita here to talk about serverless Postgres, a hot topic these days. Welcome to the show, Nikita.

**Nikita Shamgunov:** Thank you. Glad to be here.

**Jerod Santo:** We're happy to have you. I think we last talked Postgres with Paul from Supabase, and in that conversation we started talking about what would a cloud-native Postgres look like, or maybe what would a serverless Postgres look like... And he said a lot of the same words that I'm reading on your guys' homepage. You are with Neon, CEO,  neon.tech... Very cool technology out there, that's still getting started. Do you want to tell us, from your perspective, what serverless Postgres means?

**Nikita Shamgunov:** Well, absolutely. I think there are several parts to it, and the first one starts with the user experience. When you go and provision Postgres anywhere else today, maybe sans AWS Aurora Serverless, you go and choose the size of your instance. And then you are part of what is called a subscription pricing model, where you say, "Well, this is an instance of size small, to large, to extra large, and this costs you X amount of dollars per month." This is called subscription-based pricing; you're committing to a certain size, and then let's you pay for. In this serverless world, you don't choose the size. You just say "I need Postgres", and then the system right-sizes the amount of resources that you consume, and all you get is a connection string. And now you're just connecting your app to the database, and you don't need to think about sizing at all, and you don't need to think about the fact that you're paying something that you're not using. And that's what it's called consumption-based model, or consumption-based pricing.

Now you push the button, you've got connection \[unintelligible 00:05:44.28\] and whatever you use, you're paying for; whatever you're not using, you're not paying for. And where it's getting super, super-convenient is in the various development, staging, side project environments. Because usually, you have a production database, and that powers your app. But then you have - I don't know, tens, potentially, databases out there for various stages of your environments. And so if your environments are different, then your test coverage is not the same, the properties are not the same. And if you make them all the same, then you might be spending a lot of money by having full copies of your production environments for various parts of your development process.

So that's, I think, what fundamentally serverless means. There are lots of shades of grey to it, and serverless typically becomes a part of a software infrastructure architecture to deliver all such properties.

**Jerod Santo:** So serverless isn't new conceptually, or even -- I mean, it's newer in the market, but serverless things have been out there for a while. From your perspective as somebody who's now building a tool and a business in the serverless world, has adoption been as expected? Or has it been slower? Are people moving to serverless things? Or is it mostly like small and indie people getting started? Tell us what you see.

**Nikita Shamgunov:** Well, I think it depends on the stack. Databases are usually kind of the last one to the party, and the reason to that is it takes a good amount of hardcore engineering; the development cycle is longer when it comes down to databases. But let's say in the frontend world - people are there, If you look at platforms like Vercel and Netlify, or CloudFlare Workers, this becomes the dominant way of deploying frontend code. It's completely serverless, your JavaScript project is packaged, passed into the platform, and deployed around the world in a CDN-like manner, in multiple data centers around the world; traffic is routed to the local data center, and that drives latencies down.

Then there's the backend code and the database. And when we start thinking about the backend code, we're seeing somewhat similar dynamics. My favorite company here is fly.io. You should have them on the pod if you haven't already...

**Adam Stacoviak:** We know them well.

**Nikita Shamgunov:** \[08:11\] You know, similar things, right? So you deploy your app into Fly, and they are able to deploy that app around the world. They don't do serverless, but I think they will over time. They already have machines that can scale down to zero, and stuff like that. So now the question is, "Can we can we have that in a completely elastic way over time?" This scaling down to zero is a big deal, for all the things that we've talked about before.

Finally, there's the database. You have a frontend and a backend database. That's the majority of the apps that need all three. Now, the tricky thing about databases is - well, you either build a completely new one from scratch - you know, DynamoDB, or something - or you take advantage of something that is extremely popular, like Postgres, but then it's much trickier to make it serverless, because Postgres is a package; it has storage, compute, metadata, all in one box. And then in order to make it serverless, you need to cut the system in the right way; and what we did - we separated storage and compute.

The adoption has been phenomenal. And when we announced the system, just in June, we now have close to 10,000 users coming into the platform and signing up for this system. And we haven't even lifted the invite gates. So we are onboarding people in batches, and we're seeing a lot of interest of people coming into the platform and using the system. Granted, all of that is free right now, which is attracting a lot of tire kickers and people who are just trying things out... But we are in communication with those folks. They're filling up surveys and we are engaging with them directly... And so we see a lot of excitement around serverless. That excitement can be probably split in three categories. The first one is "I'm an indie developer. I just want something cheap or free" or whatever. And some of that is a Heroku fallout as well. Another use case is, "Well, I'm doing a lot of software development. I need this developer environment." So that's where scaling to zero, branching (it's another thing that we bring to the table) allows you to very easily create developer environments and don't sweat bullets that you can just like over-create those developer environments and forget to turn them off, because they all scale to zero.

And finally, we see professional, like bigger organizations that are saying, "Well, we are an RDS, but it's getting extremely hard to deal with Amazon. We just want simpler, we need more reliable, and we need something that plugs into the next-generation infrastructure", which is the Vercels of the world, which is AWS Lambda, and which is something like Fly as well. So that's where we see kind of the categories of people coming in.

There are other serverless offerings on the market, I think namely Planet Scale and Aurora. When I started the company, I had a little bit of an insight into AWS Aurora, and they always track; they build something and they see how much of an impact this is to the overall business. And when they shipped Aurora serverless v1, which is their first implementation - now they're on the v2, which by the way, doesn't scale all the way to zero... But that thing took off like there was no tomorrow for Aurora. So that was a big deal and a signal for me then, figuring out how to build a dominant OLTP cloud database.

**Adam Stacoviak:** It might be obvious why it took off, but in your opinion, why is this space in particular growing so fast?

**Nikita Shamgunov:** Yeah, I think it's friction and costs; it's as simple as that. It's friction, it's cost, and then that's what people want. People want Postgres. So there's this famous website for database people called DB-Engines Ranking, and then if you go on Google and type DB-Engines Ranking and you see what's going on in the top five databases, you will see that those top five are MySQL, Oracle, SQL Server, Postgres, and MongoDB. These are the top five databases in the DB-Engines Ranking.

\[12:20\] Out of the top five, only Postgres is growing. So in addition to convenience, and not thinking about sizing, and provisioning, and stuff like that, and cost... And cost comes mostly from the fact that you architected the system such that you never overpay for resources. There's also we're in the right trend lines with regard to Postgres. There's just more and more Postgres out there, and people want Postgres.

**Adam Stacoviak:** It kind of reminds me of that GitHub analogy I had way, way back in the day with Tom Preston-Werner. And this is like, literally, months after GitHub launched; it was a whole different podcast, a whole different Adam, a different era of life... But one thing Tom said about GitHub early on about their success was there was permission to mess up. So if you reduce the friction and reduce the cost, it's your - not so much permission to mess up, but permission to explore, and to be creative. Because you can creatively use something serverless if it spins down to zero, or virtually zero in the case of Aurora, or whatever. That's the thing - I think if you give developers that experience, then they're going to play more often, they're going to create developer environments... "This works great here, let's use it in production, obviously..." But if you give people the option to have a better experience, and play, cool things happen.

**Nikita Shamgunov:** You're precisely right. And this feature that we have -- well, the two features that we have on the platform, one is branching... So you can branch, and now that creates a completely isolated environment, from your standpoint. Now you can read into that environment, write into that environment, you can put a lot of traffic onto this environment, and you will not impact your production branch. And so that's kind of one. That's permission to mess up number one.

The second one is Time Machine. Even if you messed it up in your core database, you can go back and restore it to what in Git would be the commit. And in the database world, in the Postgres world, that's called Restore Down to the LSN, which stands for log sequence number. If you go and drop a table, drop table users - I'm not recommending to do this to anyone, but in the world that you did, with one command in Neon you can roll back to right before when you dropped that table.

**Jerod Santo:** So that's all cool. First of all, how about merging? We have branching; can we get merging? Can I roll it back in, like "Yeah, let's go ahead and merge this"?

**Nikita Shamgunov:** Yeah, merging is tricky. \[laughter\] I think -- so we're watching that space. So first of all, merging - even before you want to do a merge, you probably want to understand what changed, and then in Git there's a diff, git diff. In databases there are new tools like data diff coming from this company Datafold. It's an open source tool. And the other thing to understand, which is important, that in databases there's data changes and schema changes. And oftentimes, there's a notion of a migration, that Prisma for example has, or various ORMs have, where really what you want to do is to roll forward a particular schema into the production environments.

So the right workflow is the following... Here's my production database; I want to build a feature that potentially changes and messes up the schema. I'm going to branch that production environment, I'm going to make all the changes, which creates a test environment, or dev environment, for that matter. I'm going to make all the changes in the test environment. In the meantime, your production environment moves forward. There are more and more changes that are coming in because your application is live. And then you diverge both on schema and you diverge both on data.

\[16:08\] But really, what people want to do for the most part is just roll on that schema, not the data. And I think that is the workflow that Prisma supports, and I think we will eventually introduce it into the core system at Neon, where for every commit we will be recommending developers to create a branch that will integrate with all the platforms, including GitHub as well, with GitHub Actions and whatnot. And then the analogous of a pull request and merging the pull request would be merging the schema, but not necessarily the data.

**Jerod Santo:** It makes sense, it makes sense. So elastic compute makes sense, and scaling down because you have like ephemeral on-demand resource usage, right? Like, all of a sudden, I have to answer a bunch of HTTP requests, and so my server has to do stuff, and then everybody leaves, and my website doesn't get any hits, and I could scale that down. With databases, if I've got a one-gigabyte database, it's just like, it's always there. I mean, all that data is there, and I could access any part of it at any time, or I need to... And we don't know which parts. So I have a hard time with database scaling to zero, unless you're -- I don't know, just like stomaching the cost... Or tell us how that works with Neon. Are you just stomaching the costs of keeping that online, or are you actually scaling it down?

**Nikita Shamgunov:** We're actually scaling that down. Let me explain how this works, and it may get quite technical. The first thing is what should be the enabling technology of scaling that down? If you're just kind of thinking, "How would I build serverless Postgres?" and if you ask a person that is not familiar with database internals, they would say something like, "Well, I would put it in the VM maybe, or I would put it in the container, I would put that stuff into Kubernetes... Maybe I can change the size of the containers..." The issue with all that, as you start moving those containers around, it will start breaking connections, because databases like to have a persistent connection to them. And then you will be impacting your cache. Databases like to have a working set in memory, and if you don't have a working set of memory, you're paying the performance hit by bringing that data from cold storage to memory.

The third thing that you will find out, that if the database is large enough, it's really, really hard to move database from host to host, because that involves data transfer, and data transfers are just long and expensive. And now you need to do it live, while the application is running and hitting the system. And so naively, you would arrive with something that you kind of proposed, like just stomach the costs. There is a better approach, though... And the better approach starts with an architectural change of separating of storage and compute.

If you look at how databases, storage works at the high level, it's what is called a page-based storage; all the data in the database is split into 9-kilobyte pages. And the storage subsystem basically reads and writes those pages from disk, and caches those pages in memory. And then, kind of the upper-level system in the database lays out data on pages.

So now you can separate that storage subsystem, and move that storage subsystem away from Compute into a cloud service. And because that storage subsystem operates is relatively simple from the API standpoint - the API is "read a page, write into a page", then you can make that part multi-tenant. And so now you start amortizing costs across all your clients. So if you make that multi-tenant, and you make that distributed, and distribute key-value stores - you know, we've been building them forever, so it's not rocket science anymore - then you can make that key-value store very, very efficient, including being cost efficient. And cost efficiency comes from taking some of that data that's stored there and offloading cold data into S3.

\[20:13\] Now, then it leaves out compute. And compute is the SQL query processor, and caching. So that, you can put in a VM. We actually started with containers, but we quickly realized that micro VMs such as Firecracker or Cloud-hypervisor is the right answer here. And those micro VMs have very, very nice properties to them. First of all, we can scale them to zero, and preserve the state. And they come back up really, really quickly. And so that allows to us to even preserve caches, if we shut that down.

The second thing that allows us to do is live-changing the amount of CPU and RAM we're allocating to the VM. That's where it gets really tricky, because we need to modify Postgres as well, to be able to adjust to suddenly you have more memory, or shrink down to "Oh, all of a sudden, I have less memory now." And so if you all of a sudden have less memory, you need to release some of the caches, and release this memory into the operating system, and then we change the amount of memory available to the VM. And there's a lot of cool technology there, with live-changing the amount of CPU, and there's another one that's called memory ballooning, that allows you to, at the end of the day, adjust the amount of memory available to Postgres.

And then you can live-migrate VMs from host to host. Obviously, if you put multiple VMs on a host, they all started growing, at some point, you don't have enough space on the host. Now you do make a decision - which ones do you want to remove from the host? Maybe you have a brand new hosts available for them, with the space... But there is an application running, with a TCP connection, hitting that system&gt; Storage is separate, so you only need to move the compute. And so now you're not moving terabytes of data with moving Postgres, you're just moving the compute part, which is really the caches, and caches only. But you need to perform a live migration here. So that's what we're doing with this technology that's called Cloud Hypervisor, that supports live migrations. And the coolest part is, as you're performing the live migration, you're not even terminating the TCP connection. So you can have the workload keep hitting the system as you change the size of the VM for the computer up and down, as well as you can change the host for that VM, and the application just keeps running... So yeah, that's kind of super-exciting technology.

**Jerod Santo:** So do you have your own infrastructure that this is running on, or are you on top of a public cloud, or how does that all work?

**Nikita Shamgunov:** So we are on top of AWS. We know that we need to be on every public cloud, and that's where the users are... Now, this question kind of hits home a little bit; the cost can be at least ten times cheaper if we use something like, I don't know, Hetzner, or OVH. And in our architecture, it's super-important to have an object store as part of the architecture. So Amazon S3. And in the past, there was no alternative to S3. Like, no real alternative. But just a few weeks ago, Cloudflare released R2, and they made a GA. And all of a sudden, you can put cold data onto R2; we still don't know what the real reliability of R2 is, but I trust that Cloudflare will get it up there eventually. And that opens up all sorts of possibilities.

The other one that we're looking into closely is Fly. We even have a shared Slack channel with Fly.io. I think it's a fantastic company, and I see a day where Neon will be running on Fly infrastructure as well.

\[23:52\] Now, all that said, as of right now, right now we're only on Amazon, and we'll be adding another cloud. In which order, and what's going to come sooner, Fly or Google, for example, I can't really commit to, because we are continuously evaluating.

**Jerod Santo:** Yeah. So when you say move data off to S3, how do you deem data as cold on your customers' behalf? Because there have got to be some smarts in there.

**Nikita Shamgunov:** Yeah, there's a lot of known algorithms, and they're mostly caching algorithms. So it's already happening today a little bit in Postgres; there is a buffer manager, a buffer pool... I'm maybe mixing SQL Server and Postgres terminology here, because my background is SQL Server. But the architecture is similar, where the buffer pool has a counter for every page, and it refreshes the counter of the pages touched... And then the algorithm kind of sweeps the cache and decides which pages haven't been touched for a while, and then evict them from the cache.

Here we're adding another tier, in the remote storage. We also track pages, and you see which pages have been touched recently, and which have not been, and then you offload those pages onto S3. There is a caveat, however; S3 does not like small objects, and a page is 8 kilobytes. So we need to organize those pages into some sort of data structure that will bucket those pages together, so when we throw those pages onto S3, we throw a bunch of them together in a chunk. That data structure is called an LSM Tree, and that's the implementation of LSM tree that we built from scratch in Rust, and that's integrated with S3 offloads \[unintelligible 00:25:37.21\] to S3. It's kind of like several use cases. One use case is a very large database; if you have a very large database, chances are large portions of that database are never even touched. So over time, some of that data - maybe it's the data from like, I don't know, five years ago, and you don't really need it, but you're keeping this there because it doesn't cost you much, and it's better to have them for occasional use that not have at all, or put them in a different system.

And the other use case is you have a big fleet of databases; a lot of them are scaled down to zero, because you just have them for occasional usage, and now if you keep them hot, that will start to add up both on the compute side, and on the storage side. Storing all that data into SSDs is a very different economics than storing all that data in S3 in a compressed form. So these are the second place, where integration with S3 can drive much better economics.

**Break:** \[26:38\]

**Adam Stacoviak:** So Nikita, this is obviously groundbreaking, to get serverless Postgres. You mentioned the architecture of separating compute from storage, and you've got developer experience, which is crucial, right? Built for developers, made for developers is kind of key. That's what makes this a hot space. How in the world do you get the recipe right though? You've obviously cracked the nut, but how do you get the seemingly infinitely hard infrastructure aspects of it to build it, and then build it, and then actually make it work?

**Nikita Shamgunov:** Yeah. So while some of that comes from experience - so I spent a good amount of time in the database space. And Single Store is a database that built every part of the database from scratch in C++, including separating of storage and compute, and including a hardcore analytical query processor, including distributed transactions, and stuff like that. So in a way, there's a lot of lessons learned, both from SQL server, from Single Store, from reading all the papers, and then actually the part of walking the walk and doing that.

So there isn't much magic in this, actually... We need to have a strong team, that deeply understands the underlying system. In this particular case, this is Postgres proper, plus the new storage that we're putting together. There is a continuous process of building the team and shipping software. And that is set the goals, build the thing, make sure it's robust and reliable, put effort into testing the system, put effort into software practices that are around that, and be confident in the architecture itself. So the confidence -- because that's like the hardest thing to change. The hardest things to change is the architecture is wrong, and you need to change the architecture, and now large swaths of code need to be rewritten. And the other thing is to get out of the pickle if you got the quality wrong. If the quality is wrong, then it takes -- you keep fixing the bugs, but they don't seem to stop. Yeah, it's really no magic...

**Adam Stacoviak:** It seems magical. It seems magical from the outside.

**Nikita Shamgunov:** You know, SQL Server, Postgres itself - any large system project, I think, is going through that. There's a certain amount of maturity that the project needs to get through to achieve dominance. The faster you get through this, the better; the more people use it as you do this, the better. And that's why we rolled out the system for people to use for free, because now the stakes are lower, and then we are fixing things on the backend very aggressively.

**Jerod Santo:** Are you running a fork of Postgres, or is it stock Postgres?

**Nikita Shamgunov:** So it's stock, -ish. I guess it's stock Postgres with a caveat. So what's the caveat? Well, we have to change Postgres in a very surgical matter, and specifically where Postgres reads a page from disk, instead, it needs to read a page from our remote storage by making an RPC call. And when a Postgres writes into disk, and sends what is called a wall record, write-ahead log record, instead of writing to disk, it needs to send it over the network into our service, into our multi-tenant service. Those changes are not huge, but they're there. We've split those changes into five separate patches that we are submitting upstream. They have not been accepted yet, but we're working with the community for it to all get upstream. And once those patches make it upstream, I'm really hoping for Postgres 16. If not, that will be Postgres 17. We are working with the community on that; the community understands that we're not the only ones... There's also Aurora, there's also some projects in China that are exploring similar architectures... And those will benefit from this.

\[32:05\] I mean, it's not a secret to the Postgres committers either, that separation of storage and compute is the right way to go into the cloud. So that gives me a good amount of confidence that the patches are going to be accepted, but I cannot claim or guarantee that they will be accepted, because we need to get the buy-in of the community.

There are multiple Postgres hackers on the Neon team, including one of our founders, Heikki Linnakangas, who is a quite prolific Postgres committer himself. So he's spearheading that effort of packaging the changes that we made in Postgres, and sending them into the community for the final acceptance.

**Jerod Santo:** How much of your other work could potentially make it upstream, or could potentially be duplicated effort as Postgres core team decides "This is the direction that Postgres needs to go"? Is there a lot of overlap there?

**Nikita Shamgunov:** It's actually relatively little, believe it or not. This storage part is a completely separate project. It is open source. I wouldn't mind if it was a part of Postgres, but obviously, that's a very long-term project, and it needs to reach certain stability. If you look at the storage project on GitHub, which by the way, is distributed under Apache 2.0 license, so anybody can do whatever they want with the code, it's a very actively-developed project. There are 10+ commits every day that are going into it. So I think building that storage by the Postgres team is off-strategy for Postgres, or it seemed that way for Postgres proper. Integrating with a storage subsystem like this is absolutely on-strategy for Postgres.

So if what you're suggesting, the Postgres community realizes that, "Well, we want to have a distributed cloud-native storage system", I think Neon would be the best candidate, because by that time, it's a fairly mature system, it's truly open source, it's Apache 2.0 licensed; we can rename relicense it into a Postgres license, if Postgres wants that to happen... And that becomes a standard and a part of Postgres.

Now, while that's possible, I think it's kind of unlikely. I think the Postgres community will continue building Postgres and the Postgres engine, and make sure that Postgres plugs in into Neon storage, and they will look at it as kind of the ecosystem play.

**Adam Stacoviak:** In terms of how you patch Postgres - does it have to be a patch, or could it be an extension? Is this something that can live in --

**Nikita Shamgunov:** It's a mix.

**Adam Stacoviak:** Yeah?

**Nikita Shamgunov:** Yeah, it's a mix. There are five patches... And the reason there are five patches is they are just -- they're touching different parts, so we're just splitting. It could have been one patch; it would have been just bigger. But that makes it more palatable. And then the majority of the changes... So you take stock Postgres, you apply those five patches, and you need an extension, the Neon extension. So that's how the overall system works. The extension from the lines of code changed has the most lines of code, and those five patches are relatively small.

**Jerod Santo:** So how much work would it take for somebody to stand up some of the open source stuff that you have? I mean, are the patches out there? I assume that they're trying to get upstream there, somewhere to be seen... But is that possible? Like, if I could stand up and run my own little Neon cluster for people, or something like that?

**Nikita Shamgunov:** Yeah, you can. For sure. So you will need Kubernetes...

**Jerod Santo:** Okay, I'm out. \[laughter\] No, I'm just joking.

**Adam Stacoviak:** And done.

**Jerod Santo:** \[laughs\] No, keep going. I'm just messing with you.

**Nikita Shamgunov:** You can stand it up on your laptop, and so you will get branches if you did that. But if you want to stand up a service with like multiple computes, and all that, you will need Kubernetes. And it's all doable, but it will require some work. But consuming this, if you just want to consume it, that's trivial. You push a button and in three seconds you have Postgres?

**Jerod Santo:** \[36:07\] Yeah. That's what I'm more likely to do, personally. But there are people out there who love to hack on these things...

**Nikita Shamgunov:** Yeah. And there are also larger companies. For example, we were talking to a Fortune 500 company, which have -- I think they're spending 100 million dollars in Postgres just on the infrastructure underneath, a year...

**Jerod Santo:** Wow.

**Nikita Shamgunov:** ...and that multi-tenant storage approach, and scaling down computes to zero can make a massive difference in their deployment. And by the way, I don't think it's the only company that's doing that. There's a lot of companies that use a lot of Postgres out there.

**Adam Stacoviak:** In that scenario, you said before there's parts of the database that don't get used... So it's like old data. So it's there in the database... How does that work to sort of take that away from the cache, and as you say, evict it from the cache? Would you just keep certain parts of the database alive, essentially, and some of it just goes off the cache?

**Nikita Shamgunov:** It's the data, some of that data goes off to cache. So think about memory, disk, and there's fastest like SSD, and then S3. And those are the tiers. And the latency for accessing data in each of those tiers is different. Now, you kind of have this experience by like scrolling Facebook messages with somebody you had talked to a long time ago, and then like going back into the history... So sometimes you get like a spinning wheel, and then that's what happens, is --

**Jerod Santo:** Loading spinners.

**Nikita Shamgunov:** Yeah, and they bring that data from, I don't know, an object store, or something, from somewhere on disk there. It's certainly not cached. It's not in a very fast storage medium right now. And so that would be the kind of experience your application will have, that certain queries will have added latencies to them when you start accessing older data. But I think that's the way to go. I mean, people think it's like, "Well, can we partition the data?" and like the last month of data is fast, and the rest of the data is kind of slower, and then, 10-year-old data is super-slow... But the reality is the system can make those choices for you just simply based on the patterns of usage.

**Adam Stacoviak:** Right. There's a counter, you said, on the page, right?

**Nikita Shamgunov:** Yeah, there's a counter on the page.

**Adam Stacoviak:** So the algorithm built into Postgres was the best candidate to make that choice, essentially...

**Nikita Shamgunov:** On the Postgres side, yes. And then on our storage side, there's a separate one. And the difference, like I said, is we're combining those pages into what we call layer files.

**Adam Stacoviak:** In the pre-call you mentioned AI. Is this the place where AI might make some better predictions in the future?

**Nikita Shamgunov:** Yeah, well... Stuff's pretty simple. So basically, where you want to use AI - or in some cases, just like machine learning - is when there are multiple competing things, for example; there are multiple caches that are competing for something. You can use control theory, or you can use AI for deciding what goes out of the cache and what stays. In general, AI applications are split between "Can I use it for my database engine?" The most famous paper is like Jeff Dean's Learning B-Trees and the paper made a lot of noise, but I think the practical usage of this paper is kind of zilch. Like, it doesn't really make a huge difference. Nobody implemented it in really big database projects; it's not in MySQL, Postgres, SQL Server, Mongo...

And the other place for using AI - and I think that's pretty exciting - is an auto-tuning database. So there's a start-up by Andy Pavlo, called OtterTune. They are twisting database knobs, and they can make your database probably up to 20% faster, or maybe more, for your particular workload. And then AI can choose indexes for you, and that's where branches could be a very cool thing where you unleash AI on the branch, so now you're not worried that the AI is going to mess up and take down your production database. In that branch, AI makes a bunch of changes, like changes the knobs, changes the indexes... You can fork the workload and test the workload on the branch, and then you can be like, "Yeah, it makes sense. Do you want to send a pull request?" kind of thing.

\[40:25\] I think that's where AI is a lot more interesting than in like managing caches, and deciding what stays in memory and what goes on disk... Because there's like -- caching existed for like decades, and there are classic algorithms that do this very well.

Finally, AI -- the generative AI is fascinating. It feels like every day there's an AI breakthrough. So that's where I think developer experience can be impacted, where you start generating SQL, or you start generating ORMs, or you start generating API endpoints, or you start generating some sort of backend code, you're generating storing procedures - nobody really knows this by heart, the syntax of storing procedures, because you live in your primary programming language, like Go, Java, JavaScript, and then you need to write a storing procedure and you have to scratch your head and it's like, "Oh, what's the syntax exactly in PL/pgSQL? So that's where AI can really help, by generating some of those things.

**Jerod Santo:** So replacing us app developers, not replacing infrastructure developers... I see how it goes, I see how it goes.

**Nikita Shamgunov:** Well, it's just the applications developers will go first; eventually, we'll all go.

**Jerod Santo:** We'll all go eventually... \[laughs\] Yeah, fair enough. Fair enough. So one aspect -- so you've decoupled compute and storage. And the other thing that I think about with regards to cloud-native or serverless things is geographic distribution. So you've mentioned Fly a few times... Disclaimer - fly.io is a partner of ours, and so they sponsor some of our shows, they may sponsor this episode... I don't know.

**Adam Stacoviak:** They might.

**Jerod Santo:** I can't tell you.

**Nikita Shamgunov:** Right, yeah.

**Jerod Santo:** But one of their slogans is "Run your app servers closer to your users", and that's also what Netlify wants to do, and what Vercel wants you to do, and what I'm sure Lambda wants you to do... This whole, like, put the CDN all around the world, and then do your compute in the CDN edge nodes is the new thing, right? But the database has always been still in some data center in Virginia, right? And so it's like kind of the Mecca, or the place where I've been waiting and talking to people, it's like, "How can I get my database close to my users as well?" And even when I was talking with Paul from Supabase, he was saying, "Well, that's a whole different thing from decoupling compute and storage. It's like geographic distribution, CAP theorem etc, etc." I'm curious, your take on that; like, is Neon going to be Postgres serverless, but also running right there in your edge nodes? Or is it you're gonna be -- I mean, maybe for now, if you're on AWS, it's a possibility... I don't know, talk to that whole subject.

**Nikita Shamgunov:** Yeah, yeah. So of course it's a dream to be able to read and write in every region, and the system magically figures everything out for you. Unfortunately, that's really hard. And imagine at the same point in time in New York and Tokyo you're modifying the same row - because logically, it's one row in the particular table; you're modifying, and one sets it to two, the other one sets to three. So which one?

**Jerod Santo:** Merge conflict...

**Nikita Shamgunov:** Yeah, so there's a merge conflict... But then it's a live application; nobody sits there and \[unintelligible 00:43:43.22\] So you can have a conflict, and then so you have a process to figure that out... But who decides, right? Is that a human, or...? It can't be a human.

**Jerod Santo:** Right.

**Nikita Shamgunov:** \[43:55\] Or you can say, "Oh, well, this row lives in Tokyo. So if you want to modify that row from New York, you pay the latency for modifying that row, and New York and New Tokyo does not pay the latency, because that row is closer to you." That's easier, but it still requires you to decide where this row lives.

Now, there is actually a very practical solution to this, and as a database person, that pains me a little bit because of how simple that is... But I think from a practical standpoint, it will actually satisfy a lot of users. And I think that's what we're going to start with, and that's what Fly is doing as well, a little bit. So you split your queries into reads and writes, you say your primary write replica lives in a region, you let the user choose that region, you replicate it from that region to as many regions as you need... You actually unlikely need more than five, but you can go all the way to 26, which is the number of data centers in AWS, or it can go to 200, like Cloudflare... At some point, it will get tricky to replicate to 200, so you will need to separate replication from the engine as well. But regardless, you can send reads to a local replica. But you need to understand that that replica will be behind of the master copy by X amount of milliseconds.

I believe at some point -- I haven't checked recently, but at some point Fly had a heuristic. If you're less than 400 milliseconds behind, we'll send reads to your local replica. And this in a way dumb approach can surprisingly go very, very far. It will have side effects. Well, what's a side effect? Well, it's called read after write. So you write and you immediately read what you've just written, and then that thing might not have arrived to the local copy yet. So you feel like you wrote a number one, and then you're reading that number, and it's still an old value, like zero, or something. That can be mitigated by messing with the proxy, and the proxy can detect those read after write patterns, and in that particular situation send the read into the right replica as well.

And the more I'm scouting the market and I'm researching alternative solutions, and Aurora shipped multi-master. Multi-master works, Spanner shipped multi-master. But the more I talk to people out there, I'm realizing that that simple and understandable paradigm is oftentimes more powerful because of its simplicity, to compare to all the paradigms of like, "Okay, we're gonna run a distributed consensus with three to five locations in the world", and now either all of your latencies are very long, or you need to put some sort of machinery in place where you start fine-tuning, "Okay, well, this data lives here, and this data lives there", and if you let the system decide which data lives where, that introduces uncertainty, and it changes from having like a simple solution, like AK47, into like this sophisticated thing, where people just stop understanding when the latencies are short and when the latencies are long.

So what do we do internally at Neon? I think we're going to ship what I've just said, where we're just going to have multiple read replicas around the world, and our proxy will be routing traffic to the local replica. soon. In parallel, we're working with a famous database professor Daniel Abadi out of University of Maryland, and he's the creator of what is called the Calvin Protocol, which is the foundation of FaunaDB. He is applying similar ideas into the Neon architecture. The difference is row-based versus page-based. That does require, today -- as we are halfway through that research project, that requires people to assign data to regions. And you can pose this as this thing called partitioning, so for every partition you need to say, "Well, this partition lives here." The moment you do that, a bunch of things fall apart a little bit, wherein creating an index across all the regions becomes harder, and stuff like that.

\[48:12\] So while I find this fascinating, and I've spent like a decade thinking about it - you know, on and off - I think that simple, straightforward approach where you say, "Well, my primary is here, and I'm going to have up to 20 replicas in the world" can satisfy 99.9% of use cases.

**Jerod Santo:** Yeah. It lacks a certain elegance, but it has a certain pragmatism. You're not the first person that said that to me, and I remember the first time, I kind of rolled my eyes, I'm like, "Well, that's just like cheating a little bit", but...

**Nikita Shamgunov:** It's defeatist, right?

**Jerod Santo:** It is kind of defeatist... But at the same time, it is going to be better for most use cases; just not 100%.

**Nikita Shamgunov:** Yeah. If you think about something like an eCommerce use case - you really, really want your website to load fast.

**Jerod Santo:** Right.

**Nikita Shamgunov:** But that's a read query.

**Jerod Santo:** Most of them are.

**Nikita Shamgunov:** Yeah. And when you display a columnar, like inventory - yeah, you might be a hundred milliseconds behind, but I mean, that's okay. There will be cases where the user tries to buy something, and somebody else bought it across the world, and that thing disappeared, but that you can handle at the application level. And when you're buying something, processing your transaction, you're sending it right into the database... Okay, sure, that takes 200 milliseconds. Fine. People will wait 200 milliseconds. 200 milliseconds is not that long, actually. If every page load is 200 milliseconds, that's a different story. If one thing is 200 milliseconds, and that's a write, or let's say it's a purchase or add to cart, that seems fine.

Now, there is another interesting aspect here, and we're wrapping our brains around this one as well, which is if some of your database calls, meaning write calls, are incurring a certain latency, either it's cross-region, or maybe even within region, if your webpage or your backend has multiple roundtrips to the database, those things tend to add up. And at times, you want to run your compute right next to the database, so those latencies are not adding up as much, right? So ideally, a web page could send either like a lambda function to the database, and in that lambda function there's a bunch of code that's running maybe in the JavaScript runtime, or... I'll tell you about some other ideas. And that you want to write right next to the database, because that piece of code is like "Well, query that table, get data from that table, query a few other tables, run some local compute, do some more requests to the database", and if you're going back and forth, those latencies will start adding up.

So there is a reason to run some sort of runtime, language runtime, right next to the database, or there's a reason to give people access to potentially a VM compute right next to the database. I don't know which ones we're going to choose. Either we're going to have VMs, and we can say, "Well, push some, whatever code you want, into a VM that sits right next to the database, or we will run a VM runtime, or we will run a Cloudflare Worker runtime", which these guys open sourced not too long ago... And it's not like our aspirations to not be the database; we're a database company. We just see this use case and we want developers to build the best possible apps. So having some sort of execution runtime for arbitrary code right next to the database seems to make a lot of sense. And so that's another thing that we're actively exploring.

**Break:** \[51:53\]

**Adam Stacoviak:** A few months back, back in July, you doubled your funding, which obviously gives you more runway and more money to dream with... One of the kind of key parts that you're focusing on seems to be developer experience; you've got three kind of different things laid out in your post when you announced your funding, which was - we talked about this already - serverless, branching, and time machine. When it comes to attracting developers to adopt this, those three things seem to be the main thing, but what else developer experience-wise really makes Neon shine?

**Nikita Shamgunov:** Let's first talk about what is developer experience. Developer experience, first of all, is something you experience, and when you see the company's got it right, you kind of feel it. And so what are those companies? Well, we'd love to highlight Vercel, Netlify, Prisma, Replit, Fly.io... And of course, GitHub. They get the developer experience right. There's a bunch of others that I haven't mentioned, but still, if you look at those six, for example, they get it. But if you were to deconstruct what makes a good developer experience, so DevExes, the first one is like CLI, API and docs. The documentation needs to be very good, very easy to consume. Everything that you do should be available over the API and the CLI... And it's super-addicting actually when you go and spin things up over the CLI, you control the system over the CLI... And you look at the UI, and then that is all reflected there... So you have this positive reinforcement as you do that. I think that's very important.

Everything is instant. So developers don't like waiting for provisioning. For example, there are cases where you spin up an RDS instance or an Aurora instance and you need to wait up to 40 minutes. That's nuts. When you just need a database, you want to click a button and you want to get it. So in those, every second counts. And think about - you're a developer, you are in your flow, you have the ultimate hacker keyboard, you've optimized everything, but certain things force you to wait minutes or sometimes even hours.

The third thing is cold starts. And we're not all the way there. I'm chatting with Guillermo over cold starts, and he's saying "This is the hill I'm dying on." Cold stars are bad. We haven't solved it all the way. We will be solving them through caching. For us, when we scale to zero, it takes two seconds to spin back up, which impacts the application experience and the developer experience. It's still gigantically better than everything out there, but we need to get it down to like 100 milliseconds or so.

\[55:54\] There's other things that go into developer experiences. One thing is to run the app, and the other thing is to build the app. And the thing that contributes to developer experience is instantly shareable environments, multiplayer-type experiences, where you're building an app and you just want to send a link, a short URL to somebody else and say, "Hey, check that one out." And when they click on it, they have a preview. And from that preview of the app, they can also be dropped, potentially, to the developer environment for that preview. There's an application preview, there's a developer environment preview, and the easier you make that, the more team collaboration benefits you will start reaping. And that also is addicting... Because people work in teams; people don't work solo, usually.

The other one that I want to mention is CI/CD and Push To Deploy. I think heroku famously, you know, git push heroku master. That's was really cool, if you think about it. So you just do git push, and this thing is live in production. The reality of today, though, is that Heroku or not? People are using CI/CD pipelines, and when it comes down to CI/CD pipelines, the notion of a branch, and the notion of a pipeline is there. So all this shareability that I just talked about in terms of like, "Okay, well, here's a preview environment. Why don't you take a look at it?" actually applies to automatic test pipelines that you're coming through And the place that does not fit well into CI/CD pipelines is usually the database. That's the one that you cannot just fork into 20 copies and run 20 tests, and each one has its own database copy in parallel. People just don't do this kind of stuff today, and these are the things that will be possible with Neon. So I'm looking forward to that.

**Adam Stacoviak:** I'm glad you defined developer experience, because a lot of people seem to -- it's a mixed match. I think in your case, the CLI, the docs - these seem like easy table stakes. It's like," If you don't have docs I can read, and I can't dig into your CLI..." I mean, you're right, it is addictive; once you sort of get into something, and there's good documentation, it's easy to kind of get deeper into that. But defining it seems to be the challenge. Getting it right might even be - definitely is, I guess - harder. You can know what it is, but getting it right is --

**Nikita Shamgunov:** Well, yeah, but you need to know where you're going, right? You need to know where you're going.

**Adam Stacoviak:** Right.

**Nikita Shamgunov:** Are we there with our developer experience? No. Like, we don't have a CLI. But I'm looking at our roadmap, and our CLI is going to drop in November, so I know we need to have it. So that's what we did, we started with defining what a great developer experience is. We put it on the roadmap, \[unintelligible 00:58:40.12\] and the team is cranking.

**Adam Stacoviak:** Yeah. Where does your roadmap live? Is it easily accessible to the world? I haven't found it yet.

**Nikita Shamgunov:** So that's a great question... I actually want to make it public...

**Adam Stacoviak:** Because my question after that is like, if you got it out there, or you have these ambitions and you care about DevEx, how do you communicate that? Because if you have ambitions and I know I want that CLI, and you don't have it yet, how do you tell me that you care and you're working on it? ...you know, if there's no feedback loop between me, the end user, the dreamer, the user, and then you.

**Nikita Shamgunov:** There's a little bit of a feedback, but you're absolutely right, Adam. I will actually bring this up in the next staff meeting. We run them every Monday. I do want the roadmap to be public. It's not public today. It does live on GitHub right now, in -- what's it called...? GitHub issues... Yeah, that's the word. I'm staring at it right now.

**Adam Stacoviak:** Let me stare at it, too. \[laughs\]

**Nikita Shamgunov:** Yeah, I mean -- there's no reason for... It's private right now, but there's no reason for it to be private. Yeah, mark my words. We're just gonna flip it public.

**Adam Stacoviak:** Well, it wasn't to call you out I say that, but more like it's acknowledging that there's a feedback loop, and it's clear communication and expectation setting. So if me, the desire for this future that you're building, all this magic we're talking to you about, if you're making it come to fruition, and I want to go there with you, if I can see a glimpse into your future, your horizon - well, then I can buck it down a little further; I can deal with that two-second delay on my cold starts, because I know you're desiring to get it to 100 milliseconds.

**Nikita Shamgunov:** \[01:00:20.07\] Yeah, you're absolutely right. Point taken, and we'll be making that public.

**Jerod Santo:** How long have you been working on this, and how far do you think you are from your first paying customer?

**Nikita Shamgunov:** So we've been working on it 18 months, roughly. We started payroll, March 1st, 2021. And when we started payroll, we had close to zero lines of code written. So we had three founders in the slide deck. Right now, the team is 36 people. The majority of them are engineers. It's a remote-first company. The majority of the people are system engineers working on the storage, but there's obviously an SRE team, and a cloud team. The service is up and running. It has more than 2,000 users, there are 7,000 signups, and I think we'll make our first dollar in Q1 2023. We are already having people who are using it not for toy projects, but for real production projects... And so this will be the first dollar we're going to make into the company.

**Jerod Santo:** So call it two years, roughly. Is that about what you expected? Has it been easier than you thought, harder than you thought? What's the journey been like?

**Nikita Shamgunov:** It's about on track. You need to build a freaking storage.

**Jerod Santo:** Yeah...

**Adam Stacoviak:** Put that on a T-shirt.

**Jerod Santo:** \[laugh\]

**Nikita Shamgunov:** Yeah, it's a complex systems project that has a certain amount of maturity. And then you need to build everything else as well, which is the cloud service. So I think we're right on track. We could make more money sooner by just talking to larger enterprises and selling this to someone before we are fully ready. That happens all the time, by the way, in startup building, where you sell it to the user, and in return, they get a better deal, and they have the right to drive your roadmap. We chose not to do it this time around, and that's what we did with Single Store, we lined up a bunch of banks, like Goldman Sachs... We didn't get them for two years, by the way, but we got them -- we started Single Store in 2011, and we got Goldman I think two years after, sometime 2013, for a very small workload.

So that's one way of building things. The other way of building things is to create an offering in the cloud, attract people, and then cherry-pick those who have more of a hair on fire problem. And the ones that will have a more - I wouldn't say relevant... Basically whoever you choose, and whoever you listen to, have a big say on your roadmap. And when you choose very large companies, the say will be around enterprise features such as security, encryption, integration with Azure Directory, and things of that nature... Versus if you choose smaller users and more of an SMB mid-market, they will care about productivity, they will care about small teams, they will care about cost. And that will set the foundation of your system in a much more robust way.

**Adam Stacoviak:** When it does come to generating revenue, that first dollar, the first many dollars - you're taking a bet, I guess... I guess it's kind of been proven by other serverless business models out there. But you're not going a traditional route, which is, as you said before, subscription, which is kind of easy to define. "Well, this customer, sign up for X, X per month, X years if, we retain them" etc. It's easier to sort of predict some future. How do you expect the volatility of usage-based consumption to impact revenue? What's your thoughts on that front?

**Nikita Shamgunov:** \[01:04:08.20\] I think the important thing in the consumption-based pricing and a consumption-based approach is that it aligns the value of the product with the value to the customer, and the customer consumption. And then eventually, it will align this to your sales team as well. If we're getting paid for something that is not used, eventually it will be turned off; it will be discovered and turned off. But if we are providing value, with more usage we're providing more value, then the usage will grow.

So in a way, subscription-based pricing does not keep you as honest as a consumption-based pricing. And a bunch of Amazon revenue is people forgetting to turn off EC2 instances. And I'm guilty myself. I've done this before, and then in like early Single Store days a $3,000 bill arrives, and I was like, "Oh my God, I just forgot to turn a database instance." Like, that was literally that. By the way Amazon forgave it to us. But I was ready to put my personal money to this, because I forgot it. And in a consumption-based system, you will never do that.

I think the consumption based model is proven by now by companies like Snowflake and Twilio, which are purely consumption. And I think that's where the world is going. Give it a few more years and this will be the expectation in the market.

**Adam Stacoviak:** I'd like to see that on like Disney+, or Netflix... Because there's times I've had Netflix, a subscription., and I've watched nothing for a month at least. Maybe one show, maybe a couple, because I've gotten busy, or I've prioritized summer, and family, or whatever, and still yet the bill comes along. But mentioning Amazon - it's a big thing with them, is there's a whole cottage industry of like "Explain my Amazon bill to me." I say Amazon, it's actually AWS. But yeah, the point is...

**Nikita Shamgunov:** Yeah, the video services is a great example of that. I have a family, and my kids watch Disney, I watched The House of Dragons on HBO... I do have Netflix; I haven't watched Netflix in a while, and then I just kind of forget to turn it off.

**Adam Stacoviak:** Yeah. It's almost like the max I'll pay is X, the lowest I can pay is zero. Because if I watched nothing, then charge me nothing. But if I watched enough, charge me half, something... But like, there's a max; the full subscription amount.

**Nikita Shamgunov:** And there are 20 services out there now, 20 subscription services out there now, and you only have this much time in the day... So you kind of want to pay by consumption and not think about it. But that's unfortunately not the life we're living in.

**Jerod Santo:** Yeah. It's not well aligned with their incentives.

**Adam Stacoviak:** I'm happy to hear that you're aligning with the value of the customer... Because that's a great answer. It's one to say, "Well, we have a long take on this game", or "We're playing the long game." That's one answer. But the other answer is like, "We want to align with the customers' value, because that... That is so true. Like, you can get a bad reputation, or just reduction in value, or trust, if you charge for things you're not actually getting billed for, which is how subscriptions work... But if you're aligned with their actual value, this is what you consume, this is what you use.

**Nikita Shamgunov:** One hundred percent. And when this thing works, truly works, it's beautiful. Because now you have that simplicity across the board. Now your salespeople are just trying to land a customer at any consumption. Because you know that the product is very good, and that it will grow. And then you're compensating them for educating their customers, the accounts that they're working with, how we they can drive more value by using Neon here, using Neon there, using Neon there, which in return drives consumption... Now their sales commissions are attached to consumption as well, and you're becoming the truly consumption company.

**Adam Stacoviak:** \[01:08:10.02\] From a sales perspective, it really makes a lot of sense, because there's almost zero risk to the customer. And it's an easier opportunity for the salesperson to communicate the value, because you're not saying "Well, it's X per month, and you're gonna overspend, or underutilize", and all that stuff. Then it's more like, "No, you only pay for what you use." And so the sale can, as long as a tech aligns, of course, and the value is there technically, then the sales is -- it kind of does it for you; it's almost just done for you. It's just a matter of aligning the value, educating, as you had said, and having a good team behind you that can not just sell, but also educate and depth into a customer, versus just simply one service here and that's it.

**Nikita Shamgunov:** Correct. That's precisely right.

**Jerod Santo:** You don't need to sell me on Postgres, because I've been a user both professionally and privately, or personally, for like 15-16 years. So to me, I saw serverless Postgres, and I was like, "Let's talk to these people." You are VC-funded, and what I've read - I'm no VC, but what I've read is that they're going for grand slams lots of the time, and a lot of their... That's what they want, is that vision of a potential unicorn, or a decaunicorn; who knows where they are now. They want to sell Figma for 20 billion. And being Postgres latched, you've hitched yourself to a really nice racehorse, a great one, and I think the best one, for a lot of cases. But it is de facto a segment of the market, right? Like, you've basically segmented yourself, and you can't get that MySQL Fortune 500 company, or the guys running Oracle, unless they're ready to switch to Postgres as well... And so I'm curious, was there pushback during your pitches, these conversations? Was Postgres a thing that you had to sell to potential investors, or is this something that they're excited about?

**Nikita Shamgunov:** It's the same that you said - you don't need to sell people Postgres.

**Jerod Santo:** Even VCs.

**Nikita Shamgunov:** VCs are not dumb...

**Jerod Santo:** Oh, I'm not saying they're dumb...

**Adam Stacoviak:** They're removed, in some cases.

**Jerod Santo:** ...I'm saying that they're going for larger market share things, maybe.

**Nikita Shamgunov:** But think about it the following way - from the VC standpoint, there is a market; it's called the database market. That market has players, and those players have share. And that share is on dollars, and on usage. And then there's -- you can also measure share in terms of mindshare. So if you look at share of usage, Postgres is going up and up and up. So that's data point number one. And earlier, I said out of the top five databases, Postgres is the only one that's growing share.

The second thing is, within the database market there's an on-prem market, and there's a cloud market. And the cloud market is the much faster-growing market. That market is dominated by the cloud hyperscalers - by Amazon, Google, and Microsoft. There is only one public database company that's relatively modern and relatively recent, and that's MongoDB. There isn't a public relational database company, and developers are increasingly choosing Postgres over MongoDB.

Another data point is AWS Aurora is a $3 billion run rate business, going into potentially four and a half, growing 50% year-on-year into the next year. And that's MySQL, Postgres, and MongoDB. MongoDB is kind of fake. It's built on top of Postgres, because MongoDB's license prevents them from running MongoDB compute.

So all of those data points highlight that there are a lot of dollars in the cloud database market. Postgres as a matter of fact, in a way, it's kind of like Linux. So it's not like you can -- you can't own Postgres. That ship sailed. But can you have the best in the world Postgres cloud service? I think that's an open question, and that's what we're going after. That's really the pitch, it was that simple.

**Jerod Santo:** I was gonna say, that sounds like what you would have said in your meetings. I liked it.

**Adam Stacoviak:** \[01:12:17.02\] What's left? What have we not covered so far? What something you wish we asked you, that we didn't ask you, or something you wish we can cover that we haven't covered yet?

**Nikita Shamgunov:** Well, wish us luck paying this one.

**Jerod Santo:** \[laughs\] Good luck.

**Nikita Shamgunov:** We need that. Obviously, engineering our future, we have a fantastic team... So I think that's, for the most part, what we need. We think that where we're going is pretty clear, and we're refining that Northstar every week, as we get more information. We want the world to fully buy in on Postgres. I think we're getting there. And then we need the world to buy in on serverless. And once those things happen, we need the technology to work, which we're making better every day.

**Adam Stacoviak:** You've got some job openings, I see, at least in your announcement post from back in July. I'm sure there's some of those job openings still available. Some in engineering, some in product, obviously...

**Nikita Shamgunov:** The two jobs that we're looking right now is a UX designer, and we're potentially looking to bring a developer relations lead, more of a senior person. We have one fantastic individual, his name is Raouf, who is running our DevRel right now. But what we're hearing from the board - it might make sense to bring a very senior person to drive the developer relations effort.

So these are the two positions that we are hiring for right now. We are always hiring for engineers; we've been blessed. There's a line of people who want to work at Neon, on our storage and our cloud service... So we feel we're very fortunate, because the system is open source, it's written in Rust... So that's like a system engineer candy. Hopefully, this will stay, but as of right now, we have more applicants than we can process... And we just added nine in the last months.

**Adam Stacoviak:** There you go. You mentioned the roadmap is coming, or potentially coming... You mentioned the desire for a CLI. What else might be out there on the horizon? What's something that maybe people know less of, or not at all, that you could share on the show?

**Nikita Shamgunov:** Yeah, so there are a couple of things. We touched on auto-scaling, and all of that will be packaged into the final experience, where you will have some visibility of how much compute you're burning, and then underneath, that is going to be that live VM migrations, and adjusting the size of the compute with regard to memory and CPU. So that's coming. A number of integrations are coming. First of all, watch out for an announcement next week. I can't say what it's going to be, but there will be a big announcement of integrating with a major developer platform... And more such integrations will come out over time. We'll be announcing regions... That's kind of table stakes for a database service, but that's going to happen.

And then we also experimenting with some of the generative AI stuff. We're only going to launch it if we internally feel that it provides a ton of value. But that is about automatic index suggestions, automatically branching, applying indexing, and then sending a pull request for changing the schema. That is some of the things that are brewing in our labs, which is kind of cool. But again, we're only going to do that if we are confident that this is not a toy. It's like really useful for the developer.

**Adam Stacoviak:** So currently, technical preview, right? You have to request early access, or have an invite code, which you can log in with GitHub, or you can log in with, I believe, Google. So you can either SSO to get in... What's the wait, if people get done with the show, or maybe midway through this show, and this question is too late - how long will they wait? What can they expect?

**Nikita Shamgunov:** \[01:16:12.22\] Barring the things that are unexpected, which is like - you know, we're about to remove the invite gates, and then in the last second, somebody's like, "No, you can't do this, because X and Y will break." Well, barring that, November we'll drop the invite gate.

**Adam Stacoviak:** Okay. So soon.

**Nikita Shamgunov:** Yes, very soon. And in Q1, we're going to turn on all pricing and billing. So the team is working very, very hard. We already know the pricing structure, the pricing model, where we are going to charge separately for storage, compute, and data transfer... So in a way, kind of really align with what it costs us to run the service. And then it's elastic, it scales to zero; so if you're not using it, you're only paying for storage... And storage rounds up to zero. So these are the pieces that we need. We need regions, we need larger computes, we need pricing and billing. And once that's there, we're ready to roll. We'll drop the invite gate even before we have pricing and billing.

**Adam Stacoviak:** It'll remain free, obviously, until Q1, and then what happens? Will there be like a grace period, like "Hey, a free tier, a generous free tier?" What can people expect?

**Nikita Shamgunov:** The generous free tier will stay. We'll give you a certain amount of consumption per month, for free.

**Adam Stacoviak:** Okay. Well, that certainly satisfies the invite them to mess up, right? Because if you can do a toy project or a hobby project, you mentioned the Heroku fallout, a lot of the recent announcements so there are no more free tier is a big deal to developers, because "git push heroku master", those four words were sort of blazoned all over our brains, and that's kind of gone now. But if you want to be a long-term player, it might make sense to always have a generous free tier and keep it that way, so that you can invite those who want to play and tinker to do so.

**Nikita Shamgunov:** Well, it comes down to the model, and it comes down to the level of what it costs you, and it comes down to a certain level of abuse.

**Adam Stacoviak:** Yeah, for sure.

**Nikita Shamgunov:** When you give people arbitrary compute, you will be abused, because you can turn free compute to value. You can mine Bitcoin, you can do whatever, you can do DDOS attacks... Like, there's all sorts of malicious behavior that you can expect on a popular platform. When your platform is not popular, you're dying for that traffic. And so that is the push and pull.

So on the first subject, it's harder -- so databases are arbitrary compute, but it's not as obvious as like just having an access to a VM. It's less arbitrary than a VM access. So I think the level of abuse will be there, but naturally it will be less.

**Adam Stacoviak:** Well it'd be a good spot for AI to detect that stuff, to machine-learn what abuse looks like, and you can sort of like evict them from the cache, "Get out of here!"

**Nikita Shamgunov:** \[01:18:58.28\] But then you're writing all that code, you --

**Jerod Santo:** Yeah, you're spending all your money on fraud and abuse, man...

**Nikita Shamgunov:** Yeah, you're spending money on fraud, and whatever. For example, fly.io gives you a generous free tier, but they ask for a credit card ahead of time. So that's like adding a little bit of friction. Now, fly.io gives you actual VMs. So what I'm saying is in databases I expect less abuse than as in a general-purpose platform, but there will be some. And right now, obviously, we want that free traffic and free usage. That's a model, right? If you put my business hat on, there's a certain amount of people that are coming on the platform, it costs you this amount of money, you fine-tune what those free-tier boundaries are to maximize your long-term goals, the long-term trajectory as a company. And that's an important thing, that we always want to optimize for long-term, and that's in a way what venture capital allows you to do. So you can really make sure that you build a very capable platform, you can reach a certain amount of scale of users coming in... And by the way, the more users, the more stable is the offer, because you start seeing all sorts of failures and fixing them. And that's another reason to stay free for a while. Once you start charging people money, the expectations on uptime and quality are higher.

And maturity takes time. We're not doing this for the first time. I think we can get there faster than, let's say, Single Store, but it will still take time. So that's kind of how we think about free tier... We're taking a very, very practical approach to it. We want people to come in, we want people to see value, we want people to eventually convert, and become customers of ours.

**Adam Stacoviak:** Well, speaking of conversion, and the potential of many, there is a code... I'm curious, can you share a code just for our listeners? Is there an invite we could just give to everyone who listens to the show? Is that feasible? Is that too much? You tell me.

**Nikita Shamgunov:** Yeah, there's a partnership with Hasura that is currently slated to launch on the 11th. And if you come to Neon through Hasura, by pushing a Neon button on the Hasura dashboard - and we'll be replacing Heroku on Hasura - then you will bypass the invite gate, and you will be dropped on the Neon console, and you don't need to have the invite gates to start using Neon.

**Adam Stacoviak:** Yeah, good stuff. Well, if that's out there in Hasura - awesome. If you're just listening to this and you don't know what Hasura is, or you don't have access to that, then... Well, I guess just wait till November sometime, because that's when it actually opens up. The gates are down. So just a temporary wait for anybody who might be listening.

**Nikita Shamgunov:** Finally, you can just tweet, and say "Neon database, can I get an invite?" and we'll DM it for you.

**Adam Stacoviak:** Gotcha. Cool. Well, there's some ways then. Anything else, Jerod? What else is left? We put it out there, didn't we?

**Jerod Santo:** I think we've done a good job covering it. I'm excited for you all, I'm rooting for you; like I said, a big Postgres standover here, so I want to see it moved into the future alongside all these other players and opportunities. Resource-based billing... I mean, it's gonna be awesome. The regions... It's going to be cool. The branching is already cool, so I'm very excited for what you guys are building, and wish you the best of luck on it.

**Adam Stacoviak:** Absolutely.

**Nikita Shamgunov:** Absolutely. Thank you so much.

**Adam Stacoviak:** Thanks, Nikita.
