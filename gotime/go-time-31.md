**Erik St. Martin:** Hello everybody and welcome back for another episode of GoTime. Today's episode is number 31. Our sponsors for today are StackImpact and Backtrace.

Today on the show we have myself, Erik St. Martin, we also have Carlisia Pinto...

**Carlisia Pinto:** Glad to be here.

**Erik St. Martin:** And Brian Ketelsen.

**Brian Ketelsen:** Hello!

**Erik St. Martin:** Brian and I have talked about Kafka and our love for it a number of times through a couple of episodes, and I think we've even mentioned the project, so today's special guest is Travis Jeffery, here to talk to us about Jocko, which is a Go implementation of Kafka... Mixing two worlds we love!

**Brian Ketelsen:** I know, it's too great taste to taste together... When you get your peanut butter in my Kafka, I couldn't be happier.

**Erik St. Martin:** So you wanna talk to us a little bit about the project and your motivation behind it?

**Travis Jeffery:** Yeah, sure.

**Erik St. Martin:** Well, first tell everybody a little bit about yourself, that might be helpful, too.

**Brian Ketelsen:** Yeah, introductions are always good.

**Travis Jeffery:** Alright... This question's always a little funny. I grew up on a farm about two hours North of Toronto, Ontario, Canada, middle of nowhere. My parents were both entrepreneurs; that left me with a lot of time to watch movies, play video games, read books. They put me in a daycare called Teddy Bear daycare, and I've never slept as much as a normal person, so what the people that were on the daycare, what they'd do is they'd stick me on a computer, which was like a Mac 3, and that's what I'd do while the other kids were sleeping.

When I was around 12 I picked up a book - I think it was The Pro Book, and the second book was a C primer book, and then I got "Hacking: The Art of Exploitation", because I thought I was gonna be a hacker.

**Erik St. Martin:** I think I have the original version of that book, too.

**Brian Ketelsen:** Signed...

**Travis Jeffery:** Yeah, and a little bit after that DHH put up the How To Build A Blog In 10 Or 15 Minutes, and I was like "Holy crap, that's crazy", and that's how I got started making web software.

Just before university, I started contributing to open source stuff; I contributed to Emacs and Vim and Django early on, and then Rail. Then between the first and second year of university, I started getting recruited by the big bad companies like Google. Around this time, when I first went o university I thought I was gonna be a math professor. Then I started warming up to the idea that I would be a programmer because I was spending all my time programming on open source.

Once I started getting those recruiting mails and I asked one of them, "If I don't finish my degree, can you get me into the U.S.?" and they were like, "Yes", and then I was like, "Okay, well I'm done." So I dropped out and started a startup with some friends and we ended up selling out to Shopify.

After that I went and worked at Basecamp (37Signals) and that was pretty cool, to end up doing that. Then I wanted to do another startup again, so I talked to one of my friends, \[unintelligible 00:03:49.24\] and I asked him where he was working, and he was telling me about this company Segment IO, which was like an analytics data startup.

\[\\00:03:59.20\\\] I ended up joining there, and that's how I was introduced to Go, because originally Segment IO was built on NodeJS, and we started to scale up and it got to the point where Node's event loop would be blocked all the time processing JSON, and so that's how I started to introduce Go, and ultimately we ended up having dozens of microservices built on Go.

Today I am head of architecture at another analytics company called Taplytics So that's what I'm doing now. In the future I would like to bootstrap my own company, maybe write some scripts... I wanna make movies one day, I think that would be cool, and do lots of writing. So that's what I'm about.

**Erik St. Martin:** Nice. So what was the primary motivation for doing Kafka in Go?

**Travis Jeffery:** So I've been using Kafka for a couple years now, and it's pretty awesome, I love Kafka a lot. There are some annoying things... For one thing, it comes with some baggage, like the JVM and Zookeeper. You know, they're not the nicest things, as you have to maintain Zookeeper and all that stuff... And another thing was that I don't particularly like how Kafka does configuration. That's one thing I'd like to improve on it.

For instance, you can configure a topic to have a certain amount of data on a broker, how much data it will retain, and let's say you then add another topic, and that topic gets assigned to that broker. It can then go over the amount of data that you wanna \[unintelligible 00:05:32.19\] Basically, what you wanna do is set a percentage, for example... Like, say that 10% of your disk will go to a certain topic, which Kafka doesn't support, so that's one thing I'd like to do.
But basically, the whole idea behind Jocko was writing a Kafka that would be really easy to set up... So I would distribute a single binary, I wouldn't depend on Zookeeper, I would maintain protocol compatibility so that people that use Kafka now, they can just drop Jocko in and it would work the same, and it would be compatible with Kafka clients and everything. That was basically the idea.

**Erik St. Martin:** I wonder whether we should roll back a little bit too and talk a bit about what Kafka is and what it's useful for, too.

**Travis Jeffery:** Yeah, so Kafka is a replicated, distributed commit log service. Basically it keeps a sequence of things and then those things can be consumed by workers. You can use it as a message queue or any type of thing that you would want to stream, that's basically what it's used for. For instance, at Taplytics we're working with analytics events; those come in to our API and then those go on to Kafka, and then workers read those events, process them and then do something else with them.

**Brian Ketelsen:** The thing that I think is the most magical about Kafka is that you can use it as your system of record, and I think that's the power of Kafka for me - the idea that this crazy thing that looks and acts a little bit like Git, and the queue and the database, all at the same time can be your system of record for all of your other applications, and that's the way I like using Kafka the most - pushing all changes to Kafka and then having other systems read off of Kafka for replication of those changes.

**Erik St. Martin:** Yeah, I mean it's really great for stuff like that... Brian and I worked together on some projects where... Depending on your use case, sometimes you want the same data in multiple data stores, so Kafka is kind of like a really great of being a system of record and then having all those data stores populate themselves so that you can access them in different use cases.

**Travis Jeffery:** Yeah, you can think of it as like a data hub for all your data, basically. At Segment, a lot of times what we would do is that basically something would go into Kafka, a worker would pull that off, do some processing on it, and then put it back into another Kafka topic, and then so on and so forth, until finally it went out to a database, or something like that.

**Brian Ketelsen:** \[\\00:08:04.17\\\] Yep, very, very common pattern.

**Erik St. Martin:** The nice thing for that streaming data workflow too is that it's great for services to come online and offline if a service crashes or you take it down for upgrades and stuff like that... The data is still being pumped into Kafka, the queue just backs up a little bit until the consumer comes back online, which is awesome.

**Travis Jeffery:** Yes, exactly. For scaling up it's awesome, because basically things would just get queued up, and then you can just add more workers to pull them off quicker.

