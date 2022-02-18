**Gerhard Lazu:** This is another real-world story of \[unintelligible 00:03:22.15\] what works, what could be improved. The goal is to learn from a different perspective, and if we're lucky, maybe disagree on a few things. I love that. That's when I find myself learning the most.

We have Robin today, that I hope will disagree with me on a few things. What do you think? Can we make that happen, Robin?

**Robin Morero:** Hopefully we can make that happen.

**Gerhard Lazu:** Okay. So I would like to start with my favorite. I would like to understand what it looks like for you to take code from dev to prod. What is the path that the code takes for you, from your development workstation to production?

**Robin Morero:** \[04:05\] Yeah, it depends on the context... But ideally, my dream scenario is to just push the code, make it land in production, and then let it roll there... And check the observability, how does it behave in production.

**Gerhard Lazu:** Okay.

**Robin Morero:** And then follow up and iterate.

**Gerhard Lazu:** So do you have like a favorite project or a favorite codebase that you work with? Because I'm interested in the specifics.

**Robin Morero:** Yeah, we're working on a facility management codebase; that's one of them. What we do there is we try to provide a system for the facility owners to manage their facilities and the tenants in their facilities.

**Gerhard Lazu:** Okay.

**Robin Morero:** So what we do is we code on it, we code backend, we code frontend. The backend is Go, and the frontend is React. And when we push that, it goes straight into production. It takes 15 seconds.

**Gerhard Lazu:** 15 seconds did you say?

**Robin Morero:** 15, yeah. Most of the time. The frontend build takes a bit longer.

**Gerhard Lazu:** How long do your tests take to run?

**Robin Morero:** Tests? \[laughs\]

**Gerhard Lazu:** No, seriously... Are there tests?

**Robin Morero:** There are tests, but most of the tests are run after it hits production. We try to make it safe to deploy to production.

**Gerhard Lazu:** Okay. How do you know if you haven't broken something if you push without running the tests first?

**Robin Morero:** We try to make breaks as small as possible to start with. Hit as small iterations. And also we try to run it in two separate environments. With environments, I'm not talking about test to production, but just more like two different productions.

**Gerhard Lazu:** Okay. So do you mean like a blue-green sort of approach?

**Robin Morero:** Blue-green, canary type of deployments.

**Gerhard Lazu:** Canary, okay. Interesting.

**Robin Morero:** And we meter traffic between these. So traffic comes from the real production into the other one, but it doesn't -- if anything breaks there, it doesn't break the whole database.

**Gerhard Lazu:** So when you push an update into production, does it go into the live production or does it go into the stand-by, and then you start shifting traffic from live to the new one?

**Robin Morero:** Early on, it went straight into the real production, while it was a greenfield product. We were building it from scratch. But nowadays it goes into the mirror production environments, and we have some continuous traffic running there. And if the traffic looks still right, it's promoted to real production.

**Gerhard Lazu:** So how do you know that the traffic that goes into the updated version looks alright? What determines that?

**Robin Morero:** Metrics. Observability and metrics. So instead of trying to build test suites for everything, we build real simulated customers. So we build small bots that provide traffic into the system. When something happens, when something does break, we make sure to put a metric in there, a log line and a metric. And for the scenarios that we expect to happen, whatever could happen, we also do the same thing.

**Gerhard Lazu:** Okay.

**Robin Morero:** It's basically similar to BDD, I think, only it's less \[unintelligible 00:06:42.16\]

**Gerhard Lazu:** Yeah. It sounds like acceptance testing almost, because you have -- maybe actually acceptance testing is not the right word for it. It's more like end-to-end... I'm not sure how to call that test, because you're simulating real users. It is the behavior of the system, but I'm trying to visualize how you describe the tests, or what are those bot users doing on the system that will inform you when something breaks?

**Robin Morero:** Yeah, we're actually trying to simulate a use case for the system.

**Gerhard Lazu:** Right.

**Robin Morero:** That's, I think, quite similar to the first definition of business-driven design, I think.

**Gerhard Lazu:** Right, okay. Okay.

**Robin Morero:** So you write the use cases, you try to set up tests for these use cases... Only we don't do the unit tests. We do \[unintelligible 00:07:24.20\] live traffic into a production environment.

**Gerhard Lazu:** Okay. So you simulate live traffic... Which obviously isn't live; it's artificial traffic.

**Robin Morero:** Yes.

**Gerhard Lazu:** Do you go through a set of steps, or...? I'm trying to figure out, first of all, how many of those acceptance tests you have, or use cases you test, and when do you start, when do you stop?

**Robin Morero:** At the moment, we're still extending those. So it's not a lot of them. We've got maybe like 20 suites or so.

**Gerhard Lazu:** Okay.

**Robin Morero:** And they cover more than one thing, because you see like "user logs in", "user does something", so it's \[unintelligible 00:07:58.20\] several steps it covers.

**Gerhard Lazu:** I see.

**Robin Morero:** \[08:03\] And it goes all the way down to the database, but it's a separate database from the production one. So it goes through the first service, the first services routes it to the next service, with a header. This is mirrored traffic; it should go to the mirror flow. So we use traffic mirroring a lot. Service meshes has been good.

**Gerhard Lazu:** Service meshes, okay. So that's interesting... Is your production Kubernetes?

**Robin Morero:** Yes, it is. Or K3s, but same thing.

**Gerhard Lazu:** Interesting. So K3s. And are you running it on a single node, multiple nodes? Do you have like a K3s cluster? What does that look like?

**Robin Morero:** We've got a K3s cluster. So we've got maybe like six nodes, or something, at the moment. It's a pretty small system and it's not being used a lot at the moment.

**Gerhard Lazu:** Okay. In terms of database what do you use?

**Robin Morero:** We use a Postgres cluster. We use a Postgres cluster. We use the Zalando operator.

**Gerhard Lazu:** Interesting. We used to use that. Did you have any issues with it?

**Robin Morero:** Not really issues, but I would like to have a fully horizontal scaling version.

**Gerhard Lazu:** Ah, I see.

**Robin Morero:** We're looking at Yugabyte and we're looking at Cockroach.

**Gerhard Lazu:** Hm, interesting.

**Robin Morero:** So we're waiting for the \[unintelligible 00:09:01.06\] to appear in Yugabyte at the moment. What are you running?

**Gerhard Lazu:** A single-node Postgres. Really interesting, because we went with the Crunchy operator first...

**Robin Morero:** Yeah, alright.

**Gerhard Lazu:** ...and we had issues with the replication. So we ran a primary and a secondary, which is like the standard one, and the secondary would fall behind. Then the write-ahead log on the primary would fill up the disk, then that would crash, but the secondary could not be promoted, because it was behind... So then we had no database. We thought that Crunchy - there was something weird happening with Crunchy. The whole configuration felt a bit more complex, because apparently this thing is really complex to get right, the replication for PostgreSQL.

**Robin Morero:** Yeah.

