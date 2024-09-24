**Justin Garrison:** Hello, and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and on today's episode we have an interview with David Flanagan. David is the founder and creator of Rawkode Academy. After successfully making a YouTube channel based on cloud-native and Kubernetes stuff, exploring Kubernetes and how Kubernetes breaks, he's gone on to build his own platform for education. He's using things like GraphQL and Rust and WebAssembly all in production, running it himself. It was great diving into some of these details of why he chose those things, how he's running them, and what's unique about running it yourself versus using something like YouTube to distribute your content.

It was fantastic hearing from David on how he's using these technologies, not only to build something himself, but why he decided that he needed to build something himself, and how he's keeping it vendor-agnostic. So let's jump into that interview with David, and we'll talk to you again after.

Oh, and also, thank you everyone who's been giving us feedback about the podcast. One thing we've heard loud and clear from people is making shorter intros, so we're trying that. And if you like it, please let us know. You can reach out to us at shipit \[at\] changelog.com as the email. We do read all the emails. And if you have someone else that you'd like to see or hear on the podcast, another topic that you'd like us to discuss, please let us know. Send us an email. We love hearing from you. So let's jump over to the interview.

**Justin Garrison:** Alright, welcome to the show, David Flanagan, creator of Rawkode Academy. How's it going, David?

**David Flanagan:** Yeah, very well. Thank you. Thank you for having me.

**Justin Garrison:** Yeah, thanks for coming on the show. We wanted to talk about what you're building with Rawkode Academy, why you decided to build it, and kind of how you maintain it. So just for background, what is Rawkode Academy?

**David Flanagan:** So the background is Rawkode Academy is a YouTube channel. That's it, in its simplest form. I have a lot of fun exploring new technologies. I always call myself a technology magpie. And I figured other people might learn from me playing with these new technologies. So I started putting out videos, that evolved into me sitting down with maintainers and walking through their project to get all of the flavor, history, context, and just share that with people, while showing them how to do, hopefully, something interesting. But these days it's a bit more than that, because I'm taking control of my platform and saying no to Big G, Big Google. I've built out a lot of software, a lot of programs, a lot of microservices, maybe a little bit too much, to bring it all in-house to a certain degree, where I control everything, from first byte to... Yeah, it's a lot, but it's very interesting. Hopefully interesting. We'll get into it.

**Justin Garrison:** I mean, that's a huge decision, to go from a platform like YouTube, of "I create the video, I create the content, and they distribute." And you can run ads on it, or do whatever. The kid dream right now of everyone still wants to be a YouTuber, to being "No, I don't want to be a YouTuber anymore. I want to make the software to own it."

**David Flanagan:** It gets really challenging. YouTube is fantastic for a free distribution means. And I'm not saying that I wouldn't still publish stuff to YouTube, but I need to be able to control. I mean, this is a business for me now. Let's give some context to people that are listening or watching.

In September 22 I was working at a company called Pulumi, pretty happy with myself, enjoying life... And I had a disagreement with leadership there, and 12 hours later, I was unemployed. Unemployed by my own volition. I left, just for the record. I didn't want to go back into just doing another DevRel gig, and selling a product. It was like, I just want to have fun, kicking the tires on as much open source as I can, and sharing that joy with people. So that's when the Rawkode Academy stopped being just a YouTube channel, and for me became my occupation, my business, my product, my service, my everything. That was how I was going to pay my bills and support my family.

And what I've realized since September 22 - so we're now talking two years later - is that YouTube is fantastic, and that it's free. But when it's free, you're the product, as we all know. But worse than that, is that we've had over -- I always say we; it's me. Me. Hi! We've had over a million views, and I cannot tell you a single useful thing about anyone who's watched any piece of my content over the last five years... Other than a high percentage of the audience is male. Thank you, YouTube. But that's pretty much all I get. And I know roughly where the distribution is, in regards to the US, the UK, Europe, whatever. But that doesn't help me plan content. It doesn't help me prioritize new patterns, new themes, new technologies...

\[00:08:14.09\] I want to be able to build a conversation with people where we don't just fall flat, "Here's a tutorial on the thing", but it's "Okay, what are you doing with it? How can we help? Where should we be pushing more buttons? Where should we be looking at something else? Should I be playing with WebAssembly? Should I be doing more eBPF?" Like, I could just keep picking things that are cool, but I also want to be able to just engage, and have a conversation, and build a community, and have more fun with this entire process. And to do that, I decided "Well, I need to know more about the people that are watching my content."

So about a year ago, I started building up my own platform. And I'll be completely honest right now. I made a huge faux pas this time last year, where I went "You know what? Do I really need to build this, or can I just use Wix.com?" And for three months I had a Wix.com site that I lost sleep over every night. I was like "This is s\*\*t. what am I doing?"

**Autumn Nash:** We've all been there.

**David Flanagan:** Yeah. Overnight I had a blog, a store, I had my videos, and I was like "This isn't the way... How can I be sitting and playing with all this technology and not using my own journey as a means to build content?" I think that's a good thing about the last year, is I've played with so many technologies, I've learned a lot of valuable lessons and how not to do certain things... And I'm sure we can get into that. But there's good content just in me building something for real production, rather than contrived situations that we do in documentation, and on some live streams etc.

So it's been a very valuable year. I made some mistakes, but we're now in a position where we have a platform, and an architecture, that I have never seen before, which - I'm excited. And I'm doing some pretty weird stuff, but it's all in the name of exploration, pushing boundaries, and just finding some joy in what I'm building.

**Justin Garrison:** What is some weird stuff you're doing in the architecture?

**David Flanagan:** Okay, so it is super-microservice. I'll give you one example. So there's a profile microservice, and it's actually a meta microservice, and it has no database, it has no columns, it has no fields. Instead, every single column and the profile service is a sub-microservice itself. So if I want to add -- let's say I want to start knowing people's age. I build a new microservice with one column, that stores the user ID and their age, and we aggregate it in the meta service and publish it over GraphQL to the API. And I don't think I've seen anyone else use a columnar approach to microservices.

**Justin Garrison:** Now, the question is why? Why didn't you just use the database?

**David Flanagan:** I mean, I've been doing this for 20 years, and I know you've been doing it for a while too, but every major outage I've had, every complex refactoring, tidy up comes down to databases, migrations, and data. Data evolves, it changes. You're never going to get the model right the first time. And I thought, "Why not plan for that now?" And the great thing about this architecture is that if I decide I don't want to get people's age anymore, I delete the service. If I decide that I want to get -- say I changed the format, and it's like, okay, I don't want to have their age as a ISO 8601 string of when they were born anymore, and I just want to capture the year. I can just create a new service, migrate the data, shut down the old one, and no downtime, no problems... The easiest, flexible data structure that I'm ever going to have.

**Autumn Nash:** Why not just use a NoSQL database or something that's more of like a data lake, and then push it into like a NoSQL so that way you can be kind of more -- because you could always blow up the database and start over from the data lake, or... You know what I mean?

