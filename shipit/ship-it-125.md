**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me, as always, is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Good.

**Justin Garrison:** Good. Just -- it's fall, though. You've got to be a little more excited than that, right?

**Autumn Nash:** I'm waiting for the coffee to kick in.

**Justin Garrison:** Well, you should have had it earlier. It looks a skull cup. This is Halloween time now.

**Autumn Nash:** \[unintelligible 00:04:57.14\] we'll drink out of the skulls of our enemies. And I was "Don't tell that at school, though."

**Justin Garrison:** I had my hot chocolate this morning after we had a conversation, our last week's conversation with Dave, talking about hot chocolate... And I got a free Starbucks for my birthday, so I went and got a hot chocolate. It was great.

**Autumn Nash:** Happy birthday, Justin.

**Justin Garrison:** Thank you.

**Lili Cosic:** Happy birthday.

**Justin Garrison:** Thank you. So Lily is on the show as a guest. Lili Cosic is a senior software engineer. Lily, what software are you responsible for, or have you been responsible for in the past?

**Lili Cosic:** Sure. So I recently joined a month or so ago Influx Data, and right now I'm responsible for - or I'm learning to be responsible for - the cloud dedicated service. Essentially, it's the newest InfluxDB version three. So it's a columnar data store, and we run it in a managed, single-tenant cloud environment on Kubernetes and K3s. It's a lot of different moving parts from the cloud-native ecosystem. And funnily enough, it's also -- we use a lot of things that I used to work on as well. Kube Prometheus, for example, is one of the projects that I used to work on while at Red Hat... So it's really nice -- the Prometheus operator and the entire monitoring stack, so it's really nice to just go into a company and you already know things, because you've run them before. So yeah, those are some of the things that I worked on.

**Justin Garrison:** One of the best things about open source is you can shift companies and be "Oh, you're doing the thing that I was already working on."

**Lili Cosic:** Exactly.

**Justin Garrison:** I'm very familiar with that. And I can keep contributing to the thing. But you just had a whole bunch in that initial "What is Influx?" that I want to ask more questions about. Because you said, a) it's single-tenant. So if I go and I sign up for a hosted Influx database, I get my own instance of it. It's not multi-tenant, it's not sharing resources... You said it's on K3S, so you're, I'm assuming, creating not a new cluster... Is it a new Kubernetes cluster per tenant, or is this a new database per tenant?

**Lili Cosic:** It's both. So there's a serverless option for the v3, but this is a dedicated one, so you don't have noisy neighbors, and you control the costs, and essentially, we run it for you. And it's K3S -- but we also use Kubernetes for the management nodes, for example. And then we run it on a cloud provider, and we spin up an instance of K3S per tenant, that deploys the database... And then it really depends; you can have different -- if you have larger query sizes, or if you write a lot more data, you can really configure and size up things. So that's the neat part about the third version, definitely.

**Justin Garrison:** And the interesting part, that you you're doing this on top of a cloud provider, not using the cloud provider's managed solution for this, because you're carving up those VMs smaller with K3S... You're "We can run a bunch of Kubernetes clusters here."

**Lili Cosic:** Yeah. Obviously, this entire architecture is the team's architecture. I just joined a month ago and I think they did a really great job, as it's extremely resilient. And what I really about it is that -- I haven't used K3S before in the past, but from the outside I can tell that it's not Kubernetes, obviously. We even run etcd within, and not -- I think it was MySQL is the default, or something.

**Justin Garrison:** \[08:18\] SQLite.

**Lili Cosic:** SQLite, that's the one. Yes, thank you. But yeah, I think they chose etcd, which was a really good choice, I think, as there's at least three nodes, essentially, always. It's the minimum size, I think. Again, I've been there a month, so...

**Justin Garrison:** Yeah, no problem.

**Lili Cosic:** If I make a mistake, it's on me.

**Justin Garrison:** The other thing I wanted to ask about is you described Influx as a columnar store database, and I always describe it as a time-series database. Can you describe the difference, and why you describe it that way versus another? When I think of columnar, I'm thinking of Cassandra. And when I'm thinking time-series, I'm thinking of small, single -- I've run Influx before in production, and it was a great experience, because it was like, this is the type of database that I would not have any problem managing, because it is a simple management experience. But when I think of Cassandra, it's the opposite of that.

**Lili Cosic:** So I think this third version is different than the previous version. So there was a version one, then there was a version two, and the third version, essentially - it's built from scratch, from the ground up, trying to maintain a really high cardinality... So yeah, time series is definitely an analogy that you can use there. And the cool part about it is that it uses the Apache projects Data Fusion and Parquet all together as building blocks into this database.

