**Gerhard Lazu:** The last time that we spoke, Tom, was at KubeCon 2019 North America. That was actually my first KubeCon, in San Diego, and it was an amazing one. I loved it. This was actually Changelog \#375, and again, it was one of my favorites. That was almost two years ago. I know that a lot of things have changed. First of all, Grafana was at version 6 back then. Now it's at version 8, which is a massive improvement from version 7, which was a massive improvement from version 6. What other things changed in the last (almost) two years since we spoke?

**Tom Wilkie:** Oh wow, yeah. I mean, two years... How do we cover two years in five minutes? I think working backwards, we've launched Tempo, the tracing system from Grafana Labs, which is kind of cool... A slightly different take on distributed tracing, focusing on very efficient storage of the traces itself, and very scalable.

We've done Loki 2.0... Our log aggregation system is over two years old now, and with Loki 2.0 came a much more sophisticated query language. That's really cool, because now you can start to use Loki in anger and really kind of extract metrics and really dig into your logs with it. That was a really exciting design process for the language as well, because we always wanted it to be really heavily inspired by Prometheus, but it's logs in the end; it's different to time series.

\[00:04:10.29\] We actually collaborated with Frederick from the Prometheus team, and he really influenced the design. I remember one of the calls... We came up with one of the things that I think makes LogQL really cool, which is you've got the pipeline operator for filtering logs. So you use pipelines to filter your logs, and we kind of stuck with that for everything in the logs space. And then the minute you start working with metrics, you start using brackets, and it looks like PromQL, like Prometheus query language. And it just means you look at a query and it's really obvious that that part of the query deals with logs, and that part of the query deals with metrics.

Working backwards more, exemplars in Prometheus and in Grafana, so you can link from metrics to traces... You know, you put little dots on the graphs, and the dots indicate a trace, and you can click on it, and that whole kind of experience works.

And you bring up KubeCon 2019. I think that was the year Frederick and I gave a keynote address on the future of observability. And in that keynote we predicted that linking metrics and logs and traces and correlating and building experiences that combine them would be the future. Now, of course, \[unintelligible 00:05:14.23\] tongue-in-cheek, because I have the great opportunity and I'm very lucky to be able to influence what we do at Grafana Labs... We've kind of spent the last two years making that keynote happen, and making it possible to combine those metrics and logs and traces in a single development experience, in a single, on-call, kind of instant response.

I can go on... There's so many things that have changed. We've grown hugely at Grafana Labs, where we're now over 400 people. I joined when we were about 25-26 people, 3,5 years ago... So we launched GEM (Grafana Enterprise Metrics), which is our kind of self-managed enterprise version of Cortex, the scalable of Prometheus, the other CNCF project.

Yeah, there's so many... And I'm still only talking about kind of the second half of last year... And I guess, when you ask that question, everyone always responds with "pandemic" as well. I kind of glossed over that, but... We had a global pandemic.

**Gerhard Lazu:** Yeah.

**Tom Wilkie:** I think what was really interesting - obviously, it has a huge impact, but Grafana Labs was set up from day zero to be remote-first... So I think we've been super-lucky that the impact has been less than it has been on other organizations. I could go in twenty more of those, but I'll stop there.

**Gerhard Lazu:** Yeah, I remember The Future of Observability keynote that you gave... That was a really good one, an inspirational one, and I could see it. I could see it as the vision that you shared. And I remember thinking "Wow, if they pull it off, this is going to be amazing." And guess what - you did. And even more so.

**Tom Wilkie:** I can't take all the credit. I did the keynote with Frederick.

**Gerhard Lazu:** No, I know. When I say "you", I mean Grafana Labs, the whole org that you're part of, the whole team that you're part of. But you were there, you had this vision, you shared it... I'm sure everybody contributed to it, and then everybody made it happen. And I really love that journey, seeing how things have been happening with Loki. I remember when Loki version one came out, and I thought "Wow, this makes so much sense." I was so keen to start using it. And we did. Even for Changelog. We used Grafana for a long time. Prometheus... Then we went to Loki, and that was great. And then we thought "Hm... If only we could delegate this problem to someone else." And guess what - Grafana Cloud came along, the hosted/managed service, you had some very generous tiers... Once that changed, everything changed. So all of a sudden we no longer had to run our own Grafana and Prometheus. Not that it was difficult, but it's much easier to just run the Grafana Agent - that's all you need - send everything to Grafana Cloud, and it just works.

\[00:07:54.10\] And with the last changes of the alerts - I think that was the weak point of Grafana for a long, long time. And I saw that as well. So there were all these things just falling into place naturally, and being able to know what's coming and seeing it happening every six months, there's like more, and more, and more. It's like, we know what to expect, you're delivering... "Please carry on", that's what I'm thinking.

**Tom Wilkie:** Thank you very much, yeah. You know, I miss so much \[unintelligible 00:08:20.06\] because unified alerting is a huge step in the Grafana story. I'm really pleased as the way the company came together. We used to have two alerting systems - we had the Grafana alerting system and the Prometheus alerting system. And they were worlds apart. On one hand, the Grafana alerting system is probably the easiest one that exists out there; it's very accessible, very easy to get started with... And on the other hand, the Prometheus system is probably one of the most sophisticated and powerful ones.

So I think it was really exciting how the team could combine the power of the Prometheus system, with multi-dimensional alerts, with alert managers routing, grouping and deduping and silencing... And bundle all these features into Grafana in a way that makes them easy to use and gives you that level of user experience that people have come to expect. And best of all, we haven't duplicated any features. We're just using alert manager under the hood. We're using the same API as Prometheus under the hood. So it's true to our open source roots as well, and that's -- the team did a fantastic job with unified alerting.

I think the thing you said about cloud, the generous free tier, for instance - we launched that in January, I think...

**Gerhard Lazu:** That's right.

**Tom Wilkie:** We've always had a kind of free tier; we've always allowed you to have a free Grafana instance, for instance. The work that goes into actually being able to offer a free tier - there's so much going on behind the scenes, just at a very architectural level.

The point I'd always make here is that you need the marginal cost of a new Prometheus instance, or of a new Loki instance, or of a new Tempo instance - you need it to be effectively zero. You can't offer a free tier unless the cost of the thing you're offering is as close to zero as possible.

