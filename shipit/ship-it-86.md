**Gerhard Lazu:** Hey, Lars. What is new?

**Lars Wikman:** Oh hey, Gerhard. I don't know that there's a lot that's new for me.

**Gerhard Lazu:** Okay.

**Lars Wikman:** I'm mostly doing the same things I was doing the last time I was on the show.

**Gerhard Lazu:** Right. So what is new in the world of development, in your world of development, since June 2021, which was the last time that you were on the show? ...on Ship It. Not kaizen. Kaizen is a special.

**Lars Wikman:** Yeah. When I was on Changelog and talked about ID3 tags, that's a little bit different than Ship It... But yeah. All in all, I haven't changed much of sort of my operational stuff. So you did a lot of work to try to get me into k3s, and ArgoCD, and things... And it was very interesting. It didn't change what I was doing.

**Gerhard Lazu:** Very interesting. I think it's interesting that it didn't change. Okay. Okay. So in June 2021 we had episode seven. The title was "Why Kubernetes", and we did a follow-up, where I joined you on your stream, on your YouTube stream, and we went through k3s and ArgoCD, deploying with k3s and ArgoCD. And you even wrote a blog post - thank you very much for that - with the video embedded.

**Lars Wikman:** With the amount of effort you put into your presentation...

**Gerhard Lazu:** I know, right? It took a while.

**Lars Wikman:** ...I was obliged.

**Gerhard Lazu:** And that's something which caught my attention. So you wrote, "After the show, I primarily have more nuanced feelings about the whole thing. I see advantages to this approach, but I would say I still see too much mystery and magic in it for my taste. Things are doing stuff and I have no idea what's what." So now the ideas had time to crystallize, you slept on them for many, many months... Actually, even more than that, right? That was like a year, or two. Anyways, where do you stand with the whole Kubernetes landscape, cloud-native...? What is your take?

**Lars Wikman:** I would definitely dig into it if I felt I had workloads that required it. So if I was managing hundreds of nodes, I don't know that there are a ton of other tools worth looking at. Because most of the effort in the world of ops is going into wrangling things with that particular ecosystem and toolset. And the last time I looked at sort of, "Oh, I want a decent, standalone CI/CD kind of deal..." I'm "Oh, what are popular options right now?" Tekton, ArgoCD - they assume Kubernetes; at least I believe Tekton does, and I assume Argo does as well.

**Gerhard Lazu:** Yeah, ArgoCD as well. Both. Yeah.

**Lars Wikman:** that's not generally what I'm looking for when I'm looking for a specific tool, because that's not what I'm running. But there are cases where I would certainly reach for it. And I think the k3s kind of option is the closest one that I might reach for for something I want to run. If I have more complex needs, or if I need more elasticity, I guess, and so, workloads... And I really don't. Generally, I believe more in setting up a dedicated host or two, and just cranking performance and cost per watt out of that, essentially... Because you can get more performance in that regard. you're not paying the overhead of managed services and stuff.

**Gerhard Lazu:** I find that really interesting, because it is a world where I used to be a long time ago, and I always thought that this is what improvement looks like. But what I didn't realize is that a lot of people saw things differently. And people that even I know. And that's why I thought this conversation would be a good idea, because you see things differently, and they work for you. And that is really important. It works for you, you're comfortable with it... And I imagine that the people that you work with are also comfortable with it. So what does your production look like? if you had to pick production right now, what are you most comfortable to pick for production, in terms of operating system, in terms of packages, in terms of CI/CD... What does that look like?

**Lars Wikman:** It's a tricky one. I think I'm still a bit in exploration there... Because what my current day to day production looks like is pretty dominated by what my current client is. So I do consulting, and run a team for a product that's being developed at one of my clients. And they are we run things on Fly. I picked Fly because we -- we were doing an Elixir project, and we want to reduce the amount of ops we have to do, and just focus on mostly development.

\[06:19\] And I will say, I've been pretty happy with Fly. It has been a mixed bag, because this -- it's still an early company, it's still an early platform. So definitely sort of a mixed experience. But they essentially do what a Kubernetes type solution would do for me. They do platform engineering, so I don't have to; that's kind of the idea of platform as a service. But I still have to fiddle around with a bunch of YAML, and CI/CD pipelines, and all of that... And currently, that runs in GitLab, because the client had GitLab when I came there.

So I rolled with whatever was there, and made some choices based off of that, based on what I see... Sort of "Oh, the team's experience level is about yay-high. Okay, we should not spend a ton of our time on the server. Someone else should deal with most of the ops."

