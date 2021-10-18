**Adam Stacoviak:** So we're here to tell the story of Segment going from monorepo to microservices, and back again. We've got Alexandra Noonan here, and we've got Calvin, CTO and co-founder here. Maybe let's open up, since we have -- normally we have one or two people, or only one person on the show... Let's open it up with who you are a bit. Alex, let's start with you.

**Alexandra Noonan:** Yeah, sure. I'm Alex and I am a software engineer for Segment. I joined the engineering team about a year ago, and before that I was actually working on Segment's customer success team, kind of solving tickets and teaching myself how to code, so I could eventually move to engineering; before that, I was in school, studying math. That pretty much brings us to where I am now.

**Adam Stacoviak:** \[04:02\] Awesome. And Calvin, you're the co-founder and CTO, is that right?

**Calvin French-Owen:** Yeah, that's correct. Originally, we started Segment about a little over seven years ago now, and at the time we started in a really different place - we were building different types of software. After about a year and a half of trying to find product-market fit, we ended up on this analytics idea, and we have kind of been building out that infrastructure and that product ever since.

**Adam Stacoviak:** And as I mentioned, we're here to share this story - quite of a journey. Alex, this is penned by you, and from what I understand from behind the scenes, there's several people who led this effort. It was quite a bit of an effort to do so. Maybe let's open up with kind of the timeframe. I saw this -- I think I logged this to our news feed the day of, when I saw it, which was just last month, July 11th... Is that around the timeframe of this blog timeframe, or does it kind of go further back than that? Did it take you several weeks to write this? Give us some timeframe of when this occurred.

**Alexandra Noonan:** Yeah, it actually took me six months to write this post. Rick Branson - it was actually kind of his idea for the post, because I was one of the engineers that was maintaining and trying to build these microservices, and then I helped transition, and then I was also maintaining the monolith after for a bit, and he kind of came on and helped with the transition a bit... So he thought it would be a really interesting post to write, and since I was one of the main engineers that kind of went through the entire experience, he asked if I'd be interested in writing it in January.

Then I worked on it on weekends, nights, and then got it to about 60% done, but wasn't totally happy with it, and then Calvin hosted an engineering blog week where all people did for a week was write a blog post... So I took that week to get it over the line, which was probably the last week of June. I finished it then, and I was sick of reading it, so we released it.

**Jerod Santo:** So this post made quite a splash. We saw it covered on InfoQ, as Adam said, Changelog News logged it... It was shared broadly probably on Hacker News -- I'm not sure if it made Hacker News, but I'm sure it probably did... Before we get into the actual move -- I mean, the reason why I think this made a big splash is because anytime you see a trend in software engineering, and then you see kind of the first, or maybe a couple counter-trends... Like, "This was going a certain direction, and now we are moving away from the trend" - that's interesting to us. So as you start off the post saying that microservices are the architecture du jour, and this is a circumstance wherein the architecture was not working out for Segment... Calvin, maybe you can first give everybody kind of the big picture of what segment is and does, and why it was a good fit? You guys started moving to microservices early on, and only recently - maybe six months ago, or maybe more, found out that it wasn't quite a fit for you guys' team... So tell us what Segment is in terms of what technically it does, and then why it was a good fit, at least at the time, for trying microservices.

**Calvin French-Owen:** Sure. Segment, at its core, is a single API to collect data about your users and your customers, and take that data, whether it's from your website, if you're monitoring things like pageviews, or recording users adding items to their cart, or app interactions... Basically, adding some code to send that data once into our API, and then letting us help to handle the fan out and federation of all that data into over 200 different analytics email and marketing tools that you might be using.

Actually, Segment was kind of born out of our need, as developers, in the very beginning, where we were trying to decide between these three analytics tools - Google Analytics, Kissmetrics and Mixpanel... And we couldn't really figure out what the differences were between them, or why would we want to use one versus another.

\[08:11\] So what we did is we took kind of the lazy engineer's way out and we built this layer of abstraction that sits in front, where you just send the data once, in a common format, and say "Here's who my users are, here's what they're doing", and then we help take care of all of the transformations and mapping that are particular to each API.

Looking back on the history of the company, actually we started with a very monolithic pattern ourselves. There was one service which wasn't Node, which basically packaged up our API, our CDN - we used to serve JavaScript our web app, and it all used the same set of modules, the same single process, and they were just running across multiple EC2 instances. As started growing the team and growing the number of developers, we quickly realized that that single service wasn't going to hold up as we basically added more and more people to it, where there are now more and more PRs happening against the repos, there are more and more deploys happening every day, and we just started running into a bunch of reliability problems.

So to counter that - and I think this was the heyday of when Node.js was all about these really tiny modules, the kind of like left-pad sort of really just very small bits of code that could be reused in many places... That's when we started splitting up our repositories into different repos, and our services, going from this monolith service to a bunch of different microservices.

I think even today -- well, at that point we had about 15 engineers, and we started ending up with hundreds of different microservices, and even today we're probably pretty far on the spectrum of having too many services per engineer, but we're starting to dial it back in a number of these key areas which Alex can talk about.

