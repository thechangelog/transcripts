**Gerhard Lazu:** So in 2020, 16th of June, I reached out, I've sent you a direct message, and it read like this: "Hi. I can't make headspace for our conversation at the moment. Will ping when I'm done with current work in progress and have loaded necessary context to make it worthwhile. Liking your recent tweets, by the way. Looking forward to where you're taking the mindshare." And I was referring to the observability mindshare. This was 2020.

17 months later, I think that mindshare is getting even more traction, if that was possible. I think it was expected, but I really liked where the whole observability landscape has shifted, and you, Charity, and your team, made a massive contribution to that.

**Charity Majors:** Yeah. That's very sweet of you.

**Gerhard Lazu:** You gave lots of great talks, lots of great presentations, and I think this will be another one. We'll see how it goes. That's my hope. That's my intention.

**Charity Majors:** Cool.

**Gerhard Lazu:** So I know that you get asked this question a lot, but I think it's important that we start here. What is observability?

**Charity Majors:** Well, it comes from the mechanical engineering and control systems theory, and the definition of observability - it's the mathematical tool of controllability, and it means how much can you understand about any internal system state just by looking at it from the outside.

So if we extrapolate that to computers, I think a lot of interesting things flow from it, and it's increasingly relevant. It used to be that we had a load balancer, the app, and the database. And you could pretty much predict most of the ways the system was gonna fail; it repeated itself over and over. Nowadays, people have got microservices, they might have hundreds of services, all these different storage systems, and the systems tend to fail in a way that is different every time. So observability is about instrumenting your code in such a way that you could ask any question, understand any internal system state with no prior knowledge, without ever having seen it before... Can you understand what's happening on your very complex system?

**Gerhard Lazu:** So instrumenting your code - that is a really important one. Would you say that you would need to instrument your code every time you need to observe an aspect of it?

**Charity Majors:** The point of it is that you shouldn't have to add new code to observe it. That's part of the point. If you've got enough context, you should be able to slice and dice and ask new questions without shipping custom code. Because adding custom code implies that you knew in advance what you needed to look for, right?

**Gerhard Lazu:** So the code, in a way, it needs to expose some information about how it runs...

**Charity Majors:** You want to gather any information you happen to know about the parameters that were passed in, or the runtime environment, the language internals, the container, the systems environment, as well as -- you wanna wrap automatically and store any HTTP calls, you wanna store the amount of time it took, what the contents were etc. Any database calls - you wanna store the raw query, the normalized query, the amount of time it took, the return value... You wanna store anything that might help you find this request at some later date. Any user ID, any shopping cart ID... High cardinality dimensions like IDs are incredibly identifying and incredibly useful. The point is you don't know it's gonna be useful in the future, so you should just throw in anything you think might be useful, and some day it will be.

**Gerhard Lazu:** I find it really interesting how you keep mentioning things which make business sense; they are typically related to the problem that your application or your code is trying to solve. What you're not saying is CPU, memory, disk. That's very interesting. Why is that?

**Charity Majors:** I feel like we're seeing a bit of a divergence. I think that monitoring tools, things that are metrics-based, are the right tool for the job when it comes to understanding your infrastructure. If you're reflective of the service, "Is this service healthy?" But that's a very different question from "Is my code working? Is this user happy? Is this kind of request executed from end to end?" That's the observability tool.

Now, I do think that the observability, from the perspective of your code - I think there are a couple of metrics that are probably useful to software engineers. You do wanna know if you just shipped a change and your memory usage tripled. You do wanna know if you just shipped a change and your CPU suddenly saturated. But there's only like three or four of those that are really useful most of the time. The rest of those metrics tend to be everything under /proc or all of the IPv6 counters, and statistics, and stuff... And that should not be in the purview of software engineers who are trying to write code and understand it in production.

**Gerhard Lazu:** So the way I hear it, it's almost like the end user experience, what makes them happy, what makes them sad.

**Charity Majors:** \[08:10\] It's a radical perspective shift from the perspective of the service, to the perspective of the user. Another way to think of this is "Well, we blew up the monolith..." It used to be you had a monolith, and if all else failed you could attach GDB and you could just step through it, right? Well, then we blew up the monolith and suddenly the request is hopping the network all over the place, and now you can't step through it. So part of the way that we focus on instrumenting is gathering up all of that information around the perspectives of the request, so that we're almost like passing it along with the request as as it hops the network from step to step.

**Gerhard Lazu:** So that to me sounds a lot like what the microservice architecture would advocate for. You have lots of microservices, you have--