**David Flanagan:** I was a very early adopter of MongoDB as well. Probably 2015, 2016 I think it was. And I loved the idea of not having a schema. But when you say you don't have a schema with these things, you do have a schema; you just don't control it.

**Autumn Nash:** \[00:12:02.14\] Oh, you 100% do. Like, it's flexible, but -- didn't we just have someone the other week that I had like a whole back and forth with, and he was like "It's schemaless", and I'm like "But it's not." That's not how any of this works.

**David Flanagan:** No, the schema is inferred, which means when you start to change data types, you end up in a position where you have all of these weird cross-boundary union types, and I think it causes more pain in the long run. It also makes it very difficult to do aggregations across that data, because you have to build in bailout clauses for when the data can't be aggregated, like a string data \[unintelligible 00:12:35.03\] All these problems disappear with my architecture.

Now, the challenge is that, okay, I've now got 14 different microservices that just describe what a user's profile looks like, and you have to push that all together. But fortunately, in 2024, we have some amazing projects out there that actually make this super-easy. The one I'm using for this is called GrafBase. It's written in Rust. First time I've said Rust, not the last... And it's this wonderful architecture where I can define all the metatypes, and it knows how to go and fetch all the joins for me. I don't actually do any of the hard lifting here. It's open source, it does it for me... Fantastic thing. They don't pay me any money. I wish they would, but... People really need to go check out this project. Yeah. It's awesome.

**Autumn Nash:** It's like a -- you know how you have those recipes that are like deconstructed egg rolls, and stuff? It's like a deconstructed database. This is so cool.

**Justin Garrison:** I'm looking at this graph -- GrafBase?

**David Flanagan:** GrafBase with an F.

**Justin Garrison:** Oh, okay. There we go. I was like, there's one with like three stars on GitHub. Are you shipping that to --

**David Flanagan:** I'm not that early, no.

**Justin Garrison:** But the trade-off there is you're adding more ops overhead. Like, you could do the data engineering side of things, and you have to do the schemas, and transitions, and all that other stuff... But in this case you're like "I have 14 microservices", that now you have to maintain and have uptime for, and migrate and do that other stuff for, right?

**David Flanagan:** Well, that's just where anyone who's familiar with my work might be a bit pissed off at me, but none of this is deployed on containers or Kubernetes. It's all Web Assembly serverless. So developing locally is easy, because I'm resolving a one-column database query, which is fantastic. In production, because it's all deployed to Cloudflare workers, I'm not really worried about scale that much, because the free tier, and then even paying for it, especially -- I'm not talking about Google scale or anywhere near that. It's not millions of people hitting my site. So it's a very cost-effective way of doing it.

And there's going to be people there yelling out, "But what about the latency?" Obviously, when you hit the meta endpoint, and it's got to go consolidate or aggregate all these columns, we rely on some pretty heavy caching using GraphQL primitives that make this actually feasible, because people request their own profile once, and it's cached for six hours, or unless they make a change, because it's GraphQL, we have subscriptions, which means we can update that cache whenever things change. There's a lot of building on top of GraphQL here, which I know a lot, a lot of people are a fan of \[unintelligible 00:15:12.19\] between REST and GraphQL.

**Justin Garrison:** It has gone through a moment of like "Maybe this was a mistake", right?

**David Flanagan:** Oh, I don't think so. When you build your API as a graph, and those graphs can be represented by services to the column level, and the RBAC as well is on fields and on types and on sub graphs - all of this becomes declarative in a GraphQL schema definition, which is otherwise really difficult to do in an open API definition; not impossible, but definitely I would argue that it's not as easy to reason about as the GraphQL version of this. And to me, that's really exciting.

**Autumn Nash:** Being able to group your data like that is so interesting, because you can group it in any way that you want with a GraphQL.

**David Flanagan:** \[00:15:59.19\] Yeah. So every microservice exposes the GraphQL endpoint, which is protected. The RBACs are applied on our CRUD model. Basically, people can read their own data, they can create their own data, they can update their own data... Some fields are read to the world. Your profile is, to a certain degree, public, but your email address isn't, and all these things. And all of this is just annotations on columns within the database and the GraphQL schema, and then it just all works out of the box... Again, building on the power of GrafBase. I have built very little that isn't my own services. I really am building on open source here, and that's -- I just can't believe all this stuff exists today. It's fantastic.

**Break**: \[00:16:39.25\]

**Justin Garrison:** Did you find GrafBase and then decided GraphQL was the way to go because it did that? Or were you looking at GraphQL as the API first, and then you're like "I need to find something that is written in Rust and works with it?"

**David Flanagan:** Yeah, so GrafBase is an interesting company. They're still \[unintelligible 00:20:15.20\] They actually launched two years ago, and I looked at it at the time, but I was still in full-time employment, so I was like "I'm not building anything." I stuck a star on it in GitHub \[unintelligible 00:20:24.04\] and forget about it. And then when I started saying "Okay, Wix was a terrible idea. What am I going to do?" I've always been a big fan of GraphQL, and I thought "Okay, how would I build this as a GraphQL-first thing?" and tried to, again, cheat. I always tried to take the easy path. I don't want to build something myself unless I really, really have to.

**Autumn Nash:** That's not easy, that's smart. You're not reinventing the wheel.

**Justin Garrison:** That's experience from someone that's been on call. Right? You're like "I've carried this pager before. I'm not going to build it if I don't have to."

**Autumn Nash:** Yes. Let's not downplay the fact that you're smart, okay? Because it's always that dude who's like "I'm just going to build my own" and you're like "Okay..."

**David Flanagan:** I try my best to not go down that path. So I was using Neon Database, which is like a serverless Postgres thing, open source, really cool, written in Rust, obviously... They support a plugin, a Postgres plugin called PGGraphQL, which essentially just takes your Postgres data and exposes it over GraphQL.

**Justin Garrison:** Yeah.

**David Flanagan:** I ran into challenges with that, just because I didn't think the RBAC model was strong enough, and then leaned into Supabase - another open source project, but it's just managed Postgres. They actually are the authors of PGGraphQL, but they augment it with row and column-based security policies on Postgres. I went down that route for a while, and then I found myself writing an awful lot of SQL. Every time I added a new service, a new table, a new column, I have to then write the row-level security policy, the column-level security policy... Usually required custom Postgres PL/SQL functions... And I was like "I don't want to be a PL/SQL developer. This is not where I need to be." And at the same time, there was a lot of buzz happening on X/Twitter, whatever you want to call it, around SQLite, LibSQL and Turso, which is like the replicated version of SQLite for production use cases. Very, very cool project, written in Rust. I mean, how many times am I going to say that? It's getting ridiculous. And I'm like "That's really cool." But the challenge with doing it with LibSQL over Postgres is that GrafBase don't have a native integration for LibSQL. So I had to then hook into the TypeScript ecosystem, find an ORM that supports Cloudflare workers, which was Drizzle, write a couple of queries, but everything is modeled as code now, rather than PL/SQL or SQL. So I'm in a much better position, and I just started going down that path, going "Okay, if I write a service that can speak to a MySQL database, how do I expose that to the end user?" Because that's something that Supabase and Neon did for me with this extension, and I've lost that. And that's when - I can't even remember if it popped in my head, or I just went to... One of my hacks when I'm looking for s\*\*t is github.com/topics, and I just add the phrase. And I put in GraphQL, GrafBase popped back up, and I was like "Oh, I looked at this." And then I started speaking to the founder, and then I had a proof of concept within a couple of days, and I just started rolling with it from that point forward.