If I needed to get something off the ground on a budget, or if I built my own SaaS, I think I would probably set up a dedicated server for it, potentially to have the failover. It depends a little bit on the service. Not everything needs to be highly available, really... And in that case -- right now I'd probably pick up Debian, or Ubuntu, and I'd be slightly - not thrilled with that choice, because it's not ideal, but it's what I know well enough. Nix seems like it would be cooler; I'm not sure how convenient it would, be because I haven't explored Nix yet. There's, of course, nice things about immutability. But for me, I like to try to package as much of the deployment aspects of the app into the app itself. I run Elixir applications that can provision their own SSL certificates, for example. And whether I would sort of include NGINX, or a specific load balancer, would depend on sort of "Do I need high availability? And in what way do I think I could conveniently provide that?" Sometimes you can load-balance with DNS, sometimes that's not really appropriate. Sometimes you need something in front of your application, sometimes you don't. So there's always those trade-offs, but I like to boil away as much of the layering as possible, as many of the layers as possible... At least when I don't feel I need the layers.

And there's a big difference between doing Elixir and when I was doing Python. Because if you were doing Python, and you set up an app server, you absolutely should put NGINX in front of it, because that app server was never intended to meet the world. But when you're dealing with the Erlang VM, and well-established servers, it's "Yeah, no, they're fine." I've seen a lot of people set up Cowboy, which is the common Erlang and Elixir web server, and be "Oh yeah, we had cowboy, and then we had NGINX... And we had an outage on the first big day, because we had a misconfigured NGINX." It's "Okay..." Both NGINX and Cowboy can, of course, handle a ton of load, and the more layers you have, the more you sort of have to make sure that they're all playing nicely. That's sort of what I want to avoid.

**Gerhard Lazu:** \[09:45\] I really like this -- it's not minimalistic, it's almost like it's a very simple approach to running something in production, that you know can handle the load really well. And I think that's really important. I think Go can be a little bit like that, for people that run Go. it can just terminate the SSL perfectly well, it can serve a lot of connections, it scales really well on the CPUs, on memory, all that stuff. Really, really good.

Other programming languages are a bit more complicated. You mentioned Python. I know Ruby, from personal experience, is one of those two.

**Lars Wikman:** Node...

**Gerhard Lazu:** Node.

**Lars Wikman:** Node is super-fast, but it is fast in a very particular way.

**Gerhard Lazu:** Oh, yes. Oh, yes.

**Lars Wikman:** And scaling Node can be challenging, and there are footguns with regards to CPU-bound loads in Node, that Go and Elixir have designs to prevent. Or at least as far as I know, Go has that.

**Gerhard Lazu:** Oh, yes.

**Lars Wikman:** I know Elixir does. Or Erlang.

**Gerhard Lazu:** And there's like another up and coming one, Rust, which is even more efficient from a memory perspective, from a CPU perspective. So there are certain languages that are encouraging a simpler operational model. And I think that is something important that many people miss, because they are wondering, "Why do we have to do all these things?" Well, maybe it is your language. Nothing wrong with the language, it's just the trade-off of it. And you find it the easy way or the hard way, but you will, eventually. And you can try and resist it and say "No, no. It can do this." No, actually, not all languages can do all the things. And again, it sounds a bit simple, I suppose, but... There isn't much to it.

So trying to close this loop, I'm wondering, how much do you think is your choice of Elixir in production down to the simplicity that you can pick?

**Lars Wikman:** I certainly think my choice of Elixir influences how I want to set things up a lot. Whenever I explore sort of doing multi-language ecosystems, or it's like "Oh, yeah, I need this tool from this language, and this tool from this language, because it would be infeasible to reimplement", then the ops start shifting. The shape of the plan starts changing. It doesn't have to change much sometimes, but it's like "Oh yeah, you need this Node server thingy standing up here." "Alright." " You probably want to put NGINX in front of that."

There's also -- depending on the work your machine is doing, Elixir has a machine learning project now. And if you're doing machine learning, of course, that really affects your ops, and it could be a good reason to use this sort of Elastic Cloud Service, because if you want to train models on really fast hardware, you probably want to rent that, rather than pay $10,000 for one tensor card. It's just sort of cost-prohibitive to set that up, and there's a lot of sort of shipping data back and forth... And I can see why people do that in the cloud a lot of the time. And Elixir and Erlang, as you know, are not ideal for number crunching. And this is something I'm probably going to do a small write-up about soon, but Python is not ideal for number crunching.

**Gerhard Lazu:** Yup.

**Lars Wikman:** But it is the de facto language for machine learning and AI, and that has nothing to do with Python as a sort of implementation, because everything, every bit of it ends up going to C or C++ to perform.

**Gerhard Lazu:** Exactly. Yeah.

**Lars Wikman:** Or Rust, I guess... I don't know if people write bindings in Rust under Python these days.

**Gerhard Lazu:** Have you looked into Rustler?

**Lars Wikman:** I'm familiar with it. Since I don't write Rust, I have no reason to poke it further. But yeah, Rustler and Sigler allow you to do Rust and Zig in Elixir. Good stuff.

**Gerhard Lazu:** So what does your deployment artifact look like? When you push code into production, what are you actually getting out there?