Another awesome thing is basically managing your dependency graph, so rather than having services that communicate to each other directly, you can just have your workers, which don't know their relationship to each other - they just read from Kafka and then put something else back on to Kafka, so they have no idea about each other... That's another awesome thing. You can just plugin workers as much as you want.

**Erik St. Martin:** Yeah, it's basically kind of like using goroutines and channels. For instance, you don't really care about the things that are consuming stuff from your channel, just that you're pushing data to a channel that you're responsible for producing data on, or you're receiving it and doing some sort of work on it. You don't really have to be aware of all the other components in the system.

**Travis Jeffery:** Yeah, and the same topic can also be consumed by various consumer groups. Let's say one group reads from it and they make that data immediately available. Maybe it will put it into a cache or something, and then another consumer can take that data and it will do something to it to make it available for long-term storage.

**Erik St. Martin:** So where are you at in the development of it? How is the performing comparison? Is it feature-complete? Is it just you working on this?

**Travis Jeffery:** Yeah, pretty much just me at this point. I've gotten a few commits from someone else... I'm nearly feature-complete; the thing I've been working on right now is replication, which I think I've got working... I basically have to do a little bit more testing from there, and then the next thing is consumer group support. But I'm very close to being feature-complete, yeah.

I haven't started on the performance testing yet, so we'll see how that goes. It should be pretty similar, because basically the limitation is gonna be your disk, because it uses the same sort of algorithms and the same design.

One thing that Go is missing from Java is called zero-copy networking. That's basically where the sockets will be connected together. The socket from the network will be connected to the disk socket, and it will bypass the kernel. That's one thing that Java has on Go. Some people have started implementing some libraries to have that, but there isn't something that's ready yet, I don't think so.

**Erik St. Martin:** Oh, interesting. And all of those come from just running up against it; most code people will write don't need stuff like that, so as it's come up against.

**Brian Ketelsen:** Didn't the protocol change recently not to require Zookeeper? Won't that make your life a little bit easier?

**Travis Jeffery:** Yeah, exactly, that's why I can even do this, basically, as I won't need it. All the consumers, they will be built into Kafka, it will be in the data that Kafka uses consensus to spread around the brokers. The state will be stored on the brokers themselves.

**Brian Ketelsen:** That's awesome. I was reading your blog post on how you implemented the storage layer and found it fascinating; that's really cool. Can you tell us a little bit more about the internals of storage and how you mapped it from Java to Go?

**Travis Jeffery:** Basically, the way I went about it is I cloned the Kafka repo and then I got the big picture view of the pieces. So I'd look at the directories and I'd look at the files, and then I dug into those... They have like a log directory. I looked at those files in there and I figured out how they worked and I really liked their implementations. I also bought their book - I think it's called "Kafka: The Definitive Guide", so I read that.

\[\\00:12:03.02\\\] They kind of described in a high level how it worked, and then from there I just went in and implemented it. So I basically just learned enough Scala as I needed to understand what was going on, and then just did it.

**Brian Ketelsen:** Nice. So you're not using any intermediate storage mechanism like BoltDB or LevelDB - you're using all stuff that you wrote yourself?

**Travis Jeffery:** Yeah, so for the storage internals... Yeah, because it would just be way to slow to use BoltDB.

**Erik St. Martin:** Now, Kafka does a log-structured merge tree, right? And assets tables like Cassandra does? Or is the underlying storage layer different? I didn't read the same post Brian did.

**Travis Jeffery:** Kafka does a lot of work on the clients, and this is how they get a lot of their performance. Basically, the Kafka clients will encode the data according to Kafka's protocol, and then that same format basically goes directly to disk on the Kafka server. That's one way it gets all this performance - because the server doesn't have to do much in terms of the data, it just puts that to the disk. What Kafka does is that that data goes to a log file, and basically they just append it to the log file.

They maintain an offset -- same thing with Jocko... I maintain an offset and the log where the next bytes will go, and then the offsets for those logs are mapped by an index file, and the index file basically maps log offsets to the byte position in the log file. So when Kafka goes to look up a log entry, it will take the offset and then just do a binary search in the index, which is a memory map file, and then from there it knows the position in the log file. That's how it does it.

**Brian Ketelsen:** Kind of impressive how it's architected to be that fast.

**Travis Jeffery:** True, that's another reason why I wanted to do this project... Because I knew that was a big part of what made Kafka special, and I wanted to understand it to the point where I could create it. So that was another reason why I made Jocko.

**Brian Ketelsen:** That blog post is really good, we'll put the link to it in the show notes, for the storage engine. I really enjoyed reading it.

**Erik St. Martin:** So in the development of this, have you run up against anything aside from the kernel-level stuff you were talking about, or has it mostly been straightforward to implement this in Go?

**Travis Jeffery:** It hasn't been too bad... One of my favorite things about Go is that bytes are everywhere. You have the io.Writer and the io.Reader... So it's been pretty awesome actually, because again, with Kafka and how it networks by basically sending you the data in byte form and you're just putting that to disk - it matches up really well.

There hasn't been too much trouble... And again, another nice thing is that the clients have to do so much work, so that also helps in terms of the work they have to do when you're implementing the Kafka. So most of the work has been around doing consensus and service discovery.

**Erik St. Martin:** Right, right.

**Brian Ketelsen:** Now, I noticed you used Hashicorp's Raft and Serf for your discovery and consensus... Did you do any benchmarks on the different Raft protocols before you chose that one? Is there a particular reason you chose it, or you just pulled one out of a hat?

**Travis Jeffery:** I looked at that one and I looked at the Etcd as well. I felt like Hashicorp's just fit my brain a little bit better. It seemed a little bit simpler. The other thing is that I just like how it's in its own repo, too. Because when I wanna look up issues for the project, I just wanna see the issues for Raft.

\[\\00:15:55.16\\\] With Etcd, they have their Raft library inside this huge -- that's just one small part of their huge project and huge repo on GitHub, so it's difficult to find issues for Raft, that are Raft-specific, so that's another thing that was annoying for me. So yeah, it was mostly that it fit my brain.

The other nice thing was that I read Consul and Nomad - I read their source code to see how they did it, so it was nice to see the same libraries. So that was another thing, it was useful to see how they did it.

**Brian Ketelsen:** That's nice.

**Travis Jeffery:** Yeah, Consul and Nomad - they were really useful because they both used Serf and Raft in their libraries that they made, so they were good examples.

**Erik St. Martin:** Alright, so I think it's about time for our first sponsored break.

**Break:** \[\\00:16:43.10\\\]