**Justin Garrison:** I think I remember hearing or reading a blog post about Influx switching from Go to Rust as part of that rewrite, right? So that was part of the big "Not only are we shifting architecture, but we're shifting language completely", which is a huge task for a company to say "Hey, we want to go this other route." I'll find the blog post and put it in the show notes, because it was interesting just seeing the benefits that Influx saw out of "Oh, we don't have garbage collection", which is one of those big things about Go, especially if you're running databases or things that might need to do this often... No shade to Java, of course, which... \[laughs\] Sorry, Autumn. I had to do it.

**Autumn Nash:** You see this...? First, he rubbed in that his 3D printer is there, and now he's \[unintelligible 00:10:22.09\] Rude.

**Lili Cosic:** Yeah. But yeah, definitely. I think it's interesting... So the majority, I would say, of the companies is Rust. We do use Rust as well in our team, but writing operators and controllers in Rust is still a bit rusty; pun intended there. Sorry about that.

**Autumn Nash:** That was great.

**Lili Cosic:** You can do a terrible graphic, or something.

**Autumn Nash:** It was so good, though.

**Lili Cosic:** But we do use it for CLI tools, and we have been trying to -- in the beginning, the team was talking about how they did initially use Rust as a client to Kubernetes, and they had some problems... And it's just easier, because what we use is QBuilder to create the CRDs, and create the logic there, and then the controller runtime etc. And then Rust - you don't have that. You would have to rewrite everything, and you just have to invest a lot more.

**Autumn Nash:** Yeah. And there's a lot less people that know it. But I definitely think that Rust is gaining really great traction.

**Lili Cosic:** Yeah, definitely. Yeah, I'm looking forward to doing some Rust... I have a small task in the next sprint, which is exciting. And I've been doing a tiny bit... I had to troubleshoot at some point some Containerd stuff and some Containerd runtimes, Nydus and stuff that, the snapshotter, so... Something wasn't working. And - yeah, it got me really into Rust. So that's been exciting.

**Justin Garrison:** Now, how is Influx different, or how is the work you were doing on the Prometheus operator in that stuff? Because a lot of people will think of Prometheus as another sort of database time-series store of being able to scrape metrics and do this stuff. What is the difference there? How are you translating that work over to Influx, and why wouldn't someone use something Prometheus?

**Lili Cosic:** \[12:06\] I would say that Influx is a really generic, or -- general purpose I think is maybe the better term. The database in Prometheus is really, really -- it's only suited for the specific time-series metrics format, as it comes with the time-series database already, DSDB already baked in. Obviously, you can export the data into things Thanos, and other stuff...

And definitely, a lot of people use still Influx for long-term storage of metrics as well. There's a lot of customers that do that, and you can definitely have the entire stack and you won't even notice. But I think that for me, learning about Prometheus in the beginning - there's a lot of similarities. There's the write-ahead log, there's different terminologies that are really similar, and similar challenges, I would say, to running Prometheus. any database, I would say -- even though a lot of people, it's controversial, apparently, to say that Prometheus is a database, for some reason... I've heard people say "No, no, you have no experience in databases. Prometheus is not a database." But I still claim it is, because if you have to run Prometheus and you lose data, you've lost \[unintelligible 00:13:13.23\]

**Autumn Nash:** Could we maybe explain the use cases to each? Because I think a lot of -- like, when I first got into NoSQL, a lot of people didn't know what time-series databases do... And it is a really cool, unique use case. So maybe I think it would benefit the audience by maybe explaining what those two things do, and when you would use them, I guess.

**Lili Cosic:** So with Prometheus specifically, you primarily use it for anything that you measure. So anything that needs to measure at a certain interval, and then whatever you do with that data - whether you visualize it, whether you alert on it, or you collect analytics, any endpoint that can be scraped... And there were a lot of use cases for this, from everyone's alerting; I think Kubernetes definitely goes hand in hand with Prometheus and natively exposes a lot of Prometheus metrics... So most alerting systems or metric systems out there that are on top of Kubernetes use Prometheus for the alerting and rule evaluation, or just metric scattering.

But in general, essentially, whatever has a time notion for it, to be able to write the data and then also query the data is much quicker if you have a time-based series database... Because being able to not having the notion of the columns, and having just the notion of "This is where I want to query from..." Because those are most likely your operations, right? Like, I want to see in the past two hours what data I have gathered. That's the kind of query you would then want to send. Versus the general SQL queries of like "Top 10 last accessed", or whatever you use SQL for.

**Autumn Nash:** If I remember correctly, they're immutable too, right?

**Lili Cosic:** Yes.

**Autumn Nash:** So that way it can't be changed... Because I think it sometimes is used in certain production environments where they're used to audit, too.

