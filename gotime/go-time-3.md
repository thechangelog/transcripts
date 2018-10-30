**Erik St. Martin:** It's Go Time! This is a weekly podcast featuring special guests where we will discuss interesting topics around the Go programming language, to community and everything in between. If you currently write Go or aspire to, this is the show for you.

Okay, so episode number three. Today we have Brian on the call, why don't you just tell everybody hello, Brian?

**Brian Ketelsen:** Hello.

**Erik St. Martin:** And we also have Carlisia here as usual.

**Carlisia Pinto:** Hello everybody.

**Erik St. Martin:** And we have a special guest today, long time Go community member - and I mean _long_ time Go community member - he's got a great beard, and he's also the CTO and co-founder of Iron.io. We have Travis Reeder here, tell everybody hello, Travis.

**Travis Reeder:** Hello.

**Erik St. Martin:** Typically we start the show off by just talking about any news and articles that we've come across. Brian, Carlisia, do you have anything?

**Brian Ketelsen:** Oh, I've got something big. We all follow compiler times on TIP these days, because they can either...

**Erik St. Martin:** No way, nobody does that.

**Brian Ketelsen:** Yeah... The compiler slowed down a little bit in Go 1.6, and I saw a tweet from Dave Cheney recently that showed that one of the most recent commits cut compile times - I'm looking at his [juju](https://github.com/juju/juju) graph, it looks to me like it cut about 40%, so we're getting much closer back to Go 1.4 compile times, which we knew would happen and I'm very excited to see. Hopefully when 1.7 ships, the compile pain won't be as bad as it was before. That's a really big event for all of us, so thank you for everybody on the compiler team - Rob Griesemer, you rock, thanks for doing that for us, we appreciate it.

**Erik St. Martin:** Yeah, I think that that was kind of a public thing, when they converted the compiler to Go, because a lot of it was kind of done through code generation that we all knew that that would happen. But it's great to see the performance come back. Is that part of 1.7? Is that locked into that release, or is this just a commit that's kind of hanging?

**Brian Ketelsen:** There's not a feature freeze for 1.7 yet, so I'm assuming that anything that's in TIP now is a candidate for 1.7 and there's no reason it wouldn't be included, unless it breaks everything.

**Erik St. Martin:** I'm super excited about that. Compile times what - doubled? It was something along those lines.

**Brian Ketelsen:** At least doubled, yeah. They were harsh.

**Erik St. Martin:** It's still nothing compared to C or C++, but we have to have a reason to hate, right?

**Brian Ketelsen:** When you have lightning fast compile times and they go to just fast compile times, everybody whines.

**Erik St. Martin:** \[laughs\] The fast isn't fast enough.

**Brian Ketelsen:** The nice news about these last couple releases is that although compile times went up a bit, performance has improved quite a bit, so with the ssa changes, I think Go is speeding up in general, and if we can get those compile times back down to where they were, we win on both sides - both sides of the compiler.

**Erik St. Martin:** Yeah, great.

**Brian Ketelsen:** So I have another news item that I thought was interesting, but I am completely unqualified to talk about. There was a CloudFlare blog post about building the simplest Go static analysis tool possible, and it made me think that maybe ssa is something within my reach, and it was a very interesting read, so I hope to be able to dig into that when I have some spare time, and play with that. But it's definitely a good read. That blog post will be in our show notes. Have any of you guys played with any static analysis tools?

**Erik St. Martin:** I've played with some of the static analysis tools that have already been created, but I haven't created any of my own. I did see that CloudFlare post though, and yes, that does make things look approachable. I'm not sure that I have anything in particular I want to write yet, but it does sound fun.

**Carlisia Pinto:** New Relic has a static analysis tool, correct? But I don't think it has support for Go yet.

**Erik St. Martin:** To be honest I haven't look at New Relic in a while. In my Ruby days there was a lot of New Relic, but I don't think I've used it with Go, so I'm not sure what support they have.

**Carlisia Pinto:** Is it a general thing that people who are using Go are not using New Relic, I wonder?

**Brian Ketelsen:** I think they just recently added some Go support, I don't know how much though.

**Travis Reeder:** Well, it was certainly popular in the Ruby days, that's for sure.

**Brian Ketelsen:** It was, everybody had New Relic.

**Carlisia Pinto:** Yes, exactly.

**Erik St. Martin:** So we were actually talking about that a little bit this morning, because we know that Iron.io was a Ruby shot prior. How much Ruby is still left?

**Travis Reeder:** There are still some bits and pieces that are in Ruby, typically the things that don't need to perform really well, and I just kind of haven't parted with them yet. To be honest, I'm still a Ruby fan. If I'm writing something that doesn't need to perform and won't be used by a lot of people, I'll still reach for Ruby sometimes.

**Erik St. Martin:** I tell people that too, Ruby I think still has a special place in my heart. I love the way it reads, and stuff like that. For throwing together quick CRUD apps, you can't beat it. I can take Rails and I can throw together an admin area in a weekend, you know? And especially for prototyping. And although these days React and just the JSON API has come pretty close to the productivity that I used to feel with Rails throwing together CRUD apps.

**Travis Reeder:** Right.

**Carlisia Pinto:** Yes, I think when you write in Ruby and Ruby on Rails - I do it still, and it starts becoming a little bit problematic when it just grows and then you don't know what to do with it, so you start to think about Micro services, and maybe moving parts of your app that need to be more performant into other technologies can be a worthwhile endeavor.

**Erik St. Martin:** My thought on Ruby these days is pretty similar to my thought on Java. It's not that I don't like the languages, I don't like the way people write the language. Ruby and Rails have been great, but these huge monolithic coupled together things because people just throw it together because they can, and then it becomes hard to support.

**Carlisia Pinto:** Yeah. And this question that you asked, Erik, reminded me of the question we were throwing around last week about whether we optimize for performance, and I think Travis should be the expert here - I am wondering, Travis, how do you plan for performance loads that you update in the future? How much pre-planning goes into identifying the spaces need to be performant in the future? Because I think a lot of times we go about saying, "Well, I don't need this more efficient technology because my app is never going to need that much performance", and on the other hand... Sometimes you know beforehand, but sometimes you don't know and you need to figure it out. So how does that go?

**Travis Reeder:** It's impossible to predict, right? We didn't know what we would need upfront, that's why we went from Ruby and had to switch to Go. But nowadays we do have a better idea of what we need, and we just always try to push the limit. There is a recent blog post on our blog.iron.io about getting a million messages per second on IronMQ. So we're pushing it; we have no customers that are doing that kind of speed, but we try to push and hit milestones like that, so that if a customer needs that... We're always ahead of what our customers would need.

