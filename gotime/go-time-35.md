**Erik St. Martin:** Welcome back everybody for another episode of GoTime. Today's episode is number \#35 and our sponsors for today are Toptal and Compose.

Today on the show we have myself, Erik St. Martin, Carlisia Pinto is also here. Say hello, Carlisia...

**Carlisia Pinto:** Hi, everyone.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Hey!

**Erik St. Martin:** And today's special guest is a co-founder of Honeycomb.io, formerly of Parse, but I don't wanna give away too many details... I'll let her introduce herself and a little bit of her Go background. Please welcome Charity Majors.

**Charity Majors:** Hey, thanks so much for having me.

**Erik St. Martin:** So you wanna give everybody maybe a little bit of your background, how you got into Go and what you're using it for?

**Charity Majors:** Yeah, totally. I started using Go at Parse; we wrote the platform originally in Ruby, and it just hit a wall. We wrote the entire thing in the course of two years in Golang. It turned out it was much harder to rewrite than to write, especially with mobile clients, because you know, everybody ships their app... They can't ship it to account for any of the changes that you're making in the API, and there were so many implicit assumptions baked into that Ruby code, and you have to make every single one of the explicit when you're moving to Go. Then, of course, at Honeycomb we just started with Go right off the bat.

**Brian Ketelsen:** Good choice.

**Erik St. Martin:** That's a good point, designing APIs for mobile devices... Because you can't control when people upgrade, and some people never update.

**Charity Majors:** They never update, and we had a million of them. Planned obsolescence is definitely a thing that we could do and we didn't, because we would just lose a significant faction of our users.

**Erik St. Martin:** Was this performance bottlenecks you guys were running up against, or...?

**Charity Majors:** Well, that was the one that we had first... We had a bunch of unicorns; you know, the Ruby web server... Ruby isn't exactly thread-safe so we've got this fixed pool of unicorns, and we had first one database and it was pretty okay, but by the time we had 25 replica sets behind it and MySQL and Cassandra, there was always a database breaking and you would have all of the workers filling up with in-flight requests to whatever was timing out; impossible to provision enough, to have enough in-flight workers to timeout gracefully. We tried everything to make it timeout those connections; we got into a place where it kind of mostly worked for Mongo, but it would never work for MySQL because of ActiveRecord, and it probably would have been as big of a rewrite to get out ActiveRecord, make it thread-safe, move to JRuby... Some gems were never gonna be thread-safe, and we just kind of table-flipped. We were like, "We need a threaded language."

**Brian Ketelsen:** That is such a familiar story. I've never heard that before. \[laughter\] And I gotta be honest, I don't miss unicorns, I really don't.

**Charity Majors:** You know, the unicorn thing... I'm very much associated with a unicorn in most people's minds, and I think it's because it's fun and sparkles and magic, and it's Unicorn because that web server was just the pain of my existence for years.

**Brian Ketelsen:** Ugliness.

**Erik St. Martin:** Is everybody using Puma now? I think that's the thing now.

**Charity Majors:** \[00:04:02.29\] Using what?

**Brian Ketelsen:** Everybody's using Go now. Nobody's using Puma anymore, they're using Go.

**Erik St. Martin:** The people who have not yet converted...

**Charity Majors:** You know, Ruby's fine... I mean, Unicorn is fine, for what it does. If you're writing a web app - fine; it has a lot of helpers. Would it have taken us longer to prototype and write Parse the first time? No question about it, and you have to find slightly better engineers also.

So I don't even know that I would have made a different decision that they did in the beginning... Because remember, when you're a startup, it is never clear that you're gonna succeed, and Ruby helped this get going really fast. And Go didn't really exist outside Google, remember? We didn't have this pool of Go programmers, and are we gonna use C++? No. In 2011, that was like Java? No. Ruby was a totally reasonable choice at the time.

**Erik St. Martin:** Here's a question, because the Parse rewrite was pretty early on, so I'm assuming everybody grew the talent internally; there was nobody on the team who was already familiar with Go... You were just kind of learning on the fly.

**Charity Majors:** Correct, but we evaluated all of these statically typed languages and we argued about it for like six months, and the reason that we chose Go -- it came down to C\# and Go, really... And the reason that we chose Go was as a recruiting thing. Because it became really clear that people wanted to work at it, and we could recruit people to work in it. Whereas if we wanna do it in Java, like... Well, no. \[laughs\]

**Brian Ketelsen:** That's interesting. I think that's the first time I've heard that. I've definitely heard of people rewriting in Go for its technical merits, but for its HR recruiting merits - it's not one that I've heard yet before. That's pretty awesome.

**Charity Majors:** It was definitely the clincher.

**Carlisia Pinto:** I know you're still small, but I know you're probably either hiring here and there or you're testing the waters... How do you see the pool of developers for Go, and how do you even approach it? If you had an opening right now, would you be looking for somebody with experience in Go, or somebody just really good and who would have the resources to train them in-house?

**Charity Majors:** No, I don't care what languages people know, honestly... I have huge faith in people's ability and capacity to learn. Actually, I wouldn't want to hire someone who I didn't think could learn whatever we needed. I hate it when people do that sort of thing... "Oh, I see you have experience in Blah." No! In fact, this is one of the reasons that I love Parse. When I started there as their first infrastructure person, I had never -- either we used Ruby, AWS, Mongo, Cassandra... On down the list of technologies, and they looked past that and they were just like, "You'll learn." I was like, "Yeah."

**Brian Ketelsen:** Couldn't agree more.

**Erik St. Martin:** Having a good foundation and the passion and interest to learn is more important sometimes.

**Charity Majors:** Totally.

**Erik St. Martin:** Brian and I have talked about this... I like hiring people for who they're gonna be tomorrow, versus who they are today. Because some people are smart, and they'll be that same person tomorrow, whereas the other guy or girl will be ridiculously smarter a year from now and surpass the people you already have.

