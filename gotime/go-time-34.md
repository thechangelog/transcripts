**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. It's episode \#34 today, and our sponsors today are Toptal and Backtrace. Today on the show we have myself, Erik St. Martin, Carlisia Pinto is also here...

**Carlisia Thompson:** Hello.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Yo!

**Erik St. Martin:** And our special guest today is the co-founder and CEO of a project called Pachyderm, and I don't wanna give too many details because I'd like to hear him describe it in his own words. Please welcome Joe Doliner.

**Joe Doliner:** Thanks guys, it's great to be here.

**Erik St. Martin:** So Pachyderm... Do you wanna give everybody a brief rundown of what Pachyderm is before we get too far into the weeds?

**Joe Doliner:** Yeah, absolutely. Pachyderm is what's called a data lake, and the other big example of a data lake that you're probably familiar with is the Hadoop ecosystem of tools. What Pachyderm is trying to do is basically build a new, more modern version of what Hadoop is in the world today. We've taken a very opinionated approach on what we think that should look like. For one thing, we've completely embraced the containerized view of the world.

When you're using Hadoop, if you wanna process some data, you're probably gonna wind up writing a pig script, you might wind up writing a Java class with a map and reduce method... There's a bunch of different frontends to it. For Pachyderm there's really only one frontend for processing data, and that's a container. You just take your code, you put it in a container, you read data from your local file system just like it's on your laptop or something like that. What's really cool about this is it means that all of the tools in the vast open source ecosystem are now usable in data science on Pachyderm.

We like to say that if you can put it in a container, then Pachyderm will scale it up to petabytes of data for you, because we can just orchestrate these containers and duplicate your code and orchestrate all the data into them such that it all just floats through.

There's one other very innovative feature of Pachyderm that doesn't exist in Hadoop, and that's version control. I assume everyone listening to this show is intimately familiar with Git. Pachyderm basically does what Git does, except it does it for gigantic data sets. As your logs are coming off of your server, as your database dumps are going into Pachyderm, we're snapshooting that in a very granular fashion, so you can see how your data has changed. And because the analysis happens automatically as new data comes in, you can actually see how the analysis is changed with the data. So you can draw a very one-to-one connection between "This piece of data right here created this analysis", and you can track it back to the data that went into any computation within Pachyderm.

**Brian Ketelsen:** So is that like full-on data provenance?

**Joe Doliner:** Absolutely, yeah.

**Brian Ketelsen:** Oh, wow!

**Joe Doliner:** And provenance is one of the key features for Pachyderm. We can do very, very granular provenance. We can do it at a Perl-like file level within the system.

**Brian Ketelsen:** That's amazing. That's truly a big deal.

**Erik St. Martin:** \[03:43\] Yeah, this is a huge interest to Brian and I, because Brian and I spent actually two different jobs where we worked with big data, doing a lot of fraud prediction and credit scoring... A lot of that with the laws and things like that, the provenance is huge because you can cache these counts and values and things like that that end up going into your regression model for the scoring. But if you ever had a lawsuit or something come back at you, you would be able to easily figure out which data was used to calculate that. It's massive.

**Brian Ketelsen:** Yeah, it's a big deal. I remember when Pachyderm came out - I guess it's probably been roughly two years now. We actually played with it back at the last company we worked at, and it was pretty impressive even back in the earliest days.

**Joe Doliner:** That's really nice of you to say. I bet there were some pretty unimpressive things about it at that point, too.

**Brian Ketelsen:** Well, it didn't do a lot. Your earliest releases were kind of tying Docker container streams together, and I was still terribly impressed with the whole idea. I'm excited to hear that things have come along so nicely for you.

**Joe Doliner:** Yeah, absolutely. It's really taken off just because we've gotten more people working on it, we've refined a lot of the concepts... Open source is all about having these very tight iteration loops, so what we have now is the result of basically two years of iterating with our community as fast as we possibly can.

**Brian Ketelsen:** What kind of users do you have out in the open source world? What's the average Pachyderm user look like?

**Joe Doliner:** I get that question a lot, and what's interesting is it's very hard to nail down an average user, because these tools can sort of apply across a vast spectrum of use cases. One of our most notable users - and they are actually customers, so we can use that word - is a fusion company called General Fusion. They're building the world's first commercial fusion reactor, which is pretty darn cool in and of itself, but as part of doing this, they're constantly running experiments with these plasmas that are fusion reactions going on within their test setups, and these are spewing out massive amounts of data that are being recorded by all their instruments, and they need a place to put that data. So they're throwing it all into Pachyderm, it's getting snapshotted in Pachyderm, and that way they can distribute it into physicists in the outside world and allow them to consume it in various ways, process it with whatever tools they want and figure out what's going on with this data.

Another big case where we've seen a lot of customers and users coming is in machine learning. You guys have talked a lot about that in your previous jobs. One of the things that actually happens - and I think the last two months or so it's been really good for us - is the EU actually just passed a law where consumers have a right to an explanation for any algorithmically made decisions that a company has. Banks are starting to use machine learning to make their decisions about who to give a loan to.

If you're in the EU and the bank says, "Sorry, you're not getting this loan", you can turn around and ask them why; what data went into making this decision? As you can imagine, having a system that just tracks all of your provenance for you makes that incredibly easy. You can just look at the provenance of your machine model and you can just tell them, "Here's what went into it." So we've been seeing a lot of that, too.

**Brian Ketelsen:** Yeah, that's really big.

**Erik St. Martin:** The hard part, if people imagine that problem, is this data is continuously changing every day. Sometimes data will be bad and have to be purged from the system, and the dataset is constantly changing that's being used as part of the scoring model so to be able to go back in time and say, "This is the specific data that went into that calculation..." Because the consumer is gonna come back after some period of time and your dataset can change significantly in a month or two months. And to be able to easily go back and say, "This is exactly the dataset that was used to calculate that" is huge.

**Joe Doliner:** \[07:50\] Yeah, absolutely. And the other thing that we really like about provenance is that it really allows the scientific method. Because if you've got a data lake running in the company - you're a data scientist, you come in, you see some result there that was computed by some huge chain of steps that your company has defined over the last year, and something looks weird to you. You wanna do some further investigation into where this result came from. If you can't easily just trace it back through those steps, find the input data and find the processing that went into it, you can waste so much time just going and asking people about that, just so that you can do some further experimentation... Whereas with Pachyderm it's all recorded there, it's all reproducible. You can just look it all up and you're off and running, doing your own experiments to further clarify the results.

