**Gerhard Lazu:** I'd like to start with a story. I know that you've been helping Changelog.com, the codebase, in different ways... The thing which I remember is that our response latency went down; you did some tweaks... Is that right, or am I confusing you with Alex?

**Lars Wikman:** I think Alex gets the credit on that...

**Gerhard Lazu:** I definitely know he improved the N+1 queries, that's for sure...

**Lars Wikman:** Yeah. I even caused some of those...

**Gerhard Lazu:** Okay, okay... So you're the opposite of Alex.

**Lars Wikman:** Yes, exactly. I'm here to create opportunities for performance improvements.

**Gerhard Lazu:** I see. So that's the way it goes... Okay. So you're making it worse and he's making it better... The difference is like it's zero, right? Okay, so we're not going anywhere.

**Lars Wikman:** \[04:04\] It's very important to have a stable codebase, and a very stable operation... \[laughs\]

**Gerhard Lazu:** It is.

**Lars Wikman:** Some of the work I've done with The Changelog has been on a few things that haven't been released, and a few things that -- basically, housekeeping around how emails are sent out, and to whom. I think and I hope that there will be some more stuff done with the meta-costs feature I made; I had the opportunity to write a small DSL, which would be nice to expose to the public. I don't think Jerod has put it into action, so this is a good time to shame a little bit about it...

**Gerhard Lazu:** Okay. So Jerod, if you're not listening, it's okay, and if you are listening, what's up with the meta-costs? I don't know anything about it, but... Yeah - what's up with it? That's what I'm wondering.

**Lars Wikman:** Yeah. But it was very fun to get a chance to work with Jerod and the Changelog codebase in a slightly dedicated fashion. So it was a few months... That would have been last summer that I spent some time with this codebase. Then I introduced Alex when I didn't have time anymore, and he seems to have torn things up. He really, really has pushed a few things forward.

**Gerhard Lazu:** He did, yes. Definitely. The PromEx stuff I think is the one that I got the most excited about, because it touches on the infrastructure side of things; it just integrates a couple of things together, so that it is from my perspective very visible and something which I'm very interested in to see how are things behaving.

The N+1 optimizations, improvements, N+1 query improvements - that was great to see as well. I didn't know that you were the cause for it, so... I'm not sure how I feel about that. \[laughs\]

**Lars Wikman:** I think I only introduced one fairly chunky case of them. It was mostly when you're doing development that it turned things a little bit slow to start, because I was doing something optimistic, but it didn't turn out...

**Gerhard Lazu:** I mean, the key takeaway from this little conversation is that you are deep into Elixir, into Erlang, into -- is Erlang fair to say? You're a co-host on BEAM Radio, so BEAM is all Erlang...

**Lars Wikman:** Yeah. I'm very excited and enthusiastic about Erlang, but I don't write Erlang. I write Elixir. It runs on the same VM as Erlang, so all the Erlang technology benefits Elixir. A lot of the Elixir technology benefits Erlang, but it can't fully go in both directions, unfortunately. Mostly a technical reason for it...

**Gerhard Lazu:** Okay.

**Lars Wikman:** But yeah, I am very invested in the BEAM ecosystem. BEAM is the name of the virtual machine...

**Gerhard Lazu:** Do you know what BEAM stands for?

**Lars Wikman:** I think early on it was Bogdan's Something-something Machine. I don't remember exactly...

**Gerhard Lazu:** Erlang Abstract Machine... Bogdan's Erlang Abstract Machine.

**Lars Wikman:** Exactly. Because initially, it was JAM, which was Joe's Abstract Machine, I imagine...

**Gerhard Lazu:** Yes. Joe, you're still in our minds. I know that you're not listening, but those that know, Joe Armstrong, the co-creator of Erlang - you're still in our minds. Thank you for everything you've done. You've shipped a great thing into the world.

**Lars Wikman:** Yeah. The BEAM and Erlang absolutely wild. It's been interesting that through many years I've heard of Erlang, and people have been like "That's a weird one, but it has some really strong ideas and it has some really strong features", and it's like "Oh, okay. Whatever." I don't really do FP; it wasn't really in my wheelhouse, and I figured it was probably too complicated for me. Now I'm very, very keen to avoid working with non-BEAM languages, if I can... Because there's just so much you get with a BEAM that you just don't have in other runtimes, or that you have to work so very hard for in other runtimes.

**Gerhard Lazu:** Which are your top three favorite BEAM features?

**Lars Wikman:** \[08:07\] Concurrency and parallelism at the same time, for essentially no extra effort. It makes you do concurrency and parallelism correctly and reasonably, without tripping you into sort of mutable state and the dangers of concurrency and parallelism. So that's one.

Then there's the whole resiliency thing, which is built on sort of the same idea, or some of the same ideas, where there will be things that happen to your application that are unexpected, that you can't really catch with just catching an exception. Maybe the disk was full, maybe the service you were talking to was down... There's always something to make it blow up. And it has been described as the "Let it crash philosophy", but it's not always the most -- it's not the best marketing. It makes managers very, very nervous... But the idea that it's okay if certain components fail, and an important thing is to have a recovery strategy. This actually sort of feeds into the Kubernetes thing, which has a similar approach, but on a diffrent scale. And this sets me apart from a lot of functional programmers... Some functional programmer enthusiasts really like their types. I'm very glad that Erlang and Elixir are dynamic.