**Autumn Nash:** So I think Postgres is really great for a lot of things when you need something that's kind of more flexible, but you don't want to go all the way to NoSQL. So it's very -- Postgres runs the world. It's crazy how many things it's underneath. But at the same time, it is still SQL, and still very structured.

**David Flanagan:** And it requires a lot of operational needs as well.

**Autumn Nash:** It does.

**David Flanagan:** Postgres - I would have to either pay Supabase or Neon to manage that for me. And while I'm using Turso, if I wanted to go SQLite or LibSQL myself, that's relatively easy to do. And it also opens up new architectures, that again, probably aren't possible with Postgres, to the point where if I find that I'm paying too much on infrastructure and I can ship a SQLite file over HTTP to your local storage in your browser, and never make an API request. And that kind of architecture to me is interesting... Even to the degree where I could have a SQLite database for every user, that is completely isolated, that has \[unintelligible 00:24:15.02\] and preferences and history, that I never even have to know about.

\[00:24:21.00\] That can live in their Google Drive, if they wanted to connect that up, it could live in R2 storage, S3, or it could live in the local cache and disappear when they log out. Like, all these things become a possibility just by using SQLite, because it has so much flexibility.

**Justin Garrison:** Now, you're using Rust, you're using WebAssembly, you're in Cloudflare Workers... Why not the key-value store they have for workers?

**David Flanagan:** Because while I'm deploying to Cloudflare Workers, with everything I'm doing, I could, if I wanted to, spin up some Equinix Metal, throw it on a beefy box, and run my own WebAssembly runtime. I don't want to be tied into any one particular platform, so I'm not baking in any managed services from Cloudflare whatsoever. As appealing as it is to hook into PubSub, or D1, and all that, or even their image service, there's just other ways to do it that are completely agnostic, can run anywhere. And I haven't found a need -- there's never been a situation where I've been like "You know what? I really should just use this." Because in open source we just have so many options these days. Yeah. Really cool.

**Autumn Nash:** What made you not pick like a NoSQL database like Cassandra, or like one of those? Just because you wanted the flexibility?

**David Flanagan:** Because I have operated Cassandra before...

**Autumn Nash:** I mean, it's horrible. Don't get me wrong. But like, there are other options... Because you know what I mean? You're still going to end up having to manage all those different microservices, so you're really just picking your different poison. But yours do seem like it's going to be better, but there are a lot of -- people have been running Cassandra for so long that there are ways to automate it, and all that good stuff. So before you got deep into it, what made you think "Okay, instead of using this thing that is open source, but tried and true, I'm going to go build my own microservices."

**David Flanagan:** Yeah, I think this just comes down to experience. I have been a Kubernetes container SRE for the last 10 years, and a developer for 10 years prior... So I've had the pager for Kubernetes clusters, for Docker clusters, for Cassandra clusters. I don't want that ever again. I like getting sleep at night, so I'm not going to trade that for anything. But the SQLite over anything else. It doesn't matter what the technology is, whether it's Postgres, where it's Apache Arrow hooking up to Data Fusion, which is then written to MySQL, or Cassandra, or MongoDB, CouchDB... All great technologies. But at the end of the day, if I really want to, can someone come to my website and never speak to a database by using a local file, a SQLite file? Yes. And that to me is something I can do in the future. It's very interesting and a promising approach.

And then there's the local dev experience. Again, I've been in this container field for a while, and I'm sure you've all worked with projects that have got Docker Compose, Dockerfiles... The experience is not great, especially when you start \[unintelligible 00:27:06.25\] services.

I remember writing the automation to try and make it possible for open source people to build on the Supabase version of what I was building, and trying to set up something that worked relatively well with Supabase running on a container locally, that didn't \[unintelligible 00:27:22.04\] that was performing was too complicated. It was too painful. I didn't like it.

**Autumn Nash:** This is how we know you've done it a lot, because are always like "I'm going to get this super-fancy database." And I'm just like -- I mean, if you really wanted to, you could shove half of this in like an S3, as long as it's like a non-dynamic website, and save a bunch of money. You know what I mean? People always want to do stuff with the fanciest thing, and I love that you're like "I can go back to a SQLite file", and I'm like "This dude's done things." Because when you're like a solutions architect and people ask you for like all this information, you tell them the simplest, cheapest thing, and they just look at you like you have six heads. Like, "How could you recommend that?"

**David Flanagan:** \[00:28:10.02\] Yeah, I think there's definitely a case of -- we've all seen stuff, we don't want to repeat mistakes of the past. But I've also worked on a lot of companies that had big data, that were throwing them into data lakes, and onto whatever managed service, whether that be -- I can't remember what Google's is called. I can't remember what Amazon's or Google's is called. BigQuery, and then there's the Amazon one...

**Justin Garrison:** Redshift.

**David Flanagan:** Redshift.

**Autumn Nash:** Snowflake.

**David Flanagan:** Yeah, right. So I've helped companies put their big data into this, and then realize that they're looking at doing one query every six minutes over a thousand rows, and you're like "Why are we doing this? Like, it's absolute overkill."

**Autumn Nash:** S3 is the most underrated data lake ever.

**David Flanagan:** Especially with the Apache Arrow and Parquet projects. Parquet, I'm not sure how you pronounce that. And those are making data architectures wildly different as well today. And I would love to say that I was using that as well with like distributed blog storage, but I have not had that need yet.

**Justin Garrison:** Yeah, you don't need to.

**David Flanagan:** And again, when it comes to the Rawkode Academy, while I'm building something that's genuinely interesting to me, I'm not talking about 10 million users. I'm not talking about 10,000 videos. I'm talking about 500 videos, 400 hours of content, and tens of thousands of people hitting the site.

**Autumn Nash:** Because we definitely know those people who they've definitely outgrown the simple architecture, and they're holding on for dear life, and you're like "Dude." So that's definitely like, your use case is really fitting for that.

**David Flanagan:** Plus I don't have to worry about license changes with SQLite, right? CockroachDB - I'd be screwed right now.

**Autumn Nash:** Well, not just that, but look at how many license changes have affected with Redis and like a bunch of places, and now they have to re-- like, with so many things built on top of those, now they have to reconsider whole startups, you know?