So this means behind the scenes we can't be spinning up a new Prometheus port or a new Loki port, or a new Grafana port, or a new Tempo port for every customer that signs up. That would get too expensive for us to offer. We're not that big a company yet. So fundamentally, the architecture of all of these systems has to be multi-tenant, and we've built -- this is where Cortex comes in. We've built this horizontally-scalable, multi-tenant version of Prometheus, which means provisioning any new instance in that multi-tenant cluster is basically free. It doesn't really cost us -- I mean, once you start sending metrics there are some costs incurred, but because it's multi-tenanted, we can start to take advantage of statistical multiplexing techniques, and really drive down the cost of offering that service... Which allows us to make the free tier so generous.

And that architecture has been replicated in Loki... Well, not replicated; it uses the same code, it uses the same module system, the same \[unintelligible 00:10:54.19\] the same architecture and the same techniques in Loki and in tempo. And that consistency across the offerings just also carries over to the kind of operational and cognitive burden of running this... Because it's the same. Because you scale it in the same way, and you do instant response the same way. So yeah, it's incredibly exciting to finally feel like you're in the last mile of delivering on a vision that's been in progress for five or six years.

**Gerhard Lazu:** Everything you said makes a lot of sense to me, but I know that many people will be confused, because you are a VP of product. How on Earth does a VP of product know so many things about code and how things actually work? And I know that you're one of the Cortex co-authors. You've started Cortex... I don't know who the other author is.

**Tom Wilkie:** It was Julius, actually. The chap who was one of the original founders of the Prometheus project.

**Gerhard Lazu:** Julius Volz?

**Tom Wilkie:** Julius Volz.

**Gerhard Lazu:** Right, okay. So you and Julius - you started Cortex, which went to grow, and I think it's part of a very important component of Grafana Cloud as an engine, an inspiration for Loki, which I think you also had something to do with, right?

**Tom Wilkie:** Yeah.

**Gerhard Lazu:** \[00:12:08.04\] ...when you started the codebase. So how does that work? How can you be VP of product and code Go at a very advanced level? How does it work?

**Tom Wilkie:** Titles in the abstract are pretty meaningless, right? So - yes, my title is VP of product, and I do have a lot of product management responsibilities in the company... But my background is a software engineer. I've been a software engineer now for 15-16 years, I've always worked on open source codebases... Straight out of university I was kind of tangentially involved in the Xen hypervisor project. So I worked a little bit on the control tools there.

I started a company that got involved in the Cassandra distributed database, and then worked on Prometheus and Cortex. I've just always been a software engineer. I took a brief stint doing some engineering management at Google, some site reliability engineering, where I learned a lot about the whole monitoring side of things. But yeah, at the end of the day I've always been a software engineer. I've always been passionate about this kind of thing.

I don't get to do as much software engineering now as it perhaps seems... I have a large team of software engineers who do that and really should take a lot more of the credit than perhaps I do... But you know, I did a few PRs yesterday; that was mostly on some kind of continuous deployment for some internal SLO dashboards... You know, I still try and write a bit of code.

We had a hackathon recently internally, where everyone in the company took a week to code on whatever their imagination had been noodling over for the past few months... And I took part. That was pretty cool. I managed to get a couple of days of solid coding in. I'm not gonna tell you what the project was though, because that might become a future product, who knows...?

**Gerhard Lazu:** Interesting. I was just going to ask that, if any of those projects are public, but I'm sure the good ones will be, right?

**Tom Wilkie:** No, some of them are. Bjorn and Dieter and Ganesh were working on -- one of their hackathon projects was high-definition histograms in Prometheus... And Ganesh has already tweeted about that, and will be putting out more information. The code is out there in public.

**Gerhard Lazu:** I've seen that.

**Tom Wilkie:** There's a few of them that are public, and a lot of them are gonna form future projects, and potentially even future products. I can give you a bit of a hint what the project I was working on was. Not a lot of people know, at Grafana Labs - actually, its first time-series database that it built for Grafana Cloud is called Metrictank. Metrictank is a Graphite-oriented, still written in Go, still using a lot of the same techniques from modern time-series databases, like the Gorilla encoding and so on... But mainly focused on building that kind of scalable, multi-tenant cloud version of Graphite. And that's what kind of bootstrapped Grafana Cloud before I joined the company.

And then I joined and brought Cortex in with me, and since then, of course, the architecture has now kind of moved towards a Cortex-style architecture. The Metrictank team within Grafana Labs, for the past year or so, have actually been working on putting a Graphite query engine on top of Cortex. And we've actually -- I think the launch of that... You know, it'll be a seamless launch; customers shouldn't notice they're being moved off of Metric Tank and onto Graphite v5. That's actually happening very soon, and that's kind of -- to give you a bit of a hint on the direction we're going, now Grafana Enterprise Metrics and Grafana Cloud is a single time-series database that you can query through multiple different query languages.

**Gerhard Lazu:** That's fascinating. And now you reminded me the link between Acunu Analytics, the company that you were a part of at some point, and the startup that I was working for at the time, which was GoSquared, which was real-time visitor analytics. At GoSquared we were using MongoDB heavily, and we were starting to look into Cassandra. There was a Cassandra conference, and I \[unintelligible 00:15:48.26\] presenting the analytics side of things... And at the time, I was heavily invested in Graphite, Ganglia was there as well...

**Tom Wilkie:** \[00:15:58.12\] Yeah.

**Gerhard Lazu:** ...and I thought "Wow, this Graphite--" And scaling - those were fun days, challenging days. And I looked at Acunu and I thought "Wow, this is interesting. They're using Cassandra for the metrics and it works really well..." I remember even the demo that you gave -- I forget the conference name; this was 2012, 2013...

**Tom Wilkie:** Yeah, I don't remember back then.

**Gerhard Lazu:** ...a long time ago. Something like that, yes. So Graphite was a great system, but it didn't really scale. It was very problematic. And then Grafana came along, but Grafana on top of Prometheus. So Prometheus had something to do with it. But Prometheus in its incipient phase was a single process, a single instance. How do you scale that? Well, it's not as easy. And Cortex, as far as I know, scales the way anyone would expect. You can shard those metrics, you can replicate them, we have different back-ends for them... That was really, really nice.

So I can see history in a way repeating itself with the Prometheus and Graphite, and now I can see the link, where it's actually part of Cortex, or it will be part of Cortex. That's really fascinating.

**Tom Wilkie:** Well, it's interesting you mention that, because one of the things Acunu did, one of its contributions to the Cassandra project was a technique called virtual nodes, which is where in the earlier versions of Cassandra each node basically owned a single range in its distributed hash rate...

**Gerhard Lazu:** I remember that.

**Tom Wilkie:** The technique that Acunu added, and it's been in Cassandra for ages now, was the ability for a node to own multiple ranges. And the whole principle there being once you can own multiple ranges - like hundreds - you then just pick them and random and you achieve a very good statistical load balancing. What's maybe particularly interesting - it's exactly the same techniques in Cortex, in Loki, in Tempo... And that's the ring I was referring to earlier; it's basically just an almost identical copy, just in Go, of the Cassandra has ring.

