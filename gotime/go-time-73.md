**Brian Ketelsen:** Alright, welcome to another episode of GoTime. This is episode number 73, and we're joined today by Andrei Matei from CockroachDB. I am Brian Ketelsen, and with me I've got Carlisia Pinto...

**Carlisia Pinto:** Hi, everybody.

**Brian Ketelsen:** And our guest Andrei Matei.

**Andrei Matei:** Hey there.

**Brian Ketelsen:** Andrei, why don't we kick this thing right off without lots of flutter, about you telling us who you are and what you do.

**Andrei Matei:** Sure. Well, like you said, my name is Andrei Matei, I'm a software engineer. I live in New York City, and I work for Cockroach Labs, which is the company behind CockroachDB, which is a distributed database which I assume we'll talk about. That's my briefest of introductions.

**Brian Ketelsen:** That is pretty brief. How did you get started into Go? What brought you into the Go world?

**Andrei Matei:** Well, it was Cockroach that brought me into the Go world. Before that, I was working at Google for a long time, where I was doing some Java, but mostly C++, on various infrastructure projects.

Then I had a stint at Dropbox, which is mostly a Python shop, although they were starting to have some Go in the infrastructure department when I was there... But I was mostly doing Python stuff. And then Cockroach Labs and CockroachDB were a new company and product at the time when I joined, and this was about maybe two and a half years ago already. They had chosen Go as their programming language, so I've been doing Go ever since.

I think we are maybe one of the bigger Go projects out there, at least that's my impression... But I'm biased.

**Brian Ketelsen:** Yeah, there are certainly some big Go projects out there, but CockroachDB is one of the bigger ones, absolutely. So why did you choose CockroachDB to go work?

**Andrei Matei:** Well, at the time I was looking for a new company and a new product, and Cockroach Labs, the company, and this database they were building - for me personally, they were ticking all the boxes. On the product side, if you're a guy who likes to do systems, particularly distributed systems, which has been my background... What we're building here is sort of the quintessential distributed system, which if it existed, it would serve as a building block for many other things. It's one of the fundamental pieces of infrastructure... A transactional, consistent database.

So the product sounded really appealing, and then the company had all the other good signs about it. I like the founding team, some of the early engineers very much; I thought they have a very strong team. It's an open source project, so I sleep better at night; I think that maybe I'm giving something back to someone. It seemed to gather a lot of interest... It was already at the time punching above its weight in terms of advertisement a bit, because a lot of people had heard of it, I think just because people were excited about the possibility of such a system existing, or at least existing outside of Google and maybe a select few other big companies.

\[00:04:26.19\] So it really kind of had all the stuff I was interested in... And again, it sounded like a very challenging technical project, which attracted me.

**Brian Ketelsen:** Yeah, it's the holy grail of distributed systems development... You know, creating a database that even pretends to be consistent, that's distributed - that's tough work.

**Andrei Matei:** That's exactly right. The holy grail is well put, and in fact, I believe that's how it was sold to me at the time... And I've been preaching it ever since. Now I tell people that maybe it is possible, and we're doing it.

**Carlisia Pinto:** Andrei, as far as CockroachDB, what do you think the companies who should be using this particular database are? Because what I'm thinking is -- I haven't used it myself, so what I'm thinking is is it more complex because of what it does, which is distribute your data in different machines, I suppose? Or do you also distribute data into multiple machines... But my question is does that add enough complexity that if you just want a straight up relational database you wouldn't get so much benefit from it? Or would anybody reap some benefits from using it?

**Andrei Matei:** Yeah, that's a great question, and it comes up all the time. I think different people have different answers to this. I'll give you mine with the caveat that other people might say different things, and particularly marketing people might want us to focus on one niche or another... But my personal view is that anybody who's using a relational database -- first of all, everybody who's using a database should probably use a relational database, and then everybody who needs a relational database I think should use CockroachDB at this point, instead of some of the older alternatives.

So I think you probably get benefits from CockroachDB pretty much regardless of your size. It's true that it sounds like it's a complex product -- in fact, technically it is a very complex product, and it's a difficult thing to implement, and it is in many ways more complex in building than a single machine database.

On the other hand, we do our very best to hide this complexity from the users, the clients and the administrators that actually need to run the database. I think in fact CockroachDB, for most people, is one of the easiest databases to run and administer at the moment. This thing about complexity is people think they can just run one database on one machine on some server somewhere, and they set it up once and that's the end of it, and they get away with a simple story... But in reality, if you care about your availability at all, then you probably need to start setting up replication, or a continuous back-up solution for that database, and a bunch of tooling around that.

\[00:07:58.16\] Pretty soon, you end up with a lot of complexity, and in fact I would argue that a product like Cockroach, which has this idea of availability and replication built in at its core, will end up looking a lot simpler in practice, and it will also be simpler to manage. So that would be my answer - I think you get benefits from Cockroach at any scale.