**Erik St. Martin:** Plus it's just cool

**Travis Reeder:** It's cool, yeah. It's cool when you get those commas.

**Brian Ketelsen:** Nothing makes us happier than good benchmarks.

**Travis Reeder:** Yes, exactly. But that wasn't just Go. A lot of that is due to the database we chose, and the underlying technologies. We're actually using RocksDB under the hood.

**Erik St. Martin:** Rocks is a really interesting project.

**Brian Ketelsen:** Yeah, Rocks is awesome.

**Erik St. Martin:** And CockroachDB is written on top of RocksDB, too. It basically is implementing some of Google Spanners paper, mixed with some other stuff, but that's all in Go, and then their file system layer is done with RocksDB.

**Travis Reeder:** Yeah, I like that Cockroach project, I don't know where it's at now; it was pretty early last time I checked, but we basically did the same thing for IronMQ - we took Rocks as the persistence layer, which is super fast. It's nice for a queue too, because all the data is sorted; it kind of worked out really nice. And then we had to build a networking and replication, and failover, and scaling on top of Rocks, basically.

**Erik St. Martin:** Did you end up using Raft for your consensus protocol?

**Travis Reeder:** Well, I wasn't really on the IronMQ team in this kind of upgrade, but we were using something and I believe it is Raft.

**Erik St. Martin:** And nobody wants to implement the other ones. \[laughter\]

**Travis Reeder:** Yeah, yeah.

**Erik St. Martin:** I remember the first time I saw the Raft paper; I was like, "Ten papers, that's it? No, this can't be right. Or is there a paper consensus protocol?

**Brian Ketelsen:** This is actually the paper consensus for mortals.

**Erik St. Martin:** Yeah, that's right. The title was something like that, wasn't it? Alright, so let's talk about some interesting Go projects. Brian has this whole thing where he goes to sleep and he downloads all the interesting GitHub projects for Go, and then he just spews them out to me in the morning.

**Brian Ketelsen:** It's how I get myself to sleep tonight: browsing the latest commits to Go projects.

**Erik St. Martin:** And I hope that he curates it first, because I don't have that kind of time.

**Brian Ketelsen:** I do, I only share the interesting ones. The first one today I saw a couple months ago and it was just in its beginnings, but it looks like it's getting pretty nice - there is an Oauth2 server, written by Richard Knop. It's called go-oauth2-server, and it looks like it's getting pretty solid in terms of its capabilities. It's a standalone server, it's backed by [etcd](https://coreos.com/etcd/) for configuration and I think postgres for data storage. It gives you the full Oauth2 flows for your apps, and it generates keys, the whole work, so it looks like something that's well worth checking out. Links to that of course will be in the show notes.

**Carlisia Pinto:** It has wonderful documentation.

**Brian Ketelsen:** It does, some of the best I've ever seen for an Oauth server.

**Carlisia Pinto:** Amazing.

**Brian Ketelsen:** I agree.

**Erik St. Martin:** For an Oauth2? \[laughter\]

**Carlisia Pinto:** There are so many...

**Erik St. Martin:** Speaking of Cockroach again, that is probably one of the best-documented projects I've ever seen, too.

**Brian Ketelsen:** Oh, agreed.

**Erik St. Martin:** That's just beautiful, so well documented. And the C++ code was pretty good, too. I don't think I've ever seen C++ look like that.

**Brian Ketelsen:** Readable?

**Erik St. Martin:** What is this weird language? Oh wait, this is C++.

**Brian Ketelsen:** It's really C++? Alright, the second project I stumbled across a couple of weeks ago, and again, it's maturing to the point where it's starting to look really interesting, and that's Rqlite, which is the distributed SQLite.

**Erik St. Martin:** Yeah, I've seen that, too.

**Brian Ketelsen:** Adam's gonna tell us at some point that that's not how you pronounce SQLite.

**Carlisia Pinto:** You're not pronouncing it right, it's SQLite.

**Brian Ketelsen:** Well whatever it is, Rqlite is the Raft-enabled version of SQLite, and it allows you to have a distributed SQLite database, and that's all built in Go, it's distributed... Pretty slick stuff. It looks like it would be really high performance, so I'm kind of itching to test that one out. I might have to build a little cluster and see what I can do.

**Erik St. Martin:** What's the interface for that? They turned it into HTTP rather than interacting with like an actual SQLite adapter?

**Brian Ketelsen:** Oauth, actually. You can query directly against the SQLiteDB on disk, and I think you're required to do all your data changes over the HTTP API, which actually just sends DDL. So the API is a really tiny JSON wrapper for DDL.

**Erik St. Martin:** So the downside is just that you can't just use a normal SQLite adapter, you kind of have to develop HTTP client to start your data, but still... It's really interesting though, because things like Raft, and etcd, and console has really enabled people to build their own distributed systems much more easily. And to Travis' point too, they build on top of RocksDB for the persistence layer and leveraged graph, and they're doing their own distributed census internally, so you can kind of make up your own databases - not that you'd suggest everybody do that, but...

**Brian Ketelsen:** Facebook did it with MongoDB. They took Mongo and stuffed Rocks underneath it, and have an extremely fast and fault-tolerant and high-performant database system. I think -- is it Charity Majors that heads that up? I can't remember, but anyway... Everybody's doing it, and it's cool.

**Travis Reeder:** Anyone tried that Rocks backend from Mongo?

**Brian Ketelsen:** I have not.

**Erik St. Martin:** No... It was on my list, and...

**Brian Ketelsen:** ...it's still there.

**Travis Reeder:** I wonder if it's dead though, now that Parse is dead.

**Brian Ketelsen:** That's a good question.

**Erik St. Martin:** What was the other one that I got hooked on, Brian? The Cassandra one that was rewritten in C++? What's the name of that?

**Brian Ketelsen:** I can't remember now.

**Erik St. Martin:** I'll think of it right after we end this show. But anyway Travis, if you haven't seen it, it's basically wire-compatible with Cassandra, but written in C++ instead of Java.

**Travis Reeder:** Oh, wow.

**Erik St. Martin:** Yeah, that was very cool.

**Brian Ketelsen:** Databases are Erik's crack. He can't put it down.

**Erik St. Martin:** It's code generation for Brian, and databases for Erik. \[laughter\] You should see the list of databases Brian and I have looked at over the years. Different time series databases, databases that are written on the GPU... Just all kinds of stuff.

**Brian Ketelsen:** I still wanna see one of those work. There's so many hype databases right now for GPU, but I haven't seen anybody release one that actually does anything.

**Erik St. Martin:** What was the one... GPUdb?

