**Erik St. Martin:** Welcome back, everybody. I guess it's been a long holiday break, but we are back to kick off the new year. This is episode number 64, and everybody's here this week. Brian's on the show...

**Brian Ketelsen:** Howdy!

**Erik St. Martin:** And Carlisia...

**Carlisia Pinto:** Happy new year!

**Erik St. Martin:** And we're kicking off the new year in style. We have a guest we've been wanting to get on for a long time - Paul Dix, who's CTO and founder of Influx Data, and we all love InfluxDB.

**Paul Dix:** Hey!

**Erik St. Martin:** So for anybody who may not be familiar with you and Influx, do you wanna give just a little bit of history and back-story?

**Paul Dix:** Sure. InfluxDB is an open source time series database that we created which is written in Go, obviously. Started the company back in 2012, originally as a monitoring company, like a SaaS product to do real-time metrics and monitoring. Then over the course of 2013 we realized that the infrastructure that we were building, the API that was written in Go was actually more interesting, and then decided to bring that into the open source world as an open source database at first, mainly because I think developers obviously like to build their stuff on top of open source, and that's the only way that I felt the project could be successful. Then over time we raised more money, we did Y Combinator in 2013, and then we raised a series A in 2014.

Basically, the thesis around it was we didn't wanna just build a database, but we wanted to build a set of other tools, and basically a platform for working with time series data. In my mind, a time series data is kind of a primitive that's very common amongst many, many different use cases; you can see it obviously in sever and application monitoring, but you also see it in censor data and all sorts of analytics use cases.

Highlights on the company - we did, like I said, Y Combinator, series A, series B, we're probably about 70 people right now, and maybe doubling that by the end of this year.

**Brian Ketelsen:** That's a lot of people. Can you explain to me in terms that I would understand - which might be difficult for you, because I'm really slow, especially right after the holiday - how I could use Influx for something like my barbecue?

**Paul Dix:** \[laughs\] Which you've already done, I've seen your project. \[laughter\]

**Brian Ketelsen:** Oh, you saw that, huh? Damn.

**Paul Dix:** Yeah. So essentially, your barbecue has a number of sensors on it... I saw the temperature sensors and some other stuff, so you're able to just pull that sensor data into Influx, basically collect it. I can't remember what you used to collect that data and what those sensors actually are, what they're built on...

**Brian Ketelsen:** We're using MQTT right now.

**Paul Dix:** Oh, okay.

**Erik St. Martin:** For that particular use case, we threw it together in a weekend; it was MQTT on Arduino-based hardware, and then Telegraph was picking that up and converting it into Influx, and then we displayed it on Grafana.

**Paul Dix:** \[00:04:12.03\] Right, yeah. So that's very common. I think the thing that's interesting is you have sensors on your barbecue, and I think that trend is actually only gonna continue to accelerate. There are gonna be more and more sensors out there in the world, and you're gonna wanna instrument that stuff. A lot of times you're gonna throw the data away; like, what's the long-term value of your barbecue data being collected every ten seconds for the last five years? Probably minimal, but I think there are use cases, within sensors specifically, that will be very interesting.

**Brian Ketelsen:** So is Influx customized specifically for IoT use cases, or is that just a really nice fit to a more general product?

**Paul Dix:** I think it's just a really nice fit to something general. The data model of Influx is obviously of a measurement name. You have a set of tags which are key value pairs, where the values are strings, and those are basically dimensions that you can slice and dice the data on. So a measurement name could be like, you know, grill temperature, and the tag information could be not just one barbecue, but many barbecues in many different locations, for many different people that are owners, or whatever.

And then the actual series data, which in Influx it's what I call a field set, which is a field name, which would be just like a value, or something else, or it could be like inner temperature/outer temperature, or like a temperature for each grill... And then the value itself, and then finally a timestamp.

So it just so happens that that structure, that kind of schema works really well for IoT data, because it's very common that people who are tracking sensor data want to slice and dice the data along those lines. But it's also very common for server data as well, right? You want to see for this service how are things performing, or within this region how are things doing, or for this specific host.

I think the one other thing that is I think kind of unique with Influx and some of the other older time series solutions is that from day one we wanted it to be useful not just for what I call regular time series, which is measurements collected at fixed intervals, so like once a minute, but also irregular time series, which are like event-driven series. So that can be the response time for an individual request to an API, it could be a trade in the stock market, or stuff like that. Or a container spinning up or spinning down, that kind of stuff.

**Erik St. Martin:** So as far as like Go usage goes, what's your experience been like building using Go? You guys have done quite some interesting things, including creating your own query language against it, and things like that. Has it helped facilitate that? Do you have anything that you've kind of tripped up against?

**Paul Dix:** Yeah, so our experience using Go has been fantastic. I remember looking at Go back in March of 2012 when 1.0 came out, and I thought it was interesting as a language. But at the time I was writing primarily Scala code, which I was completely disenfranchised with at that point... But before that, I was a Ruby developer, so I was in the dynamic language camp, and I switched to Scala... Then I was in the barren hellscape that is the JVM. Then, looking at Go, what I appreciated was that the tooling was very simple, the really fast compile times; whenever I had to do Scala stuff, it was just painful waiting for builds.