We try to address a pretty diverse range of companies and clients. We go from the very largest companies, that have geographically distributed clusters, where you really need a massive cluster with some data in Asia, some data in the Americas, some data in Europe... We go from this to even some customers that embed Cockroach in the platforms they distribute to people, where they run the database in a much smaller cluster, but they still care about the availability and they care about the operational simplicity of running Cockroach. We really try to serve everybody.

**Brian Ketelsen:** Saying that everybody who's running a relational database should be running Cockroach - that's big. Those are big words, my friend. So what in your mind is missing from Cockroach right now to keep people from using it? Or is there anything that's missing at this point?

**Andrei Matei:** Well, there are things that we're improving every day. I don't know what's missing... There are some areas of performance where we could always be better; there are areas of tooling around the database, and administration support where, again, we could be better. There's a long road ahead of us. But otherwise, I stand by my big words. I do think -- if I were starting a company and I had any data that I would care about to serve to people, particularly if I'm building an online service (which most things are now), this would already be my database of choice... And maybe this was not true some time ago.

A big thing that hinders adoption of a database is novelty. When people think about their data, they don't want to experiment with new things. They like very tried and true solutions. If it's anything that's preventing adoption, it's the novelty, but I hope we're overcoming this.

**Carlisia Pinto:** That is a very good point, because whenever I wanna set up a database, I don't want to think about it. I already fiddled with the database enough; I already ran into enough problems, I don't wanna learn a whole new set of problems with a new database. I wanna use something I already know. But you made so many interesting points in that answer; there are so many things we could dive into.

One thing that you were saying is you rarely need a standalone database, right? A single instance. Usually, you need replication... So there are many alternatives out there, and one alternative, I guess, is you replicate it yourself, and you manage how to synchronize the data using maybe another system, or something you write yourself, God forbid... \[laughs\]

**Brian Ketelsen:** Yeah, please don't do that.

**Carlisia Pinto:** Yeah, I don't know; it sounds really tough. But another option too is you contract a service like Heroku, or Amazon, and that is done for you. So my question for you is would it be sane for someone to think about "Well, I have this thing, CockroachDB... It replicates my data", and we'll just say it's easy enough for people to consider just setting up their server and save a little bit of money and set it up themselves, or do you think it would require extra skills, and extra monitoring? How do you fare against Heroku or Amazon, that's basically what I'm saying. Would you encourage people to do it on their own?

**Andrei Matei:** \[00:12:44.14\] Yeah, it makes sense. I would encourage people to do it on their own. We try to make this product very easy to use, and the fact is that it is in my opinion easier to use than most other relational databases that I've tried. I think it's much easier to set up than a Postgres instance, or a MySQL instance... Even a standalone instance, let alone replication or some sort of a clustering solution.

So I think people can do it themselves. We're trying to optimize for some of the popular clouds out there, and we're trying to make it easy for people to set it up on AWS, on GCE, on DigitalOcean, on all these guys.

**Brian Ketelsen:** Azure...

**Andrei Matei:** On Azure, yeah.

**Brian Ketelsen:** Thank you.

**Andrei Matei:** So we try to have... \[laughs\] Yeah, we're actually pretty big on Azure. So we try to have pretty turnkey solutions; ideally, it would only be a few clicks for anybody to set up their own cluster. And then this cluster - at least the advertisement says that it runs itself; it shouldn't need particularly comprehensive administration skills. You shouldn't need a DBA, unless your needs are pretty advanced. This is definitely the direction in which we're going. We want it to be easy to set up their own clusters.

**Carlisia Pinto:** Yeah, I definitely see an advantage of having full control over your stuff like that, rather than using this service that controls it, and then I'm limited to their interface. And then one last question, and then Brian I'll let you to ask... You said that a lot of people embed CockroachDB in their applications, and my quick question is do they usually do it using a binary, or directly from the source code? How is it usually done? That's fascinating, by the way.

**Andrei Matei:** Yeah, this is also use case and a niche that particularly surprised me when I started to see it repeatedly. I thought in the beginning that maybe it was a one-off, but then... It seems that if you want to ship a box, if you want to ship a server that somebody puts in their data center, that runs a bunch of proprietary stuff, and you want to ship manually, you wanna scale your business, you want the support burden of managing that server remotely to be very minimal... So you want software that kind of is easy to setup and runs itself. I think that's why some of these companies are using Cockroach.

Other databases -- I don't wanna speak badly of anybody; I very much respect anybody who's built a database... But they're not the easiest things to run. Sometimes they do not run themselves, and particularly when you need to manage one of these things remotely, the fewest interactions you need to have with your database, the better it is. And I would say that most people - in fact, everybody that I know of - embed our officially released binaries. I think it's rare to build from source and ship out something that you've built from source, because you want the best guarantees, you want the releases that have had the most testing, and our company (Cockroach Labs) stands behind the most -- its not uncommon for these customers to come back to us and ask for a fix or some improvements that are sometimes tailored more specifically to them... And then we'll do something for them, but generally we'll still apply those patches to a release binary, to a release branch; we'll actually make a release for them, rather than just tell them to build from source.