**Gerhard Lazu:** We switched to Zalando, and the same thing happened. And I suspect that a lot of this was network-related. So when there's like a networking glitch, sometimes the secondary just stops syncing, the write-ahead log stops syncing, and when that happens - exactly the same way, the primary filled up; it crashed, it couldn't restart, because the disk was full, the persistent volume was full... The secondary could not be promoted, so we had no database.

**Robin Morero:** I think I've actually seen that with a Zalando one as well.

**Gerhard Lazu:** Yeah. So for us right now, we have a single PostgreSQL which is continuously being backed up to S3. And if we were to delete it, one of the first things which it does - it will download the last backup from S3 and it will restore from backup.

**Robin Morero:** Yeah, that's nice.

**Gerhard Lazu:** So if we delete our database, it will just restore from the last backup. So the backups currently run every hour, so at most we can have like an hour worth of data loss.

**Robin Morero:** Yeah.

**Gerhard Lazu:** I would love to be able to set up stream replication to S3, so that we can restore from literally like the last transaction, the last entry in the write-ahead log that was synchronized. That would be better.

However, having said that, I think having a managed PostgreSQL would really, really help, so that we don't have to worry about this. And I'm thinking right now to go for the Fly managed PostgreSQL.

**Robin Morero:** Yeah, that looks nice.

**Gerhard Lazu:** And the idea there is that we could run multiple instances of the app and just connect to the same PostgreSQL instance. Currently, we have a single instance of the app, for various reasons. I won't go into them. But actually, episode 40, which came out just before this one, we talked about that at length.

So coming back to your app and coming back to your use of PostgreSQL - you're using the Zalando operator, you have replication set up, the primary/secondary one...

**Robin Morero:** Yeah.

**Gerhard Lazu:** Okay. Did you ever have to restore, or failover? And how did that work?

**Robin Morero:** It happens, and we kind of want to do that every now and then as well, to make sure that we don't lose something along the way. So we're trying to go for a portable and immutable setup, so it's disposable; we just throw it down and throw it up again, make sure it works. And I guess that's one of the issues I have with the Zalando operator. I would rather have the horizontal, so that I can \[unintelligible 00:11:59.13\] new versions on it.

**Gerhard Lazu:** Yeah, that makes sense. What about database migrations? How do you run them?

**Robin Morero:** \[12:07\] We run them as code. We put them in code and we make this small microservice that takes care of it. It does something in SQL and something \[unintelligible 00:12:14.06\]

**Gerhard Lazu:** Okay. So when you migrate production, did you ever have a migration not work?

**Robin Morero:** Yeah, it happens, but nothing bad so far. It was triggers that didn't work well, that we were hoping -- we have a solution for it now, but it did break.

**Gerhard Lazu:** Okay.

**Robin Morero:** And those other steps, I guess we do a lot of test cases around; trying to recover data... We can't do that with fake customers all the way.

**Gerhard Lazu:** Yeah. So when it comes to your setup, what do you like about it?

**Robin Morero:** I like how it's lightweight. I think as we go along, and the further we get into the Kubernetes ecosystem, we're seeing -- I would almost call it a death of DevOps, but that's a bit challenging, I think.

**Gerhard Lazu:** Okay... Why do you say that? That's very interesting. Why do you say that?

**Robin Morero:** I mean, what we used to have -- I've been working in this industry for a while... We used to have these really big products, and we had ops divisions, and we had dev divisions. With DevOps, what I really liked about it was that you'd take care of your own code, from designing it, writing it, deploying it, to checking it afterwards.

But as it grows more complex, you either have to keep more stuff in your head, or you have to specialize harder. So you can't do both frontend, backend and ops. So that's the pattern I'm seeing; what I'm seeing is that junior developers or mid-level have problems with doing real DevOps on Kubernetes. Because when something goes wrong, they can't read the logs really well, they can't see what happens in Kubernetes... So you end up destroying the feedback loop, I think.

**Gerhard Lazu:** Okay.

**Robin Morero:** Meanwhile, I love Kubernetes, but it's basically \[unintelligible 00:13:48.02\]

**Gerhard Lazu:** Yeah.

**Break:** \[13:55\] to \[15:24\]

**Gerhard Lazu:** I think many call it a platform for building platforms, and using Kubernetes directly is almost like an anti-pattern. You shouldn't as a developer do that. And the expectation is that there's like some higher-level primitives built on top of that. For example, you mentioned logs.

**Robin Morero:** Yeah.

**Gerhard Lazu:** Logs will be all aggregated in a place. And it doesn't matter which Kubernetes cluster things run in, all the logs are centralized. Same thing for metrics. Same thing for traces, same thing for everything else. The point being, as a developer -- I mean, okay, Kubernetes is there, and maybe you're aware of it, but you still just git push and then everything else comes together and you know where to look.

**Robin Morero:** \[16:01\] And those are all nice perks, but what happens when something goes wrong? Because it still happens. For instance, a younger developer does something wrong in the code and their application keeps restarting, and they don't understand why.

**Gerhard Lazu:** Okay... So when they look at the logs, can't they see why their application is restarting?

**Robin Morero:** I see a lot of people having trouble understanding that. It takes a while for them to understand that pattern. I mean, they can learn, everyone can learn, but at the moment what I'm seeing is that \[unintelligible 00:16:24.19\] have problems with it.

**Gerhard Lazu:** Okay, interesting. So you see younger developers struggling with -- okay, when I say "younger", maybe less experienced developers...?

**Robin Morero:** Yeah. It doesn't have to be younger. It's like people with a lack of experience in the cloud development field, I think.

**Gerhard Lazu:** Okay. What is the operational model that they are used to? Are they used to SSH-ing into servers? What would make it easier for them?

**Robin Morero:** I mean, it varies. If they come from a Ruby ecosystem, that had one way of doing it; it was a lot of SSH and a lot of running the -- I don't know, that Ruby development tool. I can't remember what that's called. You probably know...

**Gerhard Lazu:** Capistrano?

**Robin Morero:** Capistrano, yes. So they used Capistrano, and then you've got PHP on one side, you've got \[unintelligible 00:17:04.23\] each of these crowds have their way of doing things. So it's not like one unified way; it's different, I think.

**Gerhard Lazu:** Right. What about platforms such as Heroku? Is that something that they are used to and familiar with?

**Robin Morero:** Some of them are, and some of them really like it. I mean, Heroku is by default simpler than Kubernetes when you look at it, to get started with and follow up. But it's the same thing, it's a platform. So yeah.

**Gerhard Lazu:** Do you see all these tools adding complexity, and maybe a lot of it is not needed? Is that what you see?

**Robin Morero:** I think so. I think a lot of our work as developers is to manage complexity, when we should instead be reducing complexity. We set up frameworks for managing complexity and we are fascinated by them and we try to improve that, but t here's not a lot of talk going on about reducing complexity.

**Gerhard Lazu:** So do you think that if we didn't have Kubernetes, things would be less complex?