**Jerod Santo:** One move I've read a few teams make, kind of between the monolith and the microservice, is introducing kind of a code-only -- I don't know if they call it service-oriented architecture, or if that's something else, because I'm not up on the lingo... But this idea of like "We're going to introduce services into our architecture, but not necessarily separate them at the network layer." Was that something that was tried or considered along the way, or was it like "Let's just use HTTP everywhere and have these microservices right off the bat"?

**Calvin French-Owen:** It's interesting for us, because Segment is actually a little bit different than, let's say, your traditional web app, like an Instagram or a Facebook... Because we're this API, most of our what we call services could actually be more like workers, where typically each one will ingest some data that it's reading off of a queue, either Kafka or NSQ. It will do some set of light transformations or enrichment on that data, or maybe pull some extra data from another database, and then it will typically republish that data, either to a queue, or make outbound HTTP requests to a third-party API.

When you think about data pipelines in that way, it actually makes sense that you'd have many different steps, each with different hops in between them, and if you wanna change one hop or one service, you would do that independently of the rest of the pipeline.

So I think that's more what pushed us to have these different services, which like you said, were actually running via separate codebases, because they all did something a little bit different... But we also would run them in the same infrastructure and on the same network.

**Jerod Santo:** The cool thing about Segment, from my perspective, just from a nerdy engineer thought life, is it's basically the adapter pattern for third-party services...

**Calvin French-Owen:** \[12:08\] Yeah, exactly.

**Jerod Santo:** ...just like you would do for your database, right? Abstract a layer, and that layer is Segment, and now you only write to Segment, and then it's going to front Google Analytics, Optimizely, Mixpanel, Kissmetrics - all of them, probably hundreds of them at this point... And because of that, it does have a unique architecture where basically at a service level it's implementing the adapter pattern, and so it does break out, I think, mentally, very well, because you have your analytics queue -- you have one big queue, I'm assuming, and then you probably split that out and have kind of service-level queues... So mentally, I think that would make sense for microservices. Was that the thought process then?

**Calvin French-Owen:** Yeah, that's a great way of phrasing it.

**Jerod Santo:** So Alex, you have in your post kind of a drawing of this queue and a description, and it sounds like there was some coupling and some performance problems that were happening. Can you tell us more about that?

**Alexandra Noonan:** Yeah, so when Segment was originally in a monolith for these destinations, one of the benefits of Segment is that we retry events; for example, say we get 500's from a partner, because they're experiencing a temporary issue, we wanna send that event again... But with our old setup, everything was in one queue, and that included these retry events, as well as live traffic. So if one destination was going down for whatever reason, now that one single cue would be flooded with tons of retry events, as well as live traffic, and we weren't set up at the time to scale quick enough to be able to handle this increase in load... So one destination having issues would affect every single destination, which was not ideal. So that was the original motivation for breaking them all up, so we can have this fault isolation between them all.

**Jerod Santo:** So instead of having one queue and multiple destinations, you would have a queue per destination... So these individuals queues became individual repos, individual services...

**Alexandra Noonan:** Exactly. So now if whatever destination is experiencing an issue, only its specific queue would back up, and everyone else would be unaffected.

**Jerod Santo:** To me that sounds like rainbows and unicorns. It sounds like you guys solved it. That's where the plot thickens, right? Because that was working for a while...

**Alexandra Noonan:** Exactly...

**Jerod Santo:** ...and maybe we need a bigger picture again. We understand what Segment is... Somebody gives us maybe the team size, the company size, maybe the growth metrics of like the engineers, and help us understand -- because microservices, these architecture decisions, they're wildly subjective. Even in our last show we were talking about Istio, and we talked about microservices a little bit, and I was asking the question of like "How do you know when to microservice and when not to microservice?" and that's like the ultimate "It depends", which is basically mostly of software development, is "It depends..."

These case studies are so interesting, because they give us data points by which we can all make decisions better, kind of as an industry, individually, but you can only actually apply the data if you are a subject, if you're a comparable - it's like real estate sales, we need to find comparable houses... Well, we need to find comparable technical stacks, technical situations in order to say "Okay, this might not work for us..." So help us understand Segment at a macro level - the team, the company size etc.

**Calvin French-Owen:** \[15:40\] Segment today - there's about 80 members of the engineering team, and overall the company size is close to 300 people. When you asked the question about whether to adopt microservices or not, and it being there on a case-by-case basis, or a decision that's made very particularly to your company, the way that I like to think about it is about whether you're ready to take on more operational overhead that comes from running in many different services, where maybe each one has its own codebase, it has its own set of monitoring and alerting that you have to be keeping track of, it has its own new deploy process, its own way of managing those services etc...

And honestly, it's a lot of upfront work to run those sorts of microservices, that I think if we'd started there from day one, honestly the company wouldn't have gotten off the ground, and we would have just spent all our time in terms of tooling and infrastructure and we wouldn't have made any progress on the actual product... But that said, there are a lot of benefits to having microservices if you have those systems in place.

For us, we run everything on top of AWS, and we use Amazon's Elastic Container Service (ECS) to run all of our services and orchestrate them, running in Docker containers. For us, we've invested pretty significantly in building out the tooling around ECS, around spinning up a new service that automatically gives you a load balancer, it gives you auto-scaling, it gives you the ability to run this Docker image as long as you've built it via CI, which we've also invested a lot of tooling in.