**Brian Ketelsen:** So tell us about how you're putting Go in the stack at Honeycomb. What kind of interesting challenges have you come up with there?

**Charity Majors:** Boy, all of our interesting challenges at this stage are around driving user adoption. I just can't even claim otherwise... It would be ridiculous. One thing that I will call out though is that people keep asking me when I'm gonna use containers, and I'm like "Why? I'm running Go." I often think that at Parse we would have hopped on the container train if we had been using Ruby, for sure. But I'm just kind of like, "Why?" I mean, it isn't robust... There are no compelling reasons, there are no big wins that I would get by using containers.

It is very much the same at Honeycomb. You've got a tiny little statically linked binary, just copy it around places, it's great.

**Erik St. Martin:** \[00:08:17.12\] Yeah, I mean... I guess the motivation for containers could be orchestration, too. If you have a large cluster...

**Charity Majors:** Yeah, if you have enough to justify schedulers, yes. But almost nobody does, and it's self-inflicted damage when they try.

**Erik St. Martin:** I was talking with a group of people at KubeCon this year, which is the Kubernetes conference, and somebody was asking, "When should they scale to containers or orchestration platforms", and my first pass at that was "When you can't name all of your machines by hostname." Saying like, "Chicago Web 1-5 doesn't count", but if you couldn't reasonably name all of your machines, then it's worth considering. If you've got three hosts, you're probably not gaining much.

**Charity Majors:** Yeah.

**Brian Ketelsen:** So my one Node Kubernetes cluster is overkill?

**Erik St. Martin:** \[laughs\]

**Charity Majors:** Not for you. You have fun with that! \[laughter\]

**Erik St. Martin:** Every technology you adopt comes with overhead too, right? Teams need to learn and understand, and they need to maintain it, they need to know what the failure scenarios of those things are, how to debug it... So it's just one of those things, it's added overhead if you don't have a team or infrastructure the size that gains more from it than it costs.

**Charity Majors:** Totally. It's another layer of abstraction, and I like that policy about not naming your host. I haven't done that in like decades. But yeah, orders of magnitude... And it's also a function of the complexity, the number of host types that you have. I do like the way that we're going, but a lot of these things are not fake. Have you seen the best practices for Kubernetes? Sorry, it doesn't exist. It's like, "How to get data out?" "Um, maybe tail it out into an Elasticsearch cluster and grep through it...?" It's just like \*shrug\*. Nobody knows. We aren't Google... Google's infrastructure little giffy thing is well-meaning, but mostly driven by sort of academic type technologists who are my least favorite type of technologists.

**Erik St. Martin:** Yeah, I think that with all of that stuff it's an early technology, which means it's not fully flushed out yet, which means that if you're struggling and you can gain from it and it's something that you can build off of and save yourself problems and engineering time, then awesome. But if you're not willing to take the ride with the project and work through the kinks and build your own things to round it out (your complete use case) then it's probably not worth adopting. But I think it's promising for a lot of people, as it evolves.

**Charity Majors:** Oh, for sure. Yeah, there's a lot of really good stuff there. The bones are great, and it's exciting to get to play with some of these toys. It's just that we - exactly as you said - we'd have to know that they are toys for most of us. And if you don't have the drive to go all in on it when times get hard - because they're gonna get hard a lot - then I don't recommend.

**Brian Ketelsen:** Yes, times always get hard a lot, especially when you're on the bleeding edge. There's craziness, for sure.

**Erik St. Martin:** Scott Mansfield is trolling us in the GoTime FM channel. He said, "Gotta fill that container spot on your buzzword bingo card." \[laughs\]

**Brian Ketelsen:** There are definitely benefits to containers, especially in the development environment. There are certainly times where doing things on a Mac is just nowhere near as easy as doing it in Linux, so I'm all over the development environment Linux thing. But I agree, especially with Go, that there is less incentive to use a container in production. If you've got a Go binary on a server, you don't need to run 30 of them, because one Go binary will operate just as well as 30 will; in fact, better. So it's not a scaling issue, it's not bin-packing and filling your servers with processes; Go handles that nicely with GOMAXPROCS - it's all done for you by the runtime.

**Erik St. Martin:** \[00:12:12.09\] I mean, you get process isolation and stuff like that too, where you can control using CGroups how much resources it can consume, namespaces - you can kind of isolate processes from each other, if your project has those sorts of needs.

**Charity Majors:** Yes, absolutely, but you're adding complexity, so that's the tradeoff. I don't know if you've seen... JessiTron has this great blog post about where it's okay to experiment and add complexity... Because you don't wanna take people's playfulness away from them. We all do tech because we love it, and clamping down on everything is just gonna make people quit and go. So she has this great blog post where she has a heat map. She's like, "This is your playground, it's your developer environment. And there's developer tools for everyone. This is where we introduce new things and where we get 80% of the obvious bugs out...", and it's like this whole progression down to the things that you are conservative with where you don't introduce things until they've been vetted and tested, and that's databases and operating systems.

**Erik St. Martin:** There was a post I read, I wish I remembered it now... It was basically saying you have a budget for new tech and bleeding edge, and you get one.

**Charity Majors:** Yeah, that was Dan McKinley. You get three innovation tokens as a startup.

**Erik St. Martin:** Yes, and different things are worth different amounts, or something like that. I remember, if you picked some hot new key-value store, that's your one; everything else better be proven technologies. I think that's a smart move, because if everything is new and bleeding edge, you're gonna be fighting the system quite a bit.

So let's talk a little bit about what's going on at Honeycomb, what all of you are building there,, and kind of how Go is proving itself.

