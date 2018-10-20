**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. Today we have a special guest with us, but first we'll go through who the typical hosts are. I'm Erik St. Martin, we also have Brian Ketelsen, which does not sound like Brian Ketelsen today, but I assure you it is the real Brian Ketelsen. Say hello, Brian.

**Brian Ketelsen:** Today the part of Brian will be played by somebody with a very scratchy voice.

**Erik St. Martin:** \[laughs\] We also have Carlisia Campos...

**Carlisia Pinto:** Glad to be here, hello.

**Erik St. Martin:** And our special guest today is Scott Mansfield who we've talked about a couple times on the show, about Rend and a couple of other posts we've read. Welcome to the show, Scott.

**Scott Mansfield:** Hello, everybody.

**Erik St. Martin:** So you decided to heckle last show, so I guess the punishment is you have to be on the show now. \[laughter\]

**Scott Mansfield:** Yeah... Like I said, I need to learn to keep my mouth shut sometimes.

**Erik St. Martin:** So Scott, you work on some products at Netflix using Go. Do you wanna give everybody a little background?

**Scott Mansfield:** Sure. So the project is called Rend, and it's a memcached proxy and server that's written in Go. It was an interesting choice of language, because Netflix is pretty much an all-Java shop, and we needed something that was more performant, more productive and less - not bloated, but doesn't have any baggage in terms of platform libraries and other things that every other Java app here pulls in.

We also wanted to have some sort of performance, because the service that I work on is actually called EVCache. That's a distributed, charted memcached. And we're very latency-sensitive, so having an 80-ms GC in Java would be great for a lot of people, but for us that would be horrendous, so we picked Go.

**Brian Ketelsen:** That's interesting, if you don't mind me interrupting. A lot of people are still very twitchy about Go's garbage collection. Can you elaborate a little bit more on why Go's garbage collection worked out for you when Java's couldn't?

**Scott Mansfield:** There's a variety of reasons. Partially, the Go memory model itself is simpler and has less indirection, which allows the garbage collections to be faster, but really it was sort of a "Let's just create the program in Go and we'll see how it works." It didn't really start out as a work project; it ended up being a personal project that I was working on before, and really whenever I started to load test it, it actually turned out to be quite fast. And the garbage collections themselves haven't... They happen all the time, but we don't really notice because they're only a couple hundred microseconds, but not too bad.

**Erik St. Martin:** So is this the first project within Netflix to adopt Go, or is there other ones?

**Scott Mansfield:** I actually don't know when the other ones started, there's a bunch here. I don't know if you guys are familiar with the Chaos Monkey system.

**Carlisia Pinto:** Yeah, yeah.

**Scott Mansfield:** \[00:03:58.14\] So there is actually a new version of the Chaos Monkey coming out. It's not open source yet, but the whole backend of the Chaos Monkey has been rewritten in Go, and it's actually in production right now, striking fear into everybody's hearts here. I actually spoke to the developer before this to get some reasoning, and partly it was because Go itself is so easy to learn that he's not worried about people coming in and working on his code later. The old codebase was actually such a mess that people were afraid of changing it, so now he's rewritten it in Go.

**Erik St. Martin:** That's awesome, because until now I love everything Go does, and now it's wreaking chaos on my system \[unintelligible 00:04:45.19\] \[laughter\] It is now both evil and good.

**Carlisia Pinto:** I wanted to ask you, with the project, the Rend library being so in need of performance... Did you apply specific techniques, did you apply any design concepts, did you use specific libraries to make it as performant as possible? Or did you just apply good Go idioms and it came out performing well and that was it?

**Scott Mansfield:** Interesting enough, there's... Well, I'm trying to parse the whole question, there's a lot of pieces there. Sometimes the good Go idioms can be less performant than if you tried doing something lower level, such as ownership of data with the goroutine and then sending messages back and forth for the channels may not be quite as performant as doing some sort of AtomicInteger, like increment stuff. So actually on that point, Rend actually has no external dependencies. It's strictly standard to Go, and that was partially because I'm afraid of picking a vendoring tool whenever it's still up in the air, but also because I could really... Like, I could solve our problems better by having a custom solution.

One of the things that's actually a good example is our metrics library, because there's all kinds of metrics libraries out where you have a counter struct and then you go and increment it and it still does atomic increments in the background, but it really didn't fit our use case quite as much.

**Carlisia Pinto:** Is your metrics library also in Go?

**Scott Mansfield:** Yeah, the whole thing... It's all in the same repository.

**Carlisia Pinto:** Because I was thinking to ask you as well, I'm not sure if it applies what I wanna ask anyway... If you're using a Prometheus to collect metrics and log information.

**Scott Mansfield:** Yeah, so our deployment is actually quite interesting. On the same server we're running Rend, memcached, our L2 disk-backed solution called Mnemonic which reuses part of the Rend code, and a Java-based Sidecar process that's actually the hook into the rest of the ecosystem. So in Netflix we have a system called "Atlas" that does our metrics collection, and the client for that is in our Prana sidecar. So for us, we actually have the sidecar process pull Rend to pull metrics out every once in a while, instead of Rend actually pushing metrics anywhere.

**Erik St. Martin:** And now, the mnemonic part of it was the RocksDB portion of Rend, right?

**Scott Mansfield:** Yeah.

