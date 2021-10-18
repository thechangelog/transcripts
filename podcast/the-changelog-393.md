**Jerod Santo:** I'm joined by Kyle Mathews from Gatsby. Kyle was on Founders Talk a couple years ago now, back in 2018. Of course, we covered Gatsby as well, with Jason Lengstorf, also back in 2018. And we had Gatsby on JS Party just recently... But we're here with Kyle, the creator of Gatsby, to talk about what's been going on, and this brand new thing, incremental builds... Which you've just launched today, as we record this, the 27th of April. Congrats! Big launch today.

**Kyle Mathews:** Yeah, thank you so much. And thank you for having me.

**Jerod Santo:** You bet. Before we get into all that, let's talk about launching stuff, because you just did it. What goes into a launch in your business, and in your stress life, and how did it go today? Share me your feels.

**Kyle Mathews:** Yeah, it's intense. Any big release, there's just a ton of work that goes into getting it to this point. And incremental builds is by far the biggest thing we've launched in our company history. We've been working towards it for like 3,5 years, since I started designing Gatsby v1 back in 2016.

There's been 4-5 engineers working on it the last 6-8 months. We were doing a lot of preparatory projects before that... And then the marketing team, the dev rel team, the sales team have been working on stuff for weeks and months, preparing for it.

So it's a lot of work. There's a lot of "How are people gonna respond? Is there something glaringly wrong that we're gonna have to be scrambling to fix after it gets out?" So you prepare as much as you can, and you hope for the best... And you just kind of cross your fingers, close your eyes and step across the threshold and see what happens.

**Jerod Santo:** That's right. Hit Publish.

**Kyle Mathews:** Yeah.

**Jerod Santo:** So were there any fires in the last 24/48 hours? Was there any blowback yet? It's just been a few hours out right now, so it's probably early reactions. They seem positive, from what I'm reading on Twitter.

**Kyle Mathews:** Yeah.

**Jerod Santo:** But what about fires? Was there anything that went wrong, or marketing copy that needs to be changed? The little stuff that you forget about...

**Kyle Mathews:** There was two typos in the blog post. It somehow made it through the dozens of reviews we did.

**Jerod Santo:** It's funny how that works.

**Kyle Mathews:** \[04:07\] Yeah. Every time I'm like "Wow, it's really good!" and then I review it again the next day and I'm like "Oh man, this is terrible." But yeah, it was actually really kind of charming and nice. The first OSS maintainer that we hired after we got funding, who was also the OSS engineering manager for a while - he left recently... To - I don't know - relax. He's a pretty casual contractor/engineer, so he's like "Whoa, two years straight at a company. That's a long time." Anyways, he found the type, and did a PR, so all of us were super-excited to see that from him.

**Jerod Santo:** Nice.

**Kyle Mathews:** But yeah, generally speaking it's been pretty smooth. We've been testing it for a few months, with customers, and a lot of test sites... So we were pretty confident with things, and so far it's been smooth. It was great.

**Jerod Santo:** Very cool. Let's back out, zoom out, talk about Gatsby writ large - what it is, why it's interesting, why you've founded a business around it, as well as an open source project. Of course, this has to be the executive summary; you can do the full Founders Talk, if you're interested, listeners; we'll link that in the show notes. Tell us, first of all, the Gatsby elevator pitch and then we'll get into the executive summary of Gatsby Inc. and where we are.

**Kyle Mathews:** Sure, yeah. Basically, it's pretty clear we're at a very pivotal moment in how we build stuff on the web at all. The web started with static files, and then kind of like the web app architecture developed with databases and web servers, and the security layers and so forth, that Netscape and others did a lot of work in the '90s to develop... And that's just kind of been it for the last 25 years. And what we've seen though is that there's been a huge shift from the LAMP stack, and single-server, monolithic architectures, to more serverless/cloud, managed services and functions etc. that you're more like stitching together stuff from a bunch of different hosted services.

**Jerod Santo:** Right.

**Kyle Mathews:** If you look at a lot of other applications, a lot of people have other areas of software, a lot of things that move that direction. But websites, largely, are still on CMS'es. If you look at WordPress - WordPress is growing faster right now than it ever has. It's just like eating through the web. It's growing 2%-3% a year, or something like that.

**Jerod Santo:** It's something like a third of sites now, isn't it? Or somewhere in that range.

**Kyle Mathews:** Yeah, yeah, and it's adding another percentage or two every year these days. It's just interesting to see that the web is still dominated by this old, monolithic LAMP stack architecture.

**Jerod Santo:** Dynamic, server-rendered web pages, right?

**Kyle Mathews:** Yeah, with caching and so forth... When everyone else has moved more towards like hosted, cloud-type stuff. So Gatsby is -- we believe that's where websites should go to, because there's a ton of advantages towards using managed services, versus downloading and maintaining it yourself. It's just way easier; it's a way lower effort to scaffold, and evolve, and run software like this. So Gatsby is an effort to take the web that direction. We like to say like "What would WordPress look like if it was invented in 2020?" And for sure, it won't look like it is now.

**Jerod Santo:** Well, we see WordPress even trying to morph, to a certain degree, with the headless style, and WordPress API...

**Kyle Mathews:** Yeah.

**Jerod Santo:** So even WordPress itself, which was around the turn of the century, 2000 era, is morphing in certain ways - and of course, it's going to be hybrid, but it's going towards that, and saying "Well, you can use us this way", because people have seen the advantages that I'm sure you're about to enumerate... So we see older, established players like WordPress offering these things. But if WordPress was invented today, or even back a few years ago when you started Gatsby, surely Matt would have made it different; he would have architected it quite different, is what you're saying.