**Brian Ketelsen:** That's really amazing. Can you talk about where Go fits into this? I know there's a lot of containerization, but do you have daemons that are written in Go? What's the glue that holds all this together?

**Joe Doliner:** Yeah, absolutely. The entire system is written in Go. That was a choice made a) because the things that we're interacting with are all written in Go, and so their nicest client libraries are gonna be in Go, too. Those are Docker, Kubernetes, Etcd... It's basically an entire Go stack that we deploy. We deploy on top of Kubernetes, we leverage Etcd; of course, Docker containers are everything that people give us to process with.

It's also just a really great language for this type of system stuff. Our main thing that we deploy is the Pachyderm daemon, which we just call Pachd. That's just a Go server; it's using gRPC. gRPC just makes it super simple to stand up this structured API and get going writing the actual code that goes into it. That's the great thing about Go in general - it gets out of your way and lets you write the actual meaningful stuff.
We also have a frontend command line interface tool called Pach Control - that's all written in Go. It uses Cobra, which is the Steve Francis command line interface-making library that we found to be really good. That about covers it, to be honest. It's a pretty simple architecture.

**Erik St. Martin:** So the main motivation for exploring the use of Go was mainly just because all the other components you were looking at to build the system were already in Go?

**Joe Doliner:** Yeah, absolutely. And we knew the main use case that the Go team cares about is our use case. This is what people are using Go for internally at Google - they're using it to write services and they're using it to write command line interface tools, so we knew... It's always best to be on the main line of what the developers think their tool is for, because you know you're gonna get the best service.

**Erik St. Martin:** That's awesome. How about the data layer inside the container? Do you offer anything as part of Pachyderm to help people build their own components to process the data, or you pretty much leave everybody to their own devices inside the container and you handle the workloads?

**Joe Doliner:** Yeah, we handle everything that could be termed "data orchestration" - which data gets processed, where does it get processed inside of a container? The user handles everything about how it gets processed. For example, in Pachyderm we think of things in terms of repos. We sort of mimic the language of Git, so you might have a repo that contains log messages from your server, and you wanna process these log messages - you wanna look for specific events, or something.

The code that you will write is just a binary, and you put it in a container, you give it to Pachyderm, you tell it "Here's my container, here's the command I want you to run in the container" and when that command runs inside of the file system that it sees in the container, there will be a small chunk of the log messages for you to process, and you just need to read that off of the disk. There's no worrying about having the right bindings for a different language for this... It's just operating system calls; it's literally a file on disk. You read that off, you do whatever processing you wanna do with it and then you write data back into the file system in a different spot.

\[11:58\] After that code runs, Pachyderm knows to slurp up that data, put it back into the file system and trigger downstream processes in exactly the same way. We orchestrate all of that pipelining, we orchestrate all of where the data goes, and you just orchestrate what specifically the actual analysis is.

This can get pretty complicated too with how you're joining data sets. You can do vast multi-way joins of different data sets and we'll distribute all of that, we'll orchestrate all of that so that your code gets run... But again, you're just writing the "Once I've got data on disk, what do I do with it?" That's all you need to write.

**Brian Ketelsen:** Oh my god, I just wanna stop what I'm doing now and go play with it.

**Joe Doliner:** We would love for you to play with it, but don't stop right now, because I think we need to do the rest of the show. \[laughter\]

**Brian Ketelsen:** We've proven in the past that the show will go on without me, so I'm just gonna step out and start downloading Docker containers. I'll be back. \[laughter\]

**Joe Doliner:** Okay.

**Erik St. Martin:** We'll bring him back in at the end, and he can tell us what he learned.

**Joe Doliner:** Okay, hopefully he'll have a good experience. I'm crossing my fingers right now. There's a users channel if you run into any problems.

**Brian Ketelsen:** It really sounds amazing.

**Erik St. Martin:** It might make for a fun episode where you assign somebody on the show a mission and then come back to him at the end.

**Joe Doliner:** I think that would be a great radio version of the open source experience. You could see us live, providing support for an open source project. Unfortunately, that might get really boring for the listeners, because I'm like "Alright, do you have the permissions right? Do you have the user path right?" and stuff like that. But it could be pretty fun.

**Brian Ketelsen:** Yeah, my Docker volumes aren't working.

**Joe Doliner:** Oh, no... Not the Docker volumes.

**Brian Ketelsen:** I ran into that two or three days ago... I installed a new Linux distribution, because it's distro of the month for me, it always is. I went back to Arch, but the newest Arch Linux Docker packages don't work unless you're using overlay file system, but the Arch packages didn't bundle whatever lib overlay that needed to be bundled. It wasn't clear, so I spent about an hour hunting around, trying to figure out why Docker wouldn't do any dockering. I finally found the tiniest little message somewhere that said, "You need to install this Arch package to get overlay working."

**Joe Doliner:** That sounds like the quintessential Linux experience right there. Somewhere there is some little message that if you Google it, it will tell you exactly what you need to do, but until you Google that, you're completely lost.

**Brian Ketelsen:** Right, that's exactly true. That's what we do, and that's why this kind of mission would not play well in a time-boxed show. \[laughter\] You never know whether it's gonna be a ten-minute mission or a ten-day mission.

**Joe Doliner:** The worst is when you come across a forum post for something on Linux, and someone's got this question and then nobody answers it, and then ten days later they're like, "Found the answer, thanks guys", but they don't post what the answer was, so you're just as screwed as you were before, but you know somebody somewhere has solved this problem.

**Erik St. Martin:** I know somebody in the Go channel will probably link this, but there's an xkcd episode where they do that, and it's like "Who were you so-and-so? What did you see?" because you come back to it years later.

**Brian Ketelsen:** That's right. Honestly, I think worse than having somebody solve it but not tell you what the solution is is you going out on the internet and searching for the solution and finding your own damn post explaining the fix for it. I don't know how many times I've done that.

**Joe Doliner:** Yeah, I've done that, too.

**Brian Ketelsen:** Could I not possibly have learned at the first time?

**Erik St. Martin:** I wanna point out how awesome the channel is, because I made the joke that somebody in the channel would do it. In less than 30 seconds, somebody had it linked.

**Brian Ketelsen:** Nice!

**Erik St. Martin:** So for anybody who's listening, it's number 979.

**Brian Ketelsen:** DenverCoder9. Who were you? \[laughter\] That's awesome.

**Erik St. Martin:** I tend not to post my question, though. I usually reach out privately to people or talk in channels, so I don't really come across my own question.

**Brian Ketelsen:** \[16:05\] Mine are usually blog posts. I wrote this blog post about how to do X, Y and Z, and then tried to do it again two years later and I find my own blog post answering my own questions. I hate it.