And I think given that we have that set of primitives, it's made it so that we have kind of this proliferation of services, because it's just so easy to do, and it means that if you want to add a little piece to the pipeline, you don't have to make a change which could potentially break the pipeline for everyone; you don't have to worry about adding a single slow component, which now might buffer in kind of this critical path, which is dealing with hundreds of thousands of requests per second... Instead, you can think about your little compartmentalized piece and how that should peform and behave.

So for us, I think that drove a lot of the decision towards moving towards these really tiny services, where the surface area was small and compartmentalized and well maintained, where if you had a single service that was acting up for some reason... Like, let's say it's connecting to a database which starts timing out and starts sending back connection errors, it doesn't then stall the rest of the pipeline in terms of delivering data.

So like I said, we first adopted this when we were maybe 10 or 15 people, which looking back on it now, I'd say it was definitely on the early side... And we had to build a lot of operational excellence in terms of running these services... I think we were some of the earliest ECS users; today I think we're some of their heaviest users, running about 16,000 containers total across all of our infrastructure... We basically had to build that muscle separately, and put in more upfront cost there, which then allowed us to scale a little bit more easily when it came to building out the pipeline.

That said, it's not without cost. At this point, we built so many of these little services in so many different code paths that it's actually difficult for individual developers to keep track of how they connect... If you make a change to one part of the pipeline, how it affects the rest - that sort of thing. So there's definitely other downsides that I think are maybe not as talked about as much, especially if you adopt microservices really early.

**Break:** \[19:59\] to \[21:06\]

**Jerod Santo:** So Alex, one of the things that you say in this post is that the touted benefits of microservices are improved modularity, reducing test burden, better functional composition, environmental isolation, and development team autonomy. These are the ones that many of us have heard, talked about and kind of analyzed, and definitely true. The opposite, you say, is a monolithic architecture, where a large amount of functionality lives in a single service, which is tested, deployed and scaled as a single unit.

Now, we know monoliths can be majestic, they can also be monsters, but you had switched to microservices for this part of Segment, and then you said in 2017 you started reaching a tipping point with this core piece of the product, which is the one that we're talking about... And I love this statement - you seemed as if you were falling from the microservices tree, hitting every branch on the way down... \[laughter\] Which sounds painful to me. So tell us about that.

As I said before, it seems like rainbows and unicorns, or it seems like a very good fit because of the infrastructure that you all have, but it didn't quite work out, so that's kind of where the plot thickens. Tell us what those branches on the microservices tree felt like and what happened there.

**Alexandra Noonan:** When I joined the team, I actually joined at the peak of when it was getting to be a little bit unbearable, and one of the first issues that we were running into was all these separate codebases were becoming extremely difficult to maintain. So we'd written some shared libraries to help us with some basic HTTP request formatting, error message parsing that all of them used, but at some point in time we made a major version update to that library and we didn't have a good way to test and deploy these hundreds of services, so we just -- one service or one repo we updated to its newest version, and now everybody else is behind... And that kept happening over time with our other shared libraries as well, so now me going into a codebase, I had to be like "Okay, which version of the shared library is it on? What does this version do versus some of the newer versions, and having to keep track of that was incredibly time-consuming and very confusing." And it also caused -- we wouldn't make big updates that we often needed in these shared libraries because we were like "There's no way we're gonna test and deploy all these microservices." That would take the entire team and usually up to a week to just do that. So that was one of the big issues with it.

Another was we were actually seeing some serious performance issues, so now even though all the destinations were broken up into their own queue, so if one went down, it didn't affect the others, the issue was they all had radically different load patterns... So one of these destinations would be processing hundreds of thousands of events per second, while others would only process a handful per day. We always tried to reduce customization across these services, to make them easier to maintain. So we applied blanket autoscaling rules to all of them, but that didn't help with some of the smaller guys, because nothing can really handle -- there's no set of autoscaling rules that can handle a sharp increase in load.

So for the little guys that were handling a handful over a day, and then all of a sudden a customer turns them on and now they're handling hundreds of events per second, they can't scale up, so we're constantly getting paged to manually go in and scale up these little guys... And the blanket autoscaling rules also didn't work because they each had a pretty distinct load pattern in terms of CPU and memory; some were much more CPU-intensive, others were more memory-intensive, and so that also didn't help, which again, caused us to have to go in and manually be scaling these services up. So we were constantly getting paged, because queues were backing up... Tough to scale these guys up, which was pretty frustrating, and I guess that we were literally losing sleep over it. It was very frustrating.

**Jerod Santo:** \[25:14\] It sounds like it. So you mentioned that you had three full-time engineers pretty much spending their time keeping the system alive. Is that what you're referring to, like having to go in and scale things up and down when certain services wouldn't keep up with the load?

**Alexandra Noonan:** Exactly, exactly. So it was difficult for us to add any new destinations, because we were spending so much time maintaining the old ones, and then we had a backlog of bugs building up on the old ones, and we just couldn't make any headway at all, because the performance issues and the maintenance burden was so painful, with all these repos and services and queues. It was getting to be too much.

**Jerod Santo:** Calvin, tell us about this from your perspective, from the CTO side, when this is going on and you have a lot of bugs happening, and you have a lot of manual intervention by your engineers, probably not what you want them spending their time doing... Was this something that kind of like came on all at once? Was it kind of a slow trickle that eventually broke the dam? What did it look like from your angle?