**Lili Cosic:** Yeah. That's an interesting use case. Yeah, definitely. With Prometheus you can do some stuff to delete the data, and there have been use cases for that... Definitely customers who don't fully, maybe don't understand Prometheus... We've had that at Red Hat. They demanded deletion... But because it saves the data in chunks at the time, it was much harder to do those kinds of things.

**Autumn Nash:** Yeah. Because isn't that the whole point, for it to be immutable, so that way you know all the data is there? That's interesting. See, I feel like a lot of times we try to explain databases, and people are like "I'm just going to use this", and you're like "Is that really the right database for that? Because if you want to do that, it doesn't really fit that database offering", you know?

**Justin Garrison:** I mean, sometimes going into it we don't know what the data is going to look like, or what the use case is going to be. And sometimes people just don't know that other databases exist for specific things, right?

**Autumn Nash:** Yes...

**Justin Garrison:** \[16:05\] And that's one of the hardest parts. My first experience with Influx was around 2017 or something we had this database that was for licensing for software. And anytime people were using certain software, it would report it, it would add a row of like "I'm using the software at this time", and then every year we would load that \[unintelligible 00:16:23.19\] in the last year and send it. But that was a SQL database, and it grew to over four terabytes in size, of just everyone, whenever they launch software, adding a row to it. And I was like "Oh, this seems like time-series data. Let me try to throw it in Influx." And I wrote a simple Python script that just sucked it all out. It took like two days to suck all the data in and throw it in Influx... And what used to take a couple days to query the data and give out a report from MySQL, loading it and querying, all that stuff... Because we had no indexes, or anything. We were only doing it once a year for licensing. Then it turned into -- I think it was less than four gigs of data in Influx, of just time-series data of like "Oh, I know everyone, and I can query this instantly, and we can just throw away all that other data." And so we started reporting it from MySQL over to Influx, and I was like "This is just single binary. This is awesome." And then we could get dashboards on top of it, and everything else.

And so we were doing that, we started querying it, and I loved the line protocol... Because I literally was testing this out with just curl statements. I'm just like "Oh, let me just curl this string... This works really well." But then I discovered the TICC stack, the full thing. Telegraph, Influx, Chronograph, and...

**Lili Cosic:** Graphite, I think? Yeah...

**Justin Garrison:** Capacitor.

**Lili Cosic:** Capacitor. Okay. See, my onboarding does not go well, clearly...

**Justin Garrison:** Well, these are old, because that's not what it does anymore.

**Lili Cosic:** Yeah, I know. We've been through it, yeah.

**Justin Garrison:** I don't know what's in V3 of Influx, but I know for V2 some of that got integrated directly in Influx, and so the TICC stack's not around anymore. But Telegraph was another one of those pieces where it's an agent that could report metrics out, and it was super-easy to extend, where it's just like "Oh, add a Bash script, and make it executable in this folder, and we'll run it every time we run metrics." And so I caused an outage by doing that, because we deployed Telegraph, and we're just like "Oh, this is really great. We get this time-series data from all this stuff..." We didn't have a lot of that stuff back in the 20-teens... And I was calling a local command line tool to get stats about it, because it was a Puppet infrastructure, it ran Manifest, and everything... But I didn't realize that Puppet was backed by a an MS SQL database. And so Telegraph was running on every node that we had, every five minutes, but it was doing it on the minute. And so every minute, the database would get thousands of connections of every node, running this Bash script that would call another tool, that then called the database...

**Lili Cosic:** Oh, no...

**Justin Garrison:** And so people started noticing at the command line, they're like "You know what? Every once in a while, I get an error from my tool that I never used to get before." And it took us a couple of weeks where I'm like "Oh, you know what? That was me."

**Autumn Nash:** It's crazy the amount of damage you can do to a database by connections... Because you can take a whole database down and people never think of the fact that your connections can take your database down until it's too late.

**Justin Garrison:** And especially things that aren't consistent. It wasn't until later we were like "You know what?"

**Lili Cosic:** Because it's on intervals, yeah.

**Justin Garrison:** Yeah, we're like "This happens at a certain minute. Let's see what's going on." So we add skew to it in Telegraph. We're like "Oh yeah, add a one minute skew to these metrics, and we're fine. We don't actually need it on the minute." And the problem went away.

Those were my first two "Oh, I get the power of this thing as time-series data, what it's supposed to do. We can get rid of some of those older style tools, and kind of reduce the overhead and the maintenance and all that stuff just storing four terabytes of data."

**Autumn Nash:** \[19:45\] I think once you get to a certain size for SQL though, you have to figure out something else or you're going to have to get somebody who's really good at architecting your data. But - I mean, you're kind of sort of stuck at a certain point... But I think a lot of what influences databases too is the fact that some are more popular... And it's also the education out there. MongoDB is so easy to dump a bunch data in.

**Lili Cosic:** Get started, yeah.