**Erik St. Martin:** Your own blog posts...

**Brian Ketelsen:** Yeah, it's embarrassing. So the Pachyderm orchestration system being written in Go, what nice features of Go made that work well for you, and how is that working with a community of Go developers on such a large scale orchestration system?

**Joe Doliner:** The features of Go that really make it work well are a) just having all the built-in libraries that you need; having an HTTP library that's there and it's really good... Before this, I was programming in C++ on RethinkDB, and there I remember writing our own HTTP libraries, writing our own HTTP server, because it was just hard to integrate something.

I really think that the single best feature of Go is how batteries included it is. You have just good things in the standard libraries that you can use. Other than that, having goroutines is to me the best way to do concurrency.

When we were making RethinkDB, one of the first things we did was make a call routine library for C++ so that we could have that style of concurrency, and it was nowhere near as clean and elegant as Go's is, because it just has a few primitives and you can basically do everything. Other than that, we're using all the standard stuff. We're using interfaces, functions and stuff like that... But again, I think that you can't really use Go without those things.

**Brian Ketelsen:** Right. At least not successfully.

**Joe Doliner:** Yeah, not very successfully. I don't know what Go would be like if you just limited yourself to structs and simple functions and stuff.

**Brian Ketelsen:** It'd be like Pascal.

**Joe Doliner:** Yeah, there you go, it'd be like Pascal.

**Erik St. Martin:** Wow.

**Brian Ketelsen:** So what's the biggest use case you've seen yet for Pachyderm? What sort of sizes of data have you seen in the customer base?

**Joe Doliner:** We've seen sort of pushing up into the hundreds of gigabytes - that's about the biggest we've seen right now. That's definitely a lot smaller than where we wanna be eventually for a big data project.

What we've found though that's pretty interesting is that there are a lot of people who are in that middle ground of less than a terabyte, still don't wanna just have like a bunch of scripts running on AWS machines or a big box in their closet, because it's too unwieldy. So they want an orchestration layer to control all of this for them, but it's not necessarily all about the big data sizes.

We're doing a really big push right now; basically, our users are forcing us to as they hit larger and larger use cases and things start to break. We're really pushing the envelope on how much data it can handle, and I suspect within maybe the next three to four months we're gonna be hitting the multiple terabyte ranges.

**Brian Ketelsen:** Nice. What are the constraints now for size of your data.

**Joe Doliner:** There's a bunch of them. One of the things we've hit a lot is just figuring out exactly where to put the data within the Docker containers, so that things don't crash. Kubernetes unfortunately right now doesn't have a way to ask for disk space as a quota. You can ask for memory and CPU quotas when you schedule pods, but you can't ask for disk space. At first, we were just sort of writing data into the Docker container, and that was fine until it turns out there's a ten-gigabyte limit on the amount you can just write within a Docker file system... Which totally makes sense, because this is like an overlay file system, so you shouldn't be writing more. We solved that - you can just write to the host path of the machine, but then orchestration can get a little bit more complicated in there.

\[19:48\] The other things that we've just hit are like - we have sort of two interesting axes that people scale along. One is they have really big files; they'll have a hundred gigabyte file that they throw in Pachyderm that they wanna process. Then we'll have people with small files but millions of them. With millions, there's a few places where we were sort of opening too many connections to download all of these files; we were running out of file descriptors and stuff like that.

So these are all the standard edges that you start to sand down as soon as you actually are putting the system through its paces and really starting to get these workloads working.

**Brian Ketelsen:** Do you see a use case for any distributed file systems in the future? I know there's been a lot of activity on that front lately too for very interesting distributed file systems, and a lot of them were written in Go, too.

**Joe Doliner:** Yeah, so one of the major pieces of Pachyderm is the Pachyderm File System, which is a distributed file system. That's the main feature that sets that apart from other distributed file systems, as that's the thing that's got all the version control logic inside of it. Yeah, I definitely see use cases for a bunch of different distributed file systems. One of the projects we're really excited about right now is Minio, which I guess isn't technically a distributed file system, it's an object store, but you know, potatoe-potato... They could be used in a lot of the same ways.

The Minio guys actually came in and got Pachyderm running on Minio, which is really exciting, because before then you ran Pachyderm on top of an object store, so this is really nice if you're deploying on a cloud platform, because you've got S3 or you've got Google Cloud storage or you've got Azure Blob storage. But if you want an agnostic way to do this or you wanna run it on-prem, our best answer for people was RADOS which is the thing that backs Ceph... Which is S3 compatible, but it's kind of hard to set up.

Minio is super smooth to set up. It's all written in Go, and we now have direct support for it in Pachyderm, so that's our preferred on-prem solution right now.

**Brian Ketelsen:** That's brilliant. Speaking on Minio, we love the Minio people. They are the best open source project when it comes to supporting the community. They support almost every Meetup I can think of; they've been hosting things like Women Who Go and they've supported GoTime FM, they've supported GopherTime... They're just such great community members, and I love that.

**Joe Doliner:** Yeah. They're supporting us, and we're another open source project. Normally, you don't see that level of support for open source projects, but they just reached out and they did it for us. So yeah, those guys are really great.

**Brian Ketelsen:** That's really cool.

**Erik St. Martin:** I think it's about time for our first sponsored break, and after we come back, I'd love to talk to you -- you brought up a good point in our email exchange before the show about talking about open source projects, like running a large open source project and building a company around that, and I'd love to dig into that a little deeper. But first, our first sponsor for today is Toptal.

**Break:** \[22:46\]

**Erik St. Martin:** And we are back. We're talking with Joe Doliner from Pachyderm. Before the break you had mentioned maintaining an open source project and the human side of it and how to stay open source but build a company surrounding that. I'd love feedback on that, because it's an interesting problem - how do you give away the sauce for free, but make a successful company around that?

**Joe Doliner:** \[23:45\] It's a very interesting problem, and the short answer is I think it's a very hard problem. There are some people when I tell them that our software is open source, they're just like, "Wow, so does that mean you're never gonna be able to make any money off of it?" That's not one hundred percent true, but that is a very good first instinct to have, because it does seem like you're giving away the sauce for free, and it's gonna be very hard to charge people if you can't restrict their access to it.

Starting at the beginning, to get an open source project that's gonna get any sort of traction, that's gonna get people interested in it, you have to align a set of incentives of people in the outside world. You have to a) make something that's gonna be useful to people. It has to solve a real problem for them, it has to be better and different enough from the things that exist that they're actually gonna wanna go through the pains of using a new product, because for the first very long time in the life of your project, it's gonna suck. There's just no way around that. Software has to suck for a long time before it ever becomes good at all. So you have to give people some very interesting, compelling new thing to get them to even walk in the door and start playing with the software.