**Kyle Mathews:** Yeah, yeah. Because traditional CMS'es - they have multiple concerns. They have the content management pieces, and they have the presentation layer - the templates, and database queries, and the caching layers to actually serve the website. And so the world that Gatsby lives in - those two layers are split from each other. So you still have the CMS...

\[08:13\] Gatsby works really great with WordPress. We hired two WordPress veterans, including the founder of wp-graphql, to continue working on that and build a really tight integration between Gatsby and WordPress... So we're gonna have incremental build support for WordPress pretty soon. So WordPress in the Gatsby world is just another potential backend sour of data for driving your website.

**Jerod Santo:** So the advantages of Gatsby is all in the... Well, not all, but the main win - for static sites in general, and for JAMstack, and this style architected sites - is they're user-oriented. The live near to the user, they have already been compiled, so they're not asking your user to wait for that render... It's all out there. And that's really where Gatsby began to shine.

Back when we had Jason on the show I had an a-ha moment on that show, because I had been reading Gatsby's marketing pages, and I'm coming from somebody who's been using Jekyll, and looking at all these things for years, and when I saw that Gatsby was this blazing fast thing, built with React and GraphQL - so I saw the React and GraphQL - but also Gatsby was blazing fast... Which by the way, that's what everybody says their things are today; they're all blazing fast... So we need new marketing terms.

**Kyle Mathews:** Yeah, yeah... We were there early, but now it's gotten a little saturated.

**Jerod Santo:** Yeah, I even wrote a skeptic's guide to developer marketing terms on Changelog.com, because there's so many that are just repeated ad nauseam. Anyways, it was supposed to be blazing fast, and I was talking to Jason and he kept talking about the Lighthouse scores, and all these things... And I was like "Well, there's another one that's fast. It's Hugo." Hugo's really fast, because you hit Compile (or Build) and my Jekyll blog of a thousand(ish) posts takes a minute and a half, and Hugo, on that same content, takes four seconds. So how fast is Gatsby? And Jason was like "No, no, no... It's not fast there. It's the produced thing", which arguably, they're both important... But the most important place is where it's the fastest. And even back then, it was like "Yeah, but what about my builds? Because I'm using it as a developer." And he was like "Well, we're working on that."

So it's interesting that even back then my a-ha moment was "Okay, Gatsby isn't fast on the build necessarily, faster than any other players in the static site generator space. It's faster on the produced assets", and that's great. But when it comes to building, we still have this -- it's not really a catch-22... A hurdle. We have a hurdle, which you guys have been working on.

**Kyle Mathews:** Yeah.

**Jerod Santo:** So explain why that's there. Why build times for these types of tools grows as your site grows.

**Kyle Mathews:** As you alluded to, prerendering or prebuilding your site is an awesome way to run a website, because you don't have to worry about operating the website. it's like a bunch of files sitting on a CDN can't go down, because you don't have running code.

**Jerod Santo:** Right. You're de-risking it, right? There's nothing that can break in the request/response lifecycle, because there's no logic there. I'm just serving assets.

**Kyle Mathews:** Yeah. And you can't hack it, because there's no code to hack into. All of the actual running code is either on a CI server, or behind a firewall. The CMS'es are well-protected. And you can handle any sort of traffic spike, because you're on a shared CDN, and they're seeing a million times your traffic, whatever your site gets... And the website is pushed all around the world, and the CDNs take care of it. So there's a lot of cool stuff about the model.

But yeah, the traditional downside is the build time. And in the launch blog post today we went into the history of these two pathways, where you have database-driven websites versus pre-built, statically-rendered websites. And this has been the traditional dichotomy on the web.

\[12:13\] It was interesting too, because the early days of the web everyone thought that prebuilding was going to win. If you look at a movable type versus WordPress, that was the big battle in the mid to late 2000's. People were like "Yeah, movable type. That just makes so much sense. It's easy, scalable to host, it's faster, the websites are faster..." But yeah, the problem that everyone ran into is that the build times grew. So you could start out a project and it was fine, but then at some point your build times would be untenable and you'd have to switch off to WordPress, or something like that.

And WordPress made the bet that -- they're like "Hey, with Moore's Laws and other stuff like that WordPress is gonna be fast enough that we can just rely on this sort of dynamic rendering model with caching." As history showed, they kind of were proved out.

**Jerod Santo:** Yeah.

**Kyle Mathews:** So what we've been working towards -- you know, when I went into thinking about working at Gatsby full-time and making it a thing and raising money etc. We were very aware of this dichotomy in that database-driven websites, 1) because they're much faster and easier to update.

**Jerod Santo:** Right.

**Kyle Mathews:** But we saw that there's another option there; that it wasn't just those two options. Because before Gatsby I worked a lot on streaming architectures, stream processing type stuff... You know, using Kafka, and other tools like that. These are new models that kind of like in the big data world have replaced the batch processing model. So instead of nightly or every hour running a process to regenerate a bunch of data, architectures like Kafka allow you to process data as it comes in. So data is streaming through, and through some clever programming techniques you can update things very cheaply on the fly.

**Jerod Santo:** Gotcha.

**Kyle Mathews:** So your derived data is updated in real time. My thought back then was like "Okay, that could apply really well to websites", because what is a website other than the most recent view of a long series of events? Code changes, data changes etc. that could turn processed into something that's served out to the users. So static sites are kind of like the batch processing model, and then database-driven sites are generated on the fly, but cash-expensive things, so that you're not overwhelming things, type of stuff.

So those are the two models on the web. I was like, why isn't there also an opening for sort of a stream processing model, where instead of rebuilding the whole thing every so often, you just develop a model to very lightly update stuff on the fly? Because then you get the benefits of -- it's like cached, the view is up to date in cache, and it's cheap to generate... But you also get the benefits of real-time; you're not delayed by an hour or a day or whatever the arbitrary...