**Autumn Nash:** Yes. And they have such good documentation, and it is just -- it is very much made in a way that it's like, you can just throw whatever you want in here, not have a DBA and get stuff out, you know?

**Break**: \[20:24\]

**Justin Garrison:** Do you remember when Mongo was exposed to the internet because the defaults was no password?

**Lili Cosic:** Oh, really?

**Justin Garrison:** People started getting ransomware in their Mongo database... People would steal all the data and leave one object in it, that's like "Pay me this Bitcoin."

**Autumn Nash:** I don't know, I think that there are lots of great -- I love open source and the fact that you can do all the things with the databases, and I love that you can choose between managed... But sometimes when you don't know what you're doing and you just want -- just get a managed database.

**Lili Cosic:** As someone working on a managed database, I couldn't agree more.

**Autumn Nash:** You know? Sometimes it's worth paying stuff so you don't have to worry about it, and so that you can call and get someone to help you. Because honestly, just the fact that you can call and ask people, like get customer service with someone who's an expert to do your data schemas, and really talk about your access patterns can make a huge performance difference. So it's not even just the managed side, it's the fact that you get that expert help and then you can teach your engineers.

**Lili Cosic:** Support, yeah.

**Autumn Nash:** Yeah.

**Lili Cosic:** I did notice that there's a lot of -- in the recent, I would say, years, there has been a shift in databases where they're really specialized, they're really focused.

**Autumn Nash:** They really are. And then it's funny, because you're going for an interview and they're like "We want you to have 20 years of Postgres and Kafka experience", and I'm like "There are certain things that two people are not going to have 20 years of... But how old do you think I am?" And did I have two jobs at the same time? One's for streaming data, and one is a SQL database... Nobody has this. So it's wild. I wonder if recruiters and jobs know what they're asking for. Like, have you ever touched these things...?

**Lili Cosic:** No, I don't think so... Especially in this job market.

**Autumn Nash:** I know, they're asking for stuff that -- I swear, they'll be like "We want you to have 20 years of experience in something that was made two years ago." And you're like "Oh, okay..." It's so wild. What did you do with Prometheus?

**Lili Cosic:** Yeah, I worked on -- so I was at Red Hat and I was part of the OpenShift organization... And we essentially -- OpenShift is the Red Hat Kubernetes offering that uses the components from Kubernetes, but ships itself, or unpacks it and then packs it neatly into --

**Autumn Nash:** Corporate and open source.

**Lili Cosic:** Yeah.

**Autumn Nash:** They have the weirdest babies.

**Lili Cosic:** But it works really well. It was definitely built by experts who work on upstream Kubernetes still. And I was part of the cluster monitoring team, which essentially was in charge of the monitoring component, as every OpenShift came with monitoring. So out of the box you had a Prometheus stack, you had metrics, you had alerts, you had runbooks... We even use metrics for making decisions on how etcd should be run, on "Should we improve etcd?" The decisions within the operators and controllers, as OpenShift is basically operators all the way down, down to etcd. So everything's managed by an operator, or a controller, whatever you prefer, the wording.

**Justin Garrison:** Were you there before the CoreOS acquisition? Because all the operator stuff was CoreOS, right? My experience with OpenShift running it was back in the gears and cartridges days, before Kubernetes... And I'm like "This isn't fun." And then they went into the Kubernetes phase and were like "Ah, this is Red Hat software that's rough to run, and rough to upgrade..." And then they bought CoreOS, and they brought all the Tectonic stuff that CoreOS did; all the operators, all that automatic stuff, and I'm like "Oh, now it's getting to the point where I'm interested." But that was definitely the OpenShift 3 phase.

**Lili Cosic:** 4.

**Justin Garrison:** 4, okay.

**Lili Cosic:** Yeah, 3 was the -- I think three point something was still... At some point they did a switch to operators. If I remember correctly, it was three or it was four. I don't know. I worked on four. I joined the week before Red Hat got sold to IBM. And I also worked at HashiCorp, and... Yeah, same thing happened.

**Autumn Nash:** Acquisitions are following you.

**Lili Cosic:** \[28:02\] So that was fun. But yeah, no, I worked closely actually with the CoreOS people before, as I worked at a small company called Kinvolk. They were a Linux consultancy. They were bought by Microsoft.

**Justin Garrison:** Yeah.

**Lili Cosic:** Yeah... Again. And I worked there on some of the early operators. I was working with Chef on the Habitat operator, which was back in 2016, or something... So it was definitely in the early days. So it was nice to just watch what the CoreOS folks were doing, and... Essentially, they invented the term operators. I think not a lot of people still know that. I think people now just think operators are whatever is in Kubernetes... But they really promoted that term.

**Justin Garrison:** And that's something that I think is really -- like, CRDs were novel at the time, right?