**Brian Ketelsen:** GPUdb.

**Erik St. Martin:** And there was another one...

**Brian Ketelsen:** There's another one... But at least from what I can tell, they both seem to be pretty close to vaporware.

**Erik St. Martin:** Until somebody hears this episode and does something really cool with it.

**Brian Ketelsen:** Yeah, I'm waiting.

**Erik St. Martin:** Please do...

**Brian Ketelsen:** My e-mail address is bketelsen@gmail.com Send me an e-mail and prove to me that somebody is doing something with GPU databases. I don't believe it until I see it.

**Erik St. Martin:** Alright... So what else do we have?

**Brian Ketelsen:** So the last interesting Go project is an old one, but one that I've just started using recently, and found it to be about as awesome as a utility can be, and that's Syncthing. Their website is syncthing.net, and if you're familiar with any one of the peer-to-peer syncing tools like BitTorrent sync, it's the same sort of thing but it's an open protocol that's written in Go. From a utility perspective, it's great to just sync your documents folder between your Mac and your Linux machine, or your laptop and your desktop. I tried it -- I guess it's been two weeks now. I've been syncing my GOPATH source directory between my Mac and my Linux Box, and I have it set to like a 20-second sync repeat. So if I save a file on my Mac while I'm sitting downstairs, and give it 20 seconds, close the lid, I can come back upstairs onto the Linux Box and keep editing that same file with the changes just by opening Vim up. It's been liberating, it's pretty amazing. I didn't realize that a) the synchronization was quick enough to be able to enable that, and it had just never occurred to me that I could synchronize my GOPATH - at least the source directory of it - and not have any repercussions; it hasn't bitten me in any way. It's been really cool. You clone something into my GOPATH and next time I'm on my Linux machine it's just there. It's really cool.

**Carlisia Pinto:** That sounds amazing.

**Erik St. Martin:** You're using this in place of, say Dropbox?

**Brian Ketelsen:** It's not centralized storage, it's peer-to-peer storage, so each computer runs its own daemon, and they communicate with a centralized, distributed hash table sort of thing that helps each of the computers locate each other. But you have to have a client authorization, so nobody could just log in and grab my source directory. You have to enable each of the different clients to talk to each other. So there's a good amount of security involved in it, and there is no central storage like Dropbox. It's not quite the same as Dropbox, although you could easily use it for the same capabilities if you had two machines.

**Erik St. Martin:** And it works over the LAN?

**Brian Ketelsen:** It does, it works anywhere. I don't know what technologies they're using, but I haven't run into any net-piercing problems or anything like that. It just works.

**Carlisia Pinto:** I'm trying to think of the alternative way to do this as far as writing code, because I want to put a repo on Dropbox or something like that, but the alternative to this, the way you're doing this, would be to push to the central repo all the time, and then pull it on your other machine. And this is super handy.

**Brian Ketelsen:** It really is, it's slick. It cut down the number of crazy branches I've had to push to drastically, because if I'm not ready to commit something to a repository, as long as it's saved on my disk, it syncs to another computer and I'm good. I'm really enjoying the workflow; I'm probably doing something I shouldn't be doing, but I don't care because it hasn't bitten me yet, and it's awesome. Syncthing.net

**Erik St. Martin:** Alright. So let's move on and we'll rope Travis in here a little bit. He's on the show, we should probably talk to him a little bit, huh?

**Brian Ketelsen:** Well Travis, did you have any interesting projects that you've seen recently that kind of piqued your interest, whether they're Go related or utilities?

**Travis Reeder:** Yeah, one that I've been looking at pretty closely is Caddy. It's like a web server/reverse proxy, with Let's Encrypt built in, and things like that. It seems pretty cool, I haven't had a chance to really use it, but I'm very interested in it because we have a want or a need to have some kind of proxy layer, so we're looking at that for sure.

**Brian Ketelsen:** I can tell you that all of the Gopher Academy and the Gopher Academy Blog and GopherCon websites are all served behind Caddy, and have been since something like April of last year when it was in its earliest possible releases, and we absolutely love it. It couldn't be easier to use Caddy.

**Travis Reeder:** Yeah.

**Erik St. Martin:** Brian went all super beta on it, just like you guys did with Go. He's like "It compiles, I'm deploying it." \[laughter\]

**Travis Reeder:** Yeah, it's nice. The only thing I was kind of hoping would be more programmatic, I was trying to sort of be able to pull in all of the internals, and use it in a nice interface, \[cross-talk 00:21:05.28\] It's more web-server-driven at this point, where you need the config file and what not. I was hoping to be able to add a whole bunch of stuff and take away things dynamically.

**Erik St. Martin:** It should be embeddable now. I know Matt has been working a lot on making it embeddable. I think it is now. I know they've been abstracting out some of the components, because Miek Gieben, he's working on CoreDNS, which is like a DNS server that's taking a lot of concepts from Caddy that he really liked. So there's been some abstractions made to reuse some of that logic. If you haven't looked at it recently, you might want to take a look at it again. Check it out, because I'm pretty positive it's embeddable now.

**Travis Reeder:** Yeah, I was actually talking to Matt Holt, and the pieces that I was looking for - proxy and backend and stuff like that - wasn't programmed yet; you had to basically generate a config file and then restart it.

**Brian Ketelsen:** Oh...

**Erik St. Martin:** Oh...

**Travis Reeder:** But I imagine we'll get there.

**Brian Ketelsen:** All you have to do is whisper in Matt's ear and in a day or two it's gonna show up in Caddy, so...

**Travis Reeder:** Well hopefully it does; that was a couple weeks ago, I think. Maybe you guys can whisper it too, and it will happen faster. \[laughter\] Another one that is not too exciting but I've been really liking is Viper. It's basically like command line tools, and pulling in environment variable and config files...

**Erik St. Martin:** And you can override one with the other so that it defaults back to something the same.

**Travis Reeder:** Yeah. We've been using that all over the place now, it's kind of become a default.

**Brian Ketelsen:** That's really cool. Have you tried the remote configuration for Viper yet?

**Travis Reeder:** I have not, no.

**Brian Ketelsen:** I added that I think last year. I love Viper. I think it's really awesome. We used the remote config as the baseline configuration. So things that every machine, every app needs to know comes from etcd and then you can just layer on extra stuff on top of that, and it worked out really nicely.

**Travis Reeder:** That's cool, yeah.

**Carlisia Pinto:** I wanted to mention that I had never written any command line tool before I found out about Go and started learning Go, and I think it's just amazing, having Cobra and Viper. People, if you haven't tried it, you're gonna get addicted to it.

**Erik St. Martin:** And I think all of those came out of Steve's bigger project, which is Hugo.