**Calvin French-Owen:** From my perspective, honestly, I was working on a lot of these same systems along with Alex here, so it's definitely not something that snuck up on us or felt like it was just a sudden deluge of paging, and alerts, and problems that happen, that sort of grew in intensity over time fairly slowly.

I think at a certain point we started having a few large customers who would consistently be batching data in ways that were actually disrupting the quality of service for other customers.

You might imagine customer A is sending thousands of requests per second, customer B is sending tens, and maybe customer C is sending one request per second. If we're being rate-limited by a destination that we're sending data to, and we're just reading off of a queue, if we let those thousand messages in first and just sort of due like a first in, first out kind of approach - then we're effectively limiting the amount of data we can deliver for customers B and C, even though they didn't do anything wrong.

So we actually took a step back and said "Hey, maybe we should rethink both all of these individual services, which are scaling poorly, and we should rethink our entire queuing architecture for this problem of a high failure scenario, where approximately 10% of messages that are going out will fail for one reason or another, whether that's an API outage, a rate limit issue, or maybe just an ephemeral network connection.

At that point, we introduced this new set of architecture that we called Centrifuge, which was this kind of revolving set of databases and services whose sole purpose was to absorb this traffic load in the case of failures happening.

We said, okay, this project that we wanna kick off to make sure that our customers are being treated fairly would actually be much easier if we had a single service that we're working with, so why don't we kind of do both projects in sort of lockstep, where we transition these integrations to a single service, which should help a bunch of these different problems that Alex just talked through, as well as help the end customer make sure that their data is getting where it needs to go quickly and reliably.

**Adam Stacoviak:** \[28:50\] How were you managing time in this? I'm thinking startup, customers, you need to move efficiently, and Alex, you mentioned that this post took you six months to write... This is probably -- you've been on board for a year, and a lot of this takes a lot of time; how do you manage, maybe from a CTO level and maybe from your perspective, Alex, as an engineer, how do you dictate architecture and initiate the team to move forward and still please people and get things right?

**Calvin French-Owen:** Yeah, maybe I can start off first from sort of the more global perspective, and then transition to Alex for her perspective as well. When we think about Segment's core value proposition, maybe two or three things that we do with customers' data first is that we help them collect and organize that data... So we wanna make sure that our ingestion endpoint is always up, that we're never dropping data, that we're giving them libraries with a good experience to send that data into our system.

Then the second core tenant is that we are taking that data and making sure it gets to whatever tools it needs to be delivered to in a fast and timely manner. Fast would be something like under 10 seconds.

And when we were looking at the current system, we'd kind of juiced it in one way or another, and made all these tweaks to it, and it was still just not working, and when we would see these long delays, we were effectively violating that second value proposition of Segment - if we're not getting your data where it needs to go, and it's taking 20-30 minutes to get there, we're not doing our core job for all of our customers.

So for us it actually felt fairly well-aligned to kick off this set of projects to deliver really what our customers wanted more than new features, what they wanted more than any sort of other new products we could launch. They just wanted our core product to work amazingly well.

**Adam Stacoviak:** Alex, what about your perspective on the engineering side? How do you be on a team where you have to implement this, but you're making choices, you're scaling your libraries out, you've got different versions of them, you're scaling your repos and it seems like things are okay at first, and then things start to fall down; Jerod mentioned hitting the branches... Maybe you can go a little further into what it looks like and how that feels.

**Alexandra Noonan:** It's actually a little bit interesting... So when I joined the team - like I said, we were at kind of the peak of "Something has to change", and I was brand new to engineering then, so I kind of thought at that time that this was just how it was, and I didn't totally see anything wrong with it until after we moved to the monolith and I helped the team transition to everything, and then looking back on it I kind of realized how crazy and how much time we were spending scaling this and just maintaining them, and how we couldn't make any headway... But in the moment, I didn't see anything wrong with it, just because I was so brand new to engineering and I had no experience before. I was like "Oh, this is kind of annoying, but this seems pretty normal."

**Jerod Santo:** That's an interesting analysis coming from a perspective -- you mentioned that you had previously taught yourself, are a self-taught developer... Is that what you said in the opening?

**Alexandra Noonan:** Yes.

**Jerod Santo:** Tell us how that feels. So one thing that's happened, kind of the metagame on this blog post, which has made such a splash, is you've gotten a lot of attention... Like I said, InfoQ, us, you were on the Changelog, you were gonna be speaking at conferences about this... As a self-taught developer - I know that it's probably an obvious kind of yes answer, so maybe this is a dumb question... But there's so much intimidation out there; I'm also self-taught... I've been doing it for a very long time now, so I feel like I've gotten past a lot of that stuff... Self-taught in software development. I did go to school for general computery stuff, but... You mentioned you were in school for math, so related fields, but definitely a bigger transition than I made... How does it feel to put yourself out there and make this post, which is somewhat counter-culture right now, counter-trend? By the way, you mentioned six months - very well thought out, very well reasoned, and not flamebaity or clickbaity at all in its content, so congratulations on that...

**Alexandra Noonan:** Thank you, thank you.

**Jerod Santo:** \[33:07\] But just tell us, I guess in the meta game sense, your feels with regards to the public awareness of who you are, and what you're doing, and all that, being self-taught.

