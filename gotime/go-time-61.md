**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is number 61. On the show today, your hosts are myself, Erik St. Martin, Carlisia Pinto is also here...

**Carlisia Pinto:** Hello!

**Erik St. Martin:** And Brian Ketelsen, who is half alive, half dead...

**Brian Ketelsen:** Half dead.

**Erik St. Martin:** \[laughs\] And our special guest for today -- we actually have two, both working on Cloud Foundry, is Jason Keene and Andrew Poydence.

**Jason Keene:** Hey!

**Andrew Poydence:** Hello!

**Erik St. Martin:** So I guess maybe give a little bit of background... [Pivotal](https://pivotal.io/) and [Cloud Foundry](https://www.cloudfoundry.org/) kind of do a lot of stuff, so do you wanna maybe give a little bit of background about yourselves and the particular areas within Cloud Foundry that you are focused?

**Jason Keene:** Yeah, so I joined Pivotal about two years ago now, and I work explicitly on Cloud Foundry. Cloud Foundry, for people who don't know, is an enterprise platform as a service, similar in style to Heroku, but it's on-prem. You can also run it in the cloud, in Google, or AWS, or whatever. So yeah, that's kind of like what Cloud Foundry is all about.

**Andrew Poydence:** I joined over three years ago, and started on [Loggregator](https://github.com/cloudfoundry/loggregator), which is the log system for Cloud Foundry, where if you have an application running in Cloud Foundry, your `stdout` and `stderr` could be gathered and shipped off to you, as the developer. That's then morphed into \[unintelligible 00:02:22.24\] like a dev ops perception, to where all the different VM's and stuff are shipping their logs as well, and starting to ship metrics as well, so that you can have operators maintain this \[unintelligible 00:02:34.19\] deployment involves hundreds and hundreds of VM's.

**Erik St. Martin:** And just for like a separation of voices, that was Jason who spoke first, and Andrew second, right?

**Jason Keene:** Yeah, yeah.

**Brian Ketelsen:** So Loggregator is written in Go?

**Jason Keene:** Yeah, so I would say a good majority of components in the Cloud Foundry system are implemented in Go now. Cloud Foundry has kind of a history of Ruby, but it went through multiple transitions where components were kind of incrementally re-written in Go... So our load balancer, reverse proxy component is called the Go Router, and is of course implemented in Go; Loggregator is fully implemented in Go... Our runtime is called Diego - naturally, that's implemented in Go, as well. So yeah, a lot of the components in Cloud Foundry are written in Go.

**Brian Ketelsen:** What lead to the moving from Ruby to Go?

**Jason Keene:** I totally wasn't part of the company back then, but... Andrew, do you have any context there?

**Andrew Poydence:** Yeah, so we (as in Pivotal) originally inherited Cloud Foundry from VMware, and VMware had done everything in Ruby. And the DEA, which was the Droplet Execution Agent, was written in Ruby, and it was essentially a giant black box of magic, where everything was written with metaprogramming, and standard Ruby...

\[00:04:07.08\] So we wanted to add quite a bit of functionality, including speed, and being able to implement that in Ruby became insurmountable; there were all the security concerns, there were orchestration problems, so some developers decided "Hey, this would be a great opportunity to re-write this in a way that would actually be maintainable."

Go was picked because of its simplicity, so DEA Go (which is Diego) was born, and it's a massively distributed team; it's got contributors all across the country... I think there's people in Europe contributing to it, and it lends itself to that because it was written in Go and people can quickly jump in, gather context in the part that they need to and start contributing.

**Brian Ketelsen:** Nice!

**Carlisia Pinto:** I would love to talk more about that, actually. What makes you say that -- well, that's my take on it anyway... My take on what you've just said is that because the system is written in Go, it lends itself well for a distributed team to work on - what makes you say that?

**Jason Keene:** Some of the insights I have is that it seems like engineers, no matter what their background is, whether it's a dynamic language or a statically-typed language like C\# or Java, they really feel comfortable in Go. Go is kind of like the subset of -- it's such a small language that it's a subset of like the syntax and what is there is kind of like approachable by many different engineers from many different languages. That's something I've kind of noticed.

We have people on our teams that have backgrounds in Java, people on our teams that have backgrounds in Ruby, or Python, and they're able to pick up Go really fast.

**Andrew Poydence:** The counterpoint or counterexample would be I worked on a Java project for Cloud Foundry, and we had several frameworks... And when you joined the team, you had to get up to speed first with all the frameworks, and then which components use what frameworks where. So before you could even be successful in contributing, you had to kind of gather all this intimate knowledge about where you wanted to contribute and how that framework interacts with what you were going to do.

With Go, since a lot of these things aren't written in frameworks, you can simply drop in, look at the tests that were written - everything is well tested - and get enough context with what you need, add your addition, make the PR, see that the tests pass, and feel confident that what you actually added will get merged and will be correct. That is a very great experience, and it's enabled a pretty large community across the globe to help us grow Cloud Foundry.

**Carlisia Pinto:** That is something we take for granted, isn't it? We don't usually use a framework and we don't have that extra thing to learn... Even though, for example, people who come from the Ruby on Rails background -- when people learned Ruby, they learned Ruby via learning Rails. The exposure to Rails was what exposed them to Ruby. But if you go a bit further back and you worked with Java (or even PHP has different frameworks), you really have a bunch of options and who knows what project is going to use what, and we don't have to go through that.

**Andrew Poydence:** It lends itself to, I think, enabling people to quickly help without all this extra \[unintelligible 00:07:56.16\] and we're not switching between frameworks all the time, much like maybe on a Javascript project.

**Jason Keene:** \[00:08:02.00\] Also, the standard library is very high quality and it's almost intuitive. Once you learn one standard library package, the conventions, the intuition you develop from learning that package translates into most of the other packages in the standard library, so that also helps with getting people up to speed.

**Carlisia Pinto:** So let's continue on this thread - I'm curious to know, for Loggregator do you make use of an external package, or are you doing everything just mostly using the standard library? Do you use an external package that has to do with logging?

**Andrew Poydence:** We use [gRPC](https://grpc.io/) very heavily for our transport, but we've kind of homegrown the metrics and logging concept. We have something called envelopes, which are actually protocol platform messages, that encompass a log message as like textual information, or a counter-event, or a gauge metric, and so we enable components or applications that can then send these things. An application is, at the moment, tied strictly to `stdout` and `stderr`, and then those things get packaged up into these protocol buffer messages.

But we're not actually using anything off the shelf, per se. In fact, Loggregator was incepted I believe in 2013, so it's pretty old, and a lot of our stuff around that has to kind of deal with the fact that we have this very old Go project where -- Go wasn't as heavily adopted back then, and there were a lot less tools available to us, and we had to kind of think about how would Go want to approach this. In fact, we were at that point integrating only with the DEA, which again, was written in Ruby. So we kind of had to make these interfaces clean, so that could be consumed and used from any of the different languages.

**Brian Ketelsen:** gRPC is a great reason to do that.

**Andrew Poydence:** Exactly.

**Carlisia Pinto:** I was gonna ask, do you find yourself having to rewrite stuff that you wrote way back in Go?

**Jason Keene:** Yeah, I would say a large portion of the Loggregator Go source code has been at least heavily modified, if not rewritten at this point. It's an incremental approach that we've had over the past two years. As a need is put on us from a product perspective or an engineering perspective, we then decompose what's there and try to bring new ideas and new implementations into the project.
We've done that with several of the components, so yeah, I'd say we've done a good amount of rewriting, but it's rewriting that's informed by a lot of different variables, it's not just engineers wanting to rewrite something.

**Carlisia Pinto:** And these variables, can you give us an idea...? Because it's very interesting to talk to somebody who has been working with one particular project for so many years, and we're always trying to take insights for people who are listening that they can pay attention to and maybe use in their own work, so I'm curious to know what sort of variables, what sort of ideas are guiding rewrites, because obviously you're saying you're not just refactoring for refactoring's sake, which is great.

**Jason Keene:** \[00:11:47.13\] Yeah, I guess I could give one of the examples of something we've rewritten -- we switched over to using gRPC well over a year and a half ago, and that was kind of motivated from an engineering perspective... Like, we wanted to reduce the cost of us maintaining our own custom messaging. Previous to using gRPC, we had our own custom TCP framing, and TCP batching, and UDP code for managing messages... We also used \[unintelligible 00:12:21.17\] websockets... We had this hodgepodge of different transports, so from an engineering perspective we wanted to do this rewrite, and what kind of motivated that was security - that was one of the major motivating factors.

gRPC gives us mutual auth TLS, which is an awesome feature to have for doing secure communication between different components, and we get that as a feature, and as part of that, we get to also reduce some of the technical debt on the project and do a rewrite of our message transport.

**Carlisia Pinto:** Very cool.

**Andrew Poydence:** One of the other big drivers has been the growth of Cloud Foundry. Before, Cloud Foundry probably was only handling a few dozen apps at a time, and now you have larger installations of Cloud Foundry that have upwards of like 250,000 app instances running, which means all those apps are trying to stream data through Loggregator, and we noticed that some of our previous code just wasn't up to the task.

So as these larger deployments have come out, we wanted to be able to handle all that log load, so we've had to invent a few things around that and better understand what that meant to handle that many messages a second, and large dynamic payloads, and just many, many consumers that are trying to get all those payloads. So a lot of stuff has just been slowly vetted out by having Loggregator installed in so many different companies' data centers...

**Erik St. Martin:** That's actually a really interesting thing... So what are some areas that you ran into, like you kind of alluded to, where you had to invent some things to solve for problems that you didn't experience without having that additional scale? I'd be really interested to hear about some of those things that you ran into and the things that you had to create to work around those issues?

**Jason Keene:** So the big\[unintelligible 00:14:31.28\] we ran into first was Loggregator has an agreement with app developers that when you log a `stdout', it won't be slow; in fact, it won't push back at all, it should be free. So Loggregator has the task of ensuring that while we do our best to push messages through this distributed network system, we will not push back on the application. So we use channels, obviously, for distributed data; Go has those and they're great. But what we've noticed was as you write to a channel and that channel can't receive any data because there's downstream latency, we want to not drop the new messages, we'd rather drop the old messages. So now you have some kind of complicated thing, instead of just your normal writing to a channel with a select and a default, because those would drop the new messages... So we ended up making something called a [diode](https://github.com/cloudfoundry/go-diodes), which essentially was a ring buffer that operated purely on atomics, and would therefore prioritize new messages over old ones. This enabled us to have buffer data, allow for network latency and recover from that, while ensuring we didn't push back on producers, and still trying to get the most amount of logs we possibly could to our consumers.

\[00:15:59.10\] So we went and ripped out a lot of channels that we previously had before, to enable less buffering, fewer goroutines per connection, and a little less latent in the end.

**Carlisia Pinto:** This is open source, isn't it?

**Jason Keene:** Of course.

**Andrew Poydence:** Cloud Foundry is open source. If you go under [github.com/cloudfoundry](https://github.com/cloudfoundry), all the components of Cloud Foundry are over there and you'll find these libraries that we're talking about under that URL as well.

One of the things that came to mind when you were mentioning what type of technical limitations we ran into that we had to kind of step back and think of ways of getting around was we used to use [websockets](https://en.wikipedia.org/wiki/WebSocket) pretty heavily between certain components, and while you can multiplex multiple messages, multiple streams of messages across a single websocket connection, it's not typically the typical use case... So a lot of our legacy code that uses websocket protocol was dedicating a single websocket and thus a single TCP connection for every single stream. Naturally, that's gonna limit your ability to scale.

That was another huge win that we had with gRPC. Since it uses HTTP/2, you get pretty much for free multiplexing on multiple streams across a single TCP connection. So we did a little bit of work around that. We got the multiplexing for free, but then we also noticed that sending all of our streams over a single connection - it actually saturates that connection... So we created pools of connections, and load balancers to kind of manage that, so that we can have many streams going over many connections, and just have it all work efficiently.

**Carlisia Pinto:** Very cool.

**Erik St. Martin:** So now are you using your new diode concept throughout other portions, or is this mainly kind of limited to just Loggregator?

**Andrew Poydence:** Recently we've had some downstream consumers of Loggregator start to use it, so... Google maintains a [Stackdriver Nozzle](https://www.cloudfoundry.org/the-foundry/gcp-stackdriver-nozzle/), which is a component that reads off of our Firehose, which is like all the data coming out of Loggregator, and we're pretty aggressive about killing consumers that are reading slowly. If we detect that you're not reading fast enough over a certain period of time, instead of dealing with the costs in our system, we just close that connection and let you know that you've gotta reconnect...

So they were seeing a lot of these reconnect events and they were panicking on these reconnects, which is a little bit inefficient... So we kind of had a conversation with them and introduced them to the diodes, and they've been able to use that to prevent themselves from getting disconnected by the Loggregator system.

I'm trying to think of some other projects I've noticed recently who adopted it...

**Jason Keene:** There's a few closed source ones in Pivotal that use it pretty heavily...

**Andrew Poydence:** Yeah. I think there was another open source project recently, but it doesn't come to mind. Yeah, it's mainly kind of the Cloud Foundry ecosystem, Pivotal stuff so far.

**Jason Keene:** It's written in a way though that it certainly could be used anywhere.

**Andrew Poydence:** Yeah, we try to -- the Cloud Foundry projects... Or at least, I'll speak for Loggregator - Loggregator hasn't had a really good history of extracting useful things for broad consumption, so the diodes is like kind of one of the first projects that we started where we extracted this idea out, so that other consumers can use it.

**Carlisia Pinto:** Now, I'm reading here that one of your project goals is to have _an opinionated log structure_... So talk to us about that. At the very least -- I've never used it, so I'm guessing it's to offer struct to a logging, and why is that the best goal for this project?

**Jason Keene:** \[00:20:06.19\] We took the approach that there's textual logs, like an application can emit just normal, standard output stuff, and then there's metrics, such as counters, or gauges, timers... Much like you'd find in a project like [Prometheus](https://prometheus.io/). So what we did was we decided "We'll make this [protocol buffer](https://developers.google.com/protocol-buffers/) messages, and have them be very strict about what they'll accept", and the idea would be any producer has to put those fields in there, and that would enable then the consumers of Loggregator to know what they could get.

That has enabled a lot of nice things, because all of a sudden these very generic consumers can come in - such as the Stackdriver one - and not know very much about Cloud Foundry as a whole (this massive system), and yet still can pull in and do very interesting things with the data. So it's been a nice way to document how metrics flow through Loggregator without having to dig through massive amounts of readme's, and go through different components as to what they're trying to accomplish... It enables the compiler, essentially, to do more work for you as well. You can't accidentally send some invalid protocol buffer message; that will be rejected.

**Carlisia Pinto:** How many fields are there?

**Jason Keene:** It's pretty limited.

**Andrew Poydence:** Yeah, so there's a repo called [loggregator-api](https://github.com/cloudfoundry/loggregator-api), which is just our .proto files that we use to generate our clients and everything off of. If you wanna take a look at it... It's pretty conservative. We have a v2 API that started on about a year ago, and that v2 API kind of took all the lessons that we learned from previous iterations and kind of distilled the core set of things that we needed in the envelope and in the individual messages.

**Jason Keene:** Our hope is that we have perhaps distanced ourselves away from being specific to Cloud Foundry. There's a lot of neat things happening everywhere - for example [Kubernetes](https://kubernetes.io/) - and what we don't want is to have the Loggregator system be so opinionated that it would only be useful within Cloud Foundry.

Loggregator is doing its best to be a distributed logging and metrics system for several distributed systems, and not just Cloud Foundry. We had our original iteration where everything was specific to Cloud Foundry; every metric type was something that only Cloud Foundry could ever care about, and the consumers that would only ever care were at Cloud Foundry. What we noticed was other interesting distributed systems were coming up, such as Kubernetes, and Loggregator was in a technical position where it could service these things, but we were so opinionated about Cloud Foundry we really worked putting ourselves in front of that.

We decided to move our API more towards a generic place, and have generic metrics with a subset of the information we previously had, that would be useful therefore for any different number of distributed applications, and enable distributed applications to use Loggregator to optimize their apps, or maintain them, do DevOps work and just ensure that iterations are happening.

Pivotal's main focus is to enable developers to do interesting things, so Cloud Foundry wants to enable developers to do hard, complex distributed systems, and maintain them, and iterate on their software quickly, and have confidence that their stuff is actually working, so they need visibility in that.

**Brian Ketelsen:** \[00:24:03.00\] Now, here's kind of a random, off-the-wall question - how complicated is a Cloud Foundry install? Is it something I can put on my laptop, or do I have to have a minimum number of VM's to run it, or a minimum number of physical nodes?

**Andrew Poydence:** It scales down pretty well. There's a project called [Bosh Deployment](https://github.com/cloudfoundry/bosh-deployment) -- we use Bosh to manage the Cloud Foundry deployment. So you can run Bosh deployments locally on your laptop. We do it on our Linux orchestrations here for development purposes we'll deploy at Cloud Foundry. Granted, it's a trimmed down version of Cloud Foundry; it's not completely, highly available... But you can run that on your laptop as long as it can run a decent-sized VM.

**Jason Keene:** Yeah, there's a project that's called Bosh Flight, which essentially -- I mean, I don't think it's even called that anymore, but we still...

**Andrew Poydence:** Bosh Deployment is the new project name for it, and they have a virtual box kind of CPI for that, so... CPI is a cloud provider interface, which is a Bosh term for basically how Bosh speaks to a cloud API.

**Erik St. Martin:** I don't know why I just caught that, like... Like, you're saying Bosh, but when you say it with deployment, it sounds to me like "botched deployment." \[laughter\]

**Jason Keene:** I've never heard that, that's perfect.

**Andrew Poydence:** That's funny. \[laughs\]

**Jason Keene:** I think Bosh was actually supposed to be - and I think we all have our giggle and opinion about it - [Google's Borg](https://kubernetes.io/blog/2015/04/borg-predecessor-to-kubernetes)++, so it's like Bo(r++)(g++).

**Andrew Poydence:** It was conceived in a time when -- this was well before containers were popular or even known about generally... So yeah, it operates more on a VM type concept, so it's good for doing that deployment. It's similar in character to maybe like a Terraform, but it also has some monitoring abilities; it has an agent that runs on all the VM's, it manages your stem cells, which are the images that the VM's boot up with, for security reasons; it manages the packaging of the software that gets installed onto the VM...

**Jason Keene:** It's a handy tool.

**Andrew Poydence:** Yeah, it's incredibly handy.

**Carlisia Pinto:** Now, for someone who has been working with this project for such a long time, I would like to ask the question - if Go had _Generics_, would it be more useful to you? Do you miss not having that, or do you get by without it? Would you recommend that the standard library adds it?

**Jason Keene:** Yeah, it seems kind of like a trolly question... \[laughter\] I kind of have the opinion that if Go had _Generics_, it would make implementing some of the data structures that we've exposed - for instance the _Diodes_ - much more natural. I don't know what your opinion is...

**Andrew Poydence:** We kind of get around it. For example, the diodes operate on unsafe pointers, but when we bring it into projects, we immediately make a wrapper around it with the actual type that we want to be in the diode, so that way we get the benefit of the compiler. But that's something that is kind of hand rolling maybe like a C++ template, or something.

**Jason Keene:** Yeah, and the wrappers for something like diodes are easy to generate, just kind of boilerplate code. \[unintelligible 00:27:38.13\] Like Andrew said, we kind of worked around it. I'm happy with the pattern that we've adopted to make our stuff generally usable, but it doesn't mean that you have to use things like interface{} (empty interface) and unsafe pointer... But we kind of contain them in a small box, so that it doesn't bleed out into the rest of your program.

**Andrew Poydence:** \[00:28:03.27\] And I think that's been really key for us, again, on this massively distributed team. I think if you let your unsafe pointers or interface{} leak too far, again, if someone were to just drop in the middle of your codebase and try to help, they wouldn't have the compiler helping them there, like "What is this interface{} ? What does \[unintelligible 00:28:22.27\] How am I supposed to know?"

**Jason Keene:** The casting of unsafe pointers is not always intuitive. We've had situations in the past where sometimes putting an extra * - the compiler doesn't tell you "Hey, this is referencing something you shouldn't dereference...", so yeah...

**Carlisia Pinto:** Did you make a proposal to the Go team?

**Jason Keene:** Implementing _Generics_ is well beyond my expertise...

**Carlisia Pinto:** No, because they were soliciting use cases. Not a proposal for how to implement, but a proposal like "Here's my use case." Because they were soliciting it, I don't know if you know...

**Andrew Poydence:** I wasn't aware of that...

**Erik St. Martin:** I think before approaching a solution or something, they really wanted to be well aware of the types of situations that people were looking to use _Generics_.

**Carlisia Pinto:** It sounds like you guys have a good use case.

**Andrew Poydence:** Yeah, we could throw it out there. Go 2 type stuff.

**Brian Ketelsen:** It's my Go 2 complaint about Go... I don't want _Generics_, just for the record. I like my Go readable, and I think _Generics_ will make it worse.

**Andrew Poydence:** Coming from a C++ background, I'm getting nervous... It's those nightmares when I have something that boosts angle brackets (<,>) - pages of compiler errors...

**Carlisia Pinto:** I think it could potentially make life easier for 20% of the users, and harder for 80%, so I'm not crazy about it either.

**Erik St. Martin:** Yeah, I'm not saying that there aren't use cases for it, particularly use cases that would be much easier with it, but I don't find working around it overly difficult... But maybe I don't work in the spaces where it would be the most useful. So I'm not against it, but I'm not like "The language is broken without it."

**Carlisia Pinto:** Yeah, I like the fact that they were soliciting use cases, so they can get everything together and make a decision... Because I don't know every single project out there, right? I mean, we don't know.

**Jason Keene:** Yeah, I'd caution listeners, if you are gonna use like interface{} or some of these other generic types, to approach it in a similar way that we approached it - contain it within a small area of your codebase, so it doesn't bleed out to the rest of your system. I can drop a [link](https://github.com/cloudfoundry/go-diodes#example-creating-a-concrete-shell) in the show notes for how we approached it, just to let people kind of get a feel for what we've done.

**Carlisia Pinto:** That'd be awesome.

**Andrew Poydence:** Yeah, we've made a few libraries and I think we've run into this a few times where it's like "I guess we'll make it interface{}" and then try to do our best to make sure we don't use it as that, but... Again, it's so easy to work around. I wouldn't be driven to say "Yeah, the language is broken", I'd agree with that, and it lends itself--

**Jason Keene:** I'm definitely appreciative of the consideration that the core team has when it comes to _Generics_, because like you were saying, we don't wanna be in a situation where 80% of the engineers are having to deal with this frustration of massive compiler errors that are nonsenseful, just to serve a niche of 20%.

**Erik St. Martin:** And the ways to work around it are kind of fun, too. Brian here is like the king of code generation.

**Brian Ketelsen:** \[00:32:03.21\] Hahahaha!

**Andrew Poydence:** We could use some of that, I think. We've got one library that does its best to generate a tree traversal for you, which was a very interesting problem, but generating code is hard...

**Jason Keene:** Yeah, especially code that mortals can read.

**Brian Ketelsen:** That's what makes it fun, it's like leveling up your code skills... When you get into code generation that's generating code that's generating code, then you're hardcore. \[laughter\]

**Andrew Poydence:** Then you know you've made it to the next level.

**Erik St. Martin:** That might be too many levels deep for me. It's like, "Wait, so does this code generate the generation code, or the generated code, or...?"

**Andrew Poydence:** It generates itself...

**Jason Keene:** Yeah, it's like a client that just generates itself somewhere in the middle there...

**Erik St. Martin:** I guess this is not new to you - you've got GCC and stuff that bootstraps itself, right? Where it compiles itself to compile itself...

**Andrew Poydence:** Insane.

**Erik St. Martin:** ...so that the new version of GCC's compiler has the optimizations that came with the new version of GCC... It's just kind of funny.

So you mentioned - in the docs and stuff, too - gRPC, that you guys are using that, and you kind of went through some experiments with other forms of messaging. How long ago did you land on gRPC?

**Jason Keene:** We picked up gRPC shortly after 1.0, gRPC Go was announced. It was in the news and we were like "Oh, maybe this will serve our use case." Previous to that we were kind of looking at ZeroMQ, nanomsg, Mangos, this type of messaging frameworks. What really sold us on gRPC - it was like a multitude of things, but the fact that there was a really solid native implementation in Go was a big win; we didn't have to use cgo to talk to some C library to do our messaging.

Again, we kind of started playing around and we noticed how easy it was to get mutual auth TLS off the ground... It's a really, really simple API that they have. You just dial up and provide your certs and keys, and everything just works.

Previous to that, we were kind of hand rolling some of our own mutual auth TLS, and while the TLS library and standard library is pretty solid, there's some kind of gotchas and rough edges, so gRPC kind of handles all that for you.

We were kind of already using protobufs, so it was a natural fit.
With gRPC you generate all of the clients for all the different languages that it supports, so that was like a huge win; we wouldn't have to maintain a lot of clients... They would just be generated.

I think that's about it. There were some other reasons why we kind of adopted it...

**Andrew Poydence:** Yeah, it's also really good at upgrade paths... Cloud Foundry has to be HA above all things, so upgrade paths are always something that we're considering. Every change we make, we'll talk about "How will this upgrade from a previous version? How long can we keep this thing before we can deprecate it?" or "How long do we have to keep this thing before we can deprecate it?" gRPC does such a solid job at upgrading; even when it has its own updates it does, it considers that as well, and it had kind of that backing, which was huge.

**Jason Keene:** That is something that when you're using gRPC - and protobufs, for that matter - you kind of have to consider your upgrade paths. It's something that you have to spend some time considering; it's not something you get for free... But it definitely provides a clear path for you, and it's something that you can tell that people who created gRPC and protobuf, it's something that they are concerned about, having these smooth up paths.

**Erik St. Martin:** \[00:36:10.07\] Right, because when you get to the actual protocol that things are communicating over, it's extremely hard to change it, because then everything basically has to come down and back up at the same time, unless there's kind of well thought out upgrade paths.

**Andrew Poydence:** Yeah, that's not a thing in Cloud Foundry. Loggregator has components and agents that run on every single VM in Cloud Foundry, so... There's customers that have deploys that go for days, because they're rolling so many VM's, so your VM that rolls from the beginning has to still be compatible with the servers that will get rolled for a couple more days, type of thing.

**Brian Ketelsen:** That's crazy... Multi-day deployments?

**Jason Keene:** Yeah, unfortunately there are some war stories of multi-day deployments, with massive Cloud Foundry deployments.

**Andrew Poydence:** Yeah, just enormous data center upgrades, and stuff.

**Erik St. Martin:** I feel like I've gotten spoiled. I was trying to deploy a Kubernetes cluster with a single command the other day and I was getting frustrated it was taking minutes... \[laughter\]

**Brian Ketelsen:** This deploy took eight minutes, it's a bug! \[laughter\]

**Jason Keene:** I mean, some operation teams appreciate the slow, methodical approach. They're not as impatient as us developers; they prefer a stable system that upgrades cleanly and without incident, than a system that upgrades quickly, with massive incidents.

**Brian Ketelsen:** Operations people... \[laughter\] How dare they want stability?!

**Andrew Poydence:** It's tricky.

**Erik St. Martin:** We could have like a crazy show if we just had an ops person on, and we just fought back and forth... \[laughter\]

**Brian Ketelsen:** Fight me! Run fast, before I break things! Then that would be the title of our show.

**Jason Keene:** Yeah, it's amazing that there's still kind of two camps... Like, even with DevOps being a thing, there's still people who kind of fall within two camps. The question that I always ask people is if you had a production system that has, say, a memory leak, and restarting the process will fix the problem, but you will lose all forensic evidence in order to debug the issue, what do you do? Do you restart the process and resolve the issue, or do you poke around and get heap dumps and stuff like that...? And usually, you'll fall within one of the two camps; either you'll be like "No, we need to debug this" or "No, we need to restart it and \[unintelligible 00:39:00.26\]

**Erik St. Martin:** Well, I think you left out what impact it's having on the customer, too...

**Jason Keene:** Yeah, obviously there's a lot of variables there.

**Erik St. Martin:** Yeah, because if you could take the server out of rotation and let the other nodes handle it while you poke at it, then...

**Jason Keene:** Yeah, this is more like a hypothetical situation. I'm sure many of the people on the call have been in situations in prod where you've gotta bring back to service... But it's kind of a hypothetical situation where you have to make that choice, either or.

**Erik St. Martin:** Well, usually a lot of us developers - we get an e-mail that they've already restarted it... \[laughter\] And you're like, "But, but..."

**Andrew Poydence:** And then you're instructed to go fix the problem.

**Erik St. Martin:** Yeah, you're just combing through code, looking for anywhere that could leak memory...

**Jason Keene:** \[00:40:00.04\] "Something happened in prod... We don't know what. Fix it."

**Erik St. Martin:** Yeah. I mean, I think we're still trying to find the perfect balance between ops and dev and things, right? And I think a lot of the initial motivation, at least from my standpoint, for the whole DevOps movement is to understand how your code would be deployed and to help deliver your code as a full-fledged product, with the tools that the operators need to support it, and the documentation for how to handle these scenarios, how to figure out when it needs to be restarted, things like that... Instead of just taking this new build and being like "Here, you make it live." But whether developers go full-fledged operations, I don't know whether that's the right mix; I think we're still figuring that out, it's still early... But I think it does make sense for us to have some operations knowledge.

**Andrew Poydence:** We on Cloud Foundry have embraced that pretty heavily through [Google's SRE](http://www.oreilly.com/free/site-reliability-engineering.csp?cmp=tw-security-books-videos-lp-promo_srebook_lp) that O'Reilly released not too long ago...

**Brian Ketelsen:** Good book.

**Erik St. Martin:** Yeah, I still need to read it.

**Andrew Poydence:** It's a very light read.

**Erik St. Martin:** I've got some playing time this weekend, so maybe I'll get to it.

**Andrew Poydence:** It's fantastic, though. There's a lot of things that are common sense, but it's nice to formalize it, and then as a team you can kind of use it as the decision maker - "How should we approach this?" or "How would [SRE](https://en.wikipedia.org/wiki/Site_Reliability_Engineering) have done it?"

**Jason Keene:** Yeah, it gives us like a shared vocabulary now, so we're referencing the same concepts, versus before you kind of had to build up that shared vocabulary.

**Andrew Poydence:** Right. An interesting thing that we have here at Pivotal working on Cloud Foundry is not only are we running in hundreds of different data centers, completely different configurations everywhere, but we also have our own massive Cloud Foundry running [run.pivotal.io](https://run.pivotal.io/) that we're on call for. So we often will push something out there, and we'll know pretty soon if what we did was a big mistake or not, because our local Cloud Foundry that's running this has running thousands and thousands of app instances all of a sudden. If you've got a memory leak, like Jason described, then you're getting paged in the middle of the night and you see that you have some kind of linear climb in your memory usage across the servers, and he's like kind of wanting to keep the cloud up saying "What do you want us to do?" So that's kind of always an interesting thing, how quickly you can have a bad decision come back and be validated as such.

**Jason Keene:** Speaking about operations stuff, we're all software engineers, so we don't really get into the operations stuff very heavily; we are on call for our production environment, but... Recently, as part of our partnership with Google, we went to a CRE, which is their Customer Reliability Engineering program; we went through a review for Loggregator, and there's a lot of operational patterns... Some of the things that I've heard [Kelsey Hightower](https://twitter.com/kelseyhightower) speak about, it's like sympathy for your operators. So they came to us with some of these patterns that they wanted us to add to Loggregator; it's stuff that we maybe have thought about tangentially on occasion, but it really pointed it out to us - these are things that you should have, to have a certain amount of nines of reliability.

**Andrew Poydence:** [The nines of reliablity](https://en.wikipedia.org/wiki/High_availability#%22Nines%22) have been really nice. How to measure success on a distributed system is kind of a tricky concept. It can seem like it's working to you, but then you have a different consumer that they're not getting what they expect at all, and how do you measure how things are going...?

**Erik St. Martin:** \[00:44:00.22\] Yeah, and then I think you have the flipside of it, which is anytime you give somebody a metric on which to measure something, it's "Well, it has to be five nines. There has to be 100% test coverage...", you know?

**Andrew Poydence:** Right...

**Jason Keene:** Yeah, that's one of the things the CRE guys kind of pointed out really early - setting your SLA and SLI at the right level. Having four or five nines is not necessarily something you should strive for. Having a lower level of reliability gives you more flexibility on how fast you can iterate, and it has other advantages. It's kind of like setting the right expectations and meeting those expectations.

**Erik St. Martin:** Then I think when you talk about reliability or security or any of those things, it's always tradeoffs, right? You can't focus all your time and money on all the areas, there's just not enough time. You have to look at what the likelihood of this failing or being compromised is, and then you have to look at what the impact of that happening is, and then that's how you categorize the things you spend the most time on.

**Brian Ketelsen:** The SRE book is such a good read for that, because they talk about having a budget. All of those nines are just digging into a budget. You've got a budget for downtime, how are you gonna use it?

**Jason Keene:** As a streaming service, we kind of measure things a little bit differently than a typical request/response type service. We measure how many nines we have of message reliability, which is basically how many messages we drop. So we don't give hard guarantees of durability or delivery. We wanna make sure we're doing our best at that, but it's something that under certain situations we will drop messages. That's one of the primary metrics that we look at for our "error budget." These aren't actually 500's that you're getting back from a server, these just happen to be missed messages.

The way we test that is we have a pretty aggressive black box testing of our system, so we have various environments that are running our software, and then we kind of probe it from the outside, we ask for a specific quantity of messages, and based on how many we get, that gives us our amount of messages that we've lost. We run that constantly on these different environments to get a signal of a message loss.

**Erik St. Martin:** I think we've got a few minutes left, so we should probably jump into projects and news and \#FreeSoftwareFriday and all of that good stuff...

**Brian Ketelsen:** It was kind of a quiet news week, wasn't it?

**Erik St. Martin:** Yeah, I don't know about a whole lot of news. Mostly product releases, and stuff like that. [Heptio](https://heptio.com/), if you are a Kubernetes and Envoy fan - they just released something called [Contour](https://github.com/heptio/contour), which basically allows you to use Envoy as the Ingress Controller, which is super cool.

**Brian Ketelsen:** Written by the legend, [Dave Cheney](https://twitter.com/davecheney).

**Erik St. Martin:** Yes.

**Brian Ketelsen:** Legend.

**Erik St. Martin:** He was pretty excited about it, too.

**Carlisia Pinto:** I forget that Dave Cheney is at Heptio.

**Erik St. Martin:** Yeah, that was a kind of exciting couple weeks, where everybody was trying to guess where he was going.

**Brian Ketelsen:** \[whispering\] Microsoft.

**Erik St. Martin:** That would have been cool.

**Jason Keene:** It's a great attractor in the Go community... Everyone's gravitating to Microsoft.

**Brian Ketelsen:** I hear all the cool kids are going there.

**Erik St. Martin:** Maybe we can get a job there.

**Brian Ketelsen:** I'm not good enough.

**Erik St. Martin:** So maybe we can keep our job then... \[laughter\] Another cool project I came across is called [GoTTY](https://github.com/yudai/gotty), which I've only played with a little bit, but it seems super cool, where you basically can share your terminal, but through a web page, so everybody else kind of gets to hit a website and live-view your terminal.

**Brian Ketelsen:** \[00:48:07.00\] GoTTY is really awesome, I've used it to back a couple projects that I wrote this spring, and there's a lot of power to it. You can pipe it through to just about anything. I've had mine piped through to Docker, so that when somebody hit a web page, it would automatically spawn a Docker container and drop them into a shell. So you had web-based containerized shell environments for everybody using GoTTY.

**Erik St. Martin:** I didn't even realize that you had used GoTTY for that.

**Brian Ketelsen:** I've touched everything, Erik. You should just accept that.

**Carlisia Pinto:** This is really cool. Very useful.

**Erik St. Martin:** Another one that I came across is called [G.E.R.T](https://github.com/ycoroneos/G.E.R.T), and I think we mentioned this before; I think it might have been a little earlier on... But it seems to be a port of the Go runtime to run directly on ARMv7 system on the chips. I haven't got to play with this yet, but maybe when I get back from traveling, I will find an ARM7 device and try to do this.

**Brian Ketelsen:** It sure is looking good, though.

**Erik St. Martin:** Yeah, I mean they already have support for most of the serial protocols and things like that - [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) and [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter)... I don't know whether I saw [I²C](https://en.wikipedia.org/wiki/I%C2%B2C) supported yet, but that will be really interesting...

**Brian Ketelsen:** Is that how you say that, "I squared C"? I always read "I two C", but it's because I don't know what I'm doing.

**Erik St. Martin:** Yeah, I think people say it both ways, but I think it's technically "I squared C."

**Brian Ketelsen:** Nice. Today I learned.

**Erik St. Martin:** We need the "The more you know..." \[laughter\] Another cool tool that I came across is called [GoScan](https://github.com/timest/goscan). It basically scans the IPv4 subnet range and uses SMB and things like that to discover hostnames. I've actually been noticing more and more security tools written in Go, which is really cool.

**Brian Ketelsen:** When your worlds collide...

**Erik St. Martin:** When my worlds collide, yeah, because most of the time when I play with security tools, they're written in Python, or very bad C... That happens, too.

**Brian Ketelsen:** Isn't that kind of ironic, that people write bad C for security tools?

**Erik St. Martin:** \[laughs\] That is true. So another cool one that I actually just thought today was [GoMatcha.io](https://gomatcha.io/). It seems to be a project that has bindings for Objective-C and Java, so that you can write your mobile apps completely in Go... And I have not tried this yet, so if you have, please find me and tell me whether you like it or not, so that I can build something with it. I'll let other people be the...

**Brian Ketelsen:** Yeah, somebody else go try that. We have a couple big conferences coming up this month - [dotGo](https://www.dotgo.eu/) and [GopherCon Brazil](https://2017.gopherconbr.org/). I'm getting on a plane in 21 hours for dotGo.

**Erik St. Martin:** Is anybody here going to dotGo?

**Jason Keene:** No...

**Andrew Poydence:** Not really.

**Erik St. Martin:** Brian is, he's speaking, but I didn't know if anybody else is -- yeah, you're speaking, right?

**Brian Ketelsen:** I am.

**Erik St. Martin:** And then we have the following week - or maybe it's two weeks later; mid-November - [GopherCon Brazil](https://2017.gopherconbr.org/), which I know Carlisia will be at... She wouldn't miss it for the world.

**Carlisia Pinto:** Yeah... \[laughs\] I leave on the 14th, and the conference is that weekend. And I'm speaking.

**Erik St. Martin:** Oh, you are speaking...!

**Brian Ketelsen:** Awesome!

**Carlisia Pinto:** Yeah!

**Brian Ketelsen:** What's your topic?

**Carlisia Pinto:** I'm going to talk about certificates in TLS and Letsencrypt... In Go, of course.

**Erik St. Martin:** Oh, nice!

**Brian Ketelsen:** \[00:52:05.23\] I don't know how I did it, but I managed to sign myself up for five talks in eleven days, and I am one talk into that eleven days, and already regretting the whole plan. I think it was Erik's idea.

**Erik St. Martin:** Are they all five different talks?

**Brian Ketelsen:** They are all five different talks. I was bright enough at least to write sample code for three of the talks in one repository. One of the talks is on microservices, another is on open tracing, and then there's another one on something else. So I built a bunch of microservices that had open tracing, so I could at least use one group of code for several different talks, but... Oh my gosh, regret.

**Erik St. Martin:** Yeah, I don't think I could do it.

**Jason Keene:** Yeah, it's like an ultra marathon of coding talks...

**Erik St. Martin:** I'll take the blame, though.

**Brian Ketelsen:** You know, I wish they were local. The hard part is that it's dotGo on the 6th, and then the Women Who Go in Paris on the 7th or 8th, and then [Codemotion](https://milan2017.codemotionworld.com/) in Italy... So much flying. That almost sounds whiny.

You know, I am really, really grateful to be able to do the job that I do. I'll be quiet now.

**Erik St. Martin:** \[laughs\] So one other cool thing that I came across was actually NVIDIA's GitHub organization is a project called [nvidia-docker](https://github.com/NVIDIA/nvidia-docker), which is supposed to have support for having containers that can leverage NVIDIA GPU's that are running on the hardware. So that will be really cool to start seeing like CUDA applications running inside containers.

**Brian Ketelsen:** Alright, how about some \#FreeSoftwareFriday?

**Erik St. Martin:** I'm in.

**Brian Ketelsen:** I'll start it off, because I already whined about all of these presentations... I'm gonna shout out to the present tool from the Go team. I sure love being able to write my slides in very light format and just typing 'present' on the command line and getting good-looking slides that are easy to read and easy to write. So thanks to the Go team for making the present tool. I use it for pretty much everything.

**Carlisia Pinto:** Hey, can you play a video inside the present tool?

**Brian Ketelsen:** You can. You can play videos, you can put iFrames in, you can do everything. I even forked the present tool, and in mine you could run Docker containers and all kinds of extra stuff.

**Carlisia Pinto:** Really?

**Brian Ketelsen:** That's how I roll.

**Erik St. Martin:** Have you changed the color format, or anything?

**Brian Ketelsen:** No.

**Erik St. Martin:** Because that's the only thing I think that's hard with the present tool sometimes. Meetups and stuff are good, but sometimes in large, large rooms, towards the back the black text on the grey code bubble becomes really hard to see.

**Brian Ketelsen:** It's really easy to change, but I've never felt the need, because I don't pay attention to things that look pretty or not pretty; that's just not my world. That's why I'm a back-end developer.

**Erik St. Martin:** Carlisia, did you have one this week?

**Carlisia Pinto:** Yes, I wanna give a shoutout not to a project, but to a person - [Francesc Campoy](https://twitter.com/francesc). He is leaving Google and... I know he was working as a developer advocate for Google Cloud, and also on the Go team, right? I think he worked in both groups. So I was really sad to see him move on; I don't know why, because he's been there since I knew of Go, but I think it's going to be -- obviously, I trust his decision... It was probably a very good transition for him.

He's going to be -- well, I think he is already, or soon to be the VP of developer relations at [source{d}](https://sourced.tech/)

**Erik St. Martin:** \[00:56:04.00\] source{d}.

**Carlisia Pinto:** source{d}, which I've never heard of this company before, but they sound really cool.

**Brian Ketelsen:** They are awesome, and he's gonna be a great fit there.

**Carlisia Pinto:** So good luck to Francesc, and hopefully he will stick around. He's done so many things for the community. He went way and beyond his call of duty.

**Brian Ketelsen:** And just FYI, source{d} is not the Society for Research in Child Development. This is a completely different source{d}.

**Carlisia Pinto:** Thanks for clarifying, Brian.

**Brian Ketelsen:** Sure, you bet.

**Carlisia Pinto:** Very helpful.

**Brian Ketelsen:** Jason, Andrew, do you have any good software...?

**Andrew Poydence:** Yeah, I have [Concourse CI](https://concourse-ci.org/). It's the CI and CD that we use here at Cloud Foundry heavily. It's just a super viable tool to hook at any commit you want out there quickly, and we run our tests with it, we use it to push to a production environment, and everything. It's all written in Go, it's something you could run in your own data center, you could run on your own VM. It's been a really valuable tool, that they worked really hard on.

**Carlisia Pinto:** It's not a paid service, right? You get the code and run on your servers.

**Andrew Poydence:** Yeah, exactly. You can bring it behind \[unintelligible 00:57:24.10\] or run it wherever.

**Jason Keene:** Yeah, its kind of sweet spot is doing pipelines. It visualizes the pipeline really well and allows you to chain different jobs and tasks into different other jobs and tasks. Whatever your build artifacts - Docker images, or whatever it may be on the other end of your pipeline, you can automate all that using Concourse. It's really nice.

**Erik St. Martin:** That's awesome. Another thing to add to the list of things to play with that I don't have time for.

**Jason Keene:** Yeah, so I had a \#FreeSoftwareFriday thing as well... This is about the coolest thing I know going in the realm that I work in. We work a lot with metrics and performance measurements, and there's a kernel technology called eBPF, which is a virtual machine, it's actual bytecode that you can write that runs inside the kernel space... So there's a lot of tooling around creating and compiling these programs; [gobpf](https://github.com/iovisor/gobpf) is the bindings for libbcc, which is a compiler that compiles down to the BPF bytecode. It allows you to write Go programs... You have to write a little bit of C that gets compiled into the kernel, which is the kernel space part, but then the rest of the program can be in Go.

It's a pretty nice tool to be able to have high-performance monitoring of either your user space or your kernel. You can reach out and do kprobes, gprobes, tracepoints, things like that.

**Erik St. Martin:** Oh, that's awesome. I've actually used BPF before, too. I didn't see that somebody had done Go bindings, so that's awesome.

**Jason Keene:** Yeah, the Python bindings are kind of the reference ones that a lot of people use, but the Go ones there -- one thing you just have to make sure is that the version of gobpf that you are using, you have the appropriate version of libbcc, which is a dynamic library. You just have to make sure you have a compatible version. That's one hiccup I ran into early on.

**Erik St. Martin:** So mine for today is [dep](https://github.com/golang/dep). We've all kind of talked about dep, and Sam spoke about it at the last GopherCon, but I actually hadn't worked on a project that used it yet, until recently... So I definitely wanna give all of the people who have put so much effort into that a huge shoutout, just because it's quickly becoming my favorite vendoring tool.

**Carlisia Pinto:** \[01:00:07.23\] Yeah, I've been using dep, too. It's been good, I like it.

**Brian Ketelsen:** I've been using dep a lot, and it makes me happy.

**Carlisia Pinto:** Were you guys using that at Cloud Foundry?

**Jason Keene:** Early on we kind of experimented with dep. I think it was before it was something that was promoted as like generally usable. We don't actually use dep; we run all of our source code against the latest dependencies, like their default branches, and then we vendor dependencies using Git submodules. It's kind of a legacy technique, but it served us well.

**Brian Ketelsen:** It's old-school. Respect!

**Erik St. Martin:** Alright, so I think we are out of time, but I wanna thank everybody for coming on the show, and definitely thank you Jason and Andrew for joining us.

**Jason Keene:** Yeah, thanks for having us.

**Andrew Poydence:** Thanks for having us.

**Carlisia Pinto:** Thank you!

**Brian Ketelsen:** Is this the first time we've successfully had two people at the same time as guests?

**Carlisia Pinto:** Yes.

**Erik St. Martin:** Yeah, I believe \[unintelligible 01:01:07.14\]

**Brian Ketelsen:** I wanna say we tried it once and it was a massive fail.

**Carlisia Pinto:** I don't remember us trying. That's why we don't do it... \[laughs\]

**Erik St. Martin:** They did say they were pros, remember?

**Brian Ketelsen:** That's true. Yeah, but their audio went out in the middle of the call, so I don't know if buying the whole pro thing.

**Andrew Poydence:** I'm blaming Skype for that...

**Brian Ketelsen:** Okay... Yeah, Skype will take a hit. Alright, thank you Jason and Andrew for coming on.

**Jason Keene:** Thanks!

**Andrew Poydence:** Thanks!

**Carlisia Pinto:** Thanks, this was great!

**Erik St. Martin:** Thanks everybody for listening. You can follow us on Twitter @GoTimeFM. If you wanna be on the show or have suggestions for topics or guests, file an issue on [ping](https://github.com/GoTimeFM/ping), and with that, goodbye everybody. We'll see you next week.

**Carlisia Pinto:** Bye!