**Charity Majors:** Yeah, so what we are building is a tool for debugging complex system. It's kind of like -- you can think of GDB for systems, sort of... Or you can think of it like your IDEs for your code. A lot of people will throw around these terms like "predictive analytics" and "machine learning", and... Come on, you know you're not...! I wanna see the corpus of data. You're cheating on that, you know? We think that the best route is to place a human at the center and give them nudges and help them. It's based a lot off of our experience using Scuba Facebook. When we got acquired, they tried to push all kinds of tools on us, like Facebook, and they mostly didn't work for us. The one great exception was Scuba, and I know so many engineers at Facebook who I've heard them say that they're going to miss the Scuba, and I said it too. When I left, I was like, "Surely something like this exists in the world, because surely the world of data and monitoring has come a long way", and it hasn't. It really hasn't. Most people are still building new versions of Nagios and RRD, mostly.

**Erik St. Martin:** Now, for anybody who's not familiar, do you wanna give a brief explanation of what Scuba is?

**Charity Majors:** Yeah, absolutely. I'll tell you what Honeycomb is, because it's less Facebooky. We accept JSON at the edge and arbitrarily wide set up key-value pairs. We aggregate in real-time on all of those dimensions at once, so there's no indexes. You don't have to pick the three or four or five things that you wanna be able to search on; you can search on any key as soon as you drop it in. And if you wanna stop sending it, there's no schemas. We're dropping key-value pairs, we aggregate on them and then you can just explore; you can just slice and dice any of the dimensions, any combination, add one...

\[00:16:10.07\] We pre-compute things like percentile buckets, max and min are always there... Having that raw, original row, like getting to deal with events while you're debugging is mind-blowing. It's so impossible to go back to aggregates or rollups or ticks or counters after that. On the backend we had to write our own column store in Go...

**Brian Ketelsen:** You got to rewrite Cassandra?

**Charity Majors:** No, not really... It's not even close, actually. They're like distant cousins, sure. But it's not a database. People give me shit all the time about writing a database after spending my entire life telling people not to write databases; we didn't, we did not write a database. There was hardly any query engine and there was no transactions. We wrote an optimized file format. I'm trying that out. \[laughter\] Anyway, and it uses a Cassandra model, so we can partition your reads over a whole bunch of nodes, so it's really fast. It's very important to us that this is interactive, that this is not a thing that you set a new constructive query and then walk away from your desk. It's interactive because debugging is interactive.

When systems get sufficiently complex, they outstrip your ability to predict what is going to break. And I think a lot of us are hitting that threshold faster and sooner than ever before, because there are so many trends that are pushing this level of complexity - everything from schedulers and containers to \[unintelligible 00:17:43.09\] to your distributed systems, microservices... All these things are awesome, but they're a lot harder to debug than the LAMP stack was. A lot more of the intelligence lives in the edges between the nodes, not just deep diving in the nodes themselves. In fact, you may not even have any servers, and now what do you do? And it's really important just to stitch together everything from the edge, with your mobile or IoT device... Storage is out there increasingly, too. How do you know where this bit is supposed to be? All the way through the code that you write yourself; it has to be native SDKs, like an APM ergo SDKs are amazing.

It's really important to us to be able to debug your database. I don't know how people DBA without this kind of thing, and the answer is that they don't. They just know how to look for slow queries, but that's very often not actually the problem. For instance, people are like "Oh, my database is getting slow, and I looked for slow reads, because reads that used to take one second are now taking you 30 seconds." Well, okay, that may be the symptom that you're seeing, but often the problem is something like your write volume is getting higher, and they're all contending for this one row or this one lock, and because those writes can yield, if they're just reaching period saturation you can tune read queries all you want, it's not actually going to make a dent.

The problem - with our tool what you can do is add up all of the time that each lock is being held by each lock query, and there it is. It's just so easy to deviate once you can see these things. I get down to the weeds of the databases I guess if Cristina is here it's way more interesting Go stuff to say, but we're using Go for everything - the UI, all the way down to the guts, and it's not been one of our top ten problems, even close.

**Brian Ketelsen:** So when you're putting together Honeycomb, the idea is that you capture and collect all of the data from all of the different pieces in these distributed systems that we're building today...

**Charity Majors:** Correct.

**Brian Ketelsen:** ...and then use that to correlate and discover problems or maybe predict problems before they come - that's the idea behind Honeycomb, that it's kind of the central store for all of the information, all events that are going on and help you debug?

**Charity Majors:** \[00:20:07.12\] Yeah, it's so easy to just capture events from everywhere. Why do we have a different thing that software engineers are supposed to look at - a different thing than DBAs look at... All this does is it creates these barriers of language and of tooling and of use of reality. You don't have a common language to talk about.

People spend so much time talking about what their tools says, versus what somebody else's tool says, and you're not actually even talking about the problems here.

**Erik St. Martin:** It's the network. It's always the network. Blame those guys,

**Charity Majors:** It's always the network's fault. Well, what if you could see the network, too? Then you capture it in the form of JSON? Cool, then that might be able to tell you something.

**Brian Ketelsen:** That's awesome. So you said the UI is written in Go; you actually shipped a web UI in Go and nobody died?

**Charity Majors:** Nope, nobody died.

**Brian Ketelsen:** Wow.

**Charity Majors:** Now, we don't have to ship that much... Christine, my co-founder is amazing at holding the line against bad UX. There are so many features that we've actually implemented in the backend, and she won't let us put it up, because she's like, "Has this been designed? Have we thought about this? No, I will not put a magic button there for you." \[laughter\] You need that kind of a dictator in your life.

**Brian Ketelsen:** You do, you gotta have somebody to gate all of those things. Erik and I have that going really well together. I have crazy ideas and he always tells me no. It works well.

**Charity Majors:** It's fine to move fast, but when it comes to UI, it is so hard to untangle good design and get back to a place that's sane.

**Erik St. Martin:** And every time you change it you end up upsetting some subset of the people using it. People don't even have to use something; if you take it away from them, they feel lost. "What if I needed it?"

**Charity Majors:** Yeah... "I knew how to do that. I know I'm gonna get paged in the middle of the night someday and I'm gonna need that button."

**Erik St. Martin:** So I think it is about time for our first sponsored break. Our first sponsor today is Toptal.