After that, you have to start getting developer's interest aligned, and a lot of that goes into positioning it next to the things that are interesting... For us, we're positioned very close to Docker. We've been very close to Docker for a long time and it was just exploding at the time we started (it's still exploding now).

For a lot of people, we were just an interesting new thing that they could do with Docker. They'd been wanting to play around with Docker, they'd been wanting to hack on Docker... This was a project that appealed to a different set of people - it appealed to data scientists and more data-oriented people, so we became that product that they were interested in for using their containers with.

You also need to navigate how easy it's going to be for your product to be deployed. There's always some cost to deploying a new product, and for some products this is just insurmountable. I think a good example of this is Urbit - have you guys heard of that?

**Brian Ketelsen:** Mm-hm.

**Joe Doliner:** Urbit is this very cool idea where they're building this cryptographically-secure, peer-to-peer server network where you can just get a server that you can run anything on, but it's really opaque how to use it; it's very hard to use. People do use it, and they know this is a problem, they're working a lot on this... But for us, we wanted to make sure that we solved this problem very well up front.

We saw that people were switching to containers, people were switching to container orchestrators like Kubernetes, and in fact, Kubernetes really seemed like the cream of the crop in terms of container orchestrators... So we made the decision very early on to make our product just completely deploy on Kubernetes. What that means is that when we're trying to get someone to use our product, if they're already using Kubernetes, then we can get it up and running for them in like 30 seconds. It's just a straight Kubernetes manifest that deploys on them. Getting people to that first magic moment with your product, where they're actually doing something with it - the shorter you can make that feedback loop the better, and the more successful you're gonna be.

The other very interesting aspect of this is how do you build a company around it, because one of the things that we've needed to do, we've gotten some developers of the open source community that have come in, but most of the people who do the heavy lifting of Pachyderm development are developers that we employ, and they're getting paid to do their job, which is a great way to align incentives with money.
For that, you need to have some way that you can eventually make money off of your product. I think for a lot of different kinds of open source projects, I just don't see any way that this can ever happen. If you're making an open source BitTorrent client for example, I don't see how anybody's ever gonna pay for that. Maybe I'm wrong, I'd love to be proven wrong, but I think there is a lot of people who won't.

\[27:51\] For us, fortunately... Companies, when they invest in data infrastructure, it's a big investment. If they're running Pachyderm, they're probably gonna have 10, 20 engineers who are just using it every single day as a major part of their workflow. In those cases, companies are often very willing to pay for support contracts, because it will just make their developers more effective, it saves money... That's how we make money right now, we just sell companies support contracts. That means they get to call us on the phone and we'll fix whatever problems that they have.

The other thing that can work in terms of a business model for open source is if you can turn it into some sort of a hosted model. The analogy isn't totally perfect, but GitHub is sort of a monetization strategy for Git, right? GitHub itself isn't open source, but you can see how that works.

We're planning to eventually build an equivalent for Pachyderm, which is tentatively called PachHub. You can imagine this will be a site much like GitHub, except instead of code repositories there will be data repositories, and there'll be pipelines that are processing those, and you can see what the entire community is doing with all of this open source data and you can modify what they're doing with it, and you can contribute back to this open data science community that we wanna build.

**Brian Ketelsen:** One of the things that you mentioned early in that very long monolog - thank you very much - was how people get interested in open source projects and how you get engagement of the community and the developers. One of the things that it triggered me to realize is that I get less engagement out of the idea of the project itself than I do out of the vision of the project and how the project presents its vision. Because there are a lot of ways to solve every problem, but the communication of that vision is frequently the thing that keeps me more engaged.

Even at the beginning of the project when it's that rough patch that you talked about, where things don't quite work as planned - or they don't work as you intend them to work in the long run - that engagement is driven by the way the project communicates to me where they want to go, what their vision is. I think that's what attracts me to open source projects more than anything else.

**Joe Doliner:** Yeah, absolutely. You really need to sell this dream of the future world to people, and we've spent a long time iterating on that and changing how we describe our vision so that it really resonates with people. Right now, I feel like we've got something that's working pretty well for a large group of people, but maybe not yet for everybody.

**Brian Ketelsen:** But when you think about the open source projects that have been really successful in the past, many of them have charismatic leaders that make statements that are even sometimes controversial. DHH in the Rails community, Solomon Hykes in Docker - they both frequently make controversial statements, and then on the other end of the spectrum you've got Joe Beda, Tim Hockin from Kubernetes who are leading the way in Kubernetes in a very quiet and calm, but well-planned and very well communicated way.

I feel like part of the adoption curve in an open source project relates to the charisma of the leaders, too.

**Joe Doliner:** Yeah, absolutely. Invariably, that charisma and that personality trickles down into the project itself and into the community and how all of that works. There is a lot of value in being controversial. You shouldn't just be controversial for the sake of being controversial, but you should always be willing to take a stand about what you feel like -- "This is the direction we want the product to go, this is the future that we see, and we're either gonna fail miserably trying to get there, or we're gonna get there and it's gonna be an amazing success."

**Brian Ketelsen:** Yeah, that really ties back into my statement earlier - you're selling a vision, and the aggressiveness and the means in which you sell that vision are what attract me to a project. I just realized that.

**Erik St. Martin:** Yeah, it's an interesting world, trying to balance how to stay profitable and how to keep giving back.

**Joe Doliner:** \[32:04\] Absolutely, and I was just gonna say, of course, I think the original example of the charismatic but controversial leader is Linus Torvalds, who has no qualms about taking a stand about anything he believes in, which I think is absolutely great.

**Erik St. Martin:** It's hard... There's days I wish I was born with whatever gene made him that way. \[laughter\]

**Brian Ketelsen:** I don't know, it's tough... A lot of those charismatic type leaders... I can't imagine myself not having the filters that they don't have.

**Erik St. Martin:** But you feel like you'd be happier that way, if you just said and did whatever you wanted, and didn't really think about the way it was perceived. You'd probably stress less about what you were doing or saying.

So in your email - we were talking about projects, other things in the Go world that you had some interest in, and you brought up... I think it's called Gitea. Is that how you pronounce it?

**Brian Ketelsen:** Gitea, yeah.