**Brian Ketelsen:** Yes.

**Erik St. Martin:** I think he abstracted those out of that, because people had kind of similar needs. I love some of that stuff, like Viper with being able to do the subcommands, and things like that. Soo much easier when you have some command line utility that just has a crap ton of functionality, you have to hide away. It's nice to just be able to do the subcommands and Viper allows you to really organize it nicely.

**Brian Ketelsen:** Yeah, those repos at github.com/spf13/cobra, /viper, /hugo, /pflag... I know them all really well.

**Carlisia Pinto:** I don't think there is anybody as prolific as Steve out there.

**Brian Ketelsen:** Nope. That's good stuff too, and it's funny because I've talked to several projects that were writing command line apps, and they've started with no command line-enabling libraries and then they moved to something else, and everybody ends up on Cobra, because it's just the nicest interface for writing command line apps. So if you're gonna write a Go command line app, skip all the craziness and just go straight to Cobra, because that's what everybody else does.

**Carlisia Pinto:** Yup.

**Brian Ketelsen:** You get all these free opinions on this podcast. It's crazy. \[laughter\]

**Travis Reeder:** I gotta throw in one more project that I think is pretty good. It's the Gin Web Framework, or API framework. It seems to me it's the best one for Go so far that I've found. It gets rid of so much code, and makes everything so much easier.

**Brian Ketelsen:** Yeah, and keeps it readable. That's the trick. You can't lose readability when you're writing those big web apps, and Gin does a good job, I agree.

**Erik St. Martin:** Yeah, I think I've been through almost all of them at one point or another, and I can't decide. There's things I love about each, and there's things I hate about each. I feel like I'm going to hate web frameworks forever.

**Brian Ketelsen:** Well you know, my code generation fetish means that I have to be a goa fan. So it's goa for me and nothing else in terms of web apps. I had to get that plug in there.

**Erik St. Martin:** And I have to be fair as much as Brian tries to beat it into me, I have yet to play with goa.

**Brian Ketelsen:** \[laughs\] One day...

**Erik St. Martin:** Hey, I said the same thing - how long does it take me to convert you to Vim?

**Brian Ketelsen:** Years. But now I haven't looked back, so I think you need to trust me on goa, too.

**Erik St. Martin:** One of these days, when I have a ton of free time, right?

**Brian Ketelsen:** Exactly.

**Carlisia Pinto:** There you go, Travis, you need to try goa, and then you'll let us know.

**Travis Reeder:** Okay, I'll check it out.

**Brian Ketelsen:** You can be the objective 3rd party. Come back and tell us what you think about code generation when it comes to API development. We'll put you on the show and you can tell us what you think.

**Erik St. Martin:** Yeah. For Travis and for everybody listening who's not already familiar with goa, basically it's... Brian could probably describe this better, but it's a DSL for kind of describing your API, and then it generates the actual implementation.

**Brian Ketelsen:** Yeah. Which from my perspective, just describing your API - the idea behind goa was that you had to spend, you had to invest that time describing your API well, and then it generated an API for you, which I thought was good. I really liked the whole idea of code generation, and single source of truth, but the code that it generated was so beautifully idiomatic Go code... I was more impressed by that than anything else. Usually when you end up with a code-generated app, it looks like a code-generated app.

**Carlisia Pinto:** That's what I was going to say... When you've been programming for a while and you used those old code generation tools, you kind of get burned and never try them again. I have a hard time trusting... I trust you, but just like you said about something else earlier - I have to see it to believe it. But the website is amazing, and I wanted to ask, does it also generate documentation?

**Brian Ketelsen:** Thank you, by the way, I did the website. The code generation will create a Swagger JSON file for you so that you can use any of the Swagger tools to provide API docs, which I think is really awesome. So you get both the Swagger schema and the JSON schema, that you can use as the documentation for your API. It also generates a Javascript client for your API, and a CLI command line app for your API, so you can call your API from a command line, too.

**Carlisia Pinto:** Get out!

**Brian Ketelsen:** Lots of code generation there.

**Travis Reeder:** Get out... \[laughs\]

**Brian Ketelsen:** My motto for 2016 is 'Generate all the things'.

**Carlisia Pinto:** Wow.

**Erik St. Martin:** Alright, I think I'm gonna have to play with that this weekend. \[laughter\]

**Travis Reeder:** So you actually define the... It looks like you define the API in Go code?

**Brian Ketelsen:** It's Go code, but if you're familiar with - what's that testing framework that is...

**Erik St. Martin:** Ginkgo?

**Brian Ketelsen:** Is it Ginkgo? Yeah, so there's a testing framework, and I think that was the inspiration for the Go DSL. It looks like a DSL, it really truly is Go code, but it uses a lot of anonymous functions to make it look like a DSL. So that's what you write, you write this DSL that describes your API, you describe your endpoints, you describe the messages that are going back and forth, and once you've done that, you write your code generator and it whips out a giant application for you. It's really nice.

**Carlisia Pinto:** How about tests? Does it generate tests as well?

**Brian Ketelsen:** I haven't seen it yet, but I think just yesterday or the day before somebody merged in something that generates tests as well.

**Erik St. Martin:** It's interesting, because you kind of pointed out the number of anonymous functions that it uses to do this DSL, but if you look at any other language that's for DSL that's basically what they do too. So people commonly do DSLs in Ruby, but what do they use for that? They use blocks, right?

**Brian Ketelsen:** Yeah, it's all the same. And people get hung up, especially when they see goa for the first time; when they look at that DSL, there's... We use dot imports to make the DSL look prettier. Dot imports are the end of the world in Go, but it's the DSL; the code that's generated doesn't use dot imports, it's very idiomatic and good-looking Go, so don't let that DSL look hang you up too much. It's just the DSL.

**Erik St. Martin:** Yeah, and that's just to generate your code, right? The code that gets generates is idiomatic, so...

**Brian Ketelsen:** Correct.

**Erik St. Martin:** Now, you've been working on an extension to this for generating ORM communication.

**Brian Ketelsen:** That's right. One of the first things I did after I saw goa was say "Well, if we can build an API, why can't we build the database layer, too?" So I played around with a couple different Go database access layers and finally settled on GORM, for being the one that's the least evil in terms of ORMs. So I made a...

**Erik St. Martin:** How's that measure, anyway?

**Brian Ketelsen:** It's measured in how much crazy stuff it does behind the scenes that you don't expect. As far as GORM goes, it's almost no crazy stuff. I think we've all - on this show at least - done active record in the past and been shocked by the 38 queries that happen when you make one select statement. GORM doesn't do any of that, so it's not too evil. That's good. So I created this plugin for goa called GORMA, which allows you to use that same sort of declarative API DSL to declare your models too, and then define the relationships between the models using active record style, 'has many', 'belongs to' sort of things, and then declare the relationships between the API endpoints and your models, so it will generate your entire API and the data layer with just a couple hours of thought into what it should look like.