**Break:** \[00:22:07.28\]

**Erik St. Martin:** And we are back, talking with Charity Majors from Honeycomb. We were just talking about the UI... So that's written in Go?

**Charity Majors:** Yes.

**Erik St. Martin:** Is this like GopherJS? Or you just needed the frontend layer.

**Charity Majors:** Yes, the query -- we are using Javascript for the actual presentation layer.

**Erik St. Martin:** Okay.

**Brian Ketelsen:** Aww...

**Charity Majors:** \[laughs\] Sorry, kids.

**Erik St. Martin:** Brian would have done a backflip.

**Brian Ketelsen:** I'm crushed.

**Charity Majors:** We're apologetic

**Erik St. Martin:** Is that React?

**Charity Majors:** Yeah.

**Erik St. Martin:** Okay.

**Charity Majors:** You've gotta keep frontend engineers happy.

**Erik St. Martin:** So that seems to be the thing people are doing now with a lot of web apps, in Go anyways - a JSON HTTP interface from Go, and doing React and stuff on the frontend.

**Charity Majors:** Yeah, JSON is the language that we're all rallying around, which is why your metrics should be in it, too.

**Erik St. Martin:** Uh-oh... Somebody just messaged a shirt that says "No." I don't get it. \[laughter\]

**Brian Ketelsen:** That's for you, Erik. That's for you.

**Charity Majors:** I'm still trying passwords one by one, trying to get back into that channel.

**Brian Ketelsen:** It's never gonna happen. Give it up.

**Charity Majors:** I know...

**Erik St. Martin:** \[00:23:51.06\] You'll get it figured out as soon as we end this show, it's good. \[laughter\] That's the way it always works. You'll be trying to think of something during a conversation, and you remember the second the person leaves.

**Charity Majors:** Obviously...

**Brian Ketelsen:** So who's your target user for Honeycomb? What problem are you looking to solve?

**Charity Majors:** Honestly, my heart is in empowering developers. I feel like New Relic is really great at helping developers get this first flash of "Oh wait, you mean I can know what's going on?" But you run into a wall. Everyone I've ever talked to is like, "Yeah, it was great, and now I can't find something", and I think we can do better than that.

Ops people don't need to be sold on this; they generally know what's wrong with our current set of tools. I feel like we're ready for the second wave of dev ops, though. The first wave was all about "Dev ops people write better software" and "Message received." I think we've spent the last 5-6 years leveling up on writing tests, really having infrastructure as code.

Now I think it's time to be just as hard-lined against "Alright developers, time to know how your stuff works. Time to know how to own your services from end to end. Time to know how to architect things, how to maintain things and how to be on call for things." Collectively, we will work to make on-call not miserable; that's not supposed to be like a sentence - "You will go to jail and be on-call for your stuff." But I do think that closing that loop of cause and effect between "I wrote this" and "I have pain when it breaks" to some extent is one of the most efficient things that we can do to write better services and better software.

Also, operations is becoming a specialist gig, honestly, and DBAs are never going away, but they're increasingly getting on the other side of an API. And if you care about being a good engineer - I know I'm making a lot of blanket statements here... But at Parse we had all these mom and pop shops who build an app; who's on call for their app? Well, they are. That means that we need to have the right tools. We need to have tools that let us talk about what's happening now, what's happened recently across the organization and across the stack. What we are doing is heavily recency focused, now and recently, and we need to actually have the tools to answer new questions. Asking and answering new questions is at the heart of understanding and debugging complex systems, because like I said, you can't predict what's going to break, so you can't just write monitoring checks for it, you know?

I think this is an approach that feels a little foreign to ops people, because they're used to predicting how their system will break and building out monitoring tools for that system, and I think it feels very natural and homegrown for software engineers.

**Brian Ketelsen:** So really this is the personification of dev ops in an app.

**Charity Majors:** Absolutely.

**Brian Ketelsen:** Interesting. So there's a lot of big Go news this week...

**Erik St. Martin:** Yeah, I heard something about a release, or something... You know?

**Brian Ketelsen:** Yeah, this is a big week for releases, apparently.

**Charity Majors:** Oh, yes.

**Brian Ketelsen:** And we slacked, completely... Oh my god, we dropped the ball on the Go release. We forgot to book our venue in the Tampa Go meetup for our Go 1.8 release party, so we're actually going to have a Go release party that's like two weeks late because we're lame. Oops!

**Erik St. Martin:** Is that why you're well-rested today, Charity? You needed to get your sleep for the release party?

**Charity Majors:** Yes, actually I will be there. I'm very much looking forward to it.

**Erik St. Martin:** Are you in the Bay Area?

**Charity Majors:** Yes, San Francisco. We actually wrote a blog post for you guys, that I forgot to mention. If you look at blog.honeycomb.io, we wrote a post - I wrote it late last night - showing some Go internals using Honeycomb.

**Brian Ketelsen:** How cool is that?

**Charity Majors:** Yeah.

**Brian Ketelsen:** We're gonna get on some retweeting action there, hang on...

**Erik St. Martin:** Nice. I know what I'm playing. \[laughter\]

**Charity Majors:** Event-driven instrumentation in Go is easy and fun.

**Brian Ketelsen:** \[00:28:06.08\] I'm quoting that.

**Erik St. Martin:** This is really cool. I don't know how you do it, Brian. He can sit here and quote people off and drop stuff on Twitter during the show... \[laughter\]

**Charity Majors:** He's multi-threaded.

**Brian Ketelsen:** That's right, I'm multi-threaded... It's Go. I just fire off a new goroutine, it's all good. \[laughter\] It comes from having three kids.

**Erik St. Martin:** So have you played with the beta for 1.8?

**Charity Majors:** I haven't. Dude, I'm CEO. How much time do you think I get to spend with code? Not enough.

**Erik St. Martin:** That seems to be the hardest part too about founding stuff and management, too...

**Charity Majors:** It really is...