**Gerhard Lazu:** Okay. Apparently there is a typed Erlang syntax, DSL, coming from Facebook. I say Facebook, but it's really WhatsApp... I keep forgetting its name, but something-Muskała... Do you know who I'm referring to?

**Lars Wikman:** Oh, yeah, Michał Muskała is the guy that, as far as I know, started the effort, or was probably leading the effort...

**Gerhard Lazu:** That's right.

**Lars Wikman:** I spoke to him once in Prague. That was before he was at WhatsApp. But that's a super-interesting effort, and I think that type system makes perfect sense for what they need. They're a very large organization... But I don't really find it compelling for building the kind of web apps and systems that I do. I find type systems to be a little bit annoying. I've done some work recently with Elm, which has a lot of types... That was frustrating at first, but it was also compelling. It showed me some of what you really get with a types-first approach, I guess... So it's interesting, but I'm not sure I love it.

I'm very, very happy with having a dynamic language. I come from Python and PHP originally, so that's... Yeah, the Ruby lineage of Elixir works fine with what I'm used to. It was a fairly easy transition, all things considered.

**Gerhard Lazu:** That is a really good top three. So we have a good idea of why you like Erlang, and which are the top three features of the BEAM... Specifically I say Erlang. When I'm saying Erlang, I'm referring to the ecosystem more, the virtual machine, and less the programming language. So that makes a lot of sense. I'm wondering when you're done coding your Elixir app, how do you ship it? How do you get it out there?

**Lars Wikman:** So that very much depends on context.

**Gerhard Lazu:** Let's take the last one. The last Elixir app that you had to -- and whether it's a service -- I mean, you can tell me about it. How did you ship it?

**Lars Wikman:** So right now I've been spending part of my day setting up a Docker file, so that'll tell you something... So Elixir and Erlang have this idea of releases, where you bundle everything, including the runtime, into a nice little package that you can just shove into a server and start, without needing any dependencies, essentially; or very few dependencies at least.

**Gerhard Lazu:** OpenSSL is always the trickiest.

**Lars Wikman:** Yeah, OpenSSL, and usually ncurses. Libncurses.

**Gerhard Lazu:** Yeah, if you need that... But yes. I know OpenSSL - you will definitely need that, because you will be doing some sort of encryption somehow; it doesn't matter how... But ncursus is --

**Lars Wikman:** \[12:13\] There's always encryption in there somewhere...

**Gerhard Lazu:** Exactly.

**Lars Wikman:** So I think releases are sort of my ideal for keeping it very lean and just shipping it to a server... But in this case we're going to be doing on-prem deployments, so someone else is gonna set it up on their own hardware... And my plan is for them to be given a Docker compose file, some credentials, and just go docker-compose up. I'm mostly using Docker because we want to set up a database, and it's not an embedded database, so we need to start a database in Docker...

**Gerhard Lazu:** Which one?

**Lars Wikman:** In this case it will be Postgres, probably. It was built with MySQL, but I'm sort of transitioning it to Postgres. That's a little bit of a preference of mine. In this case, Docker is mostly serving as sort of being so industry-standard that it will be familiar to more operations people than actually just running a binary would be...

**Gerhard Lazu:** Yeah, that's interesting, because I think if you are shipping just the app itself, then a binary - that's okay, right? It's an executable, you just run it, and off it starts. It's no different than, for example, a Docker container. Now, if you do have dependencies, like PostgreSQL, how do you get that started, and which version will you get, and will the package manager have the version that you get? And will it have SSL enabled? Maybe it will, maybe it won't. So all that configuration - now you're starting to get into the whole configuration aspect of it... So how do you configure it? How do you get them to talk? What about -- I don't know, maybe you need to do some tunings in PostgreSQL. Will you be shipping them as well, or will you just let the team that runs it figure that part out?

**Lars Wikman:** Yeah. And in this case, we would want to take care of all of that and just provide the docker-compose and go HAM. And whenever there's an update, maybe we need to tell them to pull a new docker-compose, or maybe they just need to update an image... But yeah, when you have additional infrastructure and you need someone else to set it up - that's a different case from, for example, how I run my own stuff, just small services I run. I run beambloggers.com, which is just scraping RSS feeds for the BEAM community... So if you wanna track sort of Erlang and Elixir, that's a good place to get an ever-growing RSS feed.

But the way I do that is just the release that I actually build on the server, and stand up there... Because the availability level I need to maintain on that one is whatever I feel like.

**Gerhard Lazu:** That's a good one. I think that has merits. I mean, some use cases, that's perfectly fine; nothing wrong with that. It's all contextual, I keep mentioning this. If that works for you, that's great. There's no problem. And maybe someone could benefit from that simplicity.

**Lars Wikman:** And that system particularly actually stores all its data in memory, and whenever I restart it, it just blows it away, it refetches it from the web...

**Gerhard Lazu:** That's interesting. Okay...

**Lars Wikman:** It was a fun way of building it, mostly... It means I don't have to deal with any database setup for that particular service. I have a few different services where I just keep things around in memory, because they are fairly ephemeral, or the history isn't particularly important...

**Gerhard Lazu:** So what I'm hearing is they are stateless systems, stateless services, which means that you could start them anywhere, and they would get the data just in time, after they boot, or maybe part of the booting process. I'm not sure when exactly it happens. But there's no state that you have to move with a service.

For example, if you were to stand this beambloggers elsewhere, on boot it would get all the data that it needs, and would start serving it. It wouldn't need to run on a specific machine.