**Alexandra Noonan:** When Rick first came to me with the idea for the post, we had no idea it was gonna be this crazy. We knew we were gonna stir the pot a little bit, but we had no idea the impact it was actually gonna have. I'd always wanted to write a post, so I thought this would be a cool one... I was just gonna write about my experience, kind of as an engineer at Segment. Then it got a crazy amount of attention, and I probably had I think the worst impostor syndrome I've ever had on engineering... But it's been pretty cool.

When I first started engineering too, I wasn't super-involved in kind of Hacker News or the community, so I really didn't have an understanding of the impact it was gonna have, though Rick tried to warn me... But now, actually with this post, it's kind of helped me get into the community a little bit more... So I've been doing more reading on Hacker News, and listening to podcasts, and it's been pretty cool.

I think I understand now why it was such a big deal to people... Because for me it was just like "Oh, I'm just writing about my experience, what happened at Segment and why we did certain things", but it's been really fun. Definitely a little scary, lots of impostor syndrome, but it's been really cool to see it make such an impact in the tech world.

**Jerod Santo:** Yeah. Well, as we say, the best thing to do with impostor syndrome is just to punch it in the face. You've just gotta face it. Otherwise... \[laughter\]

**Adam Stacoviak:** I love that one.

**Alexandra Noonan:** I like that, I'll remember that.

**Jerod Santo:** There you go. So I'm curious, besides us, what's been the overarching response from the community? Has it been a lot of pushback, has there been negativity, people saying "Y'all at Segment are crazy, you don't know what you're doing"? Or has it been "Wow, this is really interesting. Maybe we'll consider it"? Because there's just a lot of tension around the whole monolith versus microservices debate...

**Alexandra Noonan:** Totally.

**Jerod Santo:** ...and microservices have been around long enough now that we're starting to see people who have run them for a couple of years or a year... So you can't really tell if a thing is scalable long-term, net good, or if it's just like a series of tradeoffs, until you have some real-world experiences; maybe we're starting to see that... But I'm curious what has the overall response been? Positive? Negative? Meh?

**Alexandra Noonan:** I actually didn't read a single Hacker News comment, because...

**Adam Stacoviak:** Good for you!

**Alexandra Noonan:** \[laughs\]

**Adam Stacoviak:** That's how you do it.

**Alexandra Noonan:** Exactly. \[laughs\] Well, I also thought when I released it there was only gonna be 50, and then I checked later in the day and there was over 700, so I was like "Okay..."

**Jerod Santo:** Oh, wow...

**Adam Stacoviak:** That's awesome!

**Jerod Santo:** 700 comments...

**Alexandra Noonan:** Yeah, it was crazy. But the general feedback I feel, after talking to other media, and kind of some of my friends that are in the industry that saw the post, has actually been relatively positive, and people were just super-curious as to like why we did that, why we made this change... Because again, as you mentioned, the microservice boom happened a few years ago, so some people are starting to kind of realize that this may have not been the right setup for them...

So it's been, I would say, pretty positive, and more people are just really curious about why we did it, and wanna know more... It's been really cool to see people wanting to be more educated and understand the details about why we did it... But I don't know what happened on Hacker News. I heard it was relatively good, but I didn't read a single one... \[laughs\]

**Jerod Santo:** That's a good tactic for Hacker News. Have a friend read it for you and then just kind of summarize... "Meh, pretty good..."

**Alexandra Noonan:** \[36:54\] Exactly. That's basically what I did. Some people sent me screenshots of really nice comments. I heard there was some negative feedback, but I've heard that's also pretty typical with Hacker News, so I wasn't too worried about it... And that didn't seem like the overall feedback.

**Jerod Santo:** So The Changelog's experience - our show's experience - with Hacker News over the years, until recently, has been whenever somebody posts us and we happen to make on the homepage one of our episodes, undoubtedly, without a miss, somebody would say "This is lame... Where is the transcript? I just wanna read it." Like, every single time. Isn't that right, Adam? \[laughter\] Somebody would say that, and I'm just like "Can you give us a break? We're just doing a podcast." Now we have transcripts, so they can't say that anymore...

**Adam Stacoviak:** Yeah, they don't say that anymore.

**Jerod Santo:** You know, we do it for accessibility, but we also kind of do it to shut up Hacker News people, so... \[laughter\] It makes the transcripts worth it.

**Adam Stacoviak:** Here's what I'm kind of curious of, especially Jerod you mentioned earlier our conversation, which was yesterday, and these episodes will come out in different timeframes... So the Istio episode should already be out; if you're listening to this, that episode should be out, because this one's coming after that... But in light of that, I mean, clearly there's something happening in the service mesh and microservices area; this is definitely subjective, and then in terms of like your engineering and your culture... So it works in places, and I'm curious because in the pre-call, Alex, you mentioned - and Calvin, I don't think you were on the call yet when we were kind of having some pre-call conversation - that you're a collocated team, you have two engineering offices, and maybe it makes sense where teams are completely... Like, I can't see Jerod -- we're on the same team, but he and I have no conversation with one another; maybe that makes sense where microservices make sense, and they don't make sense here because you have collocated offices, and your teams can maybe interact more fluidly, and that kind of thing. Where do you think the breakdown really happened with this? Was it purely technical, or was it because of the way your product and teams operate?