**Carlisia Pinto:** \[00:16:59.10\] That's super nice.

**Andrei Matei:** Yeah. Also, another thing I'll say is that our build system is not the simplest. If you want to build from source, and particularly if you wanna make sure that what you build is a good binary because of all the dependencies that we have, you probably -- you either have to set up a lot of stuff yourself, or you have to just use what we give you... There's many tricky things, like for example the version of libc that the binary links against matters when you care about what Linux distributions your binary will run on, and stuff like that... And you're better off allowing us to do the build for you, because we have our build machines with very controlled environment and very controlled dependencies, and you know that we've tested this on a number of platforms.

For the most part, you wanna pass this, rather than just build it yourself on your laptop... Because then you'll get a binary that definitely runs on your laptop, but it's less clear what other platforms it will run on. Does that make sense at all?

**Carlisia Pinto:** Yeah, yeah. Let's talk about vendoring... No, I'm sorry, no. \[laughter\]

**Andrei Matei:** We do vendor, we vendor a lot of stuff. \[laughter\]

**Brian Ketelsen:** I can tell you from my experience - I've been a DBA for maybe half of my distinguished, long career, and deploying a Cockroach cluster was the easiest thing I've ever done. Managing things like MySQL clustering - it requires a lot of specialized knowledge, and it's not a simple thing to set up, and it's a very complicated thing to keep running or debug when it's breaking. Setting up a Cockroach cluster is really simple.

**Andrei Matei:** Yeah, I would agree with that... Of course, it's in my interest. But then I'll also tell you that it is actually getting easier with every release. It's something that is receiving pretty constant improvement... And it's still not as easy as we would like it. There's still steps that you need to take sometimes that perhaps should not be necessary; perhaps we could do better. It's definitely one area that gets pretty constant improvements.

**Brian Ketelsen:** That's nice. So I guess the last time I looked at Cockroach was over a year ago; it was before your 1.0 release.

**Andrei Matei:** Oh man, you've gotta look again.

**Brian Ketelsen:** Well, yeah, I have been recently, but previously it was -- the SQL interaction wasn't quite good yet. Erik and I played with Cockroach quite a bit at a different job a couple years ago... When it first came out -- I guess not when it first came out; maybe when it was about a year old, we were looking at using it, and one of the things that I really enjoyed was watching the development of the SQL driver as it matured. That was fun for me, because that SQL parsing engine and how it interacts with the underlying storage layer was fascinating for me.

**Andrei Matei:** \[00:20:23.18\] Yeah, the SQL story - it's getting to be long in Cockroach at this point. If you tried it maybe two years ago or more, then you really saw the very early bits of SQL support. This is actually before my time in the company, but there was a time when Cockroach did not actually have a SQL interface, it only had a much simpler key-value-oriented interface... More like what some of the NoSQL databases used to have, although they're also evolving more and more elaborate languages now for querying.

And then we decided to go all-in on SQL. In fact, soon after we added the SQL interface, we pretty much took away the public KV interface. You could only interface with the database through the SQL language and through a SQL driver. In retrospect, I think that was definitely the right decision for us, although it does increase the surface area of the database immensely. It turns out that it's not so easy to have SQL support that's good enough to serve the majority of the applications out there.

One thing that's interesting is that -- so the way you interface with our database is by using a Postgres SQL driver; we speak the same SQL wire protocol and the same SQL dialect for the most part as Postgres, which is a pretty well established database... And now it turns out that this sounds very good in theory. You tell people, "Okay, we're gonna speak the Postgres wire protocol, so if you want to talk to this database, just use your application that works with Postgres, and it will just magically work with CockroachDB." But in practice, it turns out that applications tend to do pretty crazy stuff as soon as you give them a little bit of Postgres flavor. If you use any sort of ORM or any sort of tooling, they will use a long tail of features that Postgres offers, even if your application is very simple. So then in order to serve even any significant portion of the Postgres applications out there, you end up needing to pull in support for a pretty long tail of Postgres features, which turns into a multi-year project.

So I think it was definitely a bigger thing then to start chewing on (or whatever the expression is), than people originally thought when they decided to add just a bit of SQL to the database.

**Brian Ketelsen:** I couldn't agree with that more.

**Andrei Matei:** Yeah. But we've gotten a lot better, and this is also something that keeps improving. It used to be the case that if you had a Postgres tool of some sort, chances were that it did not work with Cockroach, even though at the lowest levels we spoke the same protocols. And I think now with the newer releases, most tools just work, so the balance pretty much shifted.

**Brian Ketelsen:** That's really nice.

**Carlisia Pinto:** So I don't wanna make the whole show about what I'm going to ask next, but you seem to have strong opinions about a NoSQL database... Do you wanna say something real quick about what sort of pitfalls people are getting into by using that, as opposed to just going with a relational database?

**Andrei Matei:** Well, that is a holy word; I want to get into it. \[laughs\]

**Carlisia Pinto:** Let's just keep it to pitfalls that people generally don't expect to have or foresee having. Every tool has its place, but sometimes we go in and we don't know what we're gonna find, right? So let's just keep it to that.