**Erik St. Martin:** We should probably back up a little bit too, because we discussed it a little bit in another show, but we might wanna kind of talk about what Rend is, and the components of that and what you're using it for, to kind of give a better understanding of what it does and why performance was so critical.

**Scott Mansfield:** \[00:08:02.23\] Okay, yeah. So earlier, as I mentioned, I work on EVCache, which is a distributed charted memcached. It's the second or third highest volume system that we have here. It's a cache that fronts pretty much everything - I mean, not everything-everything, but quite a lot. It's in all three of our Amazon regions; we hit thirty million operations per second globally earlier this year, so when we're talking about trying to save a couple microseconds or something here or there, it's because it happens a couple trillion times a day. So when we put something in front of memcached, we really didn't wanna slow it down so much; that's why I was so sensitive to having something like 80-ms GCs. Our clients actually normally see roughly one millisecond response time from us, and half of that is network latency.

**Erik St. Martin:** Wow.

**Scott Mansfield:** So the purpose of Rend, actually... So for us, Netflix as a whole has changed into a N+1 architecture globally. What that means is any member can be served from any region that we have. We operate in three AWS regions, and as the caching layer for the company, we actually do global data replication and it's partly to support this N+1 architecture.

It's really expensive though, when you have all of this data that's stored multiple times in RAM when it's really only read in one region. So the purpose of this overall project that we called Moneta was to store some of that cold data on disk, and allow the hot data to still be served from RAM as fast as it could be, but the cold data would be in much cheaper storage.

As a part of that now, Rend is the on-box memcached proxy that does... It's a wire-compatible memcached proxy; our client didn't change at all, it still uses the same Java memcached client that we were using before. That's actually sort of the secret sauce of the EVCache product, and it speaks to Rend.

**Erik St. Martin:** That's one of the things I found most interesting, that you kind of got this layer 1, layer 2 built-in, except it was wire-compatible, so you didn't really have to rewrite anything to use a new caching layer, you just talked to it as if it was a memcached.

**Scott Mansfield:** Yeah, so our upgrades are pretty much just doing another deployment, and we get instantly more efficient storage.

**Erik St. Martin:** Do you have anything special between the two layers? Did you implement Bloom filters or anything like that to save seeking the data off-disk if it doesn't exist there, the cold data? Or is it almost guaranteed to exist when you're looking for it in memcached, in your particular use case?

**Scott Mansfield:** Not necessarily true. When you do things like \[unintelligible 00:11:08.28\] evacuate a single region and split it between the other regions, you might have a huge number of misses in L1 very quickly. I didn't actually work on the RocksDB part, my teammate \[unintelligible 00:11:23.03\] did a lot of work to make that very efficient. The part that he's reusing is just the protocol parsing, the server loop piece of Rend, but the backend storage is all him, and there's a variety of different ways he's made the storage efficient enough to be able to handle misses like that.

**Erik St. Martin:** \[00:11:43.12\] Yeah, RocksDB has been a favorite of mine for a long time. I'm kind of jealous you guys got to build something really cool with it. So walk us through the performance of that. You spoke to having to kind of go against the idioms to get the type of performance that you are, the one-millisecond latency on that. Is there a lot of those that you had to go by? Do you have kind of like a running list of things like that, of reproducible patterns that get to perform some operation in a more performant way than is currently idiomatic?

**Scott Mansfield:** Part of it was the design itself is less... I'm trying to think of the proper words here. Most people might immediately think like, "Okay, send messages back and forth so that you could do requests", but for us, we have a connection coming in as a connection going out, so we have these sort of vertical slices and it's a very strictly connected, like one connection in to one connection out, and that allows us to have both isolation, but also a little bit easier time programming.

There's not too many places where I've bucked the trend; I've just tried to avoid over-abstraction. So for the metrics library, for example, counters are AtomicIntegers, and it's a pretty straightforward thing that you would think to do.

**Erik St. Martin:** Right. And there's been a couple of instances that we were talking about the other week, Heka... He believed that they had overused channels too, and that they could have got much better performance had they just stuck to using mutexes and AtomicIntegers and things like that instead of all the channels that got used.

**Scott Mansfield:** Yeah.

**Erik St. Martin:** So I think naturally we wanna use all this stuff because it's cool and it's new, and the languages that we came from didn't have them, and I totally abuse - I should go to jail for my abuse of channels when I first came into Go. I wanted to use them for everything.

**Scott Mansfield:** I think that's a pretty common pattern, though. Everybody comes in and, "Oh look, concurrency, parallelism. Channels everywhere", and then we calm down.

**Carlisia Pinto:** That happened to me, to use channels and ask for some advice about my code, and people were like "Just use a mutex here." So I would say for people who are starting out, learn how to use a mutex so that you can then make a choice if that's what you need, versus channels. A lot of times that's enough, and this performs a lot better.

**Scott Mansfield:** I also think it's important to remember that nothing is magic, so for a channel there is a fast path - think buffer channel, not the one where you need handshake where there's no buffer. But for \[unintelligible 00:14:39.04\] there's no magic. You have pretty smart code at the front whenever you're trying to insert something, but if you end up competing for that, it's a lot. That's the way it works. You can't have anything else there. So it's not like you're going to magically be faster by having this channel for concurrency. It has to have some sort of management of that concurrent behavior internally.