**Gerhard Lazu:** This makes me think of the old GoSquared team, because I remember Cassandra and how they were so excited about this... And this was mentioned like "Wow, this is amazing. Like, MongoDB? I think rather Cassandra." I remember that. And it wasn't even like version one at the time. I know that Netflix were big on it as well, and Adrian Cockcroft had a great talk about it; in that context AWS Cloud came in... So many threads connecting in my head right now. Wow... Okay.

So let's take a step back from all these -- I won't say rabbit holes, but reminiscing specific things, which are a thing of the past, and let's come back into the present with a question which I know very many people are... I'm not sure whether struggling with, but they are, you know -- there are two sides to them. What is observability? Some say that it is not the three pillars, which is metrics, logs and traces. Some say that's not what observability is. What do you think? What is observability to you, Tom?

**Tom Wilkie:** I mean, it's definitely a bit of an industry buzzword right now. The three pillars definition is not that useful of a definition. It doesn't really describe what you're trying to do, or what the problem you're trying to solve. It more describes maybe how you're solving some other problem. So whilst I don't necessarily think it's wrong... Like, in a lot of places and a lot of situations observability does revolve around metrics and logs and traces. It's not an answer to the question "What is observability?"

I've always really liked the definition of "Observability is the name for the movement that is helping engineers understand the behavior of their applications and their infrastructure. It's about any tool, any source of data, any technique that helps you understand how a large and complicated distributed system is behaving, and how you should analyze that. That's really my preference. I don't necessarily think I speak for many people though when I say that.

**Gerhard Lazu:** I've been thinking about this for a couple of years... I had a couple of interesting discussions. Even the episode before this, that's a really interesting one; if this is the first one that you're listening to, check that out, see how the two compare for you... But I also agree that being curious about how things behavior - I think that's like the first requirement for observability. Are you curious, do you care? And if you care - great. So what are we going to do to understand your production, or your system? It doesn't have to be production, but it typically is, because that's where the most interesting things happen... So how do you do that? How do you take all those metrics, logs and traces - or events, whatever you call them; it doesn't really matter - to understand how the system behaves?

**Tom Wilkie:** \[00:20:27.17\] It's an interesting kind of way of phrasing it, because what I think we really internalize at Grafana Labs is kind of avoiding a one-size-fits-all solution. So I know there are some incredibly powerful solutions out there that are incredibly flexible, but at the end of the day we internally call it this kind of big tent philosophy, where we try and embrace multiple different solutions and multiple different combinations of solutions, and really kind of focus on helping users get the best out of a wide variety of techniques... Because really, you go into any sufficiently large organization - it doesn't even have to be thousands of people, even just hundreds of people - and there's going to be one team over there that uses one monitoring solution, and a team over there that uses a different logging solution, and they're all gonna be stuck in their little silos, and they're all gonna have their own tools to use to analyze their data... And really, what we're trying to do at Grafana is bring them all together into a single place, and give them all the same experience.

The way I've always thought about it is when you get paged in the middle of the night, I don't want a system to tell me necessarily what's wrong, because the reality is if a system could tell me what's wrong, it'll probably be able to fix it for me, and I probably should have thought of it ahead of time, and it probably should never have paged me. I only really ever wanna get paged for things that I wasn't expecting, and therefore I wanna engage that kind of creative part of my brain, and I wanna come up with hypotheses as to why it's broken. And then I want tools that help me test those hypotheses and develop new hypotheses.

So really, I'm not looking for a tool that claims to automate root cause analysis, or tell me exactly what's broken... Because if it can do that, it probably shouldn't have broken in that particular way.

I'm looking for a tool that helps me test theories that I've got. "Oh, is it broken because of this? Oh, I can correlate some metrics and some logs, and I can see if that's the case." Is it broken because there's a tiny little service running on a computer onto someone's desk that's gone down? Oh, I can go and look at a distributed trace and it'll tell me if that's the case. I want a tool that helps me access data and test hypotheses. And the nice thing about that as a guiding principle is it doesn't say "Well, the best way of doing that is with logs." It doesn't say "The best of doing that is with events." And it doesn't say "The best way of doing it is with metrics." It says "The best way of doing it is situational, and depends on the problem, and it depends on the tools you've got available.

**Gerhard Lazu:** That's great.

**Break**: \[00:22:52.00\]

**Gerhard Lazu:** I really liked your last answer, and I think now is a great time to start looking at the Grafana ecosystem, the Grafana Labs, Cloud... Just because Grafana means many things. How would you solve specific problems with the tools that you have available in Grafana? So let's take a specific example... Let's imagine that every now and then my website - some of the requests are slow. What would I do to understand why certain requests are slow?

Let's imagine this is a monolithic application, Changelog.com. I'm winking righ now... It's a Phoenix app... So what would I do?

**Tom Wilkie:** Actually, I don't know what Phoenix is.

**Gerhard Lazu:** It's a framework similar to Ruby on Rails, but it's based in Elixir, which - the syntax is similar to Ruby, but it's really running on the Erlang VM.

**Tom Wilkie:** Wow.

**Gerhard Lazu:** So it's like Ruby on Rails.

**Tom Wilkie:** Is that a particularly large user base? It seems very -- I've not heard of that before. Cool.

**Gerhard Lazu:** Right. So not necessarily... I mean, depending on what you mean by large, but it scales really well, because it's the Erlang VM.

**Tom Wilkie:** Because it's Erlang, yeah.

**Gerhard Lazu:** Everything is message passing, you can have clusters natively, \[unintelligible 00:25:05.11\] you start sending messages... I think one of the more popular apps that uses Erlang is WhatsApp, that everybody knows, everybody uses... And RabbitMQ is another messaging queue that also uses the same Erlang VM... And I think the last one is Riak, the database -- I think it still exists. It was by Basho.

**Tom Wilkie:** By Basho.

**Gerhard Lazu:** And I remember it was like in the same quadrant, right? Acunu Analytics was there...

**Tom Wilkie:** \[unintelligible 00:25:32.21\] I think he was their managing director for the EU team, and he was at Acunu a long time ago, yeah.

**Gerhard Lazu:** There you go, so it's a small world, isn't it?

**Tom Wilkie:** I think he's now at one of the cryptocurrency companies, but yeah. Unrelated...