**Charity Majors:** You're pretty much screwed if you don't have something like this and you're running microservices, yeah.

**Gerhard Lazu:** Right. So this is very important for microservices. What about serverless?

**Charity Majors:** Absolutely. In fact, I will often tell people that the right way to think about instrumenting your code in the future is just imagine you're running serverless. Because you might not have access to all of the underlying infrastructure. All you have access to is what can you tell through the lens of the instrumentation that you're embedding in your code. In turns out you can tell a lot, and that's what's actually important.

**Gerhard Lazu:** Interesting. So if you do have a monolith, what do you do? Can you still use the observability that you mention about?

**Charity Majors:** Absolutely. It's never not easier to have observability tools... I feel like though when you're asking someone to radically change the way they do things, or adopt a new tool, what you're offering them needs to be an order of magnitude better than what they've got. For some monoliths, it is. For some, it's not. For a lot of monoliths, they can get along just fine with some Datadog graphs, and dashboards, some monitoring checks... Because almost all the complexity is bound up inside the application logic, and they're familiar with that.

So you should never embrace change for the sake of change, or complexity for the sake of complexity. If what you have is working for you, more power to you. The problem is that for so many of us it's almost like falling off a cliff. It's very discontinuous; when the old solutions stop working for you, they really stop working, and it's pretty abrupt and pretty brutal.

**Gerhard Lazu:** Right, that makes sense. Going back a little bit to the users - I think that is very important, because all of a sudden, being able to see or visualize in a way the journey that the user takes through your app, and what that entails through your app, I think that is very powerful. And being able to understand what is not working for that user specifically is important...

**Charity Majors:** Yes.

**Gerhard Lazu:** But also, extrapolating that to all your users.

**Charity Majors:** Yes. If it's broken for this user, who else is it broken for? Absolutely.

**Gerhard Lazu:** And I like that perspective, because that can work equally well for development teams. So we often think that our end users are the only ones that benefit from the code. But a lot of the time, the development teams spend a lot more time with the code, wrestling it, fixing it, debugging it, whatever needs to happen. So how does the observability that you think about help those types of users?

**Charity Majors:** Well, the best engineers I've ever worked with are the ones who will have one window up with their IDE and another window up with their observability tool, and they're just constantly -- they're entering a conversation with their code as it's live in production.

So observability isn't a magical fairy solution in and of itself. There are other important components here that work in synchrony. I think that CI/CD, having a really healthy CI/CD pipeline is a really important part of this, because when you're writing code, you have all that context in your brain, it's fresh; you know what you're trying to do, you know what trade-offs you make, you know what you didn't try, or what you tried and what failed... And that stays in your brain for minutes, hours... Not that much longer after you've switched contexts and picked up a different project. Then it's gone and it's never coming back.