\[00:08:18.01\] In the fall of 2012, when I was creating the second version of the API for this SaaS monitoring application - originally, I had written that in Scala, using Cassandra and Redis, so for this next cut I wanted something that was like a single binary that could be deployed, and I thought Go would be great for that. So I basically did a spike of writing a basic time series API in Go, and then using LevelDB, which is a key-value store that's actually written in C++ that came out of Google... But I did that really quickly what kind of performance could I get out of this thing. And I saw that it was very, very good.

Basically, fast-forward through 2013 into basically mid-September 2013, we had decided -- at this time, the company was me and two other people. I had gotten back from a conference and I was like, "Okay, this product we're building isn't working, but I think the infrastructure is interesting, and I think this time series thing is interesting, so let's do a spike on creating a time series database based on our previous stuff, and do it from scratch."

Internally, we had this debate about what language we should be doing it in. And really, at that time it was "Okay, it's either gonna be C, C++ or Go." Rust really wasn't an option at that time; I think it was pretty far from getting to any sort of 1.0 release, and none of us had any familiarity with it. And at the time, what I knew - because we already had experience in Go - was I knew we could be more productive, faster using Go as a language, versus C or C++. Part of that is maybe a dig on how productive you can be in those languages, but also part of it is a dig on our lack of skills in them. If we were expert C++ programmers, I'm sure we would be fairly productive... But we were familiar with Go; we knew we could be fast with it.

Really, the concern that we had was "What about the garbage collector? It's a database, you're gonna have massive heaps... What are we gonna do about the GC?" and my feeling was there's like two paths here if we do it in Go and we have to deal with the GC. Path one is we perform the same sort of crazy hacks that people in Hadoop land, in Cassandra land and basically anybody writing databases and data stores in Java had been doing, which is essentially hide the data from the heap. Or, we hope that the Go team, their development and what they're doing with the GC will frontrun where we are as a database.

Thankfully, I think it's been a combination of both. One, the Go team's improvements to the GC over the last four years have just been crazy; it's been really insane, it's good. But then the other thing is I find that there's a lot of places in our codebase that I've seen our developers over time see where they could optimize things, so that we do fewer heap allocations, we keep stuff on the stack, and we get much, much better performance just because of the tooling that Go has to let you introspect what's going on.

So basically, my experience with Go has been overwhelmingly positive, and I've written about this a couple of times. I really do think that Go has a long lifetime ahead of it and I do think that 5-10 years from now it potentially has the possibility to overtake Java as the preferred server-side programming language for services.

\[00:12:14.13\] Our two biggest pain points over that time -- which, of course, everybody is going to groan because I'm going say things that everybody has heard a million times before, which is one, dependencies; thankfully, it looks like that is finally starting to get addressed... And two, generics. I'm not asking that they add generics to the language, because I feel like there's a big win in not having them in terms of simplicity and readability and that kind of stuff, but we definitely felt the pain in a couple specific spots where generics would have been handy.

Actually, Ben Johnson ended up writing this templating thing, basically like this code generation thing that lets us hack around new generics, which is littered in our query engine code right now.

**Carlisia Pinto:** Let me jump in here, because I don't want us to get too far ahead, otherwise I'll forget to ask. Paul, if you could drop a link to those couple articles you wrote about the future of Go as per your thinking, and also this tool that Ben Johnson wrote - is it open source? Could you share it with us?

**Paul Dix:** Yeah, Ben's in the Slack channel. Ben, share your code... \[laughter\]

**Brian Ketelsen:** And he's hiding now... \[laughter\]

**Paul Dix:** I saw him heckling me earlier... \[laughs\]

**Erik St. Martin:** We have to do what we do to everybody - we have to bring him on the show and then put him on the spot on the show.

**Carlisia Pinto:** I think Ben has been on the show.

**Brian Ketelsen:** He has?

**Carlisia Pinto:** Yes.

**Paul Dix:** I'm sure he has.

**Brian Ketelsen:** There's 64 episodes, I just can't remember anything past the last two.

**Carlisia Pinto:** He's been on the show.

**Erik St. Martin:** Cool. That doesn't mean we can't bring him back on.

**Carlisia Pinto:** Not that he couldn't be on the show again, yeah. He'll be the first repeater. But let's go on...

**Paul Dix:** Oh, Cory beat me to it. Cory posted in the GoTime.fm channel. This is the post that I wrote after... Yeah, it was after GopherCon 2014, so it was still pretty early.

**Brian Ketelsen:** Nice!

**Paul Dix:** That was actually -- that GopherCon is where I met Cory and Ben.

**Brian Ketelsen:** That's the first GopherCon. You're OG. Original Gopher.

**Carlisia Pinto:** Brian, I have a few questions, but go ahead and say what you were gonna say.

**Brian Ketelsen:** Oh, I completely forgot, but I think it had to do with code generation...

**Carlisia Pinto:** You're welcome.

**Brian Ketelsen:** Yeah, thanks a lot, Carlisia. My 2018 resolution is to remember what I was gonna say. I think it boiled down to writing a code generator being like the third step of denial in Go. Once you accept that there are no generics, the next thing you do is "Alright, how are we gonna start generating the stuff we need?" It feels like a rite of passage as a matured Go developer.