**Lars Wikman:** \[14:04\] So my ideal is the Erlang release... So as close as you can get to a Go binary, because I think Go does a better job of that than Elixir and Erlang. But there are reasons why Elixir and Erlang do it the way they do. And that has to do with a lot of interesting sort of operational capabilities that Elixir has, that essentially nothing else has. Hot/cold updates, which no one does. Almost no one does. But they can, and that changes the shape of things.

But yeah, something pretty static that you can just ship over to the machine - I'm not a super-fan of containers. They're super-important if you want to treat everything the same, and if you want to sort of package for a larger ecosystem. It makes good sense to use them then. But shipping a Go binary inside of a container seems odd to me somehow. It's so much overhead, even if it might, in reality, cost nothing... Because the overhead is quite low. The real overhead is quite low performance-wise. Complexity-wise, I think it adds up.

**Gerhard Lazu:** Okay. So if you're not using containers to get those Erlang releases out there, what do you use?

**Lars Wikman:** Oh, you know, FileZilla, copy-paste... No.

**Gerhard Lazu:** \[laughs\] Rsync? Come on... You have to use Rsync.

**Lars Wikman:** No.. WinSCP, you know...?

**Gerhard Lazu:** Oh, yes. I remember.

**Lars Wikman:** No, it would vary... And right now, I don't ship a ton of things to my own servers, but generally, it's just SCP when I do. The things I run for myself, for low-scale production, that's just \[unintelligible 00:15:49.09\] And as I mentioned, for clients, I'm currently doing Fly, some Fly deploy command, which does ship containers...

**Gerhard Lazu:** Yep. I was thinking about that. So do you build a container with Fly, or do you let the Fly CLI just figure it all out? Use build packs, and...

**Lars Wikman:** Our CI/CD builds the container.

**Gerhard Lazu:** Okay.

**Lars Wikman:** So we have -- that's something that I grabbed from our conversation about k3s and your demo of ArgoCD. I really like trying to pin down sort of "This is what we're running on this environment, and this is what we're running on this environment." I haven't quite gotten it to the point where it's all defined in code, and there are no sort of manual steps to a release. There are a few reasons for that that are practical and annoying. But all in all, it's like, I want to know which hash we're pushing. So in the end, I get a container image that has the hash of the backend system and the hash of the frontend system that are baked in, and that's what we push.

**Gerhard Lazu:** Yeah, that's right. Yeah. To be honest, containers are, in my mind, great as a distribution mechanism. It is a standard distribution mechanism. If you had to ever deal with Deb packages, or RPMs, or tar.gz's - whatever, it doesn't really matter - it is a standard distribution mechanism for code, and you can put more things than just code. And it's easy to push, it's easy to pull those artifacts... And the way the layers are structured, and the way you can reuse layers, it really helps in terms of like - the operating system hasn't changed. There's like some extra layers which we added on top, and it knows how to do that really well. The tooling knows how to do that really well. So that is something which I find very, very convenient. Okay, what about things going wrong? So if things go wrong, for example, in your production, what do you do?

**Lars Wikman:** Swear a lot...

**Gerhard Lazu:** Okay, we have to start with that, right? "Dammit!" Table flips...

**Lars Wikman:** \[18:01\] Yeah. So generally, the most important parts are to make sure to have a backup strategy in place, and some kind of disaster recovery. And one thing I've tended to do with my backups that I set up on my ad hoc servers, it's like "Oh, I need to set this up, and set this thing up" etc. It's like, my sisters need a website, and I set up Ghost for them, and I don't want to lose their data at some point, so I set something up to run a regular backup, and shove that off to an S3, because S3 buckets are the way of just putting files somewhere and not having to care about them... Especially when the files are small. But then I tend to also script reading back the backup, shoving it into a table, and verifying that it's roughly what I expect.

**Gerhard Lazu:** Very important, right?

**Lars Wikman:** So that's sort of the simplest disaster recovery approach. And it's similar to what I would do for a production project where I'm running dedicated infrastructure, and sort of having serious customers, and all that. But there would be more things for more serious projects. For example, I need to find out when drives are full, when OM killer strikes, that kind of deal. And in those cases, right now I'd lean towards Grafana, and things, because you can get those and set them up on your own, and there's good tooling for it in Elixir. Thank you, Alex.

But I haven't been thrilled with Grafana. I think my best sort of APM-ish experience was when I worked on a product that used New Relic, and this was a number of years ago... But just because it really did give good insights, and then they charged out the nose for it. I think Datadog is probably on the list of what I'd look at today for a more serious install. Honeycomb has come up enough times that I would definitely take a look... But some kind of tooling like that. And then that kind of tooling, I'd rather not run myself, I think. Or it would be a separate server, just to make sure that when that one goes down -- like, I want an either/or. I don't want an and.

**Gerhard Lazu:** Yeah, for sure.

**Lars Wikman:** "Monitoring went down, and then... Production went down."

**Gerhard Lazu:** No, no, "Production went down. Let's check monitoring. Oh, dammit. Monitoring is down as well!"

**Lars Wikman:** Yeah.