**Robin Morero:** No, I don't think so. I think Kubernetes fills a role, but I really liked it at the beginning, when it was simpler. You still had to know it, you still had to understand how it worked, but as the ecosystem grows, you have expectations that you need all of these ports in your Kubernetes ecosystem, and you need to learn the new tools. I think this situation is similar to what happened in the JavaScript world, when you went from old-school web development to framework development. You have a lot of new tools and a lot of new libraries that you have to learn to get on with your work.

**Gerhard Lazu:** So what would you say is complex in the world of Kubernetes? What became complex over time?

**Robin Morero:** The growing ecosystem is the big part, and the constantly changing ecosystem \[unintelligible 00:18:34.26\] are you using things like -- where do you put your logs? How do you route your traffic? Are you using a service mesh \[unintelligible 00:18:44.23\] It depends and it varies. If you have seen one environment, you haven't seen them all.

**Gerhard Lazu:** Yeah, so the diversity in the different Kubernetes configurations... Which obviously doesn't mean just Kubernetes; it's all the stuff that runs on top of it, and there are like slight variations, so it's difficult to know where to find the logs, where to find the metrics, where to see the events, stuff like that. Okay.

**Robin Morero:** Yes. And then you could add to that -- I mean, that's part of it. When you use it on \[unintelligible 00:19:09.23\] self-hosted one, that's one thing. But if you add to that something like AWS or GCP, then you have to understand that environment as well; you have to know where to look for things, you have to know how to set up and configure things.

**Gerhard Lazu:** Okay.

**Robin Morero:** The developers might not have to set up, but they have to know where to find the logs and how to read them.

**Gerhard Lazu:** So is there a list of tasks maybe that you've seen developers struggling with repeatedly? You keep mentioning logs... Is that something which they find difficult with Kubernetes?

**Robin Morero:** I've seen a lot of developers struggling with trying to find the right logs. The logs they want. So trying to sort out from this log flow which logs am I interested in.

**Gerhard Lazu:** And how are they getting these logs? Do they go to Kubernetes directly, or do they use something else to look at those logs?

**Robin Morero:** \[19:58\] Most of the time it's something else, right. And it varies. I mean, depending on what you use. Some tools are easy to use, some are hard. But if you take AWS for instance, finding logs in there can be quite tricky, depending on what you're looking for. And GCP as well. Datadog - I love the tool, but it's sometimes... If you have a lot of logs in there, it's hard to find the right ones.

**Gerhard Lazu:** Okay. Which is your favorite tool for looking and finding logs coming from Kubernetes workloads?

**Robin Morero:** I like Datadog a lot for the power of it, but... Should I choose one for myself, I would go with Loki at the moment.

**Gerhard Lazu:** Loki. Interesting.

**Robin Morero:** Yes, because it's lightweight. I like lightweight stuff. Have you tried it?

**Gerhard Lazu:** Yeah, for sure. Grafana Cloud is one of the integrations that we have. So we run a Grafana agent in our Kubernetes, and that streams all the metrics and all the logs to Grafana Cloud. And then we use the hosted Loki, the hosted -- it's not Prometheus, it's the Grafana Cloud alternative to Prometheus...

**Robin Morero:** Is it something like Cortex, or... Thanos?

**Gerhard Lazu:** Cortex, thank you.

**Robin Morero:** Cortex, yeah.

**Gerhard Lazu:** Cortex, that's exactly what it is, thank you. So they have their own Cortex version. And Loki is inspired by that as well. And there's Tempo as well for the traces, which we don't use. But we also -- we run two of each kind, so we use Grafana Cloud and Honeycomb. So we send our logs to both, and then we can pick and choose which one we want to use. Because we double it up. Have you tried Honeycomb for logs?

**Robin Morero:** I've tried Honeycomb. I really liked it. But when I'm setting something up for customers, I want to have it portable, so I can move the environments around.

**Gerhard Lazu:** Okay.

**Robin Morero:** I don't know if it's the same \[unintelligible 00:21:33.25\] but we're seeing a lot of worry about GDPR and \[unintelligible 00:21:37.06\] at the moment.

**Gerhard Lazu:** Yeah, I know what you mean.

**Robin Morero:** Where the data is stored. So depending on how that works out, they might want to move the data.

**Gerhard Lazu:** So for that, are you running your own Loki?

**Robin Morero:** Yes.

**Gerhard Lazu:** Okay. Do you use Grafana as well, part of the metrics system?

**Robin Morero:** We used a full Grafana stack, I guess. Grafana, Loki... Not Tempo yet, same as you, but Cortex at the background as well.

**Gerhard Lazu:** And how did you deploy them in Kubernetes?

**Robin Morero:** We deploy them with Helm at the moment.

**Gerhard Lazu:** And how are the developers finding the Loki interface? Do they struggle with it, to find the logs that they're looking for? I think it's still an issue, right? Because otherwise you wouldn't have mentioned it.

**Robin Morero:** It is. What we try to do there is to set up dashboards and finish lists of logs for their services. So each team has a dedicated dashboard, where they can find their most common logs, they can find their dashboards for the services that are active at the moment... And the same things for a service, to see service logs, service behavior. So we're trying to prepare it depending on tags, I guess.

**Gerhard Lazu:** I know that when we were talking you were mentioning about that you were thinking about... How does that link to what we've just discussed?

**Robin Morero:** Yeah, what we're doing is we're experimenting with setting up a platform. It might end up as a product one day, but it might not. At the moment, it's just trying to find out "Can we automated DevOps patterns better than they are today, so that we get a continuous reading of DevOps params, like how long does it take to deploy, how fast does it deploy to production, how often does it fail, and so on. So we try building these best practices into a platform and seeing where that leads us.

**Gerhard Lazu:** Okay.

**Robin Morero:** And we're doing that for individual customers at the moment, but we're talking about doing a platform for it, and \[unintelligible 00:23:13.05\]

**Gerhard Lazu:** Okay. What would this platform look like in terms of the big components? Obviously, there's going to be Kubernetes, but also a bunch of things on top of it. What are those things?

**Robin Morero:** Yeah, we're looking at what we shouldn't have, really, more than what we should have. We're trying to get rid of complexity first, to make it as small and light as possible, and then build up from there. For base, we're looking at K3s instead of Kubernetes, because it's more lightweight. And in terms of logging, we're looking at Loki, Grafana, instead of going with something like Elasticsearch, that consumes a lot of resources and is harder to maintain, in my experience. NATS for events. \[unintelligible 00:23:47.03\]

**Gerhard Lazu:** NATS, yes.

**Robin Morero:** I really like that one, it's amazing. And in terms of database, we are evaluating Yugabyte at the moment, with just like a \[unintelligible 00:23:56.25\] but horizontally scalable.

**Gerhard Lazu:** Interesting. And would you run all those services on the same Kubernetes cluster?

**Robin Morero:** They would run on the same cluster, but for different customers. So instead of multi-tenants, we try to do a single tenancy, for each customer, in this case.

**Gerhard Lazu:** \[24:16\] Yeah, so each customer gets its own cluster, or their own cluster, and that cluster has these components pre-installed. Okay.