**Jerod Santo:** You're not batching.

**Kyle Mathews:** Yeah, the arbitrary batch update time.

**Jerod Santo:** Right.

**Kyle Mathews:** So that's what incremental builds is. The idea is that you can kind of like blend the models of dynamically-generated websites, that are database-driven, with the kind of pre-rendering, pre-build, static delivery model. But you have a build process which is kind of patterned after this stream processing ideas, that can very quickly, very cheaply update the entire website every time a new change event comes in.

It's like, we get a webhook from a CMS saying "Hey, something changed." We take that data and we figure out (using Gatsby's data engine) which pages need to be rebuilt, and we rebuild those five pages, or whatever it may be, and then push this out to the CDN. And that process takes seconds, with the new incremental builds we launched.

**Break:** \[16:02\]

**Jerod Santo:** So incremental builds was really a part of your vision all the way back when you started it. You mentioned, to the new stack, that this has been your vision, perhaps even your early pitches to investors, like "Look, I need to build this engine." The obvious question for me, somebody who's not having to build it, but someone people have just been waiting for, is what's taken so long? Why is this so complicated?

**Kyle Mathews:** That's a great question. Yeah, so this was definitely part of the vision from the get-go. "What took you so long?" Yeah, it's a super-fair question. We certainly didn't anticipate it taking this long. I'd say it's a couple things... It is a super-hard technical problem, which as we dove in deeper and deeper into the problem it's just remarkable how many things can trip up fast builds. It's like, we kind of approached the problem with different types of source data, and different types of pages etc. And it's just been one problem after another.

**Jerod Santo:** Can you give us a peek into that world? I can see and I've solved technical problems; never anything that's taken multiple years. As I dove into technical problems, I've seen the layers unpack. You turn a corner, and here's a brand new thing you never considered. And actually, it has implications for these seven other things you thought you had, in the can.

**Kyle Mathews:** Yeah.

**Jerod Santo:** Can you give an example? I imagine the most straightforward problematic case of an incremental build in my opinion, as a person who hasn't had to solve this problem, is I have all these pages, they have dependencies, certain data... I update a footer, and it has to update these 75,000 pages, or something. So knowing that all these pages share this footer data, but if I change this one topic tag, actually that's only seven pages. The dependency graph - I can see where that's complicated. But what else is there? Is there other dragons that you have to defeat as you go down this pit?

**Kyle Mathews:** Yeah, the dependency graph is the largest part, because it's just making sure that you can track the implication of every change, and then identify the shortest amount of stuff that needs to be done.

\[19:56\] Last summer, for example, an engineer spent two months refactoring how we associate data with pages, because before that we were -- like, there's some data that was sort of like affecting most pages, or all pages, which meant that any data change made a trivial change to all pages... Which of course breaks incremental builds, because you need to be able to say "Only change these seven files." But that's baked in a whole bunch of different places... So kind of reversing that, and kind of getting the DAG clean took a while.

Also, Gatsby builds do a ton of stuff. We source data from n number of places. It goes into this data transformation pipeline, so markdown is getting converted to HTML, and images are getting processed, and a variety of other possible transformations happen.

We're also taking the data that's generated from all these different sourcing and transformation steps and then generating a GraphQL schema. And then with that GraphQL schema we then run queries. So there's just a lot of moving pieces.

One of the biggest challenges that the team has faced this last while is helping all these pieces coordinate with each other, so that it's a smooth deterministic process for like "Boing-boing-boing." It hits this, and so forth. So one of the biggest ones we've done is we've been steadily moving more and more Gatsby internals to XState... Kind of like a state machine, that gives us a lot more predictability around coordinating all these different moving parts. So that's proved really helpful, both to just visualize what's going on -- because you know, if you have seven different subsystems, all taking to each other and interacting to each other... The XState visualizer is very helpful for that. But then also just to sort of like lock down stuff.

We had a bunch of event emitter type things that were going on before. Something would finish, and be like "I'm done!" And then three other things might do it, so you'd kind of get these loops going, where they do it multiple times... Anyways. It's just a lot of inefficiencies, and bugs, and race conditions that would pop out of that.

And a lot of that didn't show up with regular builds. That was part of the problem, too - all this stuff in a regular build, it's much more just like "Voom!" Go through. But then with incremental builds you're now keeping the cache around, so there's a lot of things that are already there. All the random side effects that might be popping around, that add extra time. They don't mean as much in the context of a five-minute build, but when you're trying to get incremental build times under ten seconds or under five seconds.

**Jerod Santo:** Was that your threshold that you set out, the threshold of time?

**Kyle Mathews:** Yeah.

**Jerod Santo:** And said "We've gotta maintain this threshold"?

**Kyle Mathews:** Yeah. Ten seconds from content person pressing Save in the CMS, to it being live on the website is sort of our gold standard for what we're doing.

**Jerod Santo:** Gotcha. So I ask you to zoom out again, because I think you and I might share some context that the listeners don't with regards to Gatsby's data engine, the GraphQL-based data engine, and how it allows you to slurp in data from all these different sources. I understand that, you certainly understand that... Maybe explain that so that everybody understands why some of these things you're explaining may make more sense.

**Kyle Mathews:** Yeah, definitely. Great question. Going back to what I was mentioning earlier, that websites are moving from a monolithic CMS to a distributed CMS - or we like to call it a content mesh. Previously, your frontend was directly tied to your backend. So if you're working in WordPress or Drupal, you have a built-in data access layer. You don't have to do anything special. The data just shows up in your templates.

\[24:03\] But once you go distributed, the question is "How do you get the data from wherever it is to your website, in the right format you want, into your templates, and then off to the user?" And do that consistently, and quickly, and it's not hard to set up... Anyway, so the solution that we've arrived at is this idea of source plugins. So anything that has an API, you can write a source plugin for.