**Erik St. Martin:** And I don't think that they're against adding generics. I think that they wanna make sure that they're solving for the right use cases and things like that, and that it doesn't make the language more complex.

**Brian Ketelsen:** I'm against generics....

**Paul Dix:** Completely!

**Brian Ketelsen:** Yeah, strongly. I love the readability of Go, and I think anything that changes that is really, really bad.

**Paul Dix:** I guess the question is do you think there's a way to add generics? Some flavor of it, let's not put a Java flavor on it. I mean, do you think the two are antithetically, completely opposed to each other? Like, on one side you have generics, and on the other side you have readability, and there's just like no way to reconcile the two?

**Brian Ketelsen:** I don't know, but all the generics I've seen - limited exposure to programming languages, but the ones I've seen are not readable in other languages, so I'd just hate to bring that to Go.

**Erik St. Martin:** Yeah, I don't want C++ templates.

**Paul Dix:** \[00:16:09.05\] I don't think anybody wants that.

**Carlisia Pinto:** The Go language team itself, they've already dropped sufficient hints that this is not trivial, that there will be major trade-offs to make in regards to the simplicity of Go versus having that extra functionality.

**Paul Dix:** Yeah. That's why I'm saying, I personally can't say I want them to add generics, because there's some section of our codebase where it was definitely painful to not have them, but most of our codebase is actually -- we don't really lose anything by not having them. We gain readability.

**Erik St. Martin:** It's interesting though, because when you come from other languages like C++ or Java or things like that, and the complexity sometimes of the way they implement object-oriented programming also is like "Ugh...", right? But then you take a look at the way Go implemented interfaces and kind of like implicitly implementing an interface and composing things, rather than explicitly -- like, inheritance, and things like that... I'm not a language designer, and I haven't read a lot of whitepapers on language design or anything, but there could be a way to give us something that behaves like generics without being what we know of generics today.

**Paul Dix:** Yeah. I think the way Go did interfaces is actually brilliant. Before Go, I hadn't really used that. I know Scala has a similar thing, but Scala is like a kitchen sink language, in that it has everything thrown into it; there are like a million ways to program Scala. You can program Scala exactly like you do Java... So coming to Go, that was actually a real learning experience for me. I never really used that paradigm of the consumer defining the interface, and I think that's actually quite powerful. It allows you to do a lot of stuff in code that you otherwise wouldn't be able to do.

**Carlisia Pinto:** Yeah, that is a crazy thing. When I understood what it was, I was thinking "Did I understand this correctly?" \[laughs\] Who had this idea was awesome. It's pretty awesome. So on that note, one question that I have is -- because you have such a tremendous experience with Go at a large scale... Is there anything you would change in the way that you went about developing InfluxDB as far as what you know today about Go, or the Go ecosystem?

**Brian Ketelsen:** That's a good question.

**Paul Dix:** Well, there are a million things I would change about developing InfluxDB. \[laughter\]

**Erik St. Martin:** The life of a software developer.

**Paul Dix:** Yeah, exactly.

**Erik St. Martin:** "I wrote it yesterday and I hate it."

**Carlisia Pinto:** Yeah, but not so much in terms of design, but in terms of what touches the language, and maybe using the standard library, or anything like that.

**Brian Ketelsen:** Is a different way to ask that "What lessons did you learn about designing software in Go, while you were building it"? Is that kind of the same question, Carlisia?

**Carlisia Pinto:** Yes, it is.

**Paul Dix:** Yeah, I think part of it is how to organize your project. Honestly, I think that's something that we all fumble around with and learn over time. I can actually point to you - which I linked to in a recent blog post I did - Ben Johnson wrote this post that I think is actually very, very good about how to organize a Go project to make it understandable. I think we're closer to that in this codebase.

\[00:20:04.20\] The current InfluxDB codebase is actually a complete rewrite of the original InfluxDB. That's not like a refactor, but it was essentially like a rip-and-replace rewrite almost. But in the same repo.

**Carlisia Pinto:** So that's probably a good codebase to look at for example of how to organize your code, you'd say?

**Paul Dix:** Well, I think the link that Brian just put up in the channel, of Ben's blog post about how to structure applications in Go - I think that is a really good blueprint for how to do it. I would do more and more like that within the Influx codebase. I'm not sure we have that everywhere, and there are some weird spots we have where a directory or a package, some packages and stuff like that that are not totally certain to make sense... But some of this is kind of just like bikeshedding; everybody can debate about what the right way to organize things is, but yeah...

**Brian Ketelsen:** I've used Ben's post as the almost canonical -- like the Bible of how to organize Go code for the last two years while I was teaching Go, and it's never done me wrong. It's such a well thought-out process, and I have nothing but awesome things to say about that post.

**Paul Dix:** Yeah. So I referenced it, and actually I referenced what I think the Go interfaces, what kind of application structures it enables in this blog post I did recently, where I said -- it's something I call "the decomposable monolith." I linked the post in the channel. My idea behind this is -- I know everybody is hot on microservices and all this other stuff now; obviously, microservices is just like the new service-oriented design, which was the new SOA, although thankfully we got rid of XML and WISDL and SOAP... But I think for most people building applications, they actually don't benefit from building microservice-based applications.