**Erik St. Martin:** We are back, we are talking to Travis Jeffery about Jocko, and let's start talking about some interesting Go projects and news. Anybody got anything interesting they've come across this week?

**Brian Ketelsen:** It's been a big week, I'm not gonna lie. It's been a big week.

**Erik St. Martin:** How big?

**Brian Ketelsen:** Epic, huge. It's YUUGE. It's bigger than my tiny orange hands, that's how big it is. \[laughter\] It's YUUGE. So today Google released an app called Shenzhen Go, and it's a way to graphically wire up goroutines and channels so you can design the flow of your concurrency and your data flow graphically, and then it will generate Go code that implements your goroutines and channels for you.

It's very alpha level, and I think it doesn't do two-way synchronization, so you can only update from the graph to code and not reverse direction, but it looks really promising. I haven't tried it yet, but it's pretty impressive, the ability to generate Go code from something like a vis-graph. It's cool.

**Erik St. Martin:** I haven't played with it, but this is the... The Go Shenzhen thing, right?

**Brian Ketelsen:** Yup.

**Erik St. Martin:** Yeah, I haven't played with that yet.

**Travis Jeffery:** Yeah, that's pretty cool, it looks pretty awesome. It's actually funny because I just found another project that's called Go-Call-Vis - it lets you visualize your call graph of your Go program using dot format.

**Brian Ketelsen:** I saw that yesterday.

**Travis Jeffery:** Yeah, so that's kind of funny that they came out so close together. But that looks kind of cool, too. It gives you a visual overview of your function calls in your program, and the relations and stuff like that.

**Erik St. Martin:** See, there's too many new cool projects that come out, and not enough time to even discover them, much less play with them. One of them that I ran across and I saw it was actually mentioned in the Go Weekly Newsletter too - kind of stealing my thunder - is called Subgraph, and it's supposed to be a new operating system that has sandboxing and security controls in place.

Somewhere I saw that they were using a whole bunch of Go, and I know that on their site they mention they use it for its memory safety, and I wanted to look into that more and see specifically what components they're using it for. I'd like to actually reach out to them and see if whether this is kind of different applications or the core components are implemented in it. But interesting enough that there's an operating system trying to use Go.

**Brian Ketelsen:** Right, we've gotta get them on the show.

**Erik St. Martin:** Yeah, we just gotta remember to put them on the list.

**Brian Ketelsen:** The list is getting long.

**Erik St. Martin:** \[\\00:20:14.01\\\] During the show we're like, "We should totally get that person on the show", and then we forget. How about you, Carlisia? Did you run across anything this week that you found interesting?

**Carlisia Pinto:** Yes, I was talking to my co-worker Joshua and asking him if he had used any queuing system, because from the Rails world there are two very well-established libraries -- well, I should say Gem... And I haven't used anything like that in Go yet, but I might have to. He mentioned this library that Uber apparently came out with last month - or at least they open sourced it last month, I think - called Cherami. It would be actually interesting to know what the similarities are between these libraries and Jocko, what one does that the other doesn't, but maybe we will another time.

**Brian Ketelsen:** I saw Cherami and I haven't brought it up on the show yet because their documentation is empty at this point. Although they had a big blog post announcing it on 6th December, they haven't really published any docs yet, and it just seems unfair to tease people with something that exciting without having any useful documentation for it, so... It does look interesting, but in my mind, after reading the blog post and looking at the code, it looks a lot closer to NSQ than anything Kafka-related, and I'm kind of surprised that they wrote it, because it does look very similar to NSQ. I'm wondering if we shouldn't get somebody from Uber on the phone and find out why they chose to write another one, and what about NSQ didn't work for them.

**Erik St. Martin:** It's interesting though, because from a high level, on the page that Carlisia linked, it does look a lot like Kafka. You have producers producing to a topic - they call it a queue here, but then there's consumer groups to consume from it. So from a really high level, it does have a very Kafka-ish workflow.

**Brian Ketelsen:** Yeah, and they do have durability with RocksDB underneath, so maybe that's the law of the biggest differentiator.

**Erik St. Martin:** I love Rocks!

**Brian Ketelsen:** Yeah, I know. It's so fast! That might be the biggest differentiator with NSQ, because NSQ doesn't have any durability, if I remember right.

**Travis Jeffery:** Another thing about NSQ, we used at NSQ at Segment IO, and one the things that bit us is ordering; NSQ doesn't have any ordering guarantees, whereas Kafka does. That kind of bit us at Segment IO when we were doing a bench traffic, where for instance let's say you have events and they have a session, and you need the session to be created before subsequent events are associated with that session. That's where Kafka solves that, because it actually has ordering.

**Brian Ketelsen:** Yeah, it makes good sense.

**Erik St. Martin:** Now I'm wondering whether it's good or bad... \[laughter\] Kyle in the GoTimeFM channel just said if we're gonna talk about NSQ, he's got a lot to say.

**Brian Ketelsen:** Yeah, we could have a whole show on NSQ. I love me some NSQ. I'll have to check out Cherami; that looks like it might be interesting, but we need to find out when they're gonna get some docs up.

I found another interesting project called Ponzu, and this is something that I've been threatening to write myself forever but never really got around to needing it badly enough to do it. It's a CMS (I think WordPress) but with only an API. It's built for fat clients that need to access content, and they just do it over an API layer instead of something like WordPress.
I've had several occasions where I've needed something similar to that, and I'm excited that somebody wrote it. It looks interesting. That's at Ponzu-cms/ponzu on GitHub. It looks exciting.

**Erik St. Martin:** \[\\00:23:57.23\\\] I love the logo. One of the coolest things is not just the software people create, but the logos. \[laughter\]

**Brian Ketelsen:** Since this is radio, this is a gopher with a sushi plate in his hand, and a Japanese headband. Pretty impressive.

**Erik St. Martin:** Nice. So I've got another one too that I thought was really cool, and I meant to play with this over the weekend and never got around to it... Ebiten - it's basically like a 2D game library, and building like old school games.

**Brian Ketelsen:** Like 8-bit kind of thing?

**Erik St. Martin:** Yeah. I'll drop it in the channel.

**Brian Ketelsen:** That sounds kind of fun.

**Erik St. Martin:** With all my free time...

**Brian Ketelsen:** Right. One day...

**Erik St. Martin:** It's one of those things - kind of like Travis was saying with the getting started, right? Most of us, if we started as a teenager, there were two things you wanted to do: you wanted to be a hacker and you wanted to make video games. That was most of us... So there's still a part of me who's like, "I wanna build a video game." And I definitely still wanna be a hacker.

**Brian Ketelsen:** One day...