**Gerhard Lazu:** Okay.

**Lars Wikman:** So now you need monitoring for your monitoring. And that sort of loops forever. And that's just infinity servers. That's no good.

**Gerhard Lazu:** Yeah. I'm still hung up on the CP thing that you mentioned, like how do you get those Erlang releases out there - just CP them. So it sounds very manual to me.

**Lars Wikman:** Yes. And that's not a part I love about it. So I've been looking at different tools that might sort of fit the trade-offs I like... Because it's not -- like, I need to find a tool that can do this. There are infinitely tools that can do this. It's just like getting a file to a thing; you could do it with the Git and WebHooks, you can do it with sort of GitHub's WebHooks, or GitLab's WebHooks, or you could do it as part of your CI/CD, or you could do this, or you could do that... And I would probably initially just set it up so that the CI/CD makes the call and shoves the release.

\[21:43\] Now, if you're on a dedicated server, how do you do a nice blue/green deploy, a rolling deploy? It gets a little bit more tricky then. And if you have two dedicated servers, like - okay, yeah, then you can do blue/green in sort of a traditional way. Something I want to explore is how to do a nice blue/green deploy on a single machine, minimally; and ideally, the application itself knows how to wrangle it. And I think I have two approaches that I'd like to explore, that I have not yet... One is straight up that the application tells IP tables "No, no. Route that port to me now." And if it fails sufficiently, it will hand it back, or the other app will sort of see error rates and hand it back, or steal it back, I guess... Or just manually, I can switch it back by telling the app "No, you're the boss. That one failed." It depends on how sort of automated you want to be about it, but the point being, you have multiple versions of the application on the server, so you don't overwrite your previous one; that seems unnecessary. Being able to stand up an entirely new one, let it settle in, and then let it start taking on traffic, and maybe even taking on a subset of traffic.

Another one, which is even sort of moving it one step further, is that I believe there are some good options you can use to share a socket...

**Gerhard Lazu:** \[unintelligible 00:23:16.11\] that's the one, yeah.

**Lars Wikman:** So the new one will simply start getting the traffic, and the old one can be faded back into the background.

**Gerhard Lazu:** I think at that point you are writing your own orchestration layer in the app, right? Because that's what ends up happening. Like, how do you orchestrate a new release? And even before that, you still have to run your tests, you still have to get the dependencies, you still have to do a bunch of things, right? Maybe there's assets, static assets that you have to digest, and put them in the release.

**Lars Wikman:** Yeah, but that's on the build side, right?

**Gerhard Lazu:** Right.

**Lars Wikman:** So let's say you're using a CI, whatever CI you are, to do all these things; you end up with an artifact that's okay to get out to production. And then that's where the CP comes in. CP, as you say - okay, you could do that in the CI, to get it out there. You have a single host, so then you don't have to worry about having multiple hosts to get this file out. And if it doesn't get out to a bunch of hosts, how do you -- do keep retrying? What happens if you consider it failed? What happens then? And then, when it's out there - well, what happens with that artifact? Maybe all you have to do is put it in a certain place, on disk, and there's something else which is watching, if there's like a new file, or a new directory, whatever the case may be - but most likely a new file - and then something else needs to happen. And if you are using hot code reloads, then it gets even more interesting, right? Because you have to have code that upgrades from whatever version is running to the new version, and that is not an easy -- you have to be very disciplined, is what I'm saying. It's not an easy thing to do.

So - okay, let's say the new version is running, and - what else needs to be aware of this new version being out? You may need to notify something. Again, before you know it, you have like a whole orchestration layer, which is split between your CI and whatever this thing is; some code in your app, for example.

**Lars Wikman:** The whole notify something else is probably what I'd consider -- when you hit that point, like "Oh, but there are other services, and they need to be notified when this goes out", and yada-yada-yada. Then you are probably not a monolith anymore. And my approach definitely is aggressively monolithic.

**Gerhard Lazu:** I think I think that's a good one. But again, a monolith - I think it's a good idea, and I can see a lot of premature optimizations; people going to microservices, people going to like even serverless... That in itself has like a whole load of things, operational concerns that people need to be aware of. And there is no free and easy lunch. You have to earn it, one way or the other. And a monolith has certain trade-offs, but it has a lot of things to like about it.

\[26:19\] We have been successfully running a monolith for a long, long time. However, there are external systems that the monolith needs to interact with. Your monitoring, your logging, your exception system. The monitoring is both of itself, and an external system which monitors it. So do you notify there's a new deployment? There's a CI, there's like so many components. So even though you're a monolith, there's systems around it which enable the monolith. A CDN perhaps, maybe? I mean, that has its own concerns, and then how do you encode that knowledge? And I think that's where you had a very good blog post, "Fundamentals and deployment", that made you think about those things.

**Lars Wikman:** Yeah, I think that was one I was influenced by your conversation with Kelsey Hightower about, right?

**Gerhard Lazu:** That's the one, yeah.