**Lars Wikman:** \[16:14\] Yeah, so it's very -- at least very independent. It's stateful when it runs, in that it keeps a lot of state around... But it absolutely does not rely on some source of state, or needing to carefully manage state when it goes up and down.

For some other services where I do want to keep history around, I've started using SQLite much more than I used to... Because that's also operationally much simpler than Postgres, and I don't find Postgres particularly challenging. It's easy enough to manage, and I like it, but SQLite is even easier, and makes a lot of sense if you don't have a lot of heavy needs... And I've recently seen -- so there's a project called Litestream, which solves one of my bigger concerns with SQLite, which is replicating it, or at least having a very recent back-up... Because it's very easy to accidentally blast away a file on disk. So it hooks into the write-ahead log of SQLite and just ships it to any S3-compatible storage, on any update. So it does an ongoing replication of SQLite, and then you can just restore from that. I don't think it's necessarily feasible to do high-availability with SQLite, but if I was building a product right now, sort of a small-scale SaaS, or that kind of thing, this would definitely be something I'd consider.

There was a Hacker News thread around the time that Litestream got some attention... It's done a few rounds. Someone mentioned running a product on SQLite, and I think they've benchmarked it to 10,000 reads a second, or 5,000 writes a second, on an NVMe drive... That's a lot of read and write activity; a lot more than I would typically expect to need to serve for a small-scale SaaS. And if you can scale with just using something like SQLite up to that level, then you're probably successful enough that you can switch it out for something else at that point, and make all those decisions about complexity.

**Gerhard Lazu:** That is a very good point, actually... Litestream - it will be in the show notes, but it's litestream.io. It's Ben B. Johnson. I think he was on Changelog at some point. I remember this coming up... And you're right, Ben Johnson - he's the author of BoltDB, so he has some experience in this area, let's put it that way... I do remember it sounding really interesting, so you can check it out if you want.

But my takeaway is that you like keeping things simple... And if it gets the job done, that's it, that's all it needs to be. It doesn't need to be fancy, it doesn't need to be impressive, it doesn't need to be "Look at me. I've done it in this way, that no one else has done it before." It doesn't have to be that. It just has to work.

**Lars Wikman:** Yeah.

**Gerhard Lazu:** And if this works for you, that's great. Yeah. And since I do consulting for a number of different clients, I always have to adapt to whatever is already there. So the client that I will be shipping on-prem for doesn't actually have a thing in place, so that's sort of me putting my opinions and stamp on that. I'm there to solve that problem. But in other cases there is an existing ops person or ops team, and I'm mostly shipping code, and then I'll roll with whatever they have. And if I don't like it, I'll be swearing a little bit under my breath and maybe giving them some opinions... But typically, I'm happy to roll with whatever is there.

\[20:09\] I don't really believe in making radical changes to software that's already working, even if it's not working in the way you think it maybe should. But there is this trend also, particularly in the BEAM ecosystem, where there's a lot of things you can get done by using only the BEAM. The BEAM actually ships with a distributed database inside of it, Mnesia. It has a lot of challenges; it has some sort of conflict resolution problems when you run it in a distributed fashion. So I haven't been keen on using it for anything else than sort of caching. But with SQLite in place, then you can actually use the standard tooling in Elixr around Ecto, which is essentially the ORM -- not so much objects, but relational mapper, I guess...

**Gerhard Lazu:** Do you know which is the biggest Erlang project that uses Mnesia?

**Lars Wikman:** It would probably be WhatsApp.

**Gerhard Lazu:** They do, but they use it in a different way; in a very different very way. As far as I know - and this was many years ago - they used it on just a few servers, and they used it for (I think it was) just metadata, but very small metadata. So nothing that is heavy writes or heavy reads, and I think the eventual consistency was okay for it, so things did not -- like, dirty reads for example were a big thing for them... But they used it on a subset of nodes, and they had dedicated nodes for that... And I think they wanted to move away from it, or there was talk about that... This was at least five years ago.

The project which I have in mind, and I had a first-class seat to it, was RabbitMQ. It's one of its Achilles' heels. Mnesia - oh, wow. At any sort of scale, you start seeing some serious issues. 10,000 writes per second? No way. No way. Because it's the synchronization part, and you have to go over a network, and you have multiple nodes, and it's all synchronous... You have transactions...

**Lars Wikman:** Yeah. So you have to typically look at Mnesia in the context it was created, which was telecom. And as far as I understand, it was typically between machines that were very tightly coupled together. I've heard people talk about [backplanes](https://en.wikipedia.org/wiki/Backplane) and I have no idea what that is, so I'm not even gonna try... But yeah, it was about managing phone calls, and that kind of connecting... Which is very different from your typical web app, or "keeping everything around forever" type of infrastructure that we deal with now.

I've definitely looked for something that would essentially scale arbitrarily as a database across nodes as you add more... Not that I have the need, just because I want to see if there's the perfect solution out there... And I've found CockroachDB to be very appealing in that sense, because it's Postgres-compatible, and it's made to be distributed by default, which - Postgres has a lot of upside, and it's great, but it is not built to be distributed by default. And they've built a lot of distributed features into it, but you know very well what can happen when you try to replicate Postgres.

**Gerhard Lazu:** Oh, yes...