**Travis Jeffery:** I don't know if I've ever actually said this in public, but Boris from GoldenEye was very influential when I was young.

**Brian Ketelsen:** Nice!

**Travis Jeffery:** I'm invincible, you know...

**Brian Ketelsen:** Yup, that's awesome!

**Erik St. Martin:** Alright, so a bigger topic - did anybody see Russ Cox's Go Resolutions for 2017?

**Brian Ketelsen:** Yeah, and you know what that smells like to me? I read the whole thing, and I walked away with one phrase at the end of that - Go 2.0.

**Erik St. Martin:** I don't know whether it's 2.0. Do you think...?

**Brian Ketelsen:** Yeah, I think so. There's some stuff in there... If you read through it well enough, there's some things in there that are breaking changes, and I think there's a Go 2 in our future somewhere. Call me crazy...

**Erik St. Martin:** I think the package management probably wouldn't need that. There's some of those things that could be thrown in, like the automatic vetting, and even the error stuff, it wouldn't have to be a core stuff; that could probably be augmented with standard library stuff. And I liked some of the stuff where they were talking about best practices and example codebases, because that's usually where people have a lot of trouble starting out. They're like, "Great, I understand the syntax, but where do I put my files? How do I organize this, how do I structure it? What's a typical web app look like?"

**Brian Ketelsen:** Well, did you read between the lines in the errors and best practices part, where it almost sounded exactly to me like they were getting more serious about adopting Dave Cheney's package errors, and that would make me just ecstatic, because that is so awesome.

**Travis Jeffery:** Oh, man... That's awesome.

**Brian Ketelsen:** We need to start a -- what's that thing on whitehouse.gov where you can create a petition? We need to do that. \[laughter\]

**Erik St. Martin:** Carlisia, did you get a chance to look through any of that this week? Or I guess it was only a couple days ago, yesterday.

**Carlisia Pinto:** No... I saw the post on Twitter but I didn't read through it. I'll read through it later today.

**Erik St. Martin:** I love that he drops the generic \[unintelligible 00:27:08.04\] "It's the last one."

**Travis Jeffery:** Yeah, it's funny that that's the last thing. If anything warrants a Go 2.0, that's gonna be it probably, right?

**Brian Ketelsen:** Mic drop.

**Erik St. Martin:** I like the fact that long form he sat down and put out all his ideas. Maybe some of them are lofty and are harder to slide into the Go 1 promise, but at least to have somebody who's steering the direction of the language to sit down and write that, "Yes, these things aren't being ignored. They're kind of like at the top of our head and they're things we wanna fix." Some of them, like package management, has been coming a long way, and it'd be interesting to get somebody from the team there to talk about where they're at with that.

**Brian Ketelsen:** \[\\00:28:00.12\\\] Yeah, package management, it just causes me bitterness. Every time I think I have one of the tools understood, I get bitten and it just makes me cranky.

**Erik St. Martin:** I'm in the same boat... It's like, "Alright, I've kind of accepted where this is", and then I'm like, "Why are they not syncing? Why are my packages not up to date? Why can't I just go update these packages? I thought this worked!"

**Brian Ketelsen:** Yup, making me a little bit crazy, not gonna lie.

**Erik St. Martin:** I'm compiling against Kubernetes - why can't there be a single command to get me the newest Kubernetes libraries so that I can rebuild? I haven't tried Glide though, I will say that. I don't know what people's experiences are with Glide, but that is one that I have not tried yet.

**Brian Ketelsen:** Glide's the one I'm using right now and that's the one that makes me wanna throw things. And maybe it's because I've been using all the others and I've never used Glide until now, but none of them make me happy.

**Erik St. Martin:** Quick show of hands, I wanna know --

**Brian Ketelsen:** This is radio still, remember...

**Erik St. Martin:** I'm curious, just a mini poll here... What is the Go vendoring tool that each person here uses the most, probably? Because I know that depending on the project we're forced to use others, but...

**Travis Jeffery:** I'm currently using Go Vendor...

**Erik St. Martin:** That's what I'm using, as well... And that's mostly because that's what the team had chosen before I was ever there.

**Brian Ketelsen:** Yeah, that's my favorite, too.

**Erik St. Martin:** How about you, Carlisia? What are you guys using for vendoring?

**Carlisia Pinto:** I think it's Go vendor that we are using at Fastly. I mean, at least for my project.

**Erik St. Martin:** Look at that... Four out of four. That's not bad... I was expecting much different results.

**Brian Ketelsen:** We got consensus right away. It's a little Kafka joke, sorry...

**Travis Jeffery:** Yeah, a little Raft in there?

**Carlisia Pinto:** Oh, sorry, it's godeps.

**Brian Ketelsen:** Oh, godeps... You're old school!

**Travis Jeffery:** That's what I used before Go Vendor. Honestly, I don't feel like I really... I don't know -- what did I even really get about switching to Go Vendor? I don't know... It did the job.

**Erik St. Martin:** Yeah... I mean, I used godeps early on, so I don't know what features are there now, but one of the things I like about Go Vendor is some of the little tags that you can use, like "Tell me which things are missing", "Tell me which things are in my normal GOPATH but not in my vendor directory" by just doing a golist plus external, or things like that. So there was some of that, I guess, but I'm still eagerly seeking something better... Always looking for greener pastures. So yeah, a lot of good stuff here.

Somebody in the channel also mentioned one of Brian's favorite people in the world, the Go versus Rust debate \[unintelligible 00:30:39.10\]

**Brian Ketelsen:** Oh, don't get me started me started on ESR. So I've read his blog post, first of all, and it was actually a very well thought out blog post, but I still can't stand the man. Do we have to have this discussion?

**Carlisia Pinto:** What are you talking about?

**Brian Ketelsen:** So ESR - Erik S. Raymond is a -- what's the word? A relatively venerated person in the Linux world. He's a long-time kernel maintainer and he's just been around Linux a long time. He considers himself to be a role model for programmers. I consider him to be somebody who needs to go away. Most recently he wrote a blog post and basically suggested that if you get sexually harassed at a conference, the only way you should be able to be able to bring a claim against somebody for harassment is if you have a pretty solid GitHub repo. So your ability to defend yourself or to make an accusation against someone else at a conference is based solely on the fact that you've got some good street cred because you write good code.

**Carlisia Pinto:** That doesn't even make sense.

**Brian Ketelsen:** \[\\00:31:53.22\\\] It has absolutely nothing to do with the fact that they may or may not have been sexual assault. It infuriated me, it really infuriated me. The Go article was pretty well written; he did a good job of elucidating the pluses and minuses of Go versus Rust for their use case, and it was factual and nicely written.