**Lars Wikman:** You just want to bring up that you've spoken to Kelsey, that's what you want to do... \[laughs\]

**Gerhard Lazu:** No, no, no, because I think... I'm trying to get to the readme, and there's something that you wrote, which I really liked; you wrote "Human-scale deployments." And I think that's a very good way of putting it. Because even though the system is complex, it's not crazy complex. A human, a normal human can understand it, and a normal human can operate it. You don't need a team of humans to run this service.

**Lars Wikman:** Yeah. That's generally what I aim for. Some people really, really get excited about trying to solve problems at scale. I really, really don't like what I see of systems at scale. All in all, it tends to be sort of a big challenge of making layers upon layers upon layers of people, and tech, and bureaucracy interact in a somewhat useful way. And there are certain things you cannot do at a small scale.

For example, the post office system, or the power grid - there has to be large-scale coordination in place, and then there also needs to be a lot of smaller systems that play nicely within that larger one. But I'm not interested in solving like a 100-engineer or a 200-engineer problem, in general. I like small teams, I like small organizations, and I trust smaller organizations more. There's a lot of idealism in what I do, and I also optimize for my own enjoyment, which is why I'm not at like a FAANG, or whatever. I don't think I could be bothered to pass those interviews anyway, but... I'm looking for things that I think can work at a particular scale.

And sometimes small teams can run large things. For example, WhatsApp is a pretty good example of that. Now, I bet they had a lot of orchestration going on, because they had to, because they were at an immense scale. But they also did a lot of things that are not commonly done. For example, \[unintelligible 00:29:29.23\] code updates all the time. So I think there are atypical ways of doing almost anything, and you can make it work, and you can probably make it efficient. And I don't think you can find sort of a competitive advantage compared to other more general-purpose organizations. Choosing Kubernetes today is probably not a competitive advantage, because it's so common. Doing well with Kubernetes, and sort of having a good org, and a good team, and all of that - that's a competitive advantage compared to companies that are doing Kubernetes poorly. But almost everyone is doing Kubernetes, so I guess there's no advantage to be found there.

\[30:12\] It's a little bit like -- I consider Elixir a competitive advantage for many companies, or a potential, at least, competitive advantage, compared to, for example, all the companies that run Java. You cannot win a competitive advantage by choosing Java, because that is not an outlier; it has no opinion, it is the most general choice. So there's not a lot of advantage you can glean there. But if you go sort of off the beaten path a bit, either because you go sort of "Oh, we're going to own all these details ourselves", or "We're just not going to bother doing half the work that everyone else considers critical." There's advantages to be found there.

For example, Apple likes to ship half-finished features and services... "No, no. We just removed a lot of buttons, and it's so simple, and so straightforward." Yes, but you could also add some options, so it's more flexible. But they don't. And I think that's part of their plan for sort of shipping more things, even though they're an incredibly large organization.

If you make decisions, and you sort of take chances and go in particular directions, I think that's where you can find interesting things. I don't have what I consider a complete plan for my operations. I don't have all the tools figured out that I would like to. I've got some recommendations for some nice tools for sort of picking up WebHooks and just running commands off of it... It was like "Oh, this is written in Go. It's going to be one binary. I could set it up with systemd, and it would run there." That could probably be what picks up my final artifact from CICD and puts it on there, and then I have some scripts then to manage the deployment. But I don't have a final idea that I'm like "This. This is how it has to be done." And right now, often it's done manually, for my personal needs, because that's good enough. I script the most annoying parts.

**Gerhard Lazu:** Would you use something like fly.io for your own stuff?

**Lars Wikman:** Sure. I wrote a newsletter just recently about opposing ideas. I can find cloud deployments and sort of the whole cloud-native space interesting, but also be more attracted to bare metal, dedicated server, keep it as simple and lean as possible. And I can't do both. I can never do both. I can try both, but I can't do both in the same thing and make any kind of reasonable progress. I can only go in one direction at once.

And similarly, if I'm launching a business venture, like if I'm building a product, there are different schools. It's sort of, "Oh, do you do the whole biggest camp thing, and like build a really thoughtful product, and you host it very carefully, and you run it in this particular way, and you design it very deeply, and you think about it a lot?" A lot of Mac software is sort of like that as well, where it seems like this has thoroughly worked. And then there's the other side, where it's like "No, launch first. Build the product later."

**Gerhard Lazu:** \[laughs\] Okay...

**Lars Wikman:** And if I was going for "I want to launch fast", I would probably pick Fly right now, for that kind of launch, because they feel like pretty much the new Heroku in that regard. I don't think they have quite as polished a system as Heroku, but they also are a lot more featureful than Heroku was. So they are making slightly different trade-offs. But that's sort of where I would pick them probably, where my concern is to get the product out more than exploring something technical about deployment, because I know enough about Fly deployments to just do one.

**Gerhard Lazu:** \[34:11\] And if you were to explore, what would you pick?