**David Flanagan:** Yeah. And depending on when people listen to this, Elasticsearch just flip-flopped; they went open source again, yesterday.

**Justin Garrison:** Yeah, they went back.

**Autumn Nash:** Oh, really? Okay, that's crazy. It just seems like it's been like a year or two of like open source rug pulls... I wonder if it's also making people reconsider how they build things, because you don't know what your license is going to be two years down the road after you've already been dependent on this software. How do you account for scale, now that you've built all these microservices that you are going to have to maintain? Do you feel like it's going to get harder if let's say you get - I don't know, 10 million users, or the more videos you have --

**Justin Garrison:** After this podcast, when you have a million users...

**David Flanagan:** I'm not terribly worried about scale, because I feel like it's been architected in a way where all of the services are -- I mean, we're talking a columnar service. There's no maintenance required there. What am I going to change? Oh, I decided that I don't want the date of birth colum to be called Date of Birt anymore. I want to change it to DOB. Like, when you do it -- all I'm doing is killing services or writing new ones. There's no maintenance really to be done. Now, we do have the aggregation layer, so you know, there is GrafBase that is sitting there and orchestrating all of my sub-graphs... That requires a little bit of work. But again, I'm standing on the shoulders of giants there. They're doing this work. They're building this project that's being used by, I assume, large companies that are giving them money and supporting the project. And I'm just riding on the coattails. I'm just being like "Hey, I want to use this. This is cool." And it's working out really well so far.

**Justin Garrison:** Does WebAssembly live up to the kind of no-ops hype, versus maintaining microservices in a container \[unintelligible 00:31:40.23\] versus it's a function that runs on top of a runtime, that when you push new code to it, it deploys wherever your runtime is? ...Cloudflare Workers, wherever it's at. Does that actually live up to the "you don't maintain that"? It's just basically code you wrote and it just goes somewhere?

**David Flanagan:** Yeah. I'm assuming you want more details.

**Justin Garrison:** \[00:32:02.17\] No, that's a great answer. Yeah. Because lowering the operational overhead of a new microservice -- usually, microservices are really bad because either they add a lot of latency and things that you don't expect on something that's distributed, or they add a lot of ops overhead, because you're like "Oh, I have to coordinate this push microservice, with that push microservice, with this release, with that other thing." And that organization problem of just like they all have to go at the same time - it's not a microservice anymore. It's a distributed monolith, and you just made it harder for yourself.

**David Flanagan:** Okay, so there's a few things there, even beyond WebAssembly, so I'm going to try and touch on all of that. The first thing about microservices - they solve two major problems for me that the containers have. We've had this problem with containers for all 10 years of containers existence, at least in their current form. One of them is the cold start problem. If you put a function into a container, a container has a whole bunch of prerequisites before it can even run your function... Which is it needs a sandbox, it needs an IP address, it needs networking set up, it needs Linux processes, user namespaces... All this stuff has to exist before your function runs. The cost of that could be as low as 50 milliseconds, but could be as bad as half a second, 500 milliseconds. And that's assuming --

**Justin Garrison:** Java.

**David Flanagan:** ...you've got the container image already pushed. Let's not talk about Java. So that seems okay at low scale. It's like "Okay, half a second. That's fine."

**Justin Garrison:** Autumn's just shaking her head. I'm sorry.

**Autumn Nash:** I'm dying. First we started off talking about Macs like this, and then Java, and NoSQL? Why are you trying to hurt me...?

**Justin Garrison:** Keep going. Keep going.

**David Flanagan:** Okay. So the problem -- WebAssembly solves that problem. And when we talk about the invocation of a WebAssembly module, I am measuring that in nanoseconds. Not milliseconds, not microseconds, nanoseconds. Because we don't need a sandbox. We don't need Linux namespaces. We don't need an IP address. None of that stuff exists, or even matters.

**Justin Garrison:** Well, you offloaded that to the runtime. That's just someone else's problem. The \[unintelligible 00:34:03.21\] once, and everything else underneath that is just like a process fork. Who cares?

**David Flanagan:** Yeah, exactly. To the point where I gave a talk at a conference in Paris - it was the Javascript.js conference - and I was trying to make sure people understood how much a nanosecond versus a millisecond difference is. And I was like, in the same time that it takes for one millisecond to execute a WebAssembly function, if we map that to a millisecond, you could watch The Matrix. And I think it was like 1,700 times in relation to that nanosecond invocation. Like, that's how drastic these numbers are. And I don't think people really realize that.

So when we talk about performance of WebAssembly from a startup perspective, it's ridiculous. And then even just having the small few meg for each binary, versus a container image, is also another huge selling point. So that's great. Now, because we don't need the container, that also has drastic improvements to the developer experience on your local machine.

Now, I'm assuming - I know Justin's not, but Autumn, you may be running a Mac. Other people listening may be running a Mac. Linux containers aren't native there. I don't know if people knew this. And that's fine for compiled binaries like Go and Rust, where it's just going to suck anyway, and it doesn't really matter... But dynamic languages like PHP and Ruby have runtimes, and they have an interpreter instead of a compiler... This requires syncing your entire file system with your application, wits its dependencies, like a JavaScript application; tens of thousands of files in a Node modules folder... Into a virtual machine, and then doing some sort of execution. So you don't get that refresh, like Control+R the page and the new thing's there. You're going to wait three seconds, and then eventually it may work; or worse, like 10 seconds.

Now, Docker are trying to make this better. They've actually bought a startup in the last 12 months that has a really cool syncing technology to improve this. But with WebAssembly, it just goes away, because the sandbox runs natively on Mac, Linux, \[unintelligible 00:35:58.16\] It doesn't really care where it runs. We don't have a container, we don't have a virtual machine, it just has a sandbox. It disregards POSIX completely. So you get a great local developer experience. You just write code in your local machine, and you run it with this nanosecond invocation performance. Who doesn't want that? Stick a SQLite file in your host as well, and you're good. Screw the Postgres script.

\[00:36:21.18\] So from a DX perspective, I think it's unrivaled, and it's not something we've had in a very long time... And we still get the same benefits \[unintelligible 00:36:28.21\] because it's not based on POSIX and Linux file systems, and you don't need to install weird kernel modules and all this stuff. We don't even need the container aspects for repeatability, because if the code compels to that binary, you can literally run it anywhere. They're like the promise of the JVM and the Java bytecode...

Although I think \[unintelligible 00:36:45.26\] there now, but I don't know if we want to get into a religious Java work during this session.

**Justin Garrison:** How much time do you -- we have to stay on topic. Your hard drive's going to fill up if we go more than --

**David Flanagan:** We only have 1387 hours left, so...

**Justin Garrison:** Not enough time for a Java war. And that makes sense to me... Maybe this is just because you love it. Why Rust? You can compile WebAssembly from a lot of different languages. Why did you go with Rust?