**Joe Doliner:** Yeah, which I guess is a \[unintelligible 00:33:02.26\] of git and tea like the beverage. Yeah, I was browsing around Go projects I want to do and saw that. It looked really cool to me just because it's like an open source GitHub, and I think one of the long-term untenable things in the open source world right now is the fact that GitHub has become the center of mass for open source, and yet it's not itself open source. That just doesn't seem like it can last indefinitely, I don't know. Maybe GitHub is gonna be forced to open source something.

There's also GitLab, and I'm actually friends with the founders there; I'd love to see them eventually upset the open source world. But even though I think that GitLab is great, I just can't not have Pachyderm on GitHub right now, because that just is where people are gonna look for open source projects, and it's kind of like "If you're not on GitHub, you don't exist." I always am just interested to see open source projects that are challenging that.

I actually see in the Google doc here that that's a clone of Gogs, which I hadn't realized.

**Brian Ketelsen:** Yeah, that was a political fork. The Gogs maintainers - there's only one or two of them, and they're not very receptive to changes, to a handful of the community got frustrated and fed up and forked Gogs into Gitea.

**Joe Doliner:** Interesting.

**Brian Ketelsen:** That was last year, yeah.

**Joe Doliner:** Okay. So that is quite endemic of open source in general. That's the advantage that GitHub has - GitHub employees aren't gonna get pissed off and fork GitHub, because I don't think they can do that. But there's pros and cons to being open source, but ultimately I think we're gonna want an open source version of GitHub.

**Brian Ketelsen:** I think so, too. It was funny, I did a live class yesterday for Gopher Academy that was "How to make your first pll request on a Go project", and it was a fun class to do, because I know a lot of people are intimidated, especially in the corporate world, where they don't do a lot of open source work. A lot of big corporate customers that we have are still in Subversion or even other version control systems, so Git is new and the concept of pull requests is new.

So it was a fun class to give, but one of the things that I found to be almost painfully ironic was the fact that Git is this gigantic, decentralized version control system that is a hundred percent centralized, or maybe 99% centralized at GitHub now. The irony behind that, it kind of hit me funny.

**Joe Doliner:** Yeah... Linus made us a nice decentralized version controlled system and GitHub was nice enough to centralize it for us, so that someone could monetize it. The irony runs deep in that.

**Erik St. Martin:** And the hard part about that though is whether it's a new view on a technology, right? Linus developed it as a way of having distributed teams, right? But I think GitHub did put their own little spin on it though. They changed the way developers share code, too.

\[36:02\] I guess there was SourceForge and things like that before GitHub, but it didn't feel as interactive as GitHub does.

**Brian Ketelsen:** It wasn't at all. GitHub made it social, and that's the big difference, I think. That was huge. And again, that was a vision. That was a group of people who shared a vision for the way something should work, and people bought into that vision and it made Git take off. Before GitHub, Git wasn't that popular, let's be honest.

**Joe Doliner:** No, it wasn't. I feel like I've been hating on GitHub a little bit here for being closed source. What they did for the open source community was amazing. I used SourceForge for a project when I was in college, and it was unbelievable. I couldn't figure out how to do even the simplest things. Even with someone helping me I couldn't figure it out, and on GitHub it really does just -- it just works, and it has the features that you want, and it's social... It's one of those things where I can't quite put my finger on exactly what all the differences are that made it work, where other systems had failed.

It's sort of like what the iPhone was for smartphones, to draw a very clichéd analogy. It just got all of the little pieces right and it just all gelled into a very compelling product.

**Brian Ketelsen:** Yeah, I'm curious to see how PachHub comes out for you, because that same concept in a big data processing world, whether you're sharing data or whether you're sharing data pipelines or even just small functions that people can add to their data pipelines, it seems like a particularly untapped market that would be ripe for really engaging lots of people. It's a huge market, there's data everywhere and lots of people doing really crazy things with Perl scripts and Python and Go, and having a centralized place to do that might be the thing that turns the data into the next Git.

**Joe Doliner:** Yeah, absolutely. That really is our very long-term vision. As you said, this is a big problem, and I think a ton of people know that this is a problem. If you go around Silicon Valley, you'll find tons and tons of startups that are trying to be GitHub for data, and everything that I've seen in that vein has sort of fallen short of the expectations that that vision sets. The reason for that is that they're basically just trying to build a UI on top of the existing tools, when you can't really do that because to build GitHub for data, you need Git for data. And that's what Pachyderm is.

So once we've got Git for data and we've figured out how to make that experience good for people, I think we'll have layed a lot of the groundwork for what this GitHub for data can actually look like. But it's also an entirely new set of challenges, and we're gonna have to just grow a lot as a project and as a company to understand how to meet those challenges.

**Brian Ketelsen:** That's awesome. Well, I hate to make it sound like a bromance, but you've won a new follower with your vision.

**Joe Doliner:** That sounds great. If it sounds like a bromance, then I'll take that as a good thing. \[laughter\]

**Erik St. Martin:** I think that it's about time for our second sponsored break, and then we'll jump into more projects and news. Our second sponsor for today is Backtrace.

**Break:** \[39:23\]

**Erik St. Martin:** And we are back, talking to Joe Doliner. We were just talking about Gitea - I think we came to consensus that's how you pronounce it.

**Brian Ketelsen:** Hopefully...

**Erik St. Martin:** Somebody will correct us. So we're moving on to our projects and news segment. Anybody have anything interesting that they ran across this week?

**Brian Ketelsen:** Holy cow!

**Erik St. Martin:** And maybe we can stomp Joe with some stuff he has not seen yet.

**Brian Ketelsen:** There were a lot of interesting things that came out this week. One of my favorite ones is Wuzz. It's at GitHub.com/asciimoo/wuzz.

**Erik St. Martin:** I knew you were gonna say that...

**Brian Ketelsen:** How did you know?

**Erik St. Martin:** Because you had to Google Hangout me to show it to me.

**Brian Ketelsen:** I did, I was so excited about it. It's like Postman, if you've ever used the Chrome extension Postman for doing curl requests, or whatever. It's a beautiful ASCII interface that you can use directly from your terminal, and you can change headers and you can add payloads and make requests and get responses and see them all on the terminal, and it's just one last reason to leave my command prompt. Very nicely done, and it's got two or three thousand stars on GitHub even days after its release.

**Joe Doliner:** Looks like it's at four thousand.

**Brian Ketelsen:** Oh, wow. It's shown up almost every day on the Changelog Nightly email I get that shows the top repos for the day. That's a pretty big deal. So it's a great tool. I love it, I've been using it ever since I saw the first release of it a couple days ago, and I will not stop using that one.

**Carlisia Thompson:** Yeah, I really like it too, because using curl is great, but every time we have to redo a call, we have to navigate through the line to type things out. With that, you just tap over to the different panes and type in your input or remove things... It's great.