**Erik St. Martin:** It was actually interesting to see him argue with some Rust people back and forth in the comments. So the takeaway really from that was - we kind of digressed there a bit on some of the other posts that were your typical Hacker News posts... But this particular article, the thing that was interesting is just that somebody who's kind of an old-school C person, kernel maintainer and stuff, he talks about how within a couple of days he picked up Go and felt proficient with it, and all that stuff, and when he tried to do similar things with Rust, he felt just a lot of pain trying to figure out how to do basic, basic things. Kind of interesting.

I like seeing different people's perspectives, because Go came out and it was really supposed to be targeting systems-level people: C, C++ and all of us dynamic people just kind of swarmed. We were like, "Sweet! Goodbye Ruby!" A lot of people have been coming in from that world, so I'd like having that take from somebody who's been in the C Assembly type world for a very long time.

**Brian Ketelsen:** I just dropped the link to the article that infuriated me in our Slack channel. Anger. Much, much anger.

**Carlisia Pinto:** I haven't read it; I'll read it later, maybe... But I can't even get angered because what you said that the article said doesn't even make sense.

**Brian Ketelsen:** No, it doesn't, and this show shouldn't be about that, so we should probably move on before I say things I'll regret.

**Erik St. Martin:** Yeah, it could probably turn into its own conversation about that and maybe what he meant... It's hard to say, but it didn't come off well. It was not well spoken.

**Brian Ketelsen:** I think we should have that show though, by the way. I really do. I think it's time for us at GoTime to take on the topic of sexual harassment in the industry and talk about the things that are acceptable and not, and how that's changing in our industry. I think it might be difficult to get guests, because people who have experienced that - and it seems to me like nearly every woman has experienced it in some way, shape or form - often don't wanna talk about it, especially on a podcast. But it would be nice to have that show... Since we're the organizers of GopherCon.

**Erik St. Martin:** And we have an explicit COC for that, too.

**Brian Ketelsen:** Yeah, which we used last year, and it was very effective. Very effective.

**Travis Jeffery:** Did you ever have anybody that violated the COC?

**Erik St. Martin:** Yes.

**Travis Jeffery:** Do you know how often that was? What happened?

**Erik St. Martin:** The difficulty is that because it's not reported it doesn't mean it doesn't happen. We've had some instances, nothing major, knock on wood... I really hope that nothing major ever happens, but we tried to do our best to kind of set the expectation of how people should conduct themselves. We tried to do stuff for our after parties where we have buses, charter people to and from the hotel where the after party is so people don't have to walk, especially with people drinking. And it gets difficult too, because the conference scene, especially with drinking, it kind of ups the occurrence of things like that, too.

\[\\00:35:56.19\\\] We've been fortunate that there hasn't been anything major, extreme that's happened, but still... Just the whole play on it; it's not even just about that, it's people's perception. It drives me nuts to hear a woman at a conference is asked what sponsored boots she's working; that drives me crazy. Why can't they be an engineer? I'm confused here. Your first assumption is somebody's there as an attendee, you know?

**Brian Ketelsen:** Yeah... I'm booking that show, by the way. I'm putting it in Trello right now.

**Carlisia Pinto:** Let's do it.

**Brian Ketelsen:** So hit me up on Twitter or e-mail, @bketelson or bketelson@gopheracademy.com, let me know if you wanna be on that show.

**Erik St. Martin:** Awesome. So with that, I think that it is time for our second sponsored break. Our second sponsor for today is Backtrace.

**Break:** \[\\00:36:52.07\\\]

**Erik St. Martin:** Alright, we are back. We're talking with Travis Jeffery... So we just went over some Go projects and news. Anybody have any other interesting articles or projects that they ran across this week? Or do you guys wanna talk about \#FreeSoftwareFriday stuff?

**Brian Ketelsen:** Oh, goodness... Let me look at my GitHub stars real quick. There's something that I missed, and it was big, and I forgot it. Darn it.

**Erik St. Martin:** I feel like there was something I dropped in our channel earlier this week, and I completely am losing track of what it is.

**Travis Jeffery:** I don't know if you guys have mentioned this, but it's called \[unintelligible 00:38:10.27\], another project by Google. It's a command to list and diagnose Go processes currently running on your system.

**Erik St. Martin:** Yeah, JBD was working on that, right?

**Brian Ketelsen:** Yes.

**Erik St. Martin:** That's pretty cool... I think we determined, you have to compile it into your project in order to inspect what's going on in there, but really cool tool.

**Brian Ketelsen:** One thing we should mention, we are recording this and live on 19th January. Our CFP for GopherCon ends of the 31st January. If you want to put a talk proposal in for GopherCon, you're running out of time, and trust me, you want to put a talk in for GopherCon. You, out there, humble GoTime FM listener, have something to share with the Go community and we wanna hear it.

**Carlisia Pinto:** Absolutely.

**Erik St. Martin:** And to that point too, if you submit -- everybody always waits till the end. It's insane - the last 48 hours we probably get two-thirds of our submissions. So number one is if you submit early, the reviewers have time to review it, and if there's feedback, if there's questions, if we don't understand where you're getting at or maybe you didn't give enough detail for us to really gauge it, we will respond back and ask for more detail and to point things out, or to reframe it a different way.

But if you wait till the last 48 hours, nobody will have time to respond back to you to give you feedback as to what you might be able to change to make it more appealing. And also, Dave Cheney wrote a post on the Gopher Academy blog too, giving helpful insight into writing a proposal for the conference.

\[\\00:39:56.25\\\] I think that part of that can get misunderstood, too. I think people think that it has to be this crazy, highly technical proposal. I forget that sentence that was getting confused, but the basic idea of it though is we get a lot of one-sentence and two-sentence submissions. None of the reviewers know who you are, they only know what you put in that box, so that's why we talk about making sure you put enough information in there where people can gauge your knowledge of whether you'll be able to lay it out in a flow that will fit within your time and it won't be bouncing all over.

If you say, "I wanna talk about Go logging" and that's your proposal, that's gonna be really hard for the reviewers to be like, "Oh yeah, let's..." Logging may be something that everybody's very interested in seeing something about, but we don't know how well you know that topic, we don't know how you're gonna frame it, are the attendees gonna leave with more questions than answers, what's the takeaway... That's the thing. And we get a lot of one and two-sentence proposals.

**Carlisia Pinto:** I'm gonna up Dave Cheney and write a blog post about what not to do. \[laughter\]

**Brian Ketelsen:** That's a good idea.