**Gerhard Lazu:** So coming back to this Phoenix app - the reason I mentioned that it's a monolithic app, it's important because it's not microservices. You don't have HTTP calls, or gRPC's, there's no such thing. It's a single app, it's a monolithic app, it talks to a database, it has an Ingress NGINX in front, there's a load balancer, and then in front of that you have a CDN.

So the request comes -- and this is very specific, and maybe this will help... The request goes through a CDN, Fastly, it hits a load balancer, which is a managed one, like your ELB, whatever the equivalent of that...

**Tom Wilkie:** Yeah.

**Gerhard Lazu:** Then it goes to Ingress NGINX, and then from Ingress NGINX it gets proxied to the right service pod... You know, I don't have to start decomposing this...

**Tom Wilkie:** Yeah.

**Gerhard Lazu:** And eventually, it hits the database and then it comes back in again. At any one point it could be cached. Sometimes requests are slow... Why? How would we find out with a tool that exists in the Grafana ecosystem world?

**Tom Wilkie:** No, it's a great question. So you already know that requests are slow, so that's kind of interesting. I'm gonna guess, for the sake of this discussion, that you've been told by your users that your requests are slow.

**Gerhard Lazu:** Right.

**Tom Wilkie:** So I would actually say -- first things first, let's kind of confirm that... We wanna instrument the system, we wanna get as many useful metrics as we can out of it. You mentioned an ELB there, for instance. We've put the CloudWatch exporter on there and get the ELB metrics out into Prometheus. Now, you can do that with your open source exporter. We're also working on a service in Grafana Cloud where effectively we run and manage that exporter for you, just to reduce the number of things you need to run. This will give you access to some rudimentary metrics, but generally, I don't find CloudWatch metrics to be super-useful...

**Gerhard Lazu:** I'm sorry, that was a bad example. So I gave an analogy -- it's actually a Linode NodeBalancer. I'm pretty sure you don't integrate with that...

**Tom Wilkie:** Okay.

**Gerhard Lazu:** But it's like a managed HAProxy.

**Tom Wilkie:** I wouldn't underestimate the Prometheus ecosystem. There's probably an exporter for Linode metrics that the \[unintelligible 00:27:37.10\] And if there isn't, there will be by the time we finish this recording, I imagine.

**Gerhard Lazu:** I hope so.

**Tom Wilkie:** Yeah. So I'd get metrics on the load balancer, because it's always good to start at the very edge.

**Gerhard Lazu:** The CDN is first. What about the CDN?

**Tom Wilkie:** Yeah, I don't know enough about Fastly, and I'm afraid to really comment... But I'm sure there's some way of getting logs or metrics on that.

**Gerhard Lazu:** \[00:27:55.08\] Okay. So we've hit something which I wasn't expecting to hit, but let's just go with it. I looked at integrating Fastly logs with the Grafana Cloud. To do that, it only supports HTTPS, because that's what Loki exposes... But we have to validate the HTTPS endpoint that we're going to send logs to. The problem is, how do we validate that we own Grafana Cloud/Loki? We can't do that. So what I'm saying is there's not a native integration between Fastly and Grafana Cloud, and I would really like that. Actually, that's something which we discussed in the previous episode. No, two episodes ago - episode ten.

So that's the first part - how do we get from Fastly, sending logs to Grafana Cloud? It's not supported. What Fastly is telling us - you will need to have some sort of a proxy that you can authenticate, and then forward those logs to Grafana Cloud, to Loki specifically.

It's okay... Not great. I would like just to send those metrics directly -- sorry, I keep saying metrics. I mean logs... Send the logs to Grafana Cloud. So that would be the first step. Great.

So let's say we understand the part between the CDN and the load balancer. Let's say that we understand that path, and we have some logs to tell us something. What do we do with those logs?

**Tom Wilkie:** So logs in and of themselves are seldom useful. So Loki, in LogQL that I referenced earlier, would be able to turn those into some usable metrics. You'd be able to turn them into request rates, error rates, and latencies, if the log contains latency. And you do that all with Loki. You can even, with the more recent versions of Grafana and Loki, you can build dashboards out of those. And some of the cool stuff is like behind the scenes there's a lot of caching going on, so that those dashboard refreshes don't overwhelm the Loki.

And I always say, with metrics - it'll tell you when it happened, it'll tell you how much it happened... Maybe if you've got the granularity, it'll tell you where, which service, or which region it happened in. But it won't actually tell you what happened. It will just tell you that something was slow.

So at that point, we start digging in. And there's a couple of techniques we can use. Firstly, I would instrument everything in the stack. We talked about getting metrics on the CDN, we talked about getting metrics on the load balancer... Your Ingress NGINX is running on Kubernetes, so it's trivial to deploy \[unintelligible 00:30:14.22\] and get logs on every Kubernetes pod into Loki... So you've got the NGINX logs, which again, Loki can extract metrics on really straightforward. Ward has a fantastic set of dashboards and examples of how to do that already.

Then you've got your application, the Elixir application. Now, I don't know enough about that, but I'm going to assume there's a Prometheus client library out there, so I would instrument that... And I would follow -- whenever I'm instrumenting my own application, I tend to follow a very simple method. If you've heard of Brendan Gregg's USE Method, then kind of somewhat tongue-in-cheek I coined this phrase called The RED Method, which is request rate, error rate, and request duration. RED. Everything comes in threes, and it's really easy to remember.

So I would just try and export a Prometheus histogram from the application with request rate, with error rate, and with duration. And the histogram will capture all three.

Finally, you mentioned the database... Let's just, for argument's sake, assume it's MySQL. They don't tend to actually export very good metrics. There is an exporter for it in Prometheus, and we actually baked that into the Grafana Agent, just to simplify it and make it easier and have less stuff to deploy. So I would wire those up and get whatever metrics I can, but I'd also gather the logs, because the database logs tend to be a little bit more interesting.

So finally, this hasn't really caught on very much, but you see it in a lot of dashboards that my team and I have built - I tend to always kind of traverse the system from top to bottom. I always have request rates on the left, in panels on the left, and durations like latency graphs on the right. Just through a quick glance on the dashboard, you can typically see where the latency is being introduced.

**Gerhard Lazu:** Do you have a good dashboard that exemplifies this? Because what you say makes a lot of sense... Is there a good dashboard that we can use as a starting point?

**Tom Wilkie:** \[00:32:00.09\] The Cortex ones are the ones that I've probably spent the most amount of time. Again, a bit of work we did with the Prometheus community was this standard called \[unintelligible 00:32:10.11\] which is a packaging format for Grafana dashboards and Prometheus alerts. So we've built -- there's 40 or 50 mixins now, from a lot of popular systems, but one of them is Cortex. And it's just a versioned set of dashboards and alerts that are very flexible, very easy to extend, which is kind of key, and very easy to keep up to date with Upstream.