**David Flanagan:** So I do generally believe that Rust just has the best support right now. And it's not a surprise, because Rust and WebAssembly all came out of Mozilla around the same time. There was a lot co-conspirators there trying to build a new rendering engine for Firefox, with Rust and with WebAssembly. So even though Mozilla had those layoffs, and probably set WebAssembly back a substantial amount - I think that was '20, '21, whatever... We're now in a position where it's been picked up by enough companies because of that performance characteristics. And when we talk about the performance characteristics, we're talking about CDNs at the edge, where they want to run WebAssembly as fast as possible. Akamai are a big sponsor now of the spec, and Cloudflare are involved with WebAssembly, and I'm sure AWS have got some fingers in that as well... So there's a lot more support, a lot more structure, and WebAssembly is just coming forward. And Rust has been there every step of the way, to the point where Rust was built -- you know, it's like Go. It was multi-target by default. It can compile to any target, as long as you have the right toolchain involved to do that. And WebAssembly was a very early target for Rust.

It's also just a great language when you get into the science behind it. Not that I'm great with the scientific part, but the type system, the memory safety... It's just a joy to work with. And having done a lot of Go in the past, and I like Go as a language, dependency management has been rocky over the last 10 years.

**Justin Garrison:** I'm not a fan of Go because of the dependency management ecosystem. I don't enjoy writing Go. I love Cargo, but I don't like writing Rust. And so \[unintelligible 00:38:46.07\] And it's mostly because I haven't just done enough with Rust... But yeah, when I picked up Cargo, I'm like "Oh, this is how I wish Go was." I wish this dependency management worked in a different language.

**David Flanagan:** Yeah. With Go, you're like "Oh, I need something that can do a DAG. Alright, how do I find that package? Oh, well, I'm going to google it, or I'm going to go on a mailing list." I'll go onto GitHub and just search and hope I find the right package. NPM, Cargo, PyPI - these all have central repositories where you just go and search for the thing you're looking for and you find them... Which is just like \[unintelligible 00:39:18.09\] number one. But then Cargo just has a really strong CLI that makes pulling in these dependencies, updating these dependencies, feature toggles per dependency, overrides on a crate level basis... Like, everything that you need to do exists in one tool, and you don't have to really venture out of that too much... As well as Rust - again, I like the language, I like the mix of functional, but not full OO... It works really well for me. So anytime I see Rust, I usually go for that before any other language... Although I still have a soft place in my heart for Go, a little bit.

**Autumn Nash:** I feel like Rust has done open source the right way. They've done a lot of building their foundation and the documentation and making it as usable. And then with all the memory safety and stuff... If you're going to pick a new language to learn, if it's between Rust and Go or Rust and a lot of things, you might as well just do the work to learn Rust, because there's so many positives that you're going to get from it.

**David Flanagan:** \[00:40:18.05\] Yeah. If you take a look at Rust, it's not doing this alone. Alexa is another great example of a modern language that has been built on developer experience, giving people good error messages in the compiler.

**Autumn Nash:** Oh, yes.

**David Flanagan:** Why is that so hard for some languages to do?

**Autumn Nash:** That is the most frustrating thing ever. Like, okay, I get it, you're mad at me. But can you tell me why, please?

**Justin Garrison:** Missing semicolon on line 100. I'm like "It's a four-line file!"

**Autumn Nash:** I know! I'm like "But why?!"

**David Flanagan:** Yeah, these languages got it right. The error messages usually point you to the line, they tell you what's wrong, and sometimes they'll even tell you how to fix it. And that's just not something -- nobody has invested that much effort into compilers or interpreters than I would believe Alexa and Rust has in the last decade, so...

**Autumn Nash:** That alone would just make me learn a language. Like, I might go learn Rust now. What advice do you have for other people in DevRel that are kind of pivoting, in a way? Because as someone who looked at getting into DevRel, a lot of -- right now I think the industry is kind of going through a lot, and it's like "Sell your soul, and hawk this horrible AI product that nobody wants to use", or "Go start your own thing." Do you have any encouragement for the fact that you started your own thing and you're doing well at it? Or do you have any advice for other people in DevRel? Because it seems like you're kind of living the dream right now. You're getting to actually build cool things, and experiment, and not have to sell your soul for it.

**David Flanagan:** I mean, I've sold my soul a few times over now, but yeah, I'm in a good place. Yeah, DevRel's -- things are tough right now. I've got a lot of friends that have lost their jobs, and the entire tech market is in a major phase of cutbacks... But DevRel's not going anywhere. I think we all agree, developers - we smell market bull\*\*\*t a mile away. And the problem was all these companies hired DevRels to be marketers, and not to do proper developer advocacy and relations. And then they put out market \[unintelligible 00:42:11.20\] content, developers smelled the bull\*\*\*t, and now they're all like "Oh, we're not getting the results we expected." Like, no s\*\*t. Like, you can't just take the same thing you've been doing for the last 20 years, call it DevRel, and then expect to have a massive upturn in your business.

And there's also the challenge that a lot of people are looking at like the Linux Foundation and the Cloud Native Foundation as free marketing, donating their projects... And that's causing a lot of hassle too, because these projects think "Oh, we're now an incubating CNCF project. We're going to get all of these contributors. People are going to fix all the bugs and we're going to get all this adoption." But you're still just one project in a sea of many, in an evolving landscape, with developers that are frustrated trying to keep up with this race that they didn't sign up for. No, it's not going to work.

So I think we're going to see a lot of change over the next two to five years. Developer advocacy and relations is going to be stronger than ever, with the right people, with authentic, credible messaging, with companies that get it. And everyone else will go back to doing what they were doing before. Dodgy mailing lists, dodgy advertising, and... Yeah.

**Justin Garrison:** All the same companies that changed their sysadmin titles to SREs, and they're like "Why isn't reliability better?" It's the same folks, doing the same thing. You didn't just change it because they're SRE now.

**Autumn Nash:** That's just because they wanted to pay DevOps engineers less money, and then pay \[unintelligible 00:43:29.21\] That's like when they did business intelligence first, data sciences, and then - just, why? Why are you like this? I really hope you're right, because I feel like that's the dream, to be able to get the job where you get to experiment and really tell people what using a product is like. The market is rough, dude. People just seem so down, and it just seems like it's rough out here.

**Justin Garrison:** \[00:43:57.24\] A lot of the early DevRel was just -- they found someone in the community that was excited about their product, and like "Hey, why don't you just do what you're doing now, and just work for us?"

**Autumn Nash:** Yes. Can we go back to that?

**Justin Garrison:** That seemed like the cycle for a long time, and that didn't scale very well. And a lot of times it was, like you said, "Well, we need a marketing arm, but we're going to call it DevRel, and have some developer do our marketing stuff, and manage the Google clicks", and stuff. Like, no, no, no. Wait, hold on.