**Erik St. Martin:** That's awesome. I'm definitely gonna have to play with it.

**Brian Ketelsen:** There's a YouTube video on my YouTube channel - that's either bketelsen or brianketelsen, I can't remember which, but there's a YouTube video of me talking at the Tamp Go meetup, that's about an hour and a half long, and I do a end-to-end demo of goa and GORMA, and then I load-test it at the end just to prove how awesome it is. So it's pretty slick.

**Erik St. Martin:** If I watch that video, does it count as playing with it?

**Brian Ketelsen:** Yes.

**Erik St. Martin:** Alright, alright. I'll give you that much. I'll at least watch the video this weekend.

**Brian Ketelsen:** There you go.

**Erik St. Martin:** Alright, so before we run out of show time here, let's chat with Travis here a bit. So Travis, you guys were one of the first - at least that I remember - to publicly state that you were using Go. Definitely long before many of the big guys started waving their hands with the "We are, too!" I think it was pre-1.0. It might have even been the Go Tool. You guys might have been launching with make files. \[laughter\] I'd really love to talk battle scars and kind of what made you love the language so much to adopt it that early on.

**Travis Reeder:** Sure. The Go Tool did exist, I believe, when we launched, but it was pre-1.0. Our decision process was... Well, basically we were hitting a wall on Ruby, and we needed to change. I was a long-time Java programmer, so it was kind of that I really wanted to go back to Java to get more performance, or use something new, or one of these Java derivatives, like Scala...

**Erik St. Martin:** Because you really liked tweaking the JVM, and you wanted to do it again.

**Travis Reeder:** I love it, yeah. So we looked at these things, Scala was kind of popular at the time too, and Clojure was kind of hip, too. But this Go thing was there, and we saw that Google was back and there were some really smart people behind it. We tried it, and I think the simplicity of the language, with almost same performance as Java - not quite, but close... We liked that, we prototyped really quickly, a queue implementation basically, and tried to see what kind of performance we could push through it, and it worked really well.

We had some convincing to do, our team and our investors, because you never want to pick the wrong technology, and we just moved forward with it. It turns out it was a really good decision, luckily.

**Erik St. Martin:** It's crazy, because I love the language and Brian and I bought into it pretty early on too, but I don't know whether we made any major production releases pre-1.0. Do you think, Brian?

**Brian Ketelsen:** I put R60 or R61 in production. That was definitely make-file days.

**Erik St. Martin:** But it wasn't the core of the application

**Brian Ketelsen:** No, it was one of the pieces of the constellation, out on the peripheral.

**Erik St. Martin:** Yeah. I mean, building an entire company betting on that this was going to explode is really crazy to think about. I'm glad all of us stuck with it; look at where Go is today. But you don't look at the growth pattern... Now you can kind of look at the growth pattern and see the adoption happening, and you can pitch that to the investor and be like "Look at this, this is only going to continue to get better", but then you had nothing. You were like, "There's some really smart people working on it", but there's also a lot of projects a lot of smart people are working on that don't really take off, especially languages. I don't even know how you predict which language is gonna take off. There are other languages that I've looked at that are just as interesting in different ways to me, and they don't have the growth that Go does. It's just astonishing.

**Travis Reeder:** I always ponder this, I always wonder... There are these early adopters like us and you guys - I'm not saying we did this, but I think us doing that and kind of saying how well it worked in production, and how it totally dominated our previous version that was written in Ruby... I think those kinds of things pique people's interest even more. You have this great team building the language, and then you have some companies that are actually using it in production, so it's kind of a self-fulfilling thing.

**Brian Ketelsen:** I almost disagree just because in the early days for every Iron.io blog post about how you guys moved from slow things on lots of servers to really fast things on fewer servers, there were just as many "We tried Go, it ate our lunch and destroyed the entire company" blog posts. It seemed, especially in the first couple years of Go that there was far more negative press about people trying Go than there was positive press. Maybe that was just my perception of things.

**Erik St. Martin:** I think collectively, the passion that existed in community as it stood was so great though that if you dipped your toes in, you kind of got swallowed, you just got pulled into it. And I think that was some of the stuff -- we've talked about this before too, that I think the reason that we loved it so much is the language itself was so simple. You could reason about the code and then of course concurrency and performance and things like that, so that was enough to pique your interest. And then you kind of got into the golang nuts and you started interacting with all these people who just were so passionate and so eager to help anybody who also shared this interest in the language they loved, and I think it kind of pulled all of us in. I think that's why all of us... All of us here are kind of trying to do things back for the community that pulled us in. You guys are running one of the largest Go meetups.

**Travis Reeder:** Yeah. Rob Pike spoke at one of our early meetups at Heroku's product three or four years ago, and he said surprisingly that most of the people that were using Go were from Ruby and Python and Javascript. They were expecting people to switch from C and C++ to make their lives easier, but it turns out there's a lot of these scripting languages where people wanted more performance. But they had this compiled systems language that wrote sort of like the scripting languages.

**Erik St. Martin:** Yeah, I don't think they predicted that at all. It definitely pulled a lot of people in. People who wanted to do systems programming that felt like maybe it was unapproachable because they've seen C, they've seen C++, they've seen maybe some assembly and it just seemed beyond their reach. Then there were people who used these scripting languages because it felt more productive and they didn't wanna do things in C and C++, and now they had something that they could get the performance without the productivity losses of doing things in C and C++. That may be unfair to say for the productivity losses; I'm sure there's people who were plenty productive with those languages.

**Brian Ketelsen:** I think there's a cognitive load, a cognitive overhead when you're working in something as deep as C++. When you've got templates and all of that code, it's difficult to be really productive. On the other hand, if you're doing the same thing over and over, you reuse a lot of your code, so sure you can be very productive that way.

**Carlisia Pinto:** I feel that with Go as well the syntax is so concise and small. I feel like I'm using the same thing over and over again, which at some point I'm just thinking about the problem ahead of me, as opposed to "How do I do this?" or "How do I do that?" It's completely different.

**Brian Ketelsen:** Yeah, Go is a small language. How many keywords - 67 keywords, something like that?

**Carlisia Pinto:** Isn't it 25?

**Brian Ketelsen:** And two of them are crazy keywords, like 'whereas' that we put in just for fun.

**Carlisia Pinto:** \[laughs\]

**Erik St. Martin:** Just for fun...