\[12:12\] And so having a CI/CD pipeline where once you merge your changes to main it automatically picks it up, runs tests and deploys within 15 minutes (that's a good upper bound), and very importantly, it deploys only your changes. If it's small, it's compact, it's a few minutes, then you can ship one engineer's changes at a time, which gives you a really powerful sense of ownership. When you know your changes are going live within 15 minutes, you're highly incentivized to go look at it through the lens of the instrumentation you just wrote.

When you're merging your changes and you're pretty sure that at some point in the next 12 to 72 hours your changes and anywhere from 0 to 15 other people's changes are going to be shipped, nobody's gonna look at it. So you've severed that tight, virtuous feedback loop of ownership.

I'd also like to point -- you know, Facebook did some great research earlier this year that showed from the moment when you're writing code and you write a bug, the amount of cost and time and pain etc. goes up exponentially when it comes to fixing that bug, the longer it gets. You've written it, you can backspace and it's the easiest it's ever going to be. The longer it gets, the more expensive it gets, the more painful it gets, the harder it gets. Once it's been a month or two, it probably won't even be you that's finding and fixing the bug. It'll be some other poor fool who has no context.

So observability is what allows you to take your microscope out and compare at the level of the pull request, what is different about the request? I have this build ID, with these changes, with this instrumentation... And once you can see it, it's so easy to fix. Fixing bugs is not hard; finding the bugs is hard, right?

**Gerhard Lazu:** Yes. It's always that one character change, or the one line change. And the hardest bugs - that's exactly what it is, where you just reorder a line, and guess what - it starts working again. Nobody knows why. Don't touch it. That's what typically happens.

**Charity Majors:** The hard part is finding where in the system is the bug that you need to fix. And knowing that there's a bug in the first place. And these are the things that observability is so well-positioned to do for you, because it speaks the language of endpoints, and variables, and not the language of low-level systems stuff.

**Gerhard Lazu:** I think the term "observability" is overloaded, overused...

**Charity Majors:** Well, it is now...

**Gerhard Lazu:** It is now, right? Not when you started, right?

**Charity Majors:** I planted my flag on it! That was my word.

**Gerhard Lazu:** You had quite a bit of time to think about it, and I really like the alternatives that you came up with, which - I think they all mean observability. One that really stood out to me is being curious in production. What happens in your production? How do yo know what is going on? And obviously, production is a metaphor for a system that really matters... Because you maybe work on a software that gets shipped to other users that get to use it in their production, and it's not your production, it's their production; so you're removed from it. But still, understanding how that software behaves in production, someone else's, is also important. So how can you be curious in production? What does that even look like? And I think what you've just described captures it well. Reducing that time between introducing the bug and seeing how the system behaves at scale - because that's what production typically means; lots and lots of requests, lots of weird paths being taken through your codebase... The heisenbugs, right? One in a million. They only happen in production.

**Charity Majors:** Right.

**Gerhard Lazu:** \[15:58\] And I think property testing and fuzzing help with it somewhat, but not at scale. You can't generate production scale. It's impossible.

**Charity Majors:** You've just basically gotta accept that all the interesting bugs are only gonna happen in production. There's no such thing as a staging environment that matches production. It doesn't exist.

**Gerhard Lazu:** I love that. I love that. And I think that's why you should push directly to production... On a Friday. The day doesn't matter really. It's just a day. What if it's Saturday? Does it matter?

**Charity Majors:** Well, if you're using feature flags, then it shouldn't matter... Right? If you're using a feature flag... Like, decoupling deploys from releases is one of the most powerful things you can do for reliability. I love the phrase that the Intercom folks came up with, which is that shipping is the heartbeat of your company. If you're a software co, shipping should be as regular, as minor, as uneventful, as boring, as tedious, as pedestrian as a heartbeat, right? Because that's how you deliver value to users; it shouldn't be something that you have to get all worked up about. It should just work, it should happen many, many, many times a day. Predictably, etc.

**Gerhard Lazu:** Any day, every day, it doesn't really matter. As long as you're shipping...

**Charity Majors:** Right? A lot of people get worked up about the phrase "testing in production", but in fact we all do it. The only question is "Do you admit you do it?" and "Do you try to build guardrails so that you do it safely or not?" Because I agree, testing in production, if you don't have tests, if you don't whatever - it's a terrible idea. But that's not what we're talking about. We're talking about doing it well. Because it's the only way you can test these things.

**Gerhard Lazu:** That's right.

**Break**: \[17:35\]

**Gerhard Lazu:** So I think we're both agreeing that shipping into production is very important. Anything before that - you can do it, sure. Why? Ask yourself. If you have--

**Charity Majors:** Code that isn't in production is dead code. It doesn't matter, it doesn't exist.

**Gerhard Lazu:** Right. So that's the first one. The second one is you want that time to be as short as possible. I think anything under 15 minutes is good, but what I'm wondering is why 15 minutes.

**Charity Majors:** Totally arbitrary. \[laughs\]

**Gerhard Lazu:** Right.

**Charity Majors:** \[20:01\] Just the longer it gets, the more pathologies start to creep in; you're entering this sort of death spiral of it takes longer, so you need bigger diffs, so code review takes longer, you start to ship multiple changes from multiple people at a time, so you decouple-- you know, it's just badness. And these numbers I've also pulled out of my ass, but they also seem to be true. If you ship within 15 minutes, that takes you X number of engineers to build, maintain this codebase. If it takes you in the order of an hour or more, you need twice as many engineers. And if it takes you in the order of a day, you need twice as many again. And if it takes you a week, twice as many again. And I'm definitely not exaggerating it; if anything, I am being too conservative and underestimating it.

**Gerhard Lazu:** Right.

**Charity Majors:** And that time is not being spent on -- it's the worst parts of engineering; it's the waiting on each other, and the trying to find the bugs someone else wrote... Engineering can be such a wonderful, beautiful, creative, fantastic profession, but only if you're in a high-performing team that can spend most of its time solving new and interesting, hard problems that push the business forward every day. There's nothing magical about it, it's just that I think that, honestly, 15 minutes is achievable for anyone who just invests the engineering effort. It's not rocket science, it's just engineering. You just have to set a level and hold yourself to it. Instrument your build pipelines, you can see where all the time is going to...

I think Intercom - again, they're some of my favorite people, but they ship in 15 or less, and they have a Ruby on Rails monolith. \[laughs\] If you're using Golang or something, you have no excuse. Anyone can get it done in 15 minutes. 5 minutes or less - that's trickier. I don't think that's achievable for everyone and every stack. But 15 minutes or less - I think that's actually achievable for almost everyone.

**Gerhard Lazu:** I think this feels to me very related to testing. You don't want your tests to take more than some number of minutes... And if they do - well, how many changes can you push to your repository if you have to wait an hour, two hours to know whether you haven't broken anything?

**Charity Majors:** Yeah.

**Gerhard Lazu:** I think this is very similar, but maybe more important, because this also includes the tests. You would obviously want your tests to run within these 15 minutes, and then have your code deployed. So I think there is some sense there. But also, I think even shipping may be an overloaded term. Like, what does it mean to ship? Well, obviously, you're getting code out there in production. But what if you think about shipping as learning? How long would you want to wait to learn something, or actually to get an answer to one of your questions that you have? "I wonder..." "What if...?" and you try something. And if you have to wait an hour for an answer - well, I think you'll get frustrated very quickly.

**Charity Majors:** If you have to ship a one-line change, how long would it take you to get that out? For a lot of companies, they haven't prioritized it, and it literally takes them hours to do a one-line change, and that to me is just unspeakable. The thing is, even companies who take an hour to make the change, almost all of them have shortcuts... And that's terrible. You really want the shortest, fastest, quickest, easiest path to be the default.

**Gerhard Lazu:** Let's take our example. Changelog.com is a monolithic application. It's a Phoenix-based app; think of it like Ruby on Rails. It's using a PostgreSQL database, it has NGINX in front - this is Ingress NGINX, it's running on Kubernetes, and there's a load balancer in front, and there's a CDN in front as well. So if we wanted to make our setup more observable, the way you think about observability as we've discussed so far, what should our first three steps be?

**Charity Majors:** \[24:04\] What language are you using?

**Gerhard Lazu:** What language? It's Elixir.

**Charity Majors:** Yeah, you should install the Honeycomb OpenTelemetry instrumentation into your application, and then that'll give you out of the box -- it automatically wraps HTTP and database calls and all this stuff... And then you might want to, at some point, go in and add some amount of tracing.

**Gerhard Lazu:** So the tracing is like the custom stuff, where we care about specific calls being made, how long they take, stuff like that.

**Charity Majors:** Yes. Which is optional, but it's really handy when you're trying to figure out where your time is going, or concurrency problems, or stuff like that.

**Gerhard Lazu:** Okay. So that was just like one step - install it, and that's it. I like that. That sounds really good. That's super-simple. Very interesting. And how would we visualize the data? So our app starts emitting those events... What happens next?

**Charity Majors:** You go to Honeycomb.io, and your landing page will be familiar to you if you've used APM tools before. It will have errors, and latency, and request rate etc. But you can start playing around with it. If you're trying to diagnose the problem, or if you're -- one of my favorite things about Honeycomb that we've done is BubbleUp, which is this cool thing where if you see a graph and there's a spike or something and you're like "Ahh, this is bad. I wanna know more about this", you can just draw a little bubble around that spike, and then we will pre-compute for all the dimensions, outside and inside of the bubble, and diff them, sort them, and we'll tell you exactly what is different about the thing that you said you cared about, whether that's one thing or five things.

So you might go "Ah, I care about this", and we'll go "Oh, these errors could be maybe the export endpoint, all from this region of Amazon, all for this particular user ID, all for this particular language pack", and it's really clear, you just immediately see "Ah, this is what's different about the thing that I care about."

**Gerhard Lazu:** So let's say that we have certain requests which sometimes are really, really slow. Could Honeycomb help us identify why they're slow?

**Charity Majors:** Hell yeah.

**Gerhard Lazu:** Okay, okay... I'll try that. And if it doesn't work, who should I talk to?

**Charity Majors:** \[laughs\]

**Gerhard Lazu:** You?

**Charity Majors:** There's a great little Intercom pop-up in the app that will take you to our support team, and they're wonderful.

**Gerhard Lazu:** Amazing. That's exactly what I intend to do next.

**Charity Majors:** Excellent.

**Gerhard Lazu:** Okay. And behind the scenes, where are all those events going?

**Charity Majors:** Well, they've come to the Honeycomb API, which is pretty thin little shim that does some rate limiting etc. and then drops them into Kafka. And Kafka queue is consumed by a pair of retrievers; that's our custom -- you know, I've spent my entire career telling people "Never write a database!" and I'd like to be very clear that we have not written a database, we've written a storage engine... It's completely different.

**Gerhard Lazu:** Okay... What's the difference?

**Charity Majors:** Not much. \[laughs\]

**Gerhard Lazu:** Right, okay...

**Charity Majors:** It's a \[unintelligible 00:27:04.12\] store so it gets consumed by a pair of retriever nodes, and pretty swiftly it also gets aged out to S3. Then when you're issuing requests via the Honeycomb UI, the queries are actually run by Lambda jobs, which will then fan out to a full table scan. So we merge the data and return it to you in the browser.

**Gerhard Lazu:** That's interesting. So I hear S3, I hear Lambda... The API - you're not using API Gateway or anything like that from Amazon?

**Charity Majors:** API Gateway?

**Gerhard Lazu:** Whatever the name of the service is; they have a service which basically provides API functionality for your Lambdas, so you can hook up Lambdas to APIs...

**Charity Majors:** No.

**Gerhard Lazu:** No? You're not using that. And do you know why? I'm curious, genuinely.

**Charity Majors:** I'm not sure, actually.

**Gerhard Lazu:** And then why Kafka? I have to ask that. For other reasons.

**Charity Majors:** \[27:54\] Since we are writing our own storage engine, it gives us like 18 hours' worth of backup. You know, if we need to replay some events, or if anything happened... It's also how we bootstrap and bring up new nodes...

**Gerhard Lazu:** Why not Kinesis?

**Charity Majors:** At the time, I was the one who made that decision; this was like five years ago... And there were some constraints Kinesis had that I think had to do with the events and some of the data types that we needed, that it just wouldn't support; it wasn't flexible enough.

**Gerhard Lazu:** Okay, so it's a Kinesis limitation that was there in the past, and it doesn't matter whether it's there now... Obviously, you have Kafka, it's running well, I'm assuming...

**Charity Majors:** Honestly, ideologically, while I do believe in outsourcing, making it someone else's problem whenever possible, given that Kafka is basically functioning as part of our database which is a very integral part to Honeycomb; it is one of things that I think is better for us to have in-house expertise and run ourselves.

**Gerhard Lazu:** Okay. So that answers my next question, which is if it's a managed service or if it's something that you install, you manage, you update...

**Charity Majors:** Yeah, we install and manage and update.

**Gerhard Lazu:** How is that experience, I'm wondering?

**Charity Majors:** Kafka?

**Gerhard Lazu:** Yeah. Some people say that managing Kafka, like installing Kafka clusters used to be difficult. With Zookeeper I think that is going away these days... I don't know.

**Charity Majors:** You know, not many startups have an ops co-founder... \[laughs\] And we were fortunate enough to have me. So that stuff is not that hard if it's your bread and butter.

**Gerhard Lazu:** Right, okay. And then it's S3 behind the scenes, it's Lambda... So I'm assuming that when the Honeycomb UI is displaying those charts from all those events, you're actually consuming those events from S3, is that right? To draw the --

**Charity Majors:** For the first few hours... It depends. It's dynamic based on your write throughput etc. But it gets written out to SSDs first, and then it gets aged from there into S3. So yeah, it's reading from some combination of the local SSDs and S3.

It was interesting - when we moved from using SSDs for everything to age things out to S3, we really thought there would be a severe performance hit... It turns out no. The performance characteristics are different, but -- and speed is incredibly important to us, because we really want people to be in the zone, just try this and this, add this question and tweak it, and tweak it... So for our 95th percentile we target one second for those queries.

**Gerhard Lazu:** Right. Okay.

**Charity Majors:** Quite fast.

**Gerhard Lazu:** Yeah, that sound fast. I mean, we were mentioning 15 minutes before, and now you're telling me one second... So yes, it is very fast, if you have that reference point... Okay. And I'm assuming that Honeycomb uses Honeycomb to understand Honeycomb. Is that right?

**Charity Majors:** Definitely. \[laughs\] We have office dogs... Honeycomb was actually first named Bloodhound, and then we shortened it to hound.sh, and then we got a cease and desist from Hound CI... So now we're named Honeycomb. But Retriever is the name of our database, and Poodle is the name of our frontend, and dog names for everything. We have a dogfood cluster; that is how we monitor everything that Honeycomb does with Honeycomb. And then we have a kibble cluster that monitors the dogfood cluster.

**Gerhard Lazu:** And what monitors the kibble cluster?

**Charity Majors:** Nothing. \[laughter\]

**Gerhard Lazu:** You do, right? Are you working alright?" "Yes" is the answer. Okay.

**Charity Majors:** \[laughs\] Yeah.

**Gerhard Lazu:** Right. So does the dogfood cluster run a different version of Honeycomb?

**Charity Majors:** Well, it's interesting you bring this up. We are deployed from cron, like every ten minutes. And it first deploys to kibble, and then it waits some amount of time, and if everything is okay, then it promotes to dogfood, then it waits and then it eventually promotes to production. And all that happens automatically. So it runs a different version for some amount of time until catch-up.

**Gerhard Lazu:** So how long does it take for that to make it to production?

**Charity Majors:** About an hour, three tops.

**Gerhard Lazu:** So that means you don't deploy to production first. You go to kibble first, and then dogfood, and then production.

**Charity Majors:** We consider that production.

**Gerhard Lazu:** Right, okay. That's what will become production once everything is okay on kibble.

**Charity Majors:** Yeah.

**Gerhard Lazu:** \[32:07\] Okay. And how long do you keep things on kibble before promoting to dogfood?

**Charity Majors:** It's about an hour. It's about an hour from kibble to dogfood, and an hour from dogfood to production.

**Gerhard Lazu:** Did you find that helping? Did you find it helping having kibble and then dogfood before production?

**Charity Majors:** Oh, yeah. Absolutely.

**Gerhard Lazu:** So everybody makes mistakes, even the best ops people in the world. Is that what you're telling me?

**Charity Majors:** Absolutely. \[laughs\]

**Gerhard Lazu:** Good. I think that makes a lot of sense. People think some ops people are demi-gods...

**Charity Majors:** No...! No.

**Gerhard Lazu:** Everybody makes mistakes, but we fix them so quickly you don't even know. And we don't let them -- I think this is propagated everywhere. We trust the system, and the system has all these gates built-in.

**Charity Majors:** We never trust \[unintelligible 00:32:51.09\]

**Gerhard Lazu:** Right. Or engineers.

**Charity Majors:** Or engineers. No. Why would we do a thing like that? \[laughs\]

**Gerhard Lazu:** So I think this brings us to the software development being a socio-technical problem. People are fallible, they will make mistakes, and a lot of the time it is about those mistakes, which - think of them like learning opportunities. And if you think of them like that, then you optimize for learning; 15 minutes is important. You have those guardrails in place, so that things like failures don't cascade... I think that's a better word for it. So you know, you have circuit-breakers, and all those fancy things. All it means is errors don't run havoc in your setup.

**Charity Majors:** Yeah.

**Gerhard Lazu:** And what else would you say about this? Because I know it's a term which is very dear to you.

**Charity Majors:** Yeah. Well, I think that people have this image of like "Oh, you hire a Google engineer and suddenly your team will get better", or something. No, I think that it's pretty clear that any engineer who joins a team, within 36 months or so, will be shipping and performing at the level that that team performs, whether that's up or down. The power of the group, the environment that you're in is far more powerful than your own personal knowledge of data structures and algorithms. And we have this weird magical belief in the power of individuals, but we should spend way more time just paying attention to the environment in which we all write and build and ship our code, because the way that people are doing it now is the hard way. You shouldn't have to be a great engineer to write code and get it out quickly. We should build systems that make it easy for engineers to get their code out quickly. I just think we act like great engineers make great teams, when it's exactly the opposite, in fact. It is great teams that make great engineers.

**Break**: \[34:56\]

**Gerhard Lazu:** I think we're touching on something very, very important. You keep mentioning systems, you keep mentioning teams... Now, a system means teams. It doesn't mean a technical system. It means how everything works. And a system can even mean a company. They're never closed systems, by the way; there are always all sorts of forces, and it changes all the time. Sometimes very fast, or some people think like that; others think it's very slow. But it is a system, all of it. And I'm wondering, what does a high-performing team look like in such a system, or a high-performing system. What does it look like, from your perspective?

**Charity Majors:** A high-performing team is one that gets to spend most of their time and energy and focus solving new, hard problems that move the business forward, not trudging in salt mines of engineering, just trying to find bugs and reproduce bugs, and firefight.

A high-performing team is one that ships often. It doesn't find it remarkable to ship. A high-performing team is one that can take a lot of stuff for granted, because there's a real structure, socio-technical structure around them that the CI/CD is well tended to. There are internal/external SLO's, people's time is taken seriously and respect as the incredibly valuable resource that it is, not frittered away and wasted.

**Gerhard Lazu:** So if a team would like to become high-performing, but let's say they're fighting their CI/CD pipeline, what would you recommend they do?

**Charity Majors:** Well, a team or an individual? I feel like you can only really make decisions as an individual. And while I do believe in pitching in and trying to make the system better, there are also a lot of places where there are too many entrenched forces that are against change... And I really think that people should be more willing to leave their jobs and go find a high-performing team to join. Go find that high-performing team that will make you a great engineer. You only get one job, you only have one career. Your career is the most powerful, it's a multi-million-dollar appreciating asset. You have an obligation to yourself to curate for the long haul.

Join great teams where you don't have to fight to make change, to make progress, where you can learn a lot from other great people. I've seen too many amazing engineers stick it out year after year at jobs that didn't appreciate them, where they weren't allowed to make the changes that they knew needed to be made. There are other places that will welcome your creativity and will care about your sleep schedule... And if you don't feel respected, you probably aren't. Go somewhere else. It is a buyer's market. This is probably the one role that is easiest to find a new job in the entire world, and it won't last forever, so take advantage of it.

**Gerhard Lazu:** \[40:17\] So you make a high-performing team by joining a high-performing team, and then you become--

**Charity Majors:** It's the easiest way.

**Gerhard Lazu:** That's the easiest way, okay. And what about the hard way? What about someone that says "No, I have decided that I want to make my team high-performing, and I will stick with them for as long as it takes"?

**Charity Majors:** Do you have support? Do you have the support of your higher-ups? Do you have the support of your team? Because you can't do it on your own. This is a team effort, so you need to look -- and here's where I feel like engineering managers have a lot to answer for the state of things today... Because engineering managers are the ones who are in the position where they should be able to translate between the business and the engineers. They should be able to not just take orders about what to spend engineering time on, but push back. Make the case that just doing product, product, product, feature, feature, feature, feature, feature - it's a really short-sighted approach. It's not good for the team, it's not good for the engineers, it's not good for anyone, even though it looks like you're super-hella-busy. Like, push back. Make the case. Learn to translate from engineering words into dollars and cents.

I feel like there's a lot of passivity on the part of a lot of engineering leadership, when -- who's gonna do it if not you?

**Gerhard Lazu:** What would you say about product people that -- I don't wanna use the word "boss", but let's say tell engineers what to do, and sometimes the engineers think "You know what - this doesn't feel right"? What would you recommend in that situation?

**Charity Majors:** I don't think that that's a healthy situation. Product people should never be telling engineers what to do. It should be a triad. You've got product, design, engineering. You are all equals. All your voices matter. You're experts in your own domain. The idea of a product person telling an engineer what to do in terms of engineering labor is ludicrous. You wouldn't tell them how to run their user surveys... So - like so much, this comes down to respect, and it comes down to a healthy culture, and you should push back gently, push back more firmly... And in the end, if you aren't listened to, leave.

**Gerhard Lazu:** What does a healthy product engineering relationship look like?

**Charity Majors:** It looks like a triad, it looks like a partnership. Nobody's trying to make anyone do anything; you're all aligned on wanting to move the business forward and wanting to do a good job. I'm not saying it's easy... But unhealthy power dynamics should be pretty easy to sniff out, and that's never okay.

**Gerhard Lazu:** We've been discussing with Ian Miell in a previous episode about the power of money, and especially money flows... And he makes a really good case where he says "You should really follow the money flows, because they will dictate what is important and what should happen."

**Charity Majors:** Yes.

**Gerhard Lazu:** How, in your opinion, does the money flow or money come into play when it comes to product and engineering? Because there must be a relationship. What does a healthy relationship look like?

**Charity Majors:** Well, the naive, the simplistic answer that we often see is just to focus on "Features, features, features", because there's a straight line from feature to money. Or there should be. It's a more elliptical line from tech debt to money, or from observability to money, or from--

**Gerhard Lazu:** Happiness.

**Charity Majors:** Happiness, right. There are a lot of things that are more elliptical, but they're no less real. It's just a question of short-term investment versus long-term investment, and you can't just play the short-term game all day, all week, all month, all year, or you'll lose people, you'll lose happiness... It shows just in people's weary faces.

**Gerhard Lazu:** \[44:14\] So how would you measure what is important on a team? Money is not it, right? That's a short-term goal which has many negatives associated with it. It's important, of course, but it shouldn't be the sole driver.

**Charity Majors:** No. It depends, to some extent... Here's one thing. I think every manager should be -- so I do think every engineer who builds a 24/7 highly-available service should be on call for their work. I also think that getting woken up two or three times a year for your service is reasonable. I think more than that veers close to abusive. And I think it's an engineering manager's job to track this, to make sure that it doesn't get out of hand, to take assertive, active measures when it starts to get really noisy, to carve out time for it. Because sleep - sleep is an important thing, which leads to retention of engineers, which leads to job satisfaction, and all other intangibles... But that's one pretty solid thing that I can put my finger on. People's ability to spend their time focusing and not being interrupt driven, not being woken up, not being firefighting all the time.

Every engineering team has two constituents. There's your customers and there's your engineers. Neither one is more important than the other.

**Gerhard Lazu:** That is really powerful. So how do you measure the happiness, or -- I think "measure" is maybe the wrong word. How do you determine how happy and healthy your engineers at Honeycomb are?

**Charity Majors:** Well, you can start by asking them, and by doing anonymous surveys now and then. Good engineering managers have their finger on the pulse of their teams, and they should be sensitive to things. Is a team getting burned out? Are the demands unreasonable? Does the team need different composite -- do we need some more senior folks to be doing mentorship? Do we need more challenging -- the care and feeding of engineering teams should be the job of a good engineering manager, and they should be able to tell you quite a lot right there.

You can also look at top-level metrics like attrition... But honestly, I'm a big fan of just asking people and building up a trust relationship, so that people know they aren't gonna be punished for saying something.

**Gerhard Lazu:** Would you ask them regularly? Would you let them come to you? What works best?

**Charity Majors:** Both. All. All of the above. And also, I like asking engineers about each other too, like "How is so-and-so doing? Do you feel like so-and-so is getting stressed or burned out?" Because a team of people tends to care deeply for each other, and they're often a lot more sensitive to each other's burnout etc. than they would be for their own. So you can ask them about each other, too.

**Gerhard Lazu:** \[47:03\] I really like the way you think about the human element. I really like the way you see us, the engineers, as people, at the end of the day. They're not machines; they have to talk to machines, but it doesn't make them one.

**Charity Majors:** Engineers are not fungible. You asked about the socio-technical systems, and like -- there's a thought experiment that I use sometimes... Imagine the New York Times; you've got a socio-technical system, it's comprised of people, the tools, the systems etc. If you took all the people away and replaced them with equally-powerful engineers, equally-experienced etc. and you send all of your New York Times engineers off to the Bahamas... How long would it take them to figure out how to fix even a small problem? So much of the system lives in your head, right?

**Gerhard Lazu:** Context, yes.

**Charity Majors:** Starting with how you really log in. It would take a really long time. The majority of the system lives in the heads of the people who work on it, so you can't take them for granted, you can't just replace them.

**Gerhard Lazu:** Not cogs. Not machines. They're not pets, they're not cattle... They're people.

**Charity Majors:** None of the above.

**Gerhard Lazu:** So as a listener, if I had to remember one thing from this conversation, what do you think that should be?

**Charity Majors:** If you're frustrated about the performance of your engineering team, take a long, hard look at your CI/CD pipeline. 15 minutes or bust. And observability, of course. Go use the Honeycomb free tier.

**Gerhard Lazu:** That's a good one. What I would say is be curious in production, because that's where all the interesting stuff happens.

**Charity Majors:** I like that a lot.

**Gerhard Lazu:** I would use another word instead of "stuff", but you know what I mean.

**Charity Majors:** \[laughs\]

**Gerhard Lazu:** Lastly, I would like to talk about a book which - there's an early release, raw and unedited, that you can get for free. Observability Engineering. I think the tagline is even better: "Achieving production excellence." I think that's super-powerful.

So we'll add a link to the show notes. You can go and download it for free, by the way. I think you will need to share your address with the happy and friendly people from Honeycomb... But otherwise, I've been reading it, skimming it shall I say; I haven't read all of it, but the index looks really good. The first question is "What is observability?" So we couldn't cover it all, but if you wanna really know what observability is, you can go and check it out for free. I highly recommend that.

**Charity Majors:** Thank you.

**Gerhard Lazu:** The book, I know, will be available in its final version - and by the way, it's published by O'Reilly - in January 2022.

**Charity Majors:** Sounds great.

**Gerhard Lazu:** So what I'm wondering is when that happens, even if it's not January, would you like us to talk again, Charity?

**Charity Majors:** That'd be great.

**Gerhard Lazu:** I'm looking forward to that. Thank you.

**Charity Majors:** Awesome. Thank you.