**David Flanagan:** Yeah. I mean, going back to my early career, before I was doing that, my title was DevRel. I was an engineer doing DevRel anyway. And I think that was when it was at its most authentic, when you have people that are building something, but they're also good at showing people what they're building, and why they're building it, and telling that story. That narrative, when it's authentic, is \[unintelligible 00:44:42.07\] But when we get to the stage where every startup in Silicon Valley is hiring a 10-people DevRel team, and they've got 20 engineers... It doesn't really make any sense at that point. They're overloading the marketing arm completely. They're telling the same messages, they're getting diluted, they don't make sense anymore, the demos get contrived, and it all falls apart. And I've seen this with many organizations.

**Autumn Nash:** Not just that, but they're forcing people to sell things they don't believe in. A lot of people were hired for one job, and now they're like "Now you sell this product, and you need to be happy." Nobody's going to do a good job doing that.

**David Flanagan:** I had one friend that was at many startups, and all three of them got bought by VMware. And he was like "For f\*\*\* sake." He's rolling in his money, of course, because it's three acquisitions, but he's like "How do I keep ending up at VMware? I can't do this." So yeah, it's a challenge in DevRel. But I do think it's going to come out better, and I think the people that stick with it, that really just enjoy playing with technology and keep their messaging authentic and credible and have fun with it, those will be the people that succeed, that do well.

**Justin Garrison:** I 100% believe that when someone sees someone else having fun, you want to know why. If you're having authentic fun on the internet, people start coming and they're just like "Hey, what are you doing over there?" "Oh, this is amazing. Let me show you what we do." I see my son out there, he sees some friends playing, he's like "I want to go play with them. I don't know what they're doing, but I want in." And five minutes later, "Okay, it wasn't for me", whatever.

What's next for Rawkode Academy? What's the next fun thing? What's the next architecture design? What else are you building that you're like "This is missing still"?

**David Flanagan:** So my next major task is -- obviously, I've said that I'm saying goodbye to YouTube \[unintelligible 00:46:31.11\] content goes first. So I've been building out my own streaming platform, where we do the encoding and drop it into Cloudflare R2 buckets. Now, I've got an initial concept where I use Cloudflare Stream, but I'm very much trying not to be baked into any service. So I started doing some investigation to how videos work on the internet. And I was absolutely shocked to find how simple it is.

So all you need to do is send your data over RTMP to an endpoint, which does audio transcoding and video transcoding. And then all it does is write the same byte buffer size to a single file and object storage. And that's what gets read by all the clients. You just write over that same file, every second, every 30 seconds, 30 times every second, whatever you want - it depends on your bit rate, your frame rate and all that. But that's all you have to do. And that's actually not that hard. There's a lot of really good pre-existing software out there that can do this. It will be the first time in this new architecture where I'm going to have to get some Equinix Metal credits, get a beefy box, run some containers with Kubernetes, hopefully on Talos, and do that encoding. Because I'm not going to be able to offload that to a serverless platform. I don't want to buy into Amazon's video encoder, Cloudflare's video encoder... So I'm going to do it myself, and I'm very excited. But when I found out all you need to do is take the bytes, do the processing and write to one file, and like object store, I was like "I can do that." So that's my next mission, is to build out my own streaming pipeline. And then I'll still be storing all the videos in their full form in Cloudflare R2. That's how we deliver everything to the website right now that's not HTML. No zero egress fees; it's fantastic. Thank you, Cloudflare.

**Justin Garrison:** \[00:48:23.12\] The way the internet is intended to be.

**David Flanagan:** Yeah. And something I've been experimenting with in my spare time is how can I build my own Riverside StreamYard thing. So I've been kicking the tires on WebRTC, and seeing if I could actually build my own local-first StreamYard Riverside thing. And again, that isn't even that hard either. Once you get the WebRTC feeds coming to a single location, you're pretty much just baking them into HTML canvases, and then spreading them out on the page with HTML. And that I couldn't believe how simple -- again, I'm saying simple... These things are complex, but with modern open source and tooling and all that, they are almost trivial to implement. Like, I'm not doing the heavy-lifting here. So I'm very excited to kind of take complete control of that. And everything I'm doing is open source on GitHub as well. It's not all open source right now, because we're still finalizing bits and pieces, but it's going to be there pretty soon. And a lot of it already is there, especially a lot of the GrafBase GraphQL stuff is already on GitHub.

**Autumn Nash:** The way you say "This is going to be so simple", I'm both scared, but I have faith in you...

**David Flanagan:** I mean, encoding video is not simple. OCR is not simple. AI is not simple. But in 2024 we have simple APIs that we can use to do all of this stuff. I can run Ollama locally. I can use Gemini from Google. I can use OpenAI. If I want to do video transcoding, there's amazing Python projects out there that do all of that for me. I actually sat down and in less than half an hour three weeks ago, four weeks ago was able to write a Python script that used -- I can't remember what the Python library is called, but all it does is like OCR. It took every single frame from every one of my previous videos, ran it through the OCR, and did command extraction. And what I got was a CSV dataset of the video, the timestamp, and the command that was run. And to me, that's invaluable, because now I can enrich all of my content with "Here's all the commands, as they're being run. Copy and paste it."

And that's another thing why I'm building this whole video there too, is like, imagine watching the tutorial and there's a sidebar with the commands you copy and paste, links to the documentation... All of this can be done via good OCR, voice detection, transcription... And then you get to truly augment the video experience for the viewer. I can't do that with YouTube. I can only do that by building it myself.

**Autumn Nash:** That's awesome. Also, I did not know that there wasn't better analytics for YouTube. It's kind of shocking the amount of users on that platform, and the acquisitions, and nobody was like "Let's give people more data about their audience so they can do better."

**David Flanagan:** They give people the data that they can under certain data regulations. They can't tell me the name of everyone that watches it. That's just never going to happen. However, if I control the pipeline and they're logged in, I know who they are. I know what technology -- like, if you watch 20 videos on my website, I might know that you're interested in Rust, WebAssembly, Python, whatever. That data becomes useful for me. One, I get to prioritize the content that I'm making and do more of the stuff that people are enjoying... But also, from working with my partners, they might be interested to know that 70% of the people in the last two weeks have been googling Python, or whatever.

There's very good uses of that anonymized data that doesn't impeach anyone's rights... And I want to explore that in an ethical way. And everything that I do -- all of my dashboards, my plan is to make them all public. You'll actually be able to come onto dashboard.rawkode.academy and see anonymized how many people are searching for Python, how many people are searching for this, and build up this really cool, unique data source of developers that want to continue their career and learn new technologies. At least my little bubble of it. I'm not StackOverflow, but you know...

**Autumn Nash:** \[00:52:07.00\] But I love that you're utilizing open source, but you're also giving a lot back, and you're also telling people about it. If you're going to use something that other people built, the way that you're telling other people "Hey, this cool thing, go check this out, instead of this, this and this", you know what I mean? If you can't give them money, you're still giving them more customers, you know what I mean? And you're still helping maintain it. So I think that's cool that it's like good stewardness of open source in those technologies.