This is like an idea I was kind of playing around with, which is if you're building a new application in Go, is there a way to structure it as a codebase where it is a monolith, but then you can later pull out pieces of the monolith as individual services without having to do a massive refactor of your application codebase?

**Carlisia Pinto:** Exactly, and that is why I personally don't think that talking about code organization in Go is a waste of time or is a lot of bikeshedding, because you can do it in a very purposeful way, which is to accomplish a goal like the one you've just said. I think if you have in mind to package things in a way that "What if I want to extract this and put it somewhere else?" or "What if I want to share this as a library, with other repositories?"

If you don't think a little bit why you're organizing code in a certain way, you lose that ability, and that is a great feature that Go has embedded in the language in a way that allows you to write your code and to package it. [Bill Kennedy](https://github.com/ardan-bkennedy) also has a very good post, and I'm trying to find it here on his [blog](https://www.ardanlabs.com/blog/), about how to organize code; it's a series of two or three posts.

**Erik St. Martin:** \[00:23:55.11\] Yeah, so I like the idea of the decomposable monolith, too; we've done this before, too... The beauty of that is like everybody -- the Holy Grail is having this horizontally scalable architecture where you just spin up more of these things and the world is great... But people don't realize that with separating things out like that, you introduce complexities into the system and you introduce new ways that your application can break, and that's often not good early on, because you're still trying to iterate on the core functionality and get that rock-solid, and now you're having to worry about network issues and timeouts and things like that.

**Paul Dix:** Right, yeah. Most of the time you need to figure out if you're even building the right thing in the first place.

**Erik St. Martin:** In our e-mail, talking about you coming on the show, you were talking about - speaking of refactoring things, you're changing out the way your hosted solution works; you kind of have like your own custom orchestrator... I believe that's what you were mentioning.

**Paul Dix:** Yeah, so our hosted solution is an EC2, and we started developing this in... Oh, man, I'm probably gonna get this wrong. This was 2016... Yes, 2016. I can't believe it was that long ago. So yeah, this was in February of 2016, and what we were going to do for this kind of thing was essentially it looks basically like managed databases of services. The customer comes in, they sign up, they'll get new EC2 instances where the InfluxDB clustered implementation will be deployed on containers, with some additional monitoring bits and stuff like that.

Then there is a bunch of stuff so that we can deal with the inevitable EC2 instance restarts, or another thing that we ended up putting in there is being able to literally clone a custom cluster and take its data and test it and play around with it, or spin up a new cluster with a new version and replicate the read/write traffic coming in to both the live cluster and the new test cluster.

Because this we were doing this in February 2016, Kubernetes wasn't really mature at that point, since that project is really only like three and a half years old. So basically, what we did was we had pretty simple needs, and we just had a very small team working on it... They essentially wrote from scratch a container orchestrator in Go that also deals with the Amazon APIs and stuff like that.

But obviously, at this point, the writing is on the wall - Kubernetes is basically winning the orchestration game, and there's a bunch of hooks and stuff that you can do within Kubernetes to customize it for your needs. Basically, probably about three or four months ago we took a look and we said, "Okay, one - this single-tenant architecture that we have is not really working as we scale up." We run thousands of instances on EC2, and it means that, one, it's a pain to coordinate all of that stuff and to monitor all of that stuff, but also we waste a lot of resources, because there are many customers who have very small workloads where a lot of their instances are basically just sitting idle, and this is exactly what cluster orchestration is for.

\[00:27:45.15\] Basically, our costs aren't scaling properly with the number of customers, and we have to manage all these things... More importantly, if we want to release a feature in the database, we have to do it in the database, we have to test it as extensively as we can, and then we have to try and clone a few customer clusters and replicate the traffic, and then upgrade them. But the thing is we have to upgrade each of these clusters individually. It's not like a SaaS service or a regular -- a SaaS application usually, if it's something that's operating at scale, either in terms of the complexity or the traffic, you have a number of services underlying it, and you can deploy each of those individually. So it's totally possible to develop and deploy a feature in a SaaS application, for instance, without deploying every single piece of code throughout the thing. Right now, clustered InfluxDB is very much a monolithic application. If you want to develop a new feature, you have to deploy the entire database, which means there's a high risk to deploying code.

Basically, as we saw Kubernetes gaining in popularity and really maturing, I thought "Well, what if we started to try to think about for our cloud service and for a database in general, what would it look like if we actually designed it to run on Kubernetes from day one?" We took advantage of the primitives that Kubernetes has in terms of being able to schedule things, and we kind of separated out the different kinds of workloads that you have within a database.

Most databases are monolithic things, but they do a bunch of different things. Sometimes they're just storing a bunch of data, sometimes they're doing a bunch of query processing for a query that the user is running, sometimes they're doing some re-indexing, or in our case, compactions on the background data... Or, because we also are a monitoring platform, we could be doing real-time monitoring and learning, or batch monitoring and learning. And trying to make all of that work in a single monolithic application I think is very, very hard, whereas if you break each of those out into separate services, you can tune them for the workload that they have to be built for. Then, once you pair that up with Kubernetes, you can have it manage deployment and the shrinking and growing of those services individually.

This year, for our cloud thing, that's our big project - to try to move from this single-tenanted architecture to a multi-tenanted architecture that still has workload isolation across tenants, but it has the ability to decouple storage from compute, from processing for ETL monitoring tasks. Really the first part of that that we started doing last year was the development of our new query engine and query language, which is actually open source and up on GitHub.

What we did with that was we actually decoupled the engine in the language from the actual data storage tier. So the nice thing that gets you is you can deploy new query processors as basically share-nothing application servers that can just be spun up on the fly... Which actually, again, that's actually Kubernetes' sweet spot.

**Erik St. Martin:** Yeah, and all the autoscaling and stuff, too. Are you gonna take advantage of the operator pattern too to deploy these customer...?

**Paul Dix:** Yeah, we're already looking into that, actually. One of our guys is actually gonna submit a talk to the Cloud Native Con or KubeCon Europe that's coming up - I think it's in early May in Copenhagen - and he's working on operator code for some of these pieces, so I think he's gonna try and give a talk on it.

\[00:31:55.23\] The two key things we're looking at is Kubernetes operators, and then also Istio mixers. Because there's a bunch we wanna do in a new API tier, that mixers seem like the perfect fit for.

**Erik St. Martin:** That Istio is freakin' incredible...

**Brian Ketelsen:** It's on fuego!

**Paul Dix:** Yeah, Cloud Native Con in Austin in December could have been called IstioCon.

**Erik St. Martin:** \[laughs\] So there's an interesting crossover here for this show with people who are actually familiar with Kubernetes and that landscape, and then there's also some people who are solely on the Go side, so it might be helpful maybe if we just take a couple minutes to kind of describe what Istio is and the purpose it serves.

**Paul Dix:** Yeah, so Istio is a project built by Google, written in Go. It's what they call a control plane. It's paired up with Envoy proxy... So Envoy -- unfortunately, to describe Istio, you have to go down this rabbit hole... \[laughter\] Envoy is basically a proxy, but it's also something for building what Matt Klein (its creator) calls a service mesh. Basically, Envoy is written in C++, it was developed at Lyft by Matt Klein and a team of other people, but now they have contributors from many organizations. It's part of the CNCF at this stage, and Istio is as well. So they're part of the CNCF, which overlooks Kubernetes and Prometheus and a bunch of other projects.

Envoy is basically a sidecar that you can deploy with your containers to act as a proxy, but also a service mesh to do -- it can integrate with service discovery and do all this stuff, so it can route traffic from one service to another, it can do things like rate limiting and all sorts of other stuff.

Istio stacks on top of Envoy, so if you're using Istio, you're using Envoy. And it stacks on top of Envoy to work as like a control plane, which is a bit more programmable, so you can build in all sorts of custom features. I'm not an expert on either at this point, so I'm not really qualified to giving a much better answer than that, but... Yeah.

**Erik St. Martin:** Yeah, and it's really interesting, because it allows you to kind of inject your way in between container to container communication. Like Paul said, you can do rate limiting and stuff, but you can also set rules as to which pods are allowed to talk to which other pods, or even outbound or inbound traffic to them. You can do stuff like inject headers, so if you wanna just kind of be able to quickly add distributed tracing to your application, that's kind of a quick way to do that. It's just super powerful.

**Paul Dix:** Yeah, and by the way, that (the distributed tracing stuff) is actually -- Envoy and Istio are actually one of the few ways that I think tracing will take off, because I think the burden to a developer to actually implement tracing within their own application code is way too high. I think having Envoy and Istio in front makes it so that you can get tracing kind of out of the box, without putting this huge burden on the developer to get it done.

**Erik St. Martin:** And I think it's interesting too, because then the more you use the tracing because you kind of got it for free, the more it encourages you to add new metrics to the distributed tracing to help do that. But most people aren't highly motivated to have to do the from-scratch implementation and do all of their services.

**Carlisia Pinto:** \[00:35:55.01\] I wanted to ask a question that I always like to ask anyone who comes on the show that is heading a company or a big team, and that is about hiring. I wonder how is hiring Go developers going for you, what do you look for? Does it matter if the person knows Go or not, and do you recommend that people who want to work on anything that is made in Go that they go and learn Go beforehand? And anything else you wanna share about that?

**Paul Dix:** Yeah, sure. I mean, I think it's a mixed bag for hiring Go developers. The thing is we have a number of different projects, and some of them, even though they're all written in Go on some level, they require vastly different skillsets. For example, our user interface, Chronograph - there's a bunch of Go code, and there's this massive single-page React/Javascript application. But the Go code in that is very different than the Go code you'd find, say, in the storage engine or the query engine of the database. Both are Go, but I don't feel like Go developers are kind of interchangeable, so that I can just say, "Oh, go write the database", or you take a database person and say "Go write these web APIs", or whatever.

So generally, for the database what we try to do is filter based on a skillset that matches up with that, whether they have experience in Go or not. Although many of our database developers had experience in Go already coming into it, not all of them did. So for that it was basically like -- Go is an easy language to learn; that's one of the things I love about it. You can point somebody at the spec and the basic documentation and they can be productive within a few days... Particularly if you have code review and stuff like that as part of your process, because then they can just start doing pull requests and pick up idioms along the way, and have the developers who are already very familiar with Go and the idioms push them in the right direction.

So I would say, actually for most of our staff, it really depends. We don't necessarily require Go experience, just because of the fact that you can pick it up so quickly. I think some of the other stuff around doing performance optimization and using the profiling tools and that kind of stuff is more advanced Go stuff. If we were trying to hire for one of those roles, we would filter for that kind of experience. So it would definitely be somebody who knows Go, who has experience doing those things. But those roles are kind of few and far between. I think for the most part it's just smart developers who at the very least are excited to work in the language.

I wouldn't want to hire somebody who didn't know anything about Go, just because it's entirely possible that you could get somebody coming from another language, who uses Go, who just absolutely hates it. And then at that point, if you've already hired them, it's not a good situation for either of you.

I think for hiring we benefitted for sure from having open source bits all over the place. We've hired a number of people from our contributor community. We've seen commits and actually reached out to them and said, "Hey, your code looks great. We're really interested to talk to you and see if you'd be interested in coming to work with us." That's nice, but that doesn't really scale, and like I said, we kind of have to double our engineering team in 12 months, so at this point we use that, we use job boards, we use recruiters, and I feel like for some of these roles we're definitely gonna be pulling in people who aren't familiar with Go and training them up on the job.

**Carlisia Pinto:** \[00:40:13.06\] This was super informative, Paul. Thanks.

**Erik St. Martin:** I'm forgetting what time we stared, but I think we're running shorter on time... Do we wanna jump into some projects and news before we do \#FreeSoftwareFriday?

**Brian Ketelsen:** Yes!

**Carlisia Pinto:** There is a huge list there, oh my god!

**Erik St. Martin:** We haven't been on the show for weeks.

**Carlisia Pinto:** Okay. \[laughs\]

**Erik St. Martin:** So much cool stuff to talk about!

**Brian Ketelsen:** So I'll start off with a new project that I saw, that I didn't play with yet, but man, does it look cool! It's called Grumble, and it's at GitHub.com/desertbit/grumble. It's an automatic CLI and shell tool. The API for it looks almost like an exact clone of Cobra, from Steve Francia's SPF13 Cobra library. However, it also has a shell. So instead of just being able to do command lines, you can drop into a shell and have an interactive shell that works with your application. I really wanna play with that, because that looks kind of fun.

**Carlisia Pinto:** This looks cool... Like a repl kind of thing?

**Brian Ketelsen:** Exactly.

**Carlisia Pinto:** Nice!

**Paul Dix:** Sorry, I missed the link. Can you post it in the channel?

**Brian Ketelsen:** Absolutely.

**Erik St. Martin:** So while we were at CloudNativeCon and KubeCon, one of the things I hadn't heard of before was OpenFaaS, which is Open Functions as a Service, which is kind of implementing serverless on top of Kubernetes. What's the URL for that --

**Brian Ketelsen:** GitHub.com/openfaas/faas.

**Erik St. Martin:** The regular website is OpenFaaS.com, too. I think that's really cool. It's one of the things I'm most excited about for Kubernetes now; now that we've kind of accepted how awesome Kubernetes as like a container orchestration platform, now it's starting to catch on the modularity of the system and how each of the components, schedulers and things like that are all implemented separately and you can build your own, and I'm really looking forward to the more creative use cases that we build in abstractions on top of Kubernetes.

**Brian Ketelsen:** Well, speaking of containers, I didn't put the link in here, but I've played with Alibaba's Pouch, which is pretty slick. That's from the Alibaba team I believe that's out of China. A fast and efficient container engine that vaguely competes with Docker. Really cool stuff, and lots of good technology decisions in here that I think are informed by their huge, huge traffic. So Alibaba's Pouch is something to check out if you're interested in learning about how to do containers at scale.

**Erik St. Martin:** I dropped that link in there. They're actually a really huge user of containers, and I know there's some stuff built in there around security and using Hyper V and stuff. But one of the interesting things that I saw about it was actually in the way they distribute images. It's done using peer-to-peer instead of a central repository server, which should make it much faster to have nodes pick up images.

\[00:43:54.06\] That always seems to be the slow point, right? Another instance goes to start up, or it fails over to another node, but the image hasn't been pulled yet, and then there's kind of like that lag waiting for it to get there... Whereas if it just pulled it from another node in the cluster that has it...

**Brian Ketelsen:** Yeah, the documentation in that GitHub repository for Pouch is well worth your time to sit down and read through. I did it a couple days ago and I wasn't disappointed. There's lots of good stuff in there.

**Erik St. Martin:** Alright, what else do we have?

**Paul Dix:** I've got one.

**Brian Ketelsen:** Awesome!

**Erik St. Martin:** Cool!

**Paul Dix:** I don't know if it's new-new... Well, I've just heard about it I guess a month and a half ago. Google has this effort to try and combine \[unintelligible 00:44:37.09\] open source framework metrics and distributed tracing. They wanted to build that out as like a standard... So the project is called OpenCensus, and they have a Go library up already on GitHub. It's GitHub.com/census-instrumentation/opencensus-go, which I will post in the channel.

So I think it's interesting because they have their monitoring product called Stackdriver, but they are trying to still push out open source tooling, at least on the client side, and they're trying to basically build this standard tooling platform on the client side so that you can actually use -- and what they're hoping is that the other cloud providers and the other monitoring providers will actually implement these protocols so that you could use this library and actually use many different monitoring providers.

**Brian Ketelsen:** Interesting. So does this compete with opentracing? Is it a different spec, or same purview?

**Paul Dix:** I'm not sure if it actually implements the opentracing spec, because opentracing isn't really an implementation so much as a specification of how that works... So it could actually just be another opentracing implementation, although maybe not... Because their -- they have some weird stuff in Stackdriver because it's all based on their time series database called Monarch... So I think they may have some stuff in here that's specific to that, but...

**Brian Ketelsen:** Interesting. Now I've gotta go play with this. You've found my weakness.

**Erik St. Martin:** That's the problem - this whole space and landscape is just exploding and it's too hard to keep up with everything that's being created and the advancements.

**Paul Dix:** Yeah. Okay, I'm looking at it... So they do actually support already the Prometheus exposition format and the OpenZipkin.

**Brian Ketelsen:** Oh. They do Azure App Insights too, look at that! Hey-hey! Alright, we know what I'm doing tonight.

**Erik St. Martin:** Another cool post - if you happen to be newer to Go and come from a language that may not have pointers already, Dave Cheney's blog -- and all of this stuff we're talking about, we will drop links in the show notes. Dave Cheney's blog has a great post titled Understanding Go Pointers In Less Than 800 Words Or Your Money Back. That's actually a really good resource if you wanna understand how variables work and pointers and things like that, and don't necessarily come from C or something else that supports pointers.

**Brian Ketelsen:** Boy, was that me... Who was I having this conversation with the other day...? I was helping somebody learn Go, and they were like "Well, what do you do about when it tells you it expected this, but got that?" and I said "Just change it from n% to a star." They were like "What?" I said, "It doesn't matter why, just do that until you understand." And that's how I go through Go the first year, because I had no clue what pointers were. I came from Ruby.

**Carlisia Pinto:** \[00:48:05.11\] It's always one or the other... Two choices. If one doesn't work, the other will. \[laughs\]

**Brian Ketelsen:** Change it and recompile, see what happens.

**Erik St. Martin:** I mean, it does have its implications, right? Especially when you talk about interfaces and things like that, like whether you can actually change the value that's embedded within the interface that's being passed, and things like that.

**Brian Ketelsen:** Of course I understand that, Erik. \[laughter\] Just saying, when you've gotta get through it, sometimes you just need to flip a bit and recompile.

**Erik St. Martin:** Another cool project that I found was called Pixel, and it's a 2D game library in Go, and I'm really interested to see what comes from that... I really love when people have creative use cases outside of just writing microservices in Go.

**Brian Ketelsen:** Oh, wow. Can you do platform games with it?

**Erik St. Martin:** I don't think it supports that. I think it's only...

**Brian Ketelsen:** Never mind, I've just clicked on the site and it says "Platform Games" and it's got a little gopher jumping off of platforms. Oh, my god! That's it, we're writing games for the rest of today. Thanks a lot for coming, Paul; we've gotta go! \[laughter\]

**Erik St. Martin:** What are the little things that we have? The PocketCHIPs?

**Brian Ketelsen:** Yeah!

**Erik St. Martin:** I totally need this on the PocketCHIP!

**Brian Ketelsen:** Right? Oh, my god... PocketCHIP is a tiny little Linux computer, by the way, with its own screen and keyboard. If you were as old as me -- what were those little pocket devices we had that were...? Oh, Handspring Treos, PalmPilots. It's about that size, a little bit bigger. Those were the days... I just dated myself.

**Erik St. Martin:** And they are on getchip.com, if you're interested. There should be a link that says PocketCHIP. They're fairly inexpensive; I think they're like $50 or $60, and they've got like a keyboard on them and they run full Linux, and you can install Go on there, and they've got some pin-outs and stuff like that too for doing GPIO... So it makes for kind of a fun hacking project, outside of using Arduino... You can actually do Go.

**Brian Ketelsen:** We're all over the place today. \[laughter\]

**Erik St. Martin:** And it's always fun stuff, especially coming out of the holidays. I've got a Sphero now that I need to play with GoBot with.

**Brian Ketelsen:** Oh, nice...

**Erik St. Martin:** Yeah. So time for \#FreeSoftwareFriday. Who wants to go first?

**Carlisia Pinto:** Me!

**Erik St. Martin:** Alright, Carlisia, let's hear it.

**Carlisia Pinto:** So this week was the first time that I had an if error loop inside another if error loop, and I sort of wanted to report both errors. If there was an error in both loops, I wanted to wait for the second one and then report both. So I was thinking, well, there has to be a neat way to do this, and then I found this package from HashiCorp called go-multierror. I didn't know this package before. It's very simple, it lets you do exactly that, and I thought it was pretty neat. It just appends one error to the other, and you can have a bunch of errors just appended, just like you append to a list. I thought that was neat.

**Brian Ketelsen:** Does the multi-error present itself as a single error with a underlying slice of errors with it, so you can still use it in place of something that expects an error?

**Carlisia Pinto:** It will present itself as one error.

**Brian Ketelsen:** Oh, that's cool.

**Carlisia Pinto:** Yeah. Not a list of errors, just one error.

**Brian Ketelsen:** But then you could type-assert it and get the underlying errors, too?

**Carlisia Pinto:** I did not test that.

**Brian Ketelsen:** Okay, I'll go check it out. That sounds pretty slick.

**Carlisia Pinto:** I think it will be just one string of all the errors. Maybe separated by some separator, maybe a dot.

**Brian Ketelsen:** \[00:52:07.07\] Cool. Alright, I'll go next. I found the coolest - to me, coolest; I love hacky, crazy things... This is an application called LXRunOffline. I've been using Windows as a development environment for many months now, along with my Mac and my Linux machines, and Windows has the WSL (Windows Subsystem for Linux) and previously you were only able to install one installation, which was Ubuntu; then with the \[unintelligible 00:52:38.03\] update, they brought two more, so you could have openSUSE, Ubuntu and -- not Fedora, but a different one; I can't remember which. So you could have three installations, but that was it. You were limited to those three.

So this LXRunOffline app allows you to create any number of installations of WSL, each with their own backing file system, which means I basically can create a sandbox for every app I wanna build, with very little disk overhead and no performance overhead. So I used it and I wrote a blog post about it over the holidays, about how I created a new development environment using LXRunOffline for sandboxing all of my code. It was a ton of fun.

**Erik St. Martin:** I still need to play in the Windows and Windows Subsystem for Linux world...

**Brian Ketelsen:** Where do you work?

**Erik St. Martin:** \[laughs\] I hide in the Linux closet... \[laughter\]

**Brian Ketelsen:** Poor Erik.

**Erik St. Martin:** I mean, especially with the Windows Subsystem for Linux, Windows has gotten a lot more intriguing to me... And I'm liking my Mac hardware less and less, but I'm still a Linux person at heart.

**Brian Ketelsen:** Yeah, we could have a series of shows about operating systems and I still would not run out of things to say about all three of them. Alright, any other \#FreeSoftwareFriday shoutouts?

**Carlisia Pinto:** Paul, do you have anything?

**Paul Dix:** Yeah, I'll do one. Unfortunately it's not specifically a Go one. I will give a shoutout to Wes McKinney, who built a lot of stuff. Pandas is what he's most famous for, but Apache Arrow is a project that he is putting a lot of work into, that I think is particularly interesting.

It's basically a data format that can be represented in memory, the same way. Ideally, it can be represented cross-language, in the same exact format, and there are a bunch of things that it's designed to do. He's done a lot of data processing work, and Pandas, and bigger data work and stuff like that. The whole thesis behind Arrow is frequently when you're moving data around, you actually have to 1) copy the data in memory frequently, and then you have to marshal it between different kinds of formats, and you actually waste a lot of processing power and bandwidth doing all these things. So the idea behind Arrow is that you can actually achieve much better efficiencies through zero-copy methods and without having to marshal things into different formats.

