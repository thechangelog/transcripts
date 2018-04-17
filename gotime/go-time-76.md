**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is number 76. On the show today we have myself, Erik St. Martin; Carlisia Pinto is also here...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And our guest for today is Matt Jaffee, who works for [Pilosa](https://github.com/pilosa/pilosa), working on an open source distributed index... Is that the best way to describe it, Matt?

**Matt Jaffee:** That's as good as I've heard.

**Erik St. Martin:** Let's first step into maybe a little bit of background about you and your history in Go, and then we'll jump into what Pilosa is and what makes it interesting.

**Matt Jaffee:** Sure. I started playing with Go in early 2015; I joined this company called Umbel, here in Austin, Texas, and a critical piece of their infrastructure was something that they've developed in-house called Pilosa, and it was written in Go. When I first started learning about it, I thought it was about the coolest thing I'd ever been close to in my career, so I immediately decided to start playing with Go. Then I quickly became very enamored with the language, and my colleagues will tell you I started pushing it every chance I could get internally.

So I led the platform team inside Umbel for about a year and a half before we spun out Pilosa as a separate company, and have been working on that ever since.

**Erik St. Martin:** \[00:03:51.27\] That's awesome. Tell us a little bit about Pilosa itself. I know it's a distributed index, but there's some properties about it that kind of make it unique, and then we'll talk about why Go, and why Go is a good fit, and maybe even some of the points that you struggle with.

**Carlisia Pinto:** But also tell us what a distributed index is, because not everybody might now...

**Matt Jaffee:** Sure, sure. So you take a database and it really has two parts - it's got storage, and then it's got indexing, which is basically there to speed up different queries... So with Pilosa, what we've done -- and we didn't really decide to do this initially; we just had a very specific problem that we needed to solve, but sort of after the fact we realized that what we'd done is taken the index part out of the database and made it a standalone piece of software.

So you store data in Pilosa, but it's really just bits of knowledge that encode relationships in data that you use to speed up queries.

**Erik St. Martin:** So one differentiating factor is, like you said, it's not embedded within the database... But also, typical indexes are kind of stored as binary trees, and things like that, and from my understanding at Pilosa it's a [bitmap index](https://en.wikipedia.org/wiki/Bitmap_index).

**Matt Jaffee:** That's correct... Yeah, B-trees and binary trees and such are very popular structures for indexes, and if that had worked to sort of solve our original problem, we probably would have never built Pilosa... But the problems that we were having at Umbel were high cardinality segmentation of, you know, when you have millions or hundreds of millions of possible attributes across hundreds of millions of items, and you wanna drill down to very specific or very complex segments of those things.

B-tree indexing starts to fall apart, but bitmap indexing can be very good, so it's my highly biased opinion that bitmap indexes are a highly under-used data structure.

**Erik St. Martin:** What's a good use case...? Would you say something like faceted search is a good use case for a bitmap index over using a B-tree?

**Matt Jaffee:** Well, tell me what exactly you mean by faceted search? I'm not familiar with that term...

**Erik St. Martin:** Faceted search would be creating like a taxonomy of your data and searching on multiple filters at once, so different properties... Let's use, say, a booking engine or something for hotels - you want it to have a pool, and this, and that, and you're kind of looking for these individual features that are... A lot of them, I guess, could be boolean, right?

**Matt Jaffee:** Yeah, that's excellent, actually, and we've talked several times about the e-commerce use case, where you're looking for a certain item - maybe it's a TV, and you're drilling down, you want a certain size and a certain resolution, in a certain price range... And that is really a slam dunk use case for a bitmap index, especially because it's powering a UI that is very sensitive to latency. If you have a consumer who's digging through something, they don't wanna wait a full second or two seconds for their query to finish; it's more engaging if they have to wait 50 milliseconds.

**Brian Ketelsen:** I have a confession to make... I got my start in big data way back in the day, 1990-something at a company called Omnidex, and they did the same thing, but it was in C and C++. It was a lot harder to install and maintain than Pilosa looks, I can tell you that... But the same concept - bitmap indexes on data, with covered indexes, and most of the queries could be resolved without even touching the data itself. It would be covered by the indexes.

**Carlisia Pinto:** \[00:08:13.01\] I'm wondering if you have any sort of numbers... So being able to scale the storage independently of the indexing system seems like it should be a slam dunk decision, it should scale a lot better... Do you have numbers to compare data storages combined with indexing, which is some regular, normal, bread and butter relational database, versus separating those two?

**Erik St. Martin:** I think that the importance of the index isn't so much storage, it's that a lot of times when you're searching for data in a database, and even in a distributed database, you have to touch multiple machines or seek too many places on disk to find the data to see whether it applies... So by having indexes, you can limit the amount of data that you need to go out and fetch from wherever it's stored.

**Carlisia Pinto:** Yeah, that's a good point, too. I would say that that's a different use case, but I think those are two different use cases, and you can have the need for both, right? And I am sure there are other use cases probably?

**Matt Jaffee:** Yeah, Carlisia makes a really good point, actually, and I do have sort of rough numbers I can share. We are incredibly delinquent on making some big benchmarking blog post, but typically when you ingest data into Pilosa, the amount of memory or disk space that's taken up in Pilosa is about one-tenth the original data size, and it depends heavily on the cardinality of the data, and what fields you're indexing, and all that. But in order of magnitude, decrease is pretty typical.

**Carlisia Pinto:** Yeah, well I wouldn't be surprised... And how about complexity of -- we actually just had this discussion with a different guest, different system... The complexity of installing and maintaining this, compared to just one thing, a relational database where everything is there?

**Matt Jaffee:** There is definitely overhead when you think about having to maintain more than one system, right? I think the guest you're probably referring to is [CockroachDB](https://github.com/cockroachdb/cockroach)...

**Carlisia Pinto:** Yeah.

**Matt Jaffee:** I mean, wow, that is a fantastic system. I actually would love to do some benchmarks against them at some point... But I think Pilosa - our thesis is that an independent, standalone index is gonna be an important part of the technology stack in the future, and we see really cool use cases where somebody just has a whole bunch of big blobs in [S3](https://en.wikipedia.org/wiki/Amazon_S3)... Maybe they're JSON, maybe they've CSV, whatever it is, and really the only option for querying -- these cloud providers, big query type solutions where you're paying per query and it can get quite expensive... Whereas if you could just index that data in something without moving all of it into another database - you could potentially get extremely good query performance while still having it be very consistent and very durable wherever it is.

**Erik St. Martin:** That's actually a really interesting use case I hadn't thought of... If you already have data being stored somewhere that isn't necessarily a database that has its own indexing mechanisms...

**Brian Ketelsen:** \[00:11:50.29\] That's kind of the power of the standalone index - you don't even have to index flat files or database records; you can index your mailbox, you can index anything that you have data retrieval access to, and it makes for a lot of power that you normally wouldn't see in a regular database, because you're only communicating with the index, not communicating with the data store.

**Matt Jaffee:** Yeah, and let's not forget what powers all the big search engines on the web. Nobody really talks about it, but they're basically giant standalone indexes.

**Erik St. Martin:** Yeah, that's a very good point.

**Brian Ketelsen:** And fast, too.

**Matt Jaffee:** It's kind of mind-blowing when you think about how fast search engines are, and the amount of data that they have access to...

**Brian Ketelsen:** That's a good segue into performance in Go... How have you found keeping high-performance in your system with indexes and developing this in Go - what kind of stumbling blocks have you found? What kind of interesting tidbits do you have to share for high speed Go development?

**Matt Jaffee:** So my first tidbit is to join the [Performance channel](https://gophers.slack.com/messages/performance) on the Gopher Slack, because there are some really, really good people in there... But as far as our personal experience, Go has been amazing. I don't think that we are good enough developers to build this in C or C++. I think we would have failed, because the build/compile cycles, and the memory management and all that stuff - I think you just get bogged down... Whereas with Go, we can have a lot of that taken care of for us; the type system helps us a lot, interfaces, all this nice, fancy, modern language stuff... But it also gives you the escape patches you need when you need to get down and really have super high performance on logical operations on bitmaps.

We employ unsafe in very low quantities, exactly where we need it, to get that performance and to keep memory off-heap, so that the garbage collector is not bothered by the bulk of the allocations... And you can end up with a really nice hybrid where you get the low-level performance advantages of being able to play with memory, but also a lot of the type safety and garbage collection and all those nice, high-level features.

**Erik St. Martin:** Do you have to do a lot of work for performance tuning to make the queries faster? Are you doing a lot of profiling of the garbage collector and things of that nature? ...escape analysis, and things.

**Matt Jaffee:** We have done a lot, and I think we will make time for a lot more. Honestly, for a lot of use cases right now performance isn't a huge issue anymore. I hope we'll find some that really drive us to get down into the millisecond or sub-millisecond latencies... But right now it has an HTTP, kind of REST-like interface, which I'm sure if we just sort of got rid of that and used gRPC or something, we could cut off a few milliseconds right there off our baseline response time.

We've definitely had several sort of deep hackathons on profiling and finding places where we had easy wins, basically... But there's definitely a lot more to do there, and Go's tooling keeps evolving. The tracer and all the different profiling types you can do... I think we've scratched the surface - maybe scratched it pretty deeply - but we certainly haven't broken through into all of what's possible.

**Erik St. Martin:** \[00:16:08.29\] In discussions through e-mail before you came on the show you had mentioned too that part of the reason that Go was such a great fit - at least for building a distributed tool - was that you were able to cut out external dependencies like [Zookeeper](https://zookeeper.apache.org/)...

**Matt Jaffee:** Yeah. You know, Go has a lot of good libraries, and a culture of making things pretty tightly packaged and not pulling in lots of dependencies into your projects, and we're trying to sort of follow that culture in Pilosa, and also it's been a great help to us to be able to pull in libraries to do things like cluster membership... And because of Go's concurrency model, it's easy to sort of have that running in the background in the same process, without really blocking anything or affecting latency of queries or anything like that.

**Brian Ketelsen:** Yeah, it's amazing how much mileage we're getting out of the [Raft](https://raft.github.io/) and membership libraries... It's almost like they're the bedrock of an entirely new generation of distributed apps.

**Matt Jaffee:** Yeah, these really hard problems are almost becoming commoditized now.

**Erik St. Martin:** Yeah, and between some of the tooling, we see [Kubernetes](https://kubernetes.io/) and these libraries for embedding distributed things into your application - distributed consensus protocols and membership protocols, and... What's the one I'm looking for...? Gossip, and things like that. It's really amazing people are actually doing that stuff in Go, and Go almost seems like the language any new distributed systems tool is written in, where I guess Java and potentially C and C++ kind of held that ground for generations...

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** So let's talk about exciting stuff that you want to do or would do if given the time, in Go... What fascinates you outside working on your distributed database?

**Matt Jaffee:** Let's see, outside of Pilosa... I think there's a lot of cool opportunity in the Go Build and the AST packages, where you can sort of get really easy prepared access to modifying Go programs and analyzing Go programs. I think that's an area where Go's strict adherence to simplicity is going to allow people - and it already has allowed people to build really great tooling... But I would love to do very project-specific tooling...

Even though Go has Gofmt and a lot of really good culture in idioms, every project tends to come up with its own little ways of doing things, and to be able to enforce those in a tool, rather than spending time, reviewer's time in pull requests and stuff, is a really great thing. I think that Go's support for that kind of tooling is in a place where it's probably worth the time to invest in it.

**Brian Ketelsen:** I was wondering the other day whether you could take the AST rewriting and rewrite combined with the compiler, so you'd almost have like a hot spot JVM, but for Go... I don't know enough about all the low-level bits, but it's just occurred to me that we're almost there in terms of tooling...

**Matt Jaffee:** \[00:20:14.29\] Yeah, and that's such an interesting point, because there are a lot of really big databases that basically compile your -- not your queries, but the query plan or the query execution on the fly, for performance reasons. Go just kind of got plugins a little bit -- we looked at that briefly, because there's so much you can do when you have data in a very processable format, like you do in a database or an index... And being able to bring processing to that data, complex processing, which has typically been the realm of complex query languages, like SQL... But to be able to do that in code and ship that code to the cluster, rather than shipping the data to the code, I think there's a lot of opportunities for distributed algorithms running on indexed data in the cluster, at scale. They could open up a lot of opportunities.

**Brian Ketelsen:** I hadn't thought about that in a database context. I know MemSQL does that now - they compile your SQL statements down to pre-compiled SQL that they ship out to each of the nodes... That would be interesting from a Go perspective, because you could almost build a SQL executor that's smarter than just running SQL. You could build the membership and the awareness into the actual pre-compiled SQL statement.

I'm gonna have to play with that, I'm gonna have to think about that a little bit. That's kind of mind-blowing for me.

**Matt Jaffee:** I guess the hacky way that you could do it is just a call out to the Go compiler, and then run a new binary with exec... \[laughs\]

**Brian Ketelsen:** Yeah, that's kind of what I was thinking. You precompile your SQL statements, and they're just another binary, but the binary has built into it the ability to send the query results back to whatever is collecting them. You just build that all in.

**Matt Jaffee:** Yeah, so you almost have like a runtime for distributed data processing which you would wrap around your compiled query.

**Brian Ketelsen:** Right. I'm gonna go build that, I'll be back.

**Matt Jaffee:** Okay. We'll wait.

**Erik St. Martin:** Can we get some jeopardy music...? \[laughter\]

**Brian Ketelsen:** I'm just gonna import two or three libraries and I'll be done, right?

**Matt Jaffee:** Pretty close.

**Break:** \[00:23:08.02\]

**Erik St. Martin:** So first up, there is a new Go conference called Go Northwest that I just saw, that's at McCaw Hall in Seattle, at the end of July. That's [gonorthwest.io](http://gonorthwest.io/). It looks like it's a community-driven conference, it's $100 to get in... They haven't released speakers, but they have their CFP open.

**Brian Ketelsen:** Nice. I didn't look at the website yet... Is it exactly at the end of July? Oh, it's the 30th... So that's gonna be really close with [GopherCon UK](https://www.golanguk.com/) now. I wanna say GopherCon UK is like first, second and third of August, so that's gonna be tight.

**Carlisia Pinto:** I just wanna say I love this initiative. I think we should have one-day conferences like that around the country, around the world... Just like a local -- get everybody from the region. One day doesn't require big commitments, doesn't require huge organization.

**Brian Ketelsen:** Absolutely.

**Carlisia Pinto:** We need to have one like this in San Diego.

**Erik St. Martin:** Yeah, I'd love to see more regional events pop up all over the country, like one day... But when I say one day, one-day conferences, not like "I'd like to see them pop up one day..." Well, that too... \[laughter\]

**Brian Ketelsen:** That's good to clarify...

**Matt Jaffee:** Preferably today.

**Erik St. Martin:** Right...? Yesterday... Well, then I would have missed it, but... In Florida. Somebody do one in Florida.

**Carlisia Pinto:** I just wanted to give a shout-out to all the organizers. You guys are awesome!

**Erik St. Martin:** Yeah, and organizers of meetups.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** Brian and I have been terrible meetup organizers.

**Brian Ketelsen:** Yeah, we should just resign, because between running the conference and our day jobs, we're not doing a good job of our meetup. Slackers...

**Erik St. Martin:** Yeah, coming up with topics and stuff is always hard. So I don't know if anybody else saw this post, but I got really excited... As people who listen often (regular listeners) might know, Brian and I love messing with hardware and pretending like we know what we're doing, and I saw this post - it's part one of a series called [Go on very small hardware](https://ziutek.github.io/2018/03/30/go_on_very_small_hardware.html)." This person took a small STM 32 Cortex M0 processor and wrote software using something called [Emgo](https://github.com/ziutek/emgo), which appears to be a subset of the Go language... But I will fully admit that I have not got a chance to play with this, and I really want to, just because that's what I've always been torn on... Brian and I play with the Raspberry Pi's, and ODROIDs, and...

**Brian Ketelsen:** Arduinos...

**Erik St. Martin:** Yeah, anything that will run full Linux, so we can program in Go. But then I also like playing with the small ARM processors and things that Go does not run on. So I'm really excited to be able to try to merge those worlds...

Now I have a -- I think I sent pictures out over Twitter, of this embedded board that has a small touchscreen LCD, and it has a Cortex M4 on it that I've been waiting to mess with our barbecue stuff on, and I was gonna have to do it in C and C++, but now I may have to play with Emgo.

**Brian Ketelsen:** \[00:28:09.28\] Yeah.

**Erik St. Martin:** Although I have the feeling that I will have to write a lot of my own direct memory access stuff for the screen if I want it to work...

**Matt Jaffee:** Yeah, that stuff is really cool. I'm really into mechanical keyboards, and there's all this really good open source firmware, but if you wanna hack on it, it's all in C, and keyboard controllers are super-low memory, like 32k... No way you're putting the Go runtime on that. But the possibility of doing a keyboard firmware in something like Emgo I think would be really cool.

**Erik St. Martin:** Yeah, and this hardware is 16 kb of flash and only 4 kb of RAM it was running on, to give you an idea of how small...

**Brian Ketelsen:** Oh, wow...

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** I've gotta read that article now. That's impressive.

**Erik St. Martin:** Yeah, I'll drop a link to it in the GoTime channel... But I'm looking forward to seeing the rest of this series and getting some time to play with that.

**Brian Ketelsen:** Nice. Our barbecue is getting upgraded...

**Erik St. Martin:** Right...? And in Go. That makes it even more exciting. I wanted to use that low-level hardware to not have to have a full Linux machine running for it, but I really wanted to do it in Go, because I'm really into Go. I could do it in C, but I don't want to.

**Brian Ketelsen:** Speaking of the barbecue rig, I may have to get new hardware for mine, because it stayed out in a rainstorm the other day, and it's not looking pretty. It's a good thing I just got that new Raspberry Pi 3 B+, or whatever the latest Pi is... I got a new one, so I might have to replace it. Stupid Florida rain...

**Erik St. Martin:** Yeah, the rain ruins everything. So another cool project I came across, because I think it was last night [Damian Gryski](https://twitter.com/dgryski) was signal-boosting something, and was talking about NVIDIA's CUDA and Go... So there is a package gorgonia.org/cu that is a CUDA driver for Go, and I think they're looking for help and things to evolve this more. I guess it was a few years ago I started trying to play with CUDA. I wish I was better at it... But this looks awesome. Now I have more reason to do it, because again, I don't have to do it in C, I can do it in Go.

**Brian Ketelsen:** Boy, that library is huge. Low level too. Yeah, I remember when we were playing with CUDA, we were trying to build a database with GPU's. Back when we thought we could do anything...

**Matt Jaffee:** That's very dear to my heart, not only because Pilosa I think could benefit massively from processing bitmaps on GPU's - it's just such an obvious application - but I've done CUDA in the past at a previous job, and I was writing in this software to inspect network traffic on the GPU, so trying to do like 10 gig pattern matching, and stuff... And it's super fun, but again, the build cycle and the bugs that you run into can be really frustrating when it's not Go.

**Brian Ketelsen:** Yeah... Truth. So I ran across a project that I got super excited about; I'm embarrassed about how excited I got about this project... It's gotop, and it's at [github.com/cjbassi/gotop](https://github.com/cjbassi/gotop). It's really just top, but written in Go, and it's written in one of those nice text UI libraries, so you get pretty boxes and graphs... It's prettier that htop, and it's got nice-moving text graphs on it. It makes me happy. So yeah, gotop, if you like watching the blinking lights. I'll put a picture in Slack and tweet it, because it's so pretty.

**Matt Jaffee:** \[00:32:23.24\] That looks totally rad.

**Erik St. Martin:** And while we're talking about distributed databases, [dqlite](https://github.com/CanonicalLtd/dqlite) is one that I came across too, which basically takes SQLite and turns it into a distributed SQLite cluster. I have not played with it yet, but I think that's cool.

**Brian Ketelsen:** You know what's awesome about dqlite? One of my favorite under-represented projects is [LXD](https://linuxcontainers.org/lxd), from Canonical and Ubuntu... And the dqlite came out of their new feature that supports distributed LXD clusters; they've got this automatic clustering feature now in LXD, and I can't wait to try that too, because LXD is awesome, and having a cluster of them almost gives you a different spin on the whole, like, Docker swarm kind of feel... So I wanna play with it, because I like LXD. And it was Canonical that came out with that dqlite, for the purpose of bringing that distributed clustering to LXD.

**Erik St. Martin:** Nice, I didn't know the history of it.

**Brian Ketelsen:** Now you do.

**Erik St. Martin:** Where's our sound effects board? We need like the "The more you know...doo dee doo..."

**Brian Ketelsen:** That's right. I'm here for you.

**Erik St. Martin:** Hey Matt, I believe we were promised jokes...

**Brian Ketelsen:** That's right...

**Matt Jaffee:** Well, no, no, no... There was a promise I would be funny, but there was no explicit promise of jokes... \[laughter\]

**Carlisia Pinto:** Well, that was implied, so...

**Matt Jaffee:** I don't know, I guess -- if somebody asks you for a joke, you never have one ready, do you...?

**Erik St. Martin:** Yeah, and I always wonder if they're appropriate for the occasion... It's like, the one I can remember at that moment in time is not appropriate to the time at all.

**Brian Ketelsen:** Alright, I dropped a screenshot of gotop in our Slack, and I'll put it on Twitter too, because we don't wanna exclude people who are in our Slack...

What other interesting news did we have? Oh, I wanted to mention [Micro](https://github.com/micro/micro). My favorite microservice framework, Micro, is now supportable on Patreon. If you go to [patreon.com/microhq](https://www.patreon.com/microhq)... They just announced that this morning, and I was the first supporter. Hurray, I love my Patreon! So go out there and support Micro if, like me, you love an easy way to make really powerful distributed microservices systems with very little bit of code... Micro is the way to do that. Go support them.

**Erik St. Martin:** You know what would be really cool...? You know how some companies like Microsoft will match you when you donate to non-profits? How cool would it be to have companies match your donation to Patreon?

**Brian Ketelsen:** I love that whole idea!

**Erik St. Martin:** Let's make that a thing.

**Brian Ketelsen:** Let's do that. I'm making a note and I'm putting that in my to-do list. Matching Patreon. Alright, it's in. I'll e-mail Satya today and see what I can get.

**Erik St. Martin:** Just call him up on the phone. You've got his number, right?

**Brian Ketelsen:** Exactly...

**Erik St. Martin:** \[00:36:07.04\] Alright. So if we don't have any more projects and news, one of the things we like to do every week is give a shout-out to an open source project and/or maintainers... And this does not have to be Go, but just to make sure that we're showing love. We can do that in verbal form, giving shout-outs, or through Patreon... Who wants to go first for \#FreeSoftwareFriday?

**Brian Ketelsen:** I do, I do, I do! Pick me, pick me, pick me...

**Erik St. Martin:** Alright, you go first.

**Brian Ketelsen:** Alright, so this is kind of meta, and it makes me so happy - there is a project on GitHub called All-contributors, and it's under [kentcdodds/all-contributors](https://github.com/kentcdodds/all-contributors) on GitHub. It's a really neat way to recognize all the people who have contributed to your project beyond code. So you can recognize code contributors too, but... You have to go into the repo to really see it. It gives you a really pretty chart that shows you who's contributed to the project and in what way... And those ways might be things like answering questions on the forums, or promoting the project on Twitter, or writing documentation... So it's a great way to recognize the whole community that makes your project thrive, as opposed to just the people contributing code... And I love it so much I wanna adopt it for all my open source stuff.

**Carlisia Pinto:** I absolutely love this, it's great.

**Brian Ketelsen:** Isn't it awesome?

**Carlisia Pinto:** It's awesome... And it looks great, too.

**Brian Ketelsen:** It does!

**Carlisia Pinto:** You've got a table with people's picture... Not just a list of names.

**Brian Ketelsen:** Exactly, it looks pretty, and it gives you a way to say hello to everybody and thanks to all the people who are doing the hard work. I'll post a link to that in Slack.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Pinto:** I want to give a shout-out to [Francesc Campoy](https://twitter.com/francesc) and his [JustForFunc](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw) project - the video production, and especially the [io.Pipes](https://www.youtube.com/watch?v=LHZ2CAZE6Gs) episode. Figuring out how to use io Pipes correctly and when to close things can be a bit mind-boggling, and he does a great job walking you through different scenarios. That's a great episode, and I'm very grateful that I had that to watch when I needed it... And JustForFunc in general I think is becoming - for me at least - a go-to place, like "Oh, I wanna figure out how this works. Maybe JustForFunc will have an episode on that." And it's like, "Yeah, it does."

**Brian Ketelsen:** You know, Carlisia, I don't want you to think that I'm making fun of your accent, but when you say JustForFunc, that's not what I hear... And that just kind of makes me smile.

**Carlisia Pinto:** What do you hear?

**Brian Ketelsen:** I hear something that doesn't sound like Func...

**Carlisia Pinto:** Just for Fun?

**Brian Ketelsen:** No...

**Erik St. Martin:** I think Brian hears something vulgar, because he wants to hear something vulgar... \[laughs\]

**Brian Ketelsen:** Not because I want to, no...

**Carlisia Pinto:** When we stop recording, you're gonna have to tell me... \[laughs\]

**Brian Ketelsen:** I will. I'll say it off-air.

**Carlisia Pinto:** I can't even imagine... \[laughter\]

**Brian Ketelsen:** I'm terrible.

**Erik St. Martin:** And Matt, I know we're kind of hitting you out of the blue, so feel free to say no, but if you have anybody you wanna give a shout-out to... It doesn't have to be a Go project or a maintainer.

**Matt Jaffee:** Actually, as soon as you guys started talking about this, I quickly wrecked my brain and went searching... But Carlisia saying JustForFunc reminded me of the way I feel about all the talks that [Liz Rice](https://twitter.com/lizrice) has given.

**Brian Ketelsen:** Oh, my god...

**Matt Jaffee:** \[00:40:10.13\] If you haven't seen any of those... She has one on [Syscalls](https://www.youtube.com/watch?v=01w7viEZzXQ) that I saw at GopherCon. It was just amazing the depth that she went into about how you can play with them in Go, and she's done stuff on ptrace and containers, and you always kind of come away with this feeling of zen-like understanding of what's going on in the operating system. It's really cool.

**Brian Ketelsen:** And she does it all off the cuff, too. I had to follow her at -- was it Golang UK last year...? And I was so mad, I was like "How the hell do you follow somebody who just goes up there and live-codes syscalls in Go on the spot, without even preparing for it?" I can't follow that. That's why [I had to put on a wig at GopherCon Russia](https://www.youtube.com/watch?v=MzTcsI6tn-0).

**Carlisia Pinto:** \[laughs\] I've seen her talks too, and I have to say, she makes it look so easy... Like, "You just do this, it's simple." She doesn't say that, but she just goes over it in such a clear and direct and concise manner, and you think "Oh my gosh, this is so simple", but it's obviously not. She has a gift.

**Brian Ketelsen:** She's one of my favorite speakers, she's really good.

**Erik St. Martin:** Yeah, her and Julia Evans too, with all of the little cartoons she draws on how things work...

**Brian Ketelsen:** The performance cartoons? I love those.

**Erik St. Martin:** Yeah... And I don't know how many people have seen the talk she did at StrangeLoop, I think it was like three or four years ago... It was something like [How to be a kernel hacker](https://www.youtube.com/watch?v=0IQlpFWTFbM) or "You can be a kernel hacker." This is, I think, in C, but she explains how syscalls work and how you can make your own.

**Brian Ketelsen:** She's [@b0rk](https://twitter.com/b0rk) on Twitter, right?

**Erik St. Martin:** Yes.

**Brian Ketelsen:** Okay. Yeah, go follow her, because she just tweets the most awesome, smart stuff.

**Matt Jaffee:** Yeah, everything that comes out of her feed is really good knowledge, and super approachable.

**Erik St. Martin:** I've got some stickers of her "How Kubernetes works" on my desk over here... I love that stuff. So my \#FreeSoftwareFriday for today - I gave away a little bit when I talked about the Go on very small hardware... I really hate trying to say names, because I feel like I'm gonna butcher them, but Michal Derkacz... I'm so bad with names... But anyway, he is [ziutek on GitHub](https://github.com/ziutek), and that is who created the Emgo project that we just talked about.

I love him for that right now, because I'm excited to play with that, but I also love him in the past, because he wrote the [Mymysql](https://github.com/ziutek/mymysql) library, which I used the crap out of in my early days of Go, doing MySQL stuff. Is it still the most popular MySQL driver? Does anybody know? I haven't done MySQL in a while in Go.

**Brian Ketelsen:** I don't know the answer to that. That's a good question. I've only done Postgres for the last many years.

**Erik St. Martin:** Surprisingly, I haven't done much SQL database stuff in Go in the last three, four years... I mean, doing things like [Cassandra](https://cassandra.apache.org/) and [Kafka](https://kafka.apache.org/), and things like that...

**Brian Ketelsen:** I use Michal's [Telnet](https://github.com/ziutek/telnet) driver to turn on and off my TV. I think we talked about that on one episode, didn't we?

**Erik St. Martin:** Oh yeah, yeah.

**Brian Ketelsen:** \[00:43:56.12\] I have a Go program that turns on and off my TV from the command line, and it's because it's got a freakin' open Telnet port... But I'll never tell you what port it is, because you guys can't control my TV.

**Erik St. Martin:** [Nmap](https://nmap.org/)... \[laughs\]

**Brian Ketelsen:** Good luck getting in.

**Erik St. Martin:** Nmap will tell me. \[laughter\] You do realize who you're talking to, right?

**Brian Ketelsen:** Yeah, come on over... And you have my Wi-Fi password; we're in trouble.

**Erik St. Martin:** Exactly... \[laughter\]

**Matt Jaffee:** Actually, speaking of Nmap, there was a project that was recently rewritten in Go called [Bettercap](https://github.com/bettercap/bettercap), which is basically sort of an Nmap clone, or a network Swiss army knife kind of thing.

**Erik St. Martin:** Yeah, I was really excited about that. I mentioned it a couple of episodes ago... But I'm actually really excited about seeing a lot of infosec tools written in Go these days. I've seen some clones or advancements in things like [DirBuster](https://tools.kali.org/web-applications/dirbuster) and things like that written in Go.

I know a couple people who are pen testers too that have been using Go for their scripts and stuff like that, and for exploits... Kind of moving away from doing it in Python, and things like that.

**Matt Jaffee:** There have been a couple of viruses found in the wild written in Go, haven't there?

**Erik St. Martin:** Yeah.

**Matt Jaffee:** That's kind of how you know you've made it as a language. \[laughter\]

**Brian Ketelsen:** Yeah, that's not so good.

**Erik St. Martin:** I mean, arguably, you could use Bettercap on that stuff, right? There's another framework that has a bunch of stuff -- no, Bettercap is the one I'm thinking of, because it's got some Wi-Fi snooping, password sniffing and things like that already built into it. So you could basically just write a virus and use that to sniff out the stuff you need.

But speaking of the Mymysql thing, keep me informed... I'm actually really curious what people who are using MySQL in Go - what library they're using today for that. I wanna stay informed.

Alright, did anybody have any other shout-outs before we call this show complete?

**Brian Ketelsen:** Not for me.

**Carlisia Pinto:** Not for me.

**Matt Jaffee:** I'm good.

**Erik St. Martin:** Alright. Well, thanks so much for coming on, Matt. This was a lot of fun.

**Matt Jaffee:** Thank you so much for having me, it's an honor.

**Erik St. Martin:** And thank you Brian and Carlisia, as always, for being amazing.

**Carlisia Pinto:** Thank you, you're so generous...

**Brian Ketelsen:** It's what I do.

**Erik St. Martin:** And definitely shout-out to all of our listeners, especially the number of them that we have that listen every week, and a decent group of them that listen live every week. We love you all, and thanks for the support. Definitely share this show with co-workers and friends; we are @GoTimeFM on Twitter. If you find us on GitHub.com/GoTimeFM/ping, please let us know topics or guests that you'd love to see on the show. I think that's it, that's a wrap. Goodbye, everybody! We'll see you next week.