**Erik St. Martin:** Yeah, and I know some of this stuff, too. This is one of the things I was guilty of early on, I was using channels for state. When I should really be using a mutex, I would create these goroutines that select on channels, and that's where the updates took place to state, and that seemed like the pattern, because go ahead channels, why would you want mutexes? And this was in the early days, but I still see people coming to the language and doing that. I don't know what the best way to offer advice for that is... Whether there's "When to use channels, when not to use channels."

**Scott Mansfield:** I think I have a pretty good idea. If you're at Netflix scale, then all of the rules don't apply. But if you're not at Netflix scale, use whatever you want I think we've probably spent too much time focusing on tiny microperformance benchmarks, when 90% of our latency comes from the network and the disk and the database. We should worry about those things instead.

**Scott Mansfield:** \[00:16:11.10\] My impression though is that mutex and channels, they are not interchangeable. I mean, you can use channels in the way that you would... If all you needed was a mutex, you could force a design with channels in your code, but they're not really the same thing. I could be wrong.

**Erik St. Martin:** No, they're not. They're not at all. The only way it ends up working that way is because you end up having one goroutine that is the thing always updating state. It's almost used that way, but I think the pattern kind of came from - I think there were some projects early on that had that pattern, and then a lot of people kind of copied it and followed suit. I can't even remember what library I picked that pattern up on, and then I kept doing it. And there were other big name Go programmers doing the same thing, too. I think we finally realized to slap our own hands, like "Why!? Why are we doing this?" The code's much more complex, it's hard to reason about... And it's actually less performant.

**Carlisia Pinto:** And while on the subject, I just wanna mention this real quick: if you do figure out that a mutex is not gonna do it for you and you do need to use channels, if you haven't, it's worthwhile to watch a Rob Pike video on Concurrency Design In Go. I think that's what the name is... I'll put the link on the show notes. It's beautiful. It's not something that you watch and you're like, "Oh, I learned everything", but you'll get a sense of the different ways you can design for concurrency. It's gorgeous, it was my favorite video ever. Have you guys seen that?

**Erik St. Martin:** Yeah, yeah.

**Carlisia Pinto:** Of course.

**Erik St. Martin:** So for Rend, is that pretty much done? Are you actively maintaining it or are you adding new features?

**Scott Mansfield:** Well, at this point it's mostly done. It's got a couple new things I'm adding to it, mostly to support new memcached commands, because we're supporting each one very explicitly; sometimes I have to go in and edit code to add support for things like append() or prepend(), or things like that. It's in a pretty stable state at this point, actually. It's being used in production for us already, so I would call that stable.

**Erik St. Martin:** Now, are you gonna continue to support changes so that it stays wire compatible with memcached, or you're just kind of staying at the current version? Does it support all the commands that memcached offers?

**Scott Mansfield:** It doesn't really support everything that memcached offers, and there's no plan to be completely a hundred percent wire compatible, because there's some things that we just simply don't use. Our EVCache Java client that we vend to people does not expose everything, so we don't worry about supporting everything.

**Erik St. Martin:** Okay.

**Scott Mansfield:** It's a very pragmatic approach, because it's meant to solve Netflix problems, and it's open source in the hope that it will help somebody else solve their problems as well.

**Erik St. Martin:** I don't think that there's a need to be 100% either. There's a big project that came out of YouTube called \[unintelligible 00:19:37.17\] which is wire compatible with MySQL, but kind of makes MySQL distributed, and they don't support all SQL in there as well, just kind of the core things that they use.

**Scott Mansfield:** And that's okay, definitely if it solves their problem. I agree.

**Erik St. Martin:** And if it does not solve your problem... Pull requests accepted.

**Scott Mansfield:** \[00:20:01.05\] Or forks.

**Erik St. Martin:** Right, or forks. Kind of on a different track here - was it yesterday, or the day before? - I came across another one of your blog posts, which I actually love, which was called How To Block Forever In Go. That was kind of like a list of all the different ways... Are these just things you came across, where people would create deadlocks in code?

**Scott Mansfield:** Not strictly. I think it's still in the Rend code, I have been making a new wait group and then adding one and trying to wait on it so \[unintelligible 00:20:43.22\] and of course, I thought that was a little bit absurd. So a while ago we were talking in the Gopher Slack about this, and I mentioned ways to block forever, and then other people started piling in and adding suggestions and other things, and I thought it was kind of funny, because there was just... I don't know how many are listed here...?

**Erik St. Martin:** It was probably ten or more... There was quite a few, and I actually have one that's missing.

**Scott Mansfield:** Yeah, that's the great thing about it. I learned the proper way to do it, which is the runtime.go exit I think, in the main, which allows you to exit out of your main but allow every other goroutine that you've started to keep running. So that's the proper way to do it, and I didn't know that. It's one of the wonderful things about putting something out there - people will come correct you, but that means you actually get to learn the right way to do it.

**Erik St. Martin:** So wait, what was it? You said runtime.exit?

**Scott Mansfield:** It's called go-exit, I believe...

**Erik St. Martin:** Yeah, something along those lines, I can't remember now. It's one of those things, you have to be there ready to type it, and then it comes to your mind. Well, nowadays you don't even have to do that, because of the editor plugins...

**Brian Ketelsen:** Yeah, VimGo...

**Erik St. Martin:** The one that I remember not being on the list is a nil channel will also block forever. So if you try to send or receive on a nil channel, it will block forever.

**Scott Mansfield:** I need to add that now. I feel like it's not complete.

**Erik St. Martin:** \[laughs\] I think it should just be like a never ending list that evolves.