**Alexandra Noonan:** At the time we actually didn't have the Vancouver office...

**Adam Stacoviak:** Okay, so one office then.

**Alexandra Noonan:** Exactly. All the engineers were in San Francisco, and I think it was -- I mean, a mix of both... Not a great answer, but part of it was the burden on the team, and our productivity was down, and another part of it was these performance issues that we wanted to get rid of for customers... So a combination. Calvin, you can probably add a bit more color, since you kind of were here for more of the microservice setup than I was.

**Calvin French-Owen:** I'd say for us that it's definitely a combination... And I should also be clear - by no means are we abandoning microservices across Segment. There are actually a lot of good reasons to use them across many pieces of our infrastructure. Within this one particular case we found we had better luck moving over to a single service. So I'd say we're continuing to make the same tradeoff instead of balances.

When you talk about service mesh, I think that is definitely something that we are following fairly closely and are super-interested in... And actually Alex has started a project working to incorporate Envoy as part of this new future of service mesh within Segment, which we're monitoring going forward with.

I think in our case it's probably a bit of a combination of both... We had this team of engineers who were trying to wrangle 100+ codebases across 100+ services, and when all of them do a similar thing, that's really just hard to manage and you have to build a lot of tooling around it... And we figured, well, we'd rather take the relatively slow rate of changes being made to a single place, versus having to manage this many codebases and this many services.

\[40:43\] I think the one other thing that changed here as well - originally, we had anticipated that third-parties would be adding a lot of their own code into these integrations, so you might imagine we support Amplitude, and Mixpanel as places that we send data... We were kind of expecting that we would have engineers from those teams actually making pull requests, contributing whenever they pushed updates to their APIs, and in practice that really didn't turn out to be true. It ended up being a team here who was working on it... So we said "Well, we thought we'd get these supposed benefits. We're not seeing those, let's move over."

**Break:** \[41:31\] to \[42:39\]

**Jerod Santo:** Calvin, you had mentioned Centrifuge as a core piece of engineering infrastructure that you did as part of this transition. Can both of you help us understand, from the point that you decided and very well noted that this is not all of Segment that has moved, this is a specific section of Segment, Alex's team has moved from microservice back to a single service... Take a step-by-step through that; once the decision was made, "Okay, we're going to do this..." I know Centrifuge is involved somehow, but please help us all understand very clearly, step by step, what took to get to where you are today, and to where you could write your post saying goodbye to microservices.

**Calvin French-Owen:** Back in April of 2017 we kept hitting these delays with various parts of the pipeline, where customers would see their data being delayed for 20-30 minutes, while either our current queuing setup would block up with a single customer's data, or particular destinations wouldn't scale appropriately, as Alex was just talking about.

At that point, we said, okay, we need a bigger overhaul to the way that we actually deliver data outbound, which should rethink a bunch of the primitives that we built these individual queues per destination over the past two years, and should hopefully help us scale for the upcoming 3-5 years, as we 10x or 100x our volume.

And once we kind of acknowledged this was a problem, Rick Branson, who Alex has talked about a bunch, spearheaded the effort to actually architect the system that he called Centrifuge. Centrifuge effectively replaces the single queues that we have - one queue for Google Analytics, with one queue for Mixpanel, with one queue for Intercom, with what you can think of as almost being virtualized queues, or individual sets of queues on a per customer, per destination basis.

So we might have one queue for Google Analytics, which has all of Instacart's data, but another one with all of New Relic's data, and maybe another one with Fender's data. This system - honestly, we hadn't seen any really good prior art for.

\[45:04\] I think network flows are about the closest that you'd get to it, but those give you back pressure in terms of being able to say "Hey, there's too much data here. Stop sending from the very TCP source that you have", which is something that we can't exactly enforce on our customers.

So with this design in hand for Centrifuge, we started out on what actually turned into about a nine-month journey where we decided to roll Centrifuge out into production, and Centrifuge was responsible for all of the message delivery, the retries, and archiving of any data which wasn't delivered, and then separately, Centrifuge would make requests into this new integration's monoservice, which you could think of as being this intelligent proxy which would take this raw data in, and depending on where it's going, make multiple requests to a third-party endpoint.

And for the rollout process there, like I said, we spent maybe a month or so designing it, then we began to actually consolidate the repo and move it in to be a single monoservice. We started building out the bones of Centrifuge for another three or four months or so, and we started cutting over our first traffic after about a five-month period.

Now, when we started cutting over traffic, we had this interesting problem, where if we're sending traffic via two pipelines, and we have to test it end-to-end in whatever destination tool, if we both just mirror traffic and let them both go, we'll end up with double counts in Google Analytics or double counts in Mixpanel. So we actually added a kind of serialization point in the middle, that both set of microservices would talk to, as well as the monolith, and effectively we'd do kind of a first-write wins type of scenario, where it creates some locks in Redis, and then only one of the messages would succeed through either pipeline.

We basically slowly ramped traffic in that manner, always checking the end-to-end metrics on it, always making sure that no matter which pipeline we were using, the delivery rates looked perfectly good. I'm sure actually Alex can talk to more of that rollout period, because it was definitely a little bit rocky in terms of how we rolled out the system... But about 2-3 months after that, we had fully tested all the scaling, cut over 100%, and we were feeling much better about the system's stability. Looking at it today, it's actually a very rock-solid and well-utilized piece of infrastructure.