**David Flanagan:** Yeah. Like I said, I'm not building any of the hard stuff myself. That's why everything I do is open source, because I don't feel it's anything -- I think the architecture is unique, and I think the spin on stuff that I do is unique, but the code is not unique. It's the simplest, easiest code in the world. Enter into a SQLite database, read from a SQLite database. However, the way we compose it and put it together - that I think is interesting, and I want to be able to share that with people as well.

**Autumn Nash:** But that's awesome, because some people will still take open source code and then charge people and use it. But also, the way that you're building in public, you're going to give somebody else confidence to go and string some open source together and build something. That, being a developer, is now accessible. You can go and learn that. Being able to learn it and string things together and build something and to see how someone else is going through those problems is how people get good at this stuff.

**David Flanagan:** Yeah, I couldn't agree more.

**Justin Garrison:** David, thanks so much for coming on the show. We almost made it through a whole episode without mentioning AI... But that's okay, it's in there.

**Autumn Nash:** Justin, it's never going to happen.

**Justin Garrison:** It was close.

**Autumn Nash:** It's just never going to happen.

**Justin Garrison:** But it's fine. We'll make it someday. But this is a great -- almost like a side quest of WebAssembly that I didn't really expect. So if people want to find you, I'm sure you're at RawCode Academy. Anywhere else they should reach out?

**David Flanagan:** I mean, on socials, I'm @Rawkode or @RawCodeAcademy. The website is RawkodeAcademy. And of course, check out the YouTube. Like I said, there's 400 hours now of cloud-native Kubernetes and container-based Rust content for people to enjoy... So I hope they get value out of it.

**Justin Garrison:** Soon to be WebAssembly.

**David Flanagan:** And a ton of WebAssembly, for sure.

**Justin Garrison:** Alright, thank you so much. We'll talk to you again soon.

**David Flanagan:** Thank you. My pleasure.

**Break**: \[00:54:20.24\]

**Justin Garrison:** Thank you so much, David, for coming on this show and talking to us all about Rawkode Academy. And thank you, David, for sticking around for the outro. This is just going to become a thing now. It's kind of fun. This isn't an outro anymore, this is just the tail end of the podcast. And I know for this episode you're going to quiz me on some Kubernetes things, is that right?

**David Flanagan:** Yeah. We'll see if you're still thanking me for sticking around.

**Autumn Nash:** Finally, somebody who speaks the Kubernetes to actually test Justin.

**Justin Garrison:** I am very scared. If no one has seen David's series of Klustered on YouTube, you should go watch it. I participated once as a breaker, but never as a fixer. But there's a lot of weird things that can break and happen... And you have a quiz for me, and I just am trying to delay as long as I can, so I don't have to take this quiz.

**David Flanagan:** I promise there is nothing here that is Klustered-bad. These are relatively reasonable questions, from easy difficulty to the Rawkode difficulty level.

**Justin Garrison:** Okay. Okay. I'm just worried that most of my experience is probably -- it's going to show that I have so much more experience in EKS and bare metal, and there's a lot of gaps in between, of different things that people do. So we're going to try.

**David Flanagan:** So I shouldn't ask you any questions on the eBPF \[unintelligible 00:59:03.14\] kernel modules.

**Justin Garrison:** Please no.

**Autumn Nash:** See, y'all are missing it, because you can't see our faces, and usually Justin and me have great faces, but David's faces are fire. He's got the cool Scottish accent, AND the faces.

**David Flanagan:** And the dry Scottish humor, which is just sarcasm.

**Autumn Nash:** It's the best humor, what do you mean?!

**Justin Garrison:** Alright.

**David Flanagan:** Alright. Well, we start with the easy question...?

**Justin Garrison:** Sure. And end with an easy question as well. Just keep going through it.

**David Flanagan:** We'll see how it goes. We'll keep it nice and simple. I know you're going to get this one, but we'll start with "Which Kubernetes object is responsible for ensuring a specified number of pods are running at any given time?" And it's multiple choice. Or you may not need it for this one.

**Justin Garrison:** I don't need it for that one, but if anyone's driving in their car, listening to this podcast right now, just be careful, watch the road still, don't swerve. That would be a replica set. I'm assuming not a stateful set, which - actually, I guess stable sets are replica sets under the hood, aren't they? No, because they're numbered.

**David Flanagan:** Yeah. They're a special type.

**Justin Garrison:** Yeah, it's a special type. But yeah, a replica set would ensure that a certain number of pods... I was just messing with KubeVirt this last week, which has like VM pools, and how to run VMs inside... It is difficult.

**David Flanagan:** It is. Yeah. Anyway, you got that correct. You didn't say deployment, which means you understand the hierarchy of Kubernetes controllers. So... Tick.

**Justin Garrison:** Yes.

**David Flanagan:** Alright. Next up we have "What is the purpose of a Kubernetes liveness probe?"

**Justin Garrison:** Uh, that is part of the startup process, to check that a service is alive and responding... It's not ready yet, but it is responding. I'm trying to think if there's more specific detail...

**David Flanagan:** There's one characteristic that -- I see something that trips people up... Readiness probes and liveness probes, and then the startup probes. There's three different probes on a Kubernetes workload. But specifically, a liveness probe.

**Justin Garrison:** Let's see... I'm trying to think of the -- because the startup probe is just that the process is running, or just the very basics of it... But I'm assuming liveness probe is that the -- it's not always an endpoint though, because it can be a shell... I don't know. I can't think of a specific detail of a liveness probe.

**David Flanagan:** Yeah, the liveness probe is probably the simplest of them all, and it just checks that you get an HTTP 200 for an HTTP check; or you can do TCP checks, etc. Basically, what makes them different -- okay, I don't want to get into like a 14-minute rant on how probes work in Kubernetes... But you use the readiness probe to determine whether a pod endpoint should be part of a service or not, and a liveness probe is whether if it fails, the pod has to be restarted.

**Justin Garrison:** \[01:01:59.08\] Restarted. Yeah. Okay. And that's usually for if you want to like start up a cache. Because the cache might need to warm up; you don't want it in the service until the cache is ready. So it's alive, but it's doing something before it's actually ready to serve traffic. Is that right? But can you do shell commands for liveness probes, too?

**David Flanagan:** Yeah, you can do exec or HTTP... I think that was the two main ones. Alright. Let's see. Obviously, we only decided to do this moments ago, and we threw a bunch of stuff into AI, and it had to give me a whole ton of questions, and I had to very quickly filter them, so that's why I'm seeing them at the same time as you. Okay --

**Justin Garrison:** But you see the answer?

**David Flanagan:** Yeah. But in fairness, the answer for the readiness problem was s\*\*t. The AI said "Readiness probes check if the container is ready, and liveness probes check if it's still healthy."

**Autumn Nash:** That's why I said David should test you, because before that, while you were gone, we had it come up with the release names, and it completely made up release names. They were not the real ones.

**Justin Garrison:** That's some great hallucination right there.