I think there's 400+ source plugins now for Gatsby, which includes all the normal CMS suspects, but a lot of things that you wouldn't really think of as like a CMS or source for data, but actually in practice turn out to be quite useful... Like Airtable, Google Spreadsheets... Greenhouse, for application tracking systems, is one of our most popular source plugins actually, because a lot of companies build their websites with Gatsby, and then they have a careers page, and then whenever they add a new job to it, it just automatically shows up on the careers page. And when they close the job, it disappears.

**Jerod Santo:** That's awesome.

**Kyle Mathews:** Yeah.

**Jerod Santo:** So it's like it normalizes all these different data sources. And they could be a file system, it could be a database, it could be an API, it could be Airtable...

**Kyle Mathews:** Yeah.

**Jerod Santo:** And as long as they have a source plugin - or you can write your own source plugin for whatever data source - Gatsby can slurp that up and use it on the other side.

**Kyle Mathews:** Yeah, exactly. We've seen larger sites that have a million plus nodes, is what we call them; each individual piece of data that comes in. So tracking all that data and tracking the dependency graph from the data to pages gets to be pretty complicated. And that's where a lot of the engineering work has gone into - making that all efficient, and scalable, and deterministic, and very fast.

**Jerod Santo:** So that does help understand why it has taken a significant amount of time. Probably your investors wanna know this is gonna be out there...

**Kyle Mathews:** \[unintelligible 00:25:56.07\]

**Jerod Santo:** ...how much do we have to spend to spend to get this thing built... The other question that your users probably are wondering - and I've seen a few of them wonder - on Twitter, in reaction to this, and the question that I think plagues most businesses that have an open source project at their core, or as a major component, is "This is part of your cloud offering, this is a paid thing. This is not part of the open source project. What's up with that?" Were there technical reasons? The explanation to me - it seems like there probably are, but... Are there technical reasons why incremental builds is cloud-based, or they're only business reasons?

**Kyle Mathews:** It's primarily technical. To make this work right, it requires tight coordination between the CI service and distributed workers; because we parallelize a lot of work across functions. Plus deploying to the CDNs... To get the demo video that I put into the launch blog post in the tweet - it had me clicking in Contentful, it had a three-second build, and then it's immediately live on the internet. And that extreme/real-time build speed is only possible with very tight coordination, and purpose-built infrastructure, that is deliberately created around the Gatsby build process.

**Jerod Santo:** Because the infrastructure is running the build.

**Kyle Mathews:** Yeah. So that infrastructure is part and parcel of our offering. It's purpose-built for that, and it's super-valuable. But all the other pieces -- it's like, to do incremental builds, Gatsby has been incremental, in the sense that we cache stuff between builds. So if you have the cache there, it doesn't redo a lot of the work... Since v1, so for the last three years.

\[27:54\] But the problem is that most places that people do Gatsby builds - there's hundreds of thousands of Gatsby sites out there, running in all sorts of different places... The problem is, CI services can retain cache between builds, but it's often an extra step. And then they don't do it very efficiently. Most of them tar up your cache and throw it off to S3, and then restore it... It's fine, it works; you can easily achieve with Gatsby build speeds of 45 seconds to minutes for many sites. But to get to five seconds requires something deliberately built for Gatsby.

**Jerod Santo:** Gotcha.

**Kyle Mathews:** And when we raised money, we knew that this was possible, and we knew that no one else was going to build it, because no one else -- you know, most people that do CI stuff, it's generic services, that are meant with a wide range of software. And we knew that'd be really valuable for the web, that there's something like this that exists... That kind of like balances the dynamic nature of database-driven sites with the ease of operation, security and speed of static sites. So we thought that this approach made a lot of sense, and it'd make a lot of people happy.

**Jerod Santo:** Along the way you have published some experimental optimizations in the open source package; it was like "This is like a flag you have to turn on." Is this what you're talking about when you say "It does do incremental builds"? Or maybe you call it smart builds, I don't know; it caches things it can, in the CLI, or in the build tool.

**Kyle Mathews:** Yeah.

**Jerod Santo:** Is that what you were referring to, the experimental page build optimizations for incremental data changes?

**Kyle Mathews:** Yeah, that was -- so there is a PR that a community member did recently, and our OSS worked with. It's a company that's doing a larger Gatsby site, so they were like "Hey, let's increase the build speed." So they added a PR to cache HTML builds. That was an example of -- yeah, of all the things that Gatsby does in the build process, that was one of the things that wasn't being cached, and then with that, it reduces the amount of work. And that was awesome. That's experimental right now, behind a flag. We'll probably make that the default in v3.

But even before that, we've cached a lot of the other parts... For example, transformation of data. Markdown to HTML, for example, is fairly computationally-expensive. And image transformation is very computationally-expensive.

**Jerod Santo:** Yeah, for sure.

**Kyle Mathews:** Running queries is kind of expensive... At scale it gets expensive. So those three things have always been cached. When we launched Gatsby Builds in January, we had benchmarks that show that Gatsby Builds was faster -- this was pre-incremental builds... It was already faster by 10x-20x over other services... And it was largely just because we kept the cache around on disk, so that you would get a container, and it would run your build, and the next time there's a build, it would just run it again right into the same container. So there was no waiting for the cache to come from somewhere; it'd just start up the cache was fully there... And because of that - yeah, it was just dramatically faster.

**Jerod Santo:** Which is just the difference between a purpose-built tool and a generic tool, right?

**Kyle Mathews:** Yeah.

**Jerod Santo:** Because on a generic CI, who's gonna do your build for you; you've got a container, it's gonna do all the same things, only that container is probably gonna go away between builds, or it doesn't know the Gatsby bits, or it's not aware of the Gatsby bits.