**Lili Cosic:** Very.

**Justin Garrison:** Because this was coming off of third-party resources. We shifted from third-party resources to custom resource definitions... But people were still only building --

**Lili Cosic:** Nikita, right? That was the one, I think -- working on that with Dr. Stefan, if I remember correctly, back in the day.

**Justin Garrison:** Yeah. But there was only controllers on the core Kubernetes objects. You were just doing pods and deployments, and that sort of stuff... And then they throw out this data, like "What if everything's a CRD, and you could do operators on all of them, or controllers on all of them?" We call that an operator. And some of that was like, their examples were definitely data-driven, or more -- I won't say older software, but software that needed a little more fine-tuning to control it and manage the databases. Because I think Cockroach came in; CockroachDB was an example of "Well, let's just write the database different", right? We can make the software different to run better at this sort of distributed scale, and not have to do this operator pattern. But people took the operator pattern...

**Lili Cosic:** To the extreme.

**Justin Garrison:** ...and they went hog wild on it.

**Lili Cosic:** I know, I know. Not everything has to be an operator, people.

**Autumn Nash:** Am I the only one who wonders why they named CockroachDB CockroachDB? Because I have so many questions...

**Lili Cosic:** If I remember correctly, it's because it's the last thing that dies, or something. It's like indestructible.

**Autumn Nash:** Oh, okay. That's actually pretty good marketing.

**Justin Garrison:** You want your database to always be available, and always be up, and that was... Yeah, it's always alive.

**Lili Cosic:** And if I remember correctly, TigerBeetle, another database with similar naming team, where it's also indestructible, or it's like...

**Justin Garrison:** TigerBeetle? Never heard that one.

**Lili Cosic:** Is it TigerBeetle?

**Justin Garrison:** I'm waiting for DungBeetle, or something.

**Lili Cosic:** TigerBeetle, definitely. That's a good one. It's a database, again, specialized in finance. So they do just a very specialized database in finance, and they do it really well for a very specific use case, and it outperforms everything in transactions, and to just a regular SQL.

**Justin Garrison:** How did you get into this space? You've been at a lot of these companies, and it seems like IBM is going to buy Influx at some point now... But you were doing Red Hat, you were doing CoreOS, you were doing...

**Lili Cosic:** Kinvolk.

**Justin Garrison:** Kinvolk, that's right. With Flatcar... You were doing a lot of stuff in this space. How'd you get started here? What were you doing before?

**Lili Cosic:** I got into it by accident. So I was at an Airbnb clone here based in Berlin. That was one of my first jobs; my first technical jobs. I did other jobs. And I was working in Berlin, and at the time there were beginning to be a lot of infrastructure meetups, and things like that. So I went to a random one, it was a cloud-native meetup before cloud-native was a term... And that's where I met the Kinvolk people, actually. And they were like "We're hiring." And I'm like "Yeah, that sounds cool." Because I was really interested into infrastructure, because I worked just on a regular backend Ruby on Rails thing, and while it was interesting, it didn't really challenge me enough, or it didn't keep me interested... And I was really interested into -- we had a server that was running somewhere, and everyone had SSH access, and things like that. 10, 12, 15 years ago, whatever. It was a bit more normal. And I was like "That can't be right." And then I saw -- I was at the infrastructure meetup and it was like "Well, that is definitely the future."

\[32:12\] So I really got inspired and I managed to get a job there. And then I just -- you had to do stuff; we were a Linux consultancy, so you had to figure things out as you went. So that was really nice. I enjoy just being put into things, and then I'll dig myself out of it, essentially.

**Autumn Nash:** It sounds like you've had an amazing career. What's the favorite job that you've had out of all of these different places? Because you've worked at a lot of places.

**Lili Cosic:** I have to say my latest now...

**Justin Garrison:** We can assume the current job, right? We'll put that one aside and say "Before this job, what was the one that you look back on --"

**Autumn Nash:** Also, if a company wants to get acquired, they should hire you.

**Lili Cosic:** Well, it depends. Is that a thing people aim for? I don't know. I don't know. It depends. So I think that there were two, I would say... I definitely really enjoyed my time at Red Hat, because I got to work on upstream things, while also working on using the upstream projects. So I was a maintainer of -- I don't know, I had like six projects at some point, which was just because it was our entire stack, and not a lot of people were maintainers of that... But it was really nice, because I still use those projects to this day, and a lot of people still use it... So I was really lucky to get into that stage. I also worked on Operator SDK while I was at Red Hat, and I also briefly worked on etcd, which was really fun... Because my passion is databases, and that's the thing that I really enjoy the most.

But I would say besides Red Hat, I really enjoyed HashiCorp. It was really one of my favorite times, because we got to build a brand new service from scratch, a cloud-hosted --

**Autumn Nash:** That's so fun.