**Andrei Matei:** \[00:24:35.24\] Yeah. Well, I do have opinions on the topic; they're generally favorable to the relational databases... The thing about a NoSQL database as far as I -- probably I should preface this by saying that I'm not the most experienced guy in the world with NoSQL databases; I haven't used that many of them. But the problem when you talk about them, in my opinion, is that they're not all the same, so it gets pretty tricky to bucket them all into one category. When I talk about the pitfalls, probably different people who work on a different NoSQL database will say "Well, that one doesn't apply to us" or "That one is more nuanced with us..." Because as I was saying earlier, some of the NoSQL databases I think are generally evolving into -- they are incorporating features that were traditionally a part of relational databases.

Some of the big ones are support for general transactions - this idea that you can atomically change a bunch of stuff and do a bunch of freezes on your database, and then you decide to commit or to roll back that transaction as an atomic unit, and this unit of work is isolated from other transactions, meaning you cannot see dirty data, you cannot see something that somebody else did, but didn't commit yet; you cannot observe partial work done by somebody else.

This is an extremely powerful concept, and you only discover how powerful it is when you try to use a system that doesn't have it, and then you try to pile on code in your application that tries to supplement for the lack of transaction support, and then chances are it's gonna be insufficient, or you're most likely going to get it wrong.

In the meantime, some NoSQL databases are expanding their support for transactions towards more and more general support, but I think by and large they're still pretty far from what your traditional Oracle or MySQL database offered from back in the day. So I think that's one of the big pitfalls - if your NoSQL doesn't have transactions, you probably really have to think a couple of times before committing to use it for a large project, because you will need them. And then transactions are not strictly about SQL or NoSQL, they're not about the query language, but they tend to get associated with relational databases.

Then the other thing specifically about the SQL language - or lack thereof - is that people say "My application is pretty simple. I have a RESTful API, I need to write small units of data into one table or into one document store, I need to write one document type at a time, I need to read one record at a time... I don't do fancy stuff; I don't need joins or all sorts of complex analytical queries, all sorts of grouping, or ROLLUPs, or what have you. And I think pretty often that's true, in the beginning, for a database, but then as soon as you open the door a little bit to people to have access to your data, very soon you're gonna get people who want to do a little bit of analytics, and then a little bit more of analytics... "I just wanna see what is my biggest customer. Why can't I just write a query that gives me that?", stuff like that.

\[00:28:26.24\] So the SQL language - there's a reason why it existed for four or five decades, and it continues to live on, even though in some ways it's not ideal. It does show its age in some ways, but it's still the only widely used data querying language... And I think the reason is that it is very powerful, and even if you don't need -- nobody needs all of it, but most people need some of it. I don't know, I would not be satisfied with a database that has a much less sophisticated querying language that doesn't let me express most of the queries that I wanna make... So that's my bias and opinionated side on this war.

**Brian Ketelsen:** Good!

**Carlisia Pinto:** That was a very good answer, yeah.

**Brian Ketelsen:** I think in my experience if you start with any sort of NoSQL solution, at some point you're going to build your own relational code on top of that, which defeats the purpose of being NoSQL in the first place. There's lots of different ways that the different document stores handle that, but I think people don't necessarily always use those tools the way they're intended to be used either. I like relational a lot.

**Andrei Matei:** Yeah, I would agree. I also like relational, and I think a join operation, which is a relational primitive, is something that people hate to do until they need to do one; then if you have a NoSQL database and you suddenly need to join two sources of data, well, what do you do? You'll have to write a bunch of code for it. You might have pretended that you didn't actually need this kind of support from your database, but it probably took you two weeks to write the code to do it... And I'd be all but sure that your code is not as efficient as a database engine in doing that particular join.

**Brian Ketelsen:** Exactly.

**Andrei Matei:** So yeah, I'm also a fan of the language, and the data model in general.

**Carlisia Pinto:** So talking about language, tell us about your opinions on the Go language. I think you have some opinions there, too... And just for the record, we love exploring opinions that are different from our own. Of course, we're huge advocates of the Go language here on the show, and a lot of our listeners, and in that way we sort of live in a bubble. It's very refreshing when somebody comes and has different ideas and different perspectives and different opinions, so just go for it.

**Andrei Matei:** Well, sure, but I might be in the same bubble as you guys, because we've been a Go shop for the past three years, although there are some other languages that are very slowly creeping in... But by and large, it's a Go system. Yeah, we have pretty regular flame wars about the choice of the programming language, and there's always a heated debate for and against.

\[00:32:10.25\] I think overall for CockroachDB, Go has worked pretty well so far. I think the biggest selling point that applies very well to us is that it's a simple language, simple to learn. Most people - definitely two years ago, but I think even today, most people that come here, most new employees, new engineers are not already familiar with Go when they come in, but I think they generally get up to speed very quickly.