Actually, the most popular mixin would be the Kubernetes mixin. I would wager that virtually every Kubernetes cluster in the world is running a set of dashboards from the Kubernetes mixin... Which is kind of cool, because I helped write a lot of those, in the very early days at least. It is now a whole community that maintains and has taken them far beyond anything I could ever imagine.

So dashboards - you would have a row per service and then you'd just do error rate, and request rate, and latency. And this will help you at a very quick glance. When you get used to looking at dashboards in this format - and every service kind of looks the same, is in the same format - that consistency really helps reduce that cognitive load. You get to kind of pinpoint very quickly where that latency is being introduced.

So a very simple technique; it's not universally applicable, but it does help you know "Well, this is coming in my application, or this is coming in my load balancer, or this is coming in my database."

**Gerhard Lazu:** Is there a screenshot of such a dashboard that we can reference in the show notes? That would really, really help.

**Tom Wilkie:** I can just load up one of our internal dashboards and send it over.

**Gerhard Lazu:** Yes, please. That would be great. The other thing is you mentioned mixins. Mixins in what context?

**Tom Wilkie:** I've terribly overloaded the term there, because I just thought it was a cool term. I realize in CSS and in Python mixins has a particular meaning... It bears no resemblance to the kind of language-level primitive. It is just a cool name that we used for packaging up.

We call them monitoring mixins because we used a language called Jsonnet to express a lot of our alerts and dashboards. And Jsonnet is very much about adding together big structures of data, and it kind of looks a bit like a mixin in that respect. But that being said, most of the way people use mixins nowadays doesn't use that technique. We just use it as a packaging format.

**Gerhard Lazu:** Okay.

**Tom Wilkie:** So it's just a name. There's a GitHub repo and a small website, and the nice thing about the tooling that's been developed and the packaging format is very much -- we encourage people who publish exporters, or people who build applications that are instrumented with Prometheus metrics to also distribute a mixin. So Prometheus has a mixin, Etcd has a mixin, the Kubernetes mixin is part of the Kubernetes project, right? Cortex has a mixin... And they live alongside the code, they're version-controlled and maintained in the same way as the code... And suddenly, you know how people talk about test-driven development. Well, you almost have observability-driven development.

**Gerhard Lazu:** That's interesting. So I know I've heard of mixins in the context of Jsonnet, and I tried them when I was using the Kube Prometheus Stack. The one that -- I think it was Frederick... Yes, it was Frederick while he was still at Red Hat. I know that he's not there anymore, but when he was there, he was pushing for this Kube Prometheus operator...

**Tom Wilkie:** That's right.

**Gerhard Lazu:** And in the context of the operator, we could get the whole stack. Working with that -- we used that for Changelog. It was really hard, because we had Jsonnet, it was a specific version of Jsonnet... There was a Go one, and there was (I think) a Python one, or a JavaScript one... I can't remember. But I know the Go one was much faster to regenerate all the JSON that you needed, all the YAML that you needed, it took a long, long time, basically, to get it into Kubernetes...

So the mixins that you're talking about, how would you use them? Let's imagine that you're running on Kubernetes. How would you use those mixins?

**Tom Wilkie:** \[00:35:52.09\] This is a really interesting point, because the mixins are Advanced mode. It's like Hard mode. The mixins are solving a problem that software developers have. It's like, how do I package and redistribute and version-control and keep up to date? It's not really an end user format. I wouldn't expect that to happen.

So just to address some of the initial challenges. There's a C version and a Go version of Jsonnet, and they weren't quite the same. The Go version didn't have formatting, for instance. The Go version has caught up, and is now what most people use. That's kind of -- we solved that problem.

We've also developed a lot more tooling, right? So there's \[unintelligible 00:36:24.20\] and there's Grizzly, and there's Tanker, and there's a whole kind of ecosystem (Jsonnet Bundler) of tools to use to manage these. And where it works particularly well is if you're in an organization with sophisticated config management. We have a single repo that has all of the config that describes pretty much our entire deployment of Grafana Cloud across 20-something Kubernetes clusters.

**Gerhard Lazu:** Is it public, please? Can you add me to it? \[laughs\]

**Tom Wilkie:** Unfortunately not, but there's lots of examples we use from it. But yeah, we've got this one repo, and it's that monorepo approach to conflict management at least where mixins really fit nicely, because you can use Jsonnet bundler to package-manage them. And then the really cool thing comes in - you probably kind of got 90% the way there, but then didn't have the last 10%... We use Jsonnet to also manage all of our Kubernetes jobs. So all our pods, stateful sets, config maps, services, you name it. All defined in the same language, in a single language, for dashboards, for alerts, for any files, for config maps, for anything. It makes it really easy for us to deliver dashboards and alerts encoded as JSON, encoded as YAML, inside a config map, in the same language, that is then uploaded with a single tool, and the whole process of updating an application and updating its config and updating its monitoring is a single PR, a single push and a single apply \[unintelligible 00:37:47.22\]

That's where the vision was. That's a bit advanced. It's a bit much to ask for most people. And also, it's a bit opinionated. You have to have the complete stack, end to end, bought into the whole thing, to really realize that benefit. And let's face it, other techniques \[unintelligible 00:38:04.04\] are gaining more popularity than Jsonnet ever did... So I think the time has passed for that vision and that way that we're running things.

You kind of touched on something really important here... It was too hard to use. So what we've been doing in Grafana Cloud really for the past year or so is trying to make a kind of more opinionated, more integrated, easier to use version of all of that. You sign up to Grafana Cloud, you deploy the agent, so that's the first bit of simplification, the Grafana Agent embeds - it's all open source - Prometheus remote write code, \[unintelligible 00:38:39.02\] it embeds Loki's Promtail, it embeds the OpenTelemetry collector... It also embeds so 10-20 different exporters, all in a single binary, all in a single thing to deploy and a single thing to configure... And it scrapes and gathers metrics and logs and traces and sends them all to your Grafana Cloud instance.

And then within that instance, we've built a service that -- it's almost like an app store; you can select the integration you want to install... "Oh, I wanna monitor some MySQL. I wanna monitor some Kubernetes. I wanna monitor Docker." And it will install the dashboards and the alerts and it will keep them up to date for you, and it will connect them through to the integration and the agent.