**Erik St. Martin:** "But I wanna code... Please, just leave my office so I can write some code."

**Brian Ketelsen:** "What do you mean you want a one-on-one? Go away." \[laughter\]

**Charity Majors:** "We just had one last week... God!"

**Brian Ketelsen:** "Didn't I hire you? Isn't that enough affirmation for you? Come on!"

**Charity Majors:** \[laughs\] No, I don't mind the management and the affirmation... It's funny, I think about this now... I used to really hate repeating myself. In theory I still do, but that part of me has just grown numb from being hit with a sledgehammer every day, repeating myself about the the pitch and the product, Now, there are some places where it's fun, like here... I get excited because you guys are excited and you understand it. Telling VCs why they should give us money, and they're like, "Hm..." You know... Isn't that New Relic?"\] and I'm just like, "Um, where do I start?" And I'm not dissing New Relic, New Relic is awesome for what it is; they really blazed a trail. But explaining things to people who don't really care I think is what sucks the life out.

**Brian Ketelsen:** Yeah, and that's the best part about finding the VCs that do care... Once you find them, you really appreciate them for who they are.

**Erik St. Martin:** I love VCs for making things happen, but I think I'd probably be a terrible salesperson trying to convince them to give me money. "Why should I give you money?" "Because it's gonna be awesome...?"

**Charity Majors:** Yeah, I know, right? \[laughs\]

**Brian Ketelsen:** Because I said so...

**Charity Majors:** You mean, because it's gonna have high impact and revolutionize something.

**Brian Ketelsen:** Yeah, the buzzwords... They're terrible.

**Charity Majors:** I know.

**Brian Ketelsen:** This blog post is huge. You guys rock! Thanks for putting that together for our show.

**Charity Majors:** Yeah, absolutely. Thanks for having us.

**Erik St. Martin:** Why am I losing the word that everybody uses now...? Disrupt - it's gonna disrupt.

**Charity Majors:** Yes. Oh god, I just twitched involuntarily. \[laughter\]

**Erik St. Martin:** It's gonna disrupt cloud... Cloud as you know it.

**Brian Ketelsen:** The cloud... I love cloud. "Cloud" and "serverless", my two favorite words.

**Erik St. Martin:** Cloud has just been hard for me to connect with, because it's like "How is that any different?" What's the difference between putting something in a data center on servers? Like, "Oh well, it's distributed and backed up and fault-tolerant." That's just good operations, that's not anything new.

**Brian Ketelsen:** No, it's in the cloud! My dad was over here a couple days ago and he's like, "What is the cloud?" and I said, "Somebody else's computer." "Oh! Well, that makes more sense." He totally got that... Yeah, that's just somebody else's computer.

**Charity Majors:** \[laughs\] I had a hard time with dev ops for so long... I was just angry, because people would be like, "I want a dev ops engineer" and I'm like, "That's not a thing. That's like saying you want an agile engineer. It's not a thing!" But I'll just get over it... It doesn't mean anything anymore.

**Erik St. Martin:** Somebody told me of a new thing, it's like "dev sec ops", or something... They're trying to merge security stuff in...

**Charity Majors:** Oh, god... Stop... Stop... Stop... \[laughter\]

**Erik St. Martin:** \[00:31:54.21\] And you have to question, because okay, some amount of collaboration needs to be done, because for a long time development and operations - you tossed it over a wall. You might not have even met the people or ever talked to the people who are going to keep this thing alive in production, just kind of write the code and be like, "Okay, here's some documentation, and go." And security can be the same thing too, where there's not a lot of collaboration in the beginning, just a whole lot of documentation of what you did wrong after. But yeah... Why we need buzzwords for some of these things is beyond me. It's called a team - the team gets together and they collaborate...

**Charity Majors:** I know, right? We have a common goal that we work towards...

**Brian Ketelsen:** Maybe that's one thing that the startup culture has brought, though... The much smaller team where engineers have to be more versed in things like deployment and security. You don't get the luxury of specializing in just writing code.

I remember one of the things that frustrated me about being a corporate developer 20 years ago was you'd have these people that were very good at writing code, but they didn't have the first clue about what happened after they checked that code in. They didn't even understand how the compilers worked, they didn't understand anything about deployment or storage or networking, and that mindset always frustrated me. Now we're at the complete opposite - you can't even have a real job anymore if you don't understand how many IOPS you can get out of an SSD when you're on the PCIe 4x card versus the 16x card. It's crazy. That's real full stack. Thank you, Erik. Full stack isn't Javascript to backend, it's browser all the way down to...

**Charity Majors:** Hardware. Show me your hardware. Yeah. Tell me about your full stack engineer.

**Erik St. Martin:** Full stack is just an excuse. Somebody kind of lead to that... Full stack is kind of like an excuse to just underpay people. That's like your first programming job where they're like "You are the programmer, the system administrator and the IT support guy, and we're gonna pay you McDonald's income for it."

**Charity Majors:** It always reminds me of all douchebag wondering around San Francisco looking for that technical co-founder who will do everything, you know? \[laughter\] They've got the marketing, they've got the design, they've got the blah... They just seem like somebody that will just do it all.

**Erik St. Martin:** So how about you, Carlisia - are you going to any release parties tonight?

**Carlisia Pinto:** Absolutely. The San Diego Go Meetup is having a release party.

**Erik St. Martin:** I kind of wish Brian and I hadn't dropped the ball. A release party would have been fun. \[laughter\]

**Brian Ketelsen:** We're thinking about doing a release barbecue though, just a little bit late. I don't think there's anything wrong with that, is there?

**Erik St. Martin:** It works for me. I love barbecue. So you guys wanna talk about any projects, or anything we've come across this week?

**Carlisia Pinto:** Yeah, let's do it.