**Kyle Mathews:** Exactly, yeah. And because we maintain Gatsby and Gatsby Cloud, we can continue to do optimizations on both sides to kind of get to that point where people consistently see sub-second build times.

**Jerod Santo:** Yeah. So we had Frank Karlitschek on the show a couple of months back. He's from Nextcloud; I'm not sure you've heard of this cloud...

**Kyle Mathews:** Oh, okay.

**Jerod Santo:** ...but they started off as ownCloud, which is a personal cloud software... And they were open core. ownCloud was open core, and they ran into non-stop issues of determining what goes into the open source edition, what goes into the enterprise edition, or whatever it was called... And they butted up against their community in many places, because there was such an enthusiastic community - which I think Gatsby has as well - that their community would implement things and it would actually go against their own business model...

**Kyle Mathews:** \[32:18\] Yeah, yeah.

**Jerod Santo:** ...and he actually even started a brand new company called Nextcloud, which was (he calls it) 100% open source, not open core. It's interesting with tools like these, where you kind of have an open source project... It's not open core, but it kind of is, in a sense, because you have a SaaS that's basically providing features on top of -- or a build tool which is kind of a SaaS... So I'm wondering how often you run into these similar problems? Here's a situation where your community members built something cool, and it's like "Hey, let's slurp that up and make that a part of Gatsby." Have you struggled with decision-making around "Where do we monetize, where do we just give things away? How do I strike that balance without alienating people, or making my investors mad?"

**Kyle Mathews:** This is a classic problem in open source, for open source commercial companies... Because yeah, open source is not cheap to create. We're spending 3+ million dollars a year paying engineers, designers etc. to work on Gatsby. It's a very complicated piece of software already, and it's just getting ever more complicated. We have investors who expect us to make money... Anyway, so we wanna turn this into a sustainable business, that can keep investing more and more in Gatsby and in the overall experience for building web applications and sites.

The model we've arrived at is called open cloud. It's different than open core, because open core came from more the era where the expectation was you download the software and run it on your own servers... And with the rise of more cloud services type things, a lot of open source companies are turning to a model where their -- they kind of developed the capabilities of being the best in the world at running the open source software, and providing various cloud services around it, that people need.

A really great example of this that not a lot of people think about is GitHub. Because GitHub is a commercial open source company. It took Git, which is a phenomenal open source project, and then they added hosting. They're super-good at hosting very large Git repositories; you never even think about it. You just git push and pull... Well, except for the outage yesterday and last week. \[laughter\] Anyways, it's okay. Actually, I was gonna say \[unintelligible 00:34:39.09\] They're pretty good though, all the same. And they offered the hosting, the infrastructure, because it's sort of annoying to set up a VM and pop Git on it, and keep it secure, and all the other crap that you have to do to run Git... And they added collaboration. They invented the whole pull review cycle, which has revolutionized how we do software.

And I think that model, of providing infrastructure for open source and providing collaboration around the open source is the model that balances the freedom and hackability aspects of open source that people love with the need to create a sustainable business model. Because a cloud service is just not something that any user -- because the problem with open source is when the commercial entity has similar ambitions and goals and capabilities as the user. Because then there's that conflict. Because why would I buy your silly little add-on, when I could just write it myself? It's kind of silly.

But in GitHub's case, do that many people really want to run their own Git server? They need to learn how to do backups, and security, and everything. There's some, but it's an infinitesimally small percentage. And the same thing - does an agency that's building Gatsby sites wanna set up a Kubernetes cluster to run Gatsby builds, and monitor it, and all that jazz? And there's a handful, but again, it's an infinitesimally small percentage of that.

\[36:14\] Also, by combining our deep expertise in Gatsby and the deep expertise and capabilities we're gaining in running cloud services, it's a very powerful combination that we can continue to optimize both together, and provide a really superior service to people that are using Gatsby.

And then the collaboration bits - there's all sorts of stuff that we can do, that once we're tied into your development and content workflows, there's a ton of things that we can do to make the experience phenomenal, not just for the developers, but the designers and content people, and the marketers etc.

That's the sort of thing that we think is a great balance for everyone, because Gatsby -- the open source bits are 100% open source. We're not holding anything out of it. But how we do the builds is intimately tied into our cloud services and optimized so that everything is just humming along. The connections to -- you know, when you set up a CMS, we manage that for you, so that it's sending the right webhooks, with the right... Because a lot of these services will let you embed information into the webhooks, so we do everything to optimize what they send, and how we pull the latest data, so that we can optimize... It's just like this big, complicated chain of events that have to happen in order to have really fast builds, and we optimize all that for you... And we develop a lot of, again, sophistication and capability around that, which no individual developer working on a web project with Gatsby would ever do.

Anyway, it's like, we developed this capability and we can offer that scale to anybody who wants to use Gatsby for a very reasonable price. And then anyone using Gatsby can hack at it all they want, and do whatever they want with it. We think that's a really great balance for people.

**Break:** \[38:08\]

**Jerod Santo:** So I liked the GitHub comparison... I think what I'm learning over time as I talk to all these people who are in open source and in software and trying to figure out the balance and what works for them - it's just not a one-size-fits-all solution to this problem, because there's so much nuance. When you say open source even, it's like -- that doesn't even mean we all share the same license. That doesn't really mean much at all, so you have to drill down and you have to see "Well, this circumstance is actually slightly different because of the nature of the customers, and this one's different because of that..."

\[40:16\] So I think that's just fascinating to talk to people like yourself, who's figuring out what's working for your open source project and your business, and where to optimize for your customers and your users.

GitHub's an interesting point... You mentioned they took Git and they added hosting; what's interesting about Gatsby is you've taken Gatsby and you've added building... But y'all aren't hosting. Is that just for now, is that because you don't wanna run a CDN? I'm just curious. It seems like an obvious next step.