**Brian Ketelsen:** Yeah, that's the power of the internet. You can go back and edit it, and nobody will ever know.

**Erik St. Martin:** Yeah, and for everybody who's listening who has not seen this post, we'll link to it in the show notes, but it's basically this running list of different things you can do that would end up making your program deadlock; or the goroutine or the application itself just blocks forever. It was a fun read, because I'm going through there and like 90% of them I've seen or done mistakenly. And one of them that I saw was the double lock. That one was fun because, although I've never done it that way where you lock twice in a row, I have locked in a function and then called another function that locked the same mutex, and basically made it wait forever.

**Brian Ketelsen:** I did that this week. Yep... Oops!

**Erik St. Martin:** And I feel like some of the static analysis tools that are out there could be evolved to look for some of these patterns. I mean, some of them are Runtime-specific, right? You can't know that the channel is gonna stay empty forever, but other like the double locking I feel like you should be able to catch some of those, I guess. I don't know. Shamefully I have not written a static analysis tool, so...

**Brian Ketelsen:** It should be easy.

**Erik St. Martin:** Right? For anybody who writes static analysis tools... Hey, it's no different than the business delivering requirements, right? It's just a button. How hard could it be? Just add the button.

**Scott Mansfield:** Just slap some regex on it and you're good to go.

**Erik St. Martin:** \[00:23:57.02\] Right? Regex solves all the problems. Alright, so anybody have anything else you wanna talk about? Netflix, or the usage of Go there? What else are you working on, Scott? Do you have anything else going on in the open source community that we can steal?

**Scott Mansfield:** Netflix does, certainly, for sure. I actually had this list of Go projects written down, but it's not necessarily perfect for this... I mean, there's a bunch of things - I've linked them all actually to you guys already - that are all open source and are related to Go use here. But myself personally, no, I've pretty much been stuck on working on Rend this whole time.

**Erik St. Martin:** Such is the life of a developer... Okay, so I have to look for that link, but we'll make sure that's in the show notes too, for anybody that's interested in all the kind of projects that are coming out of Netflix and that are open source, and even outside of Go. Netflix has been releasing a lot of cool stuff.

**Brian Ketelsen:** Forever. Netflix in my mind is one of the pioneers of the "Open sourcing our tools so that you can use them" group. We're not at the Free Software Friday yet, but you gotta throw down for Netflix, because they've been helping everybody else build awesome environments for a long time.

**Erik St. Martin:** Yeah. I mean, long before it was as trendy as it is now. And you have to give credit too, because we're Go developers and it's one of the primary things we all love, but we were other language developers too, right? It's almost impossible to solely develop in one language these days, and there's plenty of other projects that Netflix and other companies have released that are Java, and all that jazz, that we've gotten some good use out of over the years.

Speaking of projects and news, do you guys wanna have a random roundtable about things going on in the community, and projects we're interested in and playing with?

**Brian Ketelsen:** I'm ready.

**Erik St. Martin:** You're ready?

**Brian Ketelsen:** I'm ready.

**Erik St. Martin:** Your voice is clearing up there, Brian. Are you feeling better?

**Brian Ketelsen:** I muted my microphone and coughed quite a bit, it helped a lot. So one of the big things that happened this week was GoKit was tagged at 0.1.0, and I think that's a really big milestone for GoKit. It was kind of an arbitrary tag... When I talked to Peter about it, he said there wasn't anything gigantic that made it into a 1 tag. But they've got thousands of users, and they're drawing this line in the sand and saying, "Hey, this is a point where we're stable and worthy of a release milestone." The Go Kit packages are really nice because they're useable outside of GoKit microservices, the logging package is amazing; I really like their logging package a lot. And they've got lots of little packages that are easy to use outside of the entire GoKit ecosystem. So if you haven't looked at GoKit yet, please do. Lots of good stuff there, and they've got a great, vibrant community that helps push that GoKit code forward.

**Erik St. Martin:** So is this more of marking as stable API, where the API won't change much?

**Brian Ketelsen:** I don't think there's any significant guarantee of API stability in this release, but it's just kind of a...

**Erik St. Martin:** A confidence tag?

**Brian Ketelsen:** Exactly, it's a milestone.

**Erik St. Martin:** Yeah. GoKit's been doing some great things, and I use their log package, too. I'm quite fond of it, it's one of my favorites.

**Brian Ketelsen:** Yeah, it's a good logging package.

**Carlisia Pinto:** And one FYI, Peter was on the Changelog podcast, and in that episode he goes over the components of the package, and he talks about stability and moving towards a stable release. It's a very good show.

**Erik St. Martin:** Scott, what are you doing for logging? Because you said you don't use any external dependencies. Did you write your own logging package or are you just using the standard library?

**Scott Mansfield:** \[00:27:57.23\] Generally you just stay quiet when everything's okay, but we rely a lot on metrics because in AWS you can have instances just up and disappear. We run somewhere between eleven and twelve thousand instances, so we're not gonna worry about the logs from one instance, most of the time. If we do log, it's when some things are really completely wrong and we're going to close the connection, or something like that, and therefore I don't really worry so much about it. We just use the log package.

**Erik St. Martin:** So this is more just kind of to be able to triage errors you're seeing in your metrics of system performance and latencies and things like that, then you kind of go after the fact to triage? So you don't really use this much of the tagged logging and stuff like that that other people use?