**Lili Cosic:** It's really nice. Greenfield work is probably the best, when you still don't have customers...

**Justin Garrison:** Was that the HashiCloud, or was this before?

**Lili Cosic:** I worked on Cloud Boundary. So that was really --

**Justin Garrison:** The access service, right?

**Lili Cosic:** Yeah, yeah, exactly. So I joined when we had zero code on the cloud side. There was a product, the Boundary product, and we were a two-person team... And yeah, we managed to get to seven people or something, at the end... And we shipped everything within six or nine months, or something. We went from zero code on the cloud side, and obviously with a lot of SDKs, and libraries, and helpers, and patterns already established... But it was still cool, too.

**Autumn Nash:** That's still an achievement, though.

**Lili Cosic:** Yeah, that was really rewarding. It was really nice to be able to design something like that.

**Justin Garrison:** I think more than anything, that also -- it's a testament to how good you are as a software engineer, but also how good the company culture is to get out of your way and let you do stuff.

**Lili Cosic:** Exactly, definitely.

**Justin Garrison:** The low process overhead, and...

**Autumn Nash:** Because sometimes it takes longer to get approved, than --

**Lili Cosic:** To just build things? Yes, definitely. I would say HashiCorp has such a variety of products... For a company that is that young - I think they've been around for 12 years, 13 years... I don't know. Something like that. There's such a variety of different developer-focused products, which is so rare to get right. The user experience is really good. The products are used everywhere, and then... Yeah, so I think that it's a testament to how the management does things there.

**Justin Garrison:** Was the open source challenges at both... Like, if we're just looking at Red Hat and HashiCorp, both of them are open source-first companies, whether Hashi is open source licensed right now, whatever. You're writing code in the open, that people can see. But it feels like it's opposite to me, in that Red Hat is taking and building general open source things, and they're productizing them... And HashiCorp is creating products first that are open source. That's how it seems from the outside. But it seems like the maintenance overhead, the open source responsibility - like, as a maintainer for six projects, if I think of that in the Red Hat sense, it sounds like just a bunch of burnout, because everyone's going to be asking me all sorts of questions...

**Lili Cosic:** \[35:59\] Yeah, yeah, definitely. And it was a shared responsibility. We had quite a lot of projects in that team, because the monitoring stack really needs a lot to be able to fully function, and to be able to get the full experience of observing a system, whether it's functioning or not. But it was really -- we also worked on the product, so it was double-edged. It was definitely a lot of upstream, a lot of open source, a lot of getting consensus from people, from different companies to agree on things... There's a lot of challenges.

**Justin Garrison:** People don't understand -- again, back to getting process out of the way, right? Taking something that is generically open source and integrating that back into a project is really difficult... Because even just the KEP process in Kubernetes, and all this stuff, you're like "I need to go tell five different companies that are invested in this thing that we need this feature, and how it's going to benefit them", versus the HashiCorp model, which is like "Ain't no one else--" As an integrator, you're using the tools. You're not building on top of it. People do build on top of Consul, but not like they build on top of etcd.

**Autumn Nash:** I don't think people talk about the politics of open source and incorporation and trying to get projects approved while you're balancing a business'es stakeholders and open source maintainers is very complicated.

**Lili Cosic:** Yeah, definitely. I think it's really hard to also manage the people who want to do -- everyone gets paid by a company, right? At the end of the day, it is all business, right? While you are trying to put your open source project first, and you're trying to advocate for that within your company, and say "This feature doesn't make any sense from that open source project's--" You balance a lot of hats essentially, right? But you try to say "This doesn't make any sense. Sorry. Let's try to think of a different way." But if it does make sense, then you have to go and convince other people that it makes sense, and that we should have this, and... Yeah, it's a lot. Yeah.

**Autumn Nash:** The amount of -- because you need to think about what your customers need, right? But then that gets lost in the "What do the maintainers want to agree to?" and "What do the corporations want to agree investing in?" So it's wild.

**Break**: \[38:15\]

**Autumn Nash:** It's cool that you've worked in databases and infrastructure. Those are both my interests. How do you do that without getting burned out? Because those are two -- those are very key to business things, right? Those are some of the worst pager, because if your infrastructure goes down, it's not good. If you can't get to your database... Those are two things that you are --

**Justin Garrison:** Getting paged for a database is the scariest page you can get. I don't know of another -- website down, okay, we can figure this one out. I know where to start. Database down? I might have to drive somewhere.

**Autumn Nash:** Like, we accidentally dropped a table, you know...

**Lili Cosic:** \[unintelligible 00:42:19.10\] yeah, definitely.

**Autumn Nash:** Yeah. So how have you managed to grow and work and learn in those spaces and still maintain not being super-burnt out? I feel like those are hard spaces to get into, so for other people that want to get into it or grow their career, do you have any advice?