**Erik St. Martin:** I guess I don't suffer there, because I have the Vim bash setup so I just use Vim commands to jump around and modify it.

**Brian Ketelsen:** it's pretty nice.

**Joe Doliner:** I love this... I'm always a fan. I really like these types of command line interface GUI type things. They're sort of a nice middle ground between an actual application I have to open and my command line. I also like it because man, have I spent a lot of time staring at the curl man page, trying to figure out what exactly is going on, and having this in just a nice visual form where it will tell me the curl that I want at the end of the day and validate a request, it's just awesome.

**Brian Ketelsen:** Yeah. Yesterday there was a point where I think I had five of these windows open, and each one of them was sending a different request or getting a different response, and it's just so beautiful to inspect all of that at once. It made me happy. I love open source projects that solve a simple problem really well, and make me happy.

**Carlisia Thompson:** I have another project, it's called Ozzo Validation. There is a validation package for Go called GoValidate, which I actually have used, but this one is different because the validation rules don't go together with the struct. With GoValidate you have to do struct tags to specify your validation rules. This one separates everything, all the rules, and lets you have nested validation, and a bunch of other things. It's really cool.

**Brian Ketelsen:** Yeah, I played with this one last night. I like it a lot. Struct tags are really easy to abuse and very hard to maintain in general, but Ozzo lets you just have nice, easy to use functions and remove the craziness from your struct tags. I like that one. I made a mental note that I was probably gonna use that next.

**Joe Doliner:** \[43:54\] It seems like it will have a very good synergy with struct tags, because struct tags are something that happen statically at compile time, if I'm not mistaken. I guess they can have some runtime implications too, but it's stuff that's actually available with a compiler, whereas this is code that runs, so it really gives you these two very good tools for doing validation at the major times you're gonna wanna validate data.

**Brian Ketelsen:** \[laughs\] I could do a whole 40-hour week long class on the awesome ways that you can completely abuse struct tags. I've done them all. It's definitely not just compile time.

**Erik St. Martin:** Yeah, because a lot of the use cases for struct tags actually end up being evaluated dynamically.

**Brian Ketelsen:** Yeah. All of the fun ones.

**Erik St. Martin:** Yeah. But you could use these things with code generators too, so you could generate the code better than \[unintelligible 00:44:47.12\] later by reflection.

**Joe Doliner:** Yeah, that is very true. In fact, you can further abuse struct tags that way if you want to.

**Erik St. Martin:** That seems to be where people end up using reflection a lot, just because they wanna look at struct tags, but... I could be wrong there, too. I try to avoid reflection as much as possible.

**Joe Doliner:** Yeah. Reflection is a great thing in the human world and a pretty bad thing in the programming world.

**Erik St. Martin:** \[laughs\] One thing that I would love to see still in the validation world is somebody needs to compete with Melissa Data. Like, please.

**Brian Ketelsen:** Oh, god... Melissa Data.

**Erik St. Martin:** Yeah, validating names and being able to do...

**Brian Ketelsen:** Addresses.

**Erik St. Martin:** Yeah, addresses, zip codes, mapping phone numbers to zip code, determining gender from names, and things like that. It's still a lot of C.

**Brian Ketelsen:** Speaking of blasphemy, I think that was a 2 GB Docker container.

**Erik St. Martin:** It was ten.

**Brian Ketelsen:** Ten gigabytes? Oh... I remember it took an entire afternoon to push it.

**Erik St. Martin:** This is one of the things that we had to do for our data pipelines - run all the data through Melissa to both standardize...

**Brian Ketelsen:** Yes, standardize, validate, cleanse... Ugh.

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** Anybody who can come up with a modern API for data cleansing and validation that is as fast as Melissa is will make millions of dollars.

**Erik St. Martin:** There was SmartyStreets, but you couldn't do that on premise.

**Brian Ketelsen:** Yeah, and SmartyStreets was fast, too. For a hosted solution, it was really fast. They had some really nice magic behind the scenes that did -- I don't remember... We did a conference call with them; they told us how they did it so fast and it was impressive. But it was hosted, and that kind of killed it for us. You can't let the data leave the data center.

**Erik St. Martin:** I came across an article, for anybody who's interested in the new dep tool that is rumored to become part of Go itself, by Edward Muller who was on the team with Peter Bourgon... Who else was on that?

**Brian Ketelsen:** Sam Boyer...

**Carlisia Thompson:** Jess Frazelle...

**Brian Ketelsen:** Jess and Andrew Gerrand...

**Erik St. Martin:** They were all on a team collectively trying to come up with a solution to the Go dependency problem. He released an article we will put on Twitter and link in the show notes, called Dep 101, that walks through the use of that tool. We actually have Sam Boyer booked for the end of the month, which means likely first thing in March that episode should drop. He's gonna come on and talk about the tool. He wrote all of the crazy algorithms to determine dependencies. It's its own library, so if you're building your own tool, you can use the same library that's behind the dep tool.

**Brian Ketelsen:** \[47:49\] Yeah, you know there's a lot of math behind that... Just think about the dependency chain and the graphs behind all of that - there's gotta be way more math that I'm interested in doing.

**Joe Doliner:** It's a very hard problem too, because if you're not careful, you accidentally wind up solving an NP-complete problem, and then your tool just grinds to a halt. So you have to figure out how to do it very efficiently.

**Brian Ketelsen:** Yeah.

**Erik St. Martin:** GPS, that's the name of the tool.

**Brian Ketelsen:** GPS, yeah.

**Erik St. Martin:** It's the packaging solver.

**Joe Doliner:** This is probably one of the things I'm most excited about in the future of Go. I think the biggest unsolved problem in Go right now is dependency management, and that's sort of a constant struggle for us at Pachyderm - keeping our dependencies in sync with the outside world, consuming changes and then fixing the problems that arise when we do.

**Brian Ketelsen:** I think it's a problem everywhere, though.

**Joe Doliner:** It is. Different languages have solved this to different degrees, and a lot of times people tell you it's a little bit rosier than it is. I hear that life is really good in Rustland - I think they have Cargo, or something... But there's a lot of inherent problems to dependency management that you can't just magically solve, so you have to sort of pick your poison a bit, and then you always have some weird edge cases.

**Brian Ketelsen:** Yeah, I agree. Cargo has done a pretty good job, but the problem I've seen in the Rust world is less Cargo than it is the fast-moving breaking APIs of Rust itself. Even today... I know when I was playing with Rust two years ago you couldn't pick up a piece of Rust code that you found on the internet and compile it ever, because the API changed so much, the packages had changed so much, and it's still pretty bad in terms of breaking changes in Rust, whereas one of the things that I truly appreciate about Go is that Go 1.0 guarantee. Code that was written for Go 1.0 will compile, and they release Go 1.8 next week.