**Kyle Mathews:** Yeah, we're definitely going to continue to tighten our integrations with CDNs. But what's interesting - CDNs are phenomenally complicated to build and run. Most people who say they do hosting are actually outsourcing it to somebody else. Firebase even doesn't do their own hosting. As far as I know, Fastly is running their hosting. The company formally known as ZEIT is using Cloudflare... Netlify I think is the only one that actually has their own CDN. But even then, they're relying on an open source project like traffic server, I believe, out of Yahoo.

**Jerod Santo:** Sure. But from a customer's perspective, the buck stops with Netlify, right?

**Kyle Mathews:** Right, absolutely.

**Jerod Santo:** You're not gonna get turned to their partners and say "Hey, my website's down." That's their problem. They might be white-labeling... Heroku is built on AWS, so... Fair point.

**Kyle Mathews:** Yeah.

**Jerod Santo:** So you could do that. You could say "Well, we've got a great partner. We can be on top of Netlify, or we can be on top of AWS and be Gatsby hosting", without the complication.

**Kyle Mathews:** Yeah, so our plans roughly are -- we think that owning your own infrastructure and having control there is something that a lot of people want. Our goal is to have -- just like we have, where you can use any CMS, and we treat them all the same, you can also deploy from Gatsby Cloud to any CDN. Right now we deploy to five different deploy targets, and there's three more that are on our shortlist to add.

We think that's really important, because for a lot of teams, they already have something set up. They have contracts with CDNs, they have infrastructure on AWS or Azure or Google Cloud, and the website is an important part of that, but just part of that. So we want them to choose Gatsby, and we also want them to choose Gatsby Cloud, and we also want them to be able to continue running their infrastructure as they're used to, so we can push to an S3 bucket or whatever it is that they want to do.

But for the more -- there is a large percentage of people that just want us to handle it, so that is something that we're planning on doing in the future.

**Jerod Santo:** Gotcha.

**Kyle Mathews:** But we just barely launched last November with Gatsby Cloud at all, and the Gatsby Builds in January, and now this... So it's kind of one thing at a time.

**Jerod Santo:** Yeah. That makes sense as a non-priority, but I don't think it makes sense as a never-do.

**Kyle Mathews:** Yeah, exactly.

**Jerod Santo:** What about the CMS side? So the other integration side would be "Well, what about Gatsby CMS?" Because now maybe you can integrate better, you can write your data sources better, or maybe you have a great UX, and you could offer that as an option, alongside Contentful and other CMS'es out there.

**Kyle Mathews:** That question comes up a ton. I guess my most common response to that is "Which CMS would we build, if we built a CMS?" Because there isn't a one-size-fits all CMS. If you look at the CMS market, it's insanely fragmented. And the reason for that is -- the idea of managing content and data can go so many different directions. There's Google Spreadsheet, to Greenhouse for job applications... Because content - it's not just the content, but it's the workflows, and permissions, and everything around it that has to fit within the context of the team that's maintaining that content data.

\[44:30\] So the question for us is always like "Well, we don't have any particular expertise in that", and anything that we build would only fit for some subset of the market. So our thought is instead of building a "CMS", we develop the capacity to package together Gatsby + CMS'es into something that feels like a coherent thing.

The analogy I like to use is CMS'es were like mainframes, where back in the '70s, early '80s you'd have computer companies that would build a computer from scratch. They would develop a lot of the hardware, they'd write all the system software, they'd write all the userland software... It was just like this massive operation, and then they'd ship you like "Fump! Here's your one-ton computer." And they were super-expensive. Hundreds of thousands, or millions of dollars, even in those years' dollars.

And then the PC revolution happened, which was that IBM developed a spec for how these different pieces could fit together, and then from that common spec for how the different modular pieces talk to each other, there were hundreds of different PC skews that came out of that... All the way from high-end business uses, to poor college student, and every other little niche in between.

**Jerod Santo:** Right.

**Kyle Mathews:** And that idea of going from monoliths to modular units that are packaged together is really appealing to us. Because it's like, why develop a solution that just fits in some slices of the market, where we can just take Gatsby plus whatever subset of CMS'es make sense for the use case of the company organization that needs a website, and then work with our partners at the CMS'es to package things together really nicely, so that it's really streamlined to start new projects, to use it and manage it and so forth.

We've already done quite a bit around our preview workflows, where you'll have a CMS and then they click Preview and it pops open a preview, the live preview of the Gatsby site, on Gatsby Cloud. And then when they click Save, it sends out the webhook and does the build. So functionally, from someone living in the CMS, they don't need to know that Gatsby exists. It's kind of like if you use WordPress today. Does a WordPress user really know how the site is packaged and shipped? The presentation layer part. Do they really get what's going on? They largely don't. They live inside the CMS, and then how the bits of information they're retaining gets on the internet and delivered to somebody is not of interest to them.

So at Gatsby, what we're doing with WordPress, Drupal, all the headless CMS'es - we're kind of acting in that same kind of capacity. We're fitting in so seamlessly that you don't even know what's happening. With WordPress we have experimental support; you click the Preview button in WordPress and it just pops open a preview, but it's now a Gatsby Cloud preview, instead of the Wordpress preview. And you click Save and we can just show a little spinner or something until Gatsby Cloud reports back that now it's live on the internet.

**Jerod Santo:** \[47:55\] Right.

**Kyle Mathews:** So somebody can swap out the PHP layer in WordPress and just have Gatsby, and everyone living in WordPress would never know the difference.

**Jerod Santo:** Yeah, it's interesting. So the marketing person - they think they use WordPress for all intents and purposes.

**Kyle Mathews:** Yeah, and they do.