**Carlisia Pinto:** Maybe it will be more effective. And by the way, if you don't even mention Go on your proposal, even if it's super detailed, we have no idea if that should be accepted, because we don't know if you're going to talk about Go. So at the very least, you should be mentioning Go in your proposal.

**Brian Ketelsen:** Yeah, and just to point a clarification... The reviewers can't see who you are, and in your proposal you should not mention who you are. But it's your job to give us an idea that you know what you're talking about while you write the proposal. It's a fine line you have to walk not to allow us to know who you are - that gives us anonymity in our review process, but you still have to show that you know your stuff when you're writing it.

**Erik St. Martin:** Yeah, so I think that might be part of the confusion - how do you show you're qualified without giving away who you are? And it's not so much putting down your credentials that we're looking for... If your proposal is well thought out, you have a good premise to it, it's clear what the takeaway is gonna be and the direction you're gonna take in the talk, you're gonna talk about this thing and that thing... If you have guesses for how long you're gonna talk about each subsection in your talk, even better. It just shows when it's broken down like that that you have a very good understanding of your topic and how you plan to present it.

That's really what we're looking for when we're trying to figure out the qualification to talk, not necessarily the "I've spoken at this conference, this conference... Here's links to me speaking." That's not so much what we're looking for, because I think that if you know your material well, it's easy for you. Not easy, but much easier for you to give a good, engaging talk.

**Brian Ketelsen:** And the final note before we change the subject on that is that all accepted speakers will be assigned a mentor. So if you've never talked before, but you feel like it's time for you to get out there and spread your wings a little bit, we will assign you an experienced speaker who will help you every step of the way, and make sure that when you get up on stage you're confident and you give the best talk that you can possibly give. So don't be shy, don't be afraid.

**Erik St. Martin:** Me, Brian and Dave have been known to have many a late night at the conference, sitting in hotel rooms where people give dry runs. We're committed to helping people give good talks and to feel comfortable getting on stage. Another note, we don't make it too clear and a lot of people don't submit because they're worried about compensation, like how are they gonna get there, because many conferences maybe provide you a ticket, so you really have to rely on your employer to sponsor you. We do pay hotel, airfare and everything for our speakers to come out, so don't let not being able to pay for travel and expenses hinder your from submitting, because we've got it covered.

**Brian Ketelsen:** \[\\00:44:10.06\\\] That was like the GopherCon sub-segment there.

**Erik St. Martin:** Right?

**Brian Ketelsen:** We'd better get to that \#FreeSoftwareFriday.

**Erik St. Martin:** It's a big event for everybody, and it's really cool to see people come up on stage, and I'd love to see as many people take the opportunity as they can. I don't think it hurts at all.

**Carlisia Pinto:** One more thing too is that GopherCon is accepting talks, keynotes, normal, regular talks, but also a tutorial in workshops. If you don't think you can give a lecture, maybe you can give a workshop teaching something. Maybe that'll be easier.

**Brian Ketelsen:** Yeah, we have three different types of proposals that are accepted. We've got the plenary talks, 25-minute talks up on the big stage, we've got the tutorials, which are 45-minute talks in our split-outs in the afternoons, and then we've got workshops, which are entire-day classes that you can teach the day before the conference. So there's a way for you to engage in GopherCon no matter what you wanna teach.

**Erik St. Martin:** Nice. So Casey, we'll send in our GoTime FM Slack channel just that a.k.a. "Now you wanna go to GopherCon but don't have the money? Submit a talk!" \[laughter\]

**Carlisia Pinto:** For sure, why not?

**Erik St. Martin:** Something tells me that you'd be more nervous - from past experience, you spend more time worried about your talk than enjoying the conference you're at.

**Carlisia Pinto:** But I think that's always the case, right? At least for me it would be, if I were talking.

**Erik St. Martin:** If you're Brandon Philips from CoreOS, you hang out and you work until the second somebody taps your shoulder and tells you to go on stage. \[laughs\] I've never seen somebody so calm before having to talk.

Alright, so \#FreeSoftwareFriday... I know we're on a tight timeline with Carlisia having a hard stop.

**Brian Ketelsen:** Why don't you go first, Carlisia?

**Carlisia Pinto:** Alright, I'll go first. I want to give a shoutout to Peter Bourgon and his oklog package - a distributed and coordination-free log management system. It looks like it was a ton of work, and if you need some log management system, I think it would be really interesting to try and use this.

**Brian Ketelsen:** It looks impressive.

**Carlisia Pinto:** It looks very impressive.

**Brian Ketelsen:** His blog post announcing it was very well written, too.

**Carlisia Pinto:** And it has extensive design documents.

**Erik St. Martin:** I'm a little disappointed... You've always curated a list of cool things for me, Brian, and you never sent this to me.

**Brian Ketelsen:** Oh, my bad. I've been busy.

**Erik St. Martin:** Busy... What is that?

**Brian Ketelsen:** Yeah, right?

**Carlisia Pinto:** The other interesting thing is that I remember him posting on Twitter maybe three months ago (four, tops) asking if there was the equivalent of Prometheus for logs, which means he wrote this afterwards, so... I don't know how somebody can whip us something this complex so quickly.

**Brian Ketelsen:** He had a little help, and he started with the concepts from GoKit as their base, so it's certainly... I don't think it happened all alone and all Peter in just a month or so. I think Chris Heinz was deeply involved too, and several others. It still looks amazing, and I'm not diminishing the amount of effort put into it by any means.

What about you, Erik? Did you come up with something good this week for \#FreeSoftwareFriday?

**Erik St. Martin:** I did. This is kind of hardware-related, it's a project called OpenOCD, which is Open On-Chip Debugger, and it's used for doing SWD and JTAG debugging of chips. It's open source software.

**Brian Ketelsen:** All I heard is "Blah-blah-blah..." \[laughter\] "JTAG-something-something Special Forces...", I don't know...

**Erik St. Martin:** \[\\00:47:59.21\\\] Think GDB for hardware. So it allows you to connect GDB to, say, like a micro-controller and step through the code that's executing on it. And the JTAG's a little bit more involved with the way that works, but similar things it does, as well as \[unintelligible 00:48:15.19\] things.

**Brian Ketelsen:** Nice, very cool. Travis, did you have something you wanted to share for \#FreeSoftwareFriday?

**Travis Jeffery:** Yeah, I wanted to share Redis and Salvatore Sanfilippo - an old project that's been going on for a long time now. I think it was released in 2009, and it still feels as useful and as fresh as when it came out. I've been using it for a long time and there's so many use cases for it... Sometimes people think of it as a key/value store, but it's really a data structure service. If you have multiple services that wanna use the same set, or something like that, it can do a lot. I've even made like a time series database in that thing, so it's pretty cool.