**Scott Mansfield:** No, certainly not. We just... Every time that I have an error that's a very specific situation, I just put a metric and if that counter goes anywhere above zero, then we know specifically what went wrong.

**Erik St. Martin:** That's true too, right? Because ultimately that's what a lot of people do anyway, right? They tag their errors of certain types and then they try to query and get counts of them and all that stuff. So you're just kind of skipping the bloat of having all those logs sitting around and just keep the thing that matters to you, the count.

**Brian Ketelsen:** Does that mean that you have watches on those metrics, to trigger events or notifications?

**Scott Mansfield:** Yeah, so if there's anything that we know would be catastrophic, we could work on having alerts and other things on loads. I feel like an AtomicInteger increment and reading it once a minute is far more lightweight than writing out a whole big JSON block.

**Erik St. Martin:** But JSON is so slimmed down in comparison to XML.

**Brian Ketelsen:** And human-readable, too.

**Erik St. Martin:** Right?

**Brian Ketelsen:** So, we've turned our podcast into SREs at Netflix. We're gonna have to change our branding, but I think you're getting a lot of good, valuable information out there, guys.

**Erik St. Martin:** Yeah. I always find it interesting too to talk to different people who work at scale, because anytime you get into distributed systems, and especially the size that Netflix is, you can't be concerned about a single machine anymore; it's impossible to do that. So I always find it interesting to see what people's approach is to make sense of the massive amounts of data, and metrics, and logs, and all that jazz. And it especially became interesting when you said you use no outside dependencies.

Alright, so moving on. What else have we got?

**Brian Ketelsen:** I wanna say too about our perennial, favorite projects here at GoTime, our Vim Go and Hugo, they both leveled up this week with some updates. I haven't read the Hugo announcement yet, so I don't know what's new there. Vim Go had some interesting changes for implementing interfaces - is that what you were telling me, Erik?

**Erik St. Martin:** Yeah... I don't even know how you would pronounce this command... Gofmt - I would never expect it could be pronounced, until I heard someone say it. So I don't know how you would pronounce the command, but Go implementer... But it's cool, because it basically stubs out your type with all the functions, so that it will implement said interface, which is really cool.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** I haven't used it yet, but it sounds like something I would use.

**Brian Ketelsen:** Yeah, me too. So how about you, Erik, did you come across any interesting projects or news this week that you wanted to share?

**Erik St. Martin:** I saw Francesc's Go Tooling In Action video, which I thought was really cool. Did anybody watch that?

**Brian Ketelsen:** Oh, that is a great video, yes.

**Erik St. Martin:** Scott, did you get a chance to see that?

**Scott Mansfield:** \[00:32:00.04\] I have not yet.

**Erik St. Martin:** It was very cool... I always like watching people work too, and he kind of walks through some of the tools that he uses and how to use them. I even saw him to the new fancy Torch graphs that Uber supplied, which I have to say is a much easier way to visually see pprof graphs.

**Brian Ketelsen:** Yeah, they're pretty.

**Erik St. Martin:** Have you played with that one yet, Scott?

**Scott Mansfield:** The Go Torch projects?

**Erik St. Martin:** Yeah, the Go Torch projects.

**Scott Mansfield:** Well, the guy who invented flame graphs actually works here on our SRA team.

**Erik St. Martin:** Oh, nice.

**Scott Mansfield:** ...so it's a pretty well-ingrained use for Java apps here. People use it all the time, and only recently have I actually started using Go Torch. I've been stuck in the stone ages apparently, using the web graph output from the pprof tool.

**Erik St. Martin:** You're not the only one, I do the \[unintelligible 00:32:56.13\] thing, too.

**Brian Ketelsen:** Scott, I think that's the closest we've ever come to a mic drop on GoTime, thank you for that. \[laughter\] Yeah, we invented those - thanks, Erik.

**Scott Mansfield:** Not we, Brendan Gregg. All credit goes to him. He's really, really great at what he does.

**Erik St. Martin:** Yeah, he's like the godfather of performance. I've got his book on my desk here, which I still haven't made it all the way through. What happens with getting older and having less time? I just... I don't get it. Somebody invent more time. Could you write that in Go, please? \[laughter\] Scott, did you have any projects you wanted to talk about?

**Scott Mansfield:** I kind of keep my head in the sand... I've been working on some features that we need for Rend to be deployed, and we had all kinds of things going on recently, so unfortunately no. I also have a - God, she's eight months old now - eight-month-old daughter, so all my free time is pretty much spent with her.

**Brian Ketelsen:** That's a big external dependency right there.

**Erik St. Martin:** Yeah. My - I guess he's 20 months now - 20-month old daughter woke up just before we got on the call for this show. That's twice now. She times it perfectly, I think she knows.

**Carlisia Pinto:** Of course she knows.

**Erik St. Martin:** She's like, "I wanna be on the mic, too." \[laughter\]

**Brian Ketelsen:** She likes attention.

**Carlisia Pinto:** She's a future podcaster.

**Erik St. Martin:** I'll get her on the show when she can talk.

**Carlisia Pinto:** I have a project I wanted to mention. Yet Another Web Framework (YAWF).

**Erik St. Martin:** So is that actually the name of the project, or is that what you've labeled it?

**Carlisia Pinto:** No, that's an acronym I just came up with. But the name of the project is Iris.