It has some caveats, like any language, but not too many. It's truly simple. You can really be productive in 2, 3 days, a week. So that part is really nice, and that goes a long way for choosing this language for your project.

Then I happen to have a list of pet peeves with the languages, that I'll tell to whoever listens... So I also don't think that the language is perfect.

**Brian Ketelsen:** We're listening!

**Carlisia Pinto:** We're listening...!

**Andrei Matei:** \[laughs\] Well, then I'll tell them to you...

**Carlisia Pinto:** Yeah.

**Andrei Matei:** I come from a C++ background historically, so there are things about C++ that I miss. You'll probably see hints of them in my critiques of Go. So what kind of stuff do you guys wanna hear? When I talk about my pet peeves with a language, they're bucketed in a couple of categories. There's some criticisms I have for the runtime, there's some other stuff about the language itself, then maybe there's some stuff about the libraries...

**Carlisia Pinto:** May I suggest you share with us what affects you the most in terms of productivity? Why don't we start there, from the most to the least, and then maybe we move on to another category?

**Andrei Matei:** Well, I don't know what affects me the most, but I can tell you what scares me the most... Which is this idea that the Go runtime is meant for systems software, for relatively low-level software, but it doesn't give you particularly good control over some aspects of how your program is running. For example -- and I think this kind of stuff, as your projects gets more and more mature and you start optimizing for more and more down to the wire things, low-level things, they really start mattering a lot.

I'll give you one example, which is that I don't think that Go gives you very good control over your heap memory use. For example, in Cockroach, like any databases, we try to have pretty good accounting of all our memory use. If you run a query and it has a memory budget, you should not be able to exceed that budget. Or generally, overall you as an administrator or a user using the database, you give the whole Cockroach process a memory budget; you say "Okay, you have 10 gigs of RAM to play with. Use it wisely, but you cannot go above that, because I've promised the rest to somebody else, or maybe my machine just doesn't have more, so we're supposed to stay under that budget."

So we account for our memory use the best we can, although the language itself doesn't make accounting easy either... But then the reality is that no matter how well we account for anything, we don't have control over when the garbage collection kicks in, and how much it's gonna collect and how aggressive it will be.

\[00:36:05.14\] If we account a memory use of 2 gigabytes for the heap, it might be that we have another gigabyte of garbage that we have very little control and very little recourse over. So even though it looks to us like we are staying under whatever budgets we have, the reality is that from the operating system's perspective that just might not be true; Go just might have decided to keep a larger heap around.

It's points like this, points of interface with the operating system, the small stuff about garbage collection, about memory allocations where the control is not perfect, and if you try to write really efficient software that runs in a very tightly specified bounds, I think you run into that. Cockroach is at the point where we start running into that, and it's a bit unclear to me at least what we can do about it. That's what keeps me up at night in regards to this language.

**Carlisia Pinto:** May I ask you a question...? And I don't have an intention to -- take it as a good intention; I'm truly curious, have you discussed this with...? Because it seems that it's a problem, I'd expect... Any software that is low-level, like a database, or a container, or things like that - I would expect them to have the same challenge. Have you ever brought this up with the language team? I know they have a form out there to collect feedback just like that. I wonder if you have, and if you have, have you heard anything back?

**Andrei Matei:** Yeah, we regularly talk to some of the Go team members, particularly the ones at Google. We make noise as we can about these things. This thing that I was telling you about particularly (or specifically), this thing about heap limits, is being discussed on a GitHub issue somewhere. There are various solutions or workarounds being proposed, but I think it's still in a bit of flux. I think it is being acknowledged by the Google Go team as an area of improvement. Then there were others where specifically us (our team, Cockroach) have raised an issue and prompted some changes to the runtime. There was something about a garbage collector behavior where sometimes the garbage collector tries to push back on the application that's generating the garbage, trying to make it run slower, at least while doing that collection, and then it turned out that that behavior was affecting us very much, and for very little benefit to the garbage collector. There was a lot of back and forth with the Google folks, and we did our best to provide traces and profiles and reproduction cases. I think that we have managed to impact some change, although I'm not sure that the change was to the degree that we were hoping... But that's another open discussion that keeps getting refreshed every now and then.

So yeah, we're definitely in touch with all sorts of members of the Go team. We do make these things known. And sometimes the feedback is immediate and we get a good resolution, and sometimes it's a longer discussion. I understand that the Go team must have thousands of angry customers like us, and we're also not paying them anything, so it is what it is.

**Brian Ketelsen:** \[00:40:14.09\] I'm curious - this is just a little bit of a change of topic, but I've been doing a lot of research lately on multicore ARM servers, and the new Qualcomm board that has come out that CloudFlare is using pretty extensively... It looks pretty nice - 48 cores, and pretty decent performance, comparable to some of the highest end Xeons... Have you tested Cockroach on an ARM platform with a high core count like that?