**Robin Morero:** Different namespaces, but the same cluster. It could end up in different clusters, but at the moment we have it on the same on.

**Gerhard Lazu:** Different namespaces, but the same cluster... Is that what you said?

**Robin Morero:** Yeah, exactly.

**Gerhard Lazu:** So one customer will have one cluster, but different namespaces for their different teams?

**Robin Morero:** No, sorry. The infrastructure would be deployed in a separate namespace from what they're working on in terms of their own services. I guess that's kind of standard.

**Gerhard Lazu:** I see, okay. I understand now. I get it now. And how would they provision, for example, new Yugabyte instances, or a Loki? Would they share a single Loki instance across everyone?

**Robin Morero:** The customers we work with are mostly small customers - startups, scale-ups, and so on - so they don't really have all of these enterprise needs. So they would start with having just one instance of the database. And if that later becomes an issue, then we have to fix that.

**Gerhard Lazu:** I understand, okay.

**Robin Morero:** But at the moment, we don't have any of those customers that need more than that, really. So it's mostly one-team customers.

**Gerhard Lazu:** Okay, so those customers would have these components pre-installed... What about the ingress, or ExternalDNS, or things like that?

**Robin Morero:** Yeah, we have to set that up in each cluster as well. We're using Traefik for that.

**Gerhard Lazu:** Traefik, okay.

**Robin Morero:** Yeah. For ExternalDNS we're probably using -- we haven't decided that yet, so I'm not sure what I should say about that.

**Gerhard Lazu:** Okay.

**Robin Morero:** We're discussing leveraging the Cloudflare APIs.

**Gerhard Lazu:** Interesting.

**Robin Morero:** Yeah. But we're not sure yet. So any input, that would be interesting.

**Gerhard Lazu:** We do use ExternalDNS ourselves to manage all the DNS records. Until today we've been running it on the Kubernetes, which is like current production. Whenever we need to deploy a new version of production, which typically happens every year, so that when we don't do upgrades in place, we just set a brand new one, with the new version, and we migrate things one by one, do the service updates... If there's any issues with any of the new versions, we can always go back. So I think it's very similar to your two productions, as you mentioned.

**Robin Morero:** Yeah, exactly.

**Gerhard Lazu:** And ExternalDNS, in our case, it just talks to DNSimple, which is our DNS provider. It's fairly simple, that's all there is to it. So we use Ingress NGINX and cert-manager, but I can see how maybe if we could just use Traefik, which would manage certificates for us, maybe we will do that. So it's a consideration, for sure.

**Robin Morero:** Yeah.

**Gerhard Lazu:** And how will the code updates for the customers make it into production? What is the mechanism via which those updates go out?

**Robin Morero:** That hasn't been written yet, but what we're looking at is something similar to what we do today. They push their code to a Git repo, we listen to the Git repo, we throw it to Tekton, and Tekton builds it and deploys it.

**Gerhard Lazu:** Interesting.

**Robin Morero:** So we create pipelines for building and deploying code.

**Gerhard Lazu:** And Tekton - does it run in the same cluster?

**Robin Morero:** It runs in the same cluster, but in that other namespace. So in the platform namespace, I guess you could call it.

**Gerhard Lazu:** Interesting. Okay. So you run the tests and the builds; maybe mostly builds, sorry... Like, the dependencies, and building the artifacts, inside the same Kubernetes, with Tekton. And then do you push an image somewhere?

**Robin Morero:** We push the image to Harbor.

**Gerhard Lazu:** To Harbor, okay. And that also runs in the same cluster?

**Robin Morero:** Yeah, it does. I mean, we run it on specific nodes. We tag the nodes. So specific nodes handle a specific type of platform, heavy lifting, to not affect the customers at all.

**Gerhard Lazu:** Interesting.

**Robin Morero:** Yeah. So we're just trying to keep it simpler in terms of setup.

**Gerhard Lazu:** I would really like to see this setup, how it all comes together - all the components that you use... Is this something that you are thinking of maybe opening up to the public?

**Robin Morero:** \[27:53\] We're thinking about that, yes. We're doing a demo, we're working on that at the moment. Something that will be like a public demo. And then we plan -- what we're talking about is to release the CLI tool we're using as an open source tool, \[unintelligible 00:28:03.11\] but also to keep the platform, like the web-based management GUI, as part of our product.

**Gerhard Lazu:** Interesting. So what will the CLI tool do?

**Robin Morero:** The CLI tool will create a cluster for you, depending on your provider. What we've got integrated at the moment is just Hetzner, but it could be anything we write an interface for, really. Hetzner and \[unintelligible 00:28:22.29\] at the moment is what we're using.

**Gerhard Lazu:** With Hetzner, do you provide bare metal hosts?

**Robin Morero:** No we run it on the KVM.

**Gerhard Lazu:** On the KVM, okay.

**Robin Morero:** So we create virtual machines with KVM, and we run K3s on those machines. Sort of a cloud API.

**Gerhard Lazu:** Yeah. So what does the CLI tool do in terms of Hetzner? What happens there?

**Robin Morero:** The CLI tool creates a project for you, it creates your SSH keys to be able to secure the cluster, and then it creates KVM machines for you. It logs into those and deploys K3s and all the dependencies of the platform.

**Gerhard Lazu:** And on Hetzner - so I'm still trying to understand that integration, because you mentioned KVM. Do you talk to the Hetzner API to create anything? What does that integration look like.

**Robin Morero:** We tell Hetzner to create a new server for us. It should be this size, it should be this type, it should have these -- the \[unintelligible 00:29:14.20\] we don't really set there, but we have it in the configuration for that node. So we tell Hetzner to create a new node for us, a new server, and then we create a bunch of those, and tell them to go in the same cluster.

**Gerhard Lazu:** So those servers when they get created, what operating system do they use?

**Robin Morero:** Yeah, that's something we're looking at, but at the moment we're using Ubuntu. Standard one from Hetzner so far.

**Gerhard Lazu:** Okay, okay.

**Robin Morero:** We would like to have a \[unintelligible 00:29:34.13\] something lightweight. Just to get it faster up. So we're talking about doing a node pull for that; have always a couple of standby nodes that we just promote to "Use this now."

**Gerhard Lazu:** Ah, interesting. Okay. And on those physical, bare metal machines you create VMs using KVM. Is that right?

**Robin Morero:** Yes, but that part is like Hetzner at the moment. Hetzner creates the KVM for us. What we're going for is that -- there's a lot of KVM hosts, right? You can pick any host basically, and they have KVM support. So we want to be able to integrate any hosts that you want in the end. If you have a host that you want to use in your country, that's better compliant with your demands, we integrate with that one, and we get the same. The only thing they need to have is an API, but most of them do.

**Gerhard Lazu:** Okay, that's very interesting.

**Robin Morero:** So we had to find out type of standard to deploy to, and we chose KVM, for now at least.

**Gerhard Lazu:** Wow, I would love to see that code. That sounds super-interesting. I'm very curious now. Okay... Why did you choose K3s? That's a very interesting choice, especially for production... And I'll tell you why.