**Lars Wikman:** I have what I consider to be an art project I would like to try... And I think this one would be bare metal, but it could also be done in sort of an elastic-cloudy way. But that would be exploring Erlang hot code updates. I would like to build a system that has no persistent data store; as I mentioned, an art project, not a production type of relied-upon project...

**Gerhard Lazu:** Yeah... Reality has data. Data is a pain to manage.

**Lars Wikman:** But the thing is, I want data in the system. I want the system to be incredibly stateful, and I want people to join, and contribute, and everyone just have to deal with the fact that there is data in the system, and that mistakes cost. Content, data... It would be an interesting way of building something Twitter-like, or sort of fediverse style, where the system is up as long as it's up, and if we really screw it up, everything's gone. That's something I would like to explore, partially just because I want to figure out how hard is it really to do the hot code updates thing... Because everyone says, "Oh, don't go there. Don't go there. It's terrible."

**Gerhard Lazu:** Yeah.

**Lars Wikman:** But of course, it's a very interesting thing.

**Gerhard Lazu:** You just need a lot of discipline. You just need a lot of discipline. You have to write those transformations. "How do I go from this state to the new state?" And it's not just putting the new thing out there, it's like the transformations of whatever is running, it needs to migrate. The function calls, the message passing; all that stuff needs to be accounted for.

**Lars Wikman:** Yeah. You've done a decent amount of that...

**Gerhard Lazu:** Actually, no.

**Lars Wikman:** Okay...

**Gerhard Lazu:** But I worked with someone that did. I think this was episode nine, Jean-Sébastien Pedron, we talked about release engineering, and I think in that context he shared - maybe; I don't remember whether we recorded this, but he was saying how he used to work on a team where they did use Erlang, and they did do hot code reloads, and it just required discipline. Because without that, it's like not writing the database migrations. Or writing poor database migrations, that for example you can't roll them back. If you screw up, that's it. You're done for. Now, obviously, the data in transit is very different to data which is persistent in a database. But still, at scale, you have a lot of data flowing through the system. And that's why it's easier to drain the nodes, and then start provisioning at the new capacity, especially if everything works as expected. And then you have the canary model, and then you scale out, and then you have like a transition period where you have two systems running effectively; it's a longer blue/green. But even then, draining things can take a really long time. So how long do you want your updates to take? If you have a lot of data flowing through the system, it can be a while. Then you have different strategies, and you can get creative anyway. So it's not an easy problem, and if the system is small enough for it not to need it, then don't have it. Don't have hot code reloads.

**Lars Wikman:** This sort of pins down some of the reasons I don't want to go into the whole Kubernetes land, and also why I'm probably never going to be doing hot code updates for a real project. Usually, you can just keep it simple, a lot simpler than sort of the recommended practices, perhaps; or recommended at scale. That's the tricky thing. It's like at a particular scale - yes, you should automate all the things, you should have tooling for everything... People should not be able to just poke about, and set custom things up as one-offs. That's not how things should run at large scale. But in many cases -- maybe your application can be down while you're doing an update. Maybe that doesn't matter at all.

\[38:07\] Most applications I've built have had times in the day when no one is using them, because people go to sleep... And they've been national; so they've been limited to one country. And it's like "Okay, yeah, maybe we call some downtime for some person that's currently in Thailand and wanted to check something." Limited scope, limited impact.

And I think one of the reasons why we generally do sort of a high-availability approach, and like blue/green deploys, and all that, is that that is near the level of comfortable trade-off. It's not that hard to keep the system up while performing an update, if sort of all of your state is source of truth in a single database anyway, and all of that.

**Gerhard Lazu:** Yeah. Yeah. I know for me - and you've seen the first episode of this year, where we've been talking about Talos OS and the experiment which I'm running with it, is I'm choosing a different starting point. And I have been doing packages enough, and updating packages, and things getting messed up, and all sorts of issues, operational issues of that nature, where I'm choosing to have a different starting point. I'm choosing to have an API. I'm choosing to have external CTL or control tools that you run CLIs that you run, and they interact with the system, rather than you being on the system and performing actions which are almost like one-offs. Now, that does not remove the need to have good, clear documentation about how things fit together. And that's something that we changed recently, where even like for Changelog we have a new infrastructure MD document in the repo, which explains how all the pieces fit together, what the pieces are... And again that has no automation. It's literally text, some diagrams, and some links, so that anyone can understand that.

And then there's also the contributing MD, which we've added things around how to set up everything locally, so that you can do development. No automation, like no Docker, nothing like that. Just the plain description of what the components are... "This is how you would install them manually, on a Mac. And by the way, as a Linux user, please contribute your way of doing it. But here is the manual way." And then how we choose to automate that is a tangent to the actual thing.

So going back to that, do you have something similar that describes how your systems are set up manually? What are the components? How do they interact? What to do, where...?

**Lars Wikman:** My last efforts towards something like that was when I was trying to sort of "This is how I want to set up all of them." And then the idea was mostly like "Oh, Bash scripts are pretty close to just the documentation itself."