**Andrei Matei:** That's an awesome question. We have, yeah. Somebody gave us -- I think it was a cloud provider, I'm not sure who, and I don't have all the details on it, but somebody gave us a 96-core ARM machine to test on, and we started from a pretty low bar; I think in the beginning we weren't even building correctly on ARM, for some reason... But then we got it working, and I think we even have nightly tests or at least periodic tests of Cockroach on that platform, to make sure that there's no regressions, although I'm not completely up to date, I'm not sure about that. But I know that some things have happened.

Having said that, the hardware is still a bit exotic, so we don't run many workloads on that. We don't generally test with it when we do our test clusters, so I can't speak about it with very much certainty. But yeah, we're fans of big machines, and we definitely wanna experiment with all sorts of platforms.

In the ARM world, we also experimented with the Raspberry Pi boards, some of whom are ARM-based. There was a guy even running us on a cluster of maybe 30 Raspberry Pi's, or something like that. So it works, and different people try it on all sorts of weird things. But yeah, for the most part, we tested on public clouds, which have x86 machines.

**Brian Ketelsen:** Right. Do you find that performance improves linearly as you add more cores?

**Andrei Matei:** Well, 'in general' is a good addendum to that sentence, because whenever you talk about performance for a database, and particularly a SQL database, which has a very, very broad area, it matters tremendously what your workload is. The workloads can be so varied... The factors that affect the performance of large range scans are very different from the factors that affect the performance of more targeted transactions that do a couple of point reads and writes. The duration of your transaction matters very much... Basically, all sorts of things matter, but yes, generally we do find that for many workloads we are CPU-bound, and adding more CPU does help. Also, depending on your story system, you're gonna see different performance characteristics and different scaling if you're on SSD versus if you're on more traditional hard drives.

But yeah, generally, adding more cores helps. Now, I can't give you an exact number about what's the core count per machine up to which we scale linearly, because I don't know, but we definitely scale some per machine, yeah.

**Brian Ketelsen:** \[00:44:09.03\] That's great. Good story, thanks for that answer. I had one more question that I lost. Oh, when we had emailed previously, you mentioned that you use open tracing internally... Is the open tracing that's embedded in CockroachDB available externally for people to take a look at, so they can see the performance of the database?

**Andrei Matei:** Yeah, absolutely. We're big fans of open tracing, and the answer to your question is yes. If you use some sort of an open tracing trace collector, if you use a service like [LightStep](https://github.com/lightstep/lightstep-tracer-go) or you run your own [Zipkin](https://zipkin.io/) or [Jaeger](https://github.com/jaegertracing/jaeger) instances or what have you, then yes, you can see Cockroach traces in that performance monitoring system. But even if you don't, you can get a bunch of benefits from our use of open tracing, because we have our own tracers internally, and for example you can ask the system to trace one particular query and it'll give you a printout of how that trace looked like. And it won't be as pretty as how a trace would look if you look at it in one of these distributed trace collectors that have all sorts of pretty graphs and graphical views of a single trace; ours is basically a text dump... But it is a lot better than nothing, let me tell you. So yeah, we're getting all sort of benefits from open tracing.

**Brian Ketelsen:** So do you use -- I'm assuming if you're doing it from a CLI, you do something like a SQL trace type command, and then behind the scenes it's actually collecting data from the open tracing spans, and reporting those as the details of that SQL trace?

**Andrei Matei:** Yeah, that's exactly what happens. If you have a SQL prompt open, you can say something like \[SHOW TRACE FOR\] and then you give it a statement; you can say SHOW TRACE FOR SELECT \* FROM FOO, and then you will see the results of a distributed trace; we will collect information about everything that has happened on behalf of that query, even if that query needed to talk to remote nodes and to RPC's. You basically get back the whole tree of spans that contribute to the trace, and then we just project them into a table; you get a table representation of all your spans and the messages in your spans.

And the coolest thing about tracing in Cockroach, in my opinion, is that we have integrated our logging with the tracing, so every time you add any type of debug logging into your program, into Cockroach, which is usually consumed through just plain, flat text files (logfiles), you also get the same log messages in a trace, if you trace a specific operation. I think that's really cool, this combination of tracing and logging I think is really powerful. Now if we manage to integrate this also with our performance monitoring, with our time series, then we'd have something going on.

The holy grail is, in my opinion, being able to look at a graph that plots something - an error rate, or maybe a latency, and you see some sort of a spike on that graph... Say, there was a latency spike for this category of queries, and you wonder why, and now if you could click on that spike and say "Okay, I want the system to give me an example trace that contributed to this point on the graph", I think that would be a great thing. We don't have that yet, but one can dream... But we have the logging.

**Brian Ketelsen:** \[00:48:17.10\] Yeah, that would be a really beautiful dream, actually. So in terms of instrumenting your applications, one of the things that I see commonly is people passing a context in as the first parameter of their methods and functions, and pulling a tracing span out of that context... How is Cockroach instrumented and how do you like the approach that you've chosen to do that? Is there anything you would change? What libraries do you use? Tell me about your instrumentation inside.