**Erik St. Martin:** I don't think I've seen Iris... So what's the spirit of it? Is it like closer to a Revel, is it closer to a Martini, or a Negroni?

**Carlisia Pinto:** Yes, so HttpRouter... He actually has a graph here that he benchmarked - I'm assuming it's a he - the Iris package with HttpRouter, GorillaMux, Gin, Beego, Martini, \[unintelligible 00:35:27.26\] and other ones that I've never heard of. And he claims that it's twenty times faster. I learned of it from \[unintelligible 00:35:36.16\] when he did one of the remote Go meetups and he said that he uses it and he loves it.

I haven't used it, but anything that says "I'm 20 times faster" calls my attention.

**Erik St. Martin:** So what's your feeling on this, Brian? What was it, episode two, that you made the comment about router performance...?

**Brian Ketelsen:** \[00:35:58.15\] Can we please stop making more routers for Go? Please! \[laughter\] We have some, they're great, and that's not really where your code is gonna improve in terms of latency, so stop. Thank you.

**Carlisia Pinto:** I heard the episode and I saw that, and I had to mention it.

**Brian Ketelsen:** You're just trolling me, Carlisia. That's not nice. \[laughter\]

**Carlisia Pinto:** I have to try to get my way, somehow. \[laughter\]

**Erik St. Martin:** I haven't even look at it, I'll have to pull it up. Recently I haven't really been... I'm kind of in the Scott camp here where it comes to the frameworks... Recently I've just been writing my own stuff. Maybe I'm not building anything big enough, I feel like I need a framework for the repetitive nature of it, but...

**Brian Ketelsen:** Or maybe you just don't wanna take on another external dependency that you have to babysit.

**Erik St. Martin:** That's quite a possibility, as well.

**Brian Ketelsen:** Which is gonna make it harder and harder for us to find interesting Go projects if we're never using any.

**Erik St. Martin:** That's very true, too. I should probably make a point out of playing with new projects. It's hard, though. You get kind of trapped in your own little world, building stuff... So what was the other thing that I wanted to talk about...? Oh, the survey.

**Brian Ketelsen:** That's right.

**Erik St. Martin:** \[unintelligible 00:37:15.10\] the survey? There was a survey that went out... Who sent that out?

**Carlisia Pinto:** It was Ed's.

**Brian Ketelsen:** Ed Muller, from Heroku.

**Erik St. Martin:** That's right. He sent out a survey, trying to gauge people's usage of Go and the way they use it, the libraries they use, the vendoring tools they use... Maybe so we can agree on one. Scott, can you use one? \[laughter\] Have you tried any, Scott?

**Scott Mansfield:** I was forced to use Godeps to deploy something on Pivotal Web Services. I think I had one dependency in, I just put it right in the vendor folder. It would not actually compile and run my code without a Godeps file.

**Brian Ketelsen:** Wow...

**Erik St. Martin:** This is kind of like how I forced Brian to use Node one time.

**Scott Mansfield:** Do you still have PTSD from that?

**Brian Ketelsen:** Yeah, didn't we talk about this last week?

**Erik St. Martin:** I still can't remember what it was - I think it was a JSON Lint thing, or some kind of tool like that I had him install, and I didn't realize it was Node, and I'll never \[unintelligible 00:38:25.16\]

**Brian Ketelsen:** No, I actually sent him an e-mail and said, "Report to my office. You're fired." \[laughter\]

**Erik St. Martin:** So Govender I like. I've been using that one recently. And that seems to be kind of almost the same thing, it just uses the vendor folder that already exists, and it kind of stuffs stuff in there. I kind of like that one. I don't hate it, I should say that. But I think you're right, we're still trying to get consensus as a community over what to use there.

**Scott Mansfield:** People have actually been frustrated, for example, with the AWS SDK for Go. They don't use any sort of vendoring tool, and they just have every dependency in their vendor folder. People are upset with them and they keep opening issues, but I think their position is very pragmatic, saying "There's no clear winner. We're not gonna pick one, because somebody is not gonna have that tool."

**Erik St. Martin:** Yeah, and that's kind of what I like about the Govender thing, because it doesn't really do much aside from stuff your dependencies in the vendor folder. At least from my understanding. I haven't seen any kind of manifest or anything like that. I've only recently started using it, but it seems to be that's all it does, stuff it into the vendor directory for you and do the go gets for you and stuff like that. I kind of like that approach. I'm still waiting for consensus on what to use.

\[00:39:53.12\] One of the things with the vendoring I still haven't figured out is - and maybe somebody here can solve that for me - there's kind of the whole "You don't vendor dependencies in the library, only in the command", or do I have that flipped? Have you guys heard that, where people are advocating not to vendor dependencies for libraries?

**Scott Mansfield:** Yes, you actually had it right. It's mostly for just... People who are writing libraries shouldn't force a dependency, because otherwise you end up running into diamond dependencies very quickly.

**Erik St. Martin:** Yeah, in a lot of libraries I think it makes sense, but there's others that are so big that they kind of force a version. I guess maybe they should make at least recommendations. There should be something maybe in the documentation that says "This library is known to work with these particular versions", or something like that, or there's at least a minimum requirement. But dependency management is not an easy thing, right?

**Brian Ketelsen:** I think we all need Maven for Go, and that's where we're going to evolve to.

**Erik St. Martin:** Oh my god...