**Gerhard Lazu:** That's what I thought of makefiles, by the way. I changed my mind... \[laughs\]

**Lars Wikman:** Someone came on the show and changed your mind.

**Gerhard Lazu:** Exactly. Yeah, he connected a couple of dots. Also, I've been running them long enough to understand the trade-offs which I'm making, so it's a combination of things.

**Lars Wikman:** That's the tricky bit, I think... Because to me, if something is implemented in an Elixir app, so the app sort of manages itself - that's easy to read for me, that's easy to reason about. I know how Elixir apps work. Bash scripts, I'm okay with; makefiles, I have a hard time reading. They don't flow like typical scripts do. And then there's like - oh, trying to get started with k3s and sort of reading the YAML required... Ooph. It's just something that, if you're doing it day in day out, you have no real problems with; that's absolutely learnable. But building with the tools you know is probably what I'd recommend most people do. It's like "Oh, you're in the JavaScript ecosystem. Learn how to do WebPack." I don't know how people deploy things in JavaScript land... It's like, throw it on Vercel, or something. I don't know.

\[42:25\] When I was in the Python ecosystem, it was like "Oh, I want to talk to a server." Well, Ansible is actually written in Python, so there's some synergies there. I don't get super-confused when some Ansible package breaks. It's like, "Yeah, yeah, Pip... Let's Pip. Just Pip things." And similarly, when I need to talk to a server, Fabric is a decent way of doing that in the Python space.

And if you're doing Go and you're not into-cloud native, I don't know what you do, because it seems like there's tons of tooling for everything written in Go, but it's all for the cloud-native space. But I think staying pretty close to whatever culture you're in, or whatever your comfort zone is, is a decent way of keeping things understandable. But when you need to transmit the knowledge, it's like, can you write it down? I think it's better if there is an implementation in the language of the system, than if there's like "Oh, and here we have this entirely separate language that is only used for the deployment bits", because most people won't be poking the deployment bits all the time. That's actually a project that Saša Jurić of Erlang and Elixir fame explored a bit, trying to build the CI/CD tooling in Elixir.

**Gerhard Lazu:** Interesting. Do you remember the name?

**Lars Wikman:** I think the project is called CI, under his GitHub, but I don't think it has continued. I think he just ran out of bandwidth, and it potentially became apparent as well...

**Gerhard Lazu:** Yeah. That changes things a lot, for sure. Okay.

**Lars Wikman:** That's actually one of the reasons I got curious about what you were saying about Dagger, and having sort of this base support for building SDKs for different languages... Because I would like to write Elixir for my CI/CD.

**Gerhard Lazu:** Interesting. Okay.

**Lars Wikman:** Because I'm very proficient in Elixir, so...

**Gerhard Lazu:** Yeah. I think there's something really interesting there, because you're right, you need to have an interface that you're comfortable with, and I don't think YAML is it. I don't think YAML -- well, I mean, we just make do with it, and that requires... It really is a requirement, a declarative system. Because if you try to program in YAML - which, by the way, you can; you should never do that, but you can... It'll be a very different experience.

So YAML - great for declaring a state of the world, but then there's all sorts of transformations that need to happen, all sorts of functions need to be called at different points in time. That YAML basically has to be reconciled into something useful, which is what Kubernetes is, in a nutshell. Okay, I'm oversimplifying it, but you tell it what you want it to do, and as if by magic, it does it. And I understand the reluctance to trust that magic; because if it breaks - and sometimes it does - what the hell do you do? Like, I told it what to do, and it didn't do it, so... What happens now?

**Lars Wikman:** And if my job was managing a complex system day in, day out, and not mostly developing the system, if I could spend most of my time on the operations part, then Kubernetes might also make more sense, because then that's a tool that gives me a lot of capabilities, and I can spend my time learning to be very proficient in that. And eventually, I might run into a project where it makes sense for me to just learn Kubernetes. And after that, I might be one of those people that just, like, "Oh, I need to set up a static page blog. I'll do that with Kubernetes. Home Lab! Here we go!" But for now, I really like --

**Gerhard Lazu:** \[unintelligible 00:46:15.23\]

**Lars Wikman:** \[46:19\] It all boils down to what I'm comfortable with. Like, I've done Linux since I was a teenager, so I know how to do Linux.

**Gerhard Lazu:** What about systemd? Are you okay with systemd?

**Lars Wikman:** I'm getting okay with systemd.

**Gerhard Lazu:** \[laughs\] I know... That's such a hard thing... runit, please. Can I get runit back? That was my favorite supervisor. It was so simple. That was like the pinnacle of supervisors for Linux systems. And then systemd came along.

**Lars Wikman:** It seems very capable, I'll say that. And perhaps in ways that would be hard to replicate with like in .d files, and scripting all that on your own. It seems very capable.

**Gerhard Lazu:** My systemd is your Kubernetes. Not gonna happen though... \[laughs\]