**Andrei Matei:** Well, it works exactly like how you've described - we pass contexts everywhere, contexts have a span in them... If you do any sort of logging, then our logging methods also take a context and internally they will fish out the span from the context and they will append a message to that span. If you want to create another span - say, if you have your own operation that has some children operations, say you're about to do an RPC, that constitutes a unit of work, so we generally open another span and create a derived context which we're then gonna pass to that child operation, to that sub-operation. So yeah, it's all based on contexts.

And whether I like it or not... I'm not sure, I go back and forth -- this is one aspect that Go did well; the language and the libraries in the language and the runtime have very little magic. Everything is explicit. If you want your logging to work or if you want your tracing to work, you've gotta pass this context around, and then it's very clear what span you're inside of, and stuff like that. However, sometimes it is annoying that you have to do it, and if I suddenly need to add some logging to a method that is ten stack frames deep from the last method that had a context... You know, we have methods that don't take a context because they never need it, and they call other methods which also don't take context because they never need it... Now, one of these methods suddenly needs to log something - now I need to plum a context all the way from whatever the last method in my stack trace that was taking a span is, and that sometimes feels like more work than it should.

Other languages have things like a thread local storage, which Go has resisted so far... You know, sometimes I'm inclined to believe that maybe there are cases where that would help, but I don't have a very good answer... I go back and forth. Sometimes I long for just a little bit of magic, other times I'm very glad that I know exactly what's going on and there's no side effects that are not very clearly visible in the source code that I'm looking. So yeah, I'm not sure.

**Brian Ketelsen:** One of the things that drives me a little bit crazy about the whole open tracing concept is that things get verbose really quickly and it's kind of hard to see the business logic from the span creation, and logging, and all of that. I wrote a package a while ago on GitHub called [Trace](https://github.com/bketelsen/trace), and it kind of put all of the -- it made a couple assumptions. It starts a new span for every method; every time you get the context, it will create a new span, so every function gets its own span.

\[00:52:12.11\] But it also embeds a logging interface into the context, and does some metrics calculations for every span too, and I found that reduced the clutter in my applications by maybe two thirds, but it still feels really verbose. I mean, I miss the days of metadata injection where you could just add New Relic to your Ruby app and it did all of that underneath the covers, you didn't have to worry about actually instrumenting your functions. I wish Go had a way for us to inject things into the runtime, so that we could do something like the New Relic injection... Because it sure would be nice to have an instrumented runtime, rather than having to put all of this in our apps.

**Andrei Matei:** Yeah, I know what you're talking about, but you've gotta wonder what's the cost of what New Relic is injecting into your Ruby runtime. Because even with our code, tracing does have a cost, and that's why we don't enable it by default. It took us quite a bit of time to optimize this well, and even with all the optimization, it still has a measurable cost. I'm all for instrumentation that you don't have to write any code for, but as long as it doesn't have too big of a performance penalty. That would be what I would measure there.

**Brian Ketelsen:** Yeah, I agree with that, too. Alright, we are -- oh, my goodness, we're running late... I forgot that I was the person who was supposed to be taking charge of time. We should move on to interesting Go projects and news... Anything really big and exciting happened over the last week or two? I was in Moscow at [GopherCon Russia](https://www.gophercon-russia.ru/), that was a blast. How about interesting Go projects - Carlisia, did you come up with anything interesting?

**Carlisia Pinto:** I mainly had a cold this week... \[laughter\] I was barely keeping up.