**Robin Morero:** I'd love to hear why. Like I said, this is an experiment, and we're trying to keep it as lightweight as possible. We wanna see how light this can get. What can we get by without having. And then we might \[unintelligible 00:30:47.12\] So that's what we're trying to do.

**Gerhard Lazu:** So K3s - I like it, especially for experiments. It's a very lightweight Kubernetes, and I know it is compliant. If you run any of the compliance tests, it's like a certified Kubernetes. So it behaves exactly like the real deal. What I have found, especially on certain operating systems like Debian, when they switch the IP tables to the newer version, their issues with K3s not being able to set the IP table rules correctly, and it was leaking rules... Which meant that as time went by, you end up having hundreds of thousands of IP table rules, to the point that everything would slow down to a crawl. So there were issues like that, which goes to show that the integration between the operating system and K3s sometimes can be problematic.

A better approach, again, in my experience, seems to have been operating systems that were built for Kubernetes, and that's like the entry point. You don't add Kubernetes on top of an operating system. The operating system is Kubernetes. And then when you provision the host, it's already -- mostly a worker, because the control plane nodes, they are managed... And I suppose that's where the value of managed Kubernetes comes in, where you don't ge to do anything when it comes to the control plane. That is the provider that does it for you.

\[32:10\] But I understand that from a GDPR perspective, and customers that need to control all of that, they need to know exactly where those are, what they are... And I'm not sure, GCP, for example - how do they do that? Because they have it in Zurich, in Switzerland; it's one of the places where they -- you can't get like a managed Kubernetes from a GKE, from GCP. Would that not be an option for you, to go for a provider?

**Robin Morero:** Yeah, we have some customers that want all of their traffic and data in Sweden. And in terms of hosting in Sweden, there's not a lot of hosts from there. There are options, but they're not as strong at the moment.

**Gerhard Lazu:** I understand. Okay.

**Robin Morero:** So even if we would pick a node in Sweden, the traffic would go through other countries on the way. So as long as it's not a deal-breaker for a customer, that might be a good option. But when it is, then we want to find a solution for them. And I wish I could disagree with you on K3s, but I do. I see where you come from, and you're totally right. And that's what we wanna do - I want to have pre-provisioned Kubernetes, specific nodes that just start up in KVM. So not put it into the existing operating system, but instead provision an operating system that's prepared for it.

**Gerhard Lazu:** I have been looking at this briefly. I haven't spent too much time... But if I had to solve the problem that you're solving, I would most probably look at something like Talos OS, which is an operating system built specifically for Kubernetes. Everything is controlled via the API. It's immutable, and it was built from the ground-up for that. So it's like a purpose-built OS, with rollbacks, with everything that you would need to get a good OS experience for Kubernetes specifically.

**Robin Morero:** Yes, that's one of the possibilities we're looking at. Also, Flatcar, I think... And k3OS.

**Gerhard Lazu:** Yes, Flatcar - that's another one. That's like the CoreOS, right?

**Robin Morero:** Yeah, I think so.

**Gerhard Lazu:** Yeah. That was shut down/terminated after the IBM acquisition. I know that was deprecated at some point, there was a fork, and Flatcar was the follow-up. I haven't used Flatcar, I have to say. I've heard of it, but I haven't used it.

**Robin Morero:** But yeah, we're going that direction. We just have to find something that works, that's the thing.

**Gerhard Lazu:** Okay. Another operating system that I was really impressed by recently was NixOS. This is very recent... I really love the declarative nature, and I realize that a lot is possible with it, which you don't even need Kubernetes for. And it's still early days, I'm still experimenting; I'm running my first production instance. I converted to the Nix package manager for one of my Macs... Actually, that's this week's episode, and that will give when we are recording this. That's the one which hasn't come out yet... But I really like some of the principles behind it, I have to say.

**Robin Morero:** I keep hearing that people like it. I haven't tried it a lot. I've read on it, but... Yeah.

**Gerhard Lazu:** I think it'd be worth experimenting with. Now, would you run Kubernetes on it? I don't know. But I liked the declarative nature, in that everything is configured via a config file, or a series of config files, and everything is kept up to date by this built-in autodeployer which keeps pulling down the config and it keeps applying it continuously. So you have like a systemd timer, which does that over and over again. That is a very interesting idea, I have to say.

**Robin Morero:** Yeah.

**Gerhard Lazu:** And rollbacks, and a bunch of things built-in. It is mutable. It's not like an immutable OS, in that you can't even write to partitions, which is something that Talos OS does... Because you're not meant to do that. It restricts you because everything -- I mean, you consume it via the Kubernetes API. That's how you're supposed to deploy your stuff on it. Not on the operating system directly.

**Robin Morero:** That's good, I think. I think that's a good approach for it. So we're basically trying to keep it portable at this state. We just want to build it, we want to test it, see how it works, and then we iterate.

**Break:** \[35:53\] to \[38:32\]

**Gerhard Lazu:** As a consultancy that sees many small businesses, many different teams, you get to experience a lot of different codebases, a lot of different approaches. Some are better, some are worse. They all can be improved in different ways. But you mentioned something which I've found really interesting. You mentioned about those haunted codebases. What did you mean by that?

**Robin Morero:** That's a term we use sometimes for a codebase that the developers end up being so scared of making changes to it, because they never know what will happen to it. It might end up with having to tests for a week, it might end up with bad bugs within production in a totally different area from what you're fixing... So they end up with this fear of making changes to the entire codebase.

We used to work with a customer like that, and they were running a really big test suite to make sure that it didn't crash anything. This test suite was taking like 40 minutes to run. So it was a slow feedback curve, and it ended up flickering about 50% to 70% of the time.

**Gerhard Lazu:** Okay. So any change going to production would have taken maybe an hour, maybe longer, based on this test suite? Interesting. Okay. And how did the team that was responsible for that codebase behave?

**Robin Morero:** It was a shared codebase. The test suite was shared between different teams. So there was this huge discussion with like five teams or something, "How should we approach this?" And some of us wanted to test specific parts, but there was a general feeling of fear. We didn't wanna do it, because we might end up being haunted by it.

**Gerhard Lazu:** \[40:06\] And what happened afterwards, after this discussion? What did you do?

**Robin Morero:** We tried to make it smaller, in the ports, but we couldn't really agree on how small we could make it, so I suggested putting metrics in there, measuring what value do we get from each part of the tests. If this test suite fails, what cost would it have made for the business, and how often does it happen? So the same thing that we do all the time - if you can't prove something, measure it and check the metrics.

**Gerhard Lazu:** Okay. That is really powerful, the scientific method, of course.

**Robin Morero:** But I was still met with some resistance, because there was this haunted feeling over it. They were afraid to do something -- everyone was afraid to do something with this codebase.

**Gerhard Lazu:** So did you end up putting those metrics in?