**Lars Wikman:** Yeah... But, I mean, systemd under Kubernetes makes very little sense, I think.

**Gerhard Lazu:** Yep.

**Lars Wikman:** It's like, no, your containers do not need systemd.

**Gerhard Lazu:** And there you have it. I wanted to avoid systemd so badly, that I switched to Kubernetes... \[laughs\] Because I was shocked by all the horrors that would happen in systemd. And good luck figuring out those units...

**Lars Wikman:** You wanted systemd at a multimachine scale. That's what you wanted.

**Gerhard Lazu:** Exactly, yeah. Exactly.

**Lars Wikman:** Have you poked around with other non-Linux operating systems, like the BSDs, and things?

**Gerhard Lazu:** Yeah... I used to run FreeBSD for the best part of the last decade. It's interesting. Jails were interesting. Solaris zones - I only worked on a project for maybe three or six months that was using it. They seemed very complex, solaris zones, like from the outside. There was like a lot of stuff that was like "Why do we need to do this?" And then containers came along, and that just basically solved a lot of those issues \[unintelligible 00:48:03.17\] Linux. Cgroups, and containers, and then obviously Kubernetes, so scheduling...

To be honest, I understand the appeal of using something that you're comfortable with. Something that you're like on a trajectory, and you've been on that trajectory for a really long time. You mentioned Linux - it does most of what you need. Of course, some parts are not perfect, and you're not happy with, but is there any system that you're completely happy with? Not really. There's always like little things which are annoying. But with time, you get to live with them, and then everything is okay. So why would you change something that's working well for you?

**Lars Wikman:** Yeah. And for me, that's sort of not really a question, because I always explore new things. I don't really ever fix, like "This is how I do things." I do that for a project, for a time, like "Okay, this is how WE do things." That doesn't mean that's how I do things. I do those things in that context. But whenever I'm starting a new project, I probably have a new idea about how I want to deploy it. I try to stay close to the previous one, just so I can keep reusing some of the tools, I guess. But overall, it's like, I want to figure out new things, I want to learn new things, I want to try things, and regret them. Otherwise I don't learn.

One reason I asked about the BSDs is I've gotten some really good, fun input about operational stuff from one person that reads my newsletter, and he works on FreeBSD, so he contributes to FreeBSD, and I think he works on CouchDB as well. It might be someone you should have on the show, DCH Dave Cottlehuber. I hope I said that right. Because I believe he runs a ton of operational stuff for people. I think last time I spoke to him he also mentioned that one of his recent projects was saving a company from Kubernetes.

**Gerhard Lazu:** \[50:06\] Interesting.

**Lars Wikman:** So that could be an interesting conversation...

**Gerhard Lazu:** Interesting, yeah.

**Lars Wikman:** And I know he's super-comfortable with all of the networking that I rarely touch; he's done sort of operations at a scale I've never had to. And he chooses FreeBSD. I think one of the reasons is that it's simpler in many ways than Linux. I get that impression from people that choose the BSDs, that it's generally more understandable. I poked a few BSDs in my teens, and they were more well structured, I think, overall, and the tooling was generally more annoying. It's in many ways similar to whenever you go off the beaten path, it's like "Yep, here you've got to learn things."

**Gerhard Lazu:** Yep. CSH - Oh, my goodness me. I mean, that thing is just -- like the shell, the default shell on the FreeBSD systems that I was using... And it's just behaving in an unexpected way for someone that's familiar with Bash, or ZSH, or even Fish.

**Lars Wikman:** Yeah. I think going off the beaten path is good and useful, but I think it also adds up... So if you spend all of your time and effort way off the beaten path, you're gonna get yourself in trouble. Or you're gonna build absolutely brilliant systems that no one else can work with.

**Gerhard Lazu:** That's the problem, isn't it? Works of art, as you mentioned. It's a work of art. It's amazing, but no one knows about

it. NixOS, and PureScript, and Haskell all the way...

**Gerhard Lazu:** Yup. OCaml, don't forget about that. And a couple others. Zig...

**Lars Wikman:** It's like Fortran, where it needs to go fast...

**Gerhard Lazu:** Yeah. With a bit of COBOL to keep everything together. As we prepare to wrap this up, Lars, any one takeaway that you would like our listeners to have from our conversation?

**Lars Wikman:** I think don't worry too much about sort of the popular tooling right now. Use something that you know that you can make work, and mind how many new things you introduce... Because whenever you bring in new things, you are challenging yourself, and you probably should challenge yourself on a regular basis, but don't do all the challenges at the same time.

**Gerhard Lazu:** Excellent. Well, thank you very much for today. This was good. There's one more year that goes by, that we have similar conversations... And I'm very curious to see what happens next time.

**Lars Wikman:** Let's see if I change...

**Gerhard Lazu:** Yeah, exactly. Or if I change. It has happened... Until next time, Lars. Thank you.

**Lars Wikman:** Thanks for having me.