**Erik St. Martin:** And even before Go 1.0 was the Gofix tool, which I was so grateful for.

**Brian Ketelsen:** What a sweet tool.

**Joe Doliner:** Yeah.

**Erik St. Martin:** I only remember one release that I had to fix stuff, and that was the one where they introduced...

**Brian Ketelsen:** Wasn't it the HTTP...? Something in HTTP?

**Erik St. Martin:** No, it was basically when characters changed from int..

**Brian Ketelsen:** Oh, to runes?

**Erik St. Martin:** Yeah, and that was it. Because they couldn't make the determination whether it was really supposed to be an integer or whether it was supposed to be a character, so they kind of left you on your own there.

**Brian Ketelsen:** Talk about Go and old school, Erik and I have had Go in production since like R56.

**Joe Doliner:** Wow!

**Brian Ketelsen:** Long before Go 1.0. \[laughs\]

**Joe Doliner:** I haven't been using Go anywhere near that long.

**Erik St. Martin:** I don't know whether to be proud of that...

**Joe Doliner:** You should be proud of that!

**Brian Ketelsen:** It was pretty awesome.

**Erik St. Martin:** ...or whether we should be shamed for taking that kind of risk.

**Brian Ketelsen:** It worked, it solved the business problem. So another interesting project that isn't really new, but something that the more I think about it, the more it excites me is the Gogland IDE from JetBrains. I'm not an IDE sort of user, but it occurred to me with my Gopher Academy hat on that the availability of a high-quality, commercially-supported IDE can only be a great thing for Go adoption in the enterprise.

I'm very excited to see this one come out. I've played with it a little bit, and it really is high quality. They've got features and code analysis tools that don't exist in the open source world in terms of Vim and Emacs, so I'm very excited to see Gogland come out and be such a well-supported, high-quality product. I think that's gonna be great for the Go world long-term.

**Joe Doliner:** Yeah, I agree, and I think the best example you can see of that is Java. So much of Java's success in the enterprise is the fact that they've got really good IDEs, like Eclipse and JetBrains, that just allow a much wider audience of people to use the languages.

**Brian Ketelsen:** \[51:53\] Any other exciting news and products or projects that we've come across this week? I can't think of anything else. I know there's been a lot, but I just can't think of anything big and exciting.

**Carlisia Thompson:** There is a lot. \[laughs\] I stopped to read a couple newsletters this week and I was amazed by how much stuff there is.

**Brian Ketelsen:** I saw a release of Vim-go Debug. I don't remember who made it; I'm sure somebody on the GoTime Slack channel will have a link to it before I can even finish this sentence... I saw the nice video on...

**Erik St. Martin:** It's Jodosha...

**Brian Ketelsen:** Joe who?

**Erik St. Martin:** Dosha? Jodosha. I actually had a tab open for that.

**Brian Ketelsen:** Oh, nice.

**Erik St. Martin:** I just haven't looked at it yet.

**Brian Ketelsen:** It looks like a pretty good Delve integration for Vim. It's funny, because we were having that conversation this morning in the Go Slack channel... No, it was on Twitter last night. I get lost in all of this social media, but it was on Twitter last night. Somebody was asking... They were really frustrated trying to get Delve to work, and I said "Why? You don't have to have a debugger in order to be a programmer." It was kind of mind-blowing for this person. "I don't? I can be a successful programmer without a debugger?"

I remember Ruby broke me of that. I was so spoiled by Visual Studio in the .NET world and the Visual Basic world, and moving over to Ruby I definitely felt that lack of a debugger, but by the time I got to Go, I had already been broken. My will was gone and my spirit dead, and I don't need a debugger anymore. \[laughter\]

**Joe Doliner:** Yeah, I don't use debuggers at all when I write Go. I use them a lot with C++, but Go has just broken me of the habit.

**Erik St. Martin:** Yeah... Nowadays, because I don't write anything in C or C++ aside from hardware projects - I use debuggers there, and that's mainly because they're hard to test otherwise. It's running on a microcontroller next to you, it's not like you can just printf \[laughter\] So you're kind of forced to step through with a debugger.

**Brian Ketelsen:** Blink three times if your value is two.

**Erik St. Martin:** You know, that actually is the equivalent of just doing a print, just having LEDs and turning them on, and blinking them, that's with serial connections.

**Brian Ketelsen:** Everybody has to have a serial out, yeah.

**Erik St. Martin:** And then the developers don't disable them, and then you win. \[laughter\]

**Brian Ketelsen:** Very nice. We should move on to \#FreeSoftwareFriday because we've kind of lost track of interesting Go news and projects and moved into the esoteric craziness.

**Erik St. Martin:** For anybody who hasn't watched it yet, Francesc did a video on the state of Go, talking about a bunch of stuff in 1.8. We'll drop that in the channel and in the show notes, too. That's good stuff if you haven't seen it and you're interested in all the things that are coming in 1.8. Now we can move on to \#FreeSoftwareFriday, how's that sounds?

**Brian Ketelsen:** Awesome. In the odd circumstance that you haven't heard about \#FreeSoftwareFriday yet, it's our favorite part of the show where we get to shout out to the open source projects, be they Go or not Go, that make us happy, that make our lives easier, because writing open source and maintaining a project is generally a thankless job and it's something that we wanna do to help those open source maintainers remember just how much we appreciate the projects that they make and how much we love the projects that they build for us, and appreciate them sharing them.

Today I'll start off with NATS from APCERA and Derek Collison. I solved a really complex project with NATS this morning that I really didn't think I was gonna be able to solve, and it just blew me away. It took me less than an hour and I spent many hours trying to find other solutions to this problem. I was just so happy to find that solution, and NATS solved it so nicely for me. They're strong members of our community too, and I appreciate that a lot.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** \[56:03\] I'm going to give a shoutout to HashiCorp in general and Vault in specific. I'm working with Vault, and just looking around and reading what people say about it, it's amazing how well done these products are. There are so many good products that are open source and well done, but this time, big shoutout to HashiCorp.

**Brian Ketelsen:** Nice. I love Vault.

**Erik St. Martin:** Yeah, Vault is amazing for managing secrets and keys, and rolling them. HashiCorp in general, with their open source stuff, not only do they build cool stuff, but it's some of the best-documented stuff I've ever seen, too.