**Jerod Santo:** Alex, anything to add there?

**Alexandra Noonan:** As he mentioned, the process to get to 100% was I think a little bit longer than we anticipated. I remember we'd be in planning meetings at the beginning of the week, and Calvin would be like "Okay, what do we need to cut traffic over 100% in two weeks?" and we'd always be like "Oh, we just need to fix this one performance issue and then we're good to starting cutting over..." Then we'd try and cut some over, and quickly realized that there was a lot more performance stuff we needed to tackle... But now that it's all done, as Calvin mentioned, it's a rock-solid system and it's really cool and complex, so it was definitely worth a little bit of that migration pain, but now the system is very stable and can scale much better... And we've been able to build cool products on top of it, which we couldn't have done before with our microservices architecture, which has also been really exciting to see.

**Jerod Santo:** What do you mean by that?

**Alexandra Noonan:** So everyone's biggest pain point in this segment - or one of the biggest - is that they don't get a lot of visibility into what happens when they send data to Segment, and then when we send it on to a destination. So a product that I built with one of my other teammates at the time was we built something on top of Centrifuge to basically collect the responses and counts of metrics, whether an event they said was successful to Google, or got rejected, and why, and then display that in the UI to users...

\[49:27\] But with the microservice queue set up, there wouldn't have been a good way for us to pass that information back and somehow store it, so that we could show that info to users. But with Centrifuge, since Centrifuge kind of is keeping track of all of this, it knows everything already, and we just kind of have to flush that data out to a queue, and then store it from there, and now we have it in the UI, and I think we've had a radically positive feedback on that feature.

Now customers can see, "Okay, I sent an event to Segment, I see it in Segment, and now I see Segment sent it to Google Analytics and it was either successful or it failed for whatever reason", which they'd never had that insight before. They can only see that the event made it to Segment, and then they'd have to go check Google, and when their event is not there, they have no idea what happened. So that was a cool product that Centrifuge allowed us to build

**Calvin French-Owen:** This is one of my favorite products that we've launched all year and maybe ever... It just provides essentially a status page for these hundreds of different downstream tools in a way that many of them do not do natively... Where you can see exactly what is happening with your data, and whether it's being rejected or accepted by each API, and how long it takes to get there. It's just an unparalleled level of insight.

**Jerod Santo:** There was a great post on your blog, written by you, Calvin, about all about Centrifuge for people who are interested - "Centrifuge, a reliable system for delivering billions of events per day." Is this laying out the infrastructure and architecture? Is this an announcement of some sort of open source project? What's the status of Centrifuge? Is it public use, is it private to Segment?

**Calvin French-Owen:** Currently it is private to Segment, though this post goes into a lot of depth about the architecture, the choices that we've made, and how it's been to operate it in production. At some point, I would actually have loved to open-source Centrifuge, or at least the bones of it itself, because it seems really useful for anyone who's running a large online web service, particularly if they need to make webhooks out from some data that's inside that service, or they need to send a bunch of data out to many different endpoints, which might be flaky, might fail at any given time.

**Jerod Santo:** That would be very cool, to see that open-sourced. So this sounds like the project that took nine months, but it sounds like you thought it was 90% done maybe a few months in, and then it just stayed at 90%, as engineering problems tend to do. What do you say, Alex -- that weekly meeting, when you're like "Yeah, it's pretty much finished. A couple more weeks..."

**Alexandra Noonan:** I'd say so. I transitioned onto that Centrifuge team as they already kind of had an initial prototype; I was still helping maintain some of our microservices... But when I joined, every week I felt like "We're this close, we're a month away", and it dragged on for a few months, but... As you've mentioned, that's pretty natural for every big migration and engineering undertaking.

**Jerod Santo:** So what does this imply or inform with other parts of Segment, Calvin? Is this switch back to a single service something that's very specific to this part of Segment? Is this something you're not considering for other parts of your product or engineering teams that are still working in the microservices world, or is this a one-off that fit this use case, but probably not your other ones?

**Calvin French-Owen:** There are a few other places where we're considering consolidating services, and I think there's a couple of reasons for that. One is within the pipeline there's sort of this natural entropy over time, where systems will split up and break apart as people add and tack on new features to them.

\[53:00\] In terms of the pipeline itself, I think we wanna make sure that we're making sure that's easy to reason about, it's easy to find what you're looking for, and you can kind of go to a couple of key places that need to be independent services, and understand everything that it's doing.

I think the second piece that we're interested in consolidating around is actually cost. Obviously, every time you copy data over the network, or republished a Kafka, or have a system which is deserializing JSON and then reserializing back up, it's much more expensive... So in order to keep costs low for all of our customers, we're interested in consolidating some there as well.

**Adam Stacoviak:** I'm kind of curious if you can inform other CTOs that listen to this show, or engineering teams, or engineering managers on maybe the process... Because you mentioned Centrifuge is not a public service yet, or is not open source, or whatever your plans are with it, and Alex, you mentioned it took you six months to write this post. I'm curious from a content perspective, your motivations for these two posts in particular... Was it customer acquisition? Was it just telling the world how you do things? Was it idea sharing? Was it to attract the right kind of talent? What are the motivations for being so thorough and so well-done with your engineering blog?