**Robin Morero:** We've put some metrics in there and we managed to make it a bit better at least. We fixed the flickering, but it went really slow, and we did little by little to make it happen. And we ended up not reaching the goal, before I left at least. \[unintelligible 00:41:00.06\] we could have done it faster, we could have put more metrics in place directly, and proved or disproved the value of the tests.

**Gerhard Lazu:** Okay. So do you think that if you had placed those metrics quicker, you would have gotten to a better place to determine what to remove and what to keep?

**Robin Morero:** I think so. We shouldn't have been so afraid of just making changes to the test suite, because if you keep being that afraid of something... I mean, if you see it no catching a lot of issues - and during my entire tenure at that company, I saw it catch, I think, three bugs. And if you just calculate the cost of this - not just the running costs, but the waiting costs, but there's also the maintenance costs of that test suite, and also the delaying in making any changes to the actual codebase... It ended up being really expensive.

**Gerhard Lazu:** Do you think that multiple teams sharing that test suite, or those test suites, was part of the problem, in that many people had to agree on what to happen, and as a result, that agreement never happened, because there was always someone thinking something else?

**Robin Morero:** Yes, I think so. I think that affects the psychological safety as well. Because if you're afraid that the other team will blame you for doing it, you'll probably end up not doing it. But I've seen the same pattern in smaller companies as well. When you start building up this feeling of fear when you want to make a change to the codebase. And it's not just fear, it could be just resistance; you don't wanna make this change before you go home today, because you might end up having to wait another half an hour for a test suite to complete.

**Gerhard Lazu:** Interesting. So do you think that if you had removed the entire test suite, that would have been acceptable? Would people have agreed to that? "Let's just remove everything and let's start over."

**Robin Morero:** I mean, it's risky, and people would not have approved of that directly. I wouldn't have either, but I would have liked to \[unintelligible 00:42:46.01\] and remove the most obvious parts first.

**Gerhard Lazu:** Okay. How long did it take you to be part of this, until you had to leave? Was it months? Years? How long did it take?

**Robin Morero:** Oh, it was at least a year-and-a-half. I think two years, something like that. It was an ongoing discussion. It wasn't all we discussed; there were a lot of other issues as well, and moving to Kubernetes, and so on. But there was an ongoing discussion about this test suite that never really landed...

**Gerhard Lazu:** Anywhere. Okay, interesting. So now with that experience, what would you recommend to teams that are still building out the test suites? So they don't have something which is quite as bad, but they have a test suite which is getting worse. What would you recommend?

**Robin Morero:** I keep hearing talk about you should have test suites for everything, and you want to have a hundred percent coverage, and so on. I don't believe in that, personally. Like everything, I think tests should be prioritized, compared to everything else you're doing on your platform or in your product. It could be security, for one thing. Do you want to completely forget about security because we're writing tests at the moment?

So what I'm saying is that make sure that you capture the value when you're writing the tests. And if you can, put the value in there; put a log that says "This test just failed. It would have cost you this much if you had actually done it in production."

**Gerhard Lazu:** \[44:02\] So I think that the tests that you're thinking about - they must be acceptance tests. They can't be unit tests, they can't be something that runs really, really fast. They must be expensive tests by design.

**Robin Morero:** Yeah.

**Gerhard Lazu:** Okay.

**Robin Morero:** These were integration tests between like 20 microservices or something like that. And the communication was causing flickers as well, in the data state between the services. So - very complex tests.

**Gerhard Lazu:** Interesting. So do you think that those were microservices, or was it more like a distributed monolith?

**Robin Morero:** It was a distributed monolith, combined with microservices. So it was in the process.

**Gerhard Lazu:** Because a microservice by definition - it's self-contained, and it exposes a public API, that there's like a contract for that, and that's what you really care about. As long as you don't break the API or at least there's like a way to version that, then things should be fine... And the teams - they shouldn't really share, I don't think, a test suite which tests all the microservices. Because then they're not microservices, they're something else.

**Robin Morero:** Yeah, that was part of the point I made, that I wanted to separate them and test the contracts between the services.

**Gerhard Lazu:** Ah, I see.

**Robin Morero:** So that's how I wanted to separate it. But in the end, there was a lot of data being affected. This was like processing data from one step to the other, and all of these microservices ports handled data on the way. So they were afraid -- there was a general feeling of fear that the data would end up being different if we made any changes in this entire chain. Like I said, it was haunted.

**Gerhard Lazu:** Yeah, I see what you mean. But again, that data is part of the contract, right? So as long as you implement the correct structures - and there must be specification for that data - then everything is fine. And obviously, you should do transformations between microservices. One thing which happens a lot is that the microservices don't do those transformations, and as a result, you're actually sharing the same specification or like the same data structure, and it's like an implicit one, so you don't make it explicit, and then you're afraid of changing it, because you don't know which microservice may break...

**Robin Morero:** Yeah, exactly.

**Gerhard Lazu:** ...because first of all, you don't know what data you'll be receiving. You're making assumptions, and everyone makes those assumptions, because you don't have those edges at the system... Interesting.

**Robin Morero:** And also, this was an old system, so some of these services were -- one was writing to the database, the next one was reading from the database... It was not a clear contract between all of these services.

**Gerhard Lazu:** I see, okay.

**Robin Morero:** And of course, that can be improved, but then we ended up with \[unintelligible 00:46:24.05\] Making any change to it was so fear-laden that it never happened.

**Gerhard Lazu:** Would you choose a microservice architecture?

**Robin Morero:** I'm a fan of microservices. The real one, not this with a monolith.

**Gerhard Lazu:** So what does a good microservices architecture look like to you?

**Robin Morero:** I think of it like minimizing risks. You can deploy one part of it separately from the rest. That's the big part for me. And then I want to have a clear contrast between them, I want to have a clear responsibility. What is this service responsible for doing? And I want to be able to quickly replace the service as well, to make it prototypable. We create a new prototype service that might or might not work better, but we're able to throw it away when we want.

**Gerhard Lazu:** So how would you capture those contracts between microservices? What would that look like?

**Robin Morero:** I've been experimenting with that a lot, and we've done protobufs to set the version of the contract as a defined state. We've also been doing REST and trying to keep like "This version of the REST protocol is the contract between this version of the service and the next one." Because you might end up wanting to promote one version of a service, right? You've got a transformation service, and you want to be able to run version one and version two in parallel. So then you need to be able to handle both the contracts for version one and version two.

So I think that's \[unintelligible 00:47:35.21\] I think that would be nice to have some kind of standard for this. I haven't seen one. I'm not sure - have you?

**Gerhard Lazu:** No. I am still on the monolith bandwagon...

**Robin Morero:** Ah... Alright.

**Gerhard Lazu:** \[47:46\] Yeah. I mean, as weird as that sounds. Kubernetes is great, and I think many good things came out of it, but I think all this microservices craze - they're a lot more complex than people think, and there are some hard problems, like the one that you've just mentioned... And I haven't spent enough time in that space to know what the solutions look like. But I'm not seeing problems with monoliths, especially when you have something like the Erlang VM, which scales really, really nicely. And you can have multiple applications running inside of that Erlang VM. So it's not just one application. And you have a supervision tree... So I come from that world where -- obviously, I did quite a bit of Ruby, and then for a few years I was in Go, and then for many, many years I stuck with Erlang, including Elixir, and Phoenix... And I see a lot of benefits to that approach.