He also recently put out one of my favorite blog posts about a release, and I'll just read a little bit here where it says, "The first release candidate of Redis 4.0 is not yet stable, but it's soon to become, and comes with a long list of things that will make Redis more useful for we users. Finally, Redis 4.0 release candidate one is here, and is bold enough to call itself 4.0 instead of 3.4. For me, semantic versioning is not a thing. What I like instead is trying to communicate using version numbers and jumps what's up with the new version. In this specific case, 4.0 means this is the poop."

**Brian Ketelsen:** \[laughs\] The shizz?

**Travis Jeffery:** Yeah, exactly. I just love that, Redis is awesome.

**Brian Ketelsen:** That's awesome. I can't imagine the world without Redis. It's been around for a long time and it's still fast as heck. Awesome stuff.

**Travis Jeffery:** And they recently added a module support. I think he (Salvatore) actually created a module that implements like a \[unintelligible 00:50:11.20\] Redis, so...

**Brian Ketelsen:** Oh, wow...

**Travis Jeffery:** Pretty awesome. So I think that will be another thing that a lot of cool stuff will be made for modules.

**Brian Ketelsen:** That whole project is a great example of accessible C code. I am not a C developer by a long shot, but it's well-written C code, well-tested C code, and it's a good place to go if you wanna learn some C.

**Erik St. Martin:** Yeah, I've not messed with Redis in a couple of years. It's interesting, because we were using it for a long time, and then we just kind of don't anymore.

**Brian Ketelsen:** Yeah, it's true... We found Kafka. \[laughter\] We've found a bigger hammer for that screw. \[laughter\] Alright, so my \#FreeSoftwareFriday for the week is one that I've already mentioned before but I used it extensively this week and it just brought me joy again, and that's goa/gorma, designing your API first using a DSL and then generating an API with the data storage layered. It brought me joy today... Thank you, goa.

**Erik St. Martin:** How is that mixing with Buffalo now? Are you combining the two, or are you using some for one, and...?

**Brian Ketelsen:** I haven't combined them yet, although as I was doing this goa project this week I thought about ways that they could actually combine nicely together. So maybe there might be something like that in the future. Go is very specifically API-level and Buffalo is very much on the website, although it does nice APIs. There's no concept of the design-first ideas in Buffalo, so I think that those worlds can meet, it just will take some time to think it through.

**Erik St. Martin:** \[\\00:51:53.06\\\] Todd's calling me out. It really is me responding on Twitter and talking at the same time. I'm good like that. \[laughter\]

**Carlisia Pinto:** I'm going to say goodbye, and Travis, thank you so much.

**Travis Jeffery:** Thank you, good talking with you.

**Erik St. Martin:** Bye, Carlisia.

**Carlisia Pinto:** Talk soon, bye.

**Brian Ketelsen:** Thanks, Carlisia.

**Erik St. Martin:** I missed it by two minutes. I was like, "Here we go!"

**Brian Ketelsen:** We didn't do too bad with timing, though.

**Erik St. Martin:** Yeah, I was actually looking at my timer... I must have started it two minutes after the hour... But yeah, that was kind of funny. He's accusing me of having my brother on the Twitter account. \[laughs\]

**Brian Ketelsen:** It's probably true. Very few people would know the difference.

**Erik St. Martin:** No... Even at the conference, very few people know the difference.

**Travis Jeffery:** Actually, I'm curious... How many of you use a Go framework for the web rather than just using the standard library?

**Erik St. Martin:** It depends on what I'm doing. Brian's been doing a lot more framework and code generation stuff than me. Recently, I've been writing a lot of outbound service type stuff, so I haven't really had the need for a framework. The two components I've mostly been working on recently are just interacting with the Kubernetes clusters and things like that; they don't really take any inbound traffic. And then the other one basically man-in-the-middle's the Docker socket.

**Brian Ketelsen:** From my perspective, I've done everything from pure NET HTTP all the way up to Revel when I first started Go, and everything in between. For me, I was always looking for that Rails experience without the Rails magic, and Go Buffalo has absolutely brought it back to me, so I'm super excited about Buffalo. It's a really thin veneer on top of a handful of small libraries like Gorilla Mux and Gorilla Sessions. It's not a lot of code, but it's got the generators, it's got the concept of Rake, although it's called Grift in Buffalo... It's just made it so much easier to write web apps and so much faster.

The new Gopher Academy website is written in Buffalo, the new GopherCon website is written in Buffalo, and I've done a couple others, too. It's so fast, and it's getting better every day.

**Travis Jeffery:** Yeah, that sounds good. I'll have to check it out. I've always just been like a standard lib guy; the Gorilla libs are really awesome. Basically, I would just tag those on as I needed, or whatever else.

**Erik St. Martin:** I like standard lib, but there reaches a point too where there's so many endpoints... If you're building out a full admin interface where there's just a lot of endpoints, that feels like it could get repetitive and there'd be some shared logic for authentication and authorization... Some of that starts to feel like it'd be nice if there was some sort of better way to tie everything together, but I haven't struggled with any of that in the last year or so, just because I haven't been writing a lot of API code.

**Brian Ketelsen:** I was gonna say, that's because I'm writing all the APIs and web stuff, Kubernetes boy.

**Erik St. Martin:** \[laughs\] I don't know... Mine has its pain, too.

**Brian Ketelsen:** Oh, absolutely.

**Erik St. Martin:** Did you not hear that I have to man-in-the-middle Docker?

**Brian Ketelsen:** I did catch that and I feel your pain, that sounds terrible.

**Erik St. Martin:** It was kind of fun. The paining part is where it upgrades the socket. I was like, "Sweet, I can just the HTTP reverse proxy and just give it some socket knowledge." That didn't work at all, because it upgrades where basically they start talking just straight TCP and no more HTTP to each other for stuff like interactive terminals. But I threw something together... It works, it's cool.

**Brian Ketelsen:** I'd like to see that code, because not too long ago I was doing Docker-backed web terminals, and I got stuck with that same websocket upgrade, because I was trying to connect the standard in and standard out from the web terminal directly to a Docker container running a shell, and there's that point in the middle where you get the upgrade and I was like, "Oh, darn it!"

**Erik St. Martin:** \[\\00:56:11.17\\\] Yeah... It's actually kind of cool, because you can just basically pipe the two connections together. But yeah, I'll help you through it.

**Brian Ketelsen:** I'll buy you a beer.

**Erik St. Martin:** Apparently I owe Brian Downes a beer, too. Remember when we joked about if somebody cosplayed as Bill Kennedy with a hat, or something?

**Brian Ketelsen:** That's right!