Behind the scenes, this is all mixins. This is all Jsonnet, this is all automation we've built to make this whole thing easy to use and integrated and opinionated. It's much harder to do that easy-to-use story in open source, because the opinions change, and the integrations change. But in cloud, where it's a much more controlled environment, we can deliver that easy-to-use experience. This just means that people who maybe have seen me talk, or seen someone else talk about Prometheus and talk about Grafana and talk about how easy it is to use and how powerful it is and how awesome it is and how much value they've got out of it, but maybe don't really have the time to dump into the intricacies of Jsonnet and learn 50 new tools, we're just trying to make that accessible to that group of people.

**Break**: \[00:39:59.16\]

**Gerhard Lazu:** As I was saying, we used Jsonnet Bundler (JB). I remember the Kuber Prometheus operator and the Kube Prometheus stack which was generated out of that... So we did away with all of that. We've obviously set up our own Grafana, set up Loki, set up Prometheus... Now all we have is a Grafana Agent, which is really nice. By the way, do you know that the docs recommend two Grafana Agents; one to scrape the logs, one to get the metrics. So I figured out how to get a single one, and that was okay, because one can do both... But the thing which I still struggle with is how to get the dashboards working nicely together. I think that's the most important thing. We have PromEx - that's the library that we use in Elixir and Phoenix to get the metrics out... And it's actually on the Grafana Blog as well, so it was featured...

**Tom Wilkie:** Great.

**Gerhard Lazu:** Alex Koutmos was working close with the Grafana team. He's also a friend of Changelog's, a very close friend. We work together; we even did a couple of episodes together... Even a YouTube stream on how we upgraded Erlang 24 and we were using Grafana Cloud to see the impact of that for Changelog.com.

**Tom Wilkie:** Nice.

**Gerhard Lazu:** It was a Friday evening deploy. PromEx was there... It was a great one; we had great fun. It was a few weeks back. So in that world, the dashboards - I still feel they are the strongest thing and the best thing that you have, but also the most difficult one to integrate... Because the Grafana Agent doesn't really handle dashboards, right? It just gets the logs and the metrics out. So we are using PromEx, but it's really clunky, because you're building your dashboards in Grafana Cloud; a lot of the time they don't work, because the metrics don't show up (reasons), and then you adjust them, then you have to export them, then you have to version control them, and then PromEx has to be configured to upload them to Grafana Cloud. So it's just a bit clunky.

**Tom Wilkie:** Yeah.

**Gerhard Lazu:** So I'm wondering, how could that be done better? Do you have some ideas?

**Tom Wilkie:** There's some kind of guidelines for building dashboards, in my opinion. First thing - you should always template out the data source. Different Grafana installations will name their data sources different things, and so a dashboard imported from one might not necessarily work in another. So I always make sure my data sources are templated out.

The second thing - I always tend to template out the job and the instance labels, maybe with wildcard selectors. And again, same reason - this means the dashboard can effectively dynamically discover what jobs you've got with certain metrics. This actually fits a pattern in Prometheus really nicely, where we have this Go buildinfo if you're in Go, and Java buildinfo if you're in Java, and so on... Where every job exports a metric that tells you the version it was built with, and so on. We call these info-level metrics. I tend to add an infometric to every piece of software I write. Maybe it's Cortex info. And then I'll tell the template selector for any Cortex dashboard to just look for all the unique jobs and instances that export a cortex build.

\[00:44:11.13\] And again, this kind of turns a static dashboard that might have encoded to use a particular set of labels into a very dynamic dashboard, which allows you to select the job you wanna look at, and it also means that the chances are when you load it, as long as there's some job exporting some relevant metrics, it'll work. So first things first - template your dashboards.

**Gerhard Lazu:** Right.

**Tom Wilkie:** Second thing - I'm a big fan of dashboards as code. So I actually don't tend to build my dashboards in Grafana. I tend to build them in my text editor, and I tend to use Jsonnet, unfortunately. I tend to use a library called Grafonnet, or there's another one called Grafonnet Builder... And if you don't like Jsonnet, there's a good library called Grafanalib that helps you build them in Python... And yeah, I tend to build them there, I tend to version-control them from the get-go, and really, I tend to use a much more kind of GitOps style approach. There's a couple of tools you can use to do this, but the one I've been using more recently is called Grizzly, by Malcolm Holmes, and some of the Grafana GitHub. And you can install that and you can point a Jsonnet definition of a dashboard and it will upload it to Grafana. Generally, I do a kind of dev deploy cycle on my laptop as I'm developing these dashboards, uploading to Grafana, refreshing, seeing the change... That way, the definition of the dashboard is already in Git. And because I'm version-controlling source code and not a big blog of JSON, the code is much more reviewable, and I can create PRs and have someone else review those PRs, and it's meaningful to do that.

**Gerhard Lazu:** That sounds exactly what I would want. You've described my ideal approach. But first of all, I didn't know about those tools. Second of all, I'm not aware of any article, any video, anything like this that runs you through how to do this. So what I would want to do is to go through that and capture it.

**Tom Wilkie:** I think the reason we don't promote it too widely is because the 80% use case for Grafana is editing dashboards in Grafana. And that's easy to access, easy to use, it's very visual, it's very rewarding to do that. The 20% use case that I've just described is the serious SRE dev ops approach. And I think we've tried a bunch of different ways of doing it. We've settled on this way, but I don't think anyone is satisfied. I don't think this is as easy as it can be. I don't think anyone thinks that this is the final form. So I'm not sure that anyone's kind of too eager to promote this as the advanced way of doing it.

I referenced that hackathon earlier that we were doing internally, and I know that we've got some cool stuff coming out that maybe will be the final form of this.

**Gerhard Lazu:** I know that I'm very excited about trying it out. This is a dream, and you can say no, right? Or like - not dream, but like a crazy plan. What would it look like if we paired, for an hour -- I've been doing it for close to a decade, so I think I'm pretty good (or so others say) to have a go at this. Maybe half an hour will be enough...

**Tom Wilkie:** No, I'd love to.

**Gerhard Lazu:** ...just to get a hang of things. So - okay, I'm thinking YouTube stream, I'm thinking--

**Tom Wilkie:** Yeah, let's do it.

**Gerhard Lazu:** Wow, okay.

**Tom Wilkie:** Can we use VS Code sharing? Because I've always wanted to use that, and I haven't had an opportunity to.

**Gerhard Lazu:** Anything you want. You're the driver. You're just showing me how it's done, and then maybe we can switch over and I can have a go to see if I understood it correctly in the context of Changelog.com... Because we are already using Grafana Cloud; the integration is there. We're already using Grafana Agent... And who knows, maybe there'll be some interesting things to share. But the focus is on getting this nailed down, because it sounds amazing. Why aren't more people doing this? And I don't think many know about it. Whatever comes after it, I think it's an important step to capture and to share widely.