**Robin Morero:** But would you really call an Erlang application a monolith? I would probably call it like an orchestration layer, or something like that.

**Gerhard Lazu:** You can have services within an application, but it's all about message passing. And because you pass those messages, you're a lot more aware about the contracts. So you don't call functions, you just send messages to whoever is interest, whoever the subscribers are, wherever the processes are.

**Robin Morero:** Yeah, exactly.

**Gerhard Lazu:** So it's a lot more implicit, front of the mind for people... For example, hot code reloading - very few do that... Which is how you would migrate from one version to another, when you change how the message is passed. typically, you have a database, a PostgreSQL, where you write data, and then when a new version comes up, you run a migration, and then the old version may break, but... Like, for example Changelog - we never had that happen. It's not like the most complex app, but it never was an issue.

**Robin Morero:** I think you've been blessed there, working with Erlang and Elixir. It's a bit different. If you work with a big Java application, it will behave a bit differently from what you're seeing, I think. And that's my background, I come from a world where I worked a lot with big, massive Java applications. And you end up -- I think microservices, I don't see it as much as a technical solution to problems, but rather as an organizational one. How do you organize around your codebase, and how do you work with it?

**Gerhard Lazu:** Do you know who else thinks like that?

**Robin Morero:** Santa Claus, maybe? I don't know.

**Gerhard Lazu:** Dave Farley. He wrote a book recently , "Modern Software Engineering." I've finished reading it. And that is one of the things that he says in that book.

**Robin Morero:** From people that have been doing microservices for a while, I think that's pretty common... Because that's what we're after. We're not after the technical solution. It's not a technical silver bullet; it's expensive, but you want the organizational parts. \[unintelligible 00:50:18.23\] a good combo.

**Gerhard Lazu:** Interesting. Yeah, I do have to say, if you're using Java as an org, and you wanna do something else, maybe you should consider Erlang, and Elixir specifically, rather than going like Go... Because that has its own complexities. But again, I'm biased, because that's what I've been doing for many, many years, and I had success wih it, and it seems to work.

**Robin Morero:** It depends on your setup. Because we're doing microservices, and with microservices, Go is a pretty nice match... Because you end up with one static binary, and it's nice to package it, nice DevOps.

**Gerhard Lazu:** Yeah.

**Robin Morero:** If I was doing Erlang/Elixir -- how do you manage that with Kubernetes? Is that straightforward?

**Gerhard Lazu:** It is, because we just build container images. So there is a container image, it updates like any other thing... There's a deployment for it, which manages the different versions... When there's an update, it picks up the update; we're using Keel.sh. We are in the process of replacing that with something else... But as soon as there is an update to the image, it pulls the new image down, it starts the new version... The previous one is still running; if the new one for whatever reason fails, then it reverts back, it rolls back. Actually, it doesn't even take it down like the previous one. Part of the new app booting - it does its migrations, for example. We never had a migration not work in five years now; so it was not an issue.

Now, I do have to say it's a small team, so we're not 50, 100 people developing on it. But I think there's a lot to be said about monoliths that work in even big teams, and mono repositories.

**Robin Morero:** What I could see happening in a bigger team, if you work like that - I'm not saying this is the case; you'll have to tell me if you've seen it, but... What would happen when you have at least 50 people working on that codebase and you have it in the same monorepo? Wouldn't that be pretty big? Wouldn't that be resource-consuming if someone made an error somewhere that ate up a lot of memory, and so on?

**Gerhard Lazu:** \[52:15\] Apparently, Google does it successfully... And Google - they have one of the biggest mono repositories in the world. GitHub does the same thing, they have a monorepo for all of GitHub. A lot of it still runs Rails, which is a framework. I don't know others... Facebook, I think they also have a mono repository. I don't know how they've made it work at that scale.

There's a couple of conversations which I've had with ex-Google employees, ex-Googlers - Xooglers, as they're called - and they have great things to say about how they approach this. Apparently, they have it figured out. But they're a massive org.

**Robin Morero:** Yeah, I keep hearing that they have separate tools for it to manage this monorepo, because it's so big.

**Gerhard Lazu:** Yes, that's right.

**Robin Morero:** But how would you do -- I mean, they still don't provide that as one service, right?

**Gerhard Lazu:** Correct, yes.

**Robin Morero:** So how would you do that if you have a big Erlang application that grows all the time, that becomes massive? How would you handle that in Kubernetes? It would be like one deployment?

**Gerhard Lazu:** I would love to speak to someone that had that problem, because I haven't.

**Robin Morero:** Alright.

**Gerhard Lazu:** I would love to have that second-hand experience, from someone that did it first-hand... But yeah, I don't know.

**Robin Morero:** Alright. \[unintelligible 00:53:26.09\] or something like that maybe.

**Gerhard Lazu:** I think that is a very complicated problem. So you need to write migrations between versions, because you expect the previous version to be in-placed, hot-swapped with a new one, and it needs to know how to do the transformations, like function calls and stuff like that. Now, Kubernetes is not optimized for that, because the expectation is there will be new versions starting up. You won't do an in-place upgrade. So it's expecting containers, it's expecting a SHA which changes between deploys... And with this hot code reloading you wouldn't have any of that. You'd have like a long-running thing which can automatically update itself, and that is at odds on how Kubernetes likes to do things.

**Robin Morero:** I see your approach, and I think for small companies I think a monolith isn't necessarily evil. It's just when you grow bigger, and if you wanna scale with it. I like the risk minimizing that microservices brings. It's not necessarily less work, it's not necessarily a silver bullet, but it minimizes risk when you deploy something.

**Gerhard Lazu:** One thing that I would consider as an alternative to that - I would consider a function as a service approach. You know, the microservices are the functions, you can have multiple versions, and I would consider using a system like Knative, for example, to handle that complexity for me. Or using Tekton; that was the build part of Knative. And there's very interesting tools that do, for example, eventing, and all those primitives are abstracted away, so you don't care, for example, which message broker you use. You just use the Knative eventing primitives.

I think that's a very nice way of doing microservices as an adult, as a grown-up, rather than having ad-hoc approaches. I like that idea, and I think that's what I would recommend to scale an organization, versus microservices.

**Robin Morero:** Yeah. And that will be part of the experiment. Knative is something we wanna try more.

**Gerhard Lazu:** I mean, I've spent a couple of months on the Knative team, on the eventing side, and that was a very interesting experience. There's some very interesting people in this space, that I wouldn't mind making a few introductions to.

**Robin Morero:** Sure.

**Gerhard Lazu:** I think they would enjoy it as well, to have that conversation. But I really do think that something like Knative is a better approach than microservices.

**Robin Morero:** We kind of wanna try it in the same platform. We want to have it port, like selectable. And then we can iterate it. We can try it and see how it works, and we can continue working with it.