**Brian Ketelsen:** I don't think there's a middle ground. This is probably an episode of its own, but I really don't think there's a middle ground. And trust me, I don't like Maven either, but how can you only do part of dependency management? How can you only do half of that? I think we have to do it all, and everybody has to do it all, or nobody gets anything. But that's just my opinion.

**Erik St. Martin:** And if only people could scream at you right now, Brian.

**Brian Ketelsen:** They are, and that's okay.

**Erik St. Martin:** ...through the airwaves.

**Brian Ketelsen:** It's alright. I think we talked about this a little bit last week - humility on the internet. I am perfectly happy to be wrong every day and have people tell me that, because I learn from it. So I'm accepting the fact that I'm wrong now, too.

**Scott Mansfield:** I would like to point out that the authors of different tools are actually talking to each other now, which is great. They are starting to try to find a middle ground or some kind of consensus on like what a lock file should be, or what kind of dependency resolution you should do... So there is movement on that front, but it still seems like a long way off.

**Erik St. Martin:** Yeah, that's actually a good observation. I kind of noticed that, too. In the earlier days of people talking dependency management, it was "We don't need it", and then it was like, "Okay, maybe we need it a little bit", and then there was like five tools, and then there were ten tools, and there was arguments. But you're right, I think that there's been a lot more kind of consensus. I think that the Go team has kind of stepped in too, and realized that maybe they need to kind of help facilitate this a little bit too, even if they don't implement the tool, they gave us the vendor directory, which I think made the tools less intrusive. We didn't have to do the whole Go path mangling that was required for some of the tools earlier on.

So yeah, I'm interested to see how it comes along and how long that takes.

**Scott Mansfield:** And actually a lot of the discussion is happening in Slack, there's a vendor channel that people are talking in, so if you wanna follow along, you can see the discussions happening, and of course, voice your own opinion if you feel the need, Brian.

**Brian Ketelsen:** Just keep it civil. That's a touchy subject for Go developers, and our Gopher Slack has a very specific code of conduct. If you're gonna touch something as deep as vendoring, just remember to be adult.

**Erik St. Martin:** I think that this show has become "Learn a new Slack channel every week."

**Brian Ketelsen:** \[laughs\]

**Erik St. Martin:** Because every week somebody mentions a new channel, and like "Wow, I didn't know that existed."

**Carlisia Pinto:** \[00:43:50.01\] And something about channels on Gopher Slack for people who are listening... Hop onto the GoTime FM channel, because we can all multitask here, we are very good at that and you wouldn't believe this. We have Adam tweeting for us, and we are all on the channel also typing, our guests are typing, and we're talking and doing all the things at the same time. So join us...

**Erik St. Martin:** And if you hackle us enough like Scott did, we might drag your butt on the show. \[laughter\]

**Carlisia Pinto:** Exactly.

**Brian Ketelsen:** As punishment. Now, is that concurrency or parallelism, Carlisia?

**Carlisia Pinto:** It's concurrency, for sure.

**Brian Ketelsen:** Okay.

**Carlisia Pinto:** Yeah. \[laughs\] Good question.

**Brian Ketelsen:** On that note, one of the things that I wanted to bring up this week is the season three of Beyond Code, which featured GopherCon 2015. That's launching this Saturday, and it's going to be in the show notes for this call. Beyond Code Season 3 has interviews from lots of he people that went to GopherCon and it's really awesome. I just saw some of the previews and really enjoyed asking interesting questions of the people in the Go community. So if you get a chance, check that out. It's really cool. Adam and his team did a fantastic job putting that together for us.

**Erik St. Martin:** And both Carlisia and Brian are on there.

**Carlisia Pinto:** Yeah. \[laughter\] Completely by chance. And I also want to mention that it was very late at night, they were way on the back of the back - this was at one of the after-parties; there were so many, I can't even remember. It was huge, they were way at the back... So just by the time I got to the end of the bar, I already had I don't know how many beers, so that is that. And everybody who was with me was drinking, and two other people who were with me are also on the movie... And I don't know how we all managed to just talk clearly, I can't believe it. I felt like I was ambushed.

**Erik St. Martin:** This is real. This is people. It's beyond code. Beyond code is the bar.

**Carlisia Pinto:** It is the real deal. But Adam was so great... The power of making people feel comfortable behind the camera - amazing. They're gonna be at GopherCon again. I highly recommend it, just do it. It's fun.

**Brian Ketelsen:** It was like looking at a time capsule. That was me a year ago, talking about Go, and talking about things... It was fun to watch.

**Erik St. Martin:** You made the comment in that - I think it's in the intro video we'll link to... I'm sure Adam, if he hasn't sent it now, is sending it on the Twitter... So you made the comment, something like "Everything interesting in the computing world is either written in Go or soon will be." How do you feel about that observation one year later?

**Brian Ketelsen:** It's true. If you think about the things that are really shaking up our industry right now, there's a shortlist, and on them are containers; the entire container industry is driven by Go, whether it's Docker or Kubernetes - all of those pieces are written in Go. A plethora of tools that are coming out now for us are powered by Go or written in Go; Go on the backend, somewhere. So it's really neat to see that really start to come true.

**Scott Mansfield:** I find this interesting, that it directly contradicts Atwood's Law, which is "Any application that can be written in Javascript will eventually be written in Javascript." \[laughter\]

**Brian Ketelsen:** I think that's actually also true, because I'm pretty sure there's already a Javascript container engine.