**Erik St. Martin:** ...and I never saw this picture - he is dressed clearly with a Bill Kennedy hat and a Dave Cheney beard, and I missed it.

**Brian Ketelsen:** Say it isn't so!

**Erik St. Martin:** So I owe somebody some beer. Hopefully, they will be at the next GopherCon.

**Brian Ketelsen:** That is awesome.

**Erik St. Martin:** Maybe we'll invite him to the dinner.

**Brian Ketelsen:** That's a good idea.

**Erik St. Martin:** So we have a tradition, too... It's a little late now, but most people don't know this - every year, Brian and I take whoever the first ticket purchaser is for GopherCon out to a really nice dinner. So next year you want that to be you.

**Brian Ketelsen:** Yeah, that's been really fun. We have people that camp on the ticket buying page just to get the honor.

**Erik St. Martin:** It's fun. Alright... Anybody have anything else before we close out the show and move after show? Even though we're kind of in the after show...

**Brian Ketelsen:** Yeah, when Carlisia left, everything got informal. \[laughter\]

**Travis Jeffery:** Do you guys wanna talk about this Golang \[unintelligible 00:57:30.06\] discussion about the standard login interface?

**Brian Ketelsen:** You mean the one I started?

**Travis Jeffery:** Yeah, I guess you started -- well, someone else started it, but they started it because they saw your tweet.

**Brian Ketelsen:** Yeah, Peter started it because of my tweet. So I suggested on Twitter a couple days ago that it would be nice if we had a single interface for login.

**Travis Jeffery:** Yes... Yes!!!

**Brian Ketelsen:** Well, the biggest mistakes I see in Go - and there aren't that many, to be honest; Go is a very well-written language... But I think it's a mistake that the logging package is a concrete implementation and not an interface.

**Travis Jeffery:** Yes, it would be so awesome... Because everyone has their own login implementation, and it just becomes a mess...

**Brian Ketelsen:** Yeah, it's insanity.

**Travis Jeffery:** I love it.

**Brian Ketelsen:** So regardless of whether you think that library should be logging - and that's its own discussion - many Go libraries do log, and anything that touches Kubernetes, any of those clients, they use glog (Google's logger) and it's insanity when you've got all of these different libraries mixed together. If I'm consuming a library, I wanna just be able to pass in some logger that I instantiated and have it just work; that'd be really nice.

**Erik St. Martin:** Well, I mean you can set where you logarator is using a global, too.

**Brian Ketelsen:** Only if they're not using something crazy...

**Erik St. Martin:** Right, yeah.

**Brian Ketelsen:** There are log packages that don't allow you to override the log output, and that's been really frustrating. I forked one of them once - I don't even remember which it was - just to add the ability to get to the logger, so you could change its output to the standard logger. It's ridiculous.

So I suggested on Twitter that we needed to have a standard interface for logging packages, and obviously, the reason that we have all of this logging package stuff is because Go's logging implementation doesn't have log levels and it doesn't have structured logging. I think pretty much everybody will agree at least with those two things - every other logging package out there has some combination of those.

An interface that covers log levels and structured logging, in the standard library (which is my biggest argument) - if it's not in the standard library, you're wasting your time - it would allow us to plugin whatever logging library we liked, whether it's Logrus or Log15, or Go kits, or whatever, and they would all just work. That's what I want - I want things to just work.

**Travis Jeffery:** \[\\01:00:11.04\\\] Yup, it'd be awesome.

**Brian Ketelsen:** Java's had it for years, Log4j.

**Travis Jeffery:** Oh, Java...

**Brian Ketelsen:** So we started this discussion, and lots of people are jumping in on it, but we'll have to see where it goes. There's lots of people that are inside Google that are interested in this too, so I'm hoping we'll get some traction and have some convergence on a minimal interface that will make most people happy, and that we can promote as a standard for everybody to meet. In that way, Logrus and Log15 can implement that interface and we can just start sending pull requests to our favorite libraries out there to make that logging interface. This would bring me joy.

**Erik St. Martin:** I think it's another one of those dependency-type things too, where there's a disadvantage when some things are steered from kind of like a benevolent dictator. There's a lot of good that comes from it, but the bad part is the tunnel vision. The logging - who knows what they use internally for logging? It's hard for them to think about all the use cases that other people have for logging.

At Google's scale, logs probably don't mean much; it's probably all metrics at that point, and anomaly detection and things like that. Logs are probably things that are turned on during debug phases, and that's about it... Because I don't think I would wanna know how much log data Google sites generate. Enough to knock us all off the interweb.

**Brian Ketelsen:** Yeah. The nice thing about this conversation is that the folks at Google are even discussing potential compiler changes that would make certain operations in the logging world less costly in terms of allocations and such.

**Erik St. Martin:** Nice.

**Brian Ketelsen:** ...so there's definitely some good engagement on this to make logging fast and pain-free. I'm excited to see it go somewhere.

**Erik St. Martin:** I don't think people realize how engaged the Go team is with the community too on a lot of things; they help big users of Go and stuff like that in making changes that help their software run better.

**Travis Jeffery:** One of the coolest things was whenever they had a discussion about Go dependencies and they brought in guys that were working on Go Vendor and godeps and everything and brought them in as people to talk with - that was really cool to see.

**Erik St. Martin:** Yeah, definitely. So I think we are 15-ish minutes over time, somewhere in that neighborhood, so we should probably close out the show, before we drive Adam crazy, sitting there waiting for us.

**Brian Ketelsen:** We covered all the corners of the internet today though, it was kind of awesome.

**Erik St. Martin:** If we all close Slack and don't look to see if he messages and we just keep going, how long do you think he hangs up on us? \[laughter\]

**Brian Ketelsen:** It's because we can't see him saying, "Cut! Cut! Cut! We're long, we're over!" "Oh, sorry, I couldn't see it. It's radio." \[laughter\]

**Erik St. Martin:** Alright, so with that, I wanna thank everybody for being on the show, especially to you, Travis, and Carlisia, who's not here with us - she already said her goodbyes.

Thanks to all the listeners who are listening live and everybody who's going to be listening to this how when the recording is released. Huge shoutout to our sponsors, StackImpact and Backtrace.

If you are not following us already, we are GoTime.fm, you can sign up; eventually, we'll get around to putting out our weekly e-mail. We are @GoTimeFM on Twitter, and if you wanna be on the show, have suggestions for topics or guests for the show, GitHub.com/GoTimeFM/ping. With that, goodbye everybody! We'll see you next week.

**Brian Ketelsen:** Bye! Thanks, Travis.

**Travis Jeffery:** Thanks for having me.