**Lars Wikman:** \[23:45\] I thankfully haven't had a reason to spend too much time replicating Postgres. But yeah, looking at Cockroach though, you'll also see that sort of suggested specs and what they suggest for setting up Cockroach - there's a lot of concerns and a lot of things to think about, and a lot of details suddenly, that you don't typically think about when you're setting up a single Postgres instance. And I think this feeds sort of into the whole idea of Kubernetes as well. It's like "Oh, but this is an abstraction layer that simplifies everything. It generalizes everything, so you don't have to think about all the details." But in my book, you can never ever stop thinking about the details. It's like, "Okay, we brought in Kubernetes, so now we don't have to know how Linux works?" No, I don't think so... What's your experience there? Does bringing Kubernetes in make you stop having to care about your Linux installations?

**Break:** \[24:47\]

**Gerhard Lazu:** You've mentioned a couple of things which I would like to dig in a little bit more. First of all, you mentioned about using PostgreSQL in your most recent project that you're doing for the customer, the one that you are deploying using docker-compose, or that you're using docker-compose to run it... And I'm wondering, in that context, why did you choose PostgreSQL over SQLite.

**Lars Wikman:** Yeah. That's actually a very good question, and I've been wrestling with it myself a little bit. So one of the bigger reasons is that the current SQLite adapter for Elixir is fairly new... And SQLite is very reliable, but I don't feel like that particular adapter has necessarily been proven out yet, and shipping that to customers before I'm certain and I have a track record with it that's more than a few experiments - I just don't feel entirely comfortable doing that, so I opted for even steering them away from MySQL, which is perfectly well-supported, into what is the absolute mainline of Phoenix, which is Postgres. It seems to have the community behind it.

Partly, I want to leave the client with something that other developers will definitely recognize and be capable of working with, if it ends up that I'm not around in the long run, or for whatever reason. I wanna bring us closer to the main line. And there are a few very cool projects and very useful projects in the Elixir community that lean on Postgres-specific features. One of them is Oban, a job processor. So having the option of using that is also a good one... But this would be a good project for SQLite and shipping that.

\[27:50\] There's also a little bit of a question mark around some back-ups... Like, okay, then we will want to use Litestream. But do I have something S3-compatible to ship it to, or do I need to stand that up myself and then pull the file out and throw it at -- yeah...