**Lili Cosic:** I always just try it. I try not to think too hard about it beforehand... Because if you do, that's where you, I think, lose the momentum, essentially. But definitely, I am going on call very soon... Apparently, I'm ready to go on call. At least as a shadow.

**Justin Garrison:** One month. Wow, that's a quick...

**Autumn Nash:** I mean, did you hear her career? She could probably fix anything, okay?

**Lili Cosic:** Not anything, no. No, no, no. Definitely.

**Autumn Nash:** I have faith in you. I just listened to you talk about your career, and I'm just like "Wow" the whole time. Like...

**Lili Cosic:** But I think that the key is to just try things. It's easy to say... There's no magical solution, or anything. It's just, you give it a try, and if it doesn't work, you try something else, and then at some point you figure it out. I'm trying to learn not so much downwards the stack, but just get an overall picture, and then develop the experience and the expertise when you actually need it.

**Justin Garrison:** Figuring out where the pieces fit together is a very hard thing, to read marketing docs and get the understanding of. You have to build some things to say "Oh, this is why this fits here, or why it doesn't fit here." You could shape just about anything to fit together, whether they should or not. So that's a really good thing. But I also think what you said there about trying something different... Because a lot of times people look at that career, of like "Wow, you did so much successful stuff." And we didn't talk about anything that, like, you picked up for a week or two weeks and you're like "I don't want to do that anymore", or it doesn't fit. And it's okay to get rid of those things. And people forget that constantly, while you're trying new things, you're also not continuing doing everything. You have to be able to shed some of that stuff.

**Autumn Nash:** Trying new things is scary, and I think a lot of times -- I think there's a balance, right? It is good to use reliable things that you know, but also, especially in this market and these weird times, I think people are going to have to try more new things, and try things outside of their comfort zone.

**Justin Garrison:** The pressure is different, right? The pressure today in 2024 is way different than it was even 10 years ago, when if you were trying something 10 years ago, there wasn't nonstop hustle bros saying "You have to turn this into your --"

**Autumn Nash:** If somebody else says on Twitter about how we're all supposed to work the weekends, and "Why aren't you building five projects?" I'm like, I know we all own six domains...

**Justin Garrison:** Multiple streams of income, all that stuff. Like, no.

**Autumn Nash:** Are we ever supposed to enjoy our life? No? Like...

**Lili Cosic:** Oh, I definitely do. I'm not one of those people who tends to build things on the weekend. I try to avoid that as much as I can. I'm not a classical "build things over the weekend." I work really hard during the week, and focus.

**Autumn Nash:** Yeah. Every now and then, if it's something really cool that I want to build for me and my friends, or just something, like, maybe. Or building something for my kids. But that's not sustainable. Let's stop telling younger people or people that are new to the industry that that is sustainable, because it's not. That's how you burn out.

**Justin Garrison:** Especially in open source, where there is no weekend in open source. If you don't have boundaries, it's not going to be set for you.

**Autumn Nash:** Well, in infrastructure and databases, too. You are a system administrator. If you get paged, you get paged. If the system goes down, they don't care if it's Saturday...

**Justin Garrison:** \[45:56\] Many companies will have a cycle of like "I'm on call this week. I need to be more available this week. The other three weeks, I'm fine, or I can relax." But you have to plan around that. I definitely had moments where I'm like, "I can't do vacation", because I'm on call that week, that sort of thing. But at the end of the day, at a company, I'm like "Oh, you're paying me for this amount of work, and I'm going to give you that amount of work and I'm going to invest the time in it." But open source - there ain't no one paying you for that. And they're just asking as many questions they want, and telling you "I want to fit this thing over here with this other thing that I already understand..." I'm like "No, don't. Stop."

**Autumn Nash:** Well, it's getting even more complicated, because a lot of the open source projects that are going to be able to weather the storm are going to be funded by corporations. So not only are they getting paid, but now you've got different interests, you've got different... You know what I mean? It depends on the size of the company... So it's getting weird.

**Lili Cosic:** But also, open source, I feel like it's shifting into an odd direction, where --

**Autumn Nash:** It's so weird. Everything's gotten --

**Lili Cosic:** The licensing and everything is shifting into a very interesting direction... Which I understand, from a business point of view; I completely get why you don't want to necessarily -- you put a lot of effort into a company, especially if it's your project that you started, and you want to have it in the open for companies and developers to use, right? But obviously, you're a business, and you want to sustain the business, and pay your engineers, and everything... And you don't necessarily want that license to be so permissive that someone else, like a larger corporation can come along and just take that project and then monetize off of it without investing.

I think Kubernetes and these really large projects work only because there's so many companies involved, and so many large companies involved that there's not really one company we associate it with. But even if Google was the one who initially did the majority of the work, but still.