**Jerod Santo:** But then when they click Preview, with their site, they think it's on WordPress, but it's actually on Gatsby... It's on both.

**Kyle Mathews:** Exactly, yeah. It's just a different tool to deliver it.

**Jerod Santo:** Well, you're definitely right that there's no one-size-fits-all CMS... Because publishing is such a personal or a localized workflow; we've built our own podcasting platform for years, because we were on Tumblr, back when Tumblr was where you had to be. Then we were on WordPress... And yes, you can use WordPress for publishing podcasts. And yet, it didn't fit into our workflow. It didn't work the way we wanted it to work, so as developers, we were like "Well, we'll build our own platform." And now we can tweak and customize it to work the way that we work.

**Kyle Mathews:** Yeah.

**Jerod Santo:** Because even that, even amongst podcasts, our site is open source; people use it all the time to read and check out what an open source Elixir or Phoenix app looks like, but they don't use it to build their own podcasting platform, because it's for Changelog. It's open source, because of course, but it's not a generic platform. It's a customized platform, because we wanted customization. So even amongst podcasters, you wouldn't find our CMS probably all that useful, unless you're doing podcasts the way that we do podcasts.

You could say "Well, we would do a podcast CMS." Yeah, you can hit the 80%, but it would be hard to hit the 80% in all these different areas - news, podcasting, e-commerce etc. Blogging, or generic -- a WordPress competitor would be the most obvious choice if you'd asked what kind of CMS would we build. We'd be like "Well, pages and posts, and images." But what fun is that?

**Kyle Mathews:** Yeah. But WordPress and Ghost... WordPress and Ghost already exists, so...

**Jerod Santo:** Right. And what fun is it to have another one of those?

**Kyle Mathews:** Yeah. There's literally decades of effort going into making them awesome, so we're like "Let's just keep using WordPress. Don't stop using WordPress. Just swap out the frontend, so you don't have to worry about hosting, or security, or updating plugins etc." Because WordPress -- everyone agrees the CMS is amazing, but the operation of the website and the development experience, and the ease of pulling in other services, and the ease of building application type stuff, everyone agrees that that's not quite so pleasant.

And I'd actually argue with that. There's not enough CMS'es. Kind of like your experience - there's a lot of value in building something specific to your needs. One of the coolest conversations I've had with a Gatsby user - it's this little two-person agency in the Netherlands, and they started using Gatsby with a really rudimentary CMS they built, for political activists websites. Well, political activism, a lot of campaign websites... Just kind of everything in that genre. And they've built this CMS that's super-specific to that kind of world... And then they've built a Gatsby theme that kind of encompasses maybe five different faces that these different websites can go.

And he was just like almost cackling on the website, because he's like "I can build a site in minutes", because he just goes to Netlify and tweaks some environment variables, and points at an instance of the CMS that he built, and "Voila!" Off it goes. And it wasn't hard at all for him to build that, because when you decouple all the different aspects of the traditional CMS, all of a sudden building the admin part and the workflows in there becomes a much more approachable task...

**Jerod Santo:** \[51:58\] Yeah, for sure.

**Kyle Mathews:** ...because you're not worrying about "Well, how do we actually build the website? And how do we run it, and deploy, and all that?" Because those are super-complicated. But Gatsby could handle that, and then you could just plugin your data from whatever it is.

**Jerod Santo:** Yeah, you could have a Cambrian explosion of small, focused CMS'es, because all you're building out is the workflows that are customed to that particular vertical, and you can make it super for them... And you don't have to worry about the presentation layer. All that stuff - make a Gatsby plugin, source plugin, and you could have a separate team even working on the actual website, and all that. Those are interesting possibilities.

**Kyle Mathews:** Yeah, I see a world where the average number of content sources on a Gatsby site just keeps going up and up. Because each team that's responsible for managing some part of the website - they could have something very specific to their particular ways of managing the data. So you have like a store locator page on the site, and there's a team that's maintaining that and updating information about location... And a new one's opening up, so they're like "New store just opened!" and geo-tracking... Whatever. All the information that they need can be locked down in some CMS instance, and they don't have to have access to anything else. They don't have to get distracted or weirded out by the hundred other content types that other people need for managing other types of the website... And it can be just super-simple and straightforward to do their job.

I think that's really nice, because if you talk to anybody who works on websites, most people do not enjoy it... And I think there's just a lot of incidental complexity that comes from mashing everything together in one system. That doesn't need to be that way.

**Jerod Santo:** We're getting short on time, but I do wanna ask you about Gatsby recipes before we call it a show. This is something -- speaking of launches, man... You've been launching.

**Kyle Mathews:** Yeah...

**Jerod Santo:** You've launched this one a couple days ago, it seems like.

**Kyle Mathews:** Just last Thursday, yeah.

**Jerod Santo:** A passion project of yours, something you're interested in. Tell us about Gatsby Recipes.

**Kyle Mathews:** Gatsby Recipes is sort of like a new automation framework that we're adding to Gatsby. Basically, you can take a lot of routine tasks that you need to do with a website and you can pull those things into a recipe. A recipe is like an MDX file, which maybe at first blush sounds really weird, but it's like markdown and React components.

**Jerod Santo:** Okay... It does sound kind of weird.

**Kyle Mathews:** It does, yeah. We wanted though to follow kind of like a literate programming style thing, where you could describe what you're doing, and then the steps.

**Jerod Santo:** Tell a story.

**Kyle Mathews:** Yeah, tell the story through it. Because we think that's really helpful for scaffolding code... Because scaffolding is all about "Why is this website the way it is?" It's like, you chose different pieces for specific reasons. So if you can say "Well, this is the recipe that sets up the CMS and the components that use the data from that CMS, then you can look at a site directory, with all these different files and config things and whatever, and then you could pull it out, extract it into recipes that there's some sort of coherent story around them.