\[00:55:42.11\] The idea is Arrow would be the data representation for many different data processing libraries or machine learning libraries, or stuff like that. We are actually looking at it as basically a data interchange format for our data tier and our query processing tier, and then also exposing that out to clients. Basically, we can process data across the network and all this other stuff, without having to waste a bunch of time like, say, serializing it in protobufs and then pulling it back out, and representing it as like these go structs and all this other stuff.

**Brian Ketelsen:** I read through Arrow's website the other day and it look really interesting; it looked fascinating actually, the way they store the data almost pivoted for faster retrieval. It was a good read.

**Paul Dix:** Yeah, and Wes has a really good blog post about - a blog post or a talk, or probably both - about some of the motivations behind the project and the specific reasons for developing it.

**Brian Ketelsen:** Just so many cool things, and nowhere near enough time...

**Erik St. Martin:** Agreed. So with the holiday break and not doing much development, I don't have one off-hand, so I'm gonna give a huge shoutout to Ron Evans, and all the folks at Hybrid Group, really... For GoBot, for doing the GoBot Room at GopherCon so people could come and freely play with Go on hardware... But for people who are from other circles, they also have Cylon.js and R2, which is basically GoBot, but in Ruby and Javascript.

And GoCV, which is another thing I'm gonna play with, because I'm convinced I'm going to use the webcam on my laptop with GoCV and GoBot to make my Sphereo find its way around an environment, or learn to bowl, or something...

If you have ideas for how to incorporate OpenCV and controlling a little robotic ball to roll around, I'm open for ideas, but I wanna marry them somehow.

**Brian Ketelsen:** Awesome.

**Erik St. Martin:** Alright, so I think we're a little overtime, but with that, I wanna thank everybody for being on the show, especially a huge thank you to Paul for coming on the show and kicking off the new year in style.

**Paul Dix:** Yeah, thank you.

**Erik St. Martin:** And definitely thank you to everybody who's listening. You can find us @GoTimeFM on Twitter, we are at GoTime.fm on the interwebs... If you wanna be on the show, have suggestions for topics or guests, you can file an issue on our GitHub, which is GitHub.com/GoTimeFM/ping... And with the holiday break, if I didn't forget anything, that's it.

**Brian Ketelsen:** We forgot to mention that today's show is sponsored by the letter G and the number 12, thanks. \[laughter\]

**Erik St. Martin:** Have you been watching a lot of PBS? \[laughter\] Alright, bye everybody! We'll see you next week!

**Carlisia Pinto:** Bye! This was fun!

**Paul Dix:** Bye!