**Erik St. Martin:** So I came across one that was actually really interesting called [Pixterm](https://github.com/eliukblau/pixterm), which allows you to do images in just an ANSI terminal, which is really cool. And it's written in Go. The stuff people can do in a terminal is insane. I fight just to get my text to line up where it's supposed to when I'm trying to do a text user interface. And people are like, "Oh yeah, I'm gonna do graphics in my terminal."

**Brian Ketelsen:** Oh, that's awesome. I'm just looking at their readme, that's pretty killer. I can't even get Vim to look good, and they're making all these pretty pictures in the terminal.

**Erik St. Martin:** Like a He-Man...

**Brian Ketelsen:** A He-Man... That's awesome. Very cool.

**Erik St. Martin:** That is He-Man, isn't it?

**Brian Ketelsen:** I think so, yeah.

**Erik St. Martin:** I might be showing my age a little bit, but I think that's He-Man.

**Brian Ketelsen:** We didn't have TVs when I was a kid, so I don't know what you're talking about.

**Erik St. Martin:** They had TVs when you were a kid.

**Brian Ketelsen:** We didn't have a TV when I was a kid.

**Erik St. Martin:** Oh, you didn't have one?

**Brian Ketelsen:** No. For at least ten years my parents were completely against television, so I've missed a lot. Missed a lot of cultural references that I had to go back later and explore. But boy, did I binge on Knight Rider when it finally came time. And Airwolf, oh my god.

**Erik St. Martin:** \[00:36:08.15\] Me and TVs have been tight since I was little. I think I was two... I actually have a dimple one cheek, and that's because when I was two I climbed up on the stand where the TV was to turn it on, and pulled the TV over on my face. No broken bones, no torn muscles... A dimple. If you wanna save some plastic surgery money, pull a TV on your face.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** It's funny, because it's almost unbelievable. People are like, "No..." Yeah. We must have had a TV in my house for most of my childhood, I'd have to guess.

**Carlisia Pinto:** Even I had a TV growing up, Brian... \[laughs\]

**Charity Majors:** I didn't have a TV. My parents would drag one out of the garage every four years for the Olympics, and that was it.

**Brian Ketelsen:** Oh, wow...

**Erik St. Martin:** So you had one, it was just put up, except for special...

**Charity Majors:** My dad wanted to be able to say there was no TV in the house...

**Erik St. Martin:** Interesting.

**Charity Majors:** ...and there wasn't. It was in the garage.

**Erik St. Martin:** Is that more because they wanted -- I'm interested to learn this... Is this more to learn?

**Charity Majors:** They were trying to secede from modern society completely. Electricity was a compromise with them.

**Brian Ketelsen:** That's a pretty important compromise, though...

**Charity Majors:** We were home schooled, no sugar, we grew our own food... It was kind of like women's compound honestly.

**Carlisia Pinto:** That's a whole other show right there... \[laughter\]

**Charity Majors:** That's a whole different story.

**Brian Ketelsen:** Squad goals...

**Charity Majors:** Oh, yeah... \[laughs\]

**Erik St. Martin:** The other thing I actually came across too - one of them I think is a month or two old, and it's right up the alley of our discussion about Honeycomb... On Backtrace's blog, if you wanna know how a debugger actually works, how GDB works internally - really cool two-part series. One where it talks about how a debugger works and how it breaks down the DWARF information inside the binary, and the other one how it does the mapping to Go, and be able to map the goroutines, and stuff. We'll link to those in the show notes... Those are really cool. I ran across the second part, I forgot I had read the first part.

And then another cool thing that was released today, I saw Ron Evans of the Hybrid Group mention that a new [Gobot](https://gobot.io/) version...

**Brian Ketelsen:** Oh yeah, Gobot 1.2. Always gotta shout out to the Gobot gang. They work so hard so that we can have really cool Go projects on our tiny little hardware. It makes me happy, it powers my barbecue.

**Erik St. Martin:** They're a trip... I love those guys. Have you done any Gobot stuff, Charity?

**Charity Majors:** Nope. What's Gobot?

**Erik St. Martin:** Gobot is a series of libraries for interacting with hardware.

**Charity Majors:** Oh, wow...

**Erik St. Martin:** Yeah, so they have stuff to work with the Parrot drones, they have stuff that just talks I²C... I think there's SPI in there too, but yeah... It's ridiculously cool if you wanna play with hardware and not have to write C++ or C.

**Charity Majors:** Great.

**Brian Ketelsen:** It is, it's really awesome. I have a project that controls my barbecue grill, so I can have metrics and control over the heat, all from a web browser, rather than having to brave the floor, the heat, to go outside and play with the barbecue.

**Charity Majors:** Wow...

**Brian Ketelsen:** It's a beautiful thing...

**Charity Majors:** That's deeply impressive.

**Brian Ketelsen:** Written in Go, powered by Gobot. And if I had to do it in something else, it would have been a lot of work, so big love to the Gobot gang.

**Erik St. Martin:** Yeah, to prove that point, I tried to start doing it in C, and it's still sitting on the desk behind me. \[laughter\]

**Brian Ketelsen:** That's because it's in C.

**Erik St. Martin:** It will be finished one day.

**Carlisia Pinto:** I wanted to mention the changes to the Go code of conduct, because I think these things are important; it affects everybody. Did you guys see this?

**Brian Ketelsen:** Yes, I did.

**Carlisia Pinto:** \[00:39:55.23\] So I saw the diff for the changes, and my impression is what they are doing is saying, "We are not going to be enforcers anymore", and they explain why, and it all makes sense. So basically they're going to be sort of like counselors or advisors if a conflict happens in one of the Go official spaces.

What that means to the community is that people who are running communities, meetups or anything like that will have to be more aware or more conscious that they will have to be enforcers. There is nobody else but us to enforce any type of follow up or action that needs to be taken. And hopefully it will never happen, but just in case.

**Brian Ketelsen:** Yeah, I thought it was an interesting change from the previous "We're going to be the police force of the community" versus now just trying to provide guidance for every space. It recognizes that all of the different Go spaces already have some sort of mechanisms to keep their spaces friendly, and the Go team's objective should be to provide guidance and support to them. I like the change a lot.

**Carlisia Pinto:** I think the change makes sense.

**Brian Ketelsen:** It means I won't get yelled at by the Go team anymore, which is a good thing.

**Erik St. Martin:** Alright. Let's give a shoutout to our second sponsor for today, which is Compose.

**Break:** \[00:41:22.10\]

**Erik St. Martin:** Alright, we are back. We were going through what's interesting and new in the Go world. Anybody have anything else, or do you guys wanna go on to \#FreeSoftwareFriday?

**Charity Majors:** Graceful shutdowns in 1.8...?

**Erik St. Martin:** Yes...

**Brian Ketelsen:** This is big.

**Charity Majors:** Did anyone try them?

**Brian Ketelsen:** Yeah, it's awesome. I've been running 1.8 in production for two months now.

**Charity Majors:** Oh my god, oh my god... I've spent so much time and energy on this, time after time, at Parse and Honeycomb, and it never really worked... \[laughs\] That's exciting.

**Erik St. Martin:** Yeah, it's something almost everybody has to write from scratch if you run an HTTP server.

**Charity Majors:** Yes. We used \[unintelligible 00:43:52.25\] he wrote so many great libraries for Go while we were at Facebook... Faster defer speeds... And Christine is really excited about sort.slice bang-bang. What is that, in 1.8?

**Erik St. Martin:** \[00:44:11.02\] Yeah, I'm trying to remember...

**Brian Ketelsen:** I don't know that one.

**Erik St. Martin:** This is where you can pass in a less function.

**Brian Ketelsen:** Oh, that's cool.

**Erik St. Martin:** Yeah, that's what it is. Some other cool things - the HTTP library can support taking a context now, so you can cancel HTTP requests as part of a context. One of the other cool things I was excited about was the mutex contention profiling. Up until now you couldn't actually see which goroutines and things were contending for a particular mutex, and then there's like a whole series of other stuff... I'm trying to remember what all was in there, but those were some of the fun ones I saw.

**Brian Ketelsen:** It's a big release, it really is. I'm excited about this one. Oh, it must be time to end the show, because Charity made it in the Slack. \[laughter\]

**Charity Majors:** Yeah...

**Brian Ketelsen:** Awesome. So while we were talking about Airwolf and Knight Rider, the Go team released 1.8 officially. I'm really honored that they chose our live podcast to do that, so thank you Go team for honoring us in this way... \[laughter\] So fire up your downloaders and go out to blog.golang.org and read the 1.8 release notes and install. I've already got it installed on all of my local machines in the last five minutes... The power of Bash scripting. So that's big news. Go get some Go 1.8. Put it in production. Make yourself happy. Garbage collection pauses are BIG changes in Go 1.8. I don't know if you guys have seen some of the really awesome pictures on Twitter of people who were trying Canary 1.8 releases, and some of the garbage collection changes are so dramatic - it's awesome. I love how we can have Go releases that make the language so much faster every time, and we don't really lose anything. This makes me happy.

**Erik St. Martin:** Yeah, that's what I always love... You just need to recompile it.

**Brian Ketelsen:** Context everywhere - context in the database SQL package now... That's big. We can have timeouts and SQL calls...

**Erik St. Martin:** I'm trying to remember what some of the other stuff is... We'll link in the show notes to the release notes that will go through all the stuff. They usually highlight some of the bigger stuff, and then they'll give the long form; you know, bugs fixed, and things like that in the individual libraries. If you haven't played with it, certainly do, and shame on you, because you're supposed to help beta testers before it's released.

**Carlisia Pinto:** Francesc Campoy has a great video. I think he did it at a Meetup; it's the recording of his talk that he did, and he goes over all the new things in 1.8, and it's pretty awesome. I learned a few things; his was a lot more clear.

**Erik St. Martin:** Yeah, and Cory LaNou just linked in the GoTimeFM channel... Usually for all of the releases, [Dave Cheney](https://twitter.com/davecheney) puts together a slide deck introducing the changes in the version, in this particular case 1.8, so that people can host their own release parties and use that. Huge shoutout to Dave for doing that; he invested a ton of time in doing that stuff. It's too late now, because by the time this episode airs all the parties will have happened, but if you wanna run one late like Brian and I, you can use this slide deck. Or if you just wanna see what was part of it, that slide deck is available online, too.

**Brian Ketelsen:** Yeah, huge props to Dave for putting that together.

**Erik St. Martin:** Anybody wanna do \#FreeSoftwareFriday?

**Brian Ketelsen:** I do, I do, I do! Was that too much?

**Erik St. Martin:** Nobody else seems convinced.

**Brian Ketelsen:** I'll back off, sorry.

**Carlisia Pinto:** I do, too. Go, Brian! \[laughter\]

**Brian Ketelsen:** \[00:47:50.21\] My \#FreeSoftwareFriday shoutout is to the [Eclipse Che](https://www.eclipse.org/che/) project. If you haven't yet seen it, it's a really awesome web-powered IDE with terminal; all of that sounds kind of boring (who wants to write their stuff in the cloud?) but from my perspective, teaching Go, it allows me to use a single Docker container to give each of my students a fully operational Go web IDE and terminal that's self-contained and won't damage my servers, but allows them to have a complete Go environment with the source code for the class in it. One Docker container + Eclipse Che and everybody gets to write Go code without having to worry about installing things, so I really love Eclipse Che today. It makes me happy. Thanks, Eclipse.

**Erik St. Martin:** Challenge accepted. Now I kind of wanna find a vulnerability in Eclipse Che. \[laughter\] Just because...

**Brian Ketelsen:** Alright, you go for that.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Pinto:** Well, I saw Brian's shoutout, and I remembered that I wanted to give a shoutout to VS Code editor, because I've been using it and I'm finding it really, really neat. It's got some kinks, but I think it could become my main editor.

**Brian Ketelsen:** It's so funny that you mentioned that, because I've probably been spending half of my time in Visual Studio Code this last week or two. The latest updates have been really sharp; it's the fastest GUI for editing that I've ever used. It's really sharp.

**Carlisia Pinto:** It's really sharp, and it's fast.

**Brian Ketelsen:** I don't hate it.

**Carlisia Pinto:** Yeah. It's got a Vim plugin - I'm sure it's got an Emacs plugin, as well... It's very neat to be able to just navigate through the definitions for each method so easily. I mean, you can do that with the other editors as well, but it's just really cool.

**Brian Ketelsen:** Their support is solid. I definitely think that they've done a great job, and I know it's Luke Hoban that's driven most of the Go integration, but the whole Microsoft team has done a great job on that editor. I like it a lot.

**Erik St. Martin:** How about you, Charity? What's your editor of choice?

**Charity Majors:** I'm Vim. I use Vim for life.

**Erik St. Martin:** Yeah, same. I converted Brian, but now he seems to be converting away...

**Brian Ketelsen:** I'm still half Vim.

**Charity Majors:** It so happens to those fickle... If you can convert them one way, they can probably be converted another way.

**Erik St. Martin:** Brian also changes operating systems about once a week, too.

**Charity Majors:** Wow, that's a whole new level.

**Brian Ketelsen:** God, if you could see my desk... I have four computers here - two Linux, one Windows and one Mac, and it's beyond ridiculous. But you know, when you teach, you have to be able to teach all the people, not just the ones that love the same operating system you do.

**Erik St. Martin:** Well played.

**Brian Ketelsen:** Thank you.

**Erik St. Martin:** So we may be catching you off-guard, Charity, but every show we tend to close the show out just kind of recognizing projects and maintainers that make our lives easier. It does not have to be written in Go. If there's a person or project or somebody that you wanna give a shoutout to...?

**Charity Majors:** For sure. I have one for me and for Christine. For me it's Naitik Shah at facebook He's amazing. His dependency injection library made Go possible for our rewrite. He's amazing. He's one of the best engineers I've ever worked with, and he's one of those rare senior engineers who gives code reviews that are so annoying, that lift up everyone around him and just force them to be better.

Anything that he's written... His giant library stuff over at the Facebook Go - it's all Naitik, and his dependency injection stuff is just fabulous. Christine also wanted to mention Matt Silverlock for the content around Go to drive web applications, to have a common voice between various frameworks like the Goji, Gorilla etc.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** \[00:51:56.26\] I'm trying to remember what library it was that came out of Facebook Go that we were using all the time. I know there was Grace, which was for the graceful restarting of the service, but I feel like there was another library I used to use.

**Brian Ketelsen:** There was, but I swear it was from Parse, though... It wasn't from Facebook.

**Charity Majors:** Yeah, but all of the Parse stuff was Facebook Go.

**Brian Ketelsen:** Oh... What did we use? There was something that we used, I just don't remember what it was and I don't have that source code anymore, because once you leave you can't keep that stuff.

**Erik St. Martin:** At least you're not supposed to keep that stuff, and if you did keep that stuff, you wouldn't admit to it.

**Brian Ketelsen:** No, I would be violating my termination agreement. That would be bad.

**Erik St. Martin:** My \#FreeSoftwareFriday for today is by a company called JetStack. It's called [Kube-Lego](https://github.com/jetstack/kube-lego). If you're familiar with Kubernetes, there's a concept of what they call an Ingress controller, which basically controls outbound traffic that's outside of the cluster inward. Basically, it creates a hook where it can automatically get TLS certifications through Let's Encrypt for you. You basically just start up your service and tell it that it's going to be exposed, and that "Yes, please give me a TLS certificate" and it does all the magic.

**Brian Ketelsen:** I love the "Yes, please give me a TLS certificate." The days of buying certificates are just so old.

**Erik St. Martin:** And that's the beauty of it, right? The spec that you submit to Kubernetes just has an annotation on there that says, "ACME TLS - true".

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** It sees it, and it goes out and fetches you a certificate.

**Charity Majors:** But surely the profit motive is the best way to manage security...

**Erik St. Martin:** What's that? Profit? \[laughter\]

**Brian Ketelsen:** Right...

**Erik St. Martin:** Yeah, I mean... How can you possibly be secure without a $30,000 vendor product ,I mean. It's just no way?

**Charity Majors:** Thank you.

**Erik St. Martin:** There's just no way. Alright, did anybody else have any shoutouts? Or we close out the show... Going once, going twice, and done. Thanks for being on the show everybody, especially a huge thank you to Charity for coming on. We'll have to try and get Christine on too another time, or add more capacity for people on the show.

**Brian Ketelsen:** Get more microphones...

**Erik St. Martin:** Yeah, stack up more Mac minis in Adam's office.

**Brian Ketelsen:** We gotta do a show entirely on Adam's setup and his little Mac minis... I think it's kind of crazy.

**Erik St. Martin:** Yeah, so to explain what the limitation is - the way this actually works is all of us are on Skype and we are all called by different Skype accounts that are all running on separate Mac minis that are all mixed together in a mixing port that Adam Stacoviak of Changelog does. So he's hiding behind the curtains until we say goodbye, and then he joins...

**Brian Ketelsen:** Nothing to see here, move along...

**Erik St. Martin:** So huge thank you to all of our listeners, especially the people listening live right now. Huge shoutout to our sponsors for today's episode - Toptal and Compose; without them, we wouldn't have a show. Definitely share the show with fellow Go programmers. We are GoTime.fm online, @GoTimeFM on Twitter, and GitHub.com/GoTimeFM/ping if you wanna be on the show, have suggestions for guests or questions for guests that we've had. With that, bye everybody! We'll see you next week!

**Carlisia Pinto:** Bye!

**Brian Ketelsen:** Thanks for coming on, Charity. We really appreciate it!

**Charity Majors:** My pleasure! Bye-bye!