**Erik St. Martin:** \[00:47:51.29\] Right. I was gonna say, when we get off this call I'm gonna have to Google 'containers in Javascript'. If it's not written in Javascript, there is probably at least bindings.

**Brian Ketelsen:** Yeah, I'm sure there is. I realize it's a bold statement, but I think it's less hyperbole than it sounds. There's a lot of really interesting stuff happening in Go, and a lot of the great things happening in computing right now have Go in the middle of them somewhere.

**Erik St. Martin:** I think you're right, and we see more and more coming. I mean, look, we have Scott on the show, and by next year he's gonna have - I don't know, at least ten more teams inside Netflix using Go. Right, Scott?

**Scott Mansfield:** Sure, I just need to convince them to move away from our big old Java platform.

**Erik St. Martin:** And changing the wheels on a moving bus is never difficult, ever.

**Brian Ketelsen:** But look at the GopherCon sponsor list, as an example. There are companies on there that you wouldn't even have thought touched Go a year or two ago. There's some real surprises in there, it's really awesome to see it.

**Erik St. Martin:** Alright... So I think we're actually running overtime a little bit. Typically, each show we do kind of like a \#FreeSoftwareFriday, where each of us lists a project, thanking them for making our lives easier. Who wants to kick this thing off?

**Brian Ketelsen:** I will. I stumbled across Jessie Frazelle's dotfiles about six months ago, and I realized - I think it was yesterday, perhaps - that instead of doing a Google search or hitting Wikipedia or something like that, I really just needed to look in her dotfiles anytime I had a question about how to do something. So I can't recommend those dotfiles strongly enough for you... They're on GitHub at jfrazelle/dotfiles. Everything in the world you need to do is in there. There's some amazing stuff that you can learn from just cloning those dotfiles.

**Erik St. Martin:** So these were just your same defaults by Jessie?

**Brian Ketelsen:** Oh, it's so much more than same defaults by Jessie. This is unicorns and rainbows in your shell. It's everything.

**Erik St. Martin:** I know we looked for them for a couple of configurations, I can't remember what they were for. She had linked them to us on Twitter a while back. I think it was for using \[unintelligible 00:50:20.06\]

**Brian Ketelsen:** I put in the show notes "Zero to Awesome in one clone." I stand by it.

**Erik St. Martin:** That's awesome.

**Carlisia Pinto:** I'll go next... I'll follow Brian's lead and not mention a software per se, because I couldn't come up with one today. I will mention this open source book that I've been going through, it's called Network Programming With Go. So much of Go is used for systems programming and networking, and I've been trying to learn more about it. This book is great because it's thorough in terms of breadth, but each subsection, you can just go on the internet and find videos and spend two hours or more learning about it. It brings everything together. It goes over everything there is, at least that seems to me to be the case. It has a lot of examples of using Go in the standard library to do some of that work. The guys is a professor, his name is Jan Newmarch. It's a pity \[unintelligible 00:51:35.22\]. So that's my recommendation today.

**Erik St. Martin:** Nice. And Scott, how about you? Do you have anybody you wanna thank?

**Scott Mansfield:** Well, I think I'm gonna take the cheap way out and just say Go.

**Erik St. Martin:** That's not cheap.

**Scott Mansfield:** \[00:51:51.13\] Honestly though, the standard library being open source has allowed me to have a much deeper understanding of what actually happens when I say, for example, 'bufio' without 'write', or something like that. It matters a lot for us. Being able to just very quickly go from docs to source code and follow the path allows me to really understand what's going on.

**Erik St. Martin:** Yeah, and I don't think we consider that cheating. I think it's the one thing that makes all of our lives easier, all the time.

To everybody's point, we use only a couple of tools every day, so I think we've gotta start stepping outside the box. For me - and I know I'm gonna pronounce this wrong, because I don't think I've ever heard anybody pronounce it, but it's actually a project called Radare, or Radare2, rather. It's not something I use every day, but it's something I play with. They call it a reverse engineering framework, but really it's kind of a disassembler and debugger. It kind of does some of the same stuff GDB does and all that jazz; it serves kind of the same role that IDA Pro does, but it's completely open source, and there's Go bindings for it, which is awesome. So you can actually script the disassembly and searching and patching of code using Go. I've only tinkered with it a little bit, but it's something that I'm looking forward to playing with more. It has ASCII control flow graphs of the assembly, and all kinds of fun stuff. I'd like to see what I can do about pairing it with Delve, one day, when I have infinite amounts of time.

**Brian Ketelsen:** Tomorrow?

**Erik St. Martin:** Later today, you know... Alright so with that said, I think we are probably well over time at this point. I wanna thank everybody for being on the show, I wanna thank everybody for listening. Everybody who is chatting with us on the GoTimeFM channel on Slack. We are on iTunes too, so now everybody can share us through iTtunes or just go to GoTimeFM. We do have a GitHub.com/GoTimeFM/ping if you want to suggest people to be on this show or for us to ask questions, or... What else?

**Brian Ketelsen:** Somebody needs to turn down the base on Erik's voice.

**Erik St. Martin:** Yeah, I'm terrible about that. And I think that's it. Twitter: @GoTimeFm on Twitter, as well. With that said, goodbye everybody.

**Brian Ketelsen:** Thanks for being on, Scott.

**Scott Mansfield:** Sure thing.

**Carlisia Pinto:** This was fun, thanks Scott.