**Brian Ketelsen:** What was the project you wrote, Erik? Is that SuperDog?

**Erik St. Martin:** I don't know who named it that, but yeah, I wrote that for one of the big data companies we worked for, because we needed to rotate encryption keys, so I wrote something over the top of Vault.

**Brian Ketelsen:** Yeah, so if you go over to GitHub.com/xordataexchange/superdog - I named it SuperDog, because it had Crypto in it, and it always reminded me of my son's favorite cartoon when he was little, Crypto The Superdog.

**Erik St. Martin:** Now it makes a lot more sense.

**Brian Ketelsen:** See, now it makes sense. It's a wrapper around Vault that lets you do key rotation and really easily use Vault in the development environment without encryption, but it defaults to really strong encryption in production. It's an awesome tool Erik wrote for us, and that's open source.

**Erik St. Martin:** And for those that have listened to prior episodes where I talked about how I wouldn't release my own stuff, and sometimes Brian would just scoop it up and release it for me... \[laughter\] That's a prime example. I was like, "It's not ready, it's not ready! I don't know about this..." "It's on GitHub, and I'm writing a blog post about it."

**Brian Ketelsen:** Sorry... \[laughter\]

**Erik St. Martin:** Joe, did you have a project or a maintainer, anybody you wanted to shout out to?

**Joe Doliner:** Yeah, I'd like to shout out to gRPC, which is something we use at Pachyderm, and a lot of projects in Go are using it right now. I think they're kind of becoming the unsung heroes that are marshaling around all of our APIs, but end users don't really see them much... So I'd like to give those guys a shoutout. I'm not sure exactly who to shout out to as the maintainer, because it's sort of spread across a bunch of different repos, but it's all I think coming out of Google. In general, just the trend of Google letting their developers open source this code and pushing it into the outside world is one that I'd really like to see continue, because I'm definitely benefitting from it a lot, and I think a lot of other people are, too.

**Erik St. Martin:** I'm not sure who maintains it now... It did come out of Google, but for some reason I thought that there were some other companies involved in it now, too... I'll have to look at that. But that's another thing that Brian and I have been following since way before we probably should have been using it in production, as well. gRPC is awesome, it really is.

**Brian Ketelsen:** Truly, yeah.

**Erik St. Martin:** Even in an earlier project that we created where we kind of tried to write our own RPC layer, this would have been amazing. Some of the issues coming up with these nice RPC layers between languages... It's much easier if you're using Go and you're just doing RPC to another Go; it's just easy to go to the standard library and use Gob, but when you're trying to communicate between different application stacks - phenomenal.

**Brian Ketelsen:** Erik's talking about SkyNet, our first really big Go project, and the only good thing that came out of SkyNet was SkyDNS, which is the DNS system that powers Kubernetes now, so... At least that came out of it. The rest of it is long dead.

**Erik St. Martin:** In our defense, there was no Docker, there was no Kubernetes, there was no Mesos... None of that stuff existed.

\[59:59\] My \#FreeSoftwareFriday - I will neither confirm, nor deny that I needed to use this, but hypothetically, if you needed to crack a password or a hash, there's a project called Hashcat, which is really awesome for that. It can use your CPU, it can use GPUs... If you happen to have FPGAs or co-processors, they can use that... And it's ridiculously fast, especially at low collisions, like MD4s and MD5s, like fractions of a second if you've got a good graphics card. Hypothetically.

**Brian Ketelsen:** Erik and I got launched into a graphics card war yesterday, cracking passwords to see who's graphics card was faster... It was fun. We probably shouldn't admit that, should we? \[laughter\] Edit that out, Adam. It didn't happen. Nothing to see here, move along...

**Erik St. Martin:** So did anybody have any other projects or people they wanted to give a shoutout to? Or we wrap up the show for today? I will take that silence as a no.

Thank you for everybody being on the show, especially thank you Joe for coming on and talking to us about Pachyderm. It's just a really awesome project, and I'll encourage anybody who has not played with it to spin up some instances, because we all love big data. Especially saying "big data". Big data in the cloud.

**Brian Ketelsen:** \[laughs\] It's a data lake. You just gotta go swim in it, man!

**Joe Doliner:** A little tidbit I found out recently about the term big data - I did an interview for this French blog called LeBigData... So that term has just been translated one-for-one into French; that's the French term for it, too. I just thought the name LeBigData was hilarious.

**Brian Ketelsen:** That's so non-France, though... They're so protective of their language, they hate English words coming into the French language... There's a society to protect the language from Anglicism. They don't want any English words in French.

**Joe Doliner:** And they must have words for big and data... I mean, I took some French, I know they do. They've got an alternative, but these hoodlums on the internet aren't respecting the society, I guess.

**Brian Ketelsen:** It's terrible...

**Erik St. Martin:** So huge thank you to all of our listeners, and especially a big shoutout to our sponsors for today, Toptal and Backtrace. Show them love, because they're showing us love. Definitely share this show with friends and colleagues that might be interested. You can subscribe going to GoTime.fm. We are @GoTimeFM on Twitter, GoTimeFM channel inside the GopherSlack and if you wanna be on the show or have suggestions for topics on the show, GitHub.com/gotimefm/ping. With that, goodbye everybody.

**Brian Ketelsen:** Erik, there's an important announcement we need to make before we end the show... GoTime FM, its producers and its members and staff will not be responsible if you flood your house with your data lake, so please use Pachyderm carefully. \[laughter\]

**Joe Doliner:** If you flood your house with your data lake, come to our Slack users channel, we'll get you sorted out. It's happened before. This is what we do, we're professionals at this.

**Erik St. Martin:** \[unintelligible 01:03:07.21\] didn't happen. \[laughter\] I'm waiting -- this episode will release in about a week, but after that I'm really interested in all the memes and gifs that come out of that... Being rescued from the data lake.

**Brian Ketelsen:** I think you overestimate our social power.

**Erik St. Martin:** No, I'm putting it up there as a challenge now.

**Joe Doliner:** Well, that's the true measure of an episode... Go ahead, Carlisia.

**Carlisia Thompson:** I was gonna remind that we haven't said our official goodbye.

**Brian Ketelsen:** Oh, we should probably say goodbye then.

**Erik St. Martin:** Well, I said goodbye. You guys were all just rude. \[laughter\]

**Brian Ketelsen:** Well, thanks for coming on, Joe.

**Joe Doliner:** Thanks for having me, it's been an absolute blast. Goodbye to all the listeners... This has been great.

**Carlisia Thompson:** Thank you, J.D., and goodbye everybody.

**Erik St. Martin:** Bye, everybody.