**Tom Wilkie:** Yeah, I agree.

**Gerhard Lazu:** Because I don't think people know -- I've never heard this before. Jsonnet, JB... But I was doing it wrong, and I didn't even know until today... So thank you, Tom.

**Tom Wilkie:** I wouldn't say you were doing it wrong, but you didn't see the full -- you didn't get an opportunity to use the full process.

**Gerhard Lazu:** \[00:48:00.06\] ...to do it right. I didn't have the opportunity to do it right. Okay.

**Tom Wilkie:** I mean, that's one of the big challenges of this approach, is there's a lot to learn, there's a lot to consume, and you don't really see the benefits until you do it all... Which is, from a developer experience perspective, awful. There's no kind of incremental reward that goes with it, which is what we're missing.

**Gerhard Lazu:** We talked about metrics quite a bit, we talked about logs, but we haven't talked about traces. I think it's a very important element. We ourselves are not using traces, and I can see the traces being instrumental, critical, essential to understanding why our requests are slow. If you have a trace, you can understand where the time is being spent, and the slow request, you can see "Actually, you know what - it was qproxy." Because I suspect, based on the metrics that we have, which - by the way, we have quite a few, and everything is going to Grafana Cloud, all the logs, everything. Based on what I see, what we have, all things point to qproxy.

So how would we use traces to understand that? First of all, how does it work? This is Tempo, I know that's the component -- would you call it a component? What would you call it?

**Tom Wilkie:** I tend to call it either a project or a service, depending on the context.

**Gerhard Lazu:** Okay, so the Tempo service. How do we use it for traces and would it integrate in the problem or how it solves the problem that I just described?

**Tom Wilkie:** This is a really interesting one, because in the metrics world we develop exporters, which gather numeric data from other systems and exposes them as metrics. The barrier to entry for metrics is kind of medium. Maybe it's kind of three feet tall. For logs - everything has logs. It's so easy to get logs from everything, so the barrier to entry for logs is kind of nowhere; it's on the floor.

The barrier to entry for traces is super-high. You need to have systems that instrument it, you need to correctly propagate the context, the trace ID, and you need to have a way of kind of distributing this telemetry data. So this is the challenge in the tracing space right now, and this is why I think it's always the -- to your point, you haven't adopted tracing yet. It's always the third thing people adopt. The investment is high.

The good news is there's a huge reward for that investment, and particularly whenever you're looking at any kind of performance challenges, tracing is invaluable. We've been doing a lot of distributed tracing for a long time in Grafana Labs. We've started with Jaeger and eventually did our own thing with Tempo, and it's been instrumental in kind of accelerating the query performance of every component. So that's the TL;DR.

How do you do it? So there's some good news here. One of them is OpenTelemetry, very kind of cross-functional projects, from many different contributors and vendors, that is designed really to make the whole telemetry journey better and easier and simpler. And the most well-developed bit of OpenTelemetry and the bit that is the most widely adopted is their tracing stack. So we've put the OpenTelemetry collector into the Grafana Agent, so you can deploy that and then you've got something that you can just fire traces at in your local environment.

You set up the Grafana Agent to forward those traces up to Grafana Cloud, to Tempo, and then Tempo deals with the storage of them. And that's really what the component is. All that leaves is for you to deal with the instrumentation.

Now, the good news is with a lot of the high-level languages, a lot of dynamic languages you can use auto-instrumentation. So this is part of OpenTelemetry's client libraries that come along, and for instance with most Java web frameworks, with most Python frameworks, it's like one line of code, or maybe it's even no code changes, and you can get reasonable traces out of the system. I don't think a system like that exists for Go, so it's a bit more work with Go, but it's still not that challenging. Unfortunately, I don't know enough about the Erlang VM, but I'm gonna expect there's probably a pretty easy way of getting traces...

**Gerhard Lazu:** \[00:51:47.01\] It exists. The OpenTelemetry integration exists in Erlang. It's not that mature, but it's improving. Every month it's getting better. And I think it's more around the queries that go all the way to PostgreSQL, so how does the request map to that. I know that the database has some impact on that, but right now the most important one is between the app pod, the app instance, and the PostgreSQL pod, which - they all exist in the same place.

Now, maybe if PostgreSQL was like a managed service, we wouldn't have this problem. Maybe. But regardless what the case would be, you'd want to know what is the problem, and if I change this, does it actually improve it? And by how much? If you have the trace, it's really easy to understand "Well, I should not qproxy, I should focus maybe on the load balancer." But I don't know where that request is stuck, or in that request which is the longest portion, so where should I invest my time first?

**Tom Wilkie:** You've hit on one of the many problems with distributed tracing. You have to have the entire stack instrumented to get a lot of value. And if you have holes in the middle, or black blind spots from a kind of tracing perspective, then the value is greatly diminished.

**Gerhard Lazu:** Yeah.

**Tom Wilkie:** You can get tracing information out of load balancers, and I've never actually done it myself though. I've always kind of stopped there. I'm hoping that things like OpenTelemetry -- and I know Amazon are heavily investing in OpenTelemetry, so I'm hoping that it'll be possible (if it isn't already) to get OpenTelemetry spans out of my \[unintelligible 00:53:19.13\] I think that's gonna be really important.

I'm hoping that things like the W3C Trace Context makes this easier, and maybe this even allows things like the CDN, Fastly, to also emit a span. That would be kind of cool, being able to see a CDN and an \[unintelligible 00:53:37.01\] and your application.

When it comes to Postgres and MySQL, I don't know. I'd love to see spans coming out of those systems, but I don't really know the status, and I'm not really an expert on this side of things.

A common misconception is that every service emits one and only one span. It doesn't have to; you can emit as many spans as you like. You probably shouldn't emit too many, but you can do whatever you like. So one of the things we do a lot of is client-side spans. Whenever we do a request to a database in Cortex in pretty much any of the systems I've worked on, \[unintelligible 00:54:08.08\] And this effectively gives you some insight into the latency that external systems are contributing. But it doesn't have to even just be two spans, a server span and a client span. You can put spans in between. So we will have spans around cache lockups, we will have spans around various kind of areas inside a single service that parallelize, and will admit multiple spans, and it really helps you understand the flow of the requests. Don't go crazy with it, but in general it's possible.

In your situation, because it's a monolith, I would instrument the Elixir server and client going out to Postgres, and that would probably give you enough information to know if it's Postgres, to know if it's the qproxy or the ELB. You wanna get a span from something further up the chain, and then start to look at the differences.

**Gerhard Lazu:** Ingress NGINX? Does Ingress NGINX and NGINX support spans, do you know?