**Travis Reeder:** \[laughs\] I really like that you don't need code generation. Coming from Java, you had to use a big IDE that could do a bunch of refactoring and generate all your getters and setters and all this code, whereas with Go you don't really need any of that stuff.

**Brian Ketelsen:** Yeah, a simple text editor. It makes your life easy in Go, I agree. You can keep that whole code model in your head.

**Erik St. Martin:** It's crazy, because Vim - I live by Vim, and Java is the only language I will not try to do... \[laughter\] That's the only one... I'm like, "Alright, alright... I'll just install the IDE", because it feels that painful.

**Brian Ketelsen:** So Travis, what kind of pain points did you hit early on with Go? Did you run into big garbage collection pauses, did you see anything crazy like that, that you ended up having to diagnose early? Or was it relatively painless for you?

**Travis Reeder:** This was a while back, but I think the benefits we gained were so significant that we probably overlooked a lot of the drawbacks. I think probably it was mostly the amount of libraries that were available at that time, which weren't that many. And there weren't that many that were well-tested and things like that, with database drivers and stuff like that.

**Erik St. Martin:** It was maybe a week or so ago Brian and I were reminiscing on that, too. Not in a good way, but thinking back and comparing to today, how much easier people have it. Because you had to write libraries for everything back then.

**Brian Ketelsen:** When I was a kid... \[laughter\] We didn't have DB SQL. The first Go app we put into production, DB SQL didn't exist.

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** Crazy.

**Erik St. Martin:** Yeah, and some of this stuff too... We constantly see stuff now - one of the ones I saw earlier today was OCR written in Go. You can find projects for everything now.

**Travis Reeder:** That's nice. And really high quality. The libraries that come out of the Go community, a lot of them are really exceptional.

**Brian Ketelsen:** Yeah, they're strong, I agree. Go seems to attract really bright people that have solid engineering minds, and then me.

**Carlisia Pinto:** I think Go also benefits from the wave of test-driven development that the Ruby developers went through - that's what I'm familiar with. Before I found Ruby, I wasn't doing that, I didn't even really understand how to do it. And now these developers are working with Go and they bring all those good practices into the community and into their development. So it's very nice... As they say, Go is a modern language, and it's benefitting from past experiences in a big way.

**Travis Reeder:** Yeah, that's a good point. I'd add to that too that it seems like most Go libraries people are testing for performance, too.

**Erik St. Martin:** Yeah, and if they aren't, somebody else is. There's somebody who just crawls... Brian downloads the cool projects, somebody else goes and finds the cool projects and submits PRs to reduce allocations.

**Travis Reeder:** Yeah, it's amazing. Which in Ruby you never saw. They'd be well-tested, but the performance, I don't think it was even looked at.

**Brian Ketelsen:** Nobody cared.

**Travis Reeder:** Yeah.

**Erik St. Martin:** Maybe it was just like the "Why bother?" mentality, or I don't know. I'm a little disconnected from that world now, but it seems like a lot of Ruby itself and a lot of the Rails libraries, people have been going on these crazy endeavors to reduce allocations and things like that there, too. So maybe it's a trend that's happening everywhere, I don't know. It definitely seems more prevalent in Go.

**Travis Reeder:** Yeah.

**Brian Ketelsen:** I think it's part of the Go mindset.

**Travis Reeder:** Yeah. I was just gonna say that. I think people choose Go because -- well, a lot of it is because performance, so I think the libraries have to kind of follow suit.

**Erik St. Martin:** Yeah, that's true, too. If you're going to choose it for performance, you might wanna actually pay attention to the fact of whether or not you're doing it in a performant manner.

**Travis Reeder:** Yeah.

**Brian Ketelsen:** That reminds me of my first attempt to make an addition to the Go language, to fix a bug in Go proper. I think it was in coding somewhere, like maybe base64 encoding. I solved the problem, fixed the bug, wrote a test, all of that, and I submitted the CL, and I got back a comment immediately, "This absolutely solves the problem. I need you to refactor it to get rid of the three allocations you added." And I stared at my e-mail for a good five or ten minutes, wondering what I did to add allocations and how in the world I was gonna get rid of them, because I didn't know. I came from Ruby, I didn't care about allocations. I still honestly don't care about allocations generally, but I didn't know what to do. I grabbed Erik, "Erik, what do I do?" \[laughter\]

**Erik St. Martin:** It's funny though, because I look at code and I see some of the allocations that are obvious, but other people, they just totally outshine you. They look at something really quick and they're like, "There's five allocations there." You're like, "What?" How did you know that just by looking at it for a second? I have to go through and count: "Yup, that would be an allocation, and that one would be one..."

**Travis Reeder:** I think on the core team it's almost like a game inside the team... I remember Blake Mizerany - I don't think he's on the core team, but he's very close with Brad Fitzpatrick and those guys... I think they almost have competitions; I think he wrote a log parser, to parse log font, and his whole goal was to have zero allocations, or something like that. They did it, so now there's this log parser that doesn't allocate anything while it's parsing logs.

**Erik St. Martin:** That's awesome.

**Carlisia Pinto:** I'm gonna have to end this call and go look up how allocations are done, how to recognize them and how to solve them. I still don't know what you guys are talking about...

**Erik St. Martin:** So actually there was a talk by Björn Rabenstein recently from the Prometheus team. He did a talk we'll link in the show notes, and I believe some of that he walks through the allocations, and you can actually see the change... So that might be a good look at it.

**Carlisia Pinto:** Awesome.

**Erik St. Martin:** And I think there's another one too, I'll look it up for you and we'll put it in the show notes when I find it. I think there was another one that I'd seen a while back too, where somebody was walking through looking at code and determining whether something was gonna be stack allocated or allocated, and things like that. We'll find that and link to it.

**Brian Ketelsen:** We talked a little bit earlier about the static analysis tools, maybe there's an opportunity for a really simple static analysis tool that helps you understand the allocations that are being made. I know you can use the benchmark tools that are built in to show you allocations, but a nice SSA tool that's Brian-friendly would be pretty awesome, to show what allocations are being made and maybe suggest changes to reduce those.

**Erik St. Martin:** Well some of them get hard too, because if they could suggest the change, you could make the change. There's two tools that are really good for it. One is just using the standard benchmark and test stuff where you can do the pprof, and you can look at it in the pprof tool, or you can visualize it. Those are great tools for looking for allocations. But the other thing is there's Go command line flags, or the Go compiler itself, where you can pass it in and it will tell you every time that a pointer escapes, and it needs to be allocated on the heap, too. That's also an interesting thing to run on your code during the compilation so that you can see whether or not maybe something that you thought didn't... And it's interesting just because of the way... But it's hard to talk about over a call, because I can't give you code examples. But I'll find some videos and we can link them in the show notes and I can send them out. It's not as complex as you'd think. There are a couple of areas where they are obvious, and the harder part is determining libraries that you call that end up allocating for you, and then accidently passing a pointer that ends up escaping and then having to be allocated on the heap, and you may not have noticed it.