**Autumn Nash:** Yeah.

**David Flanagan:** Yeah, so I'm having to provide my own answers. But that's okay. The questions are what we wanted. Okay, "Which Kubernetes API object is used to expose a service to external traffic using layer four TCP or UDP?"

**Justin Garrison:** Kubernetes resource exposing layer four.

**David Flanagan:** Yes.

**Justin Garrison:** This isn't like a service type, like node port. This is a specific object, or a specific resource.

**David Flanagan:** It's looking for -- yes, a node port would be... It's looking for a service type \[unintelligible 01:03:34.03\]

**Justin Garrison:** Okay. A node port would expose that, but... Is it looking for a specific type? When you said it was external, so it's not cluster API... Load balancer could be the thing, if your load balancer supports layer four and layer seven.

**David Flanagan:** Yeah, you've already nailed it, and given a better answer...

**Justin Garrison:** I feel like I'm missing something here... Mainly, you're ruling out ingress or gateway API. Gateway API can do it too, though.

**David Flanagan:** Yeah, but I don't think the AI is up to date enough to have gateway...

**Autumn Nash:** No, it always gives me like the oldest version of whatever I'm asking for, and then I have to update it.

**Justin Garrison:** Yeah. This is like three-year-old Kubernetes content, which is like nine releases.

**David Flanagan:** So you're right, ingress can't do layer four. It can only do HTTP. So that's true though. It then has service as an option, but those are obviously internal to the cluster, unless \[unintelligible 01:04:31.06\] you're just a plain service, which means you're a type cluster IP, which is internal...

**Justin Garrison:** Not external, yeah.

**David Flanagan:** Node port could do it, for sure, if your pods are listening. Why would it not? But you're right, load balancer - whether you get a cloud load balancer at the other side or something, provisions internally in a cluster is the only way to do L4 publicly. Yeah.

"Which Kubernetes API object allows you to define a set of rules for selectively enforcing constraints on pod creation and updates such as requiring specific labels, or preventing privileged containers?" Now, I like this one, because its answer's wrong, because it's not up to date.

**Justin Garrison:** Now, is this a -- not a mutating webhook, the other webhook; a validating webhook. I'm guessing not. This is probably an admission webhook, right?

**David Flanagan:** Uh, you could do this through admission control, but it's not what it's looking for. It's looking for something that's baked into the cluster.

**Justin Garrison:** Policies?

**David Flanagan:** Pod security policies.

**Justin Garrison:** But PSPs have are gone, right?

**David Flanagan:** Yeah, but we have --

**Justin Garrison:** \[unintelligible 01:05:42.23\] there was a replacement.

**David Flanagan:** I mean, they're also called pod security policies, are they not?

**Justin Garrison:** The new ones are called pod security policies? Whatever one got deprecated. I never remember what the new one is.

**David Flanagan:** No, I think they both have the same name.

**Justin Garrison:** No pod security standards. That's it, right?

**David Flanagan:** Oh, pod security admission.

**Justin Garrison:** Admission. Yeah.

**David Flanagan:** That's the new one.

**Autumn Nash:** I'm surprised it's not all named after Greek stuff, because I swear, Kubernetes naming... Like...

**Justin Garrison:** \[01:06:09.04\] So there is a standards, but it's admission. Okay. Pod security admission, 1.25 and above. AI is looking at 1.24 docs for PSPs.

**David Flanagan:** Oh, \[unintelligible 01:06:18.05\]

**Justin Garrison:** Yeah. Yeah. Cool. Okay.

**David Flanagan:** Alright. I'm going to give you one of the questions that I do at quizzes for Kubernetes, because it's a fun question, and there's multiple answers, but there's only one right answer.

**Justin Garrison:** Okay.

**David Flanagan:** "There are two types of admission control in Kubernetes. What are they?"

**Justin Garrison:** Mutating and validating?

**David Flanagan:** Wrong!

**Justin Garrison:** Arrghh!

**David Flanagan:** So those are admission controllers, but actually, the two types of admission control are static or dynamic admission controllers. And then validating and mutating are types of dynamic admission control.

**Justin Garrison:** Okay, I see. Yeah, because a static one is like you add as a flag to the API server when you start the cluster, and that's your set of how you're letting things, workloads, any resources come into the cluster in dynamic is "Here's the web hook. Go get the thing", and you figure it out.

**David Flanagan:** Exactly. Which can be validating or mutating. But I love doing that one, because I usually spin up a Kube admin cluster and disable the pod controller, and then let people have some fun for half an hour.

**Justin Garrison:** Because you're mean.

**David Flanagan:** Because you can disable individual controllers on the controller manager, whether that be replica sets, pods, deployments, stateful sets, whatever. You could just go ahead and turn them off, which I find is -- there's lots of fun to be had there. Anyway, thank you for joining the Rawkode Academy Kubernetes Quiz.

**Autumn Nash:** Thank you for quizzing him, because sometimes when I quiz him, I'm just like "Oh, all I've got is Google and Wikipedia", because I don't do Kubernetes in production. But yeah.

**David Flanagan:** Yeah.

**Justin Garrison:** We need someone to quiz you on some database stuff for Java at some point...

**Autumn Nash:** We'll get Pete to do it when he comes back.

**Justin Garrison:** Oh yeah, when Pete comes back. Cool. Well, thank you again, David, for coming on the show and sticking around for the outro as well... And thank you everyone for listening. And for everyone that has been giving feedback, we see the feedback, the comments... Hopefully, we're adjusting the podcast in ways that people like, and... And thank you for sharing it, because I noticed it in other places, like Reddit and various places...

**Autumn Nash:** Reddit's been so cool to see all the feedback.

**Justin Garrison:** It's been fun. It's just great seeing that other people like the show and I'm not just out there like "Hey, you should come listen to my podcast."

**Autumn Nash:** And it was nice meeting you, David. Hearing about all the stuff you're working on is really cool.

**David Flanagan:** Yeah. My pleasure to be here. Lovely to meet you both. Justin, I'll see you in London very, very soon.

**Justin Garrison:** Yes. I don't know when this podcast is going out, if it's going out before... But yes, for SRE Day and TalosCon that I'm doing for work... David is speaking at TalosCon. Are you also speaking at SRE Day?

**David Flanagan:** I am. I'm doing a live Klustered.

**Justin Garrison:** Yes, it's going to be super-fun. So I'm looking forward to that. So if you're in London and want to come - hopefully, you're listening to this before September 18th, 2024; maybe we'll see you there.

**Autumn Nash:** I need you both to go to GitHub Universe, so I don't have to go by myself.

**Justin Garrison:** I think that overlaps. Well, no. That's in October. So yeah, check out GitHub Universe. Autumn is speaking in October as well, in San Francisco. Or San Jose. Somewhere near --

**Autumn Nash:** San Francisco.

**Justin Garrison:** Yeah. Alright, cool. Thank you so much, everyone, and we will talk to you again soon.