**Brian Ketelsen:** I found one that got me quite a bit excited... [Saloon](https://github.com/go-saloon/saloon) is a forum software written in Go, and previously I've seen two or three other forum applications written in Go that were very unfinished and unpolished. Saloon is still relatively early, but it's fast and clean and pretty, and looked really nice to me, so I'm looking forward to playing with Go Saloon a little bit.

**Andrei Matei:** I just opened the GitHub page and I see that it can connect to a Postgres database, so maybe it will just work with Cockroach.

**Brian Ketelsen:** Well, that's a fantastic idea.

**Carlisia Pinto:** There you go.

**Brian Ketelsen:** I love that. Why don't we move on to \#FreeSoftwareFriday? Andrei, if you're not familiar with this little segment, it's where we wanna give a shout-out to either people or projects that help us; they don't have to be Go-related, they can be any person, any project in the open source world that you wanna say thank you to. We do that just because it's really nice to hear your project and feel appreciated when you spend so much time on an open source project.
I can go ahead and get started with that one... I used a project called [GitPitch](https://github.com/gitpitch/gitpitch) to present my two talks in Russia this weekend, and I really loved it. It's yet another JavaScript presentation PowerPoint replacement thing, but it's particularly nice because on the presentation itself, the people watching the slides can download a zip, they can download a PDF, all without leaving their browser.

\[00:56:15.01\] The workflow is a little bit awkward, but I guess they're working to fix it, make it a little bit easier doing the building of the presentation part.

But it's nice, you can just go to GitPitch.com and then paste in the URL of any open source repository that hosts any of those slide decks and you can view that live on GitPitch.com. That's my open source thank you - thank you to the team building that. I wanna say the main developer is named Daniel, but I'm sorry I don't remember... Carlisia, did you have any?

**Carlisia Pinto:** I don't have anything specific, but I do wanna give a shout-out to everyone who works in open source and is welcoming and helpful to people who are new... Just because I was exchanging a couple messages on Slack with someone who pinged me and asked me to get their resume; he was looking for an internship, he was trying to change careers. He was super experienced in one area, and was just trying to move into tech and programming, and programming in Go specifically... And I said "You should be doing open source instead of looking for an internship", just because he has professional experience, right? He's been working... And he said, "Yeah, you know--" because it took me so long to get back to him, he's like "Yeah, I actually submitted two PR's to this project." He said it was so nerve-wracking, but people had been nothing but supportive. I just wanna say it makes such a big difference, you know? It really is what keeps people going if they come in contact with you, and it's their first -- it might be their first programming experience.

**Brian Ketelsen:** Yeah, we don't do open source for the money, we do it partially for the people, so... I couldn't agree more. Having a nice, welcoming project with great people makes a little small community that feels like your open source family. That's a good one.

**Carlisia Pinto:** And you know, you're nice, and you attract people who are also nice, and they will have their turn at being nice and helpful, so keep up the good job, guys and girls. You're doing great.

**Brian Ketelsen:** Awesome.

**Andrei Matei:** One thing that I've noticed is that recently it seems to me that a lot of open source projects have become much more aware of the importance of this sort of stuff, of this kind of soft skills - being inclusive, being friendly to newcomers... Including the Go team at Google; I believe they've done a relatively recent push into being more open and encouraging and generally nice to people. You see all sorts of projects having more expansive codes of conduct and stuff like that. I also think it's a really good thing and very important.

**Carlisia Pinto:** Wow, and coming from you, who works with open source, it's really good to hear, too... So thanks for that.

**Andrei Matei:** Yeah, we at Cockroach we definitely try to be friendly, and we really hope to build a community around this stuff... And I personally think it's really important to do.

**Carlisia Pinto:** Yeah, and you know, all it takes is the trying; the trying is what is important.

**Brian Ketelsen:** Absolutely. Andrei, did you have any projects or teams that you wanted to shout out to?

**Andrei Matei:** \[00:59:50.02\] Yeah, I thought of a few... It's funny, you shared this doc with me before the recording, and then there was a suggestion from Erik to praise RocksDB, but he's not here, right? But I think if I'm permitted, I would take that over. [RocksDB](https://github.com/facebook/rocksdb) is a great open source project. Do you guys wanna talk about that for a second?

**Brian Ketelsen:** Absolutely.

**Carlisia Pinto:** Especially since it contradicts some of your opinions... \[laughs\]

**Andrei Matei:** Well, how so?

**Carlisia Pinto:** Well, it's not a relational database, right?

**Andrei Matei:** No, it's not a relational database, but it can be used to build one, as CockroachDB is doing. We vendor and we use RocksDB extensively; it's our on-disk storage engine, and we are very grateful that it exists. It's a pretty important building block. It's a project from Facebook, I believe...

**Brian Ketelsen:** Yes.

**Andrei Matei:** Maybe currently there's also another company that's taking a role in it... I'm not completely sure, but it's a non-distributed, single-machine KV store, high performance; it's C++ code. We like it very much, it's very featureful and with a great team behind it.

**Brian Ketelsen:** If I remember, Rocks is a fork of LevelDB that fixed a lot of things to make it more convenient for SSD's, but I could be wrong on that part.

**Andrei Matei:** I think you're right, I think that's how it started. I think it is a fork of Google's [LevelDB](https://github.com/google/leveldb), which is code from back in the day. I think it was Jeff Dean that had a hand in it. It's also used by Chrome, I think, pretty extensively. RocksDB started off as adapting that to behave better on SSD's. At its core, it's a merge tree for people that like storage systems.

**Brian Ketelsen:** Alright, so we've covered \#FreeSoftwareFriday... I think it's time for us to wrap up the show unless anybody has any final things they wanna add.

**Carlisia Pinto:** I'm good.

**Brian Ketelsen:** We wanna thank you very much, Andrei, for joining us, and Carlisia for asking such great questions today. Thanks to all the people out there listening to GoTime. We encourage you to share the show with your fellow programmers, people who might be interested in Go... We continue to get really inspiring messages from people who say "We just started learning Go, and we discovered your podcast. We love it!" We encourage you to continue to send us awesome messages telling us how great we are, too. We like that a lot.

You can follow us on Twitter @GoTimeFM. On GitHub.com/gotimefm/ping you can suggest topics for shows or guests that we might want to add or invite... And you can go to GoTime.fm and subscribe to our upcoming weekly email, and GoTime.fm to find the rest of our episodes. With that, thank you everybody. I hope you have a good week!

**Carlisia Pinto:** Thank you, Brian.

**Andrei Matei:** Thanks a lot for having me on the show.

**Carlisia Pinto:** Thank you, Andrei.

**Andrei Matei:** Thank you, guys.