**Carlisia Pinto:** Yeah, I can see that.

**Erik St. Martin:** Like you said, most of the time for most people it doesn't matter. When you're trying to hit the scale... How many requests a second did you say you guys were shooting for, Travis?

**Travis Reeder:** A million.

**Erik St. Martin:** Yeah. See, when you wanna hit scales like that, then allocations matter, because a garbage collector comes into play, taking up time, allocations take up time... So when you wanna hit scale like that, or Prometheus... I think they were just talking about half a million requests a second. When you wanna try and hit scale like that, allocations become really crucial. But I don't think it's something for people to get caught up in really early on, especially if you're new to the language, because sitting there trying to trace down your allocations just kind of hinders the fun of developing it and being productive in this language, and seeing how fast it runs on its own without you having to give much thought to it. I think that if you're starting out you should not be concerned with that. Save that for later. I think that it'd just become too daunting, and it'd be harder to fall for the language, because at that point you might as well be trying to learn C, right?

Speaking of taking on things new, two questions I wanted to ask: one is hiring - for you, Travis, how has that been? We haven't really had to do too much hiring for Go people, so I don't know how big the pool is. Do you guys struggle to find talent? Do you train talent?

**Travis Reeder:** Yeah, that's a good question. It's easy to find people that want to work in Go, it's harder to find people that have actually worked in it, though. So mostly people we bring on have played with it, but they have good systems engineering backgrounds or things like that. The knowledge you have transfers over pretty nicely. But we do get a lot of people that just are sick of whatever they're working on, and they're really excited about working on Go, and if you're working for us, it's pretty much all you're working on.

**Erik St. Martin:** Or you're referencing a Ruby app that you're rewriting in Go? \[laughter\]

**Travis Reeder:** Those days are pretty much over, but yeah. It's mostly news stuff now.

**Brian Ketelsen:** Have you had any new hires that came in and picked up Go and just walked aways saying, "Go isn't for me. This isn't the language that I love, I'm gonna go back to that other thing (whatever it is)"?

**Travis Reeder:** No, that's never happened, actually. Never happened.

**Brian Ketelsen:** There you go. That's anecdotal proof right there, that Go is awesome.

**Erik St. Martin:** It's very good, statistical evident. A sample size of one.

**Carlisia Pinto:** Yeah... You're gonna get a lot of that here.

**Erik St. Martin:** The other thing that you guys adopted early on too is containers. You kind of spoke to Solomon announcing Docker at the Go SF meetup.

**Travis Reeder:** Yeah.

**Erik St. Martin:** How soon after he announced Docker did you guys start kind of playing with it and releasing it?

**Travis Reeder:** I forget the actual timeline, but I don't think it was much more than a year probably, after he first launched it. It was pretty funny when he launched it that the day he launched it, he pushed it to GitHub that day, showed it to the people at Go SF... It was just kind of a sad open source project, right? It's amazing, it's three years in now and it's just taking over the world. So we started adopting it... We were already using LXC containers behind the scenes. You'd upload your code to us for our Iron Worker product - I guess I'll explain what that is real quick. It's job processing as a service, so upload your code - you used to just upload it in a tar or a zip, and then after it's uploaded you can queue up jobs, whether it's one job or a million jobs. We were dealing with all the queuing and infrastructure behind the scenes that run those jobs. Today we call it Serverless. In fact, we used to write articles about Serverless before Serverless was a cool thing. We took care of all the infrastructure and all the hard parts for you, and then we ran all that code in LXC containers to keep it isolated, to maximize the memory in CPU, or to limit the memory in CPU. When Docker came out, it was just like... All the stuff we were doing, it was kind of hard and not many people were doing it, there wasn't much documentation, so Docker came out and made everything really easy.

**Erik St. Martin:** Yeah, it's a beautiful abstraction over the top of doing LXC.

**Travis Reeder:** Yeah, and it allowed our customers to run and test their code on the exact same environment that it would be running after they uploaded it. That was our initial thing into Docker; we said, "Okay, well now you have Docker, you can test your code before, to fully test it. You could test it locally and hope that it worked the same way after you uploaded it, but to really test it you had to upload it, queue up a job and see the results of that job and make sure it worked okay, which is slow and cumbersome.

And then all of a sudden, okay, now they can run in the exact same environment that they're gonna be running on after it's uploaded. But you'd still upload your code. Then more recently we've just said we'll just run any image, so you can create your own image from the ground up, whereas before we had a bunch of different language images that we could use as a base. Now you can use whatever you want, we'll just run any image. So it's kind of in a progression.

**Brian Ketelsen:** So how do you support the any-image plan? Are you piping in and out of standard-in/standard-out? What's the stick behind that one?

**Travis Reeder:** Yeah, I mean... Even before, we'd just execute your code inside a container, and yeah we'd pull out the logs, store your logs, store the exit status and stuff, but inside, your code does whatever it wants. It can connect to databases and APIs, do some processing and then push the data back into your database, or wherever you want it to go. So it's always been able to kind of do whatever it wanted, and we'd collect all the logs and stats and things around that. So it's not much different, other than that you now have full control over that image, which makes it pretty nice. You're not stuck to our environment, and whatever we installed on that operating system is the only thing you can use; now you can go and install your version of ImageMagicK or anything that you need into it.

**Brian Ketelsen:** That's nice.

**Erik St. Martin:** You said you didn't have any real battle wounds from Go adoption early, how about containers?

**Travis Reeder:** \[laughs\] That's a different story, we had a lot of problems with Docker. When Docker first came out there were a lot of bugs. The Docker daemon would lock up, for instance, and basically... In fact it didn't just lock up, it would lock up the entire machine; you couldn't even SSH into it. So there were some pretty bad ones... But it didn't happen all the time; these things would happen randomly. Our solution to some of these things in the early days was just restart servers, or kill and launch new servers every day, basically... Like always flush out these servers.

**Erik St. Martin:** In the late '90s that was my approaching to administering SQL Server - reboot it.

**Travis Reeder:** Well, it works, you know? It clears out all the crap that's been building up. But it also had memory leaks and things like that, but that also fixed the problem because as long as you restarted the server before the memory ran out... So there were some issues; it's a lot better nowadays, though.