**Justin Garrison:** A lot of successful open source is either completely monetized, owned by a single company, they drive direction... Which is great. They could do a lot of stuff. The Hashi stack is one of those examples. Cockroach is another. The other side of it is foundations. And it's like "We have to have this neutral ground that has some legal ownership over how this exists." And that's why companies like Google and Red Hat and Amazon and Microsoft can work together in the same codebase, because they're like "Hey, we know we're not giving money to one individual company, but we're going through that longer process to say we need this feature, we need to now have someone that owns that feature inside the codebase", they work in the foundation, they work politically to make sure it's backed, all that sort of stuff.

**Lili Cosic:** Yeah, politically. Yeah, definitely.

**Justin Garrison:** There's a lot of other things you have to consider.

**Autumn Nash:** I think before the CNFC and the Linux Foundation were big... Now when these open source projects that people are betting on, \[unintelligible 00:48:39.24\] are being born, and they're starting foundations... You can tell that REST was very intentionally -- their foundation was started, a lot of their documentation... It's changing the way we start big open source projects, too. Even before... So just the way that their foundation was put together, and the way that companies wanted to get on those foundations, and the way that it was built is just really interesting, because that's all influenced by seeing how big the Linux Foundation and CNFC and all those things have gotten, you know... So it's interesting if the way that we build these things are going to change, you know?

**Lili Cosic:** Yeah, I agree.

**Justin Garrison:** \[49:19\] I mean, the last 10 years have had a lot of influx in various ways... I just watched the Node.js documentary on YouTube. I'm not a Node developer, but fascinating politics on how they weren't adapting Node to solve some use cases that many large corporations needed... And so they literally forked Node.js, and they're like "If you're not going to put this in a neutral foundation, we're not coming back, basically." And they did the open source thing. The thing that open source should be able to do under an actual open source license, and all that stuff. They can fork it, they can own it. But then as soon as it had to come back, it's just like "Oh, now we have a foundation that owns it neutrally, and there's multiple people that--" But also, a lot of it is pay to play. And that makes me -- a lot of it is just like "Oh, CNCF, if you're on the board, you paid to get there." You're paying millions of dollars into this foundation, supporting this as a "We need this open source to exist." But as a startup, I can't do that. I can't get the same voice, I can't get the same access to that stuff.

**Lili Cosic:** No, definitely not. Yeah.

**Autumn Nash:** And it's weird, because you want open source to get money, but also this is -- I don't know, it's getting very complicated.

**Lili Cosic:** Yeah. If it's politics involved straight away. I preferred when I was very naive in the open source world, before realizing a lot of the things... But I do still think that the engineers themselves who do work on Kubernetes or etcd or Prometheus and those kinds of projects are truly the nicest people. It's been really interesting to -- even if they work for the corporations and everything, and the politics that happens there, it's not as visible, I would say, as one would think. I think they truly are really passionate about what they work, like Kubernetes or the other projects.

**Justin Garrison:** Well, and even just how intentional they were to set up the community up front. Like, we know we're part of a foundation, but shout-out to Sarah Novotny and Joe Beda and the people that were doing it early on, and just saying "Hey, we want this community to be very explicit about being welcoming. And if we have a problem here, we need to address that internally, and look inward to do that."

**Autumn Nash:** The CNFC makes me want to play with Kubernetes just because I want to hang out with the people.

**Lili Cosic:** Yeah, it's been really nice. I go to KubeCons every once in a while; not as much as I used to, but I still go. I was at the KubeCon EU, and I do like CFP reviews, and things that... But it's really nice to just go there and you still see the same people who work on projects, whether they're still at the same company -- maybe not, but maybe they're at a different company, but they still work on, I don't know, API server, or whatever. And it's really nice.

**Justin Garrison:** And a lot of times they get that job because they did that work, right? They're like "Oh, we have an initiative at this company to do more of that work, or we want to influence in a way" and they're hiring someone to also bring that influence in and say "Oh, you're already a chair on this SIG. Please come help us out, because we have changes we need to make." So yeah.

**Lili Cosic:** Definitely.

**Justin Garrison:** Lily, thank you so much for coming on the show. Where can people find you online?

**Lili Cosic:** Twitter, or whatever it's called these days... I still have that. Yeah. So it's @lilicosic.

**Justin Garrison:** Thank you so much for coming on and tell us all about Influx, what you've been doing, and kind of just your career and arc. This has been fascinating.

**Autumn Nash:** Your career is amazing. You just are so cool.

**Lili Cosic:** Thank you. I will now hide. Thanks for having me. It's been really fun talking to you.

**Autumn Nash:** It was so nice meeting you.

**Justin Garrison:** Alright, we'll talk to you again soon.