**Gerhard Lazu:** That is a great idea. As we prepare to wrap up, what would you say is the most important takeaway for our listeners.

**Robin Morero:** \[56:05\] I would just say that try to question things when you do them. Always try to find a value in what you're doing, and if you have issues with that value, try to do something else, if you don't see enough value. If you're doing something that you think might be wasteful, try a different approach and see where it leads you. Don't be afraid to try new paths.

**Gerhard Lazu:** Yeah, I like that.

**Robin Morero:** That sounds really tricky, but... Yeah.

**Gerhard Lazu:** Questioning things, including tests. I suppose if you do TDD properly, it's less of an issue. But if you have a test suite that you've inherited or that you're struggling with - well, maybe that wasn't grown in the TDD sense. Maybe you have too many types of tests that are complicated. And listening to that pain is important, and responding to it appropriately. Not letting it rule you. Not being afraid of shipping into production, because that's a terrible place to be in.

**Robin Morero:** And I would love to hear takes on how to measure that pain to deploy something. Any ideas on that would be great.

**Gerhard Lazu:** I think we instinctively know when the work that we do is a lot more difficult than it needs to be. So if you want to learn from whatever you're doing, like "Does this thing work?" Isn't that like the first question that we have? And if you think or if you're convinced that it works - well, where is the proof to back that up?

**Robin Morero:** Exactly.

**Gerhard Lazu:** Are your users telling you that it works, or do you just think that it works? And assuming that you're wrong, that is a much better proposition, because that's how you learn. Like, "I think I'm right, but let me find out what others think." Because the more diverse opinions and the more real-world opinions you get, the better it is.

**Robin Morero:** And "works" - that's kind of a gray scale, right? It can work for you, but it might not be the best way to do things.

**Gerhard Lazu:** Exactly.

**Robin Morero:** So you want to still improve that over time.

**Gerhard Lazu:** Showing it to people, getting it out there and seeing what they think... And building on top of it. Because once you get it out there, someone else may say "You know what - I have a better idea. How about this? Have you thought about this?" And then you build on top of each other, for sure.

**Robin Morero:** Yeah, because a lot of the assumptions we're working with today are based on '80s or '90s, how we did it back then. We try to \[unintelligible 00:58:08.18\]

**Gerhard Lazu:** Okay. So challenging assumptions. I like that. Which assumption have you challenged recently?

**Robin Morero:** We talked about having code reviews and not having code reviews in our team.

**Gerhard Lazu:** Okay.

**Robin Morero:** Code reviews are really popular with a lot of people, and it quickly becomes a heated discussion. But the issue I have there is why do you do the code reviews? In terms of learning and sharing - that's excellent. Perfect. That's a tool you want to use, right? But do you want to enforce a tool to always be used, or do you want to use that tool when you need it? And that's the question we have been struggling with.

**Gerhard Lazu:** I read this really interesting article which is on this very topic about Ship/Show/Ask. It's on MartinFowler.com. Rouan Wilsenach wrote it; I'll share this link in the show notes. And what he's saying is that Ship is commit straight into main, and get it into prod. So not a pull request. Show is when you create a pull request, but you don't wait for anyone to approve it. You just have it there, so you capture the change as a pull request, maybe add some context, and get it out there. So you merge it yourself. Ask is when you're not certain -- oh, and I forgot about Show... Also, the code review may happen after the merge. So it's an option, but it doesn't have to happen. The Ask is obviously when you have to wait for the feedback before you merge. And I think that's the pull request model that you're thinking about. And you're right - if we always have to ask, it's a very slow way of getting changes out.

**Robin Morero:** And what I've been seeing is that when we work with code reviews a lot of times we didn't see a lot of value, because it ended up someone not really having the time to look at it. You have to change your focus, you have to understand what the code and the business case does, and then you have to look at it. You can't just like "Oh, that's code. It looks good."

**Gerhard Lazu:** \[01:00:03.13\] Interesting. So I suppose this is in the context of companies that don't have maybe outside contributions. It's not like a public repository; it's just private.

**Robin Morero:** Exactly. But also, if you look at some of the open source projects - look at the Kubernetes codebase for one thing, and look at the threads in there after a code review, how long it delayed \[unintelligible 01:00:23.14\] for a feature to reach usability. I'm not saying it's bad, because it might lead to a really good discussion, it might lead to a better solution... But there is a cost there. It's not free of charge.

**Gerhard Lazu:** Yeah, I do have to say I'm a big fan of pushing straight into main, and finding out if it works or if it doesn't really quickly. Getting it out there into prod, seeing if it breaks anything... And by the way, if you have a resilient system, it should catch these failures.

**Robin Morero:** That is the thing, you want to make the system resilient instead. If it fails, it's your problem, you did it wrong. It should not break anything; it should just continue rolling.

**Gerhard Lazu:** Exactly. That's a really interesting idea. I like it.

**Robin Morero:** But just look at Kubernetes -- I was looking at the API a while ago, and there were issues in the API that had been laying around for four, maybe five years...

**Gerhard Lazu:** Wow... Okay.

**Robin Morero:** That's in the infancy of the API, I guess, in Kubernetes. It has been around that long.

**Gerhard Lazu:** I think a project as big as Kubernetes, with so many people contributing to it and making changes, there is bound to be issues like this, right?

**Robin Morero:** Yeah, exactly.

**Gerhard Lazu:** They just slip through the cracks, and they're too complicated, and people can't find easy solutions to them, so they just stall...

**Robin Morero:** Meanwhile, the discussion builds up. There's new people coming in, and new people having the same problem, and nothing happens. So what will happen down the line, like ten years from now? Will we still have a Kubernetes, or what will be instead of that?

**Gerhard Lazu:** Interesting. Well, I hope that in ten years we'll have another conversation, hopefully even before that, to see how that plays out. Because that is, indeed, very interesting what will happen. Okay, so is this new platform, the one that we talked about, something that will be coming in the next six months, or next three months?

**Robin Morero:** It will be released as an early adopter version within at least six months. Probably within three. We wanna try it with some internal customers first, to see what the reception is.

**Gerhard Lazu:** Interesting. Okay. Well, I would definitely like to be part of those early adopters, to see what it looks like, kick some tires, for sure, and I would very much like to share anything that you have around it with our listeners. Maybe they will be interested too, to see how you're thinking, what you're thinking... Even if it's just like a blog post, or like a demo... I think it will be interesting to see.

**Robin Morero:** I think the way to see this is like an evolutionary experiment, and see where that leads. If you like it and you can use it, then we'll help you, we'll get you started and we'll try to see if we can do something better with it. But if there's no interest, we'll just probably just drop it.

**Gerhard Lazu:** Okay, interesting. Yeah, checking if it works. I like that. That's \[unintelligible 01:02:43.16\] Well, Robin, it's been a pleasure talking to you. Thank you very much for making the time today, and I hope to talk to you again soon. Thank you.

**Robin Morero:** Thank you.

Break: \[01:03:05.06\] to \[01:04:01.10\]