**Gerhard Lazu:** Those are really good points, and I really like the way you're thinking about this, because it's about confidence. Whatever you're giving when you're (let's say) shipping it, and "Here you go, customer. This is what was done for you", someone has to maintain it. Someone has to deal with all the issues that arise, because they will arise. Updates - hello? Everybody seems to forget about them, except when they have to be done and then they don't do them, because... "Hmmm. Updates? No." It's very important to keep up with those things. CVEs - how do you address CVEs if you don't have a good way of releasing these updates out there? And if you're not confident in what you have and the point that you reach, it becomes a bit more difficult to take those small steps, those small improvement steps... So I think it makes perfect sense. Not to mention that, as you said, you may not be around. Someone else may take this over, and you want them to take over the most supported, the most documented, the most known thing... And I think Ruby on Rails was like that for a long, long time, in that I can see a lot of parallels between Ruby on Rails and Phoenix, and there were some good, sensible defaults on Ruby on Rails that if you went outside of those, there was a lot of pain there.

So - sure, you can use MongoDB, but why would you, with your Ruby app? Just stick to MySQL. That's what the majority does.

I do remember being in situations in the past when we did that, and there was some pain there. The drivers were great, I still remember many discussions with Jordan - I forget his family name, but he was the maintainer of Mongo, I believe, if I remember it correctly... And that was a great library, but still, there were issues that you wouldn't expect. So it just goes to show that ever from my experience, I remember moments when I wished I had chosen the default, and I didn't. And not just me, but others paid the price for that. It was just not fair.

So if I learned anything, if you can stick with the defaults, or with the most common path, especially in these cases, it's maybe best to. Now, if you have a personal project, like you have - you have a couple of experimental projects - you can use anything you want, because your SLO is whatever you want it to be. And it can change from day to day, and it's fine, so it doesn't really matter. But for others where reliability, upgradability is important, you need to choose differently.

**Lars Wikman:** Yeah. Sometimes it pays to make a dull choice here and there.

**Gerhard Lazu:** Yes.

**Lars Wikman:** I'm happy to go absolutely wild on my own projects, but it's also things like -- if I'm shipping a library to the community, that's also where I will be looking quite closely at like "Okay, but what is a good library? What does it mean to behave well as a library in this ecosystem?" I can't just put all of my opinions in there if I want to be a good citizen. And yeah, I think that sort of carefulness about what you choose, that's something I've picked up with the years. I've definitely had a few years of chasing shiny, new frameworks, shiny, new ops technology, setting up servers in cool, new ways, building a custom microservice architecture from the ground up...

**Gerhard Lazu:** Just because you could, right? No other reason. "I can do this, so why not?"

**Lars Wikman:** Yeah. Oh, we absolutely needed to scale that product so hard... That's actually what we had as an objective... "Like, this has to be scalable. The last iteration of this product was not scalable. Let's greenfield it, let's build it right. It should be able to scale." And that architecture could absolutely have scaled, but that product did not need that scale. At all. It could have been so much simpler.

**Gerhard Lazu:** That's a good -- like, why? Why does it need to scale? If you don't ask enough why's... Like, "Why(s)?" This is something which I have seen - teams and products that keep going in the wrong direction, and then it doesn't matter how fast you go in that direction, because it's still wrong. You're going infinitely fast in the wrong direction, so... If you're going infinitely slow, because it's -- you're not even going in the right direction, so what's the point? Why are you rushing towards a direction that doesn't benefit anyone?

\[32:23\] And then years later, people would be asking "But why did we do that?" and none would recall, because it doesn't make any sense. Things that don't make sense, people tend to forget. Like, you're right, it doesn't make sense...

**Lars Wikman:** Yeah. I wrote a retrospective on that particular architecture, an entire product through three different iterations, and put it on my blog... And I've had some interesting feedback on that, because people don't always share -- I wouldn't even call it a failure story, because the product was a success and it did fine, until it was shut down at some point.

Some of the technical choices I would not make again, but that's where I learned that I probably shouldn't have done that, or I shouldn't have done it that way. Some of the choices checked out, some of them didn't.

**Gerhard Lazu:** So in that retrospective of a post that you wrote, by the way - what's the title of the post?

**Lars Wikman:** I think it's "Ten years in the vertical."

**Gerhard Lazu:** "Ten years in the vertical", okay. We will link it in the show notes for those that want to read it.

**Lars Wikman:** Yes. It's a three-part series, one for each version of the system.

**Gerhard Lazu:** Okay. So get your coffee/tea ready, whatever you're drinking. Strap down. It's a long one, but a good one. Worth it, right? I will read it myself, by the way, because it sounds very interesting. Is it funny?

**Lars Wikman:** I'm not sure if it's funny. I hope it's a little bit funny...

**Gerhard Lazu:** That's a killer combo...

**Lars Wikman:** I've definitely had good feedback on it, so it should be bearable to read, at the very least...

**Gerhard Lazu:** Okay. Alright. The coffee will make it worth it. No, no, no. I'm joking. The fun and interesting - it's like a killer combo, and if you can do both, it's great. It's like the jackpot of content.

**Lars Wikman:** And on the shipping side of that, that was mostly Ansible. But it ended up being a lot of Ansible, because we did split everything up into microservices...

**Gerhard Lazu:** Oh, yes.

**Lars Wikman:** ...for a three-person team.

**Gerhard Lazu:** That's what you get, right? It's one of the trade-offs that you get. You may need that; I know that some teams do... But not everyone does. And knowing the difference, when to use a microservice versus a monolith, is a very important thing. Like, know the answer before you embark on the journey... And even if the answer comes slower, it's worth it. Take your time. Because getting out of that particular journey - it will be very difficult. It can be done, but it's unlikely to happen.

So it's one thing that you want to choose wisely... You could choose maybe your cloud provider, you can migrate, and even that can be a bit difficult, but it's easier than going back from a microservice decision... Or a monolith one. By the way, sometimes that is the wrong decision, so we're not saying that one is better than the other.

Okay, so we touched on a couple of interesting things, but I still think we haven't dug deep enough in the hole, before you mention about Kubernetes. So I don't think we dug deep enough into that. One of the reason why we're even having this conversation - because I know that for you Kubernetes doesn't make sense... And that fascinates me, because I'm not saying that everybody should use that, I'm not saying that, but I can see a lot more reasons to use it than not to use it, and it's that API that from my perspective is the best thing that it has. So it's how it approaches operations, and the building blocks that you have at your disposal. You can achieve the same thing in different ways, but I don't know, having tried most of them, I kind of like it, and it makes a lot of sense.

So why in your case you're not using Kubernetes, at all? Because I don't think you're using Kubernetes. You hear about it a lot, but you don't use it. Why is that?

**Lars Wikman:** My experience with Kubernetes is essentially I tried K3s at some point, and started learning how to set up manifest files, and a lot of swearing ensued, and then I stopped, essentially. For one thing, I don't generally build systems at a large scale. I typically work with teams that are maybe five developers or so...

**Gerhard Lazu:** \[36:21\] That didn't stop us from using Kubernetes at Changelog. We're like three developers, one full-time, and even that one's not full-time... And we're still using Kubernetes. \[laughs\] So that didn't stop anyone. But please continue.

**Lars Wikman:** Yeah... I could argue with you whether Changelog should be using Kubernetes...

**Gerhard Lazu:** Yes, please. Let's.

**Lars Wikman:** But I for sure do not see the need for a system such as the Changelog to have a Kubernetes. Now, again, context... The guy that's responsible for operating Changelog apparently likes Kubernetes, which means that he enjoys his job more if he gets to run it on Kubernetes, so... \[laughs\] It sort of checks out.

**Gerhard Lazu:** But it's not that, because I'm that guy. So just for the listeners - that's me, right?

**Lars Wikman:** Yeah, yeah. \[laughs\] I'm absolutely talking about you there.

**Gerhard Lazu:** I'm that guy, okay? So let's unpack this... I tried to answer this question a couple of times, and either people -- I must be answering it wrong, so let me try again. The reason why we chose Kubernetes is because it reached a certain level of maturity. That was one of the things. And Linode, our partner for all things infrastructure, they started offering a managed Kubernetes service. So that was important for us. We don't want to deal with managing it. So that is a provider concern.

We had to solve a couple of things, like for example DNS. DNS updates... Whenever the IP changes, or the load balancer changes, the IP has to be updated in the DNS. The certificate - we used to pay for those, and then Letsencrypt came along. So how do we get free certificates via Letsencrypt, and support that mindset?

**Lars Wikman:** A cron job.

**Gerhard Lazu:** A cron job. Excellent. Okay, great. A cron job. That is a valid answer. And then how do you push updates? Like, do you have your CI that deploys? In some cases you do. In some cases the CI is the thing that has the keys to the kingdom, and that's what we had. And it can do anything. Is that a good thing? I don't think it is. But whatever... It's just like an opinion. But there's more. How do you keep your certificate in sync between your CDN, your load balancer, and any other place that may use it? In our case it was just these two - the load balancer and the CDN. So not only you have to renew it, but then you have to upload it and make sure it's the same one everywhere. Excellent.

How do you run backups? Another cron job, right? So before you know it, you have all these things that you need to have... Like, what gets for example docker-compose, or whatever you're using, in place? What installs Erlang? What determines which version of Erlang you have? What about the monitoring? Where do you run that? How do you configure the monitoring? How do you configure for example the monitoring -- not just the metrics and the logging, but I'm also talking about the synthetic monitoring - your pings, your Pingdoms, or your Grafana Clouds, or whatever you may be using. And before you know it, you have all these concerns that typically are either in a wiki, or in someone's head, or different people approach it in different ways; in this case it's just me, so it's not really a problem... But you have all these things -- oh, secrets. That's another one. Where do you store the secrets and how do you rotate secrets when there's a leak?

**Break:** \[39:37\]

**Gerhard Lazu:** The way I approach this is "What is a system that can manage all these things in a way that doesn't have me worrying about versions as much?" Because we used Terraform, and then we had to do upgrades because it was running locally, we had plugin issues, we had to upgrade those... And the issues were problems that you wouldn't expect to have, but we were having because of this different tooling that we were using.

We used Ansible, and - did we use Chef at some point? No. We didn't use Chef. We only used Ansible at some point, many years ago. By the way, there was like a progression, so every year we blogged about this, we talked about this... It didn't just come out of the blue, "I know, let's use Kubernetes." No. We'd been using Ansible for years, we'd been using Concourse CI to run the builds, to do the deploys... We used docker-compose and then Docker Swarm for, again, a couple of years. So we grew into this architecture, and right now everything is stored -- like, all the YAML, all the config is stored in the repo. Okay, we have some [Make](https://www.gnu.org/software/make/) glue, which I'm not very proud of... It's great, but I know there's a better way. Maybe Argo CD. I don't know. GitOps. I keep hearing about that; maybe we try that, I don't know. But can we have something that continuously applies those configs, and you don't have to have your machine to run that stuff? So maybe something like a control plane which is different from your service.

I know that you mention large-scale... I don't think Changelog is very large-scale; it's a simple app, but it's still serving many of terabytes every month of traffic... And there's the CDN; when the CDN goes down there's a big problem, as we had a couple of days ago, and you have to know how to basically update it very quickly, which we could, and you have to have that space and room...

So the answer is a bit more complicated. It's contextual, and it's not because I like Kubernetes, it's because it makes all these concerns easier than if we used anything else than we did before, by the way. It improves on that.

**Lars Wikman:** Yeah.

**Gerhard Lazu:** What do you think about that?

**Lars Wikman:** Easier for you, I would say. For me, it's like - I barely know where I would start on making Kubernetes do this... And I did start looking at K3s specifically because I wanted the CD part. I wanted something to pick up my finished Docker containers and spin up the new version. That's essentially why I wanted to set that up, to have a very, very lightweight approach to what Kubernetes can do.

The thing is I don't see sort of keeping that load balancer up to date, or keeping certificates up to date as that complicated of an endeavor, with current baseline tools like Letsencrypt... So I wouldn't bring in layers to solve them. It could be a Bash script, it could be some fairly tightly spec-ed tools... For example, in Elixir there's a fantastic library by Saša Jurić which is called SiteEncrypt, which will simply do the Letsencrypt dance for you if you configure your Phoenix app to use it. So when you start your application, it checks "Do we already have certificates lying around? I'll use those. If not, I'll talk to Letsencrypt. We'll shake hands, I'll get some certificates, and now we're certified."

\[44:13\] And with that, to some extent you might not even need NGINX at that point. I bet you would probably be able to serve Changelog with the previously mentioned SQLite performance of like 10k reads a second. You were talking about terabytes, and that's like the mp3 files, right?

**Gerhard Lazu:** Mm-hm.

**Lars Wikman:** So files serving is one of the places where I would typically reach for proprietary cloud stuff, like S3, or Linode Object Store, or one of those... Because it just solves a lot of the -- like, okay, I wanna still have some redundancy in this, I want to be able to scale it essentially arbitrarily. For file serving I would typically use a service like that. It's super-annoying dealing with large drives and RAID so I'd rather not. So pragmatism... I don't think you should peel everything off, but I'm also not sure, like, when do you actually need a load balancer?

Having NGINX in front of your app can be very nice, because it allows you to do things like "Oh, actually we're down for maintenance right now. I still wanna show something nice to the user." Or pointing to different instances that you're starting up, or whatever. But there's also the potential risk of your NGINX being misconfigured or less well configured than your application, and actually being a bottleneck to your applications. I've seen that happen, too. Typically, I would set something up with NGINX.

Also, one of the things with Kubernetes is all this -- like, any node can go away at any time; we're on very moving ground cloud infrastructure. We only use what we need... But you always need some, so usually you're at a base level, like "We have these instances up constantly." At that point, I'm like "But do you need a cluster of three instances running the actual Kubernetes, and then an app instance, and a DB instance, and a load balancer instance? Or is this one application instance and one database instance?" Would that do?

**Gerhard Lazu:** I think it would. And if you look at Changelog, at its core, that's exactly what we have. We have the application and we have the database. A single instance PostgreSQL. There's a great story how we used replicated PostgreSQL and how that was the cause of a couple of downtimes; I think we covered that in the episode one... A different story.

And CockroachDB - that's something which I definitely wanna try out. Distributed PostgreSQL with a PostgreSQL compatible wire format that's a very interesting one to try out, for sure. It's on my list. But I think what I'm hearing, going back to what you were saying, is that for you, getting started with Kubernetes seems very complicated for a value that isn't very clear. Like, what is the value proposition? A lot of the things that you can do today - I mean, does Kubernetes make them any different? And maybe the answer is no from your perspective. You're saying like "Let's just use a cron job." In my mind -- I think this is where I wish we had more time to dig into this... So what I'm proposing is a follow-up, because we will run out of time. But there's so much more -- like for example the monitoring, the shipping of logs, all those things... And you have to configure them somehow. Then you have to worry about OS patches, whichever host OS you're running; that is not an issue when you're running in the context of the Kubernetes, because it's just your container, and you don't care about the worker node that runs the kubelet, that runs the Kubernetes infrastructure, so to speak.

\[48:01\] When it comes to NGINX, you don't install NGINX; you have Ingress NGINX, which is a component that exposes certain custom resource definitions (CRDs) and it's more like it implements Ingresses. Now, what is an Ingress? Do you care about it? Well, you do, because you need to know how to configure it; but beyond that, how that maps to an NGINX concept - that's abstracted away from you. And you have this self-discovery service, and it's all just happening behind the hood... And you're right, it feels a bit magical, but it's no different to a framework. For example, if you use Phoenix.

**Lars Wikman:** But that's the whole thing... See, Phoenix is a fairly explicit framework. It has a few things that feel a bit magical, but it is quite explicit about everything it does.

**Gerhard Lazu:** And Kubernetes isn't?

**Lars Wikman:** Yeah, it's not the impression I'm getting... But what I see when you bring in something like Kubernetes - you're placing a lot of abstractions in place, and you're going to be working with those abstractions. Those abstractions are still doing all of the things under the hood, and you need to be aware of how they do those to be able to do it gracefully. Most of the use cases and most of the way you want to work with infrastructure should be ideally enshrined in how Kubernetes handles this... But I don't feel like you can just say "Okay, but now I don't have to care about this." You still have to care about updating Linux, you still have to care about how your certs are propagated, or you could get kicked off of Letsencrypt... There's a lot of automation, but it's also very generalized.

This is a thing where I think Kubernetes ends up being a bit over -- I wouldn't say it's over-engineered. It's "Don't repeat yourself" taken quite far. And that's the correct move for some cases. For example, you'll see in enterprise software, things are often generalized, and the software is generally not that tight to work with. It's usually a little bit annoying and a little bit too much... And that's sort of the experience I'm getting from everything I see and hear about Kubernetes - it tries to solve everything, and I don't need my everythings solved... So there is this opposite direction I can take things in when working with Erlang, Elixir and the BEAM, where the BEAM - which is meant to handle high-availability, high-reliability, concurrent distributed systems, and I can bring all of my application concerns in there... It's like, "Do I need an SSH server?" Well, they have one. \[laughs\] Do I need to talk to DNS? Do I need to do DNS? Yeah, there's probably something in there for that... And that's a very rare runtime that you can lean on to do that kind of thing.

But let's say for example shipping updates to your app - the BEAM can hot code update your app while it's still running, without ever taking it down. That's a little bit trickier to use than a lot of other ways... It's not like bringing your container down and then bringing up another one, but it's definitely a capacity that's there. And I think -- like, a BEAM application can handle everything that I need to get done, but also the 99% case or the 90% case for small products in SaaS. If you need a bit of observability, for example I have Dashboard, which gives a baseline of observability with no effort.

\[51:56\] Or you can install something like PromEx and then you need to have Prometheus and Grafana stood up somewhere. Then you're starting to get a little bit more infrastructure, or you use the cloud offerings... And I think that's sort of always what it boils down to - at a certain point you need more visibility into the details. Okay, at a certain point you should probably start looking at installing something to give you that. But Kubernetes is installing all of it at once, and you have to care about certs, you have to care about the DNS details, you have to care about the Ingress, you have to care about all of it. And I think both the barrier and the maintenance cost of it is something I wouldn't choose to take on lightly in any project... Because I think it's typically too early for Kubernetes, and I'm thinking it's probably too early for Kubernetes in most projects before they're at an international scale. If you need high availability across many regions and timezones, that's probably a good reason to use Kubernetes. But I also realize, if you spend a lot of time working with Kubernetes, setting it up might not be that much effort. I'd rather code a fairly custom deployment setup that I find explicit and simple, than lean on something I understand so poorly, and which would take me years to have a good grasp of, which is Kubernetes.

**Gerhard Lazu:** I think there is a lot of -- okay, so first of all there's simplicity in complexity, and the other way around. But in this case, in Kubernetes, it's complex, but it's also simple, if you look at it from a certain perspective. So things are fairly well defined; you know what to reach out for and how to combine things, and there's a whole community around it, and there's so many projects which are solving specific issues... The interface is very clear, you know how to interact with it, there's an API. It's this single API via which you request anything, including other VMs, other load balancers. Do you want a SQLite instance with such and such provider? You can get that. Okay, you have to extend Kubernetes in order to benefit from these features, but it's possible, and there's only one way that you can do this... And that's very powerful.

I think the separation of concerns gets a bit more clear... So anybody, just ship us a container image. It doesn't matter what language you have, it doesn't matter what VM you're running; ship us a container image, we'll take care of the rest. Now, I know it's too simplistic, but it works.

Heroku, for example - shipping containers, they've made it popular. You just git push and things happen. And guess what - the way that Changelog has been developed hasn't changed. You git push and things happen behind the scenes. And because that contract has never been broken with the developers, everybody's happy.

**Lars Wikman:** Yeah, Jerod would be pissed if he had to SSH into the server to set things up.

**Gerhard Lazu:** There you go.

**Lars Wikman:** That's no good.

**Gerhard Lazu:** Yeah. Do you really care about which OS you're running? No, you don't. Do you wanna switch Erlang versions? Super-easy. Guess what - all you have to do is change the container. Hot code reloading? Yes, you can do it; it's hard, maybe you don't need to... And again, it doesn't matter whether you use Erlang, or Elixir, or Ruby, or Python, or Go... It really doesn't matter. Do you want to use serverless? Well, guess what - you have all these projects which you can set up and you can run it in the same context. And the list goes on and on. It really just goes forever.

\[55:42\] I have used Chef, for many years. I gchef at one point (Gerhard Chef). There's even an org on GitHub... So I spent a fair time with that. Knife, when that was a thing - I don't think many people were using... Because Chef server was so difficult. I was there, I remember that period. Ansible - I loved it when it was a thing. Certain things were difficult with it, but it was saner than Chef. Is Kubernetes saner than Ansible? I don't know; for us, it felt like the next evolution. You're right, there is a learning curve, like with Vim, or Emacs.

**Lars Wikman:** Kubernetes is definitely a big step in some direction from Ansible. It's not just the next sort of iteration on scripting your servers; that's not what it is. It's something different. And you did ask me for a hot take that you could put as the title on this, and I think it would be fair to say Kubernetes is the Electron of operations...

**Gerhard Lazu:** Oh, okay... Wow. I think people are like "What is Electron?" That would be the first I'd ask.

**Lars Wikman:** What?!

**Gerhard Lazu:** What is Electron? Which electron do you mean? Do you mean the physical one, or the Electron JavaScript --

**Lars Wikman:** \[laughs\] Oh, you're like "Oh, physics...!"

**Gerhard Lazu:** Exactly.

**Lars Wikman:** Yeah, I mean in that it makes operations at the outset a lot simpler, but it also paves over everything that you could get right, and the details, I feel like. I think you have access to every little detail you would need in Kubernetes, but it doesn't particularly seem to encourage you getting into all the details.

So whenever you add abstraction layers - and I think that's sort of my hesitance on adding more tools, especially tools that sit on top and sort of obscure what's going on... It's that I've come to rely on explicit things. Because if you can just read the code and see what it's gonna do - that's very powerful. I mean, it's not declarative. People like declarative for particular things... And declarative can be nice. But it also doesn't make it clear, like A, to B, to C. What is going on? What's being done? And for most server installs, they don't have to be very complicated.

**Gerhard Lazu:** Yeah.

**Lars Wikman:** And if it doesn't have to be very complicated, and there's not a lot of complexity to manage, if you bring in a large abstraction layer, which is supposed to hide a lot of complexity and make managing very complex things possible, which I think is a fair thing to say about Kubernetes - it seems to make it possible to manage very, very complex things... If you bring that into an already fairly simple thing, I think you're shooting yourself in the foot. But it also depends on what tools are you comfortable with. You've spent years and years deeply immersed in ops...

**Gerhard Lazu:** Try decades... But yes, I agree.

**Lars Wikman:** Yeah. I've spent much more time building the actual applications. I've spent a fair bit of time on servers, and operations, but not nearly the majority of my time, because I care much more about the building of the thing. And I consider the operations a part of what I do. I don't want to hand off a container, particularly to operations, and just guess how it's gonna be run... I see there's a lot of -- I don't wanna call it full-stack; maybe end-to-end stack. I want to care about the whole, and I have no idea what's going on in half of the whole if I bring in a tool like Kubernetes. I definitely would use it, and I would learn it, if I saw that I definitely had the need. If I was going to run hundreds and hundreds of instances, or scale across continents - yeah, it probably makes sense to bring in something that lets me take that overview, that 10,000 miles view of the world, and like "Oh, yeah, we have decent performance in Asia. Oh, we're dropping performance in Antarctica." But that's typically not where I operate, and that's typically not what I go for first.

**Gerhard Lazu:** And on that thought, thank you, Lars, very much for joining me. This was a pleasure. I do realize that we have so much more to talk about. Dev and ops talking, finally... \[laughs\] I think for decades we've tried to do that, and it's finally happening. We have respect for each other, we know that each context is difficult, challenging, but worth exploring, and I don't think we should be just shoving code across the fence, like "Here you go. You run this. Figure out what to do with it." I think it's nicer when we agree on what the abstractions should be. Everybody benefits. And when things go wrong - because they will go wrong - people know what to do. And it's not a reactive approach, it's like a planned, "We kind of know what we need to do." So I'm really excited about that world.

Thank you very much for joining me. This was a pleasure, Lars. I look forward to seeing you next time and talking to you next time, whenever that may be. Hopefully soon.

**Lars Wikman:** Yeah, happy to come back. Thanks for having me.