You can be like "Here's my dev tools recipe. Install some Npm packages, add some dotfiles...", maybe it hooks up Sitepress, a Sitepress cloud, maybe using Storybooks, so it configures that, and then it hooks up to a cloud service surrounding that... Anyways, so it just kind of combines all those things. But it's not just like telling a story, but it's also like when you're starting a new project, you can reuse these recipes. So you can just like "Okay, for this project we want WordPress, we want Shopify, we need a normal developer setup with TypeScript and Cypress and Jest, and we're gonna set up CircleCI, we're gonna use Gatsby Cloud, of course, to do the CI/CD, and then we're gonna set up Fastly for hosting, and Azure for functions." I don't know, you're just throwing together all these different things.

\[56:10\] Then you can have recipes for each of these, and at the start of the project, instead of going to each one and tediously configuring it, and clicking New, and grabbing API tokens etc, you just run the stack of recipes. And when it needs to know something, it'll just ask you information, and then five minutes later you have a website.

**Jerod Santo:** This sounds cool. I'm reading through some of the code as you talk, and even your "Select a recipe to run" in the blog posts - which will be in the show notes as well - and it looks almost like a Docker file. It's like "Add this, add that, do this..." Script is another word that maybe I'd use, but scripting has more connotations. Maybe this is more declarative than a script would be.

**Kyle Mathews:** Yeah.

**Jerod Santo:** Pretty cool. So you run the recipe, you can tweak it, and then you can just click off a new Gatsby site.

**Kyle Mathews:** Yeah, it takes a lot of inspiration from Infrastructure as Code projects. Terraform is a prominent example of that. Because all these tools started developing 10, 15 years ago, and the reason is because as developers started moving towards cloud-centric models, all of a sudden managing all your infrastructure got a lot more complicated, so they developed programmatic ways of maintaining and evolving that infrastructure.

With websites moving to the cloud as well, the same problem is emerging... Like, "Wow, three CMS'es, a form-handling API, and this and that, and functions..." Anyways, it just gets a lot more difficult to scaffold out a new project and to evolve it. You're like "Okay, we launched. Cool. Now we need to do this new feature. So back to the setup stuff." And this is meant to reduce that burden a lot.

Another perspective is kind of like the monolithic to distributed CMS, and kind of the mainframe to PC. It's like, when you go from a monolithic to modular architecture, the initial stages - there's a lot of energy that's unlocked, because previously people who were locked into the monolith and frustrated by limitations, all of a sudden these sophisticated early adopters can start building out whatever they want. And they're just super-excited. It's like a kid in the toy store sort of thing, like "Wow, I can do this, and this, and this", and they're just piecing things together and it's awesome.

That's like the initial stages. If you look at the homebrew computers in the late '70s, they were buying processors, and wiring things up, and there's all these people that are super-excited about it. But things don't go mainstream until you standardize stuff a bit, and you can package it together into a consumer-friendly thing. Because the average user of these things isn't as excited about how things work under the hood. They just want something that you press a button, it turns on, and it's generally-speaking reliable, and so forth.

**Jerod Santo:** Right.

**Kyle Mathews:** \[59:12\] So it's like headless CMS'es, headless WordPress, headless Drupal... A lot of people are really excited about this. A ton of people over the last few years have built a lot of things, but if you look at the percentage of their adoption in the marketplace, it's single-digit (if that) of websites. It's very tiny. So there's a lot of noise. There's a lot of excitement and noise around it, but the actual usage is much smaller than that.

So to us, the question, of course, is "Well, how do we mainstream this?" Because we think it's awesome. It is amazing - once you get there and you're building a Gatsby site, it's incredible. You're super-productive, the websites are super-fast, they're very cheap and easy to run... That's awesome. But it's like, how do we get lots and lots of people in that same world? And to get that, it's packaging things up, that people can be like "Cool. This is what I need to build a website." Sort of like the famous five-minute install for WordPress, but for this modular world. It's sort of cool.

**Jerod Santo:** So Gatsby Recipes - this is part of the open source project, right? It's not a Gatsby Cloud thing; it's right there, in the CLI, and available now...

**Kyle Mathews:** Yeah.

**Jerod Santo:** And there's some recipes out... Is there a place for sharing recipes? Because that's the next step then. Get a recipe hub out there.

**Kyle Mathews:** Yeah, that's something that's very much on our mind. We have some official recipes that you can get direct access to, and then people are just like sharing them on gist or something like that. But a recipe hub, like you're saying, we think would be super-fun. Because our hope is that there's like tens of thousands of these recipes. Anything you can imagine doing, you can just search, find a recipe for that, and you're like "Oh, cool." And you can look at five different variants... It's like, "Oh, they set it up this way, they set it up this way, they set it up this way...", and then you can remix it to meet the specific needs of your project. Agencies, companies can develop their own set of recipes that they use to run stuff.

**Jerod Santo:** Very cool. Kyle, congratulations on finishing your long road to incremental builds.

**Kyle Mathews:** Thank you so much.

**Jerod Santo:** You can go and relax now for a little while. Then you have to get back to work, I'm sure, as the buzz around the new stuff is out there... Of course, links for everything we mentioned are in the show notes for easy clicking. Definitely check out Gatsby Recipes. It seems like a very cool new thing. Get out there, try it, share your recipes, and definitely give Gatsby a go if you haven't yet. It's got lots of interesting ideas at play - React, GraphQL, all the buzzwords... And JAMstack! It's the year of JAMstack.

**Kyle Mathews:** Yeah, it's coming.

**Jerod Santo:** So thanks, Kyle, and we'll talk to you again soon.

**Kyle Mathews:** Thanks so much, Jerod.