**Calvin French-Owen:** I'd say that the blog is actually a deeply cultural part of Segment, that kind of goes back to our founding days. Initially, the four of us - we're just all engineers, we had no users, and we said "Oh, how do we get developers to try out our tool? How do we get people interested in this? How do we actually just start getting our name out there?" and I think the blog was the first thing that we turned to as something where -- we figured out how to write interesting content, that was effectively stuff that we were already doing, that we just wanted to share with the world.

Actually, if you go back through even to some of the very early blog posts, they're constantly documenting either things that we learned, or new ideas that we've had, or kind of sets of best practices that we've learned from what we've built... And as that's grown over time, we've really seen it be impactful on a number of dimensions. One of those is around customers and brand; obviously, Segment is kind of a developer tool. I think in order to have engineers and developers trust you, I know at least I'm reading other companies' blogs all the time, following folks on Twitter to understand what's coming next in terms of tech, and sharing what we're doing internally already out there I think helps build a lot of that trust, particularly when it comes to onboarding and setting up Segment for the first time... Something you're a little bit already familiar with.

Then there's definite benefits, as you've mentioned, on hiring, as well. A number of teammates who end up joining the team all say "Hey, I first saw you through the blog. That was the place where I first found out about Segment, and then I was able to dig in more and understand what was really going on at the company, and it gave me more of a window than I would have had really any other way." So I think there's that too, in addition to just being an amazing way to share when we learn things, either about new parts of architecture, or about switching between monoliths and microservices, as Alex has talked about as well.

**Adam Stacoviak:** What about you, Alex, from a first-time blogger on the Segment blog, a home run out the box...? What's your experience, with other team members even? What's your experience with getting a chance to share some deep interests, and obviously, quite a bit of passion? Six months to write it, and you're on the team, you're obviously doing great work, you're passionate about what you're doing... What is it for you to share this through the blog?

**Alexandra Noonan:** \[57:15\] It was a really cool experience. I know a lot of people at Segment were kind of curious why we'd moved to Centrifuge and invested so much time in this.... So I had some engineers that had joined post-Centrifuge ask me about it, and they were super-excited for the post to read about it, so that was really cool.

And I've always wanted to get more into writing and writing blog posts, and this was the first post I've ever written about anything, so it was really cool to get to just share my experience and have it kind of take off, and knowing that a lot of people have read the post, and I think a lot of people have actually found value in it, which has been the coolest part, that we've had so many people reach out, interested and curious to learn more... It has been really exciting and eye-opening... And to just inspire. I know a lot of women came up to me after and were really inspired by the fact that I had such a post that went so crazy on the internet, because you don't see a lot of posts from women in engineering, because there aren't many... But that part also made me really happy.

**Adam Stacoviak:** That's interesting. So one part to inform your counterparts inside of Segment, because you've got 65 engineers; some of them may be in the know, some of them may not, so this was a way to inform internally... One way to also inspire, and then another way to potentially hire.

We often interface a lot with different engineering teams through just what we do, and I'm always curious why some of them don't put enough intention into their engineering blog. Since you do such a great job, I wanted to make sure I ask that question before we close out, because you do a phenomenal job at it - one with the writing, and two, just with the design of it. It's easy to read, it's easy to browse, and if you're listening to this, you get my stamp of approval to say "This is a blog you should look at to mirror or to mimic when you're trying to do if for your organization."

**Alexandra Noonan:** Thank you!

**Jerod Santo:** Did you do that rhyme on purpose, "to inform, inspire and to hire"? Did you plan that out, Adam?

**Adam Stacoviak:** I did, sorry. Yeah...

**Calvin French-Owen:** \[laughs\] It's a nice touch.

**Jerod Santo:** It's a nice turn of phrase.

**Adam Stacoviak:** And with that, that's the show. My rhymes end the show, I love that... So there you go. \[laughter\]

**Alexandra Noonan:** Amusing... \[laughs\]

**Adam Stacoviak:** But any closing thoughts from either of you? Any closing advice for those looking to your post saying "This is the bible of information", whether we should go there and back again and then there again. Any closing advice for those listening to this show, anything to share as we close out?

**Alexandra Noonan:** I think my one piece would be that it's really all about finding the right fit for your infrastructure and your team. A lot of people have reached out and been kind of nervous that they're gonna make mistakes with their microservice setup, and were curious to get my opinion on what I thought... And I think it's all about what is the best for your team at the time. We're a perfect example of that - as Calvin mentioned, we started a monolith, because if we'd started with microservices, there would have been no way for us to get off the ground... And then we moved to microservices, and that was the perfect solution for the time, but then after a couple years it turned out not to be anymore... So I would say don't be afraid to make changes. It's about finding the right solution for your team and your infrastructure.

**Calvin French-Owen:** \[01:00:36.04\] I echo that 100%. Definitely just don't outsource your thinking. It's just important to talk about tradeoffs on both sides really (I'd say) for any engineering decision you make... Because if you don't explicitly acknowledge them, chances are there's some con or something that you're giving up that you might notice later.

**Adam Stacoviak:** Well, Alex and Calvin, thank you so much for taking the time to walk us through some of the pros, cons, ins and outs of your journey. We appreciate your time.

**Calvin French-Owen:** Yeah, thank you.

**Alexandra Noonan:** Of course, thank you.