**Tom Wilkie:** I don't know off the top of my head.

**Gerhard Lazu:** Okay.

**Tom Wilkie:** One of the things I've definitely seen engineers go down this rat hole of trying to get complete traces and spans from everywhere, and there's just kind of a -- there's an effort/reward trade-off to be made. It might take a lot of effort to get a complete span from every single service. If you're on a mobile app, doing a client-side span might tell you everything you need to know. Just emitting it from your own mobile app.

**Gerhard Lazu:** I understand what you're saying. I think on the client-side that is less of an issue because this span, which is the longest one, happens server-side, where it's waiting - or processing, whatever the name may be - and that tends to sometimes be really long... So what happens inside of that span?

We know that it goes to (let's say) Fastly. Great. We can remove that, and we can go directly to the load balancer... I don't think there's much we can do about the load balancer, so let's say we ignore that... So our span really starts at possibly the Ingress NGINX. So that's the first start point.

**Tom Wilkie:** \[00:56:05.27\] Mm-hm.

**Gerhard Lazu:** Excellent. What happens inside Ingress NGINX maybe would be interesting. I mean, this is NGINX specifically. Maybe it would be interesting. But the next hop will be into - as far as I know, this will be the entrypoint into Kubernetes. So that will be the service that is responsible for routing the traffic. I mean, that's actually even before the Ingress NGINX, right? It's the service, it hits the NGINX pod, and from the NGINX pod it will need to talk to the other service, which is the application service.

So having these first 2-3 steps in the span would be already helpful, but realistically, I think we can only start from the Kubernetes side, and that's okay. So from NGINX, the next hop would be really the application. So how does that span vary, and regardless what happens inside, it doesn't matter. How does that duration change? From the application, again, it has to hit the database. And if we know the timings that it takes, that would be enough. So we have literally the 3-4 hops which we're really interested in, and then there's the Kube-proxy. So where does that happen, and how long does that span take?

So it's just like, okay, together, maybe seven steps, and which is the step which is more variable. That's the way I think about it. Is that right? Does this sound right to you?

**Tom Wilkie:** With distributed tracing you've always gotta kind of see -- the great thing about it is being able to visualize the actual flow of the requests. So yes, I'm agreeing with you.

One of the things I will say is it's probably not Kube-proxy. My understanding in most deployments is that it's not a layer seven thing; it's done at the TCP level, where it doesn't intercept any traffic, so it's not worth putting a -- or it's not even technically possible, I guess, to do a request-level span there, because it's very connection-oriented.

**Gerhard Lazu:** Right.

**Tom Wilkie:** You know, one of the promises of OpenTelemetry, because it's so vendor-netural and because it's so open as a standard is that we might even be able to get spans into more established open source projects who don't wanna pick favorites. Maybe one day we will be able to get spans into Postgres and into MySQL. Maybe it already exists. I'll admit to not knowing off the top of my head.

**Gerhard Lazu:** Neither do I, but that's really fascinating. So this is what I'm thinking... First step is let's pair up on what it looks like to do Grafana dashboards Tom-style. I'll call it Tom-style; I know it isn't, but... Grizzly-style, or whatever. The point being is the way you develop them. Big fan of GitOps, big fan of version controlling it... We're not using Argo CD yet, but I would love to put that in the mix. How does that play with the tools that you use? How does it integrate with Grafana Cloud? How can we control those dashboards in a way that is nicer than what we have today?

And then, this specific problem once we have that iteration set up really nicely, and those feedback loops that operate nicely, so we can experiment, which goes back to what you were saying, being able to ask interesting questions, being able to figure things out, like explore, which I'm a big fan of... Figure out, like -- we don't know what the problem is, so let's figure out. So how can we very quickly iterate on solving that specific, or finding that answer?

\[00:59:16.05\] And then, I think those spans, Tempo and integrating with that - super-valuable, long, long-term. I expect things to change along the way as the ecosystem matures. More libraries are getting instrumented, OpenTelemetry becomes more mature... I think that's a great vision and a great direction towards where the industry is going. I'm very excited about that.

As a listener, if I had to remember one thing from this conversation, what should that be, do you think?

**Tom Wilkie:** I'd go all the way back to the early comments about observability and about the big tent philosophy, and about there not being one-size-fits-all tooling. I know as a vendor here I have a preference for Prometheus and Loki and Tempo, but honestly, that's just a preference; that's just an opinion. An equally valid opinion is to use Graphite and Jaeger and Elastic. They're very powerful systems. It's our kind of mission at Grafana Labs to allow you to have the same experience and the same level of integration and ease of use no matter what your choice of tooling is.

**Gerhard Lazu:** I love that. So if we were to pick one title for this discussion, what do you think that should be?

**Tom Wilkie:** Observability and big tent philosophy.

**Gerhard Lazu:** Big tent philosophy. I like that. I like that big tent philosophy.

**Tom Wilkie:** I'm not sure where the term comes from, to be brutally honest. I should probably google it. I know how a lot of companies have internal mantras. Google's mission was to organize the world's information. The internal mantra in Grafana Labs is this big tent philosophy. We apply it everywhere, to everything we do.

**Gerhard Lazu:** Who came with the idea of the big tent, do you know?

**Tom Wilkie:** I don't know where the term came from, but the idea was very early on in Grafana, when Torkel added support for multiple data sources. And very early on -- Grafana started life visualizing Graphite data. But very early on, support for other systems was added. And it's really that vision early on to bring together data from multiple systems in Grafana that ceded this idea.

**Gerhard Lazu:** So the big tent, the way I understand it, is bringing all these (I wanna say) vendors' data sources? It's more than just data sources, right?

**Tom Wilkie:** More than just data source, because it's data from anywhere, and combining it in a single place, but building experiences that span multiple systems, integrating them in ways that didn't exist before... But it's not just a concept that applies to Grafana and the visualization. We apply it on the backend, with supporting different query languages within the same time-series database. We support it in Tempo, being able to send traces formatted for Jaeger, or formatted for Zipkin. And it's kind of intrinsic in a lot of OpenTelemetry as well, being very vendor-neutral, to a fault.

**Gerhard Lazu:** Tom, I didn't think this was possible, but it happened... I have more questions at the end than at the beginning...

**Tom Wilkie:** I'm sorry about that...

**Gerhard Lazu:** And I'm more excited to continue talking with you at the end than I was at the beginning; again, I thought that's not possible... I'm really looking forward to trying things which I've just said, and I'm really looking forward to the next time, so thank you for today.

**Tom Wilkie:** Thank you very much, Gerhard.