**Brian Ketelsen:** It really is. Running Docker in production is one of the nicest things about 2016, I can tell you that. Especially with tools like Kubernetes and Rancher and Deis... All of these really nice orchestration tools that make it so easy to manage Docker.

**Travis Reeder:** I think Docker and these containers are gonna take over the computing world, for sure. I'm pretty bullish on it.

**Brian Ketelsen:** I agree, too.

**Erik St. Martin:** So what's your prediction there? You like to make a lot of predictions for Go. What's your prediction for Docker and containerization?

**Travis Reeder:** Like where it's gonna go?

**Erik St. Martin:** Yeah. Do you think we'll ever truly get rid of VMs and it will be all containers, all the time? Or they'll just have the primary market share.

**Travis Reeder:** I think it should be all containers, all the time. I love Rancher, and CoreOS's philosophies - just everything in a container. The beauty of it is you fire up a new server, and all you need to do is have Docker on it, right?

**Erik St. Martin:** Yeah. I mean, I love CoreOS's approach to the kind of like, you should write crashable software, right? You shouldn't have to plan the server restart, right? At first, that seemed really odd to me, you know? Like, "Oh man, at any point it could update and restart?" That seems crazy. I guess there are some cases where you never want that to happen, but for most people's use cases your system should be able to tolerate that. If one node going down can affect your entire production system, then you've got much bigger issues.

**Travis Reeder:** Yeah. We even use it in development a lot now, too. You clone a repo, and without any tooling or anything like that, you can sort of start using it right away, and get into it.

**Brian Ketelsen:** Yeah, it has made the development workflow... You know, we talked about CockroachDB earlier; CockroachDB had - I don't know if they still do, but last year when we were playing with our fork of it, it had some pretty serious dependencies that had to be installed in order to build it. Making that whole thing Dockerized, Docker, pull Cockroach and run it, and you're done - the development pain has gone down drastically. I haven't had a database installed on any of my development workstations ever since Docker existed. Once Docker came out, that was the last time I installed Postgres or MySQL... Forget it. There's just no need to have those sorts of peripheral utility applications running on a development workstation any more. They're all Docker containers now. Docker can pose up.

**Travis Reeder:** Pretty amazing. On the op side too, it's pretty amazing. We've kind of adopted Docker for all of our deployment and what not, not just for running people's code. Everything's so much easier if you base everything around that one thing. You don't have to say "Okay, well these servers need this stuff installed... These servers are running Go, these servers are running Ruby, these servers are running Java..." You know, all the servers need is Docker, and you can do all your ops and all your deployment through that one unit.

**Erik St. Martin:** Alright, it looks like we're about out of time. I think we actually went over a little bit, but before we go, we have a history of doing kind of like a \#FreeSoftwareFriday shoutout, where all of us will kind of just give thanks and praise to some open source project that is currently or has in the past made our life easier. So we'll quickly go around the room - the virtual room - and everybody can kind of mention a project. Brian, do you wanna kick things off?

**Brian Ketelsen:** Sure. Last week I've mentioned that I've decided my new year's resolution this year - it's a couple months late. My new year's resolution was to start learning frontend development; I've been doing backend forever and completely left behind by the frontend scene. So I started learning GopherJS, which I think is just amazing, the ability to run Go that's transpiled down to Javascript on the frontend, and recently I found polymer bindings for GopherJS written by Luna Duclos. That's at github.com/palmstonegames/polymer. If you want to write in a pretty material design frontend using GopherJS, then the Go polymer bindings are the way to do it. It makes it easy enough for even me to be moderately successful.

**Erik St. Martin:** Carlisia?

**Carlisia Pinto:** I like to every once in a while acquire new tools to look at my code. I like to know what's going on under the hood, things that I wouldn't necessarily catch just looking at it, and I found this tool called gocyclo. It measures the cyclomatic complexity of your code. There's a simple command line tool, you just run on it. This guys has a few flags and he will let you know how many cyclomatic complexities a specific block of your code has, and it points you to the line number and the file name. I thought that was really cool.

**Erik St. Martin:** Yeah, that's actually really interesting. I have not seen anything like that in Go yet, and cyclomatic complexity measurement is actually really common in the Java world. Almost all CI environments I've ever worked in in Java used it, so that's really cool, I wanna check that out. I don't know whether I've ever seen any Go code that's high branch rates, and stuff. It'd be really interesting to run it on some big Go project and see...

**Brian Ketelsen:** We have it built into the CI routine in goa, so we will fail if our cyclomatic complexity is higher than 20 on any function.

**Carlisia Pinto:** Wow, very cool.

**Erik St. Martin:** That's awesome. And Travis, we're kind of blind siding you here, but do you have a project you'd like to give a shout out to?

**Travis Reeder:** Probably the ones I mentioned earlier?

**Erik St. Martin:** That's true, we did give shout outs a lot in this episode.

**Brian Ketelsen:** It's good, though.

**Travis Reeder:** And I can't forget Docker, I suppose, after talking about containers.

**Erik St. Martin:** Docker's an easy one.

**Travis Reeder:** Yeah.

**Erik St. Martin:** For me, I guess recently just the fsnotify, which Nathan Youngman has kind of taken over that and adapted the API to this spec the Go team kind of suggested. Anybody who's unfamiliar with it, it's basically for monitoring file system changes on files. With that being said, all of these projects and all of the ones we mentioned earlier, we will link to in the show notes, and give everybody new stuff to play with. I want to thank everybody for coming on the call, I think we've had some fun conversations. Definitely thank you Travis for coming on the call with us.

**Travis Reeder:** No problem, it was good to be here.

**Erik St. Martin:** There's rumor that you guys are doing some kind of major announcement in the near future, and maybe we can get you to come back on and talk about that.

**Travis Reeder:** I'd love to, yeah.

**Erik St. Martin:** If you're not already subscribed, go to GoTime.fm and you can subscribe to the podcast and the newsletter. We are also @GoTimeFM on Twitter. What else am I missing here...? GitHub - if you wanna make suggestions for people to come on the show or topics, github.com/gotimefm/ping. With that said, let's call it an episode. I'll catch two of the three of you next week.

**Brian Ketelsen:** Hey Travis, on behalf of everybody, thanks so much for all you do in the Go community, we truly appreciate all that you and Iron.io do to facilitate Go, in San Francisco especially, it's really awesome.

**Travis Reeder:** Good to hear, thank you guys.

**Carlisia Pinto:** Absolutely, I'll second that. Thank you.

**Erik St. Martin:** Alright everybody.

**Carlisia Pinto:** Goodbye.

**Brian Ketelsen:** Goodbye.

**Travis Reeder:** Bye guys, that was fun!
